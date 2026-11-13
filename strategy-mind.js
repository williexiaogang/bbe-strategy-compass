const MIND = CompassMindData;
let activeView = 'simulator';
let mindTab = 'routes';
let mindPool = 'all';
let mindCategory = 'all';
let mindCrystalGroup = 'all';
let mindCharacterFilter = 'all';
let mindQuery = '';

const mindPoolInfo = id => MIND.pools.find(pool => pool.id === id);
const mindCategoryInfo = id => MIND.categories.find(category => category.id === id);
const mindBadge = (label, tone = '') => `<span class="badge badge-sm badge-outline ${tone}">${esc(label)}</span>`;

function showView(view) {
  if (!['simulator', 'mind'].includes(view)) return;
  activeView = view;
  for (const id of ['simulator', 'mind']) {
    const section = document.getElementById(id);
    section.hidden = id !== view;
    section.classList.toggle('active', id === view);
  }
  document.querySelectorAll('[data-action="show-view"]').forEach(control => {
    if (control.dataset.value === view) control.setAttribute('aria-current', 'page');
    else control.removeAttribute('aria-current');
  });
  if (view === 'mind') {
    mindCharacterFilter = currentCharacter || 'all';
    renderMindGuide();
  }
  scrollTo({ top: 0, behavior: 'auto' });
}

function mindEffectChip(id) {
  const effect = MIND.effect(id);
  if (!effect) return '';
  return `<span class="mind-chip" data-pool="${effect.pool}">${esc(effect.name)}<small>${esc(mindPoolInfo(effect.pool).short)}</small></span>`;
}

function mindEffectDetails(route) {
  const ids = [...route.core, ...route.special];
  return `<details class="mind-effect-details" id="mind-route-effects-${route.id}"><summary>查看 ${ids.length} 項相關效果的完整描述</summary>
    <ul>${ids.map(id => {
      const effect = MIND.effect(id);
      return `<li><strong>${esc(effect.name)}</strong><span>${esc(effect.desc || effect.reward)}</span>
        ${effect.challenge ? `<small>挑戰：${esc(effect.challenge)}</small>` : ''}
        ${effect.cost != null ? `<small>黑市代價：HP 上限 -${effect.cost}%</small>` : ''}
        ${effect.note ? `<small>${esc(effect.note)}</small>` : ''}</li>`;
    }).join('')}</ul></details>`;
}

function mindLegacyDonors(route, active) {
  const build = CompassLegacy.find(route.legacyId);
  const goal = active ? CompassLegacy.normalize(state.legacyBuild, route.character) : null;
  return build.legacies.map(([id, preset], index) => {
    const donor = CompassLegacy.donors[id];
    const skill = goal ? goal.skills[index] : preset;
    return `<div class="mind-donor"><strong>${esc(donor.name)}</strong><span>${esc(donor.skills[skill][0])}</span>
      <small>${esc(donor.skills[skill][1])}</small></div>`;
  }).join('');
}

function mindRouteCard(route) {
  const character = CHARACTERS.find(item => item.id === route.character);
  const active = state.legacyBuild?.id === route.legacyId;
  const selected = currentCharacter === route.character;
  return `<article class="mind-route ${active ? 'active' : ''}" aria-labelledby="mind-route-${route.id}">
    <div class="mind-route-head"><div><span class="mind-character">${esc(character.name)}</span>
      <h3 id="mind-route-${route.id}">${esc(route.name)}</h3></div>
      <div class="mind-route-badges">${active ? mindBadge('本局目標', 'badge-info') : ''}${route.evidence ? mindBadge(route.evidence, 'badge-warning') : mindBadge('配合推論')}</div></div>
    <p class="mind-route-summary">${esc(route.summary)}</p>
    <section class="mind-route-section"><h4>開局雙傳承</h4><div class="mind-donors">${mindLegacyDonors(route, active)}</div></section>
    <section class="mind-route-section"><h4>成型順序</h4><ol class="mind-steps">${route.steps.map(step => `<li>${esc(step)}</li>`).join('')}</ol></section>
    <section class="mind-route-section"><h4>核心意識</h4><div class="mind-chip-list">${route.core.map(mindEffectChip).join('')}</div></section>
    <section class="mind-route-section"><h4>特殊房與考驗</h4><div class="mind-chip-list">${route.special.map(mindEffectChip).join('')}</div></section>
    ${mindEffectDetails(route)}
    <p class="mind-risk"><strong>中斷條件</strong>${esc(route.risk)}</p>
    <div class="mind-route-actions">
      <button type="button" class="btn btn-sm" data-action="mind-goal" data-value="${route.legacyId}" ${active ? 'disabled' : ''}>${active ? '已設為本局傳承目標' : '設為本局傳承目標'}</button>
      <button type="button" class="btn btn-sm btn-ghost" data-action="mind-strategies" data-value="${route.character}">查看對應策略路線</button>
      ${selected ? '<span class="mind-selected">目前配裝角色</span>' : `<button type="button" class="btn btn-sm btn-ghost" data-action="mind-use-character" data-value="${route.character}">設為配裝角色</button>`}
    </div>
  </article>`;
}

