// Build KP3 Module 4 — Video Script Bundle v0.1
// v0.1 (1 Oct 2026): written afresh on the KP3 outline and content plan, version 0.3, section 1, module 4.
//   Each single message is the outline's, word for word. Every source cited is one the outline names for that
//   subtopic. The module follows the Identity specification, "Version 2.0; December 2025", and the Payments
//   specification, "Version 3.0; December 2025". Configurations I1 to I7 and P1 to P7 are not built, so the
//   demonstration segments of 4.3 and 4.5 are storyboards on the specimens in KP3-DPI/specimens/identity-payments/,
//   and no line says that anything runs.
// Education DPI Roadmap · Module 4 — Identity and payments
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
// Helper functions are those of the KP2 bundles, as the KP3 module 2 bundle of version 0.2 carries them.

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
const COLOR_VISUAL_BG    = "EAF1F8";  // visual / production cue
const COLOR_VISUAL_BD    = "2E75B6";
const COLOR_AI_BG        = "EEF7EE";  // AI usage tip
const COLOR_AI_BD        = "2E7D32";
const COLOR_PULL_BG      = "FFF8E1";  // single-message highlight
const COLOR_PULL_BD      = "E65100";

const border = { style: BorderStyle.SINGLE, size: 4, color: COLOR_BORDER };
const cellBorders = { top: border, bottom: border, left: border, right: border };
const cellMargin  = { top: 90, bottom: 90, left: 130, right: 130 };

// Persona for KP3 Module 4 (the Architect register, outline v0.3, section 1)
const PERSONA_A = "A (Architect) — the ministry's technical lead or solution architect who connects its services to the identity block and the Payments block instead of building either again";

