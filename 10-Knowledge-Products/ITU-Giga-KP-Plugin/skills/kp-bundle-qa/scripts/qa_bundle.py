#!/usr/bin/env python3
"""
qa_bundle.py — static ITU-compliance checks over a KP module BUILD SCRIPT.

The build script (build_kpN_moduleM_v0X.js) is the source of truth; the docx is
generated from it. This runs the mechanical checks from the kp-bundle-qa gate and
prints a pass/fail report. The fresh-eyes render review (broken tables, blank
pages, box colours) is done separately by eye on the rendered PDF.

Usage:
    python3 qa_bundle.py path/to/build_kp1_module2_v01.js
    python3 qa_bundle.py --stats path/to/build_kp1_module2_v01.js

Exit code 0 = all HARD checks passed (soft warnings may remain). Non-zero = a hard
check failed. Hard: forbidden strings, missing seven-element pieces, numbering
gaps, a narrated practice box. Soft (warn only): meta-intro phrases, on-camera cues,
structural-argument coverage, metadata gaps, word-count/runtime mismatch, length
discipline (opener / recap / word ceiling / thin slides) and the practice-box wiring.

--stats prints the per-subtopic and per-module measurement table (spoken words,
slides, opener and recap words) as Markdown. It is the acceptance instrument for a
tightening pass: paste it into the commit message as the before/after record.

Standard library only.
"""

import re
import sys
from pathlib import Path

FORBIDDEN = [
    "GEATDM", "TK-IO-", "TK-DPI-",
    "Tax Administration Reference", "IMF TA RA",
    "we have done this in other sectors",
]
# "IMF" alone is too broad (could appear in prose); require the RA context above.

META_INTRO = [
    "in this video", "in this lesson", "next video", "next we'll", "next we will",
    "we'll cover", "we will cover", "coming up", "previous video", "the last video",
    "earlier we", "as we saw", "in the next", "in the previous", "to recap",
    "in conclusion", "in the last video", "the previous video covered",
]
ON_CAMERA = [
    "speaker on camera", "on camera", "to camera", "presenter", "piece to camera",
]
SEVEN_KEYS = ["num", "title", "runtime", "words", "paeraAnchor",
              "singleMessage", "scriptBeats", "slideSpecRows", "aiTip", "metadataRows"]
AITIP_PARTS = ["title", "problem", "prompt", "io", "safeguard"]
META_ROWS = ["Working title", "YouTube", "Description", "Tags",
             "Playlist", "ToR", "PAERA citations", "External-link"]

PRACTICE_LEAD_IN = "Do this on your own sector"
RECAP_CUE = "In one sentence"
# Soft length thresholds (KP1 tightening analysis, 2 Sep 2026; ~110 realised wpm).
CAP_OPENER = 45
CAP_RECAP = 35
CAP_WORDS = 550
THIN_SLIDE = 45
# Belongs on the on-screen practice box, never in the recap voice-over.
RECAP_BANNED = ["prompt", "description", "your own sector"]

REUSE_SIGNATURES = ["re-use", "reuse", "whole-of-government", "whole of government"]
LINGUA_SIGNATURES = ["lingua franca", "shared language", "business and it",
                     "business side", "metamodel"]


def strip_comments(src):
    """Remove // line comments and /* */ block comments so the prose scans only
    see authored content, not the build script's own documentation of what it
    scrubbed (which otherwise causes false 'in this video' / 'on camera' hits)."""
    src = re.sub(r"/\*.*?\*/", " ", src, flags=re.DOTALL)
    src = re.sub(r"(?m)//.*$", " ", src)
    return src


def find_subtopic_blocks(src):
    """Return the text of each renderSubtopic({...}) CALL (not the definition)."""
    blocks = []
    for m in re.finditer(r"renderSubtopic\(\{", src):
        start = m.end() - 1  # at the '{'
        # skip the function definition: it is preceded by 'function '
        prefix = src[max(0, m.start() - 12):m.start()]
        if "function " in prefix:
            continue
        depth = 0
        i = start
        while i < len(src):
            c = src[i]
            if c == "{":
                depth += 1
            elif c == "}":
                depth -= 1
                if depth == 0:
                    blocks.append(src[start:i + 1])
                    break
            i += 1
    return blocks


def field(block, name):
    """The value of a top-level string field, or ''."""
    m = re.search(name + r':\s*"((?:[^"\\]|\\.)*)"', block)
    return re.sub(r"\\(.)", r"\1", m.group(1)) if m else ""


