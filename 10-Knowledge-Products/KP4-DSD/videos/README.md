# KP4 videos — what to record from

This page is for the person who makes the videos of KP4, Designing Digital Government Services using a
Building Block Approach. It says, module by module and in the order a video is made, where the script is,
what each video carries, which figures go with it and which AI usage tip it ends with. It then says
plainly which demonstration segments cannot be recorded yet, and what stands in for each until they can.
KP4 has 37 videos: one per subtopic, each about five minutes long and standalone, in six modules.

The slide decks of all 37 videos are produced. **Status, 5 October 2026:** the video track is open for
Modules 1 to 3, the modules in which no video waits for the education demonstration application. Their
per-topic files are here, in the same layout as KP2's (`../../KP2-GIF/videos/`) and KP3's, one folder per
module and one per language, with the stage folders inside it; steps 1 and 2 of the track (the
scripts-only companions and the decks, v0.1) are done, the later stages are scaffolded and empty. The
tracker at `../../video-tracker/` reads this folder. Modules 4 to 6, each of which holds at least one
video that waits for the application (4.6; 5.1, 5.2, 5.4, 5.5, 5.7; 6.2), are not on the track yet:
their decks, built 4 October, stay in `../decks/module_4/` to `../decks/module_6/` until their turn.

```
KP4-DSD/videos/
└── module_1/
    └── en/
        ├── scripts/      KP4_M1_1.1_Scripts_v0.1.md        the narration of one video
        ├── decks/        KP4_M1_1.1_Deck_v0.1.pptx         its slides on the ITU template
        ├── notebooklm/   KP4_M1_1.1_AudioBrief_v0.1.md     the audio brief and its prompt
        ├── audio/        KP4_M1_1.1_Audio_v0.1.m4a / .srt  the take and its transcript
        ├── cues/         KP4_M1_1.1_Cues_v0.1.txt          when each slide appears
        └── video/        KP4_M1_1.1_Video_v0.1.mp4         the deliverable (not kept in git)
```

Each module's `decks/` holds the video decks, one file per video (`KP4_M1_1.1_Deck_v0.1.pptx`), the
combined deck of the module with the voice-over in the speaker notes (`KP4_M1_Deck_v0.1.pptx`) and the
`split_spec.json` that cut it; `scripts/` holds the scripts-only companion of each video and of the module
(`KP4_M1_1.1_Scripts_v0.1.md`).

The steps of production, from script to finished video, are the ones KP1 and KP2 used, written down in
`../../KP1-GEA/videos/README.md`. Finished videos (`.mp4`) are not kept in git.

## How one video is made, and where each part is

1. **The script.** Each module's script bundle is the Markdown file one level up from this folder:
   `../KP4_ModuleN_Script_Bundle_v0.1.md`. It is generated from the build script
   `../build_kp4_moduleN_v01.js`, which is the only file anyone edits; never edit the Markdown. In each
   bundle, section 2 lists the module's videos with their single messages and their class (core or
   supplementary), and section 3 holds one part per subtopic.
2. **The spoken track.** Under "Script (voice-over over text-only slides)": the voice-over paragraphs,
   with the slide cues as shaded lines between them.
3. **The slides.** The deck of each video is `module_N/en/decks/KP4_MN_<video>_Deck_v0.1.pptx`, for
   example `module_1/en/decks/KP4_M1_1.1_Deck_v0.1.pptx` (Modules 4 to 6: `../decks/module_N/`, see
   above); its speaker notes carry the voice-over. Every
   deck is its specification plus one opening slide, so **a slide's number in the deck is its row number
   in the bundle's "On-screen slide specification" plus one**. The specification gives one row per slide,
   with its text and its layout on ITU's template (title Arial Bold 28 pt, body Arial 18 pt, background
   `#E5F5FB`, text only, no images, no person on screen). The slides are generated from the bundle; never
   edit a deck by hand.
4. **The demonstration, where the video has one.** Its storyboard: a table of the steps the recording
   shows, what the viewer sees at each and what counts as a pass. Where the storyboard is in each bundle
   is given in the module tables below.
5. **The AI usage tip.** Under "AI usage tip": the problem it solves, the prompt ready to copy, its inputs
   and outputs, and its safeguard. It closes the video.
