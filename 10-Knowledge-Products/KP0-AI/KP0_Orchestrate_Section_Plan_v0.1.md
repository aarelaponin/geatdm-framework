# KP0 — The Orchestrate section: plan v0.1

*Draft, 30 October 2026. It replaces Modules 3–5 of `KP0_Plan_v0.4.md` (section 4) once it is accepted, and changes plan v0.4 sections 5, 7 and 9 as section 9 below says. It is built from four sources: the latest Orchestrator Manual (`Desktop/SDD_Method/The_Orchestrator_Manual.docx`, 21 October), *The SDD Method Explained for a Developer*, the SDD course (its outline, facilitator guide and self-assessment), and the record of the PLR prototype project (`plr-prototype/`). Source marks in this plan: **M** = a section of the Manual, **SDD** = a line of the Method Explained, **F** / **S** = a line of the facilitator guide or self-assessment, **PLR** = a file of the record.*

---

## 1. What the section must do

**The aim.** By the end, a learner has taken one piece of *their own* work through the whole cycle on their own computer: an instruction, the work, an independent review and their decision. They have recorded it in a log, and they have a folder they will keep using. Everything on a page either serves that aim or goes into the sidebar.

**What changed from plan v0.4.** Plan v0.4 gives the Orchestrate section 17 subtopics in three modules, and mirrors the Manual chapter by chapter. The Manual is written for an analyst whose orchestrator is a plugin that keeps a ledger, schedules sessions and checks traces. About half of its content (declarations, checksums, start messages, session names, the seven kinds of log entry, accounts and *move*) is the machinery of that plugin. A learner working by hand never meets any of it. This plan keeps the Manual's rules and leaves its machinery out.

**Three choices follow.**

| Choice | Why |
|---|---|
| **Two modules, eight pages** in place of three modules and 17 | Module 3 of plan v0.4 argued the case and practised nothing. Here the learner works from the first page. The parts of it that matter are steps of the cycle, so they move into the cycle (3.1 and 3.4) |
| **The learner's own case from page 3.1 onward** | This copies the SDD course, where "every module ends with an exercise on one running case, and the exercises add up to one deliverable" (O313). In KP0 the running case is the learner's own piece of work, and PLR is the worked example beside it |
| **A starter folder** of forms, chat prompts, a log and three pages of faults, usable in any assistant | Learners can then do the work on their own computer without the plugin or the prototype (section 5) |

**The theme, in one line, from the record.** *The checker's job is to catch claims that go further than the evidence. Your job is to decide.* Every substantive catch in PLR was of that kind: the identity paper v1, and the note to the Permanent Secretary v1 and v2. SDD says the same in its own words: "A silence that has been filled in with a plausible answer is a fault dressed as a specification" (SDD L207), and "a program can see that a field is filled and not that what fills it is true" (SDD L1532).

---

## 2. The cycle by hand

This is the procedure every page teaches. The Manual has nine steps (M 4.1). By hand there are six, because the plugin's own record-keeping steps fall away.

| # | Step | Who | What is saved |
|---|---|---|---|
| 1 | **Does this need the cycle?** Put the five conditions to the question (M 3.2): more than three documents to read; a lasting document; a figure someone will quote; a change to a file; evidence the chat cannot see. If none holds, just ask (M 3.4, 3.6) | You | One line in the log, only if a condition holds |
| 2 | **Write the instruction** from the form. A chat may help draft it, but that chat does no work afterwards | You (an *instruction chat* may help) | `1-instructions/` · a row in the log |
| 3 | **Do the work** in a new chat: the role prompt, the instruction and the material. It ends with a report written from the form, and no verdict | A *work chat* | `2-reports/` · a row in the log |
| 4 | **Review** in another new chat: the role prompt, the instruction, the report and the material. The review chat never sees the work chat. It works out one figure again by another route, and ends *accepted* or *not accepted* | A *review chat* | `3-reviews/` · a row in the log |
| 5 | **Decide.** Accept or not. The decisions that are always yours are what is delivered, what is cut, what is spent and what is said outside (M 2.8) | You | A row in the log: the verdict and your ruling |
| 6 | **If not accepted:** add the review's gaps to the same instruction as version 2, and start a new work chat and a new review chat. After two failures, write the task again (M 4.6) | You | Version 2 of the instruction · a row in the log |

