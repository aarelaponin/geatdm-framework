{{ config(tags=['dq:accuracy'], meta={'dq_dimension':'accuracy','control':'DQC-S6-01','recon':'census_vs_register'}) }}
-- Accuracy reconciliation: Learners on the census return vs active learners in the learner register, within tolerance
-- TODO: replace with the real cross-source comparison (declared vs authoritative aggregate,
--       within an agreed tolerance). Until then this is an OPEN control, not a green check.
-- Track it in quality/thresholds/mart_school__enrolment_summary.yml (accuracy: not_implemented).
select 1 as failing
where 1 = 0   -- <- placeholder; implement the reconciliation
