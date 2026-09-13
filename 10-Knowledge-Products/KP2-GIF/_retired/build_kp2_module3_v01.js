// Build KP2 Module 3 — Video Script Bundle v0.1
// Government Interoperability Framework · Topic 3 — Governance: three-tier with RACI
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

// Persona for KP2 Module 1 (Strategist throughout, per Inception Report §6.2)
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
                         scriptBeats, slideSpecRows, aiTip, metadataRows }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([
    ["Persona",        PERSONA_S],
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
    children: [new TextRun({ text: "Topic 3 — Governance: three-tier with RACI",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 3 of KP2"],
    ["Version",             "v0.1 — aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "27 June 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_S],
    ["Subtopics",           "Six subtopics (3.1 – 3.6), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 27 minutes across six standalone videos"],
    ["Build pack",          "KP2-GIF/KP2-build-pack — this topic produces the Governance Pack, the organisational-layer configuration of the build pack"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Topic 3 of KP2 — Government Interoperability Framework. Topic 3 is the governance of the framework: the organisational layer that decides who owns the bus, who may join, who is accountable for each decision, and what every member signs up to. It produces the Governance Pack — the three-tier governance structure, the RACI matrix, the member obligations and the Technical Working Group charters — the organisational-layer artefact of the runnable build pack. The six videos walk the Strategist through why a bus needs an owner, the three tiers of governance, the RACI matrix that settles who decides, the obligations a member accepts, the four standing Technical Working Groups, and how governance stays current through change control rather than freezing at launch. The register is plain English, eighth-grade level; each subtopic leads with the public-sector outcome the listener can carry out of the video. The six videos are numbered to ITU's topic/subtopic convention (3.1 through 3.6), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the six video scripts that make up Topic 3 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 3 is the governance layer of KP2. It establishes why an interoperability platform needs an Operating Authority that owns it day to day, presents the three tiers of governance — Strategic Council, Steering Committee and Technical Working Groups — sets out the RACI matrix that settles who decides what, names the obligations a member agency accepts, and scopes the four standing Technical Working Groups. It closes by treating governance as living configuration: kept current through change control, not frozen at launch."),

  H3("1.2 KP2 is an implementation Knowledge Product"),
  P("KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 3 produces the Governance Pack — the organisational-layer configuration of the build pack: who governs the bus, who may join, and who is accountable for each decision; the technical configuration follows in the architecture and implementation topics. The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3)."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 3 at a glance — the six subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all six videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard."),

  pageBreak()
);

// ---------- TOPIC 1 AT A GLANCE ----------
body.push(
  H1("2. Topic 3 at a glance"),
  P("Six standalone subtopic videos. One Strategist persona throughout. Total runtime approximately twenty-seven minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["3.1", "Why a bus needs an owner",
      "An interoperability platform with no owner decays in its second year — name the Operating Authority before the first member joins.", "~4 min"],
    ["3.2", "The three tiers of governance",
      "Strategic Council, Steering Committee, Technical Working Groups — political authority, programme leadership and the specialists, each with one job.", "~5 min"],
    ["3.3", "The RACI matrix",
      "Write down who decides, who runs, who is consulted, once — it is what stops every onboarding turning into a turf fight.", "~5 min"],
    ["3.4", "Member obligations",
      "What an agency signs up to when it joins is the difference between a federation and a free-for-all.", "~4 min"],
    ["3.5", "The four Technical Working Groups",
      "Specification, semantics, security, onboarding — the four standing groups that keep the bus coherent as it grows.", "~4 min"],
    ["3.6", "Governance as living configuration",
      "Change control and a named standards-portfolio owner keep the framework current instead of frozen at launch.", "~5 min"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 3.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 3.1",
  title: "Why a bus needs an owner",
  runtime: "~4 min",
  words: 500,
  paeraAnchor: "EU EIF / NIIS X-Road governance; Estonia (Ministry of Economic Affairs and Communications + RIA); PAERA §3.1.3 (institutional setup)",
  singleMessage: "An interoperability platform with no owner decays in its second year — name the Operating Authority before the first member joins.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why a bus needs an owner'. Voice-over begins." },
    { text: "The most common way an interoperability platform dies is not technical. A bus gets built in a burst of donor-funded enthusiasm, the launch is celebrated, and then in the second year no one is accountable for keeping it alive. Members drift away. Certificates expire. No one chases the next agency to connect. The platform does not fail dramatically — it just quietly decays, because nobody owned it. The cure is to name the owner before the first member ever joins." },
    { cue: "Slide 2 — Title: 'What an Operating Authority owns'. Body, five text rows: 'Runs the bus day to day.' 'Admits and onboards new members.' 'Sets and monitors service levels.' 'Resolves disputes between members.' 'Owns the standards portfolio and keeps it current.'" },
    { text: "The owner is the Operating Authority — the body whose full-time job is to keep the platform running. It runs the bus day to day. It admits and onboards new members. It sets the service levels and watches them. It resolves disputes when two agencies disagree. And it owns the standards portfolio, keeping it current as the framework grows. In our demonstration country, Progressa, this is the Digital Government Authority, PDGA. Crucially, it is a standing operator with budget, staff and a mandate — not a committee that meets once a quarter." },
    { text: "Here is why the owner has to sit at the level of the whole of government. The bus is a shared road, built once for every agency to reuse — and a shared asset with no single accountable owner becomes nobody's responsibility. The planning that justifies building it once, and the authority to run it for everyone, exist only at whole-of-government level. No single project and no single ministry can own the shared bus on behalf of all the others; only a designated Operating Authority can." },
    { cue: "Slide 3 — Title: 'Governing is not operating'. Body, two text rows: 'The governing tiers set direction and make decisions.' 'The Operating Authority runs the platform day to day. A framework with governance but no operator is a set of meetings with nothing underneath.'" },
    { text: "Keep two things separate, because confusing them is a common failure. Governing is setting direction and making decisions — the tiers do that. Operating is running the platform day to day — the Operating Authority does that. A framework with governance bodies but no operator is a set of meetings with nothing underneath; an operator with no governance is a team running a platform with no authority to compel anyone to use it. You need both, and you need them distinct." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A shared bus needs a single accountable owner — name the Operating Authority, with budget, staff and mandate, before the first member joins.'" },
    { text: "So the first governance decision is the simplest to state and the easiest to skip: name the Operating Authority. Give it budget, staff and a real mandate. Do it before the first member joins, while the enthusiasm is high, so that when the enthusiasm fades there is still someone whose job it is to keep the bus alive. That is what stops the second-year decay." },
    { cue: "Slide 5 — Title: 'Sources'. Body: EU EIF / NIIS X-Road governance; Estonia model (Ministry of Economic Affairs and Communications + RIA); PAERA v1.0 §3.1.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Why a bus needs an owner'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 3.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "What-the-authority-owns slide. Five text rows of the Operating Authority's duties.",
      "The core role definition. Text-only list."],
    ["3", "Governing-vs-operating slide. Two text rows distinguishing the two.",
      "The key conceptual distinction. Sets up the three tiers."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The 'name the owner first' take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the governance references."]
  ],
  aiTip: {
    title: "Define your Operating Authority's mandate and powers",
    problem: "A Strategist needs to define what body will own the interoperability platform and what mandate it must hold — before standing up the governing tiers. This prompt drafts the Operating Authority's mandate.",
    prompt: "I am defining the Operating Authority for [country X]'s Government Interoperability Framework — the body that will own and run the platform day to day. Here is what I know of the candidate body or bodies [paste: any existing digital-government agency, e-government authority, or ICT unit that could host this role, and its current mandate]. Draft a mandate statement for the Operating Authority covering: (1) its core duties (run the bus, admit and onboard members, set and monitor service levels, resolve disputes, own the standards portfolio); (2) the powers it needs to perform them (and which of those it would NOT currently have under the candidate body's existing mandate — flag these as [confirm] gaps to close); (3) the resources it needs (standing staff roles, budget line, not project funding); (4) how it relates to the governing tiers (it operates; the tiers govern). Output: a one-page Operating Authority mandate plus a list of mandate gaps to close.",
    io: "Input: the candidate host body and its current mandate. Output: an Operating Authority mandate statement plus a list of mandate gaps.",
    safeguard: "Hosting the Operating Authority in an existing agency often requires a legal change to its mandate — treat every power the body does not already hold as a gap for legal counsel to close, not an assumption, and confirm the budget is a standing line, not a one-off project grant that disappears in year two."
  },
  metadataRows: [
    ["Working title",          "Why a bus needs an owner"],
    ["YouTube-optimised title", "Why interoperability platforms die in year two — and the owner that prevents it"],
    ["Description (60 words)", "Interoperability platforms rarely fail technically — they decay in their second year when no one owns them. The fix is an Operating Authority: a standing body with budget, staff and mandate that runs the bus, admits members, sets service levels and resolves disputes. Name it before the first member joins. Four minutes for digital-government leaders. AI mandate-drafting prompt in the description."],
    ["Tags",                    "operating authority, interoperability governance, platform ownership, X-Road governance, GovStack, EIF, digital government, sustainability"],
    ["Playlist (YouTube)",      "KP2 — Topic 3: Governance — three-tier with RACI"],
    ["ToR §4 coverage",         "§4.1 (methodology, governance); §4.3 (AI integration — operating-authority mandate prompt)"],
    ["PAERA citations",         "§3.1.3 Institutional setup"],
    ["External-link list",      "EU EIF; NIIS X-Road governance (niis.org); Estonia model — Ministry of Economic Affairs and Communications, RIA (ria.ee); PAERA v1.0 §3.1.3"]
  ]
}));

// ---------- 3.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 3.2",
  title: "The three tiers of governance",
  runtime: "~5 min",
  words: 580,
  paeraAnchor: "EU EIF / NIIS X-Road three-tier governance reference; Estonia governance model; PAERA §3.1.3",
  singleMessage: "Strategic Council, Steering Committee, Technical Working Groups — political authority, programme leadership and the specialists, each with one job.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The three tiers of governance'. Voice-over begins." },
    { text: "Governance fails in two opposite ways. Too top-heavy, and ministers are asked to decide technical details they cannot judge, so decisions stall. Too bottom-heavy, and technicians make political commitments they have no authority to keep, so decisions get reversed. The three-tier model, drawn from the EU's interoperability framework and the X-Road governance experience, avoids both by giving each kind of decision to the body that can actually make it." },
    { cue: "Slide 2 — Title: 'Three tiers, one operator'. Body, four text rows: 'Strategic Council — political authority (ministers).' 'Steering Committee — programme leadership (CDO, sector CIOs).' 'Technical Working Groups — the specialists.' 'Operating Authority — runs the platform underneath all three.'" },
    { text: "Picture three tiers, with the Operating Authority running underneath all of them. The top tier is the Strategic Council — political authority. The middle tier is the Steering Committee — programme leadership. The bottom tier is the Technical Working Groups — the specialists. Each tier has one job, and the art of governance is keeping each decision at the right tier." },
    { cue: "Slide 3 — Title: 'Strategic Council — political authority'. Body, three text rows: 'Sets direction and gives the framework political cover.' 'Removes political obstacles — the reluctant minister, the turf dispute.' 'Meets rarely; decides big things; does not decide technical questions.'" },
    { text: "The Strategic Council is ministers and the most senior officials. It sets the direction, gives the framework political cover, and — most valuable of all — removes the political obstacles that no technician can: the reluctant minister, the turf dispute between two agencies, the budget fight. It meets rarely and decides big things. It does not decide technical questions, and a healthy framework protects its Council from being dragged into them." },
    { cue: "Slide 4 — Title: 'Steering Committee — programme leadership'. Body, three text rows: 'Prioritises the Use-Case Catalogue and approves the roadmap.' 'Holds the budget; reports up to the Council.' 'Where the framework is steered, month to month.'" },
    { text: "The Steering Committee is programme leadership — the chief digital officer, the sector CIOs, the head of the Operating Authority. It prioritises the Use-Case Catalogue, approves the roadmap, holds the budget, and reports up to the Council. This is where the framework is actually steered, month to month — close enough to the work to make real decisions, senior enough to make them stick." },
    { cue: "Slide 5 — Title: 'Technical Working Groups — the specialists'. Body, two text rows: 'Architects, security and semantic experts do the detailed technical work.' 'They decide what they can, and recommend the rest up to the Steering Committee.'" },
    { text: "The Technical Working Groups are the specialists — architects, security experts, semantic experts. They do the detailed technical work, decide the questions within their competence, and recommend the rest up to the Steering Committee. This is also where the architects you trained in the Enterprise Architecture work find their home in the interoperability framework." },
    { cue: "Slide 6 — Title: 'Where business and IT decide together'. Body, single text block: 'The Council and Committee carry business and political authority; the Working Groups carry IT expertise. The three tiers give them a shared language and a shared rhythm — so business and IT decide the same questions in the same room, instead of missing each other.'" },
    { text: "There is a deeper reason for the three tiers than just sorting decisions. The Strategic Council and the Steering Committee carry the business and political authority; the Technical Working Groups carry the IT expertise. The tiered structure is what brings the two together — it gives business and IT a shared language and a shared rhythm, so that the people who decide what the framework is for and the people who decide how it works are deciding the same questions in the same room, rather than missing each other in separate meetings. That shared rhythm is what makes the hard, cross-cutting decisions possible at all." },
    { cue: "Slide 7 — Title: 'How the tiers connect'. Body, two text rows: 'Escalation up — a tier escalates only what it cannot decide.' 'Delegation down — most decisions are made at the lowest tier that can make them.'" },
    { text: "The tiers connect by escalation and delegation. A Working Group decides a standard; if it cannot agree, it escalates to the Steering Committee; if the question is political, the Committee escalates to the Council. The rule is that most decisions are made at the lowest tier that can make them, which keeps the ministers' scarce time for the few decisions only they can make. Get the escalation rules right and the framework runs smoothly; get them wrong and either nothing reaches the ministers or everything does." },
    { cue: "Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Three tiers — political authority, programme leadership, the specialists — each with one job, connected by escalation up and delegation down.'" },
    { text: "So the three tiers are the structure: the Strategic Council for political authority, the Steering Committee for programme leadership, the Technical Working Groups for the specialists, and the Operating Authority running underneath. Each has one job. Each decides at its level. That is how you govern an interoperability framework without either drowning the ministers in detail or letting technicians make commitments they cannot keep." },
    { cue: "Slide 9 — Title: 'Sources'. Body: EU EIF / NIIS X-Road three-tier governance reference; Estonia governance model; PAERA v1.0 §3.1.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The three tiers of governance'.",
      "Standard ITU template. No images."],
    ["2", "Three-tiers-one-operator slide. Four text rows: the three tiers plus the Operating Authority.",
      "The structural overview. Plain stacked text, no icons."],
    ["3", "Strategic Council slide. Three text rows: direction, obstacle removal, what it does not do.",
      "Text-only."],
    ["4", "Steering Committee slide. Three text rows: prioritise, budget, steer month to month.",
      "Text-only."],
    ["5", "Working Groups slide. Two text rows: detailed work, decide-or-recommend.",
      "Text-only."],
    ["6", "Business-and-IT slide. Single text block on the shared language and rhythm.",
      "Carries the lingua-franca argument. Text-only."],
    ["7", "Escalation-delegation slide. Two text rows: escalate up, delegate down.",
      "The connecting mechanism. Text-only."],
    ["8", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["9", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the three-tier reference."]
  ],
  aiTip: {
    title: "Draft the three-tier governance structure for your country",
    problem: "A Strategist needs a first draft of the three governing bodies — their membership, mandate and meeting cadence — tailored to the country's existing institutions. This prompt produces that structure.",
    prompt: "Draft a three-tier governance structure for [country X]'s Government Interoperability Framework, mapped onto the country's actual institutions. Here is what I know of the relevant bodies and roles [paste: ministers/cabinet structure, any CDO or digital-government head, sector CIOs, any existing ICT governance body, the Operating Authority if named]. For each of the three tiers — STRATEGIC COUNCIL (political authority), STEERING COMMITTEE (programme leadership), TECHNICAL WORKING GROUPS (specialists) — specify: its purpose in one line, its membership (by role, mapped to real [country X] posts where possible), its decision scope (what it decides and explicitly what it does not), and its meeting cadence. Then state the escalation rules between tiers. Where the country lacks a body to fill a tier, flag it as a [confirm] gap. If [country X] is small, also suggest how to merge tiers without losing the separation of political, programme and technical decisions. Output: the three-tier structure plus escalation rules plus any gaps.",
    io: "Input: the country's relevant institutions and roles. Output: a three-tier governance structure with membership, scope, cadence, escalation rules and gaps.",
    safeguard: "Membership and decision scope must be agreed with the named bodies, not imposed on paper — a tier whose 'members' have not consented to the scope is a diagram, not governance. Confirm especially that the Strategic Council's authority to bind agencies actually exists, since that is what the whole structure rests on."
  },
  metadataRows: [
    ["Working title",          "The three tiers of governance"],
    ["YouTube-optimised title", "The three tiers of interoperability governance — and what each one decides"],
    ["Description (60 words)", "Interoperability governance fails when ministers decide technical details or technicians make political commitments. The three-tier model fixes this: a Strategic Council for political authority, a Steering Committee for programme leadership, Technical Working Groups for the specialists — connected by escalation up and delegation down. It's where business and IT decide together. Five minutes for digital-government leaders. AI structure prompt in the description."],
    ["Tags",                    "governance tiers, interoperability governance, steering committee, technical working groups, X-Road governance, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 3: Governance — three-tier with RACI"],
    ["ToR §4 coverage",         "§4.1 (methodology, governance); §4.3 (AI integration — three-tier structure prompt)"],
    ["PAERA citations",         "§3.1.3 Institutional setup"],
    ["External-link list",      "EU EIF; NIIS X-Road governance (niis.org); Estonia governance model; PAERA v1.0 §3.1.3"]
  ]
}));

// ---------- 3.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 3.3",
  title: "The RACI matrix",
  runtime: "~5 min",
  words: 540,
  paeraAnchor: "EU EIF / NIIS X-Road governance (roles and responsibilities); PAERA §3.1.3",
  singleMessage: "Write down who decides, who runs, who is consulted, once — it is what stops every onboarding turning into a turf fight.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The RACI matrix'. Voice-over begins." },
    { text: "With three governing tiers, an Operating Authority and many member agencies, the question that derails interoperability is rarely 'can we do this technically?'. It is 'who decides?'. Two bodies both believe they are in charge of admitting a new member, or no one is, and a simple onboarding becomes a three-month turf fight. The RACI matrix is the cheap insurance against exactly that. It is one page that says, for each kind of decision, who decides and who does what." },
    { cue: "Slide 2 — Title: 'RACI — four roles'. Body, four text rows: 'Responsible — does the work.' 'Accountable — owns the decision; exactly one body, never two.' 'Consulted — must be asked before.' 'Informed — told after.'" },
    { text: "RACI names four roles for any decision. Responsible — who does the work. Accountable — who owns the decision; and the iron rule is exactly one Accountable, never two. Consulted — who must be asked before the decision. Informed — who is told after. The whole discipline rests on that one rule: one Accountable per decision. The most common governance failure is two bodies both thinking they are Accountable, which produces deadlock, or none, which produces drift." },
    { cue: "Slide 3 — Title: 'The decisions to map'. Body, six text rows: 'Admit a new member.' 'Approve a technical standard.' 'Authorise a new exchange.' 'Resolve a dispute between members.' 'Change or retire a standard.' 'Suspend a member that breaks the rules.'" },
    { text: "You do not map every decision — just the handful that recur and cause friction. Admitting a new member. Approving a technical standard. Authorising a new data exchange. Resolving a dispute between two members. Changing or retiring a standard. Suspending a member that breaks the rules. For each of these, write down which body is Accountable, who is Responsible, who must be Consulted, and who is Informed." },
    { cue: "Slide 4 — Title: 'One row, worked'. Body, single text block: 'Admit a new member — Responsible: the Operating Authority (does the onboarding). Accountable: the Steering Committee (approves). Consulted: the relevant Working Group (checks readiness). Informed: the Strategic Council. Write that once, and the next onboarding is a process, not a negotiation.'" },
    { text: "Take one row, worked through. Admitting a new member: the Operating Authority is Responsible — it does the onboarding. The Steering Committee is Accountable — it approves. The relevant Technical Working Group is Consulted — it checks the agency is ready. The Strategic Council is Informed. Write that single row down once, agree it, and the next agency that wants to join follows a known process instead of starting a fresh negotiation about who is allowed to say yes." },
    { text: "The value of the matrix is that you settle these questions before the dispute, not during it. A turf fight resolved by pointing at an agreed matrix is a five-minute conversation. The same fight with no matrix is a months-long escalation that burns the political capital you needed for harder things. A RACI is only words on a page — but it is the words that stop the fights." },
    { cue: "Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One Accountable per decision, written down once — the RACI matrix is what turns every recurring governance question from a fight into a process.'" },
    { text: "So the RACI matrix is the third piece of the Governance Pack. Map the handful of recurring decisions, give each exactly one Accountable body, and record who is Responsible, Consulted and Informed. It is quick to draft and it prevents the slow, expensive disputes that quietly stall interoperability frameworks. Agree it before the first member joins, while it is still abstract and uncontested." },
    { cue: "Slide 6 — Title: 'Sources'. Body: EU EIF / NIIS X-Road governance (roles and responsibilities); PAERA v1.0 §3.1.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The RACI matrix'.",
      "Standard ITU template. No images."],
    ["2", "RACI-four-roles slide. Four text rows defining R/A/C/I, emphasising one Accountable.",
      "The method definition. Text-only."],
    ["3", "Decisions-to-map slide. Six text rows of recurring decisions.",
      "The scope of the matrix. Plain text list."],
    ["4", "Worked-row slide. Single text block walking the 'admit a member' row.",
      "Makes RACI concrete with the bound tiers and authority."],
    ["5", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["6", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the governance references."]
  ],
  aiTip: {
    title: "Draft the governance RACI for your framework's key decisions",
    problem: "A Strategist with a three-tier structure needs a RACI matrix for the recurring governance decisions, mapped to the country's bodies. This prompt drafts it and surfaces the deadlock risks.",
    prompt: "Draft a RACI matrix for [country X]'s Government Interoperability Framework governance. The bodies are [paste your three tiers — Strategic Council, Steering Committee, Technical Working Groups — plus the Operating Authority and the member agencies, with names where known]. For each of these recurring decisions — admit a new member; approve a technical standard; authorise a new data exchange; resolve a dispute between members; change or retire a standard; suspend a member that breaks the rules — assign Responsible, Accountable (exactly one body), Consulted and Informed. CRITICAL: flag any decision where you have assigned more than one Accountable, or none, as a deadlock/drift risk to resolve. Also flag any decision where the Accountable body may not actually hold the authority to decide it. Output: the RACI table (one row per decision), then a list of deadlock/drift risks and authority gaps to resolve.",
    io: "Input: the governance bodies and member agencies. Output: a RACI matrix plus a list of deadlock/drift risks and authority gaps.",
    safeguard: "A RACI only works if each Accountable body actually has the authority its row claims — verify that against the governance mandates and, where the decision compels an agency (suspension, mandatory connection), against the decree. A matrix that assigns authority no body legally holds will not survive its first real dispute."
  },
  metadataRows: [
    ["Working title",          "The RACI matrix"],
    ["YouTube-optimised title", "The one-page matrix that stops interoperability onboarding becoming a turf fight"],
    ["Description (60 words)", "When two bodies both think they decide — or no one does — a simple onboarding becomes a three-month turf fight. A RACI matrix names, for each recurring decision, who is Responsible, Accountable (exactly one), Consulted and Informed. Write it once, before the first member joins. Five minutes for digital-government leaders. AI RACI-drafting prompt in the description."],
    ["Tags",                    "RACI matrix, governance roles, interoperability governance, decision rights, X-Road governance, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 3: Governance — three-tier with RACI"],
    ["ToR §4 coverage",         "§4.1 (methodology, governance); §4.3 (AI integration — RACI prompt)"],
    ["PAERA citations",         "§3.1.3 Institutional setup"],
    ["External-link list",      "EU EIF; NIIS X-Road governance (niis.org); PAERA v1.0 §3.1.3"]
  ]
}));

