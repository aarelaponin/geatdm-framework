---
kind: instruction
commission_id: PLR-024
version: 1
session_name: PLR · work · the drafting page, against items missed
kind_of_work: drafting
answers_kind: item — named recurring-kind by the ledger's check on 30 October 2026 in the reviews of PLR-005 and PLR-018
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/drafting.md
inputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-005_use-case-model_2026-10-28.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-018_note-to-the-permanent-secretary_2026-10-30.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-018_note-to-the-permanent-secretary_v2_2026-10-30.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-005_use-case-model_2026-10-28.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-018_note-to-the-permanent-secretary_2026-10-30.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-023_note-closed-limits_2026-10-30.md · /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/FINDING-KINDS.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-024_drafting-page-item_2026-10-30.md
serves: the note to the Permanent Secretary and every later drafting round of the prototype, 30 November 2026 — so that the kind "item" stops recurring in drafting reviews
model: Opus — the causes are in three written reviews; the work is to read them exactly and write the page's rule
effort: medium — three reviews, one page, three parts
reviewer: a separate session started from the review instruction; Opus, effort medium — it tests the amended page against the three gaps
review_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-024_drafting-page-item_2026-10-30.md
waits_for: PLR-023 — PLR-023 reads the page this round changes
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/drafting.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-024/ · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-024_drafting-page-item_2026-10-30.md
running_record: PLR — the issued entry is written in the ledger by ledger.py from this declaration, once this file is complete and before the start message is handed over
---
## The start message

```text
PLR · work · the drafting page, against items missed
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-024_drafting-page-item_2026-10-30.md
```

---

# INSTRUCTION — Amend the page of drafting for the kind of gap "item"

**Suggested model: Opus, effort medium.** You run alone.

## 1. Role and where to run

You are a working session for the PLR project, started under the name
`PLR · work · the drafting page, against items missed`. Run on the owner's Mac, in its own shell (Desktop Commander, loaded with ToolSearch where it
is deferred), at `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype`. Put no question to anybody; where something stops you, report it.

**Before anything else**, `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py show --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-024`: if it shows a `started`
entry, write nothing and end with one line saying so. Otherwise your first act:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py started --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-024 --session "PLR · work · the drafting page, against items missed" --shell native --instruction /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-024_drafting-page-item_2026-10-30.md --effort <medium where your start shows it, else unknown> --started-by <owner, sub-session or unknown> --account <the address your own context names as the user's address, or unknown> --by "PLR · work · the drafting page, against items missed"
```

If it refuses because PLR-023 is not yet accepted, stop and write nothing. Then `hostname`. Write no row in
`WHAT_IS_RUNNING.md`. The round's record as earlier rounds keep it: `round_record.py start`, `end` and
`check` with `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3`, record `_working/PLR-024/_record`, `--root` the project, `--read` every file
of the declaration, excluding `node_modules/*`, `dist/*` and `_working/*`; `check` with `--report` your report,
as your last act before `finished`.

## 2. Read first

The procedure, `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/SKILL.md`, sections 3 (the setting `ledger.recurring_kind`) and 6.4; `FINDING-KINDS.md`
(the kind `item`); the page `_kinds/drafting.md`; the three reviews of the declaration, their gaps of the kind
`item`; the three instructions those gaps were found against (PLR-005, PLR-018) and PLR-023, the re-scope.

## 3. The task

1. **The three gaps, side by side**, in `_working/PLR-024/causes.md`: for each, what was missed, what the
   instruction asked for, and the cause — in the round, in the instruction's wording, or in what the page
   tells the orchestrator to verify before issue. Name one cause the three share, or say that there is none.
2. **The page amended** for the cause: part 1 (what a session refuses), part 2 (what its review runs) and
   part 3 (what the orchestrator verifies before it issues) — each only where the cause calls for it. Item 8 of
   part 1 was added on 30 October 2026 for the note's first two gaps; amend it rather than add beside it where
   it covers the same fault. Each addition cites the gaps it comes from, as the page's items do.
3. **Show the amendment would have caught each gap**: for each of the three, the sentence of the amended page
   that a session, a review or the orchestrator following it would have met first, quoted.

## 4. Constraints

The project's constants, section 5. No operation that writes to version control. **Write nothing outside
`_kinds/drafting.md`, `_working/PLR-024/` and your report.** The page is this instruction's upstream and the one
input you change: the trace check's `input-changed` finding for it is expected; give its sha256 before and after.

## 5. Acceptance criteria

- **A1** — `causes.md`: the three gaps, each with its source line, what the instruction asked, and its cause.
- **A2** — The page amended; every addition cites its gaps; nothing else of the page changed (a `diff` shown).
- **A3** — For each gap, the sentence of the page that would have caught it, quoted.
- **A4** — The record's list of changed files names nothing outside the page, `_working/PLR-024/` and the report; `round_record.py check` → `## Findings — 0`.
- **A5** — `placement_check.py` on this instruction and `trace_check.py` on the report (with `--constants` this project's and `--coordination /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md`) pass, but for the expected finding on the page.
- **A6** — `ledger.py show … --id PLR-024` shows one `started` and the `finished` of version 1.

Evidence in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-024/_evidence/`.

## 6. The report and the review

From `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/REPORT-template.md`, its `upstream_artefact` this file's path. Do not commit or push. Then:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py finished --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-024 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-024_drafting-page-item_2026-10-30.md --outcome "<one line>" --moved "<one line, or nothing>" --account <the same account as your started entry> --by "PLR · work · the drafting page, against items missed"
```

Once your `finished` entry stands, your one act is to start the review named in `review_instruction` as a
sub-agent with your Agent tool: `general-purpose`, never a fork; in the foreground; model `opus` where the tool
takes one, never lower; with exactly these three lines as its prompt:

```text
PLR · review · the drafting page, against items missed
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-024_drafting-page-item_2026-10-30.md
Load the shell tool this session has for commands on the computer (desktop-commander where it is present).
```

Never create a scheduled task to start it. Wait for it, add nothing, and end with one line: the review's
verdict line and its path, or why it could not start.
