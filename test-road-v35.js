// road.js v35: The Word for It comes from the engine (APStory.wordForIt) on the Road's feel step and on Where Are You?; the one fallback copy in road.js matches the engine's list exactly and is used only when the engine predates v15.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), road = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
function boot(o) {
  const dom = new JSDOM('<!doctype html><html><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/" + (o.where ? "where-are-you" : "the-road-i-walked") });
  const w = dom.window; w.getUserToken = () => "tok";
  w.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
  w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = function () {};
  w.eval(story);
  if (o.extraWord) { w.APStory.wordForIt.push(o.extraWord); }
  if (o.noEngineList) { delete w.APStory.wordForIt; }
  w.AP_ROAD = o.where ? { piece: "where", plate: false, worksheet: false } : { lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, plate: false, worksheet: false };
  w.module = {}; w.eval(road);
  return w;
}
function roadFeelWords(w) {
  w.APP.openPart(0);
  /* Next through the chapter's steps until the feel step ("One word for what answering these stirred in you") is on screen */
  for (let i = 0; i < 14 && !w.document.querySelector("button[data-feel]"); i++) { const nx = w.document.querySelector("[data-wstep].main"); if (!nx) { break; } nx.click(); }
  return Array.from(w.document.querySelectorAll("button[data-feel]")).map(b => b.getAttribute("data-feel"));
}
function whereFeelWords(w) {
  const A = w.AP_WHERE._A(); A.away = "the quiet"; A.step = 2; w.AP_WHERE.render();
  return Array.from(w.document.querySelectorAll('button[data-tap="feel"]')).map(b => b.textContent);
}
const TWENTY = ["ashamed", "exposed", "afraid", "angry", "sad", "alone", "numb", "tired", "stuck", "restless", "convicted", "sorry", "tender", "relieved", "seen", "hopeful", "grateful", "steady", "free", "glad"];
(async () => {
  // 1. the Road's feel step shows the engine's list — proven by a word only the engine has
  { const w = boot({ extraWord: "wrung out" });
    t("road.js says v37", /AP-ROAD-v1 \(v37:/.test(road));
    const words = roadFeelWords(w);
    t("the Road's feel step lists The Word for It from the engine (21 words when the engine carries one more)", words.length === 21 && words[20] === "wrung out" && JSON.stringify(words.slice(0, 20)) === JSON.stringify(TWENTY)); }
  // 2. Where Are You? too
  { const w = boot({ where: true, extraWord: "wrung out" });
    const words = whereFeelWords(w);
    t("Where Are You? lists the engine's words too (21, ending 'wrung out')", words.length === 21 && words[20] === "wrung out"); }
  // 3. an engine older than v15 (no wordForIt): the one fallback copy, identical to the engine's twenty
  { const w = boot({ noEngineList: true });
    const words = roadFeelWords(w);
    t("with an older engine the Road still shows the twenty, and they are exactly the engine's list", JSON.stringify(words) === JSON.stringify(TWENTY)); }
  { const w = boot({ where: true, noEngineList: true });
    t("same on Where Are You?", JSON.stringify(whereFeelWords(w)) === JSON.stringify(TWENTY)); }
  // 4. one copy in road.js, not two
  t("road.js holds the fallback list once (the two per-module copies are gone)", (road.match(/"ashamed", "exposed", "afraid"/g) || []).length === 1);
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
