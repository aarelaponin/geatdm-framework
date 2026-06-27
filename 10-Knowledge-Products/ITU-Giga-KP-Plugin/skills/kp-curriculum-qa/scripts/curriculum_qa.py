#!/usr/bin/env python3
"""
curriculum_qa.py — the deterministic half of the curriculum / cross-KP coherence gate.

Operates over the generated Markdown corpus of a KP (intra-KP) or several KPs
(inter-KP). It is the level ABOVE the per-module gates (kp-bundle-qa,
kp-citation-verify, kp-solution-verify): instead of checking one module, it asks
whether a KP coheres as a curriculum and whether the KPs cohere as a programme.

It runs four deterministic checks and prints a report:
  1. Competency coverage — the gap finder. Decompose the KP's learning outcome
     into competencies, each with signal terms; flag competencies the corpus
     barely covers. (This is what caught the KP1 'no target architecture' gap.)
  2. Terminology consistency — defined term-variant groups; flag drift.
  3. Citation consistency — PAERA section usage against the canonical-heading
     rules and the cite-to-EIF/NIIS-not-PAERA rules.
  4. Forbidden strings + Progressa-canon — the cross-corpus leak/consistency scan.

The qualitative half (a fresh-eyes subagent reading the rendered modules) is run
separately — see the skill. Pure standard library.

Usage:
  python3 curriculum_qa.py --matrix kp2 --dir <KP2-GIF dir>
  python3 curriculum_qa.py --matrix kp1-kp2 --dir <KP1-GEA> --dir <KP2-GIF>
  python3 curriculum_qa.py --matrix kp1 --files a.md b.md ...

Exit 0 = pass; non-zero = hard findings (an absent core competency, a forbidden
string, or a citation-rule violation). Thin coverage and gap-candidates are warnings.
"""
import argparse
import glob
import os
import re
import sys

# ---------------------------------------------------------------- matrices
# Each competency: signals (case-insensitive substrings), min (expected hits),
# and optional gap_candidate=True (absence is a WARN to consider, not a hard fail).
MATRICES = {
    "kp1": {
        "label": "KP1 — Government Enterprise Architecture",
        "outcome": "build a full national EA with a target architecture and a roadmap",
        "competencies": {
            "Why EA / the problem": {"signals": ["fragmentation", "duplicate", "silo", "rebuild"], "min": 4},
            "What EA is (BDAT)": {"signals": ["bdat", "business", "data domain", "application", "technology", "four part"], "min": 6},
            "PAERA anchoring": {"signals": ["paera", "metamodel", "principles", "taxonomy"], "min": 6},
            "Discover / assess current state": {"signals": ["discover", "assess", "current state", "as-is", "maturity", "gap analysis"], "min": 6},
            "Design target architecture": {"signals": ["target architecture", "to-be", "target state", "integration map"], "min": 4},
            "Roadmap / sequencing": {"signals": ["roadmap", "sequence", "wave", "investment plan"], "min": 4},
            "Lifecycle / governance": {"signals": ["lifecycle", "ea board", "sign-off", "govern"], "min": 6},
            "Re-use / whole-of-government": {"signals": ["re-use", "reuse", "whole-of-government", "building block"], "min": 4},
        },
    },
    "kp2": {
        "label": "KP2 — Government Interoperability Framework",
        "outcome": "build a full national interoperability framework ending in a running once-only exchange",
        "competencies": {
            "The four layers": {"signals": ["four layer", "four-layer", "technical layer", "semantic layer", "organisational layer", "legal layer"], "min": 6},
            "Legal / decree": {"signals": ["decree", "mandate", "lawful basis", "draft article", "once-only obligation"], "min": 6},
            "Governance": {"signals": ["operating authority", "raci", "three tier", "member obligation", "working group", "steering committee"], "min": 6},
            "Semantic layer": {"signals": ["semantic map", "code list", "identifier", "vocabulary", "oneroster", "ceds"], "min": 5},
            "Technical / standards": {"signals": ["openapi", "x-road", "standards portfolio", "service contract", "service description", "trust zone", "mtls"], "min": 6},
            "Implementation / onboarding": {"signals": ["four-phase", "four phase", "onboarding", "member requirements", "service-level", "subsystem", "access-control"], "min": 6},
            "Demonstration / once-only": {"signals": ["once-only", "federation", "cross-server", "acceptance check", "linkup"], "min": 6},
            "Operations": {"signals": ["monitoring", "anomaly", "change control", "production"], "min": 4},
            "Sector portability": {"signals": ["sector-portable", "sector portab", "next sector"], "min": 3},
            "AI plays": {"signals": ["gif-decree-draft", "gif-semantic-map", "gif-openapi-gen", "bb-config-gen"], "min": 4},
            "Assess existing landscape (baseline)": {"signals": ["existing systems", "current landscape", "baseline", "point-to-point", "legacy"], "min": 2, "gap_candidate": True},
            "Migrate existing integrations": {"signals": ["migrat", "retire the", "legacy link", "replace the point"], "min": 1, "gap_candidate": True},
            "Independent testing / IV&V": {"signals": ["iv&v", "independent verification", "test plan", "negative check"], "min": 1, "gap_candidate": True},
        },
    },
    "kp1-kp2": {
        "label": "KP1 + KP2 — the plan-to-build seam",
        "outcome": "KP1 (plan) and KP2 (build the interoperability track) cohere as one programme",
        "competencies": {
            "Hand-off: integration map -> use-case catalogue": {"signals": ["integration map", "use-case catalogue", "use case catalogue"], "min": 3},
            "Shared concept: PAERA": {"signals": ["paera"], "min": 6},
            "Shared concept: once-only": {"signals": ["once-only"], "min": 6},
            "Shared concept: four-layer interop model": {"signals": ["four layer", "four-layer"], "min": 3},
            "Shared concept: whole-of-government re-use": {"signals": ["whole-of-government", "re-use", "reuse"], "min": 4},
            "Shared concept: building blocks": {"signals": ["building block"], "min": 3},
            "Lifecycle vs four-phase (must be distinguished)": {"signals": ["lifecycle", "four-phase", "four phase"], "min": 3},
        },
    },
}

