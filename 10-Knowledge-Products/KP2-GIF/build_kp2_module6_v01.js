// Build KP2 Module 6 — Video Script Bundle v0.1
// Government Interoperability Framework · Topic 6 — AI plays and dissemination
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

// Persona for KP2 Module 6 (Strategist throughout — the AI-play catalogue and dissemination capstone)
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
    children: [new TextRun({ text: "Topic 6 — AI plays, dissemination, and the country storyboard",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 6 of KP2"],
    ["Version",             "v0.1 — aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "27 June 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_S],
    ["Subtopics",           "Six subtopics (6.1 – 6.6), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 28 minutes across six standalone videos"],
    ["Build pack",          "KP2-GIF/KP2-build-pack — this topic packages the framework's reusable AI-play catalogue and points to the complete build pack as the template a country reuses for its own framework and next sector"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Topic 6 of KP2 — Government Interoperability Framework. Topic 6 is the capstone, and it returns to the Strategist who oversees the whole framework. It gathers the AI plays met across KP2 into a reusable catalogue, adds two more — monitoring the live bus and cross-checking the framework's documents — and then steps back to the framework as a whole: how the same approach carries to other sectors, how to disseminate the knowledge product to the four roles that build a framework, and the storyboard of a country going from no interoperability framework to its first live once-only service. The six videos walk the Strategist through the AI-play catalogue, bus monitoring and anomaly detection, the document-consistency cross-check, sector portability, the dissemination outline, and the country storyboard. The register is plain English, eighth-grade level; each subtopic leads with the public-sector outcome the listener gains. The six videos are numbered to ITU's convention (6.1 through 6.6), each reworked to stand alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the six video scripts that make up Topic 6 of Knowledge Product 2 (Government Interoperability Framework), with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 6 is the capstone of KP2, and it returns to the Strategist after the two Architect-facing topics. It gathers the framework's AI plays into a reusable catalogue, adds bus monitoring and a document-consistency cross-check, and then steps back to the framework as a whole — its portability to other sectors, the four-role dissemination outline, and the storyboard of a country going from no framework to its first live once-only service. It is the topic that turns a set of built artefacts into a reusable, disseminable whole, and book-ends the strategic foundation laid in Topic 1."),

  H3("1.2 KP2 is an implementation Knowledge Product"),
  P("KP2 ships two things. The first is this video bundle, which teaches the build. The second is a runnable build pack — the configuration, prompts, scripts and acceptance checks that stand up a real once-only exchange on the Linkup (X-Road 7.x) federation across the Progressa institutions. Topic 6 packages the framework's reusable AI-play catalogue and points back to the complete build pack — the decree, the Governance Pack, the technical configuration and the proven once-only exchange — as the template a country reuses for its own framework and its next sector. It is the capstone, returning to the Strategist who oversees the whole. The structural backbone throughout is the four-layer interoperability model — Technical, Semantic, Organisational, Legal — drawn from the EU European Interoperability Framework and the NIIS X-Road documentation. The four-layer model is cited to those public references, not to PAERA; PAERA anchors the interoperability framing (§3.4.3), the relevant principles including Once-Only (§5.2), the legal layer (§3.2) and the governance setup (§3.1.3)."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 6 at a glance — the six subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all six videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without a separate storyboard."),

  pageBreak()
);

// ---------- TOPIC 1 AT A GLANCE ----------
body.push(
  H1("2. Topic 6 at a glance"),
  P("Six standalone subtopic videos. One Strategist persona throughout. Total runtime approximately twenty-eight minutes. Each video has a single message and a single learning outcome, and is discoverable individually via search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["6.1", "The GIF AI-play catalogue",
      "Three reusable AI plays turn weeks of specialist drafting into a reviewed afternoon — and they are the framework's toolkit, not one-offs.", "~5 min"],
    ["6.2", "Watch the bus — monitoring and anomaly detection",
      "Point Claude at the real bus logs to spot a failing or unusual exchange before a citizen does.", "~5 min"],
    ["6.3", "Keep the documents honest — the consistency cross-check",
      "Keep the decree, the governance manual and the standards catalogue saying the same thing — a cross-check that catches drift across the three.", "~5 min"],
    ["6.4", "Carry the framework to the next sector",
      "The same four-layer framework stands up interoperability beyond education — the method is sector-portable, and the second sector is cheaper than the first.", "~4 min"],
    ["6.5", "Disseminate to the four roles",
      "Four role-shaped paths — governance, legal drafting, technical architect, member onboarding — so each learner finds their lane.", "~4 min"],
    ["6.6", "From no framework to first service — the storyboard",
      "The storyboard of a country going from nothing to its first live once-only exchange, mapped to the six topics, in months not years.", "~5 min"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 6.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 6.1",
  title: "The GIF AI-play catalogue",
  runtime: "~5 min",
  words: 560,
  paeraAnchor: "The KP2 AI plays — gif-decree-draft, gif-semantic-map, gif-openapi-gen, bb-config-gen; EU EIF",
  singleMessage: "Three reusable AI plays turn weeks of specialist drafting into a reviewed afternoon — and they are the framework's toolkit, not one-offs.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The GIF AI-play catalogue'. Voice-over begins." },
    { text: "Across this knowledge product you met three AI plays — named tools, each turning a slow specialist task into a fast, reviewed draft. They are worth gathering into one catalogue, because they are not one-off tricks. They are a reusable toolkit your framework keeps and applies to every decree, every exchange, every service it builds." },
    { cue: "Slide 2 — Title: 'Three plays'. Body, three text rows: 'gif-decree-draft — the components of an interoperability decree.' 'gif-semantic-map — the shared meaning of an exchange.' 'gif-openapi-gen — the service contracts.'" },
    { text: "The catalogue has three plays. The decree drafter turns your Strategic Foundation Document into the components of a decree. The semantic mapper turns two agencies' field lists into a shared semantic map. And the service-contract generator turns a service brief and that semantic map into a callable contract. Three plays, three slow specialist tasks — legal drafting, semantic reconciliation, interface design — each compressed from weeks into a reviewed afternoon." },
    { cue: "Slide 3 — Title: 'One pattern, every play'. Body, three text rows: 'Generate from a published spec and a brief.' 'Confirm every output against the source — the statute, the registry, the provider.' 'A qualified human owns the result.'" },
    { text: "Notice they share one pattern, and it is the pattern worth remembering. Each play generates from a published specification and a brief. Each output is confirmed against the source — the statute, the registry, the provider — before it is used. And a qualified human owns the result: the lawyer for the decree, the data owner for the semantic map, the architect for the contract. Generate fast, confirm carefully, a human always owns the result. That discipline is what makes AI a tool the framework can trust rather than a risk it runs." },
    { text: "The value to you as the Strategist is leverage. A small team, with these plays, can draft a framework that would otherwise need scarce, expensive specialists for months. The plays do not replace the specialists — they let a few of them go much further. And because the plays are a catalogue, they are reused: the same decree drafter serves the next sector's decree, the same semantic mapper serves the next exchange. You build the toolkit once and apply it everywhere the framework grows." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Three reusable AI plays, one safe pattern — generate, confirm, a human owns the result — are the framework's toolkit, not one-off tricks.'" },
    { text: "So the AI-play catalogue is part of what your framework keeps. Three plays — decree drafting, semantic mapping, service contracts — sharing one safe pattern, giving a small team the leverage of a large one, and reused across every sector and every exchange. Hold them as a catalogue, not a memory, and the next team that extends the framework starts with the toolkit, not from scratch." },
    { cue: "Slide 5 — Title: 'Sources'. Body: the KP2 AI plays — gif-decree-draft, gif-semantic-map, gif-openapi-gen (instances of bb-config-gen); EU EIF. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The GIF AI-play catalogue'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP2 / 6.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Three-plays slide. Three text rows naming each play and what it produces.",
      "The catalogue. Text-only."],
    ["3", "One-pattern slide. Three text rows: generate, confirm, human owns.",
      "The safe pattern shared by every play. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the AI-play references."]
  ],
  aiTip: {
    title: "Assemble your GIF AI-play catalogue (the reusable kit)",
    problem: "A Strategist wants a one-page catalogue of the framework's AI plays — what each does, its inputs and outputs, and its safeguard — so a small team can reuse them across sectors. This prompt assembles it.",
    prompt: "Assemble a one-page AI-play catalogue for [country X]'s Government Interoperability Framework. For each of these plays — decree drafting (gif-decree-draft), semantic mapping (gif-semantic-map), service-contract generation (gif-openapi-gen) — produce a catalogue entry: (1) what task it does and which specialist task it accelerates; (2) its inputs (the published spec and the brief) and its output (the artefact); (3) the confirm step — what the output must be checked against before use; (4) who owns the result (the human role). Then state the one pattern they share — generate from a spec + brief, confirm against the source, a human owns the result — and note how a small team reuses the catalogue across sectors. Add a one-line caution that the plays accelerate specialists, they do not replace them. Output: the three catalogue entries plus the shared-pattern summary.",
    io: "Input: the three plays (named). Output: a one-page reusable AI-play catalogue with the shared pattern.",
    safeguard: "The catalogue's value is in the confirm step — make sure every entry names exactly what the output is checked against and who owns it, so no one treats a generated draft as final. A catalogue that lists the plays but drops the confirm-and-own discipline teaches the dangerous half of the lesson."
  },
  metadataRows: [
    ["Working title",          "The GIF AI-play catalogue"],
    ["YouTube-optimised title", "Three AI plays that turn weeks of interoperability drafting into a reviewed afternoon"],
    ["Description (60 words)", "Across KP2 you met three AI plays: decree drafting, semantic mapping, service-contract generation. Gathered into a catalogue, they're a reusable toolkit, not one-off tricks — each sharing one safe pattern: generate from a published spec, confirm against the source, a human owns the result. They give a small team the leverage of a large one. Five minutes for framework leaders. AI catalogue prompt in the description."],
    ["Tags",                    "AI plays, AI for government, interoperability, decree drafting, semantic mapping, OpenAPI, GovStack, digital government, Claude"],
    ["Playlist (YouTube)",      "KP2 — Topic 6: AI plays, dissemination and the country storyboard"],
    ["ToR §4 coverage",         "§4.3 (AI integration) — primary; §4.1 (methodology); §4.7 (dissemination)"],
    ["PAERA citations",         "(the AI plays generate config against published specs and EIF; no PAERA section claimed)"],
    ["External-link list",      "The KP2 AI plays — gif-decree-draft, gif-semantic-map, gif-openapi-gen; EU EIF"]
  ]
}));

// ---------- 6.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 6.2",
  title: "Watch the bus — monitoring and anomaly detection",
  runtime: "~5 min",
  words: 520,
  paeraAnchor: "NIIS X-Road monitoring and operational logs; the Linkup federation; ITU DPI Safeguards",
  singleMessage: "Point Claude at the real bus logs to spot a failing or unusual exchange before a citizen does.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Watch the bus — monitoring and anomaly detection'. Voice-over begins." },
    { text: "A running bus is not finished — it is operating, every day. Every call leaves a trace in the logs: success or failure, fast or slow, who called whom. Reading those logs by hand does not scale past a few services. The fourth AI play points Claude at the real bus logs and turns them into something a Strategist can act on — a plain-language picture of the bus's health, and a flag when something looks wrong." },
    { cue: "Slide 2 — Title: 'What the logs hold'. Body, four text rows: 'Which exchanges ran, and which failed — and how often.' 'Latency — whether calls are getting slower.' 'Unusual patterns — a spike, a new caller, an off-hours surge.' 'The metadata of exchanges, never their contents.'" },
    { text: "The logs hold the operational truth. Which exchanges ran and which failed, and how often. Whether calls are getting slower — a sign of a service under strain. And unusual patterns — a sudden spike, an agency calling a service it never called before, a surge of activity at three in the morning. The play reads all of this and writes a plain-language health report, flagging the things that deserve a human's attention this week." },
    { text: "The value is early warning. A failing service, caught in the logs, is fixed before a citizen standing at a counter is turned away. A creeping slowdown, spotted early, is addressed before it becomes an outage. The Operating Authority's team uses this to watch a growing federation without drowning in raw logs — the AI does the reading, the team does the acting. That is what lets a small operations team keep a hundred-service bus healthy." },
    { cue: "Slide 3 — Title: 'Two safeguards that are not optional'. Body, two text rows: 'The AI flags; a human investigates — an anomaly is a question, not a verdict.' 'No citizen personal data in the prompt — monitor the metadata of exchanges, never their contents.'" },
    { text: "Two safeguards matter here, and neither is optional. The AI flags; a human investigates — an anomaly is a question to look into, not a verdict to act on automatically. And, critically, the logs you feed the play must carry no citizen personal data. You monitor the metadata of exchanges — which service, success or failure, how fast — not the contents of what was exchanged. A monitoring tool that ingested citizen data would itself become a data-protection risk, the very thing the framework exists to prevent. Monitor the traffic, never the cargo." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The logs hold the bus's health — the play makes it legible, a human acts on the flags, and citizen data never enters the prompt.'" },
    { text: "So monitoring is how a framework stays healthy as it grows from one exchange to hundreds. The bus tells you how it is doing, in its logs; the AI play makes that legible; the Operating Authority acts on the flags; and citizen data never enters the prompt. Monitoring is the difference between a federation someone is watching and one that fails silently until a citizen complains." },
    { cue: "Slide 5 — Title: 'Sources'. Body: NIIS X-Road monitoring and operational logs; the Linkup federation (ITU cloud); ITU DPI Safeguards. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Watch the bus — monitoring and anomaly detection'.",
      "Standard ITU template. No images."],
    ["2", "What-the-logs-hold slide. Four text rows: failures, latency, patterns, metadata-only.",
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
    prompt: "Below are operational logs from [country X]'s interoperability bus, containing ONLY exchange metadata — timestamp, calling subsystem, called service, success/failure, latency — and NO citizen personal data [paste the metadata logs]. Produce a health summary: (1) volume and success/failure rates by service; (2) any service with a rising failure rate or latency; (3) anomalies — unusual spikes, a caller that has not called this service before, off-hours surges — each flagged as a QUESTION for a human to investigate, not a conclusion; (4) the top 3 things the Operating Authority should look at this week. Do not infer anything about individual citizens; if the logs appear to contain personal data, stop and flag that as a data-protection issue. Output: the health summary plus the prioritised investigate list.",
    io: "Input: exchange METADATA logs only (no citizen data). Output: a health summary plus a prioritised list of anomalies to investigate.",
    safeguard: "Confirm the logs are stripped of citizen personal data before they go into the prompt — the play monitors the traffic, never the cargo. And treat every flagged anomaly as a question for a human, not an automated trigger; a false positive acted on automatically can cut off a legitimate exchange and the citizens who depend on it."
  },
  metadataRows: [
    ["Working title",          "Bus monitoring and anomaly detection"],
    ["YouTube-optimised title", "Spotting a failing government data exchange before a citizen does — with AI"],
    ["Description (60 words)", "A running bus logs every call. Point Claude at the exchange metadata — never citizen data — and it turns raw logs into a plain-language health report and anomaly flags: a failing service, a creeping slowdown, an unusual caller. The AI flags; a human investigates. It keeps a growing federation healthy. Five minutes for framework leaders. AI monitoring prompt in the description."],
    ["Tags",                    "bus monitoring, anomaly detection, observability, interoperability operations, X-Road logs, data protection, AI, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 6: AI plays, dissemination and the country storyboard"],
    ["ToR §4 coverage",         "§4.3 (AI integration — monitoring play); §4.1 (methodology, operations)"],
    ["PAERA citations",         "(monitoring cited to NIIS X-Road; data-protection guidance to ITU DPI Safeguards)"],
    ["External-link list",      "NIIS X-Road monitoring and operational logs (niis.org); the Linkup federation (ITU cloud); ITU DPI Safeguards"]
  ]
}));

