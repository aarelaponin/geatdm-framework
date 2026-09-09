#!/usr/bin/env python3
"""Split a combined KP module deck into per-video decks. Each is the video's slide range
lifted out unchanged, opening on the section slide that already starts that range.

Usage:
    python split_module_deck.py <combined.pptx> <spec.json> [outdir]

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
import sys
import os
from pptx import Presentation
from pptx.oxml.ns import qn


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    src, specpath = sys.argv[1], sys.argv[2]
    outdir = sys.argv[3] if len(sys.argv) > 3 else '.'
    os.makedirs(outdir, exist_ok=True)
    spec = json.load(open(specpath))

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
