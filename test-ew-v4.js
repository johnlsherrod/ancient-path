// Ending Well v4 + stone.js v2 against story.js on main: as v3, and the stone kept whole (the meaning line, where it comes from, the record with who it is for and what it means, the offer after Save).
// v3 read: every example assembles to its line, the three bridges land after the lines they follow,
// the look-backs quote his own words, the gate, the tap rows (openings, where renewal is happening, drift + The Word for It, the voice, who the stone is for),
// the stone chosen by tap or typed with its return date, a finished save that sets the stone, a Save-and-stop that does not, restore, the Week 2 line at the door, both settings.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
const stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
let page = fs.readFileSync(__dirname + "/ending-well-v4.html", "utf8");
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
const EX = {   // every example, as the words a man would type after the grey opening words (a bridge has none)
  iam: "tired and grateful. You heard the worst of it and you kept showing up.", sawinyou: "men who told the truth before it was safe to.",
  started: "sitting in the truck in the driveway, not ready to go in the house.", toldmyself: "that I had it handled.", nobodyknew: "how long it had been going on.",
  camein: "a screen at midnight and voices telling me I was the only one.", takein: "a walk before the house wakes up and a chapter of John read out loud.", renewed: "how I see my father — the word used to mean absence.", growing: "hope. I expect him to show up now.",
  bridge1: "What happened next was a week I almost skipped, and didn’t.",
  sawme: "the night I said the thing I had never said out loud, and nobody looked away.", expected: "the room to go cold.", instead: "a man said “me too.”", asked: "it to stop.", goddid: "put me in a room with men willing to walk with me.",
  bridge2: "It took weeks, but one night I said it out loud before I could talk myself out of it.", bridge3: "While that was going on, I kept asking, and for a month nothing changed except that I kept showing up.",
  hope: "to be a man my kids can tell the truth to.", miss: "knowing that once a week someone would ask.", ask: "to keep asking me the question, even when I’m fine.", forward: "say goodbye. Thank you. I am taking this with me.", smallstep: "one chapter of John before my phone.", held: "it is still happening four weeks from now.", drift: "my phone goes quiet and I tell myself I’m fine.", voice: "“They heard the worst and stayed.”", answer: "a text to one man, that day.",
  stonefor: "my son, for when he asks.", meaning: "more hope"
};
const TARGET = "ENDING WELL\n\nTo the men I walked with, I am tired and grateful. You heard the worst of it and you kept showing up.\nWhat I saw in you was men who told the truth before it was safe to.\n\nWhere I started\n\nWhen I started, I was sitting in the truck in the driveway, not ready to go in the house.\nWhat I told myself was that I had it handled.\nWhat nobody knew was how long it had been going on.\n\nBetween where I started and what I take in now:\nWhat happened next was a week I almost skipped, and didn’t.\n\nWhat changed\n\nWhat came in through my eyes and ears was a screen at midnight and voices telling me I was the only one.\nWhat I take in now is a walk before the house wakes up and a chapter of John read out loud.\nWhat is being renewed in me is how I see my father — the word used to mean absence.\nBetween me and God, what is growing is hope. I expect him to show up now.\n\nBetween what nobody knew and being seen:\nIt took weeks, but one night I said it out loud before I could talk myself out of it.\n\nWhat God did\n\nYou saw me the night I said the thing I had never said out loud, and nobody looked away.\nWhat I expected was the room to go cold.\nWhat happened instead was a man said “me too.”\nI asked him for it to stop.\n\nBetween the asking and the answer:\nWhile that was going on, I kept asking, and for a month nothing changed except that I kept showing up.\n\nWhat God did was put me in a room with men willing to walk with me.\n\nWhat I take with me\n\nMy hope for the future is to be a man my kids can tell the truth to.\nWhat I will miss is knowing that once a week someone would ask.\nWhat I ask of you is to keep asking me the question, even when I’m fine.\nGoing forward, with this group, I will say goodbye. Thank you. I am taking this with me.\nThe one small thing I will try this month is one chapter of John before my phone.\nI’ll know it has held when it is still happening four weeks from now.\nI’ll know I’ve drifted when my phone goes quiet and I tell myself I’m fine.\nThe voice that calls me back says “They heard the worst and stayed.”\nI will answer it by a text to one man, that day.";
const STONE = "The stone I set\nWhat God did was put me in a room with men willing to walk with me.\nThis stone is for my son, for when he asks.\nWhat this stone means to me is more hope.";

