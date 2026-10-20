/**
 * Ancient Path — Research reader · build 2.4
 *
 * The first tier of the research engine. Runs in the practice's Google account
 * (john@ancientpathcoaching.com) once each morning, reads the feeds named on the
 * Sources tab of the sheet "Ancient Path — Research Engine", and writes only what
 * is new into the Inbox tab. It never writes an entry and never touches the desk:
 * the daily Claude task reads the Inbox, discards against the Rules tab, writes
 * entries to the Standard, and puts the day's item on the Front Desk.
 *
 * Install (once): new Apps Script project in john@ → paste this file over Code.gs →
 * Ctrl+S → pick `setup` in the function box → Run → allow Sheets, Gmail and
 * "connect to an external service" → done. setup makes the morning trigger and
 * runs the reader once so the Inbox has its first rows the same day.
 *
 * Build 2 adds the web app that serves the Your Growth page (see the second half of this file).
 * Everyday functions: readFeeds (the trigger's job), readNow (same, by hand),
 * resolveFeedsOnly (fill the feed column without reading), status (one line in the log).
 */

var RE_BUILD = 2.4;
var GROWTH_BUILD = 2.2;
var RE_SHEET_ID = '1FGFqxrOHzwQbDMoywrnGgLGrNlTtlhfcWZjPG9ppmPo';
var RE_TZ = 'America/Chicago';
var RE_UA = 'Mozilla/5.0 (compatible; AncientPathResearchReader/' + RE_BUILD + '; +https://www.ancientpathcoaching.com)';
var RE_TIME_BUDGET_MS = 270000; // stop opening new feeds after 4.5 minutes; the rest wait for tomorrow

// Sources tab columns (1-based)
var SC = { id: 1, discipline: 2, voice: 3, kind: 4, where: 5, feed: 6, serves: 7, woman: 8, status: 9, note: 10, lastRead: 11, added: 12 };
// Inbox tab columns
var IC = { found: 1, sourceId: 2, voice: 3, discipline: 4, kind: 5, title: 6, link: 7, published: 8, blurb: 9, state: 10, reason: 11, entryId: 12 };

/* ----------------------------------------------------------------- setup */

function setup() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var hour = parseInt(cfg['script run hour'], 10);
  if (isNaN(hour) || hour < 0 || hour > 23) hour = 5;

  // one morning trigger, never two
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'readFeeds') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('readFeeds').timeBased().atHour(hour).everyDays(1).inTimezone(RE_TZ).create();

  ensureLabel_(cfg['newsletter label'] || 'Research engine');
  answers_(ss);
  if (!cfg['claude model']) setConfig_(ss, 'claude model', 'claude-sonnet-4-5');
  if (!cfg['room signals sheet id']) { var sig = deskConfig_('room signals sheet id'); if (sig) setConfig_(ss, 'room signals sheet id', sig); }
  log_(ss, 'setup', 'trigger set for ' + hour + ':00 Central daily; label "' + (cfg['newsletter label'] || 'Research engine') + '" ready');
  readFeeds();
}

function readNow() { readFeeds(); }

function status() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var inbox = ss.getSheetByName('Inbox');
  var n = Math.max(0, inbox.getLastRow() - 1);
  var fresh = 0;
  if (n) {
    inbox.getRange(2, IC.state, n, 1).getValues().forEach(function (r) { if (r[0] === 'new') fresh++; });
  }
  var line = 'build ' + RE_BUILD + ' · last reader run ' + (cfg['last reader run'] || 'never') + ' · ' + n + ' inbox rows, ' + fresh + ' new';
  log_(ss, 'status', line);
  return line;
}

/* ------------------------------------------------------------ the morning */

function readFeeds() {
  var started = Date.now();
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var sources = ss.getSheetByName('Sources');
  var inbox = ss.getSheetByName('Inbox');

  var perRun = toInt_(cfg['fetches per run'], 40);
  var perSource = toInt_(cfg['items per source per run'], 5);
  var keepDays = toInt_(cfg['inbox keeps days'], 14);
  var lookDays = toInt_(cfg['first look days'], 14);
  var sinceMs = Date.now() - lookDays * 86400000;

  var known = knownLinks_(inbox);
  var added = [];
  var notes = [];

  // 1. the feeds
  var rows = sources.getLastRow() > 1 ? sources.getRange(2, 1, sources.getLastRow() - 1, SC.added).getValues() : [];
  var queue = [];
  rows.forEach(function (r, i) {
    var kind = String(r[SC.kind - 1]).trim().toLowerCase();
    var st = String(r[SC.status - 1]).trim().toLowerCase();
    if (st !== 'read' && st !== 'no feed yet') return;
    if (kind !== 'podcast' && kind !== 'youtube' && kind !== 'blog') return;
    queue.push({ row: i + 2, id: r[SC.id - 1], voice: r[SC.voice - 1], discipline: r[SC.discipline - 1], kind: kind,
      where: String(r[SC.where - 1]).trim(), feed: String(r[SC.feed - 1]).trim(), status: st, lastRead: r[SC.lastRead - 1] });
  });
  // oldest-read first so no feed starves when the budget runs out
  queue.sort(function (a, b) { return lastReadMs_(a.lastRead) - lastReadMs_(b.lastRead); });

  var opened = 0;
  for (var q = 0; q < queue.length; q++) {
    if (opened >= perRun || Date.now() - started > RE_TIME_BUDGET_MS) { notes.push('budget reached; ' + (queue.length - q) + ' feeds wait for tomorrow'); break; }
    var s = queue[q];
    try {
      if (!s.feed) {
        var found = resolveFeed_(s.kind, s.where);
        if (!found) {
          if (s.status !== 'no feed yet') {
            sources.getRange(s.row, SC.status).setValue('no feed yet');
            notes.push(s.id + ' ' + s.voice + ': no feed found from "' + s.where + '"');
          }
          continue;
        }
        s.feed = found;
        sources.getRange(s.row, SC.feed).setValue(found);
        if (s.status === 'no feed yet') sources.getRange(s.row, SC.status).setValue('read');
      }
      opened++;
      var items = fetchFeed_(s.feed);
      var took = 0;
      for (var k = 0; k < items.length && took < perSource; k++) {
        var it = items[k];
        if (!it.link || known[it.link]) continue;
        if (it.publishedMs && it.publishedMs < sinceMs) continue;
        known[it.link] = true;
        took++;
        added.push([stamp_(new Date()), s.id, s.voice, s.discipline, s.kind, it.title, it.link,
          it.publishedMs ? stamp_(new Date(it.publishedMs)) : '', it.blurb, 'new', '', '']);
      }
      sources.getRange(s.row, SC.lastRead).setValue(stamp_(new Date()));
    } catch (e) {
      notes.push(s.id + ' ' + s.voice + ': ' + String(e && e.message || e).slice(0, 160));
    }
  }

  // 2. the newsletter label
  try {
    var mail = readLabel_(cfg['newsletter label'] || 'Research engine', known, sinceMs);
    mail.forEach(function (m) { added.push(m); });
  } catch (e2) {
    notes.push('mail: ' + String(e2 && e2.message || e2).slice(0, 160));
  }

  // 3. write what is new, newest first within the batch
  if (added.length) {
    inbox.getRange(inbox.getLastRow() + 1, 1, added.length, added[0].length).setValues(added);
  }

  // 4. expire what the task never took
  var expired = expireOld_(inbox, keepDays);

  // 5. the record
  setConfig_(ss, 'last reader run', stamp_(new Date()));
  var line = opened + ' feeds opened, ' + added.length + ' new rows, ' + expired + ' expired' + (notes.length ? ' · ' + notes.length + ' notes' : '');
  log_(ss, 'readFeeds', line, notes.join(' | '));
}

/* --------------------------------------------------------------- resolving */

/** Turns a name or an address into a feed address, or returns '' when it cannot. */
function resolveFeed_(kind, where) {
  if (!where) return '';
  if (kind === 'podcast') return resolvePodcast_(where);
  if (kind === 'youtube') return resolveYouTube_(where);
  if (kind === 'blog') return resolveBlog_(where);
  return '';
}

