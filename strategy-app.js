/* One interface/state for desktop and mobile; all rules live in strategy-rules.js. */
const { SLOTS: CATALOG_SLOTS, ELEMENTS, STRATEGY_DATA, DUALS } = CompassData;
const SLOTS = ['basic', 'skill', 'dash', 'heritage', 'summon'].map(id => CATALOG_SLOTS.find(slot => slot.id === id));
const R = CompassRules;
const STORAGE_KEY = 'bbe_strategy_compass_v3';
const RECOVERY_KEY = STORAGE_KEY + '_recovery';
const UNREADABLE_KEY = STORAGE_KEY + '_unreadable';
const sessionHistory = CompassSession.history();
let state = R.empty();
state.recommendMode = 'five-dual';
state.fiveDualSort = 'default';
let currentCharacter = null;
let elementFilter = 'all';
let showAllDuals = false;
let notice = '';
let removalNotice = null;
let routePlans = new Map();
const esc = value => String(value ?? '').replace(/[&<>"']/g, c =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const slotLabel = id => SLOTS.find(s => s.id === id)?.name || '未指定';
const button = (label, action, value, extra = '') => `<button type="button" class="btn btn-sm"
  data-action="${action}" data-value="${esc(value)}" ${extra}>${esc(label)}</button>`;

function saveState() {
  if (storageBlocked) return;
  state.character = currentCharacter;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(R.serialize(state))); }
  catch { notice = '瀏覽器無法保存資料，請使用匯出下載備份。'; }
}

function backupCurrent(label = '覆寫前備份') {
  try {
    localStorage.setItem(RECOVERY_KEY,JSON.stringify({label,at:new Date().toISOString(),raw:JSON.stringify(R.serialize(state))}));
    return true;
  } catch { toast('無法保存恢復備份，請先匯出 JSON。','error'); return false; }
}

function recoverBackup(download = false, unreadable = false) {
  try {
    const saved = JSON.parse(localStorage.getItem(unreadable?UNREADABLE_KEY:RECOVERY_KEY) || 'null');
    if (!saved?.raw) { toast('目前沒有可恢復的備份。','warn'); return; }
    if (download) {
      const url = URL.createObjectURL(new Blob([saved.raw],{type:'application/json'}));
      const link = document.createElement('a'); link.href=url;link.download='bbe-recovery.json';link.click();
      setTimeout(()=>URL.revokeObjectURL(url),1000);return;
    }
    const restored = R.restore(JSON.parse(saved.raw));
    state=restored.state;currentCharacter=state.character;
    closeDataModal();commit('已恢復備份。'+restored.warnings.join('；'),restored.warnings.length?'warn':'ok');
  } catch { toast('這份原始備份無法直接載入，可下載原始備份供修復；檔案仍保留。','error'); }
}

function loadState() {
  let raw;
  try {
    raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('bbe_strategy_compass_v2') ||
      localStorage.getItem('bbe_strategy_compass');
    if (!raw) return;
    const restored = R.restore(JSON.parse(raw));
    state = restored.state;
    state.recommendMode = state.recommendMode || 'five-dual';
    state.fiveDualSort = state.fiveDualSort || 'default';
    currentCharacter = state.character;
    if (restored.warnings.length) {
      try {localStorage.setItem(RECOVERY_KEY,JSON.stringify({label:'規則重檢前的原始配裝',at:new Date().toISOString(),raw}));} catch {storageBlocked=true;}
      notice = `已重新檢查 ${restored.warnings.length} 個設定；原始配裝${storageBlocked?'備份失敗，暫停保存':'已另存恢復備份'}：${restored.warnings.join('；')}`;
    }
    else if (!localStorage.getItem(STORAGE_KEY)) notice = '已遷移舊資料。舊版沒有保存的配裝無法還原；傳承需重新指定槽位與確認啟用。';
  } catch (error) {
    let preserved=false;
    try {if(raw){const failed=JSON.stringify({label:'載入失敗的原始資料',at:new Date().toISOString(),raw});localStorage.setItem(UNREADABLE_KEY,failed);localStorage.setItem(RECOVERY_KEY,failed);preserved=true;}} catch {}
    notice = `無法載入舊資料：${error.message}。${preserved?'原始內容已另存恢復備份，可在數據管理下載。':'請先備份原始瀏覽器資料；保存功能已暫停。'}`;
    if(!preserved) storageBlocked=true;
  }
}
let storageBlocked = false;

/* Rule functions return '' on success and a reason string on rejection, so a non-empty
 * reason from an action is an error; informational messages pass tone 'ok' explicitly. */
function commit(message = '', tone = 'error', record = true, removed = null) {
  removalNotice = removed;
  state.character = currentCharacter;
  if (record) sessionHistory.record(R.serialize(state));
  notice = message;
  saveState();
  renderAll();
  if (message) toast(message, tone);
}

/* ===== Game-style feedback: toast + confirm dialog ===== */
function toast(message, kind = 'ok') {
  const stack = document.getElementById('toastStack');
  if (!stack || !message) return;
  const el = document.createElement('div');
  el.className = `toast ${kind}`;
  el.textContent = message;
  stack.appendChild(el);
  while (stack.children.length > 3) stack.firstChild.remove();
  setTimeout(() => el.classList.add('leaving'), kind === 'error' ? 3600 : 2400);
  setTimeout(() => el.remove(), kind === 'error' ? 4000 : 2800);
}
function shake(name) {
  const node = [...document.querySelectorAll('.build-node')].find(n => n.dataset.value === name);
  if (!node) return;
  node.classList.remove('shake'); void node.offsetWidth; node.classList.add('shake');
}
function openDialog(id, focusId) {
  const modal = document.getElementById(id);
  modal._focusAction = document.activeElement?.dataset?.action;
  modal._focusValue = document.activeElement?.dataset?.value;
  modal._opener = document.activeElement;
  if (!modal.open) modal.showModal();
  if (focusId) document.getElementById(focusId)?.focus();
}
function closeDialog(id) { document.getElementById(id).close(); }
function gameConfirm(text, { title = '確認', ok = '確定', danger = true } = {}) {
  const modal = document.getElementById('confirmModal');
  document.getElementById('confirmTitle').textContent = title;
  document.getElementById('confirmText').textContent = text;
  const yes = modal.querySelector('[data-confirm="yes"]');
  yes.textContent = ok; yes.classList.toggle('danger', danger);
  return new Promise(resolve => {
    const done = () => { modal.removeEventListener('close', done); modal.removeEventListener('click', onClick); resolve(modal.returnValue === 'yes'); };
    const onClick = e => { const b=e.target.closest('[data-confirm]'); if(b)modal.close(b.dataset.confirm); };
    modal.returnValue = '';
    modal.addEventListener('close', done); modal.addEventListener('click', onClick);
    openDialog('confirmModal');
  });
}
function undoBuild() {
  const previous = sessionHistory.undo();
  if (!previous) return;
  state = R.restore(previous).state; currentCharacter = state.character;
  commit('已恢復上一份完整方案', 'ok', false);
}

function selectCharacter(id) {
  if (!CHARACTERS.some(c=>c.id===id)) return;
  currentCharacter = currentCharacter === id ? null : id;
  state.characterBuild = null;
  state.legacyBuild = null;
  state.legacyBodies = state.legacyBodies.map(source => source === currentCharacter ? null : source);
  commit();
}

function setLegacyGoal(id) {
  const build=CompassLegacy.find(id);
  if (!build) return;
  currentCharacter=build.character;
  state.legacyBuild=CompassLegacy.createGoal(id);
  state.legacyBodies=build.legacies.map(x=>x[0]);
  state.characterBuild=null;
  state.recommendMode='character';
  state.fiveDualGoal=null;
  commit('已設定雙傳承目標；請確認第二技解鎖，並逐項記錄局內成型條件。策略依現有配裝比較。','ok');
}

function applyBuild(index, record = false) {
  const build = CHARACTERS.find(c => c.id === currentCharacter)?.builds[index];
  if (!build) return;
  state.characterBuild = index;
  state.recommendMode = 'character';
  state.fiveDualGoal = null;
  if (!record) { commit('已設定人物流派規劃；核心策略與傳承尚未記為本局取得。','ok'); return; }
  const skipped = [], added = [];
  // Community lists may contain several alternative II choices. Never bypass validation.
  const core = [...build.core].sort((a, b) => (R.nodes.get(a)?.level || 0) - (R.nodes.get(b)?.level || 0));
  core.forEach(name => {
    if (state.selected.has(name)) return;
    const reason = R.toggle(state, name);
    if (reason) skipped.push(`${name}：${reason}`); else added.push(name);
  });
  (build.inherit || []).forEach(name => {
    if (state.inherited.some(x => x?.name === name)) return;
    const index = state.inherited.findIndex(x => !x);
    const reason = index < 0 ? '四個傳承位置已滿' : R.inherit(state, index, name);
    if (reason) skipped.push(`${name}：${reason}`);
  });
  const first = added.find(n => R.nodes.get(n)?.level === 1);
  if (first) state.slot = R.nodes.get(first).slot;
  commit(`已帶入 ${added.length} 條策略，紅策目標需另行取得。${skipped.length ? `略過 ${skipped.length} 條：${skipped.join('；')}` : ''}`,
    skipped.length ? 'warn' : 'ok');
}

