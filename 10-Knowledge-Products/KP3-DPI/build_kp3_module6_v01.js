// Build KP3 Module 6 — Video Script Bundle v0.1
// v0.1 (2 Oct 2026): written afresh on the KP3 outline and content plan, version 0.3, section 1, module 6.
//   Each single message is the outline's, word for word. Every source cited is one the outline names for that
//   subtopic. The worked examples of steps 6 to 9 (E6 to E9, with E5 for the findings) are quoted as those files
//   stand after the two reconciling rounds of 1 October 2026; every figure about Progressa is invented and
//   marked illustrative. Nothing is built in this module; the demonstration of 6.9 is a storyboard until recorded.
// Education DPI Roadmap · Module 6 — From a proven foundation to a national roadmap
// ITU compliance: subtopic numbering, standalone videos (no intros/outros), text-only slides, no individuals on screen,
//   one AI usage prompt per subtopic, "Find the link in the description" for external references.
// Helper functions are those of the KP2 bundles, as the KP3 module 2 bundle of version 0.2 and the KP3 module 4
//   bundle of version 0.1 carry them.

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

// Persona for KP3 Module 6 (the Strategist register, outline v0.3, section 1)
const PERSONA_S = "S (Strategist) — the head of a ministry's digital unit or the programme lead who ranks what to fund, sets it in order over the years, and prepares the case for the minister, the finance ministry and the development partners";

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
  const head = new TableRow({ tableHeader: true, cantSplit: true, children: headers.map((h, i) => tableHeaderCell(h, cols[i])) });
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: cols,
    rows: [head, ...rows.map(r => new TableRow({ cantSplit: true, children: r.map((c, i) => tableCell(c, cols[i])) }))] });
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
  // Rendered on the recap slide and never narrated, in the words the kit's renderer gives it, so that the
  // .docx and the Markdown rendering carry the same box.
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
    ["Persona",        PERSONA_S],
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

// The worked examples and the storyboard are written in the body as plain H3, P and genericTable calls with
// literal column and header arrays, so that the Markdown rendering (bundle_to_md.py), which reads the body only,
// carries them as well as the .docx.

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
    children: [new TextRun({ text: "Module 6 — From a proven foundation to a national roadmap",
      font: ARIAL, size: 24, italics: true, color: COLOR_ACCENT })] }),
  spacer(600),
  specTable([
    ["Document",            "Video script bundle for Module 6 of KP3"],
    ["Version",             "v0.1 — written on the KP3 outline and content plan, version 0.3 (1 October 2026)"],
    ["Date",                "2 October 2026"],
    ["Module persona",      PERSONA_S],
    ["Subtopics",           "Ten subtopics (6.1 – 6.10), each shipped as one standalone video of about five minutes"],
    ["Module runtime",      "Approximately 50 minutes across ten standalone videos"],
    ["Method steps taught", "Steps 6 to 9 of the nine: gap consolidation and prioritisation, the roadmap, the investment breakdown, and validation and revision"],
    ["Worked examples",     "Progressa's gap register, roadmap, investment case and validation round (E6 to E9), with the domain report and maturity table (E5), as reconciled on 1 October 2026; every figure about Progressa is invented and illustrative"],
    ["Build",               "Nothing is built in this module. The demonstration of 6.9 needs only the scoring criteria of the assessment toolkit; until it is recorded, its storyboard stands in its place"],
    ["Prepared by",         "FiscalAdmin OÜ"]
  ]),
  spacer(140),
  P("Module 6 teaches how a government team turns one proven education service into a national roadmap. The ten videos teach how to gather the gaps into one ranked register, decide what to fund first by weighing cost against reuse, set the roadmap over time in horizons and waves, set out the investment case the way a finance ministry reads it, source each block without lock-in, write down the governance that keeps shared blocks shared, have the roadmap validated and adopted, keep the foundation healthy and safe after launch, use AI assistants at every step without handing over a decision, and carry the method to another sector. Every video is taught from public sources and shown on Progressa, the fictional country of the Knowledge Products. Each subtopic carries an AI usage tip with a prompt ready to copy. External references use the convention 'Find the link in the description'."),
  pageBreak()
);

// ---------- DOCUMENT CONTEXT ----------
body.push(
  H1("1. Document context"),

  H3("1.1 What this document is"),
  P("This document collects the ten video scripts of Module 6 of Knowledge Product 3, the Education DPI Roadmap, with the specification of their text-only slides, the AI usage tip of each subtopic, the data that describe each video, the worked example of each subtopic, and a storyboard for the one demonstration walkthrough the module carries, in subtopic 6.9. It is written from the KP3 outline and content plan, version 0.3, which fixes for each subtopic its single message, its sources, its worked example and its AI usage tip."),

  H3("1.2 What Module 6 teaches, and what it does not claim"),
  P("Module 6 is written for the Strategist: the head of a ministry's digital unit or the programme lead who has to rank what to fund, set it in order over the years, cost it, choose how each block is sourced, set up its governance, have it adopted and keep it healthy. It teaches the last four of the method's nine steps — gap consolidation and prioritisation, the roadmap, the investment breakdown, and validation and revision — and with them the prioritisation of investments, the sequencing of implementation and the governance structures that section 3.3 of the terms of reference asks for. Nothing is built in this module. It is taught from public sources: PAERA, the GovStack reference architecture; UNDP's playbook on the DPI approach and its compendium on the potential of DPI; the United Nations' Universal DPI Safeguards Framework, with ITU's course on it; the World Bank's study of the cost drivers of identification systems and its ID4D practitioner's guide; Bulletin No 52 of the Bank for International Settlements; and four GovStack specifications where a subtopic names them. Where a part of the content has no public source, the script says that it is the team's own practice."),
  P("The worked examples are Progressa's, and every figure in them is invented and marked illustrative. Subtopics 6.1, 6.3, 6.4 and 6.7 quote the worked examples of method steps 6 to 9 — the gap register (E6), the roadmap (E7), the investment case (E8) and the validation round (E9), with the domain report and maturity table (E5) for the findings — as those files stand after the two reconciling rounds of 1 October 2026. Every name, figure, band and identifier quoted is the one those files carry. The examples of subtopics 6.2, 6.5, 6.6, 6.8, 6.9 and 6.10, and the agenda of the validation workshop in 6.7, are written in this bundle for Progressa: they quote only identifiers and figures that the reconciled examples carry, and everything else in them is built for this example."),
  P("Four statements hold throughout, as the reconciling rounds settled them. The learner registry PLR has been a member of Linkup, the data exchange that KP2 set up, since KP2, but it is not yet the authoritative learner register: the roadmap makes it so (component C-06), and learners' records are loaded through the five tiers that module 3 teaches. An education service checks a person through the sign-in of PNIA, the identity authority, with the person present, and keeps the identifier PNIA gives it, never the national number; PNIA's one service on the exchange is a read of a person by national number, which only the examination authority PNEA may call. The ministry of education, MoEYS, is not yet a member of the exchange. And PayPro, Progressa's payment provider, is reached through the payer bank of the government's Payments block. It is the block that is a member of the exchange."),

  H3("1.3 How to read this document"),
  P("Section 2 gives the module at a glance. Section 3 holds the script of each subtopic, with its slide specification, its on-screen practice box, its AI usage tip and its metadata, followed by its worked example and, for subtopic 6.9, the storyboard of its demonstration walkthrough. Section 4 collects the production notes. Section 5 records the open calibration items raised during drafting. Section 6 is the aggregate list of external links."),
  P("Within each script, three rendering conventions are used: shaded blocks are on-screen visual or production cues; regular paragraphs are the spoken voice-over; the slide specification, AI usage tip and metadata follow the script."),

  pageBreak()
);

// ---------- AT A GLANCE ----------
body.push(
  H1("2. Module 6 at a glance"),
  P("Ten standalone videos, all in the Strategist register. Total runtime approximately fifty minutes. Each video has one single message, taken word for word from the KP3 outline, and can be understood on its own."),
  genericTable([700, 2700, 4700, 1600], ["#", "Title", "Single message", "Runtime"], [
    ["6.1", "From findings to priorities: the gap register",
      "Gather every gap into one register and rank each by impact, urgency, feasibility and what depends on it, so the list you take to your minister is short and ordered.", "~5 min"],
    ["6.2", "What to fund first: cost against reuse",
      "A shared block is paid for once and used by many, so judge each investment by its cost against the number of services that will use it, a sum only the whole government can do.", "~5 min"],
    ["6.3", "The roadmap over time: horizons, waves and tracks",
      "A roadmap sets the years ahead in horizons and the first horizon in waves, each wave with a governance track, a track for each domain and one visible service that shows the result.", "~5 min"],
    ["6.4", "The investment case your finance ministry can read",
      "Set out the roadmap's cost the way a finance ministry reads it: by wave and component with a low and a high estimate, by domain, by source of funds, and with the returns expected.", "~5 min"],
    ["6.5", "Sourcing each block without lock-in",
      "For each block decide what your own teams build, what you outsource and what you do with a partner, and write open standards and the terms for leaving into every contract.", "~5 min"],
    ["6.6", "Governance that keeps shared blocks shared",
      "Shared blocks stay shared when it is written down who decides money and policy, who coordinates the programme, and who runs each block and sets its technical rules.", "~5 min"],
    ["6.7", "Validate, revise, adopt",
      "A roadmap becomes the government's own only when the people it binds have commented, every comment has a written answer, and an authority has adopted it.", "~5 min"],
    ["6.8", "Keep the foundation healthy and safe",
      "After launch, indicators read every month, quarter and year, quality checks and reconciliation on every load, and a regular review against the published safeguards keep the foundation trusted and safe.", "~5 min"],
    ["6.9", "The AI plays, step by step",
      "At every step of the method and of the build there is a task an AI assistant can draft and a check only a person can make, and no decision is handed over.", "~5 min"],
    ["6.10", "Carry the method to another sector",
      "Change the sector's register and services and keep the five domains, the nine steps and the foundational blocks, and the same method produces a roadmap for health, agriculture or social protection.", "~5 min"]
  ]),
  pageBreak()
);

// ============================================================================
// 3. THE SCRIPTS
// ============================================================================
body.push(H1("3. The scripts"));

// ---------- 6.1 ----------
body.push(...renderSubtopic({
  num: "3.1 Subtopic 6.1",
  title: "From findings to priorities: the gap register",
  runtime: "~5 min",
  words: 453,
  paeraAnchor: "PAERA v1.0, section 5.4, step 5, and section 3.3.3; UNDP, The DPI Approach: A Playbook, 2023, page 23. The four criteria and the form of the register are the team's own",
  singleMessage: "Gather every gap into one register and rank each by impact, urgency, feasibility and what depends on it, so the list you take to your minister is short and ordered.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'From findings to priorities: the gap register'. Voice-over begins." },
    { text: "An assessment ends with many findings, spread over five domain reports. A minister cannot act on all of them. A minister can act on a short list, in order, with a reason for each place on it." },
    { cue: "Slide 2 — Title: 'From finding to gap'. Body, three text rows: 'A finding says what exists today.' 'A gap says the distance to what the country needs.' 'Each gap names the findings it comes from.'" },
    { text: "Start by turning each finding into a gap. A finding says what exists today. A gap says the distance between what exists and what the country needs. Write every gap into one register, whatever its domain, and let each gap name the findings it comes from, so that anyone can trace a line of the roadmap back to its evidence. UNDP's playbook on the DPI approach works the same way: from national priorities, to the gaps, to goals and targets. Progressa's register, built as an example, turns 15 findings into 14 gaps." },
    { cue: "Slide 3 — Title: 'Four criteria, three bands'. Body, five text rows: 'Impact — on service delivery, efficiency and strategic goals: 1 to 3.' 'Urgency — is something planned waiting for it: 1 to 3.' 'Feasibility — can existing bodies, law and budget close it: 1 to 3.' 'Dependencies — what others depend on comes first.' 'Score 8 or 9: first band. 6 or 7: second. 5 or less: third.'" },
    { text: "Rank each gap on four criteria. Impact asks how much the gap holds back service delivery, efficiency and the government's goals, the three things by which PAERA's assessment procedure ranks its recommendations. Urgency asks whether something already planned is waiting for it. Feasibility asks whether existing bodies, law and budget can close it, or whether it needs new law. Rate each of these three from 1 to 3 and add them. A score of 8 or 9 is the first band, 6 or 7 the second, 5 or less the third. The fourth criterion, dependencies, sets the order inside a band: what others depend on comes first. The criteria are the team's own practice." },
    { cue: "Slide 4 — Title: 'Progressa's first band (illustrative)'. Body, a plain-text table of four rows: 'G-02 — no joint body to decide education's shared infrastructure — score 8 — quick win.' 'G-06 — no common school identifier — score 8 — quick win.' 'G-08 — MoEYS is not on the national exchange — score 8 — quick win.' 'G-05 — no authoritative learner record — score 8 — depends on G-01, G-06 and G-11.'" },
    { text: "In Progressa, four gaps reach the first band, each with a score of 8. Three are quick wins that existing bodies can close within six months: a joint body to decide education's shared infrastructure, one school identifier, and the ministry of education joining the national exchange. PAERA recommends this pairing: target the foundations, and make some quick wins that show the benefits early. The fourth gap matters most: there is no authoritative learner record. It depends on two gaps of the second band, the legal basis and the link to national identity. Both are brought forward without changing their band, and the law, the slowest, starts first." },
    { cue: "Slide 5 — Title: 'Patterns across domains'. Body, three text rows: 'One missing record holds back three domains (G-05, with G-09, G-11 and G-12).' 'The ministry of education is outside infrastructure that already runs (G-08, G-12).' 'The law and the budget come before the build (G-01, G-03, G-04).'" },
    { text: "Then read the register across domains. In Progressa, three patterns appear. The missing learner record holds back three domains: digital data, identity and the exchange. The ministry of education stays outside infrastructure that already runs, the identity authority's sign-in and the national exchange, and that is the cheapest kind of gap to close. And the law and the budget come before the build. These patterns are what you explain to the minister, because they show why the order makes sense." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Gather every gap into one register and rank each by impact, urgency, feasibility and what depends on it, so the list you take to your minister is short and ordered.' Below it, the on-screen practice box (not narrated)." },
    { text: "One register, ranked on four criteria into three bands. Your minister receives a short list in order, with a reason for each place." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, section 5.4, step 5, and section 3.3.3; UNDP, The DPI Approach: A Playbook, 2023, page 23. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'From findings to priorities: the gap register'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.1) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "From-finding-to-gap slide. Three text rows: a finding, a gap, each gap naming its findings.",
      "The step in plain words. Text-only."],
    ["3", "Criteria slide. Four text rows for the criteria and one for the bands.",
      "The rule of the worked example E6, with PAERA's three grounds of impact. Text-only."],
    ["4", "Progressa slide. A plain-text table of four rows: gap, what is missing, score, quick win or dependencies.",
      "The worked example, built for Progressa; every value illustrative. Text-only."],
    ["5", "Patterns slide. Three text rows, each with its gap identifiers.",
      "What the Strategist explains to the minister. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and the UNDP playbook."]
  ],
  practice: "a gap register with one row for each gap, its findings, its proposed ratings with reasons, its band and its dependencies",
  aiTip: {
    title: "Gather the gaps of five domain reports into one ranked register",
    problem: "After the scoring step the gaps sit in five domain reports, each written by a different team. The Strategist needs one register that a prioritisation workshop can work from. This prompt gathers the gaps, proposes a rating on the criteria with a reason for each, and marks the gaps that appear in more than one domain.",
    prompt: "Below are the findings of the five domain reports of an assessment of digital public infrastructure in [country X], each with its identifier, its domain and its evidence: [paste the findings]. Below is the rule for setting priorities: [paste the criteria, the ratings from 1 to 3, the bands and the rule for dependencies]. Turn every finding into a gap: the distance between what exists and what the country needs. Give each gap an identifier, its domain and the findings it traces to; where two findings describe one gap, merge them and name both. For each gap, propose a rating from 1 to 3 on impact, urgency and feasibility, with one sentence of reason for each rating, and add the ratings into a score. Propose the band, list what each gap depends on, and mark as a quick win any gap that existing bodies can close within six months. Mark every gap that appears in more than one domain. Do not drop a finding: list any finding you could not turn into a gap. Output: a gap register with one row for each gap, its findings, its proposed ratings with reasons, its band and its dependencies, followed by a short list of the gaps that cross domains.",
    io: "Input: the findings of the five domain reports, with their identifiers, and the rule for setting priorities. Output: a gap register with one row for each gap, its findings, its proposed ratings with reasons, its band and its dependencies, and a list of the gaps that cross domains.",
    safeguard: "The ratings are proposals for the prioritisation workshop, which decides. Bring the register to the workshop with every rating open to change, and record each change and its reason in the register; a rank that no one in the workshop questioned is a rank the model chose."
  },
  metadataRows: [
    ["Working title",          "From findings to priorities: the gap register"],
    ["YouTube-optimised title", "From assessment findings to a ranked gap register: impact, urgency, feasibility and what depends on what"],
    ["Description (60 words)", "An assessment leaves many findings in five domain reports. This video turns them into one gap register, rates each gap on impact, urgency and feasibility, orders it by what depends on it, and reads the patterns across domains. Shown on Progressa's illustrative register. Five minutes for strategists preparing a short, ordered list for their minister. An AI prompt drafts the register."],
    ["Tags",                    "gap analysis, prioritisation, gap register, digital public infrastructure, DPI roadmap, education DPI, quick wins, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (prioritisation of investments); §4.1 (step 6 of the method, with its output, template, decision point and validation); §4.6 (example of the step's output); §6 (templates); §4.3 (AI integration — gap register prompt)"],
    ["PAERA citations",         "Section 5.4, step 5; section 3.3.3"],
    ["External-link list",      "PAERA v1.0, sections 5.4 and 3.3.3 (https://paera.govstack.global/); UNDP, The DPI Approach: A Playbook, 2023, page 23 (https://www.undp.org/publications/dpi-approach-playbook)"]
  ]
}));
body.push(
  H3("Worked example — 6.1: Progressa's gap register, the first band and the gaps it brings forward (illustrative)"),
  P("Taken from the worked example of method step 6, E6, as it stands after the reconciling rounds of 1 October 2026. Each gap is rated from 1 to 3 on impact, urgency and feasibility; the score is their sum. The full register holds 14 gaps, traced to the 15 findings of E5."),
  genericTable([800, 1100, 3200, 1300, 1000, 1300, 1000], ["Gap", "Domain", "The gap", "Impact, urgency, feasibility", "Score and band", "Depends on", "Quick win"], [
    ["G-02", "GOV", "No joint body to decide education's shared infrastructure with PDGA", "2, 3, 3", "8, First", "—", "yes"],
    ["G-06", "DAT", "No common school identifier", "2, 3, 3", "8, First", "—", "yes"],
    ["G-08", "INT", "The ministry of education, MoEYS, is not on the national exchange", "2, 3, 3", "8, First", "—", "yes"],
    ["G-05", "DAT", "No authoritative learner record, and no learner-level data for planning", "3, 3, 2", "8, First", "G-01, G-06, G-11", "no"],
    ["G-01", "GOV", "No legal basis for a learner register or for sharing learner data", "3, 3, 1", "7, Second", "—", "no"],
    ["G-11", "IDN", "No link from a learner's record to the national identity", "3, 2, 2", "7, Second", "G-01, G-08", "no"]
  ]),
  P("The order the roadmap must follow, as E6 hands it to step 7: G-02, G-06 and G-08 first, as quick wins with no dependencies, then G-05. G-01 and G-11 are brought forward without raising their band, because G-05 depends on them; G-01 is started in the first wave, beside the three quick wins, because new law is the slowest to pass."),
  P("The gaps that repeat across domains, as E6 reads them in three patterns. One missing record holds back three domains: the missing learner record (G-05) is a data gap, but it is also why identity cannot be reused (G-11, G-12) and why exchanges stay on spreadsheets (G-09). The ministry of education is outside infrastructure that already runs: PNIA's sign-in and Linkup both work today, and MoEYS uses neither (G-08, G-12). The law and the budget come before the build: the register cannot be filled lawfully without G-01 and G-04 closed, and it will not outlive its first funding without G-03."),
  P("The matrix of impact against effort, as E6 sets it out; effort is read as the inverse of feasibility."),
  genericTable([2200, 2500, 2500, 2500], ["", "Low effort (feasibility 3)", "Medium effort (feasibility 2)", "High effort (feasibility 1)"], [
    ["High impact (3)", "—", "G-03, G-04, G-05, G-11", "G-01"],
    ["Medium impact (2)", "G-02, G-06, G-07, G-08, G-12, G-13", "G-09, G-10", "—"],
    ["Low impact (1)", "G-14", "—", "—"]
  ]),
  P("The development priorities of each domain, as E6 gives them, shortened. Governance: pass the legal basis and the rules for children's data; set up the joint body; secure a recurrent budget. Access: record school connectivity; open an assisted channel. Digital Data: make PLR the authoritative learner register, on one school identifier, with quality rules from the first day. Interoperability: put MoEYS and the Payments block on Linkup; replace spreadsheets with services once the register exists. Digital Identity: link learners to PNIA and check people through PNIA's sign-in.")
);

