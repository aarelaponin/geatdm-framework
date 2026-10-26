# KP0 — Working with AI in Government: plan v0.3

*Draft, 21 October 2026. Replaces v0.2 (in `_retired/`). Changes from v0.2: the title is set (tentatively) to* Working with AI in Government*; KP0 falls under the existing ITU agreement; the plugins are authored in `claude-marketplace`; and the videos are cut to at most 30 minutes in all, recorded only where our own experience adds something the page cannot. The written guide keeps its full structure.*

---

## 1. What KP0 is

KP0 teaches a government team to work with an AI assistant, from one good chat to work handed over for days and checked by someone other than the one who did it. It comes before the four Knowledge Products: every page of KP1 to KP4 ends with an AI usage tip, and KP0 is where a learner learns to run those tips, set an assistant up for them, and run bigger work the way KP4 asks.

| Layer | In one line | Share of KP0 |
|---|---|---|
| 1. Chat | Get good answers in one chat | 1 module, 4 subtopics |
| 2. Prepare | Set up what the AI knows and can do | 1 module, 4 subtopics |
| 3. Orchestrate | Give bigger jobs to AI, and check the results | 3 modules, 17 subtopics |
| Judgement | A core competency across every layer | the closing subtopic of every module, and one reference page |

**The audience.** Public servants, most of them not developers: the same two personas as KP1–KP4. The **Strategist** commissions and accepts AI-assisted work and answers for it. The **Architect** (the head of an ICT unit, a project lead, an analyst) runs the work. KP0 assumes no programming, no command line and no version control, and teaches the little of the last two that Orchestrate needs where it first appears, as the analysts' SDD course does.

**Concept and tool, on every page.** Each subtopic has two halves:
- **The concept**: why it works, in plain language, with its source (AI Fluency, context engineering, Böckeler's harness, Storey's cognitive debt, the government frameworks).
- **In the tool**: what you click, type or set up. The concept is tool-neutral and works in any assistant, including the ones a ministry already has approved. The tool half is shown in Claude, said as such on the page, with one line on where the same thing sits in other assistants.

Layer 3 has two routes through every subtopic: **by hand** (three separate chats and three documents in a folder, which works in any assistant) and **with the Orchestrator** (the plugin in the Claude desktop app, which does the bookkeeping). A learner who can only use the ministry's approved assistant still learns the whole pattern.

---

## 2. The GitBook space

**Title (tentative): *Working with AI in Government*.** Its own space on the site *Experience Digital Transformation*, in a new section group **Foundations**, first in the menu: KP0 serves all four existing groups, so it belongs in none of them. The slug, following the site's pattern: `/working-with-ai-in-government`.

The site's other section names carry a gloss in brackets (*Government Enterprise Architecture (GEA)*, *Sandbox (Gov-in-a-Box)*). If the title wants one, *(Chat to Orchestration)* names the ladder; it can be added later without changing anything else.

## 3. What KP0 is built from

| Material | Used for |
|---|---|
| `gitbook/start-here/working-with-ai.md` and `prompting-techniques.md` | Modules 1 and 2, and the Judgement page. They leave the GEA space (section 8) |
| `how-to-use-the-plays.md` (five habits from the test runs), `play-0.md` (the context pack A0), `ea-plays-kit.md` | Modules 1 and 2, as worked examples. They stay where they are |
| **The Orchestrator Manual, latest edition** (`Desktop/SDD_Method/The_Orchestrator_Manual.docx`, 21 October) | Modules 3–5, chapter by chapter (section 5). Its content is carried in KP0; KP0 does not link to the manual |
| The Orchestrator Manual v0.3 (`plugins/orchestrator-manual/`, 6 October) | Only its Progressa setting of the examples (the National Learner Registry business case in 1.1; one example per KP in chapter 8). Its mechanics are older and are not used |
| The SDD Method Explained for a Developer, chapters 2, 17, 18 | The three rules (as sensors), "a gap is a finding with an owner", "an assistant writes it, a person rules on it" |
| The layers note and its reading list | The theory: AI Fluency's 4Ds, context engineering, Skills explained, Böckeler's harness engineering, Storey and Fowler on cognitive and intent debt |

**Two adaptations the manual needs to become KP0.**

