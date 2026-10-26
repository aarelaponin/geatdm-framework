# KP0 — Using AI: plan v0.1

*Draft, 21 October 2026. The plan for the material to prepare in this folder before KP0 goes into GitBook. Every decision still open is in section 10.*

---

## 1. What KP0 is

KP0 teaches how to work with an AI assistant. It sits under the four Knowledge Products and is numbered 0 because a learner meets it first. KP1 to KP4 each hand the learner an AI usage tip on every page. KP0 is where the learner learns to run those tips well, to set an assistant up so the tips work better, and to hand an assistant bigger jobs and check them.

It has three layers, ordered by how much work you hand over, and one competency that runs through all of them:

| Layer | In one line | Where the learner is afterwards |
|---|---|---|
| 1. Chat | Get good answers in one chat | Can run any tip in KP1–KP4 and read the output critically |
| 2. Prepare | Set up what the AI knows and can do | Has a project, a context pack and a skill or two set up, and knows what never goes in |
| 3. Orchestrate | Give bigger jobs to AI, and check the results | Can run multi-day work with an instruction, a report and an independent review, as KP4 asks |
| Judgement | A core competency across every layer | Knows which decisions stay human, and can tell offloading from surrender |

The name of the third layer is the name of the tool at its centre: the Orchestrator.

---

## 2. What was analysed

| Material | Where | What it gives KP0 |
|---|---|---|
| The layers note | `KP0-AI/ai-knowledge-product-layers.md` | The structure and the first reading list (AI Fluency, Skills explained, context engineering, Böckeler's harness and SDD articles, Storey on cognitive debt, Fowler's Fragments) |
| Working with AI — the ground rules | `gitbook/start-here/working-with-ai.md` (1,509 words) | Drafting partner not oracle; why it invents; what it costs (hallucination cases); sycophancy; the government frames (UK AI Playbook, AU strategy, OECD); the four safeguards; the de-identify meta-play |
| Prompting techniques | `gitbook/start-here/prompting-techniques.md` (1,114 words) | The four-part prompt with the safeguard line; the vendor guides mapped to it; the rewrite meta-play; a first paragraph on skills |
| How to use the plays | `gitbook/start-here/how-to-use-the-plays.md` | The five habits from the test runs (text in, text out; expect clarifying questions; strip the reasoning; posts not names; shorten the brackets) |
| Play 0 and the ea-plays kit | `gitbook/start-here/play-0.md`, `ea-plays-kit.md` | The country context pack A0 (a worked example of context engineering) and the skills of ea-plays and sdd-kit, with the cite-or-discard header (worked examples of Prepare) |
| The Orchestrator Manual | `Desktop/SDD_Method/The_Orchestrator_Manual.docx` (~21,600 words) and `plugins/orchestrator-manual/OM_Orchestrator_v0.3.md` (~17,200 words) | The core of layer 3: the two failures, three parties and three documents, the five conditions and the counter-rule, the three classes of work, the nine steps, status produced from the record, the handover, the four decisions that are always yours |
| The SDD Method Explained for a Developer | `Desktop/SDD_Method/…Developer.docx` (~127,000 words) | Of use to KP0: chapter 2 (the three rules), chapter 17 (change) and chapter 18 (an assistant writes it, a person rules on it; a gap is a finding with an owner; the assisting skills and the guiding skill). The rest is KP4 and the analysts' course, not KP0 |
| The SDD course outline | `Desktop/SDD_Method/SDD_course_01_Course_outline.docx` | How the analysts' course places the assistant ("an assistant proposes and a person rules"); its Module 0 tools check is a model for KP0's entry check |
| KP4 guide | `gitbook/kp4/`, esp. 1.5, 4.5, 5.2, 6.1, 6.3, 6.4 | The pages that KP0 layer 3 feeds most directly |
| KP1–KP3 guides and READMEs | `gitbook/kp1–kp3/`, `KP1-GEA/README.md` | Where the "Working with AI" links sit; the history of KP1's retired Module 5 (AI plays) |
| Video conventions | `KP1-GEA/videos/camera-intro.md`, `video-tracker/` | The on-camera rules and the compliance exception for a person on screen |

