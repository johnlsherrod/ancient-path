// story.js v16 + road.js v36: the count. Every piece tells Analytics story_start · story_save · story_finish, with the piece's key and nothing else; the Friday count reads them.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8"), road = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
function page(o) {
  o = o || {};
  const html = '<!doctype html><html><head><meta name="csrf-token" content="x"></head><body><div class="wif-root" id="root">' +
    '<div class="wif-step"><h2 class="wif-step-title">The ordinary things</h2><div><input id="item"></div><div><input id="prod1"><input id="prod2"></div></div>' +
    '<div class="wif-step" style="display:none"><h2 class="wif-step-title">The house</h2><div><input id="home"></div></div>' +
    '<div id="nav" class="wif-nav"><button id="back" class="wif-btn wif-btn-ghost">Back</button><button id="stop" class="wif-btn">Save and stop for now</button><button id="next" class="wif-btn wif-btn-primary">Next</button></div>' +
    '<div class="wif-finish"><div id="acts" class="wif-actions"><button>Print</button></div></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/where-i-am-from" + (o.open ? "?open=1" : "") });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.getBoundingClientRect = function () { return { top: 0, left: 0, width: 100, height: 40, right: 100, bottom: 40 }; };
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.getUserToken = () => "tok";
  const events = [];
  if (!o.noGtag) { w.gtag = function () { events.push(Array.prototype.slice.call(arguments)); }; }
  if (o.storage) { for (const k in o.storage) { w.localStorage.setItem(k, o.storage[k]); } }
  w.AP_READER = false;
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: o.latest || null }) });
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted" } }) });
  };
  w.eval(src);
  const TAIL = "After the form of “Where I’m From” by George Ella Lyon.";
  const T = a => { const lines = [a.item ? "I am from " + a.item + "." : "", (a.prod1 || a.prod2) ? "From " + a.prod1 + " and " + a.prod2 + "." : "", a.home ? "I am from the " + a.home + "," : ""].filter(Boolean); return lines.length ? lines.join("\n") + "\n\n" + TAIL : ""; };
  w.APStory.init({ form: "wif", root: "#root", navHost: "#navOff", actionsRow: "#acts", pagePath: "/start", buttonClass: "wif-btn", primaryClass: "wif-btn-primary", ghostClass: "wif-btn-ghost", tail: TAIL,
    fields: [{ id: "item", key: "item" }, { id: "prod1", key: "prod1" }, { id: "prod2", key: "prod2" }, { id: "home", key: "home" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: T, assistant: false, after: false });
  return { w, d, events };
}
const type = (w, d, id, v) => { const n = d.getElementById(id); n.value = v; n.dispatchEvent(new w.Event("input", { bubbles: true })); };
const names = ev => ev.map(e => e[1]);
const only = ev => ev.every(e => e[0] === "event" && JSON.stringify(Object.keys(e[2])) === '["piece"]');

function bootRoad(opts) {
  opts = opts || {};
  const dom = new JSDOM('<!doctype html><html><head><meta name="csrf-token" content="x"></head><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/" + (opts.where ? "where-are-you" : "the-road-i-walked") });
  const w = dom.window; w.getUserToken = () => "tok";
  const events = []; w.gtag = function () { events.push(Array.prototype.slice.call(arguments)); };
  let latest = opts.latest || null;
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: latest }) });
    const body = init && init.body ? JSON.parse(init.body) : {};
    if (body.answers) { latest = { status: "submitted", answers: body.answers, submittedTimestamp: Math.floor(Date.now() / 1000) }; }
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s1" } }) });
  };
  w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = function () {};
  w.eval(src);
  w.AP_ROAD = Object.assign(opts.where ? { piece: "where", lw: { unit: "u2", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, plate: false, worksheet: false } : { lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, reader: false, plate: false, worksheet: false }, opts.cfg || {});
  w.module = {}; w.eval(road);
  return { w, d: w.document, events };
}

