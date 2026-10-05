// Build KP4 Module 6 — Video Script Bundle v0.1
// Designing Digital Government Services using a Building Block Approach · Module 6 — Run the method in your
//   administration (the Strategist register).
// v0.1 (4 Oct 2026): written on the KP4 outline and content plan, version 0.2, section 1, module 6. Each single
//   message is the plan's, word for word. The only
//   public sources cited are those the plan names for subtopic 6.5, at the editions it names; the other six subtopics
//   rest on the SDD method's own content, stated at KP4's level and never cited as a file. No worked example of this
//   module existed before this bundle: each is written here, from the plan's "Worked example" row, under rule B, with
//   the names of the KP4 fact sheet (KP4-DSD/examples/E0_progressa-fact-sheet.md), recast from the education
//   application. Nothing is generated in this module; the demonstration segment of 6.2 is a storyboard until recorded.
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
// Helper functions are those of the KP3 module 6 bundle of version 0.1, copied unchanged except the persona.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors KP1 and KP2) ----------
const ARIAL = "Arial";
const COLOR_HEAD     = "1F3864";
const COLOR_ACCENT   = "2E75B6";
const COLOR_GREY_TXT = "595959";
const COLOR_GREY_BG  = "F2F2F2";
const COLOR_BORDER   = "BFBFBF";
const COLOR_VISUAL_BG    = "EAF1F8";  // visual / production cue
const COLOR_VISUAL_BD    = "2E75B6";
const COLOR_AI_BG        = "EEF7EE";  // AI usage tip
const COLOR_AI_BD        = "2E7D32";
const COLOR_PULL_BG      = "FFF8E1";  // single-message highlight
const COLOR_PULL_BD      = "E65100";

const border = { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const cellMargin  = { top: 90, bottom: 90, left: 130, right: 130 };

// Persona for KP4 Module 6 (the Strategist register, plan v0.2, section 1)
const PERSONA_S = "S (Strategist) — the director who owns a service, the head of a ministry's ICT unit or the programme lead who commissions a digital service, judges the supplier, convenes the review and makes the case to the minister and the donor";

function P(text, opts = {}) {
  return new Paragraph({ spacing: { before: 80, after: 80 }, ...opts,
    children: [new TextRun({ text, font: ARIAL, size: 21, ...(opts.run || {}) })] });
}
function PItalic(text) {
  return new Paragraph({ spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: ARIAL, size: 20, italics: true, color: COLOR_GREY_TXT })] });
}
function H1(t, opts = {}) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 280, after: 140 }, ...opts,
    children: [new TextRun({ text: t, font: ARIAL, size: 32, bold: true, color: COLOR_HEAD })] });
}
function H2(t, color = COLOR_HEAD, opts = {}) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 220, after: 100 }, ...opts,
    children: [new TextRun({ text: t, font: ARIAL, size: 26, bold: true, color })] });
}
function H3(t, color = COLOR_ACCENT) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 160, after: 60 },
    children: [new TextRun({ text: t, font: ARIAL, size: 22, bold: true, color })] });
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
  const head = new TableRow({ tableHeader: true, cantSplit: true, children: headers.map((h, i) => tableHeaderCell(h, cols[i])) });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols,
    rows: [head, ...rows.map(r => new TableRow({ cantSplit: true, children: r.map((c, i) => tableCell(c, cols[i])) }))] });
}
function boxTable(fill, bd, children, margins = { top: 100, bottom: 100, left: 200, right: 200 }) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: bd };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
      new TableCell({ borders: cBorders, margins, width: { size: W, type: WidthType.DXA },
        shading: { fill, type: ShadingType.CLEAR }, children })
    ] })] });
}
function visualCueBox(text) {
  return boxTable(COLOR_VISUAL_BG, COLOR_VISUAL_BD, [new Paragraph({ children: [
    new TextRun({ text: "VISUAL CUE — ", font: ARIAL, size: 19, bold: true, italics: true, color: COLOR_VISUAL_BD }),
    new TextRun({ text: text, font: ARIAL, size: 19, italics: true, color: COLOR_VISUAL_BD })
  ] })]);
}
function aiPromptBox(title, problem, prompt, ioNote, safeguard) {
  return boxTable(COLOR_AI_BG, COLOR_AI_BD, [
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
  ], { top: 150, bottom: 150, left: 200, right: 200 });
}
function singleMessageBox(text) {
  return boxTable(COLOR_PULL_BG, COLOR_PULL_BD, [new Paragraph({ children: [
    new TextRun({ text: "Single message — ", font: ARIAL, size: 20, bold: true, color: COLOR_PULL_BD }),
    new TextRun({ text: text, font: ARIAL, size: 20, italics: true })
  ] })]);
}
function practiceBox(task, artefact) {
  // Rendered on the recap slide and never narrated, in the words the kit's renderer gives it, so that the
  // .docx and the Markdown rendering carry the same box.
  return boxTable(COLOR_GREY_BG, COLOR_HEAD, [new Paragraph({ children: [
    new TextRun({ text: "On-screen practice box (recap slide, not narrated): ", font: ARIAL, size: 19, bold: true, color: COLOR_HEAD }),
    new TextRun({ text: "Do this on your own sector. " + task.replace(/\.$/, "") + ". ", font: ARIAL, size: 19, bold: true }),
    new TextRun({ text: "The prompt in the companion material gives you " + artefact.replace(/\.$/, "") + ". Before the next video.", font: ARIAL, size: 19 })
  ] })]);
}

// ---------- helper: render a video subtopic block ----------
function renderSubtopic({ num, title, runtime, words, paeraAnchor, singleMessage,
                         scriptBeats, slideSpecRows, practice, aiTip, metadataRows }) {
  const out = [];
  // Each subtopic after the first starts on a fresh page; a page break before the heading, rather than a
  // break paragraph after the subtopic, leaves no empty page when a subtopic ends at the foot of a page.
  out.push(H2(num + " — " + title, COLOR_HEAD, num.startsWith("3.1 ") ? {} : { pageBreakBefore: true }));
  out.push(specTable([
    ["Persona",        PERSONA_S],
    ["Target runtime", runtime + " (≈" + words + " spoken words)"],
    ["Anchor",         paeraAnchor]
  ]));
  out.push(singleMessageBox(singleMessage));
  out.push(H3("Script (voice-over over text-only slides)"));
  out.push(PItalic("All slides follow the ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB; text only; no images; no individuals on screen."));
  for (const beat of scriptBeats) {
    if (beat.cue) out.push(visualCueBox(beat.cue));
    if (beat.text) out.push(P(beat.text));
  }
  out.push(H3("On-screen slide specification"));
  out.push(genericTable([900, 3400, 5400], ["Slide", "Element (text-only)", "Notes"], slideSpecRows));
  if (practice) out.push(practiceBox(aiTip.title, practice));
  out.push(spacer(80));
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
  out.push(H3("Metadata"));
  out.push(specTable(metadataRows));
  return out;
}

