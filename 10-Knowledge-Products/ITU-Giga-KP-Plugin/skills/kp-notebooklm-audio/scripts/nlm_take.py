#!/usr/bin/env python3
"""Generate a KP narration take in NotebookLM from the brief, without a browser.

    nlm_take.py <lang-dir> 1.1              one subtopic
    nlm_take.py <lang-dir> --all            every subtopic that has a brief
    nlm_take.py <lang-dir> --all --from 1.4 resume a batch
    nlm_take.py <lang-dir> 1.1 --dry-run    resolve inputs and print the prompt, touch nothing
    nlm_take.py <lang-dir> --list           notebooks this account has, and the local cache

<lang-dir> is a module's language folder, e.g. KP1-GEA/videos/module_1/en.

What is automated is the operator's clicking, waiting and file shuffling. The steering model is
untouched: the brief is still the notebook's SOLE source, the prompt file is still the
customization input, and fixes still go to the brief, never to the audio.

Every generation deletes the notebook's existing sources first, so a stale brief version can
never steer a take.

Exit 0 wrote a take, 1 anything else, 2 quota/throttle (resume with --from).
"""

import argparse
import asyncio
import contextlib
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
import time
from datetime import datetime, timezone
from pathlib import Path

try:
    from notebooklm import AudioFormat, AudioLength, NotebookLMClient
    from notebooklm.exceptions import AuthError, RateLimitError
except ImportError as e:
    sys.exit(f"{e}\nBuild the venv first (Python 3.11 — rookiepy has no 3.13 wheel):\n"
             f"    python3.11 -m venv ~/.venvs/nlm\n"
             f"    ~/.venvs/nlm/bin/pip install 'notebooklm-py[cookies]==0.8.1'")

LANGS = {"en", "fr"}
BATCH_PAUSE_S = 30           # between subtopics. Sequential, human scale, deliberately unhurried.
GENERATION_TIMEOUT_S = 900   # a Deep Dive take is usually 2-5 min; this is the give-up point
SOURCE_TIMEOUT_S = 180
DURATION_TOLERANCE = 0.15    # this path drifts; Step 6 is the real gate
DEFAULT_TARGET_S = 240

BRIEF_RE = re.compile(r"^(KP\d+_M\d+_(\d+\.\d+))_AudioBrief_v0\.(\d+)\.md$")
PROMPT_RE = re.compile(r"^(KP\d+_M\d+_(\d+\.\d+))_NotebookLM_Prompt_v0\.(\d+)\.md$")
AUDIO_RE = re.compile(r"_Audio_v0\.(\d+)\.m4a$")
# "Step 3 — Customization prompt (paste this)" then the first fenced block under it.
CUSTOMIZATION_RE = re.compile(r"customi[sz]ation prompt", re.I)
FENCE_RE = re.compile(r"^```")
# audio-brief-template §0: "| Total runtime | **4 minutes 0 seconds (±10s)..."
RUNTIME_RE = re.compile(r"total runtime.*?(\d+)\s*minutes?(?:\s*(\d+)\s*seconds?)?", re.I)


# --- inputs -------------------------------------------------------------------

def newest(folder, pattern):
    """-> {subtopic: (path, version)} keeping only the highest version of each."""
    best = {}
    for f in sorted(folder.glob("*.md")):
        m = pattern.match(f.name)
        if not m:
            continue
        sub, ver = m.group(2), int(m.group(3))
        if sub not in best or ver > best[sub][1]:
            best[sub] = (f, ver)
    return best


def language_for(lang_dir):
    name = Path(lang_dir).resolve().name
    if name not in LANGS:
        sys.exit(f"{lang_dir} is not a language folder — expected one named {sorted(LANGS)}. "
                 f"Pass the module's en/ or fr/ directory.")
    return name


