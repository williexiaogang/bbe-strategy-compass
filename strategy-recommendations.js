/* ===== Recommendation engine: character / auto / five-dual ===== */
const RECOMMEND_MODES = [
  { id: 'character', label: '人物推薦' },
  { id: 'five-dual', label: '五紅策略優先' }
];
/* 五紅流派方向：default 按唯一前置缺口；power 使用最高檔固定傷害參考分；
   basic 只比較普攻直接增傷；不將獨立光波倍率或參考分解讀為實戰總傷害。 */
const FIVE_DUAL_SORTS = [
  { id: 'default', label: '取得優先（紅數／少前置）' },
  { id: 'power', label: '固定值指標優先' },
  { id: 'basic', label: '普攻直接增傷' },
  { id: 'redOnly', label: '紅策固定傷害參考' }
];
const ZERO_FIVE_DUAL_SCORE = { tiers: [0, 0, 0, 0], redOnly: 0, basicBoost: 0, strategyBoost: 0, basicTag: false };
let currentFiveDualGoal = null;
let currentFiveDualCandidates = [];
let currentBaseDirections = [];
let currentReplacementCandidates = [];
let currentCharacterGoal = null;

const fiveDualKey = duals => duals.slice().sort((a, b) => a.localeCompare(b, 'zh')).join('|');
function fiveDualScore(set) {
  const scores = state.gameMode === 'extreme'
    ? typeof FIVE_DUAL_EXTREME_SCORES !== 'undefined' && FIVE_DUAL_EXTREME_SCORES
    : typeof FIVE_DUAL_SCORES !== 'undefined' && FIVE_DUAL_SCORES;
  const s = scores && scores[fiveDualKey(set.duals)];
  const required = new Set([...Object.values(set.bases), ...Object.values(set.steps).flat()]);
  const extra = [...state.selected].filter(name => !required.has(name) && R.nodes.get(name)?.level > 1);
  if (extra.length && typeof CompassDamage !== 'undefined') {
    const values=[0,1,2,3].map(q=>CompassDamage.evaluate([...required,...extra],set.duals,q));
    return {tiers:values.map(x=>x.reference),redOnly:CompassDamage.evaluate([],set.duals,3).reference,
      basicBoost:values[3].basicBoost,strategyBoost:values[3].strategyBoost,basicTag:values[3].basicBoost>0};
  }
  if (!s && typeof CompassDamage !== 'undefined') {
    const values = [0,1,2,3].map(q => CompassDamage.evaluate([...required,...extra],set.duals,q));
    return { tiers: values.map(x => x.reference), redOnly: CompassDamage.evaluate([],set.duals,3).reference,
      basicBoost: values[3].basicBoost, strategyBoost: values[3].strategyBoost, basicTag: values[3].basicBoost > 0 };
  }
  if (!s) console.warn('五紅評分缺資料：', set.duals.join('、'));
  return s || ZERO_FIVE_DUAL_SCORE;
}

function getRecommendations() {
  if (R.modeConflicts(state).length) {
    currentFiveDualGoal = null; currentFiveDualCandidates = []; currentReplacementCandidates = [];
    return [];
  }
  if (state.recommendMode === 'character') return getCharacterRecommendations();
  if (state.recommendMode === 'five-dual') return getFiveDualRecommendations();
  // auto
  if (state.target) {
    return R.targetRecommendations(state, state.target, routePlans.get(state.target) || []);
  }
  return R.recommendations(state);
}

function getCharacterRecommendations() {
  currentCharacterGoal = R.characterPlan(state, currentCharacter);
  const goal = currentCharacterGoal;
  if (!goal || goal.conflicts.length) return [];
  goal.coreSteps = [...goal.steps];
  goal.completion = R.completeCharacter(state, goal);
  if (goal.completion) {
    goal.steps = goal.completion.steps;
    goal.remainingReds = [...new Set([...goal.build.duals, ...goal.completion.targets.map(x => x.name)])]
      .filter(n => !state.acquired.some(x => x.name === n) && !R.activeInherited(state).some(x => x.name === n));
    goal.pending = [...new Set([...goal.pending, ...state.inherited.filter(x => x &&
      (!x.confirmed || R.inheritanceReason(state,x))).map(x => x.name)])];
  }
  return R.frontier(state, goal.steps).map(name => ({ name, targets: [goal.build.name + ' · ' + goal.reason] }));
}

