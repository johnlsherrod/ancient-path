/* AP-READER-RELAY v3 · Ancient Path Biblical Coaching
   The relay that lets a page on ancientpathcoaching.com send a man's story to Claude without the key ever
   leaving Google. road.js (The Road I Walked, and any piece that reads) POSTs here; this script adds the key,
   calls Claude, and hands back only the parsed answer.

   THE CONTRACT (what road.js sends and reads — do not change it without changing road.js):
     request  : POST, Content-Type text/plain (keeps it a simple request; Apps Script answers no preflight)
                body = JSON {"input": "<the whole instruction, HOUSE + story + task>", "id": "<the man's owner id or empty>"}
     response : {"ok": true, "data": <the JSON object Claude replied with>}
             or {"ok": false, "error": "<code>"} where code is one of
                rate_limited · refused · invalid_json · empty_completion · network · bad_request
                (road.js turns each code into plain words for the man; "network" is its catch-all)

   SETTINGS live in Project Settings → Script Properties, never in this file:
     ANTHROPIC_API_KEY   required. The key from console.anthropic.com. Rotate it there; paste the new one here.
     MODEL               optional. Default claude-sonnet-5.
     FAST_MODEL          optional. Default claude-haiku-4-5. Used only when a request says "fast": true (the Guide’s choosing
                         step, 10 Oct 2026); if it does not answer, the usual model answers instead. The four buttons never send it.
     MAX_TOKENS          optional. Default 2000 (the longest answer the page ever asks for is a smoothed chapter).
     CAP_PER_MAN_DAY     optional. Default 60 calls per man per day (a button press is two calls, so ~30 presses).
     CAP_ALL_DAY         optional. Default 600 calls per day across everyone (the spending brake).
     CAP_ANON_DAY        optional. Default 120 calls per day for requests with no id (a signed-out man).

   WHAT IS NEVER DONE HERE: no story text is logged, stored or emailed. Logs carry only codes and counts.
   The daily counters live in CacheService for 24 hours and hold no words.

   DEPLOY: Deploy → Manage deployments → pencil → Version: New version → Deploy. That keeps the same address.
   (A brand-new "New deployment" issues a NEW address; then the page's AP-ROAD-CONFIG block needs reader: "<new address>".)
   Execute as: Me · Who has access: Anyone.
*/

var API_URL = "https://api.anthropic.com/v1/messages";
var API_VERSION = "2023-06-01";
var HOUSE_MARK = "You are \"a first reader\" for Ancient Path Biblical Coaching."; // every real request from road.js opens with this line
var MAX_INPUT = 60000;  // characters; road.js already cuts at 60000

function doGet() {
  return out_({ ok: false, error: "bad_request" });
}

function doPost(e) {
  try { return doPost_(e); }
  catch (err) { try { triage_('Reader relay call', err); } catch (x) {} return out_({ ok: false, error: "network" }); }
}

function doPost_(e) {
  var req;
  try { req = JSON.parse((e && e.postData && e.postData.contents) || ""); } catch (err) { return out_({ ok: false, error: "bad_request" }); }
  if (!req || typeof req.input !== "string") return out_({ ok: false, error: "bad_request" });

  var input = req.input.slice(0, MAX_INPUT);
  // Only the page's own instructions pass. This is what stops the address being used as a free door to Claude.
  if (input.indexOf(HOUSE_MARK) !== 0) return out_({ ok: false, error: "bad_request" });
  if (input.length < HOUSE_MARK.length + 40) return out_({ ok: false, error: "bad_request" });

  var props = PropertiesService.getScriptProperties();
  var key = findKey_(props);
  if (!key) { console.error("relay: no ANTHROPIC_API_KEY in Script Properties"); relayFail_("Claude key refused: no api key in Script Properties"); return out_({ ok: false, error: "network" }); }

  var id = /^[a-f0-9]{32}$/.test(String(req.id || "")) ? String(req.id) : "";
  var gate = allow_(id, props);
  if (gate !== "ok") { console.warn("relay: " + gate + (id ? " id=" + id.slice(0, 6) : " anon")); return out_({ ok: false, error: "rate_limited" }); }

  var fast = req.fast === true;
  var res = ask_(key, props, input, fast);
  if (fast && res.code === "network") res = ask_(key, props, input, false);   // the faster model did not answer: the usual one does
  console.log("relay: " + res.code + (id ? " id=" + id.slice(0, 6) : " anon") + " in=" + input.length + (res.usage ? " tok=" + res.usage : ""));
  if (res.code !== "ok") return out_({ ok: false, error: res.code });
  cleanRun_("relay");   // a clean answer: any failure card this script opened closes as Proven after 30 clean minutes
  return out_({ ok: true, data: res.data });
}