1. **From one method to all four KPs.** The latest manual is written for the SDD method: its four kinds of work are application design, feature design, platform implementation and the method's own work, and its examples are the Facility Permit reference application. KP0 is for learners of all four KPs. So the kinds of work are generalised (proposal: *analysis* — a diagnostic, a gap register, a landscape brief; *drafting* — a ToR, a decree, a business case, a goal written in full; *building* — an application model, a build, a demonstration; *checking* — a count, a trace, a test on a running system), and the examples are set in Progressa, one per KP where possible, as v0.3 did (section 6).
2. **From operating manual to course.** The manual tells a user how to run the tool; KP0 has to teach why each rule exists so a learner can apply it without the tool. Every rule the manual gives with its "without it, this goes wrong" becomes the concept half of a page; every procedure becomes the tool half.

---

## 4. Structure

Six modules (0 to 5) and 26 subtopics. Every subtopic is a written page; only seven of them have a video (section 7). The pages carry the whole content, so a learner who never watches a video misses nothing that is taught, only the stories.

| Module | Layer | Persona | Subtopics |
|---|---|---|---|
| 0 | — | All | 1 (0.0 course introduction) |
| 1 | Chat | Strategist | 4 |
| 2 | Prepare | Strategist | 4 |
| 3 | Orchestrate — why one chat is not enough | Strategist | 5 |
| 4 | Orchestrate — the life of one piece of work | Architect | 6 |
| 5 | Orchestrate — running the work over weeks | Architect | 6 |

**Two ways through.** *Strategist*: 0, 1, 2, 3 — enough to run any KP tip and to accept work done the orchestrated way. *Architect*: all six — enough to run the work, as KP4's modules 3–5 expect.

Each subtopic page carries, as in KP1–KP4: the concept, **In the tool**, a worked example on Progressa, an **AI usage tip** (Bring / Get / Time / With the kit / Watch for), and sources. Each module ends with a self-check of four questions.

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

### Module 3 — Orchestrate: why one chat is not enough

| # | Subtopic | Concept | In the tool | Manual |
|---|---|---|---|---|
| 3.1 | Two failures | The one who does the work also judges it; what a chat knows is lost when it ends | The case, replayed: a self-check confirming an error | 1.1–1.5 |
| 3.2 | Guides and sensors | Steer before it acts, check after; completeness against a list the work did not write; one check ends at the real thing | — (the frame for the rest) | Böckeler; SDD three rules |
| 3.3 | Three parties, three documents, and you | Instruction, report, review; no one carries out or judges what they commissioned; the report carries no verdict | Three chats by hand; the same with the Orchestrator | 2.1–2.4, 2.9 |
| 3.4 | When to write an instruction, and when not | "This is complex" is not the test; five conditions anyone can observe; the counter-rule against waste | How a refusal reads | 3.1–3.6 |
| 3.5 | **Judgement:** what reaches you | Four decisions always yours (what is delivered, cut, spent, said outside); every other decision closed by one of four routes; a session asks you nothing while it runs | The short paper with a recommendation | 2.5–2.8 |

### Module 4 — Orchestrate: the life of one piece of work

| # | Subtopic | Concept | In the tool | Manual |
|---|---|---|---|---|
| 4.1 | From the question to the verdict, in nine steps | Each step prevents a named failure | The nine steps by hand and with the Orchestrator | 4.1 |
| 4.2 | Writing an instruction | What it serves; tests a stranger could run; the two or three ways *this* work fails while seeming to succeed; out of scope | Writing the declaration and the ten sections; the start message | 4.2–4.3, 4.7 |
| 4.3 | The report | The answer first; each test with its evidence; *found, not fixed*; no figure from memory | Reading a report | 4.4 |
| 4.4 | The review | A check, not a reading; one figure worked out again by another route; a check that cannot run is a failure; accepted or not accepted, and what follows | Starting the review in a fresh chat; the verdicts | 4.5–4.6 |
| 4.5 | Choosing who does the work | Point at something: a check (mechanical), a document (exact), a disagreement (open judgement); never the importance of the subject; the effort level | Choosing the model and the effort; matching them in another assistant | 5.1–5.7 |
| 4.6 | **Judgement:** the faults you learn once | Each kind of work has a page of its faults; a fault met once is carried by every later instruction; one piece of work writes at a time | The page of a kind of work | 4.8, 4.10 |

### Module 5 — Orchestrate: running the work over weeks

