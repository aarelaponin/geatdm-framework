// Build KP1 Module 1 — Video Script Bundle v0.3
// Reworked from v0.1 to meet ITU's Knowledge Products and Video Materials Guide:
//   - subtopic numbering (1.1–1.6) per ITU convention
//   - intros/outros stripped from each script (each video must stand alone)
//   - "speaker on camera" replaced with voice-over over text-only slides (or AI avatar)
//   - slide specs reframed as text-only Arial 28pt/18pt #E5F5FB per ITU branding
//   - one AI usage prompt per subtopic per ITU emphasis (and ToR §4.3)
//   - "Find the link in the description" convention for external references

const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, Header, Footer, PageBreak
} = require('docx');

// ---------- styling (mirrors Inception Report) ----------
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
// ("Next: …"), and "speaker on camera" cues. Each video is standalone.

function renderSubtopic({ num, title, runtime, words, paeraAnchor, singleMessage,
                         scriptBeats, slideSpecRows, aiTip, metadataRows }) {
  const out = [];
  out.push(H2(num + " — " + title));
  out.push(specTable([
    ["Persona",        "S (Strategist) — CDO, Director-General, sector minister or ministerial-equivalent sponsor"],
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
    children: [new TextRun({ text: "Topic 1 — Why a PAERA-anchored EA, and the lifecycle in one page",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 1 of KP1"],
    ["Version",             "v0.3 — tightened per the KP1 length-discipline pass of September 2026; aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "3 September 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       "S (Strategist) — CDO, Director-General, sector minister or ministerial-equivalent sponsor"],
    ["Subtopics",           "Seven subtopics (1.1 – 1.7), each shipped as one standalone video of five minutes or less"],
    ["Topic runtime",       "Approximately 29 minutes across seven standalone videos"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.3 working draft of Topic 1, aligned to ITU's Knowledge Products and Video Materials Guide and rebalanced for a primary audience of public-sector middle managers — director-generals of digital agencies, heads of sectoral ICT units, technical secretaries — in African and other developing-country contexts. The register is plain English, eighth-grade level. Architectural terminology is in the body of each video, not in the headline. Each subtopic leads with the public-sector outcome the listener can carry out of the video: make the case upward, survive a vendor pitch, satisfy a donor, brief the minister coherently. The seven videos are numbered to ITU's topic/subtopic convention (subtopics 1.1 through 1.7). The former 1.8, which introduced four signpost countries, is retired: its two strongest slides now close 1.7 as evidence that the four asks are commitments other governments have actually made, and its comparator-country prompt lives on as the AI usage tip of Topic 5's subtopic 5.1. Each is reworked to stand alone — meta-introductions, playlist-stitching outros and backward references to other videos have been removed. All slide specifications follow ITU's text-only branding (Arial Bold 28pt title, Arial 18pt body, background #E5F5FB, no images, no individuals on screen). Each subtopic carries an AI usage tip with a copy-paste Claude prompt template, per the Guide §2.ii and ToR §4.3. External references use the ITU convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the six video scripts that together make up Topic 1 of Knowledge Product 1 (Government Enterprise Architecture), along with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.2 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 1 is the Strategist-facing entry point to KP1. It establishes why a national Enterprise Architecture is the necessary foundation for digital government, defines what an EA actually is in plain language, makes the case for anchoring on PAERA specifically, presents the EA lifecycle on a single page, names the commitments the Strategist must make, and closes by pointing to three real-world signposts."),

  H3("1.2 Alignment with ITU's Knowledge Products and Video Materials Guide"),
  P("Five compliance items distinguish v0.2 from v0.1. (1) Topic-and-subtopic numbering per Guide §1.i. (2) Each video stands alone — no in-video introduction or conclusion per Guide §3.i and the Optional Script Prompt. (3) Slides are text-only in Arial Bold 28pt title / Arial 18pt body / background #E5F5FB per Guide §3.i Slides Branding. (4) No individuals on screen — AI avatar or computer-screen-only voice-over per Guide §3 Note. (5) An AI usage tip is embedded in every subtopic per Guide §2.ii and ToR §4.3."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 1 at a glance — the six subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all six videos. Section 5 records the open calibration items raised during drafting."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without further reference to a storyboard."),

  pageBreak()
);

// ---------- TOPIC 1 AT A GLANCE ----------
body.push(
  H1("2. Topic 1 at a glance"),
  P("Seven standalone subtopic videos. One Strategist persona throughout. Total runtime approximately twenty-nine minutes. Each video has a single message and a single learning outcome. The videos are designed to be discoverable individually via YouTube search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["1.1", "Why your country needs a national EA",
      "Without a shared plan for your government's digital systems, every new programme rebuilds what others have already built. The country pays. The citizen pays. Your minister cannot deliver what they promised.", "~4 min"],
    ["1.2", "What an EA actually is",
      "An EA is the picture everyone agrees describes your government — minister, ministry CIO, donor, vendor. With it, you can lead the conversation. Without it, others lead it for you.", "~4 min"],
    ["1.3", "Why projects can't do this themselves",
      "Procurement rules can require interoperability. They cannot deliver it. Only planning at the level of the whole government, supported by reference architectures, can.", "~4 min"],
    ["1.4", "Why an EA matters more now — and what it lets your minister actually do",
      "For thirty years, digital work meant putting paper online. That era is ending. The work now is to redesign how your ministry serves citizens — and that work needs business and IT in the same room, using the same words.", "~4 min"],
    ["1.5", "Why PAERA-anchored — the head start you do not pay for twice",
      "PAERA gives your team five years of head start. Adopt it, and the architecture work begins on day one. Do not adopt it, and your first year is spent inventing what others have already published.", "~4 min"],
    ["1.6", "The lifecycle on one page",
      "Six months from start to a roadmap your minister can take to cabinet. Then ongoing governance. Five phases. Four sign-offs. One continuous practice.", "~4 min"],
    ["1.7", "What you will need from your minister — and how to ask for it",
      "Four asks. A small permanent EA team. An EA Board with real authority. About two per cent of digital budget, sustained for five years. And one promise — that the team will not be pulled onto the urgent project of the week. Four very different governments have already committed to all four.", "~5 min"]
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
  practice: "a 4-row markdown table plus a 3-bullet summary",
  title: "Why your country needs a national EA",
  runtime: "~4 min",
  words: 405,
  paeraAnchor: "§2.1 Problem statement",
  singleMessage: "Without a shared plan for your government's digital systems, every new programme rebuilds what others have already built. The country pays. The citizen pays. Your minister cannot deliver what they promised.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why your country needs a national EA'. Voice-over begins." },
    { text: "You have probably seen this pattern. One programme builds a system to register citizens. Another builds another, for a different service. A third builds a third. Each takes years, funded separately. And your citizen still fills the same form five times, at five different counters." },
    { text: "You cannot fix this inside any one programme. Each programme is doing exactly what it was funded to do." },
    { cue: "Slide 2 — Title: 'Four signs the pattern is in your government'. Body: four text rows, revealed one at a time. Row 1: 'More than one register of the same people'. Row 2: 'Every system-to-system link built from scratch'. Row 3: 'Vendor lock-in on systems built years ago'. Row 4: 'Ministries that do not connect across each other'." },
    { text: "There are four signs that this pattern is happening in your government." },
    { text: "Sign one. Your ministry has more than one register of the same people. The school list has one. The national ID register has another. The social register has a third. Each has its own list. None of them agree." },
    { text: "Sign two. Every time two systems need to share data, you build a new connection from zero. Last year your team connected the tax office to the business register. This year you are doing the same work for the health ministry. The connection is built again, from scratch." },
    { text: "Sign three. A vendor built one of your systems ten years ago. To change anything in it, you must call that vendor and pay what they ask. Nobody else knows how it works. The vendor knows this, and prices accordingly." },
    { text: "Sign four. Each ministry has its own digital systems, and they do not connect across ministries. The citizen who gave her ID number to the health ministry must give it again, on paper, when she enrols her child in school. The pledge to ask each citizen for information only once exists on paper. In practice, it is impossible." },
    { cue: "Slide 3 — Title: 'Four ways the country pays'. Body: 2x2 grid of text labels: 'Money — the same systems built many times' / 'Time — programmes wait for work nobody planned' / 'Citizens — the same form, five places' / 'Minister — flagship cross-ministry programmes cannot land'." },
    { text: "The cost of this pattern runs in four directions at once. You pay more, because you build the same things many times. The country moves more slowly, because every new programme waits for cross-system work that nobody planned for. Your citizens carry the burden, because they fill the same form in five places. And your minister cannot deliver a flagship cross-ministry programme, because the systems will not talk to each other." },
    { cue: "Slide 4 — Title: 'One root cause'. Body, two text blocks: 'There is no shared plan.' 'No one has written down what your digital systems are, who owns them, and how they should fit together.' Below in larger text: 'A national Enterprise Architecture is that plan.'" },
    { text: "All four signs come from one root cause. There is no shared plan. No one has written down what your government's digital systems are, who owns them, and how they should fit together. That shared plan is what a national Enterprise Architecture provides. The rest of this knowledge product shows you how to commission one, what it will deliver, and what you will need from your minister to make it work." },
    { cue: "Slide 5 — Title: 'Sources'. Body: bullet list — PAERA v1.0; EU European Interoperability Framework. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Why your country needs a national EA'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP1 / 1.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Four-symptom text list, revealed one row at a time. Each row: short headline (Arial Bold 22pt) plus one-line concrete example (Arial 18pt).",
      "Cumulative reveal — rows remain visible as each is added. No icons. Readable on mobile."],
    ["3", "Cost-of-fragmentation. 2x2 text grid: Money / Time / Citizen experience / Policy capacity. Each cell: 2-3 word label (Arial Bold 22pt) plus one-line example (Arial 18pt).",
      "Strategist's recognition moment — visually clean text grid, no icons, no images."],
    ["4", "Diagnostic slide. Top: 'No shared map of your country's digital landscape.' (Arial Bold 22pt). Bottom: 'A national Enterprise Architecture fills the gap.' (Arial Bold 28pt).",
      "The most important visual in the video. All text. No images. No diagram."],
    ["5", "Sources slide. Bulleted text: PAERA v1.0 reference; Once-Only principle reference. Footer: 'Find the link in the description.'",
      "Lets viewers track down the cited materials via the YouTube description."]
  ],
  aiTip: {
    title: "Diagnose your country's fragmentation symptoms",
    problem: "A Strategist new to EA may need to assess whether their country actually shows the four symptoms described in this video, and how severely. This prompt produces a defensible diagnostic table the Strategist can take into a cabinet briefing.",
    prompt: "Below is a description of [country X]'s digital landscape and recent digital initiatives [paste 1–3 paragraphs of context, including any known cross-agency systems, identity programmes, and recent digital-government strategy documents]. For each of the four common fragmentation symptoms — duplicate registries, bespoke point-to-point integrations, legacy vendor lock-in, sectoral islands — assess whether the described landscape shows that symptom. Output a 4-row table: symptom, severity (None / Partial / Severe), evidence cited from the input, illustrative cost direction (money / time / citizen experience / policy capacity). Be conservative — claim Severe only if the evidence is in the input. End with 3 bullets: which symptoms need immediate diagnostic work, which are likely false negatives, what additional information would sharpen the assessment.",
    io: "Input: 1–3 paragraphs of country-specific digital-landscape context. Output: a 4-row markdown table plus a 3-bullet summary.",
    safeguard: "Treat the output as a hypothesis, not a finding. Validate each row against a named source (a published strategy document, a documented incident, or a direct stakeholder interview) before using it in a cabinet briefing."
  },
  metadataRows: [
    ["Working title",          "Why your country needs a national EA"],
    ["YouTube-optimised title", "Why every digital-government programme rebuilds the same plumbing — and how to stop it"],
    ["Description (60 words)", "Four symptoms tell you your government is missing a digital foundation: duplicate registries, bespoke integrations, legacy lock-in, sectoral islands. This 4-minute video for digital-government decision-makers names the symptoms, shows the cost in four directions, and points to the foundation that closes the gap — a national Enterprise Architecture, PAERA-anchored. Find resources and the AI diagnostic prompt in the description."],
    ["Tags",                    "enterprise architecture, digital government, PAERA, GovStack, ITU, Giga, digital transformation, EA"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.3 (AI integration — diagnostic prompt); §4.6 (real-life examples implied)"],
    ["PAERA citations",         "§2.1 Problem statement; §5.2 Principle #5 (Once-Only — used in symptom 4)"],
    ["External-link list",      "PAERA v1.0 site (paera.govstack.global); EU EIF Once-Only principle reference"]
  ]
}));

// ---------- 1.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 1.2",
  practice: "a one-slide structure ready to paste into the country's slide template",
  title: "What an EA actually is, in one breath",
  runtime: "~3 min",
  words: 400,
  paeraAnchor: "§2.3 Role of Enterprise Architecture",
  singleMessage: "An EA is the picture everyone agrees describes your government — minister, ministry CIO, donor, vendor. With it, you can lead the conversation. Without it, others lead it for you.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What an Enterprise Architecture is'. Body: two-column text. Left 'Is': agreed picture of your government; set of documents and diagrams; the same description everyone uses. Right 'Is not': software; a vendor product; a tool you procure. Voice-over begins." },
    { text: "An Enterprise Architecture is a set of documents and diagrams. Together, they describe how your government works. What services it delivers, and to whom. What data it holds, and who owns it. What software supports those services. What infrastructure runs underneath." },
    { text: "An EA is not software. It is not a vendor product. It is not a tool you buy. It is the agreed picture." },
    { text: "Why does it matter that everyone has the same picture? Because every important conversation in your ministry breaks down on this point." },
    { cue: "Slide 2 — Title: 'Who uses the picture'. Body: four labelled rows. 'Your minister — to brief cabinet'. 'The donor — before funding the next programme'. 'The vendor — to match what they propose'. 'You — to keep all three aligned'." },
    { text: "Your minister uses the picture to brief cabinet. They cannot describe what the country's digital spend is buying if there is no agreed picture of what your government's systems are. The donor uses the picture before they fund the next programme. They want to see how their investment fits with the others. The vendor uses the picture when they propose a system. They must match what is already there. And you, the middle manager, use the picture to keep all three aligned — so the donor funds what the country needs, the vendor builds what fits, and the minister tells a coherent story." },
    { cue: "Slide 3 — Title: 'Four parts of the picture'. Body: stacked text rows, top to bottom. 'Services — what your government does, and for whom'. 'Data — the information your government holds, and who owns it'. 'Applications — the software that uses the data'. 'Technology — the infrastructure underneath'." },
    { text: "Every EA looks at your government in four parts. Services — what your government does, and for whom. This is the layer your minister talks about most, because it is the layer the public sees. Data — the information your government holds, who owns it, where the authoritative copy lives. Data is the longest-lived part of any government. Applications come and go. Technology cycles every decade. Data outlasts them all. Applications — the software that uses that data to deliver those services. This is what gets bought, built, integrated, replaced. Technology — the infrastructure underneath. Networks, hosting, identity, security. The basics that must be running for anything else to work." },
    { cue: "Slide 4 — Title: 'When you write it down'. Body, single text block: 'Your digital landscape stops being a list of projects. It starts looking like a system. You can change it deliberately. You can plan investments rationally. You can hold cross-ministry conversations without re-explaining the basics every time.'" },
    { text: "When you write down all four parts, your government's digital landscape stops being a list of unrelated projects. It starts looking like a system. A system you can change deliberately. A system you can plan investments against. A system you can talk about across ministries, with donors and with vendors, without re-explaining the basics every time." },
    { cue: "Slide 5 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An EA is the agreed picture of your government — and the tool that lets you lead the conversation about what comes next.'" },
    { text: "That is what an Enterprise Architecture is. Not software. Not a tool. The agreed picture of your government — and the tool that lets you, instead of the vendor or the donor, lead the conversation about what comes next." },
    { cue: "Slide 6 — Title: 'Sources'. Body: PAERA v1.0 §2.3 Role of Enterprise Architecture. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide with the two-column text comparison: 'Is' column / 'Isn't' column, three bullet points each.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP1 / 1.2) Arial 18pt. No images. The comparison had its own slide in v0.2 with 22 words of voice-over; it is folded here."],
    ["2", "Three-element text diagram. Left text 'Governance', right text 'IT', central text 'EA artefact — the shared picture'. Two arrows pointing inward.",
      "Text labels only. No human figures. Arrows are text-box connectors."],
    ["3", "Stacked four-row text list (Business / Data / Application / Technology), one row at a time, cumulative.",
      "Order is deliberate — BDAT as defined in Inception Report glossary; data-before-application reflects modern data-first architecture."],
    ["4", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line. Designed to be quotable in a Strategist's briefing."],
    ["5", "Sources slide. Bulleted text: PAERA v1.0 §2.3; TOGAF BDAT layering. Footer: 'Find the link in the description.'",
      "Lets viewers verify the framing."]
  ],
  aiTip: {
    title: "Draft a one-slide 'what is EA' explainer for ministers",
    problem: "A Strategist who has watched this video may need to brief their minister, cabinet or sector CIO on what an EA is, in one slide, in non-technical language. This prompt produces a country-tailored explainer.",
    prompt: "Draft a one-slide explainer titled 'What is Enterprise Architecture' for a [Cabinet briefing / ministerial induction / sector CIO onboarding] in [country X]. The slide should include: a one-sentence definition; the four BDAT layers (Business, Data, Application, Technology) with one-line examples specific to [country X]'s public-sector context — e.g. mention a real sector ministry, a known state registry, a known service]; a single concluding line on why this matters for digital service delivery. Tone: factual, non-technical, suitable for ministers. Output as plain text formatted as: TITLE, then four BODY bullets, then CONCLUSION.",
    io: "Input: the audience (minister / cabinet / CIO), the country name, optionally one or two named institutions or services. Output: a one-slide structure ready to paste into the country's slide template.",
    safeguard: "Have a domain colleague (a sector CIO or chief architect) sanity-check the BDAT examples for the country before the briefing — generic examples may sound generic to ministers who expect specifics."
  },
  metadataRows: [
    ["Working title",          "What an EA actually is, in one breath"],
    ["YouTube-optimised title", "What is Enterprise Architecture, really? A 3-minute explanation for government leaders"],
    ["Description (60 words)", "An Enterprise Architecture isn't software or a vendor product — it's a shared four-layer description of how your government works, built to bridge governance and IT. In three minutes: the working definition, the four BDAT layers (Business, Data, Application, Technology), and why writing them down turns a list of projects into a system. AI prompt for a ministerial explainer in the description."],
    ["Tags",                    "enterprise architecture, EA definition, BDAT, digital government, PAERA, GovStack"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.3 (AI integration — ministerial explainer prompt)"],
    ["PAERA citations",         "§2.3 Role of Enterprise Architecture"],
    ["External-link list",      "PAERA v1.0 §2.3; TOGAF BDAT reference"]
  ]
}));

// ---------- 1.3 (NEW) ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 1.3",
  practice: "a per-programme cost table plus a country-level 5-year saving estimate",
  title: "Why projects can't do this themselves — EA as planning, RAs as scar tissue",
  runtime: "~4 min",
  words: 500,
  paeraAnchor: "§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Principles",
  singleMessage: "Procurement rules can require interoperability. They cannot deliver it. Only planning at the level of the whole government, supported by reference architectures, can.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why projects cannot fix this themselves'. Voice-over begins." },
    { text: "You may be thinking: my country already requires this. Every new digital project must specify open APIs; every contract must require interoperability. So why does the citizen still fill the same form five times? Procurement rules can require behaviour. They cannot make it the cheapest choice." },
    { cue: "Slide 2 — Title: 'A project does what a project is funded to do'. Body, three text rows: 'Question the project asks: How do we ship on time and on budget?' 'Re-using another ministry's system: learn their system, negotiate with their team, accept their delays.' 'Building your own: faster, simpler, on time.'" },
    { text: "Inside any new programme, the team is rational. They have a contract, a budget, a deadline. Re-using another ministry's identity system means learning that system, negotiating with that ministry's team, accepting their delays. Building your own version is faster. So the team builds their own. That is not a failure of discipline. That is the project doing exactly what it was funded to do." },
    { cue: "Slide 3 — Title: 'The whole-government view is different'. Body, four text rows: 'First ministry pays to build the identity system.' 'Second ministry does not — it consumes the first.' 'Third ministry does not — it consumes the same.' 'Over five years, the country saves a meaningful share of its sectoral digital spend.'" },
    { text: "Re-use becomes rational only when you can see across the whole government. From that view, the math changes. The first ministry pays to build the identity system. The second ministry does not — it consumes the first one. The third does not. The fourth does not. Over five years, the country saves a meaningful share of its sectoral digital spend." },
    { text: "But this view does not exist inside any single project. It exists only at the level of your country's whole digital portfolio. That is the view an EA gives you, and it is the view your minister needs to make funding decisions that look different from project-level cost choices." },
    { cue: "Slide 4 — Title: 'Two more things projects cannot deliver'. Body, two text blocks: 'Sustainability — twelve years from now, the original vendor is gone, the technology has moved on, and the system is still in service.' 'Complexity reduction — which feature requests do we refuse now, to avoid dependencies that cost us five years from now?'" },
    { text: "There are two more things projects do not deliver. The first is sustainability. A project ships on time and moves on. Twelve years later, the original vendor is gone. The open-source library has forked. The technology has moved on. The system you are still running has nobody who fully understands it. Projects are not incentivised to plan for that moment — they are incentivised to ship." },
    { text: "The second is complexity reduction. A project says yes to most feature requests, because feature requests come from people the project must please. Five years later, your system is too complex to maintain or to change. Each yes has accumulated. Saying no requires authority the project does not have." },
    { cue: "Slide 5 — Title: 'Reference architectures answer the questions projects do not'. Body, three text rows: 'Other countries have built these systems for decades.' 'They learned what survives technology change and what does not.' 'A reference architecture is that learning, written down.'" },
    { text: "Reference architectures answer the questions projects do not. Other countries have built these systems for decades. They learned what survives technology change and what does not. They learned which architectural decisions still hold up after twenty years and which decisions cost them dearly. A reference architecture is that learning, written down. PAERA is one such reference. Adopting it means starting with their lessons, instead of paying for the same lessons yourself over the next twenty years." },
    { cue: "Slide 6 — Title: 'EA is planning, not engineering'. Body, three large text lines: 'The four-part picture is the artefact.' 'Planning is the function.' 'Re-use, sustainability and complexity reduction — none of these come from projects. All of these come from EA.'" },
    { text: "So when you make the case for an EA, the case is this. The four-part picture is the artefact. Planning is the function. Re-use, sustainability and complexity reduction — three things every digital ministry says it wants — none of these come from projects alone. All of them come from the planning view that an EA gives, and from the reference architectures that EA practice connects you to. That is why projects cannot fix this themselves. That is why an EA is work your minister must commission, separately, deliberately, with sustained funding." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Principles. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Why projects can't do this themselves'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP1 / 1.3) Arial 18pt. No images."],
    ["2", "Project-optimisation slide. Three text blocks: the project question; the cost of re-use at project level; the rationality of build-your-own.",
      "Frames the local-rational behaviour without judging it — the math, not the morality."],
    ["3", "Country-level math slide. Bullet list of the cost transfer across ministries; concluding line on invisibility at project level.",
      "The whole-of-government view is the only place this math exists."],
    ["4", "Two-question slide. Sustainability question vs project question; complexity-reduction question vs project question.",
      "Names the two functions projects can't perform. Text-only contrast."],
    ["5", "Scar-tissue slide. Three lines on what RAs are and what adopting one inherits.",
      "Makes 'reference architecture' concrete by reframing it as inherited experience."],
    ["6", "Synthesis slide. Three large text lines: artefact / function / what emerges.",
      "The take-home line. Quotable in a cabinet briefing."],
    ["7", "Sources slide. Bulleted PAERA citations. Footer: 'Find the link in the description.'",
      "Lets viewers verify the framing."]
  ],
  aiTip: {
    title: "Build the whole-of-government business case for building-block re-use",
    problem: "A Strategist needs to demonstrate to cabinet, budget authority or donor that re-use of building blocks is cheaper at the country level than at the project level, even though each individual project would not choose it. This prompt produces a draft business case that makes the math visible.",
    prompt: "Below are 3 to 5 of [country X]'s current and planned digital-government programmes [paste short descriptions, ideally with rough budget envelopes and the identity / payment / data-exchange components each programme needs]. For the country as a whole, estimate the cost difference between (a) each programme building its own version of identity, payments and data-exchange components, vs (b) all programmes consuming a shared set of GovStack-aligned building blocks. Acknowledge that option (b) is locally MORE expensive for each individual project. Output: per-programme table showing the local cost of 'do it yourself' (cheaper for this project) vs the local cost of 'consume the BB' (more expensive for this project), plus a country-level total over 5 years. End with a 'what makes this calculation work' note — the conditions (BB availability, governance authority, sustained funding, training capacity) that turn the country-level math from theoretical to realised.",
    io: "Input: 3–5 short programme descriptions, with rough budget envelopes if known. Output: a per-programme cost table plus a country-level 5-year saving estimate, plus the realisation-conditions note.",
    safeguard: "This is a directional calculation, not a costed business case. Use it to motivate a detailed costing exercise — do not present the per-programme numbers as quotations."
  },
  metadataRows: [
    ["Working title",          "Why projects can't do this themselves"],
    ["YouTube-optimised title", "Why digital procurement rules don't fix fragmentation — and what an EA actually does"],
    ["Description (60 words)", "Procurement rules can require open APIs. Strategies can mandate interoperability. But projects, optimising rationally for delivery, will not re-use across ministries — and won't deliver sustainability or complexity reduction. Only an EA, anchored on a reference architecture, brings those properties to the front. Five minutes for digital-government leaders. AI business-case prompt in the description."],
    ["Tags",                    "EA planning, building block reuse, GovStack, digital procurement, sustainability, complexity reduction, reference architecture, PAERA"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.2 (reference frameworks); §4.3 (AI integration — business-case prompt)"],
    ["PAERA citations",         "§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Principles"],
    ["External-link list",      "PAERA v1.0 §1.3 (GovStack Vision); PAERA v1.0 §3.3 (Digital Infrastructure principles); PAERA v1.0 §5.2 (Principles)"]
  ]
}));

