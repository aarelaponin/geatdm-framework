---
kind: report
answers: PLR-016
upstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_prompts/PROMPT_PLR-016_cross-list-learners_2026-10-30.md
downstream_artefact: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_reviews/REVIEW_PLR-016_cross-list-learners_2026-10-30.md
written_by: a working session, separate from the session that wrote the instruction
account: (account removed) — read from the line of this session's own context that begins "The user's email address is"
started_by: unknown — read from this session's own prompt, the start message delivered by a scheduled task, which shows neither the owner typing it nor a session starting this one
model: claude-opus-5-5 — read from the line of this session's own context that names the model it is configured for; the instruction names Sonnet (section 5)
computer: MacBookPro — printed by `hostname`, command and output in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/hostname.txt
window: 2026-10-30 18:56:08 UTC to 2026-10-30 19:01:56 UTC, no pause; closed at the last write of the 31 files the round names as written, REPORT_PLR-016_cross-list-learners_2026-10-30.md, read by stat; printed by round_record.py window, its command and output kept in /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_record/window.out
record: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_record — kept by round_record.py; RECORD.txt lists what the round's four Python runs (stage1.py, counts.py three times) read and changed; the three `npx tsx` runs of catch.ts, the Playwright run and the shell commands are not Python and were kept by hand in _evidence/; check.out is the last run of its check, result in words under A7
outputs: /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/ (the folder, files listed in section 7) · this file
ledger: PLR PLR-016 — the started entry is 20261030T185446Z_PLR_started_PLR-016.yaml; the finished entry follows this report and names this file
---

# ACCOUNT — How many learners appear on more than one list, and how many does the prototype catch?

**Answers:** `PROMPT_PLR-016_cross-list-learners_2026-10-30.md` (`PLR-016`) · **Run on:** MacBookPro, zsh through Desktop Commander

## 1. The answer first

**40 learners** of the fixtures stand on more than one source list (22 on two lists, 18 on three; 98 list entries between them), and 20 of them carry one entry spelt differently. The prototype's search, `findLearners` of `src/store/store.ts` on a store filled from the fixtures (300 learners on opening), **catches 20 of the 40 from every one of their entries**: each of their 78 entries returns exactly the learner's PLR number. **It does not catch the other 20**, and those are exactly the 20 with a spelling variant: each variant entry (20 entries) returns nothing, because the store's search asks for "the same family name, given names and date of birth, letters compared without regard to case", and a variant spells the family name otherwise; every one of those 20 learners' other entries is found. No entry returned a wrong or second learner. The figure is not V1's `duplicates-caught`, which counts enrolments that ended in `found-on-plr` and stands at 0 after a reset; this figure is how many of the 40 the search step would find from whichever list the child is enrolled from. On the production build the screen agreed for both entries tried: GP-037 (PLR-000007) reached `found-on-plr`, "already on the PLR as PLR-000007"; the variant SC-021 (PLR-000020) stayed at `searching`, "No learner on the PLR has this family name, given names and date of birth." The count was shown to fail: one found entry's given names altered in memory moved the caught count from 20 to 19 and that learner out of it. The fixture files' checksums were the same before Stage 1 and after Stage 4.

## 2. The criteria, one by one

**A1 — Stage 1's set and counts, both ways. Met.** Command: `round_record.py run … python3 _working/PLR-016/stage1.py`, 2026-10-30 18:56:23 UTC; log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/stage1_run.txt`; the set, member by member, in `stage1_set.json` and `stage1_set.tsv` beside it. `fixtures-truth.json` sha256 `bfa24b8a501372956996b1b8cbbeeccecf983be997019c078b89e99e3b95eb74`, `fixtures.json` sha256 `71a1ba3e66ec075fde48f792b0e6e779ecd92ca67ab6c04b49991a225a189574`.

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/stage1_run.txt
  "on more than one list": 40,
  "on two lists": 22,
  "on three lists": 18,
  "with a spelling variant": 20,
  "list entries of the set": 98,
