const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = vm.createContext({ console, TextEncoder, TextDecoder, btoa, atob, URL });
for (const file of ['strategy-data.js', 'strategy-rules.js', 'strategy-session.js', 'strategy-five-duals.js',
  'strategy-five-duals-extreme.js', 'strategy-five-dual-scores.js', 'strategy-five-dual-scores-extreme.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
const { R, S, normal, extreme, scores } = vm.runInContext('({R:CompassRules,S:CompassSession,normal:FIVE_DUAL_SETS,extreme:FIVE_DUAL_EXTREME_SETS,scores:FIVE_DUAL_EXTREME_SCORES})',context);
const select = (state, names) => names.forEach(n => assert.equal(R.toggle(state,n),'',n));
const key = set => [...set.duals].sort((a,b)=>a.localeCompare(b,'zh')).join('|');

test('normal permits one II, extreme permits two, and both permit only one III', () => {
  for (const mode of ['normal','extreme']) {
    const state=R.empty();R.setGameMode(state,mode);
    select(state,['技能火彈','集中火彈']);
    if(mode==='normal') assert.match(R.toggle(state,'火彈強化'),/同階/);
    else { select(state,['火彈強化']);assert.match(R.toggle(state,'火彈彈射'),/同階/); }
    select(state,['多重火彈']);
  }
  const state=R.empty();R.setGameMode(state,'extreme');
  select(state,['普攻寒冷','寒氣爆發','聚寒成冰','冰霜爆破']);
  assert.match(R.toggle(state,'強力破冰'),/同階/);
});

test('switching to normal preserves selections and red records and blocks new recommendations', () => {
  const state=R.empty();R.setGameMode(state,'extreme');
  select(state,['技能火彈','集中火彈','火彈強化','多重火彈','普攻燃燒']);
  assert.equal(R.acquire(state,'爆燃火彈','skill'),'');
  const selected=[...state.selected];
  assert.equal(R.setGameMode(state,'normal'),'');
  assert.deepEqual([...state.selected],selected);
  assert.equal(state.acquired.length,1);
  assert.ok(R.modeConflicts(state).length);
  assert.equal(R.plans(state,R.byName.get('爆燃火彈')).length,0);
  const restored=R.restore(R.serialize(state));
  assert.deepEqual([...restored.state.selected].sort(),[...state.selected].sort());
  assert.equal(restored.state.acquired.length,1);
  assert.equal(restored.state.gameMode,'normal');
  assert.ok(restored.warnings.length);
  select(restored.state,['火彈強化']);
  assert.equal(R.modeConflicts(restored.state).length,0);
  assert.equal(restored.state.acquired.length,1);
});

test('mode and conflicting build survive share codes and undo; old backups default to normal', () => {
  const state=R.empty();R.setGameMode(state,'extreme');
  select(state,['普攻寒冷','寒氣爆發','聚寒成冰']);
  const history=S.history();history.reset(R.serialize(state));
  R.setGameMode(state,'normal');history.record(R.serialize(state));
  const restored=R.restore(S.decode(S.encode(R.serialize(state))).build).state;
  assert.equal(restored.gameMode,'normal');assert.equal(restored.selected.size,3);
  assert.equal(R.restore(history.undo()).state.gameMode,'extreme');
  assert.equal(R.restore({selected:['普攻寒冷']}).state.gameMode,'normal');
});

test('resolving one of several mode conflicts does not erase unrelated red records', () => {
  const state=R.empty();state.gameMode='extreme';
  select(state,['技能火彈','集中火彈','火彈強化','多重火彈','普攻燃燒','持久燃燒','聚火成炎']);
  assert.equal(R.acquire(state,'爆燃火彈','skill'),'');
  R.setGameMode(state,'normal');select(state,['聚火成炎']);
  assert.ok(R.modeConflicts(state).length);
  assert.equal(state.acquired.length,1);
});

test('early same-slot replacement is atomic, locks at II and rechecks inherited activation', () => {
  const state=R.empty();select(state,['技能光槍']);
  assert.equal(R.inherit(state,0,'光槍光波','skill',true),'');
  assert.ok(R.replacement(state,'技能寒冷'));
  assert.equal(R.replaceBase(state,'技能寒冷'),'');
  assert.ok(!state.selected.has('技能光槍') && state.selected.has('技能寒冷'));
  assert.equal(state.inherited[0].confirmed,false);
  select(state,['寒氣爆發']);
  const before=JSON.stringify(R.serialize(state));
  assert.equal(R.replacement(state,'技能撕裂'),null);
  assert.match(R.replaceBase(state,'技能撕裂'),/II/);
  assert.equal(JSON.stringify(R.serialize(state)),before);
});

test('same-tree bases cannot be duplicated via replacement into another slot', () => {
  const state=R.empty();select(state,['普攻寒冷','技能光槍']);
  assert.equal(R.replacement(state,'技能寒冷'),null);
  assert.ok(R.replaceBase(state,'技能寒冷'));
});

test('early off-build I can be replaced on a five-red route, but a locked II cannot', () => {
  const state=R.empty();select(state,['技能寒冷']);
  const set=normal[0],plan=R.fiveDualPlan(state,set);
  assert.ok(plan && plan.replacements.some(x=>x.from==='技能寒冷' && x.to===set.bases.skill));
  for(const name of plan.steps) {
    const reason=R.replacement(state,name)?R.replaceBase(state,name):R.toggle(state,name);
    assert.equal(reason,'',name);
  }
  for(const [slot,name] of Object.entries(set.slotAssignment))assert.equal(R.acquire(state,name,slot),'');
  const locked=R.empty();select(locked,['技能寒冷','寒氣爆發']);
  assert.equal(R.fiveDualPlan(locked,set),null);
});

test('extreme catalogue adds legal routes and every route has matching independent scores', () => {
  assert.ok(extreme.length>normal.length);
  const extremeKeys=new Set(extreme.map(key));
  assert.ok(normal.every(set=>extremeKeys.has(key(set))), 'extreme must retain all normal five-red combinations');
  assert.equal(Object.keys(scores).length,extreme.length);
  for(const set of extreme) {
    const state=R.empty();state.gameMode='extreme';
    const plan=R.fiveDualPlan(state,set);assert.ok(plan,key(set));
    assert.ok(scores[key(set)] && scores[key(set)].tiers.length===4);
    select(state,plan.steps);
    for(const [slot,name] of Object.entries(set.slotAssignment))assert.equal(R.acquire(state,name,slot),'',name);
  }
  const added=extreme.find(set=>!R.fiveDualPlan(R.empty(),set));
  assert.ok(added,'at least one route must require extreme II capacity');
});