// ---------- 1.4 (NEW — EA as lingua franca) ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 1.4",
  practice: "a 3-column decomposition plus a meeting agenda",
  title: "Why an EA matters more now — and what it lets your minister actually do",
  runtime: "~4 min",
  words: 440,
  paeraAnchor: "§2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation",
  singleMessage: "For thirty years, digital work meant putting paper online. That era is ending. The work now is to redesign how your ministry serves citizens — and that work needs business and IT in the same room, using the same words.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why an EA matters more now'. Voice-over begins." },
    { text: "For a long time, digital transformation in government meant one thing: take a paper process and put it online. The form becomes a web form, the queue an online appointment, the certificate a PDF. The ministry still does the same work — only the medium changes." },
    { cue: "Slide 2 — Title: 'Two kinds of digital work'. Body, two-column text. Left column 'The old work': 'Take a paper process and put it online' / 'The ministry's operating model stays the same' / 'Business decides what; IT delivers how'. Right column 'The new work': 'Redesign how citizens are served' / 'The ministry's operating model changes' / 'Business and IT decide together'." },
    { text: "That work is still important. But it is no longer the most important work your ministry is being asked to do. The countries — and the ministries — that are delivering real citizen results today are not just digitising forms. They are redesigning how citizens are served." },
    { cue: "Slide 3 — Title: 'What the new work looks like'. Body, three text rows: 'One farmer registry shared by the agriculture ministry, the cooperative bank, the input subsidy programme and the climate-resilience programme.' 'One national identity that lets a citizen prove who they are at any service, without paper.' 'One learner record that follows the child from primary school to university.'" },
    { text: "Look at what the new work actually looks like. One farmer registry, used by the agriculture ministry, the cooperative bank, the input subsidy programme and the climate-resilience programme — the same farmer, recognised the same way, by all of them. One national identity that lets a citizen prove who they are at any service, without paper. One learner record that follows the child from primary school to university. None of these is \"put it online.\" Each of them is a redesign of how the ministry works." },
    { cue: "Slide 4 — Title: 'A new problem comes with the new work'. Body, single text block: 'When you redesign how your ministry works, the business side — minister, director-general, head of policy — and the IT side — architects, engineers — must decide together. About the same questions. The boundary that worked in the old work does not work anymore.'" },
    { text: "But the new work comes with a new problem. When you redesign how the ministry works, two groups must decide together. The business side: your minister, your director-general, your head of policy. The IT side: your architects, your engineers. In the old work, they did not need to talk much. Business decided what; IT delivered how. In the new work, they decide together. About the same questions. With the same level of seriousness." },
    { cue: "Slide 5 — Title: 'But they do not share a language'. Body, two text blocks: 'Your minister talks about citizen services and policy goals.' 'Your chief architect talks about systems, APIs, and data.' Below: 'They sit in the same meeting and miss each other. The decision does not get made well.'" },
    { text: "But they do not share a language. Your minister talks about citizen services and policy goals. Your chief architect talks about systems, APIs and data. They sit in the same meeting and miss each other. The decision does not get made well — or it does not get made at all. And the ministry stays in the old work, even though the new work is what is needed." },
    { cue: "Slide 6 — Title: 'An EA gives them a shared language'. Body, three text rows: 'The agreed picture — something both sides point at.' 'Plain words for the basic terms — service, capability, data domain — that mean the same thing to both sides.' 'A regular forum — the EA Board — where they decide together.'" },
    { text: "This is the second job an Enterprise Architecture does. It gives both sides a shared language for the new work. The agreed picture — something both sides can point at. Plain words for the basic terms — service, capability, data domain — that mean the same thing to both sides. And a regular forum — the EA Board — where they sit together and decide. With these in place, the conversation about redesigning how the ministry works finally happens. Without them, it does not." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'In the era of digitising paper, an EA was useful. In the era of redesigning how the ministry works, an EA is necessary.'" },
    { text: "In the era of digitising paper, an EA was useful. In the era of redesigning how the ministry works, an EA is necessary — because without it, business and IT cannot have the conversation the redesign requires." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'EA as the lingua franca'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP1 / 1.4) Arial 18pt. No images."],
    ["2", "Two-era comparison. Two columns: 'Automation era' and 'Transformation era'. Four parallel rows in each: what's automated, operating model, business-IT division of labour, language.",
      "The visual contrast is what makes the era shift land. Text-only — no icons."],
    ["3", "The new problem slide. Single text block stating the structural fact that operating-model transformation requires joint business-IT decisions.",
      "Names the structural shift in one breath."],
    ["4", "Conversation-problem slide. Two short text blocks, one per side; a conclusion line below.",
      "The Strategist's recognition moment — they have lived this conversation failure."],
    ["5", "EA-as-bridge slide. Three text blocks naming the three EA functions that operationalise the bridge (object / vocabulary / rhythm).",
      "Makes the communication function concrete by naming its three mechanisms."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line. Quotable in a cabinet briefing."],
    ["7", "Sources slide. Bulleted PAERA citations. Footer: 'Find the link in the description.'",
      "Lets viewers verify the framing."]
  ],
  aiTip: {
    title: "Translate an operating-model question into a business-IT joint agenda",
    problem: "A Strategist contemplating operating-model change (rather than process automation) often struggles to surface what the joint business-IT decisions actually are. This prompt produces a structured agenda the Strategist can use to convene business management and IT leadership in the same room.",
    prompt: "Below is a description of an operating-model question my [ministry / agency] is considering — for example 'should we move to a Once-Only data-sharing model', 'should we redesign citizen service delivery around digital identity', 'should we offer this service through digital-only channels': [paste the question and 1–3 paragraphs of context, including any known constraints — legal, policy, technical, political]. Decompose the question into (a) the pure business decisions only organisational management can make (policy, legal, who owns what), (b) the pure IT decisions only the architect can make (technology choice, security model, integration pattern), and (c) the joint decisions that require business and IT in the same room. For each joint decision, frame it in plain language both groups can understand, and identify what each side needs from the other to make a good decision. Output: a 3-column table (business / IT / joint), plus a 5-bullet 'agenda for the first joint meeting' with named decisions.",
    io: "Input: a 1–3 paragraph operating-model question with context. Output: a 3-column decomposition plus a meeting agenda.",
    safeguard: "The decomposition is a starting structure for the conversation, not a verdict. The actual lines between 'business decision' and 'IT decision' are politically negotiated in every country — use the output to surface the conversation, not to settle it."
  },
  metadataRows: [
    ["Working title",          "EA as the lingua franca"],
    ["YouTube-optimised title", "Why an EA matters more in the transformation era than the automation era"],
    ["Description (60 words)", "For thirty years, digital transformation in government meant automating existing processes. That era is ending. The shift is to redesigning operating models around digital capabilities. In the new era, business and IT can no longer make separate decisions — they must decide together, and they need a shared language. EA is that language. Five minutes for digital-government leaders. AI joint-agenda prompt in the description."],
    ["Tags",                    "enterprise architecture, business-IT alignment, digital transformation, operating model, change management, PAERA, digital government"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.3 (AI integration — joint-agenda prompt)"],
    ["PAERA citations",         "§2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation"],
    ["External-link list",      "PAERA v1.0 §2.3 (Role of Enterprise Architecture); PAERA v1.0 §4.5 (Digital Co-creation)"]
  ]
}));

