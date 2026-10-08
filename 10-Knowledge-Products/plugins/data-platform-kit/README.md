# data-platform-kit — the data-platform skills for KP3 and KP2

This plugin is a set of skills for building and running a government data platform: bringing a
legacy source in, modelling it, checking its quality, cataloguing what each field means, and serving
it to others through dashboards, APIs and feeds — each step gated, each output committed. It is for
the team that builds the platform behind KP3's registers and KP2's data exchange: the ministry's data
engineers and stewards, its supplier, or an AI assistant working for either. A manager who only
accepts the work does not need it; the course pages and their prompts serve the manager.

Every skill pairs a short guide of judgement and guardrails (`SKILL.md`) with a deterministic Python
program that does the error-prone mechanics. Every example is set in Progressa, the fictional country
of the courses; the Progressa case is simulated, and every body, system, table and figure in it is
invented.

## What is inside

| Folder | What it holds |
|---|---|
| `skills/` | Thirteen skills, one folder each: `SKILL.md`, the program it runs (`scripts/`) and what it reads (`references/`). |
| `references/data-quality-framework/` | The Data Quality Framework the skills apply — six dimensions, eight lifecycle stages, the control catalogue `DQC-*`, governance and phasing — as Markdown, with its figure. |
| `kit/golden-path/` | The whole chain run end to end on Progressa inputs: `run_golden_path.sh`, its input specs (`inputs/`), the School Census fixture (`fixtures/school-census/`, a synthetic stand-in for a legacy PowerBuilder module and its schema inventory), and the platform repository it produces (`platform-repo/`). |

Every path a skill names is written relative to the skill's own folder: the framework is at
`../../references/data-quality-framework/`, the golden path at `../../kit/golden-path/`, and another
skill at `../<skill>/`. Nothing in the plugin names a path on the author's machine, so the folder
works wherever it is placed.

## The skills, and the KP3 and KP2 pages each serves

The pages are named by course and subtopic; the path beside each is relative to that course's folder
in the courses' GitBook (`gitbook/kp3/` or `gitbook/kp2/`). A dash means no page of that course asks
for the skill's work.

| Skill | What it helps the team do | KP3 — Education DPI Roadmap | KP2 — Government Interoperability Framework |
|---|---|---|---|
| `dataplatform-architecture-principles` | Settle a weighty choice by citing a numbered principle, and record it as a decision record | 6.5 *Sourcing each block without lock-in* (`module-6/6-5.md`); 6.6 *Governance that keeps shared blocks shared* (`module-6/6-6.md`) | 3.6 *Governance as living configuration* (`module-3/3-6.md`) |
| `dataplatform-dev-workflow` | Say which work an assistant can do offline and which must run on the live stack, with commands for Windows and macOS | 5.4 *The acceptance checks: from "set up" to "proven"* (`module-5/5-4.md`); 6.9 *The AI plays, step by step* (`module-6/6-9.md`) | 4.6 *Put a real data source on the bus — the Giga case* (`module-4/4-6.md`): practise the pipeline before a live registry |
| `repo-scaffold` | Lay out the platform's repository and the one git workflow every skill ends with | 3.3 *Generating the register's schema* (`module-3/3-3.md`) | 3.6 *Governance as living configuration* (`module-3/3-6.md`) |
| `onboard-source` | Profile a legacy source before any DDL, load it into Bronze through gates, and reconcile every load | 3.2 *Five tiers between a messy file and a trusted record* (`module-3/3-2.md`); 3.6 *Account for every load* (`module-3/3-6.md`) | 4.6 *Put a real data source on the bus — the Giga case* (`module-4/4-6.md`) |
| `import-schema-to-catalogue` | Declare a source's structure to dbt and the catalogue, and turn code tables into controlled vocabularies | 3.3 *Generating the register's schema* (`module-3/3-3.md`) | 4.4 *Generate the semantic map* (`module-4/4-4.md`) |
| `build-dbt-model` | Build staging, golden-record and mart models with join contracts | 3.1 *What a register is for: one authoritative record* (`module-3/3-1.md`); 3.2 (`module-3/3-2.md`) | 4.6 (`module-4/4-6.md`) |
| `add-dq-checks` | Add the six-dimension quality tests, tagged so they roll up to one score | 3.4 *Quality checks that stop a bad row* (`module-3/3-4.md`); 6.8 *Keep the foundation healthy and safe* (`module-6/6-8.md`) | 4.6 (`module-4/4-6.md`): silver is cleaned and validated, bad records flagged |
| `legacy-module-to-openmetadata` | Recover which tables and columns a legacy module uses, and what they mean, from its source code | 3.3 (`module-3/3-3.md`) | 4.4 *Generate the semantic map* (`module-4/4-4.md`) |
| `verify-catalogue-semantics` | Take each description from DRAFT to VERIFIED on evidence, and gate what is not | 1.6 *Verify before you score* (`module-1/1-6.md`); 3.3 (`module-3/3-3.md`) | 4.4 (`module-4/4-4.md`) |
| `build-superset-dashboard` | Build a dashboard whose metrics are defined once, with its roles and alerts | 6.8 *Keep the foundation healthy and safe* (`module-6/6-8.md`): the operational indicators read every month | — |
| `expose-api` | Publish a read API whose contract and SQL come from one spec, with roles | 3.7 *The register as a service others can use* (`module-3/3-7.md`) | 4.5 *Generate a service contract* (`module-4/4-5.md`); 4.7 *Wire a service onto the bus* (`module-4/4-7.md`) |
| `onboard-consumer` | Serve the next consumer from what the platform already holds, and plan only the gaps | 4.6 *Reuse is the return on planning* (`module-4/4-6.md`); 5.6 *What the next services can now use* (`module-5/5-6.md`) | 5.4 *Admit a member to the bus* (`module-5/5-4.md`) |
| `production-readiness-check` | Turn "it is in production" into a checklist that passes or names what is missing | 5.4 (`module-5/5-4.md`); 6.8 (`module-6/6-8.md`) | 5.7 *From demonstration to production* (`module-5/5-7.md`) |