/* ---------- the call to Claude ---------- */
function ask_(key, props, input, fast) {
  var model = fast ? (props.getProperty("FAST_MODEL") || "claude-haiku-4-5") : (props.getProperty("MODEL") || "claude-sonnet-5");
  var maxTokens = num_(props.getProperty("MAX_TOKENS"), 2000);
  var body = {
    model: model,
    max_tokens: maxTokens,
    system: "Reply with only the JSON object the instructions ask for. No preface, no code fence, no words outside the JSON.",
    messages: [{ role: "user", content: input }]
  };
  var resp;
  try {
    resp = UrlFetchApp.fetch(API_URL, {
      method: "post",
      contentType: "application/json",
      headers: { "x-api-key": key, "anthropic-version": API_VERSION },
      payload: JSON.stringify(body),
      muteHttpExceptions: true
    });
  } catch (err) { console.error("relay: fetch failed " + String(err).slice(0, 120)); relayFail_("Claude did not answer: " + String(err).slice(0, 100)); return { code: "network" }; }

  var status = resp.getResponseCode(), text = resp.getContentText() || "";
  if (status === 429 || status === 529) { relayFail_("Claude is busy (" + status + "), try again later"); return { code: "rate_limited" }; }
  if (status === 401 || status === 403) { console.error("relay: key refused (" + status + ")"); relayFail_("Claude key refused (" + status + ", api key)"); return { code: "network" }; }
  if (status < 200 || status >= 300) { console.error("relay: api " + status + " " + text.slice(0, 200)); relayFail_("Claude server error (" + status + ")"); return { code: "network" }; }

  var msg; try { msg = JSON.parse(text); } catch (err) { return { code: "invalid_json" }; }
  if (msg && msg.stop_reason === "refusal") return { code: "refused" };
  var usage = msg && msg.usage ? (msg.usage.input_tokens + "+" + msg.usage.output_tokens) : "";
  var reply = "";
  ((msg && msg.content) || []).forEach(function (b) { if (b && b.type === "text" && b.text) reply += b.text; });
  reply = reply.trim();
  if (!reply) return { code: "empty_completion", usage: usage };

  var data = parseJSON_(reply);
  if (!data || typeof data !== "object") return { code: "invalid_json", usage: usage };
  return { code: "ok", data: data, usage: usage };
}

/* Claude is told to answer with only JSON; this still tolerates a code fence or a stray sentence around it. */
function parseJSON_(s) {
  try { return JSON.parse(s); } catch (e) {}
  var m = s.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (m) { try { return JSON.parse(m[1]); } catch (e) {} }
  var a = s.indexOf("{"), b = s.lastIndexOf("}");
  if (a >= 0 && b > a) { try { return JSON.parse(s.slice(a, b + 1)); } catch (e) {} }
  return null;
}

/* ---------- the brakes: per man, per anonymous pool, and everyone, each per day ---------- */
function allow_(id, props) {
  var cache = CacheService.getScriptCache();
  var day = Utilities.formatDate(new Date(), "America/Chicago", "yyyyMMdd");
  var capAll = num_(props.getProperty("CAP_ALL_DAY"), 600);
  var capMan = num_(props.getProperty("CAP_PER_MAN_DAY"), 60);
  var capAnon = num_(props.getProperty("CAP_ANON_DAY"), 120);
  var kAll = "all:" + day, kWho = (id ? "man:" + id : "anon") + ":" + day;
  var nAll = num_(cache.get(kAll), 0), nWho = num_(cache.get(kWho), 0);
  if (nAll >= capAll) return "cap_all";
  if (nWho >= (id ? capMan : capAnon)) return id ? "cap_man" : "cap_anon";
  cache.put(kAll, String(nAll + 1), 86400);
  cache.put(kWho, String(nWho + 1), 86400);
  return "ok";
}

