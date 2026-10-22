/**
 * Ancient Path — Research reader · build 4.0.2 (For his road: the first walk's findings, and the road remembers)
 *
 * Build 4.0.2 (Oct 22, 2026, ruled with John): the man's lines never carry a course week (Entries AB "week served" is a value the morning
 *   writer sets; the choice prefers his week or earlier, never later); the writer never sees the facilitator's move and a read-back fails any
 *   line that puts him in the facilitator's chair; a one thing that names a Your Story piece says the step first; release writes lines for
 *   every released entry; the Course map tab gives the writer the week's own words; the corner reads "Week 3 of 12 · Given Oct 21"; the
 *   Since line reads right; phone sizes; the threshing floor and the five stops at the head of the section (full the first time, then one
 *   line); and the road remembers (4.1b): the line from his last answer, Your road so far, the questions that return. Being known is quieter.
 *
 * Build 4.1 — one band, three rooms (row.js build 3): Your Growth's band becomes the house band on Your Page and Your Desk, redrawn by
 *   row.js on load (picture when Config "band picture page" / "band picture desk" is filled, eyebrow, greeting, one line, the three
 *   stops, the row for desk holders), aligned to the page's own edge. Also: the man's lines never carry their own label (4.0.1).
 * Build 4 — For his road, the second door of the same shelf: on a man's Your Page (the loader <div id="apRoad4"></div> and this
 *   script's ?file=road.js), one released piece a week chosen for where he is on the road — the claim, In their words, What it means
 *   for your road, One thing to do this week, a question back (its answer goes to the Front Desk as a card and is read by a person
 *   before anything else happens with it), and the two words This met me / Not for me. New: Entries X–AA (key words · for his road ·
 *   one thing to do · question back), written each morning by roadDaily from the entry and the Weeks tab's own titles so John reads the
 *   man's version before he releases; the Learners tab (the Room tab's men on their own, anyone else by hand; a row binds to the first
 *   LearnWorlds id it sees); the Road tab (given · opened · met · not · answer); Config rows road door opens / road free until /
 *   road price / road review window / road model / road lines per day / road lead / road foot / road daily; Rule RE14; a daily
 *   trigger roadDaily (6 AM Central). The week turns on the man's room's day from the Rooms tab (never a weekday in this file) or,
 *   with no room, on the weekday his door opened. Nothing of the room is shown, nothing is mailed, his saved writing is never read.
 *   Install: paste over Code.gs, Ctrl+S, run setup once (tabs, columns, Config rows, RE14, Standard rows, the roadDaily trigger),
 *   then Deploy → Manage deployments → edit → New version → Deploy (the same address). Then roadLinesNow once by hand so the five
 *   entries on the shelf get their lines today instead of tomorrow morning.
 *
 * Build 3.1 — growth.js 3.1 only: the craftsman's bench (Exodus 31:3), drawn in the house style, opens the Your Growth page
 *   full width under the site's top bar with the band beneath it; served from the repo at pictures/craftsmans-bench.jpg.
 *   Nothing in the reader, the transcripts or the sheet changed.
 *
 * Build 3 — transcripts, and the three-part block on Your Growth.
 *   The reader now keeps, for every feed item, the transcript the show publishes (<podcast:transcript>), the audio
 *   address (the enclosure) and the length (Inbox columns M, N, O). After the 6:40 task has written the day's entries
 *   and set Config "transcribe asked", transcribeTick (every ten minutes, 6–9 AM Central) runs transcribeToday: for
 *   each entry written today it takes the first route that answers — the show's own transcript (free), YouTube
 *   captions read from the video page (free), Deepgram on the audio address (paid, survivors only, at most
 *   "deepgram max per day", key DEEPGRAM_KEY in Script Properties, switch Config "deepgram") — and writes the words
 *   as a Google Doc in the Transcripts folder of the Research Engine folder, one row on the Transcripts tab, and
 *   Entries column V. The 7:45 Claude task (the deepening pass) reads the doc and writes column U "in their words"
 *   (two verbatim lines of twenty-five words or fewer, each with its minute and a link that opens the thing there),
 *   rewrites the cut with real minutes, and marks column W. Rule RE1 is amended for it; RE13 keeps transcripts as
 *   working files for our team, never published or shown.
 *   Resolving: Podcast Index (keys PODCASTINDEX_KEY and PODCASTINDEX_SECRET in Script Properties, switch Config
 *   "podcast index api") finds feeds the Apple search misses and an episode's audio and transcript by feed; the
 *   YouTube Data API (key YOUTUBE_KEY, switch Config "youtube data api") resolves a channel from a bare name and
 *   gives a video's length. Both switches may stay off; nothing else needs them.
 *   The page: every piece carries the three-part block — In their words · What it means for our work (the construct,
 *   read against the text, already ours) · What to do with it (the move) — then What to listen for (the cut).
 *   A quote without meaning and application attached is never written (the pass's rule; the page shows the block
 *   only whole). "The cut" leaves the page: it reads "What to listen for".
 *   Install: paste over Code.gs, Ctrl+S, run setup once (it adds the tabs, columns, Config rows, Rules RE1/RE13, the
 *   Standard rows, the Transcripts folder and the ten-minute trigger), then Deploy → Manage deployments → edit →
 *   New version → Deploy (the same address). Keys go in Project Settings → Script Properties.
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
 * Build 2.6.1: the prep window line on the page passes through prepLine_, so a weekday typed into the Config cell never reaches the page (the cell itself can stay as it is). Nothing else changed from 2.6.
 * Build 2.6 (set A): the three lines a facilitator sees are the text's own words, Wisdom · Understanding · Knowledge (Exodus 31:3); the sheet's keys in Entries column G stay and the page maps key to word; the Standard tab's lines and the words of any entry that names a room's day are brought to it by applyBuild26 (setup runs it once).
 * Build 2.6: the room's day comes only from the Front Desk sheet's Rooms tab (meets, first night) through the facilitator's room on People;
 * What these mean and the shelf lines open in place; every scroll lands below the site's top bar; typed text survives every open and close.
 * Everyday functions: readFeeds (the trigger's job), readNow (same, by hand),
 * resolveFeedsOnly (fill the feed column without reading), status (one line in the log).
 */

var RE_BUILD = 4;
var GROWTH_BUILD = 3.1;
var RE_FOLDER_ID = '1aXZES2LBmBpNVBfcq89kMnRY019BeBAQ'; // the Research Engine folder in the Ancient Path shared drive; Transcripts lives inside it
var RE_SHEET_ID = '1FGFqxrOHzwQbDMoywrnGgLGrNlTtlhfcWZjPG9ppmPo';
var RE_TZ = 'America/Chicago';
var RE_UA = 'Mozilla/5.0 (compatible; AncientPathResearchReader/' + RE_BUILD + '; +https://www.ancientpathcoaching.com)';
var RE_TIME_BUDGET_MS = 270000; // stop opening new feeds after 4.5 minutes; the rest wait for tomorrow

// Sources tab columns (1-based)
var SC = { id: 1, discipline: 2, voice: 3, kind: 4, where: 5, feed: 6, serves: 7, woman: 8, status: 9, note: 10, lastRead: 11, added: 12 };
// Inbox tab columns (M, N, O since build 3: the show's own transcript address, the audio address, the length in minutes)
var IC = { found: 1, sourceId: 2, voice: 3, discipline: 4, kind: 5, title: 6, link: 7, published: 8, blurb: 9, state: 10, reason: 11, entryId: 12, transcript: 13, audio: 14, minutes: 15 };
// Transcripts tab columns (build 3)
var TC = { entryId: 1, source: 2, link: 3, route: 4, state: 5, minutes: 6, words: 7, doc: 8, docId: 9, audio: 10, fetched: 11, note: 12, build: 13 };
var TC_HEAD = ['entry id', 'source', 'the thing (link)', 'route', 'state', 'minutes', 'words', 'transcript (doc)', 'doc id', 'audio address', 'fetched', 'note', 'build'];

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

  // the ten-minute tick that runs the day's transcription once the 6:40 task has asked for it (build 3); one, never two
  ScriptApp.getProjectTriggers().forEach(function (t) {
    if (t.getHandlerFunction() === 'transcribeTick') ScriptApp.deleteTrigger(t);
  });
  ScriptApp.newTrigger('transcribeTick').timeBased().everyMinutes(10).create();

  ensureLabel_(cfg['newsletter label'] || 'Research engine');
  answers_(ss);
  if (!cfg['claude model']) setConfig_(ss, 'claude model', 'claude-sonnet-4-5');
  if (!cfg['room signals sheet id']) { var sig = deskConfig_('room signals sheet id'); if (sig) setConfig_(ss, 'room signals sheet id', sig); }
  ensureBuild26_(ss);
  ensureBuild3_(ss);
  ensureBuild4_(ss);
  ensureBuild41_(ss);
  ensureBuild402_(ss);
  var roadHour = roadTrigger_(readConfig_(ss));
  log_(ss, 'setup', 'trigger set for ' + hour + ':00 Central daily; transcribeTick every ten minutes; roadDaily at ' + roadHour + ':00 Central; label "' + (cfg['newsletter label'] || 'Research engine') + '" ready');
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
  try { ensureBuild26_(ss); } catch (x) { log_(ss, 'build 26', 'the Standard tab and the entries could not be brought to the new words', String(x).slice(0, 200)); }
  try { ensureBuild3_(ss); } catch (x3) { log_(ss, 'build 3', 'the build 3 tabs and rows could not be made', String(x3).slice(0, 200)); }
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
          it.publishedMs ? stamp_(new Date(it.publishedMs)) : '', it.blurb, 'new', '', '', it.transcript || '', it.audio || '', it.minutes || '']);
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
  var data = null;
  try { data = res ? JSON.parse(res) : null; } catch (e) { data = null; }
  var list = (data && data.results) || [];
  if (!list.length) return idMatch ? indexFeedByItunesId_(idMatch[1]) : indexFeedByTerm_(where); // build 3: Podcast Index where Apple is silent
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
  if (best && bestScore >= 40) return best.feedUrl;
  return idMatch ? indexFeedByItunesId_(idMatch[1]) : indexFeedByTerm_(where);
}

function resolveYouTube_(where) {
  var url = where;
  if (/^UC[\w-]{20,}$/.test(where)) return 'https://www.youtube.com/feeds/videos.xml?channel_id=' + where;
  if (/^@/.test(where)) url = 'https://www.youtube.com/' + where;
  if (!/^https?:\/\//i.test(url)) { // a bare name: the YouTube Data API finds the channel when its key is set; else the daily task finds the address
    var cid = youtubeChannelByName_(where);
    return cid ? 'https://www.youtube.com/feeds/videos.xml?channel_id=' + cid : '';
  }
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
    // build 3: the show's own transcript (<podcast:transcript>), the audio address (<enclosure>), the length
    var encl = b.match(/<enclosure\b[^>]*url=["']([^"']+)["']/i);
    var audio = encl ? unescapeXml_(encl[1]).trim() : '';
    var minutes = minutesFromDuration_(clean_(tag_(b, 'itunes:duration')));
    items.push({ title: title, link: unescapeXml_(link).trim(), publishedMs: isNaN(ms) ? 0 : ms, blurb: short_(clean_(blurb), 300),
      transcript: transcriptTags_(b), audio: audio, minutes: minutes });
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
        stamp_(m.getDate()), short_(m.getPlainBody().replace(/\s+/g, ' ').trim(), 300), 'new', '', '', '', '', '']);
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


/* ═════════════════════════ build 2.6 · the text's words, and no weekday in the record ═════════════════════════
 * Brings the Standard tab to Wisdom · Understanding · Knowledge and takes any weekday word out of the two entry
 * cells a page shows (the move and the place on the road), so no surface carries the room's day. Runs once behind a
 * flag (setup and the morning read call it); applyBuild26 runs it again by hand. Entries column G keeps its keys. */
function dayNames_() { var o = []; for (var i = 0; i < 7; i++) o.push(fmtDay_(addDays_('2026-01-04', i), 'EEEE')); return o; }
function scrubDay_(s) {
  var names = dayNames_().join('|');
  return String(s)
    .replace(new RegExp('^(?:' + names + '),\\s+(\\S)'), function (m, c) { return c.toUpperCase(); })
    .replace(new RegExp('\\b(any|every|each|this|next) (?:' + names + ')s?\\b', 'g'), function (m, w) { return w + ' week'; });
}
/** The prep window line. The Config cell is typed by hand, so a weekday word in it never reaches the page: a leading "Wednesday morning" reads "the morning of the room", any other weekday reads "your room's day". */
function prepLine_(v) {
  var t = String(v || '').trim(); if (!t) return '';
  var names = dayNames_().join('|');
  t = t.replace(new RegExp('^(?:' + names + ')s?\\s+(\\w+)', 'i'), function (m, p) { return 'the ' + p.toLowerCase() + ' of the room'; })
       .replace(new RegExp('\\b(?:' + names + ')s?\\b', 'gi'), 'your room\u2019s day');
  return 'Your prep window: ' + t;
}
var STANDARD_26 = {
  'question served': ['Question served', 'Wisdom, Understanding or Knowledge: the text’s own words (Exodus 31:3; the guide: Filled for the Work). The cell keeps its key: Show up creatively = Wisdom, Read = Understanding, Know = Knowledge; the page shows the word.'],
  'the move': ['The move', 'ONE move for the room only, as something the facilitator can do in the room: the question card in quotation marks, or one action; one or two sentences, 200 characters or fewer. Never two moves in the cell. A line a course should carry, or a piece worth writing, goes in Audience and form, never here. Never blank. Never a weekday: the room’s day lives on the Rooms tab of the Front Desk sheet. (build 2.6)'],
  'the three lines': ['The three lines, what they mean (build 2.6)', '“with wisdom and understanding and knowledge” (Exodus 31:3). Wisdom · chokmah: skill in the work, how you show up in the room (Exodus 31:3; 35:31; 1 Kings 7:14).  ·  Understanding · tevunah: telling things apart, reading a man and the moment (1 Kings 3:9; 1 Chronicles 12:32).  ·  Knowledge · da’at: the trade, the men, and the God who gives it (Proverbs 1:7).  ·  God does the filling; this page serves it. and with all craftsmanship: the room is melakhah, the work, where the three are proved. The three are one filling, not stages. The same words reach men later with the questions turned toward his own road.'],
  'the desk': ['The desk’s weekly question', 'How should I show up in the work, how do I read this man and this moment, and what do I know of the trade, the men and the God who gives it. At least one item a week serves Wisdom, which usually means a poem before the room.']
};
function applyBuild26() { PropertiesService.getScriptProperties().deleteProperty('b26'); ensureBuild26_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild26_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b26') === '1') return;
  var did = [];
  var st = ss.getSheetByName('Standard');
  if (st && st.getLastRow() > 0) {
    var a = st.getRange(1, 1, st.getLastRow(), 1).getValues();
    for (var i = 0; i < a.length; i++) {
      var k = String(a[i][0] || '').toLowerCase();
      Object.keys(STANDARD_26).forEach(function (key) { if (k.indexOf(key) === 0) { st.getRange(i + 1, 1, 1, 2).setValues([STANDARD_26[key]]); did.push(STANDARD_26[key][0]); } });
    }
  }
  var en = ss.getSheetByName('Entries'), fixed = 0;
  if (en && en.getLastRow() > 1) {
    [EC.move, EC.place].forEach(function (col) {
      var rng = en.getRange(2, col, en.getLastRow() - 1, 1), v = rng.getValues(), changed = false;
      v.forEach(function (r) { var t = scrubDay_(r[0]); if (t !== String(r[0])) { r[0] = t; changed = true; fixed++; } });
      if (changed) rng.setValues(v);
    });
  }
  props.setProperty('b26', '1');
  log_(ss, 'build 26', 'Standard tab rows brought to the new words: ' + did.length + '; entry cells with a weekday word fixed: ' + fixed);
}

/* ═════════════════════════════════ build 3 · transcripts ═════════════════════════════════
 * Three routes, in order, the first that answers wins: the show's own transcript named in its feed (free); YouTube
 * captions read from the video page (free, no key); Deepgram on the audio address (paid; survivors only; capped by
 * Config "deepgram max per day"; key DEEPGRAM_KEY). The words land as a Google Doc in the Transcripts folder, one row
 * on the Transcripts tab, and Entries column V. Transcripts are working files for our team (RE13): never published,
 * never shown on a page. Timing: the 6:40 task sets Config "transcribe asked" when its entries are written; the
 * ten-minute tick sees it and runs the day's transcription once; the 7:45 task reads the docs and writes the quotes. */

var CONFIG_3 = [
  ['transcripts from feeds', 'on', 'build 3: a transcript the show publishes in its own feed (<podcast:transcript>) is read first; free'],
  ['youtube captions', 'on', 'build 3: captions read from the video page for a YouTube item; free, no key'],
  ['deepgram', 'on', 'build 3: speech to text on the audio address when neither of the free routes answers; needs DEEPGRAM_KEY in Script Properties; survivors only; set off to stop spending'],
  ['deepgram max per day', '3', 'build 3: the most episodes Deepgram transcribes in one day'],
  ['deepgram model', 'nova-3', 'build 3: the Deepgram model'],
  ['transcribe asked', '', 'the 6:40 task writes now (YYYY-MM-DD HH:MM) when its entries are written; the ten-minute tick then transcribes the day'],
  ['transcribe done', '', 'the script writes this when the day\'s transcription has run'],
  ['transcribe window', '6-9', 'build 3: the hours (Central, 24-hour) the ten-minute tick may transcribe'],
  ['transcripts folder id', '', 'build 3: the Transcripts folder inside the Research Engine folder; the script makes it'],
  ['deepen task', '7:45 AM Central', 'build 3: the Claude task that reads the transcripts and writes In their words, the minute and the cut'],
  ['last deepen run', '', 'the 7:45 task writes this']
];
var RULES_3 = {
  'RE1': ['Link and distill. Never host anyone\'s content as ours. A claim, a cut and a move are written in our words. Since build 3 a piece may carry In their words: up to two verbatim lines of twenty-five words or fewer, each in quotation marks with its minute and a link that opens the thing there, and only with What it means for our work (the construct, read against the text, where our shelf already carries it) and What to do with it (the move) attached. A quote without meaning and application attached is not written.', 'every entry, every surface'],
  'RE13': ['Transcripts are working files for our team: Google Docs in the Transcripts folder, pointed at by the Transcripts tab and Entries column V. They are never published, never quoted beyond RE1, never shown on a page a facilitator or a man reads, and never kept past their use; a transcript of a paid thing is never fetched.', 'the Transcripts tab and folder']
};
var STANDARD_3 = {
  'the thing': ['The thing', 'The direct link: the episode, the talk, the book and chapter. Once the transcript is in, the link opens at the minute that matters (YouTube: &t=; audio: #t=). (build 3)', 'E'],
  'in their words': ['In their words', 'Up to two verbatim lines of twenty-five words or fewer, one per line, each as [mm:ss] “the words” — <link that opens the thing there>. Written by the 7:45 pass from the transcript only, never from show notes; checked against the transcript before it is written; never written without K, L and O filled (RE1).', 'U'],
  'transcript': ['Transcript', 'The route the words came by (feed transcript, youtube captions, deepgram, none), the word count and the Google Doc in the Transcripts folder; the script writes it; a team working file, never a surface (RE13).', 'V'],
  'deepened': ['Deepened', 'When the 7:45 pass finished the entry and which build; blank until then. The cut (N) then carries real minutes.', 'W']
};

/** Makes the build 3 tabs, columns, rows, folder and rules once, behind a flag; applyBuild3 runs it again by hand. */
function applyBuild3() { PropertiesService.getScriptProperties().deleteProperty('b3'); ensureBuild3_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild3_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b3') === '1') return;
  var did = [];
  // Inbox: three more columns
  var inbox = ss.getSheetByName('Inbox');
  if (inbox) { widen_(inbox, IC.minutes); var ih = inbox.getRange(1, IC.transcript, 1, 3).getValues()[0]; if (!ih[0]) { inbox.getRange(1, IC.transcript, 1, 3).setValues([['transcript (the show\'s own)', 'audio address', 'minutes']]); did.push('Inbox M–O'); } }
  // Entries: U in their words, V transcript, W deepened
  var en = ss.getSheetByName('Entries');
  if (en) { widen_(en, EC.deepened); var eh = en.getRange(1, EC.quotes, 1, 3).getValues()[0]; if (!eh[0]) { en.getRange(1, EC.quotes, 1, 3).setValues([['in their words', 'transcript', 'deepened']]); did.push('Entries U–W'); } }
  // Transcripts tab
  if (!ss.getSheetByName('Transcripts')) { var tr = ss.insertSheet('Transcripts'); tr.getRange(1, 1, 1, TC_HEAD.length).setValues([TC_HEAD]); tr.setFrozenRows(1); did.push('Transcripts tab'); }
  // Config rows (only the ones missing)
  var cfg = readConfig_(ss);
  CONFIG_3.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  // the Transcripts folder
  try {
    cfg = readConfig_(ss);
    if (!cfg['transcripts folder id']) { var f = transcriptsFolder_(ss); if (f) did.push('folder ' + f.getName()); }
  } catch (fx) { did.push('folder not made: ' + String(fx).slice(0, 80)); }
  // Rules RE1 amended, RE13 added
  var ru = ss.getSheetByName('Rules');
  if (ru) {
    var rv = ru.getRange(1, 1, Math.max(1, ru.getLastRow()), 1).getValues(), seen = {};
    for (var i = 0; i < rv.length; i++) { var k = String(rv[i][0] || '').trim(); if (RULES_3[k]) { ru.getRange(i + 1, 2, 1, 2).setValues([RULES_3[k]]); seen[k] = 1; did.push(k); } }
    Object.keys(RULES_3).forEach(function (k) { if (!seen[k]) { ru.appendRow([k, RULES_3[k][0], RULES_3[k][1]]); did.push(k + ' added'); } });
  }
  // Standard rows
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), have = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); Object.keys(STANDARD_3).forEach(function (key) { if (kk === key) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_3[key]]); have[key] = 1; } }); }
    // the new rows go under "The move" so the field list reads in column order
    var at = -1; for (var m = 0; m < sv.length; m++) if (String(sv[m][0] || '').toLowerCase().indexOf('status') === 0) at = m + 1;
    ['in their words', 'transcript', 'deepened'].forEach(function (key) { if (!have[key]) { if (at > 0) { st.insertRowAfter(at); st.getRange(at + 1, 1, 1, 3).setValues([STANDARD_3[key]]); at++; } else st.appendRow(STANDARD_3[key]); did.push('Standard ' + key); } });
  }
  props.setProperty('b3', '1');
  log_(ss, 'build 3', 'made: ' + (did.join(', ') || 'nothing new'));
}
function widen_(sh, cols) { if (sh.getMaxColumns() < cols) sh.insertColumnsAfter(sh.getMaxColumns(), cols - sh.getMaxColumns()); }
function transcriptsFolder_(ss) {
  var cfg = readConfig_(ss);
  if (cfg['transcripts folder id']) { try { return DriveApp.getFolderById(cfg['transcripts folder id']); } catch (e) {} }
  var parent = DriveApp.getFolderById(RE_FOLDER_ID);
  var it = parent.getFoldersByName('Transcripts');
  var f = it.hasNext() ? it.next() : parent.createFolder('Transcripts');
  setConfig_(ss, 'transcripts folder id', f.getId());
  return f;
}

