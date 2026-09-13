# KP2 Module 5 — is the script supported by the Linkup build pack, and how to show it on video

**Date:** 10 September 2026
**Scope:** `KP2_Module5_Script_Bundle_v0.1.md` (27 June, seven subtopics 5.1–5.7) read against `KP2-build-pack/` as it stands today — `manifest.yaml`, `deployment.yaml`, `runbook.md` (Steps), `exercises.md`, `docs/path-conformance.md`, `acceptance/once-only-exchange.md`, `acceptance/join-member.md`, `onboarding/<key>/` and the console's five tabs. Builds on the 9 Aug learning-integration review and its validation; does not repeat them.
**Two questions:** (1) does the pack support what each video claims, (2) what format each video should take.

---

## 0. Verdict in three lines

- **Every claim the script makes is either implemented, simulated with the simulation declared, or a planning artefact the pack never needed to hold (5.1).** Nothing in Module 5 asks the learner to believe something the pack cannot show.
- **The script is ten weeks behind the pack.** The topology changed (MoEYS retired), the registration mechanism changed (config-as-code + a join API, not "generate with Claude then deploy"), and the pack grew the things that are most demonstrable — a live member join, un-join, contract drift, the catalogue, the gate register — none of which has a video. `manifest.yaml` says so itself: `join-member: video_ref: "?"`.
- **Do not make seven typical videos.** Four of the seven (5.1, 5.2, 5.3, 5.7) are concept videos and the slidecast format is right for them. The other three (5.4, 5.5, 5.6) are *about a running thing*, and a text-slide narration of a running thing is the weakest possible evidence for the pack's central claim ("a framework that runs, not one explained"). Those three should be screen-led, with slides as chapter cards.

---

## 1. Subtopic by subtopic — what the pack actually supports

Statuses use the pack's own vocabulary (implemented / simulated / named absence / out of scope) plus **drift** = script says something the pack no longer does.

### 5.1 Plan the build in four phases — supported by design, nothing to show

No pack artefact and none needed: the four phases are the country's delivery plan, not a config. Manifest has no module for it, correctly. **Format: typical video.** Only note: the cost-frame and timeline figures are still calibration item §5.1; unchanged.

### 5.2 Member Requirements — implemented, one framing gap

- `onboarding/<key>/02-requirements.md` is generated per member with exactly the six rows the script lists (security server, registered identity, standards portfolio, data conformant, lawful basis, technical contact). For a joined member the same six travel in the join payload (`member_requirements: {...}`) and are validated; canonical members carry them in `configs/member-*/`.
- **What the pack does *not* do, and says so:** the record has a "Stated" column, not an evidence column — it is the self-assessment the script's safeguard warns about. And the path separates the *Membership Agreement* (G0.2) and the DPO/Technical Focal Point roles (G0.3) from the Requirements; both are **named absences** in every member's `00-gates.md`.
- **Drift (small):** the script presents the checklist as a standalone template an architect fills; in the pack it is the *front of the join payload* — the thing the applicant submits, which then gets rendered into the member's record. Saying that in one sentence connects 5.2 to the join demo.
- **Format: typical video, plus a 20–30 s "artefact reveal"** — the rendered `02-requirements.md` table as a text slide. It is a markdown table; it fits ITU's text-only rule with no pipeline change.

### 5.3 The SLA — implemented, per service not per member

- `onboarding/<key>/03-sla/<service>.md` — the five fields the script names (availability, response time, support hours, incident response, change notice) plus a signatory, one per **published service**. `validate.py` rejects a published service without an SLA (G5.4 implemented); the catalogue entry links the SLA so it is reachable from the service, not only from the member.
- **Drift (small):** the script frames the SLA per *member* ("a member being connected is not the same as dependable"). In the pack a consumer-only member (PNEA) has no SLA — its gate register says **out of scope: nothing published**. One sentence fixes it: the SLA belongs to the service a provider publishes.
- **Format: typical video + artefact reveal** (`03-sla/enrolment-api.md` as a text slide).

### 5.4 Register a member on X-Road — implemented, but the *mechanism* has drifted the most

What the script says: bb-config-gen drafts the subsystem + ACL from the member's details; every identifier is a `[confirm]` against the live registry; the config goes into the build pack under the member's folder; kp-solution-verify deploys it; "register the four Progressa members".

