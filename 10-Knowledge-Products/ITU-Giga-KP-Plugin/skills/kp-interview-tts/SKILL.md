---
name: kp-interview-tts
description: >-
  PARKED as of kit v0.8.0 — the pilot decayed 24 dB across a 4-minute take and the fix could
  not be validated on a free-tier key; `kp-notebooklm-audio` is Step 4. Do not select this
  skill unless the operator asks for the scripted-TTS path by name.
  Produce a KP subtopic's narration take without a browser — Claude authors a two-speaker
  expert-interview script from the subtopic's voice-over script, a stdlib linter checks it
  against the same prohibition lists the Step 6 audit uses, and one command synthesizes the
  whole take with the Gemini multi-speaker TTS API into the next `…_Audio_v0.«v».m4a`. Use
  WHENEVER the task is "generate the audio for 1.3", "make a narration take", "re-roll the
  audio", "the take is too long", "write the interview script for this subtopic", "change the
  narration voices", "what did the audio cost", or a subtopic has a deck and a script but no
  take. This was the default Step 4 of the video track before it was parked; `kp-notebooklm-audio`
  holds that slot now, and its Step 6 audit still runs afterwards either way. Runtime, terminology
  and framing become properties of a text file you diff and re-roll, not of a generation you
  audit after the fact. The API key lives in the macOS Keychain and never in the repo, on a
  command line or in shell history.
compatibility: macOS. Needs `ffmpeg` (for `ffmpeg` and `ffprobe`), a Python ≥ 3.10 venv with
  `google-genai` and `truststore`, a Gemini API key in the Keychain, and network access. The
  linter is stdlib-only and runs on any `python3`.
---

# KP interview TTS — script → take, no browser

## Why this exists

Step 4 used to be a browser session: paste a brief into NotebookLM, wait, download whatever
came back, and audit it. The brief was an *instruction to a model* — so runtime, framing and
terminology were things you discovered after the take existed, and the only fix was another
re-roll of a generation you did not control.

Here the narration is a file. Claude authors the exact words both speakers say; a linter checks
them against the same lists the Step 6 auditor uses, before anything is paid for; and the API
reads the page. **Everything the take says is on that page**, which is the point and also the
warning — there is no model in between to smooth over an error you typed.

Two consequences worth naming:

- **`voice-swap.md` becomes unnecessary on this path.** It exists because NotebookLM has no
  voice picker. This API does. There is no `Voiced` artefact and no Descript step: Steps 6 and
  7 consume the `Audio` file directly. See `references/voice-pairs.md`.
- **The `Deep Dive` energy is gone by construction, and so is its engagement.** Whether a
  scripted interview holds attention the way the Deep Dive does is the pilot's real question,
  not a foregone conclusion. Answer it by listening, not by reading the lint output.

`kp-audio-brief` is not retired: its Step 6 audit is the independent verifier on both paths,
and the NotebookLM path stays documented as the fallback.

## The contract this take has to honour

| Consumer | Depends on | Effect here |
|---|---|---|
| `kp-scribe-transcribe` | an `.m4a` in `«lang»/audio/` with the standard name | we write exactly that; Step 5 is unchanged |
| `kp-audio-brief` Step 6 | a standard SRT; runtime = last cue end; regexes over cue text | unchanged — the take flows through Scribe like any other |
| `kp-slidecast` | a cue file authored from the SRT beats | unchanged; a new take means a new cue file |
| Naming | `KP«n»_M«m»_«x.y»_Audio_v0.«v».m4a`, **sequence continues** | 1.1 EN's next take is `v0.3`, whatever made it. The artefact never advertises how it was made; `takes.log` is the provenance record |

## One-time setup

### 1. The API key

Create it at <https://aistudio.google.com/apikey>, then:

```bash
security add-generic-password -a "$USER" -s gemini-api -w
```

`-w` with no value **prompts**, so the key never reaches shell history. `$GEMINI_API_KEY`
overrides the Keychain on other machines; the script prints which source it used.

### 2. The venv

```bash
~/.venvs/kp/bin/pip install google-genai truststore
```

The same venv `kp-scribe-transcribe` uses — Python ≥ 3.10, not the system 3.7. `truststore` is
already there for Scribe and is load-bearing here for the same reason (below).

### 3. Freeze the voices

`references/voice-pairs.md` — audition on the free tier, pick a pair, write it into the table
and the KP's TTSConfig. **Do this before the pilot take**; a take on an unfrozen pair is a
throwaway.

## The stage folder

```
«lang»/tts/KP«n»_M«m»_«x.y»_InterviewScript_v0.«v».md    what Claude authors, what you review
«lang»/tts/KP«n»_M«m»_«x.y»_TTSConfig_v0.«v».json        voices, director notes, model, target
«lang»/tts/takes.log                                     provenance + running spend
```

