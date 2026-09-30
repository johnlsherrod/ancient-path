// "Read it to me" on a phone: never prints on top of a pinned sentence stem (Asked of Me's "I came from" over its box,
// What Kind of Light's "To" / "am I" pinned beside its box), and a plain question-then-box keeps the row between them with room above and below.
const path = require("path");
const { chromium } = require("playwright");
const file = process.argv[2] || path.join(__dirname, "story.js");
let pass = 0, fail = 0; const t = (n, ok) => { console.log((ok ? "ok   " : "FAIL ") + n); ok ? pass++ : fail++; };
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || "/opt/pw-browsers/chromium" });
  const c = await b.newContext({ viewport: { width: 390, height: 900 }, hasTouch: true, isMobile: true });
  const p = await c.newPage();
  await p.addInitScript(() => { window.SpeechRecognition = function () {}; window.speechSynthesis = { speak() {}, cancel() {} }; window.SpeechSynthesisUtterance = function () {}; });
  await p.setContent(`<html><head><style>
    .wha-line{position:relative}.wha-stem{position:absolute;top:0;left:0;font:17px/25px Georgia}
    .wha-rest{display:block;width:100%;font:17px/25px Georgia;text-indent:99px;height:26px;border:1px solid #999}
    .wkl-line{position:relative;padding:10px 0;margin-bottom:8px}.wkl-stem{position:absolute;top:10px;left:0;font:17px/25.5px Georgia}
    .wkl-rest{display:block;width:calc(100% - 34px);margin-left:34px;font:17px/25.5px Georgia;height:26px;border:1px solid #999;text-indent:0}
    #plain p{margin:0 0 6px;font:600 20px/1.1 Georgia}
  </style></head><body style="margin:16px">
  <div id="wha"><p>Where you came from.</p><div class="wha-line" id="line1"><span class="wha-stem" id="stem1">I came from</span><textarea class="wha-rest" id="box1" rows="1"></textarea></div></div>
  <div id="wkl"><p>Who saw your light.</p><div class="wkl-line" id="line3"><span class="wkl-stem" id="stem3">To</span><textarea class="wkl-rest" id="box3" rows="1"></textarea></div></div>
  <div id="plain"><p id="q">Where did you first hear the word home?</p><textarea id="box2" rows="3" style="width:100%"></textarea></div></body></html>`);
  await p.addScriptTag({ path: file });
  await p.evaluate(() => { window.APStory.voice.attach(document.querySelectorAll("textarea")); });
  const r = await p.evaluate(() => {
    const R = e => e.getBoundingClientRect(), $ = id => document.getElementById(id);
    const rowBefore = id => { const l = $(id).previousElementSibling; return l && l.classList.contains("aps-voice-q") ? l : null; };
    const q2 = $("box2").previousElementSibling;
    return {
      n: document.querySelectorAll(".aps-voice-q").length,
      wha: rowBefore("line1") && { rowBottom: R(rowBefore("line1")).bottom, stemTop: R($("stem1")).top },
      wkl: rowBefore("line3") && { rowBottom: R(rowBefore("line3")).bottom, stemTop: R($("stem3")).top },
      plain: q2 && q2.classList.contains("aps-voice-q") && { top: R(q2).top, qBottom: R($("q")).bottom, bottom: R(q2).bottom, boxTop: R($("box2")).top, h: R(q2).height }
    };
  });
  t("all three boxes got a Read it to me row", r.n === 3);
  t("Asked of Me style: the row sits above the whole line", !!r.wha);
  t("Asked of Me style: the row ends above the stem", !!r.wha && r.wha.rowBottom <= r.wha.stemTop + 0.5);
  t("What Kind of Light style: the row sits above the whole line", !!r.wkl);
  t("What Kind of Light style: the row ends above the stem", !!r.wkl && r.wkl.rowBottom <= r.wkl.stemTop + 0.5);
  t("plain box: the row starts below the question with clear space", !!r.plain && r.plain.top >= r.plain.qBottom + 1);
  t("plain box: the row ends above the box", !!r.plain && r.plain.bottom <= r.plain.boxTop + 0.5);
  t("plain box: the row is a full-size tap target", !!r.plain && r.plain.h >= 40);
  await b.close();
  console.log(fail ? "FAILED " + fail : "all passed");
  process.exit(fail ? 1 : 0);
})();
