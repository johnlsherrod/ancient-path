# Set a Stone build 15 (Nov 21, 2026; brand-10, Brand Book 1.1, Our tools walk the same road): the four stops.
# Begin (the two stones, the Rock, the one filled Begin) · Write (one line at a time, Back named for where it goes, Next names
# the next part, Finish on the last) · Read (Your words: the stone whole, tap any line to change it, the first return set
# above Save) · Your page. The record, the fields, the engine (story.js 19.4) and stone.js 2.9 are untouched.
import re, sys
P = "set-a-stone.html"
s = open(P, encoding="utf-8").read()
assert "AP-SAS-v1 · build 14" in s, "expected build 14"

def sub1(old, new):
    global s
    n = s.count(old)
    assert n == 1, (n, old[:80])
    s = s.replace(old, new)

# 1. the header
sub1("<!-- AP-SAS-v1 · build 14 (", "<!-- AP-SAS-v1 · build 15 (21 Nov 2026, brand-10, Brand Book 1.1, Our tools walk the same road (John, Nov 21: \"this is really important\"): Set a Stone back on the story pattern, ap-story-navigation's Stone row. Four stops on one page: Begin (the band, the two stones and the Rock, then one row: Back to Your Story · Begin), Write (one part at a time, Part N of 4; the row's way back is named for where it goes: Back to the beginning, Back to who it is for, Back to what the LORD has done, Back to what it means; the one navy button names the next part, Finish on the last and whenever the part was opened from Read; Finish with no The LORD has line opens that part and says it is the stone; the band's eyebrow and lede stay with Begin; the return line says the question will be waiting on his page, as stone.js does it), Read (Your words: the stone whole, its name over its three lines, each line a tap back to its box, the one place to change it; the first return set above Save, three months on by default or a year, the same two taps a due stone offers; then the engine's own finish row, Save, and Go to Your Page), and Your page. A stone opened from his page by ?open=<id> opens on Read. Out: the foot's second way back (each row carries its own) and the gathering stone under the boxes (it is the Read stop now). Kept unchanged: every field and its id, the record (the Stones form, whole, json, history), the words and examples, the save rule (a stone is its The LORD has line), the offer, Copy and Print, the privacy line and the 988 line; story.js stays pinned at story-v19.4 and stone.js at 816b4b0. Built on the repo copy of build 14; the live page was not read (the cloud cannot open the site). Counts taken: the page's two scripts parse; the stylesheet parses with no errors, 109 rules before and 137 after (28 added, none removed), and Chromium accepts 137 of 137) (build 14 (")

# 2. CSS: the stops
CSS = """
/* build 15 · the four stops (ap-story-navigation) */
.ew-root .sas-view{display:none}
.ew-root.sas-on .sas-band-eyebrow,.ew-root.sas-on .sas-band-lede{display:none}
.ew-root.sas-on .sas-band-in{padding:34px 24px}
.ew-root .sas-view.is-active{display:block}
.ew-root #sasSlots .sas-slot{display:none}
.ew-root #sasSlots .sas-slot.is-active{display:block}
.ew-root .sas-row{display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:space-between;margin:8px 0 0;padding:16px 0 0;border-top:1px solid var(--e-rule);background:#fff}
.ew-root .sas-row .ew-btn{min-height:44px;display:inline-flex;align-items:center;justify-content:center;text-decoration:none !important}
.ew-root #sasNav{margin-left:0}
.ew-root #sasNav #sasNext{margin-left:auto}
.ew-root #sasNav .aps-handoff-link{flex:1 1 100%;order:9;margin:2px 0 0}
.ew-root .ew-gate{margin-left:0}
.ew-root .sas-line{display:block;width:100%;text-align:left;font:400 19px/1.55 var(--e-serif) !important;color:var(--e-navy) !important;background:none;border:0;border-bottom:1px dashed transparent;padding:4px 0;margin:0 0 4px;cursor:pointer;white-space:pre-line}
.ew-root .sas-line:hover,.ew-root .sas-line:focus-visible{border-bottom-color:var(--e-bronze);outline:none}
.ew-root button.sas-stone-name{display:block;width:100%;text-align:left;background:none;border:0;border-bottom:1px dashed transparent;padding:2px 0;cursor:pointer}
.ew-root button.sas-stone-name:hover,.ew-root button.sas-stone-name:focus-visible{border-bottom-color:var(--e-bronze);outline:none}
.ew-root .sas-tap{font:400 14px/1.5 var(--e-sans);color:var(--e-quiet);margin:10px 0 0}
.ew-root .sas-when{margin:22px 0 0}
.ew-root .sas-when-lead{font:600 15px/1.5 var(--e-sans);color:var(--e-ink);margin:0 0 8px}
.ew-root .sas-when .ew-word{min-height:44px;padding:0 16px}
.ew-root .sas-when-note{font:400 15px/1.5 var(--e-sans);color:var(--e-quiet);margin:10px 0 0}
.ew-root .sas-foot-link{margin:30px 0 0;font:600 15px/1.4 var(--e-sans)}
.ew-root .sas-foot-link a{color:#80612F !important;text-decoration:none !important}
.ew-root .ew-actions #apsSave{min-height:44px}
.ew-root .ew-actions .aps-page-link{display:inline-flex;align-items:center;min-height:44px}
@media (max-width:620px){.ew-root .ew-word{min-height:44px;padding:0 13px !important;display:inline-flex;align-items:center}}
@media (max-width:620px){.ew-root .sas-row{position:sticky;bottom:0;z-index:3;padding-bottom:12px}.ew-root .sas-row .ew-btn{flex:1 1 auto;padding-left:12px;padding-right:12px}}
@media print{.ew-root .sas-row,.ew-root .sas-when,.ew-root .sas-tap,.ew-root .sas-foot-link{display:none !important}}
"""
sub1("@media print{.ew-root .sas-band,", CSS.strip() + "\n@media print{.ew-root .sas-band,")

