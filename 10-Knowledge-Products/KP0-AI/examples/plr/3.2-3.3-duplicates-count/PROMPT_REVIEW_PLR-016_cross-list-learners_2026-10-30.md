---
kind: instruction
commission_id: PLR-016-R
version: 1
session_name: PLR · review · learners on more than one list, and how many are caught
kind_of_work: checking
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-016_cross-list-learners_2026-10-30.md
serves: the verdict on PLR-016
model: Sonnet — both figures are worked out again mechanically, by a route the report did not use
effort: high — every entry of the three lists, grouped and matched by the reviewer's own program
reviewer: not applicable — this instruction is the review
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-016_cross-list-learners_2026-10-30.md · /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016-R/
running_record: PLR — the issued entry is written in the ledger by ledger.py from this declaration, once this file is complete and before the start message is handed over
---
## The start message

```text
PLR · review · learners on more than one list, and how many are caught
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-016_cross-list-learners_2026-10-30.md
```

---

# INSTRUCTION — Review PLR-016's report against its instruction

**Who may take it.** A session that neither wrote nor carried out PLR-016; otherwise stop and say so. The
report did not exist when this was written; its `issued` entry pinned it `absent`, which is the report
coming into being, not a change.

## 1. The first act

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py started --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-016-R --session "PLR · review · learners on more than one list, and how many are caught" --shell native --instruction /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_REVIEW_PLR-016_cross-list-learners_2026-10-30.md --effort <high where your start shows it, else unknown> --started-by <sub-session, owner or unknown> --account <the address your own context names as the user's address, or unknown> --by "PLR · review · learners on more than one list, and how many are caught"
```

Then `hostname`. Write no row in `WHAT_IS_RUNNING.md`; it is produced from the ledger.

## 2. Read first

`/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/SKILL.md` sections 6.3 and 6.4; `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/REVIEW-template.md` (part one is your form);
`/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/checking.md` part 2; `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/references/FINDING-KINDS.md`; the instruction `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md`; the report and the
outputs it names.

## 3. The task, fixed

Write the review named in `downstream_artefact`. Change nothing else; repair nothing; commission
nothing. Run every criterion of the instruction's section 5 yourself, `round_record.py` with
`/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3`. In particular, **both figures worked out again
by a route the report did not use** (the page of the kind, part 2), with a program of your own in
`_working/PLR-016-R/`, reading `src/generated/fixtures.json` only — **not** `fixtures-truth.json`, and
**not** the store or any file of `src/`:

- *On more than one list*: group the entries of the three lists into children by your own rule — the same
  date of birth and school, the same given names, and family names equal or differing in a single
  letter — and count the children whose entries stand on two or three lists, and how many of them are
  spelt differently. State your rule in the review, and set your count against the report's.
- *Caught*: for each entry of those children, compare its family name, given names and date of birth,
  letters without regard to case, with every learner record of `fixtures.json`; count the children whose
  every entry matches exactly one record, and that the same one. Set it against the report's.
- Where your counts and the report's differ, name every child or entry in one and not the other, and read
  each against the files.
- **The planted fault of your own**: one entry altered in memory, and your count seen to move.
- Confirm that `src/generated/fixtures.json` and `fixtures-truth.json` hold the checksums the report gives,
  and, by the round's record and `git -C /Users/arnelaponin/Documents/Dev/geatdm-framework status --short -- 10-Knowledge-Products/KP0-AI/plr-prototype`,
  that the round wrote nothing outside `_working/PLR-016/`, `dist/`, `src/generated/` and its report.
- Look at Stage 4's two screenshots and say whether they show what the report says. Open nothing on the
  owner's screen.
- The mechanical checks: `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/trace_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-016_cross-list-learners_2026-10-30.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md --coordination /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md`;
  `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/placement_check.py /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md --constants /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md`; `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py show --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-016`
  and `check`; `/Users/arnelaponin/.pyenv/versions/3.11.14/bin/python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/round_record.py check` over the record the report names.
- Evidence to `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016-R/_evidence/`.

## 4. The last act

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py finished --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-016-R --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-016_cross-list-learners_2026-10-30.md --verdict <accepted or not-accepted> [--kinds "<kind=count · ...>"] --outcome "<one line: the verdict and its ground>" --moved "nothing" --account <the same account as your started entry> --by "PLR · review · learners on more than one list, and how many are caught"
```

Return the verdict line and the review's path. Do not commit or push.