```

The other way: every entry of the three lists of `fixtures.json` set against the key's entries, by (list, entry id). Both totals 358 (school census 120, PNEA's candidates 119, grant programme 119, on each side); in the key and not the lists: none; in the lists and not the key: none; no entry repeated on either side; no variant entry outside the set of 40; no learner with two entries on one list.

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/stage1_run.txt
  "entries in the key": 358,
  "entries in the lists of fixtures.json": 358,
```

Against the settings of `docs/groundwork.md` (read by the program from the table `settings`): `fixture.cross_list_duplicates` 40, counted 40, equal; `fixture.spelling_variants` 20, counted 20, equal.

**A2 — `catch.csv` and the counts from it. Met.** Command, from the project root: `npx tsx _working/PLR-016/catch.ts`, 18:56:49 to 18:56:51 UTC, log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/catch_run.txt`. The program opens `Store.open('plr-016', new IDBFactory())` (fake-indexeddb, as `store.test.ts` does), which fills the empty store from the fixtures through `reset()` — 300 learners on opening — and calls `findLearners` with each entry's family name, given names and date of birth as `fixtures.json` lists them. It takes the entry-to-learner pairing from the key; the matching is the store's alone. `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/catch.csv` has 98 rows (99 lines with its header, by `wc -l`) against the 98 entries of Stage 1. The counts were computed from the CSV by `round_record.py run … python3 _working/PLR-016/counts.py _working/PLR-016/_evidence/catch.csv`, log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/catch_counts.txt`:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/catch_counts.txt
rows 98
entries by result {'found': 78, 'missed': 20}
learners 40
caught 20 not caught 20
not caught with a variant 20
caught with a variant 0
entries by (variant, result) {('false', 'found'): 78, ('true', 'missed'): 20}
learners by (lists, caught) {('2', True): 14, ('2', False): 8, ('3', True): 6, ('3', False): 12}
```

One line per learner of the set (40 lines against the 40 of Stage 1), in the key's order:

| # | learner | lists | each entry: the search's result | learner |
|---|---|---|---|---|
| 1 | PLR-000007 | 2 | school-census SC-106: found · grant-programme GP-037: found | caught |
| 2 | PLR-000020 | 2 | school-census SC-021 (variant): missed · grant-programme GP-012: found | not caught |
| 3 | PLR-000023 | 3 | school-census SC-003: found · pnea-candidates PC-116: found · grant-programme GP-101: found | caught |
| 4 | PLR-000033 | 2 | pnea-candidates PC-063: found · grant-programme GP-059: found | caught |
| 5 | PLR-000035 | 2 | pnea-candidates PC-103 (variant): missed · grant-programme GP-027: found | not caught |
| 6 | PLR-000044 | 3 | school-census SC-010: found · pnea-candidates PC-089: found · grant-programme GP-079: found | caught |
| 7 | PLR-000049 | 2 | pnea-candidates PC-007: found · grant-programme GP-077: found | caught |
| 8 | PLR-000056 | 3 | school-census SC-028 (variant): missed · pnea-candidates PC-111: found · grant-programme GP-072: found | not caught |
| 9 | PLR-000057 | 3 | school-census SC-019: found · pnea-candidates PC-047: found · grant-programme GP-063: found | caught |
| 10 | PLR-000060 | 3 | school-census SC-033: found · pnea-candidates PC-029: found · grant-programme GP-016 (variant): missed | not caught |
| 11 | PLR-000061 | 2 | school-census SC-046: found · grant-programme GP-069: found | caught |
| 12 | PLR-000092 | 2 | pnea-candidates PC-062 (variant): missed · grant-programme GP-102: found | not caught |
| 13 | PLR-000095 | 3 | school-census SC-018: found · pnea-candidates PC-100: found · grant-programme GP-020 (variant): missed | not caught |
| 14 | PLR-000100 | 2 | pnea-candidates PC-080: found · grant-programme GP-024: found | caught |
| 15 | PLR-000104 | 2 | pnea-candidates PC-072: found · grant-programme GP-014: found | caught |
| 16 | PLR-000118 | 3 | school-census SC-008: found · pnea-candidates PC-104: found · grant-programme GP-011 (variant): missed | not caught |
| 17 | PLR-000123 | 2 | school-census SC-054: found · grant-programme GP-035: found | caught |
| 18 | PLR-000134 | 2 | school-census SC-056: found · pnea-candidates PC-006 (variant): missed | not caught |
| 19 | PLR-000136 | 3 | school-census SC-093 (variant): missed · pnea-candidates PC-092: found · grant-programme GP-026: found | not caught |
| 20 | PLR-000137 | 3 | school-census SC-035 (variant): missed · pnea-candidates PC-079: found · grant-programme GP-054: found | not caught |
| 21 | PLR-000141 | 2 | pnea-candidates PC-091: found · grant-programme GP-085: found | caught |
| 22 | PLR-000143 | 2 | school-census SC-112: found · grant-programme GP-086: found | caught |
| 23 | PLR-000145 | 2 | school-census SC-020: found · grant-programme GP-113 (variant): missed | not caught |
| 24 | PLR-000166 | 2 | school-census SC-034: found · pnea-candidates PC-020: found | caught |
| 25 | PLR-000176 | 3 | school-census SC-118 (variant): missed · pnea-candidates PC-009: found · grant-programme GP-030: found | not caught |
| 26 | PLR-000177 | 2 | school-census SC-059: found · pnea-candidates PC-002: found | caught |
| 27 | PLR-000191 | 3 | school-census SC-081: found · pnea-candidates PC-088: found · grant-programme GP-106: found | caught |
| 28 | PLR-000197 | 2 | pnea-candidates PC-087 (variant): missed · grant-programme GP-083: found | not caught |
| 29 | PLR-000204 | 3 | school-census SC-099: found · pnea-candidates PC-043: found · grant-programme GP-104 (variant): missed | not caught |
| 30 | PLR-000206 | 3 | school-census SC-108: found · pnea-candidates PC-090 (variant): missed · grant-programme GP-111: found | not caught |
| 31 | PLR-000211 | 2 | pnea-candidates PC-076: found · grant-programme GP-109: found | caught |
| 32 | PLR-000218 | 2 | school-census SC-070: found · pnea-candidates PC-014: found | caught |
| 33 | PLR-000223 | 3 | school-census SC-031 (variant): missed · pnea-candidates PC-067: found · grant-programme GP-038: found | not caught |
| 34 | PLR-000225 | 3 | school-census SC-041: found · pnea-candidates PC-004: found · grant-programme GP-039 (variant): missed | not caught |
| 35 | PLR-000241 | 3 | school-census SC-060: found · pnea-candidates PC-060: found · grant-programme GP-013: found | caught |
| 36 | PLR-000246 | 3 | school-census SC-039: found · pnea-candidates PC-101: found · grant-programme GP-049 (variant): missed | not caught |
| 37 | PLR-000247 | 2 | school-census SC-005: found · grant-programme GP-094 (variant): missed | not caught |
| 38 | PLR-000252 | 2 | school-census SC-078: found · grant-programme GP-084 (variant): missed | not caught |
| 39 | PLR-000264 | 3 | school-census SC-022: found · pnea-candidates PC-041: found · grant-programme GP-055: found | caught |
| 40 | PLR-000278 | 2 | school-census SC-079: found · grant-programme GP-075: found | caught |

Beyond the set, the same program with `--all` ran every one of the 358 list entries through the search (`_evidence/catch_all_run.txt`, `_evidence/catch_all_358.csv`): 338 found, 20 missed (the same 20 variant entries), 0 wrong; the 260 learners on one list are each found from their one entry.

**A3 — the planted fault. Met.** Command: `npx tsx _working/PLR-016/catch.ts --plant grant-programme:GP-037 --out _working/PLR-016/_evidence/catch_planted.csv`, 18:57:25 UTC; the argument appends `x` to that entry's given names in memory, no file of `src/` touched. Log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/planted_run.txt`:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/planted_run.txt
caught 19 not caught 21
PLR-000007,2,school-census,SC-106,false,Plozukzuk,Quanuxyor,2016-12-20,PLR-000007,found,not-caught
PLR-000007,2,grant-programme,GP-037,false,Plozukzuk,Quanuxyorx,2016-12-20,,missed,not-caught
```

GP-037 moved from found to missed, PLR-000007 from caught to not caught, the caught count from 20 to 19; its other entry SC-106 still found, so the learner is not counted caught from one entry while another missed.

**A4 — Stage 4 at the production build. Met.** Command, from the project root: `PW_DISABLE_TS_ESM=1 npx tsx node_modules/@playwright/test/cli.js test --config _working/PLR-016/plr016.config.ts`, 18:58:08 to 18:58:20 UTC (the project's configuration with `testDir` `_working/PLR-016`, `outputDir` `_working/PLR-016/playwright`, `cwd` the root: `npm run build`, then `vite preview` on 4174, headless). Port 4174 was free before and after (`lsof` exit 1 both times) and no `vite preview` or Playwright process remained. Log `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/stage4_run.txt`:

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/stage4_run.txt
  2 passed (9.9s)
exit=0
```

