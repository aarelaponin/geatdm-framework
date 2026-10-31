---
kind: review
reviews: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-018_note-to-the-permanent-secretary_2026-10-30.md
of_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-018_note-to-the-permanent-secretary_2026-10-30.md (PLR-018, version 1)
written_by: a session that neither wrote nor carried out the instruction — a sub-agent started from the review instruction PLR-018-R, version 1, with a fresh context
model: claude-opus-5-5 — read from the line of this session's own context that names the model it is configured for; the review instruction names Opus
computer: MacBookPro — printed by `hostname` on the computer the session's shell reaches, right after the started entry
window: 2026-10-30 19:21:29 UTC (the started entry 20261030T192129Z_PLR_started_PLR-018-R.yaml) to 2026-10-30 19:29 UTC, no pause; closed at the moment of writing
verdict: not accepted
downstream_artefact: the instruction's next version, /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-018_note-to-the-permanent-secretary_2026-10-30.md, version 2
---

# REVIEW — PLR-018: the note to the Permanent Secretary

Evidence of this review: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-018-R/_evidence/` (below, `E/`). The reviewer's own sentence-by-sentence trace, written from the note and the accepted documents before the round's `claims.md` and `mapping.md` were opened: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-018-R/trace.md`.

**Verdict: not accepted.** The note is one page (496 words), carries the constants' sentence and the banner once each, names no path, instruction, tool or model, and 19 of its 21 sentences are carried by accepted documents; every figure (7 of 7, 6 of 6, two learners; 40, 20 caught, 20 not caught) holds at its source. But two sentences say more than the record carries — that the prototype "does not recognise" a child registered under another spelling and finds a registered learner "only" on the three fields — where the accepted G1 finds such a child by the birth registration number (extension 4a) and the record says whether it would for the 20 is not established; one limit the record names (every basis of G1's sharing, not only PNEA's, is the prototype's assumption) is left out without a reason; and three of the register's refusals are kept on a reason that does not hold at its source. Three gaps, below.

## 1. The tests of success, one by one

- **A1 — the claims table. Met, with the faults of G1 and G2 carried in it.** `_working/PLR-018/claims.md` has groups O, S, N and A, every row with a source and line; every item section 3 names maps to rows; a table of limits left out gives reasons. Each line reference I read at source holds (trace.md), except row N3, which cites REPORT_PLR-016:23 — a statement about the store's search — for a claim about the prototype as a whole (G1), and row O2 which rests on it.
- **A2 — at most 500 words; every sentence maps. Not met in substance.** `wc -w` 496 (E/A4_page.txt); 21 sentences by my own count (E/figure_reestablished.txt). Every sentence maps to a row in `mapping.md`, but sentences 2 and 12 map to rows the record does not carry as written (G1), so mapping to a row is not tracing to the record.
- **A3 — the register's check, every line dealt with. Not met.** Run by me, E/register_check.txt (self-test first, E/register_selftest.txt, `cases: 10, failed: 0`): `refused: 8 (list 1: 8, list 2: 0, list 3: 0, list 4: 0)`, exit 1 — the same eight as the report. «Skills» and «Commission» are body names, false positives as the report says; «KP4», «sessions», «Orchestrator» are the constants' required sentence. The three «PNIA» are kept because "the documents give it no name in words"; that does not hold (G3).
- **A4 — the constants' sentence and the banner once each; no path, instruction number, tool or model. Met.** E/A4_page.txt: the banner 1, the constants' sentence word for word 1, "prototype for agreement" 1; the `grep` for a slash, a file extension, `PLR`, a goal code, a date, a model or tool name, "ledger", "round", "instruction": no line, `grep_exit=1`. The only all-capital tokens are KP4 (required) and PNIA; the only numbers are 20, 40. No real name or number: every name is of the course's fictional country.
- **A5 — the record names nothing outside the note, `_working/PLR-018/` and the report. Met.** `RECORD.txt` section 1: one file, the note, added. By another route, `find` over the project for files newer than the round's started entry (19:11:55 UTC), outside `node_modules`, `dist` and `_working`: the report, the note and `WHAT_IS_RUNNING.md` (rebuilt by the ledger); under `_working/`, nothing outside `PLR-018` and this review's `PLR-018-R` (E/find_newer.txt).
- **A6 — `round_record.py check` → `## Findings — 0`. Met.** Run by me (section 6).
- **A7 — placement and trace pass. Met.** Section 6.
- **A8 — the ledger. Met.** One `started` (19:11:55Z) and the `finished` (19:21:08Z) of version 1; the report's last write, 19:20:56Z by `stat` (E/outputs_stat.txt), precedes it.

## 2. One figure re-established, by a route the report did not use

