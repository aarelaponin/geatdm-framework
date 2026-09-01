---
name: kp-notebooklm-audio
description: >-
  Generate a KP subtopic's NotebookLM narration take from its audio brief in one command, with
  no browser — creates or reuses the subtopic's notebook, resets its sources so the current
  brief is the only one, applies the customization prompt file verbatim, generates a Deep Dive
  at Shorter length, and downloads the take to `«lang»/audio/` at the next free version. Use
  WHENEVER the task is "generate the audio for 1.3", "re-roll the take", "the brief changed,
  redo the audio", "batch the module's narration", "make the NotebookLM audio", or a subtopic
  has a brief and prompt but no take. This is Step 4 of the video track; `kp-audio-brief` still
  writes the brief and prompt (Steps 1–5) and still audits the result (Step 6), and both are
  unchanged. What is automated is the clicking, waiting and file renaming — never the
  judgement. Fixes still go to the brief, never to the audio. Authentication is your own Google
  web session via `notebooklm-py`; there is no API key.
compatibility: macOS. Needs `ffmpeg` (for `ffprobe`) and a **Python 3.11** venv with
  `notebooklm-py[cookies]==0.8.1` — not 3.13, where the cookie extra's `rookiepy` dependency has
  no wheel and fails to build. Separate from `~/.venvs/kp`. Requires a signed-in Google account
  in Chrome and one interactive `notebooklm login` that you must run yourself (it needs a macOS
  Keychain prompt allowed). Unofficial client on undocumented endpoints — see
  `references/failure-modes.md` before depending on it.
---

# KP NotebookLM audio — brief → take, one command

## Why this exists

Step 4 was the last browser session in the video track: new notebook, upload the brief, deselect
everything else, paste the prompt, pick Deep Dive and Shorter, wait, download, rename to the
right version. Six minutes of clicking that is identical every time, and none of it judgement —
then multiply by 8 subtopics × 2 languages × every re-roll the audit triggers.

The steering model does not change at all. **The brief is still the notebook's sole source, the
prompt file is still the customization input, and fixes still go to the brief, never to the
audio.** What changes is that the audit loop tightens from "fix the brief, redo a browser
session" to "fix the brief, rerun one command" — and that compounds.

## What this is not

An unofficial client on undocumented endpoints, driving a personal Google account. It is a
convenience over a manual process that still works and stays documented. **Read
`references/failure-modes.md` before relying on it**, especially the fallback ladder: this
runner → the manual browser flow → the parked TTS plan. The artefacts never depend on the tool
that produced them.

## The contract this take has to honour

| Consumer | Depends on | Effect here |
|---|---|---|
| `kp-audio-brief` Steps 1–5 | the brief and prompt authored exactly as today | unchanged — the prompt file's Step 3 block becomes the literal customization input, so its wording keeps working verbatim |
| `kp-audio-brief` Step 6 | an `.srt` from Scribe over the take | unchanged; this is still the gate |
| `kp-scribe-transcribe` | `«lang»/audio/KP«n»_M«m»_«x.y»_Audio_v0.«v».m4a` | the download lands exactly there, at the next free version, atomically |
| `kp-slidecast` | a cue file from the SRT beats | unchanged — the take is still a conversational remix, which is the point of staying on NotebookLM |
| Steering doctrine | the notebook holds only the current brief | enforced in code: **every generation deletes all existing sources first**, so a stale brief version cannot steer a take |

## Setup

`references/auth-setup.md` has all of it. In short:

```bash
python3.11 -m venv ~/.venvs/nlm                                  # 3.11, not 3.13 — see the ref
~/.venvs/nlm/bin/pip install 'notebooklm-py[cookies]==0.8.1'
~/.venvs/nlm/bin/notebooklm login --browser-cookies chrome       # allow the Keychain prompt
~/.venvs/nlm/bin/notebooklm list                                 # the real check — see below
```

**Verify with `list`, never `doctor`.** `doctor`'s "Auth ✓ pass" only means a cookie file is on
disk; it reported pass here while the next API call failed with an expired session. And a cookie
session measured **~35 minutes** on this account — fine for one take, not for a batch. Use
master-token auth for `--all` (`references/auth-setup.md`).

**You have to run the login yourself.** It needs a macOS Keychain prompt allowed, so it cannot
be done in a non-interactive shell. There is no API key anywhere in this skill; the credential
is your Google web session, stored by the client under `~/.notebooklm/` and never in the repo.

## Running it

