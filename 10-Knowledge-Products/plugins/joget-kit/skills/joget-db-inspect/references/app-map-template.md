# App Map — <application name> (<appId>, Joget DX <version>, <engine> <dbname>)

> One short file per application. Keep it honest: tables, joins, traps.
> Extend it in the same commit as TRACE.md whenever a building block deploys.

## Domain narrative (5 lines max)
What flows through this app, stage by stage, naming the tables per stage:
```
<stage A> → <stage B> → <stage C>
 app_fd_x    app_fd_y     app_fd_z, app_fd_z_line
```

## Table catalogue
| Table (app_fd_…) | Role | PK semantics (UUID / code `XX-…`) | Key columns | Joins |
|---|---|---|---|---|
| | | | | |

## Join keys that are NOT what they look like
- e.g. `c_schoolid` holds the school *code*, join on `c_<code>` not `id`.

## Stored aggregates — trust or compute live?
| Aggregate table | Status | Compute-live source |
|---|---|---|

## Traps (append-only; date each entry)
- YYYY-MM-DD: <trap and the correct move>