function renderBuildSummary() {
  const active = R.activeInherited(state, true);
  const redCount = new Set([...state.acquired, ...active.filter(x => R.byName.has(x.name))].map(x => x.name)).size;
  const filled = Object.values(R.slotMap(state)).filter(Boolean).length;
  const cells = (count, max, kind) => `<span class="hud-cells ${kind}" aria-hidden="true">${Array.from({length:max},(_,i)=>`<i class="${i<count?'on':''}"></i>`).join('')}</span>`;
  document.getElementById('buildSummary').innerHTML = `
    <div class="build-status"><span class="hud-stat">基礎 <b>${filled}/5</b>${cells(filled,5,'base')}</span><span class="hud-stat">策略 <b>${state.selected.size}</b></span>
    <span class="hud-stat">紅策（含傳承） <b>${redCount}</b>${cells(redCount,Math.max(5,redCount),'red')}</span><span class="hud-stat">傳承生效 <b>${active.length}/4</b>${cells(active.length,4,'inherit')}</span></div>
    <div class="summary-actions">${button('↶ 撤銷上一步', 'undo-build', '', sessionHistory.canUndo ? '' : 'disabled')}
      <div class="tool-actions"><button type="button" class="btn share-primary" data-action="share">${icon('share')} 分享配裝</button>${button('↺ 重置配裝', 'reset-build', '')}</div></div>
    <details class="inherit-section"><summary>傳承 ${state.inherited.filter(Boolean).length}/4 · 生效 ${active.length}<span class="inherit-preview" aria-hidden="true">${state.inherited.map(x=>`<i class="${x ? 'filled' : ''}" title="${esc(x?.name || '空傳承槽')}"></i>`).join('')}</span></summary>
      <p>兩個資料體各帶兩條策略，可選各階或紅策；按遊戲實際來源與啟用狀態記錄。</p>
    <div class="inherit-body-groups">${[0,1].map(i => `<section class="inherit-body"><label for="body-source-${i}">資料體 ${i===0?'A':'B'} · 來源角色</label>
      <select id="body-source-${i}" class="select select-sm" data-action="legacy-body" data-value="${i}"><option value="">尚未對應實際資料體</option>${CHARACTERS.filter(c => c.id !== currentCharacter && (c.id === state.legacyBodies[i] || !state.legacyBodies.includes(c.id))).map(c=>`<option value="${c.id}" ${state.legacyBodies[i]===c.id?'selected':''}>${esc(c.name)}</option>`).join('')}</select>
      ${state.legacyBuild && CompassLegacy.find(state.legacyBuild.id)?.legacies[i][0] !== state.legacyBodies[i] ? '<p class="inherit-hint">與雙傳承目標的來源不同，請核對技能與策略。</p>' : ''}
      <div class="inherit-cards">${state.inherited.slice(i*2,i*2+2).map((entry,j)=>inheritCard(entry,i*2+j)).join('')}</div></section>`).join('')}</div>
    </details>
    ${renderPlannedReds()}`;
}

function renderPlannedReds() {
  if (!state.plannedReds.length) return '';
  return `<details id="planned-reds" class="route-detail planned-reds" open><summary>裝配規劃 ${state.plannedReds.length} 條 · 尚未取得</summary><p>規劃可能互斥；取得後再記錄，不計入當前傷害。</p>
    ${state.plannedReds.map(x=>{
      const recorded=state.acquired.some(y=>y.name===x.name),plan=R.plans(state,R.byName.get(x.name)).find(p=>p.slot===x.slot);
      return `<div class="base-direction"><div><strong>${esc(x.name)} · ${esc(slotLabel(x.slot))}</strong><small>${recorded?'本局已記錄取得':plan?`目前尚缺 ${plan.steps.length} 條前置`:'與目前配裝或傳承衝突；規劃仍保留'}</small></div>
        ${!recorded&&plan?button('查看前置','related-red-detail',x.name)+button('按實際取得填入','equip-red',x.name+'|'+x.slot):''}${button('移除規劃','unplan-red',x.name)}</div>`;
    }).join('')}</details>`;
}

/* One inheritance slot rendered as a card. Status: empty → needs slot → pending → active. */
function inheritCard(entry, i) {
  if (!entry) return `<button type="button" class="inh-card empty" data-action="inherit-open" data-value="${i}" aria-label="傳承 ${i + 1}：選擇策略">
    <span class="inh-plus">＋</span><span class="inh-label">傳承 ${i + 1}</span></button>`;
  const dual = R.byName.get(entry.name);
  const node = R.nodes.get(entry.name);
  const el = elementOf(dual?.element || node.tree.element);
  const available = [...new Set(dual ? R.hosts(dual).map(n => R.nodes.get(n).slot) : node.tree.bases
    .filter(b => !node.slot || b.slot === node.slot).map(b => b.slot))];
  const reason = R.inheritanceReason(state, entry);
  const unknown = dual && !R.inheritedRules[entry.name];
  const on = entry.confirmed && !reason;
  const status = on ? 'active' : entry.slot ? 'pending' : 'noslot';
  return `<div class="inh-card ${status}" style="--el:${el?.color || 'var(--dual)'}">
    <button type="button" class="inh-head" data-action="inherit-open" data-value="${i}" title="更換策略">
      <span class="inh-ico">${dual ? CompassArt.dual(dual) : CompassArt.icon(node.tree)}</span>
      <span class="inh-text"><span class="inh-label">傳承 ${i + 1} · ${dual ? '紅策' : TIER_LABEL[node.level] + ' 階'}</span><strong>${esc(entry.name)}</strong></span>
    </button>
    <div class="inh-slots" role="group" aria-label="承載槽位">${available.map(s => `<button type="button"
      class="inh-slot ${entry.slot === s ? 'active' : ''}" data-action="inherit-slot" data-value="${i}|${entry.slot === s ? '' : s}" ${node?.level === 1 ? 'disabled' : ''}
      aria-pressed="${entry.slot === s}" title="${esc(slotLabel(s))}">${icon(s)}<span>${esc(slotLabel(s))}</span></button>`).join('')}</div>
    <div class="flex items-center gap-2" role="status"><span class="badge badge-sm ${on ? 'badge-success' : 'badge-ghost'}">${icon(on ? 'check' : reason ? 'lock' : 'power')}${on ? '已啟用' : unknown?'待確認':reason ? '待解鎖' : '未啟用'}</span></div>
    <p class="inh-status">${esc(reason || (on ? node?'前置齊備，已自動計入裝配':'已計入傳承生效' : '請在遊戲中確認後啟用'))}</p>
    ${dual&&R.inheritedRules[entry.name]?`<small class="inherit-evidence">啟用條件：${R.inheritedRules[entry.name].groups.map(g=>g.map(esc).join(' 或 ')).join(' ＋ ')}</small>`:''}
    <div class="flex flex-wrap gap-2 mt-auto">
      ${node ? `<span class="inherit-hint">${on?'前置齊備，自動生效':node.level===3?'需取得 I、II 階後生效':'取得對應 I 階後生效'}</span>` : `<button type="button" class="inh-toggle ${on ? 'on' : ''} flex-1" data-action="inherit-confirm" data-value="${i}"
        aria-pressed="${on}" aria-label="${esc((on ? '停用' : '啟用') + '傳承「' + entry.name + '」')}" ${reason && !on ? 'disabled' : ''}>${icon('power')}${on ? '停用' : '啟用傳承'}</button>`}
      ${unknown&&!on?button('已在遊戲生效','inherit-observe',i,entry.slot?'':'disabled'):''}
      <button type="button" class="btn btn-sm btn-ghost" data-action="inherit-discard" data-value="${i}"
        aria-label="${esc('棄用傳承「' + entry.name + '」，清空此槽')}" title="清空此傳承槽">${icon('discard')}棄用</button>
    </div>
  </div>`;
}

