"""Rewrite the site's relative .md links for API publishing.

The rendered tree under gitbook/ is Git-Sync-shaped: links are relative file paths.
GitBook's API resolves a link against page *slugs*, which come from titles, so those
relative paths silently become plain text. Publishing through the API therefore needs
a resolved form. This is a publish-time transform only — gitbook/ itself stays untouched.

Two forms, because KP1 and KP2 are separate spaces on one site:

  same space   ->  /pages/<gitbook_id>
  other space  ->  the absolute published URL

A link has no way to reach another space by page id — GitBook serves those ids only
inside their own space (a /~/pages/<id> URL 404s), so the cross-space form is the
public slug path. Slugs come from titles, and every title here is generated, so the
path is derived from the manifest's title chain rather than stored and left to rot.

    python3 linkify.py <ref> [<ref> ...]   # linkified markdown to stdout
    python3 linkify.py --check [--http]    # report every link that cannot be resolved
                                           # --http also GETs each cross-space URL
"""
import json, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", "gitbook"))
SITE = "https://experience-digital-transform.gitbook.io/experience-digital-transformation"

# manifest -> the space's published base on the site. A space's URL segment is its own
# slug, and its root page adds one more segment, which is why the two look redundant.
SPACES = [
    ("pages.json",     f"{SITE}/government-enterprise-architecture-gea"),
    ("pages-kp2.json", f"{SITE}/government-interoperability-framework-gif"),
]

PAGES, SPACE_OF, BASE = [], {}, {}
for _mf, _base in SPACES:
    _p = os.path.join(ROOT, _mf)
    if not os.path.exists(_p):
        continue
    BASE[_mf] = _base
    for _page in json.load(open(_p)):
        _page["manifest"] = _mf
        PAGES.append(_page)
        SPACE_OF[_page["path"]] = _mf

BY_PATH = {p["path"]: p for p in PAGES}
BY_REF = {(p["manifest"], p["ref"]): p for p in PAGES}

# ](rel.md) in markdown, and href="rel.md" in the card tables
LINK = re.compile(r'(\]\(|href=")((?:\.{1,2}/|[\w./-])[^)"\s]*?\.md)(\)|")')


def slug(title):
    """GitBook's page slug, as observed on the published site: lowercase, '&' spelled out,
    apostrophes dropped rather than hyphenated, every other run of punctuation a hyphen.
    Dots survive, which is what keeps '1.1-...' readable."""
    s = title.lower().replace("&", " and ").replace("'", "").replace("’", "")
    s = re.sub(r"[^a-z0-9.]+", "-", s)
    return s.strip("-")


def url_of(page):
    """Absolute published URL: the space base, then the slug of every title from the
    manifest's root page down to this one."""
    parts, cur, seen = [], page, set()
    while cur is not None:
        if cur["ref"] in seen:                       # a cycle in the manifest
            raise ValueError(f'parent cycle at {cur["ref"]}')
        seen.add(cur["ref"])
        parts.append(slug(cur["title"]))
        cur = BY_REF.get((page["manifest"], cur["parent"])) if cur.get("parent") else None
    return "/".join([BASE[page["manifest"]]] + parts[::-1])


def linkify(ref, manifest="pages.json"):
    page = BY_REF[(manifest, ref)]
    # every path in the manifest is relative to ROOT, so the manifest travels between machines.
    src = open(os.path.join(ROOT, page["path"])).read()
    here = os.path.dirname(page["path"])
    unresolved, unpublished, external = [], [], []

    def sub(m):
        target = os.path.normpath(os.path.join(here, m.group(2)))
        hit = BY_PATH.get(target)
        if not hit:
            unresolved.append(m.group(2))
            return m.group(0)
        if hit["manifest"] != page["manifest"]:      # cross-space: only a URL reaches it
            u = url_of(hit)
            external.append(u)
            return f'{m.group(1)}{u}{m.group(3)}'
        if "gitbook_id" not in hit:                  # same space, not published yet
            unpublished.append(m.group(2))
            return m.group(0)
        return f'{m.group(1)}/pages/{hit["gitbook_id"]}{m.group(3)}'

    return LINK.sub(sub, src), unresolved, unpublished, external


if __name__ == "__main__":
    if sys.argv[1:2] == ["--check"]:
        http = "--http" in sys.argv
        bad = total = cross = waiting = 0
        checked = {}
        for p in PAGES:
            out, un, unpub, ext = linkify(p["ref"], p["manifest"])
            total += len(re.findall(r"/pages/", out))
            cross += len(ext)
            waiting += len(unpub)
            for u in un:
                bad += 1
                print(f'UNRESOLVED {p["path"]} -> {u}')
            if http:
                # curl, not urllib: it uses the system trust store, so this works on a
                # stock macOS python that has no CA bundle of its own.
                import subprocess
                for u in ext:
                    if u in checked:
                        continue
                    checked[u] = subprocess.run(
                        ["curl", "-sSL", "-o", os.devnull, "-w", "%{http_code}", "--max-time", "20", u],
                        capture_output=True, text=True).stdout.strip()
                    if checked[u] != "200":
                        bad += 1
                        print(f"DEAD {checked[u]} {u}")
        print(f"{total} same-space links rewritten, {cross} cross-space URLs"
              f"{f' ({len(checked)} distinct, fetched)' if http else ''}, {bad} unresolved")
        if waiting:
            print(f"{waiting} links wait on a space that has no page ids yet "
                  f"(first publish stamps them) — not a failure")
        sys.exit(1 if bad else 0)
    for ref in sys.argv[1:]:
        out, _, _, _ = linkify(ref)
        print(f"=====REF {ref}")
        print(out, end="")
