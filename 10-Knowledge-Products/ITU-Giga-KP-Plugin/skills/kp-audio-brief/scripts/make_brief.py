#!/usr/bin/env python3
"""Render a subtopic's audio brief and NotebookLM prompt from its deck.

The brief's §2 is a mechanical transform of the deck — each slide's VO notes become the
segment's approved substance, its text frames become the bullets the hosts work through, and
its remaining notes become the staging direction. Doing that by hand for 22 subtopics is how
the brief and the deck drift apart, which is the drift brief_deck_check.py then reports.

§0, §1, §3, §4 and §5 are the constants from references/audio-brief-template.md, as shipped in
Module 1 v0.7.

    python3 make_brief.py <deck.pptx>                 # writes both files to ../notebooklm/
    python3 make_brief.py <deck.pptx> --runtime 300   # override the deck's stated length

Output is a DRAFT to curate, not a deliverable: check the per-segment clocks, the terminology
rows, and the enumerated-list line marked «…» in the prompt before generating a take.
"""
import argparse
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
sys.path.insert(0, str(Path(__file__).resolve().parents[2] / "kp-deck-builder" / "scripts"))
from extract_deck import (Presentation, budget, is_practice, mmss,  # noqa: E402
                          notes_text, shape_text, vo_words)
from deck_lib import DEMO_SHAPE, PROVENANCE_LEAD                       # noqa: E402

ORDINALS = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth",
            "Tenth", "Eleventh", "Twelfth"]
NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
                "ten", "eleven", "twelve"]

STEM_RE = re.compile(r"^(KP(\d+)_M(\d+)_(\d+\.\d+))_Deck_v0\.(\d+)\.pptx$")
DEFAULT_SECONDS = 300      # Module 1 targeted 5:00 in every brief, whatever the video's nominal length
LENGTH_RE = re.compile(r"Length:\s*~?\s*(\d+)\s*min", re.I)

# Slide furniture: on the slide, never spoken. Same list coverage_check.py ignores, plus the
# per-deck footer and the title card's own chrome.
CHROME = re.compile(
    r"^(?:KP\d+\s*·\s*Government|Length:|Target audience:|www\.itu\.int|"
    r"~?\d+\s*minutes?\s*·|standalone video\s*·|\d+\.\d+\s*·|\d+\.\d+$|"
    r"THE [A-Z ]+ THIS MODULE TEACHES|IN ONE SENTENCE|WHERE WE START)", re.I)

VO_RE = re.compile(r"^\s*VO\b[^:]*:\s*", re.I)
EYEBROW = re.compile(r"^KP\d+\s*·\s*MODULE\s*\d+\s*·\s*VIDEO\s*\d+\.\d+$", re.I)


def paragraphs(text):
    return [p.strip() for p in re.split(r"\n\s*\n", text) if p.strip()]


def split_notes(notes):
    """(substance, staging) — the VO paragraph, and the production directions around it."""
    subs, stage = [], []
    for p in paragraphs(notes):
        if VO_RE.match(p):
            subs.append(VO_RE.sub("", p).replace("\n", " ").strip())
        else:
            stage.append(p.replace("\n", " ").strip())
    return " ".join(subs), " ".join(stage)


LABEL = re.compile(r"^[A-Z][A-Z /-]{2,}$")
NUM = re.compile(r"^\d{1,2}$")


def bullets(texts):
    """Slide copy as the hosts should work through it.

    The decks put a standing label (QUESTION / DELIVERABLE / MISTAKE) and the step numbers of an
    enumerated list in their own shapes, above the line each labels. Left split, a take reads
    "question" aloud as if it were content and loses the numbering the brief then asks it to say
    aloud — so each pair is rejoined here into the one line it is on screen.
    """
    out = []
    for t in texts[1:]:
        t = t.replace("\n", " ").strip()
        if not t or CHROME.match(t):
            continue
        if out and NUM.match(out[-1]):
            out[-1] = f"{out[-1]}. {t}"
        elif out and LABEL.match(out[-1]):
            out[-1] = f"{out[-1]}: {t}"
        else:
            out.append(t)
    return out


