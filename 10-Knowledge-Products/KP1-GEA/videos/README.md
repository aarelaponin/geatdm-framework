# Video track — how a KP video gets made

One video per **topic** (subtopic `«module».«topic»`, e.g. `1.1`). Build per topic, not per
module: the module-wide artefacts exist only as an intermediate that gets split.

Everything starts from the module's script bundle one level up
(`KP1_Module1_Script_Bundle_v0.2.md`) and ends as an MP4. Seven steps, of which one is a browser
session no script can replace.

## Folder layout

```
KP1-GEA/
├── KP1_Module1_Script_Bundle_v0.2.md      the source for everything below
├── build_kp1_module1_deck_v01.py          the deck's source of truth
└── videos/module_1/
    ├── scripts/     KP1_M1_1.1_Scripts_v0.1.md          per-topic narration    (1)
    ├── decks/       KP1_M1_1.1_Deck_v0.1.pptx           per-topic .pptx        (2)
    ├── notebooklm/  KP1_M1_1.1_AudioBrief_v0.2.md       brief + prompt         (3)
    ├── audio/       KP1_M1_1.1_Audio_v0.2.m4a / .srt    takes + transcripts    (4, 5)
    ├── cues/        KP1_M1_1.1_Cues_v0.2.txt            slide cue files        (6)
    └── video/       KP1_M1_1.1_Video_v0.2.mp4           the deliverable        (7)
```

One coordinate per artefact: **`KP«n»_M«m»_«x.y»_«Artefact»_v0.«v»`**. The folder says which stage,
the filename says which video, and nothing says it twice. There is no `Topic«t»` anywhere: topic
number always equals module number, so it only ever added a third place to get wrong.

The module-wide artefacts drop the `«x.y»` — `decks/KP1_M1_Deck_v0.1.pptx` is the combined 64-slide
deck, `scripts/KP1_M1_Scripts_v0.1.md` the whole-module narration — which also keeps them out of any
glob aimed at the per-topic files. `decks/split_spec.json` drives the split.

`.mp4` is gitignored — it is rebuildable from deck + audio + cues in one command.

## The steps

| # | Step | How | Skill |
|---|---|---|---|
| 1 | Per-topic narration scripts | assisted | `kp-deck-builder` |
| 2 | Deck on the ITU template, split per topic | one command | `kp-deck-builder` |
| 3 | Audio brief + NotebookLM prompt | assisted | `kp-audio-brief` |
| 4 | Generate the narration | **manual, in the browser** | — |
| 5 | Transcribe the take to SRT | one command | `kp-whisper-transcribe` |
| 5b | Audit the take against the deck | one command | `kp-audio-brief` (Step 6) |
| 6 | Slide cue file | assisted | `kp-slidecast` (Step 1) |
| 7 | Assemble the MP4 | one command | `kp-slidecast` (Step 2) |

*assisted* = judgement work done with the skill loaded, not a script you can run unattended.

---

### 1 — Extract the narration scripts → `scripts/`

The script bundle carries every topic's voice-over. Pull it out as the scripts-only companion —
narration only, one section per topic, opening with the single message, sources slides marked
*(No narration.)*. If you produce it module-wide first, split it along the topics.

`kp-deck-builder` owns this; it is generated from the same content as the deck's speaker notes,
so edit the build script and regenerate rather than editing the two out of sync.

### 2 — Build and split the deck → `decks/`

```bash
cd 10-Knowledge-Products/KP1-GEA
python build_kp1_module1_deck_v01.py                      # combined module deck, 64 slides
python ../ITU-Giga-KP-Plugin/skills/kp-deck-builder/scripts/split_module_deck.py \
  videos/module_1/decks/KP1_M1_Deck_v0.1.pptx \
  videos/module_1/decks/split_spec.json \
  videos/module_1/decks/
```

