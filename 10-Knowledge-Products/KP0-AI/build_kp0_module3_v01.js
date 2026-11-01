// Build KP0 Module 3 — Script Bundle v0.1
// Working with AI in Government · Module 3 — Orchestrate: one piece of work, start to finish (Strategist and Architect).
// v0.1 (31 Oct 2026): written on the KP0 plan, version 0.4 (as changed on 30 October 2026), and the Orchestrate section
//   plan, version 0.1, sections 2 to 5. Every Try it first is rewritten from the registry prototype's record, frozen in
//   examples/plr/ on 31 October 2026; the figures as the section plan's section 4 states them.
// Same shape as Modules 1 and 2, with one addition: tryFirst, the fault to find in the record before the concept, its
//   key kept back. The AI usage tip of each page is its step on the learner's own work. Two videos (V3, V4).
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors KP1-KP4) ----------
const ARIAL = "Arial";
const COLOR_HEAD     = "1F3864";
const COLOR_ACCENT   = "2E75B6";
const COLOR_GREY_TXT = "595959";
const COLOR_GREY_BG  = "F2F2F2";
const COLOR_BORDER   = "BFBFBF";
const COLOR_VISUAL_BG    = "EAF1F8";  // visual / production cue
const COLOR_VISUAL_BD    = "2E75B6";
const COLOR_STORY_BG     = "FCE4EC";  // the speaker's own story, left free
const COLOR_STORY_BD     = "AD1457";
const COLOR_AI_BG        = "EEF7EE";  // AI usage tip
const COLOR_AI_BD        = "2E7D32";
const COLOR_PULL_BG      = "FFF8E1";  // single-message highlight
const COLOR_PULL_BD      = "E65100";

const border = { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const cellMargin  = { top: 90, bottom: 90, left: 130, right: 130 };

// Persona for KP0 Module 3 (both personas, as the plan's module table sets it).
const PERSONA_S = "S (Strategist) — the public servant who commissions and accepts AI-assisted work and answers for it: a director, a head of unit, a technical secretary briefing the principal. No programming assumed";
const PERSONA_SA = "S and A (Strategist and Architect) — the one who commissions and accepts AI-assisted work, and the one who runs it: a head of ICT unit, a project lead, an analyst. No programming assumed";

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
function boxed(label, text, bg, bd, italic = true) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: bd };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
      new TableCell({ borders: cBorders, margins: { top: 100, bottom: 100, left: 200, right: 200 },
        width: { size: W, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        children: [new Paragraph({ children: [
          new TextRun({ text: label, font: ARIAL, size: 19, bold: true, italics: italic, color: bd }),
          new TextRun({ text: text, font: ARIAL, size: 19, italics: italic, color: bd })
        ] })] })
    ] })] });
}
function visualCueBox(text) { return boxed("VISUAL CUE — ", text, COLOR_VISUAL_BG, COLOR_VISUAL_BD); }
function storyBox(text) { return boxed("THE SPEAKER'S STORY — ", text, COLOR_STORY_BG, COLOR_STORY_BD); }
function singleMessageBox(text) { return boxed("Single message — ", text, COLOR_PULL_BG, COLOR_PULL_BD); }
function aiPromptBox(title, problem, prompt, ioNote, safeguard) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: COLOR_AI_BD };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  const line = (k, v, size = 19) => new Paragraph({ spacing: { before: 60, after: 60 }, children: [
    new TextRun({ text: k, font: ARIAL, size, bold: true }), new TextRun({ text: v, font: ARIAL, size })] });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
      new TableCell({ borders: cBorders, margins: { top: 150, bottom: 150, left: 200, right: 200 },
        width: { size: W, type: WidthType.DXA },
        shading: { fill: COLOR_AI_BG, type: ShadingType.CLEAR },
        children: [
          new Paragraph({ spacing: { before: 0, after: 80 }, children: [
            new TextRun({ text: "AI usage tip — " + title, font: ARIAL, size: 20, bold: true, color: COLOR_AI_BD })] }),
          line("What the prompt does: ", problem),
          line("Prompt template (copy-paste into the assistant):", ""),
          new Paragraph({ children: [new TextRun({ text: prompt, font: "Courier New", size: 18 })] }),
          line("Inputs and outputs: ", ioNote),
          line("Safeguard: ", safeguard)
        ] })
    ] })] });
}
// A content list holds paragraphs (strings) and tables ({ table: [[header…], [row…], …] }), in order.
function content(items) {
  return items.map(it => typeof it === "string" ? P(it)
    : genericTable(it.table[0].map(() => Math.floor(9700 / it.table[0].length)), it.table[0], it.table.slice(1)));
}

// ---------- helper: render a subtopic page ----------
// KP0 subtopics are written pages (plan section 4). The tip's io line is split by the GitBook renderer into
// Bring and Get, and the safeguard's first sentence becomes Watch for, as in KP4.
// Optional parts (review of 26 Oct 2026): cite, a phrase in the prose and the source it names, linked on the
// GitBook page (the Word document keeps plain text); where, the help links for the setting in each assistant; example.run, the
// prompt and part of its output; aiTip.practice, Progressa material to practise on, with its answer key.
// Module 3 adds tryFirst: the fault to find in the record, its question, and its key (collapsed on the GitBook page),
// shown before the concept; the AI usage tip is the page's step on the learner's own work.
function renderPage({ num, title, singleMessage, tryFirst, concept, inTool, where, example, aiTip, withKit, sources, video = "V2", persona = PERSONA_SA }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([["Persona", persona], ["Form", "Written page; covered by video " + video]]));
  out.push(singleMessageBox(singleMessage));
  if (tryFirst) {
    out.push(H3("Try it first — " + tryFirst.title));
    out.push(...content(tryFirst.body));
    out.push(P("Your question: " + tryFirst.question, { run: { bold: true } }));
    out.push(H3("Answer key"));
    out.push(...content(tryFirst.key));
  }
  out.push(H3("The concept"));
  out.push(...content(concept));
  out.push(H3("In the tool"));
  out.push(...content(inTool));
  if (where) out.push(P("Where this is in each assistant: " + where.map(([t, u]) => t + " (" + u + ")").join(" · ")));
  if (example) {
  out.push(H3("Worked example — " + example.title));
  out.push(...content(example.body));
  if (example.run) {
    out.push(P("The prompt:", { run: { bold: true } }));
    out.push(new Paragraph({ children: [new TextRun({ text: example.run.prompt, font: "Courier New", size: 18 })] }));
    out.push(P("Part of the output (written for this page, not a recorded run):", { run: { bold: true } }));
    out.push(...content(example.run.output));
  }
  }
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
  if (withKit) out.push(P("With the kit: the orchestrator plugin (in preparation) " + withKit + " Optional: the cycle runs by hand."));
  if (aiTip.practice) {
    out.push(H3("Practise on Progressa"));
    out.push(...content(aiTip.practice.input));
    out.push(H3("Answer key"));
    out.push(...content(aiTip.practice.key));
  }
  out.push(H3("Sources"));
  out.push(sources.length ? genericTable([3300, 2400, 4000], ["Source", "Publisher · date", "Used for"], sources)
    : P("This page cites no public source."));
  out.push(pageBreak());
  return out;
}

