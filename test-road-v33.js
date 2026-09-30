// road.js v33 end to end: story.js loaded first, a man with one chapter, Your story → Put it together → Check it goes through the shared assistant.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), road = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const dom = new JSDOM('<!doctype html><html><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/the-road-i-walked" });
  const w = dom.window; w.getUserToken = () => "tok";
  const log = [];
  w.fetch = (url, init) => {
    if (/assessment\/state/.test(url)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
    if (/script\.google/.test(url)) {
      const input = JSON.parse(init.body).input; log.push(input);
      let data = {};
      if (/return notes on it/.test(input)) data = { notes: [{ check: "gap", quote: "I said nothing.", question: "What did you want to say?", options: ["What I wanted to say was…"] }] };
      else if (/did not write these notes/.test(input)) data = { verdicts: [{ i: 0, keep: true }] };
      return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true, data }) });
    }
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted" } }) });
  };
  w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = function () {};
  w.eval(story);
  w.AP_ROAD = { lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, plate: false, worksheet: false };   /* reader left at its default: the relay */
  w.module = {}; w.eval(road);
  const APP = w.APP, TELL = w.module.exports;
  t("both files booted; the assistant is the shared one", !!APP && !!TELL && w.APStory.version === "18.2");
  const D = APP.D, ch = D.chapters[0];
  ch.lines = [{ on: true, k: "q0", side: "hi", label: "What I did", text: "I came home late." }, { on: true, k: "q1", side: "hi", label: "What it cost", text: "I said nothing." }];
  D.meCount = 1;
  APP.go("tell");
  const html = w.document.body.innerHTML;
  t("Your story drew with the Story assistant line and the story circled-i text", /Your story/.test(html) && /Story assistant/.test(html) && /does four things/.test(html));
  const T = TELL.dump(); const idx = T.parts.findIndex(p => p.lines.some(l => l.text === "I said nothing."));
  w.document.querySelector('[data-tell="together"][data-id="' + idx + '"]').click();
  const ask = w.document.querySelector('[data-tell="ask"][data-id="' + idx + '"]');
  t("Put it together shows Check it", !!ask && /Check it/.test(ask.textContent));
  ask.click(); await sleep(50);
  t("Check it sent two reads through the shared assistant, with the Road's house document and name", log.length === 2 && /You are "a first reader"/.test(log[0]) && /A man has finished a formation course/.test(log[0]) && !/THIS IS A POEM/.test(log[0]) && /PART TO READ: \[/.test(log[0]) && /THE NOTES:/.test(log[1]));
  const T2 = TELL.dump(), p = T2.parts[idx];
  t("the note came back onto the part with its label and answer box", p.notes.length === 1 && p.notes[0].label === "Something is missing here" && p.busy === "" && /Something is missing here/.test(w.document.body.innerHTML) && /What did you want to say\?/.test(w.document.body.innerHTML));
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
