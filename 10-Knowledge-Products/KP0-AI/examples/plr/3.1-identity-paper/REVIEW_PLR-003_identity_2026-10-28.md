---
kind: review
reviews: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-003_identity_2026-10-28.md
of_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-003_identity_2026-10-28.md (PLR-003, version 1)
written_by: a session that neither wrote nor carried out the instruction — a sub-agent started by PLR-003's working session from the review instruction PLR-003-R, with a fresh context
model: claude-opus-5-5 — read from the line of this session's own context that names the model it is configured for
computer: MacBookPro — printed by `hostname`, run after this review's started entry
window: 2026-10-28 17:20:32 UTC to 2026-10-28 17:23 UTC, no pause; opened at the started entry 20261028T172032Z_PLR_started_PLR-003-R.yaml, closed at the last write of this file, read by stat
verdict: not accepted
downstream_artefact: the next version of /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-003_identity_2026-10-28.md
---

# REVIEW — PLR-003, "What identifies a learner?"

Evidence of this review: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-003-R/_evidence/` (cited below by file name in that folder). The report was at its path when the review started.

## 1. The tests of success, one by one

**A1 — met.** `grep -n '^#'` rerun over the paper (`paper_reads.txt`, 17:22:29Z): the head at line 19, A at 108 and B at 144 before the table at 181, the recommendation at 216 with 5.3 "What would change the recommendation" at 251 and 5.4 at 268. The head carries the question, the recommendation and three decisions asked for.

**A2 — met on the reviewer's own reading.** I did not rely on `check_citations.py`. I counted the citations by `grep -o` (`figure_reestablished.txt`): 78, over 31 distinct `<path>:<line>`, which agrees with the report. I then printed each of the 31 lines myself with `sed -n` (`citations_read_by_reviewer.txt`, 17:21:02Z) and read every quotation of the paper against them. **Every line holds what the paper quotes there.** Each of the 31, in brief:
progressa.md:12 ("owns the person identity every sector reuses"), :14 ("registered three times", "none of the lists agree", "proves the child's identity on paper", "follows the child from primary school to university"), :24 ("coordinating but not binding mandate"), :26 ("its own learner numbering", "yet another identifier"), :28 ("four members (PNIA, the business register, the tax authority, PDGA)"), :35 ("learner identity (link to National ID)", "USD 6.5m over 3 years"), :42 (once-only question), :44 ("issues child IDs only at 16; birth registration is at 71%", "MoEYS is not a member", "with different spellings", "within 12 months"), :52, :53, :57, :63, :66 ("API documented"), :73 (DPA row), :76 ("Not yet binding", "coordinates rather than binds"), :78 ("legal identity anchor", "PNIA issues IDs only at 16"); plan :38, :39, :68 (G1, including "A PLR number is issued" and "A child with no birth record is enrolled with the flag"), :69, :70, :71, :81–:82 ("About 29% of" / "the children have no birth registration number, matching Progressa's 71%"), :85, :185 (A and B word for word), :186 ("Waits for PLR-003"), :219; bundle :140; CONSTANTS.md :7 and :13. All hold.

**A3 — met.** The table (paper lines 191–200) has three columns and ten test rows, no cell empty. The instruction's six named tests are T1–T6c. Two are added: T7, the second number and reuse across sectors, and T8, time.

**A4 — met.** 22 matching lines on rerun (`paper_reads.txt`). Line 218 says "This section is a recommendation to the planning unit. It is not a decision". What would change it is 5.3, and the person's decisions are 5.4. My search for decisive wording ("the PLR will", "shall", "is adopted" and the like) matched no line. **The paper decides nothing that is the person's.** Every proposal reads "the planning unit is recommended to…".

**A5 — met.** I ran `round_record.py check` myself with the options the round's `check.out` prints (`round_record.py check --record … --tolerance 2 --evidence …`), writing to my own folder (`round_record_check.out`, 17:21:37Z). It printed `## Findings — 0`. One file was added after the window: `A7_ledger_show_after_finished.txt`, which the report itself announces as written after the finished entry. `WHAT_IS_RUNNING.md` changed after the end list, "by the ledger's own entries". The two PLR-002 files inside the roots are PLR-002's own outputs, as the report says.

