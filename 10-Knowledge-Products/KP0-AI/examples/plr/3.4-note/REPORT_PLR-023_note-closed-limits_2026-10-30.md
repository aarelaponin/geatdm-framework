---
kind: report
answers: PLR-023
version: 1
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-023_note-closed-limits_2026-10-30.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-023_note-closed-limits_2026-10-30.md
written_by: a working session, separate from the session that wrote the instruction and from the sessions that carried out PLR-018
account: (account removed) — read from the line of this session's own context that begins "The user's email address is"
started_by: unknown — read from this session's own prompt, the start message delivered by a scheduled task, which shows neither the owner typing it nor a session starting this one
model: claude-opus-5-5 — read from the line of this session's own context that names the model it is configured for; the instruction names Opus
computer: MacBookPro — printed by `hostname`, command and output in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/01_ledger_started.txt
window: 2026-10-30 20:11:36 UTC (start list) to the last write of this report, no pause; the record's end list was taken at 20:18:48 UTC
record: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_record — kept by round_record.py; RECORD.txt lists one file changed (the note) and no traced run, since no program of this round runs under `run`; check.out is the last run of its check, its result in words under A7
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/note-to-the-permanent-secretary.md 3077 bytes sha256 804df65879cea4189b6566e0b48676980230e786d8c17559781188afc6cb573a · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/limits.md 17625 bytes sha256 60064e88d7af9e4e6acdf02a26dba459302b9128dddabfe415b4e734ce62301e · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/mapping.md 5260 bytes sha256 fbb6829de01601e91fa40d1fe1eba9993a01f95d4688a3f138423ca000c862a9 · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/register_exceptions.txt 1087 bytes sha256 4e921aaffa50066875e736c05c4f92c848c7b8bcf260949d8c5cf00b144de166 · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/ · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_record/ · this file
ledger: PLR PLR-023 version 1 — the started entry is 20261030T201123Z_PLR_started_PLR-023.yaml; the finished entry follows this report and names this file
---

# ACCOUNT — The note to the Permanent Secretary, revised against a closed list of limits

**Answers:** `PROMPT_PLR-023_note-closed-limits_2026-10-30.md` (`PLR-023`, version 1) · **Run on:** MacBookPro, zsh through Desktop Commander

## 1. The answer first

The register of limits holds 51 rows from the eight places and no others; 19 are carried in the note and 32 are left out, each with its reason, 14 of them for length in whole or in part. The note now carries the two limits version 2's review found: line 29 says Linkup is one "which the Ministry has not joined", and line 23 says of the birth record look-up "it needs a birth record". To stay at 500 words by `wc -w`, three scope limits of version 2's line 29 ("for primary schools, in English, without sign-in") were taken out and listed for length; nothing else of version 2 was changed. The register's last write (20:16:33 UTC) precedes the note's first change (after 20:16:39 UTC); the register's check refuses 0 with version 2's named exceptions, carried unchanged.

## 2. The criteria, one by one

**A1 — `limits.md`: every row with its place and line, the count, every disposition, last write before the note's first change. Met.** `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/limits.md`: a key to the eight places (P1-P8, each with its line range); 51 rows R1-R51, each with the limit in one line, every place and line that names it, and its disposition; the count, "**Count: 51 rows.**"; a table of the lines of the eight places read and found to name no limit of the prototype, with the reason for each; and the tally of dispositions (19 carried, 32 left out, 19 + 32 = 51). The rows were written first, with the column of dispositions empty (pass 1, written 20:15:46 UTC, `_evidence/03_limits_pass1_stat.txt`, which also counts 51 rows); the dispositions were filled in by a second pass after the count, last write 20:16:33 UTC. The order of writing, by `stat`, taken before the note was touched:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/04_before_note_change_stat_sha.txt
_working/PLR-023/limits.md  modified 2026-10-30T20:16:33Z
docs/note-to-the-permanent-secretary.md  modified 2026-10-30T19:45:53Z
```

That file was written at 20:16:39 UTC with the note still at version 2's time; the note's first change followed, and by 20:17:02 UTC it stood changed (`_evidence/05_wc.txt`, 501 words). Its last change is 20:17:42.784Z (RECORD.txt section 1). `limits.md` was not written again after 20:16:33 UTC (`_evidence/07_wc_after.txt` shows the same time at 20:17:54 UTC).

**A2 — every limit the eight places name is a row. Met, as far as this session can show; the review builds its own register.** Each place was read whole, by `cat -n`: CONSTANTS:40-50; the plan, 30-89; the paper's table and cross-check, 204-237, both columns of every row; the paper's section 6, 347-362; G1's extensions, 63-76, each condition and each line *Basis:*; section 8 of each of the four goals' accepted reviews (REVIEW_PLR-011:176-196, REVIEW_PLR-012:102-112, REVIEW_PLR-013:94-103, REVIEW_PLR-022:182-200); PLR-015's report, 1-135; PLR-016's report, line 23 and 149-152. A limit named in several places is one row with every place (R6, for instance, lists the plan :38 and the paper :216, :219, :223, :231). Position B's cells were read for limits it shares with A; those it states of B alone are in the table of lines naming no limit of the prototype, since B is not built. The two limits of version 2's review are R6 (the Ministry reads across Linkup, which it has not joined) and R13 (a child with no birth record matched by names and dates alone; the look-up cannot help).

**A3 — at most 500 words, every sentence mapped, every row in the note or in the list. Met.**

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/07_wc_after.txt
     500 docs/note-to-the-permanent-secretary.md
```