// The worked examples and the storyboard are written in the body as plain H3, P and genericTable calls with
// literal column and header arrays, so that the Markdown rendering (bundle_to_md.py), which reads the body only,
// carries them as well as the .docx.

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
    children: [new TextRun({ text: "KP4 — Designing Digital Government Services using a Building Block Approach",
      font: ARIAL, size: 30, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 200 },
    children: [new TextRun({ text: "Module 6 — Run the method in your administration",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Module 6 of KP4"],
    ["Version",             "v0.1 — written on the KP4 outline and content plan, version 0.2 (4 October 2026)"],
    ["Date",                "4 October 2026"],
    ["Module persona",      PERSONA_S],
    ["Subtopics",           "Seven subtopics (6.1 – 6.7), each shipped as one standalone video of about five minutes; 6.7 is supplementary"],
    ["Module runtime",      "Approximately 35 minutes across seven standalone videos"],
    ["What the module carries", "The four requirements of section 3.4 of the terms of reference as practice: what to require from a supplier, how a change is handled, how progress is read from the work, how an AI assistant is used safely, how the next service is built on the same foundation, and how the method is carried to another sector"],
    ["Worked examples",     "Written in this bundle for Progressa, one for each subtopic; the blank instruments of the documents are kept in one place, the toolkit of the written guide, to which the page of 6.1 points; every name, date and figure about Progressa is invented"],
    ["Build",               "Nothing is generated in this module. The demonstration segment of 6.2 is written as a storyboard and is recorded when the applications it shows have been generated"],
    ["Prepared by",         "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("Module 6 teaches a government team to run the SDD method, specification-driven development, as its own way of commissioning digital services. The seven videos teach what to require from a supplier, how to handle a change by correcting the document that owns the fact, how to read where the work stands from the work itself, how to use an AI assistant at every step while a person rules on every proposal, how to build the next service on the foundation the first one built, how to carry the method to another sector, and what the method says it does not claim. Every example is Progressa's, the fictional country of the Knowledge Products. Each subtopic carries an AI usage tip with a prompt ready to copy. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the seven video scripts of Module 6 of Knowledge Product 4, Designing Digital Government Services using a Building Block Approach, with the specification of their text-only slides, the AI usage tip of each subtopic, the data that describe each video, the worked example of each subtopic, a pointer to the blank instruments of the documents, the storyboard of the one demonstration segment the module carries, in subtopic 6.2, and the module's self-check of four questions. It is written from the KP4 outline and content plan, version 0.2, which fixes for each subtopic its single message, its sources, its worked example and its AI usage tip."),

  H3("1.2 What Module 6 teaches, and what it does not claim"),
  P("Module 6 is written in the Strategist register, for the director who owns a service, the head of a ministry's ICT unit or the programme lead who commissions the service, judges the supplier, convenes the review and answers to the minister and the donor. The listener does not write the documents of the method; staff, a supplier or an AI assistant does. The module teaches what the listener requires, accepts and reads. Its content is the SDD method itself, described at the level the plan sets: the documents are named by what they are for, and no rule number, command or file format of the method appears. Only subtopic 6.5 cites public sources: PAERA, the GovStack reference architecture; the W3C standard for verifiable credentials; the GovStack Identity and Digital Registries specifications; and UNDP's compendium on digital public infrastructure."),
  P("Nothing is generated in this module, and no application of the education demonstration exists on the date of this bundle. No script says that anything runs. The demonstration segment of 6.2 says what the recording will show and what counts as a pass; until it is recorded, its storyboard, in section 3 after the worked example of 6.2, stands in its place. The trace report of 6.3 and the stale list of 6.2 are shown as examples built for Progressa, not as the output of a run."),

  H3("1.3 The names used for Progressa"),
  genericTable([1700, 8000], ["Name", "What it is, and its part in Module 6"], [
    ["PHEQA", "The Progressa Higher Education Quality Authority. It keeps the register of institutions, registers and licenses private institutions, and writes an approved new name into the register (6.2)."],
    ["MoEYS", "Progressa's ministry of education. The minister approves a change of an institution's name (6.2). MoEYS commissions its own application, and is the example of the deliverables annex (6.1), the trace report (6.3), the rules of use for an AI assistant (6.4) and the briefing note (6.7)."],
    ["PNIA", "The Progressa National Identity Authority. Its sign-in tells a service who a person is; the next service reuses it (6.5)."],
    ["Linkup", "The data exchange layer that PDGA, the Progressa Digital Government Authority, operates. MoEYS reads PHEQA's register across it, and the next service will too (6.5)."],
    ["PDCA", "The Progressa Digital Credentials Authority. It owes the next service on the same foundation, a graduate's digital credential (6.5)."],
    ["Harbourview University College", "A private institution in Progressa, entered in the register of institutions as INS-00217. It asks to change its name (6.2)."]
  ]),

  H3("1.4 How to read this document"),
  P("Section 2 gives the module at a glance. Section 3 holds the script of each subtopic, with its slide specification, its on-screen practice box, its AI usage tip and its metadata, followed by its worked example; the pointer to the blank instruments follows the worked example of 6.1, the storyboard follows that of 6.2, and the pages that the written guide carries for 6.3 and 6.7 follow their worked examples. Section 3 ends with the module's self-check. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate list of external links."),
  P("Within each script, three rendering conventions are used: shaded blocks are on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script."),

  pageBreak()
);

// ---------- AT A GLANCE ----------
body.push(
  H1("2. Module 6 at a glance"),
  P("Seven standalone videos, all in the Strategist register. Total runtime approximately thirty-five minutes. Each video has one single message, taken word for word from the KP4 outline and content plan, version 0.2, and can be understood on its own."),
  genericTable([700, 2700, 4300, 1100, 900], ["#", "Title", "Single message", "Class", "Runtime"], [
    ["6.1", "What to require from a supplier",
      "The twelve documents are deliverables you name in the contract, each accepted by a named person.", "Core", "~5 min"],
    ["6.2", "When something changes, correct the document that owns the fact",
      "A change goes up to its source and everything below is produced again.", "Core", "~5 min"],
    ["6.3", "Read where the work stands from the work",
      "Progress is a report the programs produce from the documents, never a figure someone remembers.", "Core", "~5 min"],
    ["6.4", "The AI assistant at every step, and the person who rules",
      "The assistant drafts each document; a person rules on every proposal and every gap keeps its name.", "Core", "~5 min"],
    ["6.5", "The next service on the same foundation",
      "The second service, a digital credential, reuses what the first one built and proved.", "Core", "~5 min"],
    ["6.6", "Carry the method to another sector",
      "The method holds no sector's content; another sector brings its own catalogue and its own records.", "Core", "~5 min"],
    ["6.7", "Before you rely on it: what the method does not claim",
      "The method states its own limits, and a manager reads them before relying on it.", "Supplementary", "~5 min"]
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
  title: "What to require from a supplier",
  runtime: "~5 min",
  words: 469,
  paeraAnchor: "None. The content is the SDD method's own: the twelve documents, their blank instruments, kept in one place in the toolkit of the written guide, and who accepts each; no public source is cited",
  singleMessage: "The twelve documents are deliverables you name in the contract, each accepted by a named person.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What to require from a supplier'. Voice-over begins." },
    { text: "A supplier's offer often promises a working system and its documentation. Neither phrase says what you will receive, or who on your side decides that it is good enough. Both can be settled in the contract, before any work begins." },
    { cue: "Slide 2 — Title: 'Twelve deliverables, not one system'. Body, five text rows: '1 — Your own documents, handed over and kept as received.' '2 to 8 — What was asked, the records, the goals, the architecture, the shared lists, each goal as a story, its screens.' '9 — The walk-through your officials click.' '10 and 11 — The decisions for the whole application, and the one file a program reads.' '12 — The working application, generated from that file.' Figure F3, slide variant (figures/slides/F3_twelve-documents.png), stands on the slide in place of the rows." },
    { text: "The SDD method, short for specification-driven development, writes a service down in twelve documents, in a fixed order. The first is your own: the law, the mandate and the requests, handed over and never edited. Seven more are written before anything is built: what was asked, the records the service keeps, the goals, the architecture, the shared lists and settings, each goal written as a story, and its screens. Then come the walk-through your officials click, the decisions settled once for the whole application, and the one file a program reads. The twelfth is the working application itself. Each of the twelve can be named in the contract as a deliverable." },
    { cue: "Slide 3 — Title: 'Three things for each deliverable'. Body, three text rows: 'The form: the blank instrument it is written on.' 'The person: who in your organisation accepts it.' 'The check: what it must pass before it is accepted.'" },
    { text: "For each deliverable, the contract names three things. The first is the form, a blank instrument the document is written on, so that what arrives can be compared with what was ordered. The second is the person in your organisation who accepts it, named by role: the director who owns the service, or the head of the ICT unit for the technical documents. The supplier never accepts its own work. The third is the check the document must pass before it is accepted: its own checklist, a comparison with an earlier document, or a program. The next document is written only from what was accepted." },
    { cue: "Slide 4 — Title: 'Two clauses that protect you'. Body, two text rows: 'The application is generated from the accepted model, and nothing generated is edited by hand.' 'Every open question is delivered with an owner and a date.'" },
    { text: "Two clauses protect you most. The first says that the working application is generated from the accepted model, the one file a program reads, and that nothing generated is edited by hand. A supplier who patches the running system leaves your documents saying one thing while the system does another. The second clause says that every open question is delivered with an owner and a date. A question with a name on it is part of what you receive. A question the supplier answered with a guess is a fault in the delivery." },
    { cue: "Slide 5 — Title: 'MoEYS's deliverables annex (illustrative)'. Body, a plain-text table of four rows: 'The register of what was asked — accepted by the Director of Higher Education — its own checklist.' 'The screens of each goal — accepted at a review of three people — checked against the goal's story.' 'The file a program reads — approved by the head of the ICT unit — a program refuses it if it contradicts an accepted decision.' 'The working application — accepted when an officer has finished a real task on it.'" },
    { text: "Here is how Progressa's ministry of education, MoEYS, writes it, in an example built for this course. Its annex lists all twelve documents. The Director of Higher Education accepts the register of what was asked. The screens of each goal are accepted at a review of three people: their owner, the builder and the officer who will use them. The head of the ICT unit approves the file a program reads, once a program has checked it. And the working application is accepted only when an officer has finished a real task on it." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The twelve documents are deliverables you name in the contract, each accepted by a named person.' Below it, the on-screen practice box (not narrated)." },
    { text: "Name the twelve documents as deliverables. For each one, name its form, the person on your side who accepts it, and the check it must pass." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'What to require from a supplier'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Figure F3 (slide variant) in place of five text rows: the twelve deliverables, grouped by number.",
      "Figure F3, its slide variant (figures/slides/F3_twelve-documents.png, drawn by the figure's own program in slide mode): the twelve documents numbered in order, grouped as before any design, one goal at a time, the whole application once, and generated by a program; named by what they are for, never by a folder or a rule number; boxes and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["3", "Three things for each deliverable. Three text rows: the form, the person, the check.",
      "The core payload. Text-only."],
    ["4", "Two clauses. Two text rows.",
      "Text-only."],
    ["5", "MoEYS's annex. A plain-text table of four rows: deliverable, who accepts it, its check.",
      "The worked example, built for Progressa; the full annex follows the script. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."]
  ],
  practice: "a deliverables annex with one row for each of the twelve documents",
  aiTip: {
    title: "Draft the deliverables annex of a terms of reference",
    problem: "A terms of reference often asks a supplier for 'a system and its documentation'. This prompt drafts the deliverables annex instead: the twelve documents of the method as deliverables, each with the form it is written on, the person in the ministry who accepts it and the check it must pass.",
    prompt: "Below is a short description of a digital service, [name of the service], that [name of the ministry] will commission from a supplier: [paste the description]. Below is the table of the twelve documents of the specification-driven method, each with who writes it, what goes in, what comes out, where a person decides and how it is checked: [paste the table]. Below are the roles in the ministry that can accept work: [paste the roles]. Draft the deliverables annex of the terms of reference. For each of the twelve documents, write one row with: (1) the deliverable, named by what it is for; (2) the blank form it must be written on; (3) the role in the ministry that accepts it, which is never the supplier; (4) the check it must pass before it is accepted; (5) the documents it is written from, which must already be accepted. Add two clauses: the working application is generated from the accepted application model and is never edited by hand; every open question is delivered with an owner and a date. Where the description does not say who should accept a document, write 'to be named by the ministry' and do not choose a role yourself. Output: a deliverables annex with one row for each of the twelve documents, followed by the two clauses and the list of rows still waiting for a name.",
    io: "Input: a description of the service, the table of the twelve documents, and the roles in the ministry that can accept work. Output: a deliverables annex with one row for each of the twelve documents, followed by the two clauses and the list of rows still waiting for a name.",
    safeguard: "The annex is a draft. The ministry's procurement officer reviews it against the procurement rules that apply before the terms of reference are issued, and no row may name the supplier as the one who accepts."
  },
  metadataRows: [
    ["Working title",          "What to require from a supplier"],
    ["YouTube-optimised title", "What to require from a supplier: twelve documents as deliverables, each accepted by a named person"],
    ["Description (60 words)", "A supplier's offer that promises a working system and its documentation leaves you nothing to accept or refuse. This video shows how to name the twelve documents of the SDD method as deliverables, each with its form, the person who accepts it and its check, and two clauses that protect you. Five minutes for managers. An AI prompt drafts your deliverables annex."],
    ["Tags",                    "terms of reference, procurement, deliverables, digital government, specification-driven development, SDD method, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§4.1 (the step-by-step method, its roles, outputs and decision points); §4.5 (governance structures: who accepts each deliverable); §6 (templates: the blank instruments); §4.3 (AI integration — deliverables annex prompt)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited."]
  ]
}));
body.push(
  H3("Worked example — 6.1: the deliverables annex of MoEYS's terms of reference (illustrative)"),
  P("Written in this bundle for Progressa under rule B: the columns are the team's blank instrument and name no country; the rows are filled for MoEYS, which commissions its own application from a supplier. The roles are those of the KP4 fact sheet; the officer who sits at the reviews is an officer of the Directorate of Higher Education who will use the service. Each instrument named in the third column is one of the blank instruments of the written guide's toolkit, and is not copied here."),
  genericTable([500, 2100, 1800, 2700, 2600], ["#", "Deliverable", "Blank instrument", "Accepted at MoEYS by", "Check it must pass"], [
    ["1", "MoEYS's own documents: Progressa's Higher Education Regulations, the ministry's mandate and the Directorate's written requests", "None: kept as received, and named in the annex as an input", "The Director of Higher Education, by handing them over", "Kept as received and never edited; everything after is measured against them"],
    ["2", "The register of what was asked", "The register of requirements (02)", "The Director of Higher Education", "Its own checklist"],
    ["3", "The records, with their glossary and business rules", "The entity model, with its glossary and its business rules (03)", "The Director of Higher Education, after the records are read back in plain sentences", "Its own checklist"],
    ["4", "The list of goals", "The use case model (04)", "The Director of Higher Education", "Goals against the entries of the register, in both directions"],
    ["5", "The architecture", "The software architecture (05), one part for each crossing", "The head of the ICT unit of MoEYS, after PHEQA and PDGA confirm the crossings they are on the other side of", "Its own checklist"],
    ["6", "The shared lists, settings and states", "The shared groundwork (06)", "The owner of each setting, named in the setting", "Its own checklist"],
    ["7", "Each goal written out in full", "One use case, written out in full (07)", "The Director of Higher Education, at the review of the goal's screens", "Its own checklist"],
    ["8", "The screens of each goal", "The screens of a use case (08)", "The review of three people: the screens' owner, the supplier's builder and an officer of the Directorate", "Checked against the goal's story"],
    ["9", "The walk-through", "None: a program produces it from the accepted screens", "Not accepted on its own; clicked at the review of the screens", "Each page carries the version of the screens it was produced from"],
    ["10", "The interaction design", "The interaction design (10)", "The Director of Higher Education, before the model is written", "Its lists compared with the screens by a program"],
    ["11", "The application model, the one file a program reads", "The review of the application model (11), one card for each assumption or loss", "The head of the ICT unit of MoEYS, after reading every card", "A program refuses it if it contradicts the accepted interaction design or breaks a rule of the platform"],
    ["12", "The working application", "None: a program generates it; the record of the real task finished is delivered with it", "The Director of Higher Education, once an officer of the Directorate has finished a real task on it", "Read back against the model; the acceptance journeys run on the running service"]
  ]),
  P("Clause 1 of the annex. The working application is generated from the accepted application model. Nothing generated is edited by hand. A fault found in the application is corrected in the document that owns the fact, and everything below that document is produced again."),
  P("Clause 2 of the annex. Every open question is delivered with the role that owns it and the date by which it is to be answered. A question answered with a guess is a fault in the deliverable that carries it."),
  P("The order of work, as the annex states it. No document is begun from a document that has not been accepted."),
  P("What to look for before the annex is issued. Read down the column of who accepts. Every cell names a role in MoEYS, never the supplier and never nobody. A cell that names the supplier is a decision your ministry has given away."),

  H3("The blank instruments of the documents — on the page of 6.1"),
  P("The blank instruments are not copied into this bundle. They are kept in one place, the toolkit of the written guide, under 'The blank instruments', so that an instrument is corrected once and every page that uses it agrees. The toolkit holds eleven: the catalogue of the sector's services, written once for the sector before the twelve documents; one for each of the nine documents a person writes, numbered by the document it serves: the register of requirements (2), the entity model with its glossary and its business rules (3), the use case model (4), the software architecture (5), the shared groundwork (6), one use case written out in full (7), the screens of a use case (8), the interaction design (10) and the review of the application model (11); and the deliverables annex of this subtopic. The customer's own documents (1), the walk-through (9) and the working application (12) have none, because no person writes them as a blank. Each instrument names no country, institution or person, and leaves the answer column blank.")
);

// ---------- 6.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 6.2",
  title: "When something changes, correct the document that owns the fact",
  runtime: "~5 min",
  words: 460,
  paeraAnchor: "None. The content is the SDD method's own: a correction goes up to the document that owns the fact, and a program lists what the change makes stale; no public source is cited",
  singleMessage: "A change goes up to its source and everything below is produced again.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'When something changes, correct the document that owns the fact'. Voice-over begins." },
    { text: "A service is in use, and someone asks for a change. The quickest fix is to change the screen, or the running system, where the problem was seen. That fix is the one that brings the problem back later." },
    { cue: "Slide 2 — Title: 'Up to the owner, then down again'. Body, three text rows: 'Find the document that owns the fact.' 'Correct the fact there, and nowhere else.' 'Produce everything below it again.' Figure F13, slide variant (figures/slides/F13_correct-up-generate-down.png), stands on the slide beside the rows." },
    { text: "The SDD method has one rule for every change. The change goes up to the document that owns the fact. It is corrected there, and nowhere else. Then everything below that document is produced again from it. The reason is simple. If you correct a fact where you happened to notice it, the document that owns the fact still says the old thing. The next time anything is produced from that document, the old fault returns. One statement of each fact, with every copy made from it, is the only arrangement that stays true over the years." },
    { cue: "Slide 3 — Title: 'When the behaviour itself changes'. Body, four text rows: 'First the story of the goal, agreed.' 'Then the screens.' 'Then the walk-through.' 'Only then what was built.'" },
    { text: "When the behaviour of the service itself must change, the order matters even more. The story of the goal changes first, and is agreed. Then the screens are brought into line. Then the walk-through is produced again. Only then does what was built change. People notice a screen first, so they ask for the screen to change first. Hold the order. A screen changed ahead of its story is a decision that nobody agreed, and the builder has no way to know it. Ask which story the change belongs to, before anything else is touched." },
    { cue: "Slide 4 — Title: 'An institution asks to change its name (illustrative)'. Body, four text rows: 'Harbourview University College asks PHEQA to change its name.' 'Followed through both bodies, the new name could be written before the minister approves.' 'The fact is owned by PHEQA's register of business rules.' 'Corrected there: no new name without the minister's approval.'" },
    { text: "Here is an example built for Progressa. Harbourview University College asks the quality authority, PHEQA, to change its name. The request is followed through both bodies, PHEQA and the ministry of education, MoEYS. The head of the registration desk sees that an officer could write the new name into the register before the minister had approved it. The screen does not own that fact. PHEQA's register of business rules does. The rule is corrected there, to say that a new name is written only on the minister's approval, received from MoEYS. PHEQA's Registrar, who owns the rules, confirms the correction." },
    { cue: "Slide 5 — Title: 'What the change makes stale'. Demonstration segment, storyboard until recorded (the storyboard of 6.2, after its worked example): the owning document corrected, the list of what is stale produced, the application generated again, the change seen on the running service. Text-only stand-in until the recording exists: 'Corrected: the register of business rules.' 'Stale: the shared groundwork, two goals, their screens and walk-throughs, the interaction design, the model, the application.' 'Not stale: MoEYS's documents.' 'Pass: after generation, nothing is stale.'" },
    { text: "Then a program lists everything made from the old version of the rule: the shared states of a request, two of PHEQA's goals, their screens and walk-throughs, the decisions for the whole application, the file a program reads, and the application itself. Nothing on the list is reviewed, agreed or built from until it has been produced again. MoEYS's documents are not on the list, because none of them was made from PHEQA's rule. The recording of this segment will show the list, the application generated again, and the change on the running service. It passes when the list names everything the change reaches, and nothing is stale afterwards." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A change goes up to its source and everything below is produced again.' Below it, the on-screen practice box (not narrated)." },
    { text: "A change goes up to the document that owns the fact. Correct it there, then produce everything below it again." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'When something changes, correct the document that owns the fact'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Figure F13 (slide variant) beside three text rows: the rule.",
      "Figure F13, its slide variant (figures/slides/F13_correct-up-generate-down.png, drawn by the figure's own program in slide mode), on the left of the slide, with the three rows beside it: the twelve documents in a column, the change going up to the document that owns the fact and everything below produced again; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["3", "The order of a change of behaviour. Four text rows, in order.",
      "Text-only; the order is kept on screen."],
    ["4", "The example. Four text rows.",
      "The worked example, built for Progressa. Text-only."],
    ["5", "Demonstration segment (storyboard until recorded). Text-only stand-in of four short lines.",
      "Replaced by the recording of the 6.2 walkthrough when both applications have been generated. Until then, nothing on this slide claims a run."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."]
  ],
  practice: "the owning document with the reason, the list of documents to produce again, and any question with its owner",
  aiTip: {
    title: "Find the document that owns the fact a change touches",
    problem: "When a change is requested, the first instinct is to change the screen or the running system. This prompt names, for the change, the document that owns the fact, with the reason, so that the correction is made there and everything below is produced again.",
    prompt: "Below is a change requested for a digital service, in the words of the person who asked for it: [paste the request]. Below is the list of the service's documents, each with what it holds and what it was made from: [paste the list]. Name the one document that owns the fact the change touches. Give the reason in one or two sentences, quoting the line of that document that states the fact today. Then list the documents made from it, and the documents made from those, that will have to be produced again. Say plainly whether the change touches the behaviour of the service; if it does, the story of the goal changes first, then the screens, then the walk-through, and only then what was built. If no document states the fact, say so, and write the question to ask, with the role that should answer it. Never place the change in a generated file or in the running system. Output: the owning document with the reason, the list of documents to produce again, and any question with its owner.",
    io: "Input: the change requested, and the list of the service's documents with what each holds and what it was made from. Output: the owning document with the reason, the list of documents to produce again, and any question with its owner.",
    safeguard: "The owner of the document the prompt names confirms that the fact is theirs before the change is made. A change the prompt places in a generated file or in the running system is placed wrongly, whatever reason it gives."
  },
  metadataRows: [
    ["Working title",          "When something changes, correct the document that owns the fact"],
    ["YouTube-optimised title", "Handling a change in a digital service: correct the document that owns the fact, then produce everything again"],
    ["Description (60 words)", "When a change is asked for, the quick fix is the screen or the running system, and the fault comes back. This video shows the rule of the SDD method: a change goes up to the document that owns the fact, and everything below is produced again. Shown on a change of an institution's name in Progressa. An AI prompt names the owning document."],
    ["Tags",                    "change management, specification-driven development, SDD method, requirements, digital government, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§4.1 (the method's governance of change, with its decision point and validation); §4.4 (demonstration in the education sector: the demonstration segment of 6.2); §4.3 (AI integration — owning-document prompt)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited."]
  ]
}));
body.push(
  H3("Worked example — 6.2: a change of an institution's name, followed through both bodies (illustrative)"),
  P("Written in this bundle for Progressa under rule B, from the change-of-name goals on both sides. PHEQA's application has two goals in this change: the goal in which an institution applies to change its name, and the goal in which an officer writes an approved new name into the register. MoEYS's application has the minister's goal G-12, approve a change of an institution's name; the approval crosses back to PHEQA across Linkup as crossing X-5. Entry R-07 of the register of what was asked says that a change of name needs the minister's approval. Every date is invented."),
  P("The request. On 8 February 2027 Harbourview University College, INS-00217, applies through PHEQA's self-service to change its name to Coastland University College. The head of PHEQA's registration desk follows the request through both bodies on the walk-through, and sees that the officer's screen offers to write the new name into the register as soon as the request is received, before the minister's approval has come back from MoEYS."),
  P("Where the fact lives. The screen only shows what the rules allow. The fact that a new name takes effect only on the minister's approval belongs to PHEQA's register of business rules, which is kept with its records. The rule as first written is the fault."),
  genericTable([1600, 4300, 3800], ["Version", "PHEQA's business rule on a change of name", "Where its authority comes from"], [
    ["1.0, as first written", "When an institution applies to change its name, the registration officer writes the new name into the register of institutions.", "None stated."],
    ["1.1, as corrected on 10 February 2027", "An institution's new name is written into the register of institutions only on the minister's approval of that name, received from MoEYS. Until then the register keeps the present name.", "Article 26(1) of Progressa's Higher Education Regulations: a change of name needs the minister's approval. The register of what was asked records it as entry R-07."]
  ]),
  P("Who confirms. The Registrar of PHEQA, who accepted the records with their business rules, confirms that the fact is PHEQA's and that version 1.1 states it. The correction is made in that document and nowhere else."),
  P("What the change makes stale. The program that lists stale documents follows everything made from version 1.0 of the rule, and everything made from those. The list below is the one the storyboard expects for PHEQA's documents; it is built for this example and is not the output of a run."),
  genericTable([3300, 3300, 3100], ["Document", "Why it is on the list", "What is done with it"], [
    ["PHEQA's shared groundwork", "Made from the records with their business rules, version 1.0 of the rule among them: it holds the states of a request to change a name and the moves between them", "The move that writes the new name gains its condition, the minister's approval received; accepted again by the Registrar"],
    ["PHEQA's goal: apply to change an institution's name", "Made from version 1.0 of the rule", "Read again against version 1.1; its promise that the register keeps the present name until the approval arrives is stated; agreed again"],
    ["PHEQA's goal: write an approved new name into the register", "Made from version 1.0 of the rule", "Its first step now waits for the minister's approval received from MoEYS; agreed again"],
    ["The screens of those two goals", "Made from a stale goal", "Brought into line: the officer's action to write the new name appears only when an approval has arrived"],
    ["The walk-throughs of those two goals", "Made from stale screens", "Produced again by the program; never corrected by hand"],
    ["PHEQA's interaction design", "Made from version 1.0 of the rule: it settles how a request moves between states", "The move that writes the new name gains its condition; accepted again by the Registrar"],
    ["PHEQA's application model, the one file a program reads", "Made from stale documents", "Written again by the assistant; reviewed and approved again by the head of the ICT unit of PHEQA"],
    ["PHEQA's working application", "Generated from the old model", "Generated again; the read-back finds nothing stale and nothing edited by hand"]
  ]),
  P("Not on the list. MoEYS's goal G-12 and every other document of MoEYS's application. None of them was made from PHEQA's register of business rules; MoEYS's own documents already say that the minister approves a new name."),
  P("What to look for before you approve a change. Ask which document owns the fact, and who owns that document. Ask for the list of what the change makes stale before any work starts, and for the same list, empty, before the change is accepted."),

  H3("Storyboard of the demonstration segment — 6.2"),
  P("This storyboard stands in the place of the demonstration segment until it is recorded; nothing in it has been run. It needs both application models and the applications generated from them, which do not yet exist. When the run is recorded, the script gains one sentence that states its result and its date."),
  genericTable([700, 3000, 3000, 3000], ["Step", "What is done", "What the viewer sees", "What counts as a pass"], [
    ["1", "Harbourview University College's request to change its name is received in PHEQA's application.", "The request, with the present name and the name proposed.", "The register of institutions still shows the present name."],
    ["2", "The request is followed to MoEYS, before any correction.", "The officer's screen at PHEQA offering to write the new name before the minister has approved it.", "The fault is shown on the screen it was noticed on, and nothing is changed there."],
    ["3", "PHEQA's register of business rules is opened and the rule on a change of name is corrected.", "Version 1.0 of the rule beside version 1.1, and the Registrar's confirmation.", "The correction is made in the register of business rules and nowhere else."],
    ["4", "The program that lists stale documents is run on PHEQA's documents.", "The list of stale documents, each with the reason it is there.", "The list names every document and file the change reaches, as the worked example sets them out, and no document of MoEYS."],
    ["5", "The documents on the list are produced again, in order: the shared groundwork, the two goals, their screens, the walk-throughs, the interaction design, the model.", "Each document with its new version, and the acceptance of each.", "Each is accepted again by the person who accepted it before."],
    ["6", "PHEQA's application is generated again from the corrected model.", "The read-back of the generated application against the model.", "Nothing stale and nothing edited by hand."],
    ["7", "On the running service, an officer opens the request before and after the minister's approval arrives from MoEYS.", "Before the approval, no action to write the new name; after it, the new name written and the present name kept as history.", "The register changes only on the approval."],
    ["8", "The program that lists stale documents is run again.", "An empty list.", "After regeneration, none is stale."]
  ])
);

// ---------- 6.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 6.3",
  title: "Read where the work stands from the work",
  runtime: "~5 min",
  words: 456,
  paeraAnchor: "None. The content is the SDD method's own: progress read from the work, and the trace report a program produces from the application model; no public source is cited",
  singleMessage: "Progress is a report the programs produce from the documents, never a figure someone remembers.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Read where the work stands from the work'. Voice-over begins." },
    { text: "A minister asks how far the new service has come. The supplier answers with a percentage. Nobody in the room can check it, and nobody can say what the rest of the work is." },
    { cue: "Slide 2 — Title: 'Read from the work, never remembered'. Body, three text rows: 'A figure someone remembers cannot be checked.' 'A report a program produces from the documents can be produced again.' 'Ask for the report, with its date.'" },
    { text: "The SDD method has a plain rule for this: where the work stands is read from the work, never remembered. Every document of the method is written in a fixed form, and each one records what it was made from. So programs can read the documents and report what is there and what is still missing. A percentage given at a progress meeting cannot be checked by anyone. A report produced from the documents can be produced again, by anyone, and it gives the same answer. Ask for that report, with its date, instead of a figure." },
    { cue: "Slide 3 — Title: 'The trace report'. Body, three text rows: 'Every entry of what was asked.' 'Followed to its goal, its screens, the part generated for it and its check.' 'Every entry not yet traced to the end, listed by name.'" },
    { text: "The most useful report for a manager is the trace report. A program produces it from the one file a program reads. It takes every entry of the register of what was asked, and follows it to the goal that serves it, to the screens of that goal, to the part of the application generated for it, and to the acceptance check written for it. Then it lists, by name, every entry that is not yet traced to the end, and says where each one stops. That list is your real progress: what is not yet done, said exactly." },
    { cue: "Slide 4 — Title: 'MoEYS's trace report (illustrative)'. Body, a plain-text table of four rows: 'Deciding a licence — goal, screens, generated part, acceptance check.' 'Approving a change of name — goal, screens, generated part, acceptance check.' 'Publishing the list in the Gazette — goal, screens; nothing generated yet.' 'Reviewing a decision of PHEQA — goal, screens, generated part; no acceptance check yet.'" },
    { text: "Here is an example built for Progressa. The head of the ICT unit at the ministry of education, MoEYS, reads the trace report of the ministry's application. Deciding a licence and approving a change of name are traced to the end. Publishing the list of institutions in the Gazette has its goal and screens, but nothing is generated for it yet. The review of a decision at a person's request is generated, but no acceptance check has been written for it. From that report, the head of ICT writes the minister's status on one page, in plain words, with the date of the report beside every figure." },
    { cue: "Slide 5 — Title: 'Three rules that keep the report honest'. Body, three text rows: 'A gap stays open and counted until it is closed.' 'A check is never changed to make its number look better.' 'An empty column is information.'" },
    { text: "Three of the method's rules keep such a report honest. A gap stays open and counted. It is never signed off just to make a report look complete. A check is never changed to make its number look better. And an empty column is information. It is often the most useful thing on the page. These rules matter most when progress is slow, because that is when a figure is most tempting to round up. When a supplier's report has no empty cell anywhere, ask what was left out of it." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Progress is a report the programs produce from the documents, never a figure someone remembers.' Below it, the on-screen practice box (not narrated)." },
    { text: "Ask for the report the programs produce from the documents, with its date. Read the list of what is not yet traced, and take your figures from it." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Read where the work stands from the work'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "The rule. Three text rows.",
      "The core payload. Text-only."],
    ["3", "The trace report. Three text rows.",
      "What a manager reads in it. Text-only."],
    ["4", "MoEYS's trace report. A plain-text table of four rows: entry, and how far it is traced.",
      "The worked example, built for Progressa; every value illustrative. Text-only."],
    ["5", "Three rules. Three text rows.",
      "Three of the method's nineteen rules that always hold. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."]
  ],
  practice: "a one-page status of no more than 300 words",
  aiTip: {
    title: "Write the minister's one-page status from the trace report",
    problem: "The trace report is exact but long. This prompt reads it and writes a one-page status for the minister in plain words, in which every figure is taken from the report and carries the report's date.",
    prompt: "Below is the trace report of [name of the application], produced on [date]: [paste the report]. Write a one-page status for the minister. Say, in plain words: how many entries of the register of what was asked are traced from end to end; which entries are not yet traced, and at which step each one stops; what waits on a decision by a person in the ministry, with that person's role. Take every figure from the report, and give the date of the report beside it. Do not estimate a figure, a percentage or a date that the report does not contain; if the minister would expect a figure the report does not give, write that the report does not give it. Output: a one-page status of no more than 300 words, followed by the list of the figures used, each with the line of the report it comes from.",
    io: "Input: the trace report of the application, with its date. Output: a one-page status of no more than 300 words, followed by the list of the figures used, each with the line of the report it comes from.",
    safeguard: "Check every figure in the status against the line of the report the list names, and against the date of the report. A figure the prompt cannot find in the report is left out, never estimated."
  },
  metadataRows: [
    ["Working title",          "Read where the work stands from the work"],
    ["YouTube-optimised title", "Reading progress on a digital service from the work itself: the trace report and the minister's status"],
    ["Description (60 words)", "A percentage given at a progress meeting cannot be checked. This video shows how the SDD method reads progress from the documents: the trace report follows every entry of what was asked to its goal, screens, generated part and check, and lists what is not yet done. Shown on the ministry's application in Progressa. An AI prompt writes the minister's status."],
    ["Tags",                    "progress reporting, traceability, trace report, specification-driven development, SDD method, digital government, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§4.1 (the governance of the work, with its validation); §4.5 (implementation plans: progress read from the work); §4.6 (an example of the step's output); §4.3 (AI integration — status prompt)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited."]
  ]
}));
body.push(
  H3("Worked example — 6.3: MoEYS's trace report and the minister's status (illustrative)"),
  P("Written in this bundle for Progressa under rule B. The trace report of the education application has not been produced, because its application model does not yet exist; until it does, this example stands as a storyboard of what the report shows. The four entries and the four goals below are those the module 2 example of goals tied to entries gives MoEYS; where each entry stops, and every date, is invented."),
  P("The report's summary line, as the head of the ICT unit of MoEYS reads it: report of 15 March 2027; 4 entries of the register of what was asked, the four that MoEYS's goals serve; 2 traced to the end; 1 stops before generation; 1 stops before its acceptance check."),
  genericTable([2600, 1700, 1200, 1500, 1400, 1300], ["Entry of the register", "Goal", "Screens", "Generated part", "Acceptance check", "Where it stops"], [
    ["R-03 The minister decides the licence", "G-11 Decide on a licence", "3", "A form, a list and a step of the workflow", "Written", "Traced to the end"],
    ["R-07 A change of name needs the minister's approval", "G-12 Approve a change of an institution's name", "2", "A form and a list", "Written", "Traced to the end"],
    ["R-08 The minister publishes the list of registered institutions", "G-13 Publish the list of registered institutions in the Gazette", "2", "Not yet generated", "None", "Before generation"],
    ["R-05 A person aggrieved may ask the minister to review a decision", "G-14 Review a decision of PHEQA at a person's request", "3", "A form and a list", "Not yet written", "Before the acceptance check"]
  ]),
  P("The minister's status, written from the report. Status of the ministry's application on 15 March 2027, read from the trace report of that date. Of the 4 things asked of the ministry's application, 2 are traced from the register to a generated part of the application and to an acceptance check: deciding a licence and approving a change of an institution's name. One is designed, but nothing is generated for it yet: publishing the list of registered institutions in the Gazette. One is generated but has no acceptance check yet: the review of a decision of PHEQA at a person's request. Its check is to be written by the supplier and accepted by the Director of Higher Education. Whether each check passes on the running service is read from the record of its run, not from this report. Nothing in this status waits on a decision by the minister."),
  P("What to look for before you send a status upward. Every figure in it is in the report, and the report's date is beside it. If the status has a figure the report does not have, the figure was remembered, not read."),

  H3("On the written page — 6.3: six of the method's rules, chosen for a manager"),
  P("The method holds nineteen rules that always hold, short enough to be remembered. These six are the ones a manager holds a supplier to; the written guide gives them on one page, and the sheet for printing repeats them beside the three rules of subtopic 1.2. The choice of the six is this bundle's."),
  genericTable([700, 9000], ["#", "The rule, in plain words"], [
    ["1", "What a program generated is never edited by hand."],
    ["2", "A correction is made in the document that owns the fact, never in the document where the fault was noticed."],
    ["3", "A gap is a question with an owner, never something invented to fill it."],
    ["4", "Gaps stay open and counted. They are never signed off to make a report look complete."],
    ["5", "A refusal by a check is answered, not worked around."],
    ["6", "Where the work stands is read from the work, never remembered."]
  ])
);

