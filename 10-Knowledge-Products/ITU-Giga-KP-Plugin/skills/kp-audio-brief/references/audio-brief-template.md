# Audio brief template

Copy this whole file to `<stem>_AudioBrief_v0.1.md`, then **rewrite only §2** from the deck.
Sections §0, §1, §3, §4 and §5 are constant across every KP video **in the same language** —
change them only when the contract's audience lock or house terminology changes, and when you do,
change them here too so the next video inherits the fix.

**Producing a French brief:** the lines marked `«FR: …»` below assume an English deliverable and
have not been rewritten for French — resolve them here, once, before the first French video, not
per video.

Replace every `«…»` placeholder. Delete this instruction block from the copy.

---

# AUDIO BRIEF — «KP» · Module «N» · Topic «T» · Video «X.Y»
## "«Subtopic title»"

**This document is the sole authority for the audio.** Everything the hosts say must come from
this file. Do not add examples, statistics, institutions, countries, analogies, or closing
questions that do not appear below.

---

## 0. Production spec

| Item | Value |
|---|---|
| Format | Two hosts: **Host A** (interviewer) and **Host B** (subject-matter expert) |
| Total runtime | **«M» minutes «SS» seconds (±10s). Hard ceiling «M:SS+15».** |
| Audience | Government Chief Digital Officers, Directors-General, sector ministers, and their senior advisers — in low- and middle-income countries, many working in English as a second or third language «FR: rewrite for the French deliverable — francophone-Africa officials working in French as their working language, not "English as a second language"» |
| Register | Expert policy briefing. Collegial but professional — two senior advisers preparing a minister, not two podcasters reacting to news |
| Companion deck | «N» slides; audio must align to the slide budget in §2 |

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

## 2. Slide-by-slide time budget and content

