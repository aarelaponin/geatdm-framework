#!/usr/bin/env python3
"""
extract_paera_sections.py — dump the PAERA v1.0 document's heading tree and the
key paraphrased lists, so a KP module's citations can be diffed against the source.

This produces the SOURCE side of the citation-verify diff. It does not judge the
module; it gives you PAERA's actual section numbers, headings, and the lists the
KP bundles paraphrase (principles, metamodel entities, taxonomy types) so you can
confirm or correct each citation.

Usage:
    python3 extract_paera_sections.py [path-to-PAERA_document_v.1.0.docx]

Default path (contract tree):
    itu-knowledge/_inputs/PAERA_document_v.1.0.docx

Requires python-docx:
    pip install python-docx --break-system-packages
"""

import re
import sys
from pathlib import Path

DEFAULT = "itu-knowledge/_inputs/PAERA_document_v.1.0.docx"

# Heading-ish patterns: a numbered section (1, 1.2, 3.4.3), an Annex, or a
# Heading-styled paragraph. We keep this liberal because PAERA's numbering is
# what we are trying to recover.
SECTION_RE = re.compile(r"^\s*((?:\d+\.)*\d+|Annex\s+[A-Z0-9.]+)\b\s*(.*)$", re.IGNORECASE)

# Cue phrases that mark the lists the KP bundles paraphrase. When a heading or
# paragraph matches, we print the surrounding block so the canonical wording is
# visible.
LIST_CUES = [
    "architectural principle", "principles",
    "metamodel", "entities", "relationship",
    "taxonomy", "organisational taxonomy", "organization taxonomy",
    "policy unit", "regulatory", "service-delivery", "service delivery",
    "once-only", "once only",
    "readiness assessment", "lifecycle", "discover", "assess", "adapt",
]


def load_doc(path):
    try:
        from docx import Document
    except ImportError:
        sys.exit(
            "python-docx not installed.\n"
            "  pip install python-docx --break-system-packages"
        )
    if not Path(path).exists():
        sys.exit(f"PAERA document not found: {path}")
    return Document(path)


def main():
    path = sys.argv[1] if len(sys.argv) > 1 else DEFAULT
    doc = load_doc(path)

    paras = [p for p in doc.paragraphs]
    print(f"# PAERA source extract — {path}\n")

    # 1. Heading tree (from Heading styles AND from numbered-line heuristics)
    print("## Heading / section tree\n")
    for p in paras:
        style = (p.style.name or "") if p.style else ""
        text = p.text.strip()
        if not text:
            continue
        is_heading_style = style.lower().startswith("heading") or style.lower().startswith("title")
        m = SECTION_RE.match(text)
        if is_heading_style or (m and len(text) < 120):
            marker = "H" if is_heading_style else " "
            print(f"  [{marker}] {text}")
    print()

    # 2. The paraphrased lists — print blocks around cue phrases
    print("## Candidate list blocks (principles / metamodel / taxonomy / lifecycle)\n")
    printed = set()
    for i, p in enumerate(paras):
        text = p.text.strip()
        low = text.lower()
        if not text:
            continue
        if any(cue in low for cue in LIST_CUES) and len(text) < 200:
            # print this line plus the next few non-empty lines as context
            block = []
            j = i
            while j < len(paras) and len(block) < 14:
                t = paras[j].text.strip()
                if t:
                    block.append(t)
                j += 1
            key = block[0][:60]
            if key in printed:
                continue
            printed.add(key)
            print("  ─── block ───")
            for line in block:
                print(f"   | {line}")
            print()

    print("## Next step")
    print("  Diff each KP citation / paraphrased list against the blocks above.")
    print("  Mark VERIFIED only where the section number and wording match.")
    print("  Emit corrections as build-script edits; never edit the .docx.")


if __name__ == "__main__":
    main()
