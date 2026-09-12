"""Push a rendered tree into a GitBook space as a change request. Never merges.

    export GITBOOK_TOKEN=...            # gitbook.com -> Developer -> API tokens
    python3 publish.py --space <id> --manifest pages-kp2.json --subject "..."
    python3 publish.py --space <id> --manifest pages-kp2.json --cr <id>   # fill an existing one

Two passes, because a relative .md link resolves only inside one batch (see SKILL.md):

  1. insert every page, parents first, so each one exists and has an id;
     the ids are stamped back into the manifest.
  2. update every page with linkify's output — same-space links as /pages/<id>,
     other-space links as their published URL.

Re-running is safe: a page whose title is already in the change request is updated,
not inserted again. Merging stays a human's call — this script has no merge path.
"""
import argparse, json, os, sys, time, urllib.error, urllib.request

import linkify                                   # same directory; owns ROOT and the manifests

API = "https://api.gitbook.com/v1"
MAX_CHANGES = 40                                 # the endpoint's ceiling is 50
MAX_BYTES = 400_000                              # keep a batch well inside the request limit


def call(method, path, body=None, token=None):
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(f"{API}{path}", data=data, method=method,
                                 headers={"Authorization": f"Bearer {token}",
                                          "Content-Type": "application/json"})
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=120) as r:
                return json.loads(r.read() or "{}")
        except urllib.error.HTTPError as e:
            detail = e.read().decode()[:400]
            if e.code == 429 or e.code >= 500:    # rate limit or a wobble: back off and retry
                time.sleep(2 ** attempt)
                continue
            sys.exit(f"{method} {path} -> {e.code}\n{detail}")
        except urllib.error.URLError as e:
            if attempt == 3:
                sys.exit(f"{method} {path} -> {e}")
            time.sleep(2 ** attempt)
    sys.exit(f"{method} {path} -> gave up after retries")


def tree_ids(space, cr, token):
    """(title -> page id over the whole tree, id of the space's existing root page).

    The root is the tree's first top-level page, not "the only page there is": the change
    request may already hold pages from an earlier, interrupted run."""
    rev = call("GET", f"/spaces/{space}/change-requests/{cr}/content", token=token)
    out = {}

    def walk(pages):
        for p in pages:
            out[p["title"]] = p["id"]
            walk(p.get("pages", []))
    top = rev.get("pages", [])
    walk(top)
    return out, (top[0]["id"] if top else None)


def batches(changes, docs):
    """Split into calls that respect both the change count and the payload size."""
    cur, size = [], 0
    for c, n in zip(changes, docs):
        if cur and (len(cur) >= MAX_CHANGES or size + n > MAX_BYTES):
            yield cur
            cur, size = [], 0
        cur.append(c)
        size += n
    if cur:
        yield cur


def apply(space, cr, changes, docs, token, what):
    for i, batch in enumerate(batches(changes, docs), 1):
        call("POST", f"/spaces/{space}/change-requests/{cr}/content?compat=false",
             {"changes": batch}, token)
        print(f"  {what} batch {i}: {len(batch)} pages")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--space", required=True)
    ap.add_argument("--manifest", default="pages-kp2.json")
    ap.add_argument("--cr", help="existing change request id; omit to open a new one")
    ap.add_argument("--subject", default="Content update")
    a = ap.parse_args()

    token = os.environ.get("GITBOOK_TOKEN")
    if not token:
        sys.exit("GITBOOK_TOKEN is not set")

    mpath = os.path.join(linkify.ROOT, a.manifest)
    pages = json.load(open(mpath))
    by_ref = {p["ref"]: p for p in pages}
    depth = {}
    for p in pages:                               # parents before children
        d, cur = 0, p
        while cur.get("parent"):
            cur, d = by_ref[cur["parent"]], d + 1
        depth[p["ref"]] = d
    pages.sort(key=lambda p: depth[p["ref"]])

    cr = a.cr or call("POST", f"/spaces/{a.space}/change-requests",
                      {"subject": a.subject}, token)["id"]
    print(f"change request {cr}")

    # --- pass 1: every page exists, ids stamped back into the manifest -----------------
    known, root_id = tree_ids(a.space, cr, token)
    for lvl in sorted(set(depth.values())):
        changes, sizes = [], []
        for p in [q for q in pages if depth[q["ref"]] == lvl]:
            md = open(os.path.join(linkify.ROOT, p["path"])).read()
            parent = known.get(by_ref[p["parent"]]["title"]) if p.get("parent") else None
            if p["title"] in known:
                changes.append({"operation": "update_page", "page": known[p["title"]],
                                "document": {"markdown": md}})
            elif lvl == 0 and root_id:            # the space's existing root page
                changes.append({"operation": "update_page", "page": root_id,
                                "document": {"markdown": md}})
            else:
                c = {"operation": "insert_page", "title": p["title"],
                     "document": {"markdown": md}}
                if parent:
                    c["into"] = parent
                changes.append(c)
            sizes.append(len(md))
        apply(a.space, cr, changes, sizes, token, f"depth {lvl}")
        known, _ = tree_ids(a.space, cr, token)   # pick up the ids this level just created

    missing = [p["title"] for p in pages if p["title"] not in known]
    if missing:
        sys.exit(f"{len(missing)} pages did not come back with an id: {missing[:3]}")
    for p in pages:
        p["gitbook_id"] = known[p["title"]]
    json.dump(pages, open(mpath, "w"), indent=1, ensure_ascii=False)
    print(f"{len(pages)} ids stamped into {a.manifest}")

    # --- pass 2: links, now that every target has an id -------------------------------
    import importlib
    importlib.reload(linkify)                     # re-read the manifest we just stamped
    changes, sizes = [], []
    for p in pages:
        md, un, _unpub, _ext = linkify.linkify(p["ref"], a.manifest)
        if un:
            sys.exit(f'{p["path"]}: unresolved link {un[0]} — fix before publishing')
        changes.append({"operation": "update_page", "page": p["gitbook_id"],
                        "document": {"markdown": md}})
        sizes.append(len(md))
    apply(a.space, cr, changes, sizes, token, "links")

    print(f"\ndone — {len(pages)} pages in change request {cr}, NOT merged.")
    print(f"review: https://app.gitbook.com/s/{a.space}/~/changes/{cr}/")


if __name__ == "__main__":
    main()
