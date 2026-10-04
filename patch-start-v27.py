#!/usr/bin/env python3
"""Your Page v27 from v26.2 (pages/start-v26.html → pages/start-v27.html), John's walk of v26.2 (4 Oct 2026):
- "the Your Stones label is odd" → the card is "Remembrance Stones", its small line "Set a Stone" (the piece), like the
  other cards carry their kind
- "the UI is off. its the only story area that doubles the size" → the card stays card-sized: the count, the newest
  stone (three lines, date) and one button, "All your stones"; the pile moves to its own full-width section under the
  cards, "Remembrance Stones", with every stone, the return question when due, the offer or Take it back, Set another
- the top-right line "Nothing saved yet…" was wrong with two stones and a story in progress → true to the day: any
  saved piece or stone → "Pick up where you left off, or start another."
Every needle must match exactly once."""
import json, os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(here, 'pages', 'start-v26.html'), encoding='utf-8').read()
out = src
def rep(old, new):
    global out
    assert out.count(old) == 1, (out.count(old), old[:90]); out = out.replace(old, new)

rep("<!-- AP-HOME-v26 (v26.2, 4 Oct: stone.js v2.2)",
    "<!-- AP-HOME-v27 (v27, 4 Oct: the stones card is \"Remembrance Stones\" under \"Set a Stone\", card-sized — the count, the newest stone and one button, All your stones; the pile is its own section under the cards with every stone, the return question when due, the offer or Take it back, Set another; the chronicle's line is true to the day; stone.js v2.3 — his name or no name) (v26.2, 4 Oct: stone.js v2.2)")

# the card
rep('''                <div class="ap-card" data-story="stones" style="display:none">
                    <p class="ap-card-kind">Stones of remembrance</p>
                    <p class="ap-card-title">Your stones</p>
                    <p class="ap-card-state"></p>
                    <div class="ap-stones"></div>
                    <a class="ap-stone-another" href="/set-a-stone">Set another &rarr;</a>
                </div>''',
'''                <div class="ap-card" data-story="stones" style="display:none">
                    <p class="ap-card-kind">Set a Stone</p>
                    <p class="ap-card-title">Remembrance Stones</p>
                    <p class="ap-card-state"></p>
                    <div class="ap-card-stone" id="apStoneNewest"></div>
                    <div class="ap-card-actions"><a class="ap-btn ap-btn-primary" href="#apRemembrance" id="apStonesAll">All your stones</a></div>
                </div>''')

# the pile: its own section, after the chronicle, before Courses
rep('''        <div class="ap-sec" id="apCoursesSec">''',
'''        <div class="ap-sec" id="apRemembrance" style="display:none">
            <div class="ap-sec-head">
                <h2 class="ap-h2">Remembrance Stones</h2>
                <p class="ap-sec-note" id="apRemembranceNote">Every stone you have set, newest first. When a return is due, its question waits here.</p>
            </div>
            <div class="ap-pile">
                <div class="ap-stones" id="apStonePile"></div>
                <p class="ap-pile-foot"><a class="ap-stone-another" href="/set-a-stone">Set another &rarr;</a></p>
            </div>
        </div>
        <div class="ap-sec" id="apCoursesSec">''')

# styles: the card's newest stone; the section's pile (the stacked rules move from the card to the section)
rep('''        .ap-home .ap-card .ap-stones { display: block; max-width: none; margin: 14px 0 0; }
        .ap-home .ap-card .ap-stones::before { display: none; }
        .ap-home .ap-card .ap-stone { flex: none; padding: 0 0 14px; margin: 0 0 14px; border-bottom: 1px solid var(--ap-rule); }
        .ap-home .ap-card .ap-stone:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }''',
'''        .ap-home .ap-card-stone { margin: 2px 0 0; }
        .ap-home .ap-card-stone p { font: 400 15.5px/1.5 var(--ap-serif) !important; color: var(--ap-ink) !important; margin: 0; }
        .ap-home .ap-card-stone p.ap-card-stone-main { color: var(--ap-navy) !important; }
        .ap-home .ap-card-stone p.ap-card-stone-when { font: 400 13px/1.45 var(--ap-sans) !important; color: var(--ap-quiet) !important; margin: 4px 0 0; }
        .ap-home .ap-pile { max-width: 720px; }
        .ap-home .ap-pile .ap-stones { display: block; max-width: none; margin: 0; }
        .ap-home .ap-pile .ap-stones::before { display: none; }
        .ap-home .ap-pile .ap-stone { flex: none; padding: 0 0 18px; margin: 0 0 18px; border-bottom: 1px solid var(--ap-rule); }
        .ap-home .ap-pile .ap-stone:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
        .ap-home .ap-pile-foot { margin: 18px 0 0; }
        .ap-home #apRemembrance { scroll-margin-top: 110px; }''')
