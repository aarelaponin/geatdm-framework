# KP2 read against 08-Interoperability — alignment review

**Date:** 12 September 2026
**Source of knowledge:** `geatdm-framework/08-Interoperability/` — Reference Model v1.0, Method v1.0 (8 steps), Toolkit v1.0 (TK-IO-01…14), Reference Architecture v1.0 (docx, 54 RULES boxes), RA-to-RFP Guide v1.0 + plugin.
**Checked:** `KP2-GIF/build_kp2_module{1–4}_v01.js`, `build_kp2_module5_v02.js` (37 subtopics), the rendered `gitbook/kp2/`.
**Rule applied:** 08 → build script → GitBook + video. The GitBook is not edited; a finding that needs a content change is a build-script change, and the pages re-render.
**Standard:** not one-to-one — a learner who finishes KP2 should hold the same understanding a reader of 08 holds. "Major" below means the learner would leave with a *different* understanding, not a thinner one.

---

## 0. Verdict

**The spine matches.** The four EIF layers, the four functional layers, the three trust zones, the three-tier governance, the RACI, the member obligations, the five-part Decree Drafting Kit, the standards portfolio, the semantic map on ISO 11179, the four-phase build, Member Requirements, the SLA, the onboarding steps and the once-only outcome all come from 08 and are taught as 08 states them. Module ↔ Method step mapping is clean: M1 = Steps 1–2, M2 = Step 3, M3 = Step 4, M4 = Steps 5–6, M5 = Steps 7–8.

**Six findings are major** — a learner would leave with a different understanding from 08 on each:

| # | Finding | Where | 08 source |
|---|---|---|---|
| A | **The Two-Track Regulatory Memo is mis-defined.** KP2 teaches it as "decree vs primary legislation — the two routes to enactment". In 08 it is the memo that coordinates the interoperability decree with the country's **personal-data-protection law** (in force or in development). This is 2.5's single message, and it is the wrong document. | 2.2, 2.5, 2.6 tip | Method §5.2 item 5, §5.3.6, §5.5; TK-IO-04 A4_2 |
| B | **"Built, not bought" is taught without the other half.** 1.1 says a procurement clause cannot deliver interoperability — 08 agrees (T16 traps; Method §9.5). But 08's delivery end *is* a tender: the RA is the enforceable spec, procurement is an enforcement lever (RA §4.8, three compliance checkpoints §4.7), and the RA-to-RFP plugin turns RA + National EA into a Supply-and-Installation RFP. KP2 never mentions the RA, the procurement plan (Method §9.3.3) or the RFP path. A learner would think procurement is the wrong lens; 08 says it is the lever, once the framework exists. | 1.1, 5.1, home | RA §4.7, §4.8, §13; Guide §2, §3; Method §9.3.3 |
| C | **Timeline promise is more optimistic than 08.** KP2 (5.1, the storyboard) says the first real once-only exchange runs "inside the first six-month phase", "months not years". 08: Steps 1–7 take 12–18 months of team effort before Phase 1 starts; Phase 1 (0–6) delivers "2 pilot members, first authentication-only services"; the **first cross-ministry data exchange is Phase 2 (7–12)**; the first milestone (central infrastructure + 3–5 member services) lands at **24–36 months calendar from programme start**; full national coverage 4–6 years. | 5.1, 5.10, home storyboard (B38), 6.6 material | Method §2.1, §2.2, §9.2; TK-IO-14 |
| D | **The regulator/operator split is absent.** KP2's Operating Authority both runs the bus *and* owns the standards, admits members, monitors service levels and resolves disputes (3.1). The RA names this the most common institutional failure and makes the split a rule: *"No single body both operates the platform and rules on compliance with it"* — the regulator owns the architecture, standards, compliance method and sanctions; the operator runs the platform, onboarding and support. (The Reference Model v1.0 itself still describes a single operating authority, so 08 carries both; the RA is the later, deeper doctrine and says a small administration may make them two units in one agency.) | 3.1, 3.3, 3.6, 5.8 | RA §4.4, §4.7; RM §5.2 |
| E | **Conformance testing does not exist in KP2.** 08 makes it a standing mechanism: a Conformance Test Suite / self-assessment / third-party regime (Method §8.2.4), a template (TK-IO-12), step 4 of the six-step member onboarding (Method §10.2), and a recertification cycle. KP2 has acceptance checks for the *demo* (5.6) but no conformance regime for *members*. The word does not appear in any of the 37 scripts. | 3.6, 4.3, 5.2, 5.4 | Method §8.2.2–8.2.4, §10.2; TK-IO-07, TK-IO-12 |
| F | **Step 7 is taught as one artefact; 08 makes it five.** 5.1 delivers the four-phase plan with a cost frame. Method §9 delivers the plan **plus** an Investment Plan (capex/opex, PAERA §4.5 sustainability commitment for donor-funded portions), a Procurement Plan (T60 single-domain lots, no big-bang), a Workforce Plan (operating-authority staffing 8–15 → 30–80; member focal points), a Risk Register (TK-IO-13) and Success Metrics (TK-IO-14). None of the last five appears anywhere in KP2. | 5.1 (and 3.1 for staffing) | Method §9.3; TK-IO-13, TK-IO-14; RM §5.2 |

