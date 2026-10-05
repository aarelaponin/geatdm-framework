// Build KP4 Module 3 — Video Script Bundle v0.1
// Designing Digital Government Services using a Building Block Approach · Module 3 — Design one service as a story
//   your officials can check (Architect register).
// v0.1 (4 Oct 2026): written on the KP4 outline and content plan, version 0.2, section 1, module 3. Each subtopic's single
//   message is the plan's, word for word; every source cited is one the plan's version 0.2 names for that subtopic, at the
//   edition it names; every worked example is the accepted example of the KP4 examples folder (KP4-DSD/examples/E3-1 to
//   E3-6), used as it stands, in Progressa's names.
// The content is the SDD method's own; the scripts name its documents by what they are for and give no rule identifiers,
//   no commands and no file formats. Subtopics 3.4 and 3.5 rest on the method alone and cite no public source.
// One demonstration segment (3.5), written as a storyboard in section 4.8 until it is recorded. The module's self-check of
//   four questions closes section 2.
// Sources: GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0); PAERA v1.0 section 4.5.
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
// The .docx is written with OUT_PATH into itu-knowledge/_02_Design/_KP04/; the .md is rendered beside this script by the
//   kit's bundle_to_md.py. Never hand-edit either; edit this script and regenerate.

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

// Persona for KP4 Module 3 (Architect throughout, as the plan's module table sets it).
const PERSONA_A = "A (Architect) — the head of a sectoral ICT unit, or the project lead, who has a service specified and built by a supplier, convenes its reviews and accepts its documents; no knowledge of data models, version control, configuration files or the command line is assumed";

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
    children: [new TextRun({ text: "Module 3 — Design one service as a story your officials can check",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Module 3 of KP4"],
    ["Version",             "v0.1 — written on the KP4 outline and content plan, version 0.2, of 4 October 2026"],
    ["Date",                "4 October 2026"],
    ["Module persona",      PERSONA_A],
    ["Subtopics",           "Six subtopics (3.1 – 3.6), each shipped as one standalone video of about five minutes; 3.4 is supplementary"],
    ["Module runtime",      "Approximately 30 minutes across six standalone videos"],
    ["Worked examples",     "One goal written in full for Progressa, 'apply for a provisional licence', from the KP4 examples E3-1 to E3-6 (KP4-DSD/examples/), used as they stand"],
    ["Demonstration segments", "One (3.5), written as a storyboard in section 4.8 until it is recorded"],
    ["Self-check",          "Four questions drawn from the module's single messages, at the end of section 2"],
    ["Prepared by",         "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 3 of KP4 — Designing Digital Government Services using a Building Block Approach. Module 3 shows how one goal of a service is designed so that officials can check it before anything is built: the goal written as a story, every way it can go wrong, the screens worked out from the story with the source of every value, screens that officers can use every day, the walk-through officials click, and the review at which officials and the builder agree. Its example is one goal written in full: an applicant applying to PHEQA, Progressa's quality authority for higher education, for a provisional licence. The register is plain English at about an eighth-grade level; technical terms are explained in plain words on first use, and each subtopic leads with what the listener can do. The six videos are numbered 3.1 to 3.6 and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the six video scripts of Module 3 of Knowledge Product 4 (Designing Digital Government Services using a Building Block Approach), with slide specifications, metadata, AI usage tips, production notes, the storyboard of the one demonstration segment and the module's self-check. It is the v0.1 working draft, written on the KP4 outline and content plan, version 0.2, whose section 1 fixes each subtopic's single message, sources, worked example and AI usage tip."),
  P("Module 3 carries the second requirement of section 3.4 of the terms of reference, how to design service workflows, at the level of one goal: the story of what a person does, every way it can go wrong, the screens worked out from the story, and the review at which officials agree it. It is written in the Architect register, for the team that has a service specified and built, and it still assumes no knowledge of data models, version control, configuration files or the command line."),

  H3("1.2 How the method is presented"),
  P("The content of this module is the specification-driven development method, SDD: a method in which every document a person writes is accepted before the next is begun, and the last is turned into the running service by a program. The scripts name its documents by what they are for. They give no rule identifiers, no commands of the method's tools and no file formats. Two subtopics, 3.4 and 3.5, rest on the method's own rules and not on a public source; their metadata says so and they cite nothing. The public sources the other four cite are the GovStack Registration Building Block specification and PAERA, each at the edition the plan names."),

  H3("1.3 The names used for Progressa"),
  genericTable([2200, 7500], ["Name", "What it is, and its part in Module 3"], [
    ["PHEQA", "The Progressa Higher Education Quality Authority. It registers and licenses private higher-education institutions and keeps the register of institutions. Its goal 'apply for a provisional licence' is the example of the whole module."],
    ["PNIA", "The Progressa National Identity Authority. Its sign-in tells PHEQA's self-service who the applicant is."],
    ["The Payments block", "The government's Payments block. It takes the application fee and confirms the payment to PHEQA."],
    ["MoEYS", "Progressa's ministry of education. The minister decides a licence on PHEQA's recommendation; that decision is a later goal, not part of this module's example."],
    ["The roles at PHEQA", "The Registrar of PHEQA, who accepts the project's documents on PHEQA's side; the head of the registration desk, who runs the counter where applications arrive; the inspector; the finance officer, who owns the application fee; the head of the ICT unit. The examples name roles, never persons."],
    ["The supplier", "The private company PHEQA contracts to specify and build its application: the supplier's analyst writes the documents, the supplier's builder builds from them."]
  ]),

  H3("1.4 How to read this document"),
  P("Section 2 gives Module 3 at a glance, with the module's self-check. Section 3 holds the script of each subtopic: shaded blocks are on-screen cues, plain paragraphs are the voice-over, and the slide specification, AI usage tip and metadata follow. Section 4 collects the production notes, with the storyboard of the demonstration segment of 3.5. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 3 at a glance"),
  P("Six standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty minutes. Each video has a single message, quoted word for word from the KP4 outline and content plan version 0.2, and is discoverable on its own; the playlist provides navigation but is not needed to understand any one video."),
  genericTable([600, 2400, 3700, 1900, 1100], ["#", "Title", "Single message", "Class", "Runtime"], [
    ["3.1", "One goal, written as a story a builder can follow",
      "The builder must not have to work anything out or ask anybody anything.", "Core", "~5 min"],
    ["3.2", "Every way it can go wrong, written down",
      "A story is finished only when every failure has its own ending.", "Core", "~5 min"],
    ["3.3", "Screens worked out from the story, every value with its source",
      "Each screen serves a step; each value on it says where it comes from.", "Core", "~5 min"],
    ["3.4", "Screens officers can use",
      "An officer never types what the system already knows, and never chooses from an endless list.", "Supplementary", "~5 min"],
    ["3.5", "The walk-through your officials click",
      "The walk-through is produced from the written screens, never drawn by hand, and every page shows its version.", "Core", "~5 min"],
    ["3.6", "The review: three people, every open line given a name",
      "The owner, the builder and the person who will live with the result agree the screens; nothing leaves the room unowned.", "Core", "~5 min"]
  ]),

  H3("The module's self-check"),
  P("Four questions on what a manager decides, each drawn from the single messages of the module's subtopics. A learner answers them after watching the videos; the third column gives the answer the module teaches, for the learner to check against or for a facilitator to use."),
  genericTable([500, 3700, 4200, 1300], ["#", "Question", "The answer the module gives", "Drawn from"], [
    ["1", "Your supplier sends you the story of one goal of the service to accept. What two things must be true before you accept it?",
      "A builder could follow every step without having to work anything out or ask anybody anything; and every way the goal can fail has its own ending, decided by an official and not left to the builder.", "3.1 and 3.2"],
    ["2", "You point at a value on one of the service's screens. What must you be able to find out, and what must never happen on a screen an officer uses every day?",
      "Which step the screen serves and where the value comes from: another body, a shared list, a record the authority keeps, or typed by the person for a stated reason. An officer never types what the system already knows, and never chooses from an endless list.", "3.3 and 3.4"],
    ["3", "The supplier offers your officials a drawing of the screens to approve. What do you ask for instead, and what do you check on every page?",
      "The walk-through, produced by a program from the written screens and never drawn by hand; on every page you check that it shows the same version as the screens you are asked to accept.", "3.5"],
    ["4", "Who must sit at the review of a goal's screens, and when may the meeting end?",
      "The owner of the screens, the builder and the person who will live with the result. The meeting ends only when every open line has an owner and a date; nothing leaves the room unowned.", "3.6"]
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
  title: "One goal, written as a story a builder can follow",
  runtime: "~5 min",
  words: 550,
  paeraAnchor: "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1 and 6.3.2.2 (the applicant's screens and fields) and 6.2.3 (the operator's decision)",
  singleMessage: "The builder must not have to work anything out or ask anybody anything.",
  practice: "the main story of one goal, step by step, with every assumption marked for confirmation",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'One goal, written as a story a builder can follow'. Voice-over begins." },
    { text: "Your supplier's builder will build what the documents say, and guess at whatever they leave out. A guess made late, under deadline, is how an agreed service changes on the way. So every goal is written as a story the builder can follow." },
    { cue: "Slide 2 — Title: 'A goal, and its story'. Body, two text rows: 'A goal: one thing a person wants to get done with the service.' 'Its story: who acts and what happens, step by step, until the person has what they came for.'" },
    { text: "A service is made of goals. A goal is one thing a person wants to get done: apply for a licence, record a fee, record a visit. Each goal is written out as a story: step by step, who acts and what happens, until the person has what they came for. The story uses plain words, so the official who runs the service can read it and say: yes, that is our work." },
    { cue: "Slide 3 — Title: 'What a written goal holds'. Body, five text rows: 'Who has the goal, and who else takes part.' 'What starts it, and what must already be true.' 'What the authority guarantees, whatever happens.' 'The main steps, on the path where nothing goes wrong.' 'The entries of the register of requirements that it serves.'" },
    { text: "A written goal holds five things. Who has the goal, and who else takes part. What starts it, and what must already be true. What the authority guarantees, whatever happens. The main steps, on the path where nothing goes wrong. And the entries of the register of requirements that the goal serves, so that every step can be traced to something somebody asked for." },
    { cue: "Slide 4 — Title: 'Progressa: apply for a provisional licence'. Body, five text rows: 'Who: a person who intends to run a private university, university college or technical institute.' 'Others: PNIA, which says who the applicant is; the Payments block, which takes the fee.' 'Starts when: the applicant decides to apply; PHEQA's standards are in force and the fee is set.' 'Guarantee: no application is recorded unless the applicant confirmed it and the fee was paid.' 'Serves: applying through the self-service; the application fee; the particulars the regulations list; a name no registered institution holds.'" },
    { text: "In Progressa, the quality authority for higher education, PHEQA, licenses private institutions. Its first goal is to apply for a provisional licence. The applicant is a person who intends to run a private university, university college or technical institute. PNIA, the national identity authority, tells PHEQA who the applicant is. The Payments block takes the fee. The goal serves four entries of PHEQA's register: applying through the self-service, the application fee, the particulars the regulations list, and a name no registered institution holds. PHEQA guarantees one thing, whatever happens: no application is recorded unless the applicant confirmed it and the fee was paid." },
    { cue: "Slide 5 — Title: 'The main story, in nine steps'. Body, nine short numbered text rows: '1. Sign in through PNIA.' '2. Ask to apply.' '3. The system shows PHEQA's standards, with their version.' '4. State the kind of institution.' '5. The system asks for the particulars of that kind.' '6. Give the proposed name and each particular; attach the evidence of funding.' '7. The system checks every particular, and that no registered institution holds the name.' '8. Confirm and pay the fee.' '9. The system records the application and shows the date received.'" },
    { text: "The main story has nine steps. The applicant signs in through PNIA and asks to apply. The system shows PHEQA's standards for new institutions, with their version. The applicant states the kind of institution, gives the proposed name and each particular, and attaches the evidence of funding. The system checks that nothing is missing and that no registered institution holds the name. The applicant confirms and pays. The system records the application and shows the date it was received." },
    { cue: "Slide 6 — Title: 'What the published picture leaves to you'. Body, two text rows: 'The Registration specification: an analyst creates the screens, their order and their fields; an operator approves, rejects or sends back for correction.' 'Your story: which particulars, from which list, checked against which register, at which fee, with which guarantee.'" },
    { text: "The GovStack Registration specification publishes the general picture of a registration service. An analyst creates the screens an applicant sees, their order, and the fields on each. An operator then decides: approve, reject, or send back for correction. Your story fills it for one service: which particulars, from which list, checked against which register, at which fee, and with what promise. The operator's decision is a goal of its own, with its own story." },
    { cue: "Slide 7 — Title: 'Before you accept a story'. Body, three text rows: 'Read it aloud to the official who runs the counter.' 'At each step ask: who does this, and where does what they see come from?' 'A step that serves no entry is struck out, or becomes a question with an owner.'" },
    { text: "An AI assistant drafted the story from those four entries; the supplier's analyst ruled on each step. The draft had a tenth step, an e-mail to the applicant, that no entry asked for, and PHEQA holds no e-mail address it could trust. The analyst struck it out and wrote a question for the Registrar instead. Before you accept a story, read it aloud to the head of the registration desk. At each step, ask: who does this, and where does what they see come from?" },
    { cue: "Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The builder must not have to work anything out or ask anybody anything.'" },
    { text: "Read the story as the builder would. Wherever the builder would have to guess or ask, the story is not finished. Send it back, with the question written down." },
    { cue: "Slide 9 — Title: 'Sources'. Body: GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1, 6.3.2.2 and 6.2.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'One goal, written as a story a builder can follow'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 3.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Two text rows: what a goal is, and what its story is.",
      "Plain definitions, text only."],
    ["3", "Five text rows: what a written goal holds.",
      "The core payload. Kept on screen while the voice-over names each part."],
    ["4", "Four text rows: who has the goal, who else takes part, what starts it, and PHEQA's guarantee.",
      "Progressa's names as the plan gives them. No logos, no emblems."],
    ["5", "Nine short numbered text rows: the main story.",
      "The drawn version is figure F8 of the written guide; the slide stays text-only."],
    ["6", "Two text rows: the published picture, and what the story fills in.",
      "The decision types are given as the specification publishes them: approve, reject or send back for correction."],
    ["7", "Three text rows: what to do before accepting a story.",
      "The AI draft's tenth step is told in the voice-over, not shown."],
    ["8", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["9", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Draft the main story of one goal from what was asked",
    problem: "Before any screen is designed, each goal of the service must be written as a story. A first draft written from memory carries steps nobody asked for. The prompt drafts the main story from the register entries alone and marks every step, figure, list or rule it had to assume.",
    prompt: "Below are the entries of a register of requirements for a public service in [country X], each in its own words with the place it was said [paste the entries the goal serves]. Below that are the lists and settings already agreed for the service, with their owners [paste them]. Draft the main story of one goal: [name the goal, for example 'apply for a licence']. Give: (1) who has the goal and who else takes part; (2) what starts it and what must already be true; (3) what the authority guarantees whatever happens, and what it guarantees when the goal succeeds; (4) the main steps on the path where nothing goes wrong, one row each, with who acts and what happens; (5) for each step, the entries it serves, by their identifiers. Use only the entries, lists and settings pasted above. Mark any step, figure, list or rule that none of them supports as 'ASSUMED — to be confirmed', and say what it would need. Do not describe screens. Output: a table of steps with who acts, what happens and the entries served, then a list of every assumption marked for confirmation.",
    io: "Input: the register entries the goal serves, and the lists and settings already agreed. Output: the main story of one goal, step by step, with every assumption marked for confirmation.",
    safeguard: "The draft is a proposal, not the story. A person rules on each step. A step the prompt wrote without an entry behind it is marked, and is either given a source or struck out. It is never kept just because it sounds sensible; an e-mail step nobody asked for sounds sensible too."
  },
  metadataRows: [
    ["Working title",          "One goal, written as a story a builder can follow"],
    ["YouTube-optimised title", "Write each goal of a public service as a story your supplier can build without guessing"],
    ["Description (60 words)", "A builder builds what the documents say and guesses at the rest. Writing each goal of a service as a story, who acts and what happens, step by step, removes the guessing. See Progressa's goal 'apply for a provisional licence' in nine steps, with its guarantee. For managers who accept a supplier's documents. AI prompt for drafting a goal's main story in the description."],
    ["Tags",                    "service design, goal, use case, GovStack Registration, building blocks, specification, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 3: Design one service as a story your officials can check"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: one goal written as a story); §4.1 (a step of the method, with the person who rules on it); §4.3 (AI integration: drafting the main story); §4.4 (demonstration in the education sector); §4.6 (an example of the step's output)"],
    ["PAERA citations",         "None. This subtopic rests on the GovStack Registration specification in the external-link list."],
    ["External-link list",      "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1, 6.3.2.2 and 6.2.3"]
  ]
}));

// ---------- 3.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 3.2",
  title: "Every way it can go wrong, written down",
  runtime: "~5 min",
  words: 462,
  paeraAnchor: "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.3.1, 6.3.3.2 and 6.3.3.3 (rules on each field, the check against an external source, and the test of completeness)",
  singleMessage: "A story is finished only when every failure has its own ending.",
  practice: "a table of failures for each step, each with a proposed ending for the official to accept or set aside",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Every way it can go wrong, written down'. Voice-over begins." },
    { text: "A service is judged on its bad days: the sign-in that does not answer, the document left out, the payment that never arrives. If nobody wrote down what happens then, the builder decides, alone and under deadline." },
    { cue: "Slide 2 — Title: 'Each failure, written down'. Body, four text rows: 'The step it leaves.' 'What the system notices.' 'What the system does.' 'How the story ends: in failure, in success, or back to a named step.'" },
    { text: "For each failure, the story says what the system notices, what it does, and how the story ends. There are only three endings: the goal fails, the goal still succeeds, or the person goes back to a named step of the main story. For each ending, the story also says which of the authority's guarantees still holds. A failure without its own ending is a decision left to the builder." },
    { cue: "Slide 3 — Title: 'Kinds of failure the Registration specification names'. Body, three text rows: 'Rules on each field: required, a number within limits, a date, a file of the right size and type.' 'A field checked against another body's records, through its interface.' 'A test that everything required is there before the application can be sent.'" },
    { text: "The GovStack Registration specification names the checks a registration service makes. There are rules on each field: whether it is required, a number within limits, a date, a file of the right size and type. A field can be checked against another body's records. And the system checks that everything required is there, and should not let an applicant send an application that is incomplete. Every check that can fail needs its ending in the story." },
    { cue: "Slide 4 — Title: 'Progressa: five failures, five endings'. Body, a plain-text table of five rows with three columns (failure; what the system does; ending): 'PNIA does not answer at sign-in — says the national sign-in is not available and nothing has started — in failure, nothing recorded.' 'The evidence of funding is left out — names the missing document, keeps the rest — back to step 6.' 'The proposed name is already held — shows the holder's register number, keeps the rest — back to step 6.' 'The fee is not confirmed — says the application has not been made — back to step 8, or in failure.' 'The applicant leaves and returns two days later — nothing is kept — in failure.'" },
    { text: "Here are the five failures of PHEQA's goal. PNIA does not answer at sign-in: the applicant is told that nothing has started. The evidence of funding is left out: the system names it and keeps everything else. The proposed name is already held: the system shows which registered institution holds it. The fee is not confirmed: the application is not made. And the applicant who leaves and returns two days later finds nothing kept. Whatever the failure, PHEQA's guarantee holds: no application is recorded unless the applicant confirmed it and paid." },
    { cue: "Slide 5 — Title: 'Two endings were decisions'. Body, two text rows: 'Fee not confirmed: no application at all. Decided by the head of the registration desk.' 'No drafts kept in the first version; an applicant who stops loses what was typed. Decided by the Registrar, and kept as an open question.'" },
    { text: "Three of those endings follow from the story. Two were decisions an official had to take. Should an application wait for its fee? The head of the registration desk said no: a waiting application would be a third state that no other goal uses and nobody asked for. Should half-finished applications be kept as drafts? The Registrar said not in the first version, and recorded the cost: an applicant who stops loses what was typed. That question stays open, and the Registrar owns it." },
    { cue: "Slide 6 — Title: 'Before you accept a story'. Body, three text rows: 'Count the endings. A story with only a success ending is not finished.' 'For each failure, ask who decided its ending.' 'A list of failures is a start, not a claim that all were found.'" },
    { text: "Before you accept a story, count its endings. A story with only a success ending is not finished. Then, for each failure, ask who decided the ending. If the answer is the builder, the decision was taken by the wrong person. An AI assistant can propose the first list of failures, step by step, and officials accept or set aside each one. But no list is complete. The walk-through and the review are where more failures are found." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A story is finished only when every failure has its own ending.'" },
    { text: "Ask what happens when each step fails. If the story has no answer, the builder will choose one. Write the ending down before anything is built." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.3.1, 6.3.3.2 and 6.3.3.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Every way it can go wrong, written down'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 3.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four text rows: what is written for each failure.",
      "The core payload. The three endings are kept on screen."],
    ["3", "Three text rows: the kinds of check the Registration specification names.",
      "Paraphrased from sections 6.3.3.1 to 6.3.3.3 of the specification; not marked as quotations."],
    ["4", "Plain-text table: Progressa's five failures, with what the system does and how each ends.",
      "The drawn version, the story with its failures and endings, is figure F8 of the written guide; the slide stays text-only."],
    ["5", "Two text rows: the two endings that officials decided, with who decided each.",
      "Roles, never persons."],
    ["6", "Three text rows: what to check before accepting a story.",
      "Text-only list."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Propose the failures of each step, for the official to decide",
    problem: "A story with only its main steps looks finished and is not. The team needs a first list of what can go wrong at each step, with a proposed ending for each, so that the official who runs the service decides the endings before the builder has to.",
    prompt: "Below is the main story of one goal of a public service in [country X], as numbered steps with who acts and what happens [paste the story]. Below that are the guarantees the authority makes for this goal [paste them], and the checks the service makes on each field and against other bodies' records [paste them, or write 'none listed']. For each step, list what can go wrong. For each failure give: (1) the step it leaves; (2) what the system notices; (3) what the system does; (4) a proposed ending: the goal fails, the goal still succeeds, or the person goes back to a named step; (5) which guarantee still holds; (6) whether the ending follows from the story or is a decision an official must take, and if it is a decision, the question to put to the official. Do not settle any ending that is a decision. Output: a table of failures for each step, each with a proposed ending for the official to accept or set aside, then the list of questions for officials.",
    io: "Input: the main story of one goal, its guarantees and its checks. Output: a table of failures for each step, each with a proposed ending for the official to accept or set aside.",
    safeguard: "The official decides each ending; neither the builder nor the prompt does. The list is a starting point, not a claim that every failure has been found: keep it open for the walk-through and the review, where more are found."
  },
  metadataRows: [
    ["Working title",          "Every way it can go wrong, written down"],
    ["YouTube-optimised title", "What happens when it goes wrong? Write down every failure of a public service before it is built"],
    ["Description (60 words)", "A service is judged on its bad days. Every failure of a goal needs its own ending, written down: what the system notices, what it does, and how the story ends. See five failures of Progressa's licence application, and the two endings that officials had to decide. For managers who accept a supplier's documents. AI prompt for proposing the failures of each step in the description."],
    ["Tags",                    "service design, failures, exceptions, GovStack Registration, validation, specification, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 3: Design one service as a story your officials can check"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: the failures of one goal); §4.1 (a step of the method, with the official who decides each ending); §4.3 (AI integration: proposing the failures); §4.6 (an example of the step's output)"],
    ["PAERA citations",         "None. This subtopic rests on the GovStack Registration specification in the external-link list."],
    ["External-link list",      "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.3.1, 6.3.3.2 and 6.3.3.3"]
  ]
}));

// ---------- 3.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 3.3",
  title: "Screens worked out from the story, every value with its source",
  runtime: "~5 min",
  words: 504,
  paeraAnchor: "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1 and 6.3.2.2 (the applicant's screens and fields)",
  singleMessage: "Each screen serves a step; each value on it says where it comes from.",
  practice: "a table of screens, one for each step that needs one, with the source of every value and the values with no source marked",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Screens worked out from the story, every value with its source'. Voice-over begins." },
    { text: "A screen designed from a list of fields shows everything and explains nothing. A screen worked out from the story shows what a person needs at that step, and says where each value on it comes from." },
    { cue: "Slide 2 — Title: 'Walk the story, not the list of records'. Body, three text rows: 'A step where the person asks, states, gives or confirms something gets a screen.' 'A step that is wholly the system's gets one only if the person must read something.' 'Two steps share a screen when nothing the system does stands between them.'" },
    { text: "The screens are worked out after the story is written, by walking it step by step. A step where the person asks, states, gives or confirms something gets a screen. A step that is wholly the system's gets a screen only if it shows something the person must read before going on. Two steps share a screen when nothing the system does stands between them. So every screen serves a step, and you can say which one." },
    { cue: "Slide 3 — Title: 'Every value has one of four sources'. Body, four text rows: 'Taken from another body.' 'Chosen from a list.' 'Read from what the authority keeps.' 'Entered here, with the reason no other place has it.'" },
    { text: "Every value on every screen comes from one of four places. It is taken from another body, such as the identity authority or the Payments block. It is chosen from a list kept once for the whole service. It is read from a record or a setting the authority already keeps. Or it is entered here, typed by the person, and then the screen record says why no other place has it." },
    { cue: "Slide 4 — Title: 'Progressa: five screens'. Body, five text rows: 'S1 — Ask to apply for a provisional licence (step 2).' 'S2 — Read PHEQA's standards and state the kind of institution (steps 3 and 4).' 'S3 — Give the particulars (steps 5 and 6, and two failures).' 'S4 — Confirm and pay (step 8, and one failure).' 'S5 — See the application received (step 9).'" },
    { text: "PHEQA's goal, to apply for a provisional licence, has five screens. The first asks to apply. The second shows PHEQA's standards and asks for the kind of institution. The third takes the particulars, and also serves two failures: a document left out, and a name already held. The fourth confirms and takes the fee. The fifth shows the application received. Each screen names the steps and the failures it serves." },
    { cue: "Slide 5 — Title: 'Where each value comes from'. Body, four text rows: 'The applicant's name — taken from PNIA's sign-in.' 'The kind of institution — chosen from PHEQA's shared list: university, university college, technical institute.' 'The fee due — read from the setting PHEQA's finance officer owns.' 'The proposed name — entered here, then checked against the register of institutions.'" },
    { text: "Now point at values. The applicant's name is taken from PNIA's sign-in; nobody types it. The kind of institution is chosen from PHEQA's shared list of three, kept once in the shared groundwork and re-used by every goal that asks for a kind. The fee is read from the setting that PHEQA's finance officer owns. The proposed name is entered here, because no other body knows it yet, and it is checked against the register of institutions." },
    { cue: "Slide 6 — Title: 'The published picture of screens and fields'. Body, two text rows: 'Screens in order: a guide, the applicant's form, the upload of documents, the payment, and a send screen.' 'Each field: a name, a type, and whether it must be filled. Lists are reusable across all services in the same installation.'" },
    { text: "The GovStack Registration specification describes the same work from the builder's side. An analyst creates the screens and their order: a guide, the applicant's form, the upload of documents, the payment, and a send screen. Each field has a name, a type, and whether it must be filled. Lists, which the specification calls catalogues, are reusable across all services in the same installation. Progressa's five screens follow much the same order." },
    { cue: "Slide 7 — Title: 'The check against the story'. Body, two text rows: 'Every step and every failure is served by a screen.' 'Every value comes from a record, setting or list the story names.' Footer line: 'Struck out: the applicant's phone number, which no list names.'" },
    { text: "The screens are checked against four lists the story wrote: its steps, its failures, the records it reads or changes, and the settings and lists it uses. In Progressa's first draft, the third screen asked for the applicant's phone number. No list of the story names it, and PNIA does not release it. It was struck out, and a question went to the Registrar: does PHEQA need to telephone an applicant?" },
    { cue: "Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Each screen serves a step; each value on it says where it comes from.'" },
    { text: "Point at any value on any screen and ask where it comes from. There should be one of four answers. Anything else is a question for the story's owner." },
    { cue: "Slide 9 — Title: 'Sources'. Body: GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1 and 6.3.2.2. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Screens worked out from the story, every value with its source'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 3.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Three text rows: how the screens are worked out from the story.",
      "Text-only list."],
    ["3", "Four text rows: the four sources of a value.",
      "The core payload. Kept on screen while the voice-over names each source."],
    ["4", "Five text rows: Progressa's five screens, each with the steps and failures it serves.",
      "Screen labels S1 to S5 as the worked example gives them."],
    ["5", "Four text rows: four values and where each comes from.",
      "The drawn version, a screen with the source of every value, is figure F9 of the written guide; the slide stays text-only."],
    ["6", "Two text rows: the screens and fields as the Registration specification describes them.",
      "Paraphrased from sections 6.3.2.1 and 6.3.2.2; the five screens are named in the specification's order."],
    ["7", "Two text rows and a footer line: the check against the story, and the field struck out.",
      "Text-only."],
    ["8", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["9", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "List the screens of a story and the source of every value",
    problem: "Screens drawn from a list of fields carry values nobody can trace, and an untraced value will one day disagree with its source. The prompt works out from the story which screen each step needs and where each value on it comes from, and shows every value that has no source.",
    prompt: "Below is the main story of one goal of a public service in [country X], with its failures, as numbered steps [paste the story and its failures]. Below that are the records the service keeps, the lists and settings it uses with their owners, and what other bodies supply, such as an identity sign-in or a payment [paste them]. Work out the screens. A step where the person asks, states, gives or confirms something gets a screen; a step that is wholly the system's gets one only if the person must read something before going on; two steps share a screen when nothing the system does stands between them. For each screen give: (1) its name, and the steps and failures it serves; (2) every value on it; (3) the source of each value: taken from another body, chosen from a list, read from what the authority keeps, or entered here; (4) for a value entered here, why no other place has it. Use only the sources pasted above. Mark any value whose source is not among them as 'NO SOURCE', and do not suggest one. Output: a table of screens, one for each step that needs one, with the source of every value and the values with no source marked.",
    io: "Input: the story with its failures, and the records, lists, settings and outside sources the service uses. Output: a table of screens, one for each step that needs one, with the source of every value and the values with no source marked.",
    safeguard: "A value marked 'NO SOURCE' is a question for the story's owner, not a gap to fill. The prompt never supplies a source it was not given; check every source it names against the lists you pasted."
  },
  metadataRows: [
    ["Working title",          "Screens worked out from the story, every value with its source"],
    ["YouTube-optimised title", "Design screens from the story: every value on a government form with its source"],
    ["Description (60 words)", "A screen worked out from the story serves a step, and every value on it says where it comes from: another body, a shared list, a record the authority keeps, or typed by the person. See the five screens of Progressa's licence application and the one field struck out. For managers who accept a supplier's screens. AI prompt for listing screens and the source of every value in the description."],
    ["Tags",                    "screen design, form design, data sources, once-only, GovStack Registration, specification, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 3: Design one service as a story your officials can check"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: the screens of one goal); §4.1 (a step of the method, with its check against the story); §4.3 (AI integration: the screens and their sources); §4.5 (a screen's data with their sources); §4.6 (an example of the step's output)"],
    ["PAERA citations",         "None. This subtopic rests on the GovStack Registration specification in the external-link list."],
    ["External-link list",      "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1 and 6.3.2.2"]
  ]
}));

// ---------- 3.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 3.4",
  title: "Screens officers can use",
  runtime: "~5 min",
  words: 473,
  paeraAnchor: "None public. The content is the SDD method's own: its rules for the screens officers use every day. Supplementary subtopic",
  singleMessage: "An officer never types what the system already knows, and never chooses from an endless list.",
  practice: "a list of the breaches on one screen, each with the rule it breaks",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Screens officers can use'. Voice-over begins." },
    { text: "An applicant uses the authority's self-service once or twice. An officer uses her screens many times a day. A small waste on her screen is repeated thousands of times a year, and every value typed again is a chance for a mistake." },
    { cue: "Slide 2 — Title: 'Five rules for an officer's screen'. Body, five numbered text rows: '1. Never type what the system already knows.' '2. Never choose from an endless list.' '3. Choose a decision from the decisions allowed; do not write it as free text.' '4. State on the screen the rule that governs the work.' '5. Show an open question with its owner; never answer it with a guess.'" },
    { text: "Screens left to habit come out like a form on a public website: everything typed, everything free. The SDD method, specification-driven development, sets five rules for screens that officers use. Never type what the system already knows. Never choose from an endless list. Choose a decision from the decisions allowed. State on the screen the rule that governs the work. And show an open question with its owner, instead of a guess." },
    { cue: "Slide 3 — Title: 'Before: the inspector's first draft'. Body, five text rows: 'Institution: a drop-down list of all 214 institutions.' 'Address of the premises: typed by the inspector.' 'Outcome: a sentence in a free-text box.' 'Inspectors who must sign: already filled with 2.' 'Date of the visit: any date, with no rule shown.'" },
    { text: "Here is a screen at PHEQA, record an inspection visit, as an AI assistant first drafted it from the story. The inspector picks the institution from a list of all 214 in the register. She types the address of the premises. She writes the outcome as a sentence. A box says two inspectors must sign, though nobody said so. And she can save a visit made on any date, even one more than a year before the recommendation it will support." },
    { cue: "Slide 4 — Title: 'After: rules 1 to 4'. Body, four text rows: 'Institution: type part of the name or the register number, and pick from the few that match.' 'Address: filled from the register; shown, not typed.' 'Outcome: meets the standards; meets them with conditions; does not meet them; with a box for findings.' 'Under the date: a recommendation may rest only on a visit made within 90 days before it.'" },
    { text: "After the first four rules, she types part of the name or the register number and picks from the few that match. The address is filled from the register and shown, not typed. The outcome is chosen from three: meets the standards, meets them with conditions, or does not meet them, with a box beside it for her findings. And a line under the date states the rule: a recommendation may rest only on a visit made within ninety days before it." },
    { cue: "Slide 5 — Title: 'Rule 5: to be confirmed, with an owner'. Body, three text rows: 'The regulations name inspectors in the plural and give no number.' 'The draft filled in 2, with no source.' 'Now: to be confirmed by the Registrar of PHEQA; the screen cannot be accepted until she answers.'" },
    { text: "The fifth rule matters most. The AI assistant that drafted the screen met a question nobody had answered: how many inspectors must sign? The regulations speak of inspectors and give no number. The draft filled in two, which looked reasonable and had no source. Under the fifth rule, the field shows: to be confirmed by the Registrar of PHEQA. The screen cannot be accepted while that mark stands, so the question reaches the Registrar. She answered: one inspector and the head of the inspectorate." },
    { cue: "Slide 6 — Title: 'Sit beside an officer'. Body, three text rows: 'Count the values she types that the system already holds.' 'Count the lists she scrolls.' 'Count the decisions she writes in her own words.'" },
    { text: "An inspector of PHEQA confirmed each change. Of the address, she said that on paper she copies it from the file, and that if the screen already knows it, she will copy it wrong one day. Of the long list, she said two institutions have names that begin the same way, and in a long list she would pick the wrong one. Before you accept an officer's screen, sit beside an officer while she uses it, and count what she types, scrolls and writes." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An officer never types what the system already knows, and never chooses from an endless list.'" },
    { text: "Count what an officer types that the system already knows, and every list she scrolls. Each one is a rule not followed, and a mistake waiting to happen." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Screens officers can use'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 3.4, supplementary) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Five numbered text rows: the five rules.",
      "The core payload. The rules are the method's own; no source is cited."],
    ["3", "Five text rows: the inspector's screen as first drafted.",
      "Field names and fills as the worked example gives them. No screenshot of any real system; text only."],
    ["4", "Four text rows: the same screen after rules 1 to 4.",
      "Two text boxes side by side, before and after, are allowed; labels in plain text only."],
    ["5", "Three text rows: rule 5 applied to the number of inspectors who must sign.",
      "The mark 'to be confirmed by the Registrar of PHEQA' shown as it appears on the screen."],
    ["6", "Three text rows: what to count when sitting beside an officer.",
      "Text-only list."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word. This subtopic has no Sources slide: it cites no external source."]
  ],
  aiTip: {
    title: "Review an officer's screen against five rules",
    problem: "A screen that suits an applicant can waste an officer's day and invite mistakes. Before an officer's screen is accepted, the team needs every place where it makes the officer type, scroll, write or guess what the system could give her, each with the rule it breaks.",
    prompt: "Below is the description of one screen that officers of a public authority in [country X] will use every day, field by field, with how each field is filled [paste the screen]. Below that is what the system already holds that this screen could use: registers, lists and settings [paste them]. Review the screen against five rules: (1) an officer never types what the system already knows; (2) an officer never chooses from an endless list; (3) a decision is chosen from the decisions allowed, not written as free text; (4) a rule that governs what the officer does is stated on the screen; (5) an open question is shown with its owner, not answered by a guess. For each breach give: the field; the rule it breaks; what the officer does today; what the rule would have the screen do; and what the change needs from the system, for example a search of a register. Judge only the screen pasted above. Output: a list of the breaches on one screen, each with the rule it breaks, then any field you could not judge and why.",
    io: "Input: one screen described field by field, and what the system already holds. Output: a list of the breaches on one screen, each with the rule it breaks.",
    safeguard: "The prompt sees only the screen it is given, not the work around it. An officer who does the work confirms each breach before the screen is changed; a breach she does not recognise is set aside, not built."
  },
  metadataRows: [
    ["Working title",          "Screens officers can use"],
    ["YouTube-optimised title", "Screens officers can use: five rules for the back-office screens of a public service"],
    ["Description (60 words)", "An officer uses her screens many times a day, so every value typed again and every long list scrolled is repeated thousands of times. Five rules prevent that, and the fifth turns a guess into a question with an owner. See an inspector's screen at PHEQA before and after. For managers who accept back-office screens. AI prompt for reviewing a screen against the five rules in the description."],
    ["Tags",                    "back-office screens, officer experience, usability, form design, service design, education, Progressa, supplementary"],
    ["Playlist (YouTube)",      "KP4 — Module 3: Design one service as a story your officials can check"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: the officer's screens); §4.3 (AI integration: the screen review, and an AI assistant that marks open questions instead of guessing); §4.4 (demonstration in the education sector)"],
    ["PAERA citations",         "None. The content is the method's own, and the subtopic cites no public source."],
    ["External-link list",      "None. This subtopic cites no external source."]
  ]
}));

