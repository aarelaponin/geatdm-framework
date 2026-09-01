# Failure modes and the fallback ladder

This skill drives an **unofficial client against undocumented endpoints** on a personal Google
account. It is a convenience over a manual process that still works. Read that sentence again
before depending on it for a deadline.

## The fallback ladder

Every rung produces the same artefact. **The artefacts never depend on the tool that made them** —
a `.m4a` with the right name in `«lang»/audio/` is all anything downstream knows about.

1. **This runner.** One command.
2. **The manual browser flow** — still documented in full in `videos/README.md` step 4, and in
   every `…_NotebookLM_Prompt_v0.«v».md` file, which is written as an operator runbook precisely
   so a human can execute it. Costs time, nothing else.
3. **`docs/plans/2026-08-29-kp-interview-tts.md`** — the fully-scripted Gemini TTS path, parked
   after its pilot. Different trade-offs entirely; read that plan's §7b before reaching for it.

Never let a broken rung stop the module. Drop one rung, ship, fix the runner later.

## What breakage looks like

| Symptom | What it is | What to do |
|---|---|---|
| `not authenticated`, or 401/403 mid-run | Cookie session expired | The three-line re-auth in `auth-setup.md`. Nothing is written on a failed run. |
| `Could not decrypt chrome cookies` | The macOS Keychain prompt was not allowed | Re-run `login` yourself, in a terminal you can click in. |
| `UnknownRPCMethodError`, `RPCError`, a parse error | Google changed an endpoint | **Do not chase it.** Drop to rung 2 and ship. Then check the library for a release; upgrade deliberately and re-run the pilot. |
| `RateLimitError` | Throttled or out of daily quota | The runner stops and prints `--from`. Continue tomorrow. Do not parallelise. |
| Generation completes but no artifact | Server-side generation failure | Re-run. If it repeats, rung 2 — it may be the brief tripping a safety filter. |
| Take is on-spec mechanically but wrong | **Not a runner problem.** | The brief steers the take. Fix the brief, re-roll. Same loop as always. |
| Wrong-looking content, right-looking process | A stale source survived | Should be impossible — sources are reset before every generation. Check `takes.log` for which brief version ran, and `notebooklm list` for a duplicate notebook. |

## Posture, stated plainly

- **Sequential, one generation in flight, a fixed pause between subtopics. No parallelism, ever.**
  This is a personal account used at human scale. The pacing is both the ToS posture and the
  throttle-avoidance strategy, and it is not a knob.
- Eight subtopics take well under an hour. That is fine. It is unattended time.
- The daily tally in `takes.log` is a crude client-side view. The real limit is server-side and
  the runner cannot see it; a `RateLimitError` is the only authoritative signal.
- If the automation is ever lost, the pipeline is not. That is the whole design.

## What this skill deliberately does not do

The library can also generate video overviews, slide decks, reports, mind maps, quizzes and
flashcards. **None of them are used here, and none should be.** The deck is built by
`kp-deck-builder` on the ITU template, and the video by `kp-slidecast`; those are the product's
own artefacts with their own gates. Generating a deck in NotebookLM would bypass every one of
them. The temptation is real and the answer is no.