/* ---- what a feed item carries ---- */
function transcriptTags_(block) {
  var out = [];
  var tags = block.match(/<podcast:transcript\b[^>]*\/?>/gi) || [];
  tags.forEach(function (t) {
    var u = t.match(/\burl=["']([^"']+)["']/i), ty = t.match(/\btype=["']([^"']+)["']/i), lang = t.match(/\blanguage=["']([^"']+)["']/i);
    if (!u) return;
    if (lang && !/^en/i.test(lang[1])) return;
    out.push(unescapeXml_(u[1]).trim() + (ty ? ' ' + ty[1].trim() : ''));
  });
  return out.join('\n');
}
function minutesFromDuration_(d) {
  d = String(d || '').trim(); if (!d) return '';
  if (/^\d+$/.test(d)) return Math.round(Number(d) / 60) || '';
  var p = d.split(':').map(Number); if (p.some(isNaN)) return '';
  var s = p.length === 3 ? p[0] * 3600 + p[1] * 60 + p[2] : p.length === 2 ? p[0] * 60 + p[1] : p[0];
  return Math.round(s / 60) || '';
}
function on_(cfg, key) { return /^(on|yes|true|1)$/i.test(String(cfg[key] || '').trim()); }
function prop_(name) { try { return String(PropertiesService.getScriptProperties().getProperty(name) || '').replace(/[\s"']/g, ''); } catch (e) { return ''; } }

/* ---- Podcast Index (keys PODCASTINDEX_KEY, PODCASTINDEX_SECRET; switch Config "podcast index api") ---- */
function piOn_() { var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID)); return on_(cfg, 'podcast index api') && prop_('PODCASTINDEX_KEY') && prop_('PODCASTINDEX_SECRET'); }
function piGet_(path) {
  if (!piOn_()) return null;
  var key = prop_('PODCASTINDEX_KEY'), secret = prop_('PODCASTINDEX_SECRET'), when = String(Math.floor(Date.now() / 1000));
  var auth = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_1, key + secret + when, Utilities.Charset.UTF_8).map(function (b) { return ('0' + ((b + 256) % 256).toString(16)).slice(-2); }).join('');
  try {
    var res = UrlFetchApp.fetch('https://api.podcastindex.org/api/1.0' + path, { muteHttpExceptions: true, headers: { 'User-Agent': RE_UA, 'X-Auth-Key': key, 'X-Auth-Date': when, 'Authorization': auth } });
    if (res.getResponseCode() !== 200) return null;
    return JSON.parse(res.getContentText());
  } catch (e) { return null; }
}
function indexFeedByTerm_(term) {
  var j = piGet_('/search/byterm?q=' + encodeURIComponent(term) + '&max=8'); var feeds = (j && j.feeds) || [];
  var want = norm_(term), best = '', bestScore = -1;
  feeds.forEach(function (f) { var n = norm_(f.title || ''); var s = n === want ? 100 : n.indexOf(want) === 0 ? 80 : (n.indexOf(want) >= 0 || want.indexOf(n) >= 0) ? 60 : overlap_(n, want); if (s > bestScore) { bestScore = s; best = f.url || ''; } });
  return bestScore >= 40 ? best : '';
}
function indexFeedByItunesId_(id) { var j = piGet_('/podcasts/byitunesid?id=' + encodeURIComponent(id)); return j && j.feed && j.feed.url ? j.feed.url : ''; }
/** An episode's audio and transcript by feed, matched on link or title. Null without the keys. */
function indexEpisode_(feedUrl, link, title) {
  if (!feedUrl) return null;
  var j = piGet_('/episodes/byfeedurl?url=' + encodeURIComponent(feedUrl) + '&max=40'); var items = (j && j.items) || [];
  var want = norm_(title), hit = null;
  items.forEach(function (it) { if (hit) return; if ((it.link && link && String(it.link).replace(/\/$/, '') === String(link).replace(/\/$/, '')) || (want && norm_(it.title || '') === want)) hit = it; });
  if (!hit) return null;
  var tr = [];
  if (hit.transcriptUrl) tr.push(hit.transcriptUrl);
  (hit.transcripts || []).forEach(function (t) { if (t && t.url) tr.push(t.url + (t.type ? ' ' + t.type : '')); });
  return { audio: hit.enclosureUrl || '', transcript: tr.join('\n'), minutes: hit.duration ? Math.round(hit.duration / 60) : '' };
}

/* ---- the YouTube Data API (key YOUTUBE_KEY; switch Config "youtube data api") ---- */
function ytKey_() { var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID)); return on_(cfg, 'youtube data api') ? prop_('YOUTUBE_KEY') : ''; }
function youtubeChannelByName_(name) {
  var key = ytKey_(); if (!key) return '';
  var res = fetch_('https://www.googleapis.com/youtube/v3/search?part=snippet&type=channel&maxResults=3&q=' + encodeURIComponent(name) + '&key=' + key);
  try { var j = JSON.parse(res); var it = (j.items || [])[0]; return it && it.id && it.id.channelId ? it.id.channelId : ''; } catch (e) { return ''; }
}
function youtubeMinutes_(videoId) {
  var key = ytKey_(); if (!key || !videoId) return '';
  var res = fetch_('https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=' + encodeURIComponent(videoId) + '&key=' + key);
  try { var j = JSON.parse(res); var d = j.items && j.items[0] && j.items[0].contentDetails && j.items[0].contentDetails.duration; var m = d && d.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/); return m ? Math.round(((Number(m[1]) || 0) * 3600 + (Number(m[2]) || 0) * 60 + (Number(m[3]) || 0)) / 60) : ''; } catch (e) { return ''; }
}
function videoId_(link) { var m = String(link || '').match(/[?&]v=([\w-]{11})/) || String(link || '').match(/youtu\.be\/([\w-]{11})/) || String(link || '').match(/\/shorts\/([\w-]{11})/); return m ? m[1] : ''; }

/* ---- the day's transcription ---- */
/** Every ten minutes: inside the window, once the 6:40 task has asked and the day is not yet done, transcribe. */
function transcribeTick() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var cfg = readConfig_(ss);
  var hour = Number(Utilities.formatDate(new Date(), RE_TZ, 'H'));
  var win = String(cfg['transcribe window'] || '6-9').split('-').map(Number);
  if (hour < (win[0] || 6) || hour >= (win[1] || 9)) return;
  var t = today_();
  if (String(cfg['transcribe asked'] || '').indexOf(t) !== 0) return;
  if (String(cfg['transcribe done'] || '').indexOf(t) === 0) return;
  var lock = LockService.getScriptLock(); if (!lock.tryLock(5000)) return;
  try { transcribeToday(); } finally { lock.releaseLock(); }
}
/** By hand: transcribe today's entries now, whatever the Config cells say. */
function transcribeNow() { transcribeToday(true); }
function transcribeToday(byHand) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  try { ensureBuild3_(ss); } catch (e0) {}
  var cfg = readConfig_(ss);
  var t = today_();
  var done = transcriptsDone_(ss);
  var todays = entries_(ss).filter(function (e) { return e.status !== 'retired' && (e.written === t || (daysAgo_(e.written) <= 2 && !done[e.id])) && !done[e.id]; });
  var notes = [], n = 0, paid = deepgramCountToday_(ss);
  var max = toInt_(cfg['deepgram max per day'], 3);
  for (var i = 0; i < todays.length; i++) {
    if (Date.now() - RE_START > 300000) { notes.push('time budget reached; ' + (todays.length - i) + ' wait for the next tick'); break; }
    var e = todays[i];
    try {
      var r = transcribeEntry_(ss, cfg, e, paid < max);
      if (r.route === 'deepgram' && r.state === 'done') paid++;
      n++;
      notes.push(e.id + ': ' + r.route + ' · ' + r.state + (r.note ? ' · ' + r.note : ''));
    } catch (ex) { notes.push(e.id + ': failed · ' + String(ex && ex.message || ex).slice(0, 160)); }
  }
  setConfig_(ss, 'transcribe done', Utilities.formatDate(new Date(), RE_TZ, 'yyyy-MM-dd HH:mm') + (byHand ? ' (by hand)' : ''));
  log_(ss, 'transcribe', n + ' entries looked at, ' + todays.length + ' waiting at start', notes.join(' | '));
}
var RE_START = Date.now();
function transcriptsDone_(ss) {
  var sh = ss.getSheetByName('Transcripts'); var out = {};
  if (!sh || sh.getLastRow() < 2) return out;
  sh.getRange(2, 1, sh.getLastRow() - 1, TC.build).getValues().forEach(function (r) { var st = String(r[TC.state - 1]); if (r[TC.entryId - 1] && (st === 'done' || st === 'none')) out[String(r[TC.entryId - 1])] = st; });
  return out;
}
function deepgramCountToday_(ss) {
  var sh = ss.getSheetByName('Transcripts'); if (!sh || sh.getLastRow() < 2) return 0;
  var t = today_(), n = 0;
  sh.getRange(2, 1, sh.getLastRow() - 1, TC.build).getValues().forEach(function (r) { if (String(r[TC.route - 1]) === 'deepgram' && dayOf_(r[TC.fetched - 1]) === t) n++; });
  return n;
}
/** The Inbox row behind an entry (by link), for the transcript and audio addresses the reader kept. */
function inboxRowFor_(ss, link) {
  var sh = ss.getSheetByName('Inbox'); if (!sh || sh.getLastRow() < 2) return null;
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, IC.minutes).getValues();
  var want = String(link || '').trim().replace(/\/$/, '');
  for (var i = 0; i < data.length; i++) { if (String(data[i][IC.link - 1] || '').trim().replace(/\/$/, '') === want) return { sourceId: String(data[i][IC.sourceId - 1]), title: String(data[i][IC.title - 1]), transcript: String(data[i][IC.transcript - 1] || ''), audio: String(data[i][IC.audio - 1] || ''), minutes: data[i][IC.minutes - 1] }; }
  return null;
}
function feedOfSource_(ss, sourceId) {
  var sh = ss.getSheetByName('Sources'); if (!sh || sh.getLastRow() < 2 || !sourceId) return '';
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, SC.feed).getValues();
  for (var i = 0; i < data.length; i++) if (String(data[i][SC.id - 1]) === sourceId) return String(data[i][SC.feed - 1] || '').trim();
  return '';
}
/** The feed item behind a link, read again from the feed itself (for entries older than build 3's Inbox columns). */
function itemFromFeed_(feedUrl, link, title) {
  if (!feedUrl) return null;
  try {
    var items = fetchFeed_(feedUrl), want = String(link || '').replace(/\/$/, ''), wt = norm_(title);
    for (var i = 0; i < items.length; i++) { var it = items[i]; if ((it.link && it.link.replace(/\/$/, '') === want) || (wt && norm_(it.title) === wt)) return it; }
  } catch (e) {}
  return null;
}
function transcribeEntry_(ss, cfg, e, mayPay) {
  var tr = ss.getSheetByName('Transcripts');
  var ib = inboxRowFor_(ss, e.link) || {};
  var feedUrl = feedOfSource_(ss, ib.sourceId || '');
  var transcript = ib.transcript || '', audio = ib.audio || '', minutes = ib.minutes || '';
  if (!transcript && !audio && !videoId_(e.link)) {
    var it = itemFromFeed_(feedUrl, e.link, ib.title || e.claim);
    if (it) { transcript = it.transcript || ''; audio = it.audio || ''; minutes = it.minutes || minutes; }
    if (!transcript && !audio) { var pi = indexEpisode_(feedUrl, e.link, ib.title || ''); if (pi) { transcript = pi.transcript || ''; audio = pi.audio || ''; minutes = pi.minutes || minutes; } }
  }
  var out = { route: 'none', state: 'none', note: '', words: 0, minutes: minutes, audio: audio };
  var text = '';
  if (!text && transcript && on_(cfg, 'transcripts from feeds')) {
    var ft = fromFeedTranscript_(transcript); if (ft) { text = ft; out.route = 'feed transcript'; } else out.note += 'the show\'s transcript could not be read; ';
  }
  if (!text && videoId_(e.link) && on_(cfg, 'youtube captions')) {
    var yt = fromYouTube_(videoId_(e.link)); if (yt) { text = yt; out.route = 'youtube captions'; if (!out.minutes) out.minutes = youtubeMinutes_(videoId_(e.link)); } else out.note += 'no captions on the video page; ';
  }
  if (!text && audio && on_(cfg, 'deepgram')) {
    if (!prop_('DEEPGRAM_KEY')) out.note += 'deepgram: no DEEPGRAM_KEY; ';
    else if (!mayPay) out.note += 'deepgram: the day\'s cap is spent; ';
    else if (/\$|paid|member/i.test(String(e.cost))) out.note += 'deepgram: a paid thing is never fetched (RE13); ';
    else { var dg = fromDeepgram_(audio, cfg); if (dg) { text = dg; out.route = 'deepgram'; } else out.note += 'deepgram did not answer; '; }
  }
  if (!text && !transcript && !audio && !videoId_(e.link)) out.note += 'no transcript, audio or video address for this thing; ';
  if (text) {
    out.words = text.split(/\s+/).filter(function (w) { return /\w/.test(w); }).length;
    if (!out.minutes) { var last = text.match(/\[(\d+):(\d\d)(?::(\d\d))?\][^\[]*$/); if (last) out.minutes = last[3] !== undefined ? Number(last[1]) * 60 + Number(last[2]) : Number(last[1]); }
    var doc = writeTranscriptDoc_(ss, e, out, text);
    out.doc = doc.getUrl(); out.docId = doc.getId(); out.state = 'done';
  }
  var row = [e.id, e.source, e.link, out.route, out.state, out.minutes || '', out.words || '', out.doc || '', out.docId || '', audio || '', stamp_(new Date()), out.note.replace(/;\s*$/, ''), RE_BUILD];
  tr.appendRow(row);
  ss.getSheetByName('Entries').getRange(e.row, EC.transcript).setValue(out.state === 'done' ? out.route + ' · ' + out.words + ' words · ' + out.doc : 'none · ' + out.note.replace(/;\s*$/, ''));
  return out;
}
/** The Google Doc: a header, then one paragraph per stretch of about forty seconds, each opening with its minute. */
function writeTranscriptDoc_(ss, e, out, text) {
  var folder = transcriptsFolder_(ss);
  var title = 'Transcript · ' + e.id + ' · ' + short_(voiceOf_(e.source), 40) + ' · ' + short_(String(e.claim), 60);
  var doc = DocumentApp.create(title);
  var body = doc.getBody();
  body.appendParagraph(title).setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph('Entry ' + e.id + ' · ' + e.source);
  body.appendParagraph('The thing: ' + e.link);
  body.appendParagraph('Route: ' + out.route + ' · fetched ' + stamp_(new Date()) + (out.minutes ? ' · about ' + out.minutes + ' minutes' : '') + ' · ' + out.words + ' words');
  body.appendParagraph('A working file for our team (rule RE13): never published, never shown on a page. Each paragraph opens with its minute.');
  var parts = text.split(/\n(?=\[)/);
  for (var i = 0; i < parts.length; i++) { var p = parts[i].trim(); if (p) body.appendParagraph(p); }
  doc.saveAndClose();
  try { DriveApp.getFileById(doc.getId()).moveTo(folder); } catch (mv) { try { folder.addFile(DriveApp.getFileById(doc.getId())); } catch (mv2) {} }
  return doc;
}

/* ---- route 1: the show's own transcript ---- */
function fromFeedTranscript_(list) {
  var lines = String(list || '').split('\n').map(function (l) { return l.trim(); }).filter(Boolean);
  // prefer the kinds that carry minutes
  lines.sort(function (a, b) { return rankT_(a) - rankT_(b); });
  for (var i = 0; i < lines.length; i++) {
    var parts = lines[i].split(/\s+/), url = parts[0], type = (parts[1] || '').toLowerCase();
    var body = fetch_(url); if (!body) continue;
    var text = parseTranscript_(body, type, url);
    if (text && text.split(/\s+/).length > 80) return text;
  }
  return '';
}
function rankT_(line) { var t = line.toLowerCase(); return /vtt/.test(t) ? 0 : /srt/.test(t) ? 1 : /json/.test(t) ? 2 : /html/.test(t) ? 4 : 3; }
function parseTranscript_(body, type, url) {
  var low = (type || '') + ' ' + String(url || '').toLowerCase();
  if (/vtt|srt/.test(low) || /-->\s*\d/.test(body.slice(0, 2000))) return chunkSegs_(parseCues_(body));
  if (/json/.test(low) || /^\s*[\[{]/.test(body)) { try { return chunkSegs_(parseJsonTranscript_(JSON.parse(body))); } catch (e) {} }
  if (/html/.test(low) || /<\/?(p|div|span|body)\b/i.test(body.slice(0, 2000))) return plainBlocks_(clean_(body));
  return plainBlocks_(body);
}
function parseCues_(s) {
  var segs = [], lines = String(s).replace(/\r/g, '').split('\n');
  for (var i = 0; i < lines.length; i++) {
    var m = lines[i].match(/(\d{1,2}:)?(\d{1,2}):(\d{2})[.,](\d{1,3})\s*-->/);
    if (!m) continue;
    var start = (m[1] ? Number(m[1].replace(':', '')) * 3600 : 0) + Number(m[2]) * 60 + Number(m[3]);
    var text = [];
    for (var j = i + 1; j < lines.length && lines[j].trim() !== ''; j++) text.push(lines[j].replace(/<[^>]+>/g, '').replace(/^[^:]{1,30}:\s(?=\S)/, '').trim());
    i = j;
    var tx = text.join(' ').replace(/\s+/g, ' ').trim();
    if (tx) segs.push({ start: start, text: tx });
  }
  return segs;
}
function parseJsonTranscript_(j) {
  var list = Array.isArray(j) ? j : (j.segments || j.results || j.items || []);
  var segs = [];
  list.forEach(function (x) { if (!x) return; var st = x.startTime !== undefined ? x.startTime : x.start !== undefined ? x.start : x.offset; var tx = x.body || x.text || x.content || ''; if (tx) segs.push({ start: Number(st) || 0, text: String(tx).replace(/\s+/g, ' ').trim() }); });
  return segs;
}
/** Groups segments into stretches of about forty seconds; each opens with [mm:ss]. Repeated rolling-caption lines are dropped. */
function chunkSegs_(segs) {
  if (!segs || !segs.length) return '';
  var out = [], cur = null, lastText = '';
  segs.forEach(function (s) {
    if (!s.text || s.text === lastText) return;
    if (lastText && s.text.indexOf(lastText) === 0) { if (cur) cur.text = cur.text.slice(0, cur.text.length - lastText.length).trim(); }
    lastText = s.text;
    if (!cur || s.start - cur.start >= 40 || cur.text.length > 700) { if (cur) out.push(cur); cur = { start: s.start, text: '' }; }
    cur.text = (cur.text + ' ' + s.text).trim();
  });
  if (cur) out.push(cur);
  return out.map(function (c) { return '[' + mmss_(c.start) + '] ' + c.text; }).join('\n');
}
function mmss_(sec) { sec = Math.max(0, Math.round(Number(sec) || 0)); var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60; return (h ? h + ':' + ('0' + m).slice(-2) : String(m)) + ':' + ('0' + s).slice(-2); }
function plainBlocks_(text) {
  var t = String(text || '').replace(/\r/g, '').replace(/[ \t]+/g, ' ').trim(); if (!t) return '';
  // a plain transcript with [mm:ss] or (mm:ss) stamps keeps them; without stamps the minute is unknown and every block says so
  if (/[\[(]\d{1,2}:\d{2}(?::\d{2})?[\])]/.test(t)) return t.replace(/\s*[\[(](\d{1,2}:\d{2}(?::\d{2})?)[\])]\s*/g, '\n[$1] ').replace(/^\n/, '');
  var paras = t.split(/\n\s*\n|\n/).map(function (p) { return p.trim(); }).filter(Boolean);
  return paras.map(function (p) { return '[no minute] ' + p; }).join('\n');
}

/* ---- route 2: YouTube captions, from the video page ---- */
function fromYouTube_(id) {
  var html = fetch_('https://www.youtube.com/watch?v=' + id + '&hl=en&bpctr=9999999999&has_verified=1');
  if (!html) return '';
  var m = html.match(/"captionTracks":(\[[^\]]*\])/);
  if (!m) return '';
  var tracks; try { tracks = JSON.parse(m[1]); } catch (e) { return ''; }
  var pick = null;
  tracks.forEach(function (t) { var en = /^en/i.test(t.languageCode || ''); if (!en) return; if (!pick || (pick.kind === 'asr' && t.kind !== 'asr')) pick = t; });
  if (!pick) pick = tracks[0];
  if (!pick || !pick.baseUrl) return '';
  var base = String(pick.baseUrl).replace(/\\u0026/g, '&');
  var j3 = fetch_(base + (base.indexOf('fmt=') >= 0 ? '' : '&fmt=json3'));
  var segs = [];
  try {
    var j = JSON.parse(j3);
    (j.events || []).forEach(function (ev) { if (!ev.segs) return; var tx = ev.segs.map(function (s) { return s.utf8 || ''; }).join('').replace(/\s+/g, ' ').trim(); if (tx && tx !== '\n') segs.push({ start: (ev.tStartMs || 0) / 1000, text: tx }); });
  } catch (e) {
    var xml = /fmt=json3/.test(base) ? '' : j3; // the older xml shape
    var re = /<text start="([\d.]+)"[^>]*>([\s\S]*?)<\/text>/g, mm;
    while ((mm = re.exec(xml))) segs.push({ start: Number(mm[1]), text: clean_(mm[2]) });
  }
  return chunkSegs_(segs);
}

/* ---- route 3: Deepgram on the audio address (survivors only) ---- */
function fromDeepgram_(audio, cfg) {
  var key = prop_('DEEPGRAM_KEY'); if (!key) return '';
  var model = String(cfg['deepgram model'] || 'nova-3');
  try {
    var res = UrlFetchApp.fetch('https://api.deepgram.com/v1/listen?model=' + encodeURIComponent(model) + '&smart_format=true&paragraphs=true&punctuate=true', {
      method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'Authorization': 'Token ' + key }, payload: JSON.stringify({ url: audio }) });
    if (res.getResponseCode() !== 200) { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'deepgram', 'answered ' + res.getResponseCode(), String(res.getContentText() || '').slice(0, 200)); return ''; }
    var j = JSON.parse(res.getContentText());
    var alt = j.results && j.results.channels && j.results.channels[0] && j.results.channels[0].alternatives && j.results.channels[0].alternatives[0];
    if (!alt) return '';
    var segs = [];
    if (alt.paragraphs && alt.paragraphs.paragraphs) alt.paragraphs.paragraphs.forEach(function (p) { (p.sentences || []).forEach(function (s) { segs.push({ start: s.start, text: s.text }); }); });
    else if (alt.words) { var cur = null; alt.words.forEach(function (w) { if (!cur || w.start - cur.start > 12) { if (cur) segs.push(cur); cur = { start: w.start, text: '' }; } cur.text = (cur.text + ' ' + (w.punctuated_word || w.word)).trim(); }); if (cur) segs.push(cur); }
    return chunkSegs_(segs);
  } catch (e) { log_(SpreadsheetApp.openById(RE_SHEET_ID), 'deepgram', 'fetch failed', String(e && e.message || e).slice(0, 200)); return ''; }
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
var EC = { id: 1, written: 2, source: 3, kind: 4, link: 5, claim: 6, question: 7, construct: 8, place: 9, audience: 10, text: 11, ours: 12, cost: 13, cut: 14, move: 15, status: 16, relBy: 17, relOn: 18, desk: 19, build: 20, quotes: 21, transcript: 22, deepened: 23, keywords: 24, road: 25, todo: 26, question2: 27, week: 28 };

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.file === 'growth.js') return ContentService.createTextOutput(GROWTH_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'row.js') return ContentService.createTextOutput(rowJs_()).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.file === 'road.js') return ContentService.createTextOutput(ROAD_JS).setMimeType(ContentService.MimeType.JAVASCRIPT);
  return jsonOut_({ ok: true, service: 'Ancient Path — Research reader', build: RE_BUILD, growth: GROWTH_BUILD, road: ROAD_BUILD });
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
    if (action === 'ping') { var pk = claudeKey_(); return { ok: true, build: RE_BUILD, growth: GROWTH_BUILD, road: ROAD_BUILD, keySet: !!pk, keyKind: pk ? pk.split('-').slice(0, 3).join('-') : '' }; }
    if (action.indexOf('road') === 0) return roadCall_(b);
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
  var width = Math.min(EC.week, sh.getMaxColumns());
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, width).getValues();
  var out = [];
  data.forEach(function (r, i) {
    if (!r[EC.id - 1]) return;
    out.push({ row: i + 2, id: String(r[EC.id - 1]), written: dayOf_(r[EC.written - 1]), source: String(r[EC.source - 1]), kind: String(r[EC.kind - 1]), link: String(r[EC.link - 1]), claim: String(r[EC.claim - 1]),
      question: String(r[EC.question - 1]), construct: String(r[EC.construct - 1]), place: String(r[EC.place - 1]), audience: String(r[EC.audience - 1]), beside: String(r[EC.text - 1]), ours: String(r[EC.ours - 1]),
      cost: String(r[EC.cost - 1]), cut: String(r[EC.cut - 1]), move: String(r[EC.move - 1]), status: String(r[EC.status - 1]).toLowerCase(), desk: String(r[EC.desk - 1]),
      quotes: String(r[EC.quotes - 1] || ''), transcript: String(r[EC.transcript - 1] || ''), deepened: String(r[EC.deepened - 1] || ''),
      keywords: String(r[EC.keywords - 1] || ''), road: String(r[EC.road - 1] || ''), todo: String(r[EC.todo - 1] || ''), question2: String(r[EC.question2 - 1] || ''), week: String(r[EC.week - 1] || '').trim() });
  });
  return out;
}
/** Column U, one quote per line: [mm:ss] “the words” — link. Only whole lines count; a line without words is dropped. */
function quotesOf_(cell) {
  var out = [];
  String(cell || '').split('\n').forEach(function (line) {
    var l = line.trim(); if (!l) return;
    var m = l.match(/^\[([^\]]+)\]\s*(.+?)\s*(?:[—–-]+\s*(https?:\/\/\S+))?$/);
    if (!m) return;
    var words = m[2].replace(/^[“"‘']+|[”"’']+$/g, '').trim();
    if (!words || words.split(/\s+/).length > 25) return;
    out.push({ minute: m[1].trim(), words: words, link: m[3] || '' });
  });
  return out.slice(0, 2);
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
/** The three lines by their key in Entries column G (the keys stay; a cell that already holds the text's word counts the same). */
function lineKey_(q) { var t = String(q || '').toLowerCase(); return /^know/.test(t) ? 'Know' : /^(read|understand)/.test(t) ? 'Read' : 'Show up creatively'; }
function pieceOut_(e, lanes) {
  var voice = voiceOf_(e.source);
  // the three-part block: quotes ride only when meaning (beside, ours) and application (move) are there (RE1)
  var whole = !!(e.beside && e.move);
  var construct = /none in the registry/i.test(e.construct) ? '' : e.construct;
  return { id: e.id, voice: voice, kind: e.kind, cost: e.cost, minutes: minutesOf_(e.cost), move: e.move, claim: e.claim, beside: e.beside, ours: e.ours, cut: e.cut, link: e.link, question: e.question, status: e.status,
    lane: laneOf_(voice.toLowerCase(), lanes), state: e.desk, isToday: e.desk.indexOf('yes · ' + today_()) === 0, openedDay: openedDay_(e.desk), written: e.written,
    construct: construct, quotes: whole ? quotesOf_(e.quotes) : [], wordsComing: !e.deepened && daysAgo_(e.written) <= 1 && !/^none/.test(e.transcript) };
}
function openedDay_(s) { var m = String(s || '').match(/opened (\d{4}-\d{2}-\d{2})/); if (!m) return ''; var d = new Date(m[1] + 'T12:00:00'); return Utilities.formatDate(d, RE_TZ, 'MMM d'); }

/* ---- the room's day lives on the Front Desk sheet's Rooms tab (meets, first night) and nowhere else ----
   The reader never writes a weekday as a word. A facilitator's room is the room named on his People row;
   its day is the weekday of its first night; its hour is read out of its "meets" cell; a cohort stops after its weeks. */
function roomWord_(s) { return String(s || '').toLowerCase().split(/\s+[—–-]\s+/)[0].replace(/\s+/g, ' ').trim(); }
function sameRoom_(a, b) {
  var la = String(a || '').toLowerCase().replace(/\s+/g, ' ').trim(), lb = String(b || '').toLowerCase().replace(/\s+/g, ' ').trim();
  if (!la || !lb) return false;
  return la === lb || la.indexOf(lb) >= 0 || lb.indexOf(la) >= 0 || roomWord_(la) === roomWord_(lb);
}
function isoDay_(v) {
  if (v instanceof Date) return isNaN(v) ? '' : Utilities.formatDate(v, RE_TZ, 'yyyy-MM-dd');
  var s = String(v || '').trim(); if (!s) return '';
  var m = s.match(/\d{4}-\d{2}-\d{2}/); if (m) return m[0];
  var ms = Date.parse(s.replace(/^[A-Za-z]+,?\s+(?=[A-Za-z]{3,}\s+\d)/, ''));
  return isNaN(ms) ? '' : Utilities.formatDate(new Date(ms), RE_TZ, 'yyyy-MM-dd');
}
function utcNoon_(iso) { return new Date(iso + 'T12:00:00Z'); }
function addDays_(iso, n) { var d = utcNoon_(iso); d.setUTCDate(d.getUTCDate() + n); return d.toISOString().slice(0, 10); }
function fmtDay_(iso, pattern) { return Utilities.formatDate(utcNoon_(iso), 'GMT', pattern); }
/** The hour of a room, as the Rooms tab words it: "7:00 PM Central". Empty when the cell names no hour. */
function hourOf_(meets) {
  var m = String(meets || '').match(/(\d{1,2})(?::(\d{2}))?\s*([ap])\.?\s*m\b/i);
  if (!m) return '';
  var z = String(meets || '').match(/\b(Central|Eastern|Mountain|Pacific)\b/i);
  return m[1] + ':' + (m[2] || '00') + ' ' + m[3].toUpperCase() + 'M' + (z ? ' ' + z[1].charAt(0).toUpperCase() + z[1].slice(1).toLowerCase() : '');
}
/** The weekday number (0-6) a room keeps: its first night's; or, with no first night, the day its "meets" cell names. */
function roomWeekday_(r) {
  if (r.first) return utcNoon_(r.first).getUTCDay();
  var low = String(r.meets || '').toLowerCase();
  for (var i = 0; i < 7; i++) { if (low.indexOf(Utilities.formatDate(new Date(Date.UTC(2026, 0, 4 + i, 12)), 'GMT', 'EEEE').toLowerCase()) >= 0) return i; }
  return -1;
}
/** The row of the Rooms tab for this facilitator's room, or null when he has none. */
function roomRow_(who) {
  if (!who || !who.room) return null;
  var sh = deskSheet_().getSheetByName('Rooms');
  if (!sh || sh.getLastRow() < 2) return null;
  var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
  for (var i = 0; i < data.length; i++) {
    var name = String(data[i][H['room']] || '').trim();
    if (name && sameRoom_(name, who.room)) {
      var r = { room: name, kind: String(data[i][H['kind']] || 'cohort').toLowerCase(), meets: String(data[i][H['meets']] || ''), first: isoDay_(data[i][H['first night']]), weeks: Number(data[i][H['weeks']] || 0) || 0 };
      return roomWeekday_(r) < 0 ? null : r;
    }
  }
  return null;
}
function lastNightOf_(r) { return r.first && r.kind === 'cohort' && r.weeks > 0 ? addDays_(r.first, 7 * (r.weeks - 1)) : ''; }
function weekOf_(r, iso) { return r.first && r.weeks > 0 ? String(Math.round((utcNoon_(iso) - utcNoon_(r.first)) / (7 * 864e5)) + 1) : ''; }
/** The first night of this room on or after a day (yyyy-MM-dd); null once a cohort has met its last night. */
function nightOnOrAfter_(r, day) {
  var d = r.first && day < r.first ? r.first : day;
  d = addDays_(d, (roomWeekday_(r) - utcNoon_(d).getUTCDay() + 7) % 7);
  var last = lastNightOf_(r); if (last && d > last) return null;
  return { date: d, week: weekOf_(r, d) };
}
/** The latest night of this room on or before a day; null before its first night. */
function nightOnOrBefore_(r, day) {
  var d = addDays_(day, -((utcNoon_(day).getUTCDay() - roomWeekday_(r) + 7) % 7));
  if (r.first && d < r.first) return null;
  var last = lastNightOf_(r); if (last && d > last) d = last;
  return { date: d, week: weekOf_(r, d) };
}
/** This facilitator's next room, from the Rooms tab: { room, date, week, day, label }. Null when he has no room. */
function nextRoom_(who) {
  try {
    var r = roomRow_(who); if (!r) return null;
    var n = nightOnOrAfter_(r, today_()); if (!n) return null;
    var hr = hourOf_(r.meets), day = fmtDay_(n.date, 'EEEE, MMM d');
    return { room: r.room, date: n.date, week: n.week, day: day, label: day + (hr ? ', ' + hr : '') };
  } catch (e) { return null; }
}
/** His most recent room night (today counts), for the signals row. */
function lastRoom_(who) {
  try {
    var r = roomRow_(who); if (!r) return null;
    var n = nightOnOrBefore_(r, today_()); if (!n) return null;
    return { date: n.date, week: n.week, day: fmtDay_(n.date, 'MMM d, yyyy') };
  } catch (e) { return null; }
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
  week.forEach(function (e) { var q = lineKey_(e.question); if (!seen[q]) { seen[q] = 1; weekOut.push(pieceOut_(e, lanes)); } });
  var nw = nextRoom_(who);
  var bringing = all.filter(function (e) { return /bring/.test(e.desk) && !/used|not used/.test(e.desk) && daysAgo_(e.written) <= 10; }).sort(function (a, b) { return b.written.localeCompare(a.written); })[0] || null;
  var thursday = null; // the morning-after questions (wire name kept); they need his room's night, so a facilitator with no room has none
  if (bringing) {
    var m = bringing.desk.match(/bring (\d{4}-\d{2}-\d{2})/); var bringDay = m ? m[1] : bringing.written;
    var rr = roomRow_(who), night = rr ? nightOnOrAfter_(rr, bringDay) : null;
    if (night && Date.parse(today_()) > Date.parse(night.date)) thursday = { id: bringing.id, move: bringing.move, when: fmtDay_(night.date, 'EEEE, MMM d') };
  }
  var shelf = all.filter(function (e) { return e.status === 'released' || (admin && e.status === 'candidate'); }).sort(function (a, b) { return b.written.localeCompare(a.written); }).map(function (e) { return pieceOut_(e, lanes); });
  var coming = all.filter(function (e) { return /event|training|conference|workshop/i.test(e.kind); }).map(function (e) { return pieceOut_(e, lanes); });
  var candidates = all.filter(function (e) { return e.status === 'candidate'; }).length;
  return {
    ok: true, build: RE_BUILD, growth: GROWTH_BUILD,
    who: { name: who.name, email: who.email, role: who.role, room: who.room },
    today: todayE ? pieceOut_(todayE, lanes) : null,
    week: weekOut,
    room: { next: nw ? nw.label : '', bringing: bringing ? pieceOut_(bringing, lanes) : null, prep: prepLine_(cfg['prep window']), carried: who.room ? carried_(who) : null },
    thursday: thursday,
    shelf: shelf,
    coming: coming,
    release: admin ? { count: candidates } : null
  };
}

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
  else if (what === 'bring') { setDesk_(ss, e, 'bring ' + today_()); var nr = nextRoom_(who); out.nextRoom = nr ? nr.label : ''; bringCard_(who, e, nr); }
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
/** Bring it to the room: one card on his lane for his next room, with the move on it; Done after the session. */
function bringCard_(who, e, nr) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'research:bring:' + (nr ? nr.date : today_()) + ':' + e.id;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = who.name || who.email; row[H['do this']] = 'Room: ' + e.move;
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
      var lr = lastRoom_(who) || { week: '', day: Utilities.formatDate(new Date(), RE_TZ, 'MMM d, yyyy') }; var row = [];
      row[H['cohort']] = who.room; row[H['week']] = lr.week; row[H['session']] = lr.day; row[H['section opened']] = '';
      row[H['signal (the room\'s words, no names)']] = carried; row[H['construct']] = e.construct && !/none in the registry/i.test(e.construct) ? e.construct : ''; row[H['kind']] = 'facilitator, Thursday answer';
      row[H['speaks to it (our shelf)']] = e.move; row[H['what the facilitator did with it']] = (used ? 'Brought it. ' : 'Did not use it. ') + changed; row[H['course move it suggests']] = ''; row[H['source page']] = 'Your Growth'; row[H['coded']] = '';
      for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
      sh.appendRow(row);
    }
  } catch (x) { log_(ss, 'web', 'thursday: signals row not written', String(x).slice(0, 200)); }
  return { ok: true };
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
    var system = 'You help a facilitator of a Christian men\'s group prepare for his next room. Answer from the shelf first: pick the ONE entry id that best fits what the room is stuck on. Then write ONE question the facilitator could ask the room, plain and clear, in American spelling, never the word "brother". If nothing on the shelf fits, say so and offer one idea from your own reading, labeled as not yet on our shelf, with the source named. Never a reading list. Never a man\'s name. Reply as JSON only: {"id": "<entry id or empty>", "question": "<one question>", "idea": "<one or two sentences, only when the shelf has nothing>", "source": "<who, when idea is given>"}.';
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
        else if (ans.idea) out.item = { id: '', voice: ans.source || 'Claude\'s reading', kind: 'not yet on our shelf', move: ans.idea, claim: '', beside: 'Not yet read against the text; our team reads it before it joins the shelf.', ours: '', cut: '', link: '', fromShelf: false, cost: '', construct: '', quotes: [], wordsComing: false };
        out.question = ans.question || '';
        if (!ans.id && !ans.question && !ans.idea) detail = 'Claude 200 but no id/question/idea in: ' + txt.slice(0, 300) + (j.stop_reason ? ' [stop: ' + j.stop_reason + ']' : '');
      } else { out.note = 'Claude did not answer; this is the shelf alone.'; detail = 'Claude ' + res.getResponseCode() + ': ' + String(res.getContentText() || '').slice(0, 200); }
    } catch (x) { out.note = 'Claude could not be reached; this is the shelf alone.'; detail = 'fetch failed: ' + String(x && x.message || x).slice(0, 160); }
  } else detail = 'no CLAUDE_KEY script property';
  if (!out.item && shelf.length) {
    var words = text.toLowerCase().split(/\W+/).filter(function (w) { return w.length > 3; });
    var best = null, bestN = 0;
    shelf.forEach(function (e) { var hay = (e.claim + ' ' + e.move + ' ' + e.beside + ' ' + e.place).toLowerCase(); var n = 0; words.forEach(function (w) { if (hay.indexOf(w) >= 0) n++; }); if (n > bestN) { bestN = n; best = e; } });
    if (best) { out.item = pieceOut_(best, lanes); out.item.fromShelf = true; out.question = out.question || 'What would it take for one man to say the thing out loud in the room?'; }
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
  // 4.0.2: every released entry still without the man's lines gets them now (no cap; the four-minute budget guards); the Log names any left
  try {
    roadWriteLines_(ss, readConfig_(ss), 50);
    var left = entries_(ss).filter(function (e) { return e.status === 'released' && !(e.road && e.todo && e.question2); }).map(function (e) { return e.id; });
    if (left.length) log_(ss, 'road', 'released without the man\'s lines (the morning run retries)', left.join(', '));
  } catch (x) { log_(ss, 'road', 'lines at release failed', String(x).slice(0, 160)); }
  return { ok: true, released: n };
}


