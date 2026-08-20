---
name: kp-deck-builder
description: >-
  Build the .pptx slide decks for a KP module's videos on the ITU template — one combined module deck
  with the voice-over in speaker notes, split per-video decks with title cards, and the scripts-only
  companion .md. Use WHENEVER the task is to create, rebuild, restyle or split KP presentation slides:
  "create a presentation for Module N", "make the deck from the script bundle", "build the pptx",
  "use the ITU template", "split the deck per video/topic", "add a title card", "fix the slide
  numbering", "export just the scripts". Owns the non-obvious conventions: the ITU template's layout
  indices and baked footers, the module-scoped numbering rule (never "Video x of N"), the deck grammar
  (section slide = video title slide, big-sentence climax, sources slide per video), the educational
  design rules (assertion headlines, VO in notes not on slides, retrieval moments, lumpy density) and
  the AI-deck anti-pattern gate. Enforces the cardinal rule: decks are generated from a build script —
  fixes go to the script, then re-render and re-split.
compatibility: >-
  python-pptx (pip), LibreOffice (`soffice`) and `pdftoppm` (poppler-utils) for render QA, Pillow for
  contact sheets — all available in the Cowork sandbox. The Cowork pptx skill's validate.py is used
  when present but is optional.
---

# KP deck builder — module presentations on the ITU template

## Why this exists

Each KP script bundle specifies, per subtopic video, the on-screen slides (cues in italics), the
spoken voice-over, and the slide branding. Turning a bundle into a deck was solved once, end to end,
for KP1 Module 1 — template anatomy probed, layout indices mapped, numbering conventions corrected
after review, per-video splitting worked out. This skill captures all of it so the next module's deck
is a composition job, not a rediscovery job.

**The cardinal rule, same as the docx pipeline: the .pptx is never hand-edited.** The deck comes from
a Python build script stored next to the module's bundle (e.g. `KP1-GEA/build_kp1_module1_deck_v01.py`).
Every fix — a wording change, a numbering correction, a new slide — goes to the build script; then
re-render the combined deck and re-run the split. Hand-editing the .pptx guarantees the next build
silently reverts it, and the split decks drift from the combined one.

## Inputs

- The module's script bundle (`KP*_Module*_Script_Bundle_v*.md` or its build `.js`) — slide cues,
  voice-over, single messages, runtimes, sources, metadata.
- `scripts/ITU_ppt_template.pptx` — the ITU video template, shipped with this skill. 13.333 × 7.5 in
  canvas. `deck_lib.open_template()` defaults to it; pass a path to use a different template.
- The worked example: `KP1-GEA/build_kp1_module1_deck_v01.py` (combined deck) and
  `KP1-GEA/videos/module_1/decks/split_spec.json` (split). Read them
  before building a new module. The build script is **content only** — it imports every helper,
  colour and layout index from `deck_lib.py`; copy that arrangement, never the helpers themselves.

## Template anatomy (probed, don't re-probe)

| Fact | Value |
|---|---|
| Slide 1 | Video-title cover: title / subtitle / Length+Audience text boxes, ITU logo, grey `[add image]` block (`Group 19` + `Picture Placeholder 6`) — edit in place, replace the grey block with the blue motif panel |
| Slide 2 | Agenda on layout 'Big text aligned right + Italic': left list placeholder (**inherits RIGHT alignment — force LEFT**), right italic core-message box |
| Layout 11 | 'Blank - Footer (white bg)' — the content-slide base. **www.itu.int + page number are baked in — never add your own right footer here** (it doubles) |
| Layout 12 / 13 | Blank white / blank blue (`F5FAFC` full-bleed) — 13 is the section-divider and big-sentence base; it has **no** baked footer, so add `www.itu.int` yourself if wanted |
| Layout 14 | Thank-you slide — the "Thank you!" text is baked into the layout; just add the slide |
| Colours | ITU Blue `009CD6`, dark accent `006E96`, tint `E5F5FB`, ink `1A1A1A`, grey `595959` |
| Type | Arial only. Guide branding: Bold 28pt titles, 18pt body; kickers/footers 9–13pt |
| Slides 3–38 | Template examples — delete via `sldIdLst` + `drop_rel`; python-pptx drops orphan parts on save |

