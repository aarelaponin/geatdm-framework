# tender-kit — from an interoperability framework to a tender, for KP2 and KP3

KP2, *Building a Government Interoperability Framework*, says in subtopic 1.1 that once the
framework exists, "its rules go into every new tender as mandatory requirements", and that "the
platform itself is bought as a working, accepted result — with acceptance tests, a warranty and
penalties for delay — not as a consulting exercise". KP3, the *Education Digital Public
Infrastructure Roadmap*, says in subtopic 6.5 that sourcing decides who builds each block and that
the contract decides whether you can leave later. This plugin is the buyer's side of that step: ten
skills that take a framework (what the country *should* have) and the country's own architecture
(what it *has*) to a tender package ready for the authority that issues it.

The plugin is for the team in the buying unit that writes the tender — a digital government
agency, a ministry's ICT unit, or an assistant working for either — together with its procurement
officer and its lawyer. The skills draft. The procurement officer, the lawyer and the funder decide
what the documents finally say.

## What is inside

| Folder | What it holds |
|---|---|
| `skills/` | Ten skills, one for each step from the choice of contract to the covering memorandum (the table below). |
| `references/progressa-tender-case.md` | The case every skill's example is set in: Progressa, the fictional country of the courses, buying the first lot of its data-exchange platform, Linkup, with the first education exchanges. Every fact is marked with the course page it comes from, or as added for this kit. |
| `references/progressa-requirements.json` | Progressa's Statement of Requirements as data: one entry for each area, with its layer, title, intent, standard, acceptance basis and obligations. `framework-to-sor` hands its output on in this shape, and `is-rfp-builder` and `traceability-matrix-builder` read it. |
| `references/rfp-skeleton-progressa.md` | The nineteen sections of the request for proposals, filled for Progressa. |
| `references/annex-pack-progressa.md` | The Bid Data Sheet and Annexes C to G, filled for Progressa. |
| `references/traceability-matrix-progressa.md` | The five sheets of the traceability matrix, filled for Progressa; sheet 5 is generated from the requirements file. |

Every path a skill names is written relative to the skill's own folder: the references are at
`../../references/`. Nothing in the plugin names a path on anybody's machine, so the folder works
wherever it is placed. The plugin holds no program: every skill returns text.

## The pipeline

```
procurement-vehicle-selector ─┐
national-baseline-extractor ──┤
                              ├─> framework-to-sor ─> scope-boundary-setter ─┐
                              │                                              │
local-participation-designer ─┘                                              │
                                                                             v
                            is-rfp-builder ─> annex-pack-builder ─> traceability-matrix-builder
                                                                             │
                                                                             v
                                                    procurement-qa ─> transmit-package
```

## Which module of KP2 and KP3 each skill serves

Pages are named by their number and title in the course sites. No AI usage tip of KP2 or KP3 writes
the tender itself; these skills are the learner's next step after the tips named.

| Skill | What it does | KP2 | KP3 |
|---|---|---|---|
| `procurement-vehicle-selector` | Chooses the kind of contract from what the buyer is owed, a result or advice, and records the choice and the option rejected | 1.1 *Why interoperability can't be bought, only built*; 5.1 *Plan the build in four phases* (the procurement plan) | 6.5 *Sourcing each block without lock-in* |
| `national-baseline-extractor` | Draws the country's integration map, adopted standards, data rules, identity keys and system inventory from its own architecture | 1.5 *The Use-Case Catalogue*; 4.1 *Place every component — the four functional layers*; 4.3 *Adopt the standards portfolio* | 1.4 *Start at the desk: a first assessment from public sources, with AI* |
| `framework-to-sor` | Turns the framework's rules into numbered, verifiable obligations of the supplier, citing only published standards | 1.1; 4.3; 5.1 (the framework's rules as mandatory requirements) | 2.2 *The published specification, and how to judge a product against it* (name the edition in the tender) |
| `scope-boundary-setter` | States what the tender builds and what it only connects to | 4.1; 5.1 (one lot per domain) | 1.8 *Foundational blocks and the sector's own*; 6.5 |
| `local-participation-designer` | Lets national and smaller firms compete without detaching the critical capability from a liable member | 5.1 (the procurement plan and the workforce plan) | 6.5 (build in-house, outsource or partner) |
| `is-rfp-builder` | Writes the request for proposals, section by section, around the Statement of Requirements | 1.1; 5.1 | 6.5 (the four checks against lock-in in every tender); 2.2 |
| `annex-pack-builder` | Writes the Bid Data Sheet and the annexes: the quality floor, the inventory, acceptance, service levels and the two agreements | 3.4 *Member obligations*; 5.2 *State what a member must have — the Member Requirements*; 5.3 *Make 'connected' mean 'dependable' — the SLA*; 5.4 *Admit a member to the bus* | 5.4 *The acceptance checks: from "set up" to "proven"* |
| `traceability-matrix-builder` | Ties each requirement to the clause that imposes it and the test that proves it, with the verification log | 1.5 (the exchanges); 5.9 *Keep the documents honest — the consistency cross-check* | 5.4 |
| `procurement-qa` | Checks that the documents of the package agree and meet the funder's rules | 5.9 | 6.5 (check a draft tender or contract for lock-in); 6.7 *Validate, revise, adopt* (check that the documents still agree) |
| `transmit-package` | Drafts the buying unit's covering memorandum and email to the authority and the funder | 5.1 (each phase ends in a gate where the funder confirms) | 6.7 (the summary of changes and the cover note) |