**One rule with no exception** (M 2.1): a chat never carries out work it helped commission, and never judges work it helped commission or carry out.

**What the learner must turn off.** Memory shared between chats would undo the separation, because a review chat that remembers the work chat is no longer independent. So 3.3's **In the tool** tells the learner how to turn off memory, or keep it out of the project, before the review chat starts. The page names it for Claude and says once that ChatGPT, Gemini and Copilot have the same setting under their own names, as plan v0.4 page 1.1 does. Nothing in the Manual covers this, because the plugin starts its sub-session with an empty memory. By hand, it is the one setting that can quietly break the method.

---

## 3. The pages

Each page has the series' parts: the concept, **In the tool**, the worked example and the AI usage tip. It adds two parts taken from the SDD course:
- **Try it first.** A spot-the-fault exercise from the record. The key sits in a collapsed block below it, because "keys are kept out of the learner's folder until the debrief" (F127) and learners try before reading "a good answer contains" (F38).
- **On your work.** The step done on the learner's own case, ending with a check of "a good answer contains".

### Module 3 — One piece of work, start to finish

*For both personas. The Strategist's way through ends here, after taking one piece of work through the cycle once. That is the best preparation for accepting work that others had orchestrated.*

| # | Page | Concept | Try it first (PLR) | On your work | Sources |
|---|---|---|---|---|---|
| 3.1 | **Two failures, and the rule that answers them** | A self-check confirms the error. What a chat knows is lost when it ends. The answer is separate parties with documents between them, and the state of the work kept in files. *You know this already*: a civil servant who writes a document never accepts it alone. "The writer cannot perform the test, because they already know what they meant." When to use the cycle: the five conditions, and the counter-rule against waste | **The paper that looked fair.** The identity paper v1 comparison table: no empty cell, 78 citations over 31 lines, all holding, and its own report claiming a cross-check of every fact. *Which two facts are counted against one position only?* Key: review gaps G1 and G2. The length of B's cells against A's shows the lean | Pick one piece of real work. Put the five conditions to it. Write the case card: what it is, what it serves, which condition holds. If none holds, pick another | M 1, 3.1–3.6; SDD L211, L2949; PLR-003 v1 review §7 |
| 3.2 | **Write the instruction** | What it serves. Tests a stranger could run. The two or three ways *this* work fails while seeming to succeed. Out of scope. *If something you need is not in the material, say so and name who could supply it, and do not supply it.* Name the reviewer's second route before the work starts. Write the measure before the work: "a measure written after the thing it measures is not a measure" | **The duplicates count.** Its task (§3) and how it can fail (§7). *Which of the six ways it can fail would you have missed?* | Set up first (section 5, *Setting up your computer*). Then write your instruction from the form. Give it alone to a fresh chat and ask it to say back what it will do and what it would need to ask. Each question it asks is a gap in the instruction (SDD's "good enough" test) | M 4.2, 4.7; SDD L207, L249, L389, L5209; PLR-016 prompt §3, §4, §7 |
| 3.3 | **The report and the review** | The report gives the answer first, then each test with its evidence. It says what was found and not fixed, and what could not be established, and it carries no verdict. The review is a check, not a reading. It works out one figure again by another route. A check that cannot run is a failure. There are two verdicts and no third word. A review with zero findings on work that matters is a warning. A program sees that a field is filled, not that it is true | **The 20 that slipped through.** The report: 40 children on more than one list; 20 caught from every entry, and the other 20 each missed from the one entry spelt differently. The review recounted from the fixture file alone and got the same figures. *Why does the review's route matter more than its agreement?* Then the identity paper v2, accepted, with the recommendation on narrower ground | Run your work chat, then your review chat, from the role prompts in the folder. Memory off first (section 2) | M 4.4–4.6; SDD L1093, L3421, L5200–5205, L5240; PLR-016 report §1, review §2; PLR-003 v2 |
| 3.4 | **Judgement: you decide** | What reaches you, and in what form: a short paper with a recommendation. The four decisions that are always yours. An open question recorded with an owner and a date does not block the work; one never written down does. The review replaces no person's signature | **The note that said too much.** The note to the Permanent Secretary v1, with the accepted goal beside it. *Which sentence says more than the record carries?* Key: "It does not recognise a child already registered under a different spelling", against the goal's step that finds the child by birth registration number. Harder: v2, *which limit is missing?* Then four rulings as "you decide" cards: the recommendation, the learner's choice, and the ruling (D03, D07, D08, D10) | Decide on your own work. Write the ruling as one line in the log, and anything left open with an owner and a date | M 2.7–2.8, 8.2 close; SDD L271–281, L1533; PLR-018 v1 and v2 reviews |

