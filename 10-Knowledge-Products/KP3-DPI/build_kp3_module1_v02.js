// Build KP3 Module 1 — Video Script Bundle v0.2
// v0.2 (2 Oct 2026): written afresh on the KP3 outline and content plan, version 0.3, section 1, module 1, and its
//   section 2 (the dissemination outline, the video topics, the figures and the walkthroughs). The six drafts of
//   version 0.1 are not revised; their build script was used for its helper functions only.
//   Each single message is the outline's, word for word. Every source cited is one the outline names for that
//   subtopic. Where a script quotes Progressa's assessment, every name, score, finding and identifier is the one the
//   reconciled worked examples E1 to E5 carry, and every instrument shown is the accepted assessment toolkit's.
//   The learner registry PLR, the check of a person's identity and the load of learners' records are taught as the
//   two reconciling rounds of 1 October 2026 settled them.
// Education DPI Roadmap · Module 1 — Where your country stands, and what to build first
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
// Helper functions are those of the accepted KP3 module 2 bundle (v0.2); table rows are kept whole on one page.

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors KP1, KP2 and KP3 module 2) ----------
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

// Persona for KP3 Module 1 (the Strategist register, outline v0.3, section 1)
const PERSONA_S = "S (Strategist) — the public-sector middle manager who commissions the assessment, defends its result to the minister and plans what to build first";

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
function H3(t, color = COLOR_ACCENT, keepNext = false) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 160, after: 60 }, keepNext,
    children: [new TextRun({ text: t, font: ARIAL, size: 22, bold: true, color })] });
}
function spacer(after = 60) { return new Paragraph({ spacing: { before: 0, after }, children: [new TextRun({ text: "" })] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }

function specTable(rows, W = 9700, keepTogether = false) {
  const COL1 = 2400; const COL2 = W - COL1;
  const last = rows.length - 1;
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [COL1, COL2],
    rows: rows.map(([k, v], i) => new TableRow({ cantSplit: true, children: [
      new TableCell({ borders: cellBorders, margins: cellMargin, width: { size: COL1, type: WidthType.DXA },
        shading: { fill: COLOR_GREY_BG, type: ShadingType.CLEAR },
        children: [new Paragraph({ keepNext: keepTogether && i < last, children: [new TextRun({ text: k, font: ARIAL, size: 20, bold: true })] })] }),
      new TableCell({ borders: cellBorders, margins: cellMargin, width: { size: COL2, type: WidthType.DXA },
        children: [new Paragraph({ keepNext: keepTogether && i < last, children: [new TextRun({ text: v, font: ARIAL, size: 20 })] })] })
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
// Every row is kept on one page (cantSplit), so that no storyboard or slide row breaks across a page.
function genericTable(cols, headers, rows, W = 9700) {
  const head = new TableRow({ tableHeader: true, cantSplit: true, children: headers.map((h, i) => tableHeaderCell(h, cols[i])) });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols,
    rows: [head, ...rows.map(r => new TableRow({ cantSplit: true, children: r.map((c, i) => tableCell(c, cols[i])) }))] });
}
// Every box is kept whole on one page (cantSplit); the longest, the AI usage tip of 1.7, fits on one page.
function boxTable(fill, bd, children, margins = { top: 100, bottom: 100, left: 200, right: 200 }, keepWhole = true) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: bd };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ cantSplit: keepWhole, children: [
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
// The practice box carries the kit's fixed wording, the same as bundle_to_md.py writes into the Markdown,
// so that the .docx and the .md say the same thing.
function practiceBox(task, artefact) {
  return boxTable(COLOR_GREY_BG, COLOR_HEAD, [new Paragraph({ children: [
    new TextRun({ text: "On-screen practice box (recap slide, not narrated): ", font: ARIAL, size: 19, bold: true, color: COLOR_HEAD }),
    new TextRun({ text: "Do this on your own sector. " + task.replace(/\.$/, "") + ". ", font: ARIAL, size: 19, bold: true }),
    new TextRun({ text: "The prompt in the companion material gives you " + artefact.replace(/\.$/, "") + ". Before the next video.", font: ARIAL, size: 19 })
  ] })]);
}

// ---------- helper: render a video subtopic block ----------
// The page break is pushed by the caller, after the storyboard where the subtopic has one.
function renderSubtopic({ num, title, runtime, words, paeraAnchor, singleMessage,
                         scriptBeats, slideSpecRows, practice, aiTip, metadataRows }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([
    ["Persona",        PERSONA_S],
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
  if (practice) out.push(practiceBox(aiTip.title, practice));
  out.push(spacer(80));
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
  out.push(H3("Metadata", COLOR_ACCENT, true));
  out.push(specTable(metadataRows, 9700, true));
  return out;
}

// The storyboards are written in the body as plain H3, P and genericTable calls, so that the Markdown
// rendering (bundle_to_md.py), which reads the body only, carries them as well as the .docx. Each starts on a new page.

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
    children: [new TextRun({ text: "KP3 — Education DPI Roadmap",
      font: ARIAL, size: 30, bold: true, color: COLOR_HEAD })] }),
  new Paragraph({ spacing: { before: 0, after: 200 },
    children: [new TextRun({ text: "Module 1 — Where your country stands, and what to build first",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Module 1 of KP3"],
    ["Version",             "v0.2 — written afresh on the KP3 outline and content plan, version 0.3 (1 October 2026); 4 October 2026: 1.8's registers slide reworded so its narration does not hang on the name PAERA (nine takes skipped it)"],
    ["Date",                "2 October 2026"],
    ["Module persona",      PERSONA_S],
    ["Subtopics",           "Ten subtopics (1.1 – 1.10), each shipped as one ~5-minute standalone video"],
    ["Module runtime",      "About fifty minutes across ten standalone videos"],
    ["Method taught",       "The first five of the method's nine steps — the frame, the automatic assessment, the questionnaires, the verification and the scoring — with what makes infrastructure foundational, which blocks belong to the sector, the order of building and the first proof for education"],
    ["Instruments used",    "The KP3 assessment toolkit — the question bank, the five questionnaires with their guides, the templates for verification, the scoring criteria with the scoring prompt — and the worked examples E1 to E5, built for Progressa"],
    ["What is built",       "Nothing. The demonstrations of subtopics 1.4 and 1.7 need only the toolkit; until each is recorded, its storyboard stands in its place"],
    ["Prepared by",         "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("Module 1 gives the team that makes the case to the minister a way to see the whole of the country's digital public infrastructure on one page, a method for assessing it that a ministry can commission and defend, and the reasoning that leads from the assessment to one priority service. The ten videos teach what makes infrastructure foundational, the five domains, the nine steps of the method with their roles, the desk assessment with AI, the five questionnaires, verification before scoring, scoring on five stages and one table, the foundational blocks against the sector's own, the order of building, and the first proof for education. Every video is taught from public sources and shown on Progressa, the fictional country of the Knowledge Products. Each subtopic carries an AI usage tip with a prompt ready to copy. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the ten video scripts of Module 1 of Knowledge Product 3, the Education DPI Roadmap, with the specification of their text-only slides, the AI usage tip of each subtopic, the data that describe each video, and a storyboard for each of the two demonstration walkthroughs the module carries. It is written from the KP3 outline and content plan, version 0.3, which fixes for each subtopic its single message, its sources, its worked example and its AI usage tip."),

  H3("1.2 What Module 1 teaches, and what it does not claim"),
  P("Module 1 is written for the Strategist: the public-sector middle manager who commissions the assessment, defends its result to the minister and plans what to build first. It teaches the first five of the method's nine steps — the frame, the automatic assessment, the questionnaires, the verification and the scoring — and the reasoning from the scored result to one priority service. The sequence of nine steps is this course's own, drawn from its authors' implementation experience in several countries; each subtopic names the public sources it rests on: PAERA, the GovStack Public Administration Ecosystem Reference Architecture, version 1.0; UNDP's description of digital public infrastructure and its Digital Development Compass; the UNDP DPI Playbook; and, as benchmarks, a World Bank report for the G20, a Bulletin of the Bank for International Settlements and the official record of e-Estonia. Subtopics 1.8 and 1.10 cite the GovStack building block specifications, each by its edition."),
  P("The worked examples are built for Progressa, the fictional country of the Knowledge Products, and are derived from no country's results. Where a script quotes Progressa's assessment, it quotes the worked examples E1 to E5 as they stand, and every instrument it shows is the one in the assessment toolkit. Three statements hold throughout. PLR, the Progressa Learner Registry, is a member of Linkup, the data exchange, and serves enrolment records for some learners to the examination authority alone; it is not yet the authoritative learner register, which the build sets up behind it. An education service checks a person through the identity authority's sign-in, with the person present, and keeps the identifier the authority gives it, never the national number; the authority's one service on Linkup is a read of a person by national number that only the examination authority may call. And learners' records are loaded into the register through Giga's five tiers, which this module does not teach and does not contradict."),
  P("Nothing is built in this module, and nothing in it is said to run. The demonstrations of subtopics 1.4 and 1.7 need only the assessment toolkit; until each is recorded, its storyboard stands in its place, and the script says what the walkthrough shows and what counts as a pass without saying that it has run."),

  H3("1.3 How to read this document"),
  P("Section 2 gives the module at a glance. Section 3 holds the script of each subtopic, with its slide specification, its on-screen practice box, its AI usage tip and its metadata, followed, for subtopics 1.4 and 1.7, by the storyboard of its demonstration walkthrough. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate list of external links."),
  P("Within each script, three rendering conventions are used: shaded blocks are on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. Where a script needs a figure, the slide specification names it from the outline's table of figures and describes it; the figure belongs to the written guide, and the slides stay text-only."),

  pageBreak()
);

// ---------- AT A GLANCE ----------
body.push(
  H1("2. Module 1 at a glance"),
  P("Ten standalone videos, all in the Strategist register. Total runtime about fifty minutes. Each video has one single message, taken word for word from the KP3 outline, and can be understood on its own."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["1.1", "What makes infrastructure foundational",
      "Before you fund anything called \"DPI\", test it against four marks: it serves the whole society, many services can connect to it, it is built on open standards, and clear rules govern it.", "~5 min"],
    ["1.2", "The five domains, as a map",
      "One page with five domains, a foundation of governance, policy and law carrying access, digital data, interoperability and digital identity, shows your minister what the country has and what it lacks.", "~5 min"],
    ["1.3", "The roadmap method in nine steps: who does what",
      "A roadmap is produced in nine steps, and for each step you can say who acts, what goes in, what comes out, who decides and how the result is checked.", "~5 min"],
    ["1.4", "Start at the desk: a first assessment from public sources, with AI",
      "An AI-assisted review of what your country has already published gives you first findings and gaps before you ask anyone a question, each tied to its source, and it is a draft to verify, not a verdict.", "~5 min"],
    ["1.5", "Ask the people who run the systems: the five questionnaires",
      "Five questionnaires, one for each domain, put the same questions to the people who run the systems and ask for evidence with every answer.", "~5 min"],
    ["1.6", "Verify before you score",
      "An answer becomes a finding only when it has been checked against documents, in interviews and workshops, and in a validation session with the people who gave it.", "~5 min"],
    ["1.7", "Score each domain: five stages and one table",
      "Score each domain on five published stages against written criteria, so that two assessors reach the same result and the whole picture fits on one table.", "~5 min"],
    ["1.8", "Foundational blocks and the sector's own",
      "Identity, payments and data exchange are foundations for every sector, while a learner register and its registration service belong to education and stand on them, and each must be funded as what it is.", "~5 min"],
    ["1.9", "What comes first: the order of building",
      "Build identity and payments first, bring in data exchange and registration with the first priority services, digitalise the registers next, and show one visible result early so that support holds.", "~5 min"],
    ["1.10", "The first proof for education: one service on four blocks",
      "The first proof for education is one service that registers a learner once: the sector's own registration service and learner register, using the country's identity and payment blocks through the data exchange layer.", "~5 min"]
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
  title: "What makes infrastructure foundational",
  runtime: "~5 min",
  words: 541,
  paeraAnchor: "UNDP, Digital public infrastructure (web page); UNDP Compendium (2023), pages 3 and 4; PAERA v1.0 §2.6 and §3.3.1; as benchmarks, World Bank G20 report (2023), page 2, and BIS Bulletin No 52 (2022), page 5",
  singleMessage: "Before you fund anything called \"DPI\", test it against four marks: it serves the whole society, many services can connect to it, it is built on open standards, and clear rules govern it.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What makes infrastructure foundational'. Voice-over begins." },
    { text: "Donors and vendors all speak of DPI, digital public infrastructure. Some of what they offer is shared by the whole government. Some of it is one ministry's system under a new name. Before your ministry pays for either, you need a test you can defend." },
    { cue: "Slide 2 — Title: 'What DPI means'. Body, three text rows: 'UNDP: a set of foundational digital systems.' 'The description from the G20 agreement of 2023: shared, secure and interoperable systems, built on open standards, serving a whole society, governed by legal frameworks and enabling rules.' 'Three kinds so far: digital identity, digital payments, consent-based data sharing — and others emerging.'" },
    { text: "UNDP defines digital public infrastructure as a set of foundational digital systems. Its compendium of 2023 gives the longer description from the G20 agreement of that year. These are shared digital systems, secure and interoperable. They can be built on open standards. They deliver services at the scale of a whole society. And legal frameworks and enabling rules govern them. The compendium names three kinds so far: digital identity, digital payments, and data sharing based on consent. It expects others to emerge." },
    { cue: "Slide 3 — Title: 'Four marks'. Body, four text rows: '1. It serves the whole society — not limited by place or by group.' '2. Many services can connect to it — many uses, many providers.' '3. It is built on open standards — anyone may build on it.' '4. Clear rules govern it — to protect people and prevent misuse.'" },
    { text: "From that description the compendium draws four characteristics. Turn them into four marks you can test. First, it serves the whole society, not one region or one group. Second, many services can connect to it, from many providers. Third, it is built on open standards, so that anyone may build on it. Fourth, clear rules govern it, to protect people and prevent misuse. Do not treat the fourth mark as a formality. PAERA, the GovStack reference architecture, places governance, policy and law at the foundation of a country's digital infrastructure, under its four pillars. It also says that such infrastructure shapes what can be built on top of it. The rules decide who gains from it." },
    { cue: "Slide 4 — Title: 'What shared infrastructure has done'. Body, two text rows: 'India: adults with a transaction account rose from about one in four in 2008 to over 80 percent, a change estimated to have taken up to 47 years without DPI (World Bank report for the G20, 2023, page 2).' 'Brazil: by the end of February 2022, 15 months after launch, 67% of adults had made or received a payment through Pix (BIS Bulletin No 52, 2022, page 5).'" },
    { text: "Why does the test matter? See what shared systems did. A World Bank report for the G20 looks at India. There, the share of adults with a transaction account rose from about one in four in 2008 to over 80 percent. The report estimates that without such infrastructure the same change could have taken up to 47 years. The report adds that other policies mattered as well. In Brazil, by the end of February 2022, 67 percent of adults had used Pix, the central bank's payment system, 15 months after its launch. Procurement rules can require interoperability, but they cannot deliver it. A project pays only for its own users. Only whole-of-government planning sees the total: the first ministry pays, and every ministry after it re-uses what was built." },
    { cue: "Slide 5 — Title: 'Progressa's systems against the four marks'. Body, a five-row text table — System | Result | Reason: 'National identity (PNIA) | Foundational, with gaps | 78 per cent of adults covered; no identity number below the age of issue; no education service uses its sign-in.' 'Payments | Not yet in place for government | PayPro runs a fast-payment system; no government payments service is joined to Linkup.' 'Linkup, the data exchange | Foundational, still a pilot | Built for many bodies to connect; the ministry of education is not yet a member.' 'Learner registry (PLR) | The sector's own, not yet authoritative | Records for some learners only, served to the examination authority alone.' 'PEMIS, the ministry's school information system | A sector application | Holds totals, not learners; shares data by file export.' Footer: 'Progressa is a fictional country. The screen is illustrative.'" },
    { text: "Now apply the four marks to Progressa, the fictional country of these examples. Its national identity, run by PNIA, the identity authority, covers 78 per cent of adults. Children below the age of issue have no identity number, and no education service uses its sign-in yet. Foundational, with gaps. PayPro, the payment provider, runs a fast-payment system, but no payments service for government is joined to Linkup, the national data exchange, yet. So no education programme can pay through it. Linkup is built for many bodies to connect, but it is still a pilot, and the ministry of education is not a member. PLR, the learner registry, holds records for some learners only. It belongs to education and is not yet the authoritative register. PEMIS, the ministry's school information system, holds totals, not learners. It is a sector application." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Before you fund anything called \"DPI\", test it against four marks: it serves the whole society, many services can connect to it, it is built on open standards, and clear rules govern it.' Below it, the on-screen practice box (not narrated)." },
    { text: "Test anything called DPI against four marks: the whole society, many services, open standards, clear rules. A system that misses a mark is not yet infrastructure, whatever it is called." },
    { cue: "Slide 7 — Title: 'Sources'. Body: UNDP, Digital public infrastructure (web page); UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium (2023), pages 3 and 4; PAERA v1.0, sections 2.6 and 3.3.1; World Bank, G20 Policy Recommendations for Advancing Financial Inclusion and Productivity Gains through Digital Public Infrastructure (2023), page 2; BIS Bulletin No 52 (2022), page 5. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'What makes infrastructure foundational'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "What-DPI-means slide. Three text rows: UNDP's definition, the G20 description, the three kinds.",
      "The published words, in plain language. Text-only."],
    ["3", "Four-marks slide. Four numbered text rows.",
      "The core of the video: the test the listener carries away. Text-only."],
    ["4", "Benchmarks slide. Two text rows: India and Brazil, each figure with its source, year and page.",
      "Carries the planning-enables-re-use argument in its voice-over. Text-only; no flags or logos."],
    ["5", "Progressa slide. A five-row text table: system, result, reason.",
      "The worked example, built for Progressa and marked illustrative. Plain text table."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify each source and figure."]
  ],
  practice: "a table with one line of reasoning for each mark, for each system",
  aiTip: {
    title: "Screen your systems against the four marks of foundational infrastructure",
    problem: "A ministry is offered systems under the name DPI and has to decide which of them deserve shared funding. This prompt screens a list of systems against the four marks — the whole society, many services connected, open standards, clear rules — and gives one line of reasoning for each mark, so that the judgement can be read and challenged.",
    prompt: "Below is a list of systems in [country X], each with a short description: who runs it, who uses it, which services connect to it, the standards it is built on, the law or rules that govern it, and how it is funded [paste the list]. Test each system against four marks taken from UNDP's description of digital public infrastructure: (1) it serves the whole society, not one region or one group; (2) many services can connect to it; (3) it is built on open standards; (4) clear rules govern it, to protect people and prevent misuse. For each system and each mark, answer Yes, Partly, No or Not known, with one line of reasoning drawn only from the description given. Then give each system one result: foundational; foundational with gaps; a sector's own system; or not enough information. Use no knowledge beyond the descriptions. Output: a table with one line of reasoning for each mark, for each system, a result for each system, and a list of the facts to check for every answer marked Not known.",
    io: "Input: a list of systems with a short description of each. Output: a table with one line of reasoning for each mark, for each system, a result for each system, and a list of the facts to check.",
    safeguard: "The table reflects only the descriptions it was given. Before any system it calls foundational is put forward for shared funding, check how that system is governed and funded in fact: a description written by a system's owner tends to claim more reach and more openness than the system has."
  },
  metadataRows: [
    ["Working title",          "What makes infrastructure foundational"],
    ["YouTube-optimised title", "What makes infrastructure foundational: four marks to test anything called DPI before you fund it"],
    ["Description (60 words)", "Donors and vendors call many systems DPI. Before your ministry funds one, test it against four marks drawn from UNDP: it serves the whole society, many services connect to it, it is built on open standards, and clear rules govern it. Benchmarks from India and Brazil, and a screen of Progressa's systems. An AI prompt screens your own list."],
    ["Tags",                    "digital public infrastructure, DPI, foundational infrastructure, UNDP, PAERA, education DPI, investment decisions, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks identified); §4.2 (international frameworks and standards referenced); §4.3 (AI integration — the four-mark screen)"],
    ["PAERA citations",         "2.6 Change management (infrastructure 'shapes what can be built on top of it'); 3.3.1 Overview (the foundation framework and the four pillars)"],
    ["External-link list",      "UNDP, Digital public infrastructure (https://www.undp.org/digital/digital-public-infrastructure); UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 21 August 2023, pages 3 and 4 (https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure); PAERA v1.0, sections 2.6 and 3.3.1 (https://paera.govstack.global/); World Bank, G20 Policy Recommendations for Advancing Financial Inclusion and Productivity Gains through Digital Public Infrastructure, 2023, page 2 (https://openknowledge.worldbank.org/handle/10986/40421); BIS Bulletin No 52, 23 March 2022, page 5 (https://www.bis.org/publ/bisbull52.htm)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 1.2",
  title: "The five domains, as a map",
  runtime: "~5 min",
  words: 463,
  paeraAnchor: "PAERA v1.0 §3.3.1 (the foundation framework and the four pillars), with §2.5, §3.1 and §3.4.1 to §3.4.4; §2.3 (the role of enterprise architecture). Reading the foundation as a fifth domain is this course's own reading of PAERA.",
  singleMessage: "One page with five domains, a foundation of governance, policy and law carrying access, digital data, interoperability and digital identity, shows your minister what the country has and what it lacks.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The five domains, as a map'. Voice-over begins." },
    { text: "Ask a ministry what the country has for digital government, and you often get a list of projects, each with its own donor. A list hides what is missing. One page with five domains shows your minister both." },
    { cue: "Slide 2 — Title: 'PAERA's picture of the infrastructure'. Body, three rows of plain text boxes: top row 'Services — for example, registering a learner, paying a scholarship'; middle row, four boxes 'Access', 'Digital Data', 'Interoperability', 'Digital Identity'; bottom row, one box across the width 'Foundation: governance and policy, with the legal framework'." },
    { text: "PAERA, the GovStack reference architecture, gives the picture. It says that a country's digital governance infrastructure has two parts. The first is a foundation framework of governance, policy and legal components. The second is four pillars: Access, Digital Data, Interoperability and Digital Identity. Services, such as registering a learner or paying a scholarship, stand on the pillars. PAERA also explains why the pillars come early. They are the technical conditions that services need, and a country should address them before it pursues wide and ambitious plans." },
    { cue: "Slide 3 — Title: 'Five domains, with their codes'. Body, five text rows: 'GOV — governance and policy, with the legal framework.' 'ACC — Access.' 'DAT — Digital Data.' 'INT — Interoperability.' 'IDN — Digital Identity.'" },
    { text: "The method reads the foundation as a fifth domain beside the four pillars. That reading is this course's own. Its reason is practical: a pillar without a law, a budget and a body that decides is not yet infrastructure. So there are five domains, each with a short code. GOV is governance and policy, with the legal framework. ACC is access: connections, devices, skills, and help for people who need it. DAT is digital data, with the state registers. INT is interoperability, the exchange of data between systems. IDN is digital identity." },
    { cue: "Slide 4 — Title: 'Progressa's frame page'. Body, a five-row text table — Domain | Who answers for Progressa: 'GOV | The ministry's planning directorate, with PDGA for the national rules.' 'ACC | The ministry's ICT unit, with the district education offices.' 'DAT | The ministry's statistics unit, which runs PEMIS, with PNEA, the examination authority.' 'INT | PDGA, which operates Linkup, with the ministry's ICT unit.' 'IDN | PNIA, the national identity authority, with the ministry's ICT unit.' Footer: 'Progressa is a fictional country. Worked example E1.'" },
    { text: "Here is the map for Progressa, the fictional country of these examples. It is step one of the method, and the first output of the assessment: one page that fixes its scope. For each domain it names the body that answers. For digital data, that is the statistics unit of the ministry of education, which runs PEMIS, its school information system, with PNEA, the examination authority. For interoperability, it is PDGA, the digital government authority, which operates Linkup, the national data exchange. The page also records what is there and what is not. Linkup runs as a pilot. PLR, the learner registry, holds records for some learners only, and is not yet the authoritative learner register." },
    { cue: "Slide 5 — Title: 'One page both sides can read'. Body, two text rows: 'The minister reads the gaps in law, money and ownership.' 'The architect reads the gaps in systems and data.'" },
    { text: "Why one page? PAERA describes enterprise architecture as documents that look at an organisation from business and IT together. Their purpose is to close the gap in communication between the two. The five-domain map does the same for a country's infrastructure. It gives the policy side and the technical side one shared language. The minister reads the gaps in law, money and ownership. The architect reads the gaps in systems and data. When they decide what comes first, both point to the same part of the same page. A list of projects cannot do this, because it shows only what someone chose to fund." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'One page with five domains, a foundation of governance, policy and law carrying access, digital data, interoperability and digital identity, shows your minister what the country has and what it lacks.' Below it, the on-screen practice box (not narrated)." },
    { text: "Five domains on one page: a foundation of governance, policy and law, and four pillars on it. It shows the minister what exists and what is missing." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 2.3, 2.5, 3.1, 3.3.1 and 3.4.1 to 3.4.4. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The five domains, as a map'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "PAERA's picture: three rows of plain text boxes — services; the four pillars; the foundation across the width.",
      "The one diagram of the video, made of text boxes only. The written guide carries figure F2, the five domains on one page: the foundation across the bottom, the four pillars standing on it, the services above them."],
    ["3", "Five-domains slide. Five text rows, each a code and its domain.",
      "The codes are the ones every later step uses. Text-only."],
    ["4", "Progressa's frame page. A five-row text table: domain, who answers for Progressa.",
      "The worked example of method step 1, built for Progressa. Plain text table."],
    ["5", "One-page slide. Two text rows: what the minister reads, what the architect reads.",
      "Carries the shared-language argument. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify each PAERA section."]
  ],
  practice: "a map of the five domains with every item placed and its reasoning",
  aiTip: {
    title: "Place your systems, laws and public bodies on the five-domain map",
    problem: "Before an assessment starts, the team needs one page that shows what the country has in each domain and who answers for it. This prompt places a list of systems, laws and public bodies on the five domains and lists what it could not place, so that the gaps and the doubtful items are visible.",
    prompt: "Below is a list of the systems, laws and public bodies that bear on digital public services in [country X], with one line on each [paste the list]. Place each item on one of five domains: GOV — governance and policy, with the legal framework; ACC — access (connectivity, devices and channels, skills, assisted service, inclusion); DAT — digital data (data policy, state registers, data quality, sharing, protection, statistics); INT — interoperability (the data exchange, its members, its standards, the catalogue of services, shared building blocks); IDN — digital identity (coverage, sign-in, use by services, identity for children, legal validity and e-signature). For each item give its domain and one line of reasoning. Where an item could belong to two domains, name both and do not choose. Then, for each domain, list what you would expect to find and did not. Output: a map of the five domains with every item placed and its reasoning, a list of the items you could not place or that fit two domains, and a list of what seems to be missing in each domain.",
    io: "Input: a list of systems, laws and public bodies, one line each. Output: a map of the five domains with every item placed and its reasoning, a list of the items not placed or placed twice, and what seems to be missing in each domain.",
    safeguard: "An item that fits two domains is discussed with the body that owns it and is not forced into one. The owner knows what the item does in practice; a model that chooses for it hides a question the assessment should ask."
  },
  metadataRows: [
    ["Working title",          "The five domains, as a map"],
    ["YouTube-optimised title", "The five domains of digital public infrastructure, on one page your minister can read"],
    ["Description (60 words)", "Asked what the country has, ministries list projects, and a list hides what is missing. PAERA's foundation of governance, policy and law, carrying access, digital data, interoperability and digital identity, puts the whole infrastructure on one page. See Progressa's map and who answers for each domain. An AI prompt places your systems, laws and bodies on the map."],
    ["Tags",                    "digital public infrastructure, PAERA, five domains, DPI assessment, enterprise architecture, education DPI, digital governance, GovStack"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (an assessment method: method step 1, the frame); §4.2 (international frameworks and standards referenced); §4.6 (an example of the output of the step); §4.3 (AI integration — the five-domain map)"],
    ["PAERA citations",         "2.3 Role of Enterprise Architecture; 2.5 What is Digital Government?; 3.1 Governance & Policy; 3.3.1 Overview; 3.4.1 Access; 3.4.2 Digital Data; 3.4.3 Interoperability; 3.4.4 Digital Identity"],
    ["External-link list",      "PAERA v1.0, sections 2.3, 2.5, 3.1, 3.3.1 and 3.4.1 to 3.4.4 (https://paera.govstack.global/)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 1.3",
  title: "The roadmap method in nine steps: who does what",
  runtime: "~5 min",
  words: 485,
  paeraAnchor: "PAERA v1.0 §5.3 (the nine questions of a national assessment; no scale), §5.4 (the eight steps of an organisational assessment) and §3.1.3 (the seven indicators of low maturity); UNDP, The DPI Approach: A Playbook (2023), page 23. The sequence of nine steps is this course's own.",
  singleMessage: "A roadmap is produced in nine steps, and for each step you can say who acts, what goes in, what comes out, who decides and how the result is checked.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The roadmap method in nine steps: who does what'. Voice-over begins." },
    { text: "A minister who commissions a roadmap will ask three things. Who does the work? When must I decide? How will anyone know the result is right? Nine named steps let you answer all three before the work starts." },
    { cue: "Slide 2 — Title: 'Five questions for every step'. Body, five text rows: 'Who acts?' 'What goes in?' 'What comes out?' 'Who decides?' 'How is the result checked?' Below them, one line: 'And which tool or template the step uses.'" },
    { text: "For each step you can say five things: who acts, what goes in, what comes out, who decides, and how the result is checked. Add one more: the tool or template the step uses. The roles are few and they recur. The facilitator plans and runs the assessment and keeps its evidence. A respondent team answers for one domain, with a section lead for each part of its questionnaire. Focal points in other bodies confirm what is said about their systems. Reviewers check each step before the next one starts. At the end, an adopting authority makes the roadmap the government's own." },
    { cue: "Slide 3 — Title: 'Steps 1 to 5: where the country stands'. Body, a five-row text table — Step | What comes out | Tool or template: '1. Frame | One page: the five domains and who answers for each | The frame page' '2. Automatic assessment | First findings and gaps, each with its source, unverified | The question bank and the workflow that runs it' '3. Questionnaires | One answered questionnaire per domain, with its evidence | The five questionnaires and their two guides' '4. Verification | A verified position on every point | The templates for verification' '5. Scoring | Five domain reports and the maturity table | The scoring criteria and the scoring prompt'" },
    { text: "The first five steps find out where the country stands. Step one frames the work on one page. In Progressa, the fictional country of these examples, the ministry of education sponsors it together with PDGA, the digital government authority. Step two reads what the country has published, with an AI assistant; nothing it drafts is yet a finding. Step three sends one questionnaire to each domain. Step four checks every answer before anything is scored; in Progressa, four verification sessions took place in the eighth week. Step five scores each domain on five stages and puts the result on one table. An assistant may propose each stage; a person decides on the evidence, and a reviewer checks." },
    { cue: "Slide 4 — Title: 'Steps 6 to 9: from the result to an adopted roadmap'. Body, a four-row text table — Step | What comes out | Who decides: '6. Gaps and priorities | The gap register, ranked | A workshop of the bodies on the frame page' '7. Roadmap | The roadmap over time, with its dependencies | Dates stay proposals until the budget and the owners of the work confirm them' '8. Investment breakdown | The investment case in four sheets | What is funded first, cost against reuse' '9. Validation and revision | Every comment answered; the revised documents | The adopting authority adopts the roadmap'" },
    { text: "The last four steps turn the result into a roadmap. Step six turns findings into gaps and ranks them, and a workshop of the bodies concerned decides the order. Step seven writes the roadmap over time. Its dates stay proposals until the budget and the owners of the work confirm them. Step eight costs the roadmap in four sheets that a finance ministry can read. Step nine sends everything back to the bodies for comment, answers every comment in writing, and revises. In Progressa, the ministry of education and PDGA adopt the roadmap, with the cabinet where the budget requires it. Module 6 takes these four steps in full." },
    { cue: "Slide 5 — Title: 'Where the nine steps come from'. Body, three text rows: 'PAERA 5.3 — the nine questions a national assessment must answer; no scale.' 'PAERA 5.4 — eight steps for assessing one organisation, from criteria to continuous improvement.' 'UNDP Playbook, page 23 — six steps from national priorities to a roadmap.' Footer: 'The sequence of nine steps is this course's own.'" },
    { text: "Where do the nine steps come from? No public source gives them in this form. PAERA lists nine questions that a national assessment must answer, and gives no scale. It gives eight steps for assessing one organisation, from setting the criteria to continuous improvement. It also lists seven signs of low maturity, such as a lack of digital data. UNDP's playbook gives six steps that lead from national priorities to a roadmap. The sequence of nine steps is this course's own, drawn from its authors' implementation experience in several countries." },
    // MARKED PLACE 1 OF 2 (naming) — outline v0.3, subtopic 1.3. ITU has not answered whether the country in which
    // the method was first applied may be named. If ITU agrees, one sentence of provenance is added here, at the end
    // of the voice-over of slide 5: that the method was developed and applied in a DPI assessment and roadmap for that
    // country. Nothing else in the subtopic changes. Marked place 2 of 2 is in the written guide, on the page that
    // introduces the nine steps.
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A roadmap is produced in nine steps, and for each step you can say who acts, what goes in, what comes out, who decides and how the result is checked.' Below it, the on-screen practice box (not narrated)." },
    { text: "Nine steps, and for each one five answers: who acts, what goes in, what comes out, who decides, and how the result is checked. A minister can follow that." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 3.1.3, 5.3 and 5.4; UNDP, The DPI Approach: A Playbook (2023), page 23. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The roadmap method in nine steps: who does what'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Five-questions slide. Five text rows and one line on the tool or template.",
      "The frame every step is described in. Text-only."],
    ["3", "Steps 1 to 5. A five-row text table: step, what comes out, tool or template.",
      "The worked example, the method table filled for Progressa, first half. The written guide carries figure F3, the nine steps with their roles and outputs, and the full table of the nine steps on its reference pages."],
    ["4", "Steps 6 to 9. A four-row text table: step, what comes out, who decides.",
      "The method table, second half. Plain text table."],
    ["5", "Sources-of-the-method slide. Three text rows and a footer saying the sequence is this course's own.",
      "The honest statement of what is published and what is the team's. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and the UNDP playbook."]
  ],
  practice: "a stakeholder map, a schedule by step, a plan of sessions and the list of documents to request",
  aiTip: {
    title: "Turn your list of institutions and a start date into an assessment plan",
    problem: "Once a ministry agrees to an assessment, someone has to say who takes part, in which session, in which week, and which documents to ask for. This prompt turns a list of institutions and a start date into a first assessment plan: a stakeholder map, a schedule by step, a plan of sessions and the list of documents to request.",
    prompt: "Below is the list of institutions that bear on digital public infrastructure for [sector] in [country X], with what each runs or decides [paste the list], and the planned start date [date]. Plan the first five steps of an assessment: 1 frame; 2 desk review of public sources; 3 one questionnaire per domain; 4 verification; 5 scoring. The five domains are governance and policy with the legal framework, access, digital data, interoperability and digital identity. Produce: (a) a stakeholder map — for each institution, its part in each domain, its influence on the result (high, medium or low) and how it will take part (questionnaire, interview, workshop, or validation only); (b) a schedule by week for the five steps, with the decision taken at the end of each step; (c) a plan of sessions for step 4, each with its domain, the roles invited, its length and the evidence to bring; (d) the list of documents to request from each institution. Name people by role only. Output: a stakeholder map, a schedule by step, a plan of sessions and the list of documents to request, with every name and date marked PROPOSED.",
    io: "Input: a list of institutions with what each runs or decides, and a start date. Output: a stakeholder map, a schedule by step, a plan of sessions and the list of documents to request, every name and date marked as proposed.",
    safeguard: "Names and dates in the plan are proposals until the coordinating body confirms them. A plan that circulates with dates the institutions have not agreed creates commitments nobody made; send it out only after the coordinating body has confirmed who takes part and when."
  },
  metadataRows: [
    ["Working title",          "The roadmap method in nine steps: who does what"],
    ["YouTube-optimised title", "The DPI roadmap method in nine steps: who acts, what goes in, what comes out, who decides"],
    ["Description (60 words)", "A minister who commissions a DPI roadmap will ask who does the work, when to decide and how to know the result is right. Nine steps answer all three: for each, who acts, what goes in, what comes out, who decides and how the result is checked. Shown on Progressa. An AI prompt turns your institutions and a start date into an assessment plan."],
    ["Tags",                    "DPI roadmap, assessment method, roles, decision points, PAERA, UNDP DPI Playbook, education DPI, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (an assessment method); §4.1 (a step-by-step method with roles, inputs, outputs, tools or templates, decision points and validation); §6 (templates); §4.3 (AI integration — the assessment plan)"],
    ["PAERA citations",         "3.1.3 Readiness Assessment (seven indicators of low maturity); 5.3 Digital Public Infrastructure Assessment (nine questions, no scale); 5.4 Organisational Assessment & Roadmap (eight steps)"],
    ["External-link list",      "PAERA v1.0, sections 3.1.3, 5.3 and 5.4 (https://paera.govstack.global/); UNDP, The DPI Approach: A Playbook, 21 August 2023, page 23 (https://www.undp.org/publications/dpi-approach-playbook)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 1.4",
  title: "Start at the desk: a first assessment from public sources, with AI",
  runtime: "~5 min",
  words: 486,
  paeraAnchor: "PAERA v1.0 §5.3 (the subjects of a national assessment, and its remark that GovStack has a tool for a quick assessment) and §3.1.3 (the seven indicators of low maturity). The question bank and the workflow that runs it are this course's own instruments.",
  singleMessage: "An AI-assisted review of what your country has already published gives you first findings and gaps before you ask anyone a question, each tied to its source, and it is a draft to verify, not a verdict.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Start at the desk: a first assessment from public sources, with AI'. Voice-over begins." },
    { text: "An assessment usually starts by asking officials for documents, and then waiting. Start instead with what your country has already published. In a few days an AI assistant gives you a first picture, and a list of points to check." },
    { cue: "Slide 2 — Title: 'The question bank'. Body, three text rows: '62 questions, arranged by the five domains and their 26 sub-components.' 'Each question: its code, the sub-component it informs, the evidence that answers it, what a good answer looks like.' 'Example — DAT-Q03: Is there an authoritative register of learners, and which body keeps it?'" },
    { text: "The desk review runs on a question bank. The bank in the assessment toolkit holds 62 questions, arranged by the five domains and their 26 parts, called sub-components. Each question has a code. It names the part it informs, the documents that answer it, and what a good answer looks like. Take question DAT-Q03: is there an authoritative register of learners, and which body keeps it? A good answer is one register, kept by a named body under law, linked to the national identity. PAERA, the GovStack reference architecture, lists the subjects such an assessment must cover. It also says that GovStack has a tool for a quick assessment, which it does not name." },
    { cue: "Slide 3 — Title: 'The workflow, in five stages'. Body, five text rows: '1. Collect practice — evidence notes, each with its source and date.' '2. Draft findings — one draft result per question, with a provisional stage and a confidence between 0 and 1.' '3. Draft the gap analysis — the desk gaps.' '4. Make the report — one chapter per domain.' '5. Clean and sort — the sorted list of desk gaps.' Footer: 'A person reads the output of each stage before the next stage runs.'" },
    { text: "The assistant works in five stages. It collects what the public sources say, each note with its source and date. It drafts one result per question, with a provisional stage and a confidence between zero and one. It writes the gap between each result and good practice. It assembles a desk report, one chapter per domain. Then it removes duplicate gaps and sorts them, so that each can go to the right person. A person reads the output of every stage before the next one runs. The assistant drafts; it does not decide." },
    { cue: "Slide 4 — Title: 'Progressa's desk run'. Body, four text rows: 'AF-DAT-01 — PLR holds enrolment records for some learners; enrolment is counted from school returns. Basic; confidence 0.8.' 'AF-INT-01 — Linkup runs as a pilot; PNEA, PLR and PNIA are among its members; MoEYS is not. Systematic; confidence 0.7.' 'AF-DAT-02 — the yearbook appears to report learner-level data for secondary schools. Systematic; confidence 0.4.' 'Desk gaps — DG-03: PLR not yet the authoritative learner register. DG-05: MoEYS not a member of Linkup.' Footer: 'Every desk result is unverified. Worked example E2, illustrative.'" },
    { text: "Here is the run on the public record of Progressa, the fictional country of these examples. It read six sources, from the education statistics yearbook to the data protection act. Desk result AF-DAT-01 says that PLR, the learner registry, holds enrolment records for some learners. Enrolment is still counted from school returns. Provisional stage Basic, confidence 0.8. AF-INT-01 says that Linkup, the national data exchange, runs as a pilot, and that MoEYS, the ministry of education, is not a member: confidence 0.7. AF-DAT-02 suggests learner-level data for secondary schools, with a confidence of only 0.4. The run ends with desk gaps, such as DG-03: PLR not yet the authoritative learner register. It also reads the record against PAERA's seven signs of low maturity. Lack of digital data: yes, for learners." },
    { cue: "Slide 5 — Demonstration segment: the desk assessment run on Progressa's public record. Until the segment is recorded, the slide shows the steps of its storyboard as text, marked 'What a good run shows'." },
    { text: "The demonstration follows one domain, digital data, through the five stages, from the question bank to the sorted desk gaps. A good run passes when every draft result names its question and its source, carries a provisional stage and a confidence, and is marked unverified. Nothing in it counts as a finding. The point with the lowest confidence goes to the officials first. In Progressa, that point, AF-DAT-02, turned out to be wrong when the officials showed their system." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An AI-assisted review of what your country has already published gives you first findings and gaps before you ask anyone a question, each tied to its source, and it is a draft to verify, not a verdict.' Below it, the on-screen practice box (not narrated)." },
    { text: "Read what the country has published, with AI, before you ask anyone. You get first findings and gaps, each tied to its source: a draft to verify, not a verdict." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 3.1.3 and 5.3. The question bank and the workflow that runs it are this course's own instruments, in the assessment toolkit. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Start at the desk: a first assessment from public sources, with AI'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.4) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Question-bank slide. Three text rows: the size of the bank, the parts of a question, one example question.",
      "The team's blank instrument, from the assessment toolkit. Text-only."],
    ["3", "Workflow slide. Five numbered text rows and a footer on the person who reads each stage.",
      "The stages as the worked example names them. Text-only."],
    ["4", "Progressa's desk run. Four text rows: three desk results and two desk gaps, and a footer marking them unverified.",
      "The worked example of method step 2, built for Progressa and marked illustrative. Text-only."],
    ["5", "Demonstration segment: the desk assessment run on Progressa's public record.",
      "Until the segment is recorded, the slide shows the storyboard's steps as text, marked 'What a good run shows'. The walkthrough needs only the question bank of the assessment toolkit; see the storyboard below."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA's sections; names the toolkit as this course's own."]
  ],
  practice: "a table of draft findings, each with its source, a provisional stage, a confidence and the mark UNVERIFIED",
  aiTip: {
    title: "Run a desk assessment from the question bank and your country's public sources",
    problem: "A team that waits for officials' answers starts its assessment weeks late, and comes to its first meetings without knowing where the public record is thin. This prompt reads a country's published documents against the question bank and writes, for each question, a draft finding with its source and a mark of confidence, then a first list of gaps by domain, all marked unverified.",
    prompt: "You are helping an assessment team read the public record of [country X] for the [education] sector, before anyone is interviewed. You draft; a person decides. QUESTIONS: [paste the entries of the question bank for the domains you are assessing, each with its code, the sub-component it informs, the question and what a good answer looks like]. SOURCES: [paste or attach the public documents — laws, strategies, annual reports, statistical yearbooks, procurement notices — and give each a short name and its date]. For each question: (1) write the finding the sources support, in one or two sentences; (2) quote the passage it rests on, and name its source and page; (3) give a provisional stage on the assessment's five-stage scale: Basic, Opportunistic, Systematic, Differentiating, Transformational; (4) give a confidence between 0 and 1, below 0.6 where the record is thin; (5) mark it UNVERIFIED. Where no source answers a question, write NO SOURCE and do not guess. Then compare each finding with the good answer and write the gap, domain by domain. Output: a table of draft findings, each with its question code, quotation and source, provisional stage, confidence and the mark UNVERIFIED, followed by a first list of gaps by domain, lowest confidence first.",
    io: "Input: the entries of the question bank and the country's public documents. Output: a table of draft findings, each with its source, a provisional stage, a confidence and the mark UNVERIFIED, and a first list of gaps by domain.",
    safeguard: "No finding is accepted without its source, and every finding stays marked UNVERIFIED until it has been checked with the officials who run the systems, in documents, in sessions and at a validation workshop. A confident sentence from the model is not evidence; a low confidence tells you which point to put to the officials first."
  },
  metadataRows: [
    ["Working title",          "Start at the desk: a first assessment from public sources, with AI"],
    ["YouTube-optimised title", "Start a DPI assessment at the desk: an AI review of your country's public record"],
    ["Description (60 words)", "Do not wait for officials' answers to start a DPI assessment. An AI assistant reads what your country has published against a question bank and drafts first findings and gaps, each tied to its source and marked unverified. See the five stages of the workflow and Progressa's desk run. The desk-assessment prompt is included, ready to copy."],
    ["Tags",                    "DPI assessment, desk review, AI, question bank, public sources, PAERA, education DPI, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (an assessment method: method step 2); §4.1 (the step with its output and its check); §4.3 (AI integration — the desk-assessment prompt); §4.6 (an example of the output of the step)"],
    ["PAERA citations",         "3.1.3 Readiness Assessment (seven indicators of low maturity); 5.3 Digital Public Infrastructure Assessment"],
    ["External-link list",      "PAERA v1.0, sections 3.1.3 and 5.3 (https://paera.govstack.global/)"]
  ]
}));
body.push(
  pageBreak(),
  H3("Storyboard of the demonstration walkthrough — 1.4"),
  P("This storyboard stands in the place of the demonstration segment until it can be recorded. The walkthrough needs only the question bank of the assessment toolkit. It runs on the public record of Progressa, which is invented: worked example E2 names its six sources and shows the results of a run as illustrative. Nothing in it has been run. When the segment is recorded, the script gains one sentence stating the result and its date."),
  genericTable([700, 2700, 3300, 3000], ["Step", "What is shown", "What the viewer sees", "What counts as a pass"], [
    ["1", "The settings of the run", "Country Progressa, sector education, the six public sources with their dates, and the questions of the digital data domain loaded from the question bank", "Every source has a name and a date; the country is named in the settings only, and the bank itself stays blank"],
    ["2", "Stage 1, collect practice", "The evidence notes for the digital data questions", "Every note gives its source and its date"],
    ["3", "Stage 2, draft findings", "The draft results AF-DAT-01 for DAT-Q03 (Basic, confidence 0.8) and AF-DAT-02 for DAT-Q04 (Systematic, confidence 0.4)", "Each draft result names its question, quotes its source, carries a provisional stage and a confidence, and is marked unverified"],
    ["4", "Stages 3 and 4, the gap analysis and the report", "The desk gaps DG-03 and DG-04, and the chapter of the desk report on digital data", "Each desk gap names the question it comes from; nothing in the report is called a finding"],
    ["5", "Stage 5, clean and sort", "The sorted list of desk gaps, each with the unit it is put to", "No duplicate remains; the gaps are sorted by question and each names the unit it is put to; AF-DAT-02, with a confidence below 0.6, is marked to be checked first"]
  ]),
  pageBreak()
);

// ---------- 1.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 1.5",
  title: "Ask the people who run the systems: the five questionnaires",
  runtime: "~5 min",
  words: 459,
  paeraAnchor: "PAERA v1.0 §5.3 (its nine questions are the subjects of the five questionnaires) and §5.4, step 2 (surveys and questionnaires, interviews and document review as assessment tools). The questionnaires and their two guides are this course's own.",
  singleMessage: "Five questionnaires, one for each domain, put the same questions to the people who run the systems and ask for evidence with every answer.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Ask the people who run the systems: the five questionnaires'. Voice-over begins." },
    { text: "The public record tells you what a country says about its systems. The people who run them know what the systems actually do. Ask them, in writing, and ask for the document behind every answer." },
    { cue: "Slide 2 — Title: 'One questionnaire for each domain'. Body, five text rows: 'Q-GOV — governance and policy, with the legal framework.' 'Q-ACC — access.' 'Q-DAT — digital data.' 'Q-INT — interoperability.' 'Q-IDN — digital identity.' Below them: '93 questions in all, grouped by the same 26 sub-components as the question bank.'" },
    { text: "There are five questionnaires, one for each domain. PAERA, the GovStack reference architecture, lists nine questions that a national assessment must answer. Each questionnaire expands one or more of them. The digital data questionnaire, for example, expands PAERA's question on the status of the national infrastructure for managing digital data. Together the five ask 93 questions. They cover the same 26 parts, or sub-components, as the desk review of the public record, so every answer can be set beside the desk result for the same part. PAERA names questionnaires, interviews and document review as tools of an assessment." },
    { cue: "Slide 3 — Title: 'How a question asks for evidence'. Body, four text rows: 'D2.2 Is there one authoritative record of each learner?' 'Describe — where a learner's identity and enrolment are recorded today.' 'Indicate — whether the record is on paper, in a spreadsheet or in a system.' 'Provide — a blank copy of the form or screen used.'" },
    { text: "Each question opens with one short lead question, and then asks for three things: what to describe, what to indicate, and what to provide. Take question D2.2 of the digital data questionnaire: is there one authoritative record of each learner? Describe where a learner's identity and enrolment are recorded today. Indicate whether the record is on paper, in a spreadsheet or in a system. Provide a blank copy of the form or screen used. An answer with a document behind it counts for more than an answer without one. And 'we do not have this' is a useful answer." },
    { cue: "Slide 4 — Title: 'Two guides with every questionnaire'. Body, two text rows: 'For the respondent — who answers, what to prepare, how to answer, the five stages for describing, the checks before submitting.' 'For the facilitator — before the session, how to run it, what to look for, how to record answers and evidence, difficult situations, checks before scoring.' Footer: 'Respondents describe; they do not score.'" },
    { text: "Every questionnaire comes with two guides. The guide for the respondent says who answers, which documents to collect, how to answer, and what to check before submitting. In a typical case the work takes about 13 working days, and the head of the responding unit signs the answers. The guide for the facilitator says how to prepare, how to run a session, and how to record each answer with its evidence. Respondents describe; they do not score. Each questionnaire also carries the points from the desk review, so that the respondents can confirm or correct them." },
    { cue: "Slide 5 — Title: 'Progressa's answer on learner records'. Body, three text rows: 'There is no single record of a learner.' 'PLR holds enrolment records for some learners and serves them to PNEA alone; primary schools keep class registers on paper.' 'Schools send totals by grade and sex once a year; PEMIS holds no record of individual learners.' Footer: 'Documents: the blank annual school return form; the PEMIS data dictionary. Worked example E3, illustrative.'" },
    { text: "Here is how Progressa, the fictional country of these examples, answered that question. The statistics unit of its ministry of education replied, with PNEA, the examination authority, in week six of the assessment. There is no single record of a learner. PLR, the learner registry, holds enrolment records for some learners and serves them to PNEA alone. Primary schools keep class registers on paper. Each school sends totals by grade and sex once a year, and PEMIS, the ministry's school information system, holds no record of individual learners. The answer names its documents: the blank annual school return form and the PEMIS data dictionary." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Five questionnaires, one for each domain, put the same questions to the people who run the systems and ask for evidence with every answer.' Below it, the on-screen practice box (not narrated)." },
    { text: "Five questionnaires, one for each domain, put the questions to the people who run the systems. Every answer names its evidence, or says plainly that none exists." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 5.3 and 5.4. The questionnaires and their guides are this course's own instruments, in the assessment toolkit. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Ask the people who run the systems: the five questionnaires'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Five-questionnaires slide. Five text rows, each a questionnaire and its domain, and one line on their size.",
      "The full set is the assessment toolkit. Text-only."],
    ["3", "How-a-question-works slide. Four text rows: the lead question, then describe, indicate, provide.",
      "The team's blank instrument: question D2.2 of the digital data questionnaire, as the toolkit words it. Text-only."],
    ["4", "Two-guides slide. Two text rows and a footer.",
      "What the respondent and the facilitator each receive. Text-only."],
    ["5", "Progressa slide. Three text rows and a footer naming the documents.",
      "The worked example of method step 3, an extract filled in for Progressa and marked illustrative. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA's sections; names the questionnaires as this course's own."]
  ],
  practice: "a table with one row per question — what the evidence supports, what is stated without evidence, the question to ask next",
  aiTip: {
    title: "Read a filled questionnaire against its evidence",
    problem: "A filled questionnaire mixes answers that rest on documents with answers that rest on memory. This prompt reads the answers with the evidence attached to them and lists, for each answer, what the evidence supports, what is stated without evidence and the question to ask next, so that the facilitator comes to the session knowing which points to raise.",
    prompt: "Below is a completed questionnaire for the [domain] domain from [the responding unit] in [country X], with the documents attached to it [paste the answers, and the documents or the passages the answers cite]. For each question: (1) give the answer in brief; (2) say what the attached evidence supports, quoting the passage and naming the document; (3) say what the answer states that no attached document supports; (4) where the answer and its evidence disagree, quote both; (5) write the one question to ask the section lead next, as an open question that does not suggest the answer. If a question was left empty, write EMPTY and the question to ask; do not fill in an answer. Output: a table with one row per question — what the evidence supports, what is stated without evidence, the question to ask next — and a list of the empty answers.",
    io: "Input: a completed questionnaire with its attached documents. Output: a table with one row per question — what the evidence supports, what is stated without evidence, the question to ask next — and a list of the empty answers.",
    safeguard: "The prompt never fills in an answer the respondent left empty. A blank is information: it shows what the unit does not know or does not hold. An answer written by the model would look like evidence, and would be scored as if the unit had given it."
  },
  metadataRows: [
    ["Working title",          "Ask the people who run the systems: the five questionnaires"],
    ["YouTube-optimised title", "Five DPI questionnaires: ask the people who run the systems, and ask for evidence"],
    ["Description (60 words)", "The public record shows what a country says about its systems; the people who run them know what the systems do. Five questionnaires, one per domain, ask them, with a lead question and a request for evidence in every item, and two guides for respondent and facilitator. See Progressa's answer on learner records. An AI prompt reads a filled questionnaire against its evidence."],
    ["Tags",                    "DPI assessment, questionnaires, evidence, facilitator guide, PAERA, education data, learner records, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (an assessment method: method step 3); §4.1 (the step with its roles and its check); §4.6 (an example of the output of the step); §6 (templates: the five questionnaires and their guides); §4.3 (AI integration — reading a filled questionnaire)"],
    ["PAERA citations",         "5.3 Digital Public Infrastructure Assessment (the nine questions); 5.4 Organisational Assessment & Roadmap, step 2 (assessment tools)"],
    ["External-link list",      "PAERA v1.0, sections 5.3 and 5.4 (https://paera.govstack.global/)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 1.6",
  title: "Verify before you score",
  runtime: "~5 min",
  words: 487,
  paeraAnchor: "PAERA v1.0 §5.4, steps 2 to 4 (document review, interviews and focus groups; conducting the assessment; analysing its results). The order of the verification activities, the ranking of evidence and the comparison of sources are this course's own.",
  singleMessage: "An answer becomes a finding only when it has been checked against documents, in interviews and workshops, and in a validation session with the people who gave it.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Verify before you score'. Voice-over begins." },
    { text: "A questionnaire answer is what a body says about itself. A desk result is what the public record suggests. Neither is a finding yet. Score them as they stand, and the first official who disagrees can overturn your result." },
    { cue: "Slide 2 — Title: 'Six activities, in order'. Body, six text rows: '1. Receive the signed questionnaires.' '2. Review every document they name, against the desk results.' '3. Clarification interviews on each disputed point.' '4. Technical workshops: see the systems working.' '5. Synthesis: a verified position for every point.' '6. Final validation with every body.'" },
    { text: "Verification runs in six activities, in order. The facilitator receives the signed questionnaires. The facilitator then reads every document they name, and compares it with the desk results. Each disputed point goes to the person who owns it, in a clarification interview. In technical workshops the team sees the systems working: a screen, a report, a log. The facilitator then writes a verified position for every point. Last, a validation workshop with all the bodies closes what is still disputed. PAERA, the GovStack reference architecture, names the same tools: document review, interviews and focus groups, followed by the conduct of the assessment and the analysis of its results." },
    { cue: "Slide 3 — Title: 'The evidence ladder'. Body, five text rows: '1 — A system seen working.' '2 — An official document in force.' '3 — Official statistics.' '4 — An internal report.' '5 — A statement in an interview.' Below them: 'When sources disagree, the higher level wins. A verified position needs one source at level 1, or two independent sources at levels 2 or 3.'" },
    { text: "When sources disagree, a rule settles it: the evidence ladder. A system seen working stands highest. Then comes an official document in force, such as a law or an approved budget. Then official statistics, then an internal report, and last a statement in an interview. The higher level wins. A position counts as verified only with one source at the first level, or with two independent sources at the second or third. Where two sources at the same level still disagree, the point is marked disputed and goes to the validation workshop." },
    { cue: "Slide 4 — Title: 'Four templates'. Body, four text rows: 'The map of the bodies involved — who takes part, and how.' 'The session plan — each interview and workshop, the points to clarify, the evidence to bring.' 'The reconciled-response table — the verified position on every point, with its evidence and its status.' 'The agenda of the final validation workshop — half a day, chaired by the validation chair.'" },
    { text: "Four blank templates carry the work. The map of the bodies involved says who takes part, and how. The session plan sets out each interview and workshop, with the points to clarify and the evidence to bring. The reconciled-response table holds the verified position on every point, with its evidence and its status: verified, corrected or disputed. The agenda of the final validation workshop orders the half day in which every body sees the result. A validation chair, a senior official named by the sponsor of the assessment, decides the points still disputed." },
    { cue: "Slide 5 — Title: 'Three points Progressa's team verified'. Body, three text rows: 'AF-DAT-02 — corrected: PEMIS holds totals by district, grade and sex; PEMIS shown in session V-01 (level 1).' 'AF-INT-01 — verified: MoEYS is not a member of Linkup and runs no service on it; member list exported by PDGA in session V-02 (level 1).' 'AF-IDN-02 — verified: only PNEA reads persons from PNIA, through the read by national number; no education service is a client of PNIA's sign-in; shown in session V-03 (level 1).' Footer: 'Worked example E4, illustrative.'" },
    { text: "Here is how it worked in Progressa, the fictional country of these examples. Sessions were held in week eight. Here are three of the points they settled. The desk review had suggested that PEMIS, the ministry's school information system, held learner-level data. In session V-01 the team saw PEMIS working: it holds totals by district, grade and sex. The point was corrected. In session V-02, PDGA, which operates Linkup, the data exchange, exported its member list: MoEYS, the ministry of education, is not a member. Verified. In session V-03, PNIA, the identity authority, showed its service log. Only PNEA, the examination authority, reads persons from PNIA, by national number. No education service uses PNIA's sign-in. Verified. All three were settled at the first level: a system seen working." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An answer becomes a finding only when it has been checked against documents, in interviews and workshops, and in a validation session with the people who gave it.' Below it, the on-screen practice box (not narrated)." },
    { text: "An answer becomes a finding only after it is checked: in documents, in interviews and workshops, and in a validation session with the people who gave it." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, section 5.4, steps 2 to 4. The verification templates and the evidence ladder are this course's own instruments, in the assessment toolkit. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Verify before you score'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.6) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Six-activities slide. Six numbered text rows.",
      "The order of verification, which is this course's own. Text-only."],
    ["3", "Evidence-ladder slide. Five numbered text rows and the rule beneath them.",
      "The ranking of evidence, this course's own. Text-only."],
    ["4", "Four-templates slide. Four text rows, each a template and what it holds.",
      "The team's blank instruments, from the assessment toolkit, under the names the toolkit gives them. Text-only."],
    ["5", "Progressa slide. Three text rows, each a desk result, its verified position and its evidence.",
      "The worked example of method step 4, built for Progressa and marked illustrative. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA's section; names the templates as this course's own."]
  ],
  practice: "a two-column comparison of the sources with their levels, the evidence that would settle the point, and the question for the clarification interview",
  aiTip: {
    title: "Set two disagreeing sources side by side and draft the clarification question",
    problem: "Verification slows down at points where two sources say different things about the same fact. This prompt sets the two sources side by side, places each on the evidence ladder, and drafts the open question for the clarification interview, so that the session settles the point instead of repeating the disagreement.",
    prompt: "Below are two sources that disagree about the same fact in [country X]: source A [what it says, the document or person it comes from, and its date] and source B [the same] [paste both]. The fact concerns [the point, for example: whether the education information system holds a record for each learner]. Do four things. (1) State in one sentence each what source A and source B say. (2) Place each on the evidence ladder: 1 a system seen working; 2 an official document in force; 3 official statistics; 4 an internal report; 5 a statement in an interview. (3) Say what evidence would settle the point, at the highest level that can be reached, for example a screen or an export seen in a session. (4) Draft one open question for the clarification interview, and name the evidence to ask the section lead to bring. Do not say which source is right. Output: a two-column comparison of the sources with their levels, the evidence that would settle the point, and the question for the clarification interview.",
    io: "Input: two sources that disagree about one fact. Output: a two-column comparison of the sources with their levels, the evidence that would settle the point, and the question for the clarification interview.",
    safeguard: "The facilitator decides which source stands, on the evidence seen, and records the reason in the reconciled-response table. The prompt prepares the question and must not settle the point: a model that picks a side has read the documents, and has not seen the system working."
  },
  metadataRows: [
    ["Working title",          "Verify before you score"],
    ["YouTube-optimised title", "Verify before you score: turning DPI questionnaire answers into findings"],
    ["Description (60 words)", "A questionnaire answer is what a body says about itself, and a desk result is what the public record suggests; neither is a finding yet. Six activities, an evidence ladder and four templates check every answer before it is scored. See three points Progressa's team verified. An AI prompt sets two disagreeing sources side by side and drafts the question to ask."],
    ["Tags",                    "DPI assessment, verification, evidence, validation workshop, templates, PAERA, education DPI, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (an assessment method: method step 4); §4.1 (the step with its roles, decision point and validation); §4.6 (an example of the output of the step); §6 (templates: the four templates for verification); §4.3 (AI integration — the clarification question)"],
    ["PAERA citations",         "5.4 Organisational Assessment & Roadmap, steps 2 to 4"],
    ["External-link list",      "PAERA v1.0, section 5.4 (https://paera.govstack.global/)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 1.7",
  title: "Score each domain: five stages and one table",
  runtime: "~5 min",
  words: 428,
  paeraAnchor: "UNDP, Digital Development Compass — Methodology (the five stages Basic, Opportunistic, Systematic, Differentiating and Transformational; scores rescaled between 0 and 5 with no zero scores; a row for digital public infrastructure with data exchange, identification and payments); PAERA v1.0 §3.3.1 (the domains), §5.3 (which gives no scale), and §5.1 with §5.4 (the five maturity levels of one organisation, a different measure). The criteria for each domain, and the way the Compass is laid over the five domains, are this course's own.",
  singleMessage: "Score each domain on five published stages against written criteria, so that two assessors reach the same result and the whole picture fits on one table.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Score each domain: five stages and one table'. Voice-over begins." },
    { text: "Two assessors who read the same evidence should reach the same score. If they do not, the score is an opinion, and a minister can set it aside. Written criteria on a published scale prevent that." },
    { cue: "Slide 2 — Title: 'Five published stages'. Body, five text rows: 'Basic — 0 to 1.' 'Opportunistic — 1 to 2.' 'Systematic — 2 to 3.' 'Differentiating — 3 to 4.' 'Transformational — 4 to 5.' Below them: 'UNDP Digital Development Compass: all scores rescaled between 0 and 5, with no zero scores.'" },
    { text: "The scale is the one UNDP publishes in its Digital Development Compass. It has five stages, under these names: Basic, Opportunistic, Systematic, Differentiating and Transformational. The Compass rescales all scores between zero and five, with no zero scores, so that each stage takes one unit of that range. The domains you score are those of PAERA, the GovStack reference architecture, which gives no scale of its own for a national assessment." },
    { cue: "Slide 3 — Title: 'The scoring rule'. Body, four text rows: '1. Each sub-component has written criteria at Basic, Systematic and Transformational.' '2. Each sub-component is placed at one stage, from verified positions only.' '3. Each stage scores the middle of its unit: 0.5, 1.5, 2.5, 3.5, 4.5.' '4. A domain's score is the mean of its sub-components; its stage is the unit the score falls in.'" },
    { text: "The rule that lays the Compass over the five domains is this course's own, and it has four parts. Each of the 26 sub-components has written criteria at three levels: Basic, Systematic and Transformational. Meeting part of the Systematic criterion places a sub-component at Opportunistic; part of the Transformational one, at Differentiating. Only verified positions are scored. Each stage scores the middle of its unit, from 0.5 for Basic to 4.5 for Transformational. A domain's score is the mean of its sub-components, to one decimal place, and its stage is the unit the score falls in." },
    { cue: "Slide 4 — Title: 'Progressa's maturity table'. Body, a five-row text table — Domain | Score | Stage: 'GOV | 1.9 | Opportunistic' 'ACC | 1.3 | Opportunistic' 'DAT | 1.3 | Opportunistic' 'INT | 2.1 | Systematic' 'IDN | 2.3 | Systematic'. Footer: 'Illustrative. Worked example E5.'" },
    { text: "Here is the result for Progressa, the fictional country of these examples, on one table. Governance, 1.9, Opportunistic. Access, 1.3, Opportunistic. Digital data, 1.3, Opportunistic. Interoperability, 2.1, Systematic. Digital identity, 2.3, Systematic. Each row also names a main strength and a development priority. For digital data, the strength is a working national identity register, and the priority is to make PLR, the learner registry, the authoritative learner register. The digital data score is the mean of six sub-components. Five sit at Opportunistic and one, data quality and master data, at Basic. That gives 1.3." },
    { cue: "Slide 5 — Demonstration segment: the scoring prompt applied to one domain of Progressa, digital data. Until the segment is recorded, the slide shows the steps of its storyboard as text, marked 'What a good run shows'." },
    { text: "The demonstration applies the scoring prompt to Progressa's digital data domain. The prompt proposes a stage for each sub-component, and quotes the evidence for each criterion. The assessor confirms or changes each stage in a written record. A good run passes when every stage rests on quoted, verified evidence and the arithmetic gives 1.3. One correction shows why the rule matters. Progressa's draft placed interoperability at 2.3, from an unverified desk result. But a session had already verified that the ministry of education is not a member of Linkup, the data exchange. Once that was pointed out, the score fell to 2.1. Its stage stayed Systematic." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Score each domain on five published stages against written criteria, so that two assessors reach the same result and the whole picture fits on one table.' Below it, the on-screen practice box (not narrated)." },
    { text: "Score every domain on five published stages against written criteria. Two assessors then reach the same result, and the whole picture fits on one table." },
    { cue: "Slide 7 — Title: 'Sources'. Body: UNDP, Digital Development Compass — Methodology (web page); PAERA v1.0, sections 3.3.1, 5.1, 5.3 and 5.4. The criteria and the scoring rule are this course's own, in the assessment toolkit. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Score each domain: five stages and one table'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.7) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Five-stages slide. Five text rows with their score ranges, and one line on the Compass.",
      "The published scale under its own names. Text-only."],
    ["3", "Scoring-rule slide. Four numbered text rows.",
      "The team's rule, from the scoring criteria of the assessment toolkit. Text-only."],
    ["4", "Progressa's maturity table. A five-row text table: domain, score, stage.",
      "The worked example of method step 5, built for Progressa and marked illustrative. The written guide carries figure F4, the maturity table of Progressa's five domains, marked illustrative. On the slide it is a plain text table."],
    ["5", "Demonstration segment: the scoring prompt applied to one domain of Progressa.",
      "Until the segment is recorded, the slide shows the storyboard's steps as text, marked 'What a good run shows'. The walkthrough needs only the scoring criteria of the assessment toolkit; see the storyboard below."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the Compass and PAERA; names the criteria as this course's own."]
  ],
  practice: "a proposed stage and score for every sub-component, each criterion quoted against the evidence",
  aiTip: {
    title: "Propose a stage for each sub-component with the scoring prompt",
    problem: "Placing twenty-six sub-components by hand, each against five rows of criteria and many pages of verified answers, is slow, and a tired assessor can skip a criterion. The scoring prompt of the assessment toolkit reads one domain's verified answers against its written criteria and proposes a stage for each sub-component, quoting the evidence for every criterion it counts as met or not met. The assessor then checks each proposal against its quotations, which is faster and leaves a record of why each stage was chosen.",
    prompt: "You are helping an assessment team score one domain of a country's digital public infrastructure. You propose; a person decides. DOMAIN: <domain name and code, for example \"Digital Data (DAT)\"> CRITERIA: <paste this domain's tables from the scoring criteria: every sub-component with its code, its name and its five rows, Basic, Opportunistic, Systematic, Differentiating and Transformational> VERIFIED ANSWERS: <paste the domain's answers. For each: the question code, the answer, the evidence attached to it, and the verification record that confirmed it. Mark any answer that was not verified as UNVERIFIED.> Rules: 1. Use only verified answers. List every answer marked UNVERIFIED under \"Answers not used\" and do not score from it. 2. For each sub-component, read its rows from Basic upward. Propose the highest stage whose description the evidence fully meets. A row that begins \"As Systematic, and\" also needs every part of the Systematic row. 3. For every part of a criterion you count as met or as not met, quote the evidence word for word and give its question code. A claim with no quotation behind it is not allowed. 4. If the evidence is not enough to place a sub-component, write \"cannot place\" and name the question that would settle it. Do not guess. Never fill in an answer that is missing. 5. Give each proposed stage its score: Basic 0.5, Opportunistic 1.5, Systematic 2.5, Differentiating 3.5, Transformational 4.5. The domain score is the mean of the sub-component scores, to one decimal place. The domain's stage is the unit the score falls in: below 1.0 Basic, from 1.0 Opportunistic, from 2.0 Systematic, from 3.0 Differentiating, from 4.0 Transformational. If any sub-component is \"cannot place\", do not compute the domain score. Write four parts: A. A table with one row per sub-component: code and name; proposed stage; score; the parts of the criterion met, each with its quotation and question code; the parts not met, each with its quotation and question code, or \"no evidence\". B. The domain score with its arithmetic written out, and the domain's stage; or, if a sub-component could not be placed, what is missing. C. Answers not used, and why. D. Every point where two pieces of evidence disagree, quoted side by side. Everything you write is a proposal for the assessor to confirm or change.",
    io: "Input: the domain's criteria, copied from the scoring criteria, and the domain's answers as verified, each with its evidence and its verification record. Output: a proposed stage and score for every sub-component, each criterion quoted against the evidence, the proposed domain score and stage, the answers left out, and the conflicts found.",
    safeguard: "The prompt proposes and the assessor decides. A stage with no quoted evidence behind it is not accepted. Where the assessor changes a proposed stage, the reason is written in the record of confirmation, so that a reviewer can follow it. The answers describe systems and bodies, not people: no person's personal data is given to the assistant."
  },
  metadataRows: [
    ["Working title",          "Score each domain: five stages and one table"],
    ["YouTube-optimised title", "Score DPI maturity on five published stages: written criteria, verified evidence and one table"],
    ["Description (60 words)", "Two assessors who read the same evidence should reach the same score. Score each of five domains on the five stages of the UNDP Digital Development Compass, against written criteria and from verified evidence only, and the whole picture fits on one table. See Progressa's maturity table and why one score fell. The scoring prompt is included, ready to copy."],
    ["Tags",                    "DPI maturity, UNDP Digital Development Compass, five stages, scoring criteria, maturity table, PAERA, education DPI, AI scoring"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (an assessment method: method step 5); §4.1 (the step with its decision point and its validation); §4.2 (international frameworks referenced: the UNDP Digital Development Compass); §4.6 (DPI maturity assessment results, an example output the terms of reference name); §4.3 (AI integration — the scoring prompt)"],
    ["PAERA citations",         "3.3.1 Overview (the domains); 5.1 Capabilities Assessment (the five levels of one organisation, a different measure); 5.3 Digital Public Infrastructure Assessment (no scale); 5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "UNDP, Digital Development Compass — Methodology (https://digitaldevelopmentcompass.undp.org/methodology); PAERA v1.0, sections 3.3.1, 5.1, 5.3 and 5.4 (https://paera.govstack.global/)"]
  ]
}));
body.push(
  pageBreak(),
  H3("Storyboard of the demonstration walkthrough — 1.7"),
  P("This storyboard stands in the place of the demonstration segment until it can be recorded. The walkthrough needs only the scoring criteria of the assessment toolkit, with its scoring prompt and its record of confirmation, and the verified positions of Progressa's digital data domain, which worked examples E3, E4 and E5 give as illustrative. Its result is known in advance, the stages of worked example E5, so the walkthrough also shows whether the prompt reaches them. Nothing in it has been run. When the segment is recorded, the script gains one sentence stating the result and its date."),
  genericTable([700, 2700, 3300, 3000], ["Step", "What is shown", "What the viewer sees", "What counts as a pass"], [
    ["1", "The two inputs", "The criteria of the digital data domain copied from the scoring criteria, D1 to D6 with five rows each, and the domain's answers as verified, each with its evidence and its verification record", "Every answer given to the prompt is verified; any answer that is not is marked UNVERIFIED"],
    ["2", "Part A of the proposal", "One row for each of D1 to D6: a proposed stage, a score, and the quotations for the parts of the criterion met and not met", "Every proposed stage quotes its evidence word for word, with its question code; no claim stands without a quotation"],
    ["3", "Part B, the arithmetic", "(1.5 + 1.5 + 0.5 + 1.5 + 1.5 + 1.5) ÷ 6 = 1.3, Opportunistic", "The arithmetic is written out, and the stage is the unit the score falls in"],
    ["4", "Parts C and D", "The answers not used, with the reason, and any two pieces of evidence that disagree, quoted side by side", "No unverified answer is used for a score"],
    ["5", "The record of confirmation", "The assessor's record for the domain: the stage proposed and the stage confirmed for each sub-component, with the reason for any change", "Each confirmed stage equals the stage in worked example E5, or the record gives the reason for the change with its evidence quoted"]
  ]),
  pageBreak()
);

// ---------- 1.8 ----------
body.push(...renderSubtopic({
  num: "3.8 Subtopic 1.8",
  title: "Foundational blocks and the sector's own",
  runtime: "~5 min",
  words: 450,
  paeraAnchor: "UNDP Compendium (2023), page 4, Exhibit 2 (its three layers); PAERA v1.0 §3.3.3 (digital ID, payments and legal data registries as basic national infrastructure), Annex 1, A1.2.5 (Registration and Digital Registry for a state registry) and Annex 3 (an Education Register among the main state registries); GovStack Identity Building Block specification, Version 2.0 (December 2025): ID §2 and ID §3",
  singleMessage: "Identity, payments and data exchange are foundations for every sector, while a learner register and its registration service belong to education and stand on them, and each must be funded as what it is.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Foundational blocks and the sector's own'. Voice-over begins." },
    { text: "Once the country is scored, the money requests come. The first question for each is whose system it is. Is it shared by every sector, or does it belong to one? Get that wrong, and the budget pays for the same thing twice." },
    { cue: "Slide 2 — Title: 'Three layers'. Body, three text rows: 'Sector applications — digital education, digital health, and others.' 'Core DPI — digital identity, digital payments, consent-based data sharing, others emerging.' 'Governance foundations — leadership, institutions, policy, law, engagement, technical expertise.'" },
    { text: "UNDP's compendium on digital public infrastructure draws three layers. At the bottom are the governance foundations: leadership, accountable institutions, policy, law, engagement with users, and technical expertise. In the middle is the core of the infrastructure: digital identity, digital payments and data sharing based on consent, with others emerging. On top are the sector applications, and digital education is one of them, beside digital health and others. So in UNDP's picture, education's own systems stand on the core. They are not part of it." },
    { cue: "Slide 3 — Title: 'Where the registers sit'. Body, three text rows: 'Basic national infrastructure: digital ID, payments, legal data registries.' 'A state registry needs two building blocks: Registration and Digital Registry.' 'The main state registries include an Education Register.'" },
    { text: "The registers come next. Digital ID, payments and legal data registries count as basic national infrastructure. A country should have a set of main state registries, and an Education Register is one of them. Digitalising a state registry needs two building blocks: Registration and a Digital Registry. So a learner register is a state register, but it belongs to education, and so does the registration service that writes to it." },
    { cue: "Slide 4 — Title: 'Identity is foundational; a learner's identity is not'. Body, two text rows: 'The Identity block covers foundational identity: proof of identity for a wide variety of public and private services.' 'A functional identity, for one purpose or one sector such as education, is outside its scope.'" },
    { text: "Identity shows why the line matters. The GovStack Identity specification covers foundational identity: proof of who a person is, for a wide variety of public and private services. It places functional identity, for one purpose or one sector, outside its scope, and it names education as one such sector. It also notes that where a proper foundational identity exists, a separate functional one is no longer needed. So education does not build an identity of its own. Its services use the national one." },
    { cue: "Slide 5 — Title: 'Progressa, sorted into the three layers'. Body, a three-row text table — Layer | Progressa | Funded as: 'Governance foundations | PDGA's mandate for the national exchange; the education act; the data protection act | Law and budget, decided above any one project' 'Core | PNIA's identity and sign-in; Linkup, the data exchange; the Payments block, which reaches PayPro through its payer bank | Once, for every sector' 'Education | PLR, the learner register; the learner registration service; PEMIS | By the sector, standing on the core'. Footer: 'Illustrative.'" },
    { text: "Now sort Progressa, the fictional country of these examples. Its governance foundations include the mandate of PDGA, the digital government authority, for the national exchange, the education act and the data protection act. Its core is the identity and sign-in of PNIA, the identity authority, and Linkup, the data exchange. A Payments block belongs there too: it reaches PayPro, the payment provider, through its payer bank, and it is not yet on Linkup. Education's own layer holds PLR, the learner register, and PEMIS, the school information system. The learner registration service, still to be built, belongs there too. Fund the core once, for every sector. Fund the register and the service as education's, built on the core. A sector's register funded as national infrastructure takes money from the core. A core funded inside one project leaves every other sector to build it again." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Identity, payments and data exchange are foundations for every sector, while a learner register and its registration service belong to education and stand on them, and each must be funded as what it is.' Below it, the on-screen practice box (not narrated)." },
    { text: "Identity, payments and data exchange serve every sector. The learner register and its registration service are education's own, standing on them. Fund each as what it is." },
    { cue: "Slide 7 — Title: 'Sources'. Body: UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium (2023), page 4, Exhibit 2; PAERA v1.0, section 3.3.3, Annex 1 (A1.2.5) and Annex 3; GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 2 and 3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Foundational blocks and the sector's own'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.8) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Three-layers slide. Three text rows, top to bottom: sector applications, core, governance foundations.",
      "UNDP's three layers in plain words. Text-only."],
    ["3", "Registers slide. Three text rows, each with its PAERA section.",
      "Where the registers sit, and the two blocks a registry needs. Text-only."],
    ["4", "Identity slide. Two text rows: foundational identity in scope, functional identity out of scope.",
      "The line drawn by the published Identity specification. Text-only."],
    ["5", "Progressa slide. A three-row text table: layer, Progressa's systems, how each is funded.",
      "The worked example, built for Progressa and marked illustrative. Plain text table."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify UNDP, PAERA and the Identity specification."]
  ],
  practice: "a three-question assessment with a recommended answer",
  aiTip: {
    title: "Decide whether a proposed system is a shared block, a sector's register or a sector's application",
    problem: "Proposals for new systems rarely say whether the system should be shared by every sector, kept as a sector's register, or built as one sector's application, and the answer decides who pays and who owns it. This prompt asks three questions of a proposed system and recommends one of the three answers, with its reasons.",
    prompt: "Below is a proposal for a new system in [country X] [paste the proposal: what the system does, who would use it, what data it holds, who would run it]. Below that is the list of the shared systems the country already has, such as identity, payments and data exchange [paste the list]. Answer three questions. (1) Who else would use it? Name the other sectors or bodies that would need the same function. (2) What does it need from the foundation? Name each existing shared system it would use, and anything it would build again that already exists. (3) Who should own it? Name the body whose mandate covers its data, and say whether that body serves one sector or the whole country. Then recommend one of three answers — a shared block, a sector's register, or a sector's application — with the reasons drawn from your three answers. Output: a three-question assessment with a recommended answer, and a list of the existing shared systems the proposal would duplicate.",
    io: "Input: a proposal for a new system and the list of the country's shared systems. Output: a three-question assessment with a recommended answer, and a list of the shared systems the proposal would duplicate.",
    safeguard: "Who owns a system is a decision of governance, taken by the body that decides the country's shared infrastructure, not by the prompt. Use the recommendation to prepare that decision; a model reading a proposal cannot see the mandates, budgets and agreements that settle ownership."
  },
  metadataRows: [
    ["Working title",          "Foundational blocks and the sector's own"],
    ["YouTube-optimised title", "Foundational DPI and the education sector's own systems: who builds what, and who pays"],
    ["Description (60 words)", "Identity, payments and data exchange serve every sector; a learner register and its registration service belong to education and stand on them. UNDP's three layers, PAERA's state registers and the GovStack Identity specification draw the line, and Progressa's systems are sorted by it. An AI prompt tests a proposed system: shared block, sector register or sector application."],
    ["Tags",                    "foundational DPI, sectoral building blocks, learner register, digital identity, UNDP, PAERA, GovStack, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks identified); §4.2 (international frameworks and standards referenced); §4.3 (AI integration — the three-question test)"],
    ["PAERA citations",         "3.3.3 Building Infrastructure; Annex 1, A1.2.5 State Registries; Annex 3 – Main state registries"],
    ["External-link list",      "UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 21 August 2023, page 4, Exhibit 2 (https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure); PAERA v1.0, section 3.3.3, Annex 1 (A1.2.5) and Annex 3 (https://paera.govstack.global/); GovStack Identity Building Block specification, Version 2.0, December 2025, sections 2 and 3 (https://specs.govstack.global/identity)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.9 ----------
body.push(...renderSubtopic({
  num: "3.9 Subtopic 1.9",
  title: "What comes first: the order of building",
  runtime: "~5 min",
  words: 458,
  paeraAnchor: "PAERA v1.0 §5.7.1 to §5.7.5 (four phases, the blocks of each, every prerequisite before a service opens, the limit on the third phase) and §3.3.3 (the two-tier approach); e-Estonia, 'e-Estonia story' and 'Frequently asked questions — Story of e-Estonia', cited for what the shared blocks became once they existed",
  singleMessage: "Build identity and payments first, bring in data exchange and registration with the first priority services, digitalise the registers next, and show one visible result early so that support holds.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What comes first: the order of building'. Voice-over begins." },
    { text: "Money for digital government comes in pieces: a donor here, a budget line there. Each piece is spent on something. Unless someone has fixed the order of building, the pieces arrive in an order that nobody chose." },
    { cue: "Slide 2 — Title: 'PAERA's four phases'. Body, four text rows: '1. Inception — Identity, Payment, and no-code or low-code development.' '2. High-priority use cases — the Information Mediator, Registration and other infrastructural blocks, with the first services.' '3. Initial transformation — all main state registries digitalised, in no more than 2 to 3 years.' '4. Mass-scale transformation — every government service.'" },
    { text: "PAERA, the GovStack reference architecture, gives an order in four phases. In the first phase, inception, the country puts in place the Identity and Payment building blocks. It adds a platform for building services with little or no code. In the second, it picks high-priority services and builds them fast. They are built on the Information Mediator, which is the data exchange layer, on Registration and on other shared blocks. In the third, all main state registries are digitalised, in no more than two to three years. The fourth completes the digitalisation of every government service. Each phase puts in place the blocks that the next one needs." },
    { cue: "Slide 3 — Title: 'Two rules for the order'. Body, two text rows: 'Every prerequisite is in place before a service opens to the public.' 'Citizens and businesses see a positive result in every phase.' Below them: 'PAERA 3.3.3: target the foundational elements, and show early results.'" },
    { text: "PAERA adds two rules. Every internal prerequisite must be in place before a service opens to the public. And citizens and businesses should always see a positive result. PAERA explains why both matter. Nobody wants to fund a digital identity while no service uses it, and no ministry can build personal services without one. The answer is to do two things at once. Put the foundational elements in place, and show early results that political leaders and the public can see. A service that opens before its foundations are ready fails in public, and the whole plan loses support." },
    { cue: "Slide 4 — Title: 'What Estonia's shared blocks became'. Body, three text rows: '2000 — the tax board's e-services.' '2001 — X-Road, the data exchange layer.' '2002 — the electronic identity and the digital signature.' Below them: 'The first services came before the shared blocks; once the blocks existed, they became part of the foundation.'" },
    { text: "Estonia's official record shows the order there. The tax board offered online tax returns in 2000. X-Road, the data exchange layer, followed in 2001, and the electronic identity with the digital signature in 2002. So in Estonia the first services came before the shared blocks. The lesson lies in what those blocks became once they existed. Estonia's own account names X-Road and the digital identity as part of the foundation that makes digital Estonia possible." },
    { cue: "Slide 5 — Title: 'Progressa's order of building'. Body, a four-row text table — Phase | What it brings | The result people see: '1 | Identity (PNIA) and a payment system (PayPro) already run: connect to them; set up the decision body and the legal basis | Online sign-in and fast payment, already offered to the public' '2 | The ministry on Linkup; the registration service; the learner register, brought forward; the Payments block on Linkup | A parent registers a child once' '3 | The learner register and registration in every district | Every district registers learners the same way' '4 | Every education service on the same blocks | Parents and learners see their own records'. Footer: 'Illustrative.'" },
    { text: "Here is the order for Progressa, the fictional country of these examples, on one page. Identity and payments already run there: PNIA, the identity authority, offers a sign-in, and PayPro, the payment provider, runs a fast-payment system. So phase one connects to them instead of building them, and sets up the decision body and the legal basis. Phase two brings the ministry of education onto Linkup, the data exchange. It builds the registration service, and brings the learner register forward because that service needs it. Its visible result: a parent registers a child once. Phase three takes the register to every district. Phase four lets parents and learners see their own records." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Build identity and payments first, bring in data exchange and registration with the first priority services, digitalise the registers next, and show one visible result early so that support holds.' Below it, the on-screen practice box (not narrated)." },
    { text: "Identity and payments first. Data exchange and registration with the first priority services. The registers next. And one result people can see, early, so that support holds." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 3.3.3 and 5.7.1 to 5.7.5; e-Estonia, 'e-Estonia story' and 'Frequently asked questions — Story of e-Estonia'. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'What comes first: the order of building'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.9) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four-phases slide. Four numbered text rows, each a phase and the blocks it brings.",
      "PAERA's word is 'phase'. The written guide carries figure F5, the order of building: PAERA's four phases and the blocks of each. On the slide it is four rows of text."],
    ["3", "Two-rules slide. Two text rows and one line from PAERA 3.3.3.",
      "The rules that hold the order together. Text-only."],
    ["4", "Estonia slide. Three dated text rows and one line on the lesson.",
      "Estonia is cited for what the shared blocks became once they existed, not as a case of identity coming before services. Text-only; no flags or emblems."],
    ["5", "Progressa slide. A four-row text table: phase, what it brings, the result people see.",
      "The worked example, built for Progressa and marked illustrative. Plain text table."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and e-Estonia."]
  ],
  practice: "the order the dependencies allow, in four phases, with every service placed before a block it needs marked",
  aiTip: {
    title: "Order your planned services and blocks by what each depends on",
    problem: "A plan lists services and blocks, but not always in an order their dependencies allow, and a service placed before a block it needs will be late or built badly. This prompt takes the planned services and blocks and returns the order their dependencies allow, marking every service that is placed before a block it needs.",
    prompt: "Below is the list of services and shared blocks that [country X] plans to build or connect, each with the year or phase in which it is planned [paste the list]. For each service, list the shared blocks it needs, such as identity, payments, the data exchange, registration and the registers it reads or writes. Then: (1) order all the items so that no service comes before a block it needs, and no block comes before a block it depends on; (2) mark every service that the current plan places before a block it needs, and name the missing block; (3) group the items into four phases — identity and payments; the first priority services, with the data exchange and registration; the state registers; every other service — and say which item in each phase gives a result the public can see. Order by dependency only; do not weigh cost or politics. Output: the order the dependencies allow, in four phases, with every service placed before a block it needs marked and the missing block named.",
    io: "Input: the list of planned services and blocks, with the planned year or phase of each. Output: the order the dependencies allow, in four phases, with every service placed before a block it needs marked and the missing block named.",
    safeguard: "The prompt orders by dependency only. Cost, the weight of each service to the government and what partners will fund are judged when the roadmap is prioritised and costed, by the people accountable for those decisions; an order that is right on dependencies can still be wrong on money."
  },
  metadataRows: [
    ["Working title",          "What comes first: the order of building"],
    ["YouTube-optimised title", "What to build first in digital public infrastructure: PAERA's order of building"],
    ["Description (60 words)", "Money for digital government arrives in pieces, and without an order of building the pieces arrive in an order nobody chose. PAERA sets four phases: identity and payments first, data exchange and registration with the first priority services, the registers next, and a visible result early. See Estonia's dates and Progressa's order. An AI prompt orders your services by dependency."],
    ["Tags",                    "DPI roadmap, sequencing, order of building, PAERA, GovStack, e-Estonia, education DPI, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (implementation sequencing); §4.2 (international frameworks and standards referenced); §4.3 (AI integration — the order of dependencies)"],
    ["PAERA citations",         "3.3.3 Building Infrastructure (the two-tier approach); 5.7.1 Overview; 5.7.2 Inception Phase; 5.7.3 High-priority Use Case Implementation; 5.7.4 Initial Transformation; 5.7.5 Mass-scale Transformation"],
    ["External-link list",      "PAERA v1.0, sections 3.3.3 and 5.7.1 to 5.7.5 (https://paera.govstack.global/); e-Estonia, 'e-Estonia story' and 'Frequently asked questions — Story of e-Estonia' (https://e-estonia.com/story/)"]
  ]
}));
body.push(pageBreak());

// ---------- 1.10 ----------
body.push(...renderSubtopic({
  num: "3.10 Subtopic 1.10",
  title: "The first proof for education: one service on four blocks",
  runtime: "~5 min",
  words: 451,
  paeraAnchor: "PAERA v1.0 §5.7.3 (rapid implementation of high-priority use cases), §5.7.4 (all main state registers in the third phase) and Annex 1, A1.2.5; the GovStack specifications of the blocks the service uses, each by its edition: Registration (the site's default edition), Digital Registries (Version 3.0-alpha; June 2026), Identity (Version 2.0; December 2025), Payments (Version 3.0; December 2025) and Information Mediator (1.1.1); Consent (1.3.0) and Messaging (site label messaging-23Q4.1), cited where the service touches consent and notification and not built. Bringing the learner register forward is KP3's own choice.",
  singleMessage: "The first proof for education is one service that registers a learner once: the sector's own registration service and learner register, using the country's identity and payment blocks through the data exchange layer.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The first proof for education: one service on four blocks'. Voice-over begins." },
    { text: "A roadmap that promises everything proves nothing for years. Pick one service that shows the shared blocks serving real people, and prove it first. For education, that service is registering a learner once." },
    { cue: "Slide 2 — Title: 'Why one priority service'. Body, two text rows: 'PAERA 5.7.3: high-priority services, prototyped quickly and rolled out in a few months.' 'PAERA Annex 1: a state registry needs two building blocks, Registration and Digital Registry.'" },
    { text: "PAERA, the GovStack reference architecture, starts its second phase with high-priority services. Each is prototyped quickly, and then a local system integrator rolls it out in a few months. That gives the government its first practical experience of building fast on shared blocks. A learner registration is such a service. Families meet it when a child starts school, and every later education service needs its record. It needs two building blocks, Registration and a Digital Registry: one registers the learner; the other keeps the record." },
    { cue: "Slide 3 — Title: 'One service, four blocks, on the data exchange layer'. Body, plain text boxes in three rows: top, 'Learner registration service'; middle, 'Registration (education's own)' and 'Learner register (education's own)'; lower, 'Identity (the country's)' and 'Payments (the country's)'; along the bottom, 'Data exchange layer'." },
    { text: "Here is the first proof. The registration service and the learner register are education's own, and the sector builds them. Identity and payments belong to the country, and the service uses them as they are. The data exchange layer joins them. The parent signs in through the national identity authority. The service registers the child, an officer approves, and the record is written to the learner register. The Payments block is set up beside the service and joined to the data exchange. A payment, such as a scholarship, can then reach a learner in the register." },
    { cue: "Slide 4 — Title: 'Progressa's shortlist'. Body, a five-row text table — Block | Owner | Specification and edition | Reused or built: 'Registration | The ministry of education; PLR in charge of the registration | GovStack Registration, default edition | Built for education' 'Digital Registries | PLR, the learner registry | GovStack Digital Registries, Version 3.0-alpha | Built: the authoritative register behind PLR' 'Identity | PNIA | GovStack Identity, Version 2.0 | Reused: the service signs people in through PNIA' 'Payments | The government's Payments block, with PayPro behind its payer bank | GovStack Payments, Version 3.0 | Set up and joined to Linkup; PayPro reused behind it' 'Data exchange | PDGA, which operates Linkup | GovStack Information Mediator, 1.1.1 | Reused: Linkup; the ministry joins as a member'. Footer: 'Consent (1.3.0) and Messaging are cited, not built. Illustrative.'" },
    { text: "Here is the shortlist for Progressa, the fictional country of these examples, on one table. For each block it names the owner, the published specification with its edition, and whether the block is reused or built. Registration and the learner register are built for education. The register is set up behind PLR, the learner registry. PLR is a member of Linkup, the data exchange, but is not yet the authoritative register. Identity is reused: the service signs people in through PNIA, the identity authority. Linkup, operated by PDGA, the digital government authority, is reused, and the ministry joins it. The Payments block is set up and joined to Linkup, and it reaches PayPro, the payment provider, through its payer bank. Consent and messaging are cited where the service touches them, and neither is built." },
    { cue: "Slide 5 — Title: 'Brought forward on purpose'. Body, two text rows: 'PAERA 5.7.4 digitalises all main state registries in its third phase.' 'This proof brings one register forward, the one its priority service needs. That choice is this course's own.'" },
    { text: "One choice must be stated openly. PAERA digitalises all main state registries in its third phase. This proof brings one register forward, the learner register, because its priority service cannot work without it. That choice is this course's own, not PAERA's. Present the proof to your minister as what it is: one priority service, proven on the country's foundation. It is not the first phase of the national plan, and it does not replace the plan." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The first proof for education is one service that registers a learner once: the sector's own registration service and learner register, using the country's identity and payment blocks through the data exchange layer.' Below it, the on-screen practice box (not narrated)." },
    { text: "Prove one service first: register a learner once, with the sector's own service and register, on the country's identity and payment blocks and its data exchange layer." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 5.7.3 and 5.7.4 and Annex 1 (A1.2.5); GovStack Building Block specifications — Registration (default edition), Digital Registries (Version 3.0-alpha; June 2026), Identity (Version 2.0; December 2025), Payments (Version 3.0; December 2025), Information Mediator (1.1.1), Consent (1.3.0), Messaging (messaging-23Q4.1). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The first proof for education: one service on four blocks'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 1.10) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Why-one-service slide. Two text rows, each with its PAERA section.",
      "The reason for one priority service. Text-only."],
    ["3", "Four-blocks slide. Plain text boxes in rows: the service; education's two blocks; the country's two blocks; the data exchange layer along the bottom.",
      "The one diagram of the video, made of text boxes only. The written guide carries figure F6, the first proof: four blocks on the data exchange layer, drawn from the specifications."],
    ["4", "Shortlist slide. A five-row text table: block, owner, specification and edition, reused or built, and a footer on consent and messaging.",
      "The worked example, built for Progressa and marked illustrative. Plain text table."],
    ["5", "Brought-forward slide. Two text rows.",
      "Says plainly which choice is KP3's own. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and each specification by its edition."]
  ],
  practice: "a shortlist table with one row per block",
  aiTip: {
    title: "Draft your sector's shortlist of blocks for its first priority service",
    problem: "Once the assessment is scored, the sector must say which blocks its first priority service needs, which of them the country already has, and which the sector must build. This prompt drafts that shortlist from the maturity table and the list of planned services.",
    prompt: "Below is the maturity table of [country X]'s digital public infrastructure, with each domain's stage, main strength and development priority [paste the table], and the list of services that the [sector] plans, with one line on each [paste the list]. Choose the one priority service that would show the value of the shared blocks soonest and that most later services depend on, and say why. For that service, list each building block it needs, for example registration, a register, identity, payments, the data exchange, consent and messaging. For each block give: its owner; the published specification it should follow, with its edition; whether it exists in the country today, quoting the evidence from the maturity table; and whether it is reused as it is, set up for the first time, or built by the sector. Output: a shortlist table with one row per block — owner, specification and edition, whether it exists today with its evidence, reused or built — and a short note on why this service comes first.",
    io: "Input: the maturity table and the list of the sector's planned services. Output: a shortlist table with one row per block — owner, specification and edition, whether it exists with its evidence, reused or built — and a note on why the service comes first.",
    safeguard: "Every block the prompt marks as existing is checked against the evidence of the assessment before the shortlist goes to the minister. A block that exists on paper but is not in use, or is not open to the sector, is a block the sector will end up building; the verified findings, not the model, settle which is which."
  },
  metadataRows: [
    ["Working title",          "The first proof for education: one service on four blocks"],
    ["YouTube-optimised title", "The first proof for education DPI: one learner registration on four shared blocks"],
    ["Description (60 words)", "A roadmap that promises everything proves nothing for years. Prove one priority service first: register a learner once, with education's own registration service and learner register, on the country's identity and payment blocks and its data exchange layer. See Progressa's shortlist with owners and specification editions. An AI prompt drafts your sector's shortlist of blocks."],
    ["Tags",                    "first proof, priority service, learner registration, building blocks, GovStack specifications, PAERA, education DPI, digital government"],
    ["Playlist (YouTube)",      "KP3 — Module 1: Where your country stands, and what to build first"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks identified); §4.4 (education as the illustration, with a method other sectors can use); §4.4 and §9 (the education demonstration); §4.3 (AI integration — the shortlist)"],
    ["PAERA citations",         "5.7.3 High-priority Use Case Implementation; 5.7.4 Initial Transformation; Annex 1, A1.2.5 State Registries"],
    ["External-link list",      "PAERA v1.0, sections 5.7.3 and 5.7.4 and Annex 1, A1.2.5 (https://paera.govstack.global/); GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration); GovStack Digital Registries Building Block specification, Version 3.0-alpha, June 2026 (https://specs.govstack.global/registries); GovStack Identity Building Block specification, Version 2.0, December 2025 (https://specs.govstack.global/identity); GovStack Payments Building Block specification, Version 3.0, December 2025 (https://specs.govstack.global/payments); GovStack Information Mediator Building Block specification, version 1.1.1 (https://specs.govstack.global/information-mediator); GovStack Consent Building Block specification, version 1.3.0 (https://consent.govstack.global/); GovStack Messaging Building Block specification, site label messaging-23Q4.1 (https://specs.govstack.global/messaging)"]
  ]
}));
body.push(pageBreak());

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Module 1 is the split-screen test: a practitioner watching the video on one half of the screen must be able to act on the other half. For Module 1, 'act' means screen a list of systems, place them on the five domains, plan an assessment, run a desk review, read a filled questionnaire, prepare a clarification interview, score a domain, sort a proposed system, order the planned services, or draft the shortlist of blocks for the first priority service. Each subtopic's AI usage tip carries that action, and the on-screen practice box on the recap slide names it."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template of the Knowledge Products and Video Materials Guide: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only — no images, no icons, no flags, no emblems, no logos. A diagram or text box is used only where strictly necessary; the two such cases in this module are the picture of the five domains on slide 2 of subtopic 1.2 and the four blocks on slide 3 of subtopic 1.10, whose labels are plain text. Where a table is shown, it is a plain text table. The single-sentence summary slide uses 28pt body type and carries the subtopic's single message word for word."),

  H3("4.3 The figures"),
  P("The figures belong to the written guide, not to the slides. The scripts name them from the outline's table of figures: F2, the five domains on one page (subtopic 1.2); F3, the nine steps with their roles and outputs (1.3); F4, the maturity table of Progressa's five domains, marked illustrative (1.7); F5, the order of building, PAERA's four phases and the blocks of each (1.9); and F6, the first proof, four blocks on the data exchange layer, drawn from the specifications (1.10)."),

  H3("4.4 No individuals on screen"),
  P("No individual appears in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over. The choice is ITU's; the scripts are written for either."),

  H3("4.5 Voice and tone"),
  P("Direct address ('your ministry', 'your minister'), plain English at about the eighth-grade level, short sentences. The Strategist register keeps the terms of the method — domain, sub-component, desk result, verified position, stage — few, and defines each in plain words when it first appears in a video. Each video stands on its own: every name it uses, such as PAERA, Progressa, PNIA, PLR, PDGA, PEMIS or Linkup, is explained where it first appears in that video, and no video refers to another."),

  H3("4.6 The demonstration segments, and what is not claimed"),
  P("Subtopics 1.4 and 1.7 each carry a demonstration segment, a screen recording with voice-over, in the place of their fifth slide. Neither has been recorded. Both need only the assessment toolkit: the question bank for 1.4, the scoring criteria with the scoring prompt for 1.7. Until a segment is recorded, its storyboard stands in its place, and the slide shows its steps as text marked 'What a good run shows'. The voice-over says what the walkthrough shows and what counts as a pass, never that it has run. When a segment is recorded, the script gains one sentence stating the result and its date."),

  H3("4.7 The worked examples and the toolkit"),
  P("Every worked example is built for Progressa and derived from no country's results. The scripts quote the worked examples E1 to E5 and the assessment toolkit as they stand in the public repository, under KP3-DPI/examples/ and KP3-DPI/toolkit/: the names, scores, identifiers and instruments on the slides are theirs. The scoring prompt of subtopic 1.7 is the toolkit's own, word for word."),

  H3("4.8 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata, and every script refers to external material with the convention 'Find the link in the description' rather than reading addresses aloud. The aggregate list across the ten subtopics is in Section 6."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting of version 0.2 raised the items below. They are forwarded for discussion with ITU."),

  H3("5.1 Source claims to keep under watch"),
  P("Two sources are web pages with no edition: UNDP's page on digital public infrastructure (subtopic 1.1) and the methodology page of UNDP's Digital Development Compass (subtopic 1.7). Both were read on 2 October 2026 and say what the scripts say; they are to be read again before the final delivery."),
  P("The World Bank's report for the G20 gives India's change in account ownership in more than one form. The script of subtopic 1.1 uses the figure of its page 2, from about one in four adults in 2008 to over 80 percent, with the report's own estimate of up to 47 years without digital public infrastructure and its caution that other policies mattered as well."),
  P("Subtopic 1.1 quotes PAERA section 2.6 in part: digital public infrastructure 'shapes what can be built on top of it'. The script does not describe any foundational block as free of values; the four marks replace that idea."),

  H3("5.2 Choices this bundle makes"),
  P("Marked place 1 of 2 (naming). ITU has not answered whether the country in which the method was first applied may be named. Subtopic 1.3 is written without the sentence of provenance that the outline would add if ITU agrees, and the build script carries a comment at the point where that one sentence would go. Nothing else in the subtopic depends on the answer."),
  P("Subtopic 1.10 brings the learner register forward into the first proof, although PAERA section 5.7.4 places the digitalisation of all main state registers in its third phase. The choice is KP3's own, and the script says so."),
  P("The worked examples name no body as the operator of Progressa's Payments block. The shortlist of subtopic 1.10 names it as the government's Payments block, with PayPro behind its payer bank, and adds no operator."),

  H3("5.3 Editorial calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'A roadmap that promises everything proves nothing for years' (1.10); 'Score them as they stand, and the first official who disagrees can overturn your result' (1.6); 'Get that wrong, and the budget pays for the same thing twice' (1.8)."),
  P("The project's standing rules ask for African signposts. No accepted research has read a public source on an African country for these subjects, so this module names none; one is added only when a public source for it has been read and accepted. The benchmarks used are India and Brazil (1.1) and Estonia (1.9), each with its source, year and page."),

  H3("5.4 Dependencies"),
  P("The demonstration of subtopic 1.4 runs the desk assessment on Progressa's public record. That record exists today only as the list of six sources in worked example E2; recording the segment needs those documents written for Progressa, or the segment is recorded on the illustrative results E2 gives. The demonstration of subtopic 1.7 needs only the scoring criteria and the verified positions the worked examples give. Figures F2, F3, F5 and F6 are drawn; figure F4 is drawn from worked example E5 by a separate task."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the ten subtopics for ITU's video production pipeline, to be split by subtopic into the video descriptions. Every address is a public one, and each is the one the KP3 outline gives for its source."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["1.1", "UNDP, Digital public infrastructure — https://www.undp.org/digital/digital-public-infrastructure; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure (21 August 2023), pages 3 and 4 — https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure; PAERA v1.0, sections 2.6 and 3.3.1 — https://paera.govstack.global/; World Bank, G20 Policy Recommendations for Advancing Financial Inclusion and Productivity Gains through Digital Public Infrastructure (2023), page 2 — https://openknowledge.worldbank.org/handle/10986/40421; BIS Bulletin No 52 (23 March 2022), page 5 — https://www.bis.org/publ/bisbull52.htm"],
    ["1.2", "PAERA v1.0, sections 2.3, 2.5, 3.1, 3.3.1 and 3.4.1 to 3.4.4 — https://paera.govstack.global/"],
    ["1.3", "PAERA v1.0, sections 3.1.3, 5.3 and 5.4 — https://paera.govstack.global/; UNDP, The DPI Approach: A Playbook (21 August 2023), page 23 — https://www.undp.org/publications/dpi-approach-playbook"],
    ["1.4", "PAERA v1.0, sections 3.1.3 and 5.3 — https://paera.govstack.global/"],
    ["1.5", "PAERA v1.0, sections 5.3 and 5.4 — https://paera.govstack.global/"],
    ["1.6", "PAERA v1.0, section 5.4 — https://paera.govstack.global/"],
    ["1.7", "UNDP, Digital Development Compass — Methodology — https://digitaldevelopmentcompass.undp.org/methodology; PAERA v1.0, sections 3.3.1, 5.1, 5.3 and 5.4 — https://paera.govstack.global/"],
    ["1.8", "UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure (21 August 2023), page 4, Exhibit 2 — https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure; PAERA v1.0, section 3.3.3, Annex 1 (A1.2.5) and Annex 3 — https://paera.govstack.global/; GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 2 and 3 — https://specs.govstack.global/identity"],
    ["1.9", "PAERA v1.0, sections 3.3.3 and 5.7.1 to 5.7.5 — https://paera.govstack.global/; e-Estonia, 'e-Estonia story' and 'Frequently asked questions — Story of e-Estonia' — https://e-estonia.com/story/"],
    ["1.10", "PAERA v1.0, sections 5.7.3 and 5.7.4 and Annex 1, A1.2.5 — https://paera.govstack.global/; GovStack Registration Building Block specification, default edition — https://specs.govstack.global/registration; Digital Registries, Version 3.0-alpha (June 2026) — https://specs.govstack.global/registries; Identity, Version 2.0 (December 2025) — https://specs.govstack.global/identity; Payments, Version 3.0 (December 2025) — https://specs.govstack.global/payments; Information Mediator, version 1.1.1 — https://specs.govstack.global/information-mediator; Consent, version 1.3.0 — https://consent.govstack.global/; Messaging, site label messaging-23Q4.1 — https://specs.govstack.global/messaging"]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP3 Module 1 — Video Script Bundle v0.2 (ITU-aligned)",
  description: "Video script bundle for KP3 Module 1 (where your country stands, and what to build first), written on the KP3 outline version 0.3 and aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP3 Module 1 Script Bundle v0.2 · 2 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP3_Module1_Script_Bundle_v0.2.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
