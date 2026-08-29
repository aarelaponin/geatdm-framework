---
name: kp-audio-brief
description: >-
  Produce the two control artefacts that make a KP subtopic's NotebookLM audio track land on
  spec first time — the audio brief (the notebook's sole source) and the NotebookLM
  customization prompt — and audit the take that comes back. Use WHENEVER the task touches
  generated narration for a KP video: "generate the audio for 1.3", "the NotebookLM audio is
  too long", "the hosts went off script", "write a prompt for NotebookLM", "the audio doesn't
  follow the deck", "why does the voice-over sound like a podcast", "make an audio brief",
  "check this SRT against the deck", "the audio says PRA instead of PAERA". Owns the framing
  lock (the listener is the official who runs these systems, never the citizen at the counter),
  the per-slide time budget derived from the deck, the prohibition list, and the house
  terminology the hosts mangle. Enforces the cardinal rule: NotebookLM is steered by its
  sources, not its prompt — so the brief is a source, and fixes go to the brief, never to the
  audio. Run after the deck exists and before slidecast assembly.
compatibility: Python 3 with `python-pptx` (install with `pip install python-pptx --break-system-packages`). NotebookLM itself is used in the browser — this skill produces its inputs and audits its outputs; it does not drive it.
---

# KP audio brief — steering NotebookLM to the deck

## Why this exists

Each subtopic ships as a standalone video: a deck, a narration track, and a cue file that cuts
one against the other. The narration is generated in NotebookLM, and an unbriefed NotebookLM
take fails the same way every time. The first real one (KP1 M1 1.1) came back **5:31 against a
4:00 spec**, opened on a citizen queuing at a counter when the whole deck addresses the official
who runs the counter, said "the PRA framework" and "the EU-European Interoperability Framework",
invented a maternal-health registry that appears nowhere in the deck, spent 1:46 on a
three-line slide and 24 seconds on a four-cell one, and closed on a reflective question about
university campuses that ran over the Sources slide with no slide to sit on.

None of that is a prompting accident. It is what the Deep Dive format does by default. This
skill encodes the counter-measures once so they are not rediscovered per video.

**The cardinal rule: NotebookLM is steered by its sources, far more than by its prompt.** A
notebook holding the whole PAERA corpus will roam it no matter what you type in the
customization box. So the brief is written as a *source* and the notebook is stripped to it.
And, mirroring the kit's build-script convention — **fixes go to the brief, never to the audio.**
Editing the waveform or the SRT guarantees the next re-roll reverts it.

## Inputs

| Input | Where | Required |
|---|---|---|
| The subtopic deck | `KP«n»-*/videos/module_«m»/«lang»/decks/KP«n»_M«m»_«x.y»_Deck_v0.«v».pptx` | yes |
| The voice-over script | `…/«lang»/scripts/KP«n»_M«m»_«x.y»_Scripts_v0.«v».md` | if it exists |
| A previous take, for the audit path | `…/«lang»/audio/KP«n»_M«m»_«x.y»_Audio_v0.«v».srt` | only for Step 6 |

`«lang»` is `en` or `fr` (see the video track's `videos/README.md`). Every input for one brief
comes from the **same** language folder — never read an English deck against a French take's SRT,
or vice versa.

Outputs land in `…/notebooklm/` under that same language folder, beside the other NotebookLM
inputs:

- `KP«n»_M«m»_«x.y»_AudioBrief_v0.«v».md` — upload this to NotebookLM
- `KP«n»_M«m»_«x.y»_NotebookLM_Prompt_v0.«v».md` — the operator's runbook

## Step 1 — Read the deck, not the script

```bash
python3 scripts/extract_deck.py <deck.pptx> --budget 240
```

Prints every slide's visible text and its speaker notes, and proposes a per-slide time
allocation weighted by how much narration each slide's notes actually carry — plus a draft cue
file. The deck's **speaker notes are the authority**, not the standalone script: they carry the
VO *and* the production directions (retrieval moments, "hold this slide a beat longer", which
cell to land hardest) that the script omits. Where notes and script disagree, the notes win.

## Step 2 — Set the runtime and check the budget

Default to the deck's own spec — the title card carries "Length: ~N mins". Do not inherit the
previous take's runtime; that is the number you are correcting.

The script's weighted split is a starting point, not an answer. Adjust it by hand for:

- **Enumerated slides** — a four-item slide needs its items to get roughly equal time, so give it
  more than the word count implies (~20s per item is the floor at which a numbered item reads as
  a beat rather than a clause).
- **The most important slide** — usually the root-cause / single-message slide. The deck notes
  say when. Give it room even if it is short on text.
- **Title and Sources** — fixed at 15s and 10s. They are bookends, not content.

Sanity check: content words ÷ runtime should land near **140 wpm**. The failed take ran 184 wpm,
which is podcast pace and wrong for an audience largely listening in English as an additional
language, with subtitles that get translated.

## Step 3 — Write the brief

Copy `references/audio-brief-template.md` and **rewrite only §2** from what Step 1 printed.

§0, §1, §3, §4 and §5 are constant across every KP video **in the same language** — the audience
lock, the framing rule, the prohibitions, the house terminology, the definition of done. Do not
re-derive them per video. When one of them needs to change, change it **in the template**, so the
next video inherits it.

**These constants are not yet language-neutral.** `audio-brief-template.md` §0's audience row and
§3's idiom prohibition both assert the listener is "working in English as a[n] second/additional
language" — true for the English deliverable, backwards for the French one. §4's terminology
table gives English pronunciations only. `notebooklm-prompt-template.md` hard-codes `Language:
English` and repeats the same English-listener line inside the pasted customization prompt. None
of this has been rewritten for French yet — both files are flagged inline with `«FR: …»` notes at
the spots that need a real decision (a French audience line, French house terms, and whether the
brief itself is authored in French or stays English with NotebookLM's output-language setting
doing the work) before the first French brief is written. Resolve it once, in the templates, the
same as any other cross-video fix — don't rediscover it per French video.

Writing §2 well is the whole job. Per slide:

- State the content as *what the hosts must cover*, in the deck's order, and nothing more.
- Translate every production direction in the notes into a spoken instruction. A "retrieval
  moment" note becomes an actual line for Host A to say plus a beat of silence. A "land this
  cell hardest" note becomes "slow down and let it sit before the next slide".
- Give the segment a start–end clock and a duration in seconds. The hosts respond to explicit
  numbers far better than to "briefly".
- Say who speaks. Assigning the insight to Host B and the clarifying question to Host A keeps
  the interviewer from inventing filler reactions to fill their turn.
- Cap Host A's questions per segment. "One short clarifying question here, not more" is the
  instruction that most reduces runtime overrun.
- End the last content slide on the **series handoff** — the sentence that points into the next
  subtopic. This is the single most-dropped element, and dropping it breaks the module's spine.

Permit **at most one metaphor per video**, named explicitly, and say it may not be extended. The
failed take stacked four (plumbing contractors, incompatible pipes, a server room, tangled
wires) because nothing told it not to.

## Step 4 — Write the prompt

Copy `references/notebooklm-prompt-template.md` and fill the placeholders from §0 and §2 of the
brief. The customization text is a *compression* of the brief, not a substitute — every rule in
it must already be in the brief, because the box may truncate and the brief will not.

Three settings matter more than the prose:

- **One notebook per video.** Not per module. A module-wide notebook cross-contaminates subtopics.
- **The brief is the first source**, and everything else is deselected. Add at most two narrow
  background extracts, never a full document.
- **Length: Shorter.** Default overshoots a 4-minute spec by 60–90 seconds regardless of what the
  prompt says.

## Step 5 — Deliver both files

Write both into `…/notebooklm/`, at the same `v0.x` as the deck they were derived from. They are versioned source, not scratch: when the deck is revised, the brief is
revised with it and the audio is re-rolled.

## Step 6 — Audit the take

When the `.srt` comes back — from `kp-scribe-transcribe` (or `kp-whisper-transcribe` offline):

```bash
python3 scripts/srt_drift_check.py <audio.srt> --target 240
```

Checks runtime against spec, the reflective outro in the final 45 seconds, the banned-phrase
list, filler density per 100 words, the house terminology errors, the citizen-at-the-counter
framing inversion, whether enumerated lists are numbered aloud, and where the pauses long enough
to cut a slide against actually fall. Exits non-zero on any FAIL, so it can gate a build.

It does not judge invented content, register, or whether the handoff landed — read for those.

**On two or more FAILs, regenerate rather than patch.** Re-rolls are cheap and converge once the
notebook holds only the brief. **If the same failure survives three re-rolls, the fix belongs in
the brief, not the prompt** — add it to §2 as content, or to §3 as a prohibition. If it is a
failure that will recur across videos, put it in `references/audio-brief-template.md` so every
future video inherits the fix.

## Step 7 — Hand off to slidecast

Once a take passes, the pause list from Step 6 gives you the real cue points. Write them into
`…_Cues_«x.y»_v0.«v».txt` — one `M:SS   # slide N — title` line per slide — and assemble with
`kp-slidecast`'s `scripts/slidecast.py`, run from wherever it is installed (all four paths are
arguments; never copy the script into the module's `video/` folder). If the pauses do not fall
near the brief's budget,
that is a brief problem to fix on the next re-roll, not something to paper over in the cue file.

## What good looks like

`srt_drift_check.py` exits 0. The runtime is within ±10s of the deck's stated length. A listener
who cannot see the slides can still hear where each one begins. Every enumerated list is numbered
aloud in the deck's order. The last words are the handoff into the next subtopic followed by one
line pointing at the description. Nothing is said that is not in the brief.

Then hand to `kp-curriculum-qa` when the module's videos are complete — terminology consistency
across subtopics is checked there, and the audio is now part of what it checks.