What the pack does:
- Canonical members: `configs/member-<key>/<key>.yaml` → `hurl/generate.py` → Hurl scenarios driven over the X-Road admin REST API. The two artefacts the script names (subsystem, ACL) are real and land in `05-registration.md`. ✔
- A **new** member: `apps/join-api` — applicant `POST /requests` (payload = identity, hosting, semantic entity + fields, services with contract URL, ACL, lawful basis, SLA, Member Requirements) → validation (identifier allowlist, collision, semantic-map conformance, lawful basis stated, SLA present, contract fetched and screened, ACL sanity) → operator `approve` **with a decision reference** (G1.2: the technical join cannot start without the admission decision — the RACI coupling 5.4's own script promises) → the admin-API sequence runs itself → `ACTIVE, verified: true` in ~95 s, verified by a real r1 call through X-Road. The README states the opposite of the script's stance in so many words: *"writing member config by hand is exactly what this pack demonstrates you don't need to do."*
- **The `[confirm] against the live registry` framing does not fit the pack's world.** In the demo the pack *is* the registry: identifiers are allocated at admission and checked for legality and uniqueness (G1.3 implemented). The confirm discipline is right for a country joining an existing bus — keep it in the AI tip, but the video's mechanism should be admission → validation → automated join.
- **Drift (factual):** "the four Progressa members" — now three canonical members (PNEA:EXAMS, PLR:ENROLMENT, PNIA:IDENTITY) plus the owner PDGA. MoEYS/PEMIS is retired (manifest comment; KP2 README status line is stale too).
- **Format: hybrid.** Concept slides (the two artefacts; admission gates the join) + a ~90 s screencast of console tab **4 · Join a member**: PTSB request appears with its computed config diff, operator approves with `RIHA-2026-001`, states tick to `ACTIVE, verified: true`, `onboarding/ptsb/01-admission.md` appears carrying the reference. Real time fits the video; no time-lapse needed.
- **This closes `join-member: video_ref: "?"`.** Either retitle 5.4 "Admit a member to the bus" and let the join API be its mechanism, or keep 5.4 as the artefacts and add a 5.4b. I would retitle — a video that shows an agency arriving in 90 seconds is the strongest onboarding video KP2 can have, and it needs no new number.

### 5.5 Stand up the federation — implemented; topology and order need correcting

- Stand-up is `scripts/deploy.sh` (over `hurl/run-linkup.sh`), reproducible from `runbook.md` — the "run book" claim is literally true, and exercise 5 (`verify.sh --full`: purge → cold redeploy → seed → acceptance) is the reproducibility proof the script describes.
- **Drift (factual):** slide 2 names "four Security Servers (MoEYS/PEMIS, PNEA, PLR, PNIA)". The pack runs four Security Servers — **PDGA (owner, with the MANAGEMENT subsystem) + PNEA + PLR + PNIA**. Count survives by accident; names do not.
- **Drift (order/omissions):** the pack's order is CS init → Test CA **with OCSP and TSA** → members and subsystems on the CS → **configuration anchor** → PDGA + management SS → each member SS (anchor, PIN, AUTH + SIGN keys, Test CA signing, auth-cert registration **and its explicit approval on the CS**, subsystem) → service publishing → ACLs. The script's "Central Server first, then the Test CA, then each Security Server registers" is a fair simplification; the one thing worth adding is the explicit approval on the CS — it is `federation-core.yaml`'s `management_request_approval: explicit`, and it is the technical footprint of the governance decision.
- **Check before locking:** "Linkup runs it all on one cloud VM on the ITU cloud". `deployment.yaml` supports `target: docker-local` only ("Future: itu-cloud, vm"); the infra that exists is a DigitalOcean droplet for exposing the console and join API. Where the demo federation actually lives when filmed is a fact to settle, not a script line to keep. Measured host needs: ~11 GiB RAM, ~15 GB disk, 4 cores, ~9.2 min deploy.
- **Format: hybrid.** Slides for the components; a 30–40 s time-lapse of `scripts/demo.sh` naming its steps (terminal text), ending on `out/deploy-timings.txt` and the Central Server's member list. Terminal output can be captured as text (asciinema → agg) rather than pixels — see §3.

### 5.6 The once-only exchange, live — implemented and *built to be filmed*

The pack's headline check, and the script is almost entirely right:
- `acceptance/once-only-exchange.md` → `scripts/acceptance.sh` checks **2.6.1–2.6.6**: happy path cross-server (technical), right learner field-by-field (semantic), asked once — citizen field and bus fields disjoint and covering the form (organisational + legal), **negative** — PLR, a member in its own right, denied on `identity-api` with the specific X-Road fault `Server.ServerProxy.AccessDenied`, routed through PLR's *own* Security Server so the denial provably comes from the provider-side ACL; a 404 negative (errors observable); and **field conformance** (G5.9) — the response carries exactly the fields the contract declares. Status VERIFIED, green from cold.
- The console: tab 1 **Ask once** (pick a learner, run, see the pre-filled form and the `asked N · pre-filled M/T` tally), tab 2 **How it worked** by layer, tab 3 **Who's allowed** with **Break the proof** → only the PNIA half of the form fails, PLR still pre-fills; **Restore**. `deployment.yaml` sets `server_conf_cache_period: 5` (X-Road default 60) with the comment *"so an ACL change is filmable"* — the pack was engineered for exactly this video.
- `out/application-<nin>.json` — the assembled application with per-field provenance — is, in the acceptance doc's own words, "the tangible asked-once object for the video demonstration".
- **Drift (naming):** the script credits `kp-solution-verify` on screen; the learner will see `scripts/acceptance.sh` and checks `2.6.x`. Name what they will see. The negative check the AI tip asks for exists (2.6.4) — say so.
- **Missing teaching point the pack hands you:** field conformance is purpose limitation *on the wire* — the legal layer made mechanical. It is the best single sentence in the module and it is not in the script.
- **Answers calibration item §5.3(3)** ("live call or recorded screencast?"): a recorded screencast of a real call, on the sandbox, with the ACL break as proof it is not a mock.
- **Format: screen-led.** This is the one video where the standard format would actively undersell the deliverable. Roughly: hook slide → console tab 1 run (≈40 s) → tab 2 layers (≈30 s, replaces slide 3) → tab 3 break / one half fails / restore (≈40 s) → `application-<nin>.json` as a text slide → `acceptance.sh` 2.6.1–2.6.6 green (≈15 s) → one-sentence slide. About 2½ minutes of screen, ≈300 words of VO.

### 5.7 From demonstration to production — implemented as a document, richer than the script

- `docs/production-delta.md` is titled *"From demonstration to production (Module 5.7 — the honest gap)"*; `deployment.yaml` has `posture: demo | production`, where `production` implies the safe value of four join-workflow keys and **refuses to start** if a permissive value is set without being acknowledged — a fail-closed switch the script could show. `docs/path-conformance.md` names 24 absences and 6 simulations by clause.
- Script's eight rows all map: separate hosts, real CA (Test CA simulated, P0.2), HA, monitoring (add-ons installed on every server, **no collector** — G4.8/S6.3, a "no-go for now, with evidence"), capacity, support, hardening (`docs/security-review-2026-08-23.md`, `production-hardening-plan.md`), and legacy-link migration (production-delta has a section "The task the hardening list forgets" — its title suggests it is the same point; confirm before citing).
- **Worth adding from the pack:** the development track vs production track (P1.1/P1.2 — the demo *is* the development track and says so); statutory message-log retention at retirement (GX.4 — the demo exports the archive before deleting the volume, "so the demo stops teaching the deletion").
- **Format: typical video.** Optionally a 10 s reveal of the `posture: production` refusal.

### Not in Module 5 at all, though the pack demonstrates them

| Pack capability | Where | Video today |
|---|---|---|
| A member **joins** through admission → validation → automated join | `join-member`, exercise 2, console tab 4 | none (`video_ref: "?"`) → fold into 5.4 |
| **Un-join / retirement** — six reversal steps, `RETIRED` record kept, canonical members refused | exercise 4, `acceptance/join-member.md` | none |
| **Contract drift** — a published description is a promise; `member.sh drift` / `refresh`; a `post:` refused because admitting a write is a new join decision | exercise 3 | none |
| **Service catalogue** — "publication is not permission", tabs 3 + 5 as the pair that proves it | `onboarding/catalogue.yaml`, `GET /catalogue` | none |
| **Gate register** — four statuses, an absence named where the reader meets it | `onboarding/<key>/00-gates.md`, `path-conformance.md` | Module 6.3 preaches it; nothing shows it |

Drift + un-join + catalogue are one coherent "operating the bus" story that Module 5 currently stops short of. Options: (a) a 5.8 "Operate the bus: catalogue, drift, retirement"; (b) leave them to GitBook as Tier-2 exercises (the pack's `exercises.md` already has the expected-observations text) and let 5.7 point at them; (c) put the whole operator loop in one continuous companion screencast (§3). (b) is cheapest and consistent with the KP1 decision to keep video count down; (c) is the strongest demonstration of the ToR §4.6 "real-life demonstration" requirement.

---

## 2. Script corrections to carry into `build_kp2_module5_v01.js` (v0.2)

1. **5.4, 5.5, bundle header, KP2 README status line:** MoEYS/PEMIS retired. Four Security Servers = PDGA (owner) + PNEA + PLR + PNIA; three members + owner.
2. **5.4:** mechanism = admission → validation → automated join over the admin API (config-as-code for canonical members). Keep bb-config-gen as the AI tip (`prompts/register-member.md`, `prompts/member.md`); reframe `[confirm]` as "allocated at admission, checked for legality and uniqueness".
3. **5.5:** add OCSP/TSA, the anchor, and the explicit approval of the auth-cert registration on the CS. Settle where the demo runs (docker-local vs ITU cloud) before keeping "on the ITU cloud".
4. **5.6:** name `scripts/acceptance.sh` 2.6.1–2.6.6; add field conformance (purpose limitation on the wire); note the negative call is routed through PLR's own server.
5. **5.2 / 5.3:** Requirements travel in the join payload; Membership Agreement and DPO are named absences; the SLA is per published service, a consumer-only member has none.
6. **5.7:** add the development-track point and message-log retention; optionally the `posture` switch.
7. **Persona line:** 5.2–5.4 are the *onboarding lead's* subtopics (M6.5 role paths); say so in the at-a-glance table.
8. **`manifest.yaml`:** set `join-member: video_ref` to whatever §1's 5.4 decision is.
9. **§5.3 calibration items:** (1) the PNEA←PNIA+PLR flow is now the built one — close; (2) "federation does not yet exist" — close, VERIFIED from cold; (3) live vs screencast — answer: screencast of a real call.

---

## 3. How to show it — format, pipeline, ITU rules

**The principle.** The KP1 formula (two-host TTS narration over text slides) teaches concepts well. It cannot carry the one thing KP2 promises that KP1 did not: *evidence*. For 5.4/5.5/5.6 the screen is the evidence; slides become chapter cards and the single-sentence close. Word budget per video drops from ~560 to ~300–400 and the screen fills the rest.

**Three video shapes for Module 5:**

| Shape | Videos | Screen share | What the learner takes away |
|---|---|---|---|
| Typical slidecast | 5.1, 5.2, 5.3, 5.7 | 0–30 s artefact reveal (a rendered onboarding record as a text slide) | the concept + the artefact it produces |
| Hybrid | 5.4 (join), 5.5 (stand-up) | 60–90 s | it really happens, in about this much time |
| Screen-led | 5.6 (once-only + break the proof) | ~150 s | every layer in one call, and the ACL is the trust device |

**ITU rules.** §4.3 explicitly allows "computer-screen-only voice-over with no narrator visible" — a screen recording is that. The text-only / no-images slide rule (§3.i) is about slides; a screencast is not a slide, but it is pixels, so **raise it as a calibration item** alongside the on-camera intros. Two ways to stay inside the letter of "text only":
- Terminal segments (5.5's `demo.sh`, 5.6's `acceptance.sh`) can be recorded as **text** with asciinema and rendered by `agg` — output is monospaced text, can be restyled to the ITU palette (#E5F5FB background, dark text), and can be sped up losslessly. No console pixels at all.
- Console segments (5.4 tab 4, 5.6 tabs 1–3) have to be real screen captures; keep them at 1080p, browser chrome hidden, no bookmarks bar, `localhost:8090` in the address bar is fine.

**Pipeline change (modest).** `slidecast.py` today: slide images + one audio take + a cue file. Add one cue kind — `clip <path>` — that ffmpeg concatenates in place of a slide for the cue's duration. Clips are the slave to the narration: cut or `setpts`-stretch the clip to the cue window, mute the clip's own audio. That keeps the two-host TTS take as the single audio track and Whisper/Scribe timestamps still drive the cues. Record each clip once, deterministically: `scripts/console.sh reset` → record → reset. The 120 s no-activity watchdog and the acceptance-refuses-on-dirty-journal guard mean a take cannot leave the stack in a bad state.

**Filming realities.** ~11 GiB RAM and a 9-minute cold deploy — film on the Mac with a warm stack, not on a call; only 5.5's time-lapse needs a cold run. `.env`, tokens and the admin password must never be on screen (`set -a; . ./.env` in a hidden pane). The seed data is synthetic (Gambia-grounded, Progressa-named) — fine to show; still pick a learner whose name reads as clearly invented. The ACL propagation is a *few seconds* each way — do not cut it out; the wait is what shows it is a real bus.

**A companion walk-through, separately.** One continuous 8–10 min screen recording — `demo.sh` → console 1–3 → join PTSB → drift → un-join → `acceptance.sh` green — narrated as a single take, published as the GitBook "Run" page's video (not a YouTube subtopic, so ITU's 5-minute convention is untouched). It costs one recording session, uses `exercises.md` verbatim as its script, and is the artefact ITU's ToR §4.6 asks for. The seven subtopic videos then quote 30–150 s slices of it. Recommend doing this first: it forces the stack, the takes and the drift fixes above to be settled once, and every subtopic clip falls out of it.

---

## 4. Suggested order of work

1. Settle §2 items 1–3 and the hosting question (one Tuesday-call item: ITU cloud vs local; screencast permitted under §3.i).
2. Record the companion walk-through on a warm stack; keep the raw takes per tab.
3. Regenerate Module 5 as v0.2 with the corrections and the three shapes; word caps per shape into `kp-bundle-qa` as soft checks (as done for KP1).
4. Add the `clip` cue to `slidecast.py`; build 5.6 first as the proof of the format, then 5.4 and 5.5.
5. Decide (a)/(b)/(c) for the operator loop; at minimum, the 5.7 GitBook page links exercises 2–4 as the Tier-2 plays.
