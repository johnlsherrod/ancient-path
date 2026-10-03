// Writes ew-parts.json and ew-parts-solo.json from the page's own PARTS (window.ewParts), so the worksheet carries the same words as the page.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const page = fs.readFileSync(__dirname + "/ending-well-v4.html", "utf8");
const scripts = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const markup = page.replace(/<script>[\s\S]*?<\/script>/g, "");
for (const mode of ["cohort", "solo"]) {
  const html = '<!doctype html><html><body>' + (mode === "solo" ? markup.replace('id="ewRoot" data-mode="cohort"', 'id="ewRoot" data-mode="solo"') : markup) + '</body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true }); const w = dom.window;
  w.HTMLElement.prototype.scrollIntoView = function () {}; w.scrollBy = () => {};
  w.eval(scripts[0]);
  const parts = w.ewParts.map(p => ({ title: p.title, scene: p.scene || "", frame: p.frame || "", stone: !!p.stone, slots: p.slots.map(s => ({ key: s.key, stem: s.stem || "", prompt: s.prompt, ex: s.ex, words: s.words || [], rowNote: s.rowNote || '', own: !!s.own, bridge: s.bridge ? { a: w.ewParts.flatMap(q => q.slots).find(x => x.key === s.bridge.a).stem, aPart: w.ewParts.find(q => q.slots.some(x => x.key === s.bridge.a)).title, b: w.ewParts.flatMap(q => q.slots).find(x => x.key === s.bridge.b).stem, bPart: w.ewParts.find(q => q.slots.some(x => x.key === s.bridge.b)).title, la: s.bridge.la, lb: s.bridge.lb } : null, lookback: s.lookback ? { label: s.lookback.label, stem: w.ewParts.flatMap(q => q.slots).find(x => x.key === s.lookback.key).stem } : null })) }));
  const out = __dirname + (mode === "solo" ? "/ew-parts-solo.json" : "/ew-parts.json");
  fs.writeFileSync(out, JSON.stringify(parts, null, 1)); console.log(out, parts.length, "parts,", parts.reduce((n, p) => n + p.slots.length, 0), "slots");
}
