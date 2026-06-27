# Competency matrices and the fresh-eyes brief

The competency matrix is the heart of curriculum QA: it states the KP's **learning outcome**, decomposes it into
the competencies a graduate must have, and gives each competency the signal terms the analyzer counts. A
competency the corpus barely carries is a coverage gap — the place a defect like KP1's missing target
architecture hides. The machine copy lives in `scripts/curriculum_qa.py` (`MATRICES`); this is the human copy and
the place to think before editing the script. Keep the two in step.

## KP1 — Government Enterprise Architecture
**Outcome:** a learner can build a full national EA with a **target architecture** and a **roadmap**.

| Competency | What it proves | Signal terms (examples) |
|---|---|---|
| Why EA / the problem | motivates the work | fragmentation, duplicate, silo, rebuild |
| What EA is (BDAT) | the four-part picture | bdat, business, data domain, application, technology |
| PAERA anchoring | not invented from scratch | paera, metamodel, principles, taxonomy |
| Discover / assess current state | the AS-IS | discover, assess, current state, as-is, maturity, gap analysis |
| **Design target architecture** | the TO-BE — *the KP1 gap* | target architecture, to-be, target state, integration map |
| Roadmap / sequencing | the plan | roadmap, sequence, wave, investment plan |
| Lifecycle / governance | how it runs | lifecycle, EA board, sign-off, govern |
| Re-use / whole-of-government | the structural argument | re-use, reuse, whole-of-government, building block |

## KP2 — Government Interoperability Framework
**Outcome:** a learner can build a full national interoperability framework ending in a **running once-only exchange**.

| Competency | Signal terms (examples) | Notes |
|---|---|---|
| The four layers | four-layer, technical/semantic/organisational/legal layer | the spine |
| Legal / decree | decree, mandate, lawful basis, draft article, once-only obligation | Topic 2 |
| Governance | operating authority, RACI, three tier, member obligation, working group | Topic 3 |
| Semantic layer | semantic map, code list, identifier, vocabulary, OneRoster, CEDS | Topic 4 |
| Technical / standards | OpenAPI, X-Road, standards portfolio, service contract, trust zone, mTLS | Topic 4 |
| Implementation / onboarding | four-phase, onboarding, member requirements, SLA, subsystem, access-control | Topic 5 |
| Demonstration / once-only | once-only, federation, cross-server, acceptance check, Linkup | Topic 5 |
| Operations | monitoring, anomaly, change control, production | Topic 6 |
| Sector portability | sector-portable, next sector | Topic 6 |
| AI plays | gif-decree-draft, gif-semantic-map, gif-openapi-gen, bb-config-gen | threaded |
| *Assess existing landscape* (gap-candidate) | existing systems, current landscape, baseline, point-to-point, legacy | consider |
| *Migrate existing integrations* (gap-candidate) | migrat-, retire, legacy link | consider |
| *Independent testing / IV&V* (gap-candidate) | IV&V, independent verification, test plan, negative check | consider |

The three gap-candidates are deliberately set low: their absence is a *prompt to decide* whether the topic is in
scope, not an automatic failure. (KP2's first run flagged *Migrate existing integrations* as absent — a real,
mild coverage decision: KP2 teaches building the new bus thoroughly but not retiring the old point-to-point links
the bus replaces.)

## KP1 + KP2 — the plan-to-build seam
**Outcome:** KP1 (plan) and KP2 (build the interoperability track) cohere as one programme.

| Competency | Signal terms | Why |
|---|---|---|
| Hand-off: integration map → use-case catalogue | integration map, use-case catalogue | KP1 M4.5 feeds KP2 Topic 1 |
| Shared: PAERA / once-only / four-layer / re-use / building blocks | paera; once-only; four-layer; whole-of-government, reuse; building block | same concept, same definition in both |
| Lifecycle vs four-phase (must be distinguished) | lifecycle; four-phase | KP1's 5-phase EA lifecycle ≠ KP2's 4-phase implementation plan; a learner must not conflate them |

## Adding a KP (KP3, KP4)
Add a matrix to `MATRICES` keyed `kp3` / `kp4`, decompose its outcome into competencies with signal terms, mark
the genuine gap-candidates, and add the cross-KP matrix that pairs it with the KP it depends on (e.g. `kp2-kp3`
for the once-only-exchange → DPI-building-blocks hand-off). Re-run and tune the rules against the first findings.

## The fresh-eyes subagent brief

After the analyzer, launch a subagent (`Explore` or `general-purpose`) with a brief like:

> Read these KP module Markdown files [list the `.md` paths]. You are doing a curriculum review, not a line edit.
> Assess and report (findings only, no rewrite): (1) **Coverage** — toward the stated outcome "[outcome]", what
> is taught thoroughly, what is only mentioned, and what is missing? (2) **The weakest link** — which single
> competency is least convincingly taught? (3) **Contradictions** — anything two modules (or two KPs) state
> differently: a term, a number, a definition, a citation. (4) **Hand-off** — does each module set up the next,
> and (for a cross-KP review) does KP-A's output feed KP-B's input cleanly? (5) **Persona/flow** — does the
> register arc read cleanly and does each module stand alone? Return a short, specific list.

Merge its qualitative findings with the analyzer's. The script finds what is countable; the subagent finds what
must be read. Both are needed.

---

*Maintained alongside `kp-curriculum-qa/SKILL.md` and `scripts/curriculum_qa.py`. Update the matrices as KPs are added.*
