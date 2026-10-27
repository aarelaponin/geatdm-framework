## Section 5: Investment Requirements

*TOGAF ADM Phase F — Migration Planning (Investment Case)*

This section consolidates the indicative cost estimates from the 28 initiatives across three transformation waves into a comprehensive investment framework. It provides a cost estimation methodology, investment summaries by wave and by domain, a funding source mapping that links each investment line to specific programmes, and a sustainability financial model that charts the transition from near-total donor dependency to majority government-funded digital health operations by 2033.

All figures are presented as ranges (low–high) reflecting the uncertainty inherent in 8-year planning horizons in a resource-constrained environment. Costs are in constant 2025 USD unless otherwise noted; actual disbursements will be subject to inflation, exchange rate fluctuations, and procurement outcomes.

---

### 5.1 Cost Estimation Methodology

#### 5.1.1 Basis of Estimates

The investment estimates in this roadmap are derived from four complementary sources, each contributing to different cost components:

**Source 1 — International Benchmarks and Comparables.** Cost ranges for platform deployments (OpenMRS, OpenHIM, OpenCR, DHIS2 Tracker, eLMIS) are benchmarked against documented implementations in comparable Sub-Saharan African countries. Specific references include OpenMRS deployments in Kenya (AMPATH, 130,000+ patients), Rwanda, and Malawi; OpenHIE-aligned HIE implementations in Tanzania and Ethiopia; DHIS2 Tracker EIR national rollouts in Maldives and Rwanda; and OpenELIS Global deployments in Côte d'Ivoire, DRC, and Haiti. Per-facility EHR hardware costs (USD 5,000–15,000) and training costs per trainee (USD 200–2,500 depending on intensity) are drawn from published implementation reports and the e-Health Reference Architecture Chapter 7 maturity model.

**Source 2 — EHSSP Actuals and Progressa-Specific Costs.** Where available, actual costs from the EHSSP programme (about USD 100–150 million total, of which a portion funded digital health systems) inform recurrent cost estimates for facility connectivity (satellite and 4G), hosting, and equipment. The EHSSP experience provides ground-truth data on Progressa procurement timelines, logistics costs, and the price premium associated with operating in a small market with limited local IT supply chains.

**Source 3 — Technical Architecture Specifications.** Hardware requirements (server specifications, tablet counts, network equipment) are derived from the target architecture (D6) and sized for Progressa's known parameters: ~90 public health facilities, 6 regional medical stores, 7 regions, and a population of approximately 2–3 million. Software is open-source throughout (zero licence fees), but implementation, customisation, and support costs are included.

**Source 4 — Expert Estimation.** For components without direct comparables (e.g., MoH-specific governance design TA, EHSSP transition planning), costs are estimated based on standard international consultancy rates for health informatics and public health specialists working in the region, adjusted for Progressa context. Technical assistance rates assume a blend of international specialists (USD 800–1,500/day) and regional experts (USD 400–800/day), with regional expertise preferred where available (e.g., HISP regional node for DHIS2).

#### 5.1.2 Cost Categories

All initiative costs are decomposed into the following standardised categories:

| Category | Description | Typical % of Initiative |
|----------|-------------|------------------------|
| **Technical Assistance (TA)** | International and regional consultants for design, implementation, and knowledge transfer | 35–50% |
| **Hardware and Equipment** | Servers, tablets, routers, solar kits, network equipment, UPS | 15–25% |
| **Training and Capacity Building** | Curriculum development, delivery, materials, per diem, venue costs | 10–20% |
| **Hosting and Connectivity** | Data centre hosting fees, mobile data plans, satellite bridge costs | 5–15% |
| **Software Configuration** | Customisation, mediator development, FHIR adapter development, integration testing | 10–20% |
| **Operational and Coordination** | Meetings, stakeholder engagement, travel, documentation | 5–10% |
| **Contingency** | Unforeseen costs, procurement delays, exchange rate fluctuations | 5–10% (included in initiative ranges) |

#### 5.1.3 Key Assumptions and Caveats

The following assumptions underpin the cost estimates. Deviations from these assumptions will require investment adjustments:

1. **Open-source software throughout.** All platforms (OpenMRS, OpenHIM, OpenCR, DHIS2, HAPI FHIR, Keycloak, OCL, eLMIS) are open-source with zero software licence fees. Costs reflect implementation, customisation, and support — not licencing. If a proprietary platform is selected for any component (e.g., LIS), costs will increase.

2. **Technical assistance rates.** International TA is costed at USD 800–1,500 per day; regional TA (HISP regional node, regional specialists) at USD 400–800 per day. A blended rate of approximately USD 600–1,000 per day is assumed for most initiatives.

3. **Government salary scales.** DHDD and Regional Health Data Officer salaries are estimated at USD 8,000–15,000 per year per position, reflecting competitive public sector rates in Progressa that approach (but do not match) NGO/donor salary levels. Salaries below this range will result in inability to recruit; above this range will strain government budget absorption.

4. **Hardware procurement.** Equipment prices include a 15–25% logistics premium for importation, customs clearance, and in-country distribution. Procurement timelines assume 3–6 months for international tenders.

5. **RDIP infrastructure delivery.** Cost estimates for Wave 2 and Wave 3 assume that RDIP delivers the G-Cloud platform (target 2027) and broadband connectivity to health facilities. If these are delayed, interim hosting and connectivity costs (currently in Wave 1) extend at an estimated USD 50,000–100,000 per additional year.

6. **Inflation and exchange rate.** All costs are in constant 2025 USD. No inflation adjustment is applied to the 8-year estimates. Actual costs in later years (2029–2033) may be 10–20% higher in nominal terms.