function resolvePodcast_(where) {
  if (/^https?:\/\//i.test(where) && !/apple\.com|podcasts\.google|spotify\.com/i.test(where)) return where; // already a feed
  var idMatch = where.match(/\/id(\d{6,})/);
  var url = idMatch
    ? 'https://itunes.apple.com/lookup?id=' + idMatch[1] + '&entity=podcast'
    : 'https://itunes.apple.com/search?media=podcast&entity=podcast&limit=8&term=' + encodeURIComponent(where);
  var res = fetch_(url);
  if (!res) return '';
  var data;
  try { data = JSON.parse(res); } catch (e) { return ''; }
  var list = (data && data.results) || [];
  if (!list.length) return '';
  var want = norm_(where);
  var best = null, bestScore = -1;
  list.forEach(function (r) {
    if (!r.feedUrl) return;
    var name = norm_(r.collectionName || '');
    var score = 0;
    if (name === want) score = 100;
    else if (name.indexOf(want) === 0) score = 80;
    else if (name.indexOf(want) >= 0 || want.indexOf(name) >= 0) score = 60;
    else score = overlap_(name, want);
    if (score > bestScore) { bestScore = score; best = r; }
  });
  return best && bestScore >= 40 ? best.feedUrl : '';
}

function resolveYouTube_(where) {
  var url = where;
  if (/^UC[\w-]{20,}$/.test(where)) return 'https://www.youtube.com/feeds/videos.xml?channel_id=' + where;
  if (/^@/.test(where)) url = 'https://www.youtube.com/' + where;
  if (!/^https?:\/\//i.test(url)) return ''; // a bare name: the daily task finds the address
  var m = url.match(/\/channel\/(UC[\w-]{20,})/);
  if (m) return 'https://www.youtube.com/feeds/videos.xml?channel_id=' + m[1];
  var html = fetch_(url);
  if (!html) return '';
  m = html.match(/"channelId":"(UC[\w-]{20,})"/) || html.match(/itemprop="identifier"\s+content="(UC[\w-]{20,})"/) ||
      html.match(/<link rel="canonical" href="https:\/\/www\.youtube\.com\/channel\/(UC[\w-]{20,})"/) ||
      html.match(/"browseId":"(UC[\w-]{20,})"/);
  return m ? 'https://www.youtube.com/feeds/videos.xml?channel_id=' + m[1] : '';
}

function resolveBlog_(where) {
  if (!/^https?:\/\//i.test(where)) return '';
  var html = fetch_(where);
  if (html) {
    if (looksLikeFeed_(html)) return where;
    var links = html.match(/<link\b[^>]*>/gi) || [];
    for (var i = 0; i < links.length; i++) {
      var l = links[i];
      if (!/type=["'](application\/(rss|atom)\+xml)["']/i.test(l)) continue;
      if (/comments/i.test(l)) continue;
      var h = l.match(/href=["']([^"']+)["']/i);
      if (h) return absolute_(where, h[1]);
    }
  }
  var base = where.replace(/\/+$/, '');
  var guesses = ['/feed/', '/feed', '/rss', '/rss.xml', '/feed.xml', '/atom.xml', '/blog/feed/', '/blog/rss.xml', '/index.xml'];
  for (var g = 0; g < guesses.length; g++) {
    var body = fetch_(base + guesses[g]);
    if (body && looksLikeFeed_(body)) return base + guesses[g];
  }
  return '';
}

/* ----------------------------------------------------------------- reading */

/** Returns [{title, link, publishedMs, blurb}] newest first. Regex-based so a namespace quirk never stops the morning. */
function fetchFeed_(feedUrl) {
  var xml = fetch_(feedUrl);
  if (!xml) throw new Error('feed did not answer: ' + feedUrl);
  return parseFeed_(xml);
}

function parseFeed_(xml) {
  var items = [];
  var isAtom = /<feed[\s>]/i.test(xml) && !/<rss[\s>]/i.test(xml);
  var blocks = xml.match(isAtom ? /<entry\b[\s\S]*?<\/entry>/gi : /<item\b[\s\S]*?<\/item>/gi) || [];
  blocks.forEach(function (b) {
    var title = clean_(tag_(b, 'title'));
    var link = '';
    if (isAtom) {
      var alt = b.match(/<link\b[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i) || b.match(/<link\b[^>]*href=["']([^"']+)["'][^>]*rel=["']alternate["']/i) ||
                b.match(/<link\b[^>]*href=["']([^"']+)["']/i);
      link = alt ? alt[1] : '';
      var vid = tag_(b, 'yt:videoId');
      if (vid) link = 'https://www.youtube.com/watch?v=' + clean_(vid);
    } else {
      link = clean_(tag_(b, 'link'));
      if (!link) { var guid = clean_(tag_(b, 'guid')); if (/^https?:\/\//i.test(guid)) link = guid; }
      if (!link) { var enc = b.match(/<enclosure\b[^>]*url=["']([^"']+)["']/i); if (enc) link = enc[1]; }
    }
    var when = tag_(b, 'pubDate') || tag_(b, 'published') || tag_(b, 'dc:date') || tag_(b, 'updated');
    var ms = when ? Date.parse(clean_(when)) : NaN;
    var blurb = tag_(b, 'media:description') || tag_(b, 'itunes:summary') || tag_(b, 'description') || tag_(b, 'summary') || tag_(b, 'content') || tag_(b, 'content:encoded') || '';
    items.push({ title: title, link: unescapeXml_(link).trim(), publishedMs: isNaN(ms) ? 0 : ms, blurb: short_(clean_(blurb), 300) });
  });
  items.sort(function (a, b) { return (b.publishedMs || 0) - (a.publishedMs || 0); });
  return items;
}

/** Newsletters that land under the label become Inbox rows; the link opens the mail. */
function readLabel_(labelName, known, sinceMs) {
  var label = GmailApp.getUserLabelByName(labelName);
  if (!label) return [];
  var out = [];
  var threads = label.getThreads(0, 30);
  threads.forEach(function (t) {
    t.getMessages().forEach(function (m) {
      if (m.getDate().getTime() < sinceMs) return;
      var link = 'https://mail.google.com/mail/u/0/#all/' + m.getId();
      if (known[link]) return;
      known[link] = true;
      var from = m.getFrom().replace(/<.*>/, '').replace(/"/g, '').trim();
      out.push([stamp_(new Date()), 'mail', from, 'Newsletter', 'newsletter', m.getSubject(), link,
        stamp_(m.getDate()), short_(m.getPlainBody().replace(/\s+/g, ' ').trim(), 300), 'new', '', '']);
    });
  });
  return out;
}

function expireOld_(inbox, keepDays) {
  var n = inbox.getLastRow() - 1;
  if (n < 1) return 0;
  var found = inbox.getRange(2, IC.found, n, 1).getValues();
  var state = inbox.getRange(2, IC.state, n, 1).getValues();
  var cutoff = Date.now() - keepDays * 86400000;
  var changed = 0;
  for (var i = 0; i < n; i++) {
    if (state[i][0] !== 'new') continue;
    var ms = Date.parse(String(found[i][0]));
    if (!isNaN(ms) && ms < cutoff) { state[i][0] = 'expired'; changed++; }
  }
  if (changed) inbox.getRange(2, IC.state, n, 1).setValues(state);
  return changed;
}

/* ----------------------------------------------------------------- helpers */

function fetch_(url) {
  try {
    var res = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true, headers: { 'User-Agent': RE_UA, 'Accept': 'application/rss+xml, application/atom+xml, application/xml, text/xml, text/html, application/json;q=0.9, */*;q=0.8' } });
    if (res.getResponseCode() >= 400) return '';
    return res.getContentText();
  } catch (e) { return ''; }
}

function looksLikeFeed_(text) { return /^\s*(<\?xml[^>]*>\s*)?(<!--[\s\S]*?-->\s*)?<(rss|feed|rdf:RDF)\b/i.test(text); }

function tag_(block, name) {
  var re = new RegExp('<' + name.replace(':', '\\:') + '(?:\\s[^>]*)?>([\\s\\S]*?)<\\/' + name.replace(':', '\\:') + '>', 'i');
  var m = block.match(re);
  return m ? m[1] : '';
}

function clean_(s) {
  if (!s) return '';
  s = String(s).replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1');
  if (/&lt;\s*\/?\s*[a-z]/i.test(s)) s = unescapeXml_(s); // html that arrived escaped (Atom type="html")
  s = s.replace(/<br\s*\/?>/gi, ' ').replace(/<\/p>/gi, ' ').replace(/<[^>]+>/g, '');
  s = unescapeXml_(s);
  return s.replace(/\s+/g, ' ').trim();
}

function unescapeXml_(s) {
  return String(s || '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&#(\d+);/g, function (_, d) { return String.fromCharCode(parseInt(d, 10)); });
}

function short_(s, n) { s = String(s || ''); return s.length > n ? s.slice(0, n - 1).replace(/\s+\S*$/, '') + '…' : s; }

function absolute_(base, href) {
  if (/^https?:\/\//i.test(href)) return href;
  var m = base.match(/^(https?:\/\/[^\/]+)/i);
  if (!m) return href;
  if (href.charAt(0) === '/') return m[1] + href;
  return base.replace(/\/[^\/]*$/, '/') + href;
}

function norm_(s) { return String(s || '').toLowerCase().replace(/^the\s+/, '').replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim(); }

function overlap_(a, b) {
  var wa = a.split(' ').filter(Boolean), wb = b.split(' ').filter(Boolean);
  if (!wa.length || !wb.length) return 0;
  var hit = 0;
  wb.forEach(function (w) { if (w.length > 2 && wa.indexOf(w) >= 0) hit++; });
  return Math.round(100 * hit / wb.length) * 0.5; // a partial word match tops out at 50
}

function knownLinks_(inbox) {
  var known = {};
  var n = inbox.getLastRow() - 1;
  if (n > 0) inbox.getRange(2, IC.link, n, 1).getValues().forEach(function (r) { if (r[0]) known[String(r[0]).trim()] = true; });
  return known;
}

function lastReadMs_(v) { if (!v) return 0; var ms = Date.parse(String(v)); return isNaN(ms) ? 0 : ms; }

function toInt_(v, d) { var n = parseInt(v, 10); return isNaN(n) ? d : n; }

function stamp_(d) { return Utilities.formatDate(d, RE_TZ, 'MMM d, yyyy h:mm a'); }

function readConfig_(ss) {
  var sh = ss.getSheetByName('Config');
  var cfg = {};
  if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues().forEach(function (r) { if (r[0]) cfg[String(r[0]).trim()] = String(r[1]).trim(); });
  return cfg;
}

function setConfig_(ss, key, value) {
  var sh = ss.getSheetByName('Config');
  var n = sh.getLastRow();
  var keys = n > 1 ? sh.getRange(2, 1, n - 1, 1).getValues() : [];
  for (var i = 0; i < keys.length; i++) if (String(keys[i][0]).trim() === key) { sh.getRange(i + 2, 2).setValue(value); return; }
  sh.appendRow([key, value, '']);
}

function ensureLabel_(name) {
  if (!GmailApp.getUserLabelByName(name)) GmailApp.createLabel(name);
}

function log_(ss, what, detail, more) {
  var sh = ss.getSheetByName('Log');
  sh.appendRow([stamp_(new Date()), 'reader', what, String(detail || '') + (more ? ' — ' + more : ''), RE_BUILD]);
}

/* ═══════════════════════════════ build 2 · Your Growth, the page ═══════════════════════════════
 * The /your-growth page on ancientpathcoaching.com is a two-line loader: <div id="apGrowth"></div>
 * and this script's tag (?file=growth.js). Every call from the page is a POST with a JSON body
 * { action, key, ... } and gets JSON back { ok, ... }. Who may open it is the Front Desk sheet's
 * People tab; proof is the desk key the browser already keeps (the same code by email the desk
 * sends). This script never issues keys; it reads the desk's hidden Keys tab to recognize one.
 *
 * Install for build 2: paste over Code.gs, Ctrl+S, run setup once more (it adds the Answers tab and
 * two Config rows), then Deploy → New deployment → Web app, Execute as Me, Who has access: Anyone →
 * copy the web app address into the loader on /your-growth. Optional: Script Properties → CLAUDE_KEY
 * for the ask box; without it the box answers from the shelf alone.
 */

var DESK_WEB_DEFAULT = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';
// Entries tab columns (1-based)
var EC = { id: 1, written: 2, source: 3, kind: 4, link: 5, claim: 6, question: 7, construct: 8, place: 9, audience: 10, text: 11, ours: 12, cost: 13, cut: 14, move: 15, status: 16, relBy: 17, relOn: 18, desk: 19, build: 20 };

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.file === 'growth.js') return ContentService.createTextOutput(GROWTH_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'row.js') return ContentService.createTextOutput(ROW_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  return jsonOut_({ ok: true, service: 'Ancient Path — Research reader', build: RE_BUILD, growth: GROWTH_BUILD });
}

function doPost(e) {
  var body = {};
  try { body = JSON.parse((e && e.postData && e.postData.contents) || '{}'); } catch (x) { body = {}; }
  return jsonOut_(growthCall_(body));
}

function jsonOut_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }

function growthCall_(b) {
  try {
    var action = String(b.action || '');
    if (action === 'ping') { var pk = claudeKey_(); return { ok: true, build: RE_BUILD, growth: GROWTH_BUILD, keySet: !!pk, keyKind: pk ? pk.split('-').slice(0, 3).join('-') : '' }; }
    var who = whoIs_(b.key);
    if (action === 'growth') return growthFor_(who);
    if (action === 'new') return { ok: true, fresh: freshFor_(who) };
    if (action === 'mark') return markEntry_(who, b);
    if (action === 'thursday') return thursday_(who, b);
    if (action === 'ask') return askShelf_(who, b);
    if (action === 'release') return release_(who);
    return { ok: false, error: 'unknown_action' };
  } catch (err) {
    if (err && err.code) return { ok: false, error: err.code };
    try { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'web', 'failed', String(err && err.stack || err).slice(0, 500)); } catch (e2) {}
    return { ok: false, error: 'failed' };
  }
}

/* ---- who is asking: the desk's key, the desk's list ---- */
function deskSheet_() {
  var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID));
  var id = cfg['desk sheet id'];
  if (!id) throw { code: 'no_desk' };
  return SpreadsheetApp.openById(id);
}
function sha256_(s) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, s, Utilities.Charset.UTF_8).map(function (b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join('');
}
function headerIndex_(sh) {
  var H = {}; var row = sh.getRange(1, 1, 1, Math.max(1, sh.getLastColumn())).getValues()[0];
  row.forEach(function (v, i) { if (v !== '') H[String(v).trim().toLowerCase()] = i; });
  return H;
}
function people_() {
  var sh = deskSheet_().getSheetByName('People');
  if (!sh || sh.getLastRow() < 2) return [];
  var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  return data.map(function (r) {
    return { email: String(r[H['email']] || '').toLowerCase().trim(), name: String(r[H['name']] || '').trim(), role: String(r[H['role']] || '').toLowerCase().trim(), room: String(r[H['room']] || '').trim() };
  }).filter(function (p) { return p.email && (p.role === 'admin' || p.role === 'facilitator'); });
}
function whoIs_(key) {
  var k = String(key || '');
  if (k.length < 32) throw { code: 'no_key' };
  var h = sha256_(k);
  var sh = deskSheet_().getSheetByName('Keys');
  if (!sh) throw { code: 'no_desk' };
  var H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (var i = 1; i < data.length; i++) {
    if (data[i][H['hash']] !== h) continue;
    var exp = data[i][H['expires']]; exp = exp instanceof Date ? exp : new Date(exp);
    if (exp < new Date()) throw { code: 'key_expired' };
    var email = String(data[i][H['email']] || '').toLowerCase().trim();
    var person = people_().filter(function (p) { return p.email === email; })[0];
    if (!person) throw { code: 'removed' };
    return person;
  }
  throw { code: 'bad_key' };
}

/* ---- the entries, read once ---- */
function entries_(ss) {
  var sh = ss.getSheetByName('Entries');
  if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, EC.build).getValues();
  var out = [];
  data.forEach(function (r, i) {
    if (!r[EC.id - 1]) return;
    out.push({ row: i + 2, id: String(r[EC.id - 1]), written: dayOf_(r[EC.written - 1]), source: String(r[EC.source - 1]), kind: String(r[EC.kind - 1]), link: String(r[EC.link - 1]), claim: String(r[EC.claim - 1]),
      question: String(r[EC.question - 1]), construct: String(r[EC.construct - 1]), place: String(r[EC.place - 1]), audience: String(r[EC.audience - 1]), beside: String(r[EC.text - 1]), ours: String(r[EC.ours - 1]),
      cost: String(r[EC.cost - 1]), cut: String(r[EC.cut - 1]), move: String(r[EC.move - 1]), status: String(r[EC.status - 1]).toLowerCase(), desk: String(r[EC.desk - 1]) });
  });
  return out;
}
function dayOf_(v) { if (v instanceof Date) return Utilities.formatDate(v, RE_TZ, 'yyyy-MM-dd'); var s = String(v || ''); var m = s.match(/\d{4}-\d{2}-\d{2}/); if (m) return m[0]; var ms = Date.parse(s); return isNaN(ms) ? '' : Utilities.formatDate(new Date(ms), RE_TZ, 'yyyy-MM-dd'); }
function today_() { return Utilities.formatDate(new Date(), RE_TZ, 'yyyy-MM-dd'); }
function daysAgo_(day) { if (!day) return 9999; return Math.round((Date.parse(today_()) - Date.parse(day)) / 864e5); }
function voiceOf_(source) { return String(source || '').split(/\s[·—-]\s|,\s*(?:episode|article|talk|event|newsletter|book)/i)[0].trim(); }
function minutesOf_(cost) { var m = String(cost || '').match(/(\d+)\s*min/i); return m ? Number(m[1]) : 0; }
function laneOf_(voice, lanes) {
  var v = voice.toLowerCase();
  for (var i = 0; i < lanes.length; i++) { if (v && lanes[i].voice && (lanes[i].voice.indexOf(v) >= 0 || v.indexOf(lanes[i].voice) >= 0)) return lanes[i].lane; }
  return 'Other';
}
function lanes_(ss) {
  var sh = ss.getSheetByName('Sources'); if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, SC.added).getValues().map(function (r) {
    var voice = String(r[SC.voice - 1]).toLowerCase().replace(/\(.*?\)/g, '').split(/[;,·]/)[0].trim();
    return { lane: shortLane_(String(r[SC.discipline - 1])), voice: voice };
  }).filter(function (x) { return x.voice; });
}
function shortLane_(d) {
  d = String(d || '');
  if (/narrative trauma/i.test(d)) return 'Trauma care';
  if (/shame/i.test(d)) return 'Shame and being known';
  if (/story work/i.test(d)) return 'Story work';
  if (/sexual/i.test(d)) return 'Recovery';
  if (/communication/i.test(d)) return 'Communication';
  if (/strengths/i.test(d)) return 'Assessments';
  if (/body language/i.test(d)) return 'Communication';
  if (/group/i.test(d)) return 'The room';
  if (/mindset/i.test(d)) return 'Mindset';
  if (/leadership/i.test(d)) return 'Leadership';
  if (/trains the art/i.test(d)) return 'What trains the art';
  if (/body/i.test(d)) return 'The body';
  if (/ipnb/i.test(d)) return 'IPNB';
  if (/transition/i.test(d)) return 'Transitions';
  if (/hebraic/i.test(d)) return 'Hebraic teaching';
  if (/service/i.test(d)) return 'The standard of service';
  return d || 'Other';
}
function pieceOut_(e, lanes) {
  var voice = voiceOf_(e.source);
  return { id: e.id, voice: voice, kind: e.kind, cost: e.cost, minutes: minutesOf_(e.cost), move: e.move, claim: e.claim, beside: e.beside, ours: e.ours, cut: e.cut, link: e.link, question: e.question, status: e.status,
    lane: laneOf_(voice.toLowerCase(), lanes), state: e.desk, isToday: e.desk.indexOf('yes · ' + today_()) === 0, openedDay: openedDay_(e.desk), written: e.written };
}
function openedDay_(s) { var m = String(s || '').match(/opened (\d{4}-\d{2}-\d{2})/); if (!m) return ''; var d = new Date(m[1] + 'T12:00:00'); return Utilities.formatDate(d, RE_TZ, 'EEEE'); }

/* ---- the Weeks tab on the desk: the next Wednesday and the week number ---- */
function nextWednesday_() {
  try {
    var sh = deskSheet_().getSheetByName('Weeks');
    if (sh && sh.getLastRow() > 1) {
      var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues();
      var now = new Date(); now.setHours(0, 0, 0, 0);
      for (var i = 0; i < rows.length; i++) {
        var d = rows[i][1] instanceof Date ? rows[i][1] : new Date(String(rows[i][1]).replace(/^\w+\s/, ''));
        if (!isNaN(d) && d.getTime() + 864e5 > now.getTime()) return { week: String(rows[i][0]), day: Utilities.formatDate(d, RE_TZ, 'EEEE, MMM d'), date: Utilities.formatDate(d, RE_TZ, 'yyyy-MM-dd') };
      }
    }
  } catch (e) {}
  var t = new Date(); var add = (3 - t.getDay() + 7) % 7; t.setDate(t.getDate() + add);
  return { week: '', day: Utilities.formatDate(t, RE_TZ, 'EEEE, MMM d'), date: Utilities.formatDate(t, RE_TZ, 'yyyy-MM-dd') };
}

/* ---- what the room carried: Room Signals, last three weeks ---- */
function carried_(who) {
  try {
    var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID));
    var id = cfg['room signals sheet id'] || deskConfig_('room signals sheet id');
    if (!id) return null;
    var sh = SpreadsheetApp.openById(id).getSheetByName('Signals');
    if (!sh || sh.getLastRow() < 2) return null;
    var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var byConstruct = {}, weeksSeen = {};
    data.forEach(function (r) {
      var c = String(r[H['construct']] || '').trim(); var w = String(r[H['week']] || '').trim();
      if (!c) return;
      byConstruct[c] = byConstruct[c] || { weeks: {}, text: String(r[H['signal (the room\'s words, no names)']] || r[H['signal']] || '') };
      byConstruct[c].weeks[w] = 1; weeksSeen[w] = 1;
    });
    var best = null, bestN = 0;
    Object.keys(byConstruct).forEach(function (c) { var n = Object.keys(byConstruct[c].weeks).length; if (n > bestN) { bestN = n; best = c; } });
    if (!best) return null;
    return { construct: best, weeks: bestN, text: best + '.', answer: 'The engine is reading for it; the day\'s piece is chosen with this in view.' };
  } catch (e) { return null; }
}
function deskConfig_(key) {
  try {
    var sh = deskSheet_().getSheetByName('Config'); var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 2).getValues();
    for (var i = 0; i < rows.length; i++) if (String(rows[i][0]).trim() === key) return String(rows[i][1]).trim();
  } catch (e) {}
  return '';
}

/* ---- the page's data ---- */
function growthFor_(who) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var lanes = lanes_(ss);
  var all = entries_(ss).filter(function (e) { return e.status !== 'retired'; });
  var admin = who.role === 'admin';
  var onDesk = all.filter(function (e) { return /^yes · /.test(e.desk); }).sort(function (a, b) { return b.desk.localeCompare(a.desk); });
  var todayE = onDesk.filter(function (e) { return e.desk.indexOf('yes · ' + today_()) === 0; })[0] || onDesk[0] || null;
  if (todayE && daysAgo_(todayE.written) > 7) todayE = null;
  var week = all.filter(function (e) { return daysAgo_(e.written) <= 6 && (/^yes · /.test(e.desk) || e.status === 'released' || admin); })
    .sort(function (a, b) { return (b.desk ? 1 : 0) - (a.desk ? 1 : 0) || b.written.localeCompare(a.written); });
  var seen = {}; var weekOut = [];
  week.forEach(function (e) { var q = e.question === 'Know' || e.question === 'Read' ? e.question : 'Show up creatively'; if (!seen[q]) { seen[q] = 1; weekOut.push(pieceOut_(e, lanes)); } });
  var nw = nextWednesday_();
  var bringing = all.filter(function (e) { return /bring/.test(e.desk) && !/used|not used/.test(e.desk) && daysAgo_(e.written) <= 10; }).sort(function (a, b) { return b.written.localeCompare(a.written); })[0] || null;
  var thursday = null;
  if (bringing) {
    var m = bringing.desk.match(/bring (\d{4}-\d{2}-\d{2})/); var bringDay = m ? m[1] : bringing.written;
    var wed = wednesdayAfter_(bringDay);
    if (Date.parse(today_()) > Date.parse(wed)) thursday = { id: bringing.id, move: bringing.move, when: Utilities.formatDate(new Date(wed + 'T12:00:00'), RE_TZ, 'EEEE, MMM d') };
  }
  var shelf = all.filter(function (e) { return e.status === 'released' || (admin && e.status === 'candidate'); }).sort(function (a, b) { return b.written.localeCompare(a.written); }).map(function (e) { return pieceOut_(e, lanes); });
  var coming = all.filter(function (e) { return /event|training|conference|workshop/i.test(e.kind); }).map(function (e) { return pieceOut_(e, lanes); });
  var candidates = all.filter(function (e) { return e.status === 'candidate'; }).length;
  return {
    ok: true, build: RE_BUILD, growth: GROWTH_BUILD,
    who: { name: who.name, email: who.email, role: who.role, room: who.room },
    today: todayE ? pieceOut_(todayE, lanes) : null,
    week: weekOut,
    room: { nextWednesday: nw.day + (nw.week ? ' · week ' + nw.week : ''), bringing: bringing ? pieceOut_(bringing, lanes) : null, prep: cfg['prep window'] ? 'Your prep window: ' + cfg['prep window'] : '', carried: who.room ? carried_(who) : null },
    thursday: thursday,
    shelf: shelf,
    coming: coming,
    release: admin ? { count: candidates } : null
  };
}
function wednesdayAfter_(day) { var d = new Date(day + 'T12:00:00'); var add = (3 - d.getDay() + 7) % 7; d.setDate(d.getDate() + add); return Utilities.formatDate(d, RE_TZ, 'yyyy-MM-dd'); }

