"""draw_all — draws KP4's fourteen figures from clean, each by its own program.

    python3 draw_all.py
        removes every F*.png in this folder, runs each F*.py program in a fresh Python process,
        and prints the SHA-256 checksum of every PNG that run wrote; exits 1 if a program fails
        or a figure is missing afterwards
    python3 draw_all.py --slides
        draws the slide variants of the figures the video decks carry (SLIDE_FIGURES below) into
        slides/, in slide mode (kp4_style.SLIDE: no figure title, no MARK, cropped, type two
        points larger; F3 and F8 draw their own layout in draw_slide()). The guide's figures are
        left alone. The deck builder (../decks/kp4_deck_common.py) reads slides/<name>.png.

Each program can also be run on its own (python3 F7_architecture.py); it removes its own PNG
before drawing it. The PNG files carry no time stamp and no folder of the machine that drew
them, so the same program gives the same file.
"""

import glob
import hashlib
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
# the figures the decks carry; each is drawn with its type raised by SLIDE_BUMP points, then by
# one point less, down to the guide's sizes, and the largest that passes kp4_style's fit check
# is kept (a tightly laid-out figure keeps the guide's sizes and is only cropped)
SLIDE_FIGURES = ("F2_three-places", "F3_twelve-documents", "F5_sector-catalogue",
                 "F7_architecture", "F8_story-and-failures", "F9_screen-sources")
SLIDE_BUMP = 2


def num(p):
    return int(re.match(r"F(\d+)_", os.path.basename(p)).group(1))


def slides():
    os.environ["KP4_SLIDE"] = "1"      # before kp4_style is first imported
    import importlib.util
    sys.path.insert(0, HERE)
    import kp4_style as s
    out_dir = os.path.join(HERE, s.SLIDE_DIR)
    os.makedirs(out_dir, exist_ok=True)
    failed = 0
    for name in SLIDE_FIGURES:
        for bump in range(SLIDE_BUMP, -1, -1):
            s.set_bump(bump)
            spec = importlib.util.spec_from_file_location("fig_" + name.replace("-", "_"),
                                                          os.path.join(HERE, name + ".py"))
            mod = importlib.util.module_from_spec(spec)
            spec.loader.exec_module(mod)
            draw = getattr(mod, "draw_slide", None) or mod.draw
            try:
                path = s.save(draw(), os.path.join(HERE, name + ".png"))
            except ValueError as e:
                if bump == 0:
                    failed += 1
                    print(f"FAILED {name}: {e}")
                continue
            digest = hashlib.sha256(open(path, "rb").read()).hexdigest()
            print(f"{digest}  {os.path.relpath(path, HERE)}  (+{bump} pt, {s.FONT})")
            break
    print(f"{len(SLIDE_FIGURES)} slide figures, {failed} failed")
    return 1 if failed else 0


def main():
    if "--slides" in sys.argv:
        return slides()
    for old in glob.glob(os.path.join(HERE, "F*.png")):
        os.remove(old)
    print(f"removed every F*.png; {len(glob.glob(os.path.join(HERE, 'F*.png')))} left")
    progs = sorted(glob.glob(os.path.join(HERE, "F*.py")), key=num)
    failed = 0
    for p in progs:
        r = subprocess.run([sys.executable, "-B", os.path.basename(p)], cwd=HERE,
                           capture_output=True, text=True)
        if r.returncode:
            failed += 1
            print(f"FAILED {os.path.basename(p)}\n{r.stdout}{r.stderr}")
    pngs = sorted(glob.glob(os.path.join(HERE, "F*.png")), key=num)
    for png in pngs:
        digest = hashlib.sha256(open(png, "rb").read()).hexdigest()
        print(f"{digest}  {os.path.basename(png)}")
    print(f"{len(progs)} programs run, {failed} failed, {len(pngs)} figures written")
    stems = {os.path.basename(p)[:-3] for p in progs}
    drawn = {os.path.basename(p)[:-4] for p in pngs}
    if failed or stems != drawn:
        print("programs without a figure:", sorted(stems - drawn))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