6. **The description.** Under "Metadata": the working title, the YouTube title, the 60-word description,
   the tags, the playlist and the list of external links ("Find the link in the description").

**The figures.** The fourteen figures are in `../figures/` (`F1_structure.png` to `F14_data-interface.png`),
each drawn by the program beside it, and the guide carries copies in `../../gitbook/kp4/figures/`, listed
with the subtopics that use them on `../../gitbook/kp4/figures.md`. **The figures belong to the written
guide, not to the slides**: the slides are text only, as ITU's guide asks, and where a slide shows the same
idea, its specification says which figure the guide carries for it. F1, the structure of the course
(`F1_structure.png`), belongs to the guide's opening page and to no single video.

**The written guide.** The pages a learner reads, one per subtopic, are in `../../gitbook/kp4/`
(`module-1/` to `module-6/`). They are generated from the same build scripts, so a guide page and a
video's script say the same thing. The worked example of every subtopic is in `../examples/`, one
file each (`E1-1_…` to `E6-7_…`); those of modules 4 to 6 are taken there, as they stand, from their module's
bundle. Each module's self-check is on its own page of the guide, `module-N/self-check.md`.

**The decks (steps 1 and 2 of the track).** Each module's decks come from a build program in `../decks/`,
`build_kp4_moduleN_deck_v01.py`, content only, every helper from the kit's `kp-deck-builder`, and are never
hand-edited. One run builds the combined deck, writes the split spec, cuts the per-video decks
(`split_module_deck.py --infer-ranges`), writes the scripts-only companions (`scripts_from_deck.py`) and
proves that the speaker notes narrate the bundle word for word (`vo_diff.py`). The programs of Modules 1 to
3 read every slide from the bundle through `kp4_deck_common.py` and write to this folder; those of Modules
4 to 6 write to `../decks/module_N/` until those modules join the track. The commands are for the team
that holds the production kit; set `KP_KIT` to the kit's `itu-giga-kp` folder first:

```
KP4-DSD/videos/module_N/en/decks/     the video decks, the combined deck and split_spec.json  (Modules 1–3)
KP4-DSD/videos/module_N/en/scripts/   the scripts-only companions                              (Modules 1–3)
KP4-DSD/decks/module_N/               the same, with scripts/ inside, for Modules 4–6 (built 4 Oct 2026)
KP4-DSD/decks/build_kp4_moduleN_deck_v01.py      the program that builds the decks of module N
cd KP4-DSD/decks && for n in 1 2 3; do python3 build_kp4_module${n}_deck_v01.py || break; done
cd KP4-DSD/decks && for n in 4 5 6; do python3 build_kp4_module${n}_deck_v01.py || break; done
bash "$KP_KIT"/skills/kp-deck-builder/scripts/qa_deck.sh KP4-DSD/videos/module_1/en/decks/KP4_M1_Deck_v0.1.pptx /tmp/deckqa   # then look at the sheets
```

A video is title card, opener (hook), its content slides, the recap with the un-narrated practice box
and, where the subtopic cites a source, Sources. The decks of Modules 1 to 3 were rebuilt into this
folder on 5 October 2026 and their contact sheets looked at: no overflow, no overlap, one practice box
per video, `vo_diff` at zero mismatches (44, 57 and 58 slides).

## Module by module

Each table lists the module's videos in order. "Figures" names the figures of the written guide that
belong to the video; the slides stay text only. "Demonstration" says whether the video holds a recorded
segment and where its storyboard is.

### Module 1 — Why digital services go wrong, and the method that prevents it

Script bundle: `../KP4_Module1_Script_Bundle_v0.1.md`. Five videos, all core. No demonstration segment.
Slide decks: `module_1/en/decks/`; scripts: `module_1/en/scripts/`.

