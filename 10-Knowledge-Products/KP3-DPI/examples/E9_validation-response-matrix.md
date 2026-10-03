**Method step:** 9 of 9 — Validate and revise

**Public anchor:** none is needed for the practice, which is the team's own; the nearest public texts are PAERA version 1.0 (GovStack, 2024), section 5.4, whose procedure ends in monitoring and continuous improvement, and principle F7 of the Universal DPI Safeguards Framework (United Nations, 2024), "Foster community engagement"

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, comment, name and figure in it is invented.

# E9 — Validation and revision: Progressa's response matrix and the AI prompts that run the revision

**Form of this example.** The four phases of the revision and the shape of each prompt are the team's method, re-addressed to Progressa. The response matrix and the change summary are rebuilt for Progressa, with comments invented for it. Commenters are named by their role, never by name.

## What this step does

The draft assessment (E5) and the draft roadmap with its investment case (E7, E8) go to every body on the frame page. Each body comments in writing, and the comments are discussed at a validation workshop in Akaba. The team answers every comment in a response matrix, checks every statistic that a comment questions, revises both documents, checks that they still agree with each other, and sends them back with a change summary. AI does much of the drafting of that revision; a person decides every response.

## The revision in four phases

| Phase | What is produced | Prompts |
|---|---|---|
| 1. Prepare | A list of abbreviations; the response matrix, drafted; the list of statistics to verify | P1.1 to P1.3 |
| 2. Revise the assessment | Each part of the assessment, revised section by section against the accepted comments | P2.1 to P2.5, one per domain |
| 3. Revise the roadmap | Each part of the roadmap and the investment case, revised part by part | P3.1 to P3.10, one per part |
| 4. Final checks | A consistency check across the documents; the change summary; a cover note | P4.1 to P4.3 |

Each prompt names the files it needs, so that the person running it attaches exactly those and nothing else.

### One prompt in full: P1.2, drafting the response matrix

```text
You are helping the assessment team answer the written comments on two draft documents:
the DPI assessment of Progressa's education sector, and its roadmap with the investment case.

Files attached:
  1. comments.md          - every comment, with its commenter's role and the place it refers to
  2. assessment-draft.md  - the draft assessment, with finding identifiers F-...
  3. roadmap-draft.md     - the draft roadmap, with gap identifiers G-... and components C-...
  4. investment-draft.md  - the draft investment case, with lines INV-...

For each comment, write one row of a table with these columns:
  Comment | From (role) | Refers to (the identifiers it concerns) | The comment, in one sentence |
  Proposed response | Proposed decision (accepted / accepted in part / not accepted) | Change needed

Rules:
  - Quote no commenter's name; use the role only.
  - Where a comment questions a figure, propose "verify" and add the figure to a separate list.
  - Where accepting a comment would change another document, say which identifier changes.
  - Propose; do not decide. The team decides every response.
```

The other prompts follow the same shape: the task, the files attached, the output wanted as a table or a revised text, and the rules that keep a person in charge of the decision.

## Progressa's response matrix (illustrative)

| Comment | From (role) | Refers to | The comment | Response | Decision | Change made |
|---|---|---|---|---|---|---|
| CM-01 | MoEYS, legal unit | C-02, C-06, C-14 | The amendment to the education act cannot be in force by the end of wave 2, so PLR cannot become the authoritative register then | The drafting stays in wave 1. PLR serves as the authoritative register in one pilot province with parents' consent under the data protection act; the national rollout waits for the amendment | Accepted in part | C-06 limited to the pilot province until the amendment is in force; C-14 made dependent on C-02 in force (E7, Part 5) |
| CM-02 | PDGA | F-INT-1 | The Interoperability score is too high while the ministry of education, MoEYS, is not a member of Linkup | Agreed. The draft placed sub-component I2 at Systematic from the provisional stage of desk result AF-INT-01. That broke rule 2 of the scoring rule in E5, which allows only verified positions: session V-02 had verified that MoEYS is not a member of Linkup, which places I2 at Opportunistic | Accepted | I2 lowered from 2.5 to 1.5; the domain score from 2.3 to 2.1; the stage stays Systematic; the breach of rule 2 recorded beside the maturity table (E5) |
| CM-03 | PNIA | C-07 | PLR must not hold copies of identity numbers | Agreed. PLR keeps the identifier PNIA gives to PLR, its sector token, and never the national number | Accepted | C-07 and INV-07 describe the sector token (E7, E8) |
| CM-04 | Finance ministry, budget department | INV-06 | The high estimate for the learner register needs a basis | The range reflects how the register is bought. The basis is an analogy with identity systems, for which the World Bank found that procurement can change the overall cost by 25 per cent to over 100 per cent; no comparable figure was found for learner registers. The basis is now stated in the case | Accepted in part | The range kept; the basis added to E8 |
| CM-05 | PNEA | C-15, G-09 | Examination registration from PLR should move into the first horizon | It depends on PLR covering every district (G-05), which happens in the second horizon. The point will be reviewed at the end of the first horizon | Not accepted | None |
| CM-06 | MoEYS, statistics unit | F-ACC-2 | Check the year and source of the smartphone figure | Verified: smartphone ownership 45 per cent, MoEYS education statistics yearbook 2025 | Accepted | The source and year added to F-ACC-2 (E5) |
| CM-07 | A district education office | C-10, INV-10 | Assisted registration needs staff time and training, not only equipment | Agreed | Accepted | Staff training and staff time named in INV-10's activities; its range of 250 to 400 already allowed for them, so no total changed (E8) |

### The statistics verified (from phase 1, illustrative)

| Figure | Where used | Source checked | Result |
|---|---|---|---|
| Smartphone ownership, 45 per cent | F-ACC-2 | MoEYS education statistics yearbook 2025 | confirmed |
| 78 per cent of adults hold a national identity | E1; AF-IDN-01 | PNIA annual report 2025 | confirmed |
| 8,200 schools | E1; INV-03 | MoEYS school records, 2026 | confirmed |

## The change summary (extract)

**Assessment (E5).** Interoperability lowered from 2.3 to 2.1 after CM-02, which found that the draft had scored sub-component I2 from a desk result instead of its verified position; its stage unchanged. The source of the smartphone figure added after CM-06.
**Roadmap (E7).** The learner register limited to the pilot province until the amendment is in force (CM-01); the national rollout made dependent on it. The sector token described (CM-03).
**Investment case (E8).** The basis of the ranges stated (CM-04). Staff training and staff time named in the assisted channel's line, within its existing range (CM-07). Totals unchanged.

## The consistency check (phase 4)

The last prompt compares the documents with each other: every gap of E6 traces to a finding of E5; every component of E7 names its gaps; every line of E8 names a component of E7; every comment in this matrix names identifiers that exist. A broken link is fixed before the documents go back to the bodies with the cover note.
