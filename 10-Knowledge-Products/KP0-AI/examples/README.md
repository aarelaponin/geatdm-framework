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

## `mini-registry/` — frozen 31 October 2026

Module 5's toy, run once with the orchestrator plugin for the screenshots (`../figures/M5-*.png`). Copied from the demo folder (`~/Documents/Dev/wai-demo/`) as it stood at 17:05 Tallinn time, 31 October 2026, without the rounds' working evidence (`_working/`), the coordination's guards and its two produced pages. The owner's account address is replaced by "(account removed)", the home folder by `~`, the user name in file listings by `owner`, and the names of another coordination and of the computer by a description in brackets. The paths `~/IdeaProjects/…` in the ledger and the coordination's `projects.txt` are as written: they are a fault of the run, which the groundwork's first review found (see below). The record at that date:

- **Round 1, the register of requirements:** 23 requirements (R-01 to R-23) from 29 units of the brief, 20 of them requirements, each with a test, and 14 questions left open; review accepted, 0 gaps; owner's ruling: accepted (decision D-2026-10-31-02).
- **A round the brief does not list, the answers to the register's open questions:** a decision paper on G-01 to G-13. Version 1 not accepted, 3 gaps; the gap G3 added to the analysis page as item 6. Version 2 not accepted, 3 gaps. Then withdrawn and re-scoped, with no third version: the owner ruled on the thirteen recommendations directly (D-2026-10-31-03). Ruled together, they give round 7 a known answer, 4 of the 8 caught, and a reset a known number of learners, 64.
- **A round on the record itself:** the coordination made a git repository on this computer with no remote (owner's ruling D-2026-10-31-01, history kept locally), so that the record of what is running could be cut over to the ledger (`project/_records/CUTOVER_2026-10-31.md`).
- **Round 2, the groundwork:** version 1 not accepted, 1 gap (the round's own record check failed); version 2 accepted; owner's ruling: accepted (D-2026-10-31-04). Its review also found, outside its tests, that the ledger names the project's folder as `~/IdeaProjects/mini-registry`, which is not where it is.
- **Not reached:** rounds 3 to 8.

| Folder | Page | What it holds |
|---|---|---|
| `project/docs/` | 5.1, 5.2 | The register, the decision paper, the groundwork and its three tables |
| `project/_prompts/`, `_reports/`, `_reviews/` | 5.1, 5.2 | Every instruction, report and review of the run, versions 2 beside versions 1 |
| `project/WHAT_IS_RUNNING.md` | 5.1 | The record of what is running: the rows written by hand before the cut-over, and the produced tables after |
| `project/_kinds/` | 5.2 | The four pages of faults as the run left them; `analysis.md` carries the added item 6 |
| `project/CONSTANTS.md`, `_reports/REPORT_INCEPTION_2026-10-31.md` | 5.1 | What setup wrote, and its report |
| `coordination/_ledger/` | 5.1, 5.2 | The ledger: the role taken up, the four decisions and their rulings, and the rounds after the cut-over |
