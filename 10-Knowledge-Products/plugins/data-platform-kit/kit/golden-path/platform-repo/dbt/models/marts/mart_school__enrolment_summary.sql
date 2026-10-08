-- mart_school__enrolment_summary  (mart: consumer-facing; composes from int_, does not re-join raw sources)
with base as (
    select * from {{ ref('int_school__master') }}
)
select
    school_code,
    school_name,
    district,
    capacity,
    capitation_grant,
    learners_enrolled,
    teachers_in_post,
    _extracted_at
from base
