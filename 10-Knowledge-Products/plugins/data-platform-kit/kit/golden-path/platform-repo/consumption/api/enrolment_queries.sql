-- Parameterized read queries for the enrolment API. Bind params; never string-build.
-- Generated 2026-10-08.

-- /api/enrolment/district/schools
SELECT school_code, school_name, district, learners_enrolled, teachers_in_post
FROM gold.mart_school__enrolment_summary
WHERE ({{district}} IS NULL OR district = {{district}})
LIMIT {{limit}};

-- /api/enrolment/schools/capacity
SELECT school_code, capacity, learners_enrolled, capitation_grant
FROM gold.mart_school__enrolment_summary
WHERE ({{district}} IS NULL OR district = {{district}})
  AND ({{max_capacity}} IS NULL OR capacity <= {{max_capacity}})
LIMIT {{limit}};
