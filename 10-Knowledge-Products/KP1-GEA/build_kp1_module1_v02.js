// Build KP1 Module 1 — Video Script Bundle v0.2
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
    ["Version",             "v0.2 — aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "12 May 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       "S (Strategist) — CDO, Director-General, sector minister or ministerial-equivalent sponsor"],
    ["Subtopics",           "Eight subtopics (1.1 – 1.8), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 34 minutes across eight standalone videos"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call; FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.2 working draft of Topic 1, aligned to ITU's Knowledge Products and Video Materials Guide and rebalanced for a primary audience of public-sector middle managers — director-generals of digital agencies, heads of sectoral ICT units, technical secretaries — in African and other developing-country contexts. The register is plain English, eighth-grade level. Architectural terminology is in the body of each video, not in the headline. Each subtopic leads with the public-sector outcome the listener can carry out of the video: make the case upward, survive a vendor pitch, satisfy a donor, brief the minister coherently. The eight videos are numbered to ITU's topic/subtopic convention (subtopics 1.1 through 1.8). Each is reworked to stand alone — meta-introductions, playlist-stitching outros and backward references to other videos have been removed. All slide specifications follow ITU's text-only branding (Arial Bold 28pt title, Arial 18pt body, background #E5F5FB, no images, no individuals on screen). Each subtopic carries an AI usage tip with a copy-paste Claude prompt template, per the Guide §2.ii and ToR §4.3. External references use the ITU convention 'Find the link in the description'."),
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
  P("Eight standalone subtopic videos. One Strategist persona throughout. Total runtime approximately thirty-four minutes. Each video has a single message and a single learning outcome. The videos are designed to be discoverable individually via YouTube search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["1.1", "Why your country needs a national EA",
      "Without a shared plan for your government's digital systems, every new programme rebuilds what others have already built. The country pays. The citizen pays. Your minister cannot deliver what they promised.", "~4 min"],
    ["1.2", "What an EA actually is",
      "An EA is the picture everyone agrees describes your government — minister, ministry CIO, donor, vendor. With it, you can lead the conversation. Without it, others lead it for you.", "~4 min"],
    ["1.3", "Why projects can't do this themselves",
      "Procurement rules can require interoperability. They cannot deliver it. Only planning at the level of the whole government, supported by reference architectures, can.", "~5 min"],
    ["1.4", "Why an EA matters more now — and what it lets your minister actually do",
      "For thirty years, digital work meant putting paper online. That era is ending. The work now is to redesign how your ministry serves citizens — and that work needs business and IT in the same room, using the same words.", "~5 min"],
    ["1.5", "Why PAERA-anchored — the head start you do not pay for twice",
      "PAERA gives your team five years of head start. Adopt it, and the architecture work begins on day one. Do not adopt it, and your first year is spent inventing what others have already published.", "~4 min"],
    ["1.6", "The lifecycle on one page",
      "Six months from start to a roadmap your minister can take to cabinet. Then ongoing governance. Five phases. Four sign-offs. One continuous practice.", "~5 min"],
    ["1.7", "What you will need from your minister — and how to ask for it",
      "Four asks. A small permanent EA team. An EA Board with real authority. About two per cent of digital budget, sustained for five years. And one promise — that the team will not be pulled onto the urgent project of the week.", "~5 min"],
    ["1.8", "Four signposts — three African, one international",
      "Rwanda, Kenya and South Africa show the pattern at African scale and in different governance shapes. Estonia is the international polestar. The pattern travels. Your country can apply it too.", "~4 min"]
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
  title: "Why your country needs a national EA",
  runtime: "~4 min",
  words: 540,
  paeraAnchor: "§2.1 Problem statement",
  singleMessage: "Without a shared plan for your government's digital systems, every new programme rebuilds what others have already built. The country pays. The citizen pays. Your minister cannot deliver what they promised.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why your country needs a national EA'. Voice-over begins." },
    { text: "In your ministry, you have probably seen this pattern. One programme builds a system to register citizens. Another programme builds another system to register the same citizens — for a different service. A third programme builds a third. Each takes years. Each is funded separately. Often each is funded by a different donor — the World Bank, the African Development Bank, a bilateral partner. None of them work together. And your citizen still fills the same form, five times, in five different counters." },
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
  title: "What an EA actually is, in one breath",
  runtime: "~3 min",
  words: 400,
  paeraAnchor: "§2.3 Role of Enterprise Architecture",
  singleMessage: "An EA is the picture everyone agrees describes your government — minister, ministry CIO, donor, vendor. With it, you can lead the conversation. Without it, others lead it for you.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What an Enterprise Architecture is'. Voice-over begins." },
    { text: "An Enterprise Architecture is a set of documents and diagrams. Together, they describe how your government works. What services it delivers, and to whom. What data it holds, and who owns it. What software supports those services. What infrastructure runs underneath." },
    { text: "An EA is not software. It is not a vendor product. It is not a tool you buy. It is the agreed picture." },
    { cue: "Slide 2 — Title: 'What an EA is, and what it is not'. Body: two-column text. Left 'Is': agreed picture of your government; set of documents and diagrams; the same description everyone uses. Right 'Is not': software; a vendor product; a tool you procure." },
    { text: "Why does it matter that everyone has the same picture? Because every important conversation in your ministry breaks down on this point." },
    { cue: "Slide 3 — Title: 'Who uses the picture'. Body: four labelled rows. 'Your minister — to brief cabinet'. 'The donor — before funding the next programme'. 'The vendor — to match what they propose'. 'You — to keep all three aligned'." },
    { text: "Your minister uses the picture to brief cabinet. They cannot describe what the country's digital spend is buying if there is no agreed picture of what your government's systems are. The donor uses the picture before they fund the next programme. They want to see how their investment fits with the others. The vendor uses the picture when they propose a system. They must match what is already there. And you, the middle manager, use the picture to keep all three aligned — so the donor funds what the country needs, the vendor builds what fits, and the minister tells a coherent story." },
    { cue: "Slide 4 — Title: 'Four parts of the picture'. Body: stacked text rows, top to bottom. 'Services — what your government does, and for whom'. 'Data — the information your government holds, and who owns it'. 'Applications — the software that uses the data'. 'Technology — the infrastructure underneath'." },
    { text: "Every EA looks at your government in four parts. Services — what your government does, and for whom. This is the layer your minister talks about most, because it is the layer the public sees. Data — the information your government holds, who owns it, where the authoritative copy lives. Data is the longest-lived part of any government. Applications come and go. Technology cycles every decade. Data outlasts them all. Applications — the software that uses that data to deliver those services. This is what gets bought, built, integrated, replaced. Technology — the infrastructure underneath. Networks, hosting, identity, security. The basics that must be running for anything else to work." },
    { cue: "Slide 5 — Title: 'When you write it down'. Body, single text block: 'Your digital landscape stops being a list of projects. It starts looking like a system. You can change it deliberately. You can plan investments rationally. You can hold cross-ministry conversations without re-explaining the basics every time.'" },
    { text: "When you write down all four parts, your government's digital landscape stops being a list of unrelated projects. It starts looking like a system. A system you can change deliberately. A system you can plan investments against. A system you can talk about across ministries, with donors and with vendors, without re-explaining the basics every time." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'An EA is the agreed picture of your government — and the tool that lets you lead the conversation about what comes next.'" },
    { text: "That is what an Enterprise Architecture is. Not software. Not a tool. The agreed picture of your government — and the tool that lets you, instead of the vendor or the donor, lead the conversation about what comes next." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §2.3 Role of Enterprise Architecture. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'What an Enterprise Architecture actually is'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP1 / 1.2) Arial 18pt. No images."],
    ["2", "Two-column text comparison: 'Is' column / 'Isn't' column, three bullet points each.",
      "Strategist's first line of defence against vendor pitches."],
    ["3", "Three-element text diagram. Left text 'Governance', right text 'IT', central text 'EA artefact — the shared picture'. Two arrows pointing inward.",
      "Text labels only. No human figures. Arrows are text-box connectors."],
    ["4", "Stacked four-row text list (Business / Data / Application / Technology), one row at a time, cumulative.",
      "Order is deliberate — BDAT as defined in Inception Report glossary; data-before-application reflects modern data-first architecture."],
    ["5", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "The take-home line. Designed to be quotable in a Strategist's briefing."],
    ["6", "Sources slide. Bulleted text: PAERA v1.0 §2.3; TOGAF BDAT layering. Footer: 'Find the link in the description.'",
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
  title: "Why projects can't do this themselves — EA as planning, RAs as scar tissue",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Architectural Principles",
  singleMessage: "Procurement rules can require interoperability. They cannot deliver it. Only planning at the level of the whole government, supported by reference architectures, can.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why projects cannot fix this themselves'. Voice-over begins." },
    { text: "You may be thinking: my country already requires this. Every new digital project must specify open APIs. Every new contract must require interoperability. The national digital strategy is signed by cabinet. So why does the citizen still fill the same form five times? Why do new programmes still build their own version of identity and payments? The answer is uncomfortable. Procurement rules can require behaviour. They cannot make that behaviour the cheapest choice for the project doing the work." },
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
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Architectural Principles. Footer: 'Find the link in the description.'" }
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
    ["PAERA citations",         "§1.3 GovStack Vision; §3.3 Digital Infrastructure principles; §5.2 Architectural Principles"],
    ["External-link list",      "PAERA v1.0 §1.3 (GovStack Vision); PAERA v1.0 §3.3 (Digital Infrastructure principles); PAERA v1.0 §5.2 (Architectural Principles)"]
  ]
}));

