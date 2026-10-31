# KP0 — Working with AI in Government: plan v0.4

*Draft, 22 October 2026. Replaces v0.3 (in `_retired/`, with its review). Changes from v0.3, all from the review: the **by hand** route is the tested baseline of KP0 v0.1 and the learner Orchestrator is an optional second route, scoped as a port (section 10); Module 5 has a by-hand route on every page; the videos are described one way throughout (seven videos, each covering a run of pages); the GEA-space changes are made in the renderers; a third departure (on-camera cues) is added; where the tools differ between assistants is one comparison table, not a line per page; manual 4.9 maps to KP4 4.4–4.5; schedule, owners, the speakers' cases and the plugin's licence are open decisions; sections renumbered (9a → 10).*

*(30 October 2026: the Orchestrate layer rebuilt as two modules and eight subtopics, from `KP0_Orchestrate_Section_Plan_v0.1.md`, which holds the page-by-page detail; sections 1, 3–7 and 9–13 changed to match; decision 2 settled.)*

---

## 1. What KP0 is

KP0 teaches a government team to work with an AI assistant, from one good chat to work handed over for days and checked by someone other than the one who did it. It comes before the four Knowledge Products: every page of KP1 to KP4 ends with an AI usage tip, and KP0 is where a learner learns to run those tips, set an assistant up for them, and run bigger work the way KP4 asks.

| Layer | In one line | Share of KP0 |
|---|---|---|
| 1. Chat | Get good answers in one chat | 1 module, 4 subtopics |
| 2. Prepare | Set up what the AI knows and can do | 1 module, 4 subtopics |
| 3. Orchestrate | Give bigger jobs to AI, and check the results | 2 modules, 8 subtopics |
| Judgement | A core competency across every layer | the closing subtopic of Modules 1–5, and one reference page |

**The audience.** Public servants, most of them not developers: the same two personas as KP1–KP4. The **Strategist** commissions and accepts AI-assisted work and answers for it. The **Architect** (the head of an ICT unit, a project lead, an analyst) runs the work. KP0 assumes no programming, no command line and no version control. The by-hand route needs none of them; whatever the Orchestrator route needs is settled with the learner edition (decision 1) and taught where it first appears, as the analysts' SDD course does.

**Concept and tool, on every page.** Each subtopic has two halves:
- **The concept**: why it works, in plain language, with its source (AI Fluency, context engineering, Böckeler's harness, Storey's cognitive debt, the government frameworks).
- **In the tool**: what you click, type or set up. The concept is tool-neutral and works in any assistant, including the ones a ministry already has approved. The tool half is shown in Claude, said as such on the page. Other assistants are named, not mapped: page 1.1 and the course's home page say that ChatGPT, Gemini and Microsoft 365 Copilot have the same settings under their own names, to be found in their own help pages. *(26 October 2026: the comparison table first planned here was dropped, because it would go out of date within months.)*

Layer 3 has two routes through every subtopic: **by hand** (three separate chats, three documents in a folder and a log the learner keeps, which works in any assistant) and **with the Orchestrator** (the plugin in the Claude desktop app, which does the bookkeeping). The by-hand route is the tested baseline of KP0 v0.1: every Layer 3 page is complete with it alone, so KP0 can go to ITU whether or not the plugin ships. The Orchestrator is the optional second route (section 10). A learner who can only use the ministry's approved assistant still learns the whole pattern.

---

## 2. The GitBook space

**Title (tentative): *Working with AI in Government*.** Its own space on the site *Experience Digital Transformation*, in a new section group **Foundations**, first in the menu: KP0 serves all four existing groups, so it belongs in none of them. The slug, following the site's pattern: `/working-with-ai-in-government`.

The site's other section names carry a gloss in brackets (*Government Enterprise Architecture (GEA)*, *Sandbox (Gov-in-a-Box)*). If the title wants one, *(Chat to Orchestration)* names the ladder; it can be added later without changing anything else.

