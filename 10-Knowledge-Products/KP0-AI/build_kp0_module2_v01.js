// Build KP0 Module 2 — Script Bundle v0.1
// Working with AI in Government · Module 2 — Prepare: set up what the AI knows and can do (Strategist register).
// v0.1 (26 Oct 2026): written on the KP0 plan, version 0.4 (22 October 2026), sections 4 and 7, Module 2 and video V2.
//   Built from the GEA space's pages "Play 0", "Prompting techniques" (its section on skills) and "The ea-plays kit",
//   and from the layers note's reading list (context engineering, Skills explained, the Agent Skills standard, Storey
//   and Fowler on cognitive and intent debt).
// Same shape as Module 1: four written pages (renderPage), one video with a person on camera (renderVideo), the
//   speaker's own case left as a marked story beat. Other assistants are named, not mapped (the author's
//   decision of 26 October 2026: a table of where each setting sits would go out of date within months).
// Humanizer pass (26 Oct 2026): the page prose rewritten to drop AI writing patterns; facts, prompts and titles unchanged.
// Review pass (26 Oct 2026, KP0_GitBook_Review_2026-10-26.md): 2.3's install steps corrected (a ZIP, under Customize,
//   Skills); prompt injection and oversharing added to 2.3 and 2.4; an independent source on long context for 2.1;
//   help links for four assistants; example runs, Progressa practice material with answer keys, question 5 and Go
//   further. Progressa aligned with the courses' Progressa page: the Progressa Learner Registry (PLR), MoEYS's
//   planning unit, the draft Roadmap as the plan quoted as if in force.
// Consistency pass (26 Oct 2026, KP0_GitBook_Review_2026-10-26b_consistency.md): 'connector' throughout, 2.3's title
//   included; 'section 7', not '§7'; 'this knowledge base' for the site; practice material for 2.2 and 2.3; 2.2 gains
//   a government source; the jargon of the fixture ('high-signal', 'non-statutory', 'operating-model') replaced.
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

