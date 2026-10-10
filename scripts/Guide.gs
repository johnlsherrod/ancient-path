/* AP-GUIDE build 8 · Ancient Path Biblical Coaching · the Guide: the ask box and the concern doors on /read (10 Oct 2026)
 *   build 8: a Site row whose body starts "hand: " keeps the words typed there (Your Page needs a sign-in, so its page cannot be
 *   read — a signed-out read lands on /read); Your Page joins the seed and Facilitator Training (our own team's course) leaves it.
 *   build 7: the box answers questions about the site and points to the doors. A Site tab lists our pages a man can go to
 *   (the six Your Story pieces, the Story Path, the courses, Breaking Free, the paths, Investment, About, Let's talk); the
 *   hourly refresh reads each page, so the answer is drawn from the page itself. A new outcome, "site": he asks how to do
 *   something here, where something is, what something costs, how to start, write, join or talk — he gets a short plain
 *   answer from those pages and the pages as cards, then Let's talk. An ask about writing his story opens with John's line.
 *   guide.js build 4 (the box reads "What do you need help with? Ask in your own words.").
 *   build 6: the safeguarding screen runs before the daily brake (build 5 told a man past his day's asks that the box was done for
 *   today, even when he wrote that he did not want to wake up).
 *   build 5: the fixes from the 10 Oct test pass. An ask answers in two steps (the pieces in a few seconds, then the answer,
 *   op "answer"); "answer" is kept for a piece written for his very situation, everything else nearer is "close"; his concern
 *   is judged by his words, not by the pieces picked; "What you are carrying" names what is under his words and is dropped if
 *   it only repeats them; "What Scripture says" must quote a verse or it is dropped; a person named is introduced; the asking
 *   line points at the piece that answers it (Claude picks once per line), not the newest; the monthly review writes the
 *   "A group on this" count to its own column ("group asks") and never touches the "group" tick; guide.js build 3.
 *   build 4: guide.js build 2 — the page lands on the answer (the live site ignored the smooth scroll call; the box is set directly).
 *   build 3: a concern Claude already gave a piece is reused while the piece's words are unchanged (build 2 asked again
 *   every hour for pieces whose date the sheet had reshaped — seven calls an hour for nothing).
 *   build 2: the Concerns tab is written where it belongs (build 1 put the ten doors at row 1001, under a thousand empty
 *   tick boxes, and wrote their states on the wrong rows); setup repairs a build-1 tab; the relay is retried once.
 *
 * WHAT THIS IS
 *   The capability under the ask box ("What are you carrying? Ask in your own words.") on ancientpathcoaching.com/read.
 *   It keeps the list of every piece we have written (stories from the Published feed and the Your Story hub, articles from
 *   the blog), refreshed every hour, each piece carrying ONE concern; keeps the one list of concerns that runs the Read door
 *   (a concern we are following until its first piece ships, a door from that day on); answers each ask through the Reader
 *   relay (the "Anthropic Key" project — the key never lives here); keeps the questions, anonymously; and serves the page
 *   script (guide.js) that draws the box, the row of doors and "What men are asking" on any page that carries the loader line.
 *
 * THE DOORS
 *   The ten to start live in GUIDE.DOORS below, in order and in these words, as the SEED. The live list is the sheet's
 *   Concerns tab: tick "open" to show a door, untick to retire it, type a new name in "rename to" to rename it (the old
 *   name is kept in "was" so the pieces follow), tick "asking" to show a concern under "What men are asking", tick "group"
 *   when John opens a group on it. A tick changes the page within ten minutes; nothing is rebuilt.
 *   A concern's STATE is never typed: it is "door" when at least one piece carries it, "following" until then.
 *
 * EVERY PIECE CARRIES ONE CONCERN
 *   An article: the post's own category on the blog when it names a concern; otherwise Claude reads it once and assigns one
 *   (kept on the Pieces tab, so it is read once). A story: the feed's own "concern" field when the offer step carries it
 *   (the man's pick, with Claude's suggestion in the box — that is a story.js / review-script change); until then Claude
 *   assigns one the same way. A concern typed by hand on the Pieces tab ("concern by" = hand) is kept through refreshes.
 *
 * THE FOUR OUTCOMES (the design is ruled; see /read)
 *   answer   we have it: a short answer in the shape of the Window, the pieces it drew from, Begin or Let's talk
 *   close    close but not exact: the same answer, a plain line that it is close, that piece, then the four choices
 *   none     we have not written it: the four choices
 *   outside  outside our domain: acknowledge what he brought, say what we are about, Let's talk
 *   safety   a disclosure of harm to himself or anyone: the safeguarding line and Let's talk — never an article,
 *            never the four choices (screened here before Claude is asked, and by Claude as well)
 *   Inside a door (he tapped one), the ask reads only that door's pieces.
 *
 * WHAT IS KEPT (the Asks tab): the question, the time, the door he was in, the outcome, the concern, the pieces shown, the
 *   choice he made and his one line. Never who asked. An email is kept only when he leaves one, and then it goes to
 *   ActiveCampaign through the bridge (the "Ancient Path — AC count" queue) with a tag for the choice and one for the
 *   concern — it is not written here.
 *
 * THE LIST RUNS ITSELF
 *   Hourly: the pieces and their concerns, each concern's state. Monthly (the 1st, 6 AM Central): one count per concern from
 *   the ask log, the choices men pressed, what they read and the search phrases men typed (the Search profile sheet), the
 *   phrase men actually type beside it, and one Front Desk action recommending open / retire / rename with the reason.
 *   The one hand step kept: the tick. No count reaches a page.
 *
 * INSTALL (once)
 *   1. Paste this whole file over Code.gs in a NEW Apps Script project named "Ancient Path - Guide" (script.google.com,
 *      signed in as john@ancientpathcoaching.com). Save.
 *   2. Run → setup. Allow what it asks. It makes the sheet "Ancient Path — Guide", seeds the ten doors, sets the hourly
 *      refresh and the monthly review, and reads every piece once (Claude assigns the concerns the first time; a minute).
 *   3. Deploy → New deployment → Web app · Execute as Me · Who has access: Anyone → Deploy. Copy the web app address.
 *   4. Send the address to the chat. The page file (read.html build 3) is stamped with it.
 *   A later build: paste over Code.gs → Deploy → Manage deployments → pencil → Version: New version → Deploy.
 *   The address stays the same.
 *
 * SETTINGS live on the sheet's Config tab, never in this file.
 */

const GUIDE = {
  BUILD: 8,
  SHEET_NAME: 'Ancient Path — Guide',
  DOORS: ['Shame', 'Pornography', 'What people think of me', 'Anger', 'Where I’m from', 'Endings and new beginnings', 'Grief and lament', 'Fathers and children', 'Writing my story', 'How to be known in community'],
  SITE: 'https://www.ancientpathcoaching.com',
  FEED: 'https://script.google.com/macros/s/AKfycbxTfzmFY7NuXaGZIsPqxRDKpqakwXs5heeEGcp07aiTUG6Pzk9wJ0m8qubveVZoRCO3/exec?feed=published',
  BLOG: 'https://www.ancientpathcoaching.com/api/blogPostsAllPublicPaginated?limit=100&page=1&site_template=true',
  HUB: 'https://www.ancientpathcoaching.com/your-story',
  RELAY: 'https://script.google.com/macros/s/AKfycbwhyhcluoAKYVxUoKW6UnoN8Iab80DHLq_2snfTKu9i1gwSCkvBcH41HtNKFdlvGgkp/exec',
  HOUSE_MARK: 'You are "a first reader" for Ancient Path Biblical Coaching.',   // every request the relay accepts opens with this line
  AC_SHEET_ID: '1VE7ouQQwiG9A-M49nFATwVCpcG6qJSITaWWmE1AwLeM',                   // the AC bridge's sheet (queue tab)
  FD_SHEET_ID: '1aKaSP8R4kn-UrVBMzuoEXJ9yQll1oB3p3Z_64Icmrvw',                   // the Front Desk sheet (Actions tab)
  SEARCH_SHEET_ID: '1V84E1Wg33DaI89wAP0GvDR5iHQX3ZFsM3kRzu1LatCE',               // the Search profile sheet (Monthly log tab)
  SKIP_SLUGS: { 'where-i-am-from': 1, 'write-a-lament': 1, 'poetry': 1 },         // Your Story signposts on the blog, not articles
  TABS: {
    Pieces:   ['id', 'source', 'kind', 'title', 'who', 'description', 'address', 'concern', 'concern by', 'words', 'updated', 'body'],
    Concerns: ['concern', 'order', 'open', 'asking', 'group', 'rename to', 'was', 'line', 'where we are', 'state', 'pieces', 'asks', 'reads', 'talk', 'write', 'story', 'search', 'phrase', 'recommendation', 'added', 'group asks'],
    Asks:     ['at', 'ask id', 'question', 'door', 'outcome', 'concern', 'topic', 'pieces shown', 'choice', 'his line', 'email given', 'chosen at', 'build'],
    Site:     ['id', 'kind', 'title', 'line', 'address', 'go', 'body', 'updated'],
    Config:   ['key', 'value', 'note'],
    Log:      ['at', 'what', 'detail']
  },
  MAX_Q: 600,
  MAX_PIECE_CHARS: 9000,
  MAX_READ_CHARS: 30000,
  STORY_LINE: 'We have several ways to engage your story — from poems to a lament, to setting a remembrance stone, to courses. Take a look below and see if one matches what you need.'
};

const CHOICES = { talk: "Let's talk", write: 'Write about it', story: 'A story to write', group: 'A group on this' };
const TICKS = ['open', 'asking', 'group'];

// ───────────────────────────── setup ─────────────────────────────

function setup() {
  const ss = sheet_();
  ensureTabs_(ss);
  ensureConfig_(ss);
  repairConcerns_(ss);
  seedConcerns_(ss);
  ensureTriggers_();
  const n = refreshPieces();
  log_('setup', 'build ' + GUIDE.BUILD + ', ' + n + ' pieces');
  Logger.log('The Guide is up. Build ' + GUIDE.BUILD + '. Pieces: ' + n + '. Sheet: https://docs.google.com/spreadsheets/d/' + ss.getId());
}

function sheet_() {
  const props = PropertiesService.getScriptProperties();
  let id = props.getProperty('GUIDE_SHEET_ID');
  if (id) { try { return SpreadsheetApp.openById(id); } catch (e) {} }
  const found = DriveApp.getFilesByName(GUIDE.SHEET_NAME);
  let ss = null;
  while (found.hasNext()) { const f = found.next(); if (f.getMimeType() === MimeType.GOOGLE_SHEETS) { ss = SpreadsheetApp.openById(f.getId()); break; } }
  if (!ss) ss = SpreadsheetApp.create(GUIDE.SHEET_NAME);
  props.setProperty('GUIDE_SHEET_ID', ss.getId());
  return ss;
}

function ensureTabs_(ss) {
  Object.keys(GUIDE.TABS).forEach(name => {
    let sh = ss.getSheetByName(name);
    if (!sh) sh = ss.insertSheet(name);
    const want = GUIDE.TABS[name];
    const have = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].map(String) : [];
    if (have.join('|') !== want.join('|')) {
      const merged = have.filter(Boolean).slice();      // add any missing column at the end; never drop one
      want.forEach(h => { if (merged.indexOf(h) < 0) merged.push(h); });
      sh.getRange(1, 1, 1, merged.length).setValues([merged]);
    }
    sh.setFrozenRows(1);
  });
  const first = ss.getSheets()[0];
  if (first.getName() === 'Sheet1' && ss.getSheets().length > 1) ss.deleteSheet(first);
}

/** The ten doors from GUIDE.DOORS, added once each (never re-ticked, never re-ordered once John has touched them). */
function seedConcerns_(ss) {
  const sh = ss.getSheetByName('Concerns'), H = headerIndex_(sh);
  const have = rows_(sh).map(r => String(r['concern']).trim().toLowerCase());
  const add = [];
  GUIDE.DOORS.forEach((name, i) => {
    if (have.indexOf(name.toLowerCase()) >= 0) return;
    const row = new Array(GUIDE.TABS.Concerns.length).fill('');
    row[H['concern']] = name; row[H['order']] = i + 1; row[H['open']] = true; row[H['asking']] = false; row[H['group']] = false;
    row[H['state']] = 'following'; row[H['pieces']] = 0; row[H['added']] = new Date();
    add.push(row);
  });
  if (add.length) writeConcernRows_(sh, H, add);
}

/** Appends concern rows under the last NAMED row (a tick box counts as content to getLastRow, so that is never used here),
 *  puts the tick boxes on just those rows, then writes the tick values — insertCheckboxes() resets a cell to unticked. */
function writeConcernRows_(sh, H, rows) {
  const data = sh.getDataRange().getValues();
  let last = 1; for (let i = 1; i < data.length; i++) if (String(data[i][H['concern']] || '').trim()) last = i + 1;
  const start = last + 1;
  sh.getRange(start, 1, rows.length, GUIDE.TABS.Concerns.length).setValues(rows);
  TICKS.forEach(t => {
    const col = H[t] + 1;
    sh.getRange(start, col, rows.length, 1).insertCheckboxes();
    sh.getRange(start, col, rows.length, 1).setValues(rows.map(r => [r[H[t]] === true]));
  });
}

/** A build-1 tab (the doors written at row 1001 under a thousand empty tick boxes, states on the wrong rows) is rebuilt:
 *  the named rows are kept, every other row goes, and a tab nobody has ticked yet is re-seeded fresh. */
function repairConcerns_(ss) {
  const sh = ss.getSheetByName('Concerns'), H = headerIndex_(sh);
  const data = sh.getDataRange().getValues();
  const named = [], stray = [];
  for (let i = 1; i < data.length; i++) { const r = data[i]; if (String(r[H['concern']] || '').trim()) named.push(r); else if (r.some((v, j) => j !== H['open'] && j !== H['asking'] && j !== H['group'] && v !== '' && v !== false)) stray.push(i + 1); }
  const broken = stray.length > 0 || named.some(r => r[H['open']] !== true && r[H['open']] !== false);
  if (!broken) return;
  const touched = named.some(r => r[H['open']] === true || r[H['asking']] === true || r[H['group']] === true || String(r[H['line']] || '').trim());
  const header = data[0];
  ss.deleteSheet(sh);
  const fresh = ss.insertSheet('Concerns');
  fresh.getRange(1, 1, 1, header.length).setValues([header]); fresh.setFrozenRows(1);
  if (touched) writeConcernRows_(fresh, headerIndex_(fresh), named);   // keep what someone ticked; untouched rows are re-seeded by seedConcerns_
  log_('repair', 'Concerns tab rebuilt' + (touched ? ' with ' + named.length + ' rows kept' : ' and re-seeded'));
}

function ensureConfig_(ss) {
  const sh = ss.getSheetByName('Config');
  const rows = sh.getDataRange().getValues().slice(1);
  const have = {}; rows.forEach(r => { have[String(r[0]).trim()] = true; });
  const want = [
    ['asks per visitor per day', '12', 'How many asks one browser may make in a day. The relay has its own caps behind this.'],
    ['asks per day', '200', 'How many asks the box answers in a day across everyone. Over that, the box says to come back tomorrow.'],
    ['refresh every hours', '1', 'How often the list of pieces and the concerns are read again.'],
    ['review day', '1', 'Day of the month the concerns review runs (counts, the phrase men type, open / retire / rename).'],
    ['review owner', 'John', 'Whose name goes on the Front Desk action for the monthly review.'],
    ['master list', '3', 'The ActiveCampaign list a left email joins (3 = Master Contact List).'],
    ['front desk actions', 'yes', 'yes: the monthly review also writes one row on the Front Desk Actions tab.'],
    ['newest handful', '6', 'How many pieces each section on /read shows before "All our stories" / "All articles".']
  ];
  const add = want.filter(w => !have[w[0]]);
  if (add.length) sh.getRange(sh.getLastRow() + 1, 1, add.length, 3).setValues(add);
}

function config_(ss) {
  const rows = (ss || sheet_()).getSheetByName('Config').getDataRange().getValues().slice(1);
  const c = {}; rows.forEach(r => { const k = String(r[0]).trim(); if (k) c[k] = String(r[1]).trim(); });
  return {
    perVisitor: numOr_(c['asks per visitor per day'], 12),
    perDay: numOr_(c['asks per day'], 200),
    hours: Math.max(1, numOr_(c['refresh every hours'], 1)),
    reviewDay: numOr_(c['review day'], 1),
    owner: c['review owner'] || 'John',
    masterList: numOr_(c['master list'], 3),
    fdActions: String(c['front desk actions'] || 'yes').toLowerCase() !== 'no',
    handful: Math.max(3, numOr_(c['newest handful'], 6))
  };
}

