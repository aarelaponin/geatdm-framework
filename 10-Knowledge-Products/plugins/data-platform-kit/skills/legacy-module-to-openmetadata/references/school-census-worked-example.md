# Worked example — the School Census module (finished output)

_This is the completed, human-finished enrichment of the kit's fixture: 11 tables / 61 columns, recovered from `census.pbl` source only (`../../kit/golden-path/fixtures/school-census/` from this skill's folder, run as step 4 of the golden path). Use it as the quality bar for a finished output — note the concrete business descriptions and the DRAFT/verification caveats._

_Simulated case: Progressa is a fictional country. PEMIS, its tables and its columns are invented; the fixture is a synthetic stand-in for a PowerBuilder library._

---

# School Census — OpenMetadata Semantic Enrichment

**Module:** School Census · legacy PowerBuilder desktop module of PEMIS, Progressa's education management information system (`pemis` database)  
**Status:** DRAFT — descriptions inferred from naming + education-domain knowledge; require Data-Owner confirmation (DQF control DQC-S1-03). Columns listed are those THIS module references, not necessarily the full table schema.

> Load as description enrichment onto the connector-ingested entities (PATCH descriptions via the OpenMetadata SDK, or use as a semantic map). The source's catalogue connector supplies authoritative data types and lengths; 'inferredType' here is a hint only.

Legacy PowerBuilder module with which district offices and head teachers maintain the school census: the school register, learner and teacher records, the annual census return of each school, learner transfers between schools, and the reference lists of districts, grades, school categories, learner statuses and teacher qualifications. It reads/writes the PEMIS database.

**Tables used (11):** `school`, `learner`, `learnerstatus`, `teacher`, `qualification`, `censusreturn`, `transfer`, `district`, `grade`, `level`, `examcandidate`

**What the judgement steps changed against the script's scaffold**

| Step | Change | Why |
|---|---|---|
| Prune framework tables | dropped `appuser`, `setting`, `msgtext` | real tables in the inventory, but the application's framework (sign-in role, a title setting, message texts), not this module's business data |
| Add tables the scaffold missed | added `level`, `qualification` | in the inventory, but named second in a comma join (`FROM school, level`), which the script's `FROM <table>` pattern does not read; their column families were the evidence |
| Add a table seen only as a family | added `examcandidate` (to confirm) | the `exm_*` family appears in a DataWindow with no retrieve and no table name; the inventory does not list it |
| Map the unmapped prefixes | `lea_*` → `learner` (ambiguous: learner / learnerstatus); `lst_*` → `learnerstatus`, `crt_*` → `censusreturn` (initialisms); `trf_*` → `transfer` (table seen only in DML); `lvl_*` → `level`, `qua_*` → `qualification` (tables missed); `exm_*` → `examcandidate` | the script maps a prefix only when it is a literal prefix of exactly one candidate table |
| Ignore noise | `gs_*` | global variables of the application (`gs_login`, `gs_role`), not columns |
| Drop a computed column | `lea_fullname` | folded from the DataWindow computed column `clea_fullname`; it is a display expression, not a database column |


## `school`  —  _REG_

School register of PEMIS. One row per school — public or private — with its code, name, district, level, capacity and the capitation grant it receives. The entity every other record of the module links to. _Confirmed against the inventory (FROM)._

| Column | Inferred type | Description |
|---|---|---|
| `sch_capacity` | integer | Number of learner places the school is approved for. |
| `sch_lvl_id` | integer | School level reference (FK → level: primary, secondary, combined). |
| `sch_code` | varchar | School code — the school's public identifier (e.g. PS-0412), used on every census return. |
| `sch_dis_id` | integer | District reference (FK → district). |
| `sch_grant` | decimal(14,2) | Capitation grant paid to the school for the current year (money). |
| `sch_name` | varchar | Registered name of the school. |
| `sch_opendate` | datetime | Date the school opened or was registered. |
| `sch_id` | integer | Surrogate primary key (system-generated). |
| `sch_changed_at` | datetime | Row last-modified timestamp (audit). |
| `sch_changed_by` | varchar | User who last modified the row (audit). |

## `learner`  —  _REG_

Learner records kept by PEMIS. One row per learner enrolled in a school, with names, date of birth, sex, school, grade, status and admission date. Not the authoritative learner register: PLR is to become that. _Confirmed against the inventory (FROM, UPDATE); its prefix `lea_` was ambiguous (learner / learnerstatus) and mapped by hand._

| Column | Inferred type | Description |
|---|---|---|
| `lea_admdate` | datetime | Date the learner was admitted to the current school. |
| `lea_birth_date` | datetime | Date of birth. |
| `lea_gra_id` | integer | Grade reference (FK → grade). |
| `lea_lst_id` | integer | Learner status reference (FK → learnerstatus: enrolled, transferred, left, completed). |
| `lea_name` | varchar | Given name. |
| `lea_number` | integer | Learner number given by PEMIS (not the PNIA identifier). |
| `lea_sch_id` | integer | School reference (FK → school). |
| `lea_id` | integer | Surrogate primary key (system-generated). |
| `lea_sex` | varchar | Sex as recorded on admission (to confirm the code list with the Data Owner). |
| `lea_surname` | varchar | Family name. |
| `lea_changed_at` | datetime | Row last-modified timestamp (audit). |
| `lea_changed_by` | varchar | User who last modified the row (audit). |

## `learnerstatus`  —  _REFERENCE_