## 3. What KP0 is built from

| Material | Used for |
|---|---|
| `gitbook/start-here/working-with-ai.md` and `prompting-techniques.md` | Modules 1 and 2, and the Judgement page. They leave the GEA space (section 8) |
| `how-to-use-the-plays.md` (five habits from the test runs), `play-0.md` (the context pack A0), `ea-plays-kit.md` | Modules 1 and 2, as worked examples. They stay where they are |
| **The Orchestrator Manual, latest edition** (`Desktop/SDD_Method/The_Orchestrator_Manual.docx`, 21 October) | Modules 3–4: its rules, not the plugin's machinery (section 5). Its content is carried in KP0; KP0 does not link to the manual |
| The Orchestrator Manual v0.3 (`plugins/orchestrator-manual/`, 6 October) | Only its Progressa setting of the examples (the National Learner Registry business case in 1.1; one example per KP in chapter 8). Its mechanics are older and are not used |
| The SDD Method Explained for a Developer, chapters 2, 17, 18, 19 | The three rules, "a gap is a finding with an owner", "an assistant writes it, a person rules on it", a program's half and a person's half of a review, and what the method does not claim |
| The SDD course (`Desktop/SDD_Method/SDD_course_01`–`03`: outline, facilitator guide, self-assessment) | The teaching pattern of Modules 3–4: one running case (here the learner's own), spot-the-fault exercises with the key kept back, the four-question self-check and the readiness statement |
| The PLR prototype project's record (`plr-prototype/`) | Every worked example and exercise of Modules 3–4, rewritten in plain English, codes removed; the starter folder's filled example |
| The layers note and its reading list | The theory: AI Fluency's 4Ds, context engineering, Skills explained, Böckeler's harness engineering, Storey and Fowler on cognitive and intent debt |

**Two adaptations the manual needs to become KP0.**

1. **From one method to all four KPs.** The latest manual is written for the SDD method: its four kinds of work are application design, feature design, platform implementation and the method's own work, and its examples are the Facility Permit reference application. KP0 is for learners of all four KPs. So the kinds of work are generalised: *analysis* (a diagnostic, a gap register, a landscape brief), *drafting* (a ToR, a decree, a business case, a goal written in full) and *checking* (a count, a trace, a test on a running system), each with a page of faults in the starter folder; *building* stays with the PLR record and KP4 (decision 2, settled 30 October). The examples come from one Progressa project, the PLR prototype (section 6).
2. **From operating manual to course.** The manual tells a user how to run the tool; KP0 has to teach why each rule exists so a learner can apply it without the tool. Every rule the manual gives with its "without it, this goes wrong" becomes the concept half of a page; every procedure becomes the tool half. The plugin's own machinery (declarations, checksums, start messages, session names, log entry kinds, accounts) is not taught; it goes in the sidebar *What automation adds* on 4.4.

---

## 4. Structure

Five modules (0 to 4) and 17 subtopics. Every subtopic is a written page. There are seven videos, each covering a run of pages, and every page is covered by one (section 7). The pages carry the whole content, so a learner who never watches a video misses nothing that is taught, only the stories.

| Module | Layer | Persona | Subtopics |
|---|---|---|---|
| 0 | — | All | 1 (0.0 course introduction) |
| 1 | Chat | Strategist | 4 |
| 2 | Prepare | Strategist | 4 |
| 3 | Orchestrate — one piece of work, start to finish | Strategist | 4 |
| 4 | Orchestrate — running it for days | Architect | 4 |

**Two ways through.** *Strategist*: 0, 1, 2, 3 — enough to run any KP tip, and to accept work done the orchestrated way after taking one piece of their own work through the cycle. *Architect*: all five — enough to run the work, as KP4's modules 3–5 expect.

Each subtopic page carries, as in KP1–KP4: the concept, **In the tool**, a worked example on Progressa, an **AI usage tip** (Bring / Get / Time / With the kit / Watch for), and sources. Each of Modules 1–4 ends with a self-check of four questions; Module 0 has one page and neither a Judgement page nor a self-check.

### Module 0 — Introduction

| # | Subtopic | Concept | In the tool |
|---|---|---|---|
| 0.0 | How much work do you hand over? | The three layers by how much you hand to the assistant; judgement at every one; the two ways through | — (on camera) |

### Module 1 — Chat: get good answers in one chat

| # | Subtopic | Concept | In the tool | Built from |
|---|---|---|---|---|
| 1.1 | A drafting partner, not an oracle | Why it invents and why it agrees with you; fluency is not evidence | Choosing a model and turning on search and citations; what each changes | working-with-ai §1–4 |
| 1.2 | The four-part prompt | Name the input, the outputs, the format; add the safeguard line for *this* prompt's risk. Context and one example beat cleverness; iterate rather than restart | Writing it, running it, editing and re-running; the rewrite meta-play | prompting-techniques; five habits |
| 1.3 | Read the output before you use it | Ask for the open questions; a draft with none deserves a second reading; cite or discard | Opening the sources it cites; asking it to mark what it inferred | working-with-ai safeguards 1–2; KP4 6.4 |
| 1.4 | **Judgement:** what stays out of the chat, and what stays yours | The four safeguards; when not to use an assistant; your name on the decision | The de-identify play; the ministry's approved tools | working-with-ai §5–6; UK AI Playbook |

### Module 2 — Prepare: set up what the AI knows and can do

| # | Subtopic | Concept | In the tool | Built from |
|---|---|---|---|---|
| 2.1 | Build the context once | The smallest set of high-signal information that makes the outcome likely; write it once, reuse it | Building A0 with Play 0 and keeping it as a file | context engineering; play-0 |
| 2.2 | Projects and standing instructions | Say once what you would otherwise paste every time; a project brief for a ministry team | A project with its instructions and files; instruction files for agents | Skills explained |
| 2.3 | Skills and connections | A skill is a procedure packaged with its references and output contract; a connector lets it reach a source; when to use which | Installing one ea-plays skill; reading its header; connecting the knowledge base itself | ea-plays-kit; prompting-techniques §Skills; Agent Skills |
| 2.4 | **Judgement:** what never goes into the setup | Nothing confidential in a project or a connector; context goes stale; write the intent down (intent debt) | Checking what a project and memory hold, and clearing it | working-with-ai safeguard 3; KP4 6.4; Storey/Fowler |

### Module 3 — Orchestrate: one piece of work, start to finish

The learner works on one piece of their own work from 3.1 onward; PLR is the worked example beside it. Each page adds **Try it first** (a spot-the-fault exercise from the PLR record, its key in a collapsed block) and **On your work** (the step done on the learner's own case). The cycle by hand is six steps: decide whether it needs the cycle; write the instruction; a work chat does the work and reports; a separate review chat checks and gives the verdict; you decide; if not accepted, version 2.

| # | Subtopic | Concept | In the tool | Manual |
|---|---|---|---|---|
| 3.1 | Two failures, and the rule that answers them | A self-check confirms the error; what a chat knows is lost when it ends; separate parties with documents between them; you know this already (no one accepts their own document); the five conditions, and the counter-rule against waste | *Try it first:* the identity paper v1 table that passed its own checks. *On your work:* the case card | 1, 3 |
| 3.2 | Write the instruction | What it serves; tests a stranger could run; the ways *this* work fails while seeming to succeed; out of scope; "say what is missing, do not supply it"; the reviewer's second route named in advance. Tip: choose the model by the class of work, never the importance of the subject | *Try it first:* the duplicates count's task and its ways to fail. *On your work:* set up the computer (the desktop app, file access through Desktop Commander, plugins; or the baseline in any assistant), then the instruction from the form, tested on a fresh chat that says it back | 4.2, 4.7, 5 |
| 3.3 | The report and the review | The answer first; each test with its evidence; *found, not fixed*; no verdict. A check, not a reading; one figure worked out again by another route; two verdicts; zero findings is a warning; one check ends at the real thing | *Try it first:* the 20 of 40 children that slipped through, and the review's own recount; the identity paper v2. *On your work:* the work chat and the review chat, memory turned off first | 4.4–4.6 |
| 3.4 | **Judgement:** you decide | What reaches you, as a short paper with a recommendation; the four decisions always yours; an open question with an owner does not block, one never written down does; the review replaces no signature | *Try it first:* the note to the Permanent Secretary, v1 (the sentence that says too much) and v2 (the missing limit); four owner's rulings as "you decide" cards, described, not quoted. *On your work:* the ruling as a line in the log | 2.7–2.9, 8.2 close |

### Module 4 — Orchestrate: running it for days

| # | Subtopic | Concept | In the tool | Manual |
|---|---|---|---|---|
| 4.1 | The log: status is produced, never remembered | One row per event; status read from the log; nothing deleted; expect about half to need a second attempt; not accepted twice, the task is defined again. Tip: one piece of work writes at a time | *Try it first:* the parallel mistake (four rounds at once, two started twice in one folder, all four withdrawn and run one after another). *On your work:* status from the log alone | 4.8, 6.1–6.5 |
| 4.2 | The faults you learn once | A page of faults for each kind of work (analysis, drafting, checking); a fault a review finds is added to the page; a correction lands in the document that owns the fact | *Try it first:* where the drafting page's rule on limits came from. *On your work:* your own page, one line from your review | 4.10, 6.10 |
| 4.3 | Handing over to a fresh chat | Fails by quoting what it no longer works out again; the note carries what it should not have done, what is owed, findings in no report; no figures, survey or story; every line a claim; the first task checks a handful, then stops | *Try it first:* the outgoing note's confessions; four claims checked, the rest not. *On your work:* your note and first task | 7.1–7.6 |
| 4.4 | **Judgement:** setting up, every day, and what this does not claim | What you need before the first session (the setup list and practical tips of the section plan, section 5); the daily routine; the common mistakes by hand; cognitive debt; the pattern does not make the output true, cheap or the same between runs | *Try it first:* seven mixed-up moments, each a mistake to name. *On your work:* the readiness statement. *Sidebar:* what automation adds (the Orchestrator plugin) | 10, 9 |

### The Judgement page

One reference page that collects 1.4, 2.4, 3.4 and 4.4, with the frame (technical, cognitive and intent debt; offloading versus surrender) and the government reading list (UK AI Playbook, AU Continental AI Strategy, OECD *Governing with AI*). This is the page KP1–KP4 link to in place of "Working with AI".

---

## 5. The manual, chapter by chapter

Everything in the latest manual has a home in KP0 or is left out on purpose.

| Manual | KP0 | Note |
|---|---|---|
| About this manual (session, orchestrator, Orchestrator) | 3.1, glossary | |
| 1 Why it exists | 3.1 | The case is the PLR identity paper |
| 2.1–2.4 Parties, documents, places | 3.1–3.3 | Three chats and three folders by hand |
| 2.5–2.6 Five duties, ten refusals | Left out | They describe the orchestrator, not the learner |
| 2.7–2.9 Closing decisions, what reaches you, no questions mid-run | 3.4 | |
| 3 When to use it | 3.1 | |
| 4.1 Nine steps | 3.1–3.4 | Six steps by hand |
| 4.2–4.3, 4.7 Instruction, start message, changing it | 3.2 | The declaration and start message go to the sidebar |
| 4.4 Report | 3.3 | Form in the starter folder |
| 4.5–4.6 Review, verdicts | 3.3, 4.1 | Form in the starter folder |
| 4.8 One piece of work writes at a time | 4.1, as a tip | |
| 4.9 The application model | KP4 4.4–4.5 (not in KP0) | KP0 keeps only "one check ends at the real thing" (3.3) |
| 4.10 Kinds of work | 4.2 | Analysis, drafting, checking |
| 5 Choosing who does the work | 3.2, as a tip | |
| 6.1–6.5 The record, the log | 4.1 | A spreadsheet log by hand |
| 6.6–6.9 Session names, unreachable log, cross-project requests, named settings | Sidebar or left out | |
| 6.10 Durable record | 4.2, 4.4 | |
| 7.1–7.6 Handing over | 4.3 | |
| 7.7 Moving accounts | Left out | |
| 8 Worked examples | Replaced by the PLR record (section 6) | |
| 9 Installing on Windows | 4.4 sidebar | Depends on the installation guide being issued |
| 10 Getting started | 4.4 | |
| Quick reference, glossary | The starter folder's one-page cycle, and the glossary | |

---

## 6. Worked examples

Modules 3–4 take every example from one Progressa project, the PLR prototype (`KP0_Orchestrate_Demo_App_Plan_v0.1.md`), so a learner follows one project and one log. Every excerpt is rewritten in plain English, with no codes or paths, and links to the original. The excerpts the pages use are frozen in `examples/`, because some of the record's documents are still changing.

| Page | PLR case | Manual example it stands for |
|---|---|---|
| 3.1, 3.3 | The identity paper: v1 not accepted (two facts counted against one position only), v2 accepted on narrower ground | 8.3 open judgement |
| 3.2, 3.3 | The duplicates count: 40 children on more than one list; 20 caught from every entry, each of the other 20 missed from the entry spelt differently; the review's recount from the data file alone | 8.1 mechanical work |
| 3.3 | The consent-refusal check against the running prototype: seven fields refused, six received | 8.4 the running system |
| 3.4 | The note to the Permanent Secretary: v1 two sentences say more than the record; v2 two limits left out; then defined again, and that version accepted | 8.2 exact work, not accepted |
| 4.1 | The scorecard (23 closed, 13 at the first version, 10 second attempts, 4 withdrawn and run again; frozen 31 October) and the parallel mistake | — |
| 4.3 | The session-to-session handover: the confessions, four claims checked | — |

Plus one example each for Modules 1 and 2: a prompt before and after its safeguard line (1.2), and MoEYS's project brief (2.2). The starter folder's filled example is the duplicates count.

---

## 7. Videos: at most 30 minutes, where our experience counts

**The rule for choosing.** A video is made only where the speaker has something the page cannot carry: a case from our own work, a mistake we made and how we found it, a judgement we would make differently now. Where the content is a procedure or a definition, the page does it better and there is no video.

Seven videos, about 29 minutes. Each is a person on camera, with slides cut in for a list or a figure and, where marked, a short screen insert.

| # | Video | Covers pages | Min | Speaker (suggestion) | What only experience can bring |
|---|---|---|---|---|---|
| V0 | Why we wrote this course | 0.0 | 3 | Arne | How four Knowledge Products were made with AI, and what changed as the work moved from chats to orchestrated sessions |
| V1 | The draft that looked right | 1.1–1.4 | 4 | Aare | A real draft that was fluent and wrong, how it was caught, and the safeguard line that would have caught it earlier (the test runs on The Gambia, August 2026, are one source) |
| V2 | Context once, then skills | 2.1–2.4 | 4 | Arne | Building the country context pack once and what it did to every play after it; why the ea-plays skills exist (the step learners skipped) |
| V3 | Two failures we kept meeting | 3.1 | 5 | Aare | The identity paper that passed its own checks and was still lopsided (28 October). The Orchestrator was built from failures like this, not designed in advance |
| V4 | Why the reviewer is someone else | 3.2–3.3 | 5 | Aare | Half the duplicates slipping through, and the review that got the same figure by its own route (30 October); what an instruction looks like when a stranger can check the work (short screen insert) |
| V5 | Running it for days | 4.1, 4.3 | 4 | Arne | The parallel mistake, told by the speaker; the handover note's confessions and the claims checked (30 October) |
| V6 | What stays ours | 3.4, 4.2, 4.4 | 4 | Arne | The decisions we kept, one we should not have handed over, and how to tell offloading from surrender |

**The stories are ours to supply.** Each script names what the story must show and leaves the story to the speaker. The team's own records (instructions, reports and reviews in the project folders) are the place to find the real cases, with dates. V1, V3, V4 and V5 each need a specific real case; each speaker names theirs before the cut is decided (decision 4). A video whose speaker cannot name a case becomes a page.

**Script and pipeline.** As for KP1–KP4 up to the script: `build_kp0_moduleN_v01.js` as the single source; the module bundle (`.md` and `.docx`), the GitBook pages and the decks are all generated from it, so there is one source. The bundle goes through `kp-bundle-qa` and `kp-citation-verify`. Then the camera route of `KP1-GEA/videos/camera-intro.md` instead of NotebookLM: no audio brief, no take, no cue file; the series' file format and loudness. The video tracker needs a camera route for KP0.

**Three departures from the series rules, for ITU's calibration items.** (1) People on screen in every video, where the rule is "no individuals on screen" and the KP intros are the one exception so far. (2) Not every subtopic has its own video: seven videos covering runs of pages (the table above), where KP1–KP4 have one about five-minute video per subtopic. (3) On-camera cues in the scripts, which `kp-bundle-qa` check 4 forbids. The kit's gates are per subtopic, so `kp-bundle-qa` needs a KP0 profile that relaxes checks for (1)–(3) and carries the table above as the map of which video stands for which pages; otherwise each departure is reported as a known finding.

## 8. What leaves the GEA space

| Page | After |
|---|---|
| `start-here/working-with-ai.md` | Moves into KP0 (1.1, 1.3, 1.4 and the Judgement page). A stub with one link stays until GitBook redirects are set |
| `start-here/prompting-techniques.md` | Moves into KP0 (1.2, 2.3). Stub as above |
| `start-here/how-to-use-the-plays.md`, `play-0.md`, `ea-plays-kit.md`, `progressa.md` | Stay. Links repointed; one line that the plays are KP0 layer 1 and the kit is layer 2 |
| `start-here/README.md` | KP0 listed first; the 🛡️ card becomes a KP0 card |
| `pages.json` | The two pages removed from the GEA space |

**All of it is made in the renderer, not in `gitbook/`.** `kp-gitbook-render`'s `render.py` writes `start-here/` and `kp1/`; a stub or card edited by hand is overwritten at the next render. So the two stubs, the removal from `pages.json`, the README card and the repointed links are changes to `render.py`, then a re-render.

**Links to change in KP1–KP4.**

| Where | Pages | Change |
|---|---|---|
| KP README card "🛡️ Working with AI" | 4 | → KP0, the Strategist way through, and the Judgement page |
| KP1 and KP2 module READMEs, "New to the plays? Read … Working with AI" | 10 | → KP0 Module 1 and the Judgement page |
| KP3 and KP4 README, "Before your first prompt, read Working with AI" | 2 | → as above |
| "Never paste personal data … see How to use the plays", in every prompt tab | 155 (KP1 35, KP2 38, KP3 45, KP4 37) | → the Judgement page. **In the renderers** (`render.py` for KP1, `render_kp2.py`, `render_kp3.py`, `render_kp4.py`), then regenerate |

---

## 9. KP0 in KP1–KP4

**KP4** is the Orchestrator pattern applied to building a service, so it gets the most links.

| KP4 page | KP0 link |
|---|---|
| README, prerequisites | KP0 Strategist way for all; Architect way (KP0 Modules 3–4) before KP4's modules 3–5 |
| 1.5 Who writes, who checks, who accepts | 3.1 — the same separation for assistant sessions |
| 4.5 Reviewing the model | 3.3 (the review) and 3.4 (a gap is a finding with an owner) |
| 5.2 Nothing generated is edited by hand | 4.2 — a correction lands in the document that owns the fact |
| 5.7 Proof on the running system | 3.3 — one check ends at the real thing |
| 6.1 What to require from a supplier | 3.2–3.3 — require the trail of instructions, reports and reviews |
| 6.3 Read where the work stands from the work | 4.1 — status is produced, never remembered |
| 6.4 The AI assistant at every step | Modules 3–4 as a whole |

**KP1–KP3**, lighter: one line in each guide's "How to use this guide" that its tips are KP0 layer 1, then KP1 Module 3 (single source, repository governance) → 4.2; KP2 plays 2.2–2.5 (decrees drafted from published legal models) → 2.3; KP3's build pack (runbook, prompts, acceptance) → 3.2.

---

## 10. The plugins

All plugin work is in `claude-marketplace`.

**For learners: the Orchestrator, an optional second route.** KP0 v0.1 does not depend on it: the by-hand route (section 1) is the baseline every Layer 3 page is complete with, and the plugin is what **In the tool** shows as the second route when it ships.

Its source today is the `orchestrator` skill of `fa-project-ops`: the rules (`SKILL.md`), the forms (`references/`: instruction, report, review, handover note, first task, constants, the record of what is running, the delivery record, the four pages of kinds of work) and the programs (`scripts/`: the ledger, the trace, placement and record checks, each with its self-test). That plugin is the team's own: it also carries the super-orchestrator, the account-drift and project-status tools and a hook, all written for one owner with several accounts.

**A learner edition is a port, not a trim.** The skill as it stands:
- is about 19,000 words of `SKILL.md`, written for one owner;
- runs its programs as `python3` with absolute paths on the team's machines (`$HOME/IdeaProjects/rsr/…`) and a constants file in a registry folder a learner does not have, on a Python runtime KP0 never asks for;
- keeps its record in a git-backed ledger where every entry is committed and pushed to a remote (2.5.3, `_ledger/`, `entries-not-pushed`);
- loads desktop-commander tools for commands on the computer.

So the learner edition (working name `wai-orchestrator`) needs at least:
- paths relative to a learner folder, and no registry folder;
- a record that works with no remote, or with no git at all;
- a Windows path, tested;
- a decision whether Python is a prerequisite or the scripts are dropped;
- the multi-account machinery left out (the super-orchestrator, the account table, *move*, the `limit` entry);
- the kinds of work as the starter folder has them (analysis, drafting, checking), each with its page of faults (section 3);
- the forms of the starter folder (section 11), with the duplicates count filled in;
- `SKILL.md` and the references cleared of the team's projects, accounts and machines;
- a self-test a learner can run to see that it installed.

That is real design work with its own effort estimate (decision 1). It does not sit on KP0's critical path.

It reaches learners the way ea-plays does: published through the public `ea-plays-kit` repository beside `ea-plays` and `sdd-kit`, with the Cowork `.plugin` file as a release asset, under that repository's licences (CC BY 4.0 / MIT; decision 6). KP0's **With the kit** lines name it. The team keeps working from `fa-project-ops`; the learner edition is checked against it with each release, so the two do not drift apart unnoticed.

**For production: `itu-giga-kp`.** Changes: KP0 in `kp-curriculum-qa`'s matrices; a KP0 profile in `kp-bundle-qa` for the three departures and the video-to-pages map (section 7); the renderer changes of section 8 in `render.py` and `render_kp2.py`–`render_kp4.py`; and the camera route in the video tracker. `kp-gitbook-render` renders KP0's guide to `gitbook/kp0/`, as for KP4.

## 11. The folder

```
KP0-AI/
├── README.md
├── ai-knowledge-product-layers.md     the concept note
├── KP0_Plan_v0.4.md                   this plan
├── build_kp0_module0_v01.js … module4 the scripts, one source per module
├── KP0_ModuleN_Script_Bundle_v0.1.md  generated from each script
├── decks/                             deck programs, as KP4
├── KP0_Orchestrate_Section_Plan_v0.1.md  the Orchestrate layer, page by page
├── examples/                          the frozen PLR excerpts the pages use, and the Modules 1–2 examples
├── toolkit/                           the blank project brief; orchestrate-starter/ (forms, chat prompts, log, pages of faults, the filled example), published as a zip
├── figures/                           one program per figure (re-drawn from the manual's, in Progressa)
├── videos/                            V0–V6/en/{scripts,decks,video}; README for the presenters
└── _retired/
```

The GitBook guide goes to `../gitbook/kp0/`, generated from the scripts as KP4's is. The plugins are not here: they are in `claude-marketplace` (section 10).

---

## 12. Decisions still open

1. **The learner edition of the Orchestrator** (section 10): its name; whether Python is a prerequisite or the scripts are dropped; whether the record keeps git (local only) or none; how much of the multi-account machinery stays; and an effort estimate. Whether it ships with KP0 v0.1 or after.
2. ~~The kinds of work, generalised~~ *Settled 30 October: analysis, drafting and checking for learners; building stays with PLR and KP4 (section 3).*
3. **The installation guide** the latest manual refers to: 4.4's sidebar needs it, or its content, for the learner edition. The by-hand half does not.
4. **The seven videos**: V3, V4 and V5 have their cases from the PLR record (section 7); V1 still needs Aare's case, with a date. A video without a case becomes a page.
5. **Scripts for people on camera**: full scripts in the bundle for ITU's review, with the story place marked and free (recommended), or talking points.
6. **Licence and provenance of the learner plugin**: confirm it may be derived from `fa-project-ops` and published through `ea-plays-kit` under CC BY 4.0 / MIT.
7. **Schedule and delivery.** What the existing ITU agreement expects of KP0 (bundles, GitBook space, videos) and by when; a release date for KP0 v0.1 as KP1–KP4 had; an owner and an effort for each step of section 13. *To set.*
8. **Who runs step 9 of section 13**: the non-developer who runs the Strategist way through, and when. *To name.*

## 13. Order of work

1. Settle the decisions above: first the schedule (7), then the speakers' cases and the video cut (4), which decide what the scripts ask of the speakers.
2. Freeze the PLR excerpts into `examples/` and write the starter folder: the forms, the three chat prompts, the log, the pages of faults and the filled duplicates count (section plan, section 5). *Done 31 October: `examples/plr/` and `toolkit/orchestrate-starter/`.*
3. Write the scripts of Modules 3–4 from the section plan and the PLR record, then Modules 1–2 from the two moved pages, then 0.0; the pages are generated from the scripts. The by-hand half of every **In the tool** is written first and is complete on its own. The seven video scripts are written inside the module scripts they cover. *Modules 3–4 done 31 October: `build_kp0_module3_v01.js` and `build_kp0_module4_v01.js`, with their bundles; the bundle converter and the QA gate in `claude-marketplace` read the new Try it first block; the GitBook renderer does not yet (step 6).*
4. Scope and build the learner edition of the Orchestrator in `claude-marketplace` (section 10), in parallel with step 3 and off its critical path; the pages' Orchestrator halves are added when it is settled.
5. Run the gates with the KP0 profile; send the bundles for ITU review with the three departures in the calibration items.
6. Build figures, decks and the GitBook guide; create the space; switch the KP1–KP4 links in the renderers (section 8) and re-render.
7. Record the seven videos.
8. Publish the learner plugin through `ea-plays-kit`, if it is ready.
9. Review the whole: every claim against its source, every link opened, and one named non-developer (decision 8) runs the Strategist way through from start to end, by hand, and, if the plugin has shipped, installs it from the instructions alone.
