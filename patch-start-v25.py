#!/usr/bin/env python3
"""AP-HOME v24.5 -> v25: Ending Well on Your Page (SURFACES ew + card hidden until saved, read + paint + direct),
Your stones (one card, hidden until he has set one), and the offer list knows Ending Well.
Every needle must match exactly once. Ids come from ew-ids.json when present; placeholders stay otherwise."""
import json, os, re, hashlib
here = os.path.dirname(os.path.abspath(__file__))
root = here if os.path.exists(os.path.join(here, 'story.js')) else os.path.join(here, 'ancient-path')   # run from the repo root, or from the folder above it
src = os.path.join(root, 'pages', 'start.html')
s = open(src).read()
def rep(old, new, n=1):
    global s
    c = s.count(old)
    assert c == n, (c, old[:90])
    s = s.replace(old, new)

# 1 header
rep('<!-- AP-HOME-v24.5 (v24.5, 30 Sept:', '<!-- AP-HOME-v25 (v25, 2 Oct: Ending Well — SURFACES ew + a card hidden until something is saved; Your stones — the stones a man has set, newest first, one card shown once he has one; the offer list knows Ending Well) (v24.5, 30 Sept:')

# 2 SURFACES ew
rep('''                    name: "answer to Where are you?",
                    once: true
                }
            };''', '''                    name: "answer to Where are you?",
                    once: true
                },
                ew: {
                    unit: "{{EW_UNIT}}",
                    whole: "{{EW_WHOLE}}",
                    json: "{{EW_JSON}}",
                    parts: 6,
                    partWord: "part",
                    page: "/ebook/{{EW_PAGE}}",
                    name: "Ending Well story"
                }
            };
            var STONES = { unit: "{{STONES_UNIT}}", history: "{{STONES_HISTORY}}" };''')

# 3 cards: Ending Well after Known by Jesus' Your Next Step; Your stones after it
rep('''                    <div class="ap-card-actions"><a class="ap-btn ap-btn-primary" href="/path-player?courseid=i-want-you-to-know-me&amp;unit=6a9ee2609e292b89090eb884Unit">Open the course</a></div>
                </div>''', '''                    <div class="ap-card-actions"><a class="ap-btn ap-btn-primary" href="/path-player?courseid=i-want-you-to-know-me&amp;unit=6a9ee2609e292b89090eb884Unit">Open the course</a></div>
                </div>
                <div class="ap-card" data-story="ew" style="display:none">
                    <p class="ap-card-kind">Breaking Free</p>
                    <p class="ap-card-title">Ending Well</p>
                    <p class="ap-card-state">Not started</p>
                    <p class="ap-card-body">Where you started, what changed, what God did, and what you hope for &mdash; written to the men you walked with, at the end of Breaking Free.</p>
                    <div class="ap-card-actions"><a class="ap-btn ap-btn-primary" href="/path-player?courseid=student-course&amp;unit={{BF_EW_UNIT}}Unit">Open the course</a></div>
                </div>
                <div class="ap-card" data-story="stones" style="display:none">
                    <p class="ap-card-kind">Stones of remembrance</p>
                    <p class="ap-card-title">Your stones</p>
                    <p class="ap-card-state"></p>
                    <div class="ap-stones"></div>
                </div>''')

# 4 read, paint, direct
rep('readState("where")]).then(function(r) {', 'readState("where"), readState("ew")]).then(function(r) {')
rep('''                paint(r[9]);
                direct(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9]);''', '''                paint(r[9]);
                paint(r[10]);
                direct(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10]);''')
rep('function direct(lam, wif, nxs, arc, hia, knx, wha, wkl, road, where) {', 'function direct(lam, wif, nxs, arc, hia, knx, wha, wkl, road, where, ew) {')
rep('var inProg = [lam, wif, nxs, arc, hia, knx, wha, wkl, road, where].filter(function(s) {', 'var inProg = [lam, wif, nxs, arc, hia, knx, wha, wkl, road, where, ew].filter(function(s) {')

