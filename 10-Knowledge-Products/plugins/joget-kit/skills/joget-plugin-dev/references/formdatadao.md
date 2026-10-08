# FormDataDao API Reference

Full API contract for `org.joget.apps.form.dao.FormDataDao` as implemented in
`FormDataDaoImpl` (Joget DX 8.1). All signatures verified against the source in
`wflow-core/src/main/java/org/joget/apps/form/dao/` of the public repository
`https://github.com/jogetworkflow/jw-community`.

---

## Getting the Bean

Always obtain via Spring ApplicationContext — never instantiate directly:

```java
FormDataDao formDataDao = (FormDataDao)
    AppUtil.getApplicationContext().getBean("formDataDao");
if (formDataDao == null) {
    LogUtil.error(CLASS_NAME, null, "formDataDao bean not available");
    return;
}
```

---

## Field Naming: The c_ Rule

The `c_` prefix is **a database column name only**, added automatically by Hibernate.

| Context | Use |
|---------|-----|
| Java code (`getProperty`, `setProperty`, HQL) | `transaction_date` ✓ |
| MySQL column name | `c_transaction_date` |
| `FormRow.getProperty("x")` | `"x"` (no prefix) |
| HQL condition | `e.customProperties.transaction_date` |

**Never write `c_transaction_date` in Java code.** The ORM translates automatically.

---

## Method Reference

### load()

```java
// By Form object
FormRow load(Form form, String primaryKey)

// By IDs (prefer this in plugins)
FormRow load(String formDefId, String tableName, String primaryKey)
```

Returns `null` if row does not exist. Transactional.

```java
// Example
FormRow row = formDataDao.load("feeReconciliation", "feeReconciliation", recordId);
if (row == null) {
    // record not found
}
String status = row.getProperty("processing_status");
```

### loadWithoutTransaction()

```java
FormRow loadWithoutTransaction(Form form, String primaryKey)
FormRow loadWithoutTransaction(String formDefId, String tableName, String primaryKey)
```

**Note (v5+):** Since Joget v5, `loadWithoutTransaction()` is functionally identical to `load()` — it is transactional. The name is kept for backward compatibility only. Use either method; they behave the same.

### loadByTableNameAndColumnName()

```java
FormRow loadByTableNameAndColumnName(String tableName, String columnName, String primaryKey)
```

`columnName` is **not used** — the method loads by primary key regardless. The parameter exists for legacy reasons only. Prefer `load()` over this method.

---

### find()

```java
FormRowSet find(String formDefId, String tableName,
                String condition, Object[] params,
                String sort, Boolean desc,
                Integer start, Integer rows)

FormRowSet find(Form form,
                String condition, Object[] params,
                String sort, Boolean desc,
                Integer start, Integer rows)
```

**Parameters:**

| Param | Notes |
|-------|-------|
| `formDefId` | The Joget form definition ID (no `app_fd_` prefix) |
| `tableName` | Usually same as `formDefId` unless the form has a custom table name |
| `condition` | HQL WHERE clause starting with `WHERE` or `AND`. Use `""` for no filter. |
| `params` | Ordinal parameters matching `?1`, `?2`, ... in condition. Use `new Object[0]` for none. |
| `sort` | Field ID (no `c_` prefix). Standard fields used as-is; custom fields auto-prefixed. |
| `desc` | `Boolean.TRUE` for descending, `Boolean.FALSE` for ascending |
| `start` | Zero-based offset (null = 0) |
| `rows` | Max rows to return (null = all) |

**Sort field rules** (from `internalFind` source):

Standard fields used **as-is** (no auto-prefix): `id`, `dateCreated`, `dateModified`, `createdBy`, `createdByName`, `modifiedBy`, `modifiedByName`

All other field names → auto-prefixed with `customProperties.` in the ORDER BY clause.

**HQL condition syntax:**

```java
// Single condition
String condition = "WHERE e.customProperties.processing_status = ?1";
Object[] params = new Object[]{"pending"};

// Multiple conditions
String condition = "WHERE e.customProperties.batch_id = ?1 AND e.customProperties.amount > ?2";
Object[] params = new Object[]{batchId, minAmount};

// No filter
String condition = "";
Object[] params = new Object[0];
```

**Example:**

