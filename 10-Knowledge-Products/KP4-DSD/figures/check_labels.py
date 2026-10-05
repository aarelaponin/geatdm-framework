"""check_labels — finds every label of KP4's fourteen figures in the plan or the fact sheet.

    python3 check_labels.py --plan PLAN --facts FACTS
        draws each figure in memory (nothing is written), and looks for every label it draws,
        word for word, in the KP4 plan (PLAN) and in Progressa's fact sheet (FACTS); prints one
        line per name with where it was found, and exits 1 if any name is found in neither
    python3 check_labels.py --plan PLAN --facts FACTS --selftest
        the same check with one invented label added, which must make it fail

A label made of separate names is written with " · " between them; each name is looked for on
its own. A label broken over lines is joined with spaces before it is looked for. Case, curly
quotes, dashes and runs of white space are made uniform on both sides, and a trailing full stop,
comma, semicolon or colon is dropped.
"""

import argparse
import glob
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.dont_write_bytecode = True
sys.path.insert(0, HERE)
import kp4_style as s  # noqa: E402
import matplotlib.pyplot as plt  # noqa: E402

SEP = "·"


def norm(t):
    t = t.replace("’", "'").replace("‘", "'").replace("“", '"').replace("”", '"')
    t = t.replace("–", "-").replace("—", "-").replace("*", "")
    return re.sub(r"\s+", " ", t).strip().lower()


def programs():
    found = glob.glob(os.path.join(HERE, "F*.py"))
    key = lambda p: int(re.match(r"F(\d+)_", os.path.basename(p)).group(1))  # noqa: E731
    return sorted(found, key=key)


def load(path):
    spec = importlib.util.spec_from_file_location("fig_" + os.path.basename(path)[:-3]
                                                  .replace("-", "_"), path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    ap.add_argument("--plan", required=True)
    ap.add_argument("--facts", required=True)
    ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    plan = norm(open(a.plan, encoding="utf-8").read())
    facts = norm(open(a.facts, encoding="utf-8").read())
    progs = programs()
    for p in progs:
        fig = load(p).draw()
        fig.canvas.draw()
        plt.close(fig)
    labels = list(s.LABELS)
    if a.selftest:
        labels.append(("F0_selftest", "a register of horses kept by the harbour master"))
    count = missing = 0
    for fig_name, label in labels:
        for part in label.replace("\n", " ").split(SEP):
            part = norm(part).rstrip(".,;:")
            if not part:
                continue
            count += 1
            where = "plan" if part in plan else ("fact sheet" if part in facts else None)
            missing += where is None
            print(f"{(where or 'NOT FOUND'):10s}  {fig_name:36s}  {part}")
    print(f"\n{count} names in {len(labels)} labels across {len(progs)} figure programs; "
          f"{count - missing} found, {missing} not found")
    return 1 if missing else 0


if __name__ == "__main__":
    sys.exit(main())
