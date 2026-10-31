---
kind: instruction
commission_id: PLR-015
version: 1
session_name: PLR · work · PNEA refused a field without a basis
kind_of_work: checking
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/groundwork.md
inputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/store/README.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/playwright.config.ts · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/e2e/g3/read.spec.ts · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-013_g3-screens_v2_2026-10-30.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md
serves: the prototype, run locally, 30 November 2026, and the note to the Permanent Secretary — whether the exchange refuses PNEA every field it has no basis for, established on the production build
model: Sonnet — the work is mechanical: the set is a table of the groundwork, and a headless run against the production build decides it
effort: medium — seven fields, two runs, one planted fault
reviewer: a separate session started from the review instruction; Sonnet, effort medium — it repeats the check on another learner and plants its own fault
review_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-015_pnea-refusal_2026-10-30.md
waits_for: none
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/ · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md
running_record: PLR — the issued entry is written in the ledger by ledger.py from this declaration, once this file is complete and before the start message is handed over
---
## The start message

```text
PLR · work · PNEA refused a field without a basis
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-015_pnea-refusal_2026-10-30.md
```

---

# INSTRUCTION — Does the exchange refuse PNEA every field it has no basis for?

**Suggested model: Sonnet, effort medium.** You run alone; no other round writes in the project while you run.

## 1. Role and where to run

You are a working session for the PLR project (the Progressa learner registry prototype of KP0),
started under the name `PLR · work · PNEA refused a field without a basis`. Run on the owner's Mac, in its own shell (Desktop Commander, loaded with
ToolSearch where it is deferred), at `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype`. You do exactly the task in section 3. You run without
anybody watching: put no question to anybody; where something stops you, report it.

**Your first act**, once you have read the declaration block and before you read anything further:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py started --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-015 --session "PLR · work · PNEA refused a field without a basis" --shell native --instruction /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-015_pnea-refusal_2026-10-30.md --effort <medium where your start shows it, else unknown> --started-by <owner, sub-session or unknown> --account <the address your own context names as the user's address, or unknown> --by "PLR · work · PNEA refused a field without a basis"
```

It prints the file it wrote as its last line; your report records it, the exit code and the time.
Read your effort, who started you and your account as section 1 of `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/PROMPT-template.md`
says, from your own prompt and context only. Then run `hostname` for your report's `computer` line.

**The record of what is running** (`/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/WHAT_IS_RUNNING.md`) is produced from the ledger. Read its
Open block before you write; **write no row in it**.

**The interpreter.** Run `round_record.py` and every program under its `run` with
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3`, never the bare `python3` (3.7.9 here, which traces nothing under `run`).
`ledger.py`, `trace_check.py` and `placement_check.py` run under either.

