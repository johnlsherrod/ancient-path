#!/usr/bin/env python3
"""Your Story hub v16 (17 Nov 2026): the Ending Well card, hidden until Dec 24, 2026 (Central)."""
import sys, hashlib
s = open("pages/your-story-v15.html", encoding="utf-8").read()
def rep(old, new):
    global s
    if s.count(old) != 1:
        print("NEEDLE x%d: %s" % (s.count(old), old[:90])); sys.exit(1)
    s = s.replace(old, new)
rep("<!-- AP-YS-v15 (v15, 29 Oct:",
    "<!-- AP-YS-v16 (v16, 17 Nov 2026: Ending Well joins Write your story after Set a Stone, built the way Set a Stone was. The card opens its own public page, /ending-well, for ending a stretch walked with others (a group, a course, a mentorship). It stays hidden until Dec 24, 2026 (Central time) and shows itself that day with no new build; the rule is one line of script, no style rule changed) (v15, 29 Oct:")
CARD = '''                        <a class="aph-card" href="/ending-well" id="aphEndingWell" style="display:none">
                            <p class="aph-card-k">Endings</p>
                            <p class="aph-card-t">Ending Well</p>
                            <p class="aph-card-open"><em>How a thing ends decides what you carry into what comes next.</em></p>
                            <p class="aph-card-d">You walked a stretch with others, in a group, a course or a mentorship. Before you close it, say what is different, what it cost, what God did, and what you are taking with you.</p>
                            <p class="aph-card-m">Eight parts · one line at a time · stop and pick it up whenever</p>
                            <span class="aph-card-go">Write it<i>→</i></span>
                        </a>
'''
anchor = '''                            <span class="aph-card-go">Set it<i>→</i></span>
                        </a>
'''
rep(anchor, anchor + CARD)
SCRIPT = '''    <script>
        /* AP-YS-v16: the Ending Well card shows itself on Dec 24, 2026, Central time */
        (function() {
            try {
                var c = document.getElementById("aphEndingWell");
                var d = new Date().toLocaleDateString("en-CA", {
                    timeZone: "America/Chicago"
                });
                if (c && d >= "2026-12-24") c.style.display = "";
            } catch (e) {}
        })();
    </script>
'''
rep("    <!-- /AP-STORY-v1 -->", SCRIPT + "    <!-- /AP-STORY-v1 -->")
open("pages/your-story-v16.html", "w", encoding="utf-8").write(s)
b = open("pages/your-story-v16.html", "rb").read()
print("pages/your-story-v16.html", len(b), "bytes, sha256", hashlib.sha256(b.rstrip(b"\n")).hexdigest())
