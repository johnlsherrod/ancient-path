// v18.3: on a phone, "Read it to me" never prints on top of a pinned sentence stem (Asked of Me's "I came from"),
// and a plain question-then-box still gets the row between them with room above and below.
const fs = require("fs"), path = require("path");
const { chromium } = require("playwright");
const file = process.argv[2] || path.join(__dirname, "story.js");
let pass = 0, fail = 0; const t = (n, ok) => { console.log((ok ? "ok   " : "FAIL ") + n); ok ? pass++ : fail++; };
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROMIUM || "/opt/pw-browsers/chromium" });
  const c = await b.newContext({ viewport: { width: 390, height: 800 }, hasTouch: true, isMobile: true });
  const p = await c.newPage();
  await p.addInitScript(() => { window.SpeechRecognition = function () {}; window.speechSynthesis = { speak() {}, cancel() {} }; window.SpeechSynthesisUtterance = function () {}; });
  await p.setContent(`<html><head><style>
    .wha-line{position:relative}.wha-stem{position:absolute;top:0;left:0;font:17px/25px Georgia}
    .wha-rest{display:block;width:100%;font:17px/25px Georgia;text-indent:99px;height:26px;border:1px solid #999}
    #plain p{margin:0 0 6px;font:600 20px/1.1 Georgia}
  </style></head><body style="margin:16px"><div id="wha"><p>Where you came from.</p><div class="wha-line" id="line"><span class="wha-stem" id="stem">I came from</span><textarea class="wha-rest" id="box" rows="1"></textarea></div></div>
  <div id="plain"><p id="q">Where did you first hear the word home?</p><textarea id="box2" rows="3" style="width:100%"></textarea></div></body></html>`);
  await p.addScriptTag({ path: file });
  await p.evaluate(() => { window.APStory.voice.attach(document.querySelectorAll("textarea")); });
  const r = await p.evaluate(() => {
    const R = e => e.getBoundingClientRect();
    const rows = document.querySelectorAll(".aps-voice-q");
    const stem = R(document.getElementById("stem")), line = document.getElementById("line");
    const r1 = rows[0] && R(rows[0]), r2 = rows[1] && R(rows[1]);
    return { n: rows.length, r1, stem, lineTop: R(line).top, prevIsRow: line.previousElementSibling === rows[0],
             q: R(document.getElementById("q")), r2, box2: R(document.getElementById("box2")) };
  });
  t("both boxes got a Read it to me row", r.n === 2);
  t("stem card: the row sits above the whole line, not inside it", r.prevIsRow);
  t("stem card: the row ends above the stem (no overprint)", r.r1.bottom <= r.stem.top + 0.5);
  t("plain card: the row starts below the question with clear space", r.r2.top >= r.q.bottom + 1);
  t("plain card: the row ends above the box", r.r2.bottom <= r.box2.top + 0.5);
  t("plain card: the row is a full-size tap target", r.r2.height >= 40);
  await b.close();
  console.log(fail ? "FAILED " + fail : "all passed");
  process.exit(fail ? 1 : 0);
})();