def customization_text(prompt_path):
    """The fenced block under the 'Customization prompt' heading — not the Step 4 fallback.

    The prompt file is an operator runbook: headings, checklists, and TWO fenced blocks (the
    real prompt, then a shorter fallback for builds that truncate the box). Sending the whole
    file would put the checklist into the customization field, so this takes exactly the first
    block after the customization heading and nothing else.
    """
    lines = prompt_path.read_text(encoding="utf-8").splitlines()
    start = next((i for i, l in enumerate(lines)
                  if l.startswith("#") and CUSTOMIZATION_RE.search(l)), None)
    if start is None:
        sys.exit(f"{prompt_path.name}: no heading matching 'Customization prompt'. This script "
                 f"reads the fenced block under that heading; keep the template's Step 3 wording.")
    body = None
    for i in range(start + 1, len(lines)):
        if FENCE_RE.match(lines[i]):
            end = next((j for j in range(i + 1, len(lines)) if FENCE_RE.match(lines[j])), None)
            if end is None:
                sys.exit(f"{prompt_path.name}: unterminated code fence after line {i + 1}")
            body = "\n".join(lines[i + 1:end]).strip()
            break
    if not body:
        sys.exit(f"{prompt_path.name}: found the customization heading but no fenced block under it")
    return body


def target_seconds(brief_path, override):
    if override:
        return override
    m = RUNTIME_RE.search(brief_path.read_text(encoding="utf-8"))
    if m:
        return int(m.group(1)) * 60 + int(m.group(2) or 0)
    return DEFAULT_TARGET_S


def next_audio_path(lang_dir, stem):
    """The version sequence continues across every path that has ever made a take."""
    audio = Path(lang_dir) / "audio"
    audio.mkdir(parents=True, exist_ok=True)
    used = []
    for f in audio.glob(f"{stem}_Audio_v0.*.m4a"):
        m = AUDIO_RE.search(f.name)
        if m:
            used.append(int(m.group(1)))
    return audio / f"{stem}_Audio_v0.{max(used, default=0) + 1}.m4a"


def ffprobe_duration(path):
    exe = shutil.which("ffprobe") or "/usr/local/bin/ffprobe"
    p = subprocess.run([exe, "-v", "error", "-show_entries", "format=duration",
                        "-of", "default=nw=1:nokey=1", str(path)], capture_output=True, text=True)
    if p.returncode != 0:
        raise RuntimeError(f"ffprobe failed on {path}: {p.stderr.strip()}")
    return float(p.stdout.strip())


def is_auth_failure(exc):
    """Did this blow up because the session died?

    Not answerable with `except AuthError`: an expired cookie surfaces mid-run as
    `notebooklm._auth.extraction._LoginRedirectError`, which is a private class deriving from
    plain `ValueError`. Measured on the 2026-08-29 module-1 batch, where the session expired on
    the eighth subtopic. So match on the message too, and keep this in one place.
    """
    if isinstance(exc, AuthError):
        return True
    text = f"{type(exc).__name__}: {exc}"
    return any(k in text for k in ("LoginRedirect", "Authentication expired",
                                   "notebooklm login", "not authenticated"))


# --- notebook cache -----------------------------------------------------------

def cache_path(lang_dir):
    return Path(lang_dir) / "notebooklm" / "notebooks.json"


def load_cache(lang_dir):
    p = cache_path(lang_dir)
    return json.loads(p.read_text(encoding="utf-8")) if p.exists() else {}


def save_cache(lang_dir, cache):
    p = cache_path(lang_dir)
    p.write_text(json.dumps(cache, indent=2, sort_keys=True) + "\n", encoding="utf-8")


async def find_or_create_notebook(client, lang_dir, title, cache, fresh):
    """One notebook per subtopic per language, reused across takes. IDs cached beside the briefs.

    The cache is a convenience, never the authority: an id that no longer resolves (deleted in
    the browser) falls through to a title match, then to creating one.
    """
    if not fresh and title in cache:
        nb = await client.notebooks.get_or_none(cache[title])
        if nb:
            return nb.id, False
        print(f"  cached notebook {cache[title][:8]}… is gone; re-resolving", file=sys.stderr)
    if not fresh:
        for nb in await client.notebooks.list():
            if nb.title == title:
                cache[title] = nb.id
                save_cache(lang_dir, cache)
                return nb.id, False
    nb = await client.notebooks.create(title)
    cache[title] = nb.id
    save_cache(lang_dir, cache)
    return nb.id, True


