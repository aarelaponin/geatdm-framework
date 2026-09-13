// Build KP2 Module 5 — Video Script Bundle v0.3
// v0.3 (12 Sep 2026): aligned to the 08-Interoperability source (Method Steps 7–8; Toolkit templates; Reference Architecture
//   §7.13). 5.1 uses the source's phase names and deliverables, the honest calendar, and the five plan artefacts (phased plan,
//   investment plan, procurement plan, workforce plan, risk register + success metrics). 5.4 adds the conformance test as the
//   gate before first service. 5.6 adds the dual go-live approval. 5.8 adds compliance monitoring and the reporting cadence.
//   5.10 adds the Wave-1 sector guidance. The 5.8 cross-reference to the previous video is removed (ITU standalone rule).
// Government Interoperability Framework · Topic 5 — Implementation, onboarding, the live demonstration — and running the framework
// v0.2 (12 Sep 2026): Topic 6 retired, mirroring the KP1 decision of 3 Sep. Its three genuinely new plays are folded in here as
//   5.8 (bus monitoring, former 6.2), 5.9 (document-consistency cross-check, former 6.3) and 5.10 (sector portability, former 6.4).
//   The former 6.1 (AI-play catalogue), 6.5 (four role-paths) and 6.6 (country storyboard) live on the KP2 GitBook home page
//   and in the KP2 intro video; they are not subtopic videos. See KP2-GIF/README.md.
// Implementation KP: the video bundle teaches the build; the runnable build pack (KP2-GIF/KP2-build-pack) is the ready solution.
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
// Four-layer interoperability model is cited to EIF + NIIS X-Road (NOT PAERA). PAERA carries §3.4.3, §5.2, §3.2, §3.1.3.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors KP1) ----------
const ARIAL = "Arial";
const COLOR_HEAD     = "1F3864";
const COLOR_ACCENT   = "2E75B6";
const COLOR_GREY_TXT = "595959";
const COLOR_GREY_BG  = "F2F2F2";
const COLOR_BORDER   = "BFBFBF";
const COLOR_SCRIPT_BG    = "FFFFFF";
const COLOR_VISUAL_BG    = "EAF1F8";  // visual / production cue
const COLOR_VISUAL_BD    = "2E75B6";
const COLOR_AI_BG        = "EEF7EE";  // AI usage tip
const COLOR_AI_BD        = "2E7D32";
const COLOR_PULL_BG      = "FFF8E1";  // single-message highlight
const COLOR_PULL_BD      = "E65100";

const border = { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const cellMargin  = { top: 90, bottom: 90, left: 130, right: 130 };

// Personas for KP2 Module 5. Architect for 5.1–5.8 (implementation, the live demonstration, operating the bus);
// Strategist for 5.9–5.10 (keeping the framework's documents honest, carrying it to the next sector).
const PERSONA_A = "A (Architect) — chief or senior architect, integration lead, or agency technical lead building on the interoperability bus";
const PERSONA_S = "S (Strategist) — national interoperability authority, ministry CIO, Ministry of Justice sponsor, or development-partner lead";

function P(text, opts = {}) {
  return new Paragraph({ spacing: { before: 80, after: 80 }, ...opts,
    children: [new TextRun({ text, font: ARIAL, size: 21, ...(opts.run || {}) })] });
}
function PItalic(text) {
  return new Paragraph({ spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: ARIAL, size: 20, italics: true, color: COLOR_GREY_TXT })] });
}
function H1(t) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 280, after: 140 },
    children: [new TextRun({ text: t, font: ARIAL, size: 32, bold: true, color: COLOR_HEAD })] });
}
function H2(t, color = COLOR_HEAD) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 220, after: 100 },
    children: [new TextRun({ text: t, font: ARIAL, size: 26, bold: true, color })] });
}
function H3(t, color = COLOR_ACCENT) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 160, after: 60 },
    children: [new TextRun({ text: t, font: ARIAL, size: 22, bold: true, color })] });
}
function H4(t, color = COLOR_HEAD) {
  return new Paragraph({ heading: HeadingLevel.HEADING_4, spacing: { before: 140, after: 60 },
    children: [new TextRun({ text: t, font: ARIAL, size: 20, bold: true, color })] });
}
function spacer(after = 60) { return new Paragraph({ spacing: { before: 0, after }, children: [new TextRun({ text: "" })] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }

function specTable(rows, W = 9700) {
  const COL1 = 2400; const COL2 = W - COL1;
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [COL1, COL2],
    rows: rows.map(([k, v]) => new TableRow({ children: [
      new TableCell({ borders: cellBorders, margins: cellMargin, width: { size: COL1, type: WidthType.DXA },
        shading: { fill: COLOR_GREY_BG, type: ShadingType.CLEAR },
        children: [new Paragraph({ children: [new TextRun({ text: k, font: ARIAL, size: 20, bold: true })] })] }),
      new TableCell({ borders: cellBorders, margins: cellMargin, width: { size: COL2, type: WidthType.DXA },
        children: [new Paragraph({ children: [new TextRun({ text: v, font: ARIAL, size: 20 })] })] })
    ] })) });
}
function tableHeaderCell(text, w) {
  return new TableCell({ borders: cellBorders, margins: cellMargin, width: { size: w, type: WidthType.DXA },
    shading: { fill: COLOR_HEAD, type: ShadingType.CLEAR },
    children: [new Paragraph({ children: [new TextRun({ text, font: ARIAL, size: 20, bold: true, color: "FFFFFF" })] })] });
}
function tableCell(text, w) {
  return new TableCell({ borders: cellBorders, margins: cellMargin, width: { size: w, type: WidthType.DXA },
    children: [new Paragraph({ children: [new TextRun({ text, font: ARIAL, size: 20 })] })] });
}
function genericTable(cols, headers, rows, W = 9700) {
  const head = new TableRow({ tableHeader: true, children: headers.map((h, i) => tableHeaderCell(h, cols[i])) });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols,
    rows: [head, ...rows.map(r => new TableRow({ children: r.map((c, i) => tableCell(c, cols[i])) }))] });
}
function visualCueBox(text) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: COLOR_VISUAL_BD };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
      new TableCell({ borders: cBorders, margins: { top: 100, bottom: 100, left: 200, right: 200 },
        width: { size: W, type: WidthType.DXA },
        shading: { fill: COLOR_VISUAL_BG, type: ShadingType.CLEAR },
        children: [new Paragraph({ children: [
          new TextRun({ text: "VISUAL CUE — ", font: ARIAL, size: 19, bold: true, italics: true, color: COLOR_VISUAL_BD }),
          new TextRun({ text: text, font: ARIAL, size: 19, italics: true, color: COLOR_VISUAL_BD })
        ] })] })
    ] })] });
}
function aiPromptBox(title, problem, prompt, ioNote, safeguard) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: COLOR_AI_BD };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
      new TableCell({ borders: cBorders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        width: { size: W, type: WidthType.DXA },
        shading: { fill: COLOR_AI_BG, type: ShadingType.CLEAR },
        children: [
          new Paragraph({ spacing: { before: 0, after: 80 }, children: [
            new TextRun({ text: "AI usage tip — ", font: ARIAL, size: 20, bold: true, color: COLOR_AI_BD }),
            new TextRun({ text: title, font: ARIAL, size: 20, bold: true, color: COLOR_AI_BD })
          ] }),
          new Paragraph({ spacing: { before: 60, after: 60 }, children: [
            new TextRun({ text: "What the prompt does: ", font: ARIAL, size: 19, bold: true }),
            new TextRun({ text: problem, font: ARIAL, size: 19 })
          ] }),
          new Paragraph({ spacing: { before: 100, after: 40 }, children: [
            new TextRun({ text: "Prompt template (copy-paste into Claude):", font: ARIAL, size: 19, bold: true })
          ] }),
          new Paragraph({ spacing: { before: 0, after: 0 }, children: [
            new TextRun({ text: prompt, font: "Courier New", size: 18 })
          ] }),
          new Paragraph({ spacing: { before: 100, after: 60 }, children: [
            new TextRun({ text: "Inputs and outputs: ", font: ARIAL, size: 19, bold: true }),
            new TextRun({ text: ioNote, font: ARIAL, size: 19 })
          ] }),
          new Paragraph({ spacing: { before: 60, after: 0 }, children: [
            new TextRun({ text: "Safeguard: ", font: ARIAL, size: 19, bold: true }),
            new TextRun({ text: safeguard, font: ARIAL, size: 19 })
          ] })
        ] })
    ] })] });
}
function singleMessageBox(text) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: COLOR_PULL_BD };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
      new TableCell({ borders: cBorders, margins: { top: 100, bottom: 100, left: 200, right: 200 },
        width: { size: W, type: WidthType.DXA },
        shading: { fill: COLOR_PULL_BG, type: ShadingType.CLEAR },
        children: [new Paragraph({ children: [
          new TextRun({ text: "Single message — ", font: ARIAL, size: 20, bold: true, color: COLOR_PULL_BD }),
          new TextRun({ text: text, font: ARIAL, size: 20, italics: true })
        ] })] })
    ] })] });
}

// ---------- helper: render a video subtopic block ----------
function renderSubtopic({ num, title, runtime, words, paeraAnchor, singleMessage,
                         scriptBeats, slideSpecRows, aiTip, metadataRows, persona = PERSONA_A }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([
    ["Persona",        persona],
    ["Target runtime", runtime + " (≈" + words + " spoken words)"],
    ["Anchor",         paeraAnchor]
  ]));
  out.push(singleMessageBox(singleMessage));
  out.push(H3("Script (voice-over over text-only slides)"));
  out.push(PItalic("All slides follow the ITU template: Title — Arial Bold 28pt; Body — Arial 18pt; Background — #E5F5FB; text-only with diagrams or text boxes only where strictly necessary; no images; no individuals on screen (AI-avatar narrator or computer-screen-only voice-over)."));
  for (const beat of scriptBeats) {
    if (beat.cue) out.push(visualCueBox(beat.cue));
    if (beat.text) out.push(P(beat.text));
  }
  out.push(H3("On-screen slide specification"));
  out.push(genericTable([900, 3400, 5400], ["Slide", "Element (text-only)", "Notes"], slideSpecRows));
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
  out.push(H3("Metadata"));
  out.push(specTable(metadataRows));
  out.push(pageBreak());
  return out;
}

// ============================================================================
//                                  BODY
// ============================================================================
const body = [];

