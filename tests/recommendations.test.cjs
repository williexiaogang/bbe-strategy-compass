const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const context = vm.createContext({ console });
for (const file of ['strategy-data.js', 'strategy-art.js', 'strategy-rules.js', 'strategy-damage-data.js', 'strategy-damage.js', 'strategy-five-duals.js', 'strategy-five-dual-scores.js', 'strategy-five-duals-extreme.js', 'strategy-five-dual-scores-extreme.js'])
  vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), context);
const { R, data, sets } = vm.runInContext('({R:CompassRules,data:CompassData,sets:FIVE_DUAL_SETS})', context);
const select = (state, names) => names.forEach(n => assert.equal(R.toggle(state, n), '', n));
const poisonFourBases = ['普攻淬毒','受擊毒霧','急性中毒','衝刺毒彈','烈性毒彈','擴散毒彈',
  '傳承技河豚','毒泡久噴','河豚延續','召喚史萊姆','自爆史萊姆','大型史萊姆'];
const oldLeader = sets.find(s => s.duals.includes('光槍冰錐') && s.duals.includes('無盡冰刺') && s.duals.includes('落雷光槍'));

test('every five-red route replays legally and counts unique prerequisites', () => {
  for (const set of sets) {
    const state = R.empty(), before = JSON.stringify(R.serialize(state));
    const plan = R.fiveDualPlan(state, set);
    assert.ok(plan, set.duals.join(','));
    assert.equal(plan.missing, new Set([...Object.values(set.bases), ...Object.values(set.steps).flat()]).size);
    assert.equal(JSON.stringify(R.serialize(state)), before);
    select(state, plan.steps);
    for (const [slot, name] of Object.entries(set.slotAssignment)) assert.equal(R.acquire(state, name, slot), '');
    assert.equal(R.fiveDualPlan(state, set).remainingReds.length, 0);
  }
});

test('five-red route rejects an incompatible cold branch', () => {
  const state = R.empty();
  select(state, [...Object.values(oldLeader.bases), '寒氣爆發']);
  assert.equal(R.fiveDualPlan(state, oldLeader), null);
});

test('five-red route rejects inherited and acquired slot conflicts', () => {
  const state = R.empty();
  select(state, Object.values(oldLeader.bases));
  assert.equal(R.inherit(state, 0, '冰錐極寒', 'dash'), '');
  assert.equal(R.fiveDualPlan(state, oldLeader), null);
  const other = R.empty();
  select(other, [...Object.values(sets[0].bases), ...new Set(Object.values(sets[0].steps).flat())]);
  assert.equal(R.acquire(other, sets[0].slotAssignment.dash, 'dash'), '');
  const changed = { ...sets[0], slotAssignment: { ...sets[0].slotAssignment, dash: '追蹤落雷' } };
  assert.equal(R.fiveDualPlan(other, changed), null);
});

test('five-red prerequisites do not count as acquired red tactics', () => {
  const state = R.empty();
  select(state, R.fiveDualPlan(state, oldLeader).steps);
  const result = R.fiveDualPlan(state, oldLeader);
  assert.equal(result.missing, 0);
  assert.equal(result.remainingReds.length, 5);
});

test('all character suggestions replay legally without mutating the build', () => {
  for (const c of data.CHARACTERS) {
    const state = R.empty(); state.character = c.id;
    const before = JSON.stringify(R.serialize(state));
    const goal = R.characterPlan(state, c.id);
    assert.ok(goal && !goal.conflicts.length, c.id);
    assert.equal(JSON.stringify(R.serialize(state)), before);
    select(state, goal.steps);
  }
});

test('Hazama prioritizes a skill core and Noel prioritizes basic attack', () => {
  const hazama = R.empty(); hazama.character = 'hazama';
  const goal = R.characterPlan(hazama, 'hazama');
  assert.equal(goal.build.name, '技能寒冷冰錐流');
  assert.equal(goal.steps[0], '技能寒冷');
  const noel = R.empty(); noel.character = 'noel';
  assert.equal(R.nodes.get(R.characterPlan(noel, 'noel').steps[0]).slot, 'basic');
});

test('compatible alternative replaces a conflicting first character build', () => {
  const state = R.empty(); state.character = 'hakumen';
  select(state, ['普攻光波']);
  const goal = R.characterPlan(state, 'hakumen');
  assert.equal(goal.index, 2);
  assert.equal(goal.conflicts.length, 0);
});

test('manually chosen character build persists and reports conflicts', () => {
  const state = R.empty(); state.character = 'hakumen'; state.characterBuild = 0;
  select(state, ['普攻光波']);
  const restored = R.restore(R.serialize(state)).state;
  const goal = R.characterPlan(restored, 'hakumen');
  assert.equal(goal.index, 0);
  assert.ok(goal.conflicts.includes('普攻撕裂'));
  assert.equal(R.restore({ ...R.serialize(state), characterBuild: 999 }).state.characterBuild, null);
});

test('character route keeps desired inherited tactics pending', () => {
  const state = R.empty(); state.character = 'kokonoe'; state.characterBuild = 0;
  const goal = R.characterPlan(state, 'kokonoe');
  assert.ok(goal.pending.includes('黑洞減速'));
});

// Execute the real recommendation and status functions without a browser DOM.
const app = fs.readFileSync(path.join(__dirname, '..', 'strategy-app.js'), 'utf8');
vm.runInContext('const R=CompassRules; const SLOTS=CompassData.SLOTS; const DUALS=CompassData.DUALS; let state=R.empty(), currentCharacter=null, routePlans=new Map();', context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'strategy-recommendations.js'), 'utf8'), context);
vm.runInContext(`const esc = s => String(s ?? ''); const slotLabel = s => s; const button = (label,action,value) => '<button data-action="'+action+'" data-value="'+value+'">'+label+'</button>';`, context);
vm.runInContext(app.slice(app.indexOf('function renderNextHero'), app.indexOf('function renderAll')), context);
vm.runInContext(`const elements = new Map(); const document = {getElementById(id) {if(!elements.has(id))elements.set(id,{innerHTML:'',open:false});return elements.get(id);}};
  const elementOf = () => null; const icon = () => ''; const TIER_LABEL = ['', 'I', 'II', 'III'];`, context);
vm.runInContext('let showAllDuals=false;',context);
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'strategy-routes.js'), 'utf8'), context);

