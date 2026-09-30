# road.js v37 — Speak it and Continue on your phone on The Road I Walked and Where Are You?, through story.js v17 (APStory.voice / handoff).
import hashlib, base64
s = open('road.js').read()
def rep(old, new, n=1):
    global s
    assert s.count(old) == n, ('count', s.count(old), old[:90])
    s = s.replace(old, new)
rep('/* AP-ROAD-v1 (v36: ', '/* AP-ROAD-v1 (v37: Speak it — Tap and talk and Read it to me on every box the Road and Where Are You? draw, and Continue on your phone in the save row, all through story.js v17 (APStory.voice.attach, handoffLink); nothing here listens or speaks on its own) (v36: ')
# every paint (after every render): the voice controls on whatever boxes are on the screen now
rep('''  function paint() {
    if (!bar) return;''', '''  function paint() {
    if (!bar) return;
    /* v37 · Speak it: the engine puts Tap and talk and Read it to me on the boxes this screen drew (idempotent; a box gets them once) */
    try { var A = api(); if (A && A.voice && A.voice.attach) { A.voice.attach(document.getElementById("ap-road-app")); } } catch (e) {}''')
# the handoff link and box in the save bar
rep('''    bar.innerHTML = '<div class="row"><button class="btn main" data-site="save">Save</button><a class="link savelink" hidden></a></div><p class="say savenote" role="status" hidden></p><p class="quiet savebeneath"></p>';''',
    '''    bar.innerHTML = '<div class="row"><button class="btn main" data-site="save">Save</button><a class="link savelink" hidden></a><button type="button" class="link handofflink" hidden>Continue on your phone</button><div class="aps-handoff handoffbox" hidden></div></div><p class="say savenote" role="status" hidden></p><p class="quiet savebeneath"></p>';''')
rep('''    bar.saveBtn = bar.querySelector("[data-site=save]"); bar.saveLink = a; bar.saveNote = bar.querySelector(".savenote");
    host.appendChild(bar);
    bar.saveBtn.addEventListener("click", function () { save(); });''',
    '''    bar.saveBtn = bar.querySelector("[data-site=save]"); bar.saveLink = a; bar.saveNote = bar.querySelector(".savenote");
    bar.handLink = bar.querySelector(".handofflink"); bar.handBox = bar.querySelector(".handoffbox");
    host.appendChild(bar);
    bar.saveBtn.addEventListener("click", function () { save(); });
    /* v37 · Continue on your phone (a desk only): save what he has, then the square code that opens this piece where he left off */
    (function () {
      var A = api(); if (!A || !A.voice || !A.handoffLink || A.voice.touch()) { return; }
      try { A.handoffCSS(); } catch (e) {}
      bar.handLink.hidden = false;
      var show = function () { bar.handBox.innerHTML = A.handoffBoxHTML(A.handoffLink()); bar.handBox.hidden = false; bar.handBox.querySelector(".aps-handoff-done").addEventListener("click", function () { bar.handBox.hidden = true; }); };
      bar.handLink.addEventListener("click", function () {
        if (!bar.handBox.hidden) { bar.handBox.hidden = true; return; }
        if (state === "saved" && !dirtyFlag) { show(); return; }
        if (!signedIn()) { save(); return; }   /* the sign-in door; on his return he presses this again */
        save();
        var tries = 0, t = setInterval(function () { if (state === "saved" && !dirtyFlag) { clearInterval(t); show(); } else if (++tries > 100 || state === "idle" && tries > 3) { clearInterval(t); } }, 300);
      });
    })();''')
# the row keeps them in the one order: the link after Your page, the box on its own line
rep('''    if (el === bar.saveBtn) return 4; if (el === bar.saveLink) return 6; if (el === bar.saveNote) return 7;''',
    '''    if (el === bar.saveBtn) return 4; if (el === bar.saveLink) return 6; if (el === bar.saveNote) return 7; if (el === bar.handLink) return 8; if (el === bar.handBox) return 9;''')
rep('''    [bar.saveBtn, bar.saveLink, bar.saveNote].forEach(function (el) { if (el.parentNode !== into) into.appendChild(el); });''',
    '''    [bar.saveBtn, bar.saveLink, bar.saveNote, bar.handLink, bar.handBox].forEach(function (el) { if (el && el.parentNode !== into) into.appendChild(el); });''')
# the link's look in the row (the box uses the engine's own style)
rep('''#ap-road .row.bar .savenote{flex:1 1 100%;margin:6px 0 0}''', '''#ap-road .row.bar .savenote{flex:1 1 100%;margin:6px 0 0}#ap-road .row.bar .handofflink{font-family:var(--sans);font-size:14px;color:var(--soft);background:none;border:0;padding:0;text-decoration:underline;cursor:pointer}#ap-road .row.bar .handoffbox{flex:1 1 100%;margin-top:6px}#ap-road .row.bar .handoffbox[hidden]{display:none!important}''')
open('road.js', 'w').write(s)
for f in ['story.js', 'road.js']:
    b = open(f, 'rb').read()
    print(f, len(b), 'bytes', 'sha384-' + base64.b64encode(hashlib.sha384(b).digest()).decode())