**A6 — met.** Placement: `placement check: clean`, EXIT=0 (`placement.txt`). Trace: `outputs: 3 of 3 named exist`, `inputs: 5 of 5 pinned … hash the same now`, `trace check: clean`, EXIT=0 (`trace.txt`).

**A7 — met.** `ledger.py show --code PLR --id PLR-003` (`ledger_show.txt`) prints two `issued` entries (17:03:35Z, then 17:05:08Z), `started` 20261028T171016Z and `finished` 20261028T171959Z, all at version 1.

**Section 3 of the instruction: "A fact counted against one position is counted against every position it touches." Not met.** The analysis page lists four checks for a review. I ran the third, reading the position table test by test and looking up every fact a verdict rests on in the other position's cells. Most facts are counted both ways. The paper's own cross-check table (lines 203–211) is honest on 71%, the legal basis, spelling variants and the second number. Two facts are not counted both ways: G1 and G2 in section 7.

**Each position stated at its strongest before the table — met.** A's six-point case (lines 108–142) and B's six-point case (lines 144–179) each come from the documents, quoted at their lines, before the table. B's case includes the passages that make it strongest: the country's design (:12), the fragmentation a sector number repeats (:14, :26), once-only (:42, :63), and the second number to keep in step, which the paper marks as reasoning. B is not stated only to be dismissed.

## 2. One figure re-established

The figures are the coverage of birth registration (71%) and the age at which PNIA issues an ID (16). The paper's route quotes `progressa.md:44` and `:78`. The round's own `check_citations.py` checked those quotations.

My route was different. I searched the whole of `progressa.md` for every line naming birth, "71" or a "16" (`figure_reestablished.txt`):
- 71% appears on one line only, :44 ("birth registration is at 71%").
- The age of 16 appears at :44 ("issues child IDs only at 16") and :78 ("PNIA issues IDs only at 16"). The other "16" matches are the population of 16.8 million (:18, :24, :60).
- The plan repeats both at :39, and 29% at :81–:82.

In the paper, every one of the 23 occurrences of 71%, 29% and 16 is the same figure. No variant appears. **The figures agree.** The paper's note that :44 does not say which population 71% covers is correct.

## 3. The outputs exist

`ls -ld` and `shasum` run at 17:22:29Z (`paper_reads.txt`):

| Output | Found |
|---|---|
| the paper | 28472 bytes, sha256 `1be2ee52…ea1c86`, as declared |
| `_working/PLR-003/` | found: check_citations.py, check_table.py, `_evidence/` with 9 files, `_record/` |
| the report | 15594 bytes. The listing in the report gives 11106; the report says it grew after that listing (its section 7). |

## 4. The running application

Not applicable. This round built no application. It wrote an analysis paper.

## 5. What a review of this kind runs, from the page of the kind

The page is `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_kinds/analysis.md`, part 2. Each of its four checks was run:

- **Every citation read at its path and line, by the reviewer.** Run, with `sed -n` over 31 lines (`citations_read_by_reviewer.txt`). All hold (section 1, A2).
- **Each set a test names, listed again from its source and compared.** Run. The six tests the instruction names are all in the table. Goals G1–G3 (plan :68–:70) are all reached, in T6a–T6c.
- **The table read test by test.** Run. Two asymmetries were found: G1 and G2.
- **One figure worked out again.** Run (section 2).

Part 1 of the page is read against the paper. G1 and G2 break item 2 ("a fact counted against one and not the other"). G2 also breaks item 5 ("a paper that contradicts itself").

## 6. The four mechanical checks, run by the reviewer

All were run with `/usr/local/bin/python3.11` at 17:21:37Z. Their logs are in the evidence folder.

- `trace_check.py` → `trace check: clean`, EXIT=0 (`trace.txt`).
- `placement_check.py` → `placement check: clean`, EXIT=0 (`placement.txt`).
- `round_record.py check` → `## Findings — 0`, EXIT=0 (`round_record_check.txt`, `round_record_check.out`).
- `ledger.py show` → `issued` ×2, `started` and `finished` for version 1, EXIT=0 (`ledger_show.txt`).
- `ledger.py check` → EXIT=1 with one defect that does not name PLR-003: `not-cut-over: PLR — the taken-up entry names …/WHAT_IS_RUNNING.md, which carries no markers` (`ledger_check.txt`). It is the estate's defect, not this round's.

