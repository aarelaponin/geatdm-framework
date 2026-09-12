# Status: KP1 Module 5 video track (English)

**Date:** 12 September 2026 · **Scope:** `videos/module_5/en/`, steps 4–7 of the video track.
**Method:** the six v0.2 briefs, takes via `kp-notebooklm-audio`, transcribed via
`kp-scribe-transcribe`, audited with `srt_drift_check` + `coverage_check`, cued and assembled
with `kp-slidecast`.

## Verdict

**Six of six produced, cued and assembled.** Module 5 went from script-deck-brief to finished
video in one pass. KP1 is now 29 finished English videos across Modules 1–5; what remains is
publication, the on-camera intros and the French mirror.

| Video | Take | Runtime | Slides | Sources tail | Note |
|---|---|---|---|---|---|
| 5.1 | v0.8 | 5:00 | 8 | 4.1 s | clean on try 2 |
| 5.2 | v0.3 | 5:56 | 7 | 5.2 s | settled on runtime, +56s — the longest of the 29 |
| 5.3 | v0.2 | 4:42 | 8 | 5.3 s | clean on try 1; weak close ("It really makes you think.") |
| 5.4 | v0.4 | 5:02 | 8 | 5.2 s | clean on try 2 |
| 5.5 | v0.6 | 4:59 | 8 | 5.1 s | v0.1 re-trimmed after the mid-sentence fix |
| 5.6 | v0.2 | 4:55 | 7 | 5.8 s | no cold open — the hosts announce the video first |

`rendered N slides, N cues` with no count warning on all six; every MP4 duration equals its m4a;
a frame extracted at each cue and inspected shows the slide the cue promised, in order, Sources
last.

## The name rule stopped being a list

Module 5's first pass mangled PAERA immediately — 5.1 alone produced `PEA`, `PAEA`, `PIERA` and
`Pan-African Enterprise framework` in three rolls. Checking the briefs explained it: **none of
Module 5's six briefs uses PAERA in its own content.** The name reached the hosts only through
the §4 terminology row, which is 4.8's condition exactly.

So the 12 Sep `NO_ACRONYM = {"4.3", "4.8"}` set was replaced by the condition it was standing in
for: **a brief whose §2 never uses the name does not say it out loud.** The evidence is one-sided.

| | §2 uses PAERA | On air |
|---|---|---|
| 4.4, 4.6 | yes | says it correctly |
| 4.3, 4.8, 5.1 | no | 19 manglings in 22 rolls, 15 distinct forms |

A term the hosts have a use for is pronounced; a term handed to them in a glossary row with
nothing to do is invented. Twenty-seven of the thirty-five KP1 briefs never use it, and those
twenty-seven now say "the reference architecture". The eight that do keep the name. **The slides
are untouched in every case** — the title and Sources cards still carry PAERA v1.0.

After the change the name never failed again: 5.1 clean on the next roll, and no terminology
failure on any of the other five.

## The coverage gate was blocking on the two slides it cannot measure

5.5 and 5.6 came back `unresolved` after three rolls each, both on `MISS slide 2`. Measuring the
whole batch showed the gate, not the takes: **nine of the twenty-three already-shipped KP1 takes
score 17–33% on slide 2.** It is the WHERE WE START opener — a ~40-word scripted hook the hosts
are documented to stretch to 45–90 s in their own words, usually behind an analogy of their own.
Low overlap there is the format working.

The IN ONE SENTENCE recap has the same problem from the other direction: it restates the content
slides, so whatever vocabulary is *distinctive* to it is whatever the others did not use. On 5.6
that was `held`, `possible`, `whole` — three function words, scored 0/3, reported as a MISS.

Both now join the title card and the Sources slide as bookends: reported, never a failure.
`coverage_check` labels them `note`. Every content slide still gates as before, and with the
change 5.5 and 5.6 are clean.

## trim_outro: the early return cut mid-sentence too

The 12 Sep fix made the walk-back stop at a sentence boundary but left the other return path
alone. 5.5 hit it: the reflective marker ("a thought to mull over") sat in the *second* half of a
sentence, so the cut landed there and the take ended on a comma — "It's about owning the
capability, not just renting the talent,". Both paths now share `_to_sentence_start`.

**Sweeping every take of record found five shipped videos with the same cut:** 2.1, 2.4, 2.5,
3.1 and 4.5 all end mid-clause. 2.5's ("It does,") was already logged as a weak close on 7 Sep;
the other four were not. Fixing them means a re-roll rather than a re-trim, because their raw
pre-trim parents were deleted in the 12 Sep cleanup.

## What the batch collision cost

Re-trimming 5.5 while the roll batch was still running put two writers on the same subtopic.
`trim_outro` claimed `v0.3`; the batch's next take claimed `v0.3` too and overwrote the audio —
then `transcribe.py` skipped it, because a `.srt` of that name already existed. The result was an
audio file and a transcript that were **different takes**, and the batch audited the new audio
against the old transcript and reported a pass.

Caught by comparing every m4a's duration against its SRT's last timestamp; 5.5 v0.3 was the only
mismatched pair in the module. Removed, and re-derived from the raw take.

**Do not write into a module while `take_until_pass --all` is running on it.** The audit is the
thing that silently produced a wrong answer here, not the files.

## Known and deliberately not fixed

1. **5.2 runs 5:56** — 56 s over, settled on runtime because the other two rolls ran 2:33 and
   carried "think about" in the close. Longest of the twenty-nine, just past 4.6 v0.7's 6:03.
2. **5.3's close is weak** — "It really makes you think." No question, so the Sources card
   carries it; same trailing-reflection defect as 2.5.
3. **5.1's Sources card gets 4.1 s.** The take runs right to the end, so fifteen seconds cover
   slides 6–8. Only padding fixes it, which the pipeline rules forbid by hand.
4. **5.6 has no cold open.** It announces itself in the first words, so the title card holds 10 s
   rather than the 15–25 s the other twenty-eight get.
5. **5.1 slide 5's copy** reads "The programmes that struggled struggled for consistent,
   learnable reasons". It is a reduced relative clause, so it is grammatical, but on screen it
   reads as a duplicated word. Left as the author wrote it — the same sentence is in the VO note
   in `build_kp1_module5_deck_v02.py`, so a change would be one line in two places.

## The length label is off the title cards

Module 1's `section()` accepts a `runtime` argument and ignores it — "a minutes figure printed on
a slide is wrong the moment the audio is re-cut". Modules 2-5 were still interpolating it, so
every one of their title cards read `~N minutes · standalone video · voice-over on text slides`
against Module 1's `standalone video · voice-over on text slides`. The 10 Sep note recorded this
as "cosmetic, and identical in Module 1"; the second half was wrong.

All four build scripts now carry Module 1's version of `section()`, with its comment. The decks
were rebuilt and re-split, and extracting text and notes from all twenty-eight per-topic decks
before and after shows **exactly one changed line each** — the title card. All twenty-eight
videos were then re-assembled from their existing takes and cue files: `rendered N slides,
N cues` with no count warning on any of them, and every MP4 duration still equals its m4a.

The label never reached the briefs — `make_brief.py` reads `Length: ~N min`, a different string,
and every brief has targeted a flat 5:00 since 8 Sep. Nothing upstream of the deck moved.

## Next

1. Publication: YouTube metadata for M2–M5, the on-camera module intros, the KP1 intro.
2. The four mid-sentence closes (2.1, 2.4, 3.1, 4.5) — re-roll, or ship.
3. The French mirror.
