# KP0 — Working with AI in Government

This folder holds the Knowledge Product that comes before the four others. It teaches a government team to
work with an AI assistant, from one good chat to work handed over for days and checked by someone other than
the one who did it. The plan is `KP0_Plan_v0.4.md`; the concept note is `ai-knowledge-product-layers.md`.

KP0 differs from KP1 to KP4 in one way that shapes every file here: each subtopic is a **written page**, and each
module has **one video**, a person on camera, covering its pages (plan, section 7).

## What is written so far

| Module | Layer | Pages | Video | Script | Status |
|---|---|---|---|---|---|
| 0 | Introduction | 0.0 | V0 | — | not started |
| 1 | Chat | 1.1 – 1.4 | V1 *The draft that looked right* | `build_kp0_module1_v01.js` | v0.1 draft, gate passed |
| 2 | Prepare | 2.1 – 2.4, and the reference page *Assistants compared* | V2 *Context once, then skills* | `build_kp0_module2_v01.js` | v0.1 draft, gate passed |
| 3 – 5 | Orchestrate | — | V3 – V6 | — | not started |

Each video's story beat is left to its speaker, who names a real case with a date before the cut is decided
(plan, decision 4).

## What is in this folder

| What | Where | How it is made |
|---|---|---|
| The script of each module: every page (the concept, In the tool, the worked example, the AI usage tip, the sources), the module's video, its self-check, production notes and calibration items | `build_kp0_moduleN_v01.js` | Written by hand. This file is the one source of the module |
| The same module as readable text | `KP0_ModuleN_Script_Bundle_v0.1.md` | Generated from the script beside it; never edited by hand |
| The Word document for review | not kept here | Generated from the script |
| The course guide: a home page, one page per module, each subtopic page, each module's self-check, and the reference page Assistants compared. No video is embedded or announced yet | `../gitbook/kp0/`, with its manifest `../gitbook/pages-kp0.json` | Generated from the scripts by the kit's `render_kp0.py`; never edited by hand |

The worked examples are carried by each page of the script, and the blank project brief by page 2.2. The GitBook
space itself is not yet created, and the decks, the figures and the videos are not yet made (plan, section 13,
steps 6 and 7).

## Making the generated files again

With the production kit (`KP_KIT`, see `../ITU-Giga-KP-Plugin/POINTER.md`), from this folder:

    # the readable text of a module, after its script has changed
    python3 "$KP_KIT"/skills/kp-build-render/scripts/bundle_to_md.py build_kp0_module1_v01.js
    # the gate; a KP0 script is checked under the gate's KP0 profile
    python3 "$KP_KIT"/skills/kp-bundle-qa/scripts/qa_bundle.py build_kp0_module1_v01.js
    # the course guide, then its check (KP_ROOT: the folder that holds this one and gitbook/)
    KP_ROOT="$(cd .. && pwd)" python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/render_kp0.py
    KP_ROOT="$(cd .. && pwd)" python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/gitbook_qa.py
    # the Word document (needs the docx package for Node)
    node build_kp0_module1_v01.js