function P(text, opts = {}) {
  return new Paragraph({ spacing: { before: 80, after: 80 }, ...opts,
    children: [new TextRun({ text, font: ARIAL, size: 21, ...(opts.run || {}) })] });
}
function PItalic(text) {
  return new Paragraph({ spacing: { before: 60, after: 60 },
    children: [new TextRun({ text, font: ARIAL, size: 20, italics: true, color: COLOR_GREY_TXT })] });
}
function H1(t, opts = {}) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 280, after: 140 }, ...opts,
    children: [new TextRun({ text: t, font: ARIAL, size: 32, bold: true, color: COLOR_HEAD })] });
}
function H2(t, color = COLOR_HEAD, opts = {}) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 220, after: 100 }, ...opts,
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
function boxTable(fill, bd, children, margins = { top: 100, bottom: 100, left: 200, right: 200 }) {
  const W = 9700;
  const cBorder = { style: BorderStyle.SINGLE, size: 6, color: bd };
  const cBorders = { top: cBorder, bottom: cBorder, left: cBorder, right: cBorder };
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ children: [
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
function practiceBox(task, artefact) {
  return boxTable(COLOR_GREY_BG, COLOR_HEAD, [new Paragraph({ children: [
    new TextRun({ text: "On-screen practice box (recap slide, not narrated): ", font: ARIAL, size: 19, bold: true, color: COLOR_HEAD }),
    new TextRun({ text: "Do this on your own sector. " + task.replace(/\.$/, "") + ". ", font: ARIAL, size: 19, bold: true }),
    new TextRun({ text: "The prompt in the companion material gives you " + artefact.replace(/\.$/, "") + ". Before the next video.", font: ARIAL, size: 19 })
  ] })]);
}

// ---------- helper: render a video subtopic block ----------
function renderSubtopic({ num, title, runtime, words, paeraAnchor, singleMessage,
                         scriptBeats, slideSpecRows, practice, aiTip, metadataRows }) {
  const out = [];
  // Each subtopic after the first starts on a fresh page; a page break before the heading, rather than a
  // break paragraph after the subtopic, leaves no empty page when a subtopic ends at the foot of a page.
  out.push(H2(num + " — " + title, COLOR_HEAD, num.startsWith("3.1 ") ? {} : { pageBreakBefore: true }));
  out.push(specTable([
    ["Persona",        PERSONA_A],
    ["Target runtime", runtime + " (≈" + words + " spoken words)"],
    ["Anchor",         paeraAnchor]
  ]));
  out.push(singleMessageBox(singleMessage));
  out.push(H3("Script (voice-over over text-only slides)"));
  out.push(PItalic("All slides follow the ITU template: title Arial Bold 28pt, body Arial 18pt, background #E5F5FB; text only; no images; no individuals on screen."));
  for (const beat of scriptBeats) {
    if (beat.cue) out.push(visualCueBox(beat.cue));
    if (beat.text) out.push(P(beat.text));
  }
  out.push(H3("On-screen slide specification"));
  out.push(genericTable([900, 3400, 5400], ["Slide", "Element (text-only)", "Notes"], slideSpecRows));
  if (practice) out.push(practiceBox(aiTip.title, practice));
  out.push(spacer(80));
  out.push(aiPromptBox(aiTip.title, aiTip.problem, aiTip.prompt, aiTip.io, aiTip.safeguard));
  out.push(H3("Metadata"));
  out.push(specTable(metadataRows));
  return out;
}

// The storyboards are written in the body as plain H3, P and genericTable calls with literal column and
// header arrays, so that the Markdown rendering (bundle_to_md.py), which reads the body only, carries them
// as well as the .docx.

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
    children: [new TextRun({ text: "Module 4 — Identity and payments",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",             "Video script bundle for Module 4 of KP3"],
    ["Version",              "v0.1 — written on the KP3 outline and content plan, version 0.3 (1 October 2026)"],
    ["Date",                 "1 October 2026"],
    ["Module persona",       PERSONA_A],
    ["Subtopics",            "Six subtopics (4.1 – 4.6), each shipped as one ~5-minute standalone video"],
    ["Module runtime",       "Approximately 27 minutes across six standalone videos"],
    ["Specifications taught", "GovStack Identity Building Block specification, Version 2.0, December 2025; GovStack Payments Building Block specification, Version 3.0, December 2025"],
    ["Configurations",       "I1 to I7 and P1 to P7, the colleague's build. None is built at the date of this bundle; subtopics 4.3 and 4.5 are taught on specimens marked 'specimen, not yet run', and their demonstration segments are storyboards"],
    ["Prepared by",          "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("Module 4 connects the registration service of KP3's first proof for education to two blocks that a country builds once and every service then uses: identity and payments. Its lesson is reuse. The six videos teach why identity is built once, what the published Identity block does and how to check what a country's identity authority really offers, how a service connects to the identity block as its registered client, what the Payments block is and which payment systems stand behind it, how a service is set up to pay through the block, and why the saving from reuse is visible only to someone who plans for the whole government. Every video is taught from the published GovStack specifications and shown on Progressa, the fictional country of the Knowledge Products. Each subtopic carries an AI usage tip with a prompt ready to copy. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the six video scripts of Module 4 of Knowledge Product 3, the Education DPI Roadmap, with the specification of their text-only slides, the AI usage tip of each subtopic, the data that describe each video, and a storyboard for each of the two demonstration walkthroughs the module carries, in subtopics 4.3 and 4.5. It is written from the KP3 outline and content plan, version 0.3, which fixes for each subtopic its single message, its sources, its worked example, its AI usage tip and its configurations."),

  H3("1.2 What Module 4 teaches, and what it does not claim"),
  P("Module 4 is written for the Architect: the ministry's technical lead or solution architect who connects its services to the shared blocks instead of building them again. It is taught from two published specifications, the GovStack Identity Building Block specification in its edition 'Version 2.0; December 2025' and the GovStack Payments Building Block specification in its edition 'Version 3.0; December 2025', with the Registration specification and the Digital Registries specification where a subtopic names them. Subtopic 4.1 also cites the World Bank's study of the cost drivers of identification systems (2018), subtopic 4.4 the Bank for International Settlements' Bulletin No 52 on Brazil's Pix (2022), and subtopic 4.6 PAERA, sections 3.3.3 and 5.2. The worked examples are built for Progressa: the national identity authority PNIA, the learner registry PLR, the ministry of education MoEYS, the government's Payments block, and PayPro, Progressa's payment provider."),
  P("Three statements hold throughout. The identity block verifies who a person is and issues nothing: a service checks a person through PNIA's sign-in with OpenID Connect, with the person present, and keeps the identifier PNIA gives to that service, never the national number. PLR has been a member of Linkup, the data exchange that KP2 set up, since KP2, with one enrolment service; KP3 sets up the authoritative learner register behind it, and that register keeps the identifier PNIA gives to the registration service beside a learner number of its own. And the Payments block is what the country configures: PayPro is one of the payment systems in the market and is reached through the block's payer bank."),
  P("The fourteen configurations of the module, I1 to I7 and P1 to P7, are built by a colleague as a separate piece of work, which has not started. Until each is built and its check has passed, subtopics 4.3 and 4.5 show the configuration as a specimen, a file written for Progressa in the specification's terms and marked 'specimen, not yet run', and each demonstration segment exists as a storyboard. The scripts say what each check runs and what counts as a pass; they do not say that anything runs. If the build offers only the read of a person by national number that KP2 left, subtopic 4.3 still teaches the published connection from the specification, and its demonstration shows that read under its own name, as a contract of Progressa's beyond the published set."),

  H3("1.3 How to read this document"),
  P("Section 2 gives the module at a glance. Section 3 holds the script of each subtopic, with its slide specification, its on-screen practice box, its AI usage tip and its metadata, followed, for subtopics 4.3 and 4.5, by the storyboard of its demonstration walkthrough. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate list of external links."),
  P("Within each script, three rendering conventions are used: shaded blocks are on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script."),

  pageBreak()
);

// ---------- AT A GLANCE ----------
body.push(
  H1("2. Module 4 at a glance"),
  P("Six standalone videos, all in the Architect register. Total runtime approximately twenty-seven minutes. Each video has one single message, taken word for word from the KP3 outline, and can be understood on its own."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["4.1", "Why identity is built once",
      "An identity system is costly to build and to run, so a country builds it once and every service uses it, and a ministry that builds its own pays those costs a second time.", "~5 min"],
    ["4.2", "The published Identity block, and what the identity authority offers today",
      "The published Identity block verifies who a person is, releases only what that person approves and issues no learner identity, so check what your identity authority really offers before you plan on it.", "~5 min"],
    ["4.3", "Generating the identity connection",
      "A service connects to the identity block as its registered client, asks only for what it needs, and keeps the identifier the block gives to that service, never the national number.", "~5 min"],
    ["4.4", "The Payments block and the payment systems behind it",
      "The Payments block is not a new payment system: it connects government programmes to the payment systems your country already has, so every programme pays through one shared connection.", "~4 min"],
    ["4.5", "Generating the payment connection",
      "To pay through the block you configure the sender, the programme, the beneficiary, the payment and the route for its status, and the proof is one test payment whose status comes back.", "~4 min"],
    ["4.6", "Reuse is the return on planning",
      "Learner registration reuses the identity block and the scholarship payment reuses the Payments block, a saving visible only to someone who plans for the whole government, because inside one project building your own looks quicker.", "~4 min"]
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
  title: "Why identity is built once",
  runtime: "~5 min",
  words: 454,
  paeraAnchor: "GovStack Identity specification, Version 2.0 (December 2025): ID §2.3.1, ID §2.4; GovStack Registration specification, default edition: REG §9.1.3; World Bank, Understanding Cost Drivers of Identification Systems (2018), pages 3, 5 and 7",
  singleMessage: "An identity system is costly to build and to run, so a country builds it once and every service uses it, and a ministry that builds its own pays those costs a second time.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why identity is built once'. Voice-over begins." },
    { text: "A ministry of education that wants to know who its learners are may be tempted to issue an identity of its own. Before it does, someone should show the finance ministry what that choice costs, and who has already paid it." },
    { cue: "Slide 2 — Title: 'Not an ordinary registration system'. Body, three text rows: 'It establishes a person's foundational identity.' 'Every digital interaction of that person rests on it.' 'It attracts attackers, so it demands the highest security.'" },
    { text: "The GovStack Identity specification makes a sharp point. An identity system is not like the registration screen of an ordinary application. It establishes a person's foundational identity, the base for every digital interaction that person will have. That makes it valuable to the person and attractive to attackers, so it demands the highest level of security. Enrolling people well takes time, documents and trained staff. Running it well is a national task, not a side task of one ministry." },
    { cue: "Slide 3 — Title: 'What identity systems cost: the World Bank's study'. Body, two text rows: 'Six categories made up over 90 percent of the cost in the start-up phase: human resources; the identity credential; central IT infrastructure; physical establishments; enrolment IT infrastructure; information, education and communication.' 'Once the system runs, human resources are often greater than 80 percent of the annual cost.' Footer: 'World Bank, 2018, page 3.'" },
    { text: "The World Bank studied what foundational identity systems cost. It found six categories: human resources, the identity credential, central IT infrastructure, physical establishments such as offices, enrolment IT infrastructure, and information, education and communication. Together they made up over 90 percent of the cost in the start-up phase. Once a system runs, human resources are often greater than 80 percent of its annual cost. That is people, offices and machines, paid every year." },
    { cue: "Slide 4 — Title: 'Two findings for a ministry tempted to go alone'. Body, two text rows: 'The credential ranged from as low as 3% to over 40% of total cost (page 5).' 'The way the government bought the system changed the overall cost by 25 percent to over 100 percent (page 7).'" },
    { text: "Two more findings matter for a ministry tempted to go alone. The credential, the card or document in the person's hand, ranged from as low as 3 percent to over 40 percent of the total cost. And the way the government bought the system changed the overall cost by 25 percent to over 100 percent. A sector scheme would carry those costs again, and would have to get its own purchase right again." },
    { cue: "Slide 5 — Title: 'Progressa: a learner identity of its own, or PNIA's service'. Plain-text table, three columns — 'Cost category' · 'If MoEYS ran its own learner identity' · 'If MoEYS uses PNIA's service'. Six rows, one per category of the study. No figures in any cell." },
    { text: "Here is Progressa. Suppose the ministry of education, MoEYS, gave every learner an identity of its own. Category by category it would need staff to enrol and support learners, cards to print and hand out, central systems with their back-up, offices for enrolment, kits for the schools, and campaigns to explain it all. The national identity authority, PNIA, already carries each of these. Using PNIA's service, the ministry carries one thing: the work of connecting its service and testing it. No figures are given here. The point is which costs would appear twice." },
    { cue: "Slide 6 — Title: 'Reuse what exists'. Body, two text rows: 'A country that runs an identity system reuses it behind a services facade.' 'An applicant can register on a service by signing in with the foundational identity.'" },
    { text: "The specifications expect exactly this. A country that already runs an identity system, such as a population register or an identity document system, reuses it, equipped with a services facade, so that every other block can use it. The Registration specification goes the same way: an applicant can register on a service by signing in with the foundational identity. The country builds identity once, and every service uses it." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An identity system is costly to build and to run, so a country builds it once and every service uses it, and a ministry that builds its own pays those costs a second time.' Below it, the on-screen practice box (not narrated)." },
    { text: "Identity costs a great deal to build and more to run. A country pays that cost once. A ministry that builds its own pays it again." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 2.3.1 and 2.4; GovStack Registration Building Block specification, section 9.1.3; World Bank, Understanding Cost Drivers of Identification Systems (2018), pages 3, 5 and 7. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Why identity is built once'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 4.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Not-an-ordinary-system slide. Three text rows: foundational identity, the base of every interaction, the highest security.",
      "The specification's own point, in plain words. Text-only."],
    ["3", "Cost-study slide. Two text rows: the six categories and their share in the start-up phase; human resources in the running phase. Footer with the page.",
      "Each figure with its unit, its year and its page. Text-only."],
    ["4", "Two-findings slide. Two text rows: the credential's share; the effect of the way of buying.",
      "Figures as the study states them, with their pages. Text-only."],
    ["5", "Progressa slide. Plain-text table: cost category, a learner identity of the ministry's own, the use of PNIA's service. No figures.",
      "The worked example, built for Progressa. The table names categories and invents no cost."],
    ["6", "Reuse slide. Two text rows: the services facade; self-registration through the foundational identity.",
      "Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the specifications and the study."]
  ],
  practice: "a table of the study's six cost categories, each marked as duplicated or not by the proposed scheme",
  aiTip: {
    title: "Find which identity costs a sector scheme would pay twice",
    problem: "When a sector proposes an identity scheme of its own, such as a learner card, the Architect needs to show which costs the country would carry a second time. This prompt sets the proposal against the six cost categories of the World Bank's study of identification systems, and estimates no amounts.",
    prompt: "Below is a proposal from [the ministry] in [country X] to set up its own identity scheme for [the people the sector serves]: [paste the proposal — what it would enrol, what it would issue, who would run it]. Below that is what the national identity authority, [the authority], offers today: [paste its services and how a service connects to them]. Use the six cost categories of the World Bank's 2018 study 'Understanding Cost Drivers of Identification Systems': human resources; the identity credential; central IT infrastructure; physical establishments; enrolment IT infrastructure; information, education and communication. For each category say: (1) what the proposed scheme would have to set up; (2) whether the national authority already carries it; (3) whether the category would therefore be duplicated (yes, no or partly), with one line of reason. Do not estimate any amount. Output: a table of the study's six cost categories, each marked as duplicated or not by the proposed scheme, plus three bullets the Architect can take to the finance ministry.",
    io: "Input: the sector's proposal and a description of what the national identity authority offers. Output: a table of the study's six cost categories, each marked as duplicated or not by the proposed scheme, and three bullets for the finance ministry.",
    safeguard: "The prompt lists categories and estimates no amounts. Any figure the model offers is invented: cost figures come only from the country's own budget records or from a costing made for this proposal, never from the prompt."
  },
  metadataRows: [
    ["Working title",          "Why identity is built once"],
    ["YouTube-optimised title", "Why a country builds identity once: what the World Bank found identity systems cost"],
    ["Description (60 words)", "An identity system is costly to build and to run. The World Bank found six cost categories making up over 90 percent of start-up cost, and human resources above 80 percent of annual cost once running. So a country builds identity once and every service uses it. Five minutes for architects. An AI prompt shows which costs a sector scheme would duplicate."],
    ["Tags",                    "digital identity, foundational identity, identity cost, World Bank ID4D, GovStack identity building block, reuse, education DPI, digital public infrastructure"],
    ["Playlist (YouTube)",      "KP3 — Module 4: Identity and payments"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks; prioritisation of investments); §4.2 (international frameworks and standards); §4.3 (AI integration — cost-duplication prompt)"],
    ["PAERA citations",         "None. The subtopic cites the GovStack Identity and Registration specifications and the World Bank study."],
    ["External-link list",      "GovStack Identity Building Block specification, Version 2.0, December 2025 (https://specs.govstack.global/identity), sections 2.3.1 and 2.4; GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), section 9.1.3; World Bank, Understanding Cost Drivers of Identification Systems, 2018 (https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf), pages 3, 5 and 7"]
  ]
}));
body.push(
  H3("Worked example of 4.1 — a learner identity of the ministry's own, set beside the use of PNIA's service"),
  P("Built for Progressa (rule B). The six categories are those of the World Bank's study, page 3. No cost is given or invented; the table shows which costs would appear twice."),
  genericTable([2600, 3700, 3400], ["Cost category (World Bank, 2018)", "If MoEYS ran its own learner identity", "If MoEYS uses PNIA's service"], [
    ["Human resources", "Staff to enrol learners and parents, to run the system and to answer their questions, every year", "The ministry's team that connects the service to PNIA and tests the connection"],
    ["The identity credential", "Cards or documents to produce, personalise and hand out to every learner", "None: the person signs in with what PNIA has already issued"],
    ["Central IT infrastructure", "Central systems, the checks against duplicate enrolment, and a back-up site", "None beyond the registration of the service as a client of PNIA"],
    ["Physical establishments", "Offices and places of enrolment", "None"],
    ["Enrolment IT infrastructure", "Enrolment equipment for schools and offices", "None"],
    ["Information, education and communication", "Campaigns to explain the scheme, a way to handle complaints, training", "A notice telling parents and learners how to sign in with PNIA"]
  ]),
);

// ---------- 4.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 4.2",
  title: "The published Identity block, and what the identity authority offers today",
  runtime: "~5 min",
  words: 465,
  paeraAnchor: "GovStack Identity specification, Version 2.0 (December 2025): ID §2, ID §3, ID §2.2, ID §4, ID §4.1, ID §4.1.1, ID §4.1.2, ID §5.1.2, ID §6, ID §8, ID §8.1, ID §9.1.1",
  singleMessage: "The published Identity block verifies who a person is, releases only what that person approves and issues no learner identity, so check what your identity authority really offers before you plan on it.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The published Identity block, and what the identity authority offers today'. Voice-over begins." },
    { text: "Before a ministry plans a service on the national identity, someone has to answer a plain question. What does the identity authority actually offer today, and is it what the published Identity block offers? The two are often not the same." },
    { cue: "Slide 2 — Title: 'Foundational, not functional'. Body, two text rows: 'Foundational identity: proof of who a person is, for many public and private services — the block's subject.' 'Functional identity: proof for one purpose or one sector, such as education — outside the block.'" },
    { text: "The block's subject is foundational identity: the proof of who a person is, which serves a wide range of public and private services. Functional identity, the proof used for one purpose or one sector, is outside it, and the specification names education among the functional domains. So the block issues no learner identity. A learner number belongs to the education sector and its register. The block's work is to verify the person behind it." },
    { cue: "Slide 3 — Title: 'What the block offers, and to whom'. Body, two text rows: 'Six services: enrolment, identity verification, queries, credential management, federation with other identities, notifications.' 'Four actors: the administrator, registered partners, users, subscribers.'" },
    { text: "The specification lists six services the block offers to others: enrolment, identity verification, queries on identity data for authorised partners, credential management, federation with a person's other identities, and notifications of events such as a birth. Four kinds of actor use it: the administrator who runs it, registered partners, the users who manage their own identity, and subscribers to notifications. A service of the ministry of education is a registered partner." },
    { cue: "Slide 4 — Title: 'The national number stays inside'. Body, two text rows: 'The unique identity number is kept secret inside the block.' 'Each relying service receives an identifier made for that service and that person.'" },
    { text: "Two rules shape every connection. When a person is enrolled, the block creates a unique identity number and keeps it secret inside the block. Each relying service receives instead an identifier made for that service and that person. It is the same each time the person signs in to that service, and different from the one any other service receives. The person can be verified everywhere, and no service holds the national number." },
    { cue: "Slide 5 — Title: 'How the published block verifies'. Body, three text rows: 'The published interfaces are a minimal set; verification is OpenID Connect.' 'The person's browser goes to the block's own screens, where the person signs in and approves what may be shared.' 'Only the calls for the token and for the person's information pass from server to server.'" },
    { text: "The published interfaces are a minimal set, and verification among them is OpenID Connect, a common standard for signing in. In the published flow the person's browser is taken to the block's own screens. The person signs in there and approves what may be shared, and the block releases only that. Only the calls for the token and for the person's information pass from server to server. The specification names the Information Mediator for building blocks that talk to one another, not for the person's own sign-in." },
    { cue: "Slide 6 — Title: 'Progressa: what PNIA offers today, beside the published block'. Plain-text table, two columns — 'PNIA's present service on Linkup' · 'The published Identity block'. Rows: 'A read of a person by national number' / 'A sign-in through OpenID Connect'; 'No person present' / 'The person present, approving what is shared'; 'Keyed on the national number' / 'Each service receives its own identifier'; 'Only the examination authority may call it' / 'Any registered client'; 'A contract of Progressa's own' / 'The published minimal set'." },
    { text: "Now Progressa. On Linkup, PNIA offers one service today: a read of a person by national number, which only the examination authority may call. It is a contract of Progressa's own. It works server to server, with no person present, and it is keyed on the national number. The published block asks the person to sign in, and gives each service its own identifier. The specification's requirements also ask for a query of a person's attributes, but its published interfaces include none. So PNIA's read is useful, and it is Progressa's own, not the published block." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The published Identity block verifies who a person is, releases only what that person approves and issues no learner identity, so check what your identity authority really offers before you plan on it.' Below it, the on-screen practice box (not narrated)." },
    { text: "Verify the person, release only what the person approves, issue nothing. Then check what your authority runs today before you plan on it." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 2, 3, 4, 5.1.2, 6, 8 and 9.1.1. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The published Identity block, and what the identity authority offers today'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 4.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Foundational-and-functional slide. Two text rows.",
      "The scope of the block, as the specification states it. Text-only."],
    ["3", "Services-and-actors slide. Two text rows: the six services; the four actors.",
      "Text-only list; no product screens."],
    ["4", "National-number slide. Two text rows: the number kept inside; an identifier for each service.",
      "Text-only."],
    ["5", "Verification slide. Three text rows: the minimal set and OpenID Connect; the block's own screens; the two server-to-server calls.",
      "Three text boxes at most; the drawn sign-in (figure F10) belongs to the written guide."],
    ["6", "Progressa slide. Plain-text table of two columns and five rows: PNIA's present service beside the published block.",
      "The worked example, built for Progressa. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the specification."]
  ],
  practice: "a table of the interfaces your provider offers set against the published minimal set, with what is missing and what goes beyond it",
  aiTip: {
    title: "Compare your identity provider with the published Identity block",
    problem: "A ministry planning a service on the national identity needs to know whether the identity authority's interface is the published one, a part of it, or something of its own. This prompt compares the provider's interface description with the minimal set the Identity specification publishes, and lists what is missing and what goes beyond it.",
    prompt: "Below is the interface description of the identity service that [the identity authority] of [country X] offers today: [paste its OpenAPI file or its service description]. Below that is the minimal set of interfaces the GovStack Identity Building Block specification, Version 2.0 (December 2025), publishes in its section 8: for verification, client management (POST and PUT /client-mgmt/oidc-client), GET /authorize, POST /oauth/token, GET /oidc/userinfo, GET /.well-known/jwks.json and GET /.well-known/openid-configuration; for enrolment, PUT /enrollment; and the credential management calls of section 8.3. For each published interface say whether the provider offers it, offers something similar, or does not offer it. Then list every operation the provider offers that is not in the published set, and for each say whether it needs the person present and which identifier it is keyed on. Output: a table of the interfaces your provider offers set against the published minimal set, with what is missing and what goes beyond it, plus a two-line summary for the steering committee.",
    io: "Input: the identity provider's interface description. Output: a table of the interfaces your provider offers set against the published minimal set, with what is missing and what goes beyond it, and a two-line summary.",
    safeguard: "Whatever goes beyond the published set is named as the provider's own and is not presented as GovStack's. A read by national number may be useful, but it is the provider's contract; calling it the GovStack interface misleads every vendor and donor who reads the plan."
  },
  metadataRows: [
    ["Working title",          "The published Identity block, and what the identity authority offers today"],
    ["YouTube-optimised title", "The GovStack Identity block: what it verifies, what it releases, and how to check your identity authority"],
    ["Description (60 words)", "The published Identity block verifies who a person is, releases only what the person approves, and issues no learner identity. The national number stays inside the block; each service gets its own identifier. Before planning a service on it, check what your identity authority really offers. Five minutes for architects. An AI prompt compares your provider's interface with the published set."],
    ["Tags",                    "GovStack identity building block, OpenID Connect, foundational identity, functional identity, pairwise identifier, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 4: Identity and payments"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks); §4.2 (international frameworks and standards); §4.4 and §9 (the education demonstration); §4.3 (AI integration — interface-comparison prompt)"],
    ["PAERA citations",         "None. The subtopic cites the GovStack Identity specification."],
    ["External-link list",      "GovStack Identity Building Block specification, Version 2.0, December 2025 (https://specs.govstack.global/identity), sections 2 to 4, 5.1.2, 6, 8 and 9.1.1"]
  ]
}));

