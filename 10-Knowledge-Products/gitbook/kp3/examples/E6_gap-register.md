---
description: "Step 5 produced findings, domain by domain. This step turns each finding into a gap, that is, the distance between what exists and what the country needs."
---

# E6 — The gap register and its priorities, for Progressa

**Method step:** 6 of 9 — Consolidate the gaps and set their priority

**Public anchor:** PAERA version 1.0 (GovStack, 2024), section 3.3.3, its two-tier order (target the foundational elements; make some quick wins), and section 5.4, step 5, which ranks recommendations by their impact on service delivery, operational efficiency and strategic goals

**Simulated case:** This is a simulated case for Progressa, a fictional country; every institution, name and figure in it is invented.

**Form of this example.** The outline of the gap report and the rule for setting priorities are the team's method and name no country. The filled register is rebuilt for Progressa.

## What this step does

Step 5 produced findings, domain by domain. This step turns each finding into a gap, that is, the distance between what exists and what the country needs; reads the gaps across domains; and sets an order of priority that the roadmap of step 7 will follow. Every gap names the finding or findings it comes from, so that a reader of the roadmap can walk back to the evidence.

## The outline of the gap report

1. **Purpose and sources.** What the report is for, and the domain reports it draws on.
2. **The gap register.** One row per gap, with the findings it traces to.
3. **Patterns across domains.** Gaps that share a cause or block one another.
4. **Priorities.** The criteria, the scores, and the matrix of impact against effort.
5. **Development priorities by domain.** A short paragraph per domain.
6. **What the roadmap must address.** The first-band gaps and their dependencies, handed to step 7.

## The rule for setting priorities

Each gap is rated from 1 (low) to 3 (high) on three criteria. The ratings are added to a score between 3 and 9.

| Criterion | 3 | 2 | 1 |
|---|---|---|---|
| **Impact** on service delivery, operational efficiency and strategic goals | Blocks several planned services | Blocks one service or slows several | Inconvenient, blocks nothing |
| **Urgency** | Something already planned waits for it | Needed within two years | Needed later |
| **Feasibility** | Can be done with existing bodies, law and budget | Needs one new decision, such as a regulation under an existing act, or modest funds | Needs new law or an amendment passed by parliament, large funds or a new body |

**Bands.** A score of 8 or 9 is first band, 6 or 7 second band, 5 or less third band. **Dependencies** decide the order inside a band: a gap that another depends on comes first. **Across bands**, a gap that a higher-band gap depends on keeps its own band and score, but is scheduled no later than the gap that depends on it; where it is slow to close, such as a gap that needs new law, it is started first. A gap marked **quick win** can be closed within six months with what already exists; following PAERA's two-tier order, the roadmap pairs each foundational gap with at least one quick win that shows results early.

## Progressa's gap register (illustrative)

| Gap | Domain | The gap | Traces to findings | Impact | Urgency | Feasibility | Score | Band | Depends on | Quick win |
|---|---|---|---|---|---|---|---|---|---|---|
| G-01 | GOV | No legal basis for a learner register or for sharing learner data | F-GOV-1 | 3 | 3 | 1 | 7 | Second | — | no |
| G-02 | GOV | No joint body to decide education's shared infrastructure with PDGA | F-GOV-2 | 2 | 3 | 3 | 8 | First | — | yes |
| G-03 | GOV | No recurrent budget for running shared education systems | F-GOV-3 | 3 | 2 | 2 | 7 | Second | G-02 | no |
| G-04 | GOV | No rules for children's data in public registers | F-GOV-4 | 3 | 2 | 2 | 7 | Second | — | no |
| G-05 | DAT | No authoritative learner record, and no learner-level data for planning | F-DAT-1, F-DAT-2 | 3 | 3 | 2 | 8 | First | G-01, G-06, G-11 | no |
| G-06 | DAT | No common school identifier | F-DAT-4, F-ACC-1 | 2 | 3 | 3 | 8 | First | — | yes |
| G-07 | DAT | No data-quality rules or data steward for education records | F-DAT-3 | 2 | 2 | 3 | 7 | Second | — | no |
| G-08 | INT | The ministry of education, MoEYS, is not on the national exchange | F-INT-1 | 2 | 3 | 3 | 8 | First | — | yes |
| G-09 | INT | Education systems exchange spreadsheets instead of calling services | F-INT-2 | 2 | 1 | 2 | 5 | Third | G-05, G-08 | no |
| G-10 | ACC | Parents without a smartphone cannot use digital services | F-ACC-2 | 2 | 2 | 2 | 6 | Second | G-05 | no |
| G-11 | IDN | No link from a learner's record to the national identity | F-IDN-1 | 3 | 2 | 2 | 7 | Second | G-01, G-08 | no |
| G-12 | IDN | No education service checks a person through PNIA's sign-in | F-IDN-2 | 2 | 2 | 3 | 7 | Second | G-08 | no |
| G-13 | INT | No Payments block on the national exchange through whose payer bank education payments reach PayPro | F-INT-3 | 2 | 1 | 3 | 6 | Second | G-08 | no |
| G-14 | ACC | The connectivity of most schools is unknown | F-ACC-1 | 1 | 2 | 3 | 6 | Second | — | yes |

## Patterns across domains

**One missing record holds back three domains.** The missing authoritative learner record (G-05) is a data gap, but it is also why identity cannot be reused (G-11, G-12) and why exchanges stay on spreadsheets (G-09). Closing it unlocks the most.

**The ministry of education is outside infrastructure that already runs.** PNIA's sign-in and Linkup both work today; the ministry of education, MoEYS, uses neither (G-08, G-12). This is the cheapest kind of gap to close, because it asks for membership and configuration, not for a new system.

**The law and the budget come before the build.** The register cannot be filled lawfully without G-01 and G-04 closed, and it will not outlive its first funding without G-03. These three gaps belong to the governance track that opens every wave of the roadmap.

## The matrix of impact against effort (illustrative)

Effort is read as the inverse of feasibility.

| | Low effort (feasibility 3) | Medium effort (feasibility 2) | High effort (feasibility 1) |
|---|---|---|---|
| **High impact (3)** | — | G-03, G-04, G-05, G-11 | G-01 |
| **Medium impact (2)** | G-02, G-06, G-07, G-08, G-12, G-13 | G-09, G-10 | — |
| **Low impact (1)** | G-14 | — | — |

One gap scored 1 on feasibility: G-01, because the legal basis for the learner register is an amendment to the education act, which is new law and the slowest of all the gaps in the register to close. G-04 scored 2, because the rules for children's data are set by a regulation under the existing data protection act, which is one new decision. Every other gap can be closed with Progressa's existing bodies, given decisions and funds.

## Development priorities by domain

**Governance:** pass the legal basis and the rules for children's data; set up the joint body; secure a recurrent budget. **Access:** record school connectivity; open an assisted channel. **Digital Data:** make PLR the authoritative learner register, on one school identifier, with quality rules from the first day. **Interoperability:** put MoEYS and the Payments block on Linkup, the block reaching PayPro through its payer bank; replace spreadsheets with services once the register exists. **Digital Identity:** link learners to PNIA and check people through PNIA's sign-in.

## What the roadmap must address

The four first-band gaps, in the order their dependencies set: G-02, G-06 and G-08 (quick wins with no dependencies), then G-05. G-05 also depends on two second-band gaps, G-01 and G-11, so the rule for dependencies across bands brings both forward without raising their band. G-01 is started in the first wave, beside the three quick wins, because new law is the slowest to pass; G-11 is scheduled beside G-05. E7 shows the roadmap that follows.