// ---------- 6.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 6.4",
  title: "The AI assistant at every step, and the person who rules",
  runtime: "~5 min",
  words: 457,
  paeraAnchor: "None. The content is the SDD method's own: an assistant writes, a person reviews and approves or asks for adjustments, and every gap is recorded with its owner; no public source is cited",
  singleMessage: "The assistant drafts each document; a person rules on every proposal and every gap keeps its name.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The AI assistant at every step, and the person who rules'. Voice-over begins." },
    { text: "An AI assistant can draft a register of requirements in an afternoon. That speed is real. The question for a manager is who decides what the draft says, and what happens to everything the assistant did not know." },
    { cue: "Slide 2 — Title: 'The assistant drafts; a person rules'. Body, three text rows: 'The assistant proposes each entry, step or line.' 'A named person accepts, amends or sets aside each proposal.' 'Only what the person accepted stands.' Figure F4, slide variant (figures/slides/F4_who-writes-checks-accepts.png), stands on the slide in place of the rows." },
    { text: "The SDD method gives an assistant real work. It extracts the register of what was asked from your own documents. It drafts each goal as a story. It writes the one file a program reads. For each document a person writes, there is an assisting tool that walks that person through the document's standard, part by part. But no document is finished by an assistant alone. A named person reviews every proposal, and accepts it, amends it or sets it aside. Only what that person accepted stands in the document, with the person's name and the date." },
    { cue: "Slide 3 — Title: 'Every gap keeps its name'. Body, three text rows: 'The assistant does not fill a gap with a plausible answer.' 'It records a question, with the person who must answer it.' 'It never invents a figure to keep the work moving.'" },
    { text: "Inventing something plausible is what an assistant does best. That is why the method's most important rule binds it here. When your documents do not settle something, the assistant must not fill the gap. It records a question, with the name of the person who must answer it. It never invents a figure to keep the work moving, and it never quietly answers a decision that is still open. A draft that comes back with named questions is a good draft. A draft with no questions at all deserves a second, careful reading. Ask for the list of open questions with every draft." },
    { cue: "Slide 4 — Title: 'MoEYS's rules of use (illustrative)'. Body, five text rows: 'The assistant may draft the register, the stories and the model.' 'A named officer rules on every draft.' 'Every open question carries an owner.' 'No figure without its source.' 'The ministry's data stay within the tools the ministry allows.'" },
    { text: "Here is an example built for Progressa: the ministry of education's rules of use for an AI assistant, on one page. The assistant may draft the register, the stories and the model. A named officer rules on every draft, and the officer's name goes into the document. Every open question carries an owner. No figure enters a document without its source. And the ministry's data stay within the tools the ministry allows. The head of the ICT unit adopts the page, after it has been checked against the ministry's duties on personal data. It is short enough to keep beside every contract." },
    { cue: "Slide 5 — Title: 'What you check in an assisted document'. Body, three text rows: 'Whose name stands against each accepted part?' 'Which questions are open, and who owns each?' 'Is any figure without its source?'" },
    { text: "When an assisted document reaches you for acceptance, three questions are enough. Whose name stands against each part that was accepted? Which questions are still open, and who owns each one? And is there any figure without its source? If a part has no name against it, nobody in your organisation has ruled on it, and it is still only the assistant's proposal. The same holds for the one file a program reads: the person who approves it reads every assumption the assistant made, and sends each one back to the document it rests on." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The assistant drafts each document; a person rules on every proposal and every gap keeps its name.' Below it, the on-screen practice box (not narrated)." },
    { text: "Let the assistant draft each document. A named person rules on every proposal, and every gap stays a question with an owner." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The AI assistant at every step, and the person who rules'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.4) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Figure F4 (slide variant) in place of three text rows: the division of work.",
      "Figure F4, its slide variant (figures/slides/F4_who-writes-checks-accepts.png, drawn by the figure's own program in slide mode): who writes, who checks, who accepts, as three boxes in a row, the proposals going forward and the acceptance, amendment or setting aside coming back; only what was accepted stands; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["3", "Every gap keeps its name. Three text rows.",
      "Text-only."],
    ["4", "MoEYS's rules of use. Five text rows.",
      "The worked example, built for Progressa; the full page follows the script. Text-only."],
    ["5", "Three questions for the person who accepts. Three text rows, as questions.",
      "Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."]
  ],
  practice: "one page of rules of use, each rule with the paragraph of the policy it rests on",
  aiTip: {
    title: "Draft the rules of use for an AI assistant in your specification work",
    problem: "Teams often start using AI assistants before anyone has said what an assistant may write and who decides. This prompt drafts one page of rules of use for the ministry's specification work, from the ministry's existing policy on information.",
    prompt: "Below is [name of the ministry]'s existing policy on information and on the use of digital tools: [paste the policy]. Below is the list of the documents the ministry's specification work produces: [paste the list]. Draft one page of rules of use for an AI assistant in this work. Cover: (1) which documents the assistant may draft; (2) who rules on each draft, by role, and how the ruling is recorded in the document; (3) that the assistant marks every open question with the role that must answer it, instead of answering it; (4) that no figure enters a document without its source; (5) which information may be given to which tools, as the policy allows. Quote the paragraph of the policy each rule rests on. Where the policy says nothing on a point, write 'not covered by the policy' and do not invent a rule. Output: one page of rules of use, each rule with the paragraph of the policy it rests on, followed by the list of the points the policy does not cover.",
    io: "Input: the ministry's policy on information and the list of the documents its specification work produces. Output: one page of rules of use, each rule with the paragraph of the policy it rests on, followed by the list of the points the policy does not cover.",
    safeguard: "The draft is not a policy until the head of the unit adopts it, after it has been checked against the ministry's duties on personal data. Read each quoted paragraph in the policy itself before adoption."
  },
  metadataRows: [
    ["Working title",          "The AI assistant at every step, and the person who rules"],
    ["YouTube-optimised title", "Using an AI assistant to write a service specification: it drafts, a named person rules, every gap keeps its owner"],
    ["Description (60 words)", "An AI assistant can draft a register of requirements in an afternoon. This video shows how the SDD method uses that speed safely: the assistant drafts each document, a named person rules on every proposal, and every gap stays a question with an owner. Shown on a ministry's rules of use in Progressa. An AI prompt drafts the rules of use."],
    ["Tags",                    "AI assistant, AI governance, specification-driven development, SDD method, requirements, digital government, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§4.3 (AI across the steps of the method, with a practical example: AI is the subject of this subtopic); §4.1 (the roles of the method); §4.5 (governance structures: the rules of use)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited."]
  ]
}));
body.push(
  H3("Worked example — 6.4: MoEYS's rules of use for an AI assistant, on one page (illustrative)"),
  P("Written in this bundle for Progressa under rule B. The page is MoEYS's, for the specification of the ministry's own services; the roles are those of the KP4 fact sheet, and the date is invented."),
  P("MoEYS. Rules of use for an AI assistant in the specification of the ministry's services. Version 1.0."),
  genericTable([700, 9000], ["#", "Rule"], [
    ["1", "What the assistant may draft. The register of what was asked, each goal written out in full, and the application model. It may also help an officer fill in any other document of the method, part by part."],
    ["2", "Who rules. For every draft, a named officer of the Directorate of Higher Education accepts, amends or sets aside each proposal. The officer's name and the date stand in the document. Nothing the assistant wrote stands without that ruling."],
    ["3", "Gaps. Where the ministry's documents do not settle something, the assistant records a question, with the role that must answer it. It does not answer the question itself."],
    ["4", "Figures. No figure enters a document without its source: the law and its article, a setting with its owner, or a ruling of a named person."],
    ["5", "Data. The ministry's documents are given only to the tools the head of the ICT unit has listed as allowed. No record of a learner, an applicant or a member of staff is given to an assistant."],
    ["6", "Record. Each document says which of its parts an assistant drafted, and who ruled on them."]
  ]),
  P("Adoption. Adopted by the head of the ICT unit of MoEYS on 2 November 2026, after the page was checked against the ministry's duties on personal data. Owner of the page: the head of the ICT unit. A change to the page is adopted in the same way."),
  P("What to look for before you adopt such a page. Each rule names who acts. Rule 2 names a role in your ministry, never the supplier and never the assistant. And rule 5 says what may not be given to an assistant, not only what may.")
);

