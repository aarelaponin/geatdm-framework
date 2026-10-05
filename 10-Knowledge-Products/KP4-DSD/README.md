# KP4 — Designing Digital Government Services using a Building Block Approach

This folder holds the fourth of four Knowledge Products made for the Giga programme of the International
Telecommunication Union (ITU). It is a course for the people in a government who commission a digital
public service, judge the offer of the supplier who builds it, and convene the review at which officials
agree to it: the middle managers of a public administration, here in the education sector. They do not
write the documents of the method themselves; their staff, a supplier or an AI assistant does. The course
teaches what each document is for, what the manager must see in it before accepting it, and where the
manager's own decision lies.

The course teaches one method, specification-driven development. In it, a service is designed on shared
building blocks (digital identity, registries, payments, the exchange of data between public bodies),
written down as twelve documents, each accepted before the next is begun, and the last of them is turned
into the running service on a low-code platform by a program, never by hand. Every example is set in
Progressa, a country invented for these courses: its quality authority for higher education and its
ministry of education commission two applications so that a private institution gives its particulars to
the state once. No real country's results and no real body's names are used.

## The six modules and 37 subtopics

The course has six modules and 37 subtopics. Each subtopic is one standalone video of about five minutes,
with a written page in the course guide and a ready-to-use instruction for an AI assistant. Three
subtopics are supplementary and may be left out without losing the thread: 3.4, 5.6 and 6.7. A team that
wants the method alone follows modules 1, 2 and 6. A team that has a service specified and built follows
modules 3, 4 and 5.

**Module 1 — Why digital services go wrong, and the method that prevents it**

- 1.1 Where an agreed service gets lost
- 1.2 Three rules you can hold a supplier to
- 1.3 A question with a name on it is part of the specification
- 1.4 Twelve documents from the request to the running service
- 1.5 Who writes, who checks, who accepts

**Module 2 — Break the service down before you design it**

- 2.1 One catalogue of the sector's services, and the blocks they share
- 2.2 Write down what was asked before anyone designs
- 2.3 The records the service keeps, and whose each one is
- 2.4 Every goal named, and each tied to what was asked
- 2.5 What every goal may use, and may not invent
- 2.6 What the service is built on, and what crosses its boundary

**Module 3 — Design one service as a story your officials can check**

- 3.1 One goal, written as a story a builder can follow
- 3.2 Every way it can go wrong, written down
- 3.3 Screens worked out from the story, every value with its source
- 3.4 Screens officers can use (supplementary)
- 3.5 The walk-through your officials click
- 3.6 The review: three people, every open line given a name

**Module 4 — Settle the whole application once, then describe it for the machine**

- 4.1 Four questions decided once for every screen
- 4.2 No list longer than nine: choose by category
- 4.3 The service workflow: states, moves and who may make each
- 4.4 One file a program reads: the application model
- 4.5 Reviewing the model: what it assumed, and what it could not express
- 4.6 Refused, not worked around

**Module 5 — Generate the service on a low-code platform and connect the blocks**

- 5.1 From one file to a running application
- 5.2 Nothing generated is edited by hand
- 5.3 The platform's traps, caught before deployment
- 5.4 Identity and registries: use the block, do not rebuild it
- 5.5 The service's contract with the registration block, and its data interface
- 5.6 Payments and information mediation as named crossings (supplementary)
- 5.7 Proof on the running system: a task a person finishes

**Module 6 — Run the method in your administration**

- 6.1 What to require from a supplier
- 6.2 When something changes, correct the document that owns the fact
- 6.3 Read where the work stands from the work
- 6.4 The AI assistant at every step, and the person who rules
- 6.5 The next service on the same foundation
- 6.6 Carry the method to another sector
- 6.7 Before you rely on it: what the method does not claim (supplementary)

## What is in this folder

