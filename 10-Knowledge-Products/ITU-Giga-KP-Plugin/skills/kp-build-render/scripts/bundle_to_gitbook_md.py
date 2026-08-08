#!/usr/bin/env python3
"""
bundle_to_gitbook_md.py — the same Markdown as bundle_to_md.py, minus the
internal-review-only "Open calibration items" section, for upload to Giga's GitBook.

Reuses bundle_to_md's build_markdown() for the rendering (cover, at-a-glance, every
subtopic, production notes, annex) so the two never drift, then removes: the
"## 5. Open calibration items" section (through its subsections, up to the next
top-level heading) and the one sentence in the document-context intro that points
to it. The former "## 6. Annex" then becomes "## 5. Annex" (heading and every prose
mention of "Section 6") so the numbering stays contiguous. Everything else is
untouched.

Generated, like bundle_to_md's .md — never hand-edit it; edit the build script and
regenerate.

Usage:
    python3 bundle_to_gitbook_md.py path/to/build_kp1_module3_v01.js [out.md]

Default output: <build script's dir>/gitbook/<bundle_to_md's default filename>.md
Standard library only.
"""

import re
import sys
from pathlib import Path

from bundle_to_md import build_markdown, default_md_name

CALIBRATION_SECTION = re.compile(
    r"\n## 5\. Open calibration items\n.*?(?=\n## \d|\Z)", re.DOTALL
)
CALIBRATION_REFERENCE = " Section 5 records the open calibration items raised during drafting."


def strip_calibration(md_text):
    md_text = md_text.replace("by bundle_to_md.py", "by bundle_to_gitbook_md.py", 1)
    md_text = CALIBRATION_SECTION.sub("\n", md_text)
    md_text = md_text.replace(CALIBRATION_REFERENCE, "")
    # Section 6 (Annex) closes the gap left by the removed section 5.
    md_text = re.sub(r"^## 6\.", "## 5.", md_text, flags=re.MULTILINE)
    md_text = md_text.replace("Section 6", "Section 5")
    return re.sub(r"\n{3,}", "\n\n", md_text)


def main():
    if len(sys.argv) < 2:
        sys.exit("usage: python3 bundle_to_gitbook_md.py <build_script.js> [out.md]")
    path = Path(sys.argv[1])
    md_text = strip_calibration(build_markdown(path))

    if len(sys.argv) > 2:
        out_path = Path(sys.argv[2])
    else:
        out_path = path.parent / "gitbook" / default_md_name(path)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(md_text, encoding="utf-8")
    print(f"Wrote {out_path} ({len(md_text)} chars)")


if __name__ == "__main__":
    main()
