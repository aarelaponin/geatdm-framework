#!/usr/bin/env bash
# Render every slide of a deck and build labelled contact sheets for eyeball QA.
# Usage: qa_deck.sh <deck.pptx> [outdir]     (outdir default: /tmp/deckqa)
# Then LOOK at the sheets: overflow, overlaps, doubled footers, leftover placeholders.
set -euo pipefail
DECK="$1"
OUT="${2:-/tmp/deckqa}"
mkdir -p "$OUT"
BASE="$(basename "${DECK%.pptx}")"
soffice --headless --convert-to pdf "$DECK" --outdir "$OUT" >/dev/null
rm -f "$OUT/$BASE"-slide-*.jpg "$OUT/$BASE"-sheet-*.jpg
pdftoppm -jpeg -r 100 "$OUT/$BASE.pdf" "$OUT/$BASE-slide"
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
