const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = vm.createContext({ console });
for (const file of ['strategy-data.js', 'strategy-damage-data.js', 'strategy-damage.js', 'strategy-five-duals.js', 'strategy-five-dual-scores.js','strategy-five-duals-extreme.js','strategy-five-dual-scores-extreme.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
const SETS = vm.runInContext('FIVE_DUAL_SETS', context);
const SCORES = vm.runInContext('FIVE_DUAL_SCORES', context);
const DAMAGE = vm.runInContext('CompassDamage', context);

const setKey = duals => duals.slice().sort((a, b) => a.localeCompare(b, 'zh')).join('|');

test('scores cover every FIVE_DUAL_SETS entry exactly', () => {
  assert.equal(SETS.length, 332);
  assert.equal(Object.keys(SCORES).length, SETS.length);
  for (const s of SETS) {
    const key = setKey(s.duals);
    assert.ok(SCORES[key], `missing score for ${key}`);
  }
});

test('every score has four non-negative integer tiers, tiers[3] >= tiers[0]', () => {
  for (const [key, s] of Object.entries(SCORES)) {
    assert.equal(s.tiers.length, 4, key);
    for (const t of s.tiers) {
      assert.ok(Number.isInteger(t), `${key}: tier ${t} not an integer`);
      assert.ok(t >= 0, `${key}: negative tier ${t}`);
    }
    if (s.tiers[3] < s.tiers[0]) console.log('檔位遞減例外：', key, s.tiers);
    assert.ok(s.tiers[3] >= s.tiers[0], `${key}: tiers[3] < tiers[0]`);
    for (const f of ['redOnly', 'basicBoost', 'strategyBoost']) {
      assert.ok(Number.isFinite(s[f]) && s[f] >= 0, `${key}: bad ${f}`);
    }
    assert.equal(typeof s.basicTag, 'boolean', key);
  }
});

test('shared freezing prerequisite is counted once at each quality', () => {
  const key = setKey(['光槍冰錐', '光槍落雷', '冰凍冰錐', '無盡冰刺', '落雷光槍']);
  const set=SETS.find(s=>setKey(s.duals)===key);
  const names=[...Object.values(set.bases),...Object.values(set.steps).flat()];
  assert.ok(names.filter(n=>n==='聚寒成冰').length>1);
  assert.deepEqual([...SCORES[key].tiers],[0,1,2,3].map(q=>DAMAGE.evaluate(names,set.duals,q).reference));
  const unique=[...new Set(names)];
  assert.equal(DAMAGE.evaluate(names,set.duals,3).reference,DAMAGE.evaluate(unique,set.duals,3).reference);
});

test('typed-model highest-quality leader reflects scoped upgrades instead of the retired flat sum', () => {
  const leader = SETS.slice().sort((a, b) => SCORES[setKey(b.duals)].tiers[3] - SCORES[setKey(a.duals)].tiers[3])[0];
  assert.equal(SCORES[setKey(leader.duals)].tiers[3], 14859);
  assert.ok(leader.duals.includes('電球落雷'));
});

test('every generated normal score matches the current loadout damage model',()=>{
  for(const set of SETS){
    const names=[...new Set([...Object.values(set.bases),...Object.values(set.steps).flat()])];
    const actual=SCORES[setKey(set.duals)];
    assert.deepEqual([...actual.tiers],[0,1,2,3].map(q=>DAMAGE.evaluate(names,set.duals,q).reference));
  }
});

test('every generated extreme score matches the same typed model',()=>{
  const {sets,scores}=vm.runInContext('({sets:FIVE_DUAL_EXTREME_SETS,scores:FIVE_DUAL_EXTREME_SCORES})',context);
  for(const set of sets){
    const names=[...new Set([...Object.values(set.bases),...Object.values(set.steps).flat()])];
    assert.deepEqual([...scores[setKey(set.duals)].tiers],[0,1,2,3].map(q=>DAMAGE.evaluate(names,set.duals,q).reference));
  }
});

test('independent lightwave damage is excluded from direct attack boost', () => {
  const lightwave = SETS.filter(s => s.bases.basic === '普攻光波');
  assert.ok(lightwave.length > 0);
  for (const set of lightwave) assert.equal(SCORES[setKey(set.duals)].basicTag, false);
});

test('basicBoost leaderboard is non-empty', () => {
  const tagged = Object.values(SCORES).filter(s => s.basicTag);
  assert.ok(tagged.length > 0);
  assert.ok(tagged.every(s => s.basicBoost > 0));
  assert.ok(Object.values(SCORES).filter(s => !s.basicTag).every(s => s.basicBoost === 0));
});
