// AP-PROMISE-BAND-v2: one question before sign-in. A tap holds the name on the device in the engine's own held-words shape, counts one start, opens the piece; the piece (story.js v18.1) puts the name in the first box and counts no second start.
const { JSDOM } = require("/home/claude/v16/node_modules/jsdom"); const fs = require("fs");
const band = fs.readFileSync(__dirname + "/ap-promise-band-v2.html", "utf8");
const engine = fs.readFileSync("/home/claude/v16/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
function home(o) {
  o = o || {};
  const dom = new JSDOM("<!doctype html><html><body><div id='seam'>" + band + "</div></body></html>", { runScripts: "dangerously", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/home" });
  const w = dom.window; const events = [];
  if (!o.noGtag) { w.gtag = function () { events.push(Array.prototype.slice.call(arguments)); }; }
  if (o.storage) { for (const k in o.storage) { w.localStorage.setItem(k, o.storage[k]); } }
  return { w, d: w.document, events, dom };
}
function piece(storage) {
  const html = '<!doctype html><html><head><meta name="csrf-token" content="x"></head><body><div class="wkl-root" id="root"><div id="wklParts"><div class="wkl-slot"><input id="wkl_who1"><input id="wkl_light1"></div></div>' +
    '<div id="nav"><button id="back">Back</button><button id="stop">Save and stop for now</button><button id="next">Next</button></div><div><div id="acts"><button>Print</button></div></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/what-kind-of-light" });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.getBoundingClientRect = function () { return { top: 0, left: 0, width: 100, height: 40, right: 100, bottom: 40 }; };
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.getUserToken = () => null;   /* signed out */
  const events = []; w.gtag = function () { events.push(Array.prototype.slice.call(arguments)); };
  for (const k in storage) { w.localStorage.setItem(k, storage[k]); }
  w.AP_READER = false;
  w.fetch = (path) => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
  const inputs = []; d.getElementById("wkl_who1").addEventListener("input", () => inputs.push(d.getElementById("wkl_who1").value));
  w.eval(engine);
  w.APStory.init({ form: "what-kind-of-light", root: "#root", navHost: "#navOff", actionsRow: "#acts", pagePath: "/start", buttonClass: "b", primaryClass: "p", ghostClass: "g", tail: "",
    fields: [{ id: "wkl_who1", key: "who1" }, { id: "wkl_light1", key: "light1" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: a => a.who1 ? "To " + a.who1 + ", am I " + (a.light1 || "") : "", assistant: false, after: false });
  return { w, d, events, inputs };
}
(async () => {
  t("the band says v2, carries its end marker, and holds no backslash (the editor eats them)", /^<!-- AP-PROMISE-BAND-v2/.test(band) && /<!-- \/AP-PROMISE-BAND-v2 -->\s*$/.test(band) && band.indexOf("\\") === -1);
  t("the promise and the three stones are unchanged from v1", /Tell your story\.<\/span> <span class="apb-s">Offer your testimony\.<\/span> <span class="apb-s">Be known in community\./.test(band) && /Written down and kept\.<br>Only you can read it\./.test(band) && /Read by our team<br>before it goes up\./.test(band) && /Published on Our Stories\.<br>Other men can read it now\./.test(band));
  t("v1's Start below line is gone; the question is the piece's own, in its words", !/Start below, with Your Story/.test(band) && /What kind of light am I\?/.test(band) && /Who is close enough to see your light\?/.test(band));
  { const { d } = home();
    const who = Array.from(d.querySelectorAll(".apb-who")).map(a => a.getAttribute("data-who"));
    t("ten people to tap, the piece's own row in its order, each a real link to the piece", who.join("|") === "my wife|my son|my daughter|my father|my mother|my brother|my sister|my friend|my coworker|my neighbor" && Array.from(d.querySelectorAll(".apb-who")).every(a => a.getAttribute("href") === "/what-kind-of-light"));
    t("Someone else is a plain link to the piece, holding nothing", d.querySelector(".apb-else").getAttribute("href") === "/what-kind-of-light" && !d.querySelector(".apb-else").hasAttribute("data-who"));
  }
  // ---- a tap
  let held;
  { const { w, d, events } = home();
    d.querySelector('.apb-who[data-who="my son"]').click();
    held = w.localStorage.getItem("apStoryPending:what-kind-of-light");
    const v = JSON.parse(held || "null");
    t("a tap holds the name on the device in the engine's own shape: {t, a:{who1}, press:false}, nothing else", v && typeof v.t === "number" && JSON.stringify(v.a) === '{"who1":"my son"}' && v.press === false && Object.keys(v).sort().join() === "a,press,t");
    t("and counts one start, with the piece key only", events.length === 1 && events[0][1] === "story_start" && JSON.stringify(events[0][2]) === '{"piece":"what-kind-of-light"}');
    t("the tapped word shows it is going", d.querySelector('.apb-who[data-who="my son"]').classList.contains("is-going"));
  }
  // ---- words he already holds are not overwritten, and not counted again
  { const { w, d, events } = home({ storage: { "apStoryPending:what-kind-of-light": JSON.stringify({ t: Date.now() - 1000, a: { who1: "my father", light1: "a porch light" }, press: false }) } });
    d.querySelector('.apb-who[data-who="my son"]').click();
    const v = JSON.parse(w.localStorage.getItem("apStoryPending:what-kind-of-light"));
    t("words he already holds on the device win over the tap, and no second start is counted", v.a.who1 === "my father" && v.a.light1 === "a porch light" && events.length === 0);
  }
  // ---- no Analytics on the page: nothing breaks
  { const { w, d } = home({ noGtag: true }); let threw = false; try { d.querySelector('.apb-who[data-who="my wife"]').click(); } catch (e) { threw = true; }
    t("without gtag the tap still holds the name and throws nothing", !threw && /my wife/.test(w.localStorage.getItem("apStoryPending:what-kind-of-light"))); }
  // ---- the piece, signed out, with the held name
  { const { d, events, inputs } = piece({ "apStoryPending:what-kind-of-light": held }); await sleep(80);
    t("on What Kind of Light the name is already in the first box, and the page heard it typed", d.getElementById("wkl_who1").value === "my son" && inputs.length === 1 && inputs[0] === "my son");
    const l = d.getElementById("wkl_light1"); l.value = "a lamp on a stand"; l.dispatchEvent(new (d.defaultView.Event)("input", { bubbles: true }));
    t("writing the light counts no second start (the band already counted it)", events.length === 0);
  }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
