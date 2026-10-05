// Build KP4 Module 1 — Video Script Bundle v0.1
// Designing Digital Government Services using a Building Block Approach · Module 1 — Why digital services go wrong,
//   and the method that prevents it (Strategist register).
// v0.1 (4 Oct 2026): written on the KP4 outline and content plan, version 0.2 (the public sources fixed by edition),
//   section 1, module 1, under instruction ITUKP-C-105. Each subtopic's single message is the plan's, word for word;
//   every public source cited is one the plan names for that subtopic, at the edition it names (only 1.2 has one:
//   PAERA v1.0 §2.3); every worked example is the accepted one in KP4-DSD/examples/ (E1-1 to E1-5, with the facts
//   of E0), used as it stands.
// The content of the five subtopics is the SDD method's own. Under the owner's ruling of 3 October 2026 the scripts
//   present it as the SDD method and cite none of the method's files; they name the twelve documents by what they are
//   for, and give no rule identifiers, no commands of the kit and no file formats (the plan, "What holds for every
//   subtopic"). Nothing is generated in this module, so no statement here says that anything runs.
// Placement of the module's self-check: section 2.1, beside the at-a-glance table. Sections 1 to 6 keep the KP3 shape,
//   because the kit's GitBook copy (bundle_to_gitbook_md.py) strips section 5 and renumbers section 6 by number.
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
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

