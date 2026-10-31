# KP0 Module 5 — the screenshot run: what is done, what is still needed v0.2

*31 October 2026. Internal: not learner-facing. v0.1 was the kickstart sheet for the first run. v0.2 records where that run stands (setup to round 2, Tallinn time 17:05), and lists the three screenshots and the material from the record Module 5 still needs, in the order the run will produce them. The run continues in the same folder, `~/Documents/Dev/wai-demo/`, from the orchestrator session pinned as "MR · orchestrator · the mini registry" (the code is `MR`; the session has since been renamed "MR · orchestrator · the mini registry", so later screenshots show MR. `M5-08` to `M5-13`, `M5-17` to `M5-21` and `M5-24` still show MINI; page 5.1 tells the learner to read MINI as MR).*

**Status, 1 November 2026.** The run has ended: 17 rounds, the last two commits `8484d16` and `ab3cc36`, no push. Sections 3 and 4 below are done: `examples/mini-registry/` is refreshed from the finished run, rounds 4, 5, 7 and 8 are in the pages as tables and the note's own words, and the "eight rounds" sentences are rewritten from the final count. The pictures `M5-25` to `M5-30` are in; `M5-30` is the final handover (5.5), taken after the final check; it shows the user path in the successor's start line, left as it is. No screenshots are left: the two still listed in section 2, where the project stands (5.5) and a ruling on the question form (5.1), were dropped on 1 November; the final check, `M5-25`, closes 5.5, and 5.1 describes the question form in words.

---

## 1. Done

**In the course** (commit `e4fe7e7`):

| What | Where it is used | Source |
|---|---|---|
| 24 screenshots, `M5-01` to `M5-24`: the plugin, the demo folder, setup's questions and report, the orchestrator taking the role, round 1 with its scheduled task and the two permissions the app asked for, the work session and its verdict, the round the orchestrator added, and that round not accepted and sent again as version 2 | 5.1 (21), 5.2 (3) | `figures/`; side bar and private names blurred |
| Round 1 in the course's log, four rows from *instruction issued* to *my ruling* | 5.1, as a table | the ledger and `WHAT_IS_RUNNING.md` |
| The decision paper withdrawn after two versions not accepted, and the owner ruling on its 13 recommendations directly; its two answers given in advance, **4 of the 8** caught and **64** learners after a reset | 5.2, as text | `docs/GAPS-PAPER.md`, decision D-2026-10-31-03 |
| The groundwork's settings, first seven rows with their sources; version 1 not accepted, version 2 accepted; what its review found outside its tests | 5.2, as a table and text | `docs/groundwork/settings.csv`, the two reviews |
| The run's record, redacted | the answer keys, and the tables above | `examples/mini-registry/` (frozen at 17:05) |

**In the run, not yet used in the course:** the round that put the coordination under local git, and the cut-over of the record to the ledger (`_records/CUTOVER_2026-10-31.md`). 5.1 mentions both in one sentence; no picture is needed.

---

## 2. Still needed: screenshots (3)

Only what exists on screen alone needs a picture. Everything a round writes is saved as markdown in `~/Documents/Dev/wai-demo/` and goes into the pages from the record (section 4). Number the new pictures from `M5-25`; each goes into `figures/` and into the script as an `IMAGE: M5-NN-name.png | caption` line.

| # | Page | What | Why it has to be a screenshot |
|---|---|---|---|
| 1 | 5.3 | **Taken** (`M5-26` to `M5-28` on 5.3, `M5-29` on 5.4): the finished prototype run from a copy of `mini-registry/src` after a reset, never in the project's folder, each picture the entry beside the screen it gave: a child found (learner 1), a new child (65), an entry refused (two faults), and learner 1 with one letter changed, given a second number (66). Headless Chrome, no window | — |
| 2 | 5.5 | The orchestrator's answer to "Where does the mini registry stand?" | A chat answer, not saved as a file. The rounds can be rebuilt from the log, but the picture shows the learner what asking looks like |
| 3 | 5.1 | A ruling on the question form: the question, the recommended answer and the rival. Any of the next decisions will do, such as the ruling on round 3 | Chat interface only: the log keeps your answer, not the form you saw |

**Taken:** the end-of-session check (5.5), as `M5-25-final-check.png`, after the line on asking whether everything is saved. It shows the run finished: 57 checks pass, 4 of the 8 caught, the note to the Permanent Secretary not sent, commits `8484d16` and `ab3cc36` unpushed, one correction to a ledger reason, and an uncommitted tail. No blurring needed.

Of the six places still marked `SCREENSHOT:` in `build_kp0_module5_v01.js`, two become these pictures (round 6, where it stands). The other four (rounds 4, 5, 7 and 8) become tables or excerpts from the record, and their marks are replaced when the run ends. Screenshot 3 has no mark yet; it goes in 5.1 after the line on how rulings are put.

**If round 7 does not give 4 and 4**, stop: either the data does not hold the settings (round 5) or the search is not the brief's rule (round 6). That is a finding for the page.

---

## 3. The rest of the run (done)

