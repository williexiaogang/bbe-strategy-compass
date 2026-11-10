// 名稱對照表：我們的繁中命名 -> wiki 英文原文（含英文描述與人工繁中翻譯）。
// 來源：https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Tactics
// 抓取：2026-10-17
// descEn = wiki 英文原文；descZh = 人工翻譯，四檔品質數值原樣保留。
// 已用於策略詳情與搜尋；社群整理描述不代表逐版本實機校準。
const TacticsDescriptions = {
  "meta": {
    "source": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Tactics",
    "fetchedAt": "2026-10-17",
    "note": "descEn 為 wiki 英文原文，descZh 為人工繁中翻譯（四檔品質數值原樣保留）。rarity = 四檔品質數值。策略詳情與搜尋共用本表；遊戲版本與實機數值仍待核對。",
    "counts": {
      "trees": 35,
      "nodes": 197,
      "duals": 100,
      "nodesZh": 197,
      "dualsZh": 100,
      "notesZh": 79
    }
  },
  "trees": {
    "燃燒": "Burn",
    "火彈": "Fire Projectile",
    "火環": "Ring of Fire",
    "地雷": "Mine",
    "火精靈": "Fire Spirit",
    "寒冷": "Cold",
    "冰錐": "Icicle",
    "冰刺": "Ice Spike",
    "冰雹": "Hail",
    "玄冰劍刃": "Ice Blade",
    "感電": "Lightning Mark",
    "閃電鏈": "Lightning Chain",
    "落雷": "Thunderbolt",
    "電球": "Lightning Orb",
    "電樁": "Electric Pillar",
    "中毒": "Poison",
    "史萊姆": "Slime",
    "毒彈": "Virulent Bomb",
    "毒液": "Venom",
    "毒泡河豚": "Bubble Pufferfish",
    "觸手": "Tentacle",
    "影子": "Shadow",
    "影刺": "Shadow Spike",
    "黑洞": "Blackhole",
    "暗影標記": "Shadow Mark",
    "光槍": "Light Spear",
    "閃光": "Flash",
    "光波": "Lightwave",
    "光陣": "Radiance",
    "聖光標記": "Holy Mark",
    "飛劍": "Daggers",
    "撕裂": "Rend",
    "刃環": "Blade Ring",
    "刀刃風暴": "Bladestorm",
    "飛刃": "Flying Blade"
  },
  "nodes": {
    "普攻燃燒": {
      "en": "Attack Burn",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When your Attack lands a hit, inflicts Burn on the enemy for 5 seconds, dealing 160/190/220/260 damage per second.",
      "descZh": "普攻命中時使敵人燃燒，持續 5 秒，每秒造成 160/190/220/260 傷害。",
      "rarity": [
        160,
        190,
        220,
        260
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "技能燃燒": {
      "en": "Skill Burn",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When your Skill lands a hit, inflicts Burn on the enemy for 5 seconds, dealing 220/270/310/360 damage per second.",
      "descZh": "技能命中時使敵人燃燒，持續 5 秒，每秒造成 220/270/310/360 傷害。",
      "rarity": [
        220,
        270,
        310,
        360
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "衝刺燃燒": {
      "en": "Dash Burn",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Dashing inflicts Burn on nearby enemies for 5 seconds, dealing 100/120/130/150 damage per second.",
      "descZh": "衝刺時使周圍敵人燃燒，持續 5 秒，每秒造成 100/120/130/150 傷害。",
      "rarity": [
        100,
        120,
        130,
        150
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "持久燃燒": {
      "en": "Durable Burn",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Attack",
        "Dash"
      ],
      "slots": [
        "skill",
        "basic",
        "dash"
      ],
      "descEn": "Burn now lasts 3 seconds longer and the Burning damage is increased by 38/45/53/60%.",
      "descZh": "燃燒持續時間延長 3 秒，燃燒傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "聚火成炎": {
      "en": "Conflagration",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Attack",
        "Dash"
      ],
      "slots": [
        "skill",
        "basic",
        "dash"
      ],
      "descEn": "For every enemy inflicted by Burn, the next Burn inflicted deals 18/22/26/30% more damage.",
      "descZh": "每有一名敵人陷入燃燒，下一次造成的燃燒傷害提升 18/22/26/30%。",
      "rarity": [
        18,
        22,
        26,
        30
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "燃燒引燃": {
      "en": "Catching Fire",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Attack",
        "Dash"
      ],
      "slots": [
        "skill",
        "basic",
        "dash"
      ],
      "descEn": "Burning enemies will spread the fire to nearby enemies while also increasing the Burn damage by 35/40/45/55%.",
      "descZh": "燃燒中的敵人會將火焰擴散給周圍敵人，同時燃燒傷害提升 35/40/45/55%。",
      "rarity": [
        35,
        40,
        45,
        55
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "火焰漫步": {
      "en": "Flamewalker",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Dodging will temporarily generate a Trail of Fire as you move. That trail deals 150/180/210/240 damage per second.",
      "descZh": "閃避時會在移動途中短暫生成火焰路徑，路徑每秒造成 150/180/210/240 傷害。",
      "rarity": [
        150,
        180,
        210,
        240
      ],
      "noteEn": "Only possible if you have Dash Burn.",
      "noteZh": "僅在擁有衝刺燃燒時生效",
      "match": "order"
    },
    "強效燃燒": {
      "en": "Powerful Burn",
      "tier": 3,
      "enSlots": [
        "Skill",
        "Attack",
        "Dash"
      ],
      "slots": [
        "skill",
        "basic",
        "dash"
      ],
      "descEn": "Burn damage ticks happen 25/30/35/40% faster.",
      "descZh": "燃燒傷害的跳動速度快 25/30/35/40%。",
      "rarity": [
        25,
        30,
        35,
        40
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "技能火彈": {
      "en": "Skill Fire Projectile",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Upon using a Skill, shoots 10 Fire Projectiles outward, each dealing 170/210/240/280 damage. This damage decreases against the same enemy with each projectile that hits them.",
      "descZh": "使用技能時向外發射 10 顆火彈，每顆造成 170/210/240/280 傷害；同一名敵人被擊中時，傷害會逐顆遞減。",
      "rarity": [
        170,
        210,
        240,
        280
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "傳承技火彈": {
      "en": "Legacy Fire Projectile",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, shoots 10 Fire Projectiles outward, each dealing 120/150/170/200 damage. This damage decreases against the same enemy with each projectile that hits them.",
      "descZh": "使用傳承技時向外發射 10 顆火彈，每顆造成 120/150/170/200 傷害；同一名敵人被擊中時，傷害會逐顆遞減。",
      "rarity": [
        120,
        150,
        170,
        200
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "集中火彈": {
      "en": "Focused Fire Projectile",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "The Fire Projectiles are now fired in a 45-degree sector, and deals 5/6/7/8% more damage.",
      "descZh": "火彈改為在 45 度扇形內發射，且傷害提升 5/6/7/8%。",
      "rarity": [
        5,
        6,
        7,
        8
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "火彈彈射": {
      "en": "Fire Projectile Bounce",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "Fire Projectiles can bounce and deal 19/23/26/30% more damage.",
      "descZh": "火彈可彈射，且傷害提升 19/23/26/30%。",
      "rarity": [
        19,
        23,
        26,
        30
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "火彈強化": {
      "en": "Fire Projectile Upgrade",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "The Fire Projectiles become larger and deal 38/45/53/60% more damage.",
      "descZh": "火彈體積變大，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "多重火彈": {
      "en": "Multi Fire Projectiles",
      "tier": 3,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "The number of max Fire Projectiles is increased by 4, and deals 13/15/18/20% more damage.",
      "descZh": "火彈數量上限增加 4 顆，且傷害提升 13/15/18/20%。",
      "rarity": [
        13,
        15,
        18,
        20
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "傳承技火環": {
      "en": "Legacy Ring of Fire",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, Spawns Rings of Fire, dealing 480/580/670/770 damage to enemies.",
      "descZh": "使用傳承技時生成火環，對敵人造成 480/580/670/770 傷害。",
      "rarity": [
        480,
        580,
        670,
        770
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "大型火環": {
      "en": "Large Ring of Fire",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Rings of Fire become larger and deal 30/36/42/48% more damage.",
      "descZh": "火環範圍變大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "變形火環": {
      "en": "Transformative Ring of Fire",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Rings of Fire shapeshift and deal 38/45/53/60% more damage.",
      "descZh": "火環會變形，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "受擊火環": {
      "en": "Struck Ring of Fire",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon taking a hit, conjures a Ring of Fire that deals 670/810/940/1080 damage.",
      "descZh": "受到攻擊時召喚一道火環，造成 670/810/940/1080 傷害。",
      "rarity": [
        670,
        810,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "雙發火環": {
      "en": "Double Rings of Fire",
      "tier": 3,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Ring of Fire is now upgraded to Double Rings of Fire. The second one deals 590/710/830/950 damage.",
      "descZh": "火環升級為雙發火環，第二道火環造成 590/710/830/950 傷害。",
      "rarity": [
        590,
        710,
        830,
        950
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "放置地雷": {
      "en": "Place Mine",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Crouching will place 1 Mine. By default, each mine deals 360/430/500/570 damage. This damage increases by 10% per second, with a cooldown of 10 seconds.",
      "descZh": "下蹲時放置 1 顆地雷。每顆地雷基本造成 360/430/500/570 傷害，傷害每秒提升 10%，冷卻時間 10 秒。",
      "rarity": [
        360,
        430,
        500,
        570
      ],
      "noteEn": "You can place multiple mines over time.",
      "noteZh": "可隨時間放置多顆地雷",
      "match": "single"
    },
    "地雷強化": {
      "en": "Mine Upgrade",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Mines have a larger explosion and deal 30/36/42/48% more damage.",
      "descZh": "地雷爆炸範圍變大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "額外地雷": {
      "en": "One More Mine",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "There is a 50/60/70/80% chance to place an additional Mine.",
      "descZh": "有 50/60/70/80% 機率額外放置 1 顆地雷。",
      "rarity": [
        50,
        60,
        70,
        80
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "地雷濺射": {
      "en": "Splashing Mines",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Upon exploding, Mines send out 6 shrapnel, each dealing 290/350/400/460 damage.",
      "descZh": "地雷爆炸時會射出 6 枚碎片，每枚造成 290/350/400/460 傷害。",
      "rarity": [
        290,
        350,
        400,
        460
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "高效布雷": {
      "en": "Efficient Mine Placing",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "The cooldown of Place Mine is reduced by 1/2/3/4 second(s).",
      "descZh": "放置地雷的冷卻時間縮短 1/2/3/4 秒。",
      "rarity": [
        1,
        2,
        3,
        4
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "火精靈助戰": {
      "en": "Fire Spirit Assist",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Spawns a Fire Spirit that assists you in combat. Over time, more and more Fire Spirits will spawn. When your Attack hits an enemy, they will hunt that enemy, each dealing 120/140/170/190 damage.",
      "descZh": "召喚火精靈協助戰鬥，隨時間會生成越來越多火精靈。普攻命中敵人時，火精靈會追擊該敵人，每隻造成 120/140/170/190 傷害。",
      "rarity": [
        120,
        140,
        170,
        190
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "火精靈強化": {
      "en": "Fire Spirit Upgrade",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Fire Spirits shapeshift and deal 38/45/53/60% more damage.",
      "descZh": "火精靈會變形，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "火精靈連擊": {
      "en": "Fire Spirit Combo",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When a Fire Spirit hits the same enemy, the damage is increased by 11/13/15/17% with each hit.",
      "descZh": "火精靈每次擊中同一名敵人，傷害提升 11/13/15/17%。",
      "rarity": [
        11,
        13,
        15,
        17
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "快速分裂": {
      "en": "Quick Split",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Fire Spirits now split 38/45/53/60% faster.",
      "descZh": "火精靈的分裂速度快 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "持久分裂": {
      "en": "Durable Split",
      "tier": 3,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Fire Spirits split 1 more time and deal 109/111/113/115% more damage.",
      "descZh": "火精靈多分裂 1 次，且傷害提升 109/111/113/115%。",
      "rarity": [
        109,
        111,
        113,
        115
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "普攻寒冷": {
      "en": "Cold Attack",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Attacks deal 29/34/40/46% more damage and inflict 1 stack of Cold on enemies, causing them to slow down.",
      "descZh": "普攻傷害提升 29/34/40/46%，並使敵人堆疊 1 層寒冷而減速。",
      "rarity": [
        29,
        34,
        40,
        46
      ],
      "noteEn": "Because of the damage boost given by the T1 Cold Tactics, taking into consideration what attacks your character uses more is important.",
      "noteZh": "由於 T1 寒冷策略本身提供增傷，選擇時應考量角色的常用攻擊類型",
      "match": "slot"
    },
    "技能寒冷": {
      "en": "Skill Cold",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Skills deal 30/35/41/47% more damage and inflict 2 stacks of Cold on enemies, causing them to slow down.",
      "descZh": "技能傷害提升 30/35/41/47%，並使敵人堆疊 2 層寒冷而減速。",
      "rarity": [
        30,
        35,
        41,
        47
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "寒氣爆發": {
      "en": "Frost Burst",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "At max stacks of Cold, they burst and deal 610/740/860/980 damage.",
      "descZh": "寒冷層數堆滿時會爆發，造成 610/740/860/980 傷害。",
      "rarity": [
        610,
        740,
        860,
        980
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "聚寒成冰": {
      "en": "Freezing Cold",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "When more than 5 enemies are inflicted with Cold, the enemies in range become Frozen. Breaking a Frozen enemy deals 1000/1200/1400/1600 damage.",
      "descZh": "當超過 5 名敵人陷入寒冷時，範圍內的敵人會被冰凍；擊破冰凍的敵人會造成 1000/1200/1400/1600 傷害。",
      "rarity": [
        1000,
        1200,
        1400,
        1600
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "冰霜爆破": {
      "en": "Frost Explosion",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Frost Burst becomes 20% larger in range and deals 73/88/103/117% more damage.",
      "descZh": "寒氣爆發的範圍擴大 20%，且傷害提升 73/88/103/117%。",
      "rarity": [
        73,
        88,
        103,
        117
      ],
      "noteEn": "Requires Frost Burst as your T2 choice.",
      "noteZh": "需選擇寒氣爆發作為 T2 才會生效",
      "match": "order"
    },
    "強力破冰": {
      "en": "Powerful Icebreaker",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "When breaking a Frozen enemy, deals 800/1000/1200/1400 extra damage.",
      "descZh": "擊破冰凍敵人時額外造成 800/1000/1200/1400 傷害。",
      "rarity": [
        800,
        1000,
        1200,
        1400
      ],
      "noteEn": "Requires Freezing Cold as your T2 choice.",
      "noteZh": "需選擇聚寒成冰作為 T2 才會生效",
      "match": "order"
    },
    "衝刺冰錐": {
      "en": "Icicle Dash",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Dashing summons Icicles, dealing 90/110/130/150 damage and inflicting 1 stack of Cold on enemies, causing them to slow down.",
      "descZh": "衝刺時召喚冰錐，造成 90/110/130/150 傷害，並使敵人堆疊 1 層寒冷而減速。",
      "rarity": [
        90,
        110,
        130,
        150
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "傳承技冰錐": {
      "en": "Legacy Icicle",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, generates Two-Way Icicles on the ground that deal 270/330/380/440 damage to enemies and inflict 2 stacks of Cold.",
      "descZh": "使用傳承技時在地面生成雙向冰錐，對敵人造成 270/330/380/440 傷害並堆疊 2 層寒冷。",
      "rarity": [
        270,
        330,
        380,
        440
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "冰錐強化": {
      "en": "Icicle Upgrade",
      "tier": 2,
      "enSlots": [
        "Dash",
        "Legacy"
      ],
      "slots": [
        "dash",
        "heritage"
      ],
      "descEn": "The Icicles shapeshift and deal 38/45/53/60% more damage.",
      "descZh": "冰錐會變形，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃避冰錐": {
      "en": "Dodging Icicle",
      "tier": 2,
      "enSlots": [
        "Dash",
        "Legacy"
      ],
      "slots": [
        "dash",
        "heritage"
      ],
      "descEn": "Upon dodging, the Icicles generated become Two-Way Icicles, dealing 110/130/150/180 damage to enemies.",
      "descZh": "閃避時生成的冰錐改為雙向冰錐，對敵人造成 110/130/150/180 傷害。",
      "rarity": [
        110,
        130,
        150,
        180
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "受擊冰錐": {
      "en": "Reactive Icicle",
      "tier": 2,
      "enSlots": [
        "Dash",
        "Legacy"
      ],
      "slots": [
        "dash",
        "heritage"
      ],
      "descEn": "Upon taking a hit, summons Icicles at where the hit comes from, dealing 670/800/940/1080 damage.",
      "descZh": "受到攻擊時，在攻擊來向召喚冰錐，造成 670/800/940/1080 傷害。",
      "rarity": [
        670,
        800,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "隨機冰錐": {
      "en": "Random Icicle",
      "tier": 3,
      "enSlots": [
        "Dash",
        "Legacy"
      ],
      "slots": [
        "dash",
        "heritage"
      ],
      "descEn": "Icicles spawn at random to attack enemies, each dealing 170/200/240/270 damage.",
      "descZh": "冰錐會隨機生成並攻擊敵人，每根造成 170/200/240/270 傷害。",
      "rarity": [
        170,
        200,
        240,
        270
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "召喚冰刺": {
      "en": "Summon Ice Spike",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Automatically generates Ice Spikes, each dealing 140/170/190/220 damage and inflicting 1 stack of Cold on enemies, causing them to slow down.",
      "descZh": "自動生成冰刺，每根造成 140/170/190/220 傷害，並使敵人堆疊 1 層寒冷而減速。",
      "rarity": [
        140,
        170,
        190,
        220
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "冰刺強化": {
      "en": "Ice Spike Upgrade",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "The Ice Spikes become larger and deal 40/45/55/60% more damage.",
      "descZh": "冰刺體積變大，且傷害提升 40/45/55/60%。",
      "rarity": [
        40,
        45,
        55,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "精準冰刺": {
      "en": "Precision Ice Spike",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Ice Spikes prioritize attacking non-Cold enemies and deal 34/41/48/55% more damage.",
      "descZh": "冰刺會優先攻擊未陷入寒冷的敵人，且傷害提升 34/41/48/55%。",
      "rarity": [
        34,
        41,
        48,
        55
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "極冰利刃": {
      "en": "Freezing Blade",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Ice Spikes can penetrate enemies and deal 30/35/40/45% more damage.",
      "descZh": "冰刺可穿透敵人，且傷害提升 30/35/40/45%。",
      "rarity": [
        30,
        35,
        40,
        45
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "多重冰刺": {
      "en": "Multi Ice Spikes",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Upon generating Ice Spikes, you can generate 2/3/4/5 more.",
      "descZh": "生成冰刺時可額外生成 2/3/4/5 根。",
      "rarity": [
        2,
        3,
        4,
        5
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "技能冰雹": {
      "en": "Skill Hail",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When using your Skill, a Hail Cloud is summoned that continuously generates hail to attack enemies for 6 seconds. Each Hail inflicts 120/140/170/190 damage adds 1 stack of Cold.",
      "descZh": "使用技能時召喚冰雹雲，持續 6 秒不斷生成冰雹攻擊敵人。每顆冰雹造成 120/140/170/190 傷害並堆疊 1 層寒冷。",
      "rarity": [
        120,
        140,
        170,
        190
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "傳承技冰雹": {
      "en": "Legacy Hail",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "When using your Legacy, a Hail Cloud is summoned that continuously generates hail to attack enemies for 6 seconds. Each Hail inflicts 90/100/120/140 damage and applies 1 stack of Cold.",
      "descZh": "使用傳承技時召喚冰雹雲，持續 6 秒不斷生成冰雹攻擊敵人。每顆冰雹造成 90/100/120/140 傷害並堆疊 1 層寒冷。",
      "rarity": [
        90,
        100,
        120,
        140
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "廣域冰雹": {
      "en": "Wide-Area Hail",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "Expands the size of the Hail Cloud. The Hail's size is increased by 20% and deals 70/80/100/120 additional damage.",
      "descZh": "冰雹雲範圍擴大，冰雹體積增加 20%，且額外造成 70/80/100/120 傷害。",
      "rarity": [
        70,
        80,
        100,
        120
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "冰雹頻率": {
      "en": "High Frequency Hail",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "There is a 15/18/21/24% chance for an extra piece of Hail to be generated per Hail.",
      "descZh": "每顆冰雹有 15/18/21/24% 機率額外再生成 1 顆冰雹。",
      "rarity": [
        15,
        18,
        21,
        24
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "持久冰雹": {
      "en": "Enduring Hail",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "Extends the duration of the Hail Cloud by 1/1/2/2 second and boosts the damage by 40/50/60/70.",
      "descZh": "冰雹雲持續時間延長 1/1/2/2 秒，且傷害提升 40/50/60/70。",
      "rarity": [
        1,
        1,
        2,
        2
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "大型冰雹": {
      "en": "Massive Hail",
      "tier": 3,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "After generating four pieces of Hail, the next piece of Hail will deal 100/120/140/160 extra and damage is capable of breaking super armor.",
      "descZh": "生成 4 顆冰雹後，下一顆冰雹會額外造成 100/120/140/160 傷害，並可擊破霸體。",
      "rarity": [
        100,
        120,
        140,
        160
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "玄冰劍刃": {
      "en": "Mystic Ice Sword",
      "tier": 1,
      "enSlots": [],
      "slots": [],
      "descEn": "Aquires a Mystic Ice Sword that follows you. Executing a heavy strike will cause the Mystic Ice Sword to shatter, unleashing a Mystic Ice Slash that inflicts 1280/1540/1790/2050 damage and applies 4 stacks of Cold. Landing hits with your Attack can repair a broken Mystic Ice Sword.",
      "descZh": "獲得一柄跟隨自身的玄冰劍。施展重擊時玄冰劍會碎裂，並斬出一道玄冰斬擊，造成 1280/1540/1790/2050 傷害並堆疊 4 層寒冷；以普攻命中可修復碎裂的玄冰劍。",
      "rarity": [
        1280,
        1540,
        1790,
        2050
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "速凝玄冰": {
      "en": "Rapid Freezing Ice",
      "tier": 2,
      "enSlots": [],
      "slots": [],
      "descEn": "There is a 30/x/x/x% chance to double the repair effect when repairing Mystic Ice Sword.",
      "descZh": "修復玄冰劍時，有 30/x/x/x% 機率使修復效果加倍。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "玄冰劍氣": {
      "en": "Mystic Ice Sword Shockwave",
      "tier": 2,
      "enSlots": [],
      "slots": [],
      "descEn": "When the Mystic Ice Sword attacks, it emits a shockwave, dealing half the damage of its slash. The damage of the Mystic Ice Sword slash is increased by 340/x/x/x.",
      "descZh": "玄冰劍攻擊時會釋放劍氣，造成劍斬傷害的一半；玄冰劍斬擊傷害提升 340/x/x/x。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "玄冰連斬": {
      "en": "Mystic Ice Combo Slash",
      "tier": 2,
      "enSlots": [],
      "slots": [],
      "descEn": "When the Mystic Ice Sword attacks, it performs an additional slash, and the damage of its slash is increased by 210/x/x/x.",
      "descZh": "玄冰劍攻擊時會額外斬擊一次，其斬擊傷害提升 210/x/x/x。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "玄冰巨劍": {
      "en": "Mystic Ice Greatsword",
      "tier": 3,
      "enSlots": [],
      "slots": [],
      "descEn": "The Mystic Ice Sword increases in size, and its damage is increased by 600/x/x/x.",
      "descZh": "玄冰劍體積增大，其傷害提升 600/x/x/x。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "技能感電": {
      "en": "Skill Lightning",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When your Skill hits an enemy, inflicts Lightning on them. When that enemy is eliminated, unleashes an Impulse, dealing 670/810/940/1080 damage.",
      "descZh": "技能命中敵人時使其感電；該敵人被消滅時釋放脈衝，造成 670/810/940/1080 傷害。",
      "rarity": [
        670,
        810,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "傳承技感電": {
      "en": "Legacy Lightning",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "When your Legacy hits an enemy, inflicts Lightning on them. When that enemy is eliminated, unleashes an Impulse, dealing 480/580/670/770 damage.",
      "descZh": "傳承技命中敵人時使其感電；該敵人被消滅時釋放脈衝，造成 480/580/670/770 傷害。",
      "rarity": [
        480,
        580,
        670,
        770
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "脈衝強化": {
      "en": "Impulse Upgrade",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "Impulse shapeshifts and deals 37.5/45/52.5/60% more damage.",
      "descZh": "脈衝會變形，且傷害提升 37.5/45/52.5/60%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "大型脈衝": {
      "en": "Large Pulse",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "Impulse becomes larger in range and deal 30/36/42/48% more damage.",
      "descZh": "脈衝範圍擴大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "脈衝麻痺": {
      "en": "Impulse Paralysis",
      "tier": 2,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "The Impulses can paralyze enemies for 1.5/2/2.5/3 seconds, rendering them immobile.",
      "descZh": "脈衝可使敵人麻痺 1.5/2/2.5/3 秒，使其無法行動。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "脈衝感電": {
      "en": "Pulsing Lightning",
      "tier": 3,
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "slots": [
        "skill",
        "heritage"
      ],
      "descEn": "When your Impulse hits an enemy, inflicts Lightning on them for 6 seconds. When that enemy is eliminated, unleashes an Impulse, dealing 630/760/880/1010 damage.",
      "descZh": "脈衝擊中敵人時使其感電 6 秒；該敵人被消滅時釋放脈衝，造成 630/760/880/1010 傷害。",
      "rarity": [
        630,
        760,
        880,
        1010
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "普攻閃電": {
      "en": "Attack Lighting",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When you have landed 5 hits with your Attack, conjures a Lightning Chain, dealing 320/380/450/510 damage with each link.",
      "descZh": "普攻累積命中 5 次時召喚閃電鏈，每段造成 320/380/450/510 傷害。",
      "rarity": [
        320,
        380,
        450,
        510
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "技能閃電": {
      "en": "Skill Lightning",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When you land a hit with your Skills, conjures a Lightning Chain to nearby enemies, dealing 670/810/940/1080 damage with each link.",
      "descZh": "技能命中時召喚閃電鏈連結周圍敵人，每段造成 670/810/940/1080 傷害。",
      "rarity": [
        670,
        810,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "電閃雷鳴": {
      "en": "Thunderstorm",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Using your Legacy conjures a Lightning Cloud that keeps shooting Lightning Chains. Each link deals 100/120/130/150 damage, up to 5 links.",
      "descZh": "使用傳承技時召喚雷雲持續發射閃電鏈，每段造成 100/120/130/150 傷害，最多 5 段。",
      "rarity": [
        100,
        120,
        130,
        150
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "閃電過載": {
      "en": "Lightning Overloaded",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Legacy",
        "Skill"
      ],
      "slots": [
        "basic",
        "heritage",
        "skill"
      ],
      "descEn": "The last link of a Lightning Chain additionally deals 180/220/250/290 damage.",
      "descZh": "閃電鏈的最後一段額外造成 180/220/250/290 傷害。",
      "rarity": [
        180,
        220,
        250,
        290
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃電強化": {
      "en": "Lightning Upgrade",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Legacy",
        "Skill"
      ],
      "slots": [
        "basic",
        "heritage",
        "skill"
      ],
      "descEn": "The Lightning Chain becomes thicker and now deals 37.5/45/52.5/60% more damage.",
      "descZh": "閃電鏈變粗，且傷害提升 37.5/45/52.5/60%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃電彈射": {
      "en": "Thunder Bounce",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Legacy",
        "Skill"
      ],
      "slots": [
        "basic",
        "heritage",
        "skill"
      ],
      "descEn": "The Lightning Chain can bounce. The damage is reduced by 65/58/51/45% after 3 bounces.",
      "descZh": "閃電鏈可彈射；彈射 3 次後傷害降為 65/58/51/45%。",
      "rarity": [
        65,
        58,
        51,
        45
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃電延伸": {
      "en": "Extended Lightning",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Legacy",
        "Skill"
      ],
      "slots": [
        "basic",
        "heritage",
        "skill"
      ],
      "descEn": "The Lightning Chain can chain up to 1/2/3/4 times.",
      "descZh": "閃電鏈可額外連鎖 1/2/3/4 次。",
      "rarity": [
        1,
        2,
        3,
        4
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "衝刺落雷": {
      "en": "Dash Thunderbolt",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Dashing summons Thunderbolts, dealing 380/460/540/610 damage.",
      "descZh": "衝刺時召喚落雷，造成 380/460/540/610 傷害。",
      "rarity": [
        380,
        460,
        540,
        610
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "受擊落雷": {
      "en": "Counter Thunderbolt",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon taking a hit, summons a Thunderbolt at where the hit comes from, dealing 670/810/940/1080 damage.",
      "descZh": "受到攻擊時，在攻擊來向召喚落雷，造成 670/810/940/1080 傷害。",
      "rarity": [
        670,
        810,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃避落雷": {
      "en": "Dodge Thunderbolt",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon dodging, summons multiple Thunderbolts, each dealing 190/230/270/310 damage.",
      "descZh": "閃避時召喚多道落雷，每道造成 190/230/270/310 傷害。",
      "rarity": [
        190,
        230,
        270,
        310
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "落雷強化": {
      "en": "Thunderbolt Upgrade",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "The Thunderbolts become larger and deal 37.5/45/52.5/60% more damage.",
      "descZh": "落雷範圍變大，且傷害提升 37.5/45/52.5/60%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "落雷麻痺": {
      "en": "Thunderbolt Paralysis",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "The Thunderbolts can paralyze enemies by 1/1.5/2/2.5 seconds, rendering them immobile.",
      "descZh": "落雷可使敵人麻痺 1/1.5/2/2.5 秒，使其無法行動。",
      "rarity": null,
      "noteEn": "*Test this on Elites",
      "noteZh": "待實測：對精英敵人是否生效",
      "match": "order"
    },
    "雙重落雷": {
      "en": "Double Thunderbolts",
      "tier": 3,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "When a Thunderbolt strikes, there is a chance for 1 more Thunderbolt to strike, dealing 680/810/950/1080 damage.",
      "descZh": "落雷落下時有機率再落下一道落雷，造成 680/810/950/1080 傷害。",
      "rarity": [
        680,
        810,
        950,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "環繞電球": {
      "en": "Orbiting Lightning Orb",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "When enemies are nearby, generate 3 Lightning Orbs that orbit around you for 10 seconds. The Lightning Orbs deal 140/170/200/230 damage to enemies upon impact.",
      "descZh": "附近有敵人時生成 3 顆環繞自身的電球，持續 10 秒。電球撞擊敵人時造成 140/170/200/230 傷害。",
      "rarity": [
        140,
        170,
        200,
        230
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "大型電球": {
      "en": "Large Lightning Orb",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Lightning Orbs become bigger in size and deal 37.5/45/52.5/60% more damage.",
      "descZh": "電球體積變大，且傷害提升 37.5/45/52.5/60%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "持久電球": {
      "en": "Durable Lightning Orbs",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "The Lightning Orbs orbit around you for 30/40/50/60% longer.",
      "descZh": "電球的環繞時間延長 30/40/50/60%。",
      "rarity": [
        30,
        40,
        50,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "擴張電球": {
      "en": "Expanded Lightning Orb",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "The Lightning Orbs periodically orbit in a larger range, dealing 37.5/45/52.5/60% more damage.",
      "descZh": "電球會週期性擴大環繞半徑，且傷害提升 37.5/45/52.5/60%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "密集電球": {
      "en": "Clustered Lightning Orbs",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Upon generating Lightning Orbs, you generate 1 more and deal 35/40/50/55% more damage.",
      "descZh": "生成電球時額外生成 1 顆，且傷害提升 35/40/50/55%。",
      "rarity": [
        35,
        40,
        50,
        55
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "傳承技電樁": {
      "en": "Legacy Electric Pillar",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Using your Legacy will summon an Electric Pillar that continuously shocks surrounding enemies, dealing 60/80/90/100 damage per tick for 8 seconds. Enemies will be knocked back after being shocked 10 times.",
      "descZh": "使用傳承技時召喚電樁，持續 8 秒持續電擊周圍敵人，每次電擊造成 60/80/90/100 傷害；敵人被電擊 10 次後會被擊退。",
      "rarity": [
        60,
        80,
        90,
        100
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "持久電樁": {
      "en": "Persistent Electric Pillar",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Electric Pillar's duration is increased by 4/5/6/7 seconds.",
      "descZh": "電樁的持續時間延長 4/5/6/7 秒。",
      "rarity": [
        4,
        5,
        6,
        7
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "超載電樁": {
      "en": "Overload Electric Pillar",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Electric Pillar's damage increases by 50/60/70/80 per shock and boosts nearby Evotype's movement by 30%.",
      "descZh": "電樁每次電擊的傷害提升 50/60/70/80，並使周圍原型體的移動速度提升 30%。",
      "rarity": [
        50,
        60,
        70,
        80
      ],
      "noteEn": "*Test if damage increases per shock or if it's just 50/x/x/x damage more for every shock.",
      "noteZh": "待實測：傷害是每次電擊遞增，還是每次電擊固定多 50/x/x/x",
      "match": "order"
    },
    "電樁吸附": {
      "en": "Electric Pillar Absorption",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Electric Pillar increases damage by 30/40/50/60 per shock and enemies are knocked back after being shocked an additional 5 times.",
      "descZh": "電樁每次電擊的傷害提升 30/40/50/60，且敵人多被電擊 5 次後才會被擊退。",
      "rarity": [
        30,
        40,
        50,
        60
      ],
      "noteEn": "*Test if damage increases per shock or if it's just 50/x/x/x damage more for every shock.",
      "noteZh": "待實測：傷害是每次電擊遞增，還是每次電擊固定多 50/x/x/x",
      "match": "order"
    },
    "大型電樁": {
      "en": "Large Electric Pillar",
      "tier": 3,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Electric Pillar's size and shock range are increased by 35% and damage is increased by 60/80/90/100.",
      "descZh": "電樁的體積與電擊範圍擴大 35%，且傷害提升 60/80/90/100。",
      "rarity": [
        60,
        80,
        90,
        100
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "普攻淬毒": {
      "en": "Attack Miasma",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Upon eliminating an enemy, Attacks inflict Poison on enemies in range, which can kill them after a while depending on their current HP. The higher the quality, the shorter the killing time. If a poisoned enemy dies before the poison is triggered, it will poison another nearby enemy.",
      "descZh": "擊殺敵人後，普攻會使範圍內敵人中毒，並依其當前 HP 在一段時間後致死；品質越高致死時間越短。若中毒敵人在毒發前死亡，會改使另一名附近的敵人中毒。",
      "rarity": null,
      "noteEn": "The rate at which rarity changes the \"killing time\" is currently unknown.",
      "noteZh": "品質影響致死時間的比率目前未知",
      "match": "slot"
    },
    "技能毒環": {
      "en": "Skill Poison Ring",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When your Skill lands a hit, spawns a Poison Ring, inflicting Poison on enemies, which can kill them after a while depending on their current HP. The higher the quality, the shorter the killing time. If a poisoned enemy dies before the poison is triggered, it will poison another nearby enemy.",
      "descZh": "技能命中時生成毒環使敵人中毒，並依其當前 HP 在一段時間後致死；品質越高致死時間越短。若中毒敵人在毒發前死亡，會改使另一名附近的敵人中毒。",
      "rarity": null,
      "noteEn": "The rate at which rarity changes the \"killing time\" is currently unknown.",
      "noteZh": "品質影響致死時間的比率目前未知",
      "match": "slot"
    },
    "受擊毒霧": {
      "en": "Reactive Miasma",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Upon taking a hit, inflict Poison on the enemies in range.",
      "descZh": "受到攻擊時，使範圍內的敵人中毒。",
      "rarity": null,
      "noteEn": "Only possible if you have Attack Miasma. Currently unknown as to what rarity changes.",
      "noteZh": "僅在擁有普攻淬毒時生效；品質影響的數值目前未知",
      "match": "order"
    },
    "毒素污染": {
      "en": "Poison Contamination",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "The Poisoned enemy will be stunned for 1.5/2/2.5/3 seconds after 1 second.",
      "descZh": "中毒的敵人會在 1 秒後被眩暈 1.5/2/2.5/3 秒。",
      "rarity": null,
      "noteEn": "When you inflict poison on an enemy, there is a 1 second delay before the enemy is stunned.",
      "noteZh": "使敵人中毒後有 1 秒延遲才會眩暈",
      "match": "order"
    },
    "強效中毒": {
      "en": "Potent Poison",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Poison's efficiency is increased by 38/45/53/60%.",
      "descZh": "中毒效率提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "Efficiency refers to the duration it takes to kill a Normal Enemy, and the amount of damage done to Elite Enemies.",
      "noteZh": "效率指擊殺一般敵人所需的時間，以及對精英敵人造成的傷害量",
      "match": "order"
    },
    "毒素擴散": {
      "en": "Spreading Toxin",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "When a Poisoned enemy is eliminated, inflict Poison on 2/3/4/5 enemies in range.",
      "descZh": "中毒的敵人被消滅時，使範圍內 2/3/4/5 名敵人中毒。",
      "rarity": [
        2,
        3,
        4,
        5
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "受擊毒環": {
      "en": "Reactive Poison Ring",
      "tier": 2,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Upon taking a hit, spawns a Poison Ring that surrounds you, inflicting Poison on enemies.",
      "descZh": "受到攻擊時生成環繞自身的毒環，使敵人中毒。",
      "rarity": null,
      "noteEn": "Only possible if you have Skill Poison Ring. Currently unknown as to what rarity changes.",
      "noteZh": "僅在擁有技能毒環時生效；品質影響的數值目前未知",
      "match": "order"
    },
    "急性中毒": {
      "en": "Acute Poison",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Poison takes 2/3/4/5 less seconds to take effect.",
      "descZh": "中毒的生效時間縮短 2/3/4/5 秒。",
      "rarity": [
        2,
        3,
        4,
        5
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "召喚史萊姆": {
      "en": "Summon Slime",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "When enemies are nearby, summon Slimes that automatically attack enemies and deal 240/290/340/380 damage.",
      "descZh": "附近有敵人時召喚史萊姆，自動攻擊敵人並造成 240/290/340/380 傷害。",
      "rarity": [
        240,
        290,
        340,
        380
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "自爆史萊姆": {
      "en": "Self-Destructing Slime",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "When a Slime expires, it explodes, dealing 580/690/810/920 damage.",
      "descZh": "史萊姆消失時會爆炸，造成 580/690/810/920 傷害。",
      "rarity": [
        580,
        690,
        810,
        920
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "長效史萊姆": {
      "en": "Lasting Slime",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Slimes now last 3/4/5/6 seconds longer.",
      "descZh": "史萊姆的持續時間延長 3/4/5/6 秒。",
      "rarity": [
        3,
        4,
        5,
        6
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "大型史萊姆": {
      "en": "Large Slime",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Slimes become larger in size and deal 38/45/53/60% more damage.",
      "descZh": "史萊姆體積變大，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "Only possible if you have Self-Destructing Slime.",
      "noteZh": "僅在擁有自爆史萊姆時生效",
      "match": "order"
    },
    "極速史萊姆": {
      "en": "Fast Slime",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Slimes attack 25/30/35/40% faster.",
      "descZh": "史萊姆的攻擊速度快 25/30/35/40%。",
      "rarity": [
        25,
        30,
        35,
        40
      ],
      "noteEn": "Only possible if you have Lasting Slime. Both sides have their merits, so it doesn't matter which side path you take.",
      "noteZh": "僅在擁有長效史萊姆時生效；兩邊各有優點，選哪條都行",
      "match": "order"
    },
    "衝刺毒彈": {
      "en": "Dash Virulent Bomb",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon Dashing, spawns Virulent Bombs at the starting location, dealing 240/290/340/380 damage.",
      "descZh": "衝刺時在起始位置生成毒彈，造成 240/290/340/380 傷害。",
      "rarity": [
        240,
        290,
        340,
        380
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "烈性毒彈": {
      "en": "Intense Virulent Bomb",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "The explosion of a Virulent Bomb inflicts Poison on enemies. Attention: You need a prerequisite Toxin Tactic to activate this.",
      "descZh": "毒彈爆炸時會使敵人中毒。注意：需先擁有其他毒系策略才能觸發。",
      "rarity": null,
      "noteEn": "This Tactic requires that you have Attack Miasma or Skill Poison Ring to activate the poison. Essentially a Double Tactic.",
      "noteZh": "需擁有普攻淬毒或技能毒環才會中毒，本質上等同紅策",
      "match": "order"
    },
    "閃避毒彈": {
      "en": "Dodge Virulent Bomb",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon dodging, summons more Virulent Bombs, each dealing 290/350/400/460 damage.",
      "descZh": "閃避時召喚更多毒彈，每顆造成 290/350/400/460 傷害。",
      "rarity": [
        290,
        350,
        400,
        460
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "濃縮毒彈": {
      "en": "Condensed Virulent Bomb",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Virulent Bombs explode after a delay but deal 65/80/95/110% more damage.",
      "descZh": "毒彈會延遲爆炸，但傷害提升 65/80/95/110%。",
      "rarity": [
        65,
        80,
        95,
        110
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "擴散毒彈": {
      "en": "Spreading Virulent Bomb",
      "tier": 3,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Virulent Bombs become larger in explosion range and deal 20/24/28/32% more damage.",
      "descZh": "毒彈的爆炸範圍擴大，且傷害提升 20/24/28/32%。",
      "rarity": [
        20,
        24,
        28,
        32
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "技能毒液": {
      "en": "Skill Venom",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Upon using your Skill, spawns Venom, dealing 110/130/150/170 damage every 0.5 seconds over 6 seconds.",
      "descZh": "使用技能時生成毒液，在 6 秒內每 0.5 秒造成 110/130/150/170 傷害。",
      "rarity": [
        110,
        130,
        150,
        170
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "傳承技毒液": {
      "en": "Legacy Venom",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, spawns Venom, dealing 80/90/110/120 damage every 0.5 seconds over 6 seconds.",
      "descZh": "使用傳承技時生成毒液，在 6 秒內每 0.5 秒造成 80/90/110/120 傷害。",
      "rarity": [
        80,
        90,
        110,
        120
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "長效毒液": {
      "en": "Lasting Venom",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Venom now lasts 20/40/60/80% longer.",
      "descZh": "毒液的持續時間延長 20/40/60/80%。",
      "rarity": [
        20,
        40,
        60,
        80
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "毒液擴大": {
      "en": "Spreading Venom",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Venom becomes 20% larger in range and deals 30/36/42/48% more damage.",
      "descZh": "毒液範圍擴大 20%，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "烈性毒液": {
      "en": "Intense Venom",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Venom inflicts Poison on enemies. Attention: You need a prerequisite Toxin Tactic to activate this.",
      "descZh": "毒液會使敵人中毒。注意：需先擁有其他毒系策略才能觸發。",
      "rarity": null,
      "noteEn": "This Tactic requires that you have Attack Miasma or Skill Poison Ring to activate the poison. Essentially a Double Tactic.",
      "noteZh": "需擁有普攻淬毒或技能毒環才會中毒，本質上等同紅策",
      "match": "order"
    },
    "毒素累積": {
      "en": "Accumulative Venom",
      "tier": 3,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "When Venom damages the same enemy multiple times, the damage is increased by 5/6/7/8% with each instance.",
      "descZh": "毒液對同一名敵人造成多次傷害時，每次傷害提升 5/6/7/8%。",
      "rarity": [
        5,
        6,
        7,
        8
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "傳承技河豚": {
      "en": "Legacy Pufferfish",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Activating your Legacy summons a Bubble Pufferfish that lasts 10/x/x/x seconds. The Pufferfish will continuously fire Toxin Bubbles after charging, each dealing 70/x/x/x damage. Upon being hit multiple times by the bubbles, the enemy will enveloped by a Toxin Bubble that lifts them into the air.",
      "descZh": "發動傳承技時召喚毒泡河豚，持續 10/x/x/x 秒。河豚蓄力後會持續吐出毒泡，每顆造成 70/x/x/x 傷害；敵人被毒泡擊中數次後會被毒泡包覆並被抬至空中。",
      "rarity": null,
      "noteEn": "*Test how many bubbles are necessary to lift an enemy and if it works on bosses.",
      "noteZh": "待實測：需幾顆毒泡才能抬起敵人，以及對首領是否生效",
      "match": "single"
    },
    "毒泡久噴": {
      "en": "Extended Bubble Spray",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "The Pufferfish's single shot duration increases by 1/x/x/x second, and Toxin Bubbles deal an additional 30/x/x/x damage.",
      "descZh": "河豚的單次噴射時間增加 1/x/x/x 秒，且毒泡額外造成 30/x/x/x 傷害。",
      "rarity": null,
      "noteEn": "*What does this even mean?",
      "noteZh": "原文語意不明",
      "match": "order"
    },
    "毒泡延距": {
      "en": "Increased Bubble Range",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "The Pufferfish's shooting range is increased and Toxin Bubbles deal an additional 30/x/x/x damage.",
      "descZh": "河豚的射程增加，且毒泡額外造成 30/x/x/x 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "大型毒泡": {
      "en": "Giant Toxin Bubble",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "The Pufferfish sprays Toxin Bubbles that grow 25/x/x/x% larger, causing enemies to be enveloped much faster.",
      "descZh": "河豚噴出的毒泡會變大 25/x/x/x%，使敵人更快被包覆。",
      "rarity": null,
      "noteEn": "*Test if these are different than previous bubbles, test how much faster enemies are enveloped.",
      "noteZh": "待實測：與先前的毒泡是否不同，以及包覆速度快多少",
      "match": "order"
    },
    "河豚延續": {
      "en": "Pufferfish Extension",
      "tier": 3,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "The Pufferfish last 4/x/x/x seconds longer and the Toxin Bubble's damage is increased by 50/x/x/x.",
      "descZh": "河豚的持續時間延長 4/x/x/x 秒，且毒泡傷害提升 50/x/x/x。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "召喚觸手": {
      "en": "Summon Tentacle",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Summons Umbra Tentacles that automatically attack for 15 seconds, dealing 190/230/270/310 damage with each hit. There can be up to 1 Umbra Tentacle at the same time.",
      "descZh": "召喚暗影觸手自動攻擊 15 秒，每次命中造成 190/230/270/310 傷害。同時最多存在 1 隻暗影觸手。",
      "rarity": [
        190,
        230,
        270,
        310
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "大型觸手": {
      "en": "Large Tentacle",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Umbra Tentacles attack in a larger range and deal 30/35/40/45% more damage.",
      "descZh": "暗影觸手的攻擊範圍擴大，且傷害提升 30/35/40/45%。",
      "rarity": [
        30,
        35,
        40,
        45
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "快速觸手": {
      "en": "Fast Tentacle",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Umbra Tentacles now attack 22.5/27/31.5/36% faster.",
      "descZh": "暗影觸手的攻擊速度快 22.5/27/31.5/36%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "觸手叢集": {
      "en": "Tentacle Cluster",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "There can now be 1 more Umbra Tentacles at the same time, and deals 5/7/9/11% more damage.",
      "descZh": "同時可多存在 1 隻暗影觸手，且傷害提升 5/7/9/11%。",
      "rarity": [
        5,
        7,
        9,
        11
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "連擊觸手": {
      "en": "Combo Tentacle",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Umbra Tentacles now attack 4 times and deal 90/110/120/140% more damage in total.",
      "descZh": "暗影觸手改為攻擊 4 次，且總傷害提升 90/110/120/140%。",
      "rarity": [
        90,
        110,
        120,
        140
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "衝刺影子": {
      "en": "Dashing Shadow",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Dashing summons 1 Shadow, dealing 190/230/270/310 damage.",
      "descZh": "衝刺時召喚 1 個影子，造成 190/230/270/310 傷害。",
      "rarity": [
        190,
        230,
        270,
        310
      ],
      "noteEn": "Es and Kokonoe can abuse Dashing Shadow as their dashes have unique attributes.",
      "noteZh": "Es 與九重的衝刺有獨特特性，可充分活用衝刺影子",
      "match": "single"
    },
    "影子反沖": {
      "en": "Shadow Kickback",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "After Dashing, a Shadow has a 38/45/53/60% chance to Dash one more time.",
      "descZh": "衝刺後，影子有 38/45/53/60% 機率再衝刺一次。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "影子強化": {
      "en": "Shadow Enhancement",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Shadows Dash across a longer distance and deal 30/35/40/50% more damage.",
      "descZh": "影子的衝刺距離變長，且傷害提升 30/35/40/50%。",
      "rarity": [
        30,
        35,
        40,
        50
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃避影子": {
      "en": "Dodging Shadow",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon Dodging, nearby enemies summon their Shadows that Dash, each dealing 350/410/480/550 damage.",
      "descZh": "閃避時，附近的敵人會召喚自己的影子進行衝刺，每個造成 350/410/480/550 傷害。",
      "rarity": [
        350,
        410,
        480,
        550
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "多重影子": {
      "en": "Multiple Shadows",
      "tier": 3,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon Dashing, there is a 55/65/75/90% chance to spawn 2 Shadows that Dash as well.",
      "descZh": "衝刺時有 55/65/75/90% 機率生成 2 個一同衝刺的影子。",
      "rarity": [
        55,
        65,
        75,
        90
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "普攻影刺": {
      "en": "Attack Shadow Spike",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When your Attack hits an enemy, their Shadow turns into a Shadow Spike that deals 210/260/300/340 damage.",
      "descZh": "普攻命中敵人時，其影子會化為影刺，造成 210/260/300/340 傷害。",
      "rarity": [
        210,
        260,
        300,
        340
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "技能影刺": {
      "en": "Skill Shadow Spike",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When your Skill hits an enemy, their Shadow turns into a Shadow Spike that deals 450/540/630/720 damage.",
      "descZh": "技能命中敵人時，其影子會化為影刺，造成 450/540/630/720 傷害。",
      "rarity": [
        450,
        540,
        630,
        720
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "遠程影刺": {
      "en": "Ranged Shadow Spike",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Shadow Spikes attack in a larger range and deal 30/36/42/48% more damage.",
      "descZh": "影刺的攻擊範圍擴大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "死亡影刺": {
      "en": "Death Shadow Spike",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "When enemies are eliminated, their Shadow turns into a Shadow Spike instantly and deals 21/25/30/34% more damage.",
      "descZh": "敵人被消滅時，其影子會立即化為影刺，且傷害提升 21/25/30/34%。",
      "rarity": [
        21,
        25,
        30,
        34
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "受擊影刺": {
      "en": "Reactive Shadow Spike",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Upon taking a hit, summons a Shadow Spike at where the hit comes from, dealing 670/810/940/1080 damage.",
      "descZh": "受到攻擊時，在攻擊來向召喚影刺，造成 670/810/940/1080 傷害。",
      "rarity": [
        670,
        810,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "影刺強化": {
      "en": "Shadow Spike Upgrade",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "The Shadow Spikes now deal damage multiple times instead and deal 55/66/77/88% more damage.",
      "descZh": "影刺改為造成多次傷害，且傷害提升 55/66/77/88%。",
      "rarity": [
        55,
        66,
        77,
        88
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "傳承技黑洞": {
      "en": "Legacy Blackhole",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, spawns a Blackhole, pulling enemies and dealing 130/150/180/200 damage per second.",
      "descZh": "使用傳承技時生成黑洞，牽引敵人並每秒造成 130/150/180/200 傷害。",
      "rarity": [
        130,
        150,
        180,
        200
      ],
      "noteEn": "The unique ability to have on demand crowd control is extremely valuable as you get to position enemies anywhere twice, including most bosses.",
      "noteZh": "能隨時控場的能力極為珍貴，可兩度將敵人（含多數首領）拉到任意位置",
      "match": "single"
    },
    "大型黑洞": {
      "en": "Large Blackhole",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Blackholes become 20% larger in range and deal 30/36/42/48% more damage.",
      "descZh": "黑洞的範圍擴大 20%，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "黑洞爆炸": {
      "en": "Blackhole Explosion",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "When a Blackhole expires, it explodes and deals 580/690/810/920 damage.",
      "descZh": "黑洞消失時會爆炸，造成 580/690/810/920 傷害。",
      "rarity": [
        580,
        690,
        810,
        920
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "持久黑洞": {
      "en": "Durable Blackhole",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Blackholes now last 1/2/3/4 seconds longer.",
      "descZh": "黑洞的持續時間延長 1/2/3/4 秒。",
      "rarity": [
        1,
        2,
        3,
        4
      ],
      "noteEn": "Arguably the best T2 option for prolonged crowd control, letting you cycle between your two Legacy Skills more freely.",
      "noteZh": "延長控場的首選 T2，能更自由地在兩個傳承技之間循環",
      "match": "order"
    },
    "黑洞盛宴": {
      "en": "Blackhole Feast",
      "tier": 3,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "For every 1 units in the range of a Blackhole, it deals 15/20/25/30% more damage.",
      "descZh": "黑洞範圍內每有 1 個單位，其傷害提升 15/20/25/30%。",
      "rarity": [
        15,
        20,
        25,
        30
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "普攻影標": {
      "en": "Attack Shadow Mark",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Your Attack can apply a Shadow Mark to enemies for 5 seconds. When marked enemies take damage, the Shadow Chain will link to other nearby marked enemies, transferring 4/5/6/7% of the damage to them. Up to 5 marks can be active at the same time.",
      "descZh": "普攻可對敵人附加影標，持續 5 秒。被標記的敵人受到傷害時，影鏈會連到附近其他被標記的敵人，將 4/5/6/7% 的傷害轉移給他們。同時最多存在 5 個影標。",
      "rarity": [
        4,
        5,
        6,
        7
      ],
      "noteEn": "Shadow Marks can transfer the damage from Tactics, as long they aren't a debuff or DoT effect (Poison/Burn/Rend). They do not transfer other damage sources such as Fall Damage, Traps, or the Violent Impact Mind Crystal.",
      "noteZh": "影標可轉移策略造成的傷害，但不包含 debuff 或持續傷害（中毒／燃燒／撕裂）；也不轉移墜落傷害、陷阱、猛擊心晶等其他傷害來源",
      "match": "slot"
    },
    "技能影標": {
      "en": "Skill Shadow Mark",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Your Skill can apply a Shadow Mark to enemies for 5 seconds. When marked enemies take damage, the Shadow Chain will link to other nearby marked enemies, transferring 4/5/6/7% of the damage to them. Up to 5 marks can be active at the same time.",
      "descZh": "技能可對敵人附加影標，持續 5 秒。被標記的敵人受到傷害時，影鏈會連到附近其他被標記的敵人，將 4/5/6/7% 的傷害轉移給他們。同時最多存在 5 個影標。",
      "rarity": [
        4,
        5,
        6,
        7
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "影標解限": {
      "en": "Shadow Mark Overclock",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "The maximum number of Shadow Marks is increased by 2/3/4/5 and the damage transfer ratio is increased by 3%.",
      "descZh": "影標數量上限增加 2/3/4/5 個，且傷害轉移比例提升 3%。",
      "rarity": [
        2,
        3,
        4,
        5
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "影標增殖": {
      "en": "Shadow Mark Multiplication",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "When a Shadow Mark is activated, there is a 25/30/35/40% chance to apply a Shadow Mark to a nearby enemy. The Shadow Chain's damage transfer ratio is increased by 3%.",
      "descZh": "影標啟動時，有 25/30/35/40% 機率對附近敵人附加影標；影鏈的傷害轉移比例提升 3%。",
      "rarity": [
        25,
        30,
        35,
        40
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "影標連爆": {
      "en": "Shadow Mark Chain Detonation",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "When an enemy connected by Shadow Chain dies, all enemies on the chain will take 180/220/260/300 damage.",
      "descZh": "被影鏈連結的敵人死亡時，鏈上所有敵人會受到 180/220/260/300 傷害。",
      "rarity": [
        180,
        220,
        260,
        300
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "強鏈影標": {
      "en": "Enhanced Shadow Mark Chain",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Significantly expands the activation range of Shadow Chain and boosts the damage transfer ratio by 2/3/4/5%.",
      "descZh": "大幅擴展影鏈的啟動範圍，且傷害轉移比例提升 2/3/4/5%。",
      "rarity": [
        2,
        3,
        4,
        5
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "技能光槍": {
      "en": "Skill Light Spear",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Upon using a Skill, spawns 2 Light Spears, each dealing 840/1010/1180/1340 damage.",
      "descZh": "使用技能時生成 2 把光槍，每把造成 840/1010/1180/1340 傷害。",
      "rarity": [
        840,
        1010,
        1180,
        1340
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "傳承技光槍": {
      "en": "Legacy Light Spear",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, spawns 2 Light Spears, each dealing 600/720/840/960 damage.",
      "descZh": "使用傳承技時生成 2 把光槍，每把造成 600/720/840/960 傷害。",
      "rarity": [
        600,
        720,
        840,
        960
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "光槍禁錮": {
      "en": "Light Spear Root",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Light Spears can root enemies and deal 26/32/37/42% more damage.",
      "descZh": "光槍可定身敵人，且傷害提升 26/32/37/42%。",
      "rarity": [
        26,
        32,
        37,
        42
      ],
      "noteEn": "*Test if this works on Elites.",
      "noteZh": "待實測：對精英敵人是否生效",
      "match": "override"
    },
    "光槍強化": {
      "en": "Light Spear Upgrade",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Light Spears become bigger in size and deal 38/45/53/60% more damage.",
      "descZh": "光槍體積變大，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "override"
    },
    "聖光光槍": {
      "en": "Holy Light Spear",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "When a Light Spear expires, it turns into a holy light that deals 500/600/710/810 damage.",
      "descZh": "光槍消失時會化為聖光，造成 500/600/710/810 傷害。",
      "rarity": [
        500,
        600,
        710,
        810
      ],
      "noteEn": "Assuming equal rarities, Holy Light Spear has the best damage of the T2 Light Spear Tactics.",
      "noteZh": "在相同品質下，聖光光槍是光槍 T2 中傷害最高的",
      "match": "override"
    },
    "多重光槍": {
      "en": "Multi Light Spear",
      "tier": 3,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "There are now 2 more Light Spears and they deal 44/53/62/70% more damage.",
      "descZh": "光槍數量增加 2 把，且傷害提升 44/53/62/70%。",
      "rarity": [
        44,
        53,
        62,
        70
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "傳承技閃光": {
      "en": "Legacy Flash",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, generate Flash to Blind enemies for 1/1.5/2/2.5 seconds.",
      "descZh": "使用傳承技時產生閃光，使敵人致盲 1/1.5/2/2.5 秒。",
      "rarity": null,
      "noteEn": "Blind is a unique mechanic that gives enemies a chance to completely miss you. Works on bosses as well.",
      "noteZh": "致盲是獨特機制，有機率讓敵人完全打不到你，對首領也有效",
      "match": "single"
    },
    "閃光強化": {
      "en": "Flash Enhancement",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Flash deals 290/350/400/460 damage to enemies.",
      "descZh": "閃光對敵人造成 290/350/400/460 傷害。",
      "rarity": [
        290,
        350,
        400,
        460
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "廣域閃光": {
      "en": "Wide Flash",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Flash becomes 80/90/110/120% larger in range.",
      "descZh": "閃光的範圍擴大 80/90/110/120%。",
      "rarity": [
        80,
        90,
        110,
        120
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "受擊閃光": {
      "en": "Reactive Flash",
      "tier": 2,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon taking a hit, generate Flash to Blind enemies for 2.5/3/3.5/4 seconds.",
      "descZh": "受到攻擊時產生閃光，使敵人致盲 2.5/3/3.5/4 秒。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "致盲延長": {
      "en": "Blinding Extended",
      "tier": 3,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Flash now Blinds enemies for 0.5/1/1.5/2 more seconds.",
      "descZh": "閃光使敵人致盲的時間額外延長 0.5/1/1.5/2 秒。",
      "rarity": null,
      "noteEn": "Lets you prolong Blindness longer by alternating between your Legacy Skills.",
      "noteZh": "可交替使用兩個傳承技來延長致盲時間",
      "match": "order"
    },
    "普攻光波": {
      "en": "Attack Lightwave",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When your Attack hits an enemy, spawns a Lightwave that deals 103/124/144/165% damage of this Attack. It will be respawned again after 5s while you are not attacking.",
      "descZh": "普攻命中敵人時生成光波，造成該次普攻 103/124/144/165% 的傷害；未攻擊時會在 5 秒後重新生成。",
      "rarity": [
        103,
        124,
        144,
        165
      ],
      "noteEn": "Unique mechanic that when you attack with a move that hits multiple times in one instance, deals an insane amount of burst damage.",
      "noteZh": "獨特機制：以單次多段命中的招式攻擊時，可打出極高的爆發傷害",
      "match": "single"
    },
    "光波強化": {
      "en": "Lightwave Upgrade",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "The Lightwave becomes larger in range and deals 30/36/42/48% more damage.",
      "descZh": "光波的範圍擴大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "光波眩暈": {
      "en": "Lightwave Stun",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "The Lightwave can stun enemies for 1 second and deal 34/41/47/54",
      "descZh": "光波可使敵人眩暈 1 秒，且傷害提升 34/41/47/54%。",
      "rarity": [
        34,
        41,
        47,
        54
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "靈活充能": {
      "en": "Flexible Charging",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Lightwave can now charge even while you are attacking, and it deals 19/23/27/31% more damage.",
      "descZh": "光波在攻擊中也能充能，且傷害提升 19/23/27/31%。",
      "rarity": [
        19,
        23,
        27,
        31
      ],
      "noteEn": "Because the other T2 options limit you to only 1 Lightwave per encounter, this upgrade is the best option for pure damage.",
      "noteZh": "其他 T2 選項每場遭遇只能有 1 道光波，因此就純傷害而言這是最佳選擇",
      "match": "order"
    },
    "增強光波": {
      "en": "Empowered Lightwave",
      "tier": 3,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Lightwave takes 1 more second to charge, but it deals 48/58/67/77% more damage.",
      "descZh": "光波的充能時間增加 1 秒，但傷害提升 48/58/67/77%。",
      "rarity": [
        48,
        58,
        67,
        77
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "召喚光陣": {
      "en": "Summon Radiance",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Summons Radiance for 5 seconds. While in the range of Radiance, you deal 50/60/70/80% more damage.",
      "descZh": "召喚光陣，持續 5 秒。在光陣範圍內造成的傷害提升 50/60/70/80%。",
      "rarity": [
        50,
        60,
        70,
        80
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "光陣致盲": {
      "en": "Radiance Blind",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "When Radiance activates Blinds enemies for 1/1.5/2/2.5 seconds.",
      "descZh": "光陣啟動時使敵人致盲 1/1.5/2/2.5 秒。",
      "rarity": null,
      "noteEn": "Blind is a unique mechanic that gives enemies a chance to completely miss you. Works on bosses as well.",
      "noteZh": "致盲是獨特機制，有機率讓敵人完全打不到你，對首領也有效",
      "match": "order"
    },
    "光陣庇護": {
      "en": "Protection of Radiance",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "While in the range of Radiance, you take 15/19/22/25% less damage.",
      "descZh": "在光陣範圍內受到的傷害減少 15/19/22/25%。",
      "rarity": [
        15,
        19,
        22,
        25
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "光陣增傷": {
      "en": "Radiance Damage Boost",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "For every 1 enemies present within the range of Radiance, the damage boost is increased by 15/18/21/24%.",
      "descZh": "光陣範圍內每有 1 名敵人，傷害加成提升 15/18/21/24%。",
      "rarity": [
        15,
        18,
        21,
        24
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "大型光陣": {
      "en": "Large Radiance",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Radiance becomes 30/36/42/48% larger in range.",
      "descZh": "光陣的範圍擴大 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "聖光標記": {
      "en": "Holy Mark",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "While Dashing, inflicts a Holy Mark on each enemy you pass through. Breaking the Holy Mark will deal 260/310/360/420 damage.",
      "descZh": "衝刺途中對穿過的每名敵人附加聖光標記；擊破聖光標記會造成 260/310/360/420 傷害。",
      "rarity": [
        260,
        310,
        360,
        420
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "穩定標記": {
      "en": "Stable Mark",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Holy Mark deals 50/40/30/20% less damage, but it can take effect multiple times.",
      "descZh": "聖光標記的傷害降低 50/40/30/20%，但可多次觸發。",
      "rarity": [
        50,
        40,
        30,
        20
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "標記強化": {
      "en": "Mark Boost",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Holy Mark now deals AoE damage and damage is increased by 30/35/40/45%.",
      "descZh": "聖光標記改為造成範圍傷害，且傷害提升 30/35/40/45%。",
      "rarity": [
        30,
        35,
        40,
        45
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "隨機標記": {
      "en": "Random Mark",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Every 1 second, inflicts Holy Mark on a random enemy. That Holy Mark deals 290/360/400/460 damage.",
      "descZh": "每 1 秒對隨機敵人附加聖光標記，該標記造成 290/360/400/460 傷害。",
      "rarity": [
        290,
        360,
        400,
        460
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "標記共鳴": {
      "en": "Mark Resonance",
      "tier": 3,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "When the Holy Mark on an enemy is triggered, the Holy Marks on other enemies are also triggered.",
      "descZh": "敵人身上的聖光標記被觸發時，其他敵人身上的聖光標記也會一併觸發。",
      "rarity": null,
      "noteEn": "Currently unknown as to what rarity changes.",
      "noteZh": "品質影響的數值目前未知",
      "match": "order"
    },
    "衝刺飛劍": {
      "en": "Dash Daggers",
      "tier": 1,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "After Dashing, conjures 2 Daggers that stab enemies, each dealing 120/140/170/190 damage.",
      "descZh": "衝刺後召喚 2 把飛劍刺擊敵人，每把造成 120/140/170/190 傷害。",
      "rarity": [
        120,
        140,
        170,
        190
      ],
      "noteEn": "Daggers appear where the dash started and don't move. There is an internal cooldown to prevent spamming daggers.",
      "noteZh": "飛劍出現在衝刺起點且不會移動；有內建冷卻以防止連續生成",
      "match": "single"
    },
    "遠程飛劍": {
      "en": "Long Traveling Daggers",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Daggers travel across a longer distance and deal 38/45/53/60% more damage.",
      "descZh": "飛劍的飛行距離變長，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "嗜血飛劍": {
      "en": "Bloodstained Daggers",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "For every 2 hits landed by the Daggers, the damage is increased by 12/14/16/18%.",
      "descZh": "飛劍每命中 2 次，傷害提升 12/14/16/18%。",
      "rarity": [
        12,
        14,
        16,
        18
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "閃避飛劍": {
      "en": "Dodge Daggers",
      "tier": 2,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "Upon dodging, conjures additional Daggers in the front, each dealing 380/460/540/610 damage.",
      "descZh": "閃避時在前方額外召喚飛劍，每把造成 380/460/540/610 傷害。",
      "rarity": [
        380,
        460,
        540,
        610
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "多重飛劍": {
      "en": "Multi Daggers",
      "tier": 3,
      "enSlots": [
        "Dash"
      ],
      "slots": [
        "dash"
      ],
      "descEn": "There are now 3 Daggers, and each deals 24/29/33/38% more damage.",
      "descZh": "飛劍改為 3 把，且每把傷害提升 24/29/33/38%。",
      "rarity": [
        24,
        29,
        33,
        38
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "普攻撕裂": {
      "en": "Attack Rend",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When your Attack has hit the same enemy 4 times, it inflicts Rend on them. While it is active, whenever that enemy moves, they take 110/130/160/180 damage.",
      "descZh": "普攻對同一名敵人命中 4 次時使其撕裂；撕裂生效期間，該敵人每次移動都會受到 110/130/160/180 傷害。",
      "rarity": [
        110,
        130,
        160,
        180
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "技能撕裂": {
      "en": "Skill Rend",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "When your Skill lands a hit, it inflicts Rend on the enemy. While it is active, whenever that enemy moves, they take 110/130/160/180 damage.",
      "descZh": "技能命中敵人時使其撕裂；撕裂生效期間，該敵人每次移動都會受到 110/130/160/180 傷害。",
      "rarity": [
        110,
        130,
        160,
        180
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "slot"
    },
    "短程撕裂": {
      "en": "Shorter Ranged Rend",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "The distance required to trigger a Rend damage tick is reduced by 20/30/40/50%.",
      "descZh": "觸發撕裂傷害所需的移動距離縮短 20/30/40/50%。",
      "rarity": [
        20,
        30,
        40,
        50
      ],
      "noteEn": "Very important against enemies that hardly move or cannot be moved.",
      "noteZh": "對幾乎不移動或無法被移動的敵人特別重要",
      "match": "order"
    },
    "撕裂強化": {
      "en": "Rend Boost",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "The damage ticks of Rend are increased by 25/30/35/40 with every tick.",
      "descZh": "撕裂每次跳動的傷害提升 25/30/35/40。",
      "rarity": [
        25,
        30,
        35,
        40
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "撕裂衝擊": {
      "en": "Rending Impact",
      "tier": 2,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Enemies inflicted with Rend lose their Super Armor for 5 seconds and take extra 10/12/14/16% damage.",
      "descZh": "被撕裂的敵人會失去霸體 5 秒，並額外受到 10/12/14/16% 傷害。",
      "rarity": [
        10,
        12,
        14,
        16
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "終結撕裂": {
      "en": "Fatal Rend",
      "tier": 3,
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "slots": [
        "basic",
        "skill"
      ],
      "descEn": "Attacking an Enemy that has less than 11/14/17/20% HP with Rend will instantly eliminate them. This also works on Elite Enemies when their HP is lower than x/x/~5.5/x%.",
      "descZh": "以撕裂攻擊 HP 低於 11/14/17/20% 的敵人時會立即將其消滅；對精英敵人同樣有效，門檻為 x/x/約 5.5/x%。",
      "rarity": [
        11,
        14,
        17,
        20
      ],
      "noteEn": "The HP threshold for bosses is not specified in-game. Numbers are from testing.",
      "noteZh": "首領的 HP 門檻遊戲內未標示，數字來自實測",
      "match": "order"
    },
    "召喚刃環": {
      "en": "Summon Blade Ring",
      "tier": 1,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "When there are enemies nearby, Blade Rings automatically spawn and start cutting them, dealing 200/240/280/320 damage each time.",
      "descZh": "附近有敵人時會自動生成刃環並開始切割，每次造成 200/240/280/320 傷害。",
      "rarity": [
        200,
        240,
        280,
        320
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "single"
    },
    "精準切割": {
      "en": "Precision Cut",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "The Blade Rings attack in a more clustered manner and deal 38/45/53/60% more damage in total.",
      "descZh": "刃環的攻擊更集中，且總傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "大型刃環": {
      "en": "Large Blade Ring",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Blade Rings become larger in range and deal 30/36/42/48% more damage.",
      "descZh": "刃環的範圍擴大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "刃環牽引": {
      "en": "Blade Ring Pull",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Blade Rings pull enemies and deal 26/32/37/42% more damage.",
      "descZh": "刃環會牽引敵人，且傷害提升 26/32/37/42%。",
      "rarity": [
        26,
        32,
        37,
        42
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "受擊刃環": {
      "en": "Struck Blade Ring",
      "tier": 2,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "Upon taking a hit, conjures a Blade Ring that deals 670/810/940/1080 damage.",
      "descZh": "受到攻擊時召喚刃環，造成 670/810/940/1080 傷害。",
      "rarity": [
        670,
        810,
        940,
        1080
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "雙生刃環": {
      "en": "Double Blade Rings",
      "tier": 3,
      "enSlots": [
        "Summon"
      ],
      "slots": [
        "summon"
      ],
      "descEn": "When generating Blade Rings, generate 1 more, dealing 130/150/180/200 damage this time.",
      "descZh": "生成刃環時額外生成 1 個，此次造成 130/150/180/200 傷害。",
      "rarity": [
        130,
        150,
        180,
        200
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "技能風暴": {
      "en": "Skill Bladestorm",
      "tier": 1,
      "enSlots": [
        "Skill"
      ],
      "slots": [
        "skill"
      ],
      "descEn": "Upon using a Skill, spawns a Bladestorm that deals 70/80/90/110 damage with each cut.",
      "descZh": "使用技能時生成刀刃風暴，每次切割造成 70/80/90/110 傷害。",
      "rarity": [
        70,
        80,
        90,
        110
      ],
      "noteEn": "*In-game name is \"Storm of Skills\"",
      "noteZh": "遊戲內名稱為「技能風暴」",
      "match": "slot"
    },
    "傳承技風暴": {
      "en": "Legacy Bladestorm",
      "tier": 1,
      "enSlots": [
        "Legacy"
      ],
      "slots": [
        "heritage"
      ],
      "descEn": "Upon using your Legacy, spawns a Bladestorm that deals 30/40/50/60 damage with each cut.",
      "descZh": "使用傳承技時生成刀刃風暴，每次切割造成 30/40/50/60 傷害。",
      "rarity": [
        30,
        40,
        50,
        60
      ],
      "noteEn": "*In-game name is \"Legacy Storm\"",
      "noteZh": "遊戲內名稱為「傳承技風暴」",
      "match": "slot"
    },
    "牽引風暴": {
      "en": "Pulling Bladestorm",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "The Bladestorm pulls enemies and deals 38/45/53/60% more damage.",
      "descZh": "刀刃風暴會牽引敵人，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "*In-game name is \"Pulling Storm\"",
      "noteZh": "遊戲內名稱為「牽引風暴」",
      "match": "order"
    },
    "擴大風暴": {
      "en": "Enlarged Bladestorm",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Bladestorm cuts enemies in a larger range and deals 30/36/42/48% more damage.",
      "descZh": "刀刃風暴的切割範圍擴大，且傷害提升 30/36/42/48%。",
      "rarity": [
        30,
        36,
        42,
        48
      ],
      "noteEn": "*In-game name is \"Enlarged Storm\"",
      "noteZh": "遊戲內名稱為「擴大風暴」",
      "match": "order"
    },
    "追蹤風暴": {
      "en": "Seeking Bladestorm",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "The Bladestorm seeks enemies horizontally and deals 38/45/53/60% more damage.",
      "descZh": "刀刃風暴會水平追擊敵人，且傷害提升 38/45/53/60%。",
      "rarity": [
        38,
        45,
        53,
        60
      ],
      "noteEn": "*In-game name is \"Seeking Bladestorm\"",
      "noteZh": "遊戲內名稱為「追蹤刀刃風暴」",
      "match": "order"
    },
    "受擊風暴": {
      "en": "Reactive Bladestorm",
      "tier": 2,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "Upon taking a hit, spawns Bladestorm that deals 80/100/120/140 damage with each cut.",
      "descZh": "受到攻擊時生成刀刃風暴，每次切割造成 80/100/120/140 傷害。",
      "rarity": [
        80,
        100,
        120,
        140
      ],
      "noteEn": "*In-game name is \"Reactive Storm\"",
      "noteZh": "遊戲內名稱為「受擊風暴」",
      "match": "order"
    },
    "風暴加速": {
      "en": "Accelerating Bladestorm",
      "tier": 3,
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "slots": [
        "heritage",
        "skill"
      ],
      "descEn": "The Bladestorm spins 40% faster, and deals 9/11/13/15% more damage.",
      "descZh": "刀刃風暴的旋轉速度快 40%，且傷害提升 9/11/13/15%。",
      "rarity": [
        9,
        11,
        13,
        15
      ],
      "noteEn": "*In-game name is \"Accelerating Storm\"",
      "noteZh": "遊戲內名稱為「加速風暴」",
      "match": "order"
    },
    "普攻飛刃": {
      "en": "Attack Flying Blade",
      "tier": 1,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "When landing an Attack, a Flying Blade is summoned that deals 100/120/140/160 damage. The Flying Blade lasts 5 seconds and using a Heavy Attack recalls the blade early, dealing additional damage.",
      "descZh": "普攻命中時召喚飛刃，造成 100/120/140/160 傷害。飛刃持續 5 秒，使用重擊可提前收回並造成額外傷害。",
      "rarity": [
        100,
        120,
        140,
        160
      ],
      "noteEn": "Heavy Attacks are any attacks that require you to hold the Attack button. Sending the Blades out can be done with any attack that uses the Attack or Dash button.",
      "noteZh": "重擊指任何需按住攻擊鍵的招式；以普攻鍵或衝刺鍵發動的攻擊都能射出飛刃",
      "match": "single"
    },
    "潛伏飛刃": {
      "en": "Lurking Flying Blade",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "The Flying Blade lasts 3 seconds longer and inflicts an additional 40/50/60/70 damage.",
      "descZh": "飛刃的持續時間延長 3 秒，且額外造成 40/50/60/70 傷害。",
      "rarity": [
        40,
        50,
        60,
        70
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "飛刃旋風": {
      "en": "Flying Blade Whirlwind",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Upon executing a perfect dodge, generates 9/8/7/6 Flying Blades around the character, which lasts 5 seconds. Flying Blades deal an additional 40/50/60/70 damage.",
      "descZh": "完美閃避時在角色周圍生成 9/8/7/6 把飛刃，持續 5 秒；飛刃額外造成 40/50/60/70 傷害。",
      "rarity": [
        9,
        8,
        7,
        6
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "飛刃衝擊": {
      "en": "Flying Blade Impact",
      "tier": 2,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "Retrieving Flying Blades enhances the knockback effect. Flying Blades inflict an additional 60/70/80/90 damage.",
      "descZh": "收回飛刃時會增強擊退效果；飛刃額外造成 60/70/80/90 傷害。",
      "rarity": [
        60,
        70,
        80,
        90
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    },
    "飛刃斬": {
      "en": "Flying Blade Slash",
      "tier": 3,
      "enSlots": [
        "Attack"
      ],
      "slots": [
        "basic"
      ],
      "descEn": "A single target struck by multiple Flying Blades simultaneously sustains escalating damage, beginning at 20/25/30/35 and increasing with the number of Flying Blades that hit the enemy.",
      "descZh": "被多把飛刃同時擊中的單一目標會受到遞增傷害，起始為 20/25/30/35，並隨命中該敵人的飛刃數量增加。",
      "rarity": [
        20,
        25,
        30,
        35
      ],
      "noteEn": "",
      "noteZh": "",
      "match": "order"
    }
  },
  "duals": {
    "火環燃燒": {
      "en": "Ring of Fire Burn",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Ring of Fire can inflict Burn on enemies so they take 550 damage per second.",
      "descZh": "火環可使敵人燃燒，每秒造成 550 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill/Dash Burn",
        "Legacy Ring of FIre"
      ],
      "match": "order"
    },
    "火焰飛劍": {
      "en": "Fire Dagger",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Dagger is now upgraded to Fire Dagger. Upon hitting an enemy, inflicts Burn on them so they take 340 damage per second.",
      "descZh": "飛劍升級為火焰飛劍，命中敵人時使其燃燒，每秒造成 340 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Dash Burn.",
      "noteZh": "與衝刺燃燒無法並存",
      "reqEn": [
        "Attack/Skill Burn",
        "Dash Daggers"
      ],
      "match": "order"
    },
    "燃燒爆彈": {
      "en": "Burn Bomb",
      "enSlots": [
        "Dash",
        "Attack",
        "Skill"
      ],
      "descEn": "Attack an enemy affected by Burn triggers your Fire Projectiles, with each projectile dealing 600 damage.",
      "descZh": "攻擊燃燒中的敵人會觸發火彈，每顆火彈造成 600 傷害。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill. Plan accordingly. Can be triggered by both Attacks and Skills.",
      "noteZh": "與技能類策略重疊，需自行取捨；普攻與技能皆可觸發",
      "reqEn": [
        "Skill/Legacy Fire Projectile",
        "Attack/Dash Burn"
      ],
      "match": "order"
    },
    "爆燃火彈": {
      "en": "Bursting Fire Projectile",
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "descEn": "Fire Projectiles deal 100% more damage to Burning enemies.",
      "descZh": "火彈對燃燒中的敵人造成 100% 額外傷害。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill. Plan accordingly.",
      "noteZh": "與技能類策略重疊，需自行取捨",
      "reqEn": [
        "Skill/Legacy Fire Projectile",
        "Attack/Skill/Dash Burn"
      ],
      "match": "order"
    },
    "雷雲火彈": {
      "en": "Thundercloud Fire Projectile",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Thundercloud additionally fires Fire Projectiles, each dealing 220 damage.",
      "descZh": "雷雲會額外發射火彈，每顆造成 220 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Fire Projectile or Skill Lightning.",
      "noteZh": "與傳承技火彈、技能閃電無法並存",
      "reqEn": [
        "Skill Fire Projectile",
        "Legacy Thunderstorm"
      ],
      "match": "order"
    },
    "風暴火環": {
      "en": "Storm Ring of Fire",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "Bladestorm spawns Rings of Fire, dealing 1200 damage.",
      "descZh": "刀刃風暴會生成火環，造成 1200 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Ring of Fire",
        "Storm of Skills"
      ],
      "match": "order"
    },
    "焚彈火環": {
      "en": "Devouring Ring of Fire",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "The Ring of Fire can devour projectiles, generating protective Flames that encircle and intercept incoming projectiles. These Flames deal 300 damage when making contact with an enemy.",
      "descZh": "火環可吞噬子彈，生成環繞自身的防護火焰攔截來襲子彈，火焰接觸敵人時造成 300 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Ring of Fire",
        "Summon Blade Ring"
      ],
      "match": "order"
    },
    "地雷火焰": {
      "en": "Flame Mine",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Upon detonation, a Mine leaves behind flames and deals 400 damage per second to the passing enemies.",
      "descZh": "地雷引爆後留下火焰，對經過的敵人每秒造成 400 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Place Mine",
        "Attack/Skill/Dash Burn"
      ],
      "match": "order"
    },
    "地雷閃光": {
      "en": "Flash Mine",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Upon detonation, a Mine generates a Flash.",
      "descZh": "地雷引爆時會產生閃光。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Place Mine",
        "Legacy Flash"
      ],
      "match": "order"
    },
    "火精靈引爆": {
      "en": "Fire Spirit Detonation",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Upon hitting a Burning enemy, Fire Spirits have a 50% chance to make them explode, dealing 1150 damage.",
      "descZh": "火精靈擊中燃燒中的敵人時，有 50% 機率使其爆炸，造成 1150 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Attack Burn.",
      "noteZh": "與普攻燃燒無法並存",
      "reqEn": [
        "Fire Spirit Assist",
        "Skill/Dash Burn"
      ],
      "match": "order"
    },
    "火彈火精靈": {
      "en": "Fire Projectile Fire Spirit",
      "enSlots": [
        "Skill/Legacy"
      ],
      "descEn": "Upon hitting or killing an enemy, the Fire Projectiles spawn Fire Spirits, each dealing 300 damage.",
      "descZh": "火彈命中或擊殺敵人時會生成火精靈，每隻造成 300 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Fire Spirit Assist",
        "Skill/Legacy Fire Projectile"
      ],
      "match": "order"
    },
    "火精靈彈跳": {
      "en": "Fire Spirit Bounce",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Fire Spirits can bounce between enemies and deal 280 damage with each bounce.",
      "descZh": "火精靈可在敵人之間彈跳，每次彈跳造成 280 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Fire Spirit Assist",
        "Skill Lightning/Legacy Thunderstorm"
      ],
      "match": "order"
    },
    "冰錐極寒": {
      "en": "Freezing Icicle",
      "enSlots": [
        "Dash",
        "Legacy"
      ],
      "descEn": "When an Icicle inflicts Cold on an enemy, their stacks of Cold is increased by 3.",
      "descZh": "冰錐使敵人寒冷時，寒冷層數額外增加 3 層。",
      "rarity": null,
      "noteEn": "There's two Freezing Icicles. This one is found in the Cold tree.",
      "noteZh": "有兩條同名 Freezing Icicle，此條屬寒冷樹",
      "reqEn": [
        "Frost Burst",
        "Dash/Legacy Icicle"
      ],
      "match": "order"
    },
    "冰霜脈衝": {
      "en": "Frost Impulse",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "Frost Burst is now upgraded to a Frost Impulse that deals 36% more damage and Paralyzes enemies.",
      "descZh": "寒氣爆發升級為冰霜脈衝，傷害提升 36%，並使敵人麻痺。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill. Plan accordingly.",
      "noteZh": "與技能類策略重疊，需自行取捨",
      "reqEn": [
        "Frost Burst",
        "Skill Lightning"
      ],
      "match": "order"
    },
    "寒冰毒霧": {
      "en": "Frost Miasma",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Miasma is now upgraded to a Frost Miasma that can Freeze enemies.",
      "descZh": "瘴氣升級為寒冰毒霧，可冰凍敵人。",
      "rarity": null,
      "noteEn": "Not possible with Attack Cold or Skill Poison Ring.",
      "noteZh": "與普攻寒冷、技能毒環無法並存",
      "reqEn": [
        "Freezing Cold",
        "Attack Miasma"
      ],
      "match": "order"
    },
    "玄冰領域": {
      "en": "Frozen Domain",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Attacking with the Mystic Ice Sword briefly Freezes the enemy for 1.5 seconds.",
      "descZh": "以玄冰劍攻擊時會使敵人短暫冰凍 1.5 秒。",
      "rarity": null,
      "noteEn": "Not possible with Attack Cold or the Frost Burst T2 Tactic.",
      "noteZh": "與普攻寒冷或寒氣爆發 T2 無法並存",
      "reqEn": [
        "Freezing Cold",
        "Mystic Ice Sword"
      ],
      "match": "order"
    },
    "光槍冰錐": {
      "en": "Light Spear Icicle",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "When a Light Spear pierces into the ground, spawns Icicles nearby, dealing 600 damage.",
      "descZh": "光槍插入地面時，會在附近生成冰錐，造成 600 傷害。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Legacy. Plan accordingly.",
      "noteZh": "與傳承技類策略重疊，需自行取捨",
      "reqEn": [
        "Dash/Legacy Icicle",
        "Skill/Legacy Light Spear"
      ],
      "match": "order"
    },
    "冰凍冰錐": {
      "en": "Freezing Icicle",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "When an enemy is Frozen, Icicles start to spread, dealing 500 damage.",
      "descZh": "敵人被冰凍時，冰錐開始擴散，造成 500 傷害。",
      "rarity": null,
      "noteEn": "There's two Freezing Icicles. This one is found in the Icicle tree.",
      "noteZh": "有兩條同名 Freezing Icicle，此條屬冰錐樹",
      "reqEn": [
        "Dash/Legacy Icicle",
        "Freezing Cold"
      ],
      "match": "order"
    },
    "冰爆冰錐": {
      "en": "Ice Explosion Cone",
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "descEn": "When Hail explodes, it creates Icicles on the ground, inflicting 150 damage.",
      "descZh": "冰雹爆炸時會在地面生成冰錐，造成 150 傷害。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Legacy. Plan accordingly.",
      "noteZh": "與傳承技類策略重疊，需自行取捨",
      "reqEn": [
        "Dash/Legacy Icicle",
        "Skill/Legacy Hail"
      ],
      "match": "order"
    },
    "無盡冰刺": {
      "en": "Endless Ice Spikes",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Ice Spikes spawn over time and can seek enemies from farther away. Each Ice Spike deals 57% damage of the basic Ice Spikes.",
      "descZh": "冰刺會隨時間持續生成，並能從更遠處追擊敵人；每根冰刺造成基礎冰刺 57% 的傷害。",
      "rarity": null,
      "noteEn": "*Test if this counts for only T1 (~125 Damage) or the T2 Tactics (More than 125).",
      "noteZh": "待實測：僅作用於 T1（約 125 傷害），或包含 T2 策略（高於 125）",
      "reqEn": [
        "Summon Ice Spike",
        "Freezing Cold"
      ],
      "match": "order"
    },
    "冰刺再生": {
      "en": "Ice Spike Respawn",
      "enSlots": [
        "Summon"
      ],
      "descEn": "When an Ice Spike hits an enemy that has no Cold stacks, generates 3 more Ice Spikes.",
      "descZh": "冰刺擊中未帶有寒冷層數的敵人時，會額外生成 3 根冰刺。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Ice Spike",
        "Frost Burst"
      ],
      "match": "order"
    },
    "影子冰刺": {
      "en": "Shadow Ice Spike",
      "enSlots": [
        "Dash"
      ],
      "descEn": "When you have Ice Spikes, your Shadow also has Ice Spikes.",
      "descZh": "擁有冰刺時，影子也擁有冰刺。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Ice Spike",
        "Dashing Shadow"
      ],
      "match": "order"
    },
    "雹雲冰刺": {
      "en": "Hail Clouds Ice Spikes",
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "descEn": "The Hail Cloud simultaneously releases Ice Spikes, each dealing 300 damage.",
      "descZh": "冰雹雲同時釋放冰刺，每根造成 300 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Ice Spikes",
        "Skill/Legacy Hail"
      ],
      "match": "order"
    },
    "冰雷雲霧": {
      "en": "Frozen Lightning Cloud",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "The Lightning Cloud will morph into a Frozen Lightning Cloud, unleashing both Lightning Chains and Hail, with each piece of Hail inflicting 300 damage.",
      "descZh": "雷雲轉化為冰凍雷雲，同時釋放閃電鏈與冰雹，每顆冰雹造成 300 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Hail.",
      "noteZh": "與傳承技冰雹無法並存",
      "reqEn": [
        "Skill Hail",
        "Legacy Thunderstorm"
      ],
      "match": "order"
    },
    "冰落光陣": {
      "en": "Radiance Quick Ice",
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "descEn": "The frequency of Hail near a Radiance is significantly increased.",
      "descZh": "光陣附近的冰雹生成頻率顯著提升。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy Hail",
        "Summon Radiance"
      ],
      "match": "order"
    },
    "冰爆地雷": {
      "en": "Ice Explosion Mine",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Mines transform into Ice Mines. When the Ice Mines detonate, they apply 4 stacks of Cold to nearby enemies and launch Hail, each dealing 500 damage.",
      "descZh": "地雷轉化為冰霜地雷，引爆時使周圍敵人堆疊 4 層寒冷並發射冰雹，每顆造成 500 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy Hail",
        "Place Mine"
      ],
      "match": "order"
    },
    "冰擊化劍": {
      "en": "Flash Freeze Repair",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "Triggering Frost Burst significantly boosts the repair progress of the Mystic Ice Sword.",
      "descZh": "觸發寒氣爆發時，玄冰劍的修復進度大幅提升。",
      "rarity": null,
      "noteEn": "Not possible with Attack Cold or the Freezing Cold T2 Tactics.",
      "noteZh": "與普攻寒冷或聚寒成冰 T2 無法並存",
      "reqEn": [
        "Mystic Ice Sword",
        "Frost Burst"
      ],
      "match": "order"
    },
    "冰劍刺擊": {
      "en": "Ice Sword Thrust",
      "enSlots": [
        "Attack"
      ],
      "descEn": "The Mystic Ice Sword performs an additional piercing attack the initial attack.",
      "descZh": "玄冰劍在首次攻擊後會追加一次穿刺攻擊。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Mystic Ice Sword",
        "Dash Daggers"
      ],
      "match": "order"
    },
    "光爆玄冰": {
      "en": "Light Explosion Mystic Ice",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Detonating the Holy Mark repairs the Mystic Ice Sword and the Mystic Ice Sword's attack can trigger the Holy Mark detonation.",
      "descZh": "引爆聖光標記時會修復玄冰劍，且玄冰劍的攻擊可觸發聖光標記引爆。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Mystic Ice Sword",
        "Dash Holy Mark"
      ],
      "match": "order"
    },
    "閃電感電": {
      "en": "Thunder and Lightning",
      "enSlots": [
        "Attack",
        "Legacy",
        "Skill"
      ],
      "descEn": "When a Lightning Chain links to an enemy inflicted with Lightning, instantly triggers an Impulse.",
      "descZh": "閃電鏈連到已感電的敵人時，立即觸發一次脈衝。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill and Legacy. Plan accordingly.",
      "noteZh": "與技能類、傳承技類策略重疊，需自行取捨",
      "reqEn": [
        "Skill/Legacy Lightning Mark",
        "Attack/Legacy/Skill Lightning Chain"
      ],
      "match": "order"
    },
    "電樁感電": {
      "en": "Electric Pillar Pulse",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "The electric shock from the Electric Pillar triggers a Pulse after hitting the enemy 10 times, dealing 400 damage.",
      "descZh": "電樁的電擊在擊中敵人 10 次後觸發脈衝，造成 400 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Lightning.",
      "noteZh": "與傳承技感電無法並存",
      "reqEn": [
        "Skill Lightning",
        "Legacy Electric Pillar"
      ],
      "match": "order"
    },
    "黑洞脈衝": {
      "en": "Blackhole Impulse",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "When a Blackhole spawns or despawns, triggers an Impulse, dealing 430 damage.",
      "descZh": "黑洞生成或消失時觸發脈衝，造成 430 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Lightning Mark.",
      "noteZh": "與傳承技感電無法並存",
      "reqEn": [
        "Skill Lightning Mark",
        "Legacy Blackhole"
      ],
      "match": "order"
    },
    "飛刃脈衝": {
      "en": "Flying Blade Pulse",
      "enSlots": [
        "Attack"
      ],
      "descEn": "After an enemy is struck by a returning Flying Blade 6 times, it activates a Pulse, causing 400 damage.",
      "descZh": "敵人被回旋飛刃擊中 6 次後，會觸發一次脈衝，造成 400 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy Lightning",
        "Attack Flying Blade"
      ],
      "match": "order"
    },
    "電球閃電": {
      "en": "Lightning Orb Thunder",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Upon hitting an enemy, Lightning Orbs conjure a Lighting Chain that chains to nearby enemies, dealing 260 damage each time.",
      "descZh": "電球擊中敵人時召喚閃電鏈連結周圍敵人，每段造成 260 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy/Attack Lightning Chain",
        "Orbiting Lightning Orb"
      ],
      "match": "order"
    },
    "觸手閃電": {
      "en": "Tentacle Lightning",
      "enSlots": [
        "Summon"
      ],
      "descEn": "For every 3 hits the Tentacles land, triggers Lightning Chains. Each link deals 340 damage.",
      "descZh": "觸手每命中 3 次就會觸發閃電鏈，每段造成 340 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy/Attack Lightning Chain",
        "Summon Tentacles"
      ],
      "match": "order"
    },
    "光槍落雷": {
      "en": "Light Spear Thunderbolt",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "When a Light Spear pierces into the ground, summons Thunderbolts, dealing 1200 damage.",
      "descZh": "光槍插入地面時召喚落雷，造成 1200 傷害。",
      "rarity": null,
      "noteEn": "*Test if thunder spawns on spears or on player",
      "noteZh": "待實測：落雷生成在光槍上還是玩家身上",
      "reqEn": [
        "Dash Thunderbolt",
        "Skill/Legacy Light Spear"
      ],
      "match": "order"
    },
    "電球落雷": {
      "en": "Lightning Orb Thunderbolt",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Upon hitting an enemy, Lightning Orbs summon Thunderbolts, dealing 320 damage.",
      "descZh": "電球擊中敵人時召喚落雷，造成 320 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Thunderbolt",
        "Orbiting Lightning Orb"
      ],
      "match": "order"
    },
    "落雷懲戒": {
      "en": "Intimidating Thunderbolt",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "When an enemy has been hit by a Shadow Spike, that enemy gets struck by a Thunderbolt that deals 900 damage every time they attack.",
      "descZh": "敵人被影刺擊中後，每次發動攻擊都會被落雷擊中，造成 900 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Thunderbolt",
        "Attack/Skill Shadow Spike"
      ],
      "match": "order"
    },
    "追蹤落雷": {
      "en": "Seeker Thunderbolt",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Thunderbolts seek enemies inflicted with Lightning and deal 40% more damage.",
      "descZh": "落雷會追擊已感電的敵人，且傷害提升 40%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Thunderbolt",
        "Skill/Legacy Lightning Mark"
      ],
      "match": "order"
    },
    "電球發射": {
      "en": "Lightning Orb Shot",
      "enSlots": [
        "Summon"
      ],
      "descEn": "The Lightning Orbs explode upon hitting an enemy, dealing 400 damage. When they expire, the Lightning Orbs spread out, each dealing 1000 damage.",
      "descZh": "電球擊中敵人時爆炸，造成 400 傷害；電球消失時會向外擴散，每顆造成 1000 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Orbiting Lightning Orb",
        "Skill/Legacy Fire Projectile"
      ],
      "match": "order"
    },
    "感電電球": {
      "en": "Lightning Orb",
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "descEn": "When an enemy is inflicted with Lightning, a Lightning Orb is generated that tracks the enemy, dealing 500 damage.",
      "descZh": "敵人感電時會生成追蹤該敵人的電球，造成 500 傷害。",
      "rarity": null,
      "noteEn": "Weird naming convention, yes it's different from Orbiting Lightning Orb.",
      "noteZh": "命名特殊，與環繞電球是不同條目",
      "reqEn": [
        "Orbiting Lightning Orbs",
        "Skill/Legacy Lightning"
      ],
      "match": "order"
    },
    "影子電球": {
      "en": "Shadow Lightning Orb",
      "enSlots": [
        "Summon"
      ],
      "descEn": "When generating Lightning Orbs, you generate the same amount of Shadow Lightning Orbs.",
      "descZh": "生成電球時，同時生成相同數量的影子電球。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Orbiting Lightning Orb",
        "Dashing Shadow"
      ],
      "match": "order"
    },
    "傳導電樁": {
      "en": "Conductive Electric Pillar",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "When two or more Electric Pillars are activated, Lightning Orbs are summoned to travel between the Electric Pillars, each dealing 1200 damage.",
      "descZh": "同時存在兩座以上電樁時，會召喚電球在電樁之間穿梭，每顆造成 1200 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Orbiting Lightning Orbs",
        "Legacy Electric Pillar"
      ],
      "match": "order"
    },
    "電樁鏈接": {
      "en": "Electric Pillar Links",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Electrical Links will periodically form between nearby Electric Pillars, dealing 150 damage to hit enemies.",
      "descZh": "鄰近的電樁之間會週期性形成電弧連結，對命中的敵人造成 150 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Thunderstorm.",
      "noteZh": "與電閃雷鳴無法並存",
      "reqEn": [
        "Legacy Electric Pillar",
        "Attack/Skill Lightning Chain"
      ],
      "match": "order"
    },
    "光陣電樁": {
      "en": "Radiance Electric Pillar",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Upon deploying a Radiance, two additional Electric Pillars are summoned, lasting 8 seconds. Each electric shock inflicts 150 damage. Within the Radiance, the electric shock frequency of Electric Pillars is increased by 50%.",
      "descZh": "展開光陣時額外召喚兩座電樁，持續 8 秒，每次電擊造成 150 傷害；光陣範圍內電樁的電擊頻率提升 50%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Electric Pillar",
        "Summon Radiance"
      ],
      "match": "order"
    },
    "電解化毒": {
      "en": "Electric Detoxification",
      "enSlots": [
        "Attack",
        "Legacy",
        "Skill"
      ],
      "descEn": "Lightning Chain inflicts Poison on enemies.",
      "descZh": "閃電鏈會使敵人中毒。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Attack and Skill. Plan accordingly.",
      "noteZh": "與普攻類、技能類策略重疊，需自行取捨",
      "reqEn": [
        "Attack/Skill Poison",
        "Attack/Legacy/Skill Lightning Chain"
      ],
      "match": "order"
    },
    "劇毒史萊姆": {
      "en": "Poison Slime",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Slimes inflict Poison on enemies.",
      "descZh": "史萊姆會使敵人中毒。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill Poison",
        "Summon Slime"
      ],
      "match": "order"
    },
    "毒液催化": {
      "en": "Venom Enhancement",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "When Venom deals damage to Poisoned enemies, it reduces the Poison duration by 0.3 seconds.",
      "descZh": "毒液對中毒敵人造成傷害時，會縮短 0.3 秒的中毒持續時間。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill. Plan accordingly.",
      "noteZh": "與技能類策略重疊，需自行取捨",
      "reqEn": [
        "Attack/Skill Posion",
        "Skill/Legacy Venom"
      ],
      "match": "order"
    },
    "分裂史萊姆": {
      "en": "Splitting Slimes",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Slimes can split.",
      "descZh": "史萊姆可以分裂。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Slime",
        "Fire Spirit Assist"
      ],
      "match": "order"
    },
    "附身史萊姆": {
      "en": "Sticky Slime",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Slime will stick to the enemy after hitting, causing 580 damage per second until it disappears.",
      "descZh": "史萊姆擊中敵人後會黏附在敵人身上，直到消失為止每秒造成 580 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Slime",
        "Dash Holy Mark"
      ],
      "match": "order"
    },
    "毒液史萊姆": {
      "en": "Venom Slime",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Slime generates Venom upon landing, inflicting 140 damage every 0.5 seconds.",
      "descZh": "史萊姆落地時會生成毒液，每 0.5 秒造成 140 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Slime",
        "Skill/Legacy Venom"
      ],
      "match": "order"
    },
    "中毒毒彈": {
      "en": "Poison Virulent Bomb",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "When a Poisoned enemy takes from the Poison, they drop a Virulent Bomb that deals 1720 damage.",
      "descZh": "中毒的敵人因毒發受到傷害時會掉落一顆毒彈，造成 1720 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Virulent Bomb",
        "Attack/Skill Poison"
      ],
      "match": "order"
    },
    "分裂毒彈": {
      "en": "Splitting Virulent Bomb",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Upon landing, a Virulent Bomb splits into 2, each dealing 430 damage.",
      "descZh": "毒彈落地後會分裂成 2 顆，每顆造成 430 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Virulent Bomb",
        "Fire Spirit Assist"
      ],
      "match": "order"
    },
    "河豚毒彈": {
      "en": "Pufferfish Toxin Bomb",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "When the Pufferfish creates Toxin Bubbles, it also emits Virulent Bombs, dealing 250 damage.",
      "descZh": "河豚生成毒泡時也會發射毒彈，造成 250 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Virulent Bomb",
        "Legacy Pufferfish"
      ],
      "match": "order"
    },
    "毒液殘留": {
      "en": "Lingering Venom",
      "enSlots": [
        "Dash"
      ],
      "descEn": "After exploding, a Virulent Bomb leaves behind Venom, dealing 160 damage every 0.5 seconds.",
      "descZh": "毒彈爆炸後會留下毒液，每 0.5 秒造成 160 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy Venom",
        "Dash Virulent Bomb"
      ],
      "match": "order"
    },
    "地雷毒液": {
      "en": "Mine Venom",
      "enSlots": [
        "Summon"
      ],
      "descEn": "When a Mine explodes, spawns Venom, dealing 160 damage every 0.5 seconds.",
      "descZh": "地雷爆炸時會生成毒液，每 0.5 秒造成 160 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Skill/Legacy Venom",
        "Place Mine"
      ],
      "match": "order"
    },
    "燃氣毒泡": {
      "en": "Gas-Propelled Bubble",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Enemies trapped within Toxin Bubbles that are Burning ascend 50% faster and take an additional 800 damage per second.",
      "descZh": "被毒泡包覆且正在燃燒的敵人，上升速度快 50%，並每秒額外受到 800 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Pufferfish",
        "Attack/Skill/Dash Burn"
      ],
      "match": "order"
    },
    "泡狀毒液": {
      "en": "Venomous Bubble",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "Venom periodically produces Toxin Bubbles, each inflicting 90 damage.",
      "descZh": "毒液會週期性產生毒泡，每顆造成 90 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Pufferfish",
        "Skill Venom"
      ],
      "match": "order"
    },
    "暴躁觸手": {
      "en": "Violent Tentacle",
      "enSlots": [
        "Summon"
      ],
      "descEn": "The Umbra Tentacles expire 8 seconds faster, but when they do, the final attack deals 180% more damage and can break Super Armor.",
      "descZh": "暗影觸手的消失時間提前 8 秒，但消失前的最後一擊傷害提升 180%，並可擊破霸體。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Tentacle",
        "Attack/Skill Shadow Spike"
      ],
      "match": "order"
    },
    "觸手吞噬": {
      "en": "Tentacle Devouring",
      "enSlots": [
        "Summon"
      ],
      "descEn": "The Umbra Tentacles can devour standard enemies that are Blinded.",
      "descZh": "暗影觸手可吞噬被致盲的一般敵人。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Tentacle",
        "Legacy Flash"
      ],
      "match": "order"
    },
    "影鏈牽引": {
      "en": "Shadow Chain Tether",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "Shadow Chain causes enemies without Super Armor connected by the chain to enter a \"hit\" state and move toward the attacker when transferring damage.",
      "descZh": "影鏈會使被連結且不具霸體的敵人進入受擊狀態，並在轉移傷害時朝攻擊者移動。",
      "rarity": null,
      "noteEn": "*No idea what this means yet.",
      "noteZh": "原文語意尚不明確",
      "reqEn": [
        "Summon Tentacle",
        "Attack/Skill Shadow Mark"
      ],
      "match": "order"
    },
    "影刃衝刺": {
      "en": "Shadow Blade Dash",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Shadow Dash is now upgrades to a Shadow Blade Dash that deals 110% more damage.",
      "descZh": "影子衝刺升級為影刃衝刺，傷害提升 110%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dashing Shadow",
        "Summon Blade Ring"
      ],
      "match": "order"
    },
    "概率影爆": {
      "en": "Chance Shadow Explosion",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Your Shadow has a 50% chance to cause a Shadow Explosion, dealing 700 damage.",
      "descZh": "影子有 50% 機率引發影子爆炸，造成 700 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dashing Shadow",
        "Legacy Blackhole"
      ],
      "match": "order"
    },
    "冰影雙劍": {
      "en": "Ice Shadow Twin Blades",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Mystic Ice Sword summons a Shadow Mystic Ice Sword to replicate its attack when used.",
      "descZh": "玄冰劍發動時會召喚影子玄冰劍複製其攻擊。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Shadow",
        "Mystic Ice Sword"
      ],
      "match": "order"
    },
    "影刃回收": {
      "en": "Shadow Blade Retrieval",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Retrieving Flying Blades also summons and retrieves Shadow Flying Blades, each dealing 150 damage.",
      "descZh": "回收飛刃時會同時召喚並回收影子飛刃，每把造成 150 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Shadow",
        "Attack Flying Blade"
      ],
      "match": "order"
    },
    "影子穿刺": {
      "en": "Shadow Puncture",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Your Shadow becomes a Shadow Spike that deals 340 damage.",
      "descZh": "影子化為影刺，造成 340 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill Shadow Spike",
        "Dashing Shadow"
      ],
      "match": "order"
    },
    "影子轉化": {
      "en": "Shadow Conversion",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "When there are enemies nearby, the Shadows become Shadow Spikes and deal 110% more damage.",
      "descZh": "附近有敵人時，影子會化為影刺，且傷害提升 110%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill Shadow Spike",
        "Place Mine"
      ],
      "match": "order"
    },
    "觸手坍塌": {
      "en": "Collapsing Tentacle",
      "enSlots": [
        "Summon"
      ],
      "descEn": "When Tentacles spawn, they also spawn a Blackhole with them that deals 330 damage per second, with a cooldown time of 12 seconds.",
      "descZh": "觸手生成時會同時生成黑洞，每秒造成 330 傷害，冷卻時間 12 秒。",
      "rarity": null,
      "noteEn": "Very strong Double Tactic that provides an extreme amount of crowd control.",
      "noteZh": "控場能力極強的紅策",
      "reqEn": [
        "Legacy Blackhole",
        "Summon Tentacle"
      ],
      "match": "order"
    },
    "黑洞減速": {
      "en": "Blackhole Slow",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "All enemies and projectiles within the range of a Blackhole are slowed, but the duration of the Blackhole is reduced by 2 seconds and the damage is increased by 100%.",
      "descZh": "黑洞範圍內所有敵人與子彈都會被減速，但黑洞持續時間縮短 2 秒，傷害提升 100%。",
      "rarity": null,
      "noteEn": "Undoubtedly one of, if not, the strongest Double Tactics in the game at the moment. It drastically slows all enemies, including bosses except Reki. Trivializes the entire game with the right setups.",
      "noteZh": "公認目前遊戲最強的紅策之一，能大幅減速所有敵人，包含首領（Reki 除外）；搭配得當可讓整場攻略變得毫無難度",
      "reqEn": [
        "Legacy Blackhole",
        "Freezing Cold"
      ],
      "match": "order"
    },
    "影刺吸附": {
      "en": "Shadow Spike Attraction",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "Shadow Spike draws in nearby enemy enemies before its explosion. Shadow Spike increases damage dealt by 90%.",
      "descZh": "影刺在爆炸前會先吸引附近的敵人，且影刺造成的傷害提升 90%。",
      "rarity": null,
      "noteEn": "*Test if it means all damage is increased by 90% or just the Shadow Spike's damage.",
      "noteZh": "待實測：是所有傷害提升 90%，還是只有影刺的傷害",
      "reqEn": [
        "Legacy Blackhole",
        "Attack/Skill Shadow Spike"
      ],
      "match": "order"
    },
    "活性黑洞": {
      "en": "Blackhole Ejection",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Blackhole periodically launches nearby enemies into the air.",
      "descZh": "黑洞會週期性將附近的敵人拋至空中。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Blackhole",
        "Summon Slime"
      ],
      "match": "order"
    },
    "黑洞鏈接": {
      "en": "Blackhole Link",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Enemies inside of a Blackhole are continuously affected by a Shadow Chain, with the damage transfer ratio of these chains enhanced by 10%.",
      "descZh": "黑洞內的敵人會持續受到影鏈影響，該影鏈的傷害轉移比例提升 10%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill Shadow Chain",
        "Legacy Blackhole"
      ],
      "match": "order"
    },
    "影鏈電樁": {
      "en": "Shadow Chain Electric Pillar",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Electric Pillars additionally summon Shadow Chains, enabling the ability to trigger the damage transfer by attacking the Electric Pillar. When only two Shadow Marks are present on the field, the damage conduction ratio increases by 40%.",
      "descZh": "電樁會額外召喚影鏈，使攻擊電樁也能觸發傷害轉移；當場上只有 2 個影標時，傷害傳導比例提升 40%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill Shadow Chain",
        "Legacy Electric Pillar"
      ],
      "match": "order"
    },
    "落雷光槍": {
      "en": "Thunderbolt Light Spear",
      "enSlots": [
        "Dash"
      ],
      "descEn": "When your Thunderbolt hits an enemy, spawns a Light Spear that travels to that enemy and deals 340 damage.",
      "descZh": "落雷擊中敵人時，生成朝向該敵人的光槍，造成 340 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy/Skill Light Spear",
        "Dash Thunderbolt"
      ],
      "match": "order"
    },
    "閃光光槍": {
      "en": "Flash Light Spear",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "When a Flash spawns, shoots light spears toward it, dealing 900 damage. When the Light Spear strikes a Blind enemy, its damage is increased by an additonal 450.",
      "descZh": "閃光產生時會朝其射出光槍，造成 900 傷害；光槍擊中致盲的敵人時，傷害額外提升 450。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Light Spear.",
      "noteZh": "與傳承技光槍無法並存",
      "reqEn": [
        "Skill Light Spear",
        "Legacy Flash"
      ],
      "match": "order"
    },
    "火彈閃光": {
      "en": "Fire Projectile Flash",
      "enSlots": [
        "Skill",
        "Legacy"
      ],
      "descEn": "A Flash spawns along with the Fire Projectiles that blind enemies for 3 seconds.",
      "descZh": "火彈生成時會同時產生閃光，使敵人致盲 3 秒。",
      "rarity": null,
      "noteEn": "Despite what the Tactic Tree says, you cannot have Legacy Fire Projectile and Legacy Flash at the same time.",
      "noteZh": "與策略樹標示不同，傳承技火彈與傳承技閃光實際上無法同時擁有",
      "reqEn": [
        "Legacy Flash",
        "Skill Fire Projectile"
      ],
      "match": "order"
    },
    "標記閃光": {
      "en": "Mark Flash",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Enemies inflicted with a Holy Mark have a chance to trigger a Flash when they attack or take a hit.",
      "descZh": "帶有聖光標記的敵人在發動攻擊或受到攻擊時，有機率觸發閃光。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Flash",
        "Dash Holy Mark"
      ],
      "match": "order"
    },
    "光槍閃光": {
      "en": "Light Spear Flash",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "Upon landing, Light Spears spawn a Flash, which Blinds enemies for 3 seconds.",
      "descZh": "光槍落地時會產生閃光，使敵人致盲 3 秒。",
      "rarity": null,
      "noteEn": "Once again, despite what the Tactic Tree says, you cannot have Legacy Light Spear and Legacy Flash at the same time.",
      "noteZh": "同樣地，與策略樹標示不同，傳承技光槍與傳承技閃光實際上無法同時擁有",
      "reqEn": [
        "Legacy Flash",
        "Skill Light Spear"
      ],
      "match": "order"
    },
    "影鏈致盲": {
      "en": "Shadow Chain Binding",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "Upon activation, the Shadow Chain briefly Blinds the linked enemies.",
      "descZh": "影鏈啟動時會使被連結的敵人短暫致盲。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Legacy Flash",
        "Attack/Skill Shadow Chain"
      ],
      "match": "order"
    },
    "光波傳遞": {
      "en": "Lightwave Spread",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Upon hitting an enemy, the Lightwave moves on to another enemy, dealing 20% less damage with each transfer.",
      "descZh": "光波擊中敵人後會轉向另一名敵人，每次傳遞傷害降低 20%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack Lightwave",
        "Legacy/Skill Lightning Chain"
      ],
      "match": "order"
    },
    "光波快充": {
      "en": "Lightwave Fast Charging",
      "enSlots": [
        "Attack"
      ],
      "descEn": "While in the range of Radiance, Lightwave takes 2.5 less seconds to charge up.",
      "descZh": "在光陣範圍內，光波的充能時間縮短 2.5 秒。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack Lightwave",
        "Summon Radiance"
      ],
      "match": "order"
    },
    "光槍光波": {
      "en": "Light Spear Lightwave",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "When Light Spears hit an enemy, activates a Lightwave that deals 1200 damage.",
      "descZh": "光槍擊中敵人時會啟動光波，造成 1200 傷害。",
      "rarity": null,
      "noteEn": "Unlike a normal Attack Lightwave, this does not have the same scaling, meaning it doesn't have access to the huge damage numbers.",
      "noteZh": "與普攻光波不同，此光波沒有相同的倍率加成，因此無法打出極高傷害",
      "reqEn": [
        "Attack Lightwave",
        "Skill/Legacy Light Spear"
      ],
      "match": "order"
    },
    "光陣吸引": {
      "en": "Radiance Pull",
      "enSlots": [
        "Summon"
      ],
      "descEn": "When Radiance activates, pulls enemies to its center and increases damage amplification by 50%.",
      "descZh": "光陣啟動時會將敵人拉向中心，且傷害增幅提升 50%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Radiance",
        "Legacy Blackhole"
      ],
      "match": "order"
    },
    "持久光陣": {
      "en": "Sustained Radiance",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Spawning a Flash inside a Radiance makes the Radiance last 3 seconds longer.",
      "descZh": "在光陣內產生閃光，可使光陣的持續時間延長 3 秒。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Radiance",
        "Legacy Flash"
      ],
      "match": "order"
    },
    "至聖標記": {
      "en": "Supreme Mark",
      "enSlots": [
        "Attack"
      ],
      "descEn": "Lightwave can trigger Holy Marks and Holy Marks deal 110% more damage.",
      "descZh": "光波可觸發聖光標記，且聖光標記的傷害提升 110%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Holy Mark",
        "Attack Lightwave"
      ],
      "match": "order"
    },
    "冰刺標記": {
      "en": "Ice Spike Mark",
      "enSlots": [
        "Summon"
      ],
      "descEn": "The Ice Spike can inflict Holy Mark on enemies and trigger them, dealing 190 damage.",
      "descZh": "冰刺可對敵人附加聖光標記並觸發，造成 190 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Holy Mark",
        "Summon Ice Spike"
      ],
      "match": "order"
    },
    "標記光陣": {
      "en": "Mark Radiance",
      "enSlots": [
        "Summon"
      ],
      "descEn": "The Radiance continuously applies Holy Mark to enemies within its area.",
      "descZh": "光陣會持續對範圍內的敵人附加聖光標記。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Holy Mark",
        "Summon Radiance"
      ],
      "match": "order"
    },
    "嗜血飛劍": {
      "en": "Bloodthirsty Dagger",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Upon hitting an enemy inflicted with Rend, Daggers deal 700 extra damage.",
      "descZh": "飛劍擊中被撕裂的敵人時，額外造成 700 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Dagger",
        "Attack/Skill Rend"
      ],
      "match": "order"
    },
    "雙向飛劍": {
      "en": "Two-Way Dagger",
      "enSlots": [
        "Dash"
      ],
      "descEn": "2 Dagger portals spawn facing each other after dashing. Their basic damage is increased by 340.",
      "descZh": "衝刺後生成 2 個相對的飛劍傳送門，其基本傷害提升 340。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Dash Dagger",
        "Fire Spirit Assist"
      ],
      "match": "order"
    },
    "針對影刺": {
      "en": "Targeted Shadow Spike",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "When enemies inflicted with Rend are hit by a Shadow Spike, they take an additional 1000 damage but lose the Rend status effect.",
      "descZh": "被撕裂的敵人被影刺擊中時額外受到 1000 傷害，並失去撕裂狀態。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Attack and Skill. Plan accordingly.",
      "noteZh": "與普攻類、技能類策略重疊，需自行取捨",
      "reqEn": [
        "Attack/Skill Rend",
        "Attack/Skill Shadow Spike"
      ],
      "match": "order"
    },
    "撕裂光陣": {
      "en": "Rending Radiance",
      "enSlots": [
        "Attack",
        "Skill"
      ],
      "descEn": "Enemies take 100% more Rend damage within the Radiance.",
      "descZh": "敵人在光陣內受到的撕裂傷害提升 100%。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack/Skill Rend",
        "Summon Radiance"
      ],
      "match": "order"
    },
    "斬殺風暴": {
      "en": "Execution Storm",
      "enSlots": [
        "Attack/Skill"
      ],
      "descEn": "Executing an enemy with Rend creates a temporary Bladestorm at their location, dealing 350 damage.",
      "descZh": "以撕裂處決敵人時，會在其位置生成短暫的刀刃風暴，造成 350 傷害。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill. Plan accordingly.",
      "noteZh": "與技能類策略重疊，需自行取捨",
      "reqEn": [
        "Attack/Skill Rend",
        "Skill/Legacy Bladestorm"
      ],
      "match": "order"
    },
    "召喚迴旋刃": {
      "en": "Summon Whirling Blade",
      "enSlots": [
        "Summon"
      ],
      "descEn": "Blade Rings are now upgraded to Whirling Blades. They automatically fly toward enemies and cut them, dealing 540 damage each time.",
      "descZh": "刃環升級為迴旋刃，會自動飛向敵人並切割，每次造成 540 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Blade Ring",
        "Dash Dagger"
      ],
      "match": "order"
    },
    "嗜血刃環": {
      "en": "Bloodthirsty Blade Ring",
      "enSlots": [
        "Summon"
      ],
      "descEn": "When Blade Rings deal damage to enemies inflicted with Rend, they deal 500 extra damage.",
      "descZh": "刃環對被撕裂的敵人造成傷害時，額外造成 500 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Blade Ring",
        "Attack/Skill Shadow Spike"
      ],
      "match": "order"
    },
    "連續刃環": {
      "en": "Consecutive Blade Rings",
      "enSlots": [
        "Skill"
      ],
      "descEn": "When a Poison Ring is active, the Blade Ring stays out as long as enemy is within the Poison Ring's range. The Blade Ring deals 130 damage per hit.",
      "descZh": "毒環生效時，只要敵人仍在毒環範圍內，刃環就會持續存在；刃環每次命中造成 130 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Blade Ring",
        "Skill Poison Ring"
      ],
      "match": "order"
    },
    "飛刃回環": {
      "en": "Flying Blade Ring",
      "enSlots": [
        "Attack"
      ],
      "descEn": "When the Flying Blade returns, it summons a Blade Ring that deals 600 damage for every 10 enemies hit.",
      "descZh": "飛刃收回時會召喚刃環，每命中 10 名敵人造成 600 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Summon Blade Ring",
        "Attack Flying Blade"
      ],
      "match": "order"
    },
    "嗜血風暴": {
      "en": "Bloodthirsty Bladestorm",
      "enSlots": [
        "Legacy",
        "Skill"
      ],
      "descEn": "Upon hitting an enemy inflicted with Rend, the Bladestorm deals 100 extra damage.",
      "descZh": "刀刃風暴擊中被撕裂的敵人時，額外造成 100 傷害。",
      "rarity": null,
      "noteEn": "Overlapping Tactics on Skill. Plan accordingly.",
      "noteZh": "與技能類策略重疊，需自行取捨",
      "reqEn": [
        "Legacy/Skill Bladestorm",
        "Attack/Skill Rend"
      ],
      "match": "order"
    },
    "黑洞刀刃": {
      "en": "Blackhole Bladestorm",
      "enSlots": [
        "Legacy"
      ],
      "descEn": "Bladestorms spawn near Blackholes, dealing 60 damage with each cut.",
      "descZh": "刀刃風暴會在黑洞附近生成，每次切割造成 60 傷害。",
      "rarity": null,
      "noteEn": "Not possible with Legacy Bladestorm.",
      "noteZh": "與傳承技風暴無法並存",
      "reqEn": [
        "Skill Bladestorm",
        "Legacy Blackhole"
      ],
      "match": "order"
    },
    "傳送飛刃": {
      "en": "Teleporting Flying Blade",
      "enSlots": [
        "Attack"
      ],
      "descEn": "When reclaiming Flying Blades, there is a 30% probability they will be re-summoned from a portal.",
      "descZh": "收回飛刃時，有 30% 機率會從傳送門重新召喚。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack Flying Blade",
        "Dash Daggers"
      ],
      "match": "order"
    },
    "落雷飛刃": {
      "en": "Thunderbolt Flying Blade",
      "enSlots": [
        "Dash"
      ],
      "descEn": "Thunderbolt also summons 3 Flying Blades at the impact site, each dealing 170 damage.",
      "descZh": "落雷還會在落點召喚 3 把飛刃，每把造成 170 傷害。",
      "rarity": null,
      "noteEn": "",
      "noteZh": "",
      "reqEn": [
        "Attack Flying Blade",
        "Dash Thunderbolt"
      ],
      "match": "order"
    }
  }
};
if (typeof module !== "undefined") module.exports = TacticsDescriptions;
