# Review: title-card hold vs. audio opener — KP1 videos (English)

**Date:** 9 September 2026 · **Trigger:** feedback that 1.1's opening audio does not match the slides.
**Scope:** every subtopic with a take of record — Module 1 (shipped, cues on disk) and Modules 2–4
(takes accepted 9 Sep, cues/assembly not started). Module 5 has no audio yet.
**Method:** for Module 1, the shipped cue files (how long slide 2 is held). For Modules 2–4, the
take-of-record SRT read against the v0.2 script's "Slide — Title" narration and the deck's first
content slide, to find where the audio actually arrives at slide 3.

## Verdict

The 1.1 problem is structural, not a one-off. Every per-topic deck opens with **two title cards**
(the retitled module cover from `split_module_deck.py`, then the section slide) and **no slide for
the opener** the script narrates. The scripted opener is only ~40 words, but the two-host format
stretches it to 45–90 s and, in 12 of 22 M2–M4 takes, prepends an unscripted analogy before it.
Result: 30–90 s of a static title card while the hosts are already teaching.

**None of this needs a re-roll.** It is fixed in the deck (one opener slide, one title card) and in
the cue file. Re-rolls are only worth considering for the five takes that carry a factual slip on
air (§4) — and those are a separate decision.

## 1. Per-video findings

Hold = time the second title card stays on screen while narration runs. M1 from the shipped cues;
M2–M4 estimated from the SRT (time at which the first content slide's material begins).

| Video | Take | Hold on title card | What the audio does in that stretch | Severity |
|---|---|---|---|---|
| 1.1 | v0.13 | **73 s** (0:11→1:24) | Five-counters vignette + "each programme does what it was funded to do" (scripted) | **High** |
| 1.2 | v0.8 | 19 s | "EA = documents and diagrams" (scripted) | Low |
| 1.3 | v0.10 | 27 s | Mission line, then the objection "you already require open APIs" (scripted) | Medium |
| 1.4 | v0.5 | 13 s | Paper-online opener (scripted) | Low |
| 1.5 | v0.4 | 15 s | Two-paths opener (scripted) | Low |
| 1.6 | v0.9 | 14 s | "One picture to take away" (scripted) | Low |
| 1.7 | v0.10 | **41 s** (0:09→0:50) | "Friction is political", four commitments mission, PAERA definition (unscripted) | Medium |
| 1.8 | v0.2 | 26 s | Being cut to a teaser anyway — no action | — |
| 2.1 | v0.15 | ~35–45 s (→0:41/0:52) | Address-update vignette (unscripted), then four-layers mission (scripted) | Medium |
| 2.2 | v0.19 | ~55 s (→1:04) | Skyscraper "foundation" analogy (unscripted), then service/function vocabulary vignette (scripted) | **High** |
| 2.3 | v0.2 | ~50 s (→0:58) | Show-open, then "three months, forty drafts" (scripted) | **High** |
| 2.4 | v0.10 | ~70 s (→1:18) | Mansion-renovation analogy (unscripted), then classify-before-model (scripted) | **High** |
| 2.5 | v0.11 | ~20 s (→0:28) | "X-ray glasses" opener; five bodies start at 0:28 | Low — cue slide 3 at 0:28 |
| 2.6 | v0.7 | ~40 s (→0:47) | Assess mission, "not a 500-page audit" (scripted, elaborated) | Medium |
| 2.7 | v0.2 | ~55 s (→1:02) | Skyscraper-generator analogy (unscripted), then two-traps mission (scripted) | **High** |
| 3.1 | v0.5 | ~35 s (→0:42) | Blueprints analogy (unscripted); "single agreed place" starts 0:42 | Medium |
| 3.2 | v0.7 | ~55 s (→1:04) | Spreadsheet/warehouse/Jenga analogies (unscripted); "three pain points" at 1:04 | **High** |
| 3.3 | v0.6 | ~35 s (→0:46) | Staleness opener (scripted) | Medium |
| 3.4 | v0.6 | ~35 s (→0:47) | Ignored-blueprint analogy (unscripted), then "Board gives authority" (scripted) | Medium |
| 3.5 | v0.1 | ~60 s (→1:10) | Cold open reads the title; gate described at length before the five questions | Medium — or cue slide 3 at ~0:32 |
| 3.6 | v0.2 | ~65 s (→1:14) | Fifty-page-report opener (scripted), host intro, EA definition (unscripted) | **High** |
| 3.7 | v0.2 | ~75 s (→1:23) | Rusting-bridge analogy, EA definition (unscripted), fade mission (scripted) | **High** |
| 4.1 | v0.5 | ~50 s (→1:00) | Minister-on-TV / child-proves-existence-three-times vignette (unscripted, on-theme), Progressa intro (scripted) | Medium–High |
| 4.2 | v0.9 | ~65 s (→1:13) | Discover phase, "what exists, not what's wrong", 3–4 weeks, the brief (all scripted, stretched) | **High** |
| 4.3 | v0.1 | ~45 s (→0:52) | Assess phase intro (scripted) | Medium |
| 4.4 | v0.4 | ~55 s (→1:04) | Reinvent-the-login-portal vignette (unscripted), then Adapt (scripted) | **High** |
| 4.5 | v0.12 | ~45–65 s (→0:51/1:17) | Highway-over-dirt-paths analogy, EA-as-urban-plan (unscripted) | **High** |
| 4.6 | v0.7 | **~80 s** (→1:31) | $50M-scrapped vignette, PAERA definition (unscripted) | **Highest** |
| 4.7 | v0.9 | ~65 s (→1:16) | Ignored-roadmap vignette (unscripted), "phase that never ends" (scripted) | **High** |
| 4.8 | v0.7 | ~45 s (→0:54) | Hospital/agriculture duplicate-software vignette (unscripted), "swap the data, keep the method" (scripted) | Medium |

Counts: 14 high, 9 medium, 6 low/none. Module 1 shipped with it in 1.1, 1.7 and (mildly) 1.3.

## 2. Root cause

1. **Two title cards.** `split_module_deck.py` prepends a retitled copy of the module cover to each
   topic's slide range, and the range already starts with the section slide (`section()` in every
   `build_kp1_module*_deck_v02.py`). Both say the same thing; neither carries the opener.
