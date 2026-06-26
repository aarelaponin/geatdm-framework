---
name: kp-bundle-qa
description: >-
  ITU compliance QA gate for a KP video-script bundle: run the automated checks the bundle must pass, then a
  fresh-eyes render review and a one-cycle fix loop, before any module is shared. Use WHENEVER a KP module draft
  is finished or edited and before it is sent: "QA the bundle", "check the module", "is it ITU-compliant",
  "ready for the Tuesday call", "did anything leak", "compliance check", "run the gate". Checks: no forbidden
  strings (GEATDM, TK-IO-XX, TK-DPI-XX, IMF TA RA, cross-sector enumerations); each subtopic carries all seven
  elements (header, single-message, beats, slide spec, four-part AI tip, metadata, page break); decimal
  numbering sequential; no in-video intros/outros/cross-references or on-camera cues; both structural arguments
  present (planning-enables-re-use and EA-as-lingua-franca); metadata complete with a ~60-word description that
  mentions the AI prompt; word count matches runtime. Run after kp-build-render and after any edit; pairs with
  kp-citation-verify.
compatibility: Python 3 (standard library only) for the static checks over the build script; LibreOffice + pdftoppm for the render review. The fresh-eyes pass is Claude reading the rendered pages.
---

# KP bundle QA — the ITU compliance gate

## Why this exists

A KP module is compliant or it is not, and the checks are mechanical enough to forget one by hand. The corrections that defined the ITU compliance checklist each cost a revision cycle on Module 1; this gate makes them a repeatable pass instead of a memory exercise. **Compliance is a gate, not a hope.** Run it after every build and before anything is shared.

This gate does **not** check PAERA citation fidelity — that is `kp-citation-verify` — nor, for KP2–4, whether the build pack runs — that is `kp-solution-verify`. Run all three; they are complementary.

## The checks

Run these over the module's **build script** (the source of truth) and the rendered PDF. `scripts/qa_bundle.py <build_script.js>` automates the static ones and prints a pass/fail report; the render review is done by eye.

### 1. Forbidden strings (highest-yield leak check)
None of these may appear anywhere: `GEATDM`, `TK-IO-`, `TK-DPI-`, `IMF`, `Tax Administration Reference`, branded internal methodology names, or cross-sector country enumerations used as worked examples (e.g. naming Lesotho/Gambia by sector, "we have done this in other sectors"). Education is the deliverable sector; cross-sector experience stays internal. The script greps for these; a single hit fails the gate. **For KP2–4, run the same grep over the build-pack files too** (`configs/`, `prompts/`, `runbook.md`, `acceptance/`, the pack `README.md`) — and add the internal **engine** names (`joget-`, `mtca-data-platform`) to the leak set there, since the pack must cite public specs, not the engine that generated the config. The pack is deliverable content, not just the build script.

### 2. Seven-element completeness, per subtopic
Every subtopic must have all seven: (1) header table (Persona, Target runtime, PAERA anchor), (2) single-message box, (3) script beats, (4) on-screen slide specification, (5) AI usage tip with all four parts (problem, prompt template, inputs/outputs, safeguard), (6) metadata table, (7) end-of-subtopic page break. A subtopic missing any one is a v0 draft, not a v0.1 deliverable.

### 3. Numbering
Subtopics use decimals (2.1, 2.2, …), sequential, no gaps, no duplicates. The `at-a-glance` table row count equals the number of `renderSubtopic` calls. Section headings 1–6 present (Document context, At a glance, The scripts, Production notes, Calibration items, Annex).

### 4. No in-video intros / outros / cross-references
Each video must stand alone. Scan every script-beat voice-over for: "in this video", "in this lesson", "next video", "next we", "we'll cover", "coming up", "previous video", "the last video", "earlier we", "as we saw", "in the next", "in the previous", "to recap", "in conclusion", "to summarise" (when used as a closing outro). Flag each hit with its subtopic for a human keep/cut decision.

### 5. No individuals on screen
No "speaker on camera", "on camera", "presenter", "host", "to camera", "piece to camera" cues anywhere. Narration is AI-avatar or screen-only voice-over. Slides are text-only — flag any "image", "photo", "icon", "logo", "emblem", "thumbnail" cue in a slide spec for a human check (some uses are legitimate descriptions like "no images" — the script lists hits, the human judges).

### 6. Both structural arguments present
The module must surface both, somewhere: **planning enables re-use** (procurement rules can require interoperability but cannot deliver it; only whole-of-government planning + reference architectures can) and **EA as the lingua franca between business and IT** in the transformation era. The script searches for the signature phrases ("re-use"/"reuse" + "whole-of-government"/"planning"; "shared language"/"lingua franca"/"business and IT"/"metamodel … both sides") and reports which subtopics carry each. A module that surfaces neither, or only one, is flagged — the arguments are recurring threads, not optional.

### 7. Metadata completeness
Each subtopic's metadata has: Working title, YouTube-optimised title, Description (≈60 words, and it **mentions the AI prompt**), Tags, Playlist, ToR §4 coverage, PAERA citations, External-link list. The script flags any missing row and any description that omits the AI-prompt mention or is far from 60 words.

### 8. Word count vs runtime
Each subtopic states a `runtime` and a `words` count. The script checks the two are consistent with each other across the module (no subtopic claiming ~5 min with 200 words or ~3 min with 900) and, where it can read the rendered voice-over, that the actual spoken-word count is within ~15% of the stated `words`. Flag large mismatches — they signal a beat was added or cut without updating the header.

### 9. Fresh-eyes render review
Convert to PDF and look at the pages (use `kp-build-render` for the commands). Check: the cover renders; no broken table rows; no blank or near-empty pages; the green AI-tip boxes, blue visual-cue boxes and navy slide-spec headers render; each subtopic starts on a fresh page; the single-message box reads as one quotable sentence. This catches what static checks cannot.

## The fix loop — one cycle

Collect every finding. **Fixes go to the build script, never to the docx.** Apply them upstream, re-render via `kp-build-render`, and re-run the gate. One disciplined cycle should clear it; if a second cycle finds new breakage, something in the build script is fighting the pattern — fix the pattern, not the symptom.

## What good looks like

A module passes when: zero forbidden strings; every subtopic has all seven elements; numbering is sequential and complete; no in-video intros/outros/cross-references and no on-camera cues survive; both structural arguments are present and you can name the subtopics that carry them; metadata is complete with AI-prompt mentions and ~60-word descriptions; word counts match runtimes; and the rendered PDF is clean across all pages. Then it is a v0.x deliverable, ready to pair with a passed `kp-citation-verify` and go to ITU.
