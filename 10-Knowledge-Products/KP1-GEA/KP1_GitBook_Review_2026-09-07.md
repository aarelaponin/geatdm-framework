# KP1 GitBook content review — 2026-09-07

Scope: `10-Knowledge-Products/gitbook/` as of 7 Sep 2026 — Start here (8 pages), KP1 home, Module 1 (7 plays, worked examples run), Module 2 (7 plays, prompts final, worked examples not run), workbook, `pages.json`, `_shared/sources.yaml`. Modules 3–5 skimmed for structure only.

Mechanical checks passed: no broken relative links (all 55 pages); every `Open in Claude` deep link decodes to exactly the prompt block above it; runtime sums in the video index add up (M1 31 min, M2 32 min); the kit page's play→skill table matches every module README's Kit-skill column.

## Verdict

The Start-here chapter and Module 1 are publishable to the Giga GitBook with a short fix list. Module 2 is a good prompt set with a good concept layer, but it is visibly a different product from Module 1 until the `kp-play-run` pass has been done — and three template defects make Module 2 look weaker than it is. The single most important finding is a substantive error in a Module 1 teaching annotation (1.3, item 1 below).

---

## A. Must fix before Giga

### A1. 1.3 worked example — the "break-even" headline is an apples-to-oranges comparison, and the annotation praises it
The model's output compares option (a) build-bespoke = **3.9m build only** with option (b) shared = **1.45m integration + 1.25m one-off platform + 1.5m five-year run = 4.2m** and calls it "roughly break-even". But the same output states that bespoke carries ≈15 %/yr maintenance (≈0.6m/yr). Counting five years of that, option (a) is ≈**6.9m** against ≈4.2m — the shared route already wins by ~2.7m on these five programmes, before programme six.

Reading-the-output note 1 then says the break-even headline is "the honest number… the one a finance official will believe". A finance official would spot the asymmetry immediately. This is the page where the course teaches learners to read cost arguments critically, and the annotation misreads it. Fix: re-write note 1 to catch the asymmetry ("the model priced five years of running the shared platform but zero years of maintaining the bespoke copies — add 5 × 0.6m to column (a) and the case changes"), and keep note 4 ("check the arithmetic") — it is now proven right.

### A2. Worked examples that depend on context not shown in "Example input"
Two Module 1 annotations admit the output used context the learner cannot see:
- 1.2 note 3: *'one learner, one record' … the model picked it up from context elsewhere in this course.* The phrase is not in the Example input.
- 1.7 note 1: *the model added it because of the duplicate-registry diagnostic earlier in the chain.* A1 is not in the Example input.

A learner who runs the prompt bare with exactly the stated input will not reproduce the output, and the page says nothing about that. Either (a) add the chain artefacts to the Example input ("A1 was pasted above the prompt"), or (b) put a one-line convention on *How to use the plays*: "worked examples were run in one chained session per module; your bare run will differ where an annotation says so." (b) is cheaper and is also more honest about how the plays actually get run.

### A3. Status claims contradict each other
- `start-here/README.md`: KP1 "Module 1 is published"; the four-KP table says "Module 1 published".
- `kp1/README.md`: Modules 1–5 all **Published**.
- Every Module 2–5 play page: "Worked example not yet run".

Two-state status is not enough. Suggest three states per module — *concept + prompt live* / *worked example pending* / *video pending* — and use the same word everywhere. As it stands a Giga reader lands on "Published" and finds a placeholder tab.

### A4. "Discovery (Module 3)" — wrong module in two places
`play-0.md` §"What the pack looks like" and `1-1.md` "When to run it" both say Discovery is Module 3. Discovery is 4.2; Module 3 is repository/tooling/governance. (Probably a leftover from the pre-Module-5-cut numbering.)

### A5. The Progressa fixture disagrees with itself about the learner registry
- `progressa.md` sector paragraph: PLR "is meant to be the one list of who is a learner" (exists?).
- `progressa.md` baseline and A0 §2: "no National Learner Registry"; NLR is a *planned* USD 6.5m programme.
- `2-5.md` concept: "The Learner Registry is a state registry — the authoritative single source for who is a learner … owned by the Learner Registry" (treated as existing and owning the Learner domain).
- KP2 build pack (per progressa.md): "PNEA ← PNIA + PLR" (exists).