// ---------- 4.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 4.3",
  title: "Generating the identity connection",
  runtime: "~5 min",
  words: 485,
  paeraAnchor: "GovStack Identity specification, Version 2.0 (December 2025): ID §8.1.1, ID §9.1.1, ID §9.1.2, ID §7.2.1 to ID §7.2.4, ID §6.2, ID §4.1.2, ID 6.1-r11, ID §8.2; Digital Registries specification, Version 3.0-alpha (June 2026): DRS-14",
  singleMessage: "A service connects to the identity block as its registered client, asks only for what it needs, and keeps the identifier the block gives to that service, never the national number.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Generating the identity connection'. Voice-over begins." },
    { text: "A registration service that needs to know who the applicant is does not need an identity system of its own. It needs a connection: registered once with the identity block, asking for little, and keeping the right identifier." },
    { cue: "Slide 2 — Title: 'Register the service as a client'. Body, three text rows: 'The client registration: the service's name, the addresses the person is sent back to, the service's signing key.' 'Two published addresses: the block's configuration, and the keys that sign its tokens.' 'The client identifier the block returns.'" },
    { text: "The first step is to register the service as a client of the identity block. The client registration names the service, the addresses to which the block may send the person back after signing in, and the key the service signs its requests with. The block publishes two addresses every client needs: one where it describes its own configuration, and one where it publishes the keys that sign its tokens. The client identifier the block returns is the name the service carries from then on." },
    { cue: "Slide 3 — Title: 'Choose the flow, and ask for little'. Body, three text rows: 'With claims: the person signs in, sees what is asked, approves, and the service receives those claims.' 'Without claims: scope openid — proof of the person only, no consent page.' 'Ask only for what a field of your form needs.'" },
    { text: "The specification gives two flows. With claims, the person signs in, sees what the service asks for, approves it, and the service receives those claims. Without claims, the service asks only for proof of the person, with the scope 'openid', and no consent page is shown. Scopes such as profile, address, email and phone each release a set of claims. Ask only for what a field of your form needs. A registration that needs a name and a date of birth should not ask for an address." },
    { cue: "Slide 4 — Title: 'How the person signed in, and the tokens'. Body, three text rows: 'The ID token: a signed record of who signed in, for which service, and when.' 'Its authentication context value: PIN or password, one-time code, biometrics, or a combination.' 'The access token: the key to the approved claims.'" },
    { text: "Each sign-in comes back with an ID token, a signed record of who signed in, for which service, and when. It carries an authentication context value that says how the person signed in: with a PIN or a password, with a one-time code, with biometrics, or with a combination of these. The country chooses which methods it offers. The service states which values it accepts, and refuses a token whose value is not on its list. The access token lets the service fetch the claims the person approved." },
    { cue: "Slide 5 — Title: 'Keep the identifier the block gives you'. Body, three text rows: 'The token's subject: an identifier made for this service and this person.' 'Never the national number, which stays secret inside the block.' 'Progressa: the learner register keeps a learner number of its own, with PNIA's identifier beside it.'" },
    { text: "Now the rule that protects every learner. The token's subject is an identifier the block made for this service and this person. Keep that identifier, never the national number, which the specification says must stay secret inside the block. In Progressa, the learner register this course sets up behind PLR keeps a learner number of its own and stores PNIA's identifier beside it. The Digital Registries specification makes the mark for the owner's identifier optional, so the register's design must state it rather than assume it." },
    { cue: "Slide 6 — Title: 'The check: one sign-in, verified'. Demonstration segment: recorded on the built connection once checks I1 to I7 have passed; until then the storyboard of this subtopic stands in its place. Text rows on the slide: 'A test person signs in.' 'The token's signature is verified against the published keys.' 'Two services, two identifiers.'" },
    { text: "The check that proves the connection is a sign-in, not a single call. An enrolled test person, never a real one, signs in on the block's own screen. The service receives a code, exchanges it for a token, and verifies the token's signature against the block's published keys. The check passes when the issuer, the audience, the expiry and the subject are present and valid. A second test service then signs in the same person, and the two identifiers must differ." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A service connects to the identity block as its registered client, asks only for what it needs, and keeps the identifier the block gives to that service, never the national number.' Below it, the on-screen practice box (not narrated)." },
    { text: "Register once, ask for little, and keep the identifier the block gives you. The national number never leaves the block." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Identity Building Block specification, Version 2.0 (December 2025), sections 4.1.2, 6.1, 6.2, 7.2, 8.1.1, 8.2, 9.1.1 and 9.1.2; GovStack Digital Registries Building Block specification, Version 3.0-alpha (June 2026), DRS-14. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Generating the identity connection'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 4.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Client-registration slide. Three text rows: the registration, the two published addresses, the client identifier.",
      "Configurations I1 and I2. Text-only."],
    ["3", "Flow slide. Three text rows: with claims, without claims, ask for little.",
      "Configurations I3 and I4. Text-only."],
    ["4", "Token slide. Three text rows: the ID token, its authentication context value, the access token.",
      "Configuration I5. The six authentication context values of the specification may be listed as plain text in the written guide."],
    ["5", "Identifier slide. Three text rows: the subject, the national number kept inside, Progressa's learner register.",
      "Configuration I6. Text-only."],
    ["6", "Demonstration segment. Three text rows on the slide; the recording, when it exists, follows the storyboard of 4.3.",
      "Configuration I7 and checks I1 to I7. Until the checks pass, the slide stays as text and the storyboard stands in for the recording."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the specifications."]
  ],
  practice: "a draft client registration with the flow, the scopes and claims, and the accepted levels of authentication, each claim tied to a field of your form",
  aiTip: {
    title: "Draft the identity connection for one service",
    problem: "An Architect connecting a service to the identity block needs a first draft of everything the connection holds: the client registration, the flow, the scopes and claims, and the levels of authentication the service accepts. This prompt drafts them from the data the service needs, and keeps every claim to a field of the form.",
    prompt: "Below are the fields of the application form of [the service] in [country X], with what each field is for: [paste the fields]. The service will connect to the national identity block, which follows the GovStack Identity Building Block specification, Version 2.0 (December 2025), through OpenID Connect. Below are the authentication methods the identity authority offers: [paste them]. Draft: (1) the client registration — the service's name, its redirect addresses and the key it will sign with — for POST /client-mgmt/oidc-client; (2) the choice of flow — with claims, if the form needs attributes of the person, or without claims, with scope 'openid', if it needs only proof of the person; (3) the scopes and claims to request, kept to the minimum, each tied to the field of the form that needs it; (4) the authentication context values the service accepts, taken only from the methods listed above; (5) the identifier the service will keep — the subject the block gives to this service — with a statement that the national number is neither requested nor stored. Mark every value you cannot take from the form or from the specification as [confirm]. Output: a draft client registration with the flow, the scopes and claims, and the accepted levels of authentication, each claim tied to a field of your form.",
    io: "Input: the fields of the service's form and the authentication methods the identity authority offers. Output: a draft client registration with the flow, the scopes and claims, and the accepted levels of authentication, each claim tied to a field of your form.",
    safeguard: "Every claim requested is justified by a field of the form: strike any claim the model adds that no field needs. Tests use an enrolled test person and never a real one, and no real person's data is pasted into the prompt."
  },
  metadataRows: [
    ["Working title",          "Generating the identity connection"],
    ["YouTube-optimised title", "Connect a government service to the identity block with OpenID Connect — and keep the right identifier"],
    ["Description (60 words)", "A service connects to the identity block as its registered client, asks only for what its form needs, and keeps the identifier the block gives it, never the national number. The check is a sign-in by an enrolled test person, with the token's signature verified. Five minutes for architects. An AI prompt drafts the client registration, flow, scopes and accepted levels."],
    ["Tags",                    "OpenID Connect, GovStack identity building block, client registration, ID token, pairwise identifier, data minimisation, learner registration, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 4: Identity and payments"],
    ["ToR §4 coverage",         "§4.1 (a step of the method with its acceptance check); §4.3 (AI integration — the generation prompt); §4.4 and §9 (the education demonstration); §4.5 (API specifications)"],
    ["PAERA citations",         "None. The subtopic cites the GovStack Identity and Digital Registries specifications."],
    ["External-link list",      "GovStack Identity Building Block specification, Version 2.0, December 2025 (https://specs.govstack.global/identity), sections 4.1.2, 6.1, 6.2, 7.2.1 to 7.2.4, 8.1.1, 8.2, 9.1.1 and 9.1.2; GovStack Digital Registries Building Block specification, Version 3.0-alpha, June 2026 (https://specs.govstack.global/registries), DRS-14 (the mark for the data owner's identifier, optional)"]
  ]
}));
body.push(
  H3("Storyboard of the demonstration segment of 4.3 — a test person signs in, and the token is verified"),
  P("What it needs: configurations I1 to I7, on an identity provider that offers the published interface, OpenID Connect, in the identity authority's name. Nothing of it is built at the date of this bundle. The storyboard is written on the specimen `specimens/identity-payments/identity-connection.specimen.yaml`, marked 'specimen, not yet run', and on the description of the checks in `specimens/identity-payments/acceptance-checks.specimen.md`. It is what the recording follows when the checks have passed; until then it stands in the recording's place and the slide of the segment stays as text. If the build offers only KP2's read of a person by national number, the segment shows that read under its own name, captioned as a contract of Progressa's and not as the GovStack interface, and steps 2 to 9 stay as storyboard."),
  genericTable([700, 2700, 3300, 3000], ["Step", "What is shown", "What the viewer sees", "What counts as a pass"], [
    ["1", "The specimen of the connection, I1 to I6", "The file, top to bottom: the client, its redirect address, the two published addresses, the flow, the scopes and claims, the accepted authentication levels, the identifier kept", "Every claim in the file is tied to a field of the registration form, and no line asks for the national number"],
    ["2", "Check I1: the service registered as a client", "The registration sent to POST /client-mgmt/oidc-client and the client identifier returned", "The block returns the registered client; its identifier is noted on screen, to be found again in step 6"],
    ["3", "Check I2: the two published addresses", "/.well-known/openid-configuration and /.well-known/jwks.json each opened", "Both answer. A caption says that this shows the block can be reached, not that verification works"],
    ["4", "Check I7: the enrolled test person", "PUT /enrollment with the flag that finalises the enrolment, for a person marked as a test person", "The test person exists and can sign in. No real person's data appears on screen"],
    ["5", "The sign-in, on the block's own screen", "'Sign in with PNIA' on the registration service; the browser moves to the block's own page; the test person signs in with a test credential", "An authorisation code returns to the service's registered redirect address. The voice-over says that the person's browser, not the data exchange, carried the sign-in"],
    ["6", "Check I3: the token verified", "The service exchanges the code at POST /oauth/token; the ID token's signature is checked against /.well-known/jwks.json", "The signature verifies; iss, aud, exp and sub are present and valid; aud is the client identifier of step 2"],
    ["7", "Check I4: the claims approved and released", "The flow with claims: the consent page lists only the claims requested; GET /oidc/userinfo is called with the access token", "The answer holds the claims of the scopes requested and no others"],
    ["8", "Check I5: an authentication level refused", "A sign-in whose authentication context value is not on the service's accepted list", "The service refuses the token"],
    ["9", "Check I6: two services, two identifiers", "A second test client signs in the same test person; the two sub values are shown side by side", "The two sub values differ, and neither service receives the unique identity number"]
  ]),
);

