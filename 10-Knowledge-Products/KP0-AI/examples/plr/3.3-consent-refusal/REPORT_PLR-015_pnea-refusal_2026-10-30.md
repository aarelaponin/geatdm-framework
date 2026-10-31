---
kind: report
answers: PLR-015
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-015_pnea-refusal_2026-10-30.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-015_pnea-refusal_2026-10-30.md
written_by: a working session, separate from the session that wrote the instruction
account: unknown — this session's own context names no line beginning "The user's email address is"
started_by: owner — read from this session's own prompt, the two-line start message the owner pasted into a session of his
model: Claude Sonnet 5.5 — read from the line of this session's own context that names the currently selected model; the instruction names Sonnet
computer: MacBookPro — printed by `hostname`, command and output in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/hostname.txt
window: 2026-10-30 18:38:39 UTC to 2026-10-30 18:46:16 UTC, no pause; closed at the last write of the 34 files the round names as written, REPORT_PLR-015_pnea-refusal_2026-10-30.md, read by stat; printed by round_record.py window, its command and output kept in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record/window.out
record: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record — kept by round_record.py; RECORD.txt lists what the round's four Python programs read and changed; the three Playwright runs, npm and the shell commands are not Python and were kept by hand in _evidence/; check.out is the last run of its check, result in words under A7
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/ (the folder, files listed in section 7) · this file
ledger: PLR PLR-015 — the started entry is 20261030T183839Z_PLR_started_PLR-015.yaml; the finished entry follows this report and names this file
---

# ACCOUNT — Does the exchange refuse PNEA every field it has no basis for?

**Answers:** `PROMPT_PLR-015_pnea-refusal_2026-10-30.md` (`PLR-015`) · **Run on:** MacBookPro, zsh through Desktop Commander

## 1. The answer first

Of the 7 fields PNEA has no basis for, the production build refused and logged with `no basis` 7 in the run with every switch off and 7 in the run with all three switches of `training-switches` on; of the 6 fields with a basis, it released 6 with the learner's value from `fixtures.json` in each run, and wrote no log row for any of them. The learner was PLR-000003, who holds a birth registration number, and the number appeared nowhere in "What PNEA received". The check was shown to fail: told to expect `family_name` refused, the same spec failed on `family_name` and on no other field. The set was listed from `docs/groundwork.md` (sha256 `2a577904d70d14c500847f48eb505c1f5d6fb01bcea01e4139fe9959d5d0ff1d`) and agrees with `src/generated/groundwork.json` in both totals and every member. Limit: three of the seven refused fields (`national_number`, `identity_flag`, `referred`) are empty in this learner's record, so a leak of those three would not have shown a value for it (section 4).

## 2. The criteria, one by one

**A1 — the two sets of Stage 1. Met.** Command: `round_record.py run … python3 _working/PLR-015/stage1.py`, 2026-10-30 18:39:41 UTC; log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/stage1_run.txt`, sets in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/stage1_sets.json`. The rows of reader `pnea-officer` are 13 in the groundwork and 13 in its JSON, and they are the 13 codes of `learner-fields` (`coverage_check` true). The difference in all four directions is empty.

`/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/stage1_sets.json`:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/stage1_sets.json
    "none_total": 7,
    "basis_total": 6
```

| set | from the groundwork table | from `src/generated/groundwork.json` | in one and not the other |
|---|---|---|---|
| basis `none` (7) | birth_registration_number, national_number, identity_flag, referred, parent_confirmed, consents, history | the same 7 | none |
| with a basis (6), `parental consent`, condition consent `PNEA-EXAM` | plr_number, family_name, given_names, date_of_birth, school, grade | the same 6 | none |

**A2 — `learner.txt`. Met.** `_working/PLR-015/learner.txt` names PLR-000003 and says why. Its last write, by `stat` (log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/learner_stat.txt`): 2026-10-30 20:40:48 Tallinn, 18:40:48 UTC. The first run began at 18:41:17 UTC (first line of `_evidence/run_off.txt`).

