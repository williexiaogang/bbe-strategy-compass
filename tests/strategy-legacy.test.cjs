const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const context=vm.createContext({TextEncoder,TextDecoder,btoa,atob,URL});
for(const file of ['strategy-data.js','strategy-legacy.js','strategy-rules.js','strategy-session.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
const {L,R,S,data}=vm.runInContext('({L:CompassLegacy,R:CompassRules,S:CompassSession,data:CompassData})',context);
const plain=x=>JSON.parse(JSON.stringify(x));

test('every character has a candidate; each candidate inherits two distinct other characters',()=>{
  const ids=new Set();
  for(const c of data.CHARACTERS) assert.ok(L.forCharacter(c.id).length,c.id);
  for(const b of L.builds){
    assert.ok(!ids.has(b.id),b.id);ids.add(b.id);
    assert.equal(b.legacies.length,2);
    assert.equal(new Set(b.legacies.map(x=>x[0])).size,2);
    for(const [id,skill] of b.legacies){assert.notEqual(id,b.character);assert.ok(L.donors[id].skills[skill]);}
    assert.ok(b.requirements.length>0);
    assert.ok(b.tags.every(t=>L.filters.some(x=>x[0]===t)));
    assert.notEqual(b.evidence,'實測通過');
  }
});
test('restoration rejects stale goals, invalid milestones and forged skill selections',()=>{
  const raw={id:'rachel-moon',checks:[0,0,1,500,-1,'2'],skills:[8,0],unlocked:['true',true]};
  assert.equal(L.normalize(raw,'jin'),null);
  assert.equal(L.normalize({id:'missing'},'rachel'),null);
  const goal=L.normalize(raw,'rachel');
  assert.deepEqual(plain(goal.checks),[0,1]);
  assert.deepEqual(plain(goal.skills),[1,0]);
  assert.deepEqual(plain(goal.unlocked),[false,true]);
  assert.equal(L.status(goal).ready,false);
});
test('checking all potentials does not bypass second skill unlock requirements',()=>{
  const goal=L.createGoal('rachel-moon');goal.checks=[0,1,2];
  assert.equal(L.status(goal).missingSkills,2);assert.equal(L.status(goal).ready,false);
  goal.unlocked=[true,true];assert.equal(L.status(goal).ready,true);
});
test('goal, skill alternatives, unlock confirmations and checklist survive share, reload and undo',()=>{
  const state=R.empty();state.character='rachel';state.legacyBuild=L.createGoal('rachel-moon');
  state.legacyBuild.checks=[1];state.legacyBuild.skills=[1,0];state.legacyBuild.unlocked=[true,false];
  const saved=plain(R.serialize(state));
  const restored=R.restore(S.decode(S.encode(saved)).build);
  assert.deepEqual(plain(R.serialize(restored.state)),saved);
  assert.equal(restored.warnings.length,0);
  const history=S.history();history.reset(saved);state.legacyBuild=null;history.record(R.serialize(state));
  assert.deepEqual(plain(R.restore(history.undo()).state.legacyBuild),saved.legacyBuild);
  assert.equal(state.selected.size,0);assert.equal(state.acquired.length,0);
  assert.equal(state.inherited.filter(Boolean).length,0);
});
test('old backups load without a goal, mismatched goal import warns and preserves tactics',()=>{
  assert.equal(R.restore({selected:[]}).state.legacyBuild,null);
  const state=R.empty();R.toggle(state,'技能寒冷');
  const saved=R.serialize(state);saved.character='jin';saved.legacyBuild=L.createGoal('rachel-moon');
  const result=R.restore(saved);
  assert.equal(result.state.legacyBuild,null);assert.equal(result.warnings.length,1);
  assert.ok(result.state.selected.has('技能寒冷'));
});
