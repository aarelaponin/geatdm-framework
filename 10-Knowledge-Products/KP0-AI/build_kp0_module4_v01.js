// Build KP0 Module 4 — Script Bundle v0.1
// Working with AI in Government · Module 4 — Orchestrate: running it for days (Architect).
// v0.1 (31 Oct 2026): written on the KP0 plan, version 0.4 (as changed on 30 October 2026), and the Orchestrate section
//   plan, version 0.1, sections 2 to 5. Every Try it first is rewritten from the registry prototype's record, frozen in
//   examples/plr/ on 31 October 2026. Same shape as Module 3 (tryFirst before the concept; the tip is the step on the
//   learner's own work). Two videos (V5, V6; V6 also covers 3.4). 4.4 carries the setup list of the section plan,
//   section 5, and the sidebar 'What automation adds', which names no product.
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

// Persona for KP0 Module 4 (the Architect, as the plan's module table sets it).
const PERSONA_S = "S (Strategist) — the public servant who commissions and accepts AI-assisted work and answers for it: a director, a head of unit, a technical secretary briefing the principal. No programming assumed";
const PERSONA_A = "A (Architect) — the one who runs AI-assisted work day to day: the head of an ICT unit, a project lead, an analyst. No programming assumed";
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
// Modules 3 and 4 add tryFirst: the fault to find in the record, its question, and its key (collapsed on the GitBook page),
// shown before the concept; the AI usage tip is the page's step on the learner's own work.
function renderPage({ num, title, singleMessage, tryFirst, concept, inTool, where, example, aiTip, withKit, sources, video = "V2", persona = PERSONA_A }) {
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
    children: [new TextRun({ text: "Module 4 — Orchestrate: running it for days", font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",        "Script bundle for Module 4 of KP0: four written pages and two videos"],
    ["Version",         "v0.1 — written on the KP0 plan, version 0.4 (as changed on 30 October 2026), and the Orchestrate section plan, version 0.1"],
    ["Date",            "31 October 2026"],
    ["Module persona",  PERSONA_A],
    ["Subtopics",       "Four written pages (4.1 – 4.4); the fourth is the module's Judgement page, with the sidebar 'What automation adds'"],
    ["Videos",          "Two, each a person on camera: V5 'Running it for days' (pages 4.1 and 4.3) and V6 'What stays ours' (pages 3.4, 4.2 and 4.4)"],
    ["Worked examples", "The same project as Module 3, the prototype of the Progressa Learner Registry: the parallel mistake, where the drafting page's line came from, the handover note's confessions, and seven mixed-up moments"],
    ["Starter folder",  "toolkit/orchestrate-starter/: the log, the pages of faults, the handover note and the first-task prompt"],
    ["Self-check",      "Four questions drawn from the four pages, in section 2.1"],
    ["Prepared by",     "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 4 of KP0 — Working with AI in Government. In Module 3 you took one piece of work through the cycle once. Module 4 is for running the cycle every day, on several pieces of work, for weeks: a log that answers where the work stands, pages of faults that grow with every review, a handover to a fresh chat, and the setup and routine that keep it going. The exercises come from the same project as Module 3, the registry prototype of the Progressa Learner Registry, which we built in October 2026 with this cycle, in its busiest days: by then it had many pieces of work under way, a chat in the orchestrator's role that had run for four days, and an owner deciding on each result. The register is plain English at about an eighth-grade level."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the four pages and the two video scripts of Module 4 of Knowledge Product 0 (Working with AI in Government), with the module's self-check, production notes and calibration items. It is written on the KP0 plan, version 0.4, section 4, and on the Orchestrate section plan, sections 2 to 5."),
  P("Module 4 is the second half of the Orchestrate layer, for the Architect: the head of an ICT unit, a project lead, an analyst. It assumes the learner has run one cycle in Module 3, and has its instruction, report, review and log rows in their starter folder."),

  H3("1.2 How Module 4 is built"),
  P("As in Module 3: each page opens with Try it first, a fault to find in the record with its key kept back, and closes with On your work, a step on the learner's own work. The cycle is still done by hand. Page 4.4 carries a sidebar, What automation adds, which shows a plugin doing the bookkeeping the learner has done by hand. Nothing on a page depends on it."),

  H3("1.3 The names used for Progressa"),
  P("As in Module 3. The registry prototype is the Progressa Learner Registry (PLR) prototype, built by the course team with the cycle this course teaches; its record is the source of every example. The owner is the post that commissioned the prototype and decided on every piece of work."),

  H3("1.4 How to read this document"),
  P("Section 2 gives Module 4 at a glance, with the module's self-check. Section 3 holds the four pages and the two video scripts. Section 4 collects the production notes, section 5 the open calibration items, and section 6 the aggregate external-link list."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 4 at a glance"),
  P("Four written pages and two videos of about three minutes each. A learner who does each page's exercise and its step on their own work needs about three hours."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Form"], [
    ["4.1", "The log: status is produced, never remembered",
      "Write one row for every event, and answer 'where does it stand?' from the log, never from memory.", "Page"],
    ["4.2", "The faults you learn once",
      "Keep a page of faults for each kind of work, and add every fault a review finds, so that every later instruction carries it.", "Page"],
    ["4.3", "Handing over to a fresh chat",
      "Hand over only what the files cannot say, as claims someone can check, and make the next chat's first task to check a few of them and stop.", "Page"],
    ["4.4", "Judgement: setting up, every day, and what this does not claim",
      "Set up once, keep a daily routine, and remember what the pattern does not claim: it does not make the work true, cheap or the same every time.", "Page"],
    ["V5", "Running it for days", "The log knows; you do not.", "Video, ~3 min"],
    ["V6", "What stays ours", "A review gives a verdict; the decisions stay with you.", "Video, ~3 min"]
  ]),

  H3("2.1 The module's self-check"),
  P("Four questions, drawn from the four pages. Questions 1 and 3 are multiple choice. Questions 2 and 4 ask for a short answer, which is right if it makes the point of the model answer. Three or four right means Ready; below three, read again the page named beside each question you missed. The threshold is a proposal, to be tested with the first learners."),
  genericTable([600, 3900, 3700, 1500], ["#", "Question", "Model answer", "Drawn from"], [
    ["1", "Your director asks on Friday how many of this week's pieces of work were accepted. What do you do? (a) Answer from memory: you ran them all. (b) Ask the last work chat. (c) Count the 'my ruling' rows in the log, and give the figure with the withdrawn ones named. (d) Ask each review chat again.",
      "(c). Status is produced from the log, never remembered. A figure from memory is quoted afterwards as fact, and nobody can find where it came from.",
      "4.1 The log"],
    ["2", "A review of a drafting task finds that the draft supplied a figure the source does not carry. Your page of faults for drafting already says 'supply nothing the source does not carry'. What do you do with the finding, and what if the page did not say it?",
      "The fault is already on the page, so it goes into version 2 of the instruction as a gap, and the page stays as it is. If the page did not carry it, add it to the page in the same sitting, so every later drafting instruction carries it.",
      "4.2 The faults you learn once"],
    ["3", "You hand your work to a colleague for two weeks. What goes into the handover note? (a) Every figure so far, so they need not look. (b) A full story of the work. (c) What you did that you should not have done, what is owed, findings in no report, and a few claims to check first. (d) Nothing: the log says it all.",
      "(c). The note carries only what the files cannot. Figures belong in the files, where they can be worked out again; a story cannot be checked; and the log does not record what you regret or what is owed.",
      "4.3 Handing over"],
    ["4", "A colleague says: 'We ran it through the cycle, so the figure is true.' What does the pattern claim, and what does it not?",
      "It does not make the output true, cheap or the same between runs. It makes each difference discussable and each failure countable: what was asked, what came back, how it was checked and who decided are all on file.",
      "4.4 Judgement"]
  ]),

  H3("2.2 Go further"),
  P("Shown on the module's home page, apart from the sources: one to three things to do next, each with its time."),
  genericTable([2300, 1700, 2600, 2100, 1000], ["Title", "Publisher", "Address", "Why", "Time"], [
    ["Effective harnesses for long-running agents", "Anthropic", "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents", "How engineers keep long work going across fresh chats: a progress file, and a first task that reads it.", "20 minutes"],
    ["The Checklist Manifesto", "Atul Gawande", "https://atulgawande.com/book/the-checklist-manifesto/", "Why a short list of the faults you already know beats experience alone; the idea behind the pages of faults.", "A book"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE PAGES, THE VIDEOS AND THE REFERENCE
// ============================================================================
body.push(H1("3. The pages, the videos and the reference"));

// ---------- 4.1 ----------
body.push(...renderPage({
  num: "3.1 Subtopic 4.1",
  title: "The log: status is produced, never remembered",
  withKit: "writes the log itself, one entry per event, and answers 'where does it stand?' from it whenever you ask. It cannot stop two pieces of work you start yourself from colliding: one writes at a time is still your rule.",
  video: "V5",
  singleMessage: "Write one row for every event, and answer 'where does it stand?' from the log, never from memory.",
  tryFirst: {
    title: "The parallel mistake",
    body: [
      "On 30 October 2026, four pieces of work on the registry prototype were ready to start, each building one thing the prototype lets a user do: enrol a learner, move a learner to another school, register an examination candidate, and show the planning unit's figures. The chat in the orchestrator's role recommended running all four at once to save time, and the owner agreed.",
      "The prototype was run with a plugin that starts each work chat on a timer (the sidebar of 4.4 says more). Each piece of work was also started by hand, and for two of the four the timer fired as well, so they ran twice. All four were writing in one shared folder. Two copies of the same work, and four pieces of work, were changing the same files at the same time.",
      "The owner withdrew all four and had them run again, one after another. Each was then accepted. The withdrawn rows stayed in the log, with the reason."
    ],
    question: "What in the log would have shown the clash before it happened?",
    key: [
      "Four rows saying 'instruction issued' at the same time, with no 'report back' between them: four pieces of work open at once. And, for two of them, the same version issued twice. A log read before each start shows what is already running, and a rule of 'one piece of work writes at a time' would have stopped the other three from starting at all.",
      "The lesson the record took: one piece of work writes at a time. Running in parallel saves minutes, and costs the whole round when two of them touch the same files."
    ]
  },
  concept: [
    "A log is one row per event. A piece of work is issued; its report comes back; its review comes back with a verdict; you rule on it. Each event is a row, with the date, the piece of work, its version, the event, the file, and the verdict or ruling. Nothing else goes in.",
    "When anyone asks where the work stands, answer from the log, never from memory. A figure from memory is repeated as fact by people who were not there. A figure from the log can be produced again by anyone, and gives the same answer.",
    "Nothing is deleted. A withdrawn piece of work keeps its rows, with the reason. That way the log counts what really happened: the registry prototype closed 23 pieces of work in its first week, 26 to 30 October 2026: 13 accepted at the first version and 10 after a second attempt, 4 of those 10 being work that was withdrawn and run again. Expect nearly half of your work to need a second attempt. That is not failure; it is the review doing its job.",
    "One piece of work writes at a time. Two chats changing the same files at once is the one mistake the cycle cannot repair afterwards."
  ],
  inTool: [
    "By hand, in any spreadsheet. The starter folder's log has seven columns: date, piece of work, version, event, file, verdict or ruling, and who it is open with. Its event column offers six words: instruction issued, report back, review back, my ruling, withdrawn and handover.",
    "Write the row before you move on, not at the end of the day. Keep the log open beside the chats.",
    "To answer 'where does it stand?', filter the log by piece of work and read its last row. To count the week, count the 'my ruling' rows: accepted, not accepted, withdrawn."
  ],
  aiTip: {
    title: "Answer 'where does it stand?' from the log alone",
    time: "~10 min",
    watch: "An answer that adds what the log does not say.",
    problem: "When you answer status questions from memory, you round off, forget the withdrawn work and remember the good news. The log does not.",
    prompt: "Below is my work log, one row per event [paste the log, or attach it]. Use only the log; add nothing from anywhere else. For each piece of work, give: its latest version, its last event and date, whether it is open or closed, and, if open, who it is open with. Then give the totals: pieces of work closed, accepted at the first version, accepted after a second attempt, not accepted, and withdrawn. Then list anything in the log that looks wrong: two starts of the same version with no report between them, a verdict with no review row, a ruling with no verdict. Quote the rows. Output: the table, the totals, then the list.",
    io: "Input: your log. Output: where each piece of work stands, the week's totals, and the rows that look wrong.",
    safeguard: "Compare the answer with what you remembered before you ran it. Where they differ, the log is the record; where the log is wrong, fix it with a new row that says why, never by deleting the old one.",
    practice: {
      input: [
        "A log of MoEYS's planning unit: '28 Oct, census count, v1, instruction issued. 28 Oct, census count, v1, report back. 29 Oct, census count, v1, review back, not accepted. 29 Oct, census count, v2, instruction issued. 29 Oct, school map, v1, instruction issued. 29 Oct, school map, v1, instruction issued. 30 Oct, census count, v2, report back.'"
      ],
      key: [
        "Census count: version 2, report back on 30 October, open, waiting for its review. School map: version 1, issued twice on 29 October with no report: a possible double start, to check before anything else runs. Totals: nothing closed yet. A good run names the double start; a weak one counts the school map once and moves on."
      ]
    }
  },
  sources: [
    ["Effective harnesses for long-running agents", "Anthropic Engineering · November 2025", "Keeping progress in a file that each new session reads, rather than in a session's memory (vendor source)"]
  ]
}));

// ---------- 4.2 ----------
body.push(...renderPage({
  num: "3.2 Subtopic 4.2",
  title: "The faults you learn once",
  video: "V6",
  singleMessage: "Keep a page of faults for each kind of work, and add every fault a review finds, so that every later instruction carries it.",
  tryFirst: {
    title: "Where the drafting page's line came from",
    body: [
      "Module 3 ended with the note to the Permanent Secretary. Its review found two sentences that stated a limit of the registry's search as a limit of the whole prototype: 'it does not recognise a child already registered under a different spelling'.",
      "After that review, the page of faults for drafting gained a line. It now says that every limit of the thing described that an accepted document names is either in the draft or in the list of what was left out, and: 'a limit of one step is stated of that step, not of the whole'. Every drafting instruction written after that day carries the line."
    ],
    question: "Think of a review of your own work, in Module 3 or before it. Which finding would have added a line to your page?",
    key: [
      "There is no single answer. A good line names the fault, not the instance: not 'the census paragraph mixed two counts', but 'define each figure before counting it, and give figures that measure different things separately'.",
      "A line belongs on the page when the fault could recur in other work of the same kind. A fault that belongs to one task only goes into that task's instruction, under how this work can fail."
    ]
  },
  concept: [
    "Each kind of work fails in its own ways. Analysis tends to lean towards one position, or to count over a set it never listed. Drafting tends to supply what the source does not carry, or to say more than the record does. Checking tends to trust a clean result from a check that was never seen to fail.",
    "So keep one page of faults for each kind of work you do. Each page says what the work chat refuses to do, what the review chat runs before it judges, and what you check before you issue an instruction of that kind. The starter folder has three pages to begin with: analysis, drafting and checking.",
    "The pages grow. When a review finds a fault the page does not yet carry, add it to the page in the same sitting. Every later instruction of that kind copies the page's faults into its section on how the work can fail, so you learn each fault once and never pay for it again.",
    "A correction goes where the fact lives. If a review shows that a figure in your context pack (the dated facts about your country and unit, from page 2.1) is wrong, correct the pack, not the instruction that quoted it. Otherwise the next instruction quotes the same wrong figure."
  ],
  inTool: [
    "By hand, in any assistant. Copy the page for the kind of work you do most from the starter folder's kinds folder into your own folder, and keep it there.",
    "When you write an instruction, copy the page's faults into its section 6, then add the two or three ways particular to the task.",
    "When a review comes back, read its gaps against the page. A gap the page already carries goes into version 2. A gap the page does not carry goes into version 2 and onto the page, written as a rule."
  ],
  aiTip: {
    title: "Turn a review's finding into a line on your page",
    time: "~10 min",
    watch: "A line that names the instance, not the rule.",
    problem: "A fault written as the instance ('the census paragraph mixed two counts') will not be recognised the next time. Written as a rule, it is caught in every later instruction.",
    prompt: "Below is my page of faults for one kind of work [paste the page] and a review of one piece of that kind of work [paste the review]. For each gap the review names: (a) say whether the page already carries it, and quote the line if it does; (b) if it does not, write one new line for the page, as a rule that would apply to any piece of this kind of work, not only to this one; (c) say whether the gap is particular to this task, in which case it belongs only in the task's instruction. Do not rewrite the existing lines. Output: a table of the gaps, then the new lines, ready to paste.",
    io: "Input: your page of faults and one review. Output: each gap matched to the page, and new lines written as rules.",
    safeguard: "A new line that is too wide stops good work; one that is too narrow catches nothing. Read each one against two other pieces of work of the same kind before you add it.",
    practice: {
      input: [
        "The census review from Module 3: 'Gap 1: the figure 37 counts schools with no return and schools with an empty enrolment field as one, without saying so.' The starter folder's page of faults for checking."
      ],
      key: [
        "The page carries 'list the set first from its own source', which is close but not the same. A good new line: 'Define each figure before counting it; where two different things could be counted under one word, count them separately and say so.' It applies to every count, not only the census."
      ]
    }
  },
  sources: [
    ["The Checklist Manifesto", "Atul Gawande · Metropolitan Books · 2009", "A short list of known failures, kept and used every time, catches what experience misses"]
  ]
}));

// ---------- 4.3 ----------
body.push(...renderPage({
  num: "3.3 Subtopic 4.3",
  title: "Handing over to a fresh chat",
  withKit: "writes the handover note from its form and the fresh session's first task, and the fresh session records in the log that it has taken over before it does anything else.",
  video: "V5",
  singleMessage: "Hand over only what the files cannot say, as claims someone can check, and make the next chat's first task to check a few of them and stop.",
  tryFirst: {
    title: "The confessions",
    body: [
      "On 30 October 2026, the chat that had held the orchestrator's role on the registry prototype for four days was retired, and a fresh chat took over. The outgoing chat wrote a handover note. Its first section was headed 'What this session did that it should not have done'. Some of its lines, rewritten plainly:",
      "It edited the project's main documents itself, on the owner's rulings, where a piece of work should have done it. It started a review before the work it reviewed. It designed the four pieces of work to run at the same time in one folder, with no guard against a timer starting them a second time. It stopped a program still running in the background after the work was withdrawn.",
      "The note ended with four claims for the fresh chat to check first, each with where to check it. The fresh chat checked all four, and all four held. The note's other claims were left unchecked."
    ],
    question: "Which one claim would you have added to the four?",
    key: [
      "A strong candidate: 'No piece of work is running twice.' It follows from the parallel mistake, it can be checked against the log in a minute, and if it were false every other claim would be in doubt.",
      "A good claim is one whose failure would change what the next chat does first, and that can be checked against a named file or row. 'The work is in good shape' is not a claim; 'the four pieces of work of 4.1 are each accepted at version 2' is."
    ]
  },
  concept: [
    "A chat that runs for days starts to quote figures it no longer works out again. That is the second failure of Module 3 coming back: what a chat knows lives in the chat. The answer is to retire the chat and start a fresh one, which reads the files instead of remembering.",
    "The handover note carries only what the files cannot. What the outgoing chat did that it should not have done. What is owed, to whom, and by when. Findings that appear in no report. It refuses figures, which belong in the files where they can be worked out again; a survey of the work, which the log already gives; and a story, which nobody can check. Every line is a claim.",
    "The fresh chat's first task is small: check a handful of the claims against the files, then stop and wait. Keep the list short. A list of everything is a list nobody checks.",
    "The same note serves when you hand the work to a colleague, or come back to it yourself after a holiday."
  ],
  inTool: [
    "By hand, in any assistant. Write the note from the starter folder's handover form, in your own words or with the outgoing chat's help. Save it beside the log.",
    "Open a new chat with memory off. Paste the first-task prompt, the note and the log. Read its answer: each claim marked holds or does not hold, with what it looked at. If it went further than checking, stop it: it was told to stop.",
    "Write a row in the log: 'handover', with the note's file name."
  ],
  aiTip: {
    title: "Write the handover note for your work",
    time: "~15 min",
    watch: "A note that retells the work instead of claiming.",
    problem: "A handover written as a story feels complete and cannot be checked. A note of claims can be checked in minutes, and shows the next person where to start.",
    prompt: "Below are my work log [paste it] and my notes on the work so far [paste them]. Write a handover note with three sections and a list, and nothing else. (1) What I did that I should not have done: steps out of order, decisions taken that were not mine, shortcuts. (2) What is owed: what is open, to whom, by when. (3) Findings that appear in no report. Then: the claims to check first, three to five, each one a single sentence that can be checked against a named file or log row, with where to check it. Leave out every figure, any survey of the work and any story. Where my notes do not say something, leave the line out rather than guess.",
    io: "Input: your log and your notes. Output: a handover note of claims, and three to five claims for the next chat to check first.",
    safeguard: "Only you know what you did that you should not have done; the chat can only find it in what you give it. Read section 1 and add what is missing before you hand over.",
    practice: {
      input: [
        "The census log from 4.1, and these notes: 'Version 2 of the census count is waiting for its review. I started the school map twice by mistake on 29 October and did not check whether both ran. The director wants the census figure by 5 November. I told the director informally it would be about 30.'"
      ],
      key: [
        "Section 1: the school map started twice and not checked; a figure given to the director informally before it was reviewed. Section 2: the census figure, owed to the director by 5 November. Claims: 'the census count version 2 has a report and no review yet' (the log); 'only one school map chat ran' (the log and the reports folder). A good run leaves out 'about 30': it is a figure, and an unreviewed one."
      ]
    }
  },
  sources: [
    ["Effective harnesses for long-running agents", "Anthropic Engineering · November 2025", "A fresh session's first steps: read the progress file and check the state before doing new work (vendor source)"]
  ]
}));

// ---------- V5 ----------
body.push(...renderVideo({
  id: "3.4 Video V5",
  title: "Running it for days",
  covers: "4.1 and 4.3",
  runtime: "~3 min",
  words: 340,
  speaker: "Arne",
  singleMessage: "The log knows; you do not.",
  scriptBeats: [
    { cue: "Opening: the speaker on camera. The title is in the lower third: 'Running it for days'." },
    { text: "One cycle is easy to hold in your head. Twenty are not. When we built the registry prototype, we ran the cycle for days, and two things carried us: a log, and a habit of handing over to a fresh chat." },
    { story: "The speaker's own case, 60 to 90 seconds, about 150 to 200 words, told by the speaker and not read from the record. It must show the parallel mistake of 30 October 2026: four pieces of work started at once to save time, two of them started twice, all four in one shared folder, and the owner withdrawing all four and running them again one after another. It must say what in the log would have shown it, and the rule taken from it: one piece of work writes at a time. Name posts, not persons. If the speaker cannot tell it with the date, this video becomes a page (plan decision 4)." },
    { cue: "Slide cut in — Title: 'The log'. Body, three text rows: 'One row per event.' 'Status from the log, never from memory.' 'Nothing deleted.'" },
    { text: "The log is one row per event. When someone asks where the work stands, we answer from the log. In the first week the log said 23 pieces of work closed, 13 at the first try, and 4 withdrawn. From memory, we would have said 'nearly all of them, first time'." },
    { cue: "Slide cut in — Title: 'The handover'. Body, three text rows: 'What I did that I should not have done.' 'What is owed.' 'A few claims to check first.'" },
    { text: "After a few days, a chat starts to quote figures it no longer works out. So we retire it. The outgoing chat writes a note of claims, not a story. The fresh chat checks four of them and stops. Ours checked four, and all four held." },
    { cue: "Back to the speaker on camera." },
    { text: "Neither of these needs a tool. A spreadsheet and a one-page note will do." },
    { cue: "Slide cut in — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The log knows; you do not.'" },
    { text: "The log knows. You do not. Answer from the log." }
  ],
  slideSpecRows: [
    ["1", "Three text rows: the log.", "Cut in over the voice-over after the story. ITU template. The same wording as page 4.1."],
    ["2", "Three text rows: the handover.", "Text-only. The same wording as page 4.3."],
    ["3", "Single-sentence summary slide.", "The single message, word for word."]
  ],
  metadataRows: [
    ["Working title",           "Running it for days"],
    ["YouTube-optimised title", "Running AI-assisted work for weeks: a log and a handover"],
    ["Description (60 words)",  "One cycle of AI-assisted work fits in your head; twenty do not. A practitioner tells the mistake of running four pieces of work at once, and the two habits that carried a project for days: a log that answers where the work stands, and a handover to a fresh chat as a short list of claims to check. For public servants who run AI-assisted work."],
    ["Tags",                    "AI in government, work log, handover, orchestration, public sector, AI literacy"],
    ["Playlist (YouTube)",      "Working with AI in Government"],
    ["ToR §4 coverage",         "§4.3 (AI integration: running AI-assisted work over time)"],
    ["PAERA citations",         "None. This course is about working with an AI assistant, not about the reference architecture."],
    ["External-link list",      "Pages 4.1 and 4.3, which carry the sources."]
  ]
}));

// ---------- 4.4 ----------
body.push(...renderPage({
  num: "3.5 Subtopic 4.4",
  title: "Judgement: setting up, every day, and what this does not claim",
  video: "V6",
  singleMessage: "Set up once, keep a daily routine, and remember what the pattern does not claim: it does not make the work true, cheap or the same every time.",
  tryFirst: {
    title: "Seven mixed-up moments",
    body: [
      "Each moment below breaks one rule of the cycle. Name the rule.",
      { table: [
        ["#", "The moment"],
        ["1", "The work chat is still open, so you paste the next step of the work into it."],
        ["2", "At the end of the work chat, you ask it to check its own report before you save it."],
        ["3", "You paste the report into the chat that helped you write the instruction, and ask it for a verdict."],
        ["4", "Memory is on, and the review chat greets you by recalling the work you did this morning."],
        ["5", "The review says 'accepted, with minor reservations'."],
        ["6", "Your director asks how many pieces of work were accepted this week, and you answer from memory."],
        ["7", "Version 2 fails, and you write version 3 with the new gaps added."]
      ] }
    ],
    question: "Which rule does each moment break?",
    key: [
      "1: one instruction, one piece of work: the next step is a new instruction and a new chat. 2: the one who writes is not the one who checks. 3: a chat never judges work it helped to commission. 4: memory must be off, or the review is not independent. 5: two verdicts, no third word: this is not accepted. 6: status is produced from the log, never remembered. 7: after two failures, write the task again, not version 3."
    ]
  },
  concept: [
    "Set up once. Before the first session you need a folder with three places in it, one each for instructions, reports and reviews; a log; a page of faults for each kind of work you do; and memory off, or an incognito chat for every review. The starter folder holds all of it. After a first cycle, check the setup again against what you actually did.",
    "Then keep a routine. Open the log, and answer where the work stands from it. Pick up the open piece of work with the earliest date: one writes at a time. Read the page of faults before each instruction. Add each new fault a review finds. Hand over before a chat gets long, and before a break.",
    "Watch for cognitive debt: work accepted that nobody can explain. The cycle makes it easy to accept work, because a review stands behind it. Before you accept, be able to say in your own words what the work found and why the review believed it.",
    "And be clear about what the pattern does not claim. It does not make the output true: a review can miss what the instruction never asked. It does not make the work cheap: it costs a second chat, a log row and your time. It does not make two runs give the same answer. What it does is make every difference discussable, because what was asked, what came back, how it was checked and who decided are all on file, and make every failure countable."
  ],
  inTool: [
    "Setting up your computer, from the baseline up. Only the first step is needed. (1) Any assistant in the browser: your working folder built from the starter folder's pages, memory off, prompts pasted, replies saved by hand. This works in whatever assistant your organisation approves. (2) The Claude desktop app, on Windows or Mac: chats beside your files, and a project that holds the forms and your page of faults as standing instructions; keep the review chat outside the project. (3) File access, through Desktop Commander or the desktop app's own file extension: the work chat writes its report into the folder and the review chat reads it from there. Allow the starter folder only, never a folder with anything confidential, and turn down any command you did not ask for. (4) Plugins and skills, if your assistant has them. (5) Keep the folder somewhere it is copied, such as a synced OneDrive or SharePoint folder.",
    "Practical tips. Check your organisation's rules before installing anything on a work computer; some organisations do not allow new software or extensions, and then the baseline is the route. Name each chat by piece of work, role and version, such as 'duplicates · review · v2'. Start the review in a new chat every time, version 2 included. Write the log row before you move on.",
    "Sidebar — What automation adds. Everything in this section was done by hand. A plugin can do the bookkeeping: an orchestrator plugin, like the one we used to build the registry prototype, starts each work chat and its review chat on a timer, writes the log itself, produces where the work stands on request, and checks that each report names only files it really wrote. It changes nothing in the method, and the course does not need it. A learner edition of the plugin is in preparation; the starter folder's page With the plugin says what it will take, and Module 5 builds a small prototype with it. The parallel mistake of 4.1 happened with such a plugin running: automation does the bookkeeping, and the rules stay yours."
  ],
  aiTip: {
    title: "Write your readiness statement",
    time: "~15 min",
    watch: "A statement that promises the cycle for everything.",
    problem: "After a course, it is easy to plan to use everything and then use nothing. A short statement of what you will do alone, what you will do with a review, and when you will look again, is a plan you can keep.",
    prompt: "Below are my log from the cycles I ran in this course [paste it] and a list of the kinds of work I do in a normal month [list them, with how often]. Help me write a readiness statement in three parts. (1) What I now do alone, without the cycle, because none of the five conditions holds: more than three documents to read; a document that will last; a figure someone will quote; a change to a file; evidence the assistant cannot see for itself. (2) What I do with an instruction and a separate review, and which page of faults each uses. (3) What I will revisit, and when: a date, and what would make me change the statement. Base it on my log and my list only. Keep it under 200 words. Ask me about anything you cannot tell from them.",
    io: "Input: your log and the kinds of work you do. Output: a readiness statement of under 200 words, in three parts.",
    safeguard: "The statement is yours, not the chat's. Strike anything you would not actually do in a busy week; a shorter statement you keep is worth more than a complete one you do not.",
    practice: {
      input: [
        "A head of the planning unit's month: four replies to schools' letters, one census count for the Permanent Secretary, two summaries of donor reports for the unit, one terms of reference for a consultant. Their log: one cycle, the census count, not accepted at version 1, accepted at version 2."
      ],
      key: [
        "Alone: the four replies, and the donor summaries kept within the unit. With the cycle: the census count (checking) and the terms of reference (drafting: it lasts and goes outside). Revisit: after the next census, or when a donor summary is first quoted outside the unit. A good statement does not put the replies through the cycle."
      ]
    }
  },
  cite: [
    ["Watch for cognitive debt", "How generative and agentic AI shift concern from technical debt to cognitive debt"]
  ],
  sources: [
    ["How generative and agentic AI shift concern from technical debt to cognitive debt", "Margaret-Anne Storey · 9 February 2026", "Cognitive debt: work accepted that nobody can explain"],
    ["AI Playbook for the UK Government", "GOV.UK · 10 February 2025", "Meaningful human control; using approved tools and protecting data"]
  ]
}));

// ---------- V6 ----------
body.push(...renderVideo({
  id: "3.6 Video V6",
  title: "What stays ours",
  covers: "3.4, 4.2 and 4.4",
  runtime: "~3 min",
  words: 330,
  speaker: "Arne",
  singleMessage: "A review gives a verdict; the decisions stay with you.",
  scriptBeats: [
    { cue: "Opening: the speaker on camera. The title is in the lower third: 'What stays ours'." },
    { text: "A review tells you whether the work meets its instruction. It never tells you what to do with it. On the registry prototype, the decisions that mattered most were never the chats' to make." },
    { story: "The speaker's own case, 60 to 90 seconds, about 150 to 200 words. It must show two things: (1) the note to the Permanent Secretary of 30 October 2026, whose first version said more than the record carries in two sentences while every figure was right, whose second version left out two limits, and which the owner then had defined again as a new piece of work rather than sent as a third version; (2) one ruling the owner made that no review could have made, described rather than quoted. Name posts, not persons. If the speaker cannot tell it with the date, this video becomes a page (plan decision 4)." },
    { cue: "Slide cut in — Title: 'Always yours'. Body, four text rows: 'What is delivered.' 'What is cut.' 'What is spent.' 'What is said outside.'" },
    { text: "Four decisions are always the person's. What is delivered, what is cut, what is spent, and what is said outside. A chat can recommend any of them. It never takes them." },
    { cue: "Slide cut in — Title: 'Learn it once'. Body, two text rows: 'A fault a review finds goes onto the page.' 'Every later instruction carries it.'" },
    { text: "What a review finds, we keep. After the note, the page of faults for drafting gained one line: a limit of one step is stated of that step, not of the whole. Every drafting instruction since carries it." },
    { cue: "Back to the speaker on camera." },
    { text: "And we are honest about what this does not do. It does not make the work true, or cheap, or the same every time. It makes every difference something we can discuss, and every failure something we can count." },
    { cue: "Slide cut in — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A review gives a verdict; the decisions stay with you.'" },
    { text: "A review gives a verdict. The decisions stay with you." }
  ],
  slideSpecRows: [
    ["1", "Four text rows: the four decisions.", "Cut in over the voice-over after the story. ITU template. The same wording as page 3.4."],
    ["2", "Two text rows: learn it once.", "Text-only. The same wording as page 4.2."],
    ["3", "Single-sentence summary slide.", "The single message, word for word."]
  ],
  metadataRows: [
    ["Working title",           "What stays ours"],
    ["YouTube-optimised title", "AI-assisted work in government: the decisions that stay human"],
    ["Description (60 words)",  "A review says whether AI-assisted work meets its instruction; it never says what to do with it. A practitioner tells the case of a note to a Permanent Secretary that was right in every figure and still said too much, the four decisions that always stay with the person, and how each fault a review finds is learned once."],
    ["Tags",                    "AI in government, human oversight, accountability, orchestration, public sector, AI literacy"],
    ["Playlist (YouTube)",      "Working with AI in Government"],
    ["ToR §4 coverage",         "§4.3 (AI integration: human decisions on AI-assisted work)"],
    ["PAERA citations",         "None. This course is about working with an AI assistant, not about the reference architecture."],
    ["External-link list",      "Pages 3.4, 4.2 and 4.4, which carry the sources."]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard"),
  P("A public servant with the page on one half of the screen and an assistant on the other must be able to do the page's step on their own work. By the end of 4.4 they have a log they answer from, a page of faults with a line of their own, a handover note checked by a fresh chat, and a readiness statement."),

  H3("4.2 The videos"),
  P("V5 and V6 are each one person on camera, with three text-only slides cut in on the ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB. V6 also covers page 3.4 of Module 3. The parallel mistake in V5 is told by the speaker, not read from the record."),

  H3("4.3 Voice and tone"),
  P("As in Module 3. The record's codes, file names and the plugin's terms are never used on a page. The owner's rulings are described, not quoted."),

  H3("4.4 The record behind the examples"),
  P("Every Try it first is rewritten from the record of the registry prototype, frozen on 31 October 2026 in examples/plr/. The week's figures (23 closed, 13 at the first version, 10 second attempts, 4 withdrawn and run again) are those of the frozen record."),

  H3("4.5 The sidebar"),
  P("What automation adds sits at the end of 4.4's In the tool, and is linked from 3.3 and 4.1 on the GitBook pages. It names no product. When the learner edition of the plugin ships, the sidebar gains a With the kit line, and nothing else on a page changes (plan section 10)."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU."),

  H3("5.1 Three departures from the series rules"),
  P("As in Modules 1 to 3: a person on screen in V5 and V6; written pages covered by a video; on-camera cues in the script. The plan, section 7, gives the reason."),

  H3("5.2 The speakers' cases"),
  P("V5 and V6 each name the record's case with its date. Each speaker confirms it, or names their own, before the cut is decided (plan decision 4)."),

  H3("5.3 Named products in the setup"),
  P("Page 4.4 names the Claude desktop app and Desktop Commander as the recommended setup, with the browser in any assistant as the baseline. Install steps are not given on the page, because they date fast; each product's own instructions are linked, with the date they were checked, when the GitBook page is built. Whether ITU wants products named is a question for ITU."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the four pages and the two videos. Every source is public."),
  genericTable([1100, 8600], ["Page", "Sources referenced, with addresses"], [
    ["4.1", "Effective harnesses for long-running agents (Anthropic Engineering, November 2025), https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents."],
    ["4.2", "The Checklist Manifesto (Atul Gawande, Metropolitan Books, 2009), https://atulgawande.com/book/the-checklist-manifesto/."],
    ["4.3", "Effective harnesses for long-running agents, as in 4.1."],
    ["4.4", "How generative and agentic AI shift concern from technical debt to cognitive debt (Margaret-Anne Storey, 9 February 2026), https://margaretstorey.com/blog/2026/02/09/cognitive-debt/. AI Playbook for the UK Government (GOV.UK, 10 February 2025), https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government."],
    ["V5, V6", "None of their own; the descriptions point to the pages."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP0 Module 4 — Script Bundle v0.1",
  description: "Script bundle for KP0 Module 4 (Working with AI in Government): Orchestrate — running it for days.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP0 Module 4 Script Bundle v0.1 · 31 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP0_Module4_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});

