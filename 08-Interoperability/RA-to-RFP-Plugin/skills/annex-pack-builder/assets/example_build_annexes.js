const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, TabStopType, TabStopPosition,
  TableOfContents, HeadingLevel, BorderStyle, WidthType, ShadingType,
  VerticalAlign, PageNumber, PageBreak } = require("docx");

const CW = 9360;
const BLUE = "1F4E79", LBLUE = "D6E4F0", GREY = "F2F2F2", HDR = "2E75B6", AMBER="FFF3CD";
const border = { style: BorderStyle.SINGLE, size: 1, color: "BFBFBF" };
const borders = { top: border, bottom: border, left: border, right: border };
const H1 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun(t)] });
const H2 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun(t)] });
const H3 = (t) => new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun(t)] });
function parseRuns(t){
  if (typeof t !== "string") return [t];
  return t.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map(s => s.startsWith("**")&&s.endsWith("**")
    ? new TextRun({ text:s.slice(2,-2), bold:true }) : new TextRun(s));
}
const P = (t,opts={}) => new Paragraph({ spacing:{after:120}, children: parseRuns(t), ...opts });
const BULLET = (t) => new Paragraph({ numbering:{reference:"bl",level:0}, spacing:{after:60}, children: parseRuns(t) });
function runsSized(t,size,opts={}){ return String(t).split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map(s=>s.startsWith("**")&&s.endsWith("**")
  ? new TextRun({text:s.slice(2,-2),bold:true,size,...opts}) : new TextRun({text:s,size,...opts})); }
function cell(text,{w,head=false,fill,bold=false,align}={}){
  const runs = head ? [new TextRun({text:String(text),bold:true,color:"FFFFFF",size:18})] : runsSized(text,18,bold?{bold:true}:{});
  return new TableCell({ borders, width:{size:w,type:WidthType.DXA}, margins:{top:60,bottom:60,left:100,right:100},
    shading:{fill:fill||(head?HDR:"FFFFFF"),type:ShadingType.CLEAR}, verticalAlign:VerticalAlign.CENTER,
    children:[new Paragraph({alignment:align,children:runs})] });
}
function table(headRow, rows, widths){
  const mk=(arr,head)=>new TableRow({tableHeader:head,children:arr.map((c,i)=>cell(c,{w:widths[i],head}))});
  return new Table({ width:{size:CW,type:WidthType.DXA}, columnWidths:widths,
    rows:[ mk(headRow,true), ...rows.map(r=>new TableRow({children:r.map((c,i)=>{
      const fill=(typeof c==="object"&&c.fill)?c.fill:undefined; const txt=(typeof c==="object"&&"t" in c)?c.t:c;
      return cell(txt,{w:widths[i],fill,bold:(typeof c==="object"&&c.bold)}); })}))] });
}
const SPACER = () => new Paragraph({ spacing:{after:80}, children:[new TextRun("")] });
function note(t){ return new Paragraph({ spacing:{before:80,after:120}, shading:{fill:LBLUE,type:ShadingType.CLEAR},
  border:{left:{style:BorderStyle.SINGLE,size:18,color:BLUE,space:8}}, children: parseRuns(t) }); }
const PB = () => new Paragraph({ children:[new PageBreak()] });

const children = [];

