#!/usr/bin/env python3
"""Your Page v30 from v29 (pages/start-v29.html → pages/start-v30.html), John's walk of v29 (5 Oct): "should we publish the
finished work on the top page or link to it? this page will get crowded fast"; "there is no edit button on any of the
stones". Link, not publish: the stones card is the standard card — the label, the title, "4 stones set", one quoted line
(the newest stone's name and its LORD line, in the card-quote italic every other card uses, clipped to three lines) and
the one button, All your stones. The pile stays off the page until that button is pressed; it opens in place and the
button then reads Close. Every Set a Stone stone in the pile carries Edit → /set-a-stone?open=<its id>."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'pages', 'start-v29.html'), encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)
rep("<!-- AP-HOME-v29 (v29, 5 Oct:", "<!-- AP-HOME-v30 (v30, 5 Oct, John's walk of v29: link, not publish — the stones card is the standard card, one quoted line (the newest stone's name and its LORD line) and All your stones; the pile opens in place when that button is pressed and closes again; Edit on every Set a Stone stone in the pile) (v29, 5 Oct:")
# the card: a quote line in place of the whole stone
rep('                    <div class="ap-card-stone" id="apStoneNewest"></div>\n                    <div class="ap-card-actions"><a class="ap-btn ap-btn-primary" href="#apRemembrance" id="apStonesAll">All your stones</a></div>',
    '                    <p class="ap-card-quote" id="apStoneNewest"></p>\n                    <div class="ap-card-actions"><a class="ap-btn ap-btn-primary" href="#apRemembrance" id="apStonesAll">All your stones</a></div>')
rep('''                        var newest = list[0], box = document.getElementById("apStoneNewest");
                        if (box && newest) {
                            box.innerHTML = "";
                            if (newest.name) { var nm = document.createElement("p"); nm.className = "ap-card-stone-name"; nm.textContent = newest.name; box.appendChild(nm); }
                            var ls = (typeof window.APStone.lines === "function") ? window.APStone.lines(newest) : [newest.stonefor, newest.text, newest.meaning].filter(Boolean);
                            ls.forEach(function(t, i) { var p = document.createElement("p"); if (i === 1 || ls.length === 1) { p.className = "ap-card-stone-main"; } p.textContent = t; box.appendChild(p); });
                            var w = document.createElement("p"); w.className = "ap-card-stone-when"; w.textContent = [window.APStone.longDate(newest.when), newest.pieceTitle ? "from " + newest.pieceTitle : ""].filter(Boolean).join(" · "); box.appendChild(w);
                        }
                        card.style.display = "";
                        if (sec) { sec.style.display = ""; }''',
'''                        var newest = list[0], box = document.getElementById("apStoneNewest");
                        if (box && newest) {
                            /* v30: one quoted line, like every other card — the stone's name, then its LORD line */
                            box.textContent = (newest.name ? newest.name + "\\n" : "") + (newest.text || "");
                        }
                        card.style.display = "";
                        /* v30: the pile stays off the page until All your stones is pressed; Edit on each Set a Stone stone */
                        var all = document.getElementById("apStonesAll");
                        if (sec && all && !all._wired) {
                            all._wired = true;
                            all.addEventListener("click", function(ev) {
                                ev.preventDefault();
                                var open = sec.style.display === "none";
                                sec.style.display = open ? "" : "none";
                                all.textContent = open ? "Close your stones" : "All your stones";
                                if (open) { try { sec.scrollIntoView({ behavior: "smooth", block: "start" }); } catch (e) {} }
                            });
                        }
                        list.forEach(function(st) {
                            if (!st || st.from !== "set-a-stone" || !st.id || !host) { return; }
                            var el = host.querySelector('[data-stone="' + st.id + '"]'); if (!el || el.querySelector(".ap-stone-edit")) { return; }
                            var ed = document.createElement("a"); ed.className = "ap-stone-edit"; ed.href = "/set-a-stone?open=" + encodeURIComponent(st.id); ed.textContent = "Edit";
                            var off = el.querySelector(".ap-stone-offer");
                            if (off) { el.insertBefore(ed, off); } else { el.appendChild(ed); }
                        });''')
rep('        .ap-home .ap-card-stone p.ap-card-stone-name, .ap-home .ap-pile .ap-stone-name {',
    '        .ap-home .ap-pile .ap-stone-edit { display: inline-block; margin: 8px 14px 0 0; font: 600 14px/1.4 var(--ap-sans) !important; color: var(--ap-navy) !important; text-decoration: underline; text-underline-offset: 3px; }\n        .ap-home .ap-card-stone p.ap-card-stone-name, .ap-home .ap-pile .ap-stone-name {')
rep('        .ap-home .ap-pile-foot a + a { margin-left: 18px; }', '        .ap-home .ap-pile .ap-stone-another + .ap-stone-another { margin-left: 18px; }')
open(os.path.join(here, 'pages', 'start-v30.html'), 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('pages/start-v30.html', len(b), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(b.rstrip(b'\n')).hexdigest())
