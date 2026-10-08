# The traceability matrix: the Progressa template

**Simulated case.** Progressa is the fictional country of the courses; every institution, system,
date and figure here is invented. The facts come from `progressa-tender-case.md`, the requirements
from `progressa-requirements.json`, and the clauses and tests from `rfp-skeleton-progressa.md` and
`annex-pack-progressa.md`, all in this folder.

**What this is.** The shape `traceability-matrix-builder` returns: five tables, one for each sheet
of a workbook, as text. Paste each into a spreadsheet as it is, or ask a document skill to make the
workbook. The REQ-ID table at the end is generated from the requirements file, line by line, so
that the matrix and the request for proposals never drift apart.

---

## Sheet 1 — README

| Item | Content |
|---|---|
| Purpose | Ties every requirement of Lot 1 to the clause that imposes it and the test that proves it; the independent verification agent's basis for each gate |
| Sheets | 1 README; 2 the requirements by theme; 3 the exchanges; 4 the verification log; 5 every requirement, line by line |
| How to use it | The verification agent fills sheet 4 during delivery. A requirement is proven only when its test has run and passed and the result is written with its date; until then it is set up and no more |
| The granularity decision | Themes, requirement lines and the gate checklists of Annex E. The detailed test of each requirement is agreed between the supplier and the verification agent at the Inception gate, as an inception deliverable. A separate test written for every requirement before award was not chosen [confirm with the funder] |
| Source of the requirement lines | `progressa-requirements.json`; numbered REQ-<layer>-<NN> in the order of the file, the count starting again in each layer |
| Phase of a line | Read from the acceptance basis: a line that names the Foundation phase is Foundation; else one that names the transfer is Transfer; else one that names the pilot or go-live is Pilot; else all phases |

## Sheet 2 — the requirements by theme

| Theme | Source | RFP clause | Stream | Acceptance test | Phase | Priority |
|---|---|---|---|---|---|---|
| Lawful basis and the two agreements | Annex A, LEG | Sections 3, 7; Annex G | Advisory | Gap assessment approved; a call without a grant refused | Foundation; Pilot | Mandatory |
| Operator procedures, admission and onboarding | Annex A, ORG | Sections 4, 7 | Advisory | PNEA admitted end to end; members pass the six requirements | Foundation; Pilot | Mandatory |
| Capacity building and transfer | Annex A, ORG | Sections 8, 9 | Capacity | PDGA team certified; operation handed over | Transfer | Mandatory |
| The semantic map, catalogue and member register | Annex A, SEM | Section 7 | Build | Map accepted; catalogue and register live | Foundation; Pilot | Mandatory |
| Linkup's core and trust services | Annex A, TEC | Sections 3, 7; Annex C | Build | Members listed, services found; revocation tested | Foundation | Mandatory |
| Service contracts and the first-wave exchanges | Annex A, TEC | Sections 5, 7; Annex E | Build | Call with a grant answered, without one refused; whole run passed | Pilot | Mandatory |
| Monitoring and the message log | Annex A, TEC | Section 7; Annex C | Build | Collector working; log queried by a data owner | Pilot | Mandatory |
| Event distribution | Annex A, TEC | Section 7 | Build | Design accepted; build on PDGA's decision | Pilot | Target-state |
| Openness, export and exit | Annex A, TEC | Sections 8, 16 | Build | Export tested; licences checked; transition plan accepted | Pilot; Transfer | Mandatory |
| Hosting, continuity and security | Annex A, INF | Section 7; Annexes C, F | Build | Recovery tested; penetration test passed | Pilot | Mandatory |

## Sheet 3 — the exchanges

| Exchange | Provider → consumer: data | In Lot 1 | Requirements | Acceptance test |
|---|---|---|---|---|
| EX-1 | PNIA → PNEA: identity | Yes | REQ-TEC-05, REQ-TEC-07, REQ-TEC-08, REQ-LEG-02 | `identity-api`: the call with a grant answered, without one refused; whole run passed |
| EX-2 | PLR → PNEA: enrolment | Yes, when PLR is ready | REQ-TEC-05, REQ-TEC-07, REQ-TEC-08, REQ-LEG-02, REQ-SEM-02 | `enrolment-api`: as EX-1 |
| EX-3 | PNEA → MoEYS: results | Yes | REQ-TEC-05, REQ-TEC-07, REQ-TEC-08, REQ-LEG-02 | `results-api`: as EX-1 |
| EX-4 | PLR → Social Protection Agency: enrolment | No, a later wave | — | — |
| EX-5 | Civil Registration → schools: birth facts | No, a later wave | — | — |
| EX-6 | Social register → MoEYS: eligibility | No, a later wave | — | — |