Each test resets through the training panel (`reset` of `e2e/g1/g1.ts`), reads the three switches off on the panel (recorded), starts G1 with the entry's three fields and the learner's grade, and keeps what the screen shows in `stage4_<case>.json` and a full-page screenshot beside it.

| entry | Stage 2 | the screen: state, message | screenshot | agrees |
|---|---|---|---|---|
| grant-programme GP-037, PLR-000007 | found | `found-on-plr`; "The child is already on the PLR as PLR-000007: the existing record is returned and no record is created." | `_evidence/stage4_found_GP-037.png` | yes |
| school-census SC-021 (variant), PLR-000020 | missed | `searching`; "No learner on the PLR has this family name, given names and date of birth."; the consent CR-LOOKUP asked next | `_evidence/stage4_missed_SC-021.png` | yes |

**A5 — the figures. Met.** In the first paragraph above.

**A6 — what changed, and the fixtures' checksums. Met, with one line read.** `RECORD.txt` section 1 names three files: `_working/PLR-016/_evidence/stage1_set.json` and `stage1_set.tsv`, the round's, and `WHAT_IS_RUNNING.md`, which the program marks "moved by the ledger's own entries; not a file to pin" — the round wrote no row there; the change at 18:56:08 UTC is the ledger's rebuild of its produced blocks, not a write of this round. `_working/*`, `dist/*` and `node_modules/*` were excluded from the record as the instruction says, so what Playwright and the shell wrote under `_working/PLR-016/` is listed in section 7. The build rewrote `dist/` and `src/generated/` (the two fixture files' modification time moved from 20:49 to 20:58 local); their contents are the same before Stage 1 and after Stage 4, logs `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/generated_sha256_before.txt` and `generated_sha256_after.txt`, compared in `generated_sha256_compare.txt` (`diff_exit=0`):

