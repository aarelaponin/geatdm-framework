// Build KP4 Module 4 — Video Script Bundle v0.1
// Designing Digital Government Services using a Building Block Approach · Module 4 — Settle the whole application
//   once, then describe it for the machine (Architect register).
// v0.1 (4 Oct 2026): written on the KP4 outline and content plan, version 0.2,
//   section 1, module 4. Each subtopic's single message is the plan's, word for word;
//   every public source cited is one the plan's version 0.2 names for that subtopic, at the edition it names; the
//   worked example of each subtopic is written here from the plan's "Worked example" row, under rule B, with the names
//   of the KP4 fact sheet (KP4-DSD/examples/E0_progressa-fact-sheet.md), recast from the education application.
// What exists: the ministry's interaction design of the education application (reviewed, not accepted) and the licence's
//   states in the authority's shared groundwork. The authority's interaction design and both application models are not
//   written, so the examples of 4.4, 4.5 and 4.6 are storyboards, and the one demonstration segment (4.6) is a
//   storyboard (section 4.8). No script, slide or metadata line says that anything is generated, has run or has passed.
// Sources: GovStack Workflow (site default edition, label 23Q4, version history to 1.0), sections 3 and 4.2; GovStack
//   Registration (site default edition, label 23Q4, version history to 1.0), sections 6.2.3 and 8.2; Joget DX 9
//   Knowledge Base (the DX9 edition, listing release 9.0.7): Form Builder, List Builder, UI Builder, Process Builder.
//   Subtopics 4.1, 4.2, 4.5 and 4.6 cite no public source: their content is the SDD method's own, presented as such.
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors KP1 to KP3) ----------
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