A sibling of `notebooklm/`, under the same language folder. Script and audio versions move
independently — script v0.1 can produce takes v0.3 and v0.4; the log ties them together.

## Step 4a — author the InterviewScript

**Read `references/interview-format.md` before writing a line.** It is the authoring contract:
two speakers with the expert on ≥80% of the words, the framing lock with the interviewer inside
it, slide comments that carry each slide's inherited word budget, the prohibition list applied
to the page, pronunciations in the config rather than the dialogue, and questions standing in
for the retrieval moments the briefs had to engineer.

Input is the subtopic's `«lang»/scripts/KP«n»_M«m»_«x.y»_Scripts_v0.«v».md` plus the deck's
runtime spec. The transform keeps the per-slide structure and word budget and recasts each
slide's narration as interview beats. Nothing new enters.

**This is the step where human judgement buys the most.** Review the draft as if it were the
take, because it is.

## Step 4b — lint before spend

```bash
python3 scripts/tts_script_lint.py module_1/en/tts/KP1_M1_1.1_InterviewScript_v0.1.md
```

Stdlib only, costs nothing, and fails loudly on: per-slide and total word budgets (±10% warn,
±20% fail), the banned-phrase / terminology / citizen-framing / filler lists, structure (exactly
two speaker labels matching the config, no prose outside a slide block, dialogue on every
content slide, nothing over Sources), a phonetic spelling that leaked into the dialogue, and the
estimated runtime at 150 wpm against the target.

**The word lists are imported from `kp-audio-brief/scripts/srt_drift_check.py`, not copied** —
this is the plan's §3.3 open question, decided: shared. Everything Step 6 will fail on after the
take exists, this fails on before it is paid for, and the two cannot drift apart. If that import
ever breaks, the linter exits rather than silently checking nothing.

`scripts/test_lint.py` is the check on all of it — run it after touching either file:

```bash
python3 scripts/test_lint.py        # prints "lint OK"
```

## Step 4c — synthesize

```bash
KP=~/.venvs/kp/bin/python
S=…/ITU-Giga-KP-Plugin/skills/kp-interview-tts/scripts

$KP $S/tts_synthesize.py module_1/en/tts/KP1_M1_1.1_InterviewScript_v0.1.md
$KP $S/tts_synthesize.py <script.md> --dry-run          # the exact request, no spend
$KP $S/tts_synthesize.py <script.md> --out /tmp/x.m4a   # comparison run
$KP $S/tts_synthesize.py --audition Aoede,Charon        # the fixed 30 s exchange
$KP $S/tts_synthesize.py --list-models                  # what this key can actually call
```

**One request per slide, joined into one take** — not one request for the whole subtopic. The
plan chose whole-take synthesis; the pilot measured why that is wrong:

| | start | end | drift |
|---|---|---|---|
| Whole-take TTS (v0.5) | −16.6 dBFS | **−40.6 dBFS** | **−24 dB** |
| NotebookLM, same script | −25.3 dBFS | −25.4 dBFS | −0.1 dB |

The level decays monotonically across a 4-minute generation until the closing lines are inaudible
against the video. The spectrum holds through it (HF/LF ratio steady within ~2 dB), so it is gain
collapse, not vocoder collapse — which is why per-chunk gain is the right correction.