/* ===== Inheritance picker (card grid modal) ===== */
let pickerIndex = 0, pickerElement = 'all', pickerTier = 'all';
function openInheritPicker(index) {
  pickerIndex = index;
  document.getElementById('inheritTitle').textContent = `選擇傳承策略 · 傳承 ${index + 1}`;
  document.getElementById('inheritSearch').value = '';
  renderInheritPicker();
  openDialog('inheritModal', 'inheritSearch');
}
function closeInheritPicker() {
  closeDialog('inheritModal');
}
function pickInherit(name) {
  const reason = R.inherit(state, pickerIndex, name);
  if (!reason) closeInheritPicker();
  // Keep the inheritance panel open so the user can set the slot right away.
  const section = document.querySelector('.inherit-section'); if (section) section.open = true;
  commit(reason);
  if (!reason && name) toast(`已帶入「${name}」，請確認承載槽位與啟用條件`, 'ok');
}
function renderInheritPicker() {
  const q = document.getElementById('inheritSearch').value.trim();
  const current = state.inherited[pickerIndex]?.name;
  document.getElementById('inheritTiers').innerHTML = [['all','全部階級'],['1','I 階基礎'],['2','II 階強化'],['3','III 階進階'],['red','紅策']]
    .map(([id,label]) => button(label,'inherit-tier',id,`aria-pressed="${pickerTier === id}"`)).join('');
  document.getElementById('inheritEls').innerHTML = [{ id: 'all', name: '全部', color: 'var(--accent)' }, ...ELEMENTS]
    .map(e => `<button type="button" class="el-chip ${pickerElement === e.id ? 'active' : ''}" data-action="inherit-el"
      data-value="${e.id}" aria-pressed="${pickerElement === e.id}" style="--el:${e.color}" title="${esc(e.name)}">${icon(e.id)}</button>`).join('');
  const normal = [...R.nodes].map(([name,n]) => ({name,element:n.tree.element,level:String(n.level),tree:n.tree,
    slots:[...new Set(n.tree.bases.filter(b => !n.slot || b.slot === n.slot).map(b=>b.slot))],
    desc:CompassCatalogue.tactic(name)?.descZh || '效果資料待補，請核對遊戲內圖鑑。'}));
  const list = [...normal,...DUALS.map(d=>({...d,level:'red'}))].filter(d =>
    (pickerTier === 'all' || d.level === pickerTier) && (pickerElement === 'all' || d.element === pickerElement) &&
    (!q || CompassCatalogue.matches(q,d.name,d.tree?.name,d.desc,CompassCatalogue.tactic(d.name)?.en,...(d.prim||[]),...(d.sec||[]))));
  document.getElementById('inheritGrid').innerHTML = list.map(d => {
    const el = elementOf(d.element);
    const usedAt = state.inherited.findIndex((x, i) => i !== pickerIndex && x?.name === d.name);
    const taken = usedAt >= 0 ? `已在傳承 ${usedAt + 1}` : state.acquired.some(x => x.name === d.name) ? '本局已取得' : '';
    return `<button type="button" class="pick-card ${d.name === current ? 'current' : ''}" data-action="inherit-pick"
      data-value="${esc(d.name)}" style="--el:${el?.color || 'var(--dual)'}" ${taken ? 'disabled' : ''}>
      <span class="pick-head">${d.tree ? CompassArt.icon(d.tree) : CompassArt.dual(d)}<strong>${esc(d.name)}</strong></span>
      <span class="pick-slots">${d.level === 'red' ? '紅策' : TIER_LABEL[Number(d.level)] + ' 階'} · ${d.slots.map(s => esc(slotLabel(s))).join('／')}</span>
      <span class="pick-desc">${esc(d.desc)}</span>
      ${taken ? `<span class="pick-taken">${taken}</span>` : ''}
    </button>`;
  }).join('') || '<p class="empty">找不到符合的策略。支援簡繁與常用別名，可試試「中毒」「毒環」或清空屬性／階級篩選。</p>';
}
document.getElementById('inheritSearch')?.addEventListener('input', renderInheritPicker);

/* ===== Strategy tooltip: tier, slot, status, and which red strategies it feeds ===== */
const feedsIndex = new Map();
DUALS.forEach(d => [...d.prim, ...d.sec, ...(d.need || [])].forEach(n => {
  if (!feedsIndex.has(n)) feedsIndex.set(n, []);
  if (!feedsIndex.get(n).includes(d)) feedsIndex.get(n).push(d);
}));
function tipHtml(name, full = false) {
  const info = R.nodes.get(name);
  if (!info) return '';
  const el = elementOf(info.tree.element);
  const chosen = state.selected.has(name);
  const lock = chosen ? '' : R.canSelect(state, name);
  const slot = info.slot || R.base(state, info.tree)?.slot;
  const feeds = feedsIndex.get(name) || [];
  // Rank red strategies this node advances: the target first, then closest to completion.
  const ranked = feeds.map(d => ({ d, steps: routePlans.get(d.name)?.[0]?.steps.length ?? Infinity }))
    .sort((a, b) => Number(b.d.name === state.target) - Number(a.d.name === state.target) || a.steps - b.steps);
  return `<div class="tip-head" style="--el:${el.color}">${CompassArt.icon(info.tree)}<strong>${esc(name)}</strong>
      <span class="tip-tier">${TIER_LABEL[info.level]}</span></div>
    <div class="tip-meta">${esc(info.tree.name)} · ${esc(el.name)}${slot ? ' · ' + esc(slotLabel(slot)) : ''}</div>
    <div class="tip-state ${chosen ? 'ok' : lock ? 'lock' : 'free'}">${chosen ? '✓ 已選擇' : lock ? '🔒 ' + esc(lock) : '可選擇'}</div>
    ${full ? ordinaryEffectHtml(name) + outlookDetail(name) : ''}
    ${ranked.length ? `<div class="tip-sub">是以下紅策的前置（${ranked.length}）</div><ul class="tip-feeds">${ranked.slice(0, full ? ranked.length : 5).map(({ d, steps }) =>
      `<li class="${d.name === state.target ? 'goal' : ''}"><span>${esc(d.name)}</span><em>${steps === Infinity ? '暫無路線' : steps === 0 ? '可取得' : `差 ${steps} 條`}</em></li>`).join('')}
      ${!full && ranked.length > 5 ? `<li class="more">…另有 ${ranked.length - 5} 條</li>` : ''}</ul>` : '<div class="tip-sub">不直接構成紅策條件</div>'}`;
}

function ordinaryEffectHtml(name) {
  const data=CompassCatalogue.tactic(name);
  const groups=R.nodeRequirements[name] || [];
  return `<section class="ordinary-effect"><h4>觸發與效果</h4><p>${esc(data?.descZh || '效果資料待補。')}</p>
    ${groups.length?`<p>額外前置：${groups.map(g=>g.map(esc).join(' 或 ')).join(' ＋ ')}</p>`:''}
    ${data?.rarity?.length===4?`<p>白／藍／紫／金：${data.rarity.map(esc).join(' ／ ')}</p>`:''}
    ${data?.noteZh?`<p>${esc(data.noteZh)}</p>`:''}</section>`;
}
let tipTimer = 0;
function showTip(node) {
  const tip = document.getElementById('nodeTip');
  if (!tip) return;
  tip.innerHTML = tipHtml(node.dataset.value);
  tip.hidden = false;
  const r = node.getBoundingClientRect(), t = tip.getBoundingClientRect();
  const left = Math.min(Math.max(8, r.left + r.width / 2 - t.width / 2), innerWidth - t.width - 8);
  const top = r.top - t.height - 10 > 8 ? r.top - t.height - 10 : r.bottom + 10;
  tip.style.left = `${left}px`; tip.style.top = `${top}px`;
}
function hideTip() { clearTimeout(tipTimer); const tip = document.getElementById('nodeTip'); if (tip) tip.hidden = true; }
const canHover = typeof matchMedia === 'function' && matchMedia('(hover: hover)').matches;
if (canHover) {
  document.addEventListener('pointerover', e => {
    const node = e.target.closest?.('.build-node');
    if (!node) return;
    clearTimeout(tipTimer); tipTimer = setTimeout(() => showTip(node), 220);
  });
  document.addEventListener('pointerout', e => {
    const node = e.target.closest?.('.build-node');
    if (node && !node.contains(e.relatedTarget)) hideTip();
  });
}
document.addEventListener('focusin', e => { const n = e.target.closest?.('.build-node'); if (n && canHover) showTip(n); });
document.addEventListener('focusout', e => { if (e.target.closest?.('.build-node')) hideTip(); });
addEventListener('scroll', hideTip, { passive: true });

/* Portable codes work both offline and at an HTTP(S) address. */
function shareBuild() {
  state.character = currentCharacter;
  const code = CompassSession.encode(R.serialize(state));
  const link = CompassSession.shareLink(location.href, code);
  document.getElementById('shareCode').value = code;
  document.getElementById('shareLink').value = link || '';
  document.getElementById('shareLinkRow').hidden = !link;
  document.getElementById('shareStatus').textContent = '';
  openDialog('shareModal', 'shareCode');
}
async function copyShare(id) {
  const field = document.getElementById(id);
  try { await navigator.clipboard.writeText(field.value); document.getElementById('shareStatus').textContent = '已複製'; }
  catch { field.focus(); field.select(); document.getElementById('shareStatus').textContent = '已選取，請手動複製'; }
}
function decodeBuild(text) {
  const decoded = CompassSession.decode(text);
  const result = R.restore(decoded.build);
  result.warnings.push(...decoded.warnings);
  return result;
}
function importBuildCode() {
  try {
    const result = decodeBuild(document.getElementById('importBuildCode').value);
    if(!backupCurrent('載入配裝碼前的完整配裝'))return;
    state=result.state; currentCharacter=state.character;
    commit(result.warnings.length ? '已載入，略過或提醒：'+result.warnings.join('；') : '已載入配裝碼，可撤銷恢復原方案', result.warnings.length?'warn':'ok');
    closeDataModal();
  } catch(error) { document.getElementById('importStatus').textContent='載入失敗：'+error.message+'。原方案保持不變。'; }
}
function readSharedBuild() {
  if (!location.hash.startsWith('#b=')) return null;
  try { return decodeBuild(location.hash); }
  catch(error) { return {error:error.message}; }
}
function openStrategyDetail(name) {
  const node=R.nodes.get(name); if(!node)return;
  hideTip();
  document.getElementById('strategyDetailTitle').textContent=name;
  document.getElementById('strategyDetailBody').innerHTML=tipHtml(name,true);
  openDialog('strategyDetailModal');
}