*(Per-video. Rewrite this whole section from the deck — see the skill's Step 3.)*

Cover the slides **in order**. Finish each slide's content before moving to the next. End each
slide's segment on a complete sentence — do not let a thought straddle a slide boundary.

**Word budget: about «140 × runtime minutes» spoken words in total** (140 words per minute ×
§0's runtime). Overruns are almost always words, not pace — cut words per segment rather than
asking for faster speech.

### Slide 1 — Title card · 0:00–0:15 (15 s)

Cold open, no music bed, no "welcome to the show". Host A states the topic in one or two
sentences, in this spirit:

> "«Module N, video X.Y — subtopic title.» «The single-message sentence from the deck.»"

Host B adds one sentence naming the stake. Then move on. **No preamble about the sources.**

The title card is the deck's section slide, so it carries the opener's voice-over in its notes:
the cold open is the way *into* that substance, which follows in the same segment, not the whole
segment. Everything after the two opening sentences comes from those notes.

### Slide «n» — «slide title» · «start»–«end» («s» s)

«The slide's own bullets, restated as the content the hosts must cover — nothing more.»

«Where the deck's speaker notes carry a retrieval moment, a highlighted cell or a "hold a beat
longer" direction, translate it into a spoken instruction here.»

### Slide «recap» — "In one sentence" · «start»–«end» («s» s)

The single message, said once, and then stop. No restatement of the video's sections, no
invitation to act.

The recap slide also carries an on-screen practice box. **It is not narrated.** Do not mention
the prompt, the companion material, or the listener's own sector. The box is the call to action; the
voice-over's job here is the single message and nothing else.

### Slide «last» — Sources · «start»–«end» (10 s)

**Nothing is spoken over this slide.** The take ends on the previous slide's message; the
Sources slide is a silent five-second bookend and the links are compiled into the video
description. **Do not read URLs, do not name section numbers, do not summarise the sources**, and
do not close with a question, a reflection, or a thought for the listener — the recording simply
stops.

*(Changed 6 Sep 2026. The brief used to require a spoken "Sources are in the video description."
The two-host generator never produced it — not once in ~20 takes across five brief revisions —
while reliably appending a reflective outro instead. The line was a kit convention, not an ITU
requirement, so it was dropped rather than defended. `kp-slidecast`'s `trim_outro.py` removes the
appended outro at build time.)*

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
  language and the audio is subtitled and translated. «FR: this rationale
  is English-specific — rewrite for the French take (e.g. plain, unambiguous French for readers of
  the translated/subtitled English version, or drop the clause if it no longer applies)»
- ❌ **No crosstalk or interruption.** One speaker finishes, the other begins. The audio is cut
  to slide transitions, so overlapping speech breaks the edit.
- ❌ **No in-video branding.** ITU compliance rule — no programme name, no channel name, no
  production credit anywhere in the audio.
- ❌ **The show-open is accepted residue.** "Welcome to today's deep dive" and similar
  openers are not re-rolled for (decided 8 Sep 2026) — `trim_outro.py` cuts them where it can
  reach them, and where it cannot they ship. Do not add a ban for them here: five brief
  revisions did not move the rate below 83%, and the dead rule cost the rules around it their
  authority.

---

## 4. Terminology and pronunciation — say these exactly

**This table is a word-choice and pronunciation guide for §2's content — it is not content.**
Do not introduce, define, or discuss any term below that does not already appear in §2. When a
constant term below is not used by this video's §2, delete its row from the copy — hosts have
imported unused table terms and invented content around them. **The PAERA row is the exception:
keep it in every brief.** The name reaches the hosts whether §2 uses it or not — every deck's
Sources card cites PAERA v1.0 — and the takes that had no PAERA row invented an expansion on
air. The row constrains a term the generator uses anyway; it does not introduce one. It does
not ask for the expansion either — across KP1 only 1.5's §2 introduces PAERA, and every later
video is talking to an audience that already knows the term. **It does spell the letters out**,
which the 10 Sep rewrite dropped: 4.3's three rolls under the old row said the name correctly and
its five rolls under the new one said PERA, PEERA, PAERO and PEURA. The spelling is a hint to the
generator, not a direction to the hosts — no clean take ever spelled it on air.

| Say this | Not this |
|---|---|
| **PAERA** — five letters, P-A-E-R-A, pronounced as one word, never spelled out on air. Say the name and carry on. Expand it only where §2 expands it; by this point the audience knows the term. Where §2 does, the one expansion is the Public Administration Ecosystem Reference Architecture | "PERA", "PEERA", "PAERO", "PEURA", "the PRA framework", "Paira", "Para", "PR"; "Pan-European Architecture", "Pay Your Anchored Standards", or any other guessed expansion — and no expansion at all in a video whose §2 does not give one |
| **Progressa** — pro-GRESS-a, three syllables, double s. It is this course's demonstration country and nothing else | "Progressive", "Progresa" with one s, or PROGRESA the Mexican programme |
| **localised** principles — PAERA's principles pointed at your own laws | "LoCTI principles" or any acronym; localised is a plain English word here |
| the **European Interoperability Framework** | "the EU-European Interoperability Framework" |
| the **once-only principle** | "the ask-once principle" |
| **national Enterprise Architecture**; abbreviate to **"EA"** only after saying it in full once. The EA is your country's own architecture; PAERA is the reference architecture it is anchored to — two different things | "an EA" on first use; "the EA, or PAERA as it is often called" |
| **register** (a list of people or entities) | "registry" |
| **building block** | "module", "component" |
| **GovStack** | "Gov Stack", "the GovStack platform" |
| **six months to a first roadmap** · **four sign-offs** | any other duration or count |

«Add any per-video terms here — programme names, country names, institution names — with the
pronunciation you want.»

«FR: this whole table gives English terms and English pronunciation guidance (spelling out
"P-A-E-R-A", "EA" as an abbreviation, etc.). A French brief needs its own terminology table —
decide per term whether it stays in English (as many technical acronyms do in French usage) or
takes a French rendering, and how it's pronounced — rather than reusing this table verbatim.»

Named sources may be mentioned **once each, in passing**, in a content slide only — never as a
recurring "according to the sources".

---

## 5. Definition of done

The audio is correct when:

1. Total runtime is within ±10s of §0.
2. A listener can tell, without seeing the slides, where each slide begins.
3. Every enumerated list in the deck is numbered aloud, in the deck's order.
4. Nothing is said that is not in this brief.
5. The final words are the recap slide's single message. Nothing is spoken over the Sources
   slide.
5a. Nothing is said about the practice box — not the prompt, not the companion material, not the
   listener's own sector.
6. There are audible pauses at the slide boundaries, long enough to cut against.
