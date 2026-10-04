# KP3 videos — what to record from

This page is for the person who records the videos of KP3, the Education Digital Public Infrastructure
Roadmap. It says, module by module, where the script is, what each video carries, which figures go with
it, and which segments cannot be recorded as a live run yet. KP3 has 45 videos: one per subtopic, each
about five minutes long and standalone, in six modules.

The per-topic files go here in the same layout as KP2's (`../../KP2-GIF/videos/`), one folder per module
and one per language, with the stage folders inside it. **Status, 3 October 2026:** all six modules have their scripts-only companions and decks (v0.1): Modules 1 and 2 built from the v0.2 bundles, Modules 3 to 6 from the v0.1 bundles. **5 October 2026:** all 45 English videos have a candidate take, cue file and MP4, each read against the author's bar (KP2's, plus no KP acronym); they await the author's listen before `accepted:` is set in the tracker. See the production log at the end of this page. The tracker at
`../../video-tracker/` reads this folder.

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

## Building the decks (steps 1 and 2 of the track)

Each module's deck comes from a build script beside its bundle, `../build_kp3_moduleN_deck_v0X.py` — content
only, every helper from the kit's `kp-deck-builder` — and is never hand-edited. The voice-over in the speaker
notes is the bundle's `scriptBeats` word for word, which `vo_diff.py` proves; the recap slide carries the single
message word for word and the un-narrated practice box (task = the AI tip's title, artefact = the subtopic's
`practice` field). A demonstration segment that has not been recorded is a text slide: the storyboard's steps
under the label 'STORYBOARD — NOT YET RUN' (Module 1), or the bundle's three-row stand-in with the footer
'Storyboard — not yet run.' (Module 2).

```bash
cd 10-Knowledge-Products/KP3-DPI            # KP_KIT = the plugins/itu-giga-kp folder of the marketplace clone
S="$KP_KIT"/skills/kp-deck-builder/scripts
python3 build_kp3_module1_deck_v01.py                                            # combined deck → videos/module_1/en/decks/
python3 $S/vo_diff.py build_kp3_module1_v02.js videos/module_1/en/decks/KP3_M1_Deck_v0.1.pptx --stats
python3 $S/split_module_deck.py videos/module_1/en/decks/KP3_M1_Deck_v0.1.pptx \
        videos/module_1/en/decks/split_spec.json videos/module_1/en/decks/ --infer-ranges
python3 $S/scripts_from_deck.py videos/module_1/en/decks/KP3_M1_Deck_v0.1.pptx \
        videos/module_1/en/decks/split_spec.json videos/module_1/en/scripts/ --kp KP3 --module 1 --prefix KP3_M1 --version v0.1
bash $S/qa_deck.sh videos/module_1/en/decks/KP3_M1_Deck_v0.1.pptx /tmp/deckqa     # then look at the sheets
```

Module 2 runs the same with `module2`, `v02.js`, `M2`; Modules 3 to 6 with `moduleN`, `v01.js`, `MN`. A video is
title card, hook, its content slides (four or five; six in 5.3), the recap with the practice box, Sources.
Modules 3 to 6 share their layout helpers in `../kp3_deck_common.py` (tables at 15 pt or more, row type that
scales with the row count, the storyboard footer 'Walkthrough: what a good run shows.'), which apply the
deck-side findings of `../KP3_M1-M2_Deck_v0.1_Review_2026-10-03.md`.

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

## Production log — what works and what does not

Kept for the next session that picks up the KP3 video track. Newest first; add to it, do not rewrite it.

**5 October 2026 — 44 of 45; what the last fixes taught.**

- **The script fix worked where brief fixes had not.** 1.8 covered its registers slide on the first take
  after the rewording, after nine takes that skipped it.