// ---------- 6.2 ----------
body.push(...renderSubtopic({
  num: "3.2 Subtopic 6.2",
  title: "What to fund first: cost against reuse",
  runtime: "~5 min",
  words: 472,
  paeraAnchor: "PAERA v1.0, sections 3.3.3 and 4.5 ('Budget'); World Bank, ID4D Practitioner's Guide, version 1.0, 2019, page 48; World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 1. The step that weighs cost against reuse is the team's own",
  singleMessage: "A shared block is paid for once and used by many, so judge each investment by its cost against the number of services that will use it, a sum only the whole government can do.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'What to fund first: cost against reuse'. Voice-over begins." },
    { text: "Every ministry asks for money for its own system, and each request looks reasonable on its own. The question a finance ministry rarely hears is how many services each system will serve. That answer changes what should be funded first." },
    { cue: "Slide 2 — Title: 'Who pays first?'. Body, four text rows: 'Why invest in digital identity before any service uses it?' 'How can a ministry build services for people without it?' 'Target the foundations, and make some quick wins.' 'Plan for the whole government, and fund what many agencies reuse.'" },
    { text: "PAERA names the problem plainly. Why would anyone invest in digital identity when no digital service uses it yet? And how can a ministry build services for people without it? Its answer is to target the foundational elements while making some quick wins that show the benefits. PAERA also gives the reason to plan for the whole government: it makes a strong case for funding platforms, registries and workflows that many agencies reuse. Inside one project, building your own looks quicker. Across the government, it means paying again for something that already exists." },
    { cue: "Slide 3 — Title: 'Cost against reuse'. Body, four text rows: 'Each candidate block: a low and a high cost.' 'Beside it: the services that will use it, and the blocks that depend on it.' 'Fund first what others depend on and many services use.' 'A dedicated budget for platforms used across government.'" },
    { text: "The method is simple to state. List each candidate block with its cost, from a low to a high estimate. Beside it, list the services in your plans that will use it, and the blocks that depend on it. A block that others depend on and many services use is funded first, even when it costs more. PAERA recommends dedicated budgets for platforms used across government, and the World Bank's guide for identity systems asks for a complete cost-benefit analysis of the options. No public source gives a method that weighs cost against reuse, so this step is the team's own, drawn from its implementation experience in several countries." },
    { cue: "Slide 4 — Title: 'Progressa's table (illustrative)'. Body, a plain-text table of four rows: 'MoEYS on the exchange (C-04) — USD 80 to 120 thousand — four components depend on it — wave 1.' 'The learner register PLR (C-06) — USD 600 to 900 thousand — used by registration, statistics, scholarships and examinations — wave 2.' 'The connection to PNIA's sign-in (C-07) — USD 150 to 220 thousand — used by registration and each later education service — wave 2.' 'The Payments block on the exchange (C-11) — USD 120 to 180 thousand — used by the scholarship pilot — wave 4.'" },
    { text: "Here is Progressa's table, built as an example; every figure in it is illustrative. The ministry's place on the national exchange costs least, 80 to 120 thousand dollars, and four other components depend on it, so it is funded in the first wave. The learner register costs most, 600 to 900 thousand dollars, but four services in the roadmap use it: registration, statistics, scholarships and examinations. It comes in the second wave, with the identity connection. The Payments block's place on the exchange serves one service so far, the scholarship pilot, and waits for the fourth wave. The order that results is the roadmap's own." },
    { cue: "Slide 5 — Title: 'Reuse, priced (illustrative)'. Body, three text rows: 'Connecting to the identity authority's sign-in: USD 150 to 220 thousand.' 'Building identity for 11.5 million people of school age, at USD 4 to 11 a person registered: USD 46 to 126.5 million.' 'An order of magnitude only. The rate is from a study the World Bank cites (2018, page 1).'" },
    { text: "The reuse that is easiest to see is identity. Progressa's ministry of education does not build an identity for learners. It connects to the identity authority's sign-in, for an illustrative 150 to 220 thousand dollars. A study the World Bank cites puts building a foundational identity system in a low-income country at about 4 to 11 dollars a person registered, and warns that few data points stand behind that figure. For Progressa's 11.5 million people of school age, that is 46 to 126.5 million dollars. The comparison gives an order of magnitude only, but it shows what reuse is worth." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A shared block is paid for once and used by many, so judge each investment by its cost against the number of services that will use it, a sum only the whole government can do.' Below it, the on-screen practice box (not narrated)." },
    { text: "A shared block is paid for once and used by many. Count the services that will use it before you decide what to fund first." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 3.3.3 and 4.5 ('Budget'); World Bank, ID4D Practitioner's Guide, version 1.0, 2019, page 48; World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 1. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'What to fund first: cost against reuse'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.2) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Who-pays-first slide. Four text rows: the two questions, PAERA's two-tier answer, funding what many agencies reuse.",
      "Carries the planning-enables-re-use argument. Text-only."],
    ["3", "Method slide. Four text rows: cost range, services and dependants, the rule of order, a dedicated budget.",
      "The method is the team's own; the slide says so in the voice-over. Text-only."],
    ["4", "Progressa slide. A plain-text table of four rows: block, cost range, use, wave.",
      "The worked example, built for Progressa from the illustrative lines of E8 and the components of E7. Text-only."],
    ["5", "Reuse slide. Three text rows: the connection, the cost of building identity, the warning on the rate.",
      "Every figure marked illustrative or given with its source. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and the two World Bank documents."]
  ],
  practice: "a table of cost against reuse with one row for each candidate block and a proposed order of funding",
  aiTip: {
    title: "Build the table of cost against reuse, and test its assumptions",
    problem: "A list of funding requests says what each system costs, not how many services will use it. This prompt builds the table of cost against reuse from the inventory of services and the cost ranges it is given, proposes an order of funding, and shows how the order changes when one assumption changes.",
    prompt: "Below is the inventory of the services [country X] plans to deliver over the next five years, each with the shared blocks it needs: [paste the inventory]. Below is the cost range of each candidate block, a low and a high estimate, each with its source: [paste the ranges]. Build a table with one row for each candidate block: the block; its cost range as given, with its source; the services in the inventory that will use it; the blocks that depend on it. Use only the costs given here; where a block has no cost, write 'no cost given' and do not estimate one. Propose an order of funding: first the blocks that others depend on, then those used by the most services. Then change one assumption at a time — a service dropped from the plan, a cost at its high end — and say whether the order changes. Output: a table of cost against reuse with one row for each candidate block and a proposed order of funding, followed by a short note on the assumptions that change the order.",
    io: "Input: the inventory of planned services with the blocks each needs, and the cost range of each block with its source. Output: a table of cost against reuse with one row for each candidate block and a proposed order of funding, and a note on the assumptions that change the order.",
    safeguard: "The prompt uses only the costs it is given, and every figure stays marked illustrative until a costing confirms it. Check that each cost in the table carries its source; a range the model filled in for a block with no cost is the error that reaches a finance ministry as a fact."
  },
  metadataRows: [
    ["Working title",          "What to fund first: cost against reuse"],
    ["YouTube-optimised title", "What to fund first: weighing a shared block's cost against the services that will reuse it"],
    ["Description (60 words)", "Every ministry asks for money for its own system. This video shows how to judge each investment by its cost against the number of services that will use it, a sum only someone planning for the whole government can make. Shown on Progressa's illustrative table, with identity reused instead of rebuilt. Five minutes for strategists. An AI prompt builds your table."],
    ["Tags",                    "investment prioritisation, reuse, shared building blocks, whole-of-government planning, DPI financing, digital identity cost, education DPI, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (prioritisation of investments); §4.3 (AI integration — cost-against-reuse prompt)"],
    ["PAERA citations",         "Section 3.3.3; section 4.5, 'Budget'"],
    ["External-link list",      "PAERA v1.0, sections 3.3.3 and 4.5 (https://paera.govstack.global/); World Bank, ID4D Practitioner's Guide, version 1.0, 2019, page 48 (https://documents1.worldbank.org/curated/en/248371559325561562/pdf/ID4D-Practitioner-s-Guide.pdf); World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 1 (https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf)"]
  ]
}));
body.push(
  H3("Worked example — 6.2: Progressa's table of cost against reuse (illustrative)"),
  P("Written in this bundle for Progressa. Each cost range is the illustrative line of the investment case E8, in thousands of US dollars; each use and each dependency is the roadmap's, E7, in its component register and its table of dependencies. No value is derived from any country's figures. No public source gives a method that weighs cost against reuse; the way the table reads reuse is the team's own, drawn from its implementation experience in several countries."),
  genericTable([2300, 1500, 2700, 2000, 1200], ["Candidate block", "Cost, USD thousand (E8)", "Services in the roadmap that use it (E7)", "Components that depend on it (E7, Part 5)", "Funded in (E7)"], [
    ["MoEYS as a member of Linkup, with its own access point (C-04)", "INV-04: 80 to 120", "PEMIS fed from PLR over Linkup (C-09)", "C-06, C-07, C-09, C-11", "Wave 1"],
    ["PLR made the authoritative learner register (C-06)", "INV-06: 600 to 900", "The learner registration service (C-08); PEMIS fed from PLR (C-09); the scholarship pilot (C-12); examination registration (C-15)", "C-07, C-08, C-09, C-12, C-13", "Wave 2"],
    ["PLR and the registration service connected to PNIA's sign-in (C-07)", "INV-07: 150 to 220", "The learner registration service (C-08), and each later education service (E8, Sheet 4)", "C-08", "Wave 2"],
    ["The Payments block on Linkup as a member, with a payment-status service (C-11)", "INV-11: 120 to 180", "The scholarship pilot (C-12)", "C-12", "Wave 4"]
  ]),
  P("Read this way, the order of funding is the roadmap's own: the block that four others depend on comes first, the register that four services use and the identity connection follow, and the block that serves one service so far comes last. The comparison that shows reuse most plainly is in E8: the link to PNIA costs an illustrative 150 to 220 thousand dollars, against USD 46 million to USD 126.5 million to build identity for Progressa's 11.5 million people of school age at the rate of about $4 to $11 a person registered that a study cited by the World Bank gives (2018, page 1) — an order of magnitude only.")
);

