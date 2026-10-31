# PLR-018 version 2 — every sentence of the note mapped to a row of the claims table

The note: `docs/note-to-the-permanent-secretary.md`, 33 lines, 496 words by `wc -w`
(`_evidence/A2_wc.txt`). Rows: `_working/PLR-018/v2/claims.md` (last written 19:45:31Z, before the
note's first write of version 2 at 19:45:53Z; `_evidence/A1_stat_order.txt`). One line per sentence,
in the note's order; a sentence joined by a semicolon or a colon counts as one, and maps to every
row its parts carry.

| # | Line | Sentence of the note (opening words) | Row(s) |
|---|---|---|---|
| 0a | 1 | "The learner registry prototype: what it shows and does not" (title) | Names; the instruction's Stage 2 |
| 0b | 3 | "From the head of the planning unit, Ministry of Education, Youth and Skills, to the Permanent Secretary" | Names (CONSTANTS:38; progressa.md:12) |
| 1 | 5 | "The prototype shows a learner's one record, under the registry's number, …" | O1 (S1, S2, S3, S7, S8, S9) |
| 2 | 5 | "Its search misses a registered child whose name is spelt differently." | O2 (N3, N4, N5) |
| 3 | 5 | "It is a prototype for agreement, built by assistant sessions under the Orchestrator, …; it is not the registry itself." | O3 = N2 |
| 4 | 9 | "As the planning unit decided, the registry issues a learner's number at first enrolment …" | S1 |
| 5 | 11 | "The registry is searched first: a child it finds is not entered again, and a child it misses is still found if …" | S2, S3 |
| 6 | 11 | "If Civil Registration cannot be reached, the enrolment goes on, …; if the National ID Authority cannot confirm the parent, no number is issued until it does." | S5, S6 |
| 7 | 13 | "A learner moving school keeps the same number and history." | S7 |
| 8 | 15 | "The National Examinations Authority, reading a learner, receives the six fields …" | S8 |
| 9 | 17 | "The planning unit's three figures are counted from the records whenever the view opens." | S9 |
| 10 | 21 | "All data is invented and looks it; every screen carries the banner …" | N1 |
| 11 | 23 | "The search matches family name, given names and date of birth exactly, capitals aside." | N3 |
| 12 | 23 | "Of the 40 invented children on more than one list, it finds 20 from every list, and misses the other 20 …" | N4 |
| 13 | 23 | "Both numbers are set in the invented data." | N4b |
| 14 | 23 | "Whether the birth record look-up finds those 20 is not shown." | N5 |
| 15 | 25 | "Learners counted without a birth record include children whose birth record could not be reached." | N6 |
| 16 | 27 | "Every basis for sharing a learner's or parent's data is the prototype's assumption, …" | N7 |
| 17 | 27 | "No invented learner holds a national number, so its refusal is not shown against a value." | N8 |
| 18 | 29 | "Civil Registration, the National ID Authority and Linkup are simulated, not connected." | N9 |
| 19 | 29 | "The birth record look-up depends on the Civil Registration Department answering across Linkup, …" | N11 |
| 20 | 29 | "The prototype runs on one computer, unpublished, for primary schools, in English, without sign-in." | N10 + N12 |
| 21 | 33 | "This note decides nothing." | A1 |
| 22 | 33 | "Open are whether the search should find names spelt differently, and two questions the paper …" | A2, A3 |

Sentences: 22, plus the title and the from-line; every one maps to a row. Rows of the claims table
used by no sentence: S4 only, which the table itself marks as not written in version 2, for length.

## The wordings that narrow a row, said here

- Sentence 2 and sentence 11 state the limit of the **search** (G1's step 2), and sentence 14 says
  that whether the birth record look-up (extension 4a) finds the 20 is not shown: the limit as the
  record carries it (the review of version 1, G1; REPORT_PLR-016:152).
- Sentence 5's second half is extension 4a as G1 in full writes it (G1-enrol-a-learner:69) and as the
  reviews ran it (REVIEW_PLR-011:83; REVIEW_PLR-022:95); it says nothing of the 20.
- Sentence 8 says "with simulated faults off and on": the three switches of the training panel, all
  three on in the "on" run (REPORT_PLR-015:23; REVIEW_PLR-015:37).
- Sentence 12 says the other 20 are missed "on the one list where their family name is spelt
  differently": each variant entry returns nothing and every other entry of those 20 is found
  (REPORT_PLR-016:23). The note does not say "most are caught".
- Sentence 16 says "every basis": G1-enrol-a-learner:17 says of every step and extension that its basis
  is the prototype's assumption, and paper:355 that no legal basis is named for any flow.
- Sentence 22 puts the paper's questions to the planning unit, as the paper does (paper:72, :323), and
  the question of spelling to nobody: the record names it open (REPORT_PLR-016:151) and the note,
  inside the story, does not assign it.