**Accounts.** The `issued` entries, `started` and `finished` all read `account: (account removed)`. That is the same as the account line in the report's declaration. The `started` entry carries `effort: unknown` and `started_by: unknown`, which agrees with the report.

**Git** (`git.txt`): `?? 10-Knowledge-Products/KP0-AI/plr-prototype/`, so the whole project folder is untracked. The last commit is `12956981…` of 2026-10-26. **The round committed nothing.**

## 7. The verdict, and what follows from it

**Not accepted — two gaps, G1 and G2.** Both fail the instruction's section 3 ("A fact counted against one position is counted against every position it touches") and its section 7, second bullet. A1 to A7 are all met. The citations hold, and the paper decides nothing that is the person's. What is missing is the symmetry the instruction makes the point of the table. One of the two asymmetries also reaches the recommendation's ground (5.2).

**G1 (item) — "the simulation shows a body doing what it has not agreed to" is counted against B only (T6a).**
- B's cell in T6a (paper line 196) reads: "the simulation would show PNIA issuing children's numbers it does not issue, before PNIA has agreed".
- A's G1, as the paper itself says in T6a ("G1 as the plan writes it"), simulates two bodies the same way:
  - Civil Registration answering across Linkup, though it is not a member. Source `progressa.md:28`: "four members (PNIA, the business register, the tax authority, PDGA)". The plan :68 says "the birth record is looked up at Civil Registration across Linkup".
  - MoEYS reading across Linkup. Source `progressa.md:44`: "Linkup exists but MoEYS is not a member".
- A's T6a cell does not count this, and the cross-check table (lines 203–211) has no row for it.

This breaks the analysis page, part 1, item 2.

**G2 (item) — the dependency on a body MoEYS cannot oblige is counted against B in T8 and in the ground, and not against A. The cross-check table says it is counted against A in T8 when the cell does not hold it.**
- T3's A cell (line 193) concedes that A's G1 needs the Civil Registration Department, "decided under the Ministry of Interior" (`progressa.md:53`), to answer across Linkup.
- A's T8 cell (line 200) says only "Within MoEYS's own authority; the date turns on MoEYS joining Linkup and on the legal basis of T1". It does not name Civil Registration (`paper_reads.txt`: count 0).
- Yet the cross-check row "MoEYS not a Linkup member; Civil Registration not a member" (line 208) claims to count it against A in "T3, T8".
- The recommendation's ground (5.2, third bullet) counts "a change … that MoEYS cannot decide and that no body in the documents can oblige (T3)" against B alone.

What neutralises A's own such dependency is one sentence in T3: "Without it, A still works: the clerk keys the birth registration number from the paper record". It carries no citation and is not marked *reasoning, not in the documents*, although the paper's head says such reasoning is always marked (lines 13–15). It also departs from G1 as the plan writes it (plan :68), without saying so.

This breaks the analysis page, part 1, items 2 and 5.

For the next version: put A's Civil-Registration dependency, and the simulation of bodies that have not agreed, in every cell they touch. Make the cross-check table agree with its cells. Mark or cite the paper-keying fallback, and say whether it departs from G1. Then say whether the ground of 5.2 still stands as written.

**Not on the page of the kind:** neither gap. Both are instances of item 2, which the page already carries.

## 8. Found, not fixed

- `ledger.py check` reports the PLR estate's record as not cut over (`ledger_check.txt`). This belongs to the orchestrator.
- The report's `outputs` line and section 7 give the report at 11106 bytes. It is now 15594. The report says why: sections written after the listing.
- The model of this review is claude-opus-5-5, the band the review instruction names (Opus). Effort is recorded as `unknown`, because my prompt does not show the level.
- The difference in the ministry's name (CONSTANTS "Sports" against progressa.md:12 "Skills") is confirmed at both lines. The report already raises it.