// ---------- 6.3 ----------
body.push(...renderSubtopic({
  num: "3.3 Subtopic 6.3",
  title: "The roadmap over time: horizons, waves and tracks",
  runtime: "~5 min",
  words: 459,
  paeraAnchor: "PAERA v1.0, sections 5.7.1 to 5.7.5 and section 2.3; UNDP, The DPI Approach: A Playbook, 2023, page 23; Universal DPI Safeguards Framework, United Nations, 2024, page 6 (the five stages of the life cycle). The form of the roadmap is the team's own",
  singleMessage: "A roadmap sets the years ahead in horizons and the first horizon in waves, each wave with a governance track, a track for each domain and one visible service that shows the result.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The roadmap over time: horizons, waves and tracks'. Voice-over begins." },
    { text: "A ranked list is not yet a plan. A plan says what happens in which year, who does it, and what people will see at each step. That is what the roadmap over time adds to the priorities." },
    { cue: "Slide 2 — Title: 'Horizons, then waves'. Body, four text rows: 'H1 Foundation — 2027 to 2028.' 'H2 Scale — 2029 to 2030.' 'H3 Extend — 2031 to 2033.' 'The first horizon in detail: four waves of six months.' Design note: figure F13 of the written guide draws the horizons and waves on one timeline; the slide stays text-only." },
    { text: "Set the years ahead in horizons, and write only the first horizon in detail. Progressa's roadmap, built as an example, has three horizons: foundation in 2027 and 2028, scale in 2029 and 2030, and extension from 2031 to 2033. The first horizon runs 24 months, in four waves of six months. PAERA orders a country's start in four phases, from inception to mass-scale transformation. Wave is the roadmap's own word, used inside the first horizon; phase is PAERA's word. UNDP's playbook ends its scoping assessment with the same step: develop the roadmap." },
    { cue: "Slide 3 — Title: 'Inside each wave'. Body, four text rows: 'A governance track opens every wave.' 'A track for each domain with work in the wave.' 'A beacon: one service people can see.' 'A wave summary: what must be true before the following wave.'" },
    { text: "Each wave has the same parts. It opens with a governance track, because the domain tracks cannot start lawfully or be paid for without it. Then comes a track for each domain that has work in the wave. A beacon project is the roadmap's name for a service people can see, which shows the foundation working. Every wave closes with a summary of what must be true before the following one starts. And each component moves through the five stages of the life cycle that the Universal DPI Safeguards Framework names, from conception and scoping to operations and maintenance." },
    { cue: "Slide 4 — Title: 'Progressa's first horizon (illustrative)'. Body, four text rows: 'Wave 1 — decide, and join what already runs.' 'Wave 2 — build the register.' 'Wave 3 — beacon B1: register once.' 'Wave 4 — beacon B2: scholarships paid to the right learner.'" },
    { text: "Here are Progressa's four waves. The first decides and joins what already runs: a joint board of the ministry of education and the digital government authority, the drafting of the law, one school identifier, and the ministry's membership of the exchange. The second builds the register and connects it to the identity authority's sign-in; before the third starts, the register holds the records of one district, and at least 95 per cent of them pass the quality gates. The third opens the first beacon: a parent registers a child once. The fourth pays scholarships to verified learners through the Payments block." },
    { cue: "Slide 5 — Title: 'The critical path'. Body, three text rows: 'C-02 → C-06 → C-07 → C-08 → C-14.' 'The law is drafted in wave 1 and must be in force before the national rollout.' 'Nothing is scheduled before what it depends on.' Design note: figure F14 of the written guide draws the matrix of dependencies; the slide stays text-only." },
    { text: "Last, the dependencies. For each component the roadmap lists what it waits for, and the longest chain is the critical path. In Progressa it runs from the law, through the register, the identity connection and the registration service, to the rollout in all 24 districts. The amendment to the education act closes the slowest gap of all, so it is drafted in the first wave, and the rollout waits until it is in force. PAERA describes enterprise architecture as the bridge between the business side and IT. The roadmap puts its target state in order, on one timeline that both sides read." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A roadmap sets the years ahead in horizons and the first horizon in waves, each wave with a governance track, a track for each domain and one visible service that shows the result.' Below it, the on-screen practice box (not narrated)." },
    { text: "Horizons for the years ahead, waves for the first horizon. Each wave opens with governance, works through each domain and ends with a service people can see." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 5.7.1 to 5.7.5 and section 2.3; UNDP, The DPI Approach: A Playbook, 2023, page 23; Universal DPI Safeguards Framework, United Nations, 2024, page 6. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The roadmap over time: horizons, waves and tracks'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.3) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Horizons slide. Three text rows for the horizons and one for the waves.",
      "Figure F13 (the roadmap over time: horizons and waves) belongs to the written guide and is not on the slide. Text-only."],
    ["3", "Wave slide. Four text rows: governance track, domain tracks, beacon, wave summary.",
      "The form of the roadmap is the team's own. Text-only."],
    ["4", "Progressa slide. Four text rows, one for each wave of the first horizon.",
      "The worked example E7, built for Progressa; every date illustrative. Text-only."],
    ["5", "Critical-path slide. Three text rows: the chain of components, the law, the rule of order.",
      "Figure F14 (the matrix of dependencies) belongs to the written guide. Carries the shared-picture argument. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA, the UNDP playbook and the safeguards framework."]
  ],
  practice: "a draft of the waves of the first horizon, each with its governance track, domain tracks, beacon and summary",
  aiTip: {
    title: "Draft the waves of the first horizon, and check their order",
    problem: "Once the priorities are set, someone must put them into waves of six months without scheduling anything before the work it depends on. This prompt drafts the waves of the first horizon from the list of priorities and the table of dependencies, and checks every component against what it waits for.",
    prompt: "Below is the ranked list of gaps for [country X], each with its band and the components proposed to close it: [paste the list]. Below is the table of dependencies, one row for each component with the components it waits for: [paste the table]. The first horizon runs [number] months from [start month and year], in waves of six months. Draft the waves. Open each wave with a governance track; place each component in the earliest wave its dependencies allow; give each wave one beacon, a service people can see, where one is possible; end each wave with a summary of what must be true before the following wave starts. Then check every component against the table: list any component placed before a component it waits for, and mark those that share a wave with it, so that the order inside the wave can be confirmed. Do not add a component that is not in the list. Output: a draft of the waves of the first horizon, each with its governance track, domain tracks, beacon and summary, followed by a list of the dependency conflicts found.",
    io: "Input: the ranked gaps with their components, the table of dependencies, and the length and start of the first horizon. Output: a draft of the waves of the first horizon, each with its governance track, domain tracks, beacon and summary, and a list of the dependency conflicts found.",
    safeguard: "Dates are proposals until the budget cycle and the owners of the work confirm them. Check each wave against the year in which its money can arrive and against each owner's own calendar; a wave the budget cannot pay for in time moves, whatever the dependencies allow."
  },
  metadataRows: [
    ["Working title",          "The roadmap over time: horizons, waves and tracks"],
    ["YouTube-optimised title", "Writing the DPI roadmap over time: horizons, six-month waves, governance and domain tracks, and beacon services"],
    ["Description (60 words)", "A ranked list is not yet a plan. This video shows how a roadmap sets the years ahead in horizons and the first horizon in six-month waves, each opened by governance, worked through each domain and closed by a service people can see. Shown on Progressa's illustrative roadmap, with its critical path. Five minutes for strategists. An AI prompt drafts the waves."],
    ["Tags",                    "DPI roadmap, implementation sequencing, roadmap horizons, waves, beacon projects, critical path, education DPI, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (implementation sequencing); §4.1 (step 7 of the method, with its output, template, decision point and validation); §4.2 (frameworks referenced: PAERA 2.3 and the safeguards framework); §4.5 (roadmaps and implementation plans); §4.6 (example of the step's output); §6 (templates); §4.3 (AI integration — wave-drafting prompt)"],
    ["PAERA citations",         "Sections 5.7.1 to 5.7.5; section 2.3"],
    ["External-link list",      "PAERA v1.0, sections 5.7 and 2.3 (https://paera.govstack.global/); UNDP, The DPI Approach: A Playbook, 2023, page 23 (https://www.undp.org/publications/dpi-approach-playbook); United Nations, Universal DPI Safeguards Framework, 2024, page 6 (https://www.dpi-safeguards.org/framework)"]
  ]
}));
body.push(
  H3("Worked example — 6.3: Progressa's first horizon (illustrative)"),
  P("Taken from the worked example of method step 7, E7, as it stands after the reconciling rounds of 1 October 2026. The roadmap has ten parts: 1, the current state, domain by domain, governance first; 2, the strategic view in three horizons; 3, the first horizon in detail; 4, the later horizons in overview; 5, dependencies and sequencing; 6, resources; 7, the risk register; 8, monitoring and evaluation in three tiers; 9, reconciliation with initiatives already under way; 10, critical success factors. The first horizon is written in full, the later horizons in overview. Figure F13 draws the horizons and waves, and figure F14 the matrix of dependencies."),
  genericTable([800, 1500, 1500, 2600, 3300], ["Wave", "Months", "Components", "Beacon", "Before the following wave starts"], [
    ["W1", "January to June 2027", "C-01, C-02, C-03, C-04", "None yet; the quick wins of this wave (C-01, C-03, C-04) are the visible results", "The board has met at least four times; the school identifier is in use in PEMIS and at PNEA; MoEYS can call a test service on Linkup; the draft amendment is with cabinet"],
    ["W2", "July to December 2027", "C-05, C-06, C-07", "None yet; the register is tested with the records of one district", "PLR holds the records of one district, and at least 95 per cent of them pass the quality gates; a test parent and a test learner over the age of issue can sign in through PNIA"],
    ["W3", "January to June 2028", "C-08, C-09, C-10", "B1 — register once: a parent registers a child once, and the school sees the record the same day", "At least 20,000 learners registered through the service in the pilot province; PEMIS totals for the province come from PLR; the assisted channel open in every district of the province"],
    ["W4", "July to December 2028", "C-11, C-12, C-13", "B2 — scholarships paid to the right learner: each payment is matched to one verified learner", "The end of the first horizon: the foundation runs, and the targets for the end of 2028 in E5 are checked before the second horizon starts"]
  ]),
  P("The later horizons, in overview: H2, 2029 to 2030, takes PLR and the registration service to all 24 districts (C-14) and has PNEA register examination candidates from PLR (C-15); H3, 2031 to 2033, gives parents and learners a view of their records, with consent (C-16). The critical path is C-02 → C-06 → C-07 → C-08 → C-14: the amendment of C-02 closes G-01, the slowest of all the gaps in the register to close, so it is drafted in wave 1, and it must be in force before C-14."),
  P("The matrix of dependencies, as E7 sets it out in Part 5: each component, and the components it waits for."),
  genericTable([2400, 7300], ["Component", "Depends on"], [
    ["C-06", "C-02 (drafted), C-03, C-04"],
    ["C-07", "C-04, C-06"],
    ["C-08", "C-06, C-07"],
    ["C-09", "C-04, C-06"],
    ["C-10", "C-08"],
    ["C-11", "C-04"],
    ["C-12", "C-06, C-11"],
    ["C-13", "C-06"],
    ["C-14", "C-02 (in force), C-05, C-08"],
    ["C-15", "C-14"],
    ["C-16", "C-02, C-14"]
  ])
);

