---
name: kp-scribe-transcribe
description: >-
  Transcribe a KP narration take (`…/audio/KP«n»_M«m»_«x.y»_Audio_v0.«v».m4a`) to the `.srt`
  that `kp-audio-brief` Step 6 audits, using the ElevenLabs Scribe v2 API — one command, with
  diarization turned into cue boundaries and a local credits ledger. Use WHENEVER the task is
  "transcribe this audio", "get an SRT for this take", "run scribe on <file>.m4a", or a fresh
  `.m4a` lands in a module's `audio/` folder with no matching `.srt`; also for "how many
  ElevenLabs credits are left". This is Step 5 of the video track. The API key lives in the
  macOS Keychain and never in the repo, on a command line or in shell history. Covers the two
  failure modes specific to this Mac: the corporate proxy root that only the macOS keychain
  trusts (httpx ≥ 0.28 ignores `SSL_CERT_FILE`, so `truststore` is the fix, not a cert bundle),
  and the Keychain GUI prompt on first use from a new venv. Use `kp-whisper-transcribe` instead
  when the machine is offline, the key is unavailable, or the take must not leave the machine.
compatibility: macOS. Needs `ffmpeg` (`brew install ffmpeg`) for `ffprobe`, a Python ≥ 3.10 venv
  (not the system Python 3.7), an ElevenLabs API key in the Keychain, and network access.
---

# KP scribe transcribe — take → SRT via ElevenLabs Scribe

## Why this exists

Step 5 of the video track has to produce the `.srt` that `kp-audio-brief` Step 6 audits and that
the cue author in `kp-slidecast` Step 1 reads. Local Whisper does that (`kp-whisper-transcribe`,
still the offline fallback) but it is slow, CPU-bound, and blind to who is speaking. Scribe v2
returns word-level timings **and** a speaker id per word, which is the piece that matters: a
two-host NotebookLM take changes speaker at exactly the beats a slide should cut on. So the
speaker turns become cue boundaries, and the cue file gets better structure for free.

What Scribe does *not* return is cues. It returns words. **This skill owns the segmentation**, and
the thresholds in `scripts/transcribe.py` are a contract with three downstream consumers, not free
parameters. Read *The contract* below before touching them.

## The contract this SRT has to honour

| Consumer | Depends on |
|---|---|
| `kp-audio-brief/scripts/srt_drift_check.py` | Standard SRT blocks. Runtime = last cue end. Its regexes (banned phrases, filler per 100 words, terminology, citizen framing, signposts) run over **cue text**. Its pause list = gaps ≥ **0.6 s**. |
| `kp-slidecast` Step 1 | Reads the SRT by eye; cue boundaries are the content beats the slides cut on. |
| `videos/voice-swap.md` | Which host speaks when. |

Three consequences, all enforced in the script:

1. **Nothing but speech in the cue text.** No `[speaker_0]` labels, no `(laughs)` audio events —
   they would be counted as words and matched by the checker's regexes. `tag_audio_events=False`,
   and `type != "word"` is dropped defensively as well. Speaker changes land in *structure*.
2. **`SILENCE_GAP_S` equals the checker's 0.6 s pause constant.** If it were smaller, the checker
   would offer slide-cut points at breaks this script made for punctuation, and the cut would land
   mid-sentence. All three files (`transcribe.py`, `compare_srt.py`, `srt_drift_check.py`) carry
   the same number with a comment saying so — change one, change all three.
3. **An existing `.srt` is never overwritten silently.** `--force` is required. Writes are atomic
   (`mkstemp` + `os.replace`) so a killed run leaves no `.srt` at all rather than a half file that
   folder mode would then skip as done.

## One-time setup

### 1. The API key

Create it in the ElevenLabs dashboard with the narrowest scopes offered — **Speech to Text** plus
**`user_read`**, which is what the ledger's `user.subscription.get()` needs. Not TTS, not Voices: a
leaked key then cannot spend TTS credits or touch the cloned host voice pinned in `voice-cast.md`.

Without `user_read` every command dies on a 401 before it uploads anything, since the credit check
runs first. The error names the missing scope verbatim, so read it rather than guessing:

    ApiError ... status_code: 401 ... 'message': 'The API key you used is missing the
    permission user_read to execute this operation.'

```bash
security add-generic-password -a "$USER" -s elevenlabs-api-key -w
```

`-w` with no value **prompts** for it, so the key never reaches shell history. For a one-off
without touching the Keychain, `read -s ELEVENLABS_API_KEY && export ELEVENLABS_API_KEY` — the
env var wins over the Keychain and the script prints which source it used.

### 2. The venv