function openRelatedRedDetail(name) {
  const dual = R.byName.get(name), plan = dual && R.plans(state,dual)[0];
  if (!plan) { toast('此路線已與目前裝配衝突，請重新查看紅策進度。','warn'); return; }
  const key = name + '|' + plan.slot;
  redFillPlans.set(key,{slot:plan.slot,steps:[...plan.steps]});
  hideTip();
  document.getElementById('strategyDetailTitle').textContent = name;
  document.getElementById('strategyDetailBody').innerHTML = redRecipe(dual) + redRouteSummary(plan) +
    `<div class="red-effect"><p>${esc(dual.desc)}</p></div>` +
    `<div class="red-fill">${button('加入裝配規劃','plan-red',key)}</div>`;
  openDialog('strategyDetailModal');
}

/* Inline SVG icons: consistent across platforms, inherit currentColor. */
const ICON_PATHS = {
  share: 'M9 12l6-3M9 12l6 3M5 9a3 3 0 110 6 3 3 0 010-6M18 3a3 3 0 110 6 3 3 0 010-6M18 15a3 3 0 110 6 3 3 0 010-6',
  target: 'M21 12a9 9 0 11-9-9M17 12a5 5 0 11-5-5M12 12l9-9M16 3h5v5',
  basic: 'M4 20l6-6M14.5 3.5l6 6-9 9-6-6zM3 21l2-2',
  dash: 'M3 12h11M3 7h7M3 17h7M14 5l7 7-7 7',
  skill: 'M12 2l2.6 6.4L21 9l-5 4.6L17.5 21 12 17.3 6.5 21 8 13.6 3 9l6.4-.6z',
  summon: 'M12 3a4 4 0 110 8 4 4 0 010-8zM4 21c0-4 3.6-7 8-7s8 3 8 7',
  heritage: 'M12 3l8 5v8l-8 5-8-5V8zM8 10h8M12 7v10M9 14l3 3 3-3',
  fire: 'M12 2c1 4 5 6 5 11a5 5 0 01-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-4-1-6 1-10z',
  ice: 'M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M9 4l3 2 3-2M9 20l3-2 3 2',
  elec: 'M13 2L4 14h7l-1 8 9-12h-7z',
  poison: 'M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z',
  dark: 'M20 14.5A8 8 0 019.5 4a8 8 0 1010.5 10.5z',
  light: 'M12 7a5 5 0 110 10 5 5 0 010-10zM12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1',
  blade: 'M14.5 3H21v6.5L9 21.5 2.5 15zM6 13l5 5',
  lock: 'M6 11h12v10H6zM8 11V7a4 4 0 018 0v4',
  power: 'M12 3v9M6.3 5.8a8 8 0 1011.4 0',
  check: 'M4 12l5 5L20 6',
  discard: 'M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M10 10v7M14 10v7',
  all: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
};
const icon = (id, cls = '') => `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="none"
  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${ICON_PATHS[id] || ICON_PATHS.all}"/></svg>`;
const elementOf = id => ELEMENTS.find(e => e.id === id);
const TIER_LABEL = ['', 'I', 'II', 'III'];

function renderLoadoutBar() {
  const map = R.slotMap(state);
  document.getElementById('loadoutBar').innerHTML = SLOTS.map(slot => {
    const name = map[slot.id];
    const tree = name && R.nodes.get(name).tree;
    const el = tree && elementOf(tree.element);
    const tiers = tree ? [true, tree.ii.some(n => state.selected.has(n)), tree.iii.some(n => state.selected.has(n))] : [];
    return `<button type="button" class="loadout-slot ${name ? 'filled' : 'empty'} ${state.slot === slot.id ? 'active' : ''}"
      data-action="slot" data-value="${slot.id}" style="${el ? `--el:${el.color}` : ''}"
      aria-label="${esc(slot.name)}：${esc(name || '未配置')}">
      <span class="ls-icon">${tree ? CompassArt.icon(tree) : icon(slot.id)}</span>
      <span class="ls-body"><span class="ls-slot">${esc(slot.name)}</span>
      <span class="ls-name">${name ? esc(name) : '＋ 選擇基礎'}</span>
      ${name ? `<span class="ls-tier">${tiers.map(on => `<i class="${on ? 'on' : ''}"></i>`).join('')}<em>${esc(el.name)}</em></span>` : ''}</span>
    </button>`;
  }).join('');
}

function renderBuildBoard(recs) {
  const recommended = new Set(recs.map(r => r.name));
  renderLoadoutBar();
  document.getElementById('slotTabs').innerHTML = SLOTS.map(s => `<button type="button" role="tab"
    class="tab ${state.slot === s.id ? 'tab-active' : ''}" aria-selected="${state.slot === s.id}"
    aria-controls="slot-${s.id}" id="tab-${s.id}" tabindex="${state.slot === s.id ? 0 : -1}"
    data-action="slot" data-value="${s.id}">${icon(s.id)} ${s.name}</button>`).join('');
  document.getElementById('buildBoard').innerHTML = SLOTS.map(slot => {
    const filled = R.slotMap(state)[slot.id];
    const groups = STRATEGY_DATA.filter(t => t.bases.some(b => b.slot === slot.id) &&
      (elementFilter === 'all' || t.element === elementFilter || R.base(state, t)?.slot === slot.id)).map(tree => {
      const ownedBase = R.base(state, tree);
      const owned = ownedBase?.slot === slot.id;
      // Bases that conflict are hidden; inside an owned tree every node is shown, locked ones with a reason.
      const names = [...tree.bases.filter(b => b.slot === slot.id).map(b => b.name).filter(n => !R.canSelect(state, n)),
        ...(owned ? [...tree.ii, ...tree.iii] : [])];
      if (!names.length) return '';
      const el = elementOf(tree.element);
      return `<div class="build-group ${owned ? 'chosen-tree' : ''}" style="--el:${el.color}">
      <h4 aria-label="${esc(tree.name + ' · ' + el.name)}" title="${esc(el.name)}"><span class="tree-ico">${CompassArt.icon(tree)}</span><span class="tree-name">${esc(tree.name)}</span></h4>
      ${[1,2,3].map(level => {
        const tier = names.filter(n => R.nodes.get(n).level === level);
        if (!tier.length) return '';
        const lit = tier.some(n => state.selected.has(n));
        return `<div class="build-tier tier-${level} ${lit ? 'tier-lit' : ''}"><div class="build-tier-label">${['','I 基礎','II 強化','III 進階'][level]}</div>
        <div class="build-nodes">${tier.map(name => {
          const chosen = state.selected.has(name);
          const lock = chosen ? '' : R.canSelect(state, name);
          const rec = !chosen && !lock && recommended.has(name);
          const cls = chosen ? 'selected' : lock ? 'locked' : rec ? 'recommended' : '';
          return `<div class="strategy-control"><button type="button" class="build-node card-node lv-${level} ${cls}"
            data-action="strategy" data-value="${esc(name)}" aria-pressed="${chosen}" ${lock ? 'aria-disabled="true"' : ''}
            title="${esc(chosen ? '點擊取消' : lock || '選擇策略')}">
            <span class="node-tier">${TIER_LABEL[level]}</span>
            <span class="node-text"><span class="node-name">${esc(name)}</span>${lock ? `<span class="node-lock">${esc(lock)}</span>` : !chosen ? `<span class="badge badge-sm badge-outline node-outlook" data-outlook-name="${esc(name)}" aria-busy="true">試算中…</span>` : ''}</span>
            <span class="verdict">${chosen ? '✓' : lock ? icon('lock') : rec ? '推薦' : ''}</span></button><button type="button" class="strategy-info" data-action="strategy-detail" data-value="${esc(name)}" aria-label="查看${esc(name)}詳情" title="查看${esc(name)}詳情">ⓘ</button></div>`;
        }).join('')}</div></div>`;
      }).join('')}</div>`;
    }).join('');
    return `<section class="build-column ${state.slot === slot.id ? 'current-slot' : ''} ${filled ? 'slot-filled' : ''}"
      id="slot-${slot.id}" aria-labelledby="tab-${slot.id}"><h3>${icon(slot.id)} ${slot.name}
      <span class="slot-state">${filled ? '已配置' : '選擇基礎'}</span></h3>
      ${groups || '<p class="empty">沒有可選策略</p>'}</section>`;
  }).join('');
  const goal = state.target && R.byName.get(state.target);
  const plan = goal && routePlans.get(goal.name)?.[0];
  const completed = goal && (state.acquired.some(x => x.name === goal.name) || R.activeInherited(state).some(x => x.name === goal.name));
  document.getElementById('recControls').innerHTML = `
    <div class="route-controls mode-controls"><span class="rc-label">遊戲模式</span>
      <div class="mode-segment" role="group" aria-label="遊戲模式">${[{id:'normal',name:'普通'},{id:'extreme',name:'極限'}].map(m =>
        `<button type="button" class="btn mode-btn ${(state.gameMode || 'normal') === m.id ? 'active' : ''}" data-action="game-mode" data-value="${m.id}" aria-pressed="${(state.gameMode || 'normal') === m.id}">${m.name}</button>`).join('')}</div>
    </div>
    <div class="route-controls mode-controls"><span class="rc-label">推薦方向</span>
      <div class="mode-segment" role="group" aria-label="推薦方向">${RECOMMEND_MODES.map(m =>
        `<button type="button" class="mode-btn ${state.recommendMode === m.id ? 'active' : ''}" data-action="recommend-mode" data-value="${esc(m.id)}" aria-pressed="${state.recommendMode === m.id}">${esc(m.label)}</button>`).join('')}
      </div>
    </div>
    ${state.recommendMode === 'five-dual' ? `<div class="route-controls mode-controls"><span class="rc-label">流派方向</span>
      <div class="mode-segment" role="group" aria-label="流派方向">${FIVE_DUAL_SORTS.map(m =>
        `<button type="button" class="mode-btn ${(state.fiveDualSort || 'default') === m.id ? 'active' : ''}" data-action="five-dual-sort" data-value="${esc(m.id)}" aria-pressed="${(state.fiveDualSort || 'default') === m.id}">${esc(m.label)}</button>`).join('')}
      </div>
    </div>` : ''}
    <p class="route-detail mode-rule ${state.gameMode === 'extreme' ? 'extreme' : ''}">${state.gameMode === 'extreme' ? '極限：每樹最多兩條 II 階' : '普通：每樹最多一條 II 階'}</p>
    <div class="element-chips" role="group" aria-label="屬性篩選"><span class="chips-label">屬性</span>
      ${[{ id: 'all', name: '全部', color: 'var(--accent)' }, ...ELEMENTS].map(e => `<button type="button" class="el-chip ${elementFilter === e.id ? 'active' : ''}"
        data-action="element" data-value="${e.id}" aria-label="${esc(e.name)}" aria-pressed="${elementFilter === e.id}" style="--el:${e.color}" title="${esc(e.name)}">
        ${e.id === 'all' ? icon(e.id) : CompassArt.element(e.id)}<span>${esc(e.name.replace('系', ''))}</span></button>`).join('')}
    </div>
    `;
  document.getElementById('recStrip').innerHTML = renderNextHero(goal, plan, completed, recs);
}

