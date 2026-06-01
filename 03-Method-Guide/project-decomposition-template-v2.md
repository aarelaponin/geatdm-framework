# Project Decomposition Template V2

> **Version:** 2.0  
> **Purpose:** Break complex analytical/data-processing projects into atomic steps executable by Claude Code, Claude Desktop with Filesystem MCP, or Claude.ai Web.  
> **Replaces:** Project Decomposition Template V1  

---

## 1. Overview

### What This Template Is

A structured methodology for decomposing complex projects into small, correctly-sized steps that Claude can execute reliably across multiple prompt invocations. Each step is a separate prompt — Claude has no memory between prompts, so all context must be explicitly passed via files.

### When to Use It

Use this template when a project requires:

- More than 20 tool calls to complete
- Reading or processing more than 10 files
- Any iterative "for each X, do Y" pattern
- Multi-session execution with handoffs between prompts
- Coordination between Claude and a human operator

### Key Principles

1. **Three step types, not one.** Work is classified as LLM, Script, or Human — each with different constraints and prompt templates.
2. **Context budgets are mandatory.** Every step declares what it will read, what it will NOT read, and the estimated total. Steps exceeding 120 KB must be split or converted to Script Steps.
3. **Prerequisite verification before work.** Every step checks its inputs exist before starting. Missing inputs cause an immediate, documented stop — not a mid-execution failure.
4. **Script-first for mechanical work.** If it involves a loop, it's a script. No exceptions.
5. **Explicit handoffs.** When a script must be run by the user, the handoff is a formal block with exact commands, expected outputs, and verification.
6. **Right format for the job.** Code is `.py`/`.sh`, data is `.json`/`.yaml`, documentation is `.md`. No code-in-markdown.

---

## 2. Core Concepts

### 2.1 Three Step Types

| Type | Symbol | Executor | Use When |
|------|--------|----------|----------|
| **LLM Step** | 🧠 | Claude directly | Reading ≤8 files, reasoning, writing deliverables, analysis |
| **Script Step** | ⚙️ | Claude creates → User runs | >10 repetitive operations, data >50 KB, any loop pattern |
| **Human Step** | 👤 | User manually | Running commands, tool invocations, approvals, environment setup |

**Script-First Rule:** If a step involves iterating >10 files, processing >50 KB data, or any "for each X do Y" pattern, it MUST be a Script Step. No batching workaround (splitting into batches of the same N-tool-calls approach) is acceptable.

**No-Mix Rule:** A single prompt must NOT combine LLM reasoning with script execution on user files. Split into separate prompts with a handoff.

### 2.2 Execution Environments

Before decomposition, identify the environment. This determines what's possible in each step.

| Environment | Can Read/Write Files | Can Execute Scripts | Script Delivery Pattern |
|---|---|---|---|
| **Claude Code (CLI)** | ✅ Direct filesystem | ✅ Local bash/python | Claude creates and runs directly |
| **Claude Desktop + Filesystem MCP** | ✅ Via MCP tools | ❌ Only on Claude's container | Claude creates on user FS → User runs → Claude reads output |
| **Claude.ai Web (no MCP)** | ❌ Uploads only | ❌ Only on Claude's container | Claude creates in container → User downloads and runs |

**Critical for Filesystem MCP:** `Filesystem:*` tools operate on the **user's machine**. `bash_tool` runs on **Claude's container** (a separate Linux VM). These are **two different computers** — paths don't cross. Scripts that process user files must be created by Claude on the user's filesystem, then run by the user manually.

### 2.3 Context Budgets

Every LLM Step must include a context budget table. This is estimated during decomposition and verified before execution.

**Budget Template:**

```markdown
### Context Budget

| Category | Files | Est. Size |
|----------|-------|-----------|
| Prerequisites (read) | workflow_state.md, task_registry.md | ~4 KB |
| Task inputs (read) | file_inventory.md | ~15 KB |
| DO NOT READ | raw_data.json (too large) | saves ~200 KB |
| Working data (in-flight) | — | ~10 KB |
| Deliverables (write) | analysis.md, summary.md | ~8 KB |
| **TOTAL ESTIMATE** | | **~37 KB** |
| **Safe threshold** | | **120 KB** |
```

**Hard Limits:**