// ---------- helper: render the module's video ----------
// One person on camera with slides cut in (plan section 7). A story beat is the place the speaker tells their own
// case; the script says what it must show and how long it may run, and leaves the telling to the speaker.
function renderVideo({ id, title, covers, runtime, words, speaker, singleMessage, scriptBeats, slideSpecRows, metadataRows }) {
  const out = [];
  out.push(H2(id + " — " + title));
  out.push(specTable([
    ["Covers pages",   covers],
    ["Target runtime", runtime + " (≈" + words + " spoken words, the story beat included)"],
    ["Speaker",        speaker + " (a suggestion; plan decision 4)"],
    ["Form",           "A person on camera, with text-only slides cut in for a list or a figure"]
  ]));
  out.push(singleMessageBox(singleMessage));
  out.push(H3("Script (on camera, slides cut in)"));
  for (const beat of scriptBeats) {
    if (beat.cue) out.push(visualCueBox(beat.cue));
    if (beat.story) out.push(storyBox(beat.story));
    if (beat.text) out.push(P(beat.text));
  }
  out.push(H3("Cut-in slide specification"));
  out.push(genericTable([900, 3400, 5400], ["Slide", "Element (text-only)", "Notes"], slideSpecRows));
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
    children: [new TextRun({ text: "Script Bundle", font: ARIAL, size: 52, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 80 },
    children: [new TextRun({ text: "KP0 — Working with AI in Government", font: ARIAL, size: 30, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 200 },
    children: [new TextRun({ text: "Module 3 — Orchestrate: one piece of work, start to finish", font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",        "Script bundle for Module 3 of KP0: four written pages and two videos"],
    ["Version",         "v0.1 — written on the KP0 plan, version 0.4 (as changed on 30 October 2026), and the Orchestrate section plan, version 0.1"],
    ["Date",            "31 October 2026"],
    ["Module persona",  PERSONA_SA],
    ["Subtopics",       "Four written pages (3.1 – 3.4); the fourth is the module's Judgement page"],
    ["Videos",          "Two, each a person on camera: V3 'Two failures we kept meeting' (page 3.1) and V4 'Why the reviewer is someone else' (pages 3.2 and 3.3)"],
    ["Worked examples", "One project throughout, the prototype of the Progressa Learner Registry: the identity paper that looked fair, the count of children on more than one list, the consent check, and the note to the Permanent Secretary"],
    ["Starter folder",  "toolkit/orchestrate-starter/: the forms, the three chat prompts, the log, the pages of faults and one finished cycle"],
    ["Self-check",      "Four questions drawn from the four pages, in section 2.1"],
    ["Prepared by",     "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 3 of KP0 — Working with AI in Government. Modules 1 and 2 taught one good chat and the setup behind it. In Module 3 you take one piece of your own work through the whole cycle: an instruction you write, a chat that does the work, a second chat that checks it and has never seen the first, and your own decision. Every page opens with a fault to find in a real record, then gives the rule, how to do it by hand, and the step to take on your own work. The record comes from one project: a working prototype of the Progressa Learner Registry, which we built in October 2026 with this cycle. A chat held the orchestrator's role: it wrote the instructions, kept the log and gave each result to the owner, the person who commissioned the prototype and decided on every piece of work. Working by hand, you hold both roles. The register is plain English at about an eighth-grade level."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the four pages and the two video scripts of Module 3 of Knowledge Product 0 (Working with AI in Government), with the module's self-check, production notes and calibration items. It is written on the KP0 plan, version 0.4, section 4, and on the Orchestrate section plan, sections 2 to 5."),
  P("Module 3 is the first half of the Orchestrate layer. It is for both personas. The Strategist's way through the course ends here, after taking one piece of work through the cycle once, which is the best preparation for accepting work that others have orchestrated. The Architect goes on to Module 4, which runs the cycle for days."),

  H3("1.2 How Module 3 differs from Modules 1 and 2"),
  P("Each page opens with Try it first: a fault to find in a real record, with the key kept back until the learner has tried. Each page closes with On your work: the step the learner takes on a piece of their own work, so that by the end of 3.4 they have run one whole cycle. The cycle is taught by hand. It needs any assistant, a folder and a spreadsheet, and it needs no plugin, no programming and no command line."),

  H3("1.3 The names used for Progressa"),
  genericTable([2200, 7500], ["Name", "What it is, and its part in Module 3"], [
    ["The registry prototype", "A working prototype of the Progressa Learner Registry (PLR), built by the course team with the cycle this module teaches. Its record of instructions, reports and reviews is the source of every example."],
    ["MoEYS", "Progressa's Ministry of Education, Youth and Skills, which owns the registry."],
    ["The National Examinations Authority (PNEA)", "Receives learner data from the registry for examinations. The consent check of 3.3 tests what it receives."],
    ["The Civil Registration Department", "Holds birth records. One of the two positions of 3.1's identity paper rests on it."],
    ["The three lists", "The school census, PNEA's candidate list and the social grant programme's list. The prototype's made-up data spreads 300 children over them."]
  ]),
  P("Every institution, name, date and figure in the examples is invented for Progressa, or comes from the prototype's made-up data. The examples name posts, never persons."),

  H3("1.4 The cycle the module teaches"),
  genericTable([500, 4400, 1800, 3000], ["#", "Step", "Who", "What is saved"], [
    ["1", "Does this need the cycle? Use it when one of these holds: more than three documents to read; a document that will last; a figure someone will quote; a change to a file; evidence the chat cannot see. If none holds, just ask", "You", "A row in the log, only if one holds"],
    ["2", "Write the instruction from the form", "You", "The instruction · a row in the log"],
    ["3", "Do the work in a new chat, which ends with a report and no verdict", "A work chat", "The report · a row in the log"],
    ["4", "Review in another new chat, which never sees the work chat, works out one figure again by another route and ends accepted or not accepted", "A review chat", "The review · a row in the log"],
    ["5", "Decide. Four decisions are always yours: what is delivered, what is cut, what is spent and what is said outside", "You", "A row in the log"],
    ["6", "If not accepted: the review's gaps go into the same instruction as version 2, with a new work chat and a new review chat. After two failures, write the task again", "You", "Version 2 · a row in the log"]
  ]),
  P("One rule has no exception: a chat never carries out work it helped to commission, and never judges work it helped to commission or carry out."),

  H3("1.5 How to read this document"),
  P("Section 2 gives Module 3 at a glance, with the module's self-check. Section 3 holds the four pages and the two video scripts. Section 4 collects the production notes, section 5 the open calibration items, and section 6 the aggregate external-link list."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 3 at a glance"),
  P("Four written pages and two videos of about three minutes each. A learner who does each page's exercise and its step on their own work needs about three hours, most of it running their own cycle."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Form"], [
    ["3.1", "Two failures, and the rule that answers them",
      "A chat that checks its own work confirms its own mistakes, and what a chat knows is lost when it ends; so the one who writes is not the one who checks, and the state of the work lives in files.", "Page"],
    ["3.2", "Write the instruction",
      "Write the instruction for a stranger: what it serves, the tests, how this work can fail while seeming to succeed, and how the review will check it, all before the work starts.", "Page"],
    ["3.3", "The report and the review",
      "The work chat reports with no verdict; a second chat that never saw it checks the report by its own route and says accepted or not accepted.", "Page"],
    ["3.4", "Judgement: you decide",
      "The review gives a verdict; the decision is yours, and four decisions are always yours: what is delivered, what is cut, what is spent and what is said outside.", "Page"],
    ["V3", "Two failures we kept meeting", "A chat that checks its own work confirms its own mistakes.", "Video, ~3 min"],
    ["V4", "Why the reviewer is someone else", "The review is worth its route, not its agreement.", "Video, ~3 min"]
  ]),

  H3("2.1 The module's self-check"),
  P("Five questions, drawn from the four pages. Questions 1 and 3 are multiple choice. Questions 2, 4 and 5 ask for a short answer, which is right if it makes the point of the model answer. Four or five right means Ready; below four, read again the page named beside each question you missed."),
  genericTable([600, 3900, 3700, 1500], ["#", "Question", "Model answer", "Drawn from"], [
    ["1", "You ask a chat to draft a two-paragraph reply to a citizen's letter, from the letter alone. Do you need the cycle? (a) Yes: every piece of work should be reviewed. (b) No: none of the five conditions holds, so just ask, and read the reply yourself. (c) Yes, because the reply goes outside. (d) Only if the chat is not sure.",
      "(b). One short text from one document, which you read in full before it goes out, meets none of the five conditions. The cycle costs a second chat and a log row; spend it where a mistake would be quoted, built on or kept.",
      "3.1 Two failures"],
    ["2", "The work chat writes: 'the system does not recognise duplicates', from a test of the search alone. What is wrong, and what do you ask for?",
      "A limit of one step is stated as a limit of the whole. Ask what else could find the child, and have the sentence say only what was tested: 'the search misses a child spelt differently; whether a later step catches the child is not shown'.",
      "3.3 The report and the review"],
    ["3", "Your review chat answers 'accepted, no issues found' on a 20-page draft. What do you do? (a) Accept: the review found nothing. (b) Ask the work chat whether the review is right. (c) Treat zero findings as a warning, and check that the review worked out at least one figure by a route of its own. (d) Run the same review again in the same chat.",
      "(c). A review with zero findings on work that matters may not have checked anything. The work chat cannot judge its own review, and the same chat would repeat itself.",
      "3.3 The report and the review"],
    ["4", "The review says 'accepted'. The draft recommends that MoEYS publish the figure in its annual report. Who decides whether it is published, and why?",
      "You do, or whoever owns the annual report. A verdict says the work meets its instruction. What is delivered, cut, spent or said outside is always the person's decision, and accepted work can still be the wrong thing to publish.",
      "3.4 Judgement: you decide"],
    ["5", "Your instruction for a count of duplicates says: 'Test: the count is correct. The review checks the count.' What is wrong, and what do you write instead?",
      "Only the work chat could pass that test by its own say-so, and the review has no route of its own. Define each figure before the work starts, such as when a child counts as caught; give tests a stranger could run; and name the review's route, such as counting again from the three lists alone, without the search.",
      "3.2 Write the instruction"]
  ]),

  H3("2.2 Go further"),
  P("Shown on the module's home page, apart from the sources: one to three things to do next, each with its time."),
  genericTable([2300, 1700, 2600, 2100, 1000], ["Title", "Publisher", "Address", "Why", "Time"], [
    ["Building effective agents", "Anthropic", "https://www.anthropic.com/engineering/building-effective-agents", "The engineers' account of the same pattern, an orchestrator and workers, with an evaluator that is not the writer.", "20 minutes"],
    ["AI Playbook for the UK Government", "GOV.UK", "https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government", "Its principle of meaningful human control: the decisions this module leaves with you.", "A chapter to read"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE PAGES, THE VIDEOS AND THE REFERENCE
// ============================================================================
body.push(H1("3. The pages, the videos and the reference"));

// ---------- 3.1 ----------
body.push(...renderPage({
  num: "3.1 Subtopic 3.1",
  title: "Two failures, and the rule that answers them",
  video: "V3",
  singleMessage: "A chat that checks its own work confirms its own mistakes, and what a chat knows is lost when it ends; so the one who writes is not the one who checks, and the state of the work lives in files.",
  tryFirst: {
    title: "The paper that looked fair",
    body: [
      "The registry prototype needed an answer to one question: what identifies a learner? A work chat wrote a paper that set two positions side by side. Position A: the registry gives each child its own number, and finds the child's birth record at the Civil Registration Department. Position B: the national ID authority issues every child a national number at birth, and the registry uses it. The Ministry is Progressa's Ministry of Education, Youth and Skills (MoEYS), which owns the registry. Bodies share data across a national data exchange. Neither the Civil Registration Department, which sits under another ministry, nor the Ministry has joined it yet. The prototype simulates the other bodies, so that the registry can be tried before any of them has agreed to anything.",
      "The paper compared the two in one table, position by test. The table had no empty cell. It carried 78 citations over 31 lines, and every citation held at its source. The work chat's own report said it had cross-checked every fact against both positions. By every check the work chat could run on itself, the paper was fair.",
      "Two cells, as the paper wrote them. B, on what the prototype shows: 'the simulation would show the ID authority issuing children's numbers it does not issue, before it has agreed'. A, on the same test: no such line. A, on the dependency on another body: 'within the Ministry's own authority'."
    ],
    question: "Which two facts are counted against one position only?",
    key: [
      "First: the prototype simulates bodies doing what they have not agreed to, and the paper counts this against B only. A does it too. Under A, the Civil Registration Department answers across the data exchange, which it has not joined, and the Ministry reads across it, though it is not a member either.",
      "Second: a dependency on a body the Ministry cannot oblige is counted against B, in the table and in the ground of the recommendation, but not against A. A depends on the Civil Registration Department, which sits under another ministry. The paper's own cross-check table claimed to count it against A, and the cell did not hold it.",
      "A separate review chat found both, and the paper was not accepted. The full table had one more lean, which the two cells above cannot show: B's cells were longer than A's, row after row. That lean is what a self-check cannot see, because the writer already knows what they meant."
    ]
  },
  concept: [
    "Two failures come back in every piece of work done with an AI assistant. The first: a chat that checks its own work confirms its own mistakes. It reads what it meant, not what it wrote. The paper above passed every check its own chat could run and was still lopsided. Research on language models finds the same thing: asked to check and correct their own reasoning, without anything new to go on, models rarely find their errors and sometimes make a right answer wrong.",
    "The second: what a chat knows is lost when it ends. A figure worked out in a chat on Monday is quoted on Thursday from memory, by someone who was not there. When it turns out to be wrong, nobody can find where the error came from.",
    "You know the answer already. A civil servant who writes a document does not accept it alone. Someone else reads it, against the brief, before it goes up. The Orchestrator pattern does the same with chats: separate parties, with documents between them. You write an instruction. One chat does the work and writes a report. Another chat, which never saw the first, checks the report and gives a verdict. You decide. And the state of the work lives in files, in a folder and a log, never in anyone's memory.",
    "Two roles hold it together. The orchestrator writes the instructions, keeps the log and passes each result on; it does no work itself and judges none. The owner decides. Working by hand, you are both. In the registry prototype behind the examples of Modules 3 and 4, a chat held the orchestrator's role, and the person who commissioned the prototype was the owner.",
    "The cycle costs a second chat and a few minutes of writing, so do not spend it on everything. Use it when one of five conditions holds: more than three documents to read; a document that will last; a figure someone will quote; a change to a file; or evidence the assistant cannot see for itself. If none holds, just ask, and read the answer yourself."
  ],
  inTool: [
    "By hand, in any assistant. Build your working folder from the pages of the starter folder: a folder on your computer with the four forms (instruction, report, review, handover note), the three role prompts (work chat, review chat, first task) and the pages of faults in it. The starter folder's first page sets out the cycle in six steps, and how to set up your computer for it.",
    "The folder holds the forms you will write from, the three role prompts you will paste into each chat, a page of faults for each kind of work (analysis, drafting, checking and building), a log, and one finished cycle to copy from. Of its six folders, three keep instructions, reports and reviews apart, one kind of document each, so that each one can be found and nothing is lost when a chat ends."
  ],
  aiTip: {
    title: "Does this piece of work need the cycle?",
    time: "~10 min",
    watch: "A 'no' that skips a figure someone will quote.",
    problem: "Some work deserves a separate review and some does not. Deciding by feel leads either to reviewing everything, which wastes time, or to reviewing nothing that matters.",
    prompt: "Below is a piece of work I am about to give an AI assistant [describe it in a few sentences: what it is, what it uses, who will see the result]. Do not do the work. Test it against these five conditions, one row each: (1) it needs more than three documents read; (2) it produces a document that will last; (3) it produces a figure someone will quote; (4) it changes a file; (5) it needs evidence the assistant cannot see for itself, such as a running system or a file it has not been given. For each: holds, does not hold, or cannot tell, with one line why. Then say: use the cycle, or just ask. If any condition holds, write a case card of five lines, which becomes the first lines of your instruction in 3.2: what the work is, what it serves, who will use the result, the documents it uses, and the one figure or claim that most needs checking.",
    io: "Input: a short description of one piece of your own work. Output: the five conditions tested, a recommendation, and a case card if the cycle is needed.",
    safeguard: "The assistant only sees your description, so it can miss a condition you left out, such as a figure the result will carry. Read the five rows yourself; if a figure from this work could be quoted later, the cycle is needed whatever the table says.",
    practice: {
      input: [
        "Three pieces of work in MoEYS's planning unit: (a) a reply to a head teacher's email asking when the census closes, from the census circular; (b) a count of how many schools reported no enrolment figures in the last census, for a briefing to the Permanent Secretary; (c) a summary, for the unit's own use, of a 40-page donor report."
      ],
      key: [
        "(a) Just ask: one document, a short reply you read in full. (b) The cycle: a figure that will be quoted upwards, from data the chat must count. (c) Probably just ask, if the summary is for the unit's own reading; the cycle, if it will be quoted or kept. A good run says 'cannot tell' for (c) and asks who will use it."
      ]
    }
  },
  cite: [
    ["Research on language models finds the same thing", "Large Language Models Cannot Self-Correct Reasoning Yet"]
  ],
  sources: [
    ["Large Language Models Cannot Self-Correct Reasoning Yet", "Huang et al., ICLR · 2024", "Models asked to check their own reasoning, with nothing new to go on, rarely find their errors"],
    ["Building effective agents", "Anthropic Engineering · December 2024", "The orchestrator-workers and evaluator-optimizer patterns, in the engineers' words (vendor source)"]
  ]
}));

// ---------- V3 ----------
body.push(...renderVideo({
  id: "3.5 Video V3",
  title: "Two failures we kept meeting",
  covers: "3.1",
  runtime: "~3 min",
  words: 380,
  speaker: "Aare",
  singleMessage: "A chat that checks its own work confirms its own mistakes.",
  scriptBeats: [
    { cue: "Opening: the speaker on camera. The title is in the lower third: 'Two failures we kept meeting'." },
    { text: "We wrote these courses, and built a working prototype, with AI assistants. Two things went wrong again and again, and they are worth knowing before you hand an assistant any work that matters." },
    { story: "The speaker's own case, 60 to 90 seconds, about 150 to 200 words. It must show the first failure in a real piece of work: a chat that checked its own work, passed every check it set itself, and was still wrong, and what found the fault. The case the record offers is the identity paper of 28 October 2026: no empty cell, every citation holding, its own report claiming a cross-check of every fact, and two facts counted against one position only, found by a separate review. Give the date. Name posts, not persons. If the speaker cannot name a case with a date, this video becomes a page (plan decision 4)." },
    { cue: "Slide cut in — Title: 'Two failures'. Body, two text rows: 'A chat that checks its own work confirms its own mistakes.' 'What a chat knows is lost when it ends.'" },
    { text: "The first failure is the one you just heard. A chat that checks its own work reads what it meant, not what it wrote. The second is quieter. A figure worked out in a chat on Monday gets quoted on Thursday, from memory, by someone who was not there. When it is wrong, nobody can find where it came from." },
    { cue: "Slide cut in — Title: 'The answer'. Body, three text rows: 'The one who writes is not the one who checks.' 'Documents between the parties.' 'The state of the work in files.'" },
    { text: "The answer is one you already use. In any ministry, the person who writes a paper does not accept it alone. So we do the same with chats. One chat does the work. Another, which never saw the first, checks it. You decide. And what was asked, what came back and what was decided all go into files, so nothing depends on anyone remembering." },
    { cue: "Back to the speaker on camera." },
    { text: "It costs a second chat, so we do not use it for everything. A short reply you read yourself does not need it. A figure that will be quoted does." },
    { cue: "Slide cut in — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A chat that checks its own work confirms its own mistakes.'" },
    { text: "A chat that checks its own work confirms its own mistakes. So the one who writes is never the one who checks." }
  ],
  slideSpecRows: [
    ["1", "Two text rows: the two failures.", "Cut in over the voice-over after the story. ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB. The same wording as page 3.1."],
    ["2", "Three text rows: the answer.", "Text-only."],
    ["3", "Single-sentence summary slide.", "The single message, word for word."]
  ],
  metadataRows: [
    ["Working title",           "Two failures we kept meeting"],
    ["YouTube-optimised title", "Why an AI assistant should never check its own work"],
    ["Description (60 words)",  "Working with AI assistants on real government work, two failures came back again and again: a chat that checks its own work confirms its own mistakes, and what a chat knows is lost when it ends. A practitioner tells the case of a paper that passed every check it set itself, and the simple rule that answers both failures."],
    ["Tags",                    "AI in government, AI review, human oversight, orchestration, public sector, AI literacy"],
    ["Playlist (YouTube)",      "Working with AI in Government"],
    ["ToR §4 coverage",         "§4.3 (AI integration: reviewing AI-assisted work before it is used)"],
    ["PAERA citations",         "None. This course is about working with an AI assistant, not about the reference architecture."],
    ["External-link list",      "Page 3.1, which carries the sources."]
  ]
}));

// ---------- 3.2 ----------
body.push(...renderPage({
  num: "3.6 Subtopic 3.2",
  title: "Write the instruction",
  withKit: "writes the instruction with you from the same form, gives its session a name, files it in the place for instructions and writes its log row. You still decide what it asks.",
  video: "V4",
  singleMessage: "Write the instruction for a stranger: what it serves, the tests, how this work can fail while seeming to succeed, and how the review will check it, all before the work starts.",
  tryFirst: {
    title: "The duplicates count",
    body: [
      "The registry must not register the same child twice. The prototype holds made-up data for 300 children spread over three lists, and some children are on more than one list, some with their name spelt differently on one of them. A note to the Permanent Secretary was going to say how well the prototype avoids a second record, so the figure had to be checked.",
      "The instruction asked two questions: how many children appear on more than one list, and how many of them the prototype's search catches. It defined 'caught' before the work started: a child is caught only when the search finds it from every one of its entries. And it said how the review would check the figure: by counting again from the three lists alone, without the prototype's search.",
      "Its section on how the work could fail named the faults of checking, from the page of faults (a short list of the known ways that kind of work fails), and then six ways particular to this task. Before you open the key, write down the ways you would have named."
    ],
    question: "Which of the six ways it could fail would you have missed?",
    key: [
      "The six, as the instruction named them: (1) quoting the planned figures instead of counting; (2) matching the names with a method of the chat's own instead of the prototype's search; (3) counting a child as caught from one entry while another of its entries was missed; (4) searching from only one list; (5) searching an empty registry, so that nothing is found and the result looks clean; (6) the data changing between the count and the catch.",
      "(5) and (6) are the easiest to miss, because they give a clean-looking wrong answer. Each failure named in advance is one the work chat is told to avoid and the review is told to look for."
    ]
  },
  concept: [
    "An instruction is written for a stranger: a chat that knows nothing of your conversations, your unit or what you meant. If a stranger could not carry it out from the page and the material, it is not finished.",
    "It says what the work serves: who will use the result, for what, and by when. It lists the material, by name, and says that nothing outside the list is evidence. It sets out the task, and defines each figure, as the duplicates count defined 'caught'. It gives the tests, numbered, each one a stranger could run. Write the tests before the work starts: a measure written after the thing it measures is not a measure.",
    "It names how this work can fail while seeming to succeed. First come the faults of its kind, from the page of faults in the starter folder. Then come the two or three ways particular to this task, the ones that give a clean-looking wrong answer. It says what is out of scope, and which questions stay with you. And it carries one line every instruction carries: if something you need is not in the material, say so and name who could supply it, and do not supply it.",
    "Last, it names the review's route: the figure the review will work out again, and the different way it will do it. Name it now, so that the work chat cannot borrow it.",
    "Choose the assistant's model by the kind of work, never by how important the subject is. A count from a table needs care, not the largest model; a judgement between two positions may need the strongest one you have."
  ],
  inTool: [
    "By hand, in any assistant. Set up first, as the first page of the starter folder says: turn memory off in your assistant's settings (page 2.4 shows where), and decide whether you will paste files or let the assistant read the folder.",
    "Copy the instruction form into a new file in the instructions folder. Name it by date, piece of work and version, for example '2026-10-30 duplicates v1'. Start from your case card from 3.1. Fill the form's eight sections: what it serves, the material, the task, how you will know it is done, how the review will check it, how this work can fail, out of scope, and where the report goes. Copy the faults from the page for your kind of work into section 6, how this work can fail, then add the ways particular to your task.",
    "A chat may help you draft the instruction. If it does, that chat does no work afterwards and no review: it helped to commission the work.",
    "Start your log: a spreadsheet with seven columns, date, piece of work, version, event, file, verdict or ruling, and who it is open with. The event is one of five words: instruction issued, report back, review back, my ruling, handover; withdrawn is a ruling, not an event. *Open with* says who acts next: the work chat, the review chat, you, or no one once the piece of work is ruled on. Write the first row: the date, the piece of work, version 1, 'instruction issued', and the file."
  ],
  aiTip: {
    title: "Test your instruction on a stranger",
    time: "~15 min",
    watch: "A chat that answers its own questions instead of asking.",
    problem: "An instruction always seems complete to the person who wrote it, because they fill its gaps from what they know. A fresh chat knows nothing, so it shows the gaps.",
    prompt: "Below is an instruction for a piece of work [paste the instruction]. Do not carry it out. You know nothing about this work except what the instruction and its material list say. First, say back in five sentences what you would do. Then list every question you would need answered before you could do it well: a term not defined, a figure with no source, a test you could not run, a choice left open, a document named but not given. Number the questions. For each, quote the line of the instruction it comes from. Do not guess the answers. Finally, say which of the instruction's tests you could not check, and why.",
    io: "Input: your instruction, in a new chat with memory off. Output: the work as the chat understands it, and a numbered list of questions, each tied to a line of the instruction.",
    safeguard: "Each question is a gap in the instruction; fill it in the instruction, not in the chat. Use a new chat for the work itself: the chat that tested the instruction has now helped to write it.",
    practice: {
      input: [
        "An instruction from MoEYS's planning unit, version 1: 'Count the schools that did not report enrolment in the 2026 census and write a short paragraph for the Permanent Secretary. Material: the census file. Tests: the count is correct. Out of scope: none.'"
      ],
      key: [
        "A good run asks at least these: what 'did not report' means (no return at all, or a return with the enrolment field empty?); which census file, and which version; how 'correct' will be tested, and by whom; who the paragraph is for and how long it may be; whether schools closed during the year count; what to do if a school appears twice. Each is a line the instruction should carry."
      ]
    }
  },
  sources: [
    ["Building effective agents", "Anthropic Engineering · December 2024", "Clear task definitions for each worker; the orchestrator decides the tasks (vendor source)"],
    ["AI Playbook for the UK Government", "GOV.UK · 10 February 2025", "Knowing what the tool is used for, and its limits, before it is used"]
  ]
}));

// ---------- 3.3 ----------
body.push(...renderPage({
  num: "3.7 Subtopic 3.3",
  title: "The report and the review",
  withKit: "starts the work chat, and when its report is in, the review chat as a separate session with an empty memory, so the memory setting can no longer break the separation. You still read the review and rule.",
  video: "V4",
  singleMessage: "The work chat reports with no verdict; a second chat that never saw it checks the report by its own route and says accepted or not accepted.",
  tryFirst: {
    title: "The 20 that slipped through",
    body: [
      "The work chat's report on the duplicates count opened with its answer. 40 children appear on more than one list: 22 on two and 18 on three. 20 of them have one entry spelt differently. The prototype's search catches 20 of the 40 from every entry. It does not catch the other 20, and those are exactly the 20 with a spelling variant: each is missed from the one entry spelt differently, and found from every other. No entry returned the wrong child.",
      "The review chat had never seen the work chat. It counted again from the three lists alone, without the key that says which entries belong to the same child and without the prototype's search. Its own rule was that two entries belong to the same child when the date of birth, the school and the given names are the same, and the family names are the same or differ by one letter. It got the same figures, entry by entry, for all 98 entries. The verdict was accepted."
    ],
    question: "The review agreed with the report. Why does the review's route matter more than its agreement?",
    key: [
      "A review that repeats the report's own steps will agree with it, mistakes included: it would have used the same key and the same search, and an empty registry would have looked clean twice. Agreement by the same route proves only that the steps were followed.",
      "This review reached the figures from different material by a different method. Two routes that start apart and arrive at the same figures are evidence; one route walked twice is not. The review also altered one entry in its own count and saw the figures move, which showed that its count could fail."
    ]
  },
  concept: [
    "The report gives the answer first, in one paragraph. Then it goes through the tests one by one, each with its evidence. It says what it found and did not fix, and what it could not establish. It carries no verdict: the work chat does not judge its own work.",
    "Watch the report for one fault above all: a limit of one step stated as a limit of the whole. 'The search misses a child spelt differently' is what the duplicates count showed. 'The registry does not recognise the child' is wider, because a later step, in which the prototype looks up the child's birth record at the Civil Registration Department, may find the child, and that was not tested.",
    "The review is a check, not a reading. It goes through the instruction's tests and looks at the evidence for each one itself. It works out at least one figure again, by a route the report did not use. A check that cannot be run counts as not met. And it ends with one of two verdicts, accepted or not accepted, with no third word. 'Accepted with reservations' is not accepted.",
    "Be wary of a review with zero findings on work that matters: it may not have checked anything. Ask which figure it worked out again, and how. And remember what a check can and cannot see. A check sees that a field is filled, not that it is true; that a citation exists, not that it says what the sentence claims. One check should end at the real thing: another piece of work on the prototype, a consent check, sent one learner's record through the running prototype to the National Examinations Authority (PNEA), and saw it hold back all seven fields of the record the authority has no legal basis to receive, and pass all six it has.",
    "Research on using models as judges finds that a model tends to favour answers that it wrote itself. A new chat of the same model is still the same model, so a separate chat does not remove that lean. What makes the review independent is that it shares nothing with the work chat and reaches the figure by a route of its own. If your organisation offers more than one model, run the review on a different one from the work."
  ],
  inTool: [
    "By hand, in any assistant. The work chat: open a new chat with memory off. Paste the work-chat prompt from the starter folder, the report form, your instruction and the material. Save its report in the reports folder under the instruction's name, and write a log row: 'report back'.",
    "The review chat: open another new chat. Never use the work chat, and never a chat that helped write the instruction. Paste the review-chat prompt, the review form, the instruction, the report and the material. Save its review in the reviews folder, and write a log row: 'review back', with its verdict.",
    "Memory must be off before the review chat starts. A review chat that remembers the work chat is no longer independent. The setting is in your assistant's settings; Claude, ChatGPT, Gemini and Copilot each have one under their own name. An incognito chat, which is not saved and not remembered, also serves.",
    "If your assistant can read your folder, through the desktop app and a file tool, let the work chat write its report into the reports folder and the review chat read it from there. There is then one copy of each document, and nothing is lost in pasting."
  ],
  aiTip: {
    title: "Run your review chat",
    time: "~20 min",
    watch: "A review that only re-reads the report.",
    problem: "A review that reads the report and agrees with it has checked nothing. The review must test the report against the instruction and work out a figure again by its own route.",
    prompt: "You are a review chat. You did not write this instruction and you did not do this work. Below are the instruction [paste it], the report [paste it] and the material [paste it or attach it]. Check the report against the instruction, test by test: for each, say met or not met, and point to the evidence you looked at yourself. Work out at least one figure of the report again by a route the report did not use, and say what your route was and what you got. A check that cannot run counts as not met. If you find nothing wrong, say which figure you worked out again and how: zero findings is a warning, not a pass. Look for any sentence that states a limit of one step as a limit of the whole. Fix nothing. End with exactly one verdict, accepted or not accepted. If not accepted, list the gaps, numbered, each one written so that it can be added to the instruction as version 2.",
    io: "Input: the instruction, the report and the material, in a new chat that never saw the work chat. Output: each test checked, one figure worked out again, a verdict, and the gaps for version 2.",
    safeguard: "A review chat can agree for the wrong reason. Before you accept, find the figure it worked out again and check that its route really differs from the report's. If the review found nothing, treat that as a warning.",
    practice: {
      input: [
        "The instruction, from the practise tab of 3.2: 'Count the schools that did not report enrolment in the 2026 census and write a short paragraph for the Permanent Secretary. Material: the census file. Tests: the count is correct. Out of scope: none.' The report back from MoEYS's planning unit: 'Answer: 37 schools did not report enrolment in the 2026 census. Test T1 met: counted from the census file. Found, not fixed: none.' The census file lists 412 schools; 31 have no return at all and 6 have a return with the enrolment field empty."
      ],
      key: [
        "Not accepted. The figure 37 is 31 plus 6, so the report has counted two different things as one without saying so; the instruction needs to define 'did not report'. A good review works the figure out again by its own route, for example by listing the schools with no return separately from those with an empty field, and names the gap. A review that says 'T1 met, accepted' has only re-read the report."
      ]
    }
  },
  cite: [
    ["a model tends to favour answers that it wrote itself", "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena"]
  ],
  sources: [
    ["Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena", "Zheng et al., NeurIPS · 2023", "Self-enhancement bias: a model judge tends to favour its own answers, which a new chat of the same model keeps"],
    ["Large Language Models Cannot Self-Correct Reasoning Yet", "Huang et al., ICLR · 2024", "Why the check needs something the writer did not have"]
  ]
}));

// ---------- V4 ----------
body.push(...renderVideo({
  id: "3.8 Video V4",
  title: "Why the reviewer is someone else",
  covers: "3.2 and 3.3",
  runtime: "~3 min",
  words: 350,
  speaker: "Arne",
  singleMessage: "The review is worth its route, not its agreement.",
  scriptBeats: [
    { cue: "Opening: the speaker on camera. The title is in the lower third: 'Why the reviewer is someone else'." },
    { text: "When we built the registry prototype, every piece of work went through two chats. One did the work. The other checked it, and had never seen the first. Here is one count, and why the second chat mattered." },
    { story: "The speaker's own case, 60 to 90 seconds, about 150 to 200 words. It must show three things: (1) the question, on 30 October 2026, of how many children on more than one list the prototype catches, and the figure: 40 children, 20 caught from every entry, each of the other 20 missed from the one entry spelt differently; (2) that the instruction named the review's route before the work started, counting again from the lists alone; (3) the review getting the same figures by that route, entry by entry, and why that was worth more than a second reading. Name posts, not persons. If the speaker cannot tell it with the date, this video becomes a page (plan decision 4)." },
    { cue: "Slide cut in — Title: 'Before the work starts'. Body, four text rows: 'What it serves.' 'The tests.' 'How it can fail while seeming to succeed.' 'How the review will check it.'" },
    { text: "Everything that decides whether the work is good is written before the work starts. What it serves. The tests. The ways this work can fail while looking fine, like searching an empty registry and getting a clean zero. And how the review will check it, so the work chat cannot borrow the review's route." },
    { cue: "Slide cut in — Title: 'Two verdicts'. Body, two text rows: 'Accepted.' 'Not accepted.' Below, smaller: 'No third word.'" },
    { text: "The work chat reports with no verdict. The review chat gives one of two: accepted, or not accepted. There is no 'accepted with comments'. And if a review on work that matters finds nothing at all, we ask what it checked." },
    { cue: "Back to the speaker on camera." },
    { text: "One setting can quietly break all of this: memory shared between chats. A review chat that remembers the work chat is not independent. Turn memory off, or use an incognito chat, before the review starts." },
    { cue: "Slide cut in — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The review is worth its route, not its agreement.'" },
    { text: "The review is worth its route, not its agreement." }
  ],
  slideSpecRows: [
    ["1", "Four text rows: what the instruction settles before the work starts.", "Cut in over the voice-over after the story. ITU template. The same wording as page 3.2."],
    ["2", "Two text rows and a smaller line: the two verdicts.", "Text-only."],
    ["3", "Single-sentence summary slide.", "The single message, word for word."]
  ],
  metadataRows: [
    ["Working title",           "Why the reviewer is someone else"],
    ["YouTube-optimised title", "How to review AI-assisted work: a second chat, a second route"],
    ["Description (60 words)",  "One count from a working prototype: how many children on more than one list the registry catches. A practitioner shows how the instruction settled the tests before the work started, how a second chat that never saw the first counted again by its own route, and why that route is worth more than agreement. For public servants who accept AI-assisted work."],
    ["Tags",                    "AI in government, AI review, independent review, orchestration, public sector, AI literacy"],
    ["Playlist (YouTube)",      "Working with AI in Government"],
    ["ToR §4 coverage",         "§4.3 (AI integration: reviewing AI-assisted work before it is used)"],
    ["PAERA citations",         "None. This course is about working with an AI assistant, not about the reference architecture."],
    ["External-link list",      "Pages 3.2 and 3.3, which carry the sources."]
  ]
}));

// ---------- 3.4 ----------
body.push(...renderPage({
  num: "3.9 Subtopic 3.4",
  title: "Judgement: you decide",
  video: "V6, in Module 4",
  singleMessage: "The review gives a verdict; the decision is yours, and four decisions are always yours: what is delivered, what is cut, what is spent and what is said outside.",
  tryFirst: {
    title: "The note that said too much",
    body: [
      "The figures of the duplicates count went into a one-page note to the Permanent Secretary. Version 1 had 21 sentences. Every figure in it was right. Two of its sentences read: 'It does not recognise a child already registered under a different spelling', and 'A registered learner is found only when family name, given names and date of birth match, capitals aside.'",
      "Version 2 corrected those sentences. Its review found that it now left out two limits that the record names: that the Ministry itself is not yet on the data exchange it reads across, and that a child with no birth record can be matched only by names and dates."
    ],
    question: "What is wrong with the two sentences of version 1? And when version 2 also failed, what should the person do next?",
    key: [
      "The two sentences state a limit of one step, the search, as a limit of the whole prototype. The record shows only that the search misses a child spelt differently. A later step, the look-up at the birth register, may find the child, and whether it does was never tested. The note's own later sentence said so, and contradicted them.",
      "Two failures on the same instruction is the signal to write the task again, not to send version 3. The owner, the person who commissioned the prototype, did: the note was defined again as a new piece of work, which listed every limit the record names before the note was written, and that version was accepted.",
      "Then the decisions that no review makes. Whether the note goes to the Permanent Secretary, what it leaves out, and whether the figure is said outside the Ministry are the owner's, however the review reads."
    ]
  },
  concept: [
    "A verdict says whether the work meets its instruction. It does not say whether the work should be used. That decision is yours.",
    "Four decisions are always the person's, whatever the review says: what is delivered, what is cut, what is spent, and what is said outside. A chat can recommend any of them. None of them is ever the chat's.",
    "When the verdict is not accepted, take the review's gaps into the same instruction as version 2, each gap with the test it adds or changes. Start a new work chat and a new review chat for it. After two failures on the same instruction, stop and write the task again: two failures mean the instruction asks the wrong thing, or asks it the wrong way. The note above was not fixed by a third version; it was fixed by a new instruction that asked for every limit to be listed first.",
    "Accepted work you cannot explain is a debt. Researchers call it cognitive debt: work is accepted, built on and passed upward, and nobody can say why it is right. Before you accept, make sure you can say in your own words what the work found and why the review believed it.",
    "Write your decision in the log, with a line on why. The decision is part of the record, not something you remember."
  ],
  inTool: [
    "By hand, in any assistant. Read the review yourself, not only its verdict. Then write a log row, 'my ruling': accepted, not accepted, or withdrawn, and one line on what follows, such as 'the figure goes into the note' or 'version 2: gaps 1 and 2'. The verdict is the review's; the ruling is yours. They usually agree; when they do not, your ruling stands and its line says why. Withdrawn means you stop the piece of work without a verdict, for example because it was started wrongly.",
    "For version 2, copy the instruction to a new file with v2 in place of v1 in its name. Add the review's gaps at its end, each with the test it adds or changes. Start a new work chat and a new review chat. Never reuse the chats of version 1.",
    "A withdrawn piece of work keeps its rows in the log, with the reason. Nothing is deleted."
  ],
  aiTip: {
    title: "Turn a review's gaps into version 2",
    time: "~15 min",
    watch: "A gap closed only for the examples it names.",
    problem: "A review's gaps have to become tests in the instruction, or version 2 will fail the same way. A gap that names three examples usually states a rule that applies to all of them.",
    prompt: "Below are an instruction [paste version 1] and the review that did not accept its work [paste the review]. Do not carry out the work. Write version 2 of the instruction: the same instruction, with each gap of the review added at the end as a numbered change. For each change, say which section of the instruction it alters and the test it adds or changes, written so that a stranger could run it. Where a gap names examples, state the rule behind them and apply it to every case, not only the ones named. Then list any decision the gaps raise that is not the instruction's to make, such as what to deliver, cut, spend or say outside, as questions for me.",
    io: "Input: version 1 of your instruction and its review. Output: version 2, with each gap turned into a numbered change and a test, and the questions only you can answer.",
    safeguard: "This chat has now helped write the instruction, so it must not do the work or review it. Run version 2 in a new work chat and a new review chat. If this is the second failure, write the task again instead of sending version 3.",
    practice: {
      input: [
        "The review of the census count from 3.3, not accepted, with one gap: 'Gap 1: the figure 37 counts schools with no return and schools with an empty enrolment field as one, without saying so. The instruction does not define “did not report”.'"
      ],
      key: [
        "Version 2 adds a definition to section 3: 'A school did not report when it has no return; a school with a return but an empty enrolment field is counted separately.' It adds a test: 'T2: the two figures given separately, each with the list of schools.' A good run also asks you whether the Permanent Secretary wants one figure or two: that is what is said outside, and it is your decision."
      ]
    }
  },
  cite: [
    ["Researchers call it cognitive debt", "How generative and agentic AI shift concern from technical debt to cognitive debt"]
  ],
  sources: [
    ["How generative and agentic AI shift concern from technical debt to cognitive debt", "Margaret-Anne Storey · 9 February 2026", "Cognitive debt: work accepted that nobody can explain"],
    ["AI Playbook for the UK Government", "GOV.UK · 10 February 2025", "Meaningful human control at the right stages"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard"),
  P("A public servant with the page on one half of the screen and an assistant on the other must be able to do the page's step on their own work. By the end of 3.4 they have one instruction, one report, one review and their own ruling, in a folder and a log they will keep using."),

  H3("4.2 The videos"),
  P("V3 and V4 are each one person on camera, with three text-only slides cut in on the ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB. The story beats are the speakers'; the slides and the single messages are said as written."),

  H3("4.3 Voice and tone"),
  P("Direct address. Plain language at about an eighth-grade English level. The pattern's own words are kept to four, each explained where it first appears: the instruction, the report, the review and the log. The record's codes, file names and the plugin's terms are never used on a page."),

  H3("4.4 The record behind the examples"),
  P("Every Try it first is rewritten from the record of the registry prototype, frozen on 31 October 2026 in examples/plr/. The figures as the pages state them are set out in the Orchestrate section plan, section 4, with the wordings each must avoid. The starter folder's finished cycle is the duplicates count, so the folder and pages 3.2 and 3.3 tell one story."),

  H3("4.5 Try it first"),
  P("On the GitBook page, each answer key sits in a collapsed block below its question, so that learners try before they read. In this document the key follows the question."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU."),

  H3("5.1 Three departures from the series rules"),
  P("As in Modules 1 and 2: a person on screen in V3 and V4; written pages covered by a video; on-camera cues in the script. The plan, section 7, gives the reason."),

  H3("5.2 The speakers' cases"),
  P("V3 and V4 each name the record's case with its date as the case to tell. Each speaker confirms it, or names their own, before the cut is decided (plan decision 4)."),

  H3("5.3 Memory off"),
  P("The by-hand cycle depends on one setting: memory shared between chats must be off, or the review chat must be incognito. The pages give no path through each assistant's menus, because those paths change; page 2.4 links each assistant's own help page for memory and incognito chats, and page 3.2 points to it."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the four pages and the two videos. Every source is public."),
  genericTable([1100, 8600], ["Page", "Sources referenced, with addresses"], [
    ["3.1", "Large Language Models Cannot Self-Correct Reasoning Yet (Huang et al., ICLR, 2024), https://arxiv.org/abs/2310.01798. Building effective agents (Anthropic Engineering, December 2024), https://www.anthropic.com/engineering/building-effective-agents."],
    ["3.2", "Building effective agents, as above. AI Playbook for the UK Government (GOV.UK, 10 February 2025), https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government."],
    ["3.3", "Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena (Zheng et al., NeurIPS, 2023), https://arxiv.org/abs/2306.05685. Large Language Models Cannot Self-Correct Reasoning Yet, as in 3.1."],
    ["3.4", "How generative and agentic AI shift concern from technical debt to cognitive debt (Margaret-Anne Storey, 9 February 2026), https://margaretstorey.com/blog/2026/02/09/cognitive-debt/. AI Playbook for the UK Government, as in 3.2."],
    ["V3, V4", "None of their own; the descriptions point to the pages."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP0 Module 3 — Script Bundle v0.1",
  description: "Script bundle for KP0 Module 3 (Working with AI in Government): Orchestrate — one piece of work, start to finish.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP0 Module 3 Script Bundle v0.1 · 31 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP0_Module3_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});

