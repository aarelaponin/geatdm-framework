---
name: kp-build-render
description: >-
  Build and render a KP module's Node.js docx reliably, and verify it by eye — the environment setup and render
  pipeline otherwise rediscovered every module. Use WHENEVER the task is to build, render, regenerate or page-
  check a KP script bundle: "build the module", "render the docx", "regenerate the bundle", "node build failed",
  "docx not found", "convert to PDF and check the pages", "the table looks broken", "re-run the build after the
  edit". Owns the non-obvious conventions: the docx npm package is not preinstalled, so install it into a
  scratch dir and reach it via NODE_PATH; the build script writes the .docx next to itself (override with
  OUT_PATH); verification is soffice to PDF to pdftoppm page images, inspected. Enforces the cardinal rule:
  generated artefacts are never hand-edited — fixes go to the build script and you re-render. Run after
  authoring and before the gates; re-run after every gate's fix list.
compatibility: Node.js (any recent v18+), the `docx` npm package (v8.x), LibreOffice (`soffice`) and `pdftoppm` (poppler-utils) for rendering. All are available in the Cowork sandbox except `docx`, which this skill installs.
---

# KP build & render — the docx mechanics

## Why this exists

Authoring happens in a Node.js build script; the deliverable is the .docx it generates. Two things bite every fresh session if they are not written down: the `docx` package is not preinstalled in the sandbox, and the verify pipeline (LibreOffice → PDF → page images) has a couple of path gotchas. This skill captures both so a module builds and verifies in three commands instead of a round of trial and error.

**The cardinal rule, inherited from the contract's build-script convention: the generated .docx is never hand-edited.** Every fix — a typo, a citation correction from `kp-citation-verify`, a compliance fix from `kp-bundle-qa` — goes to the **build script**, then you re-render. Editing the docx directly guarantees the next render silently reverts it.

## Setup (once per sandbox)

`docx` is not preinstalled. Install it into a scratch directory and point `NODE_PATH` at it; the build script `require('docx')` then resolves:

```bash
# in a writable scratch dir (the outputs dir works)
cd "$OUTPUTS_DIR"            # e.g. the session outputs folder
npm init -y >/dev/null 2>&1
npm install docx@8 >/dev/null 2>&1
export NODE_PATH="$PWD/node_modules"
node -e "require('docx'); console.log('docx resolves')"
```

Notes:
- Pin `docx@8` — the helper API (`Document`, `Packer`, `Paragraph`, `TextRun`, `Table`, `ImageRun`, `PageNumber`, `Header`, `Footer`, `PageBreak`, `ShadingType`, `WidthType`, `BorderStyle`, `AlignmentType`, `HeadingLevel`) used by the build scripts is the v8 shape.
- `NODE_PATH` must be exported in the **same shell call** as the `node` build, because sandbox bash calls do not carry environment between invocations. Do the install, the export, and the build in one command, or re-export each time.

## Build

```bash
cd <module folder>          # e.g. itu-knowledge/_02_Design/_KP01
NODE_PATH=<scratch>/node_modules node build_kp1_moduleN_v0X.js
# -> "Wrote .../KP1_ModuleN_Script_Bundle_v0.X.docx (NNNNN bytes)"
```

The build script writes the .docx next to itself by default. Override the destination with `OUT_PATH=/some/where.docx` if you want it elsewhere.

## Verify (always, before sharing)

```bash
cd <module folder>
soffice --headless --convert-to pdf KP1_ModuleN_Script_Bundle_v0.X.docx --outdir /tmp/kp
pdftoppm -jpeg -r 90 -f 1 -l 1 /tmp/kp/KP1_ModuleN_Script_Bundle_v0.X.pdf /tmp/kp/cover
pdftoppm -jpeg -r 90 -f 5 -l 6 /tmp/kp/KP1_ModuleN_Script_Bundle_v0.X.pdf /tmp/kp/body
pdfinfo /tmp/kp/KP1_ModuleN_Script_Bundle_v0.X.pdf | grep Pages
```

Then **look at the images** (cover + a script page + a slide-spec page). Confirm:
- the cover renders with the version table;
- the green AI-tip boxes, blue visual-cue boxes and navy slide-spec table headers render;
- no broken table rows, no blank or near-empty pages;
- each subtopic starts on a fresh page;
- the single-message box reads as one quotable sentence.

`scripts/build_render.sh <build_script.js>` does install → build → PDF → page images in one go and prints where the images landed.

## Markdown export (the GitBook companion)

The build script also renders to clean, GitBook-ready Markdown — for diffable version control and the written companion content. `scripts/bundle_to_md.py <build_script.js> [out.md]` parses the build script (cover, at-a-glance, every subtopic with its header table, single-message callout, script beats, slide-spec table, four-part AI tip and metadata, plus production notes, calibration and annex) and writes `KP1_ModuleN_Script_Bundle_v0.X.md` next to it by default. It is pure Python, standard library only — no docx, no LibreOffice needed.

The `.md` is **generated, like the `.docx`** — never hand-edit it; edit the build script and regenerate, or the next run overwrites your change. The versioned home for the KP1 bundles (source `.js` + generated `.md`) is `10-Knowledge-Products/KP1-GEA/`; the `.docx` is rendered into the contract working folder via `OUT_PATH` and is not stored there.

## Gotchas (the ones that cost time)

- **Path translation.** In Cowork the file tools see user paths (`.../itu-knowledge/...`) while bash sees the mounted path (`/sessions/<id>/mnt/itu/itu-knowledge/...`). Use bash paths in bash, file-tool paths in Read/Write. The same file, two addresses.
- **Reading rendered images.** The Read tool cannot reach `/tmp`. Copy page images into a folder the file tools can see (the outputs dir) before reading them, or render straight there.
- **Cleanup may be denied.** `rm` in the outputs dir can return "Operation not permitted" — harmless; scratch images are cleared between sessions anyway.
- **LibreOffice is `soffice`** (also `libreoffice`) at `/usr/bin`. If a convert silently produces nothing, check the `--outdir` exists and the input path is the bash path.

## What good looks like

The build prints a byte count, the PDF has the expected page count (~27 for an 8-subtopic module), and the sample page images render cleanly with all four box styles intact. Then hand off to `kp-citation-verify` and `kp-bundle-qa`; apply their fix lists to the build script; re-run this skill.
