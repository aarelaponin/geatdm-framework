---
kind: instruction
commission_id: PLR-003
version: 2
session_name: PLR · work · what identifies a learner
kind_of_work: analysis
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/gitbook/start-here/progressa.md
inputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/KP0_Module2_Script_Bundle_v0.1.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/KP0_Orchestrate_Demo_App_Plan_v0.1.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/analysis.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_2026-10-28.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-003_identity_2026-10-28.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_v2_2026-10-28.md
serves: the hosted prototype, 30 November 2026 — the decision on what identifies a learner, which the groundwork (PLR-004) waits for
model: Opus — on the owner's word of 28 October 2026, 19:04 Tallinn time: "For What identifies a learner? use Opus instead of Fable". The band by the kind of work would be Fable: the judgement is genuinely open: position A and position B each have a case in the documents, the choice is hard to reverse once the groundwork and the screens rest on it, and the round must be free to conclude against PNIA's preference, against MoEYS's, and against the owner and the orchestrator
effort: max — the owner named the model, not the effort; there is no mechanical test; the rivals and the ground of the recommendation are the evidence
reviewer: a separate session started from the review instruction; Opus, effort high — the review reads each position and each test against the documents it cites
review_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-003_identity_2026-10-28.md
waits_for: none
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/paper-what-identifies-a-learner.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/ · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_v2_2026-10-28.md
running_record: PLR — the issued entry is written in the ledger by ledger.py from this declaration, once this file is complete and before the start message is handed over
---
## The start message

```text
PLR · work · what identifies a learner
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-003_identity_2026-10-28.md
```

---

# INSTRUCTION — Answer "What identifies a learner?" as a paper with a recommendation

**Suggested model: Opus, effort max, on the owner's word.** The question is open,
and the paper may reach a conclusion that contradicts everyone who asked it.

## 1. Role and where to run

You are a working session for the PLR project (the Progressa learner registry prototype of KP0),
started under the name `PLR · work · what identifies a learner`. Run on the owner's Mac, in its own shell (the Desktop Commander
tool, loaded with ToolSearch where it is deferred), at the project's root, `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype`. You do exactly
the task in section 3 and nothing else. You run without anybody watching: put no question to
anybody; where something stops you, report it.

**Your first act**, once you have read the declaration block above and before you read anything
further, is this task's `started` entry:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py started --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-003 --session "PLR · work · what identifies a learner" --shell native --instruction /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-003_identity_2026-10-28.md --effort <max where your start shows it, else unknown> --started-by <owner, sub-session or unknown> --account <the address your own context names as the user's address, or unknown> --by "PLR · work · what identifies a learner"
```

It prints the name of the file it wrote as its last line; your report records that name, the exit
code and the time. Your effort, who started you and your account are read as section 1 of the
instruction form says (`/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/PROMPT-template.md`): from your own prompt and context only,
never from a file on the machine. Then run `hostname` and put what it prints in your report's
`computer` line. Where the command cannot run, record that in your report as it stands.

**The record of what is running** (`/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/WHAT_IS_RUNNING.md`) is not yet produced from the ledger.
As its head says, add your row to its Open table once your `started` entry stands, and move it to
the Closed table when you stop, with the times your `started` and `finished` entries carry, read
from the entries, not from your clock.

**Keep the round's record** with `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py`: `start` before your first write
(roots: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs`, `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003`, `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports`), `end` once your outputs are
written, and `check` as your last act before the `finished` entry. Its `--help` gives the
arguments. The report's `record` line names the record.

## 2. Read first, in this order

1. `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/SKILL.md` — the procedure; section 5 (how a decision is closed) matters here: you write a
   paper with a recommendation, and the decision is the person's.
2. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/analysis.md` — the page of the kind of work (analysis): part 1 is what you refuse.
3. The kind has no skill; this line says so.
4. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md` — the project's constants.
5. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/gitbook/start-here/progressa.md` — the country, all of it: the flagship and its promise, PNIA and its child IDs, birth
   registration's coverage, Linkup, the Data Protection Act.
6. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/KP0_Module2_Script_Bundle_v0.1.md`, subtopics 2.1, 2.2 and 2.4 — the planning unit, the brief, the audit.
7. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/KP0_Orchestrate_Demo_App_Plan_v0.1.md`, sections 2.1 to 2.4 and the row of PLR-003 in section 5.3.

## 3. The task

Write `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/paper-what-identifies-a-learner.md`: a paper, for the head of MoEYS's planning unit in Progressa's story, that answers
**what identifies a learner on the PLR**, and recommends.

- **The two positions, each at its strongest, before either is judged.**
  *Position A:* the PLR issues its own number at first enrolment and holds the birth registration
  number where one exists. *Position B:* the national identity is the key, which means PNIA issuing a
  number to every child at birth registration — a change in another body. Each is stated from the
  documents, with the passages that make it strongest quoted at their lines. A third position the
  documents support may be added and judged the same way; it is not required.
- **One table, position by test.** The tests are yours to choose and to justify, and include at least:
  what the law requires and allows (the Data Protection Act on a minor's data); coverage (the share
  of children with a birth record); what another body must change, and who decides it; duplicates
  caught at enrolment; what is hard to reverse; and what each means for the prototype's goals G1 to
  G3. A fact counted against one position is counted against every position it touches.
- **The recommendation**, labelled as a recommendation and never as a decision: which position, on
  what ground, what would change it, and what the person must decide (which is not yours to decide).
  It may contradict PNIA's preference, MoEYS's, the owner's or the orchestrator's; say so where it does.
- **One page at the head** for the planning unit: the question, the recommendation, the decision
  asked for. The rest of the paper is the ground for it.

Work notes go to `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/`, evidence to `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_evidence/`.

## 4. Constraints and standing rules

- The standing constraints of the project's constants, section 5, all of them.
- Never state a figure from memory: 71%, 16 and every other figure is quoted from the line that
  holds it, read when you write it.
- No operation that writes to version control.
- Write nothing outside the outputs the declaration names, and `WHAT_IS_RUNNING.md`'s row.
- Open nothing on the owner's screen.

## 5. Acceptance criteria

- **A1** — The paper has its one-page head (question, recommendation, decision asked for), the two
  positions each stated before the table, the table position by test, and the recommendation with
  what would change it: `grep -n '^#' /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/paper-what-identifies-a-learner.md`.
- **A2** — Every fact the paper rests on is quoted with `<path>:<line>`, and
  `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/check_citations.py` (written by the round) prints, for each citation, the path,
  the line and the text at that line; its output in `_evidence/` shows no citation to a missing file
  or line, and the report lists any citation whose line does not hold the quoted words.
- **A3** — The table has one row per test and one column per position, and no cell empty; where a
  test does not apply to a position, the cell says why.
- **A4** — The recommendation is labelled as such, names what would change it, and names the decision
  that is the person's: `grep -n -i "recommend\|decision" /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/paper-what-identifies-a-learner.md`.
- **A5** — The round's record: `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check` over the record the
  report's `record` line names → no file changed outside the outputs.
- **A6** — The placement check passes over this round's outputs, and the trace check over its report:
  `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/placement_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-003_identity_2026-10-28.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md` and
  `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/trace_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_2026-10-28.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md --coordination /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md`.
- **A7** — The `started` and `finished` entries of this task stand in the ledger for version 1:
  `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py show --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-003`.

## 6. Evidence required

For every criterion: the command as run, its output trimmed but not edited, and the time. Long
output goes to `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_evidence/` and is cited by path.

## 7. How this round can fail

**The faults of the kind, by reference:** part 1 of `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/analysis.md`.

Particular to this round:

- The paper argues for the position the plan's wording leans toward, and states the other only to
  dismiss it. Each is stated at its strongest before either is judged.
- A cost or a delay of position B (PNIA's change) is counted, and the matching cost of position A
  (a second number to keep in step with the national identity later) is not.
- The paper decides: "the PLR will use…" is a decision; "the planning unit is recommended to…" is not.

## 8. Out of scope — do not touch

- The register of requirements (PLR-002, running at the same time) and every other document of
  Phase B; `_kinds/`, `CONSTANTS.md` and the governing documents.
- Anything discovered but not asked for goes under "found, not fixed".

## 9. The report

Write the report named in `downstream_artefact`, from `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/REPORT-template.md`. Set its
`upstream_artefact` to this file's path. Do not commit or push; do not send anything; do not write
the verdict. If a file this instruction names does not exist, stop and say so.

The round ends with two acts: the report lists each output's full path with `ls -ld "<path>"` and its
exit code, and then the `finished` entry:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py finished --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-003 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_2026-10-28.md --outcome "<one line, in the words of the report's first paragraph>" --moved "<one line: what others depend on that changed, or nothing>" --account <the same account as your started entry> --by "PLR · work · what identifies a learner"
```

## 10. The review

Once your `finished` entry stands, your one act is to start the review named in
`review_instruction` as a sub-agent with your Agent tool: `subagent_type` `general-purpose`, never a
fork; in the foreground; model `opus` where the tool takes a model, and never a lower one;
and as its prompt exactly these three lines:

```text
PLR · review · what identifies a learner
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-003_identity_2026-10-28.md
Load the shell tool this session has for commands on the computer (desktop-commander where it is present).
```

Never create a scheduled task to start it. Wait for it, add nothing, and end with one line: the
review's verdict line as it returned it, and the review's path. Where the sub-agent could not start,
or the Agent tool cannot give the named model, say so in that line instead. Do not judge the review
and do not act on its verdict.

---

## 11. Version 2 — the gaps of the review, and what this version does (2026-10-28)

