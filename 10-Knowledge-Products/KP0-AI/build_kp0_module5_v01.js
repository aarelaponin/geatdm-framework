// Build KP0 Module 5 — Script Bundle v0.1
// Working with AI in Government · Module 5 — Orchestrate with the plugin: build a toy prototype (Architect).
// v0.1 (31 Oct 2026). The toy is the mini registry (toolkit/orchestrate-starter/MINI-REGISTRY-BRIEF.md),
//   cut from the registry prototype; every Try it first is from that prototype's record, frozen in examples/plr/.
// Same page shape as Modules 3 and 4. A step that needs a picture carries a string beginning "IMAGE:"
//   (a screenshot in figures/, with its caption) or, until it is taken, "SCREENSHOT:" (what it must show), which the
//   GitBook renderer shows as a box saying the screenshot is to come. The screenshots are from one real run of the toy.
// 1 Nov 2026: the unused video helpers removed; Modules 1 to 4 no longer have videos either.
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak, ImageRun
} = require('docx');

// ---------- styling (mirrors KP1-KP4) ----------
const ARIAL = "Arial";
const COLOR_HEAD     = "1F3864";
const COLOR_ACCENT   = "2E75B6";
const COLOR_GREY_TXT = "595959";
const COLOR_GREY_BG  = "F2F2F2";
const COLOR_BORDER   = "BFBFBF";
const COLOR_AI_BG        = "EEF7EE";  // AI usage tip
const COLOR_AI_BD        = "2E7D32";
const COLOR_PULL_BG      = "FFF8E1";  // single-message highlight
const COLOR_PULL_BD      = "E65100";

