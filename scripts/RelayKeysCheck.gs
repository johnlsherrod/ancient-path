/**
 * AP-KEYS 1 — keysCheck, build 3 (Nov 13, 2026; builds 1 and 2 never saw the bridge's answer: a spreadsheet opened inside a running script keeps serving the cells it first read, so the answer is now read through the Sheets API, which is always current). The daily keys check named in ap-simplicity-standard ("The keys check (standing)").
 *
 * One function, keysCheck, runs every morning at 6:40 AM Central and tests every key this project holds with its cheapest call:
 *   Claude      GET /v1/models?limit=1 (free; 200 or 401)
 *   Recraft     GET /v1/styles (the styles list; free)
 *   GitHub      GET /user, only if GITHUB_TOKEN is set
 *   Twilio      the account read when the TWILIO keys are in this project; today they live in the Front Desk script, so the check reads the
 *               answer that script's own 3 AM check wrote on its Config tab ("text sender") and fails if that answer is a failure or older than 36 hours
 *   ActiveCampaign  the bridge: one "ping" row on the queue of the "Ancient Path — AC count" sheet, worked by that project's own timer
 *               (the AC key lives only in that project; it is asked, never copied)
 *   Any other key-shaped Script Property with no test here fails once, by name, so a new key never goes unwatched.
 *
 * Silent when every check passes (the log only). On any failure it writes ONE card per service to the Front Desk's Actions tab (key keys:<service>,
 * owner John): the service, what it answered, and the one fix. A card already open for the service is not written twice; a card whose service
 * passes again is ticked "mark done by hand" by this check (proven by the call). A key value is never logged, never put on a card, and is scrubbed
 * from anything a service said. If the card itself cannot be written the function ends in an error, so Google's own failed-run notice reaches John.
 *
 * Preflight (AP-SHIP, ap-simplicity-standard): the keys it reads live in this project's Script Properties; the Twilio answer and the Front Desk
 * Actions tab are read through the sheet (same Google account); the AC count queue is the bridge's own channel.
 * Moves to the platform as it is: the list of checks and the card write. Rebuilt: nothing. No setup run: the first run installs its own trigger.
 */

var KEYS_BUILD_ = '3';
var KEYS_FD_SHEET_ = '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw';      // Ancient Path — Front Desk (Actions and Config tabs)
var KEYS_AC_SHEET_ = '1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM';      // Ancient Path — AC count (the queue tab)
var KEYS_TZ_ = 'America/Chicago';
var KEYS_BUDGET_MS_ = 320000;                                              // a run ends before Apps Script's six minutes do
var KEYS_LINK_KEYS_ = 'https://script.google.com/u/1/home/projects/1o7z6MNd1abUu-y7QZQIDfOabmHrkDqxjcKxOVvxqC_2bLueXdtjmROt-/settings';
var KEYS_LINK_FD_ = 'https://script.google.com/u/1/home/projects/1piMd8lIIuSvToz54hRbZGEJsDm6u0YaoeF-6dMufJvlDhEThQizYhZ42/settings';
var KEYS_LINK_AC_ = 'https://script.google.com/u/1/home/projects/1TacF_p6HSrvib9L9ykOU_nbuWEQexP6i97Db5qAvrUbUbbV_3EunxAJl/settings';
var KEYS_LINK_AC_EDIT_ = 'https://script.google.com/u/1/home/projects/1TacF_p6HSrvib9L9ykOU_nbuWEQexP6i97Db5qAvrUbUbbV_3EunxAJl/edit';
var KEYS_TESTED_ = { ANTHROPIC_API_KEY: 1, RECRAFT_API_TOKEN: 1, GITHUB_TOKEN: 1, TWILIO_KEY_SECRET: 1, TWILIO_KEY_SID: 1, TWILIO_ACCOUNT_SID: 1, MAX_TOKENS: 1 };

/* Triage 1: the daily key check is handled where it happens. A failure is sorted by the triage block in Code.gs (a Google hiccup waits and stays silent; a defect is one Front Desk card) and is never rethrown, so Google sends no failure digest. */
function keysCheck() { return triGuard_('Daily key check', 'keys', keysCheck_); }

