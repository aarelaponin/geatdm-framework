-- stg_pemis__censusreturn  (staging: 1:1 clean of one source table, no joins)
with source as (
    select * from {{ source('bronze', 'pemis__censusreturn') }}
)
select
    cast(`crt_schref` as Int64) as `school_id`,
    cast(`crt_year` as Int16) as `census_year`,
    cast(`crt_total` as Int32) as `learners_enrolled`,
    cast(`crt_teachers` as Int32) as `teachers_in_post`
from source
