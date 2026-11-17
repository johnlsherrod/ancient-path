/**
 * Ancient Path — Search refresh · build 2 + Triage 1
 *   Triage 1 (Nov 17): the monthly refresh is sorted by AP-TRIAGE 1 — a passing Google or Search Console hiccup is retried and stays silent; a failure that outlasts the retries is one plain card on the Front Desk (a monthly job cannot wait thirty minutes), closed by the next clean run. No raw error is ever emailed.
 *   build 2 (Oct 9): the Monthly log's month cells are dates on a sheet whose clock is GMT, so "Oct 1" read as the
 *     evening of Sept 30 in Central and build 1 did not recognise them as October — a re-run doubled the month's rows.
 *     Dates are now read at noon, so the month is the month.
 *
 * What it does, once a month (the 2nd, 6:00 AM Central), and whenever you run  refreshSearch  by hand:
 *   1. Reads Search Console for the www property — every search Google showed us for, and every page it showed,
 *      over the last 28 days (ending three days ago, because Search Console runs about two days behind).
 *   2. On the "Ancient Path — Search profile" sheet:
 *        Profile      — for every row with a real phrase: Impressions · Clicks · Position (28 days) · Numbers as of.
 *                       "not listed" when Google showed nothing for that phrase. The Change column (your formula) is
 *                       never touched. A row whose Status is "indexing requested" becomes "indexed" the first time
 *                       its page shows an impression — Google showed it, so it is indexed.
 *        Monthly log  — one row per phrase for this month (month · phrase · impressions · clicks · position).
 *                       A re-run in the same month replaces that month's rows instead of doubling them.
 *        Pages        — one row per page Google showed this month (page · impressions · clicks · position · month).
 *        Queries seen — every search that showed one of our pages this month, with the page it showed. This is
 *                       where the phrases men actually type turn up — the "to find" rows get filled from here.
 *   3. Flags any phrase that lost 3 or more places since last month, and any page that lost half its impressions.
 *   4. Writes one Actions row on the Front Desk sheet (key refresh:YYYY-MM, rule R13) — it stays open until someone
 *      ticks it done — and sends John one plain email: one line of numbers, the slips if any, the sheet address alone
 *      on its own line.
 *
 * What it does not do: look at Google's results page for who else ranks. That stays a Claude in Chrome run
 * (the "Who else ranks" column carries the date it was last looked at).
 *
 * Settings live on the sheet's Config tab (made by setup), not in this file.
 *
 * INSTALL (once):  new Apps Script project in the john@ancientpathcoaching.com account, named
 *   "Ancient Path - Search refresh" · paste this file over Code.gs · Project Settings → tick "Show appsscript.json"
 *   → paste the manifest from the end of this file over it · run  setup  once and allow it · read the log.
 */

const SR = {
  BUILD: 2,
  SHEET_ID: '1V84E1Wg33DaI89wAP0GvDR5iHQX3ZFsM3kRzu1LatCE',            // Ancient Path — Search profile
  FRONT_DESK_SHEET_ID: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw', // Ancient Path — Front Desk (Actions tab)
  TZ: 'America/Chicago',
  TABS: {
    Config:        ['setting', 'value', 'what it does'],
    Pages:         ['month', 'page', 'impressions', 'clicks', 'position', 'numbers as of'],
    'Queries seen':['month', 'search', 'impressions', 'clicks', 'position', 'page it showed', 'numbers as of'],
  },
  CONFIG: [
    ['property', 'https://www.ancientpathcoaching.com/', 'The Search Console property to read. setup lists the ones this account can see; if the www one answers 403, try sc-domain:ancientpathcoaching.com'],
    ['days', '28', 'How many days of numbers to read (the Profile column says 28)'],
    ['lag days', '3', 'Search Console runs behind; the window ends this many days before the run'],
    ['slip places', '3', 'A phrase that lost this many places or more since last month is flagged'],
    ['email to', 'john@ancientpathcoaching.com', 'Who gets the one-line summary'],
    ['front desk actions', 'yes', 'yes / no — write a refresh: row on the Front Desk Actions tab'],
    ['run day', '2', 'Day of the month the refresh runs (6:00 AM Central). Change it, then run setup again'],
  ],
};

