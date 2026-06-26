---
name: itu-giga-kp-bundle
description: >-
  Generate, revise, or review a video script bundle for the FiscalAdmin OU — ITU/Giga Knowledge Products
  contract (RFQ-S-GIGA-2026-022, PO #334304). Use whenever producing or revising a KP module script bundle,
  drafting a subtopic script, reviewing a colleague draft against ITU's Knowledge Products and Video Materials
  Guide, or building the Node.js docx-generation script. Triggers: "KP1 Module X", "subtopic 2.X", "video script
  bundle", "ITU script bundle", "KP module script", "African middle-management script", or any work on the four
  ITU/Giga Knowledge Products. Encodes the audience lock (African public-sector middle management, eighth-grade
  English), the eight ITU compliance rules (no intros/outros, text-only slides, no individuals on screen,
  embedded AI prompts, find-the-link-in-the-description, numbering, branding), the build-script pattern, public-
  anchors-only citation, the two structural arguments, and the PAERA anchor map. The author skill of the itu-
  giga-kp kit.
---

# ITU/Giga Knowledge Product — Script Bundle Generator

## What this skill is for

The FiscalAdmin OÜ contract with ITU/Giga produces four Knowledge Products on Education Digital Transformation. Each KP is decomposed into modules (1, 2, 3, ...); each module into subtopics (1.1, 1.2, 1.3, ...); each subtopic ships as one ~5-minute standalone video plus written GitBook content plus an embedded AI usage prompt. This skill encodes the operational discipline for producing those script bundles — so that v0.1 of each new module lands close to deliverable quality on the first draft, rather than requiring three revision cycles to converge on the right register.

The skill is contract-specific. It is loaded when working in `/Users/aarelaponin/IdeaProjects/rsr/itu/itu-knowledge/` or its sub-directories, and it presumes the `CLAUDE.md` at the contract root is also loaded.

## Step 1 — Read the contract memory file first

Before drafting any new content, read `CLAUDE.md` at the contract root (`/Users/aarelaponin/IdeaProjects/rsr/itu/itu-knowledge/CLAUDE.md`). It contains the audience lock, the eight ITU compliance rules, the two structural arguments that must be present in any KP framing, the scope boundary (Education sector only), the public-anchors-only citation discipline, the locked visual vocabulary, and the working modalities with ITU.

The CLAUDE.md is authoritative. This skill operationalises it. If the two ever conflict, the CLAUDE.md wins and this skill should be updated.

## Step 2 — Lock the audience and register BEFORE writing v0.1

This is the single highest-leverage discipline. Module 1 of KP1 cost three revision cycles because the first draft did not lock these before writing. Save the cycles by locking them up front.

Confirm explicitly, in writing if necessary:

- **Audience:** African public-sector middle management — director-general of a digital agency, head of a sectoral ICT unit, technical secretary briefing the principal. The listener is the one making the case upward to their minister, not the minister themselves.
- **Register:** Eighth-grade English. Short sentences. Plain nouns. Active verbs. Spoken rate 200–300 WPM. No academic distance. No "you've probably heard" framings that assume the listener is already inside the conversation.
- **Headline pattern:** Every subtopic leads with the public-sector outcome the listener can carry out of the video — make the case upward, survive a vendor pitch, satisfy a donor's reporting requirement, brief the minister coherently. Architectural concepts go in the body, not the headline.
- **Examples:** African public-sector imagery only — donor-funded fragmentation (the World Bank funded one ministry's identity, the AfDB funded another's payments, GIZ funded a third's data exchange), the citizen at five counters, the cross-ministry coordination meeting, the budget cycle. Avoid OECD-only metaphors (plumbing, kilometre 10, scar tissue).
- **Signposts:** Rwanda (Irembo, small + ambitious), Kenya (Huduma Centres and the openly-debated Huduma Namba), South Africa (federated SITA model), plus Estonia as the international polestar. Drop the OECD trio.

If any of these is uncertain for the module at hand, ask the user before drafting. It is cheaper than a rewrite.

## Step 3 — Apply the ITU compliance checklist BEFORE writing v0.1

Walk every box before drafting. The corrections cost real revision cycles on Module 1; apply them up front.

- [ ] **Topic/subtopic numbering.** Whole numbers for topics (1, 2, 3); decimals for subtopics (1.1, 1.2, 1.3). Each subtopic = one standalone video.
- [ ] **One subtopic, one video, ~5 minutes.** The cap is on the unit length, not the total content. Comprehension depth determines the number of subtopics, not the time budget. For a comprehension-grade module addressing middle management, expect 5–8 subtopics per module.
- [ ] **No introduction or conclusion inside any video.** Drop "in this video", "next we'll cover", "the previous video covered". Each video must stand alone — discoverable via search, comprehensible without the playlist.
- [ ] **Slides are text-only.** Title Arial Bold 28pt. Body Arial 18pt. Background #E5F5FB. Diagrams and text boxes only where strictly necessary; all labels in plain text. No images, no icons, no thumbnails, no country emblems, no agency logos.
- [ ] **No individuals on screen.** AI-avatar narration or computer-screen-only voice-over — pick one per video. No "speaker on camera" cues.
- [ ] **AI usage tip embedded per subtopic.** Four-part structure (problem, prompt template, inputs/outputs, safeguard). Output must be a middle-manager-grade artefact the listener can take to a real meeting.
- [ ] **"Find the link in the description" for all external references.** No URLs read aloud. Compile per-subtopic link lists into the metadata table.
- [ ] **Two structural arguments present.** Planning enables re-use (procurement rules can't deliver re-use; only whole-of-government planning can). EA is the lingua franca between business and IT in the transformation era (operating-model change requires shared language). These must appear in any "why EA matters" framing.

## Step 4 — Use the build-script pattern

All deliverable docx files in this contract are generated by Node.js or Python build scripts. The most recent KP module bundle is the template — copy and modify, do not start from scratch.

Reference: `_02_Design/_KP01/build_kp1_module1_v02.js` is the current pattern. It contains:

- A `renderSubtopic({...})` helper that takes per-subtopic parameters and produces the section block.
- Helper functions for paragraphs, headings, tables, callout boxes, visual cue boxes, AI prompt boxes.
- Document configuration (A4 portrait, ITU-locked typography, headers and footers, page numbering).

To produce a new module bundle:

1. Copy the most recent build script: `cp _02_Design/_KP01/build_kp1_module1_v02.js _02_Design/_KP01/build_kp1_module2_v01.js` (or the appropriate path for the new module).
2. Update the cover-page version-control table, the audience-lock paragraph, the at-a-glance table.
3. Replace each subtopic's `renderSubtopic({...})` call with the new content per subtopic.
4. Update the production notes if anything has changed in ITU's guidance.
5. Update the calibration items.
6. Run: `node build_kp1_moduleN_v0X.js`. Output is the docx.
7. Verify by converting to PDF and reading: `soffice --headless --convert-to pdf <file>.docx` then `pdftoppm -jpeg -r 100 <file>.pdf page` and inspect a few key pages.

## Step 5 — Subtopic content structure

Every subtopic ships with seven elements, in this order:

1. **Header table** — Persona, Target runtime (~5 min, ~620 spoken words), PAERA anchor (use `references/paera-anchor-map.md` for the lookup).
2. **Single-message box** — One sentence stating the public-sector outcome the listener gains. Lead with what they will be able to do.
3. **Script beats** — 4 to 8 alternating visual-cue + voice-over blocks. Each voice-over block is one substantive paragraph or two short ones. No meta-introductions, no forward-pointing outros.
4. **On-screen slide specification** — A 3-column table (slide number, text-only element, design notes). Slide branding is implicit (Arial 28pt/18pt, #E5F5FB) but each cell describes only the text content and any minimal diagram structure (text-box arrows, plain-text tables).
5. **AI usage tip** — A four-part block: (a) problem the prompt solves, (b) the prompt itself in monospace, copy-paste ready, (c) inputs and outputs note, (d) one safeguard caveat.
6. **Metadata table** — Working title, YouTube-optimised title, 60-word description (with explicit mention of the AI prompt in the description), tags, playlist label, ToR §4 coverage, PAERA citations, external-link list.
7. **End-of-subtopic page break** — Each subtopic starts on a fresh page for navigability.

## Step 6 — AI usage prompt design

Every subtopic's AI prompt should produce a Strategist-grade or middle-manager-grade artefact — something the listener can take to a real meeting on Monday morning. Five patterns work consistently:

- **Diagnostic table** — Assess whether the listener's country has the four signs of the problem the subtopic names (used in 1.1 fragmentation diagnostic).
- **Ministerial slide** — Draft a one-slide briefing the listener can take to cabinet (used in 1.2 "what is EA" explainer).
- **Coverage map** — Map the listener's existing initiatives against the framework being taught (used in 1.5 PAERA coverage map).
- **Governance artefact** — Draft a Terms of Reference, RACI matrix, or similar institutional document (used in 1.7 Governance Board ToR).
- **Comparator-country card** — Generate signposts tuned to the listener's specific context, with primary-source citations (used in 1.8 African comparator).

The prompt template in each subtopic should:

- Open with a clear "Below is..." that names the input the listener pastes.
- Decompose the task into named outputs (table columns, bullet structure, etc.).
- End with an explicit output format ("Output: a 4-row table plus a 3-bullet summary").
- Include one safeguard line — "Treat the output as a hypothesis, not a finding", "Validate against a named source before using in a cabinet briefing", etc.

The safeguard is not boilerplate. It addresses the specific failure mode of the specific prompt.

## Step 7 — Production notes and calibration items

Every module bundle closes with two sections:

- **Section 4: Production notes** — Carry forward from the previous module if unchanged. Includes the split-screen usability test, slide branding spec, no-individuals-on-screen rule, voice and tone guidance, external-link convention, GitBook companion pattern.
- **Section 5: Open calibration items** — Items that need ITU's input before final lock. Group by category: factual claims to web-verify, editorial tone calls on sharp lines, structural decisions, ITU dependencies (template, repos, etc.).

## Step 8 — Citation discipline

Every operational citation must be against a public reference. See `references/paera-anchor-map.md` for the PAERA section lookup. Other public anchors:

- GovStack Building Block specifications (govstack.global)
- EU European Interoperability Framework (EIF) — for KP2 four-layer model
- NIIS X-Road documentation (niis.org) — for KP2 technical bus
- UNDP DPI Maturity Model — for KP3
- ITU DPI Safeguards — for KP3
- World Bank ID4D — for identity investment benchmarks

**Do not cite GEATDM as if it were a public reference.** GEATDM is FiscalAdmin's internal early-stage methodology; ITU does not have it. Frame team experience as "the team's multi-country implementation experience" or "patterns from prior public-sector engagements" — without naming a branded methodology.

The IMF Tax Administration Reference Architecture is treated narrowly: appears only in Aare Lapõnin's CV (as authorship credential) and in the references list. It is not used as an operational citation in body content (the contract is for Education, not cross-sector).

## Step 9 — Cross-module integration

Once a module is drafted, check it does not silently contradict adjacent modules:

- The two structural arguments (planning + lingua franca) are recurring threads. If a later module recaps them, it must use the same framing.
- The visual vocabulary is locked across all artefacts. The same colour-concept mapping should appear in any new figure.
- The Progressa worked example (a fictional country used as the demonstration canvas) is the Education-sector demonstration backbone. Modules using Progressa should refer back to the same institutions (MoEYS, PNEA, PLR, PNIA, PDGA) defined in the Inception Report §4.2.
- The Linkup federation (X-Road 7.x demonstration platform on ITU cloud) appears in KP2/KP3/KP4 modules and must be referenced consistently.

## Step 10 — Implementation-KP authoring mode (KP2–4)

KP1 taught a learner how to **plan** (the deliverable was a document — a target architecture and a roadmap). KP2, KP3 and KP4 teach how to **build** that plan along PAERA's three implementation tracks — **Interoperability (KP2)**, **DPI (KP3)**, **Service delivery (KP4)** — and so they ship **two** things: the video bundle (Steps 1–9, unchanged) **and a runnable build pack**. Read `references/implementation-kp-pattern.md` before authoring any KP2–4 module.

What changes for an implementation KP:

- **The repeated pattern in every module:** learner + Claude + (methodology + Building-Block spec + API) → generate **configuration** → wire a **Building Block** → **working solution** on the Linkup (X-Road) + Joget stack. The AI play stops producing a document and starts producing **config that runs** — the prompt's output is the artefact.
- **The build module = the seven elements + five build elements.** Keep all seven from Step 5 (the video stays text-only and ~5 min). Add, in the GitBook companion and the build pack — never as on-screen clutter: (1) the public spec/API it teaches against; (2) the generating prompt (output = the config); (3) the config artefact; (4) the wiring/run step; (5) the acceptance check that proves it runs.
- **Bottom-up, cumulative Progressa.** Build KP2 → KP3 → KP4; each pack consumes the one below (KP2 the bus, KP3 the BBs on the bus, KP4 the services over the BBs), assembling into one running Progressa solution. Keep the Progressa institutions (MoEYS, PLR, PNEA, PNIA, PDGA, PayPro) and BB ids identical across packs — they are the join keys.
- **Per-track engines, public-spec citations.** Route each block to the right engine (X-Road for KP2; `mtca-data-platform` for KP3; `joget-*` for KP4) but cite only the public spec — see `bb-config-gen` and its `references/bb-spec-map.md`.

**Extra hand-offs for KP2–4** (in addition to the Step-and-gate flow below): `kp-build-pack` scaffolds the runnable pack; `bb-config-gen` fills its configs from specs; `kp-solution-verify` proves the pack actually runs on the stack. A KP2–4 module is a deliverable only when the video bundle passes `kp-citation-verify` + `kp-bundle-qa` AND the build pack passes `kp-solution-verify`.

## Reference files

- `references/paera-anchor-map.md` — PAERA section lookup organised by methodological concept. Use this when citing PAERA in any subtopic.
- `references/register-transposition.md` — how to re-register a module for a new persona (Strategist ↔ Architect) while holding the audience lock, keeping titles capability-led, and carrying both structural arguments. Read this when a module shifts persona (e.g. KP1 Module 2 onward).
- `references/ai-prompt-patterns.md` — the catalogue of AI-usage-prompt patterns proven across Modules 1–2 (diagnostic table, ministerial slide, governance artefact, comparator card, capture template, conformance check, scored analysis, screen). Use it to pick the right four-part prompt shape per subtopic.
- `references/implementation-kp-pattern.md` — the KP2–4 build-module anatomy, the per-track Building Blocks, and the cumulative-Progressa hand-off chain. Read before authoring any implementation KP.

## Kit hand-offs

This is the **author** skill of the `itu-giga-kp` kit. Once a module's build script is drafted, hand off in order — do not skip the gates:

1. **`kp-build-render`** — build the .docx and verify the rendered pages.
2. **`kp-citation-verify`** — drive every PAERA citation and paraphrased list from DRAFT → VERIFIED against the source document. (The Module-2 calibration-5.1 situation is exactly what this prevents.)
3. **`kp-bundle-qa`** — run the ITU compliance gate (forbidden strings, seven elements, numbering, no intros/outros, both structural arguments, metadata, word counts) plus a fresh-eyes render review.

Every gate emits a fix list. **Fixes go to the build script, never to the docx**; then re-run `kp-build-render` and the gates. A module is a deliverable only when both gates pass.

## Build verification — what good looks like

The detailed mechanics now live in the `kp-build-render` and `kp-bundle-qa` skills. In short, after running the build script, verify before sharing:

1. **The PDF renders cleanly across all pages** — `kp-build-render` (soffice → PDF → pdftoppm sample pages).
2. **No GEATDM / TK-IO-XX / TK-DPI-XX / cross-sector enumerations** leaked through — `kp-bundle-qa` greps for these; they should be absent.
3. **Each subtopic has all seven elements** — header table, single-message box, script beats, slide spec, AI usage tip, metadata, page break — also enforced by `kp-bundle-qa`. A subtopic missing any of these is a v0 draft, not a v0.1 deliverable.

If any check fails, fix the build script and re-render — do not edit the docx directly.

## When this skill should NOT be used

- For non-contract work — the skill is contract-specific and presumes the CLAUDE.md context.
- For producing the Inception Report or the spine + rail two-pager — those are separate artefacts with their own build scripts.
- For non-script-bundle deliverables (GitBook content, presentations, status reports) — though some of the discipline (audience lock, public-anchor citation) applies, the structure differs.