// ---------- 6.4 ----------
body.push(...renderSubtopic({
  num: "3.4 Subtopic 6.4",
  title: "The investment case your finance ministry can read",
  runtime: "~5 min",
  words: 458,
  paeraAnchor: "Universal DPI Safeguards Framework, United Nations, 2024, principle O8, page 25; UNDP, The DPI Approach: A Playbook, 2023, page 44; PAERA v1.0, section 4.5 ('Budget'); World Bank, Understanding Cost Drivers of Identification Systems, 2018, pages 7 and 9. The four sheets are the team's own form",
  singleMessage: "Set out the roadmap's cost the way a finance ministry reads it: by wave and component with a low and a high estimate, by domain, by source of funds, and with the returns expected.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The investment case your finance ministry can read'. Voice-over begins." },
    { text: "A finance ministry does not fund a vision. It funds lines it can read, check and place in a budget year. The investment case turns the roadmap into those lines." },
    { cue: "Slide 2 — Title: 'Sheet 1: by wave and component'. Body, three text rows: 'Every component costed, with a low and a high estimate.' 'Procurement can change the cost of an identity system by 25% to over 100% (World Bank, 2018).' 'Progressa (illustrative): USD 7.6 to 11.7 million over seven years; USD 2.5 to 3.8 million in the first horizon.' Design note: figure F15 of the written guide sets out the four sheets as tables; the slide stays text-only." },
    { text: "The first sheet costs every component of the roadmap, wave by wave. Each line names the component it pays for, so the case and the roadmap can be checked against each other. Each line also gives a low and a high estimate instead of one figure, because the cost of a shared system depends heavily on how it is bought. The World Bank found that procurement strategy can change the overall cost of an identity system by 25 per cent to over 100 per cent. Progressa's case, built as an example, comes to an illustrative 7.6 to 11.7 million dollars over seven years, of which 2.5 to 3.8 million fall in the first horizon." },
    { cue: "Slide 3 — Title: 'Sheets 2 and 3: by domain, and by who pays'. Body, four text rows: 'By domain: digital data the largest share, identity the smallest (illustrative).' 'Three groups of funders: the government's budget, development partners, the private sector.' 'Diversified, phased and sustainable financing (UN, 2024).' 'Four instruments: public budgets, grants, private capital, debt (UNDP, 2023).'" },
    { text: "The second sheet shows the same cost by domain and wave, so a minister sees where the money goes. In Progressa, digital data takes the largest share, because the register is rolled out to all 24 districts, and identity the smallest, because the identity authority is reused. The third sheet names who pays, in three groups: the government's budget, development partners and the private sector. The Universal DPI Safeguards Framework asks for diversified, phased and sustainable financing, with governments leading while the system is built. UNDP's playbook compares four instruments: public budgets, grants, private capital and debt." },
    { cue: "Slide 4 — Title: 'The budget cycle'. Body, four text rows: 'A solid business case before any budget application.' 'An application can take 2 to 3 years before funds are received.' 'Projects funded by donors need a state budget commitment.' 'Progressa asks in 2027 for a recurrent line from the budget year 2029 (illustrative).'" },
    { text: "Then the calendar. PAERA warns that a budget application, backed by a solid business case, can take 2 to 3 years before funds are received, and that projects funded by donors need a state budget commitment to last. So Progressa's ministry asks in 2027 for a recurrent budget line from the budget year 2029, before the partner money ends. Its third sheet shows, as illustrative figures, 3.1 to 4.7 million dollars from the government's budget, 4.1 to 6.4 million from development partners, and 410 to 620 thousand from the private sector." },
    { cue: "Slide 5 — Title: 'Sheet 4: the returns'. Body, four text rows: 'Enrolment paperwork removed; scholarships paid to the right learner; spreadsheet exchanges replaced; reuse by later services.' 'Valued returns over ten years: USD 11 to 19.5 million (illustrative).' 'About 0.9 to 2.6 times the cost.' 'The case rests on reuse.'" },
    { text: "The fourth sheet says what the country gets back. Progressa's case values four returns over ten years: enrolment paperwork removed, scholarships paid to the right learner, spreadsheet exchanges replaced, and reuse by later services. Together they come to an illustrative 11 to 19.5 million dollars, between about 0.9 and 2.6 times the cost. The case does not rest on the top of that range. It rests on reuse: later services pay for neither a register nor an identity check. Keep every figure illustrative until a costing confirms it; the World Bank says that even its own cost model does not predict actual costs." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Set out the roadmap's cost the way a finance ministry reads it: by wave and component with a low and a high estimate, by domain, by source of funds, and with the returns expected.' Below it, the on-screen practice box (not narrated)." },
    { text: "Four sheets: by wave and component, by domain, by who pays, and the returns. Each figure carries its source or the word illustrative." },
    { cue: "Slide 7 — Title: 'Sources'. Body: Universal DPI Safeguards Framework, United Nations, 2024, principle O8, page 25; UNDP, The DPI Approach: A Playbook, 2023, page 44; PAERA v1.0, section 4.5 ('Budget'); World Bank, Understanding Cost Drivers of Identification Systems, 2018, pages 7 and 9. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The investment case your finance ministry can read'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.4) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Sheet 1 slide. Three text rows: the low and high estimate, the procurement finding, Progressa's totals.",
      "Figure F15 (the investment case: its four sheets as tables) belongs to the written guide. Every Progressa figure marked illustrative. Text-only."],
    ["3", "Sheets 2 and 3 slide. Four text rows: the shares by domain, the three groups, principle O8, the four instruments.",
      "Each public statement with its source. Text-only."],
    ["4", "Budget-cycle slide. Four text rows: the business case, the years before funds, the state commitment, Progressa's request.",
      "PAERA 4.5 in plain words. Text-only."],
    ["5", "Returns slide. Four text rows: the four returns, their total, the ratio, the reliance on reuse.",
      "Every figure marked illustrative. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the safeguards framework, the UNDP playbook, PAERA and the World Bank study."]
  ],
  practice: "the four sheets of the investment case with the check of their totals",
  aiTip: {
    title: "Fill the four sheets of the investment case, and check that they agree",
    problem: "An investment case kept by hand in four sheets drifts: a line changed in one sheet is not changed in the others, and a figure arrives with no source. This prompt fills the four sheets from the components of the roadmap and the ranges it is given, checks that they add up to the same totals, and lists every figure that has no stated source.",
    prompt: "Below are the components of the roadmap of [country X], each with its horizon, wave and domain: [paste the component register]. Below are a low and a high estimate for each component, each with its source or the word illustrative: [paste the ranges]. Below are the funding sources under discussion, each with its range and what it would fund: [paste]. Below are the expected returns, each with how it arises: [paste]. Fill four sheets: (1) cost by horizon, wave and component, with subtotals; (2) cost by domain and wave, using the mid-point of each range; (3) funding by source, in three groups: the government's budget, development partners, the private sector; (4) the expected returns. Check that sheets 1 and 3 give the same total range and that sheet 2 equals the mid-point of sheet 1, and show the arithmetic. List every figure that has neither a source nor the word illustrative. Do not invent a figure that was not given. Output: the four sheets of the investment case with the check of their totals, followed by a list of the figures that have no stated source.",
    io: "Input: the component register, the cost ranges with their sources, the funding sources and the expected returns. Output: the four sheets of the investment case with the check of their totals, and a list of the figures that have no stated source.",
    safeguard: "No figure enters the case without a source or the word illustrative. Before the case goes to the finance ministry, trace each figure to its source and recompute the totals yourself; a sum the model reports as matching is not a sum anyone has checked."
  },
  metadataRows: [
    ["Working title",          "The investment case your finance ministry can read"],
    ["YouTube-optimised title", "The DPI investment case in four sheets: by wave and component, by domain, by who pays, and the returns"],
    ["Description (60 words)", "A finance ministry funds lines it can read and check. This video sets out a roadmap's cost in four sheets: by wave and component with low and high estimates, by domain, by source of funds, and with the returns expected, and fits the request to the budget cycle. Shown on Progressa's illustrative case. Five minutes for strategists. An AI prompt fills the sheets."],
    ["Tags",                    "investment case, DPI financing, budget cycle, business case, development partners, cost estimates, education DPI, safeguards framework"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (prioritisation of investments); §4.1 (step 8 of the method, with its output and template); §4.5 (implementation plans); §4.6 (example of the step's output); §6 (templates); §4.3 (AI integration — investment-case prompt)"],
    ["PAERA citations",         "Section 4.5, 'Budget'"],
    ["External-link list",      "United Nations, Universal DPI Safeguards Framework, 2024, principle O8, page 25 (https://www.dpi-safeguards.org/framework); UNDP, The DPI Approach: A Playbook, 2023, page 44 (https://www.undp.org/publications/dpi-approach-playbook); PAERA v1.0, section 4.5 (https://paera.govstack.global/); World Bank, Understanding Cost Drivers of Identification Systems, 2018, pages 7 and 9 (https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf)"]
  ]
}));
body.push(
  H3("Worked example — 6.4: Progressa's investment case in four sheets (illustrative)"),
  P("Taken from the worked example of method step 8, E8, as it stands after the reconciling rounds of 1 October 2026. All amounts are in thousands of US dollars, at constant prices; every value is invented for Progressa and illustrative. Figure F15 sets the four sheets out as tables."),
  genericTable([2600, 2600, 4500], ["Sheet", "What it shows", "Progressa (USD thousand, illustrative)"], [
    ["1. Cost by horizon, wave and component", "16 investment lines, INV-01 to INV-16, each naming its component of E7, with a low and a high estimate", "W1 410 to 640; W2 770 to 1,150; W3 850 to 1,300; W4 480 to 730; total H1 2,510 to 3,820; total H2 3,600 to 5,400; total H3 1,500 to 2,500; total, all horizons, 7,610 to 11,720"],
    ["2. Cost by domain and wave", "The mid-point of the lines of each domain and period", "GOV 330; ACC 2,325; DAT 5,200; INT 1,625; IDN 185; total 9,665"],
    ["3. Funding sources", "Three groups of funders", "Government budget 3,100 to 4,700; development partners 4,100 to 6,400; private sector 410 to 620; total 7,610 to 11,720"],
    ["4. Expected returns over ten years", "Four valued categories, and planning on learner-level data, not valued", "Total valued returns 11,000 to 19,500"]
  ]),
  P("Two lines show why the shares fall as they do. INV-06, making PLR the authoritative register, is 600 to 900; INV-07, connecting PLR and the registration service to PNIA's sign-in, is 150 to 220, under 2 per cent of the total, because Progressa reuses PNIA. The recurrent budget line is requested in wave 2 (C-05) for the budget year 2029, because a budget application can take years before funds are received.")
);

// ---------- 6.5 ----------
body.push(...renderSubtopic({
  num: "3.5 Subtopic 6.5",
  title: "Sourcing each block without lock-in",
  runtime: "~5 min",
  words: 453,
  paeraAnchor: "PAERA v1.0, sections 5.6 and 3.1.1; World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 7; Universal DPI Safeguards Framework, United Nations, 2024, principle F4, page 23, principle O9, page 25, and the risk of unsustainability, page 15; GovStack Sandbox documentation, edition 1.1.1; GovStack testing application and the GovStack page 'How is Compliance Measured?'",
  singleMessage: "For each block decide what your own teams build, what you outsource and what you do with a partner, and write open standards and the terms for leaving into every contract.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Sourcing each block without lock-in'. Voice-over begins." },
    { text: "Lock-in is rarely one bad decision. It is written into contracts, clause by clause, that nobody read for the day the ministry wants to leave. Sourcing decides who builds each block; the contract decides whether you can leave later." },
    { cue: "Slide 2 — Title: 'Three options for each block'. Body, four text rows: 'In-house — what your own teams can build and keep running.' 'Outsourcing — what they cannot, with a risk management framework.' 'Partnership — with firms, agencies, universities or GovStack.' 'Usually a combination of the three.'" },
    { text: "PAERA gives three options for each block. Build in-house what your own teams can realistically create and keep running. Outsource what they cannot, such as software development, cloud services or cybersecurity, and manage the risks with a risk management framework. Work in partnership with technology firms, government agencies, universities or groups such as GovStack. A combination of the three usually gives the most flexibility. PAERA also says what the government's own staff should be: intelligent purchasers, not IT specialists, apart from the few who keep the overall architecture." },
    { cue: "Slide 3 — Title: 'Learn in the sandbox; ask for the evidence'. Body, three text rows: 'The GovStack Sandbox: a demonstration and learning tool, not a production-ready system.' 'GovStack's testing: a self-assessment against the requirements, tests of the interfaces, and a compliance level of 1 or 2.' 'Test the product in your own installation as well.'" },
    { text: "Two things are not options. The GovStack Sandbox is a place to learn: its own pages call it a demonstration and learning tool, and say that it is not a production-ready system. And a product's listing is evidence, not a promise. GovStack's testing pages describe a self-assessment of a product against the functional requirements, tests of its interfaces, and a compliance level of 1 or 2. Ask for those results, and still test the product in your own installation, because no listing tests your installation or your contract." },
    { cue: "Slide 4 — Title: 'Where lock-in comes from'. Body, four text rows: 'Procurement can change the cost of an identity system by 25% to over 100% (World Bank, 2018).' 'Open standards, and an architecture no single vendor controls, guard against it.' 'Avoid vendor lock-in; share open specifications (UN, 2024).' 'Four checks in every contract: open standards named, export, help with leaving, licence terms.'" },
    { text: "The World Bank found that, for identity systems, procurement can change the overall cost by 25 per cent to over 100 per cent. It names open technology standards, and an architecture designed so that no single vendor controls it, as the guard against relying on one supplier. The Universal DPI Safeguards Framework asks that digital public infrastructure avoid vendor lock-in and share open specifications, and it counts lock-in among the causes of unsustainability, with long-term costs. So write four checks into every tender and contract: the open standards named, export of all data and configuration, help with leaving, and licence terms that outlive the contract." },
    { cue: "Slide 5 — Title: 'Progressa's sourcing table (illustrative)'. Body, a plain-text table of four rows: 'Registration service — product bought, configured in-house — the service description exportable at any time.' 'Learner register PLR — product and first load outsourced, data steward in-house — every record and the schema exportable.' 'Identity — PNIA's sign-in, used under an agreement — nothing bought.' 'Payments — the government's Payments block, in partnership with its owner — payment records exportable.'" },
    { text: "Here is Progressa's table, built as an example. The registration service runs on a product the ministry buys, and the ministry's analysts configure it in-house; the contract requires the service description to be exportable at any time. The learner register's product and its first load are outsourced, while the data steward is the ministry's own; every record and the schema must be exportable. Identity is not bought at all: the services use the identity authority's sign-in under an agreement. Payments go through the government's Payments block, in partnership with the ministry of finance, which runs it. Each row names the option chosen and the clause that keeps the ministry free to leave." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'For each block decide what your own teams build, what you outsource and what you do with a partner, and write open standards and the terms for leaving into every contract.' Below it, the on-screen practice box (not narrated)." },
    { text: "Decide for each block who builds it. Then write the standards, the export, the exit and the licence into the contract." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 5.6 and 3.1.1; World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 7; Universal DPI Safeguards Framework, United Nations, 2024, principle F4, page 23, principle O9, page 25, and the risk of unsustainability, page 15; GovStack Sandbox documentation, edition 1.1.1; GovStack testing application and the GovStack page 'How is Compliance Measured?'. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Sourcing each block without lock-in'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.5) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Options slide. Four text rows: in-house, outsourcing, partnership, a combination.",
      "PAERA 5.6's three options, by their own names. Text-only."],
    ["3", "Sandbox-and-evidence slide. Three text rows: the sandbox, GovStack's testing, the ministry's own test.",
      "Each statement as GovStack's own pages make it. Text-only."],
    ["4", "Lock-in slide. Four text rows: the procurement finding, the guard, the safeguards principles, the four checks.",
      "Each public statement with its source. Text-only."],
    ["5", "Progressa slide. A plain-text table of four rows: block, option chosen, clause against lock-in.",
      "The worked example, built for Progressa. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA, the World Bank study, the safeguards framework and GovStack's pages."]
  ],
  practice: "a table of the four lock-in checks with the clause that meets each, or the word missing",
  aiTip: {
    title: "Check a draft tender or contract for lock-in",
    problem: "A draft tender or contract can look complete and still leave the ministry unable to leave. This prompt reads the draft against four checks — the open standards named, export of data, help with leaving, licence terms — and reports, clause by clause, what is present, what is weak and what is missing.",
    prompt: "Below is a draft tender or contract for [the block or service] in [country X]: [paste the text, with its clause numbers]. Read it against four checks. (1) Open standards: does it name the published specification the product must follow, with its edition? (2) Export: can the ministry export all its data and all its configuration, in a documented format, at any time and at no extra charge? (3) Help with leaving: does it set a transition period, the supplier's work in it and its price? (4) Licence: can the ministry keep running what it paid for after the contract ends? For each check, quote the clause that meets it, or write 'missing'; mark a clause 'weak' where it meets the check only in part, and say why. Do not redraft the contract and do not give legal advice. Output: a table of the four lock-in checks with the clause that meets each, or the word missing, followed by a short list of questions for the lawyer and the procurement officer.",
    io: "Input: the draft tender or contract, with its clause numbers. Output: a table of the four lock-in checks with the clause that meets each, or the word missing, and a list of questions for the lawyer and the procurement officer.",
    safeguard: "The prompt points out gaps; the lawyer and the procurement officer decide. Read every clause the model reports as present in the contract itself, because a quotation can be shortened in a way that changes its meaning."
  },
  metadataRows: [
    ["Working title",          "Sourcing each block without lock-in"],
    ["YouTube-optimised title", "Sourcing a DPI building block without lock-in: in-house, outsourcing or partnership, and four checks for every contract"],
    ["Description (60 words)", "Lock-in is written into contracts clause by clause. This video sets out PAERA's three sourcing options for each block, what the World Bank and the UN safeguards framework say about lock-in, what GovStack's sandbox and testing are for, and four checks for every contract. Shown on Progressa's illustrative sourcing table. Five minutes for strategists. An AI prompt checks your draft contract."],
    ["Tags",                    "sourcing strategy, vendor lock-in, procurement, open standards, outsourcing, partnership, GovStack, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (prioritisation of investments: how each block is sourced); §4.2 (frameworks referenced: PAERA, the safeguards framework, GovStack); §4.3 (AI integration — contract check prompt)"],
    ["PAERA citations",         "Sections 5.6 and 3.1.1"],
    ["External-link list",      "PAERA v1.0, sections 5.6 and 3.1.1 (https://paera.govstack.global/); World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 7 (https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf); United Nations, Universal DPI Safeguards Framework, 2024, pages 15, 23 and 25 (https://www.dpi-safeguards.org/framework); GovStack Sandbox documentation, edition 1.1.1 (https://govstack.gitbook.io/sandbox); GovStack testing application (https://testing.govstack.global/en/requirements), with the GovStack website page 'How is Compliance Measured?'"]
  ]
}));
body.push(
  H3("Worked example — 6.5: Progressa's sourcing table (illustrative)"),
  P("Written in this bundle for Progressa; the components are those of the roadmap E7. The options are PAERA's three; the four checks against lock-in are the team's own practice."),
  genericTable([1900, 2700, 2500, 2600], ["Block", "Option chosen", "Reason", "Clause that guards against lock-in"], [
    ["The registration service (C-08)", "Outsourcing for the product and its support; the configuration in-house, by the ministry's analysts", "The ministry can set up and change its services, but cannot maintain a product of its own", "The service description is exportable at any time, in the product's documented format, and the contract names the published specification and its edition"],
    ["The learner register PLR (C-06)", "Outsourcing for the product and the first load; the data steward in-house", "The load needs skills the ministry does not yet have; the data and its quality stay the ministry's", "Every record, every log and the schema exportable as files at any time, at no extra charge; a transition period, with the supplier's work and its price, agreed in the contract"],
    ["Identity (C-07)", "Partnership with PNIA: the services are registered clients of PNIA's sign-in", "Identity is built once, by the identity authority; nothing is bought", "The agreement states the open standard the sign-in follows and the identifier each service keeps"],
    ["Payments (C-11, C-12)", "Partnership with the ministry of finance, which runs the government's Payments block", "One shared block costs less than a payment link for each programme", "The agreement names the open standard the block follows, and keeps every payment record exportable"]
  ])
);

