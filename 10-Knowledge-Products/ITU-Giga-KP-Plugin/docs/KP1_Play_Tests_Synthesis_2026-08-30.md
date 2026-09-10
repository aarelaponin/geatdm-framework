# KP1 play tests on The Gambia — synthesis and what to fold into the GitBook

*Source: four test documents (Module 1 all eight plays; Module 2 subtopics 2.1–2.7; Module 3.2; Module 4.1–4.8; Module 5 file empty). All runs on The Gambia, mostly with the GEATDM skills loaded.*

## 1. What the tests actually show

**The plays work, and they chain — across modules, not just within Module 1.** Context built for 1.3 was reused for 1.5; the roles register from 1.6 fed 1.7; the 2.5 sector table fed 2.6 and 2.7; the 4.1 canvas fed 4.2 → 4.3 → 4.4 → 4.5 → 4.6 → 4.7. The "country workbook" idea is confirmed by practice, and it is wider than one module.

**Every play had a hidden step before it: building the input.** In 1.1, 1.3, 1.4, 1.5, 1.6, 1.8, 2.1, 2.3, 2.4, 2.5, 4.4 the first prompt was not the play — it was a research prompt ("create context on…", "find three public bodies…", "list the relevant laws…"), usually with a skill (country-context-data, bdat-assessor, paera-assessor, govstack-cost-estimator, ea-lifecycle-method). The play pages currently say "paste 1–3 paragraphs of context" as if the learner has it. They do not. The context step is the real Play 0 and it produces the most reusable artefact of all.

**Skills change the quality class of the output.** Bare prompt (my Progressa drafts) vs. skill-backed run (Gambia):
- 1.3 with `govstack-cost-estimator`: LIC-tier benchmarks, explicit adjustment factors (×0.7 build, ×1.1 ops), a 10-pair point-to-point calculation, charts, and a "how to read this model" note. The Progressa draft had to say "the percentages are invented"; the Gambia run says "the assumptions are these, confirm the tier".
- 1.5 with `paera-assessor`: the five foundations were first mapped to PAERA sections (taxonomy → §4.6; metamodel → Annex 2; BBs → GovStack catalogue; principles → §5.2; methodology → §5.1/5.4/5.7). That mapping is teaching content in its own right.
- 1.8 with `country-context-data`: five sourced comparators (Rwanda, Malawi, Sierra Leone, Nepal, Liberia) with URLs, versus the video's four unsourced signposts.

**The outputs are, on the whole, better than my Progressa drafts, and different in instructive ways.** Per play:

| Play | What the Gambia run did that the draft did not | Annotation material |
| --- | --- | --- |
| 1.1 | Rated vendor lock-in *None* and then flagged it as the likely false negative — "a pre-digital rather than a post-legacy problem". All evidence was inferential (strategy documents "imply" registries exist). | Conservatism worked exactly as the safeguard intends; also shows that strategy-document input gives strategy-level evidence — a diagnostic on your input, not the country. |
| 1.2 | Included the definition line the Progressa draft forgot; examples were concrete (ACE cable, G-Cloud, civil-registration record flowing into enrolment). | Same prompt, better output when the model has researched context in the same session. |
| 1.3 | Full costed model with benchmarks; "compound-interest" argument for the Information Mediator; sequencing-window insight (RISE and iLearn already live — the window to intercept siloed architectures is narrow). | Read the assumption block first; the sequencing note is the line for the minister. |
| 1.4 | Output delivered as four screenshots, plus three paragraphs of Gambia-specific commentary (EMIS anchor decision, offline/freshness in Region 5, the MoFEA-did-not-transfer-funds risk). | The commentary is the best part and it is text; the table is trapped in images and cannot feed 1.6. Lesson: ask for text. |
| 1.5 | One table per initiative (five tables) rather than the single per-initiative table asked for; honest "not applicable" on the solarisation programme; "iLearn needs the deepest reframing". | Over-delivery is fine; the summary is what carries forward. |
| 1.6 | Context prompt produced a roles register with a *status tag per role* (confirmed / partial / gap). RACI gaps each carry "blocking from phase N" plus resolution options. Six gaps, not five. | Fold both patterns into the prompts. Also: the register named real office-holders because the context prompt asked for them — the play says posts, not names. |
| 1.7 | Model produced a .docx instead of inline text. | Fine as a deliverable, wrong for the chain — nothing downstream can read it. |
| 1.8 | Five comparators, all with URLs; two summary lessons (spending-gate authority, legal instruments not MOUs); Liberia's "Technical Clearance" is a transferable mechanism. Some sources are mirrors (docplayer) or blogs (medium) rather than primary. | Cite-or-discard applied for real: which of these URLs survive the check. |

**Modules 2 and 4 are effectively tested too.** The prompts used for 2.1–2.7, 3.2 and 4.1–4.8 are the tips from those bundles, run end-to-end on one country, with outputs that mostly hold up (the 2.2 metamodel conformance check at 30k characters is the longest and most architect-grade of all). Module 5 (5.1, 5.7) was not run.