2. **The opener has narration but no slide.** Each script's `### Slide — Title` block is ~40 words
   of hook (a vignette, an objection, a phase framing). Its VO sits in the section slide's notes,
   so the brief feeds it to the hosts — but the deck gives the cue file nothing to show for it.
3. **The generator inflates the opener.** The status note of 7 Sep already found M2–M4 takes
   "open with a ~30 s teaser first". Measured here: the hook runs 45–90 s and often gets an
   analogy of the hosts' own in front of it.

## 3. Fixes, in order of leverage — no re-rolls

### 3a. One title card, not two (all 37 decks, one change)
In `split_module_deck.py`, stop prepending the cover copy; the section slide already carries the
module-scoped kicker ("KP1 · MODULE n · VIDEO n.x"), number, title and single message and is the
better standalone title card. (Alternative: keep the cover and drop the section slide from the
range — but the cover's right-hand lifecycle panel is Module-1-specific and reads as clutter on a
per-topic video.) Saves ~10 s of dead screen per video and removes one thing the cue file has to
account for.

### 3b. One opener ("hook") slide per video (build-script change, all modules)
Add a `hook_slide()` to `deck_lib` and a `hook=` argument to `section()` so every topic gets, between
the title card and the first content slide: a large one-line hook, two to four short lines of the
scripted vignette, no chart. Move the "Slide — Title" VO from the section slide's notes to the hook
slide's notes, so `make_brief.py` keeps feeding it to the hosts and `vo_diff.py` keeps matching.
Module 5 gets it for free before recording. Because the hook is written from the *scripted* opener,
it still sits under the takes that improvise an analogy — the analogy lands on a slide about the
same problem, which is a far smaller mismatch than a title card.

Proposed hook copy (headline / supporting lines — trim to taste):

