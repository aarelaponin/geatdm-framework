# Video track — how a KP video gets made

One video per **topic** (subtopic `«module».«topic»`, e.g. `1.1`). Build per topic, not per
module: the module-wide artefacts exist only as an intermediate that gets split.

Everything starts from the module's script bundle one level up
(`KP1_Module1_Script_Bundle_v0.2.md`) and ends as an MP4. Eight steps, of which two are browser
sessions no script can replace.

**Bilingual: English and French.** Each module runs the full pipeline once per language, in
parallel sibling trees (`en/`, `fr/`) under the module folder — same six stages, same filenames,
different language folder. English is the only language currently produced; `fr/` is scaffolded
and empty, waiting on a French deck (see *Adding a language* below).

## Folder layout

```
KP1-GEA/
├── KP1_Module1_Script_Bundle_v0.2.md      the source for everything below (English)
├── build_kp1_module1_deck_v01.py          the deck's source of truth (English)
└── videos/
    ├── voice-swap.md                       how the hosts get replaced       (4b)
    ├── voice-cast.md                       the two host voices, pinned
    └── module_1/
        ├── en/
        │   ├── scripts/     KP1_M1_1.1_Scripts_v0.1.md          per-topic narration    (1)
        │   ├── decks/       KP1_M1_1.1_Deck_v0.1.pptx           per-topic .pptx        (2)
        │   ├── notebooklm/  KP1_M1_1.1_AudioBrief_v0.2.md       brief + prompt         (3)
        │   ├── audio/       KP1_M1_1.1_Audio_v0.2.m4a / .srt    takes + transcripts    (4, 5)
        │   │                KP1_M1_1.1_Stem-A_v0.2.wav          per-host stems         (4b)
        │   │                KP1_M1_1.1_Voiced_v0.2.m4a          the take, re-voiced    (4b)
        │   ├── cues/        KP1_M1_1.1_Cues_v0.2.txt            slide cue files        (6)
        │   └── video/       KP1_M1_1.1_Video_v0.2.mp4           the deliverable        (7)
        └── fr/
            ├── scripts/      (empty — awaiting French production)
            ├── decks/
            ├── notebooklm/
            ├── audio/
            ├── cues/
            └── video/
```

One coordinate per artefact, plus one for language: **`KP«n»_M«m»_«x.y»_«Artefact»_v0.«v»`** inside
`«lang»/«stage»/`. The language folder says which language, the stage folder says which stage, the
filename says which video — nothing says the same thing twice. Filenames are **identical across
`en/` and `fr/`**; only the path disambiguates. There is no `Topic«t»` anywhere: topic number
always equals module number, so it only ever added a third place to get wrong.

The module-wide artefacts drop the `«x.y»` — `en/decks/KP1_M1_Deck_v0.1.pptx` is the combined
64-slide deck, `en/scripts/KP1_M1_Scripts_v0.1.md` the whole-module narration — which also keeps
them out of any glob aimed at the per-topic files. `en/decks/split_spec.json` drives the split for
that language's deck; a translated deck gets its own `fr/decks/split_spec.json` once one exists,
since slide ranges are only guaranteed to match if the French deck mirrors the English slide count.

`.mp4` is gitignored — it is rebuildable from deck + audio + cues in one command. So are the
`*_Stem-*.wav` intermediates, which are large and rebuildable from the take.

## The steps

Run this table once per language folder (`en/`, then `fr/` when it exists).

| # | Step | How | Skill |
|---|---|---|---|
| 1 | Per-topic narration scripts | assisted | `kp-deck-builder` |
| 2 | Deck on the ITU template, split per topic | one command | `kp-deck-builder` |
| 3 | Audio brief + NotebookLM prompt | assisted | `kp-audio-brief` |
| 4 | Generate the narration | **manual, in the browser** | — |
| 5 | Transcribe the take to SRT | one command | `kp-scribe-transcribe` (offline: `kp-whisper-transcribe`) |
| 5b | Audit the take against the deck | one command | `kp-audio-brief` (Step 6) |
| 4b | Replace both host voices | **manual, in the browser** | `voice-swap.md` |
| 6 | Slide cue file | assisted | `kp-slidecast` (Step 1) |
| 7 | Assemble the MP4 | one command | `kp-slidecast` (Step 2) |

*assisted* = judgement work done with the skill loaded, not a script you can run unattended.

4b is numbered out of order on purpose: it belongs to the audio stage, but it runs **after** the
audit, because 5b is what decides whether the take is worth re-voicing at all.

---

### 1 — Extract the narration scripts → `«lang»/scripts/`

The script bundle carries every topic's voice-over, in that bundle's own language. Pull it out as
the scripts-only companion — narration only, one section per topic, opening with the single
message, sources slides marked *(No narration.)*. If you produce it module-wide first, split it
along the topics.

