const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, TabStopType, TabStopPosition,
  TableOfContents, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, PageBreak } = require("docx");

const CW = 9360; // content width US Letter, 1" margins
const BLUE = "1F4E79", LBLUE = "D6E4F0", GREY = "F2F2F2", HDR = "2E75B6";
const border = { style: BorderStyle.SINGLE, size: 1, color: "BFBFBF" };
const borders = { top: border, bottom: border, left: border, right: border };

// ---------- helpers ----------
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const H3 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(t)] });
const P = (t, opts={}) => new Paragraph({ spacing: { after: 120 }, children: parseRuns(t), ...opts });
function parseRuns(t){
  // supports **bold** inline
  if (typeof t !== "string") return [t];
  const parts = t.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map(s => s.startsWith("**") && s.endsWith("**")
    ? new TextRun({ text: s.slice(2,-2), bold: true })
    : new TextRun(s));
}
const BULLET = (t) => new Paragraph({ numbering: { reference: "bl", level: 0 }, spacing: { after: 60 }, children: parseRuns(t) });
const NUM = (t,ref="nm") => new Paragraph({ numbering: { reference: ref, level: 0 }, spacing: { after: 60 }, children: parseRuns(t) });

function runsSized(t, size, opts={}) {
  const parts = String(t).split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map(s => s.startsWith("**") && s.endsWith("**")
    ? new TextRun({ text: s.slice(2,-2), bold: true, size, ...opts })
    : new TextRun({ text: s, size, ...opts }));
}
function cell(text, { w, head=false, fill, bold=false, align } = {}) {
  const runs = head
    ? [new TextRun({ text: String(text), bold: true, color: "FFFFFF", size: 18 })]
    : runsSized(text, 18, bold ? { bold: true } : {});
  return new TableCell({
    borders, width: { size: w, type: WidthType.DXA },
    margins: { top: 60, bottom: 60, left: 100, right: 100 },
    shading: { fill: fill || (head ? HDR : "FFFFFF"), type: ShadingType.CLEAR },
    verticalAlign: VerticalAlign.CENTER,
    children: [new Paragraph({ alignment: align, children: runs })]
  });
}
function table(headRow, rows, widths) {
  const mk = (arr, head) => new TableRow({ tableHeader: head, children: arr.map((c,i)=>cell(c,{w:widths[i],head})) });
  return new Table({
    width: { size: CW, type: WidthType.DXA }, columnWidths: widths,
    rows: [ mk(headRow, true), ...rows.map((r)=> new TableRow({ children: r.map((c,i)=> {
      const fill = (typeof c==="object" && c.fill) ? c.fill : undefined;
      const txt = (typeof c==="object" && "t" in c) ? c.t : c;
      return cell(txt,{w:widths[i],fill,align:(typeof c==="object"&&c.align)?c.align:undefined}); }) })) ]
  });
}
const SPACER = () => new Paragraph({ spacing:{after:80}, children:[new TextRun("")] });
function note(t){ return new Paragraph({ spacing:{before:80,after:120}, shading:{fill:LBLUE,type:ShadingType.CLEAR},
  border:{left:{style:BorderStyle.SINGLE,size:18,color:BLUE,space:8}}, children: parseRuns(t) }); }

const children = [];

