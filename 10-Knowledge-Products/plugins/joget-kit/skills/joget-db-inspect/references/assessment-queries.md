# Ready-made assessment queries (adapt table/column names per app map)

Engine notes: `PG` = PostgreSQL, `MY` = MySQL. Replace `<t>`, `<col>`, `<app>`.

## 1. State snapshot — counts + status distribution per table
```sql
-- per table of interest
SELECT '<t>' AS tbl, COUNT(*) AS rows, MIN(dateCreated) AS first, MAX(dateModified) AS last
FROM app_fd_<t>;

SELECT c_status, COUNT(*) FROM app_fd_<t> GROUP BY c_status ORDER BY 2 DESC;
```

## 2. FK integrity — orphans and childless parents
```sql
-- orphan children (FK value with no parent)
SELECT c.id, c.c_<fk>
FROM app_fd_<child> c
LEFT JOIN app_fd_<parent> p ON p.id = c.c_<fk>
WHERE p.id IS NULL AND COALESCE(c.c_<fk>,'') <> '';

-- mandatory-child check
SELECT p.id FROM app_fd_<parent> p
LEFT JOIN app_fd_<child> c ON c.c_<fk> = p.id
GROUP BY p.id HAVING COUNT(c.id) = 0;
```

## 3. Numeric assertions (acceptance-test pattern)
```sql
-- PG
SELECT id, NULLIF(c_amount,'')::numeric AS amount FROM app_fd_<t> WHERE id = '<code>';
SELECT SUM(COALESCE(NULLIF(c_amount,'')::numeric,0)) FROM app_fd_<t> WHERE c_status='POSTED';
-- MY
SELECT id, CAST(NULLIF(c_amount,'') AS DECIMAL(18,2)) AS amount FROM app_fd_<t> WHERE id = '<code>';
```
Acceptance assertion style: expected value stated in the test, query returns it
exactly; status transition asserted as `c_status = '<EXPECTED>'` plus
`dateModified > <test start>`.

## 4. Read a deployed definition (verify against generated file)
```sql
SELECT json FROM app_form     WHERE appId='<app>' AND formId='<formId>'
  AND appVersion = (SELECT appVersion FROM app_app WHERE appId='<app>' AND published = 1 LIMIT 1);
SELECT json FROM app_datalist WHERE appId='<app>' AND id='<datalistId>' AND appVersion = ...;
SELECT json FROM app_userview WHERE appId='<app>' AND id='<userviewId>' AND appVersion = ...;
```
(MySQL boolean published may be `1`/`true` depending on version — check.)

## 5. Column discovery (when the app map is silent)
```sql
-- PG
SELECT column_name FROM information_schema.columns
WHERE table_name = 'app_fd_<t>' ORDER BY ordinal_position;
-- MY
SHOW COLUMNS FROM app_fd_<t>;
```

## 6. Freshness sweep across a building block
```sql
-- run per table list from the app map; flags what the test run actually touched
SELECT '<t>' tbl, MAX(dateModified) FROM app_fd_<t>;
```