function num_(v, d) { var n = parseInt(v, 10); return isNaN(n) ? d : n; }

/* The key is read from ANTHROPIC_API_KEY. If an earlier version of this relay stored it under another name,
   the first property whose value looks like a Claude key (sk-ant-…) is used, so a paste-over never loses the key. */
function findKey_(props) {
  var k = props.getProperty("ANTHROPIC_API_KEY");
  if (k) return k;
  var all = props.getProperties() || {};
  for (var name in all) { if (/^sk-ant-/.test(String(all[name] || ""))) return all[name]; }
  return "";
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/* ---------- run this once by hand in the editor after pasting the key: Run → checkKey ---------- */
function checkKey() {
  var key = findKey_(PropertiesService.getScriptProperties());
  if (!key) throw new Error("No ANTHROPIC_API_KEY in Script Properties yet.");
  var input = HOUSE_MARK + " This is a check of the relay. Reply with only this JSON object: {\"hello\": \"road\"}";
  var r = ask_(key, PropertiesService.getScriptProperties(), input);
  Logger.log(JSON.stringify(r));
  if (r.code !== "ok") throw new Error("The key or the call failed: " + r.code);
  Logger.log("The relay can reach Claude. Model answered: " + JSON.stringify(r.data));
}

/* The relay's one line into the triage block below: a failure of the call to Claude is sorted there (a hiccup waits, a refused key is one Front Desk card). It never throws and never touches what the man sees. */
function relayFail_(msg) { try { triage_('Reader relay call', new Error(msg)); } catch (e) {} }

// ───────────────────────────── AP-TRIAGE 1 · Reader relay · Triage 1 ─────────────────────────────
// John Sherrod, Nov 17, 2026: a failure is sorted, handled and, only when it needs us, put in front of him in plain words with the repair under
// way. He never gets a raw error. Wait (a passing hiccup: retried at once and on the next run, silent, a card only after 30 minutes), Repair (a
// known cause the script fixes), Needs us (one card on the Front Desk Actions tab, key fix:<script>:<signature>, closed by this script as Proven
// after the job has run clean for 30 minutes; only S1 sends one plain email). Every event goes to the one event log with its school (Script
// Properties tri:school and tri:secret live in the Front Desk only: this script queues each event on the Triage queue tab of the Front Desk sheet and the Front Desk sends it). The block is the Front Desk's own (build 44), built from one source: only TRI_ and the three
// rule tables differ, so a new school is a row and a new script is the same block.
const TRI_ = {
  SCRIPT: 'reader-relay', LABEL: 'Reader relay', FILE: 'scripts/Relay.gs', BUILD: 'Triage 1',
  URL: 'https://eyiqlyaridagclnbxhzy.supabase.co/rest/v1/rpc/event_ingest',
  KEY: 'sb_publishable_qB3WnlYvdl6cO4f0CsrjTQ_zcaLaeYq', // the platform's publishable key: it opens one door, and the door wants the secret
  DESK: 'https://www.ancientpathcoaching.com/front-desk', DESK_SHEET: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw',
  WAIT_MIN: 30, CLEAN_MIN: 30, MAX: 20, PAUSES: [1000, 4000, 10000]
};
const TRI_LIMIT_ = /too many times (for one day|per day|in a day)|daily limit|quota|Limit Exceeded: (Email|Urlfetch|Properties|Document|Trigger)|credit balance|billing/i;
const TRI_ACCESS_ = /permission|authorization is required|access denied|invalid_grant|unauthori[sz]ed|forbidden|\b(401|403)\b|api key|x-api-key|authentication_error|oauth/i;
const TRI_CODE_ = /\b(TypeError|ReferenceError|SyntaxError|RangeError)\b|is not a function|is not defined|Cannot (read|set) propert|is not iterable|Cannot destructure|before initialization|is not a constructor/i;
const TRI_WAIT_ = /timed out|timeout|Service [A-Za-z ]+ failed|Server error|Internal error|Bad Gateway|Gateway Time|Service Unavailable|unavailable|temporar|try again|backend error|Could not obtain lock|Lock timeout|maximum execution time|too many times in a short time|ECONNRESET|socket|DNS error|Address unavailable|rate limit|\b(429|500|502|503|504)\b|Unexpected error while getting the method or property/i;
/** Which outside service a passing failure names; every job that hits the same outage shares one signature, so one outage is one card. */
const TRI_SERVICES_ = [[/claude|anthropic/i, 'Claude', 'claude'], [/spreadsheet|sheet/i, 'Google Sheets', 'google-sheets'], [/drive/i, 'Google Drive', 'google-drive'], [/gmail|mail/i, 'Gmail', 'gmail'], [/calendar/i, 'Google Calendar', 'google-calendar'],
  [/lock/i, 'the script lock', 'script-lock'], [/maximum execution time/i, 'the time limit', 'time-limit'], [/urlfetch|fetch|http|address unavailable|dns|socket|econn/i, 'an outside service', 'outside-service']];
/** Who a failure touches, and how serious it is (S1: a person's words are at risk or people cannot get in; S2: a feature is broken; S3: a rough edge). */
const TRI_WHO_ = [[/key check/i, 'our team'], [/reader|relay|Claude/i, 'the men']];
const TRI_SEV_ = [[/key check/i, 'S3']];
const TRI_SEV_WORDS_ = { S1: 'S1: a person’s words are at risk, or people can’t get in.', S2: 'S2: a feature is broken.', S3: 'S3: a rough edge.' };
const TRI_SRC_ = [[/key check/i, 'keys'], [/reader|relay|Claude/i, 'relay']];
let TRI_RUN_ = {}; // signatures that failed in this execution: a clean run clears only the others

function triMsg_(e) { return e == null ? '' : (e.message !== undefined ? String(e.message) : (typeof e === 'object' ? JSON.stringify(e) : String(e))); }
/** The job's own name in plain words, no ids, no names: "Room reminder NOT sent for Dan" is "Room reminder not sent". */
function triJob_(s) {
  let j = String(s || '').split('\n')[0].replace(/:\s*$/, '').replace(/ for .*$/, '').replace(/\bNOT\b/g, 'not').replace(/[A-Za-z0-9_-]{25,}/g, '…').trim();
  if (!j) j = TRI_.LABEL + ' stopped';
  return j.charAt(0).toUpperCase() + j.slice(1, 90);
}
function triSlug_(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48); }
/** Sorts one failure: { kind: wait|limit|access|code|unknown, way: wait|needs_us, job, sig, sev, who, src, fn, line, msg }. */
function triClass_(where, e) {
  let job, msg, stack = '';
  if (e === null || e === undefined) {
    const text = String(where || ''), at = text.indexOf(': ');
    job = at > 0 && at < 120 ? text.slice(0, at) : text.split('\n')[0];
    msg = (at > 0 && at < 120 ? text.slice(at + 2) : text).split('\n')[0];
    stack = text;
  } else { job = String(where || ''); msg = triMsg_(e); stack = String(e.stack || ''); }
  job = triJob_(job);
  const kind = TRI_LIMIT_.test(msg) ? 'limit' : TRI_ACCESS_.test(msg) ? 'access' : TRI_CODE_.test(msg) ? 'code' : TRI_WAIT_.test(msg) ? 'wait' : 'unknown';
  const sevHit = TRI_SEV_.find(r => r[0].test(job)), who = (TRI_WHO_.find(r => r[0].test(job)) || [0, 'our team'])[1];
  const c = { kind: kind, way: (kind === 'wait' || kind === 'unknown') ? 'wait' : 'needs_us', job: job, sev: sevHit ? sevHit[1] : 'S2', who: who, src: (TRI_SRC_.find(r => r[0].test(job)) || [0, 'run'])[1] };
  if (c.way === 'wait') {
    const sv = TRI_SERVICES_.find(r => r[0].test(msg)) || [0, 'Google', 'google'];
    c.job = kind === 'unknown' ? job : sv[1] + ' is not answering'; c.sig = kind === 'unknown' ? triSlug_(job) + '-unknown' : sv[2] + '-wait';
    if (kind === 'wait') c.who = 'the men and our team';
  } else c.sig = triSlug_(job) + '-' + kind;
  const m = /at ([A-Za-z0-9_$.]+) \(([A-Za-z0-9_.]+):(\d+)/.exec(stack);
  c.fn = m ? m[1] : ''; c.line = m ? m[3] : '';
  c.msg = msg.replace(/[A-Za-z0-9_-]{25,}/g, '…').replace(/\s+/g, ' ').trim().slice(0, 140);
  return c;
}
/** Retries what only a passing outside hiccup could fail: now, then after about 1, 4 and 10 seconds. Anything else is thrown at once. */
function withRetry_(fn, label) {
  for (let i = 0; ; i++) {
    try { return fn(); } catch (e) {
      const c = triClass_(label || '', e);
      if (i >= TRI_.PAUSES.length || c.way !== 'wait' || c.kind === 'unknown') throw e;
      Utilities.sleep(TRI_.PAUSES[i]);
    }
  }
}
function triState_() { try { return JSON.parse(PropertiesService.getScriptProperties().getProperty('tri:idx') || '{}') || {}; } catch (e) { return {}; } }
function triSave_(st) {
  const keys = Object.keys(st);
  if (keys.length > TRI_.MAX) keys.sort((a, b) => ((st[b].e || 0) - (st[a].e || 0)) || (String(st[b].l) < String(st[a].l) ? -1 : 1)).slice(TRI_.MAX).forEach(k => { delete st[k]; });
  try { PropertiesService.getScriptProperties().setProperty('tri:idx', JSON.stringify(st)); } catch (e) {}
}
function triKey_(sig) { return 'fix:' + TRI_.SCRIPT + ':' + sig; }
/** The Triage queue tab of the Front Desk sheet: this script holds no log secret. Each event is one row (at, source, job, way, severity, signature, proof, note, school); the Front Desk reads the rows on its 5-minute run, sends them to the event log and clears them. */
function triQueue_() {
  const ss = SpreadsheetApp.openById(TRI_.DESK_SHEET); let sh = ss.getSheetByName('Triage queue');
  if (!sh) { sh = ss.insertSheet('Triage queue'); sh.appendRow(['at', 'source', 'job', 'way', 'severity', 'signature', 'proof', 'note', 'school']); try { sh.setFrozenRows(1); sh.hideSheet(); } catch (e) {} }
  return sh;
}
/** One event to the log, through the queue. Never throws. null: queued (or skipped as a repeat inside 5 minutes), so the counts in Script Properties carry the work; false: the queue could not be written. */
function triLog_(way, x, proof, note) {
  try {
    const cache = CacheService.getScriptCache(), ck = 'tri:q:' + TRI_.SCRIPT + ':' + way + ':' + String(x.sig).slice(0, 60);
    if (way !== 'repair' && cache.get(ck)) return null;
    triQueue_().appendRow([new Date(), TRI_.SCRIPT, x.j, way, way === 'clean' ? '' : (x.s || ''), x.sig, proof || '', note || '', x.school || '']);
    if (way !== 'repair') cache.put(ck, '1', 300);
    return null;
  } catch (e) { return false; }
}
/** The card's words in one place: the row's "do this" and "because" (lines split by a new line). */
function triWords_(x) {
  const lines = ['What stopped: ' + x.j + '. It touches ' + x.who + '.', TRI_SEV_WORDS_[x.s] || TRI_SEV_WORDS_.S2];
  const mins = Math.max(0, Math.round((new Date(x.l) - new Date(x.f)) / 60000));
  if (x.k === 'wait') lines.push('Tried: it tried again at once and on every run for ' + mins + ' minutes (' + x.n + ' times). The cause is outside our code.', 'Repair: it keeps trying on its own. The card closes when the job has run clean for ' + TRI_.CLEAN_MIN + ' minutes.');
  else if (x.k === 'unknown') lines.push('Tried: it tried again on every run for ' + mins + ' minutes (' + x.n + ' times). We do not recognize this failure yet.', 'Repair: it goes to Claude first, to name the cause and add it to the rule table. The card closes when the job has run clean for ' + TRI_.CLEAN_MIN + ' minutes.');
  else if (x.k === 'limit') lines.push('Tried: it stopped at once, because a daily limit is used up. The count resets on its own.', 'Repair: it goes to Claude first, to see why the limit was reached and to keep it from coming back.');
  else if (x.k === 'access') lines.push('Tried: it stopped at once, because a permission or key was refused.', 'Repair: it goes to Claude first, to find which permission or key was refused and renew it. If only a sign-in will do, the one step comes here.');
  else lines.push('Tried: it stopped at once, because a retry would fail the same way. It has happened ' + x.n + ' time' + (x.n === 1 ? '' : 's') + ' since ' + Utilities.formatDate(new Date(x.f), 'America/Chicago', 'MMM d, h:mm a') + '.',
    'Repair plan: ' + TRI_.LABEL + ' (' + TRI_.FILE + '), ' + (x.fn ? 'the function ' + x.fn + (x.ln ? ' near line ' + x.ln : '') : 'the job named above') + ' says “' + (x.m || 'no message') + '”. Build running when it stopped: ' + x.b + '. It becomes the day’s first build, on Sonnet.',
    'First message for that build: “Repair ' + TRI_.LABEL + ' build ' + x.b + ': ' + (x.fn || x.j) + ' fails with ‘' + (x.m || 'no message') + '’. Read the live script through the Drive connector, fix the cause, prove it with a forced test, install and commit it per ap-ship-standard, then check that ' + triKey_(x.sig) + ' closes as Proven.”');
  return { do: x.j, because: lines.join('\n') };
}
/** Writes (or updates) the one Actions row for a signature on the Front Desk sheet. Never throws. This script closes its own card (the Front Desk never closes a foreign fix: key). */
function triCard_(x) {
  try {
    const sh = SpreadsheetApp.openById(TRI_.DESK_SHEET).getSheetByName('Actions');
    const hdr = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0], H = {};
    hdr.forEach((h, i) => { if (h) H[String(h)] = i; });
    const key = triKey_(x.sig), data = sh.getDataRange().getValues(), w = triWords_(x);
    let at = 0;
    for (let i = 1; i < data.length; i++) if (String(data[i][H['key']] || '').trim() === key) { at = i; break; }
    if (at) {
      const row = data[at], handDone = row[H['mark done by hand']] === true;
      sh.getRange(at + 1, H['because'] + 1).setValue(w.because);
      if (!handDone && String(row[H['status']]) === 'done') {
        sh.getRange(at + 1, H['status'] + 1).setValue('open'); sh.getRange(at + 1, H['first seen'] + 1).setValue(new Date()); sh.getRange(at + 1, H['done at'] + 1).setValue('');
        if (H['closed how'] !== undefined) sh.getRange(at + 1, H['closed how'] + 1).setValue('');
      }
      return true;
    }
    const row = new Array(Math.max(sh.getLastColumn(), 11)).fill('');
    row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = 'John'; row[H['do this']] = w.do; row[H['for']] = TRI_.LABEL;
    row[H['because']] = w.because; row[H['link']] = TRI_.DESK; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'R26';
    sh.appendRow(row);
    return true;
  } catch (e) { return false; }
}
/** The job has run clean for 30 minutes: this script closes its card as Proven. Never throws. */
function triClose_(sig) {
  try {
    const sh = SpreadsheetApp.openById(TRI_.DESK_SHEET).getSheetByName('Actions');
    const H = {}; sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0].forEach((h, i) => { if (h) H[String(h)] = i; });
    const key = triKey_(sig), data = sh.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) {
      if (String(data[i][H['key']] || '').trim() !== key || String(data[i][H['status']]) !== 'open') continue;
      sh.getRange(i + 1, H['status'] + 1).setValue('done'); sh.getRange(i + 1, H['done at'] + 1).setValue(new Date());
      if (H['done by'] !== undefined) sh.getRange(i + 1, H['done by'] + 1).setValue(TRI_.LABEL);
      if (H['closed how'] !== undefined) sh.getRange(i + 1, H['closed how'] + 1).setValue('Proven');
    }
    return true;
  } catch (e) { return false; }
}
/** S1 only: one plain email, once per signature. What stopped, who it touches, and the desk link on its own line. Never the error. */
function triMail_(x) {
  try {
    MailApp.sendEmail(Session.getEffectiveUser().getEmail(), TRI_.LABEL + ': ' + x.j, ['What stopped: ' + x.j + '.', 'It touches ' + x.who + '.', TRI_SEV_WORDS_.S1, 'The repair is under way. The card on the Front Desk shows where it stands:', '', TRI_.DESK].join('\n'));
    return true;
  } catch (e) { return false; }
}
/**
 * The one door every failure goes through (alert_ is a one-line call to it). Handled where it happens and never rethrown.
 * where: the job's words (or a whole alert text, with e left out). Returns { way: wait|repair|needs_us, sev, card } and never throws.
 */
