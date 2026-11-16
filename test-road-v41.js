// road.js v41: the count knows where he is. Run: node test-road-v41.js (story.js 20.4 and road.js v41 beside it; needs jsdom)
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), road = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
function boot(o) {
  o = o || {};
  const dom = new JSDOM('<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/" + (o.piece === "where" ? "where-are-you" : "the-road-i-walked") });
  const w = dom.window;
  Object.defineProperty(w, "innerWidth", { value: 1200, configurable: true });
  w.matchMedia = () => ({ matches: false }); w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = function () {};
  w.SpeechSynthesisUtterance = function (x) { this.text = x; }; w.speechSynthesis = { speak() {}, cancel() {}, getVoices() { return []; } };
  w.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
  w.localStorage.clear();
  if (o.held) w.localStorage.setItem("apStoryPending:road", JSON.stringify(o.held));
  const events = []; w.gtag = function () { events.push([].slice.call(arguments)); };
  w.eval(story);
  w.AP_ROAD = Object.assign({ lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, reader: false, plate: false, worksheet: false }, o.piece ? { piece: o.piece } : {});
  w.module = {}; w.eval(road);
  return { w, d: w.document, events, ev: n => events.filter(e => e[0] === "event" && e[1] === n) };
}
const type = (w, el, v) => { el.value = v; el.dispatchEvent(new w.Event("input", { bubbles: true })); };
(async () => {
  const wh = boot({ piece: "where" }); await sleep(250);
  const box2 = wh.d.createElement("textarea"); wh.d.getElementById("ap-road-app").appendChild(box2); type(wh.w, box2, "a conversation"); await sleep(400);
  const s2 = wh.ev("story_start")[0]; if (!s2) console.log("       (" + JSON.stringify(wh.events.filter(e => e[0] === "event")) + ")");
  t("Where Are You? story_start carries piece where and the step (1 to 7)", (!!s2 && s2[2].piece === "where" && /^[1-7]$/.test(s2[2].part || "")));
  const a = boot(); await sleep(250);
  t("road.js is v41", /\(v41:/.test(road.slice(0, 200)) && a.w.AP_ROAD_SITE.build === "AP-ROAD-v41");
  t("a first visit is not a return", a.ev("story_return").length === 0);
  a.w.APP.openPart(2); await sleep(80);
  const box = a.d.createElement("textarea"); a.d.getElementById("ap-road-app").appendChild(box);   /* any box inside the piece: the host's input listener counts the first words */
  type(a.w, box, "I was afraid of the dark road."); await sleep(250);
  const st = a.ev("story_start")[0];
  t("story_start on The Road carries piece road and the chapter he is on", !!st && st[2].piece === "road" && /^([1-9]|10)$/.test(st[2].part || ""));
  t("…and only piece, part, build 20.4 and team", !!st && Object.keys(st[2]).sort().join() === "build,part,piece,team" && st[2].build === "20.4");
  t("…no words leave the page", !JSON.stringify(a.events).includes("afraid"));
  const snap = a.w.APP.snapshot(); console.log("       (start part " + (st && st[2].part) + ")");
  const mid = new Date(); mid.setHours(0, 0, 0, 0);
  const b = boot({ held: { t: mid.getTime() - 60000, a: snap, press: false } }); await sleep(300);
  const r = b.ev("story_return");
  t("words he held on this device from an earlier day, opened again: one story_return, piece road, with a part", r.length === 1 && r[0][2].piece === "road" && !!r[0][2].part);
  const c = boot({ held: { t: Date.now() - 60000, a: snap, press: false } }); await sleep(300);
  t("words held from earlier today: not a return", c.ev("story_return").length === 0);
  console.log(fails ? fails + " FAILED" : "all passed"); process.exit(fails ? 1 : 0);
})();
