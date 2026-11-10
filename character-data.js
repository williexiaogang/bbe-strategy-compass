// 角色潛能（技能樹）資料 — 由 blazblue.wiki Prototypes 頁面整理
// 產生方式：.workbuddy/build/make_data.py（勿手改）
const CHARACTER_SKILLS = [
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
  "hasData": true,
  "sourceIds": [
   "prototype-hakumen"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Hakumen",
  "baseHp": 1240,
  "baseAtk": 320,
  "potentialCount": "30 潛能（+600%）",
  "overview": "白面是《蒼翼混沌效應》中以格擋反擊為核心的角色，專精於格擋幾乎任何攻擊並以十倍奉還。他的技能「虛空陣：雪風」能架起防禦姿態，格擋任何傷害後以瞬移大斬反擊，瞬移期間完全無敵。透過潛能強化後，他會從遲緩的角色搖身一變成為機動性頂尖的戰力，能在毫髮無傷的情況下殲滅雜兵與首領。",
  "talent": {
   "nameEn": "Battle Hardened",
   "nameZh": "身經百戰（Battle Hardened）",
   "desc": "受到攻擊或格擋住一擊後，獲得霸體與攻擊傷害 +30%，持續 6 秒。霸體是特殊機制，能讓你免於被攻擊打斷或擊飛；雖然仍應盡量避免受傷，但這讓你在招式時機失誤時不至於被擊飛，得以順利終結敵人。玩白面或將他作為繼承原型時，不應過度依賴此天賦。"
  },
  "uniqueMechanic": {
   "nameZh": "虛空陣：雪風（Kokuujin: Yukikaze）",
   "desc": "白面的招牌機制。技能會架起防禦姿態，格擋任何來源的傷害後，以快速衝刺搭配一記極長的橫斬反擊，此反擊被稱為「瞬移」，且在瞬移期間白面完全無敵。在防禦姿態中按普攻可額外花費 50 MP 手動觸發瞬移，讓你能在不依賴敵人攻擊的情況下安全展開輸出。解鎖第二個潛能後，可在瞬移結束時按普攻再發動一次瞬移，最多 3 次；三個潛能全數解鎖後，單次格擋可連續瞬移的次數提升至 5 次，且額外瞬移不消耗 MP，既能打出高 DPS 又能長時間維持無敵。"
  },
  "legacySkills": [
   {
    "nameEn": "Kokuujin: Jinrai",
    "nameZh": "虛空陣：迅雷（Kokuujin: Jinrai）",
    "desc": "擺出防禦架式，格擋成功時在原型周圍召喚巨大落雷，造成大範圍巨額傷害。此高傷害傳承技模仿白面的 SP 技能，發動時附帶無敵幀；但若未受到攻擊便不會觸發，也無法像白面的格擋那樣手動發動。在其他角色身上擁有格擋固然不錯，但由於他們更容易脫離險境，實用性較為情境化。"
   },
   {
    "nameEn": "Kongou",
    "nameZh": "金剛（Kongou）",
    "desc": "進入霸體狀態 7 秒，期間受到的傷害降低 55%，減傷幅度隨等級提升。這項狀態型傳承技能讓你在短時間內極為耐打，但不應優先於虛空陣：迅雷選取，因為最佳策略永遠是完全迴避傷害。"
   }
  ],
  "branches": [
   {
    "nameEn": "Kandachi (Attack)",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：白面施展三段連擊，依序為下劈、踏擊，最後是一記大斬。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "衝刺或落地後按普攻，可直接使出普攻連段的第三段；長按普攻則施展蓄力普攻。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "攻擊期間，白面獲得霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "蓮華：[地面] 下+普攻 x5：施展全新的五段連擊，攻擊幅度較小，但第四段會將對手擊飛，最後以一記大斬收尾。蓮華期間白面獲得霸體。",
      "sub": [
       {
        "t": "普攻 > 普攻 > 下+普攻 > 下+普攻：白面會從一般普攻連段切換到蓮華的後半段。此外，蓮華追加了數段攻擊，使其成為 11 段連擊。",
        "k": "extra"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "蓮華 + 普攻：霸體",
      "effect": "蓮華連段期間，白面擁有更多霸體。"
     },
     {
      "cond": "蓮華 + 普攻：霸體 與 通用強化：霸體時受到傷害降低",
      "effect": "蓮華啟動期間，白面獲得無敵幀。"
     },
     {
      "cond": "普攻：[空中] 普攻 > 普攻 + 蓮華",
      "effect": "蓮華的傷害提高。"
     },
     {
      "cond": "普攻：[空中] 普攻 > 普攻 + 蓮華 與 跳躍：火螢",
      "effect": "蓮華的傷害進一步提高。"
     },
     {
      "cond": "普攻：[空中] 普攻 > 普攻 + 蓮華",
      "effect": "貫的傷害提高。"
     },
     {
      "cond": "普攻：[空中] 普攻 > 普攻 + 蓮華 與 跳躍：火螢",
      "effect": "貫的傷害進一步提高。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設可跳躍兩次。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：向前斬擊，接著施展落下攻擊。",
      "sub": [
       {
        "t": "[空中] 普攻會朝斜下方送出衝擊波，落下攻擊則會產生大範圍的衝擊震波。",
        "k": "extra"
       },
       {
        "t": "落下攻擊傷害更高，並產生更大的衝擊波。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "白面現在可以三段跳。受到攻擊時，可立即跳躍受身恢復，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "火螢：上+普攻：向上飛踢並將敵人擊飛。白面在啟動時獲得短暫無敵幀，之後獲得霸體。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：火螢 + 衝擊波",
      "effect": "衝擊波傷害提高。"
     },
     {
      "cond": "跳躍：火螢 + 衝擊波 與 虛空陣：疾風",
      "effect": "衝擊波傷害進一步提高。"
     },
     {
      "cond": "貫：衝刺後或落下攻擊後按普攻",
      "effect": "衝刺或落地後按普攻，可施展普攻連段的第三段。長按普攻則立即開始蓄力斬鐵。"
     },
     {
      "cond": "貫：霸體 與 跳躍：火螢",
      "effect": "火螢現在擁有更多霸體。"
     },
     {
      "cond": "跳躍：火螢 與 通用強化：霸體時受到傷害降低",
      "effect": "火螢啟動時獲得更多無敵幀。"
     },
     {
      "cond": "跳躍：火螢 + 衝擊波",
      "effect": "火螢的傷害提高。"
     },
     {
      "cond": "跳躍：三段跳 + 衝擊波",
      "effect": "空中時，白面可跳躍以重置[空中]普攻的攻擊次數上限。"
     }
    ]
   },
   {
    "nameEn": "Isaha (Dash)",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：施展短距離的肩撞，帶有霸體與極短的無敵時間。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "移動距離更遠，並可破壞霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "白面現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺獲得更多無敵幀。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "蓮華：普攻 > 普攻 > 下+普攻 > 下+普攻",
      "effect": "衝刺 > 下+普攻：白面會立即銜接至蓮華連段的後半段。"
     },
     {
      "cond": "所有跳躍潛能 與 柳",
      "effect": "空中時，白面可衝刺以重置[空中]普攻的攻擊次數上限。"
     }
    ]
   },
   {
    "nameEn": "Kokuujin: Yukikaze",
    "nameZh": "虛空陣：雪風（Kokuujin: Yukikaze）",
    "nodes": [
     {
      "text": "技能：擺出防禦架式。格擋到傷害時，施展瞬移。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "技能 > 普攻：立即施展瞬移。MP:100",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "現在可以格擋來自後方的攻擊。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "瞬移現在會造成多段命中。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在瞬移結束時按普攻，可再施展一次瞬移，最多 3 次且不消耗 MP。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "虛空陣：迅雷 與 雪風",
      "effect": "連續瞬移：格擋到傷害時獲得更多 SP。"
     },
     {
      "cond": "衝刺：移動距離增加",
      "effect": "雪風的移動距離更遠。"
     },
     {
      "cond": "所有虛空陣：雪風潛能",
      "effect": "連續瞬移的次數增加至 5 次。"
     }
    ]
   },
   {
    "nameEn": "Zantetsu",
    "nameZh": "斬鐵（Zantetsu）",
    "nodes": [
     {
      "text": "[地面] 長按普攻：施展一記快速下斬，接著開始蓄力一記大型前斬。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "蓄力期間，白面獲得霸體；蓄滿後可破壞敵人的霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "額外向前送出衝擊波。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "省略最初的斬擊，立即開始蓄力。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[地面] 剎華：下+長按普攻：開始蓄力一記大型橫斬，可攻擊白面兩側的敵人。",
      "kind": "extra",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Yanagi",
    "nameZh": "柳（Yanagi）",
    "nodes": [
     {
      "text": "[地面] 上+衝刺：向前突進並抓住敵人，接著將其砸向地面。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "突進距離更遠，並附帶無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "砸擊傷害更高、範圍更廣。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在抓住敵人前按普攻，可施展掌擊。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Shiden",
    "nameZh": "紫電（Shiden）",
    "nodes": [
     {
      "text": "下+衝刺：施展瞬移，將白面傳送至前方。啟動時獲得少量無敵幀，整個過程中獲得霸體。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "瞬移現在會造成多段命中。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "瞬移的移動距離更遠。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "現在可以連續使用三次。長按下並按左/右可改變方向。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "三段跳 + 空中攻擊衝擊波 與 柳",
      "effect": "空中時，紫電可重置白面[空中]普攻的攻擊次數上限。"
     },
     {
      "cond": "衝刺：無敵幀增加",
      "effect": "紫電現在擁有更多無敵幀。"
     },
     {
      "cond": "紫電",
      "effect": "紫電不會中斷普攻連段。"
     },
     {
      "cond": "紫電：瞬移多段命中 + 瞬移距離更遠",
      "effect": "紫電現在可以貫穿霸體。"
     }
    ]
   },
   {
    "nameEn": "Kokuujin: Shippu",
    "nameZh": "虛空陣：疾風（Kokuujin: Shippu）",
    "nodes": [
     {
      "text": "[地面] 上+長按技能：蓄力後向前送出衝擊波。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "白面可以不必蓄力，立即送出衝擊波。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "長按技能會持續消耗 MP，向前送出額外的衝擊波，但傷害較低。最多消耗 110 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "傷害更高、範圍更大。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "虛空陣：迅雷",
      "effect": "虛空陣：疾風命中敵人時獲得 SP。"
     },
     {
      "cond": "通用強化：霸體時受到傷害降低",
      "effect": "白面在蓄力虛空陣：疾風時受到的傷害降低。"
     }
    ]
   },
   {
    "nameEn": "Kokuujin: Jinrai",
    "nameZh": "虛空陣：迅雷（Kokuujin: Jinrai）",
    "nodes": [
     {
      "text": "下+技能：擺出特殊的防禦架式。格擋到傷害時釋放迅雷，一道造成巨額傷害的巨大光束。SP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "下+技能 > 普攻：立即釋放迅雷。SP:100",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "SP：使用虛空陣：雪風格擋時獲得 SP。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "虛空陣：雪風：瞬移多段命中",
      "effect": "依虛空陣：雪風與虛空陣：疾風的命中次數獲得額外 SP。"
     },
     {
      "cond": "虛空陣：雪風：可格擋後方攻擊",
      "effect": "使用虛空陣：迅雷格擋到傷害時獲得 SP。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "白面擁有霸體時，受到的傷害降低。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "白面擁有霸體時，受到的傷害進一步降低。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "貫：衝刺後或落下攻擊後按普攻 與 通用強化：霸體時受到傷害降低",
      "effect": "白面普攻連段的第三與第五段獲得強化。"
     },
     {
      "cond": "貫：衝刺後或落下攻擊後按普攻 + 蓮華：連段延長 與 通用強化：霸體時受到傷害降低",
      "effect": "蓮華的第五段獲得強化。"
     }
    ]
   }
  ],
  "nodeCount": 43,
  "branchCount": 10
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
  "hasData": true,
  "sourceIds": [
   "prototype-naoto"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Naoto Kurogane",
  "baseHp": 1600,
  "baseAtk": 135,
  "potentialCount": "33 潛能（+660%）",
  "overview": "黑鐵直人是《蒼翼混沌效應》的第四位 DLC 角色，與《蒼翼混沌效應 X》一同推出。他融合了琴恩的蓄力指令與拉格納的壓倒性傷害，以高速突進撕裂敵人。他擁有消耗 SP 換取巨額傷害的「全驅動」強化狀態，只要熟練其操作，便能應付任何戰況。",
  "talent": {
   "nameEn": "Eye of the Hunter",
   "nameZh": "獵人之眼（Eye of the Hunter）",
   "desc": "對 HP 百分比低於自身的敵人造成 +25% 傷害；受到 HP 百分比高於自身的敵人所造成的傷害降低 25%。"
  },
  "uniqueMechanic": {
   "nameZh": "全驅動（Full Drive）",
   "desc": "按下普攻 + Action 鍵可進入全驅動狀態，期間所有攻擊都會獲得強化。發動需 100 SP，之後會持續緩慢消耗 SP；可隨時再次按普攻 + Action 無代價地提前解除。在解鎖隱藏效果之前，SP 只能自然回復，因此進出全驅動的時機必須妥善掌握以最大化其覆蓋率。雖然直人不靠它也能打出巨額傷害，但全驅動帶來的增益相當可觀。"
  },
  "legacySkills": [
   {
    "nameEn": "Blood Chaser",
    "nameZh": "血之追獵者（Blood Chaser）",
    "desc": "進入全驅動狀態 8 秒，期間近距離的通用攻擊會召喚血色形體，每次額外造成 138 點傷害。"
   },
   {
    "nameEn": "Blood Spike",
    "nameZh": "血之尖刺（Blood Spike）",
    "desc": "同時在原型周圍生成多把血之刃。被命中的敵人會持續受到傷害，總計最多 972 點。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：施展四段連擊，最後以鮮血之刃揮出一記大型前斬收尾。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "斬界：[地面] 長按普攻：長按普攻會讓直人以鮮血之刃施展傷害更高、範圍更大的攻擊。可受全驅動強化。在全驅動狀態下施展驅逐俯衝並經嗜血強化時，無法藉由長按普攻立即取消成斬界；按下 Action 鍵會讓直人貼地並改為施展斬界。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "斬界：[地面] 下+長按普攻：直人蓄力兩段揮砍，先攻擊前方，再攻擊上方。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "驅逐俯衝：[空中] 下+普攻：直人施展俯衝下墜，落地時引發小範圍爆炸。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[地面]時，若未立即按下普攻鍵，直人的通用攻擊會派生出第二段追擊。依追擊期間按下普攻鍵的時機不同，可衍生出多種不同的普攻連段。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "直人的通用攻擊現在附帶霸體。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "斬界：長按普攻/下+長按普攻 > 普攻 > 普攻",
      "effect": "可施展兩段額外的追擊。"
     },
     {
      "cond": "斬界：增幅器效果下",
      "effect": "斬界會造成多段傷害。"
     },
     {
      "cond": "普攻：經嗜血強化時",
      "effect": "直人的攻擊範圍更大，並對敵人造成更多受擊硬直。"
     },
     {
      "cond": "普攻：增幅器效果下",
      "effect": "攻擊會造成多段傷害。"
     },
     {
      "cond": "普攻：衝刺後長按普攻/下+長按普攻",
      "effect": "蓄力期間獲得霸體。"
     },
     {
      "cond": "普攻：衝刺後長按普攻/下+長按普攻",
      "effect": "蓄力期間獲得無敵幀。"
     },
     {
      "cond": "普攻：衝刺後將長按普攻/下+長按普攻蓄滿",
      "effect": "整段攻擊皆獲得無敵幀。"
     },
     {
      "cond": "普攻：經全驅動強化時",
      "effect": "長按普攻/下+長按普攻在蓄力期間獲得無敵幀。"
     },
     {
      "cond": "普攻：經全驅動強化並將長按普攻/下+長按普攻蓄滿",
      "effect": "整段攻擊皆獲得無敵幀。"
     },
     {
      "cond": "普攻：[地面]或[空中]時",
      "effect": "施展攻擊時可短暫獲得無敵幀。"
     },
     {
      "cond": "普攻：[地面]普攻",
      "effect": "可以不消耗 MP 銜接神聖收割者。"
     },
     {
      "cond": "普攻：以追擊施展神聖收割者",
      "effect": "回復少量 SP。"
     }
    ]
   },
   {
    "nameEn": "Inferno Crusader",
    "nameZh": "地獄十字（Inferno Crusader）",
    "nodes": [
     {
      "text": "[地面] 上+普攻：直人以升龍拳向上躍起，攻擊期間獲得短暫無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "地獄十字現在擁有更多無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "現在可在[空中]使用。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "過頂踢：地獄十字 > 下+普攻：直人在地獄十字後向下斬擊下方。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "上+普攻 > 上+普攻 > 上+普攻",
      "effect": "在地獄十字後再按兩次普攻，可施展兩段額外追擊。每段追擊皆附帶短暫無敵幀。"
     },
     {
      "cond": "經嗜血強化時",
      "effect": "地獄十字範圍更大，並對敵人造成更多受擊硬直。"
     },
     {
      "cond": "衝刺後長按上+普攻",
      "effect": "可蓄力地獄十字，蓄力期間獲得無敵幀。"
     },
     {
      "cond": "地獄十字經增幅器效果強化",
      "effect": "造成多段傷害、擁有更多無敵幀，且出招更快。"
     },
     {
      "cond": "衝刺後施展地獄十字",
      "effect": "整段攻擊完全無敵。"
     },
     {
      "cond": "衝刺後施展地獄十字",
      "effect": "之後能更迅速地接上[空中]普攻。"
     },
     {
      "cond": "衝刺後將地獄十字蓄滿",
      "effect": "釋放衝擊波。"
     },
     {
      "cond": "經全驅動強化、蓄滿地獄十字",
      "effect": "衝擊波範圍更大、傷害大幅提高。"
     }
    ]
   },
   {
    "nameEn": "Divine Reaper",
    "nameZh": "神聖收割者（Divine Reaper）",
    "nodes": [
     {
      "text": "技能：直人向前送出衝擊波，在全驅動狀態下會獲得強化。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "神聖收割者的消耗降低 50 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[地面]技能：在[地面]時神聖收割者的衝擊波射程更遠；[空中]技能：在[空中]時神聖收割者範圍更大。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "衝擊波釋放更快，縮短神聖收割者的出招與收招時間。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "技能 > 技能 > 技能",
      "effect": "在神聖收割者後再按兩次技能，可施展兩段額外追擊。MP:50"
     },
     {
      "cond": null,
      "effect": "新的追擊動作加快。"
     },
     {
      "cond": "經嗜血強化時",
      "effect": "神聖收割者範圍更大，並對敵人造成更多受擊硬直。"
     },
     {
      "cond": "衝刺後長按技能",
      "effect": "蓄力神聖收割者期間獲得無敵幀。"
     },
     {
      "cond": "經增幅器效果強化",
      "effect": "神聖收割者造成多段傷害，且範圍大幅提升。"
     },
     {
      "cond": "衝刺後施展神聖收割者",
      "effect": "回復 25 MP。"
     },
     {
      "cond": "衝刺後施展神聖收割者",
      "effect": "回復 10 SP。"
     },
     {
      "cond": "衝刺後蓄力神聖收割者",
      "effect": "整段攻擊皆獲得無敵幀。"
     },
     {
      "cond": "神聖收割者",
      "effect": "現在附帶霸體。"
     }
    ]
   },
   {
    "nameEn": "Divine Smasher",
    "nameZh": "神聖粉碎（Divine Smasher）",
    "nodes": [
     {
      "text": "上/下+技能：直人開始朝按住的方向蓄力一記強力突進，整段攻擊期間獲得霸體。可受全驅動強化。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "直人再次按上/下+技能可再施展一次神聖粉碎。此外，施展下+技能後再按上+技能，會施展一記上昇迴旋踢。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "直人在突進攻擊期間獲得無敵幀。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "神聖粉碎 > 上/下+技能 > 上/下+技能",
      "effect": "在神聖粉碎後再按兩次上/下+技能，可施展兩段額外追擊。MP:50"
     },
     {
      "cond": "經嗜血效果強化時",
      "effect": "神聖粉碎範圍更大，並對敵人造成更多受擊硬直。"
     },
     {
      "cond": "神聖粉碎",
      "effect": "在突進部分獲得無敵閃避幀。"
     },
     {
      "cond": "衝刺後長按上/下+技能",
      "effect": "蓄力神聖粉碎期間獲得無敵幀。"
     },
     {
      "cond": "衝刺後蓄力神聖粉碎",
      "effect": "蓄力期間獲得無敵閃避幀。"
     },
     {
      "cond": "衝刺後將神聖粉碎蓄滿",
      "effect": "攻擊期間獲得無敵閃避幀。"
     },
     {
      "cond": "經增幅器效果強化",
      "effect": "神聖粉碎造成多段傷害、範圍更大，並讓直人獲得無敵閃避幀。"
     },
     {
      "cond": "衝刺後施展神聖粉碎",
      "effect": "回復 25 MP。"
     },
     {
      "cond": "衝刺後施展神聖粉碎",
      "effect": "回復 10 SP。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設可跳躍兩次。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：三段連擊，最後以鮮血之刃揮出一記大型下斬收尾。在全驅動狀態下，第三段必定獲得強化。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "直人現在可以三段跳。受到攻擊時，可立即跳躍受身恢復，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[空中]時，直人可跳躍以重置[空中]普攻的攻擊次數上限。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[空中]時，直人可跳躍以重置[空中]衝刺技的攻擊次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": null,
      "effect": "衝刺會重置[空中]普攻的攻擊次數上限。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：直人向前衝刺。衝刺附帶閃避幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "位移擺盪：衝刺：按下衝刺鍵會讓直人在原地進行短距離閃避；此時須以左/右+衝刺才能向前衝刺。直人在擺盪與衝刺期間仍保有閃避幀。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "左/右+衝刺現在讓直人獲得無敵閃避幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺與擺盪不再中斷正在進行的攻擊連段。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "直人現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "位移擺盪",
      "effect": "現在附帶無敵閃避幀。"
     },
     {
      "cond": "位移擺盪/衝刺後",
      "effect": "直人能更快地再次使用位移擺盪或衝刺。"
     },
     {
      "cond": "位移擺盪 > 左/右+衝刺",
      "effect": "直人會朝指定方向傳送至一定範圍內最近的敵人。（單獨輸入時無效果；有時可藉由「位移擺盪 > 完美蓄力神聖收割者 > 方向+衝刺」觸發，但不穩定。）"
     },
     {
      "cond": null,
      "effect": "衝刺不再限制一次只能 3 次。"
     }
    ]
   },
   {
    "nameEn": "Banishing Fang",
    "nameZh": "驅逐之牙（Banishing Fang）",
    "nodes": [
     {
      "text": "衝刺+普攻：直人施展一記短距離飛踢。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "增幅器：衝刺後使用的下一個普攻/技能將獲得強化。驅逐之牙的指令為下+左/右+普攻。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "驅逐之牙現在可在[空中]使用。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "驅逐之牙現在被視為不帶閃避幀的衝刺，但可被衝刺中斷。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Blood Repulser",
    "nameZh": "血之脈衝（Blood Repulser）",
    "nodes": []
   },
   {
    "nameEn": "Bloodedge",
    "nameZh": "血之刃（Bloodedge）",
    "nodes": []
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": []
   }
  ],
  "nodeCount": 31,
  "branchCount": 10
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
  "hasData": true,
  "sourceIds": [
   "prototype-kokonoe"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Kokonoe",
  "baseHp": 1350,
  "baseAtk": 210,
  "potentialCount": "30 潛能（+600%）",
  "overview": "九重是一位時間多到用不完的瘋狂科學家，能透過眾多「兵裝」掌控畫面的每一吋。無論是雷射、飛彈、元素攻擊還是爆炸，沒有任何敵人能逃離她的機械火力。若你喜歡以滿屏彈幕壓制並用高傷害讓敵人窒息，九重就是你的首選。",
  "talent": {
   "nameEn": "Ace Hunter",
   "nameZh": "王牌獵人（Ace Hunter）",
   "desc": "當連殺數高於 10 時，技能傷害 +35%。連殺計數顯示於畫面左下角（骷髏圖示）。連殺數以未受傷情況下擊殺的敵人數計算，任何敵方攻擊與多數陷阱都會重置連殺與連段計數。只要在遭遇首領前未受擊並擊殺 10 名敵人，就能將這 +35% 的技能增傷保留給首領。"
  },
  "uniqueMechanic": {
   "nameZh": "零件（Components）",
   "desc": "解鎖「通用強化：兵裝會留下零件」後，九重的多數行動都會在地面留下損壞的機械「零件」。零件可隨時手動引爆，或留在場上與「兵裝 No.5：驅逐射線」及第二個通用強化互動。使用兵裝 No.5 時，附近的零件會額外發射雷射；第二個通用強化則讓三個零件呈三角形排列時生成能量光束。零件引爆起初偏弱，但隨著各種強化與隱藏效果會變得極為強大，尤其對大型首領（如汙染之眼、起源之樹）特別有效。此外九重的衝刺亦十分獨特：按住衝刺會騎上載具持續前進，解鎖「平面迷霧 v3.09」後起手衝刺會改為瞬移，瞬移期間無敵，但只能以衝刺攻擊或再次衝刺取消。"
  },
  "legacySkills": [
   {
    "nameEn": "Armament No.8EE \"Meteor Carpet Storm vE.24\"",
    "nameZh": "兵裝 No.8EE「隕石地毯風暴 vE.24」（Armament No.8EE \"Meteor Carpet Storm vE.24\"）",
    "desc": "發射 5 枚追蹤飛彈，飛彈數量隨等級提升。飛彈會在原型上方生成，並自動鎖定最近的一群敵人。"
   },
   {
    "nameEn": "Armament No.6β \"Planar Haze v1.00\"",
    "nameZh": "兵裝 No.6β「平面迷霧 v1.00」（Armament No.6β \"Planar Haze v1.00\"）",
    "desc": "開啟一道傳送門，將原型朝按住的方向傳送，傳送距離隨等級提升。這是「平面迷霧 v3.09」的翻版，讓九重多出一次附帶大量無敵幀的衝刺。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：三段連擊，先向前射出小水珠，接著是一道短促的火花波，最後是一陣飛彈齊射。長按普攻會持續射出水流彈數秒。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "第二段現在發射小型飛彈，第三段則射出大型飛彈。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "水流彈現在變成冰錐，會使敵人減速。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "使用此連段期間，九重獲得霸體。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：更多飛彈、兵裝 No.11.1：更多飛彈，與 通用強化：零件",
      "effect": "九重普攻的飛彈爆炸範圍大幅擴大，且傷害更高。"
     },
     {
      "cond": "普攻：更多飛彈、兵裝 No.11.1：更多飛彈，與 通用強化：零件",
      "effect": "九重連段第一段的冰範圍更大，且傷害更高。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設可跳躍兩次。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：九重在空中旋轉，向周圍噴出火焰。",
      "sub": [
       {
        "t": "九重的空中攻擊現在會發出「飛濺」。",
        "k": "extra"
       },
       {
        "t": "九重的[空中]普攻現在改以冰屬性攻擊，會使敵人減速。",
        "k": "builtin"
       },
       {
        "t": "「飛濺」傷害更高，並可破壞霸體。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "九重現在可以三段跳。受到攻擊時，可立即跳躍受身恢復，並獲得 1 秒無敵。此外，她的[空中]普攻與衝刺攻擊不再有使用次數限制。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：依九重處於空中或地面，會施展不同類型的衝刺。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面]衝刺：九重騎著載具向前衝刺。長按衝刺會持續騎乘載具直到放開。僅在衝刺的最初階段無敵。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "[空中]衝刺：九重借助火箭向前衝刺。僅在[空中]衝刺的最初階段無敵。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "衝刺 > 普攻：九重向前躍起，並在空中向周圍噴出火焰。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "「平面迷霧 v3.09」：衝刺：九重現在會先向前瞬移最多 3 次，然後才騎上載具。整個瞬移過程皆無敵。",
      "sub": [
       {
        "t": "按住上、下、左或右可改變瞬移方向。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：產生「飛濺」",
      "effect": "「平面迷霧 v3.09」現在也會產生「飛濺」。"
     }
    ]
   },
   {
    "nameEn": "Armament No.11.1",
    "nameZh": "兵裝 No.11.1（Armament No.11.1）",
    "nodes": [
     {
      "text": "「狂怒殲滅雪崩 v2.19」[地面]技能：發射多枚向前飛行的飛彈。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中]技能：朝地面發射多枚飛彈，命中地面後會水平直飛。MP:100（遊戲內未列出；不受下列潛能影響。）",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "飛彈數量加倍，並可破壞霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "九重在施展地面版後可以跳躍或衝刺，並留下分身繼續施展招式。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "使用兵裝 No.11.1 時，會擊退九重附近的敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "兵裝 No.11.1 現在會隨火箭額外發射雷射。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：更多飛彈、兵裝 No.11.1：更多飛彈，與 通用強化：零件",
      "effect": "兵裝 No.11.1 現在發射更大的飛彈，且傷害更高。"
     }
    ]
   },
   {
    "nameEn": "Armament No.2",
    "nameZh": "兵裝 No.2（Armament No.2）",
    "nodes": [
     {
      "text": "「破損碉堡突擊 v3.13」[地面] 上+普攻：向前小跑並以上勾拳擊中對手。再次按普攻會施展一記直拳。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "兩記拳擊都會發射火箭，將對手擊飛。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "火箭到達最高點時會爆炸，並從上方召喚一道小型雷射光束。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "火箭爆炸時會發出「飛濺」。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "長按普攻可衝得更遠，並將敵人一同帶到衝刺終點後再上勾擊飛。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：更多飛彈、兵裝 No.11.1：更多飛彈，與 通用強化：零件",
      "effect": "兵裝 No.2 的火箭爆炸範圍更大，且傷害更高。"
     },
     {
      "cond": "兵裝 No.2：拳擊附帶火箭 與 兵裝 No.5：驅逐射線由零件生成",
      "effect": "兵裝 No.2 的火箭現在會生成驅逐射線。"
     }
    ]
   },
   {
    "nameEn": "Armament No.5",
    "nameZh": "兵裝 No.5（Armament No.5）",
    "nodes": [
     {
      "text": "「驅逐射線 v7.10」[地面] 下+技能：九重設置一道驅逐射線，會定期發射雷射並在其附近放電。MP:35",
      "kind": "base",
      "sub": []
     },
     {
      "text": "MP 消耗降低。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "設置驅逐射線時，已存在的零件也會一併發射雷射。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：零件",
      "effect": "驅逐射線也會被視為零件。"
     }
    ]
   },
   {
    "nameEn": "Armament No.5EE",
    "nameZh": "兵裝 No.5EE（Armament No.5EE）",
    "nodes": [
     {
      "text": "「天罰 vE.83」上+技能：召喚一道巨大的雷射光柱，緩慢地向前推移。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "雷射光柱的持續時間加倍。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "雷射光柱變得更粗，且傷害更高。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "雷射光柱移動更快，並會追蹤敵人。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Armament No.8EE",
    "nameZh": "兵裝 No.8EE（Armament No.8EE）",
    "nodes": [
     {
      "text": "「隕石地毯風暴 vE.24」[地面] 長按 Action：召喚多枚飛彈自天而降，持續數秒。SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：九重透過消耗 MP 來獲得 SP。",
      "kind": "auto",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "兵裝 No.11.1：更多飛彈",
      "effect": "兵裝 No.8EE 現在發射雙倍數量的飛彈。"
     },
     {
      "cond": "兵裝 No.11.1：擊退敵人",
      "effect": "兵裝 No.8EE 現在會擊飛敵人並使其暈眩。"
     },
     {
      "cond": "普攻：更多飛彈、兵裝 No.11.1：更多飛彈，與 通用強化：零件",
      "effect": "兵裝 No.8EE 的火箭爆炸範圍更大，且傷害更高。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "九重使用的兵裝會留下零件。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "下+普攻：引爆所有已存在的零件。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "當零件以三角形排列留下時，會在三者之間生成能量光束。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "可以生成更多零件。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "零件持續時間更長，引爆時會留下一片火海。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "引爆零件命中被冰屬性攻擊減速的敵人時，傷害更高。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：更多飛彈 與 兵裝 No.11.1：更多飛彈",
      "effect": "所有零件爆炸的範圍更大，且傷害更高。"
     },
     {
      "cond": "通用強化：零件間的能量光束 與 更多零件",
      "effect": "當零件形成矩形時，會在四者之間生成能量光束。"
     },
     {
      "cond": "通用強化：更多零件 與 零件持續更久",
      "effect": "可生成更多零件，且持續時間更長。"
     },
     {
      "cond": "通用強化：零件間的能量光束、更多零件，與 零件持續更久",
      "effect": "能量光束可依任意形狀連接；引爆與火焰傷害進一步提高。"
     }
    ]
   }
  ],
  "nodeCount": 42,
  "branchCount": 9
 },
 {
  "id": "ragna",
  "name": "拉格納",
  "alias": "Ragna the Bloodedge",
  "tier": "A",
  "role": "吸血近戰",
  "tags": [
   "以血換血",
   "續航強",
   "需控血"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-ragna"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Ragna the Bloodedge",
  "baseHp": 940,
  "baseAtk": 170,
  "potentialCount": "32 潛能（+640%）",
  "overview": "拉格納是《蒼翼混沌效應》中典型的重裝戰士，主打高風險、高報酬的打法。他會犧牲大段生命值換取如「屠戮剪刀」般的大範圍強力攻擊，並以「黑色猛攻」脫離險境。他擁有大量無敵招式，能以自己的節奏主導戰局、輾壓任何遭遇的敵人。",
  "talent": {
   "nameEn": "Wrath of Death",
   "nameZh": "憤怒之死（Wrath of Death）",
   "desc": "HP 減少後，技能傷害 +25%，持續 10 秒。這是拉格納的核心天賦，每當他失去生命值便提升技能傷害；觸發來源可以是任何外部傷害，也可以是他自身消耗生命值的攻擊。"
  },
  "uniqueMechanic": {
   "nameZh": "嗜血（Blood Drain）",
   "desc": "使用任何帶有 MP 消耗的攻擊時，拉格納會消耗自身部分當前 HP，換取高額技能傷害；若技能命中，會延遲一段時間後回復部分 HP。以同一招式命中多個敵人可獲得額外回復，但每個額外敵人會有遞減效果。消耗量依當前 HP 的百分比計算，回復量則依最大 HP 計算，因此接近滿血時施放會消耗更多、接近瀕死時則消耗較少；回復量本身不受當前血量影響，但會隨著最大 HP（如心靈升級或取得 HP 提升）而增加。搭配「通用強化：血之興奮」可將此系統擴及普攻；「噬魂者」提高低血時的傷害與回復、但降低高血時的回復；「降低 HP 消耗」則讓整體更安全。"
  },
  "legacySkills": [
   {
    "nameEn": "Dead Spike",
    "nameZh": "死亡尖刺（Dead Spike）",
    "desc": "消耗當前 HP 的 20%，發射一道攻擊，命中敵人時附帶回復效果，回復效果隨等級提升。會送出拉格納蓄力普攻所發出的飛行物；如同他的多數技能，這會犧牲當前 HP 的 20%，並在命中敵人後回復自身。由於 HP 消耗偏低，可在低血時用來回復當前原型，且最大 HP 越高效果越顯著。"
   },
   {
    "nameEn": "Blood Kain [EX]",
    "nameZh": "血之興奮 [EX]（Blood Kain [EX]）",
    "desc": "持續 10 秒降低 HP，但所有造成的傷害 +12%，且所有攻擊都附帶回復效果，傷害提升效果隨等級提高。此傳承技的獨特之處在於它也會提升戰術（Tactics）的傷害，這在遊戲中所有增益裡相當罕見，那 12% 足以將特定的戰術流派推向極致。它之所以極為強大，是因為它是一種便宜又有效的技能增傷手段，能藉由消耗 HP 觸發拉格納的傳承原型天賦。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：四連擊的連段。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "傷害更高、範圍更大。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "啟動期間，拉格納獲得霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "魔之波動：[地面] 普攻 > 技能：攻擊後送出衝擊波並回復 HP。MP:50",
      "kind": "extra",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設可跳躍兩次。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：向前斬擊一次，接著施展落下攻擊。攻擊時按住下，拉格納會立即俯衝。",
      "sub": [
       {
        "t": "[空中]時，拉格納可跳躍或衝刺以重置[空中]普攻的攻擊次數上限。",
        "k": "builtin"
       },
       {
        "t": "鐵手套冥府：[空中] 普攻 > 技能 > 技能：在空中攻擊後連按兩次技能，會施展上昇踢並接續一記垂直的死亡尖刺。回復 HP。每段技能 MP:50。",
        "k": "extra"
       },
       {
        "t": "夢魘之刃：[空中] 下+普攻 > 技能 > 技能：使用[空中] 下+普攻後連按兩次技能，會施展過頂斬並接續一記死亡尖刺。回復 HP。每段技能 MP:50。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "拉格納現在可以三段跳。受到攻擊時，可立即跳躍受身恢復，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：血之興奮",
      "effect": "拉格納的跳躍攻擊會消耗 HP，隨後再回復。消耗的 HP 依當前 HP 計算。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：拉格納向前衝刺。衝刺附帶閃避幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "拉格納現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺距離更遠。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺攻擊距離更遠、傷害更高，並可用另一段衝刺取消。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "屠戮剪刀：[瞬移] 衝刺 > 技能：以斬擊向前大幅突進，接著釋放屠戮剪刀的後半段。MP:100",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "三段衝刺 + 衝刺距離增加",
      "effect": "在拉格納的衝刺攻擊期間再次按普攻，可連續施展衝刺攻擊，最多 3 次。"
     },
     {
      "cond": "屠戮剪刀[瞬移] 與 為黑暗所吞噬",
      "effect": "衝刺 > 長按技能 會將第二段改為為黑暗所吞噬。MP:150"
     }
    ]
   },
   {
    "nameEn": "Carnage Scissors",
    "nameZh": "屠戮剪刀（Carnage Scissors）",
    "nodes": [
     {
      "text": "[地面] 技能：消耗當前 HP 的 40%，在拉格納前方釋放兩記巨大打擊，每記皆會回復 HP。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 技能：消耗當前 HP 的 40%，在拉格納前方釋放一記巨大衝擊並回復 HP。MP:100",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "傷害更高、範圍更大。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "拉格納在使用屠戮剪刀期間獲得霸體，並在啟動時獲得短暫無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "拉格納可以分別使用屠戮剪刀的第一段與第二段斬擊，且各自消耗較少的 MP。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：降低 HP 消耗",
      "effect": "屠戮剪刀的 HP 消耗降低。"
     }
    ]
   },
   {
    "nameEn": "Dash Attack",
    "nameZh": "衝刺攻擊",
    "nodes": [
     {
      "text": "[地面] 衝刺 > 普攻：以拉格納的利爪向前突進攻擊。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 衝刺 > 普攻：以飛踢向前突進。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "衝刺攻擊範圍更大，並以多段命中造成更高傷害。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺攻擊的部分過程無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺 > 普攻 > 技能 > 技能：使用衝刺攻擊後連按兩次技能，會釋放死亡尖刺，接著是一記巨大的劍擊。回復 HP。MP:50",
      "kind": "extra",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Heavy Strike",
    "nameZh": "重擊",
    "nodes": [
     {
      "text": "[地面] 長按普攻：向上斬擊並向前送出死亡尖刺。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "死亡尖刺會飛得更遠，並回復 HP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "傷害更高，並可破壞霸體。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：傷害更高 + 範圍更大",
      "effect": "死亡尖刺的攻擊範圍擴大，且傷害更高。"
     },
     {
      "cond": "普攻：傷害更高 + 範圍更大",
      "effect": "死亡尖刺的推進距離延長。"
     },
     {
      "cond": "普攻：魔之波動",
      "effect": "[地面] 長按普攻 > 技能：在長按普攻後按下技能，會向前送出衝擊波。"
     },
     {
      "cond": "所有普攻潛能 與 屠戮剪刀：傷害更高 + 範圍更大",
      "effect": "死亡尖刺的推進距離延長至最大值。"
     },
     {
      "cond": "所有重擊潛能",
      "effect": "[地面] 下+普攻：立即釋放死亡尖刺，不會向前移動，但範圍更大且傷害更高。"
     },
     {
      "cond": "所有重擊潛能 與 通用強化：血之興奮 + 噬魂者",
      "effect": "[地面] 下+普攻的死亡尖刺會隨當前 HP 越低而傷害越高。"
     }
    ]
   },
   {
    "nameEn": "Inferno Divider",
    "nameZh": "地獄分割者（Inferno Divider）",
    "nodes": [
     {
      "text": "[地面] 上+普攻：一邊向上斬擊一邊躍起，攻擊期間獲得短暫無敵。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "造成更多段傷害，並獲得更多無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "可在空中發動。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[空中] 下+衝刺：斜向下方俯衝斬擊。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[空中] 下+技能：在空中施展斧踢。MP:50",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[地面] 上+普攻 > 上+普攻 > 上+普攻：以地獄分割者躍起，接著接續一記空中上勾拳，再補一記直拳。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "地獄分割者：下+衝刺 與 普攻：魔之波動",
      "effect": "[空中] 下+衝刺 > 技能：在下+衝刺飛踢後釋放一記巨大衝擊。MP:50"
     },
     {
      "cond": "地獄分割者：下+衝刺 與 普攻：魔之波動",
      "effect": "[空中] 下+衝刺 > 普攻：在下+衝刺飛踢後釋放一道短衝擊波。"
     }
    ]
   },
   {
    "nameEn": "Blood Scythe",
    "nameZh": "血鐮（Blood Scythe）",
    "nodes": [
     {
      "text": "上+技能：消耗當前 HP 的 27%，以大範圍斬擊並回復 HP。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "血鐮回復的 HP 更多。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "血鐮現在使拉格納無敵，且不再消耗 HP。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：降低 HP 消耗",
      "effect": "血鐮的 HP 消耗降低。"
     },
     {
      "cond": "屠戮剪刀：傷害更高 + 範圍更大",
      "effect": "血鐮傷害更高、範圍更大。"
     },
     {
      "cond": "所有血鐮潛能 與 屠戮剪刀：可分別使用兩段斬擊",
      "effect": "血鐮的 MP 消耗降低。"
     },
     {
      "cond": "所有血鐮潛能、屠戮剪刀：可分別使用兩段斬擊，與 跳躍：重置攻擊次數上限",
      "effect": "血鐮會重置普攻與地獄分割者的空中攻擊次數上限。"
     }
    ]
   },
   {
    "nameEn": "Devoured by Darkness",
    "nameZh": "為黑暗所吞噬（Devoured by Darkness）",
    "nodes": [
     {
      "text": "長按技能：消耗當前 HP 的 60% 抓住敵人。抓住敵人時，施展一次大範圍的範圍攻擊並回復 HP。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "即使沒有抓住敵人，拉格納仍可施展其範圍攻擊追擊。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "衝刺攻擊：衝刺 + 普攻 > 技能 > 技能",
      "effect": "衝刺 + 普攻 > 長按技能：在衝刺攻擊後施展為黑暗所吞噬的範圍攻擊。MP:100"
     },
     {
      "cond": "黑色猛攻",
      "effect": "範圍攻擊可破壞霸體。"
     }
    ]
   },
   {
    "nameEn": "Black Onslaught",
    "nameZh": "黑色猛攻（Black Onslaught）",
    "nodes": [
     {
      "text": "下+技能：消耗當前 HP 的 90%，施展一次巨大的範圍攻擊，並回復大量 HP。SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：消耗 HP 時獲得 SP。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "部分回復效果會立即生效。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：降低 HP 消耗",
      "effect": "黑色猛攻的 HP 消耗降低。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "血之興奮：每次攻擊都會消耗 HP，但傷害更高並回復 HP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "噬魂者：當前 HP 越低時傷害越高、回復的 HP 越多；但當前 HP 越高時回復的 HP 越少。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "消耗 HP 的招式 HP 消耗降低。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "所有通用強化",
      "effect": "噬魂者的效果獲得強化。"
     },
     {
      "cond": "所有通用強化",
      "effect": "某些招式不再消耗 HP，同時保留傷害提升效果。"
     },
     {
      "cond": "屠戮剪刀：可分別使用兩段斬擊、通用強化：降低 HP 消耗，與 黑色猛攻：立即回復",
      "effect": "屠戮剪刀現在的 MP 消耗降低。"
     }
    ]
   }
  ],
  "nodeCount": 46,
  "branchCount": 11
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
  "hasData": true,
  "sourceIds": [
   "prototype-jin"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Jin Kisaragi",
  "baseHp": 1240,
  "baseAtk": 123,
  "potentialCount": "33 潛能（+660%）",
  "overview": "如月琴恩是極具萬用性的角色，能透過凍結與減速使敵人陷入劣勢，同時施展極快的攻擊。藉由精準的輸入時機或消耗 MP，他能在數秒內造成可觀傷害。琴恩因收刀與格檔機制的操作複雜度而被視為最難精通的角色之一，但其凍結、減速與天賦「時之靜止」也讓他對新手相當友善。",
  "talent": {
   "nameEn": "Time Stasis",
   "nameZh": "時之靜止（Time Stasis）",
   "desc": "閃避後，敵人會減速 3.5 秒。閃避指的是以正確時機按下衝刺鍵來避開敵人的攻擊。遊戲中許多招式附有「閃避幀」，同樣可觸發此效果；這些通常是使用衝刺輸入的招式，部分其他招式也能透過潛能獲得。白面（Hakumen）是唯一的例外，其衝刺與所有攻擊皆為霸體而非閃避幀。"
  },
  "uniqueMechanic": {
   "nameZh": "凍結／減速、收刀、格檔（Freezing/Slowing, Sheathing, Blocking）",
   "desc": "凍結／減速是影響任何你攻擊的敵人的被動機制：減速使敵人移動與攻擊變慢，凍結則以冰包覆敵人使其完全停止行動，部分招式預設即可減速，所有招式皆可透過通用強化 II 升級為減速與凍結。收刀是時機為基礎的機制：每次普攻或技能後琴恩會實際收刀，劍柄出現「閃光」，在閃光出現時施展下一次攻擊可打出更大、傷害更高的版本。格檔同樣是時機為基礎的機制，能完全抵銷任何傷害；解鎖通用強化 I 後，普攻或技能期間會出現護盾效果，但多數招式護盾時間極短，唯獨冰天斷華與蓄力版吹雪全程可格檔。"
  },
  "legacySkills": [
   {
    "nameEn": "Reitou (Frost Bite)",
    "nameZh": "冷凍（Reitou／Frost Bite）",
    "desc": "3 根冰柱會從地面迸出，凍結任何被擊中的敵人 3 秒。凍結持續時間隨等級提升。此技因能完全阻止敵人與頭目攻擊，被視為遊戲中最佳的傳承技之一。"
   },
   {
    "nameEn": "Hyouten Danka [Giant]",
    "nameZh": "冰天斷華［巨］（Hyouten Danka [Giant]）",
    "desc": "釋放一道大迴旋斬，造成 570 點傷害。傷害與攻擊範圍隨等級提升。此傳承技在超越模式中升級後可命中相當廣的範圍，但一般情況下表現平淡；若想要範圍攻擊手段，遊戲中還有許多其他選擇。"
   }
  ],
  "branches": [
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為二段跳。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：琴恩拔刀，施展一次向下、接著水平的斬擊。",
      "sub": [
       {
        "t": "在空中時，琴恩可跳躍以重置[空中]普攻次數上限。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "琴恩現在可以三段跳。被擊中時，可跳躍立即回復並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：琴恩在衝刺時擁有衝刺無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[衝刺 > 普攻]：琴恩向前突進，以向下的角度斬擊面前。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "琴恩現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "無雙千翔斬（Musou Senshouzan）：衝刺：駕馭一根巨大冰柱向前衝，接觸到的敵人會受到傷害。",
      "sub": [
       {
        "t": "無雙千翔斬『延伸』（Musou Senshouzan『Extend』）：衝刺 > 普攻：琴恩從冰柱上躍起，斬擊面前與下方的區域。",
        "k": "extra"
       },
       {
        "t": "同時按下 衝刺 + 技能 會使冰柱凍結敵人。MP:25",
        "k": "builtin"
       },
       {
        "t": "無雙突衝擊『破』（Musou Tosshougeki『Break』）：衝刺 > 普攻 + 技能：施展一道大範圍水平斬擊，可破壞霸體。MP:25",
        "k": "extra"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Touga Hyoujin",
    "nameZh": "透牙冰刃（Touga Hyoujin）",
    "nodes": [
     {
      "text": "技能：向前發射一道大型斬擊投射物，使敵人減速。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "MP 消耗減半，且技能可連續使用 2 次。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "投射物更大，造成的傷害更高。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化 I：追加冰投射物",
      "effect": "按下 普攻 + 技能 時，攻擊會額外發射一道使敵人減速的投射物。MP:25"
     },
     {
      "cond": "全部 通用強化 I",
      "effect": "若在收刀時使用 普攻 + 技能，並且格檔住一次攻擊，琴恩會施展數次快速斬擊。"
     },
     {
      "cond": "通用強化 I：追加冰投射物",
      "effect": "冰華（Hyouka）[空中] 普攻 + 技能 > 普攻 + 技能：在空中時，琴恩會製造一片雪花，造成傷害並使敵人減速。按下 普攻 + 技能 會以追加投射物施展琴恩[空中]普攻連段的 2 段攻擊。MP:25"
     }
    ]
   },
   {
    "nameEn": "Fubuki and Sekkajin",
    "nameZh": "吹雪與雪華塵（Fubuki and Sekkajin）",
    "nodes": [
     {
      "text": "解鎖 吹雪 [地面] 上 + 普攻 與 雪華塵 [地面] 下 + 普攻。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "吹雪（Fubuki）：[地面] 上 + 普攻：琴恩斬擊面前上方的區域。斬擊期間短暫無敵。",
      "sub": [
       {
        "t": "飛廉颯（Hirensou）：[地面] 上 + 普攻 + 技能：琴恩連續施展兩次斬擊。第 1 段使他無敵並凍結敵人。第 2 段會使敵人減速。MP:25",
        "k": "extra"
       },
       {
        "t": "使用[地面]飛廉颯時，長按 普攻 會使琴恩開始蓄力，放開時強化第 2 段攻擊。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "雪華塵（Sekkajin）：[地面] 下 + 普攻：琴恩在面前施展 4 次快速斬擊。4 次斬擊後按下 下 + 普攻 會施展吹雪。",
      "sub": [
       {
        "t": "雪華塵『鬼』（Sekkajin『Ki』）：[地面] 下 + 普攻 + 技能：雪華塵每次斬擊都會追加發射冰投射物。MP:25",
        "k": "extra"
       }
      ],
      "kind": "auto"
     }
    ],
    "hidden": [
     {
      "cond": "通用強化 I：收刀攻擊",
      "effect": "在收刀時使用雪華塵 > 連按 普攻 會使琴恩再施展 3 次雪華塵，並以吹雪收尾。在收刀最後一次吹雪後按下 普攻 則會改為施展烈冰（Rehhyou），一道可觸及極高處的垂直斬擊。每次吹雪 MP:25。"
     },
     {
      "cond": "吹雪／雪華塵 與 虛空刃：雪風",
      "effect": "[地面] 下 + 普攻 > 技能：琴恩會[瞬移]，沿其衝刺的距離施展一道水平斬擊。MP:50"
     },
     {
      "cond": "通用強化 I：追加冰投射物 + 收刀攻擊 與 吹雪／雪華塵：飛廉颯 + 雪華塵『鬼』",
      "effect": "在收刀時使用飛廉颯，會使琴恩的第 1 次揮擊觸及距離大幅延長。"
     },
     {
      "cond": "吹雪／雪華塵：飛廉颯後長按 普攻 與 通用強化 I：收刀攻擊",
      "effect": "對收刀的飛廉颯第 2 段蓄力，會使其變為原地[瞬移]，攻擊琴恩兩側的敵人。"
     },
     {
      "cond": "吹雪／雪華塵：飛廉颯後長按 普攻 與 通用強化 I：收刀攻擊 + 收刀時格檔傷害",
      "effect": "使用收刀的飛廉颯並在第 2 段蓄力時格檔傷害，會立即施展大迴旋斬。"
     },
     {
      "cond": "通用強化 I：追加冰投射物 + 收刀攻擊 與 吹雪／雪華塵：飛廉颯 + 雪華塵『鬼』",
      "effect": "在收刀時使用雪華塵『鬼』> 連按 普攻 會使琴恩再施展 5 次雪華塵，並以吹雪收尾。在收刀最後一次吹雪後按下 普攻 則會改為施展烈冰（Rehhyou），一道可觸及極高處的垂直斬擊。此期間只按 技能 會施展[瞬移]。每次吹雪 MP:25。瞬移 MP:25。"
     }
    ]
   },
   {
    "nameEn": "Hyouten Danka",
    "nameZh": "冰天斷華（Hyouten Danka）",
    "nodes": [
     {
      "text": "[地面] 長按 普攻：琴恩會開始蓄力一道迴旋斬。完全蓄力後，會擊中最近的敵人。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "蓄力期間，琴恩會格檔所有傷害來源。*需要 通用強化 I：收刀時可格檔傷害。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在完全蓄力前按下 技能，會使琴恩立即施展迴旋斬。MP:25",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "冰天斷華現在會凍結敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "冰天斷華『巨』（Hyouten Danka『Giant』）：[地面] 大迴旋斬：長按 普攻 直到完全蓄力 > 技能：施展一道大範圍、涵蓋整個畫面且造成巨額傷害的攻擊。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化 I：收刀攻擊",
      "effect": "若在收刀時機使用，冰天斷華會立即完成蓄力。在琴恩連段的第 2 段攻擊後長按 普攻 會立即開始蓄力冰天斷華。"
     },
     {
      "cond": "通用強化 I：收刀攻擊 與 冰天斷華『巨』",
      "effect": "收刀時長按 普攻 會跳過蓄力階段，讓琴恩立即使用冰天斷華『巨』。（使用 [空中] 普攻（長按）或取消[地面]普攻連段的第 3 段。）"
     },
     {
      "cond": "通用強化 I：收刀攻擊 與 冰天斷華『巨』",
      "effect": "長按 普攻 + 技能 會讓琴恩在完全蓄力時施展大迴旋斬。"
     },
     {
      "cond": "冰天斷華：凍結 + 冰天斷華『巨』",
      "effect": "冰天斷華與冰天斷華『巨』現在可以凍結敵人。"
     },
     {
      "cond": "冰天斷華『巨』 與 通用強化 I：收刀攻擊",
      "effect": "以收刀方式使出時，冰天斷華『巨』的 MP 消耗較低。"
     },
     {
      "cond": "冰天斷華『巨』 與 通用強化 I：收刀攻擊 + 追加冰投射物",
      "effect": "冰天斷華『巨』的 MP 消耗較低。"
     }
    ]
   },
   {
    "nameEn": "Crystal Moonstorm",
    "nameZh": "水晶月嵐（Crystal Moonstorm）",
    "nodes": [
     {
      "text": "[地面] 下 + 長按 普攻：琴恩將劍插入地面，在自身周圍生成可凍結敵人的冰柱。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "在持續按住 下 + 普攻 時，於收刀「閃光」出現前按下 技能，會將附近的敵人拉向琴恩。MP:25",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "水晶月嵐可在透牙冰刃後立即使用，將冰柱生成於敵人上方。*僅在施展透牙冰刃時琴恩靠近敵人時有效。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "任何收刀招式都可破壞霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "收刀時，所有用於凍結敵人的冰會爆炸。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "水晶月嵐：收刀招式破壞霸體 + 引爆冰 與 煉獄冰夜",
      "effect": "冰爆會依敵人被凍結的時間長短造成更高傷害。"
     },
     {
      "cond": "水晶月嵐：透牙冰刃後連段 + 收刀招式破壞霸體 + 引爆冰",
      "effect": "冰爆範圍更大。"
     },
     {
      "cond": "虛空刃：雪風",
      "effect": "按下 技能 後，琴恩可在水晶月嵐後施展[瞬移]。"
     }
    ]
   },
   {
    "nameEn": "Hiyoku Getsumei",
    "nameZh": "冰翼月鳴（Hiyoku Getsumei）",
    "nodes": [
     {
      "text": "[地面] 上 + 技能：琴恩射出一把冰製的弓，向上並在面前發射一支冰箭。MP:100",
      "kind": "unknown",
      "sub": []
     },
     {
      "text": "[空中] 上 + 技能：琴恩射出一把冰製的弓，向下並在面前發射一支冰箭。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "琴恩現在一次發射 3 支箭。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "射擊後按下 技能 可再射一支箭。這會過度消耗 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "MP 消耗較低。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化 I：收刀攻擊",
      "effect": "若在收刀時使用冰翼月鳴，會額外發射 2 支箭。"
     },
     {
      "cond": "全部 冰翼月鳴潛能 與 通用強化 II：延長凍結與減速",
      "effect": "被冰翼月鳴凍結的敵人，凍結時間顯著延長。"
     }
    ]
   },
   {
    "nameEn": "Kokuujin: Yukikaze",
    "nameZh": "虛空刃：雪風（Kokuujin: Yukikaze）",
    "nodes": [
     {
      "text": "下 + 技能：進入格檔架式。格檔傷害時，施展[瞬移]。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "下 + 技能 > 普攻：立即施展[瞬移]。MP:100",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "[瞬移] 現在會多次命中，並使敵人無法行動更久。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在[瞬移]時按下 技能 會造成更多次傷害。MP:100",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在每次[瞬移]結束時按下 普攻 可再施展一次[瞬移]，最多 3 次。第 3 次[瞬移]後會退還 25 MP。每次[瞬移] MP:25。*在每次[瞬移]結束時的收刀「閃光」期間按下 普攻。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "琴恩現在可以連續[瞬移] 5 次。第 5 次[瞬移]會造成追加傷害並恢復 50 MP。每次[瞬移]都會提升所有傷害。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "雪風：瞬移時技能造成更多傷害 與 水晶月嵐：引爆冰",
      "effect": "在[瞬移]時按下 技能，會引爆所有用於在收刀時凍結敵人的冰。"
     },
     {
      "cond": "雪風：瞬移時技能造成更多傷害 與 通用強化 I：收刀時格檔 + 收刀攻擊",
      "effect": "在[瞬移]時按下 技能 會使 MP 消耗減半。"
     },
     {
      "cond": "通用強化 I：收刀攻擊",
      "effect": "在收刀時施展虛空刃：雪風，會增加[瞬移]的距離。"
     }
    ]
   },
   {
    "nameEn": "Rengoku Hyouya",
    "nameZh": "煉獄冰夜（Rengoku Hyouya）",
    "nodes": [
     {
      "text": "長按 技能：以冰凍結地面與周圍的牆壁，然後引爆。SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：使敵人減速或凍結時可獲得 SP。",
      "kind": "auto",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化 I：收刀時格檔攻擊 + 收刀攻擊",
      "effect": "煉獄冰夜現在會格檔傷害，且每格檔一次可獲得 5 SP。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement I",
    "nameZh": "通用強化 I",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "拔刀可格檔攻擊。格檔攻擊時，琴恩會施展一次追加斬擊。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "收刀時施展的招式會強化。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "使用任何需要 普攻 鍵的招式時，若同時按下 技能，會有追加效果。MP:25",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化 I：收刀攻擊",
      "effect": "琴恩普攻連段的收刀版本會使他大幅向前移動，以協助拉近距離。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement II",
    "nameZh": "通用強化 II",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "所有攻擊都會使敵人減速。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "所有使敵人減速的攻擊，現在會凍結他們。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "敵人的減速或凍結時間延長。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   }
  ],
  "nodeCount": 51,
  "branchCount": 11
 },
 {
  "id": "rachel",
  "name": "雷琪兒",
  "alias": "Rachel Alucard",
  "tier": "A",
  "role": "吸血召喚",
  "tags": [
   "無限衝刺",
   "15 秒無敵罩",
   "新手輪椅"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-rachel"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Rachel Alucard",
  "baseHp": 810,
  "baseAtk": 180,
  "potentialCount": "44 潛能（+880%）",
  "overview": "雷琪兒是《蒼翼混沌效應》的首位 DLC 角色，以壓倒性的力量主宰戰場。她藉由對月讀單位的掌控能力抵銷所有傷害，並以眾多使魔協助作戰，使畫面中幾乎沒有一處安全。她看似龐雜的機體令人望而生畏，但一旦精通，便能成為遊戲中每秒傷害最高的無敵存在。",
  "talent": {
   "nameEn": "Ivy Blossom",
   "nameZh": "常春藤之花（Ivy Blossom）",
   "desc": "數秒未攻擊後，雷琪兒會開始在身邊召喚蝙蝠使魔。接近敵人時，牠們會合而為一造成持續傷害。這是雷琪兒無需親自出手即可造成傷害的多種方式之一。這些蝙蝠只造成持續傷害，並不會治療雷琪兒，其傷害計為普攻傷害，會觸發普攻系戰術的效果。"
  },
  "uniqueMechanic": null,
  "legacySkills": [],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：一段 3 連擊，雷琪兒生成一道旋風、引爆旋風，然後從上方朝敵人落下刀刃。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "增加旋風的移動距離與擴散範圍；殘留的小旋風也會造成傷害。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "重擊 [地面] 長按 普攻：向前發射一道刀刃。",
      "sub": [
       {
        "t": "長按 普攻 現在會讓雷琪兒將重擊蓄力更久。放開時還會生成一道旋風將敵人拉入。蓄力越久，距離與傷害越高，並且可破壞霸體。",
        "k": "builtin"
       },
       {
        "t": "重擊 [地面] 長按 普攻 > 長按 普攻：再次長按 普攻 可追加第二段攻擊，發射一道可破壞霸體的閃電。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "[地面] 下 + 普攻：雷琪兒蹲下並進入格檔狀態，然後電擊周圍區域。成功格檔傷害會提升電擊的傷害與範圍。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "[地面] 普攻連段第 3 段的刀刃，若使用西爾菲德下，會加速更快並造成更高傷害。"
     },
     {
      "cond": "全部重擊潛能",
      "effect": "第二次長按 普攻 會變為一道將敵人拉入的閃電風暴。"
     },
     {
      "cond": "重擊：旋風 與 [地面] 下 + 普攻",
      "effect": "下 + 普攻 可以蓄力，延長其格檔傷害的時間。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍。預設為二段跳。在空中跳躍可重置[空中]普攻次數上限。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 下 + 普攻：以斗篷製成的鑽頭盤旋下降，著陸時產生小型衝擊波。",
      "sub": [
       {
        "t": "在[空中]下 + 普攻下墜期間進入衝刺無敵幀狀態。在下墜攻擊後著陸到地面後立即無敵。",
        "k": "builtin"
       },
       {
        "t": "當下墜超過一定速度時，著陸的衝擊波會增加範圍與傷害，並依下墜攻擊的速度而提升。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "[空中] 普攻：雷琪兒打開陽傘，對周圍造成傷害。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "雷琪兒現在可以三段跳。被擊中時，可跳躍立即回復並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "滑翔（Glide）：[空中] 上 + 跳躍 或 [空中] 長按 普攻：雷琪兒會張開陽傘，減緩下降速度。",
      "sub": [
       {
        "t": "透過西爾菲德移動時進入衝刺無敵幀狀態。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "空中動作會受西爾菲德影響。"
     },
     {
      "cond": "跳躍：三段跳 + 西爾菲德的影響",
      "effect": "滑翔視為著陸，會重置[空中]普攻次數上限。"
     },
     {
      "cond": "跳躍：高速[空中]下 + 普攻 與 西爾菲德",
      "effect": "當西爾菲德向下發動時，[空中]下 + 普攻的下墜速度會增加，進一步強化衝擊波。"
     },
     {
      "cond": "跳躍：[空中]下 + 普攻期間的閃避無敵幀、衝刺：無限[空中]衝刺 與 常春藤之花",
      "effect": "跳躍會召喚一小群蝙蝠。"
     },
     {
      "cond": "跳躍：[空中]下 + 普攻期間的閃避無敵幀、衝刺：無限[空中]衝刺 與 常春藤之花 + 更多蝙蝠",
      "effect": "增加跳躍時召喚的蝙蝠數量。"
     },
     {
      "cond": "跳躍：三段跳 + [空中]下 + 普攻期間的閃避無敵幀",
      "effect": "跳躍與滑翔擁有閃避無敵幀。[空中]下 + 普攻後的無敵幀已升級為閃避無敵幀。"
     },
     {
      "cond": "跳躍：三段跳 + 透過西爾菲德移動時的閃避無敵幀 + [空中]下 + 普攻期間的閃避無敵幀",
      "effect": "上述所有形式的無敵幀均升級為閃避無敵幀。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "向前衝刺。雷琪兒在衝刺時擁有閃避無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 衝刺 + 普攻：雷琪兒向前旋轉，造成傷害。",
      "sub": [
       {
        "t": "使用衝刺攻擊時，雷琪兒會微微跳起，可透過按住 上 或 下 控制。",
        "k": "builtin"
       },
       {
        "t": "衝刺攻擊現在擁有閃避無敵幀。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "[空中]衝刺不再下降，且按住 衝刺 即可永久使用。[空中]衝刺攻擊只能透過按住 左／右 + 普攻 施展。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "雷琪兒在連續衝刺時會擁有閃避無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "雷琪兒現在可以連續衝刺 3 次。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "衝刺現在會受西爾菲德影響。"
     },
     {
      "cond": "衝刺：無限[空中]衝刺 與 西爾菲德",
      "effect": "雷琪兒可在使用西爾菲德時斜向衝刺。"
     },
     {
      "cond": "小龍膽：更多投射物傷害 + 一次 3 支投射物 與 衝刺：三段衝刺",
      "effect": "衝刺會發射出雷琪兒的小龍膽之柱。"
     },
     {
      "cond": "衝刺：無限[空中]衝刺 與 常春藤之花",
      "effect": "衝刺會召喚一小群蝙蝠。"
     },
     {
      "cond": "衝刺：無限[空中]衝刺 與 常春藤之花 + 更多蝙蝠",
      "effect": "增加衝刺時召喚的蝙蝠數量。"
     }
    ]
   },
   {
    "nameEn": "Sword Iris",
    "nameZh": "劍之鳶尾（Sword Iris）",
    "nodes": [
     {
      "text": "技能：在雷琪兒所在之處召喚一道落雷。若有任何小龍膽之柱，它們也會在自身召喚造成較低傷害的閃電。MP:25",
      "kind": "base",
      "sub": []
     },
     {
      "text": "巴登-巴登百合（Baden-Baden Lily）延長落雷的持續時間，並可破壞霸體。此外，柱子的閃電傷害不再降低。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "柱子的持續時間延長，且在遭落雷擊中時不會自動消失。落雷現在會略微減少每根柱子的持續時間。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "落雷現在會引發雷暴。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：長按技能",
      "effect": "長按 技能 會為劍之鳶尾蓄力。蓄力後的劍之鳶尾會造成多次傷害，同時暈眩敵人。"
     },
     {
      "cond": "劍之鳶尾：巴登-巴登百合 與 通用強化：長按技能",
      "effect": "為劍之鳶尾蓄力會進一步提升其傷害，同時破壞霸體。"
     }
    ]
   },
   {
    "nameEn": "Tiny Lobelia",
    "nameZh": "小龍膽（Tiny Lobelia）",
    "nodes": [
     {
      "text": "上 + 普攻：雷琪兒向前發射一道投射物，著陸時生成一根柱子。使用 技能：劍之鳶尾 也會在柱子上召喚閃電，使其消失。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "提升投射物的傷害，並增加同時存在的柱子數量上限。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "上 + 普攻 現在會同時發射 3 根柱子。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "柱子會自行自動召喚落雷。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "投射物現在會受西爾菲德影響。"
     },
     {
      "cond": "通用強化：更多召喚物",
      "effect": "柱子數量上限進一步增加。"
     },
     {
      "cond": "小龍膽：自動閃電 與 通用強化：南瓜",
      "effect": "柱子會召喚兩次閃電。"
     },
     {
      "cond": "普攻：第二段重擊 與 小龍膽：自動閃電",
      "effect": "柱子遭落雷擊中後會釋放一道範圍電擊。"
     }
    ]
   },
   {
    "nameEn": "Tempest Dahlia",
    "nameZh": "暴風大麗花（Tempest Dahlia）",
    "nodes": [
     {
      "text": "上 + 技能：在雷琪兒面向的方向召喚強風。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "風持續更久，且雷琪兒在施展後可自由移動。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德：造成傷害",
      "effect": "當西爾菲德朝與暴風大麗花相同的方向發動時，其傷害會提升至與暴風大麗花相同。"
     },
     {
      "cond": "通用強化：長按技能",
      "effect": "按住 技能 時，長按任意方向 + 技能 可影響暴風大麗花的方向。"
     },
     {
      "cond": "暴風大麗花：自由移動 與 通用強化：長按技能",
      "effect": "暴風大麗花將一律以最大持續時間施展。"
     }
    ]
   },
   {
    "nameEn": "Clownish Calendula",
    "nameZh": "小丑金盞花（Clownish Calendula）",
    "nodes": [
     {
      "text": "下 + 技能：雷琪兒倚靠於巨大的十字架上，在周圍召喚大量閃電。MP:100 SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：雷琪兒透過消耗 MP 來獲得 SP。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "小龍膽的柱子會在自身周圍召喚相同的閃電。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "小丑金盞花：柱子召喚風暴 與 通用強化：長按技能",
      "effect": "為小丑金盞花蓄力會增加柱子生成風暴的範圍。"
     },
     {
      "cond": "重擊：旋風 + 普攻：下 + 普攻 與 通用強化：長按技能",
      "effect": "小丑金盞花現在會於蓄力時格檔傷害；成功格檔傷害會召喚風暴，造成持續傷害。"
     },
     {
      "cond": "通用強化：長按技能",
      "effect": "為小丑金盞花蓄力會增加柱子的啟動範圍。"
     }
    ]
   },
   {
    "nameEn": "Ivy Blossom",
    "nameZh": "常春藤之花（Ivy Blossom）",
    "nodes": [
     {
      "text": "上 + 衝刺：雷琪兒投擲一個十字架，著陸時召喚吸取生命的蝙蝠。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "延長持續時間並增加蝙蝠群數量上限。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "雷琪兒同時投擲兩個十字架；增加蝙蝠群的攻擊範圍。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "增加可召喚的蝙蝠數量；增加蝙蝠群的體積。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在第一群蝙蝠離開後，十字架會再召喚一群蝙蝠。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "十字架與蝙蝠群現在會受西爾菲德影響。"
     },
     {
      "cond": "通用強化：更多召喚物",
      "effect": "召喚蝙蝠數量上限進一步增加。"
     },
     {
      "cond": "喬治十三世（George XIII）",
      "effect": "投擲十字架時會投出青蛙。"
     },
     {
      "cond": "常春藤之花：投出兩個十字架、喬治十三世：增加青蛙數量 與 通用強化：更多召喚物",
      "effect": "增加常春藤之花投出的青蛙數量。"
     },
     {
      "cond": "常春藤之花：更長的蝙蝠群 + 投出兩個十字架 與 通用強化：更多召喚物",
      "effect": "雷琪兒現在會投出 3 個十字架。"
     }
    ]
   },
   {
    "nameEn": "George XIII",
    "nameZh": "喬治十三世（George XIII）",
    "nodes": [
     {
      "text": "下 + 衝刺：召喚喬治十三世，一隻會電擊附近敵人的青蛙。喬治十三世可被敵人攻擊。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "使喬治十三世體型變大，提升其生命值。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "喬治十三世被擊中時不再消失。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "縮短喬治十三世攻擊之間的間隔。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "增加喬治十三世可被召喚的次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "喬治十三世現在會受西爾菲德影響。"
     },
     {
      "cond": "通用強化：更多召喚物",
      "effect": "喬治十三世可被召喚的次數上限增加。"
     },
     {
      "cond": "喬治十三世：體型更大 + 攻擊更快",
      "effect": "喬治十三世會持續釋放電力，其攻擊造成更高傷害。"
     },
     {
      "cond": "喬治十三世：最大數量 與 西爾菲德",
      "effect": "喬治十三世可被西爾菲德舉起。"
     },
     {
      "cond": "跳躍：高速[空中]下 + 普攻",
      "effect": "在雷琪兒使用[空中]下 + 普攻後，喬治十三世會彈跳，並在著陸時釋放電擊衝擊波。"
     },
     {
      "cond": "[地面] 下 + 普攻",
      "effect": "當雷琪兒使用[地面]下 + 普攻時，喬治也會釋放電力。"
     },
     {
      "cond": "喬治十三世：不消失 與 通用強化：召喚物造成更多傷害",
      "effect": "喬治十三世的攻擊速度更快。"
     }
    ]
   },
   {
    "nameEn": "Silpheed",
    "nameZh": "西爾菲德（Silpheed）",
    "nodes": [
     {
      "text": "任意方向 + 動作：召喚風，將雷琪兒、投射物與敵人朝使用西爾菲德的方向移動。SP:25",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：雷琪兒透過消耗 MP 來獲得 SP。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "發動時恢復少量 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "SP 消耗較低。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "發動時對敵人造成傷害。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德：恢復 MP + SP 消耗較低",
      "effect": "SP 會緩慢回復。"
     }
    ]
   },
   {
    "nameEn": "Connecting to Congenital Border",
    "nameZh": "連結先天境界（Connecting to Congenital Border）",
    "nodes": [
     {
      "text": "長按 動作：進入詠唱狀態。使用正確的方向輸入以施展已解鎖的指令。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "三神：月讀單位（Sankishin: Tsukiyomi Unit）獲得新指令：上 > 上 > 下 > 下 > 左 > 右 > 左 > 右：雷琪兒獲得 15 秒完全無敵。冷卻 45 秒。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "精靈吉利亞（Elfin Gillia）獲得新指令：下 > 右 > 下 > 後 > 上：在整個畫面召喚漂浮南瓜。冷卻 12 秒。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "貪食迦樓羅（Peckish Gaura）獲得新指令：上 > 右 > 左上 > 下：在整個畫面召喚蝙蝠群。冷卻 12 秒。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "烈風蘭花（Gale Orchis）獲得新指令：上 > 左 > 右 > 下 > 左 > 右 > 上：在敵人身上連續召喚三次大型龍捲風。冷卻 21 秒。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：增加旋風距離 與 連結先天境界：烈風蘭花",
      "effect": "龍捲風會召喚 4 次，且每次持續更久。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "頑皮滿天星（Impish Gypsophila）：脫離戰鬥時，南瓜會環繞雷琪兒生成。接觸敵人時會爆炸。",
      "sub": [
       {
        "t": "提升傷害與範圍。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "技能可長按以附加額外效果。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "增加可召喚實體數量的上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "西爾菲德（Silpheed）",
      "effect": "南瓜會受西爾菲德影響。"
     }
    ]
   }
  ],
  "nodeCount": 59,
  "branchCount": 12
 },
 {
  "id": "mai",
  "name": "棗麻衣",
  "alias": "Mai Natsume",
  "tier": "A",
  "role": "連段刺客",
  "tags": [
   "單體傷害最高",
   "最脆",
   "要維持連段"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-mai"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Mai Natsume",
  "baseHp": 1020,
  "baseAtk": 168,
  "potentialCount": "25 潛能（+500%）",
  "overview": "麻衣是一名沒有明顯專長的角色，是能從高速穿梭畫面到原地不動卻造成高傷害的萬事通型角色。操作麻衣時，需判斷何時該連續施展無敵招式進行控場，或使用她獨特的綾錦架式招式來消耗 MP 並連段打擊易被擊飛的敵人。她的移動起初可能略顯笨重，但學會她的移動方式對《蒼翼混沌效應》的新手相當有幫助。",
  "talent": {
   "nameEn": "Make Haste",
   "nameZh": "加速（Make Haste）",
   "desc": "使用技能後，獲得 +30% 攻擊傷害，持續 3 秒。雖然增益時間短暫，但 +130% 的幅度不容小覷。依繼承此天賦的原型不同，這可能使其大部分招式獲得巨幅傷害提升。"
  },
  "uniqueMechanic": {
   "nameZh": "綾錦架式（Ayanishiki Stance）",
   "desc": "麻衣獨特的架式系統。在地面長按 普攻 進入綾錦架式後，可透過其他按鈕施展特殊招式（湧、斗、焰）。她在架式中待得越久，這些招式的傷害越高，是麻衣消耗 MP 與連段被擊飛敵人的核心機制。"
  },
  "legacySkills": [
   {
    "nameEn": "Maple Blossom",
    "nameZh": "楓華（Maple Blossom）",
    "desc": "召喚兩道繞圈旋轉的龍捲風，造成傷害並將被擊中的敵人拉入。以其強力的控場能力著稱，使用麻衣的第一個傳承技可確保小型敵人鮮少有機會將你淹沒。"
   },
   {
    "nameEn": "Maple Gust",
    "nameZh": "楓陣風（Maple Gust）",
    "desc": "召喚一道向前行進的大型龍捲風，造成傷害並將被擊中的敵人拉入。與麻衣的第一個傳承技類似，會朝你的原型所面向的方向召喚大型龍捲風。傷害更高、行進更遠，讓麻衣有更多空間以良好的控場擺脫不利局面。"
   }
  ],
  "branches": [
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為二段跳。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "麻衣現在可以三段跳。被擊中時，可跳躍立即回復並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "月華（Moon Blossom）：上 + 跳躍：麻衣施展一個使她無敵的更高跳躍。在空中使用會重置[空中]普攻次數上限。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Airborne Attack",
    "nameZh": "空中攻擊（Airborne Attack）",
    "nodes": [
     {
      "text": "[空中] 普攻：麻衣施展一次向下的斬擊。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "三刺（Sanzashi）：[空中] 普攻 > 普攻 或 [空中] 上 + 普攻：麻衣朝正前方施展一次短距離突刺攻擊。作為麻衣[空中]普攻連段的第 2 段。",
      "sub": [
       {
        "t": "三刺現在會向前發出衝擊波。",
        "k": "extra"
       },
       {
        "t": "三刺現在可破壞霸體。",
        "k": "builtin"
       },
       {
        "t": "三刺現在使麻衣無敵。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     },
     {
      "text": "森之颶風突襲（Sylvan Hurricane Assault）：[空中] 普攻 > 普攻 > 普攻 或 [空中] 下 + 普攻：麻衣以標槍施展一次俯衝攻擊。作為麻衣[空中]普攻連段的第 3 段。",
      "sub": [
       {
        "t": "森之颶風突襲現在範圍更大。",
        "k": "builtin"
       },
       {
        "t": "森之颶風突襲現在可破壞霸體。",
        "k": "builtin"
       },
       {
        "t": "森之颶風突襲現在使麻衣無敵。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "百花繚亂之雪（Floral Blizzard Blossom）與 楓陣風：更大龍捲風",
      "effect": "三刺發出的衝擊波現在可以破壞霸體。"
     },
     {
      "cond": "綾錦：上 + 普攻",
      "effect": "森之颶風突襲現在會將敵人拉向麻衣。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：向前施展一次短距離衝刺。麻衣在衝刺時擁有衝刺無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "衝刺 > 普攻：在衝刺結束時施展一次標槍突刺。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "麻衣衝刺攻擊的範圍增加，且現在擁有衝刺無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "姬百合（Himeyuri）：[地面] 衝刺 > 上 + 衝刺：麻衣現在會施展一次追加的衝刺突刺，過程中會使她離地。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "鈴蘭（Suzuran）：[空中] 衝刺 > 下 + 衝刺：麻衣施展一次向斜下方的衝刺突刺，使她回到地面。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "麻衣不再施展最初的衝刺，而是依她在地面或空中，直接施展姬百合或鈴蘭。她現在也可以連續施展兩次這類突刺。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "姬百合與鈴蘭",
      "effect": "麻衣現在可以連續施展姬百合與鈴蘭。"
     },
     {
      "cond": "全部衝刺潛能",
      "effect": "麻衣現在可以連續施展 3 次突刺。"
     }
    ]
   },
   {
    "nameEn": "Exseal",
    "nameZh": "斷罪之槍（Exseal）",
    "nodes": [
     {
      "text": "技能：麻衣向前投擲標槍。它會貫穿所有敵人，並持續飛行直到撞到牆壁。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "標槍在返回麻衣時，會依擊中的敵人數量恢復 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "筆直投出的標槍會將敵人一起拉到牆邊。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[地面] 長按 技能 + 左／右：麻衣會改變標槍投擲的角度。以角度投出的標槍會從地面與牆壁彈射，每次彈射都會增加傷害。MP:100",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[空中] 技能 + 左／右：麻衣會改變標槍投擲的角度。以角度投出的標槍會從地面與牆壁彈射，每次彈射都會增加傷害。MP:100",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "斷罪之槍：恢復 MP + 拉動敵人",
      "effect": "標槍現在在去程擊中敵人時也會恢復 MP，而不僅是回程時。"
     },
     {
      "cond": "全部斷罪之槍潛能",
      "effect": "當標槍返回麻衣時，會出現短暫閃光。再按一次 技能 會將標槍再次投出，且造成更高傷害。傷害在第 3 次投擲時達到上限。"
     }
    ]
   },
   {
    "nameEn": "Maple Gust",
    "nameZh": "楓陣風（Maple Gust）",
    "nodes": [
     {
      "text": "[地面] 上 + 技能：麻衣在她面前召喚一道巨大的龍捲風。它會緩緩向前移動，聚集敵人。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "龍捲風更大，且在麻衣[地面]普攻連段或重擊的第 4 段時會有額外一道龍捲風。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Thousand Spears",
    "nameZh": "千槍（Thousand Spears）",
    "nodes": [
     {
      "text": "[地面] 長按 下 + 連按 普攻：將麻衣[地面]普攻連段的第 3 段改為一連串刺擊，稱為千槍。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "冬月亂舞（Flurry of the Winter Moon）：[地面] 長按 下 + 連按 普攻 > 連按 技能：在千槍期間連按 技能 會使麻衣施展冬月亂舞，一個規模大得多的斬擊招式，施展期間使她完全無敵。MP:30",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "楓陣風：更大龍捲風",
      "effect": "千槍現在觸及範圍更遠。"
     },
     {
      "cond": "楓陣風：更大龍捲風",
      "effect": "冬月亂舞現在觸及範圍更遠。"
     }
    ]
   },
   {
    "nameEn": "Falling Cherry Blossom Tempest",
    "nameZh": "落櫻暴風（Falling Cherry Blossom Tempest）",
    "nodes": [
     {
      "text": "[地面] 下 + 技能：麻衣旋轉標槍，將所有敵人拉入，然後將其重砸而下。SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：當麻衣的技能擊中敵人時可獲得 SP。",
      "kind": "auto",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Floral Blizzard Blossom",
    "nameZh": "百花繚亂之雪（Floral Blizzard Blossom）",
    "nodes": [
     {
      "text": "[地面] 衝刺 > 技能：麻衣以標槍施展一次強力得多的向前突刺，可破壞霸體。使用期間麻衣無敵。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "長按 技能 以施展更強力的標槍突刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "MP 消耗較低。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[空中] 衝刺 > 技能：麻衣會先向下施展月華到地面，然後使用[地面]百花繚亂之雪。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "衝刺攻擊：衝刺無敵幀",
      "effect": "百花繚亂之雪現在賦予麻衣衝刺無敵幀。"
     }
    ]
   },
   {
    "nameEn": "Ayanishiki",
    "nameZh": "綾錦（Ayanishiki）",
    "nodes": [
     {
      "text": "[地面] 長按 普攻：麻衣進入綾錦架式，解鎖可透過按其他按鈕施展的特殊招式。她在架式中待得越久，這些招式的傷害越高。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "綾錦『湧』（Ayanishiki『Surge』）：[地面] 長按 普攻 > 衝刺：麻衣施展一次快速的過頂踢擊，可破壞霸體。",
      "sub": [
       {
        "t": "[地面] 長按 普攻 > 衝刺 > 衝刺：再次按下 衝刺 會使麻衣在第 1 次之後再施展一次踢擊，造成更高傷害。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "綾錦『斗』（Ayanishiki『Dipper』）：[地面] 長按 普攻 > 跳躍：麻衣施展一次大幅向上的標槍突刺，將自己與敵人一同擊飛到空中。",
      "sub": [
       {
        "t": "[地面] 上 + 普攻：略過綾錦，立即使用綾錦『斗』。",
        "k": "builtin"
       },
       {
        "t": "綾錦『斗』現在會將敵人拉入。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "綾錦『焰』（Ayanishiki『Blaze』）：[地面] 長按 普攻 > 技能：麻衣施展一次快速的向前標槍突刺，獲得比平常更多的 SP。MP:25",
      "sub": [
       {
        "t": "[地面] 長按 普攻 > 長按 技能：麻衣現在會緩緩向前推進，在消耗 MP 的同時造成持續傷害。MP:25",
        "k": "extra"
       },
       {
        "t": "[地面] 長按 普攻 > 技能／長按技能 > 連按 技能：麻衣會立即轉入冬月亂舞，略過千槍。*未列於麻衣的潛能中。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     }
    ],
    "hidden": [
     {
      "cond": "衝刺攻擊：衝刺無敵幀 + 綾錦：湧 > 衝刺",
      "effect": "綾錦：湧現在擁有無敵幀。"
     },
     {
      "cond": "衝刺攻擊：衝刺無敵幀 + 綾錦：斗：拉動敵人",
      "effect": "綾錦：斗現在擁有無敵幀。"
     }
    ]
   }
  ],
  "nodeCount": 42,
  "branchCount": 9
 },
 {
  "id": "lambda",
  "name": "Λ-No.11",
  "alias": "Λ-No.11-",
  "tier": "A",
  "role": "閃避流遠程",
  "tags": [
   "閃避觸發爆發",
   "對空強",
   "吃節奏"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-lambda"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Lambda-11",
  "baseHp": 1070,
  "baseAtk": 140,
  "potentialCount": "34 潛能（+680%）",
  "overview": "Λ-11 運用她憑空召喚刀劍的能力，在各個距離攻擊敵人。結合她創造、同樣能生成刀刃的傳送門，Λ-11 能在安全地遠距離作戰的同時，製造多個傷害來源。儘管她擅長在畫面另一端與敵人周旋，她也憑藉多個多次命中、能暈眩並在敵人之間連鎖的招式，在近身戰中同樣出色。",
  "talent": {
   "nameEn": "Terrain Advantage",
   "nameZh": "地形優勢（Terrain Advantage）",
   "desc": "使敵人自一定高度落下時，恢復 60 MP。這是操作 Λ-11 或繼承此天賦的原型時賺取額外 MP 的簡便方式。雖然高度不算很高，但敵人仍需被抬升到足以達到一定速度。由於落下是以其下墜速度計算，若敵人被攻擊打斷，便會重置，因而取消可獲得的 MP。若敵人下墜速度足夠快，你會看到該敵人身上冒出大量藍色光球。操作 Λ-11 時，這不應是你的首要考量，因為她已有非常強力且不消耗 MP 的手段。"
  },
  "uniqueMechanic": null,
  "legacySkills": [
   {
    "nameEn": "Luminous Slave EX",
    "nameZh": "閃耀奴隸 EX（Luminous Slave EX）",
    "desc": "開啟一道空間之門，釋放會自動鎖定敵人的刀刃。刀刃之間的間隔頻率隨等級提升。複製自 Λ-11 基礎的閃耀奴隸 EX 潛能。此傳承技追蹤性良好、傷害不錯，是從 Λ-11 繼承時的實用選擇。"
   },
   {
    "nameEn": "Legacy Edge [EX]",
    "nameZh": "遺產之刃［EX］（Legacy Edge [EX]）",
    "desc": "召喚一道巨大的空間之門，持續向前發射一道道刀刃。持續時間隨等級提升。複製自 Λ-11 的遺產之刃潛能，此傳承技能在極大的水平距離上長時間造成傷害，非常適合對付大量小型敵人，或被困在牆角的頭目。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：一段 2 連擊，Λ-11 向前射出數把小刀，然後在她面前向下劈落數把。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "小刀現在會自動瞄準她上方範圍內的敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "小刀即使在被打斷後仍會繼續射擊。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "按住方向並連按[地面]普攻，會使 Λ-11 持續發射小刀。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為二段跳。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：Λ-11 的刀刃變為一把巨大的新月形刀刃，她向下揮砍。",
      "sub": [
       {
        "t": "艾克西嘉之釘（Exiga Nail）：[空中] 普攻 > 普攻：Λ-11 向斜下方發射一把巨大刀刃。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "Λ-11 現在可以三段跳。被擊中時，可跳躍立即回復並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "艾克西嘉之釘（Exiga Nail）：[空中] 下 + 普攻：Λ-11 可以手動發射艾克西嘉之釘。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "在空中時，Λ-11 可以跳躍以重置其[空中]攻擊的次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：三段跳 與 閃耀奴隸 EX",
      "effect": "在空中時，跳躍會生成一個小型傳送門，向敵人發射一把追加刀刃。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：Λ-11 短暫消失，向前瞬移。Λ-11 在衝刺時擁有衝刺無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 衝刺 > 普攻：Λ-11 向前衝刺，然後召喚一把巨大刀刃，朝她前方的斜上方刺出。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "Λ-11 現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺時，刀刃會環繞 Λ-11 揮砍。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "衝刺：衝刺時攻擊 與 跳躍：重置攻擊次數上限",
      "effect": "在空中時，Λ-11 可以衝刺以重置其[空中]攻擊的次數上限。"
     },
     {
      "cond": "三重把戲：騎兵（Act Parcer Tri: Can use mid-air）",
      "effect": "衝刺攻擊現在可破壞霸體。"
     }
    ]
   },
   {
    "nameEn": "Sword Summoner EX Elysium",
    "nameZh": "召劍者 EX 極樂淨土（Sword Summoner EX Elysium）",
    "nodes": [
     {
      "text": "技能 > 技能 > 技能：Λ-11 召喚 3 波巨大刀刃。每波 MP:33。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "Λ-11 的技能會生成於敵人的位置。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "技能 > 普攻 > 技能 > 普攻 > 技能 > 普攻：在 Λ-11 技能的任一波刀刃後按下 普攻，會從上方召喚一道追加波。這些追加刀刃不消耗 MP。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "Λ-11 的技能每波召喚更多刀刃。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Heavy Strike",
    "nameZh": "重擊（Heavy Strike）",
    "nodes": [
     {
      "text": "[地面] 長按 普攻：Λ-11 在略微後退的同時向前發射一把巨大刀刃。使用此招時她擁有短暫無敵。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "當重擊擊中敵人時，會有數把追加刀刃攻擊該敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "Λ-11 在使用重擊時現在擁有衝刺無敵幀。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "重擊：追加刀刃 與 海盜軍刀（Corsair Sabre）",
      "effect": "重擊現在會對擊中的敵人施加標記，接著召喚更多刀刃攻擊被標記的敵人。"
     }
    ]
   },
   {
    "nameEn": "Sword Summoner EX",
    "nameZh": "召劍者 EX（Sword Summoner EX）",
    "nodes": [
     {
      "text": "在 Λ-11 面前召喚攻擊敵人的刀刃。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 上 + 普攻 x4：Λ-11 會持續在她面前召喚刀刃攻擊敵人，最多 4 次。若第 1 次未擊中任何敵人，Λ-11 便無法繼續攻擊。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[空中] 上 + 普攻 x3：Λ-11 會持續在她面前召喚刀刃攻擊敵人，最多 3 次。若第 1 次未擊中任何敵人，Λ-11 便無法繼續攻擊。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "全部召劍者 EX 潛能",
      "effect": "[地面]召劍者 EX 會隨每次[地面]上 + 普攻發射更多刀刃。"
     },
     {
      "cond": "全部召劍者 EX 潛能 與 跳躍：艾克西嘉之釘",
      "effect": "在任一種召劍者 EX 期間按下 下 + 普攻，會在敵人的位置發射艾克西嘉之釘。"
     }
    ]
   },
   {
    "nameEn": "Act Parcer Tri: Cavalier",
    "nameZh": "三重把戲：騎兵（Act Parcer Tri: Cavalier）",
    "nodes": [
     {
      "text": "[地面] 下 + 衝刺：Λ-11 施展一次肩撞，然後從地面召喚一把可破壞霸體的巨大刀刃。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "中斷三重把戲：騎兵不會阻止巨大刀刃被召喚。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "可在空中使用。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Corsair Sabre",
    "nameZh": "海盜軍刀（Corsair Sabre）",
    "nodes": [
     {
      "text": "上 + 衝刺：Λ-11 向前衝刺，沿途攻擊敵人，並對其中一名被擊中的敵人施加標記。被標記的敵人會被自動召喚的刀刃鎖定攻擊。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "會召喚更多刀刃攻擊被標記的敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "最多可以標記兩名敵人。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Calamity Sword",
    "nameZh": "災厄之劍（Calamity Sword）",
    "nodes": [
     {
      "text": "下 + 技能：從天際召喚一把巨型刀刃，落到地面。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "下 + 長按 技能：改為召喚 3 把巨型刀刃。MP:100",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "召劍者 EX 極樂淨土：於敵人位置召喚",
      "effect": "災厄之劍現在會於敵人的位置召喚。"
     },
     {
      "cond": "召劍者 EX 極樂淨土：技能後攻擊",
      "effect": "下 + 技能 > 普攻：在災厄之劍後按下 普攻，會在敵人兩側召喚另一波水平刀刃。"
     },
     {
      "cond": "災厄之劍：3 把刀刃 與 召劍者 EX 極樂淨土：技能後攻擊",
      "effect": "下 + 長按 技能 > 普攻：在長按版本的災厄之劍後按下 普攻，會從地面召喚另一波巨型刀刃。"
     }
    ]
   },
   {
    "nameEn": "Luminous Slave EX",
    "nameZh": "閃耀奴隸 EX（Luminous Slave EX）",
    "nodes": [
     {
      "text": "上 + 技能：Λ-11 在她上方開啟一個小型傳送門，持續 10 秒，每 2 秒發射一把巨大刀刃。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "可同時存在多個傳送門。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "召喚出的刀刃可以貫穿敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "刀刃現在發射頻率加倍。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": []
   },
   {
    "nameEn": "Legacy Edge",
    "nameZh": "遺產之刃（Legacy Edge）",
    "nodes": [
     {
      "text": "長按 技能：開啟一個大型傳送門，持續向前發射刀刃。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "技能按得越久，會消耗越多 MP 以換取發射刀刃。最多至 MP:200。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "傳送門開啟得越久，一次射出的刀刃會越來越多。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "召劍者 EX 極樂淨土：技能後攻擊",
      "effect": "在遺產之刃後按下 普攻，會在敵人的另一側召喚另一個傳送門，朝第 1 個傳送門射擊。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "通用普攻：會召喚更多刀刃。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "通用普攻：普攻招式的刀刃更大。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "通用技能：技能可以過度消耗 Λ-11 的 MP，最多至 -100 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "通用技能：技能招式的刀刃更大，且可破壞霸體。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "兩項通用普攻強化",
      "effect": "通用普攻可以破壞霸體。"
     }
    ]
   }
  ],
  "nodeCount": 44,
  "branchCount": 12
 },
 {
  "id": "icey",
  "name": "艾希",
  "alias": "ICEY（聯動）",
  "tier": "A",
  "role": "高機動",
  "tags": [
   "空中五衝刺",
   "自帶護盾",
   "無自動 MP 回復"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-icey"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "ICEY",
  "baseHp": 960,
  "baseAtk": 99,
  "potentialCount": "32 潛能（+640%）",
  "overview": "《ICEY》同名橫向斬擊動作遊戲的聯動角色，也是 91Act 首個手工打造的可遊玩原型，美術風格與其他角色截然不同，不使用 ArcSys 的點陣圖。她本身沒有語音，改由旁白偶爾代為發聲。ICEY 專精連段，能解鎖多個以不同按鍵輸入施展的新招式；同時擁有全遊戲數一數二的衝刺——可無限次、朝任意方向衝刺。她不會隨時間自動回復 MP，必須靠普攻命中來補充。",
  "talent": {
   "nameEn": "Mechanized Enemy",
   "nameZh": "機械化敵人（Mechanized Enemy）",
   "desc": "ICEY 或繼承此天賦的原型對機械系敵人造成 10% 額外傷害，並在牠們血量偏低時將其即死處決。這是個用來對付機械系敵人的實用天賦；不過這類敵人數量雖多，10% 的增傷幅度通常不足以讓它比其他天賦更值得繼承。"
  },
  "uniqueMechanic": {
   "nameZh": "無自動 MP 回復（No Automatic MP Regeneration）；破甲狀態（Armor Broken Status）",
   "desc": "（1）無自動 MP 回復：ICEY 是唯一不會隨時間獲得 MP 的原型，改為在普攻命中時回復 MP。這使她連續施展技能的能力取決於能否透過擊殺或穿插普攻來補充 MP；由於她多數強力技能消耗大量 MP，維持輸出會相當吃力，因此熟悉各種連段、在連段與技能間來回切換是必要的。（2）破甲狀態：ICEY 能對敵人施加的特殊狀態，可藉由對敵人造成大量傷害，或在特定招式（如猛擊的第 3 擊）解鎖隱藏效果時施加。敵人進入破甲狀態時，頭上會出現三角形標記。施加後使用再生（Regeneration）會將 ICEY 瞬移到被標記的敵人身邊、攻擊牠並移除該狀態；解除破甲狀態會對敵人追加一次攻擊並回復 ICEY 少量 MP，進一步強化後甚至能回復 HP。"
  },
  "legacySkills": [
   {
    "nameEn": "Otherworldly Voice",
    "nameZh": "異界之聲（Otherworldly Voice）",
    "desc": "召喚一種未知而詭異的聲音，帶來各種意想不到的效果，效果強度隨等級提升。屬於輔助型傳承技，有機率給予隨機增益，極少數情況下則為減益。可用增益：整體傷害 +20%；可阻擋一次攻擊的護盾（不提供霸體，也無法防止連段與連殺計數中斷）；MP 回復增益，共 94 MP。可用減益：暫時反轉方向輸入。"
   },
   {
    "nameEn": "Otherworldly Blade",
    "nameZh": "異界之刃（Otherworldly Blade）",
    "desc": "召喚 ICEY 向前衝刺，接觸敵人時施展多段斬擊，傷害隨等級提升。屬於簡單的傳承技，適合用來快速清除少量敵人。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：ICEY 進行 4 段連擊，每一段都會產生少量 MP。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "四連斬（Quadra Slash）：[地面] 普攻 x5：在[地面]普攻連段結尾追加一段額外攻擊，使 ICEY 施展旋轉斬擊。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "上鉤拳（Uppercut）：[地面] 上 + 普攻：施展一次跳躍斬擊，命中兩次。",
      "sub": [
       {
        "t": "ICEY 使用此招時獲得無敵閃避幀（Invincible Dodge Frames）。",
        "k": "builtin"
       },
       {
        "t": "上鉤拳現在可於[空中]使用。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "四連斬（Quadra Slash）與再生（Regeneration）：回復 HP",
      "effect": "四連斬現在可以反彈投射物。"
     }
    ]
   },
   {
    "nameEn": "Overload",
    "nameZh": "過載（Overload）",
    "nodes": [
     {
      "text": "長按普攻：ICEY 進行大範圍多段斬擊。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "EX 過載（EX Overload）：[地面] 長按普攻：當至少有 10 SP 時，消耗全部 SP 並施展強化版過載。",
      "sub": [
       {
        "t": "SP：使用再生（Regeneration）後回復 SP。",
        "k": "auto"
       },
       {
        "t": "EX 過載的傷害隨消耗的 SP 量增加。ICEY 使用此招時擁有無敵幀（Invulnerability Frames）。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "EX 過載（EX Overload）與整合（Integration）：閃避與無敵幀",
      "effect": "過載現在賦予 ICEY 無敵幀。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為兩次跳躍。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：於[空中]施展的 3 段連擊。",
      "sub": [
       {
        "t": "旋風（Cyclone）：[空中] 普攻 x4：在[空中]普攻連段結尾追加一段向下的旋轉斬擊。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "垂直斬（Vertical Cut）：[空中] 下 + 普攻：ICEY 施展快速的俯衝攻擊。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "ICEY 現在可以三段跳。當她受擊時，可以立即跳躍脫離，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "以跳躍中斷攻擊可回復少量 MP。於[空中]跳躍會重置[空中]普攻次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "上鉤拳（Uppercut）",
      "effect": "垂直斬現在可多次命中。"
     },
     {
      "cond": "上鉤拳（Uppercut）與整合（Integration）：於[空中]使用",
      "effect": "垂直斬命中地面時會產生衝擊波。"
     },
     {
      "cond": "上鉤拳（Uppercut）：無敵閃避幀",
      "effect": "垂直斬現在賦予 ICEY 無敵閃避幀。"
     },
     {
      "cond": "上鉤拳（Uppercut）、整合（Integration）：於[空中]使用，以及死亡之舞（Dance of Death）：爆裂分身",
      "effect": "垂直斬的衝擊波範圍更大。"
     },
     {
      "cond": "衝刺（Dash）：2 次衝刺與旋風（Cyclone）",
      "effect": "旋風賦予 ICEY 無敵閃避幀。"
     },
     {
      "cond": "跳躍中斷回復 MP 與再生（Regeneration）：提升 MP 回復",
      "effect": "以跳躍中斷攻擊現在也會回復 SP。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：ICEY 施展短距離前衝。ICEY 的衝刺擁有無敵閃避幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "ICEY 現在可以衝刺 2 次，且可朝任意方向衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "ICEY 現在可以衝刺 5 次。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "再生（Regeneration）與[地面]衝刺不會中斷 ICEY 的普攻連段。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "衝刺：5 次衝刺與整合（Integration）：於[空中]使用",
      "effect": "ICEY 現在可以消耗 10 MP 在超過上限後繼續衝刺。"
     },
     {
      "cond": "衝刺：2 次衝刺與通用強化：活力",
      "effect": "在護盾啟動時衝刺穿過敵人會對其造成傷害。"
     },
     {
      "cond": "跳躍：中斷以獲得 MP 與衝刺：再生與跳躍不會中斷連段順序",
      "effect": "於[空中]衝刺會重置[空中]普攻次數上限。"
     },
     {
      "cond": "破甲狀態與衝刺：2 次衝刺",
      "effect": "以衝刺迴避傷害會對敵人施加破甲狀態。"
     }
    ]
   },
   {
    "nameEn": "Pummel",
    "nameZh": "猛擊（Pummel）",
    "nodes": [
     {
      "text": "技能：ICEY 進行 3 段連擊。[空中]技能連段的最後一擊會將小型敵人砸入地面。*不消耗 MP。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "MP 不會隨時間自動回復，而是靠攻擊來補充。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "破鋼擊（Steel Breaker）：[地面] 長按技能：ICEY 施展強力的向前突刺。",
      "sub": [
       {
        "t": "破鋼擊距離更遠，並會將敵人拉近。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     },
     {
      "text": "若 ICEY 身上有 25 MP，猛擊會消耗它以強化傷害與範圍。強化後的猛擊攻擊會賦予 ICEY 閃避幀。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "強化猛擊（Enhancened Pummel）與破甲狀態",
      "effect": "猛擊連段的第三擊會施加破甲狀態。"
     }
    ]
   },
   {
    "nameEn": "Electron Flow",
    "nameZh": "電子流（Electron Flow）",
    "nodes": [
     {
      "text": "解鎖數個新招式。普攻連段不必完整打完，只需緩衝輸入即可。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "橫掃（Sweep）：[地面] 普攻 > 技能：施展一次快速斬擊，將小型敵人擊飛。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "橫掃（Sweep）：[空中] 普攻 > 技能：施展一次向下斬擊，將敵人砸入地面。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "串刺（Skewer）：普攻 > 普攻 > 技能：在 ICEY 面前施展數次快速突刺。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "殘暴之刃（Brutal Blade）：普攻 > 普攻 > 普攻 > 技能：施展兩次快速的來回衝刺，將敵人拉近。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "回彈（Bounceback）：[地面] 普攻 > 普攻 > 普攻 > 普攻 > 技能：施展大範圍水平突刺，將敵人拉近。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "串刺 > 技能：在串刺後立即施展回彈。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "殘暴之刃 > 技能：在殘暴之刃後立即施展上鉤拳。*遊戲中屬於上述潛能的一部分。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "電子流：更多後續與通用強化：活力",
      "effect": "電子流：橫掃讓 ICEY 獲得霸體（Super Armor）。若她擁有來自活力的護盾，則改為獲得無敵幀。"
     },
     {
      "cond": "電子流：所有新連段與整合、共鳴，於[空中]",
      "effect": "[地面]橫掃在攻擊期間會有短暫的無敵幀。同時現在會產生 MP。"
     },
     {
      "cond": "死亡之舞：爆裂分身與再生（Regeneration）：回復 HP",
      "effect": "回彈現在可以破除霸體。"
     },
     {
      "cond": "電子流：所有新連段與猛擊：以 MP 強化",
      "effect": "電子流的技能攻擊可以長按來強化。"
     }
    ]
   },
   {
    "nameEn": "Dance of Death",
    "nameZh": "死亡之舞（Dance of Death）",
    "nodes": [
     {
      "text": "解鎖新技能。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "致命圓盤（Deadly Disc）：上 + 技能：ICEY 施展旋轉攻擊，最後一擊造成更高傷害。MP:50",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "暗影之舞（Shadow Dance）：下 + 技能：ICEY 召喚一個分身，鎖定敵人並攻擊。MP:50",
      "sub": [
       {
        "t": "分身攻擊後會爆炸。",
        "k": "builtin"
       },
       {
        "t": "交換（Swap）：下 + 長按技能：ICEY 在分身攻擊結束後與其交換位置。",
        "k": "extra"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "死亡之舞：致命圓盤與衝刺：2 次衝刺",
      "effect": "致命圓盤現在賦予 ICEY 無敵閃避幀。"
     },
     {
      "cond": "死亡之舞：致命圓盤與再生（Regeneration）：提升 MP 回復",
      "effect": "致命圓盤現在命中敵人時回復 MP。"
     },
     {
      "cond": "死亡之舞：致命圓盤 + 暗影之舞、再生：提升 MP 回復，以及過載：傷害隨消耗 SP 增加",
      "effect": "致命圓盤現在命中敵人時回復 SP。"
     },
     {
      "cond": "死亡之舞：暗影之舞與再生：回復 HP",
      "effect": "暗影之舞更容易對敵人施加破甲狀態。"
     },
     {
      "cond": "死亡之舞：暗影之舞與過載：傷害隨消耗 SP 增加",
      "effect": "暗影之舞命中敵人時回復 SP。"
     },
     {
      "cond": "死亡之舞：致命圓盤 + 暗影之舞、再生：提升 MP 回復，以及過載：傷害隨消耗 SP 增加",
      "effect": "暗影之舞命中敵人時回復 MP。"
     }
    ]
   },
   {
    "nameEn": "Integration",
    "nameZh": "整合（Integration）",
    "nodes": [
     {
      "text": "[地面] 下 + 動作：ICEY 進入「收刀」架勢，期間可施展新招式。",
      "sub": [
       {
        "t": "裂斬（Divide）：收刀 > 普攻：施展一次快速的向上斬擊，將小型敵人擊飛。",
        "k": "auto"
       },
       {
        "t": "瓦解（Neutralize）：收刀 > 技能：施展一次快速的水平斬擊。ICEY 在此斬擊期間會格擋攻擊。成功格擋攻擊時，ICEY 會回復 200 MP 並獲得短暫的無敵幀。MP:100",
        "k": "auto"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "共鳴（Resonance）：[地面] 上 + 動作：ICEY 進入「蓄力」架勢，期間可施展新招式。",
      "sub": [
       {
        "t": "湧流（Surge）：蓄力 > 普攻：ICEY 向前發射大型斬擊投射物。持續按普攻可發射更多投射物。MP:25",
        "k": "extra"
       },
       {
        "t": "轉移（Shift）：蓄力 > 技能：ICEY 在她前方施展向下斬擊。此招消耗全部 MP，且傷害隨消耗的 MP 增加。在此攻擊期間按動作鍵可瞬移到處於破甲狀態的敵人身後。",
        "k": "extra"
       }
      ],
      "kind": "builtin"
     },
     {
      "text": "ICEY 施展裂斬時擁有閃避幀，施展轉移時擁有無敵幀。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "整合與蓄力架勢可於[空中]使用。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "共鳴 + 閃避與無敵幀",
      "effect": "收刀與蓄力架勢提供少量無敵閃避幀。"
     },
     {
      "cond": "衝刺：2 次衝刺 + 無連段中斷與閃避與無敵幀",
      "effect": "以瓦解格擋攻擊後，按技能可再次施展瓦解。"
     },
     {
      "cond": "收刀與蓄力架勢於[空中]與通用強化：護盾破甲狀態",
      "effect": "以瓦解格擋攻擊時，敵人會被置於破甲狀態。"
     },
     {
      "cond": "共鳴與衝刺：無連段中斷",
      "effect": "若轉移命中處於破甲狀態的敵人，會移除該狀態以換取額外傷害。若該攻擊擊殺該敵人，按上 + 動作會將 ICEY 瞬移到附近敵人身邊並再次施展轉移。"
     },
     {
      "cond": "共鳴、衝刺：無連段中斷，以及再生：施加破甲狀態",
      "effect": "轉移對處於破甲狀態的敵人造成額外傷害。"
     },
     {
      "cond": "共鳴與再生：提升 MP 回復",
      "effect": "若湧流命中處於破甲狀態的敵人，會移除該狀態以換取額外傷害。若湧流命中未處於破甲狀態的敵人，則會改為施加該狀態。此效果對同一敵人在短時間內僅能觸發一次。"
     },
     {
      "cond": "共鳴、死亡之舞，以及衝刺：無連段中斷",
      "effect": "湧流連續投射物的速度提升。"
     }
    ]
   },
   {
    "nameEn": "Lysis",
    "nameZh": "裂解（Lysis）",
    "nodes": [
     {
      "text": "對敵人造成一定量的傷害後，牠們會進入破甲狀態。這會以懸浮在敵人身上的標誌性三角標記顯示。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "再生（Regeneration）：動作：ICEY 瞬移到處於破甲狀態的敵人身後，施展小型衝擊波攻擊，回復 MP 與 SP。再生啟動期間，ICEY 擁有無敵幀。",
      "sub": [
       {
        "t": "再生現在會回復部分 HP。",
        "k": "builtin"
       },
       {
        "t": "再生擁有提升的 MP 回復。",
        "k": "builtin"
       },
       {
        "t": "啟動再生時有機率對附近敵人施加破甲狀態。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：護盾破甲狀態與再生：HP 回復",
      "effect": "再生的效果範圍可移除附近敵人的破甲狀態。"
     },
     {
      "cond": "再生：對附近敵人施加破甲狀態 + 提升 MP 回復",
      "effect": "敵人更容易被施加破甲狀態。"
     },
     {
      "cond": "再生：HP 回復 + 提升 MP 回復",
      "effect": "再生造成相當於敵人最大 HP 一定百分比的額外傷害。"
     },
     {
      "cond": "衝刺：5 次衝刺與再生：HP 回復 + 提升 MP 回復",
      "effect": "快速攻擊可在短時間內提升造成的傷害。"
     },
     {
      "cond": "EX 過載與再生：HP 回復 + 提升 MP 回復",
      "effect": "再生的攻擊範圍提升。"
     },
     {
      "cond": "再生：對附近敵人施加破甲狀態與衝刺：5 次衝刺",
      "effect": "再生可以更快地取消進入下一次再生。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "活力（Vitality）：長按動作：ICEY 產生一個可吸收傷害的護盾。MP:50",
      "sub": [
       {
        "t": "護盾啟動期間，受到傷害時有機率對攻擊的敵人施加破甲狀態。",
        "k": "builtin"
       },
       {
        "t": "提升護盾的生命值。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     },
     {
      "text": "提升 ICEY 的 MP 回復效率。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：以跳躍中斷攻擊可獲得 MP 與活力 + 強化護盾",
      "effect": "活力的護盾更為強韌。"
     },
     {
      "cond": "提升 MP 回復與裂解：提升 MP 回復",
      "effect": "ICEY 的 MP 回復提升至最大值。"
     },
     {
      "cond": "強化護盾與死亡之舞：交換",
      "effect": "活力的護盾只會在破裂後才消失。"
     }
    ]
   }
  ],
  "nodeCount": 55,
  "branchCount": 10
 },
 {
  "id": "noel",
  "name": "諾愛兒",
  "alias": "Noel Vermillion",
  "tier": "B",
  "role": "雙槍遠程",
  "tags": [
   "射速高",
   "跑圖最快",
   "身板脆"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-noel"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Noel Vermillion",
  "baseHp": 980,
  "baseAtk": 160,
  "potentialCount": "28 潛能（+560%）",
  "overview": "諾愛兒精通其招牌的銃槍術（Gun-kata），持有整座軍火庫般的槍械。她的雙槍「魔銃・伯爾維克（Arcus Diabolus: Bolverk）」能變形成火箭筒、步槍，甚至電磁砲等多種武器，讓她在任何距離都能造成可觀傷害。她圍繞 MP 與 SP 的轉換運作，核心是以強力的 SP 技能「零式槍：斯雷普尼爾」持續輸出。",
  "talent": {
   "nameEn": "Precision Strike",
   "nameZh": "精準打擊（Precision Strike）",
   "desc": "從遠處命中敵人時，自身整體傷害提升 +50%。此天賦獎勵在遠距離造成傷害。增傷固定，不會隨距離遠近縮放，只要命中超過設定距離即觸發。觸發距離只計算水平距離，因此即使你遠高於敵人也不影響。像可可諾耶（Kokonoe）、Lambda、瑞秋（Rachel）等同樣遠距離攻擊的原型，能享受到這份免費增傷。"
  },
  "uniqueMechanic": {
   "nameZh": "快速裝填（Quick Reload）",
   "desc": "[地面] 上 + 技能：完全補充 MP，冷卻 18~20 秒。這是諾愛兒兩大玩法之一，圍繞著盡量傾瀉 MP，讓她的 SP 技能「零式槍：斯雷普尼爾」隨時待命。由於 200 MP 只能換回 60 SP，要補滿一次 SP 都不容易，快速裝填便能派上用場：每 18~20 秒，無論缺少多少 MP 都會全數補滿。若原本有 150 MP，用光、裝填、再用光，就足以再放一次斯雷普尼爾。若要從過度消耗的斯雷普尼爾恢復，只需 330 MP、一次裝填，再全部傾瀉，即可從 -200 SP 完全補滿。（MP 對 SP 的換算比例為 10/3。）"
  },
  "legacySkills": [
   {
    "nameEn": "Shroud Fall",
    "nameZh": "裹屍布墜落（Shroud Fall）",
    "desc": "優先鎖定遠處敵人，向其發射數次快速爆炸。傷害與範圍隨等級提升。適合用來對付原型觸及範圍外的遠處敵人。"
   },
   {
    "nameEn": "Quick Reload [EX]",
    "nameZh": "快速裝填 [EX]（Quick Reload [EX]）",
    "desc": "原型立即回復 100 MP，回復量隨等級提升。免費獲得額外 MP，幫助你持續使用技能，對 MP 需求高的角色尤其有用。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：諾愛兒以雙槍進行 4 連射。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "Type II: Bloom Trigger：二式・綻放扳機（Type II: Bloom Trigger）：[地面] 長按普攻：諾愛兒釋放單發射擊，傷害高於[地面]普攻連段。",
      "sub": [
       {
        "t": "釋放（Discharge）：諾愛兒的[地面]長按普攻變為大範圍爆炸，造成大量傷害。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "Type VI: Flash Suppressor：六式・消焰器（Type VI: Flash Suppressor）：[地面] 長按下 + 普攻 x3：諾愛兒施展上踢、肩撞，然後向敵人射擊。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "在任何[地面]普攻後按衝刺，可衝到被命中的敵人身後。此衝刺擁有更長的衝刺無敵時間。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：消焰器與跳躍：地之抑制器：5 次",
      "effect": "在六式・消焰器的第 3 擊期間，連打普攻可最多追加射擊 9 次。"
     },
     {
      "cond": "普攻：消焰器 + 釋放",
      "effect": "六式・消焰器的第 3 擊會產生更大爆炸並造成更多傷害。"
     },
     {
      "cond": "普攻：消焰器 + 衝刺追擊",
      "effect": "衝刺 > 下 + 普攻：立即銜接六式・消焰器的肩撞。"
     },
     {
      "cond": "普攻：消焰器與十三式：左輪爆擊",
      "effect": "Type III: Spring Raid：三式・彈簧突襲（Type III: Spring Raid）：[地面] 下 + 長按普攻：諾愛兒施展上升踢，將敵人擊飛至空中。"
     },
     {
      "cond": "普攻：消焰器 + 範圍釋放、跳躍：地之抑制器：5 次，以及十三式：左輪爆擊",
      "effect": "在消焰器第 3 擊上持續開火現在可以無限進行。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為兩次跳躍。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：諾愛兒朝前方下方射下一陣彈雨，然後以雙槍朝同一角度射擊一次。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "Type IV: Earth Suppressor：四式・地之抑制器（Type IV: Earth Suppressor）：[空中] 下 + 普攻：諾愛兒朝正下方射擊兩次。可在一般[空中]普攻連段之前或之後使用。",
      "sub": [
       {
        "t": "四式・地之抑制器可連續使用 5 次。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "諾愛兒現在可以三段跳。當她受擊時，可以立即跳躍脫離，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "芬里爾：更大爆炸",
      "effect": "四式・地之抑制器的彈雨會產生更大爆炸並造成更多傷害。"
     },
     {
      "cond": "左輪爆擊：跳躍重置左輪爆擊使用次數",
      "effect": "於[空中]時，諾愛兒可以跳躍來重置[空中]普攻次數上限。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：諾愛兒快速向前衝刺。衝刺期間擁有衝刺無敵。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "衝刺 > 普攻：諾愛兒向前迴旋，同時朝四周開槍。",
      "sub": [
       {
        "t": "衝刺 > 普攻期間，諾愛兒射擊次數更多、距離更遠，並造成更多傷害。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "諾愛兒現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "衝刺穿過敵人會標記牠們。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "Type XVI: Ignition Bolt：十六式・引燃彈（Type XVI: Ignition Bolt）：[地面] 上 + 動作：諾愛兒手動引爆標記，可破除霸體。",
      "sub": [
       {
        "t": "諾愛兒引爆標記時擁有無敵幀。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     }
    ],
    "hidden": [
     {
      "cond": "左輪爆擊：衝刺重置左輪爆擊使用次數",
      "effect": "於[空中]時，諾愛兒可以衝刺來重置[空中]普攻次數上限。"
     }
    ]
   },
   {
    "nameEn": "Zero-gun: Fenrir",
    "nameZh": "零式槍：芬里爾（Zero-gun: Fenrir）",
    "nodes": [
     {
      "text": "連打技能：諾愛兒發射機槍，直到 MP 耗盡或停止按技能為止。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 技能 > 普攻：諾愛兒向前丟出一把急速旋轉並開火的槍。MP:100",
      "sub": [
       {
        "t": "當旋轉的槍回到諾愛兒身邊時，按普攻可讓她再次將其丟出旋轉。MP:100。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     },
     {
      "text": "[空中] 技能 > 普攻：諾愛兒朝斜下方發射火箭。MP:100",
      "sub": [
       {
        "t": "若諾愛兒的 MP 尚未完全過度消耗，她可以再發射一枚火箭，直到達到 -100 MP。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     },
     {
      "text": "[地面] 普攻 > 技能：諾愛兒以步槍射擊，發射強力單發。MP:50",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[空中] 普攻 > 技能：在任何[空中]普攻後按技能，會讓諾愛兒向下俯衝，並在著地處引發爆炸。MP:50",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "衝刺 > 技能或衝刺 > 普攻 > 技能：諾愛兒向前丟出數枚手榴彈。MP:50",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "上述所有招式都會產生更大爆炸並造成更多傷害。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "零式槍：芬里爾（所有普攻 > 技能與技能 > 普攻招式）：衝刺 > 技能 > 普攻或衝刺 > 普攻 > 技能 > 普攻：諾愛兒會在丟出手榴彈後發射火箭。持續按普攻可同時持續發射火箭與手榴彈。MP:100",
      "kind": "unknown",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Type XIII: Revolver Blast",
    "nameZh": "十三式：左輪爆擊（Type XIII: Revolver Blast）",
    "nodes": [
     {
      "text": "上 + 普攻：諾愛兒一邊跳起一邊以雙槍射擊，將敵人一併擊飛。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "射擊更大、造成更多傷害，並破除霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "於[空中]時，跳躍會重置[空中]上 + 普攻的使用次數上限。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "於[空中]時，衝刺會重置[空中]上 + 普攻的使用次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Quick Reload",
    "nameZh": "快速裝填（Quick Reload）",
    "nodes": [
     {
      "text": "[地面] 上 + 技能：完全補充 MP，冷卻 18~20 秒。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "在任何[地面]普攻連段的收尾動作後播放預設裝填動畫時，諾愛兒會自動回復少量 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "諾愛兒使用快速裝填時無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "冷卻時間減半，現在為 9 秒。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "十六式・引燃彈",
      "effect": "快速裝填現在會引爆放置在敵人身上的標記。"
     }
    ]
   },
   {
    "nameEn": "Shroud Fall",
    "nameZh": "裹屍布墜落（Shroud Fall）",
    "nodes": [
     {
      "text": "長按技能或下 + 技能：諾愛兒前方出現大型準心，在其半徑內引發爆炸。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "長按技能 + 任意方向：可控制準心，朝任意方向移動。",
      "sub": [
       {
        "t": "技能按得夠久會提升傷害與範圍。",
        "k": "builtin"
       }
      ],
      "kind": "builtin"
     },
     {
      "text": "[地面] 長按技能或下 + 技能：裹屍布墜落一律消耗 200 MP，立即蓄滿至最大值。這會過度消耗 MP。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "裹屍布墜落：控制準心與十六式・引燃彈",
      "effect": "裹屍布墜落會自動鎖定被標記的敵人，並在過程中引爆標記。"
     }
    ]
   },
   {
    "nameEn": "Zero-gun: Sleipnir",
    "nameZh": "零式槍：斯雷普尼爾（Zero-gun: Sleipnir）",
    "nodes": [
     {
      "text": "[地面] 長按動作：諾愛兒釋放斯雷普尼爾——一門巨型電磁砲，朝正前方發射雷射。持續按住動作會耗盡她所有 SP。SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：當消耗 MP 的招式命中敵人時獲得 SP。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "斯雷普尼爾現在可以過度消耗 SP，且可在低於 100 SP 時啟動。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：攻擊擁有無敵幀",
      "effect": "零式槍：斯雷普尼爾使用期間賦予諾愛兒衝刺無敵。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "諾愛兒的普攻招式現在可以穿透敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "諾愛兒可以透過技能過度消耗 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "普攻招式擁有短暫的無敵幀。",
      "kind": "builtin",
      "sub": []
     }
    ]
   }
  ],
  "nodeCount": 46,
  "branchCount": 9
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
  "hasData": true,
  "sourceIds": [
   "prototype-taokaka"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Taokaka",
  "baseHp": 1060,
  "baseAtk": 150,
  "potentialCount": "33 潛能（+660%）",
  "overview": "卡卡族的桃兒卡卡是極為靈活的原型，專長是製造分身來倍增傷害。精通各種投擲道具、並掌握時機以分身與重擊收割傷害，是她玩法的關鍵。此外，她的衝刺是遊戲中最優秀之一，能持續提供大量閃避幀。",
  "talent": {
   "nameEn": "Impatience",
   "nameZh": "急躁（Impatience）",
   "desc": "當連段數高於 30 時，造成最多 30% 額外傷害。傷害會逐漸提升，並在連段數達 100 時封頂。連段計數器顯示在畫面右下角，是一個小斬擊圖示旁附數字。此增益非常容易達成，價值等同 2 個潛能。對起手傷害較低的角色尤其受用，因為他們需要數個潛能才能撐起傷害。"
  },
  "uniqueMechanic": {
   "nameZh": "分身（Clones）",
   "desc": "桃兒卡卡的第一個 SP 技能「幾乎變成兩個！」會生成一個暫時分身，在你行動後稍晚執行相同的動作。由於桃兒卡卡有許多長時間持續造成傷害的潛能（例如她的重擊），她能藉此持續輸出大量傷害。然而，多數傷害來自分身 + 重擊的缺點在於：這需要 50 SP，且面對攻擊快、收招短的頭目時效果不佳。這意味著你必須熟練掌握何時啟動分身、何時攻擊，因為任一者時機錯誤都可能導致傷害低落，或在攻擊時喪命。桃兒卡卡的分身也會從特定招式中產生額外投射物，例如「狂熱卡卡擊！」或「旋轉吧旋轉！」的刀刃輪。"
  },
  "legacySkills": [
   {
    "nameEn": "Kaka Attack Command!",
    "nameZh": "卡卡攻擊指令！（Kaka Attack Command!）",
    "desc": "卡卡族的小貓會出現並攻擊敵人。小貓數量隨等級提升。這是個不錯的傳承技，能協助你處理數個敵人，同時專注對付其他目標。"
   },
   {
    "nameEn": "Crunchy Crunch!",
    "nameZh": "咔滋咔滋！（Crunchy Crunch!）",
    "desc": "召喚一個刀刃輪，跟隨你的原型移動，持續造成傷害並反彈投射物。刀刃輪的攻擊速度隨等級提升。若你經常被投射物壓制（例如對上阿拉庫涅 Arakune 時），可選用此傳承技，趁敵人攻擊時反過來輸出。"
   }
  ],
  "branches": [
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為兩次跳躍。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：桃兒卡卡在身前施展單一踢擊。",
      "sub": [
       {
        "t": "移除[空中]普攻次數上限，讓桃兒卡卡只要維持在[空中]就能一直使用。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "[空中] 下 + 普攻：桃兒卡卡以爪子向下俯衝。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "貓魂・二式！（Cat Spirit Two!）：[空中] 長按普攻：桃兒卡卡會持續踢擊直到著地。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "桃兒卡卡現在可以三段跳。當她受擊時，可以立即跳躍脫離，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "狂熱卡卡擊！",
      "effect": "桃兒卡卡的[空中]普攻現在會生成一顆保齡球，落至地面後再滾動一小段距離。"
     },
     {
      "cond": "跳躍：移除[空中]普攻次數上限 + 貓魂・二式！",
      "effect": "[空中]普攻連續命中 3 次後，桃兒卡卡獲得霸體（Super Armor）。"
     },
     {
      "cond": "跳躍：移除[空中]普攻次數上限 + 三段跳",
      "effect": "[空中]普攻連續命中 6 次後，桃兒卡卡的跳躍高度與移動速度會隨[空中]普攻命中次數提升。"
     },
     {
      "cond": "跳躍：全部跳躍潛能",
      "effect": "[空中]普攻連續命中 9 次後，桃兒卡卡的傷害會隨[空中]普攻命中次數提升。"
     },
     {
      "cond": "跳躍：移除[空中]普攻次數上限與狂熱卡卡擊！",
      "effect": "生成的保齡球數量會隨[空中]普攻命中次數增加。"
     },
     {
      "cond": "跳躍：移除[空中]普攻次數上限與衝刺：三段衝刺",
      "effect": "桃兒卡卡的[空中]普攻將擁有無敵幀（Invulnerability Frames）。"
     },
     {
      "cond": "跳躍：貓魂・二式！與狂熱卡卡擊！",
      "effect": "以貓魂・二式！擊中棒球時，會讓桃兒卡卡向前發射一支能量箭。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：桃兒卡卡四肢著地向前短距離衝刺。衝刺擁有閃避幀（Dodge Frames）。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 衝刺 > 普攻：衝刺後，桃兒卡卡施展快速的十字斬。",
      "sub": [
       {
        "t": "貓人秘技・六連刃（Cat Person's Secret Art: Hexa-Edge）：[地面] 衝刺 > 連打普攻：桃兒卡卡施展數次快速斬擊，最後一斬賦予桃兒卡卡無敵幀。",
        "k": "extra"
       },
       {
        "t": "貓人秘技・六連刃可以無限使用。長按普攻施展最後一斬，可破除霸體。",
        "k": "builtin"
       },
       {
        "t": "貓人秘技・六連刃會賦予桃兒卡卡霸體，並減少 50% 受到的傷害。",
        "k": "builtin"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "桃兒卡卡現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "貓人秘技・六連刃與墜落之貓！",
      "effect": "貓人秘技・六連刃的最後一斬現在擁有無敵閃避幀。"
     },
     {
      "cond": "貓人秘技・六連刃與重擊：延長抓擊持續時間",
      "effect": "貓人秘技・六連刃的斬擊會留下爪痕，造成額外傷害。"
     },
     {
      "cond": "衝刺：三段衝刺與舞動之刃",
      "effect": "長按衝刺可無限衝刺。"
     },
     {
      "cond": "衝刺：三段衝刺、舞動之刃，以及小心腳下！：卡卡小貓",
      "effect": "無限衝刺時，卡卡小貓會出現。"
     }
    ]
   },
   {
    "nameEn": "Heavy Strike",
    "nameZh": "重擊",
    "nodes": [
     {
      "text": "長按普攻：桃兒卡卡施展數次垂直斬擊，最後以一記留下爪痕的大斬收尾。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "桃兒卡卡使用重擊時擁有霸體，且每一道斬擊都會留下持續 1.5 秒的爪痕。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "桃兒卡卡可以無限使用重擊。",
      "sub": [
       {
        "t": "重擊使用越久，速度越快。",
        "k": "builtin"
       }
      ],
      "kind": "builtin"
     }
    ],
    "hidden": [
     {
      "cond": "重擊：霸體與貓人秘技・六連刃：霸體",
      "effect": "桃兒卡卡在整個重擊期間都有霸體，且受到的傷害減少 50%。"
     },
     {
      "cond": "重擊：無限抓擊 + 加速抓擊與貓人秘技・六連刃：無限抓擊",
      "effect": "重擊使用越久，造成的傷害越高，直到封頂。"
     },
     {
      "cond": "重擊：無限抓擊 + 加速抓擊與貓人秘技・六連刃：無限抓擊 + 霸體",
      "effect": "重擊使用越久，最後一斬越大且傷害越高。"
     }
    ]
   },
   {
    "nameEn": "Watch your feet!",
    "nameZh": "小心腳下！（Watch your feet!）",
    "nodes": [
     {
      "text": "[地面] 長按下 + 左/右：桃兒卡卡緩慢向前爬行。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 長按下 + 連打普攻：桃兒卡卡以爪子的「鋸刃」持續攻擊。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "[地面] 長按下 + 長按普攻：桃兒卡卡在身前持續水平斬擊。放開普攻會將敵人拉向她。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[地面] 下 + 衝刺：桃兒卡卡向前滑行並攻擊，可破除霸體。她在此攻擊期間擁有無敵幀。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "卡卡小貓會在各種攻擊中協助。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "小心腳下！：下 + 長按普攻與重擊：無限抓擊",
      "effect": "使用重擊時，按下可切換為小心腳下！：長按下 + 長按普攻。切換為長按下 + 長按普攻時，桃兒卡卡擁有短暫的無敵幀。"
     },
     {
      "cond": "小心腳下！：下 + 長按普攻、重擊：無限抓擊、墜落之貓！",
      "effect": "切換時的無敵幀現在升級為無敵閃避幀。"
     },
     {
      "cond": "小心腳下！：全部潛能",
      "effect": "小心腳下！：長按下 + 長按普攻的傷害會隨桃兒卡卡使用時間提升，並有上限。"
     },
     {
      "cond": "小心腳下！：下 + 衝刺與舞動之刃",
      "effect": "小心腳下！：下 + 衝刺可以立即銜接舞動之刃。"
     },
     {
      "cond": "小心腳下！：下 + 衝刺與舞動之刃：三次",
      "effect": "小心腳下！：下 + 衝刺可以連續使用三次。"
     },
     {
      "cond": "小心腳下！：下 + 衝刺與卡卡小貓",
      "effect": "卡卡小貓會在小心腳下！：下 + 衝刺期間協助。"
     },
     {
      "cond": "小心腳下！：下 + 衝刺與墜落之貓！",
      "effect": "小心腳下！：下 + 衝刺的無敵幀升級為無敵閃避幀。"
     },
     {
      "cond": "旋轉吧旋轉！：攻擊與衝刺",
      "effect": "小心腳下！：長按下 + 連打普攻的「鋸刃」更大且造成更多傷害。"
     },
     {
      "cond": "旋轉吧旋轉！：反彈投射物",
      "effect": "小心腳下！：長按下 + 連打普攻現在可以反彈投射物。"
     }
    ]
   },
   {
    "nameEn": "Spinny Spinny!",
    "nameZh": "旋轉吧旋轉！（Spinny-Spinny!）",
    "nodes": [
     {
      "text": "技能：桃兒卡卡蜷成球狀開始旋轉，期間可自由移動、跳躍與衝刺，並在撞擊敵人時攻擊。MP:持續消耗 MP",
      "kind": "base",
      "sub": []
     },
     {
      "text": "旋轉吧旋轉！啟動期間，桃兒卡卡擁有霸體。以旋轉吧旋轉！撞擊敵人會產生少量 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "旋轉吧旋轉！ > 普攻：在旋轉吧旋轉！啟動期間按普攻，會讓刀刃輪擴張並加快旋轉。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "旋轉吧旋轉！ > 衝刺：在旋轉吧旋轉！啟動期間按衝刺，會將桃兒卡卡向前彈出，並在原地留下刀刃輪。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "旋轉吧旋轉！會反彈投射物，將其變成彈回的魚骨。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "旋轉吧旋轉！：攻擊與衝刺、衝刺：三段衝刺",
      "effect": "旋轉吧旋轉！ > 衝刺可以連續使用 3 次。"
     },
     {
      "cond": "旋轉吧旋轉！：全部潛能",
      "effect": "若有旋轉刀刃輪存在，即使 MP 耗盡，旋轉吧旋轉！仍會持續啟動。"
     },
     {
      "cond": "旋轉吧旋轉！：攻擊與衝刺、衝刺：三段衝刺，以及舞動之刃",
      "effect": "桃兒卡卡在旋轉吧旋轉！中可以無限衝刺，且若旋轉刀刃輪存在，衝刺會更快。"
     },
     {
      "cond": "舞動之刃：任意方向",
      "effect": "桃兒卡卡在旋轉吧旋轉！啟動期間可以朝任意方向衝刺。"
     },
     {
      "cond": "旋轉吧旋轉！：攻擊與衝刺與狂熱卡卡擊！：過頂踢 + 炸彈",
      "effect": "旋轉吧旋轉！反彈的投射物現在會變成炸彈，造成更高傷害。"
     }
    ]
   },
   {
    "nameEn": "Fervent Kaka Knock!",
    "nameZh": "狂熱卡卡擊！（Fervent Kaka Knock!）",
    "nodes": [
     {
      "text": "[地面] 上 + 普攻：桃兒卡卡向她上方丟出 3 顆棒球。可攻擊這些棒球來操控其方向與速度。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "將棒球數量提升至 5 顆。",
      "sub": [
       {
        "t": "[地面] 上 + 普攻 > 上 + 普攻：桃兒卡卡施展過頂踢來踢這些棒球。",
        "k": "extra"
       },
       {
        "t": "[地面] 上 + 長按普攻：丟出棒球後，桃兒卡卡會再次抓住它們，並將其變成單一炸彈投擲出去。",
        "k": "extra"
       }
      ],
      "kind": "builtin"
     },
     {
      "text": "[地面] 上 + 普攻 > 技能：桃兒卡卡會用雙手將球向前丟出。*你必須延遲按技能鍵，直到球接近地面。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "棒球持續更久，且其傷害受飛行速度與飛行距離影響。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "狂熱卡卡擊！：追加攻擊 + 掌擊",
      "effect": "狂熱卡卡擊！：[地面] 上 + 普攻 > 長按技能：桃兒卡卡吸收棒球後，現在會向前發射大型雷射光束。*你必須延遲按技能鍵，直到球接近地面。"
     },
     {
      "cond": "狂熱卡卡擊！：追加攻擊與墜落之貓！：電能",
      "effect": "狂熱卡卡擊！：[地面] 上 + 普攻 > 上 + 普攻現在會在桃兒卡卡落地時於地面釋放電能。"
     },
     {
      "cond": "狂熱卡卡擊！：追加攻擊與旋轉吧旋轉！：攻擊與衝刺",
      "effect": "狂熱卡卡擊！：[地面] 上 + 普攻 > 上 + 普攻會召喚一個刀刃輪。"
     }
    ]
   },
   {
    "nameEn": "Dancing Edge",
    "nameZh": "舞動之刃（Dancing Edge）",
    "nodes": [
     {
      "text": "左/右 > 衝刺：桃兒卡卡朝按住的方向施展新的衝刺攻擊。她擁有無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "這可以朝任意方向使用。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "這可以連續使用 3 次。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "小心腳下！：卡卡小貓",
      "effect": "當舞動之刃命中敵人時，卡卡小貓會出現攻擊牠們。"
     },
     {
      "cond": "舞動之刃：任意方向 + 3 次衝刺與衝刺：無限衝刺",
      "effect": "舞動之刃可以無限使用。"
     }
    ]
   },
   {
    "nameEn": "Falling Cat!",
    "nameZh": "墜落之貓！（Falling Cat!）",
    "nodes": [
     {
      "text": "上 + 技能：桃兒卡卡跳向空中然後向下俯衝。這會抓住小型敵人。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "將敵人砸入地面後，桃兒卡卡會接續更多攻擊。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "抓取的範圍提升，且可以抓住多個敵人。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "著地後會在地面釋放電能。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "墜落之貓！：提升抓取範圍與狂熱卡卡擊！",
      "effect": "在砸擊攻擊期間會召喚棒球與保齡球。"
     },
     {
      "cond": "墜落之貓！：提升抓取範圍與旋轉吧旋轉！：反彈投射物",
      "effect": "桃兒卡卡在砸擊攻擊期間會反彈投射物。此外，砸擊攻擊期間會召喚魚骨投射物。"
     },
     {
      "cond": "墜落之貓！：提升抓取範圍與舞動之刃：3 次衝刺",
      "effect": "墜落之貓！可以在攻擊的上升段連續使用 3 次。俯衝時位置越高，砸擊的第一擊越強。"
     },
     {
      "cond": "小心腳下！：卡卡小貓與墜落之貓！：後續攻擊",
      "effect": "卡卡小貓會在後續攻擊期間協助。"
     }
    ]
   },
   {
    "nameEn": "Almost Becoming Two!",
    "nameZh": "幾乎變成兩個！（Almost Becoming Two!）",
    "nodes": [
     {
      "text": "[地面] 上 + 動作：桃兒卡卡召喚一個暗影分身，會執行桃兒卡卡所做的任何攻擊。暗影分身持續 10 秒。SP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：命中敵人時獲得 SP。獲得的 SP 量隨連段計數提升。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "暗影分身現在持續 20 秒。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "桃兒卡卡現在會召喚 2 個暗影分身。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Attack Meow Pow!",
    "nameZh": "攻擊喵拳！（Attack Meow Pow!）",
    "nodes": [
     {
      "text": "下 + 技能：桃兒卡卡施展數次大範圍攻擊。MP:100 SP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：命中敵人時獲得 SP。獲得的 SP 量隨連段計數提升。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "[空中] 靠牆 左/右 + 動作：桃兒卡卡可以攀附牆面，這會重置[空中]普攻次數上限。某些招式在牆上施展時會獲得強化。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "桃兒卡卡會在攻擊喵拳！後召喚一個暗影分身。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "攻擊喵拳！：召喚暗影分身與幾乎變成兩個！：2 個暗影分身",
      "effect": "攻擊喵拳！現在會召喚 2 個暗影分身。"
     },
     {
      "cond": "攻擊喵拳！：召喚暗影分身與幾乎變成兩個！：20 秒暗影分身",
      "effect": "攻擊喵拳！的暗影分身現在持續 15 秒。"
     },
     {
      "cond": "攻擊喵拳！與旋轉吧旋轉！：攻擊與衝刺",
      "effect": "桃兒卡卡可以過度消耗 MP 來使用攻擊喵拳！"
     }
    ]
   }
  ],
  "nodeCount": 47,
  "branchCount": 10
 },
 {
  "id": "es",
  "name": "Es",
  "alias": "Es",
  "tier": "B",
  "role": "紋章連段",
  "tags": [
   "御三家之一",
   "連招舒服",
   "資料較少"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-es"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Es",
  "baseHp": 1120,
  "baseAtk": 168,
  "potentialCount": "27 潛能（+540%）",
  "overview": "Es 以流暢的動作在畫面上舞動，能在避免傷害的同時長時間滯空。她手持大劍，精通招牌的「紋章（Crest）」，每一招都會留下一次額外的傷害判定。搭配她的通用強化，以及異常大量能重置[空中]普攻次數上限的攻擊，Es 特別擅長迴避各種形式的傷害，並把握敵人的失誤反擊。",
  "talent": {
   "nameEn": "The Power of Crests",
   "nameZh": "紋章之力（The Power of Crests）",
   "desc": "閃避時生成一個紋章（Crest）。以 Es 或繼承此天賦的原型成功閃避傷害時，會在該位置生成一個小紋章。紋章造成少量傷害，但在其位置提供一種控場效果。"
  },
  "uniqueMechanic": {
   "nameZh": "紋章（Crest）",
   "desc": "Es 的獨有攻擊風格：紋章會出現在她各種普攻與技能周圍。紋章會隨時間向外擴張，每一次額外命中都造成傷害。此外，透過天賦「紋章之力」，Es 在閃避時也會在原地生成紋章，使其兼具輸出與控場。"
  },
  "legacySkills": [
   {
    "nameEn": "Crest Arts",
    "nameZh": "紋章術（Crest Arts）",
    "desc": "在原型所在位置生成一個紋章。當敵人進入其範圍時，紋章綻放並造成 816 點傷害，並破除其「無敵」6 秒。傷害與無敵破除時間隨等級提升。適合用來設置陷阱，或將紋章召喚在敵人身上；能造成可觀傷害並擊倒較小的敵人。頁面未明確說明「破除敵人無敵」的具體含義。"
   },
   {
    "nameEn": "Type: Assaulter \"Tristan\" [EX]",
    "nameZh": "型：突擊者「崔斯坦」[EX]（Type: Assaulter \"Tristan\" [EX]）",
    "desc": "重置原型[空中]普攻次數上限。著地時，地面會生成紋章，且施展此技能後在空中停留越久，傷害越高。傷害隨等級提升。能讓你的原型化身為類 Es 的分身，額外再進行一輪[空中]普攻。屬於滯空取向的特殊用途，對上來源之樹（Tree of Origin）等頭目時相當實用。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：Es 進行 4 段連擊，最後一擊會釋放一個造成更高傷害的水平紋章。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 長按普攻：Es 施展其[地面]普攻連段的第 4 擊。*未列於遊戲內的潛能清單。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "此狀態啟動期間，Es 擁有霸體。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "Type: Enchanter \"Pellinore\"：型：附魔者「佩里諾爾」（Type: Enchanter \"Pellinore\"）：[地面] 下 + 普攻：Es 施展新的 3 段連擊，會生成額外且造成額外傷害的紋章。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "[地面] 長按普攻：長按普攻會使紋章多次命中。",
      "kind": "extra",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為兩次跳躍。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 普攻：Es 在她身前施展大斬，然後在其下方施展。前方斬擊會擊飛敵人，向下斬擊則會將敵人拉近。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "Es 現在可以三段跳。當她受擊時，可以立即跳躍脫離，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在[空中]時，Es 的跳躍會生成攻擊其下方敵人的紋章。",
      "kind": "extra",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：Es 向前衝刺。衝刺擁有閃避幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[地面] 衝刺：Es 施展快速的向前衝刺。",
      "sub": [
       {
        "t": "[空中] 衝刺：Es 向上並向前小幅跳躍，讓她能在[空中]停留更久。",
        "k": "auto"
       },
       {
        "t": "紋章會生成於 Es 起始[空中]衝刺的位置。",
        "k": "extra"
       }
      ],
      "kind": "auto"
     },
     {
      "text": "[地面] 衝刺 > 普攻：Es 向前滑行斬擊，然後向前發射一個水平紋章。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "Es 現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "紋章會生成於 Es 起始[地面]衝刺的位置。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：更多紋章",
      "effect": "Es[空中]衝刺生成的紋章會造成多次傷害。"
     }
    ]
   },
   {
    "nameEn": "Crest Arts",
    "nameZh": "紋章術（Crest Arts）",
    "nodes": [
     {
      "text": "技能：Es 召喚一個環形紋章，會旋轉並多次命中。MP:100",
      "kind": "base",
      "sub": []
     },
     {
      "text": "紋章更大、造成更多傷害，並向前移動。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "Type: Shooter \"Breunor\"：型：射手「布魯諾爾」（Type: Shooter \"Breunor\"）：下 + 技能：Es 向前發射最多三道衝擊波，第三道衝擊波會破除霸體。MP:33",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "普攻：附魔者「佩里諾爾」與紋章術：更大紋章",
      "effect": "使用紋章術：技能後，提升 Es 的通用攻擊傷害 x%，持續 x 秒。"
     },
     {
      "cond": "普攻：附魔者「佩里諾爾」 + 蓄力攻擊、紋章術：更大紋章，以及屠殺者「加拉哈德」",
      "effect": "進一步將使用紋章術：技能後 Es 通用攻擊的傷害提升至 x%，持續 x 秒。"
     },
     {
      "cond": "所有紋章術潛能",
      "effect": "射手「布魯諾爾」會產生更大且造成更多傷害的衝擊波。"
     }
    ]
   },
   {
    "nameEn": "Assaulter Tristan",
    "nameZh": "突擊者「崔斯坦」（Assaulter \"Tristan\"）",
    "nodes": [
     {
      "text": "[空中] 下 + 普攻：Es 會踩在她下方的敵人身上並從其身上跳開。再次按普攻會讓她施展俯衝攻擊，並在著地處生成一個紋章。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "Es 現在可以連續 3 次從敵人身上跳開。第 3 次跳躍後的俯衝攻擊會造成更多傷害，並生成更大的紋章。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "踩在敵人身上會重置[空中]普攻次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：生成紋章",
      "effect": "突擊者「崔斯坦」造成更多傷害。"
     },
     {
      "cond": "跳躍：生成紋章、所有突擊者「崔斯坦」潛能，以及通用強化：跳躍或衝刺以重置[空中]普攻次數上限",
      "effect": "突擊者「崔斯坦」在踩踏或施展最終俯衝攻擊時現在擁有無敵幀。最終俯衝攻擊造成更多傷害，且每次踩踏都會擴大紋章的範圍。下 + 動作：Es 立即施展俯衝攻擊，不論踩踏次數或是否在[地面]。傷害與紋章大小仍會計算踩踏次數。"
     }
    ]
   },
   {
    "nameEn": "Slasher Mordred",
    "nameZh": "屠殺者「莫德雷德」（Slasher \"Mordred\"）",
    "nodes": [
     {
      "text": "[地面] 衝刺 > 上 + 普攻：Es 向上跳起，同時向上施展大範圍斜斬。此攻擊擁有短暫的無敵幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "[空中] 上 + 普攻：Es 現在可以在[空中]施展屠殺者「莫德雷德」，同樣擁有無敵幀。以此命中敵人會重置[空中]普攻次數上限。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "Es 在[空中]停留越久，[空中]屠殺者「莫德雷德」造成的傷害越高。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[地面] 衝刺 > 上 + 普攻：Es 在施展屠殺者「莫德雷德」前先衝刺。",
      "sub": [
       {
        "t": "衝刺 > 屠殺者「莫德雷德」現在擁有無敵幀。",
        "k": "builtin"
       }
      ],
      "kind": "extra"
     },
     {
      "text": "[地面]、[空中]，以及[空中]衝刺的屠殺者「莫德雷德」現在都擁有無敵閃避幀。[地面]衝刺的屠殺者「莫德雷德」則保留其一般的無敵幀。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Slasher Gawain",
    "nameZh": "屠殺者「高文」（Slasher \"Gawain\"）",
    "nodes": [
     {
      "text": "上 + 動作：Es 向上並向前跳起，然後施展生成紋章的俯衝攻擊。此攻擊在起手期間擁有閃避幀。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "紋章會沿著 Es 跳過的路徑生成。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "俯衝攻擊產生的紋章會更大，並造成更多傷害。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "Es 現在會沿著她跳躍與俯衝的路徑將敵人拉近。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "屠殺者「莫德雷德」：無敵閃避幀與三段衝刺",
      "effect": "特別是屠殺者「高文」的俯衝部分擁有無敵幀。"
     },
     {
      "cond": "所有屠殺者「高文」潛能",
      "effect": "屠殺者「高文」的俯衝攻擊造成大幅更多傷害。"
     }
    ]
   },
   {
    "nameEn": "Slasher Galahad",
    "nameZh": "屠殺者「加拉哈德」（Slasher \"Galahad\"）",
    "nodes": [
     {
      "text": "[地面] 下 + 衝刺：Es 向前施展短距離瞬移（Blink）。若她在瞬移期間接觸到敵人，會施展短暫的過場攻擊並破除霸體。Es 在起手期間擁有閃避幀，在過場期間擁有無敵幀。MP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "過場播放後，按 下 + 衝刺 可讓 Es 施展另一次不消耗 MP 的瞬移。",
      "kind": "extra",
      "sub": []
     },
     {
      "text": "消耗更少 MP。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "[空中] 下 + 衝刺：Es 現在可以在[空中]施展屠殺者「加拉哈德」。",
      "kind": "extra",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "三段衝刺與通用強化：跳躍或衝刺以重置[空中]普攻次數上限",
      "effect": "若屠殺者「加拉哈德」未命中敵人，Es 可以更早地施展衝刺或另一次屠殺者「加拉哈德」。"
     },
     {
      "cond": "衝刺：起始點紋章",
      "effect": "屠殺者「加拉哈德」現在會生成更多紋章。"
     },
     {
      "cond": "衝刺：起始點紋章與通用強化：更多紋章",
      "effect": "屠殺者「加拉哈德」生成的紋章會多次攻擊。"
     },
     {
      "cond": "屠殺者「莫德雷德」：可於[空中]使用、屠殺者「加拉哈德」：可於[空中]使用，以及通用強化：跳躍或衝刺以重置[空中]普攻次數上限",
      "effect": "使用[空中]屠殺者「加拉哈德」會重置[空中]普攻次數上限。此外，[空中]屠殺者「加拉哈德」可以再接續另一次。"
     }
    ]
   },
   {
    "nameEn": "Slasher Bedivere",
    "nameZh": "屠殺者「貝迪維爾」（Slasher \"Bedivere\"）",
    "nodes": [
     {
      "text": "上 + 技能：Es 依她在[地面]或[空中]施展對應的斜向瞬移。按 上 + 技能 會施展另一次瞬移。SP:50",
      "kind": "base",
      "sub": []
     },
     {
      "text": "SP：紋章命中敵人時獲得 SP。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "Es 可以過度消耗她的 SP 來使用屠殺者「貝迪維爾」。",
      "kind": "builtin",
      "sub": []
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化會影響多個招式。",
      "kind": "base",
      "sub": []
     },
     {
      "text": "紋章（Crest）：Es 的獨有攻擊風格，會出現在她的各種普攻與技能周圍。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "紋章追加攻擊（Crest Additional Attacks）：紋章會隨時間向外擴張。每一次額外命中都造成傷害。",
      "kind": "auto",
      "sub": []
     },
     {
      "text": "通用普攻：更多普攻會生成更多紋章。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "通用技能：Es 可以過度消耗她的 MP 來使用技能。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在[空中]時，Es 可以跳躍或衝刺來重置其[空中]普攻的攻擊次數上限。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "在[空中]時，任何動作都可以銜接其他動作。",
      "kind": "builtin",
      "sub": []
     }
    ]
   }
  ],
  "nodeCount": 46,
  "branchCount": 10
 },
 {
  "id": "hazama",
  "name": "哈札馬",
  "alias": "Hazama",
  "tier": "B",
  "role": "技能流",
  "tags": [
   "移動無敵",
   "吃 MP",
   "普攻極短"
  ],
  "hasData": true,
  "sourceIds": [
   "prototype-hazama"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Hazama",
  "baseHp": 1010,
  "baseAtk": 144,
  "potentialCount": "30 潛能（+600%）",
  "overview": "哈札馬是《蒼翼混沌效應》的第二位 DLC 角色，以蝴蝶刀與 Nox Nyctores「銜尾蛇（Ouroboros）」縱橫全場，能在螢幕間高速穿梭並連續斬擊數百次。他擅長在近距離與遠距離之間快速進出，並利用蛇環（Jormungandr）吸取敵人 MP，MP 效率極高，能近乎無限地施展通用技能與 SP 技能。眾多潛能與隱藏效果需要複雜的輸入組合，是兼具機動、連段與反擊能力的高操作上限角色。",
  "talent": {
   "nameEn": "Gaze of the Serpent",
   "nameZh": "蛇之凝視（Gaze of the Serpent）",
   "desc": "在接近敵人時造成傷害，可使你所有遠距離傷害提升 +30%；在遠距離造成傷害時，則使你所有近距離傷害提升 +30%。增益持續 4 秒，兩者可同時生效。這是一個適合哈札馬不斷進出敵人攻擊範圍、活用其優異移動力的動態天賦。"
  },
  "uniqueMechanic": {
   "nameZh": "蛇環吸取與銜尾蛇（Jormungandr & Ouroboros）",
   "desc": "哈札馬的核心在於吸取 MP 以持續施展通用技能與 SP 技能。長按技能可放出蛇環（Jormungandr），持續吸取範圍內敵人的 MP，其後亦會提升在環內命中的通用技能吸取速率；升級通用強化後，許多通用技能與普攻將變得完全 MP 自給自足。銜尾蛇（Ouroboros）則是主要移動手段，解鎖後可用任意方向+動作再次將自己拖曳至鎖鏈末端並帶有閃避幀；解鎖毒咬（Venomous Bite）後，拉扯期間更擁有完全無敵閃避幀，並可在擺盪時被攻擊而觸發強力反擊。"
  },
  "legacySkills": [
   {
    "nameEn": "Jormungandr",
    "nameZh": "蛇環（Jormungandr）",
    "desc": "在原型周圍啟動蛇環（Jormungandr）光環。位於環內的敵人其 HP 與 MP 會被吸取並轉移給你的原型。持續時間與吸取速率隨等級提升。由於此傳承技僅模仿哈札馬最基礎的蛇環，MP 吸取速率偏低，雖可在超越模式中提升，但對整體玩法影響不大。"
   },
   {
    "nameEn": "Ouroboros",
    "nameZh": "銜尾蛇（Ouroboros）",
    "desc": "朝你按住的方向釋放銜尾蛇鎖鏈。長按傳承按鈕會將被鎖鏈擊中的敵人拖向你，輕按傳承按鈕則會將你自己拖向鎖鏈末端。以鎖鏈擊中敵人可縮短冷卻時間。傷害隨等級提升、冷卻隨等級下降。此傳承技讓所有角色都獲得良好的垂直移動手段，但缺少哈札馬專屬的各種潛能組合。"
   }
  ],
  "branches": [
   {
    "nameEn": "Jump and Dash",
    "nameZh": "跳躍與衝刺",
    "nodes": [
     {
      "text": "跳躍：預設為兩段跳。",
      "kind": "unknown",
      "sub": []
     },
     {
      "text": "衝刺：哈札馬向前滑行，衝刺期間擁有衝刺無敵幀。",
      "sub": [
       {
        "t": "[空中] 連按普攻：哈札馬在身前短距離內連續揮刀。",
        "k": "auto"
       },
       {
        "t": "[地面] 衝刺 > 普攻：哈札馬在地面滑行並進行極低的斬擊，將敵人絆倒。",
        "k": "auto"
       },
       {
        "t": "暗影蛇（Shadow Serpent）：[空中] 下+衝刺：哈札馬以落下的斧踢急速下降，落地後稍微彈起再次變為 [空中]。長按衝刺則不會彈起。暗影蛇期間擁有衝刺無敵幀。",
        "k": "extra"
       }
      ],
      "kind": "base"
     },
     {
      "text": "在空中時，哈札馬可以跳躍或衝刺來重置其 [空中] 普攻的攻擊次數上限。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "哈札馬現在可以三段跳。當他被擊中時，可以立即跳躍恢復，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "哈札馬現在可以三段衝刺。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "蛇之加護架式與暗影蛇",
      "effect": "暗影蛇產生的衝擊波更大。"
     }
    ]
   },
   {
    "nameEn": "Vengeful Viper",
    "nameZh": "復仇之蛇（Vengeful Viper）",
    "nodes": [
     {
      "text": "長按普攻：哈札馬向下揮擊，將敵人拉近。",
      "sub": [
       {
        "t": "蛇之加護（Serpent's Benediction）：長按普攻：在復仇之蛇期間長按普攻會使哈札馬進入蛇之加護架式（SBS），解鎖新的攻擊與移動選項。",
        "k": "extra"
       },
       {
        "t": "吞噬之牙（Devouring Fang）：SBS > 普攻：哈札馬以刀向上斬擊，向前送出衝擊波。",
        "k": "extra"
       },
       {
        "t": "昇龍之牙（Rising Fang）：SBS > 上+普攻：哈札馬向上踢擊，使自己變為 [空中] 並擊破霸體。",
        "k": "extra"
       },
       {
        "t": "墜落之牙（Falling Fang）：SBS > 下+普攻：哈札馬向前做一個短前空翻，踢擊身前，擊破霸體。",
        "k": "extra"
       },
       {
        "t": "蛇之救贖（Serpent's Redemption）：SBS > 左/右+衝刺：哈札馬可在 SBS 期間衝刺，衝刺期間擁有無敵閃避幀。在 SBS 期間衝刺會維持架式；使用吞噬之牙、昇龍之牙或墜落之牙會維持衝刺動量，並在攻擊期間獲得無敵閃避狀態。",
        "k": "extra"
       }
      ],
      "kind": "base"
     },
     {
      "text": "按下動作鍵會使哈札馬立即進入 SBS。",
      "kind": "builtin",
      "sub": []
     },
     {
      "text": "復仇之蛇不再有 [空中] 攻擊次數上限。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "蛇之救贖、通用強化：普攻期間的技能，與毒咬",
      "effect": "在蛇之救贖期間閃避傷害後按下技能，會使哈札馬進行反擊。"
     },
     {
      "cond": "蛇之加護：按下動作鍵進入 SBS，與跳躍與衝刺：在空中跳躍或衝刺會重置 [空中] 攻擊次數上限",
      "effect": "[空中] 蛇之加護與 [空中] 復仇之蛇會重置 [空中] 攻擊次數上限。"
     },
     {
      "cond": "蛇之加護：為復仇之蛇移除 [空中] 攻擊次數上限 + 按下動作鍵進入 SBS，與通用強化：普攻期間的技能",
      "effect": "長按普攻 > 動作會立即轉入 SBS，跳過起始攻擊。"
     },
     {
      "cond": "通用強化：普攻期間的技能，與蛇之加護：為復仇之蛇移除 [空中] 攻擊次數上限 + 按下動作鍵進入 SBS + 蛇之救贖",
      "effect": "在復仇之蛇期間，長按普攻並衝刺會使哈札馬轉入蛇之救贖。"
     },
     {
      "cond": "蛇之加護與蛇之地獄狂喜",
      "effect": "昇龍之牙與墜落之牙現在擁有無敵幀。"
     },
     {
      "cond": "蛇之加護、蛇之不潔之怒：額外攻擊，與蛇之地獄狂喜",
      "effect": "復仇之蛇與蛇之加護擁有無敵幀。"
     },
     {
      "cond": "蛇之加護與通用強化：額外刀擊",
      "effect": "吞噬之牙的衝擊波造成更多傷害。"
     },
     {
      "cond": "蛇之加護：按下動作鍵進入 SBS、通用強化：通用攻擊能更快速取消其他動作，與銜尾蛇：將哈札馬拖向鎖鏈末端",
      "effect": "進入 SBS 時，蛇之加護的攻擊會立即發動。"
     },
     {
      "cond": "蛇之加護、通用強化：額外刀擊 + 普攻期間的技能",
      "effect": "吞噬之牙的衝擊波現在能擊破霸體。"
     }
    ]
   },
   {
    "nameEn": "Serpent's Snare",
    "nameZh": "蛇之陷阱（Serpent's Snare）",
    "nodes": [
     {
      "text": "解鎖多個新招式。",
      "sub": [
       {
        "t": "[地面] 上+普攻：哈札馬以刀進行 3 段連擊，第 2、3 段會將敵人打向空中。",
        "k": "extra"
       },
       {
        "t": "[空中] 上+普攻：哈札馬快速向上踢擊，期間擁有無敵幀。",
        "k": "extra"
       },
       {
        "t": "[地面] 下+普攻：哈札馬進行獨特的 3 段連擊。第 1 段擁有無敵幀，第 2 段擁有閃避幀，第 3 段會將哈札馬的刀向前擲出。",
        "k": "extra"
       },
       {
        "t": "[空中] 下+普攻：哈札馬在其下方進行大範圍圓形斬擊。",
        "k": "extra"
       },
       {
        "t": "通用攻擊能更快速地取消其他動作。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "蛇之陷阱：上+普攻，與蛇之地獄狂喜",
      "effect": "延長 [空中] 上+普攻命中敵人後的無敵幀。"
     },
     {
      "cond": "復仇之蛇：為復仇之蛇移除 [空中] 攻擊次數上限，與蛇之陷阱：上+普攻",
      "effect": "移除 [空中] 上+普攻的 [空中] 攻擊次數上限。"
     },
     {
      "cond": "蛇之陷阱：上+普攻與下+普攻，與通用強化：額外刀擊",
      "effect": "[地面] 上+普攻 > 上+普攻 > 上+長按普攻：在 [地面] 上+普攻第 3 段期間長按普攻，會使哈札馬旋轉刀具數秒，將敵人拉近並在整個旋轉期間持續命中。"
     },
     {
      "cond": "蛇之陷阱：上+普攻與下+普攻、蛇之地獄狂喜，與蛇之不潔之怒：無敵幀",
      "effect": "上+普攻類招式若命中敵人，會延長無敵幀。"
     },
     {
      "cond": "蛇之陷阱：上+普攻與下+普攻，與復仇之蛇：為復仇之蛇移除 [空中] 攻擊次數上限",
      "effect": "移除 [空中] 普攻的 [空中] 攻擊次數上限。"
     },
     {
      "cond": "蛇之陷阱：上+普攻，與銜尾蛇：再次按方向+動作會將哈札馬拖向鎖鏈末端",
      "effect": "在下+普攻第 3 段後按下前+動作，會立即送出銜尾蛇鎖鏈。"
     },
     {
      "cond": "蛇之陷阱：上+普攻，與銜尾蛇：將哈札馬拖向鎖鏈末端 + 飢餓之纏",
      "effect": "在下+普攻第 3 段後按下前+長按動作，會立即發動飢餓之纏。"
     },
     {
      "cond": "復仇之蛇：為復仇之蛇移除 [空中] 攻擊次數上限，與蛇之陷阱：下+普攻",
      "effect": "移除 [空中] 下+普攻的 [空中] 攻擊次數上限。"
     },
     {
      "cond": "蛇之陷阱：上+普攻與下+普攻，與蛇之地獄狂喜",
      "effect": "當蛇之陷阱命中敵人時，哈札馬獲得無敵幀。"
     },
     {
      "cond": "蛇之陷阱：通用攻擊能更快速取消其他動作，與跳躍與衝刺：在空中跳躍或衝刺會重置 [空中] 攻擊次數上限",
      "effect": "跳躍可以中斷通用攻擊。"
     }
    ]
   },
   {
    "nameEn": "The Serpent's Unholy Wrath",
    "nameZh": "蛇之不潔之怒（The Serpent's Unholy Wrath）",
    "nodes": [
     {
      "text": "技能：哈札馬以踢擊上升，然後向前突進踢擊。每次命中會吸取固定量的 MP。MP:100",
      "sub": [
       {
        "t": "哈札馬在使用技能期間擁有短暫的無敵幀。",
        "k": "builtin"
       },
       {
        "t": "技能 > 技能：再次按下技能會在進行突進踢擊前執行一次額外攻擊。",
        "k": "extra"
       },
       {
        "t": "技能 > 技能 > 技能 > 連按普攻：以技能進行突進踢擊後連按普攻，會使哈札馬在敵人倒地時快速連踢。踩踏會持續吸取 MP。＊需先取得上方潛能。",
        "k": "extra"
       },
       {
        "t": "蛇環（Jormungandr）：長按技能：哈札馬召喚蛇環，吸取其範圍內敵人的 HP。",
        "k": "extra"
       },
       {
        "t": "蛇環的半径增加。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "蛇之地獄狂喜",
      "effect": "蛇之不潔之怒現在能擊破霸體。"
     },
     {
      "cond": "蛇之加護、蛇之不潔之怒：踩踏，與跳躍與衝刺：暗影蛇",
      "effect": "蛇之不潔之怒的踩踏會產生小型衝擊波。"
     },
     {
      "cond": "通用強化：提升 MP 吸取，與蛇環",
      "effect": "蛇環現在會在普攻命中時吸取 MP。"
     },
     {
      "cond": "蛇環，與銜尾蛇：將哈札馬拖向鎖鏈末端 + 拖曳敵人時按下技能",
      "effect": "當銜尾蛇在蛇環範圍內命中敵人時，也會吸取 HP。"
     },
     {
      "cond": "蛇環、銜尾蛇：將哈札馬拖向鎖鏈末端、蛇之地獄狂喜，與通用強化：提升 MP 吸取",
      "effect": "蛇環啟動時，銜尾蛇會退還部分 SP。"
     },
     {
      "cond": "蛇環、銜尾蛇：將哈札馬拖向鎖鏈末端、蛇之地獄狂喜，與通用強化：提升 MP 吸取 + 通用攻擊吸取 MP",
      "effect": "蛇環啟動時，銜尾蛇退還全部 SP 消耗。"
     },
     {
      "cond": "蛇之地獄狂喜，與蛇之不潔之怒：技能期間的短暫無敵",
      "effect": "蛇之不潔之怒的無敵幀時間增加。"
     },
     {
      "cond": "蛇之地獄狂喜：增加攻擊範圍，與飢魂之群：長按技能消耗 SP",
      "effect": "蛇之不潔之怒突進踢擊的範圍擴大。"
     }
    ]
   },
   {
    "nameEn": "Serpent's Infernal Rapture",
    "nameZh": "蛇之地獄狂喜（Serpent's Infernal Rapture）",
    "nodes": [
     {
      "text": "[地面] 上+技能：哈札馬獲得暫時無敵幀，並向上進行擊破霸體的大型攻擊。MP:100",
      "sub": [
       {
        "t": "蛇之地獄狂喜可在 [空中] 時發動。",
        "k": "builtin"
       },
       {
        "t": "擴大攻擊範圍。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：提升 MP 吸取",
      "effect": "蛇之地獄狂喜現在會吸取 MP。"
     },
     {
      "cond": "蛇之不潔之怒：踩踏、飢魂之群，與通用強化：技能搭配普攻",
      "effect": "在蛇之地獄狂喜後長按技能，會釋放數次額外攻擊並吸取 MP。"
     },
     {
      "cond": "蛇之不潔之怒：踩踏、飢魂之群、通用強化：技能搭配普攻，與蛇之地獄狂喜：更大攻擊",
      "effect": "額外的後續攻擊造成更多傷害。"
     }
    ]
   },
   {
    "nameEn": "Horde of Hungry Souls",
    "nameZh": "飢魂之群（Horde of Hungry Souls）",
    "nodes": [
     {
      "text": "[地面] 下+技能：哈札馬將數條鎖鏈附著於地面，然後向上釋放大量衝擊波。SP:50",
      "sub": [
       {
        "t": "SP：吸取 MP 時獲得 SP。",
        "k": "auto"
       },
       {
        "t": "長按技能會持續消耗 SP，提升飢魂之群的範圍與傷害。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "飢魂之群：長按技能，與銜尾蛇：飢餓之纏",
      "effect": "在飢魂之群期間長按技能會將敵人拉近。"
     },
     {
      "cond": "蛇環、銜尾蛇：將哈札馬拖向鎖鏈末端、蛇之地獄狂喜，與飢魂之群：長按技能",
      "effect": "哈札馬現在可以過度消耗 SP 來使用飢魂之群。"
     }
    ]
   },
   {
    "nameEn": "Ouroboros",
    "nameZh": "銜尾蛇（Ouroboros）",
    "nodes": [
     {
      "text": "任意方向+動作：哈札馬朝按住的方向發射鎖鏈。鎖鏈擊中敵人時會吸取 MP。SP:50",
      "sub": [
       {
        "t": "SP：吸取 MP 時獲得 SP。",
        "k": "auto"
       },
       {
        "t": "銜尾蛇 > 同方向+動作：哈札馬將自己拖向鎖鏈末端，期間擁有閃避幀。",
        "k": "extra"
       },
       {
        "t": "毒咬（Venomous Bite）：哈札馬在自我拉扯時擁有無敵閃避幀。若在此期間閃避傷害，他會進行反擊。",
        "k": "extra"
       },
       {
        "t": "在哈札馬自我拉扯後按住動作鍵，會使他繼續繞著鎖鏈末端擺盪。",
        "k": "builtin"
       },
       {
        "t": "飢餓之纏（Hungry Coils）：銜尾蛇 > 長按動作：哈札馬會將被銜尾蛇擊中的敵人拖向他。若敵人無法被拖動，他會沿整條鎖鏈送出攻擊。",
        "k": "extra"
       },
       {
        "t": "龍蛇之永恆纏繞（Eternal Coils of the Dragon Serpent）：飢餓之纏 > 連按技能：哈札馬對被抓住的敵人進行數次快速斬擊。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "通用強化：提升 MP 吸取，與銜尾蛇：將哈札馬拖向鎖鏈末端",
      "effect": "通用技能的 MP 吸取效果提升。"
     },
     {
      "cond": "蛇環、蛇之地獄狂喜、通用強化：提升 MP 吸取 + 通用攻擊吸取 MP，與銜尾蛇：將哈札馬拖向鎖鏈末端",
      "effect": "將通用技能吸取提升至最大值。"
     },
     {
      "cond": "蛇之不潔之怒：額外攻擊，與龍蛇之永恆纏繞",
      "effect": "任意方向+長按動作（全程連按）> 暫時連按技能 > 連按普攻：轉為快速斬擊、將敵人拉向哈札馬的攻擊。停止連按會執行由 3 條巨蛇組成的大型攻擊。"
     },
     {
      "cond": "銜尾蛇：繞鎖鏈末端擺盪 + 毒咬",
      "effect": "銜尾蛇鎖鏈可飛行的距離增加。"
     },
     {
      "cond": "蛇之陷阱：下+普攻，與銜尾蛇：繞鎖鏈末端擺盪",
      "effect": "任意方向+動作 > 長按同方向+長按動作（兩者皆全程按住）> 普攻/長按普攻：哈札馬會繞自身進行圓形攻擊。長按普攻會使他持續旋轉進行該圓形攻擊，直到落下。"
     },
     {
      "cond": "銜尾蛇：繞鎖鏈末端擺盪、復仇之蛇：立即按動作進入 SBS，與通用強化：在通用攻擊命中前按技能",
      "effect": "在擺盪期間按技能等同進入 SBS 架式。再按技能會退出 SBS。"
     },
     {
      "cond": "銜尾蛇：繞鎖鏈末端擺盪、復仇之蛇：立即按動作進入 SBS + 蛇之救贖，與通用強化：在通用攻擊命中前按技能",
      "effect": "在擺盪期間按技能等同進入蛇之救贖架式。再按技能會退出蛇之救贖架式。"
     },
     {
      "cond": "銜尾蛇：繞鎖鏈末端擺盪 + 龍蛇之永恆纏繞、復仇之蛇：立即按動作進入 SBS，與通用強化：在通用攻擊命中前按技能",
      "effect": "當哈札馬將自己拖向鎖鏈末端時按技能，會使他進入 SBS。"
     },
     {
      "cond": "銜尾蛇：繞鎖鏈末端擺盪 + 龍蛇之永恆纏繞、復仇之蛇：立即按動作進入 SBS + 蛇之救贖，與通用強化：在通用攻擊命中前按技能",
      "effect": "當哈札馬將自己拖向鎖鏈末端時按技能，會使他進入蛇之救贖架式。"
     },
     {
      "cond": "銜尾蛇：將哈札馬拖向鎖鏈末端、SBS、蛇之地獄狂喜，與蛇之不潔之怒：無敵幀",
      "effect": "哈札馬在釋放銜尾蛇時擁有無敵幀。"
     },
     {
      "cond": "蛇環、銜尾蛇：將哈札馬拖向鎖鏈末端、蛇之地獄狂喜，與飢魂之群：長按技能消耗 SP",
      "effect": "哈札馬可以過度消耗 SP 來使用銜尾蛇。"
     },
     {
      "cond": "銜尾蛇：將哈札馬拖向鎖鏈末端 + 龍蛇之永恆纏繞，與蛇之地獄狂喜",
      "effect": "銜尾蛇使敵人踉蹌的時間更長。"
     },
     {
      "cond": "銜尾蛇：龍蛇之永恆纏繞、蛇之不潔之怒：額外攻擊，與蛇之陷阱：下+普攻",
      "effect": "任意方向+長按動作（全程連按）> 暫時連按技能 > 連按普攻：現在會朝哈札馬兩側向外發射投射物。"
     },
     {
      "cond": "銜尾蛇：龍蛇之永恆纏繞、蛇之不潔之怒：額外攻擊、通用強化：在通用攻擊命中前按技能",
      "effect": "任意方向+長按動作（全程連按）> 暫時連按技能 > 連按普攻使用的時間越長，收尾攻擊造成的傷害越高。"
     },
     {
      "cond": "銜尾蛇：毒咬，與跳躍與衝刺：三段衝刺",
      "effect": "哈札馬在自我拉扯期間的無敵幀延長。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化影響多個招式。",
      "sub": [
       {
        "t": "提升通用技能的吸取速率。",
        "k": "builtin"
       },
       {
        "t": "通用攻擊現在具有吸取 MP 的效果。",
        "k": "builtin"
       },
       {
        "t": "在哈札馬的通用攻擊命中前按下技能，會消耗 MP 強化該攻擊。MP:25",
        "k": "builtin"
       },
       {
        "t": "為哈札馬的刀類攻擊增加額外打擊次數。",
        "k": "builtin"
       },
       {
        "t": "縮短使用哈札馬通用技能後的恢復時間。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "蛇環、蛇之地獄狂喜，與通用強化：提升通用技能的 MP 吸取",
      "effect": "蛇環與蛇之地獄狂喜的 MP 吸取速率提升。"
     },
     {
      "cond": "蛇環、蛇之地獄狂喜，與通用強化：提升通用技能的 MP 吸取 + 通用攻擊可吸取 MP",
      "effect": "將哈札馬通用技能的 MP 吸取速率提升至最大值。"
     },
     {
      "cond": "通用強化：在通用攻擊命中前按技能 + 為刀類普攻增加額外打擊",
      "effect": "以刀強化的普攻會命中更多次。不使用哈札馬刀具的強化攻擊造成更多傷害。"
     },
     {
      "cond": "通用強化：通用攻擊吸取 MP + 在通用攻擊命中前按技能 + 為刀類普攻增加額外打擊",
      "effect": "進一步提升通用攻擊的 MP 吸取速率。"
     },
     {
      "cond": "通用強化：提升哈札馬通用技能的 MP 吸取 + 通用攻擊吸取 MP + 在通用攻擊命中前按技能 + 為刀類普攻增加額外打擊",
      "effect": "將通用攻擊的 MP 吸取速率提升至最大值。"
     },
     {
      "cond": "蛇之陷阱：通用攻擊能更快速取消其他動作，與通用強化：縮短通用技能恢復時間",
      "effect": "蛇環的恢復時間縮短。蛇之不潔之怒若被中斷也不會消失。"
     }
    ]
   }
  ],
  "nodeCount": 47,
  "branchCount": 8
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
  "hasData": true,
  "sourceIds": [
   "prototype-hibiki"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Hibiki Kohaku",
  "baseHp": 1100,
  "baseAtk": 146,
  "potentialCount": "38 潛能（+760%）",
  "overview": "琥珀響音是《蒼翼混沌效應》中的忍者型角色，以快速攻擊、迅捷移動、雙刀與分身追加攻擊見長，能在近距離與遠距離迅速造成高傷害。他擅長從敵人背後輸出以觸發天賦，並可利用連擊或重擊使敵人轉身，進一步放大傷害。",
  "talent": {
   "nameEn": "The Way of Assassination",
   "nameZh": "暗殺之道（The Way of Assassination）",
   "desc": "從敵人背後攻擊時，該次攻擊傷害提升 +30%。此天賦雖對其他角色較難運用，卻能讓琥珀響音或繼承它的原型在背後偷襲時造成更高傷害。憑藉以 [地面] 普攻連擊或重擊使敵人轉身的能力，他能比任何人都更能善用此增益；此外，無盡蕾絲的分身亦可升級為自動從背後攻擊，確保穩定觸發額外傷害。"
  },
  "uniqueMechanic": null,
  "legacySkills": [
   {
    "nameEn": "Splitting Glaives",
    "nameZh": "分裂之刃（Splitting Glaives）",
    "desc": "在原型周圍釋放數把刃。單一敵人最多可被刀刃擊中 4 次。傷害與命中次數隨等級提升。效果與琥珀響音的技能基本相同，會在你周圍召喚數把刀刃，作為快速擊退敵人並造成足以使敵人踉蹌的傷害之手段。"
   },
   {
    "nameEn": "Cover of Darkness",
    "nameZh": "闇之掩護（Cover of Darkness）",
    "desc": "使你的原型進入「匿蹤與疾行」狀態 8 秒。此狀態下的第一次攻擊會觸發奇襲。奇襲的傷害隨等級提升。發動後你的原型會暫時無法被偵測，同時移動速度提升；敵人會隨機朝空處攻擊或完全停止攻擊。奇襲傷害雖隨距離敵人越近越高，但整體偏低，除作為 8 秒的重新走位空檔外效果有限。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "[地面] 普攻：琥珀響音進行 4 段連擊，每次命中都會稍微向前移動。",
      "sub": [
       {
        "t": "燕返（Swallow Dance）：[地面] 下+普攻 ×4：琥珀響音改用雙刃進行全新的 4 段連擊。",
        "k": "extra"
       },
       {
        "t": "在 [空中] 普攻 > 普攻或 [空中] 下+普攻之後，按下 [地面] 普攻或下+普攻，可立即轉入任一套連擊的第 4 段。",
        "k": "builtin"
       },
       {
        "t": "雙刃變得更大，並造成更多傷害。",
        "k": "builtin"
       },
       {
        "t": "琥珀響音的普攻連擊可使敵人轉身，藉此觸發其被動。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為兩段跳。",
      "sub": [
       {
        "t": "[空中] 普攻：向下並向前斬擊一次，接著進行俯衝攻擊。攻擊時按住下會使琥珀響音立即俯衝。",
        "k": "auto"
       },
       {
        "t": "貫穿之羽（Piercing Feather）：[空中] 普攻的第一段現在會在琥珀響音下方投擲數把短刀。",
        "k": "extra"
       },
       {
        "t": "在空中時，琥珀響音可以跳躍或衝刺來重置其 [空中] 普攻的攻擊次數上限。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     },
     {
      "text": "琥珀響音現在可以三段跳。當他被擊中時，可以立即跳躍恢復，並獲得 1 秒無敵。",
      "kind": "builtin",
      "sub": []
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：三段跳 + 貫穿之羽",
      "effect": "貫穿之羽現在可以連續施展 3 次。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：琥珀響音向前翻滾，衝刺期間擁有衝刺無敵幀。",
      "sub": [
       {
        "t": "衝刺 + 普攻：琥珀響音向前翻滾，然後在身前進行十字斬。",
        "k": "auto"
       },
       {
        "t": "旋風滾（Whirlwind Roll）：技能 > 衝刺：在使用忘卻之刃後衝刺，會使琥珀響音在空中旋轉，斬擊周圍一切。",
        "k": "extra"
       },
       {
        "t": "琥珀響音現在可以三段衝刺。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "衝刺：旋風滾 + 三段衝刺",
      "effect": "琥珀響音可以連續施展 3 次旋風滾，且連續的旋風滾之間沒有恢復時間。"
     }
    ]
   },
   {
    "nameEn": "Oblivion Glaive",
    "nameZh": "忘卻之刃（Oblivion Glaive）",
    "nodes": [
     {
      "text": "技能：在琥珀響音周圍召喚一圈忘卻之刃。MP:100",
      "sub": [
       {
        "t": "忘卻之刃變得更大，並造成更多傷害。",
        "k": "builtin"
       },
       {
        "t": "技能 > 普攻：在忘卻之刃返回前按下 [地面] 普攻，會使琥珀響音進行造成大量傷害的大型斜斬。",
        "k": "extra"
       },
       {
        "t": "忘卻之刃現在會環繞並跟隨琥珀響音。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "忘卻之刃：更高傷害 + 環繞之刃",
      "effect": "可用 [空中] 普攻取消 [空中] 忘卻之刃的恢復。"
     }
    ]
   },
   {
    "nameEn": "Heavy Strike",
    "nameZh": "重擊",
    "nodes": [
     {
      "text": "[地面] 長按普攻：琥珀響音大幅向前踏步，然後向上斬擊。這會強制敵人背對琥珀響音。",
      "sub": [
       {
        "t": "重擊範圍更大，且能擊破霸體。",
        "k": "builtin"
       },
       {
        "t": "琥珀響音移動得更遠，且重擊造成更多傷害。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "蹣跚斬擊：無敵",
      "effect": "琥珀響音在重擊踏步期間變成無敵。"
     }
    ]
   },
   {
    "nameEn": "Double Wing Rapid Cyclone",
    "nameZh": "雙翼迅旋（Double Wing Rapid Cyclone）",
    "nodes": [
     {
      "text": "[地面] 上+普攻：琥珀響音進行向上旋轉斬擊，期間使他無敵。",
      "sub": [
       {
        "t": "可在 [空中] 時使用。",
        "k": "builtin"
       },
       {
        "t": "造成更多傷害，且斬擊範圍更大。",
        "k": "builtin"
       },
       {
        "t": "上+普攻 > 下+普攻：琥珀響音在雙翼迅旋後進行俯衝攻擊。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：三段跳，與雙翼迅旋：[空中] 上+普攻",
      "effect": "琥珀響音可以將二段跳或三段跳換成再一次 [空中] 上+普攻。"
     }
    ]
   },
   {
    "nameEn": "Staggering Cuts",
    "nameZh": "蹣跚斬擊（Staggering Cuts）",
    "nodes": [
     {
      "text": "[地面] 下+長按普攻：琥珀響音左右跳躍並進行 3 次斬擊。若第 3 次斬擊命中敵人，則接著進行一次大型攻擊。",
      "sub": [
       {
        "t": "琥珀響音現在斬擊 5 次。",
        "k": "builtin"
       },
       {
        "t": "冷卻時間減半。",
        "k": "builtin"
       },
       {
        "t": "蹣跚斬擊現在會使琥珀響音無敵。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "所有蹣跚斬擊潛能",
      "effect": "蹣跚斬擊的最後一擊會立即重置冷卻。"
     },
     {
      "cond": "忘卻之刃：技能 > [地面] 普攻",
      "effect": "蹣跚斬擊的最後一斬現在與忘卻之刃 > [地面] 普攻相同。"
     },
     {
      "cond": "重擊：更遠衝刺",
      "effect": "蹣跚斬擊的各次斬擊延伸得更遠。"
     }
    ]
   },
   {
    "nameEn": "Pulverizing Fin",
    "nameZh": "粉碎之鰭（Pulverizing Fin）",
    "nodes": [
     {
      "text": "[地面] 上+技能：琥珀響音抓住一名敵人，跳向空中，然後將其砸向地面。MP:50",
      "sub": [
       {
        "t": "粉碎之鰭造成更多傷害，且砸擊的距離更大。",
        "k": "builtin"
       },
       {
        "t": "可在 [空中] 時發動。",
        "k": "builtin"
       },
       {
        "t": "無論琥珀響音是否實際抓住敵人，都會執行後續動作。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "影之踵：MP 恢復",
      "effect": "粉碎之鰭現在會退還部分 MP 給琥珀響音。＊需進一步測試 MP 退還量。"
     }
    ]
   },
   {
    "nameEn": "Black Thunder: Ran",
    "nameZh": "黑雷：亂（Black Thunder: Ran）",
    "nodes": [
     {
      "text": "[地面] 下+技能：琥珀響音召喚數個分身，同時攻擊他附近的敵人。SP:100",
      "sub": [
       {
        "t": "SP：從背後攻擊敵人時獲得 SP。",
        "k": "auto"
       }
      ],
      "kind": "base"
     }
    ]
   },
   {
    "nameEn": "Endlos Lace",
    "nameZh": "無盡蕾絲（Endlos Lace）",
    "nodes": [
     {
      "text": "[地面] 長按技能：琥珀響音持續召喚會自動鎖定並攻擊敵人的分身。MP:15",
      "sub": [
       {
        "t": "每秒召喚更多分身。",
        "k": "builtin"
       },
       {
        "t": "分身會自動鎖定敵人的背後，觸發琥珀響音的天賦。",
        "k": "builtin"
       },
       {
        "t": "分身在攻擊後爆炸，造成更多傷害。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "無盡蕾絲：爆炸分身，與雙翼雙重粉碎：更大爆炸",
      "effect": "無盡蕾絲的分身會造成更大、傷害更高的爆炸。"
     }
    ]
   },
   {
    "nameEn": "Shadow Heel",
    "nameZh": "影之踵（Shadow Heel）",
    "nodes": [
     {
      "text": "[地面] 普攻 > 衝刺：琥珀響音進行 [瞬移]。",
      "sub": [
       {
        "t": "在使用蹣跚斬擊或燕返期間，按下衝刺即可 [瞬移]。",
        "k": "builtin"
       },
       {
        "t": "在 [瞬移] 期間，任何作用中的忘卻之刃都會被回收，並將 MP 退還給琥珀響音。",
        "k": "builtin"
       },
       {
        "t": "若 [瞬移] 命中敵人，會召喚分身進行後續攻擊。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ]
   },
   {
    "nameEn": "Dual Wing Double Smash",
    "nameZh": "雙翼雙重粉碎（Dual Wing Double Smash）",
    "nodes": [
     {
      "text": "[地面] 上+衝刺：琥珀響音召喚分身，並與他一同朝面向的方向攻擊。這些分身在受到傷害時會爆炸。",
      "sub": [
       {
        "t": "受到傷害而產生的爆炸範圍更大、傷害更高。",
        "k": "builtin"
       },
       {
        "t": "會召喚更多分身。",
        "k": "builtin"
       },
       {
        "t": "分身會隨時間自動爆炸。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "雙翼雙重粉碎：自動爆炸，與無盡蕾絲",
      "effect": "未受擊的分身會跑向敵人後再引爆。"
     }
    ]
   }
  ],
  "nodeCount": 47,
  "branchCount": 12
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
  "hasData": true,
  "sourceIds": [
   "prototype-shoushuzhe"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "The Prisoner",
  "baseHp": 750,
  "baseAtk": 75,
  "potentialCount": "33 潛能（+660%）",
  "overview": "梟首者是《蒼翼混沌效應》與《死亡細胞（Dead Cells）》聯動的原型，擁有極度多樣的武器組，分為三個武器背包，能在戰鬥中即時切換裝備與流派。他的核心傷害機制是暴擊，並衍生出強化暴擊與毀滅性暴擊（需以詛咒藥水自我詛咒換取）；眾多潛能需敵人處於「異常狀態」才能觸發。他同時具備優秀的格擋、無敵與治療手段，生存與爆發兼具，但上手門檻高。",
  "talent": {
   "nameEn": "Tactical Healing",
   "nameZh": "戰術治療（Tactical Healing）",
   "desc": "在受到傷害後不久命中敵人時回復 HP。此天賦讓你能在承受傷害後仍靠造成傷害來打得更加激進。"
  },
  "uniqueMechanic": {
   "nameZh": "背包、暴擊與異常狀態（Backpacks, Critical Hits & Abnormal State）",
   "desc": "梟首者的武器分為三個背包，需先取得武器背包 I 的「強化初始武器」潛能，才能解鎖背包 II、背包 III、突變與通用強化；多數背包 II／III 的潛能實際上是背包 I 的一部分，需在通用強化中蒐集「各種武器強化」潛能才會同步。其獨特傷害機制為暴擊：暴擊造成 +50% 傷害，強化暴擊造成 +100% 傷害，毀滅性暴擊則傷害更高、幾乎只能透過詛咒藥水（一擊必殺）取得。所謂「異常狀態」指敵人被梟首者的潛能或戰術施加任何減益時，涵蓋 [冰寒／凍結]、[雷電／麻痺／脈衝]、[撕裂]、[燃燒]、[中毒] 及其獨特的定身減益。"
  },
  "legacySkills": [
   {
    "nameEn": "Wolf Trap",
    "nameZh": "狼陷阱（Wolf Trap）",
    "desc": "投擲一個狼陷阱，將命中的敵人定身一段較長的時間。狼陷阱的數量與定身時間隨等級提升。可用來將任何敵人定住數秒，取得免費攻擊的機會。"
   },
   {
    "nameEn": "Cocoon",
    "nameZh": "繭（Cocoon）",
    "desc": "進入格擋架式。成功格擋傷害會使你獲得 3 秒的無敵幀，且冷卻立即重置。無敵持續時間隨等級提升。這是遊戲中最強的格擋之一，讓你能連續無效化任何形式的傷害，理論上可獲得近乎無限的無敵幀。"
   }
  ],
  "branches": [
   {
    "nameEn": "Weapon Backpack I Frantic Sword",
    "nameZh": "武器背包 I：狂亂之劍（Frantic Sword）",
    "nodes": [
     {
      "text": "[地面] 普攻：梟首者進行 3 段劍斬連擊。",
      "sub": [
       {
        "t": "此潛能強化初始武器。（此潛能是武器背包 I 中所有武器的催化劑。）",
        "k": "builtin"
       },
       {
        "t": "狂亂之劍（Frantic Sword）：普攻：梟首者的普攻連擊現在為 5 段連擊。若梟首者的 HP 低於最大 HP 的一半，或戰術治療處於啟動狀態，其普攻將造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『α 強化』毒焰打擊（Poison Flame Strike）：狂亂之劍的攻擊現在命中時附加 [燃燒] 與 [中毒]。此外，處於異常狀態的敵人將永遠受到狂亂之劍的暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』刺客匕首（Assassin's Dagger）：狂亂之劍 > 上+普攻：在狂亂之劍期間按下上+普攻，會使梟首者進行一段使敵人轉身的 4 段連擊。此外，梟首者從背後攻擊敵人時造成暴擊。",
        "k": "extra"
       },
       {
        "t": "狂亂之劍 > 上+長按普攻：梟首者向前躍起並進行上挑斬。使用此攻擊期間梟首者擁有無敵幀。",
        "k": "extra"
       },
       {
        "t": "衝刺 > 上+長按普攻：梟首者向前躍起並進行上挑斬。使用此攻擊期間梟首者擁有無敵幀。",
        "k": "extra"
       },
       {
        "t": "『β 強化』格擋之刃（Parrying Blade）：狂亂之劍 > 下+普攻：梟首者在進行 4 段斬擊連擊期間獲得霸體，接著進行一次能格擋傷害的突刺。第 4 段斬擊能擊破敵人霸體。此外，梟首者對 Boss 造成暴擊。",
        "k": "extra"
       },
       {
        "t": "衝刺 > 下+長按普攻：梟首者會執行格擋之刃的突刺攻擊。",
        "k": "extra"
       },
       {
        "t": "狂亂之劍 > 下+長按普攻：梟首者會執行格擋之刃的突刺攻擊。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』疾斬（Blitz Slash）：狂亂之劍 > 長按普攻：梟首者進行一段長距離斬擊，且永遠造成暴擊。",
        "k": "extra"
       },
       {
        "t": "長按衝刺 + 長按普攻：梟首者立即執行疾斬。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "背包 I α 與 β",
      "effect": "狂亂之劍：狂亂之劍的所有攻擊現在對面向遠離梟首者的敵人造成暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ，技能背包 II：補藥 α、β 與 γ",
      "effect": "受到詛咒時，狂亂之劍及其衍生的潛能將造成毀滅性暴擊。"
     },
     {
      "cond": "背包 I α 與 β",
      "effect": "刺客匕首：刺客匕首現在對處於異常狀態或生命低於 50% 的敵人造成暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ",
      "effect": "刺客匕首：刺客匕首現在賦予梟首者無敵幀。"
     },
     {
      "cond": "背包 I α、β 與 γ、背包 II 武器、三段衝刺，與通用強化：同步普攻潛能",
      "effect": "刺客匕首：上+長按普攻現在賦予梟首者無敵閃避幀。"
     },
     {
      "cond": "背包 I β 與 γ",
      "effect": "格擋之刃：格擋之刃現在使受到的傷害降低 X%。"
     },
     {
      "cond": "背包 I α 與 β",
      "effect": "格擋之刃：格擋之刃現在在成功格擋傷害後造成暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ",
      "effect": "格擋之刃：格擋之刃現在對 Boss 造成強化暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ",
      "effect": "格擋之刃：以格擋之刃格擋傷害後的暴擊現在造成強化暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ、背包 II 武器、三段衝刺，與通用強化：同步普攻潛能",
      "effect": "格擋之刃的最後一擊以及狂亂之劍 > 下+長按普攻的後續，現在賦予梟首者閃避幀。"
     },
     {
      "cond": "背包 I β 與 γ、背包 II 武器，與三段衝刺",
      "effect": "狂亂之劍 > 下+長按普攻現在在衝刺攻擊期間造成暴擊。"
     },
     {
      "cond": "背包 I γ、背包 II 武器，與三段衝刺",
      "effect": "疾斬：疾斬現在賦予梟首者閃避幀。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack I Quick Bow",
    "nameZh": "武器背包 I：快弓（Quick Bow）",
    "nodes": [
     {
      "text": "上+普攻：梟首者以弓向前方筆直射出一支箭。SP:1",
      "sub": [
       {
        "t": "此潛能強化初始武器。（此潛能是武器背包 I 中所有武器的催化劑。）",
        "k": "builtin"
       },
       {
        "t": "快弓（Quick Bow）：上+普攻：梟首者現在射箭更快，且最大箭矢數量增加。若場上已有 3 支以上箭矢，這些箭矢將造成暴擊。此外，若敵人 HP 低於 50%，箭矢將永遠造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『α 強化』冰弓（Ice Bow）：快弓的箭矢現在會附加 [冰寒] 堆疊，若敵人身上插有 5 支以上箭矢，則其會被凍結。此外，箭矢現在對處於異常狀態的敵人造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』步兵弓（Infantry Bow）：快弓 > 普攻：梟首者迅速切換為步兵弓並進行一次近距離攻擊。梟首者以步兵弓近距離命中敵人時造成暴擊。",
        "k": "extra"
       },
       {
        "t": "步兵弓 > 長按普攻：梟首者快速連續射箭。",
        "k": "extra"
       },
       {
        "t": "『β 強化』重型弩（Heavy Crossbow）：快弓 > 下+普攻：梟首者射出一支定身箭，重新裝填，然後釋放一連串箭矢。",
        "k": "extra"
       },
       {
        "t": "重型弩 > 下+長按普攻：梟首者裝填弩並瞄準，發射一連串箭矢。在正確時機發射箭矢會提升其傷害並造成暴擊。SP:8",
        "k": "extra"
       },
       {
        "t": "快弓 > 下+長按普攻：梟首者維持重型弩架式，在格擋傷害的同時進行蓄力。若他在蓄力時格擋傷害，所有箭矢都將造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』鋼鐵意志（Nerves of Steel）：上+長按普攻：梟首者持續發射貫穿箭。在正確時機發射箭矢會使箭矢造成暴擊。SP:1",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "背包 I α 與 β",
      "effect": "步兵弓：步兵弓現在對被施加 [冰寒]、凍結、定身或 [麻痺] 的敵人造成暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ",
      "effect": "步兵弓：步兵弓現在對處於異常狀態的敵人造成暴擊。"
     },
     {
      "cond": "背包 I α 與 β",
      "effect": "重型弩：重型弩現在會在發射禁錮箭前格擋來襲傷害。"
     },
     {
      "cond": "背包 I α、β 與 γ",
      "effect": "重型弩：暴擊現在造成強化暴擊。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack I Rampart",
    "nameZh": "武器背包 I：壁壘（Rampart）",
    "nodes": [
     {
      "text": "下+普攻：梟首者舉起盾牌，然後向前揮擊。在揮盾期間梟首者擁有無敵幀。成功格擋攻擊會使盾擊造成更多傷害，並同樣賦予其無敵幀。長按普攻可讓梟首者持續格擋，進而降低來襲傷害。",
      "sub": [
       {
        "t": "此潛能強化初始武器。（此潛能是武器背包 I 中所有武器的催化劑。）",
        "k": "builtin"
       },
       {
        "t": "壁壘（Rampart）：下+普攻：梟首者在格擋傷害後的無敵幀持續更久。盾擊現在可以中斷大多數敵人的攻擊。",
        "k": "extra"
       },
       {
        "t": "『α 強化』：具格擋屬性的攻擊現在格擋時間更長並造成更多傷害。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』完全防禦（Total Defense）：下+長按普攻：長按普攻將使梟首者也能格擋來自後方的傷害。",
        "k": "extra"
       },
       {
        "t": "下+普攻 > 長按技能：梟首者在格擋期間持續消耗 MP，並完全免疫傷害。",
        "k": "extra"
       },
       {
        "t": "下+普攻 > 衝刺：梟首者在格擋傷害的同時向前突進。在此突進攻擊期間梟首者擁有閃避幀，同時仍持續格擋來襲傷害。此外，在格擋傷害後按下衝刺會增加梟首者的前移距離。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "背包 I α 與 γ",
      "effect": "以任何武器成功格擋傷害後，除壁壘外的所有武器將在短時間內獲得保證暴擊。"
     },
     {
      "cond": "背包 I α、β 與 γ",
      "effect": "當所有武器的暴擊條件同時滿足時，將觸發強化暴擊。"
     },
     {
      "cond": "技能背包 I：十字弩機（Crossb-o-matic）、背包 II 武器、武器背包 III，與跳躍/衝刺：部分 [空中] 攻擊將維持 [空中]",
      "effect": "切換武器/技能背包 I 現在更快。"
     }
    ]
   },
   {
    "nameEn": "Skill Backpack I",
    "nameZh": "技能背包 I（Skill Backpack I）",
    "nodes": [
     {
      "text": "使用不同技能進行攻擊或防禦。",
      "sub": [
       {
        "t": "步兵手榴彈（Infantry Grenade）：技能：梟首者投擲一枚手榴彈，其引爆後在周圍大範圍造成傷害。MP:50",
        "k": "auto"
       },
       {
        "t": "『α 強化』：步兵手榴彈現在會爆裂成多枚較小的手榴彈。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：增加爆炸的範圍與傷害。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：當爆炸命中敵人時，會施加 [凍結]、[致盲] 與定身。",
        "k": "extra"
       },
       {
        "t": "雙重十字弩機（Double Crossb-o-matic）：上+技能：部署一座十字弩砲塔，攻擊附近的敵人。MP:100",
        "k": "extra"
       },
       {
        "t": "『α 強化』：部署砲塔時會回復 5 SP，且砲塔現在可朝任意方向射擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：砲塔的箭矢現在會貫穿敵人。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：箭矢現在對敵人施加 [冰寒] 與 [撕裂]，然後爆炸。爆炸會對被擊中的敵人施加 [致盲]。",
        "k": "extra"
       },
       {
        "t": "補藥（Tonic）：下+技能：梟首者獲得一個可格擋所有傷害的暫時護盾，但不會阻止他被命中。護盾強度取決於梟首者損失的總生命值。MP:100",
        "k": "extra"
       },
       {
        "t": "『α 強化』：補藥護盾啟動期間，梟首者受到的傷害與造成的傷害都提升。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：補藥護盾啟動期間，梟首者會緩慢回復 HP，且可透過其戰術治療天賦回復。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：當梟首者使用補藥時，會在其周圍產生火焰軌跡與劇毒霧氣，對敵人施加 [燃燒] 與 [中毒]。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "步兵手榴彈 α、β 與 γ",
      "effect": "步兵手榴彈：保證暴擊。"
     },
     {
      "cond": "步兵手榴彈 α、β 與 γ，與武器背包 I α、β 與 γ",
      "effect": "步兵手榴彈：可觸發強化暴擊。"
     },
     {
      "cond": "補藥 α、β 與 γ、武器背包 I α、β 與 γ、武器背包 II、武器背包 III，與通用強化：武器與技能強化",
      "effect": "步兵手榴彈：當梟首者受到詛咒時觸發毀滅性暴擊。"
     },
     {
      "cond": "雙重十字弩機 α、β 與 γ",
      "effect": "雙重十字弩機：箭矢現在可穿透平台。"
     },
     {
      "cond": "補藥 α、β 與 γ，與武器背包 I α、β 與 γ",
      "effect": "詛咒藥水（Cursed Potion）：下+長按技能：梟首者對自己施加詛咒，他將被任何來源的傷害一擊必殺，且不會觸發逃脫死亡。受到詛咒時，狂亂之劍及其衍生的潛能將造成毀滅性暴擊。按下下+技能可移除此詛咒。"
     },
     {
      "cond": "補藥 α、β 與 γ、武器背包 I α、β 與 γ、武器背包 II、武器背包 III，與通用強化：武器與技能強化",
      "effect": "詛咒藥水：受到詛咒時，所有武器攻擊將造成毀滅性暴擊。"
     },
     {
      "cond": "雙重十字弩機、武器背包 II、武器背包 III，與跳躍/衝刺：部分 [空中] 攻擊將不再使梟首者落下",
      "effect": "切換武器/技能背包 I 現在更快。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack II Rapier",
    "nameZh": "武器背包 II：細劍（Rapier）",
    "nodes": [
     {
      "text": "上+動作或長按動作+上，會將梟首者的裝備切換至武器/技能背包 II。按下動作或長按動作+左/右，則切換回武器/技能背包 I。使用長按動作方式時，普攻連擊不會被重置。",
      "sub": [
       {
        "t": "細劍（Rapier）：普攻：梟首者進行 5 段突刺連擊，在衝刺攻擊期間造成暴擊。",
        "k": "auto"
       },
       {
        "t": "『α 強化』：細劍普攻連擊的第 1 段與最後一段視為衝刺攻擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』冥魂斬（Nether Souls Slash）：細劍 > 上+普攻：梟首者進行一道斬擊，發射劍氣投射物。若初始斬擊命中敵人，會生成冥魂，並在劍氣命中敵人時朝其發射。冥魂造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』裂隙細劍（Rift Rapier）：細劍 > 下+普攻：梟首者進行一次突刺斬擊，在其身後留下一道空間裂隙。短暫延遲後，裂隙會造成傷害且永遠造成暴擊。",
        "k": "extra"
       },
       {
        "t": "細劍 > 下+長按普攻：梟首者開始蓄力裂隙細劍，依蓄力時間提升裂隙的傷害與範圍。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：在細劍第 1 段普攻期間長按普攻：梟首者開始蓄力，最終進行一次突進攻擊。傷害與距離依蓄力時間而定。完全蓄力的攻擊將擊破霸體。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：在細劍第 2、3、4 段普攻期間長按普攻：梟首者對細劍普攻連擊的每一部分進行快速連續突刺。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 II、武器背包 I α 與 γ，與通用強化：武器強化",
      "effect": "細劍：細劍將對處於異常狀態的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "細劍：梟首者會在每次蓄力攻擊後發射已收集的冥魂。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "細劍：細劍及其衍生的潛能將對處於異常狀態的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ、武器背包 III，與通用強化：武器強化",
      "effect": "細劍：當連殺數大於 4 時，細劍將造成保證暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ、武器背包 III，與通用強化：武器強化",
      "effect": "細劍：長按普攻將以細劍格擋傷害。"
     },
     {
      "cond": "武器背包 II、武器背包 I β 與 γ，與通用強化：武器強化",
      "effect": "冥魂斬：當衝擊波命中敵人時，會生成更多冥魂而非發射它們。"
     },
     {
      "cond": "武器背包 II、武器背包 I β 與 γ，與通用強化：武器強化",
      "effect": "在細劍及其所有衍生的潛能期間，按下上+長按普攻將釋放一道巨型劍氣，發射所有冥魂。"
     },
     {
      "cond": "武器背包 II、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "冥魂斬：在衝刺時釋放斬擊或劍氣將造成保證暴擊。此外，增加同時存在的冥魂數量上限。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "冥魂斬：進一步增加冥魂的最大數量。"
     },
     {
      "cond": "武器背包 II、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "裂隙細劍：在衝刺期間釋放將造成保證暴擊，並在斬擊的瞬間格擋傷害。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ、武器背包 III，與通用強化：武器強化",
      "effect": "在為裂隙細劍蓄力時進入格擋狀態。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "裂隙細劍：在格擋傷害後觸發強化暴擊。若在蓄力前格擋傷害，仍會造成強化暴擊。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack II Magic Missiles",
    "nameZh": "武器背包 II：魔法飛彈（Magic Missiles）",
    "nodes": [
     {
      "text": "魔法飛彈（Magic Missiles）：上+普攻：梟首者發射 5 枚追蹤其前方敵人的魔法飛彈。",
      "sub": [
       {
        "t": "『α 強化』：魔法飛彈造成更多傷害，並對處於異常狀態的敵人造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』煙火（Pyrotechnics）：魔法飛彈 > 普攻：發射一枚額外的追蹤投射物，命中時爆炸並施加 [燃燒]。",
        "k": "extra"
       },
       {
        "t": "長按普攻會開始為追蹤投射物蓄力，提升其傷害、爆炸半徑與追蹤範圍。",
        "k": "builtin"
       },
       {
        "t": "『β 強化』霜爆（Frost Blast）：魔法飛彈 > 下+普攻：梟首者向前發射一道冰波，對被擊中的敵人施加 [凍結]。",
        "k": "extra"
       },
       {
        "t": "長按普攻會開始為霜爆蓄力，釋放一道冰波投射物。完全蓄力將釋放一道極長的冰雷射。",
        "k": "builtin"
       },
       {
        "t": "『γ 強化』：上+長按普攻：梟首者開始為魔法飛彈蓄力，提升其射程與追蹤距離。完全蓄力將使魔法飛彈鎖定最遠的敵人。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 II、武器背包 I α 與 γ，與通用強化：武器強化",
      "effect": "魔法飛彈：在衝刺期間釋放時造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I γ，與通用強化：武器強化",
      "effect": "魔法飛彈：魔法飛彈現在會貫穿敵人，且追蹤範圍增加。"
     },
     {
      "cond": "武器背包 II、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "煙火：對 [凍結] 的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "煙火：對處於異常狀態的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "霜爆：對 [燃燒] 的敵人造成暴擊。此外，命中凍結的敵人不會移除凍結狀態。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "霜爆：對處於異常狀態的敵人造成暴擊。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack II Broadsword",
    "nameZh": "武器背包 II：大劍（Broadsword）",
    "nodes": [
     {
      "text": "大劍（Broadsword）：下+普攻：梟首者進行四次強力斬擊。這些攻擊期間他擁有霸體。若他擊破敵人霸體，最後兩次斬擊將造成保證暴擊。",
      "sub": [
       {
        "t": "『α 強化』：大劍現在會在攻擊時格擋傷害。此外，它對 [凍結]、定身或 [麻痺] 的敵人造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』火石（Flint）：大劍 > 上+普攻：梟首者猛擊地面，發射一道永遠造成暴擊且能擊破霸體的衝擊波。此外，此攻擊為梟首者提供霸體。",
        "k": "extra"
       },
       {
        "t": "長按普攻會開始為火石蓄力。衝擊波數量隨蓄力時間增加。",
        "k": "builtin"
       },
       {
        "t": "『β 強化』刃鞭（Blade Whip）：大劍 > 普攻：梟首者在身前以大弧度揮舞鞭子，且永遠造成暴擊。",
        "k": "extra"
       },
       {
        "t": "長按普攻會開始為刃鞭蓄力，提升其範圍與傷害。完全蓄力的刃鞭能擊破敵人霸體。",
        "k": "builtin"
       },
       {
        "t": "『γ 強化』：下+長按普攻：梟首者開始為大劍蓄力，提升其攻擊範圍與傷害。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ、武器背包 III，與通用強化：武器強化",
      "effect": "大劍：在大劍造成傷害前，梟首者受到的傷害降低。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "大劍：永遠造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ、武器背包 III、技能背包 II：雙重十字弩機與補藥，與通用強化：武器/技能強化",
      "effect": "大劍：在大劍造成傷害前，梟首者會格擋傷害。"
     },
     {
      "cond": null,
      "effect": "大劍：在長按普攻為大劍蓄力時，於特定時機釋放將以其最大範圍攻擊並永遠造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "火石：梟首者在火石整個持續期間受到的傷害降低。此外，地面猛擊對 [凍結]、定身或 [麻痺] 的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "刃鞭：梟首者在刃鞭整個持續期間擁有霸體。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ、武器背包 III、技能背包 II：雙重十字弩機與補藥，與通用強化：武器/技能強化",
      "effect": "刃鞭：完全蓄力的刃鞭將永遠造成強化暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "當多個武器的暴擊條件同時滿足時，將觸發強化暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 III，與技能背包 I：雙重十字弩機，及跳躍/衝刺：部分 [空中] 攻擊將不再使梟首者落下",
      "effect": "切換武器/技能背包 II 更快。"
     }
    ]
   },
   {
    "nameEn": "Skill Backpack II",
    "nameZh": "技能背包 II（Skill Backpack II）",
    "nodes": [
     {
      "text": "上+動作或長按動作+上，會將梟首者的裝備切換至武器/技能背包 II。按下動作或長按動作+左/右，則切換回武器/技能背包 I。使用長按動作方式時，普攻連擊不會被重置。",
      "sub": [
       {
        "t": "小夜曲（Serenade）：技能：召喚小夜曲，它會跟隨梟首者並持續消耗其 MP。再次按下技能會使梟首者持握小夜曲。長按技能可解散小夜曲。當小夜曲飛行時，會自動命中敵人並對其施加標記 A。當小夜曲在持握狀態造成傷害時，會施加標記 B。當小夜曲造成的傷害施加了敵人身上相反的標記時，將造成暴擊。MP:15",
        "k": "auto"
       },
       {
        "t": "『α 強化』：小夜曲不再持續消耗 MP，但啟動期間 MP 也不再自然回復。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：啟動小夜曲時，若不存在使魔，將召喚一隻。使魔會持續攻擊最近的敵人並施加標記 A。此外，使魔對被施加標記 B 的敵人造成暴擊。若小夜曲被持握，使魔攻擊更快。使魔若被攻擊或小夜曲被解散則消失。MP:35",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：梟首者在擊殺數名敵人後最多可獲得 3 階段強化。第 1 階段：傷害提升，攻擊可擊破霸體。第 2 階段：傷害進一步提升，攻擊範圍也增加。第 3 階段：傷害提升至最大，且每次攻擊都會釋放劍氣。",
        "k": "extra"
       },
       {
        "t": "烏鴉之翼（Wings of the Crow）：上+技能：梟首者召喚一朵雷雲並以其漂浮。雷雲會持續電擊其下方的敵人，對其施加 [雷電]。此招式會持續消耗 MP 直到釋放或經過 15 秒。MP:50",
        "k": "extra"
       },
       {
        "t": "『α 強化』：雷雲不再有持續時間限制，梟首者在漂浮期間可自由移動。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：啟動雷雲會在其下方生成一股旋風，將敵人拉入電擊之中。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：當敵人被雷電命中 10 次後，觸發一道脈衝，對被其命中的敵人施加 [麻痺]。",
        "k": "extra"
       },
       {
        "t": "狼陷阱（Wolf Trap）：下+技能：梟首者投擲一個狼陷阱，將敵人定身數秒。MP:50",
        "k": "extra"
       },
       {
        "t": "『α 強化』：梟首者現在一次投擲 3 個狼陷阱。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：當狼陷阱消失時會引爆，發射碎片 [凍結] 被其擊中的敵人。此外，留在地面上的碎片會對行走其上的敵人施加 [冰寒] 與 [撕裂]。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：狼陷阱會週期性地向周圍釋放電擊，造成傷害並對附近敵人施加 [雷電]。被定身的敵人則改為 [麻痺]。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 I α、β 與 γ、武器背包 II、技能背包 I：步兵手榴彈 α、β 與 γ，與通用強化：技能強化",
      "effect": "小夜曲：小夜曲將永遠造成暴擊，且現在能夠造成強化暴擊。"
     },
     {
      "cond": "武器背包 I α、β 與 γ、武器背包 II、武器背包 III、技能背包 I：補藥 α、β 與 γ，與通用強化：普攻/技能強化",
      "effect": "小夜曲：受到詛咒時將造成毀滅性暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 III、技能背包 I：雙重十字弩機，及跳躍/衝刺：部分 [空中] 攻擊將不再使梟首者落下",
      "effect": "切換武器/技能背包 II 更快。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack III Vorpan",
    "nameZh": "武器背包 III：平底鍋（Vorpan）",
    "nodes": [
     {
      "text": "下+動作或長按動作+下，會將梟首者的裝備切換至武器/技能背包 II。按下動作或長按動作+左/右，則切換回武器/技能背包 I。使用長按動作方式時，普攻連擊不會被重置。",
      "sub": [
       {
        "t": "鐵鍋（Vorpan）：普攻：梟首者以平底鍋快速攻擊敵人最多 10 次。這對面向梟首者的敵人造成暴擊。",
        "k": "auto"
       },
       {
        "t": "『α 強化』：梟首者在鐵鍋普攻連擊的特定階段獲得閃避幀。",
        "k": "extra"
       },
       {
        "t": "『α 強化』：鐵鍋的攻擊現在永遠造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』閃耀之扇（Flashing Fans）：鐵鍋 > 上+普攻：梟首者切換為一對扇子，產生可反射投射物的旋風。若反射了投射物，將造成暴擊。",
        "k": "extra"
       },
       {
        "t": "長按普攻會持續產生旋風，這些旋風會逐漸合併並擴張。",
        "k": "builtin"
       },
       {
        "t": "『β 強化』鐵棍（Iron Staff）：鐵鍋 > 下+普攻：梟首者切換為棍並可進行連擊。梟首者在整套連擊期間擁有霸體，在攻擊起手期間格擋傷害，若格擋到傷害則造成暴擊。",
        "k": "extra"
       },
       {
        "t": "持續按住下+長按普攻可進行棍的連續突刺。按下左/右可讓梟首者在攻擊時移動。梟首者在此攻擊期間會格擋傷害，若格擋到傷害則進行反擊，並造成暴擊。",
        "k": "builtin"
       },
       {
        "t": "『γ 強化』雙鍋棍（Panchaku）：鐵鍋 > 長按普攻：梟首者切換為雙鍋棍，即如雙節棍般揮舞的兩口平底鍋。只要按住普攻，梟首者就會持續揮舞，期間他會格擋傷害並進行反擊，造成暴擊。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "鐵鍋：反擊造成強化暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "鐵鍋：格擋傷害後，梟首者可以立即執行長按普攻或下+長按普攻的後續。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II，與通用強化：武器強化",
      "effect": "鐵鍋：格擋傷害時現在造成強化暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "閃耀之扇：命中被施加 [撕裂] 與 [雷電] 的敵人時造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "閃耀之扇：閃耀之扇現在會對敵人施加 [撕裂]。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "鐵棍：現在可對面向梟首者的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "鐵棍：使用鐵棍時，梟首者受到的來自其前方攻擊的傷害降低。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "鐵棍：下+長按普攻 > 長按普攻將立即執行鐵鍋的反擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "鐵棍：下+長按普攻 > 下+長按普攻將立即執行鐵棍的反擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "鐵棍：鐵棍反擊 > 繼續按住下+普攻將執行一次可格擋來自全方向傷害的俯衝攻擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II，與通用強化：武器強化",
      "effect": "鐵棍：格擋傷害後，梟首者可以立即執行長按普攻或下+長按普攻的後續。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 γ，與通用強化：武器強化",
      "effect": "雙鍋棍：雙鍋棍 > 普攻將立即執行反擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "雙鍋棍：雙鍋棍 > 下+普攻將執行鐵棍的反擊。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack III Electric Whip",
    "nameZh": "武器背包 III：電鞭（Electric Whip）",
    "nodes": [
     {
      "text": "電鞭（Electric Whip）：上+普攻：梟首者釋放一條長電鞭，追蹤並打擊其範圍內最遠的敵人，造成 5 段連擊。電鞭對被擊中的敵人施加 [雷電]。",
      "sub": [
       {
        "t": "『α 強化』：命中被施加 [雷電] 的敵人時造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『α 強化』：對面向遠離梟首者的敵人造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』絞擰之鞭（Wrenching Whip）：電鞭 > 普攻：梟首者以絞擰之鞭抓住最遠的敵人，將其拉近。若在絞擰之鞭的最大範圍抓住敵人，將造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』破壞球（Wrecking Ball）：電鞭 > 下+普攻：梟首者切換為破壞球連枷。梟首者在此攻擊期間擁有霸體，且能擊破敵人霸體。破壞球永遠造成暴擊。",
        "k": "extra"
       },
       {
        "t": "使用電鞭或其衍生的潛能時，按住下+普攻會使破壞球持續繞著梟首者揮舞。揮舞連枷期間梟首者受到的傷害降低。",
        "k": "builtin"
       },
       {
        "t": "『γ 強化』閃電箭（Lightning Bolt）：電鞭 > 長按普攻：長按普攻會使電鞭放電。在持續放電後，將開始造成暴擊。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "絞擰之鞭：對面向梟首者的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "絞擰之鞭：梟首者在絞擰之鞭期間受到的傷害降低。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "絞擰之鞭：對處於異常狀態的敵人造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "破壞球：梟首者在破壞球期間受到的來自其前方傷害降低。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "破壞球：當破壞球繞著梟首者揮舞時，他可格擋來自任意方向的傷害。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II、技能背包 I：雙重十字弩機與補藥，與通用強化：武器強化",
      "effect": "破壞球：現在會在攻擊出現前格擋傷害。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II，與通用強化：武器強化",
      "effect": "破壞球：現在造成強化暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 γ，與通用強化：武器強化",
      "effect": "閃電箭：反覆命中被施加 [雷電] 的敵人將釋放一道 [脈衝]，接著使敵人 [麻痺]。"
     }
    ]
   },
   {
    "nameEn": "Weapon Backpack III Symmetrical Lance",
    "nameZh": "武器背包 III：對稱長槍（Symmetrical Lance）",
    "nodes": [
     {
      "text": "對稱長槍（Symmetrical Lance）：下+普攻：梟首者進行範圍極大的 3 段連擊，並賦予他霸體。只要連殺數大於或等於 2，對稱長槍就會造成暴擊。",
      "sub": [
       {
        "t": "『α 強化』：揮舞對稱長槍時，梟首者受到的傷害降低，且當連擊數大於或等於 5 時可造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『β 強化』戰矛（War Javelin）：對稱長槍 > 上+普攻：梟首者切換為戰矛，向前投擲。若戰矛命中敵人，他將傳送至該敵人身邊。",
        "k": "extra"
       },
       {
        "t": "按住普攻則改為：一旦放開普攻，梟首者就立即傳送至戰矛處，無論是否命中敵人。",
        "k": "builtin"
       },
       {
        "t": "『β 強化』戰爭長矛（War Spear）：對稱長槍 > 普攻：梟首者切換為戰爭長矛，進行突刺攻擊。若同時命中多個敵人，將造成暴擊。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』猛槍衝鋒（Fierce Lance Charge）：對稱長槍第 2 段命中 > 長按普攻：梟首者開始為對稱長槍連擊的第 3 段蓄力。放開普攻會使他向前突刺，擊破敵人霸體並永遠造成暴擊。蓄力多個階段將提升最大傷害。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II，與通用強化：武器強化",
      "effect": "對稱長槍：現在保證造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II、技能背包 I：雙重十字弩機與補藥，與通用強化：武器/技能強化",
      "effect": "對稱長槍：現在會在攻擊開始前格擋傷害。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II，與通用強化：武器強化",
      "effect": "對稱長槍：梟首者在使用猛槍衝鋒時受到的傷害更少。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "對稱長槍：將猛槍衝鋒蓄力至第三階段將使其造成強化暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 γ，與通用強化：武器強化",
      "effect": "對稱長槍：在為猛槍衝鋒蓄力時，於正確時機釋放將立即釋放完全蓄力版本。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "戰矛：現在在其整個持續期間擁有霸體。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "戰爭長矛：當連殺數為 2 或以上時造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "戰爭長矛：當連擊數為 5 或以上時造成暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "戰爭長矛：現在能擊破敵人霸體。"
     },
     {
      "cond": "武器背包 III、武器背包 I α 與 β，與通用強化：武器強化",
      "effect": "戰爭長矛：「攻擊在整個持續期間處於霸體狀態。」"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ、武器背包 II，與通用強化：武器強化",
      "effect": "戰爭長矛：「在整個攻擊期間，你處於防禦狀態。」（原文以不同措辭重複列出，91Act 語意模糊。）"
     },
     {
      "cond": "武器背包 III、武器背包 I β 與 γ，與通用強化：武器強化",
      "effect": "在對稱長槍第 1 或第 2 段命中期間按住普攻，將轉為奔跑長矛衝鋒；此時按下下+長按普攻將進入猛槍衝鋒。"
     },
     {
      "cond": "武器背包 III、武器背包 I α、β 與 γ，與通用強化：武器強化",
      "effect": "當多個武器的暴擊條件同時滿足時，將觸發強化暴擊。"
     },
     {
      "cond": "武器背包 III、武器背包 II、技能背包 I：雙重十字弩機，及跳躍/衝刺：部分 [空中] 攻擊將不再使梟首者落下",
      "effect": "切換武器/技能背包 III 更快。"
     }
    ]
   },
   {
    "nameEn": "Skill Backpack III",
    "nameZh": "技能背包 III（Skill Backpack III）",
    "nodes": [
     {
      "text": "下+動作或長按動作+下，會將梟首者的裝備切換至武器/技能背包 II。按下動作或長按動作+左/右，則切換回武器/技能背包 I。使用長按動作方式時，普攻連擊不會被重置。",
      "sub": [
       {
        "t": "收藏家注射器（Collector's Syringe）：技能：梟首者開始以注射器旋轉，在旋轉期間獲得霸體。在旋轉期間再次按下技能，將消耗本次心靈訓練中累積的 AP，以提升其傷害與持續時間。＊AP 僅能在心靈訓練期間消耗，無法在心靈挑戰或心靈試煉中使用。MP:200",
        "k": "auto"
       },
       {
        "t": "『α 強化』：旋轉現在能擊破敵人霸體，並對敵人施加 [撕裂]。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：提升旋轉的攻擊範圍，並現在對敵人施加 [中毒]。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：旋轉不再會被強力攻擊中斷。",
        "k": "extra"
       },
       {
        "t": "相位轉移（Phaser）：上+技能：梟首者傳送至最近的敵人身後，將其定身。MP:10",
        "k": "extra"
       },
       {
        "t": "『α 強化』：現在在攻擊的開始與結束時造成傷害。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：相位轉移 > 長按技能 > 放開技能：傳送後，再次按住並放開技能會將梟首者傳送回起始位置。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：梟首者在相位轉移期間擁有無敵閃避幀。",
        "k": "extra"
       },
       {
        "t": "繭（Cocoon）：下+技能：梟首者進入格擋架式。若成功格擋傷害，將退還所消耗的 MP。MP:100",
        "k": "extra"
       },
       {
        "t": "『α 強化』：成功格擋傷害後，梟首者會釋放一道大範圍閃光，使敵人 [致盲]。",
        "k": "extra"
       },
       {
        "t": "『β 強化』：延長梟首者能以繭格擋的時間。",
        "k": "extra"
       },
       {
        "t": "『γ 強化』：成功格擋後，梟首者獲得暫時無敵。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 I α、β 與 γ、武器背包 II、武器背包 III、技能背包 I：補藥 α、β 與 γ，與通用強化：武器/技能強化",
      "effect": "收藏家注射器：受到詛咒時現在造成毀滅性暴擊。"
     },
     {
      "cond": "武器背包 III、技能背包 I：步兵手榴彈 α、β 與 γ，與通用強化：技能強化",
      "effect": "收藏家注射器：現在強化所需的 AP 消耗降低。"
     },
     {
      "cond": "武器背包 III、技能背包 I：雙重十字弩機 α、β 與 γ，與通用強化：武器強化",
      "effect": "相位轉移：被相位轉移傷害的敵人暫時受到更多傷害。"
     },
     {
      "cond": "武器背包 I α、武器背包 III，與技能背包 I：補藥",
      "effect": "繭：成功格擋將反射傷害。"
     },
     {
      "cond": "武器背包 I α 與 γ、武器背包 III，與技能背包 I：補藥",
      "effect": "繭：成功格擋後，除壁壘外的所有武器將在短時間內造成暴擊。"
     },
     {
      "cond": "武器背包 I α 與 γ、武器背包 III、技能背包 I：補藥 γ，與通用強化：技能強化",
      "effect": "繭：成功格擋後，除壁壘外的所有武器將在長時間內造成暴擊。"
     },
     {
      "cond": "武器背包 I α、β 與 γ、武器背包 III，與技能背包 I：補藥",
      "effect": "繭：成功格擋後，除壁壘外的所有武器將在該持續時間內造成強化暴擊。"
     },
     {
      "cond": "武器背包 II、武器背包 III、技能背包 I：雙重十字弩機，及跳躍/衝刺：部分 [空中] 攻擊將不再使梟首者落下",
      "effect": "切換武器/技能背包 III 現在更快。"
     }
    ]
   },
   {
    "nameEn": "Jump and Dash",
    "nameZh": "跳躍與衝刺",
    "nodes": [
     {
      "text": "跳躍：預設為兩段跳。衝刺：梟首者向前翻滾。衝刺擁有閃避幀。",
      "sub": [
       {
        "t": "[空中] 下+跳躍：梟首者急速下墜至地面，造成地面衝擊。以普攻或技能中斷下墜會維持下墜速度與衝擊。",
        "k": "extra"
       },
       {
        "t": "梟首者現在可以跳躍 4 次。",
        "k": "builtin"
       },
       {
        "t": "梟首者現在可以三段衝刺。",
        "k": "builtin"
       },
       {
        "t": "部分武器的 [空中] 攻擊將不再使梟首者落至地面。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "武器背包 I：強化初始武器、武器背包 II、技能背包 I：雙重十字弩機與補藥，及跳躍/衝刺：部分 [空中] 攻擊將不再使梟首者落下",
      "effect": "跳躍/衝刺：當小夜曲或補藥處於啟動狀態時，梟首者的衝刺動作會改變，且衝刺距離更遠。"
     }
    ]
   },
   {
    "nameEn": "Mutations",
    "nameZh": "突變（Mutations）",
    "nodes": [
     {
      "text": "賦予各種效果。",
      "sub": [
       {
        "t": "野蠻（Brutality）。專注於透過侵略性行動進行治療的突變。",
        "k": "builtin"
       },
       {
        "t": "殺手本能（Killer Instinct）：擊殺一名敵人後回復少量 MP。",
        "k": "builtin"
       },
       {
        "t": "狂亂（Frenzy）：當目前連擊數為 30 或以上且連殺數為 10 或以上時，透過梟首者戰術治療天賦可回復的 HP 增加。",
        "k": "builtin"
       },
       {
        "t": "腎上腺素（Adrenaline）：成功閃避傷害後，所有損失的 HP 將可透過戰術治療天賦回復。",
        "k": "builtin"
       },
       {
        "t": "戰術（Tactics）。專注於提升所有攻擊傷害的突變。",
        "k": "builtin"
       },
       {
        "t": "倒鉤箭頭（Barbed Tips）：依敵人身上嵌入的箭矢數量，提升其受到的傷害。",
        "k": "builtin"
       },
       {
        "t": "撕裂者（Ripper）：近戰攻擊會使嵌在敵人身上的箭矢掉落，每支箭矢落地時造成傷害。",
        "k": "builtin"
       },
       {
        "t": "網路連結（Networking）：對嵌有箭矢的敵人造成傷害時，若附近有其他同樣嵌有箭矢的敵人，將依嵌箭數量同樣對其造成傷害。",
        "k": "builtin"
       },
       {
        "t": "生存（Survival）：專注於降低或防止來襲傷害的突變。",
        "k": "builtin"
       },
       {
        "t": "盲目信仰（Blind Faith）：成功格擋傷害後，回復少量 HP 與 MP。",
        "k": "builtin"
       },
       {
        "t": "殺戮節奏（Kill Rhythm）：切換武器類型會獲得暫時的傷害增益。",
        "k": "builtin"
       },
       {
        "t": "犰狳背包（Armadillopack）：梟首者現在衝刺時可格擋傷害。然而此格擋形式無法格擋無視 [閃避幀] 的攻擊。此外，以此方式格擋傷害的加成較弱。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "野蠻：殺手本能、狂亂與腎上腺素",
      "effect": "野蠻：梟首者在造成暴擊時回復 MP，並略微提升透過戰術治療可回復的 HP 總量。"
     },
     {
      "cond": "戰術：倒鉤箭頭、撕裂者與網路連結",
      "effect": "戰術：大幅提升撕裂者造成的傷害。此外，網路連結將傳遞撕裂者造成的所有傷害。"
     },
     {
      "cond": "生存：盲目信仰、殺戮節奏與犰狳背包",
      "effect": "生存：切換武器類型會提升透過戰術治療可回復的 HP 總量。"
     },
     {
      "cond": "生存：盲目信仰、殺戮節奏與犰狳背包，與武器背包 I α、β 與 γ",
      "effect": "犰狳背包：過去無視閃避幀的攻擊，現在可在閃避時被格擋。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancements",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化影響多個招式。",
      "sub": [
       {
        "t": "使用弓或弩類武器會消耗 SP，使箭矢留置於其命中處。嵌在敵人身上的箭矢會在敵人被擊敗後回收。",
        "k": "builtin"
       },
       {
        "t": "SP：透過回收箭矢獲得 SP。",
        "k": "builtin"
       },
       {
        "t": "當梟首者擁有對應的戰術時，武器所施加的減益傷害提升。此外，擁有這些戰術將使這些減益能觸發進一步的戰術減益。",
        "k": "builtin"
       },
       {
        "t": "當連擊數為 30 或以上且連殺數為 10 或以上時，移動速度提升。",
        "k": "builtin"
       },
       {
        "t": "在 [空中] 靠近牆壁時，朝牆壁按住方向可使梟首者攀牆，此舉視為落地。",
        "k": "builtin"
       },
       {
        "t": "在執行衝刺或跳躍時按住對應按鍵，可防止普攻連擊數重置，讓梟首者能自由在不同武器連擊間轉換。",
        "k": "builtin"
       },
       {
        "t": "各種武器強化在切換背包後也會影響通用普攻招式。",
        "k": "builtin"
       },
       {
        "t": "各種技能強化在切換背包後也會影響通用技能招式。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ]
   }
  ],
  "nodeCount": 139,
  "branchCount": 15
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
  "hasData": false,
  "sourceIds": [],
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
  "hasData": true,
  "sourceIds": [
   "prototype-bullet"
  ],
  "confidence": "community",
  "recommendationProvenance": {
   "sourceIds": [
    "legacy-catalogue"
   ],
   "confidence": "unverified"
  },
  "nameEn": "Bullet",
  "baseHp": 1390,
  "baseAtk": 162,
  "potentialCount": "32 潛能（+640%）",
  "overview": "芭烈特是《蒼翼混沌效應》的第三位 DLC 角色，也是典型的貼身投技型角色。她擁有大量強力抓技，能將敵人猛砸地面並產生爆炸，幾乎沒有敵人能逃脫她的擒抱；其抓技還可強化以釋放更多爆炸，即使面對無法被抓取的敵人也仍有可觀傷害。她同時具備優秀的追擊、召喚投擲物與熱機增益，是壓制力極強的近戰角色。",
  "talent": {
   "nameEn": "Heat-Up",
   "nameZh": "熱機（Heat-Up）",
   "desc": "成功投擲後，傷害提升 30%，持續 5 秒。此被動的主要缺點在於你必須能投擲敵人；由於多數原型沒有抓技潛能，且多數 Boss 在被擊暈前無法被抓取，繼承此被動時較難充分發揮。"
  },
  "uniqueMechanic": {
   "nameZh": "抓取、投擲物與熱機（Grabs, Throwables & Heated Up）",
   "desc": "抓取雖非芭烈特專屬，但她幾乎整套招式都圍繞抓取運作。抓取專精於對付霸體、格擋中的敵人，或芭烈特附近的任何目標；然而對無法被抓取的敵人（如扎根型敵人與多數 Boss）則明顯較弱，Boss 在攻擊期間無法被抓取，必須在攻擊間隙抓取。使用後燃器、十字火輪或全能交戰後會召喚可投擲的沙包或熔岩，這些投擲物可被抓住、攻擊並觸發特定戰術，使原本僅對成群敵人生效的戰術也能用於 Boss。熱機（Heated Up）是強化下一次「追擊」攻擊的特殊狀態，可透過後燃器、鎖定或摧毀投擲物進入；此狀態下的火焰攻擊可施加可疊加的燃燒。"
  },
  "legacySkills": [
   {
    "nameEn": "Hollow-Point Engage",
    "nameZh": "空尖突進（Hollow-Point Engage）",
    "desc": "迅速猛砸地面，破壞地面並在衝擊區域周圍造成 778 點傷害。產生可被抓取的投擲物。傷害與範圍隨等級提升。傷害尚可，但所召喚的投擲物僅有少數原型能使用，較難與第二個傳承技競爭。"
   },
   {
    "nameEn": "After Burner",
    "nameZh": "後燃器（After Burner）",
    "desc": "進入熱機狀態數秒，使造成的所有傷害提升 12%。具擊退效果的攻擊在命中敵人時會造成額外爆炸傷害。傷害提升幅度隨等級提升。由於是無條件的 12% 增傷且對所有原型皆有效，此傳承技更為實用，隨等級提升價值更高。"
   }
  ],
  "branches": [
   {
    "nameEn": "Attack",
    "nameZh": "普攻",
    "nodes": [
     {
      "text": "普攻：4 段連擊，以短暫的爆炸收尾。",
      "sub": [
       {
        "t": "上+普攻：一記升膝，擁有少量無敵幀。",
        "k": "extra"
       },
       {
        "t": "鋒銳斬（Cutting Sheer）：為上+普攻增加一段後續攻擊，使其延伸更遠，並擁有更多無敵幀。",
        "k": "extra"
       },
       {
        "t": "[地面] 下+普攻：芭烈特進行一次旋轉低踢，向前移動並命中 3 次。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "普攻：上+普攻與 [地面] 下+普攻",
      "effect": "在下+普攻任一段命中時按下上+普攻，會使芭烈特進行強化版上+普攻。"
     },
     {
      "cond": "普攻：[地面] 下+普攻，與貫穿突進：長按普攻 > 技能",
      "effect": "在 [地面] 下+普攻第 3 段期間按下技能，會使芭烈特進行觸發爆炸的追擊攻擊。"
     },
     {
      "cond": "普攻：[地面] 下+普攻、貫穿突進：長按普攻 > 技能，與通用強化：抓取多個敵人",
      "effect": "擴張突進（Expand Engage）：可抓取多個敵人，且爆炸範圍增加。"
     },
     {
      "cond": "普攻：[地面] 下+普攻、貫穿突進：長按普攻 > 技能，與爆破彈匣：霰彈突進",
      "effect": "擴張突進：爆炸強化為連鎖爆炸。"
     },
     {
      "cond": "普攻：上+普攻與跳躍：重置 [空中] 攻擊次數上限",
      "effect": "擴張突進：跳躍會重置上+普攻的 [空中] 攻擊次數上限。"
     }
    ]
   },
   {
    "nameEn": "Piercing Engage",
    "nameZh": "貫穿突進（Piercing Engage）",
    "nodes": [
     {
      "text": "長按普攻：芭烈特向前發射一記近距離手甲爆裂。",
      "sub": [
       {
        "t": "貫穿突進現在可以蓄力，依蓄力時間提升其範圍與傷害。",
        "k": "builtin"
       },
       {
        "t": "長按普攻 > 技能：在貫穿突進蓄力時按下技能，會將敵人拉向芭烈特並引發爆炸。",
        "k": "extra"
       },
       {
        "t": "火石發射器（Flint Shooter）：[地面] 下+長按普攻：向前發射一枚貼地移動的投射物。",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "貫穿突進：可蓄力 + 火石發射器",
      "effect": "蓄力後的貫穿突進現在會向前發射一顆子彈，接觸敵人時爆炸。"
     },
     {
      "cond": "貫穿突進：可蓄力 + 火石發射器",
      "effect": "貫穿突進可進一步蓄力以發射一枚額外投射物，同時提升其傷害。"
     },
     {
      "cond": "貫穿突進：長按普攻 > 技能 + 火石發射器",
      "effect": "在火石發射器蓄力時按下技能，會將敵人拉近並引發爆炸。"
     }
    ]
   },
   {
    "nameEn": "Cannon Vent Slam",
    "nameZh": "加農排氣猛擊（Cannon Vent Slam）",
    "nodes": [
     {
      "text": "技能：芭烈特抓住身前的一名敵人，並朝她面對的方向將其投擲出去。被投擲的敵人會對沿途的其他敵人造成傷害。MP:50",
      "sub": [
       {
        "t": "飛鏢突進（Flechette Engage）／黑幕（Blackout）：在空中成功抓取一名敵人後，再次按下技能會使芭烈特進行追擊攻擊。MP:25",
        "k": "extra"
       },
       {
        "t": "引爆突襲（Detonation Raid）：長按技能：芭烈特抓住身前的一名敵人。抓住後，她進行一次旋轉攻擊，對沿途敵人造成傷害。按下左或右可讓芭烈特在旋轉攻擊期間移動。",
        "k": "extra"
       },
       {
        "t": "提升被投擲敵人撞擊牆壁或地面時的爆炸傷害。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "加農排氣猛擊：提升爆炸傷害，與瞬抓手拳",
      "effect": "以加農排氣猛擊將敵人砸向牆壁時會濺射碎片，對敵人造成傷害。"
     },
     {
      "cond": "加農排氣猛擊：引爆突襲，與爆破彈匣",
      "effect": "引爆突襲的第一次地面猛擊會產生一連串向前移動的爆炸。"
     },
     {
      "cond": "加農排氣猛擊：引爆突襲，與硬殺之使：控制方向",
      "effect": "在引爆突襲期間持續按住技能會增加芭烈特進行地面猛擊的次數。"
     },
     {
      "cond": "加農排氣猛擊：飛鏢突進／黑幕，與硬殺之使：控制方向",
      "effect": "按下技能會使芭烈特進行一次額外的追擊攻擊。"
     },
     {
      "cond": "加農排氣猛擊：飛鏢突進／黑幕，與後燃器",
      "effect": "處於熱機狀態時，芭烈特的追擊攻擊會造成多次命中傷害。"
     }
    ]
   },
   {
    "nameEn": "Jump",
    "nameZh": "跳躍",
    "nodes": [
     {
      "text": "跳躍：預設為兩段跳。",
      "sub": [
       {
        "t": "[空中] 普攻：芭烈特進行 2 段踢擊連擊。",
        "k": "auto"
       },
       {
        "t": "[空中] 下+普攻：芭烈特進行一次快速的俯衝下墜。",
        "k": "auto"
       },
       {
        "t": "十字火輪（Cross Firewheel）：[空中] 長按下+普攻：芭烈特進行一次急速下降的腳跟落。",
        "k": "extra"
       },
       {
        "t": "在 [空中] 時，芭烈特可以跳躍來重置其 [空中] 普攻的攻擊次數上限。",
        "k": "builtin"
       },
       {
        "t": "芭烈特現在可以三段跳。當她被擊中時，可以立即跳躍恢復，並獲得 1 秒無敵。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：十字火輪，與爆破彈匣：霰彈突進",
      "effect": "十字火輪落地時現在擁有無敵幀。在十字火輪後按下下+技能，會觸發霰彈突進作為追擊攻擊。"
     },
     {
      "cond": "跳躍：十字火輪，與通用強化：產生投擲物",
      "effect": "十字火輪命中地面時會產生一個投擲物。"
     },
     {
      "cond": "衝刺：三段衝刺",
      "effect": "芭烈特在使用 [空中] 下+普攻時擁有閃避幀。"
     },
     {
      "cond": "跳躍：十字火輪，與衝刺：三段衝刺",
      "effect": "十字火輪在俯衝時擁有閃避幀。"
     }
    ]
   },
   {
    "nameEn": "Dash",
    "nameZh": "衝刺",
    "nodes": [
     {
      "text": "衝刺：芭烈特向前衝刺。衝刺擁有閃避幀。",
      "sub": [
       {
        "t": "衝刺 > 普攻：芭烈特向前躍起，以雙拳進行一次過頂猛砸。",
        "k": "auto"
       },
       {
        "t": "米凱萊特擒抱（Miquelet Capture）：衝刺 > 右+技能：芭烈特向前衝刺並抓住一名敵人。抓住敵人後，她躍起並斜向向上投擲，對沿途敵人造成傷害。MP:50",
        "k": "extra"
       },
       {
        "t": "蛇形突擊（Serpentine Assault）：下+衝刺：芭烈特躍起並向前滑行，期間擁有閃避幀。",
        "k": "extra"
       },
       {
        "t": "芭烈特現在可以三段衝刺。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：重置 [空中] 攻擊次數上限，與衝刺：三段衝刺",
      "effect": "在 [空中] 時，芭烈特可以衝刺來重置其 [空中] 普攻的攻擊次數上限。"
     },
     {
      "cond": "衝刺：米凱萊特擒抱，與瞬抓手拳",
      "effect": "以米凱萊特擒抱將敵人擲向天花板時會將碎片散落至地面，對敵人造成傷害。"
     },
     {
      "cond": "衝刺：米凱萊特擒抱，與加農排氣猛擊：追擊攻擊",
      "effect": "在米凱萊特擒抱後按下技能會觸發追擊攻擊，重新抓住敵人並將其砸向地面。"
     },
     {
      "cond": "衝刺：米凱萊特擒抱、加農排氣猛擊：追擊攻擊、爆破彈匣",
      "effect": "碎片突進（Fragment Engage）：將敵人砸向地面的衝擊會在兩側產生連鎖反應的爆炸。"
     },
     {
      "cond": "衝刺：米凱萊特擒抱，與加農排氣猛擊：引爆突襲",
      "effect": "全能交戰（Full Metal Engage）：衝刺 > 前/後+長按技能：芭烈特抓住一名敵人，改為與其一同躍起，將其砸向地面造成巨大傷害。"
     },
     {
      "cond": "衝刺：米凱萊特擒抱、加農排氣猛擊：引爆突襲，與通用強化：產生投擲物",
      "effect": "全能交戰現在在將敵人砸向地面時產生一個投擲物。"
     },
     {
      "cond": "衝刺：蛇形突擊，與普攻：[地面] 下+普攻與上+普攻",
      "effect": "在以蛇形突擊滑行期間，按下上+普攻會使芭烈特進行強化版膝擊。"
     },
     {
      "cond": "衝刺：蛇形突擊，與鎖定",
      "effect": "當蛇形突擊命中敵人時，芭烈特暫時免疫陷阱。"
     },
     {
      "cond": "衝刺：米凱萊特擒抱、加農排氣猛擊：飛鏢／黑幕，與後燃器",
      "effect": "處於熱機狀態時，以碎片突進將敵人砸向地面會引起震顫，對地面上的敵人造成額外傷害。"
     }
    ]
   },
   {
    "nameEn": "Snap Hands Fist",
    "nameZh": "瞬抓手拳（Snap Hands Fist）",
    "nodes": [
     {
      "text": "上+技能：芭烈特躍起並抓住身前的一名敵人。抓住敵人後，她會轉身並斜向向上投擲，對沿途敵人造成傷害。若被投擲的敵人撞擊天花板，碎片會向下散落，對被擊中的敵人造成傷害。MP:50",
      "sub": [
       {
        "t": "芭烈特現在在瞬抓手拳的起手期間擁有無敵幀。",
        "k": "builtin"
       },
       {
        "t": "飛鏢突進（Flechette Engage）：瞬抓手拳 > 上+技能：成功投擲敵人後，再次按下上+技能會使芭烈特進行追擊攻擊，躍起並重新抓住敵人，然後將其砸向地面。MP:25",
        "k": "extra"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "瞬抓手拳：無敵幀與普攻：上+普攻",
      "effect": "所有投擲技能在成功抓住敵人時獲得無敵幀。"
     },
     {
      "cond": "瞬抓手拳：無敵幀、普攻：上+普攻，與鋒銳斬",
      "effect": "所有投擲技能在其整個持續期間獲得無敵幀。"
     },
     {
      "cond": "瞬抓手拳：追擊攻擊，與後燃器",
      "effect": "處於熱機狀態時，瞬抓手拳的追擊攻擊在將敵人砸向地面時會產生可投擲的岩石。"
     }
    ]
   },
   {
    "nameEn": "Blast Cartridge",
    "nameZh": "爆破彈匣（Blast Cartridge）",
    "nodes": [
     {
      "text": "[空中] 下+技能：芭烈特急速下降並抓住一名敵人，將其砸向地面。衝擊會產生一連串爆炸。MP:50",
      "sub": [
       {
        "t": "霰彈突進（Shot Shell Engage）：爆破彈匣 > 下+技能：在被投擲的敵人撞擊地面後按下下+技能，會使芭烈特進行追擊攻擊，將其拖過地面，然後以數次爆炸將其炸飛。",
        "k": "extra"
       },
       {
        "t": "爆炸的連鎖反應持續更久，且可以延伸至牆面。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "爆破彈匣：霰彈突進 + 增強的連鎖反應",
      "effect": "增加連鎖反應中觸發的爆炸數量。"
     },
     {
      "cond": "爆破彈匣：霰彈突進，與硬殺之使：控制方向",
      "effect": "按下左/右可控制霰彈突進中敵人被拖曳的方向。"
     },
     {
      "cond": "爆破彈匣：霰彈突進，與後燃器",
      "effect": "爆炸的連鎖反應更密集、更大，同時使最終攻擊規模更大。"
     }
    ]
   },
   {
    "nameEn": "Hard Kill Bringer",
    "nameZh": "硬殺之使（Hard Kill Bringer）",
    "nodes": [
     {
      "text": "下+技能：芭烈特抓住身前的一名敵人。抓住後，芭烈特進行一連串持續的火焰爆發，終結技造成大範圍傷害。若芭烈特未抓住敵人，她改為發射一記大型手甲爆裂。SP:100",
      "sub": [
       {
        "t": "SP：透過抓取敵人獲得 SP。",
        "k": "auto"
       },
       {
        "t": "拖曳敵人時按下左或右可改變方向。連按普攻可提升傷害。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "鎖定",
      "effect": "SP 獲得速度更快，且硬殺之使可以過度消耗 SP。"
     },
     {
      "cond": "通用強化：免疫抓取的爆炸",
      "effect": "當嘗試以硬殺之使抓取免疫抓取的敵人時，芭烈特改為向前釋放一記巨大火焰爆裂，可透過按住下+技能瞄準。"
     },
     {
      "cond": "硬殺之使、鎖定，與通用強化：免疫抓取的爆炸",
      "effect": "在以硬殺之使壓制敵人後，輸入三次下半圓並按下技能。這將在緊接著執行不可抓取版本的硬殺之使。"
     }
    ]
   },
   {
    "nameEn": "After Burner",
    "nameZh": "後燃器（After Burner）",
    "nodes": [
     {
      "text": "上+衝刺：芭烈特進入熱機狀態，然後召喚並投擲一個大型物品。熱機狀態：強化追擊攻擊。使用一次強化追擊攻擊後即結束。",
      "sub": [
       {
        "t": "處於熱機狀態時，火焰攻擊會施加燃燒，造成持續性傷害。此燃燒狀態可以疊加。",
        "k": "builtin"
       },
       {
        "t": "摧毀所召喚的投擲物時進入熱機狀態。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "後燃器：施加燃燒 + 格擋投射物",
      "effect": "後燃器在格擋投射物時會回復 MP，並在燒毀投射物時回復 SP。"
     },
     {
      "cond": "後燃器：格擋投射物，與瞬抓手拳",
      "effect": "後燃器現在會偏轉被燒毀的投射物。"
     }
    ]
   },
   {
    "nameEn": "Lock On",
    "nameZh": "鎖定（Lock On）",
    "nodes": [
     {
      "text": "動作：芭烈特周圍出現一個橙色圓圈。範圍內的敵人會被鎖定，芭烈特將朝其衝刺並造成傷害。芭烈特在朝敵人衝刺時擁有無敵幀。可使用方向鍵指定特定敵人。SP:25",
      "sub": [
       {
        "t": "SP：透過抓取敵人獲得 SP。",
        "k": "auto"
       },
       {
        "t": "以鎖定衝刺至敵人後，該衝刺可接續通用攻擊。",
        "k": "builtin"
       },
       {
        "t": "鎖定的範圍增加，且可透過蓄力進一步增加。若未鎖定任何敵人，將退還 SP。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "跳躍：重置 [空中] 攻擊次數上限",
      "effect": "鎖定可以重置 [空中] 攻擊次數上限。"
     },
     {
      "cond": "後燃器",
      "effect": "以鎖定命中敵人會使芭烈特自動進入熱機狀態。"
     },
     {
      "cond": "衝刺：三段衝刺",
      "effect": "芭烈特現在在鎖定期間擁有無敵閃避幀。"
     },
     {
      "cond": "加農排氣猛擊：引爆突襲",
      "effect": "在任何抓取技能後，芭烈特暫時免疫陷阱。"
     },
     {
      "cond": "鎖定：通用攻擊後續 + 增加範圍",
      "effect": "鎖定消耗更少 SP。"
     },
     {
      "cond": "普攻：上+普攻，與瞬抓手拳：無敵",
      "effect": "芭烈特在嘗試鎖定目標時擁有無敵幀。"
     }
    ]
   },
   {
    "nameEn": "Universal Enhancement",
    "nameZh": "通用強化",
    "nodes": [
     {
      "text": "通用強化影響多個招式。",
      "sub": [
       {
        "t": "部分命中地面的攻擊會產生一個可投擲物。",
        "k": "builtin"
       },
       {
        "t": "當芭烈特嘗試抓取無法被抓取的敵人時，她改為進行一次大型爆炸攻擊。",
        "k": "builtin"
       },
       {
        "t": "芭烈特現在可以一次抓取多個敵人。",
        "k": "builtin"
       }
      ],
      "kind": "base"
     }
    ],
    "hidden": [
     {
      "cond": "貫穿突進：可蓄力 + 拉近敵人",
      "effect": "增加芭烈特的抓取範圍。"
     }
    ]
   }
  ],
  "nodeCount": 43,
  "branchCount": 11
 }
];
const CHARACTER_METADATA = {"gameId": "blazblue-entropy-effect", "gameVersion": null, "dataVersion": "sample-2026-10-15", "updatedAt": "2026-10-15", "platform": "Steam/PC", "locale": "zh-Hant"};
const CHARACTER_SOURCES = [
 {
  "sourceId": "prototype-hakumen",
  "path": ".workbuddy/build/chars/hakumen.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-naoto",
  "path": ".workbuddy/build/chars/naoto.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-kokonoe",
  "path": ".workbuddy/build/chars/kokonoe.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-ragna",
  "path": ".workbuddy/build/chars/ragna.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-jin",
  "path": ".workbuddy/build/chars/jin.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-rachel",
  "path": ".workbuddy/build/chars/rachel.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-mai",
  "path": ".workbuddy/build/chars/mai.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-lambda",
  "path": ".workbuddy/build/chars/lambda.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-icey",
  "path": ".workbuddy/build/chars/icey.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-noel",
  "path": ".workbuddy/build/chars/noel.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-taokaka",
  "path": ".workbuddy/build/chars/taokaka.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-es",
  "path": ".workbuddy/build/chars/es.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-hazama",
  "path": ".workbuddy/build/chars/hazama.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-hibiki",
  "path": ".workbuddy/build/chars/hibiki.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-shoushuzhe",
  "path": ".workbuddy/build/chars/shoushuzhe.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "prototype-bullet",
  "path": ".workbuddy/build/chars/bullet.json",
  "upstreamUrl": "https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes",
  "type": "community",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "支持潛能內容，不含角色推薦／評級。沿用既有本地整理；原始單角頁 revision 與逐條核對日期未保存，未在此次重新核實。"
 },
 {
  "sourceId": "legacy-catalogue",
  "path": "docs/strategy-reference.md",
  "type": "legacy-import",
  "gameVersion": null,
  "checkedAt": null,
  "notes": "沿用既有目錄與推薦；未保存逐條原始網址／revision，不能視為已按遊戲驗證。"
 }
];
if (typeof window !== "undefined") window.CHARACTER_SKILLS = CHARACTER_SKILLS;
