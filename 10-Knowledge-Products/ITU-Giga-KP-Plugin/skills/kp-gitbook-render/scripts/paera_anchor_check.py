"""Cross-check every PAERA anchor the GitBook cites against the plugin's anchor map.

The map (itu-giga-kp-bundle/references/paera-anchor-map.md) is a concept lookup for the
sections the KPs use, not PAERA's full table of contents — so an anchor missing from it is
"unverified", not "wrong". Module 1's anchors live in module1.py; Modules 2-5's live in the
signed .js scripts, where a correction is a transmittal item, never a silent edit.
"""
import glob, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", "..", "gitbook"))
MAP = os.path.abspath(os.path.join(HERE, "..", "..", "itu-giga-kp-bundle",
                                   "references", "paera-anchor-map.md"))

known = set(re.findall(r"§(\d+(?:\.\d+)*)", open(MAP).read())) | {"Annex 2", "Annex A1.2", "Annex A1.3"}
used = {}
for f in sorted(glob.glob(os.path.join(ROOT, "kp1", "**", "*.md"), recursive=True)):
    m = re.search(r"\| \*\*PAERA anchor\*\* \| (.+?) \|", open(f).read())
    if m:
        pid = os.path.basename(f)[:-3]
        for a, annex in re.findall(r"§(\d+(?:\.\d+)*)|\b(Annex \w+(?:\.\d+)?)", m.group(1)):
            used.setdefault(a or annex, set()).add(pid)

unverified = {a: sorted(p) for a, p in used.items() if a not in known}
for a, pages in sorted(unverified.items()):
    print(f"UNVERIFIED §{a} — cited by {', '.join(pages)}; not in the anchor map. "
          f"Check against the PAERA v1.0 PDF; a wrong anchor in a Module 2-5 script is a "
          f"transmittal item.")
print(f"{len(used)} anchors cited, {len(unverified)} unverified against the map")
sys.exit(0)          # advisory: the map is not exhaustive, so this never fails the build