| Constraint | Limit | If Exceeded |
|---|---|---|
| Total context per LLM Step | 120 KB | Split into sub-steps or convert to Script Step |
| Files read per LLM Step | 8 | Split or use browse-then-read |
| Tool calls per LLM Step | 20 | Split into sub-steps |
| Files written per LLM Step | 10 | Split into sub-steps |
| Script summary output | 20 KB | Script must aggregate/summarize more |

### 2.4 Prerequisite Verification Gates

Every step begins with a verification block. This is the FIRST action — before any real work.

```markdown
### Step 0: Prerequisite Verification

CHECK that these files exist and are non-empty:
- [ ] `[path]/workflow_state.md` — tracker state
- [ ] `[path]/01_discovery/file_inventory.md` — from Step 01c

IF any file is missing or empty:
  ❌ STOP IMMEDIATELY
  WRITE: `[step_folder]/BLOCKED.md` with:
    - Which files are missing
    - Which step should have produced them
    - Suggested remediation
  UPDATE: workflow_state.md → status: BLOCKED
  DO NOT attempt partial execution
```

### 2.5 Handoff Points

When Script Steps require user execution, formal handoff and resume blocks bridge the gap.

**HANDOFF Block** (end of script-creation step):

```markdown
### ⏸️ HANDOFF — User Action Required

**Run this command:**
```bash
cd /path/to/project && bash ./scripts/process_files.sh
```

**Expected output files:**
- `[path]/output/summary.md` (~10-15 KB)
- `[path]/output/results.json` (~50-200 KB)

**Verification command:**
```bash
wc -l [path]/output/summary.md && head -20 [path]/output/summary.md
```

**Expected result:** summary.md should have 50-200 lines, starting with "# Processing Summary"

**Next step:** Step 03c (🧠 Analysis) — reads summary.md
```

**RESUME Block** (start of analysis step after handoff):

```markdown
### ▶️ RESUME — After User Script Execution

**Expected input from previous handoff:**
- `[path]/output/summary.md` — script-generated summary

**Verify before proceeding:**
1. File exists and is non-empty
2. First line contains expected header
3. File size is within expected range (10-20 KB)
```

### 2.6 File Format Rules

| Content Type | Format | Rationale |
|---|---|---|
| Documentation, READMEs, reports | `.md` | Human-readable, LLM-friendly |
| Executable code | `.py`, `.sh` | Directly runnable, no extraction needed |
| Structured data (machine-readable) | `.json`, `.yaml` | Parseable by scripts |
| Intermediate summaries (for LLM consumption) | `.md` | Designed for context window efficiency |
| Configuration | `.yaml`, `.env` | Standard formats |
| Large datasets | `.csv`, `.json` | Never loaded directly by LLM — processed by script |

**Anti-Pattern:** Never embed executable code as fenced blocks inside `.md` files. If the next step needs to run the code, it must be a standalone file.

---

## 3. Folder Structure & Conventions

### 3.1 Directory Layout

```
[results_path]/
├── _tracker/
│   ├── workflow_state.md          # Current state, progress
│   ├── step_registry.md           # All steps with status, context, type
│   └── dependency_graph.md        # Step dependencies
├── _context/
│   ├── project_brief.md           # Scope, goals, constraints
│   └── step_prompts.md            # Generated prompts for all steps
├── _scripts/                      # All generated scripts (central location)
│   ├── 01_discover_files.sh
│   ├── 03_parse_sql.py
│   └── ...
├── 01_[step_group_name]/
│   ├── README.md                  # What this step group does
│   ├── [deliverables].*           # Actual outputs (correct format per type)
│   └── BLOCKED.md                 # Only if step was blocked (auto-created)
├── 02_[step_group_name]/
└── ...
```

### 3.2 Naming Conventions

**Folders:**

```
[NN]_[short_descriptive_name]/     # e.g., 01_file_discovery/
```

**Files:**

```
[step_id]_[type]_[description].[ext]
```

Where:
- `step_id`: `01a`, `01b`, `02a`, etc.
- `type`: `code` | `data` | `doc` | `report` | `analysis` | `summary` | `script` | `config`
- `ext`: `.md` | `.py` | `.sh` | `.json` | `.yaml` | `.csv`

**Scripts** (in `_scripts/`):

```
[NN]_[verb]_[object].sh|.py        # e.g., 01_discover_files.sh, 03_parse_sql.py
```