# --- the take -----------------------------------------------------------------

async def reset_sources(client, notebook_id, brief_path):
    """Sole-source doctrine, enforced: everything goes, then the current brief goes in."""
    for src in await client.sources.list(notebook_id):
        await client.sources.delete(notebook_id, src.id)
    src = await client.sources.add_file(notebook_id, brief_path, wait=True,
                                        wait_timeout=SOURCE_TIMEOUT_S)
    return src.id


async def clear_audio(client, notebook_id):
    """One audio overview per notebook is the platform rule; make room before generating."""
    for art in await client.artifacts.list_audio(notebook_id):
        await client.artifacts.delete(notebook_id, art.id)


async def make_take(client, lang_dir, lang, sub, brief, prompt, args, cache):
    stem = BRIEF_RE.match(brief[0].name).group(1)
    title = f"{stem.replace('_', ' ')} {lang}"          # "KP1 M1 1.1 en"
    instructions = customization_text(prompt[0])
    target = target_seconds(brief[0], args.target)
    out = Path(args.out) if args.out else next_audio_path(lang_dir, stem)

    print(f"\n{sub}  brief v0.{brief[1]}  prompt v0.{prompt[1]}  target "
          f"{target // 60}:{target % 60:02d}")
    # In batch mode "the rest of the subtopics" means the ones with no take yet. A single
    # subtopic always generates, because that is what a re-roll is.
    existing = sorted((Path(lang_dir) / "audio").glob(f"{stem}_Audio_v0.*.m4a"))
    if args.all and existing and not args.force:
        print(f"  SKIP — already has {len(existing)} take(s), newest {existing[-1].name} "
              f"(--force to re-roll it too)")
        return None
    if out.exists() and not args.force:
        print(f"  SKIP — {out.name} exists (--force to overwrite)")
        return None
    if args.dry_run:
        print(f"  notebook '{title}'\n  -> would write {out}\n"
              f"\n--- customization prompt ({len(instructions)} chars) ---\n{instructions}")
        return None

    started = time.time()
    notebook_id, created = await find_or_create_notebook(client, lang_dir, title, cache, args.fresh)
    print(f"  notebook '{title}' {notebook_id[:8]}…{' (created)' if created else ''}")

    source_id = await reset_sources(client, notebook_id, brief[0])
    print(f"  source reset — {brief[0].name} is the only source")

    await clear_audio(client, notebook_id)
    status = await client.artifacts.generate_audio(
        notebook_id,
        source_ids=[source_id],
        language=lang,                       # pinned from the path, never auto-detected
        instructions=instructions,
        audio_format=AudioFormat.DEEP_DIVE,
        audio_length=AudioLength.SHORT,      # Default overshoots a 4:00 spec by 60-90 s
    )
    print(f"  generating (task {status.task_id[:8]}…) …", end="", flush=True)
    await client.artifacts.wait_for_completion(notebook_id, status.task_id,
                                               timeout=GENERATION_TIMEOUT_S)
    print(f" done in {time.time() - started:.0f}s")

    audio = await client.artifacts.list_audio(notebook_id)
    if not audio:
        # Seen when the session expires mid-generation: the polls stop finding the artifact and
        # the library logs "disappeared from list". Name that possibility here — the bare
        # message sends you looking at NotebookLM when the problem is local auth.
        raise RuntimeError(
            "generation reported complete but the notebook has no audio artifact. If the log "
            "above says the artifact 'disappeared from list', the session most likely expired "
            "mid-run — check `notebooklm doctor` before assuming a server-side failure.")
    art = max(audio, key=lambda a: a.created_at or datetime.min.replace(tzinfo=timezone.utc))

    # Atomic: a kill mid-download must leave no .m4a, or the next run's version number lies.
    fd, tmp = tempfile.mkstemp(dir=out.parent, prefix=out.name, suffix=".tmp")
    os.close(fd)
    try:
        await client.artifacts.download_audio(notebook_id, tmp, art.id)
        os.replace(tmp, out)
    except BaseException:
        Path(tmp).unlink(missing_ok=True)
        raise

    dur = ffprobe_duration(out)
    wall = time.time() - started
    print(f"  -> {out.name}  {int(dur) // 60}:{dur % 60:04.1f}  ({wall:.0f}s wall)")
    if abs(dur - target) > target * DURATION_TOLERANCE:
        print(f"  WARNING: {int(dur)}s vs target {target}s — outside ±{DURATION_TOLERANCE:.0%}. "
              f"That is a brief problem to fix on the next re-roll, not a runner problem.",
              file=sys.stderr)
    log_take(lang_dir, [datetime.now(timezone.utc).isoformat(timespec="seconds"), sub,
                        brief[0].name, prompt[0].name, notebook_id, out.name,
                        f"{dur:.1f}", f"{wall:.0f}"])
    return out


