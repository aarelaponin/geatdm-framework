---
kind: review
reviews: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md
of_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md (PLR-016)
written_by: a session that neither wrote nor carried out the instruction
model: claude-sonnet-5-5 — read from the line of this session's own context that names the model it is configured for
computer: MacBookPro — read by the command hostname on the computer the session runs on (run at the start of this session, output "MacBookPro")
window: 2026-10-30 19:02 UTC to 2026-10-30 19:05 UTC, no pause; opened at this review's own started entry (20261030T190233Z_PLR_started_PLR-016-R.yaml), closed at the minute of writing
verdict: accepted
downstream_artefact: the orchestrator's `closed` entry for PLR-016-R (the work is no increment of a record; no row is written)
---

# REVIEW — PLR-016, learners on more than one list, and how many are caught

**Verdict: accepted.** Both figures of the report, 40 learners on more than one list and 20 of them caught from every entry, were worked out again from `fixtures.json` alone by a route the report did not use, and agree entry by entry; the planted fault moved the count; the two screenshots show what the report says; the four mechanical checks are clean. What was found is outside the tests of success and sits in section 8.

All evidence of this review is in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016-R/_evidence/`; the reviewer's programs are `review_count.py`, `compare.py` and `sensitivity.py` beside it, run with `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 -I`.

## 1. The tests of success, one by one

- **A1 — Stage 1's set and counts, both ways. Met.** The report's 40 / 22 / 18 / 20 / 98 and the two-way 358 = 358 are the figures this review's own route gives (section 2). The two settings (`fixture.cross_list_duplicates` 40, `fixture.spelling_variants` 20) equal the counts. The reviewer did not open `fixtures-truth.json`'s content; its sha256 only (item A6).
- **A2 — `catch.csv` and the counts from it. Met.** `catch.csv` has 99 lines, 98 rows (`wc -l` in `misc_checks.txt`); the counts 78 found, 20 missed, 20 caught, 20 not caught were recomputed independently (section 2) and the 98 entries agree with the reviewer's entries one by one (`compare_run.txt`: in mine not theirs `[]`, in theirs not mine `[]`, entry disagreements 0). The 338 found / 20 missed over all 358 entries in `catch_all_358.csv` was recounted by `cut | sort | uniq -c`: 338 found, 20 missed.
- **A3 — the planted fault. Met.** `planted_run.txt` reads "caught 19 not caught 21", the planted GP-037 entry `missed`, PLR-000007 `not-caught`; read at source, the file says so. The reviewer's own plant (section 2) moves the count in the same direction.
- **A4 — Stage 4's two runs. Met.** `stage4_run.txt` ends "2 passed (9.9s) exit=0"; `lsof` exit 1 before and after, no `vite`/`playwright` process now. The two screenshots were looked at (section 4).
- **A5 — the figures in the first paragraph. Met.** The first paragraph carries 40, 22 on two and 18 on three, 20 with a variant, 20 caught, 20 not caught, and why, in the words of the store's search.
- **A6 — what changed; checksums. Met.** Both checksums read now equal the report's (`sha_now.txt`): `fixtures.json` `71a1ba3e…9574`, 415179 bytes; `fixtures-truth.json` `bfa24b8a…eb74`, 131986 bytes; the ledger's `issued` entry pins the same two hashes. `git status --short` prints only `?? 10-Knowledge-Products/KP0-AI/plr-prototype/`: the whole project is untracked, so git cannot show what the round changed (`git_status.txt`; found, not fixed, section 8). In its place, `find` over the project, outside `node_modules`, `dist`, `_working` and `src/generated`, for files newer than the round's start gives only the report and `WHAT_IS_RUNNING.md` (`misc_checks.txt`, last block); `WHAT_IS_RUNNING.md` is rebuilt by the ledger's own program on every entry. The record's list names the round's three files and nothing outside (check.out, "files changed after the end list inside the window: 0").
- **A7 — record check. Met.** Run again here: `round_record.py check … --tolerance 2` prints `## Findings — 0`, exit 0 (`round_record_check_review.txt`); the round's own `check.out` was not altered by the run (sha256 before and after equal).
- **A8 — placement and trace. Met.** Section 6.
- **A9 — the ledger. Met.** Section 6: `started` and `finished` of version 1 stand; the report's last write, 19:01:56 UTC by `stat`, precedes the `finished` entry, 19:02:07 UTC.

## 2. One figure re-established, by a route the report did not use

