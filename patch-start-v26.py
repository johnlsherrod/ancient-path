#!/usr/bin/env python3
"""Your Page v26.1 from v25.5 (pages/start-v25.html): the Your stones card reads the stone record through stone.js v2
(story.js and stone.js loaded, pinned by commit and hash) — every stone with its date and what it was for, his dated
answers, the one question when the return is due, and "Set it where others can see it"; a quiet "Set another" link to
/set-a-stone. Every needle must match exactly once."""
import json, os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
src = open(os.path.join(here, 'pages', 'start-v25.html')).read()
ids = json.load(open(os.path.join(here, 'ew-ids.json')))
out = src

def rep(old, new):
    global out
    assert out.count(old) == 1, (out.count(old), old[:80])
    out = out.replace(old, new)

rep('<!-- AP-HOME-v25.5 (v25.5, 2 Oct:',
    '<!-- AP-HOME-v26 (v26.2, 4 Oct: stone.js v2.2) (v26.1, 4 Oct: the pile stacks one stone under another in the card — the three-stops row layout no longer reaches it; story.js v18.6 and stone.js v2.1) (v26, 3 Oct: the Your stones card reads the whole stone — who it is for, what the LORD has done, what it means — with its date and where it came from; his dated answers under it; the question "What does it mean to you now?" on the day the return is due; "Set it where others can see it" with first name or no name, and Take it back; a quiet Set another link; story.js and stone.js loaded for it, pinned by commit and hash) (v25.5, 2 Oct:')

# the card's styles: the stone's three lines, the answers, the question, the offer line
rep('''        .ap-home .ap-stone-meta {
            font: 400 13px/1.45 var(--ap-sans) !important;
            color: var(--ap-quiet) !important;
            margin: 2px 0 0;
        }
''', '''        .ap-home .ap-stone-meta {
            font: 400 13px/1.45 var(--ap-sans) !important;
            color: var(--ap-quiet) !important;
            margin: 2px 0 0;
        }
        /* v26.1 (4 Oct, John's walk): the card's pile stacks one stone under another — the ".ap-stones" row layout above is the three stops band, not the pile */
        .ap-home .ap-card .ap-stones { display: block; max-width: none; margin: 14px 0 0; }
        .ap-home .ap-card .ap-stones::before { display: none; }
        .ap-home .ap-card .ap-stone { flex: none; padding: 0 0 14px; margin: 0 0 14px; border-bottom: 1px solid var(--ap-rule); }
        .ap-home .ap-card .ap-stone:last-child { padding-bottom: 0; margin-bottom: 0; border-bottom: 0; }
        .ap-home .ap-card .ap-stone-text { font: 400 15.5px/1.5 var(--ap-serif) !important; color: var(--ap-ink) !important; }
        .ap-home .ap-card .ap-stone-text.ap-stone-main { font-size: 17px !important; color: var(--ap-navy) !important; }
        .ap-home .ap-card .ap-stone-return { margin: 8px 0 0; padding-left: 10px; border-left: 2px solid var(--ap-bronze); }
        .ap-home .ap-card .ap-stone-return-when { font: 600 12px/1.4 var(--ap-sans) !important; letter-spacing: .08em; text-transform: uppercase; color: var(--ap-bronze) !important; margin: 0; }
        .ap-home .ap-card .ap-stone-return-text { font: 400 15.5px/1.5 var(--ap-serif) !important; color: var(--ap-ink) !important; margin: 2px 0 0; }
        .ap-home .ap-card .ap-stone-ask { margin: 10px 0 0; padding: 10px 12px; background: var(--ap-paper); border: 1px solid var(--ap-rule); }
        .ap-home .ap-card .ap-stone-ask-q { display: block; font: 600 15px/1.4 var(--ap-serif) !important; color: var(--ap-navy) !important; margin: 0 0 6px; }
        .ap-home .ap-card .ap-stone-ask-box { display: block; width: 100%; box-sizing: border-box; padding: 8px 10px; font: 400 15.5px/1.5 var(--ap-serif) !important; color: var(--ap-ink) !important; background: #fff; border: 1px solid var(--ap-rule); border-radius: 2px; resize: vertical; }
        .ap-home .ap-card .ap-stone-ask-box:focus { outline: none; border-color: var(--ap-bronze); }
        .ap-home .ap-card .ap-stone-ask-row { margin: 8px 0 0; }
        .ap-home .ap-card .ap-stone-ask-note, .ap-home .ap-card .ap-stone-offer-what, .ap-home .ap-card .ap-stone-offer-state, .ap-home .ap-card .ap-stone-offer-note { font: 400 13.5px/1.5 var(--ap-sans) !important; color: var(--ap-quiet) !important; margin: 6px 0 0; }
        .ap-home .ap-card .ap-stone-offer-state { color: var(--ap-ink) !important; margin-top: 8px; }
        .ap-home .ap-card .ap-stone-offer { margin: 8px 0 0; }
        .ap-home .ap-card .ap-stone-offer-open, .ap-home .ap-card .ap-stone-offer-back { font: 600 14px/1.4 var(--ap-sans) !important; color: #8C6A3F !important; background: none !important; border: 0 !important; padding: 0 !important; text-decoration: underline; text-underline-offset: 3px; cursor: pointer; margin: 0 14px 0 0; }
        .ap-home .ap-card .ap-stone-offer-open:hover, .ap-home .ap-card .ap-stone-offer-back:hover { color: var(--ap-navy) !important; }
        .ap-home .ap-card .ap-stone-offer-panel { margin: 8px 0 0; padding: 10px 12px; border: 1px solid var(--ap-rule); background: #fff; }
        .ap-home .ap-card .ap-stone-offer-choice { display: flex; gap: 16px; margin: 8px 0 10px; }
        .ap-home .ap-card .ap-stone-offer-radio { font: 400 14px/1.4 var(--ap-sans) !important; color: var(--ap-ink) !important; display: inline-flex; align-items: center; gap: 6px; cursor: pointer; }
        .ap-home .ap-card .ap-stone-offer-radio input { display: inline-block !important; appearance: auto; -webkit-appearance: radio; width: 15px; height: 15px; margin: 0; accent-color: var(--ap-navy); }
        .ap-home .ap-card .ap-stone-another { display: inline-block; margin: 12px 0 0; font: 600 14px/1.4 var(--ap-sans) !important; color: var(--ap-navy) !important; text-decoration: underline; text-underline-offset: 3px; }
''')

