const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, LevelFormat, HeadingLevel,
  BorderStyle, WidthType, ShadingType, PageNumber, PageBreak,
  TableOfContents, Tab, TabStopType, TabStopPosition
} = require("docx");

// ─── Configuration ───────────────────────────────────────────
const FONT = "Calibri";
const COLORS = {
  primary: "1F4E79",
  secondary: "2E75B6",
  accent: "4472C4",
  tableHeader: "1F4E79",
  tableHeaderText: "FFFFFF",
  tableAltRow: "D6E4F0",
  coverTitle: "1F4E79",
  coverSubtitle: "2E75B6",
  text: "333333",
  lightGray: "F2F2F2",
  medGray: "E0E0E0",
  border: "BFBFBF",
};

const PAGE_WIDTH = 11906;
const PAGE_HEIGHT = 16838;
const MARGIN = 1440;
const CONTENT_WIDTH = PAGE_WIDTH - 2 * MARGIN;

const BASE_DIR = __dirname.replace(/\/10_docx_generation$/, "");
const INPUT_PATH = `${BASE_DIR}/D6-MoH-Future-State-Architecture-v1.0.md`;
const OUTPUT_PATH = `${BASE_DIR}/D6-MoH-Future-State-Architecture-v1.0.docx`;

const mdContent = fs.readFileSync(INPUT_PATH, "utf-8");
const lines = mdContent.split("\n");

const border = { style: BorderStyle.SINGLE, size: 1, color: COLORS.border };
const borders = { top: border, bottom: border, left: border, right: border };
const cellMargins = { top: 60, bottom: 60, left: 100, right: 100 };

function parseInlineFormatting(text) {
  const runs = [];
  const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) runs.push(new TextRun({ text: text.slice(lastIndex, match.index), font: FONT, size: 22, color: COLORS.text }));
    if (match[2]) runs.push(new TextRun({ text: match[2], bold: true, italics: true, font: FONT, size: 22, color: COLORS.text }));
    else if (match[3]) runs.push(new TextRun({ text: match[3], bold: true, font: FONT, size: 22, color: COLORS.text }));
    else if (match[4]) runs.push(new TextRun({ text: match[4], italics: true, font: FONT, size: 22, color: COLORS.text }));
    else if (match[5]) runs.push(new TextRun({ text: match[5], font: "Consolas", size: 20, color: "C7254E", shading: { fill: "F9F2F4", type: ShadingType.CLEAR } }));
    else if (match[6]) runs.push(new TextRun({ text: match[6], font: FONT, size: 22, color: COLORS.secondary, underline: {} }));
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) runs.push(new TextRun({ text: text.slice(lastIndex), font: FONT, size: 22, color: COLORS.text }));
  if (runs.length === 0) runs.push(new TextRun({ text, font: FONT, size: 22, color: COLORS.text }));
  return runs;
}

function parseInlineFormattingForCell(text, fontSize = 20) {
  const runs = [];
  const regex = /(\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match;
  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) runs.push(new TextRun({ text: text.slice(lastIndex, match.index), font: FONT, size: fontSize, color: COLORS.text }));
    if (match[2]) runs.push(new TextRun({ text: match[2], bold: true, italics: true, font: FONT, size: fontSize, color: COLORS.text }));
    else if (match[3]) runs.push(new TextRun({ text: match[3], bold: true, font: FONT, size: fontSize, color: COLORS.text }));
    else if (match[4]) runs.push(new TextRun({ text: match[4], italics: true, font: FONT, size: fontSize, color: COLORS.text }));
    else if (match[5]) runs.push(new TextRun({ text: match[5], font: "Consolas", size: fontSize - 2, color: "C7254E" }));
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) runs.push(new TextRun({ text: text.slice(lastIndex), font: FONT, size: fontSize, color: COLORS.text }));
  if (runs.length === 0) runs.push(new TextRun({ text, font: FONT, size: fontSize, color: COLORS.text }));
  return runs;
}