/* ═══════════════════════════════ growth.js build 3.1 (served at ?file=growth.js) ═══════════════════════════════ */
var GROWTH_JS = "/* AP-GROWTH growth.js build 3.1 \\u2014 the Your Growth page, served by the Research reader script (ResearchReader.gs build 3.1, ?file=growth.js).\n   3.1: the craftsman's bench (Exodus 31:3), the first house-style picture, opens the page \\u2014 full width under the site's top bar, the band beneath it; one file served from the repo (pictures/craftsmans-bench.jpg), phone and desktop, no words in the image.\n   3: every piece carries the three-part block \\u2014 In their words (up to two verbatim lines of twenty-five words or fewer, each with its minute and a link that opens the thing there) \\u00b7 What it means for our work (the construct it touches, read against the text, already ours) \\u00b7 What to do with it (the move) \\u2014 then What to listen for (the cut, with real minutes once the transcript is in). A quote rides only with meaning and application attached (RE1). The cut is never named on the page: it reads What to listen for. The words line says when the minute is still coming.\n   2.6: the three lines are the text's own words, Wisdom \\u00b7 Understanding \\u00b7 Knowledge (Exodus 31:3), under the verse, one gloss each, with no order claimed; the sheet's keys in Entries column G stay and the page maps key to word. What these mean and every shelf line open and close in place (the panel is always in the page, shown by a class; no repaint, no scroll; an arrow after the words shows the state); every scroll lands below the site's top bar (measured on the page); anything typed survives any open or close; the room's day comes from the Rooms tab on the Front Desk sheet, never a weekday written into the page.\n   2.5: the week cards lead with the claim, carry the source, the cost, the Bring-it question and two links (Open it, See the piece); any card opens in the top panel; the three lines carry their meaning (glosses and the What these mean panel); states read as words.\n   The page block on /your-growth is only a loader: <div id=\"apGrowth\"></div> and this script's tag.\n   One home, three rooms: the band carries the row Your Desk \\u00b7 Your Growth \\u00b7 Your Page on every page the facilitator owns. */\n(function () {\nvar host = document.getElementById('apGrowth'); if (!host || host.getAttribute('data-growth')) return; host.setAttribute('data-growth', '2');\nvar BUILD = 3.1;\nvar GROWTH_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\nvar DESK_URL = 'https://script.google.com/macros/s/AKfycbytkn-t_6Adw4Mv3QbUdmG8KYsGUL2zvrgdwn-dciB4yYxN7D4AVlZtgqG5pLk_sHb4cw/exec';\nvar STORE = 'apDesk';\nvar PATHS = { desk: '/front-desk', growth: '/your-growth', page: '/start' };\n\nhost.innerHTML = '<style>' +\n\"@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap');\" +\n'.apg{--navy:#1F2A44;--band:#1B2A3A;--bronze:#B8945F;--bronze-ink:#8C6A3B;--paper:#FBF9F5;--card:#FFFDF9;--rule:#E2DCD1;--ink:#2B3040;--quiet:#5B5346;--band-ink:#F3EDE3;--band-quiet:#B7AFA4;--good:#3D7A52;--serif:\"Source Serif 4\",Georgia,serif;--sans:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif;color:var(--ink);font:400 17px/1.5 var(--sans);-webkit-font-smoothing:antialiased;text-align:left;background:var(--paper)}' +\n'.apg *,.apg *::before,.apg *::after{box-sizing:border-box}' +\n'#pageContainer #apGrowth a,#apGrowth a{color:var(--navy);text-decoration:none}#pageContainer #apGrowth a:hover,#apGrowth a:hover{color:var(--bronze-ink);text-decoration:none}' +\n'.apg .hero{display:block;width:100vw;margin-left:calc(50% - 50vw);height:clamp(180px,26vw,380px);object-fit:cover;object-position:50% 62%;background:var(--band)}' +\n'.apg .band{background:var(--band);color:var(--band-ink);padding:40px 24px 0;width:100vw;margin-left:calc(50% - 50vw)}' +\n'.apg .in{max-width:980px;margin:0 auto}' +\n'.apg .eyebrow{font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--bronze);font-weight:600}' +\n'.apg h1{font:600 44px/1.1 var(--serif);color:var(--band-ink);margin:12px 0 0}' +\n'.apg .lede{font-size:19px;line-height:1.5;color:var(--band-quiet);margin:12px 0 0;max-width:640px}' +\n'.apg .row{display:flex;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap}' +\n'#pageContainer #apGrowth .row a,.apg .row a{display:inline-block;padding:16px 0;font-size:17px;color:var(--band-quiet);border-bottom:3px solid transparent}' +\n'#pageContainer #apGrowth .row a.on,.apg .row a.on{color:var(--band-ink);font-weight:600;border-bottom-color:var(--bronze)}' +\n'.apg .row a .new{font-weight:400;color:var(--bronze)}' +\n'.apg .main{max-width:1028px;margin:0 auto;padding:48px 24px 80px;display:flex;flex-direction:column;gap:56px}' +\n'.apg .kicker{font-size:13px;letter-spacing:3px;text-transform:uppercase;color:var(--bronze-ink);font-weight:600;margin:0 0 14px}' +\n'.apg .who{font-size:17px;color:var(--quiet);margin:0 0 14px}' +\n'.apg h2{font:600 40px/1.15 var(--serif);color:var(--navy);margin:0 0 16px;max-width:820px}' +\n'.apg .claim{font-size:21px;line-height:1.5;max-width:760px;margin:0 0 14px}' +\n'.apg .fine{font-size:17px;line-height:1.5;color:var(--quiet);max-width:760px;margin:0 0 10px}.apg .fine b{color:var(--navy);font-weight:600}' +\n'.apg .btns{display:flex;flex-wrap:wrap;gap:14px;margin-top:16px}' +\n'#pageContainer #apGrowth .btn,.apg .btn{display:inline-flex;align-items:center;justify-content:center;min-height:48px;padding:0 22px;border-radius:6px;font:600 17px var(--sans);cursor:pointer;border:1.5px solid var(--navy);background:transparent;color:var(--navy);text-decoration:none}' +\n'#pageContainer #apGrowth .btn.p,.apg .btn.p{background:var(--bronze);border-color:var(--bronze);color:var(--band)}' +\n'#pageContainer #apGrowth .btn.q,.apg .btn.q{border-color:transparent;color:var(--quiet);font-weight:400}' +\n'.apg .btn[disabled]{opacity:.6;cursor:default}' +\n'.apg .card{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:22px}.apg .card.hi{border:1.5px solid var(--bronze)}' +\n'.apg .three{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}' +\n'.apg .three .card{display:flex;flex-direction:column;gap:10px;min-height:200px}.apg .three h3{font:600 24px/1.2 var(--serif);margin:0}.apg .three .v{font-size:15px;color:var(--quiet)}.apg .three .t{font-size:17px;line-height:1.45}.apg .three .st{margin-top:auto;font-size:15px;font-weight:600;color:var(--quiet)}.apg .three .st.good{color:var(--good)}.apg .three .st.new{color:var(--bronze-ink)}' +\n'.apg label{font-size:17px;font-weight:600;display:block;margin:0 0 8px}' +\n'.apg input[type=text],.apg input[type=search],.apg input[type=email],.apg input[type=tel],.apg textarea{width:100%;min-height:48px;padding:10px 16px;font:400 17px/1.45 var(--sans);border:1.5px solid #CBBFAE;border-radius:6px;background:#fff;color:var(--ink)}.apg textarea{resize:vertical}' +\n'.apg .askrow{display:flex;flex-wrap:wrap;gap:12px}.apg .askrow input{flex:1 1 320px;width:auto}' +\n'.apg .hr{border-top:1px solid var(--rule);padding-top:18px;margin-top:18px}' +\n'.apg .lanes{display:flex;flex-wrap:wrap;gap:10px;margin:14px 0}' +\n'#pageContainer #apGrowth .lane,.apg .lane{display:inline-flex;align-items:center;min-height:44px;padding:0 16px;border-radius:22px;border:1px solid #CBBFAE;background:var(--card);font:400 16px var(--sans);color:var(--navy);cursor:pointer}' +\n'#pageContainer #apGrowth .lane.on,.apg .lane.on{background:var(--band);border-color:var(--band);color:var(--band-ink)}' +\n'.apg .list{border-top:1px solid var(--rule)}.apg .item{border-bottom:1px solid var(--rule)}' +\n'.apg .item .head{display:flex;flex-wrap:wrap;gap:8px 24px;justify-content:space-between;align-items:baseline;padding:18px 0;cursor:pointer;width:100%;background:none;border:0;text-align:left;font:inherit;color:inherit}' +\n'.apg .item .head .m{font-size:18px;font-weight:600;flex:1 1 420px}.apg .item .head .w{font-size:15px;color:var(--quiet)}' +\n'.apg .item .body{display:none;padding:0 0 20px}.apg .item.open .body{display:block}' +\n'.apg .note{font-size:15px;color:var(--quiet)}' +\n'.apg .flash{background:var(--card);border:1.5px solid var(--bronze);border-radius:10px;padding:18px 22px;font-size:17px}' +\n'.apg .gate{max-width:560px;margin:0 auto;padding:56px 24px 80px}.apg .gate h2{font-size:32px}.apg .gate .err{color:#9A3B2F;font-size:15px;margin-top:8px}' +\n'.apg .foot{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between;border-top:1px solid var(--rule);padding-top:22px;font-size:17px}' +\n'.apg .thu{background:var(--card);border:1.5px solid var(--bronze);border-radius:10px;padding:26px;display:flex;flex-direction:column;gap:18px}' +\n'.apg .radios{display:flex;gap:10px}.apg .radios label{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;min-height:48px;border:1.5px solid #CBBFAE;border-radius:6px;font-size:16px;font-weight:600;background:var(--card);margin:0;cursor:pointer}.apg .radios input{width:18px;height:18px;margin:0;accent-color:var(--band)}' +\n'@media (max-width:720px){.apg .band{padding:26px 20px 0}.apg h1{font-size:27px;margin-top:8px}.apg .lede{font-size:15px;margin-top:8px}.apg .row{gap:18px;margin-top:10px;flex-wrap:nowrap}#pageContainer #apGrowth .row a,.apg .row a{padding:12px 0;font-size:14px;white-space:nowrap}.apg h2{font-size:25px;margin-bottom:10px}.apg .claim{font-size:17px;margin-bottom:8px}.apg .fine{font-size:14px;margin-bottom:6px}.apg .kicker{margin-bottom:8px}.apg .who{font-size:14px;margin-bottom:8px}.apg .three{grid-template-columns:1fr}.apg .three .card{min-height:0}.apg .btns{flex-direction:column;gap:10px;margin-top:12px}#pageContainer #apGrowth .btn,.apg .btn{width:100%;min-height:46px}.apg .main{gap:40px;padding:22px 20px 60px}}' +\n'.apg .three .card{cursor:pointer}.apg .three .gl{font-size:14px;color:var(--quiet);margin-top:-4px}.apg .three .h{font:600 18px/1.35 var(--serif);margin:0;color:var(--navy)}.apg .three .b{font-size:15px;line-height:1.45}.apg .three .lk{display:flex;gap:18px;font-size:15px;font-weight:600}#pageContainer #apGrowth .three .lk a,.apg .three .lk a{color:var(--bronze-ink);text-decoration:none}#pageContainer #apGrowth .three .lk a:hover,.apg .three .lk a:hover{text-decoration:underline}' +\n'.apg .wk{display:flex;flex-wrap:wrap;gap:8px 18px;align-items:baseline;margin:-6px 0 16px;font-size:16px;line-height:1.5;color:var(--quiet)}.apg .wk .verse{font:italic 400 19px/1.4 var(--serif);color:var(--ink)}.apg .wk .ref{font:600 13px/1.4 var(--sans);font-style:normal;letter-spacing:.08em;text-transform:uppercase;color:var(--quiet);margin-left:6px}.apg .wk button{font:600 15px/1.4 var(--sans);color:var(--bronze-ink);background:none;border:0;padding:0;cursor:pointer;min-height:44px;white-space:nowrap}.apg .mean{background:var(--card);border:1px solid var(--rule);border-radius:10px;padding:18px 22px;margin:0 0 18px;display:none;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}.apg .mean.open{display:grid}.apg #sThu,.apg #sToday,.apg #sWeek,.apg #sRoom,.apg #sShelf,.apg #sComing,.apg .mean{scroll-margin-top:var(--bar,84px)}.apg .ar{white-space:nowrap}.apg .mean h4{font:600 20px/1.2 var(--serif);margin:0 0 6px}.apg .mean p{font-size:15px;line-height:1.5;margin:0}.apg .mean .w{color:var(--quiet)}.apg .mean .all{grid-column:1/-1;border-top:1px solid var(--rule);padding-top:12px;font-size:15px;color:var(--quiet)}.apg .back{font-size:15px;font-weight:600;color:var(--bronze-ink);margin:0 0 10px}' +\n'.apg .part{font-size:12px;letter-spacing:2.5px;text-transform:uppercase;color:var(--bronze-ink);font-weight:600;margin:18px 0 6px}.apg blockquote.q{margin:0 0 10px;padding:4px 0 4px 16px;border-left:3px solid var(--bronze);font:italic 400 19px/1.45 var(--serif);color:var(--ink);max-width:760px}.apg blockquote.q a,#pageContainer #apGrowth blockquote.q a{font:600 14px/1.4 var(--sans);font-style:normal;color:var(--bronze-ink);white-space:nowrap;margin-left:6px}.apg blockquote.q .qm{font:600 14px/1.4 var(--sans);font-style:normal;color:var(--quiet);margin-left:6px}@media (max-width:720px){.apg blockquote.q{font-size:16px}.apg .part{margin-top:14px}}' +\n'@media (max-width:720px){.apg .mean{grid-template-columns:1fr}.apg .three .lk{gap:14px}}' +\n'</style>' +\n'<div class=\"apg\"><img class=\"hero\" src=\"https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/craftsmans-bench.jpg\" width=\"1316\" height=\"740\" alt=\"A craftsman\\'s bench at first light\" decoding=\"async\" fetchpriority=\"high\"><div class=\"band\"><div class=\"in\"><div class=\"eyebrow\">Ancient Path</div><h1 id=\"gHello\">Good morning.</h1><p class=\"lede\" id=\"gLede\">One thing for this week, twelve minutes. Filled for the Work \\u00b7 Exodus 31:3.</p>' +\n'<nav class=\"row\" aria-label=\"Your rooms\"><a href=\"' + PATHS.desk + '\" id=\"gNavDesk\">Your Desk</a><a href=\"' + PATHS.growth + '\" class=\"on\" id=\"gNavGrowth\">Your Growth</a><a href=\"' + PATHS.page + '\" id=\"gNavPage\">Your Page</a></nav></div></div>' +\n'<div id=\"gBody\"></div></div>';\n\nfunction $(id) { return document.getElementById(id); }\nfunction esc(s) { return String(s == null ? '' : s).replace(/[&<>\"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '\"': '&quot;' }[c]; }); }\nfunction stored() { try { var v = JSON.parse(localStorage.getItem(STORE) || 'null'); return v && v.key ? v : null; } catch (e) { return null; } }\nfunction keep(v) { try { if (v) localStorage.setItem(STORE, JSON.stringify(v)); else localStorage.removeItem(STORE); } catch (e) {} }\nfunction post(url, body) {\n  return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(body), credentials: 'omit' })\n    .then(function (r) { return r.json(); }, function () { throw { error: 'network' }; })\n    .then(function (r) { if (!r || r.ok !== true) throw (r || { error: 'network' }); return r; });\n}\nfunction call(body) { if (!GROWTH_URL) return Promise.reject({ error: 'no_url' }); var s = stored(); body.key = s ? s.key : ''; return post(GROWTH_URL, body); }\nfunction greet() { var h = new Date().getHours(); return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening'; }\nfunction firstName(n) { return String(n || '').trim().split(/\\s+/)[0] || ''; }\nfunction words(e) {\n  switch (e && e.error) {\n    case 'not_on_list': return 'That email is not on the desk list. Our team adds people on the People tab of the Front Desk sheet.';\n    case 'bad_email': return 'That does not look like an email address.';\n    case 'wait': return 'A code went out less than two minutes ago. Check your mail, or wait a moment and ask again.';\n    case 'too_many': return 'Five codes have gone out today. Try again tomorrow, or ask our team.';\n    case 'code_expired': return 'That code has expired. Ask for a new one.';\n    case 'code_wrong': return 'That is not the code. Check the mail and try again.';\n    case 'network': return 'The page could not reach the practice. Try again in a moment.';\n    case 'no_url': return 'The page is not wired to its script yet.';\n    default: return 'Something did not work. Try again in a moment.';\n  }\n}\n/* The site's top bar sticks to the top of the window; whatever we scroll to must land below it. Measured on the page, never assumed. */\nfunction barH() {\n  function h(e) { try { var cs = getComputedStyle(e), r = e.getBoundingClientRect(); if ((cs.position === 'fixed' || cs.position === 'sticky') && r.top <= 2 && r.height > 10 && r.height < 220 && r.width > 300) return Math.round(r.bottom); } catch (x) {} return 0; }\n  var best = h(document.querySelector('.lw-topbar') || document.body);\n  if (!best) { var c = document.querySelectorAll('header, [class*=\"topbar\"], [class*=\"header\"]'); for (var i = 0; i < c.length; i++) { var v = h(c[i]); if (v > best) best = v; } }\n  return best || 84;\n}\nfunction setBar() { var a = host.querySelector('.apg'); if (a) a.style.setProperty('--bar', barH() + 'px'); }\nfunction scrollTo(el) {\n  if (!el) return;\n  el.style.scrollMarginTop = barH() + 'px';\n  try { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); } catch (e) { el.scrollIntoView(); }\n}\n\n/* ---------- the gate: the same code by email the desk uses, the same key ---------- */\nfunction gate(msg) {\n  $('gHello').textContent = greet() + '.';\n  $('gLede').textContent = 'Sign in to open Your Growth.';\n  $('gBody').innerHTML = '<div class=\"gate\"><h2>Your Growth is for facilitators on our team.</h2>' +\n    '<p class=\"fine\">We send a six-digit code to the address on our list; it opens this browser for ninety days. The same code opens your desk.</p>' +\n    (msg ? '<p class=\"err\">' + esc(msg) + '</p>' : '') +\n    '<div id=\"gStep1\"><label for=\"gEmail\">Your email</label><input id=\"gEmail\" type=\"email\" autocomplete=\"email\" placeholder=\"you@example.com\"><div class=\"btns\"><button class=\"btn p\" id=\"gSend\">Send me a code</button></div><p class=\"err\" id=\"gErr1\" hidden></p></div>' +\n    '<div id=\"gStep2\" hidden><label for=\"gCode\">The six digits from the mail</label><input id=\"gCode\" type=\"tel\" inputmode=\"numeric\" autocomplete=\"one-time-code\" placeholder=\"000 000\"><div class=\"btns\"><button class=\"btn p\" id=\"gCheck\">Open Your Growth</button><button class=\"btn q\" id=\"gAgain\">Send another code</button></div><p class=\"err\" id=\"gErr2\" hidden></p></div></div>';\n  var email = '';\n  $('gSend').addEventListener('click', function () {\n    email = String($('gEmail').value || '').trim().toLowerCase();\n    var b = $('gSend'); b.disabled = true; b.textContent = 'Sending\\u2026'; $('gErr1').hidden = true;\n    post(DESK_URL, { action: 'code_send', email: email }).then(function () {\n      b.disabled = false; b.textContent = 'Send me a code'; $('gStep1').hidden = true; $('gStep2').hidden = false; $('gCode').focus();\n    }, function (e) { b.disabled = false; b.textContent = 'Send me a code'; $('gErr1').textContent = words(e); $('gErr1').hidden = false; });\n  });\n  $('gAgain').addEventListener('click', function () { $('gStep2').hidden = true; $('gStep1').hidden = false; });\n  $('gCheck').addEventListener('click', function () {\n    var code = String($('gCode').value || '').replace(/\\D/g, '');\n    if (code.length !== 6) { $('gErr2').textContent = 'The code is six digits.'; $('gErr2').hidden = false; return; }\n    var b = $('gCheck'); b.disabled = true; b.textContent = 'Opening\\u2026'; $('gErr2').hidden = true;\n    post(DESK_URL, { action: 'code_check', email: email, code: code, browser: navigator.userAgent.slice(0, 120) }).then(function (r) {\n      keep({ key: r.key, email: r.email, name: r.name, role: r.role, room: r.room, expires: r.expires });\n      load();\n    }, function (e) { b.disabled = false; b.textContent = 'Open Your Growth'; $('gErr2').textContent = words(e); $('gErr2').hidden = false; });\n  });\n}\n\n/* ---------- the page ---------- */\nvar D = null;\nfunction load() {\n  if (!stored()) return gate('');\n  $('gBody').innerHTML = '<div class=\"main\"><p class=\"note\">Opening Your Growth\\u2026</p></div>';\n  call({ action: 'growth' }).then(function (r) { D = r; render(); }, function (e) {\n    var code = e && e.error;\n    if (code === 'no_key' || code === 'bad_key' || code === 'key_expired' || code === 'removed') { keep(null); return gate(code === 'removed' ? 'Your name is no longer on the desk list.' : (code === 'key_expired' ? 'Your sign-in has run out. Ask for a new code.' : '')); }\n    $('gBody').innerHTML = '<div class=\"main\"><div class=\"flash\">' + esc(words(e)) + ' <button class=\"btn q\" id=\"gRetry\">Try again</button></div></div>';\n    $('gRetry').addEventListener('click', load);\n  });\n}\n\n/* The sheet keeps its keys in Entries column G (Know, Read, Show up creatively); the page maps key to the text's word. A cell already holding a word maps to itself. */\nfunction lineOf(q) { var s = String(q || '').toLowerCase(); return /^know/.test(s) ? 'Knowledge' : /^(read|understand)/.test(s) ? 'Understanding' : 'Wisdom'; }\nvar LINES = ['Wisdom', 'Understanding', 'Knowledge'];\nvar GLOSS = { 'Wisdom': 'skill in the work, how you show up in the room', 'Understanding': 'telling things apart, reading a man and the moment', 'Knowledge': 'the trade, the men, and the God who gives it' };\nvar MEAN = [\n  ['Wisdom', 'chokmah', 'Skill in the work: how you show up in the room. Bezalel was filled with it for the work (Exodus 31:3; 35:31), and Hiram, who worked the bronze, with the same three (1 Kings 7:14).'],\n  ['Understanding', 'tevunah', 'Telling things apart: reading a man and the moment. Solomon asked for a mind that can tell good from evil (1 Kings 3:9), and the men of Issachar understood the times and knew what to do (1 Chronicles 12:32).'],\n  ['Knowledge', 'da\\u2019at', 'The trade, the men, and the God who gives it. \\u201cThe fear of the LORD is the beginning of knowledge\\u201d (Proverbs 1:7).']\n];\nfunction bringLine(move) {\n  var m = String(move || ''); var q = m.match(/[\\u201c\"]([^\\u201d\"]{12,220}\\?)[\\u201d\"]/); if (q) return q[1];\n  var f = m.match(/^[\\s\\S]*?[.?!](?=\\s|$)/); var s = f ? f[0] : m; if (s.length > 160) s = s.slice(0, 157).replace(/\\s+\\S*$/, '') + '\\u2026'; return s;\n}\nfunction cur() { return D.focus || D.today; }\nfunction stateWords(e) {\n  if (!e) return '';\n  var s = String(e.state || '');\n  if (/used/.test(s)) return 'Brought to the room';\n  if (/bring/.test(s)) return 'Bringing to the room';\n  if (/notforme/.test(s)) return 'Set aside';\n  if (/opened/.test(s)) return 'Opened' + (e.openedDay ? ' ' + e.openedDay : '');\n  if (e.isToday) return 'New today';\n  return 'Not opened yet';\n}\n/* The three-part block every piece carries (build 3): In their words \\u00b7 What it means for our work \\u00b7 What to do with it; then What to listen for. */\nfunction pieceHtml(p, big) {\n  if (!p) return '';\n  var h = '';\n  h += '<p class=\"who\">' + esc(p.voice) + (p.kind ? ' \\u00b7 ' + esc(p.kind) : '') + (p.cost ? ' \\u00b7 ' + esc(p.cost) : '') + '</p>';\n  h += (big ? '<h2>' : '<p class=\"claim\" style=\"font-weight:600\">') + esc(p.claim) + (big ? '</h2>' : '</p>');\n  var qs = p.quotes || [];\n  if (qs.length) {\n    h += '<p class=\"part\">In their words</p>';\n    qs.forEach(function (q) { h += '<blockquote class=\"q\">\\u201c' + esc(q.words) + '\\u201d' + (q.link ? ' <a href=\"' + esc(q.link) + '\" target=\"_blank\" rel=\"noopener\">' + esc(q.minute) + ' \\u2192</a>' : ' <span class=\"qm\">' + esc(q.minute) + '</span>') + '</blockquote>'; });\n  } else if (p.wordsComing) h += '<p class=\"part\">In their words</p><p class=\"note\">The words and the minute are on their way; they land here by about 7:45.</p>';\n  h += '<p class=\"part\">What it means for our work</p>';\n  if (p.construct) h += '<p class=\"fine\"><b>It touches:</b> ' + esc(p.construct) + '</p>';\n  h += '<p class=\"fine\"><b>Read against the text:</b> ' + esc(p.beside) + '</p>';\n  if (p.ours) h += '<p class=\"fine\"><b>Already ours:</b> ' + esc(p.ours) + '</p>';\n  h += '<p class=\"part\">What to do with it</p>';\n  h += '<p class=\"claim\"><b>The move:</b> ' + esc(p.move) + '</p>';\n  if (p.cut) h += '<p class=\"fine\"><b>What to listen for:</b> ' + esc(p.cut) + '</p>';\n  return h;\n}\n\nvar ARW = { closed: '\\u25be', open: '\\u25b4' };\n\n/* The top of the page: greeting, line under it, the Your Growth entry in the row. */\nfunction paintHead() {\n  var who = D.who || {}; var fn = firstName(who.name);\n  $('gHello').textContent = greet() + (fn ? ', ' + fn : '') + '.';\n  $('gLede').textContent = D.today && !/opened|bring|used|notforme/.test(D.today.state || '') ? 'One thing for this week, ' + (D.today.minutes ? D.today.minutes + ' minutes' : 'a few minutes') + '. Filled for the Work \\u00b7 Exodus 31:3.' : 'Filled for the Work \\u00b7 Exodus 31:3. Wisdom \\u00b7 Understanding \\u00b7 Knowledge.';\n  $('gNavGrowth').innerHTML = 'Your Growth' + (D.today && D.today.isToday && !/opened|bring|used|notforme/.test(D.today.state || '') ? ' <span class=\"new\">\\u00b7 1 new</span>' : '');\n}\n\n/* The piece in the top panel: today's, or a card the facilitator opened with See the piece. */\nfunction todayHtml() {\n  var T = cur(); var focused = !!(D.focus && (!D.today || D.focus.id !== D.today.id));\n  var h = '<p class=\"kicker\">For your growth' + (T ? ' \\u00b7 ' + esc(lineOf(T.question)) + (focused && T.written ? ' \\u00b7 from ' + esc(T.written) : '') : '') + '</p>';\n  if (focused && D.today) h += '<p class=\"back\"><a href=\"#\" id=\"gBack\">\\u2190 Back to today\\u2019s piece</a></p>';\n  if (T) {\n    var st = String(T.state || '');\n    if (/notforme/.test(st)) h += '<div class=\"flash\">Noted. Tomorrow\\'s will be different.</div>';\n    else {\n      h += pieceHtml(T, true);\n      h += '<div class=\"btns\">' +\n        '<a class=\"btn p\" id=\"gOpen\" href=\"' + esc(T.link) + '\" target=\"_blank\" rel=\"noopener\">Open it</a>' +\n        (/bring|used/.test(st) ? '<span class=\"btn\" style=\"border-color:var(--rule);color:var(--good)\">' + esc(onWeek()) + '</span>' : '<button class=\"btn\" id=\"gBring\">Bring it to the room</button>') +\n        (/bring|used|opened/.test(st) ? '' : '<button class=\"btn q\" id=\"gNot\">Not for me</button>') +\n        '</div><p class=\"note\" id=\"gTodayNote\" style=\"margin-top:10px\"></p>';\n    }\n  } else {\n    h += '<h2 style=\"font-size:28px\">Nothing new this morning.</h2><p class=\"fine\">The reader opens the field at 5:00 AM and the engine writes by 6:40. When a piece fits your room, it is here, cut to the twenty minutes worth your time, with one thing to bring into the room.</p>';\n  }\n  return h;\n}\nfunction onWeek() { var n = D.room && D.room.next; return 'On your week' + (n ? ': ' + n : ''); }\n\n/* The three lines, one card each. */\nfunction threeHtml() {\n  var h = '';\n  LINES.forEach(function (q) {\n    var e = (D.week || []).filter(function (x) { return lineOf(x.question) === q; })[0];\n    var sw = stateWords(e); var cls = /Brought|Bringing|Opened/.test(sw) ? 'good' : (sw === 'New today' ? 'new' : '');\n    h += '<div class=\"card' + (e && e.isToday ? ' hi' : '') + '\"' + (e ? ' data-see=\"' + esc(e.id) + '\" role=\"link\" tabindex=\"0\"' : '') + '><h3>' + q + '</h3><div class=\"gl\">' + GLOSS[q] + '</div>' +\n      (e ? '<p class=\"h\">' + esc(e.claim) + '</p><div class=\"v\">' + esc(e.voice) + (e.kind ? ' \\u00b7 ' + esc(e.kind) : '') + (e.cost ? ' \\u00b7 ' + esc(e.cost) : '') + '</div><div class=\"b\"><b>Bring it:</b> ' + esc(bringLine(e.move)) + '</div>' +\n        '<div class=\"lk\">' + (e.link ? '<a href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\" data-open=\"' + esc(e.id) + '\">Open it \\u2192</a>' : '') + '<a href=\"#\" data-see=\"' + esc(e.id) + '\">See the piece</a></div><div class=\"st ' + cls + '\">' + esc(sw) + '</div>'\n         : '<div class=\"t\" style=\"color:var(--quiet)\">Nothing yet this week.</div><div class=\"st\"></div>') + '</div>';\n  });\n  return h;\n}\n\n/* Built once per load. Opening and closing things never calls this again: the panels are always in the page,\n   shown or hidden by a class, so what a facilitator has typed stays where he typed it. */\nfunction render() {\n  paintHead();\n  var h = '<div class=\"main\">';\n  // The morning after his room: before anything else\n  if (D.thursday) {\n    var t = D.thursday;\n    h += '<section id=\"sThu\"><p class=\"kicker\">Your last room \\u00b7 ' + esc(t.when) + '</p><div class=\"thu\">' +\n      '<h2 style=\"font-size:28px;margin:0\">You brought: ' + esc(t.move) + '</h2>' +\n      '<fieldset style=\"border:0;padding:0;margin:0\"><legend style=\"font-size:17px;font-weight:600;padding:0;margin-bottom:10px\">Did you use it?</legend><div class=\"radios\"><label><input type=\"radio\" name=\"gUsed\" value=\"yes\"> Yes</label><label><input type=\"radio\" name=\"gUsed\" value=\"no\"> Not this time</label></div></fieldset>' +\n      '<div><label for=\"gCarried\">What did the room carry?</label><textarea id=\"gCarried\" rows=\"3\" placeholder=\"No names. The themes, in a line or two.\"></textarea></div>' +\n      '<div><label for=\"gChanged\">What did it change in how you led?</label><textarea id=\"gChanged\" rows=\"3\" placeholder=\"One sentence is enough.\"></textarea></div>' +\n      '<div class=\"btns\" style=\"margin-top:0\"><button class=\"btn p\" id=\"gKeep\">Keep this</button><button class=\"btn q\" id=\"gLater\">Later</button></div>' +\n      '<p class=\"note\">Your answers go to the room\\'s signals, team only, and tune what you get next. Nothing here reaches the men.</p>' +\n      '<p class=\"err\" id=\"gThuErr\" hidden style=\"color:#9A3B2F;font-size:15px\"></p></div></section>';\n  }\n  h += '<section id=\"sToday\">' + todayHtml() + '</section>';\n  // This week: three lines, and the panel that says what they mean (always here, shown by a class)\n  h += '<section id=\"sWeek\"><p class=\"kicker\">This week \\u00b7 Wisdom \\u00b7 Understanding \\u00b7 Knowledge</p>' +\n    '<div class=\"wk\"><span class=\"verse\">\\u201cwith wisdom and understanding and knowledge\\u201d <span class=\"ref\">Exodus 31:3</span></span><button type=\"button\" id=\"gMean\" aria-expanded=\"false\" aria-controls=\"gMeanBox\">What these mean ' + ARW.closed + '</button></div>' +\n    '<div class=\"mean\" id=\"gMeanBox\">';\n  MEAN.forEach(function (m) { h += '<div><h4>' + m[0] + '</h4><p class=\"w\">' + m[1] + '</p><p>' + m[2] + '</p></div>'; });\n  h += '<p class=\"all\">God does the filling; this page serves it, one piece at a time.</p><p class=\"all\">and with all craftsmanship: the room is melakhah, the work, where the three are proved.</p></div>' +\n    '<div class=\"three\" id=\"gThree\">' + threeHtml() + '</div></section>';\n  // For your room: the real date from the Rooms tab, or nothing when he has no room\n  var R = D.room || {};\n  h += '<section id=\"sRoom\"><p class=\"kicker\">For your room' + (R.next ? ' \\u00b7 ' + esc(R.next) : '') + '</p><div class=\"card\">';\n  h += '<div style=\"display:flex;flex-wrap:wrap;gap:16px;align-items:baseline;justify-content:space-between\"><div class=\"claim\" style=\"margin:0;font-size:19px\"><b>You are bringing:</b> ' + (R.bringing ? esc(R.bringing.move) : '<span style=\"color:var(--quiet)\">nothing yet. Press Bring it to the room on a piece.</span>') + '</div>' + (R.prep ? '<div class=\"note\">' + esc(R.prep) + '</div>' : '') + '</div>';\n  h += '<div class=\"hr\"><label for=\"gAsk\">My room is stuck on\\u2026</label><div class=\"askrow\"><input id=\"gAsk\" type=\"text\" placeholder=\"silence after a heavy story\"><button class=\"btn\" id=\"gAskBtn\" style=\"background:var(--band);border-color:var(--band);color:var(--band-ink)\">What do I bring to the room?</button></div><p class=\"note\" style=\"margin-top:8px\">One item and one question come back, from our shelf first.</p><div id=\"gAskOut\"></div></div>';\n  if (R.carried) h += '<div class=\"hr\"><p class=\"kicker\" style=\"font-size:12px;margin-bottom:8px\">Your room carried' + (R.carried.weeks > 1 ? ', ' + R.carried.weeks + ' weeks running' : '') + '</p><p class=\"claim\" style=\"font-size:17px;margin:0\">' + esc(R.carried.text) + (R.carried.answer ? ' ' + esc(R.carried.answer) : '') + '</p></div>';\n  h += '</div></section>';\n  // The shelf\n  h += '<section id=\"sShelf\"><p class=\"kicker\">Everything we have kept</p>' +\n    '<label for=\"gFind\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)\">Search the shelf</label><input id=\"gFind\" type=\"search\" placeholder=\"Search the shelf\">' +\n    '<div class=\"lanes\" id=\"gLanes\"></div><div class=\"list\" id=\"gList\"></div>' +\n    '<p class=\"note\" id=\"gShelfNote\"></p></section>';\n  // Coming up\n  h += '<section id=\"sComing\"><p class=\"kicker\">Coming up</p>';\n  if (D.coming && D.coming.length) { h += '<div class=\"list\">'; D.coming.forEach(function (c) { h += '<div class=\"item\"><div class=\"head\"><span class=\"m\">' + esc(c.move) + '</span><span class=\"w\">' + esc(c.cost) + '</span></div></div>'; }); h += '</div>'; }\n  else h += '<p class=\"fine\">Nothing on the calendar yet. Trainings and events arrive here with the price, the deadline, and one button that puts them on your calendar.</p>';\n  h += '</section>';\n  // John only\n  if (D.release) h += '<section class=\"foot\"><div><b>Candidates this week (' + D.release.count + ')</b> <span class=\"note\">\\u00b7 you see this line; facilitators do not</span></div><button class=\"btn\" id=\"gRelease\"' + (D.release.count ? '' : ' disabled') + '>Release to the shelf</button></section>';\n  h += '<p class=\"note\">Your Growth \\u00b7 build ' + BUILD + ' \\u00b7 Filled for the Work, Exodus 31:3 and Proverbs 24:3\\u20134.</p>';\n  h += '</div>';\n  $('gBody').innerHTML = h;\n  setBar();\n  wire();\n  if (D.thursday && !D.sawThu) { D.sawThu = true; scrollTo($('sThu')); }\n}\n\n/* Only the top panel, the three cards and the entry in the row change when a card is opened or a piece is set aside;\n   everything below them, and anything typed there, is left alone. */\nfunction repaintTop() {\n  paintHead();\n  var s = $('sToday'); if (s) s.innerHTML = todayHtml();\n  var t = $('gThree'); if (t) t.innerHTML = threeHtml();\n  wireTop();\n}\n\nvar laneOn = 'All', findText = '';\nfunction shelfLanes() { var set = {}; (D.shelf || []).forEach(function (e) { set[e.lane || 'Other'] = 1; }); return ['All'].concat(Object.keys(set).sort()); }\nfunction renderShelf() {\n  var lanes = shelfLanes();\n  $('gLanes').innerHTML = lanes.map(function (l) { return '<button class=\"lane' + (l === laneOn ? ' on' : '') + '\" data-lane=\"' + esc(l) + '\">' + esc(l) + '</button>'; }).join('');\n  Array.prototype.forEach.call($('gLanes').querySelectorAll('.lane'), function (b) { b.addEventListener('click', function () { laneOn = b.getAttribute('data-lane'); renderShelf(); }); });\n  var q = findText.toLowerCase();\n  var items = (D.shelf || []).filter(function (e) { return (laneOn === 'All' || (e.lane || 'Other') === laneOn) && (!q || (e.move + ' ' + e.claim + ' ' + e.voice + ' ' + e.beside).toLowerCase().indexOf(q) >= 0); });\n  if (!items.length) { $('gList').innerHTML = '<p class=\"fine\" style=\"padding:18px 0\">' + ((D.shelf || []).length ? 'Nothing on the shelf matches that yet.' : 'The shelf fills as entries are released, one week at a time.') + '</p>'; }\n  else $('gList').innerHTML = items.map(function (e, i) {\n    return '<div class=\"item\" id=\"it' + i + '\"><button class=\"head\" type=\"button\" data-i=\"' + i + '\" aria-expanded=\"false\"><span class=\"m\">' + esc(e.move) + '</span><span class=\"w\">' + esc(e.voice) + ' \\u00b7 ' + esc(lineOf(e.question)) + (e.cost ? ' \\u00b7 ' + esc(e.cost) : '') + (e.status === 'candidate' ? ' \\u00b7 candidate' : '') + '<span class=\"ar\">\\u00a0' + ARW.closed + '</span></span></button>' +\n      '<div class=\"body\">' + pieceHtml(e, false) + '<div class=\"btns\" style=\"margin-top:8px\"><a class=\"btn p\" href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\" data-open=\"' + esc(e.id) + '\">Open it</a><button class=\"btn\" data-bring=\"' + esc(e.id) + '\">Bring it to the room</button></div></div></div>';\n  }).join('');\n  Array.prototype.forEach.call($('gList').querySelectorAll('.head'), function (b) { b.addEventListener('click', function () { var it = b.parentNode; var on = it.classList.toggle('open'); b.setAttribute('aria-expanded', on ? 'true' : 'false'); var ar = b.querySelector('.ar'); if (ar) ar.textContent = '\\u00a0' + (on ? ARW.open : ARW.closed); }); });\n  Array.prototype.forEach.call($('gList').querySelectorAll('[data-open]'), function (a) { a.addEventListener('click', function () { call({ action: 'mark', id: a.getAttribute('data-open'), what: 'open' }).catch(function () {}); }); });\n  Array.prototype.forEach.call($('gList').querySelectorAll('[data-bring]'), function (b) { b.addEventListener('click', function () { bring(b.getAttribute('data-bring'), b); }); });\n  $('gShelfNote').textContent = (D.shelf || []).length ? ((D.release ? 'Candidates show here for you only until they are released.' : 'New here? Open any piece; the cost is stated on each.')) : '';\n}\nfunction bring(id, btn) {\n  btn.disabled = true; btn.textContent = 'Putting it on your week\\u2026';\n  call({ action: 'mark', id: id, what: 'bring' }).then(function (r) {\n    D.room = D.room || {};\n    if (r.nextRoom) D.room.next = r.nextRoom;\n    btn.textContent = onWeek(); btn.style.borderColor = 'var(--rule)'; btn.style.color = 'var(--good)';\n    if (D.today && D.today.id === id) D.today.state = (D.today.state || '') + ' \\u00b7 bring';\n    D.room.bringing = (D.shelf || []).concat(D.today ? [D.today] : []).filter(function (e) { return e.id === id; })[0] || D.room.bringing;\n    var el = document.querySelector('#sRoom .claim'); if (el && D.room.bringing) el.innerHTML = '<b>You are bringing:</b> ' + esc(D.room.bringing.move);\n    var k = document.querySelector('#sRoom .kicker'); if (k) k.textContent = 'For your room' + (D.room.next ? ' \\u00b7 ' + D.room.next : '');\n  }, function (e) { btn.disabled = false; btn.textContent = 'Bring it to the room'; alertLine(words(e)); });\n}\nfunction alertLine(msg) { var n = $('gTodayNote'); if (n) { n.textContent = msg; } }\n\n/* The top panel and the three cards. Called again whenever repaintTop() rebuilds them. */\nfunction wireTop() {\n  var T = cur();\n  if ($('gOpen')) $('gOpen').addEventListener('click', function () { call({ action: 'mark', id: T.id, what: 'open' }).catch(function () {}); if (!/opened|bring|used/.test(T.state || '')) T.state = (T.state || '') + ' \\u00b7 opened'; var n = $('gNot'); if (n) n.remove(); });\n  if ($('gBring')) $('gBring').addEventListener('click', function () { bring(T.id, $('gBring')); var n = $('gNot'); if (n) n.remove(); });\n  if ($('gNot')) $('gNot').addEventListener('click', function () {\n    var b = $('gNot'); b.disabled = true;\n    call({ action: 'mark', id: T.id, what: 'notforme' }).then(function () { T.state = (T.state || '') + ' \\u00b7 notforme'; repaintTop(); }, function (e) { b.disabled = false; alertLine(words(e)); });\n  });\n  if ($('gBack')) $('gBack').addEventListener('click', function (ev) { ev.preventDefault(); D.focus = null; repaintTop(); scrollTo($('sToday')); });\n  document.querySelectorAll('#gThree [data-see]').forEach(function (el) {\n    el.addEventListener('click', function (ev) {\n      if (ev.target.closest('a[data-open]')) return;\n      ev.preventDefault(); var id = el.getAttribute('data-see');\n      var e = (D.week || []).filter(function (x) { return x.id === id; })[0]; if (!e) return;\n      D.focus = (D.today && D.today.id === id) ? null : e; repaintTop(); scrollTo($('sToday'));\n    });\n    el.addEventListener('keydown', function (ev) { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); el.click(); } });\n  });\n  document.querySelectorAll('#gThree a[data-open]').forEach(function (a) {\n    a.addEventListener('click', function (ev) { ev.stopPropagation(); var id = a.getAttribute('data-open'); call({ action: 'mark', id: id, what: 'open' }).catch(function () {}); var e = (D.week || []).filter(function (x) { return x.id === id; })[0]; if (e && !/opened|bring|used/.test(e.state || '')) { e.state = (e.state || '') + ' \\u00b7 opened'; setTimeout(repaintTop, 400); } });\n  });\n}\n\n/* Everything below the top panel. Wired once per load. */\nfunction wire() {\n  wireTop();\n  // What these mean: open and close in place. No render, no scroll.\n  if ($('gMean')) $('gMean').addEventListener('click', function () {\n    D.showMean = !D.showMean;\n    var b = $('gMean'), box = $('gMeanBox');\n    box.classList.toggle('open', !!D.showMean);\n    b.setAttribute('aria-expanded', D.showMean ? 'true' : 'false');\n    b.textContent = 'What these mean ' + (D.showMean ? ARW.open : ARW.closed);\n  });\n  if ($('gKeep')) $('gKeep').addEventListener('click', function () {\n    var used = (document.querySelector('input[name=gUsed]:checked') || {}).value || '';\n    if (!used) { $('gThuErr').textContent = 'Say whether you used it, then keep.'; $('gThuErr').hidden = false; return; }\n    var b = $('gKeep'); b.disabled = true; b.textContent = 'Keeping\\u2026'; $('gThuErr').hidden = true;\n    call({ action: 'thursday', id: D.thursday.id, used: used, carried: $('gCarried').value, changed: $('gChanged').value }).then(function () {\n      $('sThu').innerHTML = '<div class=\"flash\">Kept. It is in the room\\'s signals, and it shapes what comes next.</div>'; D.thursday = null;\n    }, function (e) { b.disabled = false; b.textContent = 'Keep this'; $('gThuErr').textContent = words(e); $('gThuErr').hidden = false; });\n  });\n  if ($('gLater')) $('gLater').addEventListener('click', function () { $('sThu').remove(); scrollTo($('sToday')); });\n  if ($('gAskBtn')) $('gAskBtn').addEventListener('click', function () {\n    var q = String($('gAsk').value || '').trim(); if (!q) { $('gAsk').focus(); return; }\n    var b = $('gAskBtn'); b.disabled = true; b.textContent = 'Looking on the shelf\\u2026'; $('gAskOut').innerHTML = '';\n    call({ action: 'ask', text: q }).then(function (r) {\n      b.disabled = false; b.textContent = 'What do I bring to the room?';\n      var out = '<div class=\"card\" style=\"margin-top:16px\">';\n      if (r.item) out += '<p class=\"kicker\" style=\"font-size:12px;margin-bottom:8px\">' + (r.item.fromShelf ? 'From our shelf' : 'Not yet on our shelf') + '</p>' + pieceHtml(r.item, false) + '<div class=\"btns\" style=\"margin-top:8px\">' + (r.item.link ? '<a class=\"btn p\" href=\"' + esc(r.item.link) + '\" target=\"_blank\" rel=\"noopener\">Open it</a>' : '') + (r.item.id ? '<button class=\"btn\" data-bring=\"' + esc(r.item.id) + '\" id=\"gAskBring\">Bring it to the room</button>' : '') + '</div>';\n      if (r.question) out += '<p class=\"claim\" style=\"margin-top:16px\"><b>The question for the room:</b> ' + esc(r.question) + '</p>';\n      if (r.note) out += '<p class=\"note\">' + esc(r.note) + '</p>';\n      out += '</div>';\n      $('gAskOut').innerHTML = out;\n      if ($('gAskBring')) $('gAskBring').addEventListener('click', function () { bring(r.item.id, $('gAskBring')); });\n    }, function (e) { b.disabled = false; b.textContent = 'What do I bring to the room?'; $('gAskOut').innerHTML = '<p class=\"note\" style=\"margin-top:8px\">' + esc(words(e)) + '</p>'; });\n  });\n  if ($('gFind')) $('gFind').addEventListener('input', function () { findText = $('gFind').value; renderShelf(); });\n  if ($('gRelease')) $('gRelease').addEventListener('click', function () {\n    var b = $('gRelease'); b.disabled = true; b.textContent = 'Releasing\\u2026';\n    call({ action: 'release' }).then(function (r) { b.textContent = 'Released ' + r.released + ' to the shelf'; (D.shelf || []).forEach(function (e) { if (e.status === 'candidate') e.status = 'released'; }); D.release.count = 0; renderShelf(); }, function (e) { b.disabled = false; b.textContent = 'Release to the shelf'; alertLine(words(e)); });\n  });\n  renderShelf();\n}\n\nwindow.addEventListener('resize', setBar);\nload();\n})();\n";

