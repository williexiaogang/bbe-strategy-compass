/* Fixed-value estimate, not a combat simulator. Each damage source hits once;
 * damage-over-time sources are normalized separately to one second. */
const CompassDamage = (() => {
  const quality = value => Number.isInteger(value) && value >= 0 && value <= 3 ? value : 3;
  function evaluate(selected, redNames = [], tier = 3) {
    tier = quality(tier);
    const owned = new Set(selected), reds = new Set(redNames);
    const entries = [...owned].map(name => ({ name, red:false, ...CompassDamageData.nodes[name] }))
      .concat([...reds].map(name => ({ name, red:true, ...CompassDamageData.duals[name] })));
    const unknown=[],notes=[],rows=[];
    const valueOf = entry => {
      const value=entry.values?.[tier];
      if (!Number.isFinite(value)) { unknown.push({name:entry.name,reason:entry.reason || '此品質缺少數值，未以比例補估'}); return null; }
      return value;
    };
    const boosts=[],adds=[];
    for (const entry of entries) {
      if (entry.note) notes.push(entry.name+'：'+entry.note);
      if (!entry.kind || entry.kind==='unknown') { unknown.push({name:entry.name,reason:entry.reason || '缺少可換算資料'});continue; }
      if (entry.kind==='boost' || entry.kind==='add') {
        const value=valueOf(entry);
        if (value!==null) (entry.kind==='boost'?boosts:adds).push({...entry,value});
      }
    }
    const replaced=new Set(entries.map(e=>e.replaces).filter(Boolean));
    const applies=(modifier,row)=>modifier.group===row.group && (!modifier.target || (Array.isArray(modifier.target)?modifier.target.includes(row.name):modifier.target===row.name));
    for (const entry of entries) {
      if (!['hit','dot'].includes(entry.kind) || replaced.has(entry.name)) continue;
      const base=valueOf(entry);
      if (base===null) continue;
      // Apply node upgrades to the ordinary effect they describe. Red-produced versions
      // may use distinct scaling; do not transfer ordinary boosts without verification.
      const ownMods=entry.red?[]:boosts.filter(m=>!m.red&&applies(m,entry));
      const redMods=boosts.filter(m=>m.red&&applies(m,entry));
      if (entry.red && boosts.some(m=>!m.red&&m.group===entry.group))
        notes.push(entry.name+'：一般前置增傷未自動套用此紅策衍生版本，作用範圍待實測');
      const fixedAdds=entry.red?[]:adds.filter(m=>applies(m,entry));
      const added=fixedAdds.reduce((sum,m)=>sum+m.value,0);
      const percent=[...ownMods,...redMods].reduce((sum,m)=>sum+m.value,0);
      const amount=(base+added)*(1+percent/100)*(entry.chance??1)/(entry.interval||1);
      rows.push({name:entry.name,kind:entry.kind,value:amount,base,added,percent,red:entry.red,
        note:entry.note||'',extra:entry.extra||0,modifiers:[...fixedAdds,...ownMods,...redMods].map(m=>m.name)});
      if (entry.secondary) rows.push({name:entry.name+' · 射出',kind:entry.secondary.kind,value:entry.secondary.value,red:true,note:entry.secondary.note,modifiers:[]});
    }
    for (const addition of adds) {
      if (!rows.some(row=>!row.red&&applies(addition,CompassDamageData.nodes[row.name]&&{name:row.name,...CompassDamageData.nodes[row.name]})))
        unknown.push({name:addition.name,reason:'缺少可套用的原傷害來源，未獨立當成一次傷害'});
    }
    const hit=rows.filter(r=>r.kind==='hit').reduce((sum,r)=>sum+r.value,0);
    const perSecond=rows.filter(r=>r.kind==='dot').reduce((sum,r)=>sum+r.value,0);
    const basicBoost=owned.has('普攻寒冷')?(CompassDamageData.nodes['普攻寒冷']?.attackValues?.[tier]||0):0;
    return {hit,perSecond,rows,unknown,notes,basicBoost,
      strategyBoost:boosts.filter(b=>b.red).reduce((sum,b)=>sum+b.value,0),
      // A dimensionless comparison index: one hit per source plus one second per DoT.
      reference:Math.round(hit+perSecond),quality:tier};
  }
  function estimate(state,rules,tier=state.damageQuality) {
    return evaluate(state.selected,[...state.acquired.map(x=>x.name),...rules.activeInherited(state).map(x=>x.name)],tier);
  }
  return {quality,evaluate,estimate};
})();
