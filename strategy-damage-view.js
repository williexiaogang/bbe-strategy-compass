/* Damage UI is separate from the recommendation engine and pure estimator. */
function renderDamageEstimate() {
  const result=CompassDamage.estimate(state,R);
  const trial=CompassDps.trial(state,R);
  const scenario=trial.scenario;
  const format=value=>Math.round(value).toLocaleString('zh-TW');
  const setting=(key,label,max)=>`<label for="trial-${key}">${esc(label)}<input class="input input-sm" id="trial-${key}" type="number" min="0" max="${max}" step="any" inputmode="decimal" data-action="damage-setting" data-value="${key}" value="${scenario[key]}"></label>`;
  const toggle=(key,label)=>`<label class="trial-toggle" for="trial-${key}"><input class="checkbox checkbox-sm" id="trial-${key}" type="checkbox" data-action="damage-toggle" data-value="${key}" ${scenario[key]?'checked':''}><span>${esc(label)}</span></label>`;
  const hasFixed=result.rows.length>0;
  const noFixed=state.selected.size>0&&!hasFixed;
  const conflicts=R.modeConflicts(state);
  document.getElementById('damageEstimate').innerHTML=`
    <div class="damage-heading"><h3 id="damageTitle">配裝傷害估算</h3>
      <label for="damageQuality">品質
        <select id="damageQuality" class="select select-sm" aria-label="傷害估算品質">
          ${['白品質','藍品質','紫品質','金品質（最高）'].map((name,index)=>`<option value="${index}" ${result.quality===index?'selected':''}>${name}</option>`).join('')}
        </select></label></div>
    ${conflicts.length?'<p class="damage-note">配裝與模式容量衝突，請先調整；暫不顯示傷害估算。</p>':`
    <div class="damage-trial" aria-live="polite" aria-atomic="true"><div><div>策略 DPS 試算</div>
      <strong>${trial.available?'約 '+format(trial.total):'—'}${trial.available?'<small>／秒</small>':''}</strong></div></div>
    <details id="damage-scenario"><summary>試算設定</summary>
      <div class="damage-settings">
        ${setting('attackDamage','觸發光波的普攻基準傷害（未套用下列乘區）',1e9)}
        ${setting('uptime','持續傷害覆蓋率（%）',100)}
        ${setting('tacticBonus','策略傷害增傷（%）',10000)}
        ${setting('finalBonus','最終／受到／角色所有傷害增傷合計（%）',10000)}
        ${setting('compoundBonus','五號化合物增傷（%）',10000)}
      </div>
      <div class="trial-toggles">
        ${toggle('removeSkillIcd','解除技能槽內建 CD')}
        ${toggle('removeDashIcd','解除衝刺槽內建 CD')}
        ${trial.splitSlimeAvailable?toggle('splitSlime290','分裂史萊姆每擊改為 290（取代原傷害）'):''}
      </div>
      <ul class="damage-trial-rows">${trial.rows.map((row,index)=>`<li><div class="trial-source"><strong>${esc(row.name)}</strong>${row.capNote?`<small>${esc(row.capNote)}</small>`:''}${row.quantityNote?`<small>${esc(row.quantityNote)} · ${Number(row.defaultHits.toFixed(4))} 次${row.hitsOverridden?'（已覆寫）':''}</small>`:''}</div>
        ${row.kind==='hit'?`<label for="trial-rate-${index}">每秒判定<input class="input input-sm" id="trial-rate-${index}" type="number" min="0" max="1000" step="any" inputmode="decimal" data-action="damage-rate" data-value="${esc(row.key)}" value="${row.requestedRate}"></label>
          <label for="trial-hits-${index}">每次有效命中<input class="input input-sm" id="trial-hits-${index}" type="number" min="0" max="1000" step="any" inputmode="decimal" data-action="damage-hits" data-value="${esc(row.key)}" value="${row.hits}">${row.hitsOverridden?`<button type="button" class="btn btn-sm" data-action="damage-hits-auto" data-value="${esc(row.key)}">恢復自動</button>`:''}</label>
          <label for="trial-icd-${index}">自訂內建 CD（秒）<input class="input input-sm" id="trial-icd-${index}" type="number" min="0" max="3600" step="any" placeholder="未設定" inputmode="decimal" data-action="damage-icd" data-value="${esc(row.key)}" value="${scenario.cooldowns[row.key]??''}"></label>`:'<span>使用持續覆蓋率</span>'}
        <span class="trial-result">約 ${format(row.contribution)}／秒${row.cap!==null?`<small>有效頻率 ${Number(row.rate.toFixed(4))}／秒</small>`:''}</span></li>`).join('')}</ul>
      ${trial.reason?`<p class="damage-partial">${esc(trial.reason)}</p>`:''}
    </details>
    <div class="stats damage-stats" aria-live="polite" aria-atomic="true">
      <div class="stat"><div class="stat-title">單次命中合計</div><div class="stat-value">${noFixed?'—':'約 '+format(result.hit)}</div></div>
      <div class="stat"><div class="stat-title">持續傷害合計</div><div class="stat-value">${noFixed?'—':'約 '+format(result.perSecond)}<small>${noFixed?'':'／秒'}</small></div></div>
    </div>
    ${!state.selected.size?'<p class="damage-note">選擇策略後即時更新。</p>':''}
    <details id="damage-breakdown"><summary>計算明細</summary>
      ${result.rows.length?`<ul class="damage-rows">${result.rows.map(row=>`<li><div><strong>${esc(row.name)}</strong>${row.modifiers.length?`<small>套用：${row.modifiers.map(esc).join('、')}</small>`:''}</div><span>約 ${format(row.value)}${row.kind==='dot'?'／秒':'／次'}</span></li>`).join('')}</ul>`:'<p class="damage-note">目前沒有可計算的固定傷害。</p>'}
      ${result.basicBoost?`<p class="damage-note">普攻寒冷：普攻直接增傷 +${result.basicBoost}%</p>`:''}
    </details>`}`;
}

function renderTopDamage() {
  const host = document.getElementById('topDamage');
  if (!host) return;
  const trial = CompassDps.trial(state, R);
  const available = trial.available && state.selected.size > 0;
  const value = Math.round(trial.total).toLocaleString('zh-TW');
  host.innerHTML = `<span>估算傷害</span><strong>${available ? `約 ${value}<small>／秒</small>` : '—'}</strong>`;
}
