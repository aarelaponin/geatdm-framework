# PLR-018 version 2 — the claims table, written before the note

Every statement the note of version 2 makes, one row each, with the accepted document and the place
in it that carries it. Paths are relative to the estate's root (`plr-prototype/`); `../` is the KP0-AI
folder, `../../gitbook/` the knowledge products' GitBook. Line numbers are those of the files as
pinned by the `issued` entry of version 2 (20261030T193312Z), read with `sed -n` and `grep -n` on
2026-10-30 between 19:37 and 19:45 UTC. This file's last write precedes the note's first write of
version 2, by `stat`; both times are in the report.

Version 1's table is `_working/PLR-018/claims.md` and is left as it stands. Rows changed from it are
marked **(v2)**, with the gap of the review of version 1 that changed them.

## Names the note uses

| Name in the note | For | Source |
|---|---|---|
| the National Examinations Authority | PNEA | `../../gitbook/start-here/progressa.md:12` ("The Progressa National Examinations Authority (PNEA) runs examinations") — the governing document 2 (CONSTANTS:32) **(v2, G3: v1 used "the examinations authority", from the plan)** |
| the National ID Authority | PNIA | `../../gitbook/start-here/progressa.md:26` ("the Progressa National ID Authority (PNIA)") **(v2, G3)** |
| the registry | the PLR, the Progressa Learner Registry | CONSTANTS:15; `../../gitbook/start-here/progressa.md:12` |
| Civil Registration; the Civil Registration Department | the simulated body; the body itself | use-case-model:29; paper:49-50, :256 |
| the Data Protection Commission | — | CONSTANTS:15 |
| the head of the planning unit … to the Permanent Secretary | author and reader | the instruction's Stage 2; CONSTANTS:38 |

## Group O — the opening paragraph (the answer first), each a summary of rows below

| Row | Statement in the note | Rows it rests on |
|---|---|---|
| O1 **(v2, G1 rule)** | The prototype shows a learner's one record, under the registry's number, through enrolment, a move of school, the examinations reading and the planning figures. (v1 said "one record for each learner", a statement of the whole that the 20 the search misses leave unshown.) | S1, S2, S3, S7, S8, S9 |
| O2 **(v2, G1)** | Its search misses a registered child whose name is spelt differently. (v1: "It does not recognise a child already registered under a different spelling", of the prototype as a whole; v1's "and connects to no other body" is left to N9.) | N3, N4, N5 |
| O3 | It is a prototype for agreement, built by assistant sessions under the Orchestrator, and a service a government runs is specified and generated the way KP4 teaches; it is not the registry itself. | N2 |

## Group S — what the prototype shows

| Row | Statement in the note | Source | Place |
|---|---|---|---|
| S1 **(v2, G1 rule)** | As the planning unit decided, the registry issues a learner's number at first enrolment and holds the birth registration number where one exists. (v1 began "each child has one record", a statement of the whole.) | paper, recommendation 1 (position A) · use-case-model, G1 held on PLR-D03 · CONSTANTS section 4 (the decision is the planning unit's in the story) | paper:248-249; use-case-model:15; CONSTANTS:38 |
| S2 **(v2, G1 rule)** | The registry is searched first: a child it finds is not entered again, (v1: "so a child already on it is not entered again".) | G1 in full, step 2, extension 2a and the minimal guarantee · REVIEW_PLR-011 R5 | G1-enrol-a-learner:55, :67, :43 ("No second record is created for a learner the search or the birth registration number finds"); REVIEW_PLR-011:132-134 |
| S3 **(v2, new, G1)** | and a child it misses is still found if Civil Registration returns a birth registration number a registered learner holds. | G1 in full, extension 4a and acceptance test 4 · REVIEW_PLR-011 (4a run as T4) · REVIEW_PLR-022 (4a moved `duplicates-caught`) | G1-enrol-a-learner:69, :103; REVIEW_PLR-011:83; REVIEW_PLR-022:95 |
| S4 | (v1's "Consent is recorded before the birth record is looked up": carried by G1-enrol-a-learner:56, :43 and REVIEW_PLR-011:116-117, and **not written in version 2**, for length; a statement of what is shown, not a limit, so its absence hides nothing.) | — | — |
| S5 **(v2, G1 rule)** | If Civil Registration cannot be reached, the enrolment goes on, flagged "identity to be confirmed", and the child is referred; (v1: "the child is enrolled", which holds only if the later steps succeed.) | G1 in full, 4c ("rejoins at step 5") · REVIEW_PLR-011 R2 | G1-enrol-a-learner:71; REVIEW_PLR-011:121-124 |
| S6 **(v2, G1 rule)** | if the National ID Authority cannot confirm the parent, no number is issued until it does. (v1: "no number is issued and no record is left", of every such enrolment, where 6a asked again ends enrolled.) | G1 in full, 6a, 6b, tests 8 and 9 · REVIEW_PLR-011 R4, R5 | G1-enrol-a-learner:73-74 ("no PLR number can be issued until PNIA confirms the parent"), :107-108; REVIEW_PLR-011:129-134 |
| S7 | A learner moving school keeps the same number and history. | REVIEW_PLR-012 (accepted) · use-case-model G2 | REVIEW_PLR-012:75; use-case-model:58 |
| S8 | The National Examinations Authority, reading a learner, receives the six fields its basis allows and is refused the other seven, each refusal recorded, on two learners, with simulated faults off and on. (v2 says "reading a learner" where v1 said "Registering a candidate": no candidate register exists, REVIEW_PLR-013:101.) | REVIEW_PLR-013 use 1 · REPORT_PLR-015 (PLR-000003, switches off and on) · REVIEW_PLR-015 (PLR-000006, off and on) | REVIEW_PLR-013:55-57; REPORT_PLR-015:23; REVIEW_PLR-015:21, :33, :37 |
| S9 **(v2, G1 rule)** | The planning unit's three figures are counted from the records whenever the view opens. (v1: "so they move with each enrolment"; an enrolment stopped at the parent's check moves none, REVIEW_PLR-011:131.) | REVIEW_PLR-022 (accepted) · use-case-model V1 | REVIEW_PLR-022:78-79 ("takes each value from `store.figures()`"), :137-138 ("read anew on opening"); use-case-model:92 |