(async () => {
  t("story.js is v16 or later and exports track", /AP-STORY-MODULE-v1[6-9]/.test(src.slice(0, 200)) && /track: track/.test(src));
  t("road.js says v37", /AP-ROAD-v1 \(v37:/.test(road));
  t("nothing of what a man writes is ever in an event: track sends only the name and the piece key (and an optional extra map)", /function track\(name, piece, extra\)/.test(src) && !/track\("story_[a-z]+", [^)]*(answers|text|value|document)\b/.test(src));

  // ---- 1. a fresh piece: the first words are one start; a confirmed save is one save; a finished save is one finish
  { const { w, d, events } = page(); await sleep(60);
    type(w, d, "item", "the porch");
    t("the first words typed into a fresh piece send story_start once, with the piece key only", names(events).join(",") === "story_start" && events[0][2].piece === "wif" && only(events));
    type(w, d, "prod1", "folgers"); type(w, d, "item", "the porch light");
    t("more typing sends nothing more", names(events).join(",") === "story_start");
    d.getElementById("apsSave").click(); await sleep(120);
    t("a save the site confirmed sends story_save (not a finish: two of four parts)", names(events).join(",") === "story_start,story_save" && only(events));
    type(w, d, "prod2", "what my father said"); type(w, d, "home", "house on Elm");
    d.getElementById("apsSave").click(); await sleep(120);
    t("a confirmed save of the whole piece sends story_save and story_finish", names(events).join(",") === "story_start,story_save,story_save,story_finish");
    type(w, d, "home", "house on Elm Street"); d.getElementById("apsSave").click(); await sleep(120);
    t("saving the finished piece again is another save but not another finish", names(events).join(",") === "story_start,story_save,story_save,story_finish,story_save");
  }
  // ---- 2. a save that fails sends nothing
  { const { w, d, events } = page(); await sleep(60);
    type(w, d, "item", "the porch");
    w.fetch = (path) => /assessment\/state/.test(path) ? Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) }) : Promise.reject(new Error("down"));
    d.getElementById("apsSave").click(); await sleep(120);
    t("a save that did not land sends no story_save", names(events).join(",") === "story_start");
  }
  // ---- 3. opening a saved piece is not a start
  { const latest = { status: "submitted", answers: [{ blockId: "J", answer: { value: JSON.stringify({ item: "the porch", prod1: "folgers", prod2: "", home: "" }) } }, { blockId: "W", answer: { value: "I am from the porch." } }], submittedTimestamp: 1 };
    const { w, d, events } = page({ open: true, latest }); await sleep(120);
    t("a piece opened from his page comes back filled", d.getElementById("item").value === "the porch");
    type(w, d, "prod2", "lava soap");
    t("typing into a piece opened from a save sends no story_start", names(events).length === 0);
    d.getElementById("apsSave").click(); await sleep(120);
    t("but its save still counts", names(events).join(",") === "story_save");
  }
  // ---- 4. words held on this device are not a new start either
  { const { w, d, events } = page({ storage: { "apStoryPending:wif": JSON.stringify({ a: { item: "the porch", prod1: "", prod2: "", home: "" }, press: false, t: Date.now() }) } }); await sleep(150);
    type(w, d, "prod1", "folgers");
    t("with words held on the device from before, typing sends no story_start", !names(events).includes("story_start"));
  }
  // ---- 5. no Analytics on the page: nothing breaks
  { const { w, d, events } = page({ noGtag: true }); await sleep(60);
    let threw = false; try { type(w, d, "item", "the porch"); d.getElementById("apsSave").click(); await sleep(120); } catch (e) { threw = true; }
    t("without gtag the piece types and saves as before and nothing is thrown", !threw && /Saved/.test(d.getElementById("apsSave").textContent) && events.length === 0);
    t("APStory.track says it sent nothing", w.APStory.track("story_save", "wif") === false);
  }
  // ---- 6. the Road: start on the first words, save and finish through the shared save, the piece named road
  { const { w, d, events } = bootRoad(); await sleep(80);
    d.querySelector('[data-do="pickup"]').click(); await sleep(20);
    const dot = d.querySelector("#ap-road-app [data-n]"); if (dot) { dot.click(); await sleep(20); }
    const ta = d.querySelector("#ap-road-app textarea, #ap-road-app input[type=text]");
    ta.value = "I came home late."; ta.dispatchEvent(new w.Event("input", { bubbles: true })); await sleep(20);
    t("the Road: the first words send story_start with piece road", names(events).join(",") === "story_start" && events[0][2].piece === "road");
    d.querySelector("#ap-road-app .row.bar [data-site=save]").click(); await sleep(400);
    t("the Road: a confirmed save of one chapter sends story_save and no finish", names(events).join(",") === "story_start,story_save" && events[1][2].piece === "road");
  }
  { const { w, d, events } = bootRoad({ latest: { status: "submitted", answers: [{ blockId: "m", answer: { value: JSON.stringify({ step: 0, part: 1, of: 10, finished: false }) } }], submittedTimestamp: 1 } }); await sleep(150);
    d.querySelector('[data-do="pickup"]').click(); await sleep(20);
    const dot = d.querySelector("#ap-road-app [data-n]"); if (dot) { dot.click(); await sleep(20); }
    const ta = d.querySelector("#ap-road-app textarea, #ap-road-app input[type=text]");
    if (ta) { ta.value = "Again."; ta.dispatchEvent(new w.Event("input", { bubbles: true })); await sleep(20); }
    t("the Road: with a save already on the site, typing sends no story_start", !names(events).includes("story_start"));
  }
  { const { w, d, events } = bootRoad(); await sleep(80);
    w.AP_ROAD_META = () => ({ step: 9, part: 10, of: 10, finished: true, when: new Date().toISOString() });
    d.querySelector('[data-do="pickup"]').click(); await sleep(20);
    const dot = d.querySelector("#ap-road-app [data-n]"); if (dot) { dot.click(); await sleep(20); }
    const ta = d.querySelector("#ap-road-app textarea, #ap-road-app input[type=text]");
    ta.value = "The last line."; ta.dispatchEvent(new w.Event("input", { bubbles: true })); await sleep(20);
    d.querySelector("#ap-road-app .row.bar [data-site=save]").click(); await sleep(400);
    t("the Road: a confirmed save whose meta says finished sends story_finish once", names(events).join(",") === "story_start,story_save,story_finish");
    d.querySelector("#ap-road-app .row.bar [data-site=save]").click(); await sleep(400);
    const after = names(events).join(",");
    t("saving again is not another finish", !/story_finish.*story_finish/.test(after));
  }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