```java
FormRowSet rows = formDataDao.find(
    "feeReconciliation",           // formDefId
    "feeReconciliation",           // tableName
    "WHERE e.customProperties.processing_status = ?1",
    new Object[]{"pending"},
    "dateCreated",             // sort field
    Boolean.FALSE,             // ascending
    0,                         // start
    100                        // max rows
);

for (FormRow row : rows) {
    String id = row.getId();
    String status = row.getProperty("processing_status");
    String amount = row.getProperty("amount");
}
```

---

### count()

```java
Long count(String formDefId, String tableName, String condition, Object[] params)
Long count(Form form, String condition, Object[] params)
```

**CRITICAL BUG — condition must be `""` not `null`:**

From `internalCount` source:
```java
String newCondition = StringUtil.replaceOrdinalParameters(condition, params);
Query q = session.createQuery(processQuery("SELECT COUNT(*) FROM " + tableName + " e " + newCondition));
```

There is **no null check**. If `condition` is `null`, `replaceOrdinalParameters(null, ...)` returns `null`, which is then concatenated as the string `"null"`, producing:

```
SELECT COUNT(*) FROM app_fd_feeReconciliation e null
```

This is **invalid HQL** and throws a runtime exception. Always pass `""` for no condition.

```java
// CORRECT
Long total = formDataDao.count("feeReconciliation", "feeReconciliation", "", new Object[0]);

// WRONG — throws HQL exception at runtime
Long total = formDataDao.count("feeReconciliation", "feeReconciliation", null, null);

// With filter
Long filtered = formDataDao.count(
    "feeReconciliation", "feeReconciliation",
    "WHERE e.customProperties.processing_status = ?1",
    new Object[]{"pending"}
);
```

---

### findPrimaryKey()

```java
String findPrimaryKey(String formDefId, String tableName, String fieldName, String value)
String findPrimaryKey(Form form, String fieldName, String value)
```

Returns the `id` (primary key) of the first row where `fieldName = value`. Returns `null` if not found. Internally uses `ORDER BY e.dateCreated` and `LIMIT 1`.

```java
String pk = formDataDao.findPrimaryKey("institution", "institution", "registerNumber", "INS-00217");
```

---

### saveOrUpdate()

```java
void saveOrUpdate(String formDefId, String tableName, FormRowSet rowSet)
void saveOrUpdate(Form form, FormRowSet rowSet)
```

Creates or updates rows. The `id` field on each `FormRow` determines create vs update:
- Row with existing `id` → UPDATE
- Row with new `id` (or UUID auto-generated) → INSERT

**Critical rules:**

1. **formDefId must not be null.** When `formDefId=null` is passed, Hibernate cannot build the correct schema mapping and the save may silently write no custom fields.

2. **setPropertySafe rule:** `setPropertySafe(row, "fieldId", value)` is a helper method (not on `FormRow` itself) that skips the set when `value` is null. This means a missing form column only causes an error when the value is **non-null**. If you have a field that Joget doesn't know about AND you set a non-null value, `saveOrUpdate()` fails silently for the entire row. Always create the form field in Joget Form Builder FIRST.

3. `FormRow.setProperty(key, value)` sets a property directly; `setPropertySafe` (utility) skips null values.

**Example — standard save:**

```java
FormRowSet rowSet = new FormRowSet();
FormRow row = new FormRow();
row.setId(UUID.randomUUID().toString());       // new record
// OR: row.setId(existingId);                  // update existing
row.setProperty("processing_status", "processed");
row.setProperty("amount", "12345.67");
row.setProperty("payment_ref", "PAY-000123");
rowSet.add(row);

formDataDao.saveOrUpdate("feeReconciliation", "feeReconciliation", rowSet);
```

**Example — REQUIRES_NEW transaction pattern for batch saves:**

When saving many records independently (pipeline style), use `@Transactional(propagation = REQUIRES_NEW)` on the save method so each record commits independently and a single failure does not roll back the entire batch:

```java
@Transactional(propagation = Propagation.REQUIRES_NEW)
public void persistRow(String formDefId, String tableName, FormRow row) {
    FormRowSet rowSet = new FormRowSet();
    rowSet.add(row);
    formDataDao.saveOrUpdate(formDefId, tableName, rowSet);
}
```

