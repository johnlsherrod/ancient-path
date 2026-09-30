# story.js v16 + road.js v36 — the Friday count: story_start · story_save · story_finish from every piece (Chronicle 1.0, step 5).
import hashlib, base64
def patch(path, reps):
    s = open(path).read()
    for old, new, n in reps:
        assert s.count(old) == n, ('count', path, s.count(old), old[:90])
        s = s.replace(old, new)
    open(path, 'w').write(s)
    return s

story = patch('story.js', [
    ('   AP-STORY-MODULE-v15\n   Ancient Path — the Chronicle: the shared save and the story assistant.\n',
     '''   AP-STORY-MODULE-v16
   Ancient Path — the Chronicle: the shared save and the story assistant.

   v16 (29 Sept 2026) — the count. Every piece now tells Analytics three
     things, and nothing else: story_start (the first words typed into a
     fresh piece on this device), story_save (a save the site confirmed),
     story_finish (a confirmed save of a finished piece). Each carries
     only the piece's key (cfg.form). No text, no name, no answer ever
     leaves the page this way. APStory.track is the one sender, so
     road.js reports the same three for The Road and Where Are You?.
     The Friday count reads these four numbers — starts, finishes,
     saves, offers — from Analytics.
''', 1),

    # the one sender, beside signedIn()
    ('  function signedIn() { return !!(sessionToken() && csrf()); }\n',
     '''  function signedIn() { return !!(sessionToken() && csrf()); }

  /* v16 · the count. One sender for every piece: an event name and the
     piece's key, nothing of what he wrote. Silent when Analytics is not
     on the page. Returns whether anything was sent (for the tests). */
  function track(name, piece, extra) {
    try {
      var p = { piece: String(piece || "") };
      if (extra) { for (var k in extra) { if (Object.prototype.hasOwnProperty.call(extra, k)) { p[k] = extra[k]; } } }
      if (typeof window.gtag === "function") { window.gtag("event", name, p); return true; }
    } catch (e) {}
    return false;
  }
''', 1),

    # story_save and story_finish: only once LearnWorlds has said submitted
    ('''        stashClear(self.cfg.form);
        /* "Saved" is set ONLY here — when LearnWorlds has said submitted. */
        ui.done(result.sub);''',
     '''        stashClear(self.cfg.form);
        /* v16 · the count: a confirmed save, and a finished piece once per page */
        track("story_save", self.cfg.form);
        if (self.progress(answers).finished && !self._finishSent) { self._finishSent = true; track("story_finish", self.cfg.form); }
        /* "Saved" is set ONLY here — when LearnWorlds has said submitted. */
        ui.done(result.sub);''', 1),

    # story_start: the first words typed into a fresh piece
    ('''    document.addEventListener("input", function (e) {
      var t = e.target; if (!t || !t.id || !ids[t.id]) { return; }
      window.clearTimeout(timer);''',
     '''    document.addEventListener("input", function (e) {
      var t = e.target; if (!t || !t.id || !ids[t.id]) { return; }
      /* v16 · the count: the first words into a piece that was not opened from a save and had nothing held on this device */
      if (!self._startSent && !self._opened) { self._startSent = true; track("story_start", self.cfg.form); }
      window.clearTimeout(timer);''', 1),

    # what counts as "opened": a saved piece put back on the page, or words held on this device
    ('''  Story.prototype.restoreLatest = function () {
    var self = this;
    var untouched = interactEpoch;   /* BEFORE the read, not after it returns */''',
     '''  Story.prototype.restoreLatest = function () {
    var self = this;
    this._opened = true;   /* v16: opening a saved piece is not a start */
    var untouched = interactEpoch;   /* BEFORE the read, not after it returns */''', 1),

    ('''  Story.prototype.restoreEntry = function (entryId) {''',
     '''  Story.prototype.restoreEntry = function (entryId) {
    this._opened = true;   /* v16: opening a saved piece is not a start */''', 1),

    ('''    var held = stashRaw(this.cfg.form), pending = held ? held.a : null;
    if (pending && held.press) {
      this.fill(pending);''',
     '''    var held = stashRaw(this.cfg.form), pending = held ? held.a : null;
    if (pending) { this._opened = true; }   /* v16: words held on this device were started before */
    if (pending && held.press) {
      this.fill(pending);''', 1),

    # progress() may be asked about a given set of answers (the ones just saved)
    ('  Story.prototype.progress = function () {\n', '  Story.prototype.progress = function (answersGiven) {\n', 1),

    ('    version: "15",\n', '    version: "16",\n', 1),
    ('    signedIn: signedIn,\n    safe: safe,\n', '    signedIn: signedIn,\n    track: track,   /* v16: the one sender for the count */\n    safe: safe,\n', 1),
])