**Things that went sideways, all worth teaching from:**
- Output format drift: screenshots (1.4), a .docx (1.7), skill-generated charts (1.3). For the chain, outputs must be text in the chat.
- Model reasoning leaked into a pasted context ("The search confirms… Let me produce it." at the top of 2.5). Harmless, but the learner should strip it.
- Clarifying questions: the 3.2 tool-selection play asked two questions (entity count, budget posture) before answering. Learners should expect this and record the answers as part of the input.
- Prompts were shortened in practice (1.2 collapsed the bracketed audience into "an Education minister in Gambia"; 1.3 dropped budget envelopes and the model substituted benchmarks). The shortened versions worked — a sign the prompts can be a little leaner.
- Privacy: real names of officials appeared in the 1.6 register and RACI. Not sensitive as such (public office-holders), but the play's own rule is posts-not-names, and the GitBook must not publish them.

## 2. What to fold into the GitBook

Ranked by value per unit of work.

### A. Add "Play 0 — Build your country context" (new page, plus a workbook artefact A0)
The single biggest gap between the design and what you actually did. One page holding the context prompts you used, each tagged with the play(s) it feeds:
- digital-landscape brief (feeds 1.1, 1.2) — the country-context-data prompt;
- sector programme list with budgets and BB needs (feeds 1.3, 1.5);
- ministry operating context and constraints (feeds 1.4);
- institutional roles register with status tags — *by post, not name* (feeds 1.6, 1.7);
- country characteristics one-liner (feeds 1.8);
- public bodies and their systems/registries (feeds 2.1, 2.4, 2.5, 4.1);
- legal and policy list (feeds 2.3).
Rules on the page: run with a research-capable assistant; every claim carries a source URL; date-stamp the pack; it is the one artefact you re-use everywhere. Workbook gets **A0 — Country context pack** at the top of the chain, and every play's "Input" line points at the A0 section it consumes.

### B. Prompt refinements, from what worked
- 1.6 (RACI): "for each role gap, name the phase it blocks and give 2–3 resolution options"; the roles input: "tag each role confirmed / partial / gap".
- 1.3: "if budget envelopes are unknown, state the benchmark tier and adjustment factors you apply before the table".
- All plays: add one line — "return the output as text in this chat, not as a file, image or chart". Put the same rule in *How to use the plays*.
- 1.8: "prefer primary sources — government sites, official documents, peer-reviewed work — and mark any mirror or blog source as secondary".
- 1.2 and others: the bracketed placeholders can be shorter; the shortened forms you used are the ones to publish.

### C. A second worked run on each Module 1 page: "Real country — The Gambia"
Keep Progressa as the fixture (it is the cross-KP constant), but add a fifth tab or an expandable, "What it looked like on a real country", with the Gambia output excerpt and 3–4 annotations from the table above. This is the material the Module 5 judgment walkthroughs need anyway: the tutor works a *real* output, not a fixture. Strip office-holder names before publishing; keep posts.

### D. How-to page additions (short)
- The two-step rhythm: build the input (Play 0), then run the play.
- "With the kit": the plays run bare in any assistant; with the GEATDM skills loaded (country-context-data, paera-assessor, bdat-assessor, govstack-cost-estimator, ea-lifecycle-method) you get benchmarks, PAERA section mapping and sourced context. Name which skill helps which play.
- Expect clarifying questions; answer them and record the answers with the input.
- Text in, text out: no screenshots, no files, no charts in the chain.
- Strip the model's own reasoning before pasting an output as the next input.

### E. A Progressa fixture page
Your 4.1 run needed "Add Progressa's information in the context or memory". The canonical Progressa description (bodies, symptoms, stalled flagship, baseline figures) should be one GitBook page so a learner — or an assistant reading the site over MCP — can pull it in one go. It also becomes the input to every "mirror the Progressa example" play in Modules 2 and 4.

### F. Workbook: extend the chain across modules
Add the tested cross-module dependencies: A0/A1/A5 → 2.1 four-layer template → 2.5 BDAT skeleton → 2.6 gap analysis → 2.7 trap screen; A0 → 4.1 canvas → 4.2 Discovery brief → 4.3 gaps → 4.4 sourcing → 4.5 target → 4.6 roadmap → 4.7 gate decision; 4.8 transfer plan as the sector-to-sector exit. The Gambia run is the proof that this chain closes — the workbook page can say so.

### G. Upgrade the Module 2 and Module 4 outline pages
You already have tested prompts for 2.1–2.7 and 4.1–4.8. The outlines can list them as "plays (tested on The Gambia)" with one line each, ahead of the full play pages. Module 3.2 (tool selection) likewise. That is cheap and makes the site standalone for two more modules.

### H. Feed back into the build scripts
Two schema additions beyond the ones already proposed (`play.kind`, `play.feeds`, `play.workedExample`): `play.input` — which A0 section (or earlier artefact) the play consumes — and `play.skill` — the kit skill that improves it. Both are what the Gambia run made visible, and both render straight into the page anatomy.

## 3. Suggested order
1. Play 0 page + A0 in the workbook (A, F) — half a day of content, mostly your own prompts.
2. How-to additions and the prompt refinements (B, D) — an hour.
3. Progressa fixture page (E) — pulls from the Education sector guide §7.1 and the Module 4 scripts.
4. Gambia real-country tabs on Module 1 (C) — the most valuable teaching content, and the one that needs your annotation voice rather than mine.
5. Module 2/4 outline upgrades (G), then the build-script schema (H).
