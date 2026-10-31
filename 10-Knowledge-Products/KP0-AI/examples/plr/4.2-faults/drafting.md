# The discipline for drafting — the page of the kind (PLR)

*One of the PLR project's four pages, read into every instruction of the kind and every review of it
by reference and never retyped (section 11 of the procedure, "The kinds of work of a project").*

**The kind.** Drafting is the work that writes a document the project builds on or hands over: the
constants (PLR-001), the register of requirements (PLR-002), the groundwork (PLR-004), the use case
model (PLR-005), goal G1 in full (PLR-007), the note to the Permanent Secretary (PLR-018). Its content
is settled by accepted work; what is open is only whether it is written right.

**The skills of the kind, whose programs are the tests.** The `sdd-kit` skills in
`10-Knowledge-Products/plugins/sdd-kit/` — `requirements-catalogue`, `shared-registers`,
`use-case-model`, `use-case-description` — each named by the path of its `SKILL.md` in the read-first
list of an instruction that writes its kind of document, with its programs among the tests of
success and never a program the round writes in their place. Where a skill's program cannot read
the file as it stands, the session records the program's refusal as it printed it and reports the
gap under "found, not fixed", with the skill as its owner.

**Where its faults come from.** `DISCIPLINE-application-design.md`, items 1, 2, 5, 7 and 8;
`DISCIPLINE-feature-design.md`, item 3; `DISCIPLINE-the-methods-own-work.md`, items 2 and 3.

**How this page grows.** As the page for analysis says.

---

## 1. What a session of this kind refuses

1. **To resolve an identifier, a field or a requirement with a program written for the round**,
   where the skill's programs resolve it.
2. **To supply a word, a record, a rule or a requirement the document needs and its upstream does
   not carry.** It is a gap, raised against the upstream document, never supplied here.
3. **To write a design whose rules, tables and worked example cannot all hold.** The groundwork's
   states, code lists and contracts agree with one another and with G1; where two rules meet, the
   document says which yields.
4. **To leave a contract between two parts open to two readings.** Each simulated body's contract in
   the groundwork names what crosses, the fields each reader may receive and on what basis, and the
   errors it raises; a rejected reading is struck where the chosen one is written.
5. **To close a review's gap by the instances it names.** A gap that names three members of a set
   states a rule; the next version applies it to every member, and reports the count still failing.
6. **To write a document for a business reader in the working register.** The note to the Permanent
   Secretary is written in the readers' register, `references/READERS-REGISTER.md` of the
   orchestrator, cited by path and never retyped.
7. **To run a skill's programs under the round's record without naming, at its start, the files
   those programs read**, or to leave the record's criterion at its log. The skill's folders its
   programs read (for the `sdd-kit`: `standards/`, `skills/`, `kit/tools/`, `kit/templates/spec/`,
   `.claude-plugin/`) are given to `round_record.py start` with `--read-from` before the first run,
   and the report says of the criterion on the record met or not met, with the count `check` printed
   (PLR-002 version 1, review gap G1). Only the programs the instruction names to run under `run` run
   there; the orchestrator's own checks — `ledger.py`, `trace_check.py`, `placement_check.py` and
   `round_record.py` — run outside it, and where the instruction does not say, a program runs outside
   the record and the report says so (PLR-005 version 1, review gap G1).
