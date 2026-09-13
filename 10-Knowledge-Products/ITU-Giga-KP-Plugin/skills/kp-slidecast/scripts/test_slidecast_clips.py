#!/usr/bin/env python3
"""A clip plays once from its cue, then holds its last frame; a short window cuts it.

Fixture: slide 1 a red still, slide 2 a 2 s clip (1 s blue then 1 s green) in a 5 s window —
longer than the clip — and slide 3 the same clip in a 0.8 s window, shorter than its blue half. Checked: the
video is exactly the audio's length, and the colour at each instant is the one the rule promises.
Needs ffmpeg/ffprobe only (no LibreOffice: slides are given as PNGs). Run: python3 test_slidecast_clips.py
"""
import subprocess
import tempfile
from pathlib import Path

from slidecast import assemble, media_duration


def ff(*args):
    subprocess.run(["ffmpeg", "-y", "-v", "error", *args], check=True)


def colour_at(video, t):
    rgb = subprocess.run(["ffmpeg", "-v", "error", "-ss", f"{t}", "-i", str(video), "-frames:v", "1",
                          "-vf", "crop=200:200:860:440,scale=1:1", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                         capture_output=True, check=True).stdout
    return max(zip(rgb, "rgb"))[1]   # the dominant channel


def test_clip_holds_its_end_state_and_is_cut_when_the_window_is_short():
    with tempfile.TemporaryDirectory() as tmp:
        w = Path(tmp)
        for name, colour in (("slide-1", "red"), ("slide-2", "red"), ("slide-3", "red")):
            ff("-f", "lavfi", "-i", f"color={colour}:s=1920x1080", "-frames:v", "1", str(w / f"{name}.png"))
        ff("-f", "lavfi", "-i", "color=blue:s=1280x720:r=25:d=1", "-f", "lavfi", "-i", "color=lime:s=1280x720:r=25:d=1",
           "-filter_complex", "[0][1]concat=n=2:v=1", "-c:v", "libx264", "-pix_fmt", "yuv420p", str(w / "clip.mp4"))
        ff("-f", "lavfi", "-i", "anullsrc=r=48000:cl=stereo", "-t", "8.5", "-c:a", "aac", str(w / "take.m4a"))
        slides = sorted(w.glob("slide-*.png"))
        out = w / "out.mp4"
        assemble(slides, [0.0, 2.0, 7.7], 8.5, w / "take.m4a", out, w, {2: w / "clip.mp4", 3: w / "clip.mp4"})

        assert abs(media_duration(out) - 8.5) < 0.1, media_duration(out)
        assert colour_at(out, 1.0) == "r"    # still
        assert colour_at(out, 2.4) == "b"    # clip starts on its cue, at natural speed
        assert colour_at(out, 3.5) == "g"    # clip's second half
        assert colour_at(out, 6.5) == "g"    # frozen on the last frame, 3 s after the clip ended
        assert colour_at(out, 7.2) == "g"    # still slide 2's frozen frame
        assert colour_at(out, 8.4) == "b"    # slide 3: 0.8 s window, cut inside the blue half — a sped-up clip would end green


if __name__ == "__main__":
    for name, fn in sorted(globals().items()):
        if name.startswith("test_"):
            fn()
            print(f"ok  {name}")
    print("all ok")