test('blocked pinned character route never displays ready', () => {
  const html = vm.runInContext(`state=R.empty(); state.character='hakumen'; state.characterBuild=0; state.recommendMode='character'; currentCharacter='hakumen'; R.toggle(state,'普攻光波'); renderNextHero(null,null,false,getCharacterRecommendations());`, context);
  assert.ok(html.includes('人物流派與目前配裝衝突'));
  assert.ok(!html.includes('前置齊備'));
});

test('an old auto target cannot override five-red status', () => {
  const html = vm.runInContext(`state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='power4';const recs=getFiveDualRecommendations();renderNextHero(R.byName.get('燃燒爆彈'),null,true,recs);`, context);
  assert.ok(html.includes('朝 5 紅組合前進'));
  assert.ok(!html.includes('已完成，可以設定新目標'));
});

test('five-red status distinguishes prerequisites from confirmed acquisition', () => {
  const ready = vm.runInContext(`state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='power4';getFiveDualRecommendations();const chosen=currentFiveDualGoal.set;for(const n of currentFiveDualGoal.steps)R.toggle(state,n);getFiveDualRecommendations();renderNextHero(null,null,false,[]);`, context);
  assert.ok(ready.includes('五紅前置齊備，待取得或確認啟用'));
  const badges = vm.runInContext(`renderFiveDualProgress();document.getElementById('dualProgress').innerHTML;`, context);
  assert.ok(badges.includes('取得後確認'));
  assert.equal((badges.match(/data-status="ready"/g)||[]).length,5);
  assert.equal((badges.match(/data-status="complete"/g)||[]).length,0);
  const done = vm.runInContext(`for(const [slot,name] of Object.entries(chosen.slotAssignment))R.acquire(state,name,slot);getFiveDualRecommendations();renderNextHero(null,null,false,[]);`, context);
  assert.ok(done.includes('五紅已完成'));
});

test('character build choice survives portable codes and undo', () => {
  const sessionContext = vm.createContext({ TextEncoder, TextDecoder, btoa, atob, URL });
  for (const file of ['strategy-data.js', 'strategy-rules.js', 'strategy-session.js'])
    vm.runInContext(fs.readFileSync(path.join(__dirname, '..', file), 'utf8'), sessionContext);
  const result = vm.runInContext(`const state=CompassRules.empty();state.character='hakumen';state.characterBuild=2;
    const saved=CompassRules.serialize(state),history=CompassSession.history();history.reset(saved);
    state.characterBuild=null;history.record(CompassRules.serialize(state));
    [CompassRules.restore(CompassSession.decode(CompassSession.encode(saved)).build).state.characterBuild,
      CompassRules.restore(history.undo()).state.characterBuild];`, sessionContext);
  assert.deepEqual([...result], [2, 2]);
});

test('five-red build, hero and compact route summaries share the current plan', () => {
  const result = vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='power4';
    const recs=getFiveDualRecommendations();renderFiveDualProgress();
    return {names:recs.map(x=>x.name),hero:renderNextHero(null,null,false,recs),html:document.getElementById('dualProgress').innerHTML,
      duals:currentFiveDualGoal.set.duals,entries:fiveDualRouteEntries().map(x=>x.d.name)};
  })()`, context);
  assert.equal(result.names.length, 5);
  assert.equal(result.entries.length, 5);
  assert.deepEqual([...result.entries].sort(), [...result.duals].sort());
  const recommended = [...result.html.matchAll(/data-action="recommend" data-value="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(recommended, []);
  const heroChoices = [...result.hero.matchAll(/data-action="recommend" data-value="([^"]+)"/g)].map(m => m[1]);
  assert.deepEqual(heroChoices, [...result.names]);
  assert.ok(!result.hero.includes('選擇此策略'));
  assert.equal((result.html.match(/class="red-route-summary"/g) || []).length, 5);
  assert.ok(!result.html.includes('data-action="target"'));
  assert.ok(result.hero.includes('每次選擇後重新計算'));
});

test('all five-red target routes stay within their joint plan and assigned slots', () => {
  assert.equal(vm.runInContext(`(() => {
    for(const set of FIVE_DUAL_SETS) {
      state=R.empty();
      const full=R.fiveDualPlan(state,set);
      for(let i=0;i<=full.steps.length;i++) {
        currentFiveDualGoal={set,...R.fiveDualPlan(state,set)};
        for(const {d,plan} of fiveDualRouteEntries()) {
          if(set.slotAssignment[plan.slot]!==d.name)throw Error('wrong slot '+d.name);
          const temp=R.restore(R.serialize(state)).state;
          for(const n of plan.steps) {
            if(!currentFiveDualGoal.required.has(n) || R.toggle(temp,n))throw Error('invalid prerequisite '+n);
          }
          if(R.acquireReason(temp,d.name,plan.slot))throw Error('unreachable '+d.name);
        }
        if(i<full.steps.length)R.toggle(state,full.steps[i]);
      }
    }
    return true;
  })()`, context), true);
});

test('explicit alternative switching changes both panels without changing the build', () => {
  const result = vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';getFiveDualRecommendations();
    const first=fiveDualKey(currentFiveDualGoal.set.duals),next=currentFiveDualCandidates[1];
    const before=JSON.stringify([...state.selected]);
    if(!switchFiveDualGoal(fiveDualKey(next.set.duals)))throw Error('switch rejected');
    const recs=getFiveDualRecommendations();renderFiveDualProgress();
    return {first,key:state.fiveDualGoal,active:fiveDualKey(currentFiveDualGoal.set.duals),
      unchanged:before===JSON.stringify([...state.selected]),choices:fiveDualChoices(),recs:recs.map(x=>x.name)};
  })()`, context);
  assert.notEqual(result.first, result.key);
  assert.equal(result.active, result.key);
  assert.ok(result.unchanged);
  assert.deepEqual([...result.recs], [...result.choices]);
});