8. **To leave out of a document for a reader a limit the record names, or to say more than the record
   carries, without saying so.** Every limit of the thing described that an accepted document names is
   either in the document or in the report's list of what was left out, with its reason; a limit of one
   step is stated of that step, not of the whole (a search that misses a child is not "the prototype does
   not recognise the child" where another step may find it); and the table of claims is written, by
   `stat`, before the document (PLR-018 version 1, review gaps G1 and G2). The limits are those that
   the places the instruction names carry, each read as far as it is named — a document named whole is
   read whole, never in some of its sections; before the document, the session writes them as a
   register, one numbered row per limit with every place and line that names it, and counts the rows;
   a limit found outside those places goes under "found, not fixed", not into the document; and where
   the instruction names no places, the session lists the places it read and says in the report that
   the list is its own (PLR-018 version 1, review gap G2; version 2, review gap G1).

## 2. What a review of this kind runs before it judges

- The programs of the skill named in the instruction, on the document as filed, with their output
  kept in a file.
- Every identifier the document carries resolved against the register and the use case model by the
  skill's programs, not by the round's.
- For the groundwork, its tables parsed again by the build step of the application (`npm run check`
  where the scaffold exists) and the result compared with the tables.
- For a document for a business reader, the readers' register's check, `readers_register_check.py`.
- Where a criterion asks for every member of a set — every limit the record names, every file the
  record must name — the review's own list of that set, drawn by its own route from the same places
  the instruction names, each read whole, set row by row against the round's, with the count of each
  side and of the members missing; where the instruction names no places, the review says so as a gap
  of the instruction, with the list it drew (PLR-005 version 1, review gap G1; PLR-018 version 1,
  review gap G2; version 2, review gap G1).

## 3. What the orchestrator verifies before it issues an instruction of this kind

By reading:

- that the upstream document stands accepted, at the version the instruction pins among its inputs;
- that the skill of the kind is named in the read-first list, with its programs among the tests of
  success;
- that every requirement or goal the round is to write is one a file the round may write can reach.
- that no step orders the round to put a file where a program the round runs has already written
  its own, unless the step and the criterion that tests it say which of the two stays (PLR-001
  version 1, review gap G2: step 5 copied a `README.md` into `_kinds/` where `create` had written
  one, and A5 expected only `create`'s; the steps left undone there follow from G1, which the first
  line under "By running" catches).
- that every file the programs of a skill named in the instruction read lies under a root, or a
  `--read` or `--read-from`, of the `round_record.py start` the instruction writes out, so that the
  criterion on the record can be met (PLR-020: a cause the orchestrator found behind the gaps of the kind item of PLR-001 to PLR-003).
- that every criterion asking for every member of a set — every limit the record names, every file
  the record must name — closes the set: it names the places the set is drawn from, each by its
  section or whole, each among the instruction's inputs and its read-first list, never "the record"
  or "at least" alone; it asks for the set written out, one numbered row per member, with its count,
  before the document; and, for the files of the record, it says which programs run under `run`, as
  the last item under "By running" asks (PLR-024: the cause shared by PLR-005 version 1, review gap
  G1, and PLR-018 version 1, review gap G2, and version 2, review gap G1).

By running:

- that every answer an instruction fixes word for word for a document a program checks (the
  constants above all) passes that program's check — `inception.py check-constants` on a scratch
  copy — before the instruction is issued; an answer the check refuses is reworded on the owner's
  ruling before issue, never by the round (PLR-001 version 1, review gap G1).
- that no file the instruction pins among its inputs is one it orders the round to change; where
  the round must change an input, the criterion of the trace check says that its `input-changed`
  finding for that one file is expected, and which checksum is right afterwards (PLR-001 version 2,
  review gap G2).
- that every criterion asking for text in a file a program writes asks only for text that program
  writes: the orchestrator runs the program on a scratch copy and greps the criterion's text before
  issue (PLR-001 version 2, review gap G1: the constants form never writes `map_ruling`).
- that every program the instruction has the round run under `round_record.py run` is named with
  an interpreter that can trace it and holds the libraries it needs — on this computer
  `~/.pyenv/versions/3.11.14/bin/python3`, never the bare `python3` (3.7.9), which traces nothing
  and lacks what the `sdd-kit` needs (Python 3.8 or later, PyYAML) — the orchestrator running the
  named interpreter on the program's imports before issue (PLR-020: a cause the orchestrator found behind the gaps of the kind item of PLR-001 to PLR-003).
- that the instruction says which programs the round runs under the record's `run` — its own and
  the skill's — and which it runs outside it — `ledger.py`, `trace_check.py`, `placement_check.py`
  and `round_record.py` itself, whose reads are the orchestrator's files and lie under no root of
  the round (PLR-005 version 1, review gap G1: the orchestrator's checks run under `run` put five
  files on the record that the start list did not name).
