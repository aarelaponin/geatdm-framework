#!/usr/bin/env python3
"""Split a combined KP module deck into per-video decks. Each is the video's slide range
lifted out unchanged, opening on the section slide that already starts that range.

Usage:
    python split_module_deck.py <combined.pptx> <spec.json> [outdir] [--infer-ranges]

--infer-ranges: derive each video's range from the deck itself — a video runs from its section
slide (the 'KP1 · MODULE n · VIDEO n.x' kicker) to the slide before the next one (or before the
Thank-you slide) — and write the ranges back into spec.json before splitting. Use it after any
rebuild that changes slide counts (the 2026-09 hook slide added one slide per video), instead of
re-counting by hand.

spec.json:
{
  "out_pattern": "KP1_Module1_Video_{code}_v0.1.pptx",
  "videos": [
    {"code": "1.1", "range": [3, 7]},   // 1-indexed inclusive range in the combined deck
    ...
  ]
}
Other keys are ignored here; leave them, scripts_from_deck.py reads title, mins and message
from the same spec.

One title card, not two. This used to prepend a retitled copy of the module cover, so every
video opened on two cards saying the same thing — ~10 s of dead screen and an extra slide for
the cue file to place. The section slide is the better standalone title card: it carries the
module-scoped kicker, the number, the title and the single message, and none of the cover's
Module-scoped lifecycle panel. Its notes hold the opener's voice-over, so the brief still
feeds that to the hosts.

Numbering rule: the title-card kicker is module-scoped — 'Module N · Video N.x',
never 'Video N.x of <count>' (reads as a claim about the whole KP).
"""
import json
import re
import sys
import os
from pptx import Presentation
from pptx.oxml.ns import qn

KICKER = re.compile(r'^KP\d+ · MODULE \d+ · VIDEO (\d+\.\d+)$')


def infer_ranges(prs):
    """{code: [first, last]} from the section-slide kickers; 1-indexed inclusive."""
    starts, end = [], None
    for i, sl in enumerate(prs.slides, 1):
        if sl.slide_layout.name.strip().startswith('2_Thank'):
            end = i - 1
            break
        for sh in sl.shapes:
            if sh.has_text_frame:
                m = KICKER.match(sh.text_frame.text.strip())
                if m:
                    starts.append((m.group(1), i))
    end = end or len(prs.slides)
    out = {}
    for k, (code, a) in enumerate(starts):
        b = starts[k + 1][1] - 1 if k + 1 < len(starts) else end
        out[code] = [a, b]
    return out


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    src, specpath = args[0], args[1]
    outdir = args[2] if len(args) > 2 else '.'
    os.makedirs(outdir, exist_ok=True)
    spec = json.load(open(specpath))

    if '--infer-ranges' in sys.argv:
        found = infer_ranges(Presentation(src))
        for v in spec['videos']:
            if v['code'] not in found:
                sys.exit('no section slide for %s in %s' % (v['code'], src))
            if v.get('range') != found[v['code']]:
                print('%s range %s -> %s' % (v['code'], v.get('range'), found[v['code']]))
            v['range'] = found[v['code']]
        json.dump(spec, open(specpath, 'w', encoding='utf-8'), indent=2, ensure_ascii=False)
        open(specpath, 'a').write('\n')

    for v in spec['videos']:
        a, b = v['range']
        prs = Presentation(src)
        sldIdLst = prs.slides._sldIdLst
        for i, sld in enumerate(list(sldIdLst), start=1):
            if not a <= i <= b:
                prs.part.drop_rel(sld.get(qn('r:id')))
                sldIdLst.remove(sld)

        out = os.path.join(outdir, spec['out_pattern'].format(code=v['code']))
        prs.save(out)
        print(out, len(list(prs.slides._sldIdLst)), 'slides')


if __name__ == '__main__':
    main()
