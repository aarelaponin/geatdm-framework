-- Parameterized read queries for the enrolment API. Bind params; never string-build.
-- Generated 2026-10-08.

-- /api/enrolment/schools
SELECT school_code, school_name, learners_enrolled
FROM gold.mart_school__enrolment_summary
WHERE ({{school_code}} IS NULL OR school_code = {{school_code}})
  AND ({{min_learners}} IS NULL OR learners_enrolled >= {{min_learners}})
LIMIT {{limit}};
