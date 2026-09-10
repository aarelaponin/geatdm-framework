"""The GitBook and the ea-plays kit keep two Progressa wordings on purpose (structure-fix plan D7):
the kit's is Simplified Technical English for a skill to read, the site's is for a learner. Two
voices are acceptable; two sets of facts are not. This checks the facts only.

Keep the list short, and add to it whenever the fixture gains a number.
"""
import os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
KIT = os.environ.get("EA_PLAYS_KIT", os.path.expanduser("~/Documents/Dev/ea-plays-kit"))
KIT_FIXTURE = os.path.join(KIT, "tests", "progressa.md")

# Facts that must appear in both. Acronyms, the numbers, and the PLR's status word.
FACTS = ["MoEYS", "PNEA", "PLR", "PNIA", "PDGA", "Linkup", "PayPro",
         "16.8 million", "78%", "71%", "2018", "2024", "2025",
         "6.5m", "2.1m", "4.8m", "3.2m", "2.9m"]


def load(path, names):
    ns = {}
    exec(compile(open(path).read(), path, "exec"), ns)
    return "\n".join(str(ns[n]) for n in names if n in ns)


def main():
    site = load(os.path.join(HERE, "fixture.py"),
                ["PROGRESSA_LANDSCAPE", "PROGRESSA_PROGRAMMES", "PROGRESSA_ROLES",
                 "PROGRESSA_INITIATIVES", "PROGRESSA_OPMODEL", "PROGRESSA_CHARACTERISTICS",
                 "PROGRESSA_LEGAL"])
    render = open(os.path.join(HERE, "render.py")).read()
    site += "\n" + render[render.find("def render_progressa"):render.find("def render_videos")]

    if not os.path.exists(KIT_FIXTURE):
        print(f"SKIP: no kit fixture at {KIT_FIXTURE} (set EA_PLAYS_KIT)")
        return 0
    kit = open(KIT_FIXTURE).read()

    bad = []
    for fact in FACTS:
        in_site, in_kit = fact in site, fact in kit
        if in_site != in_kit:
            bad.append(f"{fact!r}: site={in_site} kit={in_kit}")

    # the PLR must be planned, not operating, in both (review A5 / decision D2)
    for name, text in (("site", site), ("kit", kit)):
        window = " ".join(re.findall(r"[^.]*PLR[^.]*\.", text))
        if not re.search(r"planned|not started|none", window, re.I):
            bad.append(f"{name}: PLR is not described as planned/not started")

    for b in bad:
        print("FAIL", b)
    print(f"{len(FACTS)} facts checked, {len(bad)} mismatches")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
