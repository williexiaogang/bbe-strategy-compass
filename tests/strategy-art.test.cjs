const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const root=path.join(__dirname,'..'),c=vm.createContext({});
for(const file of ['strategy-data.js','strategy-art.js'])vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),c);
const {data,art}=vm.runInContext('({data:CompassData,art:CompassArt})',c);
test('every tactic tree has its own unique atlas cell',()=>{
 assert.equal(art.ids.length,35);
 assert.deepEqual([...art.ids].sort(),Array.from(data.STRATEGY_DATA,t=>t.id).sort());
 const html=data.STRATEGY_DATA.map(t=>art.icon(t));
 assert.ok(html.every(s=>s.includes('class="tactic-art"')));
 assert.equal(new Set(html.map(s=>s.match(/background-position:([^"]+)/)[1])).size,35);
 const png=fs.readFileSync(path.join(root,art.atlas.src));
 assert.equal(png.subarray(1,4).toString(),'PNG');
 assert.equal(png.readUInt32BE(16),art.atlas.width);
 assert.equal(png.readUInt32BE(20),art.atlas.height);
 assert.ok(art.atlas.cell>0&&art.atlas.cell*5<=art.atlas.width&&art.atlas.cell*7<=art.atlas.height);
});
test('all red tactics retain two painted source icons including same-element combinations',()=>{
 for(const d of data.DUALS)assert.equal((art.dual(d).match(/data-tree-art=/g)||[]).length,2,d.name);
 const fire=art.dual(data.DUALS.find(d=>d.name==='火精靈引爆'));
 assert.ok(fire.includes('fire_spirit')&&fire.includes('fire_burn'));
});
