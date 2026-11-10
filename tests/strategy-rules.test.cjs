const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = vm.createContext({ console });
for (const file of ['strategy-data.js', 'strategy-rules.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
const R = vm.runInContext('CompassRules', context);
const data = vm.runInContext('CompassData', context);
const plain = value => JSON.parse(JSON.stringify(value));
const select = (state, ...names) => names.forEach(name => assert.equal(R.toggle(state, name), '', name));

test('adjustment previews include dependent removals and leave the real build unchanged', () => {
  const state=R.empty(); select(state,'技能燃燒','持久燃燒','強效燃燒','普攻寒冷','寒氣爆發','冰霜爆破');
  const before=JSON.stringify(R.serialize(state));
  const goal=R.byName.get('火精靈引爆');
  assert.equal(R.plans(state,goal).length,0);
  const options=R.adjustments(state,goal);
  assert.ok(options.length);
  assert.ok(options.every(x=>x.removed.includes('普攻寒冷') && x.removed.includes('冰霜爆破')));
  assert.equal(JSON.stringify(R.serialize(state)),before);
});
test('all displayed adjustment plans replay legally, including occupied red slots', () => {
  const states=[R.empty(),R.empty(),R.empty()];
  select(states[0],'普攻寒冷','寒氣爆發','冰霜爆破','技能燃燒','持久燃燒','強效燃燒');
  assert.equal(R.inherit(states[1],0,'火精靈引爆','basic'), '');
  select(states[2],'技能火彈','集中火彈','多重火彈','普攻燃燒');
  const ready=data.DUALS.find(d=>R.plans(states[2],d).some(p=>!p.steps.length));
  assert.ok(ready);
  const readyPlan=R.plans(states[2],ready).find(p=>!p.steps.length);
  assert.equal(R.acquire(states[2],ready.name,readyPlan.slot),'');
  let previews=0,affectedRecords=0;
  for(const state of states) for(const goal of data.DUALS) for(const option of R.adjustments(state,goal)) {
    const temp=R.restore(R.serialize(state)).state;
    option.removed.forEach(n=>{if(temp.selected.has(n)) assert.equal(R.toggle(temp,n),'');});
    temp.acquired=temp.acquired.filter(x=>!option.records.includes(x.name));
    temp.inherited=temp.inherited.map(x=>x&&option.inherited.includes(x.name)?null:x);
    option.plan.steps.forEach(n=>assert.equal(R.toggle(temp,n),'',`${goal.name}: ${n}`));
    assert.equal(R.acquireReason(temp,goal.name,option.plan.slot),'',goal.name);
    previews++; affectedRecords+=option.records.length+option.inherited.length;
  }
  assert.ok(previews>0); assert.ok(affectedRecords>0);
});
test('source references resolve without promoting legacy catalogue data to verified', () => {
  const ids=new Set(data.SOURCES.map(s=>s.sourceId));
  assert.equal(data.METADATA.gameVersion,null);
  for(const entry of [...data.STRATEGY_DATA,...data.DUALS,...data.CHARACTERS]) {
    assert.ok(entry.sourceIds.every(id=>ids.has(id)));
    assert.equal(entry.confidence,'unverified');
  }
});

test('catalogue references resolve and each dual has an owning base', () => {
  assert.equal(data.STRATEGY_DATA.length, 35);
  assert.equal(data.DUALS.length, 100);
  assert.equal(new Set(data.DUALS.map(d => d.name)).size, 100);
  for (const dual of data.DUALS) {
    for (const name of [...dual.prim, ...dual.sec, ...(dual.need || [])]) assert.ok(R.nodes.has(name), name);
    assert.ok(R.hosts(dual).length, dual.name);
  }
});
test('same slot and same tree cannot hold multiple bases', () => {
  const state = R.empty(); select(state, '普攻燃燒');
  assert.match(R.toggle(state, '技能燃燒'), /同樹/);
  assert.match(R.toggle(state, '普攻寒冷'), /同槽/);
  assert.deepEqual([...state.selected], ['普攻燃燒']);
});
test('tier II alternatives and tier III prerequisites are enforced', () => {
  const state = R.empty(); select(state, '普攻燃燒');
  assert.match(R.toggle(state, '強效燃燒'), /II/);
  select(state, '持久燃燒');
  assert.match(R.toggle(state, '聚火成炎'), /同階/);
  select(state, '強效燃燒');
});
test('cold and slime cannot cross branches', () => {
  const state = R.empty(); select(state, '普攻寒冷', '寒氣爆發');
  assert.match(R.toggle(state, '聚寒成冰'), /同階/);
  assert.match(R.toggle(state, '強力破冰'), /聚寒成冰/);
  select(state, '冰霜爆破', '召喚史萊姆', '長效史萊姆');
  assert.match(R.toggle(state, '大型史萊姆'), /自爆史萊姆/);
  select(state, '極速史萊姆');
});
test('slot-specific upgrades require their actual base', () => {
  const state = R.empty(); select(state, '普攻燃燒', '技能毒環');
  assert.match(R.toggle(state, '火焰漫步'), /衝刺燃燒/);
  assert.match(R.toggle(state, '受擊毒霧'), /普攻淬毒/);
  select(state, '受擊毒環');
});
test('removing a base prunes only its dependent tier II and III', () => {
  const state = R.empty(); select(state, '普攻寒冷', '寒氣爆發', '冰霜爆破', '衝刺落雷');
  select(state, '普攻寒冷');
  assert.deepEqual([...state.selected], ['衝刺落雷']);
});
test('removing tier II removes its tier III', () => {
  const state = R.empty(); select(state, '召喚史萊姆', '長效史萊姆', '極速史萊姆');
  select(state, '長效史萊姆');
  assert.deepEqual([...state.selected], ['召喚史萊姆']);
});
test('matching name conditions never automatically acquires a dual', () => {
  const state = R.empty(); select(state, '技能火彈', '普攻燃燒');
  assert.equal(R.recipeMet(state, R.byName.get('爆燃火彈')), true);
  assert.equal(state.acquired.length, 0);
  assert.match(R.acquire(state, '爆燃火彈', 'skill'), /III/);
  select(state, '火彈強化', '多重火彈');
  assert.equal(R.acquire(state, '爆燃火彈', 'skill'), '');
  assert.deepEqual(plain(state.acquired), [{ name: '爆燃火彈', slot: 'skill' }]);
  select(state, '火彈強化');
  assert.equal(state.acquired.length, 0);
});
test('acquisition uses the real owning slot and prevents normal same-slot doubles', () => {
  const state = R.empty(); select(state, '技能光槍', '光槍強化', '多重光槍', '普攻光波', '衝刺落雷');
  assert.match(R.acquire(state, '光槍光波', 'basic'), /不屬於/);
  assert.equal(R.acquire(state, '光槍光波', 'skill'), '');
  assert.match(R.acquire(state, '光槍落雷', 'skill'), /此槽已有/);
  assert.equal(state.acquired.length, 1);
});
test('inherited entries do not select bases or occupy alternative base slots', () => {
  const state = R.empty(); assert.equal(R.inherit(state, 0, '冰霜脈衝'), '');
  assert.equal(R.activeInherited(state).length, 0);
  assert.deepEqual(plain(R.slotMap(state)), { basic: null, dash: null, skill: null, summon: null, heritage: null });
  assert.match(R.inherit(state, 0, '冰霜脈衝', 'basic', true), /基礎/);
  select(state, '普攻寒冷');
  assert.match(R.inherit(state, 0, '冰霜脈衝', 'basic', true), /分支/);
  select(state, '寒氣爆發');
  assert.equal(R.inherit(state, 0, '冰霜脈衝', 'basic', true), '');
  assert.equal(R.activeInherited(state).length, 1);
  select(state, '普攻寒冷');
  assert.equal(R.activeInherited(state).length, 0);
});
test('inheritance rejects duplicates, unknown names and conflicting red slots', () => {
  const state = R.empty(); assert.equal(R.inherit(state, 0, '冰霜脈衝', 'basic'), '');
  assert.match(R.inherit(state, 1, '冰霜脈衝'), /已經存在/);
  assert.match(R.inherit(state, 1, '冰凍冰錐', 'basic'), /同槽/);
  assert.match(R.inherit(state, 1, '不明紅策'), /未知/);
});
test('planning respects a chosen cold branch and normal red-slot occupancy', () => {
  const state = R.empty(); select(state, '普攻寒冷', '寒氣爆發', '衝刺冰錐');
  assert.equal(R.plans(state, R.byName.get('冰凍冰錐')).length, 0);
  const plan = R.plans(state, R.byName.get('冰錐極寒'))[0];
  assert.ok(plan); assert.ok(plan.steps.includes('隨機冰錐'));
  select(state, ...plan.steps);
  assert.equal(R.acquire(state, '冰錐極寒', 'dash'), '');
  assert.equal(R.plans(state, R.byName.get('影子冰刺')).length, 0);
});
test('every recommendation is a legal next move on a feasible path', () => {
  const state = R.empty(); select(state, '普攻寒冷', '聚寒成冰', '強力破冰');
  for (const recommendation of R.recommendations(state)) {
    assert.equal(R.canSelect(state, recommendation.name), '');
    for (const target of recommendation.targets) {
      const plans = R.plans(state, R.byName.get(target));
      assert.ok(plans.some(plan => R.frontier(state, plan.steps).includes(recommendation.name)));
    }
  }
});
test('save/export/import roundtrip preserves the complete build', () => {
  const state = R.empty(); select(state, '技能火彈', '火彈強化', '多重火彈', '普攻燃燒');
  assert.equal(R.acquire(state, '爆燃火彈', 'skill'), '');
  assert.equal(R.inherit(state, 0, '地雷火焰', 'summon'), '');
  state.slot = 'skill'; state.character = data.CHARACTERS[0].id;
  state.target = '地雷火焰';
  const saved = plain(R.serialize(state));
  const restored = R.restore(saved);
  assert.equal(restored.warnings.length, 0);
  assert.deepEqual(plain(R.serialize(restored.state)), saved);
});
test('legacy migration tolerates order and reports impossible selections', () => {
  const restored = R.restore({ owned: ['強效燃燒', '持久燃燒', '普攻燃燒', '技能燃燒', '不存在'], inherited: ['冰霜脈衝'] });
  assert.equal(restored.warnings.length, 2);
  assert.equal(restored.state.selected.has('強效燃燒'), true);
  assert.equal(restored.state.inherited[0].confirmed, false);
  assert.equal(R.activeInherited(restored.state).length, 0);
});
test('malformed and future backups fail before replacing a build', () => {
  assert.throws(() => R.restore({ selected: 'bad' }), /格式/);
  assert.throws(() => R.restore({ version: 99 }), /版本/);
  assert.throws(() => R.restore(null));
});