// ---------- 6.6 ----------
body.push(...renderSubtopic({
  num: "3.6 Subtopic 6.6",
  title: "Governance that keeps shared blocks shared",
  runtime: "~5 min",
  words: 465,
  paeraAnchor: "PAERA v1.0, sections 3.1.1 and 3.1.2; UNDP, The DPI Approach: A Playbook, 2023, pages 34 to 41; Universal DPI Safeguards Framework, United Nations, 2024, principle O7, page 25, and table 3.1, page 36; BIS Bulletin No 52, 2022, page 5; GovStack Digital Registries specification, Version 3.0-alpha, DRS-6; GovStack Consent specification, version 1.3.0, section 2, 'What Consent Is'. The three layers are the team's own synthesis",
  singleMessage: "Shared blocks stay shared when it is written down who decides money and policy, who coordinates the programme, and who runs each block and sets its technical rules.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Governance that keeps shared blocks shared'. Voice-over begins." },
    { text: "A shared block stays shared only while someone has the power to keep it shared. Without that, each new project builds its own copy, and each copy is paid for again. Governance written down on one page prevents that." },
    { cue: "Slide 2 — Title: 'Three layers'. Body, four text rows: 'Political authority — decides money and policy.' 'Programme authority — coordinates the programme across ministries.' 'Technical authority — runs each block and sets its technical rules.' 'The three layers are the team's synthesis of public sources.' Design note: figure F16 of the written guide draws the governance structure on one page; the slide stays text-only." },
    { text: "Write governance down in three layers. The political layer decides money and policy. The programme layer coordinates the work across ministries. The technical layer runs each block and sets its technical rules. No public source names these three layers; they are the team's own way of putting together what the sources say. PAERA asks for political leadership shown in words and in budgets, and a dedicated agency with a coordinating role. It describes a committee of key ministers that decides funding and advises the cabinet, and a digital officer in each ministry." },
    { cue: "Slide 3 — Title: 'Roles divided: two published examples'. Body, two text rows: 'Estonia's data exchange: a ministry advocates policy; the Information System Authority registers members and supervises security; the Nordic Institute for Interoperability Solutions runs it day to day; the Data Protection Inspectorate supervises data protection (UNDP, 2023).' 'Brazil's Pix: the central bank both operates the system and sets its rules (BIS, 2022).'" },
    { text: "Two published examples show roles divided this way. UNDP's playbook describes Estonia's data exchange. A ministry advocates policy changes. The Information System Authority registers new members and supervises security. The Nordic Institute for Interoperability Solutions manages its day-to-day operations. The Data Protection Inspectorate supervises compliance with the data protection law. And the Bank for International Settlements describes Brazil's instant payment system, Pix, where the central bank both operates the system and sets its rules. In each case, one named body is answerable for running the shared system or setting its rules. Your page should name such a body for each shared block." },
    { cue: "Slide 4 — Title: 'Progressa's governance on one page (illustrative)'. Body, a plain-text table of four rows: 'Political — a committee of ministers decides the funding; the cabinet adopts the laws and the budget.' 'Programme — PDGA coordinates; the joint board of MoEYS and PDGA decides education's shared infrastructure.' 'Technical — PDGA for Linkup; PNIA for identity; PLR's product owner at MoEYS for the learner register; the ministry of finance for the Payments block.' 'MoEYS's digital officer — each new project uses the shared blocks.'" },
    { text: "Here is Progressa's page, built as an example. At the political layer, a committee of ministers decides the funding, and the cabinet adopts the laws and the budget. At the programme layer, the digital government authority coordinates, and a joint board of the ministry of education and that authority, meeting monthly, decides education's shared infrastructure. At the technical layer each block has one owner: the authority for the exchange, the identity authority for identity, the register's product owner at the ministry of education for the learner register, and the ministry of finance for the Payments block. The ministry's digital officer makes sure each new project uses them." },
    { cue: "Slide 5 — Title: 'Who decides for the learner'. Body, four text rows: 'A guardian or a parent can act for a child through delegated access (GovStack Digital Registries, DRS-6).' 'Consent is a voluntary declaration that can be withdrawn at any time (GovStack Consent, section 2).' 'The rules for children's data come from a regulation.' 'Shared oversight bodies and regular published reports (UN, 2024).'" },
    { text: "Governance also says who may act for a learner. The Digital Registries specification includes delegated access, so that a guardian, a parent or a representative can act for a learner. The Consent specification defines consent as a voluntary declaration that the person may withdraw at any time. Neither replaces the law: in Progressa, the rules for children's data come from a regulation drafted in the first wave. The Universal DPI Safeguards Framework asks for transparent and participatory governance, and recommends shared oversight bodies and regular published reports. One page that the minister and the architect both read gives them a shared language for every decision." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Shared blocks stay shared when it is written down who decides money and policy, who coordinates the programme, and who runs each block and sets its technical rules.' Below it, the on-screen practice box (not narrated)." },
    { text: "Write down who decides money and policy, who coordinates, and who runs each block. Then the shared blocks stay shared." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, sections 3.1.1 and 3.1.2; UNDP, The DPI Approach: A Playbook, 2023, pages 34 to 41; Universal DPI Safeguards Framework, United Nations, 2024, principle O7, page 25, and table 3.1, page 36; BIS Bulletin No 52, 2022, page 5; GovStack Digital Registries specification, Version 3.0-alpha, DRS-6; GovStack Consent specification, version 1.3.0, section 2, 'What Consent Is'. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Governance that keeps shared blocks shared'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.6) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Layers slide. Three text rows for the layers and one saying they are the team's synthesis.",
      "Figure F16 (the governance structure on one page) belongs to the written guide and is not on the slide. Text-only."],
    ["3", "Examples slide. Two text rows: Estonia's data exchange, Brazil's Pix.",
      "Each example with its published source. Text-only; no logos."],
    ["4", "Progressa slide. A plain-text table of four rows: the three layers and the ministry's digital officer.",
      "The worked example, built for Progressa. Carries the shared-picture argument. Text-only."],
    ["5", "Learner slide. Four text rows: delegated access, consent, the regulation, oversight.",
      "Each statement with its specification or framework. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA, the UNDP playbook, the safeguards framework, the BIS bulletin and the two GovStack specifications."]
  ],
  practice: "draft terms of reference for the governance board and a table of who decides what in three layers",
  aiTip: {
    title: "Draft the terms of reference of the governance board, and a table of who decides what",
    problem: "Governance that lives in people's memories changes with every new minister. This prompt drafts, from the list of institutions and their mandates, the terms of reference of the board that decides the shared infrastructure, and a table of who decides what in the three layers.",
    prompt: "Below is the list of institutions involved in digital public infrastructure in [country X], each with its legal mandate as written in law or in a cabinet decision, and the reference of that text: [paste the list]. Below are the shared blocks and the body that runs each today: [paste]. Draft two things. (1) The terms of reference of a board that decides the sector's shared infrastructure: its purpose; its members, by role; what it decides; what it recommends, and to whom; how often it meets; how it records its decisions. (2) A table of who decides what, in three layers: political authority (money and policy), programme authority (coordination across ministries), technical authority (the running of each block and its technical rules). For each decision, name the institution and quote the mandate it rests on. Where no mandate is given for a decision, write 'no mandate found' and do not assign one. Output: draft terms of reference for the governance board and a table of who decides what in three layers, with the mandate behind each decision.",
    io: "Input: the list of institutions with their legal mandates, and the shared blocks with the bodies that run them. Output: draft terms of reference for the governance board and a table of who decides what in three layers, with the mandate behind each decision.",
    safeguard: "Mandates come from law and from cabinet decisions, which a prompt cannot grant. Check every line of the table against the mandate it quotes; a decision given to a body without a mandate will be contested the first time it matters."
  },
  metadataRows: [
    ["Working title",          "Governance that keeps shared blocks shared"],
    ["YouTube-optimised title", "Governance that keeps DPI building blocks shared: political, programme and technical authority on one page"],
    ["Description (60 words)", "Shared blocks stay shared only while someone has the power to keep them shared. This video writes governance in three layers: who decides money and policy, who coordinates the programme, and who runs each block and sets its technical rules. Shown with published examples and Progressa's illustrative page. Five minutes for strategists. An AI prompt drafts the board's terms of reference."],
    ["Tags",                    "DPI governance, governance structures, shared building blocks, coordinating agency, digital officers, data protection, safeguards framework, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (governance structures); §4.2 (frameworks referenced: PAERA, the UNDP playbook, the safeguards framework, GovStack); §4.5 (governance structures); §4.3 (AI integration — terms of reference prompt)"],
    ["PAERA citations",         "Sections 3.1.1 and 3.1.2"],
    ["External-link list",      "PAERA v1.0, sections 3.1.1 and 3.1.2 (https://paera.govstack.global/); UNDP, The DPI Approach: A Playbook, 2023, pages 34 to 41 (https://www.undp.org/publications/dpi-approach-playbook); United Nations, Universal DPI Safeguards Framework, 2024, pages 25 and 36 (https://www.dpi-safeguards.org/framework); Bank for International Settlements, BIS Bulletin No 52, 2022, page 5 (https://www.bis.org/publ/bisbull52.htm); GovStack Digital Registries specification, Version 3.0-alpha, DRS-6 (https://specs.govstack.global/registries); GovStack Consent specification, version 1.3.0, section 2 (https://consent.govstack.global/)"]
  ]
}));
body.push(
  H3("Worked example — 6.6: Progressa's governance on one page (illustrative)"),
  P("Written in this bundle for Progressa. The joint board is component C-01 of the roadmap E7, and the regulation on children's data is part of component C-02; the owners of the blocks follow the names used for Progressa in the KP3 outline, and the owner of the learner register is PLR's product owner at MoEYS, whom E7 names among the people of the roadmap (Part 6). The ministry of finance as owner of the Payments block is set in this example. Figure F16 draws the structure."),
  genericTable([1700, 3200, 4800], ["Layer", "Who", "What each decides"], [
    ["Political authority", "The committee of ministers for digital government; the cabinet", "The committee decides the funding of the roadmap and recommends to the cabinet; the cabinet adopts the laws, among them the amendment to the education act and the regulation on children's data (C-02), and the budget"],
    ["Programme authority", "PDGA, the Progressa Digital Government Authority; the joint board of MoEYS and PDGA (C-01)", "PDGA coordinates the programme across ministries. The joint board decides education's shared infrastructure, meets monthly with written terms, and sends the drafts of law to the cabinet"],
    ["Technical authority", "PDGA for Linkup; PNIA for identity; PLR's product owner at MoEYS for the learner register; the ministry of finance for the Payments block", "Each owner runs its block and sets its technical rules: PDGA the members, services and grants of the exchange; PNIA which services are clients of its sign-in; PLR's product owner who may read and write the register, its quality rules and its delegated access for parents; the ministry of finance which programmes pay through the block"],
    ["In each ministry", "MoEYS's digital officer", "That each new project of the ministry uses the shared blocks instead of building its own, and that the ministry's needs reach the joint board"]
  ])
);

// ---------- 6.7 ----------
body.push(...renderSubtopic({
  num: "3.7 Subtopic 6.7",
  title: "Validate, revise, adopt",
  runtime: "~5 min",
  words: 452,
  paeraAnchor: "PAERA v1.0, section 5.4, steps 6 to 8; UNDP, The DPI Approach: A Playbook, 2023, page 23. The validation and revision cycle and the steps to adoption are the team's own",
  singleMessage: "A roadmap becomes the government's own only when the people it binds have commented, every comment has a written answer, and an authority has adopted it.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Validate, revise, adopt'. Voice-over begins." },
    { text: "A roadmap written by a team, however good, binds no one. It becomes the government's own when the bodies it binds have read it, seen their comments answered in writing, and an authority has adopted it." },
    { cue: "Slide 2 — Title: 'Six months from draft to adoption'. Body, six text rows: 'Month 1 — consultation with each body.' 'Month 2 — reconcile the initiatives under way; set the priorities.' 'Month 3 — drafting.' 'Month 4 — written comments from every body.' 'Month 5 — a high-level validation workshop.' 'Month 6 — adoption.'" },
    { text: "Plan the path to adoption from the start. In Progressa's example, the team consults each body in the first month. In the second it holds two workshops: one reconciles the initiatives already under way, and one sets the priorities on the gap register. The third month is a drafting sprint. In the fourth, each body comments in writing. In the fifth, a high-level workshop validates the revised text. In the sixth, the ministry of education and the digital government authority adopt it, and the cabinet does where the budget requires. These steps are the team's own practice." },
    { cue: "Slide 3 — Title: 'Every comment answered'. Body, three text rows: 'Response matrix: comment, from whom, what it refers to, response, decision, change made.' 'Decisions: accepted, accepted in part, not accepted.' 'Commenters named by role, never by name.'" },
    { text: "Answer every comment in a response matrix. Each row holds the comment, the role of the person who made it, what it refers to, the response, the decision and the change made. Name commenters by role, never by name. In Progressa, the finance ministry's budget department asked for a basis for the high estimate of the learner register. The team stated the basis and kept the range: accepted in part. The examination authority asked to move examination registration into the first horizon. Not accepted, because it depends on the register covering every district, which happens in the second horizon. The answer is written down all the same." },
    { cue: "Slide 4 — Title: 'A comment that changed a score'. Body, three text rows: 'CM-02, from PDGA: the Interoperability score is too high.' 'The draft had scored I2 from a desk result, not from a verified position.' 'I2 lowered from 2.5 to 1.5; the domain from 2.3 to 2.1; its stage unchanged (illustrative).'" },
    { text: "Some comments change the evidence itself. The digital government authority said the Interoperability score was too high while the ministry of education was not a member of the exchange. It was right. The draft had scored that membership from a desk result, which breaks the rule that only verified positions are scored. The sub-component was lowered from 2.5 to 1.5, and the domain from 2.3 to 2.1; its stage stayed Systematic. The change is recorded beside the maturity table, so any reader can see why the score moved." },
    { cue: "Slide 5 — Title: 'The revision, in four phases'. Body, four text rows: 'Prepare — abbreviations, the response matrix, the statistics to verify.' 'Revise the assessment, section by section.' 'Revise the roadmap and the investment case, part by part.' 'Final checks — consistency, a summary of changes, a cover note.'" },
    { text: "An assistant can draft most of the revision, in four phases. First, prepare: a list of abbreviations, a draft of the response matrix, and the statistics that a comment questions. Second, revise the assessment section by section against the accepted comments. Third, revise the roadmap and the investment case part by part. Fourth, check that the documents still agree, and write a summary of changes and a cover note. PAERA's procedure ends the same way: an action plan with responsible parties, then monitoring and review, then continuous improvement. And UNDP's playbook rates stakeholder engagement high at the step where the roadmap is developed." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'A roadmap becomes the government's own only when the people it binds have commented, every comment has a written answer, and an authority has adopted it.' Below it, the on-screen practice box (not narrated)." },
    { text: "Every body comments, every comment gets a written answer, and an authority adopts the roadmap. Then it is the government's own." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, section 5.4, steps 6 to 8; UNDP, The DPI Approach: A Playbook, 2023, page 23. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Validate, revise, adopt'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.7) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Six-months slide. Six text rows, one for each month.",
      "The development plan of the worked example E7; the steps are the team's own. Text-only."],
    ["3", "Response-matrix slide. Three text rows: the columns, the decisions, the rule on names.",
      "The worked example E9. Text-only."],
    ["4", "Score slide. Three text rows: the comment, the breach of the rule, the change.",
      "Comment CM-02 of E9; every value illustrative. Text-only."],
    ["5", "Revision slide. Four text rows, one for each phase.",
      "The four phases of E9, with PAERA's last three steps in the voice-over. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and the UNDP playbook."]
  ],
  practice: "a draft response matrix with a proposed decision for each comment",
  aiTip: {
    title: "Run the revision play in four phases",
    problem: "After the validation round, dozens of comments must be answered and two long documents revised so that they still agree with each other. This play drafts the work in four phases — prepare, revise the assessment, revise the roadmap, final checks — and leaves every decision to a person.",
    prompt: "You are helping a team revise two documents after a validation round: the assessment of [country X] and its roadmap with the investment case. Attached: the comments, each with the commenter's role and the identifiers it refers to; the draft assessment, with its finding identifiers; the draft roadmap, with its gap and component identifiers; the draft investment case, with its line identifiers. Work in four phases and stop after each one for review. Phase 1, prepare: list the abbreviations; draft a response matrix with one row for each comment (the comment in one sentence, the role, the identifiers it refers to, a proposed response, a proposed decision — accepted, accepted in part or not accepted — and the change needed); list every figure that a comment questions, for verification. Phase 2: revise the assessment section by section against the accepted comments. Phase 3: revise the roadmap and the investment case part by part. Phase 4: check that every gap traces to a finding, every component names its gaps, every investment line names a component and every comment names identifiers that exist; write a summary of changes and a cover note. Quote no commenter's name. Propose; do not decide. Output: a draft response matrix with a proposed decision for each comment, the revised sections and a summary of changes, each marked for a person's approval.",
    io: "Input: the written comments with their roles, and the draft assessment, roadmap and investment case with their identifiers. Output: a draft response matrix with a proposed decision for each comment, the revised sections and a summary of changes, each marked for a person's approval.",
    safeguard: "Every figure that changes is verified at its source before it is accepted, and a person approves the answer to each comment. Keep the list of verified statistics with the matrix, so that a reviewer can see where each changed figure was checked."
  },
  metadataRows: [
    ["Working title",          "Validate, revise, adopt"],
    ["YouTube-optimised title", "Validate, revise, adopt: how a DPI roadmap becomes the government's own"],
    ["Description (60 words)", "A roadmap binds no one until the bodies it binds have commented, every comment has a written answer, and an authority has adopted it. This video sets out the six months from draft to adoption, the response matrix, and a comment that changed a score. Shown on Progressa's illustrative validation round. Five minutes for strategists. An AI prompt runs the revision in four phases."],
    ["Tags",                    "roadmap validation, stakeholder consultation, response matrix, adoption, revision, DPI roadmap, education DPI, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (governance structures: adoption); §4.1 (step 9 of the method, with its output, template, decision point and validation); §4.6 (example of the step's output); §6 (templates); §4.3 (AI integration — the revision play)"],
    ["PAERA citations",         "Section 5.4, steps 6 to 8"],
    ["External-link list",      "PAERA v1.0, section 5.4 (https://paera.govstack.global/); UNDP, The DPI Approach: A Playbook, 2023, page 23 (https://www.undp.org/publications/dpi-approach-playbook)"]
  ]
}));
body.push(
  H3("Worked example — 6.7: the agenda of the validation workshop (blank) and Progressa's response matrix (illustrative)"),
  P("The agenda is the team's blank instrument for the high-level validation workshop of the fifth month; it names no country, body or person. The response matrix is taken from the worked example of method step 9, E9, as it stands after the reconciling rounds of 1 October 2026; four of its seven comments are shown."),
  genericTable([1100, 6100, 2500], ["Time", "Item", "Led by"], [
    ["0:00", "Opening: what is being validated, by whom it will be adopted, and how decisions are recorded", "Validation chair"],
    ["0:15", "The response matrix: the comments accepted, accepted in part and not accepted, and the change made for each", "Facilitator"],
    ["1:15", "Open points: each body states its position and its evidence", "Facilitator"],
    ["2:15", "Break", ""],
    ["2:30", "Decisions on the open points, recorded in the matrix", "Validation chair"],
    ["3:15", "The path to adoption: who adopts, when, and what the budget requires", "Validation chair"],
    ["3:45", "Close", ""]
  ]),
  spacer(80),
  genericTable([1300, 1400, 1200, 2400, 1200, 2200], ["Comment", "From (role)", "Refers to", "The comment", "Decision", "Change made"], [
    ["CM-01", "MoEYS, legal unit", "C-02, C-06, C-14", "The amendment to the education act cannot be in force by the end of wave 2, so PLR cannot become the authoritative register then", "Accepted in part", "C-06 limited to the pilot province until the amendment is in force; C-14 made dependent on C-02 in force"],
    ["CM-02", "PDGA", "F-INT-1", "The Interoperability score is too high while the ministry of education, MoEYS, is not a member of Linkup", "Accepted", "I2 lowered from 2.5 to 1.5; the domain score from 2.3 to 2.1; the stage stays Systematic"],
    ["CM-04", "Finance ministry, budget department", "INV-06", "The high estimate for the learner register needs a basis", "Accepted in part", "The range kept; the basis added to E8"],
    ["CM-05", "PNEA", "C-15, G-09", "Examination registration from PLR should move into the first horizon", "Not accepted", "None"]
  ])
);

