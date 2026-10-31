---
kind: review
reviews: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-023_note-closed-limits_2026-10-30.md
of_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-023_note-closed-limits_2026-10-30.md (PLR-023, version 1)
written_by: a session that neither wrote nor carried out the instruction — started as a sub-session from the review instruction PLR-023-R
model: claude-opus-5-5 — read from the line of this session's own context that names the model it runs on; the review instruction names Opus
computer: MacBookPro — printed by the command hostname, run right after this review's started entry
window: 2026-10-30 20:21:20 UTC to 2026-10-30 20:30 UTC, no pause; opens at this review's started entry 20261030T202120Z_PLR_started_PLR-023-R.yaml; closed at the moment of writing
verdict: accepted
downstream_artefact: the orchestrator's closed entry for PLR-023-R (PLR-023 is no increment of a long delivery; no row is written)
---

# REVIEW — PLR-023, the note to the Permanent Secretary against a closed list of limits

Evidence of this review: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023-R/_evidence/`
(written E below). My own register: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023-R/limits.md`; the two
registers set against each other: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-023-R/comparison.md`.

## 1. The tests of success, one by one

**My own register came first.** I read the eight places of the instruction's section 3, Stage 1, and only those. I wrote 46 rows, each with its place and line, before I opened the round's register or report. The last write was at 20:24:24 UTC by `stat`. I opened the round's `limits.md` after that. The comparison is section 2.

- **A1 — met.** The round's `limits.md` has 51 rows. Each row gives the limit in one line and every place and line that names it, and each has a disposition. The file states the count, and my count by `grep -c` agrees (51, E/outputs.txt). Its last write was at 20:16:33 UTC, before the note's first change. The record's window list shows `limits.md` at 20:16:33.643Z, then `04_before_note_change_stat_sha.txt` at 20:16:39.894Z, then `05_wc.txt` at 20:17:03.003Z showing 501 words. So the note changed between 20:16:39 and 20:17:03 (E/round_record_window.txt). Its last change was at 20:17:42.784Z.
- **A2 — met.** I set the two registers against each other in `comparison.md`. Every limit in mine has a row in the round's, but one. That one is my row 45: what position B would need (PNIA issuing to children, the Department passing births on). I read it at paper :216, :219 and :223. Each of those cells speaks of position B, which the prototype does not build (PLR-D03, `docs/G1-enrol-a-learner.md:15`). The round read these cells and set them aside under "lines read and found to name no limit of the prototype", with that reason, which holds. The question B raises is in the note's line 33. That makes no gap. The round's register has four limits that mine does not have as separate rows: R16, R20, R21 and R25. I read each at its source (plan :80-81; REPORT_PLR-016:23; paper :217 and G1:69; plan :68 and G1:70), and each is a limit the eight places name. Every place the round's rows cite lies inside the eight. Section 2 gives both counts.
- **A3 — met.** `wc -w` gives 500 words (E/note_wc_grep.txt). I checked every row's disposition against the note and against its stated reason. The 19 carried rows are at the lines given. The R13 row is the one exception (section 8, item 3). The other 32 rows each have a reason that holds where I read it. "Length" holds as a reason because the note is at its limit of 500 words. Two reasons I tested hardest:
  - **R32.** The refusal ran on one learner, yet the note says "on two learners". That rests on REVIEW_PLR-015:37-40, which is accepted (`verdict: accepted`, line 9) and shows a second learner, PLR-000006.
  - **R22.** "A decision ruled, not open". PLR-D04 governs the prototype (G1:15, :71). The paper's own question, 5.4 item 4, is about G1 "outside the simulation" (paper:332-334).

  I read every sentence of the note against an accepted document (E/sources_of_sentences.txt):
  - Line 3: CONSTANTS:38.
  - Line 5: constants :15 and :44.
  - Line 9: paper :248-249.
  - Line 11: G1:67, :69, :71, :73-74.
  - Line 13: REVIEW_PLR-012:75.
  - Line 15: REPORT_PLR-015:23 and REVIEW_PLR-015:37-40.
  - Line 17: REVIEW_PLR-022:78-80 and :137-138.
  - Line 21: CONSTANTS:42-43.
  - Line 23: REPORT_PLR-016:23, :151-152; plan :80-81; REVIEW_PLR-016:21.
  - Line 25: REVIEW_PLR-022:134-138.
  - Line 27: G1:17; paper :355; REPORT_PLR-015:102.
  - Line 29: plan :38 and :85; paper :49-50 and :216; CONSTANTS:9 and :21.
  - Line 33: paper :323-328; REPORT_PLR-016:151.

  The figures are at their sources:
  - "six fields … the other seven": REPORT_PLR-015:23 and :38, with 7 none and 6 basis.
  - 40, 20, 20: REPORT_PLR-016:23, which says "40 learners", "catches 20 of the 40", "It does not catch the other 20". REVIEW_PLR-016:15 confirms them.
- **A4 — met.** I ran `readers_register_check.py` myself (E/readers_register_check.txt). The self-test passes (232 patterns). Without exceptions the program prints `refused: 5`, exit 1. The five are «Skills» at line 3; «KP4», «sessions» and «Orchestrator» at line 5; and «Commission» at line 27. All five are version 2's, on unchanged words. With the round's `register_exceptions.txt` it prints `refused: 0 … excepted by name: 5`, exit 0. Each exception holds at the source it cites: CONSTANTS:15 and :44, and the Ministry's name.
- **A5 — met.** In the note as it stands (E/note_wc_grep.txt):
  - The banner's words appear once.
  - The constants' sentence appears once, by `grep -oi`. It is case-insensitive because the note opens it with a capital "It".
  - My grep for a slash, `.md`, `.py`, `PLR`, `PNEA`, `PNIA`, `MoEYS`, the model and tool names, "instruction", `_working`, the goal codes and any run of three or more digits hits one line only, line 27. The hit is "sharing", which matched my pattern `sha`, so it is a false match. The note has no path, no instruction number, no tool and no model.
- **A6 — met.** RECORD.txt section 1 names one changed file, the note. I ran `find` over the estate for files newer than the round's `started` entry (20:11:23 UTC), leaving out `node_modules`, `dist` and `_working` (E/find_newer.txt). It prints three files:
  - the note;
  - the report;
  - `WHAT_IS_RUNNING.md` at 20:21:20 UTC, which the ledger rebuilds and which my own `started` entry rewrote at that second.

  No file in `_working` outside `PLR-023/` and `PLR-023-R/` is newer, and neither are the plan and the governing page outside the root.
- **A7 — met.** `round_record.py check`, run by me with the round's options (`--tolerance 2`), prints `## Findings — 0`, exit 0, and finds the 4 quoted blocks (E/round_record_check.txt). Its window test examined nothing; see section 8, item 1.
- **A8 — met.** `placement_check.py` prints `placement check: clean`, exit 0. `trace_check.py` prints one finding, exit 1: `input-changed` for the note, `559d7d333670` at issue and at start, `804df65879ce` now. This is the finding the instruction expects. The other 16 of the 17 pinned inputs hash as they did at issue (E/placement_check.txt, E/trace_check.txt).
- **A9 — met.** `ledger.py show` prints `issued` 20:07:25Z, `started` 20:11:23Z and `finished` 20:20:54Z, all of version 1 (E/ledger_show.txt). The report's last write, at 20:20:34Z, precedes `finished`.

