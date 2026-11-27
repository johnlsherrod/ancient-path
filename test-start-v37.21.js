// AP-TEST 1 for Your Page v37.17 (AP-SHIP 1 line 2: measured in a real browser). Playwright Chromium; the site, the Research reader, the Testimony script and jsDelivr are mocked.
// Run: node test-start-v37.21.js   (from the repo folder; needs playwright)
const { chromium } = require("playwright"); const fs = require("fs"); const crypto = require("crypto");
const D = __dirname + "/";
const sri = f => "sha384-" + crypto.createHash("sha384").update(fs.readFileSync(D + f)).digest("base64");
const RR = /script\.google\.com\/macros\/s\/AKfycbyz6/, TS = /script\.google\.com\/macros\/s\/AKfycbxTf/, DESK = /script\.google\.com\/macros\/s\/AKfycbytkn/;
let html = fs.readFileSync(D + "pages/start-v37.21.html", "utf8");
html = html.split("sha384-PENDING").join(sri("scripts/hisroad.js")).split("PENDING_COMMIT").join("TEST");
html = html.replace(/STORY_SRI = "[^"]+"/, 'STORY_SRI = "' + sri("story.js") + '"').replace(/STONE_SRI = "[^"]+"/, 'STONE_SRI = "' + sri("stone.js") + '"');
const files = { his: fs.readFileSync(D + "scripts/hisroad.js", "utf8"), row: fs.readFileSync(D + "scripts/row.js", "utf8"), story: fs.readFileSync(D + "story.js", "utf8"), stone: fs.readFileSync(D + "stone.js", "utf8") };
const ME = { id: "u1234567890", first_name: "John", last_name: "T", email: "j@x.com" };
const doc = (withMe) => '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="x"><style>body{margin:0}</style><script>window.getUserToken=function(){return "tok"};' + (withMe ? 'window.me=' + JSON.stringify(ME) + ';' : '') + '</script></head><body class="ap-home"><div id="sectionsWrapper"><div class="column" style="padding:0 25px"><div id="el_1600361776627_10" style="padding:0 25px 0 0"><div id="el_1600361776628_11">' + html + '</div></div></div></div></body></html>';
const today = new Date().toISOString().slice(0, 10);
const roadData = (inGroup) => ({ ok: true, build: "11.15.2", week: { start: today }, v11: { bare: false, first: false, ended: false, after: false, inGroup: !!inGroup, course: "Breaking Free", total: 12, unit: { n: 3, label: "Week 3", title: "Test" }, meet: null, done: {}, practices: [], practice: "", when: "", house: {} }, r13: { wk: 3, items: {}, table: [], practice: null }, pics: {} });
const wait = ms => new Promise(r => setTimeout(r, ms));
let fails = 0; const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails++; };

