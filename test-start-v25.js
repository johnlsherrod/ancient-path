// Your Page v25: the Ending Well card appears once something is saved, Your stones appears once a stone is set (newest first), nothing else breaks.
const { JSDOM, VirtualConsole } = require("jsdom"); const fs = require("fs");
let html = fs.readFileSync(__dirname + "/pages/start-v25.html", "utf8");
const IDS = Object.assign({ EW_UNIT: "EWU", EW_WHOLE: "EW_W", EW_JSON: "EW_J", EW_PAGE: "ebookEW-slug", BF_EW_UNIT: "BFU", BF_COURSE_ID: "BFC", STONES_UNIT: "STU", STONES_HISTORY: "ST_H" }, fs.existsSync(__dirname + "/ew-ids.json") ? JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8")) : {});
for (const k in IDS) html = html.split("{{" + k + "}}").join(IDS[k]);
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const errors = [];
const vc = new VirtualConsole(); vc.on("jsdomError", e => errors.push(String(e && e.message || e)));
function latest(answers) { return { status: "submitted", submittedTimestamp: "2026-10-02T12:00:00Z", answers: Object.keys(answers).map(b => ({ blockId: b, answer: { value: answers[b] } })) }; }
(async () => {
  const stones = [{ id: "a", when: "2026-09-01T00:00:00Z", text: "Till now, the LORD has kept me.", answers: { pieceTitle: "Set a Stone" } }, { id: "b", when: "2026-10-02T13:00:00Z", text: "What God did was put me in a room with men willing to walk with me.", answers: { pieceTitle: "Ending Well" } }];
  const dom = new JSDOM('<!doctype html><html><head><meta name="csrf-token" content="x"></head><body class="ap-home">' + html + '</body></html>', { runScripts: "dangerously", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/start", virtualConsole: vc, beforeParse(w) {
    w.getUserToken = () => "tok";
    w.fetch = (path) => {
      const j = (o) => Promise.resolve({ ok: true, json: () => Promise.resolve(o) });
      if (/assessment\/state/.test(path)) {
        const u = decodeURIComponent(path.split("objectId=")[1]);
        if (u === IDS.EW_UNIT) { const a = {}; a[IDS.EW_WHOLE] = "ENDING WELL\n\nTo the men I walked with, I am tired and grateful.\nYou saw me on the Wednesday.\n\nWritten at the end of Breaking Free."; a[IDS.EW_JSON] = JSON.stringify({ iam: "tired", meta: JSON.stringify({ step: 5, finished: true }) }); return j({ success: true, latestSubmission: latest(a) }); }
        if (u === IDS.STONES_UNIT) { const a = {}; a[IDS.STONES_HISTORY] = JSON.stringify(stones); return j({ success: true, latestSubmission: latest(a) }); }
        return j({ success: true, latestSubmission: null });
      }
      if (/user_stats/.test(path)) return j({ me: { first_name: "Test", last_name: "Learner", username: "test" } });
      return j(null);
    };
  } });
  const d = dom.window.document; await sleep(400);
  const ew = d.querySelector('[data-story="ew"]');
  t("the Ending Well card is shown once a piece is saved, as Finished, Open it to the clean page and Write another like the other course pieces", ew && ew.style.display === "" && /^Finished/.test(ew.querySelector(".ap-card-state").textContent) && ew.querySelector(".ap-card-actions a").getAttribute("href") === "/ebook/" + IDS.EW_PAGE + "?open=1" && /Write another/.test(ew.textContent));
  t("the card quotes his first two lines", ew.querySelector(".ap-card-quote") && ew.querySelector(".ap-card-quote").textContent === "To the men I walked with, I am tired and grateful.\nYou saw me on the Wednesday.");
  const st = d.querySelector('[data-story="stones"]');
  t("Your stones is shown with two stones, newest first, each with its month and where it came from", st && st.style.display === "" && st.querySelectorAll(".ap-stone").length === 2 && st.querySelector(".ap-stone-text").textContent === stones[1].text && /October 2026 · from Ending Well/.test(st.querySelector(".ap-stone-meta").textContent) && st.querySelector(".ap-card-state").textContent === "2 stones set");
  t("the other course cards stay hidden with nothing saved", d.querySelector('[data-story="arc"]').style.display === "none" && d.querySelector('[data-story="hia"]').style.display === "none");
  t("the chronicle heading reads as before", d.getElementById("apStoriesHead").textContent === "Your chronicle");
  t("Breaking Free is not offered to a man who is not in it; the Coming soon line names Walk With Me only", !/Breaking Free/.test(d.getElementById("apCourses").textContent) && d.getElementById("apSoon").textContent === "Coming soon: Walk With Me.");
  t("no script errors on the page", errors.length === 0 || (console.log(errors), false));
  /* a man in the cohort */
  const dom2 = new JSDOM('<!doctype html><html><head><meta name="csrf-token" content="x"></head><body class="ap-home">' + html + '</body></html>', { runScripts: "dangerously", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/start", virtualConsole: vc, beforeParse(w) {
    w.getUserToken = () => "tok";
    w.fetch = (path) => { const j = (o) => Promise.resolve({ ok: true, json: () => Promise.resolve(o) });
      if (/assessment\/state/.test(path)) return j({ success: true, latestSubmission: null });
      if (/user_stats/.test(path)) return j({ me: { first_name: "Test" }, userCourses: ["student-course"] });
      return j(null); };
  } });
  const d2 = dom2.window.document; await sleep(400);
  const bf = Array.from(d2.querySelectorAll("#apCourses .ap-course")).filter(c => /Breaking Free/.test(c.textContent))[0];
  t("a man in the cohort sees Breaking Free as his, with Continue into the course", bf && /Yours/.test(bf.querySelector(".ap-course-state").textContent) && bf.querySelector("a").getAttribute("href") === "/path-player?courseid=student-course" && bf.querySelector("a").textContent === "Continue");
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