| file | sha256 before (18:55:55 UTC) and after (18:58:46 UTC) | bytes |
|---|---|---|
| `src/generated/fixtures.json` | `71a1ba3e66ec075fde48f792b0e6e779ecd92ca67ab6c04b49991a225a189574` | 415179 |
| `src/generated/fixtures-truth.json` | `bfa24b8a501372956996b1b8cbbeeccecf983be997019c078b89e99e3b95eb74` | 131986 |

**A7 — the record's check.** Command: `round_record.py check --record _working/PLR-016/_record --report <this file>`, run as the round's last act before its `finished` entry, after the `window` line was written; output in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_record/check.out`. Its result cannot be stated in a file it reads without changing that file after the check; it is printed in that file and read by the review. At `end` (18:58:47 UTC, `_evidence/round_record_end.txt`) the record's own findings were `## 4. Findings — 0`.

**A8 — placement and trace. Met.** Logs `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/placement_check.txt` and `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/trace_check.txt`, 19:00:29 to 19:00:30 UTC. Both exit 0; the trace check's inputs 10 of 10 hash as when the instruction was issued.

```quote /Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/trace_check.txt
trace check: clean
```

**A9 — the ledger. Not claimable inside this report.** The `finished` entry follows this report; `ledger.py show` is run after it into `_working/PLR-016/_evidence/ledger_show_after.txt`, with the report's `stat` beside it.

## 3. Found, not fixed

