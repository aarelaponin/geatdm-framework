#!/usr/bin/env python3
"""Roll a take, transcribe it, audit it — and re-roll until it passes or the budget runs out.

Steps 4, 5 and 5b of the video track are three commands that are always run in the same order,
and the audit's own verdict ("two or more FAILs: regenerate rather than patch") decides whether
to run them again. Driving that by hand is 200 commands for one KP.

The judgement is untouched: this stops after --tries and reports, because the doctrine is that a
failure surviving three re-rolls is a brief problem, and a brief problem needs a person.

    take_until_pass.py <lang-dir> 2.1 [--tries 3]
    take_until_pass.py <lang-dir> --all [--from 2.4]
"""
import argparse
import re
import subprocess
import sys
import time
from pathlib import Path

SKILLS = Path(__file__).resolve().parents[2]
NLM = Path.home() / ".venvs/nlm/bin/python"
KP = Path.home() / ".venvs/kp/bin/python"
PAUSE_S = 30

# The format announces itself, and no brief revision has ever stopped it — across Modules 1-4 the
# phrase appears in almost every take despite §3 of the brief and an explicit line in the prompt.
# trim_outro removes it whenever it is reachable; where it is not, re-rolling is a coin flip that
# cost Module 1 sixteen takes on one subtopic. So the loop no longer re-rolls for a show-open
# alone. It is NOT silently forgiven: srt_drift_check still reports it, and attempt() returns it
# as a residue the caller must print, because a take that keeps it needs a hand-trim before it
# ships. Every other banned phrase ("broken", "chaos", "our sources", …) still blocks.
SHOW_OPEN_PHRASES = {"deep dive", "welcome to", "unpacking", "today we're unpacking",
                     "here's where it gets"}
RUNTIME_RE = re.compile(r"total runtime.*?(\d+)\s*minutes?(?:\s*(\d+)\s*seconds?)?", re.I)
BRIEF_RE = re.compile(r"^KP\d+_M\d+_(\d+\.\d+)_AudioBrief_v0\.(\d+)\.md$")


def run(*cmd):
    p = subprocess.run([str(c) for c in cmd], capture_output=True, text=True)
    return p.returncode, p.stdout + p.stderr


def newest(d, pat):
    best = None
    for f in d.glob(pat):
        v = int(re.search(r"_v0\.(\d+)\.", f.name).group(1))
        if best is None or v > best[0]:
            best = (v, f)
    return best[1] if best else None


def target_seconds(brief):
    m = RUNTIME_RE.search(brief.read_text(encoding="utf-8"))
    return int(m.group(1)) * 60 + int(m.group(2) or 0) if m else 240


def deck_for(lang, sub):
    d = newest(lang / "decks", f"*_{sub}_Deck_v0.*.pptx")
    if not d:
        sys.exit(f"no deck for {sub}")
    return d


def subtopics(lang):
    out = {}
    for f in (lang / "notebooklm").glob("*_AudioBrief_v0.*.md"):
        m = BRIEF_RE.match(f.name)
        if m and (m.group(1) not in out or int(m.group(2)) > out[m.group(1)][1]):
            out[m.group(1)] = (f, int(m.group(2)))
    return {k: v[0] for k, v in sorted(out.items(), key=lambda kv: float(kv[0]))}


def attempt(lang, sub, target, deck):
    """One roll: take, transcribe, trim, audit — and audit the TRIMMED take, not the raw one.

    Every take this generator produces opens by announcing itself and closes by turning to the
    listener, and five brief revisions on Module 1 did not move either. Both are cut in the build
    by trim_outro.py, so the raw take fails checks the deliverable passes. Gating on the raw take
    would re-roll forever against a property of the generator.
    """
    rc, out = run(NLM, SKILLS / "kp-notebooklm-audio/scripts/nlm_take.py", lang, sub)
    if rc != 0:
        return rc, "take failed:\n" + out[-800:]
    raw = newest(lang / "audio", f"*_{sub}_Audio_v0.*.m4a")
    rc, out = run(KP, SKILLS / "kp-scribe-transcribe/scripts/transcribe.py", raw)
    if rc != 0:
        return 1, "transcribe failed:\n" + out[-800:]
    rc, out = run("python3", SKILLS / "kp-slidecast/scripts/trim_outro.py",
                  raw.with_suffix(".srt"), "--deck", deck)
    if rc != 0:
        return 1, "trim failed:\n" + out[-800:]
    take = newest(lang / "audio", f"*_{sub}_Audio_v0.*.m4a")
    rc, out = run("python3", SKILLS / "kp-audio-brief/scripts/srt_drift_check.py",
                  take.with_suffix(".srt"), "--target", target, "--tolerance", 45)
    fails, residue = [], []
    for ln in (l.strip() for l in out.splitlines()):
        if not ln.startswith("FAIL"):
            continue
        if "BANNED PHRASES" in ln:
            phrases = [x.strip().rsplit("\u00d7", 1)[0].strip()
                       for x in ln.split("—", 1)[1].split(",")]
            hard = [x for x in phrases if x not in SHOW_OPEN_PHRASES]
            (fails if hard else residue).append(
                ln if hard else f"residue (not blocking) — {', '.join(phrases)}")
        else:
            fails.append(ln)
    _, cov = run("python3", SKILLS / "kp-audio-brief/scripts/coverage_check.py", deck,
                 take.with_suffix(".srt"))
    # MISS only. coverage_check's own docstring says THIN "is a prompt to read the transcript,
    # not a verdict" — it matches vocabulary, so a segment the hosts covered thoroughly in their
    # own words scores low. Re-rolling on THIN spends takes on nothing.
    thin = [ln.strip() for ln in cov.splitlines() if ln.strip().startswith("MISS")]
    return bool(fails or thin), (f"{raw.name} -> {take.name}\n    "
                                 + "\n    ".join(fails + thin + residue or ["clean"]))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("lang")
    ap.add_argument("subtopic", nargs="?")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--from", dest="start")
    ap.add_argument("--tries", type=int, default=3)
    a = ap.parse_args()

    lang = Path(a.lang)
    subs = subtopics(lang)
    if not a.all:
        subs = {a.subtopic: subs[a.subtopic]}
    elif a.start:
        subs = {k: v for k, v in subs.items() if float(k) >= float(a.start)}

    unresolved = []
    for sub, brief in subs.items():
        target = target_seconds(brief)
        for i in range(1, a.tries + 1):
            rc, note = attempt(lang, sub, target, deck_for(lang, sub))
            print(f"{sub} try {i}/{a.tries} (target {target}s): {note}", flush=True)
            if rc == 0:
                break
            time.sleep(PAUSE_S)   # same courtesy the batch runner shows an unofficial endpoint
        else:
            unresolved.append(sub)
    print("\nunresolved (fix the brief, not the prompt): "
          + (", ".join(unresolved) if unresolved else "none"))
    return 1 if unresolved else 0


if __name__ == "__main__":
    sys.exit(main())