**Nine are minor** (naming drift or a thinner treatment, same understanding) — §2.

---

## 1. Module by module

### Module 1 ↔ Method Steps 1–2, RM §2, TK-IO-01/02/03

| KP2 | 08 | Reading |
|---|---|---|
| 1.1 built not bought | T16 traps; Method §9.5 "single big-bang procurement" | Consistent on the trap; **missing the lever (B)**. |
| 1.2 four layers | RM §2.1–2.2 | Match. RM's "three seams" (legal authorises organisational; organisational governs technical+semantic; technical+semantic enable legal compliance) is a sharper statement than KP2's "skip one and it fails" — worth one beat, minor. |
| 1.3 once-only promise | Method §4.2.5 once-only map; PAERA §5.2 #5 | Match. |
| 1.4 Strategic Foundation Document | TK-IO-01 (7 sections + annexes); Method §3.2.5 | Match on purpose; KP2's four sections are a subset of TK-IO-01's seven. Missing: **Tier 1 Stakeholder Commitment Letters** and the **Inception Workshop** (Method §3.2.3–3.2.4, pitfall "skipping Tier 1 sponsorship") — minor, one beat in 1.6. |
| 1.5 Use-Case Catalogue | TK-IO-03; Method Step 2 | Match on fields. Method assigns Step 2 to the *Architect*; KP2 teaches it to the Strategist — minor. |
| 1.6 stakeholders — Champions / Early Adopters / Observers | TK-IO-02 Tier 1/2/3 — same names | Match. |
| 1.7 what the world proved | RM §1.3 source frameworks | Match. |

### Module 2 ↔ Method Step 3, TK-IO-04, RM §6.4

| KP2 | 08 | Reading |
|---|---|---|
| 2.1 why a mandate | Method §5.1, §5.3.1 legal-corpus review | Match. |
| 2.2 five components | Method §5.2; TK-IO-04 | Match on four of five; **the fifth is mis-defined (A)**. |
| 2.3 Memorandum + Preamble | TK-IO-04 A1, A2 | Match. |
| 2.4 Draft Articles | TK-IO-04 A3; Method §5.3.2–5.3.5 | Articles match (scope, mandatory connection, once-only, data protection, OA powers, disputes/enforcement). Missing: the **~ten principles** the decree codifies (§5.3.2) and the **progressive sanctions regime** with proportionality review (§5.3.5, pitfall) — KP2 has "disputes and enforcement" as one row. Minor-to-moderate; one beat. |
| 2.5 Cover Note + Two-Track | TK-IO-04 A4_1, A4_2 | Cover Note matches; **Two-Track (A)**. |
| 2.6 decree as configuration | — | KP2's own construct; consistent with §5.5 "drafting in the abstract" pitfall. Fine. |

### Module 3 ↔ Method Step 4, RM §5, TK-IO-05

| KP2 | 08 | Reading |
|---|---|---|
| 3.1 why a bus needs an owner | RM §5.2; Method §6.2.2 | Match on "name the owner with budget, staff, mandate". Missing: the **three organisational forms** (dedicated agency / ministry department / independent statutory body) and their trade-offs, and the **staffing scale** (8–15 initial → 30–80) — minor. **Regulator/operator split (D)**. |
| 3.2 three tiers | RM §5.1 | Match (Council quarterly / Steering monthly / TWGs). |
| 3.3 RACI | RM §5.3 | Match. |
| 3.4 member obligations | RM §5.4; Method §5.3.3, §6.2.4 | Match on the core. Missing: **designate a Data Protection Officer and a Technical Focal Point**, and **cost-sharing contribution** — three of RM's six obligations. Minor, one slide row each. |
| 3.5 four TWGs — specification, semantics, security, onboarding | RM §5.1 — security, semantics, APIs, platform operations | Naming drift; same idea. Minor — align names or say "for example". |
| 3.6 change control + standards register | Method §8.2.3 publication procedure, §8.2.6 backward compatibility / deprecation | Match. Missing: the **semantic registry** as a standing asset the OA stewards (Method §8.2.5; RM §3.5) — moderate; and **conformance (E)**. |

