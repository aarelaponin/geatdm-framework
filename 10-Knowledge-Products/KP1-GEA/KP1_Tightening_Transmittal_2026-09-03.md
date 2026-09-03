# KP1 v0.2 — transmittal note

**To:** ITU/Giga (Carolina Anselmino) · **From:** FiscalAdmin OÜ · **Date:** 3 September 2026
**Contract:** RFQ-S-GIGA-2026-022 / Purchase Order #334304
**Subject:** KP1 video scripts tightened — 37 videos to 35, 19,350 spoken words to 15,585

---

## 1. What changed, in one paragraph

Every KP1 script has been shortened without removing a message, a Progressa specific, or the
stand-alone comprehensibility of any video. Openers and recaps are capped, cross-module concepts
that were being re-taught are now carried by one self-contained sentence, two videos are retired
into others, and every subtopic has gained an on-screen practice box naming the artefact its AI
usage tip produces. Nothing in the AI tips changed — no prompt, no input/output line, no
safeguard. No PAERA citation moved.

## 2. Before and after

| Module | Videos | Spoken words | Slides |
|---|---|---|---|
| 1 | 8 → **7** | 4,105 → **3,188** | 61 → **48** |
| 2 | 7 → 7 | 4,331 → **3,677** | 52 → **51** |
| 3 | 7 → 7 | 3,621 → **3,144** | 53 → **53** |
| 4 | 8 → 8 | 3,795 → **3,011** | 57 → **55** |
| 5 | 7 → **6** | 3,498 → **2,565** | 49 → **40** |
| **KP1** | **37 → 35** | **19,350 → 15,585** (−19%) | **272 → 247** (−9%) |

Target runtime falls from about 190 minutes to about 141. Realised runtime is measured, not
estimated, only when the videos are re-recorded.

## 3. Every subtopic changed, and why

### Module 1 — `build_kp1_module1_v03.js`

| Subtopic | Change | Why |
|---|---|---|
| 1.1 | Opener 102 → 45 words | The pattern was stated three ways before the video's question was asked. |
| 1.2 | The "Is / Is not" slide folds onto the title slide (−1 slide) | It carried 22 words of voice-over — a slide's worth of screen time for a clause. |
| 1.3 | Opener cap | Same. |
| 1.4 | Opener and recap caps | The recap restated the whole video before its single message. |
| 1.5 | Opener cap; the two "two paths" beats become one | The two paths were described twice, once per path. |
| 1.6 | The five per-phase slides become one cumulative-reveal five-row slide; two thin slides fold into neighbours (11 slides → 5) | The video is called "the lifecycle on one page" and was delivered on eleven. |
| 1.7 | s3, s4, s6 trimmed to pay for a two-slide close on the four signpost countries (+2 slides) | The four asks now end on evidence that four real governments committed to all four. |
| 1.8 | **Retired** | Its content was motivation for what Module 5 presents as evidence. Two of its slides close 1.7; its comparator-country prompt is now 5.1's AI usage tip. |

### Module 2 — `build_kp1_module2_v02.js`

Every subtopic was 23 to 66 words over the target printed in its own header table. The scripts come
back to those targets; **the header targets themselves are unchanged**. 2.2 s6 and 2.4 s5
(adopt-don't-invent, told twice) become one sentence each; 2.6 s3 (per-layer criteria) becomes two;
2.5's "trace one service down" becomes the recap and the separate summary slide goes (−1 slide, the
only slide change in Module 2). 2.2 s5 and 2.7 s2–s3 are **kept in full** — they are the Architect
track's only teaching of the two structural arguments. 2.3 is untouched apart from the caps.

### Module 3 — `build_kp1_module3_v02.js`

3.1 s6 and 3.4 s6 both argued that the repository, the metamodel and the Board give a shared
picture, shared words and a shared rhythm. It is now told once, in 3.4, and signposted in one
sentence in 3.1. 3.5 s3 keeps the gate moment and replaces the rational-project preamble with one
self-contained sentence. 3.7's recap stops re-listing all four counters. 3.2, 3.3 and 3.6 are
untouched apart from the caps. No slide change.

### Module 4 — `build_kp1_module4_v02.js`