// ---------- COVER ----------
body.push(
  new Paragraph({ spacing: { before: 0, after: 100 }, alignment: AlignmentType.RIGHT,
    children: [new TextRun({ text: "FiscalAdmin OÜ — ITU / Giga", font: ARIAL, size: 20, color: COLOR_GREY_TXT })] }),
  new Paragraph({ spacing: { before: 1400, after: 100 },
    children: [new TextRun({ text: "Video Script Bundle",
      font: ARIAL, size: 52, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 80 },
    children: [new TextRun({ text: "KP2 — Government Interoperability Framework",
      font: ARIAL, size: 30, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 200 },
    children: [new TextRun({ text: "Topic 5 — Implementation, onboarding, the live demonstration — and running the framework",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 5 of KP2"],
    ["Version",             "v0.3 — aligned to ITU Knowledge Products and Video Materials Guide; Topic 6 folded in; aligned to the source method (12 September 2026)"],
    ["Date",                "12 September 2026 (v0.1: 27 June 2026; v0.2 and v0.3: 12 September 2026)"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_A + " (5.1–5.8); " + PERSONA_S + " (5.9–5.10)"],
    ["Subtopics",           "Ten subtopics (5.1 – 5.10), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 47 minutes across ten standalone videos"],
    ["Build pack",          "KP2-GIF/KP2-build-pack — this topic stands up the runnable proving slice: the Linkup federation, the member registrations, and the live once-only exchange that is the build pack's acceptance check — then operates it (bus monitoring, the document-consistency cross-check) and points to the complete pack as the template a country reuses for its next sector"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.3 working draft of Topic 5 of KP2 — Government Interoperability Framework. Topic 5 is where the framework is stood up, proven, and then run. It takes the configuration the earlier topics produced — the decree, the Governance Pack, the semantic map and the service contracts — and turns it into a running solution: a phased implementation plan, the onboarding of real members, and a live once-only exchange on the Linkup federation. It produces the runnable proving slice of the build pack: the Linkup federation, the member registrations, and the cross-server call that is the framework's acceptance check. The ten videos walk the Architect through the four-phase implementation pattern, the Member Requirements, the Service-Level Agreement, registering a member on X-Road, standing up the federation, the live once-only exchange, and what changes from demonstration to production — and then, once the bus runs, through keeping it running: monitoring the bus from its logs, cross-checking the framework's three foundational documents for drift, and carrying the framework to the next sector. The last three were Topic 6 in v0.1; Topic 6 was retired on 12 September 2026 (its catalogue, role-paths and storyboard videos repeated the earlier topics and now live on the GitBook home page and in the KP2 intro video). The register stays plain English, eighth-grade level; technical terms are introduced in plain words on first use, and each subtopic leads with the capability the listener gains. The ten videos are numbered to ITU's convention (5.1 through 5.10), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the ten video scripts that make up Topic 5 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.3 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 5 is the implementation and demonstration topic of KP2, and the second Architect-facing one. It presents the four-phase implementation pattern with its decision gates and cost frame, the member-onboarding artefacts (the Member Requirements and the Service-Level Agreement), the technical onboarding step of registering a member on X-Road, standing up the Linkup federation, and the live once-only exchange that proves the framework. It then turns from building to running: what changes from the sandboxed demonstration to a production-grade federation, how the Operating Authority watches the live bus from its logs, how the framework keeps its decree, Governance Pack and standards portfolio from contradicting each other, and which parts of the framework carry unchanged to the next sector. It stands up the runnable proving slice of the build pack — the framework running, not just described — and it is now the closing topic of KP2."),
  P("Why ten videos and not seven. v0.1 had a Topic 6 ('AI plays for GIF + dissemination', six videos). Read against Topics 1–5 it split three ways: the AI-play catalogue (6.1) and the country storyboard (6.6) restated content already taught — the catalogue restated the plays of 2.3, 2.4, 4.4 and 4.5, and the storyboard restated Topics 1–5 against the four-phase plan of 5.1; the four role-paths (6.5) are a navigation aid about the knowledge product rather than framework content; and three plays were genuinely new and had no earlier home — bus monitoring, the document-consistency cross-check, and sector portability. The same reading led KP1 to retire its AI-plays module on 3 September 2026. Topic 6 is therefore retired: the three new plays are 5.8–5.10 here, the catalogue and the role-paths are the KP2 GitBook home page, and the storyboard is the KP2 intro video."),

  H3("1.2 KP2 is an implementation Knowledge Product"),
  P("KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 5 stands up the runnable build pack itself — the Linkup federation, the member registrations, and the live once-only exchange that proves the whole framework works. It is the proving slice: the legal config (the decree), the organisational config (the Governance Pack) and the technical config (the semantic map and service contracts) from the earlier topics all come together here and are demonstrated as one running solution. The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3)."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 5 at a glance — the ten subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all ten videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard."),

  pageBreak()
);

// ---------- TOPIC 1 AT A GLANCE ----------
body.push(
  H1("2. Topic 5 at a glance"),
  P("Ten standalone subtopic videos. Architect persona for 5.1–5.8; Strategist for 5.9–5.10. Total runtime approximately forty-seven minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["5.1", "Plan the build in four phases",
      "Foundation, Pilot, Expansion, Optimisation — four phases with decision gates, an honest calendar, and the four plans beside the schedule that a funder actually reads.", "~5 min"],
    ["5.2", "State what a member must have — the Member Requirements",
      "The Member Requirements template tells an agency exactly what it must have before it can join — no surprises at go-live.", "~4 min"],
    ["5.3", "Make 'connected' mean 'dependable' — the SLA",
      "A Service-Level Agreement turns 'connected' into 'dependable' — the template makes it a fill-in, not a negotiation from scratch.", "~4 min"],
    ["5.4", "Register a member on X-Road",
      "Generate the subsystem registration and the access-control list — the configuration that admits one agency to the bus.", "~5 min"],
    ["5.5", "Stand up the federation",
      "Central Server, four Security Servers, a Test CA — the Linkup federation, stood up from the run book.", "~5 min"],
    ["5.6", "Run the once-only exchange, live",
      "PNEA issues a credential and pre-fills identity from PNIA and enrolment from PLR — a real cross-server call, the data asked once.", "~5 min"],
    ["5.7", "From demonstration to production",
      "What changes between the sandboxed Linkup demonstration and a production-grade federation a country would actually run — including migrating off and retiring the legacy point-to-point links.", "~5 min"],
    ["5.8", "Watch the bus — monitoring and anomaly detection",
      "Point Claude at the real bus logs to spot a failing or unusual exchange before a citizen does.", "~5 min"],
    ["5.9", "Keep the documents honest — the consistency cross-check",
      "Keep the decree, the Governance Pack and the standards portfolio saying the same thing — a cross-check that catches drift across the three.", "~5 min"],
    ["5.10", "Carry the framework to the next sector",
      "The same four-layer framework stands up interoperability beyond education — the method is sector-portable, and the second sector is cheaper than the first.", "~4 min"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 5.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 5.1",
  title: "Plan the build in four phases",
  runtime: "~5 min",
  words: 640,
  paeraAnchor: "Estonia X-Road build-out (cost/timeline benchmark); ITU DPI Safeguards; NIIS X-Road implementation",
  singleMessage: "Foundation, Pilot, Expansion, Optimisation — four phases with decision gates, an honest calendar, and the four plans beside the schedule that a funder actually reads.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Plan the build in four phases'. Voice-over begins." },
    { text: "You do not onboard a whole government at once. You build the framework in four phases, each delivering something real, each with a decision gate before the next is funded — a pattern drawn from how Estonia and others actually built their buses." },
    { cue: "Slide 2 — Title: 'Four phases — after the foundation is laid'. Body, five text rows: 'Before month 0: the foundation, decree, governance, architecture and standards — a year to eighteen months of work.' 'Phase 1 — Foundation (months 0–6): the central platform and its trust anchor live; two pilot members; the first services.' 'Phase 2 — Pilot and Validation (7–12): the first cross-ministry once-only exchanges live; five members; conformance testing running.' 'Phase 3 — Expansion (13–18): the first-wave sectors covered; fifteen members; twenty-plus services.' 'Phase 4 — Optimisation (19–24): performance, the long tail, the next wave.'" },
        { text: "First, the honest calendar. The four build phases start when the foundation is laid — the decree, the governance, the architecture and the standards portfolio — and that groundwork is itself a year to eighteen months of team effort, longer in calendar time because legislative and budget cycles do not hurry. Then the phases. Phase one, Foundation, months zero to six — the central platform and its trust anchor go live, two pilot members connect, the first services run. Phase two, Pilot and Validation, seven to twelve — the first real cross-ministry once-only exchanges go live, the first five members are on, conformance testing is operating. Phase three, Expansion, thirteen to eighteen — the first-wave sectors are covered: fifteen members, twenty or more services. Phase four, Optimisation, nineteen to twenty-four — performance, the long tail, the next wave of sectors. So the first citizen-visible once-only exchange lands about a year into the build, and the first real milestone — the platform running with a handful of member services — two to three years from the day the programme starts. National coverage is a four-to-six-year programme. Say that to your minister on day one; it is the number that keeps the programme funded when the launch enthusiasm fades. Each phase ends with a decision gate: a go or no-go where the funder and the Steering Committee confirm the phase actually delivered before the next is funded." },
    { text: "The phasing protects the re-use logic: phase one builds the shared bus once, and every phase and every agency after it reuses that one investment. A funder who sees that is paying for a national platform, not a project." },
    { text: "One caution, because the words collide: these four build phases are not the five-phase enterprise-architecture lifecycle that produced your plan. That lifecycle designs the target; this schedule builds the bus, inside its final phase." },
    { cue: "Slide 3 — Title: 'The plan is five documents, not one'. Body, five text rows: 'The phased schedule — outcomes and a go/no-go gate per phase.' 'The investment plan — capital and running costs over the years, benchmarked; the state's commitment to run what the donor built.' 'The procurement plan — one lot per domain, never one big-bang contract; the platform bought as a working, accepted result.' 'The workforce plan — the operator from a first team of eight to fifteen towards thirty to eighty; a focal point in every member.' 'The risk register and the success metrics — members, services, transactions, uptime, onboarding time, satisfaction.'" },
        { text: "Second, the plan is five documents, not one schedule. The phased schedule — for each phase its outcomes, its gate, its risks. The investment plan — capital and running costs across the years, benchmarked against what comparable platforms cost, and with the state's own budget line for running whatever a donor built, because the commonest failure is a platform funded to launch and not to operate. The procurement plan — one lot per domain, sequenced across the phases, and never a single big-bang contract that hands the architecture to whichever vendor wins; the platform itself is bought as a working, accepted result, with acceptance tests and penalties, against the framework's rules as mandatory requirements. The workforce plan — the operator grows from a first team of eight to fifteen towards thirty to eighty at national scale, and every member needs a named technical focal point. And the risk register with the success metrics — members onboarded, services registered, transactions a quarter, uptime, how long onboarding takes, member satisfaction — reviewed at every gate. A cost frame a funder can check is a cost frame a funder can approve." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Four phases after the foundation, a gate at each, an honest calendar, and the four plans beside the schedule — that is a programme a funder can approve and that survives its second year.'" },
        { text: "So you plan the build in four phases — Foundation, Pilot, Expansion, Optimisation — each with a gate and a benchmarked cost, on a calendar you have told the truth about, with the investment, procurement, workforce and risk plans beside the schedule. That is what turns an ambition into a fundable programme." },
    { cue: "Slide 5 — Title: 'Sources'. Body: Estonia X-Road build-out (cost/timeline benchmark); ITU DPI Safeguards; NIIS X-Road implementation. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Plan the build in four phases'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 5.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four-phases slide. Five text rows: the foundation before month 0, then the four phases with their source-method deliverables.",
      "The implementation spine. Plain text rows, no icons."],
    ["3", "Five-documents slide. Five text rows: schedule, investment plan, procurement plan, workforce plan, risk register + metrics.",
      "The per-phase template. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the cost benchmarks."]
  ],
  aiTip: {
    title: "Draft your implementation plan — the phased schedule and the four plans beside it",
    problem: "An architect needs a phased implementation plan — outcomes, decision gates, risks and a benchmarked cost frame per phase — to take to a funder. This prompt drafts it.",
    prompt: "Draft the implementation plan for [country X]'s Government Interoperability Framework, assuming the foundation (decree, governance, architecture, standards) is in place at month 0. The phases are: Phase 1 Foundation (months 0–6: central platform and trust anchor live, 2 pilot members, first services), Phase 2 Pilot and Validation (7–12: first cross-ministry once-only exchanges, 5 members, conformance testing operating), Phase 3 Expansion (13–18: first-wave sectors, 15 members, 20+ services), Phase 4 Optimisation (19–24: performance, next wave). Use this context [paste: the first agencies and exchanges from your Use-Case Catalogue, any budget envelope, the funder, key constraints]. Produce five parts. (A) THE PHASED SCHEDULE — for each phase: outcomes; the go/no-go gate criteria; the top 3 risks with a mitigation each. (B) THE INVESTMENT PLAN — capital vs running cost by year, the main cost drivers benchmarked to comparable platforms (note where to verify against Estonia's X-Road experience and the ITU DPI Safeguards), and the state-budget line that takes over running costs from any donor-funded portion. (C) THE PROCUREMENT PLAN — the lots, one per domain, sequenced to the phases; flag that the platform is bought as a working, accepted result (acceptance tests, warranty, delay penalties) with the framework's rules as mandatory requirements, never as one big-bang contract. (D) THE WORKFORCE PLAN — the operator's staffing trajectory from a first team of 8–15 towards 30–80, and the technical focal point every member must name. (E) THE RISK REGISTER AND SUCCESS METRICS — the register (legal-cycle delay, sponsor change, vendor performance, member capacity, conformance failure, operator budget cut) and per-phase targets for members onboarded, services registered, transactions per quarter, uptime, onboarding cycle time and member satisfaction. CRITICAL: mark every specific cost or duration figure as [confirm: benchmark before quoting]. Output: the five parts plus a one-line funding ask per phase.",
    io: "Input: the first agencies/exchanges, any budget envelope and constraints. Output: the phased schedule plus the investment plan, procurement plan, workforce plan, and risk register with success metrics.",
    safeguard: "Cost and duration figures are the most scrutinised and the easiest to get wrong — treat every number as [confirm] and benchmark it against documented comparable builds before putting it in front of a funder. A phased plan with invented costs loses credibility on the first challenged figure."
  },
  metadataRows: [
    ["Working title",          "Plan the build in four phases — and the four plans beside it"],
    ["YouTube-optimised title", "The four-phase plan that gets an interoperability platform funded — and keeps it funded"],
    ["Description (60 words)", "You do not onboard a whole government at once. Four build phases — Foundation, Pilot, Expansion, Optimisation — each with a go/no-go gate, on an honest calendar: the first once-only exchange about a year in, national coverage over four to six. And the plan is five documents: the schedule plus investment, procurement, workforce and risk plans. Five minutes for architects and programme leads. AI plan prompt in the description."],
    ["Tags",                    "implementation plan, investment plan, procurement plan, implementation plan, phased delivery, interoperability roadmap, cost frame, X-Road build, decision gates, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.1 (methodology, implementation); §4.3 (AI integration — phased-plan prompt)"],
    ["PAERA citations",         "(implementation pattern cited to NIIS X-Road and the Estonia build-out; cost guidance to ITU DPI Safeguards)"],
    ["External-link list",      "Estonia X-Road build-out; ITU DPI Safeguards; NIIS X-Road implementation guidance (niis.org)"]
  ]
}));

// ---------- 5.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 5.2",
  title: "State what a member must have — the Member Requirements",
  runtime: "~4 min",
  words: 480,
  paeraAnchor: "NIIS X-Road member requirements and onboarding; EU EIF",
  singleMessage: "The Member Requirements template tells an agency exactly what it must have before it can join — no surprises at go-live.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'State what a member must have — the Member Requirements'. Voice-over begins." },
    { text: "The fastest way to wreck an onboarding schedule is to discover, on go-live day, that the joining agency is not actually ready — no security server, no adopted standards, no lawful basis. The Member Requirements template prevents that. It states, up front, exactly what an agency must have in place before it can join, so readiness is checked weeks ahead, not discovered at the deadline." },
    { cue: "Slide 2 — Title: 'What a member must have'. Body, six text rows: 'A security server — its gateway at the edge.' 'A registered identity on the bus — its subsystem.' 'The standards portfolio adopted.' 'Its data cleaned and conformed to the schema.' 'A lawful basis for its exchanges — from the decree.' 'A named technical contact who can fix things.'" },
    { text: "The requirements are concrete. A security server — the gateway device at the agency's edge. A registered identity on the bus — its subsystem. The standards portfolio adopted, so its services speak the framework's language. Its data cleaned and conformed to the agreed schema, because a member with stale or malformed data poisons every exchange that uses it. A lawful basis for the exchanges it will take part in, drawn from the decree. And a named technical contact who can actually fix things when they break. Miss any one, and the agency is not ready, however willing it is." },
    { cue: "Slide 3 — Title: 'Readiness becomes a checklist, not a judgement'. Body, single text block: 'Instead of an architect deciding, agency by agency, whether someone seems ready, the agency works the list and either meets each item or does not. That objectivity lets you schedule onboarding with confidence — and protects the framework from a half-ready member that breaks things.'" },
    { text: "The template turns readiness from a judgement call into an objective checklist. Instead of an architect deciding, agency by agency, whether someone seems ready, the agency works through the list and either meets each item or does not. That objectivity is what lets you schedule onboarding with confidence, and it protects the framework from a member that joins half-ready and breaks the exchanges it touches. It also takes the awkwardness out of saying 'not yet' — the list says it for you." },
    { text: "And the template is reused for every member: fill it once as a template, apply it to each joining agency in turn. It is the front end of the onboarding workflow — an agency that passes the Member Requirements is an agency ready to be registered on the bus, which is the technical step that admits it." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A Member Requirements checklist makes readiness objective and checkable weeks before go-live — so onboarding is scheduled, not gambled.'" },
    { text: "So before any agency is registered on the bus, it passes the Member Requirements: a security server, a registered identity, the standards adopted, clean data, a lawful basis, a named contact. The checklist makes readiness objective, lets you schedule onboarding instead of gambling on it, and is reused for every member that follows." },
    { cue: "Slide 5 — Title: 'Sources'. Body: NIIS X-Road member requirements and onboarding; EU EIF. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'State what a member must have — the Member Requirements'.",
      "Standard ITU template. No images."],
    ["2", "What-a-member-must-have slide. Six text rows of requirements.",
      "The checklist. Plain text, readable on mobile."],
    ["3", "Readiness-is-a-checklist slide. Single text block on objectivity.",
      "The value of the template. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the member-onboarding references."]
  ],
  aiTip: {
    title: "Draft the Member Requirements checklist",
    problem: "An architect needs a Member Requirements checklist an agency completes before joining the bus — objective, reusable, tied to the decree and the standards portfolio. This prompt drafts it.",
    prompt: "Draft a Member Requirements checklist for an agency joining [country X]'s interoperability bus. Cover, as objective yes/no items an agency can self-assess: (1) a security server deployed at the agency's edge; (2) a registered identity (subsystem) requested; (3) the framework's standards portfolio adopted by the agency's services; (4) the data it will provide cleaned and conformed to the agreed schema, with a named authoritative source and identifier; (5) a lawful basis for each exchange it will join, referencing the relevant decree article; (6) a named technical contact and an incident channel. For each item, state what 'met' looks like and what evidence confirms it. Add a final readiness verdict (Ready / Not yet, with the gaps). Output: the checklist as a table (requirement / met? / evidence) plus the verdict block.",
    io: "Input: the framework's standards portfolio and decree (referenced). Output: a reusable Member Requirements checklist with evidence and a readiness verdict.",
    safeguard: "A self-assessed 'met' is a claim, not proof — require the evidence column to be filled and spot-check the highest-risk items (clean data, lawful basis) before scheduling go-live. An agency that ticks every box on paper but has not actually cleaned its data will still poison the exchanges it joins."
  },
  metadataRows: [
    ["Working title",          "The Member Requirements"],
    ["YouTube-optimised title", "What an agency must have before it can join an interoperability bus"],
    ["Description (60 words)", "Onboarding wrecks on go-live day when an agency turns out not to be ready. The Member Requirements template states up front what every member must have: a security server, a registered identity, the standards adopted, clean data, a lawful basis, a named contact. It makes readiness an objective checklist, checked weeks ahead. Four minutes for architects. AI checklist prompt in the description."],
    ["Tags",                    "member requirements, onboarding, interoperability, security server, member readiness, X-Road, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.1 (methodology, onboarding); §4.3 (AI integration — member-requirements prompt)"],
    ["PAERA citations",         "(member requirements cited to NIIS X-Road onboarding and EIF)"],
    ["External-link list",      "NIIS X-Road member requirements and onboarding (niis.org); EU EIF"]
  ]
}));

// ---------- 5.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 5.3",
  title: "Make 'connected' mean 'dependable' — the SLA",
  runtime: "~4 min",
  words: 480,
  paeraAnchor: "NIIS X-Road service-level / SLA guidance; the member obligations (Topic 3); EU EIF",
  singleMessage: "A Service-Level Agreement turns 'connected' into 'dependable' — the template makes it a fill-in, not a negotiation from scratch.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Make 'connected' mean 'dependable' — the SLA'. Voice-over begins." },
    { text: "A member being connected is not the same as a member being dependable. A service that is up most of the time, answers slowly, and has no one to call when it breaks is connected but useless to a consumer who needs the data at the moment a citizen is standing at the counter. The Service-Level Agreement is what turns connected into dependable — and a template turns writing one from a negotiation into a fill-in." },
    { cue: "Slide 2 — Title: 'What the SLA sets'. Body, five text rows: 'Availability — the uptime the provider commits to.' 'Response time — how fast a call returns.' 'Support hours — when there is someone to help.' 'Incident response — who to call, and how fast.' 'Change notice — how much warning before a change.'" },
    { text: "The SLA sets the numbers a consumer can rely on. Availability — the uptime the provider commits to. Response time — how fast a call returns. Support hours — when there is someone to help. Incident response — who to call when the service fails, and how quickly they will respond. And change notice — how much warning a provider gives before changing the service, so consumers are not broken by a surprise. These are the numbers that turn a connection into a dependency a consumer can build a real citizen service on." },
    { cue: "Slide 3 — Title: 'The SLA makes the member obligations specific'. Body, single text block: 'The governance obligations said a member meets service levels. The SLA is where those service levels become specific numbers, agreed and signed. Without it, 'meets service levels' is a wish; with it, it is a commitment you can hold a member to.'" },
    { text: "The SLA operationalises the member obligations from the governance topic. Those obligations said, in principle, that a member meets service levels; the SLA is where the service levels become specific numbers, agreed and signed. Without the SLA, 'meets service levels' is a wish. With it, it is a commitment the Operating Authority can hold a member to — and a number a consumer can plan around." },
    { text: "One rule of fairness, and it is the rule that actually gets SLAs signed: set the numbers with the provider, not for them. A target the provider cannot meet is a target the provider will quietly ignore, and an SLA everyone ignores is worse than none. Agree numbers the provider can genuinely hit — and raise them over time as the platform matures — and the SLA becomes real rather than decorative. The template then makes it fast: fill in the targets for each service, agree them with the provider, sign, and reuse the same template for every service on the bus." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The SLA is the numbers that make a connection dependable — agreed with the provider, signed, and reused for every service.'" },
    { text: "So the Service-Level Agreement is what turns a connected member into a dependable one. Availability, response time, support, incident response, change notice — the numbers a consumer can rely on, made specific from the governance obligations, agreed with the provider so they are real, and captured in a template you reuse for every service. That is the difference between a bus that works in a demonstration and one a country can run citizen services on." },
    { cue: "Slide 5 — Title: 'Sources'. Body: NIIS X-Road service-level / SLA guidance; the member obligations (Topic 3); EU EIF. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Make 'connected' mean 'dependable' — the SLA'.",
      "Standard ITU template. No images."],
    ["2", "What-the-SLA-sets slide. Five text rows of the SLA dimensions.",
      "The core list. Text-only."],
    ["3", "SLA-makes-obligations-specific slide. Single text block linking to the governance obligations.",
      "Ties the SLA to Topic 3. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the SLA references."]
  ],
  aiTip: {
    title: "Draft the Service-Level Agreement template",
    problem: "An architect needs an SLA template that turns the governance obligations into specific, signable service-level numbers for each service on the bus. This prompt drafts it.",
    prompt: "Draft a Service-Level Agreement template for services on [country X]'s interoperability bus. Cover, as fields to set per service: (1) availability / uptime target; (2) response-time target; (3) support hours; (4) incident response — contact channel and response/resolution times by severity; (5) change-notice period; (6) the reporting that proves the levels are being met. For each field, suggest a sensible starting value for a demonstration/pilot phase and a separate, higher target for production, and note that the value must be agreed with the provider agency (mark as [confirm: agree with provider]). Reference the member obligations from the governance pack as the source of these commitments. Output: the SLA template (field / pilot value / production value / agreed-with-provider?) plus a short note on raising targets as the platform matures.",
    io: "Input: the governance member obligations (referenced). Output: an SLA template with pilot and production targets per service.",
    safeguard: "An SLA target set without the provider's agreement will be ignored — every number must be confirmed as achievable with the provider agency before signing. Start with honest pilot-phase numbers and raise them as the platform matures; an over-ambitious SLA signed under pressure damages trust the first time it is breached."
  },
  metadataRows: [
    ["Working title",          "The Service-Level Agreement"],
    ["YouTube-optimised title", "Connected isn't dependable: the SLA that makes a government data service reliable"],
    ["Description (60 words)", "A connected service that's slow, often down, and has no one to call is useless when a citizen is at the counter. The Service-Level Agreement turns 'connected' into 'dependable': availability, response time, support, incident response, change notice. Set the numbers with the provider, sign, reuse. Four minutes for architects. AI SLA-template prompt in the description."],
    ["Tags",                    "SLA, service level agreement, reliability, interoperability operations, X-Road, member obligations, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.1 (methodology, operations); §4.3 (AI integration — SLA-template prompt)"],
    ["PAERA citations",         "(SLA cited to NIIS X-Road guidance; obligations to the Topic-3 governance pack)"],
    ["External-link list",      "NIIS X-Road service-level guidance (niis.org); EU EIF"]
  ]
}));

// ---------- 5.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 5.4",
  title: "Register a member on X-Road",
  runtime: "~5 min",
  words: 640,
  paeraAnchor: "NIIS X-Road member and subsystem registration; access-control list configuration",
  singleMessage: "Generate the subsystem registration and the access-control list — the configuration that admits one agency to the bus.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Register a member on X-Road'. Voice-over begins." },
    { text: "Everything so far has been preparation — the phased plan, the Member Requirements, the Service-Level Agreement. Registering a member on X-Road is the technical step that actually admits an agency to the bus, and it produces real configuration: the subsystem registration and the access-control list. This is a build step, and you can generate the configuration with Claude — then confirm it against the live registry before it goes anywhere." },
    { cue: "Slide 2 — Title: 'Two configuration artefacts'. Body, two text rows: 'The subsystem — the member's registered identity on the bus: member class, member code, subsystem code.' 'The access-control list — which other members may call this member's services.'" },
    { text: "Registering a member produces two configuration artefacts. The subsystem — the member's registered identity on the bus, made of its member class, member code and subsystem code, the identifiers the bus uses to route a call to it. And the access-control list — which other members are allowed to call this member's services, because being on the bus does not mean everyone may call everything; access is granted deliberately, service by service. Together, these two artefacts admit the agency and say exactly who may talk to it." },
    { cue: "Slide 3 — Title: 'Generate, then confirm against the registry'. Body, two text rows: 'bb-config-gen drafts the subsystem and the access-control entries from the member's details and the access policy.' 'Every identifier is a [confirm] until checked against the live X-Road registry — a wrong member code routes nowhere, or to the wrong agency.'" },
    { text: "The bb-config-gen play generates these from the member's details and the access policy. But every identifier — the member code, the subsystem code, the certificate references — is a [confirm] until you check it against the live X-Road registry. This is the place the confirm discipline matters most in the whole framework: a wrong member code does not throw a clear error. It silently routes nowhere, or worse, to the wrong agency, which in an interoperability bus means one citizen's data going to a service that asked about another. Generate the registration; confirm every identifier against the registry before you deploy it." },
    { text: "And this is the same registration shape for every member — fill the member's details into the same template, generate the same two artefacts. The onboarding workflow and the governance RACI wrap it into a repeatable process: the Member Requirements confirm the agency is ready, the RACI says which body approves, and this registration configuration admits it. You produce the executable configuration here; the workflow and the approvals from the earlier topics surround it. That reuse — one registration pattern applied to every member — is what lets the framework onboard its twentieth agency as cleanly as its second." },
    { cue: "Slide 4 — Title: 'Then the member proves it conforms'. Body, three text rows: 'Registration admits the member; a conformance test is the gate before its first service goes live.' 'Self-assessment for the routine; a third-party check for high-risk services; a test suite the operator runs.' 'Re-tested every two years and on every standards change — a member that passed once is not a member that conforms now.'" },
    { text: "Registration is not the last gate. Between a member's security server going up and its first service going live sits the conformance test: the member proves, against the standards portfolio, that its server, its certificates and its services do what the framework requires. For routine members that is a self-assessment against a published checklist; for high-risk services a third-party check; and where the operator has built one, a conformance test suite it runs itself. A member that fails fixes and re-tests until it passes. And it is not a certificate for life — members are re-tested on a cycle, typically every two years, and whenever a binding standard changes. This is the step programmes skip when they are in a hurry, and the step whose absence is discovered when one member's malformed data breaks everyone else's service." },
    { cue: "Slide 5 — Title: 'It is config, not paperwork'. Body, single text block: 'The subsystem and access-control list go straight into the build pack, under the member's folder. They are part of the runnable proving slice — what kp-solution-verify deploys and checks. Registering a member is executable configuration that puts an agency on the bus.'" },
    { text: "The configuration goes straight into the build pack, under the member's folder — it is part of the runnable proving slice, the thing kp-solution-verify deploys and checks. So registering a member is not paperwork that describes an intention. It is executable configuration that puts a real agency on the bus, ready to provide and consume services. When you have registered the four Progressa members this way, the federation has the participants it needs for a real exchange." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The subsystem registration and the access-control list admit a member — generated, confirmed, deployed — and a conformance test is the gate before its first service goes live.'" },
    { text: "So registering a member is where onboarding becomes configuration. Generate the subsystem and the access-control list with bb-config-gen, confirm every identifier against the live registry, and deploy them into the build pack. Two artefacts, the same shape for every member, admitting one agency to the bus and naming who may call it. That is the technical core of onboarding — and the configuration the demonstration runs on." },
    { cue: "Slide 7 — Title: 'Sources'. Body: NIIS X-Road member and subsystem registration; access-control list configuration. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Register a member on X-Road'.",
      "Standard ITU template. No images."],
    ["2", "Two-artefacts slide. Two text rows: the subsystem, the access-control list.",
      "The config artefacts. Identifiers glossed in plain words. Text-only."],
    ["3", "Generate-then-confirm slide. Two text rows: bb-config-gen drafts; [confirm] against the registry.",
      "The anti-invention safeguard, at its highest-stakes point."],
    ["4", "Conformance-gate slide. Three text rows: the gate, the three test approaches, re-certification.",
      "The step between registration and first service. Text-only."],
    ["5", "It-is-config slide. Single text block on the build pack and kp-solution-verify.",
      "The build-pack connection — executable config, not paperwork."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the registration references."]
  ],
  aiTip: {
    title: "Generate the X-Road member registration (subsystem + ACL)",
    problem: "An architect onboarding an agency needs the X-Road subsystem registration and the access-control list generated from the member's details and the access policy — the config that admits the member. This is the bb-config-gen play for member onboarding.",
    prompt: "Generate the X-Road member-registration configuration for an agency joining [country X]'s bus. Inputs: the member's details [paste: organisation name, the member class and any known member/subsystem codes], the services it will provide [from its service contracts], and the access policy [which other members may call which of its services]. Produce: (1) the SUBSYSTEM registration — member class, member code, subsystem code, and the service codes it exposes; (2) the ACCESS-CONTROL LIST — for each service, the consumer subsystems permitted to call it. CRITICAL: output every member code, subsystem code and service code as [confirm: verify against the live X-Road registry] — do not invent identifiers, because a wrong code silently routes nowhere or to the wrong agency. Also list, for an onboarding checklist: the certificate steps and the approval (per the governance RACI) that must happen alongside this config. Close with the onboarding checklist in the source method's order — application and signed obligations; certificate issuance; security server deployment; CONFORMANCE TEST against the standards portfolio (state the approach: self-assessment / third-party / test suite); first service registration; production go-live. Output: the subsystem registration, the access-control list, and the [confirm] / approval checklist.",
    io: "Input: the member's details, its services, and the access policy. Output: the subsystem registration and access-control list, with [confirm] placeholders, and an onboarding checklist that ends in the conformance test.",
    safeguard: "Every X-Road identifier must be confirmed against the live registry before deployment — this is the single highest-stakes [confirm] in the framework, because a wrong code can route one citizen's data to a service that asked about another. Deploy to a sandbox first and verify the access-control list denies an unauthorised caller, not only that it permits the authorised one."
  },
  metadataRows: [
    ["Working title",          "Register a member on X-Road"],
    ["YouTube-optimised title", "Registering an agency on X-Road — the configuration that admits a member to the bus"],
    ["Description (60 words)", "Registering a member on X-Road is the technical step that admits an agency: it produces two config artefacts — the subsystem (its identity on the bus) and the access-control list (who may call its services). Generate them with AI, but confirm every identifier against the live registry — a wrong code routes nowhere or to the wrong agency. Five minutes for architects. AI registration prompt in the description."],
    ["Tags",                    "X-Road registration, subsystem, access control list, member onboarding, interoperability config, GovStack, AI, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.1 (methodology, onboarding); §4.3 (AI integration — bb-config-gen member registration); §4.5 (build-pack artefact)"],
    ["PAERA citations",         "(member/subsystem registration cited to NIIS X-Road)"],
    ["External-link list",      "NIIS X-Road member and subsystem registration; access-control list configuration (niis.org)"]
  ]
}));