// ---------- 6.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 6.3",
  title: "Keep the documents honest — the consistency cross-check",
  runtime: "~5 min",
  words: 520,
  paeraAnchor: "The KP2 deliverables — the decree, the governance manual, the standards catalogue; EU EIF",
  singleMessage: "Keep the decree, the governance manual and the standards catalogue saying the same thing — a cross-check that catches drift across the three.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Keep the documents honest — the consistency cross-check'. Voice-over begins." },
    { text: "A mature framework produces three big documents that must agree with each other: the decree, which is the legal layer; the governance manual, which is the organisational layer; and the standards catalogue, which is the technical layer. The trouble is that, separately maintained, they drift apart over time — a standard updated in the catalogue but not reflected in the decree, a role renamed in governance but not in the manual. The sixth AI play cross-checks the three for contradictions before a reviewer or a member finds them for you." },
    { cue: "Slide 2 — Title: 'What drifts'. Body, four text rows: 'A standard adopted in the catalogue but not authorised by the decree.' 'A role in the RACI the governance manual no longer names.' 'An exchange the decree authorises that no service implements — or the reverse.' 'The same term meaning different things in the three documents.'" },
    { text: "Drift is specific and predictable. The standards catalogue adopts a new version, but the decree still references the old one. The RACI names a body the governance manual no longer describes. The decree authorises an exchange that no service in the catalogue implements, or a service exists that the decree never authorised. And the same term — 'member', 'service', 'authority' — is used to mean slightly different things in the three documents. Each of these is a contradiction that quietly undermines the framework's credibility the moment someone notices it." },
    { text: "The play reads all three documents and reports the contradictions — where they disagree, and on what. It is the document analogue of the bus monitoring: instead of watching the live traffic, it watches the documents for inconsistency. The value is catching drift before a Ministry of Justice reviewer, a joining member, or an auditor catches it for you — because a framework whose own three foundational documents contradict each other loses trust faster than almost anything else can cost it." },
    { cue: "Slide 3 — Title: 'The safeguard'. Body, single text block: 'The AI flags the contradiction; a human decides which document is right and fixes it. Deciding whether the catalogue or the decree is correct has legal and governance consequences — the play finds the drift, a person resolves it. Consistency is a direction, not an automatic edit.'" },
    { text: "The safeguard is the same shape as always. The AI flags the contradiction; a human decides which of the three documents is correct and fixes it. The play does not edit the decree on its own, because deciding whether the catalogue or the decree is right is a judgement with legal and governance consequences. The play finds the drift; a person resolves it. Run it whenever any of the three documents changes, and the framework's documents stay honest with each other as it evolves." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Cross-check the decree, the governance manual and the standards catalogue — the AI finds the drift, a human resolves which document is right.'" },
    { text: "So the consistency cross-check keeps the framework's three foundational documents telling the same story. The AI reads the decree, the governance manual and the standards catalogue together and flags where they have drifted apart; a human decides which is right and fixes it. Run it on every change, and you catch the contradictions yourself, before the reviewer, the member or the auditor does." },
    { cue: "Slide 5 — Title: 'Sources'. Body: the KP2 deliverables — the decree (Topic 2), the governance manual (Topic 3), the standards catalogue (Topic 4); EU EIF. Footer: 'Find the link in the description.'" }
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
    title: "Cross-check the decree, governance manual and standards catalogue for drift",
    problem: "A framework lead needs to find contradictions across the three foundational documents before a reviewer does. This prompt runs the document-consistency cross-check.",
    prompt: "Below are three foundational documents of [country X]'s Government Interoperability Framework: (A) the decree (legal); (B) the governance manual (organisational); (C) the standards catalogue (technical) [paste the three, or their key sections]. Cross-check them for contradictions and report: (1) standards in the catalogue not authorised or referenced by the decree, or referenced at a different version; (2) roles/bodies in the RACI or decree that the governance manual does not describe (or the reverse); (3) exchanges the decree authorises that no catalogued service implements, or services with no decree authorisation; (4) key terms ('member', 'service', 'authority', etc.) used inconsistently across the three. For each finding: the contradiction, where it appears in each document, and a QUESTION for a human ('which is correct?') — do NOT decide which document is right. Output: a contradiction table (finding / document A / document B / question) ordered by how damaging it would be if a reviewer found it.",
    io: "Input: the decree, governance manual and standards catalogue. Output: a contradiction table with a human question for each, ordered by risk.",
    safeguard: "The cross-check finds drift; it must not resolve it — deciding whether the decree or the catalogue is correct is a legal and governance judgement a human owns. Run the check after every change to any of the three documents, and treat a clean result as 'no contradictions found in what was provided', not a guarantee the documents are complete."
  },
  metadataRows: [
    ["Working title",          "The document-consistency cross-check"],
    ["YouTube-optimised title", "Keeping a framework's decree, governance and standards from contradicting each other"],
    ["Description (60 words)", "A framework's three foundational documents — the decree, the governance manual, the standards catalogue — drift apart when maintained separately. An AI cross-check reads all three and flags the contradictions: a standard the decree doesn't authorise, a role governance no longer names, a term used three ways. The AI finds the drift; a human resolves it. Five minutes for framework leaders. AI cross-check prompt in the description."],
    ["Tags",                    "document consistency, governance, decree, standards catalogue, framework integrity, AI cross-check, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 6: AI plays, dissemination and the country storyboard"],
    ["ToR §4 coverage",         "§4.3 (AI integration — consistency cross-check); §4.1 (methodology, framework integrity)"],
    ["PAERA citations",         "(cross-check operates over the KP2 deliverables and EIF)"],
    ["External-link list",      "The KP2 deliverables — the decree (Topic 2), the governance manual (Topic 3), the standards catalogue (Topic 4); EU EIF"]
  ]
}));