// Persona for KP4 Module 4 (Architect throughout, as the plan's module table sets it).
const PERSONA_A = "A (Architect) — the team that has the service specified and built: the head of a ministry's ICT unit, the service owner's project lead or the counterpart to the supplier, who accepts the interaction design and has the application model reviewed; no knowledge of data models, configuration files or the command line is assumed";

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
// The practice field names the artefact the AI tip produces; the deck builder and bundle_to_md place it on the recap
// slide as the on-screen practice box. It is never narrated.
function renderSubtopic({ num, title, runtime, words, paeraAnchor, singleMessage,
                         scriptBeats, slideSpecRows, aiTip, metadataRows, practice, persona = PERSONA_A }) {
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
    children: [new TextRun({ text: "KP4 — Designing Digital Government Services using a Building Block Approach",
      font: ARIAL, size: 30, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 200 },
    children: [new TextRun({ text: "Module 4 — Settle the whole application once, then describe it for the machine",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Module 4 of KP4"],
    ["Version",             "v0.1 — written on the KP4 outline and content plan, version 0.2, of 4 October 2026"],
    ["Date",                "4 October 2026"],
    ["Module persona",      PERSONA_A],
    ["Subtopics",           "Six subtopics (4.1 – 4.6), each shipped as one standalone video of about five minutes"],
    ["Module runtime",      "Approximately 30 minutes across six standalone videos"],
    ["Worked examples",     "One for each subtopic, built for Progressa and recast from an education application specified with the method. The examples of 4.4, 4.5 and 4.6 stand as storyboards until that application's models are written"],
    ["Demonstration segment", "One (4.6), written as a storyboard in section 4.8 until it can be recorded"],
    ["Self-check",          "Four questions on what a manager decides, drawn from the six single messages (section 2.1)"],
    ["Prepared by",         "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 4 of KP4 — Designing Digital Government Services using a Building Block Approach. Module 4 takes a service whose goals and screens are agreed one goal at a time and settles the whole application once: how officers pick a value, find a record, move a case from one state to the next and act on a record, with long lists chosen by category and the service workflow written once. It then carries everything agreed into the one file a program reads, has that file reviewed for what it assumed and what it could not express, and shows a program refusing a file that contradicts what the owner accepted. The register is plain English at about an eighth-grade level; technical terms are explained in plain words on first use, and each subtopic leads with what the listener can do. The six videos are numbered 4.1 to 4.6 and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the six video scripts of Module 4 of Knowledge Product 4 (Designing Digital Government Services using a Building Block Approach), with slide specifications, metadata, AI usage tips, the module's self-check, production notes and the storyboard of its one demonstration segment. It is the v0.1 working draft, written on the KP4 outline and content plan, version 0.2, whose section 1 fixes each subtopic's single message, sources, worked example and AI usage tip."),
  P("Module 4 carries two requirements of section 3.4 of ITU's terms of reference. It carries the design of service workflows at the level of the whole application: the interaction design, which settles once how officers pick, find, move and act, and the service workflow, its states, its moves and who may make each. And it carries the implementation of services on a low-code platform up to the point of generation: everything agreed is carried into one file a program reads, the file is reviewed for what it assumed and what it could not express, and a program refuses it if it contradicts what the owner accepted. The content is the specification-driven development (SDD) method, presented at a manager's level: the scripts name each document by what it is for, and give no rule numbers, commands or file formats."),

  H3("1.2 How the module is taught before anything is built"),
  P("Every worked example is built for Progressa, the fictional country of these knowledge products, from an education application specified with the method: its structure, its goals and its crossing between two bodies are kept, and every name and value is replaced. On the date of this bundle, that application's ministry has an interaction design written and reviewed but not yet accepted, and its authority's shared groundwork declares the states of a licence; the authority's interaction design and the application models of both bodies are not yet written, and nothing has been generated. The examples of 4.1, 4.2 and 4.3 are recast from what exists. The examples of 4.4, 4.5 and 4.6 are storyboards: they show what the document or the check will show, and the scripts never say that a model exists in that application, that anything was generated, or that a check has run. The demonstration segment of 4.6 is a storyboard (section 4.8). When the models are written and the check has run, each storyboard is replaced by the extract or the recording, and the script gains one sentence that states the result and its date."),

  H3("1.3 The names used for Progressa"),
  genericTable([2400, 7300], ["Name", "What it is, and its part in Module 4"], [
    ["PHEQA", "The Progressa Higher Education Quality Authority. It keeps the register of institutions, licenses private institutions and advises the minister. Its licence is the case whose service workflow 4.3 shows."],
    ["MoEYS", "Progressa's ministry of education. Its application reads PHEQA's register and never keeps a copy; its interaction design is the example of 4.1 and 4.2, and its application model the example of 4.4 to 4.6."],
    ["Linkup", "The data exchange layer of Progressa, set up in KP2. MoEYS reads PHEQA's register across it, and the minister's decisions reach PHEQA across it."],
    ["The minister", "Decides a licence on PHEQA's recommendation, decides a suspension or cancellation, and approves a change of an institution's name."],
    ["The Director of Higher Education", "MoEYS's official who accepts its documents, including its interaction design, and rules on the assumptions and losses of its application model."],
    ["The head of the ICT unit of MoEYS", "Approves MoEYS's application model once every assumption and loss has a ruling."],
    ["The registration officer", "PHEQA's officer who records each decision that moves a licence from one state to another."],
    ["The supplier", "The private company that writes most of the documents and builds the application; the analyst who writes the interaction design is the supplier's."]
  ]),

  H3("1.4 How to read this document"),
  P("Section 2 gives Module 4 at a glance, with the module's self-check of four questions. Section 3 holds the script of each subtopic: shaded blocks are on-screen cues, plain paragraphs are the voice-over, and the slide specification, AI usage tip and metadata follow. Section 4 collects the production notes, with the storyboard of the demonstration segment of 4.6. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 4 at a glance"),
  P("Six standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty minutes. Each video has a single message, quoted word for word from the KP4 outline and content plan version 0.2, and is discoverable on its own; the playlist provides navigation but is not needed to understand any one video."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Runtime"], [
    ["4.1", "Four questions decided once for every screen",
      "How officers pick, find, move and act is settled for the whole application in one document you accept.", "~5 min"],
    ["4.2", "No list longer than nine: choose by category",
      "A long list is divided into categories, and the officer picks the category first.", "~5 min"],
    ["4.3", "The service workflow: states, moves and who may make each",
      "Every state a case can be in, every move between states, and who may make each move, written once.", "~5 min"],
    ["4.4", "One file a program reads: the application model",
      "Everything agreed is carried into one file, from which the application is generated.", "~5 min"],
    ["4.5", "Reviewing the model: what it assumed, and what it could not express",
      "Every assumption and every loss is named for a person to rule on.", "~5 min"],
    ["4.6", "Refused, not worked around",
      "A program refuses a description that contradicts what you accepted, and nobody switches the check off.", "~5 min"]
  ]),

  H3("2.1 The module's self-check"),
  P("Four questions for the manager who commissions the service, judges the supplier and convenes the review. Each is drawn from the single messages named beside it and asks what the manager decides, not what an analyst writes. The answer beside each question says what a good answer contains; it is for the learner to compare with, after answering."),
  genericTable([500, 3700, 1000, 4500], ["#", "Question", "Drawn from", "What a good answer says"], [
    ["1", "Your officials have agreed the screens of every goal, one goal at a time. The supplier now wants to describe the application for the machine. What do you ask to accept first, and what must it settle?",
      "4.1, 4.2",
      "One document, the interaction design, accepted in writing before anything is described for the machine. It settles for the whole application how officers pick a value, find a record, move a case and act on a record, and it divides every list longer than nine into categories the officers recognise, the category picked first."],
    ["2", "A supplier's design lets an officer change a licence from any state to any other on one screen. What do you ask for before you accept it?",
      "4.3",
      "The service workflow written once: every state, every move between states, and who may make each move, each 'who' taken from the law. A move nobody is entitled to make is struck out, and a state that cannot be left is either intended or corrected."],
    ["3", "An AI assistant has written the one file from which your application will be generated. The supplier asks you to approve it. What must you see first, and where does a 'no' go?",
      "4.4, 4.5",
      "A plain-sentence reading of the file, checked against what was agreed, and every assumption and every loss as a card in plain words, each with a ruling, yes or no, recorded with a name and a date. A 'no' goes back to the document that owns the fact, never into the file by hand, and the file is written again."],
    ["4", "Two days before a deadline, a program refuses the supplier's file and the supplier asks you to have the check switched off. What do you decide?",
      "4.6",
      "No. Nobody switches the check off. The refusal names the row it disagrees with; either the file is corrected to match what was accepted, or, if the decision should change, the owner accepts a revised interaction design and the file names it. Either way, the check runs again."]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 4.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 4.1",
  title: "Four questions decided once for every screen",
  runtime: "~5 min",
  words: 510,
  paeraAnchor: "None: the content is the SDD method's own (the interaction design)",
  singleMessage: "How officers pick, find, move and act is settled for the whole application in one document you accept.",
  practice: "a table of the places where pick, find, move or act is still open",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Four questions decided once for every screen'. Voice-over begins." },
    { text: "Your officials have agreed the screens of each goal, one goal at a time. Four questions are still open, because each crosses many screens. If you do not settle them in one document, the program that builds the application settles them for you." },
    { cue: "Slide 2 — Title: 'Four questions no single goal can answer'. Body, four text rows: 'Pick — how an officer chooses a value from a list.' 'Find — how she finds one record among many.' 'Move — how a case goes from one state to the next, and who may move it.' 'Act — what opens, and what is filled in, when she acts on a record.' Figure F10, slide variant (figures/slides/F10_four-questions.png), stands on the slide in place of the rows." },
    { text: "The first question is how an officer picks a value from a list, such as the kind of licence. The second is how she finds one record among many, such as one institution among hundreds. The third is how a case moves from one state to the next, and who may move it. The fourth is what happens when she acts on a record: which screen opens, and what is already filled in. No single goal can answer these. One list serves many goals, and one case is moved by the acts of several goals." },
    { cue: "Slide 3 — Title: 'One document, settled once'. Body, three text rows: 'Each goal's screens were agreed on their own.' 'Left open, the four questions are settled by default, screen by screen.' 'The interaction design settles them once; you accept it before the application is described for the machine.'" },
    { text: "Each goal's screens were agreed on their own, so nobody has yet looked across them. Left open, the four questions get answered by default while the application is built, and often differently on different screens. The method closes that gap with one document, the interaction design. One analyst writes it from the agreed screens of every goal. You, or the person you name, accept it. Only then is the application described for the machine. A decision settled once is re-used by every screen that needs it." },
    { cue: "Slide 4 — Title: 'MoEYS: pick and find'. Body, three text rows: 'Pick — seven lists. Each is fixed by Progressa's Higher Education Regulations. MoEYS keeps none.' 'Find — an institution is found by a search of PHEQA's register, never from a list of every institution.' 'Most often — a list of what waits for the officer; she picks a row.'" },
    { text: "Here is how MoEYS, Progressa's ministry of education, answered the first two questions for its application. To pick a value, an officer uses seven lists. Each is held elsewhere, fixed by Progressa's Higher Education Regulations. MoEYS keeps none, so no screen of its application changes a list. To find an institution, she searches PHEQA's register by name or register number. She never scrolls a list of every institution. Most of the time she does not search at all: she opens the list of what waits for her, and picks a row." },
    { cue: "Slide 5 — Title: 'MoEYS: move and act'. Body, three text rows: 'Move — no record of this application has states. A decision is written once; a correction is a new version.' 'Act — the record she acts on is carried into the screen that opens, filled in and locked.' 'Menu — every entry sits in one of five categories: Licences; Names, the list and reviews; Suspension and cancellation; The Gazette; Requests for review.'" },
    { text: "The third answer is short. No record of this application has states. A decision is written once, and a correction is a new version, so nothing moves. An institution's standing is shown as PHEQA's register gives it, and is never changed here. The fourth answer covers every act that opens another screen. The record she acted on is carried into that screen, filled in and locked, so she never types it again. Every menu entry sits in one of five categories, from Licences to Requests for review." },
    { cue: "Slide 6 — Title: 'Who accepts it, and what she reads'. Body, three text rows: 'Written by: one analyst of the supplier.' 'Read by the owner: a short answer, a table for each question, and sample pages to click.' 'Accepted by: the Director of Higher Education at MoEYS, with her name and the date.'" },
    { text: "The Director of Higher Education at MoEYS accepts the document. She reads a short answer, a table for each question, and a few sample pages that show each answer working. She does not read every screen again. Where the goals were silent, the analyst writes a recommended answer, and she agrees it or changes it. Her acceptance is written into the document with her name and the date. Everything described for the machine afterwards is measured against what she accepted." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'How officers pick, find, move and act is settled for the whole application in one document you accept.'" },
    { text: "Before the application is described for the machine, ask for the one document that settles pick, find, move and act. Click its pages, then accept it in writing." },
    { cue: "Slide 8 — Title: 'Sources'. Body: 'The specification-driven development (SDD) method: the interaction design. No external source is cited.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Four questions decided once for every screen'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 4.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Figure F10 (slide variant) in place of four text rows: pick, find, move, act, each with one line.",
      "Figure F10, its slide variant (figures/slides/F10_four-questions.png, drawn by the figure's own program in slide mode): the four questions as four panels, each with MoEYS's answer under it; the four words stay in the same order on every slide of the module that uses them; boxes and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["3", "Three text rows: screens agreed one goal at a time; the questions settled by default if left open; the one document that settles them.",
      "Text-only."],
    ["4", "Three text rows: MoEYS's answers to pick and find.",
      "Progressa's names as the plan gives them. No logos, no emblems."],
    ["5", "Three text rows: MoEYS's answers to move and act, with the five menu categories named.",
      "The five category names in plain text, in the order shown."],
    ["6", "Three text rows: who writes, what the owner reads, who accepts.",
      "Roles, never persons' names."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide: the SDD method; no external source.",
      "Says plainly that the content is the method's own."]
  ],
  aiTip: {
    title: "Find where the four questions are still open",
    problem: "The screens of every goal are agreed, one goal at a time, and the interaction design is about to be written. The manager needs to see, before the analyst starts, every place where the agreed screens leave pick, find, move or act open, so that nothing is settled by default.",
    prompt: "Below are the agreed screens of every goal of [the application] in [your ministry], each screen with its values and its buttons [paste them]. Read them together, not one goal at a time. For each of four questions, list every place where the screens leave it open: (1) PICK — a value chosen from a list, where the screens do not say which list, who keeps it, or how many values it offers; (2) FIND — a record chosen from many, where the screens do not say whether it is searched for or picked from a list, or by what; (3) MOVE — a case whose state changes, where the screens do not say which act moves it, from which state to which, or who may make the move; (4) ACT — a button that opens another screen, where the screens do not say what it carries into that screen or what is filled in and locked. For each place give the goal, the screen, the question, and the exact words of the screen that leave it open. Do not answer any question and do not propose an answer. Output: a table of the places where pick, find, move or act is still open, sorted by question, then a count for each question.",
    io: "Input: the agreed screens of every goal, as written. Output: a table of the places where pick, find, move or act is still open, each with its goal, its screen and the words that leave it open.",
    safeguard: "The prompt reads only the screens you paste and must propose nothing. If it offers an answer, strike it out: each open place is answered by the analyst who writes the interaction design and accepted by its owner, not settled by the prompt."
  },
  metadataRows: [
    ["Working title",          "Four questions decided once for every screen"],
    ["YouTube-optimised title", "Before your application is built: settle how officers pick, find, move and act"],
    ["Description (60 words)", "Each goal's screens are agreed one at a time, so four questions stay open: how an officer picks a value, finds a record, moves a case on, and acts on it. See how Progressa's ministry of education settles all four once, in one document its director accepts. For service owners and ICT heads. AI prompt for finding the open questions in the description."],
    ["Tags",                    "interaction design, service design, low-code, specification-driven development, SDD, education services, building blocks, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 4: Settle the whole application once, then describe it for the machine"],
    ["ToR §4 coverage",         "§3.4 (design service workflows, for the whole application); §4.1 (a step of the method, with who writes it, who accepts it and how it is checked); §4.3 (AI integration — the open-questions prompt); §4.5 (the service workflow, as the four questions; figure F10 of the written guide); §4.6 (a real-life example of the step's output, simulated for Progressa)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited in this subtopic."]
  ]
}));

// ---------- 4.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 4.2",
  title: "No list longer than nine: choose by category",
  runtime: "~5 min",
  words: 480,
  paeraAnchor: "None: the content is the SDD method's own (the rule that a long list is chosen by category)",
  singleMessage: "A long list is divided into categories, and the officer picks the category first.",
  practice: "a list of categories, none holding more than nine values, each with a plain name",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'No list longer than nine: choose by category'. Voice-over begins." },
    { text: "Ask an officer to pick one value from a list of twenty, and she scrolls, reads, and sometimes picks the neighbour. The method has a plain rule for this, and it costs nothing to apply while the application is designed." },
    { cue: "Slide 2 — Title: 'The rule'. Body, four text rows: 'No step of a choice offers more than nine values. Seven is the aim.' 'A longer list is divided into categories of no more than nine.' 'The officer picks the category first, then the value.' 'More than nine categories: add a level above them.'" },
    { text: "No step of a choice offers more than nine values, and seven is the aim. A longer list is divided into categories, each holding no more than nine values. The officer picks the category first, then the value inside it. If a list ever needs more than nine categories, another level is added above them. The categories are a list like any other: they have names, someone keeps them, and each new value is placed in one of them when it is added." },
    { cue: "Slide 3 — Title: 'Why nine'. Body, three text rows: 'A short list is read at a glance.' 'A long list is scrolled, and the wrong value is one line away.' 'Two short choices are faster and safer than one long one.'" },
    { text: "Why should this matter to you? An officer reads a short list at a glance and finds her value. A long list must be scrolled, and the wrong value is always one line away. A wrong value chosen on a busy day sends a file to the wrong desk, and nobody notices until someone asks where it went. Two short choices are faster and safer than one long one, and the officers who use the screens every day will tell you so." },
    { cue: "Slide 4 — Title: 'Who decides the categories'. Body, three text rows: 'Not a program: it cannot know how your officers think about a list.' 'Written once, in the interaction design, for the whole application.' 'Confirmed by the officers who use the list.'" },
    { text: "Who decides the categories? Not a program. A program can count the values, but it cannot know how your officers think about them. So the categories of each long list are decided once, in the interaction design, the one document that settles how officers use the whole application. The analyst proposes them, and the officers who use the list confirm that each value sits where they would look for it. After that, the program that checks the application's description refuses a long list with no categories." },
    { cue: "Slide 5 — Title: 'Progressa: the matters PHEQA advises on'. Body, a plain-text table of three rows: 'Licences — 8 matters, such as a provisional licence for a university.' 'Suspension and cancellation — 7 matters, such as suspending a full licence.' 'Other matters — 5 matters, such as a change of an institution's name.' Footer line: '20 matters, 3 categories, no step longer than 8.'" },
    { text: "Here is the one long list in the application of MoEYS, Progressa's ministry of education. PHEQA, the quality authority, advises the minister on twenty kinds of matter, from a provisional licence for a university to a change of an institution's name. Twenty is too many for one step. So the list has three categories: licences, with eight matters; suspension and cancellation, with seven; and other matters, with five. No category holds more than nine, and each name is one the officers of MoEYS already use." },
    { cue: "Slide 6 — Title: 'Two steps on the screen'. Body, three text rows: 'Step 1 — on the list of PHEQA's advice that waits for the minister, the officer picks the category: Suspension and cancellation.' 'Step 2 — seven matters appear; she picks: suspending a full licence.' 'The list now shows only the advice on that matter.'" },
    { text: "Here is where the officer meets it. She opens the list of PHEQA's advice that waits for the minister's decision, and she wants only the advice on suspending a full licence. First she picks the category, suspension and cancellation. Seven matters appear, and she picks the one she wants. The list now shows only that advice. She never saw all twenty at once, and she never scrolled past a value she did not need." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A long list is divided into categories, and the officer picks the category first.'" },
    { text: "When a screen offers a long list, ask how it is divided. No step should offer more than nine values, and the officers who use it should agree the categories." },
    { cue: "Slide 8 — Title: 'Sources'. Body: 'The specification-driven development (SDD) method: the rule that a long list is chosen by category. No external source is cited.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'No list longer than nine: choose by category'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 4.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four text rows: the rule.",
      "The core payload. 'Nine' and 'seven' as numerals are allowed."],
    ["3", "Three text rows: why nine.",
      "Text-only."],
    ["4", "Three text rows: who decides the categories.",
      "Text-only."],
    ["5", "Plain-text table of the three categories with their counts and one example each; footer line with the totals.",
      "The full list of twenty, by category, is in the written guide, not on the slide: a slide that showed all twenty would break the rule it teaches. Licences (8): a provisional licence for a university, for a university college, for a technical institute; a full licence for each of the three; a provisional licence extended; a licence for a new campus. Suspension and cancellation (7): suspending a provisional licence; suspending a full licence; cancelling a provisional licence; cancelling a full licence; ending a suspension; a notice of intention to suspend or cancel; closing an institution at its own request. Other matters (5): a change of an institution's name; the list of registered institutions for the Gazette; a change of an institution's kind; a review of PHEQA's standards for new institutions; advice on a question the minister puts to PHEQA."],
    ["6", "Three text rows: the two steps on the screen and the result.",
      "Shown as two short text boxes side by side, labelled 'Step 1' and 'Step 2'; labels in plain text only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide: the SDD method; no external source.",
      "Says plainly that the content is the method's own."]
  ],
  aiTip: {
    title: "Divide a long list into categories",
    problem: "A list of more than nine values is about to reach a screen. Before the interaction design is accepted, the analyst needs a first proposal of categories, each with a plain name, to put to the officers who use the list.",
    prompt: "Below is a list of values that officers in [your ministry] choose from on a screen, one value per line, with any note on what each means [paste the list]. Below that is a short description of who uses the list and for what [paste it]. Divide the list into categories so that no category holds more than nine values, and aim for about seven. Give each category a plain name an officer would recognise. Place every value in exactly one category; do not change, merge, add or drop any value. If more than nine categories are needed, propose a second level above them. Mark any value you could place in two categories, with the two you considered. Output: a list of categories, none holding more than nine values, each with a plain name and the values under it, followed by the values marked as hard to place.",
    io: "Input: the list of values, and who uses it for what. Output: a list of categories, none holding more than nine values, each with a plain name, with the values that were hard to place marked.",
    safeguard: "The categories are a proposal. Show them to the officers who use the list and ask each one where they would look for five or six of the values; a value they would look for elsewhere is moved. The list of values itself is changed only by its owner, never by the prompt."
  },
  metadataRows: [
    ["Working title",          "No list longer than nine: choose by category"],
    ["YouTube-optimised title", "No list longer than nine: how officers choose from long lists by category"],
    ["Description (60 words)", "An officer asked to pick one value from twenty scrolls, reads and sometimes picks the wrong one. The rule is simple: no step offers more than nine values, and a longer list is divided into categories the officers recognise. See Progressa's ministry of education divide twenty matters into three categories. For service owners. AI prompt for dividing a long list in the description."],
    ["Tags",                    "interaction design, long lists, categories, screen design, low-code, specification-driven development, SDD, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 4: Settle the whole application once, then describe it for the machine"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: how an officer chooses on every screen); §4.3 (AI integration — the categories prompt); §4.4 (demonstration in the education sector: the matters PHEQA advises on)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited in this subtopic."]
  ]
}));

// ---------- 4.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 4.3",
  title: "The service workflow: states, moves and who may make each",
  runtime: "~5 min",
  words: 474,
  paeraAnchor: "GovStack Workflow (site default edition, label 23Q4) §3 and §4.2; GovStack Registration (site default edition, label 23Q4) §6.2.3 and §8.2",
  singleMessage: "Every state a case can be in, every move between states, and who may make each move, written once.",
  practice: "a table of states and moves, each move with who may make it and its source",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The service workflow: states, moves and who may make each'. Voice-over begins." },
    { text: "A licence, an application, an appeal: each is a case that passes through stages. If nobody writes those stages down once, every screen invents its own, and the law ends up enforced on some screens and not on others." },
    { cue: "Slide 2 — Title: 'Three things, written once'. Body, three text rows: 'States — every stage a case can be in.' 'Moves — every step from one state to another.' 'Who — the person who may make each move, and on what decision.'" },
    { text: "The service workflow is three things, written once for the whole application. The states are every stage a case can be in. The moves are every step from one state to another; a move that is not written down cannot happen. And for each move, the workflow names who may make it, and on what decision. Every screen then offers only the moves the workflow allows, and only to the people it names." },
    { cue: "Slide 3 — Title: 'What the published specifications say'. Body, three text rows: 'A process: linked activities, each a step done by a person or a machine.' 'A workflow block runs the process: started by another system, by a click, or by the passage of time.' 'An officer decides on an application: approve, reject, or send back for correction.' Footer: 'GovStack Workflow and Registration specifications.'" },
    { text: "The GovStack specifications give the same picture. The Workflow specification describes a process as a set of linked activities, each a step done by a person or by a machine. It asks a workflow block to run a process, not only to draw it: started by another system, by a person's click, or by the passage of time. The Registration specification gives an officer three decisions on an application: approve it, reject it, or send it back for correction. Its interface lets officers list the tasks that wait for them and complete each one. Find the link in the description." },
    { cue: "Slide 4 — Title: 'PHEQA: the states of a licence'. Body, a plain-text table of three rows: 'Granted — the institution may operate.' 'Suspended — it may not admit new students until the suspension ends.' 'Cancelled — it may no longer operate under this licence.'" },
    { text: "Here is the one case in Progressa's example that has states: an institution's licence at PHEQA, the quality authority. It has three. Granted: the institution may operate. Suspended: it may not admit new students until the suspension ends. Cancelled: it may no longer operate under this licence. These three are written once, in the groundwork every goal shares, and every goal that touches a licence reads them from there." },
    { cue: "Slide 5 — Title: 'The moves, and who may make each'. Body, a plain-text table of four rows: 'None → granted: the minister decides to grant; the registration officer records it.' 'Granted → suspended or cancelled; suspended → cancelled: the minister decides; the registration officer records it.' 'Suspended → granted: the minister decides to end the suspension, on PHEQA's advice; the registration officer records it.' 'Cancelled → the state it held before: a decision on appeal or on review sets the cancellation aside.' Figure F11, slide variant (figures/slides/F11_licence-workflow.png), stands on the slide in place of the rows." },
    { text: "Now the moves. A licence is granted when the minister decides to grant it, as Progressa's Higher Education Regulations provide, and the registration officer records the decision. It is suspended or cancelled on the minister's decision, recorded the same way, and a suspension is ended the same way, on PHEQA's advice. A cancellation is undone only by a decision on appeal or on review that sets it aside. Nobody moves a licence because a screen allows it. Every move rests on a decision someone is entitled to make." },
    { cue: "Slide 6 — Title: 'The check: can every state be left?'. Body, three text rows: 'A state that cannot be left is a dead end.' 'Cancelled looks like one.' 'But a cancellation set aside on appeal or on review returns the licence to the state it held before: no state is a dead end.'" },
    { text: "One check is worth asking for: can every state be left? A state that cannot be left is a dead end, and sometimes that is intended. Cancelled looks like one. But an institution may appeal, and a person may ask the minister to review a decision. If the cancellation is set aside, the licence returns to the state it held before. So no state is a dead end, and the drawn workflow shows the way out." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Every state a case can be in, every move between states, and who may make each move, written once.'" },
    { text: "Ask for the service workflow on one page: every state, every move, and who may make each move. Check each move against the law, and look for dead ends." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Workflow Building Block specification (23Q4 edition), sections 3 and 4.2; GovStack Registration Building Block specification (23Q4 edition), sections 6.2.3 and 8.2. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The service workflow: states, moves and who may make each'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 4.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Three text rows: states, moves, who.",
      "The core payload."],
    ["3", "Three text rows paraphrasing the GovStack Workflow (sections 3 and 4.2) and Registration (section 6.2.3) specifications, with a footer naming them.",
      "Paraphrased, not quoted; the sources slide gives the sections. The Workflow specification's own word 'state' means the data a process starts with, so the slide does not use it for that specification."],
    ["4", "Plain-text table: the three states of a licence, each with its meaning.",
      "Progressa's names as the plan gives them."],
    ["5", "Figure F11 (slide variant) in place of a plain-text table of four rows: the moves, each with who decides and who records it.",
      "Figure F11, its slide variant (figures/slides/F11_licence-workflow.png, drawn by the figure's own program in slide mode): the states of a licence as boxes, the moves as numbered arrows, and under them who may make each move; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["6", "Three text rows: the dead-end check, and why cancelled is not one.",
      "Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Draft the states and moves of a case",
    problem: "A team is about to design the screens of a service whose case passes through stages, and nobody has written the stages, the moves between them and who may make each. The manager needs a first draft to put to the legal officer and the owner of the service.",
    prompt: "Below are the stories of the goals of a service in [your ministry] that touch one kind of case, such as a licence or an application [paste the stories]. Below that are the articles of the law or regulation that govern that case [paste them]. Draft the case's service workflow. (1) List every state the case can be in, each with one sentence saying what it means for the people involved. (2) List every move from one state to another, with the goal and the act that makes it. (3) For each move, name who may make it and on what decision, quoting the article that says so; where no article says so, write 'NOT IN THE LAW' and do not guess. (4) List every state that cannot be left, and every state that no move reaches. Output: a table of states and moves, each move with who may make it and its source, followed by the two lists of step 4.",
    io: "Input: the stories of the goals and the articles that govern the case. Output: a table of states and moves, each move with who may make it and its source, with the states that cannot be left and the states no move reaches listed.",
    safeguard: "Who may make a move is a question of law, not of habit, so it is never inferred. Every name in the 'who' column must quote an article; a line marked 'NOT IN THE LAW' goes to the legal officer, and a state that cannot be left is confirmed as intended or corrected before the screens are designed."
  },
  metadataRows: [
    ["Working title",          "The service workflow: states, moves and who may make each"],
    ["YouTube-optimised title", "Design a service workflow: every state, every move, and who may make it"],
    ["Description (60 words)", "A licence is granted, suspended or cancelled, and each change rests on someone's decision. Write every state, every move and who may make each move once, and every screen follows it. See the licence workflow of Progressa's quality authority, checked against its regulations and for dead ends. For service owners and ICT heads. AI prompt for drafting states and moves in the description."],
    ["Tags",                    "service workflow, states, case management, GovStack Workflow, GovStack Registration, low-code, education services, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 4: Settle the whole application once, then describe it for the machine"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: states, moves and who may make each); §4.1 (a step of the method); §4.2 (international standards: GovStack Workflow and Registration); §4.3 (AI integration — the workflow prompt); §4.5 (service workflow diagrams: figure F11 of the written guide); §4.6 (a real-life example, simulated for Progressa)"],
    ["PAERA citations",         "None. This subtopic rests on the GovStack documents in the external-link list."],
    ["External-link list",      "GovStack Workflow Building Block specification (23Q4 edition), sections 3 and 4.2; GovStack Registration Building Block specification (23Q4 edition), sections 6.2.3 and 8.2"]
  ]
}));

