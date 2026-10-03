# KP3 build pack — Education Digital Public Infrastructure

The runnable companion to the KP3 video bundle. The videos teach the build; this
pack **is** the ready solution — the configuration the modules generate, the prompts
that generate it, the scripts that deploy it, and the acceptance checks that prove it.

- **Track:** dpi
- **Depends on:** KP2
- **Stand it up:** see `runbook.md`
- **Index:** see `manifest.yaml` (module → BB → config → prompt → acceptance)

Built and proven with the `itu-giga-kp` kit: `bb-config-gen` fills the configs,
`kp-solution-verify` proves the pack runs. Scope: Education only, public anchors only.

KP2's modules and config files are named by capability (`register-member`,
`once-only-exchange`, ...), not by curriculum number (the KP2 build pack now
lives in its own repository, [gif-linkup-demo](https://github.com/alaponin/gif-linkup-demo));
this pack's own numeric scaffolding is untouched for now.
