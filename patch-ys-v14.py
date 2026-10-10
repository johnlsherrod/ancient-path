#!/usr/bin/env python3
"""The Your Story hub v14 from v13 (your-story-v13.html → your-story-v14.html), 10 Oct 2026. John: "add what kind of light am i
(john sherrod) to the our stories boxes. its a good example of another tool. use the poem in the page." The poem is the one a
man reads on /what-kind-of-light before he writes his own (read from the live page the same day). v14 bakes it into In Their
Own Words like the other founders' pieces: a card in the Read their stories grid (newest baked, so it sits in the hub's
three-newest band and in the library) and a reader section at /your-story?p=light. Nothing else changes."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
s = open(os.path.join(here, 'your-story-v13.html'), encoding='utf-8').read()
def rep(a, b, n=1):
    global s
    assert s.count(a) == n, (s.count(a), a[:70]); s = s.replace(a, b)

rep('<!-- AP-YS-v13 (v13, 10 Oct:',
    '<!-- AP-YS-v14 (v14, 10 Oct: What Kind of Light Am I, John’s poem, joins In Their Own Words as a baked piece at ?p=light) (v13, 10 Oct:')

CARD = '''                            <a class="aph-card itow-card" href="/your-story?p=light">
                                <p class="aph-card-k">What Kind of Light <span class="nm">John Sherrod</span></p>
                                <p class="aph-card-t">What Kind of Light Am I?</p>
                                <blockquote>Am I the fireflies at our first home, among the pecan trees, the pine forest and the open fields, swarms of light, dancing, and we ran to them?<span class="d"> … </span>What kind of light are you?</blockquote>
                                <span class="aph-card-go">Read it<i>→</i></span>
                            </a>
'''
# after the josiah card (the last baked card in the grid)
i = s.index('href="/your-story?p=josiah">')
j = s.index('</a>', i) + len('</a>\n')
assert s[j:j+100].lstrip().startswith('</div>'), s[j:j+60]
s = s[:j] + CARD + s[j:]

def stanza(lines, refrain=None):
    out = '                    <div class="itow-stanza">\n'
    for l in lines:
        out += '                        <p>' + l + '</p>\n'
    if refrain:
        out += '                        <p class="itow-close">' + refrain + '</p>\n'
    return out + '                    </div>\n'

POEM = (
    stanza(['Am I the fireflies at our first home,', 'among the pecan trees, the pine forest and the open fields,', 'swarms of light, dancing,', 'and we ran to them?', 'Am I a light on a hill, steady and true,', 'easy to see, easy to walk toward?'], 'What kind of light am I?') +
    stanza(['Am I the bulb above the table in our childhood home,', 'flickering over my brothers, my mom, my dad,', 'the fight simmering, waiting for ignition,', 'then the plates rattling, the pictures falling,', 'the silence after, and the repairs?']) +
    stanza(['To my wife and my children, am I the desk light in the house we built,', 'that held me those long hours the way a drink holds another man?', 'Did you wait for a while,', 'then accept my loss to this world of dimmer lights?']) +
    stanza(['Am I a candle in the dark room,', 'desire, dancing so slightly,', 'a lost love, distant and fleeting?']) +
    stanza(['Am I sunlight on a clear day,', 'showing every edge and the shadow behind it?', 'Or moonlight, enough to walk by', 'and not enough to be sure?'], 'What kind of light am I?') +
    stanza(['Am I hiding my light', 'in the room where addiction held the night,', 'until the sunlight came with the justice of the day,', 'a reckoning of sorts?', 'Am I the red light in the window,', 'promising what it cannot give?']) +
    stanza(['A friend called me into the space they said was mine,', 'welcoming, filled with goodness and wanting.', 'Why did I hear it and want to flee?', 'Did my body retreat from the light of hope', 'until grace gathered me at a moment of surrender?']) +
    stanza(['Am I a rainbow, a covenant blessing and a warning?', 'The promise that I will not destroy you today,', 'that claims the faithfulness of a family', 'to rebuild the generations ahead?']) +
    stanza(['Am I the light that is ending,', 'the last red coal of the fire,', 'still warm for the easy few in the circle,', 'the ones we chose today?'], 'What is my light offering you?') +
    stanza(['Do you see it once, then darkness again,', 'left alone in the pit, behind the bars, in the dirt and the mud?', 'Is it so unforgiving that the dark is a comfort?', 'Is it a beacon, so the details of the path are true?', 'Is it shining in your eyes, so that you cover and hide?', 'Or does it rest on one place,', 'leaving shadow to explore and shade to relish?']) +
    stanza(['To my family from story work:', 'when I told you my story, the truth of who I was,', 'you set a lamp beside me to find the light in my story,', 'you held me with your eyes and stayed in the moment,', 'reassuring and true.'], 'What kind of light are you?')
)
SECTION = '''            <section class="itow-piece" id="itow-light" data-p="light" hidden="">
                <p class="itow-eb">What Kind of Light</p>
                <h3>What Kind of Light Am I?</h3>
                <p class="itow-byline"><b>John Sherrod</b> · the poem a man reads before he writes his own</p>
                <div class="itow-body">
''' + POEM + '''                </div>
                <p class="itow-frame">John wrote this for What Kind of Light, where a man reads it first and then writes nine lines of his own, and asked us to share it here in his own words. If this is your story and you want it taken down, write to us and it comes down.</p>
            </section>
'''
k = s.index('<section class="itow-piece" id="itow-josiah"')
k = s.index('</section>\n', k) + len('</section>\n')
assert s[k:k+60].lstrip().startswith('</div>'), s[k:k+60]
s = s[:k] + SECTION + s[k:]

rep('/* AP-STORY reader. ?p=here-i-am|jason|josiah shows a founder', '/* AP-STORY reader. ?p=here-i-am|i-am-from|jason|josiah|light shows a founder')

assert s.count('data-p="light"') == 1 and s.count('?p=light') == 2 and chr(92) not in POEM
out = os.path.join(here, 'your-story-v14.html')
open(out, 'w', encoding='utf-8').write(s)
print('v14', len(s.encode('utf-8')), 'bytes sha256', hashlib.sha256(s.encode('utf-8')).hexdigest()[:16])