// ---------- 6.8 ----------
body.push(...renderSubtopic({
  num: "3.8 Subtopic 6.8",
  title: "Keep the foundation healthy and safe",
  runtime: "~5 min",
  words: 452,
  paeraAnchor: "Universal DPI Safeguards Framework, United Nations, 2024, pages 6, 15 and 43 and the framework's web page; ITU Academy course 'Accelerating digital public infrastructure with safeguards'; GovStack Digital Registries specification, Version 3.0-alpha, section 5.2, DRS-7 and DRS-21; GovStack Payments specification, Version 3.0, sections 6.8 and 6.12; PAERA v1.0, section 5.4, steps 7 and 8. The three tiers of indicators are the team's own form",
  singleMessage: "After launch, indicators read every month, quarter and year, quality checks and reconciliation on every load, and a regular review against the published safeguards keep the foundation trusted and safe.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Keep the foundation healthy and safe'. Voice-over begins." },
    { text: "Launch day starts the work; it does not end it. A register nobody checks fills with errors, and a payment nobody reconciles reaches the wrong person. Upkeep is what keeps people trusting the foundation." },
    { cue: "Slide 2 — Title: 'Indicators in three tiers'. Body, three text rows: 'Every month, operational — learners in PLR; records passing the quality gates; calls on Linkup by MoEYS.' 'Every quarter, programme — components on schedule; budget used against plan; board decisions taken.' 'Every year, outcome — the stage of each domain against its target.'" },
    { text: "Read indicators in three tiers. Operational indicators are read every month: in Progressa, the number of learners in the register, the share of records passing the quality gates, and the ministry's calls on the exchange. Programme indicators are read every quarter: components on schedule, budget used against plan, and decisions the board has taken. Outcome indicators are read every year: the stage of each domain against its target. The three tiers are the team's own form. PAERA's procedure asks for the same rhythm: monitor progress against the metrics, and revisit the assessment, perhaps once a year." },
    { cue: "Slide 3 — Title: 'Every load checked, every payment traced'. Body, four text rows: 'Quality checks on every load; a row that fails is set aside with its reason.' 'Every change and every read of the register logged, and visible to its analyst (DRS-7, DRS-21).' 'A deletion keeps the logical record unless the law requires hard deletion (Digital Registries, section 5.2).' 'A chain of identifiers for every payment, and an audit trail no user can edit (Payments, sections 6.8 and 6.12).'" },
    { text: "Below the indicators sit the checks on every load. Each load of the learner register passes its quality checks, and a row that fails is set aside with its reason. The Digital Registries specification requires every change and every read of the data to be logged, and the register's analyst to see both. A deletion keeps the logical record unless the law requires it to be erased. The Payments specification requires a chain of identifiers that traces each transaction from start to finish, and an audit trail that no user can edit. Reconciling each load against those records is the team's practice." },
    { cue: "Slide 4 — Title: 'A yearly review against the safeguards'. Body, four text rows: 'The Universal DPI Safeguards Framework (UN, 2024): 18 principles; 13 risks in three groups — safety, inclusion, structural vulnerabilities.' 'Unsustainability is one of the risks.' 'Five adoption pathways, each with self-assessment questions.' 'ITU runs a course on the framework with UNDP, and is a member of its consultative group.'" },
    { text: "Once a year, review the foundation against the published safeguards. The Universal DPI Safeguards Framework, released by the United Nations in 2024, sets out 18 principles and 13 risks in three groups: safety, inclusion and structural vulnerabilities. Unsustainability is one of them; it covers high running costs and vendor lock-in. The framework offers five adoption pathways, each with self-assessment questions, from legal and regulatory to the whole of society. ITU is a member of the framework's consultative group of international organisations, and runs a training course on it with UNDP." },
    { cue: "Slide 5 — Title: 'Progressa's first yearly review (illustrative)'. Body, five text rows: 'Legal and regulatory — the amendment and the regulation on children's data drafted and with cabinet.' 'Institutional structures — the joint board, with written terms, meets monthly.' 'Technical foundations — quality gates on the first district's load.' 'Capacity and resources — a named data steward; a recurrent budget line requested from 2029.' 'Whole of society — every body commented on the roadmap.'" },
    { text: "Here is Progressa's first yearly review against the five pathways, at the end of 2027, in outline and built as an example. Legal and regulatory: the amendment to the education act and the regulation on children's data are drafted and with the cabinet, not yet in force. Institutional structures: the joint board has written terms and meets monthly. Technical foundations: quality gates on the first district's load. Capacity and resources: a named data steward, and a recurrent budget line requested from 2029. Whole of society: every body commented on the roadmap. Each weak line becomes a decision for the board, with an owner and a date." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'After launch, indicators read every month, quarter and year, quality checks and reconciliation on every load, and a regular review against the published safeguards keep the foundation trusted and safe.' Below it, the on-screen practice box (not narrated)." },
    { text: "Read indicators by month, quarter and year, check every load, and review against the safeguards each year. That keeps the foundation trusted and safe." },
    { cue: "Slide 7 — Title: 'Sources'. Body: Universal DPI Safeguards Framework, United Nations, 2024, pages 6, 15 and 43 and the framework's web page; ITU Academy course 'Accelerating digital public infrastructure with safeguards'; GovStack Digital Registries specification, Version 3.0-alpha, section 5.2, DRS-7 and DRS-21; GovStack Payments specification, Version 3.0, sections 6.8 and 6.12; PAERA v1.0, section 5.4, steps 7 and 8. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Keep the foundation healthy and safe'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.8) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Indicators slide. Three text rows, one for each tier.",
      "The tiers of the worked example E7, Part 8; the form is the team's own. Text-only."],
    ["3", "Checks slide. Four text rows: quality checks, logs, deletion, payments.",
      "Each requirement with its specification. The checks and the reconciliation of the register run on a schedule. Text-only."],
    ["4", "Safeguards slide. Four text rows: principles and risks, unsustainability, the pathways, ITU's part.",
      "The framework named by its own title; ITU's part named as the course and the consultative group. Text-only."],
    ["5", "Progressa slide. Five text rows, one for each pathway.",
      "The worked example, built for Progressa; every entry illustrative. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify the safeguards framework, ITU's course, the two GovStack specifications and PAERA."]
  ],
  practice: "a one-page report of exceptions in three parts: what moved, what failed and what needs a decision",
  aiTip: {
    title: "Write the month's report of exceptions",
    problem: "Each month the indicators and the reconciliation notes arrive as tables that nobody reads in full. This prompt reads them and writes a short report of exceptions — what moved, what failed and what needs a decision — so that the board spends its time on the few lines that matter.",
    prompt: "Below are this month's operational indicators for [the register or service] in [country X], with last month's values and the targets: [paste the table]. Below are the reconciliation notes of each load and each payment batch this month, with the counts in and out and the rows set aside with their reasons, with the names and identifiers of persons removed: [paste]. Write a report of exceptions in three parts: (1) what moved — every indicator that changed by more than [threshold] or crossed its target, with both values; (2) what failed — every load or batch whose counts do not reconcile, and the rows set aside, grouped by reason, with their counts; (3) what needs a decision — each exception that no one has been named to act on, with the question to put to the board. Quote every figure from the tables, and do not compute a figure that is not there. Do not say that any exception is resolved. Output: a one-page report of exceptions in three parts: what moved, what failed and what needs a decision.",
    io: "Input: the month's indicators with last month's values and the targets, and the reconciliation notes of each load and batch. Output: a one-page report of exceptions in three parts: what moved, what failed and what needs a decision.",
    safeguard: "The prompt reports exceptions and does not close them. Each exception stays open until its owner records what was done and a later reconciliation shows it; a report that calls an exception resolved without that record has closed nothing."
  },
  metadataRows: [
    ["Working title",          "Keep the foundation healthy and safe"],
    ["YouTube-optimised title", "Keeping a DPI foundation healthy and safe: indicators in three tiers, checks on every load, and a yearly review against the UN safeguards"],
    ["Description (60 words)", "Launch day starts the work. This video shows how indicators read every month, quarter and year, quality checks and reconciliation on every load, and a yearly review against the Universal DPI Safeguards Framework keep a foundation trusted and safe. Shown on Progressa's illustrative monitoring sheet and first review. Five minutes for strategists. An AI prompt writes the month's report of exceptions."],
    ["Tags",                    "monitoring and evaluation, data quality, reconciliation, audit trail, DPI safeguards, safeguards framework, ITU Academy, education DPI"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 (governance structures: upkeep and review); §4.2 (frameworks referenced: the safeguards framework and GovStack); §4.3 (AI integration — report of exceptions prompt)"],
    ["PAERA citations",         "Section 5.4, steps 7 and 8"],
    ["External-link list",      "United Nations, Universal DPI Safeguards Framework, 2024, pages 6, 15 and 43, and its web page (https://www.dpi-safeguards.org/framework); ITU Academy, 'Accelerating digital public infrastructure with safeguards' (https://academy.itu.int/training-courses/full-catalogue/accelerating-digital-public-infrastructure-safeguards); GovStack Digital Registries specification, Version 3.0-alpha, section 5.2, DRS-7 and DRS-21 (https://specs.govstack.global/registries); GovStack Payments specification, Version 3.0, sections 6.8 and 6.12 (https://specs.govstack.global/payments); PAERA v1.0, section 5.4 (https://paera.govstack.global/)"]
  ]
}));
body.push(
  H3("Worked example — 6.8: Progressa's monitoring sheet and its first yearly review (illustrative)"),
  P("Written in this bundle for Progressa. The indicators are those of the roadmap E7, Part 8; the readers are set in this example, from the people E7 names (a PLR product owner and data steward at MoEYS, Part 6) and from the joint board's quarterly reports (C-13). The review is filled in outline against the five adoption pathways of the Universal DPI Safeguards Framework, as Progressa would stand at the end of 2027."),
  genericTable([1500, 1200, 3900, 3100], ["Tier", "How often", "Indicators (E7, Part 8)", "Who reads them"], [
    ["Operational", "Monthly", "Learners in PLR; share of records passing the quality gates; calls on Linkup by MoEYS", "The PLR product owner and the data steward at MoEYS"],
    ["Programme", "Quarterly", "Components on schedule; budget used against plan; board decisions taken", "The joint board of MoEYS and PDGA, which reports every quarter (C-13)"],
    ["Outcome", "Yearly", "The stage of each domain against the targets of E5", "The joint board, at the yearly review of the roadmap"]
  ]),
  spacer(80),
  genericTable([2400, 4600, 2700], ["Adoption pathway", "Where Progressa stands at the end of 2027", "What it asks of the board"], [
    ["Legal and regulatory", "The amendment to the education act and the regulation on children's data are drafted and with the cabinet (C-02); not yet in force, so PLR serves as the authoritative register in one pilot province only, with parents' consent", "Report the date of cabinet's decision each quarter"],
    ["Institutional structures", "The joint board has written terms and meets monthly (C-01)", "Name who answers a parent's complaint about a record"],
    ["Technical foundations", "Quality gates on the load of the first district, with every change and every read logged", "Confirm the reconciliation of each load before wave 3"],
    ["Capacity and resources", "A named data steward; a recurrent budget line requested from the budget year 2029 (C-05)", "Follow the request through the budget cycle"],
    ["Whole-of-society approach", "Every body commented on the roadmap, and each comment has a written answer (E9)", "Plan how parents and learners will be heard before the view of their records (C-16)"]
  ])
);