# 5 the stones card: read the Stones form's history and draw it
rep('''            function esc(t) {
                return String(t || "").replace(/[&<>"]/g, function(c) {''', '''            /* Your stones: every stone he has set, from any piece, newest first. The card stays hidden until he has one. Nothing is counted, nothing is tapped. */
            function stones() {
                var card = document.querySelector('[data-story="stones"]');
                if (!card || !STONES.unit) {
                    return;
                }
                getJSON("/api/assessment/state?sourceType=unit&objectId=" + STONES.unit).then(function(data) {
                    var sub = data && data.latestSubmission;
                    if (!sub || sub.status !== "submitted" || !sub.answers) {
                        return;
                    }
                    var raw = "";
                    sub.answers.forEach(function(a) {
                        if (a && a.blockId === STONES.history && a.answer) {
                            raw = String(a.answer.value || "");
                        }
                    });
                    var list = [];
                    try {
                        list = JSON.parse(raw);
                    } catch (e) {
                        list = [];
                    }
                    if (!Array.isArray(list)) {
                        list = [];
                    }
                    list = list.filter(function(e) {
                        return e && typeof e.text === "string" && e.text.trim();
                    });
                    if (!list.length) {
                        return;
                    }
                    list.sort(function(a, b) {
                        return String(b.when || "").localeCompare(String(a.when || ""));
                    });
                    var host = card.querySelector(".ap-stones");
                    host.innerHTML = "";
                    list.forEach(function(st) {
                        var w = document.createElement("div");
                        w.className = "ap-stone";
                        var t = document.createElement("p");
                        t.className = "ap-stone-text";
                        t.textContent = st.text;
                        var m = document.createElement("p");
                        m.className = "ap-stone-meta";
                        var d = "";
                        try {
                            d = new Date(st.when).toLocaleDateString("en-US", {
                                month: "long",
                                year: "numeric"
                            });
                        } catch (e) {}
                        m.textContent = d + (st.answers && st.answers.pieceTitle ? " \\u00b7 from " + st.answers.pieceTitle : "");
                        w.appendChild(t);
                        w.appendChild(m);
                        host.appendChild(w);
                    });
                    card.querySelector(".ap-card-state").textContent = list.length === 1 ? "One stone set" : list.length + " stones set";
                    card.style.display = "";
                });
            }
            stones();

            function esc(t) {
                return String(t || "").replace(/[&<>"]/g, function(c) {''')

# 6 style for the stones
rep('''        .ap-home .ap-card-body {
            font: 400 15px/1.6 var(--ap-sans) !important;''', '''        .ap-home .ap-stone {
            margin: 10px 0 0;
            padding: 10px 0 0;
            border-top: 1px solid var(--ap-rule);
        }

        .ap-home .ap-stone:first-child {
            margin-top: 4px;
            padding-top: 0;
            border-top: 0;
        }

        .ap-home .ap-stone-text {
            font: 400 17px/1.5 var(--ap-serif) !important;
            color: var(--ap-navy) !important;
            margin: 0;
        }

        .ap-home .ap-stone-meta {
            font: 400 13px/1.45 var(--ap-sans) !important;
            color: var(--ap-quiet) !important;
            margin: 2px 0 0;
        }

        .ap-home .ap-card-body {
            font: 400 15px/1.6 var(--ap-sans) !important;''')

# 7 the offer list
rep('''                where: { unit: "6ab526197d249596ce0b3104", whole: "openEnded6ab526194f23b", title: "Where Are You?", from: "Walk With Me" }
            };''', '''                where: { unit: "6ab526197d249596ce0b3104", whole: "openEnded6ab526194f23b", title: "Where Are You?", from: "Walk With Me" },
                ew: { unit: "{{EW_UNIT}}", whole: "{{EW_WHOLE}}", title: "Ending Well", from: "Breaking Free" }
            };''')