/* Prominent "next move" card: the single most useful action, plus alternatives. */
function renderNextHero(goal, plan, completed, recs) {
  const mode = state.recommendMode;
  if (mode !== 'auto') { goal = null; plan = null; completed = false; }
  const charReady = mode === 'character' && CompassData.CHARACTERS.find(c => c.id === currentCharacter) && !recs.length;
  let title = '下一步建議', main = '', sub = '', alts = '', tone = '';
  if (mode === 'character') {
    const char = CompassData.CHARACTERS.find(c => c.id === currentCharacter);
    title = char ? `人物推薦 · ${esc(char.name)}` : '人物推薦';
    if (!char) {
      tone = 'warn'; main = '未選擇角色'; sub = '請先從左側角色列選擇一位角色，或使用其他推薦方向。';
    }
  } else if (mode === 'five-dual') {
    title = '五紅策略優先';
    if (typeof FIVE_DUAL_SETS === 'undefined') {
      main = '五紅資料未載入'; sub = '請確認 strategy-five-duals.js 已正確引入並重新整理頁面。';
    } else if (currentFiveDualGoal) {
      const { missing, remainingReds, set } = currentFiveDualGoal;
      const redLabel = set.duals.length === 5 ? '五紅' : `${set.duals.length} 紅`;
      main = missing ? `朝 ${set.duals.length} 紅組合前進` : remainingReds.length ? `${redLabel}前置齊備，待取得或確認啟用` : `${redLabel}已完成`;
      sub = `保留現有配裝 · 尚缺 ${missing} 條前置 · ${remainingReds.length} 紅待取得或啟用。每次選擇後重新計算。`;
      if (currentFiveDualGoal.multiRed) sub += ' 請依下方多紅操作順序。';
      if (R.fiveDualSort(state.fiveDualSort) === 'power') sub += ` 固定值指標 ${currentFiveDualGoal.score.tiers[3]}（非實戰傷害）。`;
      if (R.fiveDualSort(state.fiveDualSort) === 'basic' && !currentFiveDualGoal.score.basicTag) sub += ' 此方案無普攻直接增傷加成。';
      if (state.fiveDualGoal && state.fiveDualGoal!==fiveDualKey(set.duals) && R.fiveDualSort(state.fiveDualSort)!=='power') sub += ' 原目標已受阻或有更多紅數方案，現列相容方案。';
    } else {
      const damagePriority = R.fiveDualSort(state.fiveDualSort) === 'power';
      main = !damagePriority && state.fiveDualGoal ? '當前五紅方案與配裝衝突' : '目前無符合條件的 5 紅路線';
      sub = damagePriority ? '保留目前配裝後，已收錄方案中未找到相容的五紅組合；可調整配裝或改用人物推薦。'
        : '目前配置無法完成此方案；保留當前目標，請調整配裝或在紅策進度區切換替代方案。普攻直接增傷不包含光波獨立傷害倍率。';
    }
  }
  if (mode === 'auto' && goal) {
    title = completed ? '目標已取得' : plan ? plan.steps.length ? `距離目標還需 ${plan.steps.length} 條` : '前置齊備，可以取得紅策' : state.inherited.some(x=>x?.name===goal.name) ? '傳承目標待啟用' : '目標與當前配裝衝突';
  }
  if (goal && completed) {
    tone = 'done'; main = esc(goal.name); sub = '已完成，可以設定新目標。';
    alts = button('取消目標', 'target', '');
  } else if (goal && !plan) {
    tone = 'warn'; main = esc(goal.name); sub = conflictSummary(goal);
    alts = button('取消目標', 'target', '');
  } else if (goal && plan && !plan.steps.length) {
    tone = 'ready'; main = esc(goal.name); sub = `承載槽位：${esc(slotLabel(plan.slot))}。在遊戲中取得後按下確認。`;
    alts = `<button type="button" class="btn next-cta" data-action="acquire" data-value="${esc(goal.name + '|' + plan.slot)}">✓ 遊戲中取得後確認</button>`;
  } else if (mode === 'five-dual' && currentFiveDualGoal?.multiRed && currentFiveDualGoal.actions[0]?.type !== 'select' && currentFiveDualGoal.actions.length) {
    const next = currentFiveDualGoal.actions[0];
    if (next.type === 'acquire') {
      main = `先取得「${next.name}」，再繼續補前置`;
      alts = button('遊戲中取得後確認 · ' + next.name, 'acquire', next.name + '|' + next.slot);
    } else {
      main = `確認傳承「${next.name}」已在遊戲中啟用`;
      alts = button('確認啟用傳承 · ' + next.name, 'inherit-confirm', String(state.inherited.findIndex(x => x?.name === next.name)));
    }
  } else if (mode === 'five-dual' && recs.length) {
    sub += currentFiveDualGoal?.multiRed ? ' 請勿提早啟用傳承。' : ' 下列任一項可推進此方案。';
    alts = recs.map(({ name }) => {
      const node = R.nodes.get(name);
      return button(slotLabel(node.slot || R.base(state, node.tree)?.slot) + ' · ' + fiveDualChoiceLabel(name), 'recommend', name);
    }).join('');
  } else if (recs.length) {
    if (!main) main = mode === 'character' ? currentCharacterGoal?.completion && !currentCharacterGoal.coreSteps.length
      ? '人物核心前置齊備，繼續補完五紅' : '可推進人物流派與五紅的候選' : goal ? esc(goal.name) : '可推進紅策的候選';
    const choices = recs.map(r => {
      const node = R.nodes.get(r.name);
      return button(slotLabel(node.slot || R.base(state,node.tree)?.slot) + ' · ' + r.name, 'recommend', r.name,
        `title="${esc('推進：' + r.targets.join('、'))}"`);
    }).join('');
    alts = recs.length > 12 && mode === 'auto' && !goal
      ? `<details class="route-detail" id="auto-candidates"><summary>全部可推進候選（${recs.length}）</summary><div class="next-moves">${choices}</div></details>` : choices;
  } else if (charReady) {
    const status = currentCharacterGoal;
    if (status?.conflicts.length) {
      tone = 'warn'; main = '人物流派與目前配裝衝突';
      sub = `無法完成：${status.conflicts.join('、')}。可調整配裝或帶入其他流派。`;
    } else if (status?.pending.length) {
      tone = 'warn'; main = '人物流派傳承待配置或確認'; sub = status.pending.join('、');
    } else if (status?.remainingReds.length) {
      tone = 'ready'; main = '人物流派前置齊備，待取得紅策'; sub = status.remainingReds.join('、');
    } else if (status) {
      tone = 'done'; main = status.completion?.redCount === 5 ? '人物流派與五紅已完成' : '人物流派已完成'; sub = status.build.name;
    }
  } else if (!main) {
    tone = 'idle'; main = '從任一槽位選擇基礎策略'; sub = '選好後會自動計算紅策路線。';
  }
  if (mode === 'character' && currentCharacterGoal) sub += ` · ${currentCharacterGoal.build.name} · ${currentCharacterGoal.reason}`;
  if (mode === 'character' && currentCharacterGoal?.completion) {
    const completion = currentCharacterGoal.completion;
    sub += ` · 已找到 ${completion.redCount < 5 ? completion.redCount + '/5' : completion.redCount} 紅的相容規劃。`;
    if (completion.redCount < 5 && completion.unresolved.length) sub += ' 請先確認傳承槽位與啟用前置。';
  }
  const modeIssues = R.modeConflicts(state);
  if (modeIssues.length) {
    tone = 'warn'; main = '配裝超出普通模式容量'; sub = modeIssues.map(esc).join('；') + '。已保留所有策略與紅策記錄，調整後再繼續推薦。';
    alts = ''; goal = null; plan = null;
  }
  const progress = goal && plan && !completed ? (() => {
    const total = plan.steps.length + [...goal.prim, ...goal.sec, ...(goal.need || [])].filter(n => state.selected.has(n)).length;
    const done = total - plan.steps.length;
    const pct = total ? Math.round(done / total * 100) : 100;
    const routeOpen = document.getElementById('goalRoute')?.open ?? !matchMedia('(max-width: 768px)').matches;
    const available = new Set(recs.map(r => r.name));
    return `<div class="next-progress" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="目標進度">
      <div class="next-progress-bar" style="width:${pct}%"></div></div>
      <details id="goalRoute" class="goal-route-detail" ${routeOpen ? 'open' : ''}><summary>代表路線 · 尚需 ${plan.steps.length} 條，非固定取得順序</summary><div class="next-steps">${plan.steps.map(s => `<span class="${available.has(s) ? 'step-next' : ''}">${esc(s)}</span>`).join(' · ')}</div></details>`;
  })() : '';
  return `<div class="next-hero ${tone}">
    <div class="next-head"><span class="next-kicker">${title}</span>${goal ? `<span class="next-goal">${icon('target')} ${esc(goal.name)}</span>` : ''}</div>
    <div class="next-main">${main}</div>
    ${sub ? `<div class="next-sub">${sub}</div>` : ''}
    ${progress}
    <div class="next-moves">${alts}</div>
  </div>`;
}