### 3.3 Tracker Formats

#### workflow_state.md

```markdown
# Workflow State

| Field | Value |
|-------|-------|
| Project | [PROJECT_NAME] |
| Environment | [Claude Code / Claude Desktop + MCP / Claude.ai Web] |
| Results Path | [ABSOLUTE_PATH] |
| Current Step | [NNx] |
| Overall Progress | [X]% |
| Status | [initialized / in_progress / blocked / completed] |
| Last Updated | [YYYY-MM-DD HH:MM] |
| Blocked By | [step_id or "none"] |

## Active Issues
- [Any blockers, missing data, decisions needed]

## Completed Milestones
- [YYYY-MM-DD] Step 01 group complete — file inventory delivered
```

#### step_registry.md

```markdown
# Step Registry

| ID | Type | Name | Context Est. | Context Act. | Status | Outputs |
|----|------|------|-------------|-------------|--------|---------|
| 01a | ⚙️ | Create discovery script | 10 KB | — | pending | 01_discover_files.sh |
| 01b | 👤 | Run discovery script | 0 KB | — | pending | summary.md, inventory.json |
| 01c | 🧠 | Analyze discovery results | 40 KB | — | pending | file_inventory.md |
| 02a | 🧠 | Design parser | 35 KB | — | pending | parser_spec.md |
```

#### dependency_graph.md

```markdown
# Dependency Graph

| Step | Depends On | Key Input Files |
|------|-----------|-----------------|
| 01a | — | (project source files) |
| 01b | 01a | _scripts/01_discover_files.sh |
| 01c | 01b | 01_discovery/summary.md |
| 02a | 01c | 01_discovery/file_inventory.md |
```

---

## 4. Decomposition Process

This section describes how to break a project into correctly-typed, correctly-sized steps. Follow sections 4.1–4.6 in order.

### 4.1 Scope Assessment

Before generating any steps, answer these questions:

1. **What is the project goal?** (one sentence)
2. **What are the inputs?** (source files, directories, APIs, databases — with estimated counts and sizes)
3. **What are the deliverables?** (final outputs, their formats, who consumes them)
4. **What is the execution environment?** (Claude Code / Desktop + MCP / Web)
5. **What are the major phases?** (discovery → processing → analysis → reporting is typical)

### 4.2 Step Type Decision Tree

For each unit of work identified in the scope, classify it using this decision tree:

```
START: Describe the unit of work
  │
  ├─ Does it involve iterating >10 files?
  │   YES → ⚙️ SCRIPT STEP
  │
  ├─ Does it process >50 KB of data?
  │   YES → ⚙️ SCRIPT STEP
  │
  ├─ Does it follow a "for each X, do Y" pattern?
  │   YES → ⚙️ SCRIPT STEP
  │
  ├─ Does it require running a command on the user's filesystem?
  │   │
  │   ├─ Environment is Claude Code?
  │   │   YES → 🧠 LLM STEP (Claude can run directly)
  │   │
  │   └─ Environment is Desktop+MCP or Web?
  │       YES → 👤 HUMAN STEP
  │
  ├─ Does it require a human decision, approval, or review?
  │   YES → 👤 HUMAN STEP
  │
  ├─ Is the total context estimate >120 KB?
  │   YES → Split into sub-steps, or convert to ⚙️ SCRIPT STEP
  │
  ├─ Does it need >20 tool calls?
  │   YES → Split into sub-steps
  │
  └─ Otherwise → 🧠 LLM STEP
```

### 4.3 Sizing Heuristics

Use these empirically-measured estimates when computing context budgets:

| Activity | Tool Calls | Context (KB) |
|---|---|---|
| Read 1 prerequisite file | 1 | 1–30 |
| Browse 1 directory listing | 1 | 0.5–2 |
| Read 1 code file for analysis | 1 | 2–10 |
| Write 1 deliverable file | 1 | 1–5 |
| Create 1 script file | 1–2 | 3–5 |
| Update tracker (2 files) | 2 | 1 |
| Deep-dive: read original + result | 2 | 5–20 |
| Create README + docs | 2–3 | 2–4 |

**Per-Step Hard Limits:**