// ---------- 1.4 (NEW — EA as lingua franca) ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 1.4",
  title: "Why an EA matters more now — and what it lets your minister actually do",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "§2.3 Role of Enterprise Architecture; §4.5 Organisational Communication",
  singleMessage: "For thirty years, digital work meant putting paper online. That era is ending. The work now is to redesign how your ministry serves citizens — and that work needs business and IT in the same room, using the same words.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Why an EA matters more now'. Voice-over begins." },
    { text: "For a long time, digital transformation in government meant one thing. Take a paper process and put it online. The application form becomes a web form. The queue becomes an online appointment. The certificate becomes a PDF. The ministry still does the same work, in the same order, with the same roles. Only the medium changes." },
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
    { text: "When you make the case to your minister, this is the second half of the case. Planning is one half. Shared language is the other. In the era of digitising paper, an EA was useful. In the era of redesigning how the ministry works, an EA is necessary — because without it, the business side and the IT side cannot have the conversation the redesign requires." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §2.3 Role of Enterprise Architecture; §4.5 Organisational Communication. Footer: 'Find the link in the description.'" }
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
    ["PAERA citations",         "§2.3 Role of Enterprise Architecture; §4.5 Organisational Communication"],
    ["External-link list",      "PAERA v1.0 §2.3 (Role of Enterprise Architecture); PAERA v1.0 §4.5 (Organisational Communication)"]
  ]
}));

