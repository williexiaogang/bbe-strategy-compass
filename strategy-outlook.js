/* A hypothetical next choice must preserve every existing choice and record.
 * Counts are witnessed simultaneous builds, not sums of mutually exclusive reds. */
function createCompassOutlook() {
  const R = CompassRules;
  const key = state => JSON.stringify([state.gameMode, [...state.selected].sort(), state.acquired, state.inherited]);
  function evaluate(state, name, sets, budget = 200) {
    if (state.selected.has(name) || R.canSelect(state, name)) return null;
    const seed = { ...state, selected: new Set([...state.selected, name]) };
    R.syncInherited(seed);
    const bases = R.slotMap(seed);
    const matching = sets.filter(set => Object.entries(bases).every(([slot, base]) => !base || set.bases[slot] === base));
    let best = null;
    const consider = result => {
      if (!best || result.count > best.count || result.count === best.count && result.steps.length < best.steps.length) best = result;
    };
    for (const set of matching) {
      const plan = R.fiveDualPlan(seed, set);
      if (!plan || plan.replacements.length) continue;
      consider({ count: set.duals.length, steps: plan.steps, targets: Object.entries(set.slotAssignment).map(([slot, name]) => ({ slot, name })),
        actions: null, source: 'representative', truncated: false });
    }
    if (seed.inherited.some(x => x?.slot && R.inheritedRules[x.name]?.delayed)) {
      for (const set of matching) {
        const plan = R.multiRedPlan(seed, set);
        if (plan) consider({ count: plan.set.duals.length, steps: plan.steps, targets: plan.set.targets,
          actions: plan.actions, source: 'representative', truncated: false });
      }
    }
    if (!best) {
      const plan = R.completeCharacter(seed, { conflicts: [], steps: [], build: { duals: [] } }, budget);
      if (plan) consider({ count: plan.redCount, steps: plan.steps, targets: plan.targets,
        actions: null, source: 'bounded', truncated: plan.search.truncated });
    }
    return { ...(best || { count: 0, steps: [], targets: [], actions: null, source: 'bounded', truncated: false }), budget };
  }
  function createWorker() {
    // A self-contained Blob also works when the planner is opened as a local
    // file. No network/importScripts dependency or second copy of the rules.
    function workLoop() {
      let revision = 0, sets;
      self.onmessage = event => {
        const ticket = ++revision, { id, state, names, presets, budget = 200 } = event.data;
        if (presets) sets = presets;
        if (!names.length) return;
        const seed = { ...state, selected: new Set(state.selected) };
        const next = () => {
          if (ticket !== revision) return;
          const name = names.shift();
          const result = CompassOutlook.evaluate(seed, name, sets[seed.gameMode === 'extreme' ? 'extreme' : 'normal'], budget);
          self.postMessage({ id, name, result });
          if (names.length) setTimeout(next, 0);
        };
        next();
      };
    }
    const source = `const CompassData=${JSON.stringify(CompassData)};\nconst CompassRules=(${createCompassRules.toString()})();\nconst CompassOutlook=(${createCompassOutlook.toString()})();\n(${workLoop.toString()})();`;
    const url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
    const worker = new Worker(url);
    worker.addEventListener('message', () => URL.revokeObjectURL(url), { once: true });
    worker.addEventListener('error', () => URL.revokeObjectURL(url), { once: true });
    return worker;
  }
  return { key, evaluate, createWorker };
}
const CompassOutlook = createCompassOutlook();
