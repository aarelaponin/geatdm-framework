---
kind: instruction
commission_id: PLR-016
version: 1
session_name: PLR · work · learners on more than one list, and how many are caught
kind_of_work: checking
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/generated/fixtures-truth.json
inputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/generated/fixtures.json · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/groundwork.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/store/README.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/store/store.ts · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/e2e/g1/g1.ts · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/playwright.config.ts · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-009_fixtures_2026-10-28.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md
serves: the prototype, run locally, 30 November 2026, and the note to the Permanent Secretary — the figure of learners on more than one list and how many the prototype's search catches, established and worked out again
model: Sonnet — the work is mechanical: the set is listed from the fixtures' key, and the application's own search decides each entry
effort: high — 358 list entries, every one run through the search, both ways
reviewer: a separate session started from the review instruction; Sonnet, effort high — it works both figures out again from fixtures.json alone, without the key and without the store
review_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-016_cross-list-learners_2026-10-30.md
waits_for: PLR-015 — the two checks both build the application through Playwright into dist/ and src/generated/, and so are one body of work
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/ · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md
running_record: PLR — the issued entry is written in the ledger by ledger.py from this declaration, once this file is complete and before the start message is handed over
---
## The start message

```text
PLR · work · learners on more than one list, and how many are caught
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md
```

---

# INSTRUCTION — How many learners appear on more than one list, and how many does the prototype catch?

**Suggested model: Sonnet, effort high.** You run alone; no other round writes in the project while you run.

## 1. Role and where to run

You are a working session for the PLR project (the Progressa learner registry prototype of KP0),
started under the name `PLR · work · learners on more than one list, and how many are caught`. Run on the owner's Mac, in its own shell (Desktop Commander, loaded with
ToolSearch where it is deferred), at `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype`. You do exactly the task in section 3. You run without
anybody watching: put no question to anybody; where something stops you, report it.

**Your first act**, once you have read the declaration block and before you read anything further:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py started --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-016 --session "PLR · work · learners on more than one list, and how many are caught" --shell native --instruction /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md --effort <high where your start shows it, else unknown> --started-by <owner, sub-session or unknown> --account <the address your own context names as the user's address, or unknown> --by "PLR · work · learners on more than one list, and how many are caught"
```

It prints the file it wrote as its last line; your report records it, the exit code and the time. If it
refuses because PLR-015 is not yet accepted, stop: write nothing, and say so in one line.
Read your effort, who started you and your account as section 1 of `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/PROMPT-template.md`
says, from your own prompt and context only. Then run `hostname` for your report's `computer` line.

**The record of what is running** (`/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/WHAT_IS_RUNNING.md`) is produced from the ledger. Read its
Open block before you write; **write no row in it**.

**The interpreter.** Run `round_record.py` and every program under its `run` with
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3`, never the bare `python3` (3.7.9 here, which traces nothing under `run`).
`ledger.py`, `trace_check.py` and `placement_check.py` run under either.