// ---------- 6.9 ----------
body.push(...renderSubtopic({
  num: "3.9 Subtopic 6.9",
  title: "The AI plays, step by step",
  runtime: "~5 min",
  words: 461,
  paeraAnchor: "PAERA v1.0, section 5.3 (its mention of a tool for a quick assessment). The plays are the team's own; each is the AI usage tip of the subtopic that teaches its step",
  singleMessage: "At every step of the method and of the build there is a task an AI assistant can draft and a check only a person can make, and no decision is handed over.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'The AI plays, step by step'. Voice-over begins." },
    { text: "An AI assistant can draft most of the paperwork of a roadmap. It cannot decide anything in it. The skill is knowing, at each step, what to hand over and what to keep." },
    { cue: "Slide 2 — Title: 'A play for each step'. Body, four text rows: 'Assess — the desk assessment, the review of a questionnaire, the scorer.' 'Plan — the gap register, cost against reuse, the waves, the investment sheets.' 'Govern — the contract check, the board's terms, the revision, the monthly exceptions.' 'Build — four generators: the registration service, the register's schema, the identity connection, the payment connection.'" },
    { text: "A play is one task at one step, with a fixed input, a fixed output and a safeguard. In the assessment, plays draft the desk assessment from public sources, review a questionnaire against its evidence, and propose a stage for each domain. In planning, they gather the gap register, weigh cost against reuse, draft the waves and fill the investment sheets. In governance, they check a contract for lock-in, draft a board's terms, run the revision and write the monthly exceptions. In the build, four generators draft the configuration of each block. PAERA itself mentions a GovStack tool for a quick assessment." },
    { cue: "Slide 3 — Title: 'What the assistant drafts, what a person checks'. Body, four text rows: 'The assistant drafts; a person decides.' 'Every claim quotes its evidence.' 'A missing answer is reported, never filled in.' 'No personal data in a prompt; test persons in the build.'" },
    { text: "Every play follows the same rules. The assistant drafts and a person decides: the assessor confirms the stage, the workshop sets the priorities, the lawyer reads the contract. Every claim the assistant makes quotes its evidence, so that the person can check it quickly. An answer that is missing is reported as missing, never filled in. And no one's personal data goes into a prompt: the plays work on descriptions of systems and bodies, and the build uses test persons only. These rules are the team's own practice." },
    { cue: "Slide 4 — Title: 'Trust a play only after a known result'. Body, four text rows: 'Run the play where the answer is already known.' 'Compare its output with the known answer.' 'Any difference: find the cause before the play is used.' 'Then run it on new evidence.'" },
    { text: "Before you trust a play, run it where the answer is already known. Take the scorer. Progressa's Digital Data domain was scored and then validated: one sub-component at Basic, five at Opportunistic, and a domain score of 1.3. Give the scorer the same criteria and the same verified answers, without the result, and compare its proposal with the validated table. If they match, the play has reproduced a known result. If they differ, find the cause in the criteria, the evidence or the prompt, before anyone uses the play on new evidence. A play that passes on one domain is tested on a second before it is used on all five." },
    { cue: "Slide 5 — Demonstration segment, in the place of the slide: the scorer run from beginning to end on a domain whose result is known. Until the segment is recorded, the slide shows its six steps as text, marked 'Storyboard — not yet run'; see the storyboard below." },
    { text: "The demonstration runs that test step by step. The known result is set aside before the run. The criteria and the verified answers go in, and one desk result that was never verified is marked as such. The scorer proposes a stage for each sub-component with its evidence, and lists the unverified result as not used. The pass is simple: the six stages and the score match the validated table. A second run uses Interoperability, where a draft once scored membership from a desk result, and the scorer must leave that result out. The run has not yet been recorded." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'At every step of the method and of the build there is a task an AI assistant can draft and a check only a person can make, and no decision is handed over.' Below it, the on-screen practice box (not narrated)." },
    { text: "At each step the assistant drafts and a person checks. No decision is handed over, and a play is trusted only after it reproduces a known result." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, section 5.3. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'The AI plays, step by step'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.9) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "Catalogue slide. Four text rows: the plays of the assessment, the planning, the governance and the build.",
      "The catalogue in four groups; the full catalogue is the worked example below. Text-only."],
    ["3", "Rules slide. Four text rows: who decides, quoted evidence, missing answers, personal data.",
      "The rules every play follows; the team's own. Text-only."],
    ["4", "Known-result slide. Four text rows: run, compare, find the cause, then use.",
      "The test of trust, with Progressa's validated scores (E5); every value illustrative. Text-only."],
    ["5", "Demonstration segment: the scorer from beginning to end. Until recorded, six text rows marked 'Storyboard — not yet run'.",
      "Needs only the scoring criteria of the assessment toolkit; the storyboard below stands in its place until the segment is recorded."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA section 5.3."]
  ],
  practice: "a proposed stage and score for each sub-component, with quoted evidence, the domain score with its arithmetic, and the answers not used",
  aiTip: {
    title: "Run a play where the answer is known, before you trust it",
    problem: "A play that has never been tested on a known case can be wrong in ways no one notices until a finding reaches a minister. This prompt runs the scoring play on a domain whose verified evidence and validated stage are already known, so that its proposal can be compared with the known result line by line.",
    prompt: "This is a test of a scoring prompt on a domain whose result is already known to the person running the test; the result is not given to you. DOMAIN: [name and code]. CRITERIA: [paste the domain's tables from the scoring criteria: every sub-component with its code, its name and its five rows, Basic, Opportunistic, Systematic, Differentiating and Transformational]. VERIFIED ANSWERS: [paste the domain's answers, each with its question code, its evidence and the verification record that confirmed it; mark any answer that was not verified as UNVERIFIED]. Rules: use only verified answers and list every UNVERIFIED answer under 'Answers not used'; for each sub-component, read its rows from Basic upward and propose the highest stage whose description the evidence fully meets; for every part of a criterion you count as met or as not met, quote the evidence word for word with its question code; write 'cannot place' where the evidence is not enough, and never fill in a missing answer; give each stage its score and compute the domain score as the mean, to one decimal place. Write four parts: A, a table with one row for each sub-component; B, the domain score with its arithmetic; C, the answers not used, and why; D, every point where two pieces of evidence disagree. Output: a proposed stage and score for each sub-component, with quoted evidence, the domain score with its arithmetic, and the answers not used, for comparison with the known result.",
    io: "Input: one domain's criteria and its verified answers, with any unverified answer marked, while the person running the test holds the known result. Output: a proposed stage and score for each sub-component, with quoted evidence, the domain score with its arithmetic, and the answers not used, for comparison with the known result.",
    safeguard: "A play is trusted only after it has reproduced a result that is known. Compare each proposed stage with the validated one and, where they differ, find the cause before the play is used on new evidence; a play that matches on one domain is tested on a second before it is used on all five."
  },
  metadataRows: [
    ["Working title",          "The AI plays, step by step"],
    ["YouTube-optimised title", "AI plays for a DPI roadmap: what an assistant drafts, what a person checks, and how to test a play before you trust it"],
    ["Description (60 words)", "At every step of the method and the build there is a task an AI assistant can draft and a check only a person can make. This video sets out the catalogue of plays, the rules every play follows, and how to trust a play only after it reproduces a known result. Five minutes for strategists. The scorer prompt is run on a known domain."],
    ["Tags",                    "AI in government, AI plays, prompt library, human in the loop, DPI assessment, DPI roadmap, education DPI, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§4.3 (opportunities for AI across the steps of the method, with practical examples); §4.1 (the steps of the method); §4.7 and §9 (the demonstration walkthrough)"],
    ["PAERA citations",         "Section 5.3"],
    ["External-link list",      "PAERA v1.0, section 5.3 (https://paera.govstack.global/)"]
  ]
}));
body.push(
  H3("Worked example — 6.9: Progressa's catalogue of plays"),
  P("Written in this bundle for Progressa. Each play is the AI usage tip of the subtopic named in the second column, as the KP3 outline sets it."),
  genericTable([1700, 1500, 2100, 2300, 2100], ["Play", "Step (subtopic)", "Input", "Output", "Safeguard"], [
    ["The desk assessment", "Step 2 (1.4)", "The question bank and a list of public sources", "For each question, the finding, its source and a mark of confidence; a first list of gaps by domain", "No finding without its source; every finding stays unverified until the verification of step 4"],
    ["The review of a questionnaire", "Step 3 (1.5)", "A filled questionnaire with the evidence attached", "For each answer, what the evidence supports, what is stated without evidence, and the question to ask next", "Never fills in an answer that the respondent left empty"],
    ["The scorer", "Step 5 (1.7)", "One domain's criteria and its verified answers", "A proposed stage for each sub-component, with the evidence quoted for each criterion", "The assessor decides; a stage with no quoted evidence is not accepted"],
    ["The gap register", "Step 6 (6.1)", "The findings of the five domain reports and the rule for setting priorities", "One register, with proposed ratings and their reasons, and the gaps that cross domains", "The prioritisation workshop decides the ranks"],
    ["Cost against reuse", "Step 6 (6.2)", "The inventory of planned services and the cost range of each block", "The table of cost against reuse and a proposed order of funding", "Uses only the costs given; every figure stays illustrative until a costing confirms it"],
    ["The drafting of waves", "Step 7 (6.3)", "The ranked gaps and the table of dependencies", "The waves of the first horizon, and the dependency conflicts found", "Dates are proposals until the budget cycle and the owners of the work confirm them"],
    ["The investment sheets", "Step 8 (6.4)", "The components of the roadmap and their cost ranges, with sources", "The four sheets, with the check of their totals and the figures without a source", "No figure without a source or the word illustrative"],
    ["The check of a contract", "Sourcing (6.5)", "A draft tender or contract", "The four lock-in checks, clause by clause", "The lawyer and the procurement officer decide"],
    ["The terms of reference for governance", "Governance (6.6)", "The institutions and their mandates", "Draft terms of reference for the board, and a table of who decides what", "Mandates come from law and cabinet decisions, which a prompt cannot grant"],
    ["The revision cycle", "Step 9 (6.7)", "The written comments and the drafts", "A draft response matrix, the revised sections and a summary of changes", "Every changed figure verified at its source; a person approves each answer"],
    ["The monitoring report", "Upkeep (6.8)", "The month's indicators and reconciliation notes", "A report of exceptions: what moved, what failed, what needs a decision", "Reports exceptions and does not close them"],
    ["The registration service generator", "Build (2.3)", "The registration brief, in the specification's terms", "A draft service description in the product's named format, every assumption marked", "Imported into a test installation and checked before anyone relies on it"],
    ["The register's schema generator", "Build (3.3)", "The law, the registration form and the services that will read the register", "A draft schema in JSON or YAML, each rule traced to its line", "The owner decides the key and the fields that hold personal data"],
    ["The identity connection generator", "Build (4.3)", "The data the service needs", "A draft client registration, flow, scopes and claims, and the levels of authentication accepted", "Every claim justified by a field of the form; tests use an enrolled test person, never a real one"],
    ["The payment connection generator", "Build (4.5)", "The description of a programme", "A draft configuration of the source, the programme, the onboarding, the batch and the route for status", "Tests use a test beneficiary, a test amount and a test environment"]
  ]),
  H3("Storyboard of the demonstration walkthrough — 6.9"),
  P("This storyboard stands in the place of the demonstration segment until it is recorded; nothing in it has been run. It needs only the toolkit's scoring criteria and Progressa's verified answers for two domains. Once the run is recorded, the script gains one sentence stating its result and date."),
  genericTable([700, 2100, 3500, 3400], ["Step", "What is shown", "What the viewer sees", "What counts as a pass"], [
    ["1", "The known result, set aside: Progressa's Digital Data domain as validated in E5", "The table D1 1.5, D2 1.5, D3 0.5, D4 1.5, D5 1.5, D6 1.5, and the domain score 1.3, Opportunistic; then the table is closed", "The known result is recorded before the run, and it is not pasted into the prompt"],
    ["2", "The inputs assembled", "The toolkit's criteria for D1 to D6, five rows each; the domain's answers as verified in sessions V-01 and V-04 (E3, E4); desk result AF-DAT-02 in its first form, marked UNVERIFIED", "Every answer carries its question code and its verification record, or the mark UNVERIFIED"],
    ["3", "The scoring prompt run once for the domain", "The four parts of the output: the table of proposals, the arithmetic, the answers not used, the conflicts", "Every proposed stage has its evidence quoted with a question code; AF-DAT-02 is listed under 'Answers not used'"],
    ["4", "The proposal set beside the known result", "Proposed and validated stages side by side, one row for each sub-component", "The six stages and the score of 1.3 match; a difference is traced to the criterion, the evidence or the prompt first"],
    ["5", "A second known result: the Interoperability domain", "The verified position of session V-02, that MoEYS is not a member of Linkup, given as verified; the desk result AF-INT-01 marked UNVERIFIED", "I2 proposed at Opportunistic, 1.5, and the domain at 2.1, Systematic, as validated after comment CM-02; AF-INT-01 listed under 'Answers not used'"],
    ["6", "The record of confirmation", "The assessor's record from the scoring criteria: the stage proposed, the stage confirmed, the reason for any change", "Each stage confirmed or changed with its reason; the play is recorded as trusted for scoring only after both known results are reproduced"]
  ])
);

// ---------- 6.10 ----------
body.push(...renderSubtopic({
  num: "3.10 Subtopic 6.10",
  title: "Carry the method to another sector",
  runtime: "~5 min",
  words: 451,
  paeraAnchor: "PAERA v1.0, Annex 3 and Annex 1, A1.2.5; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 2023, page 4, Exhibit 2",
  singleMessage: "Change the sector's register and services and keep the five domains, the nine steps and the foundational blocks, and the same method produces a roadmap for health, agriculture or social protection.",
  scriptBeats: [
    { cue: "Slide 1 — Title: 'Carry the method to another sector'. Voice-over begins." },
    { text: "Education is the first sector here, not the only one. The method does not belong to schools. A ministry of health, of agriculture or of social protection can use it, if it knows what to keep and what to replace." },
    { cue: "Slide 2 — Title: 'What stays'. Body, four text rows: 'The five domains.' 'The nine steps, with their roles and templates.' 'The foundational blocks: identity, payments, data exchange.' 'Sector applications sit above the core (UNDP, 2023, Exhibit 2).'" },
    { text: "Most of the method stays as it is. The five domains stay: governance with the law, access, digital data, interoperability and digital identity. The nine steps stay, from framing the assessment to adopting the roadmap, with their roles, their decision points and their templates. The foundational blocks stay too. UNDP's framework for the DPI approach places digital identity, digital payments and consent-based data sharing in its core, and places sector applications, among them digital education, digital health and digital agriculture, above that core. A new sector builds on the same core." },
    { cue: "Slide 3 — Title: 'What changes'. Body, three text rows: 'The sector's register: in health, providers and facilities; in social protection, social insurance.' 'The sector's services, and the bodies that own them.' 'Any state registry needs two blocks: Registration and a Digital Registry (PAERA, Annex 1).'" },
    { text: "What changes is the sector's own part. Its register changes: in education it is the learner register; in health it may be a register of providers and facilities; in social protection, a social insurance register. Its services change, and with them the bodies that own them and answer the questionnaires. PAERA lists the main state registries a country should establish, and among them are health registers, a social insurance register and an education register. It also says that digitising a state registry needs two building blocks: Registration and a Digital Registry. So a new sector's register is set up with the same two kinds of block, whatever it records." },
    { cue: "Slide 4 — Title: 'The carry-over table'. Body, a plain-text table of five rows: 'Domains — keep — add the sector's own questions.' 'Nine steps — keep — new bodies, sessions and documents.' 'Foundational blocks — keep and reuse — the connections only.' 'Register and services — replace — assess afresh.' 'Worked examples — keep the form — rebuild every value.'" },
    { text: "Put the comparison on one page, part by part. For each part of the method, the table says what stays and what the new sector replaces. The domains stay, with questions added for the sector. The nine steps stay, while the bodies, the sessions and the documents change. The foundational blocks stay and are reused, so the new sector pays for a connection, not for a block. The sector's register and services are replaced and assessed afresh. And the examples keep their form, but every value is rebuilt, so a health roadmap is shown on its own registers, not on learners." },
    { cue: "Slide 5 — Title: 'Carry the method, not the results'. Body, three text rows: 'Progressa's register came first because its own assessment put it there.' 'A new sector may find a different first priority.' 'Run the new sector's assessment in full.'" },
    { text: "One warning. Carrying the method over does not carry the results over. Progressa's learner register came first because its own assessment found that the missing record held back three domains. A ministry of health may find something else first, such as its register of providers, or its link to the identity authority. Run the new sector's assessment in full, with its own questionnaires, its own sessions and its own verification, before anything from education is treated as a finding. Only the method moves from one sector to the other." },
    { cue: "Slide 6 — Title: 'In one sentence'. Body, large text (Arial Bold 28pt): 'Change the sector's register and services and keep the five domains, the nine steps and the foundational blocks, and the same method produces a roadmap for health, agriculture or social protection.' Below it, the on-screen practice box (not narrated)." },
    { text: "Keep the domains, the steps and the foundational blocks. Change the sector's register and services, and assess the new sector afresh." },
    { cue: "Slide 7 — Title: 'Sources'. Body: PAERA v1.0, Annex 3 and Annex 1, A1.2.5; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium, 2023, page 4, Exhibit 2. Footer: 'Find the link in the description.'" }
  ],
  slideSpecRows: [
    ["1", "Title slide. Title: 'Carry the method to another sector'.",
      "Standard ITU template. Title Arial Bold 28pt; subtitle (KP3 / 6.10) Arial 18pt. Background #E5F5FB. No images."],
    ["2", "What-stays slide. Four text rows: the domains, the steps, the blocks, the place of sector applications.",
      "UNDP's Exhibit 2 described in words; the exhibit itself is not shown. Text-only."],
    ["3", "What-changes slide. Three text rows: the register, the services and owners, the two blocks of any registry.",
      "PAERA's Annex 3 and A1.2.5 in plain words. Text-only."],
    ["4", "Carry-over slide. A plain-text table of five rows: part, keep or replace, what changes.",
      "The team's blank instrument; the worked example below. Text-only."],
    ["5", "Warning slide. Three text rows: why education's register came first, a new sector's own priority, the full assessment.",
      "No second sector is worked through; the contract's demonstration is education. Text-only."],
    ["6", "Single-sentence summary slide. One large text block (Arial Bold 28pt) with the single message, and the practice box.",
      "The take-home line. The practice box is on screen and not narrated."],
    ["7", "Sources slide. Footer: 'Find the link in the description.'",
      "Lets viewers verify PAERA and the UNDP compendium."]
  ],
  practice: "a carry-over table with one row for each part of the method, saying what stays, what is added and what is replaced",
  aiTip: {
    title: "Report what carries over to a new sector, and what must be assessed afresh",
    problem: "A ministry that sees an education roadmap may copy it whole, or start from nothing. This prompt sets the education roadmap beside a new sector's list of services and registers and reports, part by part, what carries over unchanged and what must be assessed afresh.",
    prompt: "Below is the roadmap of [country X] for education, with its domains, its steps, its foundational blocks, its sector register and its services: [paste the roadmap's summary and its component register]. Below is the list of the services and registers of [the new sector], each with the body that owns it: [paste the list]. For each part of the method — the five domains, the nine steps, the foundational blocks, the sector's register, the sector's services, the bodies involved, the worked examples — say whether it carries over unchanged, carries over with additions, or must be replaced, and give one sentence of reason for each. Then list every finding of the education assessment that the new sector would need to establish for itself, and do not treat any of them as true for the new sector. Output: a carry-over table with one row for each part of the method, saying what stays, what is added and what is replaced, followed by the list of findings the new sector must establish for itself.",
    io: "Input: the education roadmap's summary and components, and the new sector's list of services and registers with their owners. Output: a carry-over table with one row for each part of the method, saying what stays, what is added and what is replaced, and the list of findings the new sector must establish for itself.",
    safeguard: "The new sector's assessment is carried out and is not assumed. Treat every row marked as carrying over as a proposal to test in that assessment; a finding copied from education is a guess until the new sector has verified it."
  },
  metadataRows: [
    ["Working title",          "Carry the method to another sector"],
    ["YouTube-optimised title", "Carrying the DPI roadmap method from education to health, agriculture or social protection"],
    ["Description (60 words)", "Education is the first sector, not the only one. This video shows what of the method carries over unchanged to another sector — the five domains, the nine steps, the foundational blocks — and what a new sector replaces: its register, its services, its bodies and the values of its examples. Five minutes for strategists. An AI prompt drafts the carry-over table for another sector."],
    ["Tags",                    "sector portability, DPI roadmap method, health, agriculture, social protection, state registries, education DPI, PAERA"],
    ["Playlist (YouTube)",      "KP3 — Module 6: From a proven foundation to a national roadmap"],
    ["ToR §4 coverage",         "§3.3 and §4.4 (a method that other sectors can use); §4.3 (AI integration — carry-over prompt)"],
    ["PAERA citations",         "Annex 3; Annex 1, A1.2.5"],
    ["External-link list",      "PAERA v1.0, Annex 3 and Annex 1, A1.2.5 (https://paera.govstack.global/); UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 2023, page 4, Exhibit 2 (https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure)"]
  ]
}));
body.push(
  H3("Worked example — 6.10: the carry-over table (the team's blank instrument)"),
  P("The team's blank instrument: it names no country, no institution and no person. No second sector is worked through, because the contract's demonstration is education."),
  genericTable([2300, 3700, 3700], ["Part of the method", "What stays the same", "What a new sector replaces or adds"], [
    ["The five domains", "Their names, their codes and their sub-components", "Questions specific to the sector, added within each domain"],
    ["The nine steps", "Their order, their roles, their decision points and their templates", "The bodies on the frame page, the plan of sessions and the documents requested"],
    ["The scale and the scoring rule", "The five stages and the rule that only verified positions are scored", "Nothing"],
    ["The foundational blocks: identity, payments, data exchange", "The blocks themselves, reused", "The connections the sector's services need"],
    ["The sector's register", "How a register is set up, loaded, checked and opened to other services", "The register itself: its purpose, its owner, its content and its key"],
    ["The sector's services", "How a service is described, checked and decided", "The services, their rules and the bodies that own them"],
    ["The worked examples", "Their form", "Every value, rebuilt for the sector"]
  ])
);

