# NotebookLM prompt template

Copy to `<stem>_NotebookLM_Prompt_v0.1.md`. Replace every `«…»`. The customization text is a
compression of the audio brief, not a substitute for it — the brief must still be the notebook's
first source, because NotebookLM weights sources far above the customization box.

---

# NotebookLM setup for «KP» · M«N» · Video «X.Y»

## Step 1 — Fix the notebook, not just the prompt

NotebookLM weights **sources** far more heavily than the customization box. Takes drift when the
notebook contains the full PAERA / EIF corpus, because the hosts are free to roam it.

1. Create a **new notebook used only for video «X.Y»**. One notebook per video — never one
   notebook per module.
2. Add `«stem»_AudioBrief_v0.1.md` as the **first** source.
3. Add **at most two** background sources, and only narrow extracts (e.g. PAERA §2.1 and §5.2 —
   not the whole document). If you can, add none: the brief is self-contained.
4. Deselect every other source before hitting Generate.

## Step 2 — Settings

- Format: **Deep Dive** (two hosts)
- Length: **Shorter** — Default overshoots a «M»-minute spec by 60–90 seconds
- Language: English «FR: set to French for a French take — confirm in NotebookLM whether this
  changes only the output audio's language or also expects the source brief itself in French;
  decide this once and record it here rather than re-deciding per video»

## Step 3 — Customization prompt (paste this)

```
Follow the source titled "AUDIO BRIEF — «KP» Module «N» Video «X.Y»" exactly. It is the sole
authority. Do not add anything not in it.

Audience: government Chief Digital Officers, Directors-General and sector ministers, many
listening in English as a second language «FR: rewrite this clause for the French take — see the
matching note in audio-brief-template.md §0». Register: two senior advisers briefing a minister —
collegial, precise, unhurried. Not a podcast. Speak at roughly 140 words per minute.

The listener is the government official who runs these systems, not a citizen being served.
Say "in your ministry", "your programme", "your vendor", "your minister". Never open with, or
return to, the listener queuing or filling in a form.

Total runtime «M» minutes, hard ceiling «M:SS+15». Follow the brief's «N» segments in order and
respect its per-segment time budget: «title 15s, segment 45s, … sources 10s». Finish each
segment on a complete sentence before moving to the next, and leave a clear pause between
segments. «Number the enumerated list aloud — "sign one" … "sign four" — in the deck's order.»

Never say: "deep dive", "welcome to", "today we're unpacking", "our sources", "the sources say",
"here's where it gets interesting". Do not end with a reflective question, and do not invite the
listener to think about other sectors or institutions. The audio ends on the brief's series
handoff, then one line: "Sources are in the video description." Read no URLs.

Cut all filler — "you know", "like", "I mean", "basically", "totally", "right?", "wow", "oh
absolutely". No crosstalk or interrupting; one speaker finishes before the other begins. Use no
metaphors except the single one permitted in the brief.

Say "PAERA" (spelled P-A-E-R-A on first mention), "the European Interoperability Framework",
"the once-only principle", "register" not "registry". Invent no figures, dates, countries or
examples.
```

## Step 4 — Fallback if the box truncates

Some NotebookLM builds cut the customization field short. If so, paste only this and rely on the
brief source to carry the detail:

```
Follow the source "AUDIO BRIEF — «KP» Module «N» Video «X.Y»" exactly, including its «M»-minute
runtime and its «N» timed segments. Two senior policy advisers briefing a government minister —
not a podcast. The listener is the official who runs these systems, never a citizen being
served. No filler, no metaphors, no crosstalk, no invented examples. Number every enumerated
list aloud. Do not end with a reflective question; end on the series handoff and one line
pointing to sources in the description.
```

## Step 5 — Check before you accept the take

Download the transcript as `.srt`, then:

```bash
python3 scripts/srt_drift_check.py «stem».srt --target «seconds»
```

Plus the judgement calls the script cannot make:

- [ ] Opens on the topic, not on a citizen's experience
- [ ] Every enumerated list audible and in deck order
- [ ] Ends on the handoff into «X.Y+1» — no reflective outro
- [ ] Nothing said that is not in the brief
- [ ] «N» clean segment boundaries you can cut cues against

**If two or more checks fail, regenerate rather than edit.** NotebookLM output is cheaper to
re-roll than to patch, and re-rolls converge once the notebook holds only the brief. If the same
failure survives three re-rolls, the fix belongs in the **brief**, not the prompt.
