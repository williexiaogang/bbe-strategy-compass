/* Temporary game offers are previews; only the explicit selection records one. */
let offerChoices = ['', '', ''];
function renderOfferComparison() {
  const host=document.getElementById('offerComparison');
  const legal=[...R.nodes].filter(([name])=>!state.selected.has(name)&&!R.canSelect(state,name));
  const currentCore=currentCharacter?R.characterPlan(state,currentCharacter):null;
  host.innerHTML=offerChoices.map((name,index)=>{
    const valid=legal.some(([n])=>n===name);
    let ready=[],core='';
    if(valid){
      const trial=R.restore(R.serialize(state)).state;R.toggle(trial,name);
      ready=DUALS.filter(d=>!state.acquired.some(x=>x.name===d.name)&&!state.inherited.some(x=>x?.name===d.name)&&d.slots.some(slot=>R.acquireReason(state,d.name,slot)&&!R.acquireReason(trial,d.name,slot)));
      if(currentCore){
        trial.characterBuild=currentCore.index;
        core=R.characterPlan(trial,currentCharacter)?.conflicts.length?'與目前人物核心衝突':'可保留目前人物核心';
      }
    }
    return `<article class="card offer-card"><label for="offer-${index}">遊戲選項 ${index+1}</label>
      <select class="select select-sm" id="offer-${index}" data-action="offer-choice" data-value="${index}"><option value="">選擇遊戲出現的策略</option>
      ${name&&!valid?`<option value="${esc(name)}" selected>${esc(name)}（已取得或不可選）</option>`:''}
      ${legal.map(([n,node])=>`<option value="${esc(n)}" ${n===name?'selected':''} ${offerChoices.some((x,i)=>i!==index&&x===n)?'disabled':''}>${esc(slotLabel(node.slot||R.base(state,node.tree)?.slot))} · ${TIER_LABEL[node.level]} · ${esc(n)}</option>`).join('')}</select>
      ${name? valid?`<button type="button" class="btn offer-pick" data-action="offer-select" data-value="${esc(name)}"><span>選擇「${esc(name)}」</span><span class="badge badge-sm badge-outline node-outlook" data-outlook-name="${esc(name)}" aria-busy="true">試算中…</span></button>
      <p>${ready.length?'立即齊備：'+ready.map(d=>esc(d.name)).join('、'):'尚未新增前置齊備的紅策'}</p>${core?`<p>${esc(core)}</p>`:''}${button('效果與路線詳情','strategy-detail',name)}`:`<p>目前已取得或前置不符，請更新此選項。</p>`:'<p>只比較本次出現的選項</p>'}</article>`;
  }).join('');
}