- **Brief lines aimed at one recurring error mostly work.** 3.4 (raw is its own tier), 6.4 (the range in
  words), 1.7 (the 0.5 score) and 4.3 (the identifier is kept) each came back right within one to three
  takes of the line being added. 3.1 needed two separate points spelled out ("Giga's flow is not in the
  specification"), because its own narration puts them in consecutive sentences.
- **`take_until_pass.py` stops at the first take that passes the gate**, so a take that passes the gate but
  fails reading uses up the run. With few tries left, run single-try takes (`--tries 1`, one after the
  other) and read them all.
- 5.3 keeps calling the identifier "temporary" (v0.2, v0.8) despite its brief line; v0.6 named "the brief"
  three times. Its last two tries are single takes.

**4 October 2026 (late night) — fixes upstream: 1.8's script, 6.4's figures.**

- **1.8 reworded at the source (author's decision).** In `build_kp3_module1_v02.js` and
  `build_kp3_module1_deck_v01.py` (edited in place, each with a dated note): the registers slide is titled
  "Where the registers sit", its rows lose the section numbers, and its narration opens "The registers come
  next." and states the three points without making PAERA the subject (459 → 450 words). The citations stay
  in `paeraAnchor` and on the Sources card. Regenerated: the Module 1 bundle, the combined deck (vo_diff
  zero mismatches), the 1.8 split only (`--only 1.8`), the scripts-only companions, the 1.8 brief v0.5
  (fresh `make_brief.py` + the three rules + the slide-4 and Identity-specification lines + an enumeration
  line). qa_bundle: 0 hard failures; gitbook_qa: 0 findings.
- **The guide page `gitbook/kp3/module-1/1-8.md` still has the old wording.** The renderer the KP3
  README names (`kp-gitbook-render/scripts/render_kp3.py`) is not in the kit or anywhere on this machine,
  and guide pages are never edited by hand. The old wording is still correct; it just differs from the
  video. Re-render when the renderer is found.
- **6.4 brief v0.5:** the cost range is to be said as two figures, never as a percentage, ratio or
  multiple; if asked, "the high estimate is about half again the low one".
- **The automatic gate is stricter than the author's bar.** "think about", "nightmare", "broken" and
  filler block a take in `take_until_pass.py`, but at KP2's bar they are flaws. Takes that failed only on
  those (3.4 v0.10, 1.10 v0.4, 1.8 v0.15) were read anyway. A future run could pass `--tries` takes on to
  reading instead of re-rolling for them.

**4 October 2026 (night) — the acceptance bar, decided.**

- **Author's decision: KP2's bar, plus no KP acronym spoken.** A take is rejected only for a hard
  blocker: PAERA spoken or mangled; a KP acronym ("KP3", "Knowledge Product 3"); Progressa called real
  or confused with PROGRESA; the brief named on air; a content slide never covered; slides in reverse;
  a number or statement that contradicts the deck (1.7 "1.5" for 0.5, 4.3 "keep the temporary
  identifier", 3.4 "bronze is the raw data", 3.1 "Giga uses the registry spec 3.0-alpha"). Invented
  openers, metaphors, podcast framing, loose attribution ("the research says"), a missing sources line
  and mispronunciation are flaws recorded in the cue header. Reading a line of the brief aloud is a flaw,
  not a blocker (KP2 5.8 precedent) — so 2.6 v0.4 stands.
- **Tries:** 6 per video, counting only takes that came back (a throttled "no audio artifact" is not a
  try), and not counting tries on a brief that was later fixed for that very failure (3.1's PAERA tries).
- **Bullets in §2 carried section citations** after the PAERA substitution ("— the reference architecture
  3.3.3", "the reference architecture Annex 3"). That feeds both the misattribution and the hosts reading
  section numbers. `strip_cites.py` removed them from the seven briefs that had them (v0.4 of 1.3, 1.8,
  1.9, 1.10, 6.4, 6.5, 6.10). **Fix at the source next time:** when a brief swaps PAERA for words, drop
  the citation, do not translate it.
- **1.8 brief v0.4 (author's decision):** §2 slide 4 marked "must be covered" with its three points to
  number aloud; slide 5 names the GovStack Identity specification as the source, never the reference
  architecture.
- No take of record says a KP acronym (grep of every SRT for KP + digit, "Knowledge Product").
- **slidecast truncation, cause narrowed (kit bug):** with ffmpeg 9.0.1, a long last window (1.5, 13 s)
  *or* a run of short closing windows (~3 s each; 1.3) makes the `-shortest`/`-t` mux end the MP4 2–3 s
  early, cutting the narration. Cue around it (Sources window 5–8 s, closing windows not all tiny) and
  always compare MP4 and m4a durations. The script needs a fix; not yet done.
- **A slide whose content is all PAERA gets skipped.** 1.8's slide 4 ("Where PAERA places the
  registers": basic national infrastructure, the state registries, the two blocks) was never covered in
  nine takes, including three on a brief that marked it "must be covered". The brief also forbids saying
  PAERA. When the rule and the slide collide, the slide loses. The fix is upstream: the script/deck
  should state those points without making PAERA the subject.
- 3.4's brief v0.3 states that raw is its own tier ("raw data lands in bronze" in three takes; the brief
  never said otherwise). A gap in §2 is filled by the hosts with something plausible and wrong.

**4 October 2026 (evening) — the three rules do not hold; 1.10 was skipped.**

- Seven re-roll takes were made on the brief with the three rules (1.7, 1.8, 1.9, 3.7, 6.2, 6.5, 6.6).
  Four still name the source on air ("the research", "the policy papers", "from the material") or say
  "let us call it Progresa". **A rule in §3 and the prompt does not stop these.** The next lever would
  be §2 itself, or accepting them at KP2's bar; that is the author's decision.
- **Pronunciation from text is unreliable.** Scribe spells the country "Progresa" or "Progessa" in most
  transcripts; whether the hosts said it that way needs a listen, not a read.
- **Kit bug, `take_until_pass.py`: `--from 1.2` skips 1.10**, because subtopics are compared as floats
  (1.10 == 1.1). Module 1's 1.10 had no take at all until run on its own. The same sort orders 1.10
  before 1.2 in `--all`. Fix: compare `tuple(map(int, s.split(".")))`.
- Tracker notes for KP3 are written by `kp3_notes.py` (session scratchpad) from one verdict list, after
  a line-by-line patch overwrote the next topic's note. Regenerate them from the list, not by hand.

**4 October 2026 (later) — the audit passes takes a reader rejects.**

- 27 takes were cued and assembled (three agents, two modules each; every MP4's duration matches its m4a,
  a frame after every cue was looked at). Reading each transcript then rejected 12 that
  `srt_drift_check.py` had passed or settled: 1.6, 2.1, 2.6, 3.4, 3.6, 4.2, 4.4, 5.5, 5.6, 6.1, 6.7, 6.10.
  **Read every take before calling it a candidate**; the audit does not see invented content or
  framing. The tracker notes carry each video's flaws; the cue file headers carry them in full.
- Three failures repeated across videos, so they went into every brief (the next version for all 45:
  v0.3 where the PAERA fix was v0.2, else v0.2) and into the prompt. The script is `kp3_rules.py` in the
  session scratchpad.
  1. **Progressa treated as real** ("a real-world case study", "the recent national initiative"),
     conflated with Mexico's PROGRESA cash-transfer programme (3.6), or **its pronunciation note read
     aloud** ("that's pronounced Progessa, right?"). The §4 pronunciation row invites the second.
  2. **The brief named on air**: "the brief notes", "an internal audio brief", "briefing materials".
  3. **"The reference architecture" as a catch-all** for any source: the never-say-PAERA rule's side
     effect. The Registration specification and the schema were both credited to it.
- Also seen, not acted on: most takes skip the cold open and the sources line; invented money openers
  ("millions of taxpayer dollars", "a billion dollars"); bouncer/wristband metaphors in Module 4; "bronze
  is the raw data" (3.4, 3.6) though raw is its own tier.
- **slidecast bug (kit, unconfirmed cause):** 1.5 with a 13 s Sources window came out 3.1 s shorter than
  its audio, with the narration cut. Moving the cue to leave an 8 s tail fixed it. Check every MP4's
  duration against its m4a.
- LibreOffice fails ("did not produce a PDF") when several slidecast builds run at once; a retry works.

**4 October 2026 — first pass done, all 45.**

- First pass (3 tries each, three lanes): about two thirds of the videos got a passing or settled take.
  Unresolved and re-run with 3 more tries: 1.1, 1.2, 1.7, 1.8, 1.9, 3.1, 3.7, 5.2, 6.2, 6.5, 6.6.
- **"Settled on runtime" is not acceptance.** `take_until_pass.py` settles on the closest take whatever its
  length (2:49 and 7:22 both settled). Rule used here: a settled take outside 3:00–6:00, with no other
  acceptable try, gets 3 more tries — 1.3, 2.5, 6.3, 6.4, 6.9. Measure with `ffprobe`, not the log.
- **Silent throttle.** Between 00:09 and 00:22 twelve takes in a row ended "generation reported complete
  but the notebook has no audio artifact" ("disappeared from list"), one every ~75 s across all lanes,
  then generation recovered by itself; `notebooklm list` worked throughout, so it was not the session. No
  `RateLimitError` was raised. Most likely Google's throttle on three lanes plus ~60 takes in a day. A
  failed try costs nothing but a try; if it recurs, drop to two lanes.
- **Cues are written by hand, as in KP2.** `draft_cues.py` put two slides 1 s apart in 21 of 27 drafts
  (mostly the recap and the slide before it, where the take never says the recap's words). The drafts are
  overwritten with cue files written from each transcript. Modules 3–6 had no `cues/` or `video/` folder;
  `draft_cues.py -o` does not create one and fails with a bare traceback.

**3 October 2026 (evening) — tries and the show-open.**

- Decided by the author: 3 tries first; a subtopic still unresolved gets 3 more (6 in all). Never more
  than three generations in flight (one per lane: Modules 1→4, 2→5, 3→6).
- "unpack this" is accepted like the other show-open phrases: added to `SHOW_OPEN_PHRASES` in the kit's
  `take_until_pass.py`. Takes that failed on it alone before the change (2.4 v0.3, 3.3 v0.2) count as passes.
- Phrases that still block, seen in the first ten videos: "think about" (outro), "chaotic", "a mess",
  "our sources", "nightmare", "crazy", "broken" — and once the brief's own words "substantive question"
  read aloud (1.2). Runtime swings 3:18 to 7:21 on the same brief.

**3 October 2026 (later) — the hosts cannot say "PAERA".**

- 1.1 failed all three tries on v0.1, every time partly on the name: "PAIRA", "Payara", or spelled out.
  KP2 never met this because its scripts never say the name. KP3's scripts do, in 24 videos.
- Fix, in the briefs only (v0.2 for those 24): §2 says "the GovStack reference architecture" where it said
  "PAERA, the GovStack reference architecture", and "the reference architecture" elsewhere; the §4 row and
  the prompt line are KP2's "never say the initialism". The slides, decks and scripts still name PAERA.
  The other 21 videos never say it and make_brief already wrote that rule into them.
  The script is `no_paera.py` in the session scratchpad; its rules are the three sentences above.
- Takes rolled on v0.1 before the fix (1.1, 2.1, 2.2, 3.1) — 2.1 passed (it says PAERA once; listen
  for it before accepting). 1.1 and 3.1 need a re-run on v0.2.
- Other failures seen so far, not yet acted on: 2.2 runs short (3:39, 3:44 against 5:00) — its deck may
  simply carry less than five minutes of content; 3.1 says "a mess" and "our sources" despite §3.
- Prompt sentence-matching regexes must not assume a full stop inside the PAERA sentence; it has none.

**3 October 2026 — briefs and takes, English only.**

- **Briefs.** `kp-audio-brief/scripts/make_brief.py <deck>` drafted all 45 briefs and prompts (v0.1) with no
  errors and no `brief_deck_check.py` drift. The only hand step: every prompt ships with the placeholder
  `«ENUMERATION LINE …»`, which must be replaced with the lists to number aloud (or deleted). Left in, it is
  pasted into NotebookLM verbatim. The 20 filled lines are recorded in the prompts themselves; videos with
  no numbered list (1.2, 1.5, 1.8, 1.10, 2.1, 2.2, 2.5, 3.1, 3.5, 4.1, 4.2, 4.4, 4.6, 5.4–5.6, 6.1–6.8, 6.10)
  have the paragraph deleted. 6.1 and 6.2's slide tables number their rows oddly ("8. Quick win" ×3); no
  enumeration line was written for them.
- **The terminology rows** are the template's (PAERA, Progressa, GovStack). PNIA, PLR, PEMIS, PayPro and
  Linkup are not in them yet — add rows if the takes mangle them.
- **Takes** run through `kp-notebooklm-audio/scripts/take_until_pass.py <module>/en --all --tries 3`
  (take → Scribe → trim → audit, up to three tries, then settle on runtime or report unresolved).
- **Parallel generation works mechanically.** Run as three chains, one module after another per chain
  (1→4, 2→5, 3→6): each module has its own `notebooklm/notebooks.json` and `takes.log`, so nothing is shared
  but the Scribe ledger. This goes against the kit's "no parallelism" rule, which is caution about an
  unofficial client on a personal Google account, not a documented limit; decided by the author 3 Oct.
- **macOS DNS drops out for minutes at a time** while Wi-Fi stays up (`dig` resolves, `curl`/Python do not).
  The 1.1 pilot generated a take (271 s) and then lost it at the download, and both re-tries failed in
  seconds on `nodename nor servname provided`. `take_until_pass.py` counts these as tries. A video whose log
  shows `take failed: … ConnectError` was never audited — re-run it, it is not a brief problem. The notebook
  keeps its generated audio, but the runner clears and regenerates it rather than downloading it again.