test('skill upgrades can be recommended before any basic-attack strategy is chosen', () => {
  const result = vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='power4';getFiveDualRecommendations();
    const set=currentFiveDualGoal.set;state.fiveDualGoal=fiveDualKey(set.duals);
    const skill=set.bases.skill;R.toggle(state,skill);getFiveDualRecommendations();
    const tree=R.nodes.get(skill).tree;
    const second=currentFiveDualGoal.steps.find(n=>R.nodes.get(n).tree===tree && R.nodes.get(n).level===2);
    const third=currentFiveDualGoal.steps.find(n=>R.nodes.get(n).tree===tree && R.nodes.get(n).level===3);
    const before=fiveDualChoices();R.toggle(state,second);getFiveDualRecommendations();
    return {before,after:fiveDualChoices(),second,third,basicSelected:state.selected.has(set.bases.basic)};
  })()`, context);
  assert.ok(!result.basicSelected);
  assert.ok(result.before.includes(result.second));
  assert.ok(!result.before.includes(result.third));
  assert.ok(result.after.includes(result.third));
});

test('all five-red plans complete in non-basic-first order using only legal candidates', () => {
  assert.equal(vm.runInContext(`(() => {
    for(const set of FIVE_DUAL_SETS) {
      state=R.empty();let count=0;
      while(true) {
        currentFiveDualGoal={set,...R.fiveDualPlan(state,set)};
        if(!currentFiveDualGoal.steps.length)break;
        const choices=fiveDualChoices();
        if(!choices.length)throw Error('no legal offer candidates');
        const name=choices[choices.length-1];
        if(R.canSelect(state,name) || R.toggle(state,name))throw Error('illegal candidate');
        if(!R.fiveDualPlan(state,set) || ++count>30)throw Error('lost five-red route');
      }
    }
    return true;
  })()`, context), true);
});

test('conflicting pinned five-red goal never silently changes to another candidate', () => {
  const result = vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='redOnly';getFiveDualRecommendations();
    state.fiveDualGoal=fiveDualKey(currentFiveDualGoal.set.duals);
    R.toggle(state,'普攻燃燒');R.toggle(state,'持久燃燒');const recs=getFiveDualRecommendations();renderFiveDualProgress();
    return {recs:recs.length,goal:currentFiveDualGoal,candidates:currentFiveDualCandidates.length,
      html:document.getElementById('dualProgress').innerHTML,hero:renderNextHero(null,null,false,recs),pinned:state.fiveDualGoal,retained:state.selected.has('普攻燃燒')&&state.selected.has('持久燃燒')};
  })()`, context);
  assert.ok(result.recs>0 && result.goal && result.retained);
  assert.ok(result.pinned && result.candidates);
  assert.ok(result.hero.includes('原目標已受阻或有更多紅數方案，現列相容方案'));
});

test('five-red route keeps acquired and inherited targets visible with accurate status', () => {
  const html = vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';getFiveDualRecommendations();
    const set=currentFiveDualGoal.set;state.fiveDualGoal=fiveDualKey(set.duals);
    for(const n of currentFiveDualGoal.steps)R.toggle(state,n);
    const entries=Object.entries(set.slotAssignment);
    R.acquire(state,entries[0][1],entries[0][0]);R.inherit(state,0,entries[1][1],entries[1][0]);
    getFiveDualRecommendations();renderFiveDualProgress();return document.getElementById('dualProgress').innerHTML;
  })()`, context);
  assert.equal((html.match(/class="red-badge"/g) || []).length, 5);
  assert.equal((html.match(/data-status="complete"/g) || []).length, 1);
  assert.equal((html.match(/data-status="pending"/g) || []).length, 1);
  assert.ok(html.includes('已取得'));
  assert.ok(html.includes('傳承待啟用'));
});

test('red badges show a chosen tactic name and keep route detail in a floating panel', () => {
  const result = vm.runInContext(`(() => {
    state=R.empty();
    const d=R.byName.get('爆燃火彈'),plan=R.plans(state,d)[0];
    const initial=redProgressBadge(d,plan,[]);
    state.selected.add('技能火彈');
    const chosen=redProgressBadge(d,plan,[]);
    return {initial,chosen};
  })()`, context);
  assert.ok(result.initial.includes('<span>火彈</span>'));
  assert.ok(result.chosen.includes('<span>技能火彈</span>'));
  assert.ok(result.chosen.includes('class="red-badge-detail"'));
  assert.ok(!result.chosen.includes('class="route-track"'));
  assert.ok(!result.chosen.includes('尚未逐版本實機核對'));
});

test('five-red goal persists in backups and rejects malformed goal keys', () => {
  const state = R.empty();
  state.fiveDualGoal = [...sets[0].duals].sort((a,b)=>a.localeCompare(b,'zh')).join('|');
  assert.equal(R.restore(R.serialize(state)).state.fiveDualGoal, state.fiveDualGoal);
  assert.equal(R.restore({fiveDualGoal:'unknown'}).state.fiveDualGoal, null);
});

test('fusion badges retain same-element sources and light each tree independently', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();
    const d=R.byName.get('燃燒爆彈'),plan=R.plans(state,d)[0];
    const initial=redProgressBadge(d,plan,[]);
    const primaryTrees=new Set(d.prim.map(n=>R.nodes.get(n).tree));
    const tree=plan.steps.map(n=>R.nodes.get(n).tree).find(t=>primaryTrees.has(t));
    for(const n of plan.steps.filter(n=>R.nodes.get(n).tree===tree))R.toggle(state,n);
    const partial=redProgressBadge(d,R.plans(state,d)[0],[]);
    for(const n of plan.steps)if(!state.selected.has(n))R.toggle(state,n);
    const ready=redProgressBadge(d,R.plans(state,d)[0],[]);
    return {initial,partial,ready};
  })()`,context);
  assert.equal((result.initial.match(/class="fusion-part /g)||[]).length,2);
  assert.ok(result.initial.includes('火彈')&&result.initial.includes('燃燒'));
  assert.equal((result.initial.match(/class="fusion-part source-ready"/g)||[]).length,0);
  assert.equal((result.partial.match(/class="fusion-part source-ready(?: with-art)?"/g)||[]).length,1);
  assert.ok(!result.partial.includes('red-fusion joined'));
  assert.equal((result.ready.match(/class="fusion-part source-ready(?: with-art)?"/g)||[]).length,2);
  assert.ok(result.ready.includes('red-fusion joined'));
  assert.ok(result.ready.includes('data-status="ready"'));
  assert.ok(!result.ready.includes('data-status="complete"'));
});

test('character recommendations expose every legal core frontier, with matching target routes', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='character';state.character='hakumen';currentCharacter='hakumen';
    routePlans=new Map(DUALS.map(d=>[d.name,R.plans(state,d)]));
    const recs=getRecommendations();renderDualProgress(recs);
    return {names:recs.map(x=>x.name),expected:R.frontier(state,currentCharacterGoal.steps),
      html:document.getElementById('dualProgress').innerHTML,hero:renderNextHero(null,null,false,recs),
      targets:[...currentCharacterGoal.build.duals,...(currentCharacterGoal.completion?.targets || []).map(x=>x.name)]};
  })()`,context);
  assert.deepEqual([...result.names],[...result.expected]);
  assert.ok(result.names.length>=3);
  assert.ok(result.names.includes('召喚刃環') && result.names.includes('傳承技風暴'));
  const hero=[...result.hero.matchAll(/data-action="recommend" data-value="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(hero,[...result.names]);
  const rowNames=[...result.html.matchAll(/<strong class="red-badge-name">([^<]+)<\/strong>/g)].map(m=>m[1]);
  assert.ok(rowNames.length && rowNames.every(n=>result.targets.includes(n)));
  const choices=[...result.html.matchAll(/data-action="recommend" data-value="([^"]+)"/g)].map(m=>m[1]);
  assert.ok(choices.every(n=>result.names.includes(n)));
});

test('all character frontiers remain legal in both game modes', () => {
  assert.equal(vm.runInContext(`(() => {
    for(const gameMode of ['normal','extreme']) for(const c of CompassData.CHARACTERS) {
      state=R.empty();state.gameMode=gameMode;state.recommendMode='character';state.character=c.id;currentCharacter=c.id;
      const recs=getCharacterRecommendations();
      for(const r of recs) if(R.canSelect(state,r.name)||!currentCharacterGoal.steps.includes(r.name))throw Error(c.id);
      if(!currentCharacterGoal.conflicts.length && recs.length!==R.frontier(state,currentCharacterGoal.steps).length)throw Error('missing candidate');
    }return true;
  })()`,context),true);
});

test('auto without a target retains candidates from all five slots rather than a top-three truncation', () => {
  const state=R.empty();
  const recs=R.recommendations(state);
  assert.ok(recs.length>3);
  assert.equal(new Set(recs.map(r=>R.nodes.get(r.name).slot)).size,5);
  for(const rec of recs) {
    assert.equal(R.canSelect(state,rec.name),'');
    assert.equal(new Set(rec.targets).size,rec.targets.length);
    for(const name of rec.targets)assert.ok(R.plans(state,R.byName.get(name)).some(p=>p.steps.includes(rec.name)));
  }
});

test('focused auto target exposes all feasible frontiers once in the hero', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='auto';state.target='爆燃火彈';currentCharacter=null;showAllDuals=false;
    routePlans=new Map(DUALS.map(d=>[d.name,R.plans(state,d)]));
    const recs=getRecommendations();renderDualProgress(recs);
    return {names:recs.map(x=>x.name),expected:R.frontier(state,routePlans.get(state.target).flatMap(p=>p.steps)),
      html:document.getElementById('dualProgress').innerHTML,
      hero:renderNextHero(R.byName.get(state.target),routePlans.get(state.target)[0],false,recs)};
  })()`,context);
  assert.deepEqual([...result.names],[...result.expected]);
  assert.ok(result.names.includes('技能火彈') && result.names.includes('普攻燃燒') && result.names.includes('衝刺燃燒'));
  const row=[...result.html.matchAll(/data-action="recommend" data-value="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual(row,[]);
  const hero=[...result.hero.matchAll(/data-action="recommend" data-value="([^"]+)"/g)].map(m=>m[1]);
  assert.deepEqual([...new Set(hero)].sort(),[...result.names].sort());
  assert.ok(!result.hero.includes('選擇此策略'));
});