**Module 3 self-check**, four questions in the SDD course's form (S26): questions 1 and 3 multiple choice, 2 and 4 short answer; Ready at 3 of 4; each answer names its page. Two examples:
- *Your review chat answers "accepted, no issues found" on a 20-page draft. What do you do?* Good answer: treat zero findings as a warning, and check that the review worked out at least one figure by its own route.
- *The work chat writes "the system does not recognise duplicates" from a test of the search alone. What is wrong?* Good answer: a limit of one step is stated as a limit of the whole. Ask what else could find the child.

### Module 4 — Running it for days

*For the Architect.*

| # | Page | Concept | Try it first (PLR) | On your work | Sources |
|---|---|---|---|---|---|
| 4.1 | **The log: status is produced, never remembered** | One row per event: instruction issued, report back, verdict, ruling. "Where does it stand?" is answered from the log, never from memory. Nothing is deleted, and a withdrawn row stays with its reason. Expect about half to need a second attempt (PLR: 13 of 23 accepted at the first version). **Tip: one piece of work writes at a time**, told through D09 and D10 | **The parallel mistake.** The orchestrator recommended running four rounds at once, and the owner agreed. Two of them started twice in one shared folder, and the owner withdrew all four and had them run again one after another. *What in the log would have shown the clash before it happened?* | Answer "where does my work stand?" from your log alone, then compare it with what you remember | M 4.8, 6.1–6.5; SDD L283, L908, L5064; PLR ledger entry closing PLR-011; MEASURES row W44 |
| 4.2 | **The faults you learn once** | Each kind of work has a page of the faults it refuses, what its review runs and what to check before issuing. A fault a review finds is added to the page, so every later instruction carries it. There are three kinds for civil-servant work: **analysis**, **drafting** and **checking**. A correction lands in the document that owns the fact | **Where the drafting page's line 8 came from.** Show the note v1 review gap, then the line it added: "a limit of one step is stated of that step, not of the whole". *Which earlier review would have added a line to your page?* | Start your own page for the kind of work you do most, from the starter folder's version. Add one line from your own review in 3.3 | M 4.10; SDD L259, L5025; PLR `_kinds/analysis.md`, `drafting.md`, `checking.md` |
| 4.3 | **Handing over to a fresh chat** | An orchestrator fails by quoting figures it no longer works out again. The note carries only what the files cannot: what it did that it should not have done, what is owed, and findings that appear in no report. It refuses figures, a survey of the work and a story. Every line is a claim. The first task of the incoming chat is small: check a handful of claims, then stop. "A list of everything is a list nobody checks" | **The confessions.** The outgoing note's section "What this session did that it should not have done", rewritten plainly. Four claims were checked and all four held, while the note's other claims were left unchecked. *Which one claim would you have added to the four?* | Write the handover note for your work. Start a fresh chat with the first task. Did it stop where it should have? | M 7.1–7.6; SDD L401, L5054; PLR handover note, first task and its report |
| 4.4 | **Judgement: setting up, every day, and what this does not claim** | What you need before the first session: the setup list of section 5, checked again now that the learner has run a cycle. The practical tips. The daily routine. The common mistakes, by hand. Cognitive debt: work accepted that nobody can explain. **What the pattern does not claim**: it does not make the output true, cheap or the same between runs. It makes differences discussable and failures countable | **The mistakes table.** Seven mixed-up moments, such as pasting the next step into a running chat or asking the work chat to check itself. *Which mistake does each one make?* (after F1325–1349) | Write your readiness statement: what I now do alone, what I do with a review, and what I revisit and when (S462–469) | M 10.1–10.4; SDD L297, L5363–5370; Storey; S462 |