def title_of(texts, i):
    """The segment heading.

    Not simply the first shape: on a diagram slide that is a standing label (SERVICE, CAPABILITY)
    and on the recap slide it is the whole single-message sentence, and a heading that reads as a
    word to say aloud is one the hosts say aloud.
    """
    named = [t.strip() for t in texts
             if not EYEBROW.match(t.strip()) and not CHROME.match(t.strip())]
    if any(t.strip().upper().startswith("IN ONE SENTENCE") for t in texts):
        return "In one sentence"
    if not named:
        return f"(slide {i})"
    if LABEL.match(named[0]):
        joined = bullets([""] + named)
        return joined[0] if joined else named[0]
    return named[0]


def single_message(slide1_texts):
    """The one-sentence promise on the title card.

    On the section slide (the title card since split_module_deck.py stopped prepending the
    cover) it is its own shape, the second one left after the kicker, the number and the
    runtime line are dropped as chrome — i.e. straight after the title. On a pre-2026-09
    deck's retitled cover it shared a shape with the KP·module·video line.
    """
    for t in slide1_texts:
        if t.lstrip().upper().startswith("KP") and "\n" in t:
            return t.split("\n", 1)[1].replace("\n", " ").strip()
    named = [t.strip() for t in slide1_texts
             if not EYEBROW.match(t.strip()) and not CHROME.match(t.strip())]
    return named[1].replace("\n", " ").strip() if len(named) > 1 else ""


def load(deck):
    prs = Presentation(str(deck))
    slides = []
    for i, s in enumerate(prs.slides, 1):
        texts = shape_text(s)
        notes = notes_text(s)
        sub, stage = split_notes(notes)
        # A demo-evidence slide (deck_lib.demo_slide & co.) shows a recording or a capture. The
        # hosts describe what its caption names from the VO; they never read the capture's lines,
        # and the provenance line is furniture. A clip's CLIP: note is for the slidecast.
        demo = any(sh.name == DEMO_SHAPE for sh in s.shapes)
        if demo:
            prov = next(j for j, t in enumerate(texts) if t.startswith(PROVENANCE_LEAD))
            texts = [texts[0], texts[prov - 1]]
            stage = re.sub(r"^CLIP:\s*\S+\s*", "", stage)
        slides.append({"n": i, "title": title_of(texts, i), "demo": demo,
                       "texts": [t for t in texts if not is_practice(t)],
                       "practice": any(is_practice(t) for t in texts),
                       "vo_words": vo_words(notes), "substance": sub, "staging": stage})
    return slides


def is_sources(s):
    return s["title"].strip().lower().startswith("sources")


def demo_block(run):
    """The instruction in front of a run of demo-evidence slides: numbered observations, kept in order.

    The narration is a remix, so nothing on screen can be synchronised to words — but the hosts keep
    a numbered sequence they were told to keep far better than a run of loosely related segments."""
    a, b, n = run[0]["n"], run[-1]["n"], len(run)
    return (f"## Demonstration block — slides {a} to {b}\n\n"
            f"**Slides {a} to {b} are a recorded demonstration. Describe them as {NUMBER_WORDS[n]} "
            f"numbered observations, in this order, one after the other. Do not skip, merge or "
            f"reorder them, and describe nothing on screen that is not quoted here.**\n\n"
            f"Host B opens each observation with its number — \"{ORDINALS[0]}\", \"{ORDINALS[1]}\", "
            f"… \"{ORDINALS[n - 1]}\" — and describes it from the quoted words: the thing on screen "
            f"first, then what it means. Host A asks no question inside the block.\n\n")