LOG_FIELDS = ["ts", "subtopic", "brief", "prompt", "notebook_id", "audio", "duration_s", "wall_s"]


def log_take(lang_dir, row):
    log = Path(lang_dir) / "notebooklm" / "takes.log"
    new = not log.exists()
    with log.open("a", encoding="utf-8") as fh:
        if new:
            fh.write("\t".join(LOG_FIELDS) + "\n")
        fh.write("\t".join(str(v) for v in row) + "\n")


def today_count(lang_dir):
    """Crude client-side view of the account's daily usage. The real limit lives server-side."""
    log = Path(lang_dir) / "notebooklm" / "takes.log"
    if not log.exists():
        return 0
    today = datetime.now(timezone.utc).date().isoformat()
    return sum(1 for line in log.read_text(encoding="utf-8").splitlines()[1:]
               if line.startswith(today))


# --- driver -------------------------------------------------------------------

async def run(args):
    lang_dir = Path(args.lang_dir).resolve()
    lang = language_for(lang_dir)
    nlm = lang_dir / "notebooklm"
    if not nlm.is_dir():
        sys.exit(f"no notebooklm/ folder under {lang_dir}")

    briefs, prompts = newest(nlm, BRIEF_RE), newest(nlm, PROMPT_RE)
    if args.all:
        subs = sorted(briefs, key=lambda s: [int(x) for x in s.split(".")])
        if args.from_:
            subs = [s for s in subs if s >= args.from_]
    else:
        subs = [args.subtopic]

    missing = [s for s in subs if s not in briefs or s not in prompts]
    if missing:
        sys.exit(f"no brief and/or prompt in {nlm} for: {', '.join(missing)}")
    mismatched = [s for s in subs if briefs[s][1] != prompts[s][1]]
    if mismatched and not args.allow_version_mismatch:
        sys.exit(f"brief and prompt versions disagree for {', '.join(mismatched)} — "
                 f"they are written as a pair. --allow-version-mismatch to override.")

    cache = load_cache(lang_dir)
    print(f"{len(subs)} subtopic(s) · {lang} · {today_count(lang_dir)} take(s) already today")

    written, failed = [], []
    async with contextlib.AsyncExitStack() as stack:
        client = None
        if not args.dry_run:                 # resolving inputs must not require a login
            try:
                client = await stack.enter_async_context(NotebookLMClient.from_storage())
            except Exception as e:
                # is_auth_failure, not `except AuthError` — an expired cookie arrives here as a
                # private _LoginRedirectError deriving from ValueError, and the raw traceback
                # buries the one line that matters.
                if not (is_auth_failure(e) or isinstance(e, FileNotFoundError)):
                    raise
                sys.exit(f"not authenticated: {e}\n\n"
                         f"    ~/.venvs/nlm/bin/notebooklm login --browser-cookies chrome\n\n"
                         f"(allow the Keychain prompt). Cookie sessions here have expired within\n"
                         f"the hour; for a batch use master-token auth instead — see\n"
                         f"references/auth-setup.md.")
        for i, sub in enumerate(subs):
            try:
                out = await make_take(client, lang_dir, lang, sub, briefs[sub], prompts[sub],
                                      args, cache)
                if out:
                    written.append((sub, out))
            except RateLimitError as e:
                # Sequential, human-scale volume should not hit this. If it does, stopping is
                # the honest response — hammering a personal account is the thing not to do.
                resume = subs[i] if not args.all else subs[i]
                print(f"\nthrottled or out of quota: {e}\n"
                      f"Resume later with:  --all --from {resume}", file=sys.stderr)
                return 2
            except Exception as e:
                # Auth death is not per-subtopic bad luck: every remaining subtopic will fail
                # the same way, so stop rather than burn the rest of the batch on it.
                if is_auth_failure(e):
                    print(f"\n{sub}: the Google session expired mid-run.\n"
                          f"    ~/.venvs/nlm/bin/notebooklm login --browser-cookies chrome\n"
                          f"then resume with:  --all --from {sub}\n"
                          f"For unattended batches use master-token auth instead — see "
                          f"references/auth-setup.md.", file=sys.stderr)
                    return 2
                print(f"  FAILED {sub}: {type(e).__name__}: {e}", file=sys.stderr)
                failed.append(sub)
            if i < len(subs) - 1 and not args.dry_run:
                time.sleep(BATCH_PAUSE_S)

    if written:
        print("\nNext:")
        for _, out in written:
            print(f"  ~/.venvs/kp/bin/python …/kp-scribe-transcribe/scripts/transcribe.py {out}")
        print(f"  python3 …/kp-audio-brief/scripts/srt_drift_check.py <that>.srt --target <spec>")
        print("  then author the cue file (kp-slidecast Step 1) at each take's version")
    if len(subs) > 1:
        print(f"\n{len(written)}/{len(subs)} written"
              + (f"; failed: {', '.join(failed)}" if failed else ""))
    return 1 if failed else 0