story = patch('story.js', [
    ('''  Story.prototype.progress = function (answersGiven) {
    var a = this.answers(), written = 0, total = 0, meta = null;''',
     '''  Story.prototype.progress = function (answersGiven) {
    var a = answersGiven || this.answers(), written = 0, total = 0, meta = null;''', 1),
])

road = patch('road.js', [
    ('/* AP-ROAD-v1 (v35: ', '/* AP-ROAD-v1 (v36: the count — story_start · story_save · story_finish through APStory.track (story.js v16), the piece named road or where, nothing of what he wrote) (v35: ', 1),
    ('''    api()._submit(C.lw.unit, p.answers).then(function () { return readBack(3); }).then(function () {
      clearTimeout(t5); stashClear(); lastSeen = p.json; savedOnce = true; dirtyFlag = false; typed = false; set("saved", W.landed);''',
     '''    api()._submit(C.lw.unit, p.answers).then(function () { return readBack(3); }).then(function () {
      clearTimeout(t5); stashClear(); lastSeen = p.json; savedOnce = true; dirtyFlag = false; typed = false; set("saved", W.landed);
      /* v36 · the count: a confirmed save, and a finished piece once per page (finished is read from the meta this save carried) */
      try {
        var fin = false, mb = C.lw.blocks.meta;
        for (var qi = 0; qi < p.answers.length; qi++) { if (p.answers[qi].blockId === mb) { fin = !!JSON.parse(p.answers[qi].value).finished; } }
        if (api().track) { api().track("story_save", C.piece || "road"); if (fin && !finishSent) { finishSent = true; api().track("story_finish", C.piece || "road"); } }
      } catch (e) {}''', 1),
    ('''  var state = "idle", dirtyFlag = false, typed = false, savedOnce = false, note = "", t5 = null, bar = null;''',
     '''  var state = "idle", dirtyFlag = false, typed = false, savedOnce = false, note = "", t5 = null, bar = null;
  var startSent = false, finishSent = false, opened = false;   /* v36 · the count */''', 1),
    ('''    host.addEventListener("input", function (e) { var t = e.target; if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT")) { typed = true; if (state === "saved") { note = ""; } paint(); holdSoon(); } });''',
     '''    host.addEventListener("input", function (e) { var t = e.target; if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT")) {
      /* v36 · the count: the first words into a piece that had no save and nothing held on this device */
      if (!startSent && !opened && !savedOnce) { startSent = true; try { if (api() && api().track) { api().track("story_start", C.piece || "road"); } } catch (e2) {} }
      typed = true; if (state === "saved") { note = ""; } paint(); holdSoon(); } });''', 1),
    ('''    var held = stashRaw(), pending = held ? held.a : null;
    if (!api()) { if (pending) restore(pending); set("idle", W.unavailable); done(); return; }''',
     '''    var held = stashRaw(), pending = held ? held.a : null;
    if (pending) { opened = true; }   /* v36: words held on this device were started before */
    if (!api()) { if (pending) restore(pending); set("idle", W.unavailable); done(); return; }''', 1),
    ('''      try { snap = latest && latest.answers ? unpack(latest.answers) : null; }''',
     '''      if (latest && latest.answers) { opened = true; }   /* v36: a save on the site, readable or not, means this piece was started before */
      try { snap = latest && latest.answers ? unpack(latest.answers) : null; }''', 1),
])

for f in ['story.js', 'road.js']:
    b = open(f, 'rb').read()
    print(f, len(b), 'bytes', 'sha384-' + base64.b64encode(hashlib.sha384(b).digest()).decode())
