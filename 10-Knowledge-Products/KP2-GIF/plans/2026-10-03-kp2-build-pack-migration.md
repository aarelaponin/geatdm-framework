# Plan — move the KP2 build pack to its own repository

**Date:** 2026-10-03
**From:** `geatdm-framework/10-Knowledge-Products/KP2-GIF/KP2-build-pack/` (359 tracked files, ~400 commits)
**To:** `gif-linkup-demo` (local `/Users/arnelaponin/Documents/Dev/gif-linkup-demo`, remote `github.com/alaponin/gif-linkup-demo`), pack at the repo root

## Decisions

- **Repository visibility:** public. The GitBook pages tell learners to clone it.
- **History:** kept, via `git subtree split`.
- **Compose project name:** pinned to `kp2-build-pack` (`name:` in `docker-compose.yml`), so the existing named volumes survive the move.
- **Open:** whether to rename the learner-facing "KP2 build pack" title and the `kp2-build-pack-<sha>.zip` archive prefix (rule: no KP acronyms for learners). Renaming the Compose project name would mean rebuilding the federation from zero.

## Why this is not a plain copy

The pack hard-codes that it sits exactly three folders deep in the monorepo. `join-api` mounts `../../..` as `/repo` and runs `git status` there. The repo root is derived as `pack_dir.parents[2]`. `preflight.sh` refuses any other layout. If the files are copied as they are, the federation deploys but every join approval fails. With the pack at the root of the new repo, the repo root becomes the pack folder itself, which is simpler than before.

## Breakage inventory

### A. Inside the pack (fix in the new repo)

| Where | Now | After |
|---|---|---|
| `docker-compose.yml`, `join-api` | Mounts `../../..:/repo:ro`; `PACK_DIR`, `OUT_DIR` and `KP2_XROAD_ADMIN_CERT_DIR` point to `/repo/10-Knowledge-Products/KP2-GIF/KP2-build-pack/...`; 6 writable overlay mounts on that path; git dir defaults to `../../../.git` | Mounts `.:/repo:ro`; every path is `/repo/...`; git dir defaults to `./.git` |
| `docker-compose.yml`, project name | No `name:`, so Compose uses the folder name (`kp2-build-pack`) | Add `name: kp2-build-pack` |
| `apps/join-api/app.py:1239`, `job.py:1210`, `writer.py:1026` | `PACK_DIR.resolve().parents[2]` | The repo root is `PACK_DIR` itself |
| `scripts/preflight.sh:69-82, 230-233` | Git top level must equal `$PACK_DIR/../../..`; the message says "clone the monorepo" | Git top level must equal `$PACK_DIR`; the message says "clone gif-linkup-demo" |
| `scripts/verify.sh:24` | `KP_KIT` defaults to `$PACK_DIR/../../ITU-Giga-KP-Plugin` | Drop the default; the gate is found only when `KP_KIT` is set (it already warns when the kit is missing) |
| `infra/ci/remote-deploy.sh`, `db-sync-remote.sh`, `console-publish.sh` | `PACK=/opt/kp2/repo/10-Knowledge-Products/KP2-GIF/KP2-build-pack` | `PACK=/opt/kp2/repo` |
| `scripts/demo-capture.sh:283` | Mounts on the old `/repo/...` path | `/repo/deployment.yaml` |
| `tests/test_mount_shape.py` | Expects `../../..:/repo:ro` and `_PACK_IN_REPO` on the old path | `.:/repo:ro`, `/repo` |
| join-api tests (`test_app_retire`, `test_writer`, `test_job`, `test_app_approve`, `test_app_queue`), `apps/console/tests/test_app_join.py` | Build a temporary repo with the pack three folders deep | Pack at the root of the temporary repo |
| `manifest.yaml` `home:` and fixture copies (`apps/console/tests/fixtures/*/manifest.yaml`, `tests/golden/hosted-fixture/member-configs/manifest.yaml`) | `10-Knowledge-Products/KP2-GIF` | `.` (nothing reads this field) |
| Docs: `README.md`, `runbook.md`, `exercises.md`, `infra/CONSOLE-EXPOSURE.md`, `infra/DO-DEPLOYMENT.md`, `infra/IMPLEMENTATION-PLAN.md`, `hurl/README.md`, `docs/production-delta.md` | "Clone the monorepo", `<repo>/10-Knowledge-Products/...`, `/repo/10-Knowledge-Products/.../scripts/member.sh` | "Clone gif-linkup-demo", `/repo/scripts/member.sh` |
| `.gitignore` | Relied on the monorepo's root rules for `.claude/` and `.worktrees/` | Add both |