# 3. Begin: the teaching is the first stop, with its one row
sub1('<p class="sas-scene-k">Possession of the promise &middot; In</p>', '<div class="sas-view is-active" id="sasBeginView">\n<p class="sas-scene-k">Possession of the promise &middot; In</p>')
m = re.search(r'(<p class="sas-return-ex">.*?</p>)\n', s, re.S)
assert m
s = s.replace(m.group(0), m.group(1) + '\n<div class="sas-row" id="sasBeginRow">\n  <a class="ew-btn ew-btn-ghost sas-way" href="/your-story" target="_top">&larr; Back to Your Story</a>\n  <button type="button" class="ew-btn ew-btn-primary" id="sasBegin">Begin</button>\n</div>\n</div>\n', 1)

# 4. Write and Read
OLD_MID = """<div id="sasSlots"><hr style="border:0;margin:0;height:0"></div>
<div id="sasNavOff" style="display:none"></div>

<div class="ew-panel">
  <p class="ew-panel-head">Your stone</p>
  <p class="sas-stone-name" id="sasStoneName" style="display:none"></p>
  <p class="sas-stone is-empty" id="sasStone">Your three lines will gather here as you write.</p>
  <p class="sas-dates" id="sasDates" style="display:none"></p>
  <p class="sas-after" id="sasAfter" style="display:none"></p>
  <div class="sas-offer" id="sasOffer"></div>
</div>
<div class="ew-actions" id="sasActions">
  <button type="button" class="ew-btn ew-btn-ghost" id="sasCopy">Copy</button>
  <button type="button" class="ew-btn ew-btn-ghost" id="sasPrint">Print</button>
</div>
"""
NEW_MID = """<div class="sas-view" id="sasWriteView">
<div class="ew-progress"><span id="sasPartLabel">Part 1 of 4</span></div>
<div id="sasSlots"><hr style="border:0;margin:0;height:0"></div>
<div class="ew-nav sas-row" id="sasNav">
  <button type="button" class="ew-btn ew-btn-ghost" id="sasBack">Back to the beginning</button>
  <button type="button" class="ew-btn ew-btn-primary" id="sasNext">Next: what the LORD has done</button>
</div>
<p class="ew-gate" id="sasGate"></p>
</div>
<div id="sasNavOff" style="display:none"></div>

<div class="sas-view" id="sasReadView">
<h2 class="ew-h2">Here is your stone.</h2>
<p class="ew-note">Read it out loud once. It is kept on your page when you save, and other people can read it only when you offer it.</p>
<div class="ew-panel">
  <p class="ew-panel-head">Your words</p>
  <button type="button" class="sas-stone-name" id="sasStoneName" style="display:none"></button>
  <div class="sas-stone is-empty" id="sasStone">Your stone opens here.</div>
  <p class="sas-tap" id="sasTap">Tap any line to change it.</p>
  <p class="sas-dates" id="sasDates" style="display:none"></p>
  <p class="sas-after" id="sasAfter" style="display:none"></p>
  <div class="sas-offer" id="sasOffer"></div>
</div>
<div class="sas-when" id="sasWhen">
  <p class="sas-when-lead">Set the first return:</p>
  <div class="ew-words" id="sasWhenRow"><button type="button" class="ew-word is-on" data-months="3">three months</button><button type="button" class="ew-word" data-months="12">a year</button></div>
  <p class="sas-when-note" id="sasWhenNote"></p>
</div>
<div class="ew-actions" id="sasActions">
  <button type="button" class="ew-btn ew-btn-ghost" id="sasCopy">Copy</button>
  <button type="button" class="ew-btn ew-btn-ghost" id="sasPrint">Print</button>
</div>
</div>
"""
sub1(OLD_MID, NEW_MID)