function mindCharacterSelect() {
  return `<label class="mind-character-select" for="mindCharacter">瀏覽角色
    <select id="mindCharacter" class="select" data-action="mind-character">
      <option value="all">全部角色</option>${CHARACTERS.map(character => `<option value="${character.id}" ${mindCharacterFilter === character.id ? 'selected' : ''}>${esc(character.name)}</option>`).join('')}
    </select></label>`;
}

function renderMindRoutes() {
  const current = CHARACTERS.find(character => character.id === currentCharacter);
  const goal = CompassLegacy.find(state.legacyBuild?.id);
  const routes = MIND.routesFor(mindCharacterFilter).sort((a, b) =>
    Number(state.legacyBuild?.id === b.legacyId) - Number(state.legacyBuild?.id === a.legacyId));
  return `<div class="mind-context">
      <div><h3>先完成觸發循環，再補增傷</h3><p>線路引用現有雙傳承資料；設為目標後，仍須回到配裝頁確認第二技解鎖與局內條件。</p></div>
      ${mindCharacterSelect()}
    </div>
    <div class="mind-current"><span>配裝角色：<strong>${esc(current?.name || '未選擇')}</strong></span><span>傳承目標：<strong>${esc(goal?.name || '未設定')}</strong></span><span>${routes.length} 條候選</span></div>
    <div class="mind-route-list">${routes.map(mindRouteCard).join('')}</div>
    <p class="mind-source-note">這些是機制導向的研究候選，不是實測強度榜。黑市扣血、考驗場數和契約效果可能隨版本調整；請以當前遊戲描述為準。</p>`;
}

function mindSearchField(placeholder) {
  return `<label class="mind-search" for="mindSearch"><span>搜尋</span><input id="mindSearch" class="input" type="search" value="${esc(mindQuery)}" placeholder="${esc(placeholder)}" autocomplete="off"></label>`;
}

function mindFilterButtons(items, selected, action, label) {
  return `<div class="mind-filters" role="group" aria-label="${esc(label)}">${items.map(item =>
    `<button type="button" class="btn btn-sm ${selected === item.id ? 'btn-active' : ''}" data-action="${action}" data-value="${item.id}" aria-pressed="${selected === item.id}">${esc(item.name)}</button>`).join('')}</div>`;
}

function mindEffectRow(effect) {
  const badges = [mindBadge(mindPoolInfo(effect.pool).short)];
  if (effect.category) badges.push(mindBadge(mindCategoryInfo(effect.category).name));
  if (effect.cost != null) badges.push(mindBadge(`HP 上限 -${effect.cost}%`, 'badge-warning'));
  return `<details class="mind-effect-row" id="mind-codex-${effect.id}"><summary><span class="mind-effect-name">${esc(effect.name)}</span><span class="mind-effect-en">${esc(effect.en)}</span><span class="mind-effect-badges">${badges.join('')}</span></summary>
    <div class="mind-effect-body">
      ${effect.desc ? `<p>${esc(effect.desc)}</p>` : ''}
      ${effect.challenge ? `<p><strong>挑戰</strong>${esc(effect.challenge)}</p><p><strong>完成獎勵</strong>${esc(effect.reward)}</p>` : ''}
      ${effect.note ? `<p class="mind-effect-note">${esc(effect.note)}</p>` : ''}
    </div></details>`;
}