def segment(s, start, secs, first, last_content, sources, observation=None):
    head = (f"### Slide {s['n']} — {s['title']} · {mmss(start)}–{mmss(start + secs)} "
            f"({secs} s · ~{len(s['substance'].split())} words of substance)\n")
    if observation:
        head += f"**Observation {observation}.** On screen: the recording named by the caption below.\n"
    if first:
        # The title card is now the section slide, and it carries the opener's VO in its notes,
        # so the cold open is a preamble to that substance rather than the whole segment.
        head += ("Cold open. No music, no \"welcome\". Host A names the module, the video "
                 "number and the title; Host B adds the one sentence below. Then move on — no "
                 "preamble about the sources.\n\n> " + s["_message"] + "\n\n")
        if not s["substance"]:
            return head
    if sources:
        return (head + "**This is the close. Perform it as written — it is the wrap-up.**\n\n"
                "The two-host format normally ends by leaving the listener with a thought or a "
                "question. That ending is replaced by this one. Host A speaks one line and the "
                "recording stops:\n\n> **Host A:** \"Sources are in the video description.\"\n\n"
                "**Nothing follows those words.** No summary, no reflection, no question to the "
                "listener, no \"what could you do with this\", no thought to take away. Do not "
                "read URLs and do not name section numbers. If there is time left, the recording "
                "simply ends early — that is correct.\n")
    body = head
    if last_content:
        body += ("**This is the final content segment — the wrap-up the format wants.** Host B "
                 "delivers the message below as the closing statement, once, and then Host A says "
                 "the sources line on the next slide. Do not add a further conclusion after it, "
                 "and do not turn it into a question to the listener.\n")
    body += ("**The substance. Every sentence the hosts say in this segment comes from these "
             "words — discuss them, do not depart from them:**\n\n> "
             + (s["substance"] or "*(No voice-over on this slide — cover the bullets below and "
                                  "move on.)*") + "\n")
    bl = bullets(s["texts"])
    if bl:
        body += "\n**On the slide, for the hosts to work through:**\n\n"
        body += "".join(f"- {b}\n" for b in bl)
    if s["practice"]:
        body += ("\n**On-screen practice box — NOT narrated.** Say nothing about the prompt, the "
                 "companion material, or the listener's own sector.\n")
    if s["staging"]:
        body += f"\n**Staging:** {s['staging']}\n"
    return body


