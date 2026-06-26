#!/usr/bin/env python3
"""
check_pack.py — static completeness/well-formedness check for an implementation-KP build pack.

Reads <pack_dir>/manifest.yaml and verifies the pack is structurally complete: every
module resolves to an existing config + prompt + acceptance file; the scripts, runbook
and README are present; no config is still a .placeholder and no [confirm: ...] is left
unresolved. This is the STATIC half of kp-solution-verify; the live "does it run" half
runs on the stack (joget-deploy / joget-db-inspect / X-Road test calls).

Pure standard library — no PyYAML needed (a minimal parser handles the manifest subset
that scaffold_build_pack.py emits).

Usage:
  python3 check_pack.py <pack_dir> [--ready]

  --ready   ship gate: also FAIL on any .placeholder config or unresolved [confirm:]
            (without it, those are warnings, since they are expected mid-build).

Exit 0 = pass; non-zero = hard failures found.
"""
import os
import re
import sys


def load_manifest(path):
    """Parse the constrained manifest subset: top-level scalars, a building_blocks
    list of scalars, and a modules list of mappings."""
    data = {"building_blocks": [], "modules": []}
    if not os.path.exists(path):
        return None
    with open(path, encoding="utf-8") as f:
        lines = f.readlines()
    section = None
    cur = None
    for raw in lines:
        line = raw.rstrip("\n")
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        indent = len(line) - len(line.lstrip())
        stripped = line.strip()
        if indent == 0 and stripped.endswith(":") and stripped[:-1] in ("building_blocks", "modules"):
            section = stripped[:-1]
            continue
        if indent == 0 and ":" in stripped:
            section = None
            k, v = stripped.split(":", 1)
            data[k.strip()] = v.strip()
            continue
        if section == "building_blocks" and stripped.startswith("- "):
            data["building_blocks"].append(stripped[2:].strip())
            continue
        if section == "modules":
            if stripped.startswith("- "):
                cur = {}
                data["modules"].append(cur)
                stripped = stripped[2:].strip()
            if cur is not None and ":" in stripped:
                k, v = stripped.split(":", 1)
                cur[k.strip()] = v.strip().strip('"')
    return data


def scan_unresolved(pack_dir, subdirs=("configs", "prompts")):
    hits = []
    for sub in subdirs:
        base = os.path.join(pack_dir, sub)
        for root, _, files in os.walk(base):
            for fn in files:
                fp = os.path.join(root, fn)
                try:
                    with open(fp, encoding="utf-8") as f:
                        txt = f.read()
                except (OSError, UnicodeDecodeError):
                    continue
                for m in re.finditer(r"\[confirm:[^\]]*\]", txt):
                    hits.append((os.path.relpath(fp, pack_dir), m.group(0)[:60]))
    return hits


def has_script(pack_dir, stem):
    sd = os.path.join(pack_dir, "scripts")
    if not os.path.isdir(sd):
        return False
    return any(fn == stem or fn.startswith(stem + ".") for fn in os.listdir(sd))


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    ready = "--ready" in sys.argv[1:]
    if not args:
        sys.exit("usage: check_pack.py <pack_dir> [--ready]")
    pack = args[0]
    man_path = os.path.join(pack, "manifest.yaml")
    man = load_manifest(man_path)
    if man is None:
        sys.exit(f"FAIL: no manifest.yaml in {pack}")

    failures, warnings = [], []

    # top-level presence
    for f in ("README.md", "runbook.md"):
        if not os.path.exists(os.path.join(pack, f)):
            failures.append(f"missing {f}")
    for stem in ("deploy", "seed", "acceptance"):
        if not has_script(pack, stem):
            failures.append(f"missing scripts/{stem}.*")

    # per-module resolution
    modules = man.get("modules", [])
    if not modules:
        failures.append("manifest lists no modules")
    for mod in modules:
        mid = mod.get("id", "?")
        for key in ("config", "prompt", "acceptance"):
            rel = mod.get(key)
            if not rel:
                failures.append(f"module {mid}: manifest has no '{key}'")
                continue
            fp = os.path.join(pack, rel)
            if key == "config":
                # the config folder must exist; the file may be a placeholder mid-build
                if rel.endswith(".placeholder") or not os.path.exists(fp):
                    msg = f"module {mid}: config not generated ({rel})"
                    (failures if ready else warnings).append(msg)
            else:
                if not os.path.exists(fp):
                    failures.append(f"module {mid}: missing {key} {rel}")

    # unresolved [confirm:] placeholders
    unresolved = scan_unresolved(pack)
    if unresolved:
        msg = f"{len(unresolved)} unresolved [confirm:] placeholder(s)"
        (failures if ready else warnings).append(msg)

    # report
    kp = man.get("kp", "?")
    track = man.get("track", "?")
    dep = man.get("depends_on", "[]")
    print(f"Build pack: {kp} ({track})  modules={len(modules)}  depends_on={dep}")
    if dep not in ("[]", "", None):
        print(f"  run order: deploy {dep} BEFORE this pack (bottom-up).")
    for w in warnings:
        print(f"  WARN: {w}")
    for fl in failures:
        print(f"  FAIL: {fl}")
    if unresolved and not ready:
        for relp, frag in unresolved[:10]:
            print(f"        [confirm] in {relp}: {frag}")

    if failures:
        print(f"\n{len(failures)} hard failure(s). Pack is INCOMPLETE.")
        sys.exit(1)
    if warnings:
        print(f"\nStructurally complete with {len(warnings)} warning(s) "
              f"(run --ready before shipping). Static check PASS.")
    else:
        print("\nStatic check PASS. Now run the live acceptance suite on the stack.")
    sys.exit(0)


if __name__ == "__main__":
    main()