7. **Absorption capacity.** The roadmap assumes MoH can effectively absorb USD 1–2M per year in digital health investment, consistent with EHSSP disbursement rates for the digital health component. Exceeding this rate risks procurement bottlenecks, supervision gaps, and poor implementation quality.

8. **Programme management overhead.** A 10% programme management overhead is added to the sum of initiative costs, covering roadmap coordination, M&E, reporting to NDHSC and donors, and financial management. This is conservative relative to the 15–20% typical for World Bank-financed projects, reflecting the assumption that DHDD will absorb programme management functions progressively.

---

### 5.2 Investment Summary by Wave

#### 5.2.1 Wave-Level Summary

| Wave | Period | Initiative Costs (USD) | Programme Mgmt (10%) | **Total (USD)** |
|------|--------|----------------------|---------------------|----------------|
| **Wave 1** | 2025–2026 | 1,640,000–2,760,000 | 164,000–276,000 | **1,804,000–3,036,000** |
| **Wave 2** | 2027–2029 | 2,500,000–4,330,000 | 250,000–433,000 | **2,750,000–4,763,000** |
| **Wave 3** | 2030–2033 | 1,500,000–2,670,000 | 150,000–267,000 | **1,650,000–2,937,000** |
| **Grand Total** | **2025–2033** | **5,640,000–9,760,000** | **564,000–976,000** | **6,204,000–10,736,000** |

**Midpoint estimate: USD 8.5M** over 8 years (2025–2033).

This total is consistent with the Section 3.6.4 strategic investment estimate of USD 7.2–12.9M (which included broader contingency). It is also proportionate to Progressa's health sector context: EHSSP invested about USD 100–150 million in the entire health system over 5 years; this digital health roadmap represents approximately 5–10% of that scale, focused specifically on information systems and integration.

#### 5.2.2 Wave 1 Initiative Detail (2025–2026)

| ID | Initiative | Low (USD) | High (USD) | Primary Funding |
|----|-----------|-----------|------------|-----------------|
| W1-01 | Digital Health Governance (NDHSC + DHDD) | 180,000 | 280,000 | RDIP + Government |
| W1-02 | National Digital Health Strategy | 25,000 | 45,000 | WHO + RDIP |
| W1-03 | Health Data Governance Framework | 35,000 | 55,000 | WHO + RDIP |
| W1-04 | DHIS2 Strengthening | 200,000 | 350,000 | Global Fund + GAVI + WHO + RDIP |
| W1-05 | MPI/Client Registry Pilot | 120,000 | 200,000 | RDIP + WHO |
| W1-06 | eCRVS-NHIS Integration (HIE Platform) | 250,000 | 400,000 | RDIP + Government |
| W1-07 | eLMIS National Rollout | 180,000 | 300,000 | Global Fund + RDIP |
| W1-08 | Broadband Transition & Connectivity Bridge | 350,000 | 600,000 | RDIP + Government + GAVI + Global Fund |
| W1-09 | MoH Cloud Spoke (Interim Hosting) | 60,000 | 110,000 | RDIP |
| W1-10 | Digital Health Workforce Foundation | 200,000 | 350,000 | Global Fund + GAVI + WHO + Government |
| W1-11 | EHSSP Digital Health Transition | 40,000 | 70,000 | EHSSP + RDIP |
| | **Wave 1 Initiative Subtotal** | **1,640,000** | **2,760,000** | |
| | Programme Management (10%) | 164,000 | 276,000 | |
| | **Wave 1 Total** | **1,804,000** | **3,036,000** | |

**Wave 1 annual run rate:** USD 0.9–1.5M per year (18-month wave).

#### 5.2.3 Wave 2 Initiative Detail (2027–2029)

| ID | Initiative | Low (USD) | High (USD) | Primary Funding |
|----|-----------|-----------|------------|-----------------|
| W2-01 | HIE Expansion (Priority Integration Flows) | 280,000 | 480,000 | RDIP + WHO |
| W2-02 | EHR Pilot and Scale (OpenMRS, 15–20 facilities) | 550,000 | 950,000 | WB/AfDB Health Digitisation + Global Fund + GAVI |
| W2-03 | e-NHIS Enhancement (Offline, Mobile, Scaling) | 200,000 | 350,000 | Government + RDIP |
| W2-04 | DHIS2 Tracker EIR National Scale (SPT Transition) | 300,000 | 500,000 | GAVI + WHO + Global Fund |
| W2-05 | Laboratory Information System Deployment | 250,000 | 450,000 | Global Fund + RDIP |
| W2-06 | Electronic IDSR+ National Rollout | 150,000 | 280,000 | WHO + Global Fund + Africa CDC |
| W2-07 | G-Cloud Migration (Sovereign Hosting) | 180,000 | 300,000 | RDIP |
| W2-08 | FHIR Adoption and Terminology Standards | 120,000 | 220,000 | WHO + RDIP |
| W2-09 | Digital Health Workforce Scale-Up | 350,000 | 600,000 | Government + Global Fund + GAVI + WHO |
| W2-10 | Cybersecurity Maturation and DR | 120,000 | 200,000 | RDIP + Government |
| | **Wave 2 Initiative Subtotal** | **2,500,000** | **4,330,000** | |
| | Programme Management (10%) | 250,000 | 433,000 | |
| | **Wave 2 Total** | **2,750,000** | **4,763,000** | |

**Wave 2 annual run rate:** USD 0.9–1.6M per year (30-month wave).

#### 5.2.4 Wave 3 Initiative Detail (2030–2033)

