const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = vm.createContext({console,TextEncoder,TextDecoder,btoa,atob,URL});
for (const file of ['strategy-data.js','strategy-rules.js','strategy-session.js','strategy-five-duals.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
const {R,S,sets} = vm.runInContext('({R:CompassRules,S:CompassSession,sets:FIVE_DUAL_SETS})',context);
const json = state => JSON.stringify(R.serialize(state));
const select = (state,...names) => names.forEach(name=>assert.equal(R.toggle(state,name),'',name));

test('carried II and III activate only after actual prerequisites and deactivate when those are removed',()=>{
  const state=R.empty();
  assert.equal(R.inherit(state,0,'強效燃燒','basic'),'');
  assert.equal(state.selected.size,0);
  select(state,'普攻燃燒');
  assert.ok(!state.selected.has('強效燃燒'));
  assert.match(R.canSelect(state,'強效燃燒',true),/II/);
  const raw=R.serialize(state);raw.selected.push('強效燃燒');raw.inherited[0].confirmed=true;
  const old=R.restore(raw);assert.ok(old.warnings.length);assert.ok(!old.state.selected.has('強效燃燒'));
  select(state,'持久燃燒');assert.ok(state.selected.has('強效燃燒'));assert.equal(state.inherited[0].confirmed,true);
  select(state,'持久燃燒');assert.ok(!state.selected.has('強效燃燒'));assert.equal(state.inherited[0].confirmed,false);
  assert.equal(R.inherit(state,1,'持久燃燒','basic'),'');
  assert.ok(state.selected.has('持久燃燒')&&state.selected.has('強效燃燒'));
  select(state,'普攻燃燒');assert.ok(!state.selected.has('持久燃燒')&&!state.selected.has('強效燃燒'));
});

test('carried III respects branch-specific II and automatic activation is included in route planning',()=>{
  const state=R.empty();R.inherit(state,0,'大型史萊姆','summon');
  select(state,'召喚史萊姆','長效史萊姆');assert.ok(!state.selected.has('大型史萊姆'));
  select(state,'長效史萊姆','自爆史萊姆');assert.ok(state.selected.has('大型史萊姆'));
  const burn=R.empty();R.inherit(burn,0,'強效燃燒','basic');select(burn,'普攻燃燒');
  const plan=R.plans(burn,R.byName.get('燃燒爆彈'))[0];assert.ok(plan);
  for(const name of plan.steps){if(!burn.selected.has(name))select(burn,name);}
  assert.equal(R.acquireReason(burn,'燃燒爆彈',plan.slot),'');
  assert.ok(burn.selected.has('強效燃燒'));
});

test('normal inheritance fills its own tier, preserves red slots and roundtrips through code and undo',()=>{
  const state=R.empty(),history=S.history(); history.reset(R.serialize(state));
  assert.equal(R.inherit(state,0,'普攻燃燒'),'');
  assert.equal(state.inherited[0].slot,'basic');
  assert.equal(state.selected.size,1);
  assert.equal(R.inherit(state,0,'普攻燃燒','basic',true),'');
  assert.ok(state.selected.has('普攻燃燒'));
  assert.equal(R.inherit(state,1,'強效燃燒','basic'),'');
  assert.ok(!state.selected.has('強效燃燒'));
  assert.match(R.inheritanceReason(state,state.inherited[1]),/II/);
  assert.equal(R.activeInherited(state).length,0,'normal inheritance never counts as red');
  assert.equal(R.activeInherited(state,true).length,1);
  select(state,'持久燃燒');
  assert.ok(state.selected.has('強效燃燒'));
  assert.equal(R.activeInherited(state,true).length,2);
  const candidate=[...R.byName.values()].map(d=>({d,plan:R.plans(state,d).find(p=>p.slot==='basic')})).find(x=>x.plan);
  assert.ok(candidate);
  assert.equal(R.equipRed(state,candidate.d.name,'basic',candidate.plan.steps),'','normal inheritance leaves the red slot free');
  history.record(R.serialize(state));
  const restored=R.restore(S.decode(S.encode(R.serialize(state))).build);
  assert.deepEqual(Array.from(restored.warnings),[]);
  assert.equal(json(restored.state),json(state));
  assert.ok(sets.some(set=>R.fiveDualPlan(state,set)),'nonred inheritance does not invalidate every red plan');
  assert.equal(R.inherit(state,1,''),'');
  assert.ok(!state.selected.has('強效燃燒'));
  history.record(R.serialize(state));
  assert.equal(json(R.restore(history.undo()).state),json(restored.state));
});

test('inherited upgrades wait for the correct base and cannot bypass base or tier conflicts',()=>{
  const state=R.empty();
  assert.equal(R.inherit(state,0,'持久燃燒','basic'),'');
  assert.match(R.inherit(state,0,'持久燃燒','basic',true),/基礎/);
  select(state,'技能燃燒');
  assert.match(R.inherit(state,0,'持久燃燒','basic',true),/基礎/);
  assert.equal(R.inherit(state,0,'持久燃燒','skill',true),'');
  assert.equal(R.inherit(state,1,'普攻燃燒'),'');
  assert.match(R.inherit(state,1,'普攻燃燒','basic',true),/同樹/);
  const alternate=R.nodes.get('持久燃燒').tree.ii.find(n=>n!=='持久燃燒');
  assert.equal(R.inherit(state,2,alternate,'skill'),'');
  assert.ok(R.inherit(state,2,alternate,'skill',true));
  assert.equal(R.toggle(state,'技能燃燒'),'');
  assert.equal(state.inherited[0].confirmed,false);
  assert.ok(!state.selected.has('持久燃燒'));
});

test('an invalid inherited host cannot import a III-tier upgrade without its ordinary prerequisites',()=>{
  const result=R.restore({selected:['普攻燃燒','強效燃燒'],inherited:[{name:'強效燃燒',slot:'skill',confirmed:true}]});
  assert.ok(result.warnings.length);
  assert.ok(!result.state.selected.has('強效燃燒'));
  assert.equal(result.state.inherited[0].confirmed,false);
  const state=R.empty();
  assert.equal(R.inherit(state,0,'普攻燃燒','basic',true),'');
  assert.equal(R.inherit(state,0,'爆燃火彈'),'');
  assert.ok(!state.selected.has('普攻燃燒'),'changing the carry removes its granted base');
});

test('poison bases are alternatives and either can satisfy the red recipe independently',()=>{
  for (const name of ['普攻淬毒','技能毒環']) {
    const state=R.empty();select(state,name);
    const other=name==='普攻淬毒'?'技能毒環':'普攻淬毒';
    assert.match(R.canSelect(state,other),/同樹/);
    assert.equal(R.inherit(state,0,other),'');
    assert.match(R.inherit(state,0,other,R.nodes.get(other).slot,true),/同樹/);
    const dual=R.byName.get('中毒毒彈');
    const plan=R.plans(state,dual)[0]; assert.ok(plan);
    assert.ok(!plan.steps.includes(other));
    assert.equal(R.equipRed(state,dual.name,plan.slot,plan.steps),'');
    assert.equal(state.acquired[0].name,dual.name);
    assert.ok(!state.selected.has(other));
  }
});

test('red fill replays the displayed route atomically and rejects stale or incomplete routes',()=>{
  const state=R.empty(),dual=R.byName.get('光槍冰錐');
  const plan=R.plans(state,dual)[0];assert.ok(plan);
  const before=json(state);
  assert.ok(R.equipRed(state,dual.name,plan.slot,[]));
  assert.equal(json(state),before);
  assert.ok(R.equipRed(state,dual.name,plan.slot,[...plan.steps,'不存在的策略']));
  assert.equal(json(state),before);
  assert.equal(R.equipRed(state,dual.name,plan.slot,plan.steps),'');
  assert.equal(state.acquired.length,1);
  assert.equal(R.acquireReason(state,dual.name,plan.slot),'');
  assert.equal(json(R.restore(R.serialize(state)).state),json(state));
  const blocked=R.empty();select(blocked,'技能燃燒','持久燃燒');
  const snapshot=json(blocked);
  assert.ok(R.equipRed(blocked,dual.name,plan.slot,plan.steps));
  assert.equal(json(blocked),snapshot);
});