test('a later upgrade is suggested alongside other bases once its own base is selected', () => {
  const state=R.empty();select(state,['召喚冰刺']);
  const recs=R.targetRecommendations(state,'無盡冰刺');
  assert.ok(recs.some(r=>r.name==='冰刺強化'));
  assert.ok(recs.some(r=>r.name==='普攻寒冷'||r.name==='技能寒冷'));
  assert.ok(!recs.some(r=>r.name==='多重冰刺'));
});

test('a ready red target does not recommend unnecessary steps from longer alternative routes', () => {
  const state=R.empty();
  select(state,['技能火彈','火彈強化','多重火彈','普攻燃燒']);
  assert.equal(R.targetRecommendations(state,'爆燃火彈').length,0);
  assert.ok(R.recommendations(state).every(r=>!r.targets.includes('爆燃火彈')));
});

test('new and legacy schemes default to five-red priority and removed auto mode migrates', () => {
  assert.equal(R.empty().recommendMode,'five-dual');
  assert.equal(R.restore({selected:[]}).state.recommendMode,'five-dual');
  assert.equal(R.restore({selected:[],recommendMode:'auto'}).state.recommendMode,'five-dual');
  assert.equal(R.restore({selected:[],recommendMode:'character'}).state.recommendMode,'character');
  const old = R.empty();old.recommendMode='auto';
  assert.equal(R.serialize(old).recommendMode,'five-dual');
});

test('recommendation direction offers exactly character and five-red modes', () => {
  assert.deepEqual(Array.from(vm.runInContext('RECOMMEND_MODES.map(m=>m.id)',context)),['character','five-dual']);
});

test('fixed damage exposes one direction and legacy tiers migrate without keeping stale pins', () => {
  const ids=Array.from(vm.runInContext('FIVE_DUAL_SORTS.map(m=>m.id)',context));
  assert.deepEqual(ids,['default','power','basic','redOnly']);
  for(const old of ['power1','power2','power3','power4','power']){
    const restored=R.restore({fiveDualSort:old,fiveDualGoal:sets[0].duals.join('|')}).state;
    assert.equal(restored.fiveDualSort,'power');
    assert.equal(restored.fiveDualGoal,null);
    assert.equal(R.serialize({...R.empty(),fiveDualSort:old}).fiveDualSort,'power');
  }
});

test('damage priority reoptimizes under forced choices in every slot and both modes', () => {
  const checks=vm.runInContext(`(() => {
    const results=[];
    for(const mode of ['normal','extreme']){
      state=R.empty();state.gameMode=mode;state.recommendMode='five-dual';state.fiveDualSort='power';getFiveDualRecommendations();
      const initial=currentFiveDualGoal.set,oldKey=fiveDualKey(initial.duals);
      const catalog=mode==='extreme'?FIVE_DUAL_EXTREME_SETS:FIVE_DUAL_SETS;
      for(const slot of SLOTS){
        state=R.empty();state.gameMode=mode;state.recommendMode='five-dual';state.fiveDualSort='power';state.fiveDualGoal=oldKey;
        const alternate=catalog.find(s=>s.bases[slot.id]!==initial.bases[slot.id]);
        const chosen=alternate.bases[slot.id];R.toggle(state,chosen);
        const before=JSON.stringify([...state.selected]);
        const recs=getFiveDualRecommendations();
        let maximum=-Infinity;
        for(const set of catalog){
          const plan=R.fiveDualPlan(state,set);
          if(plan&&!plan.replacements.length)maximum=Math.max(maximum,fiveDualScore(set).tiers[3]);
        }
        results.push({mode,slot:slot.id,actual:currentFiveDualGoal?.score.tiers[3],maximum,
          unchanged:before===JSON.stringify([...state.selected]),replacement:currentFiveDualGoal?.replacements.length,
          base:currentFiveDualGoal?.set.bases[slot.id]===chosen,
          changed:fiveDualKey(currentFiveDualGoal.set.duals)!==oldKey,legal:recs.every(x=>!R.canSelect(state,x.name))});
      }
    }
    return results;
  })()`,context);
  assert.equal(checks.length,10);
  for(const check of checks){
    assert.equal(check.actual,check.maximum,JSON.stringify(check));
    assert.ok(check.unchanged&&check.base&&check.changed&&check.legal,JSON.stringify(check));
    assert.equal(check.replacement,0);
  }
});