Since Progressa is the single fixture across all four KPs, decide once: PLR exists as a legal entity with a mandate but no working system (this reconciles all four), and say so in the baseline. Related: 2.5's narration uses generic names (Ministry of Education, National Examination Authority, Learner Registry, National Identity Authority) while every other page uses MoEYS / PNEA / PLR / PNIA — worth aligning in the GitBook concept text even if the video narration stays generic.

### A6. Artefact numbering has a hole that will be asked about
Module 1 ends at A7; Module 2 starts at A9; A8 is 5.1's comparator cards. Every learner will wonder what A8 is. Either renumber (A8→A29-ish and shift) or add one line to the Module 2 README and the workbook: "A8 is produced in Module 5 (5.1); the numbers follow the original curriculum order."

---

## B. Template defects (fix once in the renderer, fixes 30+ pages)

### B1. Kind-badge boilerplate contradicts the box above it
Every drafting play prints *"Input needed: names of posts, institutions, programmes"*; every diagnostic play prints *"Input needed: 1–3 paragraphs of context."* On 2.1 the input is a ministry description, on 2.2 it is a draft model, on 2.3 a principle plus a list of laws, on 2.6 four-layer AS-IS notes. The **Bring** line two paragraphs up already says the right thing; the badge sentence is redundant when right and wrong when not. Drop the "Input needed" clause from the badge sentence.

### B2. "With the kit" is the same sentence for every skill
*"`X` brings the sourced input in and checks every claim before you paste it on."* That describes `country-context-pack` and `cite-or-discard`. It does not describe `paera-reference-check` (checks against PAERA as published), `ea-tool-evaluator` (scores tools, runs an export test) or `ea-governance-drafter` (drafts ToR/RACI). The kit page already has an accurate per-skill "What it adds" column — pull that string into the box instead.

### B3. Module 2 "What next" tabs are placeholders that repeat "Watch for" verbatim
*"Work the output the way the safeguard asks, then file it as A9 … [Watch-for sentence repeated]."* Fine as a stub, but it prints as if final. Either label it as pending with the worked example, or hide the tab until `kp-play-run` fills it. Same for the "Example on Progressa" tab: it says the shape "is produced by a `kp-play-run` pass" — an internal pipeline name that means nothing to a Giga learner. Say "will be added" instead.

### B4. Module 2 "Bring" lines lost the section names
Module 1: *From **A0 §1 Digital-landscape brief***. Module 2: *From **A0 §6***. The Play 0 section title is what lets a learner find the right paste; restore it.

### B5. "How to use the plays" promises what only Module 1 delivers
*"That is why every play page has a **Reading the output** tab, and why it is the longest one."* True for 7 of 35 pages today. Soften to "every completed play page" or fix when the pass is done — but the Start-here chapter is shared across all four KPs, so it should not make module-level promises.

### B6. Minor consistency
- Start-here README: "Read the first three pages once — about fifteen minutes"; every module README: "ten minutes" for two pages. Pick one.
- Module 2's chain claims A10 and A15 "end the chain". A15 (two-trap screen) is the obvious input to 3.5's review-gate checklist and 4.4's sourcing matrix; A10 is the obvious input to 3.1's repository structure. Wire them, or the plays look like dead ends.

---

## C. Content notes — Start here

**working-with-ai.md** — the strongest page on the site; the "cite or discard, applied to the course" move (every claim links to a source, reading list re-checked with the skill) is exactly right for an ITU audience. Three things to check:
- *AI Playbook for the UK Government — "Feb 2025, upd. Sep 2026"*: today is 7 Sep 2026 and `sources.yaml` was verified 6 Sep. Plausible but worth a second look — a future-dated update in a published KP is the kind of error the page warns about.
- *OECD Governing with AI — "Sep 2025"* but the URL path says `2025/06`. One of the two is wrong.
- *"roughly two thousand court decisions"* in the Charlotin database — a figure that goes stale monthly; say "well over a thousand" or drop the number and let the link carry it.
- The de-identification meta-play says run it *only* on a local model. Most Giga learners will not have one. Add the manual fallback: the table of (removed item / category / placeholder) is a checklist a person can apply by hand in ten minutes.