/* ═══════════════════════════════ row.js build 3 (served at ?file=row.js, the picture addresses filled in by rowJs_) ═══════════════════════════════ */
var ROW_JS = "/* AP-ROW row.js build 3.1 — one band, three rooms. Served by the Research reader script (?file=row.js), loaded on /front-desk and /start; /your-growth draws its own band and is the standard.\n   Build 3 (Oct 21, 2026, John: \"we need a consistent ui\"): Your Growth's band becomes the house band on Your Page and Your Desk — a picture full width above the band when one is set\n   (Config \"band picture page\" / \"band picture desk\"), then the dark band left-aligned: the eyebrow, the greeting with his name, one line, Your Page's three stops as its own line, and the row.\n   The row Your Desk · Your Growth · Your Page shows only in a browser that holds a desk key (a facilitator or admin); a man never sees it. Nothing under the band changes. */\n(function () {\n  if (window.__apRow) return; window.__apRow = true;\n  var PICS = __PICS__;\n  var STORE = 'apDesk', s = null;\n  try { s = JSON.parse(localStorage.getItem(STORE) || 'null'); } catch (e) {}\n  var ROW_URL = (function () { var sc = document.currentScript; var u = sc && sc.src ? String(sc.src).split('?')[0] : ''; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : ''; })();\n  var path = location.pathname.replace(/\\/+$/, '') || '/';\n  var here = path === '/front-desk' ? 'desk' : path === '/your-growth' ? 'growth' : (path === '/start' || path === '/') ? 'page' : '';\n  if (here === 'growth' || !here) return;\n  var root = here === 'desk' ? '#apDesk' : '#apHome';\n\n  var css = document.createElement('style');\n  css.textContent =\n    /* the band, left-aligned, the same measures as Your Growth */\n    root + ' .ap-band, ' + root + ' .ap-band *{text-align:left !important}' +\n    root + ' .ap-band{padding-top:0 !important}' +\n    root + ' .ap-band-in{display:block !important;max-width:980px !important;margin:0 auto !important;padding:36px 24px 0 !important;justify-items:start !important}' +\n    root + ' .ap-band-in .ap-eyebrow{font:600 13px/1.65 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;letter-spacing:3px !important;text-transform:uppercase !important;color:#B8945F !important;margin:0 !important}' +\n    root + ' .ap-band-in .ap-hello{font:600 44px/1.1 \"Source Serif 4\",Georgia,serif !important;color:#F3EDE3 !important;letter-spacing:-0.01em !important;margin:12px 0 0 !important}' +\n    root + ' .ap-band-in .ap-line{font:400 19px/1.5 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;max-width:640px !important;margin:12px 0 0 !important}' +\n    root + ' .ap-band-in .ap-line .ap-s{display:inline !important}' +\n    root + ' .ap-band-in .ap-line-small{display:none !important}' +\n    root + ' .ap-band-in .ap-primary{margin-top:18px !important}' +\n    /* the picture above the band */\n    root + ' .ap-band .apb-hero{display:block;width:100%;height:clamp(180px,26vw,380px);object-fit:cover;object-position:50% 62%;background:#1B2A3A;margin:0}' +\n    /* Your Page's three stops: its own line, left-aligned, one line through the three */\n    root + ' .ap-band-in .ap-stones{display:flex !important;justify-content:flex-start !important;gap:28px !important;margin:22px 0 0 !important;max-width:none !important;width:100% !important;position:relative}' +\n    root + ' .ap-band-in .ap-stones::before{left:0 !important;right:0 !important;top:5px !important}' +\n    root + ' .ap-band-in .ap-stone{flex:1 1 0 !important;padding:0 !important;margin:0 !important;border:0 !important}' +\n    root + ' .ap-band-in .ap-stone-dot{margin:0 0 10px !important}' +\n    root + ' .ap-band-in .ap-stone-word{font:600 14px/1.3 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;letter-spacing:1.5px !important}' +\n    root + ' .ap-band-in .ap-stone-what{display:block !important;font:400 14px/1.5 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;margin-top:4px !important;text-wrap:auto !important}' +\n    /* the row */\n    root + ' .apg-row{display:flex;width:100%;gap:36px;margin-top:18px;border-top:1px solid rgba(243,237,227,.14);padding-top:4px;flex-wrap:wrap;font-family:\"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif}' +\n    root + ' .apg-row a{display:inline-block !important;padding:16px 0 !important;font:400 17px/1.3 \"Source Sans 3\",-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif !important;color:#B7AFA4 !important;border-bottom:3px solid transparent !important;text-decoration:none !important}' +\n    root + ' .apg-row a:hover{color:#F3EDE3 !important;text-decoration:none !important}' +\n    root + ' .apg-row a.on{color:#F3EDE3 !important;font-weight:600 !important;border-bottom-color:#B8945F !important}' +\n    root + ' .apg-row a .new{font-weight:400;color:#B8945F}' +\n    /* the band keeps its bottom room when the row is not there */\n    root + ' .ap-band-in .apb-foot{height:36px}' +\n    '@media (max-width:720px){' + root + ' .ap-band-in{padding:28px 16px 0 !important}' + root + ' .ap-band-in .ap-hello{font-size:32px !important}' + root + ' .ap-band-in .ap-line{font-size:17px !important}' +\n    root + ' .ap-band-in .ap-stones{flex-direction:column !important;gap:14px !important}' + root + ' .ap-band-in .ap-stones::before{display:none}' + root + ' .ap-band-in .ap-stone-dot{display:none !important}' +\n    root + ' .apg-row{gap:18px;margin-top:10px;flex-wrap:nowrap}' + root + ' .apg-row a{padding:12px 0 !important;font-size:14px !important;white-space:nowrap}}';\n  document.head.appendChild(css);\n\n  var tries = 0;\n  function place() {\n    var band = document.querySelector(root + ' .ap-band'), inner = band && (band.querySelector('.ap-band-in') || band);\n    if (!inner) { if (tries++ < 60) return setTimeout(place, 250); return; }\n    if (inner.getAttribute('data-apb')) return;\n    inner.setAttribute('data-apb', '3.1');\n    /* the picture, when one is set for this room */\n    var pic = PICS && PICS[here];\n    if (pic && !band.querySelector('.apb-hero')) { var img = document.createElement('img'); img.className = 'apb-hero'; img.src = pic; img.alt = ''; img.decoding = 'async'; band.insertBefore(img, band.firstChild); }\n    /* Your Page: the small line folds into the one line under the greeting; the stops stay as their own line */\n    if (here === 'page') {\n      var promise = inner.querySelector('.ap-promise'), small = inner.querySelector('.ap-line-small');\n      if (promise && small && !promise.getAttribute('data-apb')) { promise.setAttribute('data-apb', '1'); var t = (small.textContent || '').replace(/\\s+/g, ' ').trim(); if (t) promise.appendChild(document.createTextNode(' ' + t)); }\n    }\n    /* the row: desk holders only */\n    if (s && s.key) {\n      if (!inner.querySelector('.apg-row')) {\n        var nav = document.createElement('nav');\n        nav.className = 'apg-row'; nav.setAttribute('aria-label', 'Your rooms');\n        nav.innerHTML = '<a href=\"/front-desk\"' + (here === 'desk' ? ' class=\"on\"' : '') + '>Your Desk</a>' +\n          '<a href=\"/your-growth\" id=\"apgRowGrowth\">Your Growth</a>' +\n          '<a href=\"/start\"' + (here === 'page' ? ' class=\"on\"' : '') + '>Your Page</a>';\n        inner.appendChild(nav);\n        if (ROW_URL) {\n          fetch(ROW_URL, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action: 'new', key: s.key }), credentials: 'omit' })\n            .then(function (r) { return r.json(); }).then(function (r) { if (r && r.ok && r.fresh) { var a = document.getElementById('apgRowGrowth'); if (a) a.innerHTML = 'Your Growth <span class=\"new\">· 1 new</span>'; } }).catch(function () {});\n        }\n      }\n    } else if (!inner.querySelector('.apb-foot')) { var f = document.createElement('div'); f.className = 'apb-foot'; inner.appendChild(f); }\n    align(band, inner); window.addEventListener('resize', function () { align(band, inner); });\n    setTimeout(function () { align(band, inner); }, 1200);\n  }\n  /* the band's words start where the page's own content starts, measured, so the two edges never drift apart */\n  function align(band, inner) {\n    var list = Array.prototype.slice.call(document.querySelectorAll(here === 'page' ? '#apHome .ap-why, #apHome #apPrimaryRow, #apHome .ap-sec' : '#apDesk .wrap'));\n    var ref = null; for (var i = 0; i < list.length; i++) { var r = list[i].getBoundingClientRect(); if (list[i].offsetParent !== null && r.width > 0) { ref = list[i]; break; } }\n    if (!ref) return;\n    var want = ref.getBoundingClientRect().left, have = band.getBoundingClientRect().left;\n    var pad = Math.round(want - have);\n    if (!(pad > 0) || pad > window.innerWidth / 2) return;\n    inner.style.setProperty('max-width', 'none', 'important'); inner.style.setProperty('padding-left', pad + 'px', 'important'); inner.style.setProperty('padding-right', pad + 'px', 'important');\n  }\n  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', place); else place();\n})();\n";

