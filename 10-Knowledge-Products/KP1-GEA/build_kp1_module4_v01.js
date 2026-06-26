// Build KP1 Module 4 — Video Script Bundle v0.1
// Third Architect-facing module of KP1 — the Progressa end-to-end demonstration (the
// full five-phase lifecycle, applied). Copied from build_kp1_module3_v01.js, same
// Persona A (Architect). Same ITU compliance discipline:
//   - subtopic numbering (4.1–4.7) per ITU convention
//   - each video stands alone (no intros/outros, no cross-video references)
//   - text-only slides, Arial 28pt/18pt, #E5F5FB
//   - no individuals on screen (AI avatar or screen-only voice-over)
//   - one four-part AI usage prompt per subtopic
//   - "Find the link in the description" convention for external references
// Module 4 runs the five-phase lifecycle (Discover, Assess, Adapt, Plan, Execute &
// Govern) end-to-end on the Progressa education sector, then shows how to transfer it.
// Boundary: M2 read the BDAT layers on Progressa; M4 runs the lifecycle (no re-modelling).

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
    children: [new TextRun({ text: "Topic 4 — Progressa demonstration: applying the method end-to-end",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 4 of KP1"],
    ["Version",             "v0.1 — third Architect-facing module, aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "26 June 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_A],
    ["Subtopics",           "Seven subtopics (4.1 – 4.7), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 34 minutes across seven standalone videos"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call (Carolina Anselmino); FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Topic 4 — the applied demonstration topic in KP1, where the whole method is run end-to-end on a single worked example. Topics 1 through 3 taught the pieces — why an EA matters, the principles and the four layers, the repository and the governance. Topic 4 puts them in motion: it runs the five-phase lifecycle (Discover, Assess, Adapt, Plan, Execute and Govern) on Progressa, a demonstration education sector, so the architect watches each phase produce its deliverable and pass its sign-off on a realistic canvas, then takes the same method to their own sector. The audience lock is unchanged: African public-sector middle management, plain English at an eighth-grade level, each subtopic leading with the capability the architect gains rather than with a technical term. Education is the deliverable sector throughout; the closing subtopic notes that the method transfers to other sectors per ToR §4.4, without using them as worked examples. The seven videos are numbered to ITU's topic/subtopic convention (subtopics 4.1 through 4.7). Each stands alone — no meta-introductions, no playlist-stitching outros, no backward references. All slide specifications follow ITU's text-only branding (Arial Bold 28pt title, Arial 18pt body, background #E5F5FB, no images, no individuals on screen — the fictional Progressa institutions appear as plain-text labels only). Each subtopic carries an AI usage tip with a copy-paste Claude prompt that produces a working artefact. External references use the ITU convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the seven video scripts that together make up Topic 4 of Knowledge Product 1 (Government Enterprise Architecture), along with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 4 is the applied demonstration — the one that runs the whole method end-to-end on a single worked example so the steps become concrete. It takes an architect from \"I know the pieces of the method\" to \"I can run the full five-phase lifecycle on a sector and reproduce it on my own.\" Using Progressa, a demonstration education sector, it walks Discover, Assess, Adapt, Plan and Execute & Govern in turn — each phase producing its deliverable and passing its sign-off — and closes by stripping the method to the transferable recipe. It deliberately runs the lifecycle rather than re-teaching the modelling: where Topic 2 read the four BDAT layers on Progressa, Topic 4 takes Progressa through the phases."),

  H3("1.2 Alignment with ITU's Knowledge Products and Video Materials Guide"),
  P("The same compliance items that shaped Topics 1 through 3 apply here. (1) Topic-and-subtopic numbering per Guide §1.i — subtopics 4.1 through 4.7. (2) Each video stands alone — no in-video introduction, conclusion, or reference to another video, per Guide §3.i. (3) Slides are text-only in Arial Bold 28pt title / Arial 18pt body / background #E5F5FB per Guide §3.i Slides Branding. (4) No individuals on screen — AI avatar or computer-screen-only voice-over per Guide §3 Note. (5) An AI usage tip is embedded in every subtopic per Guide §2.ii and ToR §4.3, each producing a working artefact — a demonstration canvas, a Discovery brief outline, a ranked gap analysis, a sourcing matrix, a wave roadmap, a gate-decision paper, a sector-transfer plan. Scope note: Education is the deliverable sector throughout; subtopic 4.7 carries the ToR §4.4 sector-portability statement (the method transfers to health, agriculture and social protection) as a portability note, not as cross-sector worked examples."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 4 at a glance — the seven subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all seven videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without further reference to a storyboard."),

  pageBreak()
);

// ---------- TOPIC 2 AT A GLANCE ----------
body.push(
  H1("2. Topic 4 at a glance"),
  P("Seven standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-four minutes. Each video has a single message and a single learning outcome, and leads with the capability the architect gains rather than with a technical term. The videos are designed to be discoverable individually via YouTube search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2900, 4500, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["4.1", "Meet Progressa — a real sector with a real fragmentation problem",
      "Progressa is a demonstration education sector with the fragmentation problem most countries share — the same learner registered several times, identity proven on paper. It is the canvas the whole method runs on.", "~5 min"],
    ["4.2", "Phase 1, Discover — map what the sector has today",
      "Discover produces one honest picture of what the sector has today — described, not judged — signed off as accurate before any analysis begins.", "~5 min"],
    ["4.3", "Phase 2, Assess — find the gaps and rank them",
      "Assess turns Progressa's picture into a ranked gap analysis — the right problems in the right order, signed off as ground truth, including the uncomfortable ones.", "~5 min"],
    ["4.4", "Phase 3, Adapt — fit PAERA and decide build, buy or share",
      "Adapt fits PAERA to Progressa — localised principles and a deliberate build, buy, share or sandbox call for every building block — with reuse as the default that build must justify against.", "~5 min"],
    ["4.5", "Phase 4, Plan — sequence the roadmap and cost it",
      "Plan turns the decisions into a wave-sequenced, costed roadmap — the cabinet-ready document business and IT both read — with the minister's flagship landing inside the first year.", "~5 min"],
    ["4.6", "Phase 5, Execute & Govern — stand up the living EA",
      "Execute & Govern makes the architecture live — a repository kept true, a Board that enforces re-use at the gate (catching a project's fourth learner list before it is built), and the rhythm where business and IT keep deciding together.", "~5 min"],
    ["4.7", "Run this on your own sector — the transferable recipe",
      "Five phases, four sign-offs, five deliverables — change the institutions and the data domains, and the method you watched on Progressa runs on any sector you are handed.", "~4 min"]
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
  title: "Meet Progressa — a real sector with a real fragmentation problem",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "§2.1 Problem statement; §2.3 Role of Enterprise Architecture",
  singleMessage: "Progressa is a demonstration education sector with the fragmentation problem most countries share — the same learner registered in several places, identity proven on paper. Meet its institutions and its problem, because the rest of this topic runs the full method on exactly this canvas.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Meet Progressa — a real sector with a real fragmentation problem'. Voice-over begins. (Progressa is a fictional demonstration country; all institutions are fictional.)" },
    { text: "To see the method work, you need a realistic place to run it. Progressa is a demonstration country with an education sector like many across the continent — real institutions, a real fragmentation problem, and a minister who wants results. Everything in this topic runs the five-phase lifecycle on Progressa, so you can watch each phase produce its deliverable, then run the same steps on your own sector." },
    { cue: "Slide 2 — Title: 'Progressa's education institutions'. Body, five rows: 'Ministry of Education (MoEYS) — sets policy, funds schools.' 'Examination Authority (PNEA) — runs exams, certifies results.' 'Learner Registry (PLR) — meant to be the one list of learners.' 'Identity Authority (PNIA) — owns the person identity.' 'Digital Government Authority (PDGA) — shared data exchange and payments.'" },
    { text: "Progressa's education sector has five bodies that matter. The Ministry of Education, Youth and Sport sets policy and funds schools. The National Examination Authority runs examinations and certifies results. The Learner Registry is meant to be the one list of who is a learner. The National Identity Authority owns the person identity every sector reuses. And the Digital Government Authority runs the shared data-exchange backbone and payments. Five bodies — a policy unit, a service authority, two registries, and a shared-platform provider." },
    { cue: "Slide 3 — Title: 'The problem the minister feels'. Body, single text block: 'A learner is registered three times — school census, exam authority, social grant programme — and the three lists do not agree. A parent proves the child's identity on paper at every counter. The minister's promise of one learner record cannot be delivered.'" },
    { text: "Here is the problem the minister feels. A learner is registered three times — once in the school census, once by the Examination Authority for exams, once by a social grant programme. None of the three lists agree. A parent proves the child's identity on paper at every counter, because no system trusts another's. The minister has promised a single learner record that follows the child from primary school to university — and it cannot be delivered, because the systems do not fit together. This is not a Progressa problem. It is the problem most education sectors share." },
    { cue: "Slide 4 — Title: 'Why this is the right canvas'. Body, single text block: 'Progressa is fictional on purpose — it shows every step in detail without exposing any real country, and its shapes (duplicate registries, paper re-entry, a stalled flagship) are the ones you will recognise. Keep your own sector in mind as we go.'" },
    { text: "Progressa is fictional, on purpose. It lets us show every step in detail without exposing any real country, and the shapes it has — duplicate registries, paper re-entry, a stalled flagship — are the shapes you will recognise in your own sector. As we run the lifecycle, do one thing: keep your own sector in mind, and at each step ask what the equivalent would be for you. The institutions change. The method does not." },
    { cue: "Slide 5 — Title: 'What the method produces'. Body, five rows: 'A picture of what exists today.' 'A ranked gap analysis.' 'A localised framework with build/buy/share calls.' 'A sequenced, costed roadmap.' 'A living, governed architecture.'" },
    { text: "Running the method on Progressa produces five things, one per phase. A picture of what exists today. An honest assessment of the gaps, ranked. A framework fitted to Progressa, with each building block marked build, buy or share. A sequenced roadmap the minister can take to cabinet. And a living, governed architecture that keeps re-use happening after the consultants leave. Each one is built on a real sector, in detail, where you can see exactly how it is done." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Progressa is a realistic education sector with the fragmentation problem most countries share — the canvas for running the whole method, step by step, so you can reproduce it on your own.'" },
    { text: "So this is Progressa. A realistic education sector, five institutions, and the fragmentation problem most countries live with. It is the canvas. Now the method runs on it, one phase at a time, and you watch the architecture take shape — so you can do the same where you work." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §2.1 Problem statement; §2.3 Role of Enterprise Architecture. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Meet Progressa — a real sector with a real fragmentation problem'. Subtitle notes Progressa is fictional.",
      "Standard ITU template. Subtitle (KP1 / 4.1). No images, no emblems for the fictional institutions."],
    ["2", "Institutions slide. Five text rows, each a Progressa body with its role.",
      "The cast for the whole topic. Plain-text labels only. Readable on mobile."],
    ["3", "The-problem slide. Single text block on the triple-registered learner.",
      "The 'this is not a Progressa problem' line is the recognition beat for the architect."],
    ["4", "Right-canvas slide. Single text block on why a fictional canvas.",
      "Invites the architect to map Progressa to their own sector as they watch."],
    ["5", "What-the-method-produces slide. Five text rows, the five phase deliverables.",
      "A map of the deliverables (not a forward-pointing outro) — sets expectations for the topic."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the framing."]
  ],
  aiTip: {
    title: "Build your own demonstration canvas",
    problem: "An architect about to learn the method on Progressa learns faster with their own sector as a parallel canvas. This prompt produces a one-page canvas mirroring Progressa, to run the method against.",
    prompt: "Build a one-page demonstration canvas for [country X]'s [sector] sector, mirroring the Progressa education example. Produce: (1) the main public bodies and a one-line role for each, classified as policy unit / regulatory agency / service-delivery authority / state registry / shared platform; (2) the fragmentation symptoms likely present — duplicate registries (what is registered more than once), paper re-entry, point-to-point integration, a capability with no clear owner; (3) the 'stalled flagship' — the one cross-cutting outcome a minister has promised that the fragmentation is blocking. Output: a one-page canvas under those three headings, to run the five-phase method against.",
    io: "Input: your sector and its main bodies. Output: a one-page canvas (bodies, symptoms, stalled flagship).",
    safeguard: "A canvas is a simplification, not an assessment. Confirm each body's real mandate and each symptom against actual documents and systems before treating the canvas as fact — its job is to give you a shared starting picture, which Discovery and Assess then make true."
  },
  metadataRows: [
    ["Working title",          "Meet Progressa — a real sector with a real fragmentation problem"],
    ["YouTube-optimised title", "An Enterprise Architecture worked example: an education sector's fragmentation problem"],
    ["Description (60 words)", "To see the EA method work, you need a realistic place to run it. This video introduces Progressa — a demonstration education sector with five institutions and the fragmentation problem most countries share: a learner registered three times, identity proven on paper, a stalled flagship. It is the canvas the rest of the topic runs the full method on. AI canvas-builder prompt in the description."],
    ["Tags",                    "enterprise architecture example, digital government, education sector, fragmentation, PAERA, GovStack, worked example, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, worked demonstration); §4.6 (real-life example via the Progressa canvas); §4.3 (AI integration — canvas-builder prompt)"],
    ["PAERA citations",         "§2.1 Problem statement; §2.3 Role of Enterprise Architecture"],
    ["External-link list",      "PAERA v1.0 §2.1 (Problem statement); PAERA v1.0 §2.3 (Role of Enterprise Architecture)"]
  ]
}));

// ---------- 4.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 4.2",
  title: "Phase 1, Discover — map what the sector has today",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "Discovery produces one deliverable — an honest picture of what the sector has today, with no recommendations yet — signed off as accurate before any analysis begins. Watch it done on Progressa.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Phase 1, Discover — map what the sector has today'. Voice-over begins." },
    { text: "The first phase is Discover. One question: what exists today? Not what is wrong with it — that comes later. Just an accurate picture of where the sector is now. On Progressa, Discovery takes about three to four weeks and produces a single deliverable: the Discovery brief." },
    { cue: "Slide 2 — Title: 'What Discover collects'. Body, five rows: 'Strategies in force.' 'Systems that exist.' 'Registries and who owns them.' 'Stakeholders.' 'The legal framework.'" },
    { text: "Discovery collects five things on Progressa. The strategies in force — the national digital strategy, the education sector plan. The systems that exist — the school census system, the exam-management system, the social grant system. The registries and who owns them — the learner lists, the identity register. The stakeholders — the ministry, the authorities, the donors funding each piece. And the legal framework — the data-protection act, the mandates of each body. You gather, you do not judge." },
    { cue: "Slide 3 — Title: 'The discipline — describe, don't recommend'. Body, single text block: 'Discovery records that the Examination Authority keeps its own learner list — how many, who owns it. It does not yet say \"this should be fixed\". The judgement belongs to Assess. Mixing them biases the assessment before you have the full picture.'" },
    { text: "The hardest discipline in Discovery is to describe without recommending. When your architects find that the Examination Authority keeps its own learner list, the urge is to write 'this should be fixed'. Resist it. Discovery records that the list exists, who owns it, how many learners it holds. The judgement — is this a problem, how severe, what priority — belongs to the next phase. Mixing them biases the assessment before you have the full picture. Discover first. Judge second." },
    { cue: "Slide 4 — Title: 'The Discovery brief on Progressa'. Body, single text block: 'Five institutions classified; the systems each runs; the registries — recording plainly that three separate learner lists exist; the data flows — mostly paper and manual re-entry; the legal constraints. One picture, no recommendations.'" },
    { text: "Progressa's Discovery brief lays it out plainly. Five institutions, classified. The systems each runs. The registries — and here the brief simply records the fact that three separate learner lists exist, in the census, the Examination Authority, and the grant programme. The data flows — mostly paper and manual re-entry between systems. The legal constraints — what each body is mandated to hold. No recommendations. Just the picture, accurate enough to build on." },
    { cue: "Slide 5 — Title: 'The sign-off — is the picture accurate?'. Body, single text block: 'The first of the lifecycle's four sign-offs. The decision-maker confirms the brief is accurate enough to build on — not complete, not perfect, accurate. Cheap to get right; an assessment built on a wrong picture produces wrong priorities.'" },
    { text: "Discovery ends with the first of the lifecycle's four sign-offs. The senior decision-maker — on Progressa, the digitalisation officer chairing the EA Board — confirms one thing: the picture is accurate enough to build on. Not complete, not perfect — accurate. This gate is cheap and fast, and skipping it is expensive: an assessment built on a wrong picture produces wrong priorities. Get the picture signed off as true, and the next phase stands on solid ground." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Discover produces one honest picture of what the sector has today — described, not judged — signed off as accurate before any analysis begins.'" },
    { text: "That is Phase 1 on Progressa. One question — what exists today. One deliverable — the Discovery brief. One discipline — describe, do not recommend. One sign-off — the picture is accurate. Three to four weeks, and the architecture work has a true foundation." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Phase 1, Discover — map what the sector has today'.",
      "Standard ITU template. Subtitle (KP1 / 4.2). No images."],
    ["2", "What-Discover-collects slide. Five text rows.",
      "The five collection areas. Readable on mobile. Text-only."],
    ["3", "Describe-don't-recommend slide. Single text block.",
      "The core discipline; the 'discover first, judge second' beat."],
    ["4", "Discovery-brief-on-Progressa slide. Single text block.",
      "Records three learner lists as a fact, not yet a problem — sets up the Assess."],
    ["5", "Sign-off slide. Single text block on the first gate.",
      "'Accurate, not perfect' is the operative beat. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Draft your Discovery brief outline",
    problem: "An architect starting Discovery on their own sector needs a brief outline that captures the right things and keeps recommendations out — so the picture is usable and the sign-off can challenge it.",
    prompt: "Draft a Discovery brief outline for [country X]'s [sector] sector. Structure it under the five collection areas: (1) strategies in force; (2) systems that exist; (3) registries and their owners; (4) stakeholders; (5) legal framework. For each area, list the specific questions to capture and the format to record the answer. Add a rule at the top: describe what is, do not recommend — recommendations belong to the Assess phase. Add a 'source' column so every entry records where it came from (document, interview, system). End with the sign-off question the decision-maker will be asked: is this picture accurate enough to build on? Output: a Discovery brief outline.",
    io: "Input: your sector. Output: a Discovery brief outline with capture questions, a source column and the sign-off question.",
    safeguard: "The brief is only as true as its sources. Make sure every entry is marked with where it came from, so the sign-off reviewer can challenge anything unsourced — an unsourced 'fact' that turns out wrong sends the whole assessment after the wrong priorities."
  },
  metadataRows: [
    ["Working title",          "Phase 1, Discover — map what the sector has today"],
    ["YouTube-optimised title", "EA lifecycle Phase 1: how to run Discovery on a government sector"],
    ["Description (60 words)", "The first phase of the EA lifecycle asks one question: what exists today? This video runs Discovery on Progressa — collecting strategies, systems, registries, stakeholders and the legal framework, with one discipline: describe, don't recommend. It produces a single Discovery brief, signed off as accurate before any analysis begins. AI Discovery-brief outline prompt in the description."],
    ["Tags",                    "EA discovery, current state, readiness assessment, enterprise architecture lifecycle, PAERA, digital government, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — Discovery-brief prompt); §4.6 (worked on the Progressa sector)"],
    ["PAERA citations",         "§3.1.3 Readiness Assessment; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §3.1.3 (Readiness Assessment); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 4.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 4.3",
  title: "Phase 2, Assess — find the gaps and rank them",
  runtime: "~5 min",
  words: 620,
  paeraAnchor: "§5.1 Capabilities Assessment; §5.4 Organisational Assessment & Roadmap; §3.1.3 Readiness Assessment",
  singleMessage: "Assess turns Progressa's picture into a ranked gap analysis — the right problems, in the right order — signed off as ground truth. It is the assessment method applied to a real sector.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Phase 2, Assess — find the gaps and rank them'. Voice-over begins." },
    { text: "Phase two is Assess. Now you judge. The question: what is the gap between where Progressa is and where it needs to be? The deliverable is the current-state in four layers, maturity scorecards, and a gap analysis that ranks the problems. About six to eight weeks. This is where the picture from Discovery becomes a decision." },
    { cue: "Slide 2 — Title: 'Score the capabilities'. Body, four rows: 'Register a learner — low (three lists, none authoritative).' 'Prove identity — medium (PNIA exists, education doesn't consume it).' 'Certify a result — high (PNEA does this well).' 'Share data across bodies — very low (mostly paper).'" },
    { text: "Start by scoring Progressa's capabilities against PAERA-anchored standards. Register a learner: low maturity — three lists, none authoritative. Prove identity: medium — the Identity Authority exists but education does not consume it. Certify a result: high — the Examination Authority does this well. Share data across bodies: very low — almost everything is paper. A simple maturity score per capability turns a vague sense that things are bad into a picture of exactly where the sector is weak and where it is strong." },
    { cue: "Slide 3 — Title: 'The gaps Progressa shows'. Body, four rows: 'Duplicate registries — three learner lists.' 'Identity not consumed — paper re-entry.' 'No shared data exchange — custom point-to-point links.' 'No clear owner of the authoritative learner.'" },
    { text: "Four gaps surface, the ones almost every first assessment finds. Duplicate registries — three learner lists where there should be one. Identity not consumed — education re-enters identity on paper instead of using the Identity Authority. No shared data exchange — every link is a custom point-to-point connection or a paper form. And no clear owner — everyone uses 'the learner', nobody is accountable for the authoritative copy. Naming these precisely, on Progressa, is most of the Assess." },
    { cue: "Slide 4 — Title: 'Rank by impact where movement is possible'. Body, single text block: 'Score each gap by how much it hurts and how hard it is to close. The duplicate learner registry tops the list — it directly causes the minister's stalled promise, burdens every parent, and is closable by making PLR authoritative. The data-exchange gap is high impact but harder, so it sequences later.'" },
    { text: "A list of gaps is not an assessment. The ranking is. Score each gap by how much it hurts and how hard it is to close. On Progressa, the duplicate learner registry tops the list — it is the direct cause of the minister's stalled single-learner-record promise, it burdens every parent, and it is closable by making the Learner Registry authoritative and having the others consume it. The no-data-exchange gap is high impact but harder, so it sequences later. The ranking, not the list, is what the next phases act on." },
    { cue: "Slide 5 — Title: 'The sign-off — is this ground truth?'. Body, single text block: 'The second sign-off, with an honesty test. One of the three learner lists is owned by a powerful programme that does not want to give it up. An assessment that softens that gap to avoid the fight fails — quietly, a year later, when the single learner record still does not exist.'" },
    { text: "Assess ends with the second sign-off: the gap analysis reflects ground truth. This one has an honesty test. On Progressa, one of the three learner lists is owned by a powerful programme that does not want to give it up. An assessment that softens that gap to avoid the fight fails — quietly, a year later, when the single learner record still does not exist. Your job is to name the right problems in the right order, including the political ones, in language the decision-maker can act on. Get that sign-off honestly, and the roadmap has a solid base." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Assess turns Progressa's picture into a ranked gap analysis — the right problems in the right order, signed off as ground truth — including the uncomfortable ones.'" },
    { text: "That is Phase 2 on Progressa. Score the capabilities. Name the four gaps. Rank by impact where movement is possible. Sign it off as honest ground truth. Six to eight weeks, and Progressa knows not just what is wrong, but what to fix first." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.1 Capabilities Assessment; §5.4 Organisational Assessment & Roadmap; §3.1.3 Readiness Assessment. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Phase 2, Assess — find the gaps and rank them'.",
      "Standard ITU template. Subtitle (KP1 / 4.3). No images."],
    ["2", "Score-the-capabilities slide. Four text rows with maturity ratings.",
      "Turns 'things are bad' into a per-capability picture. Text-only."],
    ["3", "The-gaps slide. Four text rows, the common gaps found on Progressa.",
      "The worked instance of the four-gap scan. Readable on mobile."],
    ["4", "Rank slide. Single text block on impact-where-movement-is-possible.",
      "The ranking, not the list, is the assessment. The learner-registry-tops-the-list beat."],
    ["5", "Sign-off slide. Single text block on the honesty test.",
      "The politically-owned-list case is named, not avoided. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Turn your Discovery brief into a ranked gap analysis",
    problem: "An architect with Discovery findings needs to convert them into a scored, ranked gap analysis the decision-maker can sign off — not just a list of what's wrong.",
    prompt: "Below are my Discovery findings for [country X]'s [sector] sector [paste the brief: bodies, systems, registries, data flows]. Produce a ranked gap analysis. (1) Score the main capabilities for maturity (Low / Medium / High) against a single-source-of-truth, once-only standard. (2) Identify gaps, looking on purpose for the four common ones: duplicate registries, an available shared platform not being consumed, point-to-point integration with no shared data exchange, and capabilities/domains with no clear owner. (3) For each gap give: severity (cost, citizen burden, the stalled flagship), effort to close, and a priority that favours high impact where movement is possible. (4) Flag any gap involving a politically powerful body for honest handling at sign-off. Output: a maturity table, a ranked gap table, and the honesty flags.",
    io: "Input: the Discovery findings. Output: capability maturity scores, a ranked gap table, and the honesty flags.",
    safeguard: "The ranking is only as honest as the inputs. A gap that involves a powerful body must be validated with the decision-maker, not softened by the model — the honesty of the assessment is yours to defend, and softening it is exactly the failure that surfaces a year later."
  },
  metadataRows: [
    ["Working title",          "Phase 2, Assess — find the gaps and rank them"],
    ["YouTube-optimised title", "EA lifecycle Phase 2: how to run an assessment and rank the gaps that matter"],
    ["Description (60 words)", "The second phase turns the picture into a decision. This video runs the Assess phase on Progressa — scoring capability maturity, naming the four gaps almost every sector shows (duplicate registries, identity not consumed, no data exchange, no clear owner), and ranking them by impact where movement is possible, signed off honestly as ground truth. AI gap-analysis prompt in the description."],
    ["Tags",                    "EA assessment, gap analysis, current state, maturity, enterprise architecture lifecycle, PAERA, duplicate registries, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — gap-analysis prompt); §4.6 (worked on the Progressa sector)"],
    ["PAERA citations",         "§5.1 Capabilities Assessment; §5.4 Organisational Assessment & Roadmap; §3.1.3 Readiness Assessment"],
    ["External-link list",      "PAERA v1.0 §5.1 (Capabilities Assessment); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); PAERA v1.0 §3.1.3 (Readiness Assessment)"]
  ]
}));

// ---------- 4.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 4.4",
  title: "Phase 3, Adapt — fit PAERA and decide build, buy or share",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "§5.6 Sourcing Strategy; §5.2 Principles",
  singleMessage: "Adapt fits PAERA to Progressa — localising principles, setting sector priorities, and deciding for each building block whether to build, buy, share or sandbox — signed off as the framework and sourcing approach.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Phase 3, Adapt — fit PAERA and decide build, buy or share'. Voice-over begins." },
    { text: "Phase three is Adapt. PAERA is a starting point, not a constraint. Now the architects shape it to Progressa — the country's own principles, its sector priorities, and the sourcing decision for each building block. About four to six weeks. The deliverable is a localised framework with a clear build, buy, share or sandbox call for each capability." },
    { cue: "Slide 2 — Title: 'Localise the principles'. Body, single text block: 'Adopt PAERA's principles as the baseline; point each at Progressa's laws — once-only against the data-protection act, reuse-before-build against the procurement rules; add one Progressa-specific principle on offline access for rural schools; give each a written implication.'" },
    { text: "First, localise the principles. Progressa adopts PAERA's principles as its baseline and points each at its own laws — once-only against the data-protection act, reuse-before-build against the procurement rules. It adds one principle its context needs, about offline access for rural schools, and gives every principle a written implication so the Board can use it to settle an argument. Progressa does not draft principles from scratch. It inherits the thinking and localises the wording." },
    { cue: "Slide 3 — Title: 'The sourcing call — build, buy, share, sandbox'. Body, five rows: 'Learner Registry → BUILD (the authoritative core).' 'Identity → SHARE (consume PNIA).' 'Exam management → BUY (mature market product).' 'Data exchange → SHARE (PDGA backbone).' 'New analytics → SANDBOX first.'" },
    { text: "Then the heart of Adapt: for each building block, a deliberate sourcing call. Progressa's Learner Registry — build it properly, because it is the authoritative core nobody else can own. Identity — do not build; share the national Identity Authority's platform. Exam management — buy a mature market product, it is a solved problem. Data exchange — share the Digital Government Authority's backbone. A new analytics capability nobody is sure about — sandbox it first, before committing. Four kinds of decision, made on purpose, written down with a reason each." },
    { cue: "Slide 4 — Title: 'Reuse before build — where the country-level saving is chosen'. Body, single text block: 'The default is reuse and share; build is the exception that must justify itself. Every \"share\" — identity, data exchange — is paid for once instead of in every programme. A procurement rule could not make these calls; only an architect looking across the whole sector can.'" },
    { text: "Notice the pattern in those calls. The default is reuse and share; build is the exception that must justify itself. Every share — identity, data exchange — is a capability Progressa pays for once instead of in every programme. This is the phase where the whole-of-government saving is actually chosen. A procurement rule could not make these calls; only an architect looking across the whole sector, deciding deliberately, can. Reuse before buy, buy before build — applied building block by building block — is how Adapt turns the re-use principle into real sourcing decisions." },
    { cue: "Slide 5 — Title: 'The sign-off — framework and sourcing approved'. Body, single text block: 'The third sign-off. The Board approves the localised principle set and the build-buy-share-sandbox matrix. This commits the shape of everything that follows; skip the deliberation and every project re-litigates build-versus-reuse on its own.'" },
    { text: "Adapt ends with the third sign-off: the localised framework and the sourcing approach are approved. On Progressa, the Board signs the principle set and the build-buy-share-sandbox matrix. This is a consequential gate — it commits the shape of everything that follows. Approve it, and the roadmap has a clear set of decisions to sequence. Skip the deliberation, and every project re-litigates build-versus-reuse on its own, which is exactly the fragmentation the EA exists to prevent." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Adapt fits PAERA to Progressa — localised principles and a deliberate build, buy, share or sandbox call for every building block — with reuse as the default that build must justify against.'" },
    { text: "That is Phase 3 on Progressa. Localise the principles. Make a deliberate sourcing call for each building block, with reuse as the default. Sign off the framework and the matrix. Four to six weeks, and Progressa has decided not just what it wants, but how it will get each piece — and where it will pay once instead of many times." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.6 Sourcing Strategy; §5.2 Principles. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Phase 3, Adapt — fit PAERA and decide build, buy or share'.",
      "Standard ITU template. Subtitle (KP1 / 4.4). No images."],
    ["2", "Localise-the-principles slide. Single text block.",
      "Adopt-and-localise, not draft-from-scratch. Text-only."],
    ["3", "Sourcing-call slide. Five text rows, the build/buy/share/sandbox matrix for Progressa.",
      "The heart of Adapt — a worked sourcing matrix. Readable on mobile. No vendor/product names."],
    ["4", "Reuse-before-build slide. Single text block.",
      "Carries the planning-enables-re-use argument — where the country-level saving is chosen."],
    ["5", "Sign-off slide. Single text block on the third gate.",
      "Commits the shape of what gets built. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Build your sourcing matrix",
    problem: "An architect in the Adapt phase needs a deliberate build/buy/share/sandbox call for each building block, defaulting to reuse, with any 'build' that duplicates an existing shared block flagged.",
    prompt: "Below are the building blocks [country X]'s [sector] sector needs [list them — e.g. identity, payments, a sector registry, a case-management system, data exchange] and the shared platforms that already exist nationally [list: national identity, payments, data exchange, any shared registries — or note if unknown]. Produce a sourcing matrix. For each building block, give a deliberate call — BUILD, BUY, SHARE or SANDBOX — defaulting to reuse and share, with one line of reasoning each. Flag any BUILD that duplicates an existing shared block, and any BUY that risks vendor lock-in. End with the one or two blocks that are the authoritative core worth building well. Output: a sourcing matrix (block / call / reason) plus the flags.",
    io: "Input: the building blocks needed and the shared platforms that exist. Output: a build/buy/share/sandbox matrix with flags.",
    safeguard: "A BUY or BUILD that looks cheapest for one project may be costliest for the country. Check each call against the whole-sector view and the existing shared platforms before approving — the model sees only what you paste, and a duplication it misses becomes the next fragmentation."
  },
  metadataRows: [
    ["Working title",          "Phase 3, Adapt — fit PAERA and decide build, buy or share"],
    ["YouTube-optimised title", "EA lifecycle Phase 3: localise the framework and decide build vs buy vs share"],
    ["Description (60 words)", "The third phase fits the reference architecture to your country. This video runs the Adapt phase on Progressa — localising PAERA's principles to local law, then making a deliberate build, buy, share or sandbox call for each building block, with reuse as the default that build must justify against. It's where the whole-of-government saving is chosen. AI sourcing-matrix prompt in the description."],
    ["Tags",                    "EA adapt, sourcing strategy, build vs buy, reuse, architectural principles, enterprise architecture lifecycle, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.2 (reference frameworks — sourcing); §4.3 (AI integration — sourcing-matrix prompt)"],
    ["PAERA citations",         "§5.6 Sourcing Strategy; §5.2 Principles"],
    ["External-link list",      "PAERA v1.0 §5.6 (Sourcing Strategy); PAERA v1.0 §5.2 (Principles)"]
  ]
}));

