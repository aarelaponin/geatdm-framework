"""Rewrite the site's relative .md links to GitBook /pages/<id> links, for API publishing.

The rendered tree under gitbook/ is Git-Sync-shaped: links are relative file paths.
GitBook's API resolves a link against page *slugs*, which come from titles, so those
relative paths silently become plain text. Publishing through the API therefore needs
the id form. This is a publish-time transform only — gitbook/ itself stays untouched.

    python3 linkify.py <ref> [<ref> ...]   # linkified markdown to stdout
    python3 linkify.py --check             # report every link that cannot be resolved
"""
import json, os, re, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", "..", "..", "gitbook"))
PAGES = json.load(open(os.path.join(ROOT, "pages.json")))
BY_PATH = {p["path"]: p for p in PAGES}
BY_REF = {p["ref"]: p for p in PAGES}

# ](rel.md) in markdown, and href="rel.md" in the card tables
LINK = re.compile(r'(\]\(|href=")((?:\.{1,2}/|[\w./-])[^)"\s]*?\.md)(\)|")')


def linkify(ref):
    page = BY_REF[ref]
    src = open(page["file"]).read()
    here = os.path.dirname(page["path"])
    unresolved = []

    def sub(m):
        target = os.path.normpath(os.path.join(here, m.group(2)))
        hit = BY_PATH.get(target)
        if not hit:
            unresolved.append(m.group(2))
            return m.group(0)
        return f'{m.group(1)}/pages/{hit["gitbook_id"]}{m.group(3)}'

    return LINK.sub(sub, src), unresolved


if __name__ == "__main__":
    if sys.argv[1:2] == ["--check"]:
        bad = total = 0
        for p in PAGES:
            out, un = linkify(p["ref"])
            total += len(re.findall(r'/pages/', out))
            for u in un:
                bad += 1
                print(f'UNRESOLVED {p["path"]} -> {u}')
        print(f"{total} links rewritten, {bad} unresolved")
        sys.exit(1 if bad else 0)
    for ref in sys.argv[1:]:
        out, _ = linkify(ref)
        print(f"=====REF {ref}")
        print(out, end="")