### Module 4 ↔ Method Steps 5–6, RM §3, §4, §6, TK-IO-06/07

| KP2 | 08 | Reading |
|---|---|---|
| 4.1 four functional layers | RM §3.1 | Match. Event Distribution is named but never taught; RM §3.3 makes pub/sub (AsyncAPI, at-least-once, replay) "the architectural foundation for Once-Only". Method §7.2.1 allows deferring it to Wave 2, so acceptable — minor, one beat saying so. |
| 4.2 three trust zones | RM §4.3; §4.2 security layers | Match on zones and mTLS/signing. Missing: **timestamping and the signed audit log as the legal-evidence basis** (RM §3.4, §4.2 "the legal-evidence basis"), PKI/HSM. Minor-to-moderate — one beat: "the log is what the legal layer relies on". |
| 4.3 standards portfolio | RM §6.1; TK-IO-07 | Match. TK-IO-07's per-standard fields (binding date, transition period, **conformance test approach**) are not named — ties to E. |
| 4.4 semantic map | RM §6.2; Method §8.2.5 | Match. |
| 4.5 OpenAPI contract | RM §6.1 | Match. |
| 4.6 Giga bronze/silver/gold | RM §6.2 (Giga School), §7.3 | Consistent (KP2-specific worked case). |
| 4.7 wire onto the bus | RM §3.2; Method §7.2.6 IM BB conformance | Match. |
| 4.8 data-protection envelope | RA §3.3 two-agreement model | Consistent; the RA's crucial rule — **"platform membership never, by itself, authorises access to any dataset"** — is what 4.8 + 5.4's ACL + the pack's "publication is not permission" demonstrate, but no script says the sentence. Minor, one beat. |

### Module 5 ↔ Method Steps 7–8, TK-IO-08/09/10/13/14, RA §7.13, §9

| KP2 | 08 | Reading |
|---|---|---|
| 5.1 four phases — Core Platform / Pilot Services / Multi-agency Onboarding / Optimisation and Scale (0–6 / 6–12 / 12–18 / 18–24+) | Method §9.2 — Foundation / Pilot and Validation / Expansion / Optimisation (0–6 / 7–12 / 13–18 / 19–24); RA §9 adds Phase 0 Contextualisation | Months match; names drift (minor). **Deliverables and timing (C)**; **the other four plan artefacts (F)**. |
| 5.2 Member Requirements — six rows | TK-IO-08 — seven sections | Match on substance; KP2's six are a good subset. |
| 5.3 SLA | TK-IO-09 | Match. |
| 5.4 register a member | Method §10.2 steps 1–3, 5; TK-IO-10 | Match; **step 4 conformance test missing (E)**. |
| 5.5 stand up the federation | RM §4.1 deployment (Central Server, Security Servers, TSA) | Match. |
| 5.6 once-only live | Method §10.2 step 6; RA §7.13 stage (d) | Match. The RA's **dual go-live approval** (regulator confirms compliance, operator confirms technical readiness) is a sharper gate — ties to D. |
| 5.7 demo → production | RM §4.5 HA; Method §10.3.1 (99.9%, 5-min RTO); RA §8 | Match. |
| 5.8 monitoring | RM §3.5; Method §10.3.1, §10.3.3 | Match on operational monitoring. Missing: **compliance monitoring and performance reporting** (quarterly to Steering, annual to Council, six-monthly to citizens — §10.3.3–10.3.4) — minor, one beat. |
| 5.9 document cross-check | RA §1.4 lifecycle (annual review, versioning) | Consistent. |
| 5.10 next sector | Method §3.2.2 Wave 1/2 sectors; RM §7.3 sectoral consumption | Consistent; RM's Wave-1 guidance (Tax, Civil Registration, Business Register, Health first; Education Wave 2) is worth one line, since KP2 demonstrates on Education. Minor. |

