const { CHARACTERS } = CompassData;
/* Game portraits are bundled locally; the glyph remains a fallback if an asset fails. */
const charHue = id => [...id].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) % 360, 7);
const charGlyph = c => /^[A-Za-zΛ]/.test(c.name) ? c.name.slice(0, 2) : c.name.slice(-1);
let legacyFilter = 'all';

function legacyTags(build) {
  return build.tags.map(tag=>`<span class="badge badge-sm badge-ghost">${esc(CompassLegacy.filters.find(x=>x[0]===tag)?.[1])}</span>`).join('');
}
function legacyDonors(build,goal) {
  return `<div class="legacy-donors">${build.legacies.map(([id,preset],i)=>{
    const d=CompassLegacy.donors[id],skill=goal?goal.skills[i]:preset;
    return `<div class="legacy-donor"><strong>${i+1}. ${esc(d.name)}</strong>
      ${goal?`<label for="legacy-skill-${i}">傳承技</label><select id="legacy-skill-${i}" class="select select-sm" data-action="legacy-skill" data-value="${i}">
        ${d.skills.map(([name],k)=>`<option value="${k}" ${k===skill?'selected':''}>${esc(name)}${k===1?' · 第二技需解鎖':''}</option>`).join('')}</select>`:
        `<span>${esc(d.skills[skill][0])}${skill===1?'<small>第二技需解鎖</small>':''}</span>`}
      <p>${esc(d.skills[skill][1])}</p><p class="legacy-talent"><b>天賦</b> ${esc(d.talent)}</p>
      ${goal&&skill===1?`<label class="legacy-check"><input class="checkbox checkbox-sm" type="checkbox" data-action="legacy-unlock" data-value="${i}" ${goal.unlocked[i]?'checked':''}>已在遊戲解鎖${esc(d.name)}第二傳承技</label>`:''}
    </div>`;
  }).join('')}</div>`;
}
function legacyDetails(build) {
  return `<details class="legacy-details" id="legacy-details-${build.id}"><summary>查看成型條件與機制來源</summary>
    <p><b>必要潛能／條件</b></p><ul>${build.requirements.map(r=>`<li>${esc(r)}</li>`).join('')}</ul>
    <p><b>策略延伸</b> ${esc(build.extension)}</p>
    <p>機制描述有來源，整套循環尚未實測。${build.legacies.map(([id])=>`<a href="${esc(CompassLegacy.donors[id].source)}" target="_blank" rel="noopener noreferrer">${esc(CompassLegacy.donors[id].name)}機制</a>`).join(' ／ ')}
    ${['rachel','platinum'].includes(build.character)?' ／ <a href="https://steamcommunity.com/app/2273430/allnews/?l=schinese" target="_blank" rel="noopener noreferrer">官方更新</a>':''}
    ／ <a href="docs/character-legacy-build-analysis.md" target="_blank" rel="noopener">完整分析與限制</a></p></details>`;
}
function renderLegacyPanel(character) {
  const goal=CompassLegacy.normalize(state.legacyBuild,character.id),active=CompassLegacy.find(goal?.id);
  const candidates=CompassLegacy.forCharacter(character.id,legacyFilter);
  const status=goal&&CompassLegacy.status(goal);
  return `<section class="legacy-panel" aria-labelledby="legacy-title"><div class="legacy-heading"><h3 id="legacy-title">雙傳承構築</h3><span>開局選擇與局內成型</span></div>
    <p class="legacy-note">兩名角色各帶一個技能與天賦；下方四格「傳承策略」按兩個資料體分組記錄，請核對實際資料體。推薦屬機制推論，尚未驗證永久無敵或無限閃避。</p>
    ${active?`<article class="card legacy-card legacy-goal" aria-labelledby="legacy-active-title"><div class="card-body">
      <div class="legacy-card-heading"><h4 class="card-title" id="legacy-active-title">本局目標：${esc(active.name)}</h4><span class="badge badge-sm">${esc(active.evidence)}</span></div>
      <div class="legacy-tags">${legacyTags(active)}</div>
      ${legacyDonors(active,goal)}
      <p><b>運作方式</b> ${esc(active.loop)}</p><p class="legacy-risk"><b>可能中斷</b> ${esc(active.risk)}</p>
      <fieldset class="legacy-checklist"><legend>局內成型 · 手動確認</legend>
        <p role="status">已確認 ${status.checked}/${status.total} 項${status.missingSkills?`；${status.missingSkills} 個第二傳承技待確認解鎖`:''}。${status.ready?'條件已勾齊，循環仍待實測。':'尚未成型。'}</p>
        ${active.requirements.map((label,i)=>`<label class="legacy-check"><input type="checkbox" class="checkbox checkbox-sm" data-action="legacy-check" data-value="${i}" ${goal.checks.includes(i)?'checked':''}>${esc(label)}</label>`).join('')}
      </fieldset>
      ${goal.skills.some((skill,i)=>skill!==active.legacies[i][1])?'<p class="legacy-note">已改用替代技能；原配法的運作方式與效果可能改變。</p>':''}
      ${legacyDetails(active)}
      <div class="card-actions"><button type="button" class="btn btn-sm" data-action="legacy-routes">比較人物策略路線</button><button type="button" class="btn btn-sm btn-ghost" data-action="legacy-clear">取消本局目標</button></div>
    </div></article>`:''}
    <div class="legacy-list">${candidates.filter(b=>b.id!==active?.id).map(b=>`<article class="card legacy-card"><div class="card-body">
      <div class="legacy-card-heading"><h4 class="card-title">${esc(b.name)}</h4><span class="badge badge-sm badge-ghost">${esc(b.evidence)}</span></div>
      <div class="legacy-tags">${legacyTags(b)}</div>${legacyDonors(b)}
      <p><b>運作方式</b> ${esc(b.loop)}</p><p class="legacy-risk"><b>可能中斷</b> ${esc(b.risk)}</p>
      ${legacyDetails(b)}<div class="card-actions"><button type="button" class="btn btn-sm" data-action="legacy-goal" data-value="${b.id}">設為本局目標</button></div>
    </div></article>`).join('')}</div>
    ${!candidates.length?`<p class="legacy-note">${esc(character.name)}暫無此分類配法。可選上方其他角色，或<button type="button" class="btn btn-sm btn-ghost" data-action="legacy-filter" data-value="all">顯示全部流派</button>。${active?'本局目標仍保留。':''}</p>`:''}
  </section>`;
}

