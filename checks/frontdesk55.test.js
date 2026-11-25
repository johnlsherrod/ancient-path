// checks/frontdesk55.test.js — Front Desk 55 (signals-5): the Tuesday signal cards. Run: node checks/frontdesk55.test.js scripts/FrontDesk.gs
// Loads FrontDesk.gs top level in a stand-in Apps Script world and exercises signalPull_, signalActs_, signalAct_ and signalUndo_ against a stand-in Actions tab
// and a stand-in platform.
const fs = require('fs'); const src = fs.readFileSync(process.argv[2], 'utf8');
const HEAD = ['key', 'first seen', 'owner', 'do this', 'for', 'because', 'link', 'status', 'mark done by hand', 'rule', 'done at', 'done by', 'closed how', 'choices'];
let rows = [HEAD.slice()], fetches = [], props = { 'tri:secret': 'S3CRET', 'tri:school': 'ancient-path' }, answer = () => ({ ok: true, cards: [] }), code = 200;
const sheet = {
  getLastColumn: () => HEAD.length,
  getRange: (r, c, nr, nc) => ({ getValues: () => rows.slice(r - 1, r - 1 + (nr || 1)).map((x) => x.slice(c - 1, c - 1 + (nc || 1))), setValue: (v) => { rows[r - 1][c - 1] = v; } }),
  getDataRange: () => ({ getValues: () => rows.map((x) => x.slice()) }),
  appendRow: (row) => { rows.push(row.slice()); }
};
const g = {
  UrlFetchApp: { fetch: (u, o) => { fetches.push({ u, b: JSON.parse(o.payload) }); return { getResponseCode: () => code, getContentText: () => JSON.stringify(answer(JSON.parse(o.payload), u)) }; } },
  PropertiesService: { getScriptProperties: () => ({ getProperty: (k) => props[k] || null, getProperties: () => props, setProperty: (k, v) => { props[k] = v; }, deleteProperty: (k) => { delete props[k]; }, getKeys: () => Object.keys(props) }) },
  CacheService: { getScriptCache: () => ({ get: () => null, put: () => {} }) },
  Utilities: { formatDate: (d, tz, pat) => (pat === 'EEEE, MMM d' ? 'Tuesday, Dec 1' : String(d)), getUuid: () => 'uuid' },
  SpreadsheetApp: { openById: () => ({ getSheetByName: (n) => (n === 'Actions' ? sheet : null) }) },
  LockService: {}, ContentService: {}, HtmlService: {}, Session: {}, MailApp: {}, GmailApp: {}, DriveApp: {}, CalendarApp: {}, ScriptApp: {}, Logger: { log() {} }, console
};
const closes = [];
const fn = new Function(...Object.keys(g), src + `
;actionClose_ = function (who, key, o) { globalThis.__closes.push({ key: key, o: o }); return { ok: true, at: '2026-12-01T15:00:00.000Z', by: 'John', undoUntil: '2026-12-01T15:10:00.000Z' }; };
cardLog_ = function () {};
return { FD, signalPull_, signalActs_, signalAct_, signalUndo_, actUndoGet_, choicesFor_, pressCheck_, CLOSED_SIGNAL_, CLOSED_FOLDED_, actsOf_ };`);
globalThis.__closes = closes;
const X = fn(...Object.values(g));
let pass = 0, fail = 0; const ok = (c, n) => { if (c) pass++; else { fail++; console.log('FAIL: ' + n); } };
const thr = (f) => { try { f(); return null; } catch (e) { return e && e.code; } };
const col = (k) => HEAD.indexOf(k);
const CARDS = [
  { id: 41, run_on: '2026-12-01', kind: 'recurs', title: 'Afraid · Being left keeps coming back.', why: 'It was 30% of picks in the last four weeks, against its usual 12.5%.', recommend: 'Recommendation: tell the leaders it keeps coming back, so they listen for it next week. Nothing in the list changes.', grade: 'Our data, description only', state: 'open' },
  { id: 43, run_on: '2026-12-01', kind: 'recommend', title: 'Mad may be missing a choice.', why: 'Something else was picked 13 of 60 times at Mad.', recommend: 'Recommendation: look again in the next cohort.', grade: 'Our data, description only', state: 'open' }
];

