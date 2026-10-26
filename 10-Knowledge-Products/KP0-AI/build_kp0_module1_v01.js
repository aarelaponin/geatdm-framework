// Build KP0 Module 1 — Script Bundle v0.1
// Working with AI in Government · Module 1 — Chat: get good answers in one chat (Strategist register).
// v0.1 (26 Oct 2026): written on the KP0 plan, version 0.4 (22 October 2026), sections 4 and 7, Module 1 and video V1.
//   Built from the GEA space's pages "Working with AI" and "Prompting techniques" (which move into KP0, plan section 8)
//   and the five habits of "How to use the plays"; every public source cited is one those pages already cite, at the
//   date they give, or the AI Fluency course the layers note names.
// KP0 departs from the KP1-KP4 bundle shape in two ways the plan sets (section 7): every subtopic is a written page,
//   rendered by renderPage(), not a five-minute video; and the module has one video, V1, with a person on camera,
//   covering pages 1.1 to 1.4, rendered by renderVideo(). The speaker's own case is left as a marked story beat
//   (plan decision 4); the script around it is written in full (plan decision 5, the recommended option).
// Each tip's time is the run plus reading the result; it shows on the GitBook page's tip box.
// Every page has the concept, In the tool (shown in Claude, said as such), a worked example set in Progressa, an AI
//   usage tip in the four-part shape, and its sources. Sections 1 to 6 keep the KP4 shape.
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

