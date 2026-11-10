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
  const customized=JSON.stringify(scenario)!==JSON.stringify(R.normalizeDamageScenario()) || result.quality!==3;
  document.getElementById('damageEstimate').innerHTML=`
    <div class="damage-heading"><h3 id="damageTitle">配裝傷害估算</h3>
      <label for="damageQuality">假設全部品質
        <select id="damageQuality" class="select select-sm" aria-label="傷害估算品質">
          ${['白品質','藍品質','紫品質','金品質（最高）'].map((name,index)=>`<option value="${index}" ${result.quality===index?'selected':''}>${name}</option>`).join('')}
        </select></label></div>
    ${conflicts.length?'<p class="damage-note">配裝與模式容量衝突，請先調整；暫不顯示傷害估算。</p>':`
    <p class="model-scope">${customized?'已自訂情境，仍含未測項目':'示範情境，並非實測 DPS'}：假設全部${['白','藍','紫','金'][result.quality]}品質、持續覆蓋 ${scenario.uptime}%；未知頻率預設每秒 1 次、數量按全數命中。未記錄每條策略的實際品質。固定值推薦指標不跟隨本面板設定重排。</p>
    <div class="damage-trial" aria-live="polite" aria-atomic="true"><div><div>Steam 策略情境 DPS 試算</div>
      <strong>${trial.available?'約 '+format(trial.total):'—'}${trial.available?'<small>／秒</small>':''}</strong></div>
      <p>依下方觸發與命中假設計算${trial.unknown.length?' · 部分效果':''}<br>不含角色自身攻擊；完整連鎖尚未模擬</p></div>
    <details id="damage-scenario"><summary>試算假設 · 頻率、命中數與增傷</summary>
      <p class="damage-note">未知頻率預設每秒 1 次判定；已知數量與機率自動帶入，假設全數命中，可覆寫等效命中。已知冷卻及自訂內建 CD 限制頻率；空白 CD 表示未知，不代表沒有 CD。持續傷害按覆蓋率計算。</p>
      <div class="damage-settings">
        ${setting('attackDamage','觸發光波的普攻基準傷害（未套用下列乘區）',1e9)}
        ${setting('uptime','持續傷害覆蓋率（%）',100)}
        ${setting('tacticBonus','策略傷害增傷（%）',10000)}
        ${setting('finalBonus','最終／受到／角色所有傷害增傷合計（%）',10000)}
        ${setting('compoundBonus','五號化合物增傷（%）',10000)}
      </div>
      <div class="trial-toggles">
        ${toggle('removeSkillIcd','假設已解除技能槽內建 CD（只忽略自訂 ICD）')}
        ${toggle('removeDashIcd','假設已解除衝刺槽內建 CD（只忽略自訂 ICD）')}
        ${trial.splitSlimeAvailable?toggle('splitSlime290','研究假說：分裂史萊姆每擊改為 290（取代原傷害／自身增幅）'):''}
      </div>
      ${trial.assumptions.length?`<p class="damage-partial">${trial.assumptions.map(esc).join('；')}</p>`:''}
      <p class="damage-note">同一乘區先加算，再將不同乘區相乘；個別策略自身增傷已在基礎值套用，不要重填。普攻傷害填 0 時，普通光波暫不參與試算。</p>
      <ul class="damage-trial-rows">${trial.rows.map((row,index)=>`<li><div class="trial-source"><strong>${esc(row.name)}</strong><small>${esc(row.note||'')}${row.capNote?' · '+esc(row.capNote):''}</small>${row.quantityNote?`<small>自動數量：${esc(row.quantityNote)}；等效 ${Number(row.defaultHits.toFixed(4))} 次${row.hitsOverridden?'（目前已覆寫）':''}</small>`:''}</div>
        ${row.kind==='hit'?`<label for="trial-rate-${index}">每秒判定<input class="input input-sm" id="trial-rate-${index}" type="number" min="0" max="1000" step="any" inputmode="decimal" data-action="damage-rate" data-value="${esc(row.key)}" value="${row.requestedRate}"></label>
          <label for="trial-hits-${index}">每次有效命中<input class="input input-sm" id="trial-hits-${index}" type="number" min="0" max="1000" step="any" inputmode="decimal" data-action="damage-hits" data-value="${esc(row.key)}" value="${row.hits}">${row.hitsOverridden?`<button type="button" class="btn btn-sm" data-action="damage-hits-auto" data-value="${esc(row.key)}">恢復自動</button>`:''}</label>
          <label for="trial-icd-${index}">自訂內建 CD（秒）<input class="input input-sm" id="trial-icd-${index}" type="number" min="0" max="3600" step="any" placeholder="未知" inputmode="decimal" data-action="damage-icd" data-value="${esc(row.key)}" value="${scenario.cooldowns[row.key]??''}"></label>`:'<span>使用持續覆蓋率</span>'}
        <span class="trial-result">約 ${format(row.contribution)}／秒${row.cap!==null?`<small>有效頻率 ${Number(row.rate.toFixed(4))}／秒</small>`:''}</span></li>`).join('')}</ul>
      <p class="damage-note">自訂命中數會取代自動數量，不重複相乘。火彈同敵衰減未知，仍預設等效 1 次；連鎖產物不無限遞推。解除 ICD 的假設不會取消地雷冷卻或光波充能。設定只影響 DPS 試算，不改變五紅推薦排序。</p>
      ${trial.reason?`<p class="damage-partial">${esc(trial.reason)}</p>`:''}
    </details>
    <div class="stats damage-stats" aria-live="polite" aria-atomic="true">
      <div class="stat"><div class="stat-title">單次命中參考合計</div><div class="stat-value">${noFixed?'—':'約 '+format(result.hit)}</div><div class="stat-desc">每個可計算來源各命中一次</div></div>
      <div class="stat"><div class="stat-title">持續傷害參考合計</div><div class="stat-value">${noFixed?'—':'約 '+format(result.perSecond)}<small>${noFixed?'':'／秒'}</small></div><div class="stat-desc">每個可計算持續來源各一份</div></div>
    </div>
    <p class="damage-note">依已選／已啟用效果、上述品質與條件成立估算；未含角色傷害及完整觸發鏈，兩項不能當成整套 DPS。</p>
    ${!state.selected.size?'<p class="damage-note">選擇策略後即時更新；尚未取得的推薦目標不計入。</p>':''}
    ${trial.extraNames.length?'<p class="damage-note">普通光波已依輸入的普攻基準納入上方 DPS；以下固定值明細不含這項縮放。</p>':''}
    ${trial.unknown.length?`<p class="damage-partial">部分估算：${trial.unknown.length} 個效果缺資料或需額外條件；未計入不代表傷害為零。</p>`:''}
    <details id="damage-breakdown"><summary>計算明細與未計入項目</summary>
      ${result.rows.length?`<ul class="damage-rows">${result.rows.map(row=>`<li><div><strong>${esc(row.name)}</strong>${row.modifiers.length?`<small>套用：${row.modifiers.map(esc).join('、')}</small>`:''}${row.note?`<small>${esc(row.note)}</small>`:''}</div><span>約 ${format(row.value)}${row.kind==='dot'?'／秒':'／次'}</span></li>`).join('')}</ul>`:'<p class="damage-note">目前沒有可辨識的固定傷害來源。</p>'}
      ${result.basicBoost?`<p class="damage-note">普攻寒冷：普攻直接增傷 +${result.basicBoost}%，需角色傷害基準，未併入上方策略數字。</p>`:''}
      ${trial.unknown.length?`<ul class="damage-missing">${trial.unknown.map(row=>`<li>${esc(row.name)}：${esc(row.reason)}</li>`).join('')}</ul>`:''}
      ${result.notes.length?`<ul class="damage-missing">${result.notes.map(note=>`<li>${esc(note)}</li>`).join('')}</ul>`:''}
      <p class="damage-note">逐一來源的一擊／一個投射物；不同來源未必同時命中。已知機率按期望值折算，未知機率只列觸發時數值。未完整模擬數量、蓄時、敵人數或場內站位。</p>
      <p class="damage-note">品質選擇僅影響此面板；固定傷害推薦仍按最高品質比較。同狀態不同來源是否疊加，尚未實機校準；未納入角色攻擊與全局增傷乘區。</p>
      <a href="docs/strategy-reference.md#damage-review-20261018">公式、限制與核對來源</a>
      <p class="damage-note">採 Steam 版社群圖鑑與增傷公式作試算依據，核對日期 2026-10-18；數值會隨試算假設改變。</p>
    </details>`}`;
}