All of this is encoded in `scripts/deck_lib.py` (constants, layout indices, `edit_cover`, `edit_agenda`,
`delete_template_slides`, and the slide helpers below).

## The deck grammar

One combined module deck, sectioned so any video can be lifted out standalone:

1. **Cover** — template slide 1 edited in place; right panel replaced with a flat ITU-blue motif
   (for KP1: the five lifecycle phases). Length = total minutes across the module's videos.
2. **Agenda** — the module's videos with runtimes on the left; the module's argument in one or two
   italic sentences on the right.
3. **Per video, in order:** a blue **section slide** that doubles as the standalone video's opening
   (kicker, big number, title, single message in italics, runtime line) → the **content slides** from
   the bundle's slide cues → for most videos a blue **"In one sentence"** climax slide (the quotable,
   screenshot-ready line) → a **Sources** slide ("Find the link in the description.", no narration).
4. **Thank-you** (layout 14) — combined deck only; standalone videos end on their sources slide.

**Speaker notes carry the voice-over**, slide by slide, plus production cues (reveal order, "hold this
a beat longer", retrieval prompts). Notes are the spoken words — never a paraphrase of the slide. This
also resolves the talk-vs-leave-behind tension: slides stay sparse, the notes and the scripts-only
companion `.md` carry the prose.

**Numbering and terminology (corrected after review — do not regress):**
- Kickers are module-scoped: `KP1 · MODULE 1 · VIDEO 1.3`. **Never "Video 1.3 of 8"** — against a
  six-module KP it reads as a claim about the whole product. Either scope the count to the module
  explicitly ("~34 mins across 8 videos" on the cover is fine) or drop it.
- User-facing label is **Module**, not Topic, even where the bundle says Topic.
- Left footer on content slides is the wayfinding tag: `1.3 · Why projects can't do this themselves`.

## Design rules (educational deck, not corporate deck)

The bundle's cues are the floor; these rules are how to render them well.

- **Assertion headlines.** One declarative sentence per slide title — "The country pays in four
  directions at once", not "Costs of fragmentation". If you can't write the sentence, you don't yet
  know what the slide is for. Sharpen the bundle's topic-label titles; keep its good ones.
- **Diagram on the slide, sentences in the mouth.** Slides hold fragments, structure and the specific
  numbers (numbers survive better on screen); full prose goes to notes. Exception: the climax slides
  are deliberately one full sentence, large.
- **Lumpy density, deliberate rhythm.** A 5-row slide next to a single-sentence slide is correct.
  Give the module one deep centrepiece (KP1 M1: the lifecycle one-pager and its per-phase slides),
  one emotional peak (the only full-colour block — KP1 M1: Ask 4), and a quotable climax per video.
  Do not equalise slide weight and do not force rule-of-three symmetry the content doesn't have.
- **At least one retrieval moment per module, with the answer delivered.** A prediction prompt in the
  notes before a reveal ("how long to a cabinet-ready roadmap? — answer on the timeline slide") costs
  30 seconds. An unanswered quiz is worse than none.
- **Numbers only from the bundle.** The bundle's calibration section flags which figures still need
  verification — never add new unsourced precision, never invent benchmarks.
- **No icons, no emoji, no stock imagery, no decorative charts.** Text-only per the ITU guide; the
  permitted visuals are structural: text panels, proportional bars (the two-paths bar where length IS
  the argument), flows with sign-off diamonds, tables, timelines. Bold only the decisive phrase
  ("binding, not advisory"), not scattered keywords.
- **Banned vocabulary:** leverage, robust, seamless, holistic, unlock, empower, actionable insights,
  "in today's fast-paced landscape", and "It's not just X — it's Y" constructions. The bundles are
  written at 8th-grade register in direct address — keep it.

## Build

```bash
pip install python-pptx --quiet   # if missing
cd 10-Knowledge-Products/KP1-GEA  # module folder
python build_kp1_moduleN_deck_v0X.py          # writes the combined deck
```

The script puts `deck_lib.py`'s directory on `sys.path` itself and defaults `TEMPLATE` to the copy
shipped with this skill, so it runs from any cwd; `TEMPLATE=` and `OUT_PATH=` override both. Its
default output is the module's deck folder (`videos/module_<N>/decks/`), next to the split spec.

For a new module, copy the worked example and rewrite the content sections; compose slides from
`deck_lib.py` helpers: `section_slide`, `title` (+`tick`), `rows_slide` (numbered or plain rows with
concrete example lines), `panel`/`panel_text` (comparison columns, 2×2 grids — only when the content
is genuinely 4-cell), `mini_strip` (per-phase progress), `big_slide`, `sources_slide`, `footer`,
`notes`. Keep slide-by-slide fidelity to the bundle's cues "to a high degree" — reorganise a slide
only when a design rule above demands it.

## QA (always, before sharing)

```bash
bash scripts/qa_deck.sh KP1_ModuleN_Deck_v0.X.pptx   # PDF → per-slide JPGs → contact sheets
```

Then **look at every sheet**. The defects that actually occurred: doubled `www.itu.int` footer
(custom footer on layout 11), agenda list right-aligned (inherited alignment), connector lines drawn
over panels (draw connectors first), text overflow on long rows. Also grep for leftovers:

```bash
markitdown deck.pptx | grep -iE "lorem|ipsum|TODO|\[insert|\[add image\]|\[xx\]|of 8"
```

If the Cowork pptx skill is present, also run its `scripts/office/validate.py deck.pptx
--original scripts/ITU_ppt_template.pptx` (the `--original` baseline suppresses the template's own quirks).

## Split into per-video decks

```bash
python scripts/split_module_deck.py \
  videos/module_1/decks/KP1_M1_Deck_v0.1.pptx \
  videos/module_1/decks/split_spec.json \
  videos/module_1/decks/
```

The spec (worked example: `videos/module_1/decks/split_spec.json`) lists each video's code, title,
minutes, single message and its **1-indexed inclusive slide range** in the combined deck. Each output
keeps slide 1 (the cover, retitled in place as the video's title card: `1.3 — <title>`, kicker
`… · Module 1 · Video 1.3`, the video's single message and runtime) plus that video's slides,
untouched, notes included. The agenda and thank-you slides stay only in the combined deck. After any
rebuild of the combined deck, re-run the split — ranges may have shifted; verify counts against the
grammar (section + content + sources + 1 title card).

## The scripts-only companion

Ship `KP*_Module*_Scripts_v0.X.md` alongside the deck: narration only, one section per video, opening
with the single message, then the voice-over under headings matching the deck's slide titles, sources
slides marked "*(No narration.)*". It is generated from the same content as the notes — keep the two
in sync by editing the build script first.

## Gotchas

- **`drop_rel` + `sldIdLst.remove` is the whole deletion** — python-pptx discards unreferenced slide
  parts on save; no manual package cleanup needed.
- **Notes require the template's notes master** — `slide.notes_slide` works on this template; set
  notes via `deck_lib.notes()` once per slide.
- **pptxgenjs is the wrong tool here** — template-based work is python-pptx territory; pptxgenjs
  cannot start from the ITU template.
- **LibreOffice renders Arial true to width**, so the contact-sheet overflow check is trustworthy.
- **Cover title length**: split title cards drop to 24pt when the video title exceeds ~40 chars.
- **Path duality in Cowork**: file tools see user paths, bash sees the mounted path — same file, two
  addresses.

## What good looks like

The combined deck validates and renders with no overflow, one footer per slide, module-scoped
numbering, an assertion in every headline you can read as a standalone argument, voice-over in every
content slide's notes, and one obvious centrepiece. The split decks' slide counts match the grammar,
and each opens with a correct title card. Then: `SendUserFile` the decks, commit them to the module
folder (`videos/` for the splits), and log any wording changes back into the script bundle via
`kp-build-render` so docx and deck stay consistent.