const border = { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const cellMargin  = { top: 90, bottom: 90, left: 130, right: 130 };

// Persona for KP0 Module 5 (the Architect).
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
// "IMAGE: file.png | caption" is a screenshot from figures/, scaled to the text width, its caption below
function image(line) {
  const [file, caption] = line.slice(7).split(" | ");
  const data = fs.readFileSync(path.join(__dirname, "figures", file.trim()));
  const w = data.readUInt32BE(16), h = data.readUInt32BE(20), width = Math.min(600, w);  // PNG header
  return [new Paragraph({ spacing: { before: 120, after: 40 }, alignment: AlignmentType.CENTER,
            children: [new ImageRun({ data, transformation: { width, height: Math.round(h * width / w) } })] }),
          PItalic(caption)];
}
function content(items) {
  return items.flatMap(it => typeof it === "string" ? (it.startsWith("IMAGE: ") ? image(it) : [P(it)])
    : genericTable(it.table[0].map(() => Math.floor(9700 / it.table[0].length)), it.table[0], it.table.slice(1)));
}

// ---------- helper: render a subtopic page ----------
// KP0 subtopics are written pages. The tip's io line is split by the GitBook renderer into
// Bring and Get, and the safeguard's first sentence becomes Watch for, as in KP4.
// Optional parts (review of 26 Oct 2026): cite, a phrase in the prose and the source it names, linked on the
// GitBook page (the Word document keeps plain text); where, the help links for the setting in each assistant; example.run, the
// prompt and part of its output; aiTip.practice, Progressa material to practise on, with its answer key.
// Modules 3 and 4 add tryFirst: the fault to find in the record, its question, and its key (collapsed on the GitBook page),
// shown before the concept; the AI usage tip is the page's step on the learner's own work.
function renderPage({ num, title, singleMessage, tryFirst, concept, inTool, where, example, aiTip, withKit, sources, persona = PERSONA_A }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([["Persona", persona], ["Form", "Written page"]]));
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
    children: [new TextRun({ text: "Module 5 — Orchestrate with the plugin: build a toy prototype", font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",        "Script bundle for Module 5 of KP0: five written pages, with places marked for screenshots"],
    ["Version",         "v0.1 — working draft of 31 October 2026"],
    ["Date",            "31 October 2026"],
    ["Module persona",  PERSONA_A],
    ["Subtopics",       "Five written pages (5.1 – 5.5); the fifth is the module's Judgement page"],
    ["Screenshots",     "The steps that need a picture carry a screenshot from a real run of the toy, or a marked place for one still to be taken"],
    ["The toy",         "The mini registry: one goal, enrol a learner, on 60 made-up children over three lists, built from the brief's eight rounds with the orchestrator plugin (17 rounds in the course's own run) (the brief is in the starter folder)"],
    ["Worked examples", "From the registry prototype's record, the full-size project the toy is cut from: the constants refused, the count both ways, the data in known numbers, the consent check, and the note"],
    ["Self-check",      "Four questions drawn from the five pages, in section 2.1"],
    ["Prepared by",     "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Module 5 of KP0 — Working with AI in Government. In Modules 3 and 4 you ran the cycle by hand. In Module 5 you run it with the orchestrator plugin, on a small project from start to finish: a toy prototype of a learner registry, built round by round, from the first document to a note for a senior reader. You do not write any code. You write what each round serves, read every instruction before it is issued and every review before you rule, and decide when it is done. Each page opens with a fault to find in the record of the full-size registry prototype we built in October 2026, then shows the step on the toy. The orchestrator plugin is in preparation, and its name and version will change; the pictures are from the author's pre-release setup. Until it is released, read the pages alongside the record, and run the cycle by hand as Modules 3 and 4 teach. Unlike the rest of the course, the plugin needs software installed and runs commands. The page With the plugin says which software, and what you agree to. The register is plain English at about an eighth-grade level."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the five pages of Module 5 of Knowledge Product 0 (Working with AI in Government), with the module's self-check, production notes and calibration items."),
  P("Module 5 is the third part of the Orchestrate layer, for the Architect. It assumes Modules 3 and 4: the learner has run one cycle by hand and knows the log, the pages of faults and the handover. It is the one part of the course that needs the orchestrator plugin, which is in preparation; the pages are written against it as it will be released."),

  H3("1.2 How Module 5 differs"),
  P("Modules 3 and 4 teach the cycle on the learner's own work. Module 5 teaches it in practice, on one project everyone builds the same way, so that every step has a known result to compare with. The toy is cut from the full-size registry prototype: one goal instead of four, 60 made-up children instead of 300, eight rounds instead of 23. Every Try it first comes from the full-size record, and every On your work is a round of the toy."),
  P("It is not the service design course. That course specifies and generates a service a government runs, with no code. Module 5 builds a throwaway prototype for agreement, and its subject is the method, not the application."),

  H3("1.3 What the learner needs"),
  P("The Claude desktop app with Desktop Commander, the orchestrator plugin, Python, git and Node on their computer. What to install, and how, is in the plugin's own instructions, published with it; the starter folder's page With the plugin says what to have ready. No programming: the work sessions write and run the code, and the learner reads and rules."),

  H3("1.4 Screenshots"),
  P("Where a step needs a picture, the page shows a screenshot from one real run of the toy, with invented data only, and a caption. They are granular on purpose: setup and the first round are shown step by step, including where the app asks for a permission, because that is where a first-time user gets stuck. A picture not yet taken is a marked place: SCREENSHOT, then what it must show; the GitBook guide shows it as a box saying a screenshot is to come."),

  H3("1.5 How to read this document"),
  P("Section 2 gives Module 5 at a glance, with the module's self-check. Section 3 holds the five pages. Section 4 collects the production notes, section 5 the open calibration items, and section 6 the aggregate external-link list."),

  pageBreak()
);

// ---------- MODULE AT A GLANCE ----------
body.push(
  H1("2. Module 5 at a glance"),
  P("Five written pages. Building the toy alongside the pages takes about a day, spread over a week. That covers the brief's eight rounds and the rounds the run adds (17 in the course's own run), a few minutes of reading and ruling for each, and the time the work sessions take."),
  genericTable([700, 2700, 4900, 1400], ["#", "Title", "Single message", "Form"], [
    ["5.1", "Set up the project, and the first round",
      "Set up once, with the constants written before any work, then give one session the orchestrator's role and start with a round small enough to check.", "Page"],
    ["5.2", "Decide before you build",
      "Write down what the prototype must do, the tables it reads and the goal in full, and count each requirement against the goal both ways, before any code is written.", "Page"],
    ["5.3", "Build one goal per round",
      "Build in small rounds, one at a time, on made-up data in known numbers, and accept nothing that was not seen running.", "Page"],
    ["5.4", "Check at the real thing, and write the note",
      "Check what the prototype does on the running prototype, with a check that has been seen to fail, and write a note that says what it does not show.", "Page"],
    ["5.5", "Judgement: what a toy proves",
      "A prototype is for agreement: it shows that something can work, never that it is ready, and you decide when it has shown enough.", "Page"]
  ]),

  H3("2.1 The module's self-check"),
  P("Five questions, drawn from the five pages. Questions 1 and 3 are multiple choice. Questions 2, 4 and 5 ask for a short answer, which is right if it makes the point of the model answer. Four or five right means Ready; below four, read again the page named beside each question you missed."),
  genericTable([600, 3900, 3700, 1500], ["#", "Question", "Model answer", "Drawn from"], [
    ["1", "Setup refuses a constraint you typed: 'No session publishes anything (decided 26 October)'. What do you do? (a) Ask the session to accept it anyway. (b) Remove the date: the constraint stands without it, and the date belongs in the log. (c) Leave the constraint out. (d) Start a new project.",
      "(b). The constants hold only what does not change with time. The rule is a constant; when it was decided is a dated fact, which the log keeps.",
      "5.1 Set up the project"],
    ["2", "The count of requirements against the goal says: 14 requirements, 11 carried by the goal, 3 by none. The orchestrator proposes to start building. What must be true first?",
      "Each of the 3 is listed with a reason it is left out, and the reason holds; and the count was seen to fail once on a planted mistake. Otherwise the build silently drops three things the prototype was meant to do.",
      "5.2 Decide before you build"],
    ["3", "The work session reports: 'the goal is built and works'. Its evidence is that the code compiles. What do you rule? (a) Accepted. (b) Not accepted: building is reported only when it was seen running, with the checks' results. (c) Accepted, if the review agrees. (d) Ask the work session to say it again.",
      "(b). A build that compiles is not a build that runs. The page of faults for building refuses exactly this, and the review must run the checks itself.",
      "5.3 Build one goal per round"],
    ["4", "Your toy's note says: 'The registry does not register a child twice.' Your duplicates count found that, of the 8 children on more than one list, the search catches 4 from every entry. What should the note say instead?",
      "What the count showed, as a limit of the one step it tested: the search finds 4 of the 8 from every list, and misses each of the other 4 on the list where the family name is spelt differently; whether any other step would find them is not shown. The note should also say that the numbers are set in the made-up data.",
      "5.4 Check at the real thing"],
    ["5", "The toy works on screen, and its note says what it shows and what it does not. The orchestrator proposes one more round: a way to look a learner up. What do you check before you rule?",
      "Whether the question the prototype was built to answer is already answered. If it is, stop: a prototype that keeps growing turns into the system without anyone deciding to build one. Take its documents, not its code, to where the real thing is built. Deciding to stop is yours, not the orchestrator's.",
      "5.5 Judgement: what a toy proves"]
  ]),

  H3("2.2 Go further"),
  P("Shown on the module's home page, apart from the sources: one to three things to do next, each with its time."),
  genericTable([2300, 1700, 2600, 2100, 1000], ["Title", "Publisher", "Address", "Why", "Time"], [
    ["Effective harnesses for long-running agents", "Anthropic", "https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents", "The engineers' version of this module: set up first, one feature at a time, and check every feature as a user would.", "20 minutes"],
    ["Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl", "Birgitta Böckeler, on martinfowler.com", "https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html", "Three tools that write the spec before the code, tried by hand, with an honest account of where they are too heavy. It covers the way of working Module 5 teaches, as software teams know it.", "25 minutes"],
    ["Harness Engineering for Coding Agent Users", "Birgitta Böckeler, on martinfowler.com", "https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html", "Guides that steer an assistant and sensors that check it: the pages of faults and the review, in an engineer's terms.", "25 minutes"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE PAGES AND THE REFERENCE
// ============================================================================
body.push(H1("3. The pages and the reference"));

// ---------- 5.1 ----------
body.push(...renderPage({
  num: "3.1 Subtopic 5.1",
  title: "Set up the project, and the first round",
  singleMessage: "Set up once, with the constants written before any work, then give one session the orchestrator's role and start with a round small enough to check.",
  tryFirst: {
    title: "The constants that were refused",
    body: [
      "The first piece of work on the full-size registry prototype was to write its constants: the one document of what does not change, such as what the project is for, what governs it and where each kind of thing lives. The instruction gave the answers word for word and said not to change them.",
      "One of the answers was a constraint: 'No session saves the work into the project's history; only the owner does (the owner's word, 26 October 2026).' The setup program refused it, and wrote no constants. The work session did what it was told: it stopped, reported the refusal word for word, and changed nothing."
    ],
    question: "Why did the program refuse the constraint, and whose mistake was it?",
    key: [
      "The constraint carried a date, 'the owner's word, 26 October 2026'. The constants hold only what does not change with time, so a sentence that would have to be rewritten as time passes is refused. The rule itself is a constant; when it was decided belongs in the log.",
      "The mistake was the instruction's, not the work session's. The orchestrator had fixed the answers without running them through the program first. The review said so, and the page of faults gained a line: an answer an instruction fixes word for word is run through the program's own check before the instruction is issued. Version 2 wrote the constants correctly, but its review still found two faults in the instruction's own tests, and the owner then re-scoped the piece of work instead of sending a third version."
    ]
  },
  concept: [
    "With the plugin, you no longer make the folders and forms yourself. One session sets the project up: it checks your computer, asks you a few questions with recommended answers, shows you the map of folders to rule on, and then makes everything in one go. That is the place where the project's structure is decided, once, before any work.",
    "The constants are the heart of it: what the project is for, what it delivers, the documents that govern it, who receives its results, the standing constraints, and where each kind of thing lives. Nothing in them carries a date except one: when each deliverable is due. The rest must stay true for as long as the project runs. Everything that happens goes in the log instead.",
    "Then one session takes the orchestrator's role. It writes in the log that it holds the role, and from then on it writes the instructions and keeps the log, and it does no work itself. You are the owner: you rule on every result. Start the orchestrator on the most capable model, with high effort; in the Claude desktop app, that is Opus with effort set to High. It judges every result and writes every instruction, so a weaker setting saves little and costs the most.",
    "Whenever you do not understand something the orchestrator or a work session did, a step, a word, a number, or why it stopped, ask it to explain, in plain words, before you go on. Always. It costs one message, and the answer is often where you find that something is wrong. A ruling on work you cannot explain is not a ruling.",
    "Make the first round small and checkable. The register of requirements is a good one: a numbered list of what the prototype must do, each with a test someone could run. It is short, every later round builds on it, and a review can check it line by line. The engineers who build agents found the same: a first session that only sets up the project and writes the list of features, before any of them is built, made the work that followed steadier."
  ],
  inTool: [
    "With the orchestrator plugin, in the Claude desktop app.",
    "WARNING: The plugin is not released yet, and its name and version will change. The pictures on this page are from one real run of the mini registry on the author's own pre-release setup, step by step, including the places where the app stopped to ask for a permission. The plugin's name, its skills and some screens will differ on yours; what each step is for does not. Until the plugin is released, read this module alongside the record and run the cycle by hand. What it needs installed, and what you agree to when it runs commands, is on the page With the plugin.",
    "Before you start. Check that the plugin is installed and switched on: under Customize, its page lists its skills, here three: one to set up a project, one to hold the orchestrator's role, and one to check at the end of a session that everything is saved.",
    "IMAGE: M5-01-plugin-installed.png | The plugin installed and switched on, with its three skills.",
    "Make a folder for the demo and put two things in it: the mini registry brief, and the pages of faults from the starter folder. Leave out the project's own folder. Setup makes it, and a folder that already holds files is treated as a project under way.",
    "IMAGE: M5-02-demo-folder.png | The demo's folder before setup: the brief and the four pages of faults, and no project folder yet.",
    "Setting up. Keep the project's sessions together in one project of the desktop app, here called Working with AI, and give it the demo's folder. Start a new session there and ask it to start a new project: name it, say where its folder goes, and give the full path of the brief.",
    "IMAGE: M5-03-first-message.png | The first message: the project's name, its folder and its brief.",
    "Setup first checks your computer and looks at the folder. Then it asks its questions, a few at a time. Each comes with a recommended answer drawn from the brief, and a line to type something else.",
    "IMAGE: M5-04-setup-questions.png | Setup's questions, drafted from the brief. The open one is the standing constraints.",
    "Read every answer before you send it. Two matter most. The first is the kinds of thing the project will produce: the map of folders is made from them, so this answer is your ruling on the map. The second is the short code, which starts the name of every session of the project. Setup proposes one that no other project of yours uses, here MR.",
    "IMAGE: M5-05-setup-answers.png | All the answers. Here the history is kept on this computer only, against the recommended backup.",
    "Then setup makes everything in one go, and reports. Read the report: what it made, where you went against its suggestions, and what is worth knowing. Here it also copied the four pages of faults into the project, because they sat beside the brief; if yours did not, copy them into the project's folder for kinds of work yourself.",
    "IMAGE: M5-06-setup-report.png | Setup's report: what it made, where the owner went against its suggestions, and what is worth knowing.",
    "Taking up the role. Start a second session in the same project of the app. Before you send anything, set the model to Opus and the effort to High, in the menu below the message box. Then ask it to take up the orchestrator's role, and give it the full path of the constants.",
    "IMAGE: M5-07-take-the-role.png | The second session's first message, on Opus with effort High.",
    "Name the session with the project's code, the word orchestrator and a few words, such as 'MR · orchestrator · the mini registry', and pin it: you will come back to it every day. It reads the procedure and the constants before it does anything else.",
    "IMAGE: M5-08-orchestrator-reads.png | The orchestrator's session, named and pinned, reading the procedure first.",
    "A note on the pictures: in this run the orchestrator's session was first named 'MINI · orchestrator · the mini registry'. The project's code is MR, the one setup gave it, and the right name is 'MR · orchestrator · the mini registry'. Read MINI as MR wherever it shows in the pictures that follow.",
    "The first round. Ask the orchestrator for round 1 of the brief, the register of requirements. It decides first whether to do the work or to commission it, using the five conditions of Module 3. A lasting document others will rely on is commissioned.",
    "IMAGE: M5-09-round-1-asked.png | Round 1 asked for. The orchestrator commissions it, and says which conditions decided that.",
    "It writes the instruction and its review, and starts the work session as a scheduled task of the app. The first time, the app may block it. The orchestrator then hands the start to you: two lines to paste into a new session, and what the round is asked to do. Read that part: its tests and its warnings are what you judge.",
    "IMAGE: M5-10-scheduling-blocked.png | The first scheduled task blocked. The orchestrator gives the two lines to paste, and the instruction in short.",
    "Either paste the two lines into a new session yourself, on the model and effort the orchestrator names, or tell the orchestrator that it may schedule tasks for the demo's folder, and ask it to try again.",
    "IMAGE: M5-11-allow-scheduling.png | The owner allows scheduled tasks for the demo's folder.",
    "IMAGE: M5-12-creating-task.png | The orchestrator creates the task.",
    "The app asks you to approve the task. Check what it shows: the first line is the session's name, the second points at the instruction, the folder is the demo's, and it runs once, on your computer. Then press Schedule.",
    "IMAGE: M5-13-approve-task.png | The app's approval of the task: its prompt, its folder and its time.",
    "Open the task under Scheduled. A warning beside the folder means the task may not read it yet.",
    "IMAGE: M5-14-folder-warning.png | The task waiting, with a warning beside its folder.",
    "Click the warning, and the app asks whether the task may use the folder on every run. Read what it says: the task runs in the cloud, so the files it uses leave your computer and are processed on the provider's servers. That is why the toy holds invented data only. Check your organisation's rules before you allow it for real work. Each new task asks again.",
    "IMAGE: M5-15-folder-access.png | The app's question about the folder. This one is for the next round's task; each task asks once.",
    "Once you allow it, the folder is ticked and the task is queued to run. Do not also press Run now: a round started twice is two sessions writing the same files.",
    "IMAGE: M5-16-task-queued.png | The folder ticked, and the task queued to run.",
    "Back in the orchestrator's session, read what it says happens next. The work session runs without stopping for your clicks. When its report is written, it starts its own review in a separate session. Tell the orchestrator 'check' when the review is back.",
    "IMAGE: M5-17-orchestrator-scheduled.png | The orchestrator after scheduling: what will run, and what to say when it is back.",
    "The work session appears under the project, marked as a scheduled run. Open it to watch, but do not type in it.",
    "IMAGE: M5-18-sidebar.png | The work session in the side bar, under the project.",
    "IMAGE: M5-19-work-session.png | The work session running the instruction.",
    "It ends with one line: the review's verdict, and where the review is. That verdict is the reviewer's judgement, not yet your ruling.",
    "IMAGE: M5-20-review-accepted.png | The work session's last line: the review's verdict, accepted, with no gaps.",
    "Say 'check' to the orchestrator. It checks the review against the record before it acts on it. Then it may add a round the brief did not list. Here the register had left questions open that round 2 builds on, so the orchestrator first commissioned answers to them, and the app asked again to approve the task.",
    "IMAGE: M5-21-check-next-round.png | The orchestrator checks the review, then issues a round the brief did not list: answers to the register's open questions.",
    "Then rule on round 1 yourself. The orchestrator puts each ruling to you as a decision on a question form: what is to be decided, its recommendation, and the rival it weighed. It writes your answer in the log. A ruling can wait while other work goes on, as round 1's did here, but the next round that builds on it cannot.",
    "In this run, round 1 found 29 sentences, list items and table rows in the brief's five sections, marked 20 of them as saying what the registry must do, and wrote them as 23 numbered requirements, each with a test of what is set up, what is done and what is seen. It left 14 questions open that the brief does not answer, such as how a learner number is made. The review counted the brief again by its own route, found the same, and accepted with no gaps. In the course's log, round 1 reads:",
    { table: [
      ["Date", "Piece of work", "Version", "Event", "File", "Verdict or ruling", "Open with"],
      ["31 Oct, 15:00", "The register of requirements", "1", "instruction issued", "the instruction, in the folder for instructions", "—", "the work session"],
      ["31 Oct, 15:13", "The register of requirements", "1", "report back", "the report, in the folder for reports", "23 requirements, 14 questions open", "the review"],
      ["31 Oct, 15:18", "The register of requirements", "1", "review back", "the review, in the folder for reviews", "accepted, no gaps", "me"],
      ["31 Oct, 16:12", "The register of requirements", "1", "my ruling", "the decision in the log", "accepted", "—"]
    ] },
    "The plugin keeps this log for you, in its own form: a short entry for each event, in a folder beside the project. Until it is set up, the orchestrator keeps the rows by hand in the record of what is running. Setting it up needs the log's folder kept under version control. In this run the orchestrator first asked whether a history on this computer alone was enough, then commissioned a small round to set that up."
  ],
  aiTip: {
    title: "Check the instruction before it is issued",
    time: "~10 min",
    watch: "A test that only the work session itself could run.",
    problem: "With the plugin, the orchestrator writes the instructions. They read well, which makes them easy to wave through. A weak test or a missing way to fail is the most expensive fault in the cycle, because everything after it inherits it.",
    prompt: "Below is an instruction my orchestrator session has written and not yet issued [paste it], and the brief of the project [paste it]. Do not carry out the work. Check the instruction as the person who will rule on its result. For each test of success, say whether a stranger could run it and what it would show; flag any test only the work session could run. List the ways this work can fail while seeming to succeed that the instruction does not name. Check that it says what the work serves, that it names the review's own route, and that every answer it fixes word for word would pass the project's own rules, such as no dates in the constants other than when a deliverable is due. Output: a table of the tests, then the missing ways to fail, then at most three changes to ask for, each one sentence.",
    io: "Input: an instruction the orchestrator has written, and the project's brief. Output: its tests judged, the missing ways to fail, and up to three changes to ask the orchestrator for.",
    safeguard: "Use a chat that is not the orchestrator and not a work session: it must not have helped write the instruction. Ask the orchestrator for the changes; never edit an issued instruction yourself.",
    practice: {
      input: [
        "An instruction for round 1 of the mini registry: 'Write the register of requirements of the mini registry from its brief. Tests: T1, the register exists; T2, it covers the brief. Out of scope: building.'"
      ],
      key: [
        "T1 and T2 are tests only the work session could pass by its own say-so: 'covers the brief' does not say how a stranger would check it. Better: every sentence of the brief that says what the registry must do is a numbered requirement, each with a test of observation, and a count of the brief's sentences against the register, both ways. Missing ways to fail: a requirement the brief does not carry, added from general knowledge; two requirements in one line; the made-up data's numbers left out. The instruction also names no route for the review."
      ]
    }
  },
  withKit: "is the subject of this module: every step on this page is done with it.",
  cite: [
    ["The engineers who build agents found the same", "Effective harnesses for long-running agents"]
  ],
  sources: [
    ["Effective harnesses for long-running agents", "Anthropic Engineering · November 2025", "A first session that sets up the project and writes the list of features before any is built (vendor source)"]
  ]
}));

// ---------- 5.2 ----------
body.push(...renderPage({
  num: "3.2 Subtopic 5.2",
  title: "Decide before you build",
  singleMessage: "Write down what the prototype must do, the tables it reads and the goal in full, and count each requirement against the goal both ways, before any code is written.",
  tryFirst: {
    title: "The count both ways",
    body: [
      "Before the full-size registry prototype was built, a checking round counted every requirement in the register against the goals of the design, both ways: each requirement looked up in the goals, and each requirement the goals name looked up in the register.",
      "The register held 36 requirements. 25 were carried by at least one goal, and 11 by none. The goals named no requirement the register did not hold. Before it counted, the round planted two mistakes in a copy of the design, one requirement removed from a goal and one that does not exist added to another, and saw its count name both."
    ],
    question: "11 requirements are carried by no goal. What must be true of them before the building starts?",
    key: [
      "Each of the 11 must be listed in the design with the reason it is left out of the goals, and each reason must hold when read against its requirement. In the record both were done, and only then could the round say 'the build can be commissioned against the whole register'.",
      "Without that list, the build would quietly leave out 11 things the prototype was meant to do, and nobody would notice until the note. The planted mistakes matter too: a count that has never been seen to fail proves nothing by coming back clean."
    ]
  },
  concept: [
    "The cheapest place to find a mistake is before anything is built. So the toy, like the full-size prototype, spends its first rounds on documents, before any code. Each is written by a work session, checked by a review, and ruled on by you.",
    "The register of requirements says what the prototype must do, one numbered line each, with a test. The groundwork holds the tables the build will read: the three lists, the settings of the made-up data, and the rule the search follows. Writing them as tables means the build reads them instead of copying them, so a change is made in one place. The goal written in full says every step of enrolling a learner, and every way it can go wrong, such as the search finding two children.",
    "Then a checking round counts every requirement against the goal, both ways. A requirement the goal does not carry is either listed with its reason or is a gap. A requirement the goal names that the register does not hold is a gap the other way. Plant one mistake of each kind first, and see the count find them.",
    "You rule on each document before the next one starts. A design accepted in a hurry is the most expensive mistake of a prototype, because every round after it builds on it.",
    "Software teams that build with AI assistants call this way of working spec-driven development: the description of what to build, the spec, is written before any code, and the assistant builds from it. Birgitta Böckeler compared three of its tools and described three levels of it. Spec-first: the spec is written for one task and then set aside. Spec-anchored: it is kept, and every later change is checked against it. Spec-as-source: people change only the spec, never the code. The toy works at the second level: every round is counted against the register, and at the end its documents travel to the real build and its code does not. The tools she compared are made for developers, in a code editor or at a command line, and the person who writes the spec is also the one who judges what is built from it. This course keeps the spec and adds what the tools leave to you: a review by a session that never saw the work, and your ruling on each document."
  ],
  inTool: [
    "With the orchestrator plugin. Ask the orchestrator for rounds 2, 3 and 4 of the brief, one at a time: the groundwork, the goal written in full, and the count. Start each round only when the last one's ruling is in the log.",
    "The orchestrator may put a round in between, as it did after round 1 with the answers to the register's open questions. Each new round is a new scheduled task, and asks again for its folder.",
    "IMAGE: M5-22-next-task-allowed.png | The in-between round's task, its folder allowed, waiting for its time.",
    "A round can come back not accepted. Here the review of the answers found three gaps. The work session's last line says so, with the number of gaps of each kind.",
    "IMAGE: M5-23-not-accepted.png | A round not accepted: the review found three gaps.",
    "The orchestrator does what Module 3 taught. It writes version 2 of the instruction with the gaps added, and adds a line to the page of faults so that every later round carries it. It issues a new review beside the first, and schedules the second attempt. If that fails too, it withdraws the task and writes it again. Read its account, and note what is still waiting on you: here, the ruling on round 1, which it recommends but does not give.",
    "IMAGE: M5-24-version-2.png | The orchestrator's account of version 2: the gaps, what it changed, and the decisions still open for the owner.",
    "Version 2 came back not accepted too, with three new gaps. So the orchestrator did not send a third version. It withdrew the piece of work and changed what was asked: all thirteen recommendations had stood unchanged through both versions, and neither review had called one wrong; the faults were in how the rival answers were argued. It put the thirteen to you directly, as one decision, with the reviews' open faults named beside them. That is what Module 3 teaches for a task that fails twice: write the task again, rather than its wording a third time.",
    "Read such a decision as carefully as a review. Its recommendations fix numbers that every later round inherits. Here they gave two answers in advance: the duplicates count of round 7 must find 4 of the 8, and a reset of the made-up data must give 64 learners, the 60 children and a second record for each of the 4 the search does not catch.",
    "Read the groundwork as tables: the settings must be the brief's numbers exactly, 60 children, 3 schools, 8 on more than one list, 4 spelt differently. Every row names where it comes from: a line of the brief, a requirement, or your ruling. A row with no source is a guess. In this run the settings began:",
    { table: [
      ["Setting", "Value", "Source"],
      ["Children", "60 different children", "brief, line 23; requirements 9 and 14; the owner's ruling on what is counted"],
      ["Schools", "3", "brief, line 24; R-10, R-14"],
      ["Children on more than one list", "8", "brief, line 25; R-11, R-14"],
      ["Of those, family name spelt differently on one list", "4", "brief, line 26; R-12, R-14"],
      ["Ages", "6 to 12", "brief, line 27; R-13, R-14"],
      ["List entries", "68", "the owner's ruling on what is counted"],
      ["Of the 8, caught by the search", "4", "the owner's ruling on when two entries are one child"]
    ] },
    "The groundwork, too, came back not accepted at version 1, with one gap: the round's own check of what it had read failed when the review ran it again. Version 2 fixed that alone and was accepted. Its review also noted, outside its tests, that the log named the project's folder wrongly, and raised one question nobody had asked, whether two different children may differ only in capitals. Read what a review found and did not fix as closely as its verdict: that is where the next question comes from.",
    "For the count, read its two totals first, then each list of what nothing carries. In this run:",
    { table: [
      ["Way", "Reached", "Not reached", "Of"],
      ["Requirements to the goal", "13", "10", "23"],
      ["The goal to the requirements", "12", "7", "19"]
    ] },
    "Neither list is a fault in itself. Of the ten requirements no step of the goal carries, seven are about the made-up data, one about the other bodies being simulated, one about the checks running without a window, and one is the note. The seven parts of the goal no requirement's test reaches are all seven ways the goal can go wrong: each is there by the brief's rule or a ruling, and its check in the build is the only test it will have. A mistake planted on purpose, two requirements taken out, was caught. The review counted a second way, from the goal's own references, and got other totals, 8 and 15; it went through every pair that differed and found the count right each time. Two totals that disagree are not yet a fault: ask why they differ."
  ],
  aiTip: {
    title: "Read a design document before you rule",
    time: "~15 min",
    watch: "A step that says what should happen, not what happens when it fails.",
    problem: "A design document is long and reads as complete. The faults that cost most later are a step with no failure case, and a requirement that slipped between the register and the goal.",
    prompt: "Below are the register of requirements of my prototype [paste it] and the goal written in full [paste it]. Do not change either. As the person who will rule on the goal: (1) list each step of the goal, and for each, whether it says what happens when it fails; (2) list each requirement the goal names and each it does not, and for those it does not, whether the goal or the design says why; (3) list any rule the goal applies that the register does not hold, such as a search rule or a limit. Output: three tables, then the two questions you would put to the orchestrator before ruling.",
    io: "Input: the register and the goal. Output: the goal's steps with their failure cases, the requirements both ways, the rules with no source, and two questions for the orchestrator.",
    safeguard: "This reading is yours, before the review comes back; it does not replace the review. If it finds a gap the review did not, say so in your ruling, and add the gap to the page of faults for drafting.",
    practice: {
      input: [
        "A goal 'Enrol a learner' with four steps: 1, the clerk enters the child's names, date of birth and school; 2, the registry searches; 3, if found, it shows the learner; 4, if not found, it issues a number and saves the record. The register holds 12 requirements, among them R7: 'If the search finds more than one learner, the clerk is shown all of them and nothing is saved.'"
      ],
      key: [
        "Step 2 has no failure case: the goal does not say what happens when the search finds more than one learner, which R7 requires. Step 1 says nothing about a missing date of birth. A good reading lists R7 as named by the register and not carried by the goal, and asks the orchestrator for version 2 of the goal with a step for two or more found."
      ]
    }
  },
  withKit: "issues each design round in turn and writes its log rows; the count both ways is one of its checking rounds.",
  cite: [
    ["Birgitta Böckeler compared three of its tools", "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl"]
  ],
  sources: [
    ["Effective harnesses for long-running agents", "Anthropic Engineering · November 2025", "A list of end-to-end features written from the specification before any is built, so the work is not declared finished early (vendor source)"],
    ["Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl", "Birgitta Böckeler, on martinfowler.com · 15 October 2025", "Spec-driven development and its three levels, spec-first, spec-anchored and spec-as-source; the tools are built for developers"]
  ]
}));

// ---------- 5.3 ----------
body.push(...renderPage({
  num: "3.3 Subtopic 5.3",
  title: "Build one goal per round",
  singleMessage: "Build in small rounds, one at a time, on made-up data in known numbers, and accept nothing that was not seen running.",
  tryFirst: {
    title: "The data in known numbers",
    body: [
      "Before any screen of the full-size prototype was built, one building round wrote the program that makes its made-up data. The groundwork set the numbers: 300 learners in 10 schools, 40 of them on more than one list, 20 of those with the family name spelt differently on one list, and 87 with no birth record. The program read those numbers from the groundwork, made the data the same way every time, and the round counted the result against each setting. All matched.",
      "Two days later, a checking round asked how many of the 40 the prototype's search catches."
    ],
    question: "Why set the made-up data in known numbers, instead of letting the program invent whatever it likes?",
    key: [
      "So that every later check has a known answer. When the duplicates count found 40 children on more than one list and 20 with a spelling variant, those figures could be set against the settings: a count that disagreed with them would have shown a fault in the count, the data or the search. Random data would have given a figure with nothing to check it against.",
      "And because the data is made the same way every time, a review can make it again and count it by its own route. The note to the Permanent Secretary could say plainly that both numbers are set in the made-up data."
    ]
  },
  concept: [
    "Build in small rounds. First the scaffold and the made-up data, then each goal in a round of its own. A round that builds one thing can be reviewed by running that one thing; a round that builds everything can only be read. The engineers who build agents found the same: an agent asked to build a whole application at once tries to do too much and declares it finished too early, while one asked to build one feature at a time, and leave the project in a clean state, makes steady progress.",
    "One round at a time, never two at once. The full-size prototype lost a whole round when four goals were built in parallel in one folder, as Module 4 described.",
    "Made-up data in known numbers. The brief fixes them: 60 children, 3 schools, 8 on more than one list, 4 spelt differently. The data is made the same way every time it is reset, and it never holds a real person.",
    "Accept nothing that was not seen running. The page of faults for building refuses a report of a screen nobody opened, and a build that compiles but was never run. The review runs the project's checks itself, and goes through the goal as the school clerk would."
  ],
  inTool: [
    "With the orchestrator plugin. Ask the orchestrator for round 5 of the brief, the scaffold and the made-up data. Before it is issued, check that its first step is to see that the tools respond, and that its tests include counting the data against the brief's numbers.",
    "Read the report's first paragraph against the settings. In this run every count matched:",
    { table: [
      ["Setting", "In the brief", "Counted in the made-up data"],
      ["Children", "60", "60"],
      ["Schools", "3", "3, of 20 children each"],
      ["List entries", "68", "68: 24, 22 and 22 on the three lists"],
      ["Children on two lists", "8", "8"],
      ["Of those, family name spelt differently", "4", "4"],
      ["Ages", "6 to 12", "6 to 12"],
      ["Learners after a reset", "64", "64, numbered 1 to 64"]
    ] },
    "All 29 of the round's checks passed, each counting the files the reset wrote. One child dropped on purpose, in a copy, failed 7 checks by name; a reset run twice gave the same data. The review counted again in a program of its own and planted two faults of its own. Note why there are 64 learners and not 60: the search fails to join the 4 children spelt differently, so each is held twice. The number shows the search's limit before anyone has opened a screen.",
    "Then round 6, the goal built. Its review must run the checks and go through enrolling a learner as a clerk would, once for a child the registry finds and once for a new child.",
    "Round 6 came back not accepted at version 1. The prototype did what the goal says on every screen the review tried, but one test was not what it claimed. The checks are meant to run out of sight, without opening the prototype on your screen, and the test of that never looked at what was open on the screen. Version 2 looked before, during and after the checks, and was accepted with all 57 checks passing.",
    "IMAGE: M5-26-child-found.png | The finished prototype, a child already on the registry. The clerk enters the four details; the registry finds the learner and enters nothing new. Every screen carries the line 'Invented data, Progressa is fictional'.",
    "IMAGE: M5-27-new-child.png | A child the registry does not hold. A new learner number is given and the record saved.",
    "IMAGE: M5-28-entry-refused.png | An entry the goal refuses before any search: the family name missing and the date in the wrong form. Each fault is named on its own line, and the way back keeps what the clerk typed.",
    "Nothing opens on your screen while the checks run, and the review's screenshots are taken the same way."
  ],
  aiTip: {
    title: "Read a building report before you rule",
    time: "~10 min",
    watch: "'Works' with no run behind it.",
    problem: "A building report can say a screen works when nobody saw it running. Reading the report against what was actually run is the owner's quickest check.",
    prompt: "Below are the instruction for a building round [paste it], its report [paste it] and its review [paste it]. Do not run anything. As the person who will rule: for each claim in the report that something works, find the command or the run that showed it, and its result; mark any claim with none. Check that the review ran the project's checks itself, and went through the goal as its user would, and quote where it says so. List any file the report says was changed that the instruction did not name. Output: a table of claims and their evidence, then the review's own runs, then the files, then one line: rule accepted, or ask for what is missing.",
    io: "Input: a building round's instruction, report and review. Output: each claim matched to its evidence, the review's own runs, and a recommendation for your ruling.",
    safeguard: "The chat sees only what you paste; it cannot tell whether a run really happened. Where the evidence is a file, open it yourself before you rule.",
    practice: {
      input: [
        "A report: 'The enrolment screen works: a found child is shown and a new child gets a number. The checks pass.' Its evidence lists the build command's output, ending 'compiled successfully'. The review: 'Read the code; it does what the goal says. Accepted.'"
      ],
      key: [
        "Not accepted. 'Compiled successfully' shows the code builds, not that the screen works; no run of the checks or of the screen is shown. The review read the code and ran nothing, which the page of faults for building refuses: a review of building that ran nothing does not accept. Ask for the checks' results and the review's own run through the goal."
      ]
    }
  },
  withKit: "starts each building round, its review in a separate session, and writes the log; it cannot see whether a screen ran, so your ruling still rests on the review's own run.",
  cite: [
    ["The engineers who build agents found the same", "Effective harnesses for long-running agents"]
  ],
  sources: [
    ["Effective harnesses for long-running agents", "Anthropic Engineering · November 2025", "One feature at a time; an agent's tendency to do too much at once and to declare the work finished too early (vendor source)"]
  ]
}));

// ---------- 5.4 ----------
body.push(...renderPage({
  num: "3.4 Subtopic 5.4",
  title: "Check at the real thing, and write the note",
  singleMessage: "Check what the prototype does on the running prototype, with a check that has been seen to fail, and write a note that says what it does not show.",
  tryFirst: {
    title: "The consent check that passed",
    body: [
      "The full-size prototype shares a learner's record with the National Examinations Authority (PNEA), which may receive six of the record's fields and has no legal basis for the other seven. A checking round sent one learner's record through the running prototype, twice: once with every simulated fault off, and once with them all on. Both times the prototype passed all six fields and held back all seven, and recorded each refusal.",
      "Before it trusted the result, the round told its check to expect one of the six fields to be refused, and saw the check fail on that field and no other."
    ],
    question: "The check passed: 7 of 7 refused. What can it still not show?",
    key: [
      "The report named it itself: three of the seven refused fields were empty in this learner's record. A leak of those three would have shown nothing, because there was no value to leak. The check shows the refusal against a real value for four of the seven fields, not for all seven.",
      "The review then ran the check on a second learner, whose record holds two of those three fields, and both were refused against a real value. The third stayed open, and that limit went into the note: no invented learner holds a national number, so its refusal is not shown against a value. A check is only as wide as the data it ran on."
    ]
  },
  concept: [
    "A check of what the prototype does ends at the real thing: the running prototype, not its code or its documents. The engineers who build agents found that an agent checking a web application with code tests alone would miss that a feature did not work from start to end; told to test it as a person would, through the screen, it found the faults.",
    "Show the check failing once before you trust it. Plant the fault it is meant to find and see it caught: a check that has never failed may not be checking anything. Then ask what the data it ran on could not show.",
    "For the toy, the check is the duplicates count: how many of the 8 children on more than one list the search catches from every entry. The brief's numbers give the answer in advance. If the search is the one the brief describes, it finds the 4 whose names are spelt the same on every list, and misses each of the other 4 on the one list where the name is spelt differently.",
    "Then the note: one page for a senior reader, saying what the prototype shows and what it does not. Every limit the record names is either in the note or listed with the reason it was left out. A limit of one step is stated as a limit of that step, not of the whole. The full-size note took three tries, and the third was accepted only when the work session first listed every limit from the record, 51 of them, before writing a word."
  ],
  inTool: [
    "With the orchestrator plugin. Ask for round 7, the duplicates count. Check that its instruction names the review's own route, which is counting again from the three lists without the prototype's search, and that it asks for one fault to be planted before counting.",
    "Read the count's first line, then its table. In this run: the search catches 4 of the 8.",
    { table: [
      ["Child, as on the first list", "Caught", "What differs between its two entries"],
      ["Praquinvel", "yes", "nothing"],
      ["Prarasel", "no", "the family name, by one letter: Praresel on the candidate list"],
      ["Velnokgal", "yes", "nothing"],
      ["Miquin", "yes", "nothing"],
      ["Temnok", "no", "the family name, by one letter: Tomnok on the grant list"],
      ["Orobenwes", "yes", "nothing"],
      ["Orowes", "no", "the family name, by one letter: Orowus on the grant list"],
      ["Tumitem", "no", "the family name, by one letter: Tomitem on the grant list"]
    ] },
    "Each child missed is held twice, under two learner numbers. The review counted again from the three lists alone, without the prototype's search, and found the same 4 and the same eight reasons; a fault planted in the count moved it from 4 to 3. The answer given in advance held.",
    "IMAGE: M5-29-one-letter-off.png | What a miss looks like on the screen. The child of the first picture, entered with one letter of the family name different: the registry finds no one and gives a second learner number. Nothing on the screen says anything went wrong, which is why the count is made from the three lists and not from the screens.",
    "Then round 8, the note. Its instruction must ask for the list of limits first, every one the record names, before the note is written.",
    "The note came back not accepted at version 1. Every claim in it stood at a source, but the record named one limit the note neither stated nor listed as left out: a name is not limited in length, and no character in it is refused. Version 2 listed the limits again from every ruling, 38 of them, added what was missing, and was accepted; the review's own list found none unaccounted for. Its section on what the prototype does not show, as accepted:",
    "“It is not the registry. It is for agreement, it offers enrolment only, with no way to look a learner up, and it holds only invented data: Progressa is fictional, and every screen says so.”",
    "“It is connected to no other body. The three lists are part of the invented data; no system of the census, the examinations authority or the social grant programme is linked to it.”",
    "“It cannot tell apart two different children who share a family name, given names and date of birth. The second would be taken for the first, and nothing new saved. No two children in the invented data share all three.”",
    "“Three points are kept in their simplest form. An entry of blank characters of any kind, not only spaces, is treated as missing. A school other than the three, once refused, is not shown again when the clerk returns to correct the entry. Where the search finds more than one matching learner, the entry is refused and nothing is saved; this never arises in the invented data, and is checked only on a record added for the purpose.”",
    "Read what the note says about the 4 of the 8: a limit of the search step as it is defined, and a figure that shows how the rule behaves, not how many children a registry would hold twice on real lists."
  ],
  aiTip: {
    title: "Find what a passed check cannot show",
    time: "~10 min",
    watch: "A limit of the data reported as a property of the system.",
    problem: "A check that passes feels like proof. What it proves is bounded by the data it ran on and the step it tested, and that boundary belongs in the note.",
    prompt: "Below is the report of a check that passed [paste it] and the made-up data it ran on, or its description [paste it]. Do not run anything. List what the check shows, each as one sentence that names the step it tested and the data it ran on. Then list what it cannot show: values that were empty or absent in the data, cases the data did not contain, steps the check did not reach. For each, write the sentence the note should carry, and the next check that would close it. Output: two lists, then the sentences for the note.",
    io: "Input: a passed check's report and the data it ran on. Output: what it shows, what it cannot, and the sentences for the note.",
    safeguard: "The chat can only find limits in what you give it. Read the data yourself for empty fields and missing cases before you accept its list.",
    practice: {
      input: [
        "The toy's duplicates count: 8 children on more than one list, 4 caught from every entry, 4 each missed on the one list where the family name is spelt differently; no entry returned the wrong child. The made-up data: 60 children, every one with a date of birth, none with a birth record number."
      ],
      key: [
        "Shows: the search finds 4 of the 8 from every list and misses each of the other 4 on the list where the name is spelt differently. Cannot show: whether any other step would find the 4, since the toy has no other step; how the search behaves on a child with no date of birth, since every child has one; how it behaves on real names, since all are made up. For the note: 'the search misses a child whose family name is spelt differently; whether anything else would find the child is not shown', and 'both numbers are set in the made-up data'."
      ]
    }
  },
  withKit: "issues the checking round and the note's round, and starts each review; the list of limits is a test you ask it to put in the note's instruction.",
  cite: [
    ["The engineers who build agents found that", "Effective harnesses for long-running agents"]
  ],
  sources: [
    ["Effective harnesses for long-running agents", "Anthropic Engineering · November 2025", "Testing a web application end to end, as a person would, instead of with code tests alone (vendor source)"],
    ["Large Language Models Cannot Self-Correct Reasoning Yet", "Huang et al., ICLR · 2024", "Why the check needs a planted fault, and a route the work did not use"]
  ]
}));

// ---------- 5.5 ----------
body.push(...renderPage({
  num: "3.5 Subtopic 5.5",
  title: "Judgement: what a toy proves",
  singleMessage: "A prototype is for agreement: it shows that something can work, never that it is ready, and you decide when it has shown enough.",
  tryFirst: {
    title: "What the note may say",
    body: [
      "The full-size prototype's accepted note to the Permanent Secretary opens: 'It is a prototype for agreement … it is not the registry itself.' Here are five sentences someone might want to write about it.",
      { table: [
        ["#", "Sentence"],
        ["1", "The registry will stop children being registered twice."],
        ["2", "The search finds a registered child when the family name, given names and date of birth match, capitals aside."],
        ["3", "The examinations authority receives only the fields its basis allows."],
        ["4", "The prototype is ready to be piloted in three schools."],
        ["5", "Every basis for sharing a learner's data is the prototype's assumption, for the Data Protection Commission to confirm."]
      ] }
    ],
    question: "Which of the five can the record support, and what is wrong with the others?",
    key: [
      "2 and 5, as written; 3 only with its limits: on two learners, and never against a national number, which no invented learner holds.",
      "1 claims the whole registry from one step, the search, which misses a child spelt differently; whether anything else finds the child was not shown. 4 is a decision, and not the prototype's: whether to pilot is the owner's ruling, and nothing in the record tested a school, real data or a real connection to another body."
    ]
  },
  concept: [
    "A prototype is for agreement. It shows the people who decide that something can work, on made-up data, on one computer, with the other bodies simulated. It never shows that the thing is ready: not with real data, not under load, not with a real connection, not with the law confirmed. Say so on the first page of anything you write about it.",
    "Know what it cost. The full-size prototype took 23 pieces of work over five days: 13 accepted at the first version, and 10 that needed a second attempt, 2 of which were closed by changing what was asked, not by being accepted. The toy was planned as eight rounds and took 17, in one day of about nine hours: the brief's eight, three papers putting open questions to you, four rounds saving the work in the project's history, one moving the log under that history, and one bringing a page of faults up to date. Nine were accepted at the first version and five at the second; three were withdrawn after a second version not accepted, and ruled on directly. Each round costs a few minutes of your reading and ruling, and the review costs a second session. That is cheap next to a design accepted without a check, and costly next to a question you could have asked in one chat. Böckeler found the same with the spec-driven tools she tried: one turned a small bug into four user stories with sixteen tests of acceptance, 'a sledgehammer to crack a nut'. A way of working sized for a prototype is the wrong one for a small change. The five conditions of Module 3 tell you when to use it.",
    "You decide when it has shown enough. Stop when the question it was built to answer is answered, and the note says what it shows and what it does not. A prototype that keeps growing is turning into the system without anyone having decided to build one.",
    "Then take what it showed to where the real thing is built. In government, a service is specified and built the way the service design course teaches: from the agreed requirements and design, by the people and tools the ministry has chosen. The prototype's documents, the register, the groundwork and the goal written in full, travel; its code does not.",
    "Watch for cognitive debt here more than anywhere: a prototype that works on screen is easy to accept without being able to say why it is right. Before your last ruling, say in your own words what each round found. Where you cannot, ask the orchestrator to explain until you can."
  ],
  inTool: [
    "With the orchestrator plugin. Ask the orchestrator where the project stands. Read the answer against the log: every round, its version, its ruling.",
    "Write your last ruling: accept the note, or ask for what is missing. Then ask whether everything is saved in the project's history.",
    "IMAGE: M5-25-final-check.png | The end of the toy. The orchestrator gives what was delivered, the checks and the duplicates count, corrects a reason it wrote in its own log, and names what is not yet saved in the history. Read the last two as closely as the first: a session that reports its own mistake and what it left undone is one you can rule on.",
    "Then ask the orchestrator to hand over and stop. The project stays in its folder, with its history, as the record of what was decided and why.",
    "IMAGE: M5-30-final-handover.png | The handover. The orchestrator writes a note for whoever takes the role next: what it did that it should not have, and what is still owed, each line a claim for the successor to check, not a fact to inherit. It issues the successor's first task, which checks five of those claims and does nothing else, and gives up the role as its last act. To pick the project up again, start a session on Opus with effort High from the two lines it gives."
  ],
  aiTip: {
    title: "Decide whether the prototype has shown enough",
    time: "~15 min",
    watch: "A next step that grows the prototype instead of answering the question.",
    problem: "When a prototype works, the next step suggests itself: one more feature. Deciding whether it has answered its question, and what goes forward, is the owner's last and most important ruling.",
    prompt: "Below are my prototype's brief [paste it], its log [paste it] and its note [paste it]. Do not propose new features. (1) State the question the brief says the prototype was built to answer, in one sentence. (2) Say whether the note answers it, quoting the sentences that do. (3) List what the note says the prototype does not show, and for each, whether it matters for the decision the brief serves. (4) List the documents that should travel to the people who build the real thing, and what should not. Output: four short sections, then one line: stop here, or the one further round that would answer the question better, with its reason.",
    io: "Input: the brief, the log and the note. Output: whether the question is answered, what the limits mean for the decision, what travels, and a recommendation to stop or to run one more round.",
    safeguard: "Stopping is your decision, not the chat's. If it recommends a further round, check that the round answers the brief's question and is not a new feature.",
    practice: {
      input: [
        "The mini registry's brief, its log of 17 rounds, each closed by a ruling, and its note, which says: the search finds 4 of the 8 children on more than one list from every list and misses each of the other 4 on the list where the family name is spelt differently; whether anything else would find them is not shown; all data is made up; nothing is connected to another body."
      ],
      key: [
        "The question was whether a clerk can enrol a child without the registry registering the same child twice. The note answers it in part: yes for a child spelt the same on every list, no for a child spelt differently. That limit matters for the decision, so the honest next step is a question for the planning unit, whether the search should find names spelt differently, not a new feature. What travels: the register, the groundwork, the goal in full, and the note; not the code. A good run recommends stopping, with that question put to the owner."
      ]
    }
  },
  withKit: "answers 'where does it stand?' from its log, writes the handover, and records your last ruling; deciding to stop stays with you.",
  cite: [
    ["Watch for cognitive debt", "How generative and agentic AI shift concern from technical debt to cognitive debt"],
    ["Böckeler found the same", "Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl"]
  ],
  sources: [
    ["How generative and agentic AI shift concern from technical debt to cognitive debt", "Margaret-Anne Storey · 9 February 2026", "Cognitive debt: work accepted that nobody can explain"],
    ["Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl", "Birgitta Böckeler, on martinfowler.com · 15 October 2025", "One workflow for every size of problem, 'a sledgehammer to crack a nut'"],
    ["AI Playbook for the UK Government", "GOV.UK · 10 February 2025", "Meaningful human control; testing before use; data protection"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard"),
  P("An Architect with the page on one half of the screen and the Claude desktop app on the other must be able to take the toy's round for that page and rule on it. By the end of 5.5 they have the mini registry in a folder with its history, its log of every round, 17 in the course's own run, and its note, and their last ruling."),

  H3("4.2 Screenshots"),
  P("Module 5's pictures are screenshots of one real run of the toy, 31 October 2026, with invented data only, kept in figures/ as M5-01 to M5-30: 21 on page 5.1 (setup, the orchestrator's role, round 1 and its scheduled task with the two permissions the app asked for, and the round the orchestrator added), 3 on page 5.2 (that round's task, and the round not accepted and sent again as version 2), 3 on page 5.3 and 1 on page 5.4 (the finished prototype: a child found, a new child, an entry refused, and a name one letter off; each is the entry beside the screen it gave, taken without a window from a copy of the prototype after a reset), and 2 on page 5.5 (the handover, and the orchestrator's final check). Where the run's record says more than a picture, the page gives it as a table: round 1 in the course's log, and the first rows of the groundwork's settings. Rounds 4, 5, 7 and 8 are given from the run's record, as tables and the note's own words. No place is still marked SCREENSHOT. The run used a local build of the plugin; before publication, check the screens against the released plugin and crop anything that shows other projects."),

  H3("4.3 The toy and the full-size record"),
  P("The toy is cut from the registry prototype: one goal of its four, 60 children of its 300, the brief's eight rounds of its 23. The brief is in the starter folder (MINI-REGISTRY-BRIEF.md), and the page of faults for building is added there for this module. Every Try it first comes from the full-size record, frozen in examples/plr/, so that each answer key rests on a run that happened. The toy's own figures follow from the brief's numbers, so the answer keys of its tips are known in advance. The toy's own run, which the screenshots and the tables of 5.1 to 5.4 come from, is frozen in examples/mini-registry/, to its end, with rounds 4, 5, 7 and 8 given as tables and the note's own words in 5.2 to 5.4."),

  H3("4.4 Depends on the plugin"),
  P("Module 5 is the one part of the course that needs the orchestrator plugin. Its pages are written against the plugin as it will be released into the ea-plays kit, with its install steps in the plugin's own README. Until it is released, the module is shown as in preparation."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are forwarded for discussion with ITU."),

  H3("5.1 A module that needs software installed"),
  P("Module 5 needs the Claude desktop app, Desktop Commander, the orchestrator plugin, Python, git and Node on the learner's computer. Many civil servants cannot install software on a work computer. The by-hand cycle of Modules 3 and 4 remains complete without it. Whether ITU wants Module 5 in the core course or as an optional practical is a question for ITU."),

  H3("5.2 No videos"),
  P("As in Modules 1 to 4, KP0 has no videos for now, which departs from the series rule that every subtopic is a video. Module 5 uses screenshots instead, because its subject is a sequence of steps on screen."),

  H3("5.3 Named products"),
  P("As on page 3.2, the Claude desktop app and Desktop Commander are named, because the plugin runs in them. Whether ITU wants products named is a question for ITU."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the five pages. Every source is public."),
  genericTable([1100, 8600], ["Page", "Sources referenced, with addresses"], [
    ["5.1", "Effective harnesses for long-running agents (Anthropic Engineering, November 2025), https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents."],
    ["5.2", "Effective harnesses for long-running agents, as in 5.1. Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl (Birgitta Böckeler, martinfowler.com, 15 October 2025), https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html."],
    ["5.3", "Effective harnesses for long-running agents, as in 5.1."],
    ["5.4", "Effective harnesses for long-running agents, as in 5.1. Large Language Models Cannot Self-Correct Reasoning Yet (Huang et al., ICLR, 2024), https://arxiv.org/abs/2310.01798."],
    ["5.5", "How generative and agentic AI shift concern from technical debt to cognitive debt (Margaret-Anne Storey, 9 February 2026), https://margaretstorey.com/blog/2026/02/09/cognitive-debt/. AI Playbook for the UK Government (GOV.UK, 10 February 2025), https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government. Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl, as in 5.2."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP0 Module 5 — Script Bundle v0.1",
  description: "Script bundle for KP0 Module 5 (Working with AI in Government): Orchestrate with the plugin — build a toy prototype.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP0 Module 5 Script Bundle v0.1 · 31 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP0_Module5_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});