function parseTable(tableLines) {
  const rows = [];
  for (const line of tableLines) {
    const cells = line.split("|").slice(1, -1).map(c => c.trim());
    if (cells.every(c => /^[-:]+$/.test(c))) continue;
    rows.push(cells);
  }
  if (rows.length === 0) return null;
  const numCols = Math.max(...rows.map(r => r.length));
  if (numCols === 0) return null;
  const colWidth = Math.floor(CONTENT_WIDTH / numCols);
  const columnWidths = Array(numCols).fill(colWidth);
  columnWidths[numCols - 1] = CONTENT_WIDTH - colWidth * (numCols - 1);
  const tableRows = rows.map((row, rowIdx) => {
    const isHeader = rowIdx === 0;
    const paddedRow = [...row];
    while (paddedRow.length < numCols) paddedRow.push("");
    const cells = paddedRow.slice(0, numCols).map((cellText, colIdx) => {
      const cellRuns = isHeader
        ? [new TextRun({ text: cellText || "", bold: true, font: FONT, size: 20, color: COLORS.tableHeaderText })]
        : parseInlineFormattingForCell(cellText || "", 20);
      return new TableCell({
        borders, width: { size: columnWidths[colIdx], type: WidthType.DXA }, margins: cellMargins,
        shading: isHeader ? { fill: COLORS.tableHeader, type: ShadingType.CLEAR }
          : (rowIdx % 2 === 0 ? { fill: COLORS.tableAltRow, type: ShadingType.CLEAR } : { fill: "FFFFFF", type: ShadingType.CLEAR }),
        children: [new Paragraph({ children: cellRuns, spacing: { before: 20, after: 20 } })],
      });
    });
    return new TableRow({ children: cells });
  });
  return new Table({ width: { size: CONTENT_WIDTH, type: WidthType.DXA }, columnWidths, rows: tableRows });
}

function parseCodeBlock(codeLines) {
  return codeLines.map(line => new Paragraph({
    children: [new TextRun({ text: line || " ", font: "Consolas", size: 18, color: "2B2B2B" })],
    spacing: { before: 0, after: 0, line: 276 }, shading: { fill: COLORS.lightGray, type: ShadingType.CLEAR }, indent: { left: 360 },
  }));
}

function parseMermaidBlock(mermaidLines) {
  return [
    new Paragraph({ children: [new TextRun({ text: "\u{1F4CA} Architecture Diagram (Mermaid notation \u2014 render with a Mermaid viewer)", italics: true, font: FONT, size: 20, color: COLORS.secondary })], spacing: { before: 120, after: 60 }, indent: { left: 360 } }),
    ...mermaidLines.map(line => new Paragraph({
      children: [new TextRun({ text: line || " ", font: "Consolas", size: 16, color: "2B2B2B" })],
      spacing: { before: 0, after: 0, line: 264 }, shading: { fill: COLORS.lightGray, type: ShadingType.CLEAR }, indent: { left: 360 },
    })),
  ];
}