// Persona for KP4 Module 1 (Strategist throughout, as the plan's module table sets it).
const PERSONA_S = "S (Strategist) — the public-sector middle manager in education who commissions the service, judges the supplier's offer, convenes the review and answers to the minister and the donor";

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
                         scriptBeats, slideSpecRows, aiTip, metadataRows, practice, persona = PERSONA_S }) {
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
    children: [new TextRun({ text: "Module 1 — Why digital services go wrong, and the method that prevents it",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Module 1 of KP4"],
    ["Version",             "v0.1 — written on the KP4 outline and content plan, version 0.2, of 4 October 2026"],
    ["Date",                "4 October 2026"],
    ["Module persona",      PERSONA_S],
    ["Subtopics",           "Five subtopics (1.1 – 1.5), each shipped as one standalone video of about five minutes"],
    ["Module runtime",      "Approximately 25 minutes across five standalone videos"],
    ["Worked examples",     "One for each subtopic, set in Progressa: the story of one institution that gave its particulars twice, a supplier's proposal, one line of a specification, the twelve documents filled for one service, and who writes, checks and accepts each of them"],
    ["Demonstration segments", "None. Nothing is generated in this module"],
    ["Self-check",          "Four questions drawn from the five single messages, in section 2.1"],
    ["Prepared by",         "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 1 of KP4 — Designing Digital Government Services using a Building Block Approach. Module 1 explains why a service agreed with officials is so often not the service that is delivered, and what a manager can put in the way. It teaches the three places where an agreed service gets lost, three rules a manager can hold a supplier to, why an open question with a name on it belongs in a specification and a guessed answer does not, the twelve documents of the method from the request to the running service, and who writes, checks and accepts each of them when an AI assistant does part of the writing. The register is plain English at about an eighth-grade level, and each subtopic leads with what the listener can do. The five videos are numbered 1.1 to 1.5 and each stands alone. All slide specifications follow ITU's text-only branding. Each subtopic carries an AI usage tip with a copy-paste Claude prompt. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the five video scripts of Module 1 of Knowledge Product 4 (Designing Digital Government Services using a Building Block Approach), with slide specifications, metadata, AI usage tips, production notes and the module's self-check. It is the v0.1 working draft, written on the KP4 outline and content plan, version 0.2, whose section 1 fixes each subtopic's single message, sources, worked example and AI usage tip."),
  P("KP4 teaches a government team to design a digital public service on shared building blocks and have it built on a low-code platform, using specification-driven development (SDD): a method in which every document a person writes is accepted before the next is begun, and the last is turned into the running service by a program. Module 1 is the first of six. It gives the manager the reason a service agreed with officials is so often not the service delivered, three rules a manager can hold a supplier to, and the twelve documents of the method with the people who write, check and accept each. Nothing is generated in this module."),

  H3("1.2 How the method is presented"),
  P("The content of all five subtopics is the SDD method's own; only subtopic 1.2 cites a public source, PAERA, for the shared picture between the policy side and the technical side. The scripts present the method's content as the SDD method and cite none of its working files. They name the twelve documents by what each is for, never by a number or a folder, and give no rule identifiers, no commands and no file formats. Where a technical word would be needed, the script names the thing instead: 'the file a program reads' for the application model. Whether each of the method's standards is in force or still a draft is stated once in KP4, on the written page of subtopic 6.7, and not in these videos."),

  H3("1.3 The names used for Progressa"),
  genericTable([2200, 7500], ["Name", "What it is, and its part in Module 1"], [
    ["PHEQA", "The Progressa Higher Education Quality Authority. It registers and licenses private higher-education institutions and keeps the register of institutions. Every example of Module 1 is set in its registration of institutions."],
    ["MoEYS", "Progressa's ministry of education. It publishes the list of registered institutions in the Gazette; in 1.1 it asks an institution again for the particulars PHEQA already holds."],
    ["PNIA", "The Progressa National Identity Authority. Its sign-in tells a service who a person is; in 1.2 the clause on acceptance ends with an officer who signs in through it."],
    ["Linkup", "The data exchange layer set up in KP2, which carries MoEYS's reading of PHEQA's register in later modules."],
    ["The Payments block", "The government's Payments block, through which the application fee is paid in later modules."],
    ["PDCA", "The Progressa Digital Credentials Authority, the next service on the same foundation, in subtopic 6.5."],
    ["The supplier", "A private company PHEQA contracts to specify and build its application. Its analyst, builder and solution architect write most of the documents; PHEQA accepts them."],
    ["Harbourview University College", "A private institution in Progressa, under the number INS-00217 in PHEQA's register. Its registrar tells the story of 1.1."]
  ]),
  P("Every institution, name, date and figure in the examples is invented for Progressa, and nothing in them is taken from any country's results. The examples name roles, never persons: the Registrar of PHEQA, the head of the registration desk, the registration officer, the head of PHEQA's ICT unit, the supplier's analyst and builder."),

  H3("1.4 How this module carries the two arguments every Knowledge Product makes"),
  P("Every Knowledge Product of this series carries two structural arguments. The first, a shared picture between the policy side and the technical side, is carried by subtopic 1.2: what officials review must be a story they recognise, which PAERA describes as the work of enterprise architecture, a set of documents that bridges the gap between business and IT. The second, that planning enables re-use, is not argued in Module 1: in KP4 it is carried by subtopic 2.1, where the sector's catalogue shows many services resting on the same blocks, and by subtopic 6.5, where the next service is built on what the first proved."),

  H3("1.5 How to read this document"),
  P("Section 2 gives Module 1 at a glance, with the module's self-check. Section 3 holds the script of each subtopic: shaded blocks are on-screen cues, plain paragraphs are the voice-over, and the slide specification, AI usage tip and metadata follow. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 1 at a glance"),
  P("Five standalone subtopic videos. One Strategist persona throughout. Total runtime approximately twenty-five minutes. Each video has a single message, quoted word for word from the KP4 outline version 0.2, and is discoverable on its own; the playlist provides navigation but is not needed to understand any one video."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Runtime"], [
    ["1.1", "Where an agreed service gets lost",
      "An agreed service is lost at three places: a question nobody decided, an answer nobody passed on, a rule nobody enforced.", "~5 min"],
    ["1.2", "Three rules you can hold a supplier to",
      "Review a story, not a list; measure against a list the design did not write; end one check on the running system.", "~5 min"],
    ["1.3", "A question with a name on it is part of the specification",
      "An open question with an owner and a date is acceptable; a question answered by a guess is a fault.", "~5 min"],
    ["1.4", "Twelve documents from the request to the running service",
      "Each document has a writer, an input, an output, a person who accepts it and a check, in a fixed order.", "~5 min"],
    ["1.5", "Who writes, who checks, who accepts",
      "The AI assistant may draft; a named person accepts, amends or sets aside each proposal, and only what was accepted stands.", "~5 min"]
  ]),

  H3("2.1 The module's self-check"),
  P("Four questions on what a manager decides, drawn from the single messages of the five subtopics, to be answered after the five videos. Questions 1 and 3 are multiple choice. Questions 2 and 4 ask for a short answer, which is right if it makes the point of the model answer. Cover the model answers, write your own, then compare. Three or four right means the module's point has landed; below three, watch again the video named beside each question you missed. The threshold is a proposal, to be tested with the first learners."),
  genericTable([600, 3900, 3700, 1500], ["#", "Question", "Model answer", "Drawn from"], [
    ["1", "A ministry's new service asks an institution for particulars it already gave the quality authority. The national strategy says that a fact is entered once, but no document of either project tested that rule and no review asked about it. At which of the three places was the service lost? (a) A question nobody decided. (b) An answer nobody passed on. (c) A rule nobody enforced. (d) None of them: it is a programming error.",
      "(c). The rule was written in the strategy and enforced nowhere: no check, no person and no program held anyone to it. It is not a programming error: each of the three places is a decision about the service that was never made, never written where it was needed, or never checked.",
      "1.1 Where an agreed service gets lost"],
    ["2", "A supplier's proposal asks officials to sign a list of 140 fields, promises a requirements list written from the approved design, and ends testing on the supplier's own test server. Name the three rules it falls short of, and write the clause you would put to the supplier for one of them.",
      "Review a story, not a list; measure against a list the design did not write; end one check on the running system. A clause for any one of them is right, for example: acceptance ends when an officer of the authority finishes a real task of each goal on the authority's own installation, and the record of that task is kept as the evidence.",
      "1.2 Three rules you can hold a supplier to"],
    ["3", "A draft you are asked to sign says that an institution may appeal within 30 days. Nobody gave that figure. What is the right response? (a) Sign it: 30 days is a common period. (b) Replace the figure with a named question, 'the appeal period: to be confirmed by the Registrar by a set date', and count it among the document's open questions. (c) Ask the supplier to choose a safer figure, such as 60 days. (d) Delete the line until the law is amended.",
      "(b). An open question with an owner and a date is acceptable; a question answered by a guess is a fault, even when the guess turns out right, because nobody can tell it from a fact. (c) is another guess, and (d) loses something the institution is entitled to.",
      "1.3 A question with a name on it is part of the specification"],
    ["4", "Your supplier proposes that an AI assistant writes the register of what was asked, and that the supplier's own lead accepts it. What do you require before you agree?",
      "A named person in your own organisation accepts the register, and rules on each entry: the assistant drafts, a person accepts, amends or sets aside each proposal, and only what was accepted stands. The register keeps its place in the fixed order, before any design, with its writer, its input, its output, the person who accepts it and its check written down.",
      "1.4 Twelve documents from the request to the running service; 1.5 Who writes, who checks, who accepts"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 1.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 1.1",
  title: "Where an agreed service gets lost",
  runtime: "~5 min",
  words: 534,
  paeraAnchor: "None. The content is the SDD method's own: an agreed service is lost at three places, and a silence that is named, owned and counted is a specification. No public source is cited.",
  singleMessage: "An agreed service is lost at three places: a question nobody decided, an answer nobody passed on, a rule nobody enforced.",
  practice: "a table of the project's problems, each placed at one of the three places with one line of reason",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Where an agreed service gets lost'. Voice-over begins." },
    { text: "Your minister agreed a service with the officials who will run it. A year later, the service that arrives is not the one they agreed. You will be asked why. There is an answer you can give, and it has three parts." },
    { cue: "Slide 2 — Title: 'Between what was agreed and what runs'. Body, two text rows: 'Every question about the service is answered by somebody.' 'If nobody is made to ask it, it is answered at the keyboard, without a record.'" },
    { text: "Between what officials agree and what a system does, there is a wide space. In that space, every question about the service must be answered by somebody. What happens when an applicant leaves a document out? Which body keeps the institution's address? If nothing forces those questions into the open, they are still answered: quietly, by whoever is at the keyboard that day, and with no record. The service is delivered. It simply does not do what anybody agreed it would do." },
    { cue: "Slide 3 — Title: 'Three places a service gets lost'. Body, three numbered text rows: '1. A question nobody decided.' '2. An answer nobody passed on.' '3. A rule nobody enforced.'" },
    { text: "The SDD method, short for specification-driven development, names three places where this happens. First, a question nobody decided: the people who agreed the service never settled a point, so the builder settled it alone, or nobody did. Second, an answer nobody passed on: somebody decided, but the decision never reached the document or the person who needed it. Third, a rule nobody enforced: the rule was written down, but no check, no person and no program held anyone to it." },
    { cue: "Slide 4 — Title: 'One institution, two counters'. Body, four text rows: 'March: Harbourview University College applies to PHEQA.' 'June: entered in PHEQA's register as INS-00217.' 'September: MoEYS asks for the same particulars on its own form.' 'Two weeks later: why does your address differ from PHEQA's?'" },
    { text: "Here is how it looked in Progressa. Harbourview University College, a private institution, applied to PHEQA, the quality authority, for its licence. In June PHEQA entered it in the register of institutions, under the number INS-00217. In September MoEYS, the ministry of education, asked for the same particulars on its own form. The college had moved its office in August and told PHEQA, but not the ministry. So the ministry asked why the two addresses differed. In the college registrar's words: everybody had agreed, in the national strategy, that an institution gives its particulars to the state once. We gave them twice and were then asked to explain the difference." },
    { cue: "Slide 5 — Title: 'Each loss, placed'. Body, a plain-text table of three rows: 'May MoEYS read PHEQA's register? Never decided. — A question nobody decided.' 'PHEQA's number INS-00217 never reached MoEYS. — An answer nobody passed on.' 'A fact is entered once: written in the strategy, checked nowhere. — A rule nobody enforced.'" },
    { text: "Now place each loss. Nobody ever decided whether MoEYS may read PHEQA's register, so the ministry built its own form and asked again. That is a question nobody decided. PHEQA gave the college a number, but nobody passed it to MoEYS, so the ministry's form had no place for it and could not look the college up. That is an answer nobody passed on. And the rule that a fact is entered once was written in the national strategy, but no document of either project tested it, and no review asked about it. That is a rule nobody enforced." },
    { cue: "Slide 6 — Title: 'None of the three is a programming error'. Body, two text rows: 'Each loss is a decision about the service: never made, never written where it was needed, or never checked.' 'A silence that is named, owned and counted is a specification.'" },
    { text: "Notice what is missing from this story: a programming error. Each loss is a decision about the service that was never made, never written into the right document, or never checked. That is why the method states its purpose in one sentence. A silence that is named, owned and counted is a specification. A silence filled in with a plausible answer is a fault dressed as a specification. The method's documents exist to close the three places, so that you can tell your minister where a service was lost, and what must change." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An agreed service is lost at three places: a question nobody decided, an answer nobody passed on, a rule nobody enforced.'" },
    { text: "When a service goes wrong, ask where it was lost: a question nobody decided, an answer nobody passed on, or a rule nobody enforced. Then fix that place." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Where an agreed service gets lost'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 1.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Two text rows: every question is answered by somebody; unasked, it is answered at the keyboard without a record.",
      "Sets the problem in the listener's terms. Text-only."],
    ["3", "Three numbered text rows: a question nobody decided; an answer nobody passed on; a rule nobody enforced.",
      "The core payload. The three rows stay on screen in this order; the same wording returns on slide 5."],
    ["4", "Four dated text rows: the college applies to PHEQA; enters the register as INS-00217; MoEYS asks again; the address question.",
      "Progressa's names as the plan gives them. No logos, no emblems, no picture of a building."],
    ["5", "Plain-text table of three rows: each loss, and the place it belongs to.",
      "The three places in the same words as slide 3, so the viewer can match them. Text boxes only."],
    ["6", "Two text rows: each loss is a decision; the method's sentence on a named, owned and counted silence.",
      "The method's sentence, set apart in larger body text. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word. No sources slide follows: this subtopic cites no external source."]
  ],
  aiTip: {
    title: "Place each problem of a past project at one of the three places",
    problem: "After a project, a lessons-learned note lists what went wrong, but not where the service was lost. Until each problem is placed, nobody can tell whether the fix is a decision, a document or a check, or who should make it.",
    prompt: "Below is the lessons-learned note of a project in [the ministry or agency] that built [the service] [paste the note]. An agreed service is lost at one of three places: (1) a question nobody decided, where the people who agreed the service never settled a point; (2) an answer nobody passed on, where a decision was made but never reached the document or the person who needed it; (3) a rule nobody enforced, where a rule was written down but no check, person or program held anyone to it. For each problem in the note, produce one row with: (a) the problem, in the note's own words; (b) the place, 1, 2 or 3; (c) one line of reason, quoting the sentence of the note it rests on. If a problem cannot be placed from what the note says, write 'cannot be placed from the note' and keep the problem as the note states it. Do not merge problems, and do not add problems the note does not state. Output: a table with one row per problem, then a count of the problems at each place and of those that could not be placed.",
    io: "Input: the project's lessons-learned note, as written. Output: a table of the project's problems, each placed at one of the three places with one line of reason, and the problems that could not be placed kept as the note states them.",
    safeguard: "The placing is a proposal, not a finding. The people who ran the project confirm each row before the table is used, and a problem the prompt cannot place is kept as it is, not forced into a place: forcing it would hide the very thing nobody has yet understood."
  },
  metadataRows: [
    ["Working title",          "Where an agreed service gets lost"],
    ["YouTube-optimised title", "Why the digital service you agreed is not the one delivered: three places it gets lost"],
    ["Description (60 words)", "A service agreed with officials is often not the service delivered. It is lost at three places: a question nobody decided, an answer nobody passed on, a rule nobody enforced. Follow one Progressa institution that gave its particulars twice, and see each loss placed. For managers who commission public services. AI prompt for sorting a project's lessons learned in the description."],
    ["Tags",                    "digital government, service design, specification-driven development, public sector, education, requirements, project lessons, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 1: Why digital services go wrong, and the method that prevents it"],
    ["ToR §4 coverage",         "§4.4 (education as the demonstration, with a method other sectors can use); §4.1 (the method as a whole: why each of its steps exists); §4.3 (AI integration — sorting a project's lessons learned)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. This subtopic cites no external source."]
  ]
}));

// ---------- 1.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 1.2",
  title: "Three rules you can hold a supplier to",
  runtime: "~5 min",
  words: 496,
  paeraAnchor: "PAERA v1.0 §2.3 (Role of Enterprise Architecture: a collection of documents intended to bridge the communication gap between business and IT stakeholders and facilitate planning), for the first rule as the shared picture. The three rules themselves are the SDD method's own.",
  singleMessage: "Review a story, not a list; measure against a list the design did not write; end one check on the running system.",
  practice: "a table of where the proposal falls short of the three rules, with the proposal's own words for each",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Three rules you can hold a supplier to'. Voice-over begins." },
    { text: "A supplier's proposal lands on your desk. It is long, it is confident, and it promises a complete service. Before you sign, three rules tell you whether you will be able to check what you are buying." },
    { cue: "Slide 2 — Title: 'Rule 1: review a story, not a list'. Body, two text rows: 'Officials agree to what a person does, step by step, and what they see at each step.' 'A list can be complete and still impossible to review.'" },
    { text: "The first rule: officials review a story, not a list. A list of eighty decisions can be complete and still impossible to review, because nobody can see what is missing from a list. A story shows it: a step with no response, a person who never appears again, a way of going wrong that nobody mentions. So officials agree to what a person does, step by step, and what that person sees at each step. The part a program later reads is taken from the story, never the other way round." },
    { cue: "Slide 3 — Title: 'A story is the shared picture'. Body, two text rows: 'PAERA: enterprise architecture is a set of documents that bridges the gap between business and IT, so that both can plan.' 'For one service, the story with its screens is that bridge.'" },
    { text: "PAERA, GovStack's reference architecture for public administration, describes enterprise architecture as a set of documents meant to bridge the communication gap between business and IT, so that both sides can plan together. For one service, a story with its screens does that job. The registrar recognises her own work in it, and the builder can build from it. A list of one hundred and forty fields is shared by nobody: the registrar cannot read it, and the builder never needed her signature on it." },
    { cue: "Slide 4 — Title: 'Rule 2: measure against a list the design did not write'. Body, two text rows: 'Write down what was asked before any design exists.' 'A list written from the design always matches the design.'" },
    { text: "The second rule: measure the design against a list the design did not write. If the list of what must be covered is drawn up from the design itself, the design will always look complete. This is the most common way a project reports full coverage of a system that is missing half of what it needed. So the list of what was asked is written first, in the customer's own words, before any design exists." },
    { cue: "Slide 5 — Title: 'Rule 3: end one check on the running system'. Body, two text rows: 'Documents can agree with each other and still describe something that does not work.' 'At least one check ends with a real person finishing a real task.'" },
    { text: "The third rule: end at least one check on the running system. Checks that compare one document with another are needed, but they share a blind spot. A set of documents can agree with each other perfectly and still describe something that does not work. So at least one check ends outside the documents: a real person finishes a real task, on the system the service will run on." },
    { cue: "Slide 6 — Title: 'A proposal for PHEQA, read against the rules'. Body, a plain-text table of three rows: 'Officials sign a data dictionary, a list of 140 fields. → PHEQA accepts the stories and a walk-through its officials can click.' 'Requirements written from the approved design. → A register of what PHEQA asked, accepted before any design.' 'Testing ends on the supplier's test server. → Acceptance ends when a PHEQA officer, signed in through PNIA, finishes a real task on PHEQA's own installation.'" },
    { text: "In Progressa, PHEQA, the quality authority for higher education, received a proposal for its registration service. It asked officials to sign a data dictionary: a list of one hundred and forty fields, the boxes its screens would hold. It promised a requirements list written from the approved design. And its testing would end on the supplier's own test server, which nobody from PHEQA uses. Each shortfall becomes a clause. PHEQA accepts stories and a walk-through, linked pages its officials click through, not fields. A register of what PHEQA asked is accepted before any design. And acceptance ends when a registration officer finishes a real task on PHEQA's own installation." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Review a story, not a list; measure against a list the design did not write; end one check on the running system.'" },
    { text: "Before you sign a proposal, find three things: what officials approve, what the design is measured against, and where testing ends. If any is the supplier's own, write the clause." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA, the Public Administration Ecosystem Reference Architecture, version 1.0 (GovStack, 2024), section 2.3, Role of Enterprise Architecture. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Three rules you can hold a supplier to'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 1.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Two text rows: officials agree to a story, step by step; a list hides what is missing.",
      "Rule 1. Text-only."],
    ["3", "Two text rows: PAERA on enterprise architecture as the bridge between business and IT; the story as that bridge for one service.",
      "The shared picture between the policy side and the technical side. PAERA is named in plain text; no GovStack logo."],
    ["4", "Two text rows: what was asked is written before the design; a list written from the design always matches it.",
      "Rule 2. Text-only."],
    ["5", "Two text rows: documents can agree and still not work; one check ends with a real person finishing a real task.",
      "Rule 3. Text-only."],
    ["6", "Plain-text table of three rows: what the proposal says, and the clause that replaces it.",
      "Progressa's names as the plan gives them. The arrow is a plain-text character, not a graphic."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the reference."]
  ],
  aiTip: {
    title: "Test a supplier's proposal against the three rules",
    problem: "A proposal can read well and still leave the authority unable to check what it is buying. Before signing, the manager needs to see where the proposal asks officials to approve a list, measures the design against its own list, or ends testing away from the running system.",
    prompt: "Below is a supplier's proposal to build [the service] for [the ministry or agency] [paste the proposal, or its sections on design approval, requirements and testing]. Test it against three rules: (1) review a story, not a list: officials approve what a person does step by step and what they see at each step, not a list of fields; (2) measure against a list the design did not write: the design is checked against a register of what was asked, written before the design from the customer's own words; (3) end one check on the running system: acceptance ends when a real user finishes a real task on the system the service will run on. For each rule, produce one row with: (a) the rule; (b) what the proposal says, quoted word for word with its section number; (c) whether it meets the rule, falls short of it, or says nothing; (d) one line on why. Judge only the text given; where the proposal is silent on a rule, write 'the proposal is silent'. Output: a three-row table, then a list of the shortfalls to raise with the supplier.",
    io: "Input: the supplier's proposal, or its sections on design approval, requirements and testing. Output: a table of where the proposal falls short of the three rules, with the proposal's own words for each, and a list of the shortfalls to raise with the supplier.",
    safeguard: "The prompt judges only the words it is given, and a proposal may answer a rule in an annex or a letter the prompt did not see. Confirm every shortfall with the supplier before it is used in a decision on the award or written into a clause."
  },
  metadataRows: [
    ["Working title",          "Three rules you can hold a supplier to"],
    ["YouTube-optimised title", "Three rules to hold a software supplier to before you sign"],
    ["Description (60 words)", "A supplier's proposal can promise a complete service and still leave you unable to check it. Three rules fix that: review a story, not a list; measure against a list the design did not write; end one check on the running system. See a proposal for Progressa's quality authority read against them. AI prompt for testing a proposal in the description."],
    ["Tags",                    "procurement, supplier management, digital government, service design, PAERA, enterprise architecture, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 1: Why digital services go wrong, and the method that prevents it"],
    ["ToR §4 coverage",         "§4.1 (governance of the work: three rules a manager holds a supplier to); §4.2 (international frameworks referenced: PAERA §2.3); §4.3 (AI integration — testing a proposal)"],
    ["PAERA citations",         "PAERA v1.0 §2.3 (Role of Enterprise Architecture)"],
    ["External-link list",      "PAERA, the Public Administration Ecosystem Reference Architecture, version 1.0 (GovStack, 2024), section 2.3"]
  ]
}));

// ---------- 1.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 1.3",
  title: "A question with a name on it is part of the specification",
  runtime: "~5 min",
  words: 459,
  paeraAnchor: "None. The content is the SDD method's own: the test of when a specification is good enough, and gaps that are named, owned and counted. No public source is cited.",
  singleMessage: "An open question with an owner and a date is acceptable; a question answered by a guess is a fault.",
  practice: "a list of the guessed answers in the draft, each turned into a named question with a proposed owner",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'A question with a name on it is part of the specification'. Voice-over begins." },
    { text: "You are asked to sign a specification. Every line in it looks certain. That is the moment to be careful, because a line that looks certain may be a guess, and nobody can tell a guess from a fact." },
    { cue: "Slide 2 — Title: 'The appeal period, written as a guess'. Body, two text rows: 'An institution may appeal within 30 days of PHEQA's decision. After 30 days the self-service no longer offers the appeal.' 'Nobody gave the figure.'" },
    { text: "In Progressa, a supplier's analyst was writing the part of PHEQA's service in which an institution appeals against a decision of the quality authority. Progressa's regulations give the right to appeal, but the text the analyst had did not say within how long. The analyst needed a number to draw the screens, so the draft said thirty days. Nobody gave that figure. It looks like a fact, and it will be built as a fact: on day thirty-one, the self-service refuses the appeal." },
    { cue: "Slide 3 — Title: 'What the guess costs'. Body, two text rows: 'If the true period is longer, the system turns a lawful appeal away.' 'Nobody can tell which figures were given and which were guessed.'" },
    { text: "If the true period is longer, an institution with a lawful appeal is turned away by the system, and nobody knows why the system says thirty. The guess may even be right. It is still a fault, and a worse one than a blank would have been, because a blank is visible and a guess is not. Nobody reading the document can tell which of its figures were given and which were invented to keep the work moving." },
    { cue: "Slide 4 — Title: 'The same line, as a named question'. Body, two text rows: 'The appeal period: to be confirmed by the Registrar of PHEQA by 15 November 2026.' 'Open question 7 of 9 of this document.'" },
    { text: "Now the same line, written under the SDD method. An institution may appeal within the appeal period. The appeal period is to be confirmed by the Registrar of PHEQA by the fifteenth of November. And the document counts it: open question seven of nine. This version is not weaker. It is more complete. It says exactly what is not yet known, who will settle it and by when. The builder builds everything else and leaves the one figure to a setting the Registrar fills in." },
    { cue: "Slide 5 — Title: 'Three questions before you sign'. Body, three numbered text rows: '1. Can someone build from it without asking anything?' '2. Was the review held?' '3. Is every remaining gap named, owned and counted?'" },
    { text: "Before you sign, ask three questions. First: could the builder work from this document alone, without working anything out and without asking anybody anything, apart from the named open questions? Second: was the review held, with the owner of the document, the builder and the official who will live with the result in the room? Third: is every remaining gap named, owned and counted? When all three answers are yes, the document is good enough to sign." },
    { cue: "Slide 6 — Title: 'Where to look in a draft'. Body, two text rows: 'Figures, periods, roles and rules with no source beside them.' 'Ask of each one: where did this come from?'" },
    { text: "When you read a draft, look for figures, periods, roles and rules with no source beside them. Ask of each one where it came from. An honest answer is either a source, or a name and a date. And be wary of a draft with no open questions at all. In a new service, that is a warning, not a result: it usually means that somebody answered the hard questions alone." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An open question with an owner and a date is acceptable; a question answered by a guess is a fault.'" },
    { text: "A question with an owner and a date belongs in a document you sign. A guessed answer does not, even when the guess turns out right." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'A question with a name on it is part of the specification'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 1.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Two text rows: the line with the guessed 30 days; nobody gave the figure.",
      "The draft line in quotation, as plain text. No screenshot of a document."],
    ["3", "Two text rows: the lawful appeal turned away; given and guessed figures cannot be told apart.",
      "Text-only."],
    ["4", "Two text rows: the line rewritten as a named question with an owner and a date; its count among the open questions.",
      "Set beside slide 2 in the same layout, so the two versions can be compared."],
    ["5", "Three numbered text rows: the three questions before sign-off.",
      "The manager's test of good enough. Text-only."],
    ["6", "Two text rows: what to look for in a draft; the question to ask of each.",
      "Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word. No sources slide follows: this subtopic cites no external source."]
  ],
  aiTip: {
    title: "Find the guessed answers in a draft specification",
    problem: "A draft specification mixes figures and rules that somebody gave with figures and rules somebody guessed to keep the work moving. The manager cannot sign it until the guesses are found and each one is turned into a question that a named person will answer.",
    prompt: "Below is a draft specification for [the service] of [the ministry or agency] [paste the draft]. Below that are the sources the draft was written from: laws, regulations, decisions and written requests [paste them]. Find every figure, period, role and rule in the draft that has no source given beside it and cannot be found in the sources pasted. For each, produce one row with: (a) the line of the draft, word for word; (b) what in it looks guessed; (c) the line rewritten as a named question, in the form 'the [thing]: to be confirmed by [owner] by [date]'; (d) a proposed owner, the role that holds the authority to answer it; (e) the date, left blank for the manager to set. For every line you treat as sourced, name the source and the place in it. Do not answer any of the questions yourself. Output: a table of the guessed answers, then the number of open questions the document will carry.",
    io: "Input: the draft specification and the sources it was written from. Output: a list of the guessed answers in the draft, each turned into a named question with a proposed owner, and the number of open questions the document will carry.",
    safeguard: "The owners are proposals: the manager assigns each question to a person and sets its date. A line the prompt treats as sourced is checked against the source it names before anyone relies on it, because the prompt can point to a source that does not say what it claims."
  },
  metadataRows: [
    ["Working title",          "A question with a name on it is part of the specification"],
    ["YouTube-optimised title", "Guess or open question? How to read a specification before you sign it"],
    ["Description (60 words)", "A figure nobody gave looks like a fact and gets built as one. An open question with an owner and a date is acceptable; a question answered by a guess is a fault. See one line of a Progressa specification, the appeal period, written both ways, and the three questions to ask before you sign. AI prompt for finding guessed answers in the description."],
    ["Tags",                    "specification, requirements, open questions, sign-off, digital government, service design, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 1: Why digital services go wrong, and the method that prevents it"],
    ["ToR §4 coverage",         "§4.1 (governance of the work: open questions named, owned and counted); §4.6 (an example of a step's output: one line of a specification, guessed and then named); §4.3 (AI integration — finding the guessed answers)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. This subtopic cites no external source."]
  ]
}));