# 5. the foot: one way back lives in each row; the reading room stays a quiet link
sub1('<p class="sas-back"><a href="/your-story" target="_top">&larr; Your Story</a><a href="/stones" target="_top">What These Stones Mean &rarr;</a></p>',
     '<p class="sas-foot-link"><a href="/stones" target="_top">What These Stones Mean &rarr;</a></p>')

# 6. the page script
sub1('      var wrap = document.createElement("div"); wrap.className = "sas-slot" + (s.noLine ? " sas-slot-name" : "");',
     '      var wrap = document.createElement("div"); wrap.className = "sas-slot" + (s.noLine ? " sas-slot-name" : ""); wrap.setAttribute("data-part", String(SLOTS.indexOf(s)));')

OLD_RENDER = """  function render() {
    var p = $("sasStone"), ls = lines(), nm = $("sasStoneName");
    if (nm) { nm.textContent = val("name"); nm.style.display = val("name") ? "" : "none"; }
    if (!val("text")) { p.textContent = ls.length ? ls.join("\\n") + "\\n…" : "Your three lines will gather here as you write."; p.classList.add("is-empty"); }
    else { p.textContent = ls.join("\\n"); p.classList.remove("is-empty"); }"""
NEW_RENDER = """  /* build 15 · Read: the stone whole, each line a tap back to the box it came from (Edit in one place) */
  function paintRead() {
    var p = $("sasStone"), nm = $("sasStoneName"); if (!p) return;
    if (nm) { nm.textContent = val("name"); nm.style.display = val("name") ? "" : "none"; }
    p.innerHTML = "";
    var any = false;
    SLOTS.forEach(function (s, i) {
      if (s.noLine) return; var l = lineFor(s, val(s.key)); if (!l) return; any = true;
      var b = document.createElement("button"); b.type = "button"; b.className = "sas-line"; b.setAttribute("data-part", String(i)); b.textContent = l;
      b.addEventListener("click", function () { fromRead = true; show(i); });
      p.appendChild(b);
    });
    if (!any) { p.textContent = "Your stone opens here."; }
    p.classList.toggle("is-empty", !val("text"));   /* a stone is its The LORD has line */
  }
  function render() {
    paintRead();"""
sub1(OLD_RENDER, NEW_RENDER)