| Video | Class | Figures | AI usage tip | Demonstration |
|---|---|---|---|---|
| 1.1 Where an agreed service gets lost | Core | F2 `F2_three-places.png` | Place each problem of a past project at one of the three places | None |
| 1.2 Three rules you can hold a supplier to | Core | — | Test a supplier's proposal against the three rules | None |
| 1.3 A question with a name on it is part of the specification | Core | — | Find the guessed answers in a draft specification | None |
| 1.4 Twelve documents from the request to the running service | Core | F3 `F3_twelve-documents.png` | Map your project's documents onto the twelve | None |
| 1.5 Who writes, who checks, who accepts | Core | F4 `F4_who-writes-checks-accepts.png` | Draft who writes, checks and accepts each document | None |

### Module 2 — Break the service down before you design it

Script bundle: `../KP4_Module2_Script_Bundle_v0.1.md`. Six videos, all core. No demonstration segment.
Slide decks: `module_2/en/decks/`; scripts: `module_2/en/scripts/`.

| Video | Class | Figures | AI usage tip | Demonstration |
|---|---|---|---|---|
| 2.1 One catalogue of the sector's services, and the blocks they share | Core | F5 `F5_sector-catalogue.png` | Draft the sector's catalogue of services from its mandate | None |
| 2.2 Write down what was asked before anyone designs | Core | — | Split an official text into entries of the register | None |
| 2.3 The records the service keeps, and whose each one is | Core | F6 `F6_records-and-keepers.png` | Read the records back as plain sentences | None |
| 2.4 Every goal named, and each tied to what was asked | Core | — | Check the goals against the register in both directions | None |
| 2.5 What every goal may use, and may not invent | Core | F11 `F11_licence-workflow.png` (named on slide 5 of the deck as the guide's drawing of the licence's states; it belongs to 4.3) | Find the figures a design invented | None |
| 2.6 What the service is built on, and what crosses its boundary | Core | F7 `F7_architecture.png` | List every crossing of the service's boundary | None |

### Module 3 — Design one service as a story your officials can check

Script bundle: `../KP4_Module3_Script_Bundle_v0.1.md`. Six videos; 3.4 is supplementary.
Slide decks: `module_3/en/decks/`; scripts: `module_3/en/scripts/`.

| Video | Class | Figures | AI usage tip | Demonstration |
|---|---|---|---|---|
| 3.1 One goal, written as a story a builder can follow | Core | F8 `F8_story-and-failures.png` | Draft the main story of one goal from what was asked | None |
| 3.2 Every way it can go wrong, written down | Core | F8 `F8_story-and-failures.png` | Propose the failures of each step, for the official to decide | None |
| 3.3 Screens worked out from the story, every value with its source | Core | F9 `F9_screen-sources.png` | List the screens of a story and the source of every value | None |
| 3.4 Screens officers can use | Supplementary | — | Review an officer's screen against five rules | None |
| 3.5 The walk-through your officials click | Core | — | Write the questions to ask while clicking a walk-through | **Yes, and it can be recorded now.** Storyboard in the bundle's section 4.8, "Storyboard for 3.5". It needs only the walk-through pages of the goal, in Progressa's names |
| 3.6 The review: three people, every open line given a name | Core | — | Turn review notes into open lines with owners and dates | None |

### Module 4 — Settle the whole application once, then describe it for the machine

Script bundle: `../KP4_Module4_Script_Bundle_v0.1.md`. Six videos, all core.
Slide decks: `../decks/module_4/` (not on the video track yet: 4.6 waits for the application).

| Video | Class | Figures | AI usage tip | Demonstration |
|---|---|---|---|---|
| 4.1 Four questions decided once for every screen | Core | F10 `F10_four-questions.png` | Find where the four questions are still open | None |
| 4.2 No list longer than nine: choose by category | Core | — | Divide a long list into categories | None |
| 4.3 The service workflow: states, moves and who may make each | Core | F11 `F11_licence-workflow.png` | Draft the states and moves of a case | None |
| 4.4 One file a program reads: the application model | Core | F12 `F12_one-file-to-running-application.png` | Read one section of the model in plain sentences | None |
| 4.5 Reviewing the model: what it assumed, and what it could not express | Core | — | Turn the losses into yes-or-no questions | None |
| 4.6 Refused, not worked around | Core | F12 `F12_one-file-to-running-application.png` | Explain a refusal in plain words | **Waits for the application.** Storyboard in the bundle's section 4.8, "Storyboard for 4.6" |

