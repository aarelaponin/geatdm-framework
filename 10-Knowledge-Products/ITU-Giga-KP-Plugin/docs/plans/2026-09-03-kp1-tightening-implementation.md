# Plan: implement the KP1 tightening (Tiers 1–3 and the practice box)

**Status:** decisions taken, ready to execute (v2) · **Date:** 3 September 2026 · **Owner:** Arne
**Source:** `KP1_Tightening_Analysis_20260902.md` (the no-changes-made analysis of 2 September). This plan turns its three tiers and §7 into work packages against the files that actually exist in `10-Knowledge-Products/`.
**Scope:** `KP1-GEA/` (five build scripts, five deck scripts, `videos/`, `gitbook-demo/`) and `ITU-Giga-KP-Plugin/` (four skills touched). KP2 and KP3 are out of scope except that the kit changes in WP0 apply to them automatically.

---

## 1. Goal and non-goals

**Goal.** KP1 as scripted goes from ~19,350 spoken words / 272 slides / 37 videos to ~15,200 words / ~239 slides / 35 videos (the analysis's "+ Tier 3" column), without removing a message, a Progressa specific, or the stand-alone comprehensibility of any video. Every recap slide gains an on-screen, un-narrated practice box that names the artefact the subtopic's AI tip produces. The kit gains the checks that stop KP2 and KP3 growing the same way.

**Non-goals.** No change to the PAERA anchors or citations (a re-run of `kp-citation-verify` confirms, it does not re-verify). No change to the AI tips' prompts, inputs/outputs or safeguards — the practice box *reads* the tip, it does not edit it. No change to the audio pipeline itself (brief → take → Scribe → audit → cues → slidecast); it is re-run, not re-designed. No change to the ITU slide template.

---

## 2. What the repo looks like today — constraints the analysis did not state

These were checked on 3 September and change how the edits have to be made.

**Two hand-authored sources per module, not one.** The analysis says "edit the build script, regenerate the `.md` and the deck, re-narrate." The `.md` is generated (`bundle_to_md.py`), but the deck is not: `build_kp1_moduleN_deck_v01.py` is a second hand-written script whose `notes(...)` calls carry the voice-over that `extract_deck.py` → audio brief → NotebookLM actually narrate. Every voice-over edit therefore lands twice — in the `scriptBeats[].text` of the `.js` and in the `notes()` string of the `.py` — and the two must be diffed against each other at the end of each module. The `.js` stays the source of truth for the deliverable; the `.py` is the source of truth for what gets said. WP0 adds a check that compares them.

**Slide removals shift the split spec.** `videos/module_N/en/decks/split_spec.json` addresses each video by an absolute slide `range` in the module deck. Collapsing 1.6 from 11 slides to 7 or dropping 4.7 s5–s6 moves every range after it. The spec is rewritten by hand after the deck is rebuilt (`split_module_deck.py` consumes it) — one pass per module, after all slide edits, never mid-way.

**Module 1 is live.** All eight Module 1 videos plus the 1.0 intro are published on YouTube and embedded in the demo GitBook (`gitbook-demo/out/video-links.md`, `1-1.md` … `1-8.md`). YouTube cannot replace a video file behind an existing ID, so a re-rendered 1.x is a new upload with a new ID: new embeds, updated `video-links.md`, a re-pinned comment, and the old video unlisted. Modules 2–5 have decks only (a handful of per-video `.pptx` files, no audio, no video), so their tightening costs nothing downstream. This is why Module 1 is last, and why under D4 its re-release is a separate production phase rather than a step in the script work.

**1.8 is wired into the play chain.** `gitbook-demo/play0.py` has Play 0 feeding the 1.8 comparator play, and `render.py`'s workbook diagram routes A8 (1.8) → A7. Cutting 1.8 to a teaser inside 1.7 orphans that play unless it is re-homed — to 5.1, which under Tier 3 becomes the evidence video — and the workbook chain is re-pointed.

**A handoff convention already exists.** `video-links.md` states: "Every video ends on a 'Your play' slide: *Before the next video, run the play on your own country — link in the description.*" The `audio-brief-template.md` §2 sequence the analysis cites is recap → handoff → Sources. The §7 practice box is a version of the same idea, moved onto the recap slide and taken out of the narration. Under D5 the box replaces the narrated handoff, so the template, the `video-links.md` hint and the GitBook page hint all change together.

**The QA gate will fight some of the edits unless it is updated first.** `qa_bundle.py` check 8 fails a subtopic whose spoken words drift more than ~15 % from its header `words`; every trimmed subtopic needs its `words` and `runtime` header values updated in the same edit. Check 6 requires both structural arguments to be *present in every module* — so the one-sentence signposts that replace the 1.3 and 1.4 re-teachings must keep the signature phrases the script greps for ("re-use"/"reuse" with "whole-of-government"/"planning"; "shared language"/"business and IT"). Check 4 flags cross-references — so a signpost may never say "as Module 2 showed"; it must carry the idea in one self-contained sentence, exactly as §6 of the analysis prescribes.

---

## 3. Decisions (taken 3 September 2026)

| # | Decision | Taken | Consequence for the plan |
|---|---|---|---|
| D1 | "Signpost, don't re-teach" is consistent with the Guide's stand-alone rule | **Yes** | Tier 2 goes ahead. Signposts are self-contained sentences (analysis §6); still recorded as a calibration item for ITU's information, not for approval. |
| D2 | Which of 1.8 / 5.1 survives | **Keep 5.1** | 1.8 is cut to a two-slide teaser inside 1.7; Module 1 → 7 videos; 1.8's comparator play re-homes to 5.1 (§2, play chain). |
| D3 | Merge 5.3 + 5.6 and renumber 5.7 → 5.6 | **Yes** | Module 5 → 6 videos, numbered 5.1–5.6. Renumber once, after the merge is final. |
| D4 | Module 1 re-release / production timing | **Modify all the build scripts now; recreate the videos later** | The work splits into two phases. **Phase A (now):** every `.js` build script for all five modules is edited, regenerated to `.md` and gated — the scripts become the tightened source of truth. **Phase B (later, when production resumes):** deck scripts, split specs, audio briefs, takes, cues, mp4s and the YouTube swap for Module 1 are done from the Phase A scripts. Module 1 v1 stays live until Phase B. |
| D5 | Practice box vs the "Your play" handoff slide | **Replace** | The box on the recap slide is the only call to action; the narrated handoff goes. Brief §2 sequence becomes recap → Sources; `video-links.md` hint and the GitBook page hint are updated to match. |
| D6 | Word caps as soft checks in `kp-bundle-qa` | **Yes, soft** | Warn, never fail; applies to KP2/KP3 from the same kit bump. |

Still to put to ITU for information on the next call: the calibration items in the Module 5 bundle that ask ITU to confirm 1.8↔5.1, 1.7↔5.4 and 1.4↔5.7 "read as deepening" are withdrawn and replaced by the Tier 2/3 edits; and the practice-box convention.

---

## 4. Work packages and order

Per D4 the work runs in two phases. Phase A is the script work and is what this plan executes now; Phase B is production and starts when the videos are recreated. The Phase A order is the analysis's (highest yield first, Module 1 last), with the kit first so the gate catches drift as the edits are made rather than after.

```
Phase A — scripts (now)
  WP0  kit: soft caps, practice-box field + renderers, measurement, signpost rule   (no bundle changes)
  WP1  Module 5   Tier 2 + Tier 3 (merge 5.3+5.6, renumber 5.7→5.6)                  largest excess
  WP2  Module 4   Tier 2 + the 4.7 s5–s6 / 4.1 trims
  WP3  Module 2   Tier 1 (back to own targets)
  WP4  Module 3   Tier 2 signposts
  WP5  Module 1   Tier 1 caps, 1.6 collapse, 1.8 → teaser in 1.7           (scripts only)
  WP6  .md/.docx regeneration, README, GitBook source, curriculum QA, ITU transmittal

Phase B — production (later, from the Phase A scripts)
  WP7  kit: deck helper (practice box), extract_deck label, brief template, vo_diff, srt banned phrases
  WP8  deck scripts ×5, split specs, per-video decks; vo_diff zero mismatches
  WP9  Module 1 re-narration (7 videos), YouTube swap, GitBook embeds; Modules 2–5 as they enter production
```

### The per-module loop (WP1–WP5, Phase A)

1. **Edit the build script** `build_kp1_moduleN_v0X.js` — bump the file to the next version (`_v02.js`; Module 1 is already `_v02` → `_v03`). For each subtopic touched: `scriptBeats`, `slideSpecRows`, and the header `runtime` / `words` together. Add the `practice` field (WP0) to every subtopic. Slide-spec rows are renumbered when a slide goes, so the spec matches the deck that Phase B will build.
2. **Regenerate the markdown**: `python3 ../ITU-Giga-KP-Plugin/skills/kp-build-render/scripts/bundle_to_md.py build_kp1_moduleN_v02.js`. The git diff of the `.md` is the review artefact.
3. **Gate**: `qa_bundle.py build_kp1_moduleN_v02.js` — zero hard failures, soft checks (recap ≤ 35, opener ≤ 45, ≤ 550 words, no "prompt"/"description" in VO) reviewed. Then `kp-citation-verify` on the touched subtopics only.
4. **Measure**: `qa_bundle.py --stats` — total words, words per video, per-slide VO words, slide count — against the WP's target row in §6.
5. **Fresh-eyes read on the persona track** (analysis §6): read the module's `.md` end to end as its persona, checking each signpost sentence stands alone and the two spine ideas still recur once per video.
6. **Commit** the module as one commit: `.js` and `.md`, with the `--stats` table in the commit message.

The deck script for the module is **not** edited in Phase A. Until WP8 runs, the deck `.py` and its per-video decks are known-stale against the `.js`; `KP1-GEA/README.md` says so (WP6) and `vo_diff.py` (WP7) is what proves the gap closed.

### The per-module production loop (WP8–WP9, Phase B)

Edit `build_kp1_moduleN_deck_v02.py`: mirror every VO change from the `.js` into `notes()`, remove or merge the slides, add the practice box to each recap slide with the WP7 helper. Rebuild; `qa_deck.sh`; rewrite `split_spec.json` ranges; re-split with `split_module_deck.py`; `vo_diff.py build_kp1_moduleN_v02.js KP1_MN_Deck_v0.2.pptx` with zero unmatched beats. Then, per video: audio brief from the new deck (`extract_deck.py` → brief → prompt), take, transcribe (`kp-scribe-transcribe`), audit (`srt_drift_check.py` — the runtime check is the real Tier 1 verifier), cues, `slidecast.py`.

---

## 5. Work package detail

### WP0 — kit changes, script side (`ITU-Giga-KP-Plugin/`)

Do these first and commit them as a kit bump (v0.9.0). They are additive. The four items marked **[Phase B → WP7]** are listed here so the whole kit change is in one place, but they touch the deck/audio side and are done when production resumes.

**`skills/kp-bundle-qa/scripts/qa_bundle.py` — soft checks.** A new report section, "Length discipline (soft)", that never fails the gate but lists per subtopic: opener words (first `text` beat after the first `cue`) with a ≤ 45 threshold; recap words (the `text` beat following the `'In one sentence'` cue) with a ≤ 35 threshold; total spoken words against a 550-word ceiling (≈ 5:00 at the ~110 wpm the Module 1 narration realises); any slide whose VO is under 45 words (thin-slide candidate); and the practice-box checks below. Add a `--stats` flag that prints the per-module table from analysis §1 (videos, words, avg, slides) so before/after numbers are one command.

**`qa_bundle.py` — practice-box checks (soft).** Every subtopic has a `practice` field; its artefact string is a substring of the tip's `io` (the "What the prompt does"/output line) so the two cannot drift; and the recap VO does not contain "prompt", "description" or "your own sector". Mirror check (hard, since it is a compliance leak): no beat `text` anywhere contains the practice-box lead-in "Do this on your own sector".

**`qa_bundle.py --stats`.** Words per subtopic, per slide, slide count, opener and recap words, printed as a markdown table. This is what the analysis computed by hand; it becomes the acceptance instrument for every WP.

**`skills/kp-deck-builder/scripts/vo_diff.py`** [Phase B → WP7]. Reads the `.js` `scriptBeats` (reuse `find_subtopic_blocks` / `strip_comments` from `qa_bundle.py`) and the deck's notes (reuse `notes_text` from `extract_deck.py`); reports beats whose text does not appear in any note, and notes whose VO sentences do not appear in any beat. Normalise whitespace and curly quotes. This closes the two-sources gap in §2 and should also run inside `qa_deck.sh`.

**`skills/kp-deck-builder/scripts/deck_lib.py` — `practice_box(slide, artefact)`** [Phase B → WP7]. A bordered Arial 18pt text block at the foot of the recap slide with the bold lead-in "Do this on your own sector." and the sentence "Run the prompt in the description on your own ministry — it gives you [artefact]. Before the next video." Three lines maximum at the recap slide's width; the mobile split-screen test in the production notes is the acceptance check. `big_slide` gains an optional `practice=` argument so recap slides pick it up with one parameter.

**`skills/kp-audio-brief/scripts/extract_deck.py`** [Phase B → WP7]. When a text frame begins with the lead-in, print it under an `[on-screen only — not narrated]` label instead of in the visible-text list, and exclude its words from the `--budget` weighting.

**`skills/kp-audio-brief/references/audio-brief-template.md`** [Phase B → WP7, but the D5 text change can be made now]. §2 recap-slide block gains the fixed line: "The slide also carries an on-screen practice box. It is not narrated. Do not mention the prompt, the description, or the listener's own sector." Per D5, the §2 sequence becomes recap → Sources and the handoff slide entry is removed. §5 (definition of done) and the Step 5 take checklist gain "nothing said about the practice box". `srt_drift_check.py`'s banned list gains "in the description" and "your own sector" so the audit catches an imported box.

**`skills/itu-giga-kp-bundle/SKILL.md` + `references/`.** Add the length discipline to the compliance checklist: opener ≤ 45, recap ≤ 35 and single-message only, ≤ 550 words per video, and the signpost rule — cross-module concepts are carried by one self-contained sentence, never a paragraph and never a pointer — with the three example sentences from analysis §6. `renderSubtopic` in the reference pattern gains the `practice` field so new modules (KP2/KP3 revisions) carry it from the start.

**`skills/kp-build-render/scripts/bundle_to_md.py` / `bundle_to_gitbook_md.py`.** Render the `practice` field under the slide-spec table as "On-screen practice box (recap slide, not narrated)". In the GitBook renderer, the tip block heading becomes "Do this on your own sector" (analysis §7, companion touches).

*Done when (Phase A):* `qa_bundle.py` runs on all five current KP1 scripts with zero new hard failures (soft warnings expected — they are the baseline `--stats` table that WP6 quotes as "before"), and `bundle_to_md.py` renders a test `practice` field. *Done when (WP7):* `vo_diff.py` reproduces zero unmatched beats on Module 1 v0.1 decks against the *pre-tightening* `_v02.js` (calibration — any mismatch it reports there is a real, pre-existing drift), and the practice box renders on a test recap slide and passes the mobile test.

### WP1 — Module 5 (Tier 2 + Tier 3; ~3,500 → ~3,000 words; 7 → 6 videos)

`build_kp1_module5_v01.js` → `_v02.js` (deck `.py` follows in WP8).

| Subtopic | Change | Words (est.) |
|---|---|---|
| 5.1 | Keep. Recap/opener caps only. Absorb the 1.8 comparator play as its AI tip if 1.8's tip is stronger than 5.1's current one (check both; keep one). | −60 |
| 5.2 | s2 (the four asks) → one sentence; lead with s3. Caps. Keep the four fade modes (persona split with 3.7 stands). | −120 |
| 5.3 ⊕ 5.6 | Merge into one video, "Roll it out across sectors — and why the second is cheaper": 5.3 s3 (only the record at the centre changes) + 5.6 s2–s4 (wave structure) + 5.6 s5 (national scorecard). One AI tip (5.6's rollout-plan tip is the natural survivor; 5.3's becomes a worked example inside it or moves to the GitBook only). Numbered 5.3. | −450 |
| 5.4 | Keep. Caps. s3 "back it with the proof" stays as the pointer to 5.1. | −60 |
| 5.5 | Keep. Caps. | −50 |
| 5.7 → 5.6 | Four slides, ~350 words: proven / portable / necessary-now / the two reasons an EA exists. Era-shift argument told once (~80 words), not twice. Renumber to 5.6. | −350 |

Renumbering touches now: the `num` fields and at-a-glance table in the `.js`; `gitbook-demo/out/module-5.md`, `ids.json`, `pages.json` (page IDs are per slug — the demo site's Module 5 outline pages are renamed, not recreated). In WP8: `section()` codes and the split spec in the deck; the existing `KP1_M5_5.x_Deck_v0.1.pptx` files are superseded by the v0.2 split. No notebook briefs exist for Module 5 yet.

Cover and §1 of the bundle: "Seven subtopics … approximately 33 minutes" → six, ~24 min. Calibration item (3) in §5 of the bundle is rewritten: 5.6 (was 5.7) still deliberately echoes 1.4, but once and in ~80 words.

*Done when:* `--stats` shows Module 5 at ≤ 3,100 words and 6 videos; check 6 still finds both structural arguments; the Strategist-track read (Module 1 then Module 5) finds no paragraph-length re-argument of 1.3, 1.4, 1.6 or 1.7.

### WP2 — Module 4 (Tier 2; ~3,800 → ~3,150 words)

| Subtopic | Change |
|---|---|
| 4.1 | s4 → two sentences; s5 (six deliverables) → one sentence, kept as the advance organiser. ~3-minute scene-setter; header `runtime` "~3 min". |
| 4.3 | s3–s5: keep only the Progressa facts (the four gaps as found, why the duplicate registry ranks first, the programme that will not give up its list); drop the "on Progressa"-prefixed restatement of 2.6's method. ~120 words. |
| 4.4 | s4 → ~40 words; s3's sourcing calls carry the point. |
| 4.6 | s4 shared-rhythm paragraph → one sentence. |
| 4.7 | Keep s4's Board ruling on the scholarship programme and the decision-log line (~90 words); drop s5 (triad) and s6 (six-months-then-forever reprise). 4.7 loses two slides. |
| 4.8 | s4 (method travels) → one sentence; recap cap (s6 currently re-lists). Module-level practice box: "Run 4.2's Discovery prompt on your own sector this week." |
| all | Opener and recap caps; `practice` field. 4.2, 4.5, 4.6 otherwise untouched — 4.5 is not shortened. |

(WP8: 4.7's split range shrinks by two; 4.8 shifts.) *Done when:* Module 4 ≤ 3,200 words, ~52 slides, and the Architect-track read (2 → 3 → 4) finds Module 4 demonstrating rather than re-teaching 2.6 and 3.5.

### WP3 — Module 2 (Tier 1; ~4,330 → ~3,800 words)

Bring 2.1, 2.2, 2.4, 2.5, 2.6, 2.7 back to the targets printed in their own header tables (each is 25–65 words over). Specifically: 2.5 s6 ("trace one service all the way down") becomes the recap; 2.6 s3 (per-layer criteria) → two sentences; 2.4 s5 (adopt-don't-invent) → one sentence; 2.2 s6 likewise. **2.2 s5 and 2.7 s2–s3 stay in full** — they are the Architect track's only teaching of the two structural arguments. 2.3 untouched. Opener and recap caps throughout. No slide-count change except 2.5 (−1). *Done when:* every Module 2 subtopic is at or under its header `words`, and check 8 passes without touching the headers.

### WP4 — Module 3 (Tier 2; ~3,620 → ~3,300 words)

3.1 s6 and 3.4 s6: keep the shared-object / shared-rhythm paragraph once, in 3.4; one sentence in 3.1. 3.5 s3: keep the gate moment (~50 words), drop the rational-project preamble — it signposts to 2.7 with a self-contained sentence. 3.7 s7 recap cap (currently re-lists all four fades). 3.2, 3.3, 3.6 untouched apart from caps. *Done when:* Module 3 ≤ 3,350 words and check 6 still reports both arguments (3.5's signpost sentence must keep "re-use" + "whole-of-government").

### WP5 — Module 1, scripts only (Tier 1 + 1.6 collapse + 1.8 teaser; ~4,100 → ~3,300 words; 8 → 7 videos)

`build_kp1_module1_v02.js` → `_v03.js`. The live videos are untouched until WP9.

Edits: opener and recap caps on 1.1–1.7; merge the thin slides (1.2 s2, 1.5 s1, 1.6 s2 fold into neighbours); 1.6 s3–s7 become one cumulative-reveal five-row slide (the "one page" the video is named for) and s9 folds into s8 — 1.6 goes to 7 or 8 slides in the slide spec; 1.8 is removed and 1.7 gains a two-slide teaser ("four very different governments have done this; the evidence is in Module 5" — as a self-contained sentence, not a pointer) *without* pushing 1.7 past 550 words, which means the teaser replaces the last ~60 words of 1.7's current closing beat rather than adding to it; 1.8's AI tip re-homes to 5.1 (WP1) and the GitBook 1-8 play page is kept as a play with no video, re-pointed from Play 0 and into the workbook chain; `practice` field on all seven; cover and at-a-glance table say seven videos. The 1.0 intro script is checked for "eight videos".

*Done when:* Module 1 `.js` ≤ 3,400 words, 7 subtopics, ~48 slides in the spec; the Strategist-track read (1 → 5) is clean.

### WP6 — sweep and transmittal (closes Phase A)

Regenerate all five `.md` and the five `.docx` deliverables (`build_render.sh`, `OUT_PATH` into the contract folder) as v0.2 (Module 1 v0.3). Update `KP1-GEA/README.md`: module table, "37 videos" → 35, runtimes, and a status line saying the deck scripts and Module 1 videos are v0.1 and will be regenerated from the v0.2 scripts in production (Phase B). Update each bundle's cover runtime and §2 at-a-glance table; rewrite the Module 5 calibration items per §3. Run `kp-curriculum-qa` across KP1–KP3 — the merge of 5.3/5.6 and the removal of 1.8 may move a competency's "taught in" cell in `competency-matrices.md`. GitBook source: `module-5.md`, `ids.json`, `pages.json` for the renumbering; `1-8.md` becomes a play-only page; the play-page tip heading becomes "Do this on your own sector"; `video-links.md` hint updated per D5. Run `--stats` for the final before/after table and put it, with the decision log from §3, in a one-page transmittal note to ITU that lists every subtopic changed and why.

### WP7–WP9 — Phase B, production (later)

**WP7** is the deck/audio half of the kit change, marked [Phase B → WP7] in WP0: `deck_lib.practice_box`, `extract_deck.py` label, the brief-template lines, `srt_drift_check.py` banned phrases, `vo_diff.py`, and the "retiring a link" checklist in `video-links.md`. Calibrate `vo_diff.py` against the pre-tightening Module 1 first.

**WP8** runs the production loop (§4) over the five deck scripts, Module 5 first so its renumbered split spec is settled before anything is narrated. Each module's deck `.py` goes to `_v02`, with `phase_slide()` in Module 1 replaced by one `rows_slide`.

**WP9** re-narrates the seven Module 1 videos from the new decks (every take ≤ 5:00 realised at `srt_drift_check.py`, 1.5 in particular; nothing said about the practice box), uploads them as new IDs, updates `video-links.md`, the seven page embeds and the pinned comments, unlists the eight v1 uploads (1.8 v1 included — its content now lives in 5.1), and re-cuts the 1.0 intro only if it names eight videos. Modules 2–5 follow the same loop as they enter production. Metadata: YouTube descriptions of every subtopic get the play link as their first line (analysis §7). *Done when:* realised Module 1 audio ≤ 33 min (from 37.9), `vo_diff.py` zero mismatches on all five modules, GitBook embeds point at the new IDs.

---

## 6. Targets per work package (acceptance numbers)

Estimates from the analysis, at ~110 realised wpm. `qa_bundle.py --stats` is the instrument; a WP is accepted when it lands within ±5 % of its row.

| WP | Module | Words today | Target | Slides today | Target | Videos |
|---|---|---|---|---|---|---|
| 1 | 5 | 3,498 | ~3,000 | 49 | ~40 | 7 → 6 |
| 2 | 4 | 3,795 | ~3,150 | 57 | ~52 | 8 |
| 3 | 2 | 4,331 | ~3,800 | 52 | ~51 | 7 |
| 4 | 3 | 3,621 | ~3,300 | 53 | ~52 | 7 |
| 5 | 1 | 4,105 | ~3,300 | 61 | ~48 | 8 → 7 |
| — | **KP1** | **19,350** | **~15,200** (−21 %) | **272** | **~239** | **37 → 35** |

Realised runtime falls from ~190 min to ~152 min if the ×1.11 expansion holds; the Module 1 re-narration in WP9 is the only place this is measured rather than estimated, so Phase A's transmittal note quotes the word and slide figures and Phase B's the minutes.

---

## 7. Verification (runs at the end of every WP, and once more at WP6 and WP9)

Mechanical, Phase A: `qa_bundle.py` zero hard failures, soft-check list reviewed; `kp-citation-verify` on touched subtopics; `--stats` within target; `bundle_to_md.py` and `build_render.sh` render cleanly (fresh-eyes PDF check per `kp-bundle-qa` §9). Phase B adds: `qa_deck.sh` clean; `vo_diff.py` zero mismatches; `split_module_deck.py` produces the expected number of per-video decks with the right slide counts.

Editorial, per persona track (analysis §6): one read of Modules 1 → 5 as the Strategist and one of 2 → 3 → 4 as the Architect, checking that every cross-module concept is carried by a self-contained sentence (no "as we saw", no "Module 3 showed"), that each track's *first* teaching of each argument is still in full (1.3/1.4 for the Strategist, 2.7/2.2 for the Architect), that every recap says the single message and stops, and that every opener states the question the video answers. Log any remaining paragraph-length duplicate against the duplication map in analysis §2 — the map should be empty of "repeated in full" entries when WP5 closes.

Physical (Phase B, Module 1): every regenerated take passes `srt_drift_check.py` at ≤ 5:00, with nothing said about the practice box; the recap slide with the box passes the mobile split-screen test on a phone.

---

## 8. Sequencing, effort and parallelism

Rough effort, in working sessions of the kind that produced the existing modules. Phase A: WP0 one session (the `qa_bundle.py` checks and `--stats`, the `practice` field in the renderers and the skill text); WP1 two (merge and renumber are the cost); WP2 one; WP3 one; WP4 half; WP5 one; WP6 one — about seven and a half sessions to a tightened, gated, deliverable set of scripts. Phase B: WP7 one (`vo_diff.py` and the deck helper are the substantive pieces); WP8 one per module; WP9 the normal per-video production cycle for seven videos plus the YouTube swap.

WP0 precedes everything in Phase A. WP1–WP4 are independent of one another and can interleave with ITU's review of WP1 (send Module 5 v0.2 first — it is the largest change). WP5 is last so the `practice` field and signpost phrasing have settled on four modules before the one that is published gets them. WP6 closes Phase A with the transmittal. Phase B starts when the videos are recreated; WP7 first, then WP8 Module 5 → 4 → 2 → 3 → 1, then WP9.

Git: one commit per WP; the kit bump tagged; the `.md` diffs are the review surface for each module.

---

## 9. Risks

*The two sources drift.* The largest practical risk, and D4 widens it: for the whole of Phase A the deck scripts are deliberately stale against the `.js`, and if production resumes without WP7/WP8 a video will be narrated from an untightened deck. Mitigations: the README status line (WP6) names the gap; `vo_diff.py` (WP7) is the first thing Phase B builds and is calibrated against the pre-tightening Module 1 before any deck is edited; no take is generated until `vo_diff.py` is zero for that module.

*Module 1 stays long in public for the duration.* Accepted under D4; the published v1 is compliant, only over length. If ITU asks, the tightened v0.3 script is the answer in the meantime.

*Signposts trip the QA gate.* A one-sentence signpost that loses the signature phrase breaks check 6; one that names another module breaks check 4. Write signposts to the three §6 examples and run the gate after each subtopic, not each module.

*Module 1 re-release churn (Phase B).* New YouTube IDs mean every embed and description moves; a mistake leaves a GitBook page pointing at an unlisted video. One coordinated swap in WP9; the "Adding a link" checklist in `video-links.md` is extended with "retiring a link" in WP7.

*Merged 5.3/5.6 loses a message.* Two single-message boxes become one. Draft the merged single message first and check both originals are implied by it before cutting a beat.

*The practice box gets narrated anyway.* Deep Dive imports on-screen text. Three independent stops (extractor label, brief template line, `srt_drift_check` banned phrases) plus the take checklist; if a take still narrates it, re-roll — fixes go to the brief, never to the audio.

*Ceiling creep.* The 550-word ceiling is soft; without the `--stats` table in every WP's acceptance the numbers will drift back. Make the table part of the commit message.

---

## 10. Out of scope, noted for later

Applying the caps and the practice box to KP2 and KP3 (the kit changes make it a mechanical pass; schedule after KP1 v0.2 is accepted). The tool-neutral phrasing of the box lead-in for the GitBook ("Open in Claude" vs. "the prompt") — already a calibration item. Moving the play skills into their own repository. The 1.0 intro re-cut if the module count in it changes.
