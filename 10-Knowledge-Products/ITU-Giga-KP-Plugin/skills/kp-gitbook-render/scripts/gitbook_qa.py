"""QA gate for the rendered GitBook tree. Run after render.py; exits non-zero on any finding.

Every check here corresponds to a review finding that was fixed in a source file — the gate is
what stops it coming back the next time the renderer is edited.
"""
import glob, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__),
                                    "..", "..", "..", "..", "gitbook"))
LINK = re.compile(r"\[[^\]]*\]\((?!https?://|mailto:|<)([^)]+)\)|href=\"(?!https?://)([^\"]+)\"")

# Strings that must never reach a page again. Each one is a closed finding.
FORBIDDEN = {
    "kp-play-run": "B3 — names a pipeline that does not exist",
    "Discovery (Module 3)": "A4 — Discovery is Module 4, play 4.2",
    "Input needed:": "B1 — generic badge text; the Bring line carries the real input",
    "Nothing on the site is edited by hand": "C — author's note on a learner page",
    "brings the sourced input in and checks every claim": "B2 — same sentence for all fourteen skills",
    "**Published**": "A3 — status comes from the STATUS ladder, not a flat 'published'",
}
STATUS_WORDS = {"Prompts live", "Worked examples live", "Videos live", "In production"}

findings = []


def add(f, msg):
    findings.append(f"{os.path.relpath(f, ROOT)}: {msg}")


pages = sorted(glob.glob(os.path.join(ROOT, "**", "*.md"), recursive=True))
for f in pages:
    t = open(f).read()

    for bad, why in FORBIDDEN.items():
        if bad in t:
            add(f, f"forbidden string {bad!r} ({why})")

    # links resolve on disk
    d = os.path.dirname(f)
    for m in LINK.finditer(t):
        target = (m.group(1) or m.group(2)).split("#")[0]
        if target.endswith(".md") and not os.path.exists(os.path.normpath(os.path.join(d, target))):
            add(f, f"broken link -> {target}")

    # every source carries a URL (WP1 item 4)
    m = re.search(r"^## Sources\n(.*?)(?=\n## |\Z)", t, re.S | re.M)
    if m:
        for line in m.group(1).strip().split("\n"):
            if line.startswith("- ") and "http" not in line and "on this site: [" not in line:
                add(f, f"uncited source: {line[2:80]}")

    # a Bring line naming an A0 section must name the section too (B4)
    for m in re.finditer(r"\*\*Bring:\*\*[^\n]*?A0 (§\d)(?=\s*(?:,|\*\*|$))", t, re.M):
        add(f, f"A0 {m.group(1)} not expanded to its section title")

    # every "With the kit" names a skill the kit page lists
    kit = open(os.path.join(ROOT, "start-here", "ea-plays-kit.md")).read()
    known = set(re.findall(r"^\| `([a-z0-9-]+)`", kit, re.M))
    for m in re.finditer(r"\*\*With the kit:\*\* `([a-z0-9-]+)`", t):
        if m.group(1) not in known:
            add(f, f"unknown skill {m.group(1)!r} (not in the ea-plays kit page)")

# every KP home table's Status column uses only the agreed vocabulary
for kp in ("kp1", "kp2"):
    hp = os.path.join(ROOT, kp, "README.md")
    if not os.path.exists(hp):
        continue
    home = open(hp).read()
    tbl = re.search(r"^\| Module \| Topic.*?\n\n", home, re.S | re.M)
    if tbl:
        for row in tbl.group(0).strip().split("\n")[2:]:
            cell = row.rstrip("|").rsplit("|", 1)[-1].strip()
            if cell and cell not in STATUS_WORDS:
                findings.append(f"{kp}/README.md: status {cell!r} outside {sorted(STATUS_WORDS)}")

# KP2: no page may still name the retired Module 6 as a live module
for f in pages:
    if "/kp2/" not in f:
        continue
    t = open(f).read()
    if re.search(r"\bModule 6\b(?! was retired| in the v0\.1| was retired)", t) and "retired" not in t:
        add(f, "names Module 6 as if it still existed (retired 12 Sep 2026)")

for x in findings:
    print("FAIL", x)
print(f"{len(pages)} pages checked, {len(findings)} findings")
sys.exit(1 if findings else 0)