// ---------- 4.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 4.4",
  title: "The Payments block and the payment systems behind it",
  runtime: "~4 min",
  words: 444,
  paeraAnchor: "GovStack Payments specification, Version 3.0 (December 2025): PAY §2, PAY §4, PAY §5.1.1, PAY §5.1.4, PAY §5.1.11, PAY §5.1.12, PAY §6.5, PAY §6.17, PAY §9.1.3; BIS Bulletin No 52 (2022), pages 3 and 5",
  singleMessage: "The Payments block is not a new payment system: it connects government programmes to the payment systems your country already has, so every programme pays through one shared connection.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The Payments block and the payment systems behind it'. Voice-over begins." },
    { text: "A ministry that pays scholarships or school grants may be offered a payment system of its own. The published Payments block offers something else: one connection from government to the payment systems the country already runs." },
    { cue: "Slide 2 — Title: 'Not a new payment scheme'. Body, three text rows: 'It connects to existing systems in the market; it does not build a new payment scheme.' 'It sits between the government's account systems and the switching the market offers.' 'Payment systems in the market are required for it to work.'" },
    { text: "The GovStack Payments specification is clear about its own limits. The block provides the connections to existing systems in the market, and it does not set out to build a new payment scheme. It sits between the government's account systems, at the ministry of finance or the central bank, and the public or private switching the market already offers. Payment systems in the market, run by a public body, a quasi-public body or a commercial firm, are required for the block to work at all." },
    { cue: "Slide 3 — Title: 'What is inside the block'. Body, two text rows: 'An account mapper, payment request initiation, a payment gateway, vouchers, reconciliation, logs and an audit trail.' 'One gateway for the calls of other blocks.'" },
    { text: "Inside the block are the parts a government needs to pay many people safely. An account mapper finds where each beneficiary is paid. Payment requests start there. A payment gateway lets banks and other financial service providers work together. There are vouchers, reconciliation, logs and an audit trail, all behind one gateway that receives the calls of other blocks. The block lets government programmes channel payments through one shared infrastructure to accounts at many providers." },
    { cue: "Slide 4 — Title: 'What stays outside the block'. Body, two text rows: 'Settlement between institutions.' 'Identification of people, and the checks on customers: know-your-customer and anti-money-laundering.'" },
    { text: "Just as important is what stays outside. Settlement between the financial institutions is handled outside the block. So are the identification and registration of people, and the checks that banks must make on their customers, such as the rules on knowing the customer and on money laundering. Those stay with the financial institutions and the systems the law gives them to. A vendor who says the block will do them is offering something the specification does not describe." },
    { cue: "Slide 5 — Title: 'Progressa: the path of a payment'. Text boxes in a row, joined by arrows: 'Programme account' → 'Payments block' → 'Payer bank' → 'Payment systems in the market, PayPro among them' → 'The learner's account'." },
    { text: "In Progressa the path runs like this. The programme's account sits with the government. The Payments block receives the batch from the calling service, finds each beneficiary's account through its account mapper, and hands the batch to the payer bank, the bank that holds the programme's account. The payer bank executes the payment through the payment systems in the market. PayPro, Progressa's payment provider, is one of those systems, and it stands behind the payer bank." },
    { cue: "Slide 6 — Title: 'A public payment system, built to be shared'. Body, two text rows: 'Pix, Brazil: large banks were required to take part; the central bank both operates it and sets its rules (page 3).' '67% of adults had used it 15 months after launch (page 5).' Footer: 'Bank for International Settlements, Bulletin No 52, 2022.'" },
    { text: "Brazil shows how much a shared payment system can carry. The Bank for International Settlements reports that its instant payment system, Pix, rested on two things: large banks were required to take part, and the central bank both operates the system and sets its rules. Fifteen months after launch, 67 percent of adults had used it. A government programme gains from such a system by connecting to it, not by building another." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The Payments block is not a new payment system: it connects government programmes to the payment systems your country already has, so every programme pays through one shared connection.' Below it, the on-screen practice box (not narrated)." },
    { text: "The block is a connection, not a new payment system. Every programme pays through it, to the systems the country already runs." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Payments Building Block specification, Version 3.0 (December 2025), sections 2, 4, 5.1, 6.5, 6.17 and 9.1.3; Bank for International Settlements, BIS Bulletin No 52, 23 March 2022, pages 3 and 5. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The Payments block and the payment systems behind it'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 4.4) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Limits slide. Three text rows: no new scheme; between government accounts and the market's switching; payment systems required.",
      "The specification's own words. Text-only."],
    ["3", "Components slide. Two text rows: the parts inside; one gateway.",
      "Text-only list."],
    ["4", "Outside slide. Two text rows: settlement; identification and the checks on customers.",
      "Text-only."],
    ["5", "Progressa slide. Five text boxes in a row joined by arrows: programme account, Payments block, payer bank, payment systems in the market with PayPro among them, the learner's account.",
      "Configuration P6. Text boxes and arrows only; the drawn path (figure F11) belongs to the written guide."],
    ["6", "Comparator slide. Two text rows on Pix, each with its page; footer with the source.",
      "Each figure with its unit, date and page. Text-only."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the specification and the bulletin."]
  ],
  practice: "a table that places each of your payment systems and programme accounts on the block's components, with what is missing",
  aiTip: {
    title: "Place your country's payment systems on the Payments block",
    problem: "This prompt places a country's payment systems and programme accounts on the components of the Payments block, shows what is missing, and keeps settlement and the checks on customers with the financial institutions.",
    prompt: "Below is what I know of the payment landscape of [country X]: [paste — the government's account systems, the payment switches, the banks, the mobile money providers, any aggregator], and the programmes that pay people today: [paste — each programme, the account it pays from, how it pays]. Using the GovStack Payments Building Block specification, Version 3.0 (December 2025), place each system and each programme account on the block's components: the account mapper, payment request initiation, the payment gateway, the payment portal, voucher management, reconciliation, and the payer bank behind the block. For each component say what in the country already fills it and what is missing. Keep settlement, and the identification and know-your-customer checks on customers, with the financial institutions, and do not assign them to the block. Output: a table that places each of your payment systems and programme accounts on the block's components, with what is missing, plus a list of the payment systems in the market that the block would connect to.",
    io: "Input: the country's payment systems and the programmes that pay people today. Output: a table that places each of your payment systems and programme accounts on the block's components, with what is missing, and a list of the payment systems the block would connect to.",
    safeguard: "Settlement and the checks on customers stay with the financial institutions. If the table assigns either to the block, correct it before it reaches the ministry of finance: a draft that does so promises the block a role the specification places outside it."
  },
  metadataRows: [
    ["Working title",          "The Payments block and the payment systems behind it"],
    ["YouTube-optimised title", "The GovStack Payments block: one shared connection to the payment systems your country already has"],
    ["Description (60 words)", "The Payments block is not a new payment system. It connects government programmes to the payment systems a country already has, through a payer bank, so every programme pays through one shared connection. Settlement and customer checks stay with the financial institutions. Brazil's Pix shows what a shared system can carry. Four minutes for architects. An AI prompt maps your payment landscape."],
    ["Tags",                    "GovStack payments building block, government-to-person payments, payer bank, payment systems, Pix, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 4: Identity and payments"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks); §4.2 (international frameworks and standards); §4.4 and §9 (the education demonstration); §4.3 (AI integration — payment-landscape prompt)"],
    ["PAERA citations",         "None. The subtopic cites the GovStack Payments specification and the BIS Bulletin."],
    ["External-link list",      "GovStack Payments Building Block specification, Version 3.0, December 2025 (https://specs.govstack.global/payments), sections 2, 4, 5.1.1, 5.1.4, 5.1.11, 5.1.12, 6.5, 6.17 and 9.1.3; BIS Bulletin No 52, 23 March 2022 (https://www.bis.org/publ/bisbull52.htm), pages 3 and 5"]
  ]
}));