```bash
python3.10 -m venv ~/.venvs/kp        # NOT system python3 (3.7). Separate from ~/.venvs/whisper,
                                       # which is pinned around torch/numba.
~/.venvs/kp/bin/pip install "elevenlabs==2.65.0" truststore
```

Pin the SDK: `additional_formats` and the request-options shape have moved before.

### 3. Nothing else

No secret is ever written to disk by this skill, so there is no `.gitignore` change to make. The
only file it creates outside the repo is the ledger at `~/.local/state/kp-scribe/usage.csv`.

## Running it

```bash
KP=~/.venvs/kp/bin/python
S=…/ITU-Giga-KP-Plugin/skills/kp-scribe-transcribe/scripts

$KP $S/transcribe.py module_1/en/audio/KP1_M1_1.2_Audio_v0.1.m4a   # → .srt beside it
$KP $S/transcribe.py module_1/en/audio/                            # every .m4a with no .srt
$KP $S/transcribe.py --balance                                     # credits, no upload
$KP $S/transcribe.py <take>.m4a --dry-run                          # duration + forecast, no upload
$KP $S/transcribe.py <take>.m4a --force                            # overwrite an existing .srt
$KP $S/transcribe.py <take>.m4a --out /tmp/scribe.srt              # comparison run
$KP $S/transcribe.py module_1/fr/audio/ --strict                   # exit 2 on a credit warning
```

**Language is derived from the path**, never auto-detected: an `en/` parent → `eng`, `fr/` → `fra`,
anything else refuses and asks for `--language`. Auto-detect is what mangles a short French clip's
accents, and `kp-whisper-transcribe` already documents that failure.

Batch mode continues past a failed file, prints an `n/m transcribed` summary and exits 1 if any
failed. Exit 2 happens only under `--strict`, when the credit warning fires — before anything is
uploaded.

Then straight into Step 5b:

```bash
python3 …/kp-audio-brief/scripts/srt_drift_check.py <take>.srt --target 240
```

## Credits

Scribe is billed per hour of audio (v2 is $0.22/h at the API rate). Whether that **also**
decrements the `character_count` that `user.subscription.get()` reports is undocumented, so the
script measures instead of assuming. Every run appends `ts, file, lang, duration_s, tier,
credits_before, credits_after, delta, limit, reset_iso` to `~/.local/state/kp-scribe/usage.csv`,
and the meter is picked from what that ledger has actually seen:

| Meter | Chosen when | Warns at |
|---|---|---|
| `credits` | ≥ 3 runs this period **and** the counter moved; rate = credits spent ÷ minutes transcribed | under ~25 minutes of headroom, or under 10 % of the limit |
| `hours` | `--meter hours`, or ≥ 3 runs where the counter provably did not move after the billing lag. Needs `--plan-hours N` or `$KP_SCRIBE_PLAN_HOURS` | over 80 % of the plan's hours this period |
| `unknown` | before either — prints "no cost data yet" and **never warns** | — |

**Measured 2026-08-29 (Creator tier), answering the plan's open question:** STT *does* decrement
`character_count`, at **≈ 20 credits per audio minute** — a 4.9-minute take costs ~98 of a monthly
131,000. All of KP1 (~7 h) is ~8,400 credits. Budget is not the constraint; the ledger exists to
catch a runaway loop, not to ration.

**It bills with about one run of lag**, which is why the rate is computed from period *totals* and
not from per-row deltas. Four consecutive runs logged deltas of `0, 196, 0, 0` while the counter
actually moved 392 — any per-row statistic over that is noise. Differencing the period endpoints
against the live counter makes the lag cancel. A single row's `delta` column is kept for the audit
trail; **do not compute a rate from it.**

`--balance` prints the raw subscription fields, this period's totals, and which meter is in use. It
is best effort by construction: it only sees runs made through this script.

Scale: all of KP1 is 6 modules × ~4 topics × 2 languages × ~2 takes × ~4.5 min ≈ **7 h of audio**,
inside one month of a 27 h plan, ≈ $1.50 at the API rate. The ledger exists to prevent a
mid-module surprise, not because budget is the constraint.

## Failure modes on this machine

**`CERTIFICATE_VERIFY_FAILED` / `unable to get local issuer certificate`.** The proxy injects a
root that only the macOS keychain trusts — `curl` to the same URL works, Python does not. Do not
chase `certifi` or `SSL_CERT_FILE`: the SDK is on `httpx`, and httpx ≥ 0.28 **stopped reading
`SSL_CERT_FILE`**. The script builds a `truststore.SSLContext`, which makes Python's SSL use the
macOS keychain — the same store `curl` trusts, with no bundle to maintain. If this still fires,
`truststore` is not installed in the venv you are running.

