# With the plugin: your first project

The cycle in this folder runs by hand, in any assistant. The orchestrator plugin does its bookkeeping for you: it sets up the project's folders and its first documents, starts each work session and its review session, writes the log, and answers "where does it stand?" from it. (A session is what the app calls a chat: the work session is the work chat of Modules 3 and 4, and the review session the review chat.) The method does not change: you still write what the work serves, read every review and rule on it.

{% hint style="warning" %}
**The plugin is not released yet.** The learner edition is in preparation, and its name and version will change before and after it is released. What to install, and how, will be in the plugin's own instructions, published with it. Until then, read this page and Module 5 alongside the record of the full-size registry prototype we built in October 2026 (its instructions, reports, reviews and log), which each page's "Try it first" quotes, and run the cycle by hand. The pictures in Module 5 are from the author's own pre-release setup, so the plugin's name, its skills and some screens will look different on yours.
{% endhint %}

This page is what you do once it is installed.

## Before you start

Unlike the rest of the course, the plugin needs a few things installed on your computer:

- **The Claude desktop app, with Desktop Commander added.** The plugin runs every command through Desktop Commander, because the app's own shell cannot reach your folders. Desktop Commander has to be installed; on a Mac it also asks for permission to run Node, the program it runs on.
- **Python.** Most Macs already have it. The plugin checks before it asks you anything, and says what to install if it is missing.
- **git, if you want it.** git keeps the project's history. It is optional: without it, tell the setup session not to commit. The orchestrator then keeps the log's rows by hand, as page 5.1 shows.
- **One cycle done by hand, from Module 3.** The plugin is easier to trust when you know what it is doing for you.

**The plugin runs commands, and its scheduled tasks run them without asking you each time.** That is the difference from working by hand, where you turn down every command you did not ask for. So, as always: before you allow anything, ask Claude what you are agreeing to, in plain words, and allow it only for the demo's folder. Check your organisation's rules before installing anything on a work computer.

## 1. Have your answers ready

Setting up a project asks you a handful of questions, each with a recommended answer you can click. Decide these first:

| Question | What to have ready |
|---|---|
| The name and the folder | A short name, and where the project's folder should go |
| What it is for | Two or three sentences: what the project does, and for whom |
| What it delivers | Each thing it owes, with its date and the document that asks for it, or *nothing to anyone outside it* |
| What governs it | The documents it must follow, highest first, or *only the method* |
| Who receives its results | A post, not a name |
| The constraints | What must never happen, with the document that says so |
| What it will produce | The kinds of thing: papers, drafts, checks, a prototype |
| Where the history is kept | On this computer, or on this computer and backed up to a private GitHub repository |
| The code | Two to four capital letters that start the name of every session of the project, such as *REG* |

## 2. Set up the project

Start a new session and ask it to start a new project. It checks your computer, asks the questions, shows you the map of folders to rule on, and then makes everything in one go:

- the three places for instructions, reports and reviews;
- every folder on the map, each with a note saying what it holds;
- the project's constants: one document of what does not change, with no dates in it except when each deliverable is due;
- the record of what is running: a short file listing only the work under way now (the log is separate and holds every event);
- the history, its first save, and the backup if you chose one.

Read the map before you accept it. It is your ruling, and the folders follow it.

## 3. Put in your pages of faults

Copy the pages of faults you use from this folder's `kinds/` into the project, and add the lines your own reviews have taught you. Every instruction the plugin writes will carry them.

## 4. Give one session the orchestrator's role

Start a session named with your code, the word *orchestrator* and a few words, for example *REG · orchestrator · the visit register*. Before you send anything, set the model to **Opus** and the effort to **High**: the orchestrator judges every result and writes every instruction, so it gets the most capable setting. In its first message, ask it to take up the orchestrator's role for the project, and give it the full path of the constants. It reads the rules and the constants, and writes in the log that it holds the role. From then on it writes instructions and keeps the log, and it does no work itself.

## 5. Run the first round

Ask the orchestrator for the first piece of work. A good first one is small and checkable: a register of what the project must do, or one count. Then:

1. Read the instruction it writes before it is issued. Its tests and its ways to fail are the part you judge.
2. The work session starts, on a timer or from a start message the orchestrator gives you to paste. That session ends with a report and starts its own review in a separate session.
3. Read the review, then tell the orchestrator your ruling. It writes the ruling in the log.

## 6. Keep going, one piece of work at a time

- Whenever you do not understand something the orchestrator or a work session did, ask it to explain, in plain words, before you go on. A ruling on work you cannot explain is not a ruling.
- Start the next piece of work only when the last one's ruling is in the log. Never press *Run now* on a round that is also set to start on a timer.
- Ask "where does it stand?" at the start of each day, and read the answer against what you remember.
- After a few days, or when the orchestrator starts quoting figures instead of working them out again, ask it to hand over: it writes the handover note and the fresh session's first task.
- End each session by asking whether everything is saved in the project's history.

Module 5 builds a small prototype this way, from the first round to a note for a senior reader.
