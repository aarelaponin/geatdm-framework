# KP2 implementation — validation against the 9 Aug review and the three plans

**Date:** 9 August 2026 (evening)
**Validates:** the implementation of `KP2_Console_Implementation_Plan`, `KP2_Prompts_Implementation_Plan`, `KP2_Onboarding_Setup_Implementation_Plan` against the code on disk, and the result against `KP2_Learning_Integration_Review_2026-08-09.md`.
**Method:** fresh listing of the pack (68 files changed today, 12:47–15:18 UTC), staged and read the changed code, and ran `prompts/check_prompts.py` against a copy of the real tree (result: `OK -- 5 prompts, 4 worked examples`).

## Verdict

**All three plans are implemented, faithfully and in several places better than specified.** 14 of 16 plan tasks are fully done, one was consciously exceeded (the compose change), one was skipped (a one-line UI copy nit). Four small residual findings below — two of them documentation left stale *by* the implementation itself — and the review-level items that were never in these plans (learning map, KP4 seam doc) remain open, as expected.

---

## 1. Console plan — verdict per task

| Task | Verdict | Evidence |
|---|---|---|
| C1 env hardening | **done+** | `app.py:44` lazy `os.environ.get`, `JOIN_TOKEN_MISSING` remedy; `_proxy_join` short-circuits before any outbound call; subprocess import-time test (`test_app_console_catalogue.py`). Compose: console token `:-` (line 179). |
| C2 catalogue tab | **done** | `GET /api/catalogue` reads `onboarding/catalogue.yaml` off the pack mount (no join-api dependency — works with `join.sh down`); tab 5 in `index.html:35`; disclaimer + `source` + `api_form` rendered; the permissions-tab cross-link landed verbatim ("these two tabs are the pair that proves it", `index.html:99`); compose mounts `./onboarding` read-only. Tests cover header guard, disclaimer, service list. |
| C3 own-server verified:false | **done** | `app.js:761–769` branches on `payload.security_server.own_server` with the known-defect wording (2.7.r1 as the real answer, "never flips"); hosted joins keep the generic line; consume-only `note` case preserved; test at `test_app_join.py:311`. |
| C4 artefact link | **done** | `app.py`: `artifact_hint` only if the file exists ("only ever reported, never written"); `app.js:335–338` renders it, with the run-acceptance fallback line. |
| C5 inspector deep-links | **done** | `_layer_sources()` in app.py builds per-EIF-layer file+string footers from the catalogue + `once-only-exchange.yaml`; `app.js:526–530` renders "where this lives"; degrades to no footer when the catalogue is unrendered. |
| C6 submission gap | **done, option (a)** | Runbook now states it exactly: review-onward is in the tab, "Submission is not: it is the applicant's act… stays a `curl` from outside, and the tab's empty state hands you that command." The empty state carries **Copy submit as curl** (`app.js:856`), guarded against the 3s poll clobbering it mid-click. |

**Exceeded:** the plan said join-api keeps `:?`; the implementation moved join-api's two tokens to `:-` as well, with the correct reasoning in a compose comment — compose interpolates file-wide, so any `:?` on those keys would still stop `console.sh up`, and join-api's own `_required_token` guard is stronger (it also rejects `CHANGEME`, which `:?` accepts). This is the right call — the plan's own caveat predicted it.

**Skipped (minor):** the seam-caption copy tweak ("KP4 replaces this form *and/or the registries behind it*") — `index.html:43,60` unchanged. One line, cosmetic.

## 2. Prompts plan — verdict per task

| Task | Verdict | Evidence |
|---|---|---|
| P1 worked examples | **done+** | `prompts/examples/` with four folders; `member-ptsb/` ships brief + both expected documents; the other three ship briefs pointing at committed configs. **Verified content:** `expected-ptsb.yaml`'s `semantic.fields` `[nin, award_id, program, year]` exactly equal the tracked spec's declared response fields (checked programmatically); `expected-manifest-entry.yaml` carries `origin: joined` and the never-`identifiers.members` warning; `hosted_on: ss-plr` is a real, unhosted host. The README's boundary section ("nothing reads them; if `generate.py` ever reads `prompts/`, that change is the mistake") is the plan's guardrail, stated better. |
| P2 Prove-it footers | **done** | All five prompts end `## Prove it`, each naming only pre-existing checks with tiers (spot-checked all five; the vacuous-by-default caveat on `join-member` is carried honestly). |
| P3 crosswalk + name migration | **done** | `**Realises:**` line on all five (including the honest `video_ref: "?"` on join-member and "no module" on member.md); `prompts/README.md` carries the shape contract, the five-prompt table, and the full old→new name-migration table including the retired `2.2`. |
| P4 check_prompts.py | **done, passes** | Ran it against the real tree: `OK -- 5 prompts, 4 worked examples`. Checks all three plan assertions (manifest bindings, prompt shape incl. Realises/Prove-it, brief↔expected pairing with YAML-parse and cited-config existence). Stdlib+PyYAML only. |
| P5 missing-layer naming | **done** | `prompts/README.md` "Not here yet": `legal-decree.md` and `governance-pack.md` as named absences, "Planned, W1", with the shape they will take. |

