// Ending Well v1 + stone.js v1 against story.js on main: every example assembles to its line, the gate, the tap rows,
// the stone chosen by tap or typed, a finished save that sets the stone, a Save-and-stop that does not, restore, the Week 2 line at the door.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
const stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
let page = fs.readFileSync(__dirname + "/ending-well-v1.html", "utf8");
const IDS = Object.assign({ EW_UNIT: "EWU", EW_WHOLE: "EW_W", EW_JSON: "EW_J", EW_HISTORY: "EW_H", STONES_UNIT: "STU", STONES_WHOLE: "ST_W", STONES_JSON: "ST_J", STONES_HISTORY: "ST_H", STORY_COMMIT: "c", STORY_SRI: "sha384-x", STONE_COMMIT: "c", STONE_SRI: "sha384-y" }, fs.existsSync(__dirname + "/ew-ids.json") ? JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8")) : {});
const U = IDS.EW_UNIT, W = IDS.EW_WHOLE, J = IDS.EW_JSON, H = IDS.EW_HISTORY, SU = IDS.STONES_UNIT, SW = IDS.STONES_WHOLE, SJ = IDS.STONES_JSON, SH = IDS.STONES_HISTORY;
for (const k in IDS) page = page.split("{{" + k + "}}").join(IDS[k]);
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const scripts = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const markup = page.replace(/<script>[\s\S]*?<\/script>/g, "");
const LAMENT_VOW = "openEnded1788512589742_293";

function mount(o) {
  o = o || {};
  const html = '<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="pageContent">' + (o.solo ? markup.replace('id="ewRoot" data-mode="cohort"', 'id="ewRoot" data-mode="solo"') : markup) + '</div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/ebook/ending-well" + (o.query || "") });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.getBoundingClientRect = function () { let e = this, shown = true; while (e && e.nodeType === 1) { if (w.getComputedStyle(e).display === "none") { shown = false; break; } e = e.parentNode; } return { top: 0, left: 0, width: shown ? 100 : 0, height: shown ? 40 : 0, right: 100, bottom: 40 }; };
  w.HTMLElement.prototype.scrollIntoView = function () {}; w.scrollBy = function () {};
  w.getUserToken = () => "tok"; w.AP_READER = false;
  Object.defineProperty(w, "innerWidth", { value: o.width || 1200, configurable: true });
  w.matchMedia = (q) => ({ matches: /pointer: coarse|hover: none/.test(q) ? !!o.touch : false });
  w.SpeechSynthesisUtterance = function (text) { this.text = text; }; w.speechSynthesis = { speak() {}, cancel() {} };
  /* the site, mocked: state per unit, init records the unit, PATCH records the answers under that unit */
  const latest = o.latest || {};   // unit -> { answers: {blockId: value} }
  const log = { patches: [], inits: [] }; let lastUnit = null;
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) {
      const u = decodeURIComponent(path.split("objectId=")[1]);
      const l = latest[u];
      return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: l ? { status: "submitted", submittedTimestamp: "2026-10-02T12:00:00Z", answers: Object.keys(l.answers).map(b => ({ blockId: b, answer: { value: l.answers[b] } })) } : null }) });
    }
    if (/submission\/init/.test(path)) { lastUnit = JSON.parse(init.body).objectId; log.inits.push(lastUnit); return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submission: { status: "begun", snapshotId: "snap", id: "s" } }) }); }
    if (/create_form_submission_id/.test(path)) {
      const b = JSON.parse(init.body); const a = {}; b.answers.forEach(x => { a[x.blockId] = x.answer.value; });
      log.patches.push({ unit: lastUnit, answers: a });
      latest[lastUnit] = { answers: a };   // the site now holds it
      return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s" + log.patches.length } }) });
    }
    if (/user_stats/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ me: { first_name: "Test", last_name: "Learner" } }) });
    return Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
  };
  w.eval(scripts[0]);           // the page
  w.eval(story); w.eval(stone); // the engine and the stone, as if loaded
  const cfgScript = scripts[1].replace(/var s = document\.createElement\("script"\);[\s\S]*?document\.head\.appendChild\(s\);\s*/, "start();\n");
  if (!/start\(\);\n\}\)\(\);\s*$/.test(cfgScript)) throw new Error("loader not replaced");
  w.eval(cfgScript);
  return { w, d, log, latest };
}
const type = (w, d, id, v) => { const n = d.getElementById(id); n.value = v; n.dispatchEvent(new w.Event("input", { bubbles: true })); };
const EX = {   // every example, as the words a man would type after the grey opening words
  iam: "tired and grateful. You heard the worst of it and you kept showing up.", sawme: "on the Wednesday I almost didn’t log on.",
  started: "sitting in the truck in the driveway, not ready to go in the house.", toldmyself: "that I had it handled.", nobodyknew: "how long it had been going on.",
  camein: "a screen at midnight and voices telling me I was the only one.", takein: "a walk before the house wakes up and a chapter of John read out loud.", renewed: "the word “father” — it used to mean absence.", growing: "hope. I expect him to show up now.",
  asked: "it to stop.", goddid: "put me in a room with men willing to walk with me.", smallstep: "showing up next Wednesday, whatever this week was.",
  hope: "to be a man my kids can tell the truth to.", ask: "to keep asking me the question, even when I’m fine.", forward: "say goodbye. Thank you. I am taking this with me.", remember: "a call on the first of the month."
};
const TARGET = [
  "ENDING WELL",
  "To the men I walked with, I am tired and grateful. You heard the worst of it and you kept showing up.\nYou saw me on the Wednesday I almost didn’t log on.",
  "When I started, I was sitting in the truck in the driveway, not ready to go in the house.\nWhat I told myself was that I had it handled.\nWhat nobody knew was how long it had been going on.",
  "What came in through my eyes and ears was a screen at midnight and voices telling me I was the only one.\nWhat I take in now is a walk before the house wakes up and a chapter of John read out loud.\nWhat is being renewed in me is the word “father” — it used to mean absence.\nBetween me and God, what is growing is hope. I expect him to show up now.",
  "I asked him for it to stop.\nWhat God did was put me in a room with men willing to walk with me.\nThe small step I can grow by is showing up next Wednesday, whatever this week was.",
  "My hope for the future is to be a man my kids can tell the truth to.\nWhat I ask of you is to keep asking me the question, even when I’m fine.\nGoing forward, with this group, I will say goodbye. Thank you. I am taking this with me.\nWhen the gaps get longer and voices fade, I will remember by a call on the first of the month."
].join("\n\n");