**A Keychain GUI prompt on first use.** macOS asks whether the venv's `python` binary may read the
item. Choose **Always Allow**. It comes back if the venv is rebuilt (a new binary is a new
requestor). `security: … The specified item could not be found` means no entry exists; a *denial*
is a different message and the script prints it rather than swallowing it.

**`no API key`.** Neither `$ELEVENLABS_API_KEY` nor the Keychain item resolved; the script exits 1
printing the `security add-generic-password` line.

**Timeouts.** A 10 MB take through the proxy needs longer than the SDK's 60 s default;
`REQUEST_TIMEOUT_S = 300` covers a 5-minute take with room to spare.

## Segmentation — what the thresholds are for

Pre-pass over `result.words`: keep `type == "word"`; glue a punctuation-only token onto the
previous word; a token with `None` timestamps collapses onto the previous word's end; a speaker run
shorter than 3 words framed by one other speaker is diarization jitter and is reassigned.

Then a cue closes **before** the next word is appended when any of these fires:

| Rule | Threshold | Why |
|---|---|---|
| speaker change | after smoothing | a host hand-off is a slide beat |
| silence | gap > `SILENCE_GAP_S` (0.6 s) | equals the checker's pause constant — see the contract |
| sentence end | previous word ends `.?!` **and** cue ≥ 40 chars **and** next word capitalised | the length floor and the capital guard `e.g.`, `v0.2`, `U.S.` |
| soft cap | cue ≥ 7 s **and** gap > 0.3 s | unpunctuated cross-talk does not become a 10 s slab |
| hard cap | appending would exceed 10 s or 200 chars | readability; close to Whisper's cue shape |

`scripts/test_segmenter.py` is the check on all of that — it asserts the caps hold, the
abbreviation guard works, jitter is smoothed, and that `srt_drift_check.py` itself parses the
output. Run it after any threshold change:

```bash
python3 …/kp-scribe-transcribe/scripts/test_segmenter.py     # prints "segmenter OK"
```

**Tune the thresholds without paying per attempt.** `--words-cache` writes the word list beside the
run and reads it back if it exists, so re-segmentation never touches the API:

```bash
$KP $S/transcribe.py <take>.m4a --out /tmp/s.srt --words-cache /tmp/words.json   # one paid call
$KP $S/transcribe.py <take>.m4a --out /tmp/s.srt --words-cache /tmp/words.json --force  # free
```

## Accepting the output — the comparison run

Before repointing anything at Scribe, run it against a take that already has a Whisper SRT and a
shipped cue file, and diff the two:

```bash
$KP $S/transcribe.py module_1/en/audio/KP1_M1_1.1_Audio_v0.2.m4a --out /tmp/scribe_1.1.srt
python3 $S/compare_srt.py \
    module_1/en/audio/KP1_M1_1.1_Audio_v0.2.srt /tmp/scribe_1.1.srt \
    --audio module_1/en/audio/KP1_M1_1.1_Audio_v0.2.m4a \
    --cues module_1/en/cues/KP1_M1_1.1_Cues_v0.2.txt
```

Pass `--words` (from `--words-cache`) or the silence check — the only sound pause test — is
skipped. `compare_srt.py` FAILs only on **segmenter fidelity**: runtime within 1.5 s of the audio,
every real silence landing on a cue boundary, every shipped cue time within ±0.5 s of a Scribe
boundary, no cue over the hard caps, no speaker/audio-event debris.

The **transcript difference** is reported, never failed on, because it is a judgement call: Scribe
keeps the disfluencies Whisper drops, so word count rises and filler density moves. If that flips
`srt_drift_check.py`'s 1.5-per-100-words threshold on a take that already shipped, the fix is to
re-baseline the threshold in the same change and say so in its docstring — not to re-roll a take
that was fine.

### Measured baseline, 2026-08-29

| Take | Whisper | Scribe | Runtime Δ |
|---|---|---|---|
| `KP1_M1_1.2_Audio_v0.1` | 842 w · 1.7/100w · 55 cues | 857 w · **2.7**/100w · 76 cues | 0.4 s |
| `KP1_M1_1.1_Audio_v0.2` | 807 w · 2.2/100w · 73 cues | 820 w · **2.4**/100w · 70 cues | 0.3 s |
| `fr` repeat of 1.1 | — | not yet run | — |

Both takes pass every fidelity check, including the one that matters most: **every `M:SS` in the
shipped `KP1_M1_1.1_Cues_v0.2.txt` still lands within ±0.5 s of a Scribe cue boundary**, so moving
Step 5 to Scribe does not invalidate cue files already authored against Whisper.

