---
kind: review
reviews: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md
of_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-015_pnea-refusal_2026-10-30.md (PLR-015, version 1)
written_by: a session that neither wrote nor carried out the instruction
model: Claude Sonnet 5.5 (claude-sonnet-5-5) — read from the line of this session's own context that names the model; the review instruction names Sonnet
computer: MacBookPro — printed by `hostname`, output in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015-R/_evidence/after_run_and_hostname.txt
window: 2026-10-30 18:47:11 UTC (the started entry, 20261030T184711Z_PLR_started_PLR-015-R.yaml) to the moment of writing, no pause; closed by the last write of this file
verdict: accepted
downstream_artefact: the orchestrator's `closed` entry for PLR-015 (no long-delivery record is named among the outputs, so no row is written)
---

Evidence base: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015-R/_evidence/` (E below). Every log named is a file there.

## 1. The tests of success, one by one

Verdict: accepted. 0 gaps. Nine criteria, all met.

- **A1 (sets). Met.** My own reading of `docs/groundwork.md`, table `reader-fields`, rows of `pnea-officer` (E/own_sets.txt): 7 with basis `none` (birth_registration_number, national_number, identity_flag, referred, parent_confirmed, consents, history), 6 with `parental consent` (plr_number, family_name, given_names, date_of_birth, school, grade); 13 rows = the 13 codes of `learner-fields`. The sha256 of the groundwork I read, `2a577904d70d14c500847f48eb505c1f5d6fb01bcea01e4139fe9959d5d0ff1d`, equals the report's and the ledger's pinned one. The report's sets match mine member for member. The JSON side: the spec re-reads `src/generated/groundwork.json` after the build and asserts its none set equals the table's; both of my runs passed that assertion.
- **A2 (`learner.txt`). Met.** Last write 20:40:48 Tallinn = 18:40:48 UTC (`stat`, E/learner_stat.txt of the report, and my own `stat` now); the first run's first line is 18:41:17 UTC in the report's `run_off.txt`.
- **A3 (both runs). Met**, and repeated by me on another learner (part 2).
- **A4 (planted fault). Met**, and repeated by me with other fields (part 2).
- **A5 (figure in the first paragraph). Met.** 7 of 7 refused and logged `no basis` in each run, 6 of 6 released with the right value, PLR-000003; my runs give the same figures.
- **A6 (what changed). Met.** `src/generated/fixtures.json` `71a1ba3e66ec075fde48f792b0e6e779ecd92ca67ab6c04b49991a225a189574` and `groundwork.json` `9f27f80d882c4776984ace1d27d69829fcaa99ace6fdd0278a670d66f8f60c72`, as the report gives them; re-taken before and after my own builds (E/generated_sha256_before.txt, _after.txt): unchanged. Files in the project newer than the round's start, outside `_working/`, `dist/`, `src/generated/`, `node_modules/` and `.git`: the report and `WHAT_IS_RUNNING.md`, which the ledger produces (E/changed_outside.txt). Limit: `git status --short` for the prototype prints `?? 10-Knowledge-Products/KP0-AI/plr-prototype/` and `git ls-files` lists 0 files, so git cannot show what the round wrote (found, not fixed 6).
- **A7 (round record). Met.** Run by me, `## Findings — 0` (part 6).
- **A8 (placement, trace). Met.** Both clean (part 6).
- **A9 (ledger). Met.** `show` prints `issued` (18:37:00Z), `started` (18:38:39Z) and `finished` (18:46:36Z) of version 1; the report's last write, 18:46:16.356Z, precedes the finished entry.

## 2. Figures re-established by a route the report did not use

**The set of fields PNEA has no basis for.** Report's route: `stage1.py` over the groundwork and its JSON. Mine: a separate parse of the markdown table by a script of my own, counting `pnea-officer` rows by the `basis` column (E/own_sets.txt). Both give 7 and 6, same members. Agree.

