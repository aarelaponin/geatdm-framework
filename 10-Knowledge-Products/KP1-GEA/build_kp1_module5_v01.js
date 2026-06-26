// Build KP1 Module 5 — Video Script Bundle v0.1
// Fourth Architect-facing module of KP1 — the hands-on AI plays (the methodology's
// "Engine"). Copied from build_kp1_module4_v01.js, same Persona A (Architect).
// Same ITU compliance discipline:
//   - subtopic numbering (5.1–5.7) per ITU convention
//   - each video stands alone (no intros/outros, no cross-video references)
//   - text-only slides, Arial 28pt/18pt, #E5F5FB
//   - no individuals on screen (AI avatar or screen-only voice-over)
//   - one four-part AI usage prompt per subtopic (for the play videos, the AI tip IS the play)
//   - "Find the link in the description" convention for external references
// Module 5 teaches using AI well for EA: the ground rules (5.1), five reusable plays
// (5.2–5.6), and the safeguards (5.7). Primary coverage ToR §4.3 (AI integration); each
// play anchors to the PAERA section of the EA activity it supports (all pre-verified).

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
    children: [new TextRun({ text: "Topic 5 — AI plays for EA, hands-on",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Topic 5 of KP1"],
    ["Version",             "v0.1 — fourth Architect-facing module, aligned to ITU Knowledge Products and Video Materials Guide"],
    ["Date",                "26 June 2026"],
    ["Contract reference",  "RFQ-S-GIGA-2026-022 / Purchase Order #334304 (signed 24 April 2026)"],
    ["Topic persona",       PERSONA_A],
    ["Subtopics",           "Seven subtopics (5.1 – 5.7), each shipped as one ~5-minute standalone video"],
    ["Topic runtime",       "Approximately 33 minutes across seven standalone videos"],
    ["Prepared by",         "FiscalAdmin OÜ — Aare Lapõnin (Engagement Lead)"],
    ["For review by",       "ITU/Giga at Tuesday weekly call (Carolina Anselmino); FiscalAdmin team (Karin Kaup, Arne Lapõnin)"]
  ]),
  spacer(140),
  P("This bundle is the v0.1 working draft of Topic 5 — the hands-on AI topic, the practitioner rendering of the methodology's AI-workflow engine. Topics 1 through 4 each carried one AI prompt in passing, to turn a method into a draft; Topic 5 is dedicated to using those tools well. It teaches the ground rules that make every play safe (AI is a drafting partner, not an oracle), then walks five reusable plays — drafting the Discovery and Assess artefacts, building the whole-of-government re-use business case, translating between the minister and the architects, drafting the governance documents, and generating comparator cases and a sector-transfer plan — and closes with the cross-cutting safeguards: verify, cite, protect data, keep the decision human. The audience lock is unchanged: African public-sector middle management, plain English at an eighth-grade level, each subtopic leading with the capability the architect gains. Examples use the Progressa education sector for continuity; the deliverable sector is Education throughout. The seven videos are numbered to ITU's topic/subtopic convention (subtopics 5.1 through 5.7). Each stands alone — no meta-introductions, no playlist-stitching outros, no backward references. All slide specifications follow ITU's text-only branding (Arial Bold 28pt title, Arial 18pt body, background #E5F5FB, no images, no individuals on screen). For the five play videos the embedded AI usage tip is the play itself — a copy-paste prompt that produces the artefact; the two discipline videos carry a meta-prompt. External references use the ITU convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the seven video scripts that together make up Topic 5 of Knowledge Product 1 (Government Enterprise Architecture), along with on-screen slide specifications, per-subtopic metadata, AI usage tips and production notes. It is the v0.1 working draft, aligned to ITU's Knowledge Products and Video Materials Guide, submitted for team review and for discussion with ITU/Giga at the Tuesday weekly call."),
  P("Topic 5 is the hands-on AI topic — the one that teaches the architect to use AI well for EA work. It takes an architect from \"I have seen one AI prompt per topic\" to \"I can run a set of reusable AI plays for real EA work, with the safeguards that keep them safe.\" It opens with the ground rules (AI is a drafting partner, not an oracle; the four-part prompt; you decide, the AI drafts), walks five plays — drafting Discovery and Assess artefacts, building the re-use business case, translating between the minister and the architects, drafting the governance documents, and generating comparators and a transfer plan — and closes with the safeguards that make every play safe. The plays consolidate and give discipline to the kinds of prompt shown in passing across Topics 1 through 4; they are not new one-offs."),

  H3("1.2 Alignment with ITU's Knowledge Products and Video Materials Guide"),
  P("The same compliance items that shaped Topics 1 through 4 apply here. (1) Topic-and-subtopic numbering per Guide §1.i — subtopics 5.1 through 5.7. (2) Each video stands alone — no in-video introduction, conclusion, or reference to another video, per Guide §3.i. (3) Slides are text-only in Arial Bold 28pt title / Arial 18pt body / background #E5F5FB per Guide §3.i Slides Branding. (4) No individuals on screen — AI avatar or computer-screen-only voice-over per Guide §3 Note. (5) An AI usage tip is embedded in every subtopic per Guide §2.ii and ToR §4.3 — this topic is the fullest expression of that requirement: for the five play videos the AI tip is the play, and for the two discipline videos it is a meta-prompt (sharpen a weak prompt; strip a prompt of sensitive data). Anchoring note: each play is anchored to the PAERA section of the EA activity it supports; the two AI-discipline videos (5.1, 5.7) are anchored to ToR §4.3, with no PAERA section forced where none genuinely applies."),

  H3("1.3 How to read this document"),
  P("Section 2 gives Topic 5 at a glance — the seven subtopics with persona, runtime and single message. Section 3 contains the full script for each subtopic, with on-screen slide specification, AI usage tip and metadata. Section 4 collects the production notes that apply across all seven videos. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate external-link list for ITU's production pipeline."),
  P("Within each script section, three rendering conventions are used: italic shaded blocks denote on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script. A reader should be able to imagine the video from these layers without further reference to a storyboard."),

  pageBreak()
);