// ---------- 4.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 4.4",
  title: "One file a program reads: the application model",
  runtime: "~5 min",
  words: 467,
  paeraAnchor: "Joget DX 9 Knowledge Base (the DX9 edition, listing release 9.0.7): the pages Form Builder, List Builder, UI Builder and Process Builder",
  singleMessage: "Everything agreed is carried into one file, from which the application is generated.",
  practice: "a plain-sentence reading of one section, with anything not agreed marked",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'One file a program reads: the application model'. Voice-over begins." },
    { text: "Your officials have agreed the stories, the screens, the lists and the workflow. All of it now has to reach the platform without anyone retyping it. The method carries it into one file, and a program builds the application from that file." },
    { cue: "Slide 2 — Title: 'What a low-code platform is made of'. Body, four text rows: 'Forms — the screens where people enter and read values.' 'Lists — the tables of records people search and open.' 'Menus — the user interface that leads to each form and list.' 'Processes — the steps of the work.'" },
    { text: "A low-code platform builds an application from four kinds of part. Forms are the screens where people enter and read values. Lists are the tables of records that people search and open. The user interface, with its menus, leads to each form and list. Processes are the steps of the work. The platform's own documentation describes a builder for each of the four. Find the link in the description." },
    { cue: "Slide 3 — Title: 'One file instead of a thousand clicks'. Body, four text rows: 'The usual way: a builder clicks each part together, working from the documents.' 'The method's way: one file, the application model, holds everything agreed.' 'A program generates the forms, lists, menus and processes from it.' 'A correction goes into the file, never into what was generated.' Figure F12, slide variant (figures/slides/F12_one-file-to-running-application.png), stands on the slide in place of the rows." },
    { text: "The usual way is for a builder to click each part together, working from the documents. Every click is a chance to drift from what was agreed. The method does it differently. One file, the application model, holds everything agreed: the records, the lists, the screens, the menus, the workflow, who may do what, and the tests. A program reads the file and generates the parts from it. If something is wrong, the file is corrected, never the parts." },
    { cue: "Slide 4 — Title: 'Nothing in the file is new'. Body, four text rows: 'Stories and screens → forms and lists.' 'The interaction design → how lists, searches, moves and acts behave; the file names it.' 'The service workflow → states and moves.' 'What cannot be placed → written down for a person to rule on.'" },
    { text: "Nothing in the file is new. Each goal's story and its screens become forms and lists. The interaction design you accepted decides how lists, searches, moves and acts behave, and the file names that document. The service workflow becomes the states and moves. The file is written by an AI assistant that must refuse to guess. When something cannot be placed cleanly, it is written down for a person to rule on, not quietly decided." },
    { cue: "Slide 5 — Title: 'MoEYS: one section, in plain sentences'. Body, five text rows: 'Goal: approve a change of an institution's name.' 'Starts from: PHEQA's advice on changes of name that waits for the minister.' 'Shows: the institution's present name, read from PHEQA's register across Linkup; the new name asked for; PHEQA's advice.' 'Decision: approve or do not approve, chosen, not typed.' 'Records: the approval, sent to PHEQA across Linkup; officers of MoEYS see it in the list of approvals.'" },
    { text: "Here is one section of MoEYS's file, for the goal 'approve a change of an institution's name', read in plain sentences. The minister opens the list of PHEQA's advice on changes of name that waits for a decision. On the screen, the institution's present name is read from PHEQA's register across Linkup, the data exchange, and never copied. The new name and PHEQA's advice come as PHEQA sent them. The decision is chosen, approve or do not approve, never typed. Recording it sends the approval to PHEQA, and officers of MoEYS see it in their list of approvals." },
    { cue: "Slide 6 — Title: 'Ask for it in plain sentences'. Body, four text rows: 'The file is written for a program.' 'Ask for a plain-sentence reading of each section beside it.' 'Your officials check the reading against the screens they agreed.' 'Where the two differ, the file is what gets built.'" },
    { text: "The file is written for a program, not for you. So ask the supplier for a plain-sentence reading of each section, beside the file. Your officials check the reading against the screens they agreed. Then the business side and the builder read the same thing, and a decision means the same in both rooms. Keep one thing in mind: where the reading and the file differ, the file is what gets built. Raise every difference before the file is approved." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Everything agreed is carried into one file, from which the application is generated.'" },
    { text: "Ask for the one file the application is generated from, and a plain-sentence reading of it. Check the reading against what your officials agreed." },
    { cue: "Slide 8 — Title: 'Sources'. Body: Joget DX 9 Knowledge Base, the pages Form Builder, List Builder, UI Builder and Process Builder. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'One file a program reads: the application model'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 4.4) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four text rows: forms, lists, menus, processes.",
      "The platform's own words for its builders are on the sources slide, not here. No product screenshots."],
    ["3", "Figure F12 (slide variant) in place of four text rows: the usual way, the method's way, generation, and where a correction goes.",
      "Figure F12, its slide variant (figures/slides/F12_one-file-to-running-application.png, drawn by the figure's own program in slide mode): from the accepted documents to the application model, through the check, to the running service, with the refusal and the correction drawn as arrows; boxes, arrows and words only, no imagery and no person on screen. The rows are its text equivalent. Calibration item: a drawn figure under ITU's text-only rule."],
    ["4", "Four text rows: where each thing in the file comes from.",
      "Arrows as the character '→' in plain text."],
    ["5", "Five text rows: one section of MoEYS's file in plain sentences.",
      "A storyboard until the application model of the education application from which the example is recast is written (section 1.2). No line of the file itself is shown: the slide shows the plain reading only."],
    ["6", "Four text rows: the plain-sentence reading, and the rule that the file is what gets built.",
      "Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Read one section of the model in plain sentences",
    problem: "The supplier has written the application model, a file meant for a program. Before it is approved, the official who owns a goal needs to read what that goal's section will build, in words, and to see anything in it that was never agreed.",
    prompt: "Below is one section of an application model for [your ministry], the part that covers the goal [name of the goal] [paste the section]. Below that are the screens of that goal as your officials agreed them [paste them]. Explain the section in plain sentences for an official who has never read such a file: what list the person starts from, what each screen shows and where each value comes from, what the person decides and how, what happens when it is recorded, and who may do each thing. Use the words of the agreed screens wherever they exist. Then compare the two: list every thing in the section that the agreed screens do not contain, and every thing in the screens that the section leaves out. Do not correct either. Output: a plain-sentence reading of one section, with anything not agreed marked, followed by the two lists of differences.",
    io: "Input: one section of the model and the agreed screens of its goal. Output: a plain-sentence reading of one section, with anything not agreed marked, and the differences listed in both directions.",
    safeguard: "The reading is an explanation, not the file. Check it against the agreed screens; where the reading and the file differ, the file is what will be generated, so every difference goes to the person who approves the model and is never settled by changing the reading."
  },
  metadataRows: [
    ["Working title",          "One file a program reads: the application model"],
    ["YouTube-optimised title", "From agreed screens to a low-code application: the one file a program reads"],
    ["Description (60 words)", "Stories, screens, lists and the workflow are agreed. Now all of it is carried into one file, the application model, and a program generates the platform's forms, lists, menus and processes from it. See one section of the ministry of education's application in Progressa, read in plain sentences. For service owners and ICT heads. AI prompt for reading a model section in the description."],
    ["Tags",                    "application model, low-code, Joget, code generation, specification-driven development, SDD, education services, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 4: Settle the whole application once, then describe it for the machine"],
    ["ToR §4 coverage",         "§3.4 (implement services on a low-code platform); §4.1 (a step of the method, with who writes it and who approves it); §4.2 (the platform's published documentation); §4.3 (AI integration — the plain-reading prompt; the assistant that writes the model); §4.5 (data models: what the file carries); §4.6 (a real-life example, simulated for Progressa)"],
    ["PAERA citations",         "None. This subtopic rests on the platform documentation in the external-link list."],
    ["External-link list",      "Joget DX 9 Knowledge Base (the DX9 edition, which lists release 9.0.7): the pages Form Builder, List Builder, UI Builder and Process Builder"]
  ]
}));

