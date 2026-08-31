# Camera intro — filming a 1.0 and folding it into the series

**A ninth artefact for a module: subtopic `«m».0`, an on-camera introduction, filmed by hand.**
It does not come out of the pipeline — no deck, no brief, no NotebookLM take, no cue file. It is
one person, one camera, one to two minutes. Steps 1–7 in `README.md` do not apply; these do.

The script is authored like any other subtopic — it lives in `«lang»/scripts/` as
`KP«n»_M«m»_«m».0_IntroScript_v0.«v».md`, next to the eight it introduces.

> **Before you film**, read the compliance note in the script. An on-camera 1.0 is a deliberate
> exception to §4.3 *"no individuals on screen"* and belongs in §5.4 as a calibration item. If ITU
> declines it, the same script becomes a screen-only voice-over and nothing else changes.

---

## What "matching the series" means

The intro has to be indistinguishable from 1.1–1.8 as a *file*, or the playlist plays unevenly and
YouTube re-encodes it differently. Measured off `KP1_M1_1.1_Video_v0.7.mp4`:

| Property | Series value | Where it comes from |
|---|---|---|
| Resolution | 1920×1080 | slidecast render |
| Frame rate | 30 fps, constant | slidecast render |
| Video codec | H.264, yuv420p | `libx264` |
| Audio codec | AAC, 44 100 Hz, stereo | slidecast render |
| Integrated loudness | **−24.9 LUFS** | the NotebookLM take, as delivered |
| True peak | −5.3 dBTP | same |

QuickTime will give you none of these by default. Step 4 fixes all of them in one command.

> **A loudness note worth raising separately.** −24.9 LUFS is broadcast-quiet. YouTube normalises
> loud uploads *down* to about −14 LUFS but never lifts quiet ones *up*, so the whole series plays
> back noticeably softer than the videos on either side of it in a viewer's feed. That is a
> series-wide call, not an intro call — match −24.9 for now so 1.0 does not stand out, and decide
> separately whether to re-master all eight nearer −16.

---

## 1 — Set the room up

The camera is the least important thing here. In order of what viewers actually notice:

1. **Sound.** A quiet room beats a good microphone. Close the window, kill the fridge hum, turn
   off any fan. If you own a lapel or USB mic, use it — the MacBook's built-in array is
   room-sounding and it will not match the voiced series. Wired earbuds with a mic are better than
   nothing and better than the laptop.
2. **Light.** One large soft source in front of you — a window at midday, blinds diffusing it, you
   facing it. Nothing bright behind you. Overhead ceiling light alone is the one to avoid; it puts
   shadows exactly where a face doesn't want them.
3. **Background.** Plain wall, or depth with nothing readable in it. No emblems, no logos, no
   book spines a viewer will pause to read. §4.2 bans country emblems and agency logos on slides;
   the spirit of it applies to what is behind your head.
4. **Camera height.** Lens at eye level. A laptop on a desk films you from below; put it on books
   until the lens is level with your eyes.
5. **Camera.** If you have an iPhone, use **Continuity Camera** — it is a substantially better
   sensor than the built-in FaceTime camera and QuickTime picks it up as a normal input. Mount it
   at eye level, landscape.

Frame yourself medium close-up: top of the head just below the top edge, eyes about a third of the
way down, a little space on the side you are angled toward.

## 2 — Get the words out without reading

Around 270 words — two minutes — is more than you want to read off a page, and reading it will show.
Three options, best first:

- **Learn the five beats, speak them.** Hello/who → the question → who this is for → what a play is
  and who runs it
  → the four things you will be able to do → "start with 1.1." Say it your way each take. This gives
  the register §4.4 asks for and no other method does.
- **Notes at the lens.** Stick the five beats, in large type, on a card taped just beside the
  camera lens — not on the screen below it. Eyes stay near the lens.
- **Teleprompter.** If you use one, drop the pace another notch; prompter reading always sounds
  faster than it looks.

Say the whole thing three or four times before you hit record. The take you want is usually the
fourth.

**Film the long version even if you plan to publish the short one.** The script marks three
⟦bracketed⟧ passages that cut cleanly back to ~60 seconds. If they are in the take you can remove
them in the edit; if they are not, you are filming again.

## 3 — Record it in QuickTime

1. Open **QuickTime Player**. If it opens a file browser, press <kbd>Esc</kbd>.
2. **File → New Movie Recording** (<kbd>⌥⌘N</kbd>).
3. Click the **chevron next to the red record button**. Set:
   - **Camera** — your iPhone (Continuity) or FaceTime HD.
   - **Microphone** — your external mic if you have one, *not* the iPhone's if the iPhone is
     across the room.
   - **Quality** — **Maximum**. (High caps at 480p. This is the single most common way to end up
     with an unusable file.)
4. Watch the **level meter** under the preview while you say a line at your real volume. It should
   sit in the middle, touching the upper third on emphasis, never pinning right. Adjust distance to
   the mic, not the words.
5. **Record two seconds of silence** before your first word and after your last, every take. That
   silence is your room tone and your edit handles; without it every cut sounds abrupt.