// ---------- TOPIC 2 AT A GLANCE ----------
body.push(
  H1("2. Topic 5 at a glance"),
  P("Seven standalone subtopic videos. One Architect persona throughout. Total runtime approximately thirty-three minutes. Each video has a single message and a single learning outcome, and leads with the capability the architect gains rather than with a technical term. The videos are designed to be discoverable individually via YouTube search; the playlist provides navigation but is not required to comprehend any single video."),
  genericTable([700, 2900, 4500, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["5.1", "Use AI as a drafting partner, not an oracle — the ground rules",
      "AI is a fast drafting partner for EA work, not an oracle — it produces a strong first draft you verify, never a finding you trust. Use the four-part prompt, write a specific safeguard, and remember: you decide, the AI drafts.", "~5 min"],
    ["5.2", "Play 1 — Draft your Discovery and Assess artefacts",
      "This play turns raw Discovery notes into a capture template and a ranked gap analysis in minutes — the AI supplies the structure; you supply the ground truth and the honesty.", "~5 min"],
    ["5.3", "Play 2 — Build the whole-of-government re-use business case",
      "This play makes the re-use saving visible — a per-programme cost table totalled to a country-level number — turning the whole-of-government argument into a figure the budget authority can act on.", "~5 min"],
    ["5.4", "Play 3 — Translate between the minister and the architects",
      "This play translates a minister's goal into architecture and back, and decomposes a decision into business, IT and joint parts — so the two sides can finally decide together.", "~5 min"],
    ["5.5", "Play 4 — Draft your governance artefacts",
      "This play drafts the Board terms of reference, the review-gate checklist and the gate-decision paper — so governance arrives as a strong draft to edit, with legal review before anything is adopted.", "~4 min"],
    ["5.6", "Play 5 — Generate comparator cases and a sector-transfer plan",
      "This play generates comparator cards tuned to your context and a sector-transfer plan — fast — under one rule: cite every source or discard the claim, and confirm by looking.", "~4 min"],
    ["5.7", "Keep AI honest — verify, cite, and protect data",
      "Verify against a source, cite or discard, never paste confidential data, and keep the decision human — four safeguards that separate AI that helps from AI that quietly harms.", "~5 min"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 5.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 5.1",
  title: "Use AI as a drafting partner, not an oracle — the ground rules",
  runtime: "~5 min",
  words: 580,
  paeraAnchor: "ToR §4.3 (AI integration) — method and tooling discipline; no single PAERA section applies",
  singleMessage: "AI is a fast drafting partner for EA work, not an oracle — it produces a strong first draft you verify, never a finding you trust. Learn the four-part prompt pattern and the one rule that makes every play safe: you decide, the AI drafts.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Use AI as a drafting partner, not an oracle — the ground rules'. Voice-over begins." },
    { text: "AI can save you days of drafting on EA work, and it can also lead you confidently into a wrong answer. The difference is entirely in how you use it. So before any of the plays, learn the ground rules that make them safe — the small set of habits that turn AI from a risk into a fast, reliable drafting partner." },
    { cue: "Slide 2 — Title: 'Drafting partner, not oracle'. Body, single text block: 'AI produces a strong first draft in minutes — a gap analysis, a terms of reference, a business case. It does not produce a finding you can trust without checking. It states a wrong figure in the same confident tone as a right one. The draft is where your work starts, not where it ends.'" },
    { text: "The first rule. AI is a drafting partner, not an oracle. It produces a strong first draft of a gap analysis, a board terms of reference, a business case — in minutes instead of days. What it does not produce is a finding you can trust without checking. It will state a wrong section number, a plausible but invented figure, a confident claim with no basis, in exactly the same tone as a correct one. The draft is where your work starts, not where it ends. Treat every output as a hypothesis to verify, never a fact to forward." },
    { cue: "Slide 3 — Title: 'The four-part prompt'. Body, four rows: '1. Name the input you are pasting.' '2. Break the task into named outputs.' '3. State the exact output format.' '4. Add a safeguard line for this prompt's specific risk.'" },
    { text: "Second, the shape of a good prompt. Every play in this topic uses the same four parts. One — name the input you are pasting: below is my Discovery brief. Two — break the task into named outputs: score the capabilities, list the gaps, rank them. Three — state the exact output format you want: a four-row table plus three bullets. Four — add a safeguard line that names this prompt's specific risk. A prompt with these four parts gives you a usable artefact. A vague one — help me with my architecture — gives you vague mush." },
    { cue: "Slide 4 — Title: 'The safeguard is specific, not boilerplate'. Body, single text block: 'A good safeguard names the way THIS prompt can mislead you: \"a severity judgement about a powerful ministry must be checked with the decision-maker, not softened by the model\". Not \"AI can make mistakes\" — that helps no one.'" },
    { text: "On that safeguard line — it is the most important part, and the easiest to get lazy about. A good safeguard names the specific way this specific prompt can mislead you. For a gap analysis: a severity judgement about a powerful ministry must be checked with the decision-maker, not softened by the model. For a comparator card: discard any country example where the cited source does not actually say what the prompt claims. The safeguard is not 'AI can make mistakes' — that helps no one. It is the one check that catches this play's particular trap." },
    { cue: "Slide 5 — Title: 'You decide, the AI drafts'. Body, single text block: 'The AI prepares the Board paper; the Board rules. It ranks the gaps; you defend the ranking. It proposes a sourcing call; the architect and the Board own the decision. The moment the output becomes the decision instead of the input to one, you have handed your judgement to a tool with no accountability.'" },
    { text: "Fourth, the rule that sits above all the others. You decide; the AI drafts. The AI can prepare the board paper, but the board rules. It can rank the gaps, but you defend the ranking. It can propose a sourcing call, but the architect and the EA Board own the decision. The moment you let the AI's output be the decision instead of the input to a decision, you have handed your judgement to a tool that has no accountability and cannot be questioned in a meeting. Use it to think faster, never to think less." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'AI is a fast drafting partner for EA work, not an oracle — use the four-part prompt, write a specific safeguard, and remember: you decide, the AI drafts.'" },
    { text: "So these are the ground rules. AI is a drafting partner, not an oracle. Use the four-part prompt. Make the safeguard specific. And keep the decision yours. Hold to these, and the plays in this topic save you days without leading you astray. Forget them, and AI becomes a fast way to be confidently wrong." },
    { cue: "Slide 7 — Title: 'Sources'. Body: ITU Knowledge Products contract Terms of Reference §4.3 (AI integration); GovStack knowledge base (govstack.global). Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Use AI as a drafting partner, not an oracle — the ground rules'.",
      "Standard ITU template. Subtitle (KP1 / 5.1). No images."],
    ["2", "Drafting-partner slide. Single text block.",
      "The foundational frame for the whole topic. The 'same confident tone' beat. Text-only."],
    ["3", "Four-part-prompt slide. Four numbered text rows.",
      "The reusable prompt shape used by every play. Readable on mobile."],
    ["4", "Specific-safeguard slide. Single text block with two worked safeguard examples.",
      "The 'not AI-can-make-mistakes' beat. Text-only."],
    ["5", "You-decide slide. Single text block.",
      "The rule above the rules — accountability stays human. The pivotal slide."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Cites the contract ToR and GovStack — verifiable anchors for the AI-integration framing."]
  ],
  aiTip: {
    title: "Sharpen a weak prompt",
    problem: "An architect whose AI output is vague usually has a vague prompt. This meta-prompt rewrites a draft prompt into the four-part shape with a specific safeguard, so the next output is usable.",
    prompt: "Below is a prompt I am using for EA work, and the output is too vague or unreliable: [paste your draft prompt]. Rewrite it into the four-part shape: (1) a clear statement of the input I will paste; (2) the task broken into named outputs; (3) an explicit output format (e.g. a table with named columns plus a short summary); (4) a safeguard line that names the specific way THIS prompt could mislead me — not generic 'AI can make mistakes'. Point out where my original was vague and what you changed. Output: the rewritten prompt, then a 3-bullet note on what was weak in the original.",
    io: "Input: a draft prompt that is underperforming. Output: a rewritten four-part prompt plus a note on what was weak.",
    safeguard: "A sharper prompt still produces a draft, not a finding. The four-part structure improves the input you give the AI; it does not remove the need to verify the output against a real source before you use it."
  },
  metadataRows: [
    ["Working title",          "Use AI as a drafting partner, not an oracle — the ground rules"],
    ["YouTube-optimised title", "How to use AI for Enterprise Architecture work without getting burned: the ground rules"],
    ["Description (60 words)", "AI can save a public-sector architect days of drafting — or lead them confidently into a wrong answer. This video sets the ground rules that make every AI play safe: AI is a drafting partner, not an oracle; use the four-part prompt; make the safeguard specific; and you decide, the AI drafts. AI prompt-sharpening tip in the description."],
    ["Tags",                    "AI for enterprise architecture, prompting, AI safeguards, digital government, GovStack, AI drafting, public sector architect, responsible AI"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — the core of this topic); §4.1 (methodology framing)"],
    ["PAERA citations",         "None — method/tooling discipline; anchored to ToR §4.3"],
    ["External-link list",      "ITU Knowledge Products contract ToR §4.3 (AI integration); GovStack knowledge base (govstack.global)"]
  ]
}));

// ---------- 5.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 5.2",
  title: "Play 1 — Draft your Discovery and Assess artefacts",
  runtime: "~5 min",
  words: 580,
  paeraAnchor: "§3.1.3 Readiness Assessment; §5.1 Capabilities Assessment; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "The first play turns your raw Discovery notes into a structured capture template and then a ranked gap analysis — the two hardest-to-start artefacts of the assessment — in a fraction of the time, with the politics flagged for you to handle honestly.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Play 1 — Draft your Discovery and Assess artefacts'. Voice-over begins." },
    { text: "The first play is the one you will use most: drafting the artefacts of Discovery and Assess. These are the slowest to start from a blank page — the capture template, and the ranked gap analysis. AI gets you from blank page to strong draft in minutes. Here is how it goes on a real sector." },
    { cue: "Slide 2 — Title: 'Step 1 — the capture template'. Body, single text block: 'Before the interviews: paste a body's mandate and known systems. The AI returns a four-layer capture template — the right questions per layer, a describe-don't-recommend reminder, and a column to record where each answer came from.'" },
    { text: "Step one, before the interviews. You paste what you know about a body — its mandate, its known systems, its registries. The AI returns a four-layer capture template: the right questions to ask per layer, a reminder to describe and not recommend, and a column to record where each answer came from. You walk into the Discovery interview with a structured sheet instead of a blank notebook. The template is a starting structure — you still ask the questions and record the real answers." },
    { cue: "Slide 3 — Title: 'Step 2 — the ranked gap analysis'. Body, single text block: 'After Discovery: paste the findings back in. The AI scores capability maturity, scans for the four common gaps, ranks them by impact and effort, and flags the gaps that involve a powerful body for honest handling.'" },
    { text: "Step two, after Discovery. You paste the findings back in and ask for a ranked gap analysis. On a sector like Progressa's education system, the AI scores the capabilities — register a learner low, certify a result high — scans for the four common gaps, ranks them by impact and effort, and, crucially, flags the gaps that involve a powerful body for honest handling. In minutes you have the skeleton of the assessment that would otherwise take a week to structure." },
    { cue: "Slide 4 — Title: 'What the AI gets right, and what it can't'. Body, two columns. 'Gets right: structure, completeness, the obvious gaps — it will not forget to score a capability.' 'Can't: the ground truth, the political weight, whether a \"fact\" in your notes is actually true.'" },
    { text: "Be clear about the division of labour. The AI is good at structure and completeness — it will not forget to score a capability or to check for duplicate registries. What it cannot do is know the ground truth. It scores what your notes say, not what is real. It cannot feel the political weight of the gap that a powerful programme will fight to keep. And it cannot tell whether a fact in your notes is actually true. The structure is the AI's; the truth and the judgement are yours." },
    { cue: "Slide 5 — Title: 'The honesty flag matters most'. Body, single text block: 'The AI marks the duplicate registry a powerful programme owns as politically sensitive — but it cannot decide how to handle it. That is your call, made with the decision-maker, not softened to avoid a fight. The assessment that flatters fails a year later.'" },
    { text: "Of everything this play produces, the honesty flag matters most. The AI will mark the duplicate learner list that a powerful programme owns as a politically sensitive gap. But it cannot decide how to handle it — that is your call, made with the decision-maker, not softened to avoid a fight. The play gives you the flag; you provide the courage. An assessment that flatters the current state to keep the peace fails quietly, a year later, when the flagship still does not exist." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'This play turns raw Discovery notes into a capture template and a ranked gap analysis in minutes — the AI supplies the structure; you supply the ground truth and the honesty.'" },
    { text: "So the first play gets you from blank page to a structured capture template and a ranked gap analysis fast. Use it to skip the slow part — the structuring — and spend your time on the part only you can do: getting the truth right, and ranking the gaps honestly, including the ones that are uncomfortable to name." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §3.1.3 Readiness Assessment; §5.1 Capabilities Assessment; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Play 1 — Draft your Discovery and Assess artefacts'.",
      "Standard ITU template. Subtitle (KP1 / 5.2). No images."],
    ["2", "Capture-template slide. Single text block on the before-interview step.",
      "The structured-sheet-not-blank-notebook beat. Text-only."],
    ["3", "Ranked-gap-analysis slide. Single text block on the after-Discovery step.",
      "The honesty flag is previewed here. Text-only."],
    ["4", "Division-of-labour slide. Two columns: gets-right vs can't.",
      "Sets the boundary clearly — structure is the AI's, truth is yours."],
    ["5", "Honesty-flag slide. Single text block.",
      "The 'you provide the courage' beat. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Turn Discovery notes into a ranked gap analysis",
    problem: "An architect with four-layer Discovery findings needs a ranked, honestly-flagged gap analysis — the assessment skeleton — without spending a week structuring it by hand.",
    prompt: "Below are my Discovery findings for [country X]'s [sector] sector [paste the brief: bodies, systems, registries, data flows]. Produce a ranked gap analysis. (1) Score the main capabilities for maturity (Low / Medium / High) against a single-source-of-truth, once-only standard. (2) Identify gaps, looking on purpose for the four common ones: duplicate registries, an available shared platform not being consumed, point-to-point integration with no shared data exchange, and capabilities or domains with no clear owner. (3) For each gap give severity (cost, citizen burden, the stalled flagship), effort to close, and a priority that favours high impact where movement is possible. (4) Flag any gap involving a politically powerful body for honest handling at sign-off. Output: a maturity table, a ranked gap table, and the honesty flags.",
    io: "Input: the Discovery findings. Output: capability maturity scores, a ranked gap table, and the honesty flags.",
    safeguard: "The model ranks what you give it. Validate any politically-sensitive severity with the decision-maker, not the model — and confirm any 'fact' in the notes against a real source before it drives a priority; a wrong input becomes a wrong priority."
  },
  metadataRows: [
    ["Working title",          "Play 1 — Draft your Discovery and Assess artefacts"],
    ["YouTube-optimised title", "Using AI to draft an EA assessment: from Discovery notes to a ranked gap analysis"],
    ["Description (60 words)", "The slowest part of an assessment is starting from a blank page. This video shows public-sector architects an AI play that turns raw Discovery notes into a four-layer capture template and then a ranked gap analysis in minutes — with politically sensitive gaps flagged. The AI supplies the structure; you supply the ground truth and the honesty. Gap-analysis prompt in the description."],
    ["Tags",                    "AI for EA, gap analysis, discovery, assessment, enterprise architecture, PAERA, AI drafting, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — the play); §4.1 (methodology); §4.6 (worked on the Progressa sector)"],
    ["PAERA citations",         "§3.1.3 Readiness Assessment; §5.1 Capabilities Assessment; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §3.1.3 (Readiness Assessment); PAERA v1.0 §5.1 (Capabilities Assessment); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 5.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 5.3",
  title: "Play 2 — Build the whole-of-government re-use business case",
  runtime: "~5 min",
  words: 580,
  paeraAnchor: "§5.6 Sourcing Strategy; §1.3 GovStack Vision",
  singleMessage: "The second play builds the business case that makes re-use visible — a cost comparison showing that each project building its own is cheaper for the project but ruinous for the country — the number that wins the budget argument.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Play 2 — Build the whole-of-government re-use business case'. Voice-over begins." },
    { text: "The second play helps you win the hardest argument in EA: that re-use saves money, even though no single project will choose it. The trouble is that the saving is invisible at the project level and only appears across the whole government. This play makes it visible — a business case with a number the budget authority can act on." },
    { cue: "Slide 2 — Title: 'The argument you have to make'. Body, single text block: 'Inside any one project, building its own identity is cheaper and faster than reusing the national one. So every project builds its own. Across ten projects, the country pays ten times. The saving from re-use only exists when you add up the whole government — the view no project has.'" },
    { text: "Here is the argument the play helps you make. Inside any one project, building its own small identity function is cheaper and faster than reusing the national one. So every project builds its own. Across ten projects, the country has paid ten times for identity, and the citizen proves who they are on paper at every counter. The saving from re-use is real, but it only exists when you add up the whole government — which is exactly the view no project has, and the budget authority rarely sees." },
    { cue: "Slide 3 — Title: 'What the play produces'. Body, single text block: 'Paste 3–5 programmes with rough budgets, plus the shared blocks that exist. The AI returns a per-programme table: the local cost of building its own versus consuming the shared block — honestly showing consuming is often dearer for the single project — then a country-level five-year total.'" },
    { text: "The play makes that addition for you. You paste in three to five of your country's programmes, with rough budgets, and the shared building blocks that exist. The AI produces a per-programme table: for each, the local cost of building its own versus consuming the shared block — and it honestly shows that consuming is often more expensive for the individual project. Then it totals across all programmes over five years, where the country-level saving finally appears as a single number." },
    { cue: "Slide 4 — Title: 'The planning argument, made concrete'. Body, single text block: 'A procurement rule cannot make re-use the cheapest choice for the project doing the work. Only planning at the level of the whole government can show why re-use is worth it — the view an EA exists to give. This play puts that view on one page the budget authority can read.'" },
    { text: "This is the central case for an EA, turned into a number. A procurement rule can require open standards, but it cannot make re-use the cheapest choice for the project doing the work. Only planning at the level of the whole government can show why re-use is worth it — and that is the view an Enterprise Architecture exists to give. This play takes that view, which usually lives in an architect's head, and puts it on one page the budget authority can read. The whole-of-government saving stops being a claim and becomes a calculation." },
    { cue: "Slide 5 — Title: 'Use it to motivate a costing, not to quote'. Body, single text block: 'The numbers are directional. Their job is to win the argument that re-use deserves a proper costing — not to be the costing. Present the total as a reason to commission a detailed business case, and name the conditions that make the saving real: shared blocks exist, the Board has authority, funding is sustained.'" },
    { text: "One discipline with this play. The numbers it produces are directional, not quotations. Their job is to make the shape of the saving visible — to win the argument that re-use is worth a proper costing — not to be the costing themselves. Present the country-level total as a reason to commission a detailed business case, and name the conditions that make the saving real: the shared blocks must exist, the Board must have authority, the funding must be sustained. Oversell the numbers and a sharp finance officer will dismiss the whole case." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'This play makes the re-use saving visible — a per-programme cost table totalled to a country-level number — turning the whole-of-government argument into a figure the budget authority can act on.'" },
    { text: "So the second play is your re-use argument, made concrete. It shows, programme by programme, that building your own is locally cheaper and nationally ruinous, and it totals the saving the country gets from re-use. Use it to win the funding argument that an architect, armed only with a principle, usually loses." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.6 Sourcing Strategy; §1.3 GovStack Vision. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Play 2 — Build the whole-of-government re-use business case'.",
      "Standard ITU template. Subtitle (KP1 / 5.3). No images."],
    ["2", "The-argument slide. Single text block on the invisible-at-project-level saving.",
      "Frames why re-use is hard to fund. Text-only."],
    ["3", "What-the-play-produces slide. Single text block on the per-programme table.",
      "The honest 'consuming is dearer for the single project' beat. Text-only."],
    ["4", "Planning-argument slide. Single text block.",
      "Carries the planning-enables-re-use argument, turned into a number. The pivotal slide."],
    ["5", "Directional-not-quote slide. Single text block.",
      "The discipline that keeps a finance officer from dismissing the case."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Build the whole-of-government re-use business case",
    problem: "An architect needs to show the budget authority that re-use is cheaper at the country level than at the project level, even though each project would not choose it — a directional business case that makes the math visible.",
    prompt: "Below are 3 to 5 of [country X]'s current and planned digital-government programmes [paste short descriptions with rough budget envelopes and the identity / payment / data-exchange components each needs], and the shared building blocks that already exist [list them, or note if none]. For the country as a whole, estimate the cost difference between (a) each programme building its own version of the shared components and (b) all programmes consuming the shared blocks. Acknowledge that option (b) is locally MORE expensive for each individual project. Output: a per-programme table (local cost of 'do it yourself' vs 'consume the shared block'), a country-level 5-year total, and a 'what makes this saving real' note (shared blocks available, Board authority, sustained funding, training capacity).",
    io: "Input: 3–5 programme descriptions with rough budgets, plus the shared blocks that exist. Output: a per-programme cost table, a 5-year country total, and the realisation conditions.",
    safeguard: "These are directional figures, not quotations. Present them to motivate a properly costed business case, not as the costing — and never present the per-programme numbers as quotes; the saving is only real if the realisation conditions hold."
  },
  metadataRows: [
    ["Working title",          "Play 2 — Build the whole-of-government re-use business case"],
    ["YouTube-optimised title", "Using AI to prove re-use saves money: the whole-of-government business case"],
    ["Description (60 words)", "Re-use saves money — but only across the whole government, which is exactly the view no single project has. This video shows public-sector architects an AI play that builds the business case: a per-programme table showing build-your-own is locally cheaper and nationally ruinous, totalled to a country-level saving the budget authority can act on. Re-use business-case prompt in the description."],
    ["Tags",                    "AI for EA, re-use, business case, sourcing, building blocks, whole-of-government, enterprise architecture, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — the play); §4.2 (reference frameworks — re-use, sourcing)"],
    ["PAERA citations",         "§5.6 Sourcing Strategy; §1.3 GovStack Vision"],
    ["External-link list",      "PAERA v1.0 §5.6 (Sourcing Strategy); PAERA v1.0 §1.3 (GovStack Vision)"]
  ]
}));

// ---------- 5.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 5.4",
  title: "Play 3 — Translate between the minister and the architects",
  runtime: "~5 min",
  words: 560,
  paeraAnchor: "§2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation",
  singleMessage: "The third play is a translator — it turns a minister's policy goal into architecture terms and a joint agenda, and architecture decisions back into outcomes a minister understands — so the business side and the IT side can actually decide together.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Play 3 — Translate between the minister and the architects'. Voice-over begins." },
    { text: "The third play addresses the problem at the heart of modern EA work: the business side and the IT side do not share a language. The minister talks outcomes; the architect talks systems. They sit in the same meeting and miss each other. This play is a translator that helps both sides decide together." },
    { cue: "Slide 2 — Title: 'From policy goal to architecture'. Body, single text block: 'Paste the minister's goal in their words — \"every learner should have one record that follows them through school\". The AI returns the capabilities, services and data domains it implies, and the decisions it forces — who owns the authoritative learner, who must consume it, what to build versus reuse.'" },
    { text: "First direction: from policy to architecture. You paste the minister's goal in their words — every learner should have one record that follows them through school. The AI returns what that means in architecture terms: the capabilities involved, the services, the data domains, and the decisions it forces — who owns the authoritative learner, which bodies must consume it, what must be built versus reused. The minister's sentence becomes a structured set of architecture decisions, without losing what the minister actually asked for." },
    { cue: "Slide 3 — Title: 'From architecture back to outcomes'. Body, single text block: 'Paste a technical decision — \"the Examination Authority will consume the Learner Registry over the data-exchange backbone\". The AI returns what it means for citizens and the minister: parents stop re-entering details, the single record becomes possible, the flagship can be delivered.'" },
    { text: "Second direction, just as important: from architecture back to outcomes. You paste a technical decision — the Examination Authority will consume the Learner Registry over the data-exchange backbone. The AI returns what that means for the minister and the citizen: parents stop re-entering their child's details, the single learner record becomes possible, the flagship can be delivered. The architecture stops being a black box the minister has to trust, and becomes a set of choices they can understand and own." },
    { cue: "Slide 4 — Title: 'The joint agenda'. Body, single text block: 'Give it an operating-model question — \"should we move to once-only data sharing for education\". The AI decomposes it into business-only decisions, IT-only decisions, and the joint decisions that need both in the room — naming what each side needs from the other. That is the EA Board agenda.'" },
    { text: "The play's most useful output is the joint agenda. You give it an operating-model question — should we move to once-only data sharing for education — and it decomposes the decision into three parts: the business decisions only the ministry can make, the technical decisions only the architects can make, and the joint decisions that need both in the room. For each joint decision, it names what each side needs from the other to decide well. That agenda is exactly what an EA Board meeting needs to be productive instead of two groups talking past each other." },
    { cue: "Slide 5 — Title: 'The lingua-franca job, with a tool'. Body, single text block: 'An EA exists to give business and IT a shared language for the new work of redesigning services. This play does the translating in real time — but it does not replace the shared vocabulary and the standing forum. The metamodel must still be agreed; the Board must still meet.'" },
    { text: "This is the second great purpose of an EA, made practical. An Enterprise Architecture exists to give the business side and the IT side a shared language for the new work of redesigning services. This play is a tool that does the translating in real time. But a caution: the tool translates; it does not replace the shared vocabulary and the standing forum. The metamodel still has to be agreed, and the Board still has to meet. The play makes the translation faster; the architecture is what makes it stick." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'This play translates a minister's goal into architecture and back, and decomposes a decision into business, IT and joint parts — so the two sides can finally decide together.'" },
    { text: "So the third play is a translator between the minister and the architects. Goal to architecture, architecture to outcome, and the joint agenda that gets both sides deciding together. It is the shared-language job an EA exists to do — with a tool that makes it happen in the meeting, not just in theory." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Play 3 — Translate between the minister and the architects'.",
      "Standard ITU template. Subtitle (KP1 / 5.4). No images."],
    ["2", "Policy-to-architecture slide. Single text block.",
      "The minister's sentence becomes architecture decisions. Text-only."],
    ["3", "Architecture-to-outcomes slide. Single text block.",
      "The reverse direction — the architecture stops being a black box. Text-only."],
    ["4", "Joint-agenda slide. Single text block on the business/IT/joint decomposition.",
      "The most useful output — what an EA Board meeting needs. Text-only."],
    ["5", "Lingua-franca slide. Single text block.",
      "Carries the lingua-franca argument — the tool translates, the architecture makes it stick. The pivotal slide."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Decompose an operating-model question into a joint agenda",
    problem: "An architect facing an operating-model decision needs to surface what the joint business-IT decisions actually are, so they can convene the right people with a productive agenda rather than two groups talking past each other.",
    prompt: "Below is an operating-model question my [ministry / agency] is considering — for example 'should we move to once-only data sharing', 'should we redesign service delivery around digital identity': [paste the question and 1–3 paragraphs of context, including known legal, policy or technical constraints]. Decompose it into (a) the pure business decisions only organisational management can make (policy, legal, who owns what), (b) the pure IT decisions only the architect can make (technology choice, security model, integration pattern), and (c) the joint decisions that require business and IT in the same room. For each joint decision, frame it in plain language both groups understand, and name what each side needs from the other to decide well. Output: a 3-column table (business / IT / joint), plus a 5-bullet 'agenda for the first joint meeting' with named decisions.",
    io: "Input: a 1–3 paragraph operating-model question with context. Output: a 3-column decomposition plus a meeting agenda.",
    safeguard: "The lines between 'business decision' and 'IT decision' are politically negotiated in every country. Use the output to open and structure the conversation, not to settle who decides what — the decomposition is a starting point, not a verdict."
  },
  metadataRows: [
    ["Working title",          "Play 3 — Translate between the minister and the architects"],
    ["YouTube-optimised title", "Using AI to bridge ministers and architects: translate policy goals into architecture and back"],
    ["Description (60 words)", "Ministers talk outcomes; architects talk systems; they miss each other in the same meeting. This video shows public-sector architects an AI play that translates a policy goal into architecture decisions and back into outcomes, and decomposes an operating-model question into business, IT and joint decisions — the agenda that gets both sides deciding together. Joint-agenda prompt in the description."],
    ["Tags",                    "AI for EA, business-IT alignment, lingua franca, operating model, digital transformation, enterprise architecture, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — the play); §4.1 (methodology framing)"],
    ["PAERA citations",         "§2.3 Role of Enterprise Architecture; §4.5 Digital Co-creation"],
    ["External-link list",      "PAERA v1.0 §2.3 (Role of Enterprise Architecture); PAERA v1.0 §4.5 (Digital Co-creation)"]
  ]
}));