| Video | Headline | Supporting lines |
|---|---|---|
| 1.1 | One citizen. Five counters. The same form, five times. | One programme builds a register. Another builds another. A third builds a third. · Each takes years, funded separately. · You cannot fix this inside any one programme. |
| 1.2 | An EA is a set of documents and diagrams | What services, and to whom · What data, and who owns it · What software · What infrastructure |
| 1.3 | You already require interoperability. So why five forms? | Every contract demands open APIs. · Procurement rules can require behaviour. · They cannot make it the cheapest choice. |
| 1.7 | Four commitments. Each one necessary. | A small permanent team · A Board with binding authority · About 2% of digital budget, five years · The team stays protected |
| 2.1 | Four layers. For each: one question, one deliverable, one mistake. | Business · Data · Application · Technology |
| 2.2 | Two ministries. Two architectures. Four words for two things. | "service" vs "function" · "application" vs "system" · You cannot compare them, connect them, or spot the same work done twice. |
| 2.3 | Three months. Forty drafts. No agreement. | Someone says: let's write our principles. · Half the drafts contradict each other. · The principles already exist. |
| 2.4 | Classify before you model | The kind of body tells you what it does, what data it owns, how it is governed. · PAERA's taxonomy of public bodies (§4.6). |
| 2.6 | Assess: a description good enough to decide from | Current-state picture + gap analysis · Three quality tests, every layer · The gaps you will almost always find |
| 2.7 | Two traps — cheap to stop while they are still a line in a project plan | Both look rational from inside the project. · Assess is where you are positioned to see them. |
| 3.1 | Where does the picture live? | A slide deck on your laptop: out of date in a month, disagreed with in two. · It needs a home. |
| 3.2 | The spreadsheet stops coping. Don't swap one lock-in for another. | Hundreds of entities, several sectors, relationships you cannot see. · The tool you buy to avoid vendor lock-in can lock you in. |
| 3.3 | The repository has one enemy: staleness | Six months behind reality is worse than none — people trust it, and it lies. |
| 3.4 | The repository holds the architecture. The Board gives it authority. | Without a Board: a document people can ignore. · With one that can say no: where every significant decision passes. |
| 3.5 | The review gate — where the architecture does its real work | Every significant project · A short, consistent set of questions · Before it is funded |
| 3.6 | Your minister's fair question: is this doing anything? | An answer that is honest, short and true. · A handful of numbers, not a fifty-page report. |
| 3.7 | Most EA programmes don't fail. They fade. | Six months go well. · In the second year the practice quietly stops mattering. · Four forms, all predictable. |
| 4.1 | A minister promised one learner record. A child proves they exist three times. | Progressa: a real sector, a real fragmentation problem, a minister who wants results. |
| 4.2 | Phase 1 — Discover. One question: what exists today? | Not what is wrong — that comes later. · 3–4 weeks · One deliverable: the Discovery brief |
| 4.3 | Phase 2 — Assess. Where is the gap? | 6–8 weeks · Current state in four layers · Maturity scorecards · Ranked gap analysis |
| 4.4 | Phase 3 — Adapt. PAERA is a starting point, not a constraint. | 4–6 weeks · Progressa's principles · Sector priorities · A sourcing decision per building block |
| 4.5 | The target: the picture of the future you are building toward | Skip it, and you sequence a roadmap to a destination nobody drew. |
| 4.6 | Phase 4 — Plan. In what order, at what cost? | 6–8 weeks · A roadmap in waves · Investment estimates |
| 4.7 | Phase 5 — Execute & Govern. The phase that never ends. | Roadmap → project pipeline · Repository · Board · Review gate |
| 4.8 | Swap the data. Keep the method. | Five phases · Four sign-offs · Six deliverables · Any public-sector domain |
| 5.x | (write at build time, from each `### Slide — Title` block) | |

1.4, 1.5, 1.6, 2.5 hold under 20 s — a hook slide is optional; consistency argues for it anyway
since the build script adds it in one place.

### 3c. Cue-only fixes (no deck change needed)
- **2.5** — cue slide 3 at 0:28, not later; the hosts list the five bodies straight away.
- **3.5** — cue slide 3 at ~0:32 ("authority is exercised at the gate"), or ~1:10 with a hook slide.
- **3.1** — cue slide 3 at 0:42 ("single agreed place").
- **1.1 re-cut** (already published): 0:00 title · ~0:08 hook · 1:24 slide "Four signs" · rest unchanged.
  Re-render from the existing `Audio_v0.13`; no new take.

### 3d. Module 1 rebuild
1.1 is the only shipped video where viewers have complained, but 1.7 (41 s) and 1.3 (27 s) have
the same shape. Since Module 1 is due a re-render anyway (tightening decisions of 3 Sep), fold the
hook slides and the single title card into that rebuild rather than patching 1.1 alone.

## 4. Separate: factual slips on air in the takes of record

Not part of the opener problem, but if any of these are re-rolled, the brief can be tuned at the
same time to open on the hook. Otherwise accept, as with the show-open residue.

| Video | Cue | On air | Should be |
|---|---|---|---|
| 3.4 | 0:56 | "PAERA, your **Pan-European Architecture** framework" | Public Administration Ecosystem Reference Architecture |
| 4.3 | 0:55 | "PAERA or **Pay Your Anchored Standards**" | (garbled expansion) |
| 4.4 | 1:00, throughout | "**LoCTI** principles"; "PROGRESA" pronounced as the Mexican programme | localised principles; Progressa |
| 4.6 | 0:18, 1:04 | "**Progressive** Phase Four"; "PAERA framework or **PR**" | Progressa; PAERA |
| 4.7 | 0:12, 1:21 | "phase five of the **progressive** framework"; "progressive architecture" | Progressa |
| 4.2 | 0:15 ff. | "Progresa" (single s) — pronunciation only | Progressa |
| 3.3 | 0:11 | "The EA, or P-A-E-R-A as it's often called" — conflates EA with PAERA | — |

If the brief's terminology table gains a phonetic hint for Progressa ("pro-GRESS-a", not
"progressive") the M4 mispronunciations should stop on the next roll.