// ---------- 1.5 (was 1.4, originally 1.3 — Why PAERA-anchored specifically) ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 1.5",
  title: "Why PAERA-anchored — the head start you do not pay for twice",
  runtime: "~4 min",
  words: 510,
  paeraAnchor: "§1.2 Motivation; §1.3 GovStack Vision; §2.3 Role of EA",
  singleMessage: "PAERA gives your team five years of head start. Adopt it, and the architecture work begins on day one. Do not adopt it, and your first year is spent inventing what others have already published.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'PAERA — the head start you do not pay for twice'. Voice-over begins." },
    { text: "An Enterprise Architecture is the agreed picture of your government. The next question is: which framework do you use to draw that picture? You have two paths." },
    { cue: "Slide 2 — Title: 'Two paths to a national EA'. Body: two stacked text-box rows. Top row (long): 'Hire consultants to design a framework for your country — 12 to 18 months before the architecture work begins'. Bottom row (short): 'Anchor on PAERA — the architecture work begins on day one'." },
    { text: "The first path: hire consultants to design an EA framework specifically for your country. A new way of organising ministries. A new set of terms for architects to use. A new set of principles. A new method. This takes twelve to eighteen months, before any architect has drawn a single picture of any ministry. You have paid for groundwork, not for architecture." },
    { text: "The second path: anchor on a framework that already exists. One built for the public-sector use case. One that ships with all of the groundwork done. Your team starts the actual work on day one. PAERA is that framework — the Public Administration Ecosystem Reference Architecture, published in 2024 under GovStack." },
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
    { text: "When you make the case for PAERA to your minister, this is the case. It is not a vendor choice. It is the choice to start with the work other countries have already done — so your team can spend their time on what is specific to your country. That is the head start. That is what your minister is being asked to commit to." },
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
  title: "The lifecycle on one page",
  runtime: "~5 min",
  words: 650,
  paeraAnchor: "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "Six months from start to a roadmap your minister can take to cabinet. Then ongoing governance. Five phases. Four sign-offs. One continuous practice.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The EA lifecycle on one page'. Voice-over begins." },
    { text: "If you take one picture away from this knowledge product, take this one. The EA lifecycle on a single page. The picture that goes on the wall of the EA Board room. The picture your minister puts in every cabinet briefing. The picture your team points at when they explain where the work is." },
    { cue: "Slide 2 — Title: 'Five phases, four sign-offs'. Body: horizontal text-box flow of five labelled phase boxes — 'Discover', 'Assess', 'Adapt', 'Plan', 'Execute & Govern'. Four sign-off markers between the first four phases. A continuous-arrow on the right of the fifth box." },
    { text: "Five phases. Each one answers a single question. Each produces a single deliverable. Each ends with a sign-off by the senior decision-maker. The first four phases together take about six months. The fifth phase is ongoing — your country's permanent way of working." },
    { cue: "Slide 3 — Title: 'Phase 1 — Discover'. Body, four short text rows: 'Question: What exists today?' 'Deliverable: Discovery brief — the current picture, no recommendations yet'. 'Sign-off: The picture is accurate'. 'Duration: 3 to 4 weeks'." },
    { text: "Phase one. Discover. The question: what exists today? Your architects map the current digital landscape — the strategies in force, the systems that exist, the sector plans, the stakeholders, the legal framework. The deliverable is a Discovery brief: the picture of where your country is, with no recommendations yet. The sign-off: the senior decision-maker confirms the picture is accurate enough to build on. Three to four weeks." },
    { cue: "Slide 4 — Title: 'Phase 2 — Assess'. Body, four short text rows: 'Question: What is the gap?' 'Deliverable: Assessment report with current-state picture and maturity scorecards'. 'Sign-off: The gap analysis reflects ground truth'. 'Duration: 6 to 8 weeks'." },
    { text: "Phase two. Assess. The question: what is the gap? Architects compare what they found in Discovery against PAERA-anchored standards. They write the current-state picture in the four parts of an EA. They produce maturity scorecards. They write the gap analysis. The sign-off: the gap analysis reflects ground truth — it names the right problems in the right priority. Six to eight weeks." },
    { cue: "Slide 5 — Title: 'Phase 3 — Adapt'. Body, four short text rows: 'Question: What fits our country?' 'Deliverable: Localised framework with sourcing decisions'. 'Sign-off: The framework and the build / buy / share approach'. 'Duration: 4 to 6 weeks'." },
    { text: "Phase three. Adapt. The question: what fits our country? PAERA is a starting point, not a constraint. Architects work with sector CIOs and your EA Board to shape the framework to your country — your principles, your sector priorities, your sourcing choices. For each building block, the question is: do we build it, do we buy it from the marketplace, do we share another country's, or do we test in a sandbox first? Four to six weeks." },
    { cue: "Slide 6 — Title: 'Phase 4 — Plan'. Body, four short text rows: 'Question: How do we get there?' 'Deliverable: Roadmap and investment plan'. 'Sign-off: Roadmap approved, budget committed'. 'Duration: 6 to 8 weeks'." },
    { text: "Phase four. Plan. The question: how do we get there? Architects describe the target state and sequence the work into a roadmap with investment estimates. The senior decision-maker and the EA Board approve the roadmap and commit budget. This is the deliverable your minister can take to cabinet. Six to eight weeks." },
    { cue: "Slide 7 — Title: 'Phase 5 — Execute and Govern'. Body, four short text rows: 'Question: How do we sustain this?' 'Deliverable: A living, governed EA — repository plus practice'. 'Cadence: Quarterly Board reviews, forever'. 'Duration: Ongoing'." },
    { text: "Phase five. Execute and Govern. The question: how do we sustain this? The approved roadmap becomes a project pipeline. The small permanent EA team — two to four senior architects — turns the EA from a one-time delivery into a living repository. The EA Board reviews new projects against the architecture, approves cross-ministry decisions, enforces boundaries between domains. Quarterly reviews. Indefinitely. Phase five is your country's permanent way of working." },
    { cue: "Slide 8 — Title: 'The rhythm of sign-offs'. Body, single text block: 'Four sign-offs across the first six months. The senior decision-maker does not review every diagram. They review at four moments. Between sign-offs, the architects work — and the minister's job is to remove political obstacles.'" },
    { text: "Notice the rhythm. Four sign-offs in six months. Your minister does not review every diagram. They review at four moments, each tied to a defined deliverable. Between sign-offs, the architects work. The minister's job in between is to remove obstacles — the political ones, mostly. The technical ones are why the architects were hired." },
    { cue: "Slide 9 — Title: 'The phases depend on each other'. Body, single text block (Arial Bold 22pt centered): 'Discover before you measure. Measure before you adapt. Adapt before you plan. Plan before you execute. Govern always.'" },
    { text: "The phases depend on each other, in order. Discover before you measure. Measure before you adapt. Adapt before you plan. Plan before you execute. Govern always. You can skip a phase, but you will pay for it later — usually several times what skipping appeared to save." },
    { cue: "Slide 10 — Title: 'Six months to a roadmap, then forever'. Body, three timeline labels: 'Week 1 — Discovery begins' / 'Week 26 — Approved roadmap' / 'Ongoing — Governed EA'." },
    { text: "Six months from Discovery to an approved roadmap. Then your country in permanent EA-governed mode. That is what \"months not years\" actually means. It is not a slogan. It is the consequence of sequencing five phases — each with a clear question, a clear deliverable, a clear sign-off — and committing to the practice that runs after." },
    { cue: "Slide 11 — Title: 'Sources'. Body: PAERA v1.0 §3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The PAERA-anchored EA lifecycle, in one page'.",
      "Standard ITU template."],
    ["2", "Five-phase text-box flow with four sign-off markers and a continuous-arrow tail on the fifth.",
      "The centrepiece artefact of the topic. Designed for screenshot use. Text labels only — no icons."],
    ["3–6", "One slide per phase (Discover / Assess / Adapt / Plan). Each: Question, Deliverable, Gate, Duration.",
      "Per-phase text-only slides. Each phase has its own slide; the lifecycle flow from slide 2 remains visible as a small reference strip at top."],
    ["7", "Strategist sign-off rhythm slide. Horizontal stripe with four sign-off markers.",
      "Reinforces 'four gates, one Strategist'. Text-only."],
    ["8", "Phase 5 slide. Question, Deliverable, Cadence, Duration.",
      "Distinguishes from the gated phases — emphasis on ongoing operating mode."],
    ["9", "Dependency rule slide. Single text block stating the five-line dependency rule.",
      "Lands 'you can't skip phases'."],
    ["10", "Time-scale summary slide. Three milestone labels.",
      "Closes the artefact on the months-not-years promise."],
    ["11", "Sources slide. Footer: 'Find the link in the description.'",
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
  title: "What you will need from your minister — and how to ask for it",
  runtime: "~5 min",
  words: 580,
  paeraAnchor: "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "Four asks. A small permanent EA team. An EA Board with real authority. About two per cent of digital budget, sustained for five years. And one promise — that the team will not be pulled onto the urgent project of the week.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What you will need from your minister'. Voice-over begins." },
    { text: "Suppose you have made the case. Your minister is convinced an EA is the right work. Now the harder part: agreeing the four specific things the minister must commit to. Each one is necessary. Without any one of them, the EA programme will struggle to deliver what it could." },
    { cue: "Slide 2 — Title: 'Ask 1 — A small permanent EA team'. Body, three short text rows: '2 to 4 senior architects, permanent, reporting to your CDO or equivalent'. 'Typical composition: a chief architect, domain architects, a methodology lead. Smaller countries can run it with 2 senior people, each carrying multiple domains.' 'Not consultants. Not a temporary unit. The institutional home of the architecture.'" },
    { text: "First ask. A small permanent EA team. Two to four senior architects. Permanent. Reporting to your CDO or its equivalent. Not project consultants who arrive and leave. Not a temporary unit. The institutional home of architecture work in your country. Tell your minister: this team will exist whether or not any single programme is running. That is the point. It is your country's permanent muscle for cross-cutting digital decisions." },
    { cue: "Slide 3 — Title: 'Ask 2 — An EA Board with real authority'. Body, four short text rows: 'Chair: your CDO, or your minister directly'. 'Members: sector CIOs, owners of major registries, optional external advisor'. 'Cadence: quarterly main meetings, ad-hoc for urgent decisions'. 'Mandate: BINDING — not advisory'." },
    { text: "Second ask. An EA Board with real authority. Chaired by your CDO, or by the minister directly. Members: sector ministry CIOs, owners of the major state registers, and where useful an external advisor. Cadence: quarterly meetings, with ad-hoc sessions for urgent decisions. The hardest part: the mandate must be binding, not advisory. The Board reviews new digital projects against the architecture, approves cross-ministry integrations, and enforces boundaries between architectural domains. Without binding authority, the EA becomes documentation that nobody reads. With it, the EA becomes the place every digital decision passes through." },
    { cue: "Slide 4 — Title: 'Ask 3 — A sustained budget envelope'. Body, three short text rows: 'Initial 6-month engagement: 10 to 15 senior person-months'. 'Permanent practice: 2 to 4 full-time architects, ongoing'. 'Governance overhead: Board time, occasional external review.' Bottom: 'Typical share: about 2% of your digital-government budget. Sustained for at least 5 years.'" },
    { text: "Third ask. A sustained budget envelope. Three parts. The initial six-month engagement that runs the first four phases — about ten to fifteen senior person-months. The permanent practice — your two to four architects, ongoing. The governance overhead — Board time and occasional external review. As a share of your digital-government budget, the whole thing is typically about two per cent. What you want is a five-year envelope, not an annual budget line that disappears when ministerial priorities shift. Tell the minister: this is the leverage decision. Every other digital programme in your country runs more efficiently when this two per cent is in place." },
    { cue: "Slide 5 — Title: 'Ask 4 — One promise about protection'. Body, single text block (Arial Bold 22pt): 'The EA team will not be pulled onto the urgent project of the week. Not by you. Not by the minister. Not by anyone in cabinet.' Below in smaller text: 'This is the most commonly broken promise, and the one that quietly kills EA programmes in their second year.'" },
    { text: "Fourth ask. One promise. The EA team will not be pulled onto the urgent project of the week. Not by you. Not by the minister. Not by anyone in cabinet. Get this in writing if you can. The most common way EA programmes quietly die is in their second year, when the team is moved onto a flagship delivery and the architecture work stops. The promise to protect the team must be explicit, must be visible, and must be recommitted whenever the minister changes." },
    { cue: "Slide 6 — Title: 'A note on time horizon'. Body, three text rows: '6 months — to an approved roadmap'. '18 to 24 months — to a fully operating practice'. '5+ years — to mature governance'. Below: 'The minister who launches this work will not be the one who completes it.'" },
    { text: "And one note on time horizon to put to your minister honestly. Six months to an approved roadmap. Eighteen to twenty-four months to a fully operating practice. Five years to mature governance. The minister who launches this work will not be the one who completes it. That is uncomfortable, but it is the truth — and a minister who hears it as a problem is sponsoring a deliverable, not an EA. A minister who hears it as a feature is the right minister to commission this work." },
    { cue: "Slide 7 — Title: 'Four asks, in one sentence'. Body, large text (Arial Bold 28pt): 'A team. A Board. A budget envelope. A promise. Put them on a single page. Bring them to the meeting. Ask for all four together.'" },
    { text: "Four asks. A team. A Board. A budget envelope. A promise. Put them on a single page. Bring them to the meeting. Ask for all four together — not in pieces. With all four committed, you have what you need. Without any one of them, the work will struggle." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
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
    ["7", "Single-sentence summary slide.",
      "Designed as a screenshot-ready slide for a Strategist's own briefings."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the PAERA citations."]
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
    ["External-link list",      "PAERA v1.0 §4.2.1; PAERA v1.0 §4.2.2; PAERA v1.0 §5.4"]
  ]
}));