BRIEF = """# AUDIO BRIEF — {kpdot}Module {mod} · Video {sub}
## "{title}"

**This document is the sole authority for the audio.** Everything the hosts say must come from
this file. Do not add examples, statistics, institutions, countries, analogies, or closing
questions that do not appear below.

---

## 0. Production spec

| Item | Value |
|---|---|
| Format | Two hosts: **Host A** (interviewer) and **Host B** (subject-matter expert) |
| Total runtime | **{mins} minutes (±30s). Hard ceiling {ceiling} — a take over {ceiling} is rejected.** |
| Audience | Government Chief Digital Officers, Directors-General, sector ministers, and their senior advisers — in low- and middle-income countries, many working in English as a second or third language |
| Register | Expert policy briefing. Collegial but professional — two senior advisers preparing a minister, not two podcasters reacting to news |
| Companion deck | `{deck}` — {nslides} slides; the audio follows the slide order in §2 |

---

## 1. Framing rule — the single most important instruction

**The listener is the government official, not the citizen being served.**

Address the listener as the person who *runs* these systems and can *fix* them. Use
"in your ministry", "your programme", "your vendor", "your minister".

- ❌ Do **not** open with, or return to, the listener standing at a counter filling in a form,
  waiting in a queue, or being frustrated by a service.
- ❌ Do **not** use "we've all been there" / consumer-complaint framing.
- ✅ The citizen appears only as the person **your** systems burden — third person: "the citizen
  who gave her ID number to the health ministry gives it again, on paper, at the school."

---

## 2. The discussion, slide by slide

**How to use this section.** Each segment below quotes the slide's approved substance. That
quoted material is what the hosts discuss — it is not a summary of something longer, it is the
whole content. Work through the segments **in order**, one per slide, and finish each on a
complete sentence before the next.

In each segment:

- **Host A asks one substantive question** drawn from that segment's material — a question a
  Director-General would actually ask, not a prompt for the next paragraph. One question, not two.
- **Host B answers from the quoted words**, using the slide's bullets as the supporting detail.
- **Everything either host says must be traceable to this section.** If making a point would
  need a fact, figure, country or example that is not written here, leave the point out.
- **When a segment's material is covered, move to the next slide.** Do not fill the remaining
  seconds with elaboration, a second example, or a restatement — a short segment is correct.
- **Do not explain mechanics that are not written here.** No data models, no integration
  mechanics, no "systems can then talk to each other because…". If a sentence explains a
  technical *how* that §2 does not state, cut it.

The clocks are guidance for balance between segments; **the order and the coverage are not.**

{segments}
---

## 3. Register and word choice

The hosts are two senior advisers briefing a minister. Everything below governs *how* §2's
substance is said.

**Severity is carried by the consequence, not by an adjective.** "The same citizen record is
captured four times, in four systems, and none of them agree" is stronger than any adjective and
is the only emphasis this audience credits. When a host wants to convey that something is bad,
they state its cost.

**Characterising the problem — this is the whole vocabulary.** §2 describes systems that do not
work well together. These are the words for saying so. There are no others, and no synonyms of
the right-hand column:

| Say this | Never this |
|---|---|
| fragmented, siloed, not joined up | broken, a mess |
| duplicated, captured twice, re-keyed | chaos, chaotic |
| locked in to one supplier, costly to switch | held hostage, extortionate |
| costly to change, slow to change | a nightmare, insane, crazy |
| inconsistent, out of step | a disaster, hopeless |

- ❌ **No spoken handoff.** No "before the next video", no "run this on your own sector", no
  mention of the prompt or the companion material. That call to action lives in the on-screen
  practice box on the recap slide and is deliberately silent.
- ❌ **No podcast outro.** No "that raises a fascinating question for you to consider", no "look
  around at the other institutions in your life", no invitation to reflect on other sectors or on
  private companies, and never "think about" as a closing turn. The audio ends on the last content
  slide's message plus the sources line.
- ❌ **No standing source attribution.** Never "our sources", "the sources say", "according to
  the sources". The hosts speak from knowledge; a named source may be mentioned once, in passing.
- ❌ **No invented specifics.** No named country, no cost figures, no percentages, no dates,
  no institutions other than those in §2.
- ❌ **No filler.** Remove "you know", "like", "I mean", "basically", "totally", "sort of",
  "right?", "wow", "oh absolutely", "man". Reaction interjections should be rare and short.
- ❌ **No backchannel.** While one host speaks, the other stays silent. No single-word
  confirmations — "Right", "Exactly", "Mm-hmm", "Okay", "Sure", "Wow", "Got it".
- ❌ **No idioms or metaphors.** Much of this audience listens in English as an additional
  language and the audio is subtitled and translated.
- ❌ **No crosstalk or interruption.** One speaker finishes, the other begins. The audio is cut
  to slide transitions, so overlapping speech breaks the edit.
- ❌ **No in-video branding.** ITU compliance rule — no programme name, no channel name, no
  production credit anywhere in the audio.

---

## 4. Terminology and pronunciation — say these exactly

**This table is a word-choice and pronunciation guide for §2's content — it is not content.**
Do not introduce, define, or discuss any term below that does not already appear in §2.

| Say this | Not this |
|---|---|
{terms}
Named sources may be mentioned **once each, in passing**, in a content slide only — never as a
recurring "according to the sources".

---

## 5. Definition of done

The audio is correct when:

1. Total runtime is {lo}–{hi} and never exceeds {ceiling}.
2. A listener can tell, without seeing the slides, where each slide begins.
3. Every enumerated list in §2 is numbered aloud, in the deck's order.
4. **Every claim in the take can be pointed at a line in §2.** Nothing is said that is not there.
5. The final words are the last content slide's message plus the one-line sources note.
6. Nothing is said about the practice box — not the prompt, not the companion material, not the
   listener's own sector.
7. There are audible pauses at the slide boundaries, long enough to cut against.
"""

