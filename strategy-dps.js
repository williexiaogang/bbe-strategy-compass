/* Steam-oriented scenario trial. Rates/hit counts are explicit assumptions, not measured DPS.
 * Named tactic upgrades are already applied by CompassDamage; global buckets are applied once. */
const CompassDps = (() => {
  const keyOf=row=>(row.red?'r:':'n:')+row.name;
  function trial(state,rules) {
    const scenario=rules.normalizeDamageScenario(state.damageScenario);
    const estimate=CompassDamage.estimate(state,rules),tier=estimate.quality;
    const active=new Set([...state.acquired.map(x=>x.name),...rules.activeInherited(state).map(x=>x.name)]);
    const rows=estimate.rows.map(row=>({...row}));
    const extraNames=[];
    const splitSlimeAvailable=active.has('分裂史萊姆')&&state.selected.has('召喚史萊姆');
    const assumptions=[];
    if(splitSlimeAvailable&&scenario.splitSlime290){
      const slime=rows.find(row=>row.name==='召喚史萊姆');
      if(slime){slime.value=290;slime.note='分裂史萊姆 290 假說：取代原每擊傷害與原自身增幅，仍套用全局乘區';}
      assumptions.push('已啟用個人筆記的分裂史萊姆 290 假說，並非預設規則');
    }
    if(state.selected.has('普攻光波')&&scenario.attackDamage>0){
      const scaling=CompassDamageData.nodes['普攻光波'].scalingValues[tier];
      const modifiers=['光波強化','增強光波'].filter(name=>state.selected.has(name));
      const bonus=modifiers.reduce((sum,name)=>sum+CompassDamageData.nodes[name].scalingValues[tier],0);
      rows.push({name:'普攻光波',kind:'hit',red:false,value:scenario.attackDamage*scaling/100*(1+bonus/100),
        note:'普攻基準 × 光波倍率 × 光波自身增傷；充能條件視為成立',modifiers});
      extraNames.push('普攻光波',...modifiers);
    }
    const multiplier=(1+scenario.tacticBonus/100)*(1+scenario.finalBonus/100)*(1+scenario.compoundBonus/100);
    const specOf=row=>(row.red?CompassDamageData.duals:CompassDamageData.nodes)[row.name]||{};
    const parentOf=row=>{
      const spec=specOf(row);
      const name=spec.parentName|| (spec.parentGroup&&[...state.selected].find(n=>rules.nodes.get(n)?.level===1&&rules.nodes.get(n).tree.id===spec.parentGroup));
      return rows.find(candidate=>!candidate.red&&candidate.name===name);
    };
    const slotOf=row=>{
      if(row.red){const name=row.name.replace(/ · 射出$/,'');return state.acquired.find(x=>x.name===name)?.slot||rules.activeInherited(state).find(x=>x.name===name)?.slot;}
      const node=rules.nodes.get(row.name);return node?.slot||(node&&rules.base(state,node.tree)?.slot);
    };
    const packetOf=row=>{
      const spec=specOf(row),notes=[];
      let count=spec.packetCount||1;
      if(spec.packetCount)notes.push(`圖鑑數量 ${spec.packetCount}`);
      if(!row.red)for(const name of state.selected){
        const quantity=CompassDamageData.nodes[name]?.quantity;
        if(!quantity?.targets.includes(row.name))continue;
        const value=quantity.constant??quantity.values?.[tier];
        if(!Number.isFinite(value))continue;
        if(quantity.mode==='extra')count+=value;
        else if(quantity.mode==='total')count=value;
        else if(quantity.mode==='chance-extra')count*=1+value/100*quantity.extra;
        notes.push(quantity.mode==='chance-extra'?`${name}：${value}% 機率額外 ${quantity.extra} 個`:`${name}：${quantity.mode==='total'?'總數':'增加'} ${value}`);
      }
      if(['技能火彈','傳承技火彈'].includes(row.name))notes.push(`發射 ${state.selected.has('多重火彈')?14:10} 顆，但同敵衰減未知，維持等效 1 次；可自行覆寫`);
      return {count,notes};
    };
    const frequencyOf=row=>{
      const key=keyOf(row);
      let cap=null;const notes=[];
      if(row.name==='放置地雷'){
        const reduction=state.selected.has('高效布雷')?[1,2,3,4][tier]:0;
        cap=1/(10-reduction);notes.push(`地雷冷卻 ${10-reduction} 秒`);
      }
      if(row.name==='普攻光波'){
        const seconds=5+(state.selected.has('增強光波')?1:0)-(active.has('光波快充')?2.5:0);
        cap=1/seconds;notes.push(`光波充能至少 ${seconds} 秒${active.has('光波快充')?'，假設位於光陣內':''}`);
      }
      const slot=slotOf(row),icd=scenario.cooldowns[key];
      const icdRemoved=slot==='skill'&&scenario.removeSkillIcd||slot==='dash'&&scenario.removeDashIcd;
      if(icd>0){
        if(icdRemoved)notes.push(`已按${slot==='skill'?'技能':'衝刺'}槽解除假設忽略自訂內建 CD`);
        else{cap=Math.min(cap??Infinity,1/icd);notes.push(`自訂內建 CD ${icd} 秒（假設／實測輸入）`);}
      }
      const parent=parentOf(row),parentFrequency=parent&&frequencyOf(parent);
      if(parentFrequency){cap=Math.min(cap??Infinity,parentFrequency.rate);notes.push(`由${parent.name}觸發，頻率不超過來源`);}
      const defaultRate=parentFrequency?parentFrequency.rate:cap===null?1:Math.min(1,cap);
      const requestedRate=scenario.rates[key]??defaultRate;
      const rate=cap===null?requestedRate:Math.min(requestedRate,cap);
      return {cap,capNote:notes.join('；'),requestedRate,rate,defaultRate,slot,icdRemoved};
    };
    const contributions=rows.map(row=>{
      const key=keyOf(row),frequency=frequencyOf(row),packet=packetOf(row);
      const hits=scenario.hits[key]??packet.count;
      const {rate,cap}=frequency;
      const contribution=row.value*(row.kind==='dot'?scenario.uptime/100:rate*hits)*multiplier;
      return {...row,key,...frequency,hits,defaultHits:packet.count,quantityNote:packet.notes.join('；'),hitsOverridden:scenario.hits[key]!==undefined,
        assumed:row.kind==='hit'&&scenario.rates[key]===undefined&&cap===null,contribution};
    });
    const quantityUnknown=[...[...state.selected].map(name=>({name,spec:CompassDamageData.nodes[name]})),...[...active].map(name=>({name,spec:CompassDamageData.duals[name]}))]
      .filter(entry=>entry.spec?.quantityPending).map(entry=>({name:entry.name,reason:entry.spec.quantityPending}));
    if(splitSlimeAvailable&&!scenario.splitSlime290)quantityUnknown.push({name:'分裂史萊姆',reason:'290 替換值僅有個人筆記支持，預設不採用；可啟用假說試算'});
    const conflicts=rules.modeConflicts(state);
    const available=!conflicts.length&&(contributions.length>0||state.selected.size===0);
    return {available,total:available?contributions.reduce((sum,row)=>sum+row.contribution,0):null,
      rows:contributions,scenario,multiplier,extraNames,assumptions,splitSlimeAvailable,
      unknown:[...estimate.unknown.filter(row=>!extraNames.includes(row.name)),...quantityUnknown].filter((row,index,all)=>all.findIndex(x=>x.name===row.name)===index),
      assumedCount:contributions.filter(row=>row.assumed).length,
      reason:conflicts.length?'配裝超出目前模式容量':contributions.length?'':'尚缺可計算數值或普攻基準傷害'};
  }
  return {trial,keyOf};
})();
