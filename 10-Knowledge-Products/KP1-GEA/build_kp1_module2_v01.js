// Build KP1 Module 2 — Video Script Bundle v0.1
// First Architect-facing module of KP1. Copied from build_kp1_module1_v02.js and
// re-registered for Persona A (Architect). Same ITU compliance discipline:
//   - subtopic numbering (2.1–2.7) per ITU convention
//   - each video stands alone (no intros/outros, no cross-video references)
//   - text-only slides, Arial 28pt/18pt, #E5F5FB
//   - no individuals on screen (AI avatar or screen-only voice-over)
//   - one four-part AI usage prompt per subtopic
//   - "Find the link in the description" convention for external references
// Module 2 deliberately introduces the vocabulary Module 1 deferred (metamodel,
// taxonomy, capability, data domain) — each defined in plain words on first use.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors Module 1 / Inception Report) ----------
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

const PERSONA_A = "A (Architect) — chief or senior architect in a national digital agency or sector ICT unit; the practitioner who does the architecture work";

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
// All scripts here are scrubbed of meta-intros ("In this video:"), forward-link outros
// ("Next: …"), backward references ("the previous video"), and "speaker on camera" cues.
// Each video is standalone. Persona defaults to Architect for Module 2.

function renderSubtopic({ num, title, runtime, words, persona = PERSONA_A, paeraAnchor,
                         singleMessage, scriptBeats, slideSpecRows, aiTip, metadataRows }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([
    ["Persona",        persona],
    ["Target runtime", runtime + " (≈" + words + " spoken words)"],
    ["PAERA anchor",   paeraAnchor]
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
    children: [new TextRun({ text: "KP1 — Government Enterprise Architecture",
      font: ARIAL, size: 30, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 200 },
    children: [new TextRun({ text: "Topic 2 — EA principles, the metamodel and the BDAT layers",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 2 of KP1"],
    ["Version",             "v0.1 — first Architect-facing module, aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "2 June 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_A],
    ["Subtopics",           "Seven subtopics (2.1 – 2.7), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 32 minutes across seven standalone videos"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call (Carolina Anselmino); FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Topic 2 — the first Architect-facing topic in KP1. Where Topic 1 addressed the Strategist who commissions a national Enterprise Architecture, Topic 2 addresses the architect who does the work: the chief or senior architect in a national digital agency or a sector ICT unit. The audience lock is unchanged — African public-sector middle management, plain English at an eighth-grade level, each subtopic leading with the capability the architect gains rather than with a technical term. The shift is register, not reading level: the listener is now the person who will model a ministry, run an assessment, and flag the traps, so the videos deliberately introduce and define the vocabulary Topic 1 set aside — the metamodel, the organisational taxonomy, capabilities and data domains. The seven videos are numbered to ITU's topic/subtopic convention (subtopics 2.1 through 2.7). Each stands alone — no meta-introductions, no playlist-stitching outros, no backward references. All slide specifications follow ITU's text-only branding (Arial Bold 28pt title, Arial 18pt body, background #E5F5FB, no images, no individuals on screen). Each subtopic carries an AI usage tip with a copy-paste Claude prompt that produces a working architecture artefact. External references use the ITU convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the seven video scripts that together make up Topic 2 of Knowledge Product 1 (Government Enterprise Architecture), along with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 2 is the Architect-facing entry point to the hands-on EA work. It takes an architect from \"I have heard of the four layers\" to \"I can read any ministry in four layers, model it using the shared entities, classify the bodies, adopt the principles, and run a Phase 2 Assess that names the right problems in the right order.\" It teaches the four BDAT layers in detail, the metamodel that makes architectures fit together, the ten architectural principles to adopt rather than draft, the taxonomy that classifies public bodies, a worked walkthrough on the Progressa education sector, the quality tests for a good current-state picture, and the two sourcing traps to catch early."),

  H3("1.2 Alignment with ITU's Knowledge Products and Video Materials Guide"),
  P("The same compliance items that shaped Topic 1 apply here. (1) Topic-and-subtopic numbering per Guide §1.i — subtopics 2.1 through 2.7. (2) Each video stands alone — no in-video introduction, conclusion, or reference to another video, per Guide §3.i. (3) Slides are text-only in Arial Bold 28pt title / Arial 18pt body / background #E5F5FB per Guide §3.i Slides Branding. (4) No individuals on screen — AI avatar or computer-screen-only voice-over per Guide §3 Note. (5) An AI usage tip is embedded in every subtopic per Guide §2.ii and ToR §4.3. One change of emphasis from Topic 1: the technical vocabulary deferred in Topic 1 (metamodel, taxonomy, capability, data domain) is introduced here deliberately and defined in plain words on first use, because the Architect audience needs the terms to do the work."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 2 at a glance — the seven subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all seven videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without further reference to a storyboard."),

  pageBreak()
);

// ---------- TOPIC 2 AT A GLANCE ----------
body.push(
  H1("2. Topic 2 at a glance"),
  P("Seven standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-two minutes. Each video has a single message and a single learning outcome, and leads with the capability the architect gains rather than with a technical term. The videos are designed to be discoverable individually via YouTube search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2900, 4500, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["2.1", "Read any government in four layers",
      "Every government can be read in four layers — Business, Data, Application, Technology. Learn each layer's question, deliverable and typical mistake, and you can decompose any ministry put in front of you.", "~5 min"],
    ["2.2", "The shared vocabulary that makes re-use possible",
      "The metamodel is the small set of shared entities and relationships PAERA already defines. Adopt it, and two ministries' architectures fit together — which is what turns re-use from a wish into a plan.", "~5 min"],
    ["2.3", "Adopt your principles, don't draft them",
      "PAERA publishes ten architectural principles, already debated across many countries. Adopt them, point each at your country's laws, and use them to settle design arguments — do not spend a year drafting from scratch.", "~4 min"],
    ["2.4", "Classify any public body before you model it",
      "PAERA publishes a taxonomy of public bodies. Classify a body first, and you already know what capabilities, data and governance to expect — before you interview anyone.", "~4 min"],
    ["2.5", "BDAT on a real ministry — the Progressa walkthrough",
      "Watch the four layers and the shared entities applied to one education system, and the abstract method becomes a concrete picture you can reproduce on your own sector.", "~5 min"],
    ["2.6", "Run a Phase 2 Assess — what good looks like, and the gaps you'll find",
      "A good current-state picture is owned, traceable and complete enough to decide from. Learn the quality tests and the gaps you will always find, and you can run an assessment that names the right problems in the right order.", "~5 min"],
    ["2.7", "The two traps to catch at Assess — bespoke and vendor-driven",
      "Two traps recur in every assessment: each project building its own version of a shared function, and a supplier's product quietly becoming the architecture. Spot both early, and you protect the country from paying many times for one thing.", "~4 min"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 2.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 2.1",
  title: "Read any government in four layers",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "Annex 2 Metamodel; §2.3 Role of Enterprise Architecture",
  singleMessage: "Every government, in any sector, can be read in four layers — Business, Data, Application, Technology. Learn the question each layer answers, the deliverable it produces, and the mistake first-time architects make, and you can decompose any ministry put in front of you.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Read any government in four layers'. Voice-over begins." },
    { text: "An Enterprise Architecture describes a government in four layers. Business, Data, Application, Technology. As the architect, you do not just name them — you work inside them every day. So for each layer you need three things: the question it answers, the deliverable you produce, and the mistake that catches first-time architects." },
    { cue: "Slide 2 — Title: 'The Business layer'. Body, three rows: 'Question: What does this body do, for whom, and how well?' 'Deliverable: a capability map and a service catalogue.' 'Mistake: copying the org chart instead of describing capabilities.'" },
    { text: "Start with the Business layer. The question it answers: what does this body do, for whom, and how well? Not how it is organised inside — what it actually does. The deliverable is a capability map and a service catalogue. A capability is something the body can do — register a learner, run an examination, certify a teacher. A service is how a citizen or another body receives that capability. The mistake first-time architects make is to copy the organisation chart and call it the Business layer. The org chart tells you who reports to whom. It does not tell you what the body does. Two bodies with the same chart can do completely different work. Describe the capabilities, not the boxes." },
    { cue: "Slide 3 — Title: 'The Data layer'. Body, three rows: 'Question: What information does the body hold, who owns it, where is the authoritative copy?' 'Deliverable: a data-domain catalogue with one owner per domain.' 'Mistake: listing databases instead of data domains.'" },
    { text: "Second, the Data layer. The question: what information does the body hold, who owns each kind, and where does the authoritative copy live? The deliverable is a data-domain catalogue. A data domain is a kind of information the government agrees on — a person, a learner, a school, a payment. For each domain you name the one body that owns it and holds the authoritative copy. Data is the longest-lived layer in any government. Applications come and go. Technology cycles every decade. The data outlasts them all. The mistake first-time architects make is to list the databases they can see, one per system. But five systems may each hold their own version of the same learner. The Data layer is not a list of databases. It is the agreed set of domains, each with one owner, sitting above all the databases." },
    { cue: "Slide 4 — Title: 'The Application layer'. Body, three rows: 'Question: What software supports the work, and which capability does each one serve?' 'Deliverable: an application portfolio mapped to capabilities and data domains.' 'Mistake: a software inventory with no link to the business.'" },
    { text: "Third, the Application layer. The question: what software supports the work, and which capability does each application serve? The deliverable is an application portfolio — every system, mapped to the capability it supports and the data domain it touches. The mistake here is producing a software inventory that lists names and versions but never connects them to what the body does. An inventory tells you that a system exists. A portfolio tells you why it exists, what would break if it failed, and whether two systems are quietly doing the same job. The link up to the Business layer and across to the Data layer is the whole value. Without it, you have an IT asset list, not an architecture." },
    { cue: "Slide 5 — Title: 'The Technology layer'. Body, three rows: 'Question: What does everything run on?' 'Deliverable: a short list of technology standards and a simple infrastructure picture.' 'Mistake: going too deep, too early.'" },
    { text: "Fourth, the Technology layer. The question: what does all of this run on? Networks, hosting, the identity platform, the security controls, the data-exchange backbone. The deliverable is a short list of technology standards and a simple infrastructure picture — not a server-by-server audit. The mistake here is the opposite of the others. First-time architects go too deep, too early. They document every server and switch before they understand a single capability. At the architecture level, the Technology layer answers a few questions: what are we standardising on, where are the single points of failure, and what must be running for anything else to work. The detailed audit belongs to the operations team, not the architect." },
    { cue: "Slide 6 — Title: 'The layers connect downward'. Body, text-box stack: 'Service → traces to a Capability (Business) → served by Applications → which use Data Domains → running on Technology.' Below: 'Every element connects up and down. A layer that floats free is your first gap.'" },
    { text: "The four layers are not four separate documents. They connect. Every service traces to a capability in the Business layer. Every capability is served by one or more applications. Every application uses one or more data domains. Every data domain and application runs on the technology layer. When you can trace a citizen-facing service all the way down to the infrastructure it depends on, you are reading the government as a system — which is the whole job. When a layer floats free, with no connection up or down, that is the first gap you have found." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 Annex 2 (Metamodel); §2.3 (Role of Enterprise Architecture). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Read any government in four layers'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP1 / 2.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Business-layer slide. Three text rows: Question / Deliverable / Mistake.",
      "Consistent three-row pattern repeats for each layer — the repetition is the teaching device. Text-only."],
    ["3", "Data-layer slide. Same three-row structure. 'Data outlasts them all' emphasised.",
      "The one-owner-per-domain idea is the payload — keep it visually prominent."],
    ["4", "Application-layer slide. Same three-row structure.",
      "Emphasise the up-and-across link to Business and Data — the difference between portfolio and inventory."],
    ["5", "Technology-layer slide. Same three-row structure. 'Going too deep too early' as the named mistake.",
      "The contrast with the other layers' mistakes is the memorable beat."],
    ["6", "Connection slide. Vertical text-box stack showing the trace from Service down to Technology.",
      "Candidate centrepiece visual. Text-box connectors only — no icons, no human figures."],
    ["7", "Sources slide. Bulleted PAERA citations. Footer: 'Find the link in the description.'",
      "Lets viewers verify the framing via the YouTube description."]
  ],
  aiTip: {
    title: "Generate a four-layer reading template for a ministry",
    problem: "An architect beginning Discovery on a new ministry needs a structured capture template — the right questions per layer, tuned to that ministry — so the interviews produce a usable BDAT description rather than scattered notes.",
    prompt: "I am about to begin Discovery on [name the ministry or body] in [country X]'s [sector] sector. Below is what I know so far [paste 1–3 paragraphs: the body's mandate, known systems, known registries]. Produce a four-layer reading template I can fill in during interviews. For each layer — Business, Data, Application, Technology — give: (1) the single question the layer answers, (2) 4–6 specific interview questions tuned to this body, (3) the deliverable the layer should produce, (4) the one mistake to avoid for this layer. For the Business layer, prompt me to capture capabilities (what the body can do) and services (how citizens receive them), not the org chart. For the Data layer, prompt me to name one owner per data domain. Output: a four-section template, each section headed by the layer name.",
    io: "Input: the body's name, sector and 1–3 paragraphs of known context. Output: a four-section capture template ready to take into Discovery interviews.",
    safeguard: "The template is a starting structure for capture, not the architecture itself. The authoritative layer descriptions come from the body's documents and interviews — the template tells you what to ask, not what the answer is."
  },
  metadataRows: [
    ["Working title",          "Read any government in four layers"],
    ["YouTube-optimised title", "The four layers of Enterprise Architecture (BDAT), and the mistake first-time architects make in each"],
    ["Description (60 words)", "Business, Data, Application, Technology — every government can be read in these four layers. This video for public-sector architects gives each layer its question, its deliverable, and the mistake to avoid: copying the org chart, listing databases, building an inventory instead of a portfolio, and going too deep too early. Plus how the layers connect. AI capture-template prompt in the description."],
    ["Tags",                    "enterprise architecture, BDAT, business architecture, data architecture, application architecture, technology architecture, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — capture-template prompt)"],
    ["PAERA citations",         "Annex 2 Metamodel; §2.3 Role of Enterprise Architecture"],
    ["External-link list",      "PAERA v1.0 Annex 2 (Metamodel); PAERA v1.0 §2.3 (Role of Enterprise Architecture)"]
  ]
}));

// ---------- 2.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 2.2",
  title: "The shared vocabulary that makes re-use possible",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "Annex 2 Metamodel",
  singleMessage: "The metamodel is the small set of entities — Capability, Service, Application, Data Domain, Technology Component — and the relationships between them that PAERA already defines. Adopt it, and two ministries' architectures can be compared, connected and re-used. Skip it, and every team draws a different picture that no one else can read.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The shared vocabulary that makes re-use possible'. Voice-over begins." },
    { text: "Here is a problem you will hit in your first month as an architect. Two ministries each hand you an architecture. One calls a thing a 'service'. The other calls the same thing a 'function'. One ministry's 'application' is another's 'system' is a third's 'platform'. You cannot compare them. You cannot connect them. You cannot even tell whether they are doing the same work twice. The pictures exist, but they do not fit together." },
    { cue: "Slide 2 — Title: 'A metamodel is a small shared dictionary'. Body, entity list: 'Capability — something a public body can do'; 'Service — how a capability reaches a citizen or another body'; 'Application — software that supports a capability'; 'Data Domain — a kind of information, with one owner'; 'Technology Component — the infrastructure underneath'; 'Organisation — owns each of these'." },
    { text: "The fix is a metamodel. A metamodel is a small, shared dictionary. It names the kinds of boxes everyone is allowed to draw, and it defines each one in plain words. PAERA defines them for you. A Capability — something a public body can do. A Service — how that capability reaches a citizen or another body. An Application — the software that supports a capability. A Data Domain — a kind of information, with one owner. A Technology Component — the infrastructure underneath. And the Organisation that owns each of these. Five or six entity types. That is most of the metamodel." },
    { cue: "Slide 3 — Title: 'The relationships matter as much as the entities'. Body, relationship rows: 'Capability —delivered by→ Service'; 'Capability —supported by→ Application'; 'Application —uses→ Data Domain'; 'everything —runs on→ Technology Component'; 'Organisation —owns→ each'." },
    { text: "The entities are half of it. The relationships are the other half. A Capability is delivered by a Service. A Capability is supported by an Application. An Application uses a Data Domain. Everything runs on a Technology Component. An Organisation owns each of these. These relationships are fixed. You do not invent them per ministry. Once every team uses the same entities and the same relationships, every ministry's picture can be laid over every other ministry's picture — and they line up." },
    { cue: "Slide 4 — Title: 'This is what makes re-use possible'. Body, single text block: 'Re-use means one ministry consumes another's building block. That is only possible if both describe it the same way — same entity, same relationships, same data domain. The metamodel is the precondition.'" },
    { text: "This is the part that matters most. Everyone says they want re-use — one identity system, used by many ministries, instead of five. But re-use is not a matter of good intentions. Before the agriculture ministry can consume the identity authority's building block, both must describe that building block the same way — same entity type, same relationships, same data domain. If each ministry models in its own private language, re-use is impossible even when everyone wants it. The metamodel is the precondition for re-use. It is the quiet, unglamorous thing that makes the whole-of-government saving — first ministry builds it, the rest consume it — actually achievable, instead of just hoped for." },
    { cue: "Slide 5 — Title: 'And it is the shared language between business and IT'. Body, two columns joined by metamodel terms: Left 'Head of policy says: register every learner once'. Right 'Architect says: one Capability, one Service, one Data Domain owned by the learner registry'. Below: 'Same few entities — both sides understand them.'" },
    { text: "The metamodel does a second job. The work of redesigning how a ministry serves citizens needs the business side — the minister, the director-general, the head of policy — and the IT side — you and your engineers — to decide together. They do not share a language. The metamodel gives them one. When the head of policy says 'we want to register every learner once', and you answer 'that is one Capability, one Service, and one Data Domain owned by the learner registry', you have translated a policy goal into an architecture — in words both sides can hold. The metamodel is the bridge. The same few entities that let two ministries connect also let business and IT understand each other." },
    { cue: "Slide 6 — Title: 'You adopt it, you don't design it'. Body, three rows: 'PAERA Annex 2 publishes the metamodel — entities, definitions, relationships.' 'Use it from day one.' 'Extend it only where your country genuinely needs a new entity — deliberately, written down, shared.'" },
    { text: "One more thing. You do not design the metamodel. PAERA publishes it in Annex 2 — the entities, the definitions, the relationships, already worked out and debated across many countries. Your job is to adopt it and use it from day one. If your country genuinely needs an entity PAERA does not have, you extend the metamodel deliberately, and you write the extension down so every team shares it. What you never do is let each team invent its own. The value of a shared dictionary disappears the moment two teams keep private ones." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The metamodel is the small shared dictionary that lets two ministries' architectures fit together — which is what turns re-use from a wish into a plan.'" },
    { text: "So the metamodel is not paperwork. It is the small shared dictionary that lets two ministries' architectures fit together, and lets business and IT understand each other. It is what turns re-use from a wish into a plan. Learn PAERA's entities and relationships, use them on every model you draw, and your architecture will connect to everyone else's instead of standing alone." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 Annex 2 (Metamodel — entities and relationships). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The shared vocabulary that makes re-use possible'.",
      "Standard ITU template. Subtitle (KP1 / 2.2). No images."],
    ["2", "Entity-dictionary slide. Six text rows, one entity per row with its plain-words definition.",
      "The core reference slide of the video. Readable on mobile — definitions short."],
    ["3", "Relationship slide. Five relationship rows using text-box arrows between entity names.",
      "Text-box connectors only. The fixed relationships are the point — no per-ministry variation."],
    ["4", "Re-use precondition slide. Single text block.",
      "Carries the 'planning enables re-use' argument in architect register. The pivotal slide."],
    ["5", "Business-IT bridge slide. Two columns joined by the shared metamodel terms.",
      "Carries the 'lingua franca' argument. Text-only — no human figures for the two sides."],
    ["6", "Adopt-don't-design slide. Three text rows.",
      "Consistent with the adopt-not-invent message across the topic (principles, taxonomy)."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the metamodel reference."]
  ],
  aiTip: {
    title: "Check a draft architecture against the PAERA metamodel",
    problem: "An architect with a draft model — their own or one inherited from a ministry or a vendor — needs to know whether it conforms to the shared metamodel before it is connected to anything else. This prompt produces a conformance check that surfaces private-language elements and missing relationships.",
    prompt: "Below is a draft architecture for [name the body or system] [paste the model: the elements and how they relate, in whatever form you have — a list, a table, a description]. Check it against the PAERA metamodel, whose entity types are Capability, Service, Application, Data Domain, Technology Component and Organisation, with the relationships: Capability delivered-by Service, Capability supported-by Application, Application uses Data Domain, everything runs-on Technology Component, Organisation owns each. For each element in my draft, map it to a PAERA entity type. Flag any element that does not map cleanly (a candidate private-language term or a missing entity). List every relationship in the metamodel that my draft is missing — for example a Data Domain with no named owning Organisation, or an Application with no Capability above it. Output: a mapping table (my element / PAERA entity / note), then a list of non-conforming elements, then a list of missing relationships, then 3 suggested corrections.",
    io: "Input: a draft model in any form. Output: a mapping table plus lists of non-conforming elements, missing relationships, and suggested corrections.",
    safeguard: "The check only sees what you paste, and a clean mapping is necessary but not sufficient — a model can conform to the metamodel and still be wrong about the real world. Confirm the entity assignments with the body that owns the systems before relying on the result."
  },
  metadataRows: [
    ["Working title",          "The shared vocabulary that makes re-use possible"],
    ["YouTube-optimised title", "What is an EA metamodel — and why re-use is impossible without one"],
    ["Description (60 words)", "Two ministries hand you architectures in different words — you can't compare or connect them. The fix is a metamodel: a small shared dictionary of entities (Capability, Service, Application, Data Domain, Technology) and the relationships between them, published in PAERA. It's the precondition for re-use and the shared language between business and IT. Five minutes for public-sector architects. AI conformance-check prompt in the description."],
    ["Tags",                    "EA metamodel, enterprise architecture, PAERA, data domain, capability, re-use, building blocks, interoperability, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.2 (reference frameworks); §4.3 (AI integration — conformance-check prompt)"],
    ["PAERA citations",         "Annex 2 Metamodel (entities and relationships)"],
    ["External-link list",      "PAERA v1.0 Annex 2 (Metamodel)"]
  ]
}));

// ---------- 2.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 2.3",
  title: "Adopt your principles, don't draft them",
  runtime: "~4 min",
  words: 520,
  paeraAnchor: "§5.2 Architectural principles; §3.3 Digital Infrastructure principles",
  singleMessage: "PAERA publishes ten architectural principles, already debated across many countries. Your job is to adopt them, tailor the wording to your context, and use them to settle design arguments — not to spend your first year drafting principles from scratch.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Adopt your principles, don't draft them'. Voice-over begins." },
    { text: "Every architecture team faces the same temptation early on. Someone says: let us write our country's architectural principles. A workshop is booked. Three months later there are forty draft principles, half of them contradicting each other, and no agreement. Meanwhile, no ministry has been modelled. There is a faster way. The principles already exist." },
    { cue: "Slide 2 — Title: 'What an architectural principle is for'. Body: 'A short rule that settles a design argument before it starts.' Examples: 'Reuse before you buy; buy before you build.' 'Data has one owner.' 'Ask the citizen only once.' Below: 'A decision you make once, so your team does not re-argue it on every project.'" },
    { text: "First, be clear what a principle is for. An architectural principle is a short rule that settles a design argument before it starts. 'Reuse before you buy; buy before you build.' 'Data has one owner.' 'The citizen is asked for information only once.' A good principle is a decision you make once, so your team does not re-argue it on every project. Principles are working tools, not wall decorations. If a principle never changes a decision, it is not a principle — it is a slogan." },
    { cue: "Slide 3 — Title: 'PAERA gives you ten'. Body, ten short text rows: 'Rule of law'; 'Intrinsic security and privacy'; 'Openness and transparency'; 'Interoperability by default'; 'Once-only'; 'User-centred and inclusive'; 'Reuse and sharing'; 'Data as a managed asset — one source of truth'; 'Technology neutrality — avoid lock-in'; 'Sustainability'." },
    { text: "PAERA publishes ten architectural principles in section 5.2. They cover the ground every public-sector architecture needs. Rule of law, so every system has a legal basis. Intrinsic security and privacy, built in, not added later. Openness and transparency. Interoperability by default. Once-only — the state asks a citizen for the same information only once. User-centred and inclusive design. Reuse and sharing before building new. Data as a managed asset, with one source of truth. Technology neutrality, to avoid lock-in. And sustainability, so what you build can be maintained. Ten principles, already debated across many countries, ready to adopt." },
    { cue: "Slide 4 — Title: 'Adopt, tailor, don't rewrite'. Body, three rows: 'Adopt the ten as your baseline.' 'Tailor the wording to your laws, your data-protection act, your procurement rules.' 'Add at most a few country-specific principles — deliberately, with a reason written down.'" },
    { text: "Adopting them is three steps, not a three-month workshop. Step one: take the ten as your baseline. Step two: tailor the wording to your country — point each principle at your own laws, your data-protection act, your procurement rules, so it has teeth in your context. Step three: add at most a few principles your country genuinely needs that PAERA does not cover, and add them deliberately, with a reason written down. That is the whole job. You inherit the thinking; you localise the wording. You do not start from a blank page." },
    { cue: "Slide 5 — Title: 'Make a principle bite — statement, reason, implication'. Body, worked example: 'Statement: consume an existing building block before building a new one.' 'Reason: the country pays once, not many times.' 'Implication: any project proposing to build its own identity must first show why the shared one cannot be used — and the EA Board can say no.'" },
    { text: "One discipline makes principles useful instead of decorative. For each one, write three things: the statement, the reason, and the implication — what the principle forces you to do, or to refuse. Take 'reuse before build'. Statement: we consume an existing building block before we build a new one. Reason: the country pays once instead of many times. Implication: any project proposing to build its own identity or payment function must first show why the shared one cannot be used — and the EA Board can say no. A principle with a written implication can settle an argument. A principle without one cannot." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Principles are decisions you make once so your team does not re-argue them on every project — and PAERA already made the first ten for you.'" },
    { text: "So do not spend your first year writing principles. Adopt PAERA's ten, point each one at your country's laws, give each a written implication so it can settle a real argument, and add your own only where there is a genuine gap. Principles are decisions you make once so your team does not re-argue them on every project. PAERA already made the first ten for you." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.2 (Architectural principles); §3.3 (Digital Infrastructure principles). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Adopt your principles, don't draft them'.",
      "Standard ITU template. Subtitle (KP1 / 2.3). No images."],
    ["2", "What-a-principle-is-for slide. Definition plus three example principles plus the 'decide once' line.",
      "Frames principles as decision tools, not documentation. Text-only."],
    ["3", "The ten principles slide. Ten short text rows, revealed cumulatively.",
      "The reference payload. Keep each to 2–4 words plus the spoken gloss. Readable on mobile."],
    ["4", "Adopt-tailor-don't-rewrite slide. Three text rows.",
      "The three-step method that replaces the three-month workshop."],
    ["5", "Make-it-bite slide. Worked example: statement / reason / implication for one principle.",
      "The implication line — 'the Board can say no' — is the operative beat."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the principle set."]
  ],
  aiTip: {
    title: "Turn a PAERA principle into a country-tailored principle card",
    problem: "An architect adopting the ten principles needs each one rendered as a working principle card — tailored to the country's laws and given a clear implication — so the EA Board can actually use it to settle decisions.",
    prompt: "Below is one PAERA architectural principle I am adopting: [paste the principle name and PAERA's wording]. And here is my country's relevant context: [name the country; list the relevant laws — data protection act, procurement law, e-government decree — and any policy constraints]. Produce a country-tailored principle card with four parts: (1) Statement — the principle in one sentence, pointed at my country's context; (2) Rationale — why it matters here, in one or two sentences; (3) Implication — the specific thing this principle forces a project to do or to refuse, written so the EA Board can apply it; (4) The decision it lets the Board make — one concrete example of a project decision this principle settles. Tone: plain, usable by a governance board. Output: a single principle card under four headings.",
    io: "Input: one principle plus the country's relevant laws and constraints. Output: a four-part principle card ready for the EA Board's principle register.",
    safeguard: "Have the country's legal counsel confirm the legal references in the Statement and Implication before the principle is formally adopted — a principle that cites the wrong statute will not survive its first challenge."
  },
  metadataRows: [
    ["Working title",          "Adopt your principles, don't draft them"],
    ["YouTube-optimised title", "The 10 architectural principles every public-sector architect should adopt (not write from scratch)"],
    ["Description (60 words)", "Don't spend your first year in a principles workshop. PAERA already publishes ten architectural principles — rule of law, security by design, once-only, reuse, technology neutrality and more — debated across many countries. This video shows architects how to adopt them, tailor the wording to your laws, and give each a written implication so it can settle a real design argument. AI principle-card prompt in the description."],
    ["Tags",                    "architectural principles, enterprise architecture, PAERA, once-only, interoperability, technology neutrality, EA governance, public sector architect, GovStack"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.2 (reference frameworks); §4.3 (AI integration — principle-card prompt)"],
    ["PAERA citations",         "§5.2 Architectural principles; §3.3 Digital Infrastructure principles"],
    ["External-link list",      "PAERA v1.0 §5.2 (Architectural principles); PAERA v1.0 §3.3 (Digital Infrastructure principles)"]
  ]
}));

// ---------- 2.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 2.4",
  title: "Classify any public body before you model it",
  runtime: "~4 min",
  words: 500,
  paeraAnchor: "§4.6 Organisational taxonomy; Annex A1.2 taxonomy detail",
  singleMessage: "PAERA publishes a taxonomy of public bodies — policy unit, regulatory agency, service-delivery authority, plus supporting elements like state registries. Classify a body first, and you already know what capabilities, data and governance to expect from it — before you interview anyone.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Classify any public body before you model it'. Voice-over begins." },
    { text: "Before you model a government body, you should know what kind of body it is. Because the kind tells you, in advance, roughly what to expect — what it does, what data it owns, how it is governed. PAERA publishes a taxonomy that sorts public bodies into a few types. Learn it, and you walk into the first interview already knowing what questions to ask." },
    { cue: "Slide 2 — Title: 'Three main types'. Body, three rows: 'Policy unit — sets policy, owns the rules; does not run services at scale.' 'Regulatory agency — licenses, supervises, enforces; holds registers and decisions.' 'Service-delivery authority — runs services to citizens at scale; has the queues, case files, front-line systems.'" },
    { text: "Three main types cover most of government. A policy unit — usually a ministry's core — sets policy and owns the rules. It does not run services at scale; it decides what the services should be. A regulatory agency licenses, supervises and enforces. It holds registers of the things it regulates and records of its decisions. A service-delivery authority runs services to citizens at scale — it has the queues, the case files, the front-line systems. Tell me which of the three a body is, and I can already guess its main capabilities and its main data domains before I meet anyone." },
    { cue: "Slide 3 — Title: 'Plus the supporting elements'. Body, two rows: 'State registries — the authoritative single source for a kind of thing: person, business, land, learner.' 'Shared platforms — identity, payments, data exchange — used across many bodies.'" },
    { text: "Around those three sit the supporting elements. State registries — the authoritative single source of truth for a kind of thing: the population register, the business register, the land register, the learner registry. A registry's whole job is to be the one place the truth lives. And shared platforms — identity, payments, data exchange — used across many bodies. These are not policy units or regulators or service authorities. They are the foundations the others stand on. The taxonomy names them so you treat them as shared, not as the private property of whichever ministry happens to host them." },
    { cue: "Slide 4 — Title: 'Why classify first'. Body, single text block: 'Each type comes with an expected profile — capabilities, data domains, governance, typical risks. You walk in confirming or correcting a profile, not building one from nothing. Misclassification is itself a finding.'" },
    { text: "Why does classifying first save you time? Because each type comes with an expected profile. Name a body a regulatory agency, and you expect a licensing capability, a register of the regulated, an enforcement record, and an appeals process. You walk in looking for those, and you spend the interview confirming or correcting a profile — not building one from nothing. Misclassification is itself a finding. When a body that should be a neutral registry is acting like a policy unit and shaping rules to suit itself, the taxonomy is what lets you see it. Classification is not bureaucracy. It is the architect's fastest way to orient." },
    { cue: "Slide 5 — Title: 'It is already published — adopt it'. Body, two rows: 'PAERA §4.6, with detail in Annex A1.2.' 'Adopt it; extend only where your country has a body type it genuinely does not cover.'" },
    { text: "Like the metamodel and the principles, the taxonomy is already published — PAERA section 4.6, with the detail in Annex A1.2. You do not invent a classification scheme for your country. You adopt this one, and you extend it only where your country has a body type it genuinely does not cover. A shared taxonomy means that when you say 'service-delivery authority', every other architect in the country pictures the same thing. That shared picture is worth more than a bespoke scheme that is perfectly tuned to your country but understood by no one else." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Classify a body first, and you already know most of what to expect from it — so the interview confirms a profile instead of starting from a blank page.'" },
    { text: "So before you model, classify. Policy unit, regulatory agency, service-delivery authority, plus registries and shared platforms. Each type carries an expected profile of capabilities, data and governance. Classify first, and the modelling work starts from a head start instead of a blank page — using a taxonomy every other architect in your country already shares." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §4.6 (Organisational taxonomy); Annex A1.2 (taxonomy detail). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Classify any public body before you model it'.",
      "Standard ITU template. Subtitle (KP1 / 2.4). No images."],
    ["2", "Three-types slide. Three text rows, each: type name plus what it does, what data it owns.",
      "The core reference. Keep the three types visually distinct. Text-only."],
    ["3", "Supporting-elements slide. Two text rows: registries and shared platforms.",
      "The 'treat them as shared, not private' line is the operative beat."],
    ["4", "Why-classify-first slide. Single text block on the expected-profile idea.",
      "The 'misclassification is itself a finding' line is the memorable beat."],
    ["5", "Adopt-it slide. Two text rows pointing to PAERA §4.6 and Annex A1.2.",
      "Consistent with adopt-not-invent across the topic."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the taxonomy reference."]
  ],
  aiTip: {
    title: "Classify a public body and generate its expected profile",
    problem: "Before Discovery, an architect wants a fast, defensible first classification of a body and the expected profile that comes with it — so the interviews confirm a hypothesis rather than start blank.",
    prompt: "Below is a short description of a public body in [country X]: [paste the body's name, mandate, and anything known about what it does and what it holds]. Using the PAERA organisational taxonomy — policy unit (sets policy, owns rules), regulatory agency (licenses, supervises, enforces), service-delivery authority (runs services at scale), plus supporting elements: state registry (authoritative single source for one kind of thing) and shared platform (identity / payments / data exchange used across bodies) — do the following. (1) Classify the body into the most likely type, and note if it straddles two. (2) Give its expected profile for that type: 3–5 likely capabilities, 2–4 likely data domains it owns, the governance you would expect, and 2 typical risks. (3) List 5 questions to confirm the classification in interview. Output: classification, expected-profile table, confirmation questions.",
    io: "Input: a short description of one body. Output: a classification, an expected-profile table, and confirmation questions.",
    safeguard: "The classification is a hypothesis, and many real bodies straddle types or have drifted from their mandate. Confirm against the body's actual legal mandate and current practice before you record the classification — a wrong type sends the whole interview looking for the wrong things."
  },
  metadataRows: [
    ["Working title",          "Classify any public body before you model it"],
    ["YouTube-optimised title", "Policy unit, regulator, or service authority? Classify any government body before you model it"],
    ["Description (60 words)", "Before you model a ministry, know what kind of body it is. PAERA's organisational taxonomy sorts public bodies into policy units, regulatory agencies and service-delivery authorities, plus state registries and shared platforms. This video shows architects how a quick classification gives you an expected profile — capabilities, data, governance, risks — so interviews confirm a hypothesis instead of starting blank. AI classification prompt in the description."],
    ["Tags",                    "organisational taxonomy, enterprise architecture, PAERA, public sector, state registry, regulatory agency, service delivery, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.3 (AI integration — classification prompt)"],
    ["PAERA citations",         "§4.6 Organisational taxonomy; Annex A1.2 taxonomy detail"],
    ["External-link list",      "PAERA v1.0 §4.6 (Organisational taxonomy); PAERA v1.0 Annex A1.2 (taxonomy detail)"]
  ]
}));