// ---------- 1.5 (was 1.4, originally 1.3 — Why PAERA-anchored specifically) ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 1.5",
  practice: "a per-initiative coverage table plus a coverage summary",
  title: "Why PAERA-anchored — the head start you do not pay for twice",
  runtime: "~4 min",
  words: 480,
  paeraAnchor: "§1.2 Motivation; §1.3 GovStack Vision; §2.3 Role of EA",
  singleMessage: "PAERA gives your team five years of head start. Adopt it, and the architecture work begins on day one. Do not adopt it, and your first year is spent inventing what others have already published.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'PAERA — the head start you do not pay for twice'. Voice-over begins." },
    { text: "An Enterprise Architecture is the agreed picture of your government. Which framework do you use to draw it? You have two paths — design one for your country from scratch, or anchor on one that already exists." },
    { cue: "Slide 2 — Title: 'Two paths to a national EA'. Body: two stacked text-box rows. Top row (long): 'Hire consultants to design a framework for your country — 12 to 18 months before the architecture work begins'. Bottom row (short): 'Anchor on PAERA — the architecture work begins on day one'." },
    { text: "The first path: hire consultants to design an EA framework specifically for your country — new terms, new principles, a new method. Twelve to eighteen months before any architect has drawn a single picture of any ministry. You have paid for groundwork, not for architecture. The second path: anchor on a framework that already exists, built for the public-sector use case, with the groundwork done, so your team starts on day one. PAERA is that framework — the Public Administration Ecosystem Reference Architecture, published in 2024 under GovStack." },
    { cue: "Slide 3 — Title: 'Five things you do not invent'. Body, five numbered text rows revealed one at a time. Row 1: 'A way to organise ministries and authorities'. Row 2: 'Plain words for the basic terms'. Row 3: 'A library of common building blocks'. Row 4: 'A set of architectural principles'. Row 5: 'A way to run the work'." },
    { text: "Five things PAERA gives your team on day one. Five things you do not pay to invent." },
    { text: "First, a way to organise ministries and authorities. Every government body in your country fits one of three types — a policy unit, a regulatory agency, a service-delivery authority — with a small set of supporting elements like state registries. Your architects do not spend three months arguing about which type each ministry is. The classification is published." },
    { text: "Second, plain words for the basic terms. Capability. Service. Application. Data domain. Each one defined, in plain language. Day one, your architects are using the vocabulary, not designing it." },
    { text: "Third, a library of common building blocks. Identity. Payments. Information sharing. Registries. Each one is a published specification with working examples. When your team needs to design a national identity system, they reach for the pattern. They do not invent it from scratch." },
    { text: "Fourth, a set of architectural principles. Ten of them — from rule of law, through security and privacy, to user-centred design. Already debated across many countries. You extend them for your country's context. You do not draft them." },
    { text: "Fifth, a way to run the work. The lifecycle — Discover, Assess, Adapt, Plan, Execute and Govern — already exists, with roles, decisions and sign-off points defined per phase. We walk it in the next video." },
    { cue: "Slide 4 — Title: 'Works across sectors'. Body, text diagram. Horizontal base label: 'PAERA — the same framework'. Above it, four stacked sector labels: 'Education', 'Health', 'Social protection', 'Agriculture'." },
    { text: "PAERA works across sectors. The same framework applies to education, to health, to social protection, to agriculture. Once your country builds the EA muscle for one sector, every next sector reuses the same investment. The framework does not get re-bought, re-trained, re-customised. The second sector is cheaper than the first. The third is cheaper still." },
    { cue: "Slide 5 — Title: 'PAERA connects to a working network'. Body, central label 'PAERA', five short connected labels around it: 'Building Block specifications' / 'GovMarket — compliant implementations' / 'Certification programme' / 'Sandbox for prototyping' / 'Shared knowledge base'." },
    { text: "PAERA is not a standalone document. It connects to a working network — building block specifications, a marketplace of vendor-built implementations that have been checked for compliance, a certification programme, a sandbox you can test in, a shared knowledge base. Adopting PAERA means joining a network of countries and partners actively building these resources together." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'PAERA is not a vendor choice. It is the choice to start with the work other countries have already done — so your team can spend their time on what is specific to your country.'" },
    { text: "PAERA is not a vendor choice. It is the choice to start with the work other countries have already done — so your team spends their time on what is specific to your country." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 site (paera.govstack.global); GovStack site (govstack.global); GovMarket. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Why PAERA-anchored specifically'.",
      "Standard ITU template. No images."],
    ["2", "Two-path text bars. Long top bar with text, short bottom bar with text. The length contrast is the visual.",
      "Do not label the top bar pejoratively — the numbers do the work."],
    ["3", "Numbered five-row text list (Taxonomy / Metamodel / Patterns + BBs / Principles / Methodology), one row at a time, cumulative.",
      "The substantive payload of the video. Readable on mobile."],
    ["4", "Sector-portability text diagram. PAERA as a base text-label; four sector labels stacked above.",
      "Makes 'portability compounds' concrete. All text labels, no icons."],
    ["5", "Connection slide. PAERA in centre, five connected labels (BB specs, GovMarket, Certification, Sandbox, Knowledge Base) around it.",
      "Watch the marketing risk — keep factual. These are real assets the country accesses, not buzzwords."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Designed as a quotable line for the Strategist's own briefings."],
    ["7", "Sources slide. Bulleted text references. Footer: 'Find the link in the description.'",
      "Lets viewers track sources via the YouTube description."]
  ],
  aiTip: {
    title: "Map your country's existing initiatives against PAERA's five foundations",
    problem: "A Strategist needs to understand which PAERA foundations their country has already partially built and which need to be built from scratch — a defensible map that frames the EA business case.",
    prompt: "Below are [country X]'s existing digital-government initiatives and reference materials [paste 2–6 short descriptions, including any national strategy documents, interoperability platforms, identity programmes, sector EAs already published]. For each initiative, indicate which of PAERA's five foundations it already addresses: (1) taxonomy of public-sector organisations, (2) metamodel of entities and relationships, (3) pattern library and building blocks, (4) architectural principles, (5) methodology. Each initiative may cover none, one or several. Then summarise: which foundations are already covered (and where), which need to be built, and where existing work would need to be reframed to fit PAERA. Output: per-initiative table plus 3-bullet summary.",
    io: "Input: 2–6 short descriptions of country initiatives. Output: a per-initiative coverage table plus a coverage summary.",
    safeguard: "An initiative that says 'we have principles' may not have PAERA-aligned principles — confirm coverage by reading the actual document, not the marketing summary."
  },
  metadataRows: [
    ["Working title",          "Why PAERA-anchored specifically"],
    ["YouTube-optimised title", "Why anchor your national Enterprise Architecture on PAERA? Five things you don't have to build from scratch"],
    ["Description (60 words)", "Designing a country-specific EA framework from scratch takes 12 to 18 months before any architecture work begins. Anchoring on PAERA — the Public Administration Ecosystem Reference Architecture — gives you a taxonomy, a metamodel, a pattern library, principles and a methodology on day one. Sector-portable, connected to GovStack. Four minutes for digital-government leaders. AI mapping prompt in the description."],
    ["Tags",                    "PAERA, GovStack, enterprise architecture, digital government, public administration, EA framework"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (methodology framing); §4.2 (reference frameworks); §4.3 (AI integration — coverage mapping prompt)"],
    ["PAERA citations",         "§1.2 Motivation; §1.3 GovStack Vision; §2.3 Role of EA"],
    ["External-link list",      "PAERA v1.0 site (paera.govstack.global); GovStack site (govstack.global); GovMarket"]
  ]
}));