function keysCheck_() {
  var t0 = Date.now();
  keys_ensureTrigger_();
  var props = PropertiesService.getScriptProperties().getProperties();
  var names = Object.keys(props);
  var ping = keys_acStart_();                       // in flight first, so the bridge's five-minute timer works while the rest run
  var results = [
    keys_safe_('claude', 'Claude', function () { return keys_claude_(props); }),
    keys_safe_('recraft', 'Recraft', function () { return keys_recraft_(props); }),
    keys_safe_('twilio', 'Twilio', function () { return keys_twilio_(props); })
  ];
  var gh = keys_safe_('github', 'GitHub', function () { return keys_github_(props); });
  if (gh) results.push(gh);
  results.push(keys_safe_('ac', 'ActiveCampaign', function () { return keys_acFinish_(ping, t0); }));
  names.forEach(function (n) {
    if (/(_KEY|_TOKEN|_SECRET)$/.test(n) && !KEYS_TESTED_[n]) {
      results.push(keys_fail_('untested-' + n.toLowerCase(), n, 'Script Property ' + n + ' looks like a key and keysCheck has no test for it',
        'Add a test for ' + n + ' to keysCheck in the Anthropic Key project', KEYS_LINK_KEYS_, 'Until it has a test, nothing watches it.'));
    }
  });
  results.forEach(function (r) { if (r.said) r.said = keys_scrub_(r.said, props); });

  var failed = results.filter(function (r) { return !r.ok; });
  Logger.log('keysCheck build ' + KEYS_BUILD_ + ' · Script Properties: ' + names.length + ' of 50 (' + names.sort().join(', ') + ')');
  results.forEach(function (r) { Logger.log((r.ok ? 'ok     ' : 'FAILED ') + r.service + (r.note ? ' · ' + r.note : '') + (r.ok ? '' : ' · ' + r.said)); });
  Logger.log('keysCheck: ' + (results.length - failed.length) + ' passed, ' + failed.length + ' failed, ' + Math.round((Date.now() - t0) / 1000) + ' seconds');

  try { keys_cards_(results); }
  catch (e) {
    Logger.log('The Front Desk card could not be written: ' + keys_scrub_(String(e && e.message || e), props));
    throw new Error('keysCheck could not write its card to the Front Desk: ' + keys_scrub_(String(e && e.message || e), props));
  }
}

/* ---------- the checks ---------- */

function keys_claude_(p) {
  var key = keys_clean_(p.ANTHROPIC_API_KEY);
  var o = { id: 'claude', svc: 'Claude', key: key, link: KEYS_LINK_KEYS_,
    authFix: 'Make a new key at console.anthropic.com and paste it over ANTHROPIC_API_KEY in Script Properties of the Anthropic Key project',
    effect: 'The four Claude buttons in The Road I Walked will not answer until it is replaced.', status: 'status.anthropic.com' };
  if (!key) return keys_fail_(o.id, o.svc, 'ANTHROPIC_API_KEY is not set', o.authFix, o.link, o.effect);
  return keys_judge_(o, keys_get_('https://api.anthropic.com/v1/models?limit=1', { 'x-api-key': key, 'anthropic-version': '2023-06-01' }));
}

function keys_recraft_(p) {
  var key = keys_clean_(p.RECRAFT_API_TOKEN);
  var o = { id: 'recraft', svc: 'Recraft', key: key, link: KEYS_LINK_KEYS_,
    authFix: 'Copy the key from recraft.ai/profile/api and paste it over RECRAFT_API_TOKEN in Script Properties of the Anthropic Key project',
    effect: 'No house-style picture can be drawn until it is replaced.', status: 'status.recraft.ai' };
  if (!key) return keys_fail_(o.id, o.svc, 'RECRAFT_API_TOKEN is not set', o.authFix, o.link, o.effect);
  if (/^sk-ant-/.test(key)) return keys_fail_(o.id, o.svc, 'RECRAFT_API_TOKEN holds an Anthropic-family key, not a Recraft key', o.authFix, o.link, o.effect);
  return keys_judge_(o, keys_get_('https://external.api.recraft.ai/v1/styles', { Authorization: 'Bearer ' + key }));
}

