const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const c=vm.createContext({console,TextEncoder,TextDecoder,btoa,atob,URL});
for(const file of ['strategy-data.js','strategy-rules.js','strategy-session.js','strategy-damage-data.js','strategy-damage.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),c);
const {D,R,S,data}=vm.runInContext('({D:CompassDamage,R:CompassRules,S:CompassSession,data:CompassDamageData})',c);
const close=(a,b)=>assert.ok(Math.abs(a-b)<0.001,`${a} != ${b}`);

test('typed damage data covers all catalogue nodes and reds without inventing quality values',()=>{
  assert.equal(Object.keys(data.nodes).length,R.nodes.size);
  assert.equal(Object.keys(data.duals).length,R.byName.size);
  assert.equal(data.nodes['玄冰巨劍'].values[0],600);
  assert.equal(data.nodes['玄冰巨劍'].values[3],null);
});

test('burn and half-second venom ticks are separated from hit damage',()=>{
  const result=D.evaluate(['普攻燃燒','技能毒液'],[],3);
  close(result.hit,0);close(result.perSecond,260+170/0.5);
  assert.equal(result.rows.length,2);
});

test('flat rend and hail additions use damage values rather than percentages or duration',()=>{
  close(D.evaluate(['普攻撕裂','撕裂強化'],[],3).hit,220);
  close(D.evaluate(['技能冰雹','持久冰雹'],[],3).hit,260);
});

test('mine growth per second and shadow mark count are not confused with damage per second',()=>{
  const mine=D.evaluate(['放置地雷','地雷強化'],[],3);
  close(mine.hit,570*1.48);close(mine.perSecond,0);
  close(D.evaluate(['普攻影標','影標解限'],[],3).hit,0);
  const hail=D.evaluate(['技能冰雹','持久冰雹','大型冰雹'],[],3);
  close(hail.hit,190+70+160);
});

test('same-effect percentage upgrades add within their multiplier and never boost other trees',()=>{
  const result=D.evaluate(['技能火彈','火彈強化','多重火彈','普攻燃燒'],[],3);
  close(result.hit,280*(1+0.6+0.2));close(result.perSecond,260);
});

test('burn duration upgrades do not multiply the separate flamewalker trail',()=>{
  const result=D.evaluate(['衝刺燃燒','持久燃燒','火焰漫步'],[],3);
  close(result.perSecond,150*1.6+240);
});

test('frost explosion boosts frost burst only, not the separate freezing branch',()=>{
  const result=D.evaluate(['普攻寒冷','寒氣爆發','聚寒成冰','冰霜爆破'],[],3);
  close(result.hit,980*2.17+1600);
  close(D.evaluate(['普攻寒冷','聚寒成冰','強力破冰'],[],3).hit,3000);
});

test('conditional red modifiers retain their target instead of boosting the whole loadout',()=>{
  const result=D.evaluate(['技能火彈','火彈強化','普攻燃燒'],['爆燃火彈'],3);
  close(result.hit,280*(1+0.6+1));close(result.perSecond,260);
  assert.ok(result.notes.some(n=>n.includes('條件成立')));
});

test('known chance is weighted, and independent orb stages are separate rows',()=>{
  close(D.evaluate([],['概率影爆'],3).hit,350);
  close(D.evaluate([],['火精靈引爆'],3).hit,575);
  const orb=D.evaluate([],['電球發射'],3);
  assert.deepEqual(Array.from(orb.rows,r=>r.value),[400,1000]);
});

test('fixed spear lightwave is 1200 and is not scaled using attack lightwave percentages',()=>{
  const result=D.evaluate(['普攻光波','光波強化','增強光波'],['光槍光波'],3);
  close(result.hit,1200);
  assert.ok(result.unknown.some(n=>n.name==='普攻光波'));
  close(D.evaluate([],['冰刺標記'],3).hit,190);
  close(D.evaluate([],['毒液殘留'],3).perSecond,320);
});

test('conversion does not add the replaced ordinary attack twice',()=>{
  const result=D.evaluate(['召喚刃環'],['召喚迴旋刃'],3);
  close(result.hit,540);assert.equal(result.rows.length,1);
  close(D.evaluate(['衝刺影子'],['影子穿刺'],3).hit,340);
});

test('missing qualities and attack-dependent effects stay visibly incomplete',()=>{
  const result=D.evaluate(['玄冰劍刃','玄冰劍氣','玄冰巨劍','普攻光波'],[],3);
  close(result.hit,2050);
  for(const name of ['玄冰劍氣','玄冰巨劍','普攻光波'])assert.ok(result.unknown.some(n=>n.name===name));
});

test('actual estimate ignores planned reds and inactive inheritance',()=>{
  const state=R.empty();R.toggle(state,'傳承技火環');
  const before=D.estimate(state,R).perSecond;
  state.fiveDualGoal='火環燃燒';
  assert.equal(D.estimate(state,R).perSecond,before);
  assert.equal(R.inherit(state,0,'火環燃燒','heritage',false),'');
  close(D.estimate(state,R).perSecond,0);
  assert.equal(R.inherit(state,0,'火環燃燒','heritage',true),'');
  close(D.estimate(state,R).perSecond,550);
});

test('quality survives portable codes, undo and old saves while invalid values default safely',()=>{
  const state=R.empty();state.damageQuality=1;
  const saved=R.serialize(state),history=S.history();history.reset(saved);
  state.damageQuality=3;history.record(R.serialize(state));
  assert.equal(R.restore(history.undo()).state.damageQuality,1);
  assert.equal(R.restore(S.decode(S.encode(saved)).build).state.damageQuality,1);
  for(const quality of [undefined,-1,4,'2'])assert.equal(R.restore({damageQuality:quality}).state.damageQuality,3);
});