Code list of learner statuses: enrolled, transferred, left, completed. _Confirmed against the inventory (FROM); prefix `lst_` is an initialism, mapped by hand._

| Column | Inferred type | Description |
|---|---|---|
| `lst_code` | varchar | Status code (e.g. TR for transferred). |
| `lst_desc` | varchar | Description / display text. |
| `lst_id` | integer | Surrogate primary key (system-generated). |

## `teacher`  —  _REG_

Teacher records kept by PEMIS. One row per teacher in post, with number, name, school, qualification and posting date. _Confirmed against the inventory (FROM)._

| Column | Inferred type | Description |
|---|---|---|
| `tea_name` | varchar | Teacher's name. |
| `tea_number` | integer | Teacher number (to confirm whether it is the payroll number). |
| `tea_postdate` | datetime | Date of posting to the current school. |
| `tea_qua_id` | integer | Qualification reference (FK → qualification). |
| `tea_sch_id` | integer | School reference (FK → school). |
| `tea_id` | integer | Surrogate primary key (system-generated). |
| `tea_changed_at` | datetime | Row last-modified timestamp (audit). |
| `tea_changed_by` | varchar | User who last modified the row (audit). |

## `qualification`  —  _REFERENCE_

Code list of teacher qualifications. _In the inventory but missed by the extractor (named second in a comma join); added from the `qua_` family._

| Column | Inferred type | Description |
|---|---|---|
| `qua_code` | varchar | Qualification code. |
| `qua_desc` | varchar | Description / display text. |
| `qua_id` | integer | Surrogate primary key (system-generated). |

## `censusreturn`  —  _CENSUS_

Annual school census return. One row per school per census year, as the head teacher submits it: learners by sex, the total, and teachers in post. The module's main written entity. _Confirmed against the inventory (FROM, INSERT, UPDATE); prefix `crt_` is an initialism, mapped by hand._

| Column | Inferred type | Description |
|---|---|---|
| `crt_boys` | varchar | Boys enrolled on the census day. |
| `crt_girls` | varchar | Girls enrolled on the census day. |
| `crt_sch_id` | integer | School reference (FK → school). |
| `crt_id` | integer | Surrogate primary key (system-generated). |
| `crt_submitted` | varchar | Date and time the return was submitted. |
| `crt_teachers` | varchar | Teachers in post on the census day. |
| `crt_total` | varchar | Total learners enrolled — stated to equal boys + girls (verify by data arithmetic). |
| `crt_changed_by` | varchar | User who last modified the row (audit). |
| `crt_year` | integer | Census year the return covers. |

## `transfer`  —  _REG_

Log of learner transfers between schools: one row per move, written when a learner is transferred. _Seen only in an INSERT; not in the inventory — confirm the table exists in the database._

| Column | Inferred type | Description |
|---|---|---|
| `trf_date` | datetime | Date of the transfer. |
| `trf_fromsch` | varchar | School the learner left (FK → school). |
| `trf_lea_id` | integer | Learner reference (FK → learner). |
| `trf_tosch` | varchar | School the learner joined (FK → school). |
| `trf_changed_by` | varchar | User who last modified the row (audit). |

## `district`  —  _REFERENCE_

Code list of education districts, with the province each belongs to. _Confirmed against the inventory (DataWindow; authoritative `dbname` pairs)._

| Column | Inferred type | Description |
|---|---|---|
| `dis_name` | varchar | Name. |
| `dis_province` | varchar | Province the district belongs to. |
| `dis_id` | integer | Surrogate primary key (system-generated). |

## `grade`  —  _REFERENCE_

Code list of grades (1 to 12). _Confirmed against the inventory (DataWindow; authoritative `dbname` pairs)._

| Column | Inferred type | Description |
|---|---|---|
| `gra_code` | varchar | Grade code (e.g. P4). |
| `gra_desc` | varchar | Description / display text. |
| `gra_id` | integer | Surrogate primary key (system-generated). |

## `level`  —  _REFERENCE_

Code list of school levels: primary, secondary, combined. _In the inventory but missed by the extractor (named second in a comma join); added from the `lvl_` family._

| Column | Inferred type | Description |
|---|---|---|
| `lvl_desc` | varchar | Description / display text. |
| `lvl_id` | integer | Surrogate primary key (system-generated). |

## `examcandidate`  —  _EXAMS_

Examination candidates entered by a school: one row per learner per examination session, with the examination centre. Read by the module; owned by PNEA. _Present only as a column family (`exm_*`) in a DataWindow with no retrieve; not in the inventory — confirm the table name with the Data Owner._

| Column | Inferred type | Description |
|---|---|---|
| `exm_centre` | varchar | Examination centre code. |
| `exm_lea_id` | integer | Learner reference (FK → learner). |
| `exm_session` | varchar | Examination session (e.g. 2026-NOV). |

---
### Caveats

- The module also calls shared libraries of the application that were not analysed here — the running application may touch more tables and columns.
- `inferredType` is the script's hint from the column name. In this finished copy `sch_capacity` (integer), `sch_grant` (decimal) and `sch_dis_id` (integer) carry the types `schema_pemis.json` gives them, as a finished copy should; the `crt_*` counts keep the script's hint, `varchar`, though `schema_pemis.json` types them as integers too. Take the real types from the catalogue connector.
- `crt_total = crt_boys + crt_girls` is a stated identity: verify it with `verify-catalogue-semantics --check-identity` on real rows before any indicator uses `crt_total`.
- `transfer` and `examcandidate` are not in the inventory: confirm both with the Data Owner before loading their descriptions.