// ---------- 6.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 6.4",
  title: "Carry the framework to the next sector",
  runtime: "~4 min",
  words: 480,
  paeraAnchor: "ToR §4.4 (sector portability); EU EIF four-layer model; PAERA §3.4.3",
  singleMessage: "The same four-layer framework stands up interoperability beyond education — the method is sector-portable, and the second sector is cheaper than the first.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Carry the framework to the next sector'. Voice-over begins." },
    { text: "Everything in this knowledge product was demonstrated on education — Progressa's schools, learners and credentials. But the framework is not education-specific, and the most important thing a Strategist can know at the end is exactly which parts carry to the next sector unchanged and which parts are new. Get that split right, and the second sector costs a fraction of the first." },
    { cue: "Slide 2 — Title: 'What carries, and what is new'. Body, two columns. Left 'Carries unchanged': 'The four layers.' 'The decree pattern.' 'The governance — tiers, RACI, Operating Authority.' 'The standards portfolio.' 'The bus itself, already running.' Right 'New per sector': 'The semantic layer — the vocabularies.' 'The specific exchanges and services.'" },
    { text: "Split the framework in two. What carries unchanged to health, or agriculture, or social protection: the four-layer model, the decree pattern, the governance — the tiers, the RACI, the Operating Authority — the standards portfolio, and the bus itself, already built and running. What is genuinely new per sector: the semantic layer, because health speaks a different vocabulary than education, and the specific exchanges and services that sector needs. That — the vocabularies and the services — is the whole of the difference." },
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
    prompt: "I built a Government Interoperability Framework for [country X] in the education sector and want to extend it to [new sector — e.g. health]. Produce a sector-portability map. (1) REUSED UNCHANGED — list what carries over without change: the four-layer model, the decree pattern, the governance (tiers, RACI, Operating Authority), the standards portfolio, the bus and federation. For each, a one-line note on why it carries. (2) NEW FOR THIS SECTOR — list what must be built: the semantic layer (the sector's vocabularies and code lists — name the likely published standards for [new sector]), and the specific exchanges/services this sector needs. (3) THE BUSINESS CASE — a short statement a minister can read: here is the large platform we reuse, here is the small sector-specific part we build, and therefore this sector costs far less than the first. Output: the two lists plus the business-case statement.",
    io: "Input: the new sector. Output: a sector-portability map (reused / new) plus a minister-ready business case.",
    safeguard: "The 'reused unchanged' list is only true if the platform was built sector-neutrally — confirm that none of your education-sector specifics leaked into the bus, governance or standards before promising they carry over. And validate the new sector's vocabularies with that sector's data owners; assuming health maps like education is exactly the semantic error this framework exists to prevent."
  },
  metadataRows: [
    ["Working title",          "Sector portability"],
    ["YouTube-optimised title", "Why the second sector on an interoperability bus is far cheaper than the first"],
    ["Description (60 words)", "The framework you built for education isn't education-specific. The four layers, the decree pattern, the governance, the standards and the bus all carry unchanged to the next sector; only the vocabularies and the services are new. So the second sector costs a fraction of the first — the re-use argument at framework scale. Four minutes for framework leaders. AI portability-map prompt in the description."],
    ["Tags",                    "sector portability, reuse, interoperability framework, whole of government, business case, EIF, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 6: AI plays, dissemination and the country storyboard"],
    ["ToR §4 coverage",         "§4.4 (sector portability) — primary; §4.1 (methodology); §4.3 (AI integration — portability-map prompt)"],
    ["PAERA citations",         "§3.4.3 Interoperability framing (the four-layer model cited to EIF)"],
    ["External-link list",      "ToR §4.4 (sector portability); the EU EIF four-layer model; PAERA v1.0 §3.4.3"]
  ]
}));

