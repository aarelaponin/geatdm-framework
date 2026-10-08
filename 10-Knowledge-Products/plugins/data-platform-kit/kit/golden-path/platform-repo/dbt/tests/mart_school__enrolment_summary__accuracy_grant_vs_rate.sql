{{ config(tags=['dq:accuracy'], meta={'dq_dimension':'accuracy','control':'DQC-S6-01','recon':'grant_vs_rate'}) }}
-- Accuracy reconciliation: Capitation grant equals learners enrolled times the year's per-learner rate, within tolerance (a rule across two fields)
-- TODO: replace with the real cross-source comparison (declared vs authoritative aggregate,
--       within an agreed tolerance). Until then this is an OPEN control, not a green check.
-- Track it in quality/thresholds/mart_school__enrolment_summary.yml (accuracy: not_implemented).
select 1 as failing
where 1 = 0   -- <- placeholder; implement the reconciliation