| # | Subtopic | Concept | In the tool | Manual |
|---|---|---|---|---|
| 5.1 | Status is produced, never remembered | A memory repeated becomes a fact; the log; the same answer for whoever asks | Typing *check*; reading the record of what is running | 6.1–6.6 |
| 5.2 | One source for each document | A Word file is a build; work is delivered when it is saved and copied, not when it is written | Version control for non-developers: commit and push, in the desktop tools | 6.10 |
| 5.3 | Handing over the role | An orchestrator fails by quoting what it no longer re-works; the handover note carries only claims to check | Writing the note; the bounded first task | 7.1–7.7 |
| 5.4 | Setting up, and every day | What you need before the first session; the daily routine; the common mistakes | The folder, the constants file, the plugin, the first session | 10.1–10.4, 9 |
| 5.5 | Walk-through: one piece of work in Progressa | — | Annotated screenshots, question to verdict, including a *not accepted* and its next version (on the page, not a video) | 8.2 |
| 5.6 | **Judgement:** accepting what you understand | Cognitive debt: work accepted that nobody can explain; offloading versus surrender; the review replaces no person's signature | Reading back what you accept | Storey; manual 8.2 close |

### The Judgement page

One reference page that collects 1.4, 2.4, 3.5, 4.6 and 5.6, with the frame (technical, cognitive and intent debt; offloading versus surrender) and the government reading list (UK AI Playbook, AU Continental AI Strategy, OECD *Governing with AI*). This is the page KP1–KP4 link to in place of "Working with AI".

---

## 5. The manual, chapter by chapter

Everything in the latest manual has a home in KP0 or is left out on purpose.

| Manual | KP0 | Note |
|---|---|---|
| About this manual (session, orchestrator, Orchestrator) | 3.3, glossary | |
| 1 Why it exists | 3.1 | Case re-set in Progressa |
| 2.1–2.4 Parties, documents, places | 3.3 | |
| 2.5–2.6 Five duties, ten refusals | 3.3 page, as a reference table | Not narrated in full |
| 2.7–2.9 Closing decisions, what reaches you, no questions mid-run | 3.5 | |
| 3 When to use it | 3.4 | |
| 4.1 Nine steps | 4.1 | |
| 4.2–4.3, 4.7 Instruction, start message, changing it | 4.2 | Plus a blank instrument |
| 4.4 Report | 4.3 | Plus a blank instrument |
| 4.5–4.6 Review, verdicts | 4.4 | Plus a blank instrument |
| 4.8 One piece of work writes at a time | 4.6 | |
| 4.9 The application model | KP4 5.x (not in KP0) | SDD-specific; KP0 keeps only the rule "a review of something that runs must run it" (3.2, 4.4) |
| 4.10 Kinds of work | 4.6 | Generalised to the four KPs (section 3) |
| 5 Choosing who does the work | 4.5 | |
| 6.1–6.6 The record, the log, session names | 5.1 | |
| 6.7–6.9 Unreachable log, cross-project requests, named settings | 5.1 page, short | Not narrated |
| 6.10 Durable record | 5.2 | |
| 7 Handing over | 5.3 | 7.7 (moving accounts) on the page only |
| 8 Worked examples | the worked examples of 3.4, 4.4, 4.5, 5.5 | Re-set in Progressa (section 6) |
| 9 Installing on Windows | 5.4, and a setup page | Depends on the installation guide being issued |
| 10 Getting started | 5.4 | |
| Quick reference, glossary | A KP0 reference page and the glossary | |

---

## 6. Worked examples

All set in Progressa, all invented, as in the other KPs. The four examples of the manual's chapter 8 keep their teaching point and change their setting:

| Manual example | Teaching point | Progressa setting (proposal) | Used in |
|---|---|---|---|
| 8.1 Every requirement and its goal | A question that looks like one reading is commissioned because its count will be quoted; mechanical work | KP1: how many of MoEYS's programmes the gap register covers, for the Board paper | 3.4, 4.5 |
| 8.2 One goal written out in full | Exact work; not accepted on one missing failure, then accepted | KP4: the goal *Apply for a provisional licence* (PDCA) — the identity check with no failure written | 4.4, 5.5 (demo) |
| 8.3 What identifies a facility | Open judgement; the accepted conclusion differs from the asker's preference; the decision stays human | KP3: what identifies a learner in the National Learner Registry | 4.5, 3.5 |
| 8.4 One reading, or the running system | Answer directly when one reading settles it; commission when only the real thing can | KP2: which states an exchange request can be in (direct), and whether the data interface refuses a request without consent (commissioned) | 3.4, 3.2 |

Plus one example each for Modules 1 and 2: a prompt before and after its safeguard line (1.2), and MoEYS's project brief (2.2).

---

## 7. Videos: at most 30 minutes, where our experience counts

**The rule for choosing.** A video is made only where the speaker has something the page cannot carry: a case from our own work, a mistake we made and how we found it, a judgement we would make differently now. Where the content is a procedure or a definition, the page does it better and there is no video.

Seven videos, about 29 minutes. Each is a person on camera, with slides cut in for a list or a figure and, where marked, a short screen insert.

