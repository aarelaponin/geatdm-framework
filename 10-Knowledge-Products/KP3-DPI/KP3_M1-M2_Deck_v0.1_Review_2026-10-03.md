# Review: KP3 Module 1 and 2 decks v0.1, against the v0.2 scripts, and from the learner's side

**Date:** 3 October 2026 · **Reviewed:** `KP3_M1_Deck_v0.1.pptx` (83 slides, videos 1.1–1.10) and `KP3_M2_Deck_v0.1.pptx` (51 slides, videos 2.1–2.6), against `build_kp3_module1_v02.js` / `build_kp3_module2_v02.js` and their generated bundles `KP3_Module{1,2}_Script_Bundle_v0.2.md`.
**Method:** kit `vo_diff.py --stats` on Module 1 plus an independent diff of every notes `VO:` paragraph against the bundle script for both modules. Every quoted on-screen string in the bundle's slide cues was checked against the slide text. `qa_bundle.py` was run on both `.js` files. All 134 slides were rendered through LibreOffice and inspected. Font sizes were read from the pptx. Each video was then read through as a Strategist (M1) and as an Architect (M2) would meet it.

## Verdict

**Fidelity:** the decks are clean, faithful renders of the scripts. There are **zero VO mismatches** across all 16 videos, every video has its practice box (none narrated), the eight-slide grammar is the same throughout, and `qa_bundle.py` reports 0 hard failures on both modules. You don't need to fix anything on the deck side before narration.

**Learner's side:** **Module 2 works well as it is. Module 1 needs a light condense.** The length of each video isn't the problem. Every video runs 450–550 spoken words, about 3–3.6 minutes of VO before NotebookLM expands it, which is in line with tightened KP1. The problem is **density and register**. Module 1 is written for a middle manager, but it reads section numbers aloud, defends where its method came from, walks through scoring arithmetic and shows working codes (AF-DAT-02, DG-05, V-03, D2.2). It also leaks production status into the product ("It has not been recorded yet", "STORYBOARD — NOT YET RUN"). On screen, the slides are tidy and on template. But tables are too small for a phone, most slides leave the bottom third empty, and about 60% of content slides use the same "bold label + grey line" row pattern.

You can stay close to the scripts: Tier 1 below changes only sentences, not slides. Tier 2 cuts or merges six slides and is where the real condensing is.

## What checks out

| Check | Result |
|---|---|
| VO in notes vs script | 16/16 videos word-for-word. `vo_diff.py`: "OK — zero mismatches, one practice box per video, none narrated". |
| Words per video | M1: 1.1 547 · 1.2 473 · 1.3 479 · 1.4 498 · 1.5 465 · 1.6 484 · 1.7 481 · 1.8 462 · 1.9 460 · 1.10 467 = **4,816**. M2: 2.1 464 · 2.2 464 · 2.3 460 · 2.4 452 · 2.5 453 · 2.6 450 = **2,743**. |
| On-screen text vs slide cues | All matches except light, deliberate shortenings (1.7 s53 "DPI" for "digital public infrastructure"; 2.2 s15/s16 and 2.5 s38 compressed row wording). None changes the meaning. |
| Structure | Every video: title card → hook → four content slides → recap with practice box → Sources. The script specifies 7 slides; the deck adds the no-VO title card, which is the accepted pattern since 9 Sep. |
| Worked-example consistency | Spot-checked against `examples/`. DG-03/04/05, the V-01–V-04 sessions and the maturity scores all match E2, E4 and E5. |
| `qa_bundle.py` | 0 hard failures; one soft warning per module ("Before the next video." in the practice box, accepted). |
| Render | No overflow, no clipped text, no leftovers, Arial throughout. |

## Findings from the learner's side, ranked

### 1. Production status reaches the viewer (M1 1.4, 1.7; M2 2.3–2.6)
The VO says "It has not been recorded yet" (1.4 s32, 1.7 s56) and "Progressa's description exists today as a specimen, not yet run; it will be imported when the product is chosen" (2.3 s24). The screen says "STORYBOARD — NOT YET RUN" (M1) or "Storyboard — not yet run." (M2, five slides). To a learner this reads as an unfinished course, not as honesty.