// ---------- 3.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 3.4",
  title: "Member obligations",
  runtime: "~4 min",
  words: 500,
  paeraAnchor: "EU EIF / NIIS X-Road member model and member obligations; PAERA §3.1.3",
  singleMessage: "What an agency signs up to when it joins is the difference between a federation and a free-for-all.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Member obligations'. Voice-over begins." },
    { text: "Joining the bus is not just plugging in a cable. It is accepting a set of obligations. A federation where each member picks and chooses which rules to follow is a free-for-all that no one can depend on — and the first time a member's stale data corrupts another agency's service, the whole framework loses trust. The member obligations, written down and signed, are what turn a collection of connections into a dependable federation." },
    { cue: "Slide 2 — Title: 'What every member accepts'. Body, six text rows: 'Connect and stay connected.' 'Meet the agreed service levels.' 'Keep its data accurate and current.' 'Answer the queries it is obliged to — honour once-only.' 'Protect the data it receives.' 'Follow the standards the framework sets.'" },
    { text: "Every member accepts a common set of obligations. Connect, and stay connected — not drop off when attention moves elsewhere. Meet the agreed service levels — uptime, response time. Keep its data accurate and current, because a registry that is stale poisons every exchange that relies on it. Answer the queries it is obliged to, so that once-only actually works for the citizen. Protect the data it receives. And follow the standards the framework sets, rather than its own. Six obligations, the same for everyone." },
    { cue: "Slide 3 — Title: 'Provider and consumer carry different weight'. Body, two text rows: 'The provider carries more — the load, the accuracy duty, the availability others depend on.' 'The consumer carries purpose and protection — use only as agreed, protect, do not re-share.'" },
    { text: "But the obligations are not identical on both sides, and naming the difference is important for fairness. The agency that provides data carries more weight — the load on its systems, the duty to keep the data accurate, the availability its consumers depend on. The agency that consumes data carries obligations of purpose and protection — use the data only for the agreed purpose, protect it, do not re-share it. A fair member agreement recognises that the provider is being asked to do more, and that the Operating Authority and the service levels exist partly to support it. Ignore this, and provider agencies quietly resist joining." },
    { cue: "Slide 4 — Title: 'The member agreement makes it signable'. Body, single text block: 'The obligations become a member agreement a CIO signs when the agency joins — so they are a commitment, not an assumption. And it is what the Operating Authority points to when a member stops meeting them.'" },
    { text: "All of this becomes a member agreement — the document a CIO signs when their agency joins the bus. Putting the obligations in a signed agreement turns them from an assumption into a commitment, and gives the Operating Authority something concrete to point to when a member stops meeting them. The member agreement is the organisational-layer counterpart to the decree: the decree compels connection in law; the agreement records what each member commits to in practice." },
    { cue: "Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A signed set of obligations — fair to provider and consumer alike — is what turns a collection of connections into a federation you can depend on.'" },
    { text: "So member obligations are the fourth piece of the Governance Pack. Six common obligations, a fair split of weight between provider and consumer, and a signed member agreement that makes them real. They are quiet, unglamorous work, but they are the difference between a federation that agencies trust and a free-for-all they avoid. And they feed directly into the service-level agreements the implementation work will need." },
    { cue: "Slide 6 — Title: 'Sources'. Body: EU EIF / NIIS X-Road member model and member obligations; PAERA v1.0 §3.1.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Member obligations'.",
      "Standard ITU template. No images."],
    ["2", "What-every-member-accepts slide. Six text rows of common obligations.",
      "The core list. Plain text, readable on mobile."],
    ["3", "Provider-vs-consumer slide. Two text rows on the different weight each carries.",
      "The fairness insight. Text-only."],
    ["4", "Member-agreement slide. Single text block on signing and enforcement.",
      "Links the obligations to a signable artefact and to the decree."],
    ["5", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["6", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the member-model references."]
  ],
  aiTip: {
    title: "Draft the member obligations and membership agreement",
    problem: "A Strategist needs a draft member agreement that sets out what an agency commits to when it joins — balanced between provider and consumer duties. This prompt drafts it.",
    prompt: "Draft a member agreement (the obligations an agency accepts when it joins) for [country X]'s Government Interoperability Framework. Cover the common obligations every member accepts: connect and stay connected; meet service levels; keep data accurate and current; answer the queries it is obliged to (honour once-only); protect data received; follow the framework's standards. Then split the agreement into PROVIDER obligations (for an agency supplying data — load, accuracy, availability) and CONSUMER obligations (for an agency receiving data — purpose limitation, protection, no onward sharing), making clear the provider is being asked to do more and how the framework supports it. Include: what counts as a breach, and what the Operating Authority may do about a persistent breach (with [confirm] where that power depends on the decree). Keep it to roughly two pages, plain language a CIO can sign. Output: the member agreement.",
    io: "Input: the country (and any known service-level expectations). Output: a two-page member agreement with common, provider and consumer obligations.",
    safeguard: "Enforcement powers — suspending or sanctioning a member — usually derive from the decree, not the agreement alone; mark any such power as [confirm] against the legal layer. And set service-level numbers with the provider agencies, not for them, or the agreement will be signed and then ignored."
  },
  metadataRows: [
    ["Working title",          "Member obligations"],
    ["YouTube-optimised title", "What an agency really signs up to when it joins an interoperability bus"],
    ["Description (60 words)", "Joining the bus isn't just plugging in — it's accepting obligations: stay connected, meet service levels, keep data current, answer queries, protect data, follow the standards. Providers carry more weight than consumers, and a fair signed member agreement is what turns connections into a dependable federation. Four minutes for digital-government leaders. AI member-agreement prompt in the description."],
    ["Tags",                    "member obligations, membership agreement, interoperability federation, service levels, data sharing, X-Road, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 3: Governance — three-tier with RACI"],
    ["ToR §4 coverage",         "§4.1 (methodology, governance); §4.3 (AI integration — member-agreement prompt)"],
    ["PAERA citations",         "§3.1.3 Institutional setup"],
    ["External-link list",      "EU EIF; NIIS X-Road member model and obligations (niis.org); PAERA v1.0 §3.1.3"]
  ]
}));

