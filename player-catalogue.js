/* Shared names and descriptions. Community descriptions are not game verification. */
const CompassCatalogue = (() => {
  const pairs = '傳传 環环 毒毒 槍枪 彈弹 體体 繼继 術术 強强 擊击 閃闪 電电 雷雷 雲云 霧雾 氣气 爆爆 凍冻 冰冰 劍剑 刃刃 斬斩 殺杀 劇剧 擴扩 散散 濃浓 縮缩 長长 效效 觸触 續续 機机 率率 標标 記记 聖圣 光光 暗暗 鏈链 鎖锁 暴暴 躍跃 衝冲 刺刺 連连 結结 穿穿 射射 轉转 化化 煉炼 焰焰 熾炽 響响 愛爱 兒儿 琪琪 諾诺 蕾蕾 琴琴 棗枣 葉叶 夢梦 幻幻 斷断 華华 陣阵 鐵铁 黑黑 繭茧 梟枭 風风 異异 語语 籠笼 獄狱 門门 蓮莲 歸归 還还 迴回 璉琏 雙双 靈灵 療疗 傷伤 減减 復复 護护 貫贯 無无 敵敌 識识 鳴鸣 突突 齊齐 壘垒 噴喷 湧涌 態态 脈脉 輪轮 間间 擲掷 實实 獲获 覺觉 擋挡 瞬瞬 滅灭 裂裂 升升 線线 網网 極极 點点 來来 節节 裝装 填填 備备 隨随 從从 釋释 時时 遠远 遲迟 緩缓 餘余 勢势 發发 產产 見见 會会 賦赋 錐锥 錯错 進进 隱隐 持持 幅幅 蹤踪 聯联 擇择 速速 脫脱 離离 覆覆 領领 域域 內内'.split(' ');
  const vocabulary = '燒烧 變变 額额 濺溅 戰战 喚唤 準准 廣广 頻频 痺痹 過过 載载 繞绕 張张 樁桩 萊莱 積积 叢丛 錮锢 暈晕 穩稳 飛飞 終终 牽牵 潛潜 盡尽 懲惩 導导 殘残 狀状 遞递 針针 對对 龍龙 鏢镖 層层 後后 頭头 鎧铠 覽览 擁拥 絕绝 髮发 說说 給给 讓让 與与 擊击 動动 階阶 應应 緊紧 壓压 歲岁 劑剂 數数 據据 個个 敗败 總总 較较 類类 選选 據据 輔辅 錄录 費费 貓猫 場场 兌兑 換换 幾几 號号 藥药 險险 獎奖 賞赏 購购 買买 賣卖 價价 軍军 鬥斗 檔档 運运 輸输 優优 開开 啟启 關关 閉闭 創创 禮礼 滿满 輕轻 擔担 訓训 練练'.split(' ');
  const conversion = Object.fromEntries([...pairs,...vocabulary].map(pair => [pair[0],pair[1]]));
  const aliases = [['普攻中毒','普攻淬毒'],['普攻毒雾','普攻淬毒'],['技能中毒','技能毒环'],
    ['技能闪电链','技能闪电'],['普攻闪电链','普攻闪电'],['触手坍缩','触手坍塌']];
  function normalize(value) {
    let text = String(value ?? '').normalize('NFKC').toLowerCase().replace(/\s+/g,'');
    text = [...text].map(c => conversion[c] || c).join('');
    for (const [alias,name] of aliases) text = text.replaceAll(alias,name);
    return text;
  }
  const matches = (query,...values) => values.flat(Infinity).some(value => normalize(value).includes(normalize(query)));
  const tactic = name => typeof TacticsDescriptions === 'undefined' ? null : TacticsDescriptions.nodes[name] || TacticsDescriptions.duals[name] || null;
  return {normalize,matches,tactic};
})();
if (typeof module !== 'undefined') module.exports = CompassCatalogue;
