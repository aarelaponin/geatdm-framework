// Build KP1 Module 3 — Video Script Bundle v0.1
// Second Architect-facing module of KP1 (Phase 5 — Execute & Govern). Copied from
// build_kp1_module2_v01.js, same Persona A (Architect). Same ITU compliance discipline:
//   - subtopic numbering (3.1–3.7) per ITU convention
//   - each video stands alone (no intros/outros, no cross-video references)
//   - text-only slides, Arial 28pt/18pt, #E5F5FB
//   - no individuals on screen (AI avatar or screen-only voice-over)
//   - one four-part AI usage prompt per subtopic
//   - "Find the link in the description" convention for external references
// Module 3 takes the architect from "I can run an Assess" to "I can stand up and run
// the living EA — the repository, the tooling, and the governance that keeps it alive."

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
    children: [new TextRun({ text: "Topic 3 — EA repository, tooling and governance",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 3 of KP1"],
    ["Version",             "v0.1 — second Architect-facing module, aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "26 June 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_A],
    ["Subtopics",           "Seven subtopics (3.1 – 3.7), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 32 minutes across seven standalone videos"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call (Carolina Anselmino); FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Topic 3 — the second Architect-facing topic in KP1, and the one that makes the architecture live. Topic 2 took the architect through reading a government in four layers and running an assessment; Topic 3 is about the permanent practice that follows — Phase 5, Execute and Govern. It covers where the architecture lives (the repository), how to tool it without locking yourself in, how to keep it current, and the governance — the EA Board, the project-review gate, the health metrics and the sustainment moves — that keeps the whole thing alive past its second year. The audience lock is unchanged: African public-sector middle management, plain English at an eighth-grade level, each subtopic leading with the capability the architect gains rather than with a technical term. The seven videos are numbered to ITU's topic/subtopic convention (subtopics 3.1 through 3.7). Each stands alone — no meta-introductions, no playlist-stitching outros, no backward references. All slide specifications follow ITU's text-only branding (Arial Bold 28pt title, Arial 18pt body, background #E5F5FB, no images, no individuals on screen). Each subtopic carries an AI usage tip with a copy-paste Claude prompt that produces a working governance artefact. External references use the ITU convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the seven video scripts that together make up Topic 3 of Knowledge Product 1 (Government Enterprise Architecture), along with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 3 is the practice-building topic — the one that turns a one-time architecture exercise into a permanent way of working. It takes an architect from \"I have run an assessment\" to \"I can stand up and run the living EA — the single repository the architecture lives in, the tooling that holds it without locking us in, the discipline that keeps it current, and the governance — the EA Board, the project-review gate, the health metrics and the sustainment moves — that keeps it alive past its second year.\" It is the practitioner rendering of Phase 5 of the lifecycle, Execute and Govern."),

  H3("1.2 Alignment with ITU's Knowledge Products and Video Materials Guide"),
  P("The same compliance items that shaped Topics 1 and 2 apply here. (1) Topic-and-subtopic numbering per Guide §1.i — subtopics 3.1 through 3.7. (2) Each video stands alone — no in-video introduction, conclusion, or reference to another video, per Guide §3.i. (3) Slides are text-only in Arial Bold 28pt title / Arial 18pt body / background #E5F5FB per Guide §3.i Slides Branding. (4) No individuals on screen — AI avatar or computer-screen-only voice-over per Guide §3 Note. (5) An AI usage tip is embedded in every subtopic per Guide §2.ii and ToR §4.3, each producing a working governance artefact — a repository skeleton, a tooling scorecard, an update policy, an EA Board Terms of Reference, a review-gate checklist, a health scorecard, a sustainment risk register."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 3 at a glance — the seven subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all seven videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without further reference to a storyboard."),

  pageBreak()
);

// ---------- TOPIC 2 AT A GLANCE ----------
body.push(
  H1("2. Topic 3 at a glance"),
  P("Seven standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-two minutes. Each video has a single message and a single learning outcome, and leads with the capability the architect gains rather than with a technical term. The videos are designed to be discoverable individually via YouTube search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2900, 4500, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["3.1", "Set up the one place your architecture lives",
      "An EA repository is the single agreed place the architecture lives — the layers, the relationships and the decisions — so there is one picture of your government, not many private copies.", "~5 min"],
    ["3.2", "Choose EA tooling without locking yourself in",
      "Choose your EA tooling like any system — reuse before buy, keep your data in open formats you control, and never let the EA tool itself become the vendor trap it exists to help you avoid.", "~4 min"],
    ["3.3", "Keep the repository true — the update discipline",
      "A repository is only worth what it is current. One owner, event-driven updates, a light conformance check — so the architecture tracks reality instead of slowly becoming fiction.", "~4 min"],
    ["3.4", "Stand up an EA Board that can actually say no",
      "An EA Board with binding authority — the right chair and members, and a cadence that doesn't block delivery — is what turns the architecture into the place every digital decision passes through.", "~5 min"],
    ["3.5", "Review projects against the architecture",
      "A short, consistent set of questions every project answers before funding — with logged decisions and time-boxed exceptions — is what turns re-use from a wish into the default path.", "~5 min"],
    ["3.6", "Show the EA is working — the few metrics that matter",
      "A handful of honest metrics — coverage, re-use rate, open exceptions, decisions made — show the minister the EA is working and tell you where it isn't, without drowning anyone in vanity numbers.", "~4 min"],
    ["3.7", "Keep the practice alive past year two",
      "EA programmes rarely fail technically; they fade. Name the four fade-modes — team pulled, repository stale, Board gone advisory, sponsor changed — and counter each by institutionalising the practice.", "~5 min"]
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
  title: "Set up the one place your architecture lives",
  runtime: "~5 min",
  words: 610,
  paeraAnchor: "§4.2.2 Architecture (EA function); §3.1 Governance & Policy; Annex 2 Metamodel",
  singleMessage: "An EA repository is the single agreed place the architecture lives — the four layers, the entities and the decisions — so that one picture of your government exists instead of many private copies. Set it up first; everything else governs what goes into it.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Set up the one place your architecture lives'. Voice-over begins." },
    { text: "You have run an assessment. You have the four-layer picture of a sector. Now the question is: where does it live? If the answer is a slide deck on your laptop, the architecture will be out of date within a month and disagreed with within two. An Enterprise Architecture needs a home — one place where the current picture lives, that everyone works from. That home is the repository." },
    { cue: "Slide 2 — Title: 'What a repository is'. Body, three rows: 'Not a building, not a particular software product.' 'The single agreed store of: the four layers, the entities and how they relate, the decisions and why.' 'One source of truth.'" },
    { text: "A repository is not a building, and it is not a particular software product. It is the single, agreed store of your architecture. It holds three things. The four layers — the capabilities, data domains, applications and technology you mapped. The relationships — how they connect, using the shared entities. And the decisions — what the EA Board ruled, and why. One place. One version everyone trusts." },
    { cue: "Slide 3 — Title: 'Why one place matters'. Body, single text block: 'The moment there are two copies, they drift, then disagree. People stop arguing about the architecture and start arguing about whose copy is right. A second copy does not add a backup — it destroys the single source of truth.'" },
    { text: "Why insist on one place? Because the moment there are two copies, they drift, and then they disagree. One ministry works from last year's picture; another from a newer one. People stop arguing about the architecture and start arguing about whose copy is right. A second copy does not add a backup — it destroys the single source of truth. One place, or effectively none." },
    { cue: "Slide 4 — Title: 'What it holds, concretely'. Body, four rows (Progressa): 'Data domains and owners — Person → PNIA, Learner → PLR, Result → PNEA.' 'The capability map and application portfolio.' 'The shared technology.' 'The decision log — what the Board ruled, and why.'" },
    { text: "Concretely, take Progressa's education sector. The repository holds the data domains and their owners — Person owned by the Identity Authority, Learner by the Learner Registry, examination results by the Examination Authority. It holds the capability map, the application portfolio, the shared technology. And it holds the decisions: when the Board ruled that the Examination Authority must consume the Learner Registry rather than keep its own list, that ruling lives in the repository, with its reason. Anyone can look up not just what the architecture is, but why it is that way." },
    { cue: "Slide 5 — Title: 'Start simple'. Body, single text block: 'A well-structured spreadsheet or shared wiki is a real repository if it holds the layers, the relationships and the decisions, and everyone uses it as the one source. Structure matters more than software.'" },
    { text: "You do not need to buy anything to start. A well-structured spreadsheet, or a shared wiki, is a real repository if it holds the four layers, the relationships and the decisions, and if everyone uses it as the one source. Structure matters more than software. Many countries run a perfectly good early EA on a spreadsheet and a document store. The discipline of one place is what counts — not the price of the tool. When a spreadsheet starts to hurt, you graduate to a dedicated tool; the choice of tool is its own deliberate decision." },
    { cue: "Slide 6 — Title: 'The repository is the shared object'. Body, two text blocks: 'When the minister briefs cabinet and the architect designs a system, they look at the same picture — because there is only one.' 'The repository is what makes the architecture a shared language instead of two private ones.'" },
    { text: "One more reason the repository matters. It is the object both sides point at. When your minister briefs cabinet and when your architect designs a system, they are looking at the same picture — because there is only one. The repository is what makes the architecture a shared language between the business side and the IT side, instead of two private ones. Without it, each side keeps its own version, and the conversation breaks down." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An EA repository is the single agreed place your architecture lives — the layers, the relationships and the decisions — so there is one picture of your government, not many.'" },
    { text: "So before tooling, before governance, set up the one place. The single store of the layers, the relationships and the decisions. Get that right, and everything else in this topic is about protecting what goes into it. Get it wrong — let copies multiply — and no amount of governance will save the architecture." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §4.2.2 Architecture; §3.1 Governance & Policy; Annex 2 Metamodel. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Set up the one place your architecture lives'.",
      "Standard ITU template. Subtitle (KP1 / 3.1). No images."],
    ["2", "What-a-repository-is slide. Three text rows: not a product / the three things it holds / one source of truth.",
      "The core definition. Text-only."],
    ["3", "Why-one-place slide. Single text block on copies drifting.",
      "The 'a second copy destroys the single source of truth' line is the operative beat."],
    ["4", "What-it-holds slide. Four Progressa rows: data domains+owners, capability map, technology, decision log.",
      "Fictional Progressa institutions as plain-text labels — no emblems. Ties back to the layers."],
    ["5", "Start-simple slide. Single text block: spreadsheet/wiki is a real repository; structure over software.",
      "Lowers the barrier — a repository is a discipline, not a purchase."],
    ["6", "Shared-object slide. Two text blocks on both sides pointing at one picture.",
      "Carries the lingua-franca thread — the repository as the shared object. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Design your EA repository's structure",
    problem: "An architect ready to stand up a repository needs a structure — the sections, the fields each captures, and the single-source rules — so the repository is usable from day one rather than an empty shell.",
    prompt: "I am setting up an EA repository for [country X]'s [sector] sector, starting in [a spreadsheet / a wiki / a dedicated tool]. I have a four-layer picture with [briefly: how many capabilities, data domains, applications you have captured]. Design the repository structure. Produce: (1) the sections/tabs it should have — at least Capabilities, Data Domains (with one named owner each), Applications (mapped to capabilities and data domains), Technology, and a Decision Log; (2) for each section, the fields it should capture; (3) the relationships to record between sections, using the PAERA metamodel entities; (4) the single-source rules — who may edit, how a change is recorded, how you prevent second copies. Output: a section-by-section schema plus a short 'single-source rules' list.",
    io: "Input: the sector, the starting medium, and a rough size of what you have captured. Output: a repository schema plus single-source rules.",
    safeguard: "Structure is the easy part. The repository only stays a single source if one named person maintains it and everyone is required to use it — design that rule and name that person, or the cleanest schema will still fracture into private copies."
  },
  metadataRows: [
    ["Working title",          "Set up the one place your architecture lives"],
    ["YouTube-optimised title", "What is an EA repository — and why your architecture needs one single source of truth"],
    ["Description (60 words)", "An architecture that lives in a slide deck is out of date within a month. This video shows public-sector architects what an EA repository is — the single agreed store of the four layers, the relationships and the decisions — why one place matters, what it holds (with a worked education example), and how to start on a spreadsheet. AI repository-structure prompt in the description."],
    ["Tags",                    "EA repository, single source of truth, enterprise architecture, PAERA, architecture governance, metamodel, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — repository-structure prompt)"],
    ["PAERA citations",         "§4.2.2 Architecture; §3.1 Governance & Policy; Annex 2 Metamodel"],
    ["External-link list",      "PAERA v1.0 §4.2.2 (Architecture); PAERA v1.0 §3.1 (Governance & Policy); PAERA v1.0 Annex 2 (Metamodel)"]
  ]
}));

// ---------- 3.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 3.2",
  title: "Choose EA tooling without locking yourself in",
  runtime: "~4 min",
  words: 540,
  paeraAnchor: "§5.6 Sourcing Strategy (build / buy / share / sandbox); §3.3 Digital Infrastructure principles (technology neutrality)",
  singleMessage: "Choose your EA tooling the way you would choose any system — reuse before buy, buy before build, keep your data in open formats you control, and never let the EA tool itself become the vendor trap it is meant to help you avoid.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Choose EA tooling without locking yourself in'. Voice-over begins." },
    { text: "At some point a spreadsheet stops coping. You have hundreds of entities, several sectors, relationships you cannot see in rows and columns. It is time for a dedicated EA tool. And here is the danger: in buying a tool to help your government avoid vendor lock-in, you can lock yourself into the tool. Here is how to choose without falling into that trap." },
    { cue: "Slide 2 — Title: 'When to graduate'. Body, three rows: 'You cannot see the relationships any more.' 'Several people edit and their changes collide.' 'You cannot answer a cross-layer question without an afternoon of manual work.' Below: 'Then graduate — not before.'" },
    { text: "First, know when to graduate. The signs: you cannot see the relationships any more, because they are scattered across tabs. Several people edit and their changes collide. You cannot answer a simple cross-layer question — which systems touch the Person domain — without an afternoon of manual work. When the spreadsheet hurts in these specific ways, graduate. Not before. Buying a heavy tool too early just gives you an empty, expensive database." },
    { cue: "Slide 3 — Title: 'Apply your own sourcing rule'. Body, single text block: 'Reuse before buy, buy before build. Is there a shared government tool? An open-source one that fits? Only then a bought product. Building your own EA tool is almost never right — the rule you enforce on every ministry applies to your own tool too.'" },
    { text: "Then apply the same sourcing rule you apply to every system — reuse before buy, buy before build. Is there already a shared tooling platform your government runs that you can use? Is there an open-source EA tool that fits? Only then a bought product. Building your own EA tool is almost never right — it is the most bespoke choice for a problem many others have already solved. The rule you enforce on every ministry's project applies to your own tool too." },
    { cue: "Slide 4 — Title: 'Keep your data in open formats'. Body, single text block: 'Before adopting any tool, ask: can I export everything, in a format I can read without this tool, whenever I want? If no, the tool owns your architecture, not you. The content is the asset; the tool is a viewer.'" },
    { text: "The single most important rule: keep your architecture content in an open format you control. Before you adopt any tool, ask one question — can I export everything, in a format I can read without this tool, whenever I want? If the answer is no, the tool owns your architecture, not you. The content — the layers, the relationships, the decisions — is the asset. The tool is just a viewer. You must be able to change the viewer without losing the asset." },
    { cue: "Slide 5 — Title: 'The tool is not the architecture'. Body, single text block: 'Every EA tool ships with its own built-in metamodel. Bend the tool to fit your metamodel and principles — not the other way around. If a tool cannot represent your metamodel, question the tool, not the metamodel.'" },
    { text: "One more trap. Every EA tool ships with its own built-in way of organising things — its own metamodel. The mistake is to let the tool's model quietly replace the one you adopted. You bend the tool to fit your entities and your principles — not the other way around. If a tool cannot represent your metamodel, that is a reason to question the tool, not to change your metamodel. The architecture is the content and the model. The tool serves them." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Choose EA tooling like any system — reuse before buy, keep your data in open formats you control, and bend the tool to your metamodel, never the reverse.'" },
    { text: "So choose your tooling the way you would choose any government system. Graduate when the spreadsheet truly hurts. Reuse before buy, buy before build. Keep your content in open formats you control, so you can always leave. And bend the tool to your metamodel. Do that, and the tool helps you. Skip it, and you have bought yourself the very lock-in an EA exists to prevent." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.6 Sourcing Strategy; §3.3 Digital Infrastructure principles (technology neutrality). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Choose EA tooling without locking yourself in'.",
      "Standard ITU template. Subtitle (KP1 / 3.2). No images."],
    ["2", "When-to-graduate slide. Three text rows of the specific pain signs.",
      "Specific signs, not 'when you feel ready'. Text-only."],
    ["3", "Sourcing-rule slide. Single text block: reuse/buy/build applied to the tool itself.",
      "The reflexive application of the rule is the point — the architect's own tool is not exempt."],
    ["4", "Open-formats slide. Single text block with the one export question.",
      "The most important rule of the video. The 'content is the asset, tool is a viewer' line."],
    ["5", "Tool-is-not-the-architecture slide. Single text block on the built-in metamodel trap.",
      "Ties back to the metamodel discipline — bend the tool, not the model."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the sourcing reference."]
  ],
  aiTip: {
    title: "Score EA tool options against lock-in and fit",
    problem: "An architect choosing a dedicated EA tool needs to compare candidates on the things that matter — open export, metamodel fit, sourcing posture and exit cost — rather than on the demo's polish.",
    prompt: "I am choosing an EA tool for [country X]. Here are the candidates [list 2–4: names or types — a shared government platform, an open-source tool, a commercial product] and my requirements [list: must represent the PAERA metamodel entities, must export to an open format, expected number of entities/users, budget constraints]. Produce a comparison table scoring each candidate on: (1) open export — can I get all my data out in a format I can read without the tool; (2) metamodel fit — can it represent my entities and relationships; (3) sourcing posture — is it reuse, buy, or build, and is that the right order; (4) cost model and exit cost — how hard to leave in two years. Then give a recommendation with one line of reasoning. Output: a comparison table plus a recommendation.",
    io: "Input: 2–4 candidate tools and your requirements. Output: a scored comparison table plus a recommendation.",
    safeguard: "Vendor claims of 'open' and 'exports everything' must be tested with a real export of real data before you sign — a demo is not a test. Score the export you actually performed, not the one the brochure promises."
  },
  metadataRows: [
    ["Working title",          "Choose EA tooling without locking yourself in"],
    ["YouTube-optimised title", "Choosing an Enterprise Architecture tool without creating new vendor lock-in"],
    ["Description (60 words)", "An EA tool meant to help your government avoid lock-in can lock you in itself. This video shows public-sector architects when to graduate from a spreadsheet, how to apply reuse-before-buy to the tool itself, why your data must stay in open formats you control, and how to bend the tool to your metamodel — not the reverse. AI tool-comparison prompt in the description."],
    ["Tags",                    "EA tooling, enterprise architecture tools, vendor lock-in, open formats, sourcing, technology neutrality, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.2 (reference frameworks — sourcing); §4.3 (AI integration — tool-comparison prompt)"],
    ["PAERA citations",         "§5.6 Sourcing Strategy; §3.3 Digital Infrastructure principles (technology neutrality)"],
    ["External-link list",      "PAERA v1.0 §5.6 (Sourcing Strategy); PAERA v1.0 §3.3 (Digital Infrastructure principles)"]
  ]
}));