// ---------- COVER ----------
children.push(
  new Paragraph({ spacing:{before:1000,after:120}, alignment:AlignmentType.CENTER, children:[new TextRun({text:"REPUBLIC OF THE GAMBIA",bold:true,size:26,color:BLUE})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:60}, children:[new TextRun({text:"Gambia Information & Communication Technology Agency (GICTA)",size:22})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:500}, children:[new TextRun({text:"WARDIP — World Bank Financing",italics:true,size:20})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:120}, children:[new TextRun({text:"REQUEST FOR PROPOSALS — SUPPORTING DOCUMENTS",bold:true,size:34,color:BLUE})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:80}, children:[new TextRun({text:"Supply and Installation of the Government Interoperability Platform (GIP)",bold:true,size:24})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:500}, children:[new TextRun({text:"Bid Data Sheet · Annex C (CFR Baseline) · Annex D (Systems & Data Inventory) · Annex E (Acceptance Criteria) · Annex F (SLA Schedule) · Annex G (Agreement Templates)",size:20})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, spacing:{after:40}, children:[new TextRun({text:"Version 1.0 (DRAFT for GICTA review) — June 2026",size:18})] }),
  new Paragraph({ alignment:AlignmentType.CENTER, children:[new TextRun({text:"Companion to RFP_GIP_WARDIP_v1.0 (main document, Sections 1–19 + Annexes A–B, H)",size:16,color:"666666"})] }),
  PB());

// ---------- TOC ----------
children.push(H1("Contents"), new TableOfContents("Contents",{hyperlink:true,headingStyleRange:"1-2"}), PB());

children.push(note("**How to use these documents.** The **Bid Data Sheet** sets the specific procurement parameters the main RFP refers to (securities, liquidated damages, weighting, dates) — values marked **[GICTA to confirm]** are policy choices for which a recommended default is shown. **Annexes C–G** provide the technical baseline, inventory, acceptance criteria, service levels and agreement templates against which proposals are prepared and delivery is judged. They are issued together with the main RFP and the World Bank Standard Procurement Document parts (Letter of Invitation, Instructions to Bidders, contract conditions and forms)."));

// ===================== BID DATA SHEET =====================
children.push(PB(), H1("Bid Data Sheet (BDS)"));
children.push(P("The Bid Data Sheet specifies and supplements the Instructions to Bidders for this procurement. Where a value is a GICTA policy choice, a recommended default is shown and marked [GICTA to confirm]."));
children.push(H2("A. General"));
children.push(table(["Ref","Item","Provision"],
[["1","Purchaser","Gambia Information & Communication Technology Agency (GICTA)"],
 ["2","Project / financing","West Africa Regional Digital Integration Program (WARDIP); World Bank (IDA)"],
 ["3","Subject","Supply, installation, operation and transfer of the Government Interoperability Platform (GIP)"],
 ["4","Governing rules","World Bank Procurement Regulations for IPF Borrowers; this RFP and its annexes"],
 ["5","Language","English"],
 ["6","Currency of proposal","GMD and/or USD; conversion and basis as in the ITB [GICTA to confirm]"]],
[900,2600,5860]));
children.push(H2("B. Method, evaluation and award"));
children.push(table(["Ref","Item","Provision"],
[["7","Procurement method","Request for Proposals for Information Systems, single-stage, two-envelope"],
 ["8","Award basis","Most Advantageous Proposal — best combined technical-and-price score among substantially responsive proposals"],
 ["9","Evaluation weighting","Technical 70% / Price 30% [GICTA to confirm against the procurement plan]"],
 ["10","Minimum technical score","70 of 100 to be considered substantially responsive [GICTA to confirm]"],
 ["11","Rated criteria","Per main RFP Section 15 (technical solution 30; methodology 20; key personnel & experience 20; operate/transfer/capacity 10; skills transfer & local capability development 10; live demonstration 10)"],
 ["12","Live demonstration","Required and scored (10) on a Purchaser-supplied scenario; not a slide presentation"],
 ["13","Mandatory requirements","Pass/fail per Section 15 Stage 1 (eligibility; financial standing; ≥1 IM-BB/X-Road national-platform reference at team level; Annex A mandatory requirements; no IV&V conflict of interest)"]],
[900,2600,5860]));
children.push(H2("C. Eligibility, qualification and local participation"));
children.push(table(["Ref","Item","Provision"],
[["14","Joint ventures","Permitted and encouraged; combined capacity of members (and named subcontractors) counts toward qualification (except the critical platform-delivery capability — see ref 17); members jointly and severally liable"],
 ["15","Average annual turnover","≥ 1.5× estimated annual contract value, averaged over the last 3 years [GICTA to confirm to contract value]"],
 ["16","Liquidity / cash flow","Access to or availability of liquid assets ≥ 2 months' estimated cash flow [GICTA to confirm]"],
 ["17","Experience (platform-delivery capability)","≥1 delivered national interoperability platform on GovStack IM BB / X-Road (or equivalent). This critical capability MUST be held by a jointly-and-severally-liable JV member, not by a subcontractor alone; a specialist may supplement only as a named, committed, non-replaceable team member. Plus base-registry/data-governance and capacity-building experience (team level)."],
 ["18","Skills transfer & local capability","A measurable knowledge-transfer and local-capability plan (training, embedding, sustainment) is required and scored (Section 15) on substance, not nationality — any bidder earns it by genuinely investing in local capability. Local firms may lead, JV or subcontract. (Open international competition; no domestic preference.)"]],
[900,2600,5860]));
children.push(H2("D. Securities, payment and remedies"));
children.push(table(["Ref","Item","Provision"],
[["19","Proposal/bid security","Bid-Securing Declaration, or bid security of [0.5–1.0% of estimated value] [GICTA to confirm]"],
 ["20","Proposal validity","120 days from submission deadline [GICTA to confirm]"],
 ["21","Performance security","10% of contract price, valid to Operational Acceptance + warranty [GICTA to confirm]"],
 ["22","Advance payment","Up to 10% against an advance-payment guarantee for the full amount [GICTA to confirm]"],
 ["23","Delay liquidated damages","0.5% of the relevant milestone/contract value per week of delay, capped at 10% [GICTA to confirm]"],
 ["24","Performance LDs / service credits","Per Annex F (operate-period SLAs), capped per Annex F"],
 ["25","Warranty / defects liability","12 months from Operational Acceptance [GICTA to confirm]"],
 ["26","Retention","A portion of the performance security retained through the warranty period"]],
[900,2600,5860]));
children.push(H2("E. Timeline and submission"));
children.push(table(["Ref","Item","Provision"],
[["27","Contract duration","~18 months from signature (build to pilot ~15 months + short operate/transfer); all WARDIP-funded activity complete before 31 December 2028"],
 ["28","Operate period","~6 months from pilot go-live to certified transfer to GICTA [GICTA to confirm to window]"],
 ["29","Pre-proposal meeting","[Date/venue — GICTA to set]; recommended for a complex platform procurement"],
 ["30","Clarification deadline","[X] days before submission [GICTA to set]"],
 ["31","Submission deadline & address","[Date, time, electronic/physical address — GICTA to set]"],
 ["32","Proposal opening","Technical envelopes opened publicly; price envelopes opened later for responsive proposals only"]],
[900,2600,5860]));
children.push(note("Values marked **[GICTA to confirm]** are recommended defaults aligned to World Bank norms for IT-system procurements of this kind; GICTA finalises them against the WARDIP procurement plan and the estimated contract value before issuance."));

// ===================== ANNEX C — CFR BASELINE =====================
children.push(PB(), H1("Annex C — Cross-Functional Requirements (CFR) Baseline"));
children.push(P("This annex is the one national CFR baseline — the quality floor every service connecting to the GIP must meet, regardless of business purpose. It adopts the **GovStack Cross-Functional / non-functional requirement specifications** and is **mandatory** in design, procurement, delivery, testing and production approval; it is verified at the three compliance checkpoints (before procurement, before go-live, in operation). Each requirement is checkable; the IV&V agent verifies it. Targets marked [confirm] are finalised in inception against the pilot load."));
const cfr = (id,req,measure,verify)=>[id,req,measure,verify];
children.push(H2("C.1 Security"));
children.push(table(["ID","Requirement","Measure / target","Verification"],
[cfr("SEC-01","Mutual TLS for all system-to-system exchange","TLS 1.2+; mTLS enforced; no plaintext","Config review; scan; pen test"),
 cfr("SEC-02","Authentication & authorisation","OAuth 2.0 / OpenID Connect; RBAC least-privilege","Test; access review"),
 cfr("SEC-03","Encryption at rest","AES-256 (or equivalent) for data at rest & backups","Config review"),
 cfr("SEC-04","Secrets & key management","No hard-coded secrets; managed vault; key rotation","Code/config review"),
 cfr("SEC-05","Vulnerability & patch management","Critical patches ≤ [15] days; routine scanning","Scan reports; SLA evidence"),
 cfr("SEC-06","Application security","Pass OWASP API Security Top 10; secure SDLC","API scan; review"),
 cfr("SEC-07","Independent security assessment","Pen test passed; high/critical findings remediated","Independent pen-test report (Pilot gate)")],
[1100,3300,2760,2200]));
children.push(H2("C.2 Reliability & availability"));
children.push(table(["ID","Requirement","Measure / target","Verification"],
[cfr("AVL-01","GIP core availability","≥ 99.5% monthly (target 99.9%) [confirm]","SLA monitoring (Annex F)"),
 cfr("AVL-02","No single point of failure","Redundancy for core components","Architecture review; failover test"),
 cfr("AVL-03","Graceful degradation & health checks","Health endpoints; degrade without cascading failure","Test"),
 cfr("AVL-04","Backup & recovery","RPO ≤ 1h; RTO ≤ 4h for core [confirm]","Recovery test (Annex F)")],
[1100,3300,2760,2200]));
children.push(H2("C.3 Performance & scalability"));
children.push(table(["ID","Requirement","Measure / target","Verification"],
[cfr("PRF-01","Synchronous mediation latency","P95 < 1s added by the mediator (excl. provider) [confirm]","Load test"),
 cfr("PRF-02","Registry/discovery lookup","< 100 ms typical","Load test"),
 cfr("PRF-03","Throughput headroom","Handle pilot peak + 100% headroom","Load test"),
 cfr("PRF-04","Horizontal scalability","Scale out without redesign","Architecture review; scaling test")],
[1100,3300,2760,2200]));
children.push(H2("C.4 Interoperability & openness"));
children.push(table(["ID","Requirement","Measure / target","Verification"],
[cfr("INT-01","API standard","OpenAPI 3.1 / REST-JSON; valid spec per service","Conformance test"),
 cfr("INT-02","Event standard","CloudEvents 1.0 over AMQP/MQTT","Conformance test"),
 cfr("INT-03","Mediator conformance","Conforms to GovStack IM BB / X-Road","Conformance test; demo"),
 cfr("INT-04","Versioning","Semantic versioning; backward compatibility policy","Review"),
 cfr("INT-05","Openness & portability","Open standards; containerised; deployable on GICTA hosting; data export","Review; deployment test")],
[1100,3300,2760,2200]));
children.push(H2("C.5 Observability & operations"));
children.push(table(["ID","Requirement","Measure / target","Verification"],
[cfr("OBS-01","Centralised logging","Structured logs; centralised; retention per policy","Review"),
 cfr("OBS-02","Metrics, tracing & dashboards","Service metrics, distributed tracing, dashboards","Demo"),
 cfr("OBS-03","Alerting & SOC/SIEM integration","Alerts to ops; GIP traffic to national SOC","Demo; SOC confirmation"),
 cfr("OBS-04","Audit logs","Tamper-evident; access logged; queryable","Review; test")],
[1100,3300,2760,2200]));
children.push(H2("C.6 Data protection, maintainability, accessibility & documentation"));
children.push(table(["ID","Requirement","Measure / target","Verification"],
[cfr("DAT-01","Data-classification handling","Tier-appropriate controls (NEA §5.4); PII access logged","Review; test"),
 cfr("DAT-02","Consent & minimisation","Consent only where lawful basis requires; minimisation","Review; DPIA"),
 cfr("MNT-01","Maintainability","Modular; Infrastructure-as-Code; documented config","Review"),
 cfr("USA-01","Accessibility of any UI","WCAG 2.1 AA for admin/citizen UIs","Accessibility audit"),
 cfr("DOC-01","Documentation & handover","Architecture, API, runbooks, operator/admin manuals, train-the-trainer","Deliverable review")],
[1100,3300,2760,2200]));

// ===================== ANNEX D — SYSTEMS & DATA INVENTORY =====================
children.push(PB(), H1("Annex D — Existing-Systems and Data Inventory"));
children.push(P("This inventory lists the systems the GIP connects to, exchanges data with, or must be aware of, drawn from the National Enterprise Architecture. It is **indicative and to be validated and completed by the Supplier with GICTA in the inception phase (Phase 0)**. 'Pilot' marks systems in the confirmed pilot scope (INT-07/08/14/16). Separate national systems (GovPay, MyGov, national IAM) are integration targets, not part of the GIP build."));
children.push(table(["System","Owner (MDA)","Domain","Role","Interface / tech (indicative)","Pilot"],
[["GAMBIS","Immigration","Citizen identity (NIN)","Data source","Legacy; API via adapter","—"],
 ["GamTax Net","GRA","Domestic tax","Source / consumer","To expose via GIP","Pilot (INT-14)"],
 ["ASYCUDA World","GRA","Customs","Source / consumer","To expose via GIP","Pilot (INT-14)"],
 ["IFMIS (Epicor 10)","MoFEA (AGD)","PFM / finance","Source / consumer","SOAP→REST adapter; GIP","Pilot (INT-08)"],
 ["GIEPA business registry","GIEPA","Business registration","Data source","To expose; event to GIP","Pilot (INT-16)"],
 ["Chart of Accounts mapping","MoFEA/GRA","Revenue↔GL semantics","Reference data","Versioned mapping to registry","Pilot (INT-07)"],
 ["GovPay","[national payment operator]","Payments","External (integrate)","Standard API","Out of build"],
 ["MyGov portal","MoCDE/GICTA","Citizen service portal","External (integrate)","Standard API","Out of build"],
 ["National IAM / identity broker","GICTA (target)","Identity federation","External (integrate)","OIDC/SAML","Out of build"],
 ["eCRVS","MoH","Civil registration (birth/death)","Data source","via OpenHIM (Tier 2)","Follow-on"],
 ["MPI / OpenCR (target)","MoH","Patient identity","Data source (new)","via OpenHIM","Follow-on"],
 ["DHIS2","MoH","Health statistics","Data source","ADX/FHIR via OpenHIM","Follow-on"],
 ["e-NHIS","MoH","Health insurance","Source / consumer","FHIR via OpenHIM","Follow-on"],
 ["OpenHIM","MoH","Health sector mediator (Tier 2)","Mediator","Federates to GIP","Follow-on"],
 ["NDAS","GICTA","Digital addressing","Data source","API via GIP","Follow-on"],
 ["HRMIS","PMO","Workforce","Source / consumer","API via GIP","Follow-on"],
 ["G-Cloud / NDC","GICTA","Hosting infrastructure","Infrastructure","Client-provided hosting","Enabling"],
 ["NCSC / SOC","GICTA","Security monitoring","Security","GIP traffic monitored","Enabling"]],
[1900,1500,1500,1300,1760,1400]));
children.push(note("**To complete in inception:** confirm system owners and contacts; current interface/version and data formats; data-classification tier per dataset; data-quality status; availability of test environments; and the precise data elements and APIs for each pilot flow (feeds the DSAs in Annex G)."));

// ===================== ANNEX E — ACCEPTANCE CRITERIA =====================
children.push(PB(), H1("Annex E — Deliverable Acceptance-Criteria Templates"));
children.push(P("Acceptance is the result-obligation mechanism: a deliverable or milestone is accepted only when it passes the criteria below, IV&V-verified and GICTA-signed. **Operational Acceptance** (Annex E.3) is the formal trigger for go-live acceptance, payment release and the warranty period."));
children.push(note("**Traceability granularity.** The traceability matrix lists every numbered requirement (REQ-A-01 … REQ-H-nn) with its acceptance basis and phase. The **bespoke, per-REQ-ID acceptance test specifications are baselined by the Supplier together with the IV&V agent at the Inception gate** (an inception deliverable), using the templates and gate checklists below; they are then recorded against each REQ-ID in the matrix. The gate checklists in E.2 operate at the work-area level and reference the REQ-IDs they cover."));
children.push(H2("E.1 Standard deliverable acceptance template"));
children.push(table(["Field","Content"],
[["Deliverable ID / title","[ID] — [name]"],
 ["Phase / milestone","Inception / Foundation / Pilot / Operate / Transfer"],
 ["Requirements covered","Annex A REQ-IDs and Annex C CFR-IDs addressed"],
 ["Acceptance test / method","Objective test, demonstration or document review that proves the requirement"],
 ["Evidence required","Test results, logs, scan/pen-test reports, documents, demo recording"],
 ["Result","Pass / Conditional (with actions & date) / Fail"],
 ["IV&V verification","IV&V agent name, finding, date"],
 ["GICTA sign-off","Authorised signatory, date"]],
[2600,6760]));
children.push(H2("E.2 Phase-gate acceptance checklists (illustrative items)"));
children.push(P("Each gate is passed only when all mandatory items are Pass. Items map to Annex A / Annex C."));
children.push(H3("Inception gate"));
children.push(table(["Item","Maps to","Result"],
[["Inception report; Gambia implementation plan; confirmed timeline","REQ-A-… ","[ ]"],
 ["Confirmed pilot shortlist and data elements","Section 5; Annex D","[ ]"],
 ["Acceptance criteria baselined with GICTA and IV&V","Annex E","[ ]"]],
[5760,2400,1200]));
children.push(H3("Foundation gate"));
children.push(table(["Item","Maps to","Result"],
[["GIP core (Security Server, Service Access, Pub/Sub, API gateway) deployed on GICTA hosting","REQ-F (GIP core)","[ ]"],
 ["Trust infrastructure live: CA, OCSP, RFC-3161 TSA; mTLS/OIDC enforced","REQ-F (Trust)","[ ]"],
 ["Security baseline implemented; SOC integration","REQ-F (Security); Annex C.1/C.5","[ ]"],
 ["Legal instruments & DSA framework drafted and GICTA-approved","REQ-B; Annex G","[ ]"],
 ["Chart-of-Accounts mapping published (INT-07)","REQ-E; Section 5","[ ]"],
 ["CFR baseline operational and being applied","Annex C","[ ]"]],
[5760,2400,1200]));
children.push(H3("Pilot go-live / Operational Acceptance gate"));
children.push(table(["Item","Maps to","Result"],
[["Pilot flows integrated and passing end-to-end (INT-14/08 sync; INT-16 event)","Section 5","[ ]"],
 ["Independent penetration test passed; OWASP API Top 10 verified","Annex C.1","[ ]"],
 ["Signed DSAs in force for each pilot flow","Annex G","[ ]"],
 ["Service registry/catalogues seeded; OpenAPI specs valid","REQ-E/F","[ ]"],
 ["Operational Acceptance Test passed over the stability period","Annex E.3","[ ]"]],
[5760,2400,1200]));
children.push(H3("Transfer-readiness gate"));
children.push(table(["Item","Maps to","Result"],
[["GICTA operating team certified to defined competencies","REQ-H","[ ]"],
 ["Complete runbooks, operations & admin manuals delivered","Annex C.6 / REQ-F","[ ]"],
 ["Source code & artefacts handed to GICTA repository","REQ-F (openness)","[ ]"],
 ["Sustainability model & 2029+ MTEF line identified","REQ-H","[ ]"]],
[5760,2400,1200]));
children.push(H2("E.3 Operational Acceptance Test (OAT)"));
children.push(P("Operational Acceptance is granted when, over a defined **stability period of [30] consecutive days [confirm]** operating the pilot flows in production-like conditions, all of the following hold:"));
children.push(BULLET("availability meets the Annex F target over the period, with no unresolved Severity-1 incident;"));
children.push(BULLET("all confirmed pilot flows pass their end-to-end acceptance tests;"));
children.push(BULLET("no open Critical or High defect; agreed Medium/Low defects have a remediation plan;"));
children.push(BULLET("the independent security assessment/penetration test is passed and high/critical findings remediated; and"));
children.push(BULLET("runbooks and operations documentation are delivered and validated."));
children.push(P("On satisfaction, GICTA issues the **Operational Acceptance Certificate** (IV&V-verified), triggering the related payment and the start of the warranty period."));

// ===================== ANNEX F — SLA SCHEDULE =====================
children.push(PB(), H1("Annex F — Service Level Agreement (SLA) Schedule"));
children.push(P("These service levels apply during the operate period, measured monthly, with service credits / performance liquidated damages for breaches (capped). Targets marked [confirm] are finalised in inception."));
children.push(H2("F.1 Availability & performance"));
children.push(table(["Service level","Target","Measurement"],
[["GIP core availability","≥ 99.5% monthly (target 99.9%) [confirm]","Uptime monitoring, excl. approved planned maintenance"],
 ["Synchronous mediation latency","P95 < 1s added by the mediator [confirm]","Synthetic & production monitoring"],
 ["Registry/discovery lookup","< 100 ms typical","Monitoring"],
 ["Data integrity / message delivery","No undetected message loss; pub/sub at-least-once","Reconciliation; logs"]],
[3200,2960,3200]));
children.push(H2("F.2 Incident management"));
children.push(table(["Severity","Definition","Response","Resolution target","Updates"],
[["Sev-1 Critical","GIP down or pilot exchange unavailable; security breach","15 min","4 h [confirm]","hourly"],
 ["Sev-2 High","Major function degraded; no workaround","30 min","8 business h","4-hourly"],
 ["Sev-3 Medium","Function degraded; workaround exists","4 business h","3 business days","daily"],
 ["Sev-4 Low","Minor / query / cosmetic","1 business day","next release","as agreed"]],
[1500,3060,1100,1900,1800]));
children.push(H2("F.3 Support, maintenance, recovery & reporting"));
children.push(table(["Item","Provision"],
[["Support hours","Business hours support + 24/7 on-call for Sev-1 during operate [confirm]"],
 ["Planned maintenance","Off-peak; ≥ 5 business days' notice; change-managed"],
 ["Backup","Automated; RPO ≤ 1h [confirm]; restore tested at least quarterly"],
 ["Disaster recovery","RTO ≤ 4h for core [confirm]; DR test before Operational Acceptance"],
 ["Security monitoring","GIP traffic monitored by the national SOC; vulnerability/patch SLAs (Annex C.1)"],
 ["Reporting","Monthly SLA report: availability, incidents, performance, security, credits"]],
[2600,6760]));
children.push(H2("F.4 Service credits / performance liquidated damages"));
children.push(table(["Breach","Credit / LD (indicative)","Cap"],
[["Availability below target","[2%] of monthly operate fee per 0.5% below target [confirm]","[10%] of monthly operate fee"],
 ["Sev-1 resolution target missed","[2%] of monthly operate fee per breach [confirm]","[10%] of monthly operate fee"],
 ["Repeated/persistent breach","Escalation; cure period; default if uncured","per contract"]],
[3200,3960,2200]));
children.push(note("Service credits are the routine remedy; persistent breach beyond the caps is a default event under the contract. Credits and caps are finalised in the Bid Data Sheet / contract."));

// ===================== ANNEX G — AGREEMENT TEMPLATES =====================
children.push(PB(), H1("Annex G — Agreement Templates (Two-Agreement Model)"));
children.push(P("The GIP uses a two-agreement model: a **Platform Membership Agreement** governs connection to the platform, and a per-exchange **Data-Sharing / Service-Use Agreement** governs access to specific data. Membership never, by itself, authorises access to any dataset. The Supplier drafts these to the structure below; **GICTA and its legal advisers finalise the binding text** (these templates are structure and guidance, not legal advice)."));
children.push(H2("G.1 Platform Membership Agreement (operator ↔ member institution)"));
children.push(table(["Clause","Content / guidance"],
[["1. Parties","Platform operator and the member institution (MDA)"],
 ["2. Purpose & scope","Connection to the GIP; what membership does and does not grant"],
 ["3. Definitions","GIP, Security Server, member, service, data owner, etc."],
 ["4. Member obligations","Meet the minimum security baseline & CFR; name business/technical/security contacts; pass onboarding gates; keep environments separate"],
 ["5. Operator obligations","Provision Security Server/credentials; availability & support (Annex F); trust services; monitoring"],
 ["6. Security & PKI","Certificates, mTLS, key management; incident notification"],
 ["7. Logging & audit","Exchange-layer logging; access to audit records"],
 ["8. Onboarding & go-live","Five-stage lifecycle; dual go-live approval; no production without a completed test exchange"],
 ["9. Suspension / exclusion","Grounds and process for suspension on security/compliance breach"],
 ["10. Liability","Allocation of responsibility; limitations"],
 ["11. Term & termination","Duration, renewal, exit and credential revocation"],
 ["12. Dispute resolution","Escalation and governing law"],
 ["13. Signatures","Authorised signatories and date"]],
[2600,6760]));
children.push(H2("G.2 Data-Sharing / Service-Use Agreement (data owner ↔ consumer)"));
children.push(table(["Clause","Content / guidance"],
[["1. Parties","Data owner institution and the consuming institution"],
 ["2. Purpose & lawful basis","Specific purpose of the exchange and its legal basis (data-protection compliant)"],
 ["3. Data elements & authoritative source","The exact data/service consumed; the authoritative source; schema/API reference"],
 ["4. Classification & handling","Data-classification tier (NEA §5.4) and the required handling controls"],
 ["5. Permitted use & purpose limitation","Use strictly for the stated purpose; onward-sharing rules"],
 ["6. Access control & consent","Access conditions; consent only where the legal basis requires it"],
 ["7. Logging & audit","Every access logged; audit rights"],
 ["8. Data quality & service levels","Accuracy/availability commitments of the data owner"],
 ["9. Retention","Retention/deletion; no unmanaged local copies"],
 ["10. Security","Security obligations consistent with the baseline"],
 ["11. Liability & indemnities","Responsibility for misuse or breach"],
 ["12. Term, review & termination","Duration, periodic review, termination and data return/deletion"],
 ["13. Schedules","Data dictionary; API specification; classification record"],
 ["14. Signatures","Authorised signatories and date"]],
[2600,6760]));
children.push(SPACER());
children.push(note("This document is a DRAFT prepared for GICTA review and is issued together with the main RFP and the World Bank Standard Procurement Document. Bracketed values and template clauses are completed/finalised by GICTA before issuance."));

// ---------- DOC ----------
const doc = new Document({
  styles: { default:{document:{run:{font:"Arial",size:21}}},
    paragraphStyles:[
      {id:"Heading1",name:"Heading 1",basedOn:"Normal",next:"Normal",quickFormat:true,run:{size:30,bold:true,font:"Arial",color:BLUE},paragraph:{spacing:{before:300,after:160},outlineLevel:0,keepNext:true}},
      {id:"Heading2",name:"Heading 2",basedOn:"Normal",next:"Normal",quickFormat:true,run:{size:25,bold:true,font:"Arial",color:HDR},paragraph:{spacing:{before:200,after:120},outlineLevel:1,keepNext:true}},
      {id:"Heading3",name:"Heading 3",basedOn:"Normal",next:"Normal",quickFormat:true,run:{size:22,bold:true,font:"Arial",color:"333333"},paragraph:{spacing:{before:160,after:100},outlineLevel:2,keepNext:true}},
    ]},
  numbering:{config:[{reference:"bl",levels:[{level:0,format:LevelFormat.BULLET,text:"•",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:540,hanging:280}}}}]}]},
  sections:[{
    properties:{page:{size:{width:12240,height:15840},margin:{top:1440,right:1440,bottom:1440,left:1440}}},
    headers:{default:new Header({children:[new Paragraph({border:{bottom:{style:BorderStyle.SINGLE,size:4,color:"BFBFBF",space:4}},children:[new TextRun({text:"GICTA — RFP (Supply & Installation): GIP — Data Sheet & Annexes C–G",size:14,color:"888888"})]})]})},
    footers:{default:new Footer({children:[new Paragraph({tabStops:[{type:TabStopType.RIGHT,position:TabStopPosition.MAX}],
      children:[new TextRun({text:"DRAFT v1.0 — June 2026",size:14,color:"888888"}),new TextRun({text:"\tPage ",size:14,color:"888888"}),
        new TextRun({children:[PageNumber.CURRENT],size:14,color:"888888"}),new TextRun({text:" of ",size:14,color:"888888"}),
        new TextRun({children:[PageNumber.TOTAL_PAGES],size:14,color:"888888"})]})]})},
    children,
  }],
});
Packer.toBuffer(doc).then(b=>{fs.writeFileSync("RFP_GIP_DataSheet_Annexes_C-G_v1.0_DRAFT.docx",b);console.log("WROTE",b.length);});