| ID | Initiative | Low (USD) | High (USD) | Primary Funding |
|----|-----------|-----------|------------|-----------------|
| W3-01 | EHR Coverage Expansion (30–40 Facilities) | 500,000 | 900,000 | Government + Global Fund + Bilateral |
| W3-02 | Health Data Warehouse and Advanced Analytics | 250,000 | 450,000 | Government + WHO + Bilateral |
| W3-03 | Cross-Border Surveillance and International Reporting | 120,000 | 220,000 | WHO + Africa CDC + Global Fund |
| W3-04 | SPT Retirement and EIR Consolidation | 100,000 | 180,000 | GAVI + WHO |
| W3-05 | Full Integration Maturity (Level 3–4) | 200,000 | 350,000 | RDIP follow-on + Government |
| W3-06 | Sustainability Transition (Budget Absorption) | 150,000 | 250,000 | Government + RDIP follow-on |
| W3-07 | Community-Based Digital Health Services | 180,000 | 320,000 | Global Fund + GAVI + Government |
| | **Wave 3 Initiative Subtotal** | **1,500,000** | **2,670,000** | |
| | Programme Management (10%) | 150,000 | 267,000 | |
| | **Wave 3 Total** | **1,650,000** | **2,937,000** | |

**Wave 3 annual run rate:** USD 0.4–0.7M per year (48-month wave). The declining annual rate reflects the shift from capital establishment to sustained operations, with government budget absorbing an increasing share of recurrent costs.

---

### 5.3 Investment by Domain

The 28 initiatives across three waves can be grouped into seven architectural domains, providing an alternative view of investment allocation that aligns with the EA layer model.

#### 5.3.1 Domain Classification

| Domain | Description | Initiatives Included |
|--------|-------------|---------------------|
| **Governance & Policy** | Institutional structures, strategies, frameworks, transition planning, sustainability | W1-01, W1-02, W1-03, W1-11, W3-06 |
| **Data & Registries** | MPI, terminology services, FHIR standards, health data dictionary, analytics | W1-05, W2-08, W3-02 |
| **Applications & Clinical Systems** | DHIS2, EHR, EIR, LIS, eLMIS, e-NHIS, IDSR+, SPT retirement | W1-04, W1-07, W2-02, W2-03, W2-04, W2-05, W2-06, W3-01, W3-04 |
| **Technology Infrastructure** | Hosting, connectivity, cloud migration, cybersecurity, DR | W1-08, W1-09, W2-07, W2-10 |
| **Integration & Interoperability** | HIE platform, integration flows, cross-border exchange, integration maturity | W1-06, W2-01, W3-03, W3-05 |
| **HR & Capacity Building** | Workforce staffing, training, change management, community health | W1-10, W2-09, W3-07 |
| **Programme Management** | Roadmap coordination, M&E, financial management (10% overhead) | Cross-cutting |

#### 5.3.2 Investment by Domain — Summary Table

| Domain | Initiative Costs (USD) | % of Total | Programme Mgmt Share (10%) | **Total (USD)** |
|--------|----------------------|-----------|---------------------------|----------------|
| **Governance & Policy** | 430,000–700,000 | 7.6–7.2% | 43,000–70,000 | **473,000–770,000** |
| **Data & Registries** | 490,000–870,000 | 8.7–8.9% | 49,000–87,000 | **539,000–957,000** |
| **Applications & Clinical Systems** | 2,430,000–4,260,000 | 43.1–43.6% | 243,000–426,000 | **2,673,000–4,686,000** |
| **Technology Infrastructure** | 710,000–1,210,000 | 12.6–12.4% | 71,000–121,000 | **781,000–1,331,000** |
| **Integration & Interoperability** | 850,000–1,450,000 | 15.1–14.9% | 85,000–145,000 | **935,000–1,595,000** |
| **HR & Capacity Building** | 730,000–1,270,000 | 12.9–13.0% | 73,000–127,000 | **803,000–1,397,000** |
| **Programme Management** | — | — | 564,000–976,000 | *included above* |
| **Grand Total** | **5,640,000–9,760,000** | **100%** | **564,000–976,000** | **6,204,000–10,736,000** |

#### 5.3.3 Domain Allocation Analysis

The domain breakdown reveals a deliberate investment pattern:

**Applications and Clinical Systems (43%).** The largest investment domain, driven primarily by EHR deployment (W2-02 and W3-01 together represent USD 1.05–1.85M), DHIS2 strengthening and EIR scaling, eLMIS rollout, LIS deployment, and e-NHIS enhancement. This is appropriate: applications are the layer that generates health data and delivers clinical and programme value. However, applications only succeed if the enabling layers (governance, data, integration, infrastructure, workforce) are in place — hence the sequencing logic that positions governance and infrastructure before applications in Wave 1.

**Integration and Interoperability (15%).** The second-largest investment area reflects the central architectural principle that connected systems are exponentially more valuable than siloed ones. The HIE platform (W1-06, W2-01) alone represents USD 530,000–880,000, plus cross-border surveillance and full integration maturity initiatives. This investment transforms MoH from a collection of independent systems into an interoperable health information ecosystem.

**HR and Capacity Building (13%).** Workforce investment (USD 730,000–1,270,000) is consistent with the benchmark that training should represent 10–20% of implementation budgets. The workforce domain covers DHDD staffing, Regional Health Data Officers, facility training, change champions, and community digital health services. Underinvestment in this domain has been identified as the primary reason for the gap between Progressa's ~90% EHR readiness and ~90% paper-based operations.

**Technology Infrastructure (12%).** Infrastructure costs are moderated by three factors: RDIP funds the G-Cloud platform and broadband backbone (not costed in this roadmap), open-source software eliminates licence fees, and interim hosting at PDGA DC is low-cost. The largest infrastructure cost is the connectivity bridge (W1-08, USD 350,000–600,000) — the price of protecting facility operations during the EHSSP-to-RDIP transition.