## Group N — what it does not show

| Row | Statement in the note | Source | Place |
|---|---|---|---|
| N1 | All data is invented and looks it; every screen carries the banner "Invented data, Progressa is fictional". | CONSTANTS section 5 | CONSTANTS:42-43 |
| N2 | It is a prototype for agreement, built by assistant sessions under the Orchestrator, and a service a government runs is specified and generated the way KP4 teaches; it is not the registry itself. (The constants' sentence, word for word, carried once, in the opening; "not the registry itself" from section 1.) | CONSTANTS sections 1 and 5 | CONSTANTS:44, :15 |
| N3 **(v2, G1)** | The search matches family name, given names and date of birth exactly, capitals aside. (v1: "A registered learner is found only when …", of the prototype as a whole.) | REPORT_PLR-016, the answer first · G1 in full, step 2 | REPORT_PLR-016:23 ("the store's search asks for 'the same family name, given names and date of birth, letters compared without regard to case'"); G1-enrol-a-learner:55 |
| N4 **(v2, G1)** | Of the 40 invented children on more than one list, it finds 20 from every list, and misses the other 20 on the one list where their family name is spelt differently. | REPORT_PLR-016 · REVIEW_PLR-016 | REPORT_PLR-016:23 ("each variant entry (20 entries) returns nothing … every one of those 20 learners' other entries is found"); REVIEW_PLR-016:15, :21 |
| N4b **(v2, new)** | Both numbers are set in the invented data. | REVIEW_PLR-016 A1 ("The two settings (`fixture.cross_list_duplicates` 40, `fixture.spelling_variants` 20) equal the counts") · plan 2.4 ("known numbers of spelling variants and duplicates seeded in") | REVIEW_PLR-016:21; ../KP0_Orchestrate_Demo_App_Plan_v0.1.md:80-81 |
| N5 **(v2, G1)** | Whether the birth record look-up finds those 20 is not shown. | REPORT_PLR-016 found, not fixed · REVIEW_PLR-016 section 8 item 5 | REPORT_PLR-016:152; REVIEW_PLR-016:86 |
| N6 | Learners counted without a birth record include children whose birth record could not be reached. (v1: "The third figure counts every learner flagged …"; the same fact, shorter.) | REVIEW_PLR-022 section 4 | REVIEW_PLR-022:130-138 ("the child with a birth record counted among those 'without a birth record', as the third row's note warns") |
| N7 **(v2, G2)** | Every basis for sharing a learner's or parent's data is the prototype's assumption, for the Data Protection Commission to confirm. (v1 named PNEA's basis only. "Every" covers the look-up at Civil Registration under consent `CR-LOOKUP`, the National ID Authority's check of the parent, the National Examinations Authority's parental consent, and the clerk's own reading.) | G1 in full, "How the basis is written", steps 1 to 8, 4a · paper section 6 · REVIEW_PLR-013 use 1 | G1-enrol-a-learner:17 ("No governing document names a legal basis for any flow of a learner's data … that is why each is an assumption"), :57, :58-59, :69; paper:355 ("The legal basis for any of the flows of T1. None is named for MoEYS, PNIA or PNEA."); REVIEW_PLR-013:55 |
| N8 | No invented learner holds a national number, so its refusal is not shown against a value. | REPORT_PLR-015 found, not fixed · REVIEW_PLR-015 section 8 item 1 | REPORT_PLR-015:102; REVIEW_PLR-015:79 |
| N9 | Civil Registration, the National ID Authority and Linkup are simulated, not connected. | plan section 2.4 · use-case-model, the actors | ../KP0_Orchestrate_Demo_App_Plan_v0.1.md:85-86; use-case-model:29-31 |
| N11 **(v2, new, G2)** | The birth record look-up depends on the Civil Registration Department answering across Linkup, which the Ministry cannot oblige. | paper, the recommendation; 5.1 item 3; 5.2 · claims v1 row A3 | paper:49-50 ("Because A's link to the birth record needs the Civil Registration Department to answer across Linkup, which MoEYS cannot oblige"), :256-258 ("A's link to the birth record and its match key … depend on it, and MoEYS cannot oblige it"), :269-271 |
| N10 + N12 **(v2, N12 new, the sweep)** | The prototype runs on one computer, unpublished, for primary schools, in English, without sign-in. | CONSTANTS section 2 and its amendment (PLR-D08) · plan 2.3, out of scope · G1 in full, preconditions · REVIEW_PLR-012 | CONSTANTS:9, :21; ../KP0_Orchestrate_Demo_App_Plan_v0.1.md:73-75; G1-enrol-a-learner:41 ("the prototype has no real sign-in"); REVIEW_PLR-012:73 |

## Group A — what the reader is asked to decide

| Row | Statement in the note | Source | Place |
|---|---|---|---|
| A1 | This note decides nothing. | the instruction's Stage 2 ("decides nothing itself"); no accepted document puts a decision to the Permanent Secretary: the decision papers go to the head of the planning unit | CONSTANTS:38; paper:72 |
| A2 | Open are whether the search should find names spelt differently, | REPORT_PLR-016 found, not fixed ("Whether it *should* catch a spelling variant is the owner's question") · REVIEW_PLR-016 section 8 item 5 | REPORT_PLR-016:151; REVIEW_PLR-016:86 |
| A3 **(v2, review item 4 settled)** | and two questions the paper on what identifies a learner puts to the planning unit: whether the Ministry asks the Civil Registration Department to answer across Linkup, and whether it asks the National ID Authority and the Department, separately, to issue a national number at birth registration. (v1 put these "to the Ministry"; the paper puts them to the planning unit. Position B is "PNIA issuing a number to every child at birth registration", paper:43-44.) | paper, the decisions asked of the planning unit, decision 2; 5.4 item 2; position B · use-case-model:15 (decisions 1, 3, 4 ruled, 2 not) | paper:72, :75-76, :43-44, :323, :327-328; use-case-model:15 |

## The items section 3 of the instruction names, and where each is

| Item | Row(s) |
|---|---|
| one learner, one record, the number the PLR issues, what identifies a learner | O1, S1 |
| enrolment with its failures when another body does not answer (G1) | S2, S3, S5, S6 |
| a move of school keeping the number and the history (G2) | S7 |
| PNEA reading across Linkup, refused every field without basis, each refusal logged, 7 of 7 on two learners | S8 |
| the planning unit's three figures, read from the record (V1) | S9 |
| the data is invented, and looks it | N1 |
| caught only when spelt the same: 40, 20 caught, 20 not (PLR-016) — stated of the search (G1 of the review) | N3, N4, N4b, N5 |
| the consent basis is the prototype's assumption (PLR-D07) — every basis (G2 of the review) | N7 |
| Civil Registration, PNIA and Linkup simulated, not connected | N9 |
| runs on one computer, not published (PLR-D08) | N10 + N12 |
| a prototype for agreement, not the registry | O3 = N2 |
| the dependence of the link to the birth record on Civil Registration answering (G2 of the review) | N11 |

## Limits the record names that the note leaves out, with the reason

The sweep of section 11, G2: the constants' section 5; the four goals' reviews (each section 8 and
their findings); the two checks and their reviews; the paper (sections 5 and 6); G1 in full; the
plan's section 2. Every limit of the thing the note describes is either a row above or a row here.

| # | Limit | Where the record names it | Why it is out |
|---|---|---|---|
| L1 | G1 gives the clerk no way to key the birth registration number from a paper record when Civil Registration cannot answer (PLR-D04) | use-case-model:15; paper:79-81, :332-334; G1-enrol-a-learner:71 | a decision taken and ruled, not open; its consequence for the reader is carried by S5 and N6 (the child is flagged and referred, and counted as without a birth record) |
| L2 | the application's code over its budget at G1 (2,881 lines against about 2,500; the budget since raised to about 3,000) | REVIEW_PLR-011:192; CONSTANTS:11, :45 | a matter of how the prototype is built, not of what it shows a reader |
| L3 | secondary schools, universities, the grant programme as a reader, any language but English, any administration screen beyond the training panel | ../KP0_Orchestrate_Demo_App_Plan_v0.1.md:73-75 | carried by N10 + N12 for schools, language and sign-in; the grant programme as a reader and the administration screens are left out for length: neither is a reading the note says is shown |
| L4 | presentation defects: the record shows codes where messages show names; V1 shows code marks raw; the G3 screen mixes time formats | REVIEW_PLR-012:105; REVIEW_PLR-022:184-187; REVIEW_PLR-013:99 | how a screen looks, not a limit of what the note says is shown |
| L5 | test 1 cannot tell Civil Registration's spelling from the clerk's; test 15 reads the screen's own log of calls, not Linkup's traffic | REVIEW_PLR-011:187-191 | limits of two tests of G1 on claims the note does not make (whose spelling is kept; what crosses Linkup) |
| L6 | the store accepts a move to the learner's own school | REVIEW_PLR-012:110 | the screen offers no such move (REVIEW_PLR-012:73, "there is nothing to move"); not a limit of what is shown |
| L7 | no candidate register; no fixture learner lacks the examinations consent; the reason for a refusal is read back from the log | REVIEW_PLR-013:101 | the note says only that the authority reads the learner (S8 worded so); the refusal of every field when consent is withheld is shown by the review's own enrolment (REVIEW_PLR-013:58) and is not a statement of the note |
| L8 | `read()` throws on a refused field with no log entry | REVIEW_PLR-013:98 | unreachable under the contract as built (the same place); not a limit of what is shown |
| L9 | the two leak checks: three refused fields empty for PLR-000003; the birth number assertion empty for PLR-000006 | REPORT_PLR-015:23, :101-104; REVIEW_PLR-015:80, :82 | covered in the note for the one field no learner holds (N8); for the other two the review shows the refusal against a value on PLR-000006 (REVIEW_PLR-015:80) |
| L10 | the 40/20 figure is not V1's `duplicates-caught` | REPORT_PLR-016:23 | the note does not put the two together, so nothing to correct |
| L11 | the search's figure was tried on screen for two entries; the other 96 rest on the store's search outside the browser | REPORT_PLR-016:156; REVIEW_PLR-016:87 | the figure is the search's, and the review worked it out again entry by entry (REVIEW_PLR-016:15); the reader's question does not turn on where the search was run |
| L12 | V1's re-read on a change while open is tested only by reading the source | REVIEW_PLR-022:188-191 | the note says the figures are read each time the view opens (S9), which the review saw run (:137-138), and nothing of a change while it is open |
| L13 | the clerk's procedure the documents leave open and the prototype chooses: who answers for consent; no limit on the wait for a slow answer | G1-enrol-a-learner:41, :72 | the prototype's choices on the clerk's procedure, open to agreement on the screens; no statement of the note rests on them |
| L14 | the paper's limits on the identity question: of which population 71% is; whether the age rule of 16 is law or practice; no recorded preference of PNIA or MoEYS; whether a paper record of the birth number exists; whether PNIA receives birth records | paper:349-362 | limits of the paper on a decision taken (PLR-D03, use-case-model:15), not of what the prototype shows; the note reopens no part of that decision |
| L15 | position A's cost in reuse across sectors, accepted not answered | paper:62 | a cost of the rule decided, not a limit of the prototype |
| L16 | records of the work: the project untracked in version control; tests of G3 and V1 importing G1's helpers; the review instructions naming version 1's paths | REVIEW_PLR-013:97, :100; REVIEW_PLR-022:192-193; REVIEW_PLR-016:84 | matters of the project's record and tests, not of the prototype as a reader sees it |
