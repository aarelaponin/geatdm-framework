# joget-kit — building government services on Joget DX, for KP2 and KP3

This plugin holds thirteen skills for building a government service on the low-code platform
Joget DX, from the requirements to the running, verified application, including the GovStack
Registration building block. It serves the learners of two courses who build on Joget:
KP2, *Building a Government Interoperability Framework (GIF)*, and KP3, *Education Digital
Public Infrastructure (DPI) Roadmap*. KP3 has its registration service and its learner register
built on a product the build chooses; KP2's build pack keeps its member systems as mocks behind
stable contracts, the seam where a Joget application plugs in. Where that product is Joget DX,
these skills do the building.

The plugin is for the team that builds: the analyst, the developer and the person who deploys,
or an AI assistant working for them. A manager who only reads the courses does not need it;
the course pages and their prompts serve the manager.

## What is inside

| Folder | What it holds |
|---|---|
| `skills/` | Thirteen skills, each in its own folder with everything it reads and runs: `references/`, `reference/`, `scripts/`, `tooling/` or `evals/`. Every path a skill names is written relative to its own folder. |
| `.claude-plugin/plugin.json` | The manifest. |

There is no plugin-level `references/` or `kit/` folder, because no skill reads anything
outside its own folder. Nothing in the plugin names a path on anybody's machine: where a skill
needs something of yours, it names a placeholder (the table below).

## The delivery workflow the skills share

The skills hand work to each other in four stages. Generated artefacts are never edited by hand:
a fault goes back to the specification or to the generating skill, and the artefact is
generated again.

| Stage | What happens | Skills | What it produces |
|---|---|---|---|
| 1. Architecture | The building block's components: entities mapped to a reference data model, a state machine for each case, the split between configuration and plugins, interface contracts, and the features | `joget-component-architect` | The Component Architecture Document (CAD), and gate G1, "Architecture Done" |
| 2. Specification | Each feature's requirements checked for completeness and turned into specifications the generators read | `joget-req-analyst` | Form, master-data and plugin specifications; the feature's FIS (its traceability, rules, decisions, settings and generation order); its acceptance tests; gate G2 |
| 3. Generation | The application's artefacts, generated from the specifications | `joget-form-gen`, `joget-datalist-gen`, `joget-userview-gen`, `joget-workflow-gen`, `joget-dashboard-gen`, `joget-jasper-report`, `joget-plugin-dev` | Forms, lists, navigation, processes, dashboards, reports and plugins |
| 4. Deploy and verify | A pre-flight check, the import in dependency order, then the acceptance tests against the stored data | `joget-deploy`, `joget-db-inspect` | The running application; a TRACE.md that records which artefact went to which instance on which date |

`joget-instance-setup` prepares the Joget installations the fourth stage deploys to.
`regbb-integration` adds the GovStack Registration building block: the channel contract
emitted from the application model, never written by hand.

## Which part of KP2 and KP3 each skill serves

Each row names the course page whose work the skill does on Joget DX.

