#!/usr/bin/env python3
"""
bundle_to_md.py — turn a KP module BUILD SCRIPT (.js) into clean, GitBook-ready Markdown.

The .js build script is the single source of truth. The .docx and this .md are BOTH
generated from it. Re-run this whenever the build script changes — never hand-edit the
.md, because the next regeneration overwrites it (the kit's cardinal rule).

It parses the build script's body (cover table, at-a-glance table, the renderSubtopic
blocks, production notes, calibration items, annex) and emits Markdown that mirrors the
docx: per-subtopic header table, single-message callout, script (visual cues as block
quotes, voice-over as paragraphs), slide-spec table, the four-part AI tip (prompt in a
fenced code block), and the metadata table.

Usage:
    python3 bundle_to_md.py path/to/build_kp1_module3_v01.js [out.md]

Default output: the .docx name the script writes, with a .md extension, next to the
build script. Standard library only.
"""

import re
import sys
from pathlib import Path

JSSTR = re.compile(r'"((?:[^"\\]|\\.)*)"')


def unesc(s):
    return re.sub(r"\\(.)", r"\1", s)


def first_string(frag):
    m = JSSTR.search(frag)
    return unesc(m.group(1)) if m else ""


def all_strings(frag):
    return [unesc(m.group(1)) for m in JSSTR.finditer(frag)]


