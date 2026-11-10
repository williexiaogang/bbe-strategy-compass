const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = vm.createContext({ console, TextEncoder, TextDecoder, btoa, atob, URL });
for (const file of ['strategy-data.js','strategy-rules.js','strategy-session.js','strategy-five-duals.js','strategy-five-duals-extreme.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
const R = vm.runInContext('CompassRules',context);
const sets = vm.runInContext('FIVE_DUAL_EXTREME_SETS',context);
const plain = value => JSON.parse(JSON.stringify(value));
function choose(state,names) { for (const name of names) assert.equal(R.toggle(state,name),'',name); }
function shadowBuild() {
  const state=R.empty();
  assert.equal(R.inherit(state,0,'影子冰刺','dash'),'');
  choose(state,['衝刺影子','影子反沖','多重影子','傳承技黑洞']);
  return state;
}

test('double-ended inherited activation requires both ends even when confirmed in imported data',()=>{
  const state=shadowBuild();
  assert.match(R.inherit(state,0,'影子冰刺','dash',true),/召喚冰刺/);
  const raw=plain(R.serialize(state));raw.inherited[0].confirmed=true;
  assert.equal(R.activeInherited(R.restore(raw).state).length,0);
  choose(state,['召喚冰刺']);
  assert.equal(R.inherit(state,0,'影子冰刺','dash',true),'');
  assert.equal(R.activeInherited(state).length,1);
});

test('a red acquired before inherited activation survives activation, reload, code and undo',()=>{
  const state=shadowBuild();
  assert.equal(R.acquire(state,'概率影爆','dash'),'');
  assert.ok(state.acquired[0].activationOrder.length);
  choose(state,['召喚冰刺']);
  assert.equal(R.inherit(state,0,'影子冰刺','dash',true),'');
  const raw=plain(R.serialize(state)), restored=R.restore(raw);
  assert.equal(restored.warnings.length,0);
  assert.deepEqual(plain(R.serialize(restored.state)),raw);
  const S=vm.runInContext('CompassSession',context);
  const code=S.encode(raw);
  assert.deepEqual(plain(R.serialize(R.restore(S.decode(code).build).state)),raw);
  const history=S.history();history.reset(raw);
  choose(state,['召喚冰刺']);
  assert.equal(state.inherited[0].confirmed,false);
  assert.equal(state.acquired.length,1);
  history.record(R.serialize(state));
  assert.deepEqual(plain(R.serialize(R.restore(history.undo()).state)),raw);
});

test('already satisfied activation blocks the reverse order regardless of the confirmation toggle',()=>{
  for(const confirmed of [false,true]) {
    const state=shadowBuild();choose(state,['召喚冰刺']);
    if(confirmed)assert.equal(R.inherit(state,0,'影子冰刺','dash',true),'');
    assert.match(R.acquire(state,'概率影爆','dash'),/此槽已有/);
    assert.equal(state.acquired.length,0);
  }
});

test('forged acquisition witnesses and ordinary same-slot duplicates remain invalid',()=>{
  const state=shadowBuild();choose(state,['召喚冰刺']);
  const raw=plain(R.serialize(state));
  for(const activationOrder of [true,[],['衝刺影子'],['多重影子','衝刺影子'],[...state.selected]]) {
    raw.acquired=[{name:'概率影爆',slot:'dash',activationOrder}];
    const result=R.restore(raw);
    assert.equal(result.state.acquired.length,0,JSON.stringify(activationOrder));
    assert.ok(result.warnings.length);
  }
  const ordinary=shadowBuild();assert.equal(R.acquire(ordinary,'概率影爆','dash'),'');
  assert.match(R.acquire(ordinary,'影子穿刺','dash'),/尚未|此槽已有/);
});

test('six-red event plans replay legally, preserve both same-slot targets and respect both modes',()=>{
  for(const mode of ['normal','extreme']) {
    const state=R.empty();state.gameMode=mode;
    assert.equal(R.inherit(state,0,'影子冰刺','dash'),'');
    const catalog=mode==='extreme'?sets:vm.runInContext('FIVE_DUAL_SETS',context);
    const plans=catalog.map(set=>R.multiRedPlan(state,set)).filter(p=>p?.set.duals.length>5);
    if(mode==='normal') { assert.equal(plans.length,0);continue; }
    assert.ok(plans.length>0);
    for(const plan of plans) {
      const build=R.restore(R.serialize(state)).state;
      const before=JSON.stringify(R.serialize(build));
      assert.equal(before,JSON.stringify(R.serialize(state)));
      assert.equal(plan.set.targets.filter(x=>x.slot==='dash').length,2);
      for(const action of plan.actions) {
        if(action.type==='select')assert.equal(R.toggle(build,action.name),'',action.name);
        if(action.type==='acquire')assert.equal(R.acquire(build,action.name,action.slot),'',action.name);
        if(action.type==='confirm')assert.equal(R.inherit(build,build.inherited.findIndex(x=>x?.name===action.name),action.name,action.slot,true),'');
        const result=R.restore(R.serialize(build));
        assert.equal(result.warnings.length,0,action.name);
        assert.deepEqual(plain(R.serialize(result.state)),plain(R.serialize(build)));
      }
      assert.equal(new Set([...build.acquired,...R.activeInherited(build)].map(x=>x.name)).size,6);
    }
  }
});

test('ice-sword inherited activation includes its cold branch and the sword',()=>{
  const state=R.empty();assert.equal(R.inherit(state,0,'冰擊化劍','skill'),'');
  choose(state,['技能寒冷','寒氣爆發']);
  assert.match(R.inherit(state,0,'冰擊化劍','skill',true),/玄冰劍刃/);
  choose(state,['玄冰劍刃']);
  assert.equal(R.inherit(state,0,'冰擊化劍','skill',true),'');
});