// ---------- 4.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 4.5",
  title: "Reviewing the model: what it assumed, and what it could not express",
  runtime: "~5 min",
  words: 478,
  paeraAnchor: "None: the content is the SDD method's own (the review of the application model)",
  singleMessage: "Every assumption and every loss is named for a person to rule on.",
  practice: "a list of yes-or-no questions, one for each loss, in the loss's own words",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Reviewing the model: what it assumed, and what it could not express'. Voice-over begins." },
    { text: "An AI assistant writes the file your application is generated from. It will meet things nobody wrote down, and things the platform cannot do. The question for you is simple: does it tell you, or does it quietly decide?" },
    { cue: "Slide 2 — Title: 'Four ways a thing reaches the file'. Body, four text rows: 'Placed directly — there is only one place it can go.' 'Placed by a judgement — written down as an assumption.' 'Cannot be placed — written down as a loss.' 'Stays in its own document — nothing is owed.'" },
    { text: "Everything agreed reaches the file in one of four ways. Most things are placed directly, because there is only one place they can go. Some need a judgement, and the judgement is written down as an assumption: what was decided, and on what ground. Some cannot be placed at all, because the platform has no way to express them. These are written down as losses. A few stay in their own document, and nothing is owed for them in the file." },
    { cue: "Slide 3 — Title: 'An assumption, and a loss'. Body, three text rows: 'Assumption — a decision the writer made where the documents were silent.' 'Loss — something agreed that the file cannot express, with what was done instead.' 'Never — a gap filled by invention, with nobody told.'" },
    { text: "An assumption is a decision the writer had to make because the documents were silent. A loss is something you agreed that the file cannot express, with what was done instead, if anything. Both are normal. What is not acceptable is a gap filled by invention, with nobody told. That is why the assistant must refuse to guess. A gap it names can be ruled on. A gap it fills in silently becomes a fault in the running service." },
    { cue: "Slide 4 — Title: 'The cards the owner reads'. Body, four text rows: 'One card for each assumption and each loss.' 'In plain words: what the application will do because of it.' 'The document it rests on.' 'The ruling: yes or no, with a name and a date.'" },
    { text: "You do not read the file. You read cards: one for each assumption and each loss. Each card says, in plain words, what the application will do because of it, and which document it rests on. The owner rules yes or no on each card, and the ruling is recorded with a name and a date. A 'no' is never typed into the file. It goes back to the document that owns the fact, and the file is written again from the corrected document." },
    { cue: "Slide 5 — Title: 'MoEYS: two cards'. Body, a plain-text table of two rows: 'Assumption — a change of name takes effect on the day the minister approves it. Ruling: yes.' 'Loss — the notice to the institution cannot be sent by the platform; it is kept as a task for an officer. Ruling: yes.' Footer line: 'Ruled by the Director of Higher Education, with her name and the date.'" },
    { text: "Here are two cards from the review of the file of MoEYS, Progressa's ministry of education. The first is an assumption: a change of name takes effect on the day the minister approves it, because the goal's story did not say. The second is a loss: the story asks that the institution is told, and the platform cannot send that notice by itself, so it is kept as a task for an officer. The Director of Higher Education rules yes on both, and her rulings are recorded." },
    { cue: "Slide 6 — Title: 'When the answer is no'. Body, four text rows: ''No' to an assumption → the goal's story is corrected.' 'The file is written again from the story.' 'The cards are read again.' 'Approval waits until every card carries a ruling.'" },
    { text: "Suppose she had said no to the first card, because a change of name should take effect only when it is published in the Gazette. Her answer would not be typed into the file. It would go back to the goal's story, the one document that owns that fact. The story is corrected, the file is written again, and the cards are read again. The head of the ICT unit approves the file only when every card carries a ruling." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Every assumption and every loss is named for a person to rule on.'" },
    { text: "Before the file is approved, ask for every assumption and every loss as a card in plain words. Rule on each one, and record who ruled and when." },
    { cue: "Slide 8 — Title: 'Sources'. Body: 'The specification-driven development (SDD) method: the review of the application model. No external source is cited.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Reviewing the model: what it assumed, and what it could not express'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 4.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four text rows: the four ways a thing reaches the file.",
      "The core payload."],
    ["3", "Three text rows: assumption, loss, and what is never acceptable.",
      "Text-only."],
    ["4", "Four text rows: what a card holds.",
      "A card may be drawn as one plain text box with four labelled lines; labels in plain text only."],
    ["5", "Plain-text table of two cards, each with its ruling, and a footer line naming who ruled.",
      "The two cards are illustrative, and the review is a storyboard until the application model of the education application from which the example is recast is written (section 1.2)."],
    ["6", "Four text rows: what happens to a 'no'.",
      "The Gazette date is a supposition in the voice-over, not a rule of Progressa; the slide does not state it."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide: the SDD method; no external source.",
      "Says plainly that the content is the method's own."]
  ],
  aiTip: {
    title: "Turn the losses into yes-or-no questions",
    problem: "The review of an application model produces a list of losses written for builders. The owner who must rule on them needs each one as a question that can be answered yes or no, in words that say what the running service will do.",
    prompt: "Below is the list of losses recorded for the application model of [the service] in [your ministry]: for each, what was asked, how it was handled instead, and the document it comes from [paste the list]. For each loss, write one question the owner of the service can answer yes or no. Keep the loss's own words for what was asked, in quotation marks. Then say in one plain sentence what the running service will do if the answer is yes, and in one sentence what must happen if the answer is no, naming the document that would be corrected. Do not answer any question, and do not merge two losses into one question. Output: a list of yes-or-no questions, one for each loss, in the loss's own words, each with its two consequences and the document it rests on.",
    io: "Input: the list of losses, each with what was asked, how it was handled and its document. Output: a list of yes-or-no questions, one for each loss, in the loss's own words, each with what yes and no would mean.",
    safeguard: "A question must keep the loss's own words; a question that softens or rewords what was asked can draw a 'yes' the owner did not mean. Record each answer with the owner's name and the date before the model is approved."
  },
  metadataRows: [
    ["Working title",          "Reviewing the model: what it assumed, and what it could not express"],
    ["YouTube-optimised title", "Reviewing an AI-written application model: rule on every assumption and every loss"],
    ["Description (60 words)", "An AI assistant writes the file your application is generated from, and it must refuse to guess. Every judgement it made becomes an assumption, and everything the platform cannot express becomes a loss, each on a card the owner rules on. See two cards from the review of Progressa's ministry of education. For service owners. AI prompt for turning losses into questions in the description."],
    ["Tags",                    "application model, AI assistant, review, assumptions, low-code, specification-driven development, SDD, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 4: Settle the whole application once, then describe it for the machine"],
    ["ToR §4 coverage",         "§3.4 (implement services on a low-code platform); §4.1 (a step of the method, with its decision point); §4.3 (AI integration — the assistant's assumptions and losses, and the question prompt); §4.6 (a real-life example, simulated for Progressa); §6 (demonstration materials: the review cards)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited in this subtopic."]
  ]
}));