---

## 3. Findings

**3.1 Layer 1 and Judgement are already half-written.** `working-with-ai.md` and `prompting-techniques.md` together are about 2,600 words of finished, sourced material. Prompting techniques is Layer 1 almost as it stands; Working with AI is mostly Judgement, with the de-identify play belonging to Prepare. Both are written for the plays; in KP0 they become general and the plays become the examples.

**3.2 Layer 2 is scattered and unnamed.** Play 0 is context engineering (build the smallest high-signal context once, reuse it everywhere) but is never called that. The ea-plays kit is skills; the KP1 README's note on `llms.txt` and the GitBook MCP endpoint is a connector. KP0 gives these a name and a reason, and turns them into one setup a learner leaves with.

**3.3 Layer 3 has its core, but in two editions.** There are two Orchestrator manuals:
- `plugins/orchestrator-manual/OM_Orchestrator_v0.3.md` (6 October, sent to ITU): written for KP users, examples set in Progressa, one worked example per KP.
- `Desktop/SDD_Method/The_Orchestrator_Manual.docx` (21 October): written for the analysts of a tax or public administration on Windows, examples set in the Facility Permit reference application, and newer mechanics: scheduled sessions, sub-session reviews, the effort levels, a chapter on Windows.

KP0 needs the Progressa examples of the first and the mechanics of the second. That is a merge, and it should happen in the manual's source before KP0 quotes it (decision 10.2).

**3.4 The Orchestrator is the plain-language bridge the layers note said was missing.** The note says both of layer 3's readings (Böckeler) are written for software engineers and no strong non-developer resource exists. The Orchestrator Manual is that resource: written for analysts, no code, and it maps onto Böckeler's model one to one. The instruction and its declaration are the *guides*; the report's evidence, the independent review and the "check that ends at the running system" (SDD rule 3) are the *sensors*. KP0 should teach the frame through the Orchestrator, and cite Böckeler as the "going deeper".

**3.5 The Orchestrator is Claude-specific in its mechanics; the KPs are tool-neutral.** Scheduled sessions, plugins, sub-sessions and model names (Sonnet, Opus, Fable) are Claude's. The manual's own section 5.4 already separates the rule (the class of work) from the product (the model name). KP0 follows that line: teach the pattern so it works in any assistant, demonstrate it in Claude, and say so on the page. The model names will date; the three questions of section 5.2 will not.

**3.6 Most of the Orchestrator Manual is operating detail, not teaching.** Chapters 1–5 and 2.8 are the ideas; chapters 6–7 and 9–10 are how to run the tool. KP0 teaches the first set and links to the manual for the second. A learner should be able to apply chapter 3's five conditions and chapter 5's three questions in a plain chat with no plugin at all.

**3.7 The judgement material is strong but phrased as rules for the plays.** The four safeguards, "fluency is not evidence", the sycophancy safeguard line, "a gap is a finding with an owner" (SDD-01 rule 5), "the four decisions that are always yours" (OM 2.8), and "the class of work, never the importance of the subject" (OM 5.3) are all judgement. Storey's cognitive debt and the offloading/surrender distinction from the layers note give the thread its theory. Nothing needs inventing; it needs collecting.

**3.8 The links to move are many but mechanical.** "Working with AI" or "Prompting techniques" is linked from 17 pages (each KP README, every module README of KP1 and KP2, the KP3 and KP4 READMEs, and Start here). A further 154 subtopic pages carry the line "Never paste personal data … see How to use the plays" inside every prompt tab. Those pages are generated, so the change goes into the renderers, not the pages.