// Persona for KP0 Module 2 (Strategist throughout, as the plan's module table sets it).
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
// Optional parts (review of 26 Oct 2026): cite, a phrase in the prose and the source it names, linked on the
// GitBook page (the Word document keeps plain text); where, the help links for the setting in each assistant; example.run, the
// prompt and part of its output; aiTip.practice, Progressa material to practise on, with its answer key.
function renderPage({ num, title, singleMessage, concept, inTool, where, example, aiTip, sources, persona = PERSONA_S }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([["Persona", persona], ["Form", "Written page; covered by the module's video, V2"]]));
  out.push(singleMessageBox(singleMessage));
  out.push(H3("The concept"));
  out.push(...content(concept));
  out.push(H3("In the tool"));
  out.push(...content(inTool));
  if (where) out.push(P("Where this is in each assistant: " + where.map(([t, u]) => t + " (" + u + ")").join(" · ")));
  out.push(H3("Worked example — " + example.title));
  out.push(...content(example.body));
  if (example.run) {
    out.push(P("The prompt:", { run: { bold: true } }));
    out.push(new Paragraph({ children: [new TextRun({ text: example.run.prompt, font: "Courier New", size: 18 })] }));
    out.push(P("Part of the output (written for this page, not a recorded run):", { run: { bold: true } }));
    out.push(...content(example.run.output));
  }
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
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
    children: [new TextRun({ text: "Module 2 — Prepare: set up what the AI knows and can do", font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",        "Script bundle for Module 2 of KP0: four written pages and one video"],
    ["Version",         "v0.1 — written on the KP0 plan, version 0.4, of 22 October 2026"],
    ["Date",            "26 October 2026"],
    ["Module persona",  PERSONA_S],
    ["Subtopics",       "Four written pages (2.1 – 2.4); the fourth is the module's Judgement page"],
    ["Video",           "One, V2 'Context once, then skills', about four minutes, a person on camera, covering pages 2.1 to 2.4"],
    ["Worked examples", "One for each page, set in Progressa: Progressa's country context pack trimmed for one task, MoEYS's project brief, a skill installed and the course's knowledge base connected, and a project setup audited"],
    ["Self-check",      "Five questions drawn from the four pages, in section 2.1"],
    ["Prepared by",     "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 2 of KP0 — Working with AI in Government. Module 1 taught one good chat. Module 2 teaches the setup that makes every later chat better: a context written once and reused, a project that carries a team's standing instructions and files, skills that package a procedure and connectors that reach a source, and what must never go into any of them. The register is plain English at about an eighth-grade level. Each page carries the concept, what to do in the tool, a worked example on Progressa, an AI usage tip with a copy-paste prompt, and its sources."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the four pages and the one video script of Module 2 of Knowledge Product 0 (Working with AI in Government), with the module's self-check, production notes and calibration items. It is the v0.1 working draft, written on the KP0 plan, version 0.4, sections 4 and 7."),
  P("Module 2 is the Prepare layer. Where Module 1 is about what a person types into one chat, Module 2 is about what the assistant already knows and can do before the person types anything. The principle is the one context engineering names: give the assistant the smallest set of information that makes the result you want most likely."),

  H3("1.2 How KP0 differs from KP1 to KP4"),
  P("As in Module 1, every subtopic is a written page, and one video with a person on camera covers the module. The three departures from the series rules are calibration items, in section 5."),

  H3("1.3 The names used for Progressa"),
  genericTable([2200, 7500], ["Name", "What it is, and its part in Module 2"], [
    ["The country context pack (A0)", "The seven dated, sourced sections that describe Progressa, written once with the research prompts of Play 0 and pasted into any AI usage tip. It is the subject of 2.1."],
    ["MoEYS", "Progressa's Ministry of Education, Youth and Skills. Its planning unit's project for the Progressa Learner Registry (PLR) is the setting of 2.2 and 2.4."],
    ["The Progressa Learner Registry (PLR)", "The single list of learners the Education Sector Plan 2023–2028 calls for; planned, not started."],
    ["PDGA", "The Progressa Digital Government Authority. Its architecture unit installs a skill and connects the course's knowledge base in 2.3."],
    ["The Data Protection Act 2023", "Progressa's data-protection law, which 2.4's audit checks the project against."]
  ]),
  P("Every institution, name, date and figure in the examples is invented for Progressa. The examples name posts, never persons."),

  H3("1.4 How this module carries the two arguments every Knowledge Product makes"),
  P("Module 2 carries the first argument of the series in small: a context pack written once and re-used by every later task is the same idea as a building block planned once and re-used by every programme, and 2.1 says so in one sentence. The second argument, a shared language between the business side and IT, is not argued in Module 2."),

  H3("1.5 How to read this document"),
  P("Section 2 gives Module 2 at a glance, with the module's self-check. Section 3 holds the four pages, and the script of the video. Section 4 collects the production notes, section 5 the open calibration items, and section 6 the aggregate external-link list."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 2 at a glance"),
  P("Four written pages and one video of about four minutes. One Strategist persona throughout. A learner who reads the four pages and runs their four tips needs about two and a half hours, most of it spent building the context pack."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Form"], [
    ["2.1", "Build the context once",
      "Write down once, with dates and sources, what every task needs to know about your country and your unit, and give each task only the part it needs.", "Page"],
    ["2.2", "Projects and standing instructions",
      "Say once, in a project, what you would otherwise paste into every chat: who you are, what you produce, the rules, and the files.", "Page"],
    ["2.3", "Skills and connectors",
      "A skill packages a procedure you repeat; a connector lets the assistant reach a source; choose the lightest setup that does the job.", "Page"],
    ["2.4", "Judgement: what never goes into the setup",
      "A setup is used by every later chat, so nothing confidential goes into it, every file carries a date, and the intent is written down.", "Page"],
    ["V2", "Context once, then skills",
      "Write the context once and the procedure once; then every chat starts from them.", "Video, ~4 min"]
  ]),

  H3("2.1 The module's self-check"),
  P("Five questions, drawn from the four pages. Questions 1 and 3 are multiple choice. Questions 2, 4 and 5 ask for a short answer, which is right if it makes the point of the model answer. Four or five right means the module's point has landed; below four, read again the page named beside each question you missed. The threshold is a proposal, to be tested with the first learners."),
  genericTable([600, 3900, 3700, 1500], ["#", "Question", "Model answer", "Drawn from"], [
    ["1", "You have a country context pack of seven sections, about twenty pages. A tip asks only for your sector's laws. What do you paste? (a) The whole pack: more context is always better. (b) The section on laws and policy, with its date. (c) Nothing: the assistant can search for the laws. (d) A one-line summary of the pack.",
      "(b). Give each task the smallest set of information it needs. The whole pack buries the laws among nineteen pages the task does not use; a search gives undated, unchecked results; a one-line summary loses the detail.",
      "2.1 Build the context once"],
    ["2", "Your unit pastes the same four paragraphs into every chat: who the unit is, what it produces, 'posts, not names', and 'list open questions at the end'. What should it do instead, and what must the result carry?",
      "Put them once into a project's standing instructions, with the files the unit's work uses. The brief should carry who the unit is, what it produces and in what format, the standing rules, what each file is and its date, what never goes in, and who reviews it and when.",
      "2.2 Projects and standing instructions"],
    ["3", "Your unit checks every draft against PAERA, by section, ten times a month, always the same way. Which setup fits best? (a) A new prompt each time. (b) A project. (c) A skill that packages the check, with a connector to the published source. (d) None: do it by hand.",
      "(c). A procedure that repeats the same way is what a skill packages, and a check against a published source needs a way to reach it. A project carries standing context, not a procedure; a fresh prompt repeats work and drifts.",
      "2.3 Skills and connectors"],
    ["4", "A colleague wants to add last year's roles register, which names the office-holders, and the draft cabinet paper on the Registry to the unit's project 'so the assistant knows everything'. What do you say?",
      "No to both. The project is used by every chat in it and by everyone it is shared with. The cabinet paper is unpublished; names belong out of every setup (posts, not names). The roles register can go in by post, with its date, once it has been checked.",
      "2.4 Judgement: what never goes into the setup"],
    ["5", "A colleague found a skill on a public website that 'writes ministerial briefings in your style', and wants to install it for the whole unit. What do you check first, and why?",
      "Who wrote it, and what every file in it says: read them before installing. Text inside a skill, or inside any source the assistant reads, can carry instructions the assistant follows, such as sending your material elsewhere. Install only from a source you trust, and try it first on invented material.",
      "2.3 Skills and connectors"]
  ]),

  H3("2.2 Go further"),
  P("Shown on the module's home page, apart from the sources: one to three things to do next, each with its time."),
  genericTable([2300, 1700, 2600, 2100, 1000], ["Title", "Publisher", "Address", "Why", "Time"], [
    ["AI Fluency: Framework and Foundations", "Anthropic Academy", "https://academy.claude.com/courses/ai-fluency-framework-foundations", "Delegation, the skill this module sets up: what to hand to an assistant, and how.", "About 3 hours"],
    ["AI and digital transformation competencies for civil servants", "UNESCO", "https://unesdoc.unesco.org/ark:/48223/pf0000384963", "The competencies a government expects of staff who set up and govern these tools.", "A report to read"],
    ["AI Skills Coalition", "ITU", "https://aiforgood.itu.int/ai-skills-coalition/ai-courses-portfolio/", "ITU's free course catalogue; start with 'AI and digital transformation in government'.", "About 12 hours"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE PAGES, THE VIDEO AND THE REFERENCE
// ============================================================================
body.push(H1("3. The pages, the video and the reference"));

// ---------- 2.1 ----------
body.push(...renderPage({
  num: "3.1 Subtopic 2.1",
  title: "Build the context once",
  singleMessage: "Write down once, with dates and sources, what every task needs to know about your country and your unit, and give each task only the part it needs.",
  concept: [
    "Every AI usage tip in this knowledge base begins 'Below is…'. It needs your material: your country's strategy, your sector's programmes, the laws that bind you. Without it, the assistant fills the gap from what it learned in training, which is general, undated and often wrong about your country. With it, the same prompt gives an answer about your own situation.",
    "Most people build that material again for every task, a little differently each time. Build it once instead. Write a context pack: a few short sections that describe your country and your unit, each dated, each claim with its source. Then every task starts from the same checked facts. This is the same idea as a building block that a government plans once and every programme re-uses: the work is done once, and done properly, because many things depend on it.",
    "More context is not better context. The engineers who build assistants call the discipline context engineering, and state its rule simply: give the assistant the smallest set of information that makes the result you want most likely. A pack of twenty pages pasted into a task that needs one section buries that section. The assistant gives each sentence some weight, so pages it does not need make the answer worse. Independent research shows it too: models use information placed in the middle of a long context less well than information at its start or end. Keep the whole pack, and give each task only its part.",
    "A context pack goes stale. A strategy is approved, a body is renamed, a programme is cancelled. Date every section, and the pack tells you when it needs a second look."
  ],
  inTool: [
    "Shown in Claude, and the same in any assistant that can search the web.",
    "Building it. The research prompts of Play 0 build the country context pack, called A0 in the other courses' workbooks, section by section: the digital landscape, the programmes, how the ministry works, the roles, the country's characteristics, the public bodies and systems, and the laws. Run them with web search on, one per chat, and ask for text in the chat, not a file.",
    "Keeping it. Copy each answer into one document of your own, under its section heading, with the date you ran it. Open the sources on anything you will carry into a briefing, and mark any claim you could not check. Keep posts, not names: take out the names of office-holders before the pack is shared.",
    "Using it. Paste the section a tip names, or attach the pack as a file and say which section the task uses. Module 2's next page shows how to keep the pack in a project, so that it no longer needs pasting."
  ],
  where: [
    ["Claude: web search", "https://support.claude.com/en/articles/10684626-enable-and-use-web-search"],
    ["ChatGPT: search", "https://help.openai.com/en/articles/9237897-chatgpt-search"],
    ["Gemini: sources", "https://support.google.com/gemini/answer/14143489"],
    ["Microsoft 365 Copilot: web search", "https://learn.microsoft.com/en-us/microsoft-365/copilot/manage-public-web-access"]
  ],
  example: {
    title: "Progressa's context pack, trimmed for one task",
    body: [
      "Progressa's context pack has seven sections. They are on the Progressa page of this knowledge base, ready to paste. The planning unit of MoEYS had a task that needed only one of them: draft the legal-basis paragraph of a data-sharing request to the examinations authority.",
      "The first run pasted the whole pack. The paragraph that came back talked about connectivity, donors and the Digital Transformation Roadmap, and named the Data Protection Act only in passing. The second run pasted only section 7, the laws and policy, with its date. The paragraph named the two obligations of the Data Protection Act 2023 for a minor's data, a legal basis and parental consent for any use the law does not require, and noted that Progressa has no access-to-information act.",
      "The AI usage tip under Your turn does the trimming. Run on this task, it kept section 7 and one sentence of section 3, the question the ministry faces, which restates the consent rule, and it flagged one thing as stale: section 7 does not say whether the Data Protection Commission has issued guidance since the pack was dated."
    ],
    run: {
      prompt: "Below is my context pack, dated 12 October 2026, in sections [the seven sections of the Progressa page]. Below that is the task I am about to give an AI assistant: 'Draft the legal-basis paragraph of a request to share learner data with the examinations authority.' Select only what the task needs. [The rest of the tip's prompt.]",
      output: [
        { table: [
          ["Section", "Needed", "Why"],
          ["Section 7, legal and policy", "Part: the Data Protection Act row and the Civil Registration Act row", "The legal basis, consent, and how a child's identity is anchored"],
          ["Section 3, the question the ministry faces", "One sentence: 'The Data Protection Act 2023 requires a legal basis for sharing minors' data and parental consent for any use the law does not require.'", "Restates the consent rule the paragraph rests on"],
          ["Sections 1, 2, 4, 5 and 6", "None", "Connectivity, donors and programmes do not bear on the legal basis"]
        ] },
        "May be out of date: section 7 does not say whether the Data Protection Commission has issued guidance since 12 October 2026. Not in the pack: the examinations authority's own legal mandate to hold learner data."
      ]
    }
  },
  aiTip: {
    title: "Trim a context pack to what one task needs",
    time: "~10 min",
    watch: "A law or a limit dropped without a word.",
    problem: "A context pack is written once and is long; a task needs only part of it. Pasting the whole pack buries what matters, and choosing by hand each time is slow and misses things.",
    prompt: "Below is my context pack, dated [the date], in sections [paste the pack]. Below that is the task I am about to give an AI assistant [paste the task, or the prompt you will run]. Select only what the task needs. For each section, say: (a) whether the task needs it: all of it, part of it, or none; (b) if part, the sentences to keep, quoted word for word; (c) one line on why. Then list anything the task needs that the pack does not hold, and anything in the kept part that may be out of date, with the reason. Do not rewrite or summarise the kept sentences. Output: the trimmed pack, as the kept sentences under their section headings; then the table of sections; then the two lists.",
    io: "Input: your context pack and the task. Output: the trimmed pack, the sections dropped with the reason, and what the pack lacks or may have let go stale.",
    safeguard: "The assistant can drop a constraint the task needs without saying so: a law, a limit on data, a body that must agree. Before you use the trimmed pack, read the list of dropped sections and put back anything that binds the task.",
    practice: {
      input: [
        "Paste the seven sections of the Progressa page of this knowledge base as the pack, dated 12 October 2026, with one change: replace the data-exchange paragraph of section 1 with this older copy, dated March 2024. 'Data exchange: Linkup, the planned national data-exchange layer, is in procurement; no ministry exchanges data through it yet.'",
        "The task: 'Draft a one-page note for the Permanent Secretary on what MoEYS must do to exchange learner data with PNIA through Linkup.'"
      ],
      key: [
        "Kept: the section 1 data-exchange paragraph; from section 3, that Linkup exists and MoEYS is not a member; from section 7, the Data Protection Act row and the Civil Registration Act row; from section 6, that Linkup has a documented onboarding procedure for members. Dropped: sections 2, 4 and 5, with a line each.",
        "Out of date: the section 1 paragraph. It is dated March 2024 and says Linkup is in procurement, but section 6 says it went live as a pilot in 2025, and section 3 that it exists. A good run names the contradiction; a weak one keeps the paragraph without a word.",
        "Not in the pack: what Linkup's onboarding procedure asks of a new member, and who in PDGA approves it."
      ]
    }
  },
  cite: [
    ["call the discipline context engineering", "Effective context engineering for AI agents"],
    ["Independent research shows it too", "Lost in the Middle: How Language Models Use Long Contexts"]
  ],
  sources: [
    ["Effective context engineering for AI agents", "Anthropic Engineering · September 2025", "In its own words, 'the smallest set of high-signal tokens'; why more context can make the result worse (vendor source)"],
    ["Lost in the Middle: How Language Models Use Long Contexts", "Liu et al., Transactions of the ACL · 2024", "Information in the middle of a long context is used less well "],
    ["Context engineering, Technology Radar", "Thoughtworks · April 2026", "Context engineering moved to Adopt, in Volume 34"]
  ]
}));

// ---------- 2.2 ----------
body.push(...renderPage({
  num: "3.2 Subtopic 2.2",
  title: "Projects and standing instructions",
  singleMessage: "Say once, in a project, what you would otherwise paste into every chat: who you are, what you produce, the rules, and the files.",
  concept: [
    "A unit that uses an assistant every day starts most chats the same way. It says who it is, what it is working on, which rules apply, and pastes the same files. That is work done again and again, and done a little differently each time, so the answers differ too.",
    "Say it once. Most assistants let you set up a project: a place that holds standing instructions and a set of files, which every chat started in it can see. The instructions are read at the start of every chat in the project, before your first message. The files are there to be read when a chat needs them.",
    "Write the standing instructions as a project brief, the way you would brief a new member of staff. Who the unit is, and the post that owns the project. What the project is for. What the unit produces, and in what format. The standing rules: posts, not names; cite or discard; text in the chat, not files; open questions listed at the end of every draft. What each file is, and its date. What never goes in. And who reviews the brief, and when.",
    "A brief makes every chat in the project start from the same place, so answers can be compared. It also writes down the unit's intent, the goals and limits that otherwise live only in people's heads. When the person who set the project up moves on, the brief stays.",
    "Teams that use assistants to write software keep the same kind of brief in a file the assistant reads first, such as one named CLAUDE.md or AGENTS.md. It works the same way as a project brief."
  ],
  inTool: [
    "Shown in Claude.",
    "Setting up a project. Create a project, give it a name, and paste the brief into its instructions. Add the files: the context pack, the strategy, the template the unit writes to. Then start every chat on that work from inside the project.",
    "Keeping it current. Change the brief when the work changes, and replace a file when a newer version is approved, rather than adding the new one beside the old. Two versions of the same document in one project give two different answers.",
    "Sharing it. In an organisation's account, a project can be shared with colleagues, who then work from the same brief and files. Share it only with the people the files may be shown to. An assistant shows each user whatever that user can open: the UK government's Copilot trial found that it surfaced files users could open but should not have.",
    "The blank project brief below is the form to fill; copy it into a document of your own.",
    { table: [
      ["Part of the brief", "What to write"],
      ["Who we are", "The unit, its body, and the post that owns this project"],
      ["What this project is for", "The work, in one or two sentences, and who it is for"],
      ["What we produce", "The outputs, their format, their length and their reader"],
      ["Standing rules", "Posts, not names. Cite or discard. Text in the chat, not files. Open questions listed at the end of every draft. Any rule of your own"],
      ["The files", "Each file in the project: what it is, its date, and who approved it"],
      ["What never goes in", "The kinds of material that must stay out of this project, by name"],
      ["Review", "The post that reviews this brief, and the date of the next review"]
    ] },
    "In ChatGPT the same thing is called a project, in Gemini a Gem, and in Microsoft 365 Copilot a notebook."
  ],
  where: [
    ["Claude: projects", "https://support.claude.com/en/articles/9517075-what-are-projects"],
    ["ChatGPT: projects", "https://help.openai.com/en/articles/10169521-projects-in-chatgpt"],
    ["Gemini: Gems", "https://support.google.com/gemini/answer/15146780"],
    ["Microsoft 365 Copilot: notebooks", "https://support.microsoft.com/en-us/microsoft-365-copilot/get-started-with-microsoft-365-copilot-notebooks"]
  ],
  example: {
    title: "MoEYS's project brief",
    body: [
      "The planning unit of MoEYS set up a project for the Progressa Learner Registry (PLR). Its brief, in full:",
      "Who we are: the planning unit of the Ministry of Education, Youth and Skills of Progressa; the project is owned by the head of the planning unit. What this project is for: preparing the papers for the Progressa Learner Registry (PLR), the single list of learners the Education Sector Plan 2023–2028 calls for, for the Permanent Secretary and the MoEYS ICT Director. What we produce: briefing notes of one page, data-sharing requests, and gap tables; plain English; tables with named columns. Standing rules: posts, not names; every claim about a law, a body or a country with its source, or it is dropped; text in the chat; every draft ends with its open questions. The files: Progressa's country context pack, dated 12 October 2026; the Education Sector Plan 2023–2028; the Data Protection Act 2023. What never goes in: records of learners, even a sample; unpublished cabinet papers; the names of office-holders. Review: the head of the planning unit, on the first working day of each quarter.",
      "The first chat in the project asked for a one-page note on the Registry's legal basis. It came back with a table and four open questions, with no names, without being told any of it in the chat."
    ]
  },
  aiTip: {
    title: "Draft the standing instructions for your team's project",
    time: "~20 min",
    watch: "A wrong rule is repeated in every chat.",
    problem: "A team knows how it works but has never written it down for an assistant, so every chat starts again from nothing, and each colleague starts differently.",
    prompt: "Below is a description of my unit and its work with an AI assistant: who we are, what we produce and for whom, the rules we follow, and the documents we use [paste the description]. Draft the standing instructions for a project our team will share, under these seven headings: who we are; what this project is for; what we produce; standing rules; the files; what never goes in; review. Under 'standing rules', always include: posts, not names; cite or discard; text in the chat, not files; open questions listed at the end of every draft. Under 'the files', list each document I named with a blank for its date and approver. Use only what my description says; where it says nothing for a heading, write 'to be decided' and the question to answer. Output: the brief, under the seven headings, in no more than 400 words, then a list of the points marked 'to be decided'.",
    io: "Input: a description of your unit and its work. Output: the standing instructions for your team's project under seven headings, with the points still to be decided.",
    safeguard: "Standing instructions are read by every chat in the project, so a wrong rule is repeated in every answer. The head of the unit reads the brief line by line before it goes into the project, and fills each blank date and approver from the documents themselves.",
    practice: {
      input: [
        "A description of a unit, written by its senior architect:",
        "'We are the architecture unit of PDGA, the Progressa Digital Government Authority: one senior architect on a donor-funded contract and two junior analysts. We review each ministry's request to join Linkup and write a note on it for the Director-General: two pages, plain English, with a table of the data the ministry would exchange and with whom. We work from Linkup's onboarding procedure, the Digital Transformation Roadmap 2024–2030, the Data Protection Act 2023 and Progressa's context pack. Our senior architect, Mr J. Okello, signs every note.'"
      ],
      key: [
        "Who we are: the architecture unit of PDGA; the project is owned by the senior architect, by post. If your brief kept 'Mr J. Okello', it broke the rule it lists: posts, not names.",
        "What this project is for: notes on ministries' requests to join Linkup, for the Director-General. What we produce: two-page notes in plain English, with a table of the data exchanged and with whom.",
        "Standing rules: the four the prompt always adds. The files: the four documents named, each with a blank date and approver. A good brief marks the Roadmap as a draft awaiting cabinet, or asks whether it is.",
        "To be decided: what never goes in, and who reviews the brief and when. The description says nothing on either, so the brief should not invent them."
      ]
    }
  },
  cite: [
    ["UK government's Copilot trial", "Microsoft 365 Copilot Experiment: Cross-Government Findings Report"]
  ],
  sources: [
    ["Skills explained: how Skills compares to prompts, Projects, MCP and subagents", "Anthropic · 2025", "What a project holds, and when to use one (vendor source)"],
    ["Effective context engineering for AI agents", "Anthropic Engineering · September 2025", "Instructions read at the start of every chat (vendor source)"],
    ["Microsoft 365 Copilot Experiment: Cross-Government Findings Report", "Government Digital Service, UK · 2 June 2025", "An assistant shows each user whatever that user can open"]
  ]
}));

// ---------- 2.3 ----------
body.push(...renderPage({
  num: "3.3 Subtopic 2.3",
  title: "Skills and connectors",
  singleMessage: "A skill packages a procedure you repeat; a connector lets the assistant reach a source; choose the lightest setup that does the job.",
  concept: [
    "A project carries what an assistant should know. Two other things change what it can do.",
    "A skill is a procedure packaged with what it needs: the steps, the reference material, and the shape of the output. It sits ready, and the assistant loads it when a task calls for it, instead of you pasting the procedure each time. Each skill has a short header that says what it is for; the assistant reads only the headers until one matches the task, so many skills cost almost nothing until one is used. Skills follow an open standard, Agent Skills, so the same skill can run in more than one assistant.",
    "A connector lets the assistant reach a source: a document library, a knowledge base, a register. With a connector, the assistant reads the current version of the source when it needs it, instead of a copy you pasted last month. Most connectors follow one open protocol, the Model Context Protocol, MCP for short. A connector reads with the permissions of the person who uses it, so it reaches every file that person can open, including files they were given access to by mistake. The UK government's trial of Microsoft 365 Copilot found exactly this: the assistant surfaced files users could open but should not have.",
    "Both bring in text that someone else wrote, and an assistant can take instructions from it. A line hidden in a web page, a shared document or a skill's files can tell the assistant to ignore your rules or send your material elsewhere. This is called prompt injection, and the industry's security reference lists it as the first risk of these tools. Install skills only from a source you trust, and read their files before you do; connect only sources whose content your unit controls or trusts.",
    "Choose the lightest setup that does the job. A task you do once is a prompt. Context the unit's work always needs goes in a project. A procedure you repeat the same way, ten times a month, is a skill. A source that changes, and must be read as it is today, is a connector. Each step up is more work to set up and more to keep current, so step up only when the lighter one is no longer enough.",
    "This knowledge base already offers skills. The optional ea-plays kit packages the procedures of some AI usage tips as skills. They bring the named source in before the draft is written, and check the draft after: every output opens with a header that counts the sources by kind and the lines nobody could verify. The tips run without the kit. With it, the source check, the step most people skip, is harder to leave out."
  ],
  inTool: [
    "Shown in Claude.",
    "Installing one skill. Download the ea-plays kit from its public repository, and take the folder of the one skill you want; each skill folder is complete on its own. Read its files first, and try it on invented material, such as the Progressa practice material on these pages, before your own. Make a ZIP of that folder, keeping the folder's name, which must match the skill's name. Then, in Claude, open Customize, then Skills, choose +, and upload the ZIP. Open the skill's main file and read its header: the name and the one-paragraph description are what the assistant reads to decide when to use it. If the description does not match how your unit would ask, the skill will not be used when you expect.",
    "Connecting this knowledge base. This knowledge base is published on GitBook, and a published GitBook site offers a connector of its own: the site's address followed by /~gitbook/mcp. Add it in the settings as a custom connector. The assistant can then search and read this knowledge base's pages as they are published today. The connector can only read.",
    "Turning them off. Skills and connectors can be switched off in the settings, or for one chat in the tools menu. Switch off what a task does not need: fewer tools, like less context, gives a better answer."
  ],
  where: [
    ["Claude: skills", "https://support.claude.com/en/articles/12512180-use-skills-in-claude"],
    ["Claude: connectors", "https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp"],
    ["ChatGPT: apps", "https://help.openai.com/en/articles/11487775-apps-in-chatgpt"],
    ["Gemini: apps", "https://support.google.com/gemini/answer/14959807"],
    ["Microsoft 365 Copilot: connectors", "https://learn.microsoft.com/en-us/microsoft-365/copilot/connectors/overview"]
  ],
  example: {
    title: "A reference check, packaged and connected",
    body: [
      "The architecture unit of PDGA checks its papers against PAERA, GovStack's reference architecture for public administration, by section, ten or more times a month. Each analyst did it differently, and one paper cited a section that PAERA does not have.",
      "The unit installed one skill of the ea-plays kit, the PAERA reference check, and connected this knowledge base. The next paper, a note on Progressa's data-exchange gaps, came back with the header the kit puts on every output: nine sources, seven of them primary; two lines unverified. The two lines named PAERA sections. The skill had looked each one up at its public address; one existed and one did not, and the header said which.",
      "The unit kept the project for its standing context, the skill for the check, and the connector for this knowledge base. A one-off question about a meeting stayed a prompt."
    ]
  },
  aiTip: {
    title: "Decide which tasks need a prompt, a project, a skill or a connector",
    time: "~15 min",
    watch: "A connector reaches its source from every chat.",
    problem: "A unit uses an assistant for many tasks, set up anyhow. Some are pasted again every week; some reach for a source that has changed. Nobody has decided which setup each task deserves.",
    prompt: "Below is a list of the tasks my unit does with an AI assistant, with how often each is done and what it uses [paste the list]. For each task, recommend one of four setups: (1) a prompt, for a task done once or rarely; (2) a project, for context the unit's work always needs; (3) a skill, for a procedure repeated the same way; (4) a connector, for a source that changes and must be read as it is today. For each task produce one row with: (a) the task; (b) the setup; (c) the reason, in one line, from how often it is done, whether its steps repeat, and whether its source changes; (d) what the setup would hold. Recommend the lightest setup that does the job. Where a task would put personal or confidential data into a project, skill or connector, say so and recommend a prompt with placeholders instead. Output: a table with one row per task, then the setups in the order to build them.",
    io: "Input: the list of the unit's tasks with an assistant, with how often each is done and what it uses. Output: a table of which tasks need a prompt, a project, a skill or a connector, with the reason for each and the order to build them.",
    safeguard: "A connector lets the assistant read a source in every chat that uses it, with your permissions, and what it reads can be repeated in any answer. Agree each connector with the owner of the source before you add it, whatever the table recommends.",
    practice: {
      input: [
        "The tasks of PDGA's architecture unit with an assistant:",
        "(1) A note on each ministry's request to join Linkup, the same steps each time: about four a month. (2) Checking papers against PAERA, by section: ten or more a month. (3) The unit's standing context, its rules and the Roadmap: needed in every chat. (4) A speech for the Director-General at a conference: once. (5) Reading Linkup's current member list, which changes every month: weekly. (6) A monthly summary of the onboarding queue, from a spreadsheet that holds officers' names and phone numbers: monthly. (7) A review of the Roadmap's progress: once a year. (8) Translating a one-page note into a local language: a few times a year."
      ],
      key: [
        { table: [
          ["Task", "Setup", "Why"],
          ["1, 2", "Skill", "The same procedure, repeated; 2 also needs a connector to PAERA's published text"],
          ["3", "Project", "Context every chat needs"],
          ["4, 7, 8", "Prompt", "Done once or rarely; 8 is read by a fluent colleague before use"],
          ["5", "Connector", "A source that changes, read as it is today; only once its owner agrees"],
          ["6", "Prompt, with placeholders", "The spreadsheet holds names and phone numbers, so it goes into no setup"]
        ] },
        "If your table put task 6 in a project or behind a connector, the prompt's own rule was missed. Order to build: the project first, then the skill for task 1, then the connector."
      ]
    }
  },
  cite: [
    ["open standard, Agent Skills", "Agent Skills"],
    ["Model Context Protocol", "Model Context Protocol"],
    ["UK government's trial of Microsoft 365 Copilot", "Microsoft 365 Copilot Experiment: Cross-Government Findings Report"],
    ["the industry's security reference", "LLM01:2025 Prompt Injection"],
    ["a connector of its own", "MCP servers for published docs"]
  ],
  sources: [
    ["Skills explained: how Skills compares to prompts, Projects, MCP and subagents", "Anthropic · 2025", "When to use a prompt, a project, a skill or a connector (vendor source)"],
    ["Use skills in Claude", "Anthropic help · living page", "How to upload a skill; install only from trusted sources (vendor source)"],
    ["Agent Skills", "agentskills.io · open standard", "What a skill holds; the header the assistant reads first"],
    ["Model Context Protocol", "modelcontextprotocol.io · open protocol", "The protocol most connectors follow"],
    ["MCP servers for published docs", "GitBook · documentation", "The read-only connector of a published GitBook site (vendor source)"],
    ["LLM01:2025 Prompt Injection", "OWASP GenAI Security Project · 2025", "Text in a source or a skill that gives the assistant instructions"],
    ["Microsoft 365 Copilot Experiment: Cross-Government Findings Report", "Government Digital Service, UK · 2 June 2025", "An assistant surfaced files users could open but should not have"]
  ]
}));

// ---------- 2.4 ----------
body.push(...renderPage({
  num: "3.4 Subtopic 2.4",
  title: "Judgement: what never goes into the setup",
  singleMessage: "A setup is used by every later chat, so nothing confidential goes into it, every file carries a date, and the intent is written down.",
  concept: [
    "What goes into one chat is used once. What goes into a project, a memory, a skill or a connector is used by every later chat, and often by every colleague the setup is shared with. So the rules of Module 1 bind harder here. And a setup can bring in text that steers the assistant: a skill or a connected source written by someone else can carry instructions, so know who wrote each one.",
    "Nothing confidential goes into a setup: no records of citizens or learners, not even a sample, no unpublished cabinet papers, and no names of office-holders (posts, not names). A connector to a source that holds such data puts it within reach of every chat that uses the connector. And an assistant that remembers across chats can carry a detail from one conversation into another.",
    "Context goes stale. A file added in March is still read in October, and the assistant cannot tell that it has been replaced. Date every file, replace rather than add, and review the setup on a date written in the brief.",
    "Write the intent down. The researcher Margaret-Anne Storey names three kinds of debt that work with assistants piles up. Technical debt lives in the code. Cognitive debt lives in people: work accepted that nobody in the team can explain. Intent debt lives in the documents: the goals and limits that were never written down, so neither the next colleague nor the assistant can follow them. A project brief that says what the unit is for, what it must never do and why, pays off intent debt. Without one, a setup runs on whatever the person who made it remembered."
  ],
  inTool: [
    "Shown in Claude.",
    "Checking a project. Open the project and read its instructions and its list of files, as a stranger would. For each file, ask what it is, its date, and whether it may be shown to everyone the project is shared with.",
    "Checking memory. If memory is on, the settings show what the assistant has kept about you from earlier chats. Read it, correct what is wrong, and delete what should not be kept. For a chat that must leave nothing behind, use an incognito chat, which is not saved and not remembered.",
    "Checking connectors and skills. The settings list the connectors and skills in use. Remove any that no current task needs, and any whose author you cannot name."
  ],
  where: [
    ["Claude: memory", "https://support.claude.com/en/articles/11817273-use-claude-s-chat-search-and-memory-to-build-on-previous-context"],
    ["Claude: incognito chat", "https://support.claude.com/en/articles/12260368-use-incognito-chats"],
    ["ChatGPT: memory", "https://help.openai.com/en/articles/8590148-memory-faq"],
    ["Gemini: memory", "https://support.google.com/gemini/answer/16598623"],
    ["Microsoft 365 Copilot: memory", "https://support.microsoft.com/en-us/microsoft-365-copilot/manage-copilot-memory-in-microsoft-365-copilot"]
  ],
  example: {
    title: "A project audited",
    body: [
      "On the first working day of the quarter, the head of the planning unit of MoEYS audited the project for the Progressa Learner Registry (PLR), as its brief requires. The AI usage tip under Your turn read the brief and the list of files.",
      "Since the brief in 2.2 was written, the unit had added three files, and the audit found three things. The roles register was last year's, and named two office-holders: it was replaced by the current one, by post. There were two versions of the Digital Transformation Roadmap 2024–2030, the draft now awaiting cabinet and an earlier working draft, and some answers had quoted the Roadmap as if it were in force: the working draft was removed, and the brief now says the Roadmap is a draft and not binding. And the brief never said why the Registry needs parental consent, so drafts kept treating consent as optional: one line was added under standing rules, quoting the Data Protection Act 2023.",
      "Memory held one item worth removing: the name of a head teacher mentioned in an earlier chat. The head of the unit deleted it, and recorded the audit and its date at the foot of the brief."
    ],
    run: {
      prompt: "Below are the standing instructions of a project my team shares in an AI assistant [the PLR project's brief], and the list of its files, each with its title and date [the list]. Audit the project. [The rest of the tip's prompt.]",
      output: [
        { table: [
          ["Item", "Date", "Risk", "Action"],
          ["Roles register", "2025", "Out of date; may name office-holders", "Replace with the current one, by post"],
          ["Digital Transformation Roadmap, working draft", "2024", "Two versions of the same document", "Remove"],
          ["Digital Transformation Roadmap, cabinet draft", "2024", "A draft, not in force; the brief does not say so", "Keep; add a line to the brief"],
          ["Data Protection Act 2023", "2023", "None seen from the title", "Keep"]
        ] },
        "Lines to add: why the PLR needs parental consent, quoting the Act; that the Roadmap is a draft and not binding."
      ]
    }
  },
  aiTip: {
    title: "Audit what a project holds",
    time: "~15–20 min",
    watch: "A harmless title can hide what a file holds.",
    problem: "A project grows by addition. Files are added and rarely removed, and the brief drifts from the work. Nobody checks what every chat in it is now reading, or whether it should.",
    prompt: "Below are the standing instructions of a project my team shares in an AI assistant [paste the instructions], and the list of its files, each with its title and date [paste the list]. Audit the project. For the instructions and for each file, produce one row with: (a) the item; (b) its date, or 'no date'; (c) any risk: personal data or names, unpublished or confidential material, out of date, contradicted by another item, or two versions of the same document; (d) the action: keep, replace, remove, or ask the owner. For each skill or connector the project uses, add a row that says who wrote it and whether the team has read it. Then list the goals, limits and reasons the work depends on that the instructions do not state, as lines to add. Judge only the titles, dates and text given; where a risk can only be seen in a file's content, say 'read the file'. Output: the table, then the lines to add, then the number of items marked for each action.",
    io: "Input: the project's standing instructions and the list of its files with titles and dates. Output: an audit of what the project holds, with an action for each item and the lines of intent to add.",
    safeguard: "The assistant sees only the titles and the text you paste, not what is inside each file: a file with a harmless title can hold names or confidential material. The owner of each file reads it before it is marked 'keep'.",
    practice: {
      input: [
        "The standing instructions of a MoEYS project: 'Who we are: the planning unit of MoEYS; owned by Ms R. Phiri, head of the planning unit. What this project is for: papers on the Progressa Learner Registry. Standing rules: cite or discard; open questions at the end of every draft.'",
        "Its files: Progressa country context pack (12 October 2026); Education Sector Plan 2023–2028 (2023); Education Sector Plan 2023–2028, scanned copy (2023); Notes from the head teachers' meeting (no date); Data Protection Act 2023 (2023). Its skill: 'Briefing style', downloaded from a public website."
      ],
      key: [
        "Three planted problems, and one more. (1) The brief names an office-holder: replace 'Ms R. Phiri' with the post. (2) Two copies of the Education Sector Plan: keep one. (3) The head teachers' meeting notes have no date and may hold names: ask the owner, read the file. And the skill has no named author and nobody has read it: remove it until someone has.",
        "Lines to add: what the project produces and for whom; 'posts, not names'; what never goes in; who reviews the brief, and when.",
        "If your run marked the meeting notes 'keep', it judged a file it could not see: the safeguard's point."
      ]
    }
  },
  cite: [
    ["Margaret-Anne Storey", "How generative and agentic AI shift concern from technical debt to cognitive debt"]
  ],
  sources: [
    ["How generative and agentic AI shift concern from technical debt to cognitive debt", "Margaret-Anne Storey · 9 February 2026", "Technical, cognitive and intent debt"],
    ["Fragments: April 2", "Martin Fowler · 2 April 2026", "The three debts summarised; cognitive offloading and cognitive surrender"],
    ["AI Playbook for the UK Government", "GOV.UK · 10 February 2025", "Using the tools lawfully and responsibly; protecting data"]
  ]
}));

// ---------- V2 ----------
body.push(...renderVideo({
  id: "3.5 Video V2",
  title: "Context once, then skills",
  covers: "2.1 to 2.4",
  runtime: "~4 min",
  words: 420,
  speaker: "Arne",
  singleMessage: "Write the context once and the procedure once; then every chat starts from them.",
  scriptBeats: [
    { cue: "Opening: the speaker on camera. The title is in the lower third: 'Context once, then skills'." },
    { text: "For the first weeks of writing these courses with an AI assistant, every chat began the same way. We pasted the country, the ministry, the rules. Every chat began slightly differently, and so every answer did too." },
    { story: "The speaker's own case, 60 to 90 seconds, about 150 to 200 words. It must show three things: (1) building the country context pack once, for The Gambia or for Progressa, and what changed in every AI usage tip run after it: answers that could be compared, sources that had already been checked; (2) a step the test learners skipped, opening the sources, and why the ea-plays skills were written to make that step hard to skip; (3) one thing the speaker would set up differently now. Give the date. Name posts, not persons. If the speaker cannot name a case with a date, this video becomes a page (plan decision 4)." },
    { cue: "Slide cut in — Title: 'Four setups, lightest first'. Body, four text rows: 'Once: a prompt.' 'Always needed: a project.' 'Repeated the same way: a skill.' 'A source that changes: a connector.'" },
    { text: "Here is the rule we work by now. A task you do once is a prompt. Context your work always needs goes into a project, with a brief: who we are, what we produce, the rules, and the files, each with its date. A procedure you repeat the same way becomes a skill. And a source that changes is reached through a connector, so the assistant reads it as it is today. Step up only when the lighter setup is no longer enough." },
    { cue: "Slide cut in — Title: 'Less is better'. Body, two text rows: 'Give each task the smallest set of information it needs.' 'A pack of twenty pages buries the one section a task uses.'" },
    { text: "And give each task only what it needs. We learned this the slow way. Pasting the whole context pack into every task felt thorough. It made the answers worse, because the one section that mattered was buried under nineteen that did not." },
    { cue: "Back to the speaker on camera." },
    { text: "One warning. Everything in a setup is read by every chat that uses it, and often by every colleague it is shared with. So no records of real people, ever. No unpublished papers. Every file with its date. And write down why the work is done the way it is, because the person who set it up will not always be there to explain." },
    { cue: "Slide cut in — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Write the context once and the procedure once; then every chat starts from them.'" },
    { text: "Write the context once, and the procedure once. Then every chat starts from them." }
  ],
  slideSpecRows: [
    ["1", "Four text rows: the four setups, lightest first.",
      "Cut in over the voice-over after the story. ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB. The same wording as page 2.3."],
    ["2", "Two text rows: the smallest set of information; the buried section.",
      "Text-only."],
    ["3", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The single message, word for word. No practice box and no sources slide: the pages carry both."]
  ],
  metadataRows: [
    ["Working title",           "Context once, then skills"],
    ["YouTube-optimised title", "Set up your AI assistant once: context packs, projects, skills and connectors"],
    ["Description (60 words)",  "Most teams paste the same context into every AI chat, a little differently each time. A practitioner tells how writing the context once changed every answer after it, why skills were built for the step people skip, and the rule for choosing a prompt, a project, a skill or a connector. For public servants who use AI on official work."],
    ["Tags",                    "AI in government, context engineering, AI assistant setup, projects, skills, MCP, public sector, AI literacy"],
    ["Playlist (YouTube)",      "Working with AI in Government"],
    ["ToR §4 coverage",         "§4.3 (AI integration: setting an assistant up for the AI usage tips of the series)"],
    ["PAERA citations",         "None. This course is about working with an AI assistant, not about the reference architecture."],
    ["External-link list",      "The four pages of Module 2, which carry the sources: Effective context engineering for AI agents (Anthropic, 2025); Skills explained (Anthropic, 2025)."]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard"),
  P("As in Module 1: a public servant with the page on one half of the screen and an assistant on the other must be able to run the page's AI usage tip on their own work and judge its result. For Module 2, the result is a setup: a trimmed context pack, a project brief, a decision on which setup each task needs, or an audit."),

  H3("4.2 The video"),
  P("V2 is one person on camera, with three text-only slides cut in on the ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB. It is recorded by the camera route of the series. The story beat is the speaker's; the four setups and the single message are said as written."),

  H3("4.3 Voice and tone"),
  P("Direct address. Plain language at about an eighth-grade English level. Two technical names cannot be avoided, because learners will meet them in their assistant's settings: a skill and a connector, with MCP named once. Each is explained in plain words where it first appears."),

  H3("4.4 The kit"),
  P("Page 2.3 names the optional ea-plays kit and shows one of its skills. The tips of every page run without it. The page says how to install one skill in the Claude app, as a ZIP of the skill's folder under Customize, Skills (Claude help, 'Use skills in Claude', checked 26 October 2026); the kit's own page in the GEA space carries the other routes."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU."),

  H3("5.1 Three departures from the series rules"),
  P("As in Module 1: a person on screen in V2; four written pages covered by one video; on-camera cues in the script. The plan, section 7, gives the reason."),

  H3("5.2 The speaker's case"),
  P("V2's story beat is left to the speaker, who is asked to name a real case, with a date, before the cut is decided (plan decision 4)."),

  H3("5.3 A connector to the course"),
  P("Page 2.3 tells learners to connect this knowledge base through the read-only connector GitBook publishes for every site. That connector works only while the site keeps its page actions turned on. Whether ITU wants the courses offered this way is a question for ITU."),

  H3("5.4 Vendor features named"),
  P("Module 2 names features of commercial products (projects, skills, connectors, memory) because learners will meet them in their assistant's settings. The concept of each page is tool-neutral, and other assistants are named where a setting is shown. Whether ITU wants the vendor names reduced is a question for ITU."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the four pages, and the video. Every source is public."),
  genericTable([1100, 8600], ["Page", "Sources referenced, with addresses"], [
    ["2.1", "Effective context engineering for AI agents (Anthropic Engineering, September 2025), https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents. Lost in the Middle: How Language Models Use Long Contexts (Liu et al., TACL, 2024), https://aclanthology.org/2024.tacl-1.9/. Context engineering, Technology Radar (Thoughtworks, April 2026), https://www.thoughtworks.com/radar/techniques/context-engineering."],
    ["2.2", "Skills explained (Anthropic, 2025), https://claude.com/blog/skills-explained. Effective context engineering for AI agents, as above. Microsoft 365 Copilot Experiment: Cross-Government Findings Report, as in 2.3."],
    ["2.3", "Skills explained, as above. Use skills in Claude (Anthropic help), https://support.claude.com/en/articles/12512180-use-skills-in-claude. Agent Skills (open standard), https://agentskills.io. Model Context Protocol (open protocol), https://modelcontextprotocol.io. MCP servers for published docs (GitBook), https://gitbook.com/docs/ai-for-your-readers/mcp-servers-for-published-docs. LLM01:2025 Prompt Injection (OWASP, 2025), https://genai.owasp.org/llmrisk/llm01-prompt-injection/. Microsoft 365 Copilot Experiment: Cross-Government Findings Report (Government Digital Service, 2 June 2025), https://www.gov.uk/government/publications/microsoft-365-copilot-experiment-cross-government-findings-report. The ea-plays kit, https://github.com/alaponin/ea-plays-kit."],
    ["2.4", "How generative and agentic AI shift concern from technical debt to cognitive debt (Margaret-Anne Storey, 9 February 2026), https://margaretstorey.com/blog/2026/02/09/cognitive-debt/. Fragments: April 2 (Martin Fowler, 2 April 2026), https://www.martinfowler.com/fragments/2026-04-02.html. AI Playbook for the UK Government (GOV.UK, 10 February 2025), https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government."],
    ["V2", "None of its own; the description points to the pages."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP0 Module 2 — Script Bundle v0.1",
  description: "Script bundle for KP0 Module 2 (Working with AI in Government): Prepare — set up what the AI knows and can do.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP0 Module 2 Script Bundle v0.1 · 26 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP0_Module2_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