// ---------- 6.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 6.5",
  title: "Disseminate to the four roles",
  runtime: "~4 min",
  words: 480,
  paeraAnchor: "ITU Knowledge Products and Video Materials Guide (dissemination); the four framework roles",
  singleMessage: "Four role-shaped paths — governance, legal drafting, technical architect, member onboarding — so each learner finds their lane.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Disseminate to the four roles'. Voice-over begins." },
    { text: "This knowledge product covered the whole framework, but no single person does all of it. A governance lead does not draft articles; a technical architect does not write decrees. So the last practical step is to shape the content into role-paths — curated routes through the videos, the GitBook and the build pack for each role that builds a framework — so a learner finds their lane instead of being asked to watch everything." },
    { cue: "Slide 2 — Title: 'Four role-paths, plus the overview'. Body, five text rows: 'Governance lead — the why and the governance (Topics 1, 3).' 'Legal drafter — the decree (Topic 2).' 'Technical architect — the architecture and the build (Topic 4, technical half of Topic 5).' 'Member-onboarding lead — the onboarding (onboarding half of Topic 5).' 'Strategist — the overview and the case (Topics 1, 6).'" },
    { text: "Four role-paths, plus the Strategist's overview. The governance lead follows the why and the governance — Topics 1 and 3. The legal drafter follows the decree — Topic 2. The technical architect follows the architecture and the build — Topic 4 and the technical half of Topic 5. The member-onboarding lead follows the onboarding — the onboarding half of Topic 5. And the Strategist who commissions and oversees follows Topics 1 and 6, the book-ends. Each path is a short, curated route, not the whole product." },
    { text: "The value is reach. A knowledge product that asks every viewer to watch everything reaches few; one that says 'if you are the legal drafter, watch these three videos and use this prompt' reaches each role where they are. The role-paths are how KP2 gets used rather than just published — and how a country trains the actual, distributed team that builds its framework, each member learning their part." },
    { cue: "Slide 3 — Title: 'The paths map onto the build pack'. Body, single text block: 'The legal drafter's path ends at the decree config; the architect's at the semantic map and contracts; the onboarding lead's at the member registrations. Each role learns its part and produces its part of the runnable build pack.'" },
    { text: "And the role-paths map cleanly onto the build pack. The legal drafter's path ends at the decree configuration; the technical architect's at the semantic map and the service contracts; the onboarding lead's at the member registrations. Each role learns its part and produces its part of the runnable build pack. So dissemination is not just teaching — it is how the framework actually gets built, by a distributed team each contributing the artefact their role owns. The knowledge product and the build pack are two halves of the same thing: what to do, and what to produce." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Four role-paths plus the Strategist's overview — each learner finds their lane, and produces their part of the build pack.'" },
    { text: "So the dissemination outline turns one knowledge product into five routes: the governance lead, the legal drafter, the technical architect, the member-onboarding lead, and the Strategist who sees the whole. Each follows a short path, learns their part, and produces their piece of the runnable framework. That is how a knowledge product becomes a built framework, in the hands of a real team." },
    { cue: "Slide 5 — Title: 'Sources'. Body: ITU Knowledge Products and Video Materials Guide (dissemination); the four framework roles. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Disseminate to the four roles'.",
      "Standard ITU template. No images."],
    ["2", "Four-role-paths slide. Five text rows: the four roles plus the Strategist overview, each with its topics.",
      "The dissemination structure. Text-only."],
    ["3", "Paths-map-to-build-pack slide. Single text block linking each role to its build-pack artefact.",
      "Ties dissemination to the runnable artefacts. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the dissemination references."]
  ],
  aiTip: {
    title: "Draft the four role-path dissemination outlines",
    problem: "A Strategist disseminating the framework needs role-shaped learning paths so each team member follows only what their role needs. This prompt drafts the four paths plus the overview.",
    prompt: "Draft role-path dissemination outlines for [country X]'s Government Interoperability Framework knowledge product, which has six topics: 1 (why + foundation), 2 (the decree), 3 (governance), 4 (architecture, standards, semantic map, contracts), 5 (implementation, onboarding, the live demonstration), 6 (AI plays + dissemination). For each role — GOVERNANCE LEAD, LEGAL DRAFTER, TECHNICAL ARCHITECT, MEMBER-ONBOARDING LEAD, and the STRATEGIST overview — produce a path: (1) which topics/subtopics they watch, in order; (2) which AI plays they use; (3) which build-pack artefact they produce; (4) a one-line statement of what they can do after. Keep each path short — the point is that no one watches everything. Output: the five role-paths as a table (role / topics / AI plays / build-pack artefact / outcome).",
    io: "Input: the six-topic structure. Output: five role-path outlines mapped to topics, AI plays and build-pack artefacts.",
    safeguard: "Role-paths curate, they do not silo — make sure each path notes the one or two cross-dependencies the role must coordinate on (the architect needs the legal drafter's decree; the onboarding lead needs the architect's contracts), so a team that learns in lanes still builds one coherent framework."
  },
  metadataRows: [
    ["Working title",          "The dissemination outline"],
    ["YouTube-optimised title", "Four role paths through an interoperability framework — so each learner finds their lane"],
    ["Description (60 words)", "No one person builds a whole interoperability framework. The dissemination outline shapes the knowledge product into role-paths — governance lead, legal drafter, technical architect, member-onboarding lead, plus the Strategist overview — each a short curated route that ends in the build-pack artefact that role produces. It's how a knowledge product becomes a built framework. Four minutes for framework leaders. AI outline prompt in the description."],
    ["Tags",                    "dissemination, training paths, roles, capacity building, interoperability framework, knowledge product, GovStack, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 6: AI plays, dissemination and the country storyboard"],
    ["ToR §4 coverage",         "§4.7 (dissemination materials outline) — primary; §4.1 (methodology)"],
    ["PAERA citations",         "(dissemination cited to the ITU Knowledge Products and Video Materials Guide)"],
    ["External-link list",      "ITU Knowledge Products and Video Materials Guide (dissemination); the four framework roles"]
  ]
}));