# 8 Breaking Free on Your Page — for the men in it only (it runs in cohorts, so nobody is offered it as "Free"); the Coming soon line no longer announces a date that has passed
rep("""                    title: "Known by Jesus",
                    line: "A ten-part study of Scripture on knowing and being known by Jesus \\u2014 from Eden, where knowing first broke, to the rest that remains.",
                    img: "https://lwfiles.mycourse.app/69ff74fa031fcc8033475300-public/d1655f7353a17a1bde1bca4e138d204b.jpg"
                }];""", """                    title: "Known by Jesus",
                    line: "A ten-part study of Scripture on knowing and being known by Jesus \\u2014 from Eden, where knowing first broke, to the rest that remains.",
                    img: "https://lwfiles.mycourse.app/69ff74fa031fcc8033475300-public/d1655f7353a17a1bde1bca4e138d204b.jpg"
                }, {
                    titleId: "student-course",
                    id: "{{BF_COURSE_ID}}",
                    title: "Breaking Free",
                    line: "Breaking Free is for men walking out of pornography and sexual sin toward a life of purity \\u2014 not by white-knuckling the behavior, but by reaching the wounds beneath it.",
                    img: "https://lwfiles.mycourse.app/69ff74fa031fcc8033475300-public/31b9370d96ffd8b134180152fa59a7d8.jpg",
                    onlyMine: true
                }];""")
rep("""                    OPEN.forEach(function(c) {
                        var m = !!mine[c.titleId];
                        html += '<div class="ap-course">""", """                    OPEN.forEach(function(c) {
                        var m = !!mine[c.titleId];
                        if (c.onlyMine && !m) {
                            return;   /* a cohort course is shown to the men in it, never offered as free */
                        }
                        html += '<div class="ap-course">""")
rep("""$("apSoon").innerHTML = "<strong>Coming soon:</strong> Breaking Free \\u2014 first cohort starting October 7, 2026 \\u00b7 Walk With Me.";""", """$("apSoon").innerHTML = "<strong>Coming soon:</strong> Walk With Me.";""")
rep("v25 (v25, 2 Oct: Ending Well", "v25.1 (v25.1, 2 Oct: no literal double curly brace anywhere in the block \u2014 LearnWorlds reads it as a template tag and cuts the page off there) (v25, 2 Oct: Breaking Free is a course card for the men in it (never offered as free); the Coming soon line drops the October 7 date; Ending Well")