6. Hit record. Say it. Hit stop.
7. **File → Save**, and put the takes somewhere out of the repo — `~/Movies/KP1-M1-1.0/` is fine.
   Name them `take1.mov`, `take2.mov`. Raw takes do not belong in the module folder.

Do at least three takes even when the first feels right. It costs four minutes and it is the only
insurance against noticing a stumble after you have already cut the video.

**Check the first take for mirroring.** Hold something with text on it up to the camera and confirm
it reads correctly in the saved file, not in the preview — QuickTime's preview is mirrored and the
saved file may or may not be. If it comes out reversed, add `hflip,` to the front of the filter
chain in step 4.

## 4 — Normalise the take to series spec

One command. Set the three variables and run it from anywhere.

```bash
TAKE=~/Movies/KP1-M1-1.0/take3.mov
OUT="$HOME/mnt/10-Knowledge-Products/KP1-GEA/videos/module_1/en/video/KP1_M1_1.0_Video_v0.1.mp4"
IN_POINT=00:00:01.5      # first frame you want
OUT_POINT=00:02:01.0     # last frame you want

ffmpeg -ss "$IN_POINT" -to "$OUT_POINT" -i "$TAKE" \
  -vf "scale=1920:1080:force_original_aspect_ratio=decrease,\
pad=1920:1080:(ow-iw)/2:(oh-ih)/2,fps=30,format=yuv420p" \
  -af "loudnorm=I=-24.9:TP=-5.3:LRA=6" \
  -c:v libx264 -preset slow -crf 18 -pix_fmt yuv420p \
  -c:a aac -b:a 192k -ar 44100 -ac 2 \
  -movflags +faststart "$OUT"
```

What each part is doing: `-ss`/`-to` trim the dead air off both ends; `scale`+`pad` guarantee
1920×1080 whatever the camera gave you; `fps=30` matches the render; `loudnorm` puts you at the
series loudness measured above; `faststart` lets YouTube start processing before the whole file
lands.

Then verify you actually match:

```bash
cd "$HOME/mnt/10-Knowledge-Products/KP1-GEA/videos/module_1/en/video"
for f in KP1_M1_1.0_Video_v0.1.mp4 KP1_M1_1.1_Video_v0.7.mp4; do
  echo "== $f"
  ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,sample_rate,channels \
    -of default=noprint_wrappers=1 "$f"
done
```

The two blocks should read identically.

## 5 — Title and end cards (optional)

If you want the ITU-branded cards described in the script's on-screen spec, build them as a
two-slide PPTX on the template (`kp-deck-builder` owns the template), export to PNG, and stitch:

```bash
# 3-second still from a PNG, at series spec
ffmpeg -loop 1 -t 3 -i endcard.png -f lavfi -t 3 -i anullsrc=r=44100:cl=stereo \
  -vf "scale=1920:1080,fps=30,format=yuv420p" \
  -c:v libx264 -preset slow -crf 18 -c:a aac -b:a 192k -shortest endcard.mp4

# join, no re-encode — parameters already match
printf "file '%s'\n" "$PWD/KP1_M1_1.0_Video_v0.1.mp4" "$PWD/endcard.mp4" > /tmp/join.txt
ffmpeg -f concat -safe 0 -i /tmp/join.txt -c copy KP1_M1_1.0_Video_v0.2.mp4
```

If `-c copy` produces a glitch at the seam, drop it and re-encode with the same `libx264`/`aac`
flags as step 4.

## 6 — Subtitles

The intro gets an SRT like every other topic, into `«lang»/audio/`:

```bash
KP1_M1_1.0_Audio_v0.1.srt
```

Run it through the same skill the series uses — `kp-scribe-transcribe` (ElevenLabs Scribe), or
`kp-whisper-transcribe` offline. Two minutes of speech is a few cents. Read the result before
uploading; "PAERA" and "Lapõnin" are exactly the words a transcriber gets wrong.

## 7 — Where it lands

```
videos/module_1/en/
├── scripts/  KP1_M1_1.0_IntroScript_v0.2.md     the script (committed)
├── audio/    KP1_M1_1.0_Audio_v0.1.srt          the captions (committed)
└── video/    KP1_M1_1.0_Video_v0.1.mp4          the deliverable (gitignored)
```

Raw `.mov` takes stay outside the repo. Unlike every other `.mp4` here, **1.0 is not rebuildable
from source** — there is no deck and no cue file to re-render it from. Keep the chosen take
archived somewhere you back up, and note where in `voice-cast.md`.

## 8 — If you decide to prepend instead

Not recommended — it breaks §3.i and adds a minute to every video — but if ITU asks for it, the
files already match after step 4, so it is a concat per video:

```bash
cd "$HOME/mnt/10-Knowledge-Products/KP1-GEA/videos/module_1/en/video"
for v in 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8; do
  src=$(ls KP1_M1_${v}_Video_v*.mp4 | sort -V | tail -1)
  printf "file '%s'\n" "$PWD/KP1_M1_1.0_Video_v0.1.mp4" "$PWD/$src" > /tmp/join_$v.txt
  ffmpeg -f concat -safe 0 -i /tmp/join_$v.txt -c copy "with_intro_$src"
done
```

Then every SRT needs its timings shifted by the intro's duration, which is the real cost of this
option.