/* ═══════════════════════════════ build 4 · For his road (served at ?file=road.js, actions road / road_open / road_word / road_answer) ═══════════════════════════════
 * The same shelf, a second door: on a man's Your Page, one released piece a week chosen for where he is on the road, with the man's
 * version of the entry (Entries X key words · Y what it means for your road · Z one thing to do · AA the question back), the two words
 * This met me / Not for me, and a question back whose answer goes to the Front Desk as a card and is read by a person before anything
 * else happens with it (RE14). Who gets it: the Learners tab (the Room tab's men on their own, anyone else by hand). The week turns on
 * the man's room's day (from the Rooms tab, never a weekday in this file) or, with no room, on the weekday his door opened.
 * Nothing of the room is shown, nothing is mailed, and the engine reads what he opens, presses and types here — never his saved writing. */
var ROAD_BUILD = '4.0.2';
var LC = { email: 1, name: 2, lwid: 3, how: 4, room: 5, course: 6, door: 7, freeUntil: 8, status: 9, firstSeen: 10, lastSeen: 11, pieces: 12, note: 13 };
var LC_HEAD = ['email', 'name', 'lw id', 'how', 'room', 'course', 'door (yyyy-mm-dd)', 'free until', 'status', 'first seen', 'last seen', 'pieces', 'note'];
var RC = { when: 1, email: 2, entryId: 3, what: 4, text: 5, week: 6, build: 7 };
var RC_HEAD = ['when', 'email', 'entry id', 'what', 'text', 'week (its first day)', 'build'];
var CONFIG_4 = [
  ['road door opens', '2026-11-04', 'build 4: the day the section shows for a man who came from a room (a Learners row can carry its own door)'],
  ['road free until', '2026-12-31', 'build 4: the last free day for the beta men; the foot of the section says so'],
  ['road price', '$19 a month from January 1, 2027', 'build 4: the words after the free stretch; the offer itself is built in the site builder in December'],
  ['road review window', 'two days', 'build 4: the promise the page makes about an answer being read by a person; the desk card is the reading'],
  ['road model', 'claude-sonnet-4-5', 'build 4: the model that writes the man\'s version of an entry (Entries X–AA) each morning; John reads it before he releases'],
  ['road lines per day', '10', 'build 4: the most entries whose man\'s lines are written in one morning'],
  ['road lead', '', 'build 4: the line under the section\'s heading; blank uses the page\'s own'],
  ['road foot', '', 'build 4: the line at the foot of the section; blank builds it from "road free until" and "road price"'],
  ['road daily', '6', 'build 4: the hour (Central, 24-hour for the script only) roadDaily runs: lines written, the week\'s pieces given, the Room tab read']
];
var RULES_4 = {
  'RE14': ['For his road: nothing reaches a man\'s page that our team has not released. Every answer he sends is read by a person before anything else happens with it (a card on the Front Desk, Done when read). The engine reads what he opens, presses and types into its box, never his saved writing. Nothing of the room is shown on his page and nothing is mailed to him. The question back carries the limit of confidentiality and the adults line at its foot (When Someone Tells You, sections 4 and 8).', 'build 4']
};
var STANDARD_4 = {
  'key words': ['key words', 'the course key words, terms and teaching concepts this entry touches, comma-separated, as the courses name them; the man\'s piece is chosen against his course week and these', 'build 4 (X)'],
  'for his road': ['for his road', 'what it means for your road, written to the man: two to four plain sentences that carry the course\'s own words for the week it serves and the verse, no names, never "brother"', 'build 4 (Y)'],
  'one thing to do': ['one thing to do', 'one thing he can do this week before his room meets, one or two sentences, imperative, plain', 'build 4 (Z)'],
  'question back': ['question back', 'one question the piece asks him back, answerable in a few lines, about his own week, never about another person by name', 'build 4 (AA)']
};

