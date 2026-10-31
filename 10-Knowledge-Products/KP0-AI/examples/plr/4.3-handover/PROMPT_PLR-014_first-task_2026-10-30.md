---
kind: instruction
commission_id: PLR-014
session_name: PLR · orchestrator · from 30 Oct 2026
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_records/HANDOVER_PLR_2026-10-30.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-014_first-task_2026-10-30.md
serves: the change of hands on the Progressa learner registry prototype (PLR) — the role passes at the incoming session's taken-up entry, and this file is the report of its first task
model: Opus — the content is the constants and the produced state, and the work is exact: reading documents of record and running the programs that produce the views
effort: high — the work is exact and the programs that produce the views are the test
reviewer: the outgoing session does not review this; the owner reads the result file
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-014_first-task_2026-10-30.md
running_record: PLR — the issued entry is written in the ledger by ledger.py from this declaration, by the outgoing session, once this file is complete and before its given-up entry
---

## The start message

```text
PLR · orchestrator · from 30 Oct 2026
Carry out the instruction at /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-014_first-task_2026-10-30.md
```

---

# FIRST TASK — take up the orchestrator role for the Progressa learner registry prototype (PLR)

## 1. Role and where to run

You are the incoming orchestrator session for the Progressa learner registry prototype (PLR), started under the name `PLR · orchestrator · from 30 Oct 2026`,
and you do not yet hold the role: you hold it from your `taken-up` entry of step 0. The name
begins with the orchestrator's code, which every session you later commission carries in turn
(section 6.5 of the procedure). Run on the owner's Mac, in its native shell (the Desktop Commander tool reached through the bridge, loaded with ToolSearch where it is deferred; the bridge's Linux shell cannot run the ledger). Do
exactly the five steps of section 3, in order, step 0 first, and stop.

