# PLR-018 — the claims table, written before the note

Every statement the note makes, one row each, with the accepted document and the place in it that
carries it. Paths are relative to the estate's root (`plr-prototype/`) unless they begin with `../`
(the KP0-AI folder). Line numbers are those of the files as pinned by the issued entry of PLR-018
(read with `grep -n` and `sed -n` on 2026-10-30 between 19:13 and 19:16 UTC).

## Names the note uses

- "the examinations authority" for PNEA: `../KP0_Orchestrate_Demo_App_Plan_v0.1.md:52-54` (section 2.2: "head
  teachers, PNIA, the examinations authority and the Data Protection Commission"); the constants
  (CONSTANTS:15) name the same four parties with "PNEA" in its place. Used so that the note names the
  body in words.
- "the registry" for the PLR, the Progressa Learner Registry (CONSTANTS:15; paper:28).
- "the head of the planning unit … to the Permanent Secretary": the instruction's Stage 2; CONSTANTS:38
  (inside Progressa's story the planning unit's head receives the decision papers).

## Group O — the opening paragraph (the answer first), each sentence a summary of rows below

| Row | Statement in the note | Rows it rests on |
|---|---|---|
| O1 | The prototype shows one record for each learner through enrolment, a move of school, the examinations authority's reading and the planning unit's figures. | S1, S3–S6, S7, S8, S10 |
| O2 | It does not recognise a child already registered under a different spelling, and connects to no other body. | N3, N4; N9 |
| O3 | It is a prototype for agreement, not the registry itself, built by assistant sessions under the Orchestrator, and a service a government runs is specified and generated the way KP4 teaches. | N2 |

## Group S — what the prototype shows

| Row | Statement in the note | Source | Place |
|---|---|---|---|
| S1 | Each child is one learner with one record, identified by a number the registry issues at first enrolment; the record holds the birth registration number where one exists. | `docs/paper-what-identifies-a-learner.md` (position A, the recommendation) · `docs/use-case-model.md` (G1 held on position A as ruled, PLR-D03) | paper:248-249 (section 5.1, item 1); use-case-model:15 |
| S2 | This follows the planning unit's decision on what identifies a learner (inside Progressa's story the decision is the planning unit's; the owner ruled it). | `docs/use-case-model.md` · `CONSTANTS.md` section 4 | use-case-model:15 ("Goal G1 is held on the planning unit's decisions as the owner ruled them: position A …"); CONSTANTS:38 |
| S3 | A clerk searches the registry first, so a child already on it is found and not entered again (same number, no second record). | `docs/use-case-model.md` G1 summary · `_reviews/REVIEW_PLR-011_g1-screens_v2_2026-10-30.md` R5 (accepted) | use-case-model:41; REVIEW_PLR-011:132-134 (`found-on-plr` with the same number) |
| S4 | Consent is recorded before the birth record is looked up. | `_reviews/REVIEW_PLR-011_g1-screens_v2_2026-10-30.md` R1 | REVIEW_PLR-011:116 ("0 calls across Linkup, so consent comes before the look-up") |
| S5 | When Civil Registration cannot be reached, the child is enrolled with the flag "identity to be confirmed" and referred. | REVIEW_PLR-011 R2 · use-case-model G1 summary | REVIEW_PLR-011:121-124 (flag `civil-registration-unreachable`, referred `true`; "4c as written"); REVIEW_PLR-022:135-136 (the flag `identity-to-be-confirmed · civil-registration-unreachable` on such an enrolment); use-case-model:41 |
| S6 | When PNIA cannot confirm the parent, no number is issued and the enrolment stops without leaving a record. | REVIEW_PLR-011 R4 | REVIEW_PLR-011:129-131 ("No PLR number can be issued…"; "Stopping gave `abandoned` with no record shown, and the figures were unchanged") |
| S7 | When a learner moves school, the receiving clerk finds the record and the learner keeps the same number and the same history. | `_reviews/REVIEW_PLR-012_g2-screens_v2_2026-10-30.md` (accepted) · use-case-model G2 | REVIEW_PLR-012:73-75; use-case-model:58 |
| S8 | When PNEA reads a learner to register an examination candidate, it receives the six fields its basis allows and is refused the seven it has no basis for, each refusal recorded. | `_reviews/REVIEW_PLR-013_g3-screens_v2_2026-10-30.md` (accepted) · `_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md` with its accepted review | REVIEW_PLR-013:55-57; REPORT_PLR-015:23 (the answer first) |
| S9 | This holds for all seven refused fields, on two learners, with the simulated services working and with all three of their faults switched on. | REPORT_PLR-015 (learner PLR-000003, switches off and on) · `_reviews/REVIEW_PLR-015_pnea-refusal_2026-10-30.md` (learner PLR-000006, off and on) | REPORT_PLR-015:23; REVIEW_PLR-015:38-40, 75 |
| S10 | The planning unit's view shows three figures — learners on the registry, duplicates caught at enrolment, enrolled learners without a birth record — counted from the records themselves, so each moves as a clerk enrols a child. | `_reviews/REVIEW_PLR-022_v1-figures_v2_2026-10-30.md` (accepted) · use-case-model V1 | REVIEW_PLR-022:78-83 ("takes each value from `store.figures()`"), 129-140 (figures move 300 → 301, 0 → 1, 87 → 88); use-case-model:92 |

## Group N — what it does not show

| Row | Statement in the note | Source | Place |
|---|---|---|---|
| N1 | All the data is invented and looks it; every screen carries the banner "Invented data, Progressa is fictional". | `CONSTANTS.md` section 5 | CONSTANTS:42-43 |
| N2 | It is a prototype for agreement, not the registry itself, built by assistant sessions under the Orchestrator, and a service a government runs is specified and generated the way KP4 teaches. (The constants' sentence, carried once.) | `CONSTANTS.md` sections 1 and 5 | CONSTANTS:15 ("a prototype for agreement, not the registry itself"), 44 |
| N3 | The prototype finds a learner already on the registry only when family name, given names and date of birth are the same, capitals and small letters treated alike. | `_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md` with its accepted review | REPORT_PLR-016:23 ("the same family name, given names and date of birth, letters compared without regard to case") |
| N4 | Of the 40 invented children on more than one list, it finds 20 from every list they appear on; it does not find the other 20, each of whom has a family name spelt differently on one list. | REPORT_PLR-016 · `_reviews/REVIEW_PLR-016_cross-list-learners_2026-10-30.md` | REPORT_PLR-016:23; REVIEW_PLR-016:15 |
| N5 | Whether the later look-up of the birth record would find some of those 20 is not shown. | REPORT_PLR-016 found, not fixed · REVIEW_PLR-016 section 8 item 5 | REPORT_PLR-016:152; REVIEW_PLR-016:86 |
| N6 | The third figure counts every learner flagged "identity to be confirmed", whatever the reason, so a child whose birth record exists but could not be reached is counted among those without one. | REVIEW_PLR-022 section 4 | REVIEW_PLR-022:129-138 |
| N7 | The basis on which PNEA receives its six fields, parental consent, is the prototype's assumption, for the Data Protection Commission to confirm. | REVIEW_PLR-013 use 1 (PLR-D07 as G3's review records it) | REVIEW_PLR-013:55 ("…parental consent… — the prototype's assumption, for the Data Protection Commission to confirm (PLR-D07)") |
| N8 | No invented learner holds a national number, so the prototype shows that field refused to PNEA but cannot show it withheld against a value. | REPORT_PLR-015 found, not fixed · REVIEW_PLR-015 section 8 item 1 | REPORT_PLR-015:102; REVIEW_PLR-015:79 |
| N9 | Civil Registration, PNIA and Linkup are simulated in the browser and answer from the invented data; none is connected. | `../KP0_Orchestrate_Demo_App_Plan_v0.1.md` section 2.4 · use-case-model actors | plan:85-86; use-case-model:29-31 |
| N10 | It runs locally on one computer and is not published. | `CONSTANTS.md` section 2 and its amendment line (PLR-D08) | CONSTANTS:9, 21 |

## Group A — what the reader is asked to decide

| Row | Statement in the note | Source | Place |
|---|---|---|---|
| A1 | This note decides nothing. | the instruction's Stage 2 ("decides nothing itself"); no accepted document records a decision put to the Permanent Secretary | — (a statement about the note, not a claim about the prototype) |
| A2 | Whether the search should also find a learner whose name is spelt differently on another list is an open question. | REPORT_PLR-016 found, not fixed ("Whether it *should* catch a spelling variant is the owner's question") · REVIEW_PLR-016 section 8 item 5 | REPORT_PLR-016:151; REVIEW_PLR-016:86 |
| A3 | The paper on what identifies a learner also asks the Ministry to decide whether it asks the Civil Registration Department to answer across Linkup, on which the link to the birth record depends, and whether it puts to PNIA and the Department, as a separate request, that a national number be issued at birth registration. | `docs/paper-what-identifies-a-learner.md`, decisions 2; recommendations 3 and 4; position B | paper:75-76, 327-328, 255-262 (recommendations 3 and 4), 43-44 (position B) |

## The items section 3 of the instruction names, and where each is

| Item the instruction names | Row(s) |
|---|---|
| one learner, one record, the number the PLR issues, what identifies a learner (the paper's conclusion) | S1, S2 |
| enrolment with its failures when another body does not answer (G1) | S3–S6 |
| a move of school keeping the number and the history (G2) | S7 |
| PNEA reading across Linkup, refused every field without basis, each refusal logged, 7 of 7 on two learners (G3, PLR-015) | S8, S9 |
| the planning unit's three figures, read from the record (V1) | S10 |
| the data is invented, and looks it | N1 |
| caught only when spelt the same: 40, 20 caught, 20 spelt differently not (PLR-016) | N3, N4 (and N5) |
| the consent basis is the prototype's assumption, for the Data Protection Commission (PLR-D07) | N7 |
| Civil Registration, PNIA and Linkup simulated, not connected | N9 |
| runs on one computer, not published (PLR-D08) | N10 |
| a prototype for agreement, not the registry | N2 |

## Limits the record names that the note leaves out, with the reason

| Limit | Where the record names it | Why it is out |
|---|---|---|
| G1 gives the clerk no way to key the birth registration number from a paper record (PLR-D04) | use-case-model:15; paper:79-81 | a decision already taken that narrows the design, not a limit of what the prototype shows; within 500 words it adds nothing the reader must act on |
| application code over its budget of about 3,000 lines / 2,500 lines at G1 | REVIEW_PLR-011 section 8 | a working matter of the build, not of what the prototype shows a reader |
| the prototype has no sign-in | REVIEW_PLR-012:73 | real sign-in is out of the plan's scope (plan section 2.3) and implied by "prototype for agreement"; left out for length |
| the planning view shows code marks raw; record shows codes where messages show names | REVIEW_PLR-022 section 8 item 1; REVIEW_PLR-012 section 8 | presentation defects, not limits of what is shown |
| secondary schools, universities, the grant programme as a reader, any language but English out of scope | plan section 2.3 | the plan's scope, not named by the accepted reviews or checks as a limit of the prototype; left out for length |
