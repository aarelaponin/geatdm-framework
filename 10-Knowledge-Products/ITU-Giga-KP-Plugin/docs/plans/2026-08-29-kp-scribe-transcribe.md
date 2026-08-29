# Plan: replace manual Whisper transcription with ElevenLabs Scribe (KP1 video track, step 5)

**Status:** reviewed draft (v2) · **Date:** 2026-08-29 · **Owner:** Arne
**Scope:** `ITU-Giga-KP-Plugin` (new skill) + doc repoints listed in §3.8. The SRT contract, the
audit script, the cue format and slidecast do not change.

## 1. Goal and non-goals

**Goal.** Step 5 of the video track ("Transcribe the take to SRT") becomes one command that uploads
the `.m4a` to ElevenLabs Scribe v2, writes the `.srt` beside it in the shape `srt_drift_check.py`
and the cue author already consume, and records what the call cost. The API key lives only in the
macOS Keychain. A small local ledger shows remaining credits and warns before a batch would run dry.

**Non-goals.** No change to the SRT contract, the audit checks, the cue file format or slidecast.
No behavioural change to voice-swap (4b) — one doc line only. `kp-whisper-transcribe` is not
deleted; it becomes the offline fallback.

## 2. Contract we must preserve

| Consumer | Depends on |
|---|---|
| `kp-audio-brief/scripts/srt_drift_check.py` | Standard SRT blocks (`HH:MM:SS,mmm --> HH:MM:SS,mmm`). Runtime = last cue end. Regex checks run over **cue text**: banned phrases, filler per 100 words (FAIL above 1.5), terminology, citizen framing, signposts. Pause list = gaps between consecutive cues **≥ 0.6 s** (constant in the script). |
| `kp-slidecast` Step 1 (cue author) | Reads the SRT by eye; cue boundaries are the content beats. |
| `voice-swap.md` | Needs to know which host speaks when (currently by ear in Descript). |
| Naming | `«lang»/audio/KP«n»_M«m»_«x.y»_Audio_v0.«v».srt` beside the `.m4a`; a cue file is versioned against that SRT. |

Consequences:

1. **No speaker labels or audio-event tags in cue text** — text feeds the regex checks. Speaker
   changes become cue boundaries; audio events are dropped (`tag_audio_events=False`, and skip
   `type == "audio_event"` defensively).
2. **We own segmentation.** Scribe returns words (`start`, `end`, `text`, `speaker_id`,
   `type ∈ {word, spacing, audio_event}`), not cues.
3. **Never overwrite an existing `.srt` silently** — `--force` required. Writes are atomic
   (`.srt.tmp` + `os.replace`) so a crash never leaves a half file that folder mode then skips.

## 3. Design

### 3.1 New skill `kp-scribe-transcribe`

```
ITU-Giga-KP-Plugin/skills/kp-scribe-transcribe/
├── SKILL.md                 trigger, one-time setup, run, failure modes, what good looks like
└── scripts/
    ├── transcribe.py        CLI below; stdlib + elevenlabs + truststore
    └── compare_srt.py       Whisper-vs-Scribe acceptance check (§5)
```

