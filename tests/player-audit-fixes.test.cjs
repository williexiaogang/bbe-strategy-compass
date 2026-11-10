const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const c=vm.createContext({console,TextEncoder,TextDecoder,btoa,atob,URL});
for(const file of ['strategy-data.js','tactics-descriptions.js','player-catalogue.js','strategy-rules.js','strategy-session.js','strategy-damage-data.js','strategy-damage.js','strategy-dps.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),c);
const {R,S,C,D}=vm.runInContext('({R:CompassRules,S:CompassSession,C:CompassCatalogue,D:CompassDamage})',c);
const select=(s,...names)=>names.forEach(n=>assert.equal(R.toggle(s,n),'',n));
const plain=value=>JSON.parse(JSON.stringify(value));

test('burn inheritance requires the other end and cannot raise damage without it',()=>{
  const s=R.empty();select(s,'技能火彈');
  const before=D.estimate(s,R).reference;
  assert.match(R.inherit(s,0,'爆燃火彈','skill',true),/燃燒/);
  assert.match(R.inherit(s,0,'爆燃火彈','skill',true,true),/燃燒/,'manual observation cannot bypass a known missing condition');
  assert.equal(D.estimate(s,R).reference,before);
  select(s,'普攻燃燒');
  assert.equal(R.inherit(s,0,'爆燃火彈','skill',true),'');
  assert.equal(R.activeInherited(s).length,1);
  const sprite=R.empty();select(sprite,'火精靈助戰');
  assert.match(R.inherit(sprite,0,'火精靈引爆','basic',true),/燃燒/);
});

test('unknown inheritance requires an explicit observed record which survives portable storage',()=>{
  const d=[...R.byName.values()].find(d=>!R.inheritedRules[d.name]);
  const host=R.hosts(d)[0],slot=R.nodes.get(host).slot,s=R.empty();select(s,host);
  assert.equal(R.inherit(s,0,d.name,slot),'');
  assert.match(R.inheritanceReason(s,s.inherited[0]),/待核對/);
  assert.match(R.inherit(s,0,d.name,slot,true),/待核對/);
  assert.equal(R.activeInherited(s).length,0);
  const raw=plain(R.serialize(s));raw.inherited[0].confirmed=true;
  const legacy=R.restore(raw);assert.ok(legacy.warnings.length);
  assert.equal(R.activeInherited(legacy.state).length,0);
  assert.equal(R.inherit(s,0,d.name,slot,true,true),'');
  const restored=R.restore(S.decode(S.encode(R.serialize(s))).build);
  assert.deepEqual([...restored.warnings],[]);
  assert.equal(restored.state.inherited[0].observed,true);
  assert.equal(R.activeInherited(restored.state).length,1);
  assert.equal(R.inherit(s,0,d.name,slot,false,true),'');
  assert.match(R.inheritanceReason(s,s.inherited[0]),/待核對/,'turning an observed record off must not create a predicted activation rule');
  assert.equal(R.activeInherited(s).length,0);
});

test('poison upgrades enforce cross-tree bases in ordinary selection, inheritance, pruning and import',()=>{
  for(const [base,upgrade] of [['衝刺毒彈','烈性毒彈'],['技能毒液','烈性毒液']]){
    const s=R.empty();select(s,base);
    assert.match(R.canSelect(s,upgrade),/額外前置/);
    assert.match(R.inherit(s,0,upgrade,R.nodes.get(base).slot,true),/額外前置/);
    select(s,'普攻淬毒',upgrade);
    assert.equal(R.toggle(s,'普攻淬毒'),'');
    assert.ok(!s.selected.has(upgrade));
    assert.ok(s.selected.has(base));
    const restored=R.restore({selected:[base,upgrade]});
    assert.ok(restored.warnings.length&&!restored.state.selected.has(upgrade));
  }
});

test('planning does not change ownership or damage and survives codes, conflicting choices and undo',()=>{
  const s=R.empty(),d=R.byName.get('光槍冰錐'),p=R.plans(s,d)[0];
  const before=plain(R.serialize(s)),damage=D.estimate(s,R).reference,history=S.history();history.reset(before);
  assert.equal(R.planRed(s,d.name,p.slot,p.steps),'');
  assert.equal(s.selected.size,0);assert.equal(s.acquired.length,0);
  assert.equal(D.estimate(s,R).reference,damage);
  history.record(R.serialize(s));
  const restored=R.restore(S.decode(S.encode(R.serialize(s))).build).state;
  assert.deepEqual(plain(restored.plannedReds),[{name:d.name,slot:p.slot}]);
  assert.equal(restored.acquired.length,0);
  assert.deepEqual(plain(R.restore(history.undo()).state.plannedReds),[]);
  select(restored,'技能燃燒','持久燃燒');
  const blocked=R.restore(R.serialize(restored)).state;
  assert.equal(blocked.plannedReds.length,1,'a blocked plan remains visible for review');
  assert.ok(R.equipRed(blocked,d.name,p.slot,p.steps));assert.equal(blocked.acquired.length,0);
});

test('two body sources reject the protagonist and duplicate donors and persist alongside their two slots',()=>{
  const s=R.empty();s.character='hakumen';
  assert.ok(R.setLegacyBody(s,0,'hakumen'));
  assert.equal(R.setLegacyBody(s,0,'noel'),'');
  assert.ok(R.setLegacyBody(s,1,'noel'));
  assert.equal(R.setLegacyBody(s,1,'jin'),'');
  assert.equal(R.inherit(s,0,'地雷火焰','summon'),'');
  const restored=R.restore(S.decode(S.encode(R.serialize(s))).build).state;
  assert.deepEqual(plain(restored.legacyBodies),['noel','jin']);
  assert.equal(restored.inherited[0].name,'地雷火焰');
  assert.equal(restored.inherited.length,4);
});

test('ordinary catalogue effects cover every node and search accepts simplified names, aliases and English',()=>{
  for(const name of R.nodes.keys())assert.ok(C.tactic(name)?.descZh,name);
  assert.ok(C.matches('普攻中毒','普攻淬毒'));
  assert.ok(C.matches('技能毒环','技能毒環'));
  assert.ok(C.matches('触手坍缩','觸手坍塌'));
  for(const [query,name] of [['技能燃烧','技能燃燒'],['召唤史莱姆','召喚史萊姆'],['精准冰刺','精準冰刺'],['黑洞扩张','黑洞擴張'],['多重飞剑','多重飛劍'],['光波传递','光波傳遞']])assert.ok(C.matches(query,name),query);
  assert.ok(C.matches('skill poison',C.tactic('技能毒環').en));
  assert.ok(C.tactic('普攻淬毒').descZh.length>15);
});

test('build envelopes carry independent rule and catalogue versions',()=>{
  assert.ok(S.metadata.rulesVersion&&S.metadata.dataVersion);
  const code=S.encode(R.serialize(R.empty()));assert.deepEqual([...S.decode(code).warnings],[]);
  const legacy=JSON.parse(Buffer.from(code.slice(5),'base64url').toString('utf8'));
  delete legacy.rulesVersion;
  const old='BBE1.'+Buffer.from(JSON.stringify(legacy)).toString('base64url');
  assert.ok(S.decode(old).warnings.some(x=>x.includes('規則版本')));
});