function buildContentSections() {
  const children = [];
  let i = 0, inCodeBlock = false, codeBlockLines = [], codeBlockLang = "", inTable = false, tableLines = [];
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith("```")) {
      if (!inCodeBlock) {
        if (inTable) { const tbl = parseTable(tableLines); if (tbl) { children.push(tbl); children.push(new Paragraph({ spacing: { after: 120 } })); } inTable = false; tableLines = []; }
        inCodeBlock = true; codeBlockLang = line.slice(3).trim(); codeBlockLines = [];
      } else {
        children.push(...(codeBlockLang === "mermaid" ? parseMermaidBlock(codeBlockLines) : parseCodeBlock(codeBlockLines)));
        children.push(new Paragraph({ spacing: { after: 120 } }));
        inCodeBlock = false; codeBlockLines = []; codeBlockLang = "";
      }
      i++; continue;
    }
    if (inCodeBlock) { codeBlockLines.push(line); i++; continue; }
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      if (!inTable) { inTable = true; tableLines = []; }
      tableLines.push(line); i++; continue;
    } else if (inTable) {
      const tbl = parseTable(tableLines); if (tbl) { children.push(tbl); children.push(new Paragraph({ spacing: { after: 120 } })); }
      inTable = false; tableLines = [];
    }
    if (/^---+$/.test(line.trim())) { i++; continue; }
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      if (level === 1) { i++; continue; }
      let headingLevel, fontSize, color;
      if (level === 2) { headingLevel = HeadingLevel.HEADING_1; fontSize = 32; color = COLORS.primary; }
      else if (level === 3) { headingLevel = HeadingLevel.HEADING_2; fontSize = 28; color = COLORS.primary; }
      else if (level === 4) { headingLevel = HeadingLevel.HEADING_3; fontSize = 24; color = COLORS.secondary; }
      else { headingLevel = HeadingLevel.HEADING_4; fontSize = 22; color = COLORS.secondary; }
      if (level === 2 && !text.startsWith("Front Matter")) children.push(new Paragraph({ children: [new PageBreak()] }));
      children.push(new Paragraph({ heading: headingLevel, children: [new TextRun({ text, bold: true, font: FONT, size: fontSize, color })], spacing: { before: level === 2 ? 360 : 240, after: 120 } }));
      i++; continue;
    }
    const bulletMatch = line.match(/^(\s*)[-*]\s+(.+)/);
    if (bulletMatch) {
      children.push(new Paragraph({ numbering: { reference: "bullets", level: Math.min(Math.floor(bulletMatch[1].length / 2), 2) }, children: parseInlineFormatting(bulletMatch[2]), spacing: { before: 40, after: 40 } }));
      i++; continue;
    }
    const numMatch = line.match(/^(\s*)\d+\.\s+(.+)/);
    if (numMatch) {
      children.push(new Paragraph({ numbering: { reference: "numbers", level: Math.min(Math.floor(numMatch[1].length / 3), 2) }, children: parseInlineFormatting(numMatch[2]), spacing: { before: 40, after: 40 } }));
      i++; continue;
    }
    if (line.trim() === "") { i++; continue; }
    children.push(new Paragraph({ children: parseInlineFormatting(line), spacing: { before: 60, after: 60, line: 312 }, alignment: AlignmentType.JUSTIFIED }));
    i++;
  }
  if (inTable) { const tbl = parseTable(tableLines); if (tbl) children.push(tbl); }
  return children;
}