// ---------- 4.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 4.6",
  title: "Refused, not worked around",
  runtime: "~5 min",
  words: 458,
  paeraAnchor: "None: the content is the SDD method's own (the check before generation)",
  singleMessage: "A program refuses a description that contradicts what you accepted, and nobody switches the check off.",
  practice: "a plain explanation of the refusal, naming the document to correct",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Refused, not worked around'. Voice-over begins." },
    { text: "Two days before a deadline, a program stops your supplier's build. The supplier asks for one favour: switch the check off, just this once. Your answer should already be written down, and it is no." },
    { cue: "Slide 2 — Title: 'What the program checks first'. Body, four text rows: 'Does the file name the interaction design you accepted?' 'Does that document say it was accepted, by a name, on a date?' 'Is it the same document, unchanged since then?' 'Does every list, search, move and act in the file match it?'" },
    { text: "Before anything is generated, built or installed, a program reads the file the application will be generated from, and asks four questions. Does the file name the interaction design you accepted? Does that document say it was accepted, by a name, on a date? Is it the same document, unchanged since it was accepted? And does every list, every search, every move and every act in the file match what the document decided? If any answer is no, the program refuses, and nothing is built." },
    { cue: "Slide 3 — Title: 'Nothing switches it off'. Body, four text rows: 'No setting.' 'No switch.' 'No exception for a deadline.' 'The check reads what the document says: your acceptance line is its evidence.'" },
    { text: "Nothing switches this check off. There is no setting, no switch, and no exception for a deadline. The check also cannot know that you accepted the document. It knows only that the document says so, and that the file agrees with it. That makes your acceptance line evidence. Write it exactly, with the name and the date, and never write it for a document nobody has read. A deadline does not change what was agreed; it changes only how soon the correction is needed." },
    { cue: "Slide 4 — Title: 'Answered, not worked around'. Body, three text rows: 'Either — correct the file to match what was accepted.' 'Or — if the decision should change, the owner accepts a revised interaction design, and the file names it.' 'Never — switch the check off, or edit what was built.'" },
    { text: "A refusal is answered, not worked around. There are two honest answers. Either the file is corrected to match what you accepted. Or, if the decision itself should change, the owner accepts a revised interaction design, and the file names that new version. Both leave a record of who decided what. Switching the check off leaves no record, and the same fault returns at the next build." },
    { cue: "Slide 5 — Title: 'MoEYS: one list of twenty, refused'. Body, four text rows: 'Accepted: the matters PHEQA advises on are chosen in three categories, of 8, 7 and 5.' 'The file: one list of twenty matters, no categories.' 'The program: refused. It names the interaction design and the row for that list.' 'Nothing is generated.'" },
    { text: "Here is how it looks for MoEYS, Progressa's ministry of education. The interaction design its director accepted says that the twenty matters PHEQA advises on are chosen in three categories, of eight, seven and five. A version of the file offers the officer all twenty in one list. The program refuses it before anything is built. The refusal names the document and the row it disagrees with, the row for that list, so the supplier knows exactly what to correct, and nobody has to guess." },
    { cue: "Slide 6 — Title: 'Corrected, and admitted'. Demonstration segment, storyboard until recorded (section 4.8): the check run on the version with one list of twenty, the refusal with the row named, the file corrected, and the check run again. Text-only stand-in until the recording exists: 'First run: refused — the row for the matters PHEQA advises on.' 'Correction: the three categories, as accepted.' 'Second run: admitted.'" },
    { text: "The correction is small. The list in the file is given the three categories the document decided, and the program reads the file again. This time it is admitted, and generation may begin. That is the whole demonstration: one run refused with the row named, one run admitted after the correction. Until it is recorded on a real application, this is a storyboard: the steps and what counts as a pass, written before anything is run." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A program refuses a description that contradicts what you accepted, and nobody switches the check off.'" },
    { text: "When the program refuses, do not ask who can switch it off. Ask which row it names, then correct the file or accept a revised decision." },
    { cue: "Slide 8 — Title: 'Sources'. Body: 'The specification-driven development (SDD) method: the check before generation. No external source is cited.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Refused, not worked around'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 4.6) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four text rows: the four questions the program asks first.",
      "The core payload. The drawn version, from the file to the running application with the check before it, is figure F12 of the written guide; the slide stays text-only."],
    ["3", "Four text rows: nothing switches the check off, and the acceptance line as evidence.",
      "Text-only."],
    ["4", "Three text rows: either, or, never.",
      "Text-only."],
    ["5", "Four text rows: the accepted decision, the file, the refusal, nothing generated.",
      "Progressa's names as the plan gives them. The refusal message itself is not shown; the slide says what it names."],
    ["6", "Demonstration segment (storyboard until recorded). Text-only stand-in of three short lines.",
      "Replaced by the recording of the 4.6 walkthrough when the application model and its accepted interaction design exist and the check can be run on them. Until then, nothing on this slide claims a run."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide: the SDD method; no external source.",
      "Says plainly that the content is the method's own."]
  ],
  aiTip: {
    title: "Explain a refusal in plain words",
    problem: "The program has refused the file the application is generated from, and its message is written for builders. The manager needs to know, in plain words, what disagrees with what was accepted and which document must change, so that the refusal is answered and not argued about.",
    prompt: "Below is the refusal message a program gave when it checked the application model of [the service] in [your ministry], exactly as printed [paste the message]. Below that is the row of the accepted interaction design that the message names [paste the row]. Explain in plain words: (1) what the file says; (2) what the accepted document decided; (3) why the two disagree. Then name the document to correct: the application model, if the file should follow the accepted decision; or the interaction design, if the decision itself should change, in which case say that its owner must accept it again before the check is run again. Do not suggest any way to skip, switch off or get round the check, and do not suggest editing anything the program generated. Output: a plain explanation of the refusal, naming the document to correct, in no more than half a page.",
    io: "Input: the refusal message as printed, and the row of the accepted document it names. Output: a plain explanation of the refusal, naming the document to correct.",
    safeguard: "The prompt explains; it does not decide and does not propose a way round the check. If its answer contains one, discard it. The correction is made in the document the refusal names, and a changed decision is accepted again by its owner before the check is run again."
  },
  metadataRows: [
    ["Working title",          "Refused, not worked around"],
    ["YouTube-optimised title", "When the build is refused: why nobody switches the check off"],
    ["Description (60 words)", "Before anything is built, a program checks the file your application is generated from against the interaction design you accepted. If they disagree, it refuses and names the row, and no setting switches it off. See a file of Progressa's ministry of education refused for one list of twenty, corrected and admitted. For service owners. AI prompt for explaining a refusal in the description."],
    ["Tags",                    "validation, quality gate, application model, interaction design, low-code, specification-driven development, SDD, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 4: Settle the whole application once, then describe it for the machine"],
    ["ToR §4 coverage",         "§3.4 (implement services on a low-code platform: the check before generation); §4.1 (a step of the method, with how it is checked); §4.3 (AI integration — the refusal prompt); §4.4 (demonstration in the education sector: the storyboard of section 4.8)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. No external source is cited in this subtopic."]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Module 4 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For Module 4, 'act' means produce the matching working artefact: a table of the places where the four questions are still open, a proposal of categories for a long list, a draft of a case's states and moves, a plain-sentence reading of one section of the application model, a list of yes-or-no questions for the owner, or a plain explanation of a refusal. Each subtopic's AI usage tip produces that artefact."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template of the Knowledge Products and Video Materials Guide, section 3.i: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only, with no images. Diagrams and text boxes are used only where strictly necessary, and all their labels are plain text. No country emblems and no agency logos. The single-sentence summary slide that closes each subtopic carries the single message word for word, in 28pt type, with the on-screen practice box. The figures the plan names for this module (F10, the four questions; F11, the service workflow of the licence; F12, from one file to a running application, with the refusal before it) belong to the written guide; the slides stay text-only."),

  H3("4.3 No individuals on screen"),
  P("No individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or a voice-over over the screen only. The choice is ITU's; the scripts work with either."),

  H3("4.4 Voice and tone"),
  P("Direct address ('your officials', 'the file your application is generated from'). Plain language at about an eighth-grade English level, held even though the Architect audience has a service specified and built. The method's documents are named by what they are for: the interaction design, the service workflow, the application model, called 'the file a program reads' or 'the file the application is generated from' wherever the name would not help. No rule numbers, commands or file formats are spoken or shown. The standing of the method's own documents is stated once, on the written page of subtopic 6.7, and not in these videos."),

  H3("4.5 External links and 'Find the link in the description'"),
  P("Every subtopic has an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. Four subtopics, 4.1, 4.2, 4.5 and 4.6, cite no external source: their content is the specification-driven development method's own, and their sources slide says so. ITU's production pipeline compiles each list into the video's description. The aggregate list, with the addresses, is in section 6."),

  H3("4.6 What runs, and what is said about it"),
  P("Nothing of Module 4 has been generated or run on the date of this bundle. The examples of 4.1, 4.2 and 4.3 are recast in Progressa from documents that exist in the education application they are drawn from: the ministry's interaction design, written and reviewed but not yet accepted, and the states of a licence in the authority's shared groundwork. The application models of that application are not yet written, so the examples of 4.4 and 4.5 are storyboards, and the check of 4.6 has not been run on them. No script, slide or metadata line in this bundle says that a model exists there, that anything was generated, or that a check has passed. When the models are written and the check has run, the storyboard of each subtopic is replaced by the extract or the recording, and its script gains one sentence that states the result and its date."),

  H3("4.7 The storyboard of the demonstration segment, in section 4.8"),
  P("Module 4 has one demonstration segment, in 4.6. Its storyboard lists the steps the recording will show, in order, with what the viewer sees and what counts as a pass. It is written from the method's account of the check before generation and from the plan's row for 4.6. Every step below is still to be run; none has been."),

  H3("4.8 Storyboard for 4.6 — a description refused for one list of twenty, corrected and admitted"),
  genericTable([700, 3000, 3000, 3000], ["Step", "What is done", "What the viewer sees", "What counts as a pass"], [
    ["1", "Open MoEYS's accepted interaction design at its header, then at its row for the list of the matters PHEQA advises on.", "The acceptance line, with the Director of Higher Education's name and the date; the row deciding three categories, of eight, seven and five matters.", "The document reads as accepted, by a name, on a date, and the row shows the three categories."],
    ["2", "Open the version of MoEYS's application model that offers the twenty matters in one list.", "The line of the model that names the accepted interaction design; the list of twenty matters, with no categories.", "The model names the accepted document, and the list has no categories."],
    ["3", "Run the check on that version.", "The refusal, naming the interaction design and its row for the list of matters, and saying that the list has more than nine values and no categories.", "The run is refused, with the row named."],
    ["4", "Look where the generated parts of the application would be written.", "Nothing new: no form, list, menu or process generated, and nothing installed.", "Nothing was generated, built or installed after the refusal."],
    ["5", "Correct the model: give the list the three categories the row decides.", "The list in the model with its three categories; the interaction design unchanged.", "The correction is made in the model, and the accepted document is not touched."],
    ["6", "Run the check again.", "The model admitted.", "The second run is admitted, and generation may begin."]
  ]),
  spacer(120),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU at the Tuesday weekly call."),

  H3("5.1 The examples that wait for the application models"),
  P("The examples of 4.4 and 4.5 and the demonstration of 4.6 rest on the application models of the education application from which Progressa's example is recast. Those models are not yet written, so the three stand as storyboards. The two cards of 4.5 are illustrative. When the models exist, each example is replaced by its extract, recast in Progressa, and the segment of 4.6 is recorded from a run of the check."),

  H3("5.2 The word 'state' in the GovStack Workflow specification"),
  P("Section 3 of the Workflow specification defines 'state' as the data, written as a JSON object, that a process starts with, not as the stage a case is in. Subtopic 4.3 uses 'state' in the second sense, as the method does, and cites section 3 of the specification only for its descriptions of a process and an activity. The slide notes say so, so that no reader takes the licence's states for the specification's term."),

  H3("5.3 The way out of a cancelled licence"),
  P("Subtopic 4.3 follows the plan: a cancellation set aside on appeal or on review returns the licence to the state it held before, which may be granted or suspended. The worked example of subtopic 2.5 shows the move from cancelled to granted only, and is to be brought into line with the plan. A suspension is ended by the minister's decision, on PHEQA's advice, as the worked example of 2.5 and the list of matters of 4.2 both have it."),

  H3("5.4 Editorial tone calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'Your answer should already be written down, and it is no' (4.6); 'does it tell you, or does it quietly decide?' (4.5); 'Nobody moves a licence because a screen allows it' (4.3)."),

  H3("5.5 Signposts"),
  P("The project's standing rules ask for African signposts and one international polestar. The plan names no public source on an African country for the matters of this module, so no country signpost is used; the worked examples are Progressa's throughout."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the six subtopics for ITU's video production pipeline, to be split per subtopic into the video descriptions. Every source is public and is one the KP4 outline and content plan version 0.2 names for the subtopic, at the edition it names."),
  genericTable([1100, 8600], ["Subtopic", "Sources referenced, with addresses"], [
    ["4.1", "None. The content is the specification-driven development method's own."],
    ["4.2", "None. The content is the specification-driven development method's own."],
    ["4.3", "GovStack Workflow Building Block specification, the site's default edition (label 23Q4; version history to 1.0), sections 3 and 4.2 (https://specs.govstack.global/workflow); GovStack Registration Building Block specification, the site's default edition (label 23Q4; version history to 1.0), sections 6.2.3 and 8.2 (https://specs.govstack.global/registration)."],
    ["4.4", "Joget DX 9 Knowledge Base, the DX9 edition, which lists release 9.0.7 (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/home): the pages Form Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/form-builder), List Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/list-builder), UI Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/ui-builder) and Process Builder (https://kb.joget.org/jw/web/userview/jdocs/docs/DX9/process-builder)."],
    ["4.5", "None. The content is the specification-driven development method's own."],
    ["4.6", "None. The content is the specification-driven development method's own."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP4 Module 4 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP4 Module 4 (Designing Digital Government Services using a Building Block Approach): settle the whole application once, then describe it for the machine.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP4 Module 4 Script Bundle v0.1 · 4 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP4_Module4_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