Trigger phrasing mirrors `kp-whisper-transcribe` ("a fresh `.m4a` lands in a module's `audio/`
folder with no matching `.srt`"); the Whisper skill's description gains "offline fallback when
Scribe is unavailable" so the two do not compete.

### 3.2 CLI

```bash
transcribe.py <file.m4a> [<file.m4a> …]        # one or more takes → .srt beside each
transcribe.py <lang>/audio/                    # every .m4a in the folder with no matching .srt
transcribe.py --balance                        # credits, reset date, ledger totals; no upload
transcribe.py <file.m4a> --force               # overwrite an existing .srt
transcribe.py <file.m4a> --dry-run             # duration, language, forecast if data exists; no upload
transcribe.py <file.m4a> --out <path>          # write elsewhere (comparison run)
transcribe.py <file.m4a> --language fra        # override path-derived language
transcribe.py <dir>/ --strict                  # exit 2 instead of continuing after a credit warning
```

Language is **derived from the path**: a parent directory named `en` → `eng`, `fr` → `fra`;
anything else → refuse unless `--language` is given. Never auto-detect (the Whisper skill already
documents a short French clip being misdetected).

Batch mode: continue past a failed file, print a summary, exit 1 if any failed. Exit `2` only under
`--strict` when the credit warning fires before a file is uploaded.

### 3.3 The API call

```python
result = client.speech_to_text.convert(
    file=f,
    model_id="scribe_v2",
    language_code=lang,                 # "eng" / "fra"
    diarize=True,
    num_speakers=2,                     # a maximum hint, not a pin — smoothing is in §3.4
    tag_audio_events=False,
    timestamps_granularity="word",
    request_options={"timeout_in_seconds": 300},   # 10 MB through a proxy; SDK default is 60 s
)
```

Do **not** set `keyterms`, `entity_detection`, `entity_redaction` (20–30 % surcharges, none needed).
Leave `no_verbatim` at its default: the filler audit wants the take as spoken. `webhook=False`.

Comparison run only: also request `additional_formats=[{"format": "srt"}]` and write it to
`/tmp/…scribe-native.srt` as a reference. Production uses our segmenter so cue shape stays under our
control; the native SRT never lands in the repo.

**Verify on the first response and record in SKILL.md:** (a) punctuation is attached to `word.text`
(if it arrives as separate tokens, glue `^[,.;:!?…]$` to the previous word before segmenting);
(b) whether any `word` entries carry `start`/`end` of `None`.

### 3.4 Segmentation (words → SRT cues)

Pre-pass over `result.words`: keep `type == "word"` only; glue detached punctuation (§3.3a); a
token without timestamps inherits the previous word's `end` for both `start` and `end`; smooth
diarization jitter — a run of fewer than 3 words attributed to a different speaker than both its
neighbours is reassigned to the surrounding speaker.

Cue builder: seed the first cue from the first word. For each next word, close the current cue
**before** appending when any rule fires:

| Rule | Threshold | Why |
|---|---|---|
| speaker change | `word.speaker_id != cue.speaker_id` (after smoothing) | diarization lands in structure, not text |
| silence | `word.start − prev.end > 0.6` | **equals the checker's pause constant**, so every rule-made break the checker reports as a pause is a real one |
| sentence end | previous word ends in `.`/`?`/`!` **and** cue text ≥ 40 chars **and** next word starts with an uppercase letter (guards `e.g.`, `v0.2`, `U.S.`) | short interjections still close on the speaker rule |
| soft cap | cue ≥ 7 s **and** gap > 0.3 s | unpunctuated cross-talk does not become a 10 s slab |
| hard cap | appending would make the cue > 10 s **or** > 200 chars | readability, close to Whisper's shape |

Times: `start` of first word → `end` of last word, rounded to ms, `end` clamped to ≥ `start + 1 ms`.
Text: words joined with single spaces. Plain UTF-8, no BOM (the checker tolerates either). Trailing
newline after the last block. All thresholds are named constants at the top of the script, tuned
once in §5.

### 3.5 API key — macOS Keychain, nothing in the repo

One-time (prompts for the value; the key is never on a command line):

```bash
security add-generic-password -a "$USER" -s elevenlabs-api-key -w
```

Resolution order in `transcribe.py`, printing which source was used:

1. `ELEVENLABS_API_KEY` env var if set — for a one-off; SKILL.md shows `read -s` so it never hits
   shell history.
2. `security find-generic-password -s elevenlabs-api-key -w`. On non-zero exit, show stderr —
   "user denied access" is a real state. First use pops a Keychain GUI prompt for the venv's python
   binary; choose *Always Allow*; it recurs if the venv is rebuilt. Documented in SKILL.md.
3. Otherwise exit 1 printing the `security add-generic-password …` line.

Create the key in the ElevenLabs dashboard with the narrowest scopes offered (Speech to Text +
User read); record the exact scope names in SKILL.md during task 1. A leaked key then cannot spend
TTS credits or touch voices.

Repo hygiene: nothing in this design writes a secret file, so no `.gitignore` change is needed.
Optional gitleaks pre-commit hook with one custom rule `sk_[0-9a-f]{48}` (gitleaks has no
ElevenLabs rule by default) — nice to have, not on the critical path.

### 3.6 TLS on the proxied Mac

The SDK uses `httpx`, which trusts `certifi` only; httpx ≥ 0.28 **no longer reads
`SSL_CERT_FILE`**, so the env-var trick will not work. Use `truststore`, which makes Python's SSL
use the macOS keychain — the same store `curl` trusts — with no bundle to maintain:

```python
import truststore, ssl, httpx
ctx = truststore.SSLContext(ssl.PROTOCOL_TLS_CLIENT)
client = ElevenLabs(api_key=key, httpx_client=httpx.Client(verify=ctx, timeout=300))
```

Venv: `python3 -m venv ~/.venvs/kp && ~/.venvs/kp/bin/pip install "elevenlabs==<pinned>" truststore`
using whichever `python3 ≥ 3.10` the Whisper venv was built from. Separate from the Whisper venv
(torch pins). Pin the SDK version in SKILL.md.

### 3.7 Credits ledger and warning

Facts (docs, 2026-08): `client.user.subscription.get()` returns `tier`, `character_count`,
`character_limit`, `next_character_count_reset_unix`, `status`, `can_extend_character_limit`,
`current_overage`. STT is billed per hour of audio (Scribe v2 $0.22/h API rate; Starter/Creator
plans include 27 h, Pro 100 h). **Unverified:** whether Scribe usage decrements `character_count`,
and whether it does so immediately. The script measures rather than assumes, and the whole warning
system is best-effort — it only sees runs made through this script.

Per run: `sub_before = subscription.get()` → `ffprobe` duration → convert → `sub_after` → append
`ts, file, lang, duration_s, tier, credits_before, credits_after, delta, limit, reset_iso` to
`~/.local/state/kp-scribe/usage.csv`.

`--balance` prints raw fields: tier, used/limit, remaining, reset date, plus ledger totals for the
current period (rows whose `reset_iso` equals the current one) — minutes transcribed, credits
consumed — and which meter is in use.

Meter selection:

- `credits` — used once ≥ 3 ledger rows have `delta > 0`. `cost_per_min = median(delta /
  duration_min)`. Warn when `remaining < cost_per_min × 25` (about five more 4.5-min takes) or
  `< 10 % of limit`.
- `hours` — used when `--meter hours` is set, or automatically once ≥ 3 rows show `delta == 0`
  **and** a later `--balance` (billing lag) still shows no movement. Needs `--plan-hours N` (no
  tier lookup table; unknown tiers would only guess). Warn when period minutes > 80 % of
  `plan_hours × 60`.
- `unknown` — before either condition: print "no cost data yet" and never warn.

`--dry-run` forecasts a batch only under a known meter; otherwise prints durations and "no cost data
yet".

Scale check: 6 modules × ~4 topics × 2 languages × ~2 takes × ~4.5 min ≈ 7 h of audio for all of
KP1 — inside one month of a 27 h plan, ≈ $1.5 at API rate. The ledger prevents a mid-module
surprise; budget is not the constraint.

### 3.8 Docs to touch (expected diff)

- `KP1-GEA/videos/README.md` — step 5 row → `kp-scribe-transcribe`; §"5 — Transcribe" rewritten;
  "offline: `kp-whisper-transcribe`".
- `KP1-GEA/videos/voice-swap.md` — one line: cue boundaries now follow speaker turns, which can seed
  Host A/B identification (IDs may still swap; verify by ear as now).
- `ITU-Giga-KP-Plugin/README.md` — skills table row; Whisper marked fallback; diagram label.
- `kp-audio-brief/SKILL.md` — "the SRT from `kp-scribe-transcribe` (or `kp-whisper-transcribe`
  offline)".