| Skill | What it helps you do | KP3 — Education DPI Roadmap | KP2 — Building a GIF |
|---|---|---|---|
| `joget-component-architect` | Design the components of a building block before any form is specified | 2.5 *The officer decides, and the record is written* (the states of an application); 3.1 *What a register is for: one authoritative record*; 3.3 *Generating the register's schema* | 4.4 *Generate the semantic map* (entities mapped to a shared model) |
| `joget-req-analyst` | Turn a brief or requirements into specifications and acceptance tests | 2.3 *Generating the registration service*; 3.3 *Generating the register's schema* | — |
| `joget-form-gen` | Generate the application's forms: screens, fields and field rules | 2.3 *Generating the registration service*; 2.4 *Checks before the officer decides* (rules on each field) | — |
| `joget-datalist-gen` | Generate lists, filters and list-based reports | 2.5 *The officer decides, and the record is written* (each role's list of files) | — |
| `joget-userview-gen` | Generate the navigation, menus and who may see which menu | 2.5 *The officer decides, and the record is written*; 3.7 *The register as a service others can use* (each role sees no more than it may) | — |
| `joget-workflow-gen` | Generate the processes: approve, reject, send back, escalate | 2.5 *The officer decides, and the record is written*; 5.2 *Who puts the steps in order: contracts, and the block that calls them* | — |
| `joget-dashboard-gen` | Build dashboards and indicator tiles natively | 6.8 *Keep the foundation healthy and safe* (indicators read every month, quarter and year) | — |
| `joget-jasper-report` | Write printable reports and exports | 3.6 *Account for every load* (the reconciliation, as a report an auditor can read) | — |
| `joget-plugin-dev` | Write the plugins configuration cannot express: checks against another source, connections, APIs | 2.4 *Checks before the officer decides* (the comparison with the identity authority's record); 4.3 *Generating the identity connection*; 4.5 *Generating the payment connection* | 4.7 *Wire a service onto the bus* (the application's API behind its OpenAPI contract) |
| `joget-db-inspect` | Read what the application actually stored, and run the acceptance checks | 3.4 *Quality checks that stop a bad row*; 3.6 *Account for every load*; 5.4 *The acceptance checks: from "set up" to "proven"* | — |
| `joget-deploy` | Put the generated artefacts on an instance, in order, after a pre-flight check | 2.6 *The whole service as a description you can move*; 5.4 *The acceptance checks: from "set up" to "proven"* | The build pack, *What the build pack is*, section "Joget-free by design" (the seam a Joget application plugs into) |
| `joget-instance-setup` | Register and configure the Joget installations | *The build plan*, "What must be in place around the configurations" (a product for the Registration block and for the register) | The build pack, *What the build pack is*, section "Joget-free by design" (the host a Joget application has to fit on) |
| `regbb-integration` | Implement the GovStack Registration building block on Joget, its contract emitted from the model | 2.1 *What the Registration block does*; 2.3 *Generating the registration service*; 2.6 *The whole service as a description you can move*; 5.3 *The once-only registration, from beginning to end* | 4.5 *Generate a service contract* (the contract generated, never written by hand) |

The pages are in the courses' GitBook: KP3's under `kp3/module-<n>/`, its build plan at
`kp3/build-pack.md`; KP2's under `kp2/module-<n>/`, its build pack at `kp2/build-pack/`.

## Placeholders

Where a skill needs something that is yours, it names a placeholder. Replace it with your own.

| Placeholder | What it stands for |
|---|---|
| `<your-instance>` | The name of one Joget installation, as your instance register names it |
| `<your-instance-register>` | The one YAML file that describes your installations (for example an `instances.yaml` in a folder of your choice); `joget-instance-setup` writes it |
| `<host>` | The host of a database or a server |
| `<installation_path>`, `<joget_home>` | The folder of one Joget installation |
| `/path/to/jw-community` | Your clone of the Joget Community Edition source, `https://github.com/jogetworkflow/jw-community` |
| `<your.package>` | The Java package of a plugin you build or install yourself |
| `<api-builder-source>` | A copy of the source of Joget's API Builder plugin, if you hold one |
| `<joget-platform-plugins>` | The library of platform plugins a generated application binds; this kit does not ship it |
| `<your push step>` | However your project sends a userview to an instance |

## Before you start

- **An assistant that runs skills and programs.** Claude Code, or the Claude app with code
  execution turned on.
- **A Joget DX installation** to deploy to. Several skills name features of the Enterprise
  edition (`CrudMenu`, `SqlChartMenu`, `DashboardMenu`, `JasperReportsMenu`, `FormGrid`); each
  skill says which, and what the Community edition offers instead.
- **Python 3** for the two programs the skills run, `joget-deploy/scripts/preflight_validate.py`
  and `joget-jasper-report/tooling/embed_report.py`. Both use the standard library only.
- **Maven and a JDK** for `joget-plugin-dev`.
- **A clone of the Joget Community Edition source** (optional), to check a class or a property
  name the way the skills do.

## How to install it

**Claude Code, for one session.** Point Claude Code at this folder:

    claude --plugin-dir /path/to/joget-kit

**Claude Code, to keep it.** The plugin is installed through a marketplace file that lists it. The
kit's maintainer adds this folder to the marketplace file of the repository learners install from;
a learner then adds that marketplace once (`/plugin marketplace add <the repository>`) and installs
the plugin from it (`/plugin install joget-kit@<the marketplace>`).

**The Claude app.** Upload the whole folder as one plugin, where your plan allows plugins. A single
skill folder can also be uploaded alone: each holds everything it reads. A skill that hands work to
another works best with the whole kit.

**Check that it works.** In `skills/joget-deploy/scripts/`:

    python3 preflight_validate.py --help

It prints the program's usage.

## Alone, or beside ea-plays and sdd-kit

joget-kit works alone. It also works beside the two other kits of the series; the three share no
skill name, and nothing is copied from either.

- **ea-plays** carries the helpers for the AI usage tips of the courses, written for the manager.
- **sdd-kit** carries the specification-driven development method of KP4. Where it is installed,
  joget-kit uses it in three places: `regbb-integration` takes the application model the skill
  `sdd-kit/application-model` helps write; `joget-instance-setup` and `joget-deploy` name the
  deploy of sdd-kit's kit (`kit/DEPLOY.md` and `kit/tools/deploy_dx9.py` in sdd-kit). The rules
  for the screens officers use are sdd-kit's skill `sdd-kit/ux-enterprise-ruleset`.

## How this copy was made

On 8 October 2026, from the author's own thirteen Joget DX skills:

- **The skills** are copied with what they read and run, every path made relative to the skill's
  folder or replaced by a placeholder.
- **The examples.** Where a skill drew an example from an earlier build, this copy carries an
  example set in Progressa, the fictional country of the courses, in its place: PLR's learner
  registration, PHEQA's register of institutions and its application fee. Material that belonged
  to an earlier build and could not be made general was left out.
- **What is not here.** The skill that drives one particular build's feature loop is not part of
  this kit; the screens skill is sdd-kit's.

Under which licence, and in whose name, this plugin is published is not settled here.