function renderAll() {
  const focused = document.activeElement;
  const focusKey = focused?.dataset?.action && [focused.dataset.action, focused.dataset.value];
  const focusId = focused?.id;
  const inheritOpen = document.querySelector('.inherit-section')?.open;
  const expanded = [...document.querySelectorAll('details[id][open]')].map(el=>el.id);
  routePlans = new Map(DUALS.map(d=>[d.name,R.plans(state,d)]));
  currentFiveDualGoal = null;
  currentCharacterGoal = null;
  const recs = getRecommendations();
  renderCharacterPanel();
  renderMindGuide();
  renderBuildSummary();
  if (inheritOpen) document.querySelector('.inherit-section').open = true;
  renderBuildBoard(recs);
  if (document.getElementById('damage-panel').open) renderDamageEstimate();
  renderDualProgress(recs);
  renderTopDamage();
  queueBuildOutlooks();
  expanded.forEach(id=>{const el=document.getElementById(id);if(el)el.open=true;});
  document.getElementById('saveStatus').textContent = notice;
  document.getElementById('settingsSummary').textContent = `${state.gameMode === 'extreme' ? '極限' : '普通'} · ${CHARACTERS.find(c=>c.id===currentCharacter)?.name || '未選角色'} · ${FIVE_DUAL_SORTS.find(s=>s.id===R.fiveDualSort(state.fiveDualSort))?.label || ''}`;
  document.getElementById('removalNotice').innerHTML = removalNotice ? `<div class="removal-feedback"><span>${esc(notice)}</span>${button('撤銷此次取消','undo-build','')}<details><summary>查看移除內容</summary><p>${removalNotice.map(esc).join('、')}</p></details></div>` : '';
  refreshUndoControls();
  const replacement = focusKey ? [...document.querySelectorAll('[data-action]')].find(el =>
    el.dataset.action === focusKey[0] && el.dataset.value === focusKey[1]) : focusId && document.getElementById(focusId);
  replacement?.focus?.({ preventScroll: true });
}

function refreshUndoControls() {
  document.querySelectorAll('[data-action="undo-build"]').forEach(el=>{el.disabled=!sessionHistory.canUndo;});
}

function switchVisibleSlot(slot) {
  if (!SLOTS.some(x=>x.id===slot)) return;
  state.slot=slot;saveState();
  document.querySelectorAll('.build-column').forEach(el=>el.classList.toggle('current-slot',el.id==='slot-'+slot));
  document.querySelectorAll('#slotTabs [data-action="slot"]').forEach(el=>{
    const selected=el.dataset.value===slot;el.classList.toggle('tab-active',selected);el.setAttribute('aria-selected',String(selected));el.tabIndex=selected?0:-1;
  });
  renderLoadoutBar();
}

function commitDamage() {
  removalNotice=null;document.getElementById('removalNotice').innerHTML='';
  sessionHistory.record(R.serialize(state));saveState();renderDamageEstimate();renderTopDamage();refreshUndoControls();
}

document.addEventListener('toggle', event=>{
  if(event.target.id==='damage-panel' && event.target.open)renderDamageEstimate();
  if(event.target.classList?.contains('red-badge') && event.target.open) {
    document.querySelectorAll('.red-badge[open]').forEach(badge=>{if(badge!==event.target)badge.open=false;});
  }
},true);

let mindComposing = false;
document.addEventListener('compositionstart', event => {
  if (event.target.id === 'mindSearch') mindComposing = true;
});
document.addEventListener('compositionend', event => {
  if (event.target.id !== 'mindSearch') return;
  mindComposing = false;
  mindQuery = event.target.value;
  renderMindGuide();
  document.getElementById('mindSearch')?.focus();
});
document.addEventListener('input', event => {
  if (event.target.id !== 'mindSearch' || mindComposing || event.isComposing) return;
  mindQuery = event.target.value;
  renderMindGuide();
  const search = document.getElementById('mindSearch');
  search?.focus();
  search?.setSelectionRange(mindQuery.length, mindQuery.length);
});

document.addEventListener('change', event => {
  const action=event.target.dataset?.action;
  if (action==='mind-character') {
    if (event.target.value !== 'all' && !CHARACTERS.some(character=>character.id===event.target.value)) return;
    mindCharacterFilter=event.target.value;renderMindGuide();return;
  }
  if(action==='legacy-body') {commit(R.setLegacyBody(state,Number(event.target.dataset.value),event.target.value));return;}
  if (['legacy-check','legacy-unlock','legacy-skill'].includes(action)) {
    const goal=CompassLegacy.normalize(state.legacyBuild,currentCharacter);
    const build=CompassLegacy.find(goal?.id),index=Number(event.target.dataset.value);
    if (!build||!Number.isInteger(index)) return;
    if (action==='legacy-check'&&index>=0&&index<build.requirements.length) {
      goal.checks=goal.checks.filter(i=>i!==index);
      if(event.target.checked)goal.checks.push(index);
    } else if (action==='legacy-unlock'&&index>=0&&index<2) goal.unlocked[index]=event.target.checked;
    else if (action==='legacy-skill'&&index>=0&&index<2&&['0','1'].includes(event.target.value)) {
      goal.skills[index]=Number(event.target.value);goal.unlocked[index]=false;
    } else return;
    state.legacyBuild=goal;commit();return;
  }
  if (action==='damage-toggle') {
    const key=event.target.dataset.value;
    if (!['removeSkillIcd','removeDashIcd','splitSlime290'].includes(key)) return;
    const scenario=R.normalizeDamageScenario(state.damageScenario);scenario[key]=event.target.checked;
    state.damageScenario=scenario;commitDamage();return;
  }
  if (action==='damage-icd' && event.target.value.trim()==='') {
    const scenario=R.normalizeDamageScenario(state.damageScenario);delete scenario.cooldowns[event.target.dataset.value];
    state.damageScenario=scenario;commitDamage();return;
  }
  if (['damage-setting','damage-rate','damage-hits','damage-icd'].includes(action)) {
    const value=Number(event.target.value);
    if (event.target.value.trim()==='' || !Number.isFinite(value) || value<0 || !event.target.validity.valid) { renderDamageEstimate();return; }
    const scenario=R.normalizeDamageScenario(state.damageScenario),key=event.target.dataset.value;
    if (action==='damage-setting' && ['attackDamage','uptime','tacticBonus','finalBonus','compoundBonus'].includes(key)) scenario[key]=value;
    else if (action==='damage-rate') scenario.rates[key]=value;
    else if (action==='damage-hits') scenario.hits[key]=value;
    else if (action==='damage-icd') scenario.cooldowns[key]=value;
    else return;
    state.damageScenario=R.normalizeDamageScenario(scenario);
    commitDamage();return;
  }
  if (event.target.id !== 'damageQuality') return;
  const quality = Number(event.target.value);
  if (!Number.isInteger(quality) || quality < 0 || quality > 3) return;
  state.damageQuality = quality;
  commitDamage();
});

