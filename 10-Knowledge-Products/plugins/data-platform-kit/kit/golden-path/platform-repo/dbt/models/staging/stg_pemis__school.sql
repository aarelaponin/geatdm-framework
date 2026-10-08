-- stg_pemis__school  (staging: 1:1 clean of one source table, no joins)
with source as (
    select * from {{ source('bronze', 'pemis__school') }}
)
select
    cast(`sch_serial` as Int64) as `school_id`,
    `sch_code` as `school_code`,
    `sch_name` as `school_name`,
    cast(`sch_disref` as Int64) as `district_id`,
    cast(`sch_capacity` as Int32) as `capacity`,
    cast(`sch_grant` as Decimal(38,2)) as `capitation_grant`,
    `_extracted_at`
from source
