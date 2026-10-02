# Ancient Path — shared code and story engine workfolder

Live files: story.js, road.js, ap-promise-band-v2.html, pages/, scripts/. The tests (test-*.js), patch scripts (patch-*.py, v17-voice.js, qr.core.js — the source of record for each cut) and screenshot scripts (shoot*.js) sit beside them at the top level.

## Set up a new task (about a minute)
    git clone https://github.com/johnlsherrod/ancient-path.git && cd ancient-path
    npm init -y >/dev/null && npm install jsdom playwright >/dev/null
    for f in test-*.js; do node $f | tail -1; done    # every suite must say "all passed"

## The rules every cut keeps
Tests first; one zip; John pushes and gives the commit hash; Claude fetches the file at that hash from raw.githubusercontent.com and compares it byte for byte before writing the repoint; the ten pages are repointed by full commit and sha384 (openssl dgst -sha384 -binary story.js | openssl base64 -A); road pages carry both files; never re-use a spent tag; keep the site builder closed while repointing.

## What is where
- test-story-v8 … v18 and test-road-v33 … v37 (story.js v18.1 + road.js v37); test-band-v2 (the home band's one question). All passing 29 Sept 2026.
- patch-v16 … patch-v181.py, patch-road-v37.py, v17-voice.js, qr.core.js: how each version was made from the one before.
- shoot.js, shoot18.js (phone and desk finish screens), shoot-band.js (the home band). Need playwright and a Chromium.

AP-EW-v1 + AP-STONE-v1 — Ending Well (Breaking Free, Week 12) and the stone. 2 Oct 2026.
- stone.js: the stone capability. One Stones form in the storage course (whole · json · history); APStone.set/list/render ride on story.js (APStory.latest, _submit, signedIn, track). Any piece can set a stone; his page shows them newest first. Pinned by commit + sha384 like story.js.
- ending-well-v1.html: the Week 12 unit's page (a Blank Ebook unit between Pathway Steps and Congratulations). Built by build-ew.py from ew-body.html + ew-css.txt (the Man Who Crossed stylesheet, renamed) and ew-ids.json (unit, block ids, pins). A finished save sets his stone through APStone; "Save and stop for now" never does.
- pages/start-v25.html: Your Page with the Ending Well card (hidden until saved), Your stones, and the offer list knowing Ending Well. Made by patch-start-v25.py from pages/start.html (v24.5).
- Tests: test-ew-v1.js (31 checks: every example assembles, the gate, tap rows, the stone by tap or typed, a finished save sets the stone once, Save and stop does not, restore, the Week 2 line at the door), test-start-v25.js (6). shoot-ew.js draws the door, the stone step on a phone, and the finished view (pictures/ew-*.png; needs the preinstalled Chromium).
- Ending-Well-worksheet.pdf: the exact prompts, made by make-ew-worksheet.py from ew-parts.json (dumped from the page itself).
- Two settings in one page file: the root carries data-mode="cohort" (the men he walked with) or data-mode="solo" (the self-directed course: the men he will walk with). Eleven lines differ (patch-ew-solo.py holds them); parts, stone and save are the same. The solo unit is the same file with that one word changed. ew-parts-solo.json and Ending-Well-worksheet-solo.pdf are the solo words (EW_MODE=solo python3 make-ew-worksheet.py).
- Your Page v25 also names Breaking Free as a course card for the men enrolled in it (never offered as "Free"), and the Coming soon line drops the October 7 date.