def balanced(src, open_idx):
    """From the bracket at open_idx, return (inner_text, close_idx)."""
    open_ch = src[open_idx]
    close_ch = {"(": ")", "[": "]", "{": "}"}[open_ch]
    depth = 0
    i = open_idx
    in_str = False
    while i < len(src):
        c = src[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == '"':
                in_str = False
        else:
            if c == '"':
                in_str = True
            elif c == open_ch:
                depth += 1
            elif c == close_ch:
                depth -= 1
                if depth == 0:
                    return src[open_idx + 1:i], i
        i += 1
    return src[open_idx + 1:], len(src)


def top_groups(inner, open_ch="["):
    """Return the inner text of each top-level open_ch..close group in `inner`."""
    out = []
    i = 0
    while i < len(inner):
        c = inner[i]
        if c == '"':
            j = i + 1
            while j < len(inner):
                if inner[j] == "\\":
                    j += 2
                    continue
                if inner[j] == '"':
                    break
                j += 1
            i = j + 1
            continue
        if c == open_ch:
            grp, end = balanced(inner, i)
            out.append(grp)
            i = end + 1
            continue
        i += 1
    return out


def md_cell(s):
    return s.replace("|", "\\|").replace("\n", " ").strip()


def table(headers, rows):
    out = ["| " + " | ".join(md_cell(h) for h in headers) + " |",
           "| " + " | ".join("---" for _ in headers) + " |"]
    for r in rows:
        cells = [md_cell(c) for c in r] + [""] * (len(headers) - len(r))
        out.append("| " + " | ".join(cells[:len(headers)]) + " |")
    return "\n".join(out) + "\n"


def kv_table(pairs):
    return table(["Field", "Value"], pairs)


def parse_subtopic(block, persona_default):
    def field(name):
        m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', block)
        return unesc(m.group(1)) if m else ""

    num = field("num")
    title = field("title")
    runtime = field("runtime")
    wm = re.search(r"words:\s*(\d+)", block)
    words = wm.group(1) if wm else ""
    persona = field("persona") or persona_default
    anchor = field("paeraAnchor")
    single = field("singleMessage")

    md = [f"\n## {num} — {title}\n"]
    md.append(kv_table([
        ["Persona", persona],
        ["Target runtime", f"{runtime} (≈{words} spoken words)"],
        ["PAERA anchor", anchor],
    ]))
    md.append(f"\n> **Single message —** _{single}_\n")

    # script beats
    md.append("\n### Script (voice-over over text-only slides)\n")
    bm = re.search(r"scriptBeats:\s*\[", block)
    if bm:
        inner, _ = balanced(block, bm.end() - 1)
        for obj in top_groups(inner, "{"):
            cue = re.search(r'cue:\s*"((?:[^"\\]|\\.)*)"', obj)
            txt = re.search(r'text:\s*"((?:[^"\\]|\\.)*)"', obj)
            if cue:
                md.append(f"> _{unesc(cue.group(1))}_\n")
            if txt:
                md.append(unesc(txt.group(1)) + "\n")

    # slide spec
    sm = re.search(r"slideSpecRows:\s*\[", block)
    if sm:
        inner, _ = balanced(block, sm.end() - 1)
        rows = [all_strings(r) for r in top_groups(inner, "[")]
        md.append("\n### On-screen slide specification\n")
        md.append(table(["Slide", "Element (text-only)", "Notes"], rows))

    # ai tip
    am = re.search(r"aiTip:\s*\{", block)
    if am:
        inner, _ = balanced(block, am.end() - 1)

        def ai(name):
            m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', inner)
            return unesc(m.group(1)) if m else ""

        md.append(f"\n### AI usage tip — {ai('title')}\n")
        md.append(f"**What the prompt does:** {ai('problem')}\n")
        md.append("\n**Prompt template (copy-paste into Claude):**\n")
        md.append("```text\n" + ai("prompt") + "\n```\n")
        md.append(f"\n**Inputs and outputs:** {ai('io')}\n")
        md.append(f"\n**Safeguard:** {ai('safeguard')}\n")

    # metadata
    mm = re.search(r"metadataRows:\s*\[", block)
    if mm:
        inner, _ = balanced(block, mm.end() - 1)
        rows = [all_strings(r) for r in top_groups(inner, "[")]
        md.append("\n### Metadata\n")
        md.append(table(["Field", "Value"], rows))

    return "\n".join(md)


def main():
    if len(sys.argv) < 2:
        sys.exit("usage: python3 bundle_to_md.py <build_script.js> [out.md]")
    path = Path(sys.argv[1])
    src = path.read_text(encoding="utf-8")

    # Persona default: Module 2+ pass a PERSONA_A constant; Module 1 hard-codes the
    # Strategist persona as a literal ["Persona", "S (Strategist) …"] inside the helper.
    lit = re.search(r'\["Persona",\s*"((?:[^"\\]|\\.)*)"', src)
    pm = re.search(r'PERSONA_A\s*=\s*"((?:[^"\\]|\\.)*)"', src)
    if lit:
        persona_default = unesc(lit.group(1))
    elif pm:
        persona_default = unesc(pm.group(1))
    else:
        persona_default = "A (Architect)"

    b0 = src.index("const body = []")
    b1 = src.index("const doc = new Document")
    body = src[b0:b1]
    # Persona constants (PERSONA_A, PERSONA_S, …) are passed as bare identifiers in the
    # cover table and per-subtopic; inline each constant's value so the cover and the
    # subtopic header render the persona instead of an empty cell.
    for cm in re.finditer(r'(PERSONA_\w+)\s*=\s*"((?:[^"\\]|\\.)*)"', src):
        body = body.replace(cm.group(1), '"' + unesc(cm.group(2)).replace('"', '\\"') + '"')

    # The document title lives in the Document config (after the body), so search there
    # to avoid matching the first subtopic's title: field.
    tm = re.search(r'title:\s*"((?:[^"\\]|\\.)*)"', src[b1:])
    doc_title = unesc(tm.group(1)) if tm else path.stem

    out = [f"<!-- GENERATED from {path.name} by bundle_to_md.py — do not hand-edit; "
           f"edit the build script and regenerate. -->\n",
           f"# {doc_title}\n"]

    # Walk body-level content calls in source order; render subtopics inline.
    # Match the call name when not preceded by an identifier char, so it catches both
    # line-start args (multi-arg body.push) and mid-line calls like
    # `body.push(H1(...))` and `body.push(...renderSubtopic({...}))`. The while-loop
    # advances past each renderSubtopic block, so interior tokens are never re-scanned.
    token = re.compile(r"(?<![A-Za-z0-9_])(renderSubtopic|specTable|genericTable|H1|H3|PItalic|P)\s*\(")
    i = 0
    while True:
        m = token.search(body, i)
        if not m:
            break
        kind = m.group(1)
        open_paren = body.index("(", m.end() - 1)
        if kind == "renderSubtopic":
            obj_open = body.index("{", open_paren)
            block, end = balanced(body, obj_open)
            out.append(parse_subtopic(block, persona_default))
            i = end + 1
        elif kind in ("H1", "H3"):
            inner, end = balanced(body, open_paren)
            txt = first_string(inner)
            out.append(f"\n{'## ' if kind == 'H1' else '### '}{txt}\n")
            i = end + 1
        elif kind in ("P", "PItalic"):
            inner, end = balanced(body, open_paren)
            txt = first_string(inner)
            out.append((f"_{txt}_" if kind == "PItalic" else txt) + "\n")
            i = end + 1
        elif kind == "specTable":
            inner, end = balanced(body, open_paren)
            arrs = top_groups(inner, "[")
            rows = [all_strings(r) for r in top_groups(arrs[0], "[")] if arrs else []
            out.append("\n" + kv_table(rows))
            i = end + 1
        elif kind == "genericTable":
            inner, end = balanced(body, open_paren)
            arrs = top_groups(inner, "[")
            headers = all_strings(arrs[1]) if len(arrs) > 1 else []
            rows = [all_strings(r) for r in top_groups(arrs[2], "[")] if len(arrs) > 2 else []
            out.append("\n" + table(headers, rows))
            i = end + 1
        else:
            i = m.end()

    md_text = "\n".join(out)
    md_text = re.sub(r"\n{3,}", "\n\n", md_text)

    if len(sys.argv) > 2:
        out_path = Path(sys.argv[2])
    else:
        dm = re.search(r'path\.join\(__dirname,\s*"([^"]+\.docx)"', src)
        name = (dm.group(1)[:-5] + ".md") if dm else (path.stem + ".md")
        out_path = path.with_name(name)
    out_path.write_text(md_text, encoding="utf-8")
    print(f"Wrote {out_path} ({len(md_text)} chars)")


if __name__ == "__main__":
    main()
