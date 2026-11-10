/* Cartoon medallion skill atlas: five columns, seven element rows; stable tree IDs. */
const CompassArt = (() => {
  const ids = [
    'fire_burn','fire_bullet','fire_ring','fire_mine','fire_spirit',
    'ice_cold','ice_spike','ice_thorn','ice_hail','ice_sword',
    'elec_shock','elec_chain','elec_thunder','elec_orb','elec_pillar',
    'poison_venom','poison_slime','poison_dart','poison_liquid','poison_puffer',
    'dark_tentacle','dark_shadow','dark_spike','dark_blackhole','dark_mark',
    'light_lance','light_flash','light_wave','light_array','light_holy',
    'blade_sword','blade_tear','blade_ring','blade_storm','blade_knife'
  ];
  const indices = new Map(ids.map((id,i) => [id,i]));
  const atlas = Object.freeze({src:'assets/strategy-icons/tactics-atlas-cartoon-v2.png',width:1060,height:1484,cell:196});
  // Calibrated square viewports preserve each full circular ring and omit sheet gutters.
  const columns = [26,230,430,632,834], rows = [8,204,401,598,795,991,1189];
  const nodes = new Map();
  CompassData.STRATEGY_DATA.forEach(t => [...t.bases.map(b=>b.name),...t.ii,...t.iii].forEach(n=>nodes.set(n,t)));
  function icon(tree) {
    const id = typeof tree === 'string' ? tree : tree?.id;
    const i = indices.get(id);
    if (i == null) return '';
    return `<span class="tactic-art" data-tree-art="${id}" aria-hidden="true" style="background-position:${columns[i%5]/(atlas.width-atlas.cell)*100}% ${rows[Math.floor(i/5)]/(atlas.height-atlas.cell)*100}%"></span>`;
  }
  function dual(d) {
    return `<span class="tactic-art-pair" aria-hidden="true">${[d.prim,d.sec].map(names=>icon(nodes.get(names[0]))).join('')}</span>`;
  }
  const element = id => icon(CompassData.STRATEGY_DATA.find(t=>t.element===id));
  return Object.freeze({icon,dual,element,atlas,ids:Object.freeze(ids)});
})();