**3.9 On-camera videos conflict with the series' compliance rule.** The ITU bundles carry the rule "no individuals on screen" (§4.3); the KP intros are a declared exception. Videos of Arne or Aare speaking are fine if KP0 is FiscalAdmin's own product, and need ITU's agreement if KP0 is delivered under the contract (decision 10.1).

**3.10 KP1 already tried an AI module once.** KP1's Module 5 (AI plays) was retired in September because it duplicated the tips in the other modules. KP0 avoids the same fault by teaching the method of working with AI and never re-running a KP's own tips: it points at them as examples.

---

## 4. The structure

Three modules and a short opening, 17 subtopics. Each subtopic is one page in the GitBook guide, written out in full, with sources and a practice. Videos are fewer than pages (section 6). Every module ends on a Judgement subtopic, and a reference page collects the thread.

| # | Module | Persona | Subtopics | Videos |
|---|---|---|---|---|
| 0 | Three layers and one competency | All | 1 | 1 (on camera) |
| 1 | Chat — get good answers in one chat | All, Strategist first | 5 | 2 |
| 2 | Prepare — set up what the AI knows and can do | Strategist and Architect | 5 | 2 |
| 3 | Orchestrate — give bigger jobs to AI, and check the results | Architect, and the Strategist who accepts the work | 6 | 3 + 1 demo |
| — | Judgement (reference page) | All | — | — |

**Two ways through.** *The minimum*, before any KP tip: 0.1, Module 1, and the Judgement page (about 45 minutes). *Before KP4's modules 3–5*: add Module 3 (Module 2 recommended).

### Module 0 — Three layers and one competency

| # | Subtopic | Message | Draws on |
|---|---|---|---|
| 0.1 | How much work do you hand over? | Three layers, by how much you hand to the assistant; judgement at every one. Place yourself, and start at your layer | Layers note; AI Fluency's 4Ds (Delegation is the question of the whole ladder) |

Practice: a six-statement self-placement (two per layer), modelled on the analysts' course Module 0 check.

### Module 1 — Chat

| # | Subtopic | Message | Draws on | New to write |
|---|---|---|---|---|
| 1.1 | A drafting partner, not an oracle | The draft is where the work starts; fluency is not evidence | working-with-ai §1–2; OpenAI on hallucination | Generalise from plays to all work |
| 1.2 | The four-part prompt | Name the input, name the outputs, fix the format, add the safeguard line for *this* prompt's risk | prompting-techniques (as is); vendor guides table | Little: retitle examples |
| 1.3 | Context, an example, and the next turn | Give the context you'd give a new colleague; show one example; iterate rather than restart; ask it to ask you questions first | prompting-techniques technique table; five habits from the test runs; AI Fluency *Description* | The "iterate vs restart" rule |
| 1.4 | Reading the output | It agrees with your framing; ask for the open questions; a draft with no open questions deserves a second reading; cite or discard | working-with-ai §4 (sycophancy) and safeguard 2; KP4 6.4; AI Fluency *Discernment* | A short "how to read an output" checklist |
| 1.5 | Judgement in one chat | When not to ask an assistant; the four safeguards; what never goes in the prompt box; your name on the decision | working-with-ai §5–6; UK AI Playbook; de-identify play; AI Fluency *Diligence* | "When not to use it" (the layers note asks for it; nothing written yet) |

Practice: the rewrite meta-play on a prompt of your own, then one KP tip of your choice run and read with the 1.4 checklist.

### Module 2 — Prepare