**Data and Registries (9%).** Data layer investment includes the MPI (W1-05), terminology and standards maturation (W2-08), and the health data warehouse (W3-02). These are foundational shared services that enable all applications and integration flows. The relatively modest cost reflects the use of open-source platforms (OpenCR, OCL, PostgreSQL/Superset).

**Governance and Policy (8%).** Governance investment is front-loaded in Wave 1 (NDHSC, DHDD, data governance framework, strategy, EHSSP transition) with a sustainability transition component in Wave 3. This is the lowest-cost domain in absolute terms but arguably the highest-impact: without governance, all technical investments risk repeating the fragmented, donor-driven pattern of the past.

#### 5.3.4 CAPEX vs. OPEX Breakdown by Wave

Each wave's investment can be decomposed into capital expenditure (one-time establishment costs) and operational expenditure (recurring annual costs that must be sustained beyond project funding):

| Wave | CAPEX (USD) | OPEX/Year (USD) | Duration | Total OPEX (USD) | Wave Total (USD) |
|------|-------------|-----------------|----------|-----------------|------------------|
| **Wave 1** (2025–2026) | 1,100,000–1,850,000 | 360,000–610,000 | 1.5 yrs | 540,000–910,000 | 1,640,000–2,760,000 |
| **Wave 2** (2027–2029) | 1,500,000–2,600,000 | 400,000–690,000 | 2.5 yrs | 1,000,000–1,730,000 | 2,500,000–4,330,000 |
| **Wave 3** (2030–2033) | 600,000–1,100,000 | 225,000–390,000 | 4 yrs | 900,000–1,570,000 | 1,500,000–2,670,000 |
| **Total** | **3,200,000–5,550,000** | — | — | **2,440,000–4,210,000** | **5,640,000–9,760,000** |

**Key CAPEX components:** TA for system implementation and design, hardware procurement, software configuration, platform deployments, one-time training development.

**Key OPEX components:** DHDD and RHDO salaries, hosting fees (PDGA DC then G-Cloud), connectivity costs (satellite bridge, 4G data plans), annual training and refresher programmes, software maintenance and support contracts, monitoring and security operations.

The CAPEX-to-OPEX ratio shifts from approximately 2:1 in Wave 1 (heavily front-loaded establishment) to approximately 0.7:1 in Wave 3 (dominated by recurrent staffing and operations). This shift is the core sustainability challenge: CAPEX is typically donor-funded through project financing, while OPEX must eventually be absorbed into government recurrent budgets.

---

### 5.4 Funding Source Mapping

#### 5.4.1 Funding Sources — Profiles and Alignment

This section maps each investment line to one or more specific funding programmes based on programme mandates, confirmed allocations, and strategic alignment. The mapping reflects the current funding landscape (as of early 2025) and includes both confirmed/active programmes and anticipated/proposed funding windows.

| Funding Source | Status | Period | Mandate Alignment | Investment Type |
|---------------|--------|--------|-------------------|-----------------|
| **RDIP/DTFA** | Active (SOP-1) | Five-year | Infrastructure, interoperability, digital ID, G-Cloud, institutional strengthening | CAPEX + establishment TA |
| **Global Fund NFM4** | Active | 2024–2027 | HIV/TB/Malaria, RSSH, supply chain, surveillance, laboratory | CAPEX + programme TA |
| **Global Fund NFM5** | Anticipated | 2028–2030 | Continuation + expanded digital health RSSH | CAPEX + programme TA |
| **GAVI** | Active + next cycle | Ongoing | Immunisation data (EIR), cold chain, HSS | CAPEX + TA |
| **WHO CCS** | Active | Five-year | Normative support, governance design, data standards, IHR | TA (in-kind + project) |
| **EHSSP (residual)** | Closing Aug 2025 | To Oct 2025 | Transition planning as legitimate closing activity | Final disbursement |
| **Government of Progressa** | Ongoing | Permanent | Recurrent staffing, operations, e-NHIS (presidential priority) | OPEX + co-financing |
| **Dedicated Health Digitisation (WB/AfDB)** | Proposed | 2027–2032 | Health sector investment lending for EHR, digital health scale-up | CAPEX |
| **Bilateral Donors** | Variable | 2029+ | Innovation, expansion, specific technical areas | CAPEX + TA |
| **Africa CDC** | Emerging | 2027+ | Event-based surveillance, cross-border health security | Programme TA |
| **HISP regional node** | Active | Ongoing | DHIS2 technical support, training, regional coordination | In-kind + project TA |

#### 5.4.2 Funding Source Mapping by Wave

**Wave 1 Funding (USD 1,640,000–2,760,000)**

| Funding Source | Initiatives Supported | Estimated Contribution (USD) | % of Wave |
|---------------|----------------------|------------------------------|-----------|
| RDIP | W1-01, W1-02, W1-03, W1-05, W1-06, W1-07, W1-08, W1-09, W1-11 | 600,000–1,000,000 | 36% |
| Global Fund NFM4 | W1-04, W1-07, W1-10 | 250,000–450,000 | 16% |
| Government of Progressa | W1-01, W1-06, W1-08 | 200,000–400,000 | 14% |
| GAVI | W1-04, W1-08, W1-10 | 100,000–200,000 | 7% |
| WHO | W1-02, W1-03, W1-05, W1-10 | 80,000–150,000 | 5% |
| EHSSP (residual) | W1-11 | 25,000–40,000 | 1% |
| HISP regional node | W1-04 | In-kind/nominal | — |
| **Wave 1 Total** | | **1,255,000–2,240,000** | |
| **Unallocated / contingency gap** | | **385,000–520,000** | **~20%** |

