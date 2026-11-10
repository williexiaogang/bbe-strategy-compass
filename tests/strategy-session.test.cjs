const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const context = vm.createContext({ TextEncoder, TextDecoder, btoa, atob, URL });
for (const file of ['strategy-data.js', 'strategy-rules.js', 'strategy-session.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
const R = vm.runInContext('CompassRules', context);
const S = vm.runInContext('CompassSession', context);
const plain = value => JSON.parse(JSON.stringify(value));
function completeBuild() {
  const state=R.empty();
  for (const name of ['技能火彈','火彈強化','多重火彈','普攻燃燒','放置地雷']) assert.equal(R.toggle(state,name),'');
  assert.equal(R.acquire(state,'爆燃火彈','skill'),'');
  assert.equal(R.inherit(state,0,'地雷火焰','summon',true),'');
  state.target='地雷火焰';state.character='hakumen';state.slot='skill';
  return state;
}
test('undo restores dependent strategies, acquired records and confirmed inheritance',()=>{
  const state=completeBuild(),before=plain(R.serialize(state)),history=S.history();
  history.reset(before);
  R.toggle(state,'技能火彈');history.record(R.serialize(state));
  assert.equal(state.acquired.length,0);
  const result=R.restore(history.undo());
  assert.deepEqual(plain(R.serialize(result.state)),before);
});
test('reset and replacement import can be undone without losing earlier history',()=>{
  const history=S.history(),state=completeBuild(),saved=plain(R.serialize(state));
  history.reset(R.serialize(R.empty()));history.record(saved);
  history.record(R.serialize(R.empty()));
  assert.deepEqual(plain(history.undo()),saved);
  const replacement=R.empty();R.toggle(replacement,'衝刺落雷');history.record(R.serialize(replacement));
  assert.deepEqual(plain(history.undo()),saved);
  assert.deepEqual(plain(history.undo()),plain(R.serialize(R.empty())));
  assert.equal(history.undo(),null);
});
test('navigation and rejected actions do not consume undo steps; snapshots are independent',()=>{
  const history=S.history(),state=R.empty();history.reset(R.serialize(state));
  state.slot='skill';history.record(R.serialize(state));assert.equal(history.canUndo,false);
  R.toggle(state,'技能火彈');history.record(R.serialize(state));
  assert.notEqual(R.toggle(state,'技能寒冷'),'');history.record(R.serialize(state));
  assert.equal(history.undo().selected.length,0);assert.equal(history.canUndo,false);
  assert.equal(state.selected.size,1);
});
test('portable code and web link preserve the complete validated build',()=>{
  const saved=plain(R.serialize(completeBuild())),code=S.encode(saved);
  assert.match(code,/^BBE1\./);
  assert.deepEqual(plain(R.serialize(R.restore(S.decode(code).build).state)),saved);
  assert.equal(S.shareLink('file:///X:/Game/index.html',code),null);
  const link=S.shareLink('https://example.com/strategy.html?char=jin',code);
  assert.ok(link.startsWith('https://example.com/strategy.html#b=BBE1.'));
  assert.deepEqual(plain(S.decode(link).build),saved);
  assert.deepEqual(plain(S.decode('#b='+code).build),saved);
});
test('legacy links still load while damaged and foreign codes are rejected',()=>{
  const old=Buffer.from(JSON.stringify({v:3,s:[],c:'jin',t:'爆燃火彈'})).toString('base64url');
  assert.equal(S.decode(old).build.character,'jin');
  for(const code of ['','BBE1.not_json','x'.repeat(100001)])assert.throws(()=>S.decode(code));
  const code=payload=>'BBE1.'+btoa(JSON.stringify(payload)).replace(/=/g,'');
  assert.throws(()=>S.decode(code({schemaVersion:1,gameId:'other-game',build:{selected:[]}})));
  assert.throws(()=>S.decode(code({schemaVersion:99,...S.metadata,build:{selected:[]}})));
  assert.equal(S.decode(code({schemaVersion:1,...S.metadata,dataVersion:'older',build:{selected:[]}})).warnings.length,1);
});
