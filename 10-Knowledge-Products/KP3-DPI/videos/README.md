# KP3 videos — what to record from

This page is for the person who records the videos of KP3, the Education Digital Public Infrastructure
Roadmap. It says, module by module, where the script is, what each video carries, which figures go with
it, and which segments cannot be recorded as a live run yet. KP3 has 45 videos: one per subtopic, each
about five minutes long and standalone, in six modules.

Nothing in this folder is produced yet. When production starts, the per-topic files go here in the same
layout as KP2's (`../../KP2-GIF/videos/`), one folder per module and one per language, with the stage
folders inside it:

```
KP3-DPI/videos/
└── module_1/
    └── en/
        ├── scripts/      KP3_M1_1.1_Scripts_v0.1.md        the narration of one video
        ├── decks/        KP3_M1_1.1_Deck_v0.1.pptx         its slides on the ITU template
        ├── notebooklm/   KP3_M1_1.1_AudioBrief_v0.1.md     the audio brief and its prompt
        ├── audio/        KP3_M1_1.1_Audio_v0.1.m4a / .srt  the take and its transcript
        └── cues/         KP3_M1_1.1_Cues_v0.1.txt          when each slide appears
```

The steps of production, from script to finished video, are the ones KP1 and KP2 used, written down in
`../../KP1-GEA/videos/README.md`. Finished videos (`.mp4`) are not kept in git.

## Where everything is

- **The scripts.** Each module's script bundle is the Markdown file beside its build script, one level up
  from this folder: `../KP3_ModuleN_Script_Bundle_v0.X.md`. It is generated from the build script
  `../build_kp3_moduleN_v0X.js`, which is the only file anyone edits; never edit the Markdown.
- **What each video carries.** In each bundle, section 2 lists the module's videos with their single
  messages, and section 3 holds one part per subtopic. Every subtopic carries the same four things:
  - its **spoken track**, under "Script (voice-over over text-only slides)": the voice-over paragraphs,
    with the slide cues as shaded lines between them;
  - its **slide specification**, under "On-screen slide specification": one row per slide, with its text
    and its layout on ITU's template (title Arial Bold 28 pt, body Arial 18 pt, background `#E5F5FB`,
    text only);
  - its **AI usage tip**, with the prompt ready to copy;
  - its **metadata**: the working title, the YouTube title, the 60-word description, the tags, the
    playlist and the list of external links ("Find the link in the description").

  Many subtopics also carry a practice box and, where the video has a demonstration, a storyboard.
- **The figures.** The sixteen figures are in `../../gitbook/kp3/figures/` (`F1_structure.png` to
  `F16_governance.png`), and the guide's page `../../gitbook/kp3/figures.md` lists each with the
  subtopic it belongs to. **The figures belong to the written guide, not to the slides**: the slides are
  text only, as ITU's guide asks, and where a slide shows the same idea the slide specification says
  which figure the guide carries for it.
- **The written guide.** The pages a learner reads, one per subtopic, are in `../../gitbook/kp3/`
  (`module-1/` to `module-6/`). They are generated from the same build scripts, so a guide page and a
  video's script say the same thing.

## Module by module

| Module | Script bundle | Videos | Figures, in `../../gitbook/kp3/figures/` | Segments that are storyboards, not runs |
|---|---|---|---|---|
| 1 — Where your country stands, and what to build first | `../KP3_Module1_Script_Bundle_v0.2.md` | 1.1 to 1.10 | F2 (1.2), F3 (1.3), F4 (1.7), F5 (1.9), F6 (1.10) | The demonstrations of 1.4 (the desk assessment) and 1.7 (the scoring). They need only the assessment toolkit and the worked examples, not the build, and can be recorded once someone runs them; until then the storyboard stands in their place |
| 2 — The Registration block | `../KP3_Module2_Script_Bundle_v0.2.md` | 2.1 to 2.6 | F7 (2.5) | The demonstration walkthroughs of 2.3, 2.4, 2.5 and 2.6. Each rests on a specimen in `../specimens/registration/`, marked "specimen, not yet run" |
| 3 — The Registry block | `../KP3_Module3_Script_Bundle_v0.1.md` | 3.1 to 3.7 | F9 (3.2), F8 (3.3) | The demonstration segments of 3.2, 3.3, 3.4, 3.6 and 3.7. They rest on the specimens in `../specimens/registry/`, marked "specimen, not yet run" |
| 4 — Identity and payments | `../KP3_Module4_Script_Bundle_v0.1.md` | 4.1 to 4.6 | F10 (4.3), F11 (4.4 and 4.5) | The demonstration segments of 4.3 (a test person signs in) and 4.5 (one payment). They rest on the specimens in `../specimens/identity-payments/`, marked "specimen, not yet run" |
| 5 — Join the blocks and prove the foundation | `../KP3_Module5_Script_Bundle_v0.1.md` | 5.1 to 5.6 | F6 (5.1), F12 (5.2 and 5.3) | The demonstration segments of 5.1, 5.3, 5.4 and 5.5, whose storyboards are in the bundle's section 4 (4.8 to 4.11). They rest on the specimens in `../specimens/composition/`, marked "specimen, not yet run" |
| 6 — From a proven foundation to a national roadmap | `../KP3_Module6_Script_Bundle_v0.1.md` | 6.1 to 6.10 | F13 and F14 (6.3), F15 (6.4), F16 (6.6) | The demonstration walkthrough of 6.9 (the AI plays). Like module 1's, it needs only the toolkit and the worked examples, and its storyboard stands in until it is run |

F1, the structure of the guide, belongs to the guide's opening page and to no single video.

**What "storyboard" and "specimen, not yet run" mean for recording.** The configurations that modules 2 to
5 teach are not built yet, so no demonstration in those modules has been run. Each such segment is
written as a storyboard: a table of the steps the recording will show, what the viewer sees at each and
what counts as a pass. The scripts are worded so that no line says that anything runs, and the slide
specification gives a text-only stand-in for each segment. The rest of each video, the voice-over over
text slides, can be recorded now. A storyboarded segment is recorded as a run only once its configuration
has been built and its check has passed; until then the stand-in slide is used.

## ITU's open questions do not hold up recording

The KP3 outline leaves three matters for ITU to answer. None of them stops the recording of what is
written:

1. **Whether the country in which the method was first applied may be named.** No script names it. If
   ITU agrees, one sentence is added to subtopic 1.3 and to the guide's page of the nine steps; nothing
   else changes.
2. **Whether ITU accepts the outline's shape.** The shape was arranged to hold under either answer.
3. **Where the demonstration will run.** This touches only the storyboarded segments above, which are
   not recorded as runs until the build exists.