### Not in KP2 at all (RA-only doctrine)

Reuse-first and the five-step delivery logic (RA §2.1, §7.4); source-code ownership and the open-source adapter pattern (§7.3); the cross-functional requirements baseline (§7.5); the three compliance checkpoints and the written-exception register (§4.7); the three aligned catalogues — service / API / data (§6.6); authoritative-source resolution as a *governed decision* the regulator records (§6.2); the interoperability community and the Academy (§4.9, §10); the RULES convention with FUTURE / TO BE CONFIRMED markers (§1.3). These are the "Toolkit growth" the 08 README describes. A learner does not need the RA's full rulebook from a video series, but needs to know it exists and what it is for — which is finding B.

---

## 2. Minor findings (naming and thinness — same understanding)

1. 3.5 TWG names: specification / semantics / security / onboarding → RM's security / semantics / APIs / platform operations.
2. 5.1 phase names → Method's Foundation / Pilot and Validation / Expansion / Optimisation.
3. 3.4 obligations: add DPO, Technical Focal Point, cost-sharing.
4. 3.1: the three organisational forms; staffing scale.
5. 2.4: the ~ten principles; progressive, proportionate sanctions.
6. 1.6: Tier 1 Commitment Letters and the Inception Workshop; 1.4 the seven TK-IO-01 sections.
7. 4.2: timestamping and the signed audit log as the legal-evidence basis.
8. 4.1: event distribution as the once-only foundation, deferrable to Wave 2.
9. 4.8: say the RA's rule — membership is not access.
10. 5.8: compliance monitoring and the reporting cadence.
11. 5.10: Wave-1 sector guidance.
12. 3.6: the semantic registry as a standing asset.
13. 1.2: the three seams.
14. Persona: Step 2 is Architect work in the Method; 1.5 is Strategist in KP2 (leave; note in calibration).
15. GitBook home "Where this sits": name the five pieces of 08 (Reference Model, Method, Toolkit, RA, RA-to-RFP) as what KP2 is the companion to.

---

## 3. Proposed script changes (08 → js → GitBook → videos)

Ordered by what a learner would otherwise get wrong. Each is a beat or a slide row in an existing video — no new videos, no module restructuring. Word budgets stay inside the ~5-minute cap by trimming the recap paragraphs the videos already carry in excess (the QA soft warnings).

### Tier 1 — fixes a wrong understanding (findings A–F)

| Script | Change |
|---|---|
| `build_kp2_module2` → v0.2 | **A.** 2.2 slide 2 row and beat: Two-Track = coordination of the interoperability decree with the personal-data-protection law (in force or in development). 2.5 single message, YouTube title, description, beats and AI tip rewritten: the memo gives the Ministry of Justice **two coordinated tracks** — the decree and the DP law — with the points of intersection (definitions, data-subject rights, cross-border transfer, DPO, sanctions overlap), where the decree defers, where it fills a gap, and the coordination mechanisms (joint subordinate regulation, MoU, joint enforcement). The "decree vs primary legislation" choice is a real question — keep it as one beat in the Cover Note half, since it *is* the transmittal's ask. 2.4: add the ~ten principles and the progressive, proportionate sanctions ladder (warning → fine → restriction → suspension → escalation). |
| `build_kp2_module1` → v0.2 | **B.** 1.1: keep the message, add one beat + slide row: "You will still buy — the central platform, the security servers, integration services. The framework changes what the tender says: its rules become mandatory requirements, the buyer owns the architecture, and the contract is for a working platform, not for advice. That path — from the reference architecture to a tender — is in the toolkit." 1.6: Tier 1 Commitment Letters + Inception Workshop. 1.2: the three seams. |
| `build_kp2_module5` → v0.3 | **B/C/F.** 5.1: phase names to Method's; the phases start once the foundation steps are done; Phase 1 = Foundation (central infra, PKI, 2 pilot members, first authentication-only services), Phase 2 = first cross-ministry exchange; the honest calendar (first milestone 24–36 months from programme start, coverage 4–6 years); the plan is five artefacts — phased plan, Investment Plan (capex/opex, sustainability commitment for donor money), Procurement Plan (single-domain lots, never one big-bang contract; the RA-to-RFP path), Workforce Plan (8–15 → 30–80), Risk Register, Success Metrics (members, services, transactions/quarter, uptime, onboarding cycle, satisfaction). AI tip extended to produce the five. 5.10: reconcile "months not years" → "a first live exchange within the build's first year; a framework over years". **E.** 5.4: add conformance test as the gate between deployment and first service (self-assessment / third-party / test suite; recertification every 24 months and on standards change). **D.** 5.6: dual go-live approval. 5.8: compliance monitoring + reporting cadence. |
| `build_kp2_module3` → v0.2 | **D.** 3.1: the regulator/operator split as the recommended pattern (rules vs running; a small administration = two units in one agency; written into both mandates); the three organisational forms; staffing scale. 3.3: the split's RACI rows (architecture & standards A/R regulator; platform operation A/R operator; service and data ownership A/R institution). **E.** 3.6: conformance regime + semantic registry as standing assets. 3.4: DPO, Technical Focal Point, cost-sharing. 3.5: TWG names. |
| `build_kp2_module4` → v0.2 | **E.** 4.3: per-standard entry carries binding date, transition period and conformance-test approach. 4.2: timestamping + signed audit log = the legal-evidence basis. 4.8: "membership is not access". 4.1: event distribution as once-only's foundation, deferrable. |
| `kp2_home.py` + `play-map.json` | Storyboard timeline (C); "Where this sits" names the five pieces of 08 (B); catalogue intro. |