// ---------- 5.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 5.5",
  title: "Stand up the federation",
  runtime: "~5 min",
  words: 560,
  paeraAnchor: "NIIS X-Road federation (Central Server, Security Server, Test CA); the Linkup federation (ITU cloud)",
  singleMessage: "Central Server, four Security Servers, a Test CA — the Linkup federation, stood up from the run book.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Stand up the federation'. Voice-over begins." },
    { text: "With members registered, you stand up the federation itself — the live platform they connect to. For our demonstration this is Linkup, the X-Road federation on the ITU cloud. It has a small set of components, each with a clear job, and you bring it up from a run book, so that anyone with the build pack can reproduce the same federation rather than admire a one-off." },
    { cue: "Slide 2 — Title: 'The components'. Body, three text rows: 'Central Server (at PDGA) — the registry of members and services; the heart every security server checks with.' 'Four Security Servers (MoEYS/PEMIS, PNEA, PLR, PNIA) — each member's gateway at the edge.' 'A Test CA — the trust anchor that issues the certificates.'" },
    { text: "The federation has three kinds of component. The Central Server, operated by PDGA, is the registry of who is a member and what services exist — the heart that every security server checks with before it routes a call. The four Security Servers — one each at MoEYS with its school-information system PEMIS, the examination authority PNEA, the learner registry PLR, and the identity authority PNIA — are the members' gateways, the devices that carry the trust burden at each edge. And the Test CA, the certification authority that issues the certificates the security servers use to prove who they are. In production that is a real certification authority; in the demonstration, a test one." },
    { cue: "Slide 3 — Title: 'Bring it up from the run book'. Body, single text block: 'Central Server first, then the Test CA, then each Security Server registers with the Central Server and receives its certificate. The run book makes it reproducible — anyone with the build pack stands up the same federation. For the demonstration, Linkup runs it all on one cloud VM in sandboxed containers.'" },
    { text: "Standing it up is a run-book exercise, deliberately. Each component is brought up in order — the Central Server first, then the Test CA, then each Security Server registers with the Central Server and receives its certificate. The run book makes this reproducible: anyone with the build pack can stand up the same federation, which is exactly what makes the demonstration a template rather than a one-off. For the demonstration, Linkup runs all of this on a single cloud VM in sandboxed containers — sized for showing cross-agency calls, not for production volumes." },
    { text: "When the federation is up, you have something concrete: four real security servers, registered with a central server, trusting a common certification authority, ready to carry a real call. The configuration that does this — the federation config and each member's registration — lives in the build pack, and kp-solution-verify is what confirms the federation actually stands up, not merely that the files exist. This is the moment the abstract becomes real: up to now KP2 has produced documents and configuration; standing up the federation turns that configuration into a running platform. The bus exists, the members are on it, and the only thing left is to make a real call across it." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Central Server, four Security Servers, a Test CA — stood up from the run book, the federation is real and ready to carry a call.'" },
    { text: "So you stand up the federation from a run book: the Central Server at PDGA, the four Security Servers at the Progressa members, the Test CA that anchors trust. Reproducible from the build pack, confirmed by kp-solution-verify. With the federation running, the framework has stopped being a design and become a platform — ready for the call that proves it." },
    { cue: "Slide 5 — Title: 'Sources'. Body: NIIS X-Road federation — Central Server, Security Server, Test CA; the Linkup federation (ITU cloud). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Stand up the federation'.",
      "Standard ITU template. No images."],
    ["2", "Components slide. Three text rows: Central Server, Security Servers, Test CA.",
      "The federation topology. Uses the bound Progressa institutions. Text-only."],
    ["3", "Run-book slide. Single text block on the stand-up order and reproducibility.",
      "The reproducible-from-the-build-pack point. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the federation references."]
  ],
  aiTip: {
    title: "Draft the federation stand-up run book",
    problem: "An architect needs a reproducible run book to stand up the X-Road federation — the Central Server, the Security Servers and the Test CA, in order — for the demonstration. This prompt drafts it.",
    prompt: "Draft a stand-up run book for an X-Road demonstration federation for [country X] / Progressa. The components are: a Central Server (operated by the digital-government authority), four Security Servers (one each at the four member agencies), and a Test CA. Produce the run book as ordered, reproducible steps: (1) bring up the Central Server and its configuration; (2) bring up the Test CA and register it as the trust anchor; (3) for each Security Server: install, register with the Central Server, obtain its certificate from the Test CA, and verify it is registered; (4) a verification step confirming all four members appear in the Central Server registry. Note which steps are demonstration-only (single VM, sandboxed containers, Test CA) and would differ in production. Mark every server identifier and address as [confirm: set per the actual environment]. Output: the ordered run book plus a 'differs in production' note per step.",
    io: "Input: the federation topology (Central Server, four Security Servers, Test CA). Output: an ordered, reproducible stand-up run book with production-difference notes.",
    safeguard: "A run book is only reproducible if it has been run — execute it end to end in the sandbox and confirm all four members register, before treating it as the build-pack run book. Keep the demonstration-only steps (Test CA, single VM) clearly marked so no one mistakes the run book for a production deployment guide."
  },
  metadataRows: [
    ["Working title",          "Stand up the federation"],
    ["YouTube-optimised title", "Standing up an X-Road federation: Central Server, Security Servers, and a CA"],
    ["Description (60 words)", "With members registered, you stand up the federation: a Central Server (the registry of members and services), four Security Servers (each member's gateway), and a Test CA (the trust anchor). Bring it up from a reproducible run book so anyone with the build pack stands up the same federation. Five minutes for architects. AI run-book prompt in the description."],
    ["Tags",                    "X-Road federation, central server, security server, certification authority, Linkup, interoperability deployment, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.1 (methodology, deployment); §4.3 (AI integration — run-book prompt); §4.5 (build-pack — the federation)"],
    ["PAERA citations",         "(federation topology cited to NIIS X-Road)"],
    ["External-link list",      "NIIS X-Road federation — Central Server, Security Server, configuration and Test CA (niis.org); the Linkup federation (ITU cloud)"]
  ]
}));