function applyBuild4() { PropertiesService.getScriptProperties().deleteProperty('b4'); ensureBuild4_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild4_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b4') === '1') return;
  var did = [];
  var en = ss.getSheetByName('Entries');
  if (en) { widen_(en, EC.question2); var eh = en.getRange(1, EC.keywords, 1, 4).getValues()[0]; if (!eh[0]) { en.getRange(1, EC.keywords, 1, 4).setValues([['key words', 'for his road', 'one thing to do', 'question back']]); did.push('Entries X–AA'); } }
  if (!ss.getSheetByName('Learners')) { var le = ss.insertSheet('Learners'); le.getRange(1, 1, 1, LC_HEAD.length).setValues([LC_HEAD]); le.setFrozenRows(1); did.push('Learners tab'); }
  if (!ss.getSheetByName('Road')) { var ro = ss.insertSheet('Road'); ro.getRange(1, 1, 1, RC_HEAD.length).setValues([RC_HEAD]); ro.setFrozenRows(1); did.push('Road tab'); }
  var cfg = readConfig_(ss);
  CONFIG_4.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  var ru = ss.getSheetByName('Rules');
  if (ru) {
    var rv = ru.getRange(1, 1, Math.max(1, ru.getLastRow()), 1).getValues(), seen = {};
    for (var i = 0; i < rv.length; i++) { var k = String(rv[i][0] || '').trim(); if (RULES_4[k]) { ru.getRange(i + 1, 2, 1, 2).setValues([RULES_4[k]]); seen[k] = 1; } }
    Object.keys(RULES_4).forEach(function (k) { if (!seen[k]) { ru.appendRow([k, RULES_4[k][0], RULES_4[k][1]]); did.push(k + ' added'); } });
  }
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), have = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_4[kk]) have[kk] = 1; }
    Object.keys(STANDARD_4).forEach(function (key) { if (!have[key]) { st.appendRow(STANDARD_4[key]); did.push('Standard ' + key); } });
  }
  props.setProperty('b4', '1');
  log_(ss, 'build 4', 'made: ' + (did.join(', ') || 'nothing new'));
}
function roadTrigger_(cfg) {
  ScriptApp.getProjectTriggers().forEach(function (t) { if (t.getHandlerFunction() === 'roadDaily') ScriptApp.deleteTrigger(t); });
  var hour = parseInt(cfg['road daily'], 10); if (isNaN(hour) || hour < 0 || hour > 23) hour = 6;
  ScriptApp.newTrigger('roadDaily').timeBased().atHour(hour).everyDays(1).inTimezone(RE_TZ).create();
  return hour;
}

/* ---- the morning: lines written, the Room tab's men on Learners, the week's piece given ---- */
function roadDaily() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  ensureBuild4_(ss);
  var wrote = roadWriteLines_(ss, cfg, toInt_(cfg['road lines per day'], 10));
  var added = roadSyncRoom_(ss, cfg);
  var given = 0;
  learners_(ss).forEach(function (L) {
    if (L.status !== 'open') return;
    try { var r = roadFor_(ss, cfg, L, true); if (r && r.givenNow) given++; } catch (e) { log_(ss, 'road', 'daily: ' + L.email, String(e && e.code || e).slice(0, 120)); }
  });
  log_(ss, 'road', 'daily', wrote + ' entries given their lines · ' + added + ' learners added from the Room tab · ' + given + ' pieces given today');
}
/** The Room tab's men become Learners rows on their own (how = room); a row already there is left as it is. */
function roadSyncRoom_(ss, cfg) {
  var added = 0;
  try {
    var sh = deskSheet_().getSheetByName('Room'); if (!sh || sh.getLastRow() < 2) return 0;
    var H = headerIndex_(sh), data = sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues();
    var have = {}; learners_(ss).forEach(function (L) { have[L.email] = 1; });
    var le = ss.getSheetByName('Learners');
    data.forEach(function (r) {
      var email = String(r[H['email']] || '').toLowerCase().trim(); if (!email || have[email]) return;
      var room = String(r[H['room']] || '').trim();
      le.appendRow([email, String(r[H['name']] || '').trim(), '', 'room', room, roomCourse_(room), cfg['road door opens'] || '', cfg['road free until'] || '', 'open', stamp_(new Date()), '', 0, 'from the Room tab']);
      have[email] = 1; added++;
    });
  } catch (e) { log_(ss, 'road', 'room sync failed', String(e).slice(0, 160)); }
  return added;
}
function roomCourse_(room) { try { var r = roomRow_({ room: room }); return r ? r.room.split(/\s+[—–-]\s+/)[0].trim() : ''; } catch (e) { return ''; } }
function learners_(ss) {
  var sh = ss.getSheetByName('Learners'); if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, LC.note).getValues(), out = [];
  data.forEach(function (r, i) {
    var email = String(r[LC.email - 1] || '').toLowerCase().trim(); if (!email) return;
    out.push({ row: i + 2, email: email, name: String(r[LC.name - 1] || '').trim(), lwid: String(r[LC.lwid - 1] || '').trim(), how: String(r[LC.how - 1] || ''), room: String(r[LC.room - 1] || '').trim(), course: String(r[LC.course - 1] || '').trim(),
      door: isoDay_(r[LC.door - 1]), freeUntil: isoDay_(r[LC.freeUntil - 1]), status: String(r[LC.status - 1] || 'open').toLowerCase().trim() || 'open', pieces: Number(r[LC.pieces - 1] || 0) || 0 });
  });
  return out;
}
/** Who is asking: the site's account as the page read it (email and LearnWorlds id). A Learners row binds to the first id it sees; another id with that email is turned away. */
function learnerFor_(ss, cfg, b) {
  var email = String(b.email || '').toLowerCase().trim(), lwid = String(b.lwid || '').trim();
  if (!email || email.indexOf('@') < 0) throw { code: 'no_learner' };
  var L = learners_(ss).filter(function (x) { return x.email === email; })[0];
  if (!L) {
    roadSyncRoom_(ss, cfg);
    L = learners_(ss).filter(function (x) { return x.email === email; })[0];
    if (!L) throw { code: 'no_learner' };
  }
  if (L.status !== 'open') throw { code: 'closed' };
  var sh = ss.getSheetByName('Learners');
  if (L.lwid && lwid && L.lwid !== lwid) { log_(ss, 'road', 'id did not match for ' + email, lwid.slice(0, 12)); throw { code: 'no_learner' }; }
  if (!L.lwid && lwid) { sh.getRange(L.row, LC.lwid).setValue(lwid); L.lwid = lwid; }
  if (!L.name && b.name) { sh.getRange(L.row, LC.name).setValue(String(b.name).trim().slice(0, 80)); L.name = String(b.name).trim(); }
  sh.getRange(L.row, LC.lastSeen).setValue(stamp_(new Date()));
  return L;
}
function roadDoor_(cfg, L) { return L.door || isoDay_(cfg['road door opens']) || ''; }
/** The man's week: it turns on his room's day (Rooms tab) or, with no room, on the weekday his door opened; the first week starts at the door.
 *  4.0.2: "his week" is the night he just sat in (John, Oct 22); before the first night it is the week he is preparing. */
function roadWeek_(cfg, L) {
  var today = today_(), door = roadDoor_(cfg, L);
  var r = L.room ? roomRow_({ room: L.room }) : null;
  var wd = r ? roomWeekday_(r) : (door ? utcNoon_(door).getUTCDay() : utcNoon_(today).getUTCDay());
  var start = addDays_(today, -((utcNoon_(today).getUTCDay() - wd + 7) % 7));
  if (door && start < door) start = door;
  var out = { start: start, label: '', weekNum: 0, nextNum: 0, course: L.course || (r ? r.room.split(/\s+[—–-]\s+/)[0].trim() : '') };
  if (r) {
    var n = nightOnOrBefore_(r, today) || nightOnOrAfter_(r, today);
    if (n && n.week) { out.weekNum = Number(n.week) || 0; out.nextNum = out.weekNum && r.weeks && out.weekNum < r.weeks ? out.weekNum + 1 : 0; out.label = out.course + ' · Week ' + n.week + (r.weeks ? ' of ' + r.weeks : ''); }
    else if (out.course) out.label = out.course;
  }
  return out;
}
function roadRows_(ss, email) {
  var sh = ss.getSheetByName('Road'); if (!sh || sh.getLastRow() < 2) return [];
  var data = sh.getRange(2, 1, sh.getLastRow() - 1, RC.build).getValues(), out = [];
  data.forEach(function (r) { if (String(r[RC.email - 1] || '').toLowerCase().trim() !== email) return; out.push({ when: r[RC.when - 1], id: String(r[RC.entryId - 1] || ''), what: String(r[RC.what - 1] || ''), text: String(r[RC.text - 1] || ''), week: isoDay_(r[RC.week - 1]) }); });
  return out;
}
function roadRow_(ss, email, id, what, text, week) { ss.getSheetByName('Road').appendRow([stamp_(new Date()), email, id, what, String(text || '').slice(0, 4000), week || '', ROAD_BUILD]); }
function dayLabel_(v) { var d = v instanceof Date ? v : new Date(Date.parse(String(v))); return isNaN(d) ? '' : Utilities.formatDate(d, RE_TZ, 'MMM d'); }
/** Choose this week's piece (4.0.2): released entries with the man's lines, never one he has had; fitted to his week first, then earlier weeks
 *  nearest first, then "any"; an entry fitted to a later week is never chosen. When two fit alike, a lane he has not had lately wins (the whole
 *  man across weeks: spirit, soul and body in turn, never named on the page); then the newest. The fit is Entries AB, a value the writer sets. */
function roadChoose_(ss, week, had, recentLanes) {
  // the claim reaches the man as written, so a claim in the facilitator's chair keeps its entry off the man's road (4.0.2; a "claim for him" column is the next step)
  var chair = /\bfacilitat|\b(a man|someone|anyone|the men) in (your|his) room\b|\bhis room\b|\btell the men\b|\bthe men whether\b/i;
  var pool = entries_(ss).filter(function (e) { return e.status === 'released' && e.road && e.todo && e.question2 && !had[e.id] && !chair.test(e.claim); });
  if (!pool.length) return null;
  var w = week.weekNum || 0, lanes = lanes_(ss), recent = recentLanes || [];
  function fit(e) {
    var v = String(e.week || '').toLowerCase().trim();
    var num = /^\d+$/.test(v) ? Number(v) : 0;
    if (!w) return num ? 1 : 1.5;                 // no room, no week: nothing is "later"; an untied piece first
    if (!num) return 1;                            // "any" (or not yet written): after the fitted ones
    if (num === w) return 3;
    if (num < w) return 2 - (w - num) * 0.01;      // earlier, nearest first
    return -1;                                     // later: never
  }
  pool = pool.filter(function (e) { return fit(e) >= 0; });
  if (!pool.length) return null;
  function score(e) { var f = fit(e); var lane = laneOf_(voiceOf_(e.source).toLowerCase(), lanes); if (recent.indexOf(lane) >= 0) f -= 0.5; return f; }
  pool.sort(function (a, b) { return score(b) - score(a) || b.written.localeCompare(a.written); });
  return pool[0];
}
/** The section's data for one learner; gives this week's piece if none is given yet (byMorning: the daily run, so the Log says so). */
function roadFor_(ss, cfg, L, byMorning) {
  var today = today_(), door = roadDoor_(cfg, L);
  if (door && today < door) return { ok: false, error: 'not_open' };
  var week = roadWeek_(cfg, L);
  var rows = roadRows_(ss, L.email), had = {}, givenNow = false;
  var given = rows.filter(function (r) { return r.what === 'given'; });
  given.forEach(function (r) { had[r.id] = 1; });
  var all = entries_(ss), byId = {}; all.forEach(function (x) { byId[x.id] = x; });
  var lanes = lanes_(ss);
  var cur = given.filter(function (r) { return r.week === week.start; }).sort(function (a, b) { return String(b.when).localeCompare(String(a.when)); })[0] || null;
  var e = null;
  if (cur) e = byId[cur.id] || null;
  if (!e) {
    var recentLanes = given.slice().sort(function (a, b) { return String(b.when).localeCompare(String(a.when)); }).slice(0, 3).map(function (r) { return byId[r.id] ? laneOf_(voiceOf_(byId[r.id].source).toLowerCase(), lanes) : ''; });
    e = roadChoose_(ss, week, had, recentLanes);
    if (!e) return { ok: false, error: 'no_piece' };
    roadRow_(ss, L.email, e.id, 'given', byMorning ? 'the morning run' : 'on his page', week.start);
    try { var le = ss.getSheetByName('Learners'); le.getRange(L.row, LC.pieces).setValue((L.pieces || 0) + 1); } catch (x) {}
    cur = { id: e.id, when: new Date(), week: week.start }; givenNow = true; rows = roadRows_(ss, L.email);
  }
  var mine = rows.filter(function (r) { return r.id === e.id; });
  var opened = mine.filter(function (r) { return r.what === 'opened'; })[0];
  var word = mine.filter(function (r) { return r.what === 'met' || r.what === 'not'; }).pop();
  var ans = mine.filter(function (r) { return r.what === 'answer'; }).pop();
  var whole = !!(e.beside && e.move);
  var piece = { id: e.id, voice: voiceOf_(e.source), kind: e.kind, cost: String(e.cost || '').split(/[,·]/)[0].trim(), minutes: minutesLine_(e.cut), link: e.link, minuteLink: e.link,
    claim: e.claim, quotes: whole ? quotesOf_(e.quotes) : [], wordsComing: !e.deepened && daysAgo_(e.written) <= 1 && !/^none/.test(e.transcript),
    road: e.road, todo: e.todo, question: e.question2, given: dayLabel_(cur.when), isNew: !opened && cur.week === week.start, opened: opened ? dayLabel_(opened.when) : '', word: word ? word.what : '',
    answer: ans ? { text: ans.text, sent: dayLabel_(ans.when) } : null };
  // his road so far: every earlier piece with the word he gave it and the line he wrote (4.1b)
  var earlierGiven = given.filter(function (r) { return r.id !== e.id && byId[r.id]; }).sort(function (a, b) { return String(b.when).localeCompare(String(a.when)); });
  var road = earlierGiven.slice(0, 24).map(function (r) {
    var x = byId[r.id], w = rows.filter(function (q) { return q.id === r.id && (q.what === 'met' || q.what === 'not'); }).pop();
    var a = rows.filter(function (q) { return q.id === r.id && q.what === 'answer'; }).pop();
    return { id: x.id, given: dayLabel_(r.when), claim: x.claim, voice: voiceOf_(x.source), word: w ? w.what : '', line: a ? a.text : '', link: x.link };
  });
  // the line from his road: his latest answer on an earlier piece, in his own words
  var last = null;
  for (var i = 0; i < earlierGiven.length && !last; i++) {
    var la = rows.filter(function (q) { return q.id === earlierGiven[i].id && q.what === 'answer'; }).pop();
    if (la && la.text) last = { text: String(la.text).slice(0, 280), when: daysAgo_(dayOf_(la.when)) <= 10 ? 'Last week' : 'On ' + dayLabel_(la.when) };
  }
  // the questions that return: the same question answered more than once, his answers side by side in order
  var byQ = {};
  rows.filter(function (q) { return q.what === 'answer' && byId[q.id] && byId[q.id].question2; }).forEach(function (q) {
    var key = byId[q.id].question2.trim(); (byQ[key] = byQ[key] || []).push({ when: dayLabel_(q.when), text: String(q.text).slice(0, 400), at: String(q.when) });
  });
  var returns = Object.keys(byQ).filter(function (k) { return byQ[k].length > 1; }).map(function (k) { return { question: k, answers: byQ[k].sort(function (a, b) { return a.at.localeCompare(b.at); }).map(function (a) { return { when: a.when, text: a.text }; }) }; });
  // how this works: in full the first time he opens the section, afterward one line he can open (the Road tab remembers; never written by the morning run)
  var how = rows.some(function (q) { return q.what === 'how'; }) ? 'line' : 'full';
  if (how === 'full' && !byMorning) { try { roadRow_(ss, L.email, e.id, 'how', 'shown', week.start); } catch (xh) {} }
  var free = isoDay_(L.freeUntil || cfg['road free until']), price = cfg['road price'] || '';
  var fine = cfg['road foot'] || ('You are among the first men to use this, and what you answer and press is shaping it.' + (free ? ' Free through ' + fmtDay_(free, 'MMMM d') + (price ? ', then ' + price.replace(/\s+from\s+.*$/, '') : '') + '.' : '') + ' Nothing reaches your page that our team has not read first, and nothing is mailed to you.');
  return { ok: true, build: ROAD_BUILD, today: dayLabel_(new Date()), review: cfg['road review window'] || 'two days', week: { start: week.start, label: week.label }, lead: cfg['road lead'] || '', fine: fine,
    pic: String(cfg['road picture'] || '').trim(), how: how, last: last, piece: piece, road: road, returns: returns, givenNow: givenNow };
}
function minutesLine_(cut) { var m = String(cut || '').match(/about\s+([a-z\-]+|\d+)\s+minutes?\.?\s*$/i); return m ? 'about ' + m[1] + ' minutes' : ''; }
function roadCall_(b) {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), cfg = readConfig_(ss);
  var action = String(b.action || '');
  var L = learnerFor_(ss, cfg, b);
  if (action === 'road') return roadFor_(ss, cfg, L, false);
  var id = String(b.id || ''); if (!id) throw { code: 'no_entry' };
  var rows = roadRows_(ss, L.email), mine = rows.filter(function (r) { return r.id === id; });
  if (!mine.filter(function (r) { return r.what === 'given'; }).length) throw { code: 'not_his' };
  if (action === 'road_open') { if (!mine.filter(function (r) { return r.what === 'opened'; }).length) roadRow_(ss, L.email, id, 'opened', '', ''); return { ok: true }; }
  if (action === 'road_word') { var w = String(b.word || ''); if (w !== 'met' && w !== 'not') throw { code: 'bad_word' }; roadRow_(ss, L.email, id, w, '', ''); return { ok: true }; }
  if (action === 'road_answer') {
    var text = String(b.text || '').trim().slice(0, 2000); if (!text) throw { code: 'empty' };
    if (mine.filter(function (r) { return r.what === 'answer'; }).length) throw { code: 'answered' };
    roadRow_(ss, L.email, id, 'answer', text, '');
    var e = findEntry_(ss, id);
    roadAnswerCard_(ss, cfg, L, e, text);
    return { ok: true, sent: dayLabel_(new Date()) };
  }
  throw { code: 'unknown_action' };
}
/** Every answer is read by a person before anything else happens with it: one card on the desk owner's lane, Done when read (RE14). */
function roadAnswerCard_(ss, cfg, L, e, text) {
  try {
    var sh = deskSheet_().getSheetByName('Actions'); var H = headerIndex_(sh), data = sh.getDataRange().getValues();
    var key = 'hisroad:answer:' + e.id + ':' + L.email;
    for (var i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) return;
    var first = (L.name || L.email).split(/\s+/)[0];
    var row = []; row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = cfg['desk owner'] || 'John';
    row[H['do this']] = 'Read his answer — ' + first; row[H['for']] = 'For his road · read first';
    row[H['because']] = 'The piece: ' + e.claim + ' (' + voiceOf_(e.source) + ').\nThe question: ' + e.question2 + '\nHis answer: “' + text + '”\n' + (L.name || L.email) + (L.room ? ' · ' + L.room : '');
    row[H['link']] = ''; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['done at']] = ''; row[H['rule']] = 'RE14';
    for (var c = 0; c < sh.getLastColumn(); c++) if (row[c] === undefined) row[c] = '';
    sh.appendRow(row);
  } catch (x) { log_(ss, 'road', 'answer card not written for ' + L.email, String(x).slice(0, 160)); }
}