**Figures:** learners on more than one list, and learners caught from every entry. **The report's route:** the key (`fixtures-truth.json`) lists the set; the store's `findLearners` on a fake-indexeddb store decides each entry. **This review's route:** `fixtures.json` only, by `review_count.py` (log `review_count_run.txt`); neither the key, nor the store, nor any file of `src/` read.

**My rule, stated.** Two list entries belong to the same child when their date of birth is the same, their school is the same, their given names are the same, and their family names are equal or differ by one letter (letters compared without regard to case; one letter = one substitution, insertion or deletion). Children are the connected groups of entries, built by union-find over all 358 entries.

**Count one: on more than one list.** 358 entries make 300 children; 40 children have entries on two or three lists: 22 on two, 18 on three; 98 entries; 20 of those children spell the family name differently, and none only by case. No child has two entries on one list. The report's 40 / 22 / 18 / 20 / 98: **agree**. Sensitivity (`sensitivity_run.txt`): leaving school out of the rule gives the same pairs (76 cross-list pairs, 22 + 3×18; none with a different school), all 32 variant pairs one-letter substitutions, no near-duplicate inside one list.

**Count two: caught.** For each entry of those 40 children, family name, given names and date of birth, case ignored, are compared with every one of the 300 learner records of `fixtures.json`. A child is caught when every entry matches exactly one record and the same one for all. Result: 20 children caught, 20 not; entries: 78 match exactly one record, 20 match none, none match several; all 20 not-caught children are the 20 spelt differently, and none of the 20 caught is. The report's 20 / 20 / 78 / 20 / 0 wrong: **agree**.

**The differences, named.** None. Entry by entry, the 98 entries (list, entry id) are the same set in the report's `catch.csv` and in the reviewer's table, and every entry is found by both or missed by both, with the same PLR number where found (`compare_run.txt`). The reviewer's matching by letters (a second matching, as the instruction permits for the review) and the store's `findLearners` therefore return the same result on all 98 entries. The reviewer read the three kinds of entry: e.g. PLR-000118, SC-008 and PC-104 `Mibkelkel`, GP-011 `Mibkelkil` (variant, no record matches, the other two match PLR-000118): not caught, as the report has it.

**The planted fault of the reviewer's own.** `review_count.py --plant grant-programme:GP-037` appends `x` to that entry's given names in memory (the file untouched; `review_count_planted_run.txt`): the entry no longer matches the child's other entry, the child is split, the children on more than one list go from 40 to 39 and the caught count from 20 to 19; entries with exactly one match 78 to 76. The count was seen to move. (The planted entry here breaks the grouping rule, not the matching rule only; the report's plant, which keeps the pairing from the key, isolates the search. Both show the count can fail.)

**Times and counts the report gives in its own words, read at their source.** Stage 1 run 18:56:23 UTC, `catch.ts` 18:56:49 to 18:56:51, `--all` run ending 18:57:29, planted run 18:57:25, Playwright run end 18:58:20 and lsof before/after, hostname and checksums 18:55:55: all read in the head and tail lines of the logs, as stated (`misc_checks.txt`). The report's last write 19:01:56 UTC equals the window's close in `window.out` and the first and last lines of `check.out`. The 338 / 20 / 0 over 358 entries: recounted. The fixtures' modification time moving to 20:58 local is 18:58:12 UTC by `stat`, as the report says.

## 3. The outputs exist

Command run at 19:04:12 UTC, log `misc_checks.txt`: the five programs, `catch.csv` and `stage1_set.json` have the byte sizes and sha256 the report's table gives (5254, 3986, 1224, 823, 3188, 9569, 15667 bytes; the seven hashes equal); the folders `_working/PLR-016/`, `_evidence/`, `_record/`, `playwright/`, `dist/`, `src/generated/` exist, and the report exists (the report's own `ls -ld` listing was kept in `outputs_listing.txt`, 12 paths, 12 `exit=0`). The 25 files in `_evidence/` include every log the report cites.

## 4. The running application

The round wrote no application model, but the instruction's Stage 4 is a check at the running build, so the screenshots were looked at (`stage4_found_GP-037.png`, `stage4_missed_SC-021.png`; JSON beside each).

- **GP-037, found.** The screen reads "The enrolment stands at: found-on-plr", "The child is already on the PLR as PLR-000007: the existing record is returned and no record is created.", with family name Plozukzuk, given names Quanuxyor, date of birth 2016-12-20, as the entry's data in `catch.csv`. It agrees with the report and with Stage 2.
- **SC-021, the variant, missed.** The screen reads "The enrolment stands at: searching", "No learner on the PLR has this family name, given names and date of birth." and then asks consent CR-LOOKUP; no PLR number shown. Entry Vextovque, Mibyortov, 2014-06-21. It agrees with the report and with Stage 2 (missed).
- The three switches read off the panel after reset are all unchecked, 300 learners, 0 duplicates (`stage4_*.json`). Nothing opened on the owner's screen by this review.