ok(X.FD.BUILD === '55', 'the build is 55');
ok(X.choicesFor_('signal', 'signal:41') && X.choicesFor_('signal', 'signal:41').cell === 'acts', 'signal is a kind the choices table knows, and the desk carries its own presses');
ok(X.pressCheck_([{ key: 'signal:41', do: 'x', because: 'y' }]).length === 0, 'a signal card draws a press (the build check)');

/* the pull: the newest Tuesday's open cards become cards, once each */
answer = (b, u) => (/signal_cards_door/.test(u) ? { ok: true, run_on: '2026-12-01', cards: CARDS } : { ok: true });
X.signalPull_();
const call = fetches[0];
ok(call && /rest\/v1\/rpc\/signal_cards_door$/.test(call.u) && call.b.p_secret === 'S3CRET', 'the pull reads signal_cards_door with the event log\'s secret');
const s41 = rows.find((r) => r[0] === 'signal:41');
ok(rows.length === 3 && s41 && s41[col('owner')] === 'John' && s41[col('status')] === 'open' && s41[col('choices')] === 'acts' && s41[col('rule')] === 'signals-5', 'each open signal card is one card, owner John, open, with its choices word ' + JSON.stringify(s41));
ok(s41[col('do this')] === 'Afraid · Being left keeps coming back.' && s41[col('for')] === 'Signals · What keeps coming back · Tuesday, Dec 1', 'its title is the card\'s line, and For says what kind and which Tuesday');
ok(/30% of picks/.test(s41[col('because')]) && /Recommendation: tell the leaders/.test(s41[col('because')]) && /Our data, description only\.$/.test(s41[col('because')]), 'its why carries the why, the one action and the grade');
ok(s41[col('link')] === 'https://app.ancientpathcoaching.com/#/team/joins', 'its link opens Signals on Our Team');
X.signalPull_(); ok(rows.length === 3, 'a second pull writes nothing again');
/* answered on Our Team: the card closes as Folded */
answer = (b, u) => (/signal_cards_door/.test(u) ? { ok: true, cards: [CARDS[1]] } : { ok: true });
X.signalPull_();
ok(rows.find((r) => r[0] === 'signal:41')[col('status')] === 'done' && rows.find((r) => r[0] === 'signal:41')[col('closed how')] === X.CLOSED_FOLDED_ && rows.find((r) => r[0] === 'signal:43')[col('status')] === 'open', 'a card no longer open on the platform closes as Folded; the other stays');
/* the platform does not answer: nothing opened or closed */
code = 500; const before = JSON.stringify(rows); answer = () => ({ ok: true, cards: [] }); X.signalPull_(); code = 200;
ok(JSON.stringify(rows) === before, 'if the platform does not answer, nothing is opened or closed');