**Module 4 self-check**, as for Module 3.

**The sidebar, *What automation adds***, sits on 4.4 and is linked from 3.3 and 4.1. It shows the Orchestrator plugin doing what the learner did by hand: scheduled sessions, the ledger, *check*, the trace and placement checks, and the record of what is running. It is shown with one PLR screenshot each, and nothing on a page depends on it.

---

## 4. The PLR material, page by page

Every excerpt is rewritten in plain English, with no codes or paths, and links to the original. The record's facts stated precisely:

| Page | Fact as the page may state it | Not as |
|---|---|---|
| 3.1 | The v1 table passed every mechanical test, and the review found two facts counted against one position only | "it looked fair" with no reason given |
| 3.3 | 40 children are on more than one list. The prototype catches 20 of them from every entry. Each of the other 20 is missed from the one entry spelt differently. No entry returned the wrong child | "the prototype catches half" |
| 3.4 | The note v1 had two sentences out of 21 that said more than the record carries, and every figure in it was right. v2 left out two limits. The note was then defined again as a new piece of work, and that one was accepted | "the note was fixed", or "v2 was accepted" |
| 4.1 | 23 pieces of work closed; 13 accepted at the first version; 10 second attempts; 4 withdrawn and run again. Two of the closes are *re-scoped*, not *accepted* | "23 accepted" |
| 4.3 | The handover named four claims to check, and all four held. The note held about 14 more claims that were not checked | "every claim was checked" |

**Frozen, 31 October.** The excerpts are in `examples/plr/` (its README lists them), with the record's figures at that date. The note's re-scoped round (PLR-023) was accepted on 30 October, so the figures above are those of the frozen record.

**Clean before use.** Codes (PLR-0NN, G1–G3, V1, A1–A10, T1–T8, D01–D11, 4a, `found-on-plr`, `CR-LOOKUP`, `PNEA-EXAM`), front matter keys, model and effort lines, paths, and the procedure's own terms ("refusal 4", "cut-over", "the page of the kind", "Moved:"). D-numbers appear on pages only as "the owner's ruling on 30 October". The bodies are named plainly, with the Progressa name in brackets once per page (decision 5). Screenshots are taken from a build with the internal codes removed from the screens.

---

## 5. The starter folder

`toolkit/orchestrate-starter/`. It is published as a zip from the GitBook space and from `ea-plays-kit`. The by-hand cycle needs nothing else.

```
orchestrate-starter/
├── START-HERE.md            setting up your computer, the six steps on one page, and the daily routine
├── log.xlsx                 one sheet: date · piece of work · version · event · file · verdict/ruling · open with owner
├── 0-chat-prompts/          the three role prompts, ready to paste
│   ├── work-chat.md         "Carry out the instruction below and nothing else. If something you need is not in the material, say so and do not supply it. End with a report from the form. Give no verdict."
│   ├── review-chat.md       "You did not write this instruction or do this work. Check the report against the instruction. Work out at least one figure again by a route the report did not use. End with accepted or not accepted."
│   └── first-task-chat.md   "Check only these claims. Stop at the first one you cannot check."
├── forms/                   instruction · report · review · handover note (plain language, one page each)
├── kinds/                   analysis · drafting · checking, generalised from the PLR pages
├── 1-instructions/ 2-reports/ 3-reviews/   empty, one kind of document each (M 2.4)
└── example/                 one filled cycle: the duplicates count, instruction → report → review, rewritten to one page each
```