This is the pattern a production batch persister uses.

---

### updateSchema()

```java
void updateSchema(String formDefId, String tableName, FormRowSet rowSet)
void updateSchema(Form form, FormRowSet rowSet)
```

Forces Hibernate to inspect the schema and create/alter the table without actually saving data. Use this to ensure a table exists before loading from it. Useful when you need the schema updated but have no data to save yet.

---

### delete()

```java
void delete(String formDefId, String tableName, String[] primaryKeyValues)
void delete(String formDefId, String tableName, FormRowSet rows)
void delete(Form form, String[] primaryKeyValues)
```

Deletes rows by primary key array or by a `FormRowSet`. The second String-based overload is available from v8+.

```java
// Delete by IDs
formDataDao.delete("feeReconciliation", "feeReconciliation", new String[]{id1, id2});

// Delete by FormRowSet
FormRowSet toDelete = formDataDao.find(...);
formDataDao.delete("feeReconciliation", "feeReconciliation", toDelete);
```

---

### findCustomQuery()

```java
List<Map<String, Object>> findCustomQuery(
    String formDefId, String tableName,
    String[] fields,          // SELECT fields, e.g. {"e.customProperties.status", "COUNT(e.id)"}
    String[] alias,           // Aliases matching fields array for result map keys
    String[] joins,           // Table names to join (without app_fd_ prefix)
    String condition,         // HQL WHERE clause
    Object[] params,
    String[] groupBys,        // GROUP BY fields
    String havingCondition,   // HAVING clause
    BigDecimal[] havingParams,
    String sort,
    Boolean desc,
    Integer start,
    Integer rows
)
```

Use when you need aggregation, JOINs, or custom SELECT fields. Returns `List<Map<String, Object>>` rather than `FormRowSet`.

```java
// Count by status
List<Map<String, Object>> counts = formDataDao.findCustomQuery(
    "feeReconciliation", "feeReconciliation",
    new String[]{"e.customProperties.processing_status", "COUNT(e.id)"},
    new String[]{"status", "count"},
    null,   // no joins
    "",     // no condition
    new Object[0],
    new String[]{"e.customProperties.processing_status"},  // GROUP BY
    null,   // no HAVING
    null,
    null, null, null, null
);
for (Map<String, Object> row : counts) {
    String status = (String) row.get("status");
    String count = (String) row.get("count");
}
```

---

### Cache Management

```java
void clearFormCache(Form form)
void clearFormTableCache(String tableName)  // tableName without app_fd_ prefix
```

Use after JDBC inserts to force Hibernate to re-read the schema from the database. Required when mixing JDBC (direct SQL) and Hibernate (FormDataDao) in the same plugin — see Section "Cache Coherency" in the main development guide.

---

## 5 Most Common Operations — Templates

### 1. Load a single record by ID

```java
FormDataDao dao = (FormDataDao) AppUtil.getApplicationContext().getBean("formDataDao");
FormRow row = dao.load("myFormId", "myFormId", primaryKey);
if (row != null) {
    String value = row.getProperty("my_field");
}
```

### 2. List records matching a condition

```java
FormRowSet rows = dao.find(
    "myFormId", "myFormId",
    "WHERE e.customProperties.status = ?1",
    new Object[]{"active"},
    "dateCreated", Boolean.FALSE,
    0, 50
);
```

### 3. Count records (with safe empty condition)

```java
Long total = dao.count("myFormId", "myFormId", "", new Object[0]);
Long filtered = dao.count("myFormId", "myFormId",
    "WHERE e.customProperties.status = ?1", new Object[]{"active"});
```

### 4. Create a new record

```java
FormRowSet rowSet = new FormRowSet();
FormRow row = new FormRow();
row.setId(UUID.randomUUID().toString());
row.setProperty("field_one", value1);
row.setProperty("field_two", value2);
rowSet.add(row);
dao.saveOrUpdate("myFormId", "myFormId", rowSet);
```

### 5. Update an existing record

```java
FormRow existing = dao.load("myFormId", "myFormId", recordId);
if (existing != null) {
    existing.setProperty("status", "done");
    FormRowSet rowSet = new FormRowSet();
    rowSet.add(existing);
    dao.saveOrUpdate("myFormId", "myFormId", rowSet);
}
```