def _slice(block, key, open_ch="["):
    """The inner text of block's `key: [ … ]` (or `{ … }`), quote-aware."""
    close_ch = {"[": "]", "{": "}"}[open_ch]
    m = re.search(key + r":\s*" + re.escape(open_ch), block)
    if not m:
        return ""
    i = m.end() - 1
    depth = 0
    in_str = False
    while i < len(block):
        c = block[i]
        if in_str:
            if c == "\\":
                i += 2
                continue
            if c == '"':
                in_str = False
        elif c == '"':
            in_str = True
        elif c == open_ch:
            depth += 1
        elif c == close_ch:
            depth -= 1
            if depth == 0:
                return block[m.end():i]
        i += 1
    return block[m.end():]


def beats(block):
    """[(kind, text), …] over scriptBeats in source order; kind is 'cue' or 'text'."""
    inner = _slice(block, "scriptBeats")
    return [(m.group(1), re.sub(r"\\(.)", r"\1", m.group(2)))
            for m in re.finditer(r'(cue|text):\s*"((?:[^"\\]|\\.)*)"', inner)]


def slide_vo(block):
    """[(slide label, voice-over words, cue text), …] — one entry per cue."""
    out = []
    for kind, txt in beats(block):
        if kind == "cue":
            mm = re.match(r"\s*(Slide\s*\d+)", txt)
            out.append([mm.group(1) if mm else txt[:18], 0, txt])
        elif out:
            out[-1][1] += len(txt.split())
    return [tuple(r) for r in out]


def thin_slides(block):
    """Content slides carrying too little voice-over to justify a slide of their own.

    The title, recap and Sources slides are short by design — the opener and recap
    caps are what make them short — so they are never thin-slide candidates."""
    rows = slide_vo(block)[1:]
    return [label for label, words, cue in rows
            if 0 < words < THIN_SLIDE
            and RECAP_CUE.lower() not in cue.lower()
            and "'sources'" not in cue.lower()]


def opener_words(block):
    """Words in the first text beat (the beat after the title cue)."""
    for kind, txt in beats(block):
        if kind == "text":
            return len(txt.split())
    return 0


def recap_beat(block):
    """(words, text) of the text beat following the 'In one sentence' cue."""
    seen = False
    for kind, txt in beats(block):
        if kind == "cue" and RECAP_CUE.lower() in txt.lower():
            seen = True
        elif seen and kind == "text":
            return len(txt.split()), txt
    return 0, ""


def spoken_words(block):
    return sum(len(t.split()) for k, t in beats(block) if k == "text")