function ensureTriggers_() {
  const cfg = config_();
  ScriptApp.getProjectTriggers().forEach(t => { if (['refreshPieces', 'reviewConcerns', 'proposeAsking'].indexOf(t.getHandlerFunction()) >= 0) ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger('refreshPieces').timeBased().everyHours(cfg.hours).create();
  ScriptApp.newTrigger('reviewConcerns').timeBased().onMonthDay(cfg.reviewDay).atHour(6).inTimezone('America/Chicago').create();
}

// ───────────────────────────── the concerns (the one list) ─────────────────────────────

/** The list as the sheet has it: renames applied, each row with its name, old names, ticks and state. Order column, then sheet order. */
function concerns_(ss) {
  ss = ss || sheet_();
  const sh = ss.getSheetByName('Concerns');
  applyRenames_(sh);
  const out = [];
  rows_(sh).forEach((r, i) => {
    if (!String(r['concern']).trim()) return;
    out.push({
      name: String(r['concern']).trim(), order: numOr_(r['order'], 1000 + i), open: r['open'] === true, asking: r['asking'] === true, group: r['group'] === true,
      was: String(r['was'] || '').split(',').map(s => s.trim()).filter(Boolean), line: String(r['line'] || '').trim(), where: String(r['where we are'] || '').trim(),
      state: String(r['state'] || 'following'), row: i + 2   // the sheet row: data index + the header
    });
  });
  return out.sort((a, b) => a.order - b.order);
}

/** "rename to" typed on a row: the row takes the new name, the old one goes to "was" so pieces carrying it still match. */
function applyRenames_(sh) {
  const H = headerIndex_(sh), data = sh.getDataRange().getValues();
  for (let i = 1; i < data.length; i++) {
    const to = String(data[i][H['rename to']] || '').trim(), from = String(data[i][H['concern']] || '').trim();
    if (!to || !from || to.toLowerCase() === from.toLowerCase()) continue;
    const was = String(data[i][H['was']] || '').split(',').map(s => s.trim()).filter(Boolean);
    if (was.indexOf(from) < 0) was.push(from);
    sh.getRange(i + 1, H['concern'] + 1).setValue(to);
    sh.getRange(i + 1, H['was'] + 1).setValue(was.join(', '));
    sh.getRange(i + 1, H['rename to'] + 1).setValue('');
    log_('rename', from + ' → ' + to);
  }
}

/** Finds the concern a name (or an old name) belongs to. */
function concernFor_(name, list) {
  const n = key_(name); if (!n) return null;
  return list.find(c => key_(c.name) === n || c.was.some(w => key_(w) === n)) || null;
}
/** Names compare without case, straight or curly apostrophes, or stray spaces. */
function key_(s) { return String(s || '').toLowerCase().replace(/[’‘`]/g, "'").replace(/\s+/g, ' ').trim(); }

/** After a refresh: each concern's state and piece count, and the "where we are" line for the asking section. */
function updateConcernStates_(ss, pieces) {
  const sh = ss.getSheetByName('Concerns'), H = headerIndex_(sh), list = concerns_(ss);
  const byName = {}; pieces.forEach(p => { if (!p.concern) return; const c = concernFor_(p.concern, list); if (c) (byName[c.name] = byName[c.name] || []).push(p); });
  list.forEach(c => {
    const ps = (byName[c.name] || []).slice().sort((a, b) => String(b.updated).localeCompare(String(a.updated)));
    const state = ps.length ? 'door' : 'following';
    const best = ps.length ? (c.asking && c.line ? askingPiece_(c, ps) : ps[0]) : null;   // an asking line points at the piece that answers it
    let where;
    if (c.group) where = 'We are opening a group on this.';
    else if (best) where = 'The piece we have: ' + best.title;
    else where = 'We are writing on this.';
    sh.getRange(c.row, H['state'] + 1).setValue(state);
    sh.getRange(c.row, H['pieces'] + 1).setValue(ps.length);
    sh.getRange(c.row, H['where we are'] + 1).setValue(where);
    c.state = state; c.where = where; c.address = best ? best.address : '';
  });
  CacheService.getScriptCache().remove('guidefeed');
  return list;
}

/** The piece an asking line should point at. One piece: that one. Several: Claude reads the line and the pieces once and picks;
 *  the pick is kept (Script Properties) until the line or the concern's pieces change. Newest is the fallback. ps: newest first. */
function askingPiece_(c, ps) {
  if (!ps.length) return null;
  if (ps.length === 1 || !c.line) return ps[0];
  const props = PropertiesService.getScriptProperties();
  const sig = Utilities.base64EncodeWebSafe(Utilities.computeDigest(Utilities.DigestAlgorithm.MD5, c.name + '|' + c.line + '|' + ps.map(p => p.id).join(','), Utilities.Charset.UTF_8));
  const key = 'ASKPICK_' + sig.replace(/=+$/, '');
  const kept = props.getProperty(key);
  if (kept) { const hit = ps.find(p => p.id === kept); if (hit) return hit; }
  const input = GUIDE.HOUSE_MARK + ' On our Read page, under "What men are asking", a line in a man\'s own words points to ONE of our pieces. Choose the piece that answers this line best — the one a man who said it should read first. ' +
    'Judge by what the line is about, not by the date. Reply with only this JSON: {"id": "<one id from the list>"}\n\n' +
    'THE LINE: "' + c.line + '"\n\nTHE PIECES (id | title | one line | opening):\n' +
    ps.map(p => p.id + ' | ' + p.title + ' | ' + String(p.description || '').slice(0, 160) + ' | ' + clean_(String(p.body || '')).slice(0, 700)).join('\n');
  const r = relay_(input, '');
  const id = r.ok && r.data ? String(r.data.id || '') : '';
  const pick = ps.find(p => p.id === id);
  if (!pick) return ps[0];
  try { props.setProperty(key, pick.id); } catch (e) {}
  return pick;
}

// ───────────────────────────── the list of pieces (hourly) ─────────────────────────────

/** Reads every piece from the two sources /read already uses (the Published feed and the blog's own list) plus the founders'
 *  pieces baked into the Your Story hub, gives each one its concern, and rewrites the Pieces tab. Bodies and concerns already
 *  on the tab are reused when a piece has not changed, so the hourly run is light. Returns the count. */
function refreshPieces() {
  const ss = sheet_();
  const sh = ss.getSheetByName('Pieces');
  const H = headerIndex_(sh);
  const old = {};
  rows_(sh).forEach(r => { old[String(r['id'])] = r; });
  const list = concerns_(ss);
  const pieces = [];
  const seen = {};
  const push = (p) => { if (!p || !p.id || seen[p.id]) return; seen[p.id] = 1; pieces.push(p); };

  // 1. the Published feed — community pieces (JSON; the page reads the same feed as JSONP)
  try {
    const j = JSON.parse(fetch_(GUIDE.FEED));
    (j.pieces || []).forEach(it => {
      const id = 'story:' + safeId_(it.id); if (!safeId_(it.id)) return;
      const from = clean_(it.from) || 'Testimony', text = String(it.piece || '');
      push({ id: id, source: 'story', kind: from, title: clean_(it.title) || 'A testimony', who: clean_(it.name) || 'Shared anonymously',
        description: firstSentence_(text), address: GUIDE.SITE + '/your-story?p=' + safeId_(it.id), body: text.slice(0, GUIDE.MAX_PIECE_CHARS), updated: String(it.at || ''),
        given: clean_(it.concern || ''), givenBy: 'man' });
    });
  } catch (e) { log_('refresh', 'feed failed: ' + e); }

  // 2. the founders' pieces baked into the hub (sections class="itow-piece" data-p="…")
  try {
    const html = fetch_(GUIDE.HUB);
    const re = /<section class="itow-piece"[^>]*data-p="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g;
    let m;
    while ((m = re.exec(html))) {
      const pid = safeId_(m[1]), sec = m[2];
      const eb = (sec.match(/class="itow-eb">([\s\S]*?)<\/p>/) || [])[1], h3 = (sec.match(/<h3>([\s\S]*?)<\/h3>/) || [])[1], by = (sec.match(/itow-byline"><b>([\s\S]*?)<\/b>/) || [])[1];
      let text = textOf_(sec);
      const kind = clean_(textOf_(eb || '')) || 'Your Story', title = clean_(textOf_(h3 || '')) || kind, who = clean_(textOf_(by || '')) || 'Ancient Path';
      [kind, title, who].forEach(s => { if (s && text.indexOf(s) === 0) text = text.slice(s.length).trim(); });   // the section opens with eyebrow, title, byline
      text = text.replace(/^·\s*[^.]{0,80}?(?=[A-Z])/, '').trim();
      push({ id: 'story:' + pid, source: 'story', kind: kind, title: title, who: who, description: firstSentence_(text),
        address: GUIDE.SITE + '/your-story?p=' + pid, body: text.slice(0, GUIDE.MAX_PIECE_CHARS), updated: 'hub', given: '', givenBy: '' });
    }
  } catch (e) { log_('refresh', 'hub failed: ' + e); }

  // 3. the blog's own list — articles; the body is read from the post page only when the post is new or changed
  try {
    const j = JSON.parse(fetch_(GUIDE.BLOG));
    (j.blogPosts || []).forEach(p => {
      const slug = clean_(p.slug); if (!slug || GUIDE.SKIP_SLUGS[slug]) return;
      const id = 'article:' + slug, stamp = String(p.modified || p.published || '');
      const prev = old[id];
      let body = prev && String(prev['updated']) === stamp && String(prev['body'] || '').length > 200 ? String(prev['body']) : '';
      if (!body) { try { body = articleBody_(fetch_(GUIDE.SITE + '/blog/' + slug)); } catch (e) { body = ''; log_('refresh', 'post ' + slug + ': ' + e); } }
      if (!body) body = clean_(p.description || '');
      // the post's own category names the concern when it is one of ours
      const cats = String(Array.isArray(p.categories) ? p.categories.join(',') : (p.categories || '')).split(',').map(s => s.trim()).filter(Boolean);
      const cat = cats.map(cn => concernFor_(cn, list)).find(Boolean);
      push({ id: id, source: 'article', kind: 'Article', title: clean_(p.title) || slug, who: 'Ancient Path', description: firstSentence_(p.description || body),
        address: GUIDE.SITE + '/blog/' + slug, body: body.slice(0, GUIDE.MAX_PIECE_CHARS), updated: stamp, given: cat ? cat.name : '', givenBy: cat ? 'category' : '' });
    });
  } catch (e) { log_('refresh', 'blog failed: ' + e); }

  if (!pieces.length) { log_('refresh', 'nothing came back; the tab is left as it was'); return rows_(sh).length; }

  // 4. one concern per piece: a hand-typed one is kept; the source's own comes next; a kept Claude pick is reused; otherwise Claude reads it once
  let asked = 0;
  pieces.forEach(p => {
    const prev = old[p.id];
    const prevConcern = prev ? String(prev['concern'] || '').trim() : '', prevBy = prev ? String(prev['concern by'] || '').trim() : '';
    const prevC = concernFor_(prevConcern, list);
    if (prevC && prevBy === 'hand') { p.concern = prevC.name; p.by = 'hand'; return; }
    const givenC = concernFor_(p.given, list);
    if (givenC) { p.concern = givenC.name; p.by = p.givenBy; return; }
    if (prevC && prevBy && String(prev['body'] || '') === p.body) { p.concern = prevC.name; p.by = prevBy; return; }   // the words are the same: the pick stands
    if (asked >= 25) { p.concern = prevC ? prevC.name : ''; p.by = prevC ? prevBy : ''; return; }   // a very large first run finishes next hour
    asked++;
    const c = assignConcern_(p, list);
    p.concern = c ? c.name : ''; p.by = c ? 'claude' : '';
  });

  const out = pieces.map(p => {
    const row = new Array(GUIDE.TABS.Pieces.length).fill('');
    row[H['id']] = p.id; row[H['source']] = p.source; row[H['kind']] = p.kind; row[H['title']] = p.title; row[H['who']] = p.who;
    row[H['description']] = p.description; row[H['address']] = p.address; row[H['concern']] = p.concern || ''; row[H['concern by']] = p.by || '';
    row[H['words']] = p.body.split(/\s+/).filter(Boolean).length; row[H['updated']] = p.updated; row[H['body']] = p.body;
    return row;
  });
  const last = sh.getLastRow();
  if (last > 1) sh.getRange(2, 1, last - 1, GUIDE.TABS.Pieces.length).clearContent();
  sh.getRange(2, 1, out.length, GUIDE.TABS.Pieces.length).setValues(out);
  CacheService.getScriptCache().remove('pieces');
  updateConcernStates_(ss, pieces);
  try { refreshSite_(); } catch (e) { log_('site', 'read failed: ' + String(e).slice(0, 160)); }
  PropertiesService.getScriptProperties().setProperty('GUIDE_REFRESHED', new Date().toISOString());
  if (asked) log_('refresh', asked + ' concern' + (asked === 1 ? '' : 's') + ' assigned by Claude');
  return out.length;
}

/** Claude reads one piece and names the one concern it carries, from the list (open or not). Returns the concern or null. */
function assignConcern_(p, list) {
  const names = list.map(c => c.name);
  const input = GUIDE.HOUSE_MARK + ' Every piece on our site carries ONE concern from our list, so a man can find it by the thing he is carrying. Read the piece below and name the one concern it most speaks to. ' +
    'Choose only from the list, in its exact words. A piece about our practice itself (what coaching is, how we work), or one that no concern truly fits, gets "" — a piece with no concern is fine; a forced one is not. Reply with only this JSON: {"concern": "<one from the list or empty>"}\n\n' +
    'THE LIST:\n' + names.join('\n') + '\n\nTHE PIECE (' + p.kind + '): "' + p.title + '"' + (p.source === 'story' ? ' by ' + p.who : '') + '\n' + p.body.slice(0, 3500);
  const r = relay_(input, '');
  if (!r.ok || !r.data) return null;
  return concernFor_(String(r.data.concern || ''), list);
}

/** The article text out of a blog post page: the page container, scripts and styles gone, tags gone, cut before the footer. */
function articleBody_(html) {
  let s = html;
  const k = s.indexOf('id="pageContainer"'); if (k > 0) s = s.slice(k);
  s = s.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<noscript[\s\S]*?<\/noscript>/gi, ' ');
  s = textOf_(s);
  ['If any of this brings up more than you can carry', '© Ancient Path', 'Ancient Path Biblical Coaching. Formation work'].forEach(cut => { const c = s.indexOf(cut); if (c > 400) s = s.slice(0, c); });
  return s.trim();
}

function pieces_() {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('pieces');
  if (hit) { try { return JSON.parse(hit); } catch (e) {} }
  const sh = sheet_().getSheetByName('Pieces');
  const list = rows_(sh).filter(r => r['id']).map(r => ({ id: String(r['id']), source: String(r['source']), kind: String(r['kind']), title: String(r['title']), who: String(r['who']),
    description: String(r['description']), address: String(r['address']), concern: String(r['concern'] || ''), updated: String(r['updated'] || ''), body: String(r['body'] || '') }));
  try { cache.put('pieces', JSON.stringify(list), 1800); } catch (e) {}   // a big list may not fit the cache; the sheet is read each time then
  return list;
}

// ───────────────────────────── the site: the pages a man can go to (build 7) ─────────────────────────────

/** The seed of the Site tab — our pages a man can be sent to, in this order. The lines of the six Your Story pieces and the
 *  courses card are the hub's own words. A blank line is filled from the page's own description on the hourly read.
 *  After the seed, the tab is the list: add a row to send men to a new page; the body and date are read for you. */
const SITE_SEED = [
  ['site:where-i-am-from', 'Poetry', 'Where I Am From', 'Find out what you are made of — the good and the hard, in your own words.', '/where-i-am-from', 'Write it'],
  ['site:write-a-lament', 'Prayer', 'A Lament', 'Say the thing to God you have been carrying alone, in a form old enough to hold it.', '/write-a-lament', 'Write it'],
  ['site:asked-of-me', 'Poetry', 'Asked of Me', 'One question God asked. You answer it as your story moves — where you came from, the names you lived under, the turn, who He is to you, and where you are going.', '/asked-of-me', 'Write it'],
  ['site:what-kind-of-light', 'Poetry', 'What Kind of Light', 'Jesus is the light of the world, and He said His followers are too. Ask what His light looks like coming through you. Then write the question to one person in your life, near, far or gone.', '/what-kind-of-light', 'Write it'],
  ['site:where-are-you', 'The map', 'Where Are You?', 'The first question God ever asked a man, asked to you, today. Say what you are walking away from, put your own X on Walk With Me’s map, and choose one step. Nobody places the X for you, and nobody grades it.', '/where-are-you', 'Place it'],
  ['site:set-a-stone', 'Remembrance Stones', 'Set a Stone', 'Samuel set a stone and named it. Set yours: who it is for, what the LORD has done, and the name you give it. Three months on, it asks you to look again: what has the LORD done since?', '/set-a-stone', 'Set it'],
  ['site:the-story-path', 'Course', 'The Story Path', '', '/course/the-story-path', 'See the course'],
  ['site:courses', 'Courses', 'Your story, written at the end', 'Every course ends with a story piece. Here I Am closes Known by Jesus. The Man Who Crossed closes Do Hard Things. The Road I Walked runs through Walk With Me, one chapter a part. Run Your Race is coming.', '/courses', 'See the courses'],
  ['site:breaking-free', 'Cohort', 'Breaking Free', '', '/course/student-course', 'See it'],
  ['site:known-by-jesus', 'Course', 'Known by Jesus', '', '/course/i-want-you-to-know-me', 'See the course'],
  ['site:do-hard-things', 'Course', 'Do Hard Things', '', '/course/do-hard-things', 'See the course'],
  ['site:walk-with-me', 'Course', 'Walk With Me', '', '/course/walk-with-me', 'See the course'],
  ['site:the-work', 'The Work', 'How the Work Is Carried', '', '/how-the-work-is-carried', 'Read it'],
  ['site:the-integrity-path', 'The Work', 'The Integrity Path', '', '/the-integrity-path', 'Read it'],
  ['site:the-mending-path', 'The Work', 'The Mending Path', '', '/the-mending-path', 'Read it'],
  ['site:the-pastors-path', 'The Work', 'The Pastor’s Path', '', '/the-pastors-path', 'Read it'],
  ['site:the-crossing', 'The Work', 'The Crossing', '', '/the-crossing', 'Read it'],
  ['site:the-guide-path', 'The Work', 'The Guide Path', '', '/the-guide-path', 'Read it'],
  ['site:investment', 'Coaching', 'Investment', '', '/investment', 'See it'],
  ['site:your-story', 'Your Story', 'Your Story', '', '/your-story', 'Open it'],
  ['site:your-page', 'Your Page', 'Your Page', 'Sign in, and everything you have written and kept is on Your Page. Only you can read it.', '/start', 'Open it', 'hand: Your Page is your own page on the site. Sign in, and everything you have written and kept is there, and only you can read it unless you choose to offer it.'],
  ['site:read', 'Read', 'Our stories and articles', '', '/read', 'Open it'],
  ['site:about', 'About', 'About Ancient Path', '', '/about', 'Read it'],
  ['site:contact', 'Contact', 'Contact', '', '/contact', 'Open it'],
  ['site:begin', 'Let’s talk', 'Let’s talk', 'Thirty minutes with one of our team, free. You tell us where you are and what you are carrying.', '/begin', 'Let’s talk']
];
const SITE_TALK = 'site:begin';   // drawn as the closing Let's talk box, never as a card

/** The Site tab, made and seeded the first time it is needed. */
function siteTab_(ss) {
  ss = ss || sheet_();
  let sh = ss.getSheetByName('Site');
  if (!sh) {
    sh = ss.insertSheet('Site');
    sh.getRange(1, 1, 1, GUIDE.TABS.Site.length).setValues([GUIDE.TABS.Site]);
    sh.setFrozenRows(1);
  }
  if (sh.getLastRow() < 2) {
    const rows = SITE_SEED.map(r => { const row = r.slice(0, 6); row.push(r[6] || '', ''); return row; });
    sh.getRange(2, 1, rows.length, GUIDE.TABS.Site.length).setValues(rows);
  }
  return sh;
}

/** Every row of the Site tab, as the ask reads it. Cached half an hour; the hourly read clears it. */
function site_() {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('site');
  if (hit) { try { return JSON.parse(hit); } catch (e) {} }
  const list = rows_(siteTab_()).filter(r => String(r['id']).trim() && String(r['address']).trim()).map(r => ({
    id: String(r['id']).trim(), source: 'site', kind: String(r['kind'] || ''), title: String(r['title'] || ''), line: String(r['line'] || ''),
    address: absUrl_(String(r['address']).trim()), go: String(r['go'] || 'Open it'), body: String(r['body'] || '').replace(/^hand:\s*/, '')
  }));
  try { cache.put('site', JSON.stringify(list), 1800); } catch (e) {}
  return list;
}
function absUrl_(a) { return /^https?:/.test(a) ? a : GUIDE.SITE + (a.charAt(0) === '/' ? '' : '/') + a; }

/** The hourly read of every page on the Site tab: the page's own words go in "body", its description fills a blank line. */
function refreshSite_() {
  const sh = siteTab_(), H = headerIndex_(sh), data = sh.getDataRange().getValues();
  let n = 0;
  for (let i = 1; i < data.length; i++) {
    const addr = String(data[i][H['address']] || '').trim(); if (!addr) continue;
    if (String(data[i][H['body']] || '').indexOf('hand:') === 0) continue;   // words typed by hand are kept (a page behind a sign-in)
    let html = '';
    try { html = fetch_(absUrl_(addr)); } catch (e) { log_('site', addr + ': ' + String(e).slice(0, 120)); continue; }
    const body = articleBody_(html).slice(0, 6000);
    if (body.length > 80) { sh.getRange(i + 1, H['body'] + 1).setValue(body); n++; }
    if (!String(data[i][H['line']] || '').trim()) {
      const m = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i) || html.match(/<meta[^>]+content="([^"]*)"[^>]+name="description"/i);
      const d = m ? clean_(textOf_(m[1])) : '';
      if (d) sh.getRange(i + 1, H['line'] + 1).setValue(firstSentence_(d));
    }
    sh.getRange(i + 1, H['updated'] + 1).setValue(new Date());
  }
  CacheService.getScriptCache().remove('site');
  return n;
}

function siteCard_(p) { return { id: p.id, source: 'site', kind: p.kind, title: p.title, line: p.line, address: p.address, go: p.go }; }

/** Step two for a "site" ask: Claude reads only the chosen pages and answers his question from them, plainly. */
function siteStep_(q, rows, v) {
  let budget = 24000;
  const blocks = rows.map(p => { const b = (p.body || p.line || '').slice(0, Math.max(0, Math.min(6000, budget))); budget -= b.length; return '=== ' + p.id + ' · ' + p.title + ' · ' + p.address + ' ===\n' + b; });
  const input = GUIDE.HOUSE_MARK + ' A man typed a question into the ask box on our Read page. It is about our site or our work: how to do something here, where something is, what it costs, how to start, write, join or talk with someone. ' +
    'Below are the only pages you may draw from. Answer his question in one to three plain sentences, to him as "you", using only what these pages say. ' +
    'If the pages do not answer it, say so plainly in one sentence and say that Let’s talk is the way to ask our team. Never invent a price, date, time, name or promise. ' +
    'If he is asking for help writing or telling his story, begin with exactly this sentence: "' + GUIDE.STORY_LINE + '" and then, in one more sentence at most, say where most men start, from the pages. ' +
    'Also "used": the ids of the pages he should open next, best first (one to five; never ' + SITE_TALK + ', which always closes the answer).\n' +
    'If what he wrote discloses harm to himself or anyone, or danger now, reply only {"unsafe": true}.\n' + HOUSE_RULES + '\n\n' +
    'Reply with only this JSON: {"text": "", "used": ["id"]}\n\nTHE PAGES:\n' + blocks.join('\n\n') + '\n\nHIS WORDS:\n' + q;
  const r = relay_(input, v);
  if (!r.ok) return { kind: 'error', error: r.error || 'failed' };
  const a = r.data || {};
  if (a.unsafe === true) return { kind: 'safety' };
  const byId = {}; rows.forEach(p => { byId[p.id] = p; });
  const used = (Array.isArray(a.used) ? a.used : []).map(String).filter(id => byId[id] && id !== SITE_TALK);
  const shown = (used.length ? used : rows.map(p => p.id).filter(id => id !== SITE_TALK)).slice(0, 5).map(id => byId[id]);
  const text = oneLine_(a.text, 700);
  if (!text) return { kind: 'error', error: 'failed' };
  return { kind: 'site', answer: { text: text, close: 'talk' }, shown: shown };
}

// ───────────────────────────── the web app ─────────────────────────────

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.refresh === 'site') {   // read the Site pages now (once in ten minutes at most), e.g. right after an install
    const c = CacheService.getScriptCache();
    if (c.get('siteread')) return json_({ ok: true, skipped: true });
    c.put('siteread', '1', 600);
    return json_({ ok: true, pages: refreshSite_() });
  }
  if (p.file === 'guide.js') return ContentService.createTextOutput(GUIDE_JS()).setMimeType(ContentService.MimeType.JAVASCRIPT);
  if (p.feed === 'guide') {
    const body = JSON.stringify(guideFeed_());
    if (p.callback && /^[A-Za-z_][A-Za-z0-9_]*$/.test(p.callback)) return ContentService.createTextOutput(p.callback + '(' + body + ');').setMimeType(ContentService.MimeType.JAVASCRIPT);
    return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JSON);
  }
  const props = PropertiesService.getScriptProperties();
  return json_({ ok: true, service: 'Ancient Path — Guide', build: GUIDE.BUILD, pieces: pieces_().length, refreshed: props.getProperty('GUIDE_REFRESHED') || '' });
}

/** What the page reads once on load: the open concerns (the doors and the ones we are following), the asking lines, and every
 *  piece with its concern — never a count. Cached ten minutes, so a tick on the sheet reaches the page within ten minutes. */
function guideFeed_() {
  const cache = CacheService.getScriptCache();
  const hit = cache.get('guidefeed');
  if (hit) { try { return JSON.parse(hit); } catch (e) {} }
  const ss = sheet_(), cfg = config_(ss);
  const list = concerns_(ss), pieces = pieces_();
  const byC = {}; pieces.forEach(p => { if (!p.concern) return; const c = concernFor_(p.concern, list); if (!c) return; (byC[c.name] = byC[c.name] || []).push(p); });
  Object.keys(byC).forEach(k => byC[k].sort((a, b) => String(b.updated).localeCompare(String(a.updated))));
  /* "Where we are": a group John opened; else the piece that answers the line (Claude picks once per line, kept); else we are writing on it */
  const whereOf = c => {
    if (c.group) return { where: 'We are opening a group on this.', title: '', address: '' };
    const ps = byC[c.name] || [];
    if (!ps.length) return { where: 'We are writing on this.', title: '', address: '' };
    const best = askingPiece_(c, ps);
    return { where: 'We have a piece on this:', title: best.title, address: best.address };
  };
  const out = {
    ok: true, build: GUIDE.BUILD, handful: cfg.handful,
    concerns: list.filter(c => c.open).map(c => ({ name: c.name, state: byC[c.name] ? 'door' : 'following' })),
    asking: list.filter(c => c.open && c.asking && c.line).slice(0, 5).map((c, i) => { const w = whereOf(c); return { id: 'asking:' + (i + 1), concern: c.name, line: c.line, where: w.where, title: w.title, address: w.address }; }),
    pieces: pieces.map(p => { const c = concernFor_(p.concern, list); return { id: p.id, source: p.source, kind: p.kind, title: p.title, who: p.who, line: p.description, address: p.address, concern: c ? c.name : '', updated: p.updated }; })
  };
  try { cache.put('guidefeed', JSON.stringify(out), 600); } catch (e) {}
  return out;
}

function doPost(e) {
  let req;
  try { req = JSON.parse((e && e.postData && e.postData.contents) || ''); } catch (err) { return json_({ ok: false, error: 'bad_request' }); }
  if (!req || typeof req !== 'object') return json_({ ok: false, error: 'bad_request' });
  try {
    if (req.op === 'ask') return json_(ask_(req));
    if (req.op === 'answer') return json_(answer_(req));
    if (req.op === 'choice') return json_(choice_(req));
  } catch (err) {
    log_('error', String(err && err.stack || err).slice(0, 500));
    return json_({ ok: false, error: 'failed' });
  }
  return json_({ ok: false, error: 'bad_request' });
}

// ───────────────────────────── an ask ─────────────────────────────

function ask_(req) {
  const q = String(req.q || '').replace(/\s+/g, ' ').trim().slice(0, GUIDE.MAX_Q);
  const v = /^[a-f0-9]{32}$/.test(String(req.v || '')) ? String(req.v) : '';
  if (q.length < 3) return { ok: false, error: 'bad_request' };
  const cfg = config_();
  const askId = Utilities.getUuid().replace(/-/g, '').slice(0, 10);
  const at = new Date();
  const concerns = concerns_();
  const door = concernFor_(req.door, concerns);
  const doorName = door ? door.name : '';

  // 1. the safeguarding screen, before anyone is asked — and before the daily brake, so a man past his asks for the day still gets the safeguarding line
  if (harmSaid_(q)) {
    record_(at, askId, q, doorName, 'safety', '', '', []);
    return { ok: true, askId: askId, outcome: 'safety', pieces: [] };
  }

  const gate = allow_(v, cfg);
  if (gate !== 'ok') return { ok: false, error: 'rate_limited' };

  let list = pieces_();
  if (door) { const inside = list.filter(p => { const c = concernFor_(p.concern, concerns); return c && c.name === door.name; }); if (inside.length) list = inside; }
  if (!list.length) { record_(at, askId, q, doorName, 'none', doorName, '', []); return { ok: true, askId: askId, outcome: 'none', concern: doorName, pieces: [] }; }

  // 2. Claude reads the list (titles and one line each) and picks three to five, or says none / close / outside / safety
  const site = site_();
  const pick = relay_(pickInstruction_(q, list, concerns, door, site), v);
  if (!pick.ok) { record_(at, askId, q, doorName, 'error', doorName, '', []); return { ok: false, error: pick.error || 'failed' }; }
  const d = pick.data || {};
  let outcome = String(d.outcome || '').toLowerCase();
  const topic = clean_(String(d.topic || '')).toLowerCase().slice(0, 40);
  const picked = concernFor_(d.concern, concerns);
  const concern = door ? door.name : (picked ? picked.name : '');
  const byId = {}; list.forEach(p => { byId[p.id] = p; });
  let chosen = (Array.isArray(d.pieces) ? d.pieces : []).map(String).filter(id => byId[id]).slice(0, 5).map(id => byId[id]);
  const siteById = {}; site.forEach(p => { siteById[p.id] = p; });
  let chosenSite = (Array.isArray(d.site) ? d.site : []).map(String).filter(id => siteById[id]).slice(0, 6).map(id => siteById[id]);
  if (['answer', 'close', 'none', 'outside', 'safety', 'site'].indexOf(outcome) < 0) outcome = chosen.length ? 'answer' : 'none';
  if (outcome === 'site') {
    // a question about the site or the work: a plain answer from our own pages, the pages as cards, then Let's talk
    if (siteById[SITE_TALK] && !chosenSite.some(p => p.id === SITE_TALK)) chosenSite.push(siteById[SITE_TALK]);
    const cards = chosenSite.filter(p => p.id !== SITE_TALK).slice(0, 5);
    if (req.two === true) {
      record_(at, askId, q, doorName, 'site', concern, topic, cards.map(p => p.id));
      CacheService.getScriptCache().put('ask:' + askId, JSON.stringify({ q: q, ids: chosenSite.map(p => p.id), outcome: 'site', concern: concern, topic: topic, v: v }), 900);
      return { ok: true, askId: askId, outcome: 'site', concern: concern, topic: topic, pending: true, pieces: cards.map(siteCard_) };
    }
    const sw = siteStep_(q, chosenSite, v);
    if (sw.kind === 'error') { record_(at, askId, q, doorName, 'error', concern, topic, cards.map(p => p.id)); return { ok: false, error: sw.error }; }
    if (sw.kind === 'safety') { record_(at, askId, q, doorName, 'safety', concern, topic, []); return { ok: true, askId: askId, outcome: 'safety', concern: concern, topic: topic, pieces: [] }; }
    record_(at, askId, q, doorName, 'site', concern, topic, sw.shown.map(p => p.id));
    return { ok: true, askId: askId, outcome: 'site', concern: concern, topic: topic, answer: sw.answer, pieces: sw.shown.map(siteCard_) };
  }
  if (outcome === 'safety') { record_(at, askId, q, doorName, 'safety', concern, topic, []); return { ok: true, askId: askId, outcome: 'safety', concern: concern, topic: topic, pieces: [] }; }
  if (outcome === 'outside') { record_(at, askId, q, doorName, 'outside', concern, topic, []); return { ok: true, askId: askId, outcome: 'outside', concern: concern, topic: topic, ack: oneLine_(d.ack), pieces: [] }; }
  if (!chosen.length || outcome === 'none') { record_(at, askId, q, doorName, 'none', concern, topic, []); return { ok: true, askId: askId, outcome: 'none', concern: concern, topic: topic, pieces: [] }; }

  // 3a. two steps (guide.js build 3): the outcome and the pieces now, the answer on the next call — he sees the pieces in seconds
  if (req.two === true) {
    record_(at, askId, q, doorName, outcome, concern, topic, chosen.slice(0, 3).map(p => p.id));
    CacheService.getScriptCache().put('ask:' + askId, JSON.stringify({ q: q, ids: chosen.map(p => p.id), outcome: outcome, concern: concern, topic: topic, v: v }), 900);
    return { ok: true, askId: askId, outcome: outcome, concern: concern, topic: topic, pending: true, pieces: chosen.slice(0, 3).map(card_) };
  }

  // 3. one step (an older page): Claude reads only those pieces and answers under the Window
  const w = windowStep_(q, chosen, outcome, v);
  if (w.kind === 'error') { record_(at, askId, q, doorName, 'error', concern, topic, chosen.map(p => p.id)); return { ok: false, error: w.error }; }
  if (w.kind === 'safety') { record_(at, askId, q, doorName, 'safety', concern, topic, []); return { ok: true, askId: askId, outcome: 'safety', concern: concern, topic: topic, pieces: [] }; }
  if (w.kind === 'none') { record_(at, askId, q, doorName, 'none', concern, topic, chosen.map(p => p.id)); return { ok: true, askId: askId, outcome: 'none', concern: concern, topic: topic, pieces: [] }; }
  record_(at, askId, q, doorName, outcome, concern, topic, w.shown.map(p => p.id));
  return { ok: true, askId: askId, outcome: outcome, concern: concern, topic: topic, answer: w.answer, pieces: w.shown.map(card_) };
}

/** Step two of an ask: the answer from the pieces step one chose. One answer per ask; kept fifteen minutes. */
function answer_(req) {
  const askId = String(req.askId || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 24);
  const v = /^[a-f0-9]{32}$/.test(String(req.v || '')) ? String(req.v) : '';
  const cache = CacheService.getScriptCache();
  const raw = askId ? cache.get('ask:' + askId) : null;
  if (!raw) return { ok: false, error: 'expired' };
  let ctx; try { ctx = JSON.parse(raw); } catch (e) { return { ok: false, error: 'expired' }; }
  if (ctx.v && ctx.v !== v) return { ok: false, error: 'bad_request' };
  cache.remove('ask:' + askId);
  const base = { ok: true, askId: askId, concern: ctx.concern || '', topic: ctx.topic || '' };
  if (ctx.outcome === 'site') {
    const sById = {}; site_().forEach(p => { sById[p.id] = p; });
    const rows = (ctx.ids || []).map(id => sById[id]).filter(Boolean);
    const sw = rows.length ? siteStep_(ctx.q, rows, v) : { kind: 'error', error: 'failed' };
    if (sw.kind === 'error') { updateAsk_(askId, 'error', null); return { ok: false, error: sw.error }; }
    if (sw.kind === 'safety') { updateAsk_(askId, 'safety', []); return Object.assign(base, { outcome: 'safety', pieces: [] }); }
    updateAsk_(askId, 'site', sw.shown.map(p => p.id));
    return Object.assign(base, { outcome: 'site', answer: sw.answer, pieces: sw.shown.map(siteCard_) });
  }
  const byId = {}; pieces_().forEach(p => { byId[p.id] = p; });
  const chosen = (ctx.ids || []).map(id => byId[id]).filter(Boolean);
  if (!chosen.length) { updateAsk_(askId, 'none', []); return Object.assign(base, { outcome: 'none', pieces: [] }); }
  const w = windowStep_(ctx.q, chosen, ctx.outcome, v);
  if (w.kind === 'error') { updateAsk_(askId, 'error', null); return { ok: false, error: w.error }; }
  if (w.kind === 'safety') { updateAsk_(askId, 'safety', []); return Object.assign(base, { outcome: 'safety', pieces: [] }); }
  if (w.kind === 'none') { updateAsk_(askId, 'none', []); return Object.assign(base, { outcome: 'none', pieces: [] }); }
  updateAsk_(askId, ctx.outcome, w.shown.map(p => p.id));
  return Object.assign(base, { outcome: ctx.outcome, answer: w.answer, pieces: w.shown.map(card_) });
}

/** Claude reads only the chosen pieces and answers under the Window. Returns { kind: answer | none | safety | error }. */
function windowStep_(q, chosen, outcome, v) {
  const read = relay_(windowInstruction_(q, chosen, outcome), v);
  if (!read.ok) return { kind: 'error', error: read.error || 'failed' };
  const a = read.data || {};
  if (a.unsafe === true) return { kind: 'safety' };
  const byId = {}; chosen.forEach(p => { byId[p.id] = p; });
  const used = (Array.isArray(a.used) ? a.used : []).map(String).filter(id => byId[id]);
  const shown = (used.length ? used : chosen.map(p => p.id)).slice(0, 3).map(id => byId[id]);
  const answer = {
    problem: oneLine_(a.problem, 400), scripture: oneLine_(a.scripture, 700), people: oneLine_(a.people, 500), decision: oneLine_(a.decision, 500),
    close: String(a.close || '').toLowerCase() === 'begin' ? 'begin' : 'talk'
  };
  if (answer.problem && sameWords_(answer.problem, q)) answer.problem = '';          // only his words back: nothing named, so nothing shown
  if (answer.scripture && !/["“”]/.test(answer.scripture)) answer.scripture = '';    // "What Scripture says" quotes a verse, or it is not shown
  if (!answer.problem && !answer.scripture && !answer.decision) return { kind: 'none' };
  if (outcome === 'close') answer.closeNote = oneLine_(a.closeNote, 240) || 'This is close to what you asked, not the exact thing.';
  return { kind: 'answer', answer: answer, shown: shown };
}

/** True when a line only gives his own words back (the same words, "I" turned to "you"). */
function sameWords_(a, b) {
  const skip = { i: 1, you: 1, me: 1, my: 1, your: 1, am: 1, are: 1, is: 1, the: 1, and: 1, a: 1, to: 1, of: 1, it: 1, that: 1, then: 1, for: 1, with: 1, in: 1, im: 1, youre: 1, myself: 1, yourself: 1 };
  const words = s => String(s || '').toLowerCase().replace(/[’']/g, '').replace(/[^a-z\s]/g, ' ').split(/\s+/).filter(x => x && !skip[x]);
  const A = {}, B = {}; words(a).forEach(x => { A[x] = 1; }); words(b).forEach(x => { B[x] = 1; });
  const ka = Object.keys(A), kb = Object.keys(B); if (!ka.length || !kb.length) return false;
  const both = ka.filter(x => B[x]).length;
  return both / Math.max(ka.length, kb.length) >= 0.7;
}

/** Step two's result written onto the row step one made: the outcome and the pieces shown (null leaves the pieces as they were). */
function updateAsk_(askId, outcome, ids) {
  try {
    const sh = sheet_().getSheetByName('Asks'), H = headerIndex_(sh), data = sh.getDataRange().getValues();
    for (let i = data.length - 1; i >= 1; i--) {
      if (String(data[i][H['ask id']]) !== askId) continue;
      sh.getRange(i + 1, H['outcome'] + 1).setValue(outcome);
      if (ids) sh.getRange(i + 1, H['pieces shown'] + 1).setValue(ids.join(', '));
      return;
    }
  } catch (e) { log_('answer', 'row not updated: ' + e); }
}

function card_(p) { return { id: p.id, source: p.source, kind: p.kind, title: p.title, who: p.who, line: p.description, address: p.address, concern: p.concern || '' }; }

function record_(at, askId, q, door, outcome, concern, topic, ids) {
  const sh = sheet_().getSheetByName('Asks'), H = headerIndex_(sh);
  const row = new Array(GUIDE.TABS.Asks.length).fill('');
  row[H['at']] = at; row[H['ask id']] = askId; row[H['question']] = q; row[H['door']] = door || ''; row[H['outcome']] = outcome; row[H['concern']] = concern || ''; row[H['topic']] = topic || '';
  row[H['pieces shown']] = (ids || []).join(', '); row[H['email given']] = 'no'; row[H['build']] = GUIDE.BUILD;
  sh.appendRow(row);
}

/** The disclosure screen. A hit means the safeguarding line and Let's talk, nothing else. Kept wide on purpose. */
function harmSaid_(q) {
  const s = ' ' + q.toLowerCase().replace(/[’']/g, "'") + ' ';
  const pats = [
    /suicid/, /\bkill(ing)? (myself|me|him|her|them|my (wife|kids?|son|daughter|family))\b/, /\bend(ing)? (my|it all|everything)\b/, /\btake my (own )?life\b/,
    /\bself[- ]?harm/, /\bcut(ting)? myself\b/, /\bhurt(ing)? myself\b/, /\b(don't|do not|dont) want to (live|be here|wake up|be alive|go on)\b/, /\bwant to die\b/, /\bbetter off dead\b/, /\bno reason to live\b/,
    /\boverdos/, /\bgun (to|in) my\b/, /\bwant(ed)? to (hurt|kill|shoot|stab|strangle) (him|her|them|someone|my|the)\b/, /\bgoing to (hurt|kill) (him|her|them|someone|my|the)\b/,
    /\b(hit|hits|hitting|beat|beats|beating|hurt|hurts|hurting|chok(e|ed|ing)|slapp?(ed|ing)?) (my|the|our) (wife|kids?|child|children|son|daughter|girlfriend|partner)\b/,
    /\b(abus(e|ed|ing)|molest|rap(e|ed|ing)|assault(ed)?) /, /\b(my|a|the|our) (child|kid|son|daughter|boy|girl|grandchild) (is|was|being|been) (hurt|abused|touched|beaten|molested)\b/,
    /\btouch(ed|ing|es)? (me|my (son|daughter|child|kid)|a (child|kid|minor))\b/, /\b(she|he|they) (hits|beats|hurts|chokes) me\b/, /\bthreaten(ed|ing)? to (kill|hurt)\b/, /\bsexual(ly)? (abus|assault)/
  ];
  return pats.some(re => re.test(s));
}

// ───────────────────────────── the two instructions ─────────────────────────────

const HOUSE_RULES = [
  'House rules for every word a man reads: plain and clear, never formal, never folksy. Never write "brother". Say "a reader" or "a person", never "a stranger".',
  'Say "our team", never the founders\' names. Never write "the men who come after you" or "the next man". Never give a count of anything.',
  'Scripture: quote only verses that appear in the pieces you were given, in the translation the piece uses, and say which piece it is from. Never add a verse from memory.',
  'The enemy, the accuser, gets only what is needed to state the authority and the verdict in Jesus — never the focus.',
  'Do not label anything with a person\'s first name. Do not ask for anyone\'s name or details. Do not invent a fact, a story or a feeling the man did not give.'
].join(' ');

function pickInstruction_(q, list, concerns, door, site) {
  site = site || [];
  const lines = list.map(p => p.id + ' | ' + p.kind + ' | ' + p.title + (p.who && p.source === 'story' ? ' (' + p.who + ')' : '') + (p.concern ? ' | ' + p.concern : '') + ' | ' + p.description.slice(0, 160));
  return GUIDE.HOUSE_MARK + ' A man typed a question into the ask box on our Read page. Below is the list of ' + (door ? 'every piece behind the door he is standing in, "' + door.name + '"' : 'every piece we have written') + ': stories men wrote and offered, and short articles. ' +
    'Your job is only to choose. Read his words, then pick the pieces that answer what he is carrying — three to five when we have it, fewer only if fewer truly fit.\n\n' +
    'Decide the outcome:\n' +
    '"answer" — we have a piece written for this very thing: the same situation he names, not only the same family of feeling. When you are unsure, it is close.\n' +
    '"close" — no piece was written for his situation, but the nearest one touches it and is worth his reading (a piece on why hurt stays, offered to a man who is grieving, is close, not an answer; a man whose father died and who feels nothing, offered a piece on bitterness, is close; a man fighting pornography, offered a piece on shame, is close).\n' +
    '"none" — his concern is inside what we do (a man\'s life before God: shame, anger, grief, fear, what people think, marriage and fatherhood as a man carries them, faith, calling, the past that stays, story and testimony) but we have not written on it' + (door ? ' behind this door' : '') + '.\n' +
    '"outside" — his concern is outside what we do here (legal, medical, financial or technical advice; politics; doctrine debates; homework; anything not about a man carrying his own life). Then write one plain sentence, "ack", that names what he brought without judging it.\n' +
    '"site" — he is asking about our site or our work rather than carrying something to read about: how to write or tell his story, how to start, where something is, how a piece or course works, what coaching or a course costs, how to join a group or the cohort, how to talk with someone, who we are. Then pick from OUR PAGES ("site", one to five ids, best first) and no pieces. When he both carries something and asks how to begin, choose by what he asked for.\n' +
    '"safety" — he discloses harm to himself or to anyone, or danger now. Pick nothing.\n\n' +
    'Also name the one concern from our list his words belong to ("concern", exact words from the list, or "" if none fits) — judge it by what HE typed, never by the pieces you picked: a man asking about pornography belongs to Pornography even when the nearest piece is on shame; a man whose father died belongs to Fathers and children or to Grief and lament by what he says most. And the topic in two or three plain lowercase words as he would say it ("topic", for example "temper with my kids").\n\n' +
    'OUR CONCERNS:\n' + concerns.map(c => c.name).join('\n') + '\n\n' +
    'Reply with only this JSON: {"outcome": "answer|close|none|outside|site|safety", "pieces": ["id", "id"], "site": ["id"], "concern": "one from the list or empty", "topic": "two or three words", "ack": "one sentence, only when outside"}\n\n' +
    'THE PIECES (id | kind | title | concern | one line):\n' + lines.join('\n') + '\n\n' +
    'OUR PAGES (id | kind | title | one line):\n' + site.map(p => p.id + ' | ' + p.kind + ' | ' + p.title + ' | ' + String(p.line || '').slice(0, 160)).join('\n') + '\n\n' +
    'HIS WORDS:\n' + q;
}

function windowInstruction_(q, chosen, outcome) {
  let budget = GUIDE.MAX_READ_CHARS, blocks = [];
  chosen.forEach(p => {
    const body = p.body.slice(0, Math.max(0, Math.min(GUIDE.MAX_PIECE_CHARS, budget)));
    if (!body) return;
    budget -= body.length;
    blocks.push('=== ' + p.id + ' · ' + p.kind + ' · "' + p.title + '"' + (p.source === 'story' ? ' by ' + p.who : '') + ' ===\n' + body);
  });
  return GUIDE.HOUSE_MARK + ' A man typed what he is carrying into the ask box on our Read page. You have read only the pieces below — stories men wrote and offered, and our short articles. ' +
    'They are the only source. Answer him in the shape of the Wisdom of the Window, in five short moves written as four parts:\n' +
    '1. "problem": name what he is carrying underneath the sentence he typed — one plain sentence to him, the thing under his words. Never give his sentence back to him or reword it; add what it is. No diagnosis. If you cannot name more than he said, write "".\n' +
    '2. "scripture": what Scripture says about it, drawn only from these pieces — quote at least one verse word for word as the piece has it, inside quotation marks, with its reference, and name the piece. A reference with no quoted words is not enough. Two to four sentences. If the pieces quote no verse, write "".\n' +
    '3. "people": people first — who this touches and what justice and mercy look like toward them today, from what the pieces say; one to three sentences.\n' +
    '4. "decision": one decision he can make today from a place of faith, God\'s rule over his own — concrete, small enough to do tonight, drawn from what the pieces ask of a man; one to three sentences.\n' +
    'Then "close": "begin" when the right next step is to write his own story on our site (the pieces are stories, or his concern is about his own past and naming it), or "talk" when the right next step is thirty minutes with one of our team (the concern is live, relational, or heavy).\n' +
    'And "used": the ids of the pieces your answer actually drew from, best first (two or three).\n' +
    (outcome === 'close' ? 'This is a CLOSE match, not exact: also write "closeNote", one plain sentence saying what he asked and what the piece is about instead, so he knows it is close and not the thing itself.\n' : '') +
    'If what he wrote discloses harm to himself or anyone, or danger now, reply only {"unsafe": true}.\n' +
    'Anyone you name — a person in Scripture or in a piece — is introduced in a few words the first time (for example "Naomi, who lost her husband and both sons"); never name someone you have not introduced.\n' +
    'Write to him, plainly, as "you". Short: the whole answer under 170 words. ' + HOUSE_RULES + '\n\n' +
    'Reply with only this JSON: {"problem": "", "scripture": "", "people": "", "decision": "", "close": "begin|talk", "used": ["id"]' + (outcome === 'close' ? ', "closeNote": ""' : '') + '}\n\n' +
    'THE PIECES:\n' + blocks.join('\n\n') + '\n\n' +
    'HIS WORDS:\n' + q;
}

// ───────────────────────────── the relay (the key never lives here) ─────────────────────────────

function relay_(input, id) {
  let r = relayOnce_(input, id);
  if (!r.ok && (r.error === 'network' || r.error === 'bad_request')) { Utilities.sleep(1200); r = relayOnce_(input, id); }   // a dropped redirect or a cold start: once more
  return r;
}
function relayOnce_(input, id) {
  let resp;
  try {
    resp = UrlFetchApp.fetch(GUIDE.RELAY, { method: 'post', contentType: 'text/plain', payload: JSON.stringify({ input: input, id: id || '' }), muteHttpExceptions: true, followRedirects: true });
  } catch (e) { log_('relay', 'fetch failed: ' + String(e).slice(0, 160)); return { ok: false, error: 'network' }; }
  const text = resp.getContentText() || '';
  let j; try { j = JSON.parse(text); } catch (e) { log_('relay', 'not json: ' + text.slice(0, 160)); return { ok: false, error: 'network' }; }
  if (!j || j.ok !== true) { log_('relay', 'error ' + (j && j.error)); return { ok: false, error: (j && j.error) || 'network' }; }
  return { ok: true, data: j.data };
}

// ───────────────────────────── a choice (and the one time an email is kept) ─────────────────────────────

function choice_(req) {
  const askId = String(req.askId || '').replace(/[^A-Za-z0-9:_-]/g, '').slice(0, 24);
  const choice = String(req.choice || '').toLowerCase();
  if (!askId || !CHOICES[choice]) return { ok: false, error: 'bad_request' };
  const line = String(req.line || '').replace(/\s+/g, ' ').trim().slice(0, 300);
  const email = String(req.email || '').trim().toLowerCase();
  const emailOk = email ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) : false;
  if (email && !emailOk) return { ok: false, error: 'bad_email' };
  const ss = sheet_();
  const concerns = concerns_(ss);
  const given = concernFor_(req.concern, concerns);
  let concern = given ? given.name : '';
  const now = new Date();
  const sh = ss.getSheetByName('Asks'), H = headerIndex_(sh);

  if (askId.indexOf('asking:') === 0) {
    // a choice made under a "What men are asking" line: kept as its own anonymous row
    const row = new Array(GUIDE.TABS.Asks.length).fill('');
    row[H['at']] = now; row[H['ask id']] = askId; row[H['question']] = String(req.line0 || req.concernLine || '').slice(0, 200); row[H['outcome']] = 'asking'; row[H['concern']] = concern;
    row[H['choice']] = choice; row[H['his line']] = line; row[H['email given']] = emailOk ? 'yes' : 'no'; row[H['chosen at']] = now; row[H['build']] = GUIDE.BUILD;
    sh.appendRow(row);
  } else {
    const data = sh.getDataRange().getValues();
    let r = -1;
    for (let i = data.length - 1; i >= 1; i--) { if (String(data[i][H['ask id']]) === askId) { r = i; break; } }
    if (r < 0) return { ok: false, error: 'bad_request' };
    if (!concern) concern = String(data[r][H['concern']] || '');
    const prevLine = String(data[r][H['his line']] || '');
    sh.getRange(r + 1, H['choice'] + 1).setValue(choice);
    if (line || !prevLine) sh.getRange(r + 1, H['his line'] + 1).setValue(line || prevLine);
    if (emailOk) sh.getRange(r + 1, H['email given'] + 1).setValue('yes');
    sh.getRange(r + 1, H['chosen at'] + 1).setValue(now);
  }

  if (emailOk) queueEmail_(email, choice, concern);
  return { ok: true, choice: choice, emailKept: emailOk };
}

/** The only place an email goes: the AC bridge's queue. contact_upsert joins the master list and adds a tag for the choice and one for the concern. */
function queueEmail_(email, choice, concern) {
  const cfg = config_();
  const tags = ['Ask — ' + CHOICES[choice]];
  if (concern) tags.push('Concern — ' + concern);
  const params = { email: email, lists: [cfg.masterList], tags: tags, create_tags: true };
  try {
    const q = SpreadsheetApp.openById(GUIDE.AC_SHEET_ID).getSheetByName('queue');
    if (!q) throw new Error('no queue tab on the AC sheet');
    q.appendRow(['guide-' + Utilities.getUuid().slice(0, 8), new Date().toISOString(), 'contact_upsert', JSON.stringify(params), 'new', '', '']);
    log_('email', 'queued ' + choice + (concern ? ' / ' + concern : ''));
  } catch (e) { log_('email', 'queue failed: ' + e); }
}

// ───────────────────────────── the brakes ─────────────────────────────

function allow_(v, cfg) {
  const cache = CacheService.getScriptCache();
  const day = Utilities.formatDate(new Date(), 'America/Chicago', 'yyyyMMdd');
  const kAll = 'asks:all:' + day, kWho = 'asks:' + (v || 'anon') + ':' + day;
  const nAll = numOr_(cache.get(kAll), 0), nWho = numOr_(cache.get(kWho), 0);
  if (nAll >= cfg.perDay) return 'cap_all';
  if (nWho >= (v ? cfg.perVisitor : Math.max(cfg.perVisitor * 3, 30))) return 'cap_who';
  cache.put(kAll, String(nAll + 1), 86400);
  cache.put(kWho, String(nWho + 1), 86400);
  return 'ok';
}

// ───────────────────────────── the monthly review: the list runs itself ─────────────────────────────

/** Monthly. One count per concern from the ask log (asks, what they read, the choices men pressed) and the search phrases men
 *  typed (the Search profile sheet), the phrase men actually type beside it; a line in a man's words for the asking section;
 *  and ONE Front Desk action recommending open / retire / rename with the reason. Counts stay on the sheet; none reaches a page. */
function reviewConcerns() {
  const ss = sheet_(), cfg = config_(ss);
  ensureTabs_(ss);   // adds the "group asks" column on a sheet made before build 5
  const sh = ss.getSheetByName('Concerns'), H = headerIndex_(sh);
  const list = concerns_(ss), pieces = pieces_();
  const since = new Date(Date.now() - 92 * 864e5);
  const asks = rows_(ss.getSheetByName('Asks')).filter(r => toDate_(r['at']) >= since);
  const pieceConcern = {}; pieces.forEach(p => { const c = concernFor_(p.concern, list); pieceConcern[p.id] = c ? c.name : ''; });
  const tally = {}; list.forEach(c => { tally[c.name] = { asks: 0, reads: 0, talk: 0, write: 0, story: 0, group: 0, qs: [] }; });
  const loose = {};   // asks that matched no concern: the candidates to open
  asks.forEach(r => {
    const c = concernFor_(r['concern'], list);
    const t = c ? tally[c.name] : null;
    if (t) {
      if (['answer', 'close', 'none'].indexOf(String(r['outcome'])) >= 0) { t.asks++; if (t.qs.length < 6 && String(r['question']).trim()) t.qs.push(String(r['question']).slice(0, 160)); }
      const ch = String(r['choice'] || ''); if (t[ch] !== undefined) t[ch]++;
    } else if (['answer', 'close', 'none'].indexOf(String(r['outcome'])) >= 0) {
      const k = String(r['topic'] || '').trim() || 'other'; const o = loose[k] || (loose[k] = { topic: k, n: 0, qs: [] }); o.n++; if (o.qs.length < 4) o.qs.push(String(r['question']).slice(0, 160));
    }
    String(r['pieces shown'] || '').split(',').map(s => s.trim()).filter(Boolean).forEach(id => { const cn = pieceConcern[id]; if (cn && tally[cn]) tally[cn].reads++; });
  });
  // search phrases men typed this month
  let phrases = [];
  try {
    const log = rows_(SpreadsheetApp.openById(GUIDE.SEARCH_SHEET_ID).getSheetByName('Monthly log'));
    const months = log.map(r => monthKey_(r['Month'])).filter(Boolean).sort();
    const cur = months[months.length - 1];
    phrases = log.filter(r => monthKey_(r['Month']) === cur && numOr_(r['Impressions'], 0) >= 3).sort((a, b) => numOr_(b['Impressions'], 0) - numOr_(a['Impressions'], 0)).slice(0, 25).map(r => ({ phrase: String(r['Phrase']).trim(), n: numOr_(r['Impressions'], 0) }));
  } catch (e) { log_('review', 'search sheet not read: ' + e); }

  // Claude: map each phrase to a concern, write each concern's line in a man's words, and recommend
  const looseList = Object.keys(loose).map(k => loose[k]).sort((a, b) => b.n - a.n).slice(0, 6);
  const instr = GUIDE.HOUSE_MARK + ' Our Read page runs on one list of concerns (below). Three jobs, from the material below, for the monthly review our team reads.\n' +
    '1. "phrases": for each search phrase men typed, the one concern it belongs to (exact words from the list) or "" — as [{"phrase": "", "concern": ""}].\n' +
    '2. "lines": for each concern that has questions, ONE line in a man\'s own words — first person, plain, as he might say it out loud, built from what men typed; no name, place, age, job or detail that could point at a person; no counts — as [{"concern": "", "line": ""}].\n' +
    '3. "recommend": up to four recommendations for our team, each {"action": "open|retire|rename", "concern": "", "to": "new name, for rename only", "reason": "one plain sentence with the evidence"}. ' +
    'Open: a loose topic men ask about that no concern covers. Retire: an open concern with no asks, no reads and no search phrase in three months. Rename: a concern whose name is not the phrase men actually type. Recommend nothing you cannot back from the material.\n' +
    HOUSE_RULES + '\n\nReply with only this JSON: {"phrases": [], "lines": [], "recommend": []}\n\n' +
    'THE CONCERNS (name | open | state | asks | reads | choices talk/write/story/group | what men typed):\n' +
    list.map(c => { const t = tally[c.name]; return c.name + ' | ' + (c.open ? 'open' : 'closed') + ' | ' + c.state + ' | ' + t.asks + ' | ' + t.reads + ' | ' + t.talk + '/' + t.write + '/' + t.story + '/' + t.group + ' | ' + t.qs.join(' || '); }).join('\n') +
    '\n\nLOOSE TOPICS (no concern matched | asks | what men typed):\n' + (looseList.length ? looseList.map(l => l.topic + ' | ' + l.n + ' | ' + l.qs.join(' || ')).join('\n') : '(none)') +
    '\n\nSEARCH PHRASES MEN TYPED (phrase | showings):\n' + (phrases.length ? phrases.map(p => p.phrase + ' | ' + p.n).join('\n') : '(none)');
  const r = relay_(instr, '');
  const d = (r.ok && r.data) || {};
  const phraseMap = {}; (Array.isArray(d.phrases) ? d.phrases : []).forEach(x => { const c = concernFor_(x && x.concern, list); if (c && x.phrase) (phraseMap[c.name] = phraseMap[c.name] || []).push(x.phrase); });
  const lineMap = {}; (Array.isArray(d.lines) ? d.lines : []).forEach(x => { const c = concernFor_(x && x.concern, list); if (c && x.line) lineMap[c.name] = oneLine_(x.line, 160); });
  const recs = (Array.isArray(d.recommend) ? d.recommend : []).filter(x => x && /^(open|retire|rename)$/.test(String(x.action))).slice(0, 4);

  // write the counts, the phrase, the line (only where none is typed yet) and this month's recommendation per concern
  const month = Utilities.formatDate(new Date(), 'America/Chicago', 'yyyy-MM');
  list.forEach(c => {
    const t = tally[c.name], ph = phraseMap[c.name] || [];
    const searchN = phrases.filter(p => ph.indexOf(p.phrase) >= 0).reduce((s, p) => s + p.n, 0);
    const rec = recs.find(x => concernFor_(x.concern, list) && concernFor_(x.concern, list).name === c.name);
    const vals = {}; vals['asks'] = t.asks; vals['reads'] = t.reads; vals['talk'] = t.talk; vals['write'] = t.write; vals['story'] = t.story; vals['group asks'] = t.group; vals['search'] = searchN;   // never 'group': that is John's tick
    vals['phrase'] = ph.length ? ph[0] : (t.qs[0] || ''); vals['recommendation'] = rec ? (month + ': ' + rec.action + (rec.to ? ' to "' + rec.to + '"' : '') + ' — ' + oneLine_(rec.reason, 240)) : '';
    Object.keys(vals).forEach(k => { if (H[k] !== undefined) sh.getRange(c.row, H[k] + 1).setValue(vals[k]); });
    if (!c.line && lineMap[c.name]) sh.getRange(c.row, H['line'] + 1).setValue(lineMap[c.name]);
  });
  // a recommended "open" lands as a NEW row, unticked, so the tick is the only hand step
  const opens = recs.filter(x => x.action === 'open' && x.concern && !concernFor_(x.concern, list));
  if (opens.length) {
    writeConcernRows_(sh, H, opens.map((x, i) => {
      const row = new Array(GUIDE.TABS.Concerns.length).fill(''); row[H['concern']] = oneLine_(x.concern, 40); row[H['order']] = list.length + i + 1; row[H['open']] = false; row[H['asking']] = false; row[H['group']] = false;
      row[H['state']] = 'following'; row[H['pieces']] = 0; row[H['recommendation']] = month + ': open — ' + oneLine_(x.reason, 240); row[H['added']] = new Date(); return row; }));
  }
  CacheService.getScriptCache().remove('guidefeed');

  // one Front Desk action, with the reasons; the desk leaves it open until ticked
  if (cfg.fdActions) {
    const groupReady = list.filter(c => tally[c.name].group >= 6 && !c.group).map(c => c.name);
    const because = (recs.length ? recs.map(x => x.action.charAt(0).toUpperCase() + x.action.slice(1) + ' "' + x.concern + '"' + (x.to ? ' as "' + x.to + '"' : '') + ': ' + oneLine_(x.reason, 200)).join(' ') : 'Nothing to open, retire or rename this month: every open concern had asks or reads, and no loose topic repeated. ') +
      (groupReady.length ? ' Men pressing "A group on this" have reached six on ' + groupReady.join(', ') + ' — your call on opening it (tick "group").' : '') +
      ' Each line is a tick on the Concerns tab: open · asking · group, or a name in "rename to"; the page follows within ten minutes.';
    fdAction_('concerns:' + month, cfg.owner, 'Review the concerns: open, retire or rename', 'the Read door', because.trim(), 'https://docs.google.com/spreadsheets/d/' + ss.getId() + '/edit');
  }
  log_('review', recs.length + ' recommendation' + (recs.length === 1 ? '' : 's') + ', ' + Object.keys(lineMap).length + ' lines');
}

function fdAction_(key, owner, doThis, forWhat, because, link) {
  try {
    const sh = SpreadsheetApp.openById(GUIDE.FD_SHEET_ID).getSheetByName('Actions');
    if (!sh) return;
    const H = headerIndex_(sh), data = sh.getDataRange().getValues();
    for (let i = 1; i < data.length; i++) if (String(data[i][H['key']]) === key) { sh.getRange(i + 1, H['because'] + 1).setValue(because); return; }
    const row = new Array(data[0].length).fill('');
    row[H['key']] = key; row[H['first seen']] = new Date(); row[H['owner']] = owner; row[H['do this']] = doThis; row[H['for']] = forWhat;
    row[H['because']] = because; row[H['link']] = link; row[H['status']] = 'open'; row[H['mark done by hand']] = false; row[H['rule']] = 'GUIDE1';
    sh.appendRow(row);
  } catch (e) { log_('review', 'front desk row failed: ' + e); }
}

// ───────────────────────────── helpers ─────────────────────────────

function fetch_(url) {
  const r = UrlFetchApp.fetch(url, { muteHttpExceptions: true, followRedirects: true, headers: { 'Cache-Control': 'no-cache' } });
  const code = r.getResponseCode();
  if (code < 200 || code >= 300) throw new Error('HTTP ' + code + ' for ' + url);
  return r.getContentText();
}
function textOf_(html) {
  return String(html || '').replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|h[1-6]|li|blockquote|section)>/gi, '\n').replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&#(\d+);/g, (m, n) => String.fromCharCode(Number(n)))
    .replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();
}
function clean_(s) { return String(s == null ? '' : s).replace(/\s+/g, ' ').trim(); }
function oneLine_(s, max) { s = clean_(s); if (max && s.length > max) s = s.slice(0, max).replace(/\s+\S*$/, '') + '…'; return s; }
function safeId_(x) { return String(x || '').replace(/[^A-Za-z0-9_-]/g, ''); }
function firstSentence_(t) {
  t = clean_(t).replace(/^["“‘']+/, '');
  let best = -1; ['. ', '! ', '? '].forEach(e => { const k = t.indexOf(e, 40); if (k >= 0 && (best < 0 || k < best)) best = k; });
  let s = best >= 0 ? t.slice(0, best + 1) : t;
  if (s.length > 160) s = s.slice(0, 160).replace(/\s+\S*$/, '') + '…';
  return s;
}
function numOr_(v, d) { const n = parseFloat(v); return isNaN(n) ? d : n; }
function toDate_(v) { if (v instanceof Date) return v; const d = new Date(v); return isNaN(d) ? new Date(0) : d; }
function monthKey_(v) { if (v instanceof Date) return Utilities.formatDate(v, 'America/Chicago', 'yyyy-MM'); const m = String(v || '').match(/^(\d{4})-(\d{2})/); return m ? m[1] + '-' + m[2] : ''; }
function headerIndex_(sh) { const H = {}; const row = sh.getLastColumn() ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0] : []; row.forEach((h, i) => { H[String(h).trim()] = i; }); return H; }
function rows_(sh) {
  if (!sh || sh.getLastRow() < 2) return [];
  const data = sh.getDataRange().getValues(), head = data[0].map(String);
  return data.slice(1).map(r => { const o = {}; head.forEach((h, i) => { o[h] = r[i]; }); return o; });
}
function json_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
function log_(what, detail) { try { sheet_().getSheetByName('Log').appendRow([new Date(), what, String(detail).slice(0, 900)]); } catch (e) {} }

/** Run by hand in the editor to see one whole ask without the page: Run → tryAsk, then View → Logs. */
function tryAsk() {
  const r = ask_({ q: 'I lose my temper with my kids and then I hate myself for it', v: '' });
  Logger.log(JSON.stringify(r, null, 2));
}

// ───────────────────────────── guide.js — the box, the doors and the asking lines, served to any page that carries the loader ─────────────────────────────

function GUIDE_JS() { return "/* AP-GUIDE guide.js build 4 (the box reads \"What do you need help with? Ask in your own words.\"; a question about the site or the work gets a plain answer from our own pages, the pages as cards under \"Where to go\", then Let's talk) · build 3 (the answer comes in two steps: the pieces first, then the answer; the Let's talk box fits the moment — its own words after an outside ask and after the safeguarding line; the answer reads left-aligned; the box the page already carries is kept, and an ask pressed before this script arrived is sent; a door with no stories and an answer that ends in Begin shows Begin once; the navy box fills its row; on a phone the doors fill their rows; \"Where we are\" names the piece) · build 2 (the scroll to the answer sets the site's scroll box directly — on the live site the smooth scrollTo call was ignored) · build 1 · the Guide: the ask box (\"What are you carrying? Ask in your own words.\"), the row of concern doors,\n   the answer above the cards, the four choices and \"What men are asking\" · served by the Guide script (?file=guide.js).\n   Any page carries it with one loader line; the script's address is read off that line. On /read: the box and the doors sit in\n   the band under the lede; a tapped door narrows both sections to it and the ask answers inside it; each section shows the\n   newest handful. Every piece's concern comes from the Guide's feed (one read on load). */\n(function () {\n  if (window.apGuide) return;\n  var S = document.currentScript, BASE = S && S.src ? S.src.split(\"?\")[0] : \"\";\n  var BUILD = 4;\n  var doc = document;\n  var host = doc.querySelector(\".apr\") || doc.body;\n  function $(sel, root) { return (root || doc).querySelector(sel); }\n  function el(tag, cls, html) { var e = doc.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }\n  function esc(s) { return (\"\" + (s == null ? \"\" : s)).replace(/&/g, \"&amp;\").replace(/</g, \"&lt;\").replace(/>/g, \"&gt;\").replace(/\"/g, \"&quot;\"); }\n  var NB = String.fromCharCode(160);\n  function noLonely(s) { s = \"\" + (s || \"\"); var k = s.lastIndexOf(\" \"); if (k > 0 && s.split(\" \").length > 2) s = s.slice(0, k) + NB + s.slice(k + 1); return s; }\n  function track(name, p) { try { if (window.gtag) window.gtag(\"event\", name, p || {}); } catch (e) {} }\n\n  /* ---- who is asking: a random id this browser keeps, never a name ---- */\n  function visitor() {\n    var k = \"apAskV\", v = \"\";\n    try { v = localStorage.getItem(k) || \"\"; } catch (e) {}\n    if (!/^[a-f0-9]{32}$/.test(v)) {\n      var a = new Uint8Array(16); try { crypto.getRandomValues(a); } catch (e) { for (var i = 0; i < 16; i++) a[i] = Math.floor(Math.random() * 256); }\n      v = \"\"; for (var j = 0; j < 16; j++) v += (a[j] < 16 ? \"0\" : \"\") + a[j].toString(16);\n      try { localStorage.setItem(k, v); } catch (e) {}\n    }\n    return v;\n  }\n\n  /* ---- styles: the page's own colors and type ---- */\n  var css = \"\" +\n    \".apa-box{max-width:720px;margin:28px auto 0;text-align:left}\" +\n    \".apa-row{display:flex;gap:10px;align-items:stretch}\" +\n    \".apa-q{flex:1;min-width:0;font-family:var(--apr-serif,Georgia,serif);font-size:18px;line-height:1.4;padding:13px 16px;border:1px solid #D9D2C3;border-radius:4px;background:#fff;color:#1F1D1A;outline:none}\" +\n    \".apa-q:focus{border-color:#B8945F;box-shadow:0 0 0 3px rgba(184,148,95,.25)}\" +\n    \".apa-q::placeholder{color:#8A8275;opacity:1}\" +\n    \".apa-go{font-family:var(--apr-sans,'Segoe UI',Helvetica,Arial,sans-serif);font-weight:600;font-size:16px;letter-spacing:.02em;padding:0 22px;border:0;border-radius:4px;background:#B8945F;color:#1F2A44;cursor:pointer;white-space:nowrap}\" +\n    \".apa-go:hover{background:#C9A66F}.apa-go[disabled]{opacity:.7;cursor:default}\" +\n    \".apa-doors{display:flex;flex-wrap:wrap;justify-content:center;gap:8px 8px;max-width:820px;margin:22px auto 0}\" +\n    \".apa-doors a{font-family:var(--apr-sans,'Segoe UI',Helvetica,Arial,sans-serif);font-size:14px;font-weight:600;letter-spacing:.01em;line-height:1.2;padding:8px 14px;border:1px solid rgba(217,210,195,.55);border-radius:999px;color:#FBF9F5!important;text-decoration:none!important;cursor:pointer;white-space:nowrap}\" +\n    \".apa-doors a:hover{border-color:#B8945F}.apa-doors a.apa-on{background:#B8945F;border-color:#B8945F;color:#1F2A44!important}\" +\n    \".apa-inside{font-family:var(--apr-sans,'Segoe UI',Helvetica,Arial,sans-serif);font-size:14px;color:#D9D2C3;text-align:center;margin:12px 0 0}\" +\n    \".apa-sec-note{font-family:var(--apr-sans,sans-serif);font-size:15px;color:#6B6357;text-align:center;margin:18px 0 0}\" +\n    \".apa-help{font-family:var(--apr-sans,'Segoe UI',Helvetica,Arial,sans-serif);font-size:13.5px;line-height:1.5;color:#D9D2C3;margin:10px 2px 0;text-align:left}\" +\n    \".apa-note{font-family:var(--apr-sans,'Segoe UI',Helvetica,Arial,sans-serif);font-size:14px;color:#D9D2C3;margin:10px 2px 0;text-align:left;min-height:0}\" +\n    \".apa-out{padding:48px 0 0}.apa-out:empty{padding:0}\" +\n    \".apa-in{max-width:1120px;margin:0 auto;padding:0 24px}\" +\n    \".apa-ans{max-width:760px;margin:0 auto;background:#fff;border:1px solid #E4DCCB;border-left:4px solid #B8945F;padding:28px 32px 26px}\" +\n    \".apa-ans .apa-you{font-family:var(--apr-sans,sans-serif);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#B8945F;margin:0 0 6px}\" +\n    \".apa-ans .apa-asked{font-family:var(--apr-serif,Georgia,serif);font-size:19px;line-height:1.45;color:#1F2A44;margin:0 0 18px;font-style:italic}\" +\n    \".apa-ans .apa-k{font-family:var(--apr-sans,sans-serif);font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#8C6A3F;margin:16px 0 4px}\" +\n    \".apa-ans p.apa-p{font-family:var(--apr-serif,Georgia,serif);font-size:17.5px;line-height:1.6;color:#1F1D1A;margin:0}\" +\n    \".apa-ans .apa-close{font-family:var(--apr-sans,sans-serif);font-size:15px;line-height:1.5;color:#6B6357;margin:18px 0 0;padding-top:14px;border-top:1px solid #E4DCCB}\" +\n    \".apa-from{font-family:var(--apr-sans,sans-serif);font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#B8945F;text-align:center;margin:36px 0 0}\" +\n    \".apa-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:16px}\" +\n    \".apa-grid.apa-n2{grid-template-columns:repeat(2,1fr);max-width:760px;margin-left:auto;margin-right:auto}\" +\n    \".apa-grid.apa-n1{grid-template-columns:1fr;max-width:380px;margin-left:auto;margin-right:auto}\" +\n    \".apa-grid a.apr-card .apr-l::before,.apa-grid a.apr-card .apr-l::after{content:none}\" +\n    \".apa-grid a.apr-card[data-src=story] .apr-l::before{content:\\\"\\\\201C\\\";color:#B8945F}.apa-grid a.apr-card[data-src=story] .apr-l::after{content:\\\"\\\\201D\\\";color:#B8945F}\" +\n    \".apa-grid a.apr-card[data-src=article]{padding:0 0 20px;overflow:hidden}\" +\n    \".apa-grid a.apr-card[data-src=article] .apr-d,.apa-grid a.apr-card[data-src=article] .apr-t,.apa-grid a.apr-card[data-src=article] .apr-l,.apa-grid a.apr-card[data-src=article] .apr-go{margin-left:24px;margin-right:24px}\" +\n    \".apa-grid a.apr-card[data-src=article] .apr-d{font-family:var(--apr-sans,sans-serif);font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#B8945F;margin-top:18px}\" +\n    \".apa-grid a.apr-card[data-src=article] .apr-l{color:#6B6357}\" +\n    \".apa-grid a.apr-card[data-src=article] .apr-pic{display:block;width:100%;aspect-ratio:16/9;background:#DED6C6 center/cover no-repeat}\" +\n    \".apa-navy{max-width:380px;margin:28px auto 0}.apa-navy a.apr-you{display:flex}\" +\n    \".apa-four{max-width:760px;margin:36px auto 0;background:#fff;border:1px solid #E4DCCB;padding:26px 32px 22px}\" +\n    \".apa-four .apa-lead{font-family:var(--apr-serif,Georgia,serif);font-size:19px;line-height:1.5;color:#1F2A44;margin:0 0 18px}\" +\n    \".apa-ch{display:grid;grid-template-columns:170px 1fr;gap:6px 18px;align-items:start;padding:12px 0;border-top:1px solid #E4DCCB}\" +\n    \".apa-ch a.apa-b{display:inline-block;font-family:var(--apr-sans,sans-serif);font-weight:600;font-size:15px;line-height:1.3;color:#1F2A44!important;background:#F6F2EA;border:1px solid #D9D2C3;border-radius:4px;padding:8px 12px;text-decoration:none!important;cursor:pointer;text-align:center}\" +\n    \".apa-ch a.apa-b:hover{border-color:#B8945F}.apa-ch.apa-on a.apa-b{background:#1F2A44;color:#fff!important;border-color:#1F2A44}\" +\n    \".apa-ch .apa-d{font-family:var(--apr-serif,Georgia,serif);font-size:16.5px;line-height:1.5;color:#1F1D1A;margin:7px 0 0}\" +\n    \".apa-ch .apa-more{grid-column:1/-1}\" +\n    \".apa-ask1,.apa-mail{margin-top:10px}\" +\n    \".apa-ask1 label,.apa-mail label{display:block;font-family:var(--apr-sans,sans-serif);font-size:14px;color:#6B6357;margin:0 0 6px}\" +\n    \".apa-ask1 input,.apa-mail input{width:100%;font-family:var(--apr-serif,Georgia,serif);font-size:16px;padding:10px 12px;border:1px solid #D9D2C3;border-radius:4px;background:#fff;color:#1F1D1A;outline:none}\" +\n    \".apa-ask1 input:focus,.apa-mail input:focus{border-color:#B8945F}\" +\n    \".apa-mail{display:flex;flex-wrap:wrap;gap:10px;align-items:flex-end}.apa-mail div{flex:1;min-width:220px}\" +\n    \".apa-mail button{font-family:var(--apr-sans,sans-serif);font-weight:600;font-size:15px;padding:11px 18px;border:0;border-radius:4px;background:#B8945F;color:#1F2A44;cursor:pointer}\" +\n    \".apa-mail button:hover{background:#C9A66F}.apa-mail button[disabled]{opacity:.7;cursor:default}\" +\n    \".apa-ok{font-family:var(--apr-sans,sans-serif);font-size:15px;color:#1F2A44;margin:10px 0 0}\" +\n    \".apa-ask-line{max-width:760px;margin:0 auto;font-family:var(--apr-serif,Georgia,serif);font-size:19px;line-height:1.55;color:#1F1D1A;background:#fff;border:1px solid #E4DCCB;border-left:4px solid #B8945F;padding:24px 32px}\" +\n    \".apa-ask-line b{color:#1F2A44;font-weight:600}\" +\n    \".apa-ask-line .apa-small{display:block;font-family:var(--apr-sans,sans-serif);font-size:15px;line-height:1.5;color:#6B6357;margin-top:12px}\" +\n    \".apa-nomatch{font-family:var(--apr-sans,sans-serif);font-size:15px;color:#6B6357;text-align:center;margin:18px 0 0}\" +\n    \".apa-asking-grid{display:grid;grid-template-columns:1fr;gap:16px;margin-top:30px;max-width:820px;margin-left:auto;margin-right:auto}\" +\n    \".apa-con{background:#fff;border:1px solid #E4DCCB;padding:22px 28px 18px}\" +\n    \".apa-con .apa-cq{font-family:var(--apr-serif,Georgia,serif);font-size:20px;line-height:1.45;color:#1F2A44;margin:0}\" +\n    \".apa-con .apa-cq::before{content:\\\"\\\\201C\\\";color:#B8945F}.apa-con .apa-cq::after{content:\\\"\\\\201D\\\";color:#B8945F}\" +\n    \".apa-con .apa-cw{font-family:var(--apr-sans,sans-serif);font-size:15px;line-height:1.5;color:#1F1D1A;margin:10px 0 0}\" +\n    \".apa-con .apa-cw b{color:#8C6A3F;font-weight:600;letter-spacing:.02em}\" +\n    \".apa-con .apa-cw a{color:#8C6A3F!important;text-decoration:none!important;border-bottom:1px solid #B8945F}\" +\n    \".apa-con .apa-cl{display:flex;flex-wrap:wrap;gap:8px 18px;margin:14px 0 0;padding-top:12px;border-top:1px solid #E4DCCB}\" +\n    \".apa-con .apa-cl a{font-family:var(--apr-sans,sans-serif);font-weight:600;font-size:14px;color:#1F2A44!important;text-decoration:none!important;cursor:pointer}\" +\n    \".apa-con .apa-cl a:hover{color:#8C6A3F!important}.apa-con .apa-cl a.apa-on{color:#8C6A3F!important;border-bottom:2px solid #B8945F}\" +\n    \".apa-con .apa-cx{margin-top:12px}\" +\n    \".apa-ans,.apa-four,.apa-ask-line,.apa-con{text-align:left}\" +\n    \".apa-ans .apa-wait{font-family:var(--apr-sans,sans-serif);font-size:15px;line-height:1.5;color:#6B6357;margin:4px 0 0}\" +\n    \".apr a.apr-you.apa-wide{align-items:center;text-align:center}.apr a.apr-you.apa-wide .apr-meta{justify-content:center}\" +\n    \".apa-sec-note a{color:#8C6A3F!important;text-decoration:none!important;border-bottom:1px solid #B8945F;font-weight:600}\" +\n    \"@media (max-width:1023px){.apa-grid{grid-template-columns:1fr 1fr}}\" +\n    \"@media (max-width:640px){.apa-doors a{flex:1 1 auto;text-align:center}.apa-row{flex-direction:column}.apa-q{font-size:15.5px;padding:12px 13px}.apa-go{padding:13px 22px}.apa-grid,.apa-grid.apa-n2{grid-template-columns:1fr;gap:14px}.apa-ans,.apa-four,.apa-ask-line{padding:22px 20px 20px}.apa-ch{grid-template-columns:1fr;gap:4px}.apa-in{padding:0 16px}.apa-out{padding-top:36px}}\";\n  var st = el(\"style\"); st.id = \"apAskCss\"; st.textContent = css; doc.head.appendChild(st);\n\n  /* ---- words: the fixed lines a man reads (do not reword on the page; the script and the page carry the same) ---- */\n  var W = {\n    placeholder: \"What do you need help with? Ask in your own words.\",\n    ask: \"Ask\", reading: \"Reading\\u2026\",\n    help: \"We keep the questions, not who asked them, unless you leave your email so we can tell you when it\\u2019s ready.\",\n    fromThese: \"From these pieces\",\n    whereToGo: \"Where to go\",\n    labels: { problem: \"What you are carrying\", scripture: \"What Scripture says\", people: \"People first\", decision: \"A decision today\" },\n    four: \"We haven\\u2019t written on that yet. We write what we have walked, and there is more to write. Here is what we can do.\",\n    closeFour: \"Here is what we can do.\",\n    choices: [\n      { k: \"talk\", b: \"Let\\u2019s talk\", d: \"A conversation, not an article. Thirty minutes with one of our team.\" },\n      { k: \"write\", b: \"Write about it\", d: \"We\\u2019ll write a piece on this. One line on what you\\u2019d want it to answer, if you have it.\" },\n      { k: \"story\", b: \"A story to write\", d: \"We\\u2019ll build a Your Story piece around it, for you and other men to write your own.\" },\n      { k: \"group\", b: \"A group on this\", d: \"When enough men ask, we open a group. Count me in.\" }\n    ],\n    oneLine: \"One line on what you\\u2019d want it to answer, if you have it.\",\n    mail: \"Want to know when it\\u2019s ready? Leave your email.\",\n    mailGo: \"Tell me\", mailDone: \"We\\u2019ll tell you when it\\u2019s ready.\", mailBad: \"That doesn\\u2019t look like an email address. Check it and try again.\",\n    noted: \"Noted.\",\n    outsideAbout: \"What we do here is narrower: story work with men \\u2014 the things you carry, what Scripture says about them, and the next honest step. If you want to talk it through with one of our team, that door is open.\",\n    safety: \"Thank you for saying it here. What you wrote is more than a page should carry. If you or anyone is in danger right now, call 911. Any hour, call or text <b>988</b>, or text <b>HOME</b> to <b>741741</b>. And talk with one of our team \\u2014 that is what Let\\u2019s talk is for.\",\n    fail: \"The answer did not come back. Your words are still in the box \\u2014 try again in a moment, or go straight to Let\\u2019s talk.\",\n    capped: \"The box has answered all it can for today. Come back tomorrow, or go straight to Let\\u2019s talk.\",\n    nomatch: \"Nothing on this page matches those words yet. Press Ask and we will look properly.\",\n    whereWeAre: \"Where we are:\",\n    inside: \"Inside \", stepOut: \". Tap it again to step out.\",\n    noStory: \"No story behind this door yet. Yours could be the first.\",\n    noStoryLead: \"No story behind this door yet.\", noStoryGo: \"Yours could be the first →\",\n    noArticle: \"No article behind this door yet.\",\n    waiting: \"Reading these pieces with your words…\",\n    waitingSite: \"Reading our pages for your answer…\",\n    failSite: \"The answer did not come back. The pages below are where it would have come from — or go straight to Let’s talk.\",\n    failAfter: \"The answer did not come back. The pieces below are where it would have come from — or go straight to Let’s talk.\",\n    talkBox: { k: \"Let’s talk\", t: \"Talk it through with us.\", l: \"Thirty minutes with one of our team, free. You tell us where you are and what you are carrying.\", go: \"Let’s talk\" },\n    safeBox: { k: \"Let’s talk\", t: \"You don’t have to carry this alone.\", l: \"Talk with one of our team. Tell us where you are.\", go: \"Let’s talk\" }\n  };\n\n  /* ---- the box ---- */\n  var bandSlot = $(\"[data-ap-ask=band]\"), outSlot = $(\"[data-ap-ask=out]\"), askingSlot = $(\"[data-ap-ask=asking]\");\n  if (!bandSlot) { bandSlot = el(\"div\"); bandSlot.setAttribute(\"data-ap-ask\", \"band\"); var lede = $(\".apr-lede\") || $(\".apr-band .apr-in\"); if (lede && lede.parentNode) lede.parentNode.insertBefore(bandSlot, lede.nextSibling); else host.insertBefore(bandSlot, host.firstChild); }\n  if (!outSlot) { outSlot = el(\"section\"); outSlot.setAttribute(\"data-ap-ask\", \"out\"); var band = $(\".apr-band\"); if (band && band.parentNode) band.parentNode.insertBefore(outSlot, band.nextSibling); else host.appendChild(outSlot); }\n  outSlot.className = (outSlot.className ? outSlot.className + \" \" : \"\") + \"apa-out\";\n\n  /* the page may already carry the box (so it is there from the first moment); keep it and what he has typed */\n  if (!bandSlot.querySelector(\"#apAskForm\")) bandSlot.innerHTML = '<form class=\"apa-box\" id=\"apAskForm\" autocomplete=\"off\"><div class=\"apa-row\"><input class=\"apa-q\" id=\"apAskQ\" type=\"text\" maxlength=\"600\" placeholder=\"' + esc(W.placeholder) + '\" aria-label=\"' + esc(W.placeholder) + '\"><button class=\"apa-go\" id=\"apAskGo\" type=\"submit\">' + esc(W.ask) + '</button></div><p class=\"apa-help\">' + esc(W.help) + '</p><p class=\"apa-note\" id=\"apAskNote\"></p></form>';\n  if (!bandSlot.querySelector(\"#apDoors\")) bandSlot.appendChild(el(\"nav\", \"apa-doors\")).id = \"apDoors\";\n  if (!bandSlot.querySelector(\"#apInside\")) bandSlot.appendChild(el(\"p\", \"apa-inside\")).id = \"apInside\";\n  $(\"#apDoors\").setAttribute(\"aria-label\", \"Doors\"); $(\"#apDoors\").hidden = true; $(\"#apInside\").hidden = true;\n  if (!$(\"#apAskNote\")) { var nt = el(\"p\", \"apa-note\"); nt.id = \"apAskNote\"; $(\"#apAskForm\").appendChild(nt); }\n  var form = $(\"#apAskForm\"), q = $(\"#apAskQ\"), go = $(\"#apAskGo\"), note = $(\"#apAskNote\"), doorsEl = $(\"#apDoors\"), insideEl = $(\"#apInside\");\n  var DOOR = \"\", FEED = null, HANDFUL = 6;\n\n  /* ---- narrowing: as he types, the page's cards narrow to the ones that carry his words ---- */\n  var STOP = { the: 1, and: 1, for: 1, with: 1, that: 1, this: 1, what: 1, how: 1, why: 1, when: 1, who: 1, can: 1, you: 1, your: 1, are: 1, was: 1, were: 1, have: 1, has: 1, had: 1, not: 1, but: 1, from: 1, about: 1, into: 1, out: 1, all: 1, any: 1, some: 1, just: 1, like: 1, feel: 1, feels: 1, feeling: 1, get: 1, got: 1, keep: 1, keeps: 1, want: 1, dont: 1, cant: 1, wont: 1, its: 1, \"i'm\": 1, ive: 1, \"i've\": 1, been: 1, being: 1, very: 1, really: 1, much: 1, more: 1, than: 1, then: 1, there: 1, here: 1, them: 1, they: 1, him: 1, her: 1, his: 1, she: 1, our: 1, one: 1, every: 1, always: 1, never: 1, still: 1, again: 1, over: 1, after: 1, before: 1, because: 1, does: 1, did: 1, doing: 1, done: 1, know: 1, think: 1, should: 1, would: 1, could: 1, will: 1, way: 1, thing: 1, things: 1, something: 1, someone: 1, make: 1, makes: 1, made: 1, time: 1, myself: 1, self: 1, own: 1, man: 1, men: 1, life: 1, god: 0 };\n  function stem(w) { w = w.toLowerCase().replace(/[^a-z']/g, \"\"); if (w.length > 5 && /ing$/.test(w)) w = w.slice(0, -3); else if (w.length > 4 && /(ed|es|ly)$/.test(w)) w = w.slice(0, -2); else if (w.length > 3 && /s$/.test(w) && !/ss$/.test(w)) w = w.slice(0, -1); return w; }\n  function tokens(s) { var out = [], seen = {}; (\"\" + s).split(/\\s+/).forEach(function (w) { var t = stem(w); if (t.length < 3 || STOP[w.toLowerCase()] || STOP[t]) return; if (!seen[t]) { seen[t] = 1; out.push(t); } }); return out; }\n  function cards() { return Array.prototype.slice.call(doc.querySelectorAll(\"#aprStories a.apr-card, #aprArticles a.apr-card\")); }\n  var cardIndex = null;\n  function indexCards() { cardIndex = cards().map(function (c) { return { el: c, text: \" \" + tokens(c.textContent).join(\" \") + \" \", raw: c.textContent.toLowerCase(), grid: c.parentNode }; }); }\n  var nomatchEl = null, lastText = \"\";\n  function inDoor(c) { return !DOOR || (c.el.getAttribute(\"data-concern\") || \"\") === DOOR; }\n  /* what shows: inside a door, every card behind it; otherwise the newest handful of each section; typing narrows within that */\n  function narrow(text) {\n    if (!cardIndex) indexCards();\n    lastText = text == null ? lastText : text;\n    var tk = tokens(lastText), need = tk.length >= 3 ? 2 : 1, any = false, i, perGrid = {};\n    cardIndex.forEach(function (c) {\n      var n = 0; for (i = 0; i < tk.length; i++) if (c.text.indexOf(\" \" + tk[i] + \" \") >= 0 || c.raw.indexOf(tk[i]) >= 0) n++;\n      c.hit = tk.length ? n >= need : true; if (tk.length && c.hit && inDoor(c)) any = true;\n    });\n    var typedMiss = tk.length && !any;\n    cardIndex.forEach(function (c) {\n      var show = inDoor(c) && (typedMiss || c.hit);\n      if (show && !DOOR && (!tk.length || typedMiss)) { var k = c.grid === $(\"#aprStories\") ? \"s\" : \"a\"; perGrid[k] = (perGrid[k] || 0) + 1; if (perGrid[k] > HANDFUL) show = false; }\n      c.el.style.display = show ? \"\" : \"none\";\n    });\n    if (!nomatchEl) { nomatchEl = el(\"p\", \"apa-nomatch\", esc(W.nomatch)); var g = $(\"#aprStories\"); if (g && g.parentNode) g.parentNode.insertBefore(nomatchEl, g); else nomatchEl = null; }\n    if (nomatchEl) nomatchEl.style.display = typedMiss ? \"\" : \"none\";\n    sectionNotes();\n  }\n  var BEGIN_SHOWN = false;   /* the answer on the page ends in Begin */\n  function sectionNotes() {\n    [[\"#aprStories\", W.noStory], [\"#aprArticles\", W.noArticle]].forEach(function (pair) {\n      var g = $(pair[0]); if (!g) return;\n      var noteEl = g.parentNode.querySelector(\".apa-sec-note\"); if (!noteEl) { noteEl = el(\"p\", \"apa-sec-note\", esc(pair[1])); g.parentNode.insertBefore(noteEl, g); }\n      var shown = 0; Array.prototype.forEach.call(g.querySelectorAll(\"a.apr-card\"), function (c) { if (c.style.display !== \"none\") shown++; });\n      noteEl.style.display = DOOR && !shown ? \"\" : \"none\";\n      if (pair[0] === \"#aprStories\") {\n        /* an empty door under an answer that already ends in Begin: Begin once — the note carries the way in, the box steps aside */\n        var you = g.querySelector(\"a.apr-you\"), once = DOOR && !shown && BEGIN_SHOWN;\n        if (you) you.style.display = once ? \"none\" : \"\";\n        noteEl.innerHTML = once ? esc(W.noStoryLead) + ' <a href=\"/your-story#write-your-story\">' + esc(W.noStoryGo) + '</a>' : esc(W.noStory);\n      }\n    });\n    fitBoxes();\n  }\n  /* the navy box at the end of a section never sits alone with empty places beside it: it fills the rest of its row */\n  function fitBoxes() {\n    [\"#aprStories\", \"#aprArticles\"].forEach(function (sel) {\n      var g = $(sel); if (!g) return;\n      var you = null, n = 0;\n      Array.prototype.forEach.call(g.children, function (c) { if (c.classList.contains(\"apr-you\")) you = c; else if (c.classList.contains(\"apr-card\") && c.style.display !== \"none\") n++; });\n      if (!you) return;\n      var cols = 1; try { cols = getComputedStyle(g).gridTemplateColumns.split(\" \").filter(Boolean).length || 1; } catch (e) {}\n      var rest = n % cols, span = cols > 1 ? (rest ? cols - rest : cols) : 1;\n      you.style.gridColumn = span > 1 ? \"span \" + span : \"\";\n      you.classList.toggle(\"apa-wide\", span > 1);\n    });\n  }\n  var fitT = null; window.addEventListener(\"resize\", function () { clearTimeout(fitT); fitT = setTimeout(fitBoxes, 120); });\n  /* the doors: tap one to step in, tap it again to step out; the sections follow and the ask answers inside it */\n  function drawDoors() {\n    var doors = (FEED && FEED.concerns || []).filter(function (c) { return c.state === \"door\"; });\n    doorsEl.innerHTML = \"\"; doorsEl.hidden = !doors.length;\n    doors.forEach(function (d) {\n      var a = el(\"a\", \"\", esc(d.name)); a.href = \"#\"; a.setAttribute(\"data-door\", d.name);\n      a.addEventListener(\"click\", function (ev) { ev.preventDefault(); setDoor(DOOR === d.name ? \"\" : d.name); });\n      doorsEl.appendChild(a);\n    });\n  }\n  function setDoor(name) {\n    DOOR = name || \"\";\n    Array.prototype.forEach.call(doorsEl.querySelectorAll(\"a\"), function (a) { a.classList.toggle(\"apa-on\", a.getAttribute(\"data-door\") === DOOR); });\n    insideEl.hidden = !DOOR; insideEl.textContent = DOOR ? W.inside + DOOR + W.stepOut : \"\";\n    narrow(null);\n    track(\"door\", { door: DOOR || \"(none)\" });\n  }\n  /* each card learns its concern from the Guide's feed, matched by address */\n  function tagCards() {\n    if (!FEED || !FEED.pieces) return;\n    var byPath = {}; FEED.pieces.forEach(function (p) { byPath[pathOf(p.address)] = p; });\n    cards().forEach(function (c) { var p = byPath[pathOf(c.getAttribute(\"href\"))]; if (p && p.concern) c.setAttribute(\"data-concern\", p.concern); });\n    cardIndex = null;\n  }\n  window.apGuideFeed = function (data) {\n    try {\n      if (!data || !data.ok) return;\n      FEED = data; HANDFUL = Math.max(3, Number(data.handful) || 6);\n      tagCards(); drawDoors(); narrow(null);\n      if (data.asking && data.asking.length) window.apAskAsking({ rows: data.asking });\n    } catch (e) {}\n  };\n  var typing = null;\n  q.addEventListener(\"input\", function () { clearTimeout(typing); typing = setTimeout(function () { narrow(q.value); }, 220); });\n\n  /* ---- the ask ---- */\n  var V = visitor(), busy = false, last = null;\n  function post(body) {\n    return fetch(BASE, { method: \"POST\", headers: { \"Content-Type\": \"text/plain\" }, body: JSON.stringify(body), credentials: \"omit\" }).then(function (r) { return r.text(); }).then(function (t) { try { return JSON.parse(t); } catch (e) { return { ok: false, error: \"network\" }; } }).catch(function () { return { ok: false, error: \"network\" }; });\n  }\n  function done() { busy = false; go.disabled = false; go.textContent = W.ask; }\n  function send(ev) {\n    if (ev) ev.preventDefault();\n    window.apAskEarly = 0;\n    var text = (q.value || \"\").replace(/\\s+/g, \" \").trim();\n    if (text.length < 3 || busy) return;\n    busy = true; go.disabled = true; go.textContent = W.reading; note.textContent = \"\";\n    clearTimeout(typing); narrow(\"\");\n    track(\"ask_sent\", { build: BUILD });\n    /* step one: the outcome and the pieces (a few seconds); step two: the answer from those pieces */\n    post({ op: \"ask\", q: text, v: V, door: DOOR, two: true }).then(function (r) {\n      if (!r || !r.ok) { done(); render({ outcome: \"error\", error: (r && r.error) || \"network\" }, text); return; }\n      last = r;\n      if (!r.pending) { done(); render(r, text); track(\"ask_answered\", { outcome: r.outcome || \"\", build: BUILD }); return; }\n      render(r, text, { waiting: true });\n      post({ op: \"answer\", askId: r.askId, v: V }).then(function (r2) {\n        done();\n        if (!r2 || !r2.ok) { render(r, text, { failed: true, still: true }); track(\"ask_answered\", { outcome: \"error\", build: BUILD }); return; }\n        last = r2; render(r2, text, { still: true });\n        track(\"ask_answered\", { outcome: r2.outcome || \"\", build: BUILD });\n      });\n    });\n  }\n  form.addEventListener(\"submit\", send);\n\n  /* ---- what the page draws back ---- */\n  /* the box under an answer: Begin is the page's own; Let's talk carries its own words for the moment\n     (the Articles box asks \"Read something that landed?\" \\u2014 right under the articles, wrong under an answer or the safeguarding line) */\n  function navyBox(kind) {\n    var a, src = kind === \"begin\" ? $(\"#aprStories a.apr-you\") : null;\n    if (src) { a = src.cloneNode(true); a.removeAttribute(\"id\"); a.style.display = \"\"; a.style.gridColumn = \"\"; a.classList.remove(\"apa-wide\"); }\n    else if (kind === \"begin\") { a = el(\"a\", \"apr-you\", '<span class=\"apr-meta\"><span class=\"apr-k\">Your story</span></span><span class=\"apr-t\">It belongs here.</span><span class=\"apr-l\">One hour. Your own words. Start with Where I\\u2019m From.</span><span class=\"apr-go\">Begin<i>\\u2192</i></span>'); a.href = \"/your-story#write-your-story\"; }\n    else {\n      var w0 = kind === \"safety\" ? W.safeBox : W.talkBox;\n      a = el(\"a\", \"apr-you\", '<span class=\"apr-meta\"><span class=\"apr-k\">' + esc(w0.k) + '</span></span><span class=\"apr-t\">' + esc(noLonely(w0.t)) + '</span><span class=\"apr-l\">' + esc(noLonely(w0.l)) + '</span><span class=\"apr-go\">' + esc(w0.go) + '<i>\\u2192</i></span>'); a.href = \"/begin\";\n    }\n    var w = el(\"div\", \"apa-navy\"); w.appendChild(a); return w;\n  }\n  function pathOf(href) { try { var u = new URL(href, location.href); return u.pathname.replace(/\\/$/, \"\") + u.search; } catch (e) { return href; } }\n  function pieceCard(p) {\n    var want = pathOf(p.address), found = null;\n    cards().forEach(function (c) { if (!found && pathOf(c.getAttribute(\"href\")) === want) found = c; });\n    var a;\n    if (p.source === \"site\") {\n      a = el(\"a\", \"apr-card\"); a.href = p.address;\n      a.innerHTML = '<span class=\"apr-meta\"><span class=\"apr-k\">' + esc(p.kind) + '</span></span><span class=\"apr-t\">' + esc(noLonely(p.title)) + '</span>' + (p.line ? '<span class=\"apr-l\">' + esc(noLonely(p.line)) + '</span>' : '') + '<span class=\"apr-go\">' + esc(p.go || \"Open it\") + '<i>\\u2192</i></span>';\n      a.setAttribute(\"data-src\", \"site\");\n      return a;\n    }\n    if (found) { a = found.cloneNode(true); a.style.display = \"\"; }\n    else {\n      a = el(\"a\", \"apr-card\"); a.href = p.address;\n      a.innerHTML = '<span class=\"apr-meta\"><span class=\"apr-k\">' + esc(p.kind) + '</span>' + (p.source === \"story\" ? '<span class=\"apr-w\">' + esc(p.who) + '</span>' : '') + '</span><span class=\"apr-t\">' + esc(noLonely(p.title)) + '</span>' + (p.line ? '<span class=\"apr-l\">' + esc(noLonely(p.line)) + '</span>' : '') + '<span class=\"apr-go\">' + (p.source === \"story\" ? \"Read his story\" : \"Read it\") + '<i>\\u2192</i></span>';\n    }\n    a.setAttribute(\"data-src\", p.source === \"story\" ? \"story\" : \"article\");\n    return a;\n  }\n  function fourChoices(ctx, lead) {\n    var box = el(\"div\", \"apa-four\");\n    box.innerHTML = '<p class=\"apa-lead\">' + esc(lead) + '</p>';\n    W.choices.forEach(function (c) {\n      var row = el(\"div\", \"apa-ch\"); row.setAttribute(\"data-k\", c.k);\n      row.innerHTML = '<a class=\"apa-b\" href=\"' + (c.k === \"talk\" ? \"/begin\" : \"#\") + '\">' + esc(c.b) + '</a><p class=\"apa-d\">' + esc(c.d) + '</p>';\n      row.querySelector(\"a.apa-b\").addEventListener(\"click\", function (ev) { choose(ev, row, c.k, ctx, box); });\n      box.appendChild(row);\n    });\n    return box;\n  }\n  function choose(ev, row, k, ctx, box) {\n    if (k === \"talk\") { try { post({ op: \"choice\", askId: ctx.askId, choice: \"talk\", concern: ctx.concern, concernLine: ctx.concernLine }); } catch (e) {} track(\"ask_choice\", { choice: \"talk\" }); return; }   /* the link goes on to /begin */\n    ev.preventDefault();\n    if (row.classList.contains(\"apa-on\")) return;\n    Array.prototype.forEach.call(box.querySelectorAll(\".apa-ch\"), function (r) { r.classList.remove(\"apa-on\"); var m = r.querySelector(\".apa-more\"); if (m) m.parentNode.removeChild(m); });\n    row.classList.add(\"apa-on\");\n    track(\"ask_choice\", { choice: k });\n    var more = el(\"div\", \"apa-more\");\n    var html = '';\n    if (k === \"write\") html += '<div class=\"apa-ask1\"><input id=\"apAskL' + k + '\" type=\"text\" maxlength=\"300\" aria-label=\"' + esc(W.oneLine) + '\"></div>';\n    html += '<div class=\"apa-mail\"><div><label for=\"apAskM' + k + '\">' + esc(W.mail) + '</label><input id=\"apAskM' + k + '\" type=\"email\" maxlength=\"120\" autocomplete=\"email\"></div><button type=\"button\">' + esc(W.mailGo) + '</button></div><p class=\"apa-ok\"></p>';\n    more.innerHTML = html;\n    row.appendChild(more);\n    var lineIn = more.querySelector(\".apa-ask1 input\"), mailIn = more.querySelector(\".apa-mail input\"), btn = more.querySelector(\".apa-mail button\"), ok = more.querySelector(\".apa-ok\");\n    post({ op: \"choice\", askId: ctx.askId, choice: k, concern: ctx.concern, concernLine: ctx.concernLine });   /* the choice itself is kept at once, with no email */\n    ok.textContent = W.noted;\n    function send() {\n      var email = (mailIn.value || \"\").trim(), line = lineIn ? (lineIn.value || \"\").trim() : \"\";\n      if (!email && !line) return;\n      if (email && !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$/.test(email)) { ok.textContent = W.mailBad; return; }\n      btn.disabled = true;\n      post({ op: \"choice\", askId: ctx.askId, choice: k, concern: ctx.concern, concernLine: ctx.concernLine, line: line, email: email }).then(function (r) {\n        btn.disabled = false;\n        if (r && r.ok) { ok.textContent = email ? W.mailDone : W.noted; if (email) { mailIn.value = \"\"; btn.disabled = true; } }\n        else ok.textContent = (r && r.error === \"bad_email\") ? W.mailBad : W.fail;\n      });\n    }\n    btn.addEventListener(\"click\", send);\n    [lineIn, mailIn].forEach(function (inp) { if (inp) inp.addEventListener(\"keydown\", function (e) { if (e.key === \"Enter\") { e.preventDefault(); send(); } }); });\n    if (lineIn) lineIn.focus(); else mailIn.focus();\n  }\n  function render(r, asked, opt) {\n    opt = opt || {};\n    outSlot.innerHTML = \"\";\n    var wrap = el(\"div\", \"apa-in\"), ctx = { askId: r.askId || \"\", concern: r.concern || \"\" };\n    var o = r.outcome;\n    BEGIN_SHOWN = false;\n    if (o === \"answer\" || o === \"close\") {\n      var a = r.answer || {}, ans = el(\"div\", \"apa-ans\"), waiting = opt.waiting || opt.failed;\n      ans.innerHTML = '<p class=\"apa-you\">You asked</p><p class=\"apa-asked\">' + esc(asked) + '</p>' +\n        (waiting ? '<p class=\"apa-wait\">' + esc(opt.failed ? W.failAfter : W.waiting) + '</p>' : '') +\n        (a.problem ? '<p class=\"apa-k\">' + esc(W.labels.problem) + '</p><p class=\"apa-p\">' + esc(noLonely(a.problem)) + '</p>' : '') +\n        (a.scripture ? '<p class=\"apa-k\">' + esc(W.labels.scripture) + '</p><p class=\"apa-p\">' + esc(noLonely(a.scripture)) + '</p>' : '') +\n        (a.people ? '<p class=\"apa-k\">' + esc(W.labels.people) + '</p><p class=\"apa-p\">' + esc(noLonely(a.people)) + '</p>' : '') +\n        (a.decision ? '<p class=\"apa-k\">' + esc(W.labels.decision) + '</p><p class=\"apa-p\">' + esc(noLonely(a.decision)) + '</p>' : '') +\n        (o === \"close\" && a.closeNote ? '<p class=\"apa-close\">' + esc(noLonely(a.closeNote)) + '</p>' : '');\n      wrap.appendChild(ans);\n      var ps = r.pieces || [];\n      if (ps.length) {\n        wrap.appendChild(el(\"p\", \"apa-from\", esc(W.fromThese)));\n        var g = el(\"div\", \"apa-grid\" + (ps.length === 1 ? \" apa-n1\" : ps.length === 2 ? \" apa-n2\" : \"\"));\n        ps.forEach(function (p) { g.appendChild(pieceCard(p)); });\n        wrap.appendChild(g);\n      }\n      if (opt.waiting) { /* the choices and the closing box come with the answer */ }\n      else if (o === \"close\" || opt.failed) wrap.appendChild(fourChoices(ctx, W.closeFour));\n      else { BEGIN_SHOWN = a.close === \"begin\"; wrap.appendChild(navyBox(BEGIN_SHOWN ? \"begin\" : \"talk\")); }\n    } else if (o === \"site\") {\n      var sa = r.answer || {}, sb = el(\"div\", \"apa-ans\"), swait = opt.waiting || opt.failed;\n      sb.innerHTML = '<p class=\"apa-you\">You asked</p><p class=\"apa-asked\">' + esc(asked) + '</p>' +\n        (swait ? '<p class=\"apa-wait\">' + esc(opt.failed ? W.failSite : W.waitingSite) + '</p>' : '') +\n        (sa.text ? '<p class=\"apa-p\">' + esc(noLonely(sa.text)) + '</p>' : '');\n      wrap.appendChild(sb);\n      var sp = r.pieces || [];\n      if (sp.length) {\n        wrap.appendChild(el(\"p\", \"apa-from\", esc(W.whereToGo)));\n        var sg = el(\"div\", \"apa-grid\" + (sp.length === 1 ? \" apa-n1\" : sp.length === 2 ? \" apa-n2\" : \"\"));\n        sp.forEach(function (p) { sg.appendChild(pieceCard(p)); });\n        wrap.appendChild(sg);\n      }\n      if (!opt.waiting) wrap.appendChild(navyBox(\"talk\"));\n    } else if (o === \"none\") {\n      wrap.appendChild(fourChoices(ctx, W.four));\n    } else if (o === \"outside\") {\n      var line = el(\"div\", \"apa-ask-line\");\n      line.innerHTML = (r.ack ? esc(noLonely(r.ack)) + \" \" : \"\") + '<span class=\"apa-small\">' + esc(W.outsideAbout) + '</span>';\n      wrap.appendChild(line); wrap.appendChild(navyBox(\"talk\"));\n    } else if (o === \"safety\") {\n      var s = el(\"div\", \"apa-ask-line\"); s.innerHTML = W.safety; wrap.appendChild(s); wrap.appendChild(navyBox(\"safety\"));\n    } else {\n      var f = el(\"div\", \"apa-ask-line\"); f.innerHTML = esc(r.error === \"rate_limited\" ? W.capped : W.fail); wrap.appendChild(f); wrap.appendChild(navyBox(\"talk\"));\n    }\n    outSlot.appendChild(wrap);\n    sectionNotes();\n    if (!opt.still) goTo(outSlot);\n  }\n  /* the site scrolls inside its own box (proven on the Front Desk): find that box and stop below the sticky top bar */\n  function scroller() { var e = outSlot.parentElement; while (e && e !== doc.body && e !== doc.documentElement) { var o = getComputedStyle(e).overflowY; if (o === \"auto\" || o === \"scroll\") return e; e = e.parentElement; } return doc.documentElement; }\n  function topBarBottom() { var bar = $(\"section.lw-topbar, header.lw-topbar, .lw-topbar\"); if (!bar) return 0; var pos = getComputedStyle(bar).position; if (pos !== \"sticky\" && pos !== \"fixed\") return 0; return Math.max(0, bar.getBoundingClientRect().bottom); }\n  function goTo(target) {\n    try {\n      var sc = scroller(), page = sc === doc.documentElement, scTop = page ? 0 : sc.getBoundingClientRect().top;\n      var visibleTop = Math.max(scTop, topBarBottom());\n      var y = target.getBoundingClientRect().top - visibleTop + (page ? (window.pageYOffset || doc.documentElement.scrollTop) : sc.scrollTop) - 12;\n      var to = Math.max(0, Math.round(y));\n      if (page) window.scrollTo(0, to); else sc.scrollTop = to;   /* a plain jump: the live site ignores the smooth form */\n    } catch (e) {}\n  }\n\n  /* ---- What men are asking: the published rows ---- */\n  window.apAskAsking = function (data) {\n    try {\n      var rows = (data && data.rows) || [];\n      if (!askingSlot || !rows.length) return;\n      var grid = askingSlot.querySelector(\"[data-ap-ask-rows]\") || el(\"div\");\n      grid.className = \"apa-asking-grid\"; grid.innerHTML = \"\";\n      rows.forEach(function (row) {\n        var c = el(\"div\", \"apa-con\");\n        /* \"Where we are: We have a piece on this: <the piece>\" — the piece chosen for this line, named once */\n        var where = '<b>' + esc(W.whereWeAre) + '</b> ' + esc(row.where) + (row.address && row.title ? ' <a href=\"' + esc(row.address) + '\">' + esc(noLonely(row.title)) + '</a>' : '');\n        c.innerHTML = '<p class=\"apa-cq\">' + esc(noLonely(row.line)) + '</p><p class=\"apa-cw\">' + where + '</p><p class=\"apa-cl\"></p><div class=\"apa-cx\"></div>';\n        var links = c.querySelector(\".apa-cl\"), x = c.querySelector(\".apa-cx\"), ctx = { askId: row.id, concern: row.concern, concernLine: row.line };\n        W.choices.forEach(function (ch) {\n          var a = el(\"a\", \"\", esc(ch.b)); a.href = ch.k === \"talk\" ? \"/begin\" : \"#\";\n          a.addEventListener(\"click\", function (ev) {\n            if (ch.k === \"talk\") { try { post({ op: \"choice\", askId: ctx.askId, choice: \"talk\", concern: ctx.concern, concernLine: ctx.concernLine }); } catch (e) {} return; }\n            ev.preventDefault();\n            Array.prototype.forEach.call(links.querySelectorAll(\"a\"), function (l) { l.classList.remove(\"apa-on\"); }); a.classList.add(\"apa-on\");\n            x.innerHTML = \"\"; var box = el(\"div\", \"apa-four\"); box.style.margin = \"0\"; box.style.border = \"0\"; box.style.padding = \"0\";\n            var rowEl = el(\"div\", \"apa-ch\"); rowEl.style.border = \"0\"; rowEl.style.padding = \"0\"; rowEl.style.gridTemplateColumns = \"1fr\";\n            rowEl.innerHTML = '<p class=\"apa-d\" style=\"margin:0\">' + esc(ch.d) + '</p>';\n            box.appendChild(rowEl); x.appendChild(box);\n            choose({ preventDefault: function () {} }, rowEl, ch.k, ctx, box);\n          });\n          links.appendChild(a);\n        });\n        grid.appendChild(c);\n      });\n      if (!grid.parentNode) askingSlot.appendChild(grid);\n      askingSlot.hidden = false; askingSlot.style.display = \"\";\n    } catch (e) {}\n  };\n  /* the page's own feeds add cards after load (the Published feed, the blog list): follow them */\n  (function () {\n    var pending = null, grids = [$(\"#aprStories\"), $(\"#aprArticles\")].filter(Boolean);\n    if (!grids.length || !window.MutationObserver) return;\n    var mo = new MutationObserver(function () { clearTimeout(pending); pending = setTimeout(function () { tagCards(); narrow(null); }, 60); });\n    grids.forEach(function (g) { mo.observe(g, { childList: true }); });\n  })();\n  if (BASE) { var sj = doc.createElement(\"script\"); sj.src = BASE + \"?feed=guide&callback=apGuideFeed&t=\" + Math.floor(Date.now() / 600000); sj.async = true; sj.onerror = function () {}; doc.head.appendChild(sj); }\n  narrow(\"\");\n  /* an ask pressed before this script arrived (the page carries the box from the first moment) is sent now */\n  if (window.apAskEarly && (q.value || \"\").trim().length >= 3) send();\n\n  window.apGuide = { build: BUILD, narrow: narrow, door: setDoor, last: function () { return last; }, feed: function () { return FEED; } };\n})();\n"; }