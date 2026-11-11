/* Route states use the current build, without assuming earlier planned steps are owned. */
const redFillPlans = new Map();

function redRecipe(dual) {
  const group = names => names.map(esc).join(' <b>或</b> ');
  return `<div class="red-recipe" aria-label="取得條件">
    <p><span>條件</span>${group(dual.prim)} <b>＋</b> ${group(dual.sec)}</p>
    ${(dual.need || []).length ? `<p><span>額外</span>${dual.need.map(esc).join(' ＋ ')}</p>` : ''}</div>`;
}
function redRouteSummary(plan) {
  return `<div class="red-route-summary">
    <p><span>槽位</span>${esc(slotLabel(plan.slot))}</p>
    <p><span>尚需</span>${plan.steps.length ? plan.steps.map(esc).join('、') : '前置齊備'}</p>
  </div>`;
}
function conflictSummary(goal) {
  const inherited = state.inherited.find(x=>x?.name===goal.name);
  if (inherited) return `此紅策已配置在傳承欄：${esc(R.inheritanceReason(state,inherited) || '承載條件齊備，請在遊戲確認啟用')}。普通取得路線不重複配置。`;
  const options = R.adjustments(state,goal);
  return `<p>目前路線不可達，可預覽以下調整。</p>${options.length ?
    options.map((x,i)=>`<details class="route-detail"><summary>調整方案 ${i+1} · 移除 ${x.removed.length} 條策略／${x.records.length+x.inherited.length} 條記錄</summary>
      <p>${x.reasons.map(esc).join('；')}</p>
      ${x.removed.length ? `<p>需取消（含連帶移除）：${x.removed.map(esc).join('、')}</p>` : ''}
      ${x.records.length ? `<p>受影響的已取得記錄：${x.records.map(esc).join('、')}</p>` : ''}
      ${x.inherited.length ? `<p>需移出傳承：${x.inherited.map(esc).join('、')}</p>` : ''}
      ${x.unconfirmed.length ? `<p>需重新確認傳承啟用：${x.unconfirmed.map(esc).join('、')}</p>` : ''}
      <p>調整後尚需前置：${x.plan.steps.map(esc).join('、') || '前置已齊備'} · ${esc(slotLabel(x.plan.slot))}</p></details>`).join('') :
    '<p>目前未找到調整方案。</p>'}
    <details class="route-detail"><summary>目標前置與效果</summary><p>主條件任一：${goal.prim.map(esc).join('／')}；次條件任一：${goal.sec.map(esc).join('／')}；額外條件：${(goal.need||[]).map(esc).join('、')||'無'}。承載樹仍須 III 階。</p><p>${esc(goal.desc)}</p></details>`;
}

// Drop shared-tree upgrades needed only by another target, without introducing
// a branch outside the joint plan. Already-ready reds therefore show full bars.
function redTargetSteps(name, slot, steps) {
  const reaches = path => {
    const trial = { ...state, selected: new Set(state.selected) };
    return path.every(n => {
      if (R.canSelect(trial, n)) return false;
      trial.selected.add(n); R.syncInherited(trial); return true;
    }) && !R.acquireReason(trial, name, slot);
  };
  let needed = steps;
  for (let i = needed.length - 1; i >= 0; i--) {
    const reduced = needed.filter((_, index) => index !== i);
    if (reaches(reduced)) needed = reduced;
  }
  return needed;
}