The content of those slides is actually the most useful part for a learner, because it's the pass criteria. **Reframe, don't remove:** label the slide "What a good run shows" or "How to check your own run". Keep the steps, keep "it passes when…". Drop the recorded/not-recorded sentence from the VO. The rule that no line claims anything ran still holds, because "a good run shows X" claims nothing ran. 2.3's last VO sentence becomes "Progressa's description is a worked example" (the guide already marks the specimen status).

### 2. Module 1 reads its references aloud
About 23 section or annex numbers are spoken in Module 1's VO, for example "PAERA's sections 3.1 and 3.4.1 to 3.4.4 describe…" (1.2) and "its section 5.3 … its section 5.4 … its section 3.1.3" (1.3 s24). For a listener these are noise, and they're already on the Sources slide and in the YouTube description. **Say "PAERA" or "the GovStack specification" in the VO and keep the numbers on screen and in Sources.** This saves about 60 words across M1 and makes every video easier to follow. Module 2 already mostly does this.

### 3. Method provenance is defended on camera (1.2, 1.3, 1.7, 1.10)
"That reading is the team's own" (1.2), the whole of 1.3 s24 "Where the nine steps come from" (137 words), "the rule … is the team's own" (1.7), "That choice is this knowledge product's own" (1.10). The honesty is right, but "the team" is never introduced, so the learner can't tell who that is. And a full slide of provenance in 1.3 is the least useful minute in the module for the person commissioning the assessment. **Say "this course's" instead of "the team's"**, and shrink 1.3 s24 (Tier 2). Keep the ITU naming marked place: the one provenance sentence can carry it.

### 4. The Payments thread is the hardest thing to follow in Module 1
PayPro, "the Payments block", its "payer bank" and Linkup membership are explained in 1.1 s8, 1.8 s64, 1.9 s72 and 1.10 s78/s79, each time slightly differently. A Strategist hearing 1.1 is told about a block they won't meet until 1.10, and in a cold-open video. **In 1.1, say only "No payments service for government is joined to the data exchange yet."** Keep the payer-bank detail for 1.10 only.

### 5. Same list shown twice in a row (1.2 s13 → s14, and again 1.5 s37)
1.2 shows the five domains as a picture (s13), then lists the same five again with codes (s14), and the VO defines Access twice. 1.5 s37 lists them a third time as Q-GOV…Q-IDN. **Put the codes on the s13 picture and merge s14 into it** (Tier 2). In 1.5, the s37 row list can become a single line ("Q-GOV, Q-ACC, Q-DAT, Q-INT, Q-IDN — 93 questions over the same 26 sub-components").

### 6. A case study that argues against the single message (1.9 s71, Estonia)
The video's message is "build identity and payments first". The Estonia slide then shows services first (2000), exchange (2001), identity (2002), and spends 108 words explaining why that isn't a counter-example. A learner comes away less sure of the rule. **Cut it from the video** and keep it in the course guide, where the nuance has room (Tier 2).

### 7. Cross-course references in a standalone KP3 video (2.4 s31, 2.5 s40)
"a Progressa contract from KP2" and "a member of Linkup since KP2" assume the viewer has seen KP2. **Drop "from KP2" and "since KP2".** The facts stand without them.

### 8. Dense nuance that belongs in the guide (1.7 s53, 2.2 s15, 2.4 s31)
- 1.7 s53: the closing caveat about PAERA 5.1/5.4 levels measuring one organisation, plus the Compass's DPI row. That's about 45 words a Strategist doesn't need in order to score.
- 2.2 s15: Level 1 listing vs the Architecture spec §5.5.4 GovMarket threshold. That's about 50 words; keep "When you quote a threshold, name its source" on screen.
- 2.4 s31 "What is not published": the server-to-server identity gap. It's accurate and important for implementers, but in this video it is mainly an editorial rule ("named as Progressa's own contract"), not something the viewer does. Move it to the guide (Tier 2).

