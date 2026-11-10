const {test}=require('node:test'),assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const c=vm.createContext({console,TextEncoder,TextDecoder,btoa,atob,URL});
for(const file of ['strategy-data.js','strategy-rules.js','strategy-session.js','strategy-damage-data.js','strategy-damage.js','strategy-dps.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),c);
const {D,R,S}=vm.runInContext('({D:CompassDps,R:CompassRules,S:CompassSession})',c);
const close=(a,b)=>assert.ok(Math.abs(a-b)<0.00001,`${a} != ${b}`);
const select=(state,names)=>names.forEach(name=>assert.equal(R.toggle(state,name),'',name));

test('Steam trial exposes one-opportunity-per-second assumptions instead of treating hits as measured DPS',()=>{
  const state=R.empty();select(state,['衝刺落雷']);
  const result=D.trial(state,R);
  close(result.total,610);assert.equal(result.assumedCount,1);
  assert.equal(result.rows[0].rate,1);assert.equal(result.rows[0].hits,1);
});

test('rates, effective hits, DoT uptime and separate global multiplier buckets produce the stated scenario',()=>{
  const state=R.empty();select(state,['衝刺落雷','普攻燃燒']);
  state.damageScenario={rates:{'n:衝刺落雷':2},hits:{'n:衝刺落雷':3},uptime:50,tacticBonus:50,finalBonus:20,compoundBonus:10};
  const result=D.trial(state,R);
  close(result.total,7504.2);close(result.multiplier,1.98);
  assert.equal(result.assumedCount,0);
});

test('mine cooldown caps a requested rate and responds to selected cooldown reduction',()=>{
  const state=R.empty();select(state,['放置地雷']);state.damageScenario={rates:{'n:放置地雷':20}};
  const first=D.trial(state,R);close(first.total,57);close(first.rows[0].rate,0.1);
  select(state,['地雷強化','高效布雷']);
  const next=D.trial(state,R);close(next.rows[0].rate,1/6);close(next.total,843.6/6);
});

test('attack lightwave uses entered attack damage and its own upgrades once, with charging cap',()=>{
  const state=R.empty();select(state,['普攻光波','光波強化','增強光波']);
  assert.equal(D.trial(state,R).total,null);
  state.damageScenario={attackDamage:100,rates:{'n:普攻光波':10}};
  const result=D.trial(state,R),wave=result.rows.find(row=>row.name==='普攻光波');
  close(wave.value,371.25);close(wave.rate,1/6);close(result.total,61.875);
  assert.ok(!result.unknown.some(row=>row.name==='普攻光波'));
});

test('spear lightwave stays at 1200 even when the trial includes attack lightwave scaling',()=>{
  const state=R.empty();select(state,['普攻光波','光波強化','增強光波','技能光槍']);
  assert.equal(R.inherit(state,0,'光槍光波','skill',true),'');
  state.damageScenario={attackDamage:100};
  const result=D.trial(state,R);
  close(result.rows.find(row=>row.name==='光槍光波').value,1200);
});

test('zero rates and uptime really disable contributions; inactive inheritance and planned reds stay excluded',()=>{
  const state=R.empty();select(state,['衝刺落雷','普攻燃燒']);
  assert.equal(R.inherit(state,0,'地雷火焰','summon',false),'');state.fiveDualGoal='地雷火焰';
  state.damageScenario={rates:{'n:衝刺落雷':0},uptime:0};
  close(D.trial(state,R).total,0);
  assert.ok(!D.trial(state,R).rows.some(row=>row.name==='地雷火焰'));
});

test('mode conflicts suppress a numeric DPS result and partial unknowns remain visible',()=>{
  const state=R.empty();state.gameMode='extreme';select(state,['普攻寒冷','寒氣爆發','聚寒成冰','技能毒環']);
  assert.ok(D.trial(state,R).unknown.some(row=>row.name==='技能毒環'));
  state.gameMode='normal';assert.equal(D.trial(state,R).available,false);assert.equal(D.trial(state,R).total,null);
});

test('scenario normalization rejects unknown effects, invalid numeric values and out-of-range settings',()=>{
  const normalized=R.normalizeDamageScenario({attackDamage:-1,uptime:101,tacticBonus:Infinity,finalBonus:'20',compoundBonus:NaN,
    rates:{'n:衝刺落雷':0,'r:unknown':5,'n:普攻光波':-1},hits:{'n:衝刺落雷':2,'n:unknown':999}});
  assert.equal(normalized.attackDamage,0);assert.equal(normalized.uptime,100);assert.equal(normalized.finalBonus,0);
  assert.deepEqual(JSON.parse(JSON.stringify(normalized.rates)),{'n:衝刺落雷':0});
  assert.deepEqual(JSON.parse(JSON.stringify(normalized.hits)),{'n:衝刺落雷':2});
});

test('scenario settings survive save, portable codes, undo and normal/extreme switches',()=>{
  const state=R.empty();state.damageScenario={attackDamage:123,uptime:75,rates:{'n:衝刺落雷':2},hits:{'n:衝刺落雷':0.5}};
  const saved=R.serialize(state),history=S.history();history.reset(saved);
  state.damageScenario.attackDamage=456;history.record(R.serialize(state));
  assert.equal(R.restore(history.undo()).state.damageScenario.attackDamage,123);
  const restored=R.restore(S.decode(S.encode(saved)).build).state;
  assert.equal(restored.damageScenario.uptime,75);assert.equal(restored.damageScenario.hits['n:衝刺落雷'],0.5);
  R.setGameMode(restored,'extreme');assert.equal(restored.damageScenario.rates['n:衝刺落雷'],2);
  assert.equal(R.restore({}).state.damageScenario.uptime,100);
});

test('multi ice spikes uses quality-dependent extra count and manual hits replace that count',()=>{
  const state=R.empty();select(state,['召喚冰刺','冰刺強化','多重冰刺']);
  let result=D.trial(state,R),spike=result.rows.find(row=>row.name==='召喚冰刺');
  assert.equal(spike.defaultHits,6);close(result.total,2112);
  state.damageQuality=0;result=D.trial(state,R);assert.equal(result.rows[0].defaultHits,3);close(result.total,588);
  state.damageQuality=3;state.damageScenario.hits['n:召喚冰刺']=2;
  result=D.trial(state,R);close(result.total,704);assert.equal(result.rows[0].hitsOverridden,true);
  state.damageScenario.hits['n:召喚冰刺']=0;close(D.trial(state,R).total,0);
  delete state.damageScenario.hits['n:召喚冰刺'];close(D.trial(state,R).total,2112);
});

test('extra mine chance and six shrapnel inherit the mine trigger rather than creating independent damage',()=>{
  const state=R.empty();state.gameMode='extreme';select(state,['放置地雷','額外地雷','地雷濺射']);
  const result=D.trial(state,R),mine=result.rows.find(row=>row.name==='放置地雷'),shrapnel=result.rows.find(row=>row.name==='地雷濺射');
  close(mine.defaultHits,1.8);close(shrapnel.defaultHits,10.8);close(shrapnel.rate,0.1);close(result.total,599.4);
  state.damageScenario.rates['n:放置地雷']=0;close(D.trial(state,R).total,0);
});

test('holy spear count and frequency follow its source; daggers switch to total three, not plus three',()=>{
  const state=R.empty();select(state,['技能光槍','聖光光槍','多重光槍']);
  state.damageScenario.rates['n:技能光槍']=0.25;
  const result=D.trial(state,R),holy=result.rows.find(row=>row.name==='聖光光槍');
  assert.equal(result.rows[0].defaultHits,4);assert.equal(holy.defaultHits,4);close(holy.rate,0.25);
  const dagger=R.empty();select(dagger,['衝刺飛劍','遠程飛劍','多重飛劍']);
  assert.equal(D.trial(dagger,R).rows[0].defaultHits,3);
});

test('orb counts and explicit chance-based shadow and hail counts are not treated as zero utility',()=>{
  const orb=R.empty();select(orb,['環繞電球','大型電球','密集電球']);assert.equal(D.trial(orb,R).rows[0].defaultHits,4);
  const shadow=R.empty();select(shadow,['衝刺影子','影子強化','多重影子']);
  close(D.trial(shadow,R).rows[0].defaultHits,2.8);close(D.trial(shadow,R).total,1302);
  const hail=R.empty();select(hail,['技能冰雹','冰雹頻率']);close(D.trial(hail,R).total,235.6);
});

test('red projectile quantities are used only after confirmed activation',()=>{
  const state=R.empty();select(state,['衝刺落雷']);assert.equal(R.inherit(state,0,'落雷飛刃','dash',false),'');
  assert.ok(!D.trial(state,R).rows.some(row=>row.name==='落雷飛刃'));
  assert.equal(R.inherit(state,0,'落雷飛刃','dash',true),'');
  const blade=D.trial(state,R).rows.find(row=>row.name==='落雷飛刃');assert.equal(blade.defaultHits,3);close(blade.contribution,510);
  const poison=R.empty();select(poison,['衝刺毒彈']);assert.equal(R.inherit(poison,0,'分裂毒彈','dash',true),'');
  const split=D.trial(poison,R).rows.find(row=>row.name==='分裂毒彈');assert.equal(split.defaultHits,2);close(split.contribution,860);
});

test('custom ICD caps rates and removal applies only to the actual owning skill or dash slot',()=>{
  const state=R.empty();select(state,['技能光槍','衝刺落雷']);
  state.damageScenario=R.normalizeDamageScenario({rates:{'n:技能光槍':10,'n:衝刺落雷':10},cooldowns:{'n:技能光槍':2,'n:衝刺落雷':4}});
  const row=name=>D.trial(state,R).rows.find(row=>row.name===name);
  close(row('技能光槍').rate,0.5);close(row('衝刺落雷').rate,0.25);
  state.damageScenario.removeSkillIcd=true;close(row('技能光槍').rate,10);close(row('衝刺落雷').rate,0.25);
  state.damageScenario.removeDashIcd=true;close(row('衝刺落雷').rate,10);
  const fixed=R.empty();select(fixed,['放置地雷','普攻光波']);fixed.damageScenario=R.normalizeDamageScenario({attackDamage:100,
    rates:{'n:放置地雷':100,'n:普攻光波':100},removeSkillIcd:true,removeDashIcd:true});
  const result=D.trial(fixed,R);close(result.rows.find(row=>row.name==='放置地雷').rate,0.1);close(result.rows.find(row=>row.name==='普攻光波').rate,0.2);
});

test('split slime 290 is an opt-in replacement hypothesis, independent of quality and never added twice',()=>{
  const state=R.empty();select(state,['召喚史萊姆','自爆史萊姆','大型史萊姆']);
  const slime=()=>D.trial(state,R).rows.find(row=>row.name==='召喚史萊姆');
  state.damageScenario.splitSlime290=true;close(slime().value,608);
  assert.equal(R.inherit(state,0,'分裂史萊姆','summon',true),'');state.damageScenario.splitSlime290=false;
  close(slime().value,608);assert.ok(D.trial(state,R).unknown.some(row=>row.name==='分裂史萊姆'));
  state.damageScenario.splitSlime290=true;close(slime().value,290);state.damageQuality=0;close(slime().value,290);
  assert.ok(D.trial(state,R).assumptions.length);
  assert.equal(D.trial(state,R).rows.filter(row=>row.name==='召喚史萊姆').length,1);
});

test('ICD and hypothesis settings are validated and survive codes and undo',()=>{
  const state=R.empty();state.damageScenario=R.normalizeDamageScenario({cooldowns:{'n:技能光槍':2,'r:unknown':1,'n:衝刺落雷':-1},removeSkillIcd:true,removeDashIcd:'true',splitSlime290:true});
  assert.deepEqual(JSON.parse(JSON.stringify(state.damageScenario.cooldowns)),{'n:技能光槍':2});
  assert.equal(state.damageScenario.removeDashIcd,false);
  const saved=R.serialize(state),history=S.history();history.reset(saved);
  state.damageScenario.cooldowns={};state.damageScenario.splitSlime290=false;history.record(R.serialize(state));
  const restored=R.restore(history.undo()).state.damageScenario;
  assert.equal(restored.cooldowns['n:技能光槍'],2);assert.equal(restored.splitSlime290,true);
  const portable=R.restore(S.decode(S.encode(saved)).build).state.damageScenario;
  assert.equal(portable.removeSkillIcd,true);assert.equal(portable.cooldowns['n:技能光槍'],2);
  const legacy=R.restore({}).state.damageScenario;assert.deepEqual(JSON.parse(JSON.stringify(legacy.cooldowns)),{});assert.equal(legacy.splitSlime290,false);
});
