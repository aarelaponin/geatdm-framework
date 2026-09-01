# Voice pairs — what the cast is, and how it changes

The TTS path has a voice picker, which is the thing `videos/voice-swap.md` exists to work
around on the NotebookLM path. So the cast is chosen **once, before the pilot take**, frozen
here and in each KP's TTSConfig, and after that a voice change is a config edit and a re-roll —
no Descript, no stems, no Voice Changer.

`videos/voice-cast.md` stays the register of record for the series. This file is the TTS
path's half of it: which prebuilt voices were auditioned, which pair won, and why.

---

## The frozen pair

| KP | Language | Interviewer | Expert | Frozen | Auditioned against |
|---|---|---|---|---|---|
| KP1 | en | **Aoede** | **Charon** | **2026-08-29** | Aoede/Kore, Puck/Charon, Puck/Enceladus |
| KP1 | fr | — | — | out of scope until the EN module is accepted | — |

Chosen for the widest register gap of the four auditioned — a bright interviewer against a deep,
measured expert. That gap is what keeps a speaker turn audible as a slide-cut point, which is the
one audition criterion the rest of the pipeline actually depends on.

**Fill this table before the pilot take.** A take synthesized against an unfrozen pair is a
throwaway.

---

## Auditioning

Candidates, by the role they read for:

| Role | Wanted | Candidates |
|---|---|---|
| Interviewer | bright, inquisitive, shorter turns | `Aoede`, `Puck` |
| Expert | measured, authoritative, carries long turns without flattening | `Charon`, `Kore`, `Enceladus` |

One command per pair, on the free tier, against a fixed 30-second exchange built into the
script so every pair reads exactly the same words:

```bash
KP=~/.venvs/kp/bin/python
S=…/ITU-Giga-KP-Plugin/skills/kp-interview-tts/scripts

$KP $S/tts_synthesize.py --audition Aoede,Charon
$KP $S/tts_synthesize.py --audition Aoede,Kore
$KP $S/tts_synthesize.py --audition Puck,Charon
$KP $S/tts_synthesize.py --audition Puck,Enceladus     # -> /tmp/audition_<A>_<B>.m4a
```

Listen for, in this order:

1. **Can you tell them apart with your eyes shut?** Two voices in the same register is the
   failure that survives every other check and ruins the cue file, because the SRT's speaker
   turns stop being real.
2. **Does the expert hold a 40-second turn** without going flat or sing-song? Most of the take
   is one voice talking.
3. **Does the interviewer sound like they already know the answer?** They are a senior official's
   proxy, not a curious layperson.
4. **Do the house terms survive?** PAERA, GovStack, EIF. If a pronunciation is wrong here, it
   is wrong in every video, and the fix is the TTSConfig's `pronunciations` map, not the take.

Then write the winner into the table above **and** into every affected KP's TTSConfig, with the
date.

### Measured, 2026-08-29 — `gemini-3.1-flash-tts-preview`

The fixed exchange is 116 words. All four pairs read it cleanly; none was rejected on quality
grounds by the script, so the choice is entirely a listening call.

| Pair | Duration | Pace | Cost |
|---|---|---|---|
| Aoede / Charon | 42.1 s | 165 wpm | $0.027 |
| Aoede / Kore | 42.2 s | 165 wpm | $0.027 |
| Puck / Charon | 41.0 s | 170 wpm | $0.026 |
| Puck / Enceladus | 45.2 s | 154 wpm | $0.029 |

Those runs used an older audition preamble that asked for 150 wpm; the audition now asks for 140,
like a real TTSConfig, so re-run it if you want durations that predict a take directly.

### Pace is steerable, and the lever is a plain number

Same 116 words, same pair (Aoede / Charon), preamble varied:

| Preamble | Measured |
|---|---|
| "about 150 words per minute" | 165 wpm |
| "Pace about 140 words per minute." | **146 wpm** |
| "Speak SLOWLY and deliberately … pause a full beat at every full stop … never rush" | 118 wpm |

On a 30-second audition the model tracks a stated pace within about 4%.

**That result does not survive to full length, and this is the trap.** Measured on the KP1 1.1
pilot — 576 words, same pair, three takes:

| Preamble | Delivered | Runtime |
|---|---|---|
| "Pace about 140 words per minute." | 161 wpm | 3:35 — audit FAILs, UNDER |
| "Pace about 125 words per minute." | 160 wpm | 3:36 — audit FAILs, UNDER |
| "Speak slowly and deliberately, noticeably slower than normal conversation — about 140 words per minute. … Pause for a full beat at every full stop, and for two beats between speakers. Never rush." | **136 wpm** | **4:13 — audit clean** |

**At full length the stated number is inert; the adjectives are the whole lever.** Asking for 125
instead of 140 changed nothing measurable. Only the emphatic wording moved it, and it moved it to
exactly where the house guidance wants a take for ESL listeners (the 130–150 band
`srt_drift_check.py` prints).

Two consequences:

- **An audition's pace does not predict a take's.** Use auditions to choose *voices*, never to
  forecast runtime. Forecast runtime from a real take, or from the `wpm` another take measured.
- **Do not "tidy" that preamble.** Shortening it to "about 140 words per minute" reverts a passing
  take to a failing one, and the diff will look harmless. Every KP1 EN TTSConfig carries the long
  form, and its `_pace` field says why.

---

## Changing a frozen pair

Same discipline as the deck version and the same rule `videos/README.md` states for the cast:
changing the cast orphans every video made before it.

1. Re-audition as above, and record why in the table.
2. Bump the TTSConfig version.
3. **Re-roll every video in the KP that has already shipped**, or decide in writing that the
   back catalogue keeps the old pair. Do not leave the series half-cast.

A voice is not a per-video knob. If a single video sounds wrong, the InterviewScript or the
director preamble is what is wrong.

---

## Notes on the API

- **Exactly two speakers.** `multi_speaker_voice_config` maps speaker *names* to voices, and
  those names must match the `**Name:**` labels in the InterviewScript — the linter checks it.
- **The preamble steers delivery, not the voice.** Pace, tone and scene live in the TTSConfig's
  `director_preamble`. That is where "about 150 words per minute" and "no podcast energy" go.
- **The model is a preview model.** Voices, limits and pricing can move. `takes.log` records the
  model per take so a change in output is attributable; `--list-models` prints what the key can
  actually call today.