document.addEventListener('click', async event => {
  if (!event.target.closest('.red-badge')) document.querySelectorAll('.red-badge[open]').forEach(badge=>{badge.open=false;});
  const target = event.target.closest('[data-action]');
  if (!target) return;
  const { action, value } = target.dataset;
  if (action==='show-view') { showView(value);return; }
  if (action==='mind-tab') {
    if (!['routes','codex','crystals'].includes(value)) return;
    mindTab=value;mindQuery='';renderMindGuide();return;
  }
  if (action==='mind-pool') {
    if (value!=='all'&&!MIND.pools.some(pool=>pool.id===value)) return;
    mindPool=value;mindCategory='all';renderMindGuide();return;
  }
  if (action==='mind-category') {
    if (value!=='all'&&!MIND.categories.some(category=>category.id===value)) return;
    mindCategory=value;renderMindGuide();return;
  }
  if (action==='mind-crystal-group') {
    if (!MIND.crystalGroups.some(group=>group.id===value)) return;
    mindCrystalGroup=value;renderMindGuide();return;
  }
  if (action==='mind-reset-filters') { resetMindFilters();return; }
  if (action==='mind-use-character') {
    if (!CHARACTERS.some(character=>character.id===value)) return;
    mindCharacterFilter=value;
    if (currentCharacter!==value) selectCharacter(value); else renderMindGuide();
    return;
  }
  if (action==='mind-goal') {
    const build=CompassLegacy.find(value);if(!build)return;
    mindCharacterFilter=build.character;setLegacyGoal(value);return;
  }
  if (action==='mind-strategies') {
    if (!CHARACTERS.some(character=>character.id===value)) return;
    if (currentCharacter!==value) {
      currentCharacter=value;state.legacyBuild=null;
      state.legacyBodies=state.legacyBodies.map(source=>source===currentCharacter?null:source);
    }
    state.recommendMode='character';state.characterBuild=null;state.fiveDualGoal=null;commit();
    showView('simulator');document.getElementById('plannerSettings').open=true;
    requestAnimationFrame(()=>document.getElementById('character-strategy-routes')?.scrollIntoView({block:'start'}));return;
  }
  if (action==='legacy-filter') {
    if (!CompassLegacy.filters.some(x=>x[0]===value)) return;
    legacyFilter=value;renderAll();return;
  }
  if (action==='legacy-goal') { setLegacyGoal(value);return; }
  if (action==='legacy-clear') { state.legacyBuild=null;commit('已取消雙傳承目標','ok');return; }
  if (action==='legacy-routes') {
    state.recommendMode='character';state.characterBuild=null;state.fiveDualGoal=null;commit();
    document.getElementById('character-strategy-routes')?.scrollIntoView({block:'start'});return;
  }
  if (action==='damage-hits-auto') {
    const scenario=R.normalizeDamageScenario(state.damageScenario);delete scenario.hits[value];
    state.damageScenario=scenario;commitDamage();return;
  }
  if (action === 'strategy-detail') { openStrategyDetail(value); return; }
  if (action === 'outlook-deepen') { deepenOutlook(value); return; }
  if (action === 'related-red-detail') { openRelatedRedDetail(value); return; }
  if (action === 'undo-build') { undoBuild(); return; }
  if (action === 'recover-backup') { recoverBackup(); return; }
  if (action === 'download-recovery') { recoverBackup(true); return; }
  if (action === 'download-unreadable') { recoverBackup(true,true); return; }
  if (action === 'share-copy') { copyShare(value); return; }
  if (action === 'import-code') { importBuildCode(); return; }
  if (action === 'dialog-close') { closeDialog(value); return; }
  if (action === 'strategy' || action === 'recommend') {
    hideTip();
    const previous = { selected:[...state.selected], acquired:[...state.acquired] };
    const reason = R.toggle(state, value);
    if (!reason && state.recommendMode === 'five-dual' && R.fiveDualSort(state.fiveDualSort) !== 'power' && !state.fiveDualGoal && currentFiveDualGoal?.required.has(value))
      state.fiveDualGoal = fiveDualKey(currentFiveDualGoal.set.duals);
    if (action === 'recommend') state.slot = R.base(state, R.nodes.get(value).tree)?.slot || state.slot;
    const removed = previous.selected.filter(n=>!state.selected.has(n));
    const lostReds = previous.acquired.filter(x=>!state.acquired.some(y=>y.name===x.name));
    const cascading = !reason && (removed.length>1 || lostReds.length>0);
    commit(cascading ? `已移除 ${removed.length} 條策略、${lostReds.length} 條紅策記錄` : reason,cascading?'ok':'error',true,cascading?[...removed,...lostReds.map(x=>x.name)]:null);
    if (reason) shake(value); else pop(value);
  }
  else if (action === 'game-mode') { const reason = switchGameMode(value); commit(reason); }
  else if (action === 'slot') { switchVisibleSlot(value); }
  else if (action === 'inherit-open') openInheritPicker(Number(value));
  else if (action === 'inherit-pick') pickInherit(value);
  else if (action === 'inherit-clear') pickInherit('');
  else if (action === 'inherit-close') closeInheritPicker();
  else if (action === 'inherit-el') { pickerElement = value; renderInheritPicker(); }
  else if (action === 'inherit-tier') { pickerTier = value; renderInheritPicker(); }
  else if (action === 'plan-red') {
    const [name,slot]=value.split('|'),plan=redFillPlans.get(value) || R.plans(state,R.byName.get(name)).find(p=>p.slot===slot);
    const reason=plan?R.planRed(state,name,slot,plan.steps):'路線已更新，請重新查看前置';
    if(!reason&&document.getElementById('strategyDetailModal').open)closeDialog('strategyDetailModal');
    commit(reason||`已將「${name}」加入規劃，尚未記為本局取得。`,reason?'error':'ok');
  }
  else if (action === 'unplan-red') {state.plannedReds=state.plannedReds.filter(x=>x.name!==value);commit();}
  else if (action === 'equip-red') {
    const [name,slot] = value.split('|');
    const plan = redFillPlans.get(value) || R.plans(state,R.byName.get(name)).find(p=>p.slot===slot);
    const reason = plan ? R.equipRed(state,name,slot,plan.steps) : '路線已更新，請重新展開紅策';
    if (!reason && document.getElementById('strategyDetailModal').open) closeDialog('strategyDetailModal');
    commit(reason || `已將「${name}」及所需前置填入當前裝配，可撤銷上一步。`,reason ? 'error' : 'ok');
  }
  else if (action === 'inherit-slot') { const [i, s] = value.split('|'); const e = state.inherited[i]; commit(R.inherit(state, Number(i), e.name, s || null)); }
  else if (action === 'inherit-discard') {
    const i = Number(value), entry = state.inherited[i];
    if (!entry) return;
    const reason = R.inherit(state, i, '');
    commit(reason || `已棄用傳承「${entry.name}」，此槽已清空`, reason ? 'error' : 'ok');
  }
  else if (action === 'inherit-confirm') {
    const i = Number(value), e = state.inherited[i];
    const reason = R.inherit(state, i, e.name, e.slot, !e.confirmed, e.observed);
    commit(reason);
    if (!reason) toast(state.inherited[i].confirmed ? `傳承「${e.name}」已啟用` : `傳承「${e.name}」已停用，配置已保留`, 'ok');
  }
  else if(action==='inherit-observe') {
    const i=Number(value),entry=state.inherited[i];if(!entry)return;
    const reason=R.inherit(state,i,entry.name,entry.slot,true,true);
    commit(reason||`已記錄「${entry.name}」在遊戲中生效。`,reason?'error':'ok');
  }
  else if (action === 'share') shareBuild();
  else if (action === 'target') { state.target = value; commit(); }
  else if (action === 'recommend-mode') {
    if (!RECOMMEND_MODES.some(m => m.id === value)) return;
    state.recommendMode = value;
    if (value === 'five-dual' && R.fiveDualSort(state.fiveDualSort) !== 'power' && !state.fiveDualGoal) {
      getFiveDualRecommendations();
      if (currentFiveDualGoal) state.fiveDualGoal = fiveDualKey(currentFiveDualGoal.set.duals);
    }
    commit();
  }
  else if (action === 'five-dual-sort') {
    if (!FIVE_DUAL_SORTS.some(m => m.id === value)) return;
    state.fiveDualSort = value; state.fiveDualGoal = null;
    getFiveDualRecommendations();
    if (value !== 'power' && currentFiveDualGoal) state.fiveDualGoal = fiveDualKey(currentFiveDualGoal.set.duals);
    commit();
  }
  else if (action === 'five-dual-goal') { if (switchFiveDualGoal(value)) commit('已切換紅策目標方案', 'ok'); }
  else if (action === 'element') { elementFilter = value; renderAll(); }
  else if (action === 'character') selectCharacter(value);
  else if (action === 'apply-build') applyBuild(Number(value));
  else if (action === 'record-build') applyBuild(Number(value),true);
  else if (action === 'auto-character-build') { state.characterBuild = null; commit(); }
  else if (action === 'all-duals') { showAllDuals = !showAllDuals; renderAll(); }
  else if (action === 'acquire') {
    const [name, slot] = value.split('|');
    const reason = R.acquire(state, name, slot);
    commit(reason);
    if (!reason) { toast(`★ 取得紅策「${name}」`, 'dual'); celebrate(); }
  }
  else if (action === 'unacquire') { state.acquired = state.acquired.filter(x => x.name !== value); commit(); }
  else if (action === 'reset-build') {
    if ((state.selected.size || state.acquired.length || state.legacyBuild?.checks.length) && !await gameConfirm('重置本局策略、取得記錄與潛能勾選？傳承配置與雙傳承目標保留，紅策停用；可撤銷恢復。', {title:'重置配裝',ok:'確認重置'})) return;
    state.selected.clear(); state.acquired = []; state.inherited.forEach(x => { if (x) {x.confirmed = false;delete x.observed;} });
    R.syncInherited(state);
    state.fiveDualGoal = null;
    if(state.legacyBuild) state.legacyBuild.checks=[];
    commit('已重置本局配裝，可撤銷恢復', 'ok');
  }
});