| Constraint | LLM Step 🧠 | Script Step ⚙️ | Human Step 👤 |
|---|---|---|---|
| Max tool calls | 20 | 15 (creating script only) | 0 (user acts) |
| Max context | 120 KB | 60 KB (minimal reading) | 0 (instructions only) |
| Max files read | 8 | 4 | 0 |
| Max files written | 10 | 3 (script + docs) | n/a |

### 4.4 The Hybrid Task Pattern (Standard)

Any data-processing work that involves >10 files or >50 KB data MUST use this three-phase pattern:

```
Step Na: Script Creation  (⚙️ → executed as 🧠 by Claude)
  ├── Context: ~10-30 KB
  ├── Read: minimal prerequisites (specs, small samples)
  ├── DO NOT READ: large data files, raw outputs
  ├── Create: script file (.py or .sh) on user filesystem
  ├── Create: script README with usage instructions
  └── HANDOFF → User runs script

Step Nb: Script Execution  (👤 Human)
  ├── Context: 0 (user acts independently)
  ├── User runs the script
  ├── Script produces: summary.md + detailed results
  └── User confirms output files exist

Step Nc: Analysis & Deliverables  (🧠 LLM)
  ├── Context: ~40-80 KB
  ├── RESUME: verify script output exists
  ├── Read: summary.md (small, script-generated)
  ├── DO NOT READ: raw results files (let script summarize)
  ├── Selective deep-dives: 4-5 specific files only
  └── Write: final deliverables, update trackers
```

### 4.5 Script Design Rules

Scripts created by Claude MUST follow these rules:

1. **Absolute paths** — user may run from any directory; accept base path as argument or use script's own location
2. **`set -e` for bash** — fail fast on any error; for Python, use explicit error handling
3. **`mkdir -p`** — always create output directories; never assume they exist
4. **Produce a markdown summary** — this is what the LLM reads in the next step; include counts, breakdowns, top-N lists
5. **Extract stats inline** — don't force the LLM to parse raw JSON/CSV; the script computes aggregates
6. **Handle macOS vs Linux** — differences in `stat` flags, `sed -i` syntax, `find` options; detect OS and branch, or use portable alternatives
7. **Keep summary under 20 KB** — if results are larger, summarize more aggressively; full data goes to separate files
8. **Report pass/fail at end** — print final status line: `✅ Processed X files: Y passed, Z failed, W skipped`
9. **Log to file** — write detailed logs to a `.log` file alongside the summary; don't clutter stdout
10. **Idempotent** — safe to re-run; overwrite previous outputs cleanly

**Script Header Template (Bash):**

```bash
#!/usr/bin/env bash
set -euo pipefail

# ============================================================
# Script: [NN]_[verb]_[object].sh
# Purpose: [one-line description]
# Created by: Claude (Step [NNa])
# Run by: User (Step [NNb])
# Output read by: Claude (Step [NNc])
# ============================================================

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${1:-$(dirname "$SCRIPT_DIR")}"
OUTPUT_DIR="$PROJECT_ROOT/[NN]_[step_name]/output"

mkdir -p "$OUTPUT_DIR"

# --- Configuration ---
SUMMARY_FILE="$OUTPUT_DIR/summary.md"
LOG_FILE="$OUTPUT_DIR/processing.log"

# --- Counters ---
TOTAL=0; PASSED=0; FAILED=0; SKIPPED=0

# --- Main Processing ---
# [processing logic here]

# --- Summary Generation ---
cat > "$SUMMARY_FILE" << SUMMARY
# Processing Summary

| Metric | Value |
|--------|-------|
| Total processed | $TOTAL |
| Passed | $PASSED |
| Failed | $FAILED |
| Skipped | $SKIPPED |
| Generated | $(date -u +"%Y-%m-%d %H:%M UTC") |

## Key Findings
[populated by script]

## Breakdown by Category
[populated by script]
SUMMARY

echo "✅ Complete: $PASSED/$TOTAL passed. Summary: $SUMMARY_FILE"
```

**Script Header Template (Python):**