test('damage priority keeps confirmed red and inherited records while continuing a legal route', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='power';getFiveDualRecommendations();
    const goal=currentFiveDualGoal;
    for(const n of goal.steps)R.toggle(state,n);
    const entries=Object.entries(goal.set.slotAssignment);
    const [slot,name]=entries[0];R.acquire(state,name,slot);
    // This fixture represents a player who has observed the inherited effect in-game.
    const [host,inherited]=entries[1];R.inherit(state,0,inherited,host,true,true);
    const before=JSON.stringify(R.serialize(state));
    getFiveDualRecommendations();
    return {goal:!!currentFiveDualGoal,unchanged:before===JSON.stringify(R.serialize(state)),
      records:state.acquired.length,active:R.activeInherited(state).length,
      remaining:currentFiveDualGoal.remainingReds.length};
  })()`,context);
  assert.ok(result.goal&&result.unchanged);
  assert.equal(result.records,1);assert.equal(result.active,1);assert.equal(result.remaining,3);
});

test('damage priority completes bases outside representative presets without replacing them', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='power';
    state.fiveDualGoal=fiveDualKey(FIVE_DUAL_SETS[0].duals);
    const bases=CompassData.STRATEGY_DATA.flatMap(t=>t.bases);
    const catalog=FIVE_DUAL_SETS;
    const unavailable=bases.find(b=>!catalog.some(s=>Object.values(s.bases).includes(b.name)));
    if(!unavailable)throw Error('Expected a base outside the representative catalog');
    R.toggle(state,unavailable.name);
    const recs=getFiveDualRecommendations();renderFiveDualProgress();
    return {count:recs.length,hero:renderNextHero(null,null,false,recs),html:document.getElementById('dualProgress').innerHTML,owned:state.selected.has(unavailable.name)};
  })()`,context);
  assert.ok(result.count>0);assert.ok(result.owned);
  assert.ok(result.hero.includes('保留現有配裝'));
  assert.ok(!result.html.includes('未自動改換目標'));
});

