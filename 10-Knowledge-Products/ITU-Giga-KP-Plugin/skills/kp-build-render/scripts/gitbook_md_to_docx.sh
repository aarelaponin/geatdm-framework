#!/usr/bin/env bash
# gitbook_md_to_docx.sh — convert a Giga GitBook markdown file (as written by
# bundle_to_gitbook_md.py) to .docx, written next to it by default.
#
# This is a separate Word deliverable from the contract .docx: the contract .docx
# comes from the build script's own docx generation (see build_render.sh /
# OUT_PATH) and still carries the "Open calibration items" section; this one is
# rendered straight from the already-stripped, already-renumbered GitBook .md, so
# it matches what actually ships to Giga's GitBook.
#
# Tables render with a visible grid: pandoc's own default "Table" style has no
# borders, so this uses gitbook-reference.docx (pandoc's default reference.docx
# with the "Table" style's <w:tblBorders> filled in) via --reference-doc. Override
# with REFERENCE_DOC=/path/to/other.docx if a different look is ever needed.
#
# Usage:
#   gitbook_md_to_docx.sh <gitbook.md> [out.docx]
#
# Requires: pandoc.

set -euo pipefail

MD="${1:?usage: gitbook_md_to_docx.sh <gitbook.md> [out.docx]}"
[ -f "$MD" ] || { echo "not found: $MD" >&2; exit 1; }
OUT="${2:-${MD%.md}.docx}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REFERENCE_DOC="${REFERENCE_DOC:-$SCRIPT_DIR/gitbook-reference.docx}"

command -v pandoc >/dev/null 2>&1 || { echo "pandoc not found — install it (e.g. brew install pandoc / apt install pandoc)" >&2; exit 1; }

pandoc "$MD" --reference-doc="$REFERENCE_DOC" -o "$OUT"
echo "Wrote $OUT"
