// Shared catalogue. See docs/strategy-reference.md for sources and version limits.
const CompassData = {
  "SLOTS": [
    {
      "id": "basic",
      "name": "普攻",
      "icon": "⚔️"
    },
    {
      "id": "dash",
      "name": "衝刺",
      "icon": "💨"
    },
    {
      "id": "skill",
      "name": "技能",
      "icon": "✨"
    },
    {
      "id": "summon",
      "name": "召喚",
      "icon": "👤"
    },
    {
      "id": "heritage",
      "name": "傳承技",
      "icon": "🔥"
    }
  ],
  "ELEMENTS": [
    {
      "id": "fire",
      "name": "火系",
      "color": "#ff4d4d"
    },
    {
      "id": "ice",
      "name": "冰系",
      "color": "#4dd2ff"
    },
    {
      "id": "elec",
      "name": "電系",
      "color": "#a78bfa"
    },
    {
      "id": "poison",
      "name": "毒系",
      "color": "#4ade80"
    },
    {
      "id": "dark",
      "name": "暗系",
      "color": "#94a3b8"
    },
    {
      "id": "light",
      "name": "光系",
      "color": "#fde047"
    },
    {
      "id": "blade",
      "name": "刃系",
      "color": "#f97316"
    }
  ],
  "STRATEGY_DATA": [
    {
      "id": "fire_burn",
      "element": "fire",
      "name": "燃燒",
      "bases": [
        {
          "name": "普攻燃燒",
          "slot": "basic"
        },
        {
          "name": "技能燃燒",
          "slot": "skill"
        },
        {
          "name": "衝刺燃燒",
          "slot": "dash"
        }
      ],
      "ii": [
        "持久燃燒",
        "聚火成炎",
        "燃燒引燃",
        "火焰漫步"
      ],
      "iii": [
        "強效燃燒"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "fire_bullet",
      "element": "fire",
      "name": "火彈",
      "bases": [
        {
          "name": "技能火彈",
          "slot": "skill"
        },
        {
          "name": "傳承技火彈",
          "slot": "heritage"
        }
      ],
      "ii": [
        "集中火彈",
        "火彈彈射",
        "火彈強化"
      ],
      "iii": [
        "多重火彈"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "fire_ring",
      "element": "fire",
      "name": "火環",
      "bases": [
        {
          "name": "傳承技火環",
          "slot": "heritage"
        }
      ],
      "ii": [
        "大型火環",
        "變形火環",
        "受擊火環"
      ],
      "iii": [
        "雙發火環"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "fire_mine",
      "element": "fire",
      "name": "地雷",
      "bases": [
        {
          "name": "放置地雷",
          "slot": "summon"
        }
      ],
      "ii": [
        "地雷強化",
        "額外地雷",
        "地雷濺射"
      ],
      "iii": [
        "高效布雷"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "fire_spirit",
      "element": "fire",
      "name": "火精靈",
      "bases": [
        {
          "name": "火精靈助戰",
          "slot": "basic"
        }
      ],
      "ii": [
        "火精靈強化",
        "火精靈連擊",
        "快速分裂"
      ],
      "iii": [
        "持久分裂"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "ice_cold",
      "element": "ice",
      "name": "寒冷",
      "bases": [
        {
          "name": "普攻寒冷",
          "slot": "basic"
        },
        {
          "name": "技能寒冷",
          "slot": "skill"
        }
      ],
      "ii": [
        "寒氣爆發",
        "聚寒成冰"
      ],
      "iii": [
        "冰霜爆破",
        "強力破冰"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "ice_spike",
      "element": "ice",
      "name": "冰錐",
      "bases": [
        {
          "name": "衝刺冰錐",
          "slot": "dash"
        },
        {
          "name": "傳承技冰錐",
          "slot": "heritage"
        }
      ],
      "ii": [
        "冰錐強化",
        "閃避冰錐",
        "受擊冰錐"
      ],
      "iii": [
        "隨機冰錐"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "ice_thorn",
      "element": "ice",
      "name": "冰刺",
      "bases": [
        {
          "name": "召喚冰刺",
          "slot": "summon"
        }
      ],
      "ii": [
        "冰刺強化",
        "精準冰刺",
        "極冰利刃"
      ],
      "iii": [
        "多重冰刺"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "ice_hail",
      "element": "ice",
      "name": "冰雹",
      "bases": [
        {
          "name": "技能冰雹",
          "slot": "skill"
        },
        {
          "name": "傳承技冰雹",
          "slot": "heritage"
        }
      ],
      "ii": [
        "廣域冰雹",
        "冰雹頻率",
        "持久冰雹"
      ],
      "iii": [
        "大型冰雹"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "ice_sword",
      "element": "ice",
      "name": "玄冰劍刃",
      "bases": [
        {
          "name": "玄冰劍刃",
          "slot": "basic"
        }
      ],
      "ii": [
        "速凝玄冰",
        "玄冰劍氣",
        "玄冰連斬"
      ],
      "iii": [
        "玄冰巨劍"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "elec_shock",
      "element": "elec",
      "name": "感電",
      "bases": [
        {
          "name": "技能感電",
          "slot": "skill"
        },
        {
          "name": "傳承技感電",
          "slot": "heritage"
        }
      ],
      "ii": [
        "脈衝強化",
        "大型脈衝",
        "脈衝麻痺"
      ],
      "iii": [
        "脈衝感電"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "elec_chain",
      "element": "elec",
      "name": "閃電鏈",
      "bases": [
        {
          "name": "普攻閃電",
          "slot": "basic"
        },
        {
          "name": "技能閃電",
          "slot": "skill"
        },
        {
          "name": "電閃雷鳴",
          "slot": "heritage"
        }
      ],
      "ii": [
        "閃電過載",
        "閃電強化",
        "閃電彈射"
      ],
      "iii": [
        "閃電延伸"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "elec_thunder",
      "element": "elec",
      "name": "落雷",
      "bases": [
        {
          "name": "衝刺落雷",
          "slot": "dash"
        }
      ],
      "ii": [
        "受擊落雷",
        "閃避落雷",
        "落雷強化",
        "落雷麻痺"
      ],
      "iii": [
        "雙重落雷"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "elec_orb",
      "element": "elec",
      "name": "電球",
      "bases": [
        {
          "name": "環繞電球",
          "slot": "summon"
        }
      ],
      "ii": [
        "大型電球",
        "持久電球",
        "擴張電球"
      ],
      "iii": [
        "密集電球"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "elec_pillar",
      "element": "elec",
      "name": "電樁",
      "bases": [
        {
          "name": "傳承技電樁",
          "slot": "heritage"
        }
      ],
      "ii": [
        "持久電樁",
        "超載電樁",
        "電樁吸附"
      ],
      "iii": [
        "大型電樁"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "poison_venom",
      "element": "poison",
      "name": "中毒",
      "bases": [
        {
          "name": "普攻淬毒",
          "slot": "basic"
        },
        {
          "name": "技能毒環",
          "slot": "skill"
        }
      ],
      "ii": [
        "受擊毒霧",
        "毒素污染",
        "強效中毒",
        "毒素擴散",
        "受擊毒環"
      ],
      "iii": [
        "急性中毒"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "poison_slime",
      "element": "poison",
      "name": "史萊姆",
      "bases": [
        {
          "name": "召喚史萊姆",
          "slot": "summon"
        }
      ],
      "ii": [
        "自爆史萊姆",
        "長效史萊姆"
      ],
      "iii": [
        "大型史萊姆",
        "極速史萊姆"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "poison_dart",
      "element": "poison",
      "name": "毒彈",
      "bases": [
        {
          "name": "衝刺毒彈",
          "slot": "dash"
        }
      ],
      "ii": [
        "烈性毒彈",
        "閃避毒彈",
        "濃縮毒彈"
      ],
      "iii": [
        "擴散毒彈"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "poison_liquid",
      "element": "poison",
      "name": "毒液",
      "bases": [
        {
          "name": "技能毒液",
          "slot": "skill"
        },
        {
          "name": "傳承技毒液",
          "slot": "heritage"
        }
      ],
      "ii": [
        "長效毒液",
        "毒液擴大",
        "烈性毒液"
      ],
      "iii": [
        "毒素累積"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "poison_puffer",
      "element": "poison",
      "name": "毒泡河豚",
      "bases": [
        {
          "name": "傳承技河豚",
          "slot": "heritage"
        }
      ],
      "ii": [
        "毒泡久噴",
        "毒泡延距",
        "大型毒泡"
      ],
      "iii": [
        "河豚延續"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "dark_tentacle",
      "element": "dark",
      "name": "觸手",
      "bases": [
        {
          "name": "召喚觸手",
          "slot": "summon"
        }
      ],
      "ii": [
        "大型觸手",
        "快速觸手",
        "觸手叢集"
      ],
      "iii": [
        "連擊觸手"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "dark_shadow",
      "element": "dark",
      "name": "影子",
      "bases": [
        {
          "name": "衝刺影子",
          "slot": "dash"
        }
      ],
      "ii": [
        "影子反沖",
        "影子強化",
        "閃避影子"
      ],
      "iii": [
        "多重影子"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "dark_spike",
      "element": "dark",
      "name": "影刺",
      "bases": [
        {
          "name": "普攻影刺",
          "slot": "basic"
        },
        {
          "name": "技能影刺",
          "slot": "skill"
        }
      ],
      "ii": [
        "遠程影刺",
        "死亡影刺",
        "受擊影刺"
      ],
      "iii": [
        "影刺強化"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "dark_blackhole",
      "element": "dark",
      "name": "黑洞",
      "bases": [
        {
          "name": "傳承技黑洞",
          "slot": "heritage"
        }
      ],
      "ii": [
        "大型黑洞",
        "黑洞爆炸",
        "持久黑洞"
      ],
      "iii": [
        "黑洞盛宴"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "dark_mark",
      "element": "dark",
      "name": "暗影標記",
      "bases": [
        {
          "name": "普攻影標",
          "slot": "basic"
        },
        {
          "name": "技能影標",
          "slot": "skill"
        }
      ],
      "ii": [
        "影標解限",
        "影標增殖",
        "影標連爆"
      ],
      "iii": [
        "強鏈影標"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "light_lance",
      "element": "light",
      "name": "光槍",
      "bases": [
        {
          "name": "技能光槍",
          "slot": "skill"
        },
        {
          "name": "傳承技光槍",
          "slot": "heritage"
        }
      ],
      "ii": [
        "光槍禁錮",
        "光槍強化",
        "聖光光槍"
      ],
      "iii": [
        "多重光槍"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "light_flash",
      "element": "light",
      "name": "閃光",
      "bases": [
        {
          "name": "傳承技閃光",
          "slot": "heritage"
        }
      ],
      "ii": [
        "閃光強化",
        "廣域閃光",
        "受擊閃光"
      ],
      "iii": [
        "致盲延長"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "light_wave",
      "element": "light",
      "name": "光波",
      "bases": [
        {
          "name": "普攻光波",
          "slot": "basic"
        }
      ],
      "ii": [
        "光波強化",
        "光波眩暈",
        "靈活充能"
      ],
      "iii": [
        "增強光波"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "light_array",
      "element": "light",
      "name": "光陣",
      "bases": [
        {
          "name": "召喚光陣",
          "slot": "summon"
        }
      ],
      "ii": [
        "光陣致盲",
        "光陣庇護",
        "光陣增傷"
      ],
      "iii": [
        "大型光陣"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "light_holy",
      "element": "light",
      "name": "聖光標記",
      "bases": [
        {
          "name": "聖光標記",
          "slot": "dash"
        }
      ],
      "ii": [
        "穩定標記",
        "標記強化",
        "隨機標記"
      ],
      "iii": [
        "標記共鳴"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "blade_sword",
      "element": "blade",
      "name": "飛劍",
      "bases": [
        {
          "name": "衝刺飛劍",
          "slot": "dash"
        }
      ],
      "ii": [
        "遠程飛劍",
        "嗜血飛劍",
        "閃避飛劍"
      ],
      "iii": [
        "多重飛劍"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "blade_tear",
      "element": "blade",
      "name": "撕裂",
      "bases": [
        {
          "name": "普攻撕裂",
          "slot": "basic"
        },
        {
          "name": "技能撕裂",
          "slot": "skill"
        }
      ],
      "ii": [
        "短程撕裂",
        "撕裂強化",
        "撕裂衝擊"
      ],
      "iii": [
        "終結撕裂"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "blade_ring",
      "element": "blade",
      "name": "刃環",
      "bases": [
        {
          "name": "召喚刃環",
          "slot": "summon"
        }
      ],
      "ii": [
        "精準切割",
        "大型刃環",
        "刃環牽引",
        "受擊刃環"
      ],
      "iii": [
        "雙生刃環"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "blade_storm",
      "element": "blade",
      "name": "刀刃風暴",
      "bases": [
        {
          "name": "技能風暴",
          "slot": "skill"
        },
        {
          "name": "傳承技風暴",
          "slot": "heritage"
        }
      ],
      "ii": [
        "牽引風暴",
        "擴大風暴",
        "追蹤風暴",
        "受擊風暴"
      ],
      "iii": [
        "風暴加速"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "blade_knife",
      "element": "blade",
      "name": "飛刃",
      "bases": [
        {
          "name": "普攻飛刃",
          "slot": "basic"
        }
      ],
      "ii": [
        "潛伏飛刃",
        "飛刃旋風",
        "飛刃衝擊"
      ],
      "iii": [
        "飛刃斬"
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    }
  ],
  "DUALS": [
    {
      "name": "火環燃燒",
      "element": "fire",
      "slots": [
        "heritage"
      ],
      "prim": [
        "普攻燃燒",
        "技能燃燒",
        "衝刺燃燒"
      ],
      "sec": [
        "傳承技火環"
      ],
      "desc": "火環可使敵人燃燒，每秒 550 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "火焰飛劍",
      "element": "fire",
      "slots": [
        "dash"
      ],
      "prim": [
        "普攻燃燒",
        "技能燃燒"
      ],
      "sec": [
        "衝刺飛劍"
      ],
      "desc": "飛劍升級為火焰飛劍，命中後使敵人燃燒，每秒 340 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "燃燒爆彈",
      "element": "fire",
      "slots": [
        "dash",
        "basic",
        "skill"
      ],
      "prim": [
        "傳承技火彈",
        "技能火彈"
      ],
      "sec": [
        "普攻燃燒",
        "技能燃燒",
        "衝刺燃燒"
      ],
      "desc": "攻擊燃燒中的敵人時會發射火彈，每個 600 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "爆燃火彈",
      "element": "fire",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "傳承技火彈",
        "技能火彈"
      ],
      "sec": [
        "普攻燃燒",
        "技能燃燒",
        "衝刺燃燒"
      ],
      "desc": "火彈對燃燒敵人的傷害提升 100%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "雷雲火彈",
      "element": "fire",
      "slots": [
        "heritage"
      ],
      "prim": [
        "傳承技火彈",
        "技能火彈"
      ],
      "sec": [
        "電閃雷鳴"
      ],
      "desc": "雷雲會額外發射火彈，每個 220 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "風暴火環",
      "element": "fire",
      "slots": [
        "skill"
      ],
      "prim": [
        "傳承技火環"
      ],
      "sec": [
        "技能風暴"
      ],
      "desc": "刀刃風暴會產生火環，造成 1200 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "焚彈火環",
      "element": "fire",
      "slots": [
        "heritage"
      ],
      "prim": [
        "傳承技火環"
      ],
      "sec": [
        "召喚刃環"
      ],
      "desc": "火環可吞噬子彈，生成環繞自身的防護火焰；火焰接觸敵人造成 300 傷害。",
      "sourceIds": [
        "legacy-catalogue",
        "wiki-damage-20261018"
      ],
      "confidence": "unverified"
    },
    {
      "name": "地雷火焰",
      "element": "fire",
      "slots": [
        "summon"
      ],
      "prim": [
        "放置地雷"
      ],
      "sec": [
        "普攻燃燒",
        "技能燃燒",
        "衝刺燃燒"
      ],
      "desc": "地雷爆炸後殘留火焰，對經過的敵人每秒 400 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "地雷閃光",
      "element": "fire",
      "slots": [
        "summon"
      ],
      "prim": [
        "放置地雷"
      ],
      "sec": [
        "傳承技閃光"
      ],
      "desc": "地雷爆炸時會產生閃光。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "火精靈引爆",
      "element": "fire",
      "slots": [
        "basic"
      ],
      "prim": [
        "火精靈助戰"
      ],
      "sec": [
        "普攻燃燒",
        "衝刺燃燒"
      ],
      "desc": "火精靈命中燃燒敵人時，50% 機率引爆造成 1150 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "火彈火精靈",
      "element": "fire",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "火精靈助戰"
      ],
      "sec": [
        "傳承技火彈",
        "技能火彈"
      ],
      "desc": "火彈命中或擊殺敵人會產生火精靈，每個 300 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "火精靈彈跳",
      "element": "fire",
      "slots": [
        "basic"
      ],
      "prim": [
        "火精靈助戰"
      ],
      "sec": [
        "技能閃電",
        "電閃雷鳴"
      ],
      "desc": "火精靈可在敵人之間彈跳，每次 280 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰錐極寒",
      "element": "ice",
      "slots": [
        "dash",
        "heritage"
      ],
      "prim": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "need": [
        "寒氣爆發"
      ],
      "sec": [
        "衝刺冰錐",
        "傳承技冰錐"
      ],
      "desc": "冰錐對敵人施加寒冷時，寒冷層數 +3。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰霜脈衝",
      "element": "ice",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "need": [
        "寒氣爆發"
      ],
      "sec": [
        "技能感電",
        "傳承技感電"
      ],
      "desc": "寒氣爆發升級為冰霜脈衝，傷害 +36% 並麻痺敵人。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "寒冰毒霧",
      "element": "ice",
      "slots": [
        "basic"
      ],
      "prim": [
        "技能寒冷"
      ],
      "need": [
        "聚寒成冰"
      ],
      "sec": [
        "普攻淬毒"
      ],
      "desc": "毒霧升級為寒冰毒霧，可冰凍敵人。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "玄冰領域",
      "element": "ice",
      "slots": [
        "basic"
      ],
      "prim": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "need": [
        "聚寒成冰"
      ],
      "sec": [
        "玄冰劍刃"
      ],
      "desc": "玄冰劍攻擊敵人時，短暫冰凍敵人 1.5 秒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光槍冰錐",
      "element": "ice",
      "slots": [
        "heritage",
        "skill"
      ],
      "prim": [
        "衝刺冰錐",
        "傳承技冰錐"
      ],
      "sec": [
        "技能光槍",
        "傳承技光槍"
      ],
      "desc": "光槍插地時周圍出現冰錐，造成 600 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰凍冰錐",
      "element": "ice",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "衝刺冰錐",
        "傳承技冰錐"
      ],
      "need": [
        "聚寒成冰"
      ],
      "sec": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "desc": "敵人被冰凍時會有冰錐向周圍蔓延，造成 500 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰爆冰錐",
      "element": "ice",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "衝刺冰錐",
        "傳承技冰錐"
      ],
      "sec": [
        "技能冰雹",
        "傳承技冰雹"
      ],
      "desc": "冰雹爆開時會在地面生成冰錐，造成 150 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "無盡冰刺",
      "element": "ice",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚冰刺"
      ],
      "need": [
        "聚寒成冰"
      ],
      "sec": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "desc": "冰刺持續自動生成且索敵範圍擴大，每根造成基礎冰刺 57% 的傷害。",
      "sourceIds": [
        "legacy-catalogue",
        "wiki-damage-20261018"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰刺再生",
      "element": "ice",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚冰刺"
      ],
      "need": [
        "寒氣爆發"
      ],
      "sec": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "desc": "冰刺命中非寒冷狀態敵人時，自動再生成 3 個冰刺。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影子冰刺",
      "element": "ice",
      "slots": [
        "dash"
      ],
      "prim": [
        "召喚冰刺"
      ],
      "sec": [
        "衝刺影子"
      ],
      "desc": "自身有冰刺時，自身的影子也會有冰刺。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "雹雲冰刺",
      "element": "ice",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "召喚冰刺"
      ],
      "sec": [
        "技能冰雹",
        "傳承技冰雹"
      ],
      "desc": "冰雹雲會同時落下冰刺，每個 300 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰雷雲霧",
      "element": "ice",
      "slots": [
        "heritage"
      ],
      "prim": [
        "技能冰雹"
      ],
      "sec": [
        "電閃雷鳴"
      ],
      "desc": "雷雲變為冰雷雲霧，同時釋放閃電鏈與冰雹，每顆冰雹造成 300 傷害。",
      "sourceIds": [
        "legacy-catalogue",
        "wiki-damage-20261018"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰落光陣",
      "element": "ice",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "技能冰雹",
        "傳承技冰雹"
      ],
      "sec": [
        "召喚光陣"
      ],
      "desc": "光陣附近冰雹的產生頻率大幅增加。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰爆地雷",
      "element": "ice",
      "slots": [
        "summon"
      ],
      "prim": [
        "技能冰雹",
        "傳承技冰雹"
      ],
      "sec": [
        "放置地雷"
      ],
      "desc": "地雷變為冰地雷，爆炸時附加 4 層寒冷並發射冰雹，每個 500 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰擊化劍",
      "element": "ice",
      "slots": [
        "skill"
      ],
      "prim": [
        "玄冰劍刃"
      ],
      "need": [
        "寒氣爆發"
      ],
      "sec": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "desc": "寒氣爆發觸發時，大幅增加玄冰劍的修復進度。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰劍刺擊",
      "element": "ice",
      "slots": [
        "basic"
      ],
      "prim": [
        "玄冰劍刃"
      ],
      "sec": [
        "衝刺飛劍"
      ],
      "desc": "玄冰劍攻擊完成後會再進行一次穿刺攻擊。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光爆玄冰",
      "element": "ice",
      "slots": [
        "dash"
      ],
      "prim": [
        "玄冰劍刃"
      ],
      "sec": [
        "聖光標記"
      ],
      "desc": "聖光標記被引爆時可修復玄冰劍，玄冰劍攻擊會引爆聖光標記。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "閃電感電",
      "element": "elec",
      "slots": [
        "basic",
        "heritage",
        "skill"
      ],
      "prim": [
        "技能感電",
        "傳承技感電"
      ],
      "sec": [
        "普攻閃電",
        "技能閃電",
        "電閃雷鳴"
      ],
      "desc": "閃電鏈連接到感電狀態的敵人會立即引發脈衝。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "電樁感電",
      "element": "elec",
      "slots": [
        "heritage"
      ],
      "prim": [
        "技能感電",
        "傳承技感電"
      ],
      "sec": [
        "傳承技電樁"
      ],
      "desc": "電樁的電擊命中 10 次後觸發脈衝，造成 400 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "黑洞脈衝",
      "element": "elec",
      "slots": [
        "heritage"
      ],
      "prim": [
        "技能感電",
        "傳承技感電"
      ],
      "sec": [
        "傳承技黑洞"
      ],
      "desc": "黑洞出現和消失時都將引發脈衝，造成 430 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "飛刃脈衝",
      "element": "elec",
      "slots": [
        "basic"
      ],
      "prim": [
        "技能感電",
        "傳承技感電"
      ],
      "sec": [
        "普攻飛刃"
      ],
      "desc": "被回收的飛刃命中 6 次後激起脈衝，造成 400 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "電球閃電",
      "element": "elec",
      "slots": [
        "summon"
      ],
      "prim": [
        "普攻閃電",
        "技能閃電",
        "電閃雷鳴"
      ],
      "sec": [
        "環繞電球"
      ],
      "desc": "電球命中敵人會產生閃電鏈連接周圍敵人，每次 260 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "觸手閃電",
      "element": "elec",
      "slots": [
        "summon"
      ],
      "prim": [
        "普攻閃電",
        "技能閃電",
        "電閃雷鳴"
      ],
      "sec": [
        "召喚觸手"
      ],
      "desc": "暗影觸手命中 3 次可產生閃電鏈，每次連接造成 340 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光槍落雷",
      "element": "elec",
      "slots": [
        "heritage",
        "skill"
      ],
      "prim": [
        "衝刺落雷"
      ],
      "sec": [
        "技能光槍",
        "傳承技光槍"
      ],
      "desc": "光槍插地時會出現落雷，造成 1200 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "電球落雷",
      "element": "elec",
      "slots": [
        "summon"
      ],
      "prim": [
        "衝刺落雷"
      ],
      "sec": [
        "環繞電球"
      ],
      "desc": "電球命中敵人時會出現落雷，造成 320 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "落雷懲戒",
      "element": "elec",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "衝刺落雷"
      ],
      "sec": [
        "普攻影刺",
        "技能影刺"
      ],
      "desc": "被打出過影子的敵人，攻擊時會招致落雷，造成 900 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "追蹤落雷",
      "element": "elec",
      "slots": [
        "dash"
      ],
      "prim": [
        "衝刺落雷"
      ],
      "sec": [
        "技能感電",
        "傳承技感電"
      ],
      "desc": "落雷會追蹤感電的敵人，且傷害提升 40%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "電球發射",
      "element": "elec",
      "slots": [
        "summon"
      ],
      "prim": [
        "環繞電球"
      ],
      "sec": [
        "普攻閃電",
        "技能閃電",
        "電閃雷鳴"
      ],
      "desc": "電球碰撞敵人引發爆炸 400 傷害；繞身結束後電球射出，每個 1000 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "感電電球",
      "element": "elec",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "環繞電球"
      ],
      "sec": [
        "技能感電",
        "傳承技感電"
      ],
      "desc": "敵人感電時產生一個跟蹤敵人的電球，造成 500 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影子電球",
      "element": "elec",
      "slots": [
        "summon"
      ],
      "prim": [
        "環繞電球"
      ],
      "sec": [
        "衝刺影子"
      ],
      "desc": "生成電球時額外生成等量影子電球。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "傳導電樁",
      "element": "elec",
      "slots": [
        "heritage"
      ],
      "prim": [
        "環繞電球"
      ],
      "sec": [
        "傳承技電樁"
      ],
      "desc": "激活兩個及以上電樁時，召喚電球在電樁之間傳遞，每個 1200 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "電樁鏈接",
      "element": "elec",
      "slots": [
        "heritage"
      ],
      "prim": [
        "傳承技電樁"
      ],
      "sec": [
        "普攻閃電",
        "技能閃電"
      ],
      "desc": "距離相近的電樁之間會週期性形成電網，造成 150 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光陣電樁",
      "element": "elec",
      "slots": [
        "summon"
      ],
      "prim": [
        "傳承技電樁"
      ],
      "sec": [
        "召喚光陣"
      ],
      "desc": "光陣展開時額外召喚兩座電樁，持續 8 秒，每次電擊造成 150 傷害；光陣內電擊頻率加快 50%。",
      "sourceIds": [
        "legacy-catalogue",
        "wiki-damage-20261018"
      ],
      "confidence": "unverified"
    },
    {
      "name": "電解化毒",
      "element": "poison",
      "slots": [
        "basic",
        "heritage",
        "skill"
      ],
      "prim": [
        "普攻淬毒",
        "技能毒環"
      ],
      "sec": [
        "普攻閃電",
        "技能閃電",
        "電閃雷鳴"
      ],
      "desc": "閃電鏈可使敵人中毒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "劇毒史萊姆",
      "element": "poison",
      "slots": [
        "summon"
      ],
      "prim": [
        "普攻淬毒",
        "技能毒環"
      ],
      "sec": [
        "召喚史萊姆"
      ],
      "desc": "史萊姆可使敵人中毒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "毒液催化",
      "element": "poison",
      "slots": [
        "heritage",
        "skill"
      ],
      "prim": [
        "普攻淬毒",
        "技能毒環"
      ],
      "sec": [
        "技能毒液",
        "傳承技毒液"
      ],
      "desc": "毒液對中毒敵人造成傷害時，減少 0.3 秒毒發時間。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "分裂史萊姆",
      "element": "poison",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚史萊姆"
      ],
      "sec": [
        "火精靈助戰"
      ],
      "desc": "史萊姆可以分裂。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "附身史萊姆",
      "element": "poison",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚史萊姆"
      ],
      "sec": [
        "聖光標記"
      ],
      "desc": "史萊姆命中敵人後黏在其身上，每秒 580 傷害直到消失。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "毒液史萊姆",
      "element": "poison",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚史萊姆"
      ],
      "sec": [
        "技能毒液",
        "傳承技毒液"
      ],
      "desc": "史萊姆每次落地時生成毒液，每 0.5 秒 140 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "中毒毒彈",
      "element": "poison",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "衝刺毒彈"
      ],
      "sec": [
        "普攻淬毒",
        "技能毒環"
      ],
      "desc": "中毒狀態的敵人毒發時掉落毒彈，造成 1720 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "分裂毒彈",
      "element": "poison",
      "slots": [
        "dash"
      ],
      "prim": [
        "衝刺毒彈"
      ],
      "sec": [
        "火精靈助戰"
      ],
      "desc": "毒彈落地時分裂出 2 個，每個 430 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "河豚毒彈",
      "element": "poison",
      "slots": [
        "heritage"
      ],
      "prim": [
        "衝刺毒彈"
      ],
      "sec": [
        "傳承技河豚"
      ],
      "desc": "河豚產生毒泡時也會噴出毒彈，造成 250 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "毒液殘留",
      "element": "poison",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "技能毒液",
        "傳承技毒液"
      ],
      "sec": [
        "衝刺毒彈"
      ],
      "desc": "毒彈爆炸後殘留毒液，每 0.5 秒 160 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "地雷毒液",
      "element": "poison",
      "slots": [
        "summon"
      ],
      "prim": [
        "技能毒液",
        "傳承技毒液"
      ],
      "sec": [
        "放置地雷"
      ],
      "desc": "地雷爆炸時會出現毒液，每 0.5 秒 160 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "燃氣毒泡",
      "element": "poison",
      "slots": [
        "heritage"
      ],
      "prim": [
        "傳承技河豚"
      ],
      "sec": [
        "普攻燃燒",
        "技能燃燒",
        "衝刺燃燒"
      ],
      "desc": "燃燒敵人在毒泡中升空速度 +50%，額外每秒受 800 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "泡狀毒液",
      "element": "poison",
      "slots": [
        "skill"
      ],
      "prim": [
        "傳承技河豚"
      ],
      "sec": [
        "技能毒液"
      ],
      "desc": "毒液會週期性地產生毒泡，每個 90 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "暴躁觸手",
      "element": "dark",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚觸手"
      ],
      "sec": [
        "普攻影刺",
        "技能影刺"
      ],
      "desc": "暗影觸手持續 -8 秒，但結束時一擊 +180% 並可破霸體。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "觸手吞噬",
      "element": "dark",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚觸手"
      ],
      "sec": [
        "傳承技閃光"
      ],
      "desc": "暗影觸手會吞噬被致盲的敵人。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影鏈牽引",
      "element": "dark",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "召喚觸手"
      ],
      "sec": [
        "普攻影標",
        "技能影標"
      ],
      "desc": "暗影鏈條傳遞傷害時，令相連的非霸體敵人受擊並朝攻擊者位移。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影刃衝刺",
      "element": "dark",
      "slots": [
        "dash"
      ],
      "prim": [
        "衝刺影子"
      ],
      "sec": [
        "召喚刃環"
      ],
      "desc": "衝刺影子升級為影刃衝刺，傷害提升 110%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "概率影爆",
      "element": "dark",
      "slots": [
        "dash"
      ],
      "prim": [
        "衝刺影子"
      ],
      "sec": [
        "傳承技黑洞"
      ],
      "desc": "自身影子有 50% 機率引發影爆，造成 700 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰影雙劍",
      "element": "dark",
      "slots": [
        "basic"
      ],
      "prim": [
        "衝刺影子"
      ],
      "sec": [
        "玄冰劍刃"
      ],
      "desc": "玄冰劍攻擊時，召喚暗影玄冰劍進行同樣攻擊。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影刃回收",
      "element": "dark",
      "slots": [
        "basic"
      ],
      "prim": [
        "衝刺影子"
      ],
      "sec": [
        "普攻飛刃"
      ],
      "desc": "回收飛刃時，還會召喚暗影飛刃並回收，每個 150 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影子穿刺",
      "element": "dark",
      "slots": [
        "dash"
      ],
      "prim": [
        "普攻影刺",
        "技能影刺"
      ],
      "sec": [
        "衝刺影子"
      ],
      "desc": "自身影子變成影刺，造成 340 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影子轉化",
      "element": "dark",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "普攻影刺",
        "技能影刺"
      ],
      "sec": [
        "放置地雷"
      ],
      "desc": "影子持續時間大幅增加，附近有敵人時直接變為影刺，傷害 +110%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "觸手坍塌",
      "element": "dark",
      "slots": [
        "summon"
      ],
      "prim": [
        "傳承技黑洞"
      ],
      "sec": [
        "召喚觸手"
      ],
      "desc": "召喚暗影觸手時出現黑洞，每秒 330 傷害，冷卻 12 秒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "黑洞減速",
      "element": "dark",
      "slots": [
        "heritage"
      ],
      "prim": [
        "傳承技黑洞"
      ],
      "need": [
        "聚寒成冰"
      ],
      "sec": [
        "普攻寒冷",
        "技能寒冷"
      ],
      "desc": "黑洞內所有敵人與飛行物被減速，持續 -2 秒，傷害 +100%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影刺吸附",
      "element": "dark",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "傳承技黑洞"
      ],
      "sec": [
        "普攻影刺",
        "技能影刺"
      ],
      "desc": "影刺爆發前吸引周圍敵人，影刺傷害 +90%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "活性黑洞",
      "element": "dark",
      "slots": [
        "heritage"
      ],
      "prim": [
        "傳承技黑洞"
      ],
      "sec": [
        "召喚史萊姆"
      ],
      "desc": "黑洞會週期性將附近敵人拋起。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "黑洞鏈接",
      "element": "dark",
      "slots": [
        "heritage"
      ],
      "prim": [
        "普攻影標",
        "技能影標"
      ],
      "sec": [
        "傳承技黑洞"
      ],
      "desc": "黑洞中的敵人被持續施加暗影鏈條，傳導比例 +10%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影鏈電樁",
      "element": "dark",
      "slots": [
        "heritage"
      ],
      "prim": [
        "普攻影標",
        "技能影標"
      ],
      "sec": [
        "傳承技電樁"
      ],
      "desc": "電樁附帶暗影鏈條，可攻擊電樁傳導傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "落雷光槍",
      "element": "light",
      "slots": [
        "dash"
      ],
      "prim": [
        "技能光槍",
        "傳承技光槍"
      ],
      "sec": [
        "衝刺落雷"
      ],
      "desc": "落雷命中敵人時出現光槍射向被命中者，造成 340 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "閃光光槍",
      "element": "light",
      "slots": [
        "heritage"
      ],
      "prim": [
        "技能光槍"
      ],
      "sec": [
        "傳承技閃光"
      ],
      "desc": "出現閃光時向其發射光槍 900 傷害，命中致盲敵人 +450。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "火彈閃光",
      "element": "light",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "傳承技閃光"
      ],
      "sec": [
        "技能火彈"
      ],
      "desc": "閃光會在火彈出現時跟著出現，致盲敵人 3 秒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "標記閃光",
      "element": "light",
      "slots": [
        "dash"
      ],
      "prim": [
        "傳承技閃光"
      ],
      "sec": [
        "聖光標記"
      ],
      "desc": "有聖光標記的敵人攻擊或受擊時有機率引發閃光。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光槍閃光",
      "element": "light",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "傳承技閃光"
      ],
      "sec": [
        "技能光槍"
      ],
      "desc": "光槍插地時會激發閃光，致盲敵人 3 秒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "影鏈致盲",
      "element": "light",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "傳承技閃光"
      ],
      "sec": [
        "普攻影標",
        "技能影標"
      ],
      "desc": "暗影鏈條激發時，連結的敵人將被短暫致盲。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光波傳遞",
      "element": "light",
      "slots": [
        "basic"
      ],
      "prim": [
        "普攻光波"
      ],
      "sec": [
        "技能閃電",
        "電閃雷鳴"
      ],
      "desc": "光波命中敵人會向後傳遞，每次傷害衰減 20%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光波快充",
      "element": "light",
      "slots": [
        "basic"
      ],
      "prim": [
        "普攻光波"
      ],
      "sec": [
        "召喚光陣"
      ],
      "desc": "在光陣範圍內，光波所需充能時間減少 2.5 秒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光槍光波",
      "element": "light",
      "slots": [
        "skill",
        "heritage"
      ],
      "prim": [
        "普攻光波"
      ],
      "sec": [
        "技能光槍",
        "傳承技光槍"
      ],
      "desc": "光槍命中敵人時會激發光波，造成 1200 固定傷害，與普攻光波的傷害縮放不同。",
      "sourceIds": [
        "legacy-catalogue",
        "wiki-damage-20261018"
      ],
      "confidence": "unverified"
    },
    {
      "name": "光陣吸引",
      "element": "light",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚光陣"
      ],
      "sec": [
        "傳承技黑洞"
      ],
      "desc": "光陣中心持續吸引附近敵人，傷害增幅 +50%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "持久光陣",
      "element": "light",
      "slots": [
        "heritage"
      ],
      "prim": [
        "召喚光陣"
      ],
      "sec": [
        "傳承技閃光"
      ],
      "desc": "光陣範圍內的閃光可使光陣持續時間延長 3 秒。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "至聖標記",
      "element": "light",
      "slots": [
        "basic"
      ],
      "prim": [
        "聖光標記"
      ],
      "sec": [
        "普攻光波"
      ],
      "desc": "光波可觸發聖光標記，並使聖光標記額外造成 110% 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "冰刺標記",
      "element": "light",
      "slots": [
        "summon"
      ],
      "prim": [
        "聖光標記"
      ],
      "sec": [
        "召喚冰刺"
      ],
      "desc": "冰刺使命中敵人獲得聖光標記，並引爆造成 190 傷害。",
      "sourceIds": [
        "legacy-catalogue",
        "wiki-damage-20261018"
      ],
      "confidence": "unverified"
    },
    {
      "name": "標記光陣",
      "element": "light",
      "slots": [
        "summon"
      ],
      "prim": [
        "聖光標記"
      ],
      "sec": [
        "召喚光陣"
      ],
      "desc": "光陣會對其中的敵人持續施加聖光標記。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "嗜血飛劍",
      "element": "blade",
      "slots": [
        "dash"
      ],
      "prim": [
        "衝刺飛劍"
      ],
      "sec": [
        "普攻撕裂",
        "技能撕裂"
      ],
      "desc": "飛劍命中被撕裂的敵人時額外造成 700 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "雙向飛劍",
      "element": "blade",
      "slots": [
        "dash"
      ],
      "prim": [
        "衝刺飛劍"
      ],
      "sec": [
        "火精靈助戰"
      ],
      "desc": "飛劍從兩側出現，基礎傷害增加 340。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "針對影刺",
      "element": "blade",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "普攻撕裂",
        "技能撕裂"
      ],
      "sec": [
        "普攻影刺",
        "技能影刺"
      ],
      "desc": "撕裂敵人被影刺命中時額外受 1000 傷害，並結束撕裂。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "撕裂光陣",
      "element": "blade",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "普攻撕裂",
        "技能撕裂"
      ],
      "sec": [
        "召喚光陣"
      ],
      "desc": "光陣內敵人所受撕裂傷害提升 100%。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "斬殺風暴",
      "element": "blade",
      "slots": [
        "basic",
        "skill"
      ],
      "prim": [
        "普攻撕裂",
        "技能撕裂"
      ],
      "sec": [
        "技能風暴",
        "傳承技風暴"
      ],
      "desc": "撕裂斬殺敵人時，在其位置生成短暫的刀刃風暴，造成 350 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "召喚迴旋刃",
      "element": "blade",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚刃環"
      ],
      "sec": [
        "衝刺飛劍"
      ],
      "desc": "刃環升級為迴旋刃，自動飛向敵人並切割，每次 540 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "嗜血刃環",
      "element": "blade",
      "slots": [
        "summon"
      ],
      "prim": [
        "召喚刃環"
      ],
      "sec": [
        "普攻撕裂",
        "技能撕裂"
      ],
      "desc": "刃環命中被撕裂的敵人時額外造成 500 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "連續刃環",
      "element": "blade",
      "slots": [
        "skill"
      ],
      "prim": [
        "召喚刃環"
      ],
      "sec": [
        "技能毒環"
      ],
      "desc": "有毒環時，靠近敵人刃環會持續出現，每次 130 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "飛刃回環",
      "element": "blade",
      "slots": [
        "basic"
      ],
      "prim": [
        "召喚刃環"
      ],
      "sec": [
        "普攻飛刃"
      ],
      "desc": "飛刃收回時每命中敵人 10 次，召喚一個造成 600 傷害的刃環。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "嗜血風暴",
      "element": "blade",
      "slots": [
        "heritage",
        "skill"
      ],
      "prim": [
        "技能風暴",
        "傳承技風暴"
      ],
      "sec": [
        "普攻撕裂",
        "技能撕裂"
      ],
      "desc": "刀刃風暴命中被撕裂的敵人時額外造成 100 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "黑洞刀刃",
      "element": "blade",
      "slots": [
        "heritage"
      ],
      "prim": [
        "技能風暴"
      ],
      "sec": [
        "傳承技黑洞"
      ],
      "desc": "刀刃風暴會在黑洞周圍出現，每次切割造成 60 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "傳送飛刃",
      "element": "blade",
      "slots": [
        "basic"
      ],
      "prim": [
        "普攻飛刃"
      ],
      "sec": [
        "衝刺飛劍"
      ],
      "desc": "回收飛刃時，飛刃有 30% 機率從傳送門重新召喚。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "name": "落雷飛刃",
      "element": "blade",
      "slots": [
        "dash"
      ],
      "prim": [
        "普攻飛刃"
      ],
      "sec": [
        "衝刺落雷"
      ],
      "desc": "落雷還會在落地處召喚 3 支飛刃，每個 170 傷害。",
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    }
  ],
  "CHARACTERS": [
    {
      "id": "hakumen",
      "name": "白面",
      "alias": "Hakumen",
      "tier": "S",
      "role": "防反近戰",
      "tags": [
        "高容錯",
        "新手友善",
        "坦度最高"
      ],
      "mech": "核心是格檔反擊：技能「虛空陣：雪風」架起防禦姿態，擋下任何傷害後以「瞬移」反擊，瞬移期間完全無敵；解鎖潛能後單次格檔可連續瞬移 3～5 次，額外瞬移不消耗 MP。天賦「身經百戰」在受擊或格檔後給霸體與傷害 +30%。基礎血量 12000，容錯極佳。注意衝刺與攻擊都只有霸體、沒有閃避幀，不能拿來吃持續傷害。",
      "awareness": [
        "反擊流帶自身【身經百戰】（受擊／格檔後霸體＋傷害 +30%）",
        "提傷建議琴恩【時之靜止】或九重【王牌獵人】",
        "不建議桃兒卡卡【急躁】：白面連段慢，難維持 30 連段"
      ],
      "builds": [
        {
          "name": "撕裂刀刃風暴流",
          "style": "近戰爆發",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環",
            "傳承技風暴",
            "風暴加速"
          ],
          "duals": [
            "嗜血刃環",
            "嗜血風暴"
          ],
          "tip": "蓄力 A 劍氣自帶大範圍，先點滿撕裂三階＋刃環三階，再補刀刃風暴，成型後站樁輸出。"
        },
        {
          "name": "落雷光槍衝刺流",
          "style": "衝刺循環",
          "core": [
            "衝刺落雷",
            "落雷強化",
            "雙重落雷",
            "技能光槍",
            "光槍強化",
            "多重光槍"
          ],
          "duals": [
            "落雷光槍",
            "光槍落雷"
          ],
          "tip": "靠傳承光槍啟動循環，傷害可觀。但白面衝刺只有霸體沒有無敵，別用來硬吃傷害。"
        },
        {
          "name": "蓄力光波重擊",
          "style": "單體重擊",
          "core": [
            "普攻光波",
            "光波強化",
            "召喚光陣",
            "大型光陣"
          ],
          "duals": [
            "光波快充"
          ],
          "tip": "重擊向普攻體系，輸出集中在單點。核心已含召喚光陣，「光波快充」可直接開出；不帶紅策的話，這一排拿三金本身就是完整體。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "naoto",
      "name": "黑鐵直人",
      "alias": "Naoto Kurogane",
      "tier": "S",
      "role": "蓄力爆發",
      "tags": [
        "拉格納上位版",
        "全驅動增傷",
        "機動高"
      ],
      "mech": "普攻＋Action 可開啟「全驅動」，期間所有攻擊強化；開啟需 100 SP，之後持續消耗 SP，進出時機要拿捏。天賦「獵人之眼」：對 HP 百分比低於自身的敵人 +25% 傷害，受到的傷害也 -25%。不像拉格納得先壓血才能增傷。",
      "awareness": [
        "提傷帶自身【獵人之眼】（對 HP% 低於自身者 +25% 傷害）",
        "嗜血套路搭拉格納【憤怒之死】（HP 減少後技能傷害 +25%）",
        "連段快，桃兒卡卡【急躁】也吃得到"
      ],
      "builds": [
        {
          "name": "刃系嗜血流",
          "style": "近戰爆發",
          "core": [
            "衝刺飛劍",
            "多重飛劍",
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂"
          ],
          "duals": [
            "嗜血飛劍"
          ],
          "tip": "刃系是目前公認最強的輸出線，嗜血飛劍配撕裂吸血，傷害非常誇張。想再開「雙向飛劍」要另補火精靈助戰，「召喚迴旋刃」則要另走飛刃樹。"
        },
        {
          "name": "撕裂刀刃風暴流",
          "style": "近戰爆發",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環",
            "傳承技風暴",
            "風暴加速"
          ],
          "duals": [
            "嗜血風暴",
            "嗜血刃環"
          ],
          "tip": "撕裂＋刀刃風暴，清圖與打王都穩。注意「針對影刺」的另一半要走影刺線：用技能影刺可以，用普攻影刺就會和普攻撕裂搶同一個普攻槽。"
        },
        {
          "name": "蓄力光波重擊",
          "style": "單體重擊",
          "core": [
            "普攻光波",
            "光波強化",
            "召喚光陣",
            "大型光陣"
          ],
          "duals": [
            "光波快充"
          ],
          "tip": "蓄力系角色的通用重擊配置。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "kokonoe",
      "name": "九重",
      "alias": "Kokonoe",
      "tier": "S",
      "role": "科技陣地",
      "tags": [
        "遠程轟炸",
        "操作簡單",
        "怕陣地戰"
      ],
      "mech": "激光裝置與導彈洗地，站樁輸出、清圖安逸。核心是「零件」：解鎖「通用強化：兵裝會留下零件」後，多數行動會在地上留下可引爆的零件；第二個通用強化讓三零件呈三角形排列時生成能量光束，兵裝 No.5 則讓附近零件額外發射雷射。潛能齊全後幾乎全屏自動輸出，除了「又臭又長」的奧米加空間不適合陣地戰，其他場景都很輕鬆。",
      "awareness": [
        "技能傷害帶自身【王牌獵人】（連殺 >10 時技能傷害 +35%）",
        "天賦靠連殺，被擊中就會重置，站位比機動更重要"
      ],
      "builds": [
        {
          "name": "寒冷四件套 + 雙黑洞",
          "style": "控場輪椅",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "冰霜爆破",
            "技能感電",
            "傳承技黑洞",
            "黑洞盛宴"
          ],
          "duals": [
            "冰霜脈衝"
          ],
          "inherit": [
            "黑洞減速"
          ],
          "tip": "最穩的輪椅配置。冰霜脈衝需要技能感電，所以寒冷樹要用「普攻寒冷」當基礎、把技能槽讓給感電。但「冰霜脈衝」走寒氣爆發分支、「黑洞減速」走聚寒成冰分支，兩者互斥——本局開冰霜脈衝，「黑洞減速」用傳承帶入。"
        },
        {
          "name": "技能寒冷純系",
          "style": "技能輸出",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "衝刺冰錐",
            "冰錐強化",
            "隨機冰錐"
          ],
          "duals": [
            "冰凍冰錐"
          ],
          "tip": "技能寒冷佔用技能槽，所以這套鎖定「聚寒成冰」分支：配衝刺冰錐可開「冰凍冰錐」，或配普攻淬毒開「寒冰毒霧」。分支互斥，開不出「冰霜脈衝」。"
        },
        {
          "name": "普攻撕裂過渡",
          "style": "前期過圖",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ],
          "tip": "開局到中期刷野圖用，成型快。但和「普攻寒冷」搶同一個普攻槽，後期要取捨。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "ragna",
      "recommendSlots": ["skill"],
      "recommendReason": "嗜血主要強化消耗 MP 的攻擊，普攻嗜血另需潛能",
      "name": "拉格納",
      "alias": "Ragna the Bloodedge",
      "tier": "A",
      "role": "吸血近戰",
      "tags": [
        "以血換血",
        "續航強",
        "需控血"
      ],
      "mech": "嗜血：使用帶 MP 消耗的攻擊時消耗自身當前 HP，換取高額技能傷害；命中後延遲回復部分 HP（多目標遞減）。消耗量依當前 HP 比例、回復量依最大 HP，所以接近瀕死時放才划算。要搭配「通用強化：血之興奮」才能把嗜血擴及普攻。基礎血量最低、閃避幀也不多，操作門檻高。",
      "awareness": [
        "核心帶自身【憤怒之死】（HP 減少後技能傷害 +25%）",
        "提傷搭桃兒卡卡【急躁】",
        "缺 MP 可搭結晶或九重【王牌獵人】"
      ],
      "builds": [
        {
          "name": "刃系嗜血飛劍流",
          "style": "吸血續戰",
          "core": [
            "衝刺飛劍",
            "多重飛劍",
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂"
          ],
          "duals": [
            "嗜血飛劍"
          ],
          "tip": "飛劍配撕裂吸血，邊打邊回血，是拉格納最舒服的一條線。「雙向飛劍」紅策需要另補火精靈助戰。"
        },
        {
          "name": "撕裂刀刃風暴流",
          "style": "近戰爆發",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環",
            "傳承技風暴",
            "風暴加速"
          ],
          "duals": [
            "嗜血風暴",
            "嗜血刃環"
          ],
          "tip": "偏爆發的清圖路線。"
        },
        {
          "name": "蓄力光波重擊",
          "style": "單體重擊",
          "core": [
            "普攻光波",
            "光波強化",
            "召喚光陣",
            "大型光陣"
          ],
          "duals": [
            "光波快充"
          ],
          "tip": "↓+A 重擊屬重擊向普攻，和光波四件套很搭。核心已含召喚光陣，「光波快充」可直接開出。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "jin",
      "name": "如月琴恩",
      "alias": "Jin Kisaragi",
      "tier": "A",
      "role": "冰凍控場",
      "tags": [
        "控場",
        "最佳傳承體",
        "閃避時停"
      ],
      "mech": "控場與連段並重。天賦「時之靜止」是閃避後讓敵人減速 3.5 秒（減速，不是完全停止）。核心操作是「收刀」：每次普攻或技能後劍柄會閃光，在閃光出現時出下一招可打出更大、傷害更高的版本。另有格檔可完全抵銷傷害。閃避觸發容易、容錯高，因此常被當「傳承體」借給主力角色。",
      "awareness": [
        "帶自身【時之靜止】：閃避後敵人減速 3.5 秒",
        "提傷可搭九重【王牌獵人】"
      ],
      "builds": [
        {
          "name": "冰霜脈衝（普攻寒冷線）",
          "style": "控制輸出",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "冰霜爆破",
            "技能感電"
          ],
          "duals": [
            "冰霜脈衝"
          ],
          "tip": "冰霜脈衝要「寒冷（寒氣爆發分支）+ 技能感電」；技能感電佔技能槽，所以寒冷樹必須用普攻寒冷當基礎。"
        },
        {
          "name": "冰錐控場流",
          "style": "技能控制",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "衝刺冰錐",
            "冰錐強化",
            "隨機冰錐"
          ],
          "duals": [
            "冰凍冰錐"
          ],
          "tip": "技能槽給技能寒冷，另一邊用衝刺冰錐，閃避即可觸發。這套鎖定「聚寒成冰」分支，才能開出「冰凍冰錐」。"
        },
        {
          "name": "寒冰毒霧（召喚向）",
          "style": "範圍控制",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "普攻淬毒",
            "河豚延續"
          ],
          "duals": [
            "寒冰毒霧"
          ],
          "tip": "不想拿衝刺系的話，用普攻淬毒配技能寒冷的「聚寒成冰」分支開寒冰毒霧，範圍控場更強。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "rachel",
      "recommendSlots": ["dash","basic"],
      "recommendReason": "可持續衝刺，蝙蝠使魔可觸發普攻策略",
      "name": "雷琪兒",
      "alias": "Rachel Alucard",
      "tier": "A",
      "role": "吸血召喚",
      "tags": [
        "無限衝刺",
        "15 秒無敵罩",
        "新手輪椅"
      ],
      "mech": "衝刺自帶無敵且可無限衝刺，另有 15 秒無敵防護罩（45 秒 CD），打無傷非常好用。天賦「常春藤之花」：數秒未攻擊就會召喚蝙蝠使魔自動啃咬敵人，這些傷害計為普攻傷害、會觸發普攻系策略，等於免費多一個普攻來源。屬於開局偏弱、後期很強的角色。",
      "awareness": [
        "帶自身【常春藤之花】：蝙蝠傷害計為普攻，會觸發普攻系策略",
        "提傷可搭桃兒卡卡【急躁】"
      ],
      "builds": [
        {
          "name": "毒彈轟炸流",
          "style": "連鎖輸出",
          "core": [
            "衝刺毒彈",
            "擴散毒彈",
            "普攻淬毒",
            "毒素污染",
            "急性中毒"
          ],
          "duals": [
            "中毒毒彈"
          ],
          "tip": "衝刺引爆毒液連鎖，操作簡單輸出直接，是新手最友善的輪椅打法。"
        },
        {
          "name": "技能寒冷流",
          "style": "技能控制",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "普攻淬毒",
            "河豚延續"
          ],
          "duals": [
            "寒冰毒霧"
          ],
          "tip": "技能寒冷佔技能槽，另一邊用普攻淬毒開寒冰毒霧；要鎖定「聚寒成冰」分支。"
        },
        {
          "name": "黑洞控場流",
          "style": "控場",
          "core": [
            "傳承技黑洞",
            "黑洞盛宴",
            "普攻寒冷",
            "聚寒成冰"
          ],
          "duals": [
            "黑洞減速"
          ],
          "tip": "黑洞減速要「傳承技黑洞 + 寒冷（聚寒成冰分支）」，所以除了黑洞線，還要另外拿一條寒冷線並選聚寒成冰。黑洞的 I 階只有「傳承技黑洞」一個入口，不會和其他黑洞線互卡。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "mai",
      "recommendSlots": ["basic"],
      "recommendReason": "架式重擊是主要輸出，優先普攻觸發的核心策略",
      "name": "棗麻衣",
      "alias": "Mai Natsume",
      "tier": "A",
      "role": "連段刺客",
      "tags": [
        "單體傷害最高",
        "最脆",
        "要維持連段"
      ],
      "mech": "核心是「綾錦架式」：地面長按普攻進入架式，再用其他按鍵施展湧、斗、焰，在架式中待越久傷害越高。天賦「加速」：使用技能後攻擊傷害 +30%，持續 3 秒。滿連段傷害是全角色最高，但生存能力最差，走位失誤就要交學費。",
      "awareness": [
        "帶自身【加速】：使用技能後攻擊傷害 +30%（3 秒）",
        "背擊套路搭琥珀響音【暗殺之道】（繞後 +30%）"
      ],
      "builds": [
        {
          "name": "光波重擊流",
          "style": "單體爆發",
          "core": [
            "普攻光波",
            "光波強化",
            "召喚光陣",
            "大型光陣"
          ],
          "duals": [
            "光波快充"
          ],
          "tip": "蓄力呵夜錦屬重擊向，光波四件套把輸出全部集中在一點。"
        },
        {
          "name": "影刺連段流",
          "style": "暗殺",
          "core": [
            "普攻影刺",
            "影刺強化",
            "終結撕裂",
            "衝刺影子",
            "影子強化"
          ],
          "duals": [
            "影子穿刺"
          ],
          "tip": "用影刺串起連段、把【加速】的增傷窗口接住後瞬發收頭。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "lambda",
      "recommendSlots": ["dash","basic"],
      "recommendReason": "閃避後爆發，優先衝刺或普攻觸發的核心策略",
      "name": "Λ-No.11",
      "alias": "Λ-No.11-",
      "tier": "A",
      "role": "閃避流遠程",
      "tags": [
        "閃避觸發爆發",
        "對空強",
        "吃節奏"
      ],
      "mech": "從虛空召喚劍刃遠程打擊，受到攻擊後立刻反擊並回血。核心是「閃避後觸發高爆發」，幾乎沒有真空期。天賦「地形優勢」：把敵人自高處打落時回復 60 MP，是補 MP 的簡便來源（敵人下墜被中斷就重置）。操作門檻比諾愛兒更高。",
      "awareness": [
        "帶自身【地形優勢】：打落敵人回 60 MP，可解決續航",
        "技能傷害搭九重【王牌獵人】"
      ],
      "builds": [
        {
          "name": "普攻寒冷高頻流",
          "style": "控制輸出",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "冰霜爆破",
            "技能感電"
          ],
          "duals": [
            "冰霜脈衝"
          ],
          "tip": "兩次普攻間隙短，能快速疊寒冷觸發寒氣爆發的脈衝。"
        },
        {
          "name": "萬金油五紅",
          "style": "傳承為主",
          "core": [
            "傳承技黑洞",
            "黑洞盛宴",
            "普攻寒冷",
            "聚寒成冰"
          ],
          "duals": [
            "黑洞減速"
          ],
          "inherit": [
            "斬殺風暴",
            "冰爆地雷",
            "光波傳遞",
            "影刃衝刺"
          ],
          "tip": "這套的核心紅策主要靠傳承帶入，本局只負責鋪黑洞控場與聚寒成冰。想湊五紅就必須犧牲普攻位，拿不到兩個以上的普攻紅策。"
        },
        {
          "name": "冰刺閃避流",
          "style": "召喚",
          "core": [
            "召喚冰刺",
            "冰刺強化",
            "精準冰刺",
            "極冰利刃",
            "技能寒冷",
            "聚寒成冰",
            "衝刺影子",
            "影子強化"
          ],
          "duals": [
            "影子冰刺",
            "無盡冰刺"
          ],
          "tip": "衝刺召影子、影子因本體帶冰刺而召喚冰刺，是典型的召喚流。「無盡冰刺」需要寒冷線的「聚寒成冰」分支，技能槽正好空著可以放技能寒冷。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "icey",
      "recommendSlots": ["basic","dash"],
      "recommendReason": "依靠普攻回復 MP，並具有多段衝刺能力",
      "name": "艾希",
      "alias": "ICEY（聯動）",
      "tier": "A",
      "role": "高機動",
      "tags": [
        "空中五衝刺",
        "自帶護盾",
        "無自動 MP 回復"
      ],
      "mech": "《艾希》聯動角色。空中可五段衝刺、自帶護盾，開局性能極強、後期偏平。最大特點是唯一不會隨時間回復 MP 的原型，只能靠普攻命中回 MP，連續放技能會很吃緊，需要穿插普攻或拿回藍策略撐住。天賦「機械化敵人」：對機械系敵人 +10% 傷害並在低血時處決。",
      "awareness": [
        "MP 續航優先：建議搭回藍類結晶或策略",
        "打機械系關卡最適合帶自身【機械化敵人】",
        "提傷搭桃兒卡卡【急躁】"
      ],
      "builds": [
        {
          "name": "元素輪椅流",
          "style": "自動清圖",
          "core": [
            "環繞電球",
            "大型電球",
            "密集電球",
            "普攻閃電",
            "閃電過載",
            "閃電延伸",
            "衝刺落雷",
            "落雷強化",
            "雙重落雷"
          ],
          "duals": [
            "電球閃電",
            "電球落雷"
          ],
          "tip": "感電＋電球＋落雷的組合，拿完策略後基本可以自動清圖，操作門檻最低。"
        },
        {
          "name": "電樁流",
          "style": "召喚聯動",
          "core": [
            "傳承技電樁",
            "超載電樁",
            "持久電樁",
            "大型電樁",
            "召喚觸手",
            "連擊觸手",
            "技能閃電",
            "閃電過載",
            "閃電延伸"
          ],
          "duals": [
            "觸手閃電"
          ],
          "tip": "傳承電樁＋觸手連鎖。閃電過載要用技能閃電當基礎（技能槽），而召喚槽已被觸手佔用，所以這套不能再帶召喚光陣。"
        },
        {
          "name": "技能寒冷流",
          "style": "技能控制",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "衝刺冰錐",
            "冰錐強化",
            "隨機冰錐"
          ],
          "duals": [
            "冰凍冰錐"
          ],
          "tip": "技能寒冷佔技能槽，鎖定「聚寒成冰」分支，配衝刺冰錐即可開出「冰凍冰錐」。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "noel",
      "recommendSlots": ["basic"],
      "recommendReason": "普攻頻率高，優先普攻觸發的核心策略",
      "name": "諾愛兒",
      "alias": "Noel Vermillion",
      "tier": "B",
      "role": "雙槍遠程",
      "tags": [
        "射速高",
        "跑圖最快",
        "身板脆"
      ],
      "mech": "全遊最高移速，雙槍普攻間隙短、頻率高，跑圖效率極高。招牌是「快速裝填」（[地面] 上＋技能）：完全補滿 MP、CD 18～20 秒，用來不斷餵 SP 技能「零式槍：斯雷普尼爾」。天賦「精準打擊」：遠距離命中時自身整體傷害 +50%。缺點是身板脆，被近身容易暴斃，打王很吃策略傷害。",
      "awareness": [
        "帶自身【精準打擊】：遠距離命中時傷害 +50%",
        "她的傳承技【快速裝填 [EX]】適合繼承給主力"
      ],
      "builds": [
        {
          "name": "普攻寒冷四件套",
          "style": "控制輸出",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "冰霜爆破",
            "技能感電"
          ],
          "duals": [
            "冰霜脈衝"
          ],
          "tip": "高頻普攻快速疊寒冷，再靠技能感電開冰霜脈衝。"
        },
        {
          "name": "撕裂四件套",
          "style": "清圖",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ],
          "tip": "無視霸體＋斬殺效果，清圖效率高。注意撕裂與寒冷搶普攻槽，二選一。"
        },
        {
          "name": "技能寒冷流",
          "style": "技能控制",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "衝刺冰錐",
            "冰錐強化",
            "隨機冰錐"
          ],
          "duals": [
            "冰凍冰錐"
          ],
          "tip": "技能寒冷佔技能槽，鎖定「聚寒成冰」分支，配衝刺冰錐即可開出「冰凍冰錐」。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "taokaka",
      "name": "桃兒卡卡",
      "alias": "Taokaka",
      "tier": "B",
      "role": "高機動",
      "tags": [
        "衝刺無敵",
        "米字衝刺",
        "技能好接撕裂"
      ],
      "mech": "衝刺帶無敵、機動極高，米字位移。天賦「急躁」：連段 30 以上開始增傷、最高 +30%（100 連段封頂），非常容易達成。SP 技能「幾乎變成兩個！」生成分身（50 SP），會在你行動後稍晚複製同一動作，配長持續傷害的招式能疊出大量輸出。技能與撕裂的適配度是全角色最好的之一。",
      "awareness": [
        "核心帶自身【急躁】：連段 30 以上最多 +30% 傷害",
        "機動／閃避需求可搭 Es【紋章之力】"
      ],
      "builds": [
        {
          "name": "冰刺召喚流",
          "style": "召喚",
          "core": [
            "召喚冰刺",
            "冰刺強化",
            "精準冰刺",
            "極冰利刃",
            "技能寒冷",
            "聚寒成冰",
            "衝刺影子",
            "影子強化"
          ],
          "duals": [
            "影子冰刺",
            "無盡冰刺"
          ],
          "tip": "衝刺召影子、影子因本體帶冰刺而召喚冰刺，性價比高又不用怎麼動手。「無盡冰刺」需要寒冷線的「聚寒成冰」分支，技能槽正好空著。"
        },
        {
          "name": "撕裂旋風流",
          "style": "清圖",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ],
          "tip": "旋轉系技能最好接撕裂，清怪手感極順。"
        },
        {
          "name": "普攻寒冷高頻流",
          "style": "控制輸出",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "冰霜爆破",
            "技能感電"
          ],
          "duals": [
            "冰霜脈衝"
          ]
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "es",
      "recommendSlots": ["basic"],
      "recommendReason": "紋章具有普攻觸發特性，優先普攻策略",
      "name": "Es",
      "alias": "Es",
      "tier": "B",
      "role": "紋章連段",
      "tags": [
        "御三家之一",
        "連招舒服",
        "資料較少"
      ],
      "mech": "蒼翼本傳的 Es。核心是紋章系統：紋章會出現在各種普攻與技能周圍，隨時間向外擴張、每次額外命中都造成傷害。天賦「紋章之力」讓她在閃避時原地生成紋章，兼具輸出與控場；隱藏效果的紋章屬於泛普攻招式，連招流暢、特效華麗。",
      "awareness": [
        "推薦繼承琴恩【時之靜止】、棗麻衣【加速】",
        "普攻寒冷線要選「聚寒成冰」分支"
      ],
      "builds": [
        {
          "name": "紋章普攻寒冷流",
          "style": "控制輸出",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "聚寒成冰",
            "冰霜爆破",
            "技能感電"
          ],
          "duals": [
            "冰霜脈衝"
          ]
        },
        {
          "name": "撕裂快刷流",
          "style": "清圖",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ]
        },
        {
          "name": "落雷光槍衝刺流",
          "style": "衝刺循環",
          "core": [
            "衝刺落雷",
            "落雷強化",
            "雙重落雷",
            "技能光槍",
            "光槍強化",
            "多重光槍"
          ],
          "duals": [
            "落雷光槍",
            "光槍落雷"
          ]
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "hazama",
      "recommendSlots": ["skill"],
      "recommendReason": "技能為主要輸出，優先技能觸發的核心策略",
      "name": "哈札馬",
      "alias": "Hazama",
      "tier": "B",
      "role": "技能流",
      "tags": [
        "移動無敵",
        "吃 MP",
        "普攻極短"
      ],
      "mech": "普攻距離極短、範圍差，屬於純技能流角色。核心是長按技能放出的「蛇環」，持續吸取範圍內敵人的 MP；解鎖「通用強化：蛇環」後，多數技能與普攻會變成 MP 自給自足，續航問題當場解決。天賦「蛇之凝視」：近距離命中讓遠程傷害 +30%、遠距離命中讓近戰傷害 +30%，鼓勵不斷進出敵人的攻擊範圍。移動技「銜尾蛇」解鎖毒咬後，拉扯期間有完全無敵的閃避幀。",
      "awareness": [
        "先拿「通用強化：蛇環」就能 MP 自給自足，不必急著搭回藍結晶",
        "帶自身【蛇之凝視】或九重【王牌獵人】提傷"
      ],
      "builds": [
        {
          "name": "普攻寒冷高頻流",
          "style": "控制輸出",
          "core": [
            "普攻寒冷",
            "寒氣爆發",
            "冰霜爆破",
            "技能感電"
          ],
          "duals": [
            "冰霜脈衝"
          ],
          "tip": "普攻間隙短，適合高頻疊寒冷。"
        },
        {
          "name": "黑洞控場傳承體",
          "style": "傳承輔助",
          "core": [
            "傳承技黑洞",
            "黑洞盛宴",
            "普攻寒冷",
            "聚寒成冰"
          ],
          "duals": [
            "黑洞減速"
          ],
          "tip": "常見做法是把「黑洞減速」綁在他身上當二傳承，為主力角色提供控場。"
        },
        {
          "name": "技能寒冷冰錐流",
          "style": "技能控場",
          "core": [
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "衝刺冰錐",
            "冰錐強化",
            "隨機冰錐"
          ],
          "duals": [
            "冰凍冰錐"
          ],
          "tip": "依技能主輸出特點提供的定性候選；採既有寒冷與冰錐合法路線，實戰強度待驗證。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "hibiki",
      "name": "琥珀響音",
      "alias": "Hibiki Kohaku",
      "tier": "B",
      "role": "團隊增益",
      "tags": [
        "繞後 +30%",
        "組隊增益",
        "單刷一般"
      ],
      "mech": "天賦「暗殺之道」：從敵人背後攻擊時該次傷害 +30%。他能用 [地面] 普攻連擊或重擊把敵人轉身，比其他角色更容易穩定觸發；「無盡蕾絲」的分身也能升級成自動從背後攻擊。官方原型頁只列出這一項天賦，坊間流傳的全隊增傷與低血免死未見記載。單刷表現一般，組隊價值極高。",
      "awareness": [
        "核心帶自身【暗殺之道】：繞後 +30%",
        "注意麻衣【加速】要放完技能才生效，純普攻流吃不到"
      ],
      "builds": [
        {
          "name": "暗影雙刀流",
          "style": "近戰輸出",
          "core": [
            "衝刺影子",
            "影子強化",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "影刃衝刺"
          ],
          "tip": "影刺＋刃環為主的輪椅配置，新手開荒可用。"
        },
        {
          "name": "撕裂繞後流",
          "style": "清圖",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ],
          "tip": "靠連擊把敵人轉身，繞後 +30% 把撕裂傷害拉滿。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "shoushuzhe",
      "name": "梟首者",
      "alias": "死亡細胞聯動",
      "tier": "B",
      "role": "萬用對策",
      "tags": [
        "變招極多",
        "血量很薄",
        "撕裂標配"
      ],
      "mech": "《死亡細胞》聯動角色，變招極多但血量很薄。關鍵限制：必須先取得武器背包 I 的「強化初始武器」潛能，才能解鎖背包 II／III、突變與通用強化；背包 II／III 的潛能多半是背包 I 的一部分，要在通用強化裡蒐集「各種武器強化」才會同步。傷害核心是暴擊（+50%／強化暴擊 +100%）。打強力 Boss 時容錯低。",
      "awareness": [
        "帶自身【戰術治療】：受傷後短時間內命中敵人可回血",
        "撕裂四件套為極限區域標配",
        "結晶建議搭「清除負面回藍」類"
      ],
      "builds": [
        {
          "name": "撕裂四件套",
          "style": "標準輸出",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ],
          "tip": "極限區域的標配，重點是讓同系潛能互相連結，把傷害拉到最大。"
        },
        {
          "name": "殘血斬殺流",
          "style": "爆發",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "技能寒冷",
            "聚寒成冰",
            "強力破冰",
            "普攻淬毒",
            "河豚延續"
          ],
          "duals": [
            "寒冰毒霧"
          ],
          "inherit": [
            "冰霜脈衝"
          ],
          "tip": "開局用普攻撕裂配「HP 低於 35% 直接秒殺」的潛能，另一邊帶技能寒冷開寒冰毒霧，冰霜脈衝則靠傳承帶入。"
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "platinum",
      "name": "白金",
      "alias": "Platinum",
      "tier": "B",
      "role": "切槍多樣",
      "tags": [
        "最新原型體",
        "三種方向",
        "資料累積中"
      ],
      "mech": "最新加入的原型體。社群目前歸納出「光槍流 / 切槍流 / 滯空流」三種方向，資料仍在累積中，下列為通用度較高的配置。",
      "awareness": [
        "遠程／技能帶九重【王牌獵人】（連殺 >10 技能傷害 +35%）",
        "提傷搭桃兒卡卡【急躁】"
      ],
      "builds": [
        {
          "name": "光槍流",
          "style": "遠程爆發",
          "core": [
            "技能光槍",
            "光槍強化",
            "聖光光槍",
            "多重光槍",
            "衝刺落雷",
            "落雷強化",
            "雙重落雷"
          ],
          "duals": [
            "落雷光槍"
          ],
          "tip": "成型後輸出暴力，但對策略品質要求高。"
        },
        {
          "name": "滯空流",
          "style": "對空特化",
          "core": [
            "傳承技冰雹",
            "廣域冰雹",
            "持久冰雹",
            "大型冰雹",
            "放置地雷",
            "地雷強化",
            "高效布雷"
          ],
          "duals": [
            "冰爆地雷"
          ],
          "tip": "應對飛行型敵人有獨特優勢，需要特定潛能配合。"
        },
        {
          "name": "電球混傷流",
          "style": "自動輸出",
          "core": [
            "環繞電球",
            "大型電球",
            "密集電球",
            "普攻閃電",
            "閃電過載",
            "閃電延伸"
          ],
          "duals": [
            "電球閃電"
          ]
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    },
    {
      "id": "bullet",
      "name": "芭烈特",
      "alias": "Bullet",
      "tier": "B",
      "role": "摔技近戰",
      "tags": [
        "斷招強",
        "社群資料少"
      ],
      "mech": "以抓取投摔為核心。抓取對霸體、格擋中的敵人有專精，但對扎根型敵人與多數 Boss 明顯較弱（Boss 只能在攻擊間隙抓）；後燃器、十字火輪、全能交戰會召喚可投擲的沙包或熔岩，讓原本只對群敵有效的戰術也能用於 Boss。天賦「熱機」：成功投擲後傷害 +30%，持續 5 秒。社群攻略相對較少，建議從通用度最高的刃系／撕裂配置起手。",
      "awareness": [
        "帶自身【熱機】：成功投擲後傷害 +30%（5 秒）",
        "嗜血套路搭拉格納【憤怒之死】",
        "提傷搭桃兒卡卡【急躁】"
      ],
      "builds": [
        {
          "name": "撕裂通用流",
          "style": "近戰輸出",
          "core": [
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂",
            "召喚刃環",
            "雙生刃環"
          ],
          "duals": [
            "嗜血刃環"
          ]
        },
        {
          "name": "飛劍刃系流",
          "style": "近戰爆發",
          "core": [
            "衝刺飛劍",
            "多重飛劍",
            "普攻撕裂",
            "撕裂強化",
            "終結撕裂"
          ],
          "duals": [
            "嗜血飛劍"
          ]
        }
      ],
      "sourceIds": [
        "legacy-catalogue"
      ],
      "confidence": "unverified"
    }
  ],
  "METADATA": {
    "gameId": "blazblue-entropy-effect",
    "gameVersion": null,
    "dataVersion": "catalogue-2026-11-08",
    "rulesVersion": "inherit-prerequisites-2026-11-08",
    "updatedAt": "2026-11-08",
    "platform": "Steam/PC",
    "locale": "zh-Hant"
  },
  "SOURCES": [
    {
      "sourceId": "wiki-damage-20261018",
      "url": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Tactics",
      "type": "community",
      "gameVersion": null,
      "checkedAt": "2026-10-18",
      "notes": "僅核對六條紅策描述的固定傷害或比例缺漏；未做 Steam 實機測量，其他目錄仍未逐條核實。"
    },
    {
      "sourceId": "legacy-catalogue",
      "path": "docs/strategy-reference.md",
      "type": "legacy-import",
      "gameVersion": null,
      "checkedAt": null,
      "notes": "沿用既有目錄與推薦；未保存逐條原始網址／revision，不能視為已按遊戲驗證。"
    },
    {
      "sourceId": "wiki-rules",
      "url": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Tactics",
      "type": "community",
      "gameVersion": null,
      "checkedAt": "2026-10-15",
      "notes": "既有規則核對紀錄；支持普通取得、承載與互斥規則，不證明目錄數值。"
    }
  ]
};
if (typeof module !== "undefined") module.exports = CompassData;