### Module 5 — Generate the service on a low-code platform and connect the blocks

Script bundle: `../KP4_Module5_Script_Bundle_v0.1.md`. Seven videos; 5.6 is supplementary.
Slide decks: `../decks/module_5/` (not on the video track yet: 5.1, 5.2, 5.4, 5.5 and 5.7 wait for the application).

| Video | Class | Figures | AI usage tip | Demonstration |
|---|---|---|---|---|
| 5.1 From one file to a running application | Core | F12 `F12_one-file-to-running-application.png` | Write the acceptance questions for a generated application | **Waits for the application.** Storyboard in the bundle's section 4.8, "Storyboard for 5.1" |
| 5.2 Nothing generated is edited by hand | Core | F13 `F13_correct-up-generate-down.png` | Draft the contract clause that forbids hand edits | **Waits for the application.** Storyboard in the bundle's section 4.9, "Storyboard for 5.2" |
| 5.3 The platform's traps, caught before deployment | Core | — | Record which platform rules a supplier's checks apply | None |
| 5.4 Identity and registries: use the block, do not rebuild it | Core | F7 `F7_architecture.png` | Find the copies of facts another body keeps | **Waits for the application.** Storyboard in the bundle's section 4.10, "Storyboard for 5.4" |
| 5.5 The service's contract with the registration block, and its data interface | Core | F7 `F7_architecture.png`, F14 `F14_data-interface.png` | Read an interface contract as a plain list | **Waits for the application.** Storyboard in the bundle's section 4.11, "Storyboard for 5.5" |
| 5.6 Payments and information mediation as named crossings | Supplementary | F7 `F7_architecture.png` | Draft the crossing table of a service | None |
| 5.7 Proof on the running system: a task a person finishes | Core | — | Write acceptance journeys for officers from the goals' stories | **Waits for the application.** Storyboard in the bundle's section 4.12, "Storyboard for 5.7" |

### Module 6 — Run the method in your administration

Script bundle: `../KP4_Module6_Script_Bundle_v0.1.md`. Seven videos; 6.7 is supplementary.
Slide decks: `../decks/module_6/` (not on the video track yet: 6.2 waits for the application).

| Video | Class | Figures | AI usage tip | Demonstration |
|---|---|---|---|---|
| 6.1 What to require from a supplier | Core | F3 `F3_twelve-documents.png` | Draft the deliverables annex of a terms of reference | None |
| 6.2 When something changes, correct the document that owns the fact | Core | F13 `F13_correct-up-generate-down.png` | Find the document that owns the fact a change touches | **Waits for the application.** Storyboard in the bundle's section 3, in the part for 6.2, "Storyboard of the demonstration segment — 6.2" |
| 6.3 Read where the work stands from the work | Core | — | Write the minister's one-page status from the trace report | None |
| 6.4 The AI assistant at every step, and the person who rules | Core | F4 `F4_who-writes-checks-accepts.png` | Draft the rules of use for an AI assistant in your specification work | None |
| 6.5 The next service on the same foundation | Core | F5 `F5_sector-catalogue.png` | List what a new service can reuse, and what it must add | None |
| 6.6 Carry the method to another sector | Core | — | Adapt the method's examples to a service of another sector | None |
| 6.7 Before you rely on it: what the method does not claim | Supplementary | — | Write the risk paragraph of a briefing note on adopting the method | None |

## The seven segments that wait for the education application

Eight videos hold a demonstration segment. The segment of 3.5 can be recorded now: it needs only the
walk-through pages of one goal, in Progressa's names. **The other seven cannot be recorded yet.** Each
shows the education demonstration application, or the file it is generated from, and that application has
not yet been generated on the low-code platform. Its generation is done outside the making of this course.

Until a segment can be recorded, its storyboard stands in its place, and the video is still made: the
voice-over over text slides is recorded now, and the slide where the recording will go carries a
text-only stand-in of a few short lines, written in that slide's specification. No line of the script, the
slide or the description says that anything has run. When the run has passed, the segment is recorded
from it following its storyboard, the stand-in slide is replaced by the recording, and the script gains
one sentence that states the result and its date.