// ---------- 1.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 1.4",
  title: "Twelve documents from the request to the running service",
  runtime: "~5 min",
  words: 543,
  paeraAnchor: "None. The content is the SDD method's own: the twelve documents, in the order they are written, and the handovers between them. No public source is cited.",
  singleMessage: "Each document has a writer, an input, an output, a person who accepts it and a check, in a fixed order.",
  practice: "a map of the project's documents against the twelve, with what is missing, duplicated or out of order",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Twelve documents from the request to the running service'. Voice-over begins." },
    { text: "When a supplier says the design is finished, you need to know what that means. The SDD method answers with twelve documents, in a fixed order, and it tells you where in that order you must say yes." },
    { cue: "Slide 2 — Title: 'Five things written against every document'. Body, five text rows: 'Who writes it.' 'What goes in.' 'What comes out.' 'Who accepts it.' 'How it is checked.'" },
    { text: "Every one of the twelve documents has five things written against it. Who writes it. What goes in: the earlier documents it is made from. What comes out. The person who accepts it before the next one is begun. And how it is checked: by a program, against an earlier document, or by a person with a checklist. The order is fixed because some documents exist to measure others, and a measure written after the thing it measures is not a measure." },
    { cue: "Slide 3 — Title: 'Before any design: six documents'. Body, six numbered text rows: '1. Your own documents: the law, the mandate, the requests.' '2. The register of what was asked.' '3. The records the service keeps.' '4. Every goal, tied to what was asked.' '5. The architecture.' '6. The shared states, settings and lists.' Footer line: 'Written once for the whole sector, before the first: the catalogue of services.'" },
    { text: "The first six are written before anything is designed. First, the customer's own documents: the law, the mandate and the requests, kept as received and never edited. Second, the register of what was asked, one entry for each separate thing. Third, the records the service keeps, and whose each fact is. Fourth, every goal people have in the service, each tied to what was asked. Fifth, the architecture: what the service is built on, and what crosses its boundary. Sixth, the states, settings and code lists every goal shares; a code list is a fixed list of choices, such as the kinds of institution. Before all six, a catalogue of the sector's services is written once for the whole sector; it is not one of the twelve." },
    { cue: "Slide 4 — Title: 'One goal at a time, then the whole application'. Body, six numbered text rows: '7. One goal, written as a story.' '8. The screens of that goal.' '9. The walk-through.' '10. The interaction design.' '11. The application model: the file a program reads.' '12. The working application.'" },
    { text: "The next three are written for each goal in turn: the goal as a story with every way it can fail, the screens worked out from that story, and a walk-through that officials can click. Then come two documents for the whole application: the interaction design, which settles once how officers pick, find, move and act, and the application model, the one file a program reads. The twelfth is the working application. Nobody writes it. A program generates it from the model, and nobody edits it by hand." },
    { cue: "Slide 5 — Title: 'Filled for PHEQA's registration of institutions'. Body, a plain-text table of four rows: 'The register: an AI assistant extracts it; the supplier's analyst rules on each entry; the Registrar of PHEQA accepts.' 'The screens of a goal: the analyst who wrote the goal; the review of three people decides.' 'The application model: an AI assistant writes it; the head of the ICT unit approves.' 'The working application: a registration officer finishes a real task on it.'" },
    { text: "In Progressa, PHEQA filled this table for its registration of institutions. For the register, an AI assistant extracts the entries, the supplier's analyst rules on each one, and the Registrar of PHEQA accepts it. For the screens of a goal, three people decide at a review: the owner of the screens, the builder, and the head of the registration desk. For the application model, the head of PHEQA's ICT unit approves it after reading what it assumed. And the working application is accepted when a registration officer finishes a real task on it." },
    { cue: "Slide 6 — Title: 'Nine points where PHEQA says yes'. Body, two text rows: 'Nine points where a person in PHEQA must say yes before the work goes on.' 'Two documents written by nobody: the walk-through and the working application.'" },
    { text: "Count the points where a person in PHEQA must say yes before the work goes on. There are nine. At each one, the next document is written from what was accepted, not from what was proposed. Two documents are written by nobody: a program produces the walk-through and the working application. Now lay your own project's documents beside the twelve. A missing row is a decision nobody will take in writing. A row with no point of acceptance is a place where the supplier, not your organisation, decides." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Each document has a writer, an input, an output, a person who accepts it and a check, in a fixed order.'" },
    { text: "Twelve documents, in a fixed order. For each one, ask who writes it, what goes in, what comes out, who accepts it and how it is checked." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Twelve documents from the request to the running service'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 1.4) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Five text rows: writer, input, output, acceptor, check.",
      "The five columns of the table every document fills. Text-only."],
    ["3", "Six numbered text rows: the documents written before any design, with a footer line on the sector's catalogue.",
      "The documents are named by what they are for; no numbers of folders, no file names. The footer says the catalogue is not one of the twelve."],
    ["4", "Six numbered text rows: the three documents written for each goal, the two for the whole application, and the working application.",
      "Same layout as slide 3, so slides 3 and 4 read as one list of twelve. Text-only."],
    ["5", "Plain-text table of four rows: four of PHEQA's documents with who writes, who decides and how.",
      "An extract of the filled table; the full table of twelve is in the written guide. Progressa's names as the plan gives them."],
    ["6", "Two text rows: nine points of acceptance; two documents written by nobody.",
      "The figure nine is counted from the filled table of the worked example. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word. No sources slide follows: this subtopic cites no external source."]
  ],
  aiTip: {
    title: "Map your project's documents onto the twelve",
    problem: "A project already has documents under many titles: terms of reference, a business requirements document, a design, a test plan. The manager needs to know which of the twelve each one really is, which of the twelve are missing, which are written twice, and which were written in the wrong order.",
    prompt: "Below are the documents of a project to build [the service] for [the ministry or agency], each with its date [paste each document, or its contents page and opening section]. Map them onto these twelve documents, in this order: (1) the customer's own documents; (2) the register of what was asked; (3) the records the service keeps, with a glossary and business rules; (4) every goal, each tied to what was asked; (5) the architecture; (6) the shared states, settings and code lists (fixed lists of choices); (7) one goal written as a story, for each goal; (8) the screens of that goal; (9) the walk-through; (10) the interaction design; (11) the application model; (12) the working application. Match each project document by what it contains, not by its title. Output: (a) a table with one row for each of the twelve, naming the project document or documents that fill it, with the passage that shows it, or 'missing'; (b) a list of the twelve filled by more than one project document; (c) a list of project documents dated before a document they depend on; (d) the project documents that match none of the twelve.",
    io: "Input: the project's documents themselves, each with its date. Output: a map of the project's documents against the twelve, with what is missing, duplicated or out of order.",
    safeguard: "A document is matched by what it contains, not by its title, so give the prompt the documents themselves, not a list of their names. The mapping is then checked by the person who owns each document: a document can contain the words of a register without being one, and only its owner knows whether it was written before the design or from it."
  },
  metadataRows: [
    ["Working title",          "Twelve documents from the request to the running service"],
    ["YouTube-optimised title", "Twelve documents from the request to the running service: what a manager must accept"],
    ["Description (60 words)", "When a supplier says the design is finished, what should exist? Twelve documents, in a fixed order, each with a writer, an input, an output, a person who accepts it and a check. See the twelve filled for Progressa's registration of institutions, with the nine points where the authority says yes. AI prompt for mapping your project's documents in the description."],
    ["Tags",                    "specification-driven development, project documents, low-code, digital government, project governance, education, Progressa, method"],
    ["Playlist (YouTube)",      "KP4 — Module 1: Why digital services go wrong, and the method that prevents it"],
    ["ToR §4 coverage",         "§4.1 (the step-by-step method: each step with its writer, input, output, decision point and check); §4.6 (an example of the output of each step: the twelve filled for one service); §6 (the table of the twelve as a template a team fills); §4.3 (AI integration — mapping a project's documents)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. This subtopic cites no external source."]
  ]
}));