/* ---- the man's version of an entry: Entries X–AB, written each morning so John reads it before he releases (4.0.2: read back before it is written) ---- */
function roadWriteLines_(ss, cfg, max) {
  var key = claudeKey_(); if (!key) { log_(ss, 'road', 'lines not written', 'no CLAUDE_KEY script property'); return 0; }
  var todo = entries_(ss).filter(function (e) { return (e.status === 'released' || e.status === 'candidate') && (!e.road || !e.todo || !e.question2 || !e.keywords || !e.week); });
  todo.sort(function (a, b) { return (b.status === 'released' ? 1 : 0) - (a.status === 'released' ? 1 : 0) || b.written.localeCompare(a.written); });
  var n = 0, map = courseMap_(ss);
  todo.slice(0, Math.max(1, max || 10)).forEach(function (e) {
    if (Date.now() - RE_START > 240000) return;
    var lines = roadLines_(cfg, key, e, map);
    if (!lines) return;
    ss.getSheetByName('Entries').getRange(e.row, EC.keywords, 1, 5).setValues([[lines.keywords, lines.road, lines.todo, lines.question, lines.week]]);
    n++;
  });
  if (n) log_(ss, 'road', 'lines written', n + ' entries (X–AB)');
  return n;
}
/** Every released entry's lines rewritten under the current rules (run by hand after an install that changes the writer). */
function roadRewriteAll() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), sh = ss.getSheetByName('Entries');
  entries_(ss).forEach(function (e) { if (e.status === 'released' || e.status === 'candidate') sh.getRange(e.row, EC.road, 1, 4).clearContent(); });
  return roadWriteLines_(ss, readConfig_(ss), 50);
}
/** The Course map tab (4.0.2): course, unit, name, question, practice, sentence, piece introduced, returns. Seeded from the Front Desk Weeks tab; the
 *  week's own words are filled by hand or by a later lift from the course. Returns { rows: [...], text: "<the list the writer reads>", names: [...], pieces: [...] }. */
