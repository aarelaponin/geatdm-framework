---
name: kp-curriculum-qa
description: >-
  Curriculum / cross-KP coherence gate — the level ABOVE the per-module gates. Where kp-bundle-qa,
  kp-citation-verify and kp-solution-verify each check one module, this checks whether a whole KP coheres as a
  curriculum and whether several KPs cohere as a programme. Use WHENEVER a KP is finished or two KPs must agree:
  "curriculum QA", "does KP2 hang together", "QA across KP1 and KP2", "is there a coverage gap", "are the KPs
  consistent", "cross-KP check", "competency coverage", "the whole-programme review". Runs a competency-coverage
  matrix (the gap finder — this is what caught the KP1 'no target architecture' gap), terminology- and
  PAERA-citation-consistency checks across modules, a forbidden-string and Progressa-canon scan, then a
  fresh-eyes subagent pass over the rendered modules for the qualitative half. Operates on the generated .md
  corpus (KP1-GEA/, KP2-GIF/, …). Run after a KP's modules are individually gated, and again across KPs.
compatibility: Python 3 (standard library only) for the analyzer over the .md corpus. The fresh-eyes pass is a subagent (or Claude) reading the rendered modules.
---

# KP curriculum QA — does the whole curriculum cohere?

## Why this exists

The three per-module gates are blind to everything between modules. A module can pass `kp-bundle-qa`,
`kp-citation-verify` and `kp-solution-verify` and the KP still fail as a *curriculum*: a competency the learning
outcome needs is taught nowhere, a term drifts across modules, a PAERA heading is cited two ways, KP1 and KP2
define the same concept differently, or the hand-off between KPs has a gap. The decisive precedent: KP1's six
modules each passed their gates, yet the KP taught AS-IS assessment thoroughly and never taught designing the
**target architecture** — a learner could diagnose but not design. No per-module gate could see that; a
curriculum-level check did. This skill is that level, made repeatable.

It does **not** repeat the per-module checks. It asks two questions the per-module gates cannot:
**does this KP cover its learning outcome end-to-end and stay internally consistent?** and **do the KPs cohere
as one programme?**

## The two halves

### 1. Deterministic — `scripts/curriculum_qa.py` over the `.md` corpus

```bash
python3 scripts/curriculum_qa.py --matrix kp2 --dir 10-Knowledge-Products/KP2-GIF       # intra-KP
python3 scripts/curriculum_qa.py --matrix kp1-kp2 --dir .../KP1-GEA --dir .../KP2-GIF   # inter-KP
```

It runs four checks and prints a report (exit non-zero on a hard finding):

- **Competency coverage — the gap finder.** The learning outcome is decomposed into competencies, each with
  signal terms and an expected minimum; the script flags competencies the corpus barely covers (`THIN`) or not
  at all (`ABSENT`). Some competencies are marked `gap-candidate` — their absence is a *WARN to consider*, the
  place a hidden gap like KP1's target architecture hides. The matrices live in `references/competency-matrices.md`
  and in the script's `MATRICES`.
- **Terminology consistency.** Curated term groups with their genuine drift spellings (matched case-sensitively),
  e.g. `X-Road` not `x-road`, `access-control list` not `ACL`, `whole-of-government` not `whole of government`.
- **Citation consistency.** PAERA heading rules across the whole corpus: §5.2 cited as *Principles* (not
  "Architectural principles"), §4.5 as *Digital Co-creation*, and the four-layer model cited to **EIF/NIIS, not
  PAERA**. Scoped to citation-label forms and skips correction/explanatory notes, so legitimate prose ("the ten
  architectural principles") is not flagged.
- **Forbidden strings + Progressa canon.** `GEATDM` / `TK-IO-` / `TK-DPI-` / IMF-TA-RA across the corpus, and the
  Progressa institution tokens — flagging, for KP2, any `PDCA` that might be used as a demo member (the canon is
  the four Security Servers MoEYS/PEMIS, PNEA, PLR, PNIA).

### 2. Qualitative — the fresh-eyes subagent

The script cannot judge narrative flow, whether the persona arc reads cleanly, whether a competency is *taught*
versus merely *mentioned*, or whether the KP1→KP2 seam feels continuous. Launch a subagent (the `Explore` or
`general-purpose` agent) to read the rendered modules and report. The brief is in
`references/competency-matrices.md`; in short, ask it to read each module's `.md`, then assess: coverage toward
the stated outcome, the weakest-covered competency, any contradiction between modules or between KPs, the
hand-off integrity, and the persona arc — returning findings, not a rewrite.

## The method

1. Gate every module individually first (the three per-module gates). Curriculum QA assumes per-module clean.
2. Run the analyzer intra-KP, then inter-KP across the KPs that must agree.
3. Triage the deterministic findings: `FAIL` (hard — fix), `WARN` gap-candidate (decide: real gap or out of
   scope), `WARN` terminology/citation (normalise or accept).
4. Run the fresh-eyes subagent and merge its qualitative findings.
5. **Fix decisive gaps UPSTREAM** — in the build scripts — then re-render and re-gate the affected modules
   (exactly as the KP1 target-architecture gap was fixed by adding Module 4.5). Never hand-edit the docx/md.
6. Write the consolidated curriculum-QA report. (By the KP1 precedent the report itself is kept local, not
   committed, unless asked.)

## Tuning the analyzer is part of the job

A first run often surfaces false positives (a citation rule catching prose, a competency matrix mis-tuned). That
is expected: tighten the rule or the matrix in the script, re-run, and the analyzer becomes a sharper instrument
for the next KP. A clean run after tuning — where every remaining finding is a real curriculum decision — is the
goal, not a green light on the first pass.

## What good looks like

Across the KPs in scope: zero hard findings (no absent core competency, no forbidden string, no citation-rule
violation); every gap-candidate either covered or consciously accepted as out of scope; terminology consistent
or normalised; and the fresh-eyes subagent reports the curriculum reads as a coherent whole with a sound seam
between KPs. Then the KP — or the programme — is curriculum-clean, above and beyond its per-module gates.