### Tier 2 — thinness only (minor 8, 11, 12, 14, 15)

Can ride along with Tier 1 in the same regeneration, or wait.

### What does not change

Module structure, subtopic numbering, personas, the build pack, the play chain (B-series), the fold of Module 6. Every change is inside an existing video's script, slide spec, tip or metadata.

---

## 4. One thing 08 should hear back

The Reference Model v1.0 (§5.2) and the RA (§4.4) disagree on whether the operating authority sets standards and judges compliance or whether that sits with a separate regulator. The 08 README reconciles the *layer* count (four vs five) but not this. KP2 will teach the RA's split as the recommended pattern and the RM's single body as the small-administration case; the RM's next version should say the same.

---

## 5. Applied — 12 September 2026

Tier 1 and Tier 2 applied in one pass; the regulator/operator split taught as the recommended pattern (decision: Arne, 12 Sep).

| Script | Version | What changed | Gate |
|---|---|---|---|
| `build_kp2_module1_v02.js` | v0.1 → v0.2 | 1.1 procurement as the lever once the framework exists + the RA-to-tender path (B); 1.2 the three seams; 1.4 the seven sections; 1.6 inception workshop + commitment letters | 0 hard |
| `build_kp2_module2_v02.js` | v0.1 → v0.2 | 2.2/2.5/2.6 Two-Track memo = decree ↔ data-protection-law coordination, route-to-enactment kept as the Cover Note's ask (A); 2.4 the ~ten principles + the sanctions ladder | 0 hard |
| `build_kp2_module3_v02.js` | v0.1 → v0.2 | 3.1 regulator/operator split, three organisational forms, staffing scale (D); 3.3 the split's RACI rows; 3.4 DPO, Technical Focal Point, cost-sharing; 3.5 TWG names as the source; 3.6 conformance regime + semantic registry (E) | 0 hard |
| `build_kp2_module4_v02.js` | v0.1 → v0.2 | 4.1 event distribution as once-only's foundation, deferrable; 4.2 timestamped, signed audit log as the legal-evidence basis; 4.3 binding date / transition period / conformance-test approach per standard (E); 4.8 "membership is never access" | 0 hard |
| `build_kp2_module5_v03.js` | v0.2 → v0.3 | 5.1 source phase names and deliverables, the honest calendar, the five plan artefacts (C, F); 5.4 conformance test as the gate before first service (E); 5.6 dual go-live approval (D); 5.8 quarterly compliance review + reporting cadence, cross-reference to the previous video removed; 5.10 Wave-1 sector order | 0 hard |
| `kp2_home.py`, `render_kp2.py`, `play-map.json` | — | storyboard on the honest calendar (C); home page names the five pieces of 08 (B); B14/B19/B28 artefact names | `gitbook_qa` 100 pages, 0 findings |

Superseded scripts and bundles are in `_retired/`. Not applied (left for ITU / the 10 Sep review): the script-vs-pack corrections (M5 v0.3 §5.7), and the RA-only doctrine beyond what a learner needs to know exists (five-step delivery logic, CFR baseline, three compliance checkpoints, the catalogue ecosystem) — candidates for the GitBook companion rather than the videos.
