---
name: kp-whisper-transcribe
description: >-
  Transcribe a KP narration take (`…_Audios/KP«n»_Module«m»_Audio_«x.y»_v0.«v».m4a`) to the
  `.srt` that `kp-audio-brief` Step 6 audits, using local `openai-whisper` — no upload, no API
  key. Use WHENEVER the task is "transcribe this audio", "get an SRT for this take", "run
  whisper on <file>.m4a", or a fresh `.m4a` lands in a `…_Audios/` folder with no matching
  `.srt`. Covers the install failure modes specific to this Mac: system Python (3.7) has no
  `torch` wheel, Python 3.11 drags in a `numba`/`llvmlite` combo with no macOS wheel and falls
  back to a `cmake` build that fails, and the model download dies with `CERTIFICATE_VERIFY_FAILED:
  self signed certificate in certificate chain` because Python's cert store doesn't trust the
  corporate proxy root that `curl`/macOS already trust. Run before `kp-audio-brief` Step 6, or
  any time an audio take needs a transcript and none exists.
compatibility: macOS with Homebrew. Needs `ffmpeg` (`brew install ffmpeg`) and a Python 3.9/3.10
  venv — not the system Python. No GPU required (runs CPU/FP32).
---

# KP whisper transcribe — local audio → SRT

## Why this exists

`kp-audio-brief` Step 6 audits a take's `.srt` against the deck's budget and terminology. That
`.srt` has to come from somewhere, and on this machine `pip install openai-whisper` doesn't work
out of the box: the system Python is too old for `torch`, a newer Python drags in a `numba` build
that needs a compiler toolchain it doesn't have, and the model download is blocked by a
proxy-injected TLS certificate that only `curl` (via the macOS keychain) trusts. None of that is
obvious from the error messages alone, so this skill is the worked recipe rather than a
rediscovery each time a new take needs transcribing.

## One-time setup

```bash
brew install ffmpeg                              # hard runtime dep, not a pip package

python3.10 -m venv ~/.venvs/whisper               # NOT system python3 (3.7: no torch wheel)
                                                   # NOT 3.11 either: numba/llvmlite has no wheel
                                                   # here and falls back to a cmake build that fails

# Pin BEFORE installing whisper, or pip resolves the newest llvmlite (no macOS wheel,
# source build fails with "CMake Error ... find_package"):
~/.venvs/whisper/bin/pip install llvmlite==0.39.1 numba==0.56.4
~/.venvs/whisper/bin/pip install openai-whisper
```

If those pins go stale, find a version with a wheel before reinstalling:
`pip index versions llvmlite` / `pip download --no-deps llvmlite==X`.

**Model download SSL failure** — first `whisper` run per model hits
`ssl.SSLCertVerificationError: ... self signed certificate in certificate chain` even though
`curl` to the same URL works fine. Don't chase Python's cert config; fetch the model with `curl`
into whisper's own cache so it never needs the network again for that model:

```bash
grep -A3 '"turbo"' ~/.venvs/whisper/lib/python3.10/site-packages/whisper/__init__.py  # exact URL
mkdir -p ~/.cache/whisper
curl -L -o ~/.cache/whisper/large-v3-turbo.pt "<url from grep>"
```

## Running it

```bash
export PATH="/usr/local/bin:$PATH"        # so ffmpeg is found
~/.venvs/whisper/bin/whisper <Audios-dir>/KP<n>_Module<m>_Audio_<x.y>_v0.<v>.m4a \
  --model turbo --output_format srt --output_dir <Audios-dir>
```

Writes `KP<n>_Module<m>_Audio_<x.y>_v0.<v>.srt` next to the source file — the exact path
`kp-audio-brief` Step 6 (`srt_drift_check.py`) expects. `FP16 is not supported on CPU; using
FP32 instead` is expected (no GPU) and not an error.

## Anti-patterns

- Running `pip install openai-whisper` against whatever `python3` resolves to without checking
  its version first — it is very likely wrong on this machine.
- Letting pip pick `llvmlite`/`numba` freely instead of pre-pinning — the newest `llvmlite`
  routinely has no Intel-macOS wheel.
- Hand-typing the model URL/hash instead of grepping it from the installed package — one dropped
  character 404s silently-ish (a real, but wrong, HTTP response).
- Trying to fix the SSL error by upgrading `certifi`/pip — the blocking cert is a corporate root
  not in any public CA bundle; only the OS keychain (and therefore `curl`) trusts it.

## What good looks like

`~/.venvs/whisper/bin/whisper --help` runs without error, `~/.cache/whisper/` holds the model
`.pt` file, and a new take's `.srt` lands beside its `.m4a` ready for `kp-audio-brief` Step 6.