**The round's record.** Before your first write:
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py start --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_record --root /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype --read <each file of the declaration's upstream_artefact and inputs> --exclude '/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/node_modules/*' --exclude '/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/dist/*' --exclude '/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/*'`.
**Under `run`, only the round's own Python programs, if any.** `npm`, `node`, `npx`, `tsx` and Playwright
run outside it, their output in `_evidence/`; so do `ledger.py`, `trace_check.py`, `placement_check.py`
and `round_record.py`. After your last output: `end`; and, as your last act before the `finished` entry,
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_record --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md`. The report's `record`
line names the record and states the check's result in words.

**Open nothing on the owner's screen**: no dev server in a window, nothing with `--open`; Playwright runs
headless and serves the production build itself on port 4174 (`playwright.config.ts`). Check before
you run that nothing holds 4174 (`lsof -iTCP:4174 -sTCP:LISTEN`), and after, that nothing of yours runs.

## 2. Read first, in this order

1. `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/SKILL.md` — the procedure.
2. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md` — the page of the kind (checking): part 1 is what you refuse.
3. The kind has no skill for this task; this line says so.
4. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md` — the constants, section 5 above all.
5. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/groundwork.md` — the tables `source-lists`, `planning-figures`, `settings` (`fixture.cross_list_duplicates`, `fixture.spelling_variants`).
6. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-009_fixtures_2026-10-28.md` — how the fixtures and their key were made.
7. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/store/README.md` and `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/store/store.ts` — `Store.open`, `findLearners`: G1's search.
8. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/e2e/g1/g1.ts` and `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/playwright.config.ts` — **for G1's selectors and the way the build is served only.**

## 3. The task

**Two figures, and what separates them.** *On more than one list*: learners of the fixtures whose
entries stand on two or three of the source lists. *Caught*: of those, how many the prototype's search
finds on the PLR from each of their list entries — so that enrolling the child from any list would end
in `found-on-plr` rather than a second record. (The figure `duplicates-caught` of V1 counts enrolments
that ended in `found-on-plr`; it is not this figure, and the report says so in a sentence.)

**Stage 1 — the set, from the key.** From `src/generated/fixtures-truth.json` (give its sha256), list every
learner with entries on more than one list: PLR number, its entries (list, entry id) and which entry is a
spelling variant. Count them: in total, on two lists, on three, with a variant. Then **the other way**:
from the three lists of `src/generated/fixtures.json` (give its sha256), every entry, and set the entries
against the key's: both totals, and every entry in one and not the other (the page of the kind, part 1,
item 2). Set your totals against the settings `fixture.cross_list_duplicates` and `fixture.spelling_variants`.

**Stage 2 — the catch, by the application's own search.** In `_working/PLR-016/`, a short program (run
with `npx tsx`) that opens the application's store, `Store.open` from `src/store/store.ts`, on an
in-memory IndexedDB (`fake-indexeddb`, as `src/store/store.test.ts` does) — filled from the fixtures as
the shell's is — and, for every entry of every learner of Stage 1, calls `findLearners` with the entry's
family name, given names and date of birth. Per entry: the PLR numbers returned. An entry is **found**
when the result is exactly its learner's PLR number; **missed** when the result is empty; **wrong** for
anything else. A learner is **caught** when every one of its entries is found. Count: learners caught,
learners not caught (and of those, how many carry a variant), entries found, missed, wrong. Write every
row to `_evidence/catch.csv`.

**Stage 3 — the planted fault** (the page of the kind, part 1, item 1). Show the count can fail: run the
same program once with one found entry's given names altered in memory (by an argument, never by editing
a file of `src/`), and see that entry and its learner leave the caught count.

**Stage 4 — at the real thing** (the page of the kind, part 1, item 4). On the production build, headless,
with every switch off after the training panel's reset, start G1 for **two** entries: one Stage 2 found and
one it missed (a variant, if any was missed). Record, with a screenshot each in `_evidence/`, whether the
search step shows the learner already on the PLR. Say whether the screen agrees with Stage 2 for both.
Your own Playwright configuration in `_working/PLR-016/` takes the project's, with `testDir` your folder
and `outputDir` `_working/PLR-016/playwright`; run it as
`PW_DISABLE_TS_ESM=1 npx tsx node_modules/@playwright/test/cli.js test --config _working/PLR-016/<your config>`.

**Stage 5 — the figures.** In one paragraph: how many learners stand on more than one list; how many the
prototype catches from every entry; how many it does not, and why, in the words of the store's search
("the same family name, given names and date of birth, letters compared without regard to case").

## 4. Constraints

- The project's constants, section 5. No operation that writes to version control. **Change nothing
  you check**: write nothing outside `_working/PLR-016/` and your report. `npm run build`, run by
  Playwright, rewrites `dist/` and `src/generated/` from the sources; that is expected, and the report
  gives the sha256 of `src/generated/fixtures.json` and `fixtures-truth.json` before Stage 1 and after Stage 4.
  If they differ, stop and say so: the figures would be over two different sets.
- **Never build a second matching of your own to stand in for the store's**: the catch is what
  `findLearners` returns. Your own matching is the review's route, not yours.
- A defect found is reported with its evidence under "found, not fixed", never repaired. No new dependency.

## 5. Acceptance criteria

- **A1** — Stage 1's set and counts, both ways, the differences named, set against the two settings, in `_evidence/`.
- **A2** — `_evidence/catch.csv`: one row per entry of every learner of Stage 1, and the counts of Stage 2 computed from it by a command shown.
- **A3** — The planted fault's run, and the caught count it moved.
- **A4** — Stage 4's two runs pass, with their screenshots, and the report says whether the screen agrees with Stage 2.
- **A5** — The figures of Stage 5, in the report's first paragraph.
- **A6** — The record's list of changed files names nothing outside `_working/PLR-016/`, `dist/`,
  `src/generated/` and the report; the fixture files' checksums before and after are equal.
- **A7** — `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_record --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md` → `## Findings — 0`.
- **A8** — `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/placement_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md` and
  `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/trace_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md --coordination /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md` pass.
- **A9** — `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py show --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-016` shows `started` and `finished`
  of version 1, and the report's last write (`stat`) precedes the `finished` entry.

## 6. Evidence required

For every criterion: the command as run, its output, the time; in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/`.

## 7. How this round can fail

**The faults of the kind, by reference:** part 1 of `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md`. Particular to this round: the
settings or PLR-009's report quoted as the count instead of counting; a matching of the round's own
standing in for `findLearners`; a learner counted caught from one entry while another of its entries
missed; only the second list's entry searched; the store opened empty, so that nothing is found; the
fixtures rebuilt between the count and the catch.

## 8. Out of scope

Everything under `src/`, `e2e/`, `docs/`, `package.json`. Whether the search *should* catch a spelling
variant is a question for the owner, not for this round: report the figure and leave the judgement.
Anything found and not asked for goes under "found, not fixed".

## 9. The report

From `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/REPORT-template.md`, its `upstream_artefact` this file's path. Do not commit or
push; do not send anything; do not write the verdict. If a file this instruction names does not
exist, stop and say so. The report lists each output's full path with `ls -ld` and its exit code; then
the `finished` entry:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py finished --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-016 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md --outcome "<one line, in the words of the report's first paragraph>" --moved "<one line: what later rounds depend on that now exists, or nothing>" --account <the same account as your started entry> --by "PLR · work · learners on more than one list, and how many are caught"
```

## 10. The review

Once your `finished` entry stands, your one act is to start the review named in `review_instruction`
as a sub-agent with your Agent tool: `general-purpose`, never a fork; in the foreground; model
`sonnet` where the tool takes one, never lower; with exactly these three lines as its prompt:

```text
PLR · review · learners on more than one list, and how many are caught
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-016_cross-list-learners_2026-10-30.md
Load the shell tool this session has for commands on the computer (desktop-commander where it is present).
```

Never create a scheduled task to start it. Wait for it, add nothing, and end with one line: the
review's verdict line and its path, or why it could not start. Do not judge it.
