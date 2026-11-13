const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const context = vm.createContext({ TextEncoder, TextDecoder, btoa, atob, URL });
for (const file of ['strategy-data.js', 'strategy-legacy.js', 'player-catalogue.js', 'strategy-mind-data.js']) {
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
}
const { M, L, C, characters } = vm.runInContext('({ M: CompassMindData, L: CompassLegacy, C: CompassCatalogue, characters: CompassData.CHARACTERS })', context);

test('mind catalogue preserves the researched pool and category counts', () => {
  assert.equal(M.effects.length, 90);
  assert.equal(M.effects.filter(effect => effect.pool === 'normal').length, 54);
  assert.equal(M.effects.filter(effect => effect.pool === 'black').length, 11);
  assert.equal(M.effects.filter(effect => effect.pool === 'covenant').length, 13);
  assert.equal(M.effects.filter(effect => effect.pool === 'trial').length, 12);
  assert.equal(M.obligations.length, 11);
  assert.equal(M.crystals.length, 38);
  for (const [category, count] of [['damage', 21], ['survival', 13], ['mechanics', 20]]) {
    assert.equal(M.effects.filter(effect => effect.pool === 'normal' && effect.category === category).length, count);
  }
});

test('effect, obligation and route ids are unique and complete', () => {
  for (const entries of [M.effects, M.obligations, M.routes]) {
    const ids = entries.map(entry => entry.id);
    assert.equal(new Set(ids).size, ids.length);
  }
  for (const effect of M.effects) {
    assert.ok(M.pools.some(pool => pool.id === effect.pool), effect.id);
    assert.ok(effect.name && effect.en, effect.id);
    assert.ok(effect.desc || effect.challenge && effect.reward, effect.id);
    if (effect.pool === 'normal') assert.ok(M.categories.some(category => category.id === effect.category), effect.id);
    if (effect.pool === 'black') assert.ok(Number.isFinite(effect.cost) && effect.cost >= 0, effect.id);
  }
});

test('every character has a mind route and every route resolves to real effects and its own legacy goal', () => {
  for (const character of characters) assert.ok(M.routesFor(character.id).length, character.id);
  for (const route of M.routes) {
    const legacy = L.find(route.legacyId);
    assert.ok(legacy, route.id);
    assert.equal(legacy.character, route.character, route.id);
    assert.ok(route.steps.length >= 3, route.id);
    assert.ok(route.risk, route.id);
    for (const id of [...route.core, ...route.special]) assert.ok(M.effect(id), `${route.id}: ${id}`);
    assert.notEqual(route.evidence, '實測通過');
  }
});

test('the mind view is loaded before the app and does not alter the damage model', () => {
  const html = fs.readFileSync(path.join(__dirname, '..', 'strategy-compass.html'), 'utf8');
  assert.ok(html.includes('data-action="show-view" data-value="mind"'));
  assert.ok(html.includes('id="mind"'));
  assert.ok(html.indexOf('strategy-mind-data.js') < html.indexOf('strategy-mind.js'));
  assert.ok(html.indexOf('strategy-mind.js') < html.indexOf('strategy-app.js'));
  const damage = fs.readFileSync(path.join(__dirname, '..', 'strategy-dps.js'), 'utf8');
  assert.ok(!damage.includes('CompassMindData'));
});

test('mind search accepts simplified Chinese and English across effect pools', () => {
  const cat = M.effect('nine-lives-cat');
  assert.ok(C.matches('九命猫', cat.name, cat.en));
  assert.ok(C.matches('Nine Lives', cat.name, cat.en));
  const strike = M.effect('strike-training');
  assert.ok(C.matches('打击训练', strike.name, strike.en));
  const crystal = M.crystals.find(item => item.name === '機率提升·光');
  assert.ok(C.matches('机率提升', crystal.name, crystal.desc));
});