# term groups: 'drift' forms are the genuinely wrong spellings, matched
# CASE-SENSITIVELY so the correctly-cased preferred form is never flagged.
TERM_GROUPS = [
    {"preferred": "X-Road", "drift": ["x-road", "xroad", "x road", "X-road", "XRoad", "X-ROAD"]},
    {"preferred": "once-only", "drift": ["once only"]},
    {"preferred": "whole-of-government", "drift": ["whole of government"]},
    {"preferred": "access-control list", "drift": ["access control list"]},
    {"preferred": "OpenAPI", "drift": ["openapi ", "Open API", "open-api"]},
]

# citation rules: (regex, message) — a match is a hard finding.
# Scoped to CITATION-LABEL forms (a §-reference adjacent to the wrong heading word),
# never bare prose like "the ten architectural principles" which is legitimate.
CITATION_RULES = [
    (r"§\s*5\.2[^.\n]{0,8}architectural", "PAERA §5.2 citation should read 'Principles', not 'Architectural principles'"),
    (r"architectural principles[’'\")\]\s]{0,3}[(\[]?\s*§\s*5\.2", "PAERA §5.2 citation should read 'Principles', not 'Architectural principles'"),
    (r"§\s*4\.5[^.\n]{0,8}organisational communication", "PAERA §4.5 is 'Digital Co-creation', not 'Organisational Communication'"),
    (r"four[- ]layer[^.\n]{0,90}\bPAERA\b", "the four-layer interoperability model must be cited to EIF/NIIS, not PAERA"),
    (r"\bPAERA\b[^.\n]{0,40}four[- ]layer", "the four-layer interoperability model must be cited to EIF/NIIS, not PAERA"),
]
# a match inside a correction/explanatory note is not a live citation — skip it
SKIP_CONTEXT = re.compile(r"corrected|but the published|there is no|do not|never cite|incorrect|not ['\"]", re.I)

FORBIDDEN = [r"GEATDM", r"TK-IO-", r"TK-DPI-", r"\bIMF\b", r"Tax Administration Reference"]

PROGRESSA = ["MoEYS", "PNEA", "PLR", "PNIA", "PDGA", "PEMIS", "PDCA", "PayPro"]


def load_corpus(files):
    corpus = {}
    for f in files:
        try:
            with open(f, encoding="utf-8") as fh:
                corpus[os.path.basename(f)] = fh.read()
        except OSError as e:
            print(f"  (could not read {f}: {e})")
    return corpus


def count(text, needle):
    return text.lower().count(needle.lower())


def competency_report(matrix, corpus):
    fails, warns = [], []
    print("=" * 70)
    print(f"1. COMPETENCY COVERAGE — {matrix['label']}")
    print(f"   outcome: {matrix['outcome']}")
    print("=" * 70)
    full = "\n".join(corpus.values())
    for comp, spec in matrix["competencies"].items():
        total = sum(count(full, s) for s in spec["signals"])
        minimum = spec.get("min", 3)
        gap_cand = spec.get("gap_candidate", False)
        if total == 0:
            status = "ABSENT"
        elif total < minimum:
            status = "THIN"
        else:
            status = "ok"
        tag = "  "
        if status == "ABSENT" and not gap_cand:
            tag = "FAIL"; fails.append(f"competency ABSENT: {comp}")
        elif status in ("ABSENT", "THIN"):
            tag = "WARN"
            label = "gap-candidate uncovered" if gap_cand else "thin coverage"
            warns.append(f"{label}: {comp} ({total} hits, expected >= {minimum})")
        flag = " [gap-candidate]" if gap_cand else ""
        print(f"  {tag}  {status:7} {total:4} hits  {comp}{flag}")
    return fails, warns


