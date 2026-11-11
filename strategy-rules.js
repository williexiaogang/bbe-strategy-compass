/* Steam/PC normal and extreme acquisition rules. Inherited activation is confirmed in-game.
 * Catalogue conditions are not proof of acquisition; see docs/strategy-reference.md. */
function createCompassRules() {
  const { STRATEGY_DATA: trees, DUALS: duals, SLOTS: slots } = CompassData;
  const branches = { '冰霜爆破': '寒氣爆發', '強力破冰': '聚寒成冰',
    '大型史萊姆': '自爆史萊姆', '極速史萊姆': '長效史萊姆' };
  const restricted = { '火焰漫步': ['衝刺燃燒'], '受擊毒霧': ['普攻淬毒'], '受擊毒環': ['技能毒環'] };
  // AND of OR groups; ordinary and inherited upgrades share these prerequisites.
  const nodeRequirements = {
    '烈性毒彈': [['普攻淬毒','技能毒環']],
    '烈性毒液': [['普攻淬毒','技能毒環']]
  };
  const missingGroups = (state,groups) => groups.filter(group => !group.some(n => state.selected.has(n)));
  const nodes = new Map();
  trees.forEach(tree => {
    tree.bases.forEach(b => nodes.set(b.name, { tree, level: 1, slot: b.slot }));
    tree.ii.forEach(n => nodes.set(n, { tree, level: 2 }));
    tree.iii.forEach(n => nodes.set(n, { tree, level: 3 }));
  });
  const byName = new Map(duals.map(d => [d.name, d]));
  const inheritanceSource = {url:'https://bbee.huijiwiki.com/wiki/策略一览',checkedAt:'2026-11-08',confidence:'community',gameVersion:null};
  // Explicit inherited activation requirements (AND of OR groups), not recipes.
  // Sources and limits: docs/strategy-inheritance-research.md. Only the two documented
  // delayed-activation examples may share an ordinary red slot in this release.
  const inheritedRules = {
    '光槍冰錐': { groups: [['技能光槍', '傳承技光槍']] },
    '冰霜脈衝': { groups: [['普攻寒冷', '技能寒冷'], ['寒氣爆發']] },
    '黑洞減速': { groups: [['傳承技黑洞']] },
    '影子冰刺': { groups: [['衝刺影子'], ['召喚冰刺']], delayed: true },
    '冰擊化劍': { groups: [['普攻寒冷', '技能寒冷'], ['寒氣爆發'], ['玄冰劍刃']], delayed: true },
    '嗜血刃環': { groups: [['召喚刃環'], ['普攻撕裂', '技能撕裂']] },
    '爆燃火彈': { groups: [['技能火彈','傳承技火彈'],['普攻燃燒','技能燃燒','衝刺燃燒']] },
    '火精靈引爆': { groups: [['火精靈助戰'],['普攻燃燒','技能燃燒','衝刺燃燒']] },
    '燃燒爆彈': { groups: [['普攻燃燒','技能燃燒','衝刺燃燒']] },
    '火焰飛劍': { groups: [['衝刺飛劍']] },
    '火環燃燒': { groups: [['傳承技火環']] },
    '地雷火焰': { groups: [['放置地雷']] },
    '火彈火精靈': { groups: [['技能火彈','傳承技火彈']] },
    '火精靈彈跳': { groups: [['火精靈助戰']] },
    '分裂史萊姆': { groups: [['召喚史萊姆']] },
    '分裂毒彈': { groups: [['衝刺毒彈']] },
    '雙向飛劍': { groups: [['衝刺飛劍']] },
    '寒冰毒霧': { groups: [['普攻淬毒']] },
    '電解化毒': { groups: [['普攻閃電','技能閃電','電閃雷鳴']] },
    '劇毒史萊姆': { groups: [['召喚史萊姆']] },
    '中毒毒彈': { groups: [['普攻淬毒','技能毒環']] },
    '毒液催化': { groups: [['技能毒液','傳承技毒液'],['普攻淬毒','技能毒環']] },
    '連續刃環': { groups: [['技能毒環']] },
    '毒液史萊姆': { groups: [['召喚史萊姆']] },
    '毒液殘留': { groups: [['衝刺毒彈']] },
    '河豚毒彈': { groups: [['傳承技河豚']] },
    '地雷毒液': { groups: [['放置地雷']] },
    '泡狀毒液': { groups: [['技能毒液','傳承技毒液']] },
    '光槍光波': { groups: [['技能光槍','傳承技光槍']] },
    '光槍落雷': { groups: [['技能光槍','傳承技光槍']] },
    '落雷光槍': { groups: [['衝刺落雷']] },
    '落雷飛刃': { groups: [['衝刺落雷']] },
    '光波傳遞': { groups: [['普攻光波']] },
    '光波快充': { groups: [['普攻光波'],['召喚光陣']] },
    '無盡冰刺': { groups: [['召喚冰刺']] },
    '冰刺再生': { groups: [['召喚冰刺']] },
    '概率影爆': { groups: [['衝刺影子']] }
  };
  const empty = () => ({ selected: new Set(), acquired: [], inherited: [null, null, null, null],
    character: null, slot: 'basic', target: null, gameMode: 'normal', recommendMode: 'five-dual', damageQuality: 3,
    damageScenario: normalizeDamageScenario(), legacyBuild: null, plannedReds: [], legacyBodies: [null,null] });
  const secondLimit = state => state.gameMode === 'extreme' ? 2 : 1;
  const fiveDualSort = value => ['power1', 'power2', 'power3', 'power4'].includes(value) ? 'power'
    : ['default', 'power', 'basic', 'redOnly'].includes(value) ? value : 'default';
  function normalizeDamageScenario(raw) {
    raw=raw&&typeof raw==='object'?raw:{};
    const number=(value,fallback,max)=>typeof value==='number'&&Number.isFinite(value)&&value>=0&&value<=max?value:fallback;
    const effects=(values,max=1000)=>Object.fromEntries(Object.entries(values&&typeof values==='object'?values:{})
      .filter(([key,value])=>{
        const prefix=key.slice(0,2),name=key.slice(2);
        return (prefix==='n:'&&nodes.has(name)||prefix==='r:'&&(byName.has(name)||name==='電球發射 · 射出'))&&
          typeof value==='number'&&Number.isFinite(value)&&value>=0&&value<=max;
      }));
    return {attackDamage:number(raw.attackDamage,0,1e9),uptime:number(raw.uptime,100,100),
      tacticBonus:number(raw.tacticBonus,0,10000),finalBonus:number(raw.finalBonus,0,10000),
      compoundBonus:number(raw.compoundBonus,0,10000),rates:effects(raw.rates),hits:effects(raw.hits),
      cooldowns:effects(raw.cooldowns,3600),removeSkillIcd:raw.removeSkillIcd===true,removeDashIcd:raw.removeDashIcd===true,
      splitSlime290:raw.splitSlime290===true};
  }
  const modeConflicts = state => trees.filter(t => t.ii.filter(n => state.selected.has(n)).length > secondLimit(state))
    .map(t => `${t.name}：普通模式只能保留一條 II 階，請取消其中一條或切回極限`);
  function setGameMode(state, mode) {
    if (!['normal', 'extreme'].includes(mode)) return '未知遊戲模式';
    state.gameMode = mode;
    return '';
  }
  const base = (state, tree) => tree.bases.find(b => state.selected.has(b.name));
  const slotMap = state => {
    const map = Object.fromEntries(slots.map(s => [s.id, null]));
    for (const name of state.selected) {
      const node = nodes.get(name);
      if (node?.level === 1 && !map[node.slot]) map[node.slot] = name;
    }
    return map;
  };
  const copyRuleState = state => ({ ...state,
    selected: new Set(state.selected),
    acquired: state.acquired.map(x => ({ ...x })),
    inherited: state.inherited.map(x => x ? { ...x } : null)
  });

  function canSelect(state, name, inherited = false) {
    const node = nodes.get(name);
    if (!node) return '找不到此策略';
    if (state.selected.has(name)) return '';
    if (modeConflicts(state).length) return '目前配裝超出此模式容量，請先取消多出的 II 階或切換模式';
    const { tree, level, slot } = node;
    const chosenBase = base(state, tree);
    if (level === 1) {
      if (chosenBase) return `同樹已選「${chosenBase.name}」，請先取消`;
      const taken = slotMap(state)[slot];
      return taken ? `同槽已選「${taken}」，請先取消` : '';
    }
    if (!chosenBase) return '需先選此樹的 I 階';
    const missing = missingGroups(state,nodeRequirements[name] || []);
    if (missing.length) return `尚缺額外前置：${missing.map(g => g.join('／')).join('、')}`;
    const peers = level === 2 ? tree.ii : tree.iii;
    const chosenPeers = peers.filter(n => state.selected.has(n));
    const limit = level === 2 ? secondLimit(state) : 1;
    if (chosenPeers.length >= limit) return `同階最多選${limit === 1 ? '一' : '兩'}條，已選「${chosenPeers.join('、')}」`;
    if (restricted[name] && !restricted[name].includes(chosenBase.name))
      return `需要「${restricted[name].join('／')}」`;
    if (level === 3) {
      if (branches[name] && !state.selected.has(branches[name])) return `需先選「${branches[name]}」`;
      if (!tree.ii.some(n => state.selected.has(n))) return '需先選此樹的 II 階';
    }
    return '';
  }

  function recipeMet(state, dual) {
    return dual.prim.some(n => state.selected.has(n)) && dual.sec.some(n => state.selected.has(n)) &&
      (dual.need || []).every(n => state.selected.has(n));
  }

  // The owning activation slot can be on either side of the catalogue recipe.
  const hostCache = new Map();
  function hosts(dual) {
    if (!hostCache.has(dual)) hostCache.set(dual, [...new Set([...dual.prim, ...dual.sec])].filter(n => {
      const node = nodes.get(n);
      return node?.level === 1 && dual.slots.includes(node.slot);
    }));
    return hostCache.get(dual);
  }

  function acquireReason(state, name, slot) {
    if (modeConflicts(state).length) return '目前配裝與遊戲模式衝突，請先調整 II 階';
    const dual = byName.get(name);
    if (!dual) return '未知紅策';
    if (!dual.slots.includes(slot)) return '紅策不屬於此觸發槽位';
    if (state.inherited.some(x => x?.name === name)) return '已在傳承欄，不重複記為本局取得';
    if (!recipeMet(state, dual)) return '尚未滿足主／次／分支條件';
    const owner = hosts(dual).find(n => nodes.get(n).slot === slot && state.selected.has(n));
    if (!owner) return '需選此觸發槽位的承載基礎策略';
    if (!nodes.get(owner).tree.iii.some(n => state.selected.has(n))) return '需先取得承載策略的 III 階';
    const record = state.acquired.find(x => x.name === name && x.slot === slot);
    const taken = state.acquired.find(x => x.slot === slot && x.name !== name) ||
      state.inherited.find(x => byName.has(x?.name) && x.slot === slot && (!inheritedRules[x.name]?.delayed ||
        !inheritanceReason(state, x) && !validActivationOrder(state, record)));
    return taken ? `此槽已有紅策「${taken.name}」` : '';
  }

  // A saved witness must itself be a legal earlier build, satisfy this red's
  // recipe and leave the inherited red inactive. A boolean cannot forge order.
  function validActivationOrder(state, record) {
    if (!Array.isArray(record?.activationOrder) || !record.activationOrder.length) return false;
    const earlier = { ...state, selected: new Set(), acquired: state.acquired.filter(x => x !== record) };
    for (const name of record.activationOrder) {
      if (!state.selected.has(name) || canSelect(earlier, name)) return false;
      earlier.selected.add(name);
    }
    return !acquireReason(earlier, record.name, record.slot);
  }

  function prune(state) {
    // Remove descendants after removing their parent; keep unrelated trees intact.
    let changed;
    do {
    changed = false;
    for (const name of [...state.selected]) {
      const { tree, level } = nodes.get(name);
      if (level > 1 && !base(state, tree)) state.selected.delete(name);
      if (level === 3 && (!tree.ii.some(n => state.selected.has(n)) ||
          (branches[name] && !state.selected.has(branches[name])))) state.selected.delete(name);
      if (missingGroups(state,nodeRequirements[name] || []).length) state.selected.delete(name);
      if (!state.selected.has(name)) changed = true;
    }
    } while (changed);
    syncInherited(state);
    const validationState = modeConflicts(state).length ? { ...state, gameMode: 'extreme' } : state;
    state.acquired = state.acquired.filter(x => !acquireReason(validationState, x.name, x.slot));
    state.inherited.forEach(x => { if (x && (nodes.has(x.name) && !state.selected.has(x.name) || inheritanceReason(state, x))) x.confirmed = false; });
  }

  function syncInherited(state) {
    state.inherited = state.inherited.map(x=>x?{...x}:null);
    for (const entry of state.inherited.filter(x=>nodes.has(x?.name)).sort((a,b)=>nodes.get(a.name).level-nodes.get(b.name).level)) {
      const node=nodes.get(entry.name);
      if(!entry.slot)entry.slot=node.slot || base(state,node.tree)?.slot || null;
      const reason=inheritanceReason(state,entry);
      if(reason){if(entry.confirmed)state.selected.delete(entry.name);entry.confirmed=false;}
      else {state.selected.add(entry.name);entry.confirmed=true;}
    }
  }
  function selectNode(state,name) { state.selected.add(name);syncInherited(state); }

  function toggle(state, name) {
    if(state.selected.has(name)&&state.inherited.some(x=>x?.name===name&&x.confirmed))return '此策略由傳承提供，請在傳承欄移除';
    if (state.selected.has(name)) { state.selected.delete(name); prune(state); return ''; }
    const reason = canSelect(state, name);
    if (!reason) selectNode(state,name);
    return reason;
  }

  function replacement(state, name) {
    const node = nodes.get(name);
    if (!node || node.level !== 1 || state.selected.has(name) || modeConflicts(state).length) return null;
    const from = slotMap(state)[node.slot];
    if (!from || base(state, node.tree)) return null;
    const tree = nodes.get(from).tree;
    if ([...tree.ii, ...tree.iii].some(n => state.selected.has(n))) return null;
    return { from, to: name };
  }

  function replaceBase(state, name) {
    const change = replacement(state, name);
    if (!change) return '只有尚未取得 II 階的同槽基礎策略可以替換';
    state.selected.delete(change.from);
    state.selected.add(name);
    prune(state);
    return '';
  }

  function acquire(state, name, slot, activationOrder = null) {
    const witness = Array.isArray(activationOrder) ? { name, slot, activationOrder: [...activationOrder] } : null;
    const check = witness ? { ...state, acquired: [...state.acquired, witness] } : state;
    const reason = witness && !validActivationOrder(check, witness) ? '紅策取得順序紀錄無效' : acquireReason(check, name, slot);
    if (reason) return reason;
    if (!state.acquired.some(x => x.name === name)) {
      const deferred = state.inherited.some(x => x?.slot === slot && inheritedRules[x.name]?.delayed && inheritanceReason(state, x));
      const related = new Set([...byName.get(name).prim, ...byName.get(name).sec, ...(byName.get(name).need || [])].map(n => nodes.get(n)?.tree));
      const order = [...state.selected].filter(n => related.has(nodes.get(n).tree))
        .sort((a,b) => nodes.get(a).level - nodes.get(b).level);
      state.acquired.push(witness || { name, slot, ...(deferred ? { activationOrder: order } : {}) });
    }
    return '';
  }

  function inherit(state, index, name, slot = null, confirmed = false, observed = false) {
    if (!Number.isInteger(index) || index < 0 || index > 3) return '傳承位置無效';
    if (!name || nodes.has(name)) {
      const node = nodes.get(name);
      const entry = name ? { name, slot: node.slot || slot, confirmed: Boolean(confirmed) } : null;
      if (entry && state.inherited.some((x,i) => i !== index && x?.name === name)) return '此策略已經存在於傳承欄';
      if (entry?.slot && !node.tree.bases.some(b => b.slot === entry.slot && (!restricted[name] || restricted[name].includes(b.name)))) return '此策略沒有此承載槽位';
      const trial = { ...state, selected: new Set(state.selected), inherited: state.inherited.map((x,i) => i === index ? entry : x) };
      const previous = state.inherited[index];
      if (nodes.has(previous?.name) && previous.confirmed && previous.name !== name) trial.selected.delete(previous.name);
      if (entry?.confirmed) {
        const reason = inheritanceReason(trial, entry);
        if (reason) return reason;
        trial.selected.add(name);
      }
      state.selected = trial.selected;
      state.inherited = trial.inherited;
      prune(state);
      return '';
    }
    const dual = byName.get(name);
    if (!dual) return '未知紅策';
    if (state.inherited.some((x, i) => i !== index && x?.name === name) || state.acquired.some(x => x.name === name))
      return '此紅策已經存在';
    if (slot && !hosts(dual).some(n => nodes.get(n).slot === slot)) return '此紅策沒有此承載槽位';
    if (slot && state.inherited.some((x, i) => i !== index && byName.has(x?.name) && x.slot === slot))
      return '同槽已有傳承紅策';
    const entry = { name, slot, confirmed: Boolean(confirmed), ...(observed && !inheritedRules[name] ? {observed:true} : {}) };
    const trial = { ...state, selected: new Set(state.selected), inherited: state.inherited.map((x,i) => i === index ? entry : x) };
    const previous = state.inherited[index];
    if (nodes.has(previous?.name) && previous.confirmed) trial.selected.delete(previous.name);
    if (slot && state.acquired.some(x => x.slot === slot &&
      (!inheritedRules[name]?.delayed || !validActivationOrder(trial,x))))
      return '同槽已有紅策，缺少先取得再啟用傳承的順序紀錄';
    if (entry.confirmed && inheritanceReason(trial, entry)) return inheritanceReason(trial, entry);
    state.selected = trial.selected;
    state.inherited[index] = entry;
    if (nodes.has(previous?.name) && previous.confirmed) prune(state);
    return '';
  }

  // Commit a displayed red route atomically. Never replace existing choices or
  // leave a half-applied build when prerequisites / acquisition order conflict.
  function equipRed(state, name, slot, steps) {
    const dual = byName.get(name);
    if (!dual) return '未知紅策';
    const plan = plans(state, dual).find(p => p.slot === slot);
    if (!plan) return '此紅策與目前裝配衝突，請先調整策略或傳承';
    const trial = copyRuleState(state);
    for (const n of steps || plan.steps) {
      if (trial.selected.has(n)) continue;
      const reason = toggle(trial,n);
      if (reason) return `${n}：${reason}`;
    }
    const reason = acquire(trial,name,slot);
    if (reason) return reason;
    state.selected = trial.selected;
    state.acquired = trial.acquired;
    state.inherited = trial.inherited;
    state.slot = slot;
    return '';
  }

  function planRed(state,name,slot,steps) {
    const trial = copyRuleState(state);
    const reason = equipRed(trial,name,slot,steps);
    if (reason) return reason;
    const entry = {name,slot};
    state.plannedReds = [...(state.plannedReds || []).filter(x => x.name !== name),entry];
    return '';
  }

  function setLegacyBody(state,index,character) {
    if (![0,1].includes(index)) return '資料體位置無效';
    if (character && (!CompassData.CHARACTERS.some(c => c.id === character) || character === state.character)) return '請選擇主角以外的傳承角色';
    if (character && state.legacyBodies.some((id,i) => i !== index && id === character)) return '兩個傳承資料體不能來自同一角色';
    state.legacyBodies[index] = character || null;
    return '';
  }

  function inheritanceReason(state, entry) {
    const node = nodes.get(entry.name);
    if (node) {
      if (!entry.slot) return '請指定遊戲內的承載槽位';
      const owner = base(state, node.tree);
      if (node.level > 1 && owner?.slot !== entry.slot) return '尚未取得此承載槽位的基礎策略';
      const trial = { ...state, selected: new Set([...state.selected].filter(n => n !== entry.name)) };
      return canSelect(trial, entry.name, true);
    }
    const dual = byName.get(entry.name);
    if (!dual) return '未知策略';
    if (!entry.slot) return '請指定遊戲內的承載槽位';
    const owner = hosts(dual).find(n => nodes.get(n).slot === entry.slot && state.selected.has(n));
    if (!owner) return '尚未取得承載基礎策略';
    const rule = inheritedRules[entry.name];
    if (rule) {
      const missing = rule.groups.filter(group => !group.some(n => state.selected.has(n)));
      return missing.length ? `尚缺啟用前置／分支：${missing.map(g => g.join('／')).join('、')}` : '';
    }
    return entry.observed && entry.confirmed ? '' : '請在遊戲中生效後手動記錄';
  }

  function activeInherited(state, includeNormal = false) {
    return state.inherited.filter(x => x?.confirmed && (includeNormal || byName.has(x.name)) && !inheritanceReason(state, x));
  }

  // Plan a legal path, not a count of unrelated half-completed recipes.
  function pathTo(state, name) {
    if (state.selected.has(name)) return [];
    const node = nodes.get(name);
    if (!node) return null;
    const { tree, level } = node;
    const attempts = level === 1 ? [[name]] : tree.bases.map(b => {
      const prefix = state.selected.has(b.name) ? [] : [b.name];
      if (level === 2) return [...prefix, name];
      const ii = branches[name] || tree.ii.find(n => state.selected.has(n)) || tree.ii.find(n =>
        (!restricted[n] || restricted[n].includes(b.name)) && !missingGroups(state,nodeRequirements[n] || []).length);
      return [...prefix, ...(state.selected.has(ii) ? [] : [ii]), name];
    });
    for (const path of attempts) {
      const temp = { ...state, selected: new Set(state.selected) };
      if (path.every(n => { if (canSelect(temp, n)) return false; selectNode(temp,n); return true; })) return path;
    }
    return null;
  }

  function plans(state, dual) {
    if (modeConflicts(state).length) return [];
    const plans = [];
    for (const p of dual.prim) for (const s of dual.sec) for (const h of hosts(dual)) {
      const slot = nodes.get(h).slot;
      if (state.acquired.some(x => x.slot === slot && x.name !== dual.name) ||
          state.inherited.some(x => x?.name === dual.name || byName.has(x?.name) && x.slot === slot &&
            (!inheritedRules[x.name]?.delayed || !inheritanceReason(state,x)))) continue;
      const temp = { ...state, selected: new Set(state.selected) };
      const steps = [];
      let valid = true;
      const required = [p, s, ...(dual.need || []), h];
      for (const n of required) {
        const path = pathTo(temp, n);
        if (!path) { valid = false; break; }
        path.forEach(x => { if(!temp.selected.has(x)){selectNode(temp,x); steps.push(x);} });
      }
      if (!valid) continue;
      const tree = nodes.get(h).tree;
      const third = tree.iii.find(n => temp.selected.has(n)) || tree.iii.find(n => pathTo(temp, n));
      const path = third && pathTo(temp, third);
      if (!path) continue;
      path.forEach(x => { if(!temp.selected.has(x)){selectNode(temp,x); steps.push(x);} });
      if (!acquireReason(temp, dual.name, slot)) plans.push({ slot, steps: [...new Set(steps)] });
    }
    return plans.sort((a, b) => a.steps.length - b.steps.length);
  }

  // Suggestions are simulated on a copy. They never mutate the player's build.
  // Seed with legal empty-build routes, then replan against the preserved choices.
  function adjustments(state, dual) {
    if (plans(state, dual).length) return [];
    const results = [], seen = new Set();
    for (const seed of plans({ ...empty(), gameMode: state.gameMode }, dual)) {
      const temp = JSON.parse(JSON.stringify(serialize(state)));
      temp.selected = new Set(temp.selected);
      const reasons = [];
      for (const wanted of seed.steps) {
        const node = nodes.get(wanted);
        for (const chosen of [...temp.selected]) {
          const other = nodes.get(chosen);
          const conflict = node.level === 1
            ? other.level === 1 && (other.tree === node.tree || other.slot === node.slot)
            : other.tree === node.tree && other.level === node.level &&
              (node.level !== 2 || other.tree.ii.filter(n => temp.selected.has(n)).length >= secondLimit(temp));
          if (chosen !== wanted && conflict) {
            reasons.push(`「${wanted}」與已選「${chosen}」${node.level === 1 ? '同樹或同槽互斥' : '同階互斥'}`);
            toggle(temp, chosen);
          }
        }
      }
      temp.acquired = temp.acquired.filter(x => {
        if (x.slot !== seed.slot || x.name === dual.name) return true;
        reasons.push(`承載槽位已有紅策「${x.name}」`); return false;
      });
      temp.inherited = temp.inherited.map(x => {
        if (!x || !byName.has(x.name) || (x.slot !== seed.slot && x.name !== dual.name)) return x;
        reasons.push(`傳承「${x.name}」佔用此槽或與普通取得重複`); return null;
      });
      const plan = plans(temp, dual)[0];
      if (!plan) continue;
      const removed = [...state.selected].filter(n => !temp.selected.has(n));
      const records = state.acquired.filter(x => !temp.acquired.some(y => y.name === x.name)).map(x => x.name);
      const inherited = state.inherited.filter(x => x && !temp.inherited.some(y => y?.name === x.name)).map(x => x.name);
      const unconfirmed = state.inherited.filter(x => x?.confirmed && temp.inherited.some(y => y?.name === x.name && !y.confirmed)).map(x=>x.name);
      const key = JSON.stringify([removed, records, inherited]);
      if (seen.has(key)) continue;
      seen.add(key);
      results.push({ reasons: [...new Set(reasons)], removed, records, inherited, unconfirmed, plan });
    }
    return results.sort((a,b) => (a.removed.length+a.records.length+a.inherited.length) -
      (b.removed.length+b.records.length+b.inherited.length) || a.plan.steps.length-b.plan.steps.length).slice(0,3);
  }

  function frontier(state, steps) {
    if (modeConflicts(state).length) return [];
    return [...new Set(steps)].filter(n => !state.selected.has(n) && !canSelect(state, n));
  }

  function targetRecommendations(state, name, routes = null) {
    if (!byName.has(name)) return [];
    if (state.acquired.some(x => x.name === name) || activeInherited(state).some(x => x.name === name)) return [];
    routes ||= plans(state, byName.get(name));
    if (routes.some(p => !p.steps.length)) return [];
    return frontier(state, routes.flatMap(p => p.steps)).map(n => ({ name: n, targets: [name] }));
  }

  function recommendations(state) {
    const scores = new Map();
    duals.filter(d => !state.acquired.some(x => x.name === d.name)).forEach(d => {
      // Alternative routes for the same red must not inflate its contribution.
      const contributions = new Map();
      const routes = plans(state, d);
      if (routes.some(p => !p.steps.length)) return;
      for (const plan of routes) for (const name of frontier(state, plan.steps))
        contributions.set(name, Math.max(contributions.get(name) || 0, 1 / plan.steps.length));
      for (const [name, weight] of contributions) {
        const entry = scores.get(name) || { name, score: 0, targets: [] };
        entry.score += weight; entry.targets.push(d.name); scores.set(name, entry);
      }
    });
    return [...scores.values()].sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));
  }

  function serialize(state) {
    return { version: 3, gameMode: state.gameMode || 'normal', selected: [...state.selected].sort(), acquired: state.acquired, inherited: state.inherited,
      plannedReds:(state.plannedReds || []).map(x => ({name:x.name,slot:x.slot})),legacyBodies:[...(state.legacyBodies || [null,null])],
      character: state.character, characterBuild: state.characterBuild ?? null, slot: state.slot, target: state.target || null,
      legacyBuild: typeof CompassLegacy !== 'undefined' ? CompassLegacy.normalize(state.legacyBuild, state.character) : null,
      recommendMode: ['character', 'five-dual'].includes(state.recommendMode) ? state.recommendMode : 'five-dual',
      damageQuality: Number.isInteger(state.damageQuality) && state.damageQuality >= 0 && state.damageQuality <= 3 ? state.damageQuality : 3,
      damageScenario: normalizeDamageScenario(state.damageScenario),
      fiveDualSort: fiveDualSort(state.fiveDualSort), fiveDualGoal: fiveDualSort(state.fiveDualSort) === 'power' ? null : state.fiveDualGoal || null };
  }

  function restore(raw) {
    if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('配裝資料必須是 JSON 物件');
    if (raw.version !== undefined && raw.version !== 3) throw new Error('不支援的資料版本');
    if (!Array.isArray(raw.selected ?? raw.owned ?? [])) throw new Error('策略清單格式錯誤');
    if (!Array.isArray(raw.inherited ?? []) || !Array.isArray(raw.acquired ?? [])) throw new Error('紅策清單格式錯誤');
    const state = empty(), warnings = [];
    const gameMode = raw.gameMode === 'extreme' ? 'extreme' : 'normal';
    // Explicit-mode backups can contain a preserved extreme build after switching to normal.
    state.gameMode = ['normal', 'extreme'].includes(raw.gameMode) ? 'extreme' : 'normal';
    // Register carries before replaying actual prerequisites; III still requires I and II.
    (raw.inherited || []).forEach((x,i) => {
      if (x && nodes.has(typeof x === 'string' ? x : x.name)) {
        const trial={...state,selected:new Set(state.selected),inherited:state.inherited.map(e=>e?{...e}:null)};
        const reason = inherit(trial,i,typeof x === 'string' ? x : x.name,typeof x === 'string' ? null : x.slot);
        if(!reason)state.inherited[i]={...trial.inherited[i],confirmed:false};
        if (reason) warnings.push(`傳承：${reason}`);
      }
    });
    const names = [...new Set(raw.selected ?? raw.owned ?? [])];
    // Legacy order can contain III before II. Import in dependency order.
    names.sort((a, b) => (nodes.get(a)?.level || 0) - (nodes.get(b)?.level || 0));
    names.forEach(n => {
      const entry = state.inherited.find(x => x?.name === n);
      const carried = entry && (raw.inherited || []).some(x => x?.name === n && x.confirmed) && !inheritanceReason(state,entry);
      const reason = canSelect(state, n, carried);
      if (reason) warnings.push(`${String(n)}：${reason}`);
      else {
        state.selected.add(n);
        if (carried) entry.confirmed = true;
      }
    });
    (raw.inherited || []).forEach((x, i) => {
      if (!x) return;
      const name = typeof x === 'string' ? x : x.name;
      const reason = nodes.has(name) && state.inherited[i]?.name === name ? '' : inherit(state, i, name,
        typeof x === 'string' ? null : x.slot, false);
      if (reason) warnings.push(`傳承：${reason}`);
      else if (x.confirmed) {
        const entry = state.inherited[i];
        const reason = inherit(state,i,entry.name,entry.slot,true,x.observed === true);
        if (reason) warnings.push(`傳承：${reason}`);
      }
    });
    syncInherited(state);
    (raw.acquired || []).forEach(x => {
      const reason = x && acquire(state, x.name, x.slot, x.activationOrder);
      if (!x || reason) warnings.push(`已取得：${reason || '格式錯誤'}`);
    });
    state.gameMode = gameMode;
    warnings.push(...modeConflicts(state));
    state.character = CompassData.CHARACTERS.some(c => c.id === raw.character) ? raw.character : null;
    (Array.isArray(raw.legacyBodies) ? raw.legacyBodies : []).slice(0,2).forEach((id,i) => {
      const reason = setLegacyBody(state,i,id);
      if (reason) warnings.push(`傳承資料體：${reason}`);
    });
    (Array.isArray(raw.plannedReds) ? raw.plannedReds : []).forEach(x => {
      if (x && byName.get(x.name)?.slots.includes(x.slot) && !state.plannedReds.some(y => y.name === x.name)) state.plannedReds.push({name:x.name,slot:x.slot});
      else warnings.push('已略過無效的紅策規劃項目');
    });
    state.legacyBuild = typeof CompassLegacy !== 'undefined' ? CompassLegacy.normalize(raw.legacyBuild, state.character) : null;
    if (raw.legacyBuild && !state.legacyBuild) warnings.push('雙傳承目標與角色不符或已失效，已略過');
    const character = CompassData.CHARACTERS.find(c => c.id === state.character);
    state.characterBuild = Number.isInteger(raw.characterBuild) && raw.characterBuild >= 0 &&
      raw.characterBuild < (character?.builds.length || 0) ? raw.characterBuild : null;
    state.slot = slots.some(s => s.id === raw.slot) ? raw.slot : 'basic';
    state.target = byName.has(raw.target) ? raw.target : null;
    state.recommendMode = ['character', 'five-dual'].includes(raw.recommendMode) ? raw.recommendMode : 'five-dual';
    state.fiveDualSort = fiveDualSort(raw.fiveDualSort);
    state.damageQuality = Number.isInteger(raw.damageQuality) && raw.damageQuality >= 0 && raw.damageQuality <= 3 ? raw.damageQuality : 3;
    state.damageScenario = normalizeDamageScenario(raw.damageScenario);
    const fiveNames = typeof raw.fiveDualGoal === 'string' ? raw.fiveDualGoal.split('|') : [];
    state.fiveDualGoal = state.fiveDualSort !== 'power' && fiveNames.length >= 1 && fiveNames.length <= 9 && new Set(fiveNames).size === fiveNames.length && fiveNames.every(n => byName.has(n))
      ? fiveNames.sort((a, b) => a.localeCompare(b, 'zh')).join('|') : null;
    return { state, warnings };
  }
  // Replay the complete representative route, including red-slot occupancy, on a copy.
  function fiveDualPlan(state, set) {
    if (modeConflicts(state).length) return null;
    const temp = copyRuleState(state);
    for (const x of [...state.acquired, ...state.inherited.filter(x => byName.has(x?.name))]) {
      if (!set.duals.includes(x.name) || (x.slot && set.slotAssignment[x.slot] !== x.name)) return null;
    }
    const replacements = [];
    for (const [slot, wanted] of Object.entries(set.bases)) {
      const current = slotMap(temp)[slot];
      if (!current || current === wanted) continue;
      const change = replacement(temp, wanted);
      if (!change || replaceBase(temp, wanted)) return null;
      replacements.push(change);
    }
    const required = new Set([...Object.values(set.bases), ...Object.values(set.steps).flat()]);
    const steps = replacements.map(x=>x.to);
    for(const name of [...required].sort((a,b)=>nodes.get(a).level-nodes.get(b).level)){
      if(temp.selected.has(name))continue;
      if(toggle(temp,name))return null;steps.push(name);
    }
    for (const [slot, name] of Object.entries(set.slotAssignment)) {
      const inherited = temp.inherited.find(x => x?.name === name);
      if (inherited) {
        if (inherited.slot !== slot || inheritanceReason(temp, inherited)) return null;
      } else if (acquire(temp, name, slot)) return null;
    }
    const remainingReds = set.duals.filter(name => !state.acquired.some(x => x.name === name) &&
      !activeInherited(state).some(x => x.name === name));
    return { required, steps, missing: steps.length, remainingReds, replacements };
  }

  // Extend a representative ordinary route with the documented delayed inherited
  // reds. Replay actual selections/acquisitions; never pretend confirmation can
  // postpone an activation whose requirements have already been met.
  function multiRedPlan(state, set) {
    const delayed = state.inherited.filter(x => x?.slot && inheritedRules[x.name]?.delayed);
    if (!delayed.length || modeConflicts(state).length) return null;
    const seed = { ...state, inherited: state.inherited.map(x => delayed.includes(x) ? null : x) };
    const ordinary = fiveDualPlan(seed, set);
    if (!ordinary || ordinary.replacements.length) return null;
    const temp = copyRuleState(state);
    const required = new Set([...state.selected, ...ordinary.required]);
    const final = { ...temp, selected: new Set(required) };
    for (const entry of delayed) {
      for (const group of inheritedRules[entry.name].groups) {
        if (group.some(n => final.selected.has(n))) continue;
        const path = group.map(n => pathTo(final,n)).find(Boolean);
        if (!path) return null;
        path.forEach(n => { required.add(n); final.selected.add(n); });
      }
      if (inheritanceReason(final,entry)) return null;
    }
    const targets = Object.entries(set.slotAssignment).map(([slot,name]) => ({ name,slot }));
    for (const entry of delayed) if (!targets.some(x => x.name === entry.name))
      targets.push({ name: entry.name, slot: entry.slot });
    const pending = [...required].filter(n => !temp.selected.has(n));
    const actions = [];
    while (true) {
      for (const target of targets) {
        if (temp.inherited.some(x => x?.name === target.name) || temp.acquired.some(x => x.name === target.name)) continue;
        if (!acquire(temp,target.name,target.slot)) actions.push({ type: 'acquire', ...target });
      }
      if (!pending.length) break;
      const index = pending.findIndex(name => {
        if (canSelect(temp,name)) return false;
        const after = { ...temp, selected: new Set([...temp.selected,name]) };
        return !delayed.some(entry => inheritanceReason(temp,entry) && !inheritanceReason(after,entry) &&
          targets.some(x => x.slot === entry.slot && x.name !== entry.name &&
            !temp.inherited.some(i => i?.name === x.name) && !temp.acquired.some(a => a.name === x.name)));
      });
      if (index < 0) return null;
      const [name] = pending.splice(index,1);
      if (toggle(temp,name)) return null;
      actions.push({ type: 'select', name });
    }
    for (const entry of temp.inherited.filter(x => byName.has(x?.name))) {
      if (!targets.some(x => x.name === entry.name) || inheritanceReason(temp,entry)) return null;
      if (!entry.confirmed) actions.push({ type: 'confirm', name: entry.name, slot: entry.slot });
    }
    if (targets.some(x => !temp.acquired.some(a => a.name === x.name) && !temp.inherited.some(i => i?.name === x.name))) return null;
    const dualNames = targets.map(x => x.name);
    return { set: { duals: dualNames, targets, bases: Object.fromEntries([...required]
      .filter(n => nodes.get(n).level === 1).map(n => [nodes.get(n).slot,n])),
      steps: { route: [...required].filter(n => nodes.get(n).level > 1) }, slotAssignment: set.slotAssignment },
      required, steps: actions.filter(x => x.type === 'select').map(x => x.name), actions,
      missing: actions.filter(x => x.type === 'select').length, replacements: [], multiRed: true,
      remainingReds: dualNames.filter(n => !state.acquired.some(x => x.name === n) && !activeInherited(state).some(x => x.name === n)) };
  }

  // Templates are qualitative community suggestions, not measured combat scores.
  function characterPlan(state, characterId) {
    const character = CompassData.CHARACTERS.find(c => c.id === characterId);
    if (!character) return null;
    const evaluate = (build, index) => {
      const temp = copyRuleState(state);
      const steps = [], conflicts = [], pending = [];
      const preferred = character.recommendSlots || [];
      const core = [...build.core].sort((a, b) => (nodes.get(a)?.level || 0) - (nodes.get(b)?.level || 0) ||
        (preferred.includes(nodes.get(b)?.slot) ? 1 : 0) - (preferred.includes(nodes.get(a)?.slot) ? 1 : 0));
      for (const name of core) {
        if (temp.selected.has(name)) continue;
        const node = nodes.get(name);
        // Several community cores list mutually exclusive alternatives at the same tier.
        const alternative = node && [...temp.selected].find(n => nodes.get(n)?.tree === node.tree &&
          nodes.get(n)?.level === node.level && build.core.includes(n));
        if (alternative && node.level > 1 && (node.level !== 2 ||
          node.tree.ii.filter(n => temp.selected.has(n)).length >= secondLimit(temp))) continue;
        const path = pathTo(temp, name);
        if (!path) { conflicts.push(name); continue; }
        path.forEach(n => { if(!temp.selected.has(n)){selectNode(temp,n); steps.push(n);} });
      }
      for (const name of build.duals) {
        if (temp.acquired.some(x => x.name === name) || activeInherited(temp).some(x => x.name === name)) continue;
        if (temp.inherited.some(x => x?.name === name)) { pending.push(name); continue; }
        const plan = plans(temp, byName.get(name))[0];
        if (!plan) { conflicts.push(name); continue; }
        plan.steps.forEach(n => { if(!temp.selected.has(n)){selectNode(temp,n); steps.push(n);} });
        acquire(temp, name, plan.slot);
      }
      for (const name of build.inherit || []) {
        if (!activeInherited(state).some(x => x.name === name)) pending.push(name);
      }
      const remainingReds = build.duals.filter(name => !state.acquired.some(x => x.name === name) &&
        !activeInherited(state).some(x => x.name === name));
      const affinity = build.core.filter(n => preferred.includes(nodes.get(n)?.slot)).length +
        (preferred.includes(nodes.get(build.core.find(n => nodes.get(n)?.level === 1))?.slot) ? 1 : 0);
      const owned = build.core.filter(n => state.selected.has(n)).length;
      return { build, index, steps: [...new Set(steps)], conflicts: [...new Set(conflicts)],
        pending: [...new Set(pending)], remainingReds, affinity, owned };
    };
    const candidates = character.builds.map(evaluate);
    const pinned = Number.isInteger(state.characterBuild) && candidates[state.characterBuild];
    const result = pinned || candidates.sort((a, b) => a.conflicts.length - b.conflicts.length ||
      b.owned - a.owned || b.affinity - a.affinity || a.index - b.index)[0];
    return result ? { ...result, reason: character.recommendReason || '依流派與目前配裝相容性推薦', pinned: Boolean(pinned) } : null;
  }

  // Extend a character's verified core without replacing bases or changing its red targets.
  // Search is bounded: a partial result is a legal best effort, never a proof of impossibility.
  function completeCharacter(state, goal, searchLimit = 200) {
    searchLimit = Math.max(200, Math.min(5000, Number(searchLimit) || 200));
    if (!goal || goal.conflicts.length || modeConflicts(state).length) return null;
    const start = copyRuleState(state);
    for (const name of goal.steps) {
      if (start.selected.has(name)) continue;
      if (canSelect(start, name)) return null;
      selectNode(start,name);
    }
    for (const entry of start.inherited.filter(x => x?.slot && byName.has(x.name))) {
      const dual = byName.get(entry.name);
      for (const owner of hosts(dual).filter(n => nodes.get(n).slot === entry.slot)) {
        const trial = { ...start, selected: new Set(start.selected) };
        const required = [owner, ...(dual.need || []).filter(n => nodes.get(n)?.tree === nodes.get(owner).tree)];
        if (!required.every(n => {
          const path = pathTo(trial,n);
          if (!path) return false;
          path.forEach(x => selectNode(trial,x)); return true;
        })) continue;
        start.selected = trial.selected;
        break;
      }
    }
    for (const name of goal.build.duals) {
      if (start.acquired.some(x => x.name === name) || start.inherited.some(x => x?.name === name)) continue;
      const route = plans(start, byName.get(name))[0];
      if (!route) return null;
      route.steps.forEach(n => selectNode(start,n));
      if (acquire(start, name, route.slot)) return null;
    }
    const unresolved = [...start.inherited.filter(x => byName.has(x?.name) && (!x.slot || inheritanceReason(start,x))).map(x => x.name),
      ...(goal.build.inherit || []).filter(n => !start.inherited.some(x => x?.name === n))];
    const reserved = new Set(unresolved.flatMap(n => byName.get(n)?.slots || []));
    const records = value => [...value.acquired, ...value.inherited.filter(x => x?.slot && byName.has(x.name) && !inheritanceReason(value,x))];
    const count = value => new Set(records(value).map(x => x.name)).size;
    const cost = value => [...value.selected].filter(n => !state.selected.has(n)).length;
    let best = start, visited = 0;
    function search(value, index) {
      if (count(value) > count(best) || count(value) === count(best) && cost(value) < cost(best)) best = value;
      if (new Set(records(best).map(x => x.slot)).size === slots.length) return true;
      if (index === slots.length || ++visited > searchLimit) return false;
      const slot = slots[index].id;
      if (reserved.has(slot) || records(value).some(x => x.slot === slot)) return search(value, index + 1);
      const names = new Set([...value.acquired.map(x => x.name), ...value.inherited.filter(Boolean).map(x => x.name)]);
      const options = duals.filter(d => d.slots.includes(slot) && !names.has(d.name))
        .flatMap(d => plans(value, d).filter(p => p.slot === slot).map(p => ({ ...p, name: d.name })));
      const seen = new Set();
      options.sort((a,b) => a.steps.length - b.steps.length);
      for (const option of options) {
        const key = option.name + '|' + option.steps.join('|');
        if (seen.has(key)) continue;
        seen.add(key);
        const next = { ...value, selected: new Set(value.selected), acquired: value.acquired.map(x => ({ ...x })) };
        if (!option.steps.every(n => { if (next.selected.has(n)) return true; if (canSelect(next,n)) return false; selectNode(next,n); return true; })) continue;
        // Keep a possible host open for inherited reds whose slot has not been specified yet.
        if (!unresolved.every(n => hosts(byName.get(n)).some(h => next.selected.has(h) ||
          !slotMap(next)[nodes.get(h).slot] && !base(next,nodes.get(h).tree)))) continue;
        if (!acquire(next, option.name, slot) && search(next, index + 1)) return true;
        if (visited > searchLimit) break;
      }
      return search(value, index + 1);
    }
    search(start, 0);
    const targets = records(best).map(x => ({ name: x.name, slot: x.slot }));
    return { steps: [...best.selected].filter(n => !state.selected.has(n) && !best.inherited.some(x=>x?.name===n&&x.confirmed))
      .sort((a,b) => nodes.get(a).level - nodes.get(b).level), targets, redCount: count(best), unresolved,
      search:{visited,limit:searchLimit,truncated:visited>searchLimit} };
  }

  return { empty, nodes, byName, base, slotMap, canSelect, recipeMet, hosts, toggle, acquire, fiveDualSort, normalizeDamageScenario,
    modeConflicts, setGameMode, replacement, replaceBase, frontier, targetRecommendations,
    acquireReason, inherit, inheritanceReason, activeInherited, plans, equipRed, planRed, setLegacyBody, nodeRequirements, adjustments, recommendations, serialize, restore, prune,
    syncInherited, fiveDualPlan, multiRedPlan, inheritedRules, inheritanceSource, characterPlan, completeCharacter };
}
const CompassRules = createCompassRules();
if (typeof module !== 'undefined') module.exports = CompassRules;