```python
#!/usr/bin/env python3
"""
Script: [NN]_[verb]_[object].py
Purpose: [one-line description]
Created by: Claude (Step [NNa])
Run by: User (Step [NNb])
Output read by: Claude (Step [NNc])
"""

import os
import sys
import json
from pathlib import Path
from datetime import datetime, timezone

SCRIPT_DIR = Path(__file__).resolve().parent
PROJECT_ROOT = Path(sys.argv[1]) if len(sys.argv) > 1 else SCRIPT_DIR.parent
OUTPUT_DIR = PROJECT_ROOT / "[NN]_[step_name]" / "output"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

SUMMARY_FILE = OUTPUT_DIR / "summary.md"
LOG_FILE = OUTPUT_DIR / "processing.log"

# --- Counters ---
total = passed = failed = skipped = 0

# --- Main Processing ---
# [processing logic here]

# --- Summary Generation ---
summary = f"""# Processing Summary

| Metric | Value |
|--------|-------|
| Total processed | {total} |
| Passed | {passed} |
| Failed | {failed} |
| Skipped | {skipped} |
| Generated | {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')} |

## Key Findings
[populated by script]

## Breakdown by Category
[populated by script]
"""

SUMMARY_FILE.write_text(summary)
print(f"✅ Complete: {passed}/{total} passed. Summary: {SUMMARY_FILE}")
```

### 4.6 DO NOT READ Lists

Every LLM Step must include an explicit list of files that should NOT be loaded into context, with rationale and estimated size saved.

**Purpose:** Prevents accidental context blowouts from loading large files that aren't needed.

**Format:**

```markdown
### 🚫 DO NOT READ (Context Protection)

| File | Size | Reason |
|------|------|--------|
| output/results.json | ~200 KB | Raw data — read summary.md instead |
| _scripts/parser.py | ~15 KB | Black-box testing — run, don't read source |
| 01_discovery/raw_listing.txt | ~80 KB | Already summarized in file_inventory.md |
| **Total saved** | **~295 KB** | |
```

**Rules for building DO NOT READ lists:**

1. Any file >30 KB that has a summary equivalent → DO NOT READ the original
2. Any script that will be run as a black box → DO NOT READ the source (read only if debugging)
3. Any raw data file that a script already processed → DO NOT READ
4. Any file from a non-dependent step → DO NOT READ
5. Any file explicitly listed as input to a different step → DO NOT READ (unless also needed here)

---

## 5. Step Prompt Templates

### 5.1 🧠 LLM Step Prompt Template

```
================================================================================
## Step [NNx]: [Step Name]
================================================================================

### Step Type: 🧠 LLM Step
### Executor: Claude directly
### Environment: [Claude Code / Desktop+MCP / Web]

---

### Step 0: Prerequisite Verification

CHECK that these files exist and are non-empty:
- [ ] `[results_path]/_tracker/workflow_state.md`
- [ ] `[exact_path/required_file_1]` — [what it contains, which step produced it]
- [ ] `[exact_path/required_file_2]` — [what it contains, which step produced it]

IF any file is missing or empty:
  ❌ STOP — Write `[step_folder]/BLOCKED.md` listing missing files
  UPDATE workflow_state.md → status: BLOCKED, Blocked By: [step_id]
  DO NOT attempt partial execution

---

### Context Budget

| Category | Files | Est. Size |
|----------|-------|-----------|
| Prerequisites (read) | [file1], [file2] | ~[X] KB |
| Task inputs (read) | [file3] | ~[X] KB |
| Working data | — | ~[X] KB |
| Deliverables (write) | [file4], [file5] | ~[X] KB |
| **TOTAL** | | **~[X] KB** |
| **Safe threshold** | | **120 KB** |

### 🚫 DO NOT READ

| File | Size | Reason |
|------|------|--------|
| [file] | ~[X] KB | [reason — summary available, black-box, etc.] |

---

### Actions

1. Read tracker: `_tracker/workflow_state.md`
2. Read prerequisites: [list exact files with paths]
3. [Specific analytical/reasoning actions — be concrete]
4. Create deliverables: [list with paths and formats]
5. Update trackers: workflow_state.md, step_registry.md

### Deliverables

- [ ] `[path/deliverable_1.ext]` — [description]
- [ ] `[path/deliverable_2.ext]` — [description]
- [ ] Updated `_tracker/workflow_state.md`
- [ ] Updated `_tracker/step_registry.md`

### Completion Criteria

Step is COMPLETE when:
- All deliverables exist and are non-empty
- Trackers updated with actual context used and status = completed
================================================================================
```

### 5.2 ⚙️ Script Step Prompt Template

