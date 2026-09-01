#!/usr/bin/env python3
"""Lint an InterviewScript before it is synthesized. Stdlib only, costs nothing.

    tts_script_lint.py <lang>/tts/KP1_M1_1.1_InterviewScript_v0.1.md
    tts_script_lint.py <script.md> --config <TTSConfig.json>   # override the sibling config
    tts_script_lint.py <script.md> --quiet                     # only FAIL/WARN lines

Everything `srt_drift_check.py` will FAIL on after the take exists, this FAILs on
before the take is paid for. The word lists are IMPORTED from that checker rather
than copied, so the two gates cannot drift apart (this is the §3.3 open question in
docs/plans/2026-08-29-kp-interview-tts.md, decided: shared, not vendored).

Exit 0 clean, 1 any FAIL, 2 the file could not be parsed.
"""

import argparse
import json
import re
import sys
from pathlib import Path

# The prohibition lists live in exactly one place: the Step 6 auditor.
_CHECKER = (Path(__file__).resolve().parents[2]
            / "kp-audio-brief" / "scripts" / "srt_drift_check.py")
sys.path.insert(0, str(_CHECKER.parent))
try:
    from srt_drift_check import (BANNED_PHRASES, CITIZEN_FRAMING, FILLER,  # noqa: E402
                                 TERMINOLOGY)
except ImportError as e:
    sys.exit(f"cannot import the shared prohibition lists from {_CHECKER}: {e}")

WPM = 150                 # fallback; the TTSConfig's `wpm` is what the preamble asks for
BUDGET_WARN = 0.10        # per-slide word budget tolerance
BUDGET_FAIL = 0.20
EXPERT_SHARE_MIN = 0.80   # interview-format rule 1
FILLER_PER_100W = 1.5     # == srt_drift_check.py's threshold

# <!-- slide: 3 — The country pays | words: 120 -->   (em dash or hyphen, both fine)
SLIDE_RE = re.compile(r"^<!--\s*slide:\s*(\d+)\s*[—-]\s*(.*?)\s*\|\s*words:\s*(\d+)\s*-->\s*$")
CONFIG_RE = re.compile(r"^<!--\s*config:\s*(\S+)\s*-->\s*$")
TURN_RE = re.compile(r"^\*\*([^*:]+):\*\*\s*(.*)$")


def load_config(script_path, override):
    """--config wins; then a `<!-- config: … -->` line; then the name-matched sibling.

    Stashes `_path` so the take log can record which config version produced a take.
    """
    def _read(path):
        cfg = json.loads(Path(path).read_text(encoding="utf-8"))
        cfg["_path"] = str(path)
        return cfg

    if override:
        return _read(override)
    for line in Path(script_path).read_text(encoding="utf-8").splitlines():
        m = CONFIG_RE.match(line)
        if m:
            return _read(Path(script_path).parent / m.group(1))
    guess = Path(str(script_path).replace("_InterviewScript_", "_TTSConfig_")).with_suffix(".json")
    if guess.exists():
        return _read(guess)
    sys.exit(f"no TTSConfig: add a `<!-- config: … -->` line, pass --config, or create {guess.name}")


def parse(path):
    """-> (slides, problems). A slide is {n, title, budget, turns:[(speaker, text)]}.

    Structure is a FAIL class of its own: anything outside a slide block that is not
    the H1 or a blank line is prose the API would read aloud.
    """
    slides, problems, cur = [], [], None
    for lineno, raw in enumerate(Path(path).read_text(encoding="utf-8").splitlines(), 1):
        line = raw.rstrip()
        m = SLIDE_RE.match(line)
        if m:
            cur = {"n": int(m.group(1)), "title": m.group(2),
                   "budget": int(m.group(3)), "turns": []}
            slides.append(cur)
            continue
        if not line.strip() or CONFIG_RE.match(line):
            continue
        if line.startswith("# ") and cur is None:
            continue                                   # the H1 before the first slide
        if line.startswith("#"):
            problems.append(f"line {lineno}: heading inside the dialogue — {line[:60]!r}")
            continue
        m = TURN_RE.match(line)
        if m and cur is not None:
            cur["turns"].append([m.group(1).strip(), m.group(2).strip()])
            continue
        if cur is not None and cur["turns"]:
            cur["turns"][-1][1] += " " + line.strip()  # wrapped continuation line
            continue
        problems.append(f"line {lineno}: text outside any slide block — {line[:60]!r}")
    return slides, problems


def words(text):
    return len(text.split())