| What | Where | How it is made |
|---|---|---|
| The scripts of each module: the narration of every video, the text of its slides, its AI instruction, the data that describe it, its sources and, where the video has a demonstration, its storyboard | `build_kp4_moduleN_v01.js`, one file per module, all six at version 0.1 | Written by hand. This file is the one source of the module |
| The same module as readable text | `KP4_ModuleN_Script_Bundle_v0.1.md` | Generated from the script file beside it; never edited by hand |
| The worked examples, one per subtopic, all set in Progressa and linked to one another, with the fact sheet every example uses (`E0_progressa-fact-sheet.md`) | `examples/` (`E1-1_…` to `E6-7_…`) | Those of modules 1 to 3, and the fact sheet, are written by hand. Those of modules 4 to 6 are carried by their module's script and are written into this folder from it as the script carries them; never edited by hand |
| The blank instruments: one blank for each document of the twelve that a person writes, one for the sector's catalogue of services, and the deliverables annex for a supplier's terms of reference | `toolkit/` | Written out by the program that renders the course guide, from its own text; never edited by hand |
| The fourteen figures of the course guide, each drawn by its own program, with the style they share and the check of their labels; and the slide variants of the six that also stand on a video slide (F2, F3, F5, F7, F8, F9) | `figures/` (`F1_structure.png` to `F14_data-interface.png`, each beside its `.py`); `figures/slides/` | Drawn by `figures/draw_all.py` and `figures/draw_all.py --slides`; never edited by hand |
| The slide decks of the 37 videos on ITU's template, with the voice-over in the speaker notes: one deck per video, one combined deck per module, and the scripts-only companion of each | Modules 1 to 3, which are on the video track: `videos/module_N/en/decks/` (`KP4_MN_<video>_Deck_v0.1.pptx`, `KP4_MN_Deck_v0.1.pptx`) and `videos/module_N/en/scripts/`. Modules 4 to 6, not yet on the track: `decks/module_4/` to `decks/module_6/`, with `scripts/` inside. All built by `decks/build_kp4_moduleN_deck_v01.py` | Generated from the module's script file by the program; never edited by hand |
| The video track of Modules 1 to 3: one folder per module and per language with the stage folders of the production pipeline (scripts, decks, audio briefs, takes, cues, video), and the page for the person who records the videos | `videos/module_1/` to `videos/module_3/`, `videos/README.md` | The stage folders are filled by the production kit, stage by stage; the page is written by hand |

The course guide, the pages a learner reads, is in the folder `../gitbook/kp4/`: an opening page, one page
for each module, for each of the 37 subtopics and for each module's self-check, and the reference pages (the
twelve documents, the blank instruments, the worked examples, the frameworks and standards, the public sources,
the standings of the method's standards, the glossary and the figures). It is
generated from the files above, and no page of it is edited by hand. Each module is also produced as a
Word document for review; the Word documents are generated from the script files and are not kept in this
repository.

**For the person who records the videos:** start at `videos/README.md`. For each of the six modules it says
where the script is, where the video's slide deck is, what each video carries, which figures go with it,
which AI usage tip it carries, and which demonstration segments are storyboards because the application they show has not yet been
generated.

## What the demonstrations show, and what they wait for

Eight videos hold a demonstration segment: a recording of the screen with a voice-over. One of them, the
walk-through of 3.5, needs only pages that exist. The other seven (4.6, 5.1, 5.2, 5.4, 5.5, 5.7 and 6.2)
need the education demonstration application to be generated on the low-code platform, which has not yet
happened. Until then each of those segments is a storyboard: the steps the recording will show, what the
viewer sees at each and what counts as a pass. No script says that anything has run. When a run has passed,
its segment is recorded from it and the script gains one sentence that states the result and its date.

## Making the generated files again

The programs that generate and check these files belong to a production kit for these Knowledge Products.
**The kit is not published**: it is kept separately from this repository, and a reader of this repository
cannot obtain it. Every generated file is committed here, the readable text of the modules and the whole
course guide among them, so a reader loses nothing by not having it. The commands below are for the team
that holds the kit. With a copy of the kit, set `KP_KIT` to the kit's folder and run these commands from
this folder:

    export KP_ROOT="$(cd .. && pwd)"     # the folder that holds this one and the guide
    # the readable text of a module, after its script file has changed
    python3 "$KP_KIT"/skills/kp-build-render/scripts/bundle_to_md.py build_kp4_module2_v01.js KP4_Module2_Script_Bundle_v0.1.md
    # the figures, each from its own program
    python3 figures/draw_all.py
    # the slide variants of the six figures the video decks carry (needed before the decks of modules 1 to 3)
    python3 figures/draw_all.py --slides
    # the worked examples of modules 4 to 6, after a module's script has changed
    python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/render_kp4.py --emit-examples
    # the guide, then its check
    python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/render_kp4.py
    python3 "$KP_KIT"/skills/kp-gitbook-render/scripts/gitbook_qa.py
    # the check of one module against ITU's guide for knowledge products
    python3 "$KP_KIT"/skills/kp-bundle-qa/scripts/qa_bundle.py build_kp4_module2_v01.js
    # the slide decks, after a module's script file has changed (modules 1 to 3 write to videos/module_N/en/,
    # modules 4 to 6 to decks/module_N/); each run also splits the deck, writes the scripts-only companions
    # and proves the notes narrate the bundle (vo_diff.py)
    (cd decks && for n in 1 2 3; do python3 build_kp4_module${n}_deck_v01.py || break; done)
    (cd decks && for n in 4 5 6; do python3 build_kp4_module${n}_deck_v01.py || break; done)

Drawing the figures needs nothing outside this repository. The checks that the scripts and the figures'
labels agree with the course's outline need the team's working copy of that outline, which is not
published, and are run by the team that keeps it.

The sources the course cites are listed in the guide's pages of frameworks and standards and of public
sources, `../gitbook/kp4/frameworks-and-standards.md` and `../gitbook/kp4/public-sources.md`.