`/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/mapping.md` maps every sentence, the heading and the from-line to a register row, to version 2's claims row, or to both; three sentences are marked changed. Every row of the register is carried or listed in section 3 below with its reason (the same dispositions as `limits.md`).

**A4 — `readers_register_check.py`, output kept, every line dealt with. Met.** Without exceptions, exit 1, `_evidence/08_readers_register_check_final.txt`:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/08_readers_register_check_final.txt
refused: 5 (list 1: 5, list 2: 0, list 3: 0, list 4: 0); excepted by name: 0
```

The five are version 2's, on unchanged words: «Skills» line 3 (the Ministry's name in the governing document), «KP4», «sessions», «Orchestrator» line 5 (the constants' sentence, word for word, the named exception the instruction makes), «Commission» line 27 (the Data Protection Commission's name). Each holds at the source cited in `_working/PLR-023/register_exceptions.txt`, a copy of version 2's file with only its head line amended. With it, exit 0:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/10_readers_register_check_with_exceptions.txt
refused: 0 (list 1: 0, list 2: 0, list 3: 0, list 4: 0); excepted by name: 5
```

The words this round added ("which the Ministry has not joined", "it needs a birth record") raise no line. The self-test passed inside both runs (232 patterns). The positive list reports "none of the list", not a refusal.

**A5 — the constants' sentence and the banner's words once each; no path, instruction number, tool or model. Met.** `_evidence/09_grep_A5.txt`: the banner's words, 1; the constants' sentence, 0 by a case-sensitive grep (the note begins it with a capital "It") and 1 by `grep -ci`; the grep for a slash, `.md`, `PLR-` and a number, `PLR-D`, `Claude`, `Opus`, `Sonnet`, `python`, `.py`, "instruction", `_working`, the goal codes, `PNEA`, `PNIA`, `MoEYS` and `PLR` prints nothing, exit 1.

**A6 — the record's list of changed files names nothing outside the note, `_working/PLR-023/` and the report. Met.** RECORD.txt section 1, at `end` (20:18:48 UTC, `_evidence/11_round_record_end.txt`): one file changed, the note, 3066 bytes `559d7d33…8ff3` before, 3077 bytes `804df658…573a` after. `_working/*` is excluded from the window as the instruction says; this report is written after `end`. The `started` entry of the ledger rebuilt `WHAT_IS_RUNNING.md` before the start list was taken; this session wrote no row in it.

**A7 — `round_record.py check` → `## Findings — 0`.** Run after this report's last write, before `finished`; its output is `_working/PLR-023/_record/check.out`, and its result is given in the `finished` entry's outcome.

**A8 — placement and trace checks pass, but for the expected finding on the note.** Run after this report's last write; outputs in `_evidence/12_placement_check.txt` and `_evidence/13_trace_check.txt`. The note's sha256 before is `559d7d333670dda7cfb16bc3e6c3b5474ae3688abb8243c02b58ba1ac0b28ff3` (as pinned at issue) and after `804df65879cea4189b6566e0b48676980230e786d8c17559781188afc6cb573a`; its `input-changed` finding is expected.

**A9 — the ledger.** Not claimable inside this report: `started` is 20261030T201123Z_PLR_started_PLR-023.yaml; the `finished` entry follows this report's last write.

## 3. The limits left out, with the reason