// ---------- 1.6 (was 1.5 — Lifecycle) ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 1.6",
  practice: "a per-phase RACI matrix plus a list of role gaps to resolve",
  title: "The lifecycle on one page",
  runtime: "~4 min",
  words: 405,
  paeraAnchor: "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "Six months from start to a roadmap your minister can take to cabinet. Then ongoing governance. Five phases. Four sign-offs. One continuous practice.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The EA lifecycle on one page'. Body: horizontal text-box flow of five labelled phase boxes — 'Discover', 'Assess', 'Adapt', 'Plan', 'Execute & Govern'. Four sign-off markers between the first four phases. A continuous-arrow on the right of the fifth box. Voice-over begins." },
    { text: "If you take one picture away from this knowledge product, take this one: the EA lifecycle on a single page. Five phases, four sign-offs. The first four take about six months; the fifth is ongoing — your country's permanent way of working." },
    { cue: "Slide 2 — Title: 'The five phases'. Body: five rows revealed cumulatively, each with Question / Deliverable / Sign-off / Duration. 'Discover — What exists today? Discovery brief. The picture is accurate. 3–4 weeks.' 'Assess — What is the gap? Current state and maturity scorecards. The gap analysis reflects ground truth. 6–8 weeks.' 'Adapt — What fits our country? Localised framework with sourcing decisions. The framework and the build/buy/share approach. 4–6 weeks.' 'Plan — How do we get there? Roadmap and investment plan. Roadmap approved, budget committed. 6–8 weeks.' 'Execute & Govern — How do we sustain this? A living, governed EA. Quarterly Board reviews. Ongoing.'" },
    { text: "Phase one, Discover. What exists today? Your architects map the current landscape — the strategies in force, the systems, the sector plans, the legal framework — and produce a Discovery brief with no recommendations yet. Sign-off: the picture is accurate enough to build on. Three to four weeks." },
    { text: "Phase two, Assess. What is the gap? Architects compare what they found against PAERA-anchored standards, write the current state in the four parts of an EA, score maturity, and write the gap analysis. Sign-off: it names the right problems in the right order. Six to eight weeks." },
    { text: "Phase three, Adapt. What fits our country? PAERA is a starting point, not a constraint, so architects shape it with sector CIOs and your EA Board — your principles, your sector priorities, and for each building block a build, buy, share or sandbox call. Four to six weeks." },
    { text: "Phase four, Plan. How do we get there? Architects describe the target state and sequence the work into a roadmap with investment estimates. Sign-off: roadmap approved, budget committed. This is the deliverable your minister takes to cabinet. Six to eight weeks." },
    { text: "Phase five, Execute and Govern. How do we sustain this? The approved roadmap becomes a project pipeline, and a small permanent team of two to four senior architects turns the EA from a one-time delivery into a living repository. The Board reviews new projects against the architecture. Quarterly, indefinitely." },
    { cue: "Slide 3 — Title: 'The rhythm of sign-offs'. Body, single text block: 'Four sign-offs across the first six months. The senior decision-maker does not review every diagram. They review at four moments. Between sign-offs, the architects work — and the minister's job is to remove political obstacles.'" },
    { text: "Notice the rhythm. Four sign-offs in six months. Your minister does not review every diagram; they review at four moments, each tied to a defined deliverable. Between sign-offs the architects work, and the minister's job is to remove the political obstacles. And the phases depend on each other, in order: discover before you measure, measure before you adapt, adapt before you plan, plan before you execute, govern always." },
    { cue: "Slide 4 — Title: 'Six months to a roadmap, then forever'. Body, three timeline labels: 'Week 1 — Discovery begins' / 'Week 26 — Approved roadmap' / 'Ongoing — Governed EA'." },
    { text: "Six months from Discovery to an approved roadmap. Then your country in permanent EA-governed mode. That is what \"months not years\" actually means. It is not a slogan. It is the consequence of sequencing five phases — each with a clear question, a clear deliverable, a clear sign-off — and committing to the practice that runs after." },
    { cue: "Slide 5 — Title: 'Sources'. Body: PAERA v1.0 §3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide carrying the five-phase text-box flow: four sign-off markers between the first four phases, a continuous-arrow tail on the fifth.",
      "Standard ITU template. The centrepiece artefact of the topic; designed for screenshot use. Text labels only — no icons."],
    ["2", "The five phases on one cumulative-reveal slide. Five rows, revealed one at a time, each with Question / Deliverable / Sign-off / Duration.",
      "This is the 'one page' the video is named for. In v0.2 the five phases had a slide each; the cumulative reveal keeps the whole lifecycle visible while each phase is narrated."],
    ["3", "Sign-off rhythm slide. Horizontal stripe with four sign-off markers, plus the five-line dependency rule.",
      "Reinforces 'four gates, one Strategist' and lands 'you can't skip phases'. Text-only."],
    ["4", "Time-scale summary slide. Three milestone labels.",
      "Closes the artefact on the months-not-years promise."],
    ["5", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the PAERA citations."]
  ],
  aiTip: {
    title: "Draft a phase-by-phase RACI for your country's EA programme",
    problem: "Before the lifecycle starts, the Strategist needs to know who in their country plays which role at which phase. This prompt produces a draft RACI matrix that surfaces the role gaps.",
    prompt: "Below is a description of [country X]'s existing institutional roles relevant to a national EA programme: [list the CDO/CTO or equivalent, sector ministry CIOs, ICT unit head, any existing EA function, the Governance Board if one exists, the procurement authority, the data protection regulator, the budget authority — and any roles you know are missing]. For each phase of the PAERA-anchored EA lifecycle (Discover, Assess, Adapt, Plan, Execute & Govern), draft a RACI matrix — who is Responsible, Accountable, Consulted, Informed. Identify any role gap (a phase responsibility with no existing role to assign it) and flag for resolution before the phase starts. Output: a 5-row RACI table (one row per phase, columns R/A/C/I) plus a 'role gaps' list at the end.",
    io: "Input: a list of existing roles in the country. Output: a per-phase RACI matrix plus a list of role gaps to resolve.",
    safeguard: "A RACI is only as useful as the people named in it have actual authority — if the 'Accountable' role for a phase is unclear in the country, the gap matters more than the matrix."
  },
  metadataRows: [
    ["Working title",          "The lifecycle in one page"],
    ["YouTube-optimised title", "The 5-phase Enterprise Architecture lifecycle — commission a national EA in six months"],
    ["Description (60 words)", "Five phases — Discover, Assess, Adapt, Plan, Execute & Govern — sequence the work of standing up a PAERA-anchored Enterprise Architecture. Four Strategist sign-off gates govern the first six months. Phase 5 is ongoing. Five minutes for digital-government decision-makers. The one-page lifecycle every leader should keep on the wall. AI RACI-drafting prompt in the description."],
    ["Tags",                    "enterprise architecture lifecycle, PAERA, EA methodology, digital government, GovStack, RACI"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.2 (reference frameworks); §4.3 (AI integration — RACI prompt); §4.5 (the lifecycle figure is itself a demonstration template)"],
    ["PAERA citations",         "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §3.1.3; PAERA v1.0 §5.4"]
  ]
}));