var CM_HEAD = ['course', 'unit (week or section)', 'name (the course\'s own)', 'the question we ask that week', 'the practice we ask before the next night', 'the sentence the week turns on', 'piece introduced (the chronicle\'s name)', 'returns (yes when the question comes back later in the road)'];
function courseMap_(ss) {
  var out = { rows: [], text: '', names: [], pieces: [] };
  try {
    var sh = ss.getSheetByName('Course map');
    if (sh && sh.getLastRow() >= 2) {
      sh.getRange(2, 1, sh.getLastRow() - 1, CM_HEAD.length).getValues().forEach(function (r) {
        var row = { course: String(r[0] || '').trim(), unit: String(r[1] || '').trim(), name: String(r[2] || '').trim(), question: String(r[3] || '').trim(), practice: String(r[4] || '').trim(), sentence: String(r[5] || '').trim(), piece: String(r[6] || '').trim(), returns: /^y/i.test(String(r[7] || '')) };
        if (row.course && row.unit) out.rows.push(row);
      });
    }
    if (!out.rows.length) {
      var wk = deskSheet_().getSheetByName('Weeks');
      if (wk && wk.getLastRow() >= 2) {
        var H = headerIndex_(wk);
        wk.getRange(2, 1, wk.getLastRow() - 1, wk.getLastColumn()).getValues().forEach(function (r) {
          var w = String(r[H['week']] || '').trim(), t = String(r[H['what opens']] || '').trim(), p = String(r[H['piece introduced']] || '').trim();
          if (w && t) out.rows.push({ course: 'Breaking Free', unit: w, name: t, question: '', practice: '', sentence: '', piece: p, returns: false });
        });
      }
    }
  } catch (e) {}
  out.rows.forEach(function (r) {
    if (r.name) out.names.push(r.name);
    if (r.piece) out.pieces.push(r.piece);
    out.text += (out.text ? '\n' : '') + r.course + ' · Week ' + r.unit + ': ' + r.name + (r.piece ? ' (story work that week: ' + r.piece + ')' : '') + (r.question ? '\n   the question we ask that week: ' + r.question : '') + (r.practice ? '\n   the practice before the next night: ' + r.practice : '') + (r.sentence ? '\n   the sentence the week turns on: ' + r.sentence : '');
  });
  return out;
}
var YOUR_STORY_PIECES = ['Where I Am From', 'Write a Lament', 'Asked of Me', 'What Kind of Light', 'Set a Stone', 'Where Are You', 'The Road I Walked', 'Ending Well'];
/** The read-back (4.0.2): the reasons a set of lines fails, as one string, or '' when it passes. */
function roadLinesFail_(L, map) {
  var all = [L.road, L.todo, L.question].join(' \n '), why = [];
  if (/\bbrother\b|\bnext man\b|\bstranger\b/i.test(all)) why.push('a banned word (brother, next man, stranger)');
  if (/\bweek\s*\d+\b|\bweeks?\s+\d+\s+and\s+\d+\b/i.test(all)) why.push('a week number in the lines');
  var names = (map && map.names || []).filter(function (t) { return t.length > 3; });
  for (var i = 0; i < names.length; i++) { var t = names[i].replace(/^(week\s*\d+\s*[—–:-]\s*)/i, '').replace(/[^\w\s']/g, ' ').trim(); if (t.length > 3 && new RegExp('\\b' + t.replace(/\s+/g, '\\s+') + '\\b', 'i').test(all)) { why.push('a week title in the lines (' + names[i] + ')'); break; } }
  if (/\b(a man|someone|anyone|one man) in your (room|group)\b|\byour room needs\b|\bwhose story you have heard\b|\bfacilitat|\blead(s|ing)? the room\b|\bthe men you (serve|lead|guide)\b|\bas (a|the|their) (leader|facilitator)\b|\bwhen a man needs a hard word\b|\bin the room when a man\b/i.test(all)) why.push('the facilitator\'s chair (a line about leading, reading or correcting the men in his room)');
  var pieces = YOUR_STORY_PIECES.concat(map && map.pieces || []);
  for (var j = 0; j < pieces.length; j++) {
    var p = pieces[j]; if (!p || p.length < 4) continue;
    var re = new RegExp('\\b' + p.replace(/[^\w\s']/g, ' ').trim().replace(/\s+/g, '\\s+') + '\\b', 'i');
    if (re.test(L.todo) && !/^write\b/i.test(p) && !new RegExp('\\bwrite\\b[^.]{0,40}' + p.replace(/[^\w\s']/g, ' ').trim().replace(/\s+/g, '\\s+'), 'i').test(L.todo)) { why.push('the one thing assumes ' + p + ' is already written; say the step first ("' + (/^write\b/i.test(p) ? p : 'Write ' + p) + ', about ten minutes, then…")'); break; }
  }
  if (/\bWhere I'm From\b/i.test(all)) why.push('the piece is named "Where I Am From" on the chronicle');
  if (/\bwrite\s+write\b/i.test(all)) why.push('a doubled word ("Write Write")');
  return why.join('; ');
}
/** Every entry's lines read back against the standard as it stands now; the ones that fail are cleared and written again (run by hand after a rule changes). */
function roadRewriteFlagged() {
  var ss = SpreadsheetApp.openById(RE_SHEET_ID), sh = ss.getSheetByName('Entries'), map = courseMap_(ss), bad = [];
  entries_(ss).forEach(function (e) {
    if (!(e.status === 'released' || e.status === 'candidate') || !(e.road && e.todo && e.question2)) return;
    var why = roadLinesFail_({ road: e.road, todo: e.todo, question: e.question2 }, map);
    if (why) { bad.push(e.id + ': ' + why); sh.getRange(e.row, EC.road, 1, 4).clearContent(); }
  });
  log_(ss, 'road', 'lines read back against the standard', bad.length ? bad.join(' | ') : 'every entry passes');
  return bad.length ? roadWriteLines_(ss, readConfig_(ss), 50) : 0;
}
function roadLines_(cfg, key, e, map) {
  var system = 'You write the version of a research entry that a man on the road reads on his own page at Ancient Path Biblical Coaching, a Christian men\'s coaching practice. He is in a group course (twelve weeks; his room meets once a week) or did one-on-one work. He is not a facilitator and never leads the room. ' +
    'Voice: plain and clear, not formal, not folksy; American spelling; never the word "brother"; never a person\'s name; say "our team", never two founders\' names; never "the next man" or "a stranger"; Scripture in ESV wording with its reference. Keep the enemy to the minimum. Never write an out for not doing the work. ' +
    'Rules that fail the read if broken: (1) Write to him about his own road only. Never about leading, reading, correcting or helping the men in his room as their leader; never "a man in your room needs", "whose story you have heard". His own practice of calling another man, or asking one man for help, is his road and may be named. (2) Never name a course week by number or by title in the three lines (not "Week 9", not "Roots Run Deep"): name the theme in the course\'s own words. The week an entry serves goes in the "week" field only. (3) When the course map gives the week\'s own question, practice or sentence, lift those words verbatim; do not paraphrase them. (4) The one thing to do needs nothing but the piece he just read and his own week. If it names a Your Story piece (Where I Am From, Write a Lament, Asked of Me, What Kind of Light, Set a Stone, Where Are You), it says the step first and in order: "Write Where I Am From, about ten minutes, then …", using the piece\'s name exactly as given. ' +
    'Reply as JSON only: {"keywords": "<the course key words, terms and teaching concepts this entry touches, comma-separated, as the course names them>", "week": "<the one course week from the map this entry serves best, as a number, or \'any\' when it is not tied to one week>", "road": "<What it means for your road: two to four sentences to him, the theme in the course\'s own words, what the claim means for his week, and the verse with its reference. No quotes from the source here. No week number or title.>", "todo": "<One thing to do this week: one or two sentences, imperative, something he can do before his room meets.>", "question": "<One question back: one sentence he can answer in a few lines about his own week; answerable without naming another person.>"}';
  var mens = String(e.audience || '').match(/men:\s*([^·]+)/i);
  var user = 'The entry:\nClaim: ' + e.claim + '\nSource: ' + e.source + '\nPlace on the road: ' + e.place + (mens ? '\nThe line written for men: ' + mens[1].trim() : '') + '\nRead against the text: ' + e.beside + '\nAlready ours: ' + e.ours + '\nIn their words: ' + (e.quotes || '(none yet)') + '\n\nThe course map, in the course\'s own words:\n' + ((map && map.text) || '(not available)');
  var ss = SpreadsheetApp.openById(RE_SHEET_ID);
  var unlabel = function (t) { return String(t || '').trim().replace(/^(what it means for your road|one thing to do( this week)?|(one |a )?question back)\s*[:—\-]\s*/i, '').trim(); };
  var attempt = function (extra) {
    var res = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', { method: 'post', contentType: 'application/json', muteHttpExceptions: true, headers: { 'x-api-key': key, 'anthropic-version': '2023-06-01' },
      payload: JSON.stringify({ model: cfg['road model'] || 'claude-sonnet-4-5', max_tokens: 1400, system: system, messages: [{ role: 'user', content: user + (extra ? '\n\nYour last answer failed the read: ' + extra + '. Write it again, keeping every rule.' : '') }] }) });
    if (res.getResponseCode() !== 200) { log_(ss, 'road', 'lines: Claude ' + res.getResponseCode() + ' for ' + e.id, String(res.getContentText() || '').slice(0, 200)); return null; }
    var j = JSON.parse(res.getContentText()); var txt = (j.content || []).map(function (c) { return c && typeof c.text === 'string' ? c.text : ''; }).join('\n');
    var m = txt.match(/\{[\s\S]*\}/); var ans = m ? JSON.parse(m[0]) : null;
    if (!ans || !ans.road || !ans.todo || !ans.question) return null;
    var wk = String(ans.week || '').toLowerCase().trim(); wk = /^\d+$/.test(wk) ? wk : 'any';
    return { keywords: String(ans.keywords || '').slice(0, 300), road: unlabel(ans.road).slice(0, 900), todo: unlabel(ans.todo).slice(0, 400), question: unlabel(ans.question).slice(0, 300), week: wk };
  };
  try {
    var titles = (map && map.names || []).map(function (t) { return t.replace(/^(week\s*\d+\s*[—–:-]\s*)/i, '').trim(); }).filter(Boolean);
    var avoid = titles.length ? ' These are the course\'s week titles; never write any of them, in whole or in part, anywhere in the three lines (say what the week teaches in other words): ' + titles.join(' · ') + '.' : '';
    var L = attempt(''); if (!L) return null;
    var why = roadLinesFail_(L, map), tries = 0;
    while (why && tries < 2) { tries++; log_(ss, 'road', 'lines read back and rewritten for ' + e.id + ' (' + tries + ')', why); L = attempt(why + avoid); if (!L) return null; why = roadLinesFail_(L, map); }
    if (why) { log_(ss, 'road', 'lines failed the read three times for ' + e.id + ' (left empty; not given)', why); return null; }
    return L;
  } catch (x) { log_(ss, 'road', 'lines failed for ' + e.id, String(x && (x.code || x.message) || x).slice(0, 160)); return null; }
}
function roadLinesNow() { var ss = SpreadsheetApp.openById(RE_SHEET_ID); ensureBuild4_(ss); ensureBuild402_(ss); return roadWriteLines_(ss, readConfig_(ss), 20); }

/* ═══════════ build 4.0.2 · the sheet: Entries AB, the Course map tab, the picture, the Standard rows ═══════════ */
var CONFIG_402 = [
  ['road picture', 'https://raw.githubusercontent.com/johnlsherrod/ancient-path/main/pictures/threshing-floor.jpg', 'build 4.0.2: the picture at the head of For your road (the threshing floor, house style, in the repo); blank = no picture']
];
var STANDARD_402 = {
  'for his road': ['for his road', 'what it means for your road, written to the man about his own road: two to four plain sentences that name the theme in the course\'s own words (never a week number or title) and carry the verse; never about leading, reading or correcting the men in his room; no names, never "brother" (4.0.2)', 'build 4.0.2 (Y)'],
  'one thing to do': ['one thing to do', 'one thing he can do this week before his room meets, one or two sentences, imperative, plain; it needs nothing but the piece and his week, and if it names a Your Story piece it says the step first ("Write Where I Am From, about ten minutes, then…") (4.0.2)', 'build 4.0.2 (Z)'],
  'week served': ['week served', 'the one course week this entry serves best, a number, or "any" when it is not tied to a week; set by the morning writer, read by the choosing step (his week or earlier, never later) (4.0.2)', 'build 4.0.2 (AB)']
};
function applyBuild402() { PropertiesService.getScriptProperties().deleteProperty('b402'); ensureBuild402_(SpreadsheetApp.openById(RE_SHEET_ID)); }
function ensureBuild402_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b402') === '1') return;
  var did = [];
  var en = ss.getSheetByName('Entries');
  if (en) { widen_(en, EC.week); if (!en.getRange(1, EC.week).getValue()) { en.getRange(1, EC.week).setValue('week served'); did.push('Entries AB'); } }
  if (!ss.getSheetByName('Course map')) {
    var cm = ss.insertSheet('Course map'); cm.getRange(1, 1, 1, CM_HEAD.length).setValues([CM_HEAD]); cm.setFrozenRows(1);
    var seed = courseMap_(ss).rows.map(function (r) { return [r.course, r.unit, r.name, '', '', '', r.piece, '']; });
    if (seed.length) cm.getRange(2, 1, seed.length, CM_HEAD.length).setValues(seed);
    did.push('Course map tab (' + seed.length + ' rows from the Weeks tab)');
  }
  var cfg = readConfig_(ss);
  CONFIG_402.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  if (String(cfg['road daily'] || '') === '6') { setConfig_(ss, 'road daily', '8'); did.push('road daily 6 → 8 (after the 6:40 item and the 7:45 deepening, so the day\'s entries carry their lines when John reads them)'); }
  var st = ss.getSheetByName('Standard');
  if (st) {
    var sv = st.getRange(1, 1, Math.max(1, st.getLastRow()), 1).getValues(), seen = {};
    for (var j = 0; j < sv.length; j++) { var kk = String(sv[j][0] || '').toLowerCase().trim(); if (STANDARD_402[kk]) { st.getRange(j + 1, 1, 1, 3).setValues([STANDARD_402[kk]]); seen[kk] = 1; } }
    Object.keys(STANDARD_402).forEach(function (key) { if (!seen[key]) { st.appendRow(STANDARD_402[key]); did.push('Standard ' + key); } });
    did.push('Standard for his road / one thing to do brought to 4.0.2');
  }
  // John's own Learners row (by hand, no room) takes the first cohort's room on the Rooms tab, so the first learner reads what a man in that room reads (ruled Oct 22)
  try {
    var le = ss.getSheetByName('Learners'), rs = deskSheet_().getSheetByName('Rooms');
    if (le && rs && le.getLastRow() >= 2 && rs.getLastRow() >= 2) {
      var RH = headerIndex_(rs), rv = rs.getRange(2, 1, rs.getLastRow() - 1, rs.getLastColumn()).getValues();
      var first = rv.map(function (r) { return String(r[RH['room']] || '').trim(); }).filter(Boolean)[0] || '';
      var lv = le.getRange(2, 1, le.getLastRow() - 1, LC.note).getValues();
      lv.forEach(function (r, i) {
        if (first && String(r[LC.how - 1]).toLowerCase() === 'by hand' && !String(r[LC.room - 1]).trim()) { le.getRange(i + 2, LC.room, 1, 2).setValues([[first, first.split(/\s+[—–-]\s+/)[0].trim()]]); did.push('Learners: ' + r[LC.email - 1] + ' given the room ' + first); }
      });
    }
  } catch (xl) { log_(ss, 'build 4.0.2', 'the first learner\'s room could not be set', String(xl).slice(0, 160)); }
  props.setProperty('b402', '1');
  log_(ss, 'build 4.0.2', 'made: ' + (did.join(', ') || 'nothing new'));
}

/* ═══════════ build 4.1 · one band, three rooms (row.js build 3) ═══════════
 * John, Oct 21, 2026: "we need a consistent ui." Your Growth's band is the house band: row.js (loaded on /start and /front-desk) now redraws
 * each page's own band into the house shape — a picture full width above it when Config "band picture page" / "band picture desk" holds an
 * address, the eyebrow, the greeting, one line, Your Page's three stops as their own line, and the row for desk holders — aligned to the
 * page's own left edge. No page changed; the pictures land by filling the two Config cells. */
var CONFIG_41 = [
  ['band picture page', '', 'build 4.1: the address of the picture above the band on Your Page (house style, 1456×819, from the repo\'s pictures/ folder); blank = no picture yet'],
  ['band picture desk', '', 'build 4.1: the address of the picture above the band on Your Desk; blank = no picture yet']
];
function ensureBuild41_(ss) {
  var props = PropertiesService.getScriptProperties();
  if (props.getProperty('b41') === '1') return;
  var cfg = readConfig_(ss), did = [];
  CONFIG_41.forEach(function (r) { if (!(r[0] in cfg)) { ss.getSheetByName('Config').appendRow(r); did.push('Config ' + r[0]); } });
  props.setProperty('b41', '1');
  log_(ss, 'build 4.1', 'made: ' + (did.join(', ') || 'nothing new'));
}
/** row.js with the two picture addresses filled in; the Config read is cached five minutes so a page load costs nothing. */
function rowJs_() {
  var pics = null;
  try { var c = CacheService.getScriptCache().get('bandpics'); if (c) pics = JSON.parse(c); } catch (e) {}
  if (!pics) {
    pics = { page: '', desk: '' };
    try { var cfg = readConfig_(SpreadsheetApp.openById(RE_SHEET_ID)); pics = { page: String(cfg['band picture page'] || '').trim(), desk: String(cfg['band picture desk'] || '').trim() }; } catch (e) {}
    try { CacheService.getScriptCache().put('bandpics', JSON.stringify(pics), 300); } catch (e) {}
  }
  return ROW_JS.replace('__PICS__', JSON.stringify(pics));
}

/* ═══════════════════════════════ road.js build 4.0.2 (served at ?file=road.js) ═══════════════════════════════ */

var ROAD_JS = "/* AP-HISROAD road.js build 4.0.2 — \"For your road\" on Your Page, served by the Research reader script (ResearchReader.gs build 4.0.2, ?file=road.js).\n   4.0.2 (Oct 22, 2026, the first walk's findings, ruled with John): the corner reads \"Week 3 of 12 · Given Oct 21\"; the Since line reads\n   \"A new piece for your road is here. Read it\"; phone sizes brought down so the first screen carries the claim, the first quote and the\n   start of What it means; the threshing floor (pictures/threshing-floor.jpg) at the head of the section with the five stops drawn in code,\n   in full the first time a man opens the section and afterward one line, \"How this works\", he can open; and the road remembers (4.1b):\n   one line from his last answer above the piece, \"Your road so far\" in place of \"Earlier pieces\", the questions that return shown with his\n   answers side by side. Being known is quieter: his own words, handed back; nothing scored, nothing summarized.\n   The page block on /start is only a loader: <div id=\"apRoad4\"></div> and this script's tag. The section moves itself to sit above Your chronicle. */\n(function () {\n  \"use strict\";\n  var host = document.getElementById(\"apRoad4\");\n  if (!host || host.getAttribute(\"data-hisroad\")) return;\n  host.setAttribute(\"data-hisroad\", \"4.0.2\");\n  var BUILD = \"4.0.2\";\n  var ROAD_URL = (function () { var s = document.currentScript; var u = s && s.src ? String(s.src).split(\"?\")[0] : \"\"; return /script\\.google\\.com\\/macros\\/s\\/[^/]+\\/exec$/.test(u) ? u : \"\"; })();\n  var CACHE = \"ap_hisroad_v2\";\n  var data = null, me = null, sending = false;\n\n  function esc(t) { return String(t == null ? \"\" : t).replace(/[&<>\"]/g, function (c) { return { \"&\": \"&amp;\", \"<\": \"&lt;\", \">\": \"&gt;\", '\"': \"&quot;\" }[c]; }); }\n  function nb(s) { return String(s || \"\").replace(/ (\\S+)$/, \"\\u00a0$1\"); }\n  function el(sel) { return host.querySelector(sel); }\n\n  var CSS = '<style id=\"apHisRoadStyle\">' +\n    '.ap-home .ap-hisroad{margin:44px 0 0;padding-top:22px;border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-hisroad .ap-road-line{font:400 16px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:-4px 0 18px;max-width:none}' +\n    /* how this works: the threshing floor and the five stops */\n    '.ap-home .ap-hr-howline{display:block;font:600 14px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;margin:-6px 0 18px;cursor:pointer}' +\n    '.ap-home .ap-hr-how{display:none;margin:0 0 26px}' +\n    '.ap-home .ap-hr-how.open{display:block}' +\n    '.ap-home .ap-hr-how img{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover;border-radius:6px;margin:0 0 18px}' +\n    '.ap-home .ap-hr-stops{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:18px;margin:0;padding:0;list-style:none}' +\n    '.ap-home .ap-hr-stops li{margin:0;padding:0 0 0 12px;border-left:2px solid var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-hr-stops .ap-hr-stop{display:block;font:400 17px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 6px;text-wrap:balance}' +\n    '.ap-home .ap-hr-stops .ap-hr-stopline{display:block;font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0}' +\n    '.ap-home .ap-hr-promise{font:400 15px/1.55 var(--ap-sans) !important;color:#F3EDE3 !important;background:var(--ap-navy,#1F2A44);border-radius:4px;padding:14px 18px;margin:20px 0 0}' +\n    /* from his road: the line that proves it heard him */\n    '.ap-home .ap-hr-last{margin:0 0 18px;padding:0 0 0 14px;border-left:2px solid var(--ap-bronze,#B8945F)}' +\n    '.ap-home .ap-hr-last .ap-hr-label{margin-bottom:6px}' +\n    '.ap-home .ap-hr-last p.ap-hr-lastq{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0;max-width:46em}' +\n    '.ap-home .ap-hr-last p.ap-hr-lastf{font:400 15px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:6px 0 0}' +\n    /* the piece */\n    '.ap-home .ap-hr-piece{background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-left:3px solid var(--ap-bronze,#B8945F);border-radius:6px;padding:24px 26px 22px}' +\n    '.ap-home .ap-hr-piece .ap-card-kind{margin:0 0 10px}' +\n    '.ap-home .ap-hr-claim{font:400 24px/1.3 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 18px;max-width:46em}' +\n    '.ap-home .ap-hr-label{font:600 11px/1 var(--ap-sans) !important;letter-spacing:.12em !important;text-transform:uppercase !important;color:var(--ap-bronze,#B8945F) !important;margin:0 0 8px}' +\n    '.ap-home .ap-hr-part{margin:0 0 18px}' +\n    '.ap-home .ap-hr-part p.ap-hr-body{font:400 16px/1.6 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0;max-width:46em}' +\n    '.ap-home .ap-hr-quote{font:400 18px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0 0 10px;padding-left:14px;border-left:2px solid var(--ap-rule,#E2DCD1);max-width:46em}' +\n    '.ap-home .ap-hr-quote a{font:600 13px/1 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);white-space:nowrap;margin-left:4px}' +\n    '.ap-home .ap-hr-coming{font:400 14px/1.5 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}' +\n    '.ap-home .ap-hr-open{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:2px 0 22px}' +\n    '.ap-home .ap-hr-state{font:400 14px/1.4 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:0}' +\n    '.ap-home .ap-hr-ask{margin:0;padding:20px 0 0;border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-hr-ask p.ap-hr-q{font:400 19px/1.45 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 12px}' +\n    '.ap-home .ap-hr-ask textarea{display:block;width:100%;min-height:108px;padding:12px 14px;font:400 16px/1.55 var(--ap-sans);color:var(--ap-ink,#2B3040);background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px;resize:vertical;box-sizing:border-box}' +\n    '.ap-home .ap-hr-ask textarea:focus{outline:2px solid var(--ap-bronze,#B8945F);outline-offset:1px}' +\n    '.ap-home .ap-hr-send{display:flex;align-items:center;flex-wrap:wrap;gap:14px;margin:12px 0 0}' +\n    '.ap-home .ap-hr-foot{font:400 13px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:12px 0 0;max-width:46em}' +\n    '.ap-home .ap-hr-foot b{font-weight:600;color:var(--ap-ink,#2B3040)}' +\n    '.ap-home .ap-hr-answer{margin:0;padding:14px 16px;background:#fff;border:1px solid var(--ap-rule,#E2DCD1);border-radius:4px}' +\n    '.ap-home .ap-hr-answer .ap-hr-label{margin-bottom:6px}' +\n    '.ap-home .ap-hr-answer p.ap-hr-text{font:400 16px/1.6 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:0;white-space:pre-wrap}' +\n    '.ap-home .ap-hr-words{display:flex;align-items:center;flex-wrap:wrap;gap:12px;margin:22px 0 0;padding-top:18px;border-top:1px solid var(--ap-rule,#E2DCD1)}' +\n    '.ap-home .ap-hr-words p{font:400 16px/1.4 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important;margin:0 6px 0 0}' +\n    '.ap-home .ap-hisroad .ap-btn{cursor:pointer;line-height:1.3 !important;text-decoration:none !important}' +\n    '.ap-home .ap-hisroad .ap-btn-quiet{background:transparent !important;color:var(--ap-navy,#1F2A44) !important;border:1px solid var(--ap-navy,#1F2A44) !important}' +\n    '.ap-home .ap-hisroad .ap-btn-quiet.on{background:var(--ap-navy,#1F2A44) !important;color:#fff !important}' +\n    '.ap-home .ap-hisroad .ap-btn[disabled]{opacity:.55;cursor:default}' +\n    /* your road so far */\n    '.ap-home .ap-hr-earlier{margin:18px 0 0}' +\n    '.ap-home .ap-hr-earlier .ap-hr-more{font:600 14px/1.3 var(--ap-sans) !important;color:var(--ap-navy,#1F2A44) !important;background:none;border:0;padding:0;cursor:pointer}' +\n    '.ap-home .ap-hr-road{display:none;margin:12px 0 0}' +\n    '.ap-home .ap-hr-road.open{display:block}' +\n    '.ap-home .ap-hr-returns{margin:0 0 6px;padding:16px 18px;background:var(--ap-paper,#FBF9F5);border:1px solid var(--ap-rule,#E2DCD1);border-radius:6px}' +\n    '.ap-home .ap-hr-returns p.ap-hr-rq{font:400 18px/1.4 var(--ap-serif) !important;color:var(--ap-navy,#1F2A44) !important;margin:0 0 10px}' +\n    '.ap-home .ap-hr-returns ul{margin:0;padding:0;list-style:none}' +\n    '.ap-home .ap-hr-returns li{margin:0 0 8px;font:400 15px/1.55 var(--ap-sans) !important;color:var(--ap-ink,#2B3040) !important}' +\n    '.ap-home .ap-hr-returns li .ap-hr-when{color:var(--ap-quiet,#6B7280);margin-right:8px}' +\n    '.ap-home .ap-hr-returns li q{font:400 16px/1.5 var(--ap-serif) !important;quotes:\"\\\\201C\" \"\\\\201D\"}' +\n    '.ap-home .ap-hr-list{margin:0;padding:0;list-style:none}' +\n    '.ap-home .ap-hr-list li{padding:12px 0;border-top:1px solid var(--ap-rule,#E2DCD1);font:400 15px/1.5 var(--ap-sans);color:var(--ap-ink,#2B3040)}' +\n    '.ap-home .ap-hr-list li:first-child{border-top:0}' +\n    '.ap-home .ap-hr-list li .ap-hr-when{color:var(--ap-quiet,#6B7280);margin-right:8px}' +\n    '.ap-home .ap-hr-list li .ap-hr-line{display:block;font:400 16px/1.5 var(--ap-serif) !important;color:var(--ap-ink,#2B3040) !important;margin:6px 0 0;padding-left:12px;border-left:2px solid var(--ap-rule,#E2DCD1);max-width:46em}' +\n    '.ap-home .ap-hr-list li a{font-weight:600;color:var(--ap-navy,#1F2A44) !important;text-decoration:none !important;border-bottom:1px solid var(--ap-bronze,#B8945F);margin-left:8px;white-space:nowrap}' +\n    '.ap-home .ap-hr-fine{font:400 14px/1.55 var(--ap-sans) !important;color:var(--ap-quiet,#6B7280) !important;margin:18px 0 0;max-width:46em}' +\n    '@media (max-width:640px){' +\n      '.ap-home .ap-hr-piece{padding:18px 18px 18px}' +\n      '.ap-home .ap-hr-claim{font-size:20px !important;line-height:1.3 !important;margin-bottom:14px}' +\n      '.ap-home .ap-hr-quote{font-size:16px !important;line-height:1.45 !important;margin-bottom:8px}' +\n      '.ap-home .ap-hr-last p.ap-hr-lastq{font-size:17px !important}' +\n      '.ap-home .ap-hr-how img{aspect-ratio:4/3}' +\n      '.ap-home .ap-hr-stops{grid-template-columns:1fr;gap:12px}' +\n      '.ap-home .ap-hr-stops .ap-hr-stop{display:inline;font-size:16px !important}' +\n      '.ap-home .ap-hr-stops .ap-hr-stopline{display:inline;margin-left:6px}' +\n      '.ap-home .ap-hr-words p{width:100%;margin:0 0 2px}' +\n      '.ap-home .ap-hr-words .ap-btn{padding:10px 14px}' +\n    '}' +\n    '</style>';\n\n  var STOPS = [\n    [\"Many voices\", \"We read what the voices we follow said this week.\"],\n    [\"One in ten kept\", \"Most is passed over; what stays is read against Scripture.\"],\n    [\"Chosen for you\", \"Picked for where you are on the road, in your course's own words.\"],\n    [\"You answer back\", \"Say whether it met you, and answer the question in your own words, as long as you like.\"],\n    [\"The road is built as you walk\", \"What you open and what you say set the next piece; your course and the voices we follow build it with you.\"]\n  ];\n  function howHtml(d) {\n    var open = d.how === \"full\";\n    var h = '';\n    if (!open) h += '<button type=\"button\" class=\"ap-hr-howline\" data-act=\"how\">How this works <span data-role=\"howarrow\">▾</span></button>';\n    h += '<div class=\"ap-hr-how' + (open ? \" open\" : \"\") + '\" data-role=\"how\">';\n    if (d.pic) h += '<img src=\"' + esc(d.pic) + '\" alt=\"A threshing floor at evening: heaps of grain under the trees, and one basket set apart\" decoding=\"async\">';\n    h += '<ol class=\"ap-hr-stops\">' + STOPS.map(function (s) { return '<li><span class=\"ap-hr-stop\">' + esc(s[0]) + '</span><span class=\"ap-hr-stopline\">' + esc(nb(s[1])) + '</span></li>'; }).join(\"\") + \"</ol>\";\n    h += '<p class=\"ap-hr-promise\">' + esc(nb(\"A person on our team reads every word you send before anything else happens with it; your answers stay on your page, and nothing is mailed to you.\")) + \"</p>\";\n    return h + \"</div>\";\n  }\n  function lastHtml(d) {\n    var l = d.last; if (!l || !l.text) return \"\";\n    return '<div class=\"ap-hr-last\"><p class=\"ap-hr-label\">From your road</p><p class=\"ap-hr-lastq\">' + esc(nb((l.when ? l.when + \" you wrote: \" : \"You wrote: \") + \"“\" + l.text + \"”\")) + '</p><p class=\"ap-hr-lastf\">This piece follows it.</p></div>';\n  }\n\n  function quoteHtml(q) {\n    var link = q.link ? '\\u00a0<a href=\"' + esc(q.link) + '\" target=\"_blank\" rel=\"noopener\" data-act=\"listen\" title=\"Listen from this minute\">' + esc(q.minute || q.m || \"Open it\") + ' ↗</a>' : \"\";\n    return '<p class=\"ap-hr-quote\">“' + esc(q.words) + '”' + link + \"</p>\";\n  }\n\n  function pieceHtml(p, d) {\n    var kind = [p.isNew ? \"New this week\" : \"This week\", String(p.voice || \"\").replace(/\\s*\\(.*$/, \"\"), p.kind, p.cost].filter(Boolean).join(\" · \");\n    var h = '<div class=\"ap-hr-piece\" data-id=\"' + esc(p.id) + '\">';\n    h += '<p class=\"ap-card-kind\">' + esc(kind) + \"</p>\";\n    h += '<p class=\"ap-hr-claim\">' + esc(nb(p.claim)) + \"</p>\";\n    if (p.quotes && p.quotes.length) { h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">In their words</p>' + p.quotes.map(quoteHtml).join(\"\") + \"</div>\"; }\n    else if (p.wordsComing) { h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">In their words</p><p class=\"ap-hr-coming\">Their own words and the minute are on their way; they land here this morning.</p></div>'; }\n    if (p.road) h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">What it means for your road</p><p class=\"ap-hr-body\">' + esc(nb(p.road)) + \"</p></div>\";\n    if (p.todo) h += '<div class=\"ap-hr-part\"><p class=\"ap-hr-label\">One thing to do this week</p><p class=\"ap-hr-body\">' + esc(nb(p.todo)) + \"</p></div>\";\n    h += '<div class=\"ap-hr-open\"><a class=\"ap-btn ap-btn-primary\" href=\"' + esc(p.minuteLink || p.link) + '\" target=\"_blank\" rel=\"noopener\" data-act=\"open\">Open it</a>' +\n      '<span class=\"ap-hr-state\" data-role=\"opened\">' + esc(p.opened ? \"Opened \" + p.opened : (p.minutes ? \"Opens in a new tab. \" + p.minutes.charAt(0).toUpperCase() + p.minutes.slice(1) + \" of it is yours; start where the link lands.\" : \"Opens in a new tab, at the minute that matters.\")) + \"</span></div>\";\n    // the question back\n    h += '<div class=\"ap-hr-ask\"><p class=\"ap-hr-label\">A question back</p><p class=\"ap-hr-q\">' + esc(nb(p.question)) + \"</p>\";\n    if (p.answer && p.answer.text) {\n      h += '<div class=\"ap-hr-answer\"><p class=\"ap-hr-label\">Your answer · sent ' + esc(p.answer.sent) + '</p><p class=\"ap-hr-text\">' + esc(p.answer.text) + \"</p></div>\" +\n        '<p class=\"ap-hr-foot\">A person on our team reads it within ' + esc(d.review || \"two days\") + \", before anything else happens with it.</p>\";\n    } else {\n      h += '<textarea data-role=\"answer\" maxlength=\"2000\" placeholder=\"Write it as you would say it. A few lines is enough.\"></textarea>' +\n        '<div class=\"ap-hr-send\"><button type=\"button\" class=\"ap-btn ap-btn-primary\" data-act=\"send\">Send</button><span class=\"ap-hr-state\" data-role=\"sendstate\"></span></div>' +\n        '<p class=\"ap-hr-foot\"><b>What you write here goes to our team, and a person reads it within ' + esc(d.review || \"two days\") + ', before anything else happens with it.</b> It stays with our team, with one exception: if we believe you or someone else is in danger, we will act on that, and we will tell you we are doing it. For men eighteen and older.</p>';\n    }\n    h += \"</div>\";\n    // the two words\n    h += '<div class=\"ap-hr-words\" data-role=\"words\">' + wordsHtml(p.word) + \"</div>\";\n    return h + \"</div>\";\n  }\n  function wordsHtml(word) {\n    if (word === \"met\") return '<p>You said: this met me. Thank you. It shapes next week’s piece.</p><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"not\">Change to: not for me</button>';\n    if (word === \"not\") return '<p>You said: not for me. Thank you. Next week’s piece will be different.</p><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"met\">Change to: this met me</button>';\n    return '<p>Did this meet you?</p><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"met\">This met me</button><button type=\"button\" class=\"ap-btn ap-btn-quiet\" data-act=\"word\" data-word=\"not\">Not for me</button>';\n  }\n  /* Your road so far: the questions that return, then the pieces in order with the word he gave and the line he wrote */\n  function roadHtml(d) {\n    var list = d.road || [], rets = d.returns || [];\n    if (!list.length && !rets.length) return \"\";\n    var n = list.length;\n    var h = '<div class=\"ap-hr-earlier\"><button type=\"button\" class=\"ap-hr-more\" data-act=\"more\">Your road so far' + (n ? \" (\" + n + (n === 1 ? \" piece)\" : \" pieces)\") : \"\") + ' <span data-role=\"arrow\">▾</span></button><div class=\"ap-hr-road\" data-role=\"list\">';\n    rets.forEach(function (r) {\n      h += '<div class=\"ap-hr-returns\"><p class=\"ap-hr-label\">A question that returns</p><p class=\"ap-hr-rq\">' + esc(nb(r.question)) + '</p><ul>' +\n        r.answers.map(function (a) { return '<li><span class=\"ap-hr-when\">' + esc(a.when) + \"</span><q>\" + esc(a.text) + \"</q></li>\"; }).join(\"\") + \"</ul></div>\";\n    });\n    if (list.length) {\n      h += '<ul class=\"ap-hr-list\">';\n      list.forEach(function (e) {\n        var w = e.word === \"met\" ? \" · this met you\" : e.word === \"not\" ? \" · not for you\" : \"\";\n        h += '<li><span class=\"ap-hr-when\">' + esc(e.given) + \"</span>\" + esc(e.claim) + '<span class=\"ap-hr-when\">' + esc(\" · \" + e.voice + w) + \"</span>\" + (e.link ? '<a href=\"' + esc(e.link) + '\" target=\"_blank\" rel=\"noopener\">Open it ↗</a>' : \"\") +\n          (e.line ? '<span class=\"ap-hr-line\">' + esc(\"“\" + e.line + \"”\") + \"</span>\" : \"\") + \"</li>\";\n      });\n      h += \"</ul>\";\n    }\n    return h + \"</div></div>\";\n  }\n\n  function render(d) {\n    data = d;\n    if (!d || !d.ok || !d.piece) { host.style.display = \"none\"; host.innerHTML = \"\"; return; }\n    var note = d.week && d.week.label ? d.week.label.replace(/^.*·\\s*/, \"\") : \"\";\n    if (d.piece.given) note = (note ? note + \" · \" : \"\") + \"Given \" + d.piece.given;\n    var h = CSS + '<div class=\"ap-sec ap-hisroad\" id=\"apHisRoad\" data-build=\"' + BUILD + '\">' +\n      '<div class=\"ap-sec-head\"><h2 class=\"ap-h2\">For your road</h2><p class=\"ap-sec-note\">' + esc(nb(note)) + \"</p></div>\" +\n      howHtml(d) +\n      '<p class=\"ap-road-line\">' + esc(nb(d.lead || \"One piece a week, curated by our team for where you are on the road. Open it, do the one thing, and answer the question back.\")) + \"</p>\" +\n      lastHtml(d) +\n      pieceHtml(d.piece, d) + roadHtml(d) +\n      (d.fine ? '<p class=\"ap-hr-fine\">' + esc(nb(d.fine)) + \"</p>\" : \"\") + \"</div>\";\n    host.innerHTML = h;\n    host.style.display = \"\";\n    wire();\n    place();\n    since(d);\n  }\n\n  /* the Since you were last here line carries the new piece until he opens it (ruled Oct 13: the week's new piece is one of the things that line is for) */\n  function since(d) {\n    var p = d.piece; if (!p || !p.isNew || p.opened || since.done) return;\n    var box = document.querySelector(\"#apHome .ap-since\"), text = box ? box.querySelector(\".ap-since-text\") : null;\n    if (!box && host.parentNode) {\n      box = document.createElement(\"div\"); box.className = \"ap-since\";\n      box.innerHTML = '<p class=\"ap-since-kind\">Since you were last here</p><p class=\"ap-since-text\"></p>';\n      host.parentNode.insertBefore(box, host); text = box.querySelector(\".ap-since-text\");\n    }\n    if (!text || text.querySelector(\"[data-hisroad-since]\")) return;\n    var s = document.createElement(\"span\"); s.setAttribute(\"data-hisroad-since\", \"1\");\n    s.textContent = (text.textContent.trim() ? \" \" : \"\") + \"A new piece for your road is here. \";\n    var a = document.createElement(\"a\"); a.href = \"#apHisRoad\"; a.textContent = \"Read it\";\n    a.addEventListener(\"click\", function (ev) { ev.preventDefault(); var sec = document.getElementById(\"apHisRoad\"); if (sec) { try { sec.scrollIntoView({ behavior: \"smooth\", block: \"start\" }); } catch (e) { sec.scrollIntoView(); } } });\n    text.appendChild(s); text.appendChild(a); since.done = true;\n  }\n\n  /* the section sits above Your chronicle, under the course and Since you were last here; the band draws later and inserts before the shelf too, so keep the seat */\n  function place() {\n    var head = document.getElementById(\"apStoriesHead\"), shelf = head && head.closest ? head.closest(\".ap-sec\") : null;\n    if (!shelf || !shelf.parentNode) return;\n    function seat() { if (host.nextElementSibling !== shelf || host.parentNode !== shelf.parentNode) shelf.parentNode.insertBefore(host, shelf); }\n    seat();\n    if (!place.mo && window.MutationObserver) {\n      place.mo = new MutationObserver(function () { seat(); });\n      place.mo.observe(shelf.parentNode, { childList: true });\n      setTimeout(function () { if (place.mo) { place.mo.disconnect(); place.mo = null; } }, 60000);\n    }\n  }\n\n  function wire() {\n    if (wire.done) return; wire.done = true;\n    host.addEventListener(\"click\", function (ev) {\n      var t = ev.target.closest ? ev.target.closest(\"[data-act]\") : null; if (!t) return;\n      var act = t.getAttribute(\"data-act\");\n      if (act === \"open\" || act === \"listen\") { post({ action: \"road_open\", id: data.piece.id }); var st = el('[data-role=\"opened\"]'); if (st && data.piece && !data.piece.opened) { st.textContent = \"Opened \" + (data.today || \"today\"); data.piece.opened = data.today || \"today\"; } return; }\n      if (act === \"word\") { ev.preventDefault(); word(t.getAttribute(\"data-word\")); return; }\n      if (act === \"send\") { ev.preventDefault(); send(); return; }\n      if (act === \"more\") { ev.preventDefault(); var l = el('[data-role=\"list\"]'), a = el('[data-role=\"arrow\"]'); if (l) { l.classList.toggle(\"open\"); if (a) a.textContent = l.classList.contains(\"open\") ? \"▴\" : \"▾\"; } return; }\n      if (act === \"how\") { ev.preventDefault(); var hw = el('[data-role=\"how\"]'), ha = el('[data-role=\"howarrow\"]'); if (hw) { hw.classList.toggle(\"open\"); if (ha) ha.textContent = hw.classList.contains(\"open\") ? \"▴\" : \"▾\"; } }\n    });\n  }\n  function word(w) {\n    var box = el('[data-role=\"words\"]'); if (!box) return;\n    data.piece.word = w; box.innerHTML = wordsHtml(w);\n    post({ action: \"road_word\", id: data.piece.id, word: w }).then(function (r) { if (!r || !r.ok) { box.innerHTML = '<p>It did not go through. Your word is not lost; press it again.</p>' + wordsHtml(\"\"); data.piece.word = \"\"; } });\n  }\n  function send() {\n    if (sending) return;\n    var ta = el('[data-role=\"answer\"]'), st = el('[data-role=\"sendstate\"]'), btn = el('[data-act=\"send\"]');\n    var text = ta ? ta.value.trim() : \"\";\n    if (!text) { if (st) st.textContent = \"Write your answer first.\"; return; }\n    sending = true; if (btn) btn.setAttribute(\"disabled\", \"disabled\"); if (st) st.textContent = \"Sending\";\n    var slow = setTimeout(function () { if (st) st.textContent = \"Still sending\"; }, 5000);\n    post({ action: \"road_answer\", id: data.piece.id, text: text }).then(function (r) {\n      clearTimeout(slow); sending = false;\n      if (r && r.ok) {\n        data.piece.answer = { text: text, sent: r.sent || data.today || \"today\" };\n        var ask = el(\".ap-hr-ask\");\n        if (ask) ask.innerHTML = '<p class=\"ap-hr-label\">A question back</p><p class=\"ap-hr-q\">' + esc(nb(data.piece.question)) + '</p><div class=\"ap-hr-answer\"><p class=\"ap-hr-label\">Your answer · sent ' + esc(data.piece.answer.sent) + '</p><p class=\"ap-hr-text\">' + esc(text) + '</p></div><p class=\"ap-hr-foot\">Sent. A person on our team reads it within ' + esc(data.review || \"two days\") + \", before anything else happens with it.</p>\";\n        cache();\n      } else {\n        if (btn) btn.removeAttribute(\"disabled\");\n        if (st) st.textContent = \"It did not send. Your words are still here; nothing has been lost. Try again.\";\n      }\n    });\n  }\n\n  /* who is asking: the site's own account, read the way the rest of the page reads it */\n  function getJSON(path) { return fetch(path, { credentials: \"include\", headers: { Accept: \"application/json\" } }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; }); }\n  function whoAmI() {\n    return getJSON(\"/api/user_stats\").then(function (j) {\n      var m = (j && j.me) || {};\n      var a = { id: m.id || m._id || m.user_id || \"\", email: (m.email || m.user_email || \"\").toLowerCase(), name: ((m.first_name || \"\") + \" \" + (m.last_name || \"\")).trim() || m.username || \"\", first: m.first_name || \"\" };\n      if (a.id && a.email) return a;\n      return getJSON(\"/api/user/me\").then(function (x) {\n        var u = (x && x.user) || x || {};\n        if (!a.id) a.id = u.id || u._id || \"\";\n        if (!a.email) a.email = String(u.email || u.user_email || \"\").toLowerCase();\n        if (!a.name) a.name = ((u.first_name || \"\") + \" \" + (u.last_name || \"\")).trim() || u.username || \"\";\n        if (!a.first) a.first = u.first_name || \"\";\n        return a;\n      });\n    });\n  }\n  function post(o) {\n    if (!ROAD_URL || !me) return Promise.resolve(null);\n    o.email = me.email; o.lwid = me.id; o.name = me.name;\n    return fetch(ROAD_URL, { method: \"POST\", headers: { \"Content-Type\": \"text/plain;charset=utf-8\" }, body: JSON.stringify(o) }).then(function (r) { return r.ok ? r.json() : null; }).catch(function () { return null; });\n  }\n  function cache() { try { localStorage.setItem(CACHE, JSON.stringify({ email: me.email, data: data, at: Date.now() })); } catch (e) {} }\n\n  host.style.display = \"none\";\n  whoAmI().then(function (a) {\n    if (!a || !a.email) return;\n    me = a;\n    var cached = null; try { var c = JSON.parse(localStorage.getItem(CACHE) || \"null\"); if (c && c.email === a.email && c.data && Date.now() - c.at < 7 * 864e5) cached = c.data; } catch (e) {}\n    if (cached) { cached.how = \"line\"; render(cached); }\n    post({ action: \"road\" }).then(function (r) {\n      if (r && r.ok) { render(r); cache(); }\n      else if (r && r.ok === false && !cached) render(null);\n    });\n  });\n  window.APHisRoad = { build: BUILD, render: render };\n})();\n";