/* ============================ setup, once ============================ */

function setup() {
  const ss = SpreadsheetApp.openById(SR.SHEET_ID);
  Object.keys(SR.TABS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) { sh = ss.insertSheet(name); }
    if (sh.getLastRow() === 0) {
      sh.getRange(1, 1, 1, SR.TABS[name].length).setValues([SR.TABS[name]]).setFontWeight('bold');
      sh.setFrozenRows(1);
    }
  });
  const cfgSheet = ss.getSheetByName('Config');
  const have = new Set(rows_(cfgSheet).map(r => String(r['setting'])));
  const add = SR.CONFIG.filter(c => !have.has(c[0]));
  if (add.length) append_(cfgSheet, add);

  // The timer: one, on the run day, 6:00 AM Central.
  ScriptApp.getProjectTriggers().forEach(t => { if (t.getHandlerFunction() === 'refreshSearch') ScriptApp.deleteTrigger(t); });
  const day = Number(config_().runDay) || 2;
  ScriptApp.newTrigger('refreshSearch').timeBased().onMonthDay(day).atHour(6).inTimezone(SR.TZ).create();

  // Which properties can this account see? (Written to the log so the "property" setting can be checked.)
  const sites = listSites_();
  Logger.log('Search refresh build ' + SR.BUILD + ' is up. Runs on day ' + day + ' at 6:00 AM Central.');
  Logger.log('Search Console properties this account can read: ' + (sites.length ? sites.join(' · ') : 'none — add john@ancientpathcoaching.com to the property in Search Console'));
  Logger.log('Sheet: https://docs.google.com/spreadsheets/d/' + SR.SHEET_ID);
}

/** Answers from the Search Console API without touching any sheet — run this first if something looks wrong. */
function ping() {
  const sites = listSites_();
  Logger.log('build ' + SR.BUILD + ' · properties: ' + (sites.length ? sites.join(' · ') : 'none'));
  const cfg = config_();
  const w = window_(cfg);
  const q = queryRows_(cfg.property, w, ['query'], 5);
  Logger.log('property ' + cfg.property + ' · ' + w.start + ' to ' + w.end + ' · top searches: ' +
    (q.length ? q.map(r => r.keys[0] + ' (' + r.impressions + ')').join(' · ') : 'none shown'));
}

/* ============================ the refresh ============================ */

function refreshSearch() { return triGuard_('Search refresh', 'search', function () { return withRetry_(refreshSearch_, 'Search refresh'); }, true); }

