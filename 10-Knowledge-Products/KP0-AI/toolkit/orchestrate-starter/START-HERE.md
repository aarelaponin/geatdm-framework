# Start here

This folder is everything you need to run the Orchestrator pattern by hand, in any AI assistant. Every piece of work goes the same way. You write an instruction. One chat does the work and writes a report. A second chat, which never saw the first, checks the report and gives a verdict. Then you decide, and you write each step in the log.

## 1. Set up your computer

Only step 1 is needed. Each step after it takes some copying and pasting out of the cycle, and none of them changes the method.

1. **The baseline: any assistant, in the browser.** Unzip this folder somewhere you can find it again. Turn memory off, or keep it out of this work: a review chat that remembers the work chat is no longer independent. The setting is in your assistant's settings; Claude, ChatGPT, Gemini and Copilot each have one under their own name. An incognito chat, which is not saved and not remembered, also serves for the review. Then paste the role prompt and the instruction into each chat, and save the reply into this folder yourself.
2. **The Claude desktop app** (Windows or Mac). Chats sit beside your files rather than in a browser tab. A project holds the forms and your page of faults as its standing instructions, so you don't paste them each time. Make one project for the work chats, and keep the review chat outside it so the review does not see that project.
3. **File access: Desktop Commander,** or the app's own file extension, added to the desktop app. The work chat reads the material from this folder and writes its report into `2-reports/` itself. The review chat reads the instruction and the report from the folder, not from a paste, so there is one copy of each document. Allow this folder only, and never a folder that holds anything confidential. These tools can also run commands. This method never needs one, so turn down any command the chat proposes that you did not ask for.
4. **Plugins and skills,** if your assistant has them. A plugin that keeps the log and starts the chats for you does the bookkeeping, but the method is the same without it.
5. **Keep this folder somewhere it is copied,** such as a synced OneDrive or SharePoint folder. That way a lost laptop doesn't take the record with it.

**Practical tips**
- Check your organisation's rules before installing anything on a work computer. Some organisations do not allow new software or extensions, and in that case the baseline is the route.
- Name each chat by the piece of work, its role and its version, for example *duplicates · review · v2*. Then a chat you return to can be told apart from one you meant to start fresh.
- Start the review in a new chat each time, including for version 2.
- Keep `log.xlsx` open beside the chats, and write its row before you move on.

## 2. The cycle, in six steps

| # | Step | Who | What is saved |
|---|---|---|---|
| 1 | **Does this need the cycle?** Use it when one of these holds: more than three documents to read; a document that will last; a figure someone will quote; a change to a file; evidence the chat cannot see. If none holds, just ask | You | A row in the log, only if one holds |
| 2 | **Write the instruction** from `forms/instruction.md`. A chat may help you draft it, but that chat does no work afterwards | You | `1-instructions/` · a row in the log |
| 3 | **Do the work** in a new chat. Paste `0-chat-prompts/work-chat.md`, the instruction and the material. The chat ends with a report from `forms/report.md`, and no verdict | A work chat | `2-reports/` · a row in the log |
| 4 | **Review** in another new chat. Paste `0-chat-prompts/review-chat.md`, the instruction, the report and the material. It works out one figure again by another route, and ends *accepted* or *not accepted* | A review chat | `3-reviews/` · a row in the log |
| 5 | **Decide.** Accept or not. Four decisions are always yours: what is delivered, what is cut, what is spent and what is said outside | You | A row in the log: the verdict and your ruling |
| 6 | **If not accepted:** add the review's gaps to the same instruction as version 2. Then start a new work chat and a new review chat. After two failures, write the task again from the start | You | Version 2 of the instruction · a row in the log |

**One rule with no exception:** a chat never carries out work it helped to commission, and never judges work it helped to commission or carry out.

## 3. Every day

1. Open `log.xlsx`. Answer "where does my work stand?" from the log alone, not from memory.
2. Pick up the open row with the earliest date. One piece of work writes at a time.
3. Before you write an instruction, read the page in `kinds/` for that kind of work: analysis, drafting or checking. Copy its faults into section 6 of the instruction.
4. When a review finds a fault the page does not have yet, add it to the page. Every later instruction then carries it.
5. When you stop for the day, or hand the work to someone else, write `forms/handover-note.md`. The next chat's first task is `0-chat-prompts/first-task-chat.md`: check the note's claims and then stop.

## What is in this folder

| | |
|---|---|
| `0-chat-prompts/` | The three role prompts, ready to paste |
| `forms/` | The instruction, the report, the review and the handover note, one page each |
| `kinds/` | The faults of analysis, drafting and checking, with what each review runs |
| `1-instructions/` `2-reports/` `3-reviews/` | Empty. Each holds one kind of document |
| `log.xlsx` | One row per event |
| `example/` | One finished cycle: counting the children who appear on more than one list |

Name each file by date, piece of work and version, for example `2026-10-30 duplicates v1.md`. A report and its review carry the same name as their instruction.