async def list_notebooks(args):
    async with NotebookLMClient.from_storage() as client:
        for nb in await client.notebooks.list():
            print(f"  {nb.id[:12]}…  {nb.sources_count:2d} src  {nb.title}")
    cache = load_cache(Path(args.lang_dir).resolve()) if args.lang_dir else {}
    if cache:
        print("\nlocal cache:")
        for title, nid in sorted(cache.items()):
            print(f"  {nid[:12]}…  {title}")
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("lang_dir", help="a module's language folder, e.g. .../module_1/en")
    ap.add_argument("subtopic", nargs="?", help="e.g. 1.1")
    ap.add_argument("--all", action="store_true", help="every subtopic that has a brief")
    ap.add_argument("--from", dest="from_", metavar="SUB", help="resume a batch at this subtopic")
    ap.add_argument("--force", action="store_true", help="overwrite the resolved output")
    ap.add_argument("--fresh", action="store_true", help="new notebook instead of reusing")
    ap.add_argument("--out", help="write the .m4a here instead of the next free version")
    ap.add_argument("--target", type=int, help="target seconds (default: read from the brief)")
    ap.add_argument("--dry-run", action="store_true", help="resolve inputs, print the prompt, stop")
    ap.add_argument("--list", action="store_true", help="notebooks on the account, and the cache")
    ap.add_argument("--allow-version-mismatch", action="store_true",
                    help="run with a brief and prompt at different versions")
    args = ap.parse_args()

    if args.list:
        return asyncio.run(list_notebooks(args))
    if not (args.subtopic or args.all):
        ap.error("give a subtopic (e.g. 1.1), or --all")
    if args.subtopic and args.all:
        ap.error("--all takes no subtopic")
    return asyncio.run(run(args))


if __name__ == "__main__":
    sys.exit(main())
