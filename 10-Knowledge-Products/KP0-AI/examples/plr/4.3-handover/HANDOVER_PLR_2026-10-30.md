# HANDOVER — the Progressa learner registry prototype (PLR)

**Outgoing session:** `PLR · orchestrator · the PLR prototype, 27 Oct`, holding the role since its
`taken-up` entry of 27 October 2026, 15:55:44 UTC, to the end of Phase C · **Written:** 30 October 2026, about 18:25 UTC
**Successor's first task:** `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-014_first-task_2026-10-30.md`
(PLR-014), written from `FIRST-TASK-template.md` with the list of claims below, and issued — its
`issued` entry in the ledger written — before this session gives the role up.
**Given up by:** this session's `given-up` entry in the ledger, written after this note as the
session's very last act, naming this note and the successor's session name,
`PLR · orchestrator · from 30 Oct 2026`. No row is written for the change of hands.

*The entry, with every field filled in:*

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py given-up --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --session "PLR · orchestrator · the PLR prototype, 27 Oct" --handover /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_records/HANDOVER_PLR_2026-10-30.md --successor "PLR · orchestrator · from 30 Oct 2026" --reason "retired at the end of Phase C, the handover the plan foresees, on the owner's word of 30 October 2026: a new session of his" --account (account removed) --by "PLR · orchestrator · the PLR prototype, 27 Oct"
```

*Every line below is a **claim**, to be verified by the incoming session before it is acted on.*

## 1. What this session did that it should not have done

- [claim] It wrote by hand, outside its own records, on the owner's rulings: the coordination's
  constants (`_a-projects-registry/CONSTANTS.md`: the second computer row on 27 October; the git
  line and the identity of the ledger's commits on 28 October) and the project's constants
  (`CONSTANTS.md`: the ministry's name, PLR-D06; the travelling layer's pin, PLR-D05; the first
  deliverable run locally, PLR-D08; the line budget, PLR-D11). Each edit carries its line under
  "Amended only by a ruling". By refusal 4 of the procedure these were a round's to write.
- [claim] It added entries by hand to `_kinds/drafting.md` (parts 3, on 28 and 30 October) and
  `_kinds/building.md` (part 3, 30 October), as section 6.4 lets it, and wrote two rows by hand into
  `WHAT_IS_RUNNING.md` before the cut-over of 28 October, and a dated paragraph into the
  instructions of PLR-020 and PLR-020-R.
- [claim] It issued PLR-020-R before PLR-020 on 28 October, so the review's `issued` entry carries
  no subject; the two were closed apart.
- [claim] It designed the four goal rounds (PLR-011, PLR-012, PLR-013, PLR-022) to run at the same
  time in one tree (on the owner's yes, PLR-D09), and gave no guard against a scheduled task firing
  after the owner's "Run now": G2 and V1 each started twice. The owner withdrew all four (PLR-D10).
- [claim] On 30 October at about 15:47 UTC it killed, on the Mac, the orphaned process tree of the
  withdrawn G2 session's check (`_working/PLR-012/locked.sh`, pid 91956, parent 1).

## 2. What is owed

- [claim] Phase D, not commissioned: whether the exchange refuses a field PNEA has no basis for,
  against the local production build, headless (the plan's PLR-015); how many learners stand on more
  than one list and how many the prototype catches (PLR-016); the note to the Permanent Secretary
  (PLR-018), whose sending is the owner's decision. The owner ruled the end result runs locally and
  is not published (PLR-D08): the plan's PLR-017 is dropped.
- [claim] Nothing under `plr-prototype/` is committed in `geatdm-framework`; in
  `_a-projects-registry`, `CONSTANTS.md`, `MEASURES.md` and `_guards/` are uncommitted. Both are the
  owner's to commit; no artefact of the project is delivered until then.
- [claim] The plan (`../KP0_Orchestrate_Demo_App_Plan_v0.1.md`, sections 5.3, 5.4 and 6) no longer
  matches what was done: PLR-003 ran on Opus on the owner's word, not Fable; G2 did not wait for G1
  as section 5.4's lesson expects; PLR-017 is dropped; PLR-019 to PLR-022 are not in it. KP0's pages
  that quote the record should quote the record, not the plan.
- [claim] The KP0 worked examples (`KP0-AI/examples/`) can be extracted from Phases A to C now.

## 3. Findings that appear in no report

- [claim] Scheduled tasks created from this session fired one to five minutes late, and twice not
  at all until the owner pressed "Run now"; a "Run now" leaves the scheduled run pending, and it can
  fire later and start a second session. Turn the scheduled run off after a "Run now". Deleting a
  scheduled task deletes the sessions it started. This session was refused both firing a scheduled
  task and turning one off.
- [claim] On this Mac the bare `python3` is 3.7.9: `round_record.py run` traces nothing under it and
  the sdd-kit's programs lack PyYAML; `~/.pyenv/versions/3.11.14/bin/python3` serves both. The
  hostname reads `MacBookPro` or `Aares-MacBook-Pro-2.local` by the day; both are in the
  coordination's table of computers, and the owner does not want it changed.
- [claim] The native shell is the Desktop Commander tool reached through the bridge
  (`mcp__remote-devices__plugin_…_desktop-commander__start_process`, the prefix varying by
  session); the Linux shell of the bridge sees the folders under other paths and cannot run the ledger.
- [claim] PLR-011 version 2's report says its files are byte-identical to version 1's, "the same
  session having written both"; its review read and ran them and accepted.

---

## The list of claims to be checked

| # | The claim | Where it can be checked |
|---|---|---|
| 1 | Every entry of the ledger is committed and pushed to `https://github.com/alaponin/projects-registry.git` | `git -C /Users/arnelaponin/Documents/Dev/_a-projects-registry status --short -- _ledger` prints nothing, and `git -C … rev-parse HEAD` equals the hash `git ls-remote https://github.com/alaponin/projects-registry.git refs/heads/main` prints |
| 2 | The four goals G1, G2, G3 and V1 stand accepted at version 2, and no task of PLR is open | `ledger.py show --constants <coordination> --code PLR --id PLR-011-R` (and `-012-R`, `-013-R`, `-022-R`), each ending in a `closed` entry `accepted`; `ledger.py who` prints "no task open" for PLR |
| 3 | No session of the withdrawn goal rounds is still running on the Mac | `ps aux \| grep -E "locked.sh\|vitest\|playwright\|vite preview" \| grep -v grep` prints nothing |
| 4 | The application's code, its tests not counted, is within the budget of about 3,000 lines | `cd <root> && find src -name '*.ts' -o -name '*.tsx' \| grep -v generated \| grep -vE '\.test\.' \| xargs cat \| wc -l` |
