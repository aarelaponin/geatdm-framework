# Auth setup and re-auth runbook

`notebooklm-py` talks to **consumer NotebookLM** (notebooklm.google.com) as you. There is no API
key and nothing to put in the Keychain — the credential is a copy of your signed-in Google web
session, stored by the client under `~/.notebooklm/`.

Treat that directory exactly like a Keychain entry: it is a live Google session. It lives in
`$HOME`, **never** under `10-Knowledge-Products/`, and nothing in this skill ever writes it into
the repo. `notebooklm/notebooks.json`, which *is* committed, holds notebook ids and titles only.

## The venv — Python 3.11, not 3.13

```bash
python3.11 -m venv ~/.venvs/nlm
~/.venvs/nlm/bin/pip install 'notebooklm-py[cookies]==0.8.1'
```

**3.11 is not a preference, it is a constraint.** The `[cookies]` extra pulls `rookiepy`, which
has no wheel for 3.13 on this Mac and fails to build from source:

    × Failed to build installable wheels for some pyproject.toml based projects
    ╰─> rookiepy

Separate from `~/.venvs/kp` (Scribe, slidecast) on purpose — that one is pinned around a
different set, and this client moves fast.

**The version is pinned deliberately.** This is an unofficial client on undocumented endpoints.
Upgrade when you have a reason and re-run the pilot afterwards; never let a batch be the first
thing a new version touches.

## Bootstrap: import the Chrome session

```bash
~/.venvs/nlm/bin/notebooklm login --browser-cookies chrome
```

Zero password handling — it reads the session you already have. **macOS will show a Keychain
prompt to let it decrypt Chrome's cookie store; you must click Allow.** Without that click it
fails with:

    Could not decrypt chrome cookies.
    On macOS, allow Keychain access when prompted.

Because it needs that click, it cannot be run unattended, and it cannot be run for you by an
agent in a non-interactive shell. Run it yourself, once.

Several Google accounts in Chrome? Name the one you want:

```bash
~/.venvs/nlm/bin/notebooklm login --browser-cookies chrome --account you@example.com
```

Then confirm — **with `list`, not `doctor`**:

```bash
~/.venvs/nlm/bin/notebooklm list          # the real check: it makes an API call
```

**`doctor`'s "Auth ✓ pass" is a file-presence check, not a validity check.** Measured
2026-08-29: it reported `✓ pass — local auth cookies present (45 cookies)` while the very next
API call died with `_LoginRedirectError: Authentication expired`. It tells you a cookie file
exists, nothing more. Only a call that hits the server tells you the session is alive.

## Durable auth for batches

**Measured on this account, 2026-08-29: an imported cookie session lasts roughly 35 minutes.**
Three expiries in one afternoon, each killing whatever was running. A single take (~5 min) is
fine on cookie auth; anything past about five takes is not. For `--all` runs, bootstrap a
refreshing token instead:

```bash
~/.venvs/nlm/bin/pip install 'notebooklm-py[headless,browser]==0.8.1'
~/.venvs/nlm/bin/notebooklm login --master-token --account you@example.com
```

One browser sign-in, after which web cookies are minted with no browser. `notebooklm auth
refresh` re-mints on demand.

## Re-auth — the three lines

When a run fails with an auth error, this is the whole fix:

```bash
~/.venvs/nlm/bin/notebooklm list                                # confirm it is auth, not network
~/.venvs/nlm/bin/notebooklm login --browser-cookies chrome      # allow the Keychain prompt
~/.venvs/nlm/bin/notebooklm list                                # verify — again, not `doctor`
```

Then re-run the take. Nothing downstream is affected: a failed run writes no `.m4a` at all
(the download is atomic), so there is no half-file to clean up and no version number burned.

## One account, one profile

The client supports profiles (`notebooklm profile list|switch`). This skill does not configure
them — one Google account, the `default` profile. If a second account ever matters, that is the
mechanism, and `notebooks.json` would need to move with it.

## Alternatives if Chrome cookies will not decrypt

- `--browser-cookies firefox` — plain SQLite, no Keychain prompt, if you are signed in there.
- `notebooklm login --browser chrome` — an interactive Playwright sign-in instead of importing
  cookies. Needs `pip install 'notebooklm-py[browser]'`.
- The manual browser flow in `videos/README.md`, which loses nothing but time.

---

## Security review of `notebooklm-py` 0.8.1 — 2026-08-29

Handing any third party a live Google session deserves a look first. This is what was checked in
the installed package, and what the check does **not** cover.

### Verified in the code

| Check | Result |
|---|---|
| Where requests can go | `_env.py:get_base_url()` **hard-allowlists** the host to `notebook.google.com`, `notebooklm.google.com`, `notebooklm.cloud.google.com` and requires HTTPS. The `NOTEBOOKLM_BASE_URL` override is validated against that set, so it cannot be pointed at an attacker host. |
| Other network destinations | None. Every non-Google URL in the package is a GitHub issue link in a docstring. |
| Code execution primitives | No `eval`, `exec`, `pickle`, `marshal`, or `os.system`. `subprocess` is used twice: `git rev-parse` for a dev version string, and one `shell=False` argv in auth refresh. |
| Obfuscation | None. `base64` appears only in file upload and MCP file links. |
| Telemetry | No vendor endpoint. "Telemetry" here is an **optional callback you pass in** (`on_rpc_event`) for your own metrics. The version check is a *Python*-version check, not a phone-home. |
| Default cookie scope | `.google.com` + regional cctlds + accounts/drive/notebooklm/googleusercontent. **Gmail, Docs, YouTube and MyAccount are opt-in only**, via `--include-domains`. |
| Credential storage | `~/.notebooklm` created `0700`, credential files `0600`. Nothing is written outside it; nothing under this repo. |
| Provenance | MIT, named author, 31 releases, ~19k stars, actively maintained. Dependency tree is small and mainstream (httpx, click, rich, anyio, certifi, filelock) plus `rookiepy`. |

### The part that is not reassuring, and should not be

**The `.google.com` cookies it stores are your master Google session.** Excluding
`mail.google.com` from the filter buys less than it appears to: the `__Secure-…PSID`-class
cookies scoped to `.google.com` authenticate you across Google properties generally. There is no
sandbox bounding the blast radius — the code review is the control. Anyone who obtains
`~/.notebooklm/profiles/default/storage_state.json` has the account until the session is
invalidated.

### What the review does not cover

- **Only version 0.8.1.** A future release could differ. This is exactly why the skill pins the
  version — do not auto-upgrade, and re-read the diff before you do upgrade.
- **`rookiepy` is a compiled Rust extension.** It is the component with the most access (it
  decrypts Chrome's cookie store). Its Python surface was reviewed; the binary was not.
- It was read for **obvious** malice. A subtle, deliberate backdoor is a higher bar than this.

### Mitigations, most effective first

1. **Use a Google account dedicated to this**, if the NotebookLM entitlement allows it. This is
   the only measure that actually bounds the damage; everything below is trust management.
2. **Keep the version pin.** Upgrade deliberately, never mid-module, and re-run the pilot after.
3. **Never pass `--include-domains`.** It widens the cookie grab to Gmail/Drive/YouTube and buys
   nothing here.
4. **Know how to revoke *before* you need to.** This is a session cookie, not an OAuth grant, so
   it will **not** appear under Google's third-party app access list and cannot be revoked there.
   You revoke by invalidating the session: myaccount.google.com → Security → Your devices →
   sign out. Then delete `~/.notebooklm`.
5. **Do not run the `notebooklm-mcp` or `notebooklm-server` entry points.** They open local
   listeners this skill has no use for.