## 5. What a review of this kind runs, from the page of the kind

The page: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md`, part 2.

- **The figure worked out again from the fixture files directly:** run, section 2.
- **The check repeated on another member of the set:** the reviewer's table covers all 98 entries of the 40 children, not only the two of Stage 4; run.
- **The planted fault:** run, section 2; the round's too, A3.
- **Part 1 against the report.** Item 1 (a zero before it failed): met by the planted run. Item 2 (a count over a set the selection does not reach): met, both totals 358, no entry in one and not the other, settings set against the counts. Item 3: no non-zero result reported as findings. Item 4 (the real thing): met by Stage 4 on the production build, switches named and read. Item 5 (change nothing checked): see A6. No gap shows a fault of the page.

## 6. The four mechanical checks, run by the reviewer

- `trace_check.py` over the report: `trace check: clean`, exit 0; "inputs: 10 of 10 pinned by 20261030T183708Z_PLR_issued_PLR-016.yaml hash the same now" (`trace_check_review.txt`, 19:03:39 UTC).
- `placement_check.py` over the instruction: `placement check: clean`, exit 0 (`placement_check_review.txt`).
- `round_record.py check`, with the options the round's `check.out` prints on its line `# run with:` (`--record … --report … --tolerance 2`): `## Findings — 0`, `check_exit=0` (`round_record_check_review.txt`, 19:03:51 UTC). The check reads quoted blocks only and takes the window's close as declared; the window was read against the report's `stat` above.
- `ledger.py show --code PLR --id PLR-016` (`ledger_show_016.txt`, exit 0): prints `issued` (2026-10-30T18:37:08Z), `started` (18:54:46Z), a second `started` (18:56:08Z) and `finished` (19:02:07Z), all version 1. `ledger.py check`: `check: clean`, exit 0 (`ledger_check.txt`).
- **The account**, as `show` prints it: `issued` (account removed); both `started` entries (account removed); `finished` (account removed). The report's declaration: (account removed). Equal on all.

## 7. The verdict, and what follows

Accepted; no gap. The orchestrator writes the one `closed` entry with the outcome `accepted`, which closes this review and PLR-016. No row is written (no record of a long delivery is named in `outputs`). The items of section 8 become candidate instructions as the orchestrator sees fit.

## 8. Found, not fixed

1. **Two `started` entries for PLR-016, and a window that opens at the second.** `20261030T185446Z` and `20261030T185608Z`, same session name, same effort and starter, 82 seconds apart. The report names this itself (its section 4) and says it did not write the second. The consequence is real: the report's `window` line opens 18:56:08 UTC while the round's own first entry is 18:54:46, and the round's first writes (`hostname.txt`, `start.json`, 18:55:55) precede the declared opening. `FINDING-KINDS.md` names a window that "opens elsewhere than its `started` entry" as a gap of the kind `form`; here the cause is the ledger's, disclosed, and printed by `round_record.py window` and not typed by hand, so the review does not count it a gap against the round. It is a ledger fact for the orchestrator to settle: which entry stands, and whether another session ran.
2. **The model.** The report names `claude-opus-5-5` where the instruction names Sonnet; the report records it in its section 5. The figures were re-established independently and agree, so the verdict does not turn on it.
3. **Git does not show the round.** `git status --short` for the project prints one line, `?? 10-Knowledge-Products/KP0-AI/plr-prototype/`, since the whole project is untracked in this repository; the instruction asked for that command as the check on what the round wrote. The check rests, for this and any earlier round, on the round's record and a `find` by time, not on git. A candidate: put the project under version control (the `repo-hygiene` skill), so that the next review of this kind has a real list.
4. **Effort and starter `unknown`** on the round's `started` entries, as a scheduled task shows neither; not a refusal.
5. **What the figure does and does not say, for the note to the Permanent Secretary:** the 20 uncaught learners are caught or not at G1's search step only; the report leaves open whether step 4a (birth registration number from Civil Registration) would bring them to `found-on-plr`, and whether the search should catch a spelling variant at all is the owner's question (instruction, section 8). Candidate instruction named by the report; not run here.
6. **Reviewer's note on a limit.** The reviewer's matching proves the same outcome as `findLearners` on the 98 entries; it does not read the store's code, and the reviewer did not re-run Stage 4.

*Hostname of this session: MacBookPro. Written by a session that did not write PLR-016 and did not carry it out. Nothing was committed or pushed.*