// ---------- 1.7 (was 1.6 — Commitments) ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 1.7",
  practice: "a structured ToR document",
  title: "What you will need from your minister — and how to ask for it",
  runtime: "~5 min",
  words: 550,
  paeraAnchor: "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "Four asks. A small permanent EA team. An EA Board with real authority. About two per cent of digital budget, sustained for five years. And one promise — that the team will not be pulled onto the urgent project of the week.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What you will need from your minister'. Voice-over begins." },
    { text: "Suppose you have made the case and your minister is convinced. Now the harder part: agreeing the four specific things the minister must commit to. Each one is necessary; without any one of them the EA programme will struggle." },
    { cue: "Slide 2 — Title: 'Ask 1 — A small permanent EA team'. Body, three short text rows: '2 to 4 senior architects, permanent, reporting to your CDO or equivalent'. 'Typical composition: a chief architect, domain architects, a methodology lead. Smaller countries can run it with 2 senior people, each carrying multiple domains.' 'Not consultants. Not a temporary unit. The institutional home of the architecture.'" },
    { text: "First ask. A small permanent EA team. Two to four senior architects. Permanent. Reporting to your CDO or its equivalent. Not project consultants who arrive and leave. Not a temporary unit. The institutional home of architecture work in your country. Tell your minister: this team will exist whether or not any single programme is running. That is the point. It is your country's permanent muscle for cross-cutting digital decisions." },
    { cue: "Slide 3 — Title: 'Ask 2 — An EA Board with real authority'. Body, four short text rows: 'Chair: your CDO, or your minister directly'. 'Members: sector CIOs, owners of major registries, optional external advisor'. 'Cadence: quarterly main meetings, ad-hoc for urgent decisions'. 'Mandate: BINDING — not advisory'." },
    { text: "Second ask. An EA Board with real authority. Chaired by your CDO, or by the minister directly. Members: sector ministry CIOs, owners of the major state registers, and where useful an external advisor. Cadence: quarterly meetings, with ad-hoc sessions for urgent decisions. The hardest part: the mandate must be binding, not advisory. Without binding authority the EA becomes documentation nobody reads; with it, the EA becomes the place every digital decision passes through." },
    { cue: "Slide 4 — Title: 'Ask 3 — A sustained budget envelope'. Body, three short text rows: 'Initial 6-month engagement: 10 to 15 senior person-months'. 'Permanent practice: 2 to 4 full-time architects, ongoing'. 'Governance overhead: Board time, occasional external review.' Bottom: 'Typical share: about 2% of your digital-government budget. Sustained for at least 5 years.'" },
    { text: "Third ask. A sustained budget envelope. Three parts: the initial six-month engagement that runs the first four phases, about ten to fifteen senior person-months; the permanent practice, your two to four architects; and the governance overhead of Board time and occasional external review. As a share of your digital-government budget the whole thing is typically about two per cent. What you want is a five-year envelope, not an annual line that disappears when ministerial priorities shift." },
    { cue: "Slide 5 — Title: 'Ask 4 — One promise about protection'. Body, single text block (Arial Bold 22pt): 'The EA team will not be pulled onto the urgent project of the week. Not by you. Not by the minister. Not by anyone in cabinet.' Below in smaller text: 'This is the most commonly broken promise, and the one that quietly kills EA programmes in their second year.'" },
    { text: "Fourth ask. One promise. The EA team will not be pulled onto the urgent project of the week. Not by you. Not by the minister. Not by anyone in cabinet. Get this in writing if you can. The most common way EA programmes quietly die is in their second year, when the team is moved onto a flagship delivery and the architecture work stops. The promise to protect the team must be explicit, must be visible, and must be recommitted whenever the minister changes." },
    { cue: "Slide 6 — Title: 'A note on time horizon'. Body, three text rows: '6 months — to an approved roadmap'. '18 to 24 months — to a fully operating practice'. '5+ years — to mature governance'. Below: 'The minister who launches this work will not be the one who completes it.'" },
    { text: "And one note on time horizon, put honestly. Six months to an approved roadmap. Eighteen to twenty-four months to a fully operating practice. Five years to mature governance. The minister who launches this work will not be the one who completes it — and a minister who hears that as a feature is the right one to commission it." },
    { cue: "Slide 7 — Title: 'Four very different governments have committed to this'. Body, four rows: 'Rwanda — small country, strong centre; one citizen-services platform; national ID across services.' 'Kenya — one-stop centres and a unifying identity programme; results mixed and openly debated.' 'South Africa — federal; coordinated through a central agency and shared standards, not imposed.' 'Estonia — mature; distributed registries; once-only; almost every service online.'" },
    { text: "One more thing to take into the meeting. Four very different governments have already made these commitments. Rwanda, small with a strong centre, one citizen-services platform and a national identity linked across services. Kenya, with one-stop centres and an identity programme whose results are mixed and openly debated. South Africa, federal, coordinating through a central agency and shared standards rather than imposing them. And Estonia, mature, with distributed registries and the once-only principle." },
    { cue: "Slide 8 — Title: 'The same four elements show in all four'. Body, four rows: 'A small central team with real authority.' 'A published framework other agencies adopt.' 'Binding governance, not advisory.' 'A multi-year horizon with results visible in months.'" },
    { text: "Four contexts, one pattern. A small central team with real authority. A published framework other agencies adopt. Binding governance rather than advisory. And a multi-year horizon with results visible inside months. Different sizes, different constitutions, the same four elements — which are the four asks, in four real governments." },
    { cue: "Slide 9 — Title: 'Four asks, in one sentence'. Body, large text (Arial Bold 28pt): 'A team. A Board. A budget envelope. A promise. Put them on a single page. Bring them to the meeting. Ask for all four together.'" },
    { text: "Four asks. A team. A Board. A budget envelope. A promise. Put them on a single page and ask for all four together — not in pieces. With all four committed, you have what you need." },
    { cue: "Slide 10 — Title: 'Sources'. Body: Rwanda — Irembo (irembo.gov.rw); Kenya — Huduma Kenya (huduma.go.ke); South Africa — SITA (sita.co.za); Estonia — e-Estonia.com, RIA (ria.ee). PAERA v1.0 §4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'What you commit as a Strategist'.",
      "Standard ITU template."],
    ["2", "Commitment 1 slide — permanent EA Practice. Composition, typical roles, principle ('institutional home').",
      "Concrete enough to imagine; abstract enough to adapt to country scale."],
    ["3", "Commitment 2 slide — EA Governance Board. Chair, members, cadence, mandate. 'Binding, not advisory' visually emphasised.",
      "Authority is what distinguishes a working Board from documentation theatre."],
    ["4", "Commitment 3 slide — budget envelope. Three components, typical share.",
      "No currency figures — person-months and percentages translate across country contexts."],
    ["5", "Commitment 4 slide — time horizon. Three milestones plus political-cycle framing.",
      "The political-cycle line is the memorable beat."],
    ["6", "'What only you can do' slide — numbered four-item list. Item 4 highlighted as 'most commonly broken'.",
      "The personal-action list is the take-home for the Strategist."],
    ["7", "Four-governments slide. Four text rows, one per signpost country with its shape.",
      "Public signpost countries shown as evidence that the four asks are real commitments other governments have made. Plain typography, no emblems. Readable on mobile."],
    ["8", "Recurring-elements slide. Four text rows of the common pattern.",
      "The recurrence is what makes the four signposts evidence rather than anecdote. Text-only."],
    ["9", "Single-sentence summary slide.",
      "Designed as a screenshot-ready slide for a Strategist's own briefings."],
    ["10", "Sources slide. Country links plus the PAERA citations. Footer: 'Find the link in the description.'",
      "Lets viewers verify the four signposts and the PAERA citations."]
  ],
  aiTip: {
    title: "Draft a Terms of Reference for your EA Governance Board",
    problem: "A Strategist who agrees with this video needs to actually establish the Governance Board. This prompt produces a country-tailored Terms of Reference document.",
    prompt: "Draft a Terms of Reference for an EA Governance Board in [country X]. Include: (1) Purpose — why the Board exists and what it governs; (2) Binding decision scope — list 5–8 specific decision types within the Board's authority (e.g. approval of new digital-government projects above a threshold, cross-domain integration approvals, technology selections that create new vendor dependencies, exceptions to the architecture); (3) Membership composition — Chair (CDO/CTO equivalent), permanent members (sector ministry CIOs by name or by post), optional external advisor; (4) Cadence — quarterly main meetings, ad-hoc for urgent decisions; (5) Reporting line — to whom the Board reports up; (6) Escalation — how decisions the Board cannot resolve get escalated; (7) Mandate review — how often the Terms of Reference itself is reviewed. Tone: formal, ministerial document. Length: 1–2 pages. Output: structured Terms of Reference ready to circulate for cabinet approval.",
    io: "Input: the country name and known role-holders. Output: a structured ToR document.",
    safeguard: "Have the country's legal counsel review the document before it is formally adopted — particularly the 'binding decision scope' section, which interacts with existing sectoral legislation."
  },
  metadataRows: [
    ["Working title",          "What you will need from your minister — and how to ask for it"],
    ["YouTube-optimised title", "Four asks every digital-government middle manager must make to commission a national EA"],
    ["Description (60 words)", "Suppose your minister is convinced. Now the harder part: agreeing the four things they must commit to. A small permanent EA team. An EA Board with binding authority. About 2% of digital budget, sustained for five years. And a promise the team won't be pulled onto the urgent project of the week. Five minutes for digital-government middle managers. AI Governance-Board ToR prompt in the description."],
    ["Tags",                    "EA governance, Chief Digitalisation Officer, CDO, EA practice, digital government leadership, PAERA"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.1 (governance considerations within methodology); §4.3 (AI integration — ToR-drafting prompt)"],
    ["PAERA citations",         "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "Rwanda — Irembo (irembo.gov.rw); Kenya — Huduma Kenya (huduma.go.ke); South Africa — SITA (sita.co.za); Estonia — e-Estonia.com and RIA (ria.ee); PAERA v1.0 §4.2.1; PAERA v1.0 §4.2.2; PAERA v1.0 §5.4"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 1 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and implement on the other half. For Strategist-facing videos in Topic 1, 'implement' means draft the corresponding artefact — a cabinet briefing slide, a commitment memo, a Governance Board ToR, a comparator-country precedent. Each subtopic's AI usage tip operationalises this directly: the prompt produces the artefact the video is teaching."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain in plain text. No country emblems, no government-agency logos. The recurring single-sentence summary slide at the end of each subtopic uses the body type at 28pt rather than 18pt to make the line screenshot-friendly for Strategists who want to reuse the message."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: (a) an AI avatar narrator generated by ITU's production pipeline from an uploaded portrait image; or (b) computer-screen-only voice-over with no narrator visible. The choice is ITU's; FiscalAdmin's scripts are agnostic to the option chosen. Where the v0.1 bundle had 'speaker on camera' cues, those cues are dropped in v0.2."),

  H3("4.4 Voice and tone"),
  P("Direct address (\"your country,\" \"your ministers,\" \"you as Strategist\"). No third-person distance. Plain language at approximately an 8th-grade English level. No IT jargon undefined; the term \"metamodel\" is deliberately deferred to Topic 2. Concrete examples in every beat — a learner exists four times, four IDs, three vendors, three years. Honest about cost: the leverage decision framing throughout, not the silver-bullet framing. The viewer should arrive at any subtopic via Google or YouTube search and find a self-contained video that does not require having watched any other video to make sense."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata. Every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video link list into the YouTube description. The aggregate list across all six subtopics is compiled in the bundle for ITU's reference; see the annex in Section 6."),

  H3("4.6 GitBook companion content"),
  P("Each subtopic in this bundle ships with the video script, the slide specification, the AI usage tip and the metadata. The GitBook companion content — written, in-depth implementation guidance per the Guide §2 — is produced as a parallel deliverable, structured to mirror the same subtopic numbering. Each GitBook chapter contains the longer-form text, the same AI prompts (with worked examples), and supporting references. Cross-references between video and GitBook content use the topic/subtopic numbers."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.2 drafting raised the editorial and structural decisions listed below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 Factual claims to verify"),
  P("Several quantitative claims are defensible at the chosen level of generality but should be web-verified before final lock: '12 to 18 months' bespoke framework design (1.5); '10 to 15 senior person-months' for an initial sector-scale EA engagement (1.7); 'under 2% of digital-government budget' as the typical share (1.7). The v0.2 items on Singapore's MyInfo coverage and the Australian Government Architecture timeline are withdrawn — those signposts were replaced by Rwanda, Kenya and South Africa, and the claims that quoted them are gone with the retired 1.8."),

  H3("5.2 Editorial tone calls"),
  P("Five tone choices are sharp and deserve a deliberate keep / soften / cut decision: 'Once-Only on paper, impossible in practice' in 1.1 symptom 4; 'data outlasts them all' in 1.2; 'the Strategist who launches this work will not be the one who completes it' in 1.7; 'quietly kills EA programmes in the second year' in 1.7; 'pay for it several times what skipping appeared to save' in 1.6."),

  H3("5.3 Structural calls"),
  P("Three structural items, two of them changes made in v0.3 and reported here rather than asked. (1) The former 1.8 is retired and Topic 1 now ships seven videos. Its four signpost countries close 1.7 on two slides, as evidence that the four asks are commitments real governments have made; the full cross-country evidence, with the mixed and contested results told honestly, is Topic 5's subject, and 1.8's comparator-country prompt is now 5.1's AI usage tip. No pointer to Topic 5 is made in the script — the teaser is written to stand alone, per the no-cross-reference rule. (2) 1.6's five per-phase slides are collapsed onto one cumulative-reveal slide — the 'one page' the video is named for — and the dependency rule folds into the sign-off-rhythm slide. (3) The reconciliation between the five-phase teaching abstraction in 1.6 and the six-phase delivery spine in the Inception Report §3 remains open. Recommendation unchanged: address it in the GitBook companion as a sidebar ('Five phases for Strategists, six phases for delivery teams'), not in the video."),

  H3("5.4 Visual production calls"),
  P("Two items to confirm with ITU's look-and-feel template once delivered (action item A5): (a) the one-page lifecycle slide in 1.6 is the centrepiece visual of Topic 1 and recurs throughout KP1 — it merits a dedicated design iteration with ITU's production team; (b) whether to include a Topic 1 'trailer' subtopic (1.0, ~60 sec) as a playlist entry — defer decision until the ITU template arrives."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the six subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions."),
  genericTable([2000, 7700], ["Subtopic", "Sources referenced"], [
    ["1.1", "PAERA v1.0 site (paera.govstack.global) for Problem statement §2.1 and Principle #5 Once-Only §5.2; EU European Interoperability Framework reference (Once-Only principle)."],
    ["1.2", "PAERA v1.0 §2.3 Role of Enterprise Architecture; TOGAF BDAT layering reference."],
    ["1.3", "PAERA v1.0 §1.3 (GovStack Vision); PAERA v1.0 §3.3 (Digital Infrastructure principles); PAERA v1.0 §5.2 (Principles)."],
    ["1.4", "PAERA v1.0 §2.3 (Role of Enterprise Architecture); PAERA v1.0 §4.5 (Digital Co-creation)."],
    ["1.5", "PAERA v1.0 site (paera.govstack.global); GovStack site (govstack.global); GovMarket; PAERA v1.0 §1.2 Motivation; §1.3 GovStack Vision."],
    ["1.6", "PAERA v1.0 §3.1.3 Readiness Assessment; PAERA v1.0 §5.4 Organisational Assessment & Roadmap."],
    ["1.7", "Rwanda — Irembo (irembo.gov.rw); Kenya — Huduma Kenya (huduma.go.ke); South Africa — SITA (sita.co.za); Estonia — e-Estonia.com and RIA (ria.ee). PAERA v1.0 §4.2.1 Management; PAERA v1.0 §4.2.2 Architecture; PAERA v1.0 §5.4 Organisational Assessment & Roadmap."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP1 Module 1 — Video Script Bundle v0.3 (ITU-aligned)",
  description: "Video script bundle for KP1 Topic 1, aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP1 Topic 1 Script Bundle v0.3 · 3 September 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP1_Module1_Script_Bundle_v0.3.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