| Video | What the segment will show | What it waits for | The storyboard that stands in for it | The stand-in slide, as numbered in the video's deck |
|---|---|---|---|---|
| 4.6 Refused, not worked around | A description that breaks the accepted design of the screens refused by the check, corrected and admitted | The ministry's application model and its accepted interaction design | Module 4 bundle, section 4.8, "Storyboard for 4.6" | Slide 7 |
| 5.1 From one file to a running application | The description admitted, the application built and installed, its menu, one form and one list opened. This is the principal demonstration of KP4 | The ministry's generated application | Module 5 bundle, section 4.8, "Storyboard for 5.1" | Slide 8 |
| 5.2 Nothing generated is edited by hand | A change made by hand on the platform shown up by the read-back, corrected in the description and generated again | A generated application | Module 5 bundle, section 4.9, "Storyboard for 5.2" | Slide 7 |
| 5.4 Identity and registries: use the block, do not rebuild it | An officer signs in through the identity block, and an institution's record is shown as read from the register | Both generated applications, the identity sign-in and the data interface | Module 5 bundle, section 4.10, "Storyboard for 5.4" | Slide 8 |
| 5.5 The service's contract with the registration block, and its data interface | One institution read across the data interface, with the contract it is read by | Both generated applications. The data interface between the two installations has already been tried with a test application, so this segment can be recorded as soon as both are generated | Module 5 bundle, section 4.11, "Storyboard for 5.5" | Slide 7 |
| 5.7 Proof on the running system: a task a person finishes | An officer finishes the change of an institution's name on the running application, with the record of the run | The ministry's generated application | Module 5 bundle, section 4.12, "Storyboard for 5.7" | Slide 7 |
| 6.2 When something changes, correct the document that owns the fact | A change of name corrected in the document that owns it, the list of documents it makes stale, and the application generated again | Both application models and the applications generated from them | Module 6 bundle, section 3, the part for 6.2, "Storyboard of the demonstration segment — 6.2" | Slide 6 |

**The segment that can be recorded now.** 3.5, The walk-through your officials click: the walk-through of
the goal "apply for a provisional licence", clicked from the first page to the confirmation, each page
checked against the version of the screens. Storyboard: module 3 bundle, section 4.8, "Storyboard for 3.5";
the stand-in, until it is recorded, is slide 8 of its deck.

## What does not hold up recording

Everything in the 37 videos except the seven segments above can be recorded now: every voice-over, every
slide and every description. The seven segments hold up only themselves; each video they belong to is
complete without them, with its stand-in slide, and is re-cut when the recording exists.

## Production log — what works and what does not

Kept for the next session that picks up the KP4 video track. Newest first; add to it, do not rewrite it.

**5 October 2026 — the track opened for Modules 1 to 3.**

- The stage folders `module_{1,2,3}/en/{scripts,decks,notebooklm,audio,cues,video}` were created, and the
  decks and scripts-only companions built on 4 October under `../decks/module_N/` were moved into them.
  `kp4_deck_common.py` now writes there by default (`OUT_DIR=` still overrides), so a rebuild lands in the
  tree the tracker reads. Modules 4 to 6 keep their 4 October decks under `../decks/module_N/`; their
  build programs are untouched.
- All three modules were rebuilt from their bundles in the new location: `vo_diff` at zero mismatches,
  one practice box per video, none narrated; the splits inferred as 1.1–1.5 → slides 3–43, 2.1–2.6 →
  3–56, 3.1–3.6 → 3–57. Contact sheets looked at for all three combined decks: nothing overflows or
  overlaps; the 3.5 stand-in (slide 47 of the combined deck, slide 8 of its own) shows the seven storyboard
  steps under "Not yet recorded".
- Modules 4 to 6 are kept off the track on purpose: each holds a video whose demonstration waits for the
  education application. The build programs of those modules write to `../decks/module_N/`; when they
  join, build with `OUT_DIR=../videos/module_N/en/decks` (the scripts then land in `OUT_DIR/scripts` and
  need moving up to `en/scripts/`), or give them the default `kp4_deck_common.py` uses.
- Next: step 3, the audio briefs and prompts (`kp-audio-brief`, `make_brief.py` as KP3 did), then the takes.