The Wave 1 unallocated portion (approximately 20%) represents the programme management overhead plus the upper range of initiative costs that may require additional resource mobilisation. This gap is addressed through the Wave 1 funding strategy: RDIP reallocation requests, government bridge funding negotiations, and co-financing arrangements with Global Fund and GAVI during their active grant periods.

**Wave 2 Funding (USD 2,500,000–4,330,000)**

| Funding Source | Initiatives Supported | Estimated Contribution (USD) | % of Wave |
|---------------|----------------------|------------------------------|-----------|
| RDIP | W2-01, W2-03, W2-05, W2-07, W2-08, W2-10 | 600,000–1,000,000 | 23% |
| Dedicated Health Digitisation (WB/AfDB) | W2-02 | 350,000–600,000 | 14% |
| Global Fund NFM4 completion + NFM5 | W2-04, W2-05, W2-06, W2-09 | 350,000–600,000 | 14% |
| Government of Progressa | W2-03, W2-09, W2-10 | 300,000–500,000 | 12% |
| GAVI (next cycle) | W2-02, W2-04, W2-09 | 200,000–350,000 | 8% |
| WHO | W2-01, W2-04, W2-06, W2-08, W2-09 | 100,000–200,000 | 4% |
| Africa CDC | W2-06 | 30,000–60,000 | 1% |
| **Wave 2 Total** | | **1,930,000–3,310,000** | |
| **Unallocated / contingency gap** | | **570,000–1,020,000** | **~23%** |

The Wave 2 gap is larger because it includes the proposed Dedicated Health Digitisation funding (not yet secured) and expanded government contributions. Securing the WB/AfDB health sector digitisation proposal during Wave 1 is a critical financing milestone.

**Wave 3 Funding (USD 1,500,000–2,670,000)**

| Funding Source | Initiatives Supported | Estimated Contribution (USD) | % of Wave |
|---------------|----------------------|------------------------------|-----------|
| Government of Progressa | W3-01, W3-02, W3-05, W3-06, W3-07 | 600,000–1,100,000 | 40% |
| Global Fund NFM5 | W3-01, W3-03, W3-07 | 300,000–500,000 | 19% |
| RDIP follow-on / successor | W3-05, W3-06 | 200,000–350,000 | 13% |
| Bilateral Donors | W3-01, W3-02 | 150,000–300,000 | 10% |
| GAVI (next cycle) | W3-04, W3-07 | 100,000–200,000 | 7% |
| WHO | W3-02, W3-03, W3-04 | 80,000–150,000 | 5% |
| Africa CDC | W3-03 | 30,000–60,000 | 2% |
| **Wave 3 Total** | | **1,460,000–2,660,000** | |
| **Unallocated / contingency gap** | | **40,000–10,000** | **~1%** |

Wave 3 has the smallest gap because government contributions increase substantially and the investment volume decreases as the programme shifts from establishment to sustained operations.

#### 5.4.3 Initiative-Level Funding Matrix

The following matrix provides a complete mapping of all 28 initiatives to funding sources, enabling programme-level budget planning:

| Initiative | RDIP | Global Fund | GAVI | WHO | Gov't | WB/AfDB New | Bilateral | Africa CDC | EHSSP |
|-----------|--------|------------|------|-----|-------|-------------|-----------|------------|--------|
| W1-01 Governance | ● | | | | ● | | | | |
| W1-02 Strategy | ● | | | ● | | | | | |
| W1-03 Data Gov. | ● | | | ● | | | | | |
| W1-04 DHIS2 | ● | ● | ● | ● | | | | | |
| W1-05 MPI | ● | | | ● | | | | | |
| W1-06 HIE/eCRVS | ● | | | | ● | | | | |
| W1-07 eLMIS | ● | ● | | | | | | | |
| W1-08 Connectivity | ● | ● | ● | | ● | | | | |
| W1-09 Cloud Spoke | ● | | | | | | | | |
| W1-10 Workforce | | ● | ● | ● | ● | | | | |
| W1-11 Transition | ● | | | | | | | | ● |
| W2-01 HIE Expand | ● | | | ● | | | | | |
| W2-02 EHR | | ● | ● | | | ● | | | |
| W2-03 e-NHIS | ● | | | | ● | | | | |
| W2-04 EIR Scale | | ● | ● | ● | | | | | |
| W2-05 LIS | ● | ● | | | | | | | |
| W2-06 IDSR+ | | ● | | ● | | | | ● | |
| W2-07 G-Cloud | ● | | | | | | | | |
| W2-08 FHIR/Terms | ● | | | ● | | | | | |
| W2-09 Workforce | | ● | ● | ● | ● | | | | |
| W2-10 Cybersec. | ● | | | | ● | | | | |
| W3-01 EHR Expand | | ● | | | ● | | ● | | |
| W3-02 Analytics | | | | ● | ● | | ● | | |
| W3-03 Cross-Border | | ● | | ● | | | | ● | |
| W3-04 SPT Retire | | | ● | ● | | | | | |
| W3-05 Integration | ● | | | | ● | | | | |
| W3-06 Sustain. | ● | | | | ● | | | | |
| W3-07 Community | | ● | ● | | ● | | | | |

**Legend:** ● = Primary or significant funding contribution from this source.

#### 5.4.4 Consolidated Funding Source Summary (All Waves)

