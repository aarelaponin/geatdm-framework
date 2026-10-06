# The Orchestrator: an operational manual

This folder holds the operational manual of the Orchestrator. The manual says when to use the Orchestrator, why, and how.

## Who it is for

The manual is for the people who use the four ITU/Giga Knowledge Products on education digital transformation:

- KP1, government enterprise architecture;
- KP2, the government interoperability framework;
- KP3, the roadmap for education digital public infrastructure;
- KP4, the design of a public service on shared building blocks.

You may be a manager in a ministry of education or in a digital agency, or a member of the technical team that works with that manager.

## Which file to open

Open `OM_Orchestrator_v0.3_sent-to-ITU_2026-10-06.docx`. This is the manual as it was sent to ITU on 6 October 2026. It is kept unchanged under that name.

## What else is here

| File | What it is |
|------|------------|
| `OM_Orchestrator_v0.3.md` | The text of the manual. Every change is made here. |
| `build_om_docx.py` | The program that builds the Word document from the text and the figures. |
| `figures/` | The programs that draw the twenty figures, and the figures they draw. |

The Word document is never edited by hand. A change goes into the text or into a program, and the document is built again.

## How to build it again

You need Python 3 with the packages `python-docx`, `matplotlib` and `Pillow`. LibreOffice is optional; with it, the contents page carries page numbers. In this folder, run:

```text
python3 figures/draw_all.py && python3 build_om_docx.py
```

The first program draws and checks every figure. The second builds the document. Each one stops with a message if a check fails. A new version gets a new number in the text and in `build_om_docx.py`, and a new file name.

## The learner skills

The skills that the learners of the four Knowledge Products use are in `../ea-plays/`.