// ---------- PRODUCTION NOTES ----------
body.push(
  H1("4. Production notes", { pageBreakBefore: true }),

  H3("4.1 The split-screen usability test"),
  P("The bar for every video in Module 6 is the split-screen test: a practitioner watching the video on one half of the screen must be able to act on the other half. For Module 6, 'act' means rank a gap register, build a table of cost against reuse, draft the waves of a first horizon, fill the four sheets of an investment case, check a contract for lock-in, draft a governance board's terms of reference, run a revision after a validation round, write the month's report of exceptions, test a play on a known result, or draft the carry-over table for another sector. Each subtopic's AI usage tip carries that action, and the on-screen practice box on the recap slide names it."),

  H3("4.2 Slide branding"),
  P("Every slide follows the ITU template of the Knowledge Products and Video Materials Guide: title text Arial Bold 28pt; body text Arial 18pt; background colour #E5F5FB. Text only — no images, no icons, no emblems, no logos of any authority, bank or company. A plain-text table is used only where the worked example needs one: slide 4 of subtopics 6.1, 6.2, 6.6 and 6.10, and slide 5 of subtopic 6.5. The figures of the module — F13, the roadmap over time, and F14, the matrix of dependencies (6.3); F15, the investment case as tables (6.4); F16, the governance structure on one page (6.6) — belong to the written guide and do not appear on the slides. The single-sentence summary slide uses 28pt body type and carries the subtopic's single message word for word."),

  H3("4.3 No individuals on screen"),
  P("No individual appears in any video. Two options are open: an AI-avatar narrator generated by ITU's production pipeline, or computer-screen-only voice-over. The choice is ITU's; the scripts are written for either. The demonstration segment of 6.9, when recorded, shows the screen only, with Progressa's invented records and no real person's data."),

  H3("4.4 Voice and tone"),
  P("Direct address, plain English at about the eighth-grade level, short sentences. The Strategist register leads with what the listener can take to a minister, a finance ministry or a development partner. Terms are explained in plain words when they first appear: band, quick win, horizon, wave, beacon, critical path, response matrix, adoption pathway, play. Each video stands on its own, with no reference to another video. Estonia's data exchange and Brazil's Pix (6.6) are the only examples from other countries; each is taken from a public source the outline names for subtopic 6.6."),

  H3("4.5 What the scripts claim, and what they do not"),
  P("Every figure about Progressa is invented and is said to be illustrative, on the slide and in the voice-over. Every public figure is given with its source and year: the World Bank's procurement finding and the rate of building identity that it cites (6.2, 6.4, 6.5). Nothing is built in this module. The demonstration segment of 6.9 says what the test runs and what counts as a pass, and that the run has not yet been recorded; until it is, its storyboard stands in its place and the slide shows the steps as text marked 'Storyboard — not yet run'."),

  H3("4.6 The worked examples, and where they live"),
  P("The worked examples of method steps 6 to 9 are E6 to E9 in the public repository, under KP3-DPI/examples/, with E5 for the findings; this bundle quotes them as they stand after the reconciling rounds of 1 October 2026. The table of cost against reuse (6.2), the sourcing table (6.5), the governance page (6.6), the agenda of the validation workshop (6.7), the monitoring sheet and its first review (6.8), the catalogue of plays (6.9) and the carry-over table (6.10) exist in this bundle only, and the written guide renders them from it."),

  H3("4.7 External links and 'Find the link in the description'"),
  P("No address is read aloud. Each subtopic's external-link list feeds the description of its video. The aggregate list across the ten subtopics is in Section 6."),

  pageBreak()
);

// ---------- CALIBRATION ITEMS ----------
body.push(
  H1("5. Open calibration items"),
  P("The drafting of version 0.1 raised the items below. They are recorded for the team and for discussion with ITU at the weekly call."),

  H3("5.1 Source claims to keep under watch"),
  P("Subtopic 6.5 states what GovStack's own pages describe: a self-assessment of a product against the functional requirements, tests of its interfaces, and a compliance level of 1 or 2. It says neither that GovStack certifies products nor that it does not, because the GovStack Architecture specification, edition 2.1.0, section 3, says that building block solutions are audited and certified before being made available, while GovStack's compliance pages describe levels, not certificates. The outline's source line for 6.5 now gives GovStack's testing as compliance by self-assessment and automated tests at two levels, and makes no statement on certification either. The web pages of GovStack and of the safeguards framework carry no edition; their wording, and the counts 'currently 18' principles and 13 risks, are to be read again before the final delivery."),
  P("Subtopics 6.2 and 6.4 quote the rate of about $4 to $11 a person registered for building a foundational identity system, which the World Bank's study of 2018 cites from another study, whose authors point out that few data points stand behind it; the scripts say so, and use it for an order of magnitude only."),

  H3("5.2 Examples written in this bundle"),
  P("Seven worked examples exist only in this bundle (section 4.6). They quote only the identifiers and figures that the reconciled examples carry; everything else in them is built for Progressa under the outline's rule that every example is built for Progressa. Three choices are made in them and are open to correction: the ministry of finance is named as the owner of the government's Payments block (6.5, 6.6), which no other file of KP3 names; the owner of the learner register is named as PLR's product owner at MoEYS (6.6), from the people the roadmap E7 names; and the readers of each tier of indicators (6.8) are set from the same people."),
  P("Two points that the second reconciling round left open are not quoted. Module 6 does not say which identifier the learner register keeps — the one PNIA gives to the register, or the one it gives to the registration service — and it does not say whether a law already gives PLR a basis; it quotes component C-02, an amendment to the education act making PLR the learner register, and component C-07, keeping the identifier PNIA gives and never the national number."),

  H3("5.3 Editorial calls"),
  P("Lines that deserve a deliberate keep, soften or cut decision: 'Lock-in is rarely one bad decision' (6.5); 'A roadmap written by a team, however good, binds no one' (6.7); 'A register nobody checks fills with errors, and a payment nobody reconciles reaches the wrong person' (6.8); 'It cannot decide anything in it' (6.9)."),
  P("The project's standing rules ask for African signposts. No accepted research has read a public source on an African country's roadmap, investment case or governance of shared blocks, so this module names none; one is added only when a public source for it has been read and accepted."),

  H3("5.4 Dependencies"),
  P("The demonstration segment of 6.9 needs only the scoring criteria of the assessment toolkit and Progressa's verified answers for the Digital Data and Interoperability domains, gathered into one input each; it can be recorded once those inputs are assembled. As the outline's table of figures sets out, figures F13 and F14 can be drawn with the worked example of step 7 (E7), F15 with that of step 8 (E8), and F16 now; none is drawn in this bundle."),

  pageBreak()
);

// ---------- ANNEX ----------
body.push(
  H1("6. Annex — aggregate external-link list"),
  P("Compiled across the ten subtopics for ITU's video production pipeline, to be split by subtopic into the description of each video. Every address is a public one, and each is the one the KP3 outline gives for its source, or the published edition of it."),
  genericTable([1700, 8000], ["Subtopic", "Sources referenced"], [
    ["6.1", "PAERA v1.0, section 5.4, step 5, and section 3.3.3 — https://paera.govstack.global/; UNDP, The DPI Approach: A Playbook, 2023, page 23 — https://www.undp.org/publications/dpi-approach-playbook"],
    ["6.2", "PAERA v1.0, sections 3.3.3 and 4.5 ('Budget') — https://paera.govstack.global/; World Bank, ID4D Practitioner's Guide, version 1.0, 2019, page 48 — https://documents1.worldbank.org/curated/en/248371559325561562/pdf/ID4D-Practitioner-s-Guide.pdf; World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 1 — https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf"],
    ["6.3", "PAERA v1.0, sections 5.7.1 to 5.7.5 and section 2.3 — https://paera.govstack.global/; UNDP, The DPI Approach: A Playbook, 2023, page 23 — https://www.undp.org/publications/dpi-approach-playbook; United Nations, Universal DPI Safeguards Framework, 2024, page 6 — https://www.dpi-safeguards.org/framework"],
    ["6.4", "United Nations, Universal DPI Safeguards Framework, 2024, principle O8, page 25 — https://www.dpi-safeguards.org/framework; UNDP, The DPI Approach: A Playbook, 2023, page 44 — https://www.undp.org/publications/dpi-approach-playbook; PAERA v1.0, section 4.5 ('Budget') — https://paera.govstack.global/; World Bank, Understanding Cost Drivers of Identification Systems, 2018, pages 7 and 9 — https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf"],
    ["6.5", "PAERA v1.0, sections 5.6 and 3.1.1 — https://paera.govstack.global/; World Bank, Understanding Cost Drivers of Identification Systems, 2018, page 7 — https://documents1.worldbank.org/curated/en/702641544730830097/pdf/Understanding-Cost-Drivers-of-Identification-Systems.pdf; United Nations, Universal DPI Safeguards Framework, 2024, principle F4, page 23, principle O9, page 25, and the risk of unsustainability, page 15 — https://www.dpi-safeguards.org/framework; GovStack Sandbox documentation, edition 1.1.1 — https://govstack.gitbook.io/sandbox; GovStack testing application — https://testing.govstack.global/en/requirements, with the GovStack website page 'How is Compliance Measured?'"],
    ["6.6", "PAERA v1.0, sections 3.1.1 and 3.1.2 — https://paera.govstack.global/; UNDP, The DPI Approach: A Playbook, 2023, pages 34 to 41 — https://www.undp.org/publications/dpi-approach-playbook; United Nations, Universal DPI Safeguards Framework, 2024, principle O7, page 25, and table 3.1, page 36 — https://www.dpi-safeguards.org/framework; Bank for International Settlements, BIS Bulletin No 52, 2022, page 5 — https://www.bis.org/publ/bisbull52.htm; GovStack Digital Registries specification, Version 3.0-alpha, DRS-6 — https://specs.govstack.global/registries; GovStack Consent specification, version 1.3.0, section 2 — https://consent.govstack.global/"],
    ["6.7", "PAERA v1.0, section 5.4, steps 6 to 8 — https://paera.govstack.global/; UNDP, The DPI Approach: A Playbook, 2023, page 23 — https://www.undp.org/publications/dpi-approach-playbook"],
    ["6.8", "United Nations, Universal DPI Safeguards Framework, 2024, pages 6, 15 and 43, and its web page — https://www.dpi-safeguards.org/framework; ITU Academy, 'Accelerating digital public infrastructure with safeguards' — https://academy.itu.int/training-courses/full-catalogue/accelerating-digital-public-infrastructure-safeguards; GovStack Digital Registries specification, Version 3.0-alpha, section 5.2, DRS-7 and DRS-21 — https://specs.govstack.global/registries; GovStack Payments specification, Version 3.0, sections 6.8 and 6.12 — https://specs.govstack.global/payments; PAERA v1.0, section 5.4, steps 7 and 8 — https://paera.govstack.global/"],
    ["6.9", "PAERA v1.0, section 5.3 — https://paera.govstack.global/"],
    ["6.10", "PAERA v1.0, Annex 3 and Annex 1, A1.2.5 — https://paera.govstack.global/; UNDP, Accelerating the SDGs through Digital Public Infrastructure: A Compendium of the Potential of Digital Public Infrastructure, 2023, page 4, Exhibit 2 — https://www.undp.org/publications/accelerating-sdgs-through-digital-public-infrastructure-compendium-potential-digital-public-infrastructure"]
  ]),
  spacer(120),
  P("All references are public and can be checked by any reader.")
);

// ============================================================================
// DOCUMENT
// ============================================================================
const doc = new Document({
  creator: "FiscalAdmin OÜ",
  title: "KP3 Module 6 — Video Script Bundle v0.1 (ITU-aligned)",
  description: "Video script bundle for KP3 Module 6 (Education DPI Roadmap — From a proven foundation to a national roadmap), written on the KP3 outline version 0.3 and aligned to ITU's Knowledge Products and Video Materials Guide.",
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
      children: [new TextRun({ text: "FiscalAdmin OÜ — ITU/Giga · KP3 Module 6 Script Bundle v0.1 · 2 October 2026",
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
  const out = process.env.OUT_PATH || path.join(__dirname, "KP3_Module6_Script_Bundle_v0.1.docx");
  fs.writeFileSync(out, buf);
  console.log("Wrote", out, "(" + buf.length + " bytes)");
});