- **The word count and the sentence count.** Report: `wc -w` 496 and "21 sentences" in `mapping.md`. Mine: Python's `str.split` 496, a count of runs of letters and digits 492, and a split on sentence ends over the body 21, listed one by one (E/figure_reestablished.txt). **Agree**; under 500 by either count.
- **The 7 and the 6.** The note's "six fields … the other seven" against `docs/groundwork.md:364-376` read by `grep`: 13 rows of `pnea-officer`, 7 with basis `none`, 6 with `parental consent` (same file). **Agree** with REPORT_PLR-015:38-39 and REVIEW_PLR-015:19.
- **The 40, 20 and 20** were read at REPORT_PLR-016:23, :49-53 and REVIEW_PLR-016:15, :37, :39: 40 on more than one list, 20 caught from every entry, 20 not caught, exactly the 20 with a variant. **Hold.**
- Times in the report's own words, read at source: the window opens at the started entry 19:11:55Z and closes at the report's last write 19:20:56Z (`stat`, `window.out`); the note's last write 19:17:52Z equals `A2_wc.txt` and `A3_register_check.txt`; the record's `end` 19:18:50Z. All hold. One time does not sit with the report's account: section 8, item 1.

## 3. The outputs exist

`stat` and `shasum -a 256` at 19:25:31 UTC (E/outputs_stat.txt): the note 3010 bytes `b71ccc38…`, `claims.md` 11442 `d1bc7566…`, `mapping.md` 3945 `f50c4076…` — each as the report's `outputs` line declares; `_evidence/` (12 files, every log the report cites among them) and `_record/` exist; the report 13773 bytes. The trace check: "outputs: 3 of 3 named exist". **All found.**

## 4. The running application

Not applicable: the round wrote a document, no application model; it ran nothing of the application.

## 5. What a review of this kind runs (`_kinds/drafting.md`, part 2)

- **The programs of the skill named in the instruction:** the instruction names no skill for this task (its read-first item 3); its one program is the register's check — **run** (A3).
- **Identifiers resolved against the register and the use case model:** the note carries none; not applicable.
- **The groundwork's tables parsed again:** not applicable; the note is not the groundwork.
- **For a document for a business reader, `readers_register_check.py`: run**, and the note read by me against `READERS-REGISTER.md`. Rule 1: the answer first, British spelling (`recognise`, the positive list). Rule 2: no idiom. Rule 3: the apparatus is limited to the constants' sentence and «PNIA» (G3). Rule 4: no account of an investigation in the past tense; sentences 9 and 13 give results of checks ("on two learners", "of the 40 … 20 are found") in the present tense, which the subject makes unavoidable. Rule 6: the band, 500 words, fixed in the instruction and met.
- **Part 1 against the report.** Item 2 (a statement the upstream does not carry): shown by G1. Item 6 (the register): shown by G3.

## 6. The four mechanical checks, run by the reviewer

| Check | Exit | The line that decides | Log |
|---|---|---|---|
| `trace_check.py` on the report, with both constants | 0 | `trace check: clean`; `inputs: 14 of 14 pinned by 20261030T190853Z_PLR_issued_PLR-018.yaml hash the same now` | E/trace_check.txt |
| `placement_check.py` on the instruction | 0 | `placement check: clean` | E/placement_check.txt |
| `round_record.py check --record …/_working/PLR-018/_record --report <report> --tolerance 2` (the options `check.out` prints), 3.11.14 | 0 | `## Findings — 0`; `quoted blocks read against the file they name: 3`; `check.out` unchanged by the run (sha256 before and after equal) | E/round_record_check.txt |
| `ledger.py show --code PLR --id PLR-018` | 0 | `issued` 19:08:53Z, `started` 19:11:55Z, `finished` 19:21:08Z, all version 1 | E/ledger_show.txt |
| `ledger.py check` | 0 | `check: clean` | E/ledger_check.txt |

**Accounts.** `issued`, `started` and `finished` each carry `(account removed)`, as the report's declaration does.

## 7. The verdict, and what follows from it

**Not accepted — three gaps: G1 to G3.** Kinds: trace 2, item 1.

**G1 (trace) — two sentences say more than the record carries; fails A2 and the instruction's section 3 ("A statement that no accepted document carries is not written").** Ties to `_kinds/drafting.md`, part 1, item 2.
- The note, line 5: «It does not recognise a child already registered under a different spelling»; line 23: «A registered learner is found only when family name, given names and date of birth match, capitals aside.»
- The source the round cites, REPORT_PLR-016:23, says this of **the store's search** only: «the store's search asks for "the same family name, given names and date of birth, letters compared without regard to case"».
- The accepted G1 finds a registered child the search misses by another route: `docs/G1-enrol-a-learner.md:69`, «**4a** · … Condition: Civil Registration answers `found`, and the birth registration number it returns is one a learner on the PLR already holds … the enrolment moves to the state `found-on-plr`»; :103, «A child the search misses but whose birth registration number a learner on the PLR holds. The enrolment ends in the state `found-on-plr`»; covered and run per REVIEW_PLR-011:83 and REVIEW_PLR-022:95 («2a by the search, then 4a by the number»).
- Whether 4a finds the 20 is not established: REPORT_PLR-016:152, «whether a later step (4a …) would bring some of them to `found-on-plr` was not asked and not run»; REVIEW_PLR-016:86. The note's own line 23 says so («Whether the birth record look-up would find them is not shown»), and so contradicts its two sentences above.
- The next version states the limit as the record carries it — the registry's search misses a child spelt differently; whether the birth record look-up catches such a child is not shown — and corrects claims rows N3 and O2 to match; the same rule is applied to every sentence of the note that generalises one step of a goal to the prototype as a whole.