`kp-deck-builder` owns this; it is generated from the same content as the deck's speaker notes,
so edit the build script and regenerate rather than editing the two out of sync.

### 2 — Build and split the deck → `«lang»/decks/`

```bash
cd 10-Knowledge-Products/KP1-GEA
python build_kp1_module1_deck_v01.py                      # combined module deck, 64 slides — English, writes to videos/module_1/en/decks/
python ../ITU-Giga-KP-Plugin/skills/kp-deck-builder/scripts/split_module_deck.py \
  videos/module_1/en/decks/KP1_M1_Deck_v0.1.pptx \
  videos/module_1/en/decks/split_spec.json \
  videos/module_1/en/decks/
```

`build_kp1_module1_deck_v01.py` defaults to `videos/module_1/en/decks/`, since it hard-codes the
English slide copy. Override with `OUT_PATH=...` to write anywhere else — that's also how a French
build script (once it exists) should target `videos/module_1/fr/decks/`.

The ITU template ships inside `kp-deck-builder`; the build script finds it and `deck_lib.py`
itself, so it runs from any directory. The split spec lists each topic's slide range — re-run the
split after **any** rebuild, since ranges shift.

Then QA before going further: `bash …/kp-deck-builder/scripts/qa_deck.sh <deck.pptx>` renders
contact sheets to actually look at.

### 3 — Write the audio brief and the prompt → `«lang»/notebooklm/`

