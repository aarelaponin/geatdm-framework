# Status: KP2 Modules 1–3 video track (English)

**Date:** 13 September 2026 · **Scope:** `videos/module_{1,2,3}/en/`, steps 3–7 of the video track.
**Method:** briefs via `kp-audio-brief/make_brief.py`, takes via `take_until_pass.py`
(`kp-notebooklm-audio` → `kp-scribe-transcribe` → `trim_outro` → `srt_drift_check` + `coverage_check`).

## Verdict

**The batch ran to the end of Module 3 on 14 Sep. Every video has takes, and none is accepted.**
Nothing is cued or assembled. Every passing take was read in full; the table is that read.

- **Candidates** (content right, flaws noted): 1.2 v0.5, 2.1 v0.2, 2.6 v0.6, 3.1 v0.4, **3.2 v0.2**
  (the strongest), 3.3 v0.4 (pending a RACI listen).
- **Candidates at KP1's bar only:** 1.4 v0.5, 2.5 v0.6, 3.5 v0.6, 3.6 v0.6.
- **Re-roll:** 1.5, 1.6, 1.7, 2.2 (building-block prompt, since fixed), 2.3 ("KP two", since fixed),
  3.4.
- **Unresolved after three tries:** 1.1 (counter framing; the deck's slide-2 hook is the likely
  source, which is the author's call), 1.3, 2.4 (KP-number leak, since fixed).

Module 2 got better once the prompt and title were fixed, and Module 3 better still. The
failures that remain are invented specifics, stacked metaphors, "the brief" / "these sources" as
attribution, and the show-open kept whenever it names the topic. A phrase list cannot catch that
class; see **The bar question**.

| Video | Brief | Takes | Audit | Read-through | Decision |
|---|---|---|---|---|---|
| 1.1 | v0.1 | v0.1–v0.8 (pilot + 3 re-roll tries, 14 Sep) | **unresolved after 3 re-rolls**: v0.4 "our sources"; v0.6 framing ("imagine you're standing at a counter"); v0.8 6:09, "chaos", "think about" | citizen/counter framing in 2 of 4 rolls. The deck's slide-2 hook ("the citizen still gives her ID number to the health ministry on paper…") is where it starts | **fix the source**: the brief is generated from `build_kp2_module1_deck_v01.py`'s slide-2 notes, so that is a content decision for the author |
| 1.2 | v0.1 | v0.1–v0.4 (2 tries); **v0.5 = v0.3 re-trimmed 14 Sep** | v0.4 now **FAIL** reflective close; v0.5: 1 fail ("deep dive" residue), coverage clean, 4:33 | v0.4 ended on the banned outro ("consider how this explains… the private sector", then a private-clinic analogy). v0.5 ends on content ("…collapses exactly at that missing layer"). Still has "let's unpack this… today's deep dive" at 0:29, plus a power-adapter and a telephone metaphor | **candidate: v0.5**, decide ship or re-roll |
| 1.3 | v0.1 | v0.1–v0.11 (3 tries 13 Sep + 3 re-roll tries 14 Sep) | **unresolved after the re-roll**: v0.7 "nightmare"; v0.9 framing + "think about"; v0.11 "unpacking", "our sources", "think about", "chaotic" | 13 Sep v0.5 read the brief aloud; "our sources" in 3 of 6 rolls; framing in 1 | fix the source (slide notes) or accept KP1's bar |
| 1.4 | v0.1 | v0.1–v0.5 (3 tries) | v0.5 **clean** (4:34) | opens mid-exchange ("Yeah, because it's a huge issue"); ends "Wow. Yeah. … the ultimate shortcut", not on the recap message | ship with a weak open/close, or re-roll |
| 1.5 | v0.1 | v0.1–v0.4 (2 tries, 14 Sep) | v0.4 passed; now **FAIL** ("chaotic", "this mess") | teaser, then "welcome to today's deep dive" at 0:25; addresses "a huge corporate initiative"; city / water-pipe / plumbing metaphors stacked | re-roll (after 1.1, 1.3) |
| 1.6 | v0.1 | v0.1–v0.2 (1 try, 14 Sep) | v0.2 passed; now **FAIL** ("unpack this", "for you listening" closer) | invents a Department of Motor Vehicles example and "your organization just dropped millions"; quotes the brief as a person ("the bus quote… He says"); ~25 s dinner-party analogy; ends "the massive takeaway for you listening" | re-roll |
| 1.7 | v0.1 | v0.1–v0.2 (1 try, 14 Sep) | v0.2 passed ("deep dive", "welcome to" residue) | opened "Welcome to today's deep dive." with no head cut (trim bug, fixed below); "filling out some online form" framing; invents 1.3 million people, France/Germany, a Spain→Italy business case, a doctor; ends "It is just about adopting the framework", not the recap message | re-roll |
| 2.1 | v0.1 | v0.1–v0.2 (1 try, 14 Sep) | v0.2 **clean** (5:38) | best KP2 take so far: three disguises and the decree's functions numbered in order, ends on content. Flaws: invented "millions of dollars" opener; "central nervous system" and train-ticket metaphors; at 3:50 the hosts recite the §3 vocabulary as dialogue ("fragmented, siloed, and duplicated." / "And rekeyed and locked into one supplier.") | **candidate: v0.2** — ships at KP1's bar |
| 2.2 | v0.1 | v0.1–v0.6 (3 tries, 14 Sep) | settled on runtime (v0.6, 3:54, −66 s); tries 1–2 "nightmare" | opens on "And our mission today is really to show you…"; calls the decree's **five parts** "five distinct building blocks" (prompt injection, fixed below); "the sources talk about"; ends on content | re-roll with the fixed prompt |
| 2.3 | v0.1 | v0.1–v0.5 (3 tries, 14 Sep; try 1 on the old prompt) | settled on runtime (v0.3, 3:30, −90 s); now **FAIL** "kp two" | the most brief-faithful take so far: both lists numbered aloud in order, handoff to the draft articles, ends on "Sources are in the video description". But the cold open says "**KP two**, module two, video 2.3" (the brief's title read aloud); "putting a confirm on every citation" is garbled | re-roll; strongest candidate otherwise |
| 2.4 | v0.1 | v0.1–v0.4 (3 tries, 14 Sep; tries 1–2 on the old brief title) | **unresolved**: v0.1 "a disaster" + "kp2"; v0.2 3:50 + "kp2"; v0.4 3:44, "unpacking", "think about" | the KP-number leak that forced the title fix; try 3 (new title) had none | re-roll on the fixed brief |
| 2.5 | v0.1 | v0.1–v0.6 (3 tries, 14 Sep) | v0.6 passed (4:50, "unpacking" residue) | content right (cover note's direct ask + both enactment routes; two-track memo's defer / fill / resolve hierarchy); ends on content. Flaws: opens mid-exchange ("Yeah, the really crucial stuff…"); invents "fifty million dollars", a "five hundred page" package, "frozen for two years"; "a really fascinating briefing" as source attribution; "sticky note", "boom", "minefield" | candidate at KP1's bar only |
| 2.6 | v0.1 | v0.1–v0.6 (3 tries, 14 Sep) | loop: unresolved (v0.2 coverage MISS slide 5; v0.4 "nightmare" ×2; v0.6 "registry" only). **v0.6 re-audited clean** after the registry row became KP1-only (4:52) | good content: coverage ("no less") and scope discipline ("no more"), then both mechanisms (mandatory connection article, once-only obligation) in order; ends "It becomes a verified configuration." Flaws: opens "Mm-hmm. And, uh, why you cannot simply hand…" (the head cut is sentence-correct, but the next speaker continues the marker's thought); ~15 s restaurant / health-inspector metaphor; invented "legal umbrella… new API endpoint" | **candidate: v0.6** |
| 3.1 | v0.1 | v0.1–v0.4 (2 tries, 14 Sep) | v0.4 passed (5:32, "deep dive" residue) | faithful: the Operating Authority as a standing body (8–15 → 30–80 staff), why not a vertical ministry, the regulator/operator split and its incentive trap, members' third hat; ends "name an owner… before the first member joins". Flaws: "today's deep dive is geared entirely toward you" at 0:24; invented "donors are thrilled" / "paperwork error" opener; "administrative ghost town". **Listen for "Progressé"** (the SRT spelling; may be a mispronunciation) | **candidate: v0.4** |
| 3.2 | v0.1 | v0.1–v0.2 (2 tries, 14 Sep) | v0.2 passed (4:27; "deep dive", "welcome to", "unpacking" residue, untrimmed) | the most faithful take yet: both failure modes (top-heavy / bottom-heavy), the three tiers in order plus the Operating Authority underneath, escalation "one level up… at the lowest possible tier"; ends on "Sources are in the video description." Flaws are all in the first 30 s: "Welcome to this deep dive… we're unpacking" kept because the line names the topic; the §3 vocabulary recited; invented "going rogue… incompatible server" example | **candidate: v0.2** (opening is the one flaw) |
| 3.3 | v0.1 | v0.1–v0.4 (3 tries, 14 Sep; tries 1–2 ran 3:45 and 2:52) | v0.4 passed (4:58, "deep dive" residue) | faithful: the four roles in order, the iron rule ("never two… never zero"), all six recurring decisions, the regulator/operator rows, the admission example. Flaws: "spoiler alert", "let's unpack those", car/axle metaphor, §3 vocabulary recited. **Listen for "RACI"**: the SRT reads "RCI" all five times; if the hosts drop the A, the brief needs a pronunciation row | **candidate: v0.4**, pending the RACI listen |
| 3.4 | v0.1 | v0.1–v0.4 (2 tries, 14 Sep; try 1 filler 2.9/100w) | v0.4 passed (5:17, "deep dive" residue) | weak. The eight obligations are neither numbered aloud nor all named (seven). Opens mid-phrase on "the… reference architecture documents you shared with us today"; "these sources" ×2; invented Transport Authority / Population Registry example; plumbing metaphor extended; "fragmented mess" slips the "a mess" / "this mess" entries. Right: provider/consumer asymmetry, the member agreement signed by the CIO | re-roll |
| 3.5 | v0.1 | v0.1–v0.6 (3 tries, 14 Sep) | v0.6 passed (5:07, "deep dive" residue) | content right: four standing Technical Working Groups (security, APIs, platform operations, semantics), semantics as the hardest problem with the "enrolment" example, standing vs project teams, recommend-up to the Steering Committee. Flaws: says "**the brief**" five times (the source attribution tic in a new form, not gated); invented "20 more agencies by the end of the year" and a token-vs-certificate example; electrical-outlet metaphor; calls the four groups "a governance pack" (wrong) | candidate at KP1's bar |
| 3.6 | v0.1 | v0.1–v0.6 (3 tries, 14 Sep; try 2 ran 6:37) | v0.6 passed (5:16, "deep dive" residue) | content in order: standards portfolio owner inside the Operating Authority, change control by one accountable body, the conformance regime (three assurance levels, transition period, two-year recertification), the semantic registry (operator stewards, sector owners own), the governance pack's four checks numbered. Flaws: invented "$100 million… three years later" opener; "Welcome in today's deep dive" at 0:23, untrimmed ("welcome in" is not a SHOW_OPEN form); "in my experience"; "organizational DNA"; §3 vocabulary recited | candidate at KP1's bar |

**Passing the audit does not mean a take is shippable.** Two of the four takes passed the gate but
still fail §1/§3 of their own brief. Read every passing take in full before cueing it.

`notebooklm/takes.log` has every roll. Only takes of record get committed (KP1 practice), so the
intermediate `Audio_v0.*` files in `module_1/en/audio/` are working files.

## Kit changes, 13 Sep (committed in 33778b4)

1. **`make_brief.py`: KP1's content rows are keyed to KP1.** The EA-anchored-to-the-reference-
   architecture row, "six months to a first roadmap", "localised principles", and "register, never
   registry" (both the §4 row and the prompt's termline) fired on KP2's words and contradicted KP2's
   decks ("learner registry", ISO/IEC 11179 "semantic registry"). They are now `KP1_ONLY`.
   **Regression check: all 35 KP1 brief + prompt pairs regenerate byte-identical.**
   The PAERA / "the reference architecture" row is kept for KP2, because KP2's Sources cards cite
   PAERA v1.0 just as KP1's do.
2. **`srt_drift_check.py`**
   - `NOT_A_NAME` gains `API, APIS, ISO, EU, ICT, ID`. On 1.1's first roll, "the shared digital bus
     and API standards" failed as a PAERA name slip.
   - `CITIZEN_FRAMING` gains `as a citizen, you` (1.1).
   - `BANNED_PHRASES` gains `substantive question`, `director general would ask` (1.3).
3. **`trim_outro.py`: the head cut no longer starts the video mid-sentence.** When the show-open
   marker's sentence ran on into the next cue, the video opened on "uh, IT architecture
   guidelines…". The cut now walks forward to the sentence end (capped at 3 cues). The furniture
   check still anchors on the marker cue. Otherwise the run-on half's subject words make it read as
   content, and nothing gets cut. New test in `test_trim_outro.py`; all tests pass.
   Takes 1.1 v0.2 and 1.2 v0.2 were trimmed before this fix.

## 14 Sep: the outro gap is fixed (uncommitted)

`srt_drift_check.REFLECTIVE_CLOSE` gains `consider how … you`. The announced-close cut takes the
first match in the tail window, and on 1.2 v0.3 that was "ask yourself" at 4:49. The turn two cues
earlier matched nothing. Before and after dry-runs of `trim_outro` and the reflective checks over
all 59 transcripts on disk (every KP1 take plus KP2 1.1–1.4) differ **only** on KP2 1.2. New test
in `test_trim_outro.py`. Batch resumed: 1.5–1.7, then re-rolls of 1.1 and 1.3, then Modules 2
and 3.

Gate additions 14 Sep (uncommitted), each a sibling of an existing entry: `chaotic`, `this mess`
(§3 bans both; the substring "chaos" does not match "chaotic"), `unpack this`, and the closer
`for you listening`. Shipped KP1 2.1 v0.15 and 2.2 v0.19 would fail on the first two; they are not
re-opened.

`trim_outro` head cut, 14 Sep (uncommitted): it only tried the **last** show-open marker. 1.7 v0.2
said "Welcome to today's deep dive." at 0:00 and "So on this deep dive, we are looking at how…" at
0:20. The second marker's cue reads as content, so nothing was cut. Earlier markers are now tried in
turn, but only when the marker cue ends the sentence by itself. The first cut of this fix took 1.4
v0.1's hook with it ("welcome to the Deep Dive. So if you are an official…," shared a cue). A
before/after sweep of all transcripts changes only three takes, each losing a standalone "Welcome
(back) to the Deep Dive.": KP1 1.3 v0.2 (not the take of record) and KP2 1.7 v0.1/v0.2. Tests
added for both cases.

**Prompt fix, 14 Sep (uncommitted).** `make_brief.py`'s prompt term line always said "\"building
block\" — never \"module\" or \"component\"". In KP2 that pushed the hosts from "parts" and
"components" to "building blocks", which KP2 reserves for the national DPI building blocks: 20 of
the first 49 KP2 transcripts said the term, and only 1.4's brief uses it. The clause is now
conditional on §2 using it, outside KP1. KP1: all 35 pairs still byte-identical. KP2: every brief
unchanged; 18 prompts lose that one clause (1.4 keeps it). Installed in place at v0.1 (atomic
rename), the same in-place practice as KP1's regenerations. 2.3's first try had already read the
old prompt. `module_5`'s 5.6 prompt belongs to the other session and was not touched.

Gate addition, 14 Sep (uncommitted): KP numbers ("kp two", "kp2", …) are banned phrases. It's
rare (2 of ~110 transcripts, the other being KP1 1.7 v0.2, never shipped), so the gate rather
than a change to the brief title, which the prompt uses to name its source. **Revised the same
hour:** both 2.4 rolls then said "KP2 module two, video 2.4", so the title is fixed at source too.
Outside KP1, `make_brief.py` drops the KP number from the brief's `# AUDIO BRIEF —` heading and
from both places the prompt quotes it. KP1 is still byte-identical; the 38 KP2 files were
reinstalled in place (atomic rename). Only the §0 deck filename still reads `KP2_…`.

`srt_drift_check`, 14 Sep (uncommitted): the "register not registry" terminology row applies to
KP1 transcripts only (by filename). KP2's decks use both words, and 2.6 v0.6 failed on it alone.
KP1 transcripts are still checked.

**The bar question.** No KP2 take that passed the gate is clean on a full read: all of Module 1's
failed it, and the Modules 2–3 candidates carry flaws. The failures are invented examples, stacked
metaphors, off-audience framing, and the brief read aloud. Phrase lists cannot catch that class. Either accept KP1's bar (KP1 shipped takes
with the same kind of residue) or budget more re-rolls with a human read on each pass.

## Patterns (19 videos, ~60 rolls)

- **"the brief"** as source attribution: 12 times in 4 KP2 transcripts (3.5 alone says it five
  times). The same tic as "our sources", not gated; hold until the bar is decided.
- **The §3 word list recited as dialogue** ("fragmented, siloed, duplicated… costly to change") in
  2.1, 3.2, 3.5, 3.6. The brief's own vocabulary table is being performed.
- **Invented opening scale figures** ("$100 million", "fifty million dollars", "millions") in 2.1,
  2.5, 3.6, 1.5 (and "multimillion-dollar", 3.4).
- **"Welcome in"** (3.6) is not a `SHOW_OPEN` form.
- **Runtime swings widely**: 2:52 to 6:37 across the batch, and 3:45 → 2:52 → 4:58 on one brief (3.3). The "Shorter" setting is not holding KP2
  near 5:00 the way it held late KP1.
- **"our sources"** in 1.3 tries 1 and 2, despite §3 and the prompt.
- **Closing turn to the listener survived trimming** when phrased "consider how this…" (1.2 v0.4).
  Fixed 14 Sep, see above.
- **Show-open that names the topic is kept** ("Welcome to today's deep dive… the once-only promise").
  That is by design (4.1's "Meet Progressa" must survive), but it leaves the residue on air.

## Resume

```bash
cd 10-Knowledge-Products/KP2-GIF/videos
T=../../ITU-Giga-KP-Plugin/skills/kp-notebooklm-audio/scripts/take_until_pass.py
for v in 1.5 1.6 1.7; do python3 $T module_1/en $v; done
for v in 2.2 2.3 2.4; do python3 $T module_2/en $v; done
python3 $T module_3/en 3.4
```

One writer per module, one generation in flight. Decide the bar first; it decides whether the
candidates above are re-rolled too. Then cues (`kp-slidecast/scripts/draft_cues.py` + a read) and
assembly for the accepted takes, then the tracker.