Module 4 now demonstrates the method on Progressa rather than re-teaching it. 4.3 s3–s5 keep only
the Progressa facts and drop the "on Progressa"-prefixed restatement of 2.6's ranking method; 4.4
s4 and 4.6 s4 become one sentence each; 4.7 keeps the Board's ruling on the scholarship programme
and the decision-log line and drops the picture/words/rhythm triad and the six-months-then-forever
reprise (−2 slides); 4.1 becomes a three-minute scene-setter. 4.5 is **not** shortened beyond the
caps — it is the only teaching of the target architecture in KP1.

### Module 5 — `build_kp1_module5_v02.js`

The former 5.3 (the portability case) and 5.6 (the national rollout) are **merged into one video,
5.3** — "Roll it out across sectors — and why the second is cheaper". Both rested on the same
argument: the muscle is built once, so every sector after the first is cheaper. The merged single
message implies both originals. 5.6's rollout-sequencing prompt survives as the single AI tip; the
sector-transfer prompt moves to the GitBook companion. The former **5.7 is renumbered 5.6**, and
its era-shift argument — "useful then; necessary now" — is now told once, in about eighty words,
instead of across two slides. Module 5 ships six videos.

## 4. The on-screen practice box — a convention for confirmation

Every recap slide now carries a bordered on-screen box, **not narrated**:

> **Do this on your own sector.** Run the prompt in the description on your own ministry — it
> gives you *[the artefact the subtopic's AI tip produces]*. Before the next video.

It replaces the narrated "Your play" handoff. The voice-over may not mention the prompt, the
description, or the listener's own sector — three independent checks enforce that (the deck
extractor labels the box as on-screen only, the audio brief forbids it, and the SRT audit lists the
phrases as banned). The artefact string is machine-checked to be a substring of the AI tip's own
inputs-and-outputs line, so the box and the tip cannot drift apart.

**Two things for ITU.** (1) Confirm the convention. (2) The box says "the prompt in the
description"; a tool-neutral wording for the GitBook companion (where the same play carries an
"Open in Claude" link) is still open.

## 5. Calibration items withdrawn

The Module 5 items that asked ITU to confirm that 1.8 and 5.1, 1.7 and 5.4, and 1.4 and 5.7 "read
as deepening rather than repetition" are **withdrawn**. They have been answered by editing rather
than by asking: 1.8 is retired, its comparator evidence now lives only in 5.1, and the era-shift
argument is told once. The Module 1 items on Singapore's MyInfo coverage and the Australian
Government Architecture timeline are withdrawn with the retired 1.8.

## 6. One decision for ITU

Four subtopics — **1.1, 1.3, 1.6 and 2.1** — have no "In one sentence" recap slide at all. That
predates this pass, but it now matters, because the practice box lives on the recap slide and these
four have nowhere to put it. Adding a slide to each works against the slide targets. Options: add
the slide and accept +4, put the box on the last content slide, or leave those four without a box.
Our recommendation is to add the recap slide — it is the quotable take-home line in every other
subtopic and its absence is a gap in its own right — but it is ITU's call.

## 7. What has *not* been done

Only the `.js` build scripts and their `.md` renderings are tightened. The deck scripts, the
per-video decks, the split specs and the eight published Module 1 videos are all still v0.1 and are
known-stale against these scripts. Module 1 v1 stays live, unchanged, until it is re-recorded; it
is compliant, only long. Production resumes with a `vo_diff.py` check that the decks and the
scripts say the same thing, then the deck rebuilds module by module, then the Module 1
re-narration and the YouTube swap.

## 8. Verification run

- `qa_bundle.py` on all five scripts: **0 hard failures.**
- `curriculum_qa.py --matrix kp1`: **0 findings, 0 warnings.** `--matrix kp1-kp2`: 0 hard findings;
  the four warnings are pre-existing KP2 terminology drift, none introduced here.
- PAERA: **no section reference added anywhere**, and every surviving subtopic keeps the anchor it
  had. The two anchors that appear to move are the renumbering carrying 5.7's anchors to 5.6.
- All five build scripts build a `.docx` and convert to PDF cleanly (47/48/48/53/45 pages).
