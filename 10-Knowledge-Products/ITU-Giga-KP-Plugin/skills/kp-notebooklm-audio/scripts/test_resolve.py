#!/usr/bin/env python3
"""The check on nlm_take.py's input resolution. Prints "resolve OK".

Everything here runs offline. These are the decisions made BEFORE a generation is spent, and
each one is a way to steer a take with the wrong text and not notice.
"""

import shutil
import sys
import tempfile
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from nlm_take import (BRIEF_RE, PROMPT_RE, customization_text, newest,  # noqa: E402
                      next_audio_path, target_seconds)

tmp = Path(tempfile.mkdtemp())
nlm = tmp / "notebooklm"; nlm.mkdir()
(tmp / "audio").mkdir()

# --- newest(): the highest version of each subtopic wins, others are ignored
for name in ["KP1_M1_1.1_AudioBrief_v0.1.md", "KP1_M1_1.1_AudioBrief_v0.3.md",
             "KP1_M1_1.1_AudioBrief_v0.2.md", "KP1_M1_1.2_AudioBrief_v0.1.md",
             "KP1_M1_1.1_NotebookLM_Prompt_v0.2.md", "notes.md"]:
    (nlm / name).write_text("x", encoding="utf-8")
briefs = newest(nlm, BRIEF_RE)
assert set(briefs) == {"1.1", "1.2"}, briefs
assert briefs["1.1"][1] == 3, briefs["1.1"]
assert briefs["1.2"][1] == 1
assert newest(nlm, PROMPT_RE)["1.1"][1] == 2
assert BRIEF_RE.match("KP1_M1_1.1_AudioBrief_v0.3.md").group(1) == "KP1_M1_1.1"

# --- customization_text(): the Step 3 block, never the Step 4 fallback
PROMPT = """# NotebookLM setup

## Step 1 — Fix the notebook
Add the brief as the first source.

## Step 2 — Settings
- Format: **Deep Dive**

## Step 3 — Customization prompt (paste this)

```
THE REAL PROMPT.
Second line.
```

## Step 4 — Fallback if the box truncates

```
THE FALLBACK, which must not be sent.
```

## Step 5 — Check before you accept
- [ ] Runtime 3:50-4:10
"""
p = nlm / "prompt.md"; p.write_text(PROMPT, encoding="utf-8")
got = customization_text(p)
assert got == "THE REAL PROMPT.\nSecond line.", repr(got)
assert "FALLBACK" not in got
assert "Step 5" not in got and "[ ]" not in got   # the checklist is not an instruction

# A file that lost the Step 3 heading must fail loudly, not send the whole runbook.
p.write_text("# Setup\n\n```\nsomething\n```\n", encoding="utf-8")
try:
    customization_text(p); raise AssertionError("should have exited")
except SystemExit as e:
    assert "Customization prompt" in str(e), e

# An unterminated fence is a corrupt file, not an empty prompt.
p.write_text("## Step 3 — Customization prompt\n\n```\nno end fence\n", encoding="utf-8")
try:
    customization_text(p); raise AssertionError("should have exited")
except SystemExit as e:
    assert "unterminated" in str(e), e

# --- target_seconds(): read from the brief's §0, else the default, else the override
b = nlm / "b.md"
b.write_text("| Total runtime | **4 minutes 0 seconds (±10s). Hard ceiling 4:15.** |\n",
             encoding="utf-8")
assert target_seconds(b, None) == 240
b.write_text("| Total runtime | **3 minutes 20 seconds** |\n", encoding="utf-8")
assert target_seconds(b, None) == 200
b.write_text("no runtime line here\n", encoding="utf-8")
assert target_seconds(b, None) == 240              # documented default
assert target_seconds(b, 185) == 185               # --target always wins

# --- next_audio_path(): continues the sequence, never reuses, ignores other subtopics
assert next_audio_path(tmp, "KP1_M1_1.1").name == "KP1_M1_1.1_Audio_v0.1.m4a"
for n in (1, 2, 5):
    (tmp / "audio" / f"KP1_M1_1.1_Audio_v0.{n}.m4a").write_text("x")
(tmp / "audio" / "KP1_M1_1.2_Audio_v0.9.m4a").write_text("x")
assert next_audio_path(tmp, "KP1_M1_1.1").name == "KP1_M1_1.1_Audio_v0.6.m4a"
assert next_audio_path(tmp, "KP1_M1_1.2").name == "KP1_M1_1.2_Audio_v0.10.m4a"

shutil.rmtree(tmp)
print("resolve OK")
