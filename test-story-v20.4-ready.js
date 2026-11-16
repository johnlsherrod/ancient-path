// story.js v20.4 — team waits for the page. Run: node test-story-v20.4-ready.js
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
async function world(o) {
  const dom = new JSDOM('<!doctype html><html><head><meta name="csrf-token" content="x"></head><body></body></html>', { runScripts: "outside-only", url: "https://www.ancientpathcoaching.com/start" });
  const w = dom.window, d = w.document; let state = "loading";
  await new Promise(r => { if (d.readyState === "complete") r(); else w.addEventListener("load", () => setTimeout(r, 0)); });   /* jsdom's own load first; the page's load is ours to fire */
  Object.defineProperty(d, "readyState", { configurable: true, get: () => state });
  w.matchMedia = () => ({ matches: false });
  const events = []; w.gtag = function () { events.push([].slice.call(arguments)); };
  w.fetch = (p) => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(/user_stats/.test(p) ? { me: { email: o.email, username: "x" } } : {}) });
  w.AP_TEAM_WAIT = 300;
  w.eval(src);
  return { w, d, events, load() { state = "complete"; if (o.lateSession) { w.getUserToken = () => "tok"; } w.dispatchEvent(new w.Event("load")); } };
}
(async () => {
  { const x = await world({ email: "john@ancientpathcoaching.com", lateSession: true });
    x.w.APStory.track("story_return", "where-i-am-from"); await sleep(50);
    t("before the page loads, an event waits (nothing sent as 'false')", x.events.filter(e => e[1] === "story_return").length === 0);
    x.load(); await sleep(100);
    const ev = x.events.find(e => e[1] === "story_return");
    t("once loaded with his session, our own account is team true", ev && ev[2].team === "true");
    t("…and carries build 20.4, nothing else beyond piece", ev && ev[2].build === "20.4" && Object.keys(ev[2]).sort().join() === "build,piece,team"); }
  { const x = await world({ email: "someone@example.com" });
    x.w.APStory.track("story_start", "write-a-lament"); x.load(); await sleep(100);
    const ev = x.events.find(e => e[1] === "story_start");
    t("a page that loads signed out is team false", ev && ev[2].team === "false"); }
  { const x = await world({ email: "someone@example.com", lateSession: true });
    x.w.APStory.track("story_start", "write-a-lament"); x.load(); await sleep(100);
    const ev = x.events.find(e => e[1] === "story_start");
    t("a man signed in is team false", ev && ev[2].team === "false"); }
  console.log(fails ? fails + " FAILED" : "all passed"); process.exit(fails ? 1 : 0);
})();