async function run(name, o) {
  const b = o.browser, ctx = await b.newContext({ viewport: { width: 1200, height: 900 } }), p = await ctx.newPage();
  const log = { rr: [], ts: 0, desk: 0, roadFile: 0, errors: [], t0: Date.now(), his: 0 };
  p.on("pageerror", e => log.errors.push(String(e.stack || e.message).split("\n").slice(0, 3).join(" | ").slice(0, 300)));
  if (o.kept) await ctx.addInitScript(k => { try { localStorage.setItem("ap_hisroad_v4", JSON.stringify(k.c)); if (k.s) localStorage.setItem("ap_start_v1", JSON.stringify(k.s)); } catch (e) {} }, { c: { email: ME.email, data: roadData(o.group), ours: o.keptOurs || null, at: Date.now() }, s: o.keptStatus || null });
  await p.route("**/*", async (route) => {
    const u = route.request().url(), m = route.request().method();
    if (RR.test(u)) {
      if (/file=road\.js/.test(u)) { log.roadFile++; return route.fulfill({ contentType: "application/javascript", body: files.his }); }
      if (/file=row\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", body: files.row });
      let body = {}; try { body = JSON.parse(route.request().postData() || "{}"); } catch (e) {}
      log.rr.push({ action: body.action, at: Date.now() - log.t0 });
      if (body.action === "start") {
        await wait(o.startMs || 1200);
        if (o.startFail) return route.fulfill({ status: 500, body: "x" });
        return route.fulfill({ contentType: "application/json", body: JSON.stringify({ ok: true, build: "13.17.0", road: roadData(o.group), ours: o.group ? { ok: true, ours: { people: [] } } : null, status: { ok: true, pieces: [{ rid: "r1", unit: "lament", title: "t", from: "f", state: "offered", read: false, at: "" }] }, pics: { page: "", desk: "" } }) });
      }
      await wait(300);
      if (body.action === "road" && o.roadFail) return route.fulfill({ status: 500, body: "x" });
      if (body.action === "road") return route.fulfill({ contentType: "application/json", body: JSON.stringify(roadData(o.group)) });
      if (body.action === "road_ours") return route.fulfill({ contentType: "application/json", body: JSON.stringify({ ok: true, ours: { people: [] } }) });
      return route.fulfill({ contentType: "application/json", body: JSON.stringify({ ok: true }) });
    }
    if (TS.test(u)) { if (/callback=/.test(u)) { log.feed = (log.feed || 0) + 1; const cb = decodeURIComponent(u.split("callback=")[1].split("&")[0]); return route.fulfill({ contentType: "application/javascript", body: cb + "({\"pieces\":[]})" }); } if (/status=/.test(u)) log.ts++; return route.fulfill({ contentType: "application/json", body: JSON.stringify({ pieces: [] }) }); }
    if (DESK.test(u)) { log.desk++; return route.fulfill({ contentType: "application/json", body: JSON.stringify({ ok: true }) }); }
    if (/cdn\.jsdelivr\.net.*hisroad\.js/.test(u)) { log.his++; if (o.cdnFail) return route.abort(); await wait(o.cdnMs || 60); return route.fulfill({ contentType: "application/javascript", headers: { "access-control-allow-origin": "*" }, body: files.his }); }
    if (/cdn\.jsdelivr\.net.*row\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", headers: { "access-control-allow-origin": "*" }, body: files.row });
    if (/story\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", headers: { "access-control-allow-origin": "*" }, body: files.story });
    if (/stone\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", headers: { "access-control-allow-origin": "*" }, body: files.stone });
    if (/user_stats/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ me: ME }) });
    if (/^https?:\/\/www\.ancientpathcoaching\.com\/start/.test(u)) return route.fulfill({ contentType: "text/html", body: doc(o.withMe !== false) });
    return route.fulfill({ status: 204, body: "" });
  });
  await p.goto("https://www.ancientpathcoaching.com/start");
  const probe = async () => p.evaluate(() => ({ road: (document.getElementById("apRoad4") || { childNodes: [] }).childNodes.length, kept: window.APPerf && window.APPerf.kept, fresh: window.APPerf && window.APPerf.fresh, his: window.APHisRoad && window.APHisRoad.build, start: window.APPerf && window.APPerf.startAt, answer: window.APPerf && window.APPerf.answerAt }));
  let early = null; if (o.earlyAt) { await wait(o.earlyAt); early = await probe(); }
  await wait(o.settle || 3200);
  const end = await probe(), ls = await p.evaluate(() => ({ st: localStorage.getItem("ap_start_v1"), kept: !!localStorage.getItem("ap_hisroad_v4") }));
  await ctx.close(); return { log, early, end, ls };
}
(async () => {
  const browser = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  let r;
  // 1. return visit: a kept copy, the one call answers in 1.2 s
  r = await run("return", { browser, kept: true, startMs: 1200, earlyAt: 700 });
  ok(r.log.errors.length === 0, "1 no page errors " + JSON.stringify(r.log.errors));
  ok(r.early && r.early.road > 0 && r.early.his === "11.16.0", "1 the road is drawn from the kept copy before the call answers (" + JSON.stringify(r.early) + ")");
  ok(r.log.rr.filter(x => x.action === "start").length === 1 && r.log.rr.filter(x => x.action !== "start").length === 0, "1 exactly one call to the Research reader: " + JSON.stringify(r.log.rr.map(x => x.action)));
  ok(r.log.ts === 0, "1 no separate ?status= check to the Testimony script (" + r.log.ts + ")");
  ok(r.log.roadFile === 0 && r.log.his === 1, "1 hisroad.js came once from the CDN, nothing from ?file=road.js");
  ok(r.end.fresh > 1000, "1 the fresh answer is drawn when it comes (" + r.end.fresh + " ms)");
  ok(/offered/.test(r.ls.st || ""), "1 the standing of his pieces is kept in ap_start_v1");
  // 2. the one call fails: each part asks for itself, nothing blanks
  r = await run("fail", { browser, kept: true, startFail: true, startMs: 300, settle: 3500 });
  ok(r.log.errors.length === 0, "2 no page errors " + JSON.stringify(r.log.errors));
  ok(r.end.road > 0, "2 the road is still drawn when the one call fails");
  ok(r.log.rr.filter(x => x.action === "road").length === 1 && r.log.ts === 2, "2 the road is asked for alone once; the status is asked for by the offer feet and by stone.js, once each: " + JSON.stringify(r.log.rr.map(x => x.action)) + " ts " + r.log.ts);
  // 3. first visit: no kept copy, the call takes 3 s; the page draws its own road at once and the fresh one after
  r = await run("first", { browser, kept: false, startMs: 3000, earlyAt: 1200, settle: 4600 });
  ok(r.log.errors.length === 0, "3 no page errors " + JSON.stringify(r.log.errors));
  ok(r.early && r.early.road === 0, "3 first visit, nothing kept: the road panel waits for the fresh answer, no generic road flashes first (" + JSON.stringify(r.early) + ")");
  ok(r.end.fresh > 2800 && r.ls.kept, "3 the fresh road replaces it and is kept (" + r.end.fresh + " ms)");
  // 3b. no kept copy and nothing answers: the page still draws its own plain road
  r = await run("dead", { browser, kept: false, startFail: true, roadFail: true, startMs: 300, settle: 3500 });
  ok(r.end.road > 0, "3b with no kept copy and no answer from anywhere the page draws its plain road, never blank (" + r.end.road + ")");
  // 4. the CDN will not serve hisroad.js: the Research reader's own file is the way back
  r = await run("cdn", { browser, kept: true, cdnFail: true, startMs: 800, settle: 3500 });
  ok(r.log.roadFile === 1 && r.end.road > 0, "4 CDN refused: the fallback loads ?file=road.js once and the road draws (" + r.log.roadFile + ")");
  // 5. a man in a group: Our Group comes in the one call
  r = await run("group", { browser, kept: true, group: true, startMs: 800, settle: 3000 });
  ok(r.log.errors.length === 0, "5 no page errors " + JSON.stringify(r.log.errors));
  ok(!r.log.rr.some(x => x.action === "road_ours"), "5 Our Group is not asked for separately: " + JSON.stringify(r.log.rr.map(x => x.action)));
  // 5b. a man in a group whose kept copy already holds Our Group: nothing is asked for twice
  r = await run("group2", { browser, kept: true, group: true, keptOurs: { people: [] }, startMs: 800, settle: 3000 });
  ok(!r.log.rr.some(x => x.action === "road_ours") && r.log.rr.length === 1, "5b kept Our Group: one call only: " + JSON.stringify(r.log.rr.map(x => x.action)));
  // 6. no window.me yet: the page's own account read starts the call
  r = await run("nome", { browser, kept: false, withMe: false, startMs: 600, settle: 3000 });
  ok(r.log.rr.filter(x => x.action === "start").length === 1 && r.end.fresh > 0, "6 with no early account the call starts after the account read and the road draws");
  await browser.close(); console.log(fails ? "FAILED " + fails : "ALL PASS"); process.exit(fails ? 1 : 0);
})();