// Each target uses only prerequisites from the shared five-red plan, with its assigned host slot.
function fiveDualRouteEntries() {
  if (!currentFiveDualGoal) return [];
  const { set, steps } = currentFiveDualGoal;
  const replaced = new Set((currentFiveDualGoal.replacements || []).map(x => x.from));
  const finalSelected = new Set([...state.selected].filter(n => !replaced.has(n)).concat(steps));
  const targets = set.targets || Object.entries(set.slotAssignment).map(([slot,name]) => ({ slot,name }));
  return targets.map(({slot, name}) => {
    const d = R.byName.get(name);
    const relevant = [...d.prim, ...d.sec, ...(d.need || []),
      ...R.hosts(d).filter(n => R.nodes.get(n)?.slot === slot)].filter(n => finalSelected.has(n));
    const trees = new Set(relevant.map(n => R.nodes.get(n)?.tree));
    const dependencies = steps.filter(n => trees.has(R.nodes.get(n)?.tree))
      .flatMap(n => R.nodeRequirements[n] || []).flat().filter(n => finalSelected.has(n));
    const needed = redTargetSteps(name, slot, steps.filter(n => trees.has(R.nodes.get(n)?.tree) || dependencies.includes(n)));
    return { d, plan: { slot, steps: needed },
      acquired: state.acquired.some(x => x.name === name), inherited: state.inherited.find(x => x?.name === name) };
  });
}

// Badge progress and its floating detail use the same remaining prerequisites.
function redProgressBadge(d, plan, nextNames, label = '') {
  const acquired = state.acquired.find(x => x.name === d.name);
  const inherited = state.inherited.find(x => x?.name === d.name);
  const active = inherited && R.activeInherited(state).some(x => x.name === d.name);
  const trees = new Set(plan.steps.map(n => R.nodes.get(n)?.tree));
  [...d.prim, ...d.sec, ...(d.need || []), ...R.hosts(d).filter(n => R.nodes.get(n)?.slot === plan.slot)]
    .forEach(n => { const tree = R.nodes.get(n)?.tree; if (tree) trees.add(tree); });
  const owned = [...state.selected].filter(n => trees.has(R.nodes.get(n)?.tree));
  const total = new Set([...owned, ...plan.steps]).size;
  const done = total - plan.steps.length;
  const blocked = R.modeConflicts(state).length > 0;
  const ready = !blocked && !acquired && !inherited && !R.acquireReason(state, d.name, plan.slot);
  const status = acquired ? '已取得' : active ? '傳承已啟用' : inherited ? '傳承待啟用'
    : blocked ? '模式衝突' : ready ? '待取得' : plan.steps.length ? `前置 ${done}/${total}` : '承載待確認';
  const tone = acquired || active ? 'complete' : ready ? 'ready' : inherited || blocked ? 'pending' : 'locked';
  const sources = [d.prim, d.sec].map(group => {
    const candidates = [...new Set(group.map(n => R.nodes.get(n)?.tree).filter(Boolean))];
    const tree = candidates.find(t => [...state.selected, ...plan.steps].some(n => R.nodes.get(n)?.tree === t)) || candidates[0];
    const pending = plan.steps.filter(n => R.nodes.get(n)?.tree === tree);
    const selected = [...state.selected].filter(n => R.nodes.get(n)?.tree === tree);
    const chosen = group.find(n => state.selected.has(n));
    const count = new Set([...selected, ...pending]).size;
    const complete = !!(acquired || active || !inherited && count && !pending.length);
    return { tree, name:chosen || tree?.name || '策略來源', color:elementOf(tree?.element)?.color || 'var(--muted)', count,
      done:count-pending.length, complete };
  });
  const colors = sources.map(s => s.color);
  const primary = colors[0] || 'var(--muted)', secondary = colors[1] || primary;
  const slot = acquired?.slot || inherited?.slot || plan.slot;
  const fillKey = d.name + '|' + plan.slot;
  redFillPlans.set(fillKey, {slot:plan.slot,steps:[...plan.steps]});
  return `<details id="red-badge-${DUALS.indexOf(d)}" class="red-badge" data-status="${tone}" style="--red-primary:${primary};--red-secondary:${secondary}">
    <summary aria-label="${esc(d.name)}，${esc(status)}，查看詳情">
      <span class="red-fusion ${ready || acquired || active ? 'joined' : ''}" aria-hidden="true">
        ${sources.map(s => `<span class="fusion-part ${s.complete ? 'source-ready' : ''}" style="--el:${s.color}"><span class="red-element" style="--el:${s.color}">${CompassArt.icon(s.tree)}</span></span>`).join('')}
        <span class="fusion-joint">${acquired || active ? '✓' : ''}</span>
      </span>
      <span class="fusion-sources">${sources.map(s => `<span class="fusion-source ${s.complete ? 'source-ready' : ''}" style="--el:${s.color}"><span>${esc(s.name)}</span><small>${inherited ? active ? '已啟用' : '傳承待啟用' : acquired ? '✓' : s.count ? s.done + '/' + s.count : '未選'}</small></span>`).join('<span class="fusion-plus" aria-hidden="true">＋</span>')}</span>
      <strong class="red-badge-name">${esc(d.name)}</strong>
      <span class="red-badge-slot">${esc(slotLabel(slot))}${label ? ' · ' + esc(label) : ''}</span>
      <span class="badge badge-sm red-badge-status">${acquired || active ? '✓ ' : ready ? '◇ ' : ''}${esc(status)}</span>
      <span class="red-segments" aria-hidden="true" style="--segment-count:${Math.max(total, 1)}">${Array.from({length: Math.max(total, 1)}, (_, i) => `<i style="--segment-position:${total > 1 ? i / (total - 1) * 100 : 0}%" class="${acquired || active || !inherited && i < done ? 'filled' : ''}"></i>`).join('')}</span>
    </summary>
    <div class="red-badge-detail" role="region" aria-label="${esc(d.name)}詳情">
      <h3 class="red-detail-title">${esc(d.name)}</h3>
      ${!acquired && !inherited ? redRecipe(d) + redRouteSummary(plan) : ''}
      ${!acquired && !inherited ? `<div class="dual-actions red-fill">${button('加入裝配規劃', 'plan-red', fillKey)}</div>` : ''}
      ${inherited && !active ? `<p>${esc(R.inheritanceReason(state, inherited) || '傳承待啟用')}</p>` : ''}
      <div class="red-effect"><p>${esc(d.desc)}</p></div>
      ${ready ? `<div class="dual-actions">${button('取得後確認 · ' + slotLabel(plan.slot), 'acquire', d.name + '|' + plan.slot)}</div>` : ''}
      ${acquired ? `<div class="dual-actions">${button('撤銷取得記錄', 'unacquire', d.name)}</div>` : ''}
    </div>
  </details>`;
}