test('a finished character core continues into five-red completion without replacing its bases', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='character';state.character='noel';state.characterBuild=0;currentCharacter='noel';
    const core=R.characterPlan(state,currentCharacter);
    for(const n of core.steps)R.toggle(state,n);
    const primary=core.build.duals[0],route=R.plans(state,R.byName.get(primary))[0];R.acquire(state,primary,route.slot);
    const before=JSON.stringify(R.serialize(state));
    routePlans=new Map(DUALS.map(d=>[d.name,R.plans(state,d)]));
    const recs=getCharacterRecommendations();renderDualProgress(recs);
    const completion=currentCharacterGoal.completion;
    return {count:recs.length,coreSteps:currentCharacterGoal.coreSteps.length,reds:completion.redCount,
      same:before===JSON.stringify(R.serialize(state)),steps:completion.steps,targets:completion.targets,
      html:renderNextHero(null,null,false,recs),rows:document.getElementById('dualProgress').innerHTML};
  })()`,context);
  assert.equal(result.coreSteps,0);
  assert.ok(result.count>0);
  assert.equal(result.reds,5);
  assert.ok(result.same);
  assert.ok(result.html.includes('繼續補完五紅'));
  assert.ok(result.rows.includes('· 補完'));
  assert.ok(result.rows.includes('data-status="complete"'));
});

test('character completions replay legally and preserve all existing selections in both modes', () => {
  for(const mode of ['normal','extreme']) for(const c of data.CHARACTERS) {
    const state=R.empty();state.gameMode=mode;state.character=c.id;
    const core=R.characterPlan(state,c.id);
    if(core.conflicts.length)continue;
    select(state,core.steps);
    const current=R.characterPlan(state,c.id), before=JSON.stringify(R.serialize(state));
    const completion=R.completeCharacter(state,current);
    assert.ok(completion,c.id);
    assert.equal(JSON.stringify(R.serialize(state)),before);
    const bases=R.slotMap(state),original=[...state.selected];
    select(state,completion.steps);
    assert.ok(original.every(n=>state.selected.has(n)));
    for(const [slot,name] of Object.entries(bases))if(name)assert.equal(R.slotMap(state)[slot],name);
    for(const {name,slot} of completion.targets)assert.equal(R.acquire(state,name,slot),'',c.id+' '+name);
    assert.ok(current.build.duals.every(n=>completion.targets.some(x=>x.name===n)));
    assert.equal(state.acquired.length,completion.redCount);
  }
});

test('partial completions remain useful without discarding a restrictive character core', () => {
  const state=R.empty();state.character='rachel';state.characterBuild=0;
  const core=R.characterPlan(state,'rachel');select(state,core.steps);
  const completion=R.completeCharacter(state,R.characterPlan(state,'rachel'));
  assert.ok(completion.redCount<5 && completion.redCount>core.build.duals.length);
  assert.ok(completion.steps.length>0);
  assert.equal(R.slotMap(state).dash,'衝刺毒彈');
});

test('unspecified inherited red hosts remain reserved during character completion', () => {
  const state=R.empty();state.character='kokonoe';state.characterBuild=0;
  assert.equal(R.inherit(state,0,'黑洞減速'),'');
  const core=R.characterPlan(state,'kokonoe');const before=JSON.stringify(R.serialize(state));
  const completion=R.completeCharacter(state,core);
  assert.ok(completion.unresolved.includes('黑洞減速'));
  assert.ok(!completion.targets.some(x=>x.slot==='heritage'));
  assert.equal(JSON.stringify(R.serialize(state)),before);
});

test('assigned inherited reds require their host before counting toward character five-red completion', () => {
  const state=R.empty();state.character='noel';state.characterBuild=0;
  assert.equal(R.inherit(state,0,'黑洞減速','heritage'),'');
  const core=R.characterPlan(state,'noel');
  const completion=R.completeCharacter(state,core);
  assert.ok(completion.steps.includes('傳承技黑洞'));
  select(state,completion.steps);
  assert.equal(R.inheritanceReason(state,state.inherited[0]),'');
  assert.equal(state.inherited[0].confirmed,false);
  assert.ok(completion.targets.some(x=>x.name==='黑洞減速'));
});

test('acquisition priority falls back through four, three, two and one red without changing owned choices', () => {
  const fixtures = [
    [4, ['火精靈助戰','衝刺飛劍','技能閃電','召喚史萊姆','傳承技電樁','火精靈連擊','閃電過載','超載電樁','長效史萊姆','遠程飛劍','持久分裂','閃電延伸','大型電樁','極速史萊姆','多重飛劍']],
    [3, ['普攻飛刃','衝刺燃燒','技能感電','放置地雷','傳承技火環','持久燃燒','受擊火環','額外地雷','脈衝強化','飛刃旋風','強效燃燒','雙發火環','高效布雷','脈衝感電','飛刃斬']],
    [2, ['玄冰劍刃','衝刺落雷','技能閃電','召喚冰刺','傳承技光槍','精準冰刺','玄冰連斬','閃電強化','閃避落雷','聖光光槍','多重冰刺','玄冰巨劍','閃電延伸','雙重落雷','多重光槍']],
    [1, ['普攻淬毒','衝刺毒彈','技能寒冷','召喚刃環','傳承技閃光','聚寒成冰','強效中毒','烈性毒彈','廣域閃光','受擊刃環','強力破冰','急性中毒','擴散毒彈','致盲延長','雙生刃環']]
  ];
  for (const [count, owned] of fixtures) {
    context.fallbackOwned = owned;
    const result = vm.runInContext(`(() => {
      state=R.empty(); state.recommendMode='five-dual'; state.fiveDualSort='default';
      for(const n of fallbackOwned) {const error=R.toggle(state,n);if(error)throw Error(n+error);}
      state.fiveDualGoal=fiveDualKey(FIVE_DUAL_SETS[0].duals);
      const before=JSON.stringify(R.serialize(state));
      const recs=getFiveDualRecommendations(), goal=currentFiveDualGoal;
      if(!goal)throw Error('missing fallback');
      const unchanged=before===JSON.stringify(R.serialize(state));
      renderFiveDualProgress();
      const hero=renderNextHero(null,null,false,recs), html=document.getElementById('dualProgress').innerHTML;
      state.fiveDualGoal=fiveDualKey(goal.set.duals);
      const restored=R.restore(R.serialize(state)).state.fiveDualGoal===state.fiveDualGoal;
      for(const n of goal.steps)if(!state.selected.has(n)){const error=R.toggle(state,n);if(error)throw Error(error);}
      for(const [slot,name] of Object.entries(goal.set.slotAssignment)){const error=R.acquire(state,name,slot);if(error)throw Error(error);}
      getFiveDualRecommendations();
      return {count:goal.set.duals.length, unchanged, restored, hero, html,
        retained:fallbackOwned.every(n=>state.selected.has(n)), remaining:currentFiveDualGoal.remainingReds.length};
    })()`,context);
    assert.equal(result.count,count);
    assert.ok(result.unchanged&&result.retained&&result.restored);
    assert.ok(result.hero.includes(count+' 紅'));
    assert.ok(result.html.includes('當前'+count+' 紅方案'));
    assert.equal(result.remaining,0);
  }
});

test('default priority replaces a blocked pin with a compatible five-red goal first', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.recommendMode='five-dual';state.fiveDualSort='default';
    state.fiveDualSort='redOnly';getFiveDualRecommendations();const old=fiveDualKey(currentFiveDualGoal.set.duals);state.fiveDualGoal=old;state.fiveDualSort='default';
    R.toggle(state,'普攻燃燒');R.toggle(state,'持久燃燒');
    const recs=getFiveDualRecommendations();
    return {count:currentFiveDualGoal?.set.duals.length, changed:fiveDualKey(currentFiveDualGoal.set.duals)!==old,
      legal:recs.length>0&&recs.every(x=>!R.canSelect(state,x.name))};
  })()`,context);
  assert.equal(result.count,5);assert.ok(result.changed&&result.legal);
});

test('partial acquisition routes expose legal frontiers and retain red records in both modes', () => {
  for(const mode of ['normal','extreme']) {
    context.partialMode=mode;
    assert.equal(vm.runInContext(`(() => {
      state=R.empty();state.gameMode=partialMode;state.recommendMode='five-dual';
      for(const n of ['火精靈助戰','衝刺飛劍','技能閃電','召喚史萊姆','傳承技電樁','火精靈連擊','閃電過載','超載電樁','長效史萊姆','遠程飛劍']) {
        const error=R.toggle(state,n);if(error)throw Error(error);
      }
      let recs=getFiveDualRecommendations();
      if(!recs.length||!currentFiveDualGoal.steps.length)throw Error('missing partial frontier');
      const initial=currentFiveDualGoal.set.duals.length;
      let iterations=0;
      while(recs.length) {
        if(++iterations>20)throw Error('route stalled');
        if(!recs.every(x=>!R.canSelect(state,x.name)))throw Error('illegal frontier');
        if(R.toggle(state,recs[recs.length-1].name))throw Error('selection failed');
        recs=getFiveDualRecommendations();
      }
      if(currentFiveDualGoal.set.duals.length<initial)throw Error('lost reds');
      const entries=Object.entries(currentFiveDualGoal.set.slotAssignment);
      if(R.acquire(state,entries[0][1],entries[0][0]))throw Error('acquire failed');
      if(R.inherit(state,0,entries[1][1],entries[1][0],true,true))throw Error('inherit failed');
      getFiveDualRecommendations();
      const names=currentFiveDualGoal.set.duals;
      return names.includes(entries[0][1])&&names.includes(entries[1][1])&&state.acquired.length===1&&R.activeInherited(state).length===1;
    })()`,context),true,mode);
  }
});