| # | Subtopic | Message | Draws on | New to write |
|---|---|---|---|---|
| 2.1 | Why context beats cleverness | The smallest set of high-signal information that makes the outcome likely; build it once, reuse it | Anthropic, *Effective context engineering*; Play 0 and A0 as the worked example | Name Play 0 as context engineering |
| 2.2 | Standing instructions: projects and instruction files | A project's instructions and files, or `AGENTS.md`/`CLAUDE.md`, say once what you'd otherwise paste every time | *Skills explained*; vendor docs | A one-page project brief for a ministry team, as template |
| 2.3 | Skills: a procedure packaged | A skill is a prompt with its procedure, references and output contract, loaded when needed; the ea-plays header shows what it rests on | prompting-techniques §Skills; ea-plays-kit; Agent Skills standard | When a tip should become a skill |
| 2.4 | Connections: letting it reach your sources | Connectors and MCP; the knowledge base itself via `llms.txt` and MCP; choosing between a skill, a connector and a subagent | *Skills explained*; KP1 README note on `/~gitbook/mcp` | The choice table |
| 2.5 | Judgement in setup | What never goes into a project or a connector; approved tools; memory and stale context; intent debt (goals and constraints not written down) | working-with-ai safeguard 3; KP4 6.4 rules of use; Storey/Fowler on intent debt | Stale context and memory |

Practice: set up one project for your own work with the A0 pack and a standing instruction, and install one skill (or, without Claude, save one tip as a reusable instruction).

### Module 3 — Orchestrate

The Orchestrator Manual is the core. Each subtopic takes one idea from it and teaches it so it works in a plain chat too; the tool itself is the demonstration.

| # | Subtopic | Message | Draws on (OM = Orchestrator Manual) |
|---|---|---|---|
| 3.1 | The two failures | The one who does the work also judges it; what a conversation knows is lost when it ends | OM 1.1–1.3 (Progressa case from v0.3) |
| 3.2 | Guides and sensors | Steer before it acts (the instruction), check after (the review, and a check that ends at the running system) | Böckeler's harness; OM 2.3; SDD's three rules (ch 2.2) |
| 3.3 | Three parties, three documents | Instruction, report, review; no session carries out or judges its own commission; the report carries no verdict | OM 2.1–2.3, 4.1, Quick reference |
| 3.4 | When to orchestrate, and when not | "This is complex" is not the test; the five observable conditions; the counter-rule against waste | OM 3.1–3.6 |
| 3.5 | Choosing who does the work | Point at something: the check (mechanical), the document (exact), the disagreement (open judgement); never the importance of the subject | OM 5.1–5.4 |
| 3.6 | Judgement when the work is delegated | The four decisions that are always yours; a gap is a finding with an owner; status is produced, never remembered; the risk of understanding nothing you accepted (cognitive debt) | OM 2.7–2.8, 6.1; SDD-01 rule 5 (SDD Explained 18.4); Storey |

Plus one demonstration video: one piece of work in Progressa from question to verdict, in the Orchestrator.

Practice: write one instruction and its review instruction by hand, for a piece of your own work that meets at least one of the five conditions, and have it carried out and reviewed in two separate chats.

### The Judgement page

One reference page, not a module. It collects the three Judgement subtopics (1.5, 2.5, 3.6), and the judgement in 1.4 and 3.4, into one place, adds the frame from the layers note (technical, cognitive and intent debt; offloading versus surrender), and carries the government reading list from working-with-ai (UK AI Playbook, AU strategy, OECD). This is the page every KP links to in place of "Working with AI".

---

## 5. How Judgement runs through it

| Layer | The judgement question | The rule KP0 gives |
|---|---|---|
| Chat | Should I trust this answer? | Fluency is not evidence; cite or discard; name this prompt's way of misleading you |
| Prepare | What should it know, and what must it never hold? | Smallest high-signal context; nothing confidential; write the intent down so it doesn't live in one head |
| Orchestrate | Who checks, and what stays mine? | No one judges their own work; four decisions stay human; a gap gets an owner, never a plausible answer |
| Across all | Am I offloading or surrendering? | You must still be able to explain what you accepted |

---

## 6. Videos

Fewer videos than pages, all with a person speaking from experience. The pages carry the content in full, so a video does not need to cover its page: it gives the reason and a story. Suggested length 3–6 minutes, one person, the camera intro rules of `KP1-GEA/videos/camera-intro.md` for sound and file format.

