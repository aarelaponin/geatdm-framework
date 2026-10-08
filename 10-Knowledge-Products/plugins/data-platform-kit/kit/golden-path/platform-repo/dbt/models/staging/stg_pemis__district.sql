-- stg_pemis__district  (staging: 1:1 clean of one source table, no joins)
with source as (
    select * from {{ source('bronze', 'pemis__district') }}
)
select
    cast(`dis_serial` as Int64) as `district_id`,
    `dis_name` as `district`,
    `dis_province` as `province`
from source