**G2 (item) — a limit the record names is left out, with no reason in the report; fails A1 (the limits left out "with the reason") and the review instruction's test of what the note leaves out.**
- The note, line 27, names one basis as assumed: «The examinations authority's basis, parental consent, is the prototype's assumption, for the Data Protection Commission to confirm.»
- The record names every basis of G1's sharing as the same assumption: `docs/G1-enrol-a-learner.md:57`, the look-up at Civil Registration, «Basis: … parental consent, on the condition that the enrolment carries consent `CR-LOOKUP` — the prototype's assumption, for the Data Protection Commission to confirm (PLR-D07)», and the same at :55, :67-:72 and 6c (PNIA's check of the parent: «not a minor's data — the prototype's assumption …»); `docs/paper-what-identifies-a-learner.md:355`, «The legal basis for any of the flows of T1. None is named for MoEYS, PNIA or PNEA.» Read as written, the note leaves the reader to take the look-up at Civil Registration as settled.
- The claims table's list of limits left out (`claims.md`, last table) does not name it.
- Allied, in the same act: the dependence the claims table itself carries in row A3 («whether it asks the Civil Registration Department to answer across Linkup, on which the link to the birth record depends») is dropped from the note's line 33, which asks the question without saying that the registry's link to the birth record, and the catch of G1's 4a, depend on it (paper:49-50, :269-272).
- The next version carries the limit, or names it in the report with its reason; and every limit the record names is either in the note or in that list.

**G3 (trace) — three refusals of the register's check kept on a reason that does not hold at its source; fails A3 ("every line … either fixed in the note or, where it is a false positive, named with its reason").** Ties to `_kinds/drafting.md`, part 1, item 6.
- The report, section 2, A3, the row for line 11 of the note (lines 29 and 33 "as line 11"): «the body's name; the documents give it no name in words; kept».
- The governing document names it in words: `../../gitbook/start-here/progressa.md:26` (the constants' document 2, CONSTANTS.md:32), «the Progressa National ID Authority (PNIA)». The round named PNEA in words («the examinations authority») and could do the same for PNIA.
- The next version names PNIA in words, or names the refusal as an exception with a reason that holds at its source.

**What follows.** The gaps are appended to the instruction as its version 2, by the orchestrator, with the `version` field raised and an `issued` entry naming this review as its subject. G2 shows a fault the page of the kind does not yet carry — a limit the record names left out of a document for a reader, without a reason given — and the orchestrator adds it to `_kinds/drafting.md`, part 1, in the same act. The second attempt is reviewed under this review instruction's version 2, by a new session with an empty memory.

## 8. Found, not fixed

1. **`claims.md` was last written after the note.** `stat`: `claims.md` 19:20:01Z, the note 19:17:52Z, `mapping.md` 19:18:32Z, the record's `end` 19:18:50Z (E/outputs_stat.txt). The table is headed "written before the note", and the report says every line reference was read "before the note was written". `_working/*` is excluded from the record, so nothing shows what changed at 19:20:01Z; the report does not mention the write.
2. **The register and the constants disagree** (the report's own item): the constants' sentence names «KP4», «sessions», «Orchestrator», which rule 3 forbids. The owner's or the orchestrator's to settle — the constants' section 5 or a named exception — not the round's.
3. **No build folder records the note's exceptions**, which the register asks for; the report names them instead (the report's item).
4. **The paper's decision 2 stands unruled** (the report's item): use-case-model.md:15 records rulings on decisions 1, 3 and 4 only. The note puts it to "the Ministry"; the paper puts it to the planning unit, whose head signs the note (paper:72, :323).
5. **Rule 4 at the margin**: "on two learners, with the simulated faults off and on" and "Of the 40 invented children … 20 are found" give the result of a check. In the present tense and unavoidable for a note on what a prototype shows; not counted as a gap.
6. **The out-of-scope items of the plan** (plan:73-75: secondary schools and universities, the grant programme as a reader, real sign-in, English only) are left out for length; the report gives the reason. Not a gap.

*Written by a session that did not write PLR-018 and did not carry it out. Nothing was changed outside `_working/PLR-018-R/` and this file; nothing was committed or pushed. Whether the note is sent is the owner's decision; this review says nothing about it.*