/* ---- the row's question: is today's piece still unread? ---- */
function freshFor_(who) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var t = today_();
  var hit = entries_(ss).filter(function (e) { return e.status !== 'retired' && e.desk.indexOf('yes · ' + t) === 0; })[0];
  return !!hit && !/opened|bring|notforme|used/.test(hit.desk);
}

/* ---- the buttons ---- */
function findEntry_(ss, id) { var e = entries_(ss).filter(function (x) { return x.id === String(id || ''); })[0]; if (!e) throw { code: 'no_entry' }; return e; }
function setDesk_(ss, e, add) {
  var cur = e.desk || ''; if (cur.indexOf(add) >= 0) return cur;
  var next = cur ? cur + ' · ' + add : add;
  ss.getSheetByName('Entries').getRange(e.row, EC.desk).setValue(next);
  return next;
}
function answers_(ss) {
  var sh = ss.getSheetByName('Answers');
  if (!sh) { sh = ss.insertSheet('Answers'); sh.getRange(1, 1, 1, 8).setValues([['when', 'who', 'entry id', 'action', 'text', 'more', 'room', 'build']]); sh.setFrozenRows(1); }
  return sh;
}
function markEntry_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var e = findEntry_(ss, b.id);
  var what = String(b.what || '');
  var out = { ok: true };
  if (what === 'open') setDesk_(ss, e, 'opened ' + today_());
  else if (what === 'bring') { setDesk_(ss, e, 'bring ' + today_()); var nw = nextWednesday_(); out.nextWednesday = nw.day; bringCard_(who, e, nw); }
  else if (what === 'notforme') setDesk_(ss, e, 'notforme ' + today_());
  else throw { code: 'bad_mark' };
  answers_(ss).appendRow([stamp_(new Date()), who.email, e.id, what, '', '', who.room, RE_BUILD]);
  closeDoor_(e);
  return out;
}
/** The desk card was the door; walking through it closes it. */
function closeDoor_(e) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    for (var i = 1; i < data.length; i++) {
      var key = String(data[i][H['key']] || '');
      if (key.indexOf('research:') !== 0 || key.indexOf('research:bring') === 0) continue;
      if (String(data[i][H['status']]).toLowerCase() !== 'open') continue;
      if (String(data[i][H['link']] || '') !== e.link) continue;
      sh.getRange(i + 1, H['status'] + 1).setValue('done'); sh.getRange(i + 1, H['done at'] + 1).setValue(new Date());
    }
  } catch (x) {}
}
/** Bring it Wednesday: one card on his lane for the night, with the move on it; Done after the session. */
function bringCard_(who, e, nw) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'research:bring:' + nw.date + ':' + e.id;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = who.name || who.email; row[H['do this']] = 'Wednesday: ' + e.move;
    row[H['for']] = 'For your room · from Your Growth'; row[H['because']] = e.claim + (e.beside ? ' Beside it: ' + e.beside : ''); row[H['link']] = e.link; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['done at']] = ''; row[H['rule']] = 'RE8';
    for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
    sh.appendRow(row);
  } catch (x) {}
}
function thursday_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var e = findEntry_(ss, b.id);
  var used = String(b.used || '') === 'yes';
  var carried = String(b.carried || '').trim().slice(0, 600), changed = String(b.changed || '').trim().slice(0, 600);
  setDesk_(ss, e, used ? 'used' : 'not used');
  answers_(ss).appendRow([stamp_(new Date()), who.email, e.id, 'thursday', (used ? 'used · ' : 'not used · ') + carried, changed, who.room, RE_BUILD]);
  try {
    var id = readConfig_(ss)['room signals sheet id'] || deskConfig_('room signals sheet id');
    if (id && who.room && carried) {
      var sh = SpreadsheetApp.openById(id).getSheetByName('Signals'); var H = headerIndex_(sh);
      var nw = lastWednesday_(); var row = [];
      row[H['cohort']] = who.room; row[H['week']] = nw.week; row[H['session']] = nw.day; row[H['section opened']] = '';
      row[H['signal (the room\'s words, no names)']] = carried; row[H['construct']] = e.construct && !/none in the registry/i.test(e.construct) ? e.construct : ''; row[H['kind']] = 'facilitator, Thursday answer';
      row[H['speaks to it (our shelf)']] = e.move; row[H['what the facilitator did with it']] = (used ? 'Brought it. ' : 'Did not use it. ') + changed; row[H['course move it suggests']] = ''; row[H['source page']] = 'Your Growth'; row[H['coded']] = '';
      for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
      sh.appendRow(row);
    }
  } catch (x) { log_(ss, 'web', 'thursday: signals row not written', String(x).slice(0, 200)); }
  return { ok: true };
}
function lastWednesday_() {
  var nw = nextWednesday_(); var d = new Date(nw.date + 'T12:00:00'); d.setDate(d.getDate() - 7);
  var wk = nw.week ? String(Math.max(1, Number(nw.week) - 1)) : '';
  var t = new Date(); if (Utilities.formatDate(t, RE_TZ, 'yyyy-MM-dd') === nw.date) { d = t; wk = nw.week; }
  return { week: wk, day: Utilities.formatDate(d, RE_TZ, 'MMM d, yyyy') };
}