// ---------- 5.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 5.5",
  title: "Play 4 — Draft your governance artefacts",
  runtime: "~4 min",
  words: 540,
  paeraAnchor: "§4.2.1 Management; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "The fourth play drafts the institutional documents governance needs — the Board terms of reference, the review-gate checklist, the gate-decision paper — so you arrive at the meeting with a strong draft to edit, not a blank page to dread.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Play 4 — Draft your governance artefacts'. Voice-over begins." },
    { text: "The fourth play drafts the documents that make governance real — and that architects most dread starting. A Board terms of reference. A review-gate checklist. A gate-decision paper for a specific project. These are formal, structured, and slow to write from scratch. The play gets you a strong draft to edit." },
    { cue: "Slide 2 — Title: 'The Board terms of reference'. Body, single text block: 'Give it your country's roles. It drafts a ToR with purpose, the binding decision scope spelled out as specific decision types, membership, cadence, reporting line and escalation — a one-to-two-page document to take to the chair.'" },
    { text: "First, the Board terms of reference. You give the AI your country's relevant roles — the digitalisation officer, the sector CIOs, the registry owners, the data-protection regulator. It drafts a terms of reference with the parts that matter: the purpose, the binding decision scope spelled out as specific decision types, the membership, the cadence, the reporting line, the escalation path. You get a one-to-two-page institutional document to take to the chair, instead of a blank page and a deadline." },
    { cue: "Slide 3 — Title: 'The review-gate checklist'. Body, single text block: 'Give it your principles and shared blocks. It drafts the intake questions, what a pass looks like for each, an exception form with a sunset date, and the decision-log fields — the operational heart of governance, drafted in minutes.'" },
    { text: "Second, the review-gate checklist — the questions every project answers before funding. You give it your adopted principles and the shared building blocks you have. It drafts the intake questions, what a pass looks like for each, an exception form with a sunset date, and the fields for the decision log. This is the operational heart of governance, and the play gives you a working draft of it in minutes." },
    { cue: "Slide 4 — Title: 'The gate-decision paper'. Body, single text block: 'Paste a real project proposal — the scholarship programme that wants its own learner list. It drafts the gate questions answered, a recommended ruling (consume the registry, or a time-boxed exception), and the decision-log entry. You arrive at the Board with a prepared paper; the Board still rules.'" },
    { text: "Third, the gate-decision paper for a real project. You paste a project proposal — the scholarship programme that wants its own learner list — and the AI drafts the gate questions answered, a recommended ruling, consume the registry or a time-boxed exception, and the decision-log entry. You arrive at the Board with a prepared paper. The Board still rules — but it rules on a clear, structured recommendation instead of an argument made on the spot." },
    { cue: "Slide 5 — Title: 'Legal review is not optional'. Body, single text block: 'The documents are institutional, and the binding decision scope interacts with your laws. The AI draft is a starting point for counsel, never the final text. A Board claiming authority it does not legally hold is overruled on first test, and the overrule sets a precedent.'" },
    { text: "One firm caution with this play. The documents it drafts are institutional, and some of them — especially the Board's binding decision scope — interact with your country's laws. The AI draft is a starting point for your legal counsel, never the final text. A Board that claims authority it does not legally hold will be overruled the first time a powerful ministry tests it, and that overrule sets a precedent that is hard to undo. Draft fast with the play; ratify slowly, with counsel." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'This play drafts the Board ToR, the review-gate checklist and the gate-decision paper — so governance arrives as a strong draft to edit, with legal review before anything is adopted.'" },
    { text: "So the fourth play drafts the institutional documents governance needs. The terms of reference, the review-gate checklist, the gate-decision paper. Use it to skip the dread of the blank page — and route every document that touches authority through your legal counsel before it is adopted." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §4.2.1 Management; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Play 4 — Draft your governance artefacts'.",
      "Standard ITU template. Subtitle (KP1 / 5.5). No images."],
    ["2", "Board-ToR slide. Single text block.",
      "The institutional document to take to the chair. Text-only."],
    ["3", "Review-gate-checklist slide. Single text block.",
      "The operational heart of governance, drafted fast. Text-only."],
    ["4", "Gate-decision-paper slide. Single text block.",
      "A prepared Board paper; the Board still rules. Text-only."],
    ["5", "Legal-review slide. Single text block.",
      "The firm caution — draft fast, ratify slowly with counsel. The operative beat."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Draft a gate-decision paper for a real project",
    problem: "An architect operating the Board needs to turn a project proposal into a prepared gate-decision paper — the questions answered, a ruling, the log entry — so the Board ratifies a clear recommendation rather than arguing on the spot.",
    prompt: "Below is a project proposal for [country X]'s [sector] sector [paste it: what it will build or buy, the functions it needs] and the shared building blocks that already exist [list them; note which are authoritative and available, not just planned]. Draft a gate-decision paper. (1) Answer the gate questions: does a shared block already exist for what this builds; which data domains does it touch and does it consume the owner's copy; does it meet the principles; is the sourcing choice deliberate. (2) Recommend a ruling: consume the shared block, or grant a written exception with a sunset date and reason. (3) Draft the decision-log entry (what was decided, why). Output: the answered questions, the recommended ruling, and the decision-log entry.",
    io: "Input: a project proposal and the existing shared building blocks. Output: answered gate questions, a recommended ruling, and a decision-log entry.",
    safeguard: "The ruling is the Board's to make, not the model's — the paper prepares the decision. And validate that any 'shared block exists' claim is real (authoritative and available, not merely planned), or you will block a project against something that cannot yet serve it."
  },
  metadataRows: [
    ["Working title",          "Play 4 — Draft your governance artefacts"],
    ["YouTube-optimised title", "Using AI to draft EA governance documents: Board ToR, review gate, decision paper"],
    ["Description (60 words)", "The documents that make governance real are formal and slow to start. This video shows public-sector architects an AI play that drafts the Board terms of reference, the review-gate checklist and a gate-decision paper for a real project — so you arrive with a strong draft to edit. One firm rule: legal review before anything touching authority is adopted. Gate-paper prompt in the description."],
    ["Tags",                    "AI for EA, EA governance, terms of reference, review gate, EA board, enterprise architecture, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — the play); §4.1 (governance within methodology)"],
    ["PAERA citations",         "§4.2.1 Management; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §4.2.1 (Management); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 5.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 5.6",
  title: "Play 5 — Generate comparator cases and a sector-transfer plan",
  runtime: "~4 min",
  words: 540,
  paeraAnchor: "§5.7 Recommended Roadmap; §5.4 Organisational Assessment & Roadmap",
  singleMessage: "The fifth play generates the persuasion material — comparator-country cards tuned to your context with real sources, and a one-page plan to run the method on a new sector — for the briefings and pitches where you need evidence and a path.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Play 5 — Generate comparator cases and a sector-transfer plan'. Voice-over begins." },
    { text: "The fifth play produces the material you need to persuade and to spread the method: comparator cases for a briefing, and a transfer plan for a new sector. Both are research-heavy and slow by hand. The play drafts them — with one strict rule about sources." },
    { cue: "Slide 2 — Title: 'Comparator cards, tuned to your context'. Body, single text block: 'Give it your country's characteristics — size, income, governance type, region, constraints. It returns 3–5 genuinely comparable countries, prioritising African and developing-country examples: for each, why it is comparable, what they built, one transferable lesson, and a public source.'" },
    { text: "First, comparator cards. You give the AI your country's characteristics — size, income level, governance type, region, the constraints you face. It returns three to five genuinely comparable countries, prioritising African and other developing-country examples: for each, why it is comparable, what they actually built, one transferable lesson, and a public source for every substantive claim. Instead of always reaching for Estonia, you get signposts that look like your country, which land far better in a cabinet briefing." },
    { cue: "Slide 3 — Title: 'The strict rule — cite or discard'. Body, single text block: 'Every claim needs a real, checkable source — and AI invents plausible citations that do not say what the card claims, or do not exist. Open the source for every example. If it does not document the claim, throw that example out. A fabricated citation caught in a cabinet meeting discredits the whole briefing.'" },
    { text: "Here is the strict rule for this play, because it is where AI is most dangerous. Every claim on a comparator card must have a real, checkable source — and AI will invent plausible-looking citations that do not say what the card claims, or do not exist at all. So the rule is: cite or discard. Open the source for every example. If it does not actually document what the card says, throw that example out. A comparator card with a fabricated citation, caught in a cabinet meeting, discredits your whole briefing." },
    { cue: "Slide 4 — Title: 'The sector-transfer plan'. Body, single text block: 'Give it a new sector's bodies. It returns a one-page plan: the bodies classified, this sector's equivalent of the single learner record, the five phase deliverables named for this sector, and a suggested first two waves. The fastest way to start the method on a sector you have just been handed.'" },
    { text: "Second, the sector-transfer plan. The method you have built on education transfers to health, to agriculture, to social protection — only the institutions and the data domains change. You give the AI a new sector's bodies, and it returns a one-page plan: the bodies classified, this sector's equivalent of the single learner record, the five phase deliverables named for this sector, and a suggested first two waves. It is the fastest way to start the method on a sector you have just been handed." },
    { cue: "Slide 5 — Title: 'A plan to start with, not a finding'. Body, single text block: 'The transfer plan guesses the duplicated domain and the likely gaps for the new sector — and it may guess wrong, because it has not looked. Use it to start Discovery faster, not to skip it. The real gaps come from running the method on the real sector.'" },
    { text: "One caution on the transfer plan, the same as every play. It is a starting structure, not an assessment. It guesses the duplicated data domain and the likely gaps for the new sector — and it may guess wrong, because it has not looked. Use it to start Discovery faster, not to skip it. The real gaps come from running the method on the real sector, not from a plan written before anyone has looked." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'This play generates comparator cards tuned to your context and a sector-transfer plan — fast — under one rule: cite every source or discard the claim, and confirm by looking.'" },
    { text: "So the fifth play gives you the persuasion and spread material — comparator cards that look like your country, and a plan to take the method to a new sector. Use it freely, under one discipline: cite or discard, and confirm by looking. Evidence you cannot verify is worse than none." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0 §5.7 Recommended Roadmap; §5.4 Organisational Assessment & Roadmap. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Play 5 — Generate comparator cases and a sector-transfer plan'.",
      "Standard ITU template. Subtitle (KP1 / 5.6). No images."],
    ["2", "Comparator-cards slide. Single text block.",
      "Signposts that look like your country, not always Estonia. Text-only."],
    ["3", "Cite-or-discard slide. Single text block.",
      "The strict rule — where AI is most dangerous. The operative beat. Text-only."],
    ["4", "Sector-transfer-plan slide. Single text block. Names health/agriculture/social protection as where the method applies.",
      "ToR §4.4 portability note — sectors named as transfer targets, not worked examples. Text-only."],
    ["5", "Start-not-finding slide. Single text block.",
      "The transfer plan starts Discovery, it does not replace it. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the references."]
  ],
  aiTip: {
    title: "Generate sourced comparator-country cards",
    problem: "An architect building a case upward wants comparator countries tuned to their context — not the usual OECD trio — each with a real, checkable source, for a cabinet briefing or donor pitch.",
    prompt: "My country is [country X], with these characteristics: [population, income classification, governance type (unitary / federal / hybrid), region, key political constraints, current digital-government maturity]. Drawing on publicly documented EA or digital-government programmes — give priority to African and other developing-country examples — list 3 to 5 countries with similar characteristics that have a published national EA framework or comparable coordination function. For each: country name, similarity rationale (one sentence on why it is comparable to [country X]), what they actually built (2–3 bullets), one transferable lesson, and a public source URL for each substantive claim. Avoid examples where the public information is marketing rather than substance. Output: per-country cards plus a 2-bullet 'most transferable lessons' summary.",
    io: "Input: your country's characteristics. Output: 3–5 comparator cards with cited sources plus a transferable-lessons summary.",
    safeguard: "AI invents citations. Open the cited source for every card and discard any example whose source does not actually document the claim — discard the claim, not just the citation. Be especially careful with contested programmes; cite the contested sources too, not only the favourable ones."
  },
  metadataRows: [
    ["Working title",          "Play 5 — Generate comparator cases and a sector-transfer plan"],
    ["YouTube-optimised title", "Using AI for comparator countries and a sector-transfer plan — with one rule: cite or discard"],
    ["Description (60 words)", "For a briefing you need comparator countries that look like yours; to spread the method you need a transfer plan. This video shows public-sector architects an AI play that generates both — comparator cards with real sources and a one-page sector-transfer plan — under one strict rule: cite every source or discard the claim, because AI invents citations. Comparator-card prompt in the description."],
    ["Tags",                    "AI for EA, comparator countries, signposts, sector transfer, citations, enterprise architecture, PAERA, GovStack, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — the play); §4.4 (sector portability — transfer plan); §4.6 (real-life comparator examples)"],
    ["PAERA citations",         "§5.7 Recommended Roadmap; §5.4 Organisational Assessment & Roadmap"],
    ["External-link list",      "PAERA v1.0 §5.7 (Recommended Roadmap); PAERA v1.0 §5.4 (Organisational Assessment & Roadmap)"]
  ]
}));

