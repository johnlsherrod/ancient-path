// story.js v20.5 — the story events carry where and who. Tests first. Run: node x.js   (needs jsdom: npm i jsdom)
// Every story event (story_start, story_save, story_finish, story_return, story_offer, and the others the engine sends) carries exactly four things:
// piece (the slug), part (the part he is on), build, team. Nothing he wrote, no name, no address ever leaves the page.
process.env.TZ = "America/Chicago";
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));

const NOW = Date.parse("2026-11-12T15:00:00Z");              /* Thursday, Nov 12, 9:00 AM Central */
const SAVED_YESTERDAY = "2026-11-11T20:00:00.000Z";          /* Wednesday, Nov 11, 2:00 PM Central */
const SAVED_TODAY = "2026-11-12T14:14:00.000Z";              /* Thursday, Nov 12, 8:14 AM Central */
const FIELDS = [{ id: "a1", key: "q1" }, { id: "a2", key: "q2" }, { id: "a3", key: "q3" }, { id: "meta", key: "meta" }];
const FINISHED = { q1: "I was afraid.", q2: "God was near.", q3: "I stayed.", meta: JSON.stringify({ step: 2, finished: true }) };
const STOPPED = { q1: "I was afraid.", q2: "God was near.", q3: "", meta: JSON.stringify({ step: 1, finished: false }) };
const WORDS = ["secretword-alpha", "secretword-beta", "secretword-gamma"];

function world(o) {
  o = o || {};
  const html = '<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="root" class="root"><div id="steps">' +
    '<div class="p"><textarea id="a1"></textarea></div><div class="p"><textarea id="a2"></textarea></div><div class="p"><textarea id="a3"></textarea></div>' +
    '<input type="hidden" id="meta" value=""></div><div id="acts" class="actions"><button id="back" class="b">Back</button><button id="next" class="b">Next</button></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/course/x" + (o.search || "") });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.matchMedia = () => ({ matches: false });
  w.SpeechSynthesisUtterance = function (x) { this.text = x; }; w.speechSynthesis = { speak() {}, cancel() {} };
  if (!o.signedOut) { w.getUserToken = () => "tok"; }
  w.eval("(function(){var R=Date,N=" + (o.now || NOW) + ";function D(){var a=[].slice.call(arguments);if(!(this instanceof D)){return new R(N).toString();}return a.length?new (Function.prototype.bind.apply(R,[null].concat(a)))():new R(N);}D.now=function(){return N;};D.parse=R.parse;D.UTC=R.UTC;D.prototype=R.prototype;window.Date=D;})();");
  const events = [];
  if (!o.noGtag) { w.gtag = function () { events.push(Array.prototype.slice.call(arguments)); }; }
  d.getElementById("meta").addEventListener("input", () => { if (!d.getElementById("meta").value) { return; } try { const m = JSON.parse(d.getElementById("meta").value); d.body.dataset.view = m.finished ? "finish" : "step" + (m.step || 0); } catch (e) {} });
  const calls = [];
  const answersFor = a => [{ blockId: "J", answer: { value: JSON.stringify(a) } }, { blockId: "W", answer: { value: [a.q1, a.q2, a.q3].filter(Boolean).join("\n\n") } }];
  w.fetch = (path, opts) => {
    calls.push((opts && opts.method || "GET") + " " + String(path).split("?")[0]);
    const ok = body => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(body) });
    if (/user_stats/.test(path)) { if (o.who === "fail") { return Promise.reject(new Error("offline")); } if (o.who === "hang") { return new Promise(() => {}); } return ok({ success: true, me: { id: "u1", email: o.email || "someone@example.com", first_name: "Some", last_name: "One", username: o.username || "someone" } }); }
    if (/api\/user\/me/.test(path)) { return ok({ success: true, user: { id: "u1", email: o.email || "someone@example.com" } }); }
    if (/assessment\/state/.test(path)) { return ok({ success: true, latestSubmission: o.latest ? { status: "submitted", submittedTimestamp: o.savedAt || SAVED_YESTERDAY, answers: answersFor(o.latest) } : null }); }
    if (/submission\/init/.test(path)) { return ok({ success: true, submission: { snapshotId: "s" } }); }
    return ok({ success: true, submitted: true, submission: { status: "submitted" } });
  };
  if (o.storage) { for (const k in o.storage) { w.localStorage.setItem(k, o.storage[k]); } }
  if (o.teamWait) { w.AP_TEAM_WAIT = o.teamWait; }
  w.eval(src);
  const cfg = { form: o.form || "lament", root: "#root", actionsRow: "#acts", stepsHost: "#steps", navHost: "#navOff", pagePath: "/start", buttonClass: "b", noteBefore: "x",
    fields: FIELDS, lw: { unit: "U", blocks: { json: "J", whole: "W" } }, document: a => [a.q1, a.q2, a.q3].filter(Boolean).join("\n\n"), signInSelector: "#none" };
  const s = o.noInit ? null : w.APStory.init(cfg);
  return { w, d, s, events, calls, cfg };
}
const type = (x, id, v) => { const n = x.d.getElementById(id); n.focus && n.focus(); n.value = v; n.dispatchEvent(new x.w.Event("input", { bubbles: true })); };
const ev = x => x.events.filter(e => e[0] === "event");
const named = (x, n) => ev(x).filter(e => e[1] === n);
const KEYS = '["piece","part","build","team"]';
const keysOf = e => JSON.stringify(Object.keys(e[2]));
const noWords = x => { const j = JSON.stringify(x.events); return WORDS.every(wd => j.indexOf(wd) < 0) && !/@|example\.com|ancientpathcoaching|Some One|someone/i.test(j); };