/* Brief "pop" on a newly selected card; re-queried after renderAll replaced the DOM. */
function pop(name) {
  const node = [...document.querySelectorAll('.build-node')].find(n => n.dataset.value === name);
  if (node?.classList.contains('selected')) node.classList.add('pop');
}
function celebrate() {
  const hero = document.querySelector('.next-hero');
  hero?.classList.add('celebrate');
}

document.getElementById('slotTabs').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const index = SLOTS.findIndex(s => s.id === state.slot);
  switchVisibleSlot(SLOTS[event.key === 'Home' ? 0 : event.key === 'End' ? 4 :
    (index + (event.key === 'ArrowRight' ? 1 : 4)) % 5].id);
  document.getElementById('tab-' + state.slot).focus();
});
document.querySelector('.mind-tabs').addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  const tabs = ['routes', 'codex', 'crystals'];
  const index = tabs.indexOf(mindTab);
  mindTab = tabs[event.key === 'Home' ? 0 : event.key === 'End' ? 2 :
    (index + (event.key === 'ArrowRight' ? 1 : 2)) % 3];
  mindQuery = '';renderMindGuide();
  document.querySelector(`.mind-tab[data-value="${mindTab}"]`)?.focus();
});

function exportData() {
  document.getElementById('exportCode').textContent = JSON.stringify(R.serialize(state), null, 2);
  closeDataModal(); openDialog('exportModal');
}
function downloadExport() {
  const url = URL.createObjectURL(new Blob([JSON.stringify(R.serialize(state), null, 2)], { type: 'application/json' }));
  const link = document.createElement('a'); link.href = url; link.download = 'bbe-build.json'; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function closeModal() { closeDialog('exportModal'); }
async function copyExport() {
  try { await navigator.clipboard.writeText(document.getElementById('exportCode').textContent); notice = '已複製配裝資料。'; toast(notice, 'ok'); }
  catch { notice = '無法複製，請使用「下載 JSON」。'; toast(notice, 'error'); }
  document.getElementById('saveStatus').textContent = notice;
}
function importData(input) {
  const file = input.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const result = R.restore(JSON.parse(reader.result));
      if(!backupCurrent('匯入 JSON 前的完整配裝'))return;
      state = result.state; currentCharacter = state.character;
      commit(result.warnings.length ? `已匯入，略過衝突設定：${result.warnings.join('；')}` : '已匯入完整配裝。',
        result.warnings.length ? 'warn' : 'ok');
      closeDataModal();
    } catch (error) { document.getElementById('importStatus').textContent = `匯入失敗：${error.message}。現有配裝保持原樣。`; }
  };
  reader.onerror = () => { document.getElementById('importStatus').textContent = '讀取檔案失敗，請重試。'; };
  reader.readAsText(file); input.value = '';
}
async function resetAll() {
  closeDataModal();
  if(!await gameConfirm('清空本局、規劃清單、角色與傳承設定？清空前會保存一份恢復備份，重新開啟頁面後仍可恢復。',{title:'重置所有資料',ok:'保存備份並清空'}))return;
  if(!backupCurrent('清空所有資料前的完整配裝'))return;
  storageBlocked=false;
  state = R.empty(); currentCharacter = null; commit('已清空所有資料，可撤銷恢復', 'ok');
}
function openDataModal() { openDialog('dataModal'); }
function closeDataModal() { closeDialog('dataModal'); }
document.querySelectorAll('dialog').forEach(modal => {
  modal.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...modal.querySelectorAll('a[href],button:not(:disabled),input:not(:disabled),select:not(:disabled),textarea:not(:disabled),summary,[tabindex]:not([tabindex="-1"])')]
      .filter(el => el.getClientRects().length && !el.closest('[hidden]'));
    const first=controls[0],last=controls[controls.length-1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && document.activeElement===first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement===last) { event.preventDefault(); first.focus(); }
  });
  modal.addEventListener('click', event => { if (event.target === modal) modal.close(); });
  modal.addEventListener('close', () => {
    const visible=el=>el?.isConnected&&el.getClientRects().length>0;
    const target = visible(modal._opener) ? modal._opener : [...document.querySelectorAll('[data-action]')].find(el=>visible(el)&&el.dataset.action===modal._focusAction&&el.dataset.value===modal._focusValue);
    (target || document.getElementById('tab-'+state.slot))?.focus({preventScroll:true});
  });
});
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z' && !event.shiftKey &&
      !event.target.closest('input,textarea,[contenteditable="true"]') && !document.querySelector('dialog[open]')) {
    event.preventDefault(); undoBuild();
  }
  if(event.key==='Escape')hideTip();
});

loadState();
/* A shared link replaces the current build only after the player agrees; the hash is then cleared
 * so reloading does not re-prompt. */
const shared = readSharedBuild();
if (shared) {
  history.replaceState?.(null, '', location.pathname + location.search);
  if (shared.error) setTimeout(() => toast(`無法開啟分享連結：${shared.error}`, 'error'));
  else setTimeout(async () => {
    const hasOwn = state.selected.size > 0;
    if (hasOwn && !await gameConfirm(`分享的配裝包含 ${shared.state.selected.size} 條策略。要取代你目前的配裝嗎？`,
      { title: '開啟分享配裝', ok: '載入', danger: false })) return;
    if(!backupCurrent('載入分享配裝前的完整配裝'))return;
    state = shared.state; currentCharacter = state.character;
    commit(shared.warnings.length ? `已載入分享配裝，略過：${shared.warnings.join('；')}` : '已載入分享配裝', shared.warnings.length ? 'warn' : 'ok');
  });
}
const linkedCharacter = new URLSearchParams(location.search).get('char');
if (CHARACTERS.some(c => c.id === linkedCharacter)) {
  if(currentCharacter!==linkedCharacter) {state.legacyBuild=null;state.characterBuild=null;}
  currentCharacter = linkedCharacter;
  state.legacyBodies=state.legacyBodies.map(id=>id===currentCharacter?null:id);
}
const linkedView = new URLSearchParams(location.search);
if (linkedView.get('view') === 'mind') {
  const tab = linkedView.get('tab');
  if (['routes', 'codex', 'crystals'].includes(tab)) mindTab = tab;
  showView('mind');
}
state.character=currentCharacter;sessionHistory.reset(R.serialize(state));
new ResizeObserver(entries=>{
  document.documentElement.style.setProperty('--header-height',entries[0].target.getBoundingClientRect().height+'px');
}).observe(document.querySelector('header'));
new ResizeObserver(entries=>{
  document.documentElement.style.setProperty('--red-progress-height',entries[0].target.getBoundingClientRect().height+'px');
}).observe(document.getElementById('dualProgress'));
renderAll();