/* ---- the ask box: our shelf first, then Claude's wider reading, marked ---- */
function askShelf_(who, b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var text = String(b.text || '').trim().slice(0, 400);
  if (!text) throw { code: 'empty' };
  var lanes = lanes_(ss);
  var shelf = entries_(ss).filter(function (e) { return e.status === 'released' || e.status === 'candidate'; });
  var key = claudeKey_();
  var out = { ok: true }; var detail = '';
  if (key) {
    var compact = shelf.length ? shelf.slice(0, 60).map(function (e) { return e.id + ' | ' + voiceOf_(e.source) + ' | ' + e.question + ' | ' + e.claim + ' | move: ' + e.move; }).join('\n') : '(empty: the engine has not written its first entries yet)';
    var system = 'You help a facilitator of a Christian men\'s group prepare for Wednesday night. Answer from the shelf first: pick the ONE entry id that best fits what the room is stuck on. Then write ONE question the facilitator could ask the room, plain and clear, in American spelling, never the word "brother". If nothing on the shelf fits, say so and offer one idea from your own reading, labeled as not yet on our shelf, with the source named. Never a reading list. Never a man\'s name. Reply as JSON only: {"id": "<entry id or empty>", "question": "<one question>", "idea": "<one or two sentences, only when the shelf has nothing>", "source": "<who, when idea is given>"}.';
    var user = 'The room is stuck on: ' + text + '\n\nThe shelf:\n' + compact;
    try {
      var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true,
        headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
        payload: JSON.stringify({ model: readConfig_(ss)['claude model'] || 'claude-sonnet-5', max_tokens: 900, system: system, messages: [{ role: 'user', content: user }] }) });
      if (res.getResponseCode() === 200) {
        var j = JSON.parse(res.getContentText()); var txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n');
        var m = txt.match(/\{[\s\S]*\}/); var ans = {}; try { ans = m ? JSON.parse(m[0]) : {}; } catch (pe) { detail = 'Claude answered in a shape the page could not read: ' + txt.slice(0, 160); }
        var hit = shelf.filter(function (e) { return e.id === ans.id; })[0];
        if (hit) { out.item = pieceOut_(hit, lanes); out.item.fromShelf = true; }
        else if (ans.idea) out.item = { id: '', voice: ans.source || 'Claude\'s reading', kind: 'not yet on our shelf', move: ans.idea, claim: '', beside: '', cut: '', link: '', fromShelf: false, cost: '' };
        out.question = ans.question || '';
        if (!ans.id && !ans.question && !ans.idea) detail = 'Claude 200 but no id/question/idea in: ' + txt.slice(0, 300) + (j.stop_reason ? ' [stop: ' + j.stop_reason + ']' : '');
      } else { out.note = 'Claude did not answer; this is the shelf alone.'; detail = 'Claude ' + res.getResponseCode() + ': ' + String(res.getContentText() || '').slice(0, 200); }
    } catch (x) { out.note = 'Claude could not be reached; this is the shelf alone.'; detail = 'fetch failed: ' + String(x && x.message || x).slice(0, 160); }
  } else detail = 'no CLAUDE_KEY script property';
  if (!out.item && shelf.length) {
    var words = text.toLowerCase().split(/\W+/).filter(function (w) { return w.length > 3; });
    var best = null, bestN = 0;
    shelf.forEach(function (e) { var hay = (e.claim + ' ' + e.move + ' ' + e.beside + ' ' + e.place).toLowerCase(); var n = 0; words.forEach(function (w) { if (hay.indexOf(w) >= 0) n++; }); if (n > bestN) { bestN = n; best = e; } });
    if (best) { out.item = pieceOut_(best, lanes); out.item.fromShelf = true; out.question = out.question || 'What would it take for one man to say the thing out loud tonight?'; }
    if (!key) out.note = (out.note || '') + ' The wider reading is not connected yet; our team can switch it on.';
  }
  if (!out.item && !out.note) { out.note = 'The shelf has nothing on this yet. The engine logs the question and looks for it.'; }
  if (detail && who.role === 'admin') out.detail = detail;
  answers_(ss).appendRow([stamp_(new Date()), who.email, out.item && out.item.id || '', 'ask', text, (out.question || '') + (out.note ? ' | ' + out.note : '') + (detail ? ' | ' + detail : ''), who.room, RE_BUILD]);
  return out;
}
function claudeKey_() { try { return String(PropertiesService.getScriptProperties().getProperty('CLAUDE_KEY') || '').replace(/[\s"']/g, ''); } catch (e) { return ''; } }

/* ---- John's release, one button ---- */
function release_(who) {
  if (who.role !== 'admin') throw { code: 'not_admin' };
  var ss = SpreadsheetApp.openById(RE_SHEET_ID); var sh = ss.getSheetByName('Entries');
  var n = 0;
  entries_(ss).forEach(function (e) { if (e.status === 'candidate') { sh.getRange(e.row, EC.status, 1, 3).setValues([['released', who.name || who.email, stamp_(new Date())]]); n++; } });
  log_(ss, 'web', 'release', n + ' released by ' + who.email);
  return { ok: true, released: n };
}

/* ═══════════════════════════════ growth.js build 2.2 (served at ?file=growth.js) ═══════════════════════════════ */
var GROWTH_JS = "/* AP-GROWTH growth.js build 2.2 \u2014 the Your Growth page, served by the Research reader script (ResearchReader.gs build 2.2, ?file=growth.js).\n   The page block on /your-growth is only a loader: <div id=\"apGrowth\"></div> and this script's tag.\n   One home, three rooms: the band carries the row Your Desk \u00b7 Your Growth \u00b7 Your Page on every page the facilitator owns. */\n(function () {\nvar host = document.getElementById('apGrowth'); if (!host || host.getAttribute('data-growth')) return; host.setAttribute('data-growth', '2');\nvar BUILD = 2.2;\nvar GROWTH_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\nvar DESK_URL = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';\nvar STORE = 'apDesk';\nvar PATHS = { desk: '/front-desk', growth: '/your-growth', page: '/start' };\n\nhost.innerHTML = '<style>' +\n\"@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');\" +\n'.apg{--navy:#1F2A44;--band:#1B2A3A;--bronze:#B8945F;--bronze-ink:#8C6A3B;--paper:#FBF9F5;--card:#FFFDF9;--rule:#E2DCD1;--ink:#2B3040;--quiet:#5B5346;--band-ink:#F3EDE3;--band-quiet:#B7AFA4;--good:#3D7A52;--serif:\"Source Serif 4\",Georgia,serif;--sans:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif;color:var(--ink);font:400 17px/1.5 var(--sans);-webkit-font-smoothing:antialiased;text-align:left;background:var(--paper)}' +\n'.apg *,.apg *::before,.apg *::after{box-sizing:border-box}' +\n'#pageContainer #apGrowth a,#apGrowth a{color:var(--navy);text-decoration:none}#pageContainer #apGrowth a:hover,#apGrowth a:hover{color:var(--bronze-ink);text-decoration:none}' +\n'.apg .band{background:var(--band);color:var(--band-ink);padding:40px 24px 0;width:100vw;margin-left:calc(50% - 50vw)}' +\n'.apg .in{max-width:980px;margin:0 auto}' +\n'.apg .eyebrow{font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--bronze);font-weight:600}' +\n'.apg h1{font:600 44px/1.1 var(--serif);color:var(--band-ink);margin:12px 0 0}' +\n'.apg .lede{font-size:19px;line-height:1.5;color:var(--band-quiet);margin:12px 0 0;max-width:640px}' +\n'.apg .row{display:flex;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap}' +\n'#pageContainer #apGrowth .row a,.apg .row a{display:inline-block;padding:16px 0;font-size:17px;color:var(--band-quiet);border-bottom:3px solid transparent}' +\n'#pageContainer #apGrowth .row a.on,.apg .row a.on{color:var(--band-ink);font-weight:600;border-bottom-color:var(--bronze)}' +\n'.apg .row a .new{font-weight:400;color:var(--bronze)}' +\n'.apg .main{max-width:1028px;margin:0 auto;padding:48px 24px 80px;display:flex;flex-direction:column;gap:56px}' +\n'.apg .kicker{font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--bronze-ink);font-weight:600;margin:0 0 14px}' +\n'.apg .who{font-size:17px;color:var(--quiet);margin:0 0 14px}' +\n'.apg h2{font:600 40px/1.15 var(--serif);color:var(--navy);margin:0 0 16px;max-width:820px}' +\n'.apg .claim{font-size:21px;line-height:1.5;max-width:760px;margin:0 0 14px}' +\n'.apg .fine{font-size:17px;line-height:1.5;color:var(--quiet);max-width:760px;margin:0 0 10px}.apg .fine b{color:var(--navy);font-weight:600}' +\n'.apg .btns{display:flex;flex-wrap:wrap;gap:14px;margin-top:16px}' +\n'#pageContainer #apGrowth .btn,.apg .btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:6px;font:600 17px var(--sans);cursor:pointer;border:1.5px solid var(--navy);background:transparent;color:var(--navy);text-decoration:none}' +\n'#pageContainer #apGrowth .btn.p,.apg .btn.p{background:var(--bronze);border-color:var(--bronze);color:var(--band)}' +\n'#pageContainer #apGrowth .btn.q,.apg .btn.q{border-color:transparent;color:var(--quiet);font-weight:400}' +\n'.apg .btn[disabled]{opacity:.6;cursor:default}' +\n'.apg .card{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:22px}.apg .card.hi{border:1.5px solid var(--bronze)}' +\n'.apg .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}' +\n'.apg .three .card{display:flex;flex-direction:column;gap:10px;min-height:200px}.apg .three h3{font:600 24px/1.2 var(--serif);margin:0}.apg .three .v{font-size:15px;color:var(--quiet)}.apg .three .t{font-size:17px;line-height:1.45}.apg .three .st{margin-top:auto;font-size:15px;font-weight:600;color:var(--quiet)}.apg .three .st.good{color:var(--good)}.apg .three .st.new{color:var(--bronze-ink)}' +\n'.apg label{font-size:17px;font-weight:600;display:block;margin:0 0 8px}' +\n'.apg input[type=text],.apg input[type=search],.apg input[type=email],.apg input[type=tel],.apg textarea{width:100%;min-height:48px;padding:10px 16px;font:400 17px/1.45 var(--sans);border:1.5px solid #CBBFAE;border-radius:6px;background:#fff;color:var(--ink)}.apg textarea{resize:vertical}' +\n'.apg .askrow{display:flex;flex-wrap:wrap;gap:12px}.apg .askrow input{flex:1 1 320px;width:auto}' +\n'.apg .hr{border-top:1px solid var(--rule);padding-top:18px;margin-top:18px}' +\n'.apg .lanes{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0}' +\n'#pageContainer #apGrowth .lane,.apg .lane{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:22px;border:1px solid #CBBFAE;background:var(--card);font:400 16px var(--sans);color:var(--navy);cursor:pointer}' +\n'#pageContainer #apGrowth .lane.on,.apg .lane.on{background:var(--band);border-color:var(--band);color:var(--band-ink)}' +\n'.apg .list{border-top:1px solid var(--rule)}.apg .item{border-bottom:1px solid var(--rule)}' +\n'.apg .item .head{display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;align-items:baseline;padding:18px 0;cursor:pointer;width:100%;background:none;border:0;text-align:left;font:inherit;color:inherit}' +\n'.apg .item .head .m{font-size:18px;font-weight:600;flex:1 1 420px}.apg .item .head .w{font-size:15px;color:var(--quiet)}' +\n'.apg .item .body{display:none;padding:0 0 20px}.apg .item.open .body{display:block}' +\n'.apg .note{font-size:15px;color:var(--quiet)}' +\n'.apg .flash{background:var(--card);border:1.5px solid var(--bronze);border-radius:10px;padding:18px 22px;font-size:17px}' +\n'.apg .gate{max-width:560px;margin:0 auto;padding:56px 24px 80px}.apg .gate h2{font-size:32px}.apg .gate .err{color:#9A3B2F;font-size:15px;margin-top:8px}' +\n'.apg .foot{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;border-top:1px solid var(--rule);padding-top:22px;font-size:17px}' +\n'.apg .thu{background:var(--card);border:1.5px solid var(--bronze);border-radius:10px;padding:26px;display:flex;flex-direction:column;gap:18px}' +\n'.apg .radios{display:flex;gap:10px}.apg .radios label{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;border:1.5px solid #CBBFAE;border-radius:6px;font-size:16px;font-weight:600;background:var(--card);margin:0;cursor:pointer}.apg .radios input{width:18px;height:18px;margin:0;accent-color:var(--band)}' +\n'@media (max-width:720px){.apg .band{padding:26px 20px 0}.apg h1{font-size:27px;margin-top:8px}.apg .lede{font-size:15px;margin-top:8px}.apg .row{gap:18px;margin-top:10px;flex-wrap:nowrap}#pageContainer #apGrowth .row a,.apg .row a{padding:12px 0;font-size:14px;white-space:nowrap}.apg h2{font-size:25px;margin-bottom:10px}.apg .claim{font-size:17px;margin-bottom:8px}.apg .fine{font-size:14px;margin-bottom:6px}.apg .kicker{margin-bottom:8px}.apg .who{font-size:14px;margin-bottom:8px}.apg .three{grid-template-columns:1fr}.apg .three .card{min-height:0}.apg .btns{flex-direction:column;gap:10px;margin-top:12px}#pageContainer #apGrowth .btn,.apg .btn{width:100%;min-height:46px}.apg .main{gap:40px;padding:22px 20px 60px}}' +\n'</style>' +\n'<div class=\"apg\"><div class=\"band\"><div class=\"in\"><div class=\"eyebrow\">Ancient Path</div><h1 id=\"gHello\">Good morning.</h1><p class=\"lede\" id=\"gLede\">One thing for this week, twelve minutes. Filled for the Work \u00b7 Exodus 31:3.</p>' +\n'<nav class=\"row\" aria-label=\"Your rooms\"><a href=\"' + PATHS.desk + '\" id=\"gNavDesk\">Your Desk</a><a href=\"' + PATHS.growth + '\" class=\"on\" id=\"gNavGrowth\">Your Growth</a><a href=\"' + PATHS.page + '\" id=\"gNavPage\">Your Page</a></nav></div></div>' +\n'<div id=\"gBody\"></div></div>';\n\nfunction $(id) { return document.getElementById(id); }\nfunction esc(s) { return String(s == null ? '' : s).replace(/[&<>\"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;' }[c]; }); }\nfunction stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }\nfunction keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }\nfunction post(url, body) {\n  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })\n    .then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })\n    .then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });\n}\nfunction call(body) { if (!GROWTH_URL) return Promise.reject({ error: 'no_url' }); var s = stored(); body.key = s ? s.key : ''; return post(GROWTH_URL, body); }\nfunction greet() { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }\nfunction firstName(n) { return String(n || '').trim().split(/\\s+/)[0] || ''; }\nfunction words(e) {\n  switch (e && e.error) {\n    case 'not_on_list': return 'That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.';\n    case 'bad_email': return 'That does not look like an email address.';\n    case 'wait': return 'A code went out less than two minutes ago. Check your mail, or wait a moment and ask again.';\n    case 'too_many': return 'Five codes have gone out today. Try again tomorrow, or ask our team.';\n    case 'code_expired': return 'That code has expired. Ask for a new one.';\n    case 'code_wrong': return 'That is not the code. Check the mail and try again.';\n    case 'network': return 'The page could not reach the practice. Try again in a moment.';\n    case 'no_url': return 'The page is not wired to its script yet.';\n    default: return 'Something did not work. Try again in a moment.';\n  }\n}\nfunction scrollTo(el) { try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { el.scrollIntoView(); } }\n\n/* ---------- the gate: the same code by email the desk uses, the same key ---------- */\nfunction gate(msg) {\n  $('gHello').textContent = greet() + '.';\n  $('gLede').textContent = 'Sign in to open Your Growth.';\n  $('gBody').innerHTML = '<div class=\"gate\"><h2>Your Growth is for facilitators on our team.</h2>' +\n    '<p class=\"fine\">We send a six-digit code to the address on our list; it opens this browser for ninety days. The same code opens your desk.</p>' +\n    (msg ? '<p class=\"err\">' + esc(msg) + '</p>' : '') +\n    '<div id=\"gStep1\"><label for=\"gEmail\">Your email</label><input id=\"gEmail\" type=\"email\" autocomplete=\"email\" placeholder=\"you@example.com\"><div class=\"btns\"><button class=\"btn p\" id=\"gSend\">Send me a code</button></div><p class=\"err\" id=\"gErr1\" hidden></p></div>' +\n    '<div id=\"gStep2\" hidden><label for=\"gCode\">The six digits from the mail</label><input id=\"gCode\" type=\"tel\" inputmode=\"numeric\" autocomplete=\"one-time-code\" placeholder=\"000 000\"><div class=\"btns\"><button class=\"btn p\" id=\"gCheck\">Open Your Growth</button><button class=\"btn q\" id=\"gAgain\">Send another code</button></div><p class=\"err\" id=\"gErr2\" hidden></p></div></div>';\n  var email = '';\n  $('gSend').addEventListener('click', function () {\n    email = String($('gEmail').value || '').trim().toLowerCase();\n    var b = $('gSend'); b.disabled = true; b.textContent = 'Sending\u2026'; $('gErr1').hidden = true;\n    post(DESK_URL, { action: 'code_send', email: email }).then(function () {\n      b.disabled = false; b.textContent = 'Send me a code'; $('gStep1').hidden = true; $('gStep2').hidden = false; $('gCode').focus();\n    }, function (e) { b.disabled = false; b.textContent = 'Send me a code'; $('gErr1').textContent = words(e); $('gErr1').hidden = false; });\n  });\n  $('gAgain').addEventListener('click', function () { $('gStep2').hidden = true; $('gStep1').hidden = false; });\n  $('gCheck').addEventListener('click', function () {\n    var code = String($('gCode').value || '').replace(/\\D/g, '');\n    if (code.length !== 6) { $('gErr2').textContent = 'The code is six digits.'; $('gErr2').hidden = false; return; }\n    var b = $('gCheck'); b.disabled = true; b.textContent = 'Opening\u2026'; $('gErr2').hidden = true;\n    post(DESK_URL, { action: 'code_check', email: email, code: code, browser: navigator.userAgent.slice(0, 120) }).then(function (r) {\n      keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });\n      load();\n    }, function (e) { b.disabled = false; b.textContent = 'Open Your Growth'; $('gErr2').textContent = words(e); $('gErr2').hidden = false; });\n  });\n}\n\n/* ---------- the page ---------- */\nvar D = null;\nfunction load() {\n  if (!stored()) return gate('');\n  $('gBody').innerHTML = '<div class=\"main\"><p class=\"note\">Opening Your Growth\u2026</p></div>';\n  call({ action: 'growth' }).then(function (r) { D = r; render(); }, function (e) {\n    var code = e && e.error;\n    if (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed') { keep(null); return gate(code === 'removed' ? 'Your name is no longer on the desk list.' : (code === 'key_expired' ? 'Your sign-in has run out. Ask for a new code.' : '')); }\n    $('gBody').innerHTML = '<div class=\"main\"><div class=\"flash\">' + esc(words(e)) + ' <button class=\"btn q\" id=\"gRetry\">Try again</button></div></div>';\n    $('gRetry').addEventListener('click', load);\n  });\n}\n\nfunction lineOf(q) { return q === 'Know' ? 'Know' : q === 'Read' ? 'Read' : 'Show up creatively'; }\nfunction stateWords(e) {\n  if (!e) return '';\n  var s = String(e.state || '');\n  if (/used/.test(s)) return 'Used Wednesday';\n  if (/bring/.test(s)) return 'Bringing Wednesday';\n  if (/notforme/.test(s)) return 'Set aside';\n  if (/opened/.test(s)) return 'Opened' + (e.openedDay ? ' ' + e.openedDay : '');\n  if (e.isToday) return 'New today';\n  return 'Not yet';\n}\nfunction pieceHtml(p, big) {\n  if (!p) return '';\n  var h = '';\n  h += '<p class=\"who\">' + esc(p.voice) + (p.kind ? ' \u00b7 ' + esc(p.kind) : '') + (p.cost ? ' \u00b7 ' + esc(p.cost) : '') + '</p>';\n  h += (big ? '<h2>' : '<p class=\"claim\" style=\"font-weight:600\">') + esc(p.move) + (big ? '</h2>' : '</p>');\n  h += '<p class=\"claim\">' + esc(p.claim) + '</p>';\n  h += '<p class=\"fine\"><b>Beside it:</b> ' + esc(p.beside) + (p.ours ? ' <b>Already ours:</b> ' + esc(p.ours) : '') + '</p>';\n  if (p.cut) h += '<p class=\"fine\"><b>The cut:</b> ' + esc(p.cut) + '</p>';\n  return h;\n}\n\nfunction render() {\n  var who = D.who || {}; var fn = firstName(who.name);\n  $('gHello').textContent = greet() + (fn ? ', ' + fn : '') + '.';\n  $('gLede').textContent = D.today && !/opened|bring|used|notforme/.test(D.today.state || '') ? 'One thing for this week, ' + (D.today.minutes ? D.today.minutes + ' minutes' : 'a few minutes') + '. Filled for the Work \u00b7 Exodus 31:3.' : 'Filled for the Work \u00b7 Exodus 31:3. Know \u00b7 Read \u00b7 Show up creatively.';\n  $('gNavGrowth').innerHTML = 'Your Growth' + (D.today && D.today.isToday && !/opened|bring|used|notforme/.test(D.today.state || '') ? ' <span class=\"new\">\u00b7 1 new</span>' : '');\n\n  var h = '<div class=\"main\">';\n  // Thursday morning: before anything else\n  if (D.thursday) {\n    var t = D.thursday;\n    h += '<section id=\"sThu\"><p class=\"kicker\">Last night \u00b7 ' + esc(t.when) + '</p><div class=\"thu\">' +\n      '<h2 style=\"font-size:28px;margin:0\">You brought: ' + esc(t.move) + '</h2>' +\n      '<fieldset style=\"border:0;padding:0;margin:0\"><legend style=\"font-size:17px;font-weight:600;padding:0;margin-bottom:10px\">Did you use it?</legend><div class=\"radios\"><label><input type=\"radio\" name=\"gUsed\" value=\"yes\"> Yes</label><label><input type=\"radio\" name=\"gUsed\" value=\"no\"> Not this time</label></div></fieldset>' +\n      '<div><label for=\"gCarried\">What did the room carry?</label><textarea id=\"gCarried\" rows=\"3\" placeholder=\"No names. The themes, in a line or two.\"></textarea></div>' +\n      '<div><label for=\"gChanged\">What did it change in how you led?</label><textarea id=\"gChanged\" rows=\"3\" placeholder=\"One sentence is enough.\"></textarea></div>' +\n      '<div class=\"btns\" style=\"margin-top:0\"><button class=\"btn p\" id=\"gKeep\">Keep this</button><button class=\"btn q\" id=\"gLater\">Later</button></div>' +\n      '<p class=\"note\">Your answers go to the room\\'s signals, team only, and tune what you get next. Nothing here reaches the men.</p>' +\n      '<p class=\"err\" id=\"gThuErr\" hidden style=\"color:#9A3B2F;font-size:15px\"></p></div></section>';\n  }\n  // Today's piece\n  h += '<section id=\"sToday\"><p class=\"kicker\">For your growth' + (D.today ? ' \u00b7 ' + esc(lineOf(D.today.question)) : '') + '</p>';\n  if (D.today) {\n    var st = String(D.today.state || '');\n    if (/notforme/.test(st)) h += '<div class=\"flash\">Noted. Tomorrow\\'s will be different.</div>';\n    else {\n      h += pieceHtml(D.today, true);\n      h += '<div class=\"btns\">' +\n        '<a class=\"btn p\" id=\"gOpen\" href=\"' + esc(D.today.link) + '\" target=\"_blank\" rel=\"noopener\">Open it</a>' +\n        (/bring|used/.test(st) ? '<span class=\"btn\" style=\"border-color:var(--rule);color:var(--good)\">On your week: ' + esc(D.room && D.room.nextWednesday || 'Wednesday') + '</span>' : '<button class=\"btn\" id=\"gBring\">Bring it Wednesday</button>') +\n        (/bring|used|opened/.test(st) ? '' : '<button class=\"btn q\" id=\"gNot\">Not for me</button>') +\n        '</div><p class=\"note\" id=\"gTodayNote\" style=\"margin-top:10px\"></p>';\n    }\n  } else {\n    h += '<h2 style=\"font-size:28px\">Nothing new this morning.</h2><p class=\"fine\">The reader opens the field at 5:00 AM and the engine writes by 6:40. When a piece fits your room, it is here, with the cut and the move.</p>';\n  }\n  h += '</section>';\n  // This week: three lines\n  h += '<section id=\"sWeek\"><p class=\"kicker\">This week \u00b7 Know \u00b7 Read \u00b7 Show up creatively</p><div class=\"three\">';\n  ['Know', 'Read', 'Show up creatively'].forEach(function (q) {\n    var e = (D.week || []).filter(function (x) { return lineOf(x.question) === q; })[0];\n    var sw = stateWords(e); var cls = /Used|Bringing|Opened/.test(sw) ? 'good' : (sw === 'New today' ? 'new' : '');\n    h += '<div class=\"card' + (e && e.isToday ? ' hi' : '') + '\"><h3>' + q + '</h3>' + (e ? '<div class=\"v\">' + esc(e.voice) + '</div><div class=\"t\">' + esc(e.move) + '</div><div class=\"st ' + cls + '\">' + esc(sw) + '</div>' : '<div class=\"t\" style=\"color:var(--quiet)\">Nothing yet this week.</div><div class=\"st\">Not yet</div>') + '</div>';\n  });\n  h += '</div></section>';\n  // For your room\n  var R = D.room || {};\n  h += '<section id=\"sRoom\"><p class=\"kicker\">For your room' + (R.nextWednesday ? ' \u00b7 ' + esc(R.nextWednesday) : '') + '</p><div class=\"card\">';\n  h += '<div style=\"display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between\"><div class=\"claim\" style=\"margin:0;font-size:19px\"><b>You are bringing:</b> ' + (R.bringing ? esc(R.bringing.move) : '<span style=\"color:var(--quiet)\">nothing yet. Press Bring it Wednesday on a piece.</span>') + '</div>' + (R.prep ? '<div class=\"note\">' + esc(R.prep) + '</div>' : '') + '</div>';\n  h += '<div class=\"hr\"><label for=\"gAsk\">My room is stuck on\u2026</label><div class=\"askrow\"><input id=\"gAsk\" type=\"text\" placeholder=\"silence after a heavy story\"><button class=\"btn\" id=\"gAskBtn\" style=\"background:var(--band);border-color:var(--band);color:var(--band-ink)\">What do I bring Wednesday?</button></div><p class=\"note\" style=\"margin-top:8px\">One item and one question come back, from our shelf first.</p><div id=\"gAskOut\"></div></div>';\n  if (R.carried) h += '<div class=\"hr\"><p class=\"kicker\" style=\"font-size:12px;margin-bottom:8px\">Your room carried' + (R.carried.weeks > 1 ? ', ' + R.carried.weeks + ' weeks running' : '') + '</p><p class=\"claim\" style=\"font-size:17px;margin:0\">' + esc(R.carried.text) + (R.carried.answer ? ' ' + esc(R.carried.answer) : '') + '</p></div>';\n  h += '</div></section>';\n  // The shelf\n  h += '<section id=\"sShelf\"><p class=\"kicker\">Everything we have kept</p>' +\n    '<label for=\"gFind\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)\">Search the shelf</label><input id=\"gFind\" type=\"search\" placeholder=\"Search the shelf\">' +\n    '<div class=\"lanes\" id=\"gLanes\"></div><div class=\"list\" id=\"gList\"></div>' +\n    '<p class=\"note\" id=\"gShelfNote\"></p></section>';\n  // Coming up\n  h += '<section id=\"sComing\"><p class=\"kicker\">Coming up</p>';\n  if (D.coming && D.coming.length) { h += '<div class=\"list\">'; D.coming.forEach(function (c) { h += '<div class=\"item\"><div class=\"head\"><span class=\"m\">' + esc(c.move) + '</span><span class=\"w\">' + esc(c.cost) + '</span></div></div>'; }); h += '</div>'; }\n  else h += '<p class=\"fine\">Nothing on the calendar yet. Trainings and events arrive here with the price, the deadline, and one button that puts them on your calendar.</p>';\n  h += '</section>';\n  // John only\n  if (D.release) h += '<section class=\"foot\"><div><b>Candidates this week (' + D.release.count + ')</b> <span class=\"note\">\u00b7 you see this line; facilitators do not</span></div><button class=\"btn\" id=\"gRelease\"' + (D.release.count ? '' : ' disabled') + '>Read and release</button></section>';\n  h += '<p class=\"note\">Your Growth \u00b7 build ' + BUILD + ' \u00b7 Filled for the Work, Exodus 31:3 and Proverbs 24:3\u20134.</p>';\n  h += '</div>';\n  $('gBody').innerHTML = h;\n  wire();\n  if (D.thursday) scrollTo($('sThu'));\n}\n\nvar laneOn = 'All', findText = '';\nfunction shelfLanes() { var set = {}; (D.shelf || []).forEach(function (e) { set[e.lane || 'Other'] = 1; }); return ['All'].concat(Object.keys(set).sort()); }\nfunction renderShelf() {\n  var lanes = shelfLanes();\n  $('gLanes').innerHTML = lanes.map(function (l) { return '<button class=\"lane' + (l === laneOn ? ' on' : '') + '\" data-lane=\"' + esc(l) + '\">' + esc(l) + '</button>'; }).join('');\n  Array.prototype.forEach.call($('gLanes').querySelectorAll('.lane'), function (b) { b.addEventListener('click', function () { laneOn = b.getAttribute('data-lane'); renderShelf(); }); });\n  var q = findText.toLowerCase();\n  var items = (D.shelf || []).filter(function (e) { return (laneOn === 'All' || (e.lane || 'Other') === laneOn) && (!q || (e.move + ' ' + e.claim + ' ' + e.voice + ' ' + e.beside).toLowerCase().indexOf(q) >= 0); });\n  if (!items.length) { $('gList').innerHTML = '<p class=\"fine\" style=\"padding:18px 0\">' + ((D.shelf || []).length ? 'Nothing on the shelf matches that yet.' : 'The shelf fills as entries are released, one week at a time.') + '</p>'; }\n  else $('gList').innerHTML = items.map(function (e, i) {\n    return '<div class=\"item\" id=\"it' + i + '\"><button class=\"head\" type=\"button\" data-i=\"' + i + '\"><span class=\"m\">' + esc(e.move) + '</span><span class=\"w\">' + esc(e.voice) + ' \u00b7 ' + esc(lineOf(e.question)) + (e.cost ? ' \u00b7 ' + esc(e.cost) : '') + (e.status === 'candidate' ? ' \u00b7 candidate' : '') + '</span></button>' +\n      '<div class=\"body\">' + pieceHtml(e, false) + '<div class=\"btns\" style=\"margin-top:8px\"><a class=\"btn p\" href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\" data-open=\"' + esc(e.id) + '\">Open it</a><button class=\"btn\" data-bring=\"' + esc(e.id) + '\">Bring it Wednesday</button></div></div></div>';\n  }).join('');\n  Array.prototype.forEach.call($('gList').querySelectorAll('.head'), function (b) { b.addEventListener('click', function () { var it = b.parentNode; it.classList.toggle('open'); }); });\n  Array.prototype.forEach.call($('gList').querySelectorAll('[data-open]'), function (a) { a.addEventListener('click', function () { call({ action: 'mark', id: a.getAttribute('data-open'), what: 'open' }).catch(function () {}); }); });\n  Array.prototype.forEach.call($('gList').querySelectorAll('[data-bring]'), function (b) { b.addEventListener('click', function () { bring(b.getAttribute('data-bring'), b); }); });\n  $('gShelfNote').textContent = (D.shelf || []).length ? ((D.release ? 'Candidates show here for you only until they are released.' : 'New here? Start with the pieces marked Know; the cost is stated on each.')) : '';\n}\nfunction bring(id, btn) {\n  btn.disabled = true; btn.textContent = 'Putting it on your week\u2026';\n  call({ action: 'mark', id: id, what: 'bring' }).then(function (r) {\n    btn.textContent = 'On your week: ' + (r.nextWednesday || 'Wednesday'); btn.style.borderColor = 'var(--rule)'; btn.style.color = 'var(--good)';\n    if (D.today && D.today.id === id) D.today.state = (D.today.state || '') + ' \u00b7 bring';\n    D.room = D.room || {}; D.room.bringing = (D.shelf || []).concat(D.today ? [D.today] : []).filter(function (e) { return e.id === id; })[0] || D.room.bringing;\n    if (r.nextWednesday) D.room.nextWednesday = r.nextWednesday;\n    var el = document.querySelector('#sRoom .claim'); if (el && D.room.bringing) el.innerHTML = '<b>You are bringing:</b> ' + esc(D.room.bringing.move);\n  }, function (e) { btn.disabled = false; btn.textContent = 'Bring it Wednesday'; alertLine(words(e)); });\n}\nfunction alertLine(msg) { var n = $('gTodayNote'); if (n) { n.textContent = msg; } }\nfunction wire() {\n  if ($('gOpen')) $('gOpen').addEventListener('click', function () { call({ action: 'mark', id: D.today.id, what: 'open' }).catch(function () {}); var n = $('gNot'); if (n) n.remove(); });\n  if ($('gBring')) $('gBring').addEventListener('click', function () { bring(D.today.id, $('gBring')); var n = $('gNot'); if (n) n.remove(); });\n  if ($('gNot')) $('gNot').addEventListener('click', function () {\n    var b = $('gNot'); b.disabled = true;\n    call({ action: 'mark', id: D.today.id, what: 'notforme' }).then(function () { D.today.state = (D.today.state || '') + ' \u00b7 notforme'; render(); }, function (e) { b.disabled = false; alertLine(words(e)); });\n  });\n  if ($('gKeep')) $('gKeep').addEventListener('click', function () {\n    var used = (document.querySelector('input[name=gUsed]:checked') || {}).value || '';\n    if (!used) { $('gThuErr').textContent = 'Say whether you used it, then keep.'; $('gThuErr').hidden = false; return; }\n    var b = $('gKeep'); b.disabled = true; b.textContent = 'Keeping\u2026'; $('gThuErr').hidden = true;\n    call({ action: 'thursday', id: D.thursday.id, used: used, carried: $('gCarried').value, changed: $('gChanged').value }).then(function () {\n      $('sThu').innerHTML = '<div class=\"flash\">Kept. It is in the room\\'s signals, and it shapes what comes next.</div>'; D.thursday = null;\n    }, function (e) { b.disabled = false; b.textContent = 'Keep this'; $('gThuErr').textContent = words(e); $('gThuErr').hidden = false; });\n  });\n  if ($('gLater')) $('gLater').addEventListener('click', function () { $('sThu').remove(); scrollTo($('sToday')); });\n  if ($('gAskBtn')) $('gAskBtn').addEventListener('click', function () {\n    var q = String($('gAsk').value || '').trim(); if (!q) { $('gAsk').focus(); return; }\n    var b = $('gAskBtn'); b.disabled = true; b.textContent = 'Looking on the shelf\u2026'; $('gAskOut').innerHTML = '';\n    call({ action: 'ask', text: q }).then(function (r) {\n      b.disabled = false; b.textContent = 'What do I bring Wednesday?';\n      var out = '<div class=\"card\" style=\"margin-top:16px\">';\n      if (r.item) out += '<p class=\"kicker\" style=\"font-size:12px;margin-bottom:8px\">' + (r.item.fromShelf ? 'From our shelf' : 'Not yet on our shelf') + '</p>' + pieceHtml(r.item, false) + '<div class=\"btns\" style=\"margin-top:8px\">' + (r.item.link ? '<a class=\"btn p\" href=\"' + esc(r.item.link) + '\" target=\"_blank\" rel=\"noopener\">Open it</a>' : '') + (r.item.id ? '<button class=\"btn\" data-bring=\"' + esc(r.item.id) + '\" id=\"gAskBring\">Bring it Wednesday</button>' : '') + '</div>';\n      if (r.question) out += '<p class=\"claim\" style=\"margin-top:16px\"><b>The question for Wednesday:</b> ' + esc(r.question) + '</p>';\n      if (r.note) out += '<p class=\"note\">' + esc(r.note) + '</p>';\n      out += '</div>';\n      $('gAskOut').innerHTML = out;\n      if ($('gAskBring')) $('gAskBring').addEventListener('click', function () { bring(r.item.id, $('gAskBring')); });\n    }, function (e) { b.disabled = false; b.textContent = 'What do I bring Wednesday?'; $('gAskOut').innerHTML = '<p class=\"note\" style=\"margin-top:8px\">' + esc(words(e)) + '</p>'; });\n  });\n  if ($('gFind')) $('gFind').addEventListener('input', function () { findText = $('gFind').value; renderShelf(); });\n  if ($('gRelease')) $('gRelease').addEventListener('click', function () {\n    var b = $('gRelease'); b.disabled = true; b.textContent = 'Releasing\u2026';\n    call({ action: 'release' }).then(function (r) { b.textContent = 'Released ' + r.released + ' to the shelf'; (D.shelf || []).forEach(function (e) { if (e.status === 'candidate') e.status = 'released'; }); D.release.count = 0; renderShelf(); }, function (e) { b.disabled = false; b.textContent = 'Read and release'; alertLine(words(e)); });\n  });\n  renderShelf();\n}\n\nload();\n})();\n";

/* ═══════════════════════════════ row.js build 2.2 (served at ?file=row.js) ═══════════════════════════════ */
var ROW_JS = "/* AP-ROW row.js build 2.2 \u2014 the facilitator's row, Your Desk \u00b7 Your Growth \u00b7 Your Page, in the band of every page he owns.\n   Served by the Research reader script (?file=row.js). Loaded on /front-desk and /start; /your-growth draws its own.\n   Shows only in a browser that holds a desk key (a facilitator or admin); a man never sees it. */\n(function () {\n  if (window.__apRow) return; window.__apRow = true;\n  var STORE = 'apDesk', s = null;\n  try { s = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (e) {}\n  if (!s || !s.key) return;\n  var ROW_URL = (function () { var sc = document.currentScript; var u = sc && sc.src ? String(sc.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\n  var path = location.pathname.replace(/\\/+$/, '') || '/';\n  var here = path === '/front-desk' ? 'desk' : path === '/your-growth' ? 'growth' : (path === '/start' || path === '/') ? 'page' : '';\n  if (here === 'growth') return;\n  var css = document.createElement('style');\n  css.textContent = '.apg-row{display:flex;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap;font-family:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif}' +\n    '#pageContainer .apg-row a,.apg-row a{display:inline-block;padding:16px 0;font-size:17px;color:#B7AFA4;border-bottom:3px solid transparent;text-decoration:none}' +\n    '#pageContainer .apg-row a:hover,.apg-row a:hover{color:#F3EDE3;text-decoration:none}' +\n    '#pageContainer .apg-row a.on,.apg-row a.on{color:#F3EDE3;font-weight:600;border-bottom-color:#B8945F}' +\n    '.apg-row a .new{font-weight:400;color:#B8945F}' +\n    '@media (max-width:720px){.apg-row{gap:18px;margin-top:10px;flex-wrap:nowrap}#pageContainer .apg-row a,.apg-row a{padding:12px 0;font-size:14px;white-space:nowrap}}';\n  document.head.appendChild(css);\n  var tries = 0;\n  function place() {\n    var inner = document.querySelector('.ap-band-in') || document.querySelector('.ap-band');\n    if (!inner) { if (tries++ < 60) return setTimeout(place, 250); return; }\n    if (inner.querySelector('.apg-row')) return;\n    var nav = document.createElement('nav');\n    nav.className = 'apg-row'; nav.setAttribute('aria-label', 'Your rooms');\n    nav.innerHTML = '<a href=\"/front-desk\"' + (here === 'desk' ? ' class=\"on\"' : '') + '>Your Desk</a>' +\n      '<a href=\"/your-growth\" id=\"apgRowGrowth\">Your Growth</a>' +\n      '<a href=\"/start\"' + (here === 'page' ? ' class=\"on\"' : '') + '>Your Page</a>';\n    inner.appendChild(nav);\n    if (ROW_URL) {\n      fetch(ROW_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'new', key: s.key }), credentials: 'omit' })\n        .then(function (r) { return r.json(); }).then(function (r) { if (r && r.ok && r.fresh) { var a = document.getElementById('apgRowGrowth'); if (a) a.innerHTML = 'Your Growth <span class=\"new\">\u00b7 1 new</span>'; } }).catch(function () {});\n    }\n  }\n  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();\n})();\n";