# 9 v25.2 — level the page inside the REGION the site gives it, not the whole window. A signed-in learner on a desktop now gets LearnWorlds' side menu
#   (the red handle at the left edge), and the page region is narrower than the window; measured against the window, the page sat left with a gap on the right.
rep("""            function fit() {
                var h = document.getElementById("apHome");
                if (h) {
                    h.style.marginLeft = "0px";
                    h.style.marginRight = "0px";
                    var hr = h.getBoundingClientRect();
                    var gl = hr.left, gr = document.documentElement.clientWidth - hr.right;
                    if (gr > gl + 1) h.style.marginRight = (-(gr - gl)) + "px";
                    else if (gl > gr + 1) h.style.marginLeft = (-(gl - gr)) + "px";
                }
                var b = document.querySelector("#apHome .ap-band");
                if (!b) return;
                b.style.marginLeft = "0px";
                var left = b.getBoundingClientRect().left;
                b.style.marginLeft = (-left) + "px";
                b.style.width = document.documentElement.clientWidth + "px";
            }""", """            /* The region the site gives the page: the widest ancestor below <body>. With no side menu that is the whole window; with LearnWorlds' signed-in side menu it is the part beside it. */
            function region(h) {
                /* v25.3: the page scrolls inside an element of its own on this site, and that element's scrollbar is part of the window but not part of the page. Measure the scrolling ancestor's inside width (clientWidth leaves the scrollbar out); failing that, the widest ancestor below <body>; failing that, the window. */
                var e = h && h.parentElement, best = null, bw = 0;
                var inside = function (el) { var r = el.getBoundingClientRect(); return { left: r.left, right: r.left + el.clientWidth, width: el.clientWidth }; };
                while (e && e !== document.body && e !== document.documentElement) {
                    var ov = "";
                    try { ov = window.getComputedStyle(e).overflowY; } catch (err) {}
                    if ((ov === "auto" || ov === "scroll") && e.clientWidth >= 200) { return inside(e); }
                    if (e.clientWidth > bw + 1) { bw = e.clientWidth; best = e; }
                    e = e.parentElement;
                }
                if (best && bw >= 200) { return inside(best); }
                return { left: 0, right: document.documentElement.clientWidth, width: document.documentElement.clientWidth };
            }
            function fit() {
                var h = document.getElementById("apHome");
                if (!h) return;
                h.style.marginLeft = "0px";
                h.style.marginRight = "0px";
                var reg = region(h);
                var hr = h.getBoundingClientRect();
                var gl = hr.left - reg.left, gr = reg.right - hr.right;
                /* v25.5: the column the block sits in pads 25px on the right and none on the left (measured on the live page), so the block fills its column off-center. A margin on one side only shrinks a block that fills its column; a margin on one side and the same taken off the other slides it with its width kept. Slide by half the difference, then check it landed inside the region and kept its width; if not, undo. */
                if (Math.abs(gr - gl) > 1) {
                    var w0 = hr.width, d = (gr - gl) / 2;
                    h.style.marginLeft = d + "px";
                    h.style.marginRight = (-d) + "px";
                    var hr2 = h.getBoundingClientRect();
                    var gl2 = hr2.left - reg.left, gr2 = reg.right - hr2.right;
                    if (Math.abs(gr2 - gl2) >= Math.abs(gr - gl) - 1 || Math.abs(hr2.width - w0) > 1 || gl2 < -1 || gr2 < -1) { h.style.marginLeft = "0px"; h.style.marginRight = "0px"; }
                }
                var b = document.querySelector("#apHome .ap-band");
                if (!b) return;
                b.style.marginLeft = "0px";
                var left = b.getBoundingClientRect().left - reg.left;
                b.style.marginLeft = (-left) + "px";
                b.style.width = Math.round(reg.width) + "px";
            }""")
rep("v25.1 (v25.1, 2 Oct: no literal", "v25.5 (v25.5, 2 Oct: the block slides by half the difference with its width kept — the column it sits in pads 25px on the right and none on the left, so a margin on one side only shrank it) (v25.4, 2 Oct: the content below the band is slid to the true middle of the page area \u2014 it had sat 45px from the left and 56px from the right) (v25.3, 2 Oct: measured against the page's own scrolling area, so its scrollbar no longer counts as page width \u2014 the band was 10px too wide and the content 5px off center) (v25.2, 2 Oct: the page is set level inside the region the site gives it, not the whole window \u2014 a signed-in learner on a desktop now gets the site's side menu, and the page had sat left with a gap on the right) (v25.1, 2 Oct: no literal")

assert '--ap-rule' in s, 'the page names its rule color as --ap-rule'
ids_path = os.path.join(here, 'ew-ids.json')
ids = json.load(open(ids_path)) if os.path.exists(ids_path) else {}
for k, v in ids.items():
    s = s.replace('{{' + k + '}}', v)
left = sorted(set(re.findall(r'\{\{[A-Z_]+\}\}', s)))
assert '{{' not in s.replace('{{user.username}}', ''), 'a literal {{ would cut the page off in LearnWorlds'
if left: print('placeholders left:', left)
dest = os.path.join(root, 'pages', 'start-v25.html')
open(dest, 'w').write(s)
print(dest, len(s.encode()), 'bytes', 'sha256', hashlib.sha256(s.rstrip('\n').encode()).hexdigest()[:16])