- `kp-whisper-transcribe/SKILL.md` — description gains the fallback clause.
- `.claude-plugin/plugin.json` + rebuild `itu-giga-kp.plugin` (zip of `skills/`).
- **Possibly** `srt_drift_check.py`: Scribe transcribes disfluencies Whisper drops ("um", "uh",
  repeats). Those are not in `FILLER`, but "yeah,"/"actually," counts and the word count may shift.
  If §5 shows the 1.5/100w threshold flipping on an already-shipped take, re-baseline the threshold
  in the same change and say so in its docstring.

## 4. Work breakdown

| # | Task | Output | Est. |
|---|---|---|---|
| 1 | Create the API key (narrowest scopes; record names); add to Keychain; confirm the plan includes Scribe API access | keychain entry | 15 min |
| 2 | Venv + `truststore`; prove `subscription.get()` and a 10 s test clip convert through the proxy | `~/.venvs/kp`; §3.3 (a)/(b) answers | 30 min |
| 3 | `transcribe.py`: key resolution, TLS, language-from-path, single-file convert, pre-pass, segmenter, atomic write, `--out`, `--force` | script | 1.5 h |
| 4 | Comparison run (§5) on 1.2 and 1.1; tune thresholds; decide on the filler re-baseline | `compare_srt.py`, numbers in SKILL.md | 1 h |
| 5 | Ledger, `--balance`, meter selection, warning, `--dry-run` | script | 1 h |
| 6 | Folder mode, batch summary, `--strict` | script | 20 min |
| 7 | SKILL.md; doc repoints (§3.8); plugin zip rebuild | docs | 45 min |
| 8 | First real take end-to-end (5 → 5b → 6 → 7), then check `--balance` again ~10 min later to settle the meter | shipped SRT, meter recorded in SKILL.md | — |