**The forms are the PLR documents with the machinery taken out.** What remains in the instruction: what it serves, the material, the task, how you will know it is done, how it can fail, out of scope, and where the report goes. That is sections 3–8 of the record's instruction body. The report keeps the Manual's seven parts (M 4.4), less the path listings. The review keeps its steps 1–3 and 7 (M 4.5).

**The pages of faults, generalised.** They keep the items that hold outside software:
- Analysis 1–5: a proposal is not a decision; argue each position from its strongest passages, in one table; list the set from its own source before counting; a citation holds at its line; no self-contradiction.
- Drafting 2, 5, 6, 8: supply nothing the source does not carry; apply a review's rule to every member, not only to the three named; write for the business reader; state the limit of a step as a limit of that step only.
- Checking 1–5: show the check failing once on a planted fault before trusting a zero; list the set before counting it; read each result against its file; check the real thing, not its description; change nothing you check.

Building stays a PLR page and is not in the folder.

### Setting up your computer

`START-HERE.md` opens with this list, and 3.2's **In the tool** walks through it before the first instruction is written. Each step is optional above the first. Each one saves some copying and pasting, and none of them changes the method.

1. **The baseline: any assistant, in the browser.** Unzip the starter folder anywhere you can find it again. Turn memory off (section 2). Then paste the role prompt and the instruction into each chat, and save the reply into the folder yourself. This works in the ministry's approved assistant, whatever it is.
2. **The Claude desktop app** (Windows or Mac). Chats sit beside your files rather than in a browser tab. A project holds the forms and your page of faults as its standing instructions, so you don't paste them each time (2.2). Make one project for the work chats and keep the review chat outside it, so the review does not see the work chat's project.
3. **File access: Desktop Commander,** or the app's own file extension, added to the desktop app. The work chat reads the material from the folder and writes its report into `2-reports/` itself. The review chat reads the instruction and the report from the folder, not from a paste, which is how the record keeps one copy of each document. Allow only the starter folder, and never a folder that holds anything confidential (2.4). It can also run commands. The course never asks for one, so turn down any the chat proposes that you did not ask for.
4. **Plugins and skills.** The ea-plays skills install as in 2.3. The Orchestrator plugin for learners, once it ships, does the log and starts the chats for you. That is the sidebar on 4.4, and nothing on a page needs it.
5. **Keep the folder somewhere it is copied.** A synced folder (OneDrive, SharePoint) is enough. Keeping it under version control, as the Manual asks (M 10.1), is for those who already use it.

**Practical tips** (on 3.2 and 4.4):
- Check your organisation's rules before installing anything on a work computer. Some organisations do not allow new software or extensions, and in that case the baseline is the route.
- Name each chat by the piece of work, its role and its version, for example *duplicates · review · v2*. Then a chat you return to can be told apart from one you meant to start fresh.
- Start the review in a new chat each time, including for version 2.
- Keep the log open beside the chats, and write its row before you move on.

The tips stay on the pages. Install steps for named products date fast, so each one links to the product's own instructions and gives the date it was checked (plan v0.4 step 9).

---

## 6. Videos

The seven videos of plan v0.4 stay. Those that cover the Orchestrate section get their real dated cases from the record (plan v0.4 decision 4):