// ---------- 3.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 3.3",
  title: "Keep the repository true — the update discipline",
  runtime: "~4 min",
  words: 560,
  paeraAnchor: "§4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "A repository is only worth what it is current. Decide who owns it, what event triggers an update, and how a change is checked — so the architecture tracks reality instead of slowly becoming a confident work of fiction.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Keep the repository true — the update discipline'. Voice-over begins." },
    { text: "A repository has one enemy, and it is not technical. It is staleness. An architecture that is six months behind reality is worse than none — because people trust it, and it lies to them. The work of keeping the repository true is unglamorous and constant, and it is what separates a living EA from a binder on a shelf." },
    { cue: "Slide 2 — Title: 'Stale is worse than absent'. Body, single text block: 'A missing architecture makes people ask questions. A wrong architecture answers them — wrongly. If the repository says one thing and reality is another, every decision built on it is built on a falsehood. Currency is the whole value.'" },
    { text: "Start from why this matters. A missing architecture makes people ask questions. A wrong architecture answers them — wrongly. If the repository says the Examination Authority consumes the Learner Registry, and in reality it quietly built its own copy last quarter, then every decision made on the repository is built on a falsehood. Stale is worse than absent. Currency is not a nice-to-have. It is the whole value." },
    { cue: "Slide 3 — Title: 'Name one owner'. Body, single text block: 'One person — the chief architect or a named custodian — is accountable for the repository being current. Not a committee. When everyone owns currency, no one does.'" },
    { text: "First, name one owner. One person — usually the chief architect or a named custodian on the EA team — is accountable for the repository being current. Not a committee. Not everyone. When everyone owns currency, no one does. One name, one accountability. That person does not do all the updating, but they are answerable for whether the picture is true." },
    { cue: "Slide 4 — Title: 'Define the trigger'. Body, four rows: 'A system goes live → update the application layer.' 'A system is retired → remove it.' 'A new data domain appears → add it with its owner.' 'The Board decides → record it.' Below: 'Events drive updates, not the calendar.'" },
    { text: "Second, define what triggers an update. Not review it every year — that guarantees it is eleven months stale. Tie updates to events. A new system goes live: update the application layer. A system is retired: remove it. A new data domain appears: add it with its owner. The Board makes a decision: record it. A ministry reorganises: revise the capabilities. When a real-world change happens, the repository changes with it. Events drive updates, not the calendar." },
    { cue: "Slide 5 — Title: 'Check the change'. Body, single text block: 'A light gate: does the update use the shared entities correctly? Does every data domain still have exactly one owner? Is any decision logged with its reason? Small check; skipping it lets the repository fill with private-language entries and orphans.'" },
    { text: "Third, check each change. Not a heavy process — a light gate. When something is added, confirm it uses the shared entities correctly, that every data domain still has exactly one owner, and that any decision is logged with its reason. This keeps the repository conformant as it grows. The check is small. Skipping it lets the repository fill with private-language entries and orphaned items until it is as messy as the reality it was meant to clarify." },
    { cue: "Slide 6 — Title: 'Make it part of the gate'. Body, single text block: 'The cheapest moment to update the repository is when a project comes to the Board for review — it tells you what it will build, consume and touch. Tie the two together: the governance process and the update are one motion, done once.'" },
    { text: "The cheapest moment to update the repository is when a project comes to the Board for review. The project tells you what it will build, what it will consume, what data it touches. That is exactly the information the repository needs. So tie the two together: a project that passes the gate leaves its architecture change in the repository as it goes. The governance process and the update discipline are the same motion, done once." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A repository is only worth what it is current — one owner, event-driven updates, a light conformance check — so the architecture tracks reality instead of becoming fiction.'" },
    { text: "So keep the repository true. One named owner accountable for currency. Updates triggered by real events, not a yearly review. A light check that each change stays conformant. Do this, and the repository stays a trustworthy picture of your government. Neglect it, and within a year you have a confident, detailed, widely-trusted work of fiction." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Keep the repository true — the update discipline'.",
      "Standard ITU template. Subtitle (KP1 / 3.3). No images."],
    ["2", "Stale-is-worse slide. Single text block.",
      "The counter-intuitive core: a trusted wrong picture beats no picture only in appearance. Text-only."],
    ["3", "One-owner slide. Single text block.",
      "'When everyone owns currency, no one does' is the operative beat."],
    ["4", "Trigger slide. Four event→update rows plus the events-not-calendar line.",
      "The practical payload — updates tied to events. Readable on mobile."],
    ["5", "Check-the-change slide. Single text block on the light conformance gate.",
      "Keeps the repository conformant as it grows without heavy process."],
    ["6", "Tie-to-the-gate slide. Single text block.",
      "Links the update discipline to the governance gate — one motion, done once."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; the 'work of fiction' image."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Draft the repository update policy",
    problem: "An architect needs a one-page update policy that names the owner, the trigger events, the conformance check and the tie to the Board gate — so currency is a defined routine, not a good intention.",
    prompt: "Draft a one-page EA repository update policy for [country X]'s EA practice. My team is [describe: roles and size], and the kinds of change we see are [list: systems going live, systems retired, reorganisations, Board decisions, new registries]. The policy should state: (1) the single owner accountable for currency; (2) the trigger events, and for each, exactly what gets updated in the repository; (3) the light conformance check applied to each change — shared-entity use, one owner per data domain, decisions logged with reasons; (4) how updates are captured at the project-review gate so the governance process and the update are one motion. Tone: a short operational policy. Output: a one-page policy under those four headings.",
    io: "Input: your team roles and the change events you see. Output: a one-page update policy.",
    safeguard: "A policy only works if someone is positioned to notice each trigger. A retired system often has no one whose job is to report it — confirm a real owner watches each trigger event, or the repository will still drift despite the policy."
  },
  metadataRows: [
    ["Working title",          "Keep the repository true — the update discipline"],
    ["YouTube-optimised title", "Why EA repositories go stale — and the update discipline that keeps them true"],
    ["Description (60 words)", "A six-month-stale architecture is worse than none: people trust it, and it lies to them. This video shows public-sector architects the update discipline that keeps a repository true — one accountable owner, updates triggered by real events rather than a yearly review, a light conformance check, and tying updates to the Board's review gate. AI update-policy prompt in the description."],
    ["Tags",                    "EA repository, architecture currency, data governance, enterprise architecture, PAERA, single source of truth, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — update-policy prompt)"],
    ["PAERA citations",         "§4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §4.2.2 (Architecture); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 3.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 3.4",
  title: "Stand up an EA Board that can actually say no",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "§4.2.1 Management; §3.1 Governance & Policy; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "An EA Board with binding authority — the right chair, the right members, a regular cadence, and a mandate that lets it say no — is what turns the architecture from a document into the place every digital decision passes through.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Stand up an EA Board that can actually say no'. Voice-over begins." },
    { text: "The repository holds the architecture. The Board is what gives it authority. Without a governance board, the architecture is a document people can ignore. With one — a real one, that can say no — the architecture becomes the place every significant digital decision passes through. The difference between those two outcomes is whether the Board has binding authority. Everything else about the Board is detail; that is the point." },
    { cue: "Slide 2 — Title: 'Binding, not advisory'. Body, single text block: 'An advisory board offers an opinion; the project proceeds anyway — governance theatre. A binding board's rulings are a condition of proceeding. If you cannot get binding authority, you have a discussion group, not a governance board.'" },
    { text: "Start with the one thing that matters. The Board must be binding, not advisory. An advisory board looks at a project, offers an opinion, and the project does whatever it was going to do. That is governance theatre — it produces minutes, not decisions. A binding board's rulings are a condition of proceeding: a project told to consume the shared identity platform does so, or it does not get funded. If you cannot get binding authority, you do not yet have a governance board. You have a discussion group." },
    { cue: "Slide 3 — Title: 'Who chairs it'. Body, single text block: 'The CDO or equivalent — or, in a smaller government, the minister directly. Senior enough that when the Board declines a powerful ministry's project, the no sticks. Not the architect — the architect advises; the chair decides.'" },
    { text: "Who chairs it decides whether no sticks. The chair is your Chief Digitalisation Officer or its equivalent — or, in a smaller government, the minister directly. Senior enough that when the Board declines a powerful ministry's pet project, the decision holds. Note who does not chair it: you, the architect. You prepare the Board, you advise it, you bring the analysis. The authority to decide sits with someone who can carry it politically. The architect informs; the chair decides." },
    { cue: "Slide 4 — Title: 'Who sits on it'. Body, single text block: 'The sector ministry CIOs. The owners of the major state registries. The data-protection regulator where data-sharing is in play. One external advisor where useful. The people whose systems the decisions affect.'" },
    { text: "Who sits on it: the people whose systems the decisions affect. The sector ministry CIOs. The owners of the major state registries — the identity authority, the population register. Where data-sharing is in play, the data-protection regulator. And, where useful, one external advisor for perspective. Keep it small enough to decide and broad enough that the decisions are owned by the people who must live with them. A Board of the right twelve is better than a Board of the convenient forty." },
    { cue: "Slide 5 — Title: 'The cadence'. Body, two rows: 'Quarterly main meetings — review the architecture as a whole.' 'A fast ad-hoc path for urgent project decisions, so the Board never becomes the bottleneck.'" },
    { text: "Set a cadence that governs without becoming the bottleneck. Quarterly main meetings to review the architecture as a whole — what changed, what is drifting, what to prioritise. And a fast ad-hoc path for urgent project decisions, so a programme on a deadline is not stuck for three months waiting for the next quarterly. If the Board is slow, projects will route around it, and you are back to no governance. Binding authority plus responsiveness is what keeps projects coming through the front door." },
    { cue: "Slide 6 — Title: 'The Board is the shared rhythm'. Body, three text rows: 'The repository gives the shared picture.' 'The metamodel gives shared words.' 'The Board gives the shared rhythm — a standing forum where business and IT decide together.'" },
    { text: "There is a deeper reason the Board matters. Redesigning how government serves citizens needs the business side and the IT side to decide together — and they need a regular place to do it. The Board is that place. The repository gives them the shared picture; the metamodel gives them shared words; the Board gives them the shared rhythm — a standing forum where, four times a year and whenever it is urgent, business and IT sit down and decide together. That standing rhythm is part of what an EA provides that no single project ever can." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An EA Board with binding authority, the right chair and members, and a cadence that doesn't block delivery is what turns the architecture into the place every digital decision passes through.'" },
    { text: "So stand up a Board that can actually say no. Binding, not advisory. Chaired by someone senior enough that the no sticks. Made of the people whose systems are affected. Meeting on a rhythm that governs without blocking. Get that in place and the architecture has teeth. Leave it advisory, and you have a beautiful repository that everyone is free to ignore." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §4.2.1 Management; §3.1 Governance & Policy; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Stand up an EA Board that can actually say no'.",
      "Standard ITU template. Subtitle (KP1 / 3.4). No images."],
    ["2", "Binding-not-advisory slide. Single text block.",
      "The single most important point of the video. 'A discussion group, not a governance board' is the beat."],
    ["3", "Who-chairs-it slide. Single text block.",
      "'The architect informs; the chair decides' — distinguishes advice from authority. Text-only."],
    ["4", "Who-sits-on-it slide. Single text block.",
      "Membership by affected-system, not convenience. 'The right twelve beats the convenient forty'."],
    ["5", "Cadence slide. Two text rows: quarterly main + fast ad-hoc.",
      "Responsiveness prevents projects routing around the Board."],
    ["6", "Shared-rhythm slide. Three text rows: shared picture / shared words / shared rhythm.",
      "Carries the lingua-franca argument in architect register — the Board as the shared rhythm. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Draft your EA Board's Terms of Reference",
    problem: "An architect standing up the Board needs a Terms of Reference the chair can adopt — one that nails the binding decision scope and the escalation path, not just a membership list.",
    prompt: "Draft a Terms of Reference for an EA Governance Board in [country X]. Include: (1) Purpose — why the Board exists and what it governs; (2) Binding decision scope — 5–8 specific decision types within the Board's authority (e.g. approval of new digital projects above a threshold, cross-domain integration approvals, technology choices that create vendor dependencies, exceptions to the architecture); (3) Membership — Chair (CDO/CTO equivalent), permanent members (sector CIOs, major registry owners, the data-protection regulator), optional external advisor; (4) Cadence — quarterly main meetings plus a fast ad-hoc path; (5) Reporting line — to whom the Board reports up; (6) Escalation — how decisions the Board cannot resolve are escalated; (7) Mandate review — how often the ToR itself is reviewed. Tone: a formal institutional document. Output: a structured ToR ready to circulate for adoption.",
    io: "Input: the country and its known role-holders. Output: a structured EA Board Terms of Reference.",
    safeguard: "Have legal counsel review the binding-decision-scope against existing sectoral legislation before adoption — a Board that claims authority it does not legally hold will be overruled the first time a powerful ministry tests it, and the overrule sets the precedent."
  },
  metadataRows: [
    ["Working title",          "Stand up an EA Board that can actually say no"],
    ["YouTube-optimised title", "How to set up an Enterprise Architecture governance board with real (binding) authority"],
    ["Description (60 words)", "An advisory EA board is governance theatre — projects nod and proceed. This video shows public-sector architects how to stand up a Board that can actually say no: binding authority, a chair senior enough that the no sticks, members whose systems are affected, and a cadence that governs without blocking delivery. It is also the shared rhythm for business and IT. AI Board-ToR prompt in the description."],
    ["Tags",                    "EA governance board, enterprise architecture governance, binding authority, CDO, digital government, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (governance within methodology); §4.3 (AI integration — Board-ToR prompt)"],
    ["PAERA citations",         "§4.2.1 Management; §3.1 Governance & Policy; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §4.2.1 (Management); PAERA v1.0 §3.1 (Governance & Policy); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 3.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 3.5",
  title: "Review projects against the architecture",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "§5.4 Organisational Assessment & Roadmap; §5.2 Architectural principles; §5.6 Sourcing Strategy",
  singleMessage: "The architecture review gate — a short, consistent set of questions every project passes through before funding — is what turns principles and re-use from good intentions into the actual path of least resistance.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Review projects against the architecture'. Voice-over begins." },
    { text: "A Board with authority needs something to do with it. That something is the architecture review gate: the point where every significant new project passes through a short, consistent set of questions before it gets funded. This is where the architecture does its real work — not on a wall, but at the moment a project would otherwise quietly build its own version of something the country already has." },
    { cue: "Slide 2 — Title: 'The few questions'. Body, five rows: 'Does a shared building block already exist for this?' 'What data domains do you touch — do you consume the owner's copy?' 'Do you meet the architecture principles?' 'Is your sourcing choice deliberate?' 'Can you export your data in an open format?'" },
    { text: "The gate is a few questions, asked of every project, the same way every time. Does a shared building block already exist for what you want to build? What data domains will you touch, and do you consume the owning body's copy rather than make your own? Do you meet the architecture principles — security by design, once-only, the rest? What is your sourcing choice, and is it deliberate? Can you export your data in an open format? Five questions. Asked consistently. That consistency is what makes the gate fair and predictable, so projects prepare for it rather than resent it." },
    { cue: "Slide 3 — Title: 'This is where re-use actually happens'. Body, single text block: 'Left alone, a project builds its own identity — rational for the project, ruinous for the country. The gate is the one place the whole-of-government view meets that decision while it can still be changed. The Board says: consume the shared one.'" },
    { text: "Here is why this gate matters more than any document. Left alone, a project builds its own identity function, its own learner list, its own payment integration — because, inside the project, building is faster than reusing. That choice is rational for the project and ruinous for the country. The gate is the one place where the whole-of-government view meets that decision, while it can still be changed. When a project proposes to build what already exists as a shared block, the Board, at the gate, says: consume the shared one. That single moment, repeated across every project, is how re-use actually happens. Not because a strategy required it — because the gate enforced it." },
    { cue: "Slide 4 — Title: 'Exceptions, with a sunset'. Body, single text block: 'Sometimes the shared block genuinely cannot serve the project. Grant an exception — but written down, with its reason, and given a sunset date. An exception without an expiry quietly becomes the permanent normal.'" },
    { text: "Sometimes the project is right. The shared identity platform genuinely cannot do what this project needs yet. So the gate is not a wall — it grants exceptions. But every exception is written down, with its reason, and given a sunset — a date when it is revisited. An exception without an expiry quietly becomes the permanent normal, and ten of them become the fragmentation you were trying to prevent. Grant exceptions honestly, record them, and make them temporary by default." },
    { cue: "Slide 5 — Title: 'The decision log'. Body, single text block: 'Every gate decision and exception goes into the repository with its reason — the architecture's memory. Two years on, the answer to \"why is it this way\" is in the log, not lost with the architect who moved on. It is also what keeps the gate consistent.'" },
    { text: "Every decision the gate makes goes into the repository's decision log — what was decided, and why. This is the architecture's memory. Two years on, when someone asks why the Examination Authority is not allowed its own learner list, the answer is in the log, with the reasoning, not lost with the architect who has moved on. The decision log is also what makes the gate consistent: this project is treated the way the last similar one was, because the precedent is written down." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The review gate — a few consistent questions every project answers before funding, with logged decisions and time-boxed exceptions — is what turns re-use from a wish into the default.'" },
    { text: "So build the gate. A few questions, asked of every project the same way. A clear ruling — consume the shared block, or a written, time-boxed exception. Every decision logged with its reason. This is where principles stop being words and become the path projects actually take. The gate is the engine of the whole EA. Everything else — the repository, the Board, the principles — exists so that this moment, repeated, goes the right way." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.4 Organisational Assessment & Roadmap; §5.2 Architectural principles; §5.6 Sourcing Strategy. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Review projects against the architecture'.",
      "Standard ITU template. Subtitle (KP1 / 3.5). No images."],
    ["2", "The-few-questions slide. Five text rows of the intake questions.",
      "Candidate centrepiece visual — the gate checklist. Consistency is the point. Readable on mobile."],
    ["3", "Where-re-use-happens slide. Single text block.",
      "Carries the planning-enables-re-use argument in full, in architect register. The pivotal slide."],
    ["4", "Exceptions slide. Single text block on written, time-boxed exceptions.",
      "The 'exception without an expiry becomes the normal' line is the operative beat."],
    ["5", "Decision-log slide. Single text block.",
      "The architecture's memory; also what makes the gate consistent across time. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; the gate as the engine of the EA."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Build your architecture review gate checklist",
    problem: "An architect operating the Board needs a project-intake checklist — the questions, what a pass looks like, the exception form and the decision-log fields — so every project is reviewed the same consistent way.",
    prompt: "Build an architecture review gate checklist for [country X]'s EA Board. Here are my adopted principles [paste or summarise] and the shared building blocks that already exist [list: national identity, payments, data exchange, shared registries — or note if unknown]. Produce: (1) the project-intake questions — at least: does a shared block exist for this; which data domains, and does it consume the owner's copy; does it meet each principle; is the sourcing choice deliberate; can it export to an open format; (2) for each question, what a 'pass' looks like; (3) an exception form — reason, the block it bypasses, a sunset date, who approved; (4) the decision-log fields to record in the repository. Output: the checklist, the pass criteria, the exception form, and the log fields.",
    io: "Input: your principles and known shared building blocks. Output: an intake checklist, pass criteria, exception form and decision-log fields.",
    safeguard: "A gate only works if it sits before funding, not after. Confirm the checklist is wired into the budget or approval process — a review that happens after money is committed can only rubber-stamp, and projects quickly learn to arrive already funded."
  },
  metadataRows: [
    ["Working title",          "Review projects against the architecture"],
    ["YouTube-optimised title", "The architecture review gate — how an EA Board actually enforces re-use across government"],
    ["Description (60 words)", "Procurement rules can't make re-use the cheapest choice for a project — only a review gate can. This video shows public-sector architects how to build the gate: a few consistent questions every project answers before funding, a clear ruling to consume shared building blocks, written time-boxed exceptions, and a decision log. It is where principles become the path projects take. AI gate-checklist prompt in the description."],
    ["Tags",                    "architecture review, EA governance gate, re-use, building blocks, enterprise architecture, PAERA, sourcing, exceptions, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.2 (reference frameworks — re-use, sourcing); §4.3 (AI integration — gate-checklist prompt)"],
    ["PAERA citations",         "§5.4 Organisational Assessment & Roadmap; §5.2 Architectural principles; §5.6 Sourcing Strategy"],
    ["External-link list",      "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); PAERA v1.0 §5.2 (Architectural principles); PAERA v1.0 §5.6 (Sourcing Strategy)"]
  ]
}));

// ---------- 3.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 3.6",
  title: "Show the EA is working — the few metrics that matter",
  runtime: "~4 min",
  words: 540,
  paeraAnchor: "§5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap (intermediate-results pattern)",
  singleMessage: "A handful of honest metrics — coverage, re-use rate, open exceptions, decisions made — show the minister and the team that the EA is working, and tell you where it isn't, without drowning anyone in vanity numbers.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Show the EA is working — the few metrics that matter'. Voice-over begins." },
    { text: "Sooner or later your minister asks the fair question: is this EA work actually doing anything? You need an answer that is honest, short, and true. Not a fifty-page report. A handful of metrics that show whether the architecture is working — and, just as usefully, where it is not. Pick them carefully, because the wrong metrics make a stalled EA look healthy." },
    { cue: "Slide 2 — Title: 'Four that matter'. Body, four rows: 'Coverage — how much of government is in the repository, and current.' 'Re-use rate — share of projects consuming shared blocks vs building their own.' 'Open exceptions — how many, how old.' 'Decisions — gate decisions made, and how fast.'" },
    { text: "Four metrics carry most of the signal. Coverage — how much of your government is actually in the repository, and current, not how many pages exist. Re-use rate — of the projects that came through the gate, how many consumed a shared building block instead of building their own. This is the one that shows the EA is paying for itself. Open exceptions — how many waivers are outstanding, and how old; a growing pile of aged exceptions is fragmentation returning. And decisions — how many gate decisions the Board made, and how fast, because a slow gate is one projects route around." },
    { cue: "Slide 3 — Title: 'Re-use rate is the money metric'. Body, single text block: 'Every project that consumed a shared block instead of building its own is a system the country paid for once. Tracked over a year, a rising re-use rate is the closest thing to proof the EA returns its cost — the metric that protects your funding.'" },
    { text: "Of the four, the re-use rate is the one to put in front of the budget authority. Every project that consumed the shared identity platform instead of building its own is a system the country paid for once instead of many times. Tracked over a year, a rising re-use rate is the closest thing you have to proof that the EA is returning its cost. It turns the abstract argument — planning enables re-use — into a number that goes up. That is the metric that protects your funding." },
    { cue: "Slide 4 — Title: 'Avoid vanity metrics'. Body, single text block: 'Diagrams drawn, pages written, meetings held — these measure activity, not effect, and let a stalled EA hide. If a metric would still rise while the architecture quietly stopped mattering, it is the wrong metric.'" },
    { text: "Avoid the vanity metrics. The number of diagrams drawn, pages written, meetings held — these measure activity, not effect. A programme can produce a thousand pages and change nothing. Worse, busy-looking metrics let a stalled EA hide. If a metric would still go up while the architecture quietly stopped mattering, it is the wrong metric. Measure what the EA changes — re-use, coverage, decisions — not how busy the team looks." },
    { cue: "Slide 5 — Title: 'Report up honestly'. Body, single text block: 'A one-page scorecard to the Board and minister each quarter — including what is not working. A scorecard honestly amber where it should be builds the trust that keeps the EA funded across a change of minister. An always-green one is believed once.'" },
    { text: "Report the four on a single page, every quarter, to the Board and the minister. Include what is not working — the coverage gap in a sector nobody will let you near, the aging exceptions a powerful ministry will not close. The temptation is to show only green. Resist it. A scorecard that is honestly amber where it should be is what builds the trust that keeps the EA funded across a change of minister. A scorecard that is always green is one nobody believes the second time." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A one-page quarterly scorecard — coverage, re-use rate, open exceptions, decisions — shows honestly whether the EA is working, and the re-use rate is what proves it pays.'" },
    { text: "So measure a few things, honestly. Coverage. Re-use rate. Open exceptions. Decisions made and how fast. Put them on one page, every quarter, amber where they should be amber. This is how you show the minister the EA is working, how you catch it when it is not, and how you protect the funding that keeps the practice alive." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Show the EA is working — the few metrics that matter'.",
      "Standard ITU template. Subtitle (KP1 / 3.6). No images."],
    ["2", "Four-metrics slide. Four text rows: coverage / re-use rate / open exceptions / decisions.",
      "The reference payload. Keep each to a short phrase plus the spoken gloss. Readable on mobile."],
    ["3", "Re-use-rate slide. Single text block.",
      "The money metric — turns planning-enables-re-use into a number. The funding-protection beat."],
    ["4", "Avoid-vanity-metrics slide. Single text block.",
      "'If a metric would still rise while the architecture stopped mattering, it is wrong' is the test."],
    ["5", "Report-honestly slide. Single text block on the amber-where-it-should-be scorecard.",
      "Honesty as the thing that sustains funding across a sponsor change. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Build your EA health scorecard",
    problem: "An architect needs a one-page quarterly scorecard — the few real metrics, how to compute each, and honest thresholds — to show the Board and minister whether the EA is working.",
    prompt: "Build a one-page quarterly EA health scorecard for [country X]'s EA practice. I can currently measure [describe what data you have: projects through the gate, repository contents, exceptions, sectors covered]. Produce: (1) the four metrics — coverage, re-use rate, open exceptions (count and age), and decisions made (count and time-to-decision) — with a one-line definition and how to compute each from my data; (2) a red/amber/green threshold for each, set honestly; (3) a short 'what's not working' section that names gaps rather than hiding them; (4) the one-line story for the minister. Avoid vanity metrics (pages, diagrams, meetings). Output: a one-page scorecard template.",
    io: "Input: the data you can currently measure. Output: a one-page scorecard template with metrics, computations and thresholds.",
    safeguard: "A metric you cannot actually measure with available data is worse than none. For each, confirm the data source exists before you commit to reporting it — an invented re-use rate is a number that will be challenged, and once one figure is shown to be made up the whole scorecard loses its credibility."
  },
  metadataRows: [
    ["Working title",          "Show the EA is working — the few metrics that matter"],
    ["YouTube-optimised title", "How to measure whether your Enterprise Architecture is actually working (4 metrics, not 40)"],
    ["Description (60 words)", "When the minister asks whether the EA is doing anything, you need an honest, short answer. This video shows public-sector architects the few metrics that matter — coverage, re-use rate, open exceptions, decisions made — why the re-use rate is the one that proves the EA pays, which vanity metrics to avoid, and how to report amber honestly. AI scorecard prompt in the description."],
    ["Tags",                    "EA metrics, architecture KPIs, re-use rate, enterprise architecture, PAERA, governance scorecard, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — scorecard prompt)"],
    ["PAERA citations",         "§5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap"],
    ["External-link list",      "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); PAERA v1.0 §5.7 (Recommended Roadmap)"]
  ]
}));