function buildCoverPage() {
  return [
    ...Array(6).fill(null).map(() => new Paragraph({ spacing: { after: 200 } })),
    new Paragraph({ children: [new TextRun({ text: "\u2501".repeat(60), font: FONT, size: 20, color: COLORS.primary })], alignment: AlignmentType.CENTER }),
    new Paragraph({ spacing: { after: 200 } }),
    new Paragraph({ children: [new TextRun({ text: "Future State \u201CTo-Be\u201D Architecture", bold: true, font: FONT, size: 52, color: COLORS.coverTitle })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }),
    new Paragraph({ children: [new TextRun({ text: "Ministry of Health \u2014 Progressa", bold: true, font: FONT, size: 36, color: COLORS.coverSubtitle })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
    new Paragraph({ children: [new TextRun({ text: "\u2501".repeat(60), font: FONT, size: 20, color: COLORS.primary })], alignment: AlignmentType.CENTER }),
    new Paragraph({ spacing: { after: 400 } }),
    new Paragraph({ children: [new TextRun({ text: "Deliverable D6", font: FONT, size: 28, color: COLORS.secondary })], alignment: AlignmentType.CENTER, spacing: { after: 80 } }),
    new Paragraph({ children: [new TextRun({ text: "ITU Enterprise Architecture Initiative", font: FONT, size: 24, color: COLORS.text })], alignment: AlignmentType.CENTER, spacing: { after: 80 } }),
    new Paragraph({ children: [new TextRun({ text: "Contract [contract reference]", font: FONT, size: 22, color: COLORS.text })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
    new Paragraph({ children: [new TextRun({ text: "Digital Transformation for Africa", font: FONT, size: 22, color: COLORS.text })], alignment: AlignmentType.CENTER, spacing: { after: 40 } }),
    new Paragraph({ children: [new TextRun({ text: "Regional Digital Integration Project (RDIP)", font: FONT, size: 22, color: COLORS.text })], alignment: AlignmentType.CENTER, spacing: { after: 40 } }),
    new Paragraph({ children: [new TextRun({ text: "Loan/Credit/Grant No. [reference]", font: FONT, size: 22, color: COLORS.text })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }),
    new Paragraph({ children: [new TextRun({ text: "Version 1.0 \u2014 Draft for Stakeholder Review", bold: true, font: FONT, size: 24, color: COLORS.secondary })], alignment: AlignmentType.CENTER, spacing: { after: 80 } }),
    new Paragraph({ children: [new TextRun({ text: "February 2026", font: FONT, size: 24, color: COLORS.text })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

function buildTOCPage() {
  return [
    new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text: "Table of Contents", bold: true, font: FONT, size: 32, color: COLORS.primary })], spacing: { after: 240 } }),
    new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-4" }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

async function buildDocument() {
  console.log("Parsing markdown content...");
  const contentChildren = buildContentSections();
  console.log(`Parsed ${contentChildren.length} document elements`);
  const doc = new Document({
    creator: "ITU Enterprise Architecture Initiative",
    title: "D6 - Future State To-Be Architecture: Ministry of Health, Progressa",
    description: "Deliverable D6 under Contract [contract reference]",
    styles: {
      default: { document: { run: { font: FONT, size: 22, color: COLORS.text } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 32, bold: true, font: FONT, color: COLORS.primary }, paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 28, bold: true, font: FONT, color: COLORS.primary }, paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 24, bold: true, font: FONT, color: COLORS.secondary }, paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 2 } },
        { id: "Heading4", name: "Heading 4", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 22, bold: true, font: FONT, color: COLORS.secondary }, paragraph: { spacing: { before: 180, after: 80 }, outlineLevel: 3 } },
      ],
    },
    numbering: { config: [
      { reference: "bullets", levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } },
        { level: 2, format: LevelFormat.BULLET, text: "\u2013", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
      ] },
      { reference: "numbers", levels: [
        { level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.LOWER_LETTER, text: "%2)", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } },
        { level: 2, format: LevelFormat.LOWER_ROMAN, text: "%3.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
      ] },
    ] },
    features: { updateFields: true },
    sections: [
      { properties: { page: { size: { width: PAGE_WIDTH, height: PAGE_HEIGHT }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } } }, children: buildCoverPage() },
      {
        properties: { page: { size: { width: PAGE_WIDTH, height: PAGE_HEIGHT }, margin: { top: MARGIN, right: MARGIN, bottom: MARGIN, left: MARGIN } } },
        headers: { default: new Header({ children: [new Paragraph({ children: [new TextRun({ text: "D6 \u2014 Future State Architecture: Ministry of Health, Progressa", font: FONT, size: 18, color: "999999", italics: true })], alignment: AlignmentType.RIGHT, spacing: { after: 0 } })] }) },
        footers: { default: new Footer({ children: [new Paragraph({ children: [
          new TextRun({ text: "ITU Enterprise Architecture Initiative \u2014 [contract reference]", font: FONT, size: 16, color: "999999" }),
          new TextRun({ text: "\t", font: FONT, size: 16 }),
          new TextRun({ text: "Page ", font: FONT, size: 16, color: "999999" }),
          new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: "999999" }),
          new TextRun({ text: " of ", font: FONT, size: 16, color: "999999" }),
          new TextRun({ children: [PageNumber.TOTAL_PAGES], font: FONT, size: 16, color: "999999" }),
        ], alignment: AlignmentType.LEFT, tabStops: [{ type: TabStopType.RIGHT, position: CONTENT_WIDTH }] })] }) },
        children: [...buildTOCPage(), ...contentChildren],
      },
    ],
  });
  console.log("Generating DOCX buffer...");
  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT_PATH, buffer);
  console.log(`DOCX written to ${OUTPUT_PATH}`);
  console.log(`File size: ${(buffer.length / 1024 / 1024).toFixed(2)} MB`);
}

buildDocument().catch(err => { console.error("Error:", err); process.exit(1); });