| Row | Limit | Reason |
|---|---|---|
| R4 | the code budget of about 3,000 lines | how the prototype is built, not what it shows a reader |
| R7 (in part) | that the Civil Registration Department is not a member of Linkup, and that no date is given for its change | length; the consequence for the reader is the sentence carried at line 29 |
| R11 | birth registration at 71%; about 29% of the invented children without a number | length; the consequence for those children is carried at line 23 (R13) |
| R12 | of which population the 71% is | a limit of the paper on a figure the note does not state |
| R19 | the 40/20 figure is not the planning unit's count of duplicates caught | the note does not set the two beside each other |
| R20 | the screen tried for two entries only | the figure is the search's own over all 98 entries; nothing asked turns on where it ran |
| R22 | no way to key a birth registration number; whether a parent holds a paper record | a decision ruled, not open; its consequence is carried at lines 11 and 25 |
| R24 | refused consent to the look-up: no look-up, flagged, referred | length; the consequence is R23's, carried at lines 11 and 25 |
| R25 | no birth record: enrolled all the same, flagged, referred | length; the count is carried at line 25 |
| R27 | the National ID Authority does not say which detail disagreed | length; the note's sentence on it (no number until it confirms) holds |
| R28 | no limit on the wait for a slow answer | the prototype's choice on the clerk's procedure; no statement rests on it |
| R29 | consent to the examinations reading refused: every field refused; no invented learner lacks it | length; the note states only what is released on the basis |
| R30 (in part) | PNIA issues child numbers only at 16 | length; its consequence, no learner holding a national number, is carried at line 27 |
| R31 | two refused fields empty on the learner run | length; the refusal stated at line 15 holds; the against-a-value limit is carried for the national number |
| R32 | the refusal run on one learner | the note's "on two learners" rests on version 2's claims row S8 |
| R33 | G3's scenario skips its leak assertion | a test, on no claim of the note |
| R34 | no candidate register; reasons read back from the log | the note claims only that the authority reads a learner |
| R35 | `read()` throws on a refusal with no log entry | unreachable under the contract as built |
| R36 | codes, backticks and mixed time formats on screen | how a screen looks |
| R37 | the store accepts a move to the learner's own school | the note claims nothing of it |
| R38 | tests that partly assert | limits of tests on claims the note does not make |
| R39 | G3's and V1's scenarios import G1's helpers | how the tests are arranged |
| R40 | the project untracked in version control | the project's record |
| R41 | primary schools only | **length** — carried in version 2, taken out to make room for R6 and R13 |
| R42 | the grant programme as a reader | length; no such reading is claimed |
| R43 | no real sign-in | **length** — carried in version 2, taken out for R6 and R13 |
| R44 | English only | **length** — carried in version 2, taken out for R6 and R13 |
| R45 | no administration screen beyond the training panel | length; none is claimed |
| R46 | about 300 learners in 10 schools, 2 provinces, three lists | length; the figures that bear on the reader (40, 20, both set) are carried |
| R47 | the costs of position A (a second number, PNEA's extra number, the national link only from 16) | costs of the decided position, not limits of what is shown; the note reopens nothing |
| R48, R50 | the age rule's source; whether PNIA receives birth records | limits of the paper on position B, which is not built |
| R49, R51 | no recorded preference; the paper written knowing the leaning to A | limits of the paper, not of the prototype |

**Which were carried for length, and why.** The page held 496 words and could take four more. The two limits of version 2's review needed eleven (six for R6, five for R13). Three cheap limits of version 2's line 29 were taken out instead of one that bears on what the Permanent Secretary is asked: R6 and R13 touch the two open questions of line 33 (Linkup, and what identifies a child with no birth record), while primary schools, English and sign-in are matters of scope a reader expects of a prototype. "Both numbers are set in the invented data" was kept rather than cut, because without it the 20 of 40 reads as a measured rate. "Runs on one computer, unpublished" stands as version 2's, since it is not a row of the register (section 4).

## 4. Found, not fixed

- **Two sentences of version 2 rest on places outside the eight.** Line 25 ("Learners counted without a birth record include children whose birth record could not be reached") rests on REVIEW_PLR-022 section 4 (claims row N6), and "one computer, unpublished" at line 29 on the constants' section 2 (claims rows N10 + N12). Kept, as everything else of version 2 stands, and mapped to version 2's claims table. Neither is put into the register.
- **G1's preconditions** (G1:41: who answers for consent is the prototype's choice; no real sign-in) lie outside "every condition and basis of its extensions"; the sign-in limit is in the register from the plan (R43). The consent choice is not a row.
- **PLR-016's section 4** (line 156, "the other 96 rest on the store's search outside the browser") lies outside the places the instruction names for that report; the same limit is a row from its first paragraph (R20).
- **R13's disposition in `limits.md` quotes the words first written** ("without a birth record, it cannot"); the line was then shortened to "it needs a birth record" to hold 500 words. `limits.md` was not written again, so that its last write precedes the note's first change; `mapping.md` gives the words that stand. The line (23) and the limit carried are the same.
- **The readers' register asks for exceptions in a build folder**; the note has none, and `_working/PLR-023/register_exceptions.txt` stands in for it, as version 2's file did.

## 5. What I could not establish

- Whether the register is complete is the review's to establish by its own register; this session read each place whole and recorded what it judged not to be a limit, with the reason.
- The exact second of the note's first change: it lies between 20:16:39 and 20:17:02 UTC by the two evidence files; the record keeps only the last change.

## 6. Corrections to the instruction

- `--effort unknown` and `--started-by unknown`: the start, a scheduled task's message, shows neither.
- The instruction's A3 asks for the list of left-out limits in the report; it is section 3 here and repeated in `limits.md`.

## 7. What this round did not finish

Nothing of the three stages. A7 and A8 are run after this report's last write; the review is started after the `finished` entry.

## 8. The outputs, by path

The eight paths:

```text
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/note-to-the-permanent-secretary.md
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/limits.md
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/mapping.md
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/register_exceptions.txt
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_record
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-023_note-closed-limits_2026-10-30.md
```

Each was listed with `ls -ld`, one exit code per path, in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023/_evidence/14_outputs_listing.txt, taken after the report's last write but one; its line for this report gives an earlier size, since no listing can follow the last write of a file that names it.