/* ===== Multi-red operating guide =====
   multiRedPlan replays from the current build on every render, so its action
   list is always the exact remaining order. Show step 1 as the live action and
   fold the rest, so the page never turns into a wall of text. */
function multiRedStepDone(action) {
  if (action.type === 'select') return state.selected.has(action.name);
  if (action.type === 'acquire') return state.acquired.some(x => x.name === action.name);
  const entry = state.inherited.find(x => x?.name === action.name);
  return Boolean(entry?.confirmed) && !R.inheritanceReason(state, entry);
}
function multiRedStep(action, no, showReason = false) {
  const kind = { select: ['選擇', '策略'], acquire: ['取得', '紅策'], confirm: ['啟用', '傳承'] }[action.type] || ['操作', ''];
  let label = '', reason = '', act = '';
  if (action.type === 'select') {
    const node = R.nodes.get(action.name);
    const slot = node && (node.slot || R.base(state, node.tree)?.slot || node.tree.bases?.[0]?.slot);
    label = `選擇策略「${esc(action.name)}」${node ? ` · ${TIER_LABEL[node.level] || ''}階` : ''}${slot ? ' · ' + esc(slotLabel(slot)) : ''}`;
    reason = R.canSelect(state, action.name);
    act = `<button type="button" class="btn btn-sm" data-action="recommend" data-value="${esc(action.name)}">立即選擇</button>`;
  } else if (action.type === 'acquire') {
    label = `在遊戲中取得紅策「${esc(action.name)}」後按確認${action.slot ? ' · ' + esc(slotLabel(action.slot)) : ''}`;
    reason = R.acquireReason(state, action.name, action.slot);
    act = `<button type="button" class="btn btn-sm" data-action="acquire" data-value="${esc(action.name + '|' + action.slot)}">取得後確認</button>`;
  } else {
    const index = state.inherited.findIndex(x => x?.name === action.name);
    label = `在遊戲中確認傳承「${esc(action.name)}」已生效，再按「啟用傳承」`;
    const entry = state.inherited[index];
    reason = entry ? R.inheritanceReason(state, entry) : '傳承尚未配置';
    if (index >= 0) act = `<button type="button" class="btn btn-sm" data-action="inherit-confirm" data-value="${index}">確認啟用</button>`;
  }
  return { html: `<li class="mr-step"${reason ? ` title="${esc(reason)}"` : ''}>
      <span class="mr-no" aria-hidden="true">${no}</span>
      <span class="mr-kind" data-kind="${action.type}">${kind[0]}</span>
      <span class="mr-label">${label}${showReason && reason ? ` <small class="mr-reason">（${esc(reason)}）</small>` : ''}</span>
      ${reason ? '' : act}
    </li>`, done: false, locked: Boolean(reason) };
}
function multiRedGuide() {
  const goal = currentFiveDualGoal;
  const actions = goal?.actions || [];
  if (!goal?.multiRed || !actions.length) return '';
  const current = actions.findIndex(a => !multiRedStepDone(a));
  if (current < 0) return '';
  const now = multiRedStep(actions[current], '現在', true);
  const rest = actions.slice(current + 1).map((a, i) => multiRedStep(a, i + 2));
  const remaining = actions.length - current;
  return `<details class="mr-guide" open>
    <summary>多紅操作順序 · 剩餘 ${remaining} 步</summary>
    <div class="mr-now">${now.html}</div>
    ${rest.length ? `<details class="mr-rest"><summary>展開後續 ${rest.length} 步</summary><ol class="mr-steps">${rest.map(x => x.html).join('')}</ol></details>` : ''}
  </details>`;
}

