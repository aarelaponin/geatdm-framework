"""draw_all — draws KP4's fourteen figures from clean, each by its own program.

    python3 draw_all.py
        removes every F*.png in this folder, runs each F*.py program in a fresh Python process,
        and prints the SHA-256 checksum of every PNG that run wrote; exits 1 if a program fails
        or a figure is missing afterwards

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


def num(p):
    return int(re.match(r"F(\d+)_", os.path.basename(p)).group(1))


def main():
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
