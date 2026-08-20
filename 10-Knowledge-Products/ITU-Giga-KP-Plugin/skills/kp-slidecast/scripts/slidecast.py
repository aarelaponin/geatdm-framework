#!/usr/bin/env python3
"""
slidecast.py - turn a .pptx + a single narration audio file + a list of slide
cue times into an MP4.

Usage:
    python3 slidecast.py deck.pptx narration.m4a cues.txt out.mp4

cues.txt: one line per slide, giving the time at which that slide APPEARS.
Slide 1 is usually 0:00. Formats accepted: 0:00, 1:23, 1:23.5, 01:02:03, 95
Blank lines and lines starting with # are ignored.

    0:00      # slide 1 - title
    0:18      # slide 2 - why this matters
    1:05      # slide 3 - the architecture
    2:40      # slide 4 - next steps

The last slide runs until the audio ends, so you never need a final cue.

Requires: libreoffice, pdftoppm (poppler-utils), ffmpeg
"""
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path


def parse_cue(text):
    """'1:23.5' -> 83.5 seconds. Also accepts '01:02:03' and bare seconds."""
    parts = text.split(":")
    if len(parts) > 3:
        raise ValueError(f"unrecognised timestamp: {text!r}")
    seconds = 0.0
    for part in parts:
        seconds = seconds * 60 + float(part)
    return seconds


def read_cues(path):
    cues = []
    for lineno, raw in enumerate(Path(path).read_text().splitlines(), 1):
        line = raw.split("#", 1)[0].strip()
        if not line:
            continue
        try:
            cues.append(parse_cue(line))
        except ValueError:
            sys.exit(f"cues file line {lineno}: cannot parse {line!r}")
    if not cues:
        sys.exit("cues file contains no timestamps")
    for a, b in zip(cues, cues[1:]):
        if b <= a:
            sys.exit(f"cue times must increase: {a} then {b}")
    return cues


def audio_duration(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True, check=True,
    )
    return float(out.stdout.strip())


def render_slides(pptx_path, workdir, width=1920):
    """pptx -> PDF -> one PNG per slide, in order."""
    result = subprocess.run(
        ["libreoffice", "--headless", "--convert-to", "pdf",
         "--outdir", str(workdir), str(pptx_path)],
        capture_output=True, text=True,
    )
    pdf = workdir / (Path(pptx_path).stem + ".pdf")
    if result.returncode != 0 or not pdf.exists():
        sys.exit("LibreOffice did not produce a PDF - is the .pptx readable?\n"
                 + result.stderr)
    subprocess.run(
        ["pdftoppm", "-png", "-r", "150", "-scale-to-x", str(width),
         "-scale-to-y", "-1", str(pdf), str(workdir / "slide")],
        check=True,
    )
    slides = sorted(workdir.glob("slide-*.png"))
    if not slides:
        sys.exit("pdftoppm produced no slide images")
    return slides


def concat_entry(path):
    """Path line for the ffmpeg concat demuxer, safe for quotes in filenames."""
    escaped = str(path.resolve()).replace("'", "'\\''")
    return f"file '{escaped}'"


def main():
    if len(sys.argv) != 5:
        sys.exit(__doc__)
    pptx_path, audio_path, cues_path, out_path = map(Path, sys.argv[1:])
    for tool in ("libreoffice", "pdftoppm", "ffmpeg", "ffprobe"):
        if not shutil.which(tool):
            sys.exit(f"missing required tool: {tool}")
    cues = read_cues(cues_path)
    total = audio_duration(audio_path)
    if cues[-1] >= total:
        sys.exit(f"last cue ({cues[-1]}s) is past the end of the audio ({total:.1f}s)")

    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)
        slides = render_slides(pptx_path, work)
        print(f"rendered {len(slides)} slides, {len(cues)} cues, audio {total:.1f}s")
        if len(cues) != len(slides):
            print(f"WARNING: {len(slides)} slides but {len(cues)} cues - "
                  f"using the first {min(len(cues), len(slides))}")
        n = min(len(cues), len(slides))
        bounds = cues[:n] + [total]

        # ffmpeg concat demuxer: each image held for its cue interval.
        lines = []
        for i in range(n):
            duration = bounds[i + 1] - bounds[i]
            lines.append(concat_entry(slides[i]))
            lines.append(f"duration {duration:.3f}")
        lines.append(concat_entry(slides[n - 1]))  # concat quirk: repeat last
        concat = work / "concat.txt"
        concat.write_text("\n".join(lines) + "\n")

        subprocess.run([
            "ffmpeg", "-y",
            "-f", "concat", "-safe", "0", "-i", str(concat),
            "-i", str(audio_path),
            "-c:v", "libx264", "-preset", "medium", "-tune", "stillimage",
            "-pix_fmt", "yuv420p", "-r", "30",
            "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2",
            "-c:a", "aac", "-b:a", "192k",
            "-movflags", "+faststart",
            "-shortest", str(out_path),
        ], check=True)
    print(f"wrote {out_path}")


if __name__ == "__main__":
    main()