/* the presses */
const out = {}, acts = X.signalActs_({}, out);
ok(JSON.stringify(acts.map((a) => [a.a, a.t])) === JSON.stringify([['accept', 'Accept'], ['change', 'Change it first'], ['aside', 'Not now']]), 'a signal card carries Accept · Change it first · Not now');
ok(acts[1].box === 'open' && acts[1].label === 'What should we do instead?', 'Change it first opens a box that asks what we should do instead');
ok(/^Changes it: /.test(out.then) && /Nothing changes mid-cohort/.test(out.then) && /Undo stays for ten minutes/.test(out.then), 'what happens says the record keeps it and nothing changes mid-cohort');
const who = { email: 'john@ancientpathcoaching.com', name: 'John Sherrod' };
fetches = []; closes.length = 0;
answer = (b) => ({ ok: true, card: { id: b.p_id, state: 'accepted' }, undo_until: 'x' });
let r = X.signalAct_(who, 'signal:43', 'accept', {}, {});
ok(fetches[0] && /signal_card_door_act$/.test(fetches[0].u) && fetches[0].b.p_secret === 'S3CRET' && fetches[0].b.p_id === 43 && fetches[0].b.p_act === 'accept' && fetches[0].b.p_by === 'John' && fetches[0].b.p_words === null, 'Accept is written on the platform with the card, the act and the presser\'s first name ' + JSON.stringify(fetches[0] && fetches[0].b));
ok(closes[0] && closes[0].key === 'signal:43' && closes[0].o.how === X.CLOSED_SIGNAL_ && r.did === 'Accepted' && /next cohort’s list is set/.test(r.went), 'then the card closes as Changed the signals record, and says where it went');
ok(X.actUndoGet_('signal:43') && X.actUndoGet_('signal:43').kind === 'signal' && X.actUndoGet_('signal:43').id === 43, 'the undo record is kept');
fetches = [];
r = X.signalAct_(who, 'signal:43', 'change', { text: '  Try a follow-up the next day instead.  ' }, {});
ok(fetches[0].b.p_act === 'change' && fetches[0].b.p_words === 'Try a follow-up the next day instead.', 'Change it first carries the words');
ok(thr(() => X.signalAct_(who, 'signal:43', 'change', { text: '   ' }, {})) === 'no_words_given', 'Change it first with no words is refused, and nothing is sent');
fetches = []; X.signalAct_(who, 'signal:43', 'aside', {}, {}); ok(fetches[0].b.p_act === 'hold', 'Not now is written as hold');
/* answered on Our Team first */
closes.length = 0; answer = () => ({ ok: false, error: 'answered', card: { state: 'accepted' } });
r = X.signalAct_(who, 'signal:43', 'accept', {}, {});
ok(closes[0] && closes[0].o.how === 'Said done' && /Already answered on Our Team/.test(r.went), 'a card already answered on Our Team closes with nothing written again');
/* the platform does not answer, or refuses */
closes.length = 0; code = 500;
ok(thr(() => X.signalAct_(who, 'signal:43', 'accept', {}, {})) === 'busy' && closes.length === 0, 'a platform that does not answer leaves the card open, and the press can be made again');
code = 200; answer = () => ({ ok: false, error: 'refused' });
ok(thr(() => X.signalAct_(who, 'signal:43', 'accept', {}, {})) === 'none' && closes.length === 0, 'a refusal leaves the card open');
ok(thr(() => X.signalAct_(who, 'signal:0', 'accept', {}, {})) === 'bad_action' && thr(() => X.signalAct_(who, 'signal:43', 'drop', {}, {})) === 'bad_action', 'a bad key or an act the card does not carry is refused');
/* undo */
fetches = []; answer = (b) => ({ ok: true, card: { id: b.p_id, state: 'open' } });
ok(thr(() => X.signalUndo_({ id: 43 })) === null && fetches[0].b.p_act === 'undo' && fetches[0].b.p_id === 43, 'Undo takes the choice back on the platform');
answer = () => ({ ok: false, error: 'not_undoable' });
ok(thr(() => X.signalUndo_({ id: 43 })) === 'reopen_expired', 'after ten minutes the platform says no, and Reopen says it cannot');
/* the source carries the rest */
ok(/accept: kind === 'concerns' \|\| kind === 'signal', aside: kind === 'concerns' \|\| kind === 'signal'/.test(src) && /change: kind === 'draft' \|\| kind === 'signal'/.test(src), 'the press guard lets a signal card\'s three presses through');
ok(/if \(kd === 'signal'\) return signalAct_\(/.test(src) && /\|Changed the signals record\)\$\//.test(src) && /rec\.kind === 'signal'\) signalUndo_\(rec\)/.test(src), 'a signal press goes to the platform, and Undo and Reopen take it back there');
ok(/try \{ signalPull_\(\); \} catch \(e\) \{\}/.test(src), 'the pull runs with the platform\'s failures, and never stops them');
console.log(pass + ' passed, ' + fail + ' failed'); process.exit(fail ? 1 : 0);