```
================================================================================
## Step [NNa]: [Create Script — Description]
================================================================================

### Step Type: ⚙️ Script Step (Creation Phase)
### Executor: Claude creates script → User runs in next step
### Environment: [Claude Code / Desktop+MCP / Web]

---

### Step 0: Prerequisite Verification

CHECK that these files exist and are non-empty:
- [ ] `[results_path]/_tracker/workflow_state.md`
- [ ] `[prerequisite files needed to DESIGN the script]`

IF any missing: ❌ STOP → Write BLOCKED.md

---

### Context Budget

| Category | Files | Est. Size |
|----------|-------|-----------|
| Prerequisites (read) | [spec files, samples] | ~[X] KB |
| Script creation (write) | [script.py/sh] | ~[X] KB |
| Documentation (write) | README, docs | ~[X] KB |
| **TOTAL** | | **~[X] KB** |
| **Safe threshold** | | **60 KB** |

### 🚫 DO NOT READ

| File | Size | Reason |
|------|------|--------|
| [large data files] | ~[X] KB | Script will process these — don't load |

---

### Actions

1. Read tracker state
2. Read minimal prerequisites: [list — only what's needed to design the script]
3. Optionally browse target directories to understand structure
4. Create script: `_scripts/[NN]_[name].[py|sh]`
   - Follow Script Design Rules (§4.5)
   - Script processes: [what input]
   - Script produces: [what output — summary.md + detail files]
5. Create script documentation in step folder
6. Update trackers

### Deliverables

- [ ] `_scripts/[NN]_[name].[py|sh]` — executable script
- [ ] `[step_folder]/script_design.md` — what the script does, expected I/O
- [ ] Updated trackers

---

### ⏸️ HANDOFF — User Action Required

**Run this command:**
```bash
cd [results_path] && [bash|python3] ./_scripts/[NN]_[name].[py|sh] [args]
```

**Expected output files:**
- `[step_folder]/output/summary.md` (~[X] KB)
- `[step_folder]/output/[detail_files]` (~[X] KB)

**Verification:**
```bash
ls -la [step_folder]/output/ && head -5 [step_folder]/output/summary.md
```

**Expected:** summary.md exists, starts with "# [Expected Header]", file size [X]-[Y] KB

**Next step:** Step [NNc] (🧠 Analysis)

================================================================================
```

### 5.3 👤 Human Step Prompt Template

```
================================================================================
## Step [NNb]: [Human Action — Description]
================================================================================

### Step Type: 👤 Human Step
### Executor: User manually
### No Claude prompt needed — instructions only

---

### What to Do

1. [Exact command or action]
2. [Expected result]
3. [Verification command]

### Pre-Conditions

- Step [NNa] must be completed (script created)
- [Any environment requirements: Python 3.x, specific tools, etc.]

### Post-Conditions

After completion, these files should exist:
- `[path/output_file_1]` — [description, expected size]
- `[path/output_file_2]` — [description, expected size]

### Verify Success

```bash
[verification command — file exists, expected size, expected content]
```

### If Something Goes Wrong

- **Script error:** Check `[step_folder]/output/processing.log` for details
- **Missing input:** Verify Step [NNa] deliverables exist
- **Environment issue:** Ensure [Python/Bash/tool] is available: `which python3`

### Next Step

Proceed to Step [NNc] — paste that step's prompt to Claude

================================================================================
```

---

## 6. Request Block

This is the standard instruction block to paste at the end of a project brief. It tells Claude to decompose the project using this template.

