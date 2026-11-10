const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

const controls = ['compact', 'full'].map(value => ({
  dataset: { value },
  setAttribute(name, value) { this[name] = value; }
}));
const elements = new Map();
const storage = new Map();
const context = vm.createContext({
  console,
  elements,
  controls,
  localStorage: {
    getItem: key => storage.get(key) || null,
    setItem: (key, value) => storage.set(key, value)
  }
});
for (const file of ['strategy-data.js', 'strategy-rules.js', 'strategy-five-duals.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
vm.runInContext(`const R=CompassRules,DUALS=CompassData.DUALS,TIER_LABEL=['','I','II','III'];
  let state=R.empty(),currentCharacter=null,currentFiveDualGoal=null,currentCharacterGoal=null;
  const esc=String,slotLabel=String,button=(label)=>'<button>'+label+'</button>';`, context);
vm.runInContext(`const document={body:{dataset:{}},getElementById(id){if(!elements.has(id))elements.set(id,{innerHTML:''});return elements.get(id);},
  querySelectorAll(selector){return selector==='[data-action="play-view"]'?controls:[];}};`, context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'strategy-offers.js'), 'utf8'), context);

test('compact and full play views update controls and persist only the display preference', () => {
  assert.equal(vm.runInContext('playView', context), 'compact');
  vm.runInContext("setPlayView('full')", context);
  assert.equal(vm.runInContext('document.body.dataset.playView', context), 'full');
  assert.equal(storage.get('bbe_play_view'), 'full');
  assert.deepEqual(controls.map(control => control['aria-pressed']), ['false', 'true']);
  vm.runInContext("setPlayView('compact');setPlayView('invalid')", context);
  assert.equal(vm.runInContext('document.body.dataset.playView', context), 'compact');
  assert.deepEqual(controls.map(control => control['aria-pressed']), ['true', 'false']);
});

test('offer advice identifies a choice that advances the current five-red plan', () => {
  const result = vm.runInContext(`(()=>{
    state=R.empty();currentFiveDualGoal=null;currentCharacterGoal=null;
    const set=FIVE_DUAL_SETS[0],plan=R.fiveDualPlan(state,set),name=plan.steps[0];
    currentFiveDualGoal={set,...plan};offerChoices=[name,'',''];renderOfferComparison();
    return {name,advice:document.getElementById('offerAdvice').innerHTML,html:document.getElementById('offerComparison').innerHTML,remaining:plan.missing-1};
  })()`, context);
  assert.ok(result.advice.includes(`建議選「${result.name}」`));
  assert.ok(result.advice.includes(`選後還差 ${result.remaining} 條前置`));
  assert.ok(result.html.includes('offer-card recommended'));
  assert.ok(result.html.includes(`aria-label="選這個：${result.name}"`));
});

test('offer advice says when a valid choice does not advance the current plan', () => {
  const html = vm.runInContext(`(()=>{
    state=R.empty();const set=FIVE_DUAL_SETS[0],plan=R.fiveDualPlan(state,set);currentFiveDualGoal={set,...plan};
    const other=[...R.nodes.keys()].find(name=>!plan.steps.includes(name)&&!R.canSelect(state,name));
    offerChoices=[plan.steps[0],other,''];renderOfferComparison();
    return document.getElementById('offerComparison').innerHTML;
  })()`, context);
  assert.ok(html.includes('不推進目前目標，請比較紅數與剩餘前置'));
});
