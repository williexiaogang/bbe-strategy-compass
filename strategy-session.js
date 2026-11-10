/* Session history and portable build codes. No game rules or DOM state here. */
const CompassSession = (() => {
  const {gameId,gameVersion,dataVersion,rulesVersion} = CompassData.METADATA;
  const metadata = {gameId,gameVersion,dataVersion,rulesVersion};
  const clone = value => JSON.parse(JSON.stringify(value));
  const signature = value => JSON.stringify({ ...value, slot: null });
  function history(limit = 30) {
    let current = null;
    const past = [];
    return {
      reset(value) { current = clone(value); past.length = 0; },
      record(value) {
        const next = clone(value);
        if (current && signature(current) !== signature(next)) {
          past.push(current);
          if (past.length > limit) past.shift();
        }
        current = next;
      },
      undo() {
        if (!past.length) return null;
        current = past.pop();
        return clone(current);
      },
      get canUndo() { return past.length > 0; }
    };
  }
  const toCode = text => btoa(String.fromCharCode(...new TextEncoder().encode(text)))
    .replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  const fromCode = code => new TextDecoder('utf-8', { fatal: true }).decode(
    Uint8Array.from(atob(code.replace(/-/g, '+').replace(/_/g, '/')), c => c.charCodeAt(0)));
  function encode(build) {
    return 'BBE1.' + toCode(JSON.stringify({ schemaVersion: 1, ...metadata, build }));
  }
  function decode(text) {
    if (typeof text !== 'string' || text.length > 100000) throw new Error('配裝碼太長或格式錯誤');
    const code = text.trim().includes('#b=') ? text.trim().split('#b=')[1] : text.trim();
    if (!/^(?:BBE1\.)?[\w-]+$/.test(code)) throw new Error('配裝碼格式錯誤');
    const modern = code.startsWith('BBE1.');
    const payload = JSON.parse(fromCode(modern ? code.slice(5) : code));
    if (!payload || typeof payload !== 'object') throw new Error('配裝碼內容錯誤');
    if (modern) {
      if (payload.schemaVersion !== 1 || payload.gameId !== metadata.gameId) throw new Error('不支援的格式或其他遊戲的配裝碼');
      if (!payload.build || !Array.isArray(payload.build.selected)) throw new Error('配裝碼缺少策略清單');
      return { build: payload.build, warnings: [payload.dataVersion !== metadata.dataVersion ? '資料整理版本不同，已按目前規則重新檢查' : '',payload.rulesVersion !== metadata.rulesVersion ? '規則版本不同，已重新檢查；待核對項目不作自動啟用' : ''].filter(Boolean) };
    }
    // Existing v3 links keep their original compact payload.
    if (payload.v !== 3 || !Array.isArray(payload.s)) throw new Error('不支援的舊配裝碼');
    return { build: { version: 3, selected: payload.s,
      acquired: (payload.a || []).map(([name, slot]) => ({ name, slot })),
      inherited: (payload.i || [0, 0, 0, 0]).map(x => x ? { name: x[0], slot: x[1], confirmed: Boolean(x[2]) } : null),
      character: payload.c || null, target: payload.t || null }, warnings: [] };
  }
  function shareLink(address, code) {
    const url = new URL(address);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    url.search = ''; url.hash = 'b=' + code;
    return url.href;
  }
  return { metadata, history, encode, decode, shareLink };
})();
if (typeof module !== 'undefined') module.exports = CompassSession;