| Funding Source | Wave 1 (USD) | Wave 2 (USD) | Wave 3 (USD) | **Total (USD)** | **% of Total** |
|---------------|-------------|-------------|-------------|----------------|---------------|
| **RDIP** | 600K–1,000K | 600K–1,000K | 200K–350K | **1,400,000–2,350,000** | 22–23% |
| **Global Fund (NFM4+NFM5)** | 250K–450K | 350K–600K | 300K–500K | **900,000–1,550,000** | 14–16% |
| **Government of Progressa** | 200K–400K | 300K–500K | 600K–1,100K | **1,100,000–2,000,000** | 18–19% |
| **GAVI** | 100K–200K | 200K–350K | 100K–200K | **400,000–750,000** | 6–8% |
| **WHO** | 80K–150K | 100K–200K | 80K–150K | **260,000–500,000** | 4–5% |
| **Dedicated Health Digitisation (WB/AfDB)** | — | 350K–600K | — | **350,000–600,000** | 6% |
| **Bilateral Donors** | — | — | 150K–300K | **150,000–300,000** | 2–3% |
| **Africa CDC** | — | 30K–60K | 30K–60K | **60,000–120,000** | 1% |
| **EHSSP (residual)** | 25K–40K | — | — | **25,000–40,000** | <1% |
| **HISP regional node** | In-kind | — | — | **In-kind** | — |
| **Mapped subtotal** | | | | **4,645,000–8,210,000** | **75–77%** |
| **Unallocated / PMO / gap** | | | | **1,559,000–2,526,000** | **23–25%** |
| **Grand Total** | | | | **6,204,000–10,736,000** | **100%** |

The 23–25% unallocated portion comprises: (a) programme management overhead (10% = USD 564,000–976,000), (b) upper-range initiative cost contingency, and (c) a genuine funding gap requiring resource mobilisation. The active funding gap — costs above mapped sources that must be closed — is estimated at USD 500,000–1,000,000 across the full 8-year period, primarily concentrated in Wave 2 where the proposed Dedicated Health Digitisation funding is not yet secured.

#### 5.4.5 Funding Gap Identification

| Gap Area | Wave | Estimated Gap (USD) | Priority | Strategy to Close |
|---------|------|--------------------|---------|--------------------|
| EHR scale-up (if WB/AfDB proposal not secured) | Wave 2 | 350,000–600,000 | **Critical** | Prepare investment case in 2026; alternative: bilateral donors (USAID, GIZ, DFID); reduced scope (10 facilities vs. 20) |
| Programme management overhead (unfunded) | All | 564,000–976,000 | **High** | Integrate into RDIP institutional strengthening; DHDD progressively absorbs; include in donor programme budgets |
| Connectivity bridge overshoot (if RDIP broadband delayed) | Wave 1–2 | 50,000–150,000/yr | **High** | Government emergency allocation; RDIP reallocation; GAVI/GF facility-level co-financing |
| Government salary absorption shortfall | Wave 2–3 | 100,000–250,000/yr | **Medium** | MTEF integration; MoF advocacy; demonstrate DHDD value through performance metrics |
| Wave 3 bilateral donor contributions (unconfirmed) | Wave 3 | 150,000–300,000 | **Medium** | Begin bilateral engagement in 2028; align with health sector investment cases; diversify donor base |

---

### 5.5 Sustainability Financial Model

#### 5.5.1 The Sustainability Challenge

Progressa's digital health landscape is characterised by near-total donor dependency. As of 2025, an estimated 100% of digital health capital investment and approximately 85–90% of digital health recurrent costs are funded by external sources (primarily EHSSP, Global Fund, GAVI, and WHO). The Government of Progressa makes no dedicated budget allocation for digital health information systems; the limited government contribution consists of civil servant salary costs for HMIS staff and facility-level operational budgets that indirectly support data collection.

This dependency creates three structural risks:

1. **Funding cliff risk.** When donor programmes close (as EHSSP does in August 2025), systems face immediate operational disruption. The EHSSP closure threatens four active digital health systems simultaneously.

2. **Strategic fragmentation.** Donor-funded systems are designed to meet programme-specific reporting requirements (Global Fund for HIV/TB/Malaria, GAVI for immunisation) rather than integrated health information needs. This has produced the siloed system landscape documented in the AS-IS assessment.

3. **Ownership deficit.** Systems that are not budgeted by government are not owned by government. Without a government budget line, there is no institutional accountability for system performance, no recurrent maintenance budget, and no mechanism to make investment decisions independent of donor priorities.

The sustainability financial model addresses these risks through a structured transition from donor-funded establishment to government-sustained operations over the 8-year roadmap period.

#### 5.5.2 Co-Financing Strategy: Donors Fund CAPEX, Government Absorbs OPEX

The core sustainability principle is a division of financial responsibility based on cost type:

**Donor responsibility — Capital expenditure (CAPEX):**
- Platform design, implementation, and deployment
- Hardware procurement (servers, tablets, network equipment)
- Technical assistance for system configuration and integration
- One-time training programme development
- G-Cloud migration engineering

**Government responsibility — Operational expenditure (OPEX), absorbed progressively:**
- DHDD and Regional Health Data Officer salaries
- G-Cloud hosting subscription fees
- Facility connectivity costs (post-RDIP broadband delivery)
- System maintenance and software updates
- Annual training and refresher programmes
- Monitoring, security operations, and helpdesk
- e-NHIS operational costs (presidential priority)

This co-financing model is standard practice in international development: donors fund the establishment cost of new systems and institutions, while government commits to sustaining operations once established. The model requires explicit agreement between MoH, MoF, and development partners, formalised through the National Digital Health Strategy (W1-02) and NDHSC governance.

#### 5.5.3 Recurrent Cost Projection

The annual recurrent cost of operating the digital health ecosystem increases as systems are deployed and scaled:

| Cost Category | 2026 (USD) | 2028 (USD) | 2030 (USD) | 2033 (USD) |
|--------------|-----------|-----------|-----------|-----------|
| DHDD staff salaries (6→14 positions) | 60,000 | 120,000 | 140,000 | 150,000 |
| Regional Health Data Officers (3→7) | 20,000 | 50,000 | 60,000 | 70,000 |
| Hosting fees (PDGA DC → G-Cloud) | 10,000 | 30,000 | 40,000 | 45,000 |
| Facility connectivity (bridge → broadband) | 200,000 | 100,000 | 60,000 | 40,000 |
| System maintenance and support | 15,000 | 50,000 | 70,000 | 80,000 |
| Annual training and refresher | 20,000 | 40,000 | 50,000 | 50,000 |
| Monitoring, security, helpdesk | 10,000 | 25,000 | 35,000 | 40,000 |
| e-NHIS operations | 15,000 | 30,000 | 35,000 | 40,000 |
| **Total annual OPEX** | **350,000** | **445,000** | **490,000** | **515,000** |

**Notes on the recurrent cost trajectory:**

- Facility connectivity declines sharply as RDIP broadband replaces expensive satellite connections. Satellite costs approximately USD 200–400/month per facility; broadband is expected at USD 50–100/month.
- Staffing costs increase as DHDD and RHDO positions are filled but stabilise once full complement is reached.
- System maintenance increases as more platforms go live but benefits from open-source cost structure (no licence fees).
- The steady-state annual OPEX of approximately USD 500,000–550,000 represents the minimum government commitment required by 2033 to sustain the digital health ecosystem without project-based donor funding for core operations.

#### 5.5.4 Government Budget Absorption Trajectory

The following model shows the progressive shift from donor-funded to government-funded recurrent operations:

| Year | Total OPEX (USD) | Government Funded (USD) | Government % | Donor Funded (USD) | Donor % |
|------|-----------------|------------------------|-------------|-------------------|---------|
| **2025** | 250,000 | 15,000 | 6% | 235,000 | 94% |
| **2026** | 350,000 | 55,000 | 16% | 295,000 | 84% |
| **2027** | 400,000 | 80,000 | 20% | 320,000 | 80% |
| **2028** | 445,000 | 110,000 | 25% | 335,000 | 75% |
| **2029** | 470,000 | 150,000 | 32% | 320,000 | 68% |
| **2030** | 490,000 | 215,000 | 44% | 275,000 | 56% |
| **2031** | 505,000 | 275,000 | 54% | 230,000 | 46% |
| **2032** | 510,000 | 335,000 | 66% | 175,000 | 34% |
| **2033** | 515,000 | 385,000 | 75% | 130,000 | 25% |

**Government absorption milestones:**

| Milestone | Target Year | What Government Absorbs |
|-----------|------------|------------------------|
| DHDD initial salaries (6 positions) | 2026 | USD 55,000–60,000/yr |
| e-NHIS operational costs | 2027 | USD 25,000–30,000/yr |
| Full DHDD salaries (14 positions) | 2030 | USD 140,000–150,000/yr |
| RHDO salaries (7 positions) | 2030 | USD 60,000–70,000/yr |
| G-Cloud hosting fees | 2031 | USD 40,000–45,000/yr |
| Connectivity costs (post-RDIP broadband) | 2031 | USD 40,000–50,000/yr |
| System maintenance contracts | 2032 | USD 70,000–80,000/yr |
| **Majority government-funded** | **2031** | **>50% of recurrent costs** |
| **Target: 75% government-funded** | **2033** | **USD 385,000/yr** |

#### 5.5.5 Target: MoH Digital Health Budget Line at 1–2% of Health Expenditure

The WHO recommends that countries allocate 1–2% of their total health expenditure to digital health operations and information systems. For Progressa:

| Parameter | Estimate | Source |
|-----------|---------|--------|
| Total health expenditure (THE) | ~USD 100M/yr | WHO GHED (includes government + donor + private) |
| Government health expenditure | ~USD 20–30M/yr | Government budget allocation to health |
| 1% of government health expenditure | **USD 200,000–300,000/yr** | Floor target |
| 2% of government health expenditure | **USD 400,000–600,000/yr** | Ceiling target |
| Roadmap steady-state OPEX | **~USD 515,000/yr** | Section 5.5.3 projection |
| Government target contribution (75%) | **~USD 385,000/yr** | Section 5.5.4 projection |

The government target of USD 385,000 per year by 2033 falls within the 1–2% range of government health expenditure, confirming that the sustainability target is fiscally realistic. Achieving this requires:

1. **Establishing a dedicated digital health budget line** within the MoH budget, distinct from general ICT or administrative costs. This should appear in the Medium-Term Expenditure Framework (MTEF) by 2028.

2. **Progressive salary absorption.** DHDD and RHDO salaries are the largest recurrent cost item (~USD 220,000/yr at full staffing). Government must commit to absorbing these into the civil service payroll between 2028 and 2030.

3. **Demonstrating value.** Budget allocation follows demonstrated results. The NDHSC must present evidence of digital health impact (improved data quality, reduced stockouts, faster insurance enrollment, improved surveillance response times) to MoF to justify the budget line.

4. **Linking to health outcomes.** Digital health expenditure should be framed not as an ICT cost but as a health delivery investment — contributing to maternal mortality reduction, immunisation coverage, epidemic preparedness, and universal health coverage.

#### 5.5.6 Donor Exit and Handover Plans

Each major donor programme requires an explicit exit strategy that protects system continuity:

**EHSSP (Exit: August 2025)**
- Initiative W1-11 manages the transition
- Recurrent costs (connectivity, hosting) transferred to RDIP, Global Fund, or government bridge funding
- EHSSP-funded ICT staff transition to DHDD positions
- Risk: Highest urgency; transition must complete before closure