**The round's record.** Before your first write:
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py start --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record --root /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype --read <each file of the declaration's upstream_artefact and inputs> --exclude '/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/node_modules/*' --exclude '/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/dist/*' --exclude '/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/*'`.
**Under `run`, only the round's own Python programs, if any.** `npm`, `node`, `npx` and Playwright run
outside it, their output in `_evidence/`; so do `ledger.py`, `trace_check.py`, `placement_check.py`
and `round_record.py`. After your last output: `end`; and, as your last act before the `finished` entry,
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md`. The report's `record`
line names the record and states the check's result in words.

**Open nothing on the owner's screen**: no dev server in a window, nothing with `--open`; Playwright runs
headless, serving the production build itself (`playwright.config.ts`: it runs `npm run build` and
`vite preview` on port 4174, and stops it). Check before you run that nothing holds port 4174
(`lsof -iTCP:4174 -sTCP:LISTEN`); after the run, that nothing of yours still runs (`ps aux | grep -E "vite preview|playwright" | grep -v grep` prints nothing).

## 2. Read first, in this order

1. `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/SKILL.md` — the procedure.
2. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md` — the page of the kind (checking): part 1 is what you refuse.
3. The kind has no skill for this task; this line says so.
4. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md` — the constants, section 5 above all.
5. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/groundwork.md` — the tables `reader-fields`, `contract-linkup`, `training-switches`, `learner-fields`.
6. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/src/store/README.md` — the store, Linkup and the refusal log.
7. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/e2e/g3/read.spec.ts` and `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/playwright.config.ts` — **for the screen's selectors and
   the way the build is served only.** G3's scenarios are the round that built the screen checking itself;
   this round does not run them, import their assertions, or count their passes as its evidence.
8. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-013_g3-screens_v2_2026-10-30.md` — G3 accepted, version 2.

## 3. The task

**Stage 1 — the set, before the run.** List from `docs/groundwork.md`, table `reader-fields`, every row of
the reader `pnea-officer` with the basis `none`, and the rows with a basis, as two sets; give the version
of the groundwork you read (its sha256). Read the same rows from `src/generated/groundwork.json` and
set the two lists against each other: both totals, and every field in one and not the other.

**Stage 2 — the learner.** Choose one learner of `src/generated/fixtures.json` whose record holds a birth
registration number, so that a field leaking would show a value. Name its PLR number, and why you chose it.
Write the choice down before the run, in `_working/PLR-015/learner.txt`.

**Stage 3 — your own check.** In `_working/PLR-015/`, write a Playwright configuration of your own that
takes the project's (`playwright.config.ts`: its build, port and headless browser), with `testDir` your
folder and `outputDir` `_working/PLR-015/playwright`; and one spec of your own. It resets the data from
the training panel, sets the switches of the run, opens G3, asks for every field of `learner-fields` for
your learner, and records, per field: what the screen shows in "What PNEA received", and the rows of
"The refusal log" for that field with their reason. It writes what it saw to a JSON file in `_evidence/`,
and asserts: every field of the `none` set shows the word `refused` and has one log row with the reason
`no basis`; every field with a basis shows the learner's value from `fixtures.json` and no log row.
Two runs: **every switch off**; and **every switch of `training-switches` on**. Run it as
`PW_DISABLE_TS_ESM=1 npx tsx node_modules/@playwright/test/cli.js test --config _working/PLR-015/<your config>`.

**Stage 4 — the planted fault** (the page of the kind, part 1, item 1). Before you count a pass as
evidence, show that the assertion fails when it should: run the same spec once with one field of the
basis set moved into the `none` set it expects (by an environment variable your spec reads, never by
editing the application), and keep the failing run's output.

**Stage 5 — the figure.** The answer, in one sentence: of the N fields PNEA has no basis for, how many
the production build refused and logged with `no basis`, in each run; and of the M with a basis, how many
it released with the right value.

## 4. Constraints

- The project's constants, section 5. No operation that writes to version control. **Change nothing
  you check** (the page of the kind, part 1, item 5): write nothing outside `_working/PLR-015/` and
  your report. `npm run build`, run by Playwright, rewrites `dist/` and `src/generated/` from the
  sources; that is expected, nothing else of the tree changes, and the report gives the sha256 of
  `src/generated/fixtures.json` and `src/generated/groundwork.json` before and after.
- A defect found is reported with its evidence under "found, not fixed", never repaired.
- No new dependency; `package.json` is not yours.

## 5. Acceptance criteria

- **A1** — The two sets of Stage 1, from the groundwork and from its generated JSON, with both totals and the
  difference named (none, or each member), in `_evidence/`.
- **A2** — `_working/PLR-015/learner.txt` stands, and its last write precedes the first run (`stat`).
- **A3** — Both runs pass, with what they saw in `_evidence/`: per field, the screen's word or value and
  the log's rows.
- **A4** — The planted fault's run fails, on the field planted, and its output is in `_evidence/`.
- **A5** — The figure of Stage 5, in the report's first paragraph.
- **A6** — The record's list of changed files names nothing outside `_working/PLR-015/`, `dist/`,
  `src/generated/` and the report; the generated files' checksums before and after are given.
- **A7** — `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_record --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md` → `## Findings — 0`.
- **A8** — `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/placement_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-015_pnea-refusal_2026-10-30.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md` and
  `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/trace_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md --coordination /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md` pass.
- **A9** — `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py show --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-015` shows `started` and `finished`
  of version 1, and the report's last write (`stat`) precedes the `finished` entry.

## 6. Evidence required

For every criterion: the command as run, its output, the time; in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-015/_evidence/`.

## 7. How this round can fail

**The faults of the kind, by reference:** part 1 of `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md`. Particular to this round: G3's own scenarios run
and their pass reported as this check; the set of fields taken from the screen instead of from the
groundwork; a learner whose record holds nothing in the refused fields, so that a leak would look like a
refusal; the check run against `npm run dev` or the source instead of the production build; a server left
running on 4174.

## 8. Out of scope

Everything under `src/`, `e2e/`, `docs/`, `package.json`. The answer to whether PNEA *should* be refused
a field is the groundwork's, not this round's. Anything found and not asked for goes under "found, not fixed".

## 9. The report

From `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/REPORT-template.md`, its `upstream_artefact` this file's path. Do not commit or
push; do not send anything; do not write the verdict. If a file this instruction names does not
exist, stop and say so. The report lists each output's full path with `ls -ld` and its exit code; then
the `finished` entry:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py finished --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-015 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-015_pnea-refusal_2026-10-30.md --outcome "<one line, in the words of the report's first paragraph>" --moved "<one line: what later rounds depend on that now exists, or nothing>" --account <the same account as your started entry> --by "PLR · work · PNEA refused a field without a basis"
```

## 10. The review

Once your `finished` entry stands, your one act is to start the review named in `review_instruction`
as a sub-agent with your Agent tool: `general-purpose`, never a fork; in the foreground; model
`sonnet` where the tool takes one, never lower; with exactly these three lines as its prompt:

```text
PLR · review · PNEA refused a field without a basis
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-015_pnea-refusal_2026-10-30.md
Load the shell tool this session has for commands on the computer (desktop-commander where it is present).
```

Never create a scheduled task to start it. Wait for it, add nothing, and end with one line: the
review's verdict line and its path, or why it could not start. Do not judge it.
