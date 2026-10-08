# The annex pack: the Progressa template

**Simulated case.** Progressa is the fictional country of the courses; every institution, system,
date and figure here is invented. The facts come from `progressa-tender-case.md`, and the
requirement identifiers from `progressa-requirements.json`, both in this folder.

**What this is.** The shape `annex-pack-builder` fills: the Bid Data Sheet and Annexes C to G of
Progressa's first lot. Every policy value is a recommended default marked **[confirm]**, which the
buying unit finalises against its procurement plan and the estimated contract value. Annex G is
structure and guidance for the buyer's lawyers, not legal text. The procurement officer, the lawyer
and the funder decide what the issued annexes say.

---

## Bid Data Sheet

The Bid Data Sheet sets the values the instructions to proposers leave open.

### A. General

| Ref | Item | Provision |
|---|---|---|
| 1 | Purchaser | The Ministry of ICT of Progressa, through PDGA, the Progressa Digital Government Authority |
| 2 | Financing | The National Learner Registry programme, under a World Bank human-capital programme [confirm the financing agreement's name and number] |
| 3 | Subject | Supply, installation, operation and transfer of Linkup in production, with the first wave of education exchanges (Lot 1) |
| 4 | Rules that govern | The funder's procurement rules for the financing, its standard procurement document for information systems, and this request for proposals [confirm editions] |
| 5 | Language | [confirm] |
| 6 | Currency | Progressa's currency and/or US dollars; the basis of conversion as the instructions say [confirm] |

### B. Method, evaluation and award

| Ref | Item | Provision |
|---|---|---|
| 7 | Method | Request for proposals for an information system, single stage, technical and price envelopes opened separately [confirm] |
| 8 | Award | Most Advantageous Proposal: the best combined technical and price score among proposals that pass Stage 1 |
| 9 | Weighting | Technical 70 per cent, price 30 per cent [confirm] |
| 10 | Minimum technical score | 70 of 100 [confirm] |
| 11 | Rated criteria (points) | Technical solution 35; approach and phasing 15; key personnel 20; operation and transfer 10; skills transfer and local capability 10; live demonstration 10. Total 100 |
| 12 | Live demonstration | Required and scored: the proposer runs a scenario PDGA supplies (a call with a grant answered, the same call without one refused) on its own installation; slides are not a demonstration |
| 13 | Stage 1, pass or fail | Eligibility; financial standing; at least one delivered national X-Road or equivalent platform; the mandatory requirements of Annex A; no conflict with the verification role |

### C. Eligibility, qualification and local participation

| Ref | Item | Provision |
|---|---|---|
| 14 | Joint ventures and subcontracting | Allowed and encouraged. The combined capacity of the members, and of named subcontractors, counts toward qualification, except for the capability in ref 17. Members are jointly and severally liable |
| 15 | Turnover | Average annual turnover over three years of at least 1.5 times the estimated annual contract value [confirm against the contract value] |
| 16 | Liquidity | Liquid assets, or access to them, covering at least two months of estimated cash flow [confirm] |
| 17 | The critical capability | At least one delivered national X-Road or equivalent platform, held by a jointly and severally liable member of the joint venture. A specialist firm may add to it only as a named, committed team member who cannot be replaced; it cannot hold it alone |
| 18 | Skills transfer and local capability | A plan for training, embedding and sustaining local and PDGA capability, scored under ref 11 on what it delivers, not on any firm's nationality. Open competition; no domestic preference beyond the funder's rules |

### D. Securities, payment and remedies

| Ref | Item | Provision |
|---|---|---|
| 19 | Proposal security | A proposal-securing declaration, or a security of 0.5 to 1 per cent of the estimated value [confirm] |
| 20 | Validity of proposals | 120 days from the submission deadline [confirm] |
| 21 | Performance security | 10 per cent of the contract price, valid until Operational Acceptance plus the warranty period [confirm] |
| 22 | Advance payment | Up to 10 per cent, against a guarantee for the full amount [confirm] |
| 23 | Damages for delay | 0.5 per cent of the delayed milestone's value for each week, capped at 10 per cent [confirm] |
| 24 | Service credits | As Annex F sets them, with the caps it sets |
| 25 | Warranty | 12 months from Operational Acceptance [confirm] |

### E. Timeline and submission

| Ref | Item | Provision |
|---|---|---|
| 26 | Duration | About 18 months from signature: 12 to the Pilot gate, six of operation, then transfer; all of it before the programme closes [confirm] |
| 27 | Pre-proposal meeting | [date and place: PDGA to set] |
| 28 | Last date for questions | [number] days before the deadline [PDGA to set] |
| 29 | Submission | [date, time and address: PDGA to set] |
| 30 | Opening | Technical envelopes opened in public; price envelopes opened later, for proposals that pass Stage 1 only |

---

## Annex C — the cross-functional baseline

The quality floor every service on Linkup meets, whatever it does. It is mandatory at three
checkpoints: before procurement, before go-live, and in operation. The independent verification
agent checks each line. Targets marked [confirm] are fixed at inception against the pilot's load.

| ID | Requirement | Target | How it is checked |
|---|---|---|---|
| CFR-SEC-01 | Mutual TLS on every system-to-system call | TLS 1.3; no plain-text call accepted [confirm] | Configuration review; scan |
| CFR-SEC-02 | Every caller is identified | X-Road subsystem certificates; OAuth 2.0 and OpenID Connect only where a service needs end-user authorisation [confirm] | Test |
| CFR-SEC-03 | No secrets in code or configuration files | Secrets held in a managed store and rotated | Code and configuration review |
| CFR-SEC-04 | Patches applied | Critical patches within [15] days [confirm] | Scan reports |
| CFR-SEC-05 | API security | OWASP API Security Top 10 (2023) met | Scan; independent penetration test |
| CFR-AVL-01 | Linkup's core is available | 99.5 per cent a month in the pilot; 99.9 per cent in production [confirm] | Monitoring (Annex F) |
| CFR-AVL-02 | No single point of failure in the core | Redundant core components | Architecture review; failover test |
| CFR-AVL-03 | Recovery | Recovery point within [1] hour, recovery time within [4] hours [confirm] | Recovery test (Annex F) |
| CFR-PRF-01 | Calls are answered fast | 95 per cent of calls within 1 second in production [confirm] | Load test; monitoring |
| CFR-PRF-02 | Room to grow | The pilot's peak load plus 100 per cent [confirm] | Load test |
| CFR-IOP-01 | Service contracts | OpenAPI 3.1, valid for every service [confirm] | Operator's test suite |
| CFR-IOP-02 | The bus | X-Road 7.x, message protocol for REST | Registration; live test call |
| CFR-IOP-03 | Data described | Fields as the semantic map defines them (ISO/IEC 11179) | Self-assessment against the map |
| CFR-OBS-01 | Monitoring | Every security server reports to the collector | Demonstration |
| CFR-OBS-02 | Message log | Tamper-evident, every call logged, queryable by the data owner | Test |
| CFR-DAT-01 | Lawful basis and minimisation | Only the fields the data-sharing agreement names; a lawful basis per exchange | Review; data-protection impact assessment |
| CFR-DOC-01 | Documentation | Architecture, service contracts, runbooks, operator and administrator manuals | Review at the Transfer gate |

Members must also meet the six member requirements (REQ-ORG-03): a security server, a registered
subsystem, the adopted standards, conformed data, a lawful basis, and a named contact post with an
incident channel.

---

## Annex D — the systems and data inventory

Indicative. The supplier confirms and completes it with PDGA in the inception phase. Systems that
are separate national systems are connected to, not built.

| System | Owner | Domain | Role | Interface today | In Lot 1 |
|---|---|---|---|---|---|
| Linkup Central Server | PDGA | Data exchange | Infrastructure | X-Road 7.x | Built on |
| Test certification authority, OCSP, time-stamping | PDGA | Trust | Infrastructure | X-Road trust services | Replaced |
| National ID and e-KYC | PNIA | Identity | Source (EX-1) | Documented API; on Linkup | Connected, not built |
| Examination candidate list | PNEA | Examinations | Consumer (EX-1, EX-2); source (EX-3) | Joins Linkup in the Foundation phase | Connected |
| Progressa Learner Registry (PLR) | MoEYS | Learners | Source (EX-2) | Planned; built under its own lot | Connected when ready |
| Scholarship Management Platform | MoEYS, with the Ministry of Finance | Scholarships | Consumer (EX-3) | Planned; not on Linkup | Connected when ready |
| District EMIS | MoEYS | Schools | Later source | Spreadsheets on request | Later wave |
| Beneficiary register | Social Protection Agency | Social protection | Later source and consumer | Vendor-maintained | Later wave |
| Civil registration | Civil Registration Department | Births | Later source | Not on Linkup | Later wave |
| Patient index | Ministry of Health | Health | Later source | Its own identifier | Later wave |
| PayPro, through the Payments block | Central bank; Ministry of Finance | Payments | Connected later | Not on Linkup | Out of Lot 1 |

To complete at inception: each owner's contact post; current interfaces and versions; the data
classification of each data set; data quality; test environments; the exact fields of each
first-wave exchange, which feed the data-sharing agreements of Annex G.

---

## Annex E — acceptance criteria

A deliverable or milestone is accepted only when it passes the criteria below, verified by the
independent verification agent and signed by PDGA. **Operational Acceptance** (E.3) starts go-live,
the related payment and the warranty. As KP3 5.4 puts it, a configuration that exists is only set
up; it is proven when every one of its checks has run and passed and the result is written down
with its date.

The traceability matrix lists every numbered requirement with its acceptance basis. The detailed
test of each requirement is agreed between the supplier and the verification agent at the
Inception gate, using the template and checklists below.

### E.1 The acceptance record

| Field | Content |
|---|---|
| Deliverable | [identifier] — [name] |
| Phase or gate | Inception, Foundation, Pilot, Operate or Transfer |
| Requirements covered | REQ identifiers of Annex A; CFR identifiers of Annex C |
| Test or method | The test, demonstration or document review that proves each requirement |
| Evidence | Test output, logs, scan and penetration-test reports, documents, a recording of the demonstration |
| Result | Pass; conditional, with actions and a date; or fail |
| Verification | The verification agent's finding and date |
| Sign-off | PDGA's authorised post and the date |

### E.2 The gate checklists

A gate is passed only when every mandatory item is a pass.

**Inception gate**

| Item | Maps to | Result |
|---|---|---|
| Inception report and plan, inside the programme's window | Section 6 | [ ] |
| Pilot list and the fields of each first-wave exchange confirmed | Section 5; Annex D | [ ] |
| The test of each requirement agreed with the verification agent | Annex E | [ ] |
| Competencies for PDGA's team agreed | REQ-ORG-05 | [ ] |

**Foundation gate**

| Item | Maps to | Result |
|---|---|---|
| Linkup's core in production configuration; the members listed and each first-wave service found | REQ-TEC-01, REQ-TEC-02 | [ ] |
| Production trust services live; mutual TLS enforced; a revocation tested | REQ-TEC-03, REQ-TEC-04 | [ ] |
| Legal gap assessment approved by PDGA | REQ-LEG-01 | [ ] |
| Templates of the two agreements delivered to PDGA's lawyers | REQ-LEG-03 | [ ] |
| Operating procedures accepted; admission steps set up | REQ-ORG-01, REQ-ORG-02 | [ ] |
| Semantic map accepted by PDGA and MoEYS; the rule for learners without an identity number written | REQ-SEM-01, REQ-SEM-02 | [ ] |

**Pilot gate and Operational Acceptance**

| Item | Maps to | Result |
|---|---|---|
| Each first-wave exchange: the call with a grant answered, the call without one refused, the whole run passed, each with its date | REQ-TEC-07, REQ-TEC-08 | [ ] |
| A lawful basis recorded for each exchange; access only by the members each agreement names | REQ-LEG-02, REQ-LEG-04 | [ ] |
| Each first-wave member passed the six member requirements; the test environment in use | REQ-ORG-03, REQ-ORG-04 | [ ] |
| Service catalogue and member register live | REQ-SEM-03, REQ-SEM-04 | [ ] |
| Service contracts valid and versioned | REQ-TEC-05, REQ-TEC-06 | [ ] |
| Monitoring collector and dashboard working; the message log queried by a data owner | REQ-TEC-09, REQ-TEC-10 | [ ] |
| The design of the event layer accepted, and PDGA's decision on building it recorded | REQ-TEC-11 | [ ] |
| Export of all data and configuration tested | REQ-TEC-13 | [ ] |
| Independent penetration test passed; high and critical findings fixed | REQ-INF-03, REQ-INF-04 | [ ] |
| Recovery tested | REQ-INF-01, REQ-INF-02 | [ ] |
| The Operational Acceptance Test passed over the stability period | E.3 | [ ] |

**Transfer gate**

| Item | Maps to | Result |
|---|---|---|
| PDGA's operating team certified; operation handed over | REQ-ORG-05, REQ-ORG-06 | [ ] |
| Transition tasks done at the stated price | REQ-TEC-14 | [ ] |
| Licences that let PDGA keep running Linkup in force | REQ-TEC-15 | [ ] |
| Runbooks and manuals delivered and checked | CFR-DOC-01 | [ ] |
| The running cost of Linkup in the state's budget for the year after the programme | The buyer's own action, not the supplier's | [ ] |

### E.3 The Operational Acceptance Test

Operational Acceptance is granted when, over a stability period of [30] consecutive days
[confirm] with the first-wave exchanges running in production:

- availability meets Annex F, with no open incident of priority 1;
- every first-wave exchange passes its end-to-end checks;
- no critical or high defect is open, and the agreed medium and low ones have a plan;
- the independent penetration test is passed and its high and critical findings are fixed; and
- the runbooks are delivered and checked.

PDGA then issues the Operational Acceptance Certificate, verified by the verification agent.

---

## Annex F — service levels in the operate period

Measured monthly in the six-month operate period. These are the supplier's levels for Linkup's
core; each member's service has its own agreement, as KP2 5.3 shows.

### F.1 Availability and speed

| Level | Target | Measured by |
|---|---|---|
| Availability of Linkup's core | 99.5 per cent a month; raised to 99.9 per cent once met for two quarters running [confirm] | Monitoring, planned maintenance excluded |
| Speed | 95 per cent of calls within 1 second [confirm] | Monitoring |
| Message delivery | No message lost without detection | Reconciliation of the message log |

### F.2 Incidents

| Priority | Meaning | Acknowledged within | Resolved within |
|---|---|---|---|
| P1 | Linkup down, a first-wave exchange unavailable, or a security breach | 1 hour [confirm] | 8 hours [confirm] |
| P2 | A major function degraded, no workaround | 4 business hours [confirm] | 2 business days [confirm] |
| P3 | A function degraded, with a workaround | 1 business day | The next release |

### F.3 Support, change, recovery and reporting

| Item | Provision |
|---|---|
| Support hours | Monday to Friday, 08:00 to 18:00, and on call for P1 at all hours [confirm] |
| Notice of change | 5 business days for a planned change; 3 months for a breaking change to a service contract [confirm] |
| Backup and recovery | As CFR-AVL-03; restore tested every quarter |
| Reporting | A monthly report to PDGA: availability, incidents, speed, security, credits |

### F.4 Service credits

| Breach | Credit | Cap |
|---|---|---|
| Availability under target | [2] per cent of the monthly operate fee for each 0.5 per cent below target [confirm] | [10] per cent of the monthly fee [confirm] |
| P1 resolution time missed | [2] per cent of the monthly operate fee for each breach [confirm] | [10] per cent of the monthly fee [confirm] |
| Persistent breach | A cure period, then default under the contract | As the contract sets |

---

## Annex G — the two agreements

Joining Linkup and reading another body's data are separate permissions, in separate agreements.
Membership alone gives access to no service. These are structures for PDGA's lawyers to finalise;
they are not legal text.

### G.1 The membership agreement (PDGA, as operator, and a member body)

| Clause | What it covers |
|---|---|
| 1. Parties | PDGA, as operator of Linkup, and the member body (for example PNEA) |
| 2. Purpose | Connection to Linkup; what membership gives, and what it does not |
| 3. Definitions | Member, subsystem, security server, service, data owner, consumer |
| 4. The member's obligations | The six member requirements; contact posts; keeping test and production apart |
| 5. The operator's obligations | Certificates; availability and support; monitoring; notice of change |
| 6. Security and certificates | Mutual TLS; keys; reporting an incident |
| 7. The message log | What is logged; who may query it |
| 8. Admission and go-live | The Steering Committee's decision; no production before a passed test call |
| 9. Suspension | Grounds and steps for suspending a member |
| 10. Liability | Who answers for what |
| 11. Term and exit | Duration; leaving; revocation of certificates |
| 12. Disputes | Escalation; the law that governs |
| 13. Signatures | The authorised posts and the date |

### G.2 The data-sharing agreement (the data owner and the consumer)

| Clause | What it covers |
|---|---|
| 1. Parties | The body that owns the data and the body that reads it (for example PLR and PNEA, for EX-2) |
| 2. Purpose and lawful basis | The exact purpose and the instrument and article that allow it (the Data Protection Act 2023 for a minor's data) |
| 3. The data | The fields, the source register and the service contract |
| 4. Classification and handling | The data's classification and the controls it needs |
| 5. Use | Only for the stated purpose; no passing on |
| 6. Access and consent | Who may call; a parent's consent only where the law requires it |
| 7. The log | Every access logged; the owner's right to audit |
| 8. Quality and service | What the owner commits to on accuracy and availability |
| 9. Retention | How long the consumer keeps what it reads; no unmanaged copies |
| 10. Security | Consistent with Annex C |
| 11. Liability | Who answers for misuse or a breach |
| 12. Term and review | Duration, review and ending, with the return or deletion of data |
| 13. Schedules | The field list, the service contract, the classification record |
| 14. Signatures | The authorised posts and the date |