Two artefacts per topic: the **audio brief** (which becomes NotebookLM's *only* source) and the
**customization prompt** (the guardrails you paste into the focus box). Both are derived from the
deck, not the script — `python3 …/kp-audio-brief/scripts/extract_deck.py <deck.pptx> --budget 240`
prints each slide's text, notes, and a proposed per-slide time budget to write against. For French,
run this against the French deck once it exists — the brief should already be in French, since
NotebookLM's spoken output follows its source language.

### 4 — Generate the narration in NotebookLM → `«lang»/audio/` — MANUAL

No API. In the browser:

1. New notebook. Add the audio brief as a source — **and nothing else**. NotebookLM is steered by
   its sources far more than by its prompt; a notebook holding the wider corpus will roam it no
   matter what you type.
2. Audio Overview → **Deep Dive** format, **Shorter** length. (Default overshoots a 4-minute spec
   by 60–90 seconds no matter what the prompt says.)
3. Paste the customization prompt into the focus box.
4. Wait a few minutes, download the `.m4a`.
5. Save as `KP«n»_M«m»_«x.y»_Audio_v0.«v».m4a` under the right language's `audio/` folder — the
   version is the **take**, and it goes up on every re-roll.

### 5 — Transcribe → `.srt` beside the `.m4a`

```bash
~/.venvs/kp/bin/python …/kp-scribe-transcribe/scripts/transcribe.py module_1/en/audio/
```

ElevenLabs Scribe v2 over the API. `kp-scribe-transcribe` owns it: the key lives in the macOS
Keychain and never in the repo, the language is derived from the `en/`/`fr/` parent rather than
auto-detected, and a folder argument transcribes every take that has no `.srt` yet.

Scribe returns words with a speaker id, not cues, so the skill does the segmentation — and puts a
cue boundary on every **speaker turn**, which is exactly where a slide should cut. That is the
reason to prefer it over Whisper: Step 6's cue file gets better beats for free, and Step 4b gets a
head start on which host speaks when.

A local ledger (`~/.local/state/kp-scribe/usage.csv`) records what each run cost;
`transcribe.py --balance` shows remaining credits and warns before a batch would run dry.

**Offline, or when the take must not leave the machine:** `kp-whisper-transcribe`, unchanged — it
carries this machine's `torch`/`numba`/proxy-certificate recipe. Pass `--language fr` explicitly
for French takes there, since Whisper auto-detects and misreads a short clip.

### 5b — Audit the take before you cue it

```bash
python3 …/kp-audio-brief/scripts/srt_drift_check.py <audio.srt> --target 240 --deck <deck.pptx>
```

Exits non-zero on runtime drift, filler and terminology failures. On two or more FAILs, **re-roll
rather than patch** — and put the fix in the brief, because that is the only thing a re-roll reads.

### 4b — Replace both host voices → `«lang»/audio/` — MANUAL

NotebookLM has no voice picker — format, length, language and a prompt box, nothing else. Its two
stock hosts are on hundreds of thousands of published podcasts, which is a credibility problem for
an ITU knowledge product before a word is heard.

So the voices get swapped downstream: split the take into per-host stems in Descript, push each
through the ElevenLabs Voice Changer, recombine. Host A is a clone of your own voice, Host B a
stock voice held constant across the series. Both are pinned in `videos/voice-cast.md`.

**`videos/voice-swap.md` carries the procedure** — the one-time voice clone, the per-topic clicks,
and the checks. Two things to know before you start:

- The Voice Changer caps at **5 minutes per upload**, and muting a host does not shorten the file.
  A take over the spec's 4:15 ceiling will simply be rejected — one more reason to re-roll rather
  than patch at 5b.
- Speech-to-speech preserves cadence *and accent*, so the same cast carries into `fr/` without
  re-casting. It also preserves runtime, which is what keeps Step 6's cues valid.

The output is `KP«n»_M«m»_«x.y»_Voiced_v0.«v».m4a`, same take number as the `Audio` it came from.
That file is what Steps 6 and 7 consume.

### 6 — Author the cue file → `«lang»/cues/`

One `M:SS   # slide N — title` line per slide, plus a header naming the deck, the audio and its end
time. Cues come from the **SRT's content beats**, never from the script `.md`: the narration is a
conversational remix, not a read, so timings cannot be transferred. Slide 1 is always `0:00`; the
last cue must land strictly before the audio ends, giving the Sources card ~5 seconds.

Exactly as many cues as the deck has slides, strictly increasing, no closing "end" cue. A
language's cues are built from that same language's audio and deck — never mix languages across
this step.

The SRT comes from the raw take but the cues describe the `Voiced` file. That is only safe because
4b preserves runtime — so verify the two durations match before trusting a single timestamp.

### 7 — Assemble → `«lang»/video/`

```bash
python3 …/kp-slidecast/scripts/slidecast.py deck.pptx KP1_M1_1.1_Voiced_v0.2.m4a cues.txt out.mp4
```

Deck → LibreOffice → PDF → PNGs, held per cue interval, narration muxed at AAC 192k, out as H.264
1080p30. Then verify: `ffprobe` the duration and extract a frame just after each cue time and
**look at them**.

## Adding a language

`fr/` exists as an empty mirror of `en/` (six stage folders, no content yet). Populating it is not
a file-copy job — every stage after the deck depends on French content that doesn't exist yet:

1. **Translate the deck.** The deck is the pipeline's single source of truth (Step 2), so French
   starts there — either a French-language variant of `build_kp1_module1_deck_v01.py` (translated
   slide copy and speaker notes, same slide count so `split_spec.json` still lines up) or a
   translated `.pptx` produced some other way, saved to `videos/module_1/fr/decks/`.
2. Once a French deck exists, Steps 1, 3–7 run exactly as documented above with `«lang»` = `fr` —
   the audio brief extractor, NotebookLM, the transcriber, the cue author and slidecast are all
   language-agnostic; they just need French inputs.
3. The module-level script bundle (`KP1_Module1_Script_Bundle_v0.2.md`, one level up from
   `videos/`) is English-only today. A French bundle would need its own file (e.g.
   `KP1_Module1_Script_Bundle_v0.2_FR.md`) if you want the scripts-only companion in Step 1 to
   exist in French too — that's a translation task, not a restructuring one, and is out of scope
   of this folder move.

## Rules that keep the pipeline honest

**Fixes go to the source, never to the artefact.** The deck is regenerated from the build script —
never hand-edited in PowerPoint. The narration is steered by the brief — never patched in the
waveform or the SRT. Both rules exist because the next rebuild silently reverts anything else.

**Cue files and videos follow the AUDIO version, not the deck version.** The two move
independently; a new audio take shifts every beat, so `KP1_M1_1.1_Audio_v0.2.m4a` gets its own
`KP1_M1_1.1_Cues_v0.2.txt` and `KP1_M1_1.1_Video_v0.2.mp4`. A new deck version with the same audio
keeps its cues. This is per-language: an English re-roll never bumps French version numbers, and
vice versa.

**Languages never mix mid-pipeline.** Every artefact for a given video is built from that same
language's upstream artefact — a French audio take is cued against the French deck's SRT, never
against an English one, even if the timings look close.

**Everything downstream of 4b uses the `Voiced` file.** `Audio_v0.2` is the take the audit was run
against and it stays on disk; `Voiced_v0.2` is what gets cued, muxed and shipped. One take number
across all four artefacts — `Audio_v0.2` → `Voiced_v0.2` → `Cues_v0.2` → `Video_v0.2` — and a
re-roll bumps them together.

**The cast is decided once, in `voice-cast.md`.** Re-picking voices per video is worse than the
stock hosts you were escaping. Changing the cast orphans every video made before it, so record the
change and decide, in writing, whether the back catalogue gets re-rendered.

**The whole track runs on the kit's skills**, in order: `kp-deck-builder` → `kp-audio-brief` →
`kp-scribe-transcribe` → `kp-slidecast`. See `ITU-Giga-KP-Plugin/skills/itu-giga-kp-bundle` for
where this sits relative to the docx track.
