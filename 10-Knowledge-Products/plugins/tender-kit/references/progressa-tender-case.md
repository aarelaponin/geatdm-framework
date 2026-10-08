# The Progressa tender case

**Simulated case.** Progressa is the fictional country of the courses. Every institution, system,
name, date and figure in this file is invented. Where a fact comes from a course page, the page is
named (KP2 is *Building a Government Interoperability Framework*, KP3 the *Education Digital Public
Infrastructure Roadmap*, and "the Progressa page" is the course page that describes the country).
Where this kit adds a fact that the tender needs and the courses do not give, it is marked
*added for this kit*.

**What it is for.** The ten skills of this kit set every example in this one case, so that the
vehicle, the requirements, the request for proposals, its annexes, the traceability matrix, the
check and the covering memorandum tell one story. Use it to try a skill before you run it on your
own country, or as a checklist of the inputs your own case needs.

## The case in one paragraph

Progressa already has a data-exchange platform, Linkup, an X-Road 7.x deployment that PDGA, the
digital government authority, has run in pilot since 2025 with four members (the Progressa page).
The education sector wants its first once-only exchanges: a candidate's identity and enrolment
reach the examinations authority without paper, and the results reach the ministry for the
scholarship (KP2 1.5). The National Learner Registry programme carries the education integrations
(KP2 5.1). The procurement plan buys the work in lots, one per domain, and never as one big-bang
contract (KP2 5.1). This case follows the first lot: Linkup taken from pilot to production, and the
first wave of three education exchanges, bought as a working, accepted result (KP2 1.1). *The lot,
its name and its content are added for this kit.*

## The bodies

| Body | What it is | Its part in the tender | Source |
|---|---|---|---|
| PDGA, the Progressa Digital Government Authority | A unit under the Ministry of ICT, with a mandate that coordinates but does not bind; runs Linkup | The buying unit; operates Linkup after transfer | The Progressa page, §1 and §4 |
| The Ministry of ICT | PDGA's ministry, political sponsor of the Digital Transformation Roadmap | Its tender committee approves the documents and awards the contract | The Progressa page, §4; the committee *added for this kit* |
| MoEYS, the Ministry of Education, Youth and Skills | Sets education policy and funds schools; owns PLR | Partner in the lot; consumer of the results exchange | The Progressa page; KP2 5.1 |
| PNEA, the Progressa National Examinations Authority | Runs examinations and certifies results | Consumer of identity and enrolment; provider of results; joins Linkup in the Foundation phase | KP2 1.5 and 5.1 |
| PNIA, the Progressa National ID Authority | Owns the person identity every sector reuses; e-KYC since 2024 | Provider of identity; integrated, not built | The Progressa page; KP3 1.8 |
| PLR, the Progressa Learner Registry | The single list of learners the Education Sector Plan calls for; planned, not started | Provider of enrolment; bought under its own lot and connected to Linkup by this one | The Progressa page; KP3 6.5 |
| The Progressa Public Procurement Authority | Regulates public procurement under the Public Procurement Act | Its rules apply where the funder's rules allow | The Progressa page, §4 and §7 |
| The Data Protection Commission | Established 2023, six staff, no enforcement action yet | Consulted on the lawful basis of each exchange | The Progressa page, §4 and §7 |
| The Ministry of Finance, budget department | Runs an annual budget cycle, with no multi-year envelopes for ICT | Must carry Linkup's running cost after the programme ends | The Progressa page, §4; KP2 5.1 |
| The Steering Committee | The ICT Steering Committee met twice in 2024 and not since | Revived to decide each member's admission, by minuted decision | The Progressa page, §4; KP2 5.9 |
| The independent verification agent | A firm hired separately to check the supplier's work against the requirements | Verifies each gate; never the party being checked | *Added for this kit* |

## The money and the window

- **The programme.** The National Learner Registry programme: USD 6.5 million over three years,
  under a World Bank human-capital programme (the Progressa page, §2). It carries the education
  integrations; Linkup has no dedicated envelope (KP2 5.1).
