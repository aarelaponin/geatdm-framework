# CAD — <BB-ID> <Building Block Name>
Version: <n> | Status: Draft/Approved | FR coverage: <module §4 ranges, cumulative>
Amendment log: | Date | Slice | Sections touched |

## 1. Component Charter
<One paragraph: owns / does-not-own (module §2.3.3 verbatim) / dependency position.>

## 2. Data Model
### 2.1 Reference-model alignment
| Component entity | Reference-model source (file :: entity) | Divergence + reason |
|---|---|---|
Transactional entities without the subject, service and period keys (entity + justification):
Country handling decision (universal NULL / ISO-3 / FK omitted):

### 2.2 Entity inventory
| Entity | Joget table | Kind | PK strategy | Parent | Notes |
|---|---|---|---|---|---|
Kind ∈ {main, child, junction, MD-lookup, config-catalogue, log/event}

### 2.3 State machines (one per case-bearing entity)
Entity: <name>
States: …  Terminal: …
| From | To | Trigger/actor | Guard | Guard realised as |
|---|---|---|---|---|

## 3. Configuration vs Runtime split
| Concern | Realisation | Generator skill |
|---|---|---|
### Plugin budget
| Plugin ID | Type | Forcing FR | DAO reads | DAO writes | Complexity |
|---|---|---|---|---|---|

## 4. Interface contracts
| Interface | Direction | Mechanism | Contract |
|---|---|---|---|

## 5. Userview & persona map
| Persona (module §3.2) | Category | Menus | Permission |
|---|---|---|---|

## 6. NFR realisation notes
| NFR | Design response (one line) |
|---|---|

## 7. Feature decomposition
| Feature ID | Name | FR coverage | Entities | Depends on |
|---|---|---|---|---|
Completeness: slice FRs not covered (must be empty or justified):