### The Whisper pause list was wrong, and that is why Scribe is worth it

The plan's acceptance test compared Scribe's pauses to Whisper's. That test was unsound, because
**Whisper's cue *end* times are not where speech stops.** Measured against Scribe's word timings:

| Take | Real silences ≥ 0.6 s in the audio | Whisper's SRT reports | Backed by a real silence |
|---|---|---|---|
| `1.2` | **15** | **0** | 0 |
| `1.1` | **8** | 3 | 2 |

So `srt_drift_check.py`'s "*N* pause(s) ≥0.6s available as slide-cut points" has been telling the
cue author there are **no** cut points on 1.2 when the audio holds fifteen, and on 1.1 it named one
that does not exist. The worked example: at 266 s in 1.1, Whisper ends a cue after "Yeah,
absolutely." and starts the next 0.8 s later — but the word actually runs to 267.02 and the true
gap to the next word is **0.04 s**. There is no pause there.

This is a pre-existing defect in the Whisper path, not a regression, and it **self-heals** once
Step 5 is Scribe: our segmenter breaks on real word-level silence, so the checker's cue gaps become
true. No change to `srt_drift_check.py` is needed — it was reading an honest number off a
dishonest SRT.

`compare_srt.py` therefore checks silences against `--words` (the word cache), not against Whisper.
The invariant it enforces is the one that matters: **every real silence ≥ 0.6 s lands on a cue
boundary**, so no slide-cut point is swallowed inside a cue. Both takes pass 15/15 and 8/8. The
Whisper pause diff is still printed, as a report line only.

**Response shape, verified 2026-08-29 against `scribe_v2`** (the plan flagged both as unknown):

- **Punctuation arrives attached to `word.text`** — `government.`, `Yeah,`, `Mm-hmm...`. Roughly a
  fifth of tokens carry trailing punctuation. The pre-pass still glues punctuation-only tokens
  defensively, but on this model that path is a no-op.
- **Some words do arrive without timestamps** — 3 per take on both 1.1 (820 words) and 1.2 (857).
  The fallback that collapses them onto the previous word's end is load-bearing, not paranoia.
- **The same audio does not segment identically twice.** Two runs of 1.1 gave 68 then 70 cues —
  diarization varies slightly run to run. Re-transcribing a take whose cue file is already authored
  will move boundaries by a few tenths, so don't, unless you re-cue as well.

## Anti-patterns

- Changing `SILENCE_GAP_S` without changing the checker's 0.6 s — the pause list it prints as
  slide-cut points stops being true.
- Letting the native SRT (`additional_formats=[{"format": "srt"}]`) into the repo. Use it as a
  reference in `/tmp` during a comparison run only; production keeps segmentation under our
  control, which is the whole point.
- Setting `keyterms`, `entity_detection` or `entity_redaction` — 20–30 % surcharges, none of it
  needed here.
- Setting `no_verbatim` — the filler audit at 5b wants the take exactly as spoken.
- Passing the key on a command line or into a file. Keychain, or `read -s` into the env.
- Re-running a folder without checking `--balance` first when the meter says `credits`.

## What good looks like

`transcribe.py --balance` prints a tier and a reset date; a take's `.srt` lands beside its `.m4a`
with two speaker ids and no cue over 10 s; `srt_drift_check.py` parses it and reports pauses at the
speaker turns; `test_segmenter.py` prints `segmenter OK`; and `~/.local/state/kp-scribe/usage.csv`
has a row with `credits_before`, `credits_after` and `delta` populated.

## Still open

Everything else is built, run against the live API and recorded above. Two things remain:

1. **The filler threshold.** `srt_drift_check.py` FAILs above 1.5 markers per 100 words. That
   number was calibrated on Whisper output, which silently drops disfluencies. Scribe transcribes
   the take as spoken, so the same audio now measures higher — 1.2 moves 1.7 → **2.7**, 1.1 moves
   2.2 → **2.4**. Note that **both takes already failed the threshold on Whisper**, so this is not
   Scribe making the narration worse; it is Scribe showing what was always there. Re-baselining to
   3.0 would keep the gate's meaning under honest input; leaving it at 1.5 means every take fails
   it and the signal is lost. This weakens a shipped quality gate either way, so it is a decision
   to take deliberately rather than a number to nudge — it is **not** taken here.
2. **French.** Repeat the 1.1 comparison against `fr/audio/` with `fra` once French takes exist,
   and confirm accents and punctuation survive. `fr/` is still empty.