test('acquisition priority recommends and completes six reds with a same-slot inherited route', () => {
  const result=vm.runInContext(`(() => {
    state=R.empty();state.gameMode='extreme';state.recommendMode='five-dual';
    getFiveDualRecommendations();state.fiveDualGoal=fiveDualKey(currentFiveDualGoal.set.duals);
    R.inherit(state,0,'影子冰刺','dash');
    const initial=JSON.stringify(R.serialize(state));
    let recs=getFiveDualRecommendations();
    if(initial!==JSON.stringify(R.serialize(state)))throw Error('recommendation mutated build');
    if(currentFiveDualGoal?.set.duals.length!==6)throw Error('missing six-red goal');
    renderFiveDualProgress();
    const html=document.getElementById('dualProgress').innerHTML;
    const entries=fiveDualRouteEntries();
    let iterations=0,sawAcquire=false,sawConfirm=false,sawDeferred=false;
    while(currentFiveDualGoal.actions.length) {
      if(++iterations>40)throw Error('route did not finish');
      const next=currentFiveDualGoal.actions[0];
      const hero=renderNextHero(null,null,false,recs);
      if(next.type==='select') {
        if(recs.length!==1||recs[0].name!==next.name||R.canSelect(state,next.name))throw Error('incorrect frontier');
        if(R.toggle(state,next.name))throw Error('selection failed');
      } else if(next.type==='acquire') {
        sawAcquire=true;
        if(recs.length||!hero.includes('data-action="acquire"')||!hero.includes(next.name))throw Error('missing acquisition barrier');
        if(next.slot==='dash') {
          sawDeferred=!!R.inheritanceReason(state,state.inherited[0]);
          if(state.selected.has('召喚冰刺'))throw Error('premature activation');
        }
        if(R.acquire(state,next.name,next.slot))throw Error('acquisition failed');
      } else {
        sawConfirm=true;
        if(!hero.includes('data-action="inherit-confirm"'))throw Error('missing confirmation');
        const i=state.inherited.findIndex(x=>x?.name===next.name);
        if(R.inherit(state,i,next.name,next.slot,true))throw Error('confirmation failed');
      }
      state.fiveDualGoal=fiveDualKey(currentFiveDualGoal.set.duals);
      const restored=R.restore(R.serialize(state));
      if(restored.warnings.length||!restored.state.fiveDualGoal)throw Error('lost saved route');
      state=restored.state;
      recs=getFiveDualRecommendations();
      if(currentFiveDualGoal?.set.duals.length!==6)throw Error('lost sixth red');
    }
    return {badges:(html.match(/class="red-badge"/g)||[]).length,dash:entries.filter(x=>x.plan.slot==='dash').length,
      sawAcquire,sawConfirm,sawDeferred,remaining:currentFiveDualGoal.remainingReds.length,
      count:new Set([...state.acquired,...R.activeInherited(state)].map(x=>x.name)).size,
      hero:renderNextHero(null,null,false,recs)};
  })()`,context);
  assert.equal(result.badges,6);assert.equal(result.dash,2);
  assert.ok(result.sawAcquire&&result.sawConfirm&&result.sawDeferred);
  assert.equal(result.remaining,0);assert.equal(result.count,6);
  assert.ok(result.hero.includes('6 紅已完成'));
});

test('four poison bases expose both lightning and liquid four-red directions without mutating the build', () => {
  context.poisonFourBases=poisonFourBases;
  for (const mode of ['normal','extreme']) {
    context.directionMode=mode;
    const result=vm.runInContext(`(() => {
      state=R.empty();state.gameMode=directionMode;
      for(const n of poisonFourBases){const reason=R.toggle(state,n);if(reason)throw Error(n+reason);}
      const before=JSON.stringify(R.serialize(state));
      getFiveDualRecommendations();renderFiveDualProgress();
      const count=currentFiveDualGoal.set.duals.length;
      const candidates=currentBaseDirections.filter(x=>x.candidate.set.duals.length===count);
      const directions=candidates.map(x=>({name:x.name,count:x.candidate.set.duals.length,reds:x.candidate.set.duals}));
      const unchanged=before===JSON.stringify(R.serialize(state));
      for(const {candidate} of candidates) {
        const trial=R.restore(R.serialize(state)).state;
        for(const n of candidate.steps){const reason=R.toggle(trial,n);if(reason)throw Error(n+reason);}
        for(const [slot,name] of Object.entries(candidate.set.slotAssignment)){const reason=R.acquire(trial,name,slot);if(reason)throw Error(name+reason);}
        if(!poisonFourBases.every(n=>trial.selected.has(n)))throw Error('lost owned tactic');
      }
      return {count,directions,unchanged,html:document.getElementById('dualProgress').innerHTML};
    })()`,context);
    assert.equal(result.count,4);
    assert.ok(result.unchanged);
    const lightning=result.directions.find(x=>x.name==='技能閃電'), liquid=result.directions.find(x=>x.name==='技能毒液');
    assert.ok(lightning&&liquid);
    assert.ok(lightning.reds.includes('電解化毒'));
    assert.ok(liquid.reds.includes('毒液催化'));
    assert.ok(result.html.includes('技能毒液')&&result.html.includes('同樣 4 紅'));
  }
});

test('liquid direction can be previewed, restored and then selected while retaining existing poison choices',()=>{
  context.poisonFourBases=poisonFourBases;
  const result=vm.runInContext(`(() => {
    state=R.empty();for(const n of poisonFourBases)R.toggle(state,n);
    getFiveDualRecommendations();
    const before=JSON.stringify([...state.selected]);
    const liquid=currentBaseDirections.find(x=>x.name==='技能毒液').candidate;
    if(!switchFiveDualGoal(fiveDualKey(liquid.set.duals)))throw Error('cannot switch liquid');
    getFiveDualRecommendations();
    const preview=currentFiveDualGoal.set.duals.includes('毒液催化')&&fiveDualChoices().includes('技能毒液');
    const unchanged=before===JSON.stringify([...state.selected]);
    state=R.restore(R.serialize(state)).state;getFiveDualRecommendations();
    const restored=currentFiveDualGoal.set.duals.includes('毒液催化');
    if(R.toggle(state,'技能毒液'))throw Error('cannot choose liquid');
    getFiveDualRecommendations();renderFiveDualProgress();
    return {preview,unchanged,restored,count:currentFiveDualGoal.set.duals.length,reds:currentFiveDualGoal.set.duals,
      directions:currentBaseDirections.length,retained:poisonFourBases.every(n=>state.selected.has(n)),html:document.getElementById('dualProgress').innerHTML};
  })()`,context);
  assert.ok(result.preview&&result.unchanged&&result.restored&&result.retained);
  assert.equal(result.count,4);
  assert.ok(result.reds.includes('毒液催化')&&!result.reds.includes('電解化毒'));
  assert.equal(result.directions,0);
  assert.ok(!result.html.includes('空槽還有其他'));
});