function renderMindCodex() {
  const effects = MIND.effects.filter(effect =>
    (mindPool === 'all' || effect.pool === mindPool) &&
    (mindCategory === 'all' || effect.pool === 'normal' && effect.category === mindCategory) &&
    (!mindQuery.trim() || CompassCatalogue.matches(mindQuery, effect.name, effect.en, effect.desc, effect.challenge, effect.reward, effect.note)));
  const obligations = MIND.obligations.filter(item =>
    (mindPool === 'all' || mindPool === 'covenant') && mindCategory === 'all' &&
    (!mindQuery.trim() || CompassCatalogue.matches(mindQuery, item.desc, item.note)));
  const groups = MIND.pools.filter(pool => mindPool === 'all' || pool.id === mindPool).map(pool => {
    const items = effects.filter(effect => effect.pool === pool.id);
    if (!items.length) return '';
    const sections = pool.id === 'normal' ? MIND.categories.map(category => ({
      name: category.name, items: items.filter(effect => effect.category === category.id),
    })) : [{ name: '', items }];
    return `<section class="mind-catalog-group" aria-labelledby="mind-pool-${pool.id}"><div class="mind-catalog-heading"><h3 id="mind-pool-${pool.id}">${esc(pool.name)}</h3><span>${items.length} 項</span></div>
      ${sections.filter(section => section.items.length).map(section => `${section.name ? `<h4>${esc(section.name)}</h4>` : ''}<div class="mind-effect-list">${section.items.map(mindEffectRow).join('')}</div>`).join('')}</section>`;
  }).join('');
  return `<div class="mind-catalog-tools">${mindSearchField('搜尋中文、英文名或效果')}
      ${mindFilterButtons([{ id: 'all', name: '全部效果池' }, ...MIND.pools], mindPool, 'mind-pool', '效果池')}
      ${mindPool === 'all' || mindPool === 'normal' ? mindFilterButtons([{ id: 'all', name: '全部分類' }, ...MIND.categories], mindCategory, 'mind-category', '普通意識分類') : ''}
    </div>
    <p class="mind-result-count" role="status">顯示 ${effects.length} 項效果${mindCategory === 'all' && (mindPool === 'all' || mindPool === 'covenant') ? `、${obligations.length} 種契約代價` : ''}；共收錄 90 項局內效果。</p>
    ${groups || '<div class="mind-empty"><h3>沒有符合條件的效果</h3><p>可清空搜尋，或切換效果池與分類。</p><button type="button" class="btn" data-action="mind-reset-filters">清空篩選</button></div>'}
    ${obligations.length ? `<section class="mind-catalog-group obligations"><div class="mind-catalog-heading"><h3>契約代價</h3><span>${obligations.length} 種</span></div><div class="mind-effect-list">${obligations.map(item => `<details class="mind-effect-row" id="mind-codex-${item.id}"><summary><span class="mind-effect-name">${esc(item.desc)}</span><span class="mind-effect-badges">${mindBadge('代價', 'badge-warning')}</span></summary>${item.note ? `<div class="mind-effect-body"><p>${esc(item.note)}</p></div>` : ''}</details>`).join('')}</div></section>` : ''}
    <details class="mind-sources" id="mind-codex-sources"><summary>資料範圍與版本限制</summary><p>普通 54 條以灰機 Wiki 中文圖鑑為主；特殊池以 BlazBlue Wiki 當前頁面交叉整理。考驗中文名為暫譯。2024 舊攻略只作版本差異線索，不能覆蓋當前遊戲描述。</p><p><a href="https://bbee.huijiwiki.com/wiki/%E6%84%8F%E8%AF%86%E5%A2%9E%E5%B9%85" target="_blank" rel="noreferrer">灰機 Wiki：意識增幅</a> · <a href="https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Mind_Unleashed" target="_blank" rel="noreferrer">BlazBlue Wiki：Mind Unleashed</a></p></details>`;
}

function renderMindCrystals() {
  const crystals = MIND.crystals.filter(crystal =>
    (mindCrystalGroup === 'all' || crystal.group === mindCrystalGroup) &&
    (!mindQuery.trim() || CompassCatalogue.matches(mindQuery, crystal.name, crystal.desc)));
  return `<div class="mind-crystal-intro"><h3>局外配置，不與局內增幅混算</h3><p>意識升級在 Neo 處消耗 AP，增加基礎 HP 並解鎖結晶槽位。結晶有一至三星數值，常見配置為 6 槽；本頁只展示圖鑑，不改變配裝傷害。</p></div>
    <div class="mind-catalog-tools">${mindSearchField('搜尋結晶或效果')}${mindFilterButtons(MIND.crystalGroups, mindCrystalGroup, 'mind-crystal-group', '結晶分類')}</div>
    <p class="mind-result-count" role="status">顯示 ${crystals.length} / ${MIND.crystals.length} 項結晶。</p>
    <div class="mind-crystal-list">${crystals.map(crystal => `<article class="mind-crystal-row"><div><h4>${esc(crystal.name)}</h4><p>${esc(crystal.desc)}</p></div>${mindBadge(MIND.crystalGroups.find(group => group.id === crystal.group).name)}</article>`).join('') || '<div class="mind-empty"><h3>沒有符合條件的結晶</h3><p>請清空搜尋或切換分類。</p><button type="button" class="btn" data-action="mind-reset-filters">清空篩選</button></div>'}</div>
    <details class="mind-sources" id="mind-crystal-sources"><summary>結晶資料來源</summary><p>數值順序為一星／二星／三星。圖鑑來源：<a href="https://bbee.huijiwiki.com/wiki/%E6%84%8F%E8%AF%86%E7%BB%93%E6%99%B6%E5%9B%BE%E9%89%B4" target="_blank" rel="noreferrer">灰機 Wiki：意識結晶圖鑑</a>。</p></details>`;
}

function renderMindGuide() {
  if (!document.getElementById('mindContent')) return;
  document.querySelectorAll('.mind-tab').forEach(control => {
    const selected = control.dataset.value === mindTab;
    control.classList.toggle('tab-active', selected);
    control.setAttribute('aria-selected', String(selected));
    control.tabIndex = selected ? 0 : -1;
  });
  document.getElementById('mindContent').innerHTML = mindTab === 'codex' ? renderMindCodex() : mindTab === 'crystals' ? renderMindCrystals() : renderMindRoutes();
}

function resetMindFilters() {
  mindPool = 'all';
  mindCategory = 'all';
  mindCrystalGroup = 'all';
  mindQuery = '';
  renderMindGuide();
}
