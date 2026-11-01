# KP0 — Working with AI in Government

This folder holds the Knowledge Product that comes before the four others. It teaches a government team to
work with an AI assistant, from one good chat to work handed over for days and checked by someone other than
the one who did it. The concept note is `ai-knowledge-product-layers.md`. Each module's build script is its own
record of what the module holds; the earlier course plans are in `_retired/`, and the last plan and the Orchestrate
section plan are in git history.

KP0 differs from KP1 to KP4 in one way that shapes every file here: each subtopic is a **written page**, and the
pages carry the whole content. KP0 has **no videos** for now (taken out on 1 November 2026, for lack of time to
record them); each module's calibration items say so, and a video can later be added over a run of pages without
changing a page.

## What is written so far

| Module | Layer | Pages | Script | Status |
|---|---|---|---|---|
| 0 | Introduction | 0.0 | — | not started |
| 1 | Chat | 1.1 – 1.4 | `build_kp0_module1_v01.js` | v0.1 draft, gate passed, on GitBook |
| 2 | Prepare | 2.1 – 2.4 | `build_kp0_module2_v01.js` | v0.1 draft, gate passed, on GitBook |
| 3 | Orchestrate: one piece of work, start to finish | 3.1 – 3.4 | `build_kp0_module3_v01.js` | v0.1 draft, gate passed, GitBook pages made, not yet published |
| 4 | Orchestrate: running it for days | 4.1 – 4.4 | `build_kp0_module4_v01.js` | v0.1 draft, gate passed, GitBook pages made, not yet published |
| 5 | Orchestrate with the plugin: build a toy prototype | 5.1 – 5.5 | `build_kp0_module5_v01.js` | v0.1 draft, gate passed, GitBook pages made, not yet published; screenshots wait on the released plugin |

Two ways through: the Strategist takes Modules 0 to 3; the Architect takes all six. Modules 3 and 4 run the cycle
by hand; Module 5 is the one module that needs the orchestrator plugin.

## What is in this folder

| What | Where | How it is made |
|---|---|---|
| The script of each module: every page (Try it first, the concept, In the tool, the AI usage tip, the sources), its self-check, production notes and calibration items | `build_kp0_moduleN_v01.js` | Written by hand. This file is the one source of the module |
| The same module as readable text | `KP0_ModuleN_Script_Bundle_v0.1.md` | Generated from the script beside it; never edited by hand |
| The Word document for review | not kept here | Generated from the script |
| The course guide: a home page, one page per module, each subtopic page, each module's self-check, and the starter folder's pages | `../gitbook/kp0/`, with its manifest `../gitbook/pages-kp0.json` | Generated from the scripts by the kit's `render_kp0.py`; never edited by hand |
| The starter folder for Modules 3 to 5: forms, chat prompts, the log, the pages of faults, one finished cycle, the mini registry brief | `toolkit/orchestrate-starter/` | Written by hand |
| The registry prototype's record, frozen on 31 October 2026, behind every Try it first | `examples/plr/` | Copied from the prototype's run |
| Module 5's screenshots | `figures/` | Taken on a real run of the toy |

The decks are not yet made, and Module 0 is not yet written.

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