// ---------- 6.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 6.6",
  title: "From no framework to first service — the storyboard",
  runtime: "~5 min",
  words: 540,
  paeraAnchor: "The KP2 method end-to-end (Topics 1–5); the four-phase plan; PAERA §5.2 Principle #5 (Once-Only)",
  singleMessage: "The storyboard of a country going from nothing to its first live once-only exchange, mapped to the six topics, in months not years.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'From no framework to first service — the storyboard'. Voice-over begins." },
    { text: "End where a Strategist needs to end — with the whole journey in one picture. A country that starts with no interoperability framework, and the path it walks to its first live once-only service. This is the storyboard, and it is the through-line of everything this knowledge product taught: the foundation, the decree, the governance, the architecture, the build, and a citizen finally asked once." },
    { cue: "Slide 2 — Title: 'The journey, topic by topic'. Body, five text rows: 'Topic 1 — name the mandate, catalogue the exchanges, map the stakeholders.' 'Topic 2 — draft and enact the decree.' 'Topic 3 — stand up the three-tier governance and the Operating Authority.' 'Topic 4 — design the layers, adopt the standards, generate the semantic map and contracts.' 'Topic 5 — stand up the federation, onboard members, run the once-only call.'" },
    { text: "The storyboard, topic by topic. The country starts with fragmentation — the citizen at five counters. In Topic 1, the Strategist writes the Strategic Foundation Document, ranks the exchanges in a Use-Case Catalogue, and maps the stakeholders. In Topic 2, the decree is drafted and enacted — the legal on-switch. In Topic 3, the three-tier governance and the Operating Authority are stood up. In Topic 4, the architects design the four layers, adopt the standards, and generate the semantic map and the service contracts. In Topic 5, the federation is stood up, the first members are onboarded, and the once-only exchange runs — a learner applies for a credential and is asked once. A first pilot service, live." },
    { text: "The time frame is the part that matters to a minister. Following the four-phase plan, the first real once-only exchange runs inside the first six-month phase. Not years of silent build and then a big-bang launch — a real, visible service in months, then more services on the same proven platform. That is precisely what makes the framework fundable and survivable: a win the minister can point to before the next budget, not a promise that comes due after they have left office." },
    { cue: "Slide 3 — Title: 'Why it worked — a shared language'. Body, single text block: 'At every step the framework gave the policy side and the technical side a shared language and rhythm to decide together — the decree, the semantic map, the governance table. A framework is, in the end, the shared language that lets business and IT build the new thing together.'" },
    { text: "Step back to see why it worked, because that is the deeper lesson. At every step, the framework gave the policy side and the technical side a shared language and a shared rhythm to decide together — the decree, where business and IT agreed the lawful exchanges; the semantic map, where they agreed what the data means; the governance table, where they sat together. A framework is, in the end, the shared language that lets business and IT build the new thing together. Without it, the conversation the build requires never happens, and the project stalls. That is why this storyboard ends in a working service rather than a stalled programme." },
    { cue: "Slide 4 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'From no framework to a first live once-only service, in months, by following the six topics — interoperability is built, not bought.'" },
    { text: "So the message to carry out of KP2 is the one it opened with, now proven. An interoperability framework is built, not bought. It is built in months, not years, in deliberate phases. And it ends in a real once-only exchange that a citizen actually feels — asked once, not five times. A country with no framework can walk this exact path: name the foundation, pass the decree, govern it, architect it, stand it up, and ask the citizen once. That is the whole of it, and it is achievable." },
    { cue: "Slide 5 — Title: 'Sources'. Body: the KP2 method end-to-end (Topics 1–5); the four-phase plan (Topic 5); PAERA v1.0 §5.2 Principle #5 (Once-Only). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'From no framework to first service — the storyboard'.",
      "Standard ITU template. No images."],
    ["2", "Journey slide. Five text rows mapping the storyboard to Topics 1–5.",
      "The end-to-end through-line. Text-only, screenshot-friendly."],
    ["3", "Why-it-worked slide. Single text block on the shared language between business and IT.",
      "Carries the lingua-franca argument; book-ends Topic 1. Text-only."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The closing line of the whole knowledge product."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the once-only and method references."]
  ],
  aiTip: {
    title: "Draft your country's no-framework-to-first-service storyboard",
    problem: "A Strategist needs a one-page storyboard taking their country from no interoperability framework to its first live once-only service, mapped to the six topics and the phased plan — a narrative for a minister or a funder. This prompt drafts it.",
    prompt: "Draft a one-page storyboard for [country X] going from no Government Interoperability Framework to its first live once-only service. Use this context [paste: the first exchange you want to enable, the agencies involved, any constraints]. Structure it as the journey across the six topics: (1) the starting fragmentation (the citizen's repeated burden today); (2) foundation — mandate, use-case catalogue, stakeholders; (3) the decree; (4) governance; (5) architecture, standards, semantic map, contracts; (6) stand-up, onboarding, the live once-only exchange — ending with the citizen asked once. Map it to the four-phase plan so the first once-only service lands inside the first six-month phase. Close with one line on why it works: the framework gives business and IT a shared language to build together. Tone: for a minister or funder. Output: the one-page storyboard.",
    io: "Input: the first exchange, agencies and constraints. Output: a one-page no-framework-to-first-service storyboard mapped to the topics and phases.",
    safeguard: "A storyboard is a plan to inspire and align, not a guarantee — keep the timeline honest (the first service in the first phase, full maturity over years) and avoid promising a big-bang. The credibility of the whole narrative rests on the first once-only service being genuinely achievable in months; do not let the storyboard over-promise what the first phase delivers."
  },
  metadataRows: [
    ["Working title",          "The country storyboard"],
    ["YouTube-optimised title", "From no interoperability to a first once-only service — the whole journey in one storyboard"],
    ["Description (60 words)", "The whole of KP2 in one picture: a country goes from fragmentation to its first live once-only service across six topics — foundation, decree, governance, architecture, build — with the first real exchange inside the first six-month phase. It works because the framework gives business and IT a shared language to build together. Interoperability is built, not bought. Five minutes for framework leaders. AI storyboard prompt in the description."],
    ["Tags",                    "interoperability storyboard, digital government roadmap, once-only, built not bought, framework journey, GovStack, X-Road, digital government"],
    ["Playlist (YouTube)",      "KP2 — Topic 6: AI plays, dissemination and the country storyboard"],
    ["ToR §4 coverage",         "§4.7 (dissemination — storyboard); §4.1 (methodology, end-to-end); §4.6 (the once-only outcome)"],
    ["PAERA citations",         "§5.2 Principle #5 (Once-Only)"],
    ["External-link list",      "The KP2 method end-to-end (Topics 1–5); the four-phase plan (Topic 5); PAERA v1.0 §5.2 (Once-Only)"]
  ]
}));


// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 6 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For the videos in Topic 6, 'act' means produce the corresponding capstone artefact — the AI-play catalogue, a bus-health summary from the logs, a document-consistency report, a sector-portability map, a role-path dissemination outline, or the country storyboard. Each subtopic's AI usage tip operationalises this: the prompt produces the artefact the video is teaching, ready to refine."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain plain text. No country emblems, no agency logos. The recurring single-sentence summary slide that closes each subtopic uses 28pt body type so the line is screenshot-friendly for the listener's own briefings."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; the scripts are agnostic to it. No human narrator is shown in any video."),

  H3("4.4 Voice and tone"),
  P("Direct address ('your country', 'your agencies', 'your framework'). Plain language at approximately an eighth-grade English level. Examples are drawn from African public-sector reality — donor-funded fragmentation, the citizen filling the same form at five counters, the cross-ministry coordination meeting. The AI plays — gif-decree-draft, gif-semantic-map, gif-openapi-gen — and the framework's documents are referred to in plain words; the topic returns to the Strategist register after the two Architect-facing topics, leading with what the framework's leadership can do rather than how the technical work is done. Honest framing throughout: interoperability is a sustained build, not a procurement."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata, and every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video list into the YouTube description. The aggregate list across the six subtopics is in Section 6."),

  H3("4.6 GitBook companion and the build pack"),
  P("Each subtopic ships with the video script, slide specification, AI usage tip and metadata. The GitBook companion content — written, in-depth implementation guidance — is produced as a parallel deliverable mirroring the same subtopic numbering. For KP2, the GitBook companion links each subtopic to the runnable build pack (KP2-GIF/KP2-build-pack): Topic 6 packages the AI plays used across KP2 into a reusable catalogue and points to the complete build pack — the decree, the Governance Pack, the technical configuration and the proven once-only exchange — as the template a country reuses for its own framework and its next sector. The dissemination outline shapes the whole knowledge product into four role-paths."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting raised the editorial and structural decisions below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 Reference and data claims to verify"),
  P("Two items to confirm before final lock. The AI plays (gif-decree-draft, gif-semantic-map, gif-openapi-gen) are the framework's own tools, presented here as a reusable catalogue — confirm with ITU that presenting them as a named catalogue is the right framing. And the bus-monitoring (6.2) and document-consistency (6.3) plays run against the real Linkup logs and the framework's actual documents, with reproducible runs per the Inception Report — confirm the Linkup logs are available and, critically, that they carry no citizen personal data before any log goes into an AI prompt."),

  H3("5.2 Editorial tone calls"),
  P("Sharp lines that deserve a deliberate keep / soften / cut decision: 'a framework is built, not bought, in months not years' (6.6); 'the second sector is cheaper than the first' (6.4); 'generate fast, confirm carefully — a human always owns the result' (6.1)."),

  H3("5.3 The Topic 1 ↔ Topic 6 book-end"),
  P("Topic 6 returns to the Strategist and is designed to book-end Topic 1: the no-framework-to-first-service storyboard (6.6) deliberately mirrors the strategic foundation laid in Topic 1, closing the knowledge product where it opened. Confirm with ITU that this echo reads as intentional structure rather than repetition. The dissemination outline's four role-paths (governance, legal drafting, technical architect, member onboarding) map onto the six topics; confirm the mapping is the right way to route learners."),

  H3("5.4 KP2 close and dependencies"),
  P("This is the final topic of KP2. The AI-play catalogue, the sector-portability note and the dissemination outline all assume the earlier topics. The sector-portability note (6.4) is the ToR §4.4 commitment, expressed as the re-use argument at framework scale. The bus-monitoring play (6.2) depends on the live Linkup logs (Inception Report action item A4). The Progressa membership (the four-server canon) and the schedule / Linkup cloud-access items carried from earlier topics still apply; see the KP2 Plan §7 and the KP2–4 Delivery Plan §6."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the six subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["6.1", "The KP2 AI plays — gif-decree-draft, gif-semantic-map, gif-openapi-gen, bb-config-gen (instances of the bb-config-gen pattern); EU EIF."],
    ["6.2", "NIIS X-Road monitoring and operational logs (niis.org); the Linkup federation (ITU cloud); ITU DPI Safeguards."],
    ["6.3", "The KP2 deliverables — the decree (Topic 2), the governance manual (Topic 3), the standards catalogue (Topic 4); EU EIF."],
    ["6.4", "ToR §4.4 (sector portability); the EU EIF four-layer model; PAERA v1.0 §3.4.3 (interoperability framing)."],
    ["6.5", "ITU Knowledge Products and Video Materials Guide (dissemination); the four framework roles."],
    ["6.6", "The KP2 method end-to-end (Topics 1–5); the four-phase plan (Topic 5); PAERA v1.0 §5.2 Principle #5 (Once-Only)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP2 Module 6 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP2 Topic 6 (Government Interoperability Framework), aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP2 Topic 6 Script Bundle v0.1 · 27 June 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP2_Module6_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