### 9. Flow seams
- **1.7 → 1.8.** The module turns from *assessing* (steps 1–5) to *what to build* (blocks, order, first proof) without saying so. A learner who has just been told "nine steps" doesn't know where 1.8–1.10 sit. Add one clause to the 1.8 hook: "With the table scored, the money question comes next: whose system is it?"
- **1.3 previews steps 6–9**, which Module 1 doesn't teach. One signpost sentence ("Module 6 takes steps six to nine") would help. Signposting was accepted as consistent with the standalone rule on 3 Sep.
- **Step 1 (frame)** has no video of its own. It lives on 1.2 s15. Have 1.2's VO say "This page is step one of the method" so the count adds up in 1.3.
- **"Two building blocks: Registration and Digital Registry" (PAERA Annex 1)** is taught in full three times: 1.8 s62, 1.10 s77 and 2.1 s8. Each video is standalone, so a one-sentence version is enough in 1.10 and 2.1.
- **1.6:** "four sessions in week eight", but the slide shows three points. Either say "three of the points settled in those sessions" or leave the count out.
- **2.1 s7:** "On screen the parent meets the guide, the form…" sounds like it refers to the video's own screen. Change to "In the service, the parent meets…".

Module 2's flow is good. The order goes block → judging a product → drafting → checks → decision → portability, and each hook sets up a real problem. 2.1 bridges well from the Strategist register to the Architect register.

## Findings on the slides

### 10. Text too small for the phone test (blocks narration on nine slides)
The bundle's own spec asks for body text at Arial 18 pt, and the KP1 deck review set ≥15 pt for tables. The deck has:
- **every table at 13 pt**, headers included: 1.1 s8, 1.2 s15, 1.3 s22 and s23, 1.7 s55, 1.8 s64, 1.9 s72, 1.10 s79, 2.2 s16;
- row sub-lines at 15.5 pt;
- recaps at 25 pt (spec: 28 pt);
- the 2.5 s38 flow boxes at about 12 pt.

1.1 s8 and 1.10 s79 are the worst cases: 5 rows × 3–4 columns of sentences, held for about 60 seconds. Raise tables to ≥15 pt by shortening the *Reason* / *Specification* cells. The VO already says the detail, so the screen can carry short phrases ("78% adults; no child IDs; unused by education").

### 11. Empty bottom third, and widely spaced rows
Rows are spread over a fixed top area, so 2- and 3-row slides look sparse, with large gaps between small lines. Examples: 1.1 s5, 1.10 s77, 2.1 s5 and s7, 2.4 s30 and s32, 2.5 s37 and s40, 2.6 s45, s46 and s48. Hook slides put two small grey lines under the headline and leave the rest blank. Either scale row type with row count (3 rows → 22 pt / 18 pt) or centre the block vertically. The M2 storyboard stand-ins (2.4 s32, 2.5 s40) have only two rows, against "three-row stand-in" in `videos/README.md`, and look unfinished.

### 12. One row pattern, slide after slide
About 60% of content slides are "bold label + grey sub-line" rows, and some videos (2.2, 1.3) have four in a row. The few slides with structure are the ones that stick: 1.2 s13 pillars, 1.8 s61 layers, 1.10 s78 four blocks, 2.1 s6 three panels and 2.5 s38 flow. The ITU text-only rule allows shapes, as those slides show. Strong candidates:
- 1.3 s22/23 → a nine-chip step strip (steps 1–5 highlighted);
- 1.4 s30 → five chevrons;
- 1.6 s46 → the evidence ladder drawn as a descending stair;
- 1.7 s53 → a 0–5 scale bar with five bands;
- 1.9 s69 → a four-phase timeline.

All five are pivotal or near-pivotal slides, so the effort lands where the VO holds longest.

### 13. Small things
- M1 storyboard label sits at the top ("STORYBOARD — NOT YET RUN"); M2's sits in a footer. Pick one. Moot if finding 1 is taken.
- 1.4 s31 shows DG-03 and DG-05; s32 (two slides later) names DG-03 and DG-04. This is correct per E2, but a viewer sees three gap codes in 30 seconds. Use one code on screen (DG-03) in both.
- Title cards repeat the single message in small grey italic, and the recap repeats it again in bold. That's fine, but on the title card it's long enough (35–40 words) to compete with the title. Consider leaving it off the title card.
- 1.9 s70 is the module's one full-colour block, and M2's is 2.6 s47 (as the notes intend).