| # | Video | Speaker (suggested) | The story it could tell (from your own experience — to confirm) |
|---|---|---|---|
| 0.0 | Why this course, and the three layers | Arne | Building four Knowledge Products with an assistant: what changed as the work moved up the layers |
| 1.a | The draft that looked right | Aare | A real draft that was fluent and wrong, and how it was caught (1.1, 1.4) |
| 1.b | Writing the safeguard line | Arne | From the KP test runs (The Gambia, August 2026): a prompt before and after its safeguard line (1.2) |
| 2.a | The context pack | Aare | Building A0 once and what it did to every play after it (2.1) |
| 2.b | From a prompt to a skill | Arne | Why the ea-plays skills exist: the step learners skipped (2.3) |
| 3.a | Two failures | Arne | The moment a self-check confirmed an error, or a decision was lost with a chat (3.1) |
| 3.b | Why the reviewer is someone else | Aare | A review that said "not accepted" and was right (3.3) |
| 3.c | What stays mine | Arne | The decisions you kept, and one you shouldn't have handed over (3.6) |
| 3.d | Demo: one piece of work, question to verdict | screen + voice | The Orchestrator on a Progressa task (3.3–3.5) |

Each video gets a one-page brief in `videos/` (talking points, not a word-for-word script), so it sounds like experience rather than reading. If ITU must accept KP0 under the series rules, the same briefs become screen-only voice-overs.

---

## 7. What leaves the GEA guide, and what changes there

The shared "Start here" chapter sits in the GEA space (`gitbook/pages.json`). It keeps the mechanics of the plays and loses the AI material.

| Page | Now | After |
|---|---|---|
| `start-here/working-with-ai.md` | The ground rules | **Moves to KP0** (1.1, 1.4, 1.5, Judgement page). Leaves a short stub with a link, so old links and bookmarks don't break |
| `start-here/prompting-techniques.md` | The four-part prompt | **Moves to KP0** (1.2, 1.3, 2.3). Stub as above |
| `start-here/how-to-use-the-plays.md` | Mechanics + links to the two pages | Stays. Links repointed; one line that the plays are KP0 layer 1 and the kit is layer 2 |
| `start-here/ea-plays-kit.md` | The optional Claude layer | Stays (it is about the plays). KP0 2.3 links to it as the worked example |
| `start-here/play-0.md` | The context pack | Stays. KP0 2.1 links to it as the worked example |
| `start-here/README.md` | "Four Knowledge Products", the 🛡️ card | Lists KP0 first; the 🛡️ card becomes a KP0 card; "about fifteen minutes" points at KP0's minimum path |

The two stubs can be removed once GitBook redirects are set.

**Link changes in the other KPs.**