// ---------- 2.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 2.5",
  title: "BDAT on a real ministry — the Progressa walkthrough",
  runtime: "~5 min",
  words: 640,
  paeraAnchor: "Annex 2 Metamodel; §5.2 Architectural principles",
  singleMessage: "Watch the four layers and the shared entities applied to one real education system — Progressa's ministry, learner registry, examination authority and identity authority — and the abstract method becomes a concrete picture you can reproduce on your own sector.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'BDAT on a real ministry — the Progressa walkthrough'. Voice-over begins. (Progressa is the demonstration country; all institutions are fictional.)" },
    { text: "Let us put the four layers on a real sector. Progressa is a demonstration country with an education system like many across the continent. It has a Ministry of Education, Youth and Sport. A national examination authority. A learner registry. A national identity authority. And a digital government authority that runs shared platforms. We will read this system in four layers, using the shared entities, exactly as you would on your own sector." },
    { cue: "Slide 2 — Title: 'Classify the bodies first'. Body, five rows: 'Ministry of Education (MoEYS) — policy unit.' 'Examination Authority (PNEA) — service-delivery authority with a regulatory edge.' 'Learner Registry (PLR) — state registry.' 'Identity Authority (PNIA) — state registry + shared platform.' 'Digital Government Authority (PDGA) — shared-platform provider.'" },
    { text: "Start by classifying, because classification gives us the head start. The Ministry of Education is a policy unit — it sets education policy and owns the rules. The National Examination Authority runs examinations at scale and certifies results — a service-delivery authority with a regulatory edge. The Learner Registry is a state registry — the authoritative single source for who is a learner. The National Identity Authority is a registry and a shared platform — it owns the person identity every sector reuses. The Digital Government Authority runs shared platforms: data exchange and payments. Five bodies, classified in a minute, and we already expect what each one does." },
    { cue: "Slide 3 — Title: 'Business layer — capabilities and services'. Body: 'Capabilities: register a learner (PLR) · run an examination, certify a result (PNEA) · prove identity (PNIA) · set policy, fund schools (MoEYS).' 'Services: enrol a child · sit an examination · receive a certificate · transfer schools.'" },
    { text: "Now the Business layer — capabilities and services. Register a learner: owned by the Learner Registry. Run an examination and certify a result: the Examination Authority. Prove who a learner is: the Identity Authority. Set policy and fund schools: the Ministry. Notice that we describe what each body does — its capabilities — not how it is organised inside. The citizen-facing services sit on top: enrol a child, sit an examination, receive a certificate, transfer between schools. Each service traces down to a capability owned by exactly one body. When two bodies both claim the same capability — say, each keeping its own list of learners — you have found your first gap, just by drawing the Business layer." },
    { cue: "Slide 4 — Title: 'Data layer — one owner per domain'. Body, four rows: 'Person → owned by PNIA.' 'Learner → owned by PLR.' 'Examination result → owned by PNEA.' 'School → owned by MoEYS.' Below: 'Once-only: others consume, they do not copy.'" },
    { text: "The Data layer names the domains and their owners. The Person domain — owned by the Identity Authority; everyone else uses the person identity, no one else mints it. The Learner domain — owned by the Learner Registry. Examination results — owned by the Examination Authority. Schools — owned by the Ministry. One domain, one owner, one authoritative copy. The once-only principle now becomes concrete: when the Examination Authority needs to know who a learner is, it consumes the Learner Registry and the Identity Authority — it does not keep its own private copy of the learner that drifts out of date. If you find the Examination Authority maintaining its own learner list, that is a duplicate registry, and you write it down." },
    { cue: "Slide 5 — Title: 'Application and Technology layers'. Body: 'Applications: enrolment system → register-a-learner (PLR) · exam-management system → run-an-examination (PNEA) · identity-verification service → prove-identity (PNIA).' 'Technology: shared identity platform · data-exchange backbone (PDGA) · hosting.'" },
    { text: "The Application layer maps software to those capabilities. An enrolment system supports the register-a-learner capability and uses the Learner and Person domains. An examination-management system supports run-an-examination. An identity-verification service supports prove-identity. Each application points up to a capability and across to the data domains it uses — so you can see, at a glance, which systems would break if the Identity Authority changed, and whether two systems are quietly doing the same job. Underneath, the Technology layer: the shared identity platform, the data-exchange backbone run by the Digital Government Authority, the hosting. A short list of shared standards — not a server audit." },
    { cue: "Slide 6 — Title: 'Trace one service all the way down'. Body, vertical stack: 'Service: sit an examination, get a certificate → Capability: run-an-examination, certify-a-result (PNEA) → Application: exam-management system → Data: learner, person, result → Technology: data exchange, identity platform.'" },
    { text: "Now trace one service all the way down. Sit an examination and get a certificate. The service is delivered by the Examination Authority's run-an-examination and certify-a-result capabilities. Those are supported by the examination-management application. That application uses three data domains — the learner, the person identity, and the examination result — each owned by a different body and reached over the data-exchange backbone, which runs on the shared technology layer. That single thread, from a citizen service down to the infrastructure, is a complete reading of the system in four layers. Reproduce that on your own sector — classify the bodies, draw the capabilities, name the data owners, map the applications, list the shared technology — and you have an architecture, not an inventory." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Classify the bodies, draw the capabilities, name one owner per data domain, map applications to capabilities, list shared technology — and any sector becomes a connected picture.'" },
    { text: "That is BDAT on a real ministry. The method is the same on health, on agriculture, on social protection — only the bodies and the domains change. Classify, then read the four layers using the shared entities, and any sector in your country becomes a connected picture you can plan against." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 Annex 2 (Metamodel); §5.2 (Architectural principles — once-only). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'BDAT on a real ministry — the Progressa walkthrough'. Subtitle notes Progressa is a fictional demonstration country.",
      "Standard ITU template. Subtitle (KP1 / 2.5). No images, no emblems for the fictional institutions."],
    ["2", "Classification slide. Five text rows: each Progressa body with its taxonomy type.",
      "Ties 2.4's taxonomy to 2.5's worked example. Text-only."],
    ["3", "Business-layer slide. Capabilities mapped to owners; services listed on top.",
      "The 'two bodies claiming one capability = a gap' line previews 2.6. Text-only."],
    ["4", "Data-layer slide. Four domains, each with one owner. Once-only line.",
      "The duplicate-registry example is the operative beat — previews the Assess gaps."],
    ["5", "Application + Technology slide. Applications mapped to capabilities; shared technology listed.",
      "Keep application names generic and descriptive — no vendor or product names."],
    ["6", "Trace-it-down slide. Vertical text-box stack from service to technology.",
      "Candidate centrepiece visual — the full four-layer thread on one fictional service. Text-box connectors only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; the reproducible recipe."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the metamodel and once-only references."]
  ],
  aiTip: {
    title: "Draft a first-pass BDAT skeleton for a sector",
    problem: "An architect starting on a new sector wants a first-pass four-layer skeleton from what they already know — classified bodies, capabilities by owner, data domains with single owners, applications mapped — with duplicate-owner conflicts flagged for the Assess.",
    prompt: "Below are the main public bodies in [country X]'s [sector] sector and what each does [paste a short list: body name, mandate, known systems, known registries]. Produce a first-pass BDAT skeleton. (1) Classification: assign each body a PAERA taxonomy type (policy unit / regulatory agency / service-delivery authority / state registry / shared platform). (2) Business layer: list the main capabilities and, for each, the single body that should own it; list the main citizen-facing services on top. (3) Data layer: list the main data domains and, for each, the single owning body; flag any domain that appears to have more than one owner as a possible duplicate registry. (4) Application layer: map each known system to a capability and the data domains it uses; flag any system that maps to no capability. (5) Technology layer: list the shared platforms and standards. Output: five sections, with all duplicate-owner and orphan-system conflicts flagged at the end.",
    io: "Input: the sector's main bodies and what each does. Output: a five-section BDAT skeleton with conflicts flagged.",
    safeguard: "This is a skeleton built only from your description — every owner assignment and every duplicate flag is a hypothesis. Confirm each against the bodies' actual mandates and systems before recording it; a body's real behaviour often differs from its mandate, and that gap is exactly what the Assess must find."
  },
  metadataRows: [
    ["Working title",          "BDAT on a real ministry — the Progressa walkthrough"],
    ["YouTube-optimised title", "Enterprise Architecture worked example: reading an education sector in four layers"],
    ["Description (60 words)", "The four layers, applied. Using Progressa — a demonstration country — this video walks architects through reading an education system in BDAT: classify the bodies, map capabilities to owners, name one owner per data domain, map applications, list shared technology, then trace one service from the citizen down to the infrastructure. The method transfers to any sector. AI BDAT-skeleton prompt in the description."],
    ["Tags",                    "BDAT example, enterprise architecture walkthrough, education sector, PAERA, data domain, capability map, once-only, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology, worked example); §4.4 (sector portability — method transfers); §4.3 (AI integration — BDAT-skeleton prompt); §4.6 (worked demonstration on the Education sector)"],
    ["PAERA citations",         "Annex 2 Metamodel; §5.2 Architectural principles (once-only)"],
    ["External-link list",      "PAERA v1.0 Annex 2 (Metamodel); PAERA v1.0 §5.2 (Architectural principles)"]
  ]
}));

