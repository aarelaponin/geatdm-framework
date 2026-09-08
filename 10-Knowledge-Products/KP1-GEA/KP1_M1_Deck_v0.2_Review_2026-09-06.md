# Review: KP1 Module 1 decks v0.2 (WP8, Module 1)

**Date:** 6 September 2026 · **Reviewed:** `KP1_M1_Deck_v0.2.pptx` (53 slides), the seven split decks `KP1_M1_1.1–1.7_Deck_v0.2.pptx`, `split_spec.json`, `KP1_M1_Scripts_v0.2.md`, against `build_kp1_module1_v03.js`, the 3 Sep tightening plan and `kp-deck-builder/SKILL.md`.
**Method:** every notes `VO:` paragraph diffed against the `.js` `scriptBeats` (ad-hoc `vo_diff`); word counts per video; `qa_bundle.py` on the v03 script; split ranges checked against section slides; all 53 slides rendered (LibreOffice) and inspected.

## Verdict

The deck is a faithful, clean render of the v0.3 script — **zero VO mismatches** across all seven videos, structure and split correct, no render defects. It is **not yet the deck the plan describes**: the on-screen practice box (D5 / WP7 / WP8) is missing from every video, and two new slides need design attention before narration.

## What checks out

| Check | Result |
|---|---|
| VO in notes vs `.js` beats | 7/7 videos identical (only curly-vs-straight quote differences on 1.4 s3 and 1.6 s5). 3,188 spoken words total (plan target ≤ 3,400). |
| Per-video words | 1.1 403 · 1.2 394 · 1.3 502 · 1.4 441 · 1.5 490 · 1.6 400 · 1.7 558 |
| Slide counts (v0.1 → v0.2) | 1.6: 11 → 6 (collapse done) · 1.7: 8 → 10 (two-slide teaser added) · 1.8 gone · others unchanged. 64 → 53 slides. |
| Split spec ranges | All seven ranges land exactly on section slide → sources slide. Split decks: title card + slides, correct counts (1.1 = 6, 1.7 = 11), title cards read `1.x — <title>`, `Length: ~N mins`. |
| Cover / agenda | "Seven standalone videos", "~28 mins across 7 videos (1.1 – 1.7)" (4+3+4+4+4+4+5 = 28 ✓). No "of 8", no "eight" anywhere in the deck. |
| Grammar | Section → content → (climax) → Sources per video; kickers module-scoped; one footer per slide; Arial throughout; no leftovers (`lorem`, `[add image]`, TODO). |
| Render | No overflow, no doubled footer, agenda left-aligned, connectors behind panels on s34. |
| Scripts companion | Regenerated from the deck; sections match slide titles; sources marked "(No narration.)". |
| `qa_bundle.py` on v03.js | 0 hard failures; 8 soft warnings (below). |

## Findings, ranked

### 1. The practice box is missing from all seven videos (blocks narration)
D5 made the box on the recap slide the *only* call to action and dropped the narrated handoff. The v0.3 `.js` carries a `practice` field on all seven subtopics and `qa_bundle.py` §10 passes them — but nothing in `build_kp1_module1_deck_v02.py` renders it, and `deck_lib.py` has no `practice_box()` helper yet (WP7 item). Result: the v0.2 videos would end with no call to action at all, and the "recap → Sources" brief sequence has nothing on-screen for `extract_deck.py` to label. Do WP7's `deck_lib.practice_box` + `big_slide(practice=)` first, then re-run this build.
Two videos have no "In one sentence" slide to host it — **1.1** (ends on s6 "One root cause") and **1.6** (ends on s41 timeline) — so the helper needs to work on a content slide too, or those two get a climax slide.

### 2. s50 "The same four elements show in all four" — a 16-tick table says nothing
Every one of the 4×4 cells is ✓, so the table carries no information the closing sentence does not; the SKILL bans decorative charts. Worse, it gives Kenya a tick for "results visible in months" on the slide after s49 says Kenya's results are "mixed and openly debated" (the notes call that honesty a feature). Replace with a `rows_slide` that maps each element to its ask ("A small central team with real authority → Ask 1" …), which is the point the VO makes, and drop the ticks.

### 3. s39 lifecycle table — too small for video, and not the house style
The collapsed five-phase slide is a python-pptx table at 12.5–13 pt (ITU body is 18 pt; mobile split-screen is the acceptance test) carrying ~230 words of VO — the longest static hold in the module. The notes say "rows reveal one at a time, cumulative", which a table cannot do and the slidecast will not do. Options: `rows_slide` with the five phases at ≥15 pt and the deliverable/sign-off as the sub-line (duration in the head line), or keep the table and raise it to ≥14 pt with the *Question* column folded into the phase cell (the question is already on s38). Either way the mobile test should be run on this one slide before the take.

### 4. s38 carries a production comment on screen
"The centrepiece of Module 1 — designed to be screenshot and put on the EA Board room wall." is rendered as visible grey italic text (inherited from v0.1). It reads as a note to the producer, not to the CDO. Either cut it or rewrite it as an instruction to the viewer ("Screenshot this page for your EA Board.").

### 5. Soft length warnings — script-side, carried into the deck unchanged
`qa_bundle.py` §9 on v03.js: opener 46/45 on 1.3 and 1.4; recap 39/35 (1.2), 37/35 (1.4), 36/35 (1.7); 1.7 at 558/550 words; 1.1, 1.3, 1.6 have no "In one sentence" beat. All within the ±5 % tolerance the plan allows and none blocks. If you trim, trim in the `.js` and mirror to `notes()` — do not touch the deck alone.

### 6. Small things
- s32 row 5 ends "Next video." on screen — a pointer inside a standalone video; the VO says "we walk it in the next video" too. Harmless in the playlist, but it is the only cross-reference left in Module 1.
- s19 title wraps to two lines with "down" orphaned and sits tight on the first row; "A reference architecture is other countries' learning" fits on one line.
- s5 "Your minister" cell and s11 "Data" row are full-colour blocks; the SKILL reserves the single full-colour block for Ask 4 (s47). Pre-existing, deliberate per the notes — just noting the rule now has three exceptions.
- Cover notes still say "combined Topic 1 deck"; scripts companion header says "Module 1 (Topic 1)". Not user-facing.
- Not deck, but downstream of it: `KP1_M1_1.0_IntroScript_v0.2.md` still says "eight short videos" / "1 of 9 (1.0 + 1.1–1.8)" — WP9 says re-cut 1.0 if it names eight; it does.

## Suggested order
1. WP7 `practice_box` helper → add to all seven recap slides (1.1 s6, 1.6 s41 included) → rebuild → re-split → regenerate scripts companion.
2. Redesign s50 and s39 in the same rebuild; drop/rewrite the s38 caption.
3. Re-run `qa_deck.sh` and the mobile test on s39 and one recap slide; then the audio briefs.
