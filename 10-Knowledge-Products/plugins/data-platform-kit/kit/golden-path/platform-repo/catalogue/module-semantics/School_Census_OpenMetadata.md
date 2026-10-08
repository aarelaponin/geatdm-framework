# School_Census — OpenMetadata Semantic Enrichment (DRAFT scaffold)

_Generated 2026-10-08 · Static analysis of census.pbl (DataWindow + embedded SQL)._

> DRAFT SCAFFOLD — table/business-column descriptions are TODO; complete them from naming + domain, then VERIFY against an authoritative source before publishing (catalogue control). Authoritative data types come from the catalogue connector; 'inferredType' is a hint only.

**Tables used (11):** `appuser`, `censusreturn`, `district`, `grade`, `learner`, `learnerstatus`, `msgtext`, `school`, `setting`, `teacher`, `transfer`

**Unmapped column prefixes (assign to a table):** `crt_*`, `exm_*`, `gs_*`, `lea_*`, `lst_*`, `lvl_*`, `qua_*`, `trf_*`


## `appuser`

| Column | Inferred type | Description |
|---|---|---|
| `app_login` | varchar | (to confirm with the Data Owner) |
| `app_role` | varchar | (to confirm with the Data Owner) |

## `censusreturn`

_(no columns resolved — confirm from the connector)_


## `district`

| Column | Inferred type | Description |
|---|---|---|
| `dis_name` | varchar | Name. |
| `dis_province` | varchar | (to confirm with the Data Owner) |
| `dis_serial` | integer | Surrogate primary key (system-generated serial). |

## `grade`

| Column | Inferred type | Description |
|---|---|---|
| `gra_code` | varchar | (to confirm with the Data Owner) |
| `gra_desc` | varchar | Description / display text. |
| `gra_serial` | integer | Surrogate primary key (system-generated serial). |

## `learner`

_(no columns resolved — confirm from the connector)_


## `learnerstatus`

_(no columns resolved — confirm from the connector)_


## `msgtext`

_(no columns resolved — confirm from the connector)_


## `school`

| Column | Inferred type | Description |
|---|---|---|
| `sch_capacity` | varchar | (to confirm with the Data Owner) |
| `sch_code` | varchar | (to confirm with the Data Owner) |
| `sch_disref` | varchar | (to confirm with the Data Owner) |
| `sch_grant` | varchar | (to confirm with the Data Owner) |
| `sch_lvlref` | varchar | (to confirm with the Data Owner) |
| `sch_name` | varchar | Name. |
| `sch_opendate` | datetime | (to confirm with the Data Owner) |
| `sch_serial` | integer | Surrogate primary key (system-generated serial). |
| `sch_timestamp` | datetime | Row last-modified timestamp (audit). |
| `sch_userid` | varchar | User who last modified the row (audit). |

## `setting`

| Column | Inferred type | Description |
|---|---|---|
| `set_name` | varchar | Name. |
| `set_value` | integer | (to confirm with the Data Owner) |

## `teacher`

| Column | Inferred type | Description |
|---|---|---|
| `tea_name` | varchar | Name. |
| `tea_number` | integer | (to confirm with the Data Owner) |
| `tea_postdate` | datetime | (to confirm with the Data Owner) |
| `tea_quaref` | varchar | (to confirm with the Data Owner) |
| `tea_schref` | varchar | (to confirm with the Data Owner) |
| `tea_serial` | integer | Surrogate primary key (system-generated serial). |
| `tea_timestamp` | datetime | Row last-modified timestamp (audit). |
| `tea_userid` | varchar | User who last modified the row (audit). |

## `transfer`  _(via DML; not in inventory — confirm)_

_(no columns resolved — confirm from the connector)_
