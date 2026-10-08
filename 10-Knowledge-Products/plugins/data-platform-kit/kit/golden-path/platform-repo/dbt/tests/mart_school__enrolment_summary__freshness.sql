{{ config(tags=['dq:timeliness'], meta={'dq_dimension':'timeliness','control':'DQC-S4-04','tier':'cold'}) }}
-- Timeliness: fails if the freshest row is older than the cold SLA (1440 min).
select max(`_extracted_at`) as freshest
from {{ ref('mart_school__enrolment_summary') }}
having now() - max(`_extracted_at`) > interval 1440 minute