// ---------- 3.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 3.7",
  title: "Keep the practice alive past year two",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "EA programmes rarely fail technically; they fade — the team gets pulled away, the repository goes stale, the Board drifts to advisory, the sponsor changes. Naming these four fade-modes and the move that counters each is how you keep the practice alive.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Keep the practice alive past year two'. Voice-over begins." },
    { text: "Most EA programmes do not fail in a dramatic way. They fade. The first six months go well — there is energy, a roadmap, a Board. Then, somewhere in the second year, the practice quietly stops mattering, and one day someone notices the repository is a year out of date and the Board has not met in two quarters. The fade is predictable. It comes in four forms. Name them, and you can counter each." },
    { cue: "Slide 2 — Title: 'Fade one — the team gets pulled away'. Body, single text block: 'A flagship programme needs skilled people; your architects are the obvious choice; they are seconded \"for a few months\" and the architecture work stops. Counter: a written protection promise, recommitted whenever the sponsor changes.'" },
    { text: "The first fade: the team gets pulled away. A flagship programme runs into trouble and needs skilled people. Your architects are the obvious choice. They are seconded just for a few months, and the architecture work stops. This is the most common way EA programmes die. The counter is a protection promise — an explicit, written commitment that the EA team will not be pulled onto the urgent project of the week — and it must be recommitted whenever the minister or the sponsor changes, because the new one never feels bound by the old one's promise." },
    { cue: "Slide 3 — Title: 'Fade two — the repository goes stale'. Body, single text block: 'Updates slip, the picture drifts from reality, someone gets burned, trust spreads that it cannot be relied on, people stop using it — and an unused repository is a dead one. Counter: the update discipline tied to the gate, one named owner.'" },
    { text: "The second fade: the repository goes stale. Updates slip during a busy quarter. The picture drifts from reality. Someone relies on it, gets burned, and word spreads that the repository cannot be trusted. Once trust goes, people stop using it, and an unused repository is a dead one. The counter is the update discipline — one named owner accountable for currency, updates tied to real events and to the review gate, so the repository stays true as a by-product of work that happens anyway." },
    { cue: "Slide 4 — Title: 'Fade three — the Board drifts to advisory'. Body, single text block: 'Under delivery pressure, a powerful project is let through despite the Board; then another; the no becomes a suggestion and projects route around it. Counter: protect the binding authority, and report every time the Board is overruled.'" },
    { text: "The third fade: the Board drifts back to advisory. Under delivery pressure, a powerful project is let through despite the Board's objection. Then another. The Board's no quietly becomes a suggestion, projects learn they can route around it, and within a year it is a discussion group again. The counter is to protect the binding authority deliberately — and to track and report every time the Board is overruled. Sunlight on overrides is what keeps the authority real; a Board overruled in silence is a Board being dismantled." },
    { cue: "Slide 5 — Title: 'Fade four — the sponsor changes'. Body, single text block: 'The champion minister or CDO moves on; the successor has their own priorities. Counter: institutionalise it — a legal mandate for the Board, a budget line not an annual favour, and the scorecard that shows a newcomer the value in five minutes.'" },
    { text: "The fourth fade: the sponsor changes. The minister or the digitalisation officer who championed the EA moves on. The successor has their own priorities and no attachment to this one. The counter is to make the EA outlive its sponsor — institutionalise it. A legal mandate for the Board, not just a memo. A budget line, not an annual favour. And the one-page scorecard, so a new sponsor can see in five minutes that the EA is returning its cost. An EA that depends on one champion dies with that champion's tenure. One that is institutionalised survives the handover." },
    { cue: "Slide 6 — Title: 'The first architect rarely sees it mature'. Body, single text block: 'A mature EA practice takes about five years. You are building something designed to outlast you — a repository that stays true without you, a Board that holds without you, a mandate that survives the next election.'" },
    { text: "One honest thing to carry. A mature EA practice takes about five years. The architect who stands it up is rarely the one who sees it mature. That is not a reason for discouragement — it is the job. You are building something designed to outlast you: a repository that stays true without you, a Board that holds without you, a mandate that survives the next election. Build it to survive you, and you have done the work. Build it to depend on you, and it fades the moment you leave." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'EA programmes fade in four ways — team pulled, repository stale, Board gone advisory, sponsor changed — and you counter each by institutionalising the practice so it survives you.'" },
    { text: "So watch for the four fades. The team pulled away — counter with a protected, recommitted promise. The repository stale — counter with the update discipline. The Board gone advisory — counter by protecting and reporting its authority. The sponsor changed — counter by institutionalising the mandate, the budget and the scorecard. Keep the practice alive past year two, and the architecture becomes how your government works. Let it fade, and it becomes another binder on a shelf that once cost a great deal." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Keep the practice alive past year two'.",
      "Standard ITU template. Subtitle (KP1 / 3.7). No images."],
    ["2", "Fade-one slide. Single text block: team pulled away + the protection-promise counter.",
      "Echoes the protection ask from Topic 1, now as a sustainment move. Text-only."],
    ["3", "Fade-two slide. Single text block: repository stale + the update-discipline counter.",
      "'An unused repository is a dead one' is the operative beat."],
    ["4", "Fade-three slide. Single text block: Board to advisory + the report-overrides counter.",
      "'Sunlight on overrides keeps the authority real' is the beat."],
    ["5", "Fade-four slide. Single text block: sponsor changes + the institutionalise counter.",
      "The most strategic counter — mandate, budget line, scorecard. Text-only."],
    ["6", "Outlast-you slide. Single text block on the five-year horizon.",
      "The honest, motivating close — build it to survive you. Echoes Topic 1's political-cycle line, in architect register."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; the four fades and their counters."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Build your EA sustainment risk register",
    problem: "An architect needs to make the four fade-modes manageable — a risk register that scores each in their context, names the counter-move and the owner, and defines an early-warning signal so a fade is caught before it has happened.",
    prompt: "Build an EA sustainment risk register for [country X]'s EA practice. My context: [describe — sponsor and how secure, team size, whether the budget is a line item or an annual favour, whether the Board's mandate is legal or just a memo]. Cover the four fade-modes: (1) the team pulled onto urgent delivery; (2) the repository going stale; (3) the Board drifting to advisory; (4) the sponsor changing. For each, give: likelihood and impact in my context, the counter-move, the owner of that counter, and an early-warning signal that tells me it is starting (e.g. months since the last Board meeting, weeks since the last repository update, number of overrides this quarter). Output: a risk register table plus the list of early-warning signals to watch.",
    io: "Input: your practice's context. Output: a four-row sustainment risk register plus early-warning signals.",
    safeguard: "The early-warning signals are the point — a sustainment risk you only notice once it has happened is unmanageable. Confirm someone is actually watching each signal (months-since-last-Board-meeting is useless if no one checks it), or the register is just a tidy list of the ways the practice will quietly fail."
  },
  metadataRows: [
    ["Working title",          "Keep the practice alive past year two"],
    ["YouTube-optimised title", "Why EA programmes fade in year two — and the four moves that keep them alive"],
    ["Description (60 words)", "EA programmes rarely fail technically — they fade. This video shows public-sector architects the four fade-modes (the team pulled away, the repository going stale, the Board drifting to advisory, the sponsor changing) and the move that counters each, so the practice survives past its second year and outlasts the architect who built it. AI sustainment risk-register prompt in the description."],
    ["Tags",                    "EA sustainability, architecture practice, governance, enterprise architecture, PAERA, institutionalisation, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 3: EA repository, tooling and governance"],
    ["ToR §4 coverage",         "§4.1 (governance and sustainability within methodology); §4.3 (AI integration — sustainment register prompt)"],
    ["PAERA citations",         "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §4.2.1 (Management); PAERA v1.0 §4.2.2 (Architecture); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 3 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and produce the artefact on the other half. For the Architect-facing videos in Topic 3, 'produce the artefact' means draft the corresponding governance deliverable — a repository structure, an EA-tool comparison scorecard, a repository update policy, an EA Board Terms of Reference, an architecture review-gate checklist, an EA health scorecard, a sustainment risk register. Each subtopic's AI usage tip operationalises this directly: the prompt produces the artefact the video is teaching."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain in plain text. No country emblems, no government-agency logos — including for the fictional Progressa institutions referenced in 3.1 and 3.3, which appear as plain-text labels only. The recurring single-sentence summary slide at the end of each subtopic uses the body type at 28pt rather than 18pt to make the line screenshot-friendly for architects who want to reuse the message."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI avatar narrator generated by ITU's production pipeline from an uploaded portrait image, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; FiscalAdmin's scripts are agnostic to the option chosen. There are no 'speaker on camera' cues anywhere in the bundle."),

  H3("4.4 Voice and tone"),
  P("Direct address (\"as the architect,\" \"your country,\" \"the project in front of the Board\"). No third-person distance. Plain language at approximately an eighth-grade English level, held even though the audience is more technical than Topic 1's. The technical vocabulary introduced in Topic 2 — repository, metamodel, building block, data domain — is used here as established, not re-defined at length, though each still gets a plain-words reminder on first use within a given video so the video stands alone. Concrete examples in every beat — a duplicate learner list, a product that becomes the architecture, a Board overruled in silence. Honest about the politics of governance: the powerful ministry that routes around the Board, the always-green scorecard nobody believes, are named rather than avoided. Each subtopic is self-contained: an architect arriving via search finds a video that makes sense without any other."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata. Every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video link list into the YouTube description. The aggregate list across all seven subtopics is compiled in Section 6 for ITU's reference."),

  H3("4.6 GitBook companion content"),
  P("Each subtopic in this bundle ships with the video script, the slide specification, the AI usage tip and the metadata. The GitBook companion content — written, in-depth implementation guidance per the Guide §2 — is produced as a parallel deliverable, structured to mirror the same subtopic numbering. For Topic 3 the GitBook companion carries the worked governance artefacts the videos can only point at: a sample repository schema behind 3.1, a model EA Board Terms of Reference behind 3.4, a worked review-gate checklist and exception form behind 3.5, and a sample quarterly health scorecard behind 3.6. Cross-references between video and GitBook content use the topic/subtopic numbers."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting raised the editorial and structural decisions listed below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 PAERA-fidelity — citations verified against PAERA v1.0"),
  P("Every PAERA reference in Topic 3 was checked against the PAERA v1.0 document before this draft, and the section headings now match the source. Verified exactly: §4.2.1 Management and §4.2.2 Architecture (the EA function, the repository owner and the Board chair, across 3.1, 3.3, 3.4, 3.7); §5.4 Organisational Assessment & Roadmap (the update discipline, the gate and the metrics, 3.3–3.7); §5.7 Recommended Roadmap (the intermediate-results framing, 3.6); and Annex 2 Metamodel (the repository contents, 3.1). Three citations were corrected during the check and are flagged here for ITU's awareness: §3.1 was relabelled from 'Institutional setup' to its actual PAERA heading 'Governance & Policy' (3.1, 3.4); §3.4's reference to §3.1.3 'Readiness Assessment' was replaced with §3.1 Governance & Policy, because Readiness Assessment is a Discover/Assess concept (used correctly in Topic 2) and does not anchor the EA Board; and §5.6 was relabelled from 'Sourcing' to its actual heading 'Sourcing Strategy' (3.2, 3.5). One residual gloss is retained deliberately: §5.2's PAERA heading is simply 'Principles', cited here as 'Architectural principles' for clarity; and the Digital Infrastructure principles are cited at the parent §3.3 (the precise sub-section is §3.3.2 Principles & Policies). Confirm both are acceptable, or they will be tightened to PAERA's exact headings at final lock."),

  H3("5.2 Editorial tone calls"),
  P("Four tone choices are sharp and deserve a deliberate keep / soften / cut decision: 'a second copy does not add a backup — it destroys the single source of truth' in 3.1; 'a confident, detailed, widely-trusted work of fiction' in 3.3; 'an advisory board is governance theatre — it produces minutes, not decisions' in 3.4; and 'build it to survive you, or it fades the moment you leave' in 3.7. All four are intended to land as practitioner-honest rather than cynical — confirm the register suits ITU's channel voice."),

  H3("5.3 Structural calls"),
  P("Three structural items, all about avoiding repetition across the KP1 modules. (1) EA Board overlap: subtopic 3.4 treats the Board operationally (chair, members, cadence, binding scope — how the architect stands it up and runs it), whereas Topic 1's subtopic 1.7 treated it as one of the Strategist's asks to the minister. The two are deliberately different angles on the same body; confirm they read as complementary, not duplicative, and that the AI prompts (a ToR in both) are pitched to their different audiences. (2) Sustainment overlap: subtopic 3.7 names the fade-modes that kill an EA practice, a theme also touched in 1.7 ('quietly kills EA programmes in the second year') and 2.7 (the sourcing traps). 3.7 is scoped to governance and sustainment fades, not sourcing; confirm the three do not feel like the same 'traps' video told three times. (3) Lifecycle mapping: Topic 3 is the practitioner rendering of Phase 5 (Execute & Govern) named in 1.6's lifecycle; confirm the phase language stays consistent with 1.6."),

  H3("5.4 Visual production calls"),
  P("Two items to confirm with ITU's look-and-feel template once delivered (action item A5): the repository-structure layout implied in 3.1 and the architecture review-gate checklist in 3.5 (slide 2) are the two candidate centrepiece visuals of Topic 3 and merit a dedicated design iteration with ITU's production team; both are specified as plain-text rows and text-box structure only, with no icons, pending the template."),

  H3("5.5 Tooling-example call"),
  P("Subtopic 3.2 (tooling) deliberately names no specific EA-tool products, keeping to the ITU branding rule and the public-anchors discipline, and frames the choice generically (shared / open-source / commercial, reuse-before-buy, open export). Confirm ITU is content with the generic treatment, or whether the GitBook companion — not the video — should carry a short, neutral, criteria-based list of categories of tool for practitioners who want a starting point."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the seven subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions. All references are public anchors the ITU reviewer can verify."),
  genericTable([2000, 7700], ["Subtopic", "Sources referenced"], [
    ["3.1", "PAERA v1.0 (paera.govstack.global) — §4.2.2 Architecture; §3.1 Governance & Policy; Annex 2 Metamodel."],
    ["3.2", "PAERA v1.0 §5.6 (Sourcing Strategy); §3.3 (Digital Infrastructure principles — technology neutrality)."],
    ["3.3", "PAERA v1.0 §4.2.2 (Architecture); §5.4 (Organisational Assessment & Roadmap)."],
    ["3.4", "PAERA v1.0 §4.2.1 (Management); §3.1 (Governance & Policy); §5.4 (Organisational Assessment & Roadmap)."],
    ["3.5", "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); §5.2 (Architectural principles); §5.6 (Sourcing Strategy). GovStack Building Block specifications (govstack.global) for the shared building blocks referenced."],
    ["3.6", "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); §5.7 (Recommended Roadmap — intermediate-results pattern)."],
    ["3.7", "PAERA v1.0 §4.2.1 (Management); §4.2.2 (Architecture); §5.4 (Organisational Assessment & Roadmap)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel, and once the exact PAERA §4.2 / §5.4 / §5.6 / §5.7 section numbers are confirmed (see calibration item 5.1) the references here will be locked to match.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP1 Module 3 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP1 Topic 3 (EA repository, tooling and governance), Architect-facing, aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP1 Topic 3 Script Bundle v0.1 · 26 June 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP1_Module3_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