- **The budget.** An annual budget cycle and no multi-year ICT envelopes (the Progressa page, §5).
  The Public Procurement Act has no framework for multi-year ICT procurement (the Progressa page, §7).
- **What follows for the tender.** The lot must finish inside the programme's three years, and the
  running cost after it moves to the state's own budget line. KP2 5.1 names the commonest failure:
  a platform funded to launch and not to operate.
- **Whose rules.** A contract the programme finances follows the funder's procurement rules and
  standard documents. Confirm with the funder which edition of its rules and of its standard
  document for information systems applies.

## The first lot: what it builds, and what it only connects to

*Added for this kit, from KP2 4.1 (the components of the bus and the gaps in each layer), KP2 5.1
(the phases) and KP3 1.8 (the shared core and the sector's own).*

**It builds:**

- Linkup's core, taken from pilot to production without rebuilding what runs: the Central Server,
  a security server for each first-wave member, and the store of the tamper-evident message log.
- Production trust services in place of the test certification authority: a certification
  authority, OCSP and time-stamping. Progressa has no e-transactions act, so whether an accredited
  authority must issue the certificates is to be confirmed (KP2 5.7).
- A collector that gathers monitoring data from every security server, a published service
  catalogue and member register (no service catalogue is published today, KP2 1.1), and a test
  environment where a new member tries a call before go-live.
- The three first-wave exchanges, end to end, with their service contracts.
- The groundwork those exchanges need: a lawful basis for each, the two agreements, the semantic
  map of the learner data, and PDGA's operating procedures.
- The training of PDGA's operating team and of each member's technical focal point, and the
  transfer of Linkup's operation to PDGA.

**It connects to, and does not build:**

- PNIA's National ID and e-KYC sign-in: part of the shared core, used by every sector (KP3 1.8).
- PLR: education's own register, bought under its own lot (KP3 6.5), connected here as a provider.
- PayPro, reached through the government's Payments block (KP3 1.8): not in the first wave.
- The district EMIS, the Social Protection Agency's beneficiary register, civil registration and
  the Ministry of Health's patient index: later waves.

**It defers, with a date:** the event layer. Linkup has no publish–subscribe channel for events
such as "learner enrolled" (KP2 4.1). The lot designs it and builds it only if PDGA confirms it at
the Pilot gate.

## The exchanges

From the Use-Case Catalogue of KP2 1.5. Readiness is technical / semantic / organisational /
legal: R ready, P partial, M missing. The identifiers EX-1 to EX-6 are *added for this kit*.

| ID | Provider → consumer: data | Service enabled | Readiness T / S / O / L | Wave |
|---|---|---|---|---|
| EX-1 | PNIA → PNEA: identity | Examination registration and certificate | P / P / M / P | First |
| EX-2 | PLR → PNEA: enrolment | Examination registration and certificate | M / M / M / P | First |
| EX-3 | PNEA → MoEYS: results | Scholarship | M / P / M / P | First |
| EX-4 | PLR → Social Protection Agency: enrolment | Child social grant | M / M / M / P | Later |
| EX-5 | Civil Registration → schools: birth facts | Primary enrolment | M / M / M / P | Later |
| EX-6 | Social register → MoEYS: eligibility | Scholarship | M / M / M / M | Later |

## The standards adopted or being chosen

From the standards portfolio of KP2 4.3. A value marked [confirm] is proposed, not yet adopted.

| Need | Standard and version | Status |
|---|---|---|
| The bus | X-Road 7.x, message protocol for REST (NIIS) | Binding for Linkup members |
| Describing services | OpenAPI 3.1 | [confirm] |
| Authentication and authorisation | OAuth 2.0 and OpenID Connect Core 1.0 | [confirm]; whether a service inside the bus needs OAuth as well as X-Road's certificates is an open decision |
| Transport security | TLS 1.3, mutual | [confirm] |
| Describing and linking data | ISO/IEC 11179; JSON-LD 1.1 | [confirm] |
| Learner data | OneRoster or CEDS | Open decision: which owns each entity |
| Verifiable credentials | W3C Verifiable Credentials Data Model 2.0 | Planned, for a later service |
| The approved list of the 2021 e-Government Interoperability Framework | — | To be retired formally, or it stays a second, competing list |

The service contracts of the first wave are named `identity-api` (PNIA) and `enrolment-api` (PLR)
in KP2 5.2 and 5.3; `results-api` (PNEA) is *added for this kit*.

## The systems the lot touches

From the Progressa page, §1, KP2 4.1 and KP3 1.8.

| System | Owner | Its part in the lot | Status |
|---|---|---|---|
| Linkup Central Server | PDGA | Built on: taken to production | Pilot since 2025 |
| Security servers of PNIA, the business register, the tax authority and PDGA | Each member | Kept; PNIA's serves EX-1 | Pilot |
| Test certification authority, OCSP, time-stamping | PDGA | Replaced by production trust services | Pilot |
| National ID and e-KYC | PNIA | Integrated: provider of EX-1 | Operational; 78% of adults; IDs issued at 16 |
| Examination candidate list | PNEA | Consumer of EX-1 and EX-2; provider of EX-3 | Operational; PNEA joins Linkup in the Foundation phase |
| PLR | MoEYS | Provider of EX-2; built under its own lot | Planned, not started |
| Scholarship Management Platform | MoEYS, with the Ministry of Finance | Consumer of EX-3 | Planned (the Progressa page, §2) |
| District EMIS | MoEYS | Later wave | District level only, own learner numbering |
| Beneficiary register | Social Protection Agency | Later wave | Built 2016; only the vendor that built it maintains it |
| Patient index | Ministry of Health | Later wave | Its own identifier |
| Civil registration | Civil Registration Department | Later wave | Birth registration at 71% |
| PayPro | The central bank, reached through the Payments block | Out of the lot | Operational |

## The law the tender sits inside

From the Progressa page, §7.

- **The Data Protection Act 2023.** Sharing a minor's data needs a legal basis; any non-statutory
  use needs a parent's consent.
- **The Civil Registration Act.** Birth registration is a child's legal identity anchor; PNIA issues
  identity numbers only at 16.
- **The Public Procurement Act.** No framework for multi-year ICT procurement.
- **No e-transactions act and no access-to-information act.**
- **The interoperability decree** is drafted in KP2 module 2. Whether it is enacted before the
  tender is issued is to be confirmed (*added for this kit*).

## The posts that decide and sign

Posts, never names (the Progressa page, §4, and *added for this kit* where marked).

- The PDGA Director-General: heads the buying unit and signs for it.
- PDGA's Linkup project manager (*added for this kit*): leads the project team that prepares the
  package and writes its covering memorandum.
- The chair of the Ministry of ICT's tender committee (*added for this kit*): receives the package.
- The MoEYS ICT Director and the PNIA Director: accept what concerns their bodies.
- The funder's task team leader (*added for this kit*): gives the funder's no-objection.
- The procurement officer, the lawyer and the funder decide what the documents finally say. The
  skills draft; they decide nothing.

## The phases and their gates

From KP2 5.1: Foundation (months 0–6), Pilot and validation (7–12), Expansion (13–18) and
Optimisation (19–24), each ending in a decision gate where the funder and the Steering Committee
confirm that the phase delivered before the next is funded. The first lot covers Foundation and
Pilot, then a six-month operate period and the transfer to PDGA (*added for this kit*).

## How acceptance is proven

From KP3 5.4. A configuration that exists is *set up*; it is *proven* only when every one of its
checks has run and passed and the result is written down with its date. The kit's acceptance
criteria follow the same rule, with checks of the same kind as KP3's: the members are listed and
the service is found; a call with a grant is answered and the same call without one is refused;
the whole run passes from one end to the other.

## The four checks against lock-in

From KP3 6.5. Every tender and contract names the open standards it requires, with their editions;
requires the export of all data and configuration; requires help with leaving; and gives licence
terms that outlive the contract.