// ---------- 1.8 (was 1.7 — Signposts) ----------
body.push(...renderSubtopic({
  num: "3.8 Subtopic 1.8",
  title: "Four signposts — three African, one international",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "§5.7 Recommended Roadmap (intermediate-results pattern)",
  singleMessage: "Rwanda, Kenya and South Africa show the pattern at African scale and in different governance shapes. Estonia is the international polestar. The pattern travels. Your country can apply it too.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Four signposts'. Voice-over begins." },
    { text: "Four countries did the work. Three of them are in Africa. They differ in size, in resources, in governance type — and the EA pattern shows in all three. The fourth is Estonia, the most-cited international example, useful as a reference but with a very different starting context. Looking at the four together shows what the pattern looks like in practice." },
    { cue: "Slide 2 — Title: 'Rwanda — small country, strong central authority'. Body, four short text rows: 'Ministry of ICT and Innovation; Irembo as the citizen-services platform'. 'A single national ID linked across services'. 'A small institutional muscle, coordinated centrally'. 'Lesson: with political will, the lifecycle can be compressed; ambition compounds across sectors'." },
    { text: "Rwanda. The Ministry of ICT and Innovation, with Irembo as the unifying citizen-services platform. Starting from a small base in the mid-2010s, Rwanda built one of the most ambitious digital-government programmes on the continent. A single citizen-service platform. A national ID linked across services. Strong central coordination. The institutional muscle is small but disciplined. The lesson for other countries: in a smaller country with political will, the lifecycle can be compressed, and the gains in the second and third sectors come faster than the first." },
    { cue: "Slide 3 — Title: 'Kenya — Huduma Centres and Huduma Namba'. Body, four short text rows: 'Huduma Centres: physical one-stop shops for government services'. 'Huduma Namba: unifying identity programme'. 'Mixed results, openly debated in public'. 'Lesson: the obstacles are concrete — legal, political, technical — and they are documented. Plan for them.'" },
    { text: "Kenya. The Huduma Centres and the Huduma Namba experience. Kenya took a different path — physical one-stop centres where citizens could access many government services in one place, with the Huduma Namba programme attempting to provide a unifying digital identity to underpin them. The results are mixed and openly debated in Kenya's public arena. The lesson is not \"Kenya solved this\" — it is that Kenya tried, encountered concrete obstacles in courts, in parliament, and in implementation, and the debate is documented and useful. For countries thinking about similar moves, Kenya's experience tells you what to plan for." },
    { cue: "Slide 4 — Title: 'South Africa — SITA and the federated model'. Body, four short text rows: 'State Information Technology Agency (SITA) — central coordinating body'. 'Strong provincial governments and autonomous statutory bodies'. 'Shared standards, common procurement, maintained framework'. 'Lesson: where you cannot impose architecture from the top, you build federation — coordination without coercion'." },
    { text: "South Africa. State Information Technology Agency, known as SITA, and the federated digital-government model. South Africa is a federal democracy with strong provincial governments and constitutionally autonomous statutory bodies. You cannot impose a single architecture from the top. SITA acts as a coordinating body — shared standards, common procurement frameworks, a maintained reference architecture that agencies adopt rather than have imposed. The lesson: in any country where sub-national governments or autonomous statutory bodies carry real authority, the federated model — coordination without coercion — is the realistic pattern. Many African countries with strong provincial or county governments will recognise this shape." },
    { cue: "Slide 5 — Title: 'Estonia — the international polestar'. Body, four short text rows: 'Information System Authority (RIA); X-Road as the data-exchange backbone'. 'Distributed registries — population, business, land — owned by their accountable agencies'. 'Anchoring principle: Once-Only'. 'Started late 1990s; most public services online today. A different scale, but the pattern is the same.'" },
    { text: "Estonia. The Information System Authority, known as RIA. The most-cited international example of mature digital government. Starting in the late 1990s, Estonia built X-Road as the data-exchange backbone, distributed state registries owned by their accountable agencies, and the Once-Only principle — that the state never asks a citizen for the same information twice. Today, almost every public service in Estonia runs online. Estonia is a small unitary state with very different starting conditions from most African countries. Use it as a polestar — what fully mature digital government can look like — not as a template to copy directly. The pattern is the same. The path is your country's." },
    { cue: "Slide 6 — Title: 'Four contexts, one pattern'. Body, 4-column text table. Columns: Rwanda / Kenya / South Africa / Estonia. Four rows of common architectural elements, each row a checkmark across all four columns: 'Small central team with real authority' / 'Published framework other agencies adopt' / 'Binding governance' / 'Multi-year horizon with results visible in months'." },
    { text: "Four very different countries. The same architectural elements show in all four. A small central team with real authority. A published framework that other agencies adopt rather than fight. A governance mechanism that is binding, not advisory. A time horizon measured in years for full maturity, with intermediate results visible inside months. These are not outliers. They are what committing to the lifecycle and the team and the governance and the time horizon looks like in practice." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'The pattern travels — across small countries and large, unitary states and federations. Your country can apply it too.'" },
    { text: "The pattern travels. Across small countries and large. Across unitary states and federations. Across countries with strong central authority and countries where authority is distributed. Your country can apply it too — once your minister commits to the four asks from the previous video. The rest of this knowledge product shows you how to do the work, using a fictional country called Progressa so every step is visible in detail." },
    { cue: "Slide 8 — Title: 'Sources'. Body, bulleted text: 'Rwanda — Irembo (irembo.gov.rw); Ministry of ICT and Innovation'. 'Kenya — Huduma Kenya (huduma.go.ke); Huduma Namba'. 'South Africa — SITA (sita.co.za)'. 'Estonia — e-Estonia.com; RIA (ria.ee)'. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Four signposts — three African, one international'.",
      "Standard ITU template."],
    ["2", "Rwanda slide. Country name in typography (no national emblem). Four body bullets: institution, single platform, central muscle, lesson.",
      "Plain typography, no government-agency logos."],
    ["3", "Kenya slide. Same structure: country name, four body bullets covering Huduma Centres, Huduma Namba, mixed results, lesson.",
      "Honest about contested experience — Kenya's debate is a feature, not a defect, of the example."],
    ["4", "South Africa slide. Country name, four body bullets covering SITA, federal context, shared standards, federation lesson.",
      "Most directly relevant to countries with strong sub-national governments."],
    ["5", "Estonia slide. Country name, four body bullets covering RIA, X-Road, distributed registries, Once-Only, time-to-mature.",
      "Polestar framing — fully mature reference, different starting context."],
    ["6", "Pattern-across-four text table. Four columns (Rwanda / Kenya / South Africa / Estonia), four rows of common architectural elements, all checkmarked.",
      "The synthesising visual — what makes the four signposts one pattern. Text-only table."],
    ["7", "Single-sentence summary slide.",
      "The take-home line for the middle manager's briefing back upward."],
    ["8", "Sources slide. Bulleted text links across the four countries. Footer: 'Find the link in the description.'",
      "Lets viewers verify the four signposts."]
  ],
  aiTip: {
    title: "Generate comparator-country signposts that fit your context",
    problem: "Rwanda, Kenya, South Africa and Estonia are useful starting signposts but may not be the most directly comparable to a given country. The middle manager building a case upward may want a comparator list tuned to their own country's specific situation — for a cabinet briefing or a donor pitch.",
    prompt: "My country is [country X], with these characteristics: [population, income classification, governance type (unitary / federal / hybrid), region, key political constraints, current digital-government maturity]. Drawing on publicly documented EA programmes — give priority to African and other developing-country examples — list 3 to 5 countries with similar characteristics that have a published national EA framework or comparable digital-government coordination function. For each: country name, similarity rationale (one sentence on why it is comparable to [country X]), what they actually built (2 to 3 bullets), one transferable lesson for [country X]. Cite a public source URL for each substantive claim — government strategy documents, published frameworks, peer-reviewed case studies, or credible journalism. Avoid examples where the public information is marketing rather than substance. Output: per-country card plus a 2-bullet 'most transferable lessons' summary.",
    io: "Input: country characteristics. Output: 3 to 5 comparator cards plus a transferable-lessons summary.",
    safeguard: "A country example is useful only if the public source supports the claim — discard any example where the cited URL does not explicitly document what the prompt says it documents. Be especially careful with Kenya's Huduma Namba — there is contested public information; cite the contested sources too."
  },
  metadataRows: [
    ["Working title",          "Four signposts — three African, one international"],
    ["YouTube-optimised title", "Three African digital-government programmes (plus Estonia) — and what they teach"],
    ["Description (60 words)", "Rwanda's Irembo. Kenya's Huduma Centres. South Africa's SITA. Plus Estonia as the international polestar. Three African countries and one global reference, in different shapes and sizes, all showing the same EA pattern: small central team, published framework, binding governance, multi-year horizon. Five minutes for digital-government middle managers. AI comparator-country prompt in the description."],
    ["Tags",                    "Rwanda digital government, Irembo, Kenya Huduma, South Africa SITA, Estonia digital government, X-Road, EA case studies, PAERA, African digital government"],
    ["Playlist (YouTube)",      "KP1 — Topic 1: Why a PAERA-anchored EA"],
    ["ToR §4 coverage",         "§4.6 (real-life examples) — primary; §4.3 (AI integration — comparator-country prompt); §4.7 (closing storyboard beat)"],
    ["PAERA citations",         "§5.7 Recommended Roadmap (intermediate-results pattern); §3.4.3 Interoperability (Estonia X-Road exemplar)"],
    ["External-link list",      "Rwanda — Irembo (irembo.gov.rw); Kenya — Huduma Kenya (huduma.go.ke); South Africa — SITA (sita.co.za); Estonia — e-Estonia.com and RIA (ria.ee)"]
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
  P("Several quantitative claims are defensible at the chosen level of generality but should be web-verified before final lock: 'within about five years' for Estonia's operational EA framework (1.8); 'hundreds of services' for Singapore's MyInfo coverage (1.8); Australian Government Architecture timeline (1.8); '12 to 18 months' bespoke framework design (1.5); '10 to 15 senior person-months' for an initial sector-scale EA engagement (1.8); 'under 2% of digital-government budget' as the typical share (1.8)."),

  H3("5.2 Editorial tone calls"),
  P("Five tone choices are sharp and deserve a deliberate keep / soften / cut decision: 'Once-Only on paper, impossible in practice' in 1.1 symptom 4; 'data outlasts them all' in 1.2; 'the Strategist who launches this work will not be the one who completes it' in 1.7; 'quietly kills EA programmes in the second year' in 1.7; 'pay for it several times what skipping appeared to save' in 1.6."),

  H3("5.3 Structural calls"),
  P("Two outstanding structural items: (1) the three signpost countries in 1.8 are all high-income contexts; for ITU/Giga's primary developing-country audience, options are to keep, swap one for a developing-country example, or add a fourth deep-dive. (2) The reconciliation between the five-phase teaching abstraction in 1.6 and the six-phase delivery spine in the Inception Report §3. Recommendation: address in the GitBook companion as a sidebar ('Five phases for Strategists, six phases for delivery teams'), not in the video."),

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
    ["1.3", "PAERA v1.0 §1.3 (GovStack Vision); PAERA v1.0 §3.3 (Digital Infrastructure principles); PAERA v1.0 §5.2 (Architectural Principles)."],
    ["1.4", "PAERA v1.0 §2.3 (Role of Enterprise Architecture); PAERA v1.0 §4.5 (Organisational Communication)."],
    ["1.5", "PAERA v1.0 site (paera.govstack.global); GovStack site (govstack.global); GovMarket; PAERA v1.0 §1.2 Motivation; §1.3 GovStack Vision."],
    ["1.6", "PAERA v1.0 §3.1.3 Readiness Assessment; PAERA v1.0 §5.4 Organisational Assessment & Roadmap."],
    ["1.7", "PAERA v1.0 §4.2.1 Management; PAERA v1.0 §4.2.2 Architecture; PAERA v1.0 §5.4 Organisational Assessment & Roadmap."],
    ["1.8", "e-Estonia.com (Estonia signpost — RIA, X-Road, distributed registries); tech.gov.sg (Singapore signpost — GovTech, SingPass, MyInfo); Australian Government Architecture site, Department of Finance (Australia signpost)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP1 Module 1 — Video Script Bundle v0.2 (ITU-aligned)",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP1 Topic 1 Script Bundle v0.2 · 12 May 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP1_Module1_Script_Bundle_v0.2.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