def terminology_report(corpus):
    print("\n" + "=" * 70)
    print("2. TERMINOLOGY CONSISTENCY")
    print("=" * 70)
    warns = []
    full = "\n".join(corpus.values())  # case preserved
    for g in TERM_GROUPS:
        drift = {v: full.count(v) for v in g["drift"]}  # case-SENSITIVE
        hits = {v: c for v, c in drift.items() if c > 0}
        if hits:
            warns.append(f"term drift on '{g['preferred']}': " +
                         ", ".join(f"'{v}'x{c}" for v, c in hits.items()))
            print(f"  WARN  '{g['preferred']}' — drift: " +
                  ", ".join(f"'{v}'x{c}" for v, c in hits.items()))
        else:
            print(f"  ok    '{g['preferred']}' — consistent")
    return warns


def citation_report(corpus):
    print("\n" + "=" * 70)
    print("3. CITATION CONSISTENCY (PAERA canonical headings + EIF/NIIS rule)")
    print("=" * 70)
    fails = []
    for fn, text in corpus.items():
        low = text.lower()
        for rx, msg in CITATION_RULES:
            for m in re.finditer(rx, low):
                ctx = text[max(0, m.start() - 70): m.start() + 70]
                if SKIP_CONTEXT.search(ctx):
                    continue  # explanatory / correction note, not a live citation
                frag = ctx.replace("\n", " ").strip()
                fails.append(f"{fn}: {msg}")
                print(f"  FAIL  {fn}: {msg}\n        …{frag}…")
    if not fails:
        print("  ok    no citation-rule violations")
    return fails


def leak_and_canon_report(corpus):
    print("\n" + "=" * 70)
    print("4. FORBIDDEN STRINGS + PROGRESSA CANON")
    print("=" * 70)
    fails, warns = [], []
    for fn, text in corpus.items():
        for rx in FORBIDDEN:
            if re.search(rx, text):
                # ignore the explicit 'do not cite ...' rule statements
                for m in re.finditer(rx, text):
                    frag = text[max(0, m.start() - 30): m.start() + 30].replace("\n", " ")
                    if re.search(r"do not|never cite|forbidden|not as if public|no GEATDM", frag, re.I):
                        continue
                    fails.append(f"{fn}: forbidden '{rx}'")
                    print(f"  FAIL  {fn}: forbidden /{rx}/ — …{frag}…")
    full = "\n".join(corpus.values())
    canon = {p: count(full, p) for p in PROGRESSA}
    print("  Progressa tokens: " + ", ".join(f"{p}x{c}" for p, c in canon.items() if c))
    if canon.get("PDCA", 0):
        warns.append("PDCA appears in the corpus — confirm it is NOT used as one of the four KP2 "
                     "Security-Server members (canon: MoEYS/PEMIS, PNEA, PLR, PNIA).")
        print("  WARN  PDCA present — confirm it is the KP4 credentials authority, not a KP2 demo member.")
    if not fails:
        print("  ok    no forbidden strings leaked")
    return fails, warns


def main():
    ap = argparse.ArgumentParser(description="Curriculum / cross-KP coherence gate.")
    ap.add_argument("--matrix", required=True, choices=sorted(MATRICES.keys()))
    ap.add_argument("--dir", action="append", default=[], help="a KP folder of .md bundles (repeatable)")
    ap.add_argument("--files", nargs="*", default=[])
    args = ap.parse_args()

    files = list(args.files)
    for d in args.dir:
        for f in sorted(glob.glob(os.path.join(d, "*.md"))):
            base = os.path.basename(f).lower()
            if base == "readme.md" or "_qa_" in base or "qa_report" in base:
                continue
            files.append(f)
    if not files:
        sys.exit("no .md files found (use --dir <folder> or --files a.md b.md)")

    corpus = load_corpus(files)
    print(f"Corpus: {len(corpus)} module file(s)\n  " + "\n  ".join(sorted(corpus.keys())) + "\n")

    fails, warns = [], []
    f1, w1 = competency_report(MATRICES[args.matrix], corpus); fails += f1; warns += w1
    w2 = terminology_report(corpus); warns += w2
    f3 = citation_report(corpus); fails += f3
    f4, w4 = leak_and_canon_report(corpus); fails += f4; warns += w4

    print("\n" + "=" * 70)
    print("SUMMARY")
    print("=" * 70)
    print(f"  hard findings: {len(fails)}")
    print(f"  warnings:      {len(warns)}")
    if warns:
        print("\n  WARNINGS (human judgement — especially the gap-candidates):")
        for w in warns:
            print(f"    - {w}")
    print("\n  Next: run the fresh-eyes subagent pass (see the skill) for the qualitative half,")
    print("  then consolidate. Fix decisive gaps UPSTREAM in the build scripts and re-render.")
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