// ---------- 5.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 5.6",
  title: "Run the once-only exchange, live",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "PAERA §5.2 Principle #5 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify)",
  singleMessage: "PNEA issues a credential and pre-fills identity from PNIA and enrolment from PLR — a real cross-server call, the data asked once.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Run the once-only exchange, live'. Voice-over begins." },
    { text: "This is the moment the whole framework exists for: a real once-only exchange, running across the federation, for an ordinary citizen scenario. Not a mock, not a diagram — a genuine cross-server call in which the state asks the citizen once and fetches the rest. Everything in KP2 has been leading to this single call." },
    { cue: "Slide 2 — Title: 'The scenario'. Body, three text rows: 'A learner applies for a credential at the examination authority, PNEA.' 'Without once-only: the learner brings paper proof of identity and of enrolment.' 'With once-only: PNEA pre-fills identity from PNIA and enrolment from PLR, over the bus, in seconds.'" },
    { text: "The scenario is concrete and ordinary. A learner applies for a credential at the national examination authority, PNEA. Without once-only, PNEA asks the learner to bring paper proof of who they are and proof that they were enrolled. With once-only, the moment the learner gives their national ID, PNEA's service pre-fills their identity from the national identity authority, PNIA, and their enrolment from the learner registry, PLR — both fetched over the bus, with a lawful basis, in seconds. The learner is asked once. That is the promise from the very first topic of this knowledge product, now actually running." },
    { cue: "Slide 3 — Title: 'Every layer is in this one call'. Body, four text rows: 'Technical — routed across the trust zones, secured by mutual TLS.' 'Legal — returns only the fields the purpose needs, under the decree.' 'Organisational — between members the governance admitted, under their obligations.' 'Semantic — resolves only because the agencies agree what 'learner' and 'enrolment' mean.'" },
    { text: "And every layer you built is in that single call. The call routes across the trust zones, secured by mutual TLS — the technical layer. It returns only the fields the purpose needs, under the decree's lawful basis — the legal layer. It runs between members the governance admitted, under their obligations — the organisational layer. And it returns meaning, not just bytes, because it resolves only thanks to the semantic map: PNEA, PNIA and PLR agree what 'learner' and 'enrolment' mean. That agreement came from the data owners and the architects sitting together — the shared language between business and IT — and without it the call would return confident nonsense. One exchange, all four layers, all at once." },
    { cue: "Slide 4 — Title: 'This is the acceptance check'. Body, single text block: 'kp-solution-verify deploys the federation, the members, the service and the data, makes the call, and confirms once-only actually happens: the cross-server call resolves, identity and enrolment return, the learner is not asked twice. When it passes, KP2 is not a framework explained — it is a framework that runs.'" },
    { text: "This is the build pack's acceptance check, and it is deliberately a single, observable thing: the cross-server call resolves, the identity and the enrolment come back, the learner is not asked twice. kp-solution-verify runs exactly this — it deploys the federation, the members, the service and the demonstration data, then makes the call and confirms once-only actually happens. When that check passes, KP2 stops being a framework explained and becomes a framework that runs. That distinction — explained versus running — is the entire reason this is an implementation Knowledge Product. In a real federation this moment has a name: the dual go-live approval. The regulator confirms the member's compliance readiness, the operator confirms its technical readiness, and both confirmations are recorded before the production connection is switched on. The acceptance check is the technical half of that approval; the compliance half is the gate register the member completed on the way here." },
    { text: "And this is why one small exchange is the proving slice for the whole of KP2 and the KPs that follow. Prove once-only here, on four members, and you have proven the pattern that KP3's building blocks and KP4's services will reuse. The smallest real once-only call is the largest possible proof that the framework works — because if the state can ask once and fetch the rest for one learner, lawfully and securely, it can do it for every service a country builds on the bus." },
    { cue: "Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A real cross-server call, the learner asked once — every layer proven in a single exchange, and both go-live approvals recorded.'" },
    { text: "So the once-only exchange, live, is where KP2 proves itself. PNEA pre-fills identity from PNIA and enrolment from PLR, over the bus, for a real learner asked once. Technical, legal, organisational and semantic — all four layers in one resolving call, confirmed by kp-solution-verify. That single exchange is the acceptance of the whole framework, and the template every later service reuses." },
    { cue: "Slide 6 — Title: 'Sources'. Body: PAERA v1.0 §5.2 Principle #5 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Run the once-only exchange, live'.",
      "Standard ITU template. No images."],
    ["2", "Scenario slide. Three text rows: the learner, without once-only, with once-only.",
      "The concrete citizen scenario, on the bound Progressa institutions. Text-only."],
    ["3", "Every-layer slide. Four text rows mapping the call to the four layers.",
      "The synthesis of all of KP2 in one call. Carries the lingua-franca argument (semantic row). Text-only."],
    ["4", "Acceptance-check slide. Single text block on kp-solution-verify and 'explained vs running'.",
      "The build-pack acceptance — the proving moment."],
    ["5", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line that crowns the topic."],
    ["6", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the once-only reference."]
  ],
  aiTip: {
    title: "Script and verify the once-only exchange (the acceptance check)",
    problem: "An architect needs to script the once-only demonstration exchange and its acceptance check — the call, the expected result, and the proof that the learner is asked once. This prompt produces the acceptance script.",
    prompt: "Script the once-only acceptance check for [country X] / Progressa's interoperability demonstration. The scenario: a learner applies for a credential at the examination authority (PNEA), which pre-fills identity from the identity authority (PNIA) and enrolment from the learner registry (PLR) over the X-Road bus. Produce: (1) the GIVEN — the federation deployed, the four members registered, the service published, the demonstration data seeded; (2) the WHEN — the exact cross-server call(s) PNEA makes to PNIA and PLR; (3) the THEN — the expected result: identity and enrolment returned over the bus, the learner asked once, no paper re-entry; (4) the negative check — that a member NOT authorised by the access-control list cannot make the call. Map each step to the layer it exercises (technical/legal/organisational/semantic). Mark every identifier and endpoint as [confirm: against the live registry]. Output: the given/when/then acceptance script plus the negative check.",
    io: "Input: the Progressa once-only scenario and the federation. Output: a given/when/then acceptance script with a negative check, mapped to the four layers.",
    safeguard: "An acceptance check that only proves the happy path is half a check — include the negative case (an unauthorised member is denied) and confirm the data returned is the right learner's, not merely that data returned. Run it against the sandbox federation, and treat a passing check as proof for this exchange only, not a guarantee for exchanges you have not tested."
  },
  metadataRows: [
    ["Working title",          "Run the once-only exchange, live"],
    ["YouTube-optimised title", "The live once-only exchange: a government framework proven in one real call"],
    ["Description (60 words)", "The moment the framework exists for: a real cross-server call where a learner applies for a credential and the examination authority pre-fills identity and enrolment over the bus — asked once, not on paper. Every layer (technical, legal, organisational, semantic) is in that one call, and kp-solution-verify confirms it. Five minutes for architects. AI acceptance-script prompt in the description."],
    ["Tags",                    "once-only, live demonstration, X-Road, cross-server call, acceptance test, interoperability proof, Progressa, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.6 (real-life demonstration) — primary; §4.1 (methodology); §4.3 (AI integration — acceptance-script prompt); §4.5 (build-pack acceptance)"],
    ["PAERA citations",         "§5.2 Principle #5 (Once-Only)"],
    ["External-link list",      "PAERA v1.0 §5.2 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify)"]
  ]
}));