| # | Video | Covers pages | Min | Speaker (suggestion) | What only experience can bring |
|---|---|---|---|---|---|
| V0 | Why we wrote this course | 0.0 | 3 | Arne | How four Knowledge Products were made with AI, and what changed as the work moved from chats to orchestrated sessions |
| V1 | The draft that looked right | 1.1–1.4 | 4 | Aare | A real draft that was fluent and wrong, how it was caught, and the safeguard line that would have caught it earlier (the test runs on The Gambia, August 2026, are one source) |
| V2 | Context once, then skills | 2.1–2.4 | 4 | Arne | Building the country context pack once and what it did to every play after it; why the ea-plays skills exist (the step learners skipped) |
| V3 | Two failures we kept meeting | 3.1–3.2 | 5 | Aare | The self-check that confirmed an error; the decision lost when a chat closed. The Orchestrator was built from these, not designed in advance |
| V4 | Why the reviewer is someone else | 3.3–3.4, 4.1–4.4 | 5 | Aare | A review that said *not accepted* and was right; what an instruction looks like when it is good enough that a stranger can check the work (short screen insert) |
| V5 | Choosing who does the work, and keeping the record | 4.5, 5.1–5.3 | 4 | Arne | Giving the strongest model to an important but settled task, and what it cost; a handover where the claims did not survive checking |
| V6 | What stays ours | 3.5, 4.6, 5.6 | 4 | Arne | The decisions we kept, one we should not have handed over, and how to tell offloading from surrender |

**The stories are ours to supply.** Each script names what the story must show and leaves the story to the speaker. The team's own records (instructions, reports and reviews in the project folders) are the place to find the real cases, with dates.

**Script and pipeline.** As for KP1–KP4 up to the script: `build_kp0_moduleN_v01.js` as the single source, rendered to the module bundle (`.md` and `.docx`), through `kp-bundle-qa` and `kp-citation-verify`, decks from the scripts. Then the camera route of `KP1-GEA/videos/camera-intro.md` instead of NotebookLM: no audio brief, no take, no cue file; the series' file format and loudness. The video tracker needs a camera route for KP0.

**Two departures from the series rules, for ITU's calibration items.** (1) People on screen in every video, where the rule is "no individuals on screen" and the KP intros are the one exception so far. (2) Not every subtopic has a video: seven videos over 26 pages, where KP1–KP4 have one about five-minute video per subtopic. The kit's gates check for one video per subtopic, so `kp-bundle-qa` needs a KP0 profile or the departure is reported as a known finding.

## 8. What leaves the GEA space

| Page | After |
|---|---|
| `start-here/working-with-ai.md` | Moves into KP0 (1.1, 1.3, 1.4 and the Judgement page). A stub with one link stays until GitBook redirects are set |
| `start-here/prompting-techniques.md` | Moves into KP0 (1.2, 2.3). Stub as above |
| `start-here/how-to-use-the-plays.md`, `play-0.md`, `ea-plays-kit.md`, `progressa.md` | Stay. Links repointed; one line that the plays are KP0 layer 1 and the kit is layer 2 |
| `start-here/README.md` | KP0 listed first; the 🛡️ card becomes a KP0 card |
| `pages.json` | The two pages removed from the GEA space |

**Links to change in KP1–KP4.**

