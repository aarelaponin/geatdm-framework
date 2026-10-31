# The measures of the orchestration — produced by ledger.py views from the ledger; do not hand-edit

Per code and per ISO week, from the ledger's entries alone (section 9 of the procedure). Work closed is counted in the week of the entry that closes it, a review counted with its work; accepted at the first version and second attempts are of that work; withdrawn counts each closed entry of a work withdrawn; stalled counts each started entry, of work or review, that stood longer than the setting ledger.stalled_hours (3 h) before the finished or the closed entry of its version, in the week of that entry; a task still running is not counted here. Gaps by kind are the counts the reviews finished that week give with --kinds, and blank where none gives them. `ledger.py measures --code <code>` prints the same per task, and the log of guards.

| Code | Week | Work closed | Accepted at the first version | Second attempts | Withdrawn | Stalled | Reviews finished | Gaps by kind |
|---|---|---|---|---|---|---|---|---|
| PLR | 2026-W44 | 23 | 13 of 23 (57 %) | 10 | 4 | 0 | 28 | item 7 · outputs 1 · trace 3 · other 3 (in 8 of 28 reviews) |
