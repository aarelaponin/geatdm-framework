---
kind: review
reviews: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reports/REPORT_PLR-018_note-to-the-permanent-secretary_v2_2026-10-30.md
of_instruction: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-018_note-to-the-permanent-secretary_2026-10-30.md (PLR-018, version 2)
written_by: a session that neither wrote nor carried out the instruction, at either version, and did not write the review of version 1; started as a sub-agent with an empty memory from the review instruction PLR-018-R, version 2
model: claude-opus-5-5 — read from the line of this session's own context that names the model it is configured for; the review instruction names Opus
computer: MacBookPro — printed by `hostname` on the computer the session's shell reaches, right after the started entry
window: 2026-10-30 19:50:52 UTC (the started entry 20261030T195052Z_PLR_started_PLR-018-R.yaml) to 2026-10-30 20:03 UTC, no pause; closed at the moment of writing
verdict: not accepted
downstream_artefact: the instruction's next version, /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-018_note-to-the-permanent-secretary_2026-10-30.md, or its re-scoping (section 7)
---

# REVIEW — PLR-018, version 2: the note to the Permanent Secretary

Evidence of this review: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-018-R/v2/_evidence/` (below, `E/`). My own trace, sentence by sentence and limit by limit, written from the note and the accepted documents before the round's `claims.md`, `mapping.md`, its report or version 1's review were opened: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-018-R/v2/trace.md`.

**Verdict: not accepted.** The note is one page: 496 words. It carries the constants' sentence and the banner once each and names no path, instruction, tool or model. All 26 of its lines, from the title to the last sentence, are carried by accepted documents (trace.md, S1 to S26). Every figure holds at its source: 7 refused, 6 received, on two learners; 40 children, 20 caught, 20 not caught. Version 1's three gaps are closed. But the instruction's section 11, G2, and item 8 of the page of the kind both say every limit the record names goes either in the note or in the report's list. Two limits are in neither. Both come from the paper the sweep names, and the first also from the plan's section 2:
- the simulation shows the Ministry reading across Linkup, though it is not a member;
- a child with no birth record can be matched only by names and dates, so the second route the note describes cannot reach a misspelt child of that kind.

One gap, G1 (item).

## 1. The tests of success, one by one