// ---------- 6.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 6.5",
  title: "The next service on the same foundation",
  runtime: "~5 min",
  words: 477,
  paeraAnchor: "PAERA v1.0, section 2.6; W3C, Verifiable Credentials Data Model v2.0, sections 1.2 and 4.13; GovStack Identity specification, version 2.0; GovStack Digital Registries specification, version 3.0-alpha; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 2023, pages 3 and 4",
  singleMessage: "The second service, a digital credential, reuses what the first one built and proved.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The next service on the same foundation'. Voice-over begins." },
    { text: "In Progressa, private institutions now register with the quality authority once, and the ministry reads that register instead of asking again. The next request is already on the table: graduates want proof of their degree that an employer can trust." },
    { cue: "Slide 2 — Title: 'Planning enables re-use'. Body, three text rows: 'A block paid for once can carry many services.' 'Inside one project, building your own looks faster.' 'Only someone who plans for the whole sector sees the sum.' Figure F5, slide variant (figures/slides/F5_sector-catalogue.png), stands on the slide in place of the rows." },
    { text: "Inside one project, building your own list of institutions or your own sign-in always looks faster. That is what a project is paid to do. Procurement rules can make each contract cheaper, but only whole-of-government planning makes re-use possible. The sum that makes re-use worth it, one block paid for and many services carried, exists only at the level of the sector. UNDP describes digital public infrastructure as a set of shared digital systems. PAERA, the GovStack reference architecture, says that digital public infrastructure is not neutral and shapes what can be built on top of it. The first service chose the foundation; the second one builds on it." },
    { cue: "Slide 3 — Title: 'The credential, one row of the catalogue'. Body, four text rows: 'Issue a learner's credential — owed by PDCA.' 'Reuses: PNIA's sign-in.' 'Reuses: PHEQA's register of institutions, read across Linkup.' 'Adds: the credential, kept in the graduate's wallet.'" },
    { text: "The second service is a digital credential for a graduate. It is already a row of Progressa's catalogue of services, owed by the digital credentials authority, PDCA, and the row shows what it rests on. The graduate signs in through the identity authority's sign-in, the same one the first service uses. PDCA reads the quality authority's register of institutions across Linkup, the data exchange, under the rules the register's keeper sets. One rule matters most: a credential is issued only for an institution whose licence is granted. PDCA keeps no copy of the register. None of these is built again." },
    { cue: "Slide 4 — Title: 'Three of the roles in the W3C standard'. Body, three text rows: 'The issuer gives the credential to the holder.' 'The holder keeps it, for example in a digital wallet.' 'The holder presents it, and the verifier checks it.'" },
    { text: "The one new block is the credential itself. Of the roles the W3C standard for verifiable credentials names, three matter here. The issuer, here PDCA, gives the credential to the holder, the graduate. The holder stores it in what the standard calls a credential repository: for a person, usually a digital wallet. When an employer needs proof, the graduate presents the credential, in what the standard calls a verifiable presentation, and the employer, as the verifier, checks it. UNDP's compendium on digital public infrastructure counts verifiable credentials among the trust services that come with digital identity." },
    { cue: "Slide 5 — Title: 'The same twelve documents, written once more'. Body, three text rows: 'PDCA's own register of what was asked, records, goals and screens.' 'Most crossings already exist.' 'Each reuse confirmed with the body that keeps the block.'" },
    { text: "The method does not change for the second service. PDCA's team writes the same twelve documents, in the same order, each accepted by a named person. What changes is the architecture. Most of its crossings already exist, and each one is confirmed with the body that keeps the block: the identity authority for the sign-in, the quality authority for the register. The second service pays for what it adds, the credential and the wallet, and not for the foundation the first one built. Each confirmation is written down before the plan is approved. For the minister, that is the argument in one line: the foundation is already paid for." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The second service, a digital credential, reuses what the first one built and proved.' Below it, the on-screen practice box (not narrated)." },
    { text: "The second service reuses the sign-in, the register and the exchange that the first one built and proved. It adds only the credential." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, section 2.6; W3C, Verifiable Credentials Data Model v2.0, sections 1.2 and 4.13; GovStack Identity specification, version 2.0; GovStack Digital Registries specification, version 3.0-alpha; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 2023, pages 3 and 4. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The next service on the same foundation'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Figure F5 (slide variant) in place of three text rows: planning enables re-use.",
      "Figure F5, its slide variant (figures/slides/F5_sector-catalogue.png, drawn by the figure's own program in slide mode): the sector's catalogue of services, each with the body that owes it and the blocks it rests on, the next service shown resting on the same foundation; boxes and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["3", "The catalogue row. Four text rows: the service, two reuses, one addition.",
      "The worked example, built for Progressa; the row and the reuse list follow the script. Text-only."],
    ["4", "Three of the roles of the W3C standard. Three text rows.",
      "W3C Verifiable Credentials Data Model v2.0, sections 1.2 and 4.13, in plain words. Text-only."],
    ["5", "The same twelve documents. Three text rows.",
      "Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA, the W3C standard, the two GovStack specifications and the UNDP compendium."]
  ],
  practice: "a reuse list of blocks and records with their keepers",
  aiTip: {
    title: "List what a new service can reuse, and what it must add",
    problem: "A new service is easier to plan, and cheaper, when its team can see which blocks and records already exist. This prompt reads the sector's catalogue of services and lists, for the new service, what it can reuse, on whose terms, and what it must add.",
    prompt: "Below is the sector's catalogue of services, each row with the body that owes the service, its state today and the blocks and records it rests on: [paste the catalogue]. Below is the description of a new service: [paste the description]. List, for the new service: (1) each block and record it can reuse, with the body that keeps it and the rows of the catalogue that already rest on it; (2) the conditions under which it may use each one, as the catalogue states them; (3) what it must add, which no row of the catalogue provides; (4) the bodies to consult before the plan is final. Use only what the catalogue says; where it does not say who keeps a block, write 'keeper not stated' and do not guess. Output: a reuse list of blocks and records with their keepers, a list of what the service must add, and the bodies to consult.",
    io: "Input: the sector's catalogue of services and the description of the new service. Output: a reuse list of blocks and records with their keepers, a list of what the service must add, and the bodies to consult.",
    safeguard: "The list is a proposal for the planning meeting. Each reuse is confirmed with the body that keeps the block or record, on that body's terms, before the plan relies on it."
  },
  metadataRows: [
    ["Working title",          "The next service on the same foundation"],
    ["YouTube-optimised title", "Building the next digital service on the same foundation: a graduate's credential that reuses identity and the register"],
    ["Description (60 words)", "A block paid for once can carry many services, but only someone who plans for the sector sees the sum. This video plans a second service, a graduate's digital credential, that reuses the identity sign-in, the register of institutions and the data exchange, and adds only the credential and the wallet. For managers. An AI prompt lists what your next service can reuse."],
    ["Tags",                    "re-use, building blocks, digital credentials, verifiable credentials, digital wallet, digital public infrastructure, GovStack, PAERA, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§3.4 (decompose services into reusable components; integrate digital identity, registries and digital wallets); §4.2 (international frameworks and standards: PAERA, GovStack, W3C, UNDP); §4.5 (roadmaps: the next service planned on the catalogue); §4.6 (an example of the output); §4.3 (AI integration — reuse prompt)"],
    ["PAERA citations",         "Section 2.6"],
    ["External-link list",      "PAERA v1.0, section 2.6 (https://paera.govstack.global/); W3C, Verifiable Credentials Data Model v2.0, W3C Recommendation, 15 May 2025, sections 1.2 and 4.13 (https://www.w3.org/TR/vc-data-model-2.0/); GovStack Identity specification, version 2.0 (https://specs.govstack.global/identity); GovStack Digital Registries specification, version 3.0-alpha (https://specs.govstack.global/registries); UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 21 August 2023, pages 3 and 4 (https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure)"]
  ]
}));
body.push(
  H3("Worked example — 6.5: PDCA's credential as a catalogue row, and its reuse list (illustrative)"),
  P("Written in this bundle for Progressa under rule B: a row of the catalogue and a list of what the service reuses and adds, not a build. The row is the one Progressa's catalogue of higher-education services already carries for the credential, with the column for the one block the service adds. ○ means the service will rest on the block when it is built; — means it does not need it."),
  genericTable([3200, 6500], ["Column of the catalogue", "PDCA's row"], [
    ["Service", "Issue a learner's credential"],
    ["Owed by", "PDCA"],
    ["State today", "Not offered; a graduate obtains a certified paper copy from the institution"],
    ["PNIA's sign-in", "○"],
    ["The register of institutions", "○ only while the institution's licence is granted"],
    ["Linkup", "○"],
    ["The Payments block", "—"],
    ["A digital wallet (the column the service adds)", "○ new: the credential is issued into the graduate's wallet"]
  ]),
  P("The reuse list, as PDCA's team takes it to the planning meeting."),
  genericTable([2300, 1400, 3800, 2200], ["What is reused", "Kept by", "On what terms", "Confirmed with"], [
    ["PNIA's sign-in", "PNIA", "The graduate signs in through PNIA. PDCA receives the identifier PNIA gives it for the graduate and never keeps the national number", "PNIA"],
    ["The register of institutions", "PHEQA", "Read across Linkup under the rules PHEQA sets; a credential is issued only for an institution whose licence is granted; PDCA keeps no copy of the register", "The Registrar of PHEQA"],
    ["Linkup, the data exchange", "PDGA", "PDCA joins as a member; PHEQA grants it the reading of the register", "PDGA"],
    ["The kinds of institution", "PHEQA", "Read from PHEQA's shared list; not copied", "The Registrar of PHEQA"],
    ["The twelve documents of the method, and their blank instruments", "PDCA's own team", "Written again for PDCA's service, in the same order, each accepted by a named person at PDCA", "Not a block: nobody else to confirm with"]
  ]),
  P("What the service adds, which no row of the catalogue provides."),
  genericTable([3600, 6100], ["What is added", "Why no existing row provides it"], [
    ["The credential, issued by PDCA to the graduate", "No service of the catalogue issues a credential"],
    ["The graduate's digital wallet, in which the credential is kept and from which it is presented", "No block of the catalogue holds credentials for a person"],
    ["The institution's confirmation that the person graduated, crossing from the institution to PDCA", "The register of institutions holds institutions, not graduates"],
    ["PDCA's own record of the credentials it has issued", "No register of the catalogue holds them"]
  ]),
  P("Planning enables re-use. Read the row beside the first service's: three of the four blocks the credential needs are paid for. The second service pays for the fourth, the wallet, and for its own records. That sum is visible only in the catalogue, which is kept for the whole sector and not for one project."),
  P("What to look for before you approve the plan of a second service. Each line of the reuse list names the body that keeps the block, and each says the block will be read on that body's terms. A line that says 'copy' is a register being built twice.")
);