// ---------- 5.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 5.7",
  title: "From demonstration to production",
  runtime: "~5 min",
  words: 590,
  paeraAnchor: "NIIS X-Road production and operations guidance; ITU DPI Safeguards",
  singleMessage: "What changes between the sandboxed Linkup demonstration and a production-grade federation a country would actually run.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'From demonstration to production'. Voice-over begins." },
    { text: "The demonstration proves the pattern. It is not, and must not be mistaken for, a production system. The architect's last job in this topic is to know exactly what changes between the demonstration and a production-grade federation, so the country plans and budgets for that gap rather than discovering it after go-live — which is the moment it is most expensive to discover." },
    { cue: "Slide 2 — Title: 'What changes for production'. Body, eight text rows: 'Separate hosts, not one VM.' 'A real certification authority, not a Test CA.' 'High availability and redundancy.' 'Real monitoring and alerting.' 'Capacity for real volumes.' '24/7 operational support.' 'Security hardening and audit.' 'Migrate and retire the legacy point-to-point links the bus replaces.'" },
    { text: "The differences are specific. The demonstration runs everything on one VM; production separates the components onto real, sized hosts. The demonstration uses a Test CA; production uses a real certification authority. Production adds high availability and redundancy, so a failed component does not stop the bus. It adds real monitoring and alerting, so problems are caught before citizens notice them. It is sized for real transaction volumes, not a handful of demonstration calls. It has round-the-clock operational support — the Operating Authority's standing team. And it is security-hardened and audited to the standard a national platform carrying citizen data must meet." },
    { text: "There is one more production task, and it does not appear on the hardening list because it concerns the old world rather than the new: migrating each agency off the legacy point-to-point links the bus replaces, and retiring them. A new bus does not retire the old links by itself — left alone, you run both, which is worse than either. So per agency the pattern is parallel-run then cut over: stand up the new once-only exchange, run it beside the agency's existing point-to-point link until you have confirmed the two agree, then switch the consumers across and decommission the old link. Retiring those links is the step that actually ends the point-to-point sprawl Topic 1 diagnosed — schedule it, agency by agency, in the multi-agency phase of the plan, with a migration-and-retirement step in each onboarding." },
    { cue: "Slide 3 — Title: 'The shape of the config does not change'. Body, single text block: 'The subsystem registrations, the service descriptions, the semantic map are the same. Production changes the scale, the resilience and the operations around them — not the design. So the demonstration genuinely de-risks the production build: you proved the pattern, and production is the same pattern, hardened.'" },
    { text: "Here is the reassuring part, and it is the point of building a demonstration at all: none of this changes the shape of the configuration. The subsystem registrations, the service descriptions, the semantic map — they are the same in production. Production changes the scale, the resilience and the operations around the configuration, not the design of it. So the demonstration genuinely de-risks the production build. You have proven the pattern works; production is the same pattern, hardened and operated. The later phases of your four-phase plan are exactly where that production build is funded and delivered, against the cost frame." },
    { text: "The one thing not to do is ship the demonstration as production. A sandboxed single-VM federation with a test certification authority is perfect for proving the pattern and wrong for carrying real citizen data at scale. Know the gap, plan it into the phased roadmap, budget it with the cost frame — and the move from demonstration to production becomes an engineering exercise the team can plan, not a surprise that derails go-live." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Production is the demonstration's pattern, hardened — separate hosts, a real CA, high availability, monitoring, support. Plan the gap; do not ship the demo.'" },
    { text: "So you close the implementation topic by being honest about the gap between demonstration and production. Separate hosts, a real certification authority, high availability, monitoring, capacity, support, hardening — the production differences are specific and plannable. The configuration's shape does not change, so the demonstration de-risks the build. Plan the gap into the roadmap, budget it with the cost frame, and never ship the demonstration as the production platform. That is how a proven pattern becomes a system a country runs." },
    { cue: "Slide 5 — Title: 'Sources'. Body: NIIS X-Road production and operations guidance; ITU DPI Safeguards. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'From demonstration to production'.",
      "Standard ITU template. No images."],
    ["2", "What-changes slide. Eight text rows of production differences (incl. migrating off and retiring the legacy point-to-point links).",
      "The gap, made specific. Plain text list, readable on mobile."],
    ["3", "Config-shape-unchanged slide. Single text block on de-risking.",
      "The reassuring synthesis — the demo de-risks the build. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line that closes the topic."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the production-guidance references."]
  ],
  aiTip: {
    title: "Build the demonstration-to-production gap checklist",
    problem: "An architect needs a checklist of what must change to take the demonstration federation to production, sized and sequenced into the phased plan. This prompt produces it.",
    prompt: "Build a demonstration-to-production gap checklist for [country X]'s X-Road federation. The demonstration runs on a single VM with sandboxed containers and a Test CA; production must carry real citizen data at scale. For each area, state what the demonstration has, what production requires, and roughly when in the four-phase plan it should be delivered: (1) hosting — single VM vs separate sized hosts; (2) certification authority — Test CA vs real CA; (3) availability — single instance vs high availability and redundancy; (4) monitoring and alerting; (5) capacity for expected transaction volumes; (6) operational support hours; (7) security hardening and audit. For each, note that the configuration shape (subsystem registrations, service descriptions) does NOT change — only scale, resilience and operations do. Mark cost-bearing items for the cost frame. Output: a gap checklist (area / demo / production / phase / cost-bearing?) plus a one-line 'do not ship the demo as production' caution.",
    io: "Input: the demonstration federation. Output: a demonstration-to-production gap checklist mapped to the phased plan and cost frame.",
    safeguard: "The gap checklist is a planning aid, not a security sign-off — production hardening and audit must be done and independently reviewed, not merely listed. Never let the existence of a working demonstration become pressure to put the sandboxed federation into production; the gap items exist precisely because the demo is unsafe at scale."
  },
  metadataRows: [
    ["Working title",          "From demonstration to production"],
    ["YouTube-optimised title", "What changes from an interoperability demo to a production-grade federation"],
    ["Description (60 words)", "The demonstration proves the pattern — it isn't a production system. Production means separate hosts, a real CA, high availability, monitoring, capacity, 24/7 support and hardening. But the configuration's shape doesn't change, so the demo de-risks the build. Plan the gap into the roadmap; never ship the demo as production. Four minutes for architects. AI gap-checklist prompt in the description."],
    ["Tags",                    "production readiness, X-Road production, high availability, operations, demo to production, interoperability, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.1 (methodology, production); §4.3 (AI integration — gap-checklist prompt)"],
    ["PAERA citations",         "(production guidance cited to NIIS X-Road and ITU DPI Safeguards)"],
    ["External-link list",      "NIIS X-Road production and operations guidance (niis.org); ITU DPI Safeguards"]
  ]
}));