OLD_TAIL = """  build(); render();
})();"""
NEW_TAIL = """  /* build 15 · the four stops: Begin · Write · Read · Your page (ap-story-navigation, the Stone row) */
  var TITLES = ["who it is for", "what the LORD has done", "what it means", "its name"];
  var EDIT = /[?&]open=(?!1(&|$))[^&]+/.test(window.location.search);   /* a stone opened from his page opens on Read */
  var cur = 0, where = "begin", fromRead = false;
  var GATE = "This line is the stone. Write it, then Finish.";
  function view(name) {
    where = name;
    var root = $("sasRoot"); if (root) root.classList.toggle("sas-on", name !== "begin");
    ["Begin", "Write", "Read"].forEach(function (v) { var n = $("sas" + v + "View"); if (n) n.classList.toggle("is-active", v.toLowerCase() === name); });
  }
  function seek(n) { try { n.scrollIntoView({ block: "start", behavior: "auto" }); window.scrollBy(0, -20); } catch (e) {} }
  function paintNav() {
    $("sasPartLabel").textContent = "Part " + (cur + 1) + " of " + SLOTS.length;
    $("sasBack").textContent = cur === 0 ? "Back to the beginning" : "Back to " + TITLES[cur - 1];
    $("sasNext").textContent = (cur === SLOTS.length - 1 || fromRead) ? "Finish" : "Next: " + TITLES[cur + 1];
    $("sasGate").textContent = "";
  }
  function show(i, quiet) {
    cur = Math.max(0, Math.min(SLOTS.length - 1, i));
    view("write");
    Array.prototype.forEach.call(document.querySelectorAll("#sasSlots .sas-slot"), function (n, k) { n.classList.toggle("is-active", k === cur); });
    paintNav();
    var box = $("sas_" + SLOTS[cur].key);
    window.requestAnimationFrame(function () { grow(box); });
    if (!quiet) { seek($("sasWriteView")); try { box.focus({ preventScroll: true }); } catch (e) {} }
  }
  function paintWhen() {
    var w = $("sasWhen"); if (!w) return;
    var r = val("returnAt"), first = returnDay();
    var months = (r && first && r !== first) ? 12 : 3;
    Array.prototype.forEach.call(w.querySelectorAll(".ew-word"), function (b) { b.classList.toggle("is-on", Number(b.getAttribute("data-months")) === months); });
    $("sasWhenNote").textContent = r ? "It is set on your page when you save. On " + longDay(r + "T12:00:00") + " the question will be waiting on your page: what has the LORD done since?" : "";
    w.style.display = (EDIT || setAt) ? "none" : "";
  }
  function showRead(quiet) {
    view("read");
    render(); paintWhen();
    if (!quiet) seek($("sasReadView"));
  }
  function finish() {
    if (!val("text")) { show(1); $("sasGate").textContent = GATE; return; }
    showRead();
  }
  window.sasShow = show; window.sasShowRead = showRead; window.sasWhere = function () { return where; };
  $("sasBegin").addEventListener("click", function () { fromRead = false; show(0); });
  $("sasBack").addEventListener("click", function () { if (cur === 0) { view("begin"); seek($("sasBeginRow")); } else { show(cur - 1); } });
  $("sasNext").addEventListener("click", function () { if (cur === SLOTS.length - 1 || fromRead) { finish(); } else { show(cur + 1); } });
  $("sasStoneName").addEventListener("click", function () { fromRead = true; show(SLOTS.length - 1); });
  Array.prototype.forEach.call($("sasWhen").querySelectorAll(".ew-word"), function (b) {
    b.addEventListener("click", function () {
      var m = Number(b.getAttribute("data-months")), now = new Date().toISOString(), d = "";
      try { d = window.APStone ? (m === 12 ? window.APStone.nextReturn(now, 12) : window.APStone.firstReturn(now)) : ""; } catch (e) { d = ""; }
      if (d) { setVal("returnAt", d); }
      paintWhen();
    });
  });
  var afterSave = window.sasAfterSave;
  window.sasAfterSave = function (inst) { var r = afterSave(inst); paintWhen(); return r; };

  build(); render();
  if (EDIT) { showRead(true); } else { view("begin"); paintNav(); }
  Array.prototype.forEach.call(document.querySelectorAll("#sasSlots .sas-slot"), function (n, k) { n.classList.toggle("is-active", k === 0); });
})();"""
sub1(OLD_TAIL, NEW_TAIL)

# the gathering stone is the Read stop now: the input listener repaints Read and the return note
sub1('inp.addEventListener("input", function () { grow(inp); paintRow(s.key); if (s.where) showWhere(s, inp.value); render(); });',
     'inp.addEventListener("input", function () { grow(inp); paintRow(s.key); if (s.where) showWhere(s, inp.value); render(); if (where === "read" && typeof paintWhen === "function") paintWhen(); });')

# 7. the config: a stone held over a sign-in comes back on Read, where its Save was pressed; a refused Save goes to the LORD line's part
sub1('    returnView: false,', '    returnView: false,\n    onRestored: function () { if (typeof window.sasShowRead === "function") window.sasShowRead(true); },   /* build 15: back on Read, where Save was pressed */')
sub1('        var box = stoneLine; if (box) { try { box.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} try { box.focus({ preventScroll: true }); } catch (e2) {} }',
     '        if (typeof window.sasShow === "function") { window.sasShow(1); var g = document.getElementById("sasGate"); if (g) g.textContent = "This line is the stone. Write it, then Finish."; }   /* build 15: the part that holds the stone line, and why */\n        var box = stoneLine; if (box) { try { box.scrollIntoView({ block: "center", behavior: "smooth" }); } catch (e) {} try { box.focus({ preventScroll: true }); } catch (e2) {} }')
sub1("/* AP-SAS-CONFIG-v2 —", "/* AP-SAS-CONFIG-v2.1 (build 15: onRestored opens Read) —")

open(P, "w", encoding="utf-8").write(s)
print("build 15 written", len(s))