# the card: a place for "Set another"
rep('''                    <p class="ap-card-title">Your stones</p>
                    <p class="ap-card-state"></p>
                    <div class="ap-stones"></div>
                </div>''', '''                    <p class="ap-card-title">Your stones</p>
                    <p class="ap-card-state"></p>
                    <div class="ap-stones"></div>
                    <a class="ap-stone-another" href="/set-a-stone">Set another &rarr;</a>
                </div>''')

# the record: stone.js v2 reads it; the page loads the engine and the stone file for that
rep('''            var STONES = { unit: "6ac015de1e5c97a07e082885", history: "openEnded6ac015de51689" };''',
    '''            var STONES = { unit: "%(STONES_UNIT)s", blocks: { whole: "%(STONES_WHOLE)s", json: "%(STONES_JSON)s", history: "%(STONES_HISTORY)s" }, script: "%(REVIEW_SCRIPT)s" };
            var STORY_SRC = "https://cdn.jsdelivr.net/gh/johnlsherrod/ancient-path@%(STORY_COMMIT)s/story.js", STORY_SRI = "%(STORY_SRI)s";
            var STONE_SRC = "https://cdn.jsdelivr.net/gh/johnlsherrod/ancient-path@%(STONE_COMMIT)s/stone.js", STONE_SRI = "%(STONE_SRI)s";''' % ids)

start = out.index('            /* Your stones: every stone he has set, from any piece, newest first.')
end = out.index('            stones();\n', start) + len('            stones();\n')
old_block = out[start:end]
assert old_block.count('function stones()') == 1
new_block = '''            /* Your stones (v26): every stone he has set, from any piece, newest first — read and drawn by stone.js v2 (the lines, the date and where from, his dated answers, the question on the day the return is due, the offer line). The card stays hidden until he has one. */
            function loadScript(src, sri) {
                return new Promise(function(resolve, reject) {
                    var s = document.createElement("script");
                    s.src = src; s.integrity = sri; s.crossOrigin = "anonymous"; s.async = true;
                    s.addEventListener("load", resolve); s.addEventListener("error", reject);
                    document.head.appendChild(s);
                });
            }
            function stones() {
                var card = document.querySelector('[data-story="stones"]');
                if (!card || !STONES.unit) {
                    return;
                }
                var p = window.APStory ? Promise.resolve() : loadScript(STORY_SRC, STORY_SRI);
                p.then(function() { return window.APStone ? null : loadScript(STONE_SRC, STONE_SRI); }).then(function() {
                    if (!window.APStone || !window.APStone.config(STONES)) { return; }
                    var host = card.querySelector(".ap-stones");
                    return window.APStone.render(host, { buttonClass: "ap-btn ap-btn-primary" }).then(function(list) {
                        if (!list.length) { return; }
                        card.querySelector(".ap-card-state").textContent = list.length === 1 ? "One stone set" : list.length + " stones set";
                        card.style.display = "";
                    });
                }).catch(function() {});
            }
            stones();
'''
out = out[:start] + new_block + out[end:]

dest = os.path.join(here, 'pages', 'start-v26.html')
open(dest, 'w').write(out)
raw = out.rstrip('\n').encode('utf-8')
print(dest, len(out.encode('utf-8')), 'bytes · sha256 (minus trailing newline)', hashlib.sha256(raw).hexdigest())
