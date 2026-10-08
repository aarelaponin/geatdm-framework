#!/usr/bin/env python3
"""Pre-flight cross-artefact validation for a Joget generation batch.

Usage:
    preflight_validate.py <generated-dir> [--deployed-forms FILE] [--deployed-datalists FILE]

Walks <generated-dir> for *.json artefacts, classifies each as form / datalist /
userview, collects defined ids, recursively collects referenced ids
(formDefId / addFormId / editFormId / datalistId, case-insensitive), and reports:
  - unresolved form references
  - unresolved datalist references
  - duplicate definition ids
  - form id / tableName collisions
Exit code 0 = clean, 1 = findings, 2 = usage/parse error.
"""
import json, sys, argparse
from pathlib import Path
from collections import defaultdict

FORM_REF_KEYS = {"formdefid", "addformid", "editformid"}
LIST_REF_KEYS = {"datalistid"}


def classify(doc):
    """Best-effort classification of a Joget definition JSON."""
    cn = str(doc.get("className", ""))
    props = doc.get("properties", {}) if isinstance(doc.get("properties"), dict) else {}
    if "userview" in cn.lower() or "setting" in doc and "categories" in doc:
        return "userview"
    if "datalist" in cn.lower() or ("binder" in doc and "columns" in doc):
        return "datalist"
    if "Form" in cn or "tableName" in props:
        return "form"
    # fallbacks
    if "categories" in doc:
        return "userview"
    if "columns" in doc:
        return "datalist"
    return "form"


def walk_refs(node, found):
    if isinstance(node, dict):
        for k, v in node.items():
            kl = k.lower()
            if isinstance(v, str) and v.strip():
                if kl in FORM_REF_KEYS:
                    found["form"].add(v.strip())
                elif kl in LIST_REF_KEYS:
                    found["datalist"].add(v.strip())
            walk_refs(v, found)
    elif isinstance(node, list):
        for item in node:
            walk_refs(item, found)


def load_lines(path):
    return {l.strip() for l in Path(path).read_text().splitlines() if l.strip()} if path else set()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("gendir")
    ap.add_argument("--deployed-forms")
    ap.add_argument("--deployed-datalists")
    args = ap.parse_args()

    gendir = Path(args.gendir)
    if not gendir.is_dir():
        print(f"ERROR: {gendir} is not a directory"); sys.exit(2)

    defined = {"form": {}, "datalist": {}, "userview": {}}   # id -> file
    tablenames = defaultdict(list)                            # tableName -> [form ids]
    refs = {"form": set(), "datalist": set()}
    dupes, parse_errors = [], []

    for f in sorted(gendir.rglob("*.json")):
        try:
            doc = json.loads(f.read_text())
        except Exception as e:
            parse_errors.append(f"{f}: {e}"); continue
        kind = classify(doc)
        props = doc.get("properties", {}) if isinstance(doc.get("properties"), dict) else {}
        def_id = props.get("id") or doc.get("id") or f.stem
        if def_id in defined[kind]:
            dupes.append(f"{kind} id '{def_id}' defined in both {defined[kind][def_id]} and {f}")
        defined[kind][def_id] = str(f)
        if kind == "form":
            tn = props.get("tableName")
            if tn:
                tablenames[tn].append(def_id)
        walk_refs(doc, refs)

    known_forms = set(defined["form"]) | load_lines(args.deployed_forms)
    known_lists = set(defined["datalist"]) | load_lines(args.deployed_datalists)

    missing_forms = sorted(r for r in refs["form"] if r not in known_forms)
    missing_lists = sorted(r for r in refs["datalist"] if r not in known_lists)
    tn_collisions = {tn: ids for tn, ids in tablenames.items() if len(set(ids)) > 1}

    print(f"Scanned: {sum(len(v) for v in defined.values())} definitions "
          f"({len(defined['form'])} forms, {len(defined['datalist'])} datalists, "
          f"{len(defined['userview'])} userviews)")
    ok = True
    for label, items in [("PARSE ERRORS", parse_errors), ("DUPLICATE IDS", dupes),
                         ("UNRESOLVED FORM REFERENCES", missing_forms),
                         ("UNRESOLVED DATALIST REFERENCES", missing_lists)]:
        if items:
            ok = False
            print(f"\n{label}:")
            for i in items:
                print(f"  - {i}")
    if tn_collisions:
        ok = False
        print("\nTABLENAME COLLISIONS:")
        for tn, ids in tn_collisions.items():
            print(f"  - '{tn}' used by forms {sorted(set(ids))}")
    print("\nPRE-FLIGHT:", "CLEAN" if ok else "FAILED")
    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