function renderCharacterPanel() {
  const strip = document.getElementById('charStrip');
  const detail = document.getElementById('charDetail');
  const matching=CHARACTERS.filter(c=>CompassLegacy.forCharacter(c.id,legacyFilter).length);
  document.getElementById('legacyFilters').innerHTML=CompassLegacy.filters.map(([id,label])=>`<button type="button" class="btn btn-sm ${id===legacyFilter?'btn-active':''}" data-action="legacy-filter" data-value="${id}" aria-pressed="${id===legacyFilter}">${label}</button>`).join('')+
    `<span class="legacy-filter-count" role="status">${matching.length} 位人物</span>`;
  strip.innerHTML = matching.map(c => `
    <button type="button" class="char-chip ${currentCharacter === c.id ? 'active' : ''}"
      data-action="character" data-value="${c.id}" aria-pressed="${currentCharacter === c.id}"
      style="--hue:${charHue(c.id)}" title="${c.name} · ${c.role}" aria-label="${c.name} · ${c.role}">
      <span class="char-avatar"><span class="char-glyph" aria-hidden="true">${charGlyph(c)}</span><img src="assets/portraits/${c.id}.png" alt="" width="64" height="64" decoding="async" class="w-full h-full object-cover" onerror="this.hidden = true"></span>
      <span class="cname">${c.name}</span>
      <span class="crole">${c.role}</span>
    </button>`).join('');

  const c = CHARACTERS.find(x => x.id === currentCharacter);
  document.querySelector('.char-panel')?.classList.toggle('has-char', Boolean(c));
  if (!c) {
    detail.innerHTML = '<p class="char-empty">選擇角色可查看流派與雙傳承。</p>';
    return;
  }
  detail.innerHTML = `
    <div class="char-info">
      <div class="char-title">
        <strong>${c.name}</strong>
        <span class="tar">${c.alias}</span>
        <span class="tagset">${c.tags.filter(t=>!t.includes('最高')&&!t.includes('最強')).map(t => `<span class="tg">${t}</span>`).join('')}</span>
      </div>
      <p class="char-mech">${esc(c.mech.split('。')[0])}。</p>
      <details class="character-mechanics" id="character-mechanics-${c.id}"><summary>完整角色機制與來源限制</summary><p>歷史社群評級 ${esc(c.tier)} · 評級版本與來源未逐條保存，不作現行強度排名。${c.id==='platinum'?'本角色完整潛能資料待補。':'角色機制仍需按遊戲版本核對。'}</p><p>${esc(c.mech)}</p></details>
      ${c.awareness && c.awareness.length ? `<div class="char-aware"><b>建議天賦（意識）／結晶</b><div class="awareness-items">${c.awareness.map(n=>`<span class="awareness-item">${icon('heritage')}<span>${esc(n)}</span></span>`).join('')}</div></div>` : ''}
    </div>
    ${renderLegacyPanel(c)}
    <div class="build-list-heading" id="character-strategy-routes"><h3>人物策略路線</h3>${button(state.characterBuild == null ? '自動比較中' : '恢復自動比較', 'auto-character-build', '', state.characterBuild == null ? 'disabled' : '')}</div>
    <div class="build-list">
      ${c.builds.map((b, i) => {
        const element = elementOf(R.nodes.get(b.core[0])?.tree.element);
        const chosen = state.characterBuild === i;
        return `
        <div class="build-card ${chosen ? 'chosen' : ''}" style="--build-el:${element?.color || 'var(--muted)'}">
          <div class="build-card-head">
            <h4>${b.name}</h4>
            ${element ? `<span class="build-element" title="${esc(element.name)}">${CompassArt.element(element.id)}</span>` : ''}
            ${chosen ? '<span class="badge badge-sm">已選流派</span>' : ''}
            ${b.style ? `<span class="style-tag">${b.style}</span>` : ''}
          </div>
          <div class="brow"><span class="brow-label">核心策略</span><div class="brow-chips">${b.core.map(n => {const t=R.nodes.get(n)?.tree,e=elementOf(t?.element);return `<span class="s-chip" style="--el:${e?.color || 'var(--muted)'}">${CompassArt.icon(t)}${esc(n)}</span>`;}).join('')}</div></div>
          <div class="brow"><span class="brow-label">目標紅策</span><div class="brow-chips">${b.duals.map(n => `<span class="s-chip dual">${n}</span>`).join('')}</div></div>
          ${b.inherit ? `<div class="brow"><span class="brow-label">傳承帶入</span><div class="brow-chips">${b.inherit.map(n => `<span class="s-chip inh">${n}</span>`).join('')}</div></div>` : ''}
          ${b.tip ? `<p class="build-tip">${b.tip}</p>` : ''}
          <button type="button" class="btn apply-btn" data-action="apply-build" data-value="${i}">${chosen ? '已設定流派規劃' : '規劃此流派'}</button><button type="button" class="btn btn-sm" data-action="record-build" data-value="${i}">按實際取得填入核心</button>
        </div>`;}).join('')}
    </div>`;
}