// Persona for KP0 Module 1 (Strategist throughout, as the plan's module table sets it).
const PERSONA_S = "S (Strategist) — the public servant who commissions and accepts AI-assisted work and answers for it: a director, a head of unit, a technical secretary briefing the principal. No programming assumed";

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
function renderPage({ num, title, singleMessage, concept, inTool, example, aiTip, sources, persona = PERSONA_S }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([["Persona", persona], ["Form", "Written page; covered by the module's video, V1"]]));
  out.push(singleMessageBox(singleMessage));
  out.push(H3("The concept"));
  out.push(...content(concept));
  out.push(H3("In the tool"));
  out.push(...content(inTool));
  out.push(H3("Worked example — " + example.title));
  out.push(...content(example.body));
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
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
    children: [new TextRun({ text: "Module 1 — Chat: get good answers in one chat", font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",        "Script bundle for Module 1 of KP0: four written pages and one video"],
    ["Version",         "v0.1 — written on the KP0 plan, version 0.4, of 22 October 2026"],
    ["Date",            "26 October 2026"],
    ["Module persona",  PERSONA_S],
    ["Subtopics",       "Four written pages (1.1 – 1.4); the fourth is the module's Judgement page"],
    ["Video",           "One, V1 'The draft that looked right', about four minutes, a person on camera, covering pages 1.1 to 1.4"],
    ["Worked examples", "One for each page, set in Progressa: a fluent summary of a law it was never shown, a prompt before and after its safeguard line, a draft marked for what it rests on, and a request to match learners that never needed their names"],
    ["Self-check",      "Four questions drawn from the four single messages, in section 2.1"],
    ["Prepared by",     "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 1 of KP0 — Working with AI in Government. Module 1 teaches a public servant to get a good answer from an AI assistant in one chat, and to know what to do with it: why an assistant invents and why it agrees with you, the four-part prompt every AI usage tip in the series uses, how to read an output before using it, and what never goes into a chat and what stays yours. The register is plain English at about an eighth-grade level. Each page carries the concept, what to do in the tool, a worked example on Progressa, an AI usage tip with a copy-paste prompt, and its sources. The module's video carries the stories the pages cannot."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the four pages and the one video script of Module 1 of Knowledge Product 0 (Working with AI in Government), with the module's self-check, production notes and calibration items. It is the v0.1 working draft, written on the KP0 plan, version 0.4, whose section 4 fixes each page's concept, what it shows in the tool and what it is built from, and whose section 7 fixes the video."),
  P("KP0 comes before the four Knowledge Products. Every subtopic of KP1 to KP4 ends with an AI usage tip; KP0 is where a learner learns to run those tips, to set an assistant up for them, and to run bigger work the way KP4 asks. It has three layers, ordered by how much work is handed to the assistant: Chat, Prepare and Orchestrate, with Judgement closing every module. Module 1 is the Chat layer."),

  H3("1.2 How KP0 differs from KP1 to KP4"),
  P("In KP1 to KP4 every subtopic is a video of about five minutes. In KP0 every subtopic is a written page, and the pages carry the whole content. Each module has one video, a person on camera telling what only experience can bring: a case from the team's own work, a mistake and how it was found. A learner who never watches the video misses nothing that is taught, only the story. The three departures from the series rules this needs (people on screen, fewer videos than subtopics, on-camera cues) are calibration items for ITU, in section 5."),

  H3("1.3 Concept and tool"),
  P("Each page has two halves. The concept is tool-neutral: it works in any assistant, including the ones a ministry has already approved. The half headed In the tool says what to click, type or set, and is shown in Claude, said as such on the page. Where the same setting sits in other assistants is one comparison table on a KP0 reference page, carried in the Module 2 bundle, and linked from the pages that need it."),

  H3("1.4 The names used for Progressa"),
  genericTable([2200, 7500], ["Name", "What it is, and its part in Module 1"], [
    ["MoEYS", "Progressa's Ministry of Education, Youth and Skills. Its ICT Director and its data unit run three of the four worked examples."],
    ["PDGA", "The Progressa Digital Government Authority, a coordinating unit under the Ministry of ICT. Its analyst marks a draft in 1.3."],
    ["The Data Protection Act 2023", "Progressa's data-protection law: a legal basis is needed to share a minor's data, and parental consent for any non-statutory use. The assistant summarises it in 1.1 without having read it."],
    ["The three learner lists", "The school census, the examinations authority's candidate list and the social grant programme's register, which do not agree. They are the subject of 1.2 and 1.4."],
    ["PNEA", "The Progressa National Examinations Authority, which keeps the candidate list."]
  ]),
  P("Every institution, name, date and figure in the examples is invented for Progressa. The examples name posts, never persons."),

  H3("1.5 How this module carries the two arguments every Knowledge Product makes"),
  P("The two structural arguments of the series, that whole-of-government planning makes re-use possible and that an architecture gives the business side and IT one shared language, belong to the Knowledge Products KP0 serves, not to KP0 itself. Module 1 carries neither as an argument. It touches the second once, in 1.2: the four-part prompt is a shared language between the person who asks and the assistant that drafts, and a prompt written in it can be read and re-run by a colleague."),

  H3("1.6 How to read this document"),
  P("Section 2 gives Module 1 at a glance, with the module's self-check. Section 3 holds the four pages and then the script of the video: on the pages, each part is headed; in the video, shaded blue blocks are cut-in slides, the pink block is the speaker's own story, and plain paragraphs are said to camera. Section 4 collects the production notes. Section 5 records the open calibration items. Section 6 is the aggregate external-link list."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 1 at a glance"),
  P("Four written pages and one video of about four minutes. One Strategist persona throughout. A learner who reads the four pages and runs their four tips needs about two hours."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Form"], [
    ["1.1", "A drafting partner, not an oracle",
      "An assistant writes a wrong answer as fluently as a right one, and tends to agree with you, so a fluent draft is where your checking starts, not where it ends.", "Page"],
    ["1.2", "The four-part prompt",
      "Name the input, name the outputs, fix the format, and add one safeguard line for the way this prompt can mislead you.", "Page"],
    ["1.3", "Read the output before you use it",
      "Before you use a draft, find what it rests on: what the source states, what the assistant inferred, and what it should have asked you.", "Page"],
    ["1.4", "Judgement: what stays out of the chat, and what stays yours",
      "Nothing confidential goes into a chat, and the decision stays with the person whose name is on it.", "Page"],
    ["V1", "The draft that looked right",
      "A fluent draft is where checking starts; the safeguard line names how this one can fool you.", "Video, ~4 min"]
  ]),

  H3("2.1 The module's self-check"),
  P("Four questions, drawn from the single messages of the four pages, to be answered after reading them. Questions 1 and 3 are multiple choice. Questions 2 and 4 ask for a short answer, which is right if it makes the point of the model answer. Three or four right means the module's point has landed; below three, read again the page named beside each question you missed. The threshold is a proposal, to be tested with the first learners."),
  genericTable([600, 3900, 3700, 1500], ["#", "Question", "Model answer", "Drawn from"], [
    ["1", "An assistant gives you a clear, well-written summary of your country's data-protection law, with section numbers. You did not paste the law. What do you do? (a) Use it: it is clear and specific. (b) Ask the same assistant whether it is sure. (c) Treat every section number and obligation as a claim to check against the law itself before it goes anywhere. (d) Ask it to shorten the summary.",
      "(c). Fluency is not evidence: an assistant writes an invented section number in the same tone as a real one. (b) does not help, because an assistant tends to agree with the framing of your question, including 'are you sure?'.",
      "1.1 A drafting partner, not an oracle"],
    ["2", "A colleague's prompt reads: 'Write a briefing on why our learner data is fragmented.' Name the four parts it lacks, and write the safeguard line you would add.",
      "It lacks a named input (what is pasted), named outputs, a fixed format, and a safeguard line. A safeguard line for it: 'Name a cause only if the pasted documents state it; list any cause you inferred separately, as a question.' A generic line such as 'AI can make mistakes' does not count.",
      "1.2 The four-part prompt"],
    ["3", "A draft note from an assistant has no open questions at all, on a subject your unit has never settled. What does that most likely mean? (a) The subject is simpler than you thought. (b) The assistant answered the hard questions itself, so the draft needs a second reading. (c) The prompt was well written. (d) The source documents were complete.",
      "(b). A draft on an unsettled subject with no open questions usually means the gaps were filled with plausible answers. Ask it to mark what it inferred and what it should have asked.",
      "1.3 Read the output before you use it"],
    ["4", "Your unit wants an assistant to find learners who appear in all three learner lists. What may go into the chat, and who answers for the result?",
      "No names, numbers or records of real learners: only the column headings and a few invented rows, so the assistant can propose a matching method. The matching itself runs inside the ministry's own systems, and the head of the data unit, not the assistant, answers for the method and the result.",
      "1.4 Judgement: what stays out of the chat, and what stays yours"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE PAGES AND THE VIDEO
// ============================================================================
body.push(H1("3. The pages and the video"));

// ---------- 1.1 ----------
body.push(...renderPage({
  num: "3.1 Subtopic 1.1",
  title: "A drafting partner, not an oracle",
  singleMessage: "An assistant writes a wrong answer as fluently as a right one, and tends to agree with you, so a fluent draft is where your checking starts, not where it ends.",
  concept: [
    "An AI assistant writes a strong first draft in minutes: a briefing note, a terms of reference, a comparison of options. It does not write a finding you can trust without checking. A wrong section number, an invented figure and a claim with no basis come out in exactly the same confident tone as a correct one. So the draft is where your work starts, not where it ends.",
    "This is not a fault that the next, better model will remove. Assistants are trained and scored in ways that reward a confident guess over the words 'I do not know'. A system that always answers scores better on the tests the industry uses than one that admits a gap. One vendor, OpenAI, set this out in 2025, from the inside. The lesson for a public servant is one sentence: fluency is not evidence. A smooth paragraph and a correct paragraph look the same from the outside.",
    "An assistant also tends to accept the framing of your question. Ask why your data problem is severe, and you get reasons it is severe. Ask why it is minor, and you get reasons it is minor. OpenAI described shipping a model that flattered its users this way and having to withdraw it. The same habit makes 'are you sure?' a weak check: the assistant tends to agree that it is sure, or to agree that it was wrong, whichever your question suggests.",
    "What this costs when nobody checks is on public record. A database kept since 2023 lists well over a thousand court decisions worldwide in which a lawyer filed an invented citation or a made-up quotation produced by an assistant. These are professionals with a duty of care, filing documents they did not check. A government programme has the same risk: a country that did not do what the briefing says, a clause of a standard that does not exist, a figure with no source.",
    "So use the assistant as a drafting partner. It is fast, tireless and good with structure. Give it your material, take its draft, and then check every claim that matters against a named source before the draft leaves your desk."
  ],
  inTool: [
    "Shown in Claude. Two settings change how far you can trust a draft, and both are next to the box where you type.",
    "The model. Assistants offer more than one model. A larger model reasons more carefully and is slower; a smaller one is quicker and good for short, routine drafting. Choose the larger one for analysis, a comparison or anything with figures. Choosing a larger model makes errors rarer. It does not remove them, and it does not change what you must check.",
    "Search and citations. With web search turned on, the assistant looks up current pages and marks each claim it took from one with a citation you can open. With search off, it answers from what it learned in training, which stops at a date and carries no sources. Turn search on for any question about what a country, a body or a standard did or says. Then open the citations: a citation proves only that a page exists, not that it says what the draft claims.",
    "Where the same two settings sit in ChatGPT, Gemini and Microsoft 365 Copilot is in the table on the reference page of this course, Assistants compared."
  ],
  example: {
    title: "A law it was never shown",
    body: [
      "The ICT Director of MoEYS, Progressa's ministry of education, asked an assistant, with search off: 'Summarise what Progressa's Data Protection Act 2023 requires before we share learner data with another ministry.' The answer was clear and well set out. It said that section 14(3) of the Act requires a data-sharing agreement approved by the Data Protection Commission, that a breach must be reported within 72 hours, and that learners over 16 may consent for themselves.",
      "None of the three came from the Act. The Director had not pasted it, and the assistant could not have read it. The Act, when the Director opened it, says two things on the point: a legal basis is needed to share a minor's data, and parental consent is needed for any use the law does not require. There is no section 14(3) on data sharing, and the Act sets no breach deadline.",
      "The second run pasted the Act's text and asked for the obligations, each with the words of the Act quoted beside it. The answer was shorter, less impressive and right. That is the pattern to expect: the first draft sounded more expert because it was not limited by a source."
    ]
  },
  aiTip: {
    title: "List the claims in a draft that need a source",
    time: "~10 min",
    problem: "A draft from an assistant reads well, and the claims in it that need checking are hidden among the sentences that do not. Before the draft goes into a briefing, someone has to find every figure, date, name, legal reference and citation, and say how each will be checked.",
    prompt: "Below is a draft written with an AI assistant, which I intend to use in [a briefing note, a report, a letter] for [the reader] [paste the draft]. List every claim in it that a reader could check: figures, dates, names of bodies, legal or policy references, quotations, and statements about what a country, body or standard did or requires. For each claim produce one row with: (a) the claim, quoted word for word; (b) its kind: figure, date, name, legal reference, quotation or statement of fact; (c) the source the draft gives for it, or 'none'; (d) where I could check it: the document, body or system that would hold the answer; (e) what goes wrong if it is false, in one line. Do not judge whether any claim is true, and do not add claims the draft does not make. Output: a table with one row per claim, then the number of claims with no source.",
    io: "Input: the draft, as written. Output: a table of the claims in the draft that need a source, with where to check each one and what goes wrong if it is false.",
    safeguard: "The table lists claims to check; it does not check them, and it can miss a claim. Read the draft yourself as well, and check each row against the source it names, never by asking an assistant whether the claim is true: it tends to agree with the way you ask."
  },
  sources: [
    ["Why language models hallucinate", "OpenAI · September 2025", "Why an assistant guesses rather than admits a gap; fluency is not evidence"],
    ["Expanding on what we missed with sycophancy", "OpenAI · May 2025", "Why an assistant agrees with the framing of your question"],
    ["AI Hallucination Cases", "Damien Charlotin · 2023 onwards, updated daily", "What unchecked citations have cost in court"]
  ]
}));

// ---------- 1.2 ----------
body.push(...renderPage({
  num: "3.2 Subtopic 1.2",
  title: "The four-part prompt",
  singleMessage: "Name the input, name the outputs, fix the format, and add one safeguard line for the way this prompt can mislead you.",
  concept: [
    "Every AI usage tip in this series has the same shape, and you can use it for any prompt of your own. It has four parts.",
    "First, name the input you are pasting: 'Below is our school census note.' The assistant should know what kind of thing it is looking at, and that it must work from it. Second, break the task into named outputs: 'List the causes, rank them, and name the body that owns each.' Not 'help me with our data'. Third, fix the exact output format: 'A table with these four columns, then three bullets.' A format you can paste into your own document saves you an hour of reshaping. Fourth, add a safeguard line for this prompt's own risk.",
    "The safeguard line is the part that matters most in government, and it is the part the vendors' own guides leave out. It is not 'AI can make mistakes'; that helps nobody. It names the way this prompt can mislead you. A prompt that asks for causes can invent causes, so its line is 'name a cause only if the document states it'. A prompt that asks for country examples can invent countries, so its line is 'drop any example whose source does not say what you claim'.",
    "Two more habits beat any clever wording. Context and one example beat cleverness: an assistant given your real material and one sample of the result you want does better than one given a perfectly worded request and nothing else. And iterate rather than restart: when the result is close but wrong, say what is wrong and run it again in the same chat, so the assistant keeps what it got right.",
    "Google, OpenAI and Anthropic each publish a guide to prompting. They use different words for the same structure: Google's persona, task, context and format; OpenAI's 'be specific' and 'iterate'; Anthropic's clarity, examples and structure. A prompt in the four-part shape is also a prompt a colleague can read, check and run again, which a vague one is not."
  ],
  inTool: [
    "Shown in Claude, and the same in any assistant.",
    "Writing it. Type the four parts in order, in one message. Paste the input after the line that names it, and put the safeguard line last, where it is read closest to the answer.",
    "Running it again. To change the prompt, edit your own message and send it again: the assistant answers the new version from the start. To correct the answer, reply in the same chat with what is wrong ('row 3 has no source; drop it and re-rank'): the assistant keeps the rest. Edit when the request was wrong; reply when the answer was.",
    "The rewrite play. When your own prompt gives vague results, paste it into the tip below. It returns your prompt in the four-part shape, and says what was weak in the first one."
  ],
  example: {
    title: "One prompt, before and after its safeguard line",
    body: [
      "The data unit of MoEYS needed a note for the Permanent Secretary on why Progressa's three learner lists do not agree. The first prompt was: 'Write a briefing on why our learner data is fragmented.' The answer was a page of general causes found in many countries: weak governance, legacy systems, lack of standards. Nothing in it was about Progressa, and nothing in it could be checked.",
      "The second prompt used the four parts: 'Below are three notes: the school census note, the examinations authority's note on its candidate list, and the social grant programme's note on its register [pasted]. (1) List each reason the notes give for a learner appearing differently in two lists. (2) Name the body that controls each. (3) Output a table with the columns reason, the note that states it, quoted, and the body; then three bullets for the Permanent Secretary. (4) Name a reason only if a note states it; list any reason you inferred separately, as a question for the data unit.'",
      "The answer had six reasons, each with a quotation. Two inferred reasons came out separately as questions, as the safeguard line asked: whether head teachers re-key names by hand, and whether the examinations authority keeps a learner's former name. Without that line, both would have stood in the table as facts."
    ]
  },
  aiTip: {
    title: "Rewrite a vague prompt into the four parts",
    time: "~5–10 min",
    problem: "A prompt that gives vague or unreliable results is usually missing one of the four parts, most often the safeguard line. Rewriting it by hand takes practice; this tip does it, and shows what was weak.",
    prompt: "Below is a prompt I use for work in [the ministry or agency], whose results are too vague or unreliable [paste the prompt]. Rewrite it in four parts: (1) a clear statement of the input I will paste; (2) the task broken into named outputs; (3) an exact output format, such as a table with named columns and a short summary; (4) one safeguard line that names the specific way this prompt could mislead me, not a general line such as 'AI can make mistakes'. Keep my task: do not add tasks I did not ask for. Output: the rewritten prompt, then three bullets on what was weak in the original and what you changed.",
    io: "Input: your own prompt, as you use it. Output: the prompt rewritten in the four parts, with a note on what was weak in the original.",
    safeguard: "The assistant writes the safeguard line from what it guesses your risk is. Read that line before you use the prompt, and replace it if it names a risk your task does not have, or misses the one you worry about."
  },
  sources: [
    ["Prompting guide 101", "Google · October 2024", "Persona, task, context and format"],
    ["Prompt engineering best practices for ChatGPT", "OpenAI · living page", "Be specific; iterate"],
    ["Prompt engineering overview", "Anthropic · living page", "Clarity, examples, structure, roles and chaining"],
    ["AI Fluency: Framework and Foundations", "Anthropic Academy · free course", "Description: describing goals so the output is useful"]
  ]
}));

// ---------- 1.3 ----------
body.push(...renderPage({
  num: "3.3 Subtopic 1.3",
  title: "Read the output before you use it",
  singleMessage: "Before you use a draft, find what it rests on: what the source states, what the assistant inferred, and what it should have asked you.",
  concept: [
    "A draft from an assistant mixes three kinds of sentence, and they look the same. Some state what your source says. Some are inferred: the assistant drew a conclusion the source does not state. And some come from nowhere in particular: they are plausible, they fill a gap, and nobody gave them. Reading the output means telling these apart before the draft is used.",
    "Ask for the open questions. A good draft on a hard subject says what it could not settle: a figure it did not have, a decision nobody has taken. Ask the assistant to list them at the end of every draft. And be wary of a draft with no open questions at all. On a subject your unit has never settled, that is a warning, not a result. It usually means the assistant answered the hard questions itself.",
    "Cite or discard. Any claim about the outside world, such as what a country did or what a standard requires, needs a source you can open. Assistants invent citations as fluently as they write prose. Open the source. If it does not say what the draft claims, discard the claim, not only the citation: a claim whose source has gone is a guess again.",
    "Reading is a skill, and the AI Fluency course of Anthropic gives it a name: discernment, judging how useful an output is. It is the step most often skipped, because the draft already looks finished. A minute spent reading against the source is cheaper than a correction sent after the briefing."
  ],
  inTool: [
    "Shown in Claude.",
    "Opening the sources. When search is on, each claim taken from a web page carries a citation. Click it, and find the sentence in the page that supports the claim. A page on the right subject that does not say the thing is not a source for it.",
    "Asking what it inferred. Add one line to the end of a prompt, or send it after the draft: 'Mark each sentence as stated in the source, inferred, or not in the source, and list the questions you should have asked me.' Then read the sentences marked inferred and not in the source first.",
    "Using a second chat. To have a draft checked, open a new chat and paste the draft and its source there. A chat that did not write the draft has no draft of its own to defend."
  ],
  example: {
    title: "A gap note, marked",
    body: [
      "An analyst of PDGA, Progressa's digital government authority, asked an assistant to read the draft Digital Transformation Roadmap 2024–2030 and write a one-page note on its gaps for data exchange. The note was twelve sentences long and had no open questions.",
      "The analyst sent the marking line. Eight sentences came back as stated, each with a quotation. Three came back as inferred, among them 'the Roadmap assumes every ministry will join Linkup by 2027', which the Roadmap does not say. One was not in the source: 'the 2021 e-Government Interoperability Framework requires all exchanges to use X-Road.' The analyst opened the 2021 framework. It names message formats and a list of approved standards. It does not name X-Road.",
      "The analyst discarded that sentence, turned the inferred 2027 date into a question for the Roadmap's owner, and asked the assistant again for the open questions. It listed four, among them who decides which ministries join Linkup first. The final note was ten sentences and four questions, and every sentence in it could be traced."
    ]
  },
  aiTip: {
    title: "Mark what a draft rests on",
    time: "~15 min",
    problem: "A draft has been written from a source, but nobody can tell which of its sentences the source supports, which the assistant inferred, and which came from nowhere. Until that is known, the draft cannot be signed or sent.",
    prompt: "Below is a source document [paste the source], and below that a draft written from it [paste the draft]. For each sentence of the draft, produce one row with: (a) the sentence, word for word; (b) its standing: 'stated' if the source says it, 'inferred' if it is a conclusion the source does not state, or 'not in the source'; (c) for 'stated', the words of the source that say it, quoted exactly; for 'inferred', the passage it was inferred from. Then list the questions the draft should have raised and did not: the points on which the source is silent or unclear, and the decision each one needs. Do not correct the draft. Output: the table, then the list of questions, then the number of sentences of each standing.",
    io: "Input: the source document and the draft written from it. Output: a table of the draft's sentences, each marked stated, inferred or not in the source, with the questions the draft should have raised.",
    safeguard: "An assistant marking a draft tends to be generous to it, and can quote words the source does not hold. Find each quotation in the source yourself, with the search of your document reader, before you rely on a sentence marked 'stated'. Run the tip in a new chat, not the one that wrote the draft."
  },
  sources: [
    ["AI Fluency: Framework and Foundations", "Anthropic Academy · free course", "Discernment: judging how useful an output is"],
    ["AI Hallucination Cases", "Damien Charlotin · 2023 onwards, updated daily", "Why every citation is opened"]
  ]
}));

// ---------- 1.4 ----------
body.push(...renderPage({
  num: "3.4 Subtopic 1.4",
  title: "Judgement: what stays out of the chat, and what stays yours",
  singleMessage: "Nothing confidential goes into a chat, and the decision stays with the person whose name is on it.",
  concept: [
    "Four safeguards make every AI usage tip in this series safe to run. They are not advice. They are the conditions.",
    "One: verify against a named source. Every fact an assistant states is a claim until you check it against a document, a system or a named person. Two: cite or discard. A claim about the outside world needs a source you can open, and a claim whose source does not say it is dropped. Three: never paste confidential or personal data. No records of citizens or learners, no security settings, no unpublished cabinet papers, nothing your data-protection law covers. Treat the prompt box as a public place. The tips never need such data: run them with placeholders such as 'a learner', 'the ministry', 'country X'. Four: keep the decision human. The assistant prepares; a person decides. When something drafted with an assistant turns out wrong, the answer is never 'the AI said so'. It is the name of the person who signed.",
    "Some work should not go to an assistant at all. A decision about one person, such as an appeal, a grant or a sanction, is made by an official who can be asked why. Work you cannot check is work you cannot accept: if nobody in the unit can tell whether the answer is right, the assistant's answer is not an answer. And where the text itself is the authority, such as the law, the contract or the minutes, read the text, not a summary of it.",
    "You are not the first public servant to use these tools on official work, and the expectations are written down. The UK government's AI Playbook of February 2025 sets ten principles for civil servants, among them: know the tools' limits, use them lawfully and responsibly, and know who is responsible. The African Union's Continental AI Strategy of 2024 sets the regional frame for responsible use. Read your own government's rules first: they decide which assistants you may use, and for what."
  ],
  inTool: [
    "Shown in Claude, and the same in any assistant.",
    "De-identify before you send. If your material holds anything sensitive, strip it first, with the tip below. Run that one step on an assistant that runs on your own computer or your ministry's own servers, never on a public one, or the stripping defeats itself. With no such assistant, do it by hand: the table the tip asks for, of what was removed, its kind and the placeholder used, is a ten-minute checklist a person can apply before pasting.",
    "Use the approved tool. A ministry that has approved an assistant has usually bought an account in which chats are not used to train the vendor's models and are kept under a contract. Use that account for official work, not a personal one. In Claude, the privacy settings say whether chats may be used to improve the models; in an organisation's account, an administrator sets this for everyone.",
    "Where the same settings sit in other assistants is in the table on the reference page of this course, Assistants compared."
  ],
  example: {
    title: "Matching learners without their names",
    body: [
      "The data unit of MoEYS wanted to know how many learners appear in all three lists: the school census, the examinations authority's candidate list and the social grant programme's register. An officer prepared to paste two hundred rows from each list into a public assistant and ask it to match them. The rows held names, dates of birth and the schools of children.",
      "The head of the unit stopped it, on the third safeguard: these are records of minors, and Progressa's Data Protection Act 2023 needs a legal basis to share them. The question did not need the data anyway. The officer pasted the column headings of each list and five invented rows with the same kinds of difference the real lists have: a name spelt two ways, a date of birth with day and month swapped, a learner who changed school.",
      "The assistant proposed a matching method: which fields to compare, how to treat the spelling and the swapped dates, and which matches a person should review. The data unit ran the method inside the ministry, on its own systems. The head of the unit approved the method, and the report to the Permanent Secretary carried the unit's name, not the assistant's."
    ]
  },
  aiTip: {
    title: "De-identify a prompt before you send it",
    time: "~10 min",
    problem: "A prompt about real work often carries names, records or unpublished material that must not reach a public assistant. Stripping it by eye misses things, and a prompt stripped too far no longer works.",
    prompt: "Below is a prompt I am about to send to a public AI assistant, with the material I would paste into it [paste the prompt and the material]. Rewrite it so that any personal data, record of a citizen or learner, security setting, and unpublished or confidential government material is replaced with a neutral placeholder, such as 'a learner', 'the ministry', 'country X' or 'the registry', while keeping enough of the structure that the task still works. Keep the kinds of data and the kinds of difference between records, so the task can still be done on invented rows. Then list everything you replaced. Output: the de-identified prompt, then a table with the columns removed item, kind, and placeholder used.",
    io: "Input: the prompt and the material you would paste into it. Output: the de-identified prompt, with a table of what was removed, its kind and the placeholder used.",
    safeguard: "Run this tip only on an assistant that runs on your own computer or your ministry's servers, never on a public one: sending the material to be stripped is the very thing it prevents. With no such assistant, apply the table by hand."
  },
  sources: [
    ["AI Playbook for the UK Government", "GOV.UK · 10 February 2025", "Ten principles for civil servants: limits, lawful use, accountability"],
    ["Continental Artificial Intelligence Strategy", "African Union · August 2024", "The regional frame for responsible and equitable use"],
    ["Governing with Artificial Intelligence", "OECD · 18 September 2025", "What governments do with these tools, and the oversight they set"]
  ]
}));

// ---------- V1 ----------
body.push(...renderVideo({
  id: "3.5 Video V1",
  title: "The draft that looked right",
  covers: "1.1 to 1.4",
  runtime: "~4 min",
  words: 470,
  speaker: "Aare",
  singleMessage: "A fluent draft is where checking starts; the safeguard line names how this one can fool you.",
  scriptBeats: [
    { cue: "Opening: the speaker on camera, at a desk or a plain wall. No title slide is cut in; the title is in the lower third: 'The draft that looked right'." },
    { text: "The most dangerous thing an AI assistant has ever given me was not a wrong answer. It was a wrong answer that read better than my own work. I want to tell you about one." },
    { story: "The speaker's own case, 60 to 90 seconds, about 150 to 200 words. It must show four things: (1) a real draft, from the team's work, that was fluent and wrong; (2) what was wrong in it, named exactly: a figure, a source, a country, a clause; (3) how it was caught, and by whom; (4) what it would have cost had it gone out. The test runs on The Gambia, August 2026, are one place to find it; the team's project folders are another. Give the date. Name posts, not persons. If the speaker cannot name a case with a date, this video becomes a page (plan decision 4)." },
    { cue: "Slide cut in — Title: 'Fluency is not evidence'. Body, two text rows: 'A wrong answer is written as fluently as a right one.' 'An assistant tends to agree with the way you ask.'" },
    { text: "That draft was not unlucky. Assistants are trained in a way that rewards a confident guess over the words 'I do not know'. And they lean towards the answer your question suggests. So a smooth paragraph and a correct paragraph look exactly the same. The only difference is whether someone checked it against a source." },
    { cue: "Slide cut in — Title: 'The four-part prompt'. Body, four numbered text rows: '1. Name the input.' '2. Name the outputs.' '3. Fix the format.' '4. Add the safeguard line for this prompt's risk.'" },
    { text: "What would have caught it earlier is one line in the prompt. Every AI tip in these courses ends with what we call a safeguard line. Not 'AI can make mistakes'. A line that names how this prompt can fool you. For our draft, it would have been: name a figure only if the pasted document states it, and list everything else as a question. The assistant would have told us what it did not know, instead of filling the gap." },
    { cue: "Back to the speaker on camera." },
    { text: "So when a draft comes back, I now read it in a fixed order. First, the questions it should have asked me. If there are none, on a subject we never settled, I read it twice. Then every figure, date and reference, against the source it names. A citation proves that a page exists. It does not prove that the page says what the draft claims." },
    { text: "And two things never go into the chat. Records of real people, because the prompt box is a public place. And the decision. The assistant drafted that text. The person who would have signed it was me." },
    { cue: "Slide cut in — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A fluent draft is where checking starts; the safeguard line names how this one can fool you.'" },
    { text: "A fluent draft is where your checking starts. Write the line that names how it can fool you." }
  ],
  slideSpecRows: [
    ["1", "Two text rows: a wrong answer is as fluent as a right one; it agrees with the way you ask.",
      "Cut in over the voice-over that follows the story. ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB."],
    ["2", "Four numbered text rows: the four parts of a prompt.",
      "The same wording as page 1.2. Text-only."],
    ["3", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The single message, word for word. No practice box: the pages carry the tips. No sources slide: the pages carry the sources."]
  ],
  metadataRows: [
    ["Working title",           "The draft that looked right"],
    ["YouTube-optimised title", "The AI draft that looked right: how to catch a fluent wrong answer"],
    ["Description (60 words)",  "An AI assistant writes a wrong answer as fluently as a right one, and tends to agree with the way you ask. A practitioner tells the story of a draft that read well and was wrong, how it was caught, and the one safeguard line in the prompt that would have caught it sooner. For public servants who use AI on official work."],
    ["Tags",                    "AI in government, generative AI, prompting, hallucination, public sector, civil service, responsible AI, AI literacy"],
    ["Playlist (YouTube)",      "Working with AI in Government"],
    ["ToR §4 coverage",         "§4.3 (AI integration: the competence every AI usage tip of the series assumes)"],
    ["PAERA citations",         "None. This course is about working with an AI assistant, not about the reference architecture."],
    ["External-link list",      "The four pages of Module 1, which carry the sources: Why language models hallucinate (OpenAI, 2025); Expanding on what we missed with sycophancy (OpenAI, 2025)."]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard"),
  P("The bar for each page is the split-screen test of the series, applied to reading: a public servant with the page on one half of the screen and an assistant on the other must be able to run the page's AI usage tip on their own work and judge its result. The bar for the video is that it carries something no page carries: the speaker's own case."),

  H3("4.2 The video"),
  P("V1 is one person on camera, with three text-only slides cut in on the ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB. The speaker's name and role may appear in the lower third. The story beat is the speaker's; the rest of the script may be said in the speaker's own words, provided the single message and the four parts of the prompt are said as written. It is recorded by the camera route of the series (the route of the four Knowledge Product introductions), not by the narration route."),

  H3("4.3 Voice and tone"),
  P("Direct address ('your draft', 'your unit'). Plain language at about an eighth-grade English level. Module 1 is written for the Strategist: the listener commissions and accepts work done with an assistant and answers for it, and does not need to write code or run a command."),

  H3("4.4 External links"),
  P("The sources of each page are listed at its foot, with publisher and date, and are linked on the written page. The video's description points to the pages, which carry the links. The aggregate list, with addresses, is in section 6."),

  H3("4.5 Concept and tool"),
  P("Each page's In the tool is shown in Claude and says so. Settings are named by what they do, not by the words of a menu, because menus change. The comparison table of where the same settings sit in ChatGPT, Gemini and Microsoft 365 Copilot is carried in the Module 2 bundle, section 3.6."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU."),

  H3("5.1 Three departures from the series rules"),
  P("(1) A person is on screen in V1, where the series rule is no individuals on screen; the four Knowledge Product introductions are the one exception so far. (2) The module's four subtopics are written pages, and one video covers them all, where KP1 to KP4 have one video of about five minutes per subtopic. (3) The video script carries on-camera cues. The plan, section 7, gives the reason: a video is made only where the speaker has something a page cannot carry."),

  H3("5.2 The speaker's case"),
  P("V1's story beat is left to the speaker, who is asked to name a real case, with a date, before the cut is decided (plan decision 4). If no case can be named, V1 becomes a page and Module 1 has no video."),

  H3("5.3 Vendor sources"),
  P("Pages 1.1 and 1.2 cite vendors (OpenAI, Google, Anthropic) on how their own tools behave. They are cited because they are the primary account; each is tagged as a vendor source on the written page. Whether ITU wants a non-vendor source beside each is a question for ITU."),

  H3("5.4 The tool shown"),
  P("The half of each page headed In the tool is shown in Claude. A ministry that has approved another assistant follows the concept and uses the comparison table. Whether ITU wants a second assistant shown in full is a question for ITU."),

  H3("5.5 Editorial tone calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'The most dangerous thing an AI assistant has ever given me was not a wrong answer' (V1); 'Treat the prompt box as a public place' (1.4); 'the answer is never \"the AI said so\"' (1.4)."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the four pages and the video. Every source is public."),
  genericTable([1100, 8600], ["Page", "Sources referenced, with addresses"], [
    ["1.1", "Why language models hallucinate (OpenAI, September 2025), https://openai.com/index/why-language-models-hallucinate/. Expanding on what we missed with sycophancy (OpenAI, May 2025), https://openai.com/index/expanding-on-sycophancy/. AI Hallucination Cases (Damien Charlotin, 2023 onwards), https://www.damiencharlotin.com/hallucinations/."],
    ["1.2", "Prompting guide 101 (Google, October 2024), https://services.google.com/fh/files/misc/gemini_for_workspace_prompt_guide_october_2024_digital_final.pdf. Prompt engineering best practices for ChatGPT (OpenAI), https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt. Prompt engineering overview (Anthropic), https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview. AI Fluency: Framework and Foundations (Anthropic Academy), https://academy.claude.com/courses/ai-fluency-framework-foundations."],
    ["1.3", "AI Fluency: Framework and Foundations, as above. AI Hallucination Cases, as above."],
    ["1.4", "AI Playbook for the UK Government (GOV.UK, 10 February 2025), https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government. Continental Artificial Intelligence Strategy (African Union, August 2024), https://au.int/en/documents/20240809/continental-artificial-intelligence-strategy. Governing with Artificial Intelligence (OECD, 18 September 2025), https://www.oecd.org/en/publications/2025/06/governing-with-artificial-intelligence_398fa287.html."],
    ["V1", "None of its own; the description points to the pages."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP0 Module 1 — Script Bundle v0.1",
  description: "Script bundle for KP0 Module 1 (Working with AI in Government): Chat — get good answers in one chat.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP0 Module 1 Script Bundle v0.1 · 26 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP0_Module1_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
