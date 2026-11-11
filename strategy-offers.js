/* Temporary game offers are previews; only the explicit selection records one. */
let offerChoices = ['', '', ''];

function renderOfferComparison() {
  const host = document.getElementById('offerComparison');
  const advice = document.getElementById('offerAdvice');
  const legal = [...R.nodes].filter(([name]) => !state.selected.has(name) && !R.canSelect(state, name));
  const currentCore = currentCharacter && offerChoices.some(Boolean) ? R.characterPlan(state, currentCharacter) : null;
  const goal = currentFiveDualGoal || currentCharacterGoal;
  const goalSteps = new Set(goal?.steps || []);
  const entries = offerChoices.map((name, index) => {
    const valid = legal.some(([n]) => n === name);
    let ready = [], core = '', advances = false, remaining = null, coreConflict = false;
    if (valid) {
      const trial = R.restore(R.serialize(state)).state;
      R.toggle(trial, name);
      ready = DUALS.filter(d => !state.acquired.some(x => x.name === d.name) && !state.inherited.some(x => x?.name === d.name) &&
        d.slots.some(slot => R.acquireReason(state, d.name, slot) && !R.acquireReason(trial, d.name, slot)));
      advances = goalSteps.has(name);
      if (advances) remaining = Math.max(0, (goal?.missing ?? goal?.steps.length ?? 1) - 1);
      if (currentCore) {
        trial.characterBuild = currentCore.index;
        coreConflict = Boolean(R.characterPlan(trial, currentCharacter)?.conflicts.length);
        core = coreConflict ? '與目前人物核心衝突' : '可保留目前人物核心';
      }
    }
    const recommended = valid && !coreConflict && (advances || ready.length > 0);
    const summary = coreConflict ? '會破壞目前人物核心，不建議為了紅數直接選取'
      : ready.length ? `選後可立即取得：${ready.map(d => d.name).join('、')}`
      : advances ? `推進目前目標，選後還差 ${remaining} 條前置`
      : '不推進目前目標，請比較紅數與剩餘前置';
    const html = `<article class="card offer-card ${recommended ? 'recommended' : ''}"><label for="offer-${index}">遊戲選項 ${index + 1}</label>
      <select class="select select-sm" id="offer-${index}" data-action="offer-choice" data-value="${index}"><option value="">選擇遊戲出現的策略</option>
      ${name && !valid ? `<option value="${esc(name)}" selected>${esc(name)}（已取得或不可選）</option>` : ''}
      ${legal.map(([n, node]) => `<option value="${esc(n)}" ${n === name ? 'selected' : ''} ${offerChoices.some((x, i) => i !== index && x === n) ? 'disabled' : ''}>${esc(slotLabel(node.slot || R.base(state, node.tree)?.slot))} · ${TIER_LABEL[node.level]} · ${esc(n)}</option>`).join('')}</select>
      ${name ? valid ? `<p class="offer-decision"><strong>${recommended ? '建議選擇' : '路線影響'}</strong><span>${esc(summary)}</span></p>
      <button type="button" class="btn offer-pick" data-action="offer-select" data-value="${esc(name)}" aria-label="選這個：${esc(name)}"><span>選這個</span><span class="badge badge-sm badge-outline node-outlook" data-outlook-name="${esc(name)}" aria-busy="true">試算中…</span></button>
      ${core ? `<p>${esc(core)}</p>` : ''}${button('查看效果與路線', 'strategy-detail', name)}` : '<p>目前已取得或前置不符，請更新此選項。</p>' : '<p>填入遊戲實際出現的策略</p>'}</article>`;
    return { name, valid, recommended, summary, html };
  });
  const selected = entries.filter(entry => entry.valid);
  const best = selected.find(entry => entry.recommended);
  advice.innerHTML = best ? `<strong>建議選「${esc(best.name)}」</strong><span>${esc(best.summary)}</span>`
    : selected.length ? '這些選項都未直接推進目前目標；比較紅數與差值，或切換推薦目標。'
    : '填入遊戲本次出現的選項，這裡會標出對目前目標最有幫助的一項。';
  host.innerHTML = entries.map(entry => entry.html).join('');
}
