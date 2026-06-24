---
name: procurement-vehicle-selector
description: >-
  Choose the fit-for-purpose procurement vehicle for a digital-government / platform / software
  engagement by reasoning from the nature of the obligation (result vs means), then set the matching
  selection method and contract machinery. Use WHENEVER deciding how to procure or tender a
  system/platform/software build or advisory; choosing between a consulting Terms of Reference and a
  supply/works contract; picking a funder's selection method (World Bank QCBS vs Request for
  Proposals/Bids for Information Systems with rated criteria; AfDB; EU PRAG; national); or when
  someone proposes a "ToR" for what is actually a build. Trigger on: "which procurement
  vehicle/method", "is a ToR the right instrument", "QCBS or supply contract", "obligation of
  result", "rated criteria or QCBS", "the ToR has no acceptance or warranty teeth for a build".
  Matching a working-system obligation to a consulting contract is a
  common, costly mistake; this skill makes the choice deliberate and records it as a short ADR.
---

# Procurement Vehicle Selector

## The one principle

**Match the vehicle to the obligation.** Everything follows from a single question: *what is the buyer actually owed?*

- **An obligation of result** — a working, tested, accepted system the buyer operates — is bought with a **supply / design-build (Supply and Installation of an Information System)** contract.
- **An obligation of means** — advice, studies, designs, supervision, capacity, where the quality of the *people* dominates and you pay against accepted reports — is bought with a **consulting** contract.
- **Works** (civil construction) and **goods** (off-the-shelf items) are their own categories.

A consulting contract procures *best effort*; a supply contract procures *a result*. Choosing the wrong one is the most consequential and most common error in platform procurement, because the vehicle silently determines the evaluation method, the contract remedies, and even which firms bid.

## The decision test

Ask, in order:

1. **Is the deliverable a working system the buyer formally accepts and operates** — involving software/licences, installation, integration, configuration, and an operational-acceptance test? → **Supply / Installation of Information Systems.**
2. **Is the deliverable advice, a study, a design, a strategy, supervision, or capacity** — where success is the expertise applied and the reports accepted, not a running system? → **Consulting.**
3. **Mixed** (e.g. build a platform *and* draft legal instruments *and* run training)? → Classify by the **predominant** nature. For a platform engagement the predominant nature is supply; fold the advisory and capacity work in as **supplier deliverables** within the supply contract, or split off a small separate consulting contract if the buyer prefers category purity. Keep any **independent verification (IV&V)** as a *separate* small contract regardless — the checker must not be the party being checked.

The tell-tale that a "ToR" is the wrong instrument: it is for a working platform, yet it has to *bolt on* acceptance testing, performance security, warranty and penalties as non-standard clauses. Those are standard in a supply contract and alien to a consulting one — that mismatch is the signal to switch.

## Why the vehicle decides more than it looks

The vehicle fixes three things at once:

- **Evaluation method.** Supply/IS → **rated criteria**, award to the **Most Advantageous Proposal/Bid** (combined technical-and-price), with mandatory pass/fail gates and often a scored live demonstration. Consulting → CV/quality-weighted methods (QCBS, QBS, etc.).
- **Contract machinery (the "teeth").** A result obligation needs: **acceptance testing → Operational Acceptance**, a **performance security**, a **warranty / defects-liability** period, **liquidated damages** (for delay and for SLA/performance shortfalls), and an **advance-payment guarantee**. A means obligation uses deliverable-based payments and report acceptance — and lacks all of the above.
- **Bidder pool.** System integrators bid supply-and-install; consulting firms bid QCBS. Pick the vehicle that attracts the firms that can actually deliver the obligation.

## Funder parametrisation

The vehicle is universal; the *document set and method names* are funder-specific. Take the funder as an input and name the right instrument:

- **World Bank (Procurement Regulations for IPF Borrowers):** Information Systems → *Request for Proposals / Request for Bids — Supply and Installation of Information Systems*, with **Rated Criteria** and award to the **Most Advantageous Bid/Proposal**; single- or two-stage. Consulting → QCBS / QBS / FBS / LCS / CQS. Note: open international competition; domestic preference is limited and rule-bound.
- **AfDB / other MDBs:** equivalent supply-and-install vs consulting tracks under their own rules.
- **EU (PRAG):** service vs supply contracts; the method follows the contract type.
- **National (e.g. a public-procurement authority):** map to the nearest national equivalent.

Two-stage bidding is worth recommending where the technical solution cannot be fully specified up front; single-stage with rated criteria is fine where a strong Statement of Requirements already exists.

## Output — a short decision record (ADR)

Produce a one-page recommendation the buyer can act on and defend to the funder:

```
Recommended vehicle: <e.g. Supply & Installation of Information Systems (single-stage RFP, rated criteria)>
Obligation type: <result | means | mixed-predominantly-X>
Why: <2–3 sentences tying the obligation to the vehicle>
Selection method: <rated criteria → Most Advantageous Proposal | QCBS | …> and indicative weighting
Contract machinery required: <acceptance/OAT, performance security, warranty, LDs, advance guarantee>
Mixed-scope handling: <advisory & capacity as supplier deliverables; IV&V retained separately>
Options considered and not recommended: <e.g. consulting QCBS — obligation of means, lacks result machinery>
Funder & document set: <e.g. World Bank SPD: RFP — Supply and Installation of Information Systems>
```

Recording the **option considered and rejected** matters: it gives the procurement committee and the funder the reasoning, so the choice is not second-guessed and a stale alternative document need not be shipped.

## Worked example

A government has an interoperability platform to build (GovStack/X-Road), plus legal/governance advisory and capacity building, funded by a World Bank programme. A consulting Terms of Reference (QCBS) was drafted first.

**Recommendation:** procure as a **single turnkey Supply and Installation of an Information System**, selected by **Request for Proposals (Information Systems) with rated criteria**, awarded to the **Most Advantageous Proposal**. The platform, its operation for a defined period and transfer are an **obligation of result**, so the supply vehicle's acceptance/Operational Acceptance, performance security, warranty and liquidated damages are exactly what is needed; it also matches the system-integrator bidder pool. The advisory and capacity work become **supplier deliverables**; the **IV&V agent is retained separately**.
**Considered and not recommended:** consulting QCBS — the right vehicle for advice, but it procures an *obligation of means* and would require non-standard bolt-ons to approximate acceptance, warranty and performance remedies.

## Quality checklist

- The recommendation is justified by the **obligation type**, not by habit or by what document already exists.
- The **selection method and contract machinery** match the vehicle.
- **Mixed scope** is handled explicitly (predominant nature; minor scope as deliverables or a separate package; IV&V separate).
- The **funder's actual document set / method name** is cited.
- The **option(s) considered and rejected** are recorded.

## Pairs with

- **framework-to-sor** — produce the Statement of Requirements the chosen vehicle needs as its technical core.
- **is-rfp-builder / annex-pack-builder** — assemble the bidding document and the Data Sheet / acceptance / SLA / agreement annexes that carry the contract machinery.
- **local-participation-designer** — design funder-compliant local/SME inclusion without detaching delivery capability from an accountable prime.