// ---------- 4.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 4.5",
  title: "Phase 4, Plan — sequence the roadmap and cost it",
  runtime: "~5 min",
  words: 600,
  paeraAnchor: "§5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap",
  singleMessage: "Plan turns Progressa's decisions into a sequenced, costed roadmap in waves — the deliverable the minister takes to cabinet — signed off with budget committed.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Phase 4, Plan — sequence the roadmap and cost it'. Voice-over begins." },
    { text: "Phase four is Plan. Now the decisions become a sequence. The question: how does Progressa get from today to the target, in what order, at what cost? The deliverable is a roadmap in waves, with investment estimates — the single document the minister takes to cabinet. About six to eight weeks." },
    { cue: "Slide 2 — Title: 'Sequence into waves'. Body, four rows: 'Wave 1 — inception: repository, Board, make PLR authoritative.' 'Wave 2 — high-priority: the single learner record (PNEA and the grant programme consume PLR and PNIA).' 'Wave 3 — the shared data-exchange backbone.' 'Wave 4 — mass scale: every service on the backbone.'" },
    { text: "Progressa sequences the work into waves, the way PAERA's recommended roadmap suggests. Wave one is inception — stand up the repository and the Board, and make the Learner Registry the authoritative learner. Wave two is the high-priority use case — the single learner record, by having the Examination Authority and the grant programme consume the Learner Registry and the Identity Authority instead of their own lists. Wave three builds out the shared data-exchange backbone. Wave four takes it to mass scale — every education service running on the backbone. Each wave delivers something the minister can show, not just groundwork." },
    { cue: "Slide 3 — Title: 'Cost it honestly'. Body, single text block: 'Each wave gets an investment estimate — senior person-months, licences, the permanent EA team. Estimates are directional, not quotations — enough for cabinet to commit a five-year envelope. The minister's promised single learner record lands in Wave 2, inside the first year.'" },
    { text: "Each wave gets an honest cost. Wave one is mostly people — the initial engagement and the small permanent EA team. Wave two adds the integration work to connect the authorities to the registries. Wave three is the backbone investment. The estimates are directional, not quotations — enough for cabinet to commit a five-year envelope, not an annual line that vanishes. And the sequencing is deliberate: the minister sees the single learner record — the thing they promised — land in wave two, inside the first year, not in year five." },
    { cue: "Slide 4 — Title: 'The roadmap is the shared object'. Body, single text block: 'One page both the minister and the architects point at. The minister reads outcomes and dates; the architects read the sequence and dependencies — you cannot do Wave 2 before PLR is authoritative in Wave 1. Same page, two readings, no translation lost.'" },
    { text: "The roadmap does a second job beyond planning. It is the one object the business side and the IT side both point at. The minister reads it as outcomes and dates — the single learner record by next year. The architects read it as a sequence with dependencies — you cannot do wave two before the Learner Registry is authoritative in wave one. Same page, two readings, no translation lost. The roadmap is where the policy goal and the technical sequence finally line up in a single picture the whole leadership shares." },
    { cue: "Slide 5 — Title: 'The sign-off — roadmap approved, budget committed'. Body, single text block: 'The fourth and most consequential gate. The decision-maker and the Board approve the roadmap and commit the multi-year envelope. This is the cabinet-ready deliverable. Four sign-offs done, in roughly six months from the first day of Discovery.'" },
    { text: "Plan ends with the fourth sign-off, the most consequential of the four. The decision-maker and the EA Board approve the roadmap and commit the budget — ideally a multi-year envelope, not an annual line. This is the deliverable the minister takes to cabinet. With it approved, Progressa moves from planning to building. Four sign-offs done, in roughly six months from the first day of Discovery. Now the work shifts to making it live." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Plan turns Progressa's decisions into a wave-sequenced, costed roadmap — the cabinet-ready document business and IT both read — with the minister's flagship landing inside the first year.'" },
    { text: "That is Phase 4 on Progressa. Sequence into waves, each delivering something visible. Cost each wave honestly. Put the minister's promise in an early wave. Sign off the roadmap and commit the budget. Six to eight weeks, and Progressa has a plan its whole leadership shares — and can fund." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Phase 4, Plan — sequence the roadmap and cost it'.",
      "Standard ITU template. Subtitle (KP1 / 4.5). No images."],
    ["2", "Waves slide. Four text rows, the wave sequence for Progressa.",
      "Candidate centrepiece visual — the wave roadmap. Text-box rows only. Readable on mobile."],
    ["3", "Cost-it slide. Single text block.",
      "Directional, not quotations; the minister's win lands in Wave 2 inside year one."],
    ["4", "Shared-object slide. Single text block.",
      "Carries the lingua-franca thread — the roadmap as the shared object business and IT both read."],
    ["5", "Sign-off slide. Single text block on the fourth gate.",
      "The most consequential gate; ~6 months to an approved roadmap. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Sequence your roadmap into waves",
    problem: "An architect in the Plan phase needs to turn ranked gaps and sourcing decisions into a wave-sequenced roadmap that puts an early visible win first and respects dependencies.",
    prompt: "Below are my ranked gaps and sourcing decisions for [country X]'s [sector] sector [paste the ranked gap list and the build/buy/share matrix]. Sequence the work into waves, following the pattern: Wave 1 inception (stand up the repository and Board, make the core registry authoritative); Wave 2 the high-priority use case (the one cross-cutting outcome the minister has promised); Wave 3 build-out (the shared data exchange); Wave 4 mass scale. For each wave give: what it delivers (something visible, not just groundwork), its prerequisites from earlier waves, and a directional cost driver (people / integration / platform). Put the minister's promised outcome in an early wave. Output: a four-wave roadmap with deliverables, dependencies and cost drivers.",
    io: "Input: ranked gaps and the sourcing matrix. Output: a four-wave roadmap with deliverables, dependencies and cost drivers.",
    safeguard: "Directional estimates are to motivate a real costing, not to quote. And a wave order that ignores a dependency — a use case scheduled before its registry is authoritative — will slip; check each wave's prerequisites against the prior waves before committing the sequence."
  },
  metadataRows: [
    ["Working title",          "Phase 4, Plan — sequence the roadmap and cost it"],
    ["YouTube-optimised title", "EA lifecycle Phase 4: sequence a wave-based roadmap your minister can take to cabinet"],
    ["Description (60 words)", "The fourth phase turns decisions into a sequence. This video runs the Plan phase on Progressa — sequencing the work into waves (inception, high-priority use case, build-out, mass scale), costing each honestly, and putting the minister's promised single learner record in an early wave. The roadmap is the cabinet-ready object business and IT both read. AI wave-sequencing prompt in the description."],
    ["Tags",                    "EA roadmap, wave planning, investment plan, enterprise architecture lifecycle, PAERA, recommended roadmap, digital government, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.2 (reference frameworks — roadmap pattern); §4.3 (AI integration — wave-sequencing prompt)"],
    ["PAERA citations",         "§5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap"],
    ["External-link list",      "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); PAERA v1.0 §5.7 (Recommended Roadmap)"]
  ]
}));