**A3 — both runs pass, with what they saw. Met.** Commands, from the project root: `PLR_RUN=off PLR_TAG=off PW_DISABLE_TS_ESM=1 npx tsx node_modules/@playwright/test/cli.js test --config _working/PLR-015/playwright.plr015.config.ts`, 18:41:17 to 18:41:30 UTC, and the same with `PLR_RUN=on PLR_TAG=on`, 18:41:37 to 18:41:58 UTC. Both served the production build (`npm run build`, then `vite preview` on 4174, the project's configuration with `cwd` set to the root). Logs `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/run_off.txt` and `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/run_on.txt`; what each saw, per field, in `seen_off.json` and `seen_on.json` beside them, laid out in `summary.txt`.

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/summary.txt
   FIGURE (off, against the groundwork's own sets, the planted fault not applied): refused-and-logged-no-basis 7 of 7; released-with-right-value 6 of 6
   FIGURE (on, against the groundwork's own sets, the planted fault not applied): refused-and-logged-no-basis 7 of 7; released-with-right-value 6 of 6
```

One line per member of the set (13 = 7 + 6; `_evidence/counts.txt` counts 7 `NONE` lines and 6 `BASIS` lines in each of the three runs, 0 lines `ok=False`). In both runs the screen's outcome and word are the same, and the log holds exactly one row per refused field, reader `pnea-officer`, learner PLR-000003, reason `no basis`; with the switches on the switch state at the read was true for all three (`seen_on.json`, `switch_state_at_read`) and the test took 7.6 s against 1.9 s.

| field | set | screen, both runs | log rows, both runs |
|---|---|---|---|
| birth_registration_number | none | `Refused: no basis` (BR-2014-00001 not on screen) | 1, `no basis` |
| national_number | none | `Refused: no basis` | 1, `no basis` |
| identity_flag | none | `Refused: no basis` | 1, `no basis` |
| referred | none | `Refused: no basis` | 1, `no basis` |
| parent_confirmed | none | `Refused: no basis` | 1, `no basis` |
| consents | none | `Refused: no basis` | 1, `no basis` |
| history | none | `Refused: no basis` | 1, `no basis` |
| plr_number | basis | received `PLR-000003` = fixtures | 0 |
| family_name | basis | received `Mibzukdra` = fixtures | 0 |
| given_names | basis | received `Zukzukzuk` = fixtures | 0 |
| date_of_birth | basis | received `2014-09-20` = fixtures | 0 |
| school | basis | received `SCH-A3` = fixtures | 0 |
| grade | basis | received `GR-6` = fixtures | 0 |

The refusal log held 0 rows before each read and 7 after (`log_entries_before`, `log_entries_after`). Each run's last lines:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/run_off.txt
  1 passed (10.3s)
```

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/run_on.txt
  1 passed (18.2s)
```

**A4 — the planted fault fails, on the field planted. Met.** Command: the off run with `PLR_PLANT=family_name PLR_TAG=planted`, which moves `family_name` out of the basis set into the none set the spec expects (an environment variable; the application and the spec's files unchanged), 18:42:04 to 18:42:16 UTC; log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/run_planted.txt`, exit 1. The soft assertions that failed are six, all named `family_name`, none naming another field (`_evidence/planted_errors.txt`, the log's `Error:` lines with their colour codes removed: 6 lines).

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/run_planted.txt
  1 failed
exit=1
```

**A5 — the figure. Met.** In the first paragraph above.

**A6 — what changed. Met.** The record's list of changed files (`RECORD.txt` section 1) names two files, `_working/PLR-015/_evidence/stage1_sets.json` and `_working/PLR-015/_evidence/summary.txt`, both inside `_working/PLR-015/`; `_working/*`, `dist/` and `node_modules/*` were excluded from its window as the instruction says, so the files Playwright and the shell wrote are listed in section 7 by hand. The build rewrote `dist/` and `src/generated/` (the modification times of the two generated files moved from 20:22 to 20:42); their contents are identical before and after (logs `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/generated_sha256_before.txt` and `generated_sha256_after.txt`):

| file | sha256 before and after | bytes |
|---|---|---|
| `src/generated/fixtures.json` | `71a1ba3e66ec075fde48f792b0e6e779ecd92ca67ab6c04b49991a225a189574` | 415179 |
| `src/generated/groundwork.json` | `9f27f80d882c4776984ace1d27d69829fcaa99ace6fdd0278a670d66f8f60c72` | 67315 |

**A7 — the record's check. Met.** Command: `round_record.py check --record _working/PLR-015/_record --report <this file>`; output in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record/check.out`. Result in words: exit 0, `## Findings — 0`, 0 files changed after the end list inside the window, and the five quoted blocks of this report read against the files they name and found.

**A8 — placement and trace. Met.** Logs `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/placement_check.txt` and `trace_check.txt`. Result in words: both exit 0; the placement check says `placement check: clean` and the trace check says `trace check: clean`, with the seven pinned inputs hashing the same now as when the instruction was issued.

**A9 — the ledger. Not claimable inside this report.** `ledger.py show` for PLR-015 before the `finished` entry shows `issued` and `started` of version 1 (`_evidence/ledger_show_before_finished.txt`); the `finished` entry follows this report, and `_evidence/ledger_show_after.txt` is written by the command run after it.

## 3. Found, not fixed

- No defect in the exchange's refusal of PNEA was found. `national_number` is empty for all 300 fixture learners (`_evidence/stage2_inspect.txt`: 0 hold one), so no run of this kind can show that field leaking; and `identity_flag` and `referred` are held only by learners with no birth registration number (87 hold a flag, 213 a number, none both). Candidate instruction: a seeded learner whose record holds a value in all of them, or a check that injects one, if the owner wants the leak of those three fields shown rather than the refusal.
- `e2e/g3/read.spec.ts` reads `fx.learners[0]`, PLR-000001, whose birth registration number is empty; its leak assertion on that field is guarded by `if (L.birth_registration_number)` and is skipped for it. Not this round's to repair (out of scope), recorded so the next review of G3 knows.

## 4. What I could not establish

- Whether a leak of `national_number`, `identity_flag` or `referred` would be caught, for want of a learner holding a value in them (section 3). This round shows the refusal for those three, not a refusal against a value.
- The round was run on one learner; the instruction names the repeat on another learner as the review's.

## 5. Corrections to the instruction

- `ledger.py started` was given `--effort unknown`: this session's start shows no effort level. The `--account unknown` is for the same reason, the context naming no address.
- `round_record.py start` takes one `--read` per file, not a list after one `--read`; the first attempt failed on that and wrote nothing, and `_evidence/round_record_start.txt` holds the second, successful run.

## 6. What this round did not finish

Nothing of the task's five stages. The review is started after the `finished` entry.

## 7. The outputs, by path

The place the round wrote in is `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/` (its evidence files, the spec, the configuration, the four Python programs, `learner.txt`, `playwright/` and `_record/`), plus `dist/` and `src/generated/`, which `npm run build` rewrote, and this report. The listings are `ls -ld` taken at 18:44 UTC, 14 paths, 14 `exit=0` lines, in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/outputs_listing.txt`; the report's own line there is of an earlier write and its size is stale by design, since nothing can list a file after its last write that the listing then is part of.

```text
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/learner.txt
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/playwright.plr015.config.ts
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/pnea-refusal.spec.ts
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/dist
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/generated
/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md
```

Sizes and checksums of the three files that matter most, by `wc -c` and `shasum -a 256` at 18:43 UTC: `learner.txt` 1778 bytes `ccd8e1cbc301fabb34daf497dcd7454fcc198c04bc0162aa6ab2a9712baeb542`; `playwright.plr015.config.ts` 823 bytes `0abb0d25b6d6ec38eaba6bc102529d89832871b3e9896735e531683a68b709f7`; `pnea-refusal.spec.ts` 7340 bytes `dc410861e6bca8ce54c106dda25f3f8518588ca598ad4377e017e46b5673e3cd`.