The orchestrator's session runs on Opus with effort High, as the course now says; a session you start by hand runs on the model and effort the orchestrator names. Whenever something it does is unclear, ask it to explain before you go on. Ask the orchestrator for one round at a time; start the next only when the last one's ruling is in the log. Never press *Run now* on a task that is also set to a time. Each new task asks again for its folder: allow it, as in `M5-15`.

| Order | Ask the orchestrator | Kind | What the result must show |
|---|---|---|---|
| next | The answers to the groundwork's 14 open questions (your ruling of 17:05 asked for them now, before round 3) | analysis | Each question answered or put to you; none widens the search beyond capitals |
| 3 | "Round 3: the goal 'Enrol a learner' written in full, every step and every way it can go wrong." | drafting | A step for one found, none found, and more than one found |
| 4 | "Round 4: count every requirement against the goal, both ways, after planting one mistake of each kind." | checking | Two totals; every requirement carried by no goal listed with its reason; both planted mistakes named |
| 5 | "Round 5: the scaffold and the made-up data, generated from the groundwork's settings, the same every time." | building | Each count equal to its setting, and 64 learners after reset |
| 6 | "Round 6: build the goal 'Enrol a learner'. Its review runs the checks and goes through the goal as a school clerk, once for a child already registered and once for a new child." | building | The checks pass; the review's own run of both cases |
| 7 | "Round 7: the duplicates count — how many of the 8 children on more than one list the search catches from every entry. The review counts again from the three lists alone." | checking | 8; 4 caught; 4 missed; none wrong; a planted fault moved the count |
| 8 | "Round 8: the note to the Permanent Secretary, one page: what the prototype shows and what it does not. List every limit the record names before writing." | drafting | Every limit in the note or listed with its reason; a limit of the search stated as a limit of the search |
| end | "Where does the mini registry stand?", then the handover, then "is everything committed?" | — | Every round with its ruling |

Not accepted rounds are part of the lesson: keep their screenshots and verdicts as well as the accepted version's.

---

## 4. Material from the record (done, 1 November)

When the run ends, refresh `examples/mini-registry/` from `~/Documents/Dev/wai-demo/` with the same redactions (account address, home folder, user name in listings, the other coordination's and the computer's other names; leave out `_working/`, the guards, `WHO.html`, `MEASURES.md`), and update its section in `examples/README.md`. Then take into the pages:

| Page | What | Where it will be | Replaces |
|---|---|---|---|
| 5.2 | Round 3: the goal written in full, its steps for one found, none found and more than one found | `docs/` | — (new short table) |
| 5.2 | Round 4: the count's totals, the requirements carried by no goal with their reasons, and the planted mistakes it found | `_reports/`, `_reviews/` | the mark for the count's report |
| 5.3 | Round 5: each count of the made-up data against its setting, including 64 learners after reset | `_reports/` | the mark for round 5's report |
| 5.3 | Round 6: the checks and the review's run as a clerk, both cases | `_reports/`, `_reviews/` | — (text beside screenshot 1) |
| 5.4 | Round 7: 4 of the 8 caught, 4 missed, the planted fault | `_reports/`, `_reviews/` | the mark for the duplicates count |
| 5.4 | Round 8: the note's "What it does not show" | `docs/` | the mark for the note |
| 5.5 | The handover note and the fresh session's first task | `_records/` or `_prompts/` | — (excerpt) |
| 5.5 | The final log: every round, version and ruling, with totals | the ledger and `WHAT_IS_RUNNING.md` | — (table in the course's log form, and one line of totals) |

Then check every answer key of Module 5 against the record: the self-check's question 4 and the tips of 5.4 and 5.5 assume **4 of the 8** caught; 5.5's "Know what it cost" gives the toy as eight rounds, which the run has already exceeded (an added round, a decision paper withdrawn, a round on the record). Rewrite that sentence from the final count.

---

## 5. Still needed: outside the course

- **The released plugin.** The run used a local build (`fa-project-ops-local` 0.2.0, author shown as "Aare Laponin" in `M5-01`). Before publication: check the screenshots against the plugin as released into the ea-plays kit, and retake any screen that changed. The install steps are noted for its README in `ea-plays-kit/docs/plans/2026-10-31-orchestrator-plugin-readme.md`.
- **Faults the run found in the plugin** (for `orchestrator-local`):
  1. The coordination registered the project's folder as `~/IdeaProjects/mini-registry` instead of `~/Documents/Dev/wai-demo/mini-registry` (`_coordination/projects.txt`), so every ledger entry names a folder that does not exist. The groundwork's first review found it.
  2. A scheduled task runs on the task's model, not the one the instruction names: the ledger round ran on Opus where its instruction named Sonnet.
  3. Three more the orchestrator named at the end (`M5-25`): the record tool fails on a folder deletion; a review's close does not reach its work; the ledger reads text after the bare word "none" in a wait field. It offered to write all ten as a hand-off file.
- **Screen hygiene** for the remaining screenshots: blur the side bar's rows from other projects and any private names, as in `M5-01`, `03`, `06`, `08`, `09`, `19` and `20`. The user path in file paths and the plugin's long identifier are left as they are.
- **Keep** `~/Documents/Dev/wai-demo/` and its history: it is the evidence behind the screenshots and the answer keys.
