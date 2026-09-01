# Interview format — the rules Claude follows when authoring an InterviewScript

This file is the authoring contract for Step 4a. It replaces §1–§4 of
`kp-audio-brief/references/audio-brief-template.md` on the TTS path: the framing lock, the
prohibitions and the terminology table are the same rules, but they now apply to a page we
diff rather than to a generation we audit after the fact.

**Everything the audio says is on this page.** There is no model interpreting a brief in
between. That is the whole reason this path exists — and it means an error here is spoken
verbatim, so read the draft as if it were the take.

---

## The file

```
«lang»/tts/KP«n»_M«m»_«x.y»_InterviewScript_v0.«v».md
```

```markdown
# KP1 M1 1.1 — Interview script v0.1
<!-- config: KP1_M1_1.1_TTSConfig_v0.1.json -->

<!-- slide: 1 — Title card | words: 95 -->
**Nadia:** …
**Daniel:** …

<!-- slide: 5 — Sources | words: 0 -->
```

Three mechanical facts the linter and the synthesizer both depend on:

- **`<!-- slide: N — title | words: W -->`** opens a slide block. The comments are stripped
  before the API call and are **never spoken**. They exist so the cue author (Step 6) and a
  re-roll editor can navigate, and so the linter can hold each slide to its budget.
- **`**Name:** text`** is a turn. The names come from the TTSConfig and are fixed per KP.
  A wrapped line continues the turn above it.
- **Nothing else** may appear inside a slide block. A stray heading or a note to yourself is
  prose the API would read aloud, so the linter FAILs on it.

The InterviewScript version is **independent of the audio version** — script v0.1 can produce
takes v0.3 and v0.4. `tts/takes.log` ties them together.

---

## The seven rules

### 1. Two speakers, and the expert carries the content

The API takes exactly two. That is also what the format wants.

| | Who they are | What they do |
|---|---|---|
| **Interviewer** | concise, well prepared, asks what a ministry official would ask | ≤20% of the words |
| **Expert** | senior enterprise architect | **≥80% of the words**, in complete turns |

The interviewer never explains. Every one of their turns is a question or a one-clause
handover into the next question. When the interviewer starts summarising what the expert just
said, the runtime has already overrun.

Names are fixed per KP in the TTSConfig so the pair is stable across every video in the series.
Changing a name is the same class of decision as changing a voice — see `voice-pairs.md`.

### 2. The framing lock holds, and the interviewer is inside it

The listener is the government official who runs these systems. The interviewer is **that
official's proxy** — the questions come from the minister's side of the desk, never the
citizen's.

- ✅ "The minister's office asked me why we would fund an architecture on top of six programmes."
- ✅ "What does that cost us, in a year?"
- ❌ "So as a citizen, what am I supposed to do?"
- ❌ "We've all stood in that queue."

The citizen appears only in the third person, as the person **your** systems burden.

### 3. Slide boundaries are comments, not speech

One `<!-- slide: … -->` per deck slide, in the deck's order, including Title and Sources.
Finish each slide's content before the next comment; never let a thought straddle a boundary.

**The Sources slide carries exactly one line** — "Sources are in the video description." — and
nothing else: no URLs, no section numbers, no summary, and no question before it. Those are the
final words of the take. (A slide budgeted `words: 0` is held silent instead, and the linter
FAILs on any dialogue under it; use that only where the deck genuinely has a silent card.)

### 4. The word budget is inherited, not invented

Per-slide budget = the subtopic's `scripts/KP«n»_M«m»_«x.y»_Scripts_v0.«v».md` allocation for
that slide. Total = the deck spec's word target (the TTSConfig's `wpm` × target minutes; the
linter prints both). ±10% warns, ±20% FAILs, per slide **and** in total.

Those two numbers do not add up on their own, and the gap is the format: **the Scripts file is a
straight read, so its word count is the expert's half.** The interviewer's questions are words
that do not exist in it. So

> per-slide budget ≈ the Scripts allocation ÷ 0.82

which lands the total near the deck's word target with the expert on ~80% of it, exactly as
rule 1 wants. Write the budgets into the slide comments **before** writing dialogue; if a slide
then needs more, adjust the budget deliberately and say why — do not let the dialogue drift.

The deck's own per-slide *time* budget (from `kp-audio-brief/scripts/extract_deck.py`) is the
sanity check, not the authority. Where an enumerated slide needs its 20-seconds-per-item floor,
it takes the time from elsewhere; where the deck notes say "hold this one a beat longer", give
it room.

Enumerated slides keep **one interview beat per item** — a four-sign slide is four
question-or-turn beats, not one long turn with four clauses in it. That is what makes the
items land as beats, and it is what gives Step 6 clean SRT boundaries to cut on.

### 5. The prohibitions apply to the page

Same list as `kp-audio-brief` §3, enforced mechanically by `tts_script_lint.py` against the
lists in `srt_drift_check.py` — they are imported, not copied, so the two gates cannot drift:

- no invented specifics: no country, cost figure, percentage, date or institution that is not
  in the deck;
- no podcast furniture ("deep dive", "welcome to", "our sources", "here's where it gets…");
- no reflective outro — no closing question, no invitation to look at other sectors;
- no consumer-outrage vocabulary ("broken", "chaos", "held hostage", "nightmare");
- no backchannel and no crosstalk. One speaker finishes, the other begins. On this path
  backchannel is not a model tic you tolerate — it is a line you chose to type;
- filler stays under 1.5 markers per 100 words;
- at most one metaphor per video, named, and never extended;
- nothing over the Sources slide.

### 6. Pronunciations go in the TTSConfig, never in the dialogue

The dialogue says `PAERA`. The TTSConfig's `pronunciations` map says `"PAERA": "PAH-eh-rah"`,
and the synthesizer puts it in the director preamble. Seed the map from the audio brief
template's §4 terminology table.

Writing `PAH-eh-rah` into a turn puts a phonetic spelling into the SRT, where Step 5b then
reads it as a terminology error. The linter FAILs on it for that reason.

### 7. Questions are the retrieval moments

Where the audio brief engineered a "retrieval moment" or a "hold a beat here" direction, the
interview format gets it for free: **each major slide transition is a question.** A question
before the answer is the retrieval moment, and the turn boundary is the pause the cue author
needs. Where the deck's speaker notes say "land this cell hardest", give the expert a short
turn on it alone rather than a longer one that buries it.

---

## Authoring, start to finish

1. Read the subtopic's `scripts/…_Scripts_v0.«v».md` and count the words per slide. Those
   counts are the budgets — write them into the slide comments before writing any dialogue.
2. Recast each slide's narration as beats. The expert's turns are the script's sentences,
   re-ordered as answers; the interviewer's questions are what those answers are answers *to*.
   Nothing new enters. If you find yourself needing a fact to make a question work, the
   question is wrong, not the deck.
3. Keep the series handoff. It is the last content slide's final sentence and the single
   most-dropped element on the NotebookLM path — here it is simply a line you must type.
4. Lint. Fix the script. Lint again. Only then synthesize.

**Fixes go to the InterviewScript, never to the audio.** Same cardinal rule as the brief, with
a better lever behind it.