**The course's tiers and the kit's layers.** KP3 3.2 names five tiers — raw, bronze, staging, silver
and gold. In the kit, the course's raw and bronze tiers are the kit's Bronze: the gated load and its
checks (`onboard-source`, `add-dq-checks`). The course's silver and gold are the kit's `stg_`/`int_`
and `mart_` layers (`build-dbt-model`). The person's approval at the course's staging tier is not a
program of the kit: it stays a person's act.

## Before you start

- **An assistant that runs skills and programs.** Claude Code, or the Claude app with code execution
  turned on. A chat without code execution can read the skills but cannot run their programs.
- **Python 3.** The programs use the standard library only; PyYAML (`pip install pyyaml`) is used when
  present, and they fall back to JSON, which YAML readers accept. The golden path's one inline step
  needs PyYAML.
- **The platform itself** — ClickHouse, dbt, OpenMetadata, Superset — only for the steps that run on
  the live stack. `dataplatform-dev-workflow` says which steps those are, and its `devcheck.py` reports
  what a workstation has.

## How to install it

**Claude Code, for one session.** Point Claude Code at this folder:

    claude --plugin-dir /path/to/data-platform-kit

**Claude Code, to keep it.** The plugin is installed through a marketplace file that lists it. The
kit's maintainer adds this folder to the marketplace file of the repository learners install from; a
learner then adds that marketplace once (`/plugin marketplace add <the repository>`) and installs the
plugin from it (`/plugin install data-platform-kit@<the marketplace>`).

**The Claude app.** Upload the whole folder as one plugin, where your plan allows plugins. A single
skill folder uploaded alone runs its own program, but loses what it points to outside its folder: the
framework document (`onboard-source`, `add-dq-checks`, and the principles register of
`dataplatform-architecture-principles`), the git guide and the conventions in `repo-scaffold`
(`onboard-source`, `dataplatform-dev-workflow`, `build-dbt-model`), and the fixture in
`kit/golden-path/` (`legacy-module-to-openmetadata`).

**Check that it works.** From this folder:

    bash kit/golden-path/run_golden_path.sh
    python3 skills/dataplatform-architecture-principles/scripts/principles.py --list

The first runs the programs of ten skills end to end on the Progressa inputs and ends with
`GATE PASS — 0 blocker(s), 0 warning(s)`; it writes into `kit/golden-path/out/` and leaves the
committed example beside it as it is. The second lists the fourteen principles.

## Alone, or beside ea-plays and sdd-kit

data-platform-kit works alone. It also works beside `ea-plays`, the learner kit of the series, and
`sdd-kit`, the method's skills for KP4: the three share no skill name and none calls another.
ea-plays carries the helpers for the AI usage tips of the courses, written for the manager; sdd-kit
carries the skills for writing the documents of a service; data-platform-kit carries the skills for
building the data platform the registers and the exchanges stand on.

## How this copy was made

On 8 October 2026, from the author's data-platform skills, for KP3's and KP2's learners:

- **The skills** are the thirteen skills of the source pack, with every path made relative to the
  plugin. Their method and their gates are unchanged, and so is their programs' logic, except that the
  legacy-code extractor's heuristics no longer carry the column names of the source's client schema,
  and also read the naming convention of the kit's own fixture. The source was written on
  the author's client work: every name, system, person, figure and path of that work was taken out,
  and every example that used its case now uses Progressa's — the school, learner and teacher registers
  of PEMIS, Progressa's education management information system.
- **The framework document** was converted from its Word edition with pandoc and rewritten for
  Progressa; its dimensions, stages, controls, governance and phasing are kept. Its figure was redrawn.
- **The worked examples** — the golden path's inputs, the School Census fixture and the finished
  enrichment in `legacy-module-to-openmetadata` — were written new for Progressa; the golden path's
  `platform-repo/` is the output of `run_golden_path.sh`, not written by hand.
- **Left out:** the source pack's own guides (a developer's guide, a hand-over brief, an index and a
  content design), which no skill reads.

Under which licence, and in whose name, this plugin is published is ITU's question and is not settled
here.
