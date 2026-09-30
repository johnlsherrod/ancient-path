# story.js v17 — Speak it (phone-first) + Continue on your phone. Runs on the v16 story.js.
import hashlib, base64
s = open('story.js').read()
def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('count', s.count(old), old[:90])
    s = s.replace(old, new)
rep('   AP-STORY-MODULE-v16\n', '''   AP-STORY-MODULE-v17.1

   v17.1 (29 Sept 2026) — one listener per page, one stretch of speech per tap, no
     keyboard raised: the second question's tap now works on a phone.
   v17 (29 Sept 2026) — Speak it, phone-first, and the handoff. On every
     piece, decided by what the device can do: Tap and talk by every box
     (the device turns his voice into words; nothing recorded, nothing
     sent to us), Read it to me under every question, Hear it at the
     finish (the device reads his piece back), and on a phone one
     question fills the screen with Next question · Back · Show all
     questions. On a laptop or desk, "Continue on your phone": the page
     saves what he has and shows a square code that opens the piece where
     he left off (his page, inside the course player). See 9e and 9f.
''')
voice = open('v17-voice.js').read()
rep('  window.APStory = {\n', voice + '\n  window.APStory = {\n')
rep('''    this.holdTyping();         /* v7 */
    this.oneRow();             /* v7 */
    this.foldClosing();        /* v10 */
    return true;
  };''', '''    this.holdTyping();         /* v7 */
    this.oneRow();             /* v7 */
    this.foldClosing();        /* v10 */
    this.mountVoice();         /* v17 */
    this.oneQuestion();        /* v17 */
    this.mountHandoff();       /* v17 */
    return true;
  };''')
rep('    version: "16",\n', '    version: "17.1",\n')
rep('    track: track,   /* v16: the one sender for the count */\n', '    track: track,   /* v16: the one sender for the count */\n    voice: VOICE, handoffLink: handoffLink, qrSVG: qrSVG, handoffCSS: handoffCSS, handoffBoxHTML: handoffBoxHTML,   /* v17 */\n')
open('story.js', 'w').write(s)
b = open('story.js', 'rb').read()
print('story.js', len(b), 'bytes', 'sha384-' + base64.b64encode(hashlib.sha384(b).digest()).decode())