function refreshSearch_() {
  const cfg = config_();
  const ss = SpreadsheetApp.openById(SR.SHEET_ID);
  const now = new Date();
  const month = Utilities.formatDate(now, SR.TZ, 'MMM yyyy');       // "Nov 2026" — the month the numbers were read
  const monthKey = Utilities.formatDate(now, SR.TZ, 'yyyy-MM');
  const asOf = Utilities.formatDate(now, SR.TZ, 'yyyy-MM-dd');
  const w = window_(cfg);

  // 1. Search Console, two reads: every search, every page.
  const queries = queryRows_(cfg.property, w, ['query'], 5000);
  const pages = queryRows_(cfg.property, w, ['page'], 1000);
  const queryPage = queryRows_(cfg.property, w, ['query', 'page'], 5000);
  const byQuery = new Map(queries.map(r => [norm_(r.keys[0]), r]));
  const byPage = new Map(pages.map(r => [normUrl_(r.keys[0]), r]));

  // 2. Profile: numbers for every real phrase.
  const sh = ss.getSheetByName('Profile');
  const H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  const lastMonth = lastMonthByPhrase_(ss, monthKey);
  const logRows = [];
  const slips = [];
  let phrases = 0, listed = 0, newlyIndexed = 0;
  let changed = 0;

  for (let r = 1; r < data.length; r++) {
    const row = data[r];
    const phrase = String(row[H['phrase']] || '').trim();
    if (!phrase || /^(to find|to assign)$/i.test(phrase)) continue;
    phrases++;
    const hit = byQuery.get(norm_(phrase));
    const imp = hit ? hit.impressions : 'not listed';
    const clk = hit ? hit.clicks : 'not listed';
    const pos = hit ? round1_(hit.position) : 'not listed';
    if (hit) listed++;
    row[H['impressions']] = imp; row[H['clicks']] = clk; row[H['position (28 days)']] = pos; row[H['numbers as of']] = asOf;

    // Status: indexing requested → indexed, the first time the page shows an impression.
    const addr = String(row[H['address']] || '').trim();
    const pageHit = addr ? byPage.get(normUrl_(addr)) : null;
    if (pageHit && /^indexing requested$/i.test(String(row[H['status']] || ''))) { row[H['status']] = 'indexed'; newlyIndexed++; }

    // Slip: lost 3+ places since last month's log row.
    const prev = lastMonth.get(norm_(phrase));
    if (hit && prev && typeof prev.position === 'number' && hit.position - prev.position >= cfg.slipPlaces) {
      slips.push(phrase + ' — ' + round1_(prev.position) + ' to ' + round1_(hit.position));
    }
    logRows.push([month, phrase, imp, clk, pos]);
    changed++;
  }
  // Write the Profile numbers back: four columns only, never the Change formula.
  if (data.length > 1) {
    ['impressions', 'clicks', 'position (28 days)', 'numbers as of', 'status'].forEach(col => {
      const c = H[col];
      if (c === undefined) return;
      sh.getRange(2, c + 1, data.length - 1, 1).setValues(data.slice(1).map(row => [row[c]]));
    });
  }

  // 3. Monthly log: this month's rows, replacing any earlier run this month.
  const log = ss.getSheetByName('Monthly log');
  dropMonth_(log, month);
  if (logRows.length) append_(log, logRows);

  // 4. Pages and Queries seen: this month's rows, replacing any earlier run this month.
  const pg = ss.getSheetByName('Pages');
  dropMonth_(pg, month);
  const pageRows = pages.map(p => [month, p.keys[0], p.impressions, p.clicks, round1_(p.position), asOf]);
  if (pageRows.length) append_(pg, pageRows);
  const pageSlips = pageSlips_(ss, month, monthKey);

  const qs = ss.getSheetByName('Queries seen');
  dropMonth_(qs, month);
  const qRows = queryPage.map(q => [month, q.keys[0], q.impressions, q.clicks, round1_(q.position), q.keys[1], asOf]);
  if (qRows.length) append_(qs, qRows);

  // 5. The one line.
  const site = sumBy_(pages);
  const line = month + ': ' + site.impressions + ' impressions and ' + site.clicks + ' clicks across ' + pages.length + ' pages; ' +
    listed + ' of ' + phrases + ' phrases on the profile were shown' + (newlyIndexed ? '; ' + newlyIndexed + ' newly indexed' : '') +
    '; ' + queryPage.length + ' searches seen' + (slips.length || pageSlips.length ? '; ' + (slips.length + pageSlips.length) + ' slipped' : '; nothing slipped') + '.';
  Logger.log(line);
  if (slips.length) Logger.log('Slipped phrases: ' + slips.join(' · '));
  if (pageSlips.length) Logger.log('Pages down by half: ' + pageSlips.join(' · '));

  if (/^yes$/i.test(cfg.frontDeskActions)) writeAction_(monthKey, line, slips.concat(pageSlips), now);
  email_(cfg, month, line, slips, pageSlips);
}

/* ============================ Search Console ============================ */