def check(path, cfg):
    slides, fails = parse(path)
    warns, notes = [], []
    if not slides:
        return ["no `<!-- slide: N — title | words: W -->` blocks found"], [], []

    names = [s["name"] for s in cfg["speakers"]]
    expert = next(s["name"] for s in cfg["speakers"] if s["role"] == "expert")
    turns = [(sp, tx) for s in slides for sp, tx in s["turns"]]
    full = " ".join(tx for _, tx in turns)
    low = full.lower()
    total = words(full)

    # 1. speakers — the API takes exactly two, and they must be the config's two
    used = sorted({sp for sp, _ in turns})
    if set(used) - set(names):
        fails.append(f"SPEAKERS — {sorted(set(used) - set(names))} not in the TTSConfig {names}")
    if len(used) != 2:
        fails.append(f"SPEAKERS — {len(used)} speaker label(s) {used}; the API takes exactly two")
    for a, b in zip(turns, turns[1:]):
        if a[0] == b[0]:
            warns.append(f"ALTERNATION — {a[0]} takes two turns in a row: …{a[1][-40:]!r}")
            break

    # 2. the expert carries the content; the interviewer asks (interview-format rule 1)
    ew = sum(words(tx) for sp, tx in turns if sp == expert)
    share = ew / max(total, 1)
    if share < EXPERT_SHARE_MIN:
        warns.append(f"BALANCE — {expert} carries {share:.0%} of the words (rule 1 wants ≥80%)")
    else:
        notes.append(f"balance OK — {expert} carries {share:.0%}")

    # 3. per-slide budget
    for s in slides:
        w = sum(words(tx) for _, tx in s["turns"])
        if s["budget"] == 0:                            # Sources: a budget of 0 means silent
            if w:
                fails.append(f"SLIDE {s['n']} ({s['title']}) — {w} words on a 0-word slide; "
                             "nothing is spoken over Sources")
            continue
        drift = (w - s["budget"]) / s["budget"]
        line = f"slide {s['n']} ({s['title']}) {w}w vs {s['budget']}w ({drift:+.0%})"
        if abs(drift) > BUDGET_FAIL:
            fails.append("BUDGET — " + line)
        elif abs(drift) > BUDGET_WARN:
            warns.append("BUDGET — " + line)
        if not s["turns"]:
            fails.append(f"SLIDE {s['n']} ({s['title']}) — no dialogue")

    # 4. total runtime, from words at the pace the preamble briefs
    target = cfg["target_seconds"]
    wpm = cfg.get("wpm", WPM)
    est = total / wpm * 60
    budgeted = sum(s["budget"] for s in slides)
    # int(est // 60), never est/60 with :.0f — that ROUNDS, so 231.6 s printed as "4:52".
    line = (f"{total} words ({budgeted} budgeted) ≈ {int(est // 60)}:{int(est % 60):02d} "
            f"at {wpm} wpm, target {target // 60}:{target % 60:02d}")
    if abs(est - target) > target * BUDGET_FAIL:
        fails.append("RUNTIME — " + line)
    elif abs(est - target) > target * BUDGET_WARN:
        warns.append("RUNTIME — " + line)
    else:
        notes.append("runtime OK — " + line)

    # 5–7. the shared prohibition lists, applied to the page instead of the take
    hits = {p: low.count(p) for p in BANNED_PHRASES if p in low}
    if hits:
        fails.append("BANNED PHRASES — " + ", ".join(f"{k}×{v}" for k, v in hits.items()))
    fcount = sum(low.count(f) for f in FILLER)
    per100 = fcount / max(total, 1) * 100
    if per100 > FILLER_PER_100W:
        fails.append(f"FILLER — {fcount} markers, {per100:.1f} per 100 words (under {FILLER_PER_100W})")
    else:
        notes.append(f"filler OK — {fcount} markers, {per100:.1f}/100w")
    for pat, fix in TERMINOLOGY:
        if re.search(pat, full, re.I):
            fails.append(f"TERMINOLOGY — say {fix}")
    fr = [p for p in CITIZEN_FRAMING if re.search(p, low)]
    if fr:
        fails.append(f"FRAMING — {len(fr)} citizen-at-the-counter construction(s); the listener "
                     "is the official who runs these systems")

    # 8. pronunciations belong in the preamble, never spoken in the dialogue
    for say, as_ in (cfg.get("pronunciations") or {}).items():
        if as_.lower() in low:
            fails.append(f"PRONUNCIATION — {as_!r} is in the dialogue; it belongs in the "
                         f"director preamble, spelled {say!r} in the words the hosts read")
    return fails, warns, notes


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("script")
    ap.add_argument("--config", help="TTSConfig .json (default: the sibling named in the script)")
    ap.add_argument("--quiet", action="store_true", help="suppress the ok lines")
    args = ap.parse_args()

    path = Path(args.script)
    if not path.exists():
        sys.exit(2)
    fails, warns, notes = check(path, load_config(path, args.config))
    print(f"=== interview script lint — {path.name} ===\n")
    for f in fails:
        print("  FAIL  " + f)
    for w in warns:
        print("  WARN  " + w)
    if not args.quiet:
        for n in notes:
            print("  ok    " + n)
    print(f"\n{len(fails)} fail, {len(warns)} warn")
    if fails:
        print("\nFix the InterviewScript, not the audio — on this path the script is the "
              "entire determinant of the take.")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main())