// ---------- 6.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 6.6",
  title: "Carry the method to another sector",
  runtime: "~5 min",
  words: 463,
  paeraAnchor: "None. The content is the SDD method's own: the contract of a sector's reference pack, checked so that the method's tools hold no sector's content; no public source is cited",
  singleMessage: "The method holds no sector's content; another sector brings its own catalogue and its own records.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Carry the method to another sector'. Voice-over begins." },
    { text: "Another ministry, health or agriculture, sees the education team's results and asks to use the same method. Nothing in the method itself is about schools. What changes is the sector's own content, and the sector must bring it." },
    { cue: "Slide 2 — Title: 'What stays the same'. Body, four text rows: 'The twelve documents, in the same order.' 'The people who accept them, by role.' 'The checks at each step.' 'The rules that always hold.'" },
    { text: "Most of the method stays exactly as it is. The twelve documents stay, in the same order. The people who accept them stay, by role: the owner of the service, the head of the ICT unit, and the official who will live with the result. The checks stay, and so do the rules that always hold, such as no hand edits and an open question with a name on it. So do the blank instruments. The twelve documents give the business side and the builders one shared language, so a decision means the same thing in both rooms." },
    { cue: "Slide 3 — Title: 'What the sector brings'. Body, four text rows: 'Its own catalogue of services.' 'Its register of what was asked, from its own law.' 'Its records, and who keeps each one.' 'Its own reference pack.'" },
    { text: "The new sector brings its own content. It writes its own catalogue of services, owed by its own bodies. It writes the register of what was asked from its own law, not from education's. It names its own records, and who keeps each one. And it brings a reference pack: its usual procedures, reusable pieces of design, a checklist of what is realistic in that sector, and one finished example to compare against. A program checks that the pack is complete, and that the method's own tools hold nothing of any one sector. The pack is the sector's own, kept by the sector." },
    { cue: "Slide 4 — Title: 'Carry the method, not the results'. Body, three text rows: 'Nothing found in education is a fact about another sector.' 'Every example is rebuilt on the sector's own records and law.' 'The sector's officials correct every draft.'" },
    { text: "Carry the method, not the results. Nothing found in education is a fact about health or agriculture. Health has its own registers, its own law and its own officials. A sector's examples are rebuilt on its own records and its own law. An assistant can help adapt the examples, but every place where the sector's own law must be read is marked, and the sector's officials correct the drafts. Its officials know its law; the method only shows where to look. This course works through one sector only, education, because that is its demonstration. Another sector is described here as a list of what it brings, not as a worked case." },
    { cue: "Slide 5 — Title: 'Names before the first document'. Body, three text rows: 'Who owns the service in that ministry.' 'Who writes the sector's catalogue.' 'Which officials correct the adapted examples.'" },
    { text: "Before the new sector writes its first document, it names the people the method relies on. Who owns the service in that ministry, as the Director of Higher Education owns it in the ministry of education? Who writes the sector's catalogue of services, once, for all the bodies of the sector? And which officials will read the adapted examples against their own law and correct them? With those names written down, the twelve documents can begin, in the same order, accepted by the same kinds of person as before." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The method holds no sector's content; another sector brings its own catalogue and its own records.' Below it, the on-screen practice box (not narrated)." },
    { text: "The method holds no sector's content. Another sector brings its own catalogue, its own records and its own reference pack, and keeps the rest." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Carry the method to another sector'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.6) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "What stays the same. Four text rows.",
      "Carries the shared-language argument in one sentence. Text-only."],
    ["3", "What the sector brings. Four text rows.",
      "The core payload. Text-only."],
    ["4", "Carry the method, not the results. Three text rows.",
      "No second sector is worked through; the demonstration is education. Text-only."],
    ["5", "Names before the first document. Three text rows.",
      "Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."]
  ],
  practice: "the twelve examples adapted to the new service, with every place to be read in the sector's law marked",
  aiTip: {
    title: "Adapt the method's examples to a service of another sector",
    problem: "A team in another sector wants to use the method, but every example it has seen is about education. This prompt adapts the examples of the twelve documents to one service of the new sector, and marks every place where that sector's own law must be read.",
    prompt: "Below are the examples of the twelve documents of the specification-driven method, written for an education service: [paste the examples]. Below is a short description of a service in [the new sector], with the bodies that owe it: [paste the description]. Rewrite each example for the new service, keeping its form and replacing every name, record and value. Mark every place where the content depends on the new sector's law, policy or practice as [to be read in the sector's law: what must be read], and do not fill it in from education or from general knowledge. Do not carry any finding, figure or rule from education across. Output: the twelve examples adapted to the new service, with every place to be read in the sector's law marked, followed by the list of those places.",
    io: "Input: the examples of the twelve documents and the description of a service in the new sector. Output: the twelve examples adapted to the new service, with every place to be read in the sector's law marked, followed by the list of those places.",
    safeguard: "The adapted examples are drafts for that sector's officials to correct. Nothing in them is taken as that sector's law until an official of the sector has confirmed it."
  },
  metadataRows: [
    ["Working title",          "Carry the method to another sector"],
    ["YouTube-optimised title", "Carrying a service design method from education to another sector: what stays, and what the sector brings"],
    ["Description (60 words)", "Another ministry wants the method the education team used. This video shows what stays the same, the twelve documents, the people who accept them, the checks and the rules, and what the new sector brings: its own catalogue of services, its register from its own law, its records and its reference pack. For managers. An AI prompt adapts the examples to your sector."],
    ["Tags",                    "sector portability, specification-driven development, SDD method, digital government, health, agriculture, education"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§4.4 (a method that other sectors can use, without a worked example from another sector); §4.1 (the method as a whole); §4.3 (AI integration — adaptation prompt)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited."]
  ]
}));
body.push(
  H3("Worked example — 6.6: what another sector brings, and what stays the same (the team's blank instrument)"),
  P("The team's blank instrument: it names no country, no institution and no person. No second sector is worked through, because the demonstration of this course is education; the education example of the other subtopics is the only worked one. The answer column is left blank for the new sector to fill."),
  genericTable([2600, 5100, 2000], ["What the sector brings", "What it holds", "The sector's answer"], [
    ["Its catalogue of services", "Every service the sector's bodies owe, each with the body that owes it, its state today and the blocks it rests on, written once for the whole sector", ""],
    ["Its register of what was asked", "One entry for each separate thing its own law, mandate and requests ask for, in their own words", ""],
    ["Its records and their keepers", "The records its services keep, and for every fact whether the sector keeps it, takes it from another body, or must not hold it", ""],
    ["Its reference pack", "Its usual procedures; reusable pieces of design; a checklist of what is realistic in the sector, which its officials review; reference points to compare a design against; and one finished example. A program checks that the pack is complete", ""],
    ["The names before the first document", "Who owns the service; who writes the catalogue; which officials correct the adapted examples", ""]
  ]),
  genericTable([3600, 6100], ["What stays the same", "Why it does not depend on the sector"], [
    ["The twelve documents, and their order", "Each document is defined by what it is for, not by what it is about"],
    ["The people who accept them, by role", "The owner of the service, the head of the ICT unit and the official who will live with the result exist in every ministry"],
    ["The checks at each handover", "They compare one document with another, whatever the documents describe"],
    ["The rules that always hold", "No hand edits, a correction in the document that owns the fact, a question with an owner, progress read from the work"],
    ["The blank instruments", "They carry the lines of each document, not the sector's content"]
  ]),
  P("What to look for before another sector starts. Every line of the first table is answered by that sector, from its own law and its own officials. A line answered from education is a guess about health or agriculture until the sector's officials confirm it.")
);