// ---------- 5.8 (folded from former 6.2, 12 Sep 2026) ----------
body.push(...renderSubtopic({
  num: "3.8 Subtopic 5.8",
  title: "Watch the bus — monitoring and anomaly detection",
  runtime: "~5 min",
  words: 590,
  persona: PERSONA_A,
  paeraAnchor: "NIIS X-Road monitoring and operational logs; the Linkup federation; ITU DPI Safeguards",
  singleMessage: "Point Claude at the real bus logs to spot a failing or unusual exchange before a citizen does.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Watch the bus — monitoring and anomaly detection'. Voice-over begins." },
    { text: "A production bus needs real monitoring and alerting, and this is what that monitoring is for. A running bus is not finished — it is operating, every day. Every call leaves a trace in the logs: success or failure, fast or slow, who called whom. Reading those logs by hand does not scale past a few services. The monitoring play points Claude at the real bus logs and turns them into something a Strategist can act on — a plain-language picture of the bus's health, and a flag when something looks wrong." },
    { cue: "Slide 2 — Title: 'What the logs hold'. Body, four text rows: 'Which exchanges ran, and which failed — and how often.' 'Latency — whether calls are getting slower.' 'Unusual patterns — a spike, a new caller, an off-hours surge.' 'Compliance — which members still meet the binding standards, and which are drifting.' 'The metadata of exchanges, never their contents.'" },
    { text: "The logs hold the operational truth. Which exchanges ran and which failed, and how often. Whether calls are getting slower — a sign of a service under strain. And unusual patterns — a sudden spike, an agency calling a service it never called before, a surge of activity at three in the morning. The play reads all of this and writes a plain-language health report, flagging the things that deserve a human's attention this week." },
    { text: "The value is early warning. A failing service, caught in the logs, is fixed before a citizen standing at a counter is turned away. A creeping slowdown, spotted early, is addressed before it becomes an outage. The Operating Authority's team uses this to watch a growing federation without drowning in raw logs — the AI does the reading, the team does the acting. That is what lets a small operations team keep a hundred-service bus healthy. And the same reading serves a second, slower loop. Operational health is watched daily; member compliance is reviewed quarterly — which members still meet the binding standards, whose conformance has lapsed, what breaches occurred and what was done. That review goes to the Steering Committee each quarter, to the Council each year, and, where the country's transparency policy asks for it, to citizens twice a year. Monitoring that never reaches a governance table is a dashboard; monitoring that does is accountability." },
    { cue: "Slide 3 — Title: 'Two safeguards that are not optional'. Body, two text rows: 'The AI flags; a human investigates — an anomaly is a question, not a verdict.' 'No citizen personal data in the prompt — monitor the metadata of exchanges, never their contents.'" },
    { text: "Two safeguards matter here, and neither is optional. The AI flags; a human investigates — an anomaly is a question to look into, not a verdict to act on automatically. And, critically, the logs you feed the play must carry no citizen personal data. You monitor the metadata of exchanges — which service, success or failure, how fast — not the contents of what was exchanged. A monitoring tool that ingested citizen data would itself become a data-protection risk, the very thing the framework exists to prevent. Monitor the traffic, never the cargo." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The logs hold the bus's health — the play makes it legible, a human acts on the flags, and citizen data never enters the prompt.'" },
    { text: "So monitoring is how a framework stays healthy as it grows from one exchange to hundreds. The bus tells you how it is doing, in its logs; the AI play makes that legible; the Operating Authority acts on the flags; and citizen data never enters the prompt. Monitoring is the difference between a federation someone is watching and one that fails silently until a citizen complains." },
    { cue: "Slide 5 — Title: 'Sources'. Body: NIIS X-Road monitoring and operational logs; the Linkup federation (ITU cloud); ITU DPI Safeguards. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Watch the bus — monitoring and anomaly detection'.",
      "Standard ITU template. No images."],
    ["2", "What-the-logs-hold slide. Five text rows: failures, latency, patterns, metadata-only.",
      "What the play reads. Text-only."],
    ["3", "Two-safeguards slide. Two text rows: AI flags / human investigates; no citizen data.",
      "The non-negotiable safeguards. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the monitoring references."]
  ],
  aiTip: {
    title: "Summarise bus health and flag anomalies from the logs",
    problem: "An Operating Authority needs a plain-language health summary and anomaly flags from the bus's operational logs — without putting any citizen data into the prompt. This prompt produces the monitoring play.",
    prompt: "Below are operational logs from [country X]'s interoperability bus, containing ONLY exchange metadata — timestamp, calling subsystem, called service, success/failure, latency — and NO citizen personal data [paste the metadata logs]. Produce a health summary: (1) volume and success/failure rates by service; (2) any service with a rising failure rate or latency; (3) anomalies — unusual spikes, a caller that has not called this service before, off-hours surges — each flagged as a QUESTION for a human to investigate, not a conclusion; (4) the top 3 things the Operating Authority should look at this week; (5) a one-paragraph compliance note for the quarterly Steering Committee report — which members show sustained failure or unusual behaviour that warrants a conformance re-check. Do not infer anything about individual citizens; if the logs appear to contain personal data, stop and flag that as a data-protection issue. Output: the health summary plus the prioritised investigate list.",
    io: "Input: exchange METADATA logs only (no citizen data). Output: a health summary plus a prioritised list of anomalies to investigate.",
    safeguard: "Confirm the logs are stripped of citizen personal data before they go into the prompt — the play monitors the traffic, never the cargo. And treat every flagged anomaly as a question for a human, not an automated trigger; a false positive acted on automatically can cut off a legitimate exchange and the citizens who depend on it."
  },
  metadataRows: [
    ["Working title",          "Bus monitoring and anomaly detection"],
    ["YouTube-optimised title", "Spotting a failing government data exchange before a citizen does — with AI"],
    ["Description (60 words)", "A running bus logs every call. Point Claude at the exchange metadata — never citizen data — and it turns raw logs into a plain-language health report and anomaly flags: a failing service, a creeping slowdown, an unusual caller. The AI flags; a human investigates. It keeps a growing federation healthy. Five minutes for the Operating Authority's team. AI monitoring prompt in the description."],
    ["Tags",                    "bus monitoring, anomaly detection, observability, interoperability operations, X-Road logs, data protection, AI, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.3 (AI integration — monitoring play); §4.1 (methodology, operations)"],
    ["PAERA citations",         "(monitoring cited to NIIS X-Road; data-protection guidance to ITU DPI Safeguards)"],
    ["External-link list",      "NIIS X-Road monitoring and operational logs (niis.org); the Linkup federation (ITU cloud); ITU DPI Safeguards"]
  ]
}));