// ---------- 5.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 5.7",
  title: "Keep AI honest — verify, cite, and protect data",
  runtime: "~5 min",
  words: 580,
  paeraAnchor: "ToR §4.3 (AI integration); §3.4.2 Digital Data",
  singleMessage: "The safeguards that make every play safe: verify each output against a named source, cite or discard, never paste confidential or personal data, and keep the decision human — the difference between AI that helps and AI that quietly harms.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Keep AI honest — verify, cite, and protect data'. Voice-over begins." },
    { text: "Every play in this topic produces a draft fast. This last part is about the discipline that keeps those drafts from becoming liabilities. Four safeguards. Skip them, and AI becomes a fast way to put wrong facts, fabricated sources, or leaked data into a government decision." },
    { cue: "Slide 2 — Title: 'Verify against a named source'. Body, single text block: 'Every fact the AI states is a hypothesis until you check it against a document, a system, or a named person. The plausible section number, the confident figure, the specific claim — each is as convincing whether it is right or invented. Verify before you forward.'" },
    { text: "First, verify. Every fact an AI states is a hypothesis until you check it against a real source — a document, a system, a named person. The plausible section number, the confident figure, the specific claim: each is exactly as convincing whether it is right or invented. This is not a small risk. A wrong reference in a deliverable, a made-up statistic in a cabinet briefing — these damage your credibility more than a gap in the work would. Verify before you forward. Always." },
    { cue: "Slide 3 — Title: 'Cite or discard'. Body, single text block: 'Any claim about the outside world — what a country did, what a standard requires, what a benchmark shows — needs a real, checkable source. AI fabricates citations as fluently as it writes prose. Open the source. If it does not say what the AI claims, discard the claim, not just the citation.'" },
    { text: "Second, cite or discard — the rule from the comparator play, applied everywhere. Any claim about the outside world — what another country did, what a standard requires, what a benchmark shows — needs a real, checkable source. AI fabricates citations as fluently as it writes prose. So open the source. If it does not say what the AI claims, discard the claim, not just the citation. An unsourced claim you cannot verify is a liability you are choosing to carry into a meeting." },
    { cue: "Slide 4 — Title: 'Never paste confidential or personal data'. Body, single text block: 'Do not paste citizen personal data, security configurations, unpublished cabinet papers, or anything your data-protection act covers into a public AI tool. The plays never need it — run them with placeholders (\"a learner\", \"country X\"). Treat the prompt box as a public place, because it is.'" },
    { text: "Third, protect the data. Do not paste citizen personal data, security configurations, unpublished cabinet papers, or anything your data-protection act covers into a public AI tool. The plays never need it: you can run every one with placeholders — a learner, a powerful programme, country X — instead of real names and records. Your data-protection act applies to what you type into a chatbot exactly as it applies to any other system. Treat the prompt box as a public place, because it is." },
    { cue: "Slide 5 — Title: 'Keep the decision human'. Body, single text block: 'The AI prepares; the human decides. The Board rules on the gate paper. The architect defends the ranking. Counsel approves the ToR. The minister owns the roadmap. When something the AI drafted turns out wrong, the answer is never \"the AI said so\" — it is your name on the decision.'" },
    { text: "Fourth, keep the decision human. Across every play, the pattern holds: the AI prepares, the human decides. The Board rules on the gate paper. The architect defends the ranking. The legal counsel approves the terms of reference. The minister owns the roadmap. Accountability cannot be handed to a tool that has no stake in the outcome and cannot be questioned afterward. When something the AI drafted turns out wrong, the answer is never the AI said so — it is your name on the decision. Use AI to decide faster and better, never to avoid deciding." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Verify against a source, cite or discard, never paste confidential data, and keep the decision human — four safeguards that separate AI that helps from AI that quietly harms.'" },
    { text: "So these are the safeguards that make the plays safe. Verify every fact. Cite or discard every claim. Protect the data. Keep the decision human. None of them slows you down much, and together they are the difference between AI that makes you faster and AI that makes you confidently, accountably wrong. Use the plays freely — inside these four rules." },
    { cue: "Slide 7 — Title: 'Sources'. Body: ITU Knowledge Products contract Terms of Reference §4.3 (AI integration); PAERA v1.0 §3.4.2 Digital Data. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Keep AI honest — verify, cite, and protect data'.",
      "Standard ITU template. Subtitle (KP1 / 5.7). No images."],
    ["2", "Verify slide. Single text block.",
      "The first safeguard — every fact is a hypothesis. Text-only."],
    ["3", "Cite-or-discard slide. Single text block.",
      "AI fabricates citations fluently — discard the claim, not just the citation. Text-only."],
    ["4", "Protect-the-data slide. Single text block.",
      "The data-protection safeguard — placeholders, not real records. The 'prompt box is a public place' beat."],
    ["5", "Keep-the-decision-human slide. Single text block.",
      "Accountability stays human — 'your name on the decision'. The pivotal slide."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt).",
      "Quotable take-home line; closes the topic."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Cites the contract ToR and PAERA §3.4.2 Digital Data — verifiable anchors."]
  ],
  aiTip: {
    title: "Strip a prompt of sensitive data before you send it",
    problem: "Before pasting context into a public AI tool, an architect needs to remove anything their data-protection act covers — but it is easy to miss a name or a record. This meta-prompt produces a de-identified version and a list of what was removed.",
    prompt: "Below is a prompt I am about to send to a public AI assistant for EA work [paste your intended prompt, including the context you would paste in]. Rewrite it so that any personal data, real citizen records, security configuration, unpublished or confidential government material is replaced with neutral placeholders (e.g. 'a learner', 'a powerful programme', 'country X', 'the sector registry'), while keeping enough structure for the task to still work. Then list everything you replaced and why it was sensitive. Output: the de-identified prompt, then a table of (removed item / category / placeholder used).",
    io: "Input: the prompt and context you intend to send. Output: a de-identified prompt plus a table of what was removed and why.",
    safeguard: "This check reduces risk; it does not guarantee compliance. When you are unsure whether something is safe to paste, treat it as unsafe and consult your data-protection officer — and remember that the placeholders must not be reversible to the real records by anyone reading the prompt."
  },
  metadataRows: [
    ["Working title",          "Keep AI honest — verify, cite, and protect data"],
    ["YouTube-optimised title", "Four safeguards for using AI safely in government EA work: verify, cite, protect data, decide"],
    ["Description (60 words)", "AI produces drafts fast — and can put wrong facts, fabricated sources or leaked data into a government decision. This video gives public-sector architects the four safeguards that make every AI play safe: verify against a named source, cite or discard, never paste confidential or personal data, and keep the decision human. AI data-stripping prompt in the description."],
    ["Tags",                    "responsible AI, AI safeguards, data protection, verification, citations, AI for EA, enterprise architecture, digital government, public sector architect"],
    ["Playlist (YouTube)",      "KP1 — Topic 5: AI plays for EA, hands-on"],
    ["ToR §4 coverage",         "§4.3 (AI integration — safeguards); §4.1 (methodology framing)"],
    ["PAERA citations",         "§3.4.2 Digital Data (data handling); anchored to ToR §4.3 for the AI discipline"],
    ["External-link list",      "ITU Knowledge Products contract ToR §4.3 (AI integration); PAERA v1.0 §3.4.2 (Digital Data)"]
  ]
}));

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes"),

  H3("4.1 Design standard — the split-screen usability test"),
  P("The bar for every video in Topic 5 is the split-screen test set at the kick-off call: a practitioner watching the video on one half of the screen must be able to run the play on the other half. For Topic 5 this test is the most literal of all the topics — each video's AI usage tip is a copy-paste prompt the listener runs immediately to produce the artefact the video describes: a sharpened prompt, a ranked gap analysis, a re-use business case, a joint agenda, a gate-decision paper, sourced comparator cards, a de-identified prompt. The video teaches the play and its safeguard; the prompt is the play."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template per the Knowledge Products and Video Materials Guide §3.i: Title text Arial Bold 28pt; Body text Arial 18pt; Background colour #E5F5FB. Text only — no images. Diagrams and text boxes are permitted only where strictly necessary; where used, all labels remain in plain text. No country emblems, no government-agency logos. Where the plays use a concrete example they reuse the fictional Progressa education sector (the learner registry, the examination authority, the scholarship programme) as plain-text labels only, for continuity with Topics 2–4. The recurring single-sentence summary slide at the end of each subtopic uses the body type at 28pt rather than 18pt to make the line screenshot-friendly for architects who want to reuse the message. Note: this topic's slides carry copy-paste prompt text; the prompt itself lives in the per-video YouTube description and the AI usage tip, not on a slide."),

  H3("4.3 No individuals on screen"),
  P("Per the Guide §3 Note, no individuals appear in any video. Two options are open: an AI avatar narrator generated by ITU's production pipeline from an uploaded portrait image, or computer-screen-only voice-over with no narrator visible. The choice is ITU's; FiscalAdmin's scripts are agnostic to the option chosen. There are no 'speaker on camera' cues anywhere in the bundle."),

  H3("4.4 Voice and tone"),
  P("Direct address (\"as the architect,\" \"you paste,\" \"the AI returns\"). No third-person distance. Plain language at approximately an eighth-grade English level. The EA vocabulary established across Topics 1–4 — gap analysis, building block, review gate, terms of reference — is used as known. The register is candid about AI's failure modes: the topic repeatedly says, in plain words, that AI states wrong facts in a confident tone, fabricates citations as fluently as it writes prose, and has no accountability — so that the enthusiasm for the plays is matched by the discipline that makes them safe. The recurring spine across all seven videos is one phrase, said differently each time: the AI drafts, you decide. Concrete in every beat — a vague prompt sharpened, a duplicate registry flagged, a fabricated citation caught, a learner's record kept out of the prompt box."),

  H3("4.5 External-link list and 'Find the link in the description'"),
  P("Every subtopic includes an external-link list in its metadata. Every script references external materials with the convention 'Find the link in the description' rather than reading URLs aloud. ITU's production pipeline compiles the per-video link list into the YouTube description. The aggregate list across all seven subtopics is compiled in Section 6 for ITU's reference."),

  H3("4.6 GitBook companion content"),
  P("Each subtopic in this bundle ships with the video script, the slide specification, the AI usage tip and the metadata. The GitBook companion content — written, in-depth implementation guidance per the Guide §2 — is produced as a parallel deliverable, structured to mirror the same subtopic numbering. For Topic 5 the GitBook companion is the natural home for the full prompt library: every play's prompt in copy-paste form, a worked example output for each (with the verification step shown), and a one-page 'AI safeguards' card consolidating 5.1 and 5.7. Because the prompts are the deliverable here, the GitBook companion matters more for this topic than any other — it is where a practitioner copies the play from, rather than transcribing it off a video. Cross-references between video and GitBook content use the topic/subtopic numbers."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The v0.1 drafting raised the editorial and structural decisions listed below. These are forwarded for ITU's discussion at the Tuesday weekly call."),

  H3("5.1 PAERA-fidelity and source anchoring"),
  P("Topic 5 is about AI method and tooling, so several videos are anchored to the contract Terms of Reference §4.3 (AI integration) rather than to PAERA — this is deliberate, not an omission: 5.1 (ground rules) and 5.7 (safeguards) have no genuine PAERA home and are anchored to ToR §4.3, with 5.7 additionally citing §3.4.2 Digital Data for the data-protection content. The five play videos are each anchored to the PAERA section of the EA activity the play supports, and every one was checked against PAERA v1.0: §3.1.3 Readiness Assessment, §5.1 Capabilities Assessment and §5.4 Organisational Assessment & Roadmap (5.2); §5.6 Sourcing Strategy and §1.3 GovStack Vision (5.3); §2.3 Role of Enterprise Architecture and §4.5 Digital Co-creation (5.4); §4.2.1 Management and §5.4 (5.5); §5.7 Recommended Roadmap and §5.4 (5.6). Two points for ITU: (a) §4.5 'Digital Co-creation' is used in 5.4 as the anchor for AI-assisted business–IT co-creation — confirm the fit is acceptable; (b) no PAERA section was invented to decorate AI content, per the citation discipline."),

  H3("5.2 Editorial tone calls"),
  P("Four tone choices are sharp and deserve a deliberate keep / soften / cut decision: 'AI is a drafting partner, not an oracle … a fast way to be confidently wrong' in 5.1; 'AI fabricates citations as fluently as it writes prose' in 5.6 and 5.7; 'treat the prompt box as a public place, because it is' in 5.7; and 'when something the AI drafted turns out wrong, the answer is never the AI said so — it is your name on the decision' in 5.7. All four are intended to land as candid and protective rather than alarmist — confirm the register suits ITU's channel voice, especially given ITU's own interest in responsible AI use."),

  H3("5.3 Structural calls"),
  P("Three structural items. (1) Overlap with the embedded prompts in Topics 1–4: each earlier topic carried one AI prompt in passing; Topic 5 consolidates the recurring prompt types into named, reusable plays and adds the discipline and safeguards around them. The plays deliberately reuse the same prompt shapes shown earlier (the gap analysis, the re-use business case, the joint agenda, the comparator card) rather than inventing new ones — confirm this reads as the hands-on consolidation the methodology intends, not repetition. (2) The two structural arguments are carried by 5.3 (the re-use business case is the planning-enables-re-use argument made into a number) and 5.4 (the translation play is the lingua-franca argument made into a tool) — confirm they land as authentic plays, not as bolted-on threads. (3) Tool naming: the embedded prompts say 'copy-paste into Claude' (consistent with Topics 1–4 and the contract's AI workflow), while the scripts say 'AI' / 'the AI' generically — see 5.5 below."),

  H3("5.4 Visual production calls"),
  P("This topic has no diagram-style centrepiece visuals; its slides are text lists and, implicitly, prompt text. One production decision for ITU: whether the copy-paste prompt for each play should appear on screen at all (it is long and would not meet the Arial 18pt readability bar) or live only in the YouTube description and the GitBook companion. The current scripts assume the prompt is delivered via the description and companion, not shown full-screen; the slides carry only the play's steps and its safeguard. Confirm this matches ITU's production preference."),

  H3("5.5 AI-tool-naming call"),
  P("The embedded prompts are written for the contract's AI workflow and say 'copy-paste into Claude', consistent with Topics 1–4; the narration refers to 'AI' and 'the AI' generically so the discipline is tool-agnostic. Confirm whether ITU wants the prompts to name the specific assistant (Claude) or to use a generic 'your AI assistant' for a vendor-neutral channel. The change, if wanted, is a single find-and-replace in the build script and does not affect the method."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the seven subtopics for ITU's video production pipeline. To be split per subtopic and inserted into the corresponding YouTube descriptions. All references are public anchors the ITU reviewer can verify (the Terms of Reference is the contract document ITU holds)."),
  genericTable([2000, 7700], ["Subtopic", "Sources referenced"], [
    ["5.1", "ITU Knowledge Products contract Terms of Reference §4.3 (AI integration); GovStack knowledge base (govstack.global)."],
    ["5.2", "PAERA v1.0 (paera.govstack.global) — §3.1.3 (Readiness Assessment); §5.1 (Capabilities Assessment); §5.4 (Organisational Assessment & Roadmap)."],
    ["5.3", "PAERA v1.0 §5.6 (Sourcing Strategy); §1.3 (GovStack Vision)."],
    ["5.4", "PAERA v1.0 §2.3 (Role of Enterprise Architecture); §4.5 (Digital Co-creation)."],
    ["5.5", "PAERA v1.0 §4.2.1 (Management); §5.4 (Organisational Assessment & Roadmap)."],
    ["5.6", "PAERA v1.0 §5.7 (Recommended Roadmap); §5.4 (Organisational Assessment & Roadmap)."],
    ["5.7", "ITU Knowledge Products contract Terms of Reference §4.3 (AI integration); PAERA v1.0 §3.4.2 (Digital Data)."]
  ]),
  spacer(120),
  P("All references are publicly accessible and verifiable, except the contract Terms of Reference, which ITU holds. The PAERA section numbers were verified against PAERA v1.0 during drafting (see calibration item 5.1).")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP1 Module 5 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP1 Topic 5 (AI plays for EA — hands-on), Architect-facing, aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP1 Topic 5 Script Bundle v0.1 · 26 June 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP1_Module5_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