| Where | How many | Change |
|---|---|---|
| KP README card "🛡️ Working with AI" | 4 (KP1–KP4) | → "KP0 — Using AI": the minimum path and the Judgement page |
| Module READMEs, "New to the plays? Read … Working with AI" | 10 (KP1 and KP2 modules) | → KP0 Module 1 and the Judgement page |
| KP3 and KP4 README "Before your first prompt, read Working with AI…" | 2 | → as above; KP4 also names Module 3 (section 8) |
| "Never paste personal data … see How to use the plays" in every prompt tab | 154 subtopic pages | → the Judgement page. **Change the renderers** (`render_kp4.py` and the kit's renderers for KP1–KP3), regenerate, never edit by hand |
| `pages.json` | 1 | Remove the two pages from the GEA space |

---

## 8. Referencing KP0 from the other KPs

**KP4 — the strongest tie.** KP4 is the Orchestrator pattern applied to building an application: a person rules on what an assistant drafts, a gap gets an owner, nothing generated is edited by hand.

| KP4 page | What it teaches | KP0 link to add |
|---|---|---|
| README, prerequisites | "About fifteen minutes, once" | KP0 minimum path for all; Module 3 before modules 3–5 |
| 1.5 Who writes, who checks, who accepts | The roles of the method | 3.3 — the same separation, applied to assistant sessions |
| 4.5 Reviewing the model | Assumptions and losses | 3.2 (sensors) and 3.6 (a gap is a finding with an owner) |
| 5.2 Nothing generated is edited by hand | Single source | 3.6 — state in files, not in a chat or a hand edit |
| 6.1 What to require from a supplier | The deliverables | 3.3 — require the trail: instruction, report, review |
| 6.3 Read where the work stands from the work | Progress from the work | 3.6 — "status is produced, never remembered" (OM 6.1): the same rule |
| 6.4 The AI assistant at every step | Assistant drafts, person rules | Module 3 as a whole; this page becomes KP4's applied version of it |
| "With the kit: sdd-kit" lines | The skills | 2.3 for what a skill is; 3.3 for why each skill's check is the person's verdict |

**KP1–KP3 — lighter.** Each tip is a layer 1 prompt, so every KP gets one line in its "How to use this guide" section saying so. Then a few targeted links:
- KP1 Module 3 (EA repository, tooling and governance; the single-source discipline) → KP0 3.6.
- KP2 plays 2.2–2.5 (`gif-decree-draft`: "drafted from published legal models, never from imagination") → KP0 2.3: a skill brings the source in first.
- KP3 build pack (`KP3-build-pack/`: runbook, prompts, acceptance) → KP0 3.3, as an example of work handed over with its test.

**The Orchestrator Manual** gets one line in its "About this manual" pointing to KP0 Module 3 as the introduction, and KP0 points back to the manual for running the tool.

---

## 9. The folder

Following the other KPs, but lighter: KP0's videos are not built by the deck pipeline, so there are no build scripts or decks.

```
KP0-AI/
├── README.md                       what KP0 is and what is here
├── ai-knowledge-product-layers.md  the concept note (kept)
├── KP0_Plan_v0.1.md                this plan
├── sources.md                      every source, with publisher, date and tier, links checked
├── gitbook/                        the guide pages, written as GitBook markdown
│   ├── README.md                   KP0's opening page
│   ├── module-0/ … module-3/       README.md and one page per subtopic
│   └── judgement.md                the reference page
├── examples/                       Progressa worked examples (a prompt before/after; an instruction, report and review)
├── templates/                      a project brief; an instruction and review instruction for a plain chat
└── videos/
    ├── README.md                   who records what, the camera rules
    └── briefs/                     one page of talking points per video
```

---

## 10. Decisions needed

1. **Is KP0 an ITU/Giga deliverable or FiscalAdmin's own?** This decides the compliance rules (a person on screen, §4.3), the ITU template, the QA gates (`kp-bundle-qa`), and whether Progressa is the example country. Recommended: your own product, published beside the four KPs, using Progressa so the examples line up.
2. **Which Orchestrator edition KP0 quotes.** Recommended: merge the newer mechanics of the Desktop edition (21 Oct) into the Progressa edition (v0.3) as v0.4, and quote v0.4.
3. **GitBook placement.** Recommended: KP0 as its own space, listed first in Start here, with the Judgement page as the one link every KP uses.
4. **Tool neutrality in layers 2 and 3.** Recommended: pattern tool-neutral, demonstrations in Claude, labelled as such, model names only as "the present example".
5. **Who records which video**, and whether the stories in section 6 are ones you and Aare actually have.

---

## 11. Order of work

1. Settle the decisions in section 10.
2. Write `sources.md` and re-check every link (the start-here pages last checked them on 7 September).
3. Write Module 1 and the Judgement page, mostly from the two moved pages. This is enough to switch the KP links over.
4. Switch the links: the stubs in Start here, the renderers, regenerate the KP guides.
5. Write Module 3 from the Orchestrator Manual (after the v0.4 merge), then the KP4 links.
6. Write Module 2 and Module 0.
7. Write the video briefs; record; publish.
8. Review the whole: every claim against its source, every link opened, and a reader outside the team runs the minimum path.