// ---------- 5.9 (folded from former 6.3, 12 Sep 2026) ----------
body.push(...renderSubtopic({
  num: "3.9 Subtopic 5.9",
  title: "Keep the documents honest — the consistency cross-check",
  runtime: "~5 min",
  words: 520,
  persona: PERSONA_S,
  paeraAnchor: "The KP2 deliverables — the decree, the Governance Pack, the standards portfolio; EU EIF",
  singleMessage: "Keep the decree, the Governance Pack and the standards portfolio saying the same thing — a cross-check that catches drift across the three.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Keep the documents honest — the consistency cross-check'. Voice-over begins." },
    { text: "A mature framework produces three big documents that must agree with each other: the decree, which is the legal layer; the Governance Pack, which is the organisational layer; and the standards portfolio, which is the technical layer. The trouble is that, separately maintained, they drift apart over time — a standard updated in the portfolio but not reflected in the decree, a role the Governance Pack renames but the decree still names the old way. The consistency cross-check reads the three for contradictions before a reviewer or a member finds them for you." },
    { cue: "Slide 2 — Title: 'What drifts'. Body, four text rows: 'A standard adopted in the catalogue but not authorised by the decree.' 'A role in the RACI the Governance Pack no longer names.' 'An exchange the decree authorises that no service implements — or the reverse.' 'The same term meaning different things in the three documents.'" },
    { text: "Drift is specific and predictable. The standards portfolio adopts a new version, but the decree still references the old one. The RACI names a body the Governance Pack no longer describes. The decree authorises an exchange that no service in the catalogue implements, or a service exists that the decree never authorised. And the same term — 'member', 'service', 'authority' — is used to mean slightly different things in the three documents. Each of these is a contradiction that quietly undermines the framework's credibility the moment someone notices it." },
    { text: "The play reads all three documents and reports the contradictions — where they disagree, and on what. It is the document analogue of the bus monitoring in the previous video: instead of watching the live traffic, it watches the documents for inconsistency. The value is catching drift before a Ministry of Justice reviewer, a joining member, or an auditor catches it for you — because a framework whose own three foundational documents contradict each other loses trust faster than almost anything else can cost it." },
    { cue: "Slide 3 — Title: 'The safeguard'. Body, single text block: 'The AI flags the contradiction; a human decides which document is right and fixes it. Deciding whether the catalogue or the decree is correct has legal and governance consequences — the play finds the drift, a person resolves it. Consistency is a direction, not an automatic edit.'" },
    { text: "The safeguard is the same shape as always. The AI flags the contradiction; a human decides which of the three documents is correct and fixes it. The play does not edit the decree on its own, because deciding whether the catalogue or the decree is right is a judgement with legal and governance consequences. The play finds the drift; a person resolves it. Run it whenever any of the three documents changes, and the framework's documents stay honest with each other as it evolves." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Cross-check the decree, the Governance Pack and the standards portfolio — the AI finds the drift, a human resolves which document is right.'" },
    { text: "So the consistency cross-check keeps the framework's three foundational documents telling the same story. The AI reads the decree, the Governance Pack and the standards portfolio together and flags where they have drifted apart; a human decides which is right and fixes it. Run it on every change, and you catch the contradictions yourself, before the reviewer, the member or the auditor does." },
    { cue: "Slide 5 — Title: 'Sources'. Body: the KP2 deliverables — the decree (Topic 2), the Governance Pack (Topic 3), the standards portfolio (Topic 4); EU EIF. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Keep the documents honest — the consistency cross-check'.",
      "Standard ITU template. No images."],
    ["2", "What-drifts slide. Four text rows of contradiction types.",
      "The predictable drifts. Text-only."],
    ["3", "Safeguard slide. Single text block: AI flags, human resolves.",
      "The consistent safeguard pattern. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Cross-check the decree, Governance Pack and standards portfolio for drift",
    problem: "A framework lead needs to find contradictions across the three foundational documents before a reviewer does. This prompt runs the document-consistency cross-check.",
    prompt: "Below are three foundational documents of [country X]'s Government Interoperability Framework: (A) the decree (legal); (B) the Governance Pack (organisational); (C) the standards portfolio (technical) [paste the three, or their key sections]. Cross-check them for contradictions and report: (1) standards in the catalogue not authorised or referenced by the decree, or referenced at a different version; (2) roles/bodies in the RACI or decree that the Governance Pack does not describe (or the reverse); (3) exchanges the decree authorises that no catalogued service implements, or services with no decree authorisation; (4) key terms ('member', 'service', 'authority', etc.) used inconsistently across the three. For each finding: the contradiction, where it appears in each document, and a QUESTION for a human ('which is correct?') — do NOT decide which document is right. Output: a contradiction table (finding / document A / document B / question) ordered by how damaging it would be if a reviewer found it.",
    io: "Input: the decree, Governance Pack and standards portfolio. Output: a contradiction table with a human question for each, ordered by risk.",
    safeguard: "The cross-check finds drift; it must not resolve it — deciding whether the decree or the catalogue is correct is a legal and governance judgement a human owns. Run the check after every change to any of the three documents, and treat a clean result as 'no contradictions found in what was provided', not a guarantee the documents are complete."
  },
  metadataRows: [
    ["Working title",          "The document-consistency cross-check"],
    ["YouTube-optimised title", "Keeping a framework's decree, governance and standards from contradicting each other"],
    ["Description (60 words)", "A framework's three foundational documents — the decree, the Governance Pack, the standards portfolio — drift apart when maintained separately. An AI cross-check reads all three and flags the contradictions: a standard the decree doesn't authorise, a role governance no longer names, a term used three ways. The AI finds the drift; a human resolves it. Five minutes for framework leaders. AI cross-check prompt in the description."],
    ["Tags",                    "document consistency, governance, decree, standards portfolio, framework integrity, AI cross-check, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.3 (AI integration — consistency cross-check); §4.1 (methodology, framework integrity)"],
    ["PAERA citations",         "(cross-check operates over the KP2 deliverables and EIF)"],
    ["External-link list",      "The KP2 deliverables — the decree (Topic 2), the Governance Pack (Topic 3), the standards portfolio (Topic 4); EU EIF"]
  ]
}));


// ---------- 5.10 (folded from former 6.4, 12 Sep 2026) ----------
body.push(...renderSubtopic({
  num: "3.10 Subtopic 5.10",
  title: "Carry the framework to the next sector",
  runtime: "~4 min",
  words: 540,
  persona: PERSONA_S,
  paeraAnchor: "ToR §4.4 (sector portability); EU EIF four-layer model; PAERA §3.4.3",
  singleMessage: "The same four-layer framework stands up interoperability beyond education — the method is sector-portable, and the second sector is cheaper than the first.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Carry the framework to the next sector'. Voice-over begins." },
    { text: "Everything in this knowledge product was demonstrated on education — Progressa's schools, learners and credentials. But the framework is not education-specific, and now that it runs, the most important thing a Strategist can know is exactly which parts carry to the next sector unchanged and which parts are new. Get that split right, and the second sector costs a fraction of the first." },
    { cue: "Slide 2 — Title: 'What carries, and what is new'. Body, two columns. Left 'Carries unchanged': 'The four layers.' 'The decree pattern.' 'The governance — tiers, RACI, Operating Authority.' 'The standards portfolio.' 'The bus itself, already running.' Right 'New per sector': 'The semantic layer — the vocabularies.' 'The specific exchanges and services.'" },
    { text: "Split the framework in two. What carries unchanged to health, or agriculture, or social protection: the four-layer model, the decree pattern, the governance — the tiers, the RACI, the Operating Authority — the standards portfolio, and the bus itself, already built and running. What is genuinely new per sector: the semantic layer, because health speaks a different vocabulary than education, and the specific exchanges and services that sector needs. That — the vocabularies and the services — is the whole of the difference. And a word on order. This knowledge product demonstrated on education because the worked case was to hand; most countries sequence the framework the other way round. The first wave is usually tax, civil registration, the business register and health — high-volume, foundational reference data that every other sector reads — with education, justice, social protection and customs in the second wave. Whichever sector goes first pays for the platform; the rule that the next is cheaper holds either way." },
    { text: "And this is the re-use argument at the scale of the whole framework. The first sector pays to build the bus, the governance and the legal mandate; the second sector reuses all of it and pays only for its own semantics and services; the third reuses more still. This is exactly the whole-of-government planning logic from the very first topic, now visible across sectors: build the shared platform once, and every sector after consumes it. The second sector is cheaper than the first, and the third cheaper than the second — and only a framework built deliberately, for the whole of government, makes that compounding possible. A set of separate sector projects never gets cheaper; a planned framework does." },
    { cue: "Slide 3 — Title: 'The portability map is the next sector's business case'. Body, single text block: 'For a new sector, list what is reused — most of it — and what is new. That map is the business case: here is the small, sector-specific part we build; here is the large platform we already have.'" },
    { text: "This is the ToR's portability commitment, and it is not a footnote — it is the reason an interoperability framework is worth its cost. A platform that served only education would be hard to justify; a platform that serves education first and then every other sector at a fraction of the cost is the investment a Strategist can defend for a decade. So when you take the next sector to your minister, bring the portability map: here is what we reuse, which is most of it, and here is the small, sector-specific part we build new. That map gets cheaper to make every time, and it is the business case for the next sector." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The framework is sector-portable — build the platform once, reuse it everywhere, and the next sector is cheaper than the last.'" },
    { text: "So the framework you built for education is sector-portable. Most of it — the bus, the governance, the legal mandate, the standards — carries unchanged; only the vocabularies and the services are new per sector. Build the platform once, reuse it everywhere, and let every sector after the first be cheaper than the one before. That compounding re-use is the framework's lasting value." },
    { cue: "Slide 5 — Title: 'Sources'. Body: ToR §4.4 (sector portability); the EU EIF four-layer model; PAERA v1.0 §3.4.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Carry the framework to the next sector'.",
      "Standard ITU template. No images."],
    ["2", "Carries-vs-new slide. Two-column text: what reuses, what is new per sector.",
      "The portability split. Text columns, no icons."],
    ["3", "Portability-map slide. Single text block on the map as the next sector's business case.",
      "Carries the re-use / whole-of-government argument. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the portability references."]
  ],
  aiTip: {
    title: "Map your framework's sector-portable vs sector-specific parts for a new sector",
    problem: "A Strategist taking the framework to a new sector needs a portability map — what is reused versus what is new — as the business case for that sector. This prompt produces it.",
    prompt: "I built a Government Interoperability Framework for [country X] in the education sector and want to extend it to [new sector — e.g. health]. Produce a sector-portability map. (1) REUSED UNCHANGED — list what carries over without change: the four-layer model, the decree pattern, the governance (tiers, RACI, Operating Authority), the standards portfolio, the bus and federation. For each, a one-line note on why it carries. (2) NEW FOR THIS SECTOR — list what must be built: the semantic layer (the sector's vocabularies and code lists — name the likely published standards for [new sector]), and the specific exchanges/services this sector needs. (3) THE BUSINESS CASE — a short statement a minister can read: here is the large platform we reuse, here is the small sector-specific part we build, and therefore this sector costs far less than the first. Then (4) place [new sector] in the usual sequencing — first wave (tax, civil registration, business register, health: foundational, high-volume) or second wave (education, justice, social protection, customs) — and say why. Output: the two lists, the wave placement, and the business-case statement.",
    io: "Input: the new sector. Output: a sector-portability map (reused / new) plus a minister-ready business case.",
    safeguard: "The 'reused unchanged' list is only true if the platform was built sector-neutrally — confirm that none of your education-sector specifics leaked into the bus, governance or standards before promising they carry over. And validate the new sector's vocabularies with that sector's data owners; assuming health maps like education is exactly the semantic error this framework exists to prevent."
  },
  metadataRows: [
    ["Working title",          "Sector portability"],
    ["YouTube-optimised title", "Why the second sector on an interoperability bus is far cheaper than the first"],
    ["Description (60 words)", "The framework you built for education isn't education-specific. The four layers, the decree pattern, the governance, the standards and the bus all carry unchanged to the next sector; only the vocabularies and the services are new. So the second sector costs a fraction of the first — the re-use argument at framework scale. Four minutes for framework leaders. AI portability-map prompt in the description."],
    ["Tags",                    "sector portability, reuse, interoperability framework, whole of government, business case, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 5: Implementation, onboarding and the live demonstration"],
    ["ToR §4 coverage",         "§4.4 (sector portability) — primary; §4.1 (methodology); §4.3 (AI integration — portability-map prompt)"],
    ["PAERA citations",         "§3.4.3 Interoperability framing (the four-layer model cited to EIF)"],
    ["External-link list",      "ToR §4.4 (sector portability); the EU EIF four-layer model; PAERA v1.0 §3.4.3"]
  ]
}));


// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 5 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the videos in Topic 5, 'act' means produce the corresponding implementation artefact — a four-phase plan with gates and a cost frame, a Member Requirements checklist, a Service-Level Agreement, an X-Road member registration (subsystem + access-control list), a federation run book, the once-only test call, a demonstration-to-production gap checklist, a bus-health summary from the logs, a document-consistency report, or a sector-portability map. Each subtopic's AI usage tip operationalises this: the member-registration prompt is an instance of bb-config-gen, and the artefacts go straight into the runnable build pack, ready to deploy and verify on the stack with kp-solution-verify."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video."),

  H3("4.4 Voice and tone"),
  P("Direct address ('your country', 'your agencies', 'your architects'). Plain language at approximately an eighth-grade English level, held even though the Architect audience is more technical. The last two videos (5.9, 5.10) return to the Strategist register, leading with what the framework's leadership can do rather than how the technical work is done. Examples are drawn from African public-sector reality — the duplicate registry found at assessment, the orphan system no one owns, the citizen filling the same form at five counters. Technical terms — security server, subsystem, access-control list, Central Server, Test CA, federation — are introduced in plain words on first use, because the Architect needs them to work; headlines stay capability-led, never concept-led. Honest framing throughout: interoperability is a sustained build, not a procurement."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the ten subtopics is in Section 6."),

  H3("4.6 GitBook companion and the build pack"),
  P("Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion links each subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): Topic 5 stands up the proving slice — the federation configuration, the member registrations (subsystem + access-control list) generated by bb-config-gen, the deploy/seed/acceptance scripts, and the once-only test call that is the build pack's acceptance check, run by kp-solution-verify. The legal, organisational and technical configuration from the earlier topics is deployed and demonstrated here as one running solution. Videos 5.8–5.10 then point at the pack as a running and reusable thing: the monitoring play reads the federation's exchange metadata, the cross-check reads the decree, the Governance Pack and the standards portfolio the pack carries as its three configuration layers (the pack's per-member gate register and path-conformance record are the same discipline applied to the running slice), and the portability map treats the whole pack as the template a country reuses for its own framework and its next sector. The former Topic 6 material that is not a play — the AI-play catalogue, the four role-paths and the country storyboard — is carried by the GitBook home page and the KP2 intro video."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting (and the v0.2 fold) raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 Cost-frame and topology claims to verify"),
  P("Claims that should be confirmed against the source before final lock: the four-phase implementation timeline (Core Platform 0–6 months, Pilot 6–12, Multi-agency 12–18, Optimisation 18–24+) and the cost frame benchmarked to Estonia's X-Road build-out and the ITU DPI Safeguards (5.1) — confirm the figures and the timeline, since cost claims are the most scrutinised by funders; and the Linkup federation topology (Central Server at PDGA, four Security Servers at MoEYS/PEMIS, PNEA, PLR, PNIA, a Test CA) against the Inception Report §4.3 (5.5)."),

  H3("5.2 Editorial tone calls"),
  P("Sharp lines that deserve a deliberate keep / soften / cut decision: 'the demonstration proves the pattern, not the production system' (5.7); 'the once-only call resolving is the whole framework's acceptance' (5.6); 'do not ship the demonstration as production' (5.7)."),

  H3("5.3 The live-demonstration realities"),
  P("Three items to settle with ITU. (1) The once-only worked flow — PNEA pre-filling identity from PNIA and enrolment from PLR — should be confirmed as the single most compelling once-only story before the demonstration is built (alternative: an MoEYS/PEMIS service pre-filling from PNIA). (2) The demonstration depends on the full Linkup federation being live on ITU cloud (Inception Report action item A4); without it, 5.5 and 5.6 are scripted against a federation that does not yet exist. (3) Whether 5.6 is shown as a genuinely live call or a recorded screencast of one — either way the scripts reference real endpoints and a real cross-server call, never a mock, per the Inception Report commitment."),

  H3("5.4 The runnable build pack and the handoff"),
  P("Topic 5 is where the build pack becomes runnable: the federation configuration, the member registrations (subsystem + access-control list, generated by bb-config-gen with a [confirm] on every X-Road identifier), the deploy/seed/acceptance scripts, and the once-only test call that kp-solution-verify runs as the acceptance check. This assumes the technical config from Topic 4 and the legal and organisational config from Topics 2–3. The Progressa membership (the four-server canon) and the schedule / Linkup cloud-access items carried from earlier topics still apply; see the KP2 Plan §7 and the KP2–4 Delivery Plan §6."),

  H3("5.5 Items carried from the retired Topic 6 (v0.2)"),
  P("Three items travel with the folded videos. (1) The bus-monitoring play (5.8) runs against the real Linkup logs, with reproducible runs per the Inception Report — confirm the logs are available (action item A4) and, critically, that they carry no citizen personal data before any log goes into an AI prompt. (2) Sharp lines that deserve a deliberate keep / soften / cut decision: 'the second sector is cheaper than the first' (5.10); 'monitor the traffic, never the cargo' (5.8); 'consistency is a direction, not an automatic edit' (5.9). (3) Topic 5 now mixes personas — Architect for 5.1–5.8, Strategist for 5.9–5.10. Each video stands alone and states its persona, so the mix is visible only in the playlist; confirm with ITU that this is acceptable, or that 5.9–5.10 should be signposted as the Strategist's close of KP2. Two consequences of the retirement to confirm: ToR §4.4 (sector portability) is now claimed by 5.10 alone, and ToR §4.7 (dissemination outline) is delivered by the GitBook home page's four role-paths and the KP2 intro video's storyboard rather than by a subtopic video."),

  H3("5.6 Alignment to the source method (v0.3)"),
  P("v0.3 aligns Topic 5 to the interoperability method behind KP2. 5.1 now uses the method's phase names (Foundation, Pilot and Validation, Expansion, Optimisation) and deliverables, states the honest calendar — the four build phases follow twelve to eighteen months of foundation work; the first cross-ministry once-only exchange lands in Phase 2; the first milestone is two to three years from programme start; national coverage four to six — and delivers the five plan artefacts (schedule, investment plan, procurement plan, workforce plan, risk register with success metrics). This replaces v0.1's 'first real exchange inside the first six months', which the Progressa demonstration achieves in a sandbox but a national programme does not; the KP2 intro storyboard is adjusted to match. 5.4 adds the conformance test as the gate before a member's first service; 5.6 the dual go-live approval; 5.8 the quarterly compliance review and reporting cadence; 5.10 the usual wave order of sectors. Confirm with ITU that the honest calendar is the framing to carry in the videos — it is the most-changed claim in v0.3."),

  H3("5.7 Corrections still pending from the 10 September script-vs-pack review"),
  P("v0.2 folded Topic 6 in and v0.3 aligns to the source method; neither yet carries the corrections listed in KP2_M5_Script_vs_Pack_Review_2026-09-10 §2 (the retired MoEYS/PEMIS server, the admission → validation → automated join mechanism in 5.4, OCSP/TSA and the explicit approval in 5.5, scripts/acceptance.sh 2.6.1–2.6.6 and field conformance in 5.6, the per-service SLA framing in 5.3, the development-track and message-log-retention points in 5.7). Those wait on the Tuesday-call decisions the review names (hosting; screencast under §3.i) and go into v0.3."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the ten subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["5.1", "Estonia X-Road build-out (cost and timeline benchmark); ITU DPI Safeguards (investment guidance); NIIS X-Road implementation guidance."],
    ["5.2", "NIIS X-Road member requirements and onboarding (niis.org); EU EIF."],
    ["5.3", "NIIS X-Road service-level / SLA guidance; the member obligations (Topic 3); EU EIF."],
    ["5.4", "NIIS X-Road member and subsystem registration; access-control list configuration (niis.org)."],
    ["5.5", "NIIS X-Road federation — Central Server, Security Server, configuration and Test CA (niis.org); the Linkup federation (ITU cloud)."],
    ["5.6", "PAERA v1.0 §5.2 Principle #5 (Once-Only); NIIS X-Road; the build-pack acceptance check (kp-solution-verify)."],
    ["5.7", "NIIS X-Road production and operations guidance; ITU DPI Safeguards."],
    ["5.8", "NIIS X-Road monitoring and operational logs (niis.org); the Linkup federation (ITU cloud); ITU DPI Safeguards."],
    ["5.9", "The KP2 deliverables — the decree (Topic 2), the Governance Pack (Topic 3), the standards portfolio (Topic 4); EU EIF."],
    ["5.10", "ToR §4.4 (sector portability); the EU EIF four-layer model; PAERA v1.0 §3.4.3 (interoperability framing)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP2 Module 5 — Video Script Bundle v0.3 (ITU-aligned)",
  description: "Video script bundle for KP2 Topic 5 (Government Interoperability Framework), aligned to ITU's Knowledge Products and Video Materials Guide.",
  styles: {
    default: { document: { run: { font: ARIAL, size: 21 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: ARIAL, color: COLOR_HEAD },
        paragraph: { spacing: { before: 280, after: 140 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: ARIAL, color: COLOR_HEAD },
        paragraph: { spacing: { before: 220, after: 100 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 22, bold: true, font: ARIAL, color: COLOR_ACCENT },
        paragraph: { spacing: { before: 160, after: 60 }, outlineLevel: 2 } }
    ]
  },
  sections: [{
    properties: { page: {
      size: { width: 11906, height: 16838 },
      margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
    } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP2 Topic 5 Script Bundle v0.3 · 12 September 2026",
        font: ARIAL, size: 16, color: COLOR_GREY_TXT })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.RIGHT,
      children: [
        new TextRun({ text: "Page ", font: ARIAL, size: 16, color: COLOR_GREY_TXT }),
        new TextRun({ children: [PageNumber.CURRENT], font: ARIAL, size: 16, color: COLOR_GREY_TXT })
      ] })] }) },
    children: body
  }]
});

Packer.toBuffer(doc).then(buf => {
  const out = process.env.OUT_PATH || path.join(__dirname, "KP2_Module5_Script_Bundle_v0.3.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