function triage_(where, e) {
  const out = { way: 'wait', sev: '', card: 'none' };
  try {
    const c = triClass_(where, e), now = new Date(), iso = now.toISOString(), st = triState_();
    TRI_RUN_[c.sig] = 1;
    const x = st[c.sig] || { f: iso, n: 0, e: 0, ml: 0 };
    x.l = iso; x.n = (x.n || 0) + 1; x.k = c.kind; x.j = c.job; if (!x.s || c.sev < x.s) x.s = c.sev; x.who = c.who; x.src = c.src; x.fn = c.fn; x.ln = c.line; x.m = c.msg; x.b = TRI_.BUILD; x.cl = '';
    const r = triLog_(c.way, { j: c.job, s: c.sev, sig: c.sig }, '', c.kind + (c.fn ? ' in ' + c.fn : ''));
    const minutes = (now - new Date(x.f)) / 60000;
    let needs = c.way === 'needs_us';
    if (!needs) needs = r ? (r.way === 'needs_us') : minutes >= TRI_.WAIT_MIN; // the log is the count when it answers; the Script Properties are the count when it cannot
    if (needs) { x.w = 'needs_us'; x.e = 1; if (r && r.severity) x.s = r.severity; } else x.w = 'wait';
    x.sig = c.sig; st[c.sig] = x; triSave_(st);
    out.way = needs ? 'needs_us' : 'wait'; out.sev = x.s;
    if (needs) {
      out.card = x.cd ? 'update' : 'new';
      if (triCard_(x)) { if (!x.cd) { x.cd = 1; st[c.sig] = x; triSave_(st); } }
      if (x.s === 'S1' && !x.ml) { if (triMail_(x)) { x.ml = 1; st[c.sig] = x; triSave_(st); } }
    }
  } catch (err) { /* triage never throws */ }
  return out;
}
/** A job ran clean. A passing failure that recovered closes at once; a card stays until the job has run clean for 30 minutes, then closes itself as Proven. */
function cleanRun_(src) {
  try {
    const st = triState_(), now = new Date(); let dirty = false;
    Object.keys(st).forEach(sig => {
      const x = st[sig];
      if (x.src !== src || TRI_RUN_[sig]) return;
      dirty = true; x.sig = sig;
      if (!x.e) { if (triLog_('clean', x, 'recovered on its own', '') !== false) delete st[sig]; return; }
      if (!x.cl) x.cl = now.toISOString();
      const r = triLog_('clean', x, '', '');
      const quiet = now - new Date(x.cl);
      if (quiet >= TRI_.CLEAN_MIN * 60000 && (r !== false || quiet >= 4 * 36e5)) { if (x.cd) triClose_(sig); delete st[sig]; } // this script closes its own card as Proven
    });
    if (dirty) triSave_(st);
  } catch (e) {}
}
/** A timer's own job, handled where it happens: a failure goes to triage_, a clean pass to cleanRun_, and nothing is rethrown. */
function triGuard_(job, src, fn) {
  try { const r = fn(); cleanRun_(src); return r; } catch (e) { triage_(job, e); }
}
/** Run by hand once after an install (Run → triProof), never on a timer: forces one passing hiccup and one defect through the real block, then closes its own test card as Proven. */
function triProof() {
  const a = triage_('Triage proof: forced hiccup', new Error('Service Spreadsheets timed out (forced test)'));
  const b = triage_('Triage proof: forced defect', new TypeError('x is not a function (forced test)'));
  const sig = 'triage-proof-forced-defect-code', st = triState_(), had = !!st[sig];
  const closed = triClose_(sig); delete st[sig]; delete st['google-sheets-wait']; triSave_(st);
  Logger.log('hiccup: ' + a.way + ' (card ' + a.card + ') · defect: ' + b.way + ' (card ' + b.card + ', S ' + b.sev + ') · test card closed as Proven: ' + closed + ' · queue rows: ' + (triQueue_().getLastRow() - 1) + ' · index entry made: ' + had);
}
