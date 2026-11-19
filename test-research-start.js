// AP-TEST 1 for Research reader 13.17: the new block (start, the Testimony status, keep-warm) run against stubs; the status checked against review-code.gs's own statusFeed_ on the same rows.
const fs = require("fs"), crypto = require("crypto"), vm = require("vm");
const D = __dirname + "/";
const rr = fs.readFileSync(D + "scripts/ResearchReader.gs", "utf8"), rc = fs.readFileSync(D + "scripts/review-code.gs", "utf8");
const a = rr.indexOf("/* ═══════════ build 13.17"), b = rr.indexOf("function ensureBuild1317_"), e = rr.indexOf("\n}\n", b) + 3;
const block = rr.slice(a, e);
let fails = 0; const ok = (c, m) => { console.log((c ? "PASS " : "FAIL ") + m); if (!c) fails++; };
// rows as the Testimony sheet holds them (A..O, 1-based columns; row 1 is the header)
const WHO = crypto.createHash("sha256").update("ap:u1234567890").digest("hex");
const rows = [["Timestamp", "Name", "Attr", "Title", "From", "Email", "Piece", "Consent", "Notes", "Review ID", "Decision", "Decided by", "Decided at", "Who", "Unit"]];
const row = (ts, title, rid, dec, who, unit) => { const r = new Array(15).fill(""); r[0] = new Date(ts); r[3] = title; r[4] = "Set a Stone"; r[5] = "secret@x.com"; r[6] = "the text"; r[9] = rid; r[10] = dec; r[13] = who; r[14] = unit; return r; };
rows.push(row("2026-10-01T12:00:00Z", "Stone a", "r1", "", WHO, "stone1"), row("2026-10-05T12:00:00Z", "Stone a", "r2", "Approved", WHO, "stone1"), row("2026-10-06T12:00:00Z", "Lament", "r3", "Declined", WHO, "lament"), row("2026-10-07T12:00:00Z", "Other", "r4", "", "someoneelse123", "lament"), row("2026-10-08T12:00:00Z", "NoUnit", "r5", "", WHO, ""));
const cacheStore = {}; let opens = 0;
const sheet = { getLastRow: () => rows.length, getRange: (r, c, n, w) => ({ getValues: () => rows.slice(r - 1, r - 1 + n).map(x => x.slice(c - 1, c - 1 + w)) }), getDataRange: () => ({ getValues: () => rows }) };
const ctx = { Utilities: { computeDigest: (alg, s) => Array.from(crypto.createHash("sha256").update(s).digest()).map(x => x > 127 ? x - 256 : x), DigestAlgorithm: { SHA_256: 1 }, Charset: { UTF_8: 1 } }, CacheService: { getScriptCache: () => ({ get: k => cacheStore[k] || null, put: (k, v) => { cacheStore[k] = v; } }) }, SpreadsheetApp: { openById: id => { opens++; return { getSheets: () => [sheet] }; } }, Date, JSON, Object, Number, String, Math, Array, Error, console, learnerCalls: 0 };
vm.createContext(ctx);
vm.runInContext(block.replace(/function ensureBuild1317_[\s\S]*$/, ""), ctx);
ok(ctx.whoHash_("u1234567890") === WHO, "whoHash_ is the page's hash (sha-256 of ap: + the site id)");
const out = ctx.testimonyStatus_(WHO), p = out.pieces;
ok(p.length === 2 && p[0].unit === "stone1" && p[0].state === "published" && p[0].rid === "r2", "newest row per unit wins; approved reads published: " + JSON.stringify(p.map(x => x.unit + ":" + x.state)));
ok(p[1].unit === "lament" && p[1].state === "kept" && p[1].read === true, "declined reads kept and read");
ok(!/secret|the text/.test(JSON.stringify(out)), "never the text, never an email");
ok(ctx.testimonyStatus_("short").pieces.length === 0 && ctx.testimonyStatus_("").pieces.length === 0, "no usable who answers an empty list");
const before = opens; ctx.testimonyStatus_(WHO); ok(opens === before, "a second ask inside 45 seconds reads no sheet");
// the same answer the Testimony script's own statusFeed_ gives for the same rows (review-code.gs loaded whole, its sheet stubbed)
const c2 = { SpreadsheetApp: { getActiveSpreadsheet: () => ({ getSheets: () => [sheet] }) }, ContentService: { createTextOutput: (t) => ({ t, setMimeType() { return this; } }), MimeType: { JSON: 1, JAVASCRIPT: 2 } }, Date, JSON, Object, Number, String, Math, Array, Error, console };
vm.createContext(c2); vm.runInContext(rc, c2);
const theirs = JSON.parse(c2.statusFeed_({ parameter: { status: WHO } }).t);
const strip = x => JSON.stringify(x.pieces.map(q => [q.rid, q.unit, q.title, q.from, q.state, q.read, q.at]));
ok(strip(theirs) === strip(out), "identical to statusFeed_ in review-code.gs on the same rows");
// start: one part failing leaves the others
ctx.roadCall_ = (b) => { if (b.action === "road") return { ok: true, v11: { inGroup: true } }; if (b.action === "road_ours") throw new Error("boom"); };
ctx.triage_ = () => {}; ctx.SCRIPT_BUILD = "13.17.0"; ctx.RE_SHEET_ID = "x"; ctx.readConfig_ = () => ({ "band picture page": "", "band picture desk": "" });
const s = ctx.startCall_({ email: "j@x.com", lwid: "u1234567890", name: "J" });
ok(s.ok === true && s.road && s.road.ok && s.ours === null && s.status.pieces.length === 2 && s.pics && typeof s.ms.all === "number", "start: Our Group failing leaves the road, the status and the pictures");
ctx.roadCall_ = (b) => { calls.push(b.action); return { ok: true, v11: { inGroup: false } }; }; var calls = []; ctx.calls = calls;
const s2 = ctx.startCall_({ email: "j@x.com", lwid: "u1234567890" });
ok(!calls.includes("road_ours") && s2.ours === null, "start: a man not in a group does not ask for Our Group");
// the dispatch and the warm ping
ok(/if \(action === 'start'\) return startCall_\(b\);[^\n]*\n\s*if \(action\.indexOf\('road'\) === 0\)/.test(rr), "growthCall_ sends start before the road actions");
ok(/e\.parameter\.warm\) return jsonOut_\(\{ ok: true, warm: true \}\);[\s\S]{0,200}stampDeployed_\(\);/.test(rr), "doGet answers ?warm=1 before anything is read");
ok(/var SCRIPT_BUILD = '13\.17\.0';/.test(rr) && /var ROAD_BUILD = '11\.15\.2';/.test(rr), "build stamps: SCRIPT_BUILD 13.17.0, ROAD_BUILD 11.15.2");
ok(/ScriptApp\.newTrigger\('keepWarm'\)\.timeBased\(\)\.everyMinutes\(10\)/.test(rr), "the keep-warm timer is every 10 minutes");
// keep-warm: a trigger installed once
let made = 0, trig = []; ctx.ScriptApp = { getProjectTriggers: () => trig, newTrigger: (f) => ({ timeBased: () => ({ everyMinutes: (n) => ({ create: () => { made++; trig.push({ getHandlerFunction: () => f }); } }) }) }) };
ctx.installKeepWarm_(); ctx.installKeepWarm_(); ok(made === 1, "installKeepWarm_ makes the timer once, a second call finds it");
console.log(fails ? "FAILED " + fails : "ALL PASS"); process.exit(fails ? 1 : 0);
