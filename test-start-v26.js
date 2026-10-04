// Your Page v26: as v25, and Your stones is drawn by stone.js v2 — a v1 stone and a v2 stone side by side, newest first, the three lines, the date and where from, the question on the day the return is due, the offer line, Set another.
const { JSDOM, VirtualConsole } = require("jsdom"); const fs = require("fs");
let html = fs.readFileSync(__dirname + "/pages/start-v26.html", "utf8");
const IDS = Object.assign({ EW_UNIT: "EWU", EW_WHOLE: "EW_W", EW_JSON: "EW_J", EW_PAGE: "ebookEW-slug", BF_EW_UNIT: "BFU", BF_COURSE_ID: "BFC", STONES_UNIT: "STU", STONES_HISTORY: "ST_H" }, fs.existsSync(__dirname + "/ew-ids.json") ? JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8")) : {});
for (const k in IDS) html = html.split("{{" + k + "}}").join(IDS[k]);
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const errors = [];
const storySrc = fs.readFileSync(__dirname + "/story.js", "utf8"), stoneSrc = fs.readFileSync(__dirname + "/stone.js", "utf8");
const vc = new VirtualConsole(); vc.on("jsdomError", e => errors.push(String(e && e.message || e)));
function latest(answers) { return { status: "submitted", submittedTimestamp: "2026-10-02T12:00:00Z", answers: Object.keys(answers).map(b => ({ blockId: b, answer: { value: answers[b] } })) }; }
(async () => {
  const stones = [
    { id: "a", when: "2026-06-01T13:00:00Z", text: "What God did was put me in a room with men willing to walk with me.", answers: { text: "What God did was put me in a room with men willing to walk with me.", from: "ending-well", piece: "p1", pieceTitle: "Ending Well" } },
    { id: "b", when: "2026-10-02T13:00:00Z", text: "x", answers: { text: "kept me.", stonefor: "my son", meaning: "a new discipline", from: "set-a-stone", pieceTitle: "Set a Stone", returnAt: "2027-01-02", returns: "[]", rid: "", shown: "" } }
  ];
  const dom = new JSDOM('<!doctype html><html><head><meta name="csrf-token" content="x"></head><body class="ap-home">' + html + '</body></html>', { runScripts: "dangerously", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/start", virtualConsole: vc, beforeParse(w) {
    w.getUserToken = () => "tok";
    w.eval(storySrc); w.eval(stoneSrc);
    w.fetch = (path) => {
      const j = (o) => Promise.resolve({ ok: true, json: () => Promise.resolve(o) });
      if (/assessment\/state/.test(path)) {
        const u = decodeURIComponent(path.split("objectId=")[1]);
        if (u === IDS.EW_UNIT) { const a = {}; a[IDS.EW_WHOLE] = "ENDING WELL\n\nTo the men I walked with, I am tired and grateful.\nYou saw me on the Wednesday.\n\nWritten at the end of Breaking Free."; a[IDS.EW_JSON] = JSON.stringify({ iam: "tired", meta: JSON.stringify({ step: 5, finished: true }) }); return j({ success: true, latestSubmission: latest(a) }); }
        if (u === IDS.STONES_UNIT) { const a = {}; a[IDS.STONES_HISTORY] = JSON.stringify(stones); return j({ success: true, latestSubmission: latest(a) }); }
        return j({ success: true, latestSubmission: null });
      }
      if (/user_stats/.test(path)) return j({ me: { id: "u1234567890", first_name: "Test", last_name: "Learner", username: "test", email: "t@x.com" } });
      if (/status=/.test(path)) return j({ pieces: [] });
      return j(null);
    };
  } });
  const d = dom.window.document; await sleep(400);
  const ew = d.querySelector('[data-story="ew"]');
  t("v26.1: the card's pile stacks — the three-stops row layout is scoped away from it", /\.ap-home \.ap-card \.ap-stones \{ display: block;/.test(html) && /\.ap-home \.ap-card \.ap-stones::before \{ display: none; \}/.test(html) && /AP-HOME-v26 \(v26\.2, 4 Oct: stone\.js v2\.2\) \(v26\.1/.test(html));
  t("the Ending Well card is shown once a piece is saved, as Finished, Open it to the clean page and Write another like the other course pieces", ew && ew.style.display === "" && /^Finished/.test(ew.querySelector(".ap-card-state").textContent) && ew.querySelector(".ap-card-actions a").getAttribute("href") === "/ebook/" + IDS.EW_PAGE + "?open=1" && /Write another/.test(ew.textContent));
  t("the card quotes his first two lines", ew.querySelector(".ap-card-quote") && ew.querySelector(".ap-card-quote").textContent === "To the men I walked with, I am tired and grateful.\nYou saw me on the Wednesday.");
  const st = d.querySelector('[data-story="stones"]');
  t("Your stones is shown with two stones, newest first", st && st.style.display === "" && st.querySelectorAll(".ap-stone").length === 2 && /2 stones set/.test(st.querySelector(".ap-card-state").textContent));
  const s0 = st.querySelectorAll(".ap-stone")[0], s1 = st.querySelectorAll(".ap-stone")[1];
  t("the Set a Stone stone: three lines with their opening words, the date and where from", s0.querySelectorAll(".ap-stone-text").length === 3 && s0.querySelectorAll(".ap-stone-text")[0].textContent === "This stone is for my son" && s0.querySelectorAll(".ap-stone-text")[1].textContent === "The LORD has kept me." && s0.querySelectorAll(".ap-stone-text")[2].textContent === "What this stone means to me is a new discipline" && /October 2, 2026 · from Set a Stone/.test(s0.querySelector(".ap-stone-meta").textContent));
  t("the v1 Ending Well stone: its one line, whole, nothing invented", s1.querySelectorAll(".ap-stone-text").length === 1 && s1.querySelector(".ap-stone-text").textContent === stones[0].text && /June 1, 2026 · from Ending Well/.test(s1.querySelector(".ap-stone-meta").textContent));
  t("the v1 stone is past its three months: the one question shows; the newer stone has none", s1.querySelector(".ap-stone-ask-q") && s1.querySelector(".ap-stone-ask-q").textContent === "What does it mean to you now?" && !s0.querySelector(".ap-stone-ask"));
  t("each stone carries the offer line, No name the default", st.querySelectorAll(".ap-stone-offer-open").length === 2 && [...st.querySelectorAll(".ap-stone-offer-open")].every(b => b.textContent === "Set it where others can see it") && st.querySelector('input[value="none"]').checked);
  t("Set another leads to the piece", st.querySelector(".ap-stone-another").getAttribute("href") === "/set-a-stone");
  t("the other course cards stay hidden with nothing saved", d.querySelector('[data-story="arc"]').style.display === "none" && d.querySelector('[data-story="hia"]').style.display === "none");
  t("the chronicle heading reads as before", d.getElementById("apStoriesHead").textContent === "Your chronicle");
  t("Breaking Free is not offered to a man who is not in it; the Coming soon line names Walk With Me only", !/Breaking Free/.test(d.getElementById("apCourses").textContent) && d.getElementById("apSoon").textContent === "Coming soon: Walk With Me.");
  t("no script errors on the page", errors.length === 0 || (console.log(errors), false));
  /* a man in the cohort */
  const dom2 = new JSDOM('<!doctype html><html><head><meta name="csrf-token" content="x"></head><body class="ap-home">' + html + '</body></html>', { runScripts: "dangerously", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/start", virtualConsole: vc, beforeParse(w) {
    w.getUserToken = () => "tok";
    w.eval(storySrc); w.eval(stoneSrc);
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