Order is 2 → 3 → 4 → 5: the ledger is written only after real calls show whether
`character_count` moves. Tasks 4 and 8 cost API minutes (~15 min of audio total).

## 5. Acceptance

Two paid comparison runs, each on a take that already has a Whisper SRT:

- `en/audio/KP1_M1_1.2_Audio_v0.1` (checker outputs only).
- `en/audio/KP1_M1_1.1_Audio_v0.2` (its cue file `KP1_M1_1.1_Cues_v0.2.txt` exists).

```bash
transcribe.py en/audio/KP1_M1_1.2_Audio_v0.1.m4a --out /tmp/scribe_1.2.srt
python3 …/srt_drift_check.py en/audio/KP1_M1_1.2_Audio_v0.1.srt --target 240
python3 …/srt_drift_check.py /tmp/scribe_1.2.srt --target 240
python3 …/compare_srt.py en/audio/KP1_M1_1.2_Audio_v0.1.srt /tmp/scribe_1.2.srt --cues en/cues/…   # 1.1 only
```

**Segmenter fidelity** (must pass; thresholds are tuned until it does):

- Last cue end within 1.5 s of the `ffprobe` duration for the Scribe SRT.
- Pause list (gaps ≥ 0.6 s): every Whisper pause has a Scribe pause within ±0.5 s, and Scribe adds
  no more than 3 pauses Whisper lacks (extra speaker-turn breaks are expected and fine).
- On 1.1: every `M:SS` in `KP1_M1_1.1_Cues_v0.2.txt` falls within ±0.5 s of a Scribe cue boundary.
- Exactly two `speaker_id` values after smoothing; three hand-offs spot-checked by ear match.
- No cue > 10 s or > 200 chars; no `(…)` audio-event tokens; no `[speaker_x]` text.

**Transcript difference** (report, then decide; not pass/fail in itself):

- Same set of FAIL lines from the checker on both SRTs, **or** the difference is explained by
  disfluencies Whisper dropped — in which case §3.8's re-baseline decision is taken explicitly.
- Word count and filler/100w for both, side by side, written into SKILL.md as the baseline.

**Plumbing:**

- `git status` at repo root lists only: the new skill folder, the five doc files in §3.8, the
  plugin zip, and (if re-baselined) `srt_drift_check.py`. `git diff --cached | grep -E
  'sk_[0-9a-f]{48}'` is empty.
- With the keychain entry removed and no env var, the script exits 1 with the setup line.
- After a run, the ledger row has `credits_before`, `credits_after` and `delta` populated, and the
  script prints which meter it is using (`credits` / `hours` / `unknown`).
- A killed run (`kill -9` mid-write) leaves no `.srt`, only a `.srt.tmp` that the next run replaces.

French: repeat the 1.1 run on `fr/audio/KP1_M1_1.1_Audio_v0.2` with `fra` — accents and
punctuation intact.

## 6. Risks and open questions

