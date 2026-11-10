/* Keep speculative searches off the game-time interaction thread. */
const outlookCaches = new Map();
let outlookWorker = null, outlookWorkerUnavailable = false, outlookRevision = 0;
let deeperOutlookWorker = null, deeperOutlookKey = '';

function strategyOutlook(name) {
  return outlookCaches.get(CompassOutlook.key(state))?.get(name);
}

function outlookDetail(name) {
  const result = strategyOutlook(name);
  if (!result) return state.selected.has(name) || R.canSelect(state, name) ? '' : `<section class="outlook-detail" data-outlook-detail="${esc(name)}" aria-busy="true"><h4>紅數試算中…</h4></section>`;
  return `<section class="outlook-detail" data-outlook-detail="${esc(name)}"><h4>${result.count ? `選擇後可規劃 ${result.count} 紅` : '暫未找到共存紅策方案'}</h4>
    ${result.count ? `<p>${result.targets.map(x => esc(x.name)).join('、')}</p><small>保留現有配裝 · 尚需 ${result.steps.length} 條前置${result.truncated ? ' · 搜尋已達上限' : ''}</small>` : ''}
    <small>目前模型找到的同時共存方案，非遊戲上限；與人物目標、排序方向分開試算。</small>
    ${result.truncated && result.budget < 5000 && !outlookWorkerUnavailable ? button('加深搜尋','outlook-deepen',name) : ''}
    ${result.truncated && result.budget >= 5000 ? '<small>本次加深搜尋仍未窮盡，已保留找到的方案。</small>' : ''}</section>`;
}

function deepenOutlook(name) {
  const key=CompassOutlook.key(state), previous=strategyOutlook(name);
  if(!previous?.truncated || state.selected.has(name) || R.canSelect(state,name))return;
  deeperOutlookWorker?.terminate();
  deeperOutlookKey=key;
  const control=document.querySelector('[data-action="outlook-deepen"]');
  if(control){control.disabled=true;control.textContent='搜尋中…';}
  try {
    const worker=deeperOutlookWorker=CompassOutlook.createWorker();
    worker.onmessage=({data})=>{
      worker.terminate();if(deeperOutlookWorker===worker)deeperOutlookWorker=null;
      if(CompassOutlook.key(state)!==key)return;
      const result=data.result;
      // A longer bounded search must never discard an already witnessed route.
      if(result && (result.count>previous.count || result.count===previous.count && result.steps.length<=previous.steps.length))outlookCaches.get(key)?.set(name,result);
      else outlookCaches.get(key)?.set(name,{...previous,budget:5000});
      queueBuildOutlooks();
      document.querySelectorAll('[data-outlook-detail]').forEach(el=>{if(el.dataset.outlookDetail===name)el.outerHTML=outlookDetail(name);});
    };
    worker.onerror=event=>{
      event.preventDefault();worker.terminate();deeperOutlookWorker=null;
      if(CompassOutlook.key(state)===key){if(control){control.disabled=false;control.textContent='加深搜尋';}toast('搜尋未完成，已保留原結果。','warn');}
    };
    worker.postMessage({id:0,state:R.serialize(state),names:[name],budget:5000,presets:{normal:FIVE_DUAL_SETS,extreme:FIVE_DUAL_EXTREME_SETS}});
  } catch {
    if(control){control.disabled=false;control.textContent='加深搜尋';}toast('目前無法啟動加深搜尋，已保留原結果。','warn');
  }
}

function queueBuildOutlooks() {
  const revision = ++outlookRevision, key = CompassOutlook.key(state);
  if(deeperOutlookWorker && deeperOutlookKey!==key){deeperOutlookWorker.terminate();deeperOutlookWorker=null;}
  if (!outlookCaches.has(key)) {
    if (outlookCaches.size >= 8) outlookCaches.delete(outlookCaches.keys().next().value);
    outlookCaches.set(key, new Map());
  }
  const cache = outlookCaches.get(key);
  const badges = [...document.querySelectorAll('[data-outlook-name]')];
  const pending = new Set(badges.map(el => el.dataset.outlookName).filter(name => !cache.has(name)));
  const status = document.getElementById('buildOutlookStatus');
  const paint = (name, result) => {
    for (const el of badges.filter(el => el.dataset.outlookName === name)) {
      el.textContent = result?.count ? `${result.truncated ? '已找到' : '可規劃'} ${result.count} 紅 · 差 ${result.steps.length}` : '未找到路線';
      if (result?.truncated) {
        const hint = document.createElement('span'); hint.className = 'outlook-incomplete'; hint.textContent = '未搜完'; el.appendChild(hint);
      }
      el.dataset.outlookCount = result?.count || 0;
      el.setAttribute('aria-busy', 'false');
      el.closest('button').title = result?.count
        ? `選擇後可同時規劃 ${result.count} 紅 · 尚需 ${result.steps.length} 條前置\n${result.targets.map(x => x.name).join('、')}\n目前模型試算，非遊戲上限；詳情可查看組合。`
        : '目前搜尋未找到共存路線，不代表遊戲無解。';
    }
  };
  badges.forEach(el => { if (cache.has(el.dataset.outlookName)) paint(el.dataset.outlookName, cache.get(el.dataset.outlookName)); });
  const finish = () => { if (status) status.textContent = pending.size ? '紅數試算中…' : '紅數已更新'; };
  finish();
  const receive = ({ id, name, result }) => {
    if (id !== outlookRevision) return;
    if((cache.get(name)?.budget || 0) <= (result?.budget || 200))cache.set(name, result);
    pending.delete(name); paint(name, cache.get(name)); finish();
    for (const detail of document.querySelectorAll('[data-outlook-detail]')) {
      if (detail.dataset.outlookDetail === name) detail.outerHTML = outlookDetail(name);
    }
  };
  const presets = { normal: FIVE_DUAL_SETS, extreme: FIVE_DUAL_EXTREME_SETS };
  if (!outlookWorker && !outlookWorkerUnavailable) {
    try {
      outlookWorker = CompassOutlook.createWorker();
      outlookWorker.onmessage = event => receiveCurrentOutlook(event.data);
      outlookWorker.onerror = event => {
        event.preventDefault();
        outlookWorker.terminate(); outlookWorker = null; outlookWorkerUnavailable = true;
        queueBuildOutlooks();
      };
      outlookWorker.postMessage({ id: revision, state: R.serialize(state), names: [], presets });
    } catch { outlookWorkerUnavailable = true; }
  }
  receiveCurrentOutlook = receive;
  const snapshot = R.serialize(state);
  if (outlookWorker) {
    // Even an empty queue cancels work for an older build.
    outlookWorker.postMessage({ id: revision, state: snapshot, names: [...pending] });
  } else {
    const seed = { ...snapshot, selected: new Set(snapshot.selected) }, names = [...pending];
    const next = () => {
      if (revision !== outlookRevision || !names.length) return;
      const name = names.shift();
      receive({ id: revision, name, result: CompassOutlook.evaluate(seed, name, presets[seed.gameMode]) });
      if (names.length) setTimeout(next, 0);
    };
    setTimeout(next, 0);
  }
}
let receiveCurrentOutlook = () => {};