| Where | Pages | Change |
|---|---|---|
| KP README card "🛡️ Working with AI" | 4 | → KP0, the Strategist way through, and the Judgement page |
| KP1 and KP2 module READMEs, "New to the plays? Read … Working with AI" | 10 | → KP0 Module 1 and the Judgement page |
| KP3 and KP4 README, "Before your first prompt, read Working with AI" | 2 | → as above |
| "Never paste personal data … see How to use the plays", in every prompt tab | 154 | → the Judgement page. **In the renderers** (`render_kp4.py`, the kit's renderers for KP1–KP3), then regenerate |

---

## 9. KP0 in KP1–KP4

**KP4** is the Orchestrator pattern applied to building a service, so it gets the most links.

| KP4 page | KP0 link |
|---|---|
| README, prerequisites | KP0 Strategist way for all; Architect way before modules 3–5 |
| 1.5 Who writes, who checks, who accepts | 3.3 — the same separation for assistant sessions |
| 4.5 Reviewing the model | 4.4 (the review) and 3.5 (a gap is a finding with an owner) |
| 5.2 Nothing generated is edited by hand | 5.2 — one source for each document |
| 5.7 Proof on the running system | 3.2 — one check ends at the real thing |
| 6.1 What to require from a supplier | 3.3 and 4.2–4.4 — require the trail of instructions, reports and reviews |
| 6.3 Read where the work stands from the work | 5.1 — status is produced, never remembered |
| 6.4 The AI assistant at every step | Modules 3–5 as a whole |

**KP1–KP3**, lighter: one line in each guide's "How to use this guide" that its tips are KP0 layer 1, then KP1 Module 3 (single source, repository governance) → 5.2; KP2 plays 2.2–2.5 (decrees drafted from published legal models) → 2.3; KP3's build pack (runbook, prompts, acceptance) → 4.2.

---

## 9a. The plugins

All plugin work is in `claude-marketplace`.

**For learners: the Orchestrator.** Its source today is the `orchestrator` skill of `fa-project-ops`: the rules (`SKILL.md`), the forms (`references/`: instruction, report, review, handover note, first task, constants, the record of what is running, the delivery record, the four pages of kinds of work) and the programs (`scripts/`: the ledger, the trace, placement and record checks, each with its self-test). That plugin is the team's own: it also carries the super-orchestrator, the account-drift and project-status tools and a hook, all written for one owner with several accounts.

The proposal is a learner edition, a new plugin in `claude-marketplace` (working name `wai-orchestrator`), made from the `orchestrator` skill with:
- the multi-account machinery left out (the super-orchestrator, the account table, *move*, the `limit` entry), or kept as optional;
- the four kinds of work generalised to analysis, drafting, building and checking, each with its page of faults (section 3);
- the forms written in plain language with a Progressa example filled in;
- a self-test a learner can run to see that it installed.

It reaches learners the way ea-plays does: published through the public `ea-plays-kit` repository beside `ea-plays` and `sdd-kit`, with the Cowork `.plugin` file as a release asset. KP0's **With the kit** lines name it. The team keeps working from `fa-project-ops`; the learner edition is checked against it with each release, so the two do not drift apart unnoticed.

**For production: `itu-giga-kp`.** Three changes: KP0 in `kp-curriculum-qa`'s matrices; a KP0 profile in `kp-bundle-qa` for the video-per-subtopic and people-on-screen departures; and the camera route in the video tracker. `kp-gitbook-render` renders KP0's guide to `gitbook/kp0/`, as for KP4.

## 10. The folder

```
KP0-AI/
├── README.md
├── ai-knowledge-product-layers.md     the concept note
├── KP0_Plan_v0.2.md                   this plan
├── build_kp0_module0_v01.js … module5 the scripts, one source per module
├── KP0_ModuleN_Script_Bundle_v0.1.md  generated from each script
├── decks/                             deck programs, as KP4
├── examples/                          the Progressa worked examples, E0 fact sheet first
├── toolkit/                           blank instruction, report, review, handover note, project brief
├── figures/                           one program per figure (re-drawn from the manual's, in Progressa)
├── videos/                            V0–V6/en/{scripts,decks,video}; README for the presenters
└── _retired/
```

The GitBook guide goes to `../gitbook/kp0/`, generated from the scripts as KP4's is. The plugins are not here: they are in `claude-marketplace` (section 9a).

---

## 11. Decisions still open

1. **The learner edition of the Orchestrator** (section 9a): its name, and how much of the multi-account machinery it keeps.
2. **The kinds of work, generalised** (section 3): analysis, drafting, building and checking, or others.
3. **The installation guide** the latest manual refers to: 5.4 needs it, or its content, for the learner edition.
4. **The seven videos**: the cut, the speakers, and whether each of you has the story the script will ask for.
5. **Scripts for people on camera**: full scripts in the bundle for ITU's review, with the story place marked and free (recommended), or talking points.

## 12. Order of work

1. Settle the decisions above, starting with the video cut: it decides what the scripts ask of the speakers.
2. Generalise the kinds of work and re-set the four examples in Progressa (E0 fact sheet, then the E-files).
3. Write the scripts and pages of Modules 3–5 from the manual, then Modules 1–2 from the two moved pages, then 0.0. The seven video scripts are written inside the module scripts they cover.
4. Build the learner edition of the Orchestrator in `claude-marketplace`, in parallel with step 3: the pages' **In the tool** halves are written against it.
5. Run the gates with the KP0 profile; send the bundles for ITU review with the two departures in the calibration items.
6. Build figures, decks and the GitBook guide; create the space; switch the KP1–KP4 links and the renderers.
7. Record the seven videos.
8. Publish the learner plugin through `ea-plays-kit`.
9. Review the whole: every claim against its source, every link opened, and one non-developer runs the Strategist way through from start to end, and installs the plugin from the instructions alone.