// ---------- 4.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 4.5",
  title: "Generating the payment connection",
  runtime: "~4 min",
  words: 410,
  paeraAnchor: "GovStack Payments specification, Version 3.0 (December 2025): PAY §9.1.1, PAY §4.16, PAY §5.4, PAY §8.1.2, PAY §7.1.1, PAY 6.3-r1, PAY §8.1.4, PAY §7.2.1, PAY 6.4-r3, PAY 6.11-r2, PAY §5.1.14, PAY §5.3.1, PAY 6.14-r6",
  singleMessage: "To pay through the block you configure the sender, the programme, the beneficiary, the payment and the route for its status, and the proof is one test payment whose status comes back.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Generating the payment connection'. Voice-over begins." },
    { text: "Once the Payments block is installed, a service still cannot pay anyone. Five things have to be set up first, and the proof that they work is one small test payment whose status comes back." },
    { cue: "Slide 2 — Title: 'The sender and the programme'. Body, two text rows: '1. The sender: the calling block, configured as an accepted source of payment requests.' '2. The programme: its payment account and its currency, by ISO 4217 code.'" },
    { text: "First, the sender. The block accepts payment requests only from a calling block it has been configured to accept as a source. Second, the programme. Each programme has its payment account and its currency. The specification processes each currency on its own, without conversion, and names currencies by their ISO 4217 codes. So a programme that pays in one currency must pay into accounts held in that same currency." },
    { cue: "Slide 3 — Title: 'The beneficiary'. Body, two text rows: '3. The beneficiary, registered in the account mapper: a functional identifier, the way of payment, the financial address.' 'The mapper answers on a callback address; the service's own register keeps no payment details.'" },
    { text: "Third, the beneficiary. Before anyone is paid, the service registers each beneficiary in the block's account mapper: a functional identifier, the way of payment, such as a bank account or mobile money, and the financial address where the money goes. The mapper answers on a callback address the service gives it. The service's own register keeps no payment details. In Progressa the functional identifier is the learner's number in the learner register, never the national number." },
    { cue: "Slide 4 — Title: 'The payment'. Body, two text rows: '4. The payment, sent as a batch of one or many.' 'At the least: the payer's identifier, the payee's identifier, the amount, the currency, the policy, and the sender's own transaction identifier.'" },
    { text: "Fourth, the payment. The service hands the block a batch, which may hold one payment or many. The specification sets the least a payment request must contain: the payer's identifier, the payee's identifier, the amount, the currency, the policy, and the sender's own identifier for the transaction. The block gives each payment in the batch an instruction identifier of its own, so that every payment can be followed." },
    { cue: "Slide 5 — Title: 'The route for status, and the security around it'. Body, two text rows: '5. The route for status: an address to which status is sent, and a call for the status of one payment — success, failed, in progress.' 'Around all five: the interface published through the Information Mediator, secure connections, authorisation tokens, authenticated messages.'" },
    { text: "Fifth, the route for status. The service gives the block an address to which status is sent, and it can also ask for the status of one payment. A status is success, failed, or in progress. Around all five sits transport and security. The block's interface is published through the Information Mediator, every call travels over a secure connection with an authorisation token, and the messages about a payment are authenticated." },
    { cue: "Slide 6 — Title: 'The check: one test payment, and its status'. Demonstration segment: recorded on the built connection once checks P1 to P7 have passed; until then the storyboard of this subtopic stands in its place. Text rows on the slide: 'One test beneficiary registered.' 'A batch of one payment submitted.' 'Its status returned.'" },
    { text: "The check that proves the connection uses one test beneficiary, one test amount, and a test environment. The beneficiary is registered, and the callback confirms it. A batch of one payment is submitted. The service then asks for the status of that payment. The check passes when the answer is a status, success, failed or in progress, rather than an error, and when the same status arrives at the address configured for it." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'To pay through the block you configure the sender, the programme, the beneficiary, the payment and the route for its status, and the proof is one test payment whose status comes back.' Below it, the on-screen practice box (not narrated)." },
    { text: "Sender, programme, beneficiary, payment, and the route for status. Then one test payment, and its status comes back." },
    { cue: "Slide 8 — Title: 'Sources'. Body: GovStack Payments Building Block specification, Version 3.0 (December 2025), sections 4.16, 5.1.14, 5.3.1, 5.4, 6.3, 6.4, 6.11, 6.14, 7.1.1, 7.2.1, 8.1.2, 8.1.4 and 9.1.1. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Generating the payment connection'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 4.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Sender-and-programme slide. Two numbered text rows.",
      "Configurations P1 and P2. Text-only."],
    ["3", "Beneficiary slide. Two text rows: the three fields of onboarding; the callback and the register without payment details.",
      "Configuration P3. Text-only."],
    ["4", "Payment slide. Two text rows: the batch; the least a payment request contains.",
      "Configuration P4. Text-only."],
    ["5", "Status-and-security slide. Two text rows: the route for status; transport and security.",
      "Configurations P5 and P7. Text-only."],
    ["6", "Demonstration segment. Three text rows on the slide; the recording, when it exists, follows the storyboard of 4.5.",
      "Checks P1 to P7. Until the checks pass, the slide stays as text and the storyboard stands in for the recording."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the specification."]
  ],
  practice: "a draft configuration of the source, the programme, the onboarding, the batch and the route for status, with every test value marked",
  aiTip: {
    title: "Draft the payment connection for one programme",
    problem: "An Architect connecting a programme to the Payments block needs a first draft of the five things the connection holds: the accepted source, the programme with its account and currency, the onboarding of a beneficiary, the batch, and the route for status. This prompt drafts them from the description of the programme, using test values only.",
    prompt: "Below is the description of a payment programme in [country X]: [paste — the programme's name, the paying body, its account and currency, who is paid, how often, and the service that will send the payments]. The payments will go through the government's Payments block, which follows the GovStack Payments Building Block specification, Version 3.0 (December 2025). Draft: (1) the calling service configured as an accepted source of payment requests; (2) the programme, with its payment account and its currency as an ISO 4217 code; (3) the onboarding of one test beneficiary into the account mapper — functional identifier, payment modality, financial address — through POST /identityAccountMapper/beneficiary, with the callback address; (4) a bulk payment of one test payment through POST /batchtransactions, containing at least the payer and payee identifiers, the amount, the currency, the policy and the source's transaction identifier; (5) the route for status — the callback address for pushed status, and the status check for one payment through POST /api/v1/batch. Use test values throughout and mark each one [test]. Output: a draft configuration of the source, the programme, the onboarding, the batch and the route for status, with every test value marked.",
    io: "Input: the description of one payment programme. Output: a draft configuration of the source, the programme, the onboarding, the batch and the route for status, with every test value marked.",
    safeguard: "Tests use a test beneficiary, a test amount and a test environment. Never paste a real person's name, account number or mobile number into the prompt, and never point the draft at a live payer bank."
  },
  metadataRows: [
    ["Working title",          "Generating the payment connection"],
    ["YouTube-optimised title", "Set up a government programme to pay through the Payments block — and prove it with one test payment"],
    ["Description (60 words)", "To pay through the Payments block, a service configures five things: the sender, the programme with its account and currency, the beneficiary in the account mapper, the payment, and the route for its status. The proof is one test payment whose status comes back. Four minutes for architects. An AI prompt drafts the configuration from a programme's description."],
    ["Tags",                    "GovStack payments building block, account mapper, bulk payment, payment status, ISO 4217, government-to-person payments, scholarship payment, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 4: Identity and payments"],
    ["ToR §4 coverage",         "§4.1 (a step of the method with its acceptance check); §4.3 (AI integration — the generation prompt); §4.4 and §9 (the education demonstration); §4.5 (API specifications)"],
    ["PAERA citations",         "None. The subtopic cites the GovStack Payments specification."],
    ["External-link list",      "GovStack Payments Building Block specification, Version 3.0, December 2025 (https://specs.govstack.global/payments), sections 4.16, 5.1.14, 5.3.1, 5.4, 6.3, 6.4, 6.11, 6.14, 7.1.1, 7.2.1, 8.1.2, 8.1.4 and 9.1.1"]
  ]
}));
body.push(
  H3("Storyboard of the demonstration segment of 4.5 — a beneficiary registered, a batch of one payment, the status returned"),
  P("What it needs: configurations P1 to P7, on an installation of the Payments block with a programme account, a payer bank, and PayPro as the payment system behind the bank. Nothing of it is built at the date of this bundle. The storyboard is written on the specimen `specimens/identity-payments/payment-connection.specimen.yaml`, marked 'specimen, not yet run', and on the description of the checks in `specimens/identity-payments/acceptance-checks.specimen.md`. It is what the recording follows when the checks have passed; until then it stands in the recording's place and the slide of the segment stays as text."),
  genericTable([700, 2700, 3300, 3000], ["Step", "What is shown", "What the viewer sees", "What counts as a pass"], [
    ["1", "The specimen of the connection, P1 to P7", "The file, read top to bottom: the accepted source, the scholarship test programme with its account and currency, the onboarding, the batch, the route for status, the payer bank with PayPro behind it, and transport and security", "Every value in the file is marked as a test value, and no line holds a real person's details"],
    ["2", "Check P1: the accepted source", "The same call sent from a block that is not configured as a source, then from the configured source", "The first is refused; the second is accepted"],
    ["3", "Check P2: the programme's currency", "A batch in a currency other than the programme account's", "The batch is refused"],
    ["4", "Check P3: the test beneficiary registered", "POST /identityAccountMapper/beneficiary for one test beneficiary, then the answer on the callback address; the same functional identifier sent again from the same source", "The callback confirms the registration, and the second request does not register the beneficiary twice"],
    ["5", "Check P4: a batch of one, and its status", "POST /batchtransactions with one payment to the test beneficiary; then the status check for that beneficiary at POST /api/v1/batch", "The answer is a status — success, failed or in progress — and not an error or not-found"],
    ["6", "Check P5: the status pushed", "The address configured for status, showing what arrived", "The status of the batch of step 5 arrives there"],
    ["7", "Check P6: the payer bank and PayPro", "The transaction log of the batch", "The log shows the payer bank executing the batch and PayPro as its destination; the calling service called no PayPro operation directly"],
    ["8", "Check P7: transport and security", "A call without an authorisation token, then the same call with one, through the caller's own access point to the data exchange", "The first is refused; the second is accepted"]
  ]),
);