```
================================================================================
## REQUEST: Project Decomposition

Using the Project Decomposition Template V2 methodology:

### Environment
- **Platform:** [Claude Code / Claude Desktop + Filesystem MCP / Claude.ai Web]
- **Results path:** [ABSOLUTE_PATH]
- **Source files location:** [ABSOLUTE_PATH or description]

### Instructions

EXECUTE IMMEDIATELY WITHOUT QUESTIONS:

1. **READ** this template's core concepts (§2) and decomposition process (§4)

2. **ASSESS** the project scope:
   - Inventory major inputs (files, directories, with estimated counts/sizes)
   - Identify deliverables and their formats
   - Identify the major phases of work

3. **DECOMPOSE** into steps:
   - Apply the Step Type Decision Tree (§4.2) to each unit of work
   - Apply the Script-First Rule — flag all loops and large-data operations
   - Group related steps (Na/Nb/Nc for hybrid patterns)
   - Compute context budgets for every LLM step
   - Generate DO NOT READ lists for every LLM step
   - Insert HANDOFF/RESUME blocks at every Script→Human→LLM boundary

4. **CREATE** the folder structure (§3.1)

5. **INITIALIZE** tracker files:
   - workflow_state.md — with project name, environment, status
   - step_registry.md — all steps with IDs, types, context estimates
   - dependency_graph.md — step dependencies with key file paths

6. **GENERATE** step prompts:
   - One prompt per step, using the correct template (§5.1/5.2/5.3)
   - Save all prompts to `_context/step_prompts.md`
   - Each prompt is self-contained and copy-paste ready

7. **SAVE** everything to the results path

8. **REPORT** summary:
   - Total steps (by type: 🧠/⚙️/👤)
   - Estimated total context across all LLM steps
   - Critical path (longest dependency chain)
   - Hybrid patterns identified
   - Any risks or assumptions

### Permissions
- ⚠️ DIRECT EXECUTION — no confirmations needed
- Full read/write access to results path
- Create folders, files, scripts without asking
- If ambiguous, choose the most logical option and DOCUMENT the choice
================================================================================
```

---

## 7. Quick Reference Card

### Step Type Thresholds

| Condition | → Step Type |
|---|---|
| Iterates >10 files | ⚙️ Script |
| Processes >50 KB data | ⚙️ Script |
| "For each X, do Y" pattern | ⚙️ Script |
| Runs command on user filesystem (non-Claude-Code) | 👤 Human |
| Human decision/approval needed | 👤 Human |
| Everything else within limits | 🧠 LLM |

### Per-Step Hard Limits

| | 🧠 LLM | ⚙️ Script | 👤 Human |
|---|---|---|---|
| Tool calls | ≤20 | ≤15 | 0 |
| Context | ≤120 KB | ≤60 KB | 0 |
| Files read | ≤8 | ≤4 | 0 |
| Files written | ≤10 | ≤3 | n/a |

### Context Estimation Quick Table

| Action | Calls | KB |
|---|---|---|
| Read prerequisite | 1 | 1–30 |
| Browse directory | 1 | 0.5–2 |
| Read code file | 1 | 2–10 |
| Write deliverable | 1 | 1–5 |
| Create script | 1–2 | 3–5 |
| Update trackers | 2 | 1 |
| Deep-dive (2 files) | 2 | 5–20 |
| README + docs | 2–3 | 2–4 |

### Hybrid Pattern (Standard for Data Work)

```
Na ⚙️ Create script    (~10-30 KB context)  → HANDOFF
Nb 👤 User runs script  (0 context)          → files created
Nc 🧠 Analyze results   (~40-80 KB context)  → deliverables
```

### Script Checklist

- [ ] Absolute paths (or accepts base path as arg)
- [ ] `set -e` / explicit error handling
- [ ] `mkdir -p` for output dirs
- [ ] Produces `summary.md` (<20 KB)
- [ ] Computes stats inline (no raw-data LLM parsing)
- [ ] Handles macOS vs Linux differences
- [ ] Reports pass/fail counts at end
- [ ] Logs details to `.log` file
- [ ] Idempotent (safe to re-run)

### Key Anti-Patterns to Avoid

| Anti-Pattern | Fix |
|---|---|
| Code embedded in markdown | Use `.py`/`.sh` files directly |
| Batching (same N calls × M batches) | Convert to script |
| Loading >50 KB file into context | Script processes, LLM reads summary |
| No prereq check → mid-execution failure | Always verify inputs first |
| Reading script source to understand it | Black-box test first, read only if bugs |
| Speculative file reading | Browse-then-read: list dirs first, read selectively |
| Missing DO NOT READ list | Always declare, even if list is empty |

### File Formats

| Content | Format | NOT |
|---|---|---|
| Documentation | `.md` | — |
| Executable code | `.py`, `.sh` | `.md` with code blocks |
| Structured data | `.json`, `.yaml` | `.md` with tables |
| Large data | `.csv`, `.json` | Loaded into LLM context |
| Config | `.yaml`, `.env` | `.md` |

---

*Template V2 — End of Document*