**Only what the register required was changed.** I worked this out by a route the report did not use (section 2). The note differs from version 2 in three sentences:
- 23.4 adds "; it needs a birth record", for R13.
- 29.1 adds ", which the Ministry has not joined,", for R6.
- 29.3 removes ", for primary schools, in English, without sign-in", listed as R41, R44 and R43 for length.

Version 2 had 496 words, and the two additions need eleven. The trade is explained in report section 3 and holds. Shortening R13 to "it needs a birth record" says the same thing as the first wording, "without a birth record, it cannot". It does not soften the limit. Read together with the sentence before it, which says the search matches names and the date exactly, it says what version 2's review asked: a child with no birth record is matched by names and dates alone, and the birth-record look-up cannot help.

## 2. One figure re-established

- **The figure: the note's change from version 2.** The report gives it as three sentences changed, the sha256 `559d7d33…8ff3` before (3066 bytes) and `804df658…573a` after (3077 bytes), 496 words before and 500 after.
- **The report's route:** the record's before and after hashes, and its own mapping.
- **My route:** I took the note as it stands, undid exactly the three changes the mapping names (no copy of version 2 is on disk), and hashed the result (E/v2_reconstruction.txt). It gave sha256 `559d7d333670dda7cfb16bc3e6c3b5474ae3688abb8243c02b58ba1ac0b28ff3`, 3066 bytes, 496 words. That is the hash the `issued` entry pinned (`match: True`).
- **Result:** the two routes agree. The note changed in those three sentences and nowhere else.