function getFiveDualRecommendations() {
  currentFiveDualGoal = null;
  currentFiveDualCandidates = [];
  currentBaseDirections = [];
  currentReplacementCandidates = [];
  const sets = state.gameMode === 'extreme'
    ? typeof FIVE_DUAL_EXTREME_SETS !== 'undefined' && FIVE_DUAL_EXTREME_SETS
    : typeof FIVE_DUAL_SETS !== 'undefined' && FIVE_DUAL_SETS;
  if (!sets || R.modeConflicts(state).length) return [];
  const sortMode = R.fiveDualSort(state.fiveDualSort);
  const compatibleSets = [];
  for (const set of sets) {
    const plan = R.fiveDualPlan(state, set);
    if (!plan) continue;
    const candidate = { set, ...plan, score: fiveDualScore(set) };
    // Live progress preserves owned bases. Replacing I-tier strategies is a
    // separate decision, not a continuation of the player's current build.
    if (plan.replacements.length) currentReplacementCandidates.push(candidate);
    else compatibleSets.push(candidate);
  }
  if (state.inherited.some(x => x?.slot && R.inheritedRules[x.name]?.delayed)) {
    const seen = new Set();
    for (const set of sets) {
      const plan = R.multiRedPlan(state,set);
      if (!plan || plan.set.duals.length <= 5) continue;
      const key = fiveDualKey(plan.set.duals);
      if (seen.has(key)) continue;
      seen.add(key);
      compatibleSets.push({ ...plan, score: fiveDualScore(plan.set) });
    }
  }
  // Replacement-only five-red routes do not suppress an unchanged partial build.
  if (!compatibleSets.length) {
    const complete = seed => {
      const completion = R.completeCharacter(seed, { conflicts: [], steps: [], build: { duals: [] } });
      return completion?.targets.length ? completionCandidate(seed,completion) : null;
    };
    const first = complete(state);
    if (first) compatibleSets.push(first);
    // With one base slot left, compare each legal choice independently. A single
    // best-effort completion cannot reveal equally viable choices in that slot.
    const emptySlots = SLOTS.filter(s => !R.slotMap(state)[s.id]);
    if (emptySlots.length === 1) {
      for (const tree of CompassData.STRATEGY_DATA) for (const base of tree.bases) {
        if (base.slot !== emptySlots[0].id || R.canSelect(state,base.name)) continue;
        const seed = R.restore(R.serialize(state)).state;
        if (R.toggle(seed,base.name)) continue;
        const candidate = complete(seed);
        if (!candidate) continue;
        // Do not suggest filling the last slot with an unrelated base when the
        // same reds can already be completed without using that base at all.
        if (!candidate.set.duals.some(name => R.plans(state,R.byName.get(name)).some(p => p.steps.includes(base.name)))) continue;
        currentBaseDirections.push({ name:base.name,slot:base.slot,candidate });
        const key = fiveDualKey(candidate.set.duals);
        const previous = compatibleSets.findIndex(x => fiveDualKey(x.set.duals) === key);
        if (previous < 0) compatibleSets.push(candidate);
        else if (candidate.missing < compatibleSets[previous].missing) compatibleSets[previous] = candidate;
      }
    }
  }
  let ranked;
  if (sortMode === 'default') {
    ranked = compatibleSets.sort((a, b) => b.set.duals.length - a.set.duals.length || a.missing - b.missing);
  } else {
    const pool = compatibleSets;
    const scoreOf = s => sortMode === 'redOnly' ? s.score.redOnly
      : sortMode === 'power' ? s.score.tiers[3]
      : s.score.basicBoost;
    ranked = pool.slice().sort((a, b) => scoreOf(b) - scoreOf(a) || a.missing - b.missing);
  }
  currentFiveDualCandidates = ranked.slice(0, 3);
  currentReplacementCandidates.sort((a,b) => a.replacements.length-b.replacements.length || a.missing-b.missing);
  // A displayed direction must remain selectable even when it falls beyond the
  // ordinary three representative alternatives.
  for (const {candidate} of currentBaseDirections) {
    if (candidate.set.duals.length !== ranked[0]?.set.duals.length) continue;
    const key = fiveDualKey(candidate.set.duals);
    if (!currentFiveDualCandidates.some(x => fiveDualKey(x.set.duals) === key)) currentFiveDualCandidates.push(candidate);
  }
  currentFiveDualGoal = sortMode !== 'power' && state.fiveDualGoal
    ? ranked.find(x => fiveDualKey(x.set.duals) === state.fiveDualGoal &&
      (sortMode !== 'default' || x.set.duals.length === ranked[0]?.set.duals.length)) ||
      ranked[0] || null : ranked[0] || null;
  if (!currentFiveDualGoal) return [];
  const { set, score } = currentFiveDualGoal;
  return fiveDualChoices().map(name => ({ name, targets: [`當前 ${set.duals.length} 紅(最高檔固定傷害參考分${score.tiers[3]})：${set.duals.join('、')}`] }));
}

function completionCandidate(seed, completion) {
  const final=R.restore(R.serialize(seed)).state;
  for(const name of completion.steps)if(!final.selected.has(name))R.toggle(final,name);
  const required = new Set(final.selected);
  const steps = [...required].filter(n => !state.selected.has(n) && !final.inherited.some(x=>x?.name===n&&x.confirmed))
    .sort((a,b) => R.nodes.get(a).level - R.nodes.get(b).level);
  const set = { duals:completion.targets.map(x => x.name),
    bases:Object.fromEntries([...required].filter(n => R.nodes.get(n)?.level === 1).map(n => [R.nodes.get(n).slot,n])),
    steps:{completion:[...required].filter(n => R.nodes.get(n)?.level > 1)},
    slotAssignment:Object.fromEntries(completion.targets.map(x => [x.slot,x.name])) };
  return {set,required,steps,missing:steps.length,search:completion.search,
    remainingReds:set.duals.filter(n => !state.acquired.some(x => x.name === n) && !R.activeInherited(state).some(x => x.name === n)),
    replacements:[],score:fiveDualScore(set),fallback:true};
}

// Acquisition order is random in-game. Show the legal frontier, not one slot-ordered step.
function fiveDualChoices() {
  if (currentFiveDualGoal?.multiRed) {
    const next = currentFiveDualGoal.actions[0];
    return next?.type === 'select' ? [next.name] : [];
  }
  return (currentFiveDualGoal?.steps || []).filter(name => !state.selected.has(name) && !R.canSelect(state, name));
}

function fiveDualChoiceLabel(name) {
  const change = currentFiveDualGoal?.replacements?.find(x => x.to === name);
  return change ? `替換「${change.from}」為「${name}」` : name;
}

function switchFiveDualGoal(key) {
  if (R.fiveDualSort(state.fiveDualSort) === 'power') return false;
  if (!currentFiveDualCandidates.some(x => fiveDualKey(x.set.duals) === key)) return false;
  state.fiveDualGoal = key;
  return true;
}

function switchGameMode(mode) {
  return R.setGameMode(state, mode);
}
