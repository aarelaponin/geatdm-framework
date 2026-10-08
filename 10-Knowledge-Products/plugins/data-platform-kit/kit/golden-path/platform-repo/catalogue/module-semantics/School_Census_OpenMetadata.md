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
| `dis_id` | integer | Surrogate primary key (system-generated). |
| `dis_name` | varchar | Name. |
| `dis_province` | varchar | (to confirm with the Data Owner) |

## `grade`

| Column | Inferred type | Description |
|---|---|---|
| `gra_code` | varchar | (to confirm with the Data Owner) |
| `gra_desc` | varchar | Description / display text. |
| `gra_id` | integer | Surrogate primary key (system-generated). |

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
| `sch_changed_at` | datetime | Row last-modified timestamp (audit). |
| `sch_changed_by` | varchar | User who last modified the row (audit). |
| `sch_code` | varchar | (to confirm with the Data Owner) |
| `sch_dis_id` | integer | Foreign-key reference. |
| `sch_grant` | varchar | (to confirm with the Data Owner) |
| `sch_id` | integer | Surrogate primary key (system-generated). |
| `sch_lvl_id` | integer | Foreign-key reference. |
| `sch_name` | varchar | Name. |
| `sch_opendate` | datetime | (to confirm with the Data Owner) |

## `setting`

| Column | Inferred type | Description |
|---|---|---|
| `set_name` | varchar | Name. |
| `set_value` | integer | (to confirm with the Data Owner) |

## `teacher`

| Column | Inferred type | Description |
|---|---|---|
| `tea_changed_at` | datetime | Row last-modified timestamp (audit). |
| `tea_changed_by` | varchar | User who last modified the row (audit). |
| `tea_id` | integer | Surrogate primary key (system-generated). |
| `tea_name` | varchar | Name. |
| `tea_number` | integer | (to confirm with the Data Owner) |
| `tea_postdate` | datetime | (to confirm with the Data Owner) |
| `tea_qua_id` | integer | Foreign-key reference. |
| `tea_sch_id` | integer | Foreign-key reference. |

## `transfer`  _(via DML; not in inventory — confirm)_

_(no columns resolved — confirm from the connector)_