// ---------- COVER ----------
children.push(
  new Paragraph({ spacing:{before:1200,after:120}, alignment:AlignmentType.CENTER,
    children:[new TextRun({ text:"REPUBLIC OF THE GAMBIA", bold:true, size:26, color:BLUE })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:60},
    children:[new TextRun({ text:"Gambia Information & Communication Technology Agency (GICTA)", size:22 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:600},
    children:[new TextRun({ text:"West Africa Regional Digital Integration Program (WARDIP) — World Bank Financing", italics:true, size:20 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:120},
    children:[new TextRun({ text:"REQUEST FOR PROPOSALS", bold:true, size:40, color:BLUE })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:120},
    children:[new TextRun({ text:"Supply and Installation of the", bold:true, size:26 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:120},
    children:[new TextRun({ text:"Government Interoperability Platform (GIP)", bold:true, size:26 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:600},
    children:[new TextRun({ text:"Statement of Requirements, Scope of Supply and Evaluation", bold:true, size:22 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:60},
    children:[new TextRun({ text:"Single turnkey contract — design, build, operate and transfer (an obligation of result)", size:20 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:60},
    children:[new TextRun({ text:"Selection: Request for Proposals (Information Systems) with rated criteria — award to the Most Advantageous Proposal", size:20 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:600},
    children:[new TextRun({ text:"To be issued using the World Bank Standard Procurement Document — Request for Proposals: Supply and Installation of Information Systems", italics:true, size:18 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:40},
    children:[new TextRun({ text:"Version 1.0 (DRAFT for GICTA review) — June 2026", size:18 })] }),
  new Paragraph({ alignment:AlignmentType.CENTER,
    children:[new TextRun({ text:"Requirements: Annex A (Consolidated Interoperability Requirements); GovStack specifications; National Enterprise Architecture", size:16, color:"666666" })] }),
  new Paragraph({ children:[new PageBreak()] }),
);

// ---------- TOC ----------
children.push(H1("Table of Contents"),
  new TableOfContents("Table of Contents", { hyperlink:true, headingStyleRange:"1-2" }),
  new Paragraph({ children:[new PageBreak()] }));

// ---------- ACRONYMS ----------
children.push(H1("Acronyms and Abbreviations"));
const acr = [
  ["API","Application Programming Interface"],["BC/DR","Business Continuity / Disaster Recovery"],
  ["CFR","Cross-Functional Requirements (national quality baseline)"],["CoA","Chart of Accounts"],
  ["DSA","Data Sharing Agreement"],["GIP","Government Interoperability Platform"],
  ["GICTA","Gambia Information & Communication Technology Agency"],["GovStack","GovStack initiative / Building Block specifications"],
  ["GRA","Gambia Revenue Authority"],["IFMIS","Integrated Financial Management Information System"],
  ["IM BB","Information Mediator Building Block (GovStack)"],["IV&V","Independent Verification and Validation"],
  ["MoFEA","Ministry of Finance and Economic Affairs"],["MoH","Ministry of Health"],
  ["MoCDE","Ministry of Communications and Digital Economy"],["MPI","Master Patient Index"],
  ["mTLS","Mutual Transport Layer Security"],["NDC","National Data Centre"],
  ["NEA","National Enterprise Architecture"],["NIN","National Identity Number"],
  ["OIDC","OpenID Connect"],["PKI","Public Key Infrastructure"],
  ["RFP","Request for Proposals"],["EIF","European Interoperability Framework"],
  ["MAP","Most Advantageous Proposal (award basis)"],["LD","Liquidated Damages"],
  ["OAT","Operational Acceptance Test"],["SoR","Statement of Requirements (Annex A)"],
  ["SLA","Service Level Agreement"],["SOC","Security Operations Centre"],
  ["TIN","Taxpayer Identification Number"],["IS","Information System(s)"],
  ["WARDIP","West Africa Regional Digital Integration Program"],["X-Road","Open-source data-exchange layer (GovStack IM BB reference)"],
];
children.push(table(["Acronym","Definition"], acr, [2200,7160]),
  new Paragraph({ children:[new PageBreak()] }));

// ===================================================================
// 1. BACKGROUND & CONTEXT
children.push(H1("1. Background and Context"));
children.push(P("The Government of The Gambia, through the Gambia Information & Communication Technology Agency (GICTA), is implementing a national digital-government programme under the World Bank–financed West Africa Regional Digital Integration Program (WARDIP). A foundational element of that programme is the establishment of a national data-exchange backbone — the **Government Interoperability Platform (GIP)** — through which public institutions exchange data securely, reuse data the State already holds, and deliver joined-up digital services to citizens and businesses."));
children.push(P("Today, government systems operate largely in isolation. Each Tier-1 ministry maintains its own data stores (GAMBIS for citizen identity, GamTax Net and ASYCUDA World for revenue, IFMIS for finance, DHIS2 for health), with no shared data definitions, no authoritative reference registries, and no formal data-sharing agreements. Cross-ministry exchange is largely manual and email-based; GovPay is the sole example of working real-time data exchange. This duplication raises cost, degrades service quality, and prevents the State from acting on a single, trusted view of a citizen or a business."));
children.push(P("The mandatory requirements for this assignment are set out in this RFP — in particular the **Consolidated Interoperability Requirements Specification at Annex A**, which the Supplier shall meet in full. These requirements are organised on the five **European Interoperability Framework (EIF)** layers (legal, organisational, semantic, technical, infrastructure) with governance and legal cross-cutting, and are to be implemented using the following **published, authoritative specifications and standards**, which are binding on the Supplier:"));
children.push(BULLET("the **GovStack specifications** — in particular the **Information Mediator Building Block** specification (with X-Road as the reference implementation), the **GovStack Cross-Functional / non-functional requirement specifications**, and other relevant GovStack Building Block specifications;"));
children.push(BULLET("open technical and security standards — **OpenAPI 3.1**, **OAuth 2.0 / OpenID Connect**, **mutual TLS**, **CloudEvents 1.0** (over AMQP/MQTT) for the event layer, the **OWASP API Security Top 10**, and, for domain extensions where applicable, **HL7 FHIR R4** and **ISO 20022**; and"));
children.push(BULLET("the **National Enterprise Architecture (NEA)** — the Gambia requirements baseline: the GIP-centred national topology, the two-tier mediation standard, the technical and API standards, the 26-point National Integration Map, the national data architecture and the five-tier data-classification framework."));
children.push(P("Annex A is self-contained: it states each requirement explicitly, so the Supplier's obligations do not depend on any external or unpublished document. Where a requirement is met by a published standard, the standard is named."));
children.push(note("**Scope boundary.** This contract procures the **GIP — the national data-exchange backbone** — together with the legal, governance, semantic and capacity foundations needed to operate it. It does **not** build the separate national systems that the GIP merely exchanges data with or connects to: the national **payment service (GovPay)**, the national **digital identity / IAM**, the **citizen service portal**, the **notification service**, and the standalone **terminology** and **open-data** platforms are **out of scope** — the GIP integrates with them through standard interfaces, under the reuse-first rule, where and when the pilot requires."));
children.push(note("**Funding constraint.** WARDIP closes on **31 December 2028**. All WARDIP-funded delivery under this assignment must be substantially complete, accepted and disbursed before that date. The schedule, the operate period and the payment plan in this RFP are all structured to the WARDIP window; recurrent operation beyond the close is funded by the Government through the national budget (MTEF), not by WARDIP."));

// 2. OBJECTIVES
children.push(H1("2. Objectives of the Assignment"));
children.push(P("**Development objective.** To establish a secure, standards-based national interoperability capability that enables joined-up public services, reduces system duplication, and gives Government one rulebook for procurement, integration and audit."));
children.push(P("**Specific objectives.** The Supplier shall:"));
children.push(NUM("design, build and commission the GIP as a federated, X-Road/GovStack Information Mediator–based data-exchange backbone deployed on GICTA-provided infrastructure;"));
children.push(NUM("operationalise the legal, governance and semantic foundations required for lawful, governed data exchange (interoperability agreements, data-protection instruments, base registries, the Chart-of-Accounts mapping, and the data-classification framework);"));
children.push(NUM("prove the platform end-to-end through a defined set of pilot data-exchange flows drawn from the National Integration Map;"));
children.push(NUM("build GICTA's capacity to own and operate the platform, and transfer the operator function to GICTA before the close of WARDIP; and"));
children.push(NUM("ensure every delivered service meets the national Cross-Functional Requirements (CFR) quality baseline and the minimum security baseline."));

// 3. SCOPE OF SERVICES
children.push(H1("3. Scope of Supply and Services"));
children.push(P("This is a **single turnkey supply-and-install contract** delivered by one prime Supplier (which may be a joint venture), carrying an **obligation of result**: a working, tested and accepted GIP. The scope comprises three integrated workstreams — the platform build and operation are the system supply; the legal/governance/semantic advisory and the capacity-building are **Supplier deliverables within this contract** — all bounded to the Foundation and Pilot phases plus a short operate-and-transfer period."));
children.push(H2("3.1 Stream A — Build and operate the GIP"));
children.push(BULLET("Design, build and commission the GIP based on the GovStack Information Mediator Building Block (X-Road reference implementation): Security Server, synchronous Service Access layer, asynchronous Publish/Subscribe layer, and API gateway (GovStack IM BB specification; NEA §4.2 — integration point INT-23, P1-Foundational; Annex A §F)."));
children.push(BULLET("Implement the service registry and API catalogue, with **mandatory OpenAPI 3.1** registration of all services (Annex A §E–§F; NEA §4.2.2)."));
children.push(BULLET("Implement trust services and PKI, with **OAuth 2.0 / OpenID Connect / mutual TLS** authentication (Annex A §F; NEA §4.2.2)."));
children.push(BULLET("Implement event/publish-subscribe management for event-driven flows (Annex A §F)."));
children.push(BULLET("Implement the security architecture and the minimum security baseline, and integrate platform traffic with the national SOC (Annex A §F; NEA INT-25)."));
children.push(BULLET("Implement consent and access-logging at the exchange layer, and integrate with separate national systems (e.g. national identity/IAM, GovPay, the citizen portal, notification) only through standard interfaces under the reuse-first rule — those systems are not built under this contract (Annex A §F)."));
children.push(BULLET("Apply the national Cross-Functional Requirements (CFR) baseline — adopting the GovStack Cross-Functional Specifications — to every delivered service as the mandatory quality floor (Annex A §F)."));
children.push(BULLET("Implement the five-stage platform onboarding lifecycle and legacy transition / exception handling, including SOAP-to-REST adapters at service boundaries (Annex A §F; NEA §4.2.2)."));
children.push(BULLET("Deploy onto **GICTA-provided hosting** (National Data Centre / sovereign G-Cloud), configured for environment separation, resilience and BC/DR (Annex A §G)."));
children.push(BULLET("Onboard the pilot data-exchange flows defined in Section 5, and ensure interim 'GIP-compatible' bilateral connections can migrate onto the GIP as a deployment change rather than a redesign (NEA §4.3.2)."));
children.push(H2("3.2 Stream B — Legal, governance and semantic advisory"));
children.push(P("The Supplier operationalises the requirements baseline already set out in Annex A and the NEA; it does not author the rules from scratch. All legal, governance and data instruments are **proposed by the Supplier and approved and owned by GICTA**."));
children.push(BULLET("Draft the interoperability legal instruments and data-protection arrangements, and the Data Sharing Agreement (DSA) framework using the two-agreement model (Annex A §B; NEA §5.5)."));
children.push(BULLET("Operationalise the governance arrangements: institutional framework, RACI, the regulator/operator split, the compliance and enforcement method, and the service-management framework (Annex A §C)."));
children.push(BULLET("Establish the service-ownership model, the service-design method, and seed the national service catalogue from the pilot (Annex A §D)."));
children.push(BULLET("Establish the semantic foundations: data governance; base registries and authoritative-source resolution; the four identity master keys (NIN, TIN, MPI, MDA codes); the **Chart-of-Accounts revenue mapping (INT-07, 'Integration Point Zero')**; the five-tier data-classification crosswalk for NDGB ratification; and metadata/semantic standards (Annex A §E; NEA §4.3.4, §5.2–5.4)."));
children.push(H2("3.3 Stream C — Capacity, community and sustainability"));
children.push(BULLET("Establish the capability-building programme (Digital Transformation Academy model), the priority-skills tracks for leaders/service-owners and for architects/engineers, the elevator-architect role, and communities of practice (Annex A §H)."));
children.push(BULLET("Deliver a structured, front-loaded operator hand-over and knowledge transfer to GICTA, certified against defined competencies (Annex A §F, §H)."));
children.push(BULLET("Deliver the sustainability and funding model for post-transfer operation, feeding the WARDIP-to-MTEF transition (Annex A §H)."));
children.push(H2("3.4 Out of scope"));
children.push(P("This contract delivers a **complete Government Interoperability Platform** — the GIP data-exchange backbone (Information Mediator, service/API/data catalogues, trust services and PKI, the event layer, security and exchange-layer access-logging) together with the legal, governance, semantic and capacity foundations needed to operate it."));
children.push(P("**Explicitly out of scope.** The following are separate national systems that the GIP integrates with through standard interfaces (reuse-first) but does **not** build under this contract: the national **payment service (GovPay)**; the national **digital identity / IAM**; the **citizen service portal**; the **notification service**; and the standalone **terminology** and **open-data** platforms. Also deferred to follow-on contracts: expansion onboarding of the wider service estate (10–20+ services); whole-of-government and cross-border (ECOWAS) roll-out; and recurrent operation/maintenance of the GIP beyond the WARDIP close (funded by Government via MTEF)."));

// 4. GOVERNANCE & INSTITUTIONAL ARRANGEMENTS
children.push(H1("4. Governance and Institutional Arrangements"));
children.push(P("The assignment is delivered under a **regulator/operator split** (Annex A §C). GICTA remains the regulator and architecture owner and is the eventual platform operator; the Supplier builds the GIP, operates it for a defined period, builds GICTA's operating capability, and transfers the operator function to GICTA."));
children.push(P("**Reporting.** The Supplier reports to a GICTA-appointed Project Manager and to a Project Steering Committee (chaired by GICTA, with MoFEA, GRA, MoH and MoCDE represented). The Supplier works with a named GICTA counterpart team that participates throughout for knowledge transfer."));
children.push(note("**Independent assurance (resolves the self-marking risk).** Because a single turnkey Supplier both advises on the rules and builds to them, GICTA will retain an **independent Verification & Validation (IV&V) / QA agent under a separate, small contract** (not part of this assignment) to verify deliverables and test the platform against the Annex A and NEA requirements before GICTA accepts them. The Supplier shall cooperate fully with the IV&V agent, provide access to environments, code, test results and documentation, and shall have **no conflict of interest** with the IV&V agent. Acceptance criteria are owned and signed off by GICTA; the IV&V agent verifies against them."));

// 5. PILOT SERVICES
children.push(H1("5. Pilot Data-Exchange Flows"));
children.push(P("The pilot proves the GIP itself (NEA integration point INT-23) end-to-end — synchronous query, event-driven exchange, and the semantic prerequisite — on the highest-value Revenue Integration Corridor. The pilot set is fixed as follows (final confirmation in the inception phase, accounting for the Phase-1 Integration Paradox in NEA §4.1):"));
children.push(table(
  ["Ref","Pilot flow","Pattern","Source — NEA"],
  [
    ["INT-14","GRA tax/customs APIs onto the GIP","Synchronous query","P1, Appendix B"],
    ["INT-08","IFMIS financial APIs via the GIP","Synchronous query","P1, Appendix B"],
    ["INT-16","Business registration → automatic TIN assignment","Event-driven (pub/sub)","Appendix B"],
    ["INT-07","Chart-of-Accounts revenue mapping (prerequisite)","Semantic artefact","P1, 'Integration Point Zero'"],
  ], [1100,3700,2360,2200]));
children.push(P("Health-sector flows (e.g. INT-18 eCRVS↔MPI, routed through the Tier-2 OpenHIM mediator using HL7 FHIR) remain in the follow-on contract."));

// 6. APPROACH & PHASING
children.push(H1("6. Implementation Approach and Phasing"));
children.push(P("The assignment follows a **Phased Rollout** approach, bounded at the Pilot and compressed to the WARDIP window. Phase 0 re-estimates the detailed timeline against The Gambia's context (digital maturity, number of agencies, resource availability and legal readiness). The indicative schedule assumes contract award around Q2 2027."));
children.push(table(
  ["Phase","Window (from award)","Indicative calendar"],
  [
    ["0. Contextualization","Months 1–2","Q2–Q3 2027"],
    ["1. Foundation","Months 3–7","Q3 2027 – Q1 2028"],
    ["2. Pilot","Months 8–11","Q1 – Q2 2028"],
    ["Operate & Transfer","Months 12–18","Q2 – Q4 2028 (transfer before 31 Dec 2028)"],
  ], [3000,3000,3360]));
children.push(P("The Supplier shall apply a 'design for federation' and 'reuse-first' discipline throughout, and shall keep test and production environments separate, with no bypass of the onboarding gates (Annex A §F)."));

// 7. TECHNICAL & FUNCTIONAL REQUIREMENTS
children.push(H1("7. Technical and Functional Requirements"));
children.push(P("The requirements in Annex A and the NEA are binding, as are the published GovStack and open standards named below. Without limiting them, the Supplier shall comply with the following mandatory requirements, each verifiable by the IV&V agent:"));
children.push(BULLET("**Architecture pattern:** two-tier mediation with the national GIP as Tier 1; the GIP is a data-exchange layer, not a heavy ESB, and does not host business logic (NEA §4.2)."));
children.push(BULLET("**API standard:** OpenAPI 3.1, REST/JSON for all cross-government services; domain extensions only where NEA §4.2.2 specifies them; no new SOAP/XML integrations (legacy via adapters)."));
children.push(BULLET("**Security:** OAuth 2.0 / OIDC / mutual TLS; the minimum security baseline (Annex A §F); all platform traffic monitored by the national SOC."));
children.push(BULLET("**Quality floor:** the national CFR baseline (Annex A §F), adopting the **GovStack Cross-Functional Specifications**, mandatory in design, delivery, testing and production approval."));
children.push(BULLET("**Data classification:** the five-tier national framework, with GIP mediation rules per tier and DSA-gated exchange (NEA §5.4)."));
children.push(BULLET("**Openness and ownership (mandatory):** GICTA owns and controls the source code; an open, standards-based stack is used; the **adapter pattern** is mandated so that institution-specific connectors are isolated from the core platform and the State is not locked to the Supplier (Annex A §F)."));
children.push(BULLET("**AI-readiness:** services are designed to be AI-operable in line with Annex A §F."));

// 8. OPERATE & TRANSFER
children.push(H1("8. Operate and Transfer"));
children.push(P("From pilot go-live, the Supplier operates the GIP under agreed SLAs and service metrics (Annex A §C–§D) for a **short, WARDIP-funded operate-and-transfer period (~6 months)**, with co-running and knowledge transfer front-loaded from the Pilot phase. The Supplier shall:"));
children.push(BULLET("operate the platform to the SLA schedule (Annex F), with a defined support model and service credits for SLA breaches;"));
children.push(BULLET("certify the GICTA operating team against defined competencies and deliver complete runbooks and operations manuals;"));
children.push(BULLET("pass a **transfer-readiness gate** (GICTA team certified; documentation complete; IV&V-verified) before final acceptance; and"));
children.push(BULLET("complete the transfer of the operator function to GICTA **before 31 December 2028**."));
children.push(note("**Post-close support.** A 12-month warranty / defects-liability period and any ongoing maintenance & support beyond 31 December 2028 must be funded outside WARDIP (Government MTEF or a follow-on operation). Bidders shall **price a post-close M&S option** so a figure exists for the 2029 budget line; this option is not funded under the WARDIP contract."));

// 9. CAPACITY BUILDING & KT
children.push(H1("9. Capacity Building and Knowledge Transfer"));
children.push(P("Knowledge transfer is a graded, measurable obligation, not a closing annex. The Supplier shall deliver the Academy tracks against real (pilot) services, run communities of practice, and embed the GICTA counterpart team in delivery (shadowing → co-delivery → independent operation). Acceptance of the Operate & Transfer phase depends on the GICTA team being certified to operate the GIP independently."));

// 10. KEY PERSONNEL
children.push(H1("10. Key Personnel"));
children.push(P("The Supplier shall propose, at minimum, the following key experts. CVs are scored (Section 15); each expert must meet the stated minimum experience and demonstrate comparable national-platform / tax-administration delivery, with weight on African / lower-middle-income-country contexts."));
children.push(table(
  ["Role","Minimum qualification & experience"],
  [
    ["Team Leader / Programme Director","15+ yrs; led ≥1 national interoperability / GovStack or X-Road platform delivery"],
    ["Interoperability / Enterprise Architect","12+ yrs; EIF/TOGAF; GovStack Information Mediator Building Block"],
    ["Security & PKI / Trust Services Specialist","10+ yrs; PKI, OAuth2/OIDC, mutual TLS, SOC integration"],
    ["Semantic / Data Governance & Base Registries Specialist","10+ yrs; base registries, master data, data classification"],
    ["Legal / Data-Protection & Agreements Specialist","10+ yrs; data-protection law, interoperability/data-sharing agreements"],
    ["Governance & Institutional Change Specialist","10+ yrs; public-sector digital governance, operating models"],
    ["Capacity-Building / Academy Lead","8+ yrs; public-sector ICT capability programmes"],
    ["Platform Operations / SRE Lead","8+ yrs; running production data-exchange/integration platforms"],
  ], [3700,5660]));

// 11. SUPPLIER QUALIFICATIONS & ELIGIBILITY
children.push(H1("11. Supplier Qualifications and Eligibility"));
children.push(P("Qualification is set to be **proportionate** — high enough to protect the obligation of result, but **not gold-plated in ways that exclude capable Gambian firms, including SMEs**. The criteria are deliberately designed so that a **Gambian-led or Gambian-participating joint venture or subcontracting team** can qualify and compete."));
children.push(BULLET("**Joint ventures and subcontracting are expressly permitted and encouraged.** Qualification requirements (experience and financial standing) may be met by the **combined capacity of the JV members** (and named specialist subcontractors); they need not be met by any single firm. The JV agreement and lead partner are identified, with members jointly and severally liable."));
children.push(BULLET("**Platform-delivery capability must sit with an accountable prime/JV member.** At least one delivery of a national interoperability platform on the GovStack Information Mediator Building Block / X-Road (or equivalent) is required, and this **critical capability must be held by a jointly-and-severally-liable JV member** — it may **not** be met by a subcontractor alone. A specialised firm may supplement that capability only as a **named, committed, non-replaceable** team member alongside a substantial prime; the accountable platform-delivery capability cannot be subcontracted away. A Gambian firm may lead, provided the platform-delivery capability sits with a liable JV member."));
children.push(BULLET("**Skills transfer and local capability development.** Bidders describe a concrete, measurable knowledge-transfer and local-capability plan (training, embedding GICTA/local staff in delivery, and sustainment) so GICTA can operate and evolve the GIP with its own people; this is scored (Section 15) on the substance of the transfer, not on nationality. Any bidder can earn it by genuinely investing in local capability; local firms may participate as lead, JV member or subcontractor."));
children.push(BULLET("**Proportionate financial standing.** Financial thresholds (turnover, liquidity) are set to the realistic contract value and cash-flow, not inflated multiples; audited statements for the most recent years are assessed at team level."));
children.push(BULLET("No conflict of interest with the IV&V / QA agent retained by GICTA."));
children.push(BULLET("Eligibility in accordance with the World Bank Procurement Regulations for IPF Borrowers. (Note: open international competition applies; local participation is enabled through team structure and scored criteria, within the limits the Regulations allow — it is encouraged, not mandated.)"));

// 12. DURATION
children.push(H1("12. Duration and Indicative Timeline"));
children.push(P("The assignment runs approximately **18 months from contract award** (~15 months to pilot go-live and a short operate-and-transfer tail), with all WARDIP-funded activity completed before **31 December 2028**. The detailed timeline is confirmed in the inception phase. Given the WARDIP window, the procurement is on the critical path and should be launched as expeditiously as the World Bank process allows."));

// 13. CLIENT INPUTS
children.push(H1("13. Client Inputs and Facilities"));
children.push(BULLET("**Hosting:** GICTA provides the production and non-production hosting (National Data Centre / sovereign G-Cloud). Where G-Cloud production is not yet available at Foundation, GICTA provides a suitable interim environment by a dated obligation."));
children.push(BULLET("Access to the existing-systems and data inventory (Annex D), and to pilot-agency counterparts (GRA, MoFEA/IFMIS, the business registry)."));
children.push(BULLET("This RFP (including Annex A) and the NEA document, and the GICTA counterpart team."));
children.push(BULLET("Facilitation of the legal/regulatory approvals required for the interoperability instruments and DSAs."));

// 14. REPORTING
children.push(H1("14. Reporting Requirements"));
children.push(table(
  ["Report","Timing"],
  [
    ["Inception report","End of Month 2"],
    ["Monthly progress reports","Monthly"],
    ["Phase-gate reports (Foundation, Pilot, Transfer)","At each gate"],
    ["Quarterly steering-committee report","Quarterly"],
    ["Final report & transfer dossier","Before 31 Dec 2028"],
  ], [5660,3700]));

// 15. EVALUATION
children.push(H1("15. Evaluation and Award"));
children.push(P("Selection follows the World Bank **Request for Proposals for Information Systems** using **rated criteria**, with award to the **Most Advantageous Proposal** — the substantially responsive proposal with the best combined technical-and-cost score, not merely the lowest price. A two-envelope process is used: the technical proposal is evaluated against the rated criteria first, and the price envelope is opened only for substantially responsive proposals."));
children.push(P("**Stage 1 — Mandatory requirements (pass/fail).** A proposal must pass all mandatory gates to be evaluated further: eligibility under the World Bank Procurement Regulations; required eligibility/financial standing; at least one verifiable reference of a delivered national interoperability platform on the GovStack Information Mediator Building Block / X-Road (or equivalent); compliance with the mandatory technical requirements of Annex A; and no conflict of interest with the IV&V agent."));
children.push(P("**Stage 2 — Rated criteria.** Substantially responsive proposals are scored on the technical merit below; the technical score is then combined with price (illustratively **70% technical / 30% price**, to be confirmed in the WARDIP procurement plan) to determine the Most Advantageous Proposal."));
children.push(table(
  ["Rated criterion","Points"],
  [
    ["Technical solution — fit to Annex A & the NEA baseline; GIP/X-Road architecture; security & trust design","30"],
    ["Implementation methodology, work plan and acceptance approach (incl. migration & onboarding)","20"],
    ["Key personnel and firm experience on comparable national platforms","20"],
    ["Operate, support, transfer and capacity-building approach","10"],
    ["Skills transfer & local capability development (measurable knowledge transfer, embedding & sustainment; earned by genuine investment, not nationality)","10"],
    ["Demonstration of a working IM-BB integration (live, on a supplied scenario)","10"],
    [{t:"Total technical",fill:GREY},{t:"100",fill:GREY}],
  ], [7660,1700]));
children.push(P("A **live demonstration of a working IM-BB integration** on a Purchaser-supplied scenario is required and scored (it is not a slide presentation). The combined technical-and-price evaluation and the award basis are set out in the RFP Data Sheet."));

// 16. ACCEPTANCE, SECURITIES, WARRANTY, LDs
children.push(H1("16. Acceptance, Securities, Warranty and Liquidated Damages"));
children.push(P("Because this is a supply contract carrying an obligation of result, delivery is governed by formal acceptance testing and backed by securities and remedies — the machinery a results-obligation needs and a consulting contract lacks. These provisions are given effect by the World Bank Supply and Installation of Information Systems contract conditions."));
children.push(BULLET("**Acceptance testing and Operational Acceptance.** The System is accepted through a defined test regime: pre-installation/factory tests; installation and integration tests; the independent security assessment and penetration test (a Pilot go-live gate, Annex A §F); and an **Operational Acceptance Test (OAT)** run over a defined stability period on the pilot flows. **Operational Acceptance**, signed by GICTA on IV&V verification, is the formal trigger for go-live acceptance, for release of the corresponding payment, and for the start of the warranty period."));
children.push(BULLET("**Performance security.** The Supplier shall provide an unconditional performance security (a percentage of the contract price, set in the Data Sheet) valid through Operational Acceptance and the warranty period."));
children.push(BULLET("**Warranty / defects liability.** A warranty (defects-liability) period — recommended 12 months — runs from Operational Acceptance, during which the Supplier corrects defects at no cost; a portion of the performance security is retained against it."));
children.push(BULLET("**Liquidated damages.** Delay LDs apply against the key milestones (Foundation, Pilot go-live, Operational Acceptance, transfer); **performance LDs / service credits** apply to SLA breaches during the operate period — each capped as set in the Data Sheet. Persistent failure beyond the caps is a default event."));
children.push(BULLET("**Advance-payment security.** Any advance payment is covered by an advance-payment guarantee for its full amount until recovered."));

// 17. PAYMENT
children.push(H1("17. Payment Schedule"));
children.push(P("Payments are **deliverable- and milestone-based**, released on GICTA-accepted, IV&V-verified acceptance (Operational Acceptance for the system milestones); they are not time-based. The schedule separates **capital (build)** from **operating (operate & support)** lines. All WARDIP-funded tranches are scheduled before 31 December 2028, with a meaningful final tranche held to certified transfer. The performance security and liquidated damages in Section 16 apply; service credits apply to the operate SLAs."));
children.push(table(
  ["Milestone","Indicative %"],
  [
    ["Inception acceptance","10%"],
    ["Foundation gate (IV&V-verified)","30%"],
    ["Pilot go-live and acceptance (IV&V-verified)","30%"],
    ["Operate period (periodic, against SLAs)","15%"],
    ["Certified transfer / final acceptance (≤ Dec 2028)","15%"],
  ], [7660,1700]));

// 18. RISKS
children.push(H1("18. Risks, Assumptions and Dependencies"));
children.push(table(
  ["Risk / dependency","Mitigation"],
  [
    ["WARDIP funding cliff (31 Dec 2028)","Expedite procurement; compress build; transfer before close; MTEF funds post-close M&S"],
    ["Procurement lead time on critical path","Pre-clear the RFP with the Bank task team; expedite no-objections"],
    ["Self-marking (advisory + build in one contract)","Pre-set Annex A / NEA requirements + independent IV&V + GICTA-owned Operational Acceptance"],
    ["Phase-1 Integration Paradox (NEA §4.1)","Keep interim bilateral connections GIP-compatible and migratable"],
    ["Hosting readiness (late G-Cloud production)","Dated GICTA obligation to provide an interim environment"],
    ["Identity foundation incomplete (no MPI yet)","Master-key work on the critical path; non-revenue identity flows deferred"],
    ["Legal-instrument lead time (6–18 months)","Start Stream B in Phase 0"],
    ["Pilot-agency commitment","Secure MoUs/DSAs with GRA, MoFEA/IFMIS and the registry before go-live"],
  ], [4380,4980]));

// 19. ANNEXES
children.push(H1("19. Annexes"));
children.push(P("The following annexes form part of this RFP:"));
children.push(BULLET("**Annex A** — Consolidated Interoperability Requirements Specification (set out below): the full mandatory requirements, organised by EIF layer, that the Supplier shall meet."));
children.push(BULLET("**Annex B** — National EA requirements baseline: the National Integration Map (below), the two-tier mediation standard and API/technical standards, the identity master keys, and the five-tier classification framework."));
children.push(BULLET("**Annex C** — Cross-Functional Requirements (CFR) baseline."));
children.push(BULLET("**Annex D** — Existing-systems and data inventory."));
children.push(BULLET("**Annex E** — Deliverable acceptance-criteria templates (basis for IV&V verification)."));
children.push(BULLET("**Annex F** — SLA schedule."));
children.push(BULLET("**Annex G** — Data Sharing Agreement / interoperability-agreement templates."));
children.push(BULLET("**Annex H** — Confirmed pilot service list (Section 5)."));
children.push(note("**Annex status.** Annex A (below) and Annex B are drafted. **Annexes C–G are to be completed before issuance** — they carry the detailed acceptance criteria, schedules and templates against which delivery is judged. The requirement list in Annex A is the obligation set; the measurable acceptance detail lives in Annexes C, E and F, which must be finalised with GICTA before the RFP is released."));
// ---------- ANNEX A: Statement of Requirements (section-by-section) ----------
children.push(new Paragraph({ children:[new PageBreak()] }));
children.push(H1("Annex A — Statement of Requirements"));
children.push(P("This annex is the complete, self-contained statement of the interoperability requirements the Supplier shall meet. It is organised on the European Interoperability Framework (EIF) layers (A–H). Each requirement area gives an **Intent** (what the capability is and why it matters, so both the Supplier and GICTA share the same understanding of what to build and what to expect), the specific **mandatory requirements** (numbered REQ-…, each a checkable obligation), the **applicable published standard** where one applies, and the **acceptance basis** the IV&V agent uses to verify delivery."));
children.push(P("**Reading the requirements — actor roles.** Some requirements describe obligations of the parties in the operating model. Unless stated otherwise: the **regulator / architecture owner** is GICTA; the **platform operator** is the Supplier during the operate period and GICTA after transfer; **institutions** are the ministries and agencies that connect to and consume the GIP. The Supplier shall build and configure the GIP, the shared components, and the supporting instruments so that each party can discharge the obligations below. Requirements marked **(target-state)** apply once the GIP is in production; **(to be confirmed)** marks an item GICTA confirms in the inception phase. Where a requirement is met by a published standard (GovStack, OpenAPI, OAuth/OIDC, mutual TLS, CloudEvents 1.0, OWASP API Security Top 10, HL7 FHIR, ISO 20022, EIF/TOGAF), the Supplier shall conform to that standard."));
const areas = JSON.parse(fs.readFileSync("authored_reqs.json","utf8"));
const layerTitle = {A:"A — Cross-cutting principles",B:"B — Legal interoperability",C:"C — Governance",D:"D — Organizational interoperability & services",E:"E — Semantic interoperability",F:"F — Technical interoperability",G:"G — Infrastructure interoperability",H:"H — Capacity & sustainability"};
for (const L of ["A","B","C","D","E","F","G","H"]) {
  const grp = areas.filter(a=>a.L===L);
  if(!grp.length) continue;
  children.push(H2("Annex A." + layerTitle[L]));
  let n=0;
  for (const a of grp){
    children.push(H3(a.title));
    if (a.intent) children.push(new Paragraph({ spacing:{after:70}, children:[ new TextRun({text:"Intent. ",bold:true}), new TextRun(a.intent) ] }));
    for (const r of a.reqs){ n++; children.push(new Paragraph({ numbering:{reference:"bl",level:0}, spacing:{after:30},
      children:[ new TextRun({text:"REQ-"+L+"-"+String(n).padStart(2,"0")+" — ",bold:true}), new TextRun(r) ] })); }
    const meta=[];
    if(a.std) meta.push("Applicable standard: "+a.std+".");
    meta.push("Acceptance: "+a.accept);
    children.push(new Paragraph({ spacing:{after:150}, children:[ new TextRun({text:meta.join("  "), italics:true, size:17, color:"555555"}) ] }));
  }
}
children.push(new Paragraph({ children:[new PageBreak()] }));
children.push(H2("Annex B (extract) — National Integration Map"));
children.push(P("All 26 cross-ministry integration points from the NEA, with priority and target mechanism. P1 points constitute the minimum viable integration architecture; the pilot (Section 5) draws from them."));
const intRows = [
  ["INT-01","IFMIS ← GRA (Revenue Data)","P1-Critical","Batch→API(GIP)→Event"],
  ["INT-02","GovPay ↔ IFMIS","P1-Enhance","Direct API"],
  ["INT-03","GovPay ↔ GRA GamTax Net","P1-Critical","Direct API"],
  ["INT-04","GovPay ↔ GRA ASYCUDA","P1-Critical","Direct API"],
  ["INT-05","GRA → MoFEA (Tax Arrears)","P2","GIP"],
  ["INT-06","GRA → MoFEA (Exemption Register)","P2","GIP"],
  ["INT-07","CoA Revenue Mapping (Integration Point Zero)","P1-Critical","Batch / registry"],
  ["INT-08","IFMIS → GIP (Financial APIs)","P1","GIP"],
  ["INT-09","GovPay ↔ MyGov","P2","GIP"],
  ["INT-10","MoFEA → Open Data","P3","GIP"],
  ["INT-11","G-Cloud ← IFMIS (hosting)","P2–3","Infra migration"],
  ["INT-12","IFMIS ← MoH (Health Budget)","P2","GIP"],
  ["INT-13","GovPay ← MoH (Health Fees)","P2","GIP"],
  ["INT-14","GRA ↔ GIP (Tax/Customs APIs)","P1","GIP"],
  ["INT-15","GRA ↔ National IAM (TIN↔NIN)","P2","GIP"],
  ["INT-16","GRA ← GIEPA (Business Registration)","P2","GIP (event-driven)"],
  ["INT-17","GRA ← NDAS (Address Data)","P2","GIP"],
  ["INT-18","eCRVS ↔ MPI (via HIE)","P1-Critical","Direct API (OpenHIM)"],
  ["INT-19","eCRVS ↔ National Identity Broker","P2","GIP"],
  ["INT-20","DHIS2 → G-Cloud","P2","Infra migration"],
  ["INT-21","MoH Systems ↔ GIP","P2","GIP"],
  ["INT-22","GRA ← eCRVS (Death Registration)","P3","GIP"],
  ["INT-23","GIP ↔ All Tier-1 Systems","P1-Foundational","X-Road GIP backbone"],
  ["INT-24","National IAM ↔ All Systems","P2","GIP"],
  ["INT-25","NCSC/SOC ↔ All DPI Platforms","P1","GIP monitoring"],
  ["INT-26","HRMIS ↔ GIP","P2","GIP"],
];
children.push(table(["Ref","Integration point","Priority","Target mechanism"], intRows, [1000,4360,1900,2100]));
children.push(SPACER());
children.push(note("This document is a DRAFT prepared for GICTA review. It provides the **Statement of Requirements, Scope of Supply and Evaluation** for issuance using the World Bank Standard Procurement Document — **Request for Proposals: Supply and Installation of Information Systems** — with the remaining RFP parts (Letter of Invitation, Instructions to Bidders, Bid Data Sheet, the Supply and Installation contract conditions, and bidding forms) completed in the standard template."));

// ---------- DOC ----------
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 21 } } },
    paragraphStyles: [
      { id:"Heading1", name:"Heading 1", basedOn:"Normal", next:"Normal", quickFormat:true,
        run:{ size:30, bold:true, font:"Arial", color:BLUE },
        paragraph:{ spacing:{before:300,after:160}, outlineLevel:0, keepNext:true } },
      { id:"Heading2", name:"Heading 2", basedOn:"Normal", next:"Normal", quickFormat:true,
        run:{ size:25, bold:true, font:"Arial", color:HDR },
        paragraph:{ spacing:{before:200,after:120}, outlineLevel:1, keepNext:true } },
      { id:"Heading3", name:"Heading 3", basedOn:"Normal", next:"Normal", quickFormat:true,
        run:{ size:22, bold:true, font:"Arial", color:"333333" },
        paragraph:{ spacing:{before:160,after:100}, outlineLevel:2, keepNext:true } },
    ],
  },
  numbering: { config: [
    { reference:"bl", levels:[{ level:0, format:LevelFormat.BULLET, text:"•", alignment:AlignmentType.LEFT,
      style:{ paragraph:{ indent:{ left:540, hanging:280 } } } }] },
    { reference:"nm", levels:[{ level:0, format:LevelFormat.DECIMAL, text:"%1.", alignment:AlignmentType.LEFT,
      style:{ paragraph:{ indent:{ left:540, hanging:300 } } } }] },
  ] },
  sections: [{
    properties: { page: { size:{ width:12240, height:15840 }, margin:{ top:1440, right:1440, bottom:1440, left:1440 } } },
    headers: { default: new Header({ children:[ new Paragraph({
      border:{ bottom:{ style:BorderStyle.SINGLE, size:4, color:"BFBFBF", space:4 } },
      children:[ new TextRun({ text:"GICTA — RFP (Supply & Installation): Government Interoperability Platform (GIP)", size:14, color:"888888" }) ] }) ] }) },
    footers: { default: new Footer({ children:[ new Paragraph({
      tabStops:[{ type:TabStopType.RIGHT, position:TabStopPosition.MAX }],
      children:[ new TextRun({ text:"DRAFT v1.0 — June 2026", size:14, color:"888888" }),
        new TextRun({ text:"\tPage ", size:14, color:"888888" }),
        new TextRun({ children:[PageNumber.CURRENT], size:14, color:"888888" }),
        new TextRun({ text:" of ", size:14, color:"888888" }),
        new TextRun({ children:[PageNumber.TOTAL_PAGES], size:14, color:"888888" }) ] }) ] }) },
    children,
  }],
});
Packer.toBuffer(doc).then(b => { fs.writeFileSync("RFP_GIP_WARDIP_v1.0_DRAFT.docx", b); console.log("WROTE", b.length); });