## 5. What to change in the kit

| Change | Where | Effect |
|---|---|---|
| Drop the cover copy from the split (or make it a spec flag `title_card: section`) | `kp-deck-builder/scripts/split_module_deck.py` + each `split_spec.json` | One title card per video |
| `hook_slide()` helper; `section(..., hook=...)` | `kp-deck-builder` `deck_lib.py`; `build_kp1_module{1..5}_deck_v02.py` | Opener slide with the scripted VO in its notes |
| Render the hook slide's notes as approved substance | `kp-audio-brief/scripts/make_brief.py` | Brief unchanged in content; slide count +1 |
| Phonetic row for Progressa; PAERA expansion pinned | `references/audio-brief-template.md` §4 terminology | Fewer name slips |
| Accept cue slide 3 earlier where the audio previews it | cue files for 2.5, 3.1, 3.5 | No deck change |

## 6. Implemented — 9 September 2026

- **3a** (one title card): `split_module_deck.py` is a plain range extractor; `make_brief.py` and
  `draft_cues.py` follow (done separately, earlier the same day).
- **3b** (hook slide): `deck_lib.hook_slide()` + `TITLE_CARD_NOTE`; each `build_kp1_module{1..5}_deck_v02.py`
  carries a `HOOKS = {code: (headline, [lines])}` table and `section()` emits title card (silent
  cold open) → hook slide (opener VO in notes). All 35 v0.2 decks rebuilt and re-split; per-video
  decks keep their previous slide counts (cover −1, hook +1), so **content slide numbers in the
  shipped Module 1 cue files are unchanged** — line 2 of each now shows the hook instead of the
  second card. Only the `#` comments are stale, and 1.1's `0:11` can move to ~`0:08`.
- `split_module_deck.py --infer-ranges` reads ranges off the section-slide kickers and writes them
  back into `split_spec.json`; used for all five modules.
- `scripts_from_deck.py` marks the title card as the cold open and heads the hook section with its
  headline; `WHERE WE START` added to the chrome lists in `make_brief.py` and `coverage_check.py`.
- Verified: `vo_diff` zero mismatches on all five modules; 35 briefs regenerated and pass
  `brief_deck_check`; `draft_cues` on 1.1/v0.13 places the hook at 0:08 and the first content slide
  at 0:48 (the human cue of 1:24 stands — drafts are drafts).
- Not done: §3c cue edits (M2–M4 have no cue files yet — these are constraints for when they are
  authored), §4 re-rolls, and the §5 phonetic row for Progressa.
- The 130 `* 2.*` files in the module folders were deleted, plus `make_brief 2.py` in the kit.
  They were not Finder copies of the current files but pre-hook snapshots: every one predated
  its base, and each diff was exactly the 3b change. The three `takes 2.log` were verified to
  be exact line-prefixes of the live append-only logs. `brief_deck_check` clean on all five
  modules afterwards.

### Module 1 re-render — 9 September 2026

All seven English videos (1.1–1.7) re-rendered from the rebuilt v0.2 decks with the existing
takes of record and the existing cue files. `rendered N slides, N cues` with no count warning on
every one; MP4 duration equals the m4a; frames extracted at each cue inspected and each shows the
slide its cue promised.

**No cue file needed editing.** The cue comments already named slide 2 by what the audio does
there ("the pattern: programmes rebuild what others built", "The objection: we already require
interoperability") — which is the hook slide's subject, so all seven map slide-for-slide onto the
new decks. 1.1's `0:11` was left as authored: the SRT puts the arrival at the hook's subject
("you're fighting fragmentation") at 0:11, not at `draft_cues`' 0:08.

| Video | Take | Duration | Size | Sources tail |
|---|---|---|---|---|
| 1.1 | v0.13 | 5:11 | 10.0 MB | 5.8 s |
| 1.2 | v0.8 | 5:17 | 10.5 MB | 5.3 s |
| 1.3 | v0.10 | 4:05 | 7.9 MB | 8.7 s |
| 1.4 | v0.5 | 3:11 | 6.4 MB | 4.3 s |
| 1.5 | v0.4 | 4:37 | 9.3 MB | 3.7 s |
| 1.6 | v0.9 | 4:11 | 8.6 MB | 10.7 s |
| 1.7 | v0.10 | 5:31 | 10.8 MB | 6.7 s |

Pre-existing, not introduced here: **1.5's Sources card holds 3.7 s and 1.4's 4.3 s**, both under
the ~5 s ITU convention. The audio ends there, so the fix is padding the m4a with silence, not a
cue change. 1.8 is unaffected — it has no per-video deck (teaser cut).

The superseded renders are in `video/_pre_hook/`; `.gitignore` excludes `*.mp4`, so git could not
have recovered them.