# Constant rows, kept only when the video's §2 actually uses the term — an unused row is content
# the hosts invent around. Each row is (trigger regex, "say this", "not this"); a trigger of None
# means always keep.
#
# PAERA is always kept. Its name reaches the hosts whether or not §2 uses it — every deck's
# Sources card cites PAERA v1.0, and the Sources segment is rendered as silence, so the trigger
# never saw it. Sixteen of the twenty-two M2-M4 briefs came out with no PAERA row, and three of
# those takes then invented an expansion on air ("Pan-European Architecture",
# "Pay Your Anchored Standards"). This row does not introduce the term; it constrains a term the
# generator uses anyway.
#
# The letters stay spelled out. The 10 Sep rewrite dropped `spell "P-A-E-R-A" the first time
# only` along with the expansion request; 4.3's three rolls under the old row said the name
# correctly and all five rolls under the new one did not (PERA, PEERA, PAERO, PEURA). It is a
# pronunciation hint for the generator — no clean take has ever spelled it on air.
# A video whose own content never uses PAERA does not say it out loud.
#
# The 12 Sep evidence is one-sided. The briefs whose §2 actually uses the name get it right on
# air — 4.4 and 4.6 both do. The ones that only meet it in the §4 row below guess at it, and
# keep guessing: 4.3 (11 manglings in 14 takes), 4.8 (5 in 5), 5.1 (3 in 3) — PERA, PEERA,
# PAERO, PEURA, PORA, PEORA, PEREA, PARE, PEAR, PEA, PAEA, PIERA, "POA", "Kia RRA", "P-EAR",
# "Pan-African Enterprise". A term the hosts have a use for is pronounced; a term handed to
# them in a glossary row with nothing to do is invented.
#
# So the row is chosen by that condition. Twenty-seven of the thirty-five KP1 briefs never use
# the name in their content, and those twenty-seven say "the reference architecture" instead.
# The slides are untouched either way — the title and Sources cards still carry PAERA v1.0;
# this is the voice-over only.
USES_NAME = re.compile(r"\bPAERA\b")

# Replaces the PAERA row where the name is not used. It still blocks a guessed expansion,
# which is the failure the unconditional row was written to stop.
NO_ACRONYM_ROW = (None,
                  "**the reference architecture** — say it in words. This video never says the "
                  "initialism out loud; the slides carry the name, the narration does not",
                  "\"PAERA\" or any attempt at pronouncing it, and any expansion of it")

TERM_ROWS = [
    (None, "**PAERA** — five letters, P-A-E-R-A, pronounced as one word, never spelled out "
           "on air. Say the name and carry on. "
           "Expand it only where §2 expands it; by this point the audience knows the term. "
           "Where §2 does, the one expansion is the Public Administration Ecosystem Reference "
           "Architecture",
     "\"PERA\", \"PEERA\", \"PAERO\", \"PEURA\", \"the PRA framework\", \"Paira\", \"Para\", "
     "\"PR\"; \"Pan-European Architecture\", \"Pay Your Anchored Standards\", or any other "
     "guessed expansion — and no expansion at all in a video whose §2 does not give one"),
    (r"\bProgressa\b", "**Progressa** — pro-GRESS-a, three syllables, double s. It is this "
                        "course's demonstration country and nothing else",
     "\"Progressive\", \"Progresa\" with one s, or PROGRESA the Mexican programme"),
    (r"\blocalis", "**localised** principles — PAERA's principles pointed at your own laws",
     "\"LoCTI principles\" or any acronym; localised is a plain English word here"),
    (r"European Interoperability Framework", "the **European Interoperability Framework**",
     "\"the EU-European Interoperability Framework\""),
    (r"once-only", "the **once-only principle**", "\"the ask-once principle\""),
    (r"\bEnterprise Architecture\b|\bEA\b",
     "**national Enterprise Architecture**; abbreviate to **\"EA\"** only after saying it in "
     "full once. The EA is your country's own architecture; PAERA is the reference architecture "
     "it is anchored to — two different things",
     "\"an EA\" on first use; \"the EA, or PAERA as it is often called\""),
    (r"\bregisters\b|\b(?:the|a|one|national|base|authoritative) register\b",
     "**register** (a list of people or entities)", "\"registry\""),
    (r"building block", "**building block**", "\"module\", \"component\""),
    (r"GovStack", "**GovStack**", "\"Gov Stack\", \"the GovStack platform\""),
    (r"six months", "**six months to a first roadmap** · **four sign-offs**",
     "any other duration or count"),
]

