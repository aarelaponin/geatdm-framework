"""Draw every figure of the Orchestrator manual, and check each one.

Run from anywhere: python3 figures/draw_all.py. Each figure is drawn by its own program,
F01_*.py to F20_*.py, in a separate process. The check after each one: the PNG exists, it is
9 inches wide at 300 DPI (2,700 pixels), so it is placed in Word at 6.5 inches with the scale
the style module assumes, and it is no taller than the page allows. A text smaller than the
smallest size stops the program that draws it (omstyle.text). Exit 0 when every figure is drawn
and passes; 1 otherwise.
"""
import glob
import os
import subprocess
import sys

from PIL import Image

HERE = os.path.dirname(os.path.abspath(__file__))
WIDTH_PX = 2700        # 9.0 in at 300 DPI
MAX_H_PX = 9.0 * 300   # no figure taller than its width

programs = sorted(glob.glob(os.path.join(HERE, "F[0-9][0-9]_*.py")))
if len(programs) != 20:
    print(f"expected 20 figure programs, found {len(programs)}")
    sys.exit(1)

failed = 0
for prog in programs:
    name = os.path.splitext(os.path.basename(prog))[0]
    png = os.path.join(HERE, name + ".png")
    if os.path.exists(png):
        os.remove(png)
    env = dict(os.environ, PYTHONDONTWRITEBYTECODE="1")
    r = subprocess.run([sys.executable, prog], cwd=HERE, capture_output=True, text=True, env=env)
    if r.returncode != 0:
        print(f"{name}: FAILED\n{r.stderr.strip()}")
        failed += 1
        continue
    if not os.path.exists(png):
        print(f"{name}: no PNG written")
        failed += 1
        continue
    w, h = Image.open(png).size
    ok = w == WIDTH_PX and h <= MAX_H_PX
    print(f"{name}: {w} x {h} px, {w / 300:.2f} x {h / 300:.2f} in{'' if ok else '  WRONG SIZE'}")
    failed += 0 if ok else 1

print(f"{len(programs) - failed} of {len(programs)} figures drawn and checked")
sys.exit(1 if failed else 0)
