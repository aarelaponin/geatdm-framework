#!/usr/bin/env bash
# Render every slide of a deck and build labelled contact sheets for eyeball QA.
# Usage: qa_deck.sh <deck.pptx> [outdir] [demo_dir] [env_file]   (outdir default: /tmp/deckqa)
# Then LOOK at the sheets: overflow, overlaps, doubled footers, leftover placeholders.
#
# Before rendering, three hard checks on demo evidence (deck_lib.demo_slide & co.):
#   - every slide whose notes open with 'CLIP: <file>' names a file under demo_dir;
#   - every evidence slide carries its provenance line;
#   - no slide text or note carries a secret value (a *TOKEN*/*PIN*/*PASSWORD*/*SECRET* key)
#     from env_file — the build pack's .env. Frames are pixels and cannot be grepped; they come
#     from a ?filming=1 console that never renders a credential.
set -euo pipefail
DECK="$1"
OUT="${2:-/tmp/deckqa}"
DEMO_DIR="${3:-}"
ENV_FILE="${4:-}"
mkdir -p "$OUT"
python3 - "$(dirname "$0")" "$DECK" "$DEMO_DIR" "$ENV_FILE" <<'EOF'
import os, re, sys
lib, deck, demo_dir, env_file = sys.argv[1:5]
sys.path.insert(0, lib)
from pptx import Presentation
from deck_lib import DEMO_SHAPE, PROVENANCE_LEAD

secrets = []
if env_file:
    for ln in open(env_file, encoding='utf-8'):
        k, sep, v = ln.strip().partition('=')
        v = v.strip().strip('"\'')
        if sep and re.search(r'TOKEN|PIN|PASSWORD|SECRET', k) and len(v) >= 4:
            secrets.append((k, v))
bad = []
for n, sl in enumerate(Presentation(deck).slides, 1):
    texts = [sh.text_frame.text for sh in sl.shapes if sh.has_text_frame]
    note = sl.notes_slide.notes_text_frame.text if sl.has_notes_slide else ''
    if note.startswith('CLIP:'):
        name = note.split('\n', 1)[0][len('CLIP:'):].strip()
        if not (demo_dir and os.path.isfile(os.path.join(demo_dir, name))):
            bad.append('slide %d: CLIP %s not found under %s' % (n, name, demo_dir or '(no demo_dir given)'))
    if any(sh.name == DEMO_SHAPE for sh in sl.shapes) and not any(t.startswith(PROVENANCE_LEAD) for t in texts):
        bad.append('slide %d: demo evidence without its provenance line' % n)
    for k, v in secrets:
        if any(v in t for t in texts + [note]):
            bad.append('slide %d: carries the value of %s from %s' % (n, k, env_file))
if bad:
    sys.exit('qa_deck: demo-evidence checks failed\n  ' + '\n  '.join(bad))
EOF
BASE="$(basename "${DECK%.pptx}")"
soffice --headless --convert-to pdf "$DECK" --outdir "$OUT" >/dev/null
rm -f "$OUT/$BASE"-slide-*.jpg "$OUT/$BASE"-sheet-*.jpg
if command -v pdftoppm >/dev/null; then
  pdftoppm -jpeg -r 100 "$OUT/$BASE.pdf" "$OUT/$BASE-slide"
else
  # No poppler on Intel macOS (kp-slidecast's pdf_to_pngs has the story); pypdfium2 is a wheel.
  python3 - "$OUT/$BASE.pdf" "$OUT/$BASE-slide" <<'EOF'
import sys, pypdfium2
doc = pypdfium2.PdfDocument(sys.argv[1])
pad = len(str(len(doc)))
for i, page in enumerate(doc, 1):
    page.render(scale=100 / 72).to_pil().convert('RGB').save(f'{sys.argv[2]}-{i:0{pad}d}.jpg', quality=85)
doc.close()
EOF
fi
python3 - "$OUT" "$BASE" <<'EOF'
import glob, math, sys
from PIL import Image, ImageDraw
out, base = sys.argv[1], sys.argv[2]
files = sorted(glob.glob(f'{out}/{base}-slide-*.jpg'))
per, cols = 8, 2
for g in range(math.ceil(len(files) / per)):
    batch = files[g * per:(g + 1) * per]
    ims = [Image.open(f) for f in batch]
    w, h = ims[0].size
    scale = 560 / w
    ims = [im.resize((560, int(h * scale))) for im in ims]
    rows = math.ceil(len(ims) / cols)
    sheet = Image.new('RGB', (560 * cols + 30, ims[0].size[1] * rows + 50), 'white')
    d = ImageDraw.Draw(sheet)
    for i, im in enumerate(ims):
        x, y = (i % cols) * 570, (i // cols) * (im.size[1] + 10)
        sheet.paste(im, (x, y))
        d.text((x + 5, y + 5), batch[i].split('/')[-1], fill='red')
    p = f'{out}/{base}-sheet-{g:02d}.jpg'
    sheet.save(p, quality=82)
    print(p)
EOF
echo "Slide count: $(ls "$OUT/$BASE"-slide-*.jpg | wc -l)"