**The two registers.** Mine has 46 rows and the round's has 51. The round's register has every limit in mine but row 45 (position B's own needs), which it read and set aside with a reason that holds. Mine lacks four of the round's limits as rows: R16, R20, R21 and R25. The rest of the difference is granularity. The round splits rows I joined: the banner (R2), the five out-of-scope items (R41-R45) and the untracked project (R40). It joins rows I split: the partial tests (R38) and the presentation faults (R36). `comparison.md` lists each pair. I found no limit from outside the eight places among the rows.

**Times read at their source.**
- The register's last write: 20:16:33.643Z by the window program's `stat`, as the report says.
- The note's first change, "after 20:16:39": the 04 file at 20:16:39.894Z, the 05 file at 20:17:03.003Z, 501 words.
- The record's `end`, 20:18:48 UTC: RECORD.txt says `20:18:48.501Z`.

## 3. The outputs exist

At 20:28:18 UTC, by `ls -ld`, `wc -c` and `shasum -a 256` (E/outputs.txt):
- the note: 3077 bytes, `804df658…573a`;
- `limits.md`: 17625 bytes, `60064e88…301e`;
- `mapping.md`: 5260 bytes, `fbb6829d…62a9`;
- `register_exceptions.txt`: 1087 bytes, `4e921aaf…6de166`;
- `_evidence/` and `_record/`: both directories, exit 0;
- the report: 19038 bytes.

Each size and hash is the one the report's `outputs` line declares. `_record/check.out`, which the report's record line and A7 name, does not exist (exit 1). See section 8, item 2.

## 4. The running application

Not applicable. The round wrote a document and no application model.

## 5. What a review of this kind runs (`_kinds/drafting.md`, part 2)

- **The programs of the kind's skill:** the instruction names no skill for this task ("The kind has no skill for this task", its section 2, item 3), so none is run.
- **Identifiers resolved against the register and the model:** the note carries no identifier (A5).
- **The build step:** not applicable; this is no groundwork.
- **The readers' register check:** run, A4 above.

I read the faults of part 1 against the report:
- Item 2: nothing is supplied that the upstream lacks; every sentence is carried.
- Item 5: the round applied the rule to every member of the eight places, not to the two named instances.
- Item 6: the note is in the readers' register.
- Item 8: every limit is in the note or in the list, and each limit of one step is stated of that step. Line 23 speaks of the search and of the look-up separately.

None is broken.

## 6. The four mechanical checks, run by the reviewer

```text
python3 …/trace_check.py <report> --constants …/plr-prototype/CONSTANTS.md --coordination …/_a-projects-registry/CONSTANTS.md   → exit 1, one finding: input-changed, the note (expected)
python3 …/placement_check.py <instruction> --constants …/plr-prototype/CONSTANTS.md                                              → exit 0, "placement check: clean"
/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 -B …/round_record.py check --record …/_working/PLR-023/_record --report <report> --tolerance 2   → exit 0, "## Findings — 0"
python3 …/ledger.py show --constants …/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-023                               → exit 0, issued, started, finished of version 1
python3 …/ledger.py check --constants …/_a-projects-registry/CONSTANTS.md                                                       → exit 0, "check: clean"
```

The logs are in E: `trace_check.txt`, `placement_check.txt`, `round_record_check.txt`, `ledger_show.txt` and `ledger_check.txt`. `ledger.py check` prints no line naming PLR-023.

**Accounts.** The `issued`, `started` and `finished` entries each carry `account: (account removed)`. The report's declaration names the same address.

## 7. The verdict, and what follows from it

**Accepted.** The round built a register of 51 limits from the eight places, and only from them. My own register, built first and blind to it, finds no limit of those places missing from it. Every row is either carried at the line given or listed with a reason that holds at its source. The note is at 500 words. Every sentence is carried by an accepted document. Rebuilding version 2 from the note shows that only the three sentences the register required were changed. The four mechanical checks pass, except for the expected `input-changed` finding on the note.

What follows: the orchestrator writes one `closed` entry for PLR-023-R with the outcome `accepted`, and that entry closes PLR-023 as well. PLR-023 is no increment of a long delivery, so no row is written. The items in section 8 become candidate instructions. Whether the note is sent is the owner's decision, and this review says nothing of it.

## 8. Found, not fixed

1. **The report's `window` line is typed by hand and not closed.** It reads "2026-10-30 20:11:36 UTC (start list) to the last write of this report". `round_record.py window`, run read-only, prints `## Findings — 2` (E/round_record_window.txt):
   - The window "closes early", because the line's only time is 20:11:36.
   - It "opens elsewhere": the `started` entry is at 20:11:23.

   The line the program computes is `window: 2026-10-30 20:11:23 UTC to 2026-10-30 20:20:44 UTC`. Because of this, `round_record.py check` took the close as 20:11:36 ("the window closes at 2026-10-30T20:11:36.000Z"). Its test for files changed after the end list inside the window therefore examined nothing. My `find` (A6) covers the same ground, and the result does not change. This is the kind `form` that FINDING-KINDS.md calls "the window typed by hand". The fix is `round_record.py window --write`. It is not verdict-turning: no criterion A1 to A9 rests on the window, and the substance was established by another route. It is recorded so that the next instruction of the kind names `window --write`.
2. **`_record/check.out` does not exist.** The report's record line ("check.out is the last run of its check") and A7 ("its output is `_working/PLR-023/_record/check.out`") both name it. The check was run without `--out`, and its output is kept in `_working/PLR-023/_evidence/15_round_record_check.txt`, which shows `## Findings — 0`, exit 0. This is a path that does not hold, of the kind `trace`. It does not turn the verdict, because the output exists elsewhere and my own run agrees.
3. **R13's disposition in `limits.md` quotes words the note does not carry**: "without a birth record, it cannot". The note carries "it needs a birth record". The report discloses this (section 4), and `mapping.md` gives the words that stand. The round filled in the dispositions before the note's first change, which the instruction did not require; it required only the last row before the first change. That left the register stale. The line and the limit are the same.
4. **A5's account of the grep is wider than its evidence.** The report says the grep covered "PNEA, PNIA, MoEYS and PLR". The pattern in `_working/PLR-023/_evidence/09_grep_A5.txt` does not include those four words. My grep includes them and finds none (A5 above).
5. **R31's limit is narrower than the row states.** REVIEW_PLR-015:40 and :80 show `identity_flag` and `referred` refused against a value on PLR-000006. Only `national_number` remains unshown against a value, and the note says exactly that. The reason "length" still holds.
6. **Two sentences of the note rest outside the eight places.** They are line 25 (REVIEW_PLR-022:134-138) and "one computer, unpublished" at line 29 (CONSTANTS:9, :21). Both are version 2's, and both hold at those sources. The instruction lets them stand. Neither is a row of the register.
7. **The round's `started` entry carries `effort unknown` and `started_by unknown`**, because a scheduled task's message started the round (report, section 6). It is recorded and not a finding. This review's own `started` entry also carries `--effort unknown`: its start, a sub-agent's three-line prompt, shows no level. The model is the band the review instruction names, Opus.