## 3. Onboarding/set-up plan — verdict per task

| Task | Verdict | Evidence |
|---|---|---|
| O1 preflight | **done+** | `.env` keys derived from compose's own `${VAR:?}` set (`preflight.sh:78`), missing-file/missing-key/`CHANGEME` all named with the right remediation — including the subtle one: missing keys defer to gen-secrets' self-heal rather than naming `--force`. Clock (warn-only, `timedatectl` on Linux, manual line on macOS) and RAM (warn-only, 12 GiB threshold, both platforms) under a separate non-blocking banner; exit 0 still means deployable. |
| O2 demo.sh | **done+** | Steps 0–5 with UTC stage stamps, expected-duration and propagation-noise lines before deploy, `--skip-console`, and a **better refusal than planned**: a volume check (`kp2-cs-conf`) catches the stopped-but-not-purged state HTTP probing cannot see, then the reachability probe picks which resume line to print. Ends with console URL, newest `out/application-*.json`, admin-UI table, "Next: docs/exercises.md". Deliberately sources `lib-core.sh` only, so a missing `.env` doesn't kill the script whose step 1 fixes it. |
| O3 gates vocabulary | **done** | `_GATES_TABLE` rewritten: every Status cell opens with one bold path-conformance status; the G3 disagreement is **corrected to `simulated`** exactly as the plan's review section demanded; SLA consumer-only row is `out of scope`; the vocabulary pointer + "records begin at 02" line are in the template; all three canonical records regenerated identically (pnia/pnea checked); `test_writer.py:353` asserts *every* gate row opens with a vocabulary word. |
| O4 exercises.md | **done** | Five exercises in the planned order, each goal → runbook-linked commands → expected observations → per-layer closer ("What just happened, per layer" ×5, plus a sixth in the intro's exercise 1). Exercise 2's submit payload is P1's PTSB example, byte-consistent with `expected-ptsb.yaml`'s content. Links, never re-documents. |
| O5 runbook pointers | **done** | Runbook opens with "Three ways in" (Read / Run / Do) and "Everything below is the engineering depth under those three." |

## 4. Residual findings (all small)

1. **README.md and gen-secrets.sh now document a trap that no longer exists.** README's stand-it-up bullet still says a pre-join-b `.env` "breaks every `docker compose` invocation… Compose interpolates `${VAR:?…}` for the whole file" (README:12–18), and gen-secrets.sh's comment says compose "now requires both unconditionally" (gen-secrets.sh:44). Both were true this morning; the compose change to `:-` made them false this afternoon. The self-heal behaviour is still right and still wanted — only the *stated reason* is stale. Two small text edits.
2. **Preflight's `.env` completeness is now "complete for deploy", not "complete for the join demo."** Because the join tokens left the `:?` set, a token-less `.env` passes preflight; the join tab and `join.sh up` degrade with their own messages. That is a defensible design (each guard where it is load-bearing), but preflight's success line says "a complete .env", which slightly overpromises. Optional: a warn-only line when the join tokens are absent.
3. **Comment discipline: one violation pattern in the new code.** `test_app_console_catalogue.py` uses plan-task section headers (`# -- C1: no operator token --`, `# -- C2: the catalogue endpoint --`) — exactly the plan-id references the discipline rule excludes. Trivial rename (`# -- missing operator token --` etc.). Everything else new is clean; the many legacy "UX plan Task N" / "Wave 2 Task 2" narrations in app.js predate the rule and were not in scope to remove.
4. **`alert()` for the missing decision-reference** (`app.js`, approve gate) is a pre-existing pattern the join-tab work kept; an inline validation message would fit the console's own style better. Cosmetic.

## 5. Where this leaves the 9 Aug review

Now covered by today's work: §3.1 console (all six items), §3.2 prompts (all four items), §3.3 onboarding/set-up (all items — preflight, wrapper, gates vocabulary + numbering, exercises), plus the runbook's three-tier front door (part of §1.2). The review's Tier-2 "exercises with expected observations" ask is fully delivered by `docs/exercises.md`.

Still open, and never claimed by these plans: **R1** the generated learner crosswalk (`docs/learning-map.md` — the runbook's "Read" line currently points at README + path-conformance instead; the crosswalk remains the highest-leverage remaining item); **R2/R3** the KP4 seam contract (`docs/kp4-seam.md`) and its seam acceptance check — note today's PTSB example + exercises 2–4 built most of R3's raw material; **Tier-0** committed sample `application-<nin>.json` (one exists in `out/` but `out/` is gitignored — a clean checkout still has none); the **README one-pager rewrite** (fitness review W5, now also carrying finding 1 above); the **legal/organisational layer artefacts** (named in `prompts/README.md`, still W1); and the W4 standalone items (`verify.sh`'s sibling-kit and `.venv` dependencies), unchanged today.

**Suggested next bite:** finding 1's two text edits + the C1/C2 test-header rename (ten minutes), then R1's `docs/learning-map.md` generator — `manifest.yaml`'s `video_ref` + `prompt:` bindings and `prompts/README.md`'s table now make it an almost mechanical render.
