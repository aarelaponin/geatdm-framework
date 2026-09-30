# The ITU/Giga Knowledge Products kit lives in the marketplace

The production kit for the ITU/Giga Knowledge Products, the Claude plugin **`itu-giga-kp`**, lives
only in the private marketplace repository **`aarelaponin/claude-marketplace`**, in the folder
**`plugins/itu-giga-kp/`**. At the time of writing (30 September 2026) it is version **1.1.1**.
Nothing is kept here.

## What was here before

Until 30 September 2026 this folder held a copy of the kit. The copy is in this repository's
history. To read it, check out the commit before the one that removed this folder, or run
`git log --follow -- 10-Knowledge-Products/ITU-Giga-KP-Plugin` and open any earlier commit. Its last
version label was 0.9.0; the marketplace re-versioned the kit to 1.0.0 when it took it over,
because 0.9.0 had been used for two different contents.

## How the products find the kit

The deck programs and the build pack find the kit through the environment variable **`KP_KIT`**.
Set it to the `plugins/itu-giga-kp` folder of a clone of the marketplace repository. With
`KP_KIT` unset, a build stops with a message that names it.

## The kit's skills

- `bb-config-gen`: turns a Building-Block spec and a service brief into the configuration that wires that block (KP2 to KP4).
- `itu-giga-kp-bundle`: generates, revises or reviews a Knowledge Product video-script bundle, the author skill of the kit.
- `kp-audio-brief`: writes the audio brief and the NotebookLM customisation prompt for a subtopic, and audits the take that comes back.
- `kp-build-pack`: scaffolds and assembles the runnable build pack that ships with an implementation KP (KP2 to KP4).
- `kp-build-render`: builds and renders a module's script bundle as a docx and checks it by eye.
- `kp-bundle-qa`: the ITU compliance gate for a video-script bundle, run before any module is shared.
- `kp-citation-verify`: the PAERA-fidelity gate that takes every citation from draft to verified.
- `kp-curriculum-qa`: the gate above the per-module gates, for coherence across a whole KP and across KPs.
- `kp-deck-builder`: builds the module deck and the per-video decks on the ITU template, with the voice-over in the speaker notes.
- `kp-gitbook-render`: renders the KP1 and KP2 companion GitBook spaces from the signed build scripts and checks them.
- `kp-interview-tts`: the scripted two-speaker text-to-speech path; parked, used only when asked for by name.
- `kp-notebooklm-audio`: generates a subtopic's NotebookLM narration take from its audio brief in one command.
- `kp-scribe-transcribe`: transcribes a narration take to the SRT with the ElevenLabs Scribe service.
- `kp-slidecast`: assembles a video from the deck, the narration audio and a slide cue file, and authors the cue file.
- `kp-solution-verify`: the runnable-acceptance gate for an implementation KP, proving the build pack is complete and runs.
- `kp-whisper-transcribe`: the offline fallback that transcribes a narration take to the SRT with local Whisper.