function renderFiveDualProgress() {
  const goal = currentFiveDualGoal;
  const choices = fiveDualChoices();
  const key = goal ? fiveDualKey(goal.set.duals) : state.fiveDualGoal;
  const damagePriority = R.fiveDualSort(state.fiveDualSort) === 'power';
  const directions = !damagePriority && goal ? currentBaseDirections.filter(x =>
    x.candidate.set.duals.length === goal.set.duals.length && goal.set.bases[x.slot] !== x.name) : [];
  const directionKeys = new Set(directions.map(x => fiveDualKey(x.candidate.set.duals)));
  const alternatives = damagePriority ? [] : currentFiveDualCandidates.filter(x => fiveDualKey(x.set.duals) !== key && !directionKeys.has(fiveDualKey(x.set.duals)));
  document.getElementById('dualProgress').innerHTML = `
    <div class="panel-heading"><h2>紅策進度 <span class="dp-total">當前${goal ? goal.set.duals.length + ' 紅' : '五紅'}方案</span></h2></div>
    ${multiRedGuide()}
    <div class="red-badges">${fiveDualRouteEntries().sort((a,b) => SLOTS.findIndex(s => s.id === a.plan.slot) - SLOTS.findIndex(s => s.id === b.plan.slot)).map(({ d, plan }) => {
      return redProgressBadge(d, plan, choices);
    }).join('') || `<p class="empty">${!damagePriority && state.fiveDualGoal ? '原五紅方案已受阻，未自動改換目標。' : '目前沒有相容的五紅方案。'}</p>`}</div>
    ${directions.length ? `<section class="base-directions" aria-label="空槽的其他同紅數方向">
      <h3>空槽還有其他 ${goal.set.duals.length} 紅方向</h3>
      ${directions.map(({name,slot,candidate}) => `<div class="base-direction"><div><strong>${esc(slotLabel(slot))} · ${esc(name)}</strong><span>同樣 ${candidate.set.duals.length} 紅 · 尚缺 ${candidate.missing} 條前置</span><small>改走：${candidate.set.duals.filter(n => !goal.set.duals.includes(n)).map(esc).join('、') || '相同紅策的其他前置路線'}</small></div>
        ${button('查看此方向','five-dual-goal',fiveDualKey(candidate.set.duals))}</div>`).join('')}</section>` : ''}
    ${relatedRedRoutes(goal)}
    ${replacementRouteSummary()}
    ${alternatives.length ? `<details id="five-dual-alternatives" class="route-detail"><summary>替代紅策方案 · 切換後才更新推薦</summary>
      ${alternatives.map(x => `<p>${esc(x.set.duals.join('、'))} · 尚缺 ${x.missing} 條前置
        ${button('切換至此紅策方案', 'five-dual-goal', fiveDualKey(x.set.duals))}</p>`).join('')}</details>` : ''}`;
}