`scripts/package.sh` already handles an empty subtree prefix, so it needs no change.

### B. CI and cloud (move to the new repo)

- Move `.github/workflows/kp2-fast.yml` and `kp2-federation.yml`. Drop the path filters and `working-directory`; set `PACK_DIR: .` and `TF_DIR: infra/terraform`; update the comments that say "lives here, not in the pack".
- Add the repository secrets again: `DO_TOKEN`, `SPACES_ACCESS_KEY_ID`, `SPACES_SECRET_ACCESS_KEY`, `KP2_SSH_PRIVATE_KEY`, `KP2_SSH_PUBLIC_KEY` and `KP2_CONSOLE_HTPASSWD`.
- Droplet: run `destroy` from the old workflow **before** the cut-over. A rsync in the new layout onto the old `/opt/kp2/repo` tree does not clean up properly. Terraform state is kept in the Spaces bucket under an unchanged key, so `up` from the new repo continues it.

### C. geatdm-framework (update after the move)

- `gitbook/kp2/build-pack/what-it-is.md`, `run.md`, `exercises.md`, `acceptance.md`: re-copy from the new repo's `README.md`, `runbook.md`, `exercises.md` and `acceptance/once-only-exchange.md`. Change the header to "Copied from [gif-linkup-demo](https://github.com/alaponin/gif-linkup-demo) … paths relative to the repository root".
- `gitbook/kp2/build-pack/README.md`: add a clone link to the repo.
- Module pages (`4-4`, `4-5`, `4-7`, `4-8`, `5-2`…`5-9`): their "In the build pack" paths are relative to the pack and stay valid. No change.
- `pages-kp2.json`: no change (the GitBook page IDs stay the same). Publish with `publish.py`, which opens a change request for an admin to merge.
- `KP2-GIF/README.md` (lines 21, 28, 31, 58) and `KP3-DPI/KP3-build-pack/README.md:17`: point to the new repo.
- Leave as they are: the script bundles, `build_kp2_module*.js` / `*_deck_*.py`, `_retired/`, `plans/` and the dated review notes. They record what was recorded, and the videos are already accepted.

### D. Local files git does not carry (copy by hand)

`.env`, `out/` (join store, test CA, admin certs), `docs/decisions/superpowers/`, `.claude/`. `.venv` and `infra/terraform*/.terraform/` can be rebuilt (`terraform init`).

## Steps

1. **Before:** destroy the droplet if it is up; stop the local stack; check that geatdm-framework has nothing uncommitted.
2. **Bring the history across:**
   ```
   cd ~/Documents/Dev/geatdm-framework
   git subtree split --prefix=10-Knowledge-Products/KP2-GIF/KP2-build-pack -b kp2-pack-split
   cd ~/Documents/Dev/gif-linkup-demo
   git pull ../geatdm-framework kp2-pack-split
   ```
3. **Copy the local-only files** listed in D into the new repo.
4. **One fix-up commit in the new repo:** everything in A, plus the workflows from B.
5. **Verify:** `scripts/verify.sh --fast`, then `--full` (start colima first), then one real member join through the console. The join is the only path that uses the git mount, so it is the real proof.
6. **Publish:** push to `origin main`; set the repository to public; add the secrets; check that the fast-tier workflow passes. Run the federation workflow's `up` only if needed.
7. **Clean up geatdm-framework in one commit:** `git rm -r 10-Knowledge-Products/KP2-GIF/KP2-build-pack .github/workflows/kp2-*.yml`, plus the updates in C. Then publish the GitBook change request.
8. `git branch -D kp2-pack-split` in geatdm-framework.

## Done when

- In the new repo, `verify.sh --full` passes and a console join reaches `ACTIVE`.
- The fast-tier workflow is green on GitHub.
- `grep -r KP2-build-pack` in geatdm-framework finds only the as-recorded artefacts listed in C.
- The GitBook build-pack pages link to the public repo.