// ---------- 2.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 2.6",
  title: "Run a Phase 2 Assess — what good looks like, and the gaps you'll find",
  runtime: "~5 min",
  words: 640,
  paeraAnchor: "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "A good current-state picture is judged by a few quality tests per layer, not by its length. Learn the tests, learn the gaps you will always find, and you can run a Phase 2 Assess that names the right problems in the right order.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Run a Phase 2 Assess'. Voice-over begins." },
    { text: "The Assess phase produces the current-state picture and the gap analysis your country's roadmap is built on. The hard part is not writing a lot. It is writing a description good enough to make decisions from. So you need to know what a good current-state picture looks like — the quality tests, layer by layer — and the gaps you will almost always find. That is what lets you assess, instead of just document." },
    { cue: "Slide 2 — Title: 'What good means — three tests for any layer'. Body, three rows: 'Complete enough to decide — not exhaustive.' 'Owned — every element has a named owner.' 'Traceable — every element connects up and down.'" },
    { text: "Three tests apply to every layer. First, complete enough to decide — not exhaustive. A description that covers the capabilities and systems that matter, with the rest noted, beats a five-hundred-page audit no one reads. Second, owned — every capability, every data domain, every application has a named owner. An element with no owner is a finding, not a detail. Third, traceable — every element connects up and down. A service that traces to no capability, an application that traces to no data, a capability no application supports: each broken link is a gap. If your current-state picture passes these three tests, it is good enough to assess against. If it fails them, more pages will not fix it." },
    { cue: "Slide 3 — Title: 'Per-layer quality criteria'. Body, four rows: 'Business — capabilities, not org boxes.' 'Data — one owner, one authoritative copy per domain.' 'Application — every system maps to a capability and a data domain.' 'Technology — standards and single points of failure named.'" },
    { text: "Within that, each layer has its own test. The Business layer is good when it describes capabilities, not organisation boxes — when you could swap two ministers and the capability map would not change. The Data layer is good when every domain has exactly one owner and one authoritative copy named. The Application layer is good when every system maps to a capability and a data domain — no orphan systems. The Technology layer is good when it names the standards in use and the single points of failure — not when it lists every server. Hold each layer to its own test, and the quality of the whole picture takes care of itself." },
    { cue: "Slide 4 — Title: 'The gaps you will always find'. Body, four rows: 'Duplicate registries — many owners of one domain.' 'Orphan systems — applications mapped to no capability.' 'Point-to-point spaghetti — every system linked by its own custom connection.' 'No clear owner — a capability or domain everyone uses and no one owns.'" },
    { text: "Now the gaps. Four of them show up in almost every first assessment, so look for them on purpose. One: duplicate registries — several bodies each keeping their own copy of the same domain, none agreeing. Two: orphan systems — applications that map to no current capability, often left over from a project that ended. Three: point-to-point spaghetti — every system connected to every other by its own custom link, with no shared data exchange. Four: no clear owner — a capability or a domain that everyone uses and no one owns, which is where accountability quietly disappears. You will find these. Naming them is most of the Assess." },
    { cue: "Slide 5 — Title: 'Score the gap, don't just list it'. Body, two rows: 'For each gap: how much it hurts (cost, citizen burden, risk) and how hard it is to close.' 'Priority = high impact, where movement is possible. Add a per-layer maturity scorecard.'" },
    { text: "A list of gaps is not an assessment. The assessment is the priority order. For each gap, judge two things: how much it hurts — the cost to the country, the burden on the citizen, the risk to the minister's programme — and how hard it is to close. The gaps you put at the top are the ones that hurt the most where movement is actually possible. A maturity scorecard per layer helps — a simple rating of how far each layer is from where it needs to be. The output your EA Board signs off is not 'here is everything wrong'. It is 'here are the right problems, in the right order, with the reasons'." },
    { cue: "Slide 6 — Title: 'The sign-off test — honesty'. Body, single text block: 'Assess ends when the senior decision-maker confirms the gap analysis reflects ground truth. An assessment that flatters the current state — that softens a problem because a powerful ministry owns one of the copies — fails quietly, a year later.'" },
    { text: "The Assess phase ends with a sign-off: the senior decision-maker confirms the gap analysis reflects ground truth. That sign-off has one quality test of its own — honesty. An assessment that flatters the current state, that softens the duplicate-registry problem because a powerful ministry owns one of the copies, fails — quietly, and expensively, a year later. Your job in Assess is to name the right problems in the right order, including the politically uncomfortable ones, in language the decision-maker can act on. Get that sign-off honestly, and the roadmap that follows stands on solid ground." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A good current-state picture is owned, traceable, and complete enough to decide from — and the Assess is finished when it names the right problems in the right order.'" },
    { text: "So a Phase 2 Assess is not about volume. It is a current-state picture that is owned, traceable and complete enough to decide from, plus a gap analysis that scores and orders the problems honestly. Hold each layer to its test, look for the four gaps on purpose, and rank by impact where movement is possible. Do that, and you can run the Assess — which is the work the whole roadmap depends on." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §3.1.3 (Readiness Assessment); §5.4 (Organisational Assessment & Roadmap). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Run a Phase 2 Assess'.",
      "Standard ITU template. Subtitle (KP1 / 2.6). No images."],
    ["2", "Three-tests slide. Three text rows: complete-enough / owned / traceable.",
      "The universal quality tests. Text-only."],
    ["3", "Per-layer criteria slide. Four text rows, one per layer.",
      "The 'swap two ministers' line for the Business layer is the memorable beat."],
    ["4", "Four-gaps slide. Four text rows, revealed cumulatively.",
      "The reference payload of the video — the gaps to hunt on purpose. Readable on mobile."],
    ["5", "Score-the-gap slide. Two text rows on impact and effort, plus the maturity-scorecard note.",
      "The priority-order idea is what turns a list into an assessment."],
    ["6", "Sign-off-honesty slide. Single text block.",
      "The honesty test — the politically uncomfortable line is the operative beat. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; the module's capstone message."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the Assess references."]
  ],
  aiTip: {
    title: "Turn AS-IS notes into a scored gap analysis",
    problem: "An architect with four-layer current-state notes needs to convert them into a scored, ordered gap analysis the EA Board can sign off — not just a list of everything wrong.",
    prompt: "Below are my current-state (AS-IS) notes for [name the sector or body] in [country X], organised by layer [paste your Business, Data, Application, Technology notes]. Produce a scored gap analysis. (1) Identify gaps, looking on purpose for the four common ones: duplicate registries (more than one owner of a data domain), orphan systems (applications mapped to no capability), point-to-point integration with no shared data exchange, and capabilities or domains with no clear owner. (2) For each gap, give: the layer, a one-line description, severity (Low / Medium / High — based on cost, citizen burden and risk), effort to close (Low / Medium / High), and a priority that favours high impact where movement is possible. (3) Give a per-layer maturity score (1–5). (4) List the three highest-priority gaps with a one-paragraph rationale each. Output: a gap table, a per-layer maturity line, and the top-three rationale.",
    io: "Input: four-layer AS-IS notes. Output: a scored gap table, per-layer maturity scores, and the top-three priority gaps with rationale.",
    safeguard: "The model ranks only what you give it — a gap you did not capture cannot be scored. And any severity judgment that touches a politically powerful body must be validated with the decision-maker, not softened by the model; the honesty of the assessment is yours to defend, not the tool's."
  },
  metadataRows: [
    ["Working title",          "Run a Phase 2 Assess — what good looks like, and the gaps you'll find"],
    ["YouTube-optimised title", "How to run an EA current-state assessment — quality tests and the 4 gaps you'll always find"],
    ["Description (60 words)", "A good current-state picture isn't long — it's owned, traceable and complete enough to decide from. This video shows public-sector architects the quality tests for each layer, the four gaps that show up in almost every first assessment (duplicate registries, orphan systems, point-to-point spaghetti, no clear owner), how to score and order them, and why the sign-off rests on honesty. AI gap-analysis prompt in the description."],
    ["Tags",                    "EA assessment, current state, AS-IS, gap analysis, enterprise architecture, PAERA, maturity assessment, duplicate registries, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — gap-analysis prompt); §4.6 (assessment applied to a sector)"],
    ["PAERA citations",         "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §3.1.3 (Readiness Assessment); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 2.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 2.7",
  title: "The two traps to catch at Assess — bespoke and vendor-driven",
  runtime: "~4 min",
  words: 540,
  paeraAnchor: "§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Architectural principles; §5.6 Sourcing",
  singleMessage: "Two traps recur in every assessment: the bespoke trap, where each project builds its own version of a shared function, and the vendor-driven trap, where a supplier's product quietly becomes the architecture. Learn to spot both at Assess, and you protect the country from paying many times for one thing.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The two traps to catch at Assess'. Voice-over begins." },
    { text: "Two traps catch governments again and again. As the architect at the Assess phase, you are the one positioned to spot them early — before they are built, while they are still a line in a project plan. Learn to recognise both, and you save your country years and a great deal of money." },
    { cue: "Slide 2 — Title: 'Trap one — the bespoke trap'. Body, single text block: 'A new project needs to identify citizens. Reusing the national platform means learning it, negotiating, accepting their timelines. Building its own is faster — for this project. So it builds its own. Rational locally. Ruinous nationally.'" },
    { text: "The first is the bespoke trap. A new project needs to identify citizens. Reusing the national identity platform means learning it, negotiating with the body that owns it, and accepting their timelines. Building its own small identity function is faster — for this project. So the project builds its own. This is not laziness. Inside the project, building is the rational choice, every time. But multiply it across ten projects and the country has ten identity functions, ten learner lists, ten payment integrations — and has paid ten times for what it should have built once. The math that makes reuse worth it only exists at the level of the whole government. No single project can see it. You can. At Assess, every time a project proposes to build a function that already exists as a shared building block, you flag it." },
    { cue: "Slide 3 — Title: 'Why procurement rules don't catch it'. Body, single text block: 'A rule can require open standards. It cannot make reusing another body's platform cheaper or faster than building fresh. Only the whole-of-government view, plus a Board that can say no, catches it.'" },
    { text: "You might think procurement rules already prevent this. They do not. A rule can require a project to use open standards. It cannot make reusing another body's platform cheaper or faster than building fresh — so the project, optimising for its deadline, still builds. The only thing that catches the bespoke trap is the whole-of-government view that an architecture gives you, plus a governance board with the authority to say: not this one, reuse the shared platform. The rule sets the intention. The architecture and the Board enforce it. That is why catching this trap is architecture work, not procurement work." },
    { cue: "Slide 4 — Title: 'Trap two — the vendor-driven trap'. Body, single text block: 'A ministry buys a product to solve one problem. Slowly, processes bend to fit it; data is stored the product's way; other systems integrate to the product, not a standard. Five years on, the product is the architecture — and only the vendor understands it.'" },
    { text: "The second is the vendor-driven trap. A ministry buys a product to solve one problem. The product works. Slowly, more processes are bent to fit it. Data is stored the way the product wants. Other systems integrate to the product, not to a standard. Five years on, the product is not a system the government owns — it is the architecture, and the only people who understand it work for the vendor. Changing anything means calling them and paying what they ask. The government has lost the ability to leave, and the price reflects it. The trap is not buying from a vendor — sometimes buying is right. The trap is letting the vendor's product, rather than your architecture, decide how your government is shaped." },
    { cue: "Slide 5 — Title: 'Catch both — the questions to ask at Assess'. Body, four rows: 'Does a shared building block already exist for this?' 'Is the data stored to an open standard, or to one vendor's format?' 'If this supplier doubled their price, could we replace them within two years?' 'Is the sourcing choice — build, buy, share, sandbox — deliberate?'" },
    { text: "You catch both with a few questions, asked at Assess. Does a shared building block already exist for what this project wants to build? Is the data stored to an open standard, or to one vendor's format? If this supplier doubled their price, could we replace them within two years — and if not, why not? And for anything new: is the sourcing choice deliberate — build, buy, share another country's, or test in a sandbox first — or is it just the path of least resistance? These questions turn both traps from things you discover too late into things you flag while they are still cheap to change." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Build-your-own is rational for a project and ruinous for a country; a vendor's product should fit your architecture, not become it — and Assess is where you catch both.'" },
    { text: "So watch for the two traps. The bespoke trap — rational for a project, ruinous for a country, caught only by the whole-of-government view and a board that can say no. And the vendor-driven trap — where a product quietly becomes the architecture and the exit door closes. Both are cheap to fix at Assess and expensive to fix later. Spotting them early is one of the most valuable things you do as an architect." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §1.3 (GovStack Vision); §3.3 (Digital Infrastructure principles); §5.2 (Architectural principles); §5.6 (Sourcing — build / buy / share / sandbox). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The two traps to catch at Assess'.",
      "Standard ITU template. Subtitle (KP1 / 2.7). No images."],
    ["2", "Bespoke-trap slide. Single text block framing the local-rational behaviour.",
      "Carries the 'planning enables re-use' argument in architect register. The math, not the morality."],
    ["3", "Why-procurement-doesn't-catch-it slide. Single text block.",
      "Names why this is architecture work, not procurement work. Text-only."],
    ["4", "Vendor-trap slide. Single text block on the slow capture by a product.",
      "The 'only the vendor understands it' line is the operative beat."],
    ["5", "Questions-to-ask slide. Four text rows, the screening questions.",
      "The practical take-home — turns both traps into something flaggable at Assess. Readable on mobile."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the sourcing and principles references."]
  ],
  aiTip: {
    title: "Run a two-trap screen on a project proposal",
    problem: "When a new project or system proposal crosses the architect's desk, they need a fast screen for the bespoke trap and the vendor-driven trap — and a recommended sourcing posture to put to the project team and the EA Board.",
    prompt: "Below is a project proposal or system description for [country X]'s [sector] [paste the proposal: what it will build or buy, the functions it needs, any named data formats or suppliers]. And here is what shared building blocks already exist in the country [paste a short list: national identity, payments, data exchange, any shared registries — or note if unknown]. Run a two-trap screen. (1) Bespoke trap: list any function in the proposal that duplicates an existing shared building block, and for each, the reuse alternative. (2) Vendor-driven trap: flag any sign of lock-in — proprietary data formats, integration to a product rather than a standard, unclear exit path — and estimate, in words, how hard the supplier would be to replace in two years. (3) For each flagged item, give the question to put to the project team. (4) Recommend a sourcing posture for the proposal overall: build, buy, share, or sandbox-first, with one line of reasoning. Output: two trap sections, the questions, and the sourcing recommendation.",
    io: "Input: a project proposal plus the list of existing shared building blocks. Output: a two-trap screen, questions for the project team, and a recommended sourcing posture.",
    safeguard: "The screen flags risks from the description only, and a flagged duplication is sometimes justified — a project may have a real reason the shared block cannot serve it. Use the output to open the conversation with the project and the EA Board, not to auto-reject; the Board makes the call, not the model."
  },
  metadataRows: [
    ["Working title",          "The two traps to catch at Assess — bespoke and vendor-driven"],
    ["YouTube-optimised title", "Two traps that cost governments millions — and how architects catch them early"],
    ["Description (60 words)", "Two traps recur in every assessment. The bespoke trap: each project builds its own identity or payment function because, locally, building beats reusing — so the country pays many times for one thing. The vendor-driven trap: a product quietly becomes the architecture and the exit door closes. This video shows architects how to spot both early, with the questions to ask at Assess. AI two-trap screen prompt in the description."],
    ["Tags",                    "vendor lock-in, build vs buy, reuse, enterprise architecture, sourcing, GovStack building blocks, PAERA, procurement, EA governance, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 2: EA principles, the metamodel and the BDAT layers"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.2 (reference frameworks — sourcing); §4.3 (AI integration — two-trap screen prompt)"],
    ["PAERA citations",         "§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Architectural principles; §5.6 Sourcing"],
    ["External-link list",      "PAERA v1.0 §1.3 (GovStack Vision); PAERA v1.0 §3.3 (Digital Infrastructure principles); PAERA v1.0 §5.2 (Architectural principles); PAERA v1.0 §5.6 (Sourcing)"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 2 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and produce the artefact on the other half. For the Architect-facing videos in Topic 2, 'produce the artefact' means draw the corresponding architecture deliverable — a four-layer capture template, a metamodel conformance check, a country-tailored principle card, a body-classification profile, a first-pass BDAT skeleton, a scored gap analysis, a two-trap screen. Each subtopic's AI usage tip operationalises this directly: the prompt produces the artefact the video is teaching."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain in plain text. No country emblems, no government-agency logos — including for the fictional Progressa institutions in 2.5, which appear as plain-text labels only. The recurring single-sentence summary slide at the end of each subtopic uses the body type at 28pt rather than 18pt to make the line screenshot-friendly for architects who want to reuse the message."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI avatar narrator generated by ITU's production pipeline from an uploaded portrait image, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; FiscalAdmin's scripts are agnostic to the option chosen. There are no 'speaker on camera' cues anywhere in the bundle."),

  H3("4.4 Voice, tone and the vocabulary shift"),
  P("Direct address (\"as the architect,\" \"your country,\" \"the body in front of you\"). No third-person distance. Plain language at approximately an eighth-grade English level, held even though the audience is more technical than Topic 1's. The deliberate change from Topic 1 is vocabulary: the terms Topic 1 set aside — metamodel, taxonomy, capability, data domain, building block — are introduced here, each defined in plain words on first use, because the architect needs them to do the work. Concrete examples in every beat — a learner registered once, a duplicate list found, a product that becomes the architecture. Honest about the politics of assessment: the duplicate-registry-owned-by-a-powerful-ministry case is named, not avoided. Each subtopic is self-contained: an architect arriving via search finds a video that makes sense without any other."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata. Every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video link list into the YouTube description. The aggregate list across all seven subtopics is compiled in Section 6 for ITU's reference."),

  H3("4.6 GitBook companion content"),
  P("Each subtopic in this bundle ships with the video script, the slide specification, the AI usage tip and the metadata. The GitBook companion content — written, in-depth implementation guidance per the Guide §2 — is produced as a parallel deliverable, structured to mirror the same subtopic numbering. For Topic 2 the GitBook companion carries the worked artefacts the videos can only point at: a full Progressa BDAT model behind 2.5, a complete principle register behind 2.3, and a sample Assess report behind 2.6. Cross-references between video and GitBook content use the topic/subtopic numbers."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting raised the editorial and structural decisions listed below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 PAERA-fidelity claims to verify before final lock"),
  P("Topic 2 leans directly on the structure of PAERA, so several specifics must be checked against PAERA v1.0 before final lock: the exact wording and count of the architectural principles in §5.2 (the ten principles in 2.3 are paraphrased — confirm the canonical list, numbering and any that have been split or merged); the exact entity set and relationship names in the Annex 2 metamodel (2.2 names Capability, Service, Application, Data Domain, Technology Component and Organisation — confirm these match PAERA's terms and that no core entity is omitted); and the taxonomy types and supporting elements in §4.6 and Annex A1.2 (2.4 uses policy unit / regulatory agency / service-delivery authority plus state registry and shared platform — confirm against PAERA's published categories). Any term that does not match PAERA's wording should be corrected to PAERA's, not left paraphrased."),

  H3("5.2 Editorial tone calls"),
  P("Four tone choices are sharp and deserve a deliberate keep / soften / cut decision: 'the org chart is not the Business layer' in 2.1; 'data outlasts them all' in 2.1 (carried deliberately from Topic 1's subtopic 1.2 for consistency); 'an assessment that flatters the current state fails — quietly, and expensively, a year later' in 2.6; and 'the only people who understand it work for the vendor' in 2.7. All four are intended to land as practitioner-honest rather than cynical — confirm the register suits ITU's channel voice."),

  H3("5.3 Structural calls"),
  P("Three structural items. (1) Ordering: this draft places the metamodel (2.2) before the principles (2.3), on the reasoning that the metamodel is the natural deepening of the four layers in 2.1; the alternative is principles-first. Confirm the order with ITU. (2) Boundary with Module 4: subtopic 2.5 is a layer-reading walkthrough on Progressa, deliberately scoped to BDAT modelling; KP1 Module 4 is the full end-to-end method on Progressa. The two must not duplicate — 2.5 reads the layers, Module 4 runs the lifecycle. Confirm the boundary so the Progressa material is not told twice. (3) The dropped sources-and-bridge subtopic: an earlier outline carried a 2.8 'sources and bridge to Module 3'. It was removed because a sources/bridge video is not a standalone comprehension unit and an explicit forward-bridge violates the no-outro rule; sources now sit in each subtopic's own Sources slide and the aggregate annex. Confirm this is acceptable."),

  H3("5.4 Visual production calls"),
  P("Two items to confirm with ITU's look-and-feel template once delivered (action item A5): the four-layer connection diagram in 2.1 (slide 6) and the single-service trace in 2.5 (slide 6) are the two candidate centrepiece visuals of Topic 2 and merit a dedicated design iteration with ITU's production team; both are specified as text-box connectors only, with no icons, pending the template."),

  H3("5.5 Cross-topic dependency"),
  P("Topic 2 is where KP1's technical vocabulary lands — metamodel, taxonomy, capability, data domain — having been deliberately deferred in Topic 1. Confirm ITU is content that Topic 2 is the right place for this vocabulary to be introduced, and that Topic 1 should continue to avoid it. If ITU's feedback on the Inception Report §5.2 module tables changes the KP1 module boundaries, Topic 2's scope may need to flex accordingly."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the seven subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions. All references are public anchors the ITU reviewer can verify."),
  genericTable([2000, 7700], ["Subtopic", "Sources referenced"], [
    ["2.1", "PAERA v1.0 (paera.govstack.global) — Annex 2 Metamodel; §2.3 Role of Enterprise Architecture."],
    ["2.2", "PAERA v1.0 Annex 2 (Metamodel — entities and relationships)."],
    ["2.3", "PAERA v1.0 §5.2 (Architectural principles); §3.3 (Digital Infrastructure principles)."],
    ["2.4", "PAERA v1.0 §4.6 (Organisational taxonomy); Annex A1.2 (taxonomy detail)."],
    ["2.5", "PAERA v1.0 Annex 2 (Metamodel); §5.2 (Architectural principles — once-only). Progressa is a fictional demonstration country; no external citation."],
    ["2.6", "PAERA v1.0 §3.1.3 (Readiness Assessment); §5.4 (Organisational Assessment & Roadmap)."],
    ["2.7", "PAERA v1.0 §1.3 (GovStack Vision); §3.3 (Digital Infrastructure principles); §5.2 (Architectural principles); §5.6 (Sourcing). GovStack Building Block specifications (govstack.global) for the shared building blocks referenced."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel, and once the exact PAERA §5.2 / §4.6 / Annex 2 wording is confirmed (see calibration item 5.1) the section references here will be locked to match.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP1 Module 2 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP1 Topic 2, Architect-facing, aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP1 Topic 2 Script Bundle v0.1 · 2 June 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP1_Module2_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