# Rows whose "say this" is KP1's own content — EA anchored to the reference architecture, the
# roadmap's six months, "register" over "registry". Their triggers fire on KP2's words too, and
# there they contradict the deck: KP2 3.6 says "registry" (ISO/IEC 11179), and KP2 names
# Enterprise Architecture only as the companion course. Keyed on the KP, not on content, because
# KP1's shipped briefs already mix "register" and "registry" (2.4, 2.5) and must regenerate
# byte-identical.
KP1_ONLY = {r"\blocalis", r"\bEnterprise Architecture\b|\bEA\b",
            r"\bregisters\b|\b(?:the|a|one|national|base|authoritative) register\b", r"six months"}

PROMPT = """# NotebookLM setup for KP{kp} · M{mod} · Video {sub}

Deck `{deck}` · brief `{brief}`

## Step 1 — Fix the notebook, not just the prompt

NotebookLM weights **sources** far more heavily than the customization box. Thin sources are what
produce improvisation, so the brief carries the deck's full approved substance and it must be the
only thing in the notebook.

1. Use the notebook reserved for video {sub} (`notebooks.json`), or create one used only for it.
2. **Reset its sources.** Remove every earlier brief — an older one left in the notebook gets
   blended into the take.
3. Add `{brief}` as the **only** source.

## Step 2 — Settings

- Format: **Deep Dive** (two hosts)
- Length: **Shorter**
- Language: English

## Step 3 — Customization prompt

```
Follow the source titled "AUDIO BRIEF — {kpsp}Module {mod} Video {sub}" exactly. It is the sole
authority for both what is said and what is not.

This is a policy briefing between two senior advisers preparing a government minister —
collegial, precise, unhurried. Not a podcast. The listener is the government official who runs
these systems, never a citizen at a counter: say "in your ministry", "your programme", "your
minister". Do not open with, or return to, someone queuing or filling in a form.

Work through the brief's section 2 segment by segment, one per slide, in order. In each segment
Host A asks ONE substantive question drawn from that segment's quoted material — the question a
Director-General would ask — and Host B answers using those words, with the slide's bullets as
supporting detail. Finish each segment on a complete sentence before the next.

Everything either host says must be traceable to a line in section 2. If a point would need a
fact, figure, country, institution or example that is not written in the brief, leave the point
out. When a segment's material is covered, move on to the next slide — do not fill the time with
elaboration, a second example or a restatement. A short segment is correct.

{demoline}«ENUMERATION LINE — name the list this video must number aloud, or delete this paragraph.»

Total runtime about {mins} minutes. Never exceed {ceilmins} minutes.

The final content slide IS the ending. Host B delivers its message once as the closing statement
and the recording stops there. Nothing is spoken over the Sources slide. Do not add a wrap-up
after that message, and do not close by turning to the listener: no question, nothing about what
they could do with this, no mention of other sectors, private companies or daily life, no "before
the next video", and nothing about a prompt, companion material or the listener's own sector. If
time remains, end early — that is correct.

When something in section 2 does not work well, the words are: fragmented, siloed, duplicated,
re-keyed, locked in to one supplier, costly to change. Carry the severity by naming the
consequence, never by an adjective. Never say "broken", "chaos", "a mess", "a nightmare", "held
hostage", "extortionate", "crazy", "insane", or any synonym of those. Never say "our sources",
"the sources say", "according to the sources".
Cut all filler — "you know", "like", "I mean", "basically", "right?", "wow". No backchannel:
while one host speaks the other is silent, no "right", "exactly", "mm-hmm". No crosstalk. No
metaphors.

{termline}
```

## Step 4 — Fallback if the box truncates

```
Follow the source "AUDIO BRIEF — {kpsp}Module {mod} Video {sub}" exactly, working through its
section 2 one segment per slide in order. Two senior policy advisers briefing a government
minister, not a podcast. The listener is the official who runs these systems, never a citizen at
a counter. Every sentence must be traceable to the brief — invent no facts, figures, countries or
examples. About {mins} minutes, never over {ceilmins}. No filler, no backchannel, no metaphors, no
crosstalk. End on the last content slide's message plus "Sources are in the video description." —
no reflective question and no handoff.
```

## Step 5 — Check before you accept the take

- [ ] Runtime {lo}–{hi}, and under {ceiling}
- [ ] Opens on the topic, not on a counter queue
- [ ] Every claim traceable to §2 — spot-check three
- [ ] Every enumerated list audible and in deck order
- [ ] Ends on the last content slide's message plus the sources line
- [ ] Nothing about the practice box: no "prompt", "companion material", "your own sector"
- [ ] {nslides} clean segment boundaries you can cut cues against

```bash
python3 …/kp-audio-brief/scripts/srt_drift_check.py \\
  videos/module_{mod}/en/audio/KP{kp}_M{mod}_{sub}_Audio_v0.X.srt --target {secs} --tolerance 45
```

Two or more FAILs: fix the brief and re-roll, never patch the audio.
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("deck")
    ap.add_argument("-o", "--outdir")
    ap.add_argument("--runtime", type=int, help="seconds; default from the deck's title card")
    args = ap.parse_args()

    deck = Path(args.deck)
    m = STEM_RE.match(deck.name)
    if not m:
        sys.exit(f"not a subtopic deck: {deck.name}")
    stem, kp, mod, sub, ver = m.groups()
    out = Path(args.outdir) if args.outdir else deck.parent.parent / "notebooklm"
    out.mkdir(parents=True, exist_ok=True)

    slides = load(deck)
    title = re.sub(r"^\d+\.\d+\s*[—-]\s*", "", slides[0]["title"]).strip()
    slides[0]["_message"] = single_message(slides[0]["texts"])
    if not slides[0]["_message"]:
        sys.exit("no single-message line found on the title card")

    # The title card carries no runtime any more (split_module_deck.py dropped it: a printed
    # "~4 mins" is stale the moment the audio is re-cut). So the brief's target is the house
    # default Module 1 used for all seven of its videos — one number, not a per-video guess the
    # generator cannot hit anyway. --runtime overrides it; a card that still prints a length is
    # honoured, so an older deck keeps working.
    secs = args.runtime
    if not secs:
        hit = LENGTH_RE.search("\n".join(slides[0]["texts"]))
        secs = int(hit.group(1)) * 60 if hit else DEFAULT_SECONDS

    alloc = budget([{"texts": s["texts"], "vo_words": s["vo_words"]} for s in slides], secs)
    last_content = max(i for i, s in enumerate(slides) if not is_sources(s))

    run = [s for s in slides if s["demo"]]
    if run and [s["n"] for s in run] != list(range(run[0]["n"], run[-1]["n"] + 1)):
        sys.exit(f"{sub}: demo-evidence slides {[s['n'] for s in run]} are not one contiguous block")
    parts, clock = [], 0
    for i, (s, a) in enumerate(zip(slides, alloc)):
        seg = segment(s, clock, a, i == 0, i == last_content, is_sources(s),
                      observation=(f"{run.index(s) + 1} of {len(run)}" if s["demo"] else None))
        parts.append((demo_block(run) if run and s is run[0] else "") + seg)
        clock += a

    body = "\n".join(parts)
    names_it = bool(USES_NAME.search(body))
    rows = [NO_ACRONYM_ROW if (pat is None and not names_it) else (pat, say, no)
            for pat, say, no in TERM_ROWS]
    if not names_it:
        # Other rows name PAERA in passing ("localised — PAERA's principles pointed at your own
        # laws"), which puts back the word the row above just removed.
        rewrites = [
            ("PAERA's", "the reference architecture's"),
            ("PAERA is the reference architecture it is anchored to",
             "the reference architecture is the separate thing it is anchored to"),
        ]
        fixed = []
        for pat, say, no in rows:
            for a, b in rewrites:
                say = say.replace(a, b)
            fixed.append((pat, say, no))
        rows = fixed
    shipped = [(pat, say, no) for pat, say, no in rows
               if pat is None or (re.search(pat, body, re.I) and (kp == "1" or pat not in KP1_ONLY))]
    if not names_it:
        left = [say for pat, say, no in shipped if pat is not None and "PAERA" in say]
        if left:
            sys.exit(f"{sub}: a shipped term row still says PAERA: {left[0]!r}")
    used = [f"| {say} | {no} |" for pat, say, no in shipped]
    fields = dict(
        # The titles the hosts can see carry no KP number outside KP1: KP2 2.3 and both 2.4 rolls
        # read it into the cold open ("KP two, module two, video 2.3"). KP1 keeps it so its
        # shipped briefs regenerate byte-identical.
        kpdot=f"KP{kp} · " if kp == "1" else "", kpsp=f"KP{kp} " if kp == "1" else "",
        kp=kp, mod=mod, sub=sub, title=title, deck=deck.name, nslides=len(slides), secs=secs,
        mins=round(secs / 60), ceiling=mmss(secs + 60), ceilmins=round(secs / 60) + 1,
        lo=mmss(secs - 30), hi=mmss(secs + 30), segments=body, terms="\n".join(used) + "\n",
        brief=f"{stem}_AudioBrief_v0.{ver}.md",
        demoline=(f"Slides {run[0]['n']} to {run[-1]['n']} are a recorded demonstration: describe "
                  f"them as {NUMBER_WORDS[len(run)]} numbered observations in the brief's order — "
                  f"\"{ORDINALS[0]}\", \"{ORDINALS[1]}\", … — skipping, merging and reordering "
                  f"none, and describing nothing on screen that the brief does not quote. Inside those "
                  f"slides Host A asks no question; Host B opens each observation with its "
                  f"number.\n\n"
                  if run else ""),
        # The Progressa clause is conditional for the same reason TERM_ROWS are filtered: naming
        # the demonstration country to a video that never uses it invites the hosts to bring it in.
        termline=("Say \"the reference architecture\" in words; never say the initialism "
                  "\"PAERA\" or any expansion of it. " if not names_it else
                  "Say \"PAERA\" as one word — five letters, P-A-E-R-A, never spelled out "
                  "on air — as a name; do not expand it unless the brief does, and if you "
                  "do, the only expansion is \"Public Administration Ecosystem Reference "
                  "Architecture\". ")
                 + ("\"register\" not \"registry\", " if kp == "1" else "")
                 # KP2 2.2 v0.6 turned the decree's "five parts" into "five distinct building
                 # blocks" — KP2's building blocks are the national DPI ones, and 20 of the first 49
                 # KP2 takes said the term while one brief used it. Conditional outside KP1, whose
                 # shipped prompts all carry it.
                 + ("\"building block\" — never \"module\" or \"component\". "
                    if kp == "1" or re.search(r"building block", body, re.I) else "")
                 + ("Say \"Progressa\" as pro-GRESS-a — never \"Progressive\", never "
                    "\"Progresa\". " if re.search(r"\bProgressa\b", body, re.I) else "")
                 + "Invent no figures, dates, countries or examples.",
    )
    for name, tpl in ((fields["brief"], BRIEF),
                      (f"{stem}_NotebookLM_Prompt_v0.{ver}.md", PROMPT)):
        (out / name).write_text(tpl.format(**fields), encoding="utf-8")
        print(out / name)


if __name__ == "__main__":
    main()