The ITU template ships inside `kp-deck-builder`; the build script finds it and `deck_lib.py`
itself, so it runs from any directory. The split spec lists each topic's slide range — re-run the
split after **any** rebuild, since ranges shift.

Then QA before going further: `bash …/kp-deck-builder/scripts/qa_deck.sh <deck.pptx>` renders
contact sheets to actually look at.

### 3 — Write the audio brief and the prompt → `notebooklm/`

Two artefacts per topic: the **audio brief** (which becomes NotebookLM's *only* source) and the
**customization prompt** (the guardrails you paste into the focus box). Both are derived from the
deck, not the script — `python3 …/kp-audio-brief/scripts/extract_deck.py <deck.pptx> --budget 240`
prints each slide's text, notes, and a proposed per-slide time budget to write against.

### 4 — Generate the narration in NotebookLM → `audio/` — MANUAL

No API. In the browser:

1. New notebook. Add the audio brief as a source — **and nothing else**. NotebookLM is steered by
   its sources far more than by its prompt; a notebook holding the wider corpus will roam it no
   matter what you type.
2. Audio Overview → **Deep Dive** format, **Shorter** length. (Default overshoots a 4-minute spec
   by 60–90 seconds no matter what the prompt says.)
3. Paste the customization prompt into the focus box.
4. Wait a few minutes, download the `.m4a`.
5. Save as `KP«n»_M«m»_«x.y»_Audio_v0.«v».m4a` — the version is the **take**, and it goes up on
   every re-roll.

### 5 — Transcribe → `.srt` beside the `.m4a`

Local `openai-whisper`, no upload and no API key. `kp-whisper-transcribe` carries the working
recipe for this machine — the system Python is too old for `torch`, 3.11 breaks on `numba`, and the
model download fails on a proxy certificate. Use the skill rather than rediscovering all three.

### 5b — Audit the take before you cue it

```bash
python3 …/kp-audio-brief/scripts/srt_drift_check.py <audio.srt> --target 240 --deck <deck.pptx>
```

Exits non-zero on runtime drift, filler and terminology failures. On two or more FAILs, **re-roll
rather than patch** — and put the fix in the brief, because that is the only thing a re-roll reads.

### 6 — Author the cue file → `cues/`

One `M:SS   # slide N — title` line per slide, plus a header naming the deck, the audio and its end
time. Cues come from the **SRT's content beats**, never from the script `.md`: the narration is a
conversational remix, not a read, so timings cannot be transferred. Slide 1 is always `0:00`; the
last cue must land strictly before the audio ends, giving the Sources card ~5 seconds.

Exactly as many cues as the deck has slides, strictly increasing, no closing "end" cue.

### 7 — Assemble → `video/`

```bash
python3 …/kp-slidecast/scripts/slidecast.py deck.pptx narration.m4a cues.txt out.mp4
```

Deck → LibreOffice → PDF → PNGs, held per cue interval, narration muxed at AAC 192k, out as H.264
1080p30. Then verify: `ffprobe` the duration and extract a frame just after each cue time and
**look at them**.

## Rules that keep the pipeline honest

**Fixes go to the source, never to the artefact.** The deck is regenerated from the build script —
never hand-edited in PowerPoint. The narration is steered by the brief — never patched in the
waveform or the SRT. Both rules exist because the next rebuild silently reverts anything else.

**Cue files and videos follow the AUDIO version, not the deck version.** The two move
independently; a new audio take shifts every beat, so `KP1_M1_1.1_Audio_v0.2.m4a` gets its own
`KP1_M1_1.1_Cues_v0.2.txt` and `KP1_M1_1.1_Video_v0.2.mp4`. A new deck version with the same audio
keeps its cues.

**The whole track runs on the kit's skills**, in order: `kp-deck-builder` → `kp-audio-brief` →
`kp-whisper-transcribe` → `kp-slidecast`. See `ITU-Giga-KP-Plugin/skills/itu-giga-kp-bundle` for
where this sits relative to the docx track.