function replacementRouteSummary() {
  const candidates = currentReplacementCandidates.filter(x => x.set.duals.length >= (currentFiveDualGoal?.set.duals.length || 0));
  if (!candidates.length) return '';
  return `<details id="replacement-red-routes" class="route-detail replacement-red-routes"><summary>需替換 I 階基礎的其他方案</summary>
    ${candidates.slice(0,3).map(x=>`<div class="replacement-route"><strong>替換後可規劃 ${x.set.duals.length} 紅</strong><p>需替換：${x.replacements.map(change=>`${esc(change.from)} → ${esc(change.to)}`).join('；')}</p><small>${x.set.duals.map(esc).join('、')}</small></div>`).join('')}</details>`;
}

// All individually legal red routes tied to an already chosen tree are useful
// context, even when they are absent from the single joint recommendation.
function relatedRedRoutes(goal) {
  if (!state.selected.size || R.modeConflicts(state).length) return '';
  const chosenTrees = new Set([...state.selected].map(n => R.nodes.get(n)?.tree));
  const goals = new Set(goal?.set.duals || []);
  const related = DUALS.filter(d => !goals.has(d.name) && !state.acquired.some(x => x.name === d.name) &&
    !state.inherited.some(x => x?.name === d.name) && [...d.prim,...d.sec,...(d.need || [])].some(n => chosenTrees.has(R.nodes.get(n)?.tree)))
    .map(d => ({d,plan:R.plans(state,d)[0]})).filter(x => x.plan)
    .sort((a,b) => a.plan.steps.length-b.plan.steps.length);
  if (!related.length) return '';
  return `<details id="related-red-routes" class="route-detail related-red-routes"><summary>已選策略還可延伸 ${related.length} 種紅策</summary>
    <div class="related-red-list">${related.map(({d,plan}) => {
      const bases = plan.steps.filter(n => R.nodes.get(n)?.level === 1);
      return `<div class="related-red-row"><div><strong>${esc(d.name)}</strong><span>${esc(slotLabel(plan.slot))} · ${plan.steps.length ? '尚缺 ' + plan.steps.length + ' 條前置' : '前置齊備 · 待取得'}</span>
        ${bases.length ? `<small>需補基礎：${bases.map(esc).join('、')}</small>` : ''}</div>${button('查看前置','related-red-detail',d.name)}</div>`;
    }).join('')}</div></details>`;
}