**The check repeated on another learner, without a birth record.** Chosen and written to `_working/PLR-015-R/learner.txt` before the run (stat 20:48:30 Tallinn = 18:48:30 UTC; first run's start stamp is the first line of E/run_off.txt): **PLR-000006**. No birth registration number (87 of 300 learners have none); holds identity_flag, referred, parent_confirmed and the given consent PNEA-EXAM, so a leak of each refused field would show a value. It is neither the report's PLR-000003 nor G3's PLR-000001. The report's spec reads `_working/PLR-015/learner.txt`, so it cannot be pointed at another learner without editing; I copied spec and configuration into `_working/PLR-015-R/` and changed the folder name in four paths and added one environment variable, `PLR_UNPLANT` (below). The assertions are the report's.

| run (production build, headless, port 4174) | result | what it saw |
|---|---|---|
| every switch off | passed, exit 0 (E/run_off.txt) | 7 of 7 `Refused: no basis`, one log row each, reader `pnea-officer`, learner PLR-000006; 6 of 6 received with the fixtures value (PLR-000006, Tovquavex, Vexmibmib, 2014-07-22, SCH-B1, GR-6), 0 log rows; log 0 before, 7 after |
| all three switches on | passed, exit 0 (E/run_on.txt) | switch state at read all true; the same 7 of 7 and 6 of 6 (E/summary.txt, from seen_off.json and seen_on.json) |

Figure on a second learner: 7 of 7 refused and logged `no basis`, 6 of 6 released with the right value, in each run. It agrees with the report's, on a learner whose `identity_flag`, `referred` and `parent_confirmed` hold values, which the report's learner could not show.

**The planted faults of my own** (fields the report did not plant; it planted `family_name`):
1. `PLR_PLANT=school` (a basis field expected refused), the spec's own mechanism, unchanged: failed, exit 1 (E/run_planted.txt). Six soft assertions failed, every one naming `school`, none another field (E/planted_errors.txt).
2. `PLR_UNPLANT=identity_flag` (a none field expected received, the other direction, my addition to the copy; all switches on): failed, exit 1 (E/run_unplanted.txt). Three assertions failed, all on `identity_flag` (outcome, value, log row; E/unplanted_errors.txt).
The assertions discriminate in both directions, so a pass is evidence.

The report's figures given in its own words, read at their source: window close 18:46:16 = the report's last write (`stat`) and its start 18:38:39 = the started entry; `counts.txt` (7 NONE and 6 BASIS lines in each of three runs, 0 `ok=False`); run durations 7.6 s and 1.9 s (run logs); 6 planted errors; 34 files the round names as written (`find` gives 34 outside `_record/`); `wc -c` and sha256 of `learner.txt` 1778, the configuration 823, the spec 7340; 87 flags, 213 numbers, none both, `national_number` held by 0 (E/fixture_counts.txt, my own count from `fixtures.json`). All hold except one count (found, not fixed 5).

## 3. The outputs exist

Looked for at their paths with `ls -ld` and `wc -c`: `_working/PLR-015/`, `learner.txt` 1778, `playwright.plr015.config.ts` 823, `pnea-refusal.spec.ts` 7340, `_evidence/`, `_record/`, `dist/`, `src/generated/` and the report (15493 bytes now; the report says its listed size is earlier by design). All found at the sizes claimed. The trace check also reports 2 of 2 named outputs exist.

## 4. The running application

Not applicable: the round wrote no application model. It checked the exchange's behaviour on the production build, which I ran (part 2).

## 5. What the page of the kind has a review run

`_kinds/checking.md`, part 2: the figure worked out again by another route: run. The check repeated on another learner: run, PLR-000006. The planted fault: run twice, seen to fail. Part 1 read against the report: item 1 kept (planted run); item 2 kept (set listed first, totals both ways); item 3 does not arise; item 4 kept (`npm run build`, `vite preview` on 4174); item 5 kept. The instruction's particular faults: G3's scenarios not run (testDir is the round's folder); set taken from the groundwork, not the screen; no server left on 4174 (nothing listened before my runs; after them `lsof` and `ps` count 0, E/after_run_and_hostname.txt).

## 6. The mechanical checks, run by me

| command | exit | decisive line | log |
|---|---|---|---|
| `trace_check.py` over the report, with project and coordination constants | 0 | `trace check: clean`; 7 of 7 pinned inputs hash the same now | E/trace_check.txt |
| `placement_check.py` over the instruction | 0 | `placement check: clean` | E/placement_check.txt |
| `round_record.py check --record .../_working/PLR-015/_record --report <report> --tolerance 2` (the round's `# run with:` options), python 3.11.14 | 0 | `## Findings — 0`; `files changed after the end list inside the window: 0`; 5 quoted blocks found | E/round_record_check.txt |
| `ledger.py show --code PLR --id PLR-015` | 0 | `issued`, `started`, `finished` of version 1 | E/ledger_show.txt |
| `ledger.py check` | 0 | `check: clean` | E/ledger_check.txt |

Accounts on the entries: `issued` (account removed); `started` `unknown`; `finished` `unknown`. The report's declaration says `account: unknown` (its context named no address); they agree with it. Written under found, not fixed 3.

## 7. The verdict

Accepted, no gap. Ground: the production build refused PNEA the 7 fields without a basis, logged `no basis`, and released the 6 with a basis at the right value, in both switch states, on the report's learner and on a learner without a birth record; the check failed when planted in two ways. The orchestrator writes one `closed` entry with the outcome `accepted`; no increment row is written. Items of part 8 become candidate instructions.

## 8. Found, not fixed

1. **Seeded data cannot show a leak of `national_number`.** Held by 0 of 300 learners (E/fixture_counts.txt); it can only be shown refused. Candidate: seed or inject a value if the owner wants a leak shown.
2. **The `moved` line of the report's `finished` entry overstates**: "no fixture learner can show a leak of `national_number`, `identity_flag` or `referred`". Only `national_number` is empty for all; 87 learners, PLR-000006 among them, hold `identity_flag` and `referred`, and on that learner both were refused. The report's own text is correct (it says "in this learner's record"). Not edited here.
3. **Account and effort `unknown`** on the report's `started` and `finished`, where `issued` carries (account removed); the report states why. For this review's own `started` entry: it was written with `--effort medium`, though this session's start did not show the level, which the instruction says to record only where shown; it should read `unknown`. Not repaired (append-only); the verdict does not turn on it.
4. **The leak assertion on the birth number is empty for a learner without one**: `receivedTable.includes(learner.birth_registration_number)` is `includes(null)` for PLR-000006. The refusal itself is asserted by outcome, word and log row, which my unplant run showed to discriminate. No verdict effect.
5. **A count in the report's section 7 does not hold at its source**: "14 paths, 14 `exit=0` lines"; `outputs_listing.txt` holds 15 paths and 15 `exit=0` lines, and the report's code block names 9. A slip in the count of a listing, not of an output (all exist). Kind, were it a gap: `trace`; judged not to turn the verdict because the trace check is clean and no criterion rests on it.
6. **Git cannot witness A6**: the prototype is untracked as a whole (0 tracked files), so `git status` shows one `??` line. The round's record and file times carry the proof. Candidate: put the prototype under version control.
7. **Extra generated file**: the build also rewrites `src/generated/fixtures-truth.json`; it lies in a permitted place, not a defect.
8. **This review wrote**, in `_working/PLR-015-R/`: spec, configuration, `learner.txt`, `_evidence/`, `playwright/`; the build rewrote `dist/` and `src/generated/` (checksums unchanged). Nothing else. Nothing left running.
