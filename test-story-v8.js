// story.js v8: the shared Story assistant (one engine), Check it · Read it back on a poem, and road.js v33 delegating to it.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
const roadSrc = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));

/* a stand-in relay: answers by what the instruction asks for */
function relayFor(log, plan) {
  return (url, init) => {
    if (!/script\.google\.com/.test(url)) return Promise.reject(new Error("unexpected fetch " + url));
    const body = JSON.parse(init.body), input = body.input; log.push(input);
    let data;
    if (/YOUR TASK NOW: read the part marked PART TO READ and return notes/.test(input)) data = plan.notes(input);
    else if (/You are the second reader. You did not write these notes/.test(input)) data = plan.checkNotes(input);
    else if (/YOUR TASK NOW: smooth/.test(input)) data = plan.smooth(input);
    else if (/You did not write the smoothed version/.test(input)) data = plan.checkSmooth(input);
    else if (/YOUR TASK NOW: read the whole story and return three things/.test(input)) data = plan.heard(input);
    else if (/You did not write this read-back/.test(input)) data = plan.checkHeard(input);
    else if (/YOUR TASK NOW: his sentences below/.test(input)) data = plan.gaps(input);
    else if (/You did not write these gap questions/.test(input)) data = plan.checkGaps(input);
    else data = {};
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true, data }) });
  };
}
function page(o) {
  const html = '<!doctype html><html><head><meta name="csrf-token" content="x"></head><body>' +
    '<div id="root"><div class="step"><textarea id="f1"></textarea><textarea id="f2"></textarea></div>' +
    '<div id="nav"><button id="back">Back</button><button id="next">Next</button></div>' +
    '<div id="acts"><button>Save image</button><button>Print</button><button>Copy</button><button>Back to the questions</button></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/where-i-am-from" });
  const w = dom.window, d = w.document;
  w.getUserToken = () => "tok";
  const log = [];
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
    if (/script\.google/.test(path)) return relayFor(log, o.plan)(path, init);
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted" } }) });
  };
  w.eval(src);
  const cfg = { form: "wif", root: "#root", navHost: "#navOff", actionsRow: "#acts", pagePath: "/start", fields: [{ id: "f1", key: "a" }, { id: "f2", key: "b" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: a => [a.a, a.b].filter(Boolean).join("\n"), assistant: { kind: "poem", name: "Where I'm From" } };
  if (o.noAssistant) delete cfg.assistant;
  w.APStory.init(cfg);
  return { w, d, log };
}

(async () => {
  /* ---- 1. the assistant itself ---- */
  const dom0 = new JSDOM("<!doctype html><html><body></body></html>", { runScripts: "outside-only", url: "https://www.ancientpathcoaching.com/x" });
  const w0 = dom0.window; w0.eval(src);
  const A = w0.APStory.assistant;
  t("story.js is v9 and exposes the assistant", w0.APStory.version === "18.3" && A && typeof A.notes === "function");
  const hs = A.house({ kind: "story" }), hp = A.house({ kind: "poem" });
  t("every house document opens with the relay's guarded first line", hs.indexOf('You are "a first reader" for Ancient Path Biblical Coaching.') === 0 && hp.indexOf('You are "a first reader" for Ancient Path Biblical Coaching.') === 0);
  t("the story house is the v32 text (same checks, limits, questions, options)", /THE CHECKS\./.test(hs) && /LIMITS\./.test(hs) && /QUESTIONS\./.test(hs) && /OPTIONS\./.test(hs) && !/THIS IS A POEM/.test(hs));
  t("the poem house adds the poem rules and never smooths", /THIS IS A POEM, A LAMENT OR A PRAYER/.test(hp) && /never suggest smoother wording/.test(hp));
  const pp = A.prompts({ kind: "poem" }), ps = A.prompts({ kind: "story" });
  t("a poem's quote is one whole line; a story's is one whole sentence", /one whole line copied exactly/.test(pp.ASK_NOTES) && /one whole sentence copied exactly/.test(ps.ASK_NOTES));
  t("a poem runs fewer checks", /Run only these checks: exposes, half-said, disagree, stranger\./.test(pp.ASK_NOTES) && !/Run only these checks/.test(ps.ASK_NOTES));
  t("the guards: added words are caught, small words are not", A.added("I came home late.", "I came home late again, tired.").join(",") === "tired" && A.added("I came home late.", "I had come home late, again.").join(",") === "come");
  t("the guards: an option may not carry a new name or a number", A.optionClean("What Mark said was…", "I told Mark.") && !A.optionClean("What Dave said was…", "I told Mark.") && !A.optionClean("At 30 I…", "I was young."));
  t("copyFor covers the relay's errors and no reader", /reached/.test(A.copyFor({ code: "network" })) && /busy/.test(A.copyFor({ code: "rate_limited" })) && /can’t be reached in this view/.test(A.copyFor({ code: "no_reader" })) && A.copyFor({ name: "AbortError" }) === "");

  /* ---- 2. notes: two reads, the guards, the profile's checks ---- */
  const text = "I hid in my work.\nWhat my father said stayed with me.\nMark drank every night and lied about it.";
  const log1 = []; w0.fetch = relayFor(log1, {
    notes: () => ({ stop: false, notes: [
      { check: "half-said", quote: "What my father said stayed with me.", question: "", options: ["What he said was…"] },
      { check: "exposes", quote: "Mark drank every night and lied about it.", question: "", options: [] },
      { check: "belongs", quote: "I hid in my work.", question: "Is this connected?", options: [] },        /* not a poem check: dropped by the page */
      { check: "stranger", quote: "A line that is not in the text.", question: "Who?", options: [] }        /* quote not in text: dropped by the page */
    ] }),
    checkNotes: () => ({ verdicts: [{ i: 0, keep: true }, { i: 1, keep: false }] })
  });
  const steps = [];
  const r1 = await A.notes({ whole: text, name: "Where I'm From", text, profile: { kind: "poem" }, onStep: m => steps.push(m) });
  t("notes: the page drops a check the profile does not run and a quote not in the text before the second read", /THE NOTES:/.test(log1[1]) && (log1[1].match(/"check"/g) || []).length === 2);
  t("notes: the second read's verdict is obeyed and counted", r1.notes.length === 1 && r1.dropped === 1 && r1.notes[0].check === "half-said");
  t("notes: half-said gets the page's fixed question and three choices; a label rides with the note", r1.notes[0].question === A.HALF_Q && r1.notes[0].options.length === 3 && r1.notes[0].options[2] === "Remove this sentence" && r1.notes[0].label === "Half-said");
  t("notes: the step message reached the page", steps[0] === "Checking its own notes…");
  w0.fetch = relayFor([], { notes: () => ({ stop: true }) });
  const r1s = await A.notes({ whole: text, name: "x", text, profile: { kind: "poem" } });
  t("notes: a stop comes back as a stop", r1s.stop === true);

  /* ---- 3. smooth: the added-words guard, then the second read ---- */
  w0.fetch = relayFor([], { smooth: () => ({ text: "I hid in my work, and it was terrible." }) });
  const r2 = await A.smooth({ whole: text, name: "x", text: "I hid in my work.", profile: { kind: "story" } });
  t("smooth: a suggestion with words he did not write is thrown away before any second read", /words you did not write \(terrible\)/.test(r2.thrown));
  w0.fetch = relayFor([], { smooth: () => ({ text: "I hid in my work", changed: ["dropped the period"] }), checkSmooth: () => ({ ok: true }) });
  const r3 = await A.smooth({ whole: text, name: "x", text: "I hid in my work.", profile: { kind: "story" } });
  t("smooth: a clean suggestion passes the second read", r3.text === "I hid in my work" && r3.changed[0] === "dropped the period");
  w0.fetch = relayFor([], { smooth: () => ({ text: "I hid in my work" }), checkSmooth: () => ({ ok: false, problems: ["meaning changed"] }) });
  const r4 = await A.smooth({ whole: text, name: "x", text: "I hid in my work.", profile: { kind: "story" } });
  t("smooth: the second read can throw it out", /second read found a problem/.test(r4.thrown) && /meaning changed/.test(r4.thrown));

  /* ---- 4. heard ---- */
  w0.fetch = relayFor([], {
    heard: () => ({ heard: "A reader will hear a man who hid.", open: [{ check: "stranger", quote: "I hid in my work.", question: "Which work?" }, { check: "gap", quote: "not in text", question: "?" }], people: [{ who: "Mark", quote: "Mark drank every night and lied about it." }, { who: "Nobody", quote: "not in text" }] }),
    checkHeard: () => ({ heardOk: true, verdicts: [{ i: 0, keep: true }], people: [{ i: 0, keep: true }] })
  });
  const r5 = await A.heard({ story: text, about: "", profile: { kind: "poem" } });
  t("heard: the read-back, the open items that survive and the people whose line is in the text", r5.heard.text === "A reader will hear a man who hid." && r5.heard.open.length === 1 && r5.heard.open[0].label === "A reader hasn’t met this yet" && r5.heard.people.length === 1);

  /* ---- 5. gaps ---- */
  w0.fetch = relayFor([], {
    gaps: () => ({ gaps: [{ before: 2, question: "How did you get from the work to your father?", openings: ["What happened next was…", "By then Dave…"] }, { before: 9, question: "out of range" }] }),
    checkGaps: () => ({ verdicts: [{ i: 0, keep: true }] })
  });
  const r6 = await A.gaps({ whole: text, all: text, name: "x", numbered: "1. a\n2. b\n3. c", count: 3, profile: { kind: "story" } });
  t("gaps: out-of-range gaps are dropped, openings with a new name are dropped, the kept one comes back", r6.gaps.length === 1 && r6.gaps[0].before === 2 && r6.gaps[0].openings.length === 1);

  /* ---- 6. no reader in this view ---- */
  w0.AP_READER = false;
  let e6 = null; try { await A.notes({ whole: "x", name: "x", text: "x" }); } catch (e) { e6 = e; }
  t("with the relay turned off there is no reader and the page is told so", e6 && e6.code === "no_reader" && A.canRead() === false);
  delete w0.AP_READER;

  /* ---- 7. Check it · Read it back on a poem page ---- */
  const plan = {
    notes: () => ({ notes: [{ check: "half-said", quote: "What my father said stayed with me.", question: "", options: ["What he said was…"] }] }),
    checkNotes: () => ({ verdicts: [{ i: 0, keep: true }] }),
    heard: () => ({ heard: "A reader will hear a man who hid.", open: [{ check: "half-said", quote: "What my father said stayed with me.", question: "", options: ["What he said was…"] }], people: [{ who: "Mark", quote: "Mark drank every night and lied about it." }] }),
    checkHeard: () => ({ heardOk: true, verdicts: [{ i: 0, keep: true }], people: [{ i: 0, keep: true }] })
  };
  let { w, d, log } = page({ plan });
  await sleep(50);
  const acts = d.getElementById("acts"), hear = d.getElementById("apsHeard");
  t("a poem page with cfg.assistant gets one button, Read it back, in its finish row (v13)", hear && !d.getElementById("apsCheck") && hear.parentNode.parentNode === acts && hear.parentNode.classList.contains("aps-act") && hear.textContent === "Read it back");
  t("v18.1: Save in the row above; Read it back on the quiet line below Your page; Copy a quiet link at the foot", hear.closest(".aps-act").style.order === "23" && d.getElementById("apsSave").style.order === "7" && Array.from(acts.children).find(c => /^Copy/.test(c.textContent)).style.order === "30");
  t("no Smooth it, no Better questions, no Check it on a poem", !Array.from(acts.querySelectorAll("button")).some(b => /smooth|better questions|check it/i.test(b.textContent)));
  const how = d.querySelector(".aps-assist");
  t("the quiet Story assistant line with the poem's circled-i text", how && /Story assistant/.test(how.textContent) && /three things/.test(how.querySelector("p").textContent) && /never changes a word/.test(how.querySelector("p").textContent));
  hear.click(); await sleep(30);
  t("Read it back on an empty piece asks him to write first, sends nothing", /nothing written yet/.test(d.getElementById("apsRead").textContent) && log.length === 0);
  d.getElementById("f1").value = "I hid in my work.\nWhat my father said stayed with me."; d.getElementById("f2").value = "Mark drank every night and lied about it.";
  hear.click(); await sleep(30);
  t("Read it back sends the whole piece with the poem house, only the poem's checks, and gets two reads", log.length === 2 && /THIS IS A POEM/.test(log[0]) && /THE WHOLE STORY:/.test(log[0]) && /Run only these checks: exposes, half-said, disagree, stranger/.test(log[0]) && /THE READ-BACK:/.test(log[1]));
  const read = d.getElementById("apsRead");
  t("one answer: what a reader will hear, then the half-said line with its fixed question, opening and way back, then the real people named", /A reader will hear a man who hid\./.test(read.textContent) && /Half-said/.test(read.textContent) && /What my father said stayed with me\./.test(read.textContent) && /A reader is left outside here/.test(read.textContent) && /What he said was/.test(read.textContent) && read.querySelector(".aps-goto") && /A real person is named/.test(read.textContent) && /Mark is named here/.test(read.textContent) && read.querySelector(".aps-walk"));
  t("nothing he wrote was changed", d.getElementById("f1").value === "I hid in my work.\nWhat my father said stayed with me.");
  let r8 = page({ plan, noAssistant: true }); await sleep(30);
  t("a page without cfg.assistant gets no buttons (nothing changes for it)", !r8.d.getElementById("apsHeard") && !r8.d.querySelector(".aps-assist"));

  /* ---- 8. road.js v33 goes through the shared assistant ---- */
  const dom9 = new JSDOM('<!doctype html><html><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/the-road-i-walked" });
  const w9 = dom9.window; w9.getUserToken = () => "tok";
  w9.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
  w9.scrollTo = () => {}; w9.HTMLElement.prototype.scrollIntoView = function () {};
  w9.eval(src);
  w9.AP_ROAD = { lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, reader: false, plate: false, worksheet: false };
  w9.module = {}; w9.eval(roadSrc);
  const TELL = w9.module.exports;
  t("road.js is v33: its prompts are the shared assistant's, with the Road profile", /v33/.test(roadSrc.slice(0, 900)) && TELL.prompts.HOUSE === w9.APStory.assistant.house(TELL.profile) && TELL.profile.kind === "story" && !/var HOUSE = \[/.test(roadSrc) && !/var READER_URL/.test(roadSrc));
  t("road.js's guards are the shared guards", TELL.added("a b", "a b c").join() === "c" && TELL.optionClean("At 3", "x") === false);
  t("the relay address lives in story.js only, once", (src.match(/script\.google\.com\/macros/g) || []).length === 1 && !/script\.google\.com/.test(roadSrc));
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