function keys_github_(p) {
  var key = keys_clean_(p.GITHUB_TOKEN);
  if (!key) return null;                              // optional: only tested when it is set
  var o = { id: 'github', svc: 'GitHub', key: key, link: KEYS_LINK_KEYS_,
    authFix: 'Make a new token at github.com/settings/tokens and paste it over GITHUB_TOKEN in Script Properties of the Anthropic Key project',
    effect: 'Pictures cannot be pushed to the repo until it is replaced.', status: 'githubstatus.com' };
  return keys_judge_(o, keys_get_('https://api.github.com/user', { Authorization: 'Bearer ' + key, Accept: 'application/vnd.github+json' }));
}

function keys_twilio_(p) {
  var sid = keys_clean_(p.TWILIO_ACCOUNT_SID), ks = keys_clean_(p.TWILIO_KEY_SID), sec = keys_clean_(p.TWILIO_KEY_SECRET);
  var effect = 'Text notices will not send until it is fixed.';
  if (sid && ks && sec) {                             // the keys are in this project: read the account directly
    var o = { id: 'twilio', svc: 'Twilio', key: sec, link: KEYS_LINK_KEYS_, effect: effect, status: 'status.twilio.com',
      authFix: 'Make a new Standard API key in Twilio and replace TWILIO_KEY_SID and TWILIO_KEY_SECRET in Script Properties of the Anthropic Key project' };
    var r = keys_get_('https://api.twilio.com/2010-04-01/Accounts/' + sid + '.json', { Authorization: 'Basic ' + Utilities.base64Encode(ks + ':' + sec) });
    if (r.code === 200 && r.json && r.json.status && r.json.status !== 'active') return keys_fail_(o.id, o.svc, 'the account status is ' + r.json.status, 'Open the Twilio account and reactivate it', o.link, effect);
    return keys_judge_(o, r);
  }
  // the keys live in the Front Desk script, which tests them every night at 3 AM and writes the answer on its Config tab
  var sh = SpreadsheetApp.openById(KEYS_FD_SHEET_).getSheetByName('Config');
  var rows = sh.getRange(1, 1, sh.getLastRow(), 2).getDisplayValues(), line = '';
  rows.forEach(function (r) { if (String(r[0]).trim().toLowerCase() === 'text sender') line = String(r[1]).trim(); });
  if (!line) return keys_fail_('twilio', 'Twilio', 'the Front Desk Config tab has no "text sender" answer', 'Open the Front Desk script and run noticeSenderCheck', KEYS_LINK_FD_, effect);
  var m = /\((\w{3} \d{1,2}), (\d{1,2}:\d{2} [AP]M) Central\)\s*$/.exec(line), ageH = null, now = new Date();
  if (m) {
    var d = Utilities.parseDate(m[1] + ', ' + now.getFullYear() + ' ' + m[2], KEYS_TZ_, 'MMM d, yyyy h:mm a');
    if (d.getTime() - now.getTime() > 86400000) d = Utilities.parseDate(m[1] + ', ' + (now.getFullYear() - 1) + ' ' + m[2], KEYS_TZ_, 'MMM d, yyyy h:mm a');
    ageH = (now.getTime() - d.getTime()) / 3600000;
  }
  var said = line.replace(/\s*\([^()]*Central\)\s*$/, '').slice(0, 160);
  var good = /(is in the notices sender pool|it was added through the API)/.test(line) && !/^(Not checked|Twilio would not)/.test(line);
  if (!good) {
    var auth = /HTTP 40[13]|Standard key/.test(line);
    return keys_fail_('twilio', 'Twilio', 'the Front Desk script’s own Twilio check says: ' + said,
      auth ? 'Make a new Standard API key in Twilio and replace TWILIO_KEY_SID and TWILIO_KEY_SECRET in Script Properties of the Front Desk script'
           : 'Fix what that line says in the Front Desk script, then run noticeSenderCheck', KEYS_LINK_FD_, effect);
  }
  if (ageH === null || ageH > 36) return keys_fail_('twilio', 'Twilio', 'the Front Desk script’s Twilio check last answered ' + (m ? m[1] + ', ' + m[2] : 'at an unknown time') + ', more than a day ago',
    'Open the Front Desk script and run noticeSenderCheck; if it answers, check that its 3 AM timer (noticeDaily) is still on the Triggers page', KEYS_LINK_FD_, effect);
  return { id: 'twilio', service: 'Twilio', ok: true, note: 'read from the Front Desk script’s own 3 AM check' };
}

