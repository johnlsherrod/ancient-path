#!/usr/bin/env python3
"""The Ending Well worksheet: the exact prompts from the page (ew-parts.json), with room to write, for a man working offline."""
import json, os
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether, PageBreak
from reportlab.platypus.flowables import HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT

here = os.path.dirname(os.path.abspath(__file__))
root = here if os.path.exists(os.path.join(here, 'story.js')) else os.path.join(here, 'ancient-path')   # run from the repo root, or from the folder above it
MODE = os.environ.get('EW_MODE', 'cohort')
parts = json.load(open(os.path.join(root, 'ew-parts-solo.json' if MODE == 'solo' else 'ew-parts.json')))
NAVY, BRONZE, INK, QUIET, RULE = HexColor('#1F2A44'), HexColor('#B8945F'), HexColor('#2B3040'), HexColor('#6B7280'), HexColor('#E2DCD1')
S = {
  'eyebrow': ParagraphStyle('eyebrow', fontName='Helvetica-Bold', fontSize=8.5, leading=12, textColor=BRONZE, spaceAfter=6),
  'h1': ParagraphStyle('h1', fontName='Times-Bold', fontSize=24, leading=28, textColor=NAVY, spaceAfter=8),
  'lede': ParagraphStyle('lede', fontName='Helvetica', fontSize=10.5, leading=15, textColor=INK, spaceAfter=4),
  'safe': ParagraphStyle('safe', fontName='Helvetica', fontSize=9.5, leading=13.5, textColor=QUIET, spaceAfter=14, leftIndent=8, borderPadding=(0,0,0,6)),
  'part': ParagraphStyle('part', fontName='Times-Bold', fontSize=16, leading=20, textColor=NAVY, spaceBefore=10, spaceAfter=3),
  'scene': ParagraphStyle('scene', fontName='Times-Italic', fontSize=10.5, leading=14, textColor=QUIET, spaceAfter=3),
  'frame': ParagraphStyle('frame', fontName='Helvetica', fontSize=10, leading=14, textColor=INK, spaceBefore=8, spaceAfter=10, backColor=HexColor('#FBF9F5'), borderColor=RULE, borderWidth=0.5, borderPadding=6),
  'prompt': ParagraphStyle('prompt', fontName='Helvetica', fontSize=10, leading=14, textColor=INK, spaceBefore=8, spaceAfter=2),
  'ex': ParagraphStyle('ex', fontName='Helvetica', fontSize=8.5, leading=12, textColor=QUIET, spaceAfter=4),
  'stem': ParagraphStyle('stem', fontName='Times-Roman', fontSize=12, leading=16, textColor=NAVY, spaceAfter=2),
  'lines': ParagraphStyle('lines', fontName='Helvetica', fontSize=10, leading=22, textColor=RULE),
  'words': ParagraphStyle('words', fontName='Helvetica', fontSize=9, leading=13, textColor=QUIET, spaceAfter=2),
  'foot': ParagraphStyle('foot', fontName='Helvetica', fontSize=8.5, leading=12, textColor=QUIET, spaceBefore=14),
}
def esc(t): return t.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
rule_line = '_' * 86
story = [Paragraph('BREAKING FREE · ENDING WELL · WORKSHEET', S['eyebrow']), Paragraph('Ending Well', S['h1']),
  Paragraph(('Twelve weeks, on your own. This is where you tell the men you will walk with where you started, what changed, what God did, and what you hope for — in your own words, one line at a time. Each line starts for you; you finish it.' if MODE == 'solo' else 'Twelve weeks, and the men who walked them with you. This is where you tell them where you started, what changed, what God did, and what you hope for — in your own words, one line at a time. Each line starts for you; you finish it.'), S['lede']),
  Paragraph('This sheet carries the same questions as the page, for working away from a screen. When you are ready, type your lines into Ending Well in Week 12 so it is saved to your page.', S['safe'])]
for i, p in enumerate(parts):
  block = [Paragraph('Part %d of %d — %s' % (i + 1, len(parts), esc(p['title'])), S['part'])]
  if p.get('scene'): block.append(Paragraph(esc(p['scene']), S['scene']))
  if p.get('frame'): block.append(Paragraph(esc(p['frame']), S['frame']))
  story.append(KeepTogether(block))
  for s in p['slots']:
    sl = []
    if s.get('scene'): sl.append(Paragraph(esc(s['scene']), S['scene']))
    sl.append(Paragraph(esc(s['prompt']), S['prompt']))
    sl.append(Paragraph(('Your own words. ' if s.get('own') else 'Finish the line. ') + 'For example: ' + esc(s['ex']), S['ex']))
    if s.get('words'): sl.append(Paragraph('Words to choose from: ' + esc(' · '.join(s['words'])), S['words']))
    if s['stem']: sl.append(Paragraph(esc(s['stem']) + ' …', S['stem']))
    for _ in range(3):
      sl.append(Spacer(1, 14)); sl.append(HRFlowable(width='100%', thickness=0.6, color=RULE, spaceBefore=0, spaceAfter=0))
    sl.append(Spacer(1, 4))
    story.append(KeepTogether(sl))
  if p.get('stone'):
    story.append(Paragraph('Or tap one of your own lines from What God did when you type this into the page.', S['words']))
story.append(Paragraph('Written at the end of Breaking Free. · ancientpathcoaching.com', S['foot']))
out = os.path.join(root, 'Ending-Well-worksheet' + ('-solo' if MODE == 'solo' else '') + '.pdf')
doc = SimpleDocTemplate(out, pagesize=letter, leftMargin=0.9*inch, rightMargin=0.9*inch, topMargin=0.8*inch, bottomMargin=0.8*inch, title='Ending Well — worksheet', author='Ancient Path')
doc.build(story)
print(out, os.path.getsize(out), 'bytes')
