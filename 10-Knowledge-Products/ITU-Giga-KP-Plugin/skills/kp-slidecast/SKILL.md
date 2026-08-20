---
name: kp-slidecast
description: >-
  Assemble a KP video from its three parts — the per-video deck (.pptx), the narration audio (.m4a) and a slide
  cue file — and author that cue file by matching the narration SRT to the slides. Use WHENEVER the task touches
  KP video assembly: "create a cue file", "when does each slide appear", "combine the deck and audio into a
  video", "build video 1.1", "render the mp4", "new audio version, redo the video", "the slides are out of sync
  with the narration". Owns the non-obvious conventions: cue files live in KP*_Module*_Topic*_Cues/ and videos
  in KP*_Module*_Topic*_Videos/, named to match the audio version (a new audio v0.X always gets a new cue file
  — narration remixes shift every beat); cues are authored from the SRT content beats, not from the script
  .md, because the narration is a conversational remix of the script, not a read of it; the last cue must land
  strictly before the audio ends; verification is ffprobe duration plus frames extracted at cue times, inspected.
compatibility: Requires libreoffice (soffice), pdftoppm (poppler-utils), ffmpeg and ffprobe — all preinstalled in the Cowork sandbox. scripts/slidecast.py is stdlib-only Python 3.
---

# KP slidecast — cue files and video assembly

## Why this exists

Each KP video ships as three files that come together at the end: a per-video deck
(`KP1_Module1_Topic1.1_Deck_v0.1.pptx`), a narration track produced elsewhere
(`KP1_Module1_Audio_1.1_v0.2.m4a` + matching `.srt`), and a cue file that says when each slide
appears. `scripts/slidecast.py` turns the three into the deliverable MP4. The mechanical part is
one command; the part that needs judgement is authoring the cue file, because **the narration is a
conversational "deep dive" remix of the voice-over script, not a read of it** — so slide timings
cannot be taken from the script `.md`, and every new audio version needs its cues re-derived from
its own SRT.

## Folder and naming conventions

Everything for a topic lives in sibling folders under the module's video folder,
`KP«n»-*/videos/module_«m»/` (e.g. `KP1-GEA/videos/module_1/`):

```
KP1_Module1_Topic1_Scripts/     KP1_M1_T1_1.1_Scripts_v0.1.md
KP1_Module1_Topic1_Decks/       KP1_Module1_Topic1.1_Deck_v0.1.pptx (deck version)
KP1_Module1_Topic1_NotebookLM/  KP1_M1_T1_1.1_AudioBrief_v0.2.md
KP1_Module1_Topic1_Audios/      KP1_Module1_Audio_1.1_v0.2.m4a/.srt (audio version)
KP1_Module1_Topic1_Cues/        KP1_Module1_Cues_1.1_v0.2.txt       (follows the AUDIO version)
KP1_Module1_Topic1_Videos/      KP1_Module1_Video_1.1_v0.2.mp4      (follows the AUDIO version)
```

The combined module deck (`KP1_Module1_Topic1_Deck_v0.1.pptx`) and the split spec sit in the Decks
folder too; assemble from the per-topic deck, never the combined one.

The deck and audio version numbers move independently. Cue files and output videos are named after
the **audio** version, since that is what changes the timings. Ignore `~$*.pptx` lock files in the
Decks folder.

## Step 1 — author the cue file (the judgement part)

Inputs: the SRT for the target audio version, and the deck's slide text (extract with python-pptx —
titles, body text and the speaker notes, which carry the original VO and staging directions).

Method:

1. List the slides in order with their key content (title card, section card, each content slide,
   Sources card).
2. Read the SRT and find the **content beat** where the conversation arrives at each slide's
   subject — e.g. the four-signs slide starts where a speaker says "we look for four signs", not
   where the topic is first hinted at. Transitions in the narration ("Right. So…", "Which brings us
   to…", a direct question) are the usual cue points.
3. Slide 1 (title card) is always `0:00`. The Sources card cues where the narration says sources
   are in the description, or after the closing thought ends.
4. Write one line per slide, `M:SS` + a `#` comment naming the slide, plus a header comment block
   recording deck file, audio file, audio end time, and that timings are approximate:

```
# Slide cue file — KP1 Module 1, Video 1.1 "Why your country needs a national EA"
# Deck:  KP1_Module1_Topic1.1_Deck_v0.1.pptx (6 slides)
# Audio: KP1_Module1_Audio_1.1_v0.2.srt (runs to 5:19)
# Approximate — derived by matching SRT content beats to slide content.

0:00   # slide 1 — Title card
0:33   # slide 2 — section card / setup
1:26   # slide 3 — Four signs your government has no shared plan
2:43   # slide 4 — The country pays in four directions at once
3:32   # slide 5 — One root cause: there is no shared plan
4:48   # slide 6 — Sources
```

Rules: exactly as many cues as the deck has slides; strictly increasing; no final "end" cue (the
last slide runs until the audio ends); the last cue must be **strictly before the audio ends** or
the build aborts. Aim to give the Sources card at least ~5 seconds (ITU convention).

## Step 2 — build the video (the mechanical part)

```bash
python3 scripts/slidecast.py deck.pptx narration.m4a cues.txt out.mp4
```

The script renders the deck via LibreOffice → PDF → 1920-wide PNGs, holds each slide for its cue
interval with the ffmpeg concat demuxer, muxes the narration (AAC 192k), and writes an H.264
1080p30 MP4 with `+faststart`. It prints `rendered N slides, M cues, audio Ts` — if N ≠ M it warns
and uses the shorter list; treat that warning as a cue-file bug, not something to ship.

## Step 3 — verify (always, before sharing)

```bash
ffprobe -v error -show_entries format=duration -of default=nw=1:nk=1 out.mp4
# extract a frame just after each cue time, then LOOK at them
for t in 5 40 90 170 220 290; do
  ffmpeg -v error -ss $t -i out.mp4 -frames:v 1 -y frame_$t.png
done
```

Confirm the duration equals the audio duration, each extracted frame shows the slide its cue
promised, and the final frame is the Sources card. Only then deliver.

## Gotchas (the ones that cost time)

- **The SRT can overstate the audio length.** A trailing caption may extend past where the m4a
  actually ends (one v0.2 SRT read 5:19; the m4a ended at 4:49.6). Always `ffprobe` the m4a; if the
  Sources cue leaves the card under ~5 seconds of real audio, say so and offer to pad the audio
  with silence rather than silently shipping a flash-frame Sources card.
- **Never reuse cues across audio versions.** Even for the same deck and topic, a re-generated
  narration shifts every beat by tens of seconds.
- **Cue times are audio-content times.** Derive them from the SRT of the *same* audio version;
  the script `.md` and the deck notes describe the original VO, which the remix does not follow.
- **Videos can exceed the 20 MB per-file device-commit cap** on longer topics. If the MP4 is over
  the cap, deliver via SendUserFile only and tell the user the filename; don't fail the commit.
- **LibreOffice renders the deck with sandbox fonts.** Minor substitution vs. PowerPoint is
  expected; check the extracted frames for anything that actually breaks layout.

## What good looks like

`rendered 6 slides, 6 cues` with no count warning, MP4 duration equal to the m4a's, every
spot-checked frame on the right slide, a Sources tail of ~5s or more, and the cue file + MP4
committed to their conventional folders named after the audio version.