## The doctrine the skills carry

1. Match the vehicle to the obligation: a result is bought with a supply contract, not a consulting
   Terms of Reference.
2. Never cite an unpublished source; take its substance into the requirements and cite only
   published standards.
3. A requirement is an obligation of a named actor ("the Supplier shall…"), specific to the country
   and the platform, and verifiable.
4. Keep the rationale: an *Intent* for each area of requirements.
5. Separate the checker from the builder: the independent verification agent is hired separately,
   and the buyer owns acceptance.
6. Build the platform; connect to the rest (reuse first).
7. Put teeth on the result: Operational Acceptance, a performance security, a warranty, damages for
   delay.
8. Enable local capability without breaking delivery: the critical capability sits with a liable
   member, and skills transfer is scored on substance.
9. Mind the funding cliff: finish inside the funder's window, and move the running cost to the
   national budget after it.
10. Consistency is a gate, not a hope: check every cross-reference before issuance.

The kit is funder-parametrised: the vehicle, the evaluation method and the contract machinery
differ by funder (a development bank, the EU, or a national procurement law). Take the funder as an
input and name its own documents and methods.

## Before you start

- **An assistant that runs skills.** Claude Code, or the Claude app where your plan allows skills or
  plugins. No program is needed: every skill answers in text.
- **Your own two inputs.** The framework or reference architecture (the "should") and the country's
  own architecture or baseline (the "is"). Everything else the skills shape for you.
- **A Word or Excel file, if you need one.** The skills return text. To turn an accepted text into a
  Word document or an Excel workbook, use a document skill, for example Anthropic's skills for Word
  and Excel.
- **Nothing personal or confidential** is pasted into an assistant. Use posts, not names.

## How to install it

**Claude Code, for one session.** Point Claude Code at this folder:

    claude --plugin-dir /path/to/tender-kit

**Claude Code, to keep it.** The plugin is installed through a marketplace file that lists it. The
kit's maintainer adds this folder to the marketplace file of the repository learners install from;
a learner then adds that marketplace once (`/plugin marketplace add <the repository>`) and installs
the plugin from it (`/plugin install tender-kit@<the marketplace>`).

**The Claude app.** Upload the whole folder as one plugin, where your plan allows plugins. A single
skill folder uploaded alone still works, but loses the Progressa examples and templates in
`references/`, which every skill points to.

**Check that it works.** Ask, for example: "Which procurement vehicle fits Progressa's Linkup lot?"
The answer should come from `procurement-vehicle-selector` and recommend a supply contract with
rated criteria, recording the consulting option as rejected.

Then ask `procurement-qa` to check the four templates in `references/`. It should return a clean
result: the documents agree, and the bracketed values are listed as the buyer's open decisions,
which they are by design. The faults in the skill's worked example are invented, to show what the
checks catch; the shipped templates do not have them.

## Alone, or beside ea-plays and sdd-kit

tender-kit works alone. It also works beside `ea-plays`, the learner kit of the series, and beside
`sdd-kit`, the method kit of KP4: the three share no skill name, and no skill of tender-kit calls a
skill of either. ea-plays carries the helpers for the AI usage tips of the courses, written for the
manager; sdd-kit carries the skills that write a service's specification; tender-kit carries the
buyer's skills that turn a framework into a tender.

## How this copy was made

On 8 October 2026, from the author's own buyer-side skills for interoperability tenders:

- **The skills** are those ten skills, kept as ten, with their method and doctrine unchanged.
- **Their examples** are set in Progressa. Every example the source drew from the author's earlier
  client work was replaced by Progressa's case or cut.
- **The bundled files were not copied.** Three source skills carried example programs and a
  requirements file built for an earlier client's tender. In their place this copy carries the
  four Progressa templates in `references/`, with no name, system or figure of that case, and the
  three skills now return text instead of Word and Excel files. The policy values of the annex pack
  are the course's own where a course page is cited, and placeholders in square brackets otherwise,
  for the buying unit to set from its funder's standard procurement document.
- **The covering memorandum** is written from the buying unit's point of view.

Status: solid first drafts, not yet tested against real phrasings. Under which licence, and in whose
name, this plugin is published is not settled here.