(async () => {
  t("story.js on main is v18", /AP-STORY-MODULE-v18/.test(story.slice(0, 200)));
  t("stone.js is v2", /AP-STONE-v2/.test(stone.slice(0, 100)));
  t("the page carries no name of another person in any example (roles only)", !/\b(Dave|Carl|Mike|Dan|Luis)\b/.test(page) && !/brother/i.test(page.replace(/Suicide & Crisis/, "")));
  t("no Wednesday anywhere a man reads, in either setting; the twelve weeks are the unit", !/Wednesday/.test(page.replace(/<!--[\s\S]*?-->/, "")));
  t("John 1:38 (ESV) stands over the hope; Joshua 4:6–7 over the stone; Romans 12:2, 1 Corinthians 13:13 and Jeremiah 31:13 stay", /“What are you seeking\?” — John 1:38/.test(page) && /What do those stones mean to you\?’ then you shall tell them… So these stones shall be to the people of Israel a memorial forever\. — Joshua 4:6–7/.test(page) && /Romans 12:2/.test(page) && /1 Corinthians 13:13/.test(page) && /Jeremiah 31:13/.test(page));
  t("the fixed data line is on the page, unchanged", page.indexOf("When you press Finish, this chapter is saved to your page — yours to read, change or delete. Ancient Path reads only what you choose to publish.") > 0 || page.indexOf("When you press Finish, this chapter is saved to your page &mdash; yours to read, change or delete. Ancient Path reads only what you choose to publish.") > 0);
  { const { w, d, log } = mount(); await sleep(80);
    t("the engine mounted (Save is on the page) and the stone is configured", !!d.getElementById("apsSave") && w.APStone.configured() && w.ewInstance);
    t("twenty-eight lines to write, eight steps, step 1 shown", d.getElementById("ewCount").textContent === "0 of 28 written" && d.getElementById("ewPartLabel").textContent === "Part 1 of 8" && d.querySelector(".ew-part.is-active").getAttribute("data-part") === "0");
    /* tap rows */
    const row1 = d.getElementById("ew_iam").parentNode.nextElementSibling;
    t("the Doorway row carries John's five first, then The Word for It", row1.classList.contains("ew-words") && Array.from(row1.children).slice(0, 5).map(b => b.textContent).join("|") === "thankful|grateful|sad|still struggling with|hopeful" && row1.children.length > 5 && Array.from(row1.children).map(b => b.textContent).filter(x => x === "hopeful").length === 1);
    Array.from(row1.children).filter(b => b.textContent === "hopeful")[0].click();
    t("tapping a feeling puts it in the box; a second word joins with 'and'", d.getElementById("ew_iam").value === "hopeful" && (Array.from(row1.children).filter(b => b.textContent === "sad")[0].click(), d.getElementById("ew_iam").value === "hopeful and sad"));
    const rowF = d.getElementById("ew_forward").parentNode.nextElementSibling;
    Array.from(rowF.children).filter(b => b.textContent === "say goodbye")[0].click();
    t("the yes-or-no row writes the opening of the line", d.getElementById("ew_forward").value === "say goodbye");
    const rowA = d.getElementById("ew_answer").parentNode.nextElementSibling;
    Array.from(rowA.children).filter(b => b.textContent === "a text")[0].click();
    t("the answer-by row writes the line", d.getElementById("ew_answer").value === "a text");
    const rowT = d.getElementById("ew_takein").parentNode.nextElementSibling;
    t("the disciplines row carries Walk With Me's twelve, inward then outward then corporate, and writes the line", Array.from(rowT.children).map(b => b.textContent).join("|") === "meditation|prayer|fasting|study|simplicity|solitude|submission|service|confession|worship|guidance|celebration" && (rowT.children[1].click(), rowT.children[3].click(), d.getElementById("ew_takein").value === "prayer and study") && (type(w, d, "ew_takein", ""), true));
    const rowW = d.getElementById("ew_renewed").parentNode.nextElementSibling;
    t("the renewal row names where it is happening, nine places, and writes the line", rowW.children.length === 9 && rowW.children[1].textContent === "how I see my father" && (rowW.children[1].click(), d.getElementById("ew_renewed").value === "how I see my father"));
    type(w, d, "ew_renewed", "");
    const rowD = d.getElementById("ew_drift").parentNode.nextElementSibling;
    t("the drift row carries the six signs, then The Word for It", Array.from(rowD.children).slice(0, 6).map(b => b.textContent).join("|") === "a missed week|a quiet phone|a bad night|“I’m fine”|the old screen|a long silence" && rowD.children.length > 6 && Array.from(rowD.children).some(b => b.textContent === "ashamed"));
    const rowV = d.getElementById("ew_voice").parentNode.nextElementSibling;
    t("the voice row carries the four lines", Array.from(rowV.children).map(b => b.textContent).join("|") === "“You’re not alone in this.”|“Come back.”|“Do the next right thing.”|“They heard the worst and stayed.”");
    const rowS = d.getElementById("ew_stonefor").parentNode.nextElementSibling;
    const rowM = d.getElementById("ew_meaning").parentNode.nextElementSibling;
    t("v4: John's own meaning line is the example under the stone box", d.getElementById("ew_meaning").parentNode.parentNode.textContent.indexOf("What this stone means to me is surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own.") !== -1);
    t("v4: What this stone means to me: six meanings", rowM.children.length === 6 && rowM.children[0].textContent === "a rescue" && rowM.children[5].textContent === "a sacrifice");
    rowM.children[0].click(); await sleep(5);
    t("v4: tap a meaning: the line fills and says where it comes from", d.getElementById("ew_meaning").value.indexOf("a rescue") === 0 && /1 Samuel 7:12/.test(d.getElementById("ewWhere_meaning").textContent));
    type(w, d, "ew_meaning", ""); await sleep(5);
    t("This stone is for: nine roles, no names", rowS.children.length === 9 && rowS.children[0].textContent === "my son" && rowS.children[8].textContent === "someone who will ask one day");
    /* openings on a bridge */
    const rowB = d.getElementById("ew_bridge1").parentNode.nextElementSibling;
    type(w, d, "ew_bridge1", "a week I almost skipped, and didn’t.");
    Array.from(rowB.children).filter(b => b.textContent === "What happened next was")[0].click();
    t("an opening goes in front of his words; tapping it again takes it off", d.getElementById("ew_bridge1").value === "What happened next was a week I almost skipped, and didn’t." && (Array.from(rowB.children).filter(b => b.textContent === "What happened next was")[0].click(), d.getElementById("ew_bridge1").value === "a week I almost skipped, and didn’t."));
    /* look-backs */
    t("a bridge shows the two lines it joins under story labels (Then / Now, Hidden / Seen, Asked / Answered), and says what to write first when one is missing", d.getElementById("ewLook_bridge1_a").querySelector(".ew-look-label").textContent === "Then" && d.getElementById("ewLook_bridge1_b").querySelector(".ew-look-label").textContent === "Now" && d.getElementById("ewLook_bridge2_a").querySelector(".ew-look-label").textContent === "Hidden" && d.getElementById("ewLook_bridge2_b").querySelector(".ew-look-label").textContent === "Seen" && d.getElementById("ewLook_bridge3_a").querySelector(".ew-look-label").textContent === "Asked" && d.getElementById("ewLook_bridge3_b").querySelector(".ew-look-label").textContent === "Answered" && d.getElementById("ewLook_bridge1_a").querySelector(".ew-look-text").textContent === "Write “When I started, I was…” first.");
    const rowGold = d.getElementById("ew_sawinyou").parentNode.nextElementSibling;
    t("What I saw in you: eight words for the gold, and the line writes", rowGold.children.length === 8 && rowGold.children[0].textContent === "courage" && rowGold.children[7].textContent === "the way you listened" && (rowGold.children[1].click(), d.getElementById("ew_sawinyou").value === "honesty") && (type(w, d, "ew_sawinyou", ""), true));
    t("the disciplines credit sits under its row, off the help line", d.getElementById("ew_takein").parentNode.parentNode.querySelector(".ew-row-note").textContent === "From Richard Foster’s Celebration of Discipline. Walk With Me teaches all twelve." && !/Foster/.test(d.getElementById("ew_takein").parentNode.parentNode.querySelector(".ew-slot-prompt").textContent));
    t("the line under the title says what an ending is for; the last part is What I take with me and carries What I will miss", /^How a thing ends decides what you carry into what comes next\./.test(d.getElementById("ewLede").textContent) && Array.from(d.querySelectorAll(".ew-part-title")).map(e => e.textContent).join("|") === "The Doorway|Where I started|What changed|Between the lines|What God did|Between the lines|What I take with me|Set a stone" && !!d.getElementById("ew_miss"));
    t("no orientation quote, no 'size of the room', no 'Spirit is relationship', no 'Not twelve weeks'", !/orientation was always|size of a room|Spirit is relationship|Not twelve weeks/.test(d.getElementById("ewParts").textContent));
    type(w, d, "ew_started", EX.started); await sleep(5);
    t("once written, the bridge quotes his line word for word", d.getElementById("ewLook_bridge1_a").querySelector(".ew-look-text").textContent === "“When I started, I was sitting in the truck in the driveway, not ready to go in the house.”");
    type(w, d, "ew_asked", EX.asked); await sleep(5);
    t("What God did looks back at what he asked him for", d.getElementById("ewLook_goddid_l").querySelector(".ew-look-label").textContent === "You asked him for:" && d.getElementById("ewLook_goddid_l").querySelector(".ew-look-text").textContent === "“I asked him for it to stop.”");
    const rowG = d.getElementById("ew_growing").parentNode.nextElementSibling;
    t("faith · hope · love under the spirit line", Array.from(rowG.children).map(b => b.textContent).join("|") === "faith|hope|love");
    /* the gate */
    for (const k in EX) if (!/^(renewed|goddid)$/.test(k)) type(w, d, "ew_" + k, EX[k]);
    w.ewShow(7, true); await sleep(10);
    t("at Set a stone with the two gated lines empty, the gate names them and Finish does not open", d.getElementById("ewNext").textContent === "Finish" && /two lines need their words: What is being renewed in me and What God did/.test(d.getElementById("ewGate").textContent) && (d.getElementById("ewNext").click(), !d.getElementById("ewFinish").classList.contains("is-active")));
    t("only written What God did lines are offered to tap (two of three so far)", d.querySelectorAll(".ew-stone-line").length === 2 && !/will appear here/.test(d.querySelector(".ew-stone-pick").textContent));
    type(w, d, "ew_renewed", EX.renewed); type(w, d, "ew_goddid", EX.goddid); w.ewShow(7, true); await sleep(10);
    t("the gate clears", d.getElementById("ewGate").textContent === "");
    /* the stone */
    const lines = d.querySelectorAll(".ew-stone-line");
    t("the three What God did lines are there to tap: what happened instead, what he asked for, what God did", lines.length === 3 && lines[0].textContent === "What happened instead was a man said “me too.”" && lines[2].textContent === "What God did was put me in a room with men willing to walk with me.");
    lines[2].click(); await sleep(5);
    t("a tapped line is his stone, word for word", w.ewStoneText() === "What God did was put me in a room with men willing to walk with me." && d.querySelectorAll(".ew-stone-line")[2].classList.contains("is-on"));
    type(w, d, "ew_stone", "Do the next right thing."); await sleep(5);
    t("his own words replace the tapped line", w.ewStoneText() === "Do the next right thing." && !d.querySelector(".ew-stone-line.is-on"));
    type(w, d, "ew_stone", ""); d.querySelectorAll(".ew-stone-line")[2].click(); await sleep(5);
    t("Next names where it leads", (w.ewShow(0, true), d.getElementById("ewNext").textContent === "Next: Where I started") && (w.ewShow(2, true), d.getElementById("ewNext").textContent === "Next: Between the lines") && (w.ewShow(7, true), d.getElementById("ewNext").textContent === "Finish"));
    /* finish and the assembled piece */
    d.getElementById("ewNext").click(); await sleep(10);
    t("Finish opens the finished view and the step row (Back · Save · Finish) leaves it", d.getElementById("ewFinish").classList.contains("is-active") && d.getElementById("ewNav").classList.contains("ew-off") && /\.ew-root \.ew-nav\.ew-off\{display:none !important\}/.test(page));
    t("every example assembles to its line, in order, each bridge after the line it follows as a paragraph of its own, the stone with who it is for, the tail last", w.ewDocument() === TARGET + "\n\n" + STONE + "\n\nWritten at the end of Breaking Free.");
    t("the story is in the simple form: each part under its heading, each bridge under a lead naming the two lines it joins, nothing else of ours, his words untouched", /\n\nWhere I started\n\nWhen I started, I was/.test(TARGET) && !/I was asked/.test(TARGET) && /\n\nBetween where I started and what I take in now:\nWhat happened next was a week I almost skipped/.test(TARGET) && /\n\nBetween what nobody knew and being seen:\nIt took weeks/.test(TARGET) && /\n\nBetween the asking and the answer:\nWhile that was going on/.test(TARGET) && /\n\nWhat God did was put me in a room/.test(TARGET) && d.querySelectorAll("#ewFinal .ew-poem-head").length === 5 && d.querySelectorAll("#ewFinal .ew-poem-lead").length === 3);
    const fin = d.getElementById("ewFinal").textContent;
    t("the finished view shows the title, the stone and the tail", /^ENDING WELL|Ending Well/.test(fin) && /The stone I setWhat God did was put me in a room/.test(fin) && /Written at the end of Breaking Free\./.test(fin));
    const ret = w.ewReturnDate();
    t("the stone box under the piece says it is set when he saves, and names the day three months out when he will be asked what it means", d.getElementById("ewStoneShown").style.display === "" && d.getElementById("ewStoneNote").textContent === "It is set on your page when you save. On " + ret + " we will ask you what it means to you." && /^[A-Z][a-z]+ \d{1,2}, 20\d\d$/.test(ret) && w.ewReturnDate("2026-12-17T12:00:00") === "March 17, 2027" && w.ewReturnDate("2026-11-30T12:00:00") === "February 28, 2027");
    /* a finished save sets the stone */
    d.getElementById("apsSave").click(); await sleep(200);
    t("Save lands: the piece goes to its own form with the whole text (tail added once), the answers, and one history entry", log.patches.length === 2 && log.patches[0].unit === U && log.patches[0].answers[W] === TARGET + "\n\n" + STONE + "\n\nWritten at the end of Breaking Free." && JSON.parse(log.patches[0].answers[H]).length === 1 && JSON.parse(log.patches[0].answers[J]).goddid === EX.goddid && JSON.parse(JSON.parse(log.patches[0].answers[J]).meta).finished === true);
    const st = log.patches[1];
    t("then the stone goes to the Stones form: the three lines, its record, one entry tied to the piece", st && st.unit === SU && st.answers[SW] === "This stone is for my son, for when he asks.\nWhat God did was put me in a room with men willing to walk with me.\nWhat this stone means to me is more hope." && JSON.parse(st.answers[SJ]).from === "ending-well" && JSON.parse(st.answers[SH]).length === 1 && JSON.parse(st.answers[SH])[0].answers.piece === JSON.parse(log.patches[0].answers[H])[0].id);
    t("v4: the stone record carries who it is for and what it means", JSON.parse(st.answers[SH])[0].answers.stonefor === "This stone is for my son, for when he asks." && JSON.parse(st.answers[SH])[0].answers.meaning === "What this stone means to me is more hope." && /^\d{4}-\d{2}-\d{2}$/.test(JSON.parse(st.answers[SH])[0].answers.returnAt) && st.answers[SW].split("\n").length === 3);
    await sleep(60);
    t("v4: after the stone is set, the stone box offers Set it where others can see it, No name the default", d.querySelector("#ewStoneOffer .ap-stone-offer-open") && d.querySelector("#ewStoneOffer .ap-stone-offer-open").textContent === "Set it where others can see it" && d.querySelector('#ewStoneOffer input[value="none"]').checked);
    t("the page says the stone is set, with the return date", d.getElementById("ewStoneNote").textContent === "Set on your page. On " + ret + " we will ask you what it means to you." && d.getElementById("apsSave").textContent === "Saved");
    /* save again after a change: one stone, not two */
    type(w, d, "ew_hope", "to be a man my kids can tell the truth to, every time."); await sleep(20);
    d.getElementById("apsSave").click(); await sleep(200);
    t("a second finished save replaces the piece's history entry and the same stone — no duplicates", log.patches.length === 4 && JSON.parse(log.patches[2].answers[H]).length === 1 && JSON.parse(log.patches[3].answers[SH]).length === 1);
    /* the keepsake body */
    const JsPDF = function () { this.lines = []; this.internal = { pageSize: { getWidth: () => 595, getHeight: () => 842 } }; };
    JsPDF.prototype = { setFont() {}, setFontSize() {}, setTextColor() {}, setDrawColor() {}, setLineWidth() {}, line() {}, addPage() {}, getTextWidth: () => 10, splitTextToSize: (s) => [s], text(s) { this.lines.push(s); } };
    const doc = w.ewKeepsake(JsPDF, "Test Learner");
    t("the keepsake carries the course, the title, every stanza line, the stone and the byline", doc.lines[0] === "BREAKING FREE" && doc.lines[1] === "Ending Well" && doc.lines.includes("What God did was put me in a room with men willing to walk with me.") && doc.lines.includes("THE STONE I SET") && doc.lines.includes("WHERE I STARTED") && doc.lines.filter(l => l === "What God did was put me in a room with men willing to walk with me.").length === 2 && doc.lines.includes("This stone is for my son, for when he asks.") && doc.lines.includes("What happened next was a week I almost skipped, and didn’t.") && /^Written by Test Learner at the end of Breaking Free · /.test(doc.lines[doc.lines.length - 2]));
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
    t("solo: the line under the title is the one line that is true for both settings", w.ewMode === "solo" && /^How a thing ends decides what you carry into what comes next\. Twelve weeks of Breaking Free are ending\./.test(d.getElementById("ewLede").textContent));
    t("solo: the Doorway carries the Week 12 charge, before he has met them", /look for, pray for, and actively seek relationship and community with other men/.test(d.querySelector(".ew-part-frame").textContent) && /before you have met them/.test(d.querySelector(".ew-part-frame").textContent));
    t("solo: the Doorway lines", stem("iam") === "To the men I will walk with, I am" && /You haven\u2019t heard any of this yet/.test(ex("iam")) && /Start with the men you will walk with/.test(prompt("iam")) && stem("sawinyou") === "What I will look for in you is");
    t("solo: the loss and the frame speak to a man on his own", /a book open every day/.test(prompt("miss")) && /with nobody watching, did/.test(d.querySelectorAll(".ew-part-frame")[2].textContent));
    t("solo: What God did — nobody watching, what he expected of himself, what happened, the long view", stem("sawme") === "Nobody was watching, and what I noticed was" && /nobody else was there to see/.test(prompt("sawme")) && /expect of yourself/.test(prompt("expected")) && /I am here, writing this/.test(ex("instead")) && /twelve weeks kept with nobody watching/.test(prompt("goddid")) && /keep me at it for twelve weeks with nobody watching/.test(ex("goddid")) && /finding one man and telling him I did this/.test(ex("smallstep")));
    t("solo: the ask, the yes-or-no, and answer-by", stem("ask") === "What I will ask of you is" && stem("forward") === "Going forward, I will" && row("forward").join("|") === "find men|keep walking on my own for now" && stem("answer") === "I will answer it by" && row("answer").join("|") === "reading this again|a text to one man|coffee with one man|a meeting");
    t("solo: the second bridge asks about the thing he noticed", /what you noticed with nobody watching/.test(prompt("bridge2")));
    t("solo: the rows still write the line", (Array.from(d.getElementById("ew_forward").parentNode.nextElementSibling.children)[0].click(), d.getElementById("ew_forward").value === "find men"));
    t("solo: the cohort words are gone from the page a solo man sees", !/with this group|the men I walked with|voices fade|the Wednesdays are done|You saw me|the night the men noticed/.test(d.getElementById("ewParts").textContent + d.getElementById("ewLede").textContent));
    type(w, d, "ew_iam", "tired and hopeful."); type(w, d, "ew_renewed", "the word father."); type(w, d, "ew_goddid", "kept me at it."); await sleep(10);
    t("solo: the piece assembles with the solo stems, same title and tail", w.ewDocument() === "ENDING WELL\n\nTo the men I will walk with, I am tired and hopeful.\n\nWhat changed\n\nWhat is being renewed in me is the word father.\n\nWhat God did\n\nWhat God did was kept me at it.\n\nWhat I take with me\n\nGoing forward, I will find men.\n\nWritten at the end of Breaking Free.");
    t("the unchanged parts are the same words in both settings", stem("started") === "When I started, I was" && stem("camein") === "What came in through my eyes and ears was" && stem("hope") === "My hope for the future is");
  }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(1); });