**prompting-techniques.md** — good. The "What none of the three has: the safeguard line" claim is the course's genuine differentiator and worth keeping prominent. "Play 1.1 is the worked example" is a good device.

**play-0.md** — the seven-section pack is the right retention mechanism. §5 ends with a paragraph starting "A fuller country brief … is worth producing once with the same prompt widened" — that is a hidden eighth prompt; either give it a box or cut it.

**ea-plays-kit.md** — clear. Note that two lines of `/plugin …` commands plus "Cowork" and "Settings → Capabilities" are Claude-specific vocabulary on a site that insists it is tool-neutral; this is the calibration item already planned with ITU, and the page handles it as well as it can ("the plays run bare").

**progressa.md** — see A5. Otherwise the tabbed context pack is exactly what a learner without a country needs; consider adding §7 (legal list) since 2.3 consumes it and the tab set stops at §6.

**video-index.md** — fine as a tracker. The closing line "Nothing on the site is edited by hand" is a note to yourself, not to the learner.

## D. Content notes — Module 1

Publishable. The Reading-the-output tabs are the best teaching material on the site: 1.1 note 4 (the missing 2021 Framework evidence), 1.4 note 3 (the model smuggled in a recommendation), 1.6 note 4 (argue with donors-as-Informed), 1.7 note 3 (can a ministerial board bind another ministry?) are all the right kind of architect's reading. Apart from A1/A2 above:

- 1.5 Sources lists "GovMarket" bare with no URL; 1.2 lists "TOGAF BDAT layering reference" without a citation. On a site that grades sources by tier, uncited sources on the course's own pages stand out.
- 1.5 concept: "PAERA … published in 2024 under GovStack" — confirm the year against the PAERA v1.0 front matter before Giga.
- PAERA section anchors (§2.1, §2.3, §3.1.3, §4.2.1, §4.5, §5.2, §5.4, Annex 2, §4.6/A1.2) are consistent with the rest of the geatdm-framework repo but I could not verify them against PAERA itself from here; one pass with the PDF open is worth it since the anchors are in every page header.
- 1.6 lifecycle diagram: 3–4 + 6–8 + 4–6 + 6–8 weeks = 19–26 weeks, which supports "about six months". Good.

## E. Content notes — Module 2

The concept sections are longer than Module 1's (470–620 words vs 300–490) and read as narration rather than reference text: "Tell me which of the three a body is, and I can already guess…", "Start with the Business layer", and each one ends with a recap sentence that restates the Single-message quote already at the top of the page (2.4, 2.6, 2.7 verbatim). Module 1's concepts were clearly rewritten for the page; Module 2's were lifted from the v0.2 script. Two options: run the same tightening on the Module 2 concept text now, or accept it until the v0.3 scripts exist and regenerate. Either way, cut the closing recap line — the page already carries it.

The prompts themselves are solid. 2.2's metamodel prompt embeds the entity list and relationships so a bare assistant does not need PAERA to hand — that is the right design for tool-neutrality. 2.7's four questions ("if this supplier doubled their price, could we replace them within two years?") are the most memorable lines in the module.

Given that most of Module 2 has already been run end-to-end on The Gambia, the material for the worked examples largely exists; the Progressa runs are what is missing, and Module 2 is the natural next `kp-play-run` target before anything goes to Giga.

## F. Suggested order of work

1. Fix A1 (one annotation), A4 (two strings), A5 (fixture decision + one baseline line), A6 (one note).
2. Renderer fixes B1–B4 in one pass; regenerate.
3. Status vocabulary (A3) and the Start-here promises (B5) — decide the three states and apply.
4. `kp-play-run` on Module 2 → annotate → then Modules 3–5.
5. Source date pass on working-with-ai (C) and the PAERA anchor check (D) as the last step before the Giga move.