function window_(cfg) {
  const end = new Date(); end.setDate(end.getDate() - cfg.lagDays);
  const start = new Date(end); start.setDate(start.getDate() - (cfg.days - 1));
  return { start: Utilities.formatDate(start, SR.TZ, 'yyyy-MM-dd'), end: Utilities.formatDate(end, SR.TZ, 'yyyy-MM-dd') };
}

function listSites_() {
  const res = UrlFetchApp.fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) { Logger.log('sites: ' + res.getResponseCode() + ' ' + res.getContentText().slice(0, 300)); return []; }
  const j = JSON.parse(res.getContentText());
  return (j.siteEntry || []).map(s => s.siteUrl + ' (' + s.permissionLevel + ')');
}

/** Rows from Search Console for the window: [{keys:[...], clicks, impressions, ctr, position}]. */
function queryRows_(property, w, dimensions, limit) {
  const url = 'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(property) + '/searchAnalytics/query';
  const body = { startDate: w.start, endDate: w.end, dimensions: dimensions, rowLimit: limit, dataState: 'final' };
  const res = UrlFetchApp.fetch(url, { method: 'post', contentType: 'application/json', payload: JSON.stringify(body),
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() }, muteHttpExceptions: true });
  if (res.getResponseCode() !== 200) {
    throw new Error('Search Console answered ' + res.getResponseCode() + ' for ' + property + ': ' + res.getContentText().slice(0, 300) +
      ' — check the "property" setting on Config (run setup to list the properties this account can read).');
  }
  return JSON.parse(res.getContentText()).rows || [];
}

/* ============================ sheet helpers ============================ */

function config_() {
  const sh = SpreadsheetApp.openById(SR.SHEET_ID).getSheetByName('Config');
  const m = {};
  (sh ? rows_(sh) : []).forEach(r => { m[String(r['setting']).trim().toLowerCase()] = String(r['value']).trim(); });
  const d = (k) => (SR.CONFIG.find(c => c[0] === k) || [])[1];
  return {
    property: m['property'] || d('property'),
    days: Number(m['days'] || d('days')),
    lagDays: Number(m['lag days'] || d('lag days')),
    slipPlaces: Number(m['slip places'] || d('slip places')),
    emailTo: m['email to'] || d('email to'),
    frontDeskActions: m['front desk actions'] || d('front desk actions'),
    runDay: m['run day'] || d('run day'),
  };
}

/** Last month's position per phrase, from the Monthly log (the newest month that is not this one). */
function lastMonthByPhrase_(ss, thisMonthKey) {
  const log = ss.getSheetByName('Monthly log');
  const out = new Map();
  if (!log) return out;
  const rowsL = rows_(log);
  let best = '';
  rowsL.forEach(r => { const k = monthKey_(r['month']); if (k && k < thisMonthKey && k > best) best = k; });
  if (!best) return out;
  rowsL.forEach(r => {
    if (monthKey_(r['month']) !== best) return;
    const p = Number(r['position']);
    out.set(norm_(r['phrase']), { position: isNaN(p) ? r['position'] : p, impressions: r['impressions'] });
  });
  return out;
}

/** Pages whose impressions fell to half or less of last month's. */
function pageSlips_(ss, month, thisMonthKey) {
  const pg = ss.getSheetByName('Pages');
  const all = rows_(pg);
  let best = '';
  all.forEach(r => { const k = monthKey_(r['month']); if (k && k < thisMonthKey && k > best) best = k; });
  if (!best) return [];
  const prev = new Map(all.filter(r => monthKey_(r['month']) === best).map(r => [normUrl_(r['page']), Number(r['impressions']) || 0]));
  const out = [];
  all.filter(r => String(r['month']) === month).forEach(r => {
    const was = prev.get(normUrl_(r['page']));
    const is = Number(r['impressions']) || 0;
    if (was >= 10 && is <= was / 2) out.push(String(r['page']).replace(/^https?:\/\/www\.ancientpathcoaching\.com/, '') + ' — ' + was + ' to ' + is + ' impressions');
  });
  return out;
}