// ---------- 3.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 3.5",
  title: "The walk-through your officials click",
  runtime: "~5 min",
  words: 499,
  paeraAnchor: "None public. The content is the SDD method's own: the walk-through a program produces from the written screens. Demonstration segment: storyboard in section 4.8",
  singleMessage: "The walk-through is produced from the written screens, never drawn by hand, and every page shows its version.",
  practice: "a list of questions for the official to ask at each page of the walk-through",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The walk-through your officials click'. Voice-over begins." },
    { text: "Officials cannot judge a service from a list of fields. They can judge it by clicking through it. A walk-through lets them do that before anything is built, and shows them that they are judging the screens the builder will build." },
    { cue: "Slide 2 — Title: 'What the walk-through is'. Body, three text rows: 'Simple web pages, one for each screen, linked in the order the person meets them.' 'The failures as side paths.' 'Produced by a program from the written screens; nobody draws it.'" },
    { text: "The walk-through is a set of simple web pages, one for each screen, linked in the order the person meets them, with the failures as side paths. Nobody draws it. A program produces it from the written screens, so it shows exactly what the screens say and nothing else. When the screens change, the program produces the pages again, from the changed screens." },
    { cue: "Slide 3 — Title: 'Never by hand, and a version on every page'. Body, three text rows: 'A page corrected by hand no longer shows what the builder will build.' 'A drawing may show what the designer hoped.' 'Every page carries a stamp: which screens, which version, which date.'" },
    { text: "Nobody corrects a page by hand, because a page corrected by hand no longer shows what the builder will build. A drawing in a presentation tool has the same weakness: it may show what the designer hoped, and nobody can tell which version of the screens it shows. So every page carries a stamp at its top: the screens it was produced from, their version and their date." },
    { cue: "Slide 4 — Title: 'Progressa: the pages of one goal'. Body, one stamp line: 'Screens of apply for a provisional licence, version 1.2, 14 November 2026.' Then six text rows: 'Page 1 — ask to apply.' 'Page 2 — the standards and the kind of institution.' 'Page 3 — the particulars; side pages: a document left out, a name already held.' 'Page 4 — confirm and pay; side page: the fee not recorded.' 'Page 5 — the application received.' 'Two endings: received, or nothing recorded.'" },
    { text: "In Progressa, the goal to apply for a provisional licence has five pages, one for each screen, with side pages for the failures and a page for each of the two endings. Every page carries the same stamp: the screens of that goal, version 1.2, of 14 November 2026. The Registrar of PHEQA and the supplier's builder sat at one screen, with the head of the registration desk beside them, and clicked from the first page to the end, then down each side path." },
    { cue: "Slide 5 — Title: 'What clicking found'. Body, three text rows: 'Page 2: the fee is not shown until page 4. Show it beside the standards.' 'A side page: is a name held by an institution whose licence was cancelled still held? An open line.' 'Page 5: the application number is not the register number. Builder and desk now agree.'" },
    { text: "Three things came up that a list of fields would never have shown. On page 2, the head of the desk asked where the applicant sees the fee. Not until page 4, so the Registrar asked for it beside the standards. On a side page, the Registrar asked whether a name held by an institution whose licence was cancelled is still held. Nobody knew, so it became an open line. On page 5, the builder learnt that the application number is not the register number." },
    { cue: "Slide 6 — Title: 'One shared picture'. Body, two text rows: 'The policy side recognises its counter.' 'The technical side sees exactly what to build.' Footer line: 'The same page, the same version, the same question.'" },
    { text: "This is where the policy side and the technical side of a service meet. The Registrar and the head of the desk recognised their counter in the pages. The builder saw exactly what to build. They pointed at the same page, with the same version stamp, and agreed or disagreed about the same thing. The walk-through gives both sides one shared language, so a decision means the same thing in both rooms." },
    { cue: "Slide 7 — Title: 'The walk-through, clicked'. Demonstration segment, storyboard until recorded (section 4.8): the walk-through of apply for a provisional licence opened in a browser and clicked from page 1 to the confirmation, the stamp shown on each page. Text-only stand-in until the recording exists: the seven steps of the storyboard, one line each, with the line 'Not yet recorded' at the foot." },
    { text: "Here the walk-through is clicked from the first page to the confirmation, and at each page the stamp is checked against the version of the screens. It passes when every page opens, every stamp shows the same version as the screens, and the path ends on the confirmation. Until the recording is made in Progressa's names, a storyboard stands in its place." },
    { cue: "Slide 8 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The walk-through is produced from the written screens, never drawn by hand, and every page shows its version.'" },
    { text: "Ask for the walk-through, not a drawing. Check the version stamp on every page, and let the official, not the builder, hold the mouse." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The walk-through your officials click'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 3.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Three text rows: what the walk-through is.",
      "Text-only list. The method's own content; no source is cited."],
    ["3", "Three text rows: why it is never corrected by hand, and the stamp on every page.",
      "The core payload."],
    ["4", "One stamp line and six text rows: Progressa's pages of the goal.",
      "The stamp is quoted as the worked example gives it. The date is invented, as every date of the example is."],
    ["5", "Three text rows: what the clicking found.",
      "Roles, never persons."],
    ["6", "Two text rows and a footer line: the shared picture.",
      "Two text boxes side by side, policy side and technical side, are allowed; labels in plain text only."],
    ["7", "Demonstration segment (storyboard until recorded). Text-only stand-in: the seven storyboard steps, one line each, and 'Not yet recorded'.",
      "Replaced by the recording of the 3.5 walkthrough once the pages are produced in Progressa's names. Until then, nothing on this slide claims a recording."],
    ["8", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word. This subtopic has no Sources slide: it cites no external source."]
  ],
  aiTip: {
    title: "Write the questions to ask while clicking a walk-through",
    problem: "Officials who click a walk-through for the first time often agree to every page, because nothing looks wrong. The prompt gives the official who does the work a short set of questions for each page, drawn from the goal's story, so that the session tests the screens instead of admiring them.",
    prompt: "Below is the main story of one goal of a public service in [country X], with its failures and the guarantees the authority makes [paste them]. Below that is the list of the walk-through's pages, each with the screen it shows, the version stamp it carries and where it leads [paste the list]. For each page, write three to five questions that the official who does this work every day should ask while clicking it. Include: (1) at every page, whether its version stamp matches the version of the screens to be accepted; (2) where each value shown comes from, and whether the official would trust it; (3) what the official does at the counter at this point that the page does not show; (4) for each side page, whether the failure it shows ends as the story says. Write the questions in plain words for the official, not for the builder. Do not answer any question. Output: a list of questions for the official to ask at each page of the walk-through, grouped by page, with a blank line under each for the answer or the open line it becomes.",
    io: "Input: the goal's story with its failures and guarantees, and the list of the walk-through's pages. Output: a list of questions for the official to ask at each page of the walk-through.",
    safeguard: "The questions are asked by the official who does the work, not by the builder. An answer the walk-through cannot give is recorded as an open line with an owner; it is never answered by the builder from memory."
  },
  metadataRows: [
    ["Working title",          "The walk-through your officials click"],
    ["YouTube-optimised title", "Let officials click the service before it is built: a walk-through with a version on every page"],
    ["Description (60 words)", "A walk-through is a set of simple pages, one for each screen, produced by a program from the written screens and never drawn by hand. Every page shows the version of the screens it came from, so officials and the builder judge the same thing. See Progressa's walk-through and what clicking it found. AI prompt for the questions officials should ask while clicking, in the description."],
    ["Tags",                    "walk-through, clickable prototype, service design, user acceptance, policy and technical teams, education, Progressa, specification"],
    ["Playlist (YouTube)",      "KP4 — Module 3: Design one service as a story your officials can check"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: the walk-through of one goal); §4.1 (a step of the method, produced by a program and never by hand); §4.3 (AI integration: the questions for the session); §4.4 (the demonstration segment in the education sector); §4.6 (an example of the step's output); §6 (demonstration materials)"],
    ["PAERA citations",         "None. The content is the method's own, and the subtopic cites no public source."],
    ["External-link list",      "None. This subtopic cites no external source."]
  ]
}));