(async () => {
  t("story.js on main is v18", /AP-STORY-MODULE-v18/.test(story.slice(0, 200)));
  t("stone.js is v1", /AP-STONE-v1/.test(stone.slice(0, 100)));
  t("the page carries no name of another person in any example (roles only)", !/\b(Dave|Carl|Mike|Dan|Luis)\b/.test(page) && !/brother/i.test(page.replace(/Suicide & Crisis/, "")));
  t("the fixed data line is on the page, unchanged", page.indexOf("When you press Finish, this chapter is saved to your page — yours to read, change or delete. Ancient Path reads only what you choose to publish.") > 0 || page.indexOf("When you press Finish, this chapter is saved to your page &mdash; yours to read, change or delete. Ancient Path reads only what you choose to publish.") > 0);
  { const { w, d, log } = mount(); await sleep(80);
    t("the engine mounted (Save is on the page) and the stone is configured", !!d.getElementById("apsSave") && w.APStone.configured() && w.ewInstance);
    t("sixteen lines to write, six parts, part 1 shown", d.getElementById("ewCount").textContent === "0 of 16 written" && d.getElementById("ewPartLabel").textContent === "Part 1 of 6" && d.querySelector(".ew-part.is-active").getAttribute("data-part") === "0");
    /* tap rows */
    const row1 = d.getElementById("ew_iam").parentNode.nextElementSibling;
    t("the Doorway row carries John's five first, then The Word for It", row1.classList.contains("ew-words") && Array.from(row1.children).slice(0, 5).map(b => b.textContent).join("|") === "thankful|grateful|sad|still struggling with|hopeful" && row1.children.length > 5 && Array.from(row1.children).map(b => b.textContent).filter(x => x === "hopeful").length === 1);
    Array.from(row1.children).filter(b => b.textContent === "hopeful")[0].click();
    t("tapping a feeling puts it in the box; a second word joins with 'and'", d.getElementById("ew_iam").value === "hopeful" && (Array.from(row1.children).filter(b => b.textContent === "sad")[0].click(), d.getElementById("ew_iam").value === "hopeful and sad"));
    const rowF = d.getElementById("ew_forward").parentNode.nextElementSibling;
    Array.from(rowF.children).filter(b => b.textContent === "say goodbye")[0].click();
    t("the yes-or-no row writes the opening of the line", d.getElementById("ew_forward").value === "say goodbye");
    const rowR = d.getElementById("ew_remember").parentNode.nextElementSibling;
    Array.from(rowR.children).filter(b => b.textContent === "a text")[0].click();
    t("the remember-by row writes the line", d.getElementById("ew_remember").value === "a text");
    const rowG = d.getElementById("ew_growing").parentNode.nextElementSibling;
    t("faith · hope · love under the spirit line", Array.from(rowG.children).map(b => b.textContent).join("|") === "faith|hope|love");
    /* the gate */
    for (const k in EX) if (!/^(renewed|goddid)$/.test(k)) type(w, d, "ew_" + k, EX[k]);
    w.ewShow(5, true); await sleep(10);
    t("at Set a stone with the two gated lines empty, the gate names them and Finish does not open", d.getElementById("ewNext").textContent === "Finish" && /two lines need their words: What is being renewed in me and What God did/.test(d.getElementById("ewGate").textContent) && (d.getElementById("ewNext").click(), !d.getElementById("ewFinish").classList.contains("is-active")));
    t("only written What God did lines are offered to tap (two of three so far)", d.querySelectorAll(".ew-stone-line").length === 2 && !/will appear here/.test(d.querySelector(".ew-stone-pick").textContent));
    type(w, d, "ew_renewed", EX.renewed); type(w, d, "ew_goddid", EX.goddid); w.ewShow(5, true); await sleep(10);
    t("the gate clears", d.getElementById("ewGate").textContent === "");
    /* the stone */
    const lines = d.querySelectorAll(".ew-stone-line");
    t("the three What God did lines are there to tap", lines.length === 3 && lines[1].textContent === "What God did was put me in a room with men willing to walk with me.");
    lines[1].click(); await sleep(5);
    t("a tapped line is his stone, word for word", w.ewStoneText() === "What God did was put me in a room with men willing to walk with me." && d.querySelectorAll(".ew-stone-line")[1].classList.contains("is-on"));
    type(w, d, "ew_stone", "Do the next right thing."); await sleep(5);
    t("his own words replace the tapped line", w.ewStoneText() === "Do the next right thing." && !d.querySelector(".ew-stone-line.is-on"));
    type(w, d, "ew_stone", ""); d.querySelectorAll(".ew-stone-line")[1].click(); await sleep(5);
    /* finish and the assembled piece */
    d.getElementById("ewNext").click(); await sleep(10);
    t("Finish opens the finished view and the step row (Back · Save · Finish) leaves it", d.getElementById("ewFinish").classList.contains("is-active") && d.getElementById("ewNav").classList.contains("ew-off") && /\.ew-root \.ew-nav\.ew-off\{display:none !important\}/.test(page));
    t("every example assembles to its line, in order, nothing spliced, the stone and the tail last", w.ewDocument() === TARGET + "\n\nMy stone: What God did was put me in a room with men willing to walk with me.\n\nWritten at the end of Breaking Free.");
    const fin = d.getElementById("ewFinal").textContent;
    t("the finished view shows the title, the stone and the tail", /^ENDING WELL|Ending Well/.test(fin) && /My stone: What God did was/.test(fin) && /Written at the end of Breaking Free\./.test(fin));
    t("the stone box under the piece says it is set when he saves", d.getElementById("ewStoneShown").style.display === "" && /set on your page when you save/.test(d.getElementById("ewStoneNote").textContent));
    /* a finished save sets the stone */
    d.getElementById("apsSave").click(); await sleep(200);
    t("Save lands: the piece goes to its own form with the whole text (tail added once), the answers, and one history entry", log.patches.length === 2 && log.patches[0].unit === U && log.patches[0].answers[W] === TARGET + "\n\nMy stone: What God did was put me in a room with men willing to walk with me.\n\nWritten at the end of Breaking Free." && JSON.parse(log.patches[0].answers[H]).length === 1 && JSON.parse(log.patches[0].answers[J]).goddid === EX.goddid && JSON.parse(JSON.parse(log.patches[0].answers[J]).meta).finished === true);
    const st = log.patches[1];
    t("then the stone goes to the Stones form: the line, its record, one entry tied to the piece", st && st.unit === SU && st.answers[SW] === "What God did was put me in a room with men willing to walk with me." && JSON.parse(st.answers[SJ]).from === "ending-well" && JSON.parse(st.answers[SH]).length === 1 && JSON.parse(st.answers[SH])[0].answers.piece === JSON.parse(log.patches[0].answers[H])[0].id);
    t("the page says the stone is set", d.getElementById("ewStoneNote").textContent === "Set on your page." && d.getElementById("apsSave").textContent === "Saved");
    /* save again after a change: one stone, not two */
    type(w, d, "ew_hope", "to be a man my kids can tell the truth to, every time."); await sleep(20);
    d.getElementById("apsSave").click(); await sleep(200);
    t("a second finished save replaces the piece's history entry and the same stone — no duplicates", log.patches.length === 4 && JSON.parse(log.patches[2].answers[H]).length === 1 && JSON.parse(log.patches[3].answers[SH]).length === 1);
    /* the keepsake body */
    const JsPDF = function () { this.lines = []; this.internal = { pageSize: { getWidth: () => 595, getHeight: () => 842 } }; };
    JsPDF.prototype = { setFont() {}, setFontSize() {}, setTextColor() {}, setDrawColor() {}, setLineWidth() {}, line() {}, addPage() {}, getTextWidth: () => 10, splitTextToSize: (s) => [s], text(s) { this.lines.push(s); } };
    const doc = w.ewKeepsake(JsPDF, "Test Learner");
    t("the keepsake carries the course, the title, every stanza line, the stone and the byline", doc.lines[0] === "BREAKING FREE" && doc.lines[1] === "Ending Well" && doc.lines.includes("What God did was put me in a room with men willing to walk with me.") && doc.lines.includes("My stone: What God did was put me in a room with men willing to walk with me.") && /^Written by Test Learner at the end of Breaking Free · /.test(doc.lines[doc.lines.length - 2]));
  }
  { const { w, d, log } = mount(); await sleep(80);
    type(w, d, "ew_iam", "tired"); w.ewShow(1, true); type(w, d, "ew_started", "in the truck");
    d.getElementById("ewSaveNow").click(); await sleep(200);
    t("Save and stop for now: meta says not finished, the piece is held, the Stones form is never touched", log.patches.length === 1 && log.patches[0].unit === U && JSON.parse(JSON.parse(log.patches[0].answers[J]).meta).finished === false && JSON.parse(log.patches[0].answers[H]).length === 0);
  }
  { const held = {}; held[U] = { answers: {} }; held[U].answers[W] = "x"; held[U].answers[J] = JSON.stringify({ iam: "tired", started: "in the truck", meta: JSON.stringify({ step: 1, finished: false }) }); held[U].answers[H] = "[]";
    const { w, d } = mount({ query: "?open=1", latest: held }); await sleep(200);
    t("coming back to a held piece lands at the part he stopped on, words in the boxes", d.getElementById("ew_started").value === "in the truck" && d.querySelector(".ew-part.is-active").getAttribute("data-part") === "1" && !d.getElementById("ewFinish").classList.contains("is-active"));
  }
  { const lam = { "6a9acf1a4a65fe7bd70c9743": { answers: { [LAMENT_VOW]: "I will tell the men what you did, even if my voice shakes." } } };
    const { d } = mount({ latest: lam }); await sleep(120);
    t("a man who saved a lament sees his ninth line at the door, one line, no comment", d.getElementById("ewLament").style.display === "" && d.getElementById("ewLament").textContent === "In Week 2 you wrote: “I will tell the men what you did, even if my voice shakes.”");
  }
  { const { d } = mount(); await sleep(120);
    t("a man with no lament sees nothing at the door", d.getElementById("ewLament").style.display === "none");
  }
  { const { w, d } = mount({ touch: true, width: 390 }); await sleep(80);
    type(w, d, "ew_iam", "tired"); await sleep(10);
    t("on a phone the page mounts and takes words without error", d.getElementById("ew_iam").value === "tired" && !!d.getElementById("apsSave"));
  }
  /* the solo setting: the self-directed course, the men he will walk with */
  { const { w, d } = mount({ solo: true }); await sleep(80);
    const stem = k => d.getElementById("ew_" + k).previousElementSibling.textContent;
    const row = k => Array.from(d.getElementById("ew_" + k).parentNode.nextElementSibling.children).map(b => b.textContent);
    const prompt = k => d.getElementById("ew_" + k).parentNode.parentNode.querySelector(".ew-slot-prompt").textContent;
    const ex = k => d.getElementById("ew_" + k).parentNode.parentNode.querySelector(".ew-slot-shape").textContent;
    t("solo: the lede speaks to the men he will walk with", w.ewMode === "solo" && /^Twelve weeks, on your own\. This is where you tell the men you will walk with/.test(d.getElementById("ewLede").textContent));
    t("solo: the Doorway carries the Week 12 charge, before he has met them", /look for, pray for, and actively seek relationship and community with other men/.test(d.querySelector(".ew-part-frame").textContent) && /before you have met them/.test(d.querySelector(".ew-part-frame").textContent));
    t("solo: the two Doorway lines", stem("iam") === "To the men I will walk with, I am" && /You haven\u2019t heard any of this yet/.test(ex("iam")) && stem("sawme") === "What you will see in me is" && /nobody watching/.test(ex("sawme")));
    t("solo: What God did keeps the long view and the men he will find", /and I am going to find them/.test(prompt("goddid")) && /keep me at it for twelve weeks with nobody watching/.test(ex("goddid")) && /finding one man and telling him I did this/.test(ex("smallstep")));
    t("solo: the ask, the yes-or-no, and remember-by", stem("ask") === "What I will ask of you is" && stem("forward") === "Going forward, I will" && row("forward").join("|") === "find men|keep walking on my own for now" && stem("remember") === "When the gaps get longer, I will remember by" && row("remember").join("|") === "reading this again|a text to one man|coffee with one man|a meeting");
    t("solo: the rows still write the line", (Array.from(d.getElementById("ew_forward").parentNode.nextElementSibling.children)[0].click(), d.getElementById("ew_forward").value === "find men"));
    t("solo: the cohort words are gone from the page a solo man sees", !/with this group|the men I walked with|voices fade|the Wednesdays are done/.test(d.getElementById("ewParts").textContent + d.getElementById("ewLede").textContent));
    type(w, d, "ew_iam", "tired and hopeful."); type(w, d, "ew_renewed", "the word father."); type(w, d, "ew_goddid", "kept me at it."); await sleep(10);
    t("solo: the piece assembles with the solo stems, same title and tail", w.ewDocument() === "ENDING WELL\n\nTo the men I will walk with, I am tired and hopeful.\n\nWhat is being renewed in me is the word father.\n\nWhat God did was kept me at it.\n\nGoing forward, I will find men.\n\nWritten at the end of Breaking Free.");
    t("the unchanged parts are the same words in both settings", stem("started") === "When I started, I was" && stem("camein") === "What came in through my eyes and ears was" && stem("hope") === "My hope for the future is");
  }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