/** The bridge: a ping on the AC count queue, answered by that project's own timer with its own key. Started first, read last. */
function keys_acStart_() {
  try {
    var q = SpreadsheetApp.openById(KEYS_AC_SHEET_).getSheetByName('queue');
    var id = 'keys-' + Utilities.formatDate(new Date(), KEYS_TZ_, 'yyyyMMdd-HHmmss');
    q.appendRow([id, new Date().toISOString(), 'ping', '{}', 'new', '', '']);
    SpreadsheetApp.flush();
    return { id: id };
  } catch (e) { return { error: String(e && e.message || e) }; }
}

function keys_acFinish_(ping, t0) {
  var effect = 'Campaigns, tags and the Friday count cannot run until it is fixed.';
  if (ping.error) return keys_fail_('ac', 'ActiveCampaign', 'the AC count queue could not be written: ' + ping.error, 'Open the Ancient Path - AC count sheet and check that the queue tab is there', KEYS_LINK_AC_EDIT_, effect);
  var status = '', result = '';
  for (;;) {
    var row = keys_acRow_(ping.id);
    if (row) { status = String(row[4] || '').trim().toLowerCase(); result = String(row[5] || ''); }
    if (status === 'done' || status === 'error' || Date.now() - t0 > KEYS_BUDGET_MS_) break;
    Utilities.sleep(10000);
  }
  if (status === 'done' && /"ok":\s*true/.test(result)) return { id: 'ac', service: 'ActiveCampaign', ok: true, note: 'the bridge answered' };
  if (status === 'done') return keys_fail_('ac', 'ActiveCampaign', 'the bridge answered without ok: ' + result.slice(0, 120), 'Open the AC count project and run the ping again from its log', KEYS_LINK_AC_EDIT_, effect);
  if (status === 'error') {
    var setup = /AC_URL|AC_KEY/.test(result);
    return keys_fail_('ac', 'ActiveCampaign', 'the bridge answered: ' + result.slice(0, 140),
      setup ? 'Set AC_URL and AC_KEY in Script Properties of the Ancient Path - AC count project'
            : 'Paste a fresh API key (ActiveCampaign Settings, Developer) over AC_KEY in Script Properties of the Ancient Path - AC count project', KEYS_LINK_AC_, effect);
  }
  if (status === 'running') return { id: 'ac', service: 'ActiveCampaign', ok: true, note: 'the bridge was still working the ping when this check ended; not counted as a failure' };
  return keys_fail_('ac', 'ActiveCampaign', 'the bridge did not pick up the ping in five minutes (its row read "' + (status || 'not found') + '"); its queue timer may have stopped', 'Open the AC count project and run setupTrigger', KEYS_LINK_AC_EDIT_, effect);
}

/** The ping's row, read through the Sheets API (advanced service "Sheets"): SpreadsheetApp keeps serving the cells a running script first read, so the bridge's answer never showed. */
function keys_acRow_(id) {
  var v = Sheets.Spreadsheets.Values.get(KEYS_AC_SHEET_, 'queue!A:F').values || [];
  for (var i = v.length - 1; i >= 0; i--) if (String(v[i][0]) === id) return v[i];
  return null;
}

/* ---------- the card ---------- */