test('related red disclosure is absent on an empty build and includes every individually legal related route',()=>{
  const result=vm.runInContext(`(() => {
    state=R.empty();getFiveDualRecommendations();
    const empty=relatedRedRoutes(currentFiveDualGoal);
    R.toggle(state,'普攻淬毒');getFiveDualRecommendations();
    const before=JSON.stringify(R.serialize(state));
    const html=relatedRedRoutes(currentFiveDualGoal);
    const goals=new Set(currentFiveDualGoal.set.duals);
    const expected=DUALS.filter(d=>!goals.has(d.name)&&[...d.prim,...d.sec,...(d.need||[])].some(n=>R.nodes.get(n)?.tree===R.nodes.get('普攻淬毒').tree)&&R.plans(state,d).length).map(d=>d.name);
    return {empty,html,expected,unchanged:before===JSON.stringify(R.serialize(state))};
  })()`,context);
  assert.equal(result.empty,'');assert.ok(result.unchanged&&result.expected.length);
  for(const name of result.expected)assert.ok(result.html.includes(name),name);
  assert.ok(result.html.includes('可能互斥'));
  assert.ok(!result.html.includes(' open'));
});

test('live red progress retains the screenshot poison bases instead of automatically replacing three slots for five reds',()=>{
  const result=vm.runInContext(`(() => {
    state=R.empty();
    const owned=['普攻淬毒','技能毒液','衝刺毒彈','傳承技河豚','毒泡久噴','河豚延續','召喚史萊姆','自爆史萊姆','大型史萊姆'];
    for(const n of owned){const reason=R.toggle(state,n);if(reason)throw Error(n+reason);}
    state.fiveDualGoal=fiveDualKey(['分裂史萊姆','火精靈引爆','燃氣毒泡','燃燒爆彈','爆燃火彈']);
    const before=JSON.stringify(R.serialize(state));
    const recs=getFiveDualRecommendations(),goal=currentFiveDualGoal;
    renderFiveDualProgress();
    const unchanged=before===JSON.stringify(R.serialize(state));
    const entries=fiveDualRouteEntries().map(x=>x.d.name);
    const replacements=currentReplacementCandidates.map(x=>({duals:x.set.duals,changes:x.replacements}));
    const replacementHtml=replacementRouteSummary();
    const canSwitchReplacement=replacements.some(x=>switchFiveDualGoal(fiveDualKey(x.duals)));
    const trial=R.restore(R.serialize(state)).state;
    for(const n of goal.steps){const reason=R.toggle(trial,n);if(reason)throw Error(n+reason);}
    for(const [slot,name] of Object.entries(goal.set.slotAssignment)){const reason=R.acquire(trial,name,slot);if(reason)throw Error(name+reason);}
    return {count:goal.set.duals.length,changes:goal.replacements.length,entries,replacements,replacementHtml,
      canSwitchReplacement,unchanged,retained:owned.every(n=>trial.selected.has(n)),legal:recs.every(x=>!R.canSelect(state,x.name)),
      html:document.getElementById('dualProgress').innerHTML};
  })()`,context);
  assert.equal(result.count,4);assert.equal(result.changes,0);
  assert.ok(result.unchanged&&result.retained&&result.legal);
  assert.ok(result.entries.includes('毒液催化')&&result.entries.includes('中毒毒彈'));
  for(const name of ['火精靈引爆','爆燃火彈','燃燒爆彈','燃氣毒泡','分裂史萊姆'])assert.ok(!result.entries.includes(name),name);
  assert.ok(result.replacements.length);
  assert.equal(result.canSwitchReplacement,false,'replacement references must not be selectable as an unchanged goal');
  assert.ok(result.replacementHtml.includes('不計入當前進度')&&result.replacementHtml.includes('需替換：'));
  assert.ok(!result.replacementHtml.includes('data-action='));
  assert.ok(!result.replacementHtml.includes(' open'));
  assert.ok(result.html.includes('前置齊備 · 待取得'));
});

test('each ready red counts only its own prerequisites, not future upgrades shared with other targets',()=>{
  const result=vm.runInContext(`(() => {
    state=R.empty();
    for(const n of ['普攻淬毒','技能毒液','衝刺毒彈','傳承技河豚','毒泡久噴','河豚延續','召喚史萊姆','自爆史萊姆','大型史萊姆'])R.toggle(state,n);
    getFiveDualRecommendations();
    return fiveDualRouteEntries().map(({d,plan})=>({name:d.name,steps:plan.steps,ready:!R.acquireReason(state,d.name,plan.slot),html:redProgressBadge(d,plan,[])}));
  })()`,context);
  for(const row of result.filter(x=>x.ready)){
    assert.deepEqual([...row.steps],[],row.name);
    assert.ok(row.html.includes('data-status="ready"'));
    assert.equal((row.html.match(/class="filled"/g)||[]).length,(row.html.match(/--segment-position:/g)||[]).length,row.name);
  }
  assert.equal(result.filter(x=>x.ready).length,2);
  assert.ok(result.find(x=>x.name==='中毒毒彈').steps.length>0);
});

test('all ranking directions keep current bases, and II-tier locks remove replacement references',()=>{
  const result=vm.runInContext(`(() => {
    const cases=[];
    for(const mode of ['normal','extreme'])for(const sort of ['default','power','basic','redOnly']){
      state=R.empty();state.gameMode=mode;state.fiveDualSort=sort;
      for(const n of ['普攻淬毒','技能毒液','衝刺毒彈','傳承技河豚','毒泡久噴','河豚延續','召喚史萊姆','自爆史萊姆','大型史萊姆'])R.toggle(state,n);
      const bases=R.slotMap(state),before=JSON.stringify(R.serialize(state));
      const recs=getFiveDualRecommendations(),goal=currentFiveDualGoal;
      cases.push({mode,sort,unchanged:before===JSON.stringify(R.serialize(state)),count:goal?.set.duals.length,
        kept:!goal||Object.entries(bases).every(([slot,name])=>goal.set.bases[slot]===name),
        noReplacement:!goal||goal.replacements.length===0,legal:recs.every(x=>!R.canSelect(state,x.name))});
      for(const n of ['受擊毒霧','長效毒液','烈性毒彈']){const reason=R.toggle(state,n);if(reason)throw Error(n+reason);}
      getFiveDualRecommendations();
      if(currentReplacementCandidates.length)throw Error('locked bases still offered for replacement');
    }
    return cases;
  })()`,context);
  for(const row of result){assert.ok(row.unchanged&&row.kept&&row.noReplacement&&row.legal,JSON.stringify(row));assert.equal(row.count,4,JSON.stringify(row));}
});
