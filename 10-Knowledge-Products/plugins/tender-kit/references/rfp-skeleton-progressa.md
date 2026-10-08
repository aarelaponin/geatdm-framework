# The request for proposals, section by section: the Progressa skeleton

**Simulated case.** Progressa is the fictional country of the courses; every institution, system,
date and figure here is invented. The facts come from `progressa-tender-case.md` in this folder.

**What this is.** The skeleton `is-rfp-builder` fills: the nineteen sections of a request for
proposals for the supply and installation of an information system, in order, each with what it
says in Progressa's first lot. It is an outline to write from, not finished tender text. Every
value marked [confirm] is a choice the buying unit makes; the procurement officer, the lawyer and
the funder decide what the issued document says.

**Title.** Request for Proposals — Supply and Installation of an Information System: Linkup,
Progressa's data-exchange platform, taken to production, with the first wave of education
exchanges (Lot 1). Purchaser: the Ministry of ICT, through PDGA. Draft for the tender committee.

---

## 1. Background and context

Progressa's education sector registers a learner up to three times, and a parent proves the child's
identity on paper at every counter. Linkup, PDGA's X-Road 7.x platform, has run in pilot since 2025
with four members. The National Learner Registry programme (USD 6.5 million over three years,
under a World Bank human-capital programme) carries the education integrations. The programme's
end date bounds this contract [confirm the date].

## 2. Objectives

- Development objective: a learner's identity, enrolment and results move between the bodies that
  need them, once, lawfully, without paper.
- Specific objectives: Linkup in production; the three first-wave exchanges live; PDGA able to run
  Linkup alone at the end of the contract.

## 3. Scope of supply and services

- Three streams: build (Linkup's core, trust services, monitoring, catalogue, the three
  exchanges); advisory (lawful basis, agreements, semantic map, operating procedures); capacity
  (training and transfer). Advisory and capacity are supplier deliverables, not separate contracts.
- **In scope, built:** as listed in "The first lot" of the case file.
- **Out of scope, connected to and not built:** PNIA's National ID and e-KYC; PLR (its own lot);
  PayPro and the Payments block; the district EMIS, the beneficiary register, civil registration
  and the patient index (later waves). Any gap found in them is recorded as a recommendation, not
  built.

## 4. Governance and institutional arrangements

- PDGA operates Linkup; the Steering Committee admits members by minuted decision.
- The project's steering: PDGA, MoEYS, PNIA, PNEA [confirm membership].
- **The independent verification agent is hired separately** by the buyer and is never the
  supplier. The buyer owns acceptance.
- The buyer's counterpart team: PDGA's Linkup project manager and operating team.

## 5. Pilot scope

The three first-wave exchanges: EX-1 PNIA → PNEA (identity), EX-2 PLR → PNEA (enrolment),
EX-3 PNEA → MoEYS (results). EX-2 depends on PLR's own lot; if PLR is not ready, EX-2 is proved
against PLR's test service and goes live when PLR does [confirm].

## 6. Implementation approach and phasing

Foundation (months 0–6) and Pilot and validation (7–12), as KP2 5.1 sets them, then an operate
period of [n] months [confirm] and the transfer. Each phase ends in a decision gate; the next phase is paid for
only after the gate is passed. All work ends inside the programme's three years.

## 7. Technical and functional requirements

Annex A, the Statement of Requirements, binds. The headline standards: X-Road 7.x (message
protocol for REST); OpenAPI 3.1 [confirm]; TLS 1.3, mutual [confirm]; ISO/IEC 11179 for data
descriptions [confirm]. Each is named with its edition.

## 8. Operate and transfer

[n] months of operation after pilot go-live [confirm], under the service levels of Annex F; then transfer to
PDGA, with the transition tasks and their price stated.

## 9. Capacity building and knowledge transfer

PDGA's operating team and each member's technical focal point trained against competencies agreed
at inception, and measured; PDGA staff embedded in the delivery team from the Foundation phase.

## 10. Key personnel

Team leader; X-Road platform architect; security and trust-services specialist; integration
engineer; data and semantics specialist; legal and data-protection specialist; trainer [confirm].
Each with the years of experience and the references the evaluation scores.

## 11. Supplier qualifications and eligibility

Proportionate thresholds, assessed at team level; joint ventures and subcontracting encouraged.
**The critical platform-delivery capability (a delivered national X-Road or equivalent platform)
must sit with a jointly and severally liable member of the joint venture**, not with a
subcontractor alone. Skills transfer is scored on substance, not on nationality (see
`local-participation-designer`).

## 12. Duration and timeline

12 months from signature to the Pilot gate, as KP2 5.1 sets the phases; then [n] months of
operation and the transfer [confirm]. Inside the programme's three years.

## 13. Client inputs and facilities

From PDGA: hosting [confirm], access to the pilot's configuration, counterpart staff. From PNIA,
PNEA and MoEYS: a technical focal point each, test data under the lawful basis, and test
environments [confirm].

## 14. Reporting

An inception report; a monthly progress report; a report at each gate; a monthly service report in
the operate period. All to PDGA, copied to the independent verification agent.

## 15. Evaluation and award

Rated criteria, award to the Most Advantageous Proposal. Stage 1, pass or fail: eligibility,
financial standing, the platform-delivery reference, the mandatory requirements of Annex A, and
no conflict with the verification role. Stage 2, rated: the points of the Bid Data Sheet, which
sum to 100, including a scored live demonstration on a scenario PDGA supplies.

## 16. Acceptance, securities, warranty and liquidated damages

Acceptance testing, ending in **Operational Acceptance**, which starts go-live, payment and the
warranty; a performance security; a warranty period; liquidated damages for delay and for missed
service levels, capped; an advance-payment guarantee. Values in the Bid Data Sheet; tests in
Annex E.

## 17. Payment schedule

Milestones tied to accepted gates: inception; Foundation gate; Operational Acceptance; monthly
operate fees; transfer. Investment and running costs shown apart; every tranche inside the
programme's window.

## 18. Risks, assumptions and dependencies

PLR not ready for EX-2; the lawful basis for minors' data not in place before go-live; no
accredited certification authority without an e-transactions act; the running cost not in the
state budget after the programme; PDGA's mandate coordinates and does not bind.

## 19. Annexes

A: Statement of Requirements (from `progressa-requirements.json`). B: the integration baseline
(the exchanges and standards of the case file). C to G: the annex pack (`annex-pack-progressa.md`).
H: the confirmed pilot list. Before issuance, mark which annexes are still to be finalised.