So each slide is its own request, `level_match()` puts every chunk on a common speech level, and
`SLIDE_GAP_S` (0.7 s, deliberately above `kp-scribe-transcribe`'s 0.6 s pause constant) joins
them — which makes every slide boundary land on a real cue boundary in the SRT. The script also
prints the exact boundary timestamps, so the cue file is a transcription of that list rather than
something inferred.

`--whole-take` keeps the old behaviour for comparison runs. Cost is a few hundred extra input
tokens for the repeated preamble; the daily request cap is the real price (see below).

What it does: resolves the sibling TTSConfig, refuses to run if the lint fails (`--skip-lint`
overrides), builds the director preamble plus the stripped transcript (slide comments never
reach the API), calls `generate_content` with `response_modalities=["AUDIO"]` and a
`multi_speaker_voice_config` mapping the two speaker names to the frozen pair, pipes the
returned 24 kHz 16-bit PCM through ffmpeg to AAC, and writes the **next free version** in the
sibling `audio/` folder — atomically, never overwriting. Then it ffprobes the result against the
target (warn outside ±10%), appends to `takes.log`, and prints the Scribe and audit commands.

At our lengths (~650 spoken words) the request is far inside the session token limit.

## Then: Steps 5 → 5b → 6 → 7, unchanged

```bash
$KP …/kp-scribe-transcribe/scripts/transcribe.py module_1/en/audio/KP1_M1_1.1_Audio_v0.3.m4a
python3 …/kp-audio-brief/scripts/srt_drift_check.py <that>.srt --target 240
```

Then author the cue file at the new take's version and assemble with `kp-slidecast`. **Skip
4b (voice swap)** — the voices were chosen at synthesis time.

If the audit FAILs, the fix goes to the InterviewScript and you re-roll (~$0.10). On this path
a surviving FAIL is a sentence you wrote, so it is findable: grep the script for it.

## Cost, and the free-tier wall

**Check the key's project has billing enabled before planning any batch.** On the free tier this
model allows **10 `generate_content` requests per day**, and since synthesis is one request per
slide, that is *one and a half takes* — the pilot hit the wall after four auditions, two probes
and three takes. The script now fails fast on that quota with the fix rather than retrying into
it, because a per-day limit is not transient.

    quotaId: GenerateRequestsPerDayPerProjectPerModel-FreeTier   quotaValue: 10

With billing on, it is per token: text in at $1/M, audio out at $20/M, audio ~25 tokens/second.
A 4-minute take is about **$0.15**; an 8-subtopic EN module pass about **$1.30**, plus re-rolls.
`takes.log` is the running ledger — one line per take with the model, both token counts, the
computed cost and the measured duration. **The cost column is computed from the published rates,
not reported by the API**, so on the free tier it shows what the take *would* have cost.

Budget is not the constraint at this scale; the daily request cap is.

## Failure modes on this machine

**`CERTIFICATE_VERIFY_FAILED`.** The corporate proxy injects a root that only the macOS keychain
trusts. The script calls `truststore.inject_into_ssl()`, which points Python's SSL at that
keychain. Do **not** chase `certifi` or `SSL_CERT_FILE` — the SDK is on `httpx`, and httpx ≥ 0.28
stopped reading `SSL_CERT_FILE`. `kp-scribe-transcribe` measured this. If it still fires,
`truststore` is not installed in the venv you are running.

**A Keychain GUI prompt on first use.** macOS asks whether the venv's `python` may read the item.
Choose **Always Allow**. It returns if the venv is rebuilt.

**`no API key`.** Neither `$GEMINI_API_KEY` nor the Keychain item resolved; the script prints the
`security add-generic-password` line.

**`NOT_FOUND` on the model.** It is a preview model and the id moves. `--list-models` prints
what the key can call; put the right one in the TTSConfig's `model` field, and note it in
`takes.log` by re-running — the log records the model per take precisely so a shift in output is
attributable.

**Duration warning outside ±10%.** At a fixed word count this should barely happen. Check the
`director_preamble`'s pace line before touching the dialogue.

## Anti-patterns

- Editing the `.m4a` or the `.srt`. Same cardinal rule as the brief path, with less excuse: the
  script *is* the take.
- Chunking per slide to control timing. Cues come from the SRT. Fix the word budget instead.
- Changing a voice for one video. That orphans the series — see `references/voice-pairs.md`.
- Copying the prohibition lists into the linter instead of importing them. They drift within a
  month and then the two gates disagree about what a good take is.
- Passing the key on a command line or into a file. Keychain, or `read -s` into the env.
- `--skip-lint` as a habit. It exists for the one case where the linter is provably wrong, and
  that case should end with a fix to the linter.

## What good looks like

`test_lint.py` prints `lint OK`. The linter exits 0 on the script. One command writes the next
`…_Audio_v0.«v».m4a`, ffprobe reports a duration inside ±10% of the spec, and `takes.log` has a
row naming the script version, the config version, the model and the cost. Scribe transcribes it,
`srt_drift_check.py` exits 0, and the SRT's speaker turns fall on the slide boundaries the script
already marked — because they are the same boundaries.

## Still open

1. **The pilot's A/B.** KP1 M1 1.1 EN against `KP1_M1_1.1_Audio_v0.2.m4a` (NotebookLM): runtime
   vs spec, terminology, framing, slide-sync quality, and whether the scripted interview holds
   attention. Decision gate: **accept / tune the format rules / stay on NotebookLM.** Nothing
   rolls out to the other seven subtopics before that call.
2. **French.** Out of scope until the EN module is accepted. When it starts: audition French
   voice pairs separately (quality varies per voice), and decide whether the French
   InterviewScript is a translation of the EN one or authored fresh from the FR scripts — the
   same unresolved question `audio-brief-template.md` carries for its `«FR: …»` markers.
3. **The filler threshold**, inherited from `kp-scribe-transcribe`'s open item. The 1.5/100w
   gate was calibrated on Whisper output. It is not re-baselined here, and on this path it
   should be easy to pass — the script contains no filler unless someone typed it.
