-- int_school__master  (intermediate: explicit joins / golden record; join keys are contract-tested)
with stg_pemis__school as (
    select * from {{ ref('stg_pemis__school') }}
),
stg_pemis__district as (
    select * from {{ ref('stg_pemis__district') }}
),
stg_pemis__censusreturn as (
    select * from {{ ref('stg_pemis__censusreturn') }}
)
select
    stg_pemis__school.school_code,
    stg_pemis__school.school_id,
    stg_pemis__school.school_name,
    stg_pemis__school.district_id,
    stg_pemis__district.district,
    stg_pemis__school.capacity,
    stg_pemis__school.capitation_grant,
    stg_pemis__censusreturn.learners_enrolled,
    stg_pemis__censusreturn.teachers_in_post,
    stg_pemis__censusreturn.census_year,
    stg_pemis__school._extracted_at
from stg_pemis__school
left join stg_pemis__district on stg_pemis__school.district_id = stg_pemis__district.district_id
left join stg_pemis__censusreturn on stg_pemis__school.school_id = stg_pemis__censusreturn.school_id