Once you have read the declaration block above, and before you read anything further, write this
task's `started` entry in the ledger of orchestrator events:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py started --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-014 --session "PLR · orchestrator · from 30 Oct 2026" --shell native --instruction /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-014_first-task_2026-10-30.md --account <the address your own context names as the user's address, or unknown> --by "PLR · orchestrator · from 30 Oct 2026"
```

**Your account**, on this entry and on every entry below that records your own act, is read from one
line of your own context: the line that names the user's address — for a Cowork session, the
system-supplied sentence that begins "The user's email address is" — in lower case; where your
context names none, write `unknown`, and on the `taken-up` and the `given-up` below add
`--account-word` with the owner's word on it, quoted: the program refuses either entry without an
account, and `unknown` without that word. Never take it from a file on the machine, which names the
command-line tool's account or the owner's git identity and need not be yours. The one entry below
that records another session's act — the `given-up` on a gone holder's behalf — takes that holder's
account instead, as step 0 says.

What the instruction form says of a record not yet cut over to the ledger, of a session without a
shell on the computer the session runs on, and of a command that cannot run holds here word for
word, on either of the owner's computers: on the Mac its shell is zsh, on Windows PowerShell,
reached through the same tool. The incoming session coming to the role on the other computer than
its predecessor's starts from the `who` block as section 10.8 of the procedure says. Step 0's
`taken-up` is written in every case in which the ledger can be written; where it cannot — its folder
does not exist yet — the result file says so, the role passes as it did before the ledger, on the
owner's reading of the result, and the entry is written at the estate's cut-over (section 9.1 of the
procedure, step 3).

## 2. Read first, in this order

1. `/Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/SKILL.md` — the procedure.
2. The project's constants file, `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md`, — what the project is for, what it delivers, what governs it, where
   each kind of thing lives.
3. The handover note named in `upstream_artefact`.

Read nothing else. The estate is not surveyed by this task.

## 3. The task, in five steps

0. **Write the `taken-up` entry**, before step 1, naming your predecessor, the handover note and this
   task:

   ```text
   python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py taken-up --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --session "PLR · orchestrator · from 30 Oct 2026" --estate "the Progressa learner registry prototype" --root /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype --record /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/WHAT_IS_RUNNING.md --constants-of-estate /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/CONSTANTS.md --predecessor "PLR · orchestrator · the PLR prototype, 27 Oct" --handover /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_records/HANDOVER_PLR_2026-10-30.md --first-task /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-014_first-task_2026-10-30.md --account <the address your own context names as the user's address, or unknown with --account-word "<the owner's word, quoted>"> --by "PLR · orchestrator · from 30 Oct 2026"
   ```

   The program refuses it while the code has a holder with no `given-up` after it, and prints the
   remedy. **Where that holder is gone** — its session closed, its account moved, or retired
   without the entry — and the owner has said so, first write the `given-up` on its behalf, then the
   `taken-up`:

   ```text
   python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py given-up --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --session "<the holder's session name>" --for "<the holder's session name>" --handover <the handover note, absolute, or none> --successor "PLR · orchestrator · from 30 Oct 2026" --reason "<the owner's word that the holder is gone, and its date>" --account <the holder's account, as below — never your own> --by "PLR · orchestrator · from 30 Oct 2026"
   ```

   adding `--at <the moment the owner gives, as YYYY-MM-DDTHH:MM:SSZ>` where he gives one. This entry
   records the holder's act, so it carries the holder's account and not yours. Take it from the first
   of these that answers: the account the holder's own `taken-up` carries, where that entry is of the
   ledger's second format and names an address, or the `account-named` entry after it (`where --code
   PLR` prints it on its holder line); else the owner's word, given with his word that the holder
   is gone and recorded in the reason; else `unknown`, with `--account-word` quoting the owner's word.
1. **Read the constants.** Say, in one paragraph, what the project delivers and by when, and where
   each of the three kinds of document lives.
2. **Produce the state.** Run the programs that produce the three views — the register of
   instructions; the record of what is running, by the ledger's `views`; and each record of a long
   delivery — then the ledger's `check` and `who`, and report what each printed, with the command,
   its exit code and the time. Produce them; do not write them.

   ```text
   python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py views --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR
   python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py check --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md
   python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py who --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md
   ```

   A record not yet cut over to the ledger is named so by `views` and by `check`; report it as
   printed. Its cut-over follows this task (section 9.1 of the procedure) and is not part of it.
3. **Check the named claims.** For each claim in section 4 below, run the check named there and
   report what it returned. A claim that the check confirms is a fact from that moment; a claim the
   check contradicts is a finding; a claim that cannot be checked stops this task (section 5).
4. **Write the result file** named in `downstream_artefact`: the paragraph from step 1, the outputs
   of step 2, and one row per claim from step 3, with what was run and what came back. No more than
   12,000 bytes. Give its full path as the instruction form's section 9 says, and then write this task's
   `finished` entry:

   ```text
   python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py finished --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-014 --report /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-014_first-task_2026-10-30.md --outcome "<one line: what the result file comes to>" --moved nothing --account <the address your own context names as the user's address, or unknown> --by "PLR · orchestrator · from 30 Oct 2026"
   ```

   Write nothing else anywhere. Beyond the result file, the one thing this task writes is its own
   entries in the ledger — `started`, `taken-up`, the `given-up` on a gone holder's behalf where one
   is owed, `finished`, and, once the owner has read the result, `closed`. What `views` and `who`
   rebuild is produced, not written.

## 4. The claims to be checked

*Supplied by the outgoing session, which writes this task from the form, and by nobody else.*

| # | The claim | Where it can be checked |
|---|---|---|
| 1 | Every entry of the ledger is committed and pushed to `https://github.com/alaponin/projects-registry.git` | `git -C /Users/arnelaponin/Documents/Dev/_a-projects-registry status --short -- _ledger` prints nothing, and `git -C /Users/arnelaponin/Documents/Dev/_a-projects-registry rev-parse HEAD` equals the hash `git ls-remote https://github.com/alaponin/projects-registry.git refs/heads/main` prints |
| 2 | The four goals G1, G2, G3 and V1 stand accepted at version 2, and no task of PLR is open | `python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py show --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-011-R` (and `PLR-012-R`, `PLR-013-R`, `PLR-022-R`), each ending in a `closed` entry with the outcome `accepted`; `who` prints no task open for PLR |
| 3 | No session of the withdrawn goal rounds is still running on the Mac | `ps aux \| grep -E "locked.sh\|vitest\|playwright\|vite preview" \| grep -v grep` prints nothing |
| 4 | The application's code, its tests not counted, is within the budget of about 3,000 lines | `cd /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype && find src -name '*.ts' -o -name '*.tsx' \| grep -v generated \| grep -vE '\.test\.' \| xargs cat \| wc -l` |

## 5. The stopping rule

**At the first claim that cannot be checked, stop.** Write what you have, name the claim, say what
would be needed to check it, and hand the file over as it stands. Do not work around it, do not
substitute a different check, and do not proceed to the remaining claims. A first task that stopped
and said where is worth more than one that completed approximately.

## 6. Out of scope — do not touch

- Any instruction, report, review or engagement artefact. This task commissions nothing, writes no
  instruction, judges nothing and changes nothing; its own entries in the ledger, named in step 4,
  are the one thing it writes outside the result file.
- The handover note, which is the outgoing session's record.
- Any version-control operation that writes.

## 7. The test of success

The result file exists at its path, within its size; it carries the paragraph from the constants,
the output of every program that produces a view, and one row per claim with the command that
checked it; and either every claim has a row or the file names the claim at which the task stopped.

## 8. What follows

The owner reads the result file, the report of this first task; the role passed earlier, at step
0's `taken-up`. This session then closes the task with one entry, which records the owner's act and
judges nothing of its own:

```text
python3 /Users/arnelaponin/Documents/Dev/orchestrator-local/plugins/fa-project-ops/skills/orchestrator/scripts/ledger.py closed --constants /Users/arnelaponin/Documents/Dev/_a-projects-registry/CONSTANTS.md --code PLR --id PLR-014 --outcome accepted --ground "the owner read the result file /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-014_first-task_2026-10-30.md on <the date>" --account <the address your own context names as the user's address, or unknown> --by "PLR · orchestrator · from 30 Oct 2026"
```

The change of hands stands in the ledger as the outgoing session's `given-up` and this session's
`taken-up`, and the registry of orchestrators produced from them shows it; neither session writes a
row for it.