function monthKey_(v) {
  // A sheet date is midnight in the SHEET's clock (this one keeps GMT); read it at noon so no time zone can slide it a day.
  if (v instanceof Date) return Utilities.formatDate(new Date(v.getTime() + 12 * 3600 * 1000), SR.TZ, 'yyyy-MM');
  const s = String(v || '').trim();
  const m = s.match(/^([A-Za-z]{3})[a-z]*\s+(\d{4})$/);
  if (!m) return '';
  const i = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'].indexOf(m[1].toLowerCase().slice(0, 3));
  return i < 0 ? '' : m[2] + '-' + String(i + 1).padStart(2, '0');
}

function dropMonth_(sh, month) {
  if (!sh) return;
  const data = sh.getDataRange().getValues();
  for (let r = data.length - 1; r >= 1; r--) {
    if (monthKey_(data[r][0]) === monthKey_(month)) sh.deleteRow(r + 1);
  }
}

function headerIndex_(sh) {
  const H = {};
  sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].forEach((h, i) => { H[String(h).trim().toLowerCase()] = i; });
  return H;
}
function rows_(sh) {
  if (!sh || sh.getLastRow() < 2) return [];
  const v = sh.getDataRange().getValues();
  const head = v[0].map(h => String(h).trim().toLowerCase());
  return v.slice(1).map(r => { const o = {}; head.forEach((h, i) => { o[h] = r[i]; }); return o; });
}
function append_(sh, rows) {
  if (!rows.length) return;
  sh.getRange(sh.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
}
function norm_(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); }
function normUrl_(u) { return String(u || '').toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').replace(/[?#].*$/, '').replace(/\/+$/, ''); }
function round1_(n) { return Math.round(Number(n) * 10) / 10; }
function sumBy_(rows) { return rows.reduce((a, r) => ({ impressions: a.impressions + r.impressions, clicks: a.clicks + r.clicks }), { impressions: 0, clicks: 0 }); }

/* ============================ the Front Desk row and the email ============================ */

function writeAction_(monthKey, line, slips, now) {
  const ss = SpreadsheetApp.openById(SR.FRONT_DESK_SHEET_ID);
  const sh = ss.getSheetByName('Actions');
  if (!sh) { Logger.log('Front Desk sheet has no Actions tab; no row written.'); return; }
  const H = headerIndex_(sh);
  const key = 'refresh:' + monthKey;
  const data = sh.getDataRange().getValues();
  const width = sh.getLastColumn();
  const link = 'https://docs.google.com/spreadsheets/d/' + SR.SHEET_ID + '/edit';
  const doThis = 'Read the search refresh' + (slips.length ? ' — ' + slips.length + ' slipped' : '');
  for (let r = 1; r < data.length; r++) {
    if (String(data[r][H['key']]).trim() === key) {   // same month again: refresh the words, keep its status
      const row = data[r];
      row[H['do this']] = doThis; row[H['because']] = line.slice(0, 300); row[H['link']] = link;
      sh.getRange(r + 1, 1, 1, width).setValues([row]);
      return;
    }
  }
  const row = new Array(width).fill('');
  row[H['key']] = key; row[H['first seen']] = now; row[H['owner']] = 'John'; row[H['do this']] = doThis;
  row[H['for']] = 'Search profile'; row[H['because']] = line.slice(0, 300); row[H['link']] = link;
  row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'R13';
  sh.getRange(sh.getLastRow() + 1, 1, 1, width).setValues([row]);
}

function email_(cfg, month, line, slips, pageSlips) {
  if (!cfg.emailTo) return;
  const parts = [line];
  if (slips.length) parts.push('', 'Phrases that slipped:', slips.join('\n'));
  if (pageSlips.length) parts.push('', 'Pages down by half:', pageSlips.join('\n'));
  parts.push('', 'The sheet:', 'https://docs.google.com/spreadsheets/d/' + SR.SHEET_ID + '/edit', '', 'Search refresh · build ' + SR.BUILD);
  MailApp.sendEmail({ to: cfg.emailTo, subject: 'Search refresh — ' + month, body: parts.join('\n') });
}

/* ============================ appsscript.json ============================
Paste this over the manifest (Project Settings → Show "appsscript.json" in editor):

{
  "timeZone": "America/Chicago",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/script.external_request",
    "https://www.googleapis.com/auth/webmasters.readonly",
    "https://www.googleapis.com/auth/script.send_mail",
    "https://www.googleapis.com/auth/script.scriptapp"
  ]
}
============================================================================ */

// ───────────────────────────── AP-TRIAGE 1 · Search refresh · Triage 1 ─────────────────────────────
// John Sherrod, Nov 17, 2026: a failure is sorted, handled and, only when it needs us, put in front of him in plain words with the repair under
// way. He never gets a raw error. Wait (a passing hiccup: retried at once and on the next run, silent, a card only after 30 minutes), Repair (a
// known cause the script fixes), Needs us (one card on the Front Desk Actions tab, key fix:<script>:<signature>, closed by this script as Proven
// after the job has run clean for 30 minutes; only S1 sends one plain email). Every event goes to the one event log with its school (Script
// Properties tri:school and tri:secret live in the Front Desk only: this script queues each event on the Triage queue tab of the Front Desk sheet and the Front Desk sends it). The block is the Front Desk's own (build 44), built from one source: only TRI_ and the three
// rule tables differ, so a new school is a row and a new script is the same block.
const TRI_ = {
  SCRIPT: 'search-refresh', LABEL: 'Search refresh', FILE: 'scripts/SearchRefresh.gs', BUILD: 'Triage 1',
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
const TRI_SERVICES_ = [[/search console|webmasters|searchanalytics/i, 'Search Console', 'search-console'], [/spreadsheet|sheet/i, 'Google Sheets', 'google-sheets'], [/drive/i, 'Google Drive', 'google-drive'], [/gmail|mail/i, 'Gmail', 'gmail'], [/calendar/i, 'Google Calendar', 'google-calendar'],
  [/lock/i, 'the script lock', 'script-lock'], [/maximum execution time/i, 'the time limit', 'time-limit'], [/urlfetch|fetch|http|address unavailable|dns|socket|econn/i, 'an outside service', 'outside-service']];
/** Who a failure touches, and how serious it is (S1: a person's words are at risk or people cannot get in; S2: a feature is broken; S3: a rough edge). */
const TRI_WHO_ = [[/./, 'our team']];
const TRI_SEV_ = [[/./, 'S3']];
const TRI_SEV_WORDS_ = { S1: 'S1: a person’s words are at risk, or people can’t get in.', S2: 'S2: a feature is broken.', S3: 'S3: a rough edge.' };
const TRI_SRC_ = [[/search/i, 'search']];
let TRI_ONCE_ = {}; // jobs that run rarely (triGuard_ 4th argument): a failure that outlasts the retries is a card at once, and the first clean run closes it
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
/** This script has no S1 job, so it sends no email and asks for no mail permission: an S1 here would be a card only. */
function triMail_(x) { return false; }
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
    if (!needs) needs = r ? (r.way === 'needs_us') : minutes >= (TRI_ONCE_[c.src] ? 0 : TRI_.WAIT_MIN); // the log is the count when it answers; the Script Properties are the count when it cannot
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
      if (quiet >= (TRI_ONCE_[src] ? 0 : TRI_.CLEAN_MIN) * 60000 && (r !== false || quiet >= 4 * 36e5)) { if (x.cd) triClose_(sig); delete st[sig]; } // this script closes its own card as Proven
    });
    if (dirty) triSave_(st);
  } catch (e) {}
}
/** A timer's own job, handled where it happens: a failure goes to triage_, a clean pass to cleanRun_, and nothing is rethrown. */
function triGuard_(job, src, fn, once) {
  if (once) TRI_ONCE_[src] = 1;
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