// ---------- 3.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 3.5",
  title: "The four Technical Working Groups",
  runtime: "~4 min",
  words: 500,
  paeraAnchor: "EU EIF / NIIS X-Road technical governance (working groups); PAERA §3.1.3",
  singleMessage: "Specification, semantics, security, onboarding — the four standing groups that keep the bus coherent as it grows.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The four Technical Working Groups'. Voice-over begins." },
    { text: "As a framework grows from two members to twenty, the technical work does not stop — it multiplies. New standards, new data models, new security questions, a steady stream of agencies to onboard. If that work is done ad hoc, by whoever is free, the bus drifts into incoherence: agencies make incompatible local choices and the framework slowly stops being one framework. Four standing Technical Working Groups are how you keep it coherent." },
    { cue: "Slide 2 — Title: 'Four groups, four dimensions'. Body, four text rows: 'Specification — the technical standards and APIs.' 'Semantics — shared data models, code lists, identifiers.' 'Security — the trust model, certificates, access control.' 'Onboarding — the process to admit and connect a member.'" },
    { text: "Each group owns one technical dimension of the framework. Specification owns the technical standards — the API styles, the message formats, the protocol every member uses. Semantics owns the shared meaning — the data models, the code lists, the identifiers, so that two agencies mean the same thing by the same word. Security owns the trust model — the certificates, the access control, the response when something goes wrong. And Onboarding owns the process that admits and connects a new member cleanly, the same way every time." },
    { cue: "Slide 3 — Title: 'Semantics — where business and IT meet'. Body, single text block: 'Agreeing that 'enrolment' means the same to the examination authority and the learner registry is a business decision the data owners make — written precisely enough for the systems to use. The Semantics group gives business and IT a shared language for the hardest interoperability problem.'" },
    { text: "The Semantics group deserves a special word, because it is where business and IT meet on the hardest interoperability problem: agreeing what the data means. Deciding that 'enrolment' means the same thing to the examination authority and to the learner registry is not a technical choice — it is a business decision the data owners make, but it has to be written down precisely enough for the systems to use. The Semantics group is the forum that gives both sides a shared language for that work, so the meaning is agreed once and reused everywhere, rather than re-argued in every new exchange." },
    { cue: "Slide 4 — Title: 'Standing, not project'. Body, two text rows: 'A project team disbands when the project ends.' 'A Working Group persists for the life of the framework, maintaining its dimension as members multiply.'" },
    { text: "The key word is standing. A project team disbands when its project ends; a Working Group persists for the life of the framework. That persistence is exactly what prevents the slow drift into incompatible local choices that kills interoperability over years. The groups decide what lies within their competence and recommend the rest up to the Steering Committee — and they are where the architects from your Enterprise Architecture work find their ongoing home in the framework." },
    { cue: "Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Four standing groups — specification, semantics, security, onboarding — each owning one technical dimension, are what keep the bus one framework as it grows.'" },
    { text: "So the four Technical Working Groups are the fifth piece of the Governance Pack. Specification, semantics, security, onboarding — standing, not project; deciding within their competence and recommending up; the home of the framework's technical coherence. Charter them at launch, and the framework can absorb its twentieth member as cleanly as its second." },
    { cue: "Slide 6 — Title: 'Sources'. Body: EU EIF / NIIS X-Road technical governance (working groups); PAERA v1.0 §3.1.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The four Technical Working Groups'.",
      "Standard ITU template. No images."],
    ["2", "Four-groups slide. Four text rows: specification, semantics, security, onboarding.",
      "The core structure. Plain text list."],
    ["3", "Semantics slide. Single text block on meaning as a business decision.",
      "Carries the shared-language argument. Text-only."],
    ["4", "Standing-not-project slide. Two text rows contrasting project teams and Working Groups.",
      "The persistence point. Text-only."],
    ["5", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["6", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the technical-governance references."]
  ],
  aiTip: {
    title: "Charter the four Technical Working Groups",
    problem: "A Strategist needs charters for the four standing Working Groups — their scope, membership and decision rights — so the framework's technical work is owned, not ad hoc. This prompt drafts them.",
    prompt: "Draft charters for the four standing Technical Working Groups of [country X]'s Government Interoperability Framework: SPECIFICATION (technical standards and APIs), SEMANTICS (shared data models, code lists, identifiers), SECURITY (trust model, certificates, access control), and ONBOARDING (the process to admit and connect a member). For each group, specify: its scope (what it owns and explicitly what it does not), the expertise its members need (mapped to real [country X] roles where known — e.g. the chief architect, the data-protection office, sector data owners), its decision rights (what it can decide versus what it must recommend up to the Steering Committee), and its meeting cadence. For the Semantics group, note that decisions about data meaning must involve the business data owners, not only technical staff. Output: four one-paragraph charters plus a note on where the groups overlap and must coordinate.",
    io: "Input: the country and any known technical roles. Output: four Working Group charters plus coordination notes.",
    safeguard: "A Working Group with no members who have the authority to commit their agencies produces recommendations no one implements — confirm that each group's membership includes people who can actually bind the data owners and systems they cover, especially for Semantics, where the meaning agreed must hold across agencies."
  },
  metadataRows: [
    ["Working title",          "The four Technical Working Groups"],
    ["YouTube-optimised title", "The four standing groups that keep a growing interoperability bus coherent"],
    ["Description (60 words)", "As a framework grows, the technical work multiplies — and done ad hoc, the bus drifts into incoherence. Four standing Technical Working Groups keep it coherent: specification, semantics, security and onboarding. Semantics is where business and IT agree what the data means. Standing, not project. Four minutes for digital-government leaders. AI charter-drafting prompt in the description."],
    ["Tags",                    "technical working groups, semantic interoperability, standards governance, security, onboarding, X-Road governance, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 3: Governance — three-tier with RACI"],
    ["ToR §4 coverage",         "§4.1 (methodology, governance); §4.3 (AI integration — Working Group charters prompt)"],
    ["PAERA citations",         "§3.1.3 Institutional setup"],
    ["External-link list",      "EU EIF; NIIS X-Road technical governance (niis.org); PAERA v1.0 §3.1.3"]
  ]
}));