def print_stats(path, blocks):
    """The measurement table: the acceptance instrument for a tightening pass."""
    rows = []
    for b in blocks:
        words = spoken_words(b)
        rows.append((field(b, "num").split()[-1] if field(b, "num") else "?",
                     words, len(slide_vo(b)), opener_words(b), recap_beat(b)[0]))
    n = len(rows) or 1
    tw = sum(r[1] for r in rows)
    ts = sum(r[2] for r in rows)
    print("\n### {} — measurement\n".format(path.name))
    print("| Subtopic | Spoken words | Slides | Opener words | Recap words |")
    print("|---|---|---|---|---|")
    for r in rows:
        print("| {} | {} | {} | {} | {} |".format(*r))
    print("| **{} videos** | **{}** | **{}** | avg {} | avg {} |".format(
        len(rows), tw, ts, sum(r[3] for r in rows) // n, sum(r[4] for r in rows) // n))
    print("\nAverage {} spoken words and {:.1f} slides per video.".format(tw // n, ts / n))


def report(title):
    print("\n" + "=" * 64)
    print(title)
    print("=" * 64)


def main():
    args = [a for a in sys.argv[1:] if a != "--stats"]
    stats_only = "--stats" in sys.argv
    if not args:
        sys.exit("usage: python3 qa_bundle.py [--stats] <build_script.js>")
    path = Path(args[0])
    if not path.exists():
        sys.exit(f"not found: {path}")
    src = path.read_text(encoding="utf-8", errors="replace")
    low = src.lower()
    code = strip_comments(src)        # comments removed
    code_low = code.lower()           # for prose scans (meta-intros, on-camera)

    if stats_only:
        print_stats(path, find_subtopic_blocks(src))
        return

    hard_fail = 0
    soft_warn = 0

    # 1. Forbidden strings -------------------------------------------------
    report("1. Forbidden strings (HARD)")
    hits = [(t, src.count(t)) for t in FORBIDDEN if t in src]
    if hits:
        for t, n in hits:
            print(f"  FAIL  '{t}' x{n}")
        hard_fail += 1
    else:
        print("  PASS  none of the forbidden strings present")

    blocks = find_subtopic_blocks(src)
    report(f"2. Seven-element completeness (HARD) — {len(blocks)} subtopic(s) found")
    for b in blocks:
        num = (re.search(r'num:\s*"([^"]+)"', b) or [None, "?"])[1]
        missing = [k for k in SEVEN_KEYS if (k + ":") not in b]
        # aiTip four parts live inside the aiTip object
        ai = re.search(r"aiTip:\s*\{(.+?)\}\s*,\s*metadataRows", b, re.DOTALL)
        ai_missing = []
        if ai:
            aibody = ai.group(1)
            ai_missing = [p for p in AITIP_PARTS if (p + ":") not in aibody]
        else:
            ai_missing = ["(aiTip block not parsed)"]
        page_break = True  # renderSubtopic always appends a pageBreak in the helper
        if missing or ai_missing:
            print(f"  FAIL  {num}: missing {missing} aiTip:{ai_missing}")
            hard_fail += 1
        else:
            print(f"  PASS  {num}: all seven elements + 4-part AI tip")

    # 3. Numbering ---------------------------------------------------------
    report("3. Numbering (HARD)")
    nums = re.findall(r'num:\s*"[^"]*?(\d+\.\d+)[^"]*"', src)
    print(f"  subtopic numbers: {nums}")
    if nums:
        parts = [tuple(int(x) for x in n.split(".")) for n in nums]
        gaps = []
        for a, bnum in zip(parts, parts[1:]):
            if bnum[0] == a[0] and bnum[1] != a[1] + 1:
                gaps.append(f"{a[0]}.{a[1]} -> {bnum[0]}.{bnum[1]}")
        if len(set(nums)) != len(nums):
            print("  FAIL  duplicate subtopic numbers")
            hard_fail += 1
        elif gaps:
            print(f"  FAIL  non-sequential: {gaps}")
            hard_fail += 1
        else:
            print("  PASS  decimal, sequential, no gaps")
    # at-a-glance row count vs subtopic count
    glance = len(re.findall(r'"\d+\.\d+",', src))
    print(f"  (rows referencing x.y in tables: {glance}; subtopic calls: {len(blocks)})")

    # 4. Meta-intros -------------------------------------------------------
    report("4. In-video intros / outros / cross-references (SOFT — human keep/cut)")
    found = []
    for phrase in META_INTRO:
        for m in re.finditer(re.escape(phrase), code_low):
            ctx = code[max(0, m.start() - 40):m.start() + 40].replace("\n", " ")
            found.append((phrase, ctx))
    if found:
        for phrase, ctx in found[:40]:
            print(f"  WARN  '{phrase}'  …{ctx}…")
        soft_warn += 1
    else:
        print("  PASS  no meta-intro / outro phrases detected")

    # 5. On-camera ---------------------------------------------------------
    report("5. No individuals on screen (SOFT — check context: a 'no … on camera' note is fine)")
    cam_found = []
    for phrase in ON_CAMERA:
        for m in re.finditer(re.escape(phrase), code_low):
            ctx = code[max(0, m.start() - 45):m.start() + 25].replace("\n", " ")
            cam_found.append((phrase, ctx))
    if cam_found:
        for phrase, ctx in cam_found[:20]:
            print(f"  WARN  '{phrase}'  …{ctx}…")
        soft_warn += 1
    else:
        print("  PASS  no on-camera cues")

    # 6. Structural arguments ---------------------------------------------
    report("6. Both structural arguments present (SOFT)")
    reuse = any(s in low for s in REUSE_SIGNATURES)
    lingua = any(s in low for s in LINGUA_SIGNATURES)
    print(f"  planning-enables-re-use signatures present: {reuse}")
    print(f"  EA-as-lingua-franca signatures present:     {lingua}")
    if reuse and lingua:
        print("  PASS  both structural arguments are surfaced somewhere")
    else:
        print("  WARN  a structural argument may be missing — confirm by reading")
        soft_warn += 1

    # 7. Metadata completeness --------------------------------------------
    report("7. Metadata completeness (SOFT)")
    for b in blocks:
        num = (re.search(r'num:\s*"([^"]+)"', b) or [None, "?"])[1]
        meta = re.search(r"metadataRows:\s*\[(.+?)\]\s*\}\s*\)\)", b, re.DOTALL)
        body = meta.group(1) if meta else b
        miss = [r for r in META_ROWS if r not in body]
        desc = re.search(r'"Description[^"]*",\s*"([^"]+)"', body)
        desc_words = len(desc.group(1).split()) if desc else 0
        ai_mention = bool(desc and "prompt" in desc.group(1).lower())
        flags = []
        if miss:
            flags.append(f"missing rows {miss}")
        if desc and not (45 <= desc_words <= 80):
            flags.append(f"description {desc_words} words (target ~60)")
        if desc and not ai_mention:
            flags.append("description omits AI-prompt mention")
        if flags:
            print(f"  WARN  {num}: " + "; ".join(flags))
            soft_warn += 1
        else:
            print(f"  PASS  {num}: metadata complete, ~60-word desc mentions the prompt")

    # 8. Word count vs runtime --------------------------------------------
    report("8. Word count vs runtime (SOFT)")
    for b in blocks:
        num = (re.search(r'num:\s*"([^"]+)"', b) or [None, "?"])[1]
        rt = re.search(r'runtime:\s*"~?(\d+)\s*min', b)
        wd = re.search(r"words:\s*(\d+)", b)
        if rt and wd:
            mins, words = int(rt.group(1)), int(wd.group(1))
            wpm = words / mins if mins else 0
            ok = 90 <= wpm <= 170   # scripts run ~120-150 wpm (visuals breathe)
            tag = "PASS" if ok else "WARN"
            if not ok:
                soft_warn += 1
            print(f"  {tag}  {num}: {words} words / {mins} min = {wpm:.0f} wpm")

    # 9. Length discipline (SOFT) -----------------------------------------
    report("9. Length discipline (SOFT — never fails the gate)")
    for b in blocks:
        num = field(b, "num") or "?"
        words = spoken_words(b)
        op = opener_words(b)
        rw, rtext = recap_beat(b)
        flags = []
        if op > CAP_OPENER:
            flags.append("opener {} words (cap {})".format(op, CAP_OPENER))
        if rw > CAP_RECAP:
            flags.append("recap {} words (cap {})".format(rw, CAP_RECAP))
        if not rw:
            flags.append("no '{}' recap beat found".format(RECAP_CUE))
        if words > CAP_WORDS:
            flags.append("{} spoken words (ceiling {})".format(words, CAP_WORDS))
        thin = thin_slides(b)
        if thin:
            flags.append("thin slides (<{} words): {}".format(THIN_SLIDE, ", ".join(thin)))
        banned = [p for p in RECAP_BANNED if p in rtext.lower()]
        if banned:
            flags.append("recap VO says {} — that belongs on the practice box".format(banned))
        if flags:
            print("  WARN  {}: ".format(num) + "; ".join(flags))
            soft_warn += 1
        else:
            print("  PASS  {}: {} words, opener {}, recap {}".format(num, words, op, rw))

    # 10. Practice box ------------------------------------------------------
    report("10. On-screen practice box")
    # Narrating the box is a compliance leak, so that half is HARD.
    narrated = [(field(b, "num"), t) for b in blocks for k, t in beats(b)
                if k == "text" and PRACTICE_LEAD_IN.lower() in t.lower()]
    if narrated:
        for num, t in narrated:
            print("  FAIL  {}: voice-over contains the box lead-in — …{}…".format(num, t[:80]))
        hard_fail += 1
    else:
        print("  PASS  the box lead-in is nowhere in the voice-over")
    for b in blocks:
        num = field(b, "num") or "?"
        artefact = field(b, "practice")
        if not artefact:
            print("  WARN  {}: no practice field".format(num))
            soft_warn += 1
            continue
        io = field(_slice(b, "aiTip", "{"), "io")
        if artefact.lower().rstrip(".") in io.lower():
            print("  PASS  {}: practice artefact matches the tip's output line".format(num))
        else:
            print("  WARN  {}: practice artefact '{}' is not in the tip's io line "
                  "— the box and the tip can drift".format(num, artefact))
            soft_warn += 1

    # Summary --------------------------------------------------------------
    report("SUMMARY")
    print(f"  hard failures: {hard_fail}")
    print(f"  soft warnings: {soft_warn}")
    print("  Apply fixes to the BUILD SCRIPT, re-render, re-run this gate.")
    sys.exit(1 if hard_fail else 0)


if __name__ == "__main__":
    main()