// ---------- 4.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 4.6",
  title: "Phase 5, Execute & Govern — stand up the living EA",
  runtime: "~5 min",
  words: 640,
  paeraAnchor: "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "Execute & Govern makes Progressa's architecture live — the repository, the Board, and the review gate that catches a project trying to build its own learner list and tells it to consume the registry. This is where re-use actually happens.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Phase 5, Execute & Govern — stand up the living EA'. Voice-over begins." },
    { text: "Phase five is Execute and Govern — the phase that never ends. The approved roadmap becomes a project pipeline, and the small permanent EA team turns the architecture from a one-time delivery into a living practice. On Progressa, three things make it real: the repository, the Board, and the review gate. Watch the gate do its work, because this is where everything the earlier phases decided either holds or quietly unravels." },
    { cue: "Slide 2 — Title: 'The repository and the team'. Body, single text block: 'The repository goes live — the single store of Progressa's layers, sourcing decisions, principle set and decision log. One named architect keeps it current. The permanent team — two to four architects — exists whether or not any single project is running.'" },
    { text: "First, the repository goes live — the single store of Progressa's architecture: the layers, the sourcing decisions, the principle set, the decision log. One named architect keeps it current, updated as each wave delivers. And the permanent team — two to four architects reporting to the digitalisation officer — exists whether or not any single project is running. It is Progressa's standing muscle for cross-cutting decisions." },
    { cue: "Slide 3 — Title: 'A project arrives at the gate'. Body, single text block: 'A new scholarship programme, funded and in a hurry, plans to build its own learner list — faster for the project than integrating with PLR. The gate asks its few questions. Does a shared building block already exist for this? Yes — the Learner Registry, made authoritative in Wave 1.'" },
    { text: "Now the gate does its work. A new scholarship programme arrives, funded and in a hurry. Its plan: build its own small learner list, because integrating with the Learner Registry would mean learning it and waiting on its team. For the project, building is faster — the same rational choice every project makes. The gate asks its few questions. Does a shared building block already exist for this? Yes — the Learner Registry, made authoritative back in wave one." },
    { cue: "Slide 4 — Title: 'The Board enforces re-use'. Body, single text block: 'The Board rules: consume the Learner Registry; do not build a fourth list. Left alone, the programme would have built Progressa's fourth learner list, and the fragmentation would have grown. The gate caught it while it was still a line in a project plan. A procurement rule could not have done this; only the whole-of-government view plus a Board that can say no.'" },
    { text: "The Board rules: consume the Learner Registry; do not build a fourth list. This single decision is the whole point of the architecture. Left alone, the scholarship programme would have built Progressa's fourth learner list, and the fragmentation the assessment found would have grown instead of shrinking. The gate caught it while it was still a line in a project plan — cheap to change. A procurement rule could not have done this; only the whole-of-government view, plus a Board that can say no, can. That moment, repeated for every project, is how re-use actually happens — not because a strategy required it, but because the gate enforced it. And the decision goes in the log, with its reason, so the next architect knows why." },
    { cue: "Slide 5 — Title: 'The Board is the shared rhythm'. Body, single text block: 'Four times a year the business side — the ministry and the authorities — and the IT side — the architects — sit over the same repository and decide together. The repository gives the shared picture, the metamodel the shared words, the Board the shared rhythm. That standing forum is what no single project can provide.'" },
    { text: "The Board does a second job. Four times a year, the business side — the ministry, the authorities — and the IT side — the architects — sit over the same repository and decide together. The repository gives them the shared picture, the metamodel the shared words, the Board the shared rhythm. That standing forum is what lets Progressa keep redesigning how it serves learners, instead of freezing after the first delivery. It is the part of an EA that no single project can provide." },
    { cue: "Slide 6 — Title: 'Six months to a roadmap, then forever'. Body, three rows: 'Weeks 1–26 — Discovery to an approved roadmap (four sign-offs).' 'Then — quarterly Board reviews, the repository kept true, the team protected.' 'That is what \"months, not years\" means.'" },
    { text: "Notice the rhythm of the whole thing. The first four phases took about six months, from Discovery to an approved roadmap. Phase five runs forever — quarterly Board reviews, the repository kept current, the team protected from being pulled onto the urgent project of the week. Months to a roadmap; then a permanent practice. That is what 'months, not years' actually means on Progressa — and what keeps the single learner record, once built, from drifting back into three." },
    { cue: "Slide 7 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Execute & Govern makes the architecture live — a repository kept true, a Board that enforces re-use at the gate, and the standing rhythm where business and IT keep deciding together.'" },
    { text: "That is Phase 5 on Progressa. The repository live and current. The Board binding. The gate catching the fourth learner list before it is built. The business and IT sides deciding together, quarterly, forever. This is where the architecture stops being a document and becomes how Progressa works." },
    { cue: "Slide 8 — Title: 'Sources'. Body: PAERA v1.0 §4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Phase 5, Execute & Govern — stand up the living EA'.",
      "Standard ITU template. Subtitle (KP1 / 4.6). No images."],
    ["2", "Repository-and-team slide. Single text block.",
      "The standing infrastructure of the practice. Text-only."],
    ["3", "Project-at-the-gate slide. Single text block.",
      "Sets up the punchline — a project about to build a fourth learner list. Text-only."],
    ["4", "Board-enforces-re-use slide. Single text block.",
      "Carries the planning-enables-re-use argument home, as the Progressa punchline. The pivotal slide."],
    ["5", "Shared-rhythm slide. Single text block.",
      "Carries the lingua-franca argument — the Board as the shared rhythm. Text-only."],
    ["6", "Months-not-years slide. Three text rows.",
      "Closes the lifecycle on the time-scale promise; ties to the single learner record holding."],
    ["7", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; the capstone of the demonstration."],
    ["8", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Run a gate decision on a real project",
    problem: "An architect operating the Board needs to turn a project proposal into a gate decision the Board can ratify — the questions answered, a ruling, and the decision-log entry.",
    prompt: "Below is a project proposal for [country X]'s [sector] sector [paste it: what it will build or buy, the functions it needs] and the shared building blocks that already exist [list: the core registry, identity, payments, data exchange — note which are authoritative and available, not just planned]. Run a gate decision. (1) Answer the gate questions: does a shared block already exist for what this builds; which data domains does it touch and does it consume the owner's copy; does it meet the principles; is the sourcing choice deliberate. (2) Recommend a ruling: consume the shared block, or grant a written exception with a sunset date and reason. (3) Draft the decision-log entry (what was decided, why). Output: the answered questions, the recommended ruling, and the decision-log entry.",
    io: "Input: a project proposal and the existing shared building blocks. Output: answered gate questions, a recommended ruling, and a decision-log entry.",
    safeguard: "The ruling is the Board's to make, not the model's — use the output to prepare the Board paper. And validate that any 'shared block exists' claim is real: the block must actually be authoritative and available, not merely planned, or you will block a project against something that cannot yet serve it."
  },
  metadataRows: [
    ["Working title",          "Phase 5, Execute & Govern — stand up the living EA"],
    ["YouTube-optimised title", "EA lifecycle Phase 5: how governance actually enforces re-use across government"],
    ["Description (60 words)", "The final phase makes the architecture live. This video runs Execute & Govern on Progressa — the repository, the permanent team, and the review gate catching a scholarship programme about to build a fourth learner list and telling it to consume the registry instead. It's where re-use actually happens, and where business and IT keep deciding together. AI gate-decision prompt in the description."],
    ["Tags",                    "EA governance, execute and govern, re-use, review gate, EA board, enterprise architecture lifecycle, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, step-by-step); §4.3 (AI integration — gate-decision prompt); §4.6 (worked on the Progressa sector)"],
    ["PAERA citations",         "§4.2.1 Management; §4.2.2 Architecture; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §4.2.1 (Management); PAERA v1.0 §4.2.2 (Architecture); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 4.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 4.7",
  title: "Run this on your own sector — the transferable recipe",
  runtime: "~4 min",
  words: 560,
  paeraAnchor: "§5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap",
  singleMessage: "The five phases, four sign-offs and five deliverables you watched on Progressa are the recipe — change the institutions and the data domains, and the same method runs on any sector you are handed.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Run this on your own sector — the transferable recipe'. Voice-over begins." },
    { text: "You have watched the whole method run on Progressa. The last step is to make it yours. Because the value of a worked example is not Progressa — it is that the same five phases, four sign-offs and five deliverables run on any public-sector domain you are handed. Here is the recipe, stripped to what transfers." },
    { cue: "Slide 2 — Title: 'The recipe — five phases, five deliverables'. Body, five rows: 'Discover → an honest picture.' 'Assess → a ranked gap analysis.' 'Adapt → a localised framework + sourcing matrix.' 'Plan → a wave roadmap.' 'Execute & Govern → a living governed EA.' Below: 'Four sign-offs between the first four phases.'" },
    { text: "The recipe is five phases, each with one deliverable and, for the first four, one sign-off. Discover produces an honest picture. Assess produces a ranked gap analysis. Adapt produces a localised framework and a build-buy-share matrix. Plan produces a wave-sequenced, costed roadmap. Execute and Govern produces a living, governed architecture. Discover before you judge; judge before you adapt; adapt before you plan; plan before you execute; govern always. That order is the method." },
    { cue: "Slide 3 — Title: 'What changes, what doesn't'. Body, two columns. 'Changes: the institutions; the data domains (a patient, a farmer, a taxpayer instead of a learner); the specific gaps.' 'Stays the same: the five phases; the four sign-offs; the five deliverables; reuse-before-build; the binding Board.'" },
    { text: "Moving to your sector, be clear about what changes and what does not. What changes: the institutions — your ministry, your authorities, your registries instead of Progressa's. The data domains — a patient, a farmer, a taxpayer instead of a learner. The specific gaps you find. What does not change: the five phases, the four sign-offs, the five deliverables, the reuse-before-build default, and the binding Board. You swap the contents; you keep the method." },
    { cue: "Slide 4 — Title: 'The method travels across sectors'. Body, single text block: 'The same five phases run on health (a patient record), agriculture (a farmer registry), social protection (a beneficiary record). Same shapes, same steps. Once your country has run the lifecycle once, the second sector is cheaper than the first.'" },
    { text: "And the method travels beyond education. The same five phases run on health, where the duplicated thing is a patient record; on agriculture, where it is a farmer registry; on social protection, where it is a beneficiary record. The shapes are the same — duplicate registries, paper re-entry, a stalled flagship — and so are the steps to fix them. Once your country has run the lifecycle once and built the EA muscle, the second sector is cheaper than the first, and the third cheaper still, because the team, the framework and the governance are already there." },
    { cue: "Slide 5 — Title: 'Start small, sign off honestly, protect the team'. Body, three rows: 'Start small — pick one high-priority use case and land it in an early wave.' 'Sign off honestly — including the uncomfortable gap.' 'Protect the team — the most common way the practice dies is the architects being pulled away.'" },
    { text: "Three things to carry from Progressa when you start on your own sector. Start small — pick the one high-priority use case, the equivalent of the single learner record, and make it land in an early wave. Sign off honestly — including the politically uncomfortable gap, because the assessment that flatters fails a year later. And protect the team — the most common way the practice dies is the architects being pulled onto the urgent project of the week. Get those three right and the method does the rest." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Five phases, four sign-offs, five deliverables — change the institutions and the data domains, and the method you watched on Progressa runs on any sector you are handed.'" },
    { text: "So that is the method, end to end, on a real sector — and the recipe to run it on yours. Five phases. Four sign-offs. Five deliverables. Reuse before build. A Board that can say no. Change the institutions and the domains, keep the method, and you can take any sector in your country from a fragmented start to a living, governed architecture." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Run this on your own sector — the transferable recipe'.",
      "Standard ITU template. Subtitle (KP1 / 4.7). No images."],
    ["2", "The-recipe slide. Five phase→deliverable rows plus the four-sign-offs line.",
      "The reusable recipe in one view. Readable on mobile."],
    ["3", "What-changes slide. Two columns: changes vs stays the same.",
      "Separates the swappable contents from the fixed method. Text-only."],
    ["4", "Method-travels slide. Single text block naming health/agriculture/social protection.",
      "ToR §4.4 sector-portability note — names sectors as where the method applies, NOT as worked examples. Text-only."],
    ["5", "Start-small slide. Three text rows of advice carried from Progressa.",
      "The three practitioner takeaways: small, honest, protected."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; closes the topic."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Map the Progressa method to your sector",
    problem: "An architect ready to apply the method needs a one-page transfer plan — their institutions, their equivalent high-priority use case, and the five deliverables named for their sector.",
    prompt: "I want to run the five-phase EA method on [country X]'s [sector] sector. Here are its main bodies [list them and a one-line role each]. Produce a one-page transfer plan. (1) Classify each body (policy unit / regulatory agency / service-delivery authority / state registry / shared platform). (2) Name this sector's equivalent of Progressa's 'single learner record' — the one cross-cutting outcome a minister has promised that fragmentation is blocking, and the duplicated data domain behind it (the patient, the farmer, the beneficiary). (3) Name the five deliverables for this sector: what the Discovery brief, the gap analysis, the sourcing matrix, the wave roadmap and the governed EA would each cover here. (4) Suggest the Wave 1 and Wave 2 content. Output: a one-page transfer plan under those four headings.",
    io: "Input: your sector and its main bodies. Output: a one-page transfer plan (classification, the high-priority use case, the five deliverables, the first two waves).",
    safeguard: "The transfer plan is a starting structure, not a substitute for running Discovery and Assess on the real sector. Confirm the gaps it assumes by actually looking — the duplicated domain it guesses may differ from what you find — before committing a roadmap or a budget to it."
  },
  metadataRows: [
    ["Working title",          "Run this on your own sector — the transferable recipe"],
    ["YouTube-optimised title", "The EA method in one recipe: five phases you can run on any government sector"],
    ["Description (60 words)", "The value of a worked example is that it transfers. This video strips the Progressa demonstration to the recipe — five phases, four sign-offs, five deliverables, reuse-before-build, a binding Board — and shows what changes (the institutions and data domains) and what doesn't (the method) when you run it on your own sector. AI sector-transfer prompt in the description."],
    ["Tags",                    "EA method, enterprise architecture lifecycle, sector transfer, digital government, PAERA, GovStack, methodology, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 4: Progressa demonstration, applying the method end-to-end"],
    ["ToR §4 coverage",         "§4.1 (methodology, transferable recipe); §4.4 (sector portability note); §4.3 (AI integration — sector-transfer prompt)"],
    ["PAERA citations",         "§5.4 Organisational Assessment & Roadmap; §5.7 Recommended Roadmap"],
    ["External-link list",      "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); PAERA v1.0 §5.7 (Recommended Roadmap)"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 4 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to follow along and produce the artefact on the other half. For the demonstration videos in Topic 4, 'produce the artefact' means draft the deliverable the phase produces, for the practitioner's own sector — a demonstration canvas, a Discovery brief outline, a ranked gap analysis, a sourcing matrix, a wave roadmap, a gate-decision paper, a sector-transfer plan. Each subtopic's AI usage tip operationalises this directly: the prompt turns the phase shown on Progressa into the same artefact for the listener's sector."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain in plain text. No country emblems, no government-agency logos — including for the fictional Progressa institutions, which run through every subtopic and appear as plain-text labels only (MoEYS, PNEA, PLR, PNIA, PDGA). The recurring single-sentence summary slide at the end of each subtopic uses the body type at 28pt rather than 18pt to make the line screenshot-friendly for architects who want to reuse the message."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI avatar narrator generated by ITU's production pipeline from an uploaded portrait image, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; FiscalAdmin's scripts are agnostic to the option chosen. There are no 'speaker on camera' cues anywhere in the bundle."),

  H3("4.4 Voice and tone"),
  P("Direct address (\"as the architect,\" \"your sector,\" \"the project in front of the Board\"). No third-person distance. Plain language at approximately an eighth-grade English level. The technical vocabulary established in Topics 2 and 3 — repository, building block, data domain, the review gate, the lifecycle phases — is used here as known, with a plain-words reminder on first use within each video so the video stands alone. The whole topic is a single continuous worked story on Progressa, but each phase video must still make sense alone: each restates just enough of the Progressa setup (the five institutions, the three learner lists) to be comprehensible without the others. Honest about the politics: the powerful programme that owns one of the duplicate learner lists, and the project that would quietly build a fourth, are named rather than avoided. Concrete in every beat — a learner registered three times, a scholarship programme caught at the gate, the single learner record landing in Wave 2."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata. Every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video link list into the YouTube description. The aggregate list across all seven subtopics is compiled in Section 6 for ITU's reference."),

  H3("4.6 GitBook companion content"),
  P("Each subtopic in this bundle ships with the video script, the slide specification, the AI usage tip and the metadata. The GitBook companion content — written, in-depth implementation guidance per the Guide §2 — is produced as a parallel deliverable, structured to mirror the same subtopic numbering. For Topic 4 the GitBook companion carries the full worked Progressa artefacts the videos can only summarise: the complete Discovery brief behind 4.2, the ranked gap analysis with maturity scorecards behind 4.3, the build-buy-share matrix behind 4.4, the wave roadmap with cost drivers behind 4.5, and the scholarship-programme gate-decision paper behind 4.6 — each presented as a fill-in template the practitioner adapts to their own sector. Cross-references between video and GitBook content use the topic/subtopic numbers."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting raised the editorial and structural decisions listed below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 PAERA-fidelity — citations verified against PAERA v1.0"),
  P("Every PAERA reference in Topic 4 was checked against the PAERA v1.0 document before this draft, and the section headings match the source. Verified exactly: §2.1 Problem statement and §2.3 Role of Enterprise Architecture (the Progressa problem, 4.1); §3.1.3 Readiness Assessment (the Discover phase, 4.2 and 4.3); §5.1 Capabilities Assessment (the capability scoring in Assess, 4.3); §5.4 Organisational Assessment & Roadmap (the assessment, the roadmap and governance, 4.2–4.7); §5.6 Sourcing Strategy (the build-buy-share decision, 4.4); §5.2 Principles (the localised principles, 4.4); §5.7 Recommended Roadmap (the wave sequence, 4.5 — PAERA §5.7.2–§5.7.5 name the waves: Inception, High-priority Use Case, Initial Transformation, Mass-scale Transformation); §4.2.1 Management and §4.2.2 Architecture (the team and the Board, 4.6). One residual gloss, carried for consistency with Topics 2–3: §5.2's PAERA heading is simply 'Principles', cited as 'Principles' here. No paraphrased PAERA lists are enumerated in Topic 4 (the principles and entities are referenced, not listed), so the Module-2 list-fidelity risk does not arise here."),

  H3("5.2 Editorial tone calls"),
  P("Four tone choices are sharp and deserve a deliberate keep / soften / cut decision: 'this is not a Progressa problem — it is the problem most education sectors share' in 4.1; 'describe without recommending — discover first, judge second' in 4.2; 'an assessment that softens the gap fails — quietly, a year later' in 4.3 (carried deliberately from the Topic 2 and 3 honesty thread); and the scholarship-programme 'fourth learner list' punchline in 4.6. All four are intended to land as practitioner-honest rather than cynical — confirm the register suits ITU's channel voice."),

  H3("5.3 Structural calls"),
  P("Three structural items, all about avoiding repetition across the KP1 modules. (1) Boundary with Topic 2: subtopic 2.5 read the four BDAT layers on Progressa; Topic 4 runs the lifecycle on Progressa and deliberately does not re-model the layers — it assumes them and moves through Discover→Govern. Confirm the two read as the modelling lesson (Topic 2) versus the method demonstration (Topic 4), not a repeat. (2) Boundary with Topic 3: Topic 3 taught the repository, Board and review gate as generic capabilities; subtopic 4.6 shows them running on Progressa (the gate catching a real project). Confirm 4.6 reads as the worked instance of Topic 3's governance, not a re-teach. (3) Method vs taught-method: Topic 4 instantiates the five-phase lifecycle and the four sign-offs named in Topic 1's subtopic 1.6; the phase names, durations (3–4 / 6–8 / 4–6 / 6–8 weeks, then ongoing) and the ~six-months-to-a-roadmap figure are kept consistent with 1.6 — confirm they still match if 1.6 is revised."),

  H3("5.4 Visual production calls"),
  P("Two items to confirm with ITU's look-and-feel template once delivered (action item A5): the Progressa institution map implied in 4.1 (the five bodies and their roles) and the four-wave roadmap in 4.5 (slide 2) are the two candidate centrepiece visuals of Topic 4 and merit a dedicated design iteration with ITU's production team; both are specified as plain-text rows and text-box structure only, with no icons or emblems, pending the template."),

  H3("5.5 Scope-boundary call — the sector-portability note in 4.7"),
  P("Subtopic 4.7 (slide 4) names health, agriculture and social protection as sectors the method transfers to, with the duplicated data domain for each (a patient record, a farmer registry, a beneficiary record). This is written as the ToR §4.4 sector-portability statement — a one-line note that the method applies elsewhere — and deliberately not as worked examples (no cross-sector case is developed, in line with the Education-only scope rule). Confirm ITU reads it as a portability note rather than scope creep; if any doubt, it can be reduced to a single sentence naming only that the method is sector-agnostic, without listing the sectors."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the seven subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions. All references are public anchors the ITU reviewer can verify."),
  genericTable([2000, 7700], ["Subtopic", "Sources referenced"], [
    ["4.1", "PAERA v1.0 (paera.govstack.global) — §2.1 Problem statement; §2.3 Role of Enterprise Architecture."],
    ["4.2", "PAERA v1.0 §3.1.3 (Readiness Assessment); §5.4 (Organisational Assessment & Roadmap)."],
    ["4.3", "PAERA v1.0 §5.1 (Capabilities Assessment); §5.4 (Organisational Assessment & Roadmap); §3.1.3 (Readiness Assessment)."],
    ["4.4", "PAERA v1.0 §5.6 (Sourcing Strategy); §5.2 (Principles)."],
    ["4.5", "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); §5.7 (Recommended Roadmap — wave sequence §5.7.2–§5.7.5)."],
    ["4.6", "PAERA v1.0 §4.2.1 (Management); §4.2.2 (Architecture); §5.4 (Organisational Assessment & Roadmap). GovStack Building Block specifications (govstack.global) for the shared building blocks referenced."],
    ["4.7", "PAERA v1.0 §5.4 (Organisational Assessment & Roadmap); §5.7 (Recommended Roadmap)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable. The Tuesday review may add or refine items based on ITU's preferred citation style for the YouTube channel. The PAERA section numbers were verified against PAERA v1.0 during drafting (see calibration item 5.1).")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP1 Module 4 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP1 Topic 4 (Progressa demonstration — applying the method end-to-end), Architect-facing, aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP1 Topic 4 Script Bundle v0.1 · 26 June 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP1_Module4_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
