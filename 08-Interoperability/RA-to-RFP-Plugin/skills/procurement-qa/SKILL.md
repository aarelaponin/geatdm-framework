---
name: procurement-qa
description: >-
  Cross-document consistency and compliance gate for a government tender package before issuance —
  checks that the RFP, the Data Sheet/annexes and the traceability matrix agree with each other and
  meet the funder's rules. Use WHENEVER a tender/RFP package is finished or edited and before it is
  shared or issued: "QA the package", "is it consistent", "ready to issue", "check the RFP before we
  send it", "consistency check", "did the names drift across documents", "compliance check on the
  bidding documents". Catches the regressions that quietly discredit a tender: naming drift across
  files, citations of unpublished sources, party-term inconsistency, mandatory requirements with no
  acceptance test, evaluation weights that don't sum, scope-boundary contradictions, and unfilled
  placeholders. Always run it after any build or edit. Pairs with every builder in the kit.
compatibility: Python (python-docx, openpyxl) for automated cross-file checks; otherwise manual.
---

# Procurement QA — the consistency gate

## Why this exists

A tender is several documents that must agree: the RFP, the Data Sheet and annexes, and the traceability matrix. A single literal regression — one document saying "GamPay" while the others say "GovPay", or a requirement that cites an unpublished architecture — is exactly the kind of thing a careful reviewer (or the funder, or a bidder writing a clarification) catches, and it discredits the whole set. **Consistency is a gate, not a hope.** Run this before issuance and after any edit round.

## The checks

Run these across **all** documents in the package together, not one at a time.

### 1. Naming consistency (the highest-yield check)
The same system, product, agency or person must be named identically everywhere. Build a small glossary of the canonical names and grep every file for variants. The class of bug to catch: a corrected name in one document and the old name surviving in another (e.g. a matrix sheet built from a pre-correction source). Check system names, product names, acronyms, and the platform name.

### 2. No unpublished or stale citations
No requirement or clause cites an unpublished/personal source as authoritative. The requirements must be self-contained, citing only published standards. Also: no references to a superseded document (e.g. an old "ToR" once the package became an "RFP").

### 3. Party-term consistency
One term for the contracting party throughout (e.g. "Supplier" in a supply RFP, "Consultant" in a consulting ToR) — no mixture. The term must match the procurement vehicle.

### 4. Requirement → test coverage
Every **mandatory** requirement traces to an acceptance test (theme level at minimum; per-REQ-ID where required). No requirement is orphaned; no acceptance gate references a REQ-ID that doesn't exist.

### 5. Evaluation arithmetic
Rated-criteria points **sum to 100** (or the stated total). The weighting, pass/fail gates and award basis stated in the RFP match the Data Sheet. Any scored demonstration appears in both.

### 6. Scope-boundary coherence
The in-scope/out-of-scope statement is consistent across documents, and **no requirement contradicts it** (e.g. a "deliver the payment component" requirement when payment is declared out of scope / integrate-only). The reuse-first principle is not violated by a build requirement.

### 7. Placeholders and open decisions
Every `[confirm]` / `[to be set]` / bracketed placeholder is intentional and listed for the buyer (ideally in the transmittal). No accidental "TODO"/"TBD"/"lorem" left in.

### 8. Cross-reference integrity
Annex letters and section numbers referenced in the body actually exist and point to the right place (renumbering after inserting a section is a common breakage). The annex index matches the annexes present.

### 9. Funder-rule compliance
Selection method, securities, liquidated damages, eligibility and any local-participation/domestic-preference provisions are within the funder's rules (e.g. local participation *encouraged and scored*, not *mandated*, under open international competition). The result-obligation machinery (acceptance/Operational Acceptance, performance security, warranty, LDs) is present for a supply contract.

## How to run it

Prefer **automated checks** for the mechanical ones. With `python-docx` and `openpyxl` you can extract all text (paragraphs + table cells) from every `.docx` and every sheet of the `.xlsx`, then: grep the name glossary for variants; assert the party term is single; sum the evaluation table; list placeholders; and confirm every REQ-ID referenced in gate checklists exists in the SoR. Report a single pass/fail with the offending locations — naming and arithmetic are objective and scriptable, so script them rather than eyeballing.

The judgement checks (scope coherence, funder compliance, citation appropriateness) need a read-through, but the automated sweep tells you where to look.

## Output

A short QA report: each check Pass/Fail with the specific offending text and file, and a remediation list. Re-run after fixes until clean. Only then is the package ready to hand to the buyer / funder.

## Pairs with

Run after `is-rfp-builder`, `annex-pack-builder`, `traceability-matrix-builder`, and `framework-to-sor`; before `transmit-package`.