// ---------- 3.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 3.6",
  title: "The review: three people, every open line given a name",
  runtime: "~5 min",
  words: 464,
  paeraAnchor: "PAERA version 1.0 (GovStack, 25.05.2024), section 4.5 (Digital Co-creation)",
  singleMessage: "The owner, the builder and the person who will live with the result agree the screens; nothing leaves the room unowned.",
  practice: "a list of open lines, each with an owner and a date",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The review: three people, every open line given a name'. Voice-over begins." },
    { text: "A review that ends with 'we will look into it' has decided nothing. The review you convene for a goal's screens ends with a record: every open question, the person who owns it, and the date it is due." },
    { cue: "Slide 2 — Title: 'Three seats'. Body, three text rows: 'The owner — answers for what the documents say.' 'The builder — says whether he can build without asking anything.' 'The person who will live with the result — says whether the screens are her work as she does it.' Footer line: 'The convener accepts the record and takes no seat.'" },
    { text: "Three people sit at the review. The owner of the screens answers for what the documents say. The builder says whether he can build each screen without asking anybody anything. And the person who will live with the result says whether the screens are her work as she does it. At PHEQA, those are the supplier's analyst, the supplier's builder and the head of the registration desk. The Registrar convenes the meeting and accepts its record, but takes no seat." },
    { cue: "Slide 3 — Title: 'Four questions every review of screens puts'. Body, four numbered text rows: '1. Does every screen serve a step or a failure, and is every one served?' '2. Does every value say where it comes from?' '3. Could the builder build each screen without asking anybody anything?' '4. Would the person who will use it recognise it as her work?'" },
    { text: "The convener opens with four questions. Does every screen serve a step or a failure of the story, and is every step and failure served? Does every value say where it comes from? Could the builder build each screen without asking anybody anything? Would the person who will use it recognise it as her work? Then the person from the desk holds the mouse and clicks through the walk-through, page by page." },
    { cue: "Slide 4 — Title: 'Progressa: one hour, five open lines'. Body, a plain-text table of five rows with three columns (what is open; owner; date): 'Show the fee on S2 as well as S4 — the supplier's analyst — 26 November.' 'Is a name held by a cancelled institution still held? — the Registrar — 3 December.' 'The governing board, one member to a line — the supplier's analyst — 26 November.' 'What may the screen say when PNIA does not answer? — the head of the ICT unit — 3 December.' 'Is a printed confirmation asked for anywhere? — the Registrar — 26 November.'" },
    { text: "PHEQA's review of the licence screens took one hour. Its record holds five open lines. Show the fee on the second screen as well. Decide whether a name held by an institution whose licence was cancelled is still held. List the members of the governing board one to a line. Decide what the screen may say when PNIA does not answer. Check whether anyone asked for a printed confirmation. Every line has a named owner and a date." },
    { cue: "Slide 5 — Title: 'After the room'. Body, three text rows: 'Screens changed by their owner; the walk-through produced again.' 'Each answer written into the document that owns the fact.' 'Accepted when every line is closed, or allowed to stay open with its owner.'" },
    { text: "After the meeting, the owner changes the screens for the lines that are his, and the walk-through is produced again. Each other answer is written into the document that owns the fact: the shared lists and settings, the architecture, or the register of requirements. If the room cannot name an owner for a line, the record says: owner to be named by the Registrar. She names one before she accepts the screens. She accepts them when every line is closed, or allowed to stay open with its owner." },
    { cue: "Slide 6 — Title: 'Working together, through a gate'. Body, two quoted text rows from PAERA, section 4.5, Digital Co-creation: 'Robust project governance frameworks.' 'Stage-gate models with agile iterations.' Footer line: 'The review is that gate for one goal.'" },
    { text: "PAERA, GovStack's reference architecture for public administration, gives a section to digital co-creation. It says a transformation has a higher chance of success when it is done within the local digital ecosystem, and it recommends robust project governance and stage gates. The review is a gate of that kind for one goal. Before you accept its record, count the open lines and the owners. A record with no open lines usually means the review was not held, or nobody spoke." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The owner, the builder and the person who will live with the result agree the screens; nothing leaves the room unowned.'" },
    { text: "Seat the owner, the builder and the person who will use the service. End with every open line written down, each with a name and a date." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA version 1.0 (GovStack, 25.05.2024), section 4.5, Digital Co-creation. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The review: three people, every open line given a name'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 3.6) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Three text rows and a footer line: the three seats, and the convener.",
      "Roles, never persons. The governance structure of the review, in text."],
    ["3", "Four numbered text rows: the four questions of the review.",
      "The core payload."],
    ["4", "Plain-text table: the five open lines of PHEQA's review, each with its owner and date.",
      "The dates are invented, as every date of the worked example is."],
    ["5", "Three text rows: what happens after the meeting.",
      "Text-only list."],
    ["6", "Two quoted text rows from PAERA section 4.5, and a footer line.",
      "Quoted word for word from the GovStack policy recommendations under the heading 'IT Project' of PAERA v1.0, section 4.5, marked as quotations."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Turn review notes into open lines with owners and dates",
    problem: "Notes taken at a review are full of half-decisions: to check, someone will ask, later. Unless each becomes a line with an owner and a date, it is decided by whoever meets it first, usually the builder, under deadline. The prompt turns the notes into the record of the review.",
    prompt: "Below are the notes taken at a review of the screens of one goal of a public service in [country X] [paste the notes]. Below that is the list of the people present, with their roles [paste it]. Turn the notes into a list of open lines. For each line give: (1) what is open, in one sentence, in the notes' own words where possible; (2) the screen or page it concerns; (3) the owner, only if the notes name one; (4) the date, only if the notes give one; (5) the document where the answer belongs, if the notes say. Where the notes name no owner, write 'owner to be named at the review'; where they give no date, write 'date to be set'. Do not assign an owner or a date yourself. List separately anything the notes record as decided, with who decided it. Output: a list of open lines, each with an owner and a date or the mark that one is missing, then the list of decisions.",
    io: "Input: the notes of a review and the list of the people present. Output: a list of open lines, each with an owner and a date, or marked where one is missing.",
    safeguard: "An owner is named only if the notes name one. A line with no owner in the notes is returned marked 'owner to be named at the review', and the convener names the owner; the prompt never assigns one."
  },
  metadataRows: [
    ["Working title",          "The review: three people, every open line given a name"],
    ["YouTube-optimised title", "Run a design review that ends with owners: three seats, four questions, every open line named"],
    ["Description (60 words)", "A review of a service's screens seats three people: the owner of the documents, the builder, and the official who will live with the result. It ends with a record in which every open line has an owner and a date. See PHEQA's one-hour review and its five open lines. For managers who convene reviews. AI prompt for turning review notes into open lines in the description."],
    ["Tags",                    "design review, governance, open issues, co-creation, PAERA, service design, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 3: Design one service as a story your officials can check"],
    ["ToR §4 coverage",         "§3.4 (design service workflows: the review of one goal); §4.1 (the decision point of the step); §4.2 (international frameworks: PAERA); §4.3 (AI integration: the record of the review); §4.5 (governance structures); §4.6 (an example of the step's output); §6 (templates: the record of open lines)"],
    ["PAERA citations",         "§4.5 Digital Co-creation"],
    ["External-link list",      "PAERA version 1.0 (GovStack, 25.05.2024), section 4.5"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Module 3 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For Module 3, 'act' means produce the matching working artefact: the main story of one goal with its assumptions marked, the failures of each step with proposed endings, the screens with the source of every value, the breaches on an officer's screen, the questions for a walk-through session, or the record of a review as open lines with owners and dates. Each subtopic's AI usage tip produces that artefact."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template of the Knowledge Products and Video Materials Guide, section 3.i: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only, with no images. Diagrams and text boxes are used only where strictly necessary, and all their labels are plain text. No country emblems and no agency logos. No screenshot of any real system appears on a slide; the screens of the worked example are described in text. The single-sentence summary slide that closes each subtopic carries the single message word for word, in 28pt type, with the on-screen practice box."),

  H3("4.3 No individuals on screen"),
  P("No individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or a voice-over over the screen only. The choice is ITU's; the scripts work with either. The demonstration segment of 3.5 is a recording of the screen with a voice-over."),

  H3("4.4 Voice and tone"),
  P("Direct address ('your supplier', 'before you accept'). Plain language at about an eighth-grade English level, held even though the Architect audience is closer to the build. The terms the module needs (goal, story, failure and ending, screen, the source of a value, shared list, setting, walk-through, version stamp, open line) are explained in plain words on first use; headlines stay capability-led. The documents of the method are named by what they are for, never by a number or a folder, and no rule identifier, command or file format is spoken or shown. People of the worked example are named by role, never as persons."),

  H3("4.5 External links and 'Find the link in the description'"),
  P("Every subtopic has an external-link list in its metadata, and every script that cites a source refers to it with the convention 'Find the link in the description' rather than reading addresses aloud. ITU's production pipeline compiles each list into the video's description. Subtopics 3.4 and 3.5 cite no external source and have no Sources slide. The aggregate list, with the addresses, is in section 6."),

  H3("4.6 What is said to exist, and what is not"),
  P("The worked example of every subtopic is a simulated case for Progressa, a fictional country; every institution, name, date and figure in it is invented, including the dates in November 2026 that the walk-through and the review carry. No script, slide or metadata line in this bundle says that the walk-through of Progressa's goal has been produced or recorded. The walk-through in Progressa's names is produced by the program from the screen record written for Progressa before the recording is made; no page is drawn or corrected by hand. Until then, the storyboard in section 4.8 stands in its place."),

  H3("4.7 The worked examples"),
  P("The scripts draw on the accepted worked examples of the KP4 examples folder, KP4-DSD/examples/: E3-1 (the main story), E3-2 (the five failures), E3-3 (the five screens and the source of every value), E3-4 (the inspector's screen before and after the five rules), E3-5 (the walk-through and what clicking it found) and E3-6 (the review and its open lines), with the fact sheet E0 for the names. They are used as they stand: the scripts tell the examples' facts in fewer words and change none of them."),

  H3("4.8 Storyboard for 3.5 — the walk-through of 'apply for a provisional licence', clicked from the first page to the confirmation"),
  P("The storyboard lists the steps the recording will show, in order, with what the viewer sees and what counts as a pass. It is written from the worked examples E3-3 and E3-5. The segment needs only the walk-through pages of the goal, produced in Progressa's names; it needs no generated application. Every step below is still to be recorded; none has been."),
  genericTable([700, 3000, 3000, 3000], ["Step", "What is done", "What the viewer sees", "What counts as a pass"], [
    ["1", "Open the screen record of the goal 'apply for a provisional licence' at the version to be accepted.", "The version line of the screen record: version 1.2, 14 November 2026.", "The version is read and noted before any page is opened."],
    ["2", "Open page 1 of the walk-through in a browser.", "Screen S1, ask to apply: the applicant's name, marked as taken from PNIA's sign-in; the applicant's earlier applications; the button to apply; the stamp at the top of the page.", "The page opens, and its stamp shows the version noted in step 1."],
    ["3", "Click the button to apply for a provisional licence.", "Page 2, screen S2: PHEQA's standards for new institutions with their version, and the three kinds of institution from the shared list.", "The page opens; its stamp shows the same version."],
    ["4", "Choose a kind of institution and go on.", "Page 3, screen S3: the proposed name, the address and each particular, each marked as entered here; the place to attach the evidence of funding; the links to the side pages for a document left out and a name already held.", "The page opens; its stamp shows the same version."],
    ["5", "Go on to confirm.", "Page 4, screen S4: everything given, shown back; the fee due, read from PHEQA's setting; the button to confirm and pay; the link to the side page for a fee not recorded.", "The page opens; its stamp shows the same version."],
    ["6", "Confirm and pay.", "Page 5, screen S5: the application's number, the date received, the institution's name and kind, and its particulars.", "The page opens; its stamp shows the same version."],
    ["7", "Go on to the end of the path.", "The success ending: the application is received.", "The path ends on the confirmation, and every stamp seen from step 2 to step 7 shows the version noted in step 1."]
  ]),
  spacer(120),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU at the Tuesday weekly call."),

  H3("5.1 The recording of 3.5"),
  P("The demonstration segment of 3.5 can be recorded as soon as the screen record of the goal is written in Progressa's names and its walk-through produced by the program; it does not wait for any generated application. Who records it, and in which production step, is to be agreed with ITU's production."),

  H3("5.2 Dates of the worked example"),
  P("The worked example dates its walk-through and its review in November 2026, after the date of this bundle; every date in it is invented. If ITU prefers dates that do not lie ahead of the viewer, the dates change in the worked examples first and the scripts follow."),

  H3("5.3 Editorial tone calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'A guess made late, under deadline, is how an agreed service changes on the way' (3.1); 'If the answer is the builder, the decision was taken by the wrong person' (3.2); 'A record with no open lines usually means the review was not held, or nobody spoke' (3.6)."),

  H3("5.4 Signposts"),
  P("The project's standing rules ask for African signposts and one international polestar. The plan names no public source on an African country for the matters of this module, so no country signpost is used; the worked examples are Progressa's throughout."),

  H3("5.5 The edition of the Registration specification"),
  P("Subtopics 3.1 to 3.3 cite the GovStack Registration Building Block specification at the site's default edition, labelled 23Q4, whose version history ends at 1.0. If GovStack publishes a later edition before the videos are produced, the six sections cited are checked again against it."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the six subtopics for ITU's video production pipeline, to be split per subtopic into the video descriptions. Every source is public and is one the KP4 outline and content plan version 0.2 names for the subtopic, at the edition it names."),
  genericTable([1300, 8400], ["Subtopic", "Sources referenced, with addresses"], [
    ["3.1", "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1, 6.3.2.2 and 6.2.3 (https://specs.govstack.global/registration)."],
    ["3.2", "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.3.1, 6.3.3.2 and 6.3.3.3 (https://specs.govstack.global/registration)."],
    ["3.3", "GovStack Registration Building Block specification, edition 23Q4 (version history to 1.0), sections 6.3.2.1 and 6.3.2.2 (https://specs.govstack.global/registration)."],
    ["3.4", "None. The subtopic rests on the method's own rules and cites no external source."],
    ["3.5", "None. The subtopic rests on the method's own rules and cites no external source."],
    ["3.6", "PAERA version 1.0 (GovStack, 25.05.2024), section 4.5, Digital Co-creation (https://paera.govstack.global/)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP4 Module 3 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP4 Module 3 (Designing Digital Government Services using a Building Block Approach): design one service as a story your officials can check.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP4 Module 3 Script Bundle v0.1 · 4 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP4_Module3_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