Version 1 wrote `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/paper-what-identifies-a-learner.md`. Its report is `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_2026-10-28.md`; its review, `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-003_identity_2026-10-28.md`, did not accept it. A1 to A7
were met and every citation holds; the paper decides nothing that is the person's. Two gaps, both
against section 3's rule that a fact counted against one position is counted against every
position it touches (the page of the kind, part 1, items 2 and 5):

- **G1 (item).** "The simulation shows a body doing what it has not agreed to" is counted against
  position B only (T6a). Position A's G1 simulates two bodies the same way: Civil Registration
  answering across Linkup, though it is not a member, and MoEYS reading across Linkup, though it is
  not a member. A's T6a cell does not count this, and the cross-check table has no row for it.
- **G2 (item).** The dependency on a body MoEYS cannot oblige is counted against B in T8 and in the
  ground of 5.2, not against A, though T3's A cell concedes A's G1 needs the Civil Registration
  Department, decided under the Ministry of Interior. The cross-check table says it is counted
  against A in T8 when the cell does not hold it. The sentence that neutralises A's dependency in T3
  ("Without it, A still works: the clerk keys the birth registration number from the paper record")
  carries no citation, is not marked as reasoning, and departs from G1 as the plan writes it without
  saying so.

**This version revises the paper in place; everything of sections 1 to 10 stands.** Your entries
carry version 2. Your report is the new `downstream_artefact`; version 1's report stays as it is.

**The interpreter.** Run `round_record.py`, every program you run under its `run`, and the kit's
programs with `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3` (Python 3.11.14, which has PyYAML), never with the bare `python3`: on this Mac
`python3` is 3.7.9, which has no `sys.addaudithook`, so `round_record.py run` traces nothing under
it, and the kit's programs need PyYAML, which 3.10 and 3.11 in `/usr/local/bin` lack. The
orchestrator ran this combination on a scratch record on 28 October 2026 before issuing this
version: `start` with the kit as a root, `run` of `kit.py skills --check` and `kit.py slot 01`
(both exit 0), `end`, and `check` (0 findings). `ledger.py`, `trace_check.py` and
`placement_check.py` run under either interpreter.

The orchestrator found that version 1 ran `round_record.py` under the bare `python3` (3.7.9), so its
`run` traced nothing and A5's clean `check` rests on an empty trace. This version keeps a new record
under the interpreter above.

### 11.1 The steps of this version, in order

1. Your `started` entry (section 1), then `hostname`.
2. Copy the paper as version 1 left it into `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_evidence/v2/paper_v1.md`.
3. `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py start --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_record_v2 --root /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs --root /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003 --root /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports`
   with `--read` for the instruction's `upstream_artefact` and each file of its `inputs` line.
4. Revise the paper:
   - put A's dependency on Civil Registration, and the simulation of bodies that have not agreed
     (Civil Registration and MoEYS across Linkup), into every cell of the table they touch, for
     every position they touch;
   - make the cross-check table agree with its cells, row by row: a row that says a fact is counted
     in a cell names only cells that hold it;
   - cite the paper-keying fallback of T3, or mark it *reasoning, not in the documents* as the
     paper's head says such reasoning is marked, and say whether it departs from G1 as the plan
     writes it;
   - then say whether the ground of 5.2 and the recommendation still stand as written. Where they
     do not, change them; the paper is free to reach a different recommendation, and says so at its
     head where it does.
5. Run `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/check_citations.py` over the revised paper under
   `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py run --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_record_v2 --`, its output into `_evidence/v2/`.
6. `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py end --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_record_v2`, then the report, your row in
   `WHAT_IS_RUNNING.md`, and `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_record_v2 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_v2_2026-10-28.md`
   as your last act before the `finished` entry.

### 11.2 The acceptance criteria of this version

A1 to A4 and A6 to A7 stand as section 5 gives them, A6 over `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_v2_2026-10-28.md` and A7 for version 2. In addition:

- **A5 (replaces section 5's A5)** — `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_record_v2 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_v2_2026-10-28.md`
  → `## Findings — 0`, with `runs.jsonl` showing the citation check traced in full.
- **A8** — For G1 and G2, the report names each cell and each cross-check row the round changed, by
  its label in the paper, and `diff /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003/_evidence/v2/paper_v1.md /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/docs/paper-what-identifies-a-learner.md` shows them.
- **A9** — Every row of the cross-check table names only cells that hold what it says: a table in the
  report, row by row, quoting each named cell's words.
- **A10** — The report says whether the ground of 5.2 and the recommendation stand as written, and
  why; where the recommendation changed, the paper's head says so.

### 11.3 The finished entry and the review

The `finished` command of section 9 with `--report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_v2_2026-10-28.md`. Then section 10 as written: the review
instruction at the same path is now its version 2, with the same three-line prompt.