(async () => {
  t("story.js is v20.5 and says so in the header, the version and the build", /AP-STORY-MODULE-v20\.5/.test(src.slice(0, 200)) && /version: "20\.5"/.test(src) && /build: "20\.5"/.test(src));

  /* 1 — signed out: part he types in, build, team false; nothing else */
  { const x = world({ signedOut: true }); await sleep(60);
    type(x, "a2", WORDS[0]); await sleep(40);
    const e = named(x, "story_start");
    t("signed out: story_start once, carrying exactly piece · part · build · team", e.length === 1 && keysOf(e[0]) === KEYS);
    t("…piece is the form's key, part is the part he typed in (2), build 20.5, team false (nobody signed in is not ours)", e[0] && e[0][2].piece === "lament" && e[0][2].part === "2" && e[0][2].build === "20.5" && e[0][2].team === "false");
    type(x, "a1", WORDS[1]); await sleep(40);
    t("typing in another part does not send a second start", named(x, "story_start").length === 1);
    t("no word he typed is in any event", noWords(x)); }

  /* 2 — signed in as someone who is not ours */
  { const x = world({ email: "robert.someone@example.com" }); await sleep(80);
    type(x, "a3", WORDS[2]); await sleep(120);
    const e = named(x, "story_start");
    t("a man (not ours): team false, part 3, one lookup of who he is", e.length === 1 && e[0][2].team === "false" && e[0][2].part === "3" && x.calls.filter(c => /user_stats/.test(c)).length === 1);
    t("his address is on no event", noWords(x)); }

  /* 3 — ours: the house rule the Front Desk uses (isOurs_) */
  for (const em of ["john@ancientpathcoaching.com", "jason@ancientpathcoaching.com", "johnsherrodtest@gmail.com", "johnsherrodbftest@gmail.com", "johnlsherrod+x@gmail.com", "johnlsherrod@gmail.com"]) {
    const x = world({ email: em }); await sleep(80); type(x, "a1", WORDS[0]); await sleep(120);
    const e = named(x, "story_start");
    t("ours (" + em.replace(/^[^@]+/, "…") + "): team true, address not sent", e.length === 1 && e[0][2].team === "true" && noWords(x));
  }
  { const x = world({ email: "x@example.com", username: "ancientpath" }); await sleep(80); type(x, "a1", WORDS[0]); await sleep(120);
    t("our own LearnWorlds account (username ancientpath): team true", named(x, "story_start")[0][2].team === "true"); }
  { const x = world({ email: "mytest@gmail.com" }); await sleep(80); type(x, "a1", WORDS[0]); await sleep(120);
    t("an address that only contains the word test is a man, not ours", named(x, "story_start")[0][2].team === "false"); }

  /* 4 — the lookup fails or hangs: unknown, never a guess, and the event still goes */
  { const x = world({ who: "fail" }); await sleep(80); type(x, "a1", WORDS[0]); await sleep(120);
    const e = named(x, "story_start");
    t("lookup fails: the event goes with team unknown", e.length === 1 && e[0][2].team === "unknown"); }
  { const x = world({ who: "hang", teamWait: 150 }); await sleep(30); type(x, "a1", WORDS[0]); await sleep(60);
    t("lookup still waiting: the event waits, in order", named(x, "story_start").length === 0);
    await sleep(250);
    t("…then goes as unknown once the wait is up", named(x, "story_start").length === 1 && named(x, "story_start")[0][2].team === "unknown"); }

  /* 5 — save and finish carry the part he is on; a finish is the last part */
  { const x = world({ email: "john@ancientpathcoaching.com" }); await sleep(80);
    type(x, "a1", WORDS[0]); await sleep(1500);
    const sv = named(x, "story_save");
    t("a keep as he writes: story_save with the four things, part 1", sv.length >= 1 && keysOf(sv[0]) === KEYS && sv[0][2].part === "1" && sv[0][2].team === "true");
    type(x, "a2", WORDS[1]); type(x, "a3", WORDS[2]);
    x.d.getElementById("meta").value = JSON.stringify({ step: 2, finished: true }); x.d.getElementById("meta").dispatchEvent(new x.w.Event("input", { bubbles: true }));
    await sleep(1500);
    t("noWords after save", noWords(x)); }

  /* 6 — the one choke point: any story event, from any script on the page, carries the four things and nothing more */
  { const x = world({ email: "robert.someone@example.com" }); await sleep(80);
    x.w.gtag("event", "story_offer", { piece: "what-kind-of-light", email: "robert.someone@example.com", testimony: WORDS[0], name: "Robert Someone" }); await sleep(100);
    const e = named(x, "story_offer");
    t("story_offer from Your Page's own call: piece, build, team added; email, words and name dropped", e.length === 1 && e[0][2].piece === "what-kind-of-light" && e[0][2].build === "20.5" && e[0][2].team === "false" && !("email" in e[0][2]) && !("testimony" in e[0][2]) && !("name" in e[0][2]));
    t("…and nothing of the offer's words or his name reached Analytics", noWords(x));
    x.w.gtag("event", "page_view", { page_title: "Your Page", anything: "kept" }); x.w.gtag("config", "G-X"); x.w.gtag("js", new x.w.Date());
    t("a page's own events and config calls pass through untouched", named(x, "page_view").length === 1 && named(x, "page_view")[0][2].anything === "kept" && x.events.some(e => e[0] === "config") && x.events.some(e => e[0] === "js")); }
  { const x = world({ email: "x@example.com" }); await sleep(80);
    x.w.APStory.track("story_save", "Write a Lament — my sins & more!"); await sleep(60);
    const p = named(x, "story_save")[0][2].piece;
    t("a piece key is a slug only (letters, numbers, dash)", /^[a-z0-9._-]+$/.test(p) && p.length <= 40); }
  { const x = world({ email: "x@example.com" }); await sleep(80);
    x.w.APStory.track("story_save", ""); await sleep(60);
    t("an empty piece key is sent as unknown, never as blank", named(x, "story_save")[0][2].piece === "unknown"); }
  { const x = world({ email: "x@example.com" }); await sleep(80);
    x.w.APStory.track("stone_return", "set-a-stone"); await sleep(60);
    t("the stone's own events (stone_return) carry the four things too, part left off", keysOf(named(x, "stone_return")[0]) === '["piece","build","team"]'); }
  { const x = world({ email: "x@example.com" }); await sleep(80);
    x.w.APStory.setPart("road", 4); x.w.APStory.track("story_save", "road"); await sleep(60);
    t("a script with its own steps (the Road) can hand the engine its part: it rides along", named(x, "story_save")[0][2].part === "4" && keysOf(named(x, "story_save")[0]) === KEYS); }
  { const x = world({ email: "x@example.com" }); await sleep(80);
    x.w.APStory.track("story_save", "lament", { part: 3, words: WORDS[0] }); await sleep(60);
    t("a caller's extra map can set the part and nothing else", named(x, "story_save")[0][2].part === "3" && noWords(x)); }
  { const x = world({ email: "x@example.com" }); await sleep(80);
    const before = x.events.length; x.w.eval(src); x.w.eval(src); x.w.gtag("event", "story_offer", { piece: "lament" }); await sleep(80);
    t("loading story.js again does not wrap gtag twice: one event, not three", x.events.length - before === 1); }
  { const x = world({ noGtag: true, email: "x@example.com" }); await sleep(60);
    let r; try { r = x.w.APStory.track("story_save", "lament"); } catch (e) { r = "threw"; }
    t("no Analytics on the page: silent, track says false, nothing throws", r === false); }
  { const x = world({ email: "x@example.com" });
    const r = x.w.APStory.track("story_save", "lament");
    t("track still answers true at once when Analytics is there (the count is queued behind the lookup)", r === true); }

  /* 7 — story_return: he opens a kept piece on a later day */
  { const x = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY, email: "robert.someone@example.com" }); await sleep(250);
    const e = named(x, "story_return");
    t("a kept piece opened the day after: story_return once, the four things", e.length === 1 && keysOf(e[0]) === KEYS && e[0][2].piece === "lament" && e[0][2].team === "false");
    t("…part is the last part of a finished piece (3)", e[0] && e[0][2].part === "3");
    t("…not a start", named(x, "story_start").length === 0 && noWords(x)); }
  { const x = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY, email: "x@example.com" }); await sleep(250);
    const first = named(x, "story_return").length;
    const y = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY, email: "x@example.com", storage: { "apStoryReturn:lament": "2026-11-12" } }); await sleep(250);
    t("the same man reloading the same day is not a second return", first === 1 && named(y, "story_return").length === 0); }
  { const x = world({ latest: STOPPED, savedAt: SAVED_YESTERDAY, email: "x@example.com" }); await sleep(250);
    const e = named(x, "story_return");
    t("a stopped piece opened the next day: the part is where he stopped (3), not the last box the page filled", e.length === 1 && e[0][2].part === "3"); }
  { const x = world({ latest: FINISHED, savedAt: SAVED_TODAY, email: "x@example.com" }); await sleep(250);
    t("a piece he kept earlier today and opens again is not a return", named(x, "story_return").length === 0); }
  { const x = world({ latest: null, email: "x@example.com" }); await sleep(250);
    t("no kept piece: no return", named(x, "story_return").length === 0); }
  { const x = world({ latest: FINISHED, savedAt: "not a date", email: "x@example.com" }); await sleep(250);
    t("a save with no readable time is not counted as a return", named(x, "story_return").length === 0); }
  { const x = world({ search: "?open=1", latest: FINISHED, savedAt: SAVED_YESTERDAY, email: "x@example.com" }); await sleep(250);
    t("opened from Your Page (?open=1) the day after: one return", named(x, "story_return").length === 1); }
  { const x = world({ signedOut: true, storage: { "apStoryPending:lament": JSON.stringify({ t: Date.parse(SAVED_YESTERDAY), a: { q1: WORDS[0], q2: "", q3: "", meta: "" }, press: false }) } }); await sleep(250);
    const e = named(x, "story_return");
    t("words held on his device from an earlier day, opened again: one return, team false", e.length === 1 && e[0][2].team === "false" && noWords(x)); }
  { const x = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY, email: "x@example.com" }); await sleep(250);
    x.w.APStory.returned("lament", SAVED_YESTERDAY); await sleep(60);
    t("APStory.returned is one count a day per piece for a script with its own opening (the Road)", named(x, "story_return").length === 1);
    const z = world({ email: "x@example.com", noInit: true }); await sleep(60);
    z.w.APStory.returned("road", SAVED_YESTERDAY); z.w.APStory.returned("road", SAVED_YESTERDAY); await sleep(100);
    t("…even asked twice", named(z, "story_return").length === 1 && named(z, "story_return")[0][2].piece === "road"); }

  /* 8 — the engine's own count is as it was: the same events, the same times */
  { const x = world({ signedOut: true }); await sleep(40);
    type(x, "a1", WORDS[0]); await sleep(1600);
    const names = ev(x).map(e => e[1]);
    t("only story_* events from the engine; none invented", names.every(n => /^story_/.test(n)) && names.indexOf("story_start") === 0); }

  /* 9 — the file */
  try { new Function(src); t("story.js parses", true); } catch (e) { t("story.js parses: " + e.message, false); }
  t("the stylesheet is untouched: every line that draws a rule is the same as in v20.2", (() => { try { const old = fs.readFileSync(__dirname + "/story-v20.2.js", "utf8"); const css = s => s.split("\n").filter(l => /\.aps-[\w-]+[^\n]*\{[^\n]*:[^\n]*\}|@media/.test(l)).join("\n"); return css(old).length > 1000 && css(old) === css(src); } catch (e) { return false; } })());

  console.log(fails ? "\n" + fails + " FAILED" : "\nall green");
  process.exit(fails ? 1 : 0);
})();
