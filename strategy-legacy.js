/* Mechanism-based candidates, not a measured strength ranking. See the research report. */
const CompassLegacy = (() => {
  const filters = [['all','全部'],['damage','傷害'],['defense','減傷續航'],['invincible','無敵接續'],
    ['dodge','閃避觸發'],['control','控場'],['resource','資源循環']];
  const wiki = 'https://blazblue.wiki/wiki/BlazBlue_Entropy_Effect/Prototypes/BBEE_';
  const donor = (name, talent, slug, first, second) => ({name,talent,source:wiki+slug,skills:[first,second]});
  const donors = {
    hakumen:donor('白面','受擊或格擋後獲得霸體及攻擊增益。','Hakumen',
      ['虛空陣：迅雷','成功格擋才發動雷擊反擊，空放不保證觸發。'],['金剛','短時間霸體與減傷；基礎描述為 7 秒、55% 減傷，有冷卻空窗。']),
    naoto:donor('黑鐵直人','對 HP 百分比較低的敵人增傷，對百分比較高的敵人減傷。','Naoto_Kurogane',
      ['血之追獵者','近距離通用攻擊追加血影，適合高頻近戰。'],['血之尖刺','在周圍生成血刃，持續傷害。']),
    kokonoe:donor('九重','無傷連殺超過 10 時技能增傷；受擊會影響連殺。','Kokonoe',
      ['隕石地毯風暴','發射追蹤飛彈。'],['平面迷霧','朝指定方向傳送，提供額外閃避性防禦窗口。']),
    ragna:donor('拉格納','HP 減少後短時間提高技能傷害，可由自傷觸發。','Ragna_the_Bloodedge',
      ['死亡尖刺','消耗當前 HP 發射攻擊，命中帶回復效果。'],['血之興奮 EX','持續耗血，提供全傷增益與攻擊回復效果；需管理血量。']),
    jin:donor('如月琴恩','成功閃避後觸發時之靜止；Wiki 另記載期間無敵，續觸發限制待測。','Jin_Kisaragi',
      ['冷凍','冰柱命中使敵人凍結，提供輸出或走位空間。'],['冰天斷華［巨］','大範圍迴旋斬擊。']),
    rachel:donor('雷琪兒','未攻擊一段時間生成蝙蝠，按普攻傷害計並可觸發普攻策略。','Rachel_Alucard',
      ['喬治 XIII','召喚青蛙電擊並吸引火力。'],['暴風大麗花','大範圍風壓推動敵人；不能假設能推動所有 Boss。']),
    mai:donor('棗麻衣','技能後短時間提高普攻傷害；來源 +30%／+130% 文句矛盾，不用來精算。','Mai_Natsume',
      ['楓華','雙旋風聚怪，方便維持連擊。'],['楓陣風','向前移動的大旋風，聚怪並拉開距離。']),
    lambda:donor('Λ-No.11','使敵人自一定高度落下時回 MP；不保證對單 Boss 穩定生效。','Lambda-11',
      ['閃耀奴隸 EX','空間門發射追蹤刀刃。'],['遺產之刃 EX','前方長時間發射刀刃。']),
    icey:donor('艾希','對機械敵人有傷害與低血處決效果，適用對象有限。','ICEY',
      ['異界之聲','隨機增益、護盾或 MP，也可能反轉操作。'],['異界之刃','召喚艾希向前衝刺斬擊。']),
    noel:donor('諾愛兒','達到水平距離條件時獲得遠距離傷害增益。','Noel_Vermillion',
      ['裹屍布墜落','鎖定遠處敵人發動爆炸。'],['快速裝填 EX','立即補充 MP；基礎描述 100 MP，不等於本體版回滿。']),
    taokaka:donor('桃兒卡卡','連擊超過 30 後逐漸增傷，100 連擊達描述上限。','Taokaka',
      ['卡卡攻擊指令','召喚小貓協助攻擊。'],['咔滋咔滋','隨身刀輪持續傷害並反彈投射物，不等於全面免傷。']),
    es:donor('Es','成功閃避時生成紋章，附加傷害與控場。','Es',
      ['紋章術','放置紋章，敵人接近時觸發。'],['崔斯坦 EX','重置空中普攻次數，落地生成紋章；不是重置衝刺次數。']),
    hazama:donor('哈札馬','近／遠距離命中會暫時提高另一距離的傷害。','Hazama',
      ['蛇環','近身吸取 HP／MP，不能套用本體整套蛇環強化。'],['銜尾蛇','位移或拉扯敵人，命中可縮短冷卻。']),
    hibiki:donor('琥珀響音','背後攻擊增傷，需要穩定背擊手段。','Hibiki_Kohaku',
      ['分裂之刃','周圍多段刀刃攻擊。'],['闇之掩護','匿蹤疾行與首擊奇襲；匿蹤不等於無敵。']),
    shoushuzhe:donor('梟首者','受傷後短時間命中敵人可回 HP。','The_Prisoner',
      ['狼陷阱','將命中的敵人定身。'],['繭','成功格擋後獲得基礎 3 秒無敵，並重置自身冷卻；失敗不保證重置。']),
    bullet:donor('芭烈特','成功投擲後短時間增傷；缺投技者不易利用。','Bullet',
      ['空尖突進','範圍砸地並生成可投擲物。'],['後燃器','短時間全傷增益，擊退攻擊追加爆炸。'])
  };
  // Requirements are player-facing milestones, not automatic skill-tree unlock proofs.
  const rows = [
    ['hakumen','雪風格擋續戰',['invincible','resource'],[['noel',1],['shoushuzhe',1]],
      ['雪風追加瞬移強化','追加瞬移次數提升至 3～5 次'], '格擋反擊後連續瞬移輸出，以裝填補 MP、繭補防禦空檔。','未格擋成功、MP 不足或招式接續失誤會中斷。'],
    ['naoto','衝刺蓄力連擊',['damage'],[['mai',0],['taokaka',1]],
      ['衝刺後蓄力普攻強化','全驅動與 SP 回收相關強化'], '穿插技能觸發麻衣天賦，再以強化普攻與連擊持續輸出。','連擊中斷、增益過期與 SP 耗盡會降低輸出。'],
    ['kokonoe','零件射線爆發',['damage','resource'],[['noel',1],['ragna',1]],
      ['兵裝留下零件','驅逐射線使零件追加發射','三角零件生成光束'], '先鋪零件再以射線放大命中數，遠距離天賦、裝填與血之興奮支援輸出。','依賴站位與 Boss 體積；血之興奮會耗血。'],
    ['ragna','血鐮回復續戰',['defense','resource'],[['noel',1],['jin',0]],
      ['血鐮無敵且不再消耗 HP','提高回復或降低 HP 消耗'], '用強化血鐮與升龍交替防禦輸出，裝填補 MP，冷凍爭取回復空間。','技能落空、回復延遲或 MP 不足時仍可能被爆發擊倒。'],
    ['jin','收刀凍結循環',['control','dodge'],[['noel',1],['kokonoe',1]],
      ['收刀強化','通用格擋強化','凍結相關強化'], '本體時之靜止與凍結控場，傳送增加閃避入口，裝填支援技能。','不是按衝刺就觸發；時之靜止再次觸發條件待測。'],
    ['rachel','插桿落雷控場',['damage','control'],[['jin',0],['noel',1]],
      ['插桿與落雷聯動強化','增加可同時召喚數量','跳躍／滑翔防禦強化'], '在敵人附近疊桿後落雷，利用冷凍與閃避窗口維持遠程輸出。','插桿數、命中率與資源決定輸出；不能直接宣稱最高 DPS。'],
    ['mai','空中無敵接續',['invincible','resource'],[['noel',1],['jin',0]],
      ['月華','百花繚亂之雪無敵與減耗','空中突刺無敵／次數重置'], '以月華、空中攻擊及無敵突刺接續，冷凍與裝填提供喘息。','空中次數、落地銜接和 MP 都可能形成空窗。'],
    ['lambda','多門刀刃連擊',['damage'],[['noel',1],['taokaka',1]],
      ['刀刃追蹤／數量強化','閃耀奴隸可同時存在多門','重擊防禦強化'], '遠距離持續刀刃提高連擊，借遠程與連擊天賦增益。','遇高速位移敵人或近身壓迫，命中與距離條件可能失效。'],
    ['icey','五段閃避補給',['dodge','resource'],[['jin',0],['noel',1]],
      ['方向衝刺與五段衝刺','提高 MP 回復效率','再生回復資源'], '閃避取得安全窗口後穿插普攻回 MP，以再生與裝填支援技能。','五段不等於無限；只閃避不命中會斷資源。'],
    ['noel','裝填大砲循環',['damage','resource'],[['kokonoe',1],['ragna',1]],
      ['快速裝填冷卻減半','MP／SP 轉換與大砲強化','大砲防禦相關隱藏效果'], '裝填後消耗 MP 累積 SP，傳送補位，血之興奮提高輸出並帶回復效果。','SP／MP 尚未回收或持續耗血時，不能只站著開砲。'],
    ['taokaka','閃避紋章連擊',['dodge','damage'],[['jin',0],['es',0]],
      ['三段衝刺','移除空中普攻次數上限','上述組合的空中普攻無敵隱藏效果'], '利用本體機動與空中普攻接續，成功閃避觸發時之靜止及紋章。','普通無敵不自動算成功閃避；落地與取消空窗待測。'],
    ['es','紋章空戰接續',['dodge','invincible'],[['jin',0],['kokonoe',1]],
      ['莫德雷德無敵閃避強化','跳躍／衝刺重置空中普攻次數'], '空中攻擊與防禦位移交錯，借琴恩天賦與傳送延續安全輸出。','空中普攻重置不等於衝刺重置；不同莫德雷德版本判定有別。'],
    ['hazama','蛇環機動連擊',['damage','dodge','resource'],[['jin',0],['taokaka',1]],
      ['本體蛇環吸 MP 強化','銜尾蛇毒咬','SBS 蛇之救贖'], '蛇環支援本體 MP，毒咬與架式位移維持閃避及連擊。','遠離目標或操作銜接失誤會破壞回 MP 與安全窗口。'],
    ['hibiki','背擊分身普攻',['damage'],[['mai',0],['taokaka',1]],
      ['重擊使敵人轉身','無盡蕾絲分身背擊強化'], '技能後普攻，配合翻面與背擊分身堆連擊。','此組偏普攻；專走耗 MP 分身技能時應另選裝填。'],
    ['shoushuzhe','異常暴擊續戰',['damage','defense'],[['jin',0],['noel',1]],
      ['強化初始武器以解鎖背包','異常狀態暴擊強化','選定壁壘或繭防禦路線'], '冷凍提供異常與控場，暴擊輸出後用本體防禦接續，裝填補資源。','需先解鎖武器前置；不可把所有背包招式當開局已有。'],
    ['platinum','閃避回 MP 研究',['resource','dodge'],[['jin',0],['noel',1]],
      ['核對本版本天賦閃避回 MP 數值','取得適合的套組／幸運控制潛能','如取得腳底抹油，核對回 MP 觸發頻率'], '閃避回 MP 後施放技能，再尋找下一次閃避機會。','完整潛能與收支數據不足，不能判為無限 MP。'],
    ['bullet','投技無敵追擊',['damage','invincible'],[['jin',0],['ragna',1]],
      ['瞬抓手拳無敵強化＋上普攻＋鋒銳斬','鎖定＋三段衝刺','對不可抓取敵人的替代爆炸強化'], '投技與鎖定交替防禦，冷凍爭取窗口，血之興奮支援傷害回復。','不可抓取 Boss、MP／SP 不足與耗血都可能中斷。']
  ];
  const builds = rows.map(([character,name,tags,legacies,requirements,loop,risk]) => ({
    id:character+'-core',character,name,tags,legacies,requirements,loop,risk,
    evidence:character==='platinum'?'資料待補':'配合推論',
    extension:'策略延伸依目前配裝比較人物路線；策略前置與本體潛能分開確認。'
  }));
  function add(id,character,name,tags,legacies,requirements,loop,risk) {
    builds.push({id,character,name,tags,legacies,requirements,loop,risk,evidence:'配合推論',
      extension:'先補防禦與資源，再對照下方人物策略路線；不強求五紅。'});
  }
  add('rachel-moon','rachel','月讀格擋循環',['invincible','dodge'],[['shoushuzhe',1],['kokonoe',1]],
    ['月讀及詠唱相關潛能','新版格擋取得月讀／降低詠唱 CD 隱藏效果','詠唱起手及成功時無敵隱藏效果'],
    '格擋取得月讀或繭無敵 → 安全輸出 → 傳送補空檔 → 再次格擋。',
    '官方已記載新增效果，但完整前置與逐幀接續待測；不是永久無敵。');
  add('ragna-tank','ragna','金剛減傷吸血',['defense'],[['hakumen',1],['naoto',1]],
    ['降低 HP 消耗','提高命中回復','確認直人減傷的雙方 HP 百分比條件'],
    '金剛期間承受較低傷害，以命中回復續戰；低血時可能符合直人減傷條件。',
    '金剛有空窗；回血或 Boss 掉血會改變直人條件，減傷不能直接相加。');
  add('hakumen-parry','hakumen','格擋瞬移接續',['invincible'],[['shoushuzhe',1],['kokonoe',1]],
    ['雪風追加瞬移強化','蓮華＋普攻霸體＋霸體減傷的無敵隱藏效果'],
    '雪風與追加瞬移輸出，繭接敵招，平面迷霧補走位與閃避入口。',
    '白面一般霸體不等於閃避，MP 與格擋成功率仍會限制循環。');
  add('icey-crest','icey','閃避紋章輸出',['dodge','damage'],[['jin',0],['es',0]],
    ['方向衝刺與五段衝刺','普攻／跳躍回 MP 強化'],
    '以本體閃避觸發時之靜止和紋章，再普攻回 MP。',
    '少了裝填，要靠命中維持 MP；閃避可用次數仍須管理。');
  add('hazama-control','hazama','冷凍補給控場',['control','resource'],[['jin',0],['noel',1]],
    ['本體蛇環吸 MP 強化','銜尾蛇毒咬'],
    '以本體蛇環支援資源，冷凍與毒咬爭取安全輸出窗口。',
    '冷凍不是所有 Boss 階段都能無縫控制，離開吸取範圍會影響資源。');
  add('taokaka-blackhole','taokaka','高連擊傳承控場',['control'],[['hazama',1],['jin',0]],
    ['三段衝刺與連擊成型','選配黑洞減速，並完成其策略前置','如取得傳承減 CD 意識，記錄實際縮減幅度'],
    '銜尾蛇命中減自身 CD，配合高連擊與傳承策略，提高控場覆蓋。',
    '黑洞不會因選此目標自動取得；減速會縮短黑洞持續時間，覆蓋需實測。');
  const find = id => builds.find(b=>b.id===id);
  const forCharacter = (id,filter='all') => builds.filter(b=>b.character===id&&(filter==='all'||b.tags.includes(filter)));
  function createGoal(id) {
    const b=find(id);
    return b ? {id,checks:[],skills:b.legacies.map(x=>x[1]),unlocked:[false,false]} : null;
  }
  function normalize(raw,character) {
    if (!raw || typeof raw!=='object') return null;
    const b=find(raw.id);
    if (!b || b.character!==character) return null;
    return {id:b.id,checks:[...new Set(Array.isArray(raw.checks)?raw.checks:[])]
      .filter(i=>Number.isInteger(i)&&i>=0&&i<b.requirements.length),
      skills:b.legacies.map((x,i)=>[0,1].includes(raw.skills?.[i])?raw.skills[i]:x[1]),
      unlocked:b.legacies.map((x,i)=>raw.unlocked?.[i]===true)};
  }
  function status(goal) {
    const b=find(goal?.id);
    if (!b) return null;
    const missingSkills=goal.skills.reduce((n,skill,i)=>n+(skill===1&&!goal.unlocked[i]?1:0),0);
    return {checked:goal.checks.length,total:b.requirements.length,missingSkills,
      ready:goal.checks.length===b.requirements.length&&!missingSkills};
  }
  return {filters,donors,builds,find,forCharacter,createGoal,normalize,status};
})();
if (typeof module!=='undefined') module.exports=CompassLegacy;
