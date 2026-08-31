# Voice swap — putting your own voice on a NotebookLM take

> **This procedure is for the NotebookLM path only.** On the default TTS path
> (`kp-interview-tts`) the voices are chosen at synthesis time, so a voice change is an edit to
> the subtopic's `TTSConfig` plus a re-roll (~$0.10) — no Descript, no stems, no Voice Changer,
> and no `Voiced` artefact. The cast lives in `kp-interview-tts/references/voice-pairs.md`, and
> the same rule holds there: changing it orphans every video made before it.

**Step 4b of the video track.** Runs between the audit (5b) and the cue file (6), once per topic per
language. Manual, in two browser tools — there is no API path, because NotebookLM has no voice
picker and Descript has no export-by-speaker.

NotebookLM's two stock hosts are on hundreds of thousands of published podcasts. For an ITU
knowledge product that is a credibility problem before a single word is heard. This step replaces
both of them: **Host A becomes your cloned voice**, Host B a stock voice held constant across the
series.

What NotebookLM still does *not* give you, checked against Google's current help: format (Deep
Dive / Brief / Critique / Debate), length, language, and a prompt box. **No voice selection.** The
swap has to happen downstream.

---

## One-time setup — clone your voice

Do this once for the whole series, not per video. Everything after depends on it.

### Record the sample

| Requirement | Value |
|---|---|
| Length | **1–2 minutes.** Not more than 3 — past that the clone gets *worse*, not better |
| Level | −23 to −18 dB RMS, true peak −3 dB |
| Format | MP3 192 kbps or above (or WAV) |
| Room | No reverb, no background noise, no artefacts |

The clone captures everything: pace, inflection, accent, breathing, mouth clicks. Record in the
register the videos actually use — *a senior adviser briefing a minister, collegial and unhurried* —
not your presenting voice. Read a passage from `KP1_M1_1.1_Scripts_v0.1.md` and you will get a
clone that already sits in the right register.

### Create it

ElevenLabs → **Voices** → **Add a voice** → **Instant Voice Clone**. Upload, name it, confirm the
verification statement. Two minutes.

*Professional Voice Clone* wants 30 minutes to 3 hours and takes hours to train. It is materially
better and worth doing if this series runs to all six modules — but start with the instant clone,
ship 1.1, and upgrade only once you have heard the instant clone across a full video.

### Cast the second host

You are one voice; the format needs two. Pick a stock ElevenLabs voice for Host B that contrasts
with yours in pitch and pace but matches it in register — measured, unhurried, no radio-DJ warmth.
Audition it against *your* clone, not in isolation; the pair is what the listener hears.

**Write both into `videos/voice-cast.md` and never re-pick per video.** Two videos in the same
module with different hosts is worse than the stock voices you were trying to escape.

---

## Per-topic procedure

### 0 — Check the take will fit

ElevenLabs Voice Changer caps at **5 minutes and 50 MB per upload**. Muting a speaker does not
shorten the file — the stem keeps full length with silence where the other host was — so *both
stems are as long as the take*.

`KP1_M1_1.1_Audio_v0.2.m4a` runs **5:19. It will be rejected.** The spec is 4:00 with a 4:15
ceiling, so the honest fix is upstream: tighten the brief and re-roll until the take lands inside
the spec. Splitting a 5:19 take at a segment boundary and converting the halves works, but it adds
a seam to every video and hides a drift failure the audit already flagged.

### 1 — Load into Descript

New project → audio project → upload the take. Set **speakers = 2** before it processes, then
**Identify speakers** when the prompt appears. Name them `Host A` and `Host B` — **A is whoever
speaks first**, so the labels stay stable across topics.

Since Step 5 moved to `kp-scribe-transcribe`, the SRT's cue boundaries already follow the speaker
turns, so it can seed the A/B identification — but the diarization ids can swap mid-take, so verify
by ear as before rather than trusting them.

Descript is ~$24/mo (Hobbyist) as of 2026; the $12 tier in the tutorial is gone. Check whether the
free tier covers your minutes before subscribing — a 4-minute file is small.

### 2 — Export two stems

Select a Host B block → **Layer** → **mute**. Repeat for every Host B block. Export.

Then start a *second* project from the same take and mute every Host A block instead.

```
audio/KP1_M1_1.1_Stem-A_v0.2.wav     Host A audible, Host B silent
audio/KP1_M1_1.1_Stem-B_v0.2.wav     Host B audible, Host A silent
```

WAV, not MP3 — this is an intermediate, and the file goes through one more lossy encode ahead.
Same take number as the source audio: the stems belong to `Audio_v0.2`, not to a version of their
own. Rename each Descript project to match its stem or you will convert the same one twice.

You only click **Layer** on the first selection; after that the mute control stays available.

### 3 — Convert each stem

ElevenLabs → **Voice Changer**. Upload `Stem-A`, target = your clone. Upload `Stem-B`, target =
the cast stock voice. Turn **background noise removal on** — the long silent stretches are where
speech-to-speech invents breaths and room tone.

Model: `eleven_multilingual_sts_v2` if this language is not English, `eleven_english_sts_v2` if it
is. Download both.

Speech-to-speech keeps the source's cadence *and accent*. Your French takes converted to your clone
will sound like you speaking French with NotebookLM's French delivery — which is the intended
result, and the reason the same cast works across `en/` and `fr/` without re-casting.

### 4 — Recombine

Back in Descript: new audio project, upload **both converted stems at once** (⌘-click to select
both). They are full-length and time-aligned, so they overlay into the finished two-host
conversation. Export as:

```
audio/KP1_M1_1.1_Voiced_v0.2.m4a
```

`Voiced` is what ships. `Audio` stays on disk as the take the audit was run against.

### 5 — Verify before cueing

```bash
ffprobe -v error -show_entries format=duration -of csv=p=0 \
  audio/KP1_M1_1.1_Audio_v0.2.m4a audio/KP1_M1_1.1_Voiced_v0.2.m4a
```

- [ ] Durations match within **0.5 s** — if not, re-transcribe the voiced file and cue against that
- [ ] Neither host is missing a line (a Host B block muted in *both* projects vanishes silently)
- [ ] No invented breath or room tone in the silent stretches
- [ ] Terminology survived: "PAERA", "once-only", "register" not "registry"
- [ ] Listen end to end once. Speech-to-speech fails locally, not globally — it will be fine for
      three minutes and mangle one clause

Then **Step 6 cues the `Voiced` file**, and Step 7 muxes it.

---

## Rules that keep this honest

**The cast is series-level, the swap is per-video.** Voice IDs live in `videos/voice-cast.md` and
change only by a deliberate decision recorded there. Nothing about a single topic justifies
re-casting.

**Fixes still go to the source.** A take that runs long, drifts off the brief or mispronounces
PAERA is fixed in the audio brief and re-rolled — never rescued in Descript. This step changes
*who* is speaking and nothing else. Muting a stumble here means the next re-roll silently brings it
back.

**Swap after the audit, never before.** 5b decides whether the take survives. Converting first
means throwing away forty minutes of clicking the moment the drift check fails.

**Cues and video follow the `Voiced` version.** Same take number as its `Audio` — `Voiced_v0.2` →
`Cues_v0.2` → `Video_v0.2`. A re-roll bumps all four together.

**Stems are intermediates.** Gitignore `*_Stem-*.wav` alongside `*.mp4`; they are rebuildable and
they are large.