```bash
NLM=~/.venvs/nlm/bin/python
S=…/ITU-Giga-KP-Plugin/skills/kp-notebooklm-audio/scripts

$NLM $S/nlm_take.py module_1/en 1.1               # one take
$NLM $S/nlm_take.py module_1/en --all             # every subtopic that has a brief
$NLM $S/nlm_take.py module_1/en --all --from 1.4  # resume a stopped batch
$NLM $S/nlm_take.py module_1/en 1.1 --dry-run     # resolve inputs, print the prompt, no login
$NLM $S/nlm_take.py module_1/en --list            # notebooks on the account, and the cache
```

The argument is a module's **language folder**, and the language is taken from it — `en/` → `en`,
`fr/` → `fr`, pinned explicitly on the generation call. Auto-detect is never used; that is what
mangles a French take.

Per subtopic, in order:

1. **Resolve inputs** — the newest `…_AudioBrief_v0.«v».md` and `…_NotebookLM_Prompt_v0.«v».md`
   in that language's `notebooklm/`. If their versions disagree it stops: they are written as a
   pair. `--allow-version-mismatch` overrides.
2. **Find or create the notebook**, titled by coordinates — `KP1 M1 1.1 en`. One per subtopic per
   language, reused across takes; ids cached in `notebooklm/notebooks.json` (ids and titles only,
   safe to commit). `--fresh` makes a new one.
3. **Reset sources** — delete every source, upload the current brief, wait for ingestion.
4. **Clear the existing audio overview** (one per notebook is the platform rule), then generate:
   Deep Dive, **Shorter**, language pinned, instructions from the prompt file.
5. **Download** to the next free `…_Audio_v0.«v».m4a` — atomic, never overwriting, `--force`
   required.
6. **Post-checks** — ffprobe against the brief's own stated runtime (warn outside ±15%), append
   `notebooklm/takes.log`, print the Scribe and audit commands.

### The customization prompt is extracted, not pasted whole

The prompt file is an operator runbook — headings, settings, a checklist, and **two** fenced
blocks: the real prompt under *Step 3 — Customization prompt*, and a shorter fallback under
*Step 4* for builds that truncate the box. The runner sends **the first fenced block under the
customization heading and nothing else**. Sending the file would put the acceptance checklist
into the customization field.

So keep the template's Step 3 wording. If that heading goes missing the runner stops and says
so rather than guessing — `scripts/test_resolve.py` is the check on that, and on version
resolution, runtime parsing and version numbering:

```bash
~/.venvs/nlm/bin/python scripts/test_resolve.py     # prints "resolve OK"
```

## Batching

Sequential, one generation in flight, 30 s between subtopics, hard stop on the first
throttle with a `--from` line to resume. Eight subtopics run well under an hour, unattended.

**No parallelism, ever.** This is a personal account at human scale; the pacing is the posture,
not a tuning knob. `takes.log` keeps a crude daily tally, but the only authoritative quota
signal is a `RateLimitError` from the server.

## Then: Steps 5 → 6 → 7 → 8, unchanged

```bash
~/.venvs/kp/bin/python …/kp-scribe-transcribe/scripts/transcribe.py <take>.m4a
python3 …/kp-audio-brief/scripts/srt_drift_check.py <take>.srt --target 240
```

Then the cue file at the new take's version, then slidecast. On two or more FAILs, **re-roll
rather than patch, and put the fix in the brief** — which is now one command away.

## Anti-patterns

- Editing the `.m4a` or the `.srt`. Unchanged cardinal rule: the brief is the only thing a
  re-roll reads.
- Chasing a broken endpoint instead of dropping to the manual flow. Ship, then fix the runner.
- Parallel or overnight-loop generation on a personal account.
- Using the library's other generators — video overviews, slide decks, reports. The deck is
  `kp-deck-builder`'s and the video is `kp-slidecast`'s, each with its own gate. See
  `references/failure-modes.md`.
- Upgrading `notebooklm-py` mid-module. Pin it; upgrade deliberately; re-run the pilot after.
- Putting the credential store anywhere but `$HOME`.

## What good looks like

`notebooklm list` prints your notebooks (not `doctor` — see Setup). `test_resolve.py` prints
`resolve OK`. One command writes the
next `…_Audio_v0.«v».m4a`, `takes.log` has a row naming the brief and prompt versions and the
notebook id, Scribe transcribes it, and `srt_drift_check.py` reports the take in the same family
as a hand-made one — because it was made the same way, by the same brief, with the same settings.

## Still open

1. **The pilot's acceptance gate** — KP1 M1 1.1 EN: the take is brief-steered (audit in family
   with the manual v0.2 take), the versioning discipline held, and the loop ran without a
   browser. **accept / fix runner / stay manual.**
2. **`--fresh` as the default**, if source-reset ever proves flaky in practice. It is not today.
3. **The library's shorter "brief" audio format** (`AudioFormat.BRIEF`) for the ~3-minute
   subtopics where Deep Dive padding is the recurring fight. Untested; would need its own
   acceptance run, since it changes what gets generated rather than how.