// ---------- 1.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 1.5",
  title: "Who writes, who checks, who accepts",
  runtime: "~5 min",
  words: 483,
  paeraAnchor: "None. The content is the SDD method's own: an AI assistant writes and a named person approves, and the review with three people in the room. No public source is cited.",
  singleMessage: "The AI assistant may draft; a named person accepts, amends or sets aside each proposal, and only what was accepted stands.",
  practice: "a table of who writes, checks and accepts each of the twelve documents for your project team",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Who writes, who checks, who accepts'. Voice-over begins." },
    { text: "An AI assistant can draft a register of requirements in an afternoon. That is real help. It also raises a question your minister will ask: if a machine wrote it, who is answerable for it?" },
    { cue: "Slide 2 — Title: 'The assistant proposes; a person rules'. Body, two text rows: 'For each proposal: accepted, amended or set aside.' 'The document holds only what was accepted.'" },
    { text: "The SDD method's answer is simple. An AI assistant may draft any document a person would otherwise draft. It proposes; it never decides. A named person rules on each thing it proposes, and says one of three words: accepted, amended or set aside. The document then holds only what that person accepted, in that person's words. A draft is never accepted because it reads well. It is accepted line by line, by somebody whose name is on it, and who can be asked about it later." },
    { cue: "Slide 3 — Title: 'Where the source is silent, the assistant must say so'. Body, two text rows: 'A gap becomes a question with an owner.' 'Never a plausible answer.'" },
    { text: "Inventing something plausible is the thing an assistant does best. So the method binds it with one rule: a gap is recorded as a question with an owner, and never filled with an invented answer. When an official's text is silent, the assistant does not guess a figure to keep the work moving. It writes the question down, and a person decides who must answer it and by when. Every invented answer it avoids is one less fault hidden in the service." },
    { cue: "Slide 4 — Title: 'Three roles for every document'. Body, three text rows: 'Writes. Checks. Accepts.' 'The writer never accepts alone.' 'The assistant never accepts.'" },
    { text: "For each of the twelve documents, three roles are named. Someone writes it. Someone else checks it. And a named person accepts it. In PHEQA's project in Progressa, the supplier's analyst and an AI assistant write. A second analyst of the supplier checks. The Registrar of PHEQA accepts, or the head of PHEQA's ICT unit for the technical documents. And the head of the registration desk sits at every review of something an officer will use." },
    { cue: "Slide 5 — Title: 'Where the assistant writes, in PHEQA's project'. Body, a plain-text table of four rows: 'The register: the assistant extracts; the analyst rules; the Registrar accepts.' 'The shared settings and lists: the analyst with the assistant; the owner of each setting accepts.' 'One goal as a story: the assistant drafts; the analyst rules; the Registrar accepts at the review.' 'The application model: the assistant writes and must refuse to guess; the head of the ICT unit accepts.'" },
    { text: "In four of PHEQA's documents, an AI assistant does the writing. It extracts the register of what was asked. It helps write the shared settings and lists. It drafts each goal as a story. And it writes the application model, the file a program reads, under the rule that it must refuse to guess. In each of the four, a named person rules on what it wrote, and a different named person accepts it: the Registrar, the owner of each setting, or the head of the ICT unit." },
    { cue: "Slide 6 — Title: 'Three checks on the table'. Body, three numbered text rows: '1. No row ends with the assistant.' '2. The writer never accepts alone.' '3. The person who will live with it is in the room.'" },
    { text: "Ask your supplier for this table before the first document is written, and check three things. No row ends with the assistant. In no row does the writer accept alone: where a writer sits at a review, as the owner of the screens does, two other people must agree. And at every review of something an officer will use, the person who will live with the result sits beside the owner and the builder. If a cell under 'accepts' names the supplier, or names nobody, that decision has not been given to anyone in your organisation." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The AI assistant may draft; a named person accepts, amends or sets aside each proposal, and only what was accepted stands.'" },
    { text: "An assistant may draft any document. A named person rules on each line, and only what that person accepted stands." }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Who writes, who checks, who accepts'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP4 / 1.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Two text rows: the three words a person says to each proposal; the document holds only what was accepted.",
      "The three words in bold body text. Text-only."],
    ["3", "Two text rows: a gap becomes a question with an owner; never a plausible answer.",
      "Text-only."],
    ["4", "Three text rows: writes, checks, accepts; the writer never accepts alone; the assistant never accepts.",
      "Text-only. No picture of a person or a robot."],
    ["5", "Plain-text table of four rows: the four documents in which an AI assistant writes, with who rules and who accepts.",
      "An extract of the table of the worked example; the full table of twelve is in the written guide. Progressa's names as the plan gives them."],
    ["6", "Three numbered text rows: the three checks a manager makes on the table.",
      "Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) and the practice box.",
      "The single message, word for word. No sources slide follows: this subtopic cites no external source."]
  ],
  aiTip: {
    title: "Draft who writes, checks and accepts each document",
    problem: "A project team knows its roles but has never written down, document by document, who writes, who checks and who accepts. Until it does, an AI assistant's draft can slip into the record with nobody answerable for it.",
    prompt: "Below is the list of roles in the team that will commission and build [the service] for [the ministry or agency], with the body each role belongs to: our own staff, the supplier, or another body [paste the list]. For each of these twelve documents, propose who writes it, who checks it, who accepts it, and who sits at its review: (1) our own documents; (2) the register of what was asked; (3) the records the service keeps; (4) every goal, each tied to what was asked; (5) the architecture; (6) the shared states, settings and code lists (fixed lists of choices); (7) one goal written as a story; (8) the screens of that goal; (9) the walk-through; (10) the interaction design; (11) the application model; (12) the working application. Where an AI assistant writes, name the person who rules on its draft. Follow three rules: the writer never accepts alone; the AI assistant never accepts; and the official who will use the result sits at every review of something an officer will use. Use only the roles in the list; where no role fits, write 'no role named'. Output: a table with one row per document and four columns, then a list of the cells marked 'no role named'.",
    io: "Input: the team's list of roles, with the body each role belongs to. Output: a table of who writes, checks and accepts each of the twelve documents for your project team, with the cells where no role is named marked.",
    safeguard: "The people named in the table are proposals until the head of the unit confirms them. Before the table is used, check that no document is left with the AI assistant as its acceptor."
  },
  metadataRows: [
    ["Working title",          "Who writes, who checks, who accepts"],
    ["YouTube-optimised title", "AI drafts, people decide: who writes, checks and accepts each document of a digital service"],
    ["Description (60 words)", "An AI assistant can draft a register in an afternoon, but who answers for it? The assistant proposes; a named person accepts, amends or sets aside each line, and only what was accepted stands. See who writes, checks and accepts each document of Progressa's registration project, and three checks on the table. AI prompt for drafting your team's table in the description."],
    ["Tags",                    "AI in government, accountability, governance, roles and responsibilities, digital government, service design, education, Progressa"],
    ["Playlist (YouTube)",      "KP4 — Module 1: Why digital services go wrong, and the method that prevents it"],
    ["ToR §4 coverage",         "§4.1 (roles and governance of the method); §4.3 (AI integration as the subject: the assistant drafts and a named person accepts); §4.5 (a governance structure: who writes, checks and accepts each document)"],
    ["PAERA citations",         "None. The content is the SDD method's own."],
    ["External-link list",      "None. This subtopic cites no external source."]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Module 1 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and act on the other half. For Module 1, 'act' means produce the matching working artefact: a past project's problems placed at the three places, a supplier's proposal tested against the three rules, the guessed answers of a draft turned into named questions, a project's documents mapped onto the twelve, or the table of who writes, checks and accepts each document. Each subtopic's AI usage tip produces that artefact."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template of the Knowledge Products and Video Materials Guide, section 3.i: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only, with no images. Diagrams and text boxes are used only where strictly necessary, and all their labels are plain text. No country emblems and no agency logos. The single-sentence summary slide that closes each subtopic carries the single message word for word, in 28pt type, with the on-screen practice box."),

  H3("4.3 No individuals on screen"),
  P("No individuals appear in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or a voice-over over the screen only. The choice is ITU's; the scripts work with either."),

  H3("4.4 Voice and tone"),
  P("Direct address ('your minister', 'your supplier', 'your own project'). Plain language at about an eighth-grade English level. Module 1 is written in the Strategist register: the listener commissions the service, judges the supplier's offer, convenes the review and answers to the minister and the donor, and does not write the documents of the method. The twelve documents are named by what each is for. Technical words the module cannot avoid (register, application model, walk-through, data dictionary, code list) are explained in plain words where they first appear."),

  H3("4.5 External links and 'Find the link in the description'"),
  P("Every subtopic has an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. Only subtopic 1.2 cites an external source, PAERA; it alone closes with a sources slide. Subtopics 1.1, 1.3, 1.4 and 1.5 rest on the SDD method's own content, cite no external source and end on the summary slide. The aggregate list, with the address, is in section 6."),

  H3("4.6 What the scripts say about the method"),
  P("Nothing is generated in Module 1, and no script, slide or metadata line says that anything runs. The scripts present the method's content as the SDD method and cite none of its working files. They give no rule identifiers, no commands and no file formats. Whether each of the method's standards is in force or a draft is stated once in KP4, on the written page of subtopic 6.7, and is not repeated here."),

  H3("4.7 The worked examples and the figures"),
  P("The worked example of each subtopic is the accepted example of the KP4 examples folder, used as it stands: E1-1 to E1-5, with the facts of the Progressa fact sheet. The slides show only extracts of them as plain text. The full tables of the twelve documents and of who writes, checks and accepts each go to the written guide, with figures F2 (the three places, for 1.1), F3 (the twelve documents in order, for 1.4) and F4 (who writes, who checks, who accepts, for 1.5), which are drawn for the guide and never placed on a slide."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU at the Tuesday weekly call."),

  H3("5.1 Four videos with no external source"),
  P("Subtopics 1.1, 1.3, 1.4 and 1.5 teach the SDD method's own content and cite no public source, so their video descriptions carry no link. Whether ITU wants a standing link in every description, for example to KP4's written guide once it is published, is a question for ITU."),

  H3("5.2 Signposts"),
  P("The project's standing rules ask for African signposts and one international polestar. The plan names no country source for the matters of this module, so no country signpost is used; the worked examples are Progressa's throughout."),

  H3("5.3 Editorial tone calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'It simply does not do what anybody agreed it would do' (1.1); 'A silence filled in with a plausible answer is a fault dressed as a specification' (1.1); 'A list of one hundred and forty fields is shared by nobody' (1.2); 'A row with no point of acceptance is a place where the supplier, not your organisation, decides' (1.4)."),

  H3("5.4 The self-check"),
  P("The module's self-check in section 2.1 has four questions for five subtopics; the fourth draws on both 1.4 and 1.5. Its threshold, three or four right, is a proposal to be tested with the first learners."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the five subtopics for ITU's video production pipeline, to be split per subtopic into the video descriptions. Every source is public and is one the KP4 outline version 0.2 names for the subtopic, at the edition it names."),
  genericTable([1100, 8600], ["Subtopic", "Sources referenced, with addresses"], [
    ["1.1", "None. The subtopic cites no external source."],
    ["1.2", "PAERA, the Public Administration Ecosystem Reference Architecture, version 1.0 (GovStack, dated 25 May 2024), section 2.3, Role of Enterprise Architecture (https://paera.govstack.global/)."],
    ["1.3", "None. The subtopic cites no external source."],
    ["1.4", "None. The subtopic cites no external source."],
    ["1.5", "None. The subtopic cites no external source."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP4 Module 1 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP4 Module 1 (Designing Digital Government Services using a Building Block Approach): why digital services go wrong, and the method that prevents it.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP4 Module 1 Script Bundle v0.1 · 4 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP4_Module1_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