| Risk / question | Mitigation |
|---|---|
| `character_count` does not move (or moves late) for STT | Meter is measured over ≥ 3 runs plus a delayed `--balance`; `--meter hours --plan-hours N` override; answer recorded in SKILL.md. |
| Scribe segmentation shifts slide cuts | §5 on a take with a shipped cue file; tune before repointing README. |
| Diarization IDs swap mid-take or jitter | `num_speakers=2` hint + 3-word smoothing; IDs are structural only, so a swap changes cue boundaries, not text, and voice-swap still verifies by ear. |
| Proxy TLS | `truststore` (keychain), proven in task 2 before the script exists. |
| Key in shell history | Keychain prompt with `-w`; env-var path documented with `read -s`. |
| SDK changes (`additional_formats` shape, param renames) | Pin `elevenlabs==<version>`; production path does not use `additional_formats`. |
| Filler threshold calibrated on Whisper output | §3.8 re-baseline decision, made on measured numbers in task 4. |
| Plan/tier lacks Scribe API access | Task 1 confirms before anything is built. |
| Content leaves the machine | The takes already go to NotebookLM and ElevenLabs Voice Changer in 4b; no new exposure. |

## 7. Rollback

Leave or delete the new skill; step 5 in README points back to `kp-whisper-transcribe`. Shipped
SRTs keep their format, so nothing downstream regenerates.

## 8. Review log

v1 → v2 (2026-08-29, adversarial review, 35 findings): switched TLS from `SSL_CERT_FILE` to
`truststore` (httpx ≥ 0.28 ignores the env var); defined first-word / `None`-timestamp / detached
punctuation handling and diarization smoothing; sentence rule floor 60 → 40 chars with uppercase
lookahead, soft cap added, hard cap evaluated before append; silence threshold tied to the checker's
0.6 s; request timeout 300 s; atomic writes and batch failure policy; ledger simplified to a
measured meter with `unknown` state and delayed confirmation, tier table dropped for
`--plan-hours`; `.gitignore` paragraph removed (nothing secret is written); gitleaks claim corrected;
acceptance split into segmenter fidelity vs transcript difference with measurable tolerances and an
explicit filler re-baseline decision; task order fixed (ledger after comparison run); `--language`
/ `--strict` added to CLI; non-goal vs voice-swap doc edit reconciled. Rejected: dropping the ledger
entirely (credit visibility was an explicit requirement).

## 9. Implementation log

Implemented 2026-08-29. Built and verified against the live API: tasks 3, 5, 6, 7 as designed;
tasks 1, 2, 4, 8 run for real (4 calls, 19.5 min of audio, 392 credits). Three deviations, all
forced by measurement rather than preference — the details and numbers are in the skill's SKILL.md:

1. **§5's pause check was unsound and is replaced.** It compares Scribe's pauses to Whisper's, but
   Whisper's cue *end* times are not where speech stops. On 1.2 the audio holds 15 silences ≥0.6 s
   and Whisper's SRT reports 0; on 1.1 it reports 3, of which 1 does not exist (at 266 s the true
   word gap is 0.04 s, not the 0.8 s Whisper implies). `compare_srt.py` now checks silences against
   Scribe's word timings — every real silence must land on a cue boundary — and the Whisper pause
   diff is a report line. Both takes pass 15/15 and 8/8. The corollary is that
   `srt_drift_check.py`'s slide-cut list has been wrong on every Whisper take; it self-heals under
   Scribe, so the checker is unchanged.
2. **§3.7's per-row `delta` meter does not work.** ElevenLabs bills STT with ~one run of lag: four
   runs logged deltas of `0, 196, 0, 0` while the counter moved 392. A median over per-row deltas
   never settles, and with `--plan-hours` set it would have wrongly concluded credits do not move
   at all. The rate is now credits-spent ÷ minutes over the period, differenced against the live
   counter, which makes the lag cancel. Answered: STT **does** decrement `character_count`, at
   ≈20 credits per audio minute.
3. **`--words-cache` added** (not in the plan). Threshold tuning otherwise costs an API call per
   iteration and is not reproducible; the cache makes re-segmentation free.

§3.8's doc list was missing `itu-giga-kp-bundle/SKILL.md`, whose video-track step 6 also named
Whisper. Repointed.

Left open deliberately: the filler re-baseline (§3.8) — 1.2 moves 1.7 → 2.7/100w and 1.1 moves
2.2 → 2.4, but **both already failed the 1.5 threshold on Whisper**, so this is Scribe showing what
was there, not degrading it. Changing the number weakens a shipped quality gate and is the owner's
call. French (§5) is unrunnable: `fr/` is still empty.