// ---------- 6.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 6.7",
  title: "Before you rely on it: what the method does not claim",
  runtime: "~5 min",
  words: 478,
  paeraAnchor: "None. The content is the SDD method's own: what the method does not claim, and what it says is still missing; no public source is cited",
  singleMessage: "The method states its own limits, and a manager reads them before relying on it.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Before you rely on it: what the method does not claim'. Voice-over begins." },
    { text: "Before a ministry adopts any method for its next service, someone will ask what could go wrong with it. This method answers that question about itself, in writing. Read its answer before you rely on it." },
    { cue: "Slide 2 — Title: 'What the method does not claim'. Body, four text rows: 'That its standards have been shown to work well together.' 'That every standard has been tested by use.' 'That a program checks every step.' 'That it is cheap.'" },
    { text: "The SDD method states its own limits: seven things it does not claim. Four matter most to a manager. It does not claim that its standards have been shown to work well together: no analyst has yet been handed all of them and asked to produce a description from them. It does not claim that every one of its standards has been tested by use on a real project. It does not claim that a program checks every step: several of the most important handovers rest on a person. And it does not claim to be cheap. Twelve documents mean many places where a correction can be made, and only the discipline of correcting in the right place keeps that under control." },
    { cue: "Slide 3 — Title: 'What it says is still missing'. Body, three text rows: 'A standard of its own for accessibility.' 'A standard for services in more than one language.' 'Each missing piece has an owner.'" },
    { text: "The method also lists what it still lacks, each item with an owner. Two of them matter to a ministry. There is no standard of its own for accessibility, and none for delivering a service in more than one language. Both have a partial home in the rules for screens, but a service could still leave them out without anyone noticing. If your service must serve people with disabilities, or people in several languages, write that into the register of what was asked, so that every screen has to answer it. A need that is not in the register will not be built." },
    { cue: "Slide 4 — Title: 'The risk paragraph (illustrative)'. Body, four text rows: 'A briefing note to the minister on adopting the method.' 'The limits quoted as the method states them.' 'All seven quoted; none added.' 'Which bear on the service, and what the ministry will do.'" },
    { text: "Here is an example built for Progressa. The head of the ICT unit at the ministry of education writes a briefing note for the minister on adopting the method for the ministry's next service. Its risk paragraph quotes all seven limits as the method states them, adds none of its own, and leaves none out. It then says which of them bear on the ministry's service, and what the ministry will do: accessibility and languages, for example, go into the register of what was asked. The head of ICT signs the note. The minister then decides knowing the risks, not after discovering them." },
    { cue: "Slide 5 — Title: 'Why stated limits help you'. Body, three text rows: 'A method that hides its limits teaches the wrong lesson.' 'A stated limit can be planned around.' 'An unstated limit is found after the money is spent.'" },
    { text: "A list of limits can look like a weakness in a briefing. It is the opposite. The method itself says that a method which hides its own limits teaches the wrong lesson to everybody who reads it. A limit that is written down can be planned around: a check that rests on a person can be given a named reviewer, and a standard not yet tested by use can be watched more closely. A limit that nobody wrote down is found after the money is spent. That is why the list belongs in the briefing." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The method states its own limits, and a manager reads them before relying on it.' Below it, the on-screen practice box (not narrated)." },
    { text: "The method states its own limits. Read them, and put them in your briefing, before you rely on it." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Before you rely on it: what the method does not claim'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 6.7, supplementary) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four of the seven things the method does not claim. Four text rows.",
      "The method's own statement, in plain words. The standings of the standards are not stated in the video; the written page states them once. Text-only."],
    ["3", "What is still missing. Three text rows.",
      "Text-only."],
    ["4", "The risk paragraph. Four text rows.",
      "The worked example, built for Progressa; the paragraph follows the script. Text-only."],
    ["5", "Why stated limits help. Three text rows.",
      "Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."]
  ],
  practice: "a risk paragraph of no more than 200 words",
  aiTip: {
    title: "Write the risk paragraph of a briefing note on adopting the method",
    problem: "A briefing note on adopting a new way of working needs an honest paragraph on its risks. This prompt writes that paragraph from the method's own statement of its limits, without adding risks of its own.",
    prompt: "Below is the method's own statement of what it does not claim and what it still lacks, as the written page of this subtopic gives it: [paste the statement]. Below is a short description of the service the ministry plans to commission with the method: [paste the description]. Write the risk paragraph of a briefing note to the minister on adopting the method for this service. Quote each limit as the method states it, in its own words, and do not add any limit of your own. For each limit, say in one sentence whether it bears on this service and what the ministry can do about it. Output: a risk paragraph of no more than 200 words, followed by the list of the limits quoted, each with the words of the method it quotes.",
    io: "Input: the method's statement of its limits and a description of the planned service. Output: a risk paragraph of no more than 200 words, followed by the list of the limits quoted, each with the words of the method it quotes.",
    safeguard: "The paragraph quotes the limits as the method states them and adds none of its own. Compare each quotation with the statement before the note is sent; the author of the note signs it."
  },
  metadataRows: [
    ["Working title",          "Before you rely on it: what the method does not claim"],
    ["YouTube-optimised title", "What a service design method does not claim: reading its stated limits before your ministry relies on it"],
    ["Description (60 words)", "Before a ministry adopts a method for its next service, someone will ask what could go wrong. This video reads the SDD method's own statement of its limits: what it does not claim, and what it says is still missing, and shows how a manager puts them into a briefing note for the minister. Supplementary. An AI prompt drafts the risk paragraph."],
    ["Tags",                    "risk, briefing note, specification-driven development, SDD method, accessibility, digital government, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 6: Run the method in your administration"],
    ["ToR §4 coverage",         "§4.1 (the method as a whole, with its stated limits); §4.3 (AI integration — risk paragraph prompt)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited."]
  ]
}));
body.push(
  H3("Worked example — 6.7: the risk paragraph of MoEYS's briefing note (illustrative)"),
  P("Written in this bundle for Progressa under rule B. The note is from the head of the ICT unit of MoEYS to the minister, on adopting the method for the ministry's next service; its date is invented. It quotes all seven things the method says it does not claim, as the method states them, and what the method says it still lacks."),
  P("Risks. The method we propose states seven things it does not claim, and we quote all seven. It does not claim that the standards it rests on work well together: no analyst has yet been handed all of them and asked to produce a description from them. It does not claim that two of its standards, the register of requirements and the interaction design, are more than drafts, or that four of its standards in force, those for the records, the shared registers, the architecture and the application model, have been tested by use. It does not claim that any existing body of work conforms to anything. It does not claim that the order of its documents is the only defensible one; it claims that the order does not measure the design against itself. It does not claim that everything is checked: several of the most important handovers are not checked by a machine. It does not claim that the work written before its present version has been brought into its present shape. It does not claim to be cheap: twelve documents mean nine places a correction can land. It also names what it still lacks, among them a standard of its own for accessibility and one for delivery in more than one language. Four of the seven limits bear on our service, the first, the second, the fifth and the seventh: we will keep the review of every document, read most closely the documents whose standards are drafts or not yet tested by use, name a reviewer for each handover that a person checks, and budget for the twelve documents as deliverables. The other three do not bear on it, because our service starts from new documents, written in the method's present shape and in its order. What the method lacks bears on it too: our service must serve people with disabilities and must be offered in more than one language, so we will write both needs into the register of what was asked, and every screen will be checked against them. Signed: the head of the ICT unit, MoEYS, 19 January 2027."),
  genericTable([4800, 4900], ["The limit, as the method states it, shortened", "Whether it bears on MoEYS's next service"], [
    ["1. It does not claim that the standards it rests on work well together; no analyst has yet been handed all of them and asked to produce a description from them", "Yes: the ministry's team will be among the first to use them all together, and the review of each document is kept"],
    ["2. It does not claim that two of its standards, the register of requirements and the interaction design, are more than drafts, or that four standards in force have been tested by use", "Yes: the written page names the standards that are drafts and those not yet tested by use, and the documents written to them are read most closely"],
    ["3. It does not claim that any existing body of work conforms to anything", "No: the service starts from new documents, and the ministry relies on no earlier work's conformance"],
    ["4. It does not claim that the order of its documents is the only defensible one; it claims that the order does not measure the design against itself", "No: the ministry follows the order as the method gives it, and relies on no claim that another order is wrong"],
    ["5. It does not claim that everything is checked; several of the most important handovers are not checked by a machine", "Yes: a named reviewer for each handover a person checks"],
    ["6. It does not claim that the work written before its present version has been brought into its present shape", "No: every document of the service is written in the present shape from the start"],
    ["7. It does not claim to be cheap; twelve documents mean nine places a correction can land", "Yes: the budget carries the twelve documents as deliverables"],
    ["What it still lacks: a standard of its own for accessibility, and one for delivery in more than one language", "Yes: both needs are written into the register of what was asked"]
  ]),
  P("What to look for before you sign such a note. Each limit in it is one the method states, in the method's own words, and none is left out because it is awkward."),

  H3("On the written page — 6.7: the standing of each standard KP4 teaches, stated once"),
  P("The written guide states once, here and in no video, how far each standard behind the twelve documents has come. A draft is written for review and has not been approved. In force means approved for use. Not yet tested by use means the standard came into force before anyone used it on a real project."),
  genericTable([1600, 5000, 3100], ["Document", "The standard that governs it", "Its standing"], [
    ["All", "The method itself: the twelve documents, their order, the review and the rules that always hold", "In force"],
    ["Before the twelve", "The sector's catalogue of services", "Draft"],
    ["2", "The register of what was asked", "Draft"],
    ["3", "The records, with their glossary and business rules", "In force; not yet tested by use"],
    ["4", "The list of goals", "In force"],
    ["5", "The architecture", "In force; not yet tested by use"],
    ["6", "The shared lists, settings and states", "In force; not yet tested by use"],
    ["7", "One goal written out in full", "In force"],
    ["8 and 9", "The screens of a goal, and the walk-through produced from them", "In force"],
    ["10", "The interaction design", "Draft"],
    ["11", "The application model", "In force; not yet tested by use"],
    ["8", "The rules for screens officers use", "Its first page gives a version and a date, and states neither draft nor in force"],
    ["8", "The rules an assistant follows when it generates screens", "In force"]
  ]),

  H3("The module's self-check — four questions"),
  P("Four questions on what a manager decides, each drawn from the single message of the subtopics named beside it. Each has one answer the module supports; the answer follows the question."),
  genericTable([600, 3500, 4300, 1300], ["#", "Question", "The answer the module supports", "Drawn from"], [
    ["1", "A supplier's offer promises a working system and full documentation. What do you write into the terms of reference instead?", "The twelve documents as deliverables, each with its blank instrument, the role in your organisation that accepts it and the check it must pass; and two clauses: the application is generated from the accepted model and never edited by hand, and every open question is delivered with an owner and a date.", "6.1"],
    ["2", "An officer sees that the service lets a new name into the register before the minister approves, and asks the builder to hide the button. What do you decide?", "The correction goes up to the document that owns the fact, the register of business rules, and its owner confirms it. A program lists what the change makes stale, and everything on the list is produced again; the screen changes only as a result.", "6.2"],
    ["3", "Your supplier reports the project as almost finished, and says the AI assistant drafted the last documents with no open questions. What do you ask for?", "The trace report, with its date and its list of entries not yet traced; and, for each assisted document, the name of the person who ruled on each part and the list of open questions with their owners. A draft with no questions deserves a second reading.", "6.3 and 6.4"],
    ["4", "Another body plans the next service, and its team proposes to build its own list of institutions and its own sign-in. What do you bring to the planning meeting?", "The sector's catalogue and a reuse list: the sign-in and the register already exist and are read on their keepers' terms; the new service adds only what no row of the catalogue provides, and is specified with the same twelve documents.", "6.5"]
  ])
);

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes", { pageBreakBefore: true }),

  H3("4.1 The split-screen usability test"),
  P("The bar for every video in Module 6 is the split-screen test: a manager watching the video on one half of the screen must be able to act on the other half. For Module 6, 'act' means draft the deliverables annex of a terms of reference, find the document that owns the fact a change touches, write the minister's status from a trace report, draft the rules of use for an AI assistant, list what a new service can reuse, adapt the method's examples to another sector, or write the risk paragraph of a briefing note. Each subtopic's AI usage tip carries that action, and the on-screen practice box on the recap slide names it."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template of the Knowledge Products and Video Materials Guide: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only: no images, no icons, no emblems, no logos of any authority or company. A plain-text table is used only where the worked example needs one: slide 5 of subtopics 6.1 and 6.3. The figures the plan names for this module, F3 (the twelve documents in order, for 6.1), F4 (who writes, who checks, who accepts, for 6.4), F5 (the sector's catalogue, for 6.5) and F13 (correct up, generate down, for 6.2), belong to the written guide and do not appear on the slides. The single-sentence summary slide uses 28pt body type and carries the subtopic's single message word for word."),

  H3("4.3 No individuals on screen"),
  P("No individual appears in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over. The choice is ITU's; the scripts are written for either. The demonstration segment of 6.2, when recorded, shows the screen only, with Progressa's invented records and no real person's data."),

  H3("4.4 Voice and tone"),
  P("Direct address, plain English at about the eighth-grade level, short sentences. The Strategist register leads with what the listener can require, accept or take to a minister. The documents of the method are named by what they are for, never by a folder, a number or a rule identifier; the application model is called 'the one file a program reads', and the interaction design 'the decisions settled once for the whole application'. The SDD method is named as such, and none of its files is cited. Each video stands on its own, with no reference to another video."),

  H3("4.5 What the scripts claim, and what they do not"),
  P("Nothing is generated in this module, and no application of the education demonstration exists on the date of this bundle. No script, slide or metadata line says that anything runs. The demonstration segment of 6.2 says what the recording will show and what counts as a pass, and its storyboard stands in its place until it is recorded. Every name, date and figure about Progressa is invented and is said to be illustrative on the slide and in the voice-over. The stale list of 6.2 and the trace report of 6.3 are examples built for Progressa, not the output of a run. The standing of each standard is stated once, on the written page of 6.7, and in no video."),

  H3("4.6 The worked examples, and where they live"),
  P("No worked example of Module 6 existed before this bundle. The deliverables annex (6.1), the change of an institution's name with its stale list and its storyboard (6.2), the trace report and the minister's status (6.3), the rules of use for an AI assistant (6.4), the catalogue row and the reuse list of the credential (6.5), the instrument of what another sector brings (6.6), and the risk paragraph (6.7) exist in this bundle only; the blank instruments the annex names are kept in the written guide's toolkit and are not copied here. They use the names of the KP4 fact sheet, KP4-DSD/examples/E0_progressa-fact-sheet.md, and the identifiers the examples of modules 1 to 3 already give: the institution INS-00217, the entries R-03, R-05, R-07 and R-08, the goals G-11 to G-14, and the crossing X-5."),

  H3("4.7 External links and 'Find the link in the description'"),
  P("No address is read aloud. Only subtopic 6.5 cites external sources; its external-link list feeds the description of its video. The other six videos carry no external link. The aggregate list is in Section 6."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting of version 0.1 raised the items below. They are recorded for the team and for discussion with ITU at the weekly call."),

  H3("5.1 Source claims to keep under watch"),
  P("The UNDP compendium is cited for subtopic 6.5 at pages 3 and 4, as the plan names them. In the published file the page numbers printed on those pages are 3 and 4: page 3 describes digital public infrastructure as a set of shared digital systems, and page 4, headed 'Understanding DPI', sets out digital identity, with verifiable credentials among its trust services, digital payments and consent-based data sharing. The plan's row for subtopic 2.1 says that the printed numbers are 4 and 5; the file shows otherwise. The W3C standard's section 1.2 says that holders store their credentials in credential repositories; the word wallet is the standard's own example of such a repository, in its definition of the term, and the script says 'usually a digital wallet' on that ground."),

  H3("5.2 Examples written in this bundle"),
  P("Every example of Module 6 is written in this bundle (section 4.6). The choices made in them are open to correction: the new name of Harbourview University College, Coastland University College; the wording of PHEQA's business rule on a change of name before and after its correction, and the article that is its authority, article 26(1) of the Higher Education Regulations, which neither the fact sheet nor the examples of module 2 number; where each of the four entries of MoEYS's trace report stops, and its dates; the six rules of MoEYS's page of rules of use; and the role of an officer of the Directorate of Higher Education at MoEYS's reviews, which the fact sheet does not name. PHEQA's two goals in the change of name are named by their words and carry no G-number, because the list of goals of subtopic 2.4 does not yet number them."),
  P("The six rules for a manager on the written page of 6.3 are this bundle's choice among the method's nineteen. The plan asks that six be chosen and does not say which."),

  H3("5.3 Editorial calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'That fix is the one that brings the problem back later' (6.2); 'A draft with no questions at all deserves a second, careful reading' (6.4); 'A limit that nobody wrote down is found after the money is spent' (6.7)."),
  P("The project's standing rules ask for African signposts. No accepted research has read a public source on an African country's practice for the matters of this module, so none is named; the examples are Progressa's throughout."),

  H3("5.4 Dependencies"),
  P("The demonstration segment of 6.2 needs both application models of the education demonstration and the applications generated from them, which do not yet exist; it is recorded in the round the plan sets for the recordings. The trace report of 6.3 is produced from the ministry's application model once it exists, and the example of 6.3 is replaced by it, recast in Progressa. Figures F3, F4, F5 and F13 are drawn for the written guide; none is drawn in this bundle."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the seven subtopics for ITU's video production pipeline, to be split by subtopic into the description of each video. Every source is public, and each is one the KP4 outline and content plan, version 0.2, names for its subtopic, at the edition it names."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["6.1", "None. The content is the SDD method's own."],
    ["6.2", "None. The content is the SDD method's own."],
    ["6.3", "None. The content is the SDD method's own."],
    ["6.4", "None. The content is the SDD method's own."],
    ["6.5", "PAERA v1.0, section 2.6 — https://paera.govstack.global/; W3C, Verifiable Credentials Data Model v2.0, W3C Recommendation, 15 May 2025, sections 1.2 and 4.13 — https://www.w3.org/TR/vc-data-model-2.0/; GovStack Identity specification, version 2.0, December 2025 — https://specs.govstack.global/identity; GovStack Digital Registries specification, version 3.0-alpha, June 2026 — https://specs.govstack.global/registries; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 21 August 2023, pages 3 and 4 — https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure"],
    ["6.6", "None. The content is the SDD method's own."],
    ["6.7", "None. The content is the SDD method's own."]
  ]),
  spacer(120),
  P("All references are public and can be checked by any reader.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP4 Module 6 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP4 Module 6 (Designing Digital Government Services using a Building Block Approach — Run the method in your administration), written on the KP4 outline and content plan version 0.2 and aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP4 Module 6 Script Bundle v0.1 · 4 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP4_Module6_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
