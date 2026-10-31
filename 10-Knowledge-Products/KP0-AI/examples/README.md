# Examples

The excerpts the pages of Modules 3–5 use, frozen so that the pages do not move when the record does. They are not learner-facing: each page rewrites its excerpt in plain English, with the codes, paths and bookkeeping removed (section plan, section 4), and links to it.

## `plr/` — frozen 31 October 2026

Copied byte for byte from `../plr-prototype/` and from the PLR entries of the team's ledger, as they stood on 31 October 2026, except that the owner's account address is replaced by "(account removed)". The record at that date:

- **23 pieces of work closed:** 13 accepted at the first version, 10 second attempts, and 4 withdrawn and run again. Two of the closes are *re-scoped*, not *accepted* (the constants, and the note v2). Source: `4.1-log/MEASURES.md`, week 44.
- **The note:** v1 not accepted, v2 not accepted, then re-scoped as a new piece of work that was accepted (`3.4-note/`).

| Folder | Page | What it holds |
|---|---|---|
| `3.1-identity-paper/` | 3.1 | The identity paper's instruction, its v1 report and review (not accepted), and the v1 round's table and citation checks. The paper itself was revised in place, so v1's table is known only through these files |
| `3.2-3.3-duplicates-count/` | 3.2, 3.3 | The duplicates count: instruction, review instruction, report and review (accepted) |
| `3.3-identity-paper-v2/` | 3.3 | The identity paper v2: report, review (accepted) and the paper as accepted |
| `3.3-consent-refusal/` | 3.3 | The consent-refusal check: instruction, report and review |
| `3.4-note/` | 3.4 | The note: v1 and v2 working files (`mapping.md`, `claims.md`), both reports and reviews, the re-scoped round's report and review, and the note as it now stands |
| `4.1-log/` | 4.1 | The ledger entries that close the parallel round and its reviews, the measures, and the record of what is running |
| `4.2-faults/` | 4.2 | The PLR pages of the kinds as they stand, and the round that added the drafting page's limit-of-one-step line |
| `4.3-handover/` | 4.3 | The handover note, and the incoming session's first task and its report |

The starter folder's filled example is a separate plain-language rewrite: `../toolkit/orchestrate-starter/example/`.

## `mini-registry/` — frozen 1 November 2026

Module 5's toy, run once with the orchestrator plugin for the screenshots (`../figures/M5-*.png`), from setup to the delivery commit and the handover. Copied from the demo folder (`~/Documents/Dev/wai-demo/`) when the run had ended, without the rounds' working evidence (`_working/`), the coordination's guards and its two produced pages, and the note's PDF, which its source rebuilds. The owner's account address is replaced by "(account removed)", the home folder by `~`, the user name in file listings by `owner`, and the names of another coordination and of the computer by a description in brackets. The paths `~/IdeaProjects/…` in the ledger and the coordination's `projects.txt` are as written: they are a fault of the run, which the groundwork's first review found. The prototype under `project/src/` runs as it stands (`node reset.js`, `node --test test/*.test.js`, `node server.js`); the pictures `M5-26` to `M5-29` were taken from a copy of it after a reset.

The run took 17 rounds in one day: 9 accepted at the first version, 5 at the second, and 3 withdrawn after a second version not accepted and ruled on by the owner directly (14 reviews accepted, 11 not).

| Round | Versions | Outcome | What it found |
|---|---|---|---|
| 1, the register of requirements | 1 | accepted (D-2026-10-31-02) | 23 requirements from 29 units of the brief, 14 questions open |
| The decision paper on the register's questions | 2 | withdrawn; the owner ruled on G-01 to G-13 directly (D-03) | Its answers given in advance: 4 of the 8 caught, 64 learners after a reset |
| The ledger under local git, and the cut-over | 1 | accepted (D-01) | `project/_records/CUTOVER_2026-10-31.md` |
| 2, the groundwork | 2 | accepted (D-04) | Its review found the wrong `~/IdeaProjects` path |
| The answers to the groundwork's 14 questions | 2 | withdrawn; ruled directly (D-05) | |
| 3, the goal in full | 2 | accepted | 5 screens, 13 gaps |
| The answers to the goal's 13 questions | 1 | accepted | |
| 4, the count | 1 | accepted | 13 of 23 requirements reach the goal, 12 of 19 parts of the goal are reached |
| 5, the scaffold and the made-up data | 1 | accepted | Every known number; 29 of 29 checks |
| 6, the goal built | 2 | accepted | Version 1's window check did not read the windows; 57 of 57 checks |
| The page of faults for analysis | 2 | accepted | `project/_kinds/analysis.md` |
| 7, the duplicates count | 1 | accepted | 4 of the 8 caught; the 4 missed differ by one letter in the family name |
| 8, the note to the Permanent Secretary | 2 | accepted | Version 1 left out one limit; 38 limits listed; not sent |
| Four commits of the day | 1, 1, 2, 1 | accepted; the third withdrawn after version 2 | `8484d16` and `ab3cc36` the last, no push |
| The handover | — | the role given up, 22:18 UTC | `project/_records/HANDOVER_2026-11-01.md` and the successor's first task, `project/_prompts/PROMPT_FIRST_TASK_2026-11-01.md` |

| Folder | Page | What it holds |
|---|---|---|
| `project/docs/` | 5.1 to 5.4 | The register, the papers, the groundwork, the goal, the count, the duplicates count and the note, with their tables |
| `project/src/` | 5.3, 5.4 | The prototype, its made-up data and its 57 checks |
| `project/_prompts/`, `_reports/`, `_reviews/` | 5.1 to 5.4 | Every instruction, report and review of the run, versions 2 beside versions 1 |
| `project/WHAT_IS_RUNNING.md` | 5.1 | The record of what is running: the rows written by hand before the cut-over, and the produced tables after |
| `project/_kinds/` | 5.2 | The pages of faults as the run left them |
| `project/CONSTANTS.md`, `_reports/REPORT_INCEPTION_2026-10-31.md` | 5.1 | What setup wrote, and its report |
| `coordination/_ledger/` | 5.1 to 5.5 | The ledger: the role taken up, every decision and its ruling, and the rounds after the cut-over |
