// road.js v37: Speak it and Continue on your phone on the Road and Where Are You?, through story.js v17.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), road = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
function boot(o) {
  o = o || {};
  const dom = new JSDOM('<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/" + (o.where ? "where-are-you" : "the-road-i-walked") });
  const w = dom.window; w.getUserToken = () => "tok";
  Object.defineProperty(w, "innerWidth", { value: o.width || 1200, configurable: true });
  w.matchMedia = (q) => ({ matches: /pointer: coarse|hover: none/.test(q) ? !!o.touch : false });
  const recs = [], spoken = [];
  w.SpeechRecognition = function () { const r = this; recs.push(r); r.start = () => {}; r.stop = () => { if (r.onend) r.onend(); }; };
  w.SpeechSynthesisUtterance = function (text) { this.text = text; }; w.speechSynthesis = { speak: (u) => spoken.push(u.text), cancel: () => spoken.push("(cancel)") };
  let latest = null;
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: latest }) });
    const body = init && init.body ? JSON.parse(init.body) : {}; if (body.answers) latest = { status: "submitted", answers: body.answers, submittedTimestamp: 1 };
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s1" } }) });
  };
  w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = function () {};
  w.eval(story);
  w.AP_ROAD = o.where ? { piece: "where", lw: { unit: "u2", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, plate: false, worksheet: false } : { lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, reader: false, plate: false, worksheet: false };
  w.module = {}; w.eval(road);
  return { w, d: w.document, recs, spoken };
}
(async () => {
  t("road.js says v37", /AP-ROAD-v1 \(v37:/.test(road));
  { const { w, d, recs } = boot(); await sleep(80);
    d.querySelector('[data-do="pickup"]').click(); await sleep(60);
    const dot = d.querySelector("#ap-road-app [data-n]"); if (dot) { dot.click(); await sleep(60); }
    const ta = d.querySelector("#ap-road-app textarea");
    t("a Road box gets Tap and talk and Read it to me, from the engine, right under it", ta && ta.nextElementSibling && ta.nextElementSibling.classList.contains("aps-voice") && ta.nextElementSibling.querySelector(".aps-talk") && ta.nextElementSibling.querySelector(".aps-readq"));
    t("the one-line note appears once on the page", d.querySelectorAll(".aps-voice-note").length === 1);
    ta.nextElementSibling.querySelector(".aps-talk").click();
    recs[0].onresult({ resultIndex: 0, results: [Object.assign([{ transcript: "I came home late" }], { isFinal: true })] });
    t("spoken words land in the Road's box as a sentence, and the Road sees them as typed (held on the device)", /^I came home late\.$/.test(ta.value) && (await (async () => { await sleep(900); return !!w.localStorage.getItem("apStoryPending:road"); })()));
    const row = d.querySelector("#ap-road-app .row.bar");
    t("Continue on your phone sits in the Road's bottom row on a desk", row && row.querySelector(".handofflink") && !row.querySelector(".handofflink").hidden);
    row.querySelector(".handofflink").click(); await sleep(1200);
    const box = row.querySelector(".handoffbox");
    t("it saves first, then shows the code and the link for the Road page", !box.hidden && box.querySelector("svg path") && /the-road-i-walked\?open=1/.test(box.textContent) && /Saved/.test(row.querySelector("[data-site=save]").textContent));
  }
  { const { d } = boot({ touch: true, width: 390 }); await sleep(80);
    d.querySelector('[data-do="pickup"]').click(); await sleep(60);
    const dot = d.querySelector("#ap-road-app [data-n]"); if (dot) { dot.click(); await sleep(60); }
    const ta = d.querySelector("#ap-road-app textarea");
    t("on a phone the Road box gets the big Tap and talk, Read it to me above the box, and no Continue on your phone", ta.nextElementSibling.classList.contains("aps-touch") && ta.previousElementSibling.classList.contains("aps-voice-q") && (!d.querySelector(".handofflink") || d.querySelector(".handofflink").hidden));
  }
  { const { d, w } = boot({ where: true }); await sleep(80);
    const A = w.AP_WHERE._A(); A.away = "the quiet"; A.step = 3; w.AP_WHERE.render(); await sleep(60);
    const boxes = d.querySelectorAll("#ap-road-app textarea, #ap-road-app input[type=text]");
    t("Where Are You? boxes get the same controls", boxes.length > 0 && Array.from(boxes).every(b => b.nextElementSibling && b.nextElementSibling.classList.contains("aps-voice")));
  }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