**RDIP (Wind-down: 2028–2029)**
- RDIP delivers infrastructure (G-Cloud, broadband) that becomes government-owned
- Recurrent hosting and connectivity costs absorbed into government budget by 2031
- RDIP institutional strengthening TA transitions knowledge to DHDD staff
- G-Cloud hosting fees are a government obligation once infrastructure is delivered
- Follow-on RDIP programme (if any) shifts to sustainability support

**Global Fund NFM4 (End: 2027) → NFM5 (Start: 2028)**
- Digital health components negotiated into NFM5 country dialogue (preparation in 2026)
- Supply chain (eLMIS) and surveillance (IDSR+) systems established by NFM4; NFM5 funds scaling and integration
- Post-NFM5 (2031+): government absorbs eLMIS and surveillance system operations
- Risk: NFM5 digital health allocation is not guaranteed; investment case preparation is critical

**GAVI (Current cycle → Next cycle)**
- SPT→DHIS2 Tracker EIR transition aligned with GAVI 6.0 country-owned EIR strategy
- GAVI investment case submitted during Wave 2 with pilot data
- Post-GAVI EIR cycle: government absorbs EIR operational costs (modest — DHIS2 Tracker runs on existing DHIS2 infrastructure)
- Risk: GAVI EIR transition funding timeline uncertain

**WHO CCS (Normative support — ongoing)**
- WHO support is primarily technical/normative, not financial
- Key role: governance design, data standards, IHR compliance, quality assurance
- No exit required — WHO engagement continues through successive CCS periods
- Transition: WHO shifts from design support to quality assurance and international reporting

#### 5.5.7 Sustainability Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Government unable to establish digital health budget line by 2028 | Medium | Critical | NDHSC advocacy; MoF engagement during MTEF preparation; demonstrate fiscal impact (e.g., reduced paper/transport costs offset digital investment); RDIP governance pressure |
| DHDD staff salaries not competitive with donor/NGO market | High | Critical | Salary benchmarking against NGO rates; supplement with performance incentives; negotiate special salary scale for digital health positions; hybrid/remote work options |
| RDIP infrastructure delivered but recurrent costs not budgeted | Medium | High | Include recurrent cost absorption conditions in RDIP hand-over agreements; MoF commitment letter as condition for G-Cloud access |
| Global Fund NFM5 inadequately funds digital health | Medium | High | Prepare investment case with Wave 1 evidence; engage Global Fund country team early; diversify funding (bilateral donors as alternative) |
| Political transition disrupts budget commitments | Low | Critical | Anchor digital health in administrative structures (Ministerial Order, MTEF line items) rather than political promises; build cross-party support |
| Donor fatigue reduces future health digitisation funding | Medium | Medium | Self-reliance trajectory reduces dependency; demonstrate return on investment; align with SDG monitoring and UHC reporting requirements |

#### 5.5.8 Sustainability Dashboard — Key Indicators

The NDHSC should monitor the following indicators annually to track sustainability progress:

| Indicator | 2026 Target | 2028 Target | 2030 Target | 2033 Target |
|-----------|------------|------------|------------|------------|
| Government share of digital health OPEX | 16% | 25% | 44% | 75% |
| MoH digital health budget line established | No | **Yes** | Yes | Yes |
| Digital health budget as % of government health expenditure | <0.5% | 0.5% | 1.0% | **1.5%** |
| DHDD positions on government payroll | 0 | 6 | 14 | 14 |
| RHDO positions on government payroll | 0 | 3 | 7 | 7 |
| Number of systems with confirmed recurrent funding | 2 | 5 | 8 | All |
| Donor programmes with documented exit/handover plan | 1 (EHSSP) | 3 | 5 | All |

---

### 5.6 Investment Requirements — Consolidated Summary

The total investment required to implement the MoH digital health roadmap over the period 2025–2033 is estimated at **USD 6.2–10.7 million** (midpoint: USD 8.5M), structured across three waves:

| Element | Amount (USD) |
|---------|-------------|
| Wave 1 initiative costs (11 initiatives, 2025–2026) | 1,640,000–2,760,000 |
| Wave 2 initiative costs (10 initiatives, 2027–2029) | 2,500,000–4,330,000 |
| Wave 3 initiative costs (7 initiatives, 2030–2033) | 1,500,000–2,670,000 |
| Programme management overhead (10%) | 564,000–976,000 |
| **Grand Total** | **6,204,000–10,736,000** |

This investment is fiscally proportionate. EHSSP invested about USD 100–150 million in the broader health system; this digital health roadmap represents approximately 5–10% of that scale. At the midpoint (USD 8.5M over 8 years), the average annual investment is approximately USD 1.1M — well within the absorption capacity demonstrated by MoH during EHSSP implementation.

Approximately 75–77% of the total investment is mapped to specific funding sources (RDIP, Global Fund, GAVI, WHO, Government, proposed WB/AfDB Health Digitisation). The remaining 23–25% requires resource mobilisation, primarily for the programme management function and the proposed Dedicated Health Digitisation funding window.

The sustainability model demonstrates a credible pathway from near-total donor dependency (94% in 2025) to majority government funding (75% of recurrent costs by 2033), requiring a steady-state government commitment of approximately USD 385,000–515,000 per year — equivalent to 1–2% of government health expenditure, consistent with WHO recommendations.

The investment case is strong: connected, interoperable health information systems deliver measurable improvements in maternal health outcomes, immunisation coverage, disease surveillance response times, health insurance enrollment, and supply chain efficiency — outcomes that justify the modest and achievable government financial commitment required for sustainability.

---

*End of Section 5 — Investment Requirements*
*Section 6 (Governance and Institutional Framework) continues in Task 08.*