// ---------- 4.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 4.6",
  title: "Reuse is the return on planning",
  runtime: "~4 min",
  words: 387,
  paeraAnchor: "PAERA v1.0, sections 3.3.3 (Building Infrastructure) and 5.2 (Principles: #2 Whole of Government, #5 Once-Only); GovStack Identity specification, Version 2.0: ID §2.4, ID §4.1.2; GovStack Payments specification, Version 3.0: PAY §2, PAY §4, PAY §4.3, PAY 6.3-r1, PAY §9.2.1, PAY §9.2.2; GovStack Registration specification, default edition: REG §6.3.1.9",
  singleMessage: "Learner registration reuses the identity block and the scholarship payment reuses the Payments block, a saving visible only to someone who plans for the whole government, because inside one project building your own looks quicker.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Reuse is the return on planning'. Voice-over begins." },
    { text: "Inside a single project, building your own identity check or your own payment link often looks quicker than waiting for a shared one. Seen from the whole government, it is the more expensive choice." },
    { cue: "Slide 2 — Title: 'Two services, two shared blocks'. Plain-text table, two rows — 'Learner registration' · 'reuses the identity block'; 'Scholarship payment' · 'reuses the Payments block'." },
    { text: "Take two services in Progressa. Learner registration needs to know who the applicant is, so it reuses the identity block: one sign-in, one identifier for the service, and no identity system of its own. The scholarship payment needs to pay learners, so it reuses the Payments block: one account mapper, and one route through the payer bank to the payment systems the country already runs. Neither service builds what the country already has." },
    { cue: "Slide 3 — Title: 'What each would have built alone'. Plain-text table, two columns — 'Alone' · 'With the shared block'. Rows: 'Its own enrolment, credentials, security and support staff' / 'One verification service used by many'; 'Its own links to every bank and mobile money provider, and every learner's account details in its register' / 'One shared infrastructure; the account mapper keeps payment details out of the register'." },
    { text: "Alone, the registration service would need its own enrolment, credentials, security and support staff, which are the costs of an identity system. Alone, the scholarship service would need its own links to each bank and mobile money provider, and every learner's account details in its own register. With the shared blocks, one verification service is used by many, and the account mapper keeps payment details out of each programme's register. The identity service can serve other blocks, public services and private services alike." },
    { cue: "Slide 4 — Title: 'Education is already in the specifications'. Body, three text rows: 'The payment of school fees.' 'Vouchers that can be redeemed only at schools.' 'Conditional transfers for school fee payment.' Footer row: 'Several registrations combined in one service.'" },
    { text: "Education is not a stretch for these blocks. The Payments specification itself names the payment of school fees, a group of vouchers that can be redeemed only at schools, and conditional transfers for school fee payment. The Registration specification asks that several registrations can be combined in one service, so that an applicant fills in one form instead of several. Each of these can run on the same two blocks." },
    { cue: "Slide 5 — Title: 'Why only planning sees the saving'. Body, three text rows: 'Each project is funded for its own service, on its own date.' 'The first ministry pays; the second, third and fourth reuse.' 'PAERA: identify shared services, workflows and data; whole-of-government; once-only.'" },
    { text: "So why does the saving so often go unclaimed? Each project is funded to deliver its own service on its own date, and inside the project building its own looks quicker. The first ministry pays for a shared block, and the second, third and fourth reuse it. That sum exists only at the level of the whole government. PAERA asks planners to identify shared services, workflows and data that meet the needs of several agencies, and its principles of whole-of-government and once-only point the same way. A table of which services reuse which block gives the business side and IT one shared language for that decision." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Learner registration reuses the identity block and the scholarship payment reuses the Payments block, a saving visible only to someone who plans for the whole government, because inside one project building your own looks quicker.' Below it, the on-screen practice box (not narrated)." },
    { text: "Two services reuse two blocks. The saving is real, but only someone who plans for the whole government can see it." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 3.3.3 and 5.2; GovStack Identity Building Block specification, Version 2.0, sections 2.4 and 4.1.2; GovStack Payments Building Block specification, Version 3.0, sections 2, 4, 4.3, 6.3, 9.2.1 and 9.2.2; GovStack Registration Building Block specification, section 6.3.1.9. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Reuse is the return on planning'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 4.6) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Two-services slide. Plain-text table of two rows.",
      "The worked example, built for Progressa. Text-only."],
    ["3", "Alone-or-shared slide. Plain-text table of two columns and two rows.",
      "The worked example continued; no cost figures. Text-only."],
    ["4", "Education-uses slide. Three text rows from the Payments specification, and one from the Registration specification.",
      "Text-only."],
    ["5", "Planning slide. Three text rows: projects funded one by one; the first pays, the next reuse; PAERA's call and principles.",
      "Carries the planning-enables-re-use argument. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and the specifications."]
  ],
  practice: "a count, for each shared block, of the services that would reuse it, confirmed by their owners",
  aiTip: {
    title: "Count the services that would reuse each shared block",
    problem: "The return on a shared block is the number of services that use it, and a finance ministry will ask for that number. This prompt takes the inventory of services and counts, for each shared block, the services that would reuse it. The count is the first column of the table of what to fund first.",
    prompt: "Below is the inventory of public services of [country X], or of [the sector]: [paste — each service, its owner, and what it needs: to know who the person is, to pay or be paid, to keep a register, to exchange data]. Below that is the list of shared blocks the country has or plans: [paste — for example the identity block, the Payments block, the Registration block, the register, the data exchange]. For each shared block, count the services that would reuse it, and list them by name and owner. Mark a service 'confirmed by its owner' only where the inventory says its owner has agreed, and mark every other service 'to confirm'. Output: a count, for each shared block, of the services that would reuse it, confirmed by their owners, as a table with one row for each block, ready to become the first column of the table of what to fund first.",
    io: "Input: the inventory of services with their owners and needs, and the list of shared blocks. Output: a count, for each shared block, of the services that would reuse it, confirmed by their owners, as the first column of the table of what to fund first.",
    safeguard: "A service is counted only when its owner confirms it would use the block. A count that includes services whose owners were never asked overstates the return on reuse, and the finance ministry will find the gap."
  },
  metadataRows: [
    ["Working title",          "Reuse is the return on planning"],
    ["YouTube-optimised title", "Reuse is the return on planning: why only whole-of-government planning sees the saving of shared blocks"],
    ["Description (60 words)", "Learner registration reuses the identity block, and the scholarship payment reuses the Payments block. Inside one project, building your own looks quicker; across the government, the first ministry pays and the others reuse. Only someone who plans for the whole government sees that saving. Four minutes for architects. An AI prompt counts the services that would reuse each shared block."],
    ["Tags",                    "reuse, whole-of-government, once-only, shared building blocks, GovStack, PAERA, school fees, scholarship payment, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 4: Identity and payments"],
    ["ToR §4 coverage",         "§3.3 (foundational and sectoral building blocks; prioritisation of investments); §4.3 (AI integration — reuse-count prompt)"],
    ["PAERA citations",         "§3.3.3 Building Infrastructure; §5.2 Principles, #2 Whole of Government and #5 Once-Only"],
    ["External-link list",      "PAERA v1.0 (https://paera.govstack.global/), sections 3.3.3 and 5.2; GovStack Identity Building Block specification, Version 2.0, December 2025 (https://specs.govstack.global/identity), sections 2.4 and 4.1.2; GovStack Payments Building Block specification, Version 3.0, December 2025 (https://specs.govstack.global/payments), sections 2, 4, 4.3, 6.3, 9.2.1 and 9.2.2; GovStack Registration Building Block specification, default edition (https://specs.govstack.global/registration), section 6.3.1.9"]
  ]
}));
body.push(
  H3("Worked example of 4.6 — two services and the blocks each reuses"),
  P("Built for Progressa (rule B). No cost figures."),
  genericTable([2200, 2400, 2700, 2400], ["Service", "Shared block it reuses", "What it would have had to build alone", "What the block keeps out of the service"], [
    ["Learner registration (MoEYS, writing to the learner register behind PLR)", "The identity block, through PNIA's sign-in with OpenID Connect", "Its own enrolment, credentials, central systems, security and support staff", "The national number, which stays inside the identity block"],
    ["Scholarship payment (MoEYS)", "The Payments block, with PayPro behind its payer bank", "Its own links to each bank and mobile money provider, and every learner's account details", "Payment details, which the account mapper holds"]
  ]),
);

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes", { pageBreakBefore: true }),

  H3("4.1 The split-screen usability test"),
  P("Each video should make sense to a viewer who watches it with the specification open beside it. Every section number on a slide is one the viewer can find in the published edition named on the Sources slide."),

  H3("4.2 Slide branding"),
  P("Title Arial Bold 28pt; body Arial 18pt; background #E5F5FB. Text-only, with text boxes and arrows only where strictly necessary, as on the path of a payment in 4.4 and the verification sequence in 4.2. No images, no icons, no logos of any authority or company, no country emblems. The drawn figures of the module, F10 (the sign-in between the service, the learner and the identity block) and F11 (the path of a payment), belong to the written guide and do not appear on the slides."),

  H3("4.3 No individuals on screen"),
  P("Narration is by AI avatar or by voice-over over the screen only, chosen once for each video. The demonstration segments of 4.3 and 4.5, when recorded, show the screen only, with test persons and test values; no real person's name, number or account appears."),

  H3("4.4 Voice and tone"),
  P("Direct address, plain English at about the eighth-grade level, held for the Architect as for the Strategist. Technical terms — client, token, scope, claim, account mapper, payer bank, batch — are explained in plain words when they first appear. Each video leads with what the listener can do afterwards. The examples are Progressa's; Brazil's Pix in 4.4 is the one comparator, because it is the one the accepted research read from a public source."),

  H3("4.5 What the scripts claim, and what they do not"),
  P("No script says that a connection runs. The two demonstration segments say what the check runs and what counts as a pass, which is true whether or not anything has been built. When a check passes on the built configuration, its specimen is replaced by the file as built, the segment is recorded from the storyboard, and the script gains one sentence stating the result and its date."),

  H3("4.6 External links and 'Find the link in the description'"),
  P("No address is read aloud. Each subtopic's external-link list feeds the description of its video. The aggregate list is in Section 6."),

  H3("4.7 The written guide and the specimens"),
  P("Each subtopic has a page in the written guide that carries its script in full, its worked example, its AI usage tip with the prompt ready to copy, and its sources with their links. The specimens of configurations I1 to I7 and P1 to P7 are in `KP3-DPI/specimens/identity-payments/`, each marked 'specimen, not yet run'. They are not the build: the colleague builds the configurations, and the build pack holds them when they exist."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting raised the items below. They are recorded for the team and for discussion with ITU at the weekly call."),

  H3("5.1 Settings that the build states"),
  P("Two of the three settings the outline names concern this module. The identity interface of the demonstration: the published interface is taught from the specification, and if the build offers only the read of a person by national number that KP2 left, the demonstration of 4.3 shows that read under its own name, as a contract of Progressa's beyond the published set. The key of the learner register: it is not the national number; the register keeps a learner number of its own with PNIA's identifier beside it (configurations RG2 and I6). The scripts teach the rule; the build supplies the value."),

  H3("5.2 Field names in the publishers' contract files"),
  P("The Identity specification names the client registration call and the token and claims, but the fields of the client registration's request body are defined in the publisher's OpenAPI file, Identity-Provider.yaml, which is not part of the pinned edition. The Payments specification gives the fields of onboarding and of the bulk payment in its section 7, and the request bodies in contract files beside it. The specimens use the specification's words and mark every field whose exact name lives in a contract file; the build fixes those files at a named commit before any configuration depends on a field name."),

  H3("5.3 The African signpost"),
  P("The project's standing rules ask for African signposts where examples from other countries are given. The accepted research read public sources on Brazil, Estonia and India and on no African country, so 4.4 uses Brazil's Pix and no African example. One is added only when a public source for it has been read and accepted."),

  H3("5.4 Sharp lines for a keep, soften or cut decision"),
  P("'A vendor who says the block will do them is offering something the specification does not describe' (4.4); 'Seen from the whole government, it is the more expensive choice' (4.6); 'The national number never leaves the block' (4.3)."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the six subtopics for ITU's video production pipeline, to be split by subtopic into the description of each video."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["4.1", "GovStack Identity Building Block specification, Version 2.0, December 2025, sections 2.3.1 and 2.4; GovStack Registration Building Block specification, default edition, section 9.1.3; World Bank, Understanding Cost Drivers of Identification Systems, 2018, pages 3, 5 and 7."],
    ["4.2", "GovStack Identity Building Block specification, Version 2.0, December 2025, sections 2, 2.2, 3, 4, 4.1, 4.1.1, 4.1.2, 5.1.2, 6, 8, 8.1 and 9.1.1."],
    ["4.3", "GovStack Identity Building Block specification, Version 2.0, December 2025, sections 4.1.2, 6.1, 6.2, 7.2.1 to 7.2.4, 8.1.1, 8.2, 9.1.1 and 9.1.2; GovStack Digital Registries Building Block specification, Version 3.0-alpha, June 2026, DRS-14."],
    ["4.4", "GovStack Payments Building Block specification, Version 3.0, December 2025, sections 2, 4, 5.1.1, 5.1.4, 5.1.11, 5.1.12, 6.5, 6.17 and 9.1.3; Bank for International Settlements, BIS Bulletin No 52, 23 March 2022, pages 3 and 5."],
    ["4.5", "GovStack Payments Building Block specification, Version 3.0, December 2025, sections 4.16, 5.1.14, 5.3.1, 5.4, 6.3, 6.4, 6.11, 6.14, 7.1.1, 7.2.1, 8.1.2, 8.1.4 and 9.1.1."],
    ["4.6", "PAERA v1.0, sections 3.3.3 and 5.2; GovStack Identity Building Block specification, Version 2.0, sections 2.4 and 4.1.2; GovStack Payments Building Block specification, Version 3.0, sections 2, 4, 4.3, 6.3, 9.2.1 and 9.2.2; GovStack Registration Building Block specification, default edition, section 6.3.1.9."]
  ]),
  spacer(120),
  P("All references are public and can be checked by any reader.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP3 Module 4 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP3 Module 4 (Education DPI Roadmap — Identity and payments), aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP3 Module 4 Script Bundle v0.1 · 1 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP3_Module4_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