function characterRoutePlans(dual, fallback) {
  const goal = currentCharacterGoal;
  const target = goal?.completion?.targets.find(x => x.name === dual.name);
  if (!target) return fallback.filter(p => p.steps.every(n => state.selected.has(n) || goal?.steps.includes(n)));
  const final = new Set([...state.selected, ...goal.steps]);
  const related = [...dual.prim, ...dual.sec, ...(dual.need || []), ...R.hosts(dual).filter(n => R.nodes.get(n).slot === target.slot)]
    .filter(n => final.has(n));
  const trees = new Set(related.map(n => R.nodes.get(n)?.tree));
  const dependencies = goal.steps.filter(n => trees.has(R.nodes.get(n)?.tree))
    .flatMap(n => R.nodeRequirements[n] || []).flat().filter(n => final.has(n));
  return [{ slot: target.slot, steps: redTargetSteps(dual.name,target.slot,goal.steps.filter(n => trees.has(R.nodes.get(n)?.tree) || dependencies.includes(n))) }];
}

function renderDualProgress(recs = []) {
  redFillPlans.clear();
  if (state.recommendMode === 'five-dual') renderFiveDualProgress();
  else {
  const shared = new Set(recs.map(r => r.name));
  const characterMode = state.recommendMode === 'character';
  const character = characterMode && currentCharacterGoal;
  const characterTargets = character && new Set([...character.build.duals, ...(character.completion?.targets || []).map(x => x.name)]);
  const entries = DUALS.filter(d => !characterMode || character && !character.conflicts.length && characterTargets.has(d.name))
    .map(d => {
      const record = state.acquired.find(x => x.name === d.name) || state.inherited.find(x => x?.name === d.name);
      return {d, plans:record ? [{slot:record.slot,steps:[]}] : character ? characterRoutePlans(d,routePlans.get(d.name) || []) : routePlans.get(d.name) || [],
        related:!!record || [...d.prim,...d.sec,...(d.need || [])].some(n=>state.selected.has(n))};
    })
    .filter(x=>x.plans.length).sort((a,b)=>a.plans[0].steps.length-b.plans[0].steps.length);
  const related = entries.filter(x=>x.related || x.d.name === state.target).sort((a,b)=>Number(b.d.name===state.target)-Number(a.d.name===state.target));
  const shown = character ? entries : showAllDuals ? entries : state.target ? entries.filter(x => x.d.name === state.target) : related.slice(0,5);
  document.getElementById('dualProgress').innerHTML = `
    <div class="panel-heading"><h2>紅策進度 <span class="dp-total">${character ? '人物核心與五紅補完' : ''}</span></h2>
    ${characterMode ? '' : button(showAllDuals ? '收起' : '更多路線', 'all-duals', '')}</div>
    <div class="red-badges">${shown.sort((a,b) => SLOTS.findIndex(s => s.id === a.plans[0].slot) - SLOTS.findIndex(s => s.id === b.plans[0].slot))
      .map(({d,plans}) => redProgressBadge(d, plans[0], shared, character ? character.build.duals.includes(d.name) ? '核心' : '補完' : '')).join('')
      || '<p class="empty">選擇人物流派或基礎策略，查看紅策目標。</p>'}</div>`;
  }
  const acquired=state.acquired.length, inherited=state.inherited.filter(Boolean).length;
  document.getElementById('buildResult').hidden = !acquired && !inherited;
  document.getElementById('buildResult').innerHTML = `<details id="red-records"><summary>管理策略記錄 · 紅策已取得 ${acquired} · 傳承 ${inherited}</summary>
    ${state.acquired.map(x=>`<div class="recorded-dual"><span>${esc(x.name)} <small>${slotLabel(x.slot)}</small></span>${button('撤銷','unacquire',x.name)}</div>`).join('')}
    ${state.inherited.filter(Boolean).map(x=>`<p>${esc(x.name)} · ${x.confirmed&&!R.inheritanceReason(state,x) ? '已啟用' : '待啟用'}</p>`).join('')}
    ${!acquired&&!inherited ? '<p class="empty">還沒有紅策記錄</p>' : ''}</details>`;
}