function keys_cards_(results) {
  var sh = SpreadsheetApp.openById(KEYS_FD_SHEET_).getSheetByName('Actions');
  var data = sh.getDataRange().getValues(), H = {};
  data[0].forEach(function (h, i) { H[String(h).trim()] = i; });
  ['key', 'first seen', 'owner', 'do this', 'for', 'because', 'link', 'status', 'mark done by hand', 'rule'].forEach(function (c) { if (!(c in H)) throw new Error('the Actions tab has no "' + c + '" column'); });
  var at = function (key) { for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]).trim() === key) return i; return -1; };
  var time = Utilities.formatDate(new Date(), KEYS_TZ_, 'h:mm a');
  results.forEach(function (r) {
    var key = 'keys:' + r.id, i = at(key);
    if (r.ok) {                                       // a passing call proves the fix: tick the card it left
      if (i > 0 && String(data[i][H['status']]).trim().toLowerCase() === 'open' && data[i][H['mark done by hand']] !== true) sh.getRange(i + 1, H['mark done by hand'] + 1).setValue(true);
      return;
    }
    var doThis = r.doThis, because = String(r.said).replace(/[.\s]+$/, '') + '. ' + (r.effect ? r.effect + ' ' : '') + 'Checked ' + time + ' Central.';
    if (i > 0) {
      if (String(data[i][H['status']]).trim().toLowerCase() === 'open') return;   // one card per service
      sh.getRange(i + 1, H['do this'] + 1).setValue(doThis);
      sh.getRange(i + 1, H['because'] + 1).setValue(because);
      sh.getRange(i + 1, H['status'] + 1).setValue('open');
      sh.getRange(i + 1, H['mark done by hand'] + 1).setValue(false);
      return;
    }
    var row = new Array(Math.max(sh.getLastColumn(), 11)).fill('');
    row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = 'John';
    row[H['do this']] = doThis; row[H['for']] = r.service + ' key'; row[H['because']] = because;
    row[H['link']] = r.link; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'K1';
    sh.appendRow(row);
  });
}

/* ---------- small parts ---------- */

function keys_ensureTrigger_() {
  var have = ScriptApp.getProjectTriggers().some(function (t) { return t.getHandlerFunction() === 'keysCheck'; });
  if (!have) ScriptApp.newTrigger('keysCheck').timeBased().everyDays(1).atHour(6).nearMinute(40).inTimezone(KEYS_TZ_).create();
}

function keys_safe_(id, svc, fn) {
  try { return fn(); }
  catch (e) { return keys_fail_(id, svc, 'the check itself stopped: ' + String(e && e.message || e).slice(0, 140), 'Open the Anthropic Key project, run keysCheck, and read its log', KEYS_LINK_KEYS_, ''); }
}

/** One call, one retry after 20 seconds if the service did not answer or answered 429 or 5xx. Returns { code, text, json, msg }. */
function keys_get_(url, headers) {
  var r;
  for (var tries = 0; tries < 2; tries++) {
    try { var x = UrlFetchApp.fetch(url, { method: 'get', headers: headers, muteHttpExceptions: true }); r = { code: x.getResponseCode(), text: x.getContentText() }; }
    catch (e) { r = { code: 0, text: String(e && e.message || e) }; }
    if (r.code !== 0 && r.code !== 429 && r.code < 500) break;
    if (tries === 0) Utilities.sleep(20000);
  }
  try { r.json = JSON.parse(r.text); } catch (e2) { r.json = null; }
  var j = r.json || {};
  r.msg = String((j.error && (j.error.message || j.error.type)) || j.message || (r.code === 0 ? r.text : '')).slice(0, 120);
  return r;
}

function keys_judge_(o, r) {
  if (r.code === 200) return { id: o.id, service: o.svc, ok: true };
  var auth = (r.code === 401 || r.code === 403);
  var said = r.code ? o.svc + ' answered HTTP ' + r.code + (r.msg ? ' (' + r.msg + ')' : '') : o.svc + ' did not answer' + (r.msg ? ' (' + r.msg + ')' : '');
  if (auth && o.key) said += '; the stored key is ' + o.key.length + ' characters';
  if (auth) return keys_fail_(o.id, o.svc, said, o.authFix, o.link, o.effect);
  return keys_fail_(o.id, o.svc, said, 'Nothing to change yet: check ' + o.status + '. This check runs again tomorrow at 6:40 AM', o.link, '');
}

function keys_fail_(id, svc, said, doThis, link, effect) { return { id: id, service: svc, ok: false, said: said, doThis: doThis, link: link, effect: effect }; }
function keys_clean_(v) { return String(v || '').replace(/^[\s"'“”]+|[\s"'“”]+$/g, ''); }
function keys_scrub_(s, props) {
  s = String(s);
  Object.keys(props).forEach(function (k) { var v = String(props[k]); if (v.length >= 6) s = s.split(v).join('[key]'); });
  return s;
}