- No defect in the store's search was found: it does what its README says. Whether it *should* catch a spelling variant is the owner's question (the instruction, section 8), and the figure is left as it stands.
- The 20 variant learners are not caught at G1's step 2; whether a later step (4a, the birth registration number from Civil Registration) would bring some of them to `found-on-plr` was not asked and not run. Candidate instruction, if the note to the Permanent Secretary wants the figure for the whole of G1 rather than its search.

## 4. What I could not establish

- Nothing of the five stages. Stage 4 tried two entries, as instructed; the other 96 rest on the store's search outside the browser.
- **A second `started` entry for PLR-016 stands in the ledger**, `20261030T185608Z_PLR_started_PLR-016.yaml`, written 2026-10-30 18:56:08 UTC, 82 seconds after this round's own (`20261030T185446Z_PLR_started_PLR-016.yaml`), with the same session name, account, `effort unknown` and `started_by unknown`. This round did not write it (its one `started` command is in its transcript, exit 0, printing the 185446Z name). Another session, most likely a second firing of the same scheduled task, wrote it. No file under `_working/PLR-016/` or the report was written by anything but this round, by the listing of 19:01 UTC: `start.json` is this round's (18:55:55 UTC), and every file the `window` line counts is one this round wrote. `round_record.py window` opens this round's window at that second entry, not at this round's own, because it takes the latest `started`; the window's true opening is 18:54:46 UTC. Whether that other session stopped on reading the Open block, or is still running, I could not establish. The orchestrator settles which `started` entry stands.

## 5. Corrections to the instruction

- The session runs on `claude-opus-5-5`, not the Sonnet the instruction names.
- `ledger.py started` was given `--effort unknown` and `--started-by unknown`: a scheduled task's start shows neither.
- `_working/PLR-016/_evidence/` was created and `hostname.txt` written about one second before `round_record.py start`, which the instruction puts before the first write; both are inside `_working/`, which the record excludes.
- The `effort` line speaks of "358 list entries, every one run through the search"; Stage 2 and A2 ask for the entries of the 40 learners (98). Both were run: `catch.csv` holds the 98, `catch_all_358.csv` the 358.

## 6. What this round did not finish

Nothing of the task. The review is started after the `finished` entry.

## 7. The outputs, by path

The places the round wrote in: `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/` (`stage1.py`, `catch.ts`, `counts.py`, `plr016.config.ts`, `g1-search.spec.ts`, `_evidence/`, `_record/`, `playwright/`), `dist/` and `src/generated/`, which `npm run build` rewrote, and this report. Listings by `ls -ld` taken at 18:58:59 UTC, 12 paths, 12 `exit=0` lines, with sizes and sha256 of the round's programs, `catch.csv`, `stage1_set.json` and the two screenshots, in `/Users/arnelaponin/Documents/Dev/geatdm-framework/10-Knowledge-Products/KP0-AI/plr-prototype/_working/PLR-016/_evidence/outputs_listing.txt`. The report's own listing is taken after its last write into `_evidence/report_stat.txt`.

| file | bytes | sha256 |
|---|---|---|
| `stage1.py` | 5254 | `30f8422e63ffd2794e8f44caaa0e95647467ddd427cd2e09cf6761bc787c7124` |
| `catch.ts` | 3986 | `fc928b88ea07e4a59e13be3b6eb41e45a63e73fd6ff3d2acb1957c954c7b8f9d` |
| `counts.py` | 1224 | `cb9bd3a85850045ed110a203752556799cbab42808df4ab58d6b3d223dc1537e` |
| `plr016.config.ts` | 823 | `83dd63ac2d2c19f49fa98f6b5fa983c3414cc01263772300869471fa24354d61` |
| `g1-search.spec.ts` | 3188 | `1b287fac064206da8b16df5dd80b068af9d7b409f897061bd7bafff1e7e0ce9f` |
| `_evidence/catch.csv` | 9569 | `5a67db367bce64d25bc7c01165a98667b0535b98da6b194b833e59f344ce514a` |
| `_evidence/stage1_set.json` | 15667 | `1b3a5c89f0efc88dcfbec349b8b6d1ba221f8d6fcd480321b82035d808e35afb` |

---

*Nothing follows in this report; the `finished` entry and the start of the review come after it.*
