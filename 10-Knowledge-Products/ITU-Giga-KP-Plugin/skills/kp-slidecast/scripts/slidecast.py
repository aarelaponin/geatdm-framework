#!/usr/bin/env python3
"""
slidecast.py - turn a .pptx + a single narration audio file + a list of slide
cue times into an MP4.

Usage:
    python3 slidecast.py deck.pptx narration.m4a cues.txt out.mp4 [clips.txt]

cues.txt: one line per slide, giving the time at which that slide APPEARS.
Slide 1 is usually 0:00. Formats accepted: 0:00, 1:23, 1:23.5, 01:02:03, 95
Blank lines and lines starting with # are ignored.

    0:00      # slide 1 - title
    0:18      # slide 2 - why this matters
    1:05      # slide 3 - the architecture
    2:40      # slide 4 - next steps

The last slide runs until the audio ends, so you never need a final cue.

clips.txt (optional): slides that MOVE - a screen recording plays in place of the slide's still.
One '<slide-number> <clip.mp4>' per line; a relative path is relative to clips.txt.

    8   ../demo/KP2_M5_Demo_v0.1/C6-break-restore.mp4

A clip plays once at natural speed from the slide's cue, then freezes on its last frame for the
rest of the window; a window shorter than the clip cuts it - never sped up. So a clip that comes
up early against the narration holds its end state while the hosts catch up. The clip's own
audio is dropped. With clips, every slide is rendered as its own segment and the segments are
concatenated; without, the stills go straight through the concat demuxer as before.

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


def media_duration(path):
    out = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=nw=1:nk=1", str(path)],
        capture_output=True, text=True, check=True,
    )
    return float(out.stdout.strip())


def soffice():
    """The LibreOffice CLI. Linux packages it as `libreoffice`, macOS ships only `soffice`."""
    for name in ("libreoffice", "soffice"):
        found = shutil.which(name)
        if found:
            return found
    return None


def render_slides(pptx_path, workdir, width=1920):
    """pptx -> PDF -> one PNG per slide, in order."""
    result = subprocess.run(
        [soffice(), "--headless", "--convert-to", "pdf",
         "--outdir", str(workdir), str(pptx_path)],
        capture_output=True, text=True,
    )
    pdf = workdir / (Path(pptx_path).stem + ".pdf")
    if result.returncode != 0 or not pdf.exists():
        sys.exit("LibreOffice did not produce a PDF - is the .pptx readable?\n"
                 + result.stderr)
    pdf_to_pngs(pdf, workdir, width)
    slides = sorted(workdir.glob("slide-*.png"))
    if not slides:
        sys.exit("pdftoppm produced no slide images")
    return slides


def pdf_to_pngs(pdf, workdir, width):
    """PDF -> workdir/slide-N.png, one per page, zero-padded so sorted() is page order.

    pdftoppm when it is there. It usually is — except on Intel macOS, where poppler cannot be
    installed at all: its `nss` dependency has no bottle for that configuration, so a machine can
    have LibreOffice and ffmpeg and still have no pdftoppm. pypdfium2 is a self-contained wheel
    with no system dependency, so the fallback needs a venv rather than a `brew install`.
    """
    if shutil.which("pdftoppm"):
        subprocess.run(
            ["pdftoppm", "-png", "-r", "150", "-scale-to-x", str(width),
             "-scale-to-y", "-1", str(pdf), str(workdir / "slide")],
            check=True,
        )
        return
    try:
        import pypdfium2
    except ImportError:
        sys.exit("no pdftoppm, and pypdfium2 is not importable either. Either install poppler "
                 "(`brew install poppler` — fails on Intel macOS, see the docstring), or run this "
                 "script with a venv that has it:\n"
                 "    ~/.venvs/kp/bin/pip install pypdfium2 Pillow")
    doc = pypdfium2.PdfDocument(str(pdf))
    try:
        pad = len(str(len(doc)))        # pdftoppm pads to the page count; match it or sort breaks
        for i, page in enumerate(doc, 1):
            page.render(scale=width / page.get_width()).to_pil().save(
                workdir / f"slide-{i:0{pad}d}.png")
    finally:
        doc.close()                     # else pypdfium2 prints an "objects still open" notice


def read_clips(path):
    """{slide_number: Path} from a clips file."""
    clips = {}
    for lineno, raw in enumerate(Path(path).read_text().splitlines(), 1):
        line = raw.split("#", 1)[0].strip()
        if not line:
            continue
        num, _, clip = line.partition(" ")
        clip = Path(clip.strip())
        clip = clip if clip.is_absolute() else Path(path).parent / clip
        if not num.isdigit() or not clip.is_file():
            sys.exit(f"clips file line {lineno}: want '<slide-number> <existing clip.mp4>', got {line!r}")
        clips[int(num)] = clip
    return clips


FPS = 30
FIT_1080 = "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:-1:-1:color=white,setsar=1"


def render_segments(slides, bounds, clips, work):
    """One lossless-ish mp4 per slide, exactly its cue window long, all at 1080p30.

    Lengths are counted in frames against the cumulative cue times, not per window, so rounding
    never accumulates: slide i starts on frame round(cue_i * 30) wherever the earlier ones ended."""
    segments = []
    for i, still in enumerate(slides):
        frames = round(bounds[i + 1] * FPS) - round(bounds[i] * FPS)
        seg = work / f"seg-{i + 1:03d}.mp4"
        clip = clips.get(i + 1)
        if clip:
            hold = max(0.0, frames / FPS - media_duration(clip))
            source = ["-i", str(clip)]
            vf = f"{FIT_1080},tpad=stop_mode=clone:stop_duration={hold + 1:.3f}"
        else:
            source = ["-loop", "1", "-i", str(still)]
            vf = FIT_1080
        subprocess.run([
            "ffmpeg", "-y", "-v", "error", *source, "-vf", vf, "-r", str(FPS),
            "-frames:v", str(frames), "-an",
            "-c:v", "libx264", "-preset", "veryfast", "-crf", "10", "-pix_fmt", "yuv420p",
            str(seg),
        ], check=True)
        segments.append(seg)
    return segments


def concat_entry(path):
    """Path line for the ffmpeg concat demuxer, safe for quotes in filenames."""
    escaped = str(path.resolve()).replace("'", "'\\''")
    return f"file '{escaped}'"


def assemble(slides, cues, total, audio_path, out_path, work, clips=None):
    """Stills (+ clips) held for their cue windows, narration laid over, written to out_path."""
    n = min(len(cues), len(slides))
    bounds = cues[:n] + [total]

    lines = []
    if clips:
        for seg in render_segments(slides[:n], bounds, clips, work):
            lines.append(concat_entry(seg))
        tune = []
    else:
        # ffmpeg concat demuxer: each image held for its cue interval.
        for i in range(n):
            duration = bounds[i + 1] - bounds[i]
            lines.append(concat_entry(slides[i]))
            lines.append(f"duration {duration:.3f}")
        lines.append(concat_entry(slides[n - 1]))  # concat quirk: repeat last
        tune = ["-tune", "stillimage"]
    concat = work / "concat.txt"
    concat.write_text("\n".join(lines) + "\n")

    subprocess.run([
        "ffmpeg", "-y",
        "-f", "concat", "-safe", "0", "-i", str(concat),
        "-i", str(audio_path),
        "-c:v", "libx264", "-preset", "medium", *tune,
        "-pix_fmt", "yuv420p", "-r", "30",
        "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2",
        "-c:a", "aac", "-b:a", "192k",
        "-movflags", "+faststart",
        # -t as well as -shortest: on ffmpeg 9.0.1 -shortest does not clamp a concat-demuxer
        # video stream, and the slides ran 27 s past the end of the audio (measured on
        # KP1 M1 1.1 v0.5 — 284.4 s of video against 257.4 s of audio). -t is deterministic
        # and costs nothing where -shortest already worked.
        "-t", f"{total:.3f}",
        "-shortest", str(out_path),
    ], check=True)


def main():
    if len(sys.argv) not in (5, 6):
        sys.exit(__doc__)
    pptx_path, audio_path, cues_path, out_path = map(Path, sys.argv[1:5])
    clips = read_clips(sys.argv[5]) if len(sys.argv) == 6 else {}
    if not soffice():
        sys.exit("missing required tool: libreoffice (macOS installs it as `soffice`; "
                 "`brew install --cask libreoffice` puts it on the PATH)")
    for tool in ("ffmpeg", "ffprobe"):   # pdftoppm is optional; see pdf_to_pngs()
        if not shutil.which(tool):
            sys.exit(f"missing required tool: {tool}")
    cues = read_cues(cues_path)
    total = media_duration(audio_path)
    if cues[-1] >= total:
        sys.exit(f"last cue ({cues[-1]}s) is past the end of the audio ({total:.1f}s)")

    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp)
        slides = render_slides(pptx_path, work)
        print(f"rendered {len(slides)} slides, {len(cues)} cues, audio {total:.1f}s")
        if len(cues) != len(slides):
            print(f"WARNING: {len(slides)} slides but {len(cues)} cues - "
                  f"using the first {min(len(cues), len(slides))}")
        if clips:
            print("clips: " + ", ".join(f"slide {k} <- {v.name}" for k, v in sorted(clips.items())))
        assemble(slides, cues, total, audio_path, out_path, work, clips)
    print(f"wrote {out_path}")


if __name__ == "__main__":
    main()