# the pile's stone rules were scoped to .ap-card; they now apply inside .ap-pile too
for sel in ['.ap-stone-text', '.ap-stone-text.ap-stone-main', '.ap-stone-return', '.ap-stone-return-when', '.ap-stone-return-text', '.ap-stone-ask', '.ap-stone-ask-q', '.ap-stone-ask-box', '.ap-stone-ask-box:focus', '.ap-stone-ask-row', '.ap-stone-ask-note, .ap-home .ap-card .ap-stone-offer-what, .ap-home .ap-card .ap-stone-offer-state, .ap-home .ap-card .ap-stone-offer-note', '.ap-stone-offer-state', '.ap-stone-offer']:
    old = '        .ap-home .ap-card ' + sel + ' {'
    assert out.count(old) == 1, (out.count(old), sel)
    new_sel = ', '.join('.ap-home .ap-pile ' + s.strip().replace('.ap-home .ap-card ', '') for s in sel.split(','))
    out = out.replace(old, '        .ap-home .ap-card ' + sel + ', ' + new_sel + ' {')

# stones(): the pile into the section, the newest stone into the card, the chronicle line true to the day
rep('''                    var host = card.querySelector(".ap-stones");
                    return window.APStone.render(host, { buttonClass: "ap-btn ap-btn-primary" }).then(function(list) {
                        if (!list.length) { return; }
                        card.querySelector(".ap-card-state").textContent = list.length === 1 ? "One stone set" : list.length + " stones set";
                        card.style.display = "";
                    });''',
'''                    var host = document.getElementById("apStonePile"), sec = document.getElementById("apRemembrance");
                    return window.APStone.render(host, { buttonClass: "ap-btn ap-btn-primary" }).then(function(list) {
                        if (!list.length) { return; }
                        card.querySelector(".ap-card-state").textContent = list.length === 1 ? "One stone set" : list.length + " stones set";
                        /* the newest stone on the card: its lines and its date; the pile below holds the rest */
                        var newest = list[0], box = document.getElementById("apStoneNewest");
                        if (box && newest) {
                            box.innerHTML = "";
                            var ls = (typeof window.APStone.lines === "function") ? window.APStone.lines(newest) : [newest.stonefor, newest.text, newest.meaning].filter(Boolean);
                            ls.forEach(function(t, i) { var p = document.createElement("p"); if (i === 1 || ls.length === 1) { p.className = "ap-card-stone-main"; } p.textContent = t; box.appendChild(p); });
                            var w = document.createElement("p"); w.className = "ap-card-stone-when"; w.textContent = [window.APStone.longDate(newest.when), newest.pieceTitle ? "from " + newest.pieceTitle : ""].filter(Boolean).join(" · "); box.appendChild(w);
                        }
                        card.style.display = "";
                        if (sec) { sec.style.display = ""; }
                        var note = $("apStoriesNote"); if (note) { note.textContent = "Pick up where you left off, or start another."; }
                    });''')
rep('''                if (r[0].status !== "none" || r[1].status !== "none" || r[6].status !== "none" || r[7].status !== "none" || r[8].status !== "none" || r[9].status !== "none") {
                    $("apStoriesHead").textContent = "Your chronicle";
                    $("apStoriesNote").textContent = "Saved to your page. Open one to read it or change it.";
                }''',
'''                if (r.some(function(x) { return x && x.status !== "none"; })) {
                    $("apStoriesHead").textContent = "Your chronicle";
                    $("apStoriesNote").textContent = "Pick up where you left off, or start another.";
                }''')

dest = os.path.join(here, 'pages', 'start-v27.html')
open(dest, 'w', encoding='utf-8').write(out)
raw = out.rstrip('\n').encode('utf-8')
print(dest, len(out.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
