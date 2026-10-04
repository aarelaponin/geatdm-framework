# KP3 — Education Digital Public Infrastructure Roadmap

This folder holds the third of four Knowledge Products made for the Giga programme of the International
Telecommunication Union (ITU). It is a course for the people in a government who prepare its decisions on
digital public infrastructure: the shared digital systems, such as digital identity, digital payments and
the exchange of data between public bodies, on which many public services depend. The course teaches how
to produce a national roadmap for that infrastructure, and it shows the first step of such a roadmap
working in the education sector. Every example is set in Progressa, a country invented for these courses;
no real country's results are used.

The course has six modules and 45 short videos. Each video has a script, a written page in the course
guide and a ready-to-use instruction for an AI assistant. Module 1 teaches how to find out where a country
stands and what to build first. Modules 2 to 5 set up one education service, the registration of a
learner, on four shared building blocks (registration, a register of learners, identity and payments),
and show how to prove that the blocks work together. Module 6 turns that proof into a national roadmap:
priorities, order, investment, sourcing, governance, adoption and upkeep.

## What is in this folder

| What | Where | How it is made |
|---|---|---|
| The scripts of each module: the narration of every video, the text of its slides, its AI instruction, the data that describe it and its sources | `build_kp3_moduleN_v0X.js`, one file per module: modules 1 and 2 at version 0.2, modules 3 to 6 at version 0.1 | Written by hand. This file is the one source of the module |
| The same module as readable text | `KP3_ModuleN_Script_Bundle_v0.X.md` | Generated from the script file beside it; never edited by hand |
| The assessment toolkit: a question bank, five questionnaires (one for each of the five domains, each with a guide for the person answering and a guide for the person leading the session), scoring criteria on five stages of maturity, and templates for checking the answers | `toolkit/` | Written by hand |
| Nine worked examples, one for each step of the roadmap method, all set in Progressa and linked to one another | `examples/` | Written by hand |
| The programs that draw the course's sixteen figures, with the style they share | `figures/` | Written by hand. The pictures they draw are not kept here; the course guide holds them, in `../gitbook/kp3/figures/` |
| Example configurations for modules 2 to 5, written for Progressa in the terms of the published specifications, each marked "specimen, not yet run" | `specimens/` | Written by hand |
| The build pack: the configurations that set up the four building blocks for Progressa, the instructions that generate them, the scripts that deploy them and the checks that prove them | `KP3-build-pack/` | Laid out by a program; its configurations are added when they are built, which has not yet happened |
| The page for the person who records the videos | `videos/README.md` | Written by hand |
| The video track: the deck build scripts (`build_kp3_moduleN_deck_v0X.py`, modules 1 and 2) and, under `videos/module_N/en/`, the scripts-only companions and the decks they generate | `videos/` | The build scripts are written by hand; the decks, their per-video splits and the companions are generated from them and never hand-edited (see `videos/README.md`) |
| Earlier versions of modules 1 and 2 (version 0.1 of 28 June 2026), kept for reference; they are neither published nor checked | `_retired/` | — |

The course guide, the pages a learner reads, is in the folder `../gitbook/kp3/`. It is generated from the
files above, and no page of it is edited by hand. Each module is also produced as a Word document for
review; the Word documents are generated from the script files and are not kept in this repository.

**For the person who records the videos:** start at `videos/README.md`. For each of the six modules it says
where the script is, what each subtopic carries (its spoken track, its slide specification, its AI usage
tip and its data), which figures the module uses and where they are, and which segments are storyboards
of runs that have not yet taken place.

Some files here cite two working documents of the team that made the course: its outline and its analysis
of the published specifications. Neither is published. What a reader needs from them is in the course
guide: the outline in its opening and module pages, the analysis in the specimens and in the guide's page
on the build pack.

## Making the generated files again

The programs that generate and check these files belong to a production kit for these Knowledge Products.
**The kit is not published**: it is kept separately from this repository, and a reader of this repository
cannot obtain it. Every generated file is committed here, the readable text of the modules and the whole
course guide among them, so a reader loses nothing by not having it. The commands below are for the team
that holds the kit. With a copy of the kit, set `KP_KIT` to the kit's folder and run these commands from
this folder:

    export KP_ROOT="$(cd .. && pwd)"     # the folder that holds this one and the guide
    # the readable text of a module, after its script file has changed
    python3 "$KP_KIT"/skills/kp-build-render/scripts/bundle_to_md.py build_kp3_module2_v02.js KP3_Module2_Script_Bundle_v0.2.md
    # the figures first (spec_figures.py needs PlantUML), then the guide and its check
    python3 figures/method_figures.py
    python3 figures/spec_figures.py
    python3 figures/example_figures.py
    python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/render_kp3.py
    python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/gitbook_qa.py
    # the check of one module against ITU's guide for knowledge products
    python3 "$KP_KIT"/skills/kp-bundle-qa/scripts/qa_bundle.py build_kp3_module2_v02.js

Drawing the figures needs nothing outside this repository. The checks that the figures' labels match the
outline and the analysis need those two working documents, and are run by the team that keeps them.

The sources the course cites are listed in the guide's page of frameworks and standards,
`../gitbook/kp3/frameworks-and-standards.md`.