// ---------- 3.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 3.6",
  title: "Governance as living configuration",
  runtime: "~5 min",
  words: 540,
  paeraAnchor: "EU EIF / NIIS X-Road (change control, standards governance); PAERA §3.1.3; output: the Governance Pack",
  singleMessage: "Change control and a named standards-portfolio owner keep the framework current instead of frozen at launch.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Governance as living configuration'. Voice-over begins." },
    { text: "The last governance idea is the one most frameworks miss. Governance is not a one-time setup you complete at launch and file away. The framework keeps changing — new members, new standards, new exchanges, technology that has to be retired — and someone must own those changes deliberately, or the carefully designed framework drifts out of date until it no longer matches what is actually running on the bus." },
    { cue: "Slide 2 — Title: 'What changes, constantly'. Body, four text rows: 'A new member joins.' 'A standard is updated or retired.' 'A new exchange is authorised.' 'The security model changes.' Below: 'Each is a change to the live framework, and each needs a controlled way to happen.'" },
    { text: "Look at what changes, constantly. A new member joins. A standard is updated, or retired. A new exchange is authorised. The security model changes in response to a new threat. Each of these is a change to the live framework. And each needs a controlled way to happen — proposed, reviewed, decided by the body the RACI makes Accountable, recorded, and communicated to every member. Change control is simply the discipline of making those changes deliberately instead of by accident." },
    { cue: "Slide 3 — Title: 'Name the standards-portfolio owner'. Body, single text block: 'A specific role inside the Operating Authority keeps the register of current standards, versions and exceptions. Without a named owner, the portfolio becomes documents nobody maintains and members quietly diverge. With one, there is always an authoritative answer to 'what is the current standard?''" },
    { text: "One role makes change control work: a named standards-portfolio owner, sitting inside the Operating Authority, who keeps the register of what standards are current, at what version, and what exceptions have been granted to whom. Without a named owner, the standards portfolio becomes a pile of documents nobody maintains, and members quietly diverge until no two are quite compatible. With a named owner, there is always an authoritative answer to the question 'what is the current standard?' — and that single answer is what holds a growing federation together." },
    { cue: "Slide 4 — Title: 'The Governance Pack is the organisational config'. Body, single text block: 'The three-tier structure, the RACI, the member obligations, the Working Group charters and the change-control process together are the organisational-layer configuration of the build pack. Acceptance check: every recurring decision has one named Accountable; every member has a signed agreement; the standards portfolio has a named owner and a written change process.'" },
    { text: "This is why everything in this topic adds up to the Governance Pack — and why the Governance Pack is the organisational-layer configuration of the runnable build pack, just as the decree is the legal-layer configuration. The pack has a concrete acceptance check. Every recurring decision has exactly one named Accountable body. Every member has a signed agreement. There is a named owner for the standards portfolio and a written change-control process. When those checks pass, the organisational layer of the framework is genuinely done — a living configuration that keeps working as the framework grows, not a binder that goes on a shelf after launch." },
    { cue: "Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Change control and a named owner make governance a living configuration — so the framework stays current for years instead of freezing at launch.'" },
    { text: "So governance is configuration that lives. The decree is the legal configuration; the Governance Pack is the organisational configuration; together they decide who is on the bus and how it changes over time. With both in place and kept current through change control, an interoperability framework can grow for years without drifting away from what it was designed to be. That durability is the entire reason to govern it deliberately — and it is what hands a sound organisational layer to the architects who build the bus." },
    { cue: "Slide 6 — Title: 'Sources'. Body: EU EIF / NIIS X-Road (change control, standards governance); PAERA v1.0 §3.1.3; the Governance Pack (build-pack artefact). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Governance as living configuration'.",
      "Standard ITU template. No images."],
    ["2", "What-changes slide. Four text rows plus a closing line on controlled change.",
      "Sets up change control. Text-only."],
    ["3", "Standards-portfolio-owner slide. Single text block on the named role.",
      "The single most practical governance role. Text-only."],
    ["4", "Governance-Pack-as-config slide. Single text block naming the artefact and its acceptance check.",
      "The build-pack connection — the organisational-layer config and its check."],
    ["5", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line that closes the topic."],
    ["6", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Set up your change-control process and standards-portfolio register",
    problem: "A Strategist needs a lightweight change-control process and a standards-portfolio register so governance stays current after launch. This prompt drafts both.",
    prompt: "Draft two things for [country X]'s Government Interoperability Framework so governance stays a living configuration. (1) A CHANGE-CONTROL PROCESS for changes to the live framework — covering, for each change type (admit a member; update or retire a standard; authorise a new exchange; change the security model): who proposes, who reviews, who is Accountable for the decision (reference the RACI), how it is recorded, and how it is communicated to members. Keep it lightweight — a process so heavy no one follows it is worse than none. (2) A STANDARDS-PORTFOLIO REGISTER template — the columns needed to track each current standard: name, version, status (current/deprecated), owner Working Group, exceptions granted, last reviewed. Name the role (inside the Operating Authority) that maintains it. Output: the change-control process and the register template.",
    io: "Input: the framework's governance bodies and RACI. Output: a change-control process and a standards-portfolio register template.",
    safeguard: "A change-control process only lives if it is light enough to use — resist adding approval steps that look rigorous but guarantee the process is bypassed. Pilot it on one real change (a single standard update) before declaring it the rule, and confirm the named portfolio owner actually has the time and authority to maintain the register."
  },
  metadataRows: [
    ["Working title",          "Governance as living configuration"],
    ["YouTube-optimised title", "Why interoperability governance must be living configuration, not a launch-day binder"],
    ["Description (60 words)", "Governance isn't a one-time setup — frameworks change constantly, and someone must own the changes. Change control plus a named standards-portfolio owner keep the framework current instead of frozen at launch. The Governance Pack is the organisational-layer configuration of the build pack, with a concrete acceptance check. Five minutes for digital-government leaders. AI change-control prompt in the description."],
    ["Tags",                    "change control, standards governance, living governance, interoperability framework, standards portfolio, X-Road governance, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 3: Governance — three-tier with RACI"],
    ["ToR §4 coverage",         "§4.1 (methodology, governance); §4.3 (AI integration — change-control prompt); §4.5 (build-pack acceptance)"],
    ["PAERA citations",         "§3.1.3 Institutional setup"],
    ["External-link list",      "EU EIF; NIIS X-Road governance — change control (niis.org); PAERA v1.0 §3.1.3"]
  ]
}));


// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 3 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the videos in Topic 3, 'act' means draft the corresponding part of the Governance Pack — a Terms of Reference for one of the three tiers, the RACI matrix, the member-obligations agreement, or a Technical Working Group charter. Each subtopic's AI usage tip operationalises this: the prompt produces a component of the Governance Pack the video is teaching, ready to refine."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video."),

  H3("4.4 Voice and tone"),
  P("Direct address ('your country', 'your minister', 'your agencies'). Plain language at approximately an eighth-grade English level. Examples are drawn from African public-sector reality — donor-funded fragmentation, the citizen filling the same form at five counters, the cross-ministry coordination meeting. The four-layer model, once-only, X-Road and the Progressa institutions are introduced in plain words; the deeper technical configuration is deferred to the architecture and implementation topics. Honest framing throughout: interoperability is a sustained build, not a procurement."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the six subtopics is in Section 6."),

  H3("4.6 GitBook companion and the build pack"),
  P("Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion links each subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): the Governance Pack produced in Topic 3 — the three-tier Terms of Reference, the RACI matrix, the member obligations and the Working Group charters — is the organisational-layer configuration of the build pack, the rules under which members are admitted and the once-only demonstration is governed."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 Reference claims to verify"),
  P("Claims drawn from comparator governance models that should be confirmed against the source before final lock: the Estonia governance split — the Ministry of Economic Affairs and Communications as the policy owner and the Information System Authority (RIA) as the operating authority for X-Road (3.1, 3.2); the three-tier governance pattern and the four-Working-Group structure as drawn from the EU EIF and NIIS X-Road governance references rather than invented (3.2, 3.5); PAERA §3.1.3 as the institutional-setup anchor. Confirm the institutional naming and the tier-to-Working-Group mapping."),

  H3("5.2 Editorial tone calls"),
  P("Sharp lines that deserve a deliberate keep / soften / cut decision: 'an interoperability platform with no owner decays in its second year' (3.1); 'binding, not advisory' as the test of a real governing body (3.2, 3.3); 'a federation, not a free-for-all' (3.4)."),

  H3("5.3 Structural calls (scale-to-fit)"),
  P("(1) The three tiers plus an Operating Authority is the full pattern; many smaller countries will not stand up a separate body for each tier. Confirm with ITU how to present scaling-down — e.g. one body carrying two tiers — without losing the separation of political authority, programme leadership and technical specialism. (2) In Progressa the Operating Authority is PDGA (operator of the X-Road federation); the relationship between the three governing tiers (who decides) and the Operating Authority (who runs) should be confirmed as the right way to present governance-versus-operations for a developing-country audience."),

  H3("5.4 Dependencies and consistency with the demonstration"),
  P("The Governance Pack and the Topic-2 decree together govern the Topic-5 once-only demonstration: the decree makes connection mandatory, and the member obligations (3.4) plus the admit-a-member decision (3.3 RACI) are what bring MoEYS/PEMIS, PNEA, PLR and PNIA onto the bus. The member-obligations artefact here becomes the Service-Level-Agreement and onboarding inputs in Topic 5. The Progressa membership (the four-server canon) and the schedule / Linkup cloud-access items carried from earlier topics still apply; see the KP2 Plan §7 and the KP2–4 Delivery Plan §6."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the six subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["3.1", "EU EIF / NIIS X-Road governance (operating authority); Estonia model — Ministry of Economic Affairs and Communications + RIA; PAERA v1.0 §3.1.3 (institutional setup)."],
    ["3.2", "EU EIF / NIIS X-Road three-tier governance reference; Estonia governance model; PAERA v1.0 §3.1.3."],
    ["3.3", "EU EIF / NIIS X-Road governance (roles and responsibilities, RACI); PAERA v1.0 §3.1.3."],
    ["3.4", "EU EIF / NIIS X-Road member model and member obligations; PAERA v1.0 §3.1.3."],
    ["3.5", "EU EIF / NIIS X-Road technical governance (specification, semantics, security, onboarding working groups); PAERA v1.0 §3.1.3."],
    ["3.6", "EU EIF / NIIS X-Road (change control, standards governance); the Governance Pack (build-pack artefact); PAERA v1.0 §3.1.3."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP2 Module 3 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP2 Topic 3 (Government Interoperability Framework), aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP2 Topic 3 Script Bundle v0.1 · 27 June 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP2_Module3_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
