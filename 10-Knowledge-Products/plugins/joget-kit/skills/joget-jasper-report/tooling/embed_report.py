#!/usr/bin/env python3
"""Inject a .jrxml file into a JasperReportsMenu inside a Joget userview JSON.

Keeps the .jrxml as the single source of truth: edit the .jrxml, run this to
refresh the inline copy in v.json, then push v.json with your project's push step.

Usage:
    python3 embed_report.py <userview.json> <report.jrxml> [--customId ID]

If --customId is given, only the JasperReportsMenu with that customId is
updated; otherwise every JasperReportsMenu in the file is updated.
"""
import argparse, json, sys, xml.dom.minidom

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("userview"); ap.add_argument("jrxml")
    ap.add_argument("--customId", default=None)
    a = ap.parse_args()
    xml.dom.minidom.parse(a.jrxml)              # fail fast if malformed
    jrxml = open(a.jrxml, encoding="utf-8").read()
    d = json.load(open(a.userview))
    n = 0
    def walk(o):
        nonlocal n
        if isinstance(o, dict):
            if o.get("className","").endswith("JasperReportsMenu"):
                p = o["properties"]
                if a.customId is None or p.get("customId") == a.customId:
                    p["jrxml"] = jrxml; n += 1
            for v in o.values(): walk(v)
        elif isinstance(o, list):
            for x in o: walk(x)
    walk(d)
    if n == 0:
        print("no matching JasperReportsMenu found", file=sys.stderr); return 1
    json.dump(d, open(a.userview,"w"), indent=2, ensure_ascii=False)
    print(f"embedded {a.jrxml} into {n} menu(s)")
    return 0

if __name__ == "__main__":
    sys.exit(main())
