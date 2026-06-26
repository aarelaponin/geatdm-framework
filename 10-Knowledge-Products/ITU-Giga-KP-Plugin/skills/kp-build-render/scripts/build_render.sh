#!/usr/bin/env bash
# build_render.sh — install docx (if needed), build a KP module's docx, and
# render verification page images in one go.
#
# Usage:
#   build_render.sh <path-to-build_script.js> [out_image_dir]
#
# Env:
#   SCRATCH   dir for the docx npm install + NODE_PATH (default: a temp dir)
#   PAGES     "f-l" page range for the body sample (default: 5-6)
#
# Requires: node, npm, soffice (LibreOffice), pdftoppm (poppler-utils).
# The generated .docx is written next to the build script. NEVER hand-edit it;
# fix the build script and re-run this.

set -euo pipefail

BUILD="${1:?usage: build_render.sh <build_script.js> [out_image_dir]}"
[ -f "$BUILD" ] || { echo "not found: $BUILD" >&2; exit 1; }

BUILD_DIR="$(cd "$(dirname "$BUILD")" && pwd)"
BUILD_FILE="$(basename "$BUILD")"
OUT_IMG_DIR="${2:-$BUILD_DIR/_render_check}"
SCRATCH="${SCRATCH:-$(mktemp -d)}"
PAGES="${PAGES:-5-6}"

echo "==> 1/4 docx install (scratch: $SCRATCH)"
if ! NODE_PATH="$SCRATCH/node_modules" node -e "require('docx')" 2>/dev/null; then
  ( cd "$SCRATCH" && npm init -y >/dev/null 2>&1 && npm install docx@8 >/dev/null 2>&1 )
fi
export NODE_PATH="$SCRATCH/node_modules"
node -e "require('docx')" && echo "    docx resolves"

echo "==> 2/4 build"
( cd "$BUILD_DIR" && node "$BUILD_FILE" )

DOCX="$(cd "$BUILD_DIR" && ls -t *.docx | head -1)"
echo "    built: $BUILD_DIR/$DOCX"

echo "==> 3/4 convert to PDF"
PDFDIR="$(mktemp -d)"
soffice --headless --convert-to pdf "$BUILD_DIR/$DOCX" --outdir "$PDFDIR" >/dev/null 2>&1
PDF="$PDFDIR/${DOCX%.docx}.pdf"
PAGECOUNT="$(pdfinfo "$PDF" 2>/dev/null | awk '/Pages/{print $2}')"
echo "    pages: ${PAGECOUNT:-?}"

echo "==> 4/4 render sample page images -> $OUT_IMG_DIR"
mkdir -p "$OUT_IMG_DIR"
pdftoppm -jpeg -r 90 -f 1 -l 1 "$PDF" "$OUT_IMG_DIR/cover" 2>/dev/null || true
F="${PAGES%-*}"; L="${PAGES#*-}"
pdftoppm -jpeg -r 90 -f "$F" -l "$L" "$PDF" "$OUT_IMG_DIR/body" 2>/dev/null || true
ls -1 "$OUT_IMG_DIR"/*.jpg 2>/dev/null || echo "    (no images produced — check the convert step)"

echo
echo "DONE. Inspect the images in: $OUT_IMG_DIR"
echo "Reminder: fixes go to the build script, then re-run this. Never edit the .docx."