## Sheet 4 — the verification log

Left blank at authoring. The verification agent fills one row for each requirement at each gate.

| REQ ID | Gate | Status (pass, fail, partial) | Evidence | Verified by (post) | Date | Notes |
|---|---|---|---|---|---|---|
| | | | | | | |

## Sheet 5 — every requirement, line by line

Generated from `progressa-requirements.json`; the status column is blank at authoring.

<!-- generated: REQ-ID table -->

| REQ ID | Layer | Area | The Supplier's obligation | Standard | Acceptance basis | Phase | Status |
|---|---|---|---|---|---|---|---|
| REQ-LEG-01 | LEG | Lawful basis for each exchange | The Supplier shall assess Progressa's legal framework (the Data Protection Act 2023, the Civil Registration Act, the Public Procurement Act and the draft interoperability decree) against the three first-wave exchanges of this tender, identify the gaps, and recommend the instruments and agreements each exchange needs to operate lawfully. | Data Protection Act 2023 (Progressa); Civil Registration Act (Progressa) | Legal gap assessment delivered in the Foundation phase and approved by PDGA; a lawful basis recorded for each exchange before its go-live, verified by the independent verification agent. | Foundation |  |
| REQ-LEG-02 | LEG | Lawful basis for each exchange | The Supplier shall configure Linkup so that no exchange can go into production without a recorded lawful basis that cites the instrument and its article. | Data Protection Act 2023 (Progressa); Civil Registration Act (Progressa) | Legal gap assessment delivered in the Foundation phase and approved by PDGA; a lawful basis recorded for each exchange before its go-live, verified by the independent verification agent. | Foundation |  |
| REQ-LEG-03 | LEG | The two agreements: membership and data sharing | The Supplier shall draft, for PDGA's lawyers to finalise, the Linkup membership agreement and one data-sharing agreement for each first-wave exchange, to the structure of Annex G. | This RFP, Annex G | Templates delivered in the Foundation phase for PDGA's lawyers; at the Pilot gate, a call made without a data-sharing grant is refused. | Foundation |  |
| REQ-LEG-04 | LEG | The two agreements: membership and data sharing | The Supplier shall configure Linkup's access rights so that membership alone gives access to no service; each service is reachable only by the members its data-sharing agreement names. | This RFP, Annex G | Templates delivered in the Foundation phase for PDGA's lawyers; at the Pilot gate, a call made without a data-sharing grant is refused. | Foundation |  |
| REQ-ORG-01 | ORG | Operator procedures and admission | The Supplier shall deliver PDGA's operating procedures for Linkup: admitting a member, issuing and revoking certificates, handling an incident, and giving notice of a change. | This RFP | Procedures accepted by PDGA in the Foundation phase; PNEA's admission run end to end under them before the Pilot gate. | Foundation |  |
| REQ-ORG-02 | ORG | Operator procedures and admission | The Supplier shall set up the admission steps so that a member goes into production only after the Steering Committee's minuted decision is recorded. | This RFP | Procedures accepted by PDGA in the Foundation phase; PNEA's admission run end to end under them before the Pilot gate. | Foundation |  |
| REQ-ORG-03 | ORG | Member onboarding | The Supplier shall onboard PNEA, and support PLR and MoEYS to onboard, against the six member requirements: a security server, a registered subsystem, the adopted standards, data conformed to the semantic map, a lawful basis for each exchange, and a named contact post with an incident channel. | This RFP, Annex C | Each first-wave member passes the readiness check of the six requirements before its go-live (Pilot); evidence filed with the verification log. | Pilot |  |
| REQ-ORG-04 | ORG | Member onboarding | The Supplier shall provide a test environment in which a new member makes a test call before it goes into production. | This RFP, Annex C | Each first-wave member passes the readiness check of the six requirements before its go-live (Pilot); evidence filed with the verification log. | Pilot |  |
| REQ-ORG-05 | ORG | Capacity building and transfer | The Supplier shall train PDGA's operating team and the technical focal point of each first-wave member, against competencies agreed with PDGA at inception, and shall measure them. | This RFP | PDGA's operating team certified against the agreed competencies at the Transfer gate; operation handed over and signed by PDGA. | Transfer |  |
| REQ-ORG-06 | ORG | Capacity building and transfer | The Supplier shall embed PDGA staff in the delivery team from the Foundation phase, and shall hand over the operation of Linkup to PDGA at the end of the operate period. | This RFP | PDGA's operating team certified against the agreed competencies at the Transfer gate; operation handed over and signed by PDGA. | Transfer |  |
| REQ-SEM-01 | SEM | The semantic map of learner data | The Supplier shall publish the semantic map of the first-wave data (identity, enrolment and results), with each field described to ISO/IEC 11179 and anchored to the learner-data standard PDGA confirms at inception (to be confirmed). | ISO/IEC 11179; OneRoster or CEDS [to be confirmed] | Semantic map accepted by PDGA and MoEYS in the Foundation phase. | Foundation |  |
| REQ-SEM-02 | SEM | The semantic map of learner data | The Supplier shall key learner records on the national identity number where PNIA has issued one, and shall document how a learner without one is matched, since PNIA issues identity numbers only at 16 (to be confirmed with PNIA and the Civil Registration Department). | ISO/IEC 11179; OneRoster or CEDS [to be confirmed] | Semantic map accepted by PDGA and MoEYS in the Foundation phase. | Foundation |  |
| REQ-SEM-03 | SEM | Service catalogue and member register | The Supplier shall deliver a service catalogue that records, for every service on Linkup, its provider, its service contract, its lawful basis and its service levels. | This RFP | Catalogue and member register live, with the three first-wave services, at the Pilot gate. | Pilot |  |
| REQ-SEM-04 | SEM | Service catalogue and member register | The Supplier shall publish Linkup's member register, and shall keep the catalogue and the register current through the operate period. | This RFP | Catalogue and member register live, with the three first-wave services, at the Pilot gate. | Pilot |  |
| REQ-TEC-01 | TEC | Linkup's core in production | The Supplier shall take Linkup from pilot to production on X-Road 7.x: the Central Server, a security server for each first-wave member, and the store of the message log. | X-Road 7.x, message protocol for REST (NIIS) | Production configuration accepted at the Foundation gate; the check that lists the members and finds each first-wave service passed and recorded with its date. | Foundation |  |
| REQ-TEC-02 | TEC | Linkup's core in production | The Supplier shall reuse Linkup's existing members and configuration, and shall justify in writing, with a documented gap, any component it replaces or builds new. | X-Road 7.x, message protocol for REST (NIIS) | Production configuration accepted at the Foundation gate; the check that lists the members and finds each first-wave service passed and recorded with its date. | Foundation |  |
| REQ-TEC-03 | TEC | Trust services | The Supplier shall replace Linkup's test certification authority with production trust services (a certification authority, OCSP and time-stamping) operated under PDGA, or under an accredited provider if Progressa's law requires one (to be confirmed). | TLS 1.3 (IETF); RFC 3161 time-stamping; OCSP (RFC 6960) | Production trust services live at the Foundation gate; revocation of a certificate tested and recorded. | Foundation |  |
| REQ-TEC-04 | TEC | Trust services | The Supplier shall enforce mutual TLS on every call between security servers. | TLS 1.3 (IETF); RFC 3161 time-stamping; OCSP (RFC 6960) | Production trust services live at the Foundation gate; revocation of a certificate tested and recorded. | Foundation |  |
| REQ-TEC-05 | TEC | Service contracts | The Supplier shall describe each first-wave service (identity-api of PNIA, enrolment-api of PLR and results-api of PNEA) in OpenAPI 3.1, and shall validate each description with the operator's test suite. | OpenAPI 3.1 [confirm] | Each contract linted by the operator's test suite and a live test call passed before the service's go-live (Pilot). | Pilot |  |
| REQ-TEC-06 | TEC | Service contracts | The Supplier shall version each service contract, and shall give consumers the notice of change set in Annex F before a breaking change. | OpenAPI 3.1 [confirm] | Each contract linted by the operator's test suite and a live test call passed before the service's go-live (Pilot). | Pilot |  |
| REQ-TEC-07 | TEC | The first-wave exchanges | The Supplier shall connect the three first-wave exchanges end to end: PNIA to PNEA (identity), PLR to PNEA (enrolment) and PNEA to MoEYS (results). | This RFP, Annex E | For each exchange, the call with a grant answered and the same call without a grant refused, and the whole run passed, each recorded with its date at the Pilot gate. | Pilot |  |
| REQ-TEC-08 | TEC | The first-wave exchanges | The Supplier shall prove each exchange with a call that carries a grant and is answered, and the same call without a grant, which is refused. | This RFP, Annex E | For each exchange, the call with a grant answered and the same call without a grant refused, and the whole run passed, each recorded with its date at the Pilot gate. | Pilot |  |
| REQ-TEC-09 | TEC | Monitoring and the message log | The Supplier shall deliver a collector that gathers monitoring data from every security server, and a dashboard for PDGA's operating team. | This RFP, Annex C | Demonstrated at the Pilot gate; a query of the message log by a data owner tested. | Pilot |  |
| REQ-TEC-10 | TEC | Monitoring and the message log | The Supplier shall keep a tamper-evident log of every call, which PDGA and the owner of the data can query. | This RFP, Annex C | Demonstrated at the Pilot gate; a query of the message log by a data owner tested. | Pilot |  |
| REQ-TEC-11 | TEC | Event distribution (target-state) | The Supplier shall design a publish-subscribe channel on Linkup for events such as 'learner enrolled' (target-state), and shall build it only if PDGA confirms it at the Pilot gate (to be confirmed). | CloudEvents 1.0 [confirm] | Design accepted at the Pilot gate; build only on PDGA's confirmation. | Pilot |  |
| REQ-TEC-12 | TEC | Openness, data export and exit | The Supplier shall name the edition of every standard it implements. | This RFP; the standards named in Annex C | Export of all data and configuration tested at the Pilot gate; licence terms checked at contract signature; transition plan accepted at the Transfer gate. | Transfer |  |
| REQ-TEC-13 | TEC | Openness, data export and exit | The Supplier shall make every record, schema and configuration of what it delivers exportable at any time, in an open format, at no extra charge. | This RFP; the standards named in Annex C | Export of all data and configuration tested at the Pilot gate; licence terms checked at contract signature; transition plan accepted at the Transfer gate. | Transfer |  |
| REQ-TEC-14 | TEC | Openness, data export and exit | The Supplier shall provide, at the end of the contract, a transition period with defined tasks and a stated price, to hand over to PDGA or to a successor. | This RFP; the standards named in Annex C | Export of all data and configuration tested at the Pilot gate; licence terms checked at contract signature; transition plan accepted at the Transfer gate. | Transfer |  |
| REQ-TEC-15 | TEC | Openness, data export and exit | The Supplier shall grant licences for all the software it delivers that allow PDGA to keep running Linkup after the contract ends. | This RFP; the standards named in Annex C | Export of all data and configuration tested at the Pilot gate; licence terms checked at contract signature; transition plan accepted at the Transfer gate. | Transfer |  |
| REQ-INF-01 | INF | Hosting and continuity | The Supplier shall deploy Linkup on the hosting PDGA provides (to be confirmed at inception), with separate test and production environments. | This RFP, Annex F | Recovery tested and passed before Operational Acceptance at the Pilot gate. | Pilot |  |
| REQ-INF-02 | INF | Hosting and continuity | The Supplier shall meet the recovery targets of Annex F, and shall test recovery before Operational Acceptance. | This RFP, Annex F | Recovery tested and passed before Operational Acceptance at the Pilot gate. | Pilot |  |
| REQ-INF-03 | INF | Security baseline | The Supplier shall pass an independent penetration test before production go-live, and shall fix every high and critical finding before Operational Acceptance. | OWASP API Security Top 10 (2023) | Independent penetration test passed, and every high and critical finding fixed, at the Pilot gate. | Pilot |  |
| REQ-INF-04 | INF | Security baseline | The Supplier shall meet the OWASP API Security Top 10 for every service it builds. | OWASP API Security Top 10 (2023) | Independent penetration test passed, and every high and critical finding fixed, at the Pilot gate. | Pilot |  |