## Condensing proposal

All edits go in the `.js`, then the bundle, deck, split and companion are regenerated, as always. Nothing is touched in the deck alone.

**Tier 1: sentences only, every slide kept (close to the scripts)**

| Edit | Where | Saves |
|---|---|---|
| Section and annex numbers out of VO (keep on screen and in Sources) | M1 throughout; 2.2 s15 | ~70 w |
| "Not recorded yet" / "specimen, not yet run" lines out of VO; storyboard slides relabelled "What a good run shows" | 1.4, 1.7, 2.3–2.6 | ~30 w |
| "the team's own" → "this course's own" | 1.2, 1.3, 1.7, Sources slides 1.4–1.7 | — |
| 1.1 Payments row and VO simplified | 1.1 s8 | ~35 w |
| PAERA 5.1/5.4 caveat and Compass DPI row out of VO | 1.7 s53 | ~45 w |
| GovMarket threshold nuance trimmed | 2.2 s15 | ~50 w |
| "KP2" references out; "On screen" → "In the service" | 2.4 s31, 2.5 s40, 2.1 s7 | ~5 w |
| Annex 1 "two blocks" cut to one sentence where repeated | 1.10 s77, 2.1 s8 | ~40 w |
| Signposts: 1.2 "step one", 1.3 "Module 6", 1.8 hook clause | 1.2, 1.3, 1.8 | +25 w |

Net: about −250 words in M1 (−5%) and −60 in M2.

**Tier 2: cut or merge six slides (the real condense)**

| Edit | Saves |
|---|---|
| 1.2: merge s14 into s13 (codes on the pillar picture) | ~70 w, 1 slide |
| 1.3: cut s24; one provenance sentence (with the ITU naming marked place) moves to s21's VO | ~115 w, 1 slide |
| 1.6: cut s47 "Four templates"; the validation-chair sentence moves to s45 | ~75 w, 1 slide |
| 1.9: cut s71 Estonia (to the guide) | ~110 w, 1 slide |
| 2.4: cut s31 "What is not published" (to the guide) | ~75 w, 1 slide |
| 2.5: merge s40 into s39, keeping "a record written before a decision is a record nobody answers for" | ~70 w, 1 slide |

With both tiers, M1 goes from 4,816 → about 4,190 words (−13%) and M2 from 2,743 → about 2,540 (−7%). Videos 1.2, 1.3, 1.6, 1.9, 2.4 and 2.5 end up with three content slides instead of four, about 2.5–3 minutes of VO. The other ten keep the eight-slide shape. `split_spec.json` must be regenerated (`--infer-ranges` handles it), and `videos/README.md`'s "every video is eight slides" line needs updating.

Tier 2 cuts don't lose material: each cut passage goes to the GitBook page for its subtopic, which is generated from the same `.js`. If the renderer has (or gets) a page-only field, move each beat there rather than deleting it. I haven't checked `render_kp3.py` for one.

## Suggested order
1. Decide Tier 1 alone, or Tier 1 + Tier 2. Then edit both `.js` files and regenerate the bundles, run `qa_bundle.py` and rebuild the decks.
2. In the same rebuild, apply the deck-builder changes: ≥15 pt tables, row type that scales with row count, and the storyboard label. Draw the five shape slides in finding 12.
3. Run `vo_diff.py` and `qa_deck.sh`, and do the phone test on 1.1 s8 and 1.10 s79. Then the audio briefs.

## Tier 1 applied — 3 October 2026

Edited `build_kp3_module1_v02.js`, `build_kp3_module2_v02.js` and the two deck build scripts; regenerated the bundles, combined decks, per-video splits and scripts companions (decks keep the v0.1 file names). Pre-edit copies of the four source files are not in the repo.

