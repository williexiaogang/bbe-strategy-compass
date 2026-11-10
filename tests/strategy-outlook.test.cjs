const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const context=vm.createContext({});
for(const file of ['strategy-data.js','strategy-rules.js','strategy-five-duals.js','strategy-five-duals-extreme.js','strategy-outlook.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname,'..',file),'utf8'),context);
const {R,O,normal,extreme}=vm.runInContext('({R:CompassRules,O:CompassOutlook,normal:FIVE_DUAL_SETS,extreme:FIVE_DUAL_EXTREME_SETS})',context);
const poison=['普攻淬毒','技能毒液','衝刺毒彈','傳承技河豚','毒泡久噴','河豚延續','召喚史萊姆','自爆史萊姆','大型史萊姆'];
const select=(state,names)=>names.forEach(name=>assert.equal(R.toggle(state,name),'',name));
function checkWitness(state,name,result){
  const trial=R.restore(R.serialize(state)).state;
  select(trial,[name]);
  if(result.actions){
    for(const action of result.actions){
      const error=action.type==='select'?R.toggle(trial,action.name):action.type==='acquire'?R.acquire(trial,action.name,action.slot)
        :R.inherit(trial,trial.inherited.findIndex(x=>x?.name===action.name),action.name,action.slot,true);
      assert.equal(error,'',JSON.stringify(action));
    }
  }else{
    select(trial,result.steps);
    for(const target of result.targets){
      if(trial.inherited.some(x=>x?.name===target.name)){
        const i=trial.inherited.findIndex(x=>x?.name===target.name);
        assert.equal(R.inheritanceReason(trial,trial.inherited[i]),'');
        trial.inherited[i].confirmed=true;
      }else assert.equal(R.acquire(trial,target.name,target.slot),'',target.name);
    }
  }
  assert.ok([...state.selected].every(n=>trial.selected.has(n)),'owned choices preserved');
  assert.ok(state.acquired.every(x=>trial.acquired.some(y=>y.name===x.name&&y.slot===x.slot)),'records preserved');
  assert.equal(new Set([...trial.acquired,...R.activeInherited(trial)].map(x=>x.name)).size,result.count);
}

test('every available first base has a simultaneously reachable outlook in both modes',()=>{
  for(const gameMode of ['normal','extreme']){
    const state=R.empty();state.gameMode=gameMode;
    for(const [name,node] of R.nodes){
      if(node.level!==1)continue;
      const before=JSON.stringify(R.serialize(state));
      const result=O.evaluate(state,name,gameMode==='extreme'?extreme:normal);
      assert.ok(result.count>0,name);
      checkWitness(state,name,result);
      assert.equal(JSON.stringify(R.serialize(state)),before);
    }
  }
});

test('all selectable screenshot upgrades preserve the poison build and reach their advertised four reds',()=>{
  for(const gameMode of ['normal','extreme']){
    const state=R.empty();state.gameMode=gameMode;select(state,poison);
    const before=JSON.stringify(R.serialize(state));
    for(const name of R.nodes.keys()){
      if(state.selected.has(name)||R.canSelect(state,name))continue;
      const result=O.evaluate(state,name,gameMode==='extreme'?extreme:normal);
      assert.equal(result.count,4,name);
      checkWitness(state,name,result);
    }
    assert.equal(JSON.stringify(R.serialize(state)),before);
  }
});

test('unselectable, already selected and replacement-only strategies receive no outlook',()=>{
  const state=R.empty();select(state,['普攻淬毒']);
  for(const name of ['未知策略','普攻淬毒','普攻燃燒','技能毒環','急性中毒'])assert.equal(O.evaluate(state,name,normal),null,name);
});

test('the last empty slot exposes both four-red liquid and lightning possibilities',()=>{
  const state=R.empty();
  select(state,['普攻淬毒','受擊毒霧','急性中毒','衝刺毒彈','烈性毒彈','擴散毒彈','傳承技河豚','毒泡久噴','河豚延續','召喚史萊姆','自爆史萊姆','大型史萊姆']);
  for(const [base,red] of [['技能毒液','毒液催化'],['技能閃電','電解化毒']]){
    const result=O.evaluate(state,base,normal);
    assert.equal(result.count,4);assert.ok(result.targets.some(x=>x.name===red));checkWitness(state,base,result);
  }
});

test('outlooks preserve acquired records and documented delayed six-red ordering',()=>{
  const state=R.empty();state.gameMode='extreme';
  assert.equal(R.inherit(state,0,'影子冰刺','dash'),'');
  const result=O.evaluate(state,'衝刺影子',extreme);
  assert.equal(result.count,6);assert.ok(result.actions?.some(x=>x.type==='acquire')&&result.actions.some(x=>x.type==='confirm'));
  checkWitness(state,'衝刺影子',result);
  const recorded=R.empty();select(recorded,poison);
  assert.equal(R.acquire(recorded,'河豚毒彈','heritage'),'');
  const next=O.evaluate(recorded,'長效毒液',normal);
  assert.equal(next.count,4);checkWitness(recorded,'長效毒液',next);
});

test('outlook cache keys follow rules inputs and ignore display, targets and damage settings',()=>{
  const state=R.empty(),empty=O.key(state);
  state.fiveDualSort='power';state.damageQuality=0;state.target='中毒毒彈';state.slot='summon';
  assert.equal(O.key(state),empty);
  select(state,['普攻淬毒']);assert.notEqual(O.key(state),empty);
  const selected=O.key(state);state.gameMode='extreme';assert.notEqual(O.key(state),selected);
  const extremeKey=O.key(state);R.inherit(state,0,'影子冰刺','dash');assert.notEqual(O.key(state),extremeKey);
  const pending=O.key(state);state.inherited[0].confirmed=true;assert.notEqual(O.key(state),pending);
});

test('deeper search preserves a witnessed result and reports its bounded coverage',()=>{
  const state=R.empty(),before=JSON.stringify(R.serialize(state));
  const initial=O.evaluate(state,'技能毒液',normal);
  const deeper=O.evaluate(state,'技能毒液',normal,5000);
  assert.ok(initial.truncated);
  assert.equal(deeper.budget,5000);
  assert.ok(deeper.count>=initial.count);
  checkWitness(state,'技能毒液',deeper);
  assert.equal(JSON.stringify(R.serialize(state)),before);
});

test('hypothetical choices activate carried upgrades using real I and II prerequisites without charging another acquisition',()=>{
  const state=R.empty();R.inherit(state,0,'強效燃燒','basic');select(state,['普攻燃燒']);
  const before=JSON.stringify(R.serialize(state));
  const result=O.evaluate(state,'持久燃燒',normal);
  assert.ok(result.count>0);assert.ok(!result.steps.includes('強效燃燒'));
  checkWitness(state,'持久燃燒',result);
  assert.equal(JSON.stringify(R.serialize(state)),before);
});