- **A1, the claims table written first. Not met in full.** `_working/PLR-018/v2/claims.md` has groups O, S, N and A. Every row has a source and a line, and every item section 3 names maps to rows. I checked the order of writing by `stat` (E/outputs_and_changes.txt): `claims.md` 21:45:31+0200, the note 21:45:53+0200 (the record's 19:45:53.295Z). The table came first, as section 11 asks. The table's list of limits left out is incomplete (G1).
- **A2, at most 500 words, every sentence mapped. Met.** `wc -w` gives 496 (E/page_checks.txt). Every sentence maps to a row in `mapping.md`, and my own trace finds an accepted source for each one. No sentence says more than the record carries.
- **A3, the register's check, every line dealt with. Met.** I ran it myself:
  - The self-test passes: `cases: 10, failed: 0` (E/register_selftest.txt).
  - On the note alone it gives `refused: 5 (list 1: 5, list 2: 0, list 3: 0, list 4: 0)`, exit 1 (E/register_check.txt).
  - With the round's exceptions file it gives `refused: 0 … excepted by name: 5`, exit 0 (E/register_check_with_exceptions.txt).
- **A4, the constants' sentence and the banner once each; no path, instruction number, tool or model. Met.**
  - The constants' sentence appears once and the banner's words once (E/page_checks.txt).
  - My grep for a slash, a file extension, PLR, PNIA, PNEA, MoEYS, a goal code, a year, a model or tool name, "ledger", "instruction", "round", "review" and "CONSTANTS" prints nothing: `grep_exit=1`.
  - The only capital tokens are «ID» three times and «KP4» once. The only numbers are 20 (three times) and 40.
  - No real name or number appears.
- **A5, the record names nothing outside the outputs. Met.**
  - `RECORD.txt` section 1 lists one file, the note: 3010 bytes to 3066.
  - By another route, `find` over the project for files newer than the round's started entry (19:36:47Z), outside `node_modules`, `dist` and `_working`, finds three files. Two are the round's: the note (21:45:53) and the report (21:49:52). The third is `WHAT_IS_RUNNING.md` at 21:50:52, rebuilt by the ledger at this review's own started entry.
  - Under `_working/`, nothing newer lies outside `PLR-018/v2/` and this review's folder (E/outputs_and_changes.txt).
- **A6, `round_record.py check` → no finding. Met.** Run by me (section 6): `## Findings — 0`.
- **A7, placement and trace pass. Met.** Section 6.
- **A8, the ledger. Met.** `show` prints the `started` entry of version 2 (19:36:47Z) and its `finished` entry (19:50:19Z). By `stat`, the report's last write at 19:49:52Z comes before the `finished` entry.
- **A9, every sentence changed under G1's rule and every limit left out, each with a reason and a source. Not met in full.**
  - The changes are listed: 8 rows plus one added sentence, which I counted in the report's section 3 table. Each one reads correctly against its source.
  - The list of limits has 16 rows, L1 to L16 (counted). Two limits the record names are missing from it (G1).
- **A10, every line the register's check prints fixed, or named with a reason that holds at its source. Met.** I read each source (E/sources_and_omission.txt):
  - «Skills» is in the ministry's name at `gitbook/start-here/progressa.md:12`, under ruling PLR-D06 (CONSTANTS.md:5).
  - «Commission» is the Data Protection Commission, at progressa.md:55 and :73.
  - «KP4», «sessions» and «Orchestrator» come from the constants' sentence (CONSTANTS.md:44), which the instruction's section 11 makes the named exception.
  - Version 1's three «PNIA» lines are fixed, not excepted: the note now says "the National ID Authority", as progressa.md:12 and :26 give the name.
- **The review instruction's own tests:**
  - *The trace by my own reading:* trace.md. No sentence is carried by no source.
  - *What the note leaves out:* trace.md, the second table. The two limits of G1 are missing.
  - *The register by my own reading* against `READERS-REGISTER.md`:
    - Rule 1: the answer comes first, in British spelling ("recognise" no longer appears; no American spelling is refused).
    - Rule 2: no idiom.
    - Rule 3: the only apparatus is the constants' sentence.
    - Rule 4: results are given in the present tense ("on two learners", "it finds 20"), which a note on what a prototype shows cannot avoid.
    - Rule 6: the 500-word band is met.
  - *The page:* met, as A2 and A4 show.
  - *Nothing written outside the outputs:* met, as A5 shows.

## 2. Figures re-established, by a route the report did not use

- **Words and sentences.**
  - *The report's route:* `wc -w` gives 496 and `mapping.md` gives 22 sentences.
  - *My route:* Python's `str.split` gives 496, and a split of the body at full stops before a capital gives 22 (E/page_checks.txt).
  - **They agree.**
- **The register's refusals.**
  - *The report's figure:* 5, all in list 1.
  - *My route:* my own run gives the same 5, with the same patterns on the same lines.
  - **They agree.**
- **The figures in the note, read at their sources.**
  - 7 and 6: REPORT_PLR-015 s1 and its A3 table, and REVIEW_PLR-015 s2 (PLR-000003 and PLR-000006, switches off and on).
  - 40, 20 and 20: REPORT_PLR-016 s1 and its A2 counts (`caught 20 not caught 20`, `not caught with a variant 20`), and REVIEW_PLR-016 s2, which re-established them.
  - That no learner holds a national number: I counted it from `src/generated/fixtures.json`, `national_number held: 0` of 300 (E/count20.txt).
  - **All hold.**
- **A figure on the second route, worked out from the fixtures by me.**
  - Of the 20 children the search misses, 5 hold no birth registration number in `fixtures.json`: PLR-000035, -000056, -000092, -000145 and -000223 (E/count20.txt, with the program `_working/PLR-018-R/v2/count20.py` run with `-I`).
  - G1's 4a needs Civil Registration to return a number that a learner holds. By its own condition it cannot catch those 5.
  - This figure is mine, not the record's. The note could carry it only once a check had established it (section 8). But it shows the limit of G1 (b) is not academic.
- **Times the report gives in its own words, read at their source.**
  - The window opens at the started entry, 19:36:47Z, and closes at the report's last write, 19:49:52Z by `stat`, which equals `window.out`.
  - The claims table was written at 19:45:31Z and the note at 19:45:53Z, both by my `stat`.
  - The `finished` entry is at 19:50:19Z.
  - **All hold.**

## 3. The outputs exist

Taken by `stat` and `shasum -a 256` at 19:59:52 UTC (E/outputs_and_changes.txt). Each matches the report's `outputs` line:

| Output | Bytes | sha256 |
|---|---|---|
| the note | 3066 | `559d7d33…` |
| `claims.md` | 17882 | `0fec9c2c…` |
| `mapping.md` | 4837 | `ab523a4c…` |
| `register_exceptions.txt` | 1055 | `2c61d431…` |

The folders `_evidence/` (13 files) and `_record/` exist, and the report is 25734 bytes. `round_record.py check` reads each output "as declared". **All found.**

## 4. The running application

Not applicable. The round wrote a document, not an application model, and ran nothing of the application.

## 5. What a review of this kind runs (`_kinds/drafting.md`, part 2)

- **The programs of the skill:** the instruction names no skill (its read-first item 3). The one program is the register's check, and it was **run** (A3).
- **Identifiers resolved against the register and the use case model:** not applicable. The note carries no identifier.
- **The groundwork's tables parsed again:** not applicable.
- **`readers_register_check.py`:** **run**, with its self-test first (A3).
- **Part 1 read against the note and the report:**
  - Item 2, a statement the upstream does not carry: not shown.
  - Item 6, the register: kept.
  - Item 8, the limits:
    - *a limit of one step stated of that step*: kept. The search's limit is stated of the search, and 4a is not shown for the 20.
    - *the claims table written before the document*: kept, by `stat`.
    - *every limit an accepted document names, either in the document or in the list*: broken (G1).

## 6. The four mechanical checks, run by the reviewer

| Check | Exit | The line that decides | Log |
|---|---|---|---|
| `trace_check.py` on the v2 report, with both constants | 0 | `trace check: clean`; `outputs: 3 of 3 named exist`; `inputs: 17 of 17 pinned by 20261030T193312Z_PLR_issued_PLR-018.yaml hash the same now` | E/trace_check.txt |
| `placement_check.py` on the instruction | 0 | `placement check: clean` | E/placement_check.txt |
| `round_record.py check --record …/_working/PLR-018/v2/_record --report <v2 report> --tolerance 2` (the options `check.out` prints on its `# run with:` line, its `--out` sent to E/), with 3.11.14 and `-B` | 0 | `## Findings — 0`; `files changed after the end list inside the window: 0`; 5 quoted blocks found; the round's `check.out` unchanged (sha256 the same before and after) | E/round_record_check.txt, E/round_record_check.out |
| `ledger.py show --code PLR --id PLR-018` | 0 | version 1: `issued` 19:08:53Z, `started` 19:11:55Z, `finished` 19:21:08Z; version 2: `issued` 19:33:12Z, `started` 19:36:47Z, `finished` 19:50:19Z | E/ledger_show.txt |
| `ledger.py check` | 0 | `check: clean`, no line naming PLR-018 | E/ledger_check.txt |

**Accounts.** The `issued`, `started` and `finished` entries of version 2 each carry `account: (account removed)`. The report's declaration names the same address.

## 7. The verdict, and what follows from it

**Not accepted — one gap, G1.** Kinds: item 1.

**G1 (item): two limits the record names are neither in the note nor in the report's list of what was left out.** This fails A1 and A9, and the instruction's section 11, G2 ("Then go over the record once more for every limit it names (… the paper, the plan's section 2 …) and make the list complete"). It breaks `_kinds/drafting.md`, part 1, item 8: "Every limit of the thing described that an accepted document names is either in the document or in the report's list of what was left out, with its reason". The page already carries this fault, so it needs no addition.

- **(a) The Ministry reads across Linkup, which it has not joined.**
  - `docs/paper-what-identifies-a-learner.md:219` (T6a, "The prototype — goal G1") says: «the simulation shows two bodies doing what they have not agreed to: the Civil Registration Department answering across Linkup … and MoEYS reading across Linkup, though "MoEYS is not a member"».
  - Paper :216 (T3) says: «**MoEYS** must join Linkup: "Linkup exists but MoEYS is not a member."»
  - The plan, `../KP0_Orchestrate_Demo_App_Plan_v0.1.md:38`, section 2.1, says: «MoEYS reads across Linkup, which it has not yet joined».
  - The note, line 29, carries only the other half: «The birth record look-up depends on the Civil Registration Department answering across Linkup, which the Ministry cannot oblige.» It never says that the Ministry itself is not on Linkup.
  - `grep` over `claims.md`, the report and the note for "member" finds nothing (E/sources_and_omission.txt).
- **(b) A child with no birth record is matched only by names and dates.**
  - Paper :217 (T4) says: «For the children without one, duplicates can be caught only by matching names and dates, and the same child "with different spellings" … is the case that slips.»
  - The note, line 11, describes the second route: «a child it misses is still found if Civil Registration returns a birth registration number a registered learner holds». Line 23 adds: «Whether the birth record look-up finds those 20 is not shown.»
  - The record carries more than "not shown" for the children with no birth record: by G1's own condition for 4a (`docs/G1-enrol-a-learner.md:69`), the look-up cannot catch them.
  - Neither the note nor the list names this limit. The list's L14 takes only the paper's section 6, and the report's sweep reads "the paper's sections 5 and 6", where the instruction names the paper whole.
- **What the next version does.** It carries each limit in the note, or names it in the report's list with a reason that holds. It then applies the rule to the whole of the paper's table (section 4, T1 to T8 and the cross-check) and to the plan's section 2 in full, and reports the count of limits found there that are neither in the note nor in the list. Per item 5 of the page, the next version should not close only the two instances named here.

**What follows.** This is the second version of PLR-018 not accepted. Section 6.4 of the procedure says: "After two such rounds the instruction is withdrawn and the act is re-scoped". Whether to append G1 as a version 3 or to re-scope the act is the orchestrator's decision under that section, not this review's. The note is otherwise close: one gap, of two omissions, with every sentence it does write carried.

**Version 1's gaps, against version 2:**
- **G1 of v1 (a limit of one step stated of the whole): closed.**
  - Line 5 now says «Its search misses…».
  - Line 23 now says «The search matches… it finds 20… misses the other 20».
  - Line 11 states 4a, and line 23 says 4a is not shown for the 20.
  - I found no remaining sentence that turns one step into a claim about the whole. Line 5's «a learner's one record» no longer claims one record for every learner.
- **G2 of v1 (every basis an assumption; the dependence on Civil Registration answering): closed in the note.**
  - Line 27: «Every basis for sharing a learner's or parent's data is the prototype's assumption…».
  - Line 29: the look-up's dependence on Civil Registration answering.
  - The sweep it called for is incomplete, which is this review's G1.
- **G3 of v1 (PNIA named in words): closed.** The note says "the National ID Authority" three times and "the National Examinations Authority" once, as progressa.md:12 names both. The register's five remaining refusals each hold at the source cited (A10).

## 8. Found, not fixed

1. **The second route and the 20, by figure.** My count gives 5 of the 20 missed children with no birth registration number, for whom 4a cannot apply (section 2). No accepted check gives a figure for the other 15: whether Civil Registration, asked under a misspelt family name, returns their record is not run (REPORT_PLR-016 s3, item 2). A candidate instruction already named stands. If the note is to say more than "not shown", that check comes first.
2. **The paper's decision 2 is still unruled** (use-case-model.md:15 records decisions 1, 3 and 4). The note calls it open and puts it to the planning unit, as the paper does. The report names the same point.
3. **The constants' sentence inside Progressa's story.** «built by assistant sessions under the Orchestrator… the way KP4 teaches» speaks from outside the fiction, in a note from one fictional official to another. Section 11 of the instruction settles it as a named exception. The constants are amended only by a ruling, and whether a page set inside the story is a "page that uses the prototype" is the owner's to rule.
4. **No build folder.** The register asks for exceptions in the document's build folder. `_working/PLR-018/v2/register_exceptions.txt` stands in for it, and the report says so.
5. **The ledger's inputs are recorded under `~/IdeaProjects/…`**, where the estate is at `~/Documents/Dev/…`. The trace check resolves them and finds 17 of 17 the same. Not this round's.
6. **This review's own `started` entry** carries `--effort unknown`, because my start, a sub-agent's prompt, does not show the level the review instruction names (high). The model is the band it names.

*Written by a session that did not write PLR-018 or carry it out at either version, and did not write the review of version 1. It changed nothing outside `_working/PLR-018-R/v2/` and this file, and committed or pushed nothing. Whether the note is sent is the owner's decision; this review says nothing about it.*