| # | Video | Pages | Case |
|---|---|---|---|
| V3 | Two failures we kept meeting | 3.1 | The identity paper that passed its own checks and was still lopsided (28 October) |
| V4 | Why the reviewer is someone else | 3.2–3.3 | 20 of the 40 children slip through. The review gets the same figure by its own route (30 October) |
| V5 | Running it for days | 4.1, 4.3 | The parallel mistake, told by the speaker. The handover note's confessions (30 October) |
| V6 | What stays ours | 3.4, 4.2, 4.4 | The note that said too much. The rulings that stayed with the person |

V5 was *Choosing who does the work* in plan v0.4. Model choice becomes a tip in 3.2: point at something, and choose by the class of work, never by how important the subject is (M 5.2–5.3).

---

## 7. Out of the section, and where it goes

| Plan v0.4 page or Manual part | Now |
|---|---|
| 3.2 Guides and sensors | One paragraph in 3.1. "One check ends at the real thing" moves to 3.3 as the consent-refusal check (PLR-015: the exchange refused seven fields and passed six) |
| 4.1 The nine steps | The six steps of section 2, taught across 3.2–3.4 |
| 4.5 Choosing who does the work | A tip in 3.2 |
| 5.2 One source for each document | One rule in 4.2 ("a correction lands in the document that owns the fact") and one in 4.4 (the Word file is built, never edited) |
| 5.5 Walk-through in Progressa | It is now the worked example that runs through 3.1–4.3 |
| Five duties, ten refusals (M 2.5–2.6) | Left out. They describe the orchestrator, not the learner |
| Declarations, checksums, start messages, session names, log entry kinds, accounts, *move*, *limit* (M 4.2–4.3, 6.2–6.9, 7.7) | The sidebar, or left out |
| The record-keeping rejections (PLR-001, 002, 005, 010) | One honest line in 4.1: the other second attempts were about the project's record-keeping, not the content |

---

## 8. Size

Eight pages, plus two self-checks and the sidebar, against 17 pages in plan v0.4. The time estimate for a learner is about 45 minutes a page including the exercise on their own work, so about 6 hours for the section. It needs testing in the review run of plan v0.4 step 9.

---

## 9. What this changes in plan v0.4

- **Section 1 and the module table.** The Orchestrate layer becomes "2 modules, 8 subtopics". The Strategist's way through becomes Modules 0–3, and it now includes doing one cycle.
- **Section 5 (the Manual, chapter by chapter).** Re-map it to the pages above. Chapters 2.5–2.6, 6.2–6.9, 7.7 and 9 go to the sidebar or out.
- **Section 7 (videos).** Use the table in section 6.
- **Section 9 (KP4 links).** 1.5 → 3.1; 4.5 → 3.3 and 3.4; 5.2 → 4.2; 5.7 → 3.3; 6.1 → 3.2–3.3; 6.3 → 4.1; 6.4 → Modules 3–4. The "modules 3–5" wording in KP4's README becomes "modules 3–4".
- **Section 11 (the folder).** `toolkit/` becomes `toolkit/orchestrate-starter/` (section 5), and `examples/` holds the frozen PLR excerpts.
- **Decision 2 (the kinds of work).** Settled as analysis, drafting and checking for learners, with building kept for PLR.

---

## 10. Decisions for you

1. ~~Two modules in place of three~~ *Settled 30 October: two modules.*
2. ~~Quoting the owner's rulings~~ *Settled 30 October: the rulings are described, never quoted verbatim, and attributed to "the owner".*
3. ~~The filled example in the starter folder~~ *Settled 30 October: the duplicates count (PLR-016), its instruction, report and review each cut to one page in plain language, so the folder and pages 3.2–3.3 tell one story.*
4. ~~The handover~~ *Settled 30 October: the session-to-session handover is the case; no handover between people is staged.*
5. ~~The bodies' names on the pages~~ *Settled 30 October: plain descriptions ("the identity authority", "the examinations authority", "the exchange"), each with its Progressa name (PNIA, PNEA, Linkup) in brackets once per page.*

All five decisions are settled, and section 9 has been applied to `KP0_Plan_v0.4.md` (30 October 2026).