- Spoken section/annex numbers removed from M1 VO (on-screen labels and Sources unchanged).
- "It has not been recorded yet" removed (1.4, 1.7); "It passes when" → "A good run passes when"; M1 storyboard label → "WHAT A GOOD RUN SHOWS", M2 footer → "Walkthrough: what a good run shows."; 2.3 "specimen, not yet run" → "a worked example" (VO and on screen). Bundle production notes and storyboard sections keep their specimen/not-run wording.
- "the team's own" / "this knowledge product's own" → "this course's own" throughout M1 (M2's "your team's own" left, it means the implementer).
- 1.1 payments row and VO simplified; 1.7 Compass DPI row and PAERA 5.1/5.4 caveat cut; 2.2 GovMarket threshold detail cut; 1.10 Annex 1 sentence shortened; 1.6 "Four sessions" → "Sessions were held in week eight. Here are three of the points they settled."
- KP2 references removed (2.4 s31, 2.5 s40; "KP3 sets up" → "This course sets up"); 2.1 "On screen the parent meets" → "In the service, the parent meets".
- Signposts added: 1.2 "step one of the method", 1.3 "Module 6 takes these four steps in full.", 1.8 hook "Once the country is scored, the money requests come." (kept within the 45-word opener cap).

Result: M1 VO 4,816 → 4,717 words, M2 2,743 → 2,720 (smaller than the estimate, as the signposts add words back). `vo_diff.py` zero mismatches on both; `qa_bundle.py` 0 hard failures, soft warnings only for low words-per-minute on 1.7 (428 w) and 2.2 (447 w). Changed slides re-rendered and checked. Not yet regenerated: the GitBook guide pages (`render_kp3.py`), which read the same `.js`.

## Tier 1 applied to Modules 3–6 — 3 October 2026

Same edits as above, applied to `build_kp3_module{3,4,5,6}_v01.js` (versions kept at v0.1). Bundles, combined decks, per-video splits and scripts companions regenerated; the decks come from `build_kp3_moduleN_deck_v01.py` on the shared `kp3_deck_common.py`, which also carries findings 10, 11 and 13 (tables ≥15 pt, row type scaled to row count and centred, one storyboard footer). Pre-edit copies of the four `.js` files are not in the repo.

- Production status out of the VO: every "Until …, nothing here has run" / "none of this has run" sentence removed (3.2, 3.3, 3.4, 3.6, 3.7, 5.1, 5.5); 6.9 "The run has not yet been recorded." removed; 5.3's storyboard paragraph rewritten ("This run is the principal demonstration of the course. The walkthrough follows it step by step…", with one sentence added so slide 7 is not thin); 5.4 "the recording will show" → "a good run shows", "specimen… on the date of this script" → "set up, and no more than that", "Today the last column" → "Before the first run, the last column". "The check passes when" → "A good run passes when" in the Module 3 walkthroughs.
- On screen: M3 cue footers 'Storyboard on the specimen. Not yet run.' and M5/M6 'Not yet run' / 'Storyboard — not yet run' → 'Walkthrough: what a good run shows.'; 5.4 'Until then: a specimen, not yet run.' → 'Until then: set up, not yet proven.' Progressa's sheet of checks (5.4) keeps its 'not yet run' column on purpose: it is the fixture's state the video teaches, not the course's.
- "the team's own" → "this course's own" throughout M3 and M6 (6.2 "drawn from its implementation experience" → "drawn from implementation experience").
- KP2/KP3 references out of what the learner meets: 3.1 "since the interoperability work" → "is already a member"; 4.2 "set up in KP2" cut, table row → "A contract of Progressa's own"; 4.3 and 5.4 "KP3" → "this course"; 5.1 title "Progressa's members since KP2" → "…today", "What KP3 adds" → "What this course adds", "a Progressa contract from KP2" → "a contract of Progressa's own" (also 5.3). Bundle production notes and glossary keep their KP2/specimen wording, as in M1–M2.
- No section or annex numbers were spoken in the M3–6 VO, so that edit did not apply.

Result: VO M3 2,837 → 2,754 words, M4 2,649 → 2,645, M5 2,573 → 2,511, M6 4,576 → 4,568; `words:` fields updated to match. `vo_diff.py` zero mismatches on all four; `qa_bundle.py` 0 hard failures, soft warnings only for "Before the next video." in the practice box (M4, M6, accepted). Not yet regenerated: the GitBook guide pages (`render_kp3.py`).
