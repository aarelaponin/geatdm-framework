# DPI READINESS CHECKLIST

**Generic EA Target Architecture Development Method (GEATDM)**

| Attribute | Value |
|-----------|-------|
| Document ID | GEATDM-WP5-T52 |
| Version | 1.0 |
| Date | 2025-01-19 |
| Status | Active |
| Workpackage | WP5 - Application Method Guide |

---

## 1. Introduction

### 1.1 What is DPI

Digital Public Infrastructure (DPI) refers to the foundational digital systems and services that enable government operations and citizen-facing services at a national level. DPI encompasses the shared platforms, standards, and capabilities that multiple government organizations use to deliver digital services.

**Core DPI Domains:**

| Domain | Description |
|--------|-------------|
| **Digital Access** | Infrastructure and channels enabling citizens to reach digital services |
| **Digital Data Infrastructure** | Data governance, registries, standards, and analytics capabilities |
| **Interoperability** | Technical infrastructure enabling seamless data exchange across systems |
| **Digital Identity** | Authentication, digital signatures, and trust services |
| **Governance** | Leadership, coordination, policy, and performance management |

### 1.2 Why DPI Readiness Matters

Before an organization can successfully implement a target enterprise architecture, the necessary DPI components must be available at the national level. Without adequate DPI:

- **No Identity Integration:** Organizations cannot verify citizens digitally
- **No Data Sharing:** Each organization becomes a data silo
- **No Service Integration:** Citizens must interact with each agency separately
- **No Legal Foundation:** Digital transactions may lack legal validity
- **Limited Reach:** Digital services cannot reach all citizens

**Key Insight:** Attempting digital transformation without adequate DPI leads to:
- Fragmented, incompatible systems
- Duplicated investments across agencies
- Poor citizen experience
- Unsustainable technical debt

### 1.3 How Organizations Integrate with DPI

**Critical Principle:** Organizations **integrate with** DPI; they do not build DPI components.

DPI is national infrastructure. Individual organizations are consumers of DPI services, not providers. This checklist helps organizations understand:

1. What DPI prerequisites must exist before starting their transformation
2. Which DPI components they will integrate with
3. What workarounds to plan for if DPI gaps exist
4. How to advocate for national DPI development where needed

### 1.4 Using This Checklist

**Assessment Process:**

1. **Complete each pillar assessment** - Work through all five domains
2. **Mark component status** - Use checkboxes and notes
3. **Calculate pillar readiness** - Determine Ready/Partial/Not Ready
4. **Compute overall score** - Use the weighted scoring formula
5. **Determine readiness level** - Map score to Level 1/2/3
6. **Plan accordingly** - Use mitigation strategies for gaps
7. **Match to organization type** - Verify minimum requirements for your PDU/RA/SDA

**When to Use:**
- At the start of the DISCOVER phase
- Before selecting a Reference Architecture
- When updating strategic plans
- When new DPI components become available

---

## 2. DPI Readiness Assessment

### 2.1 Digital Identity Pillar

*The Digital Identity pillar underpins secure, verified digital transactions. Without digital identity, organizations cannot establish trust in online interactions.*

| # | DPI Component | Status | Evidence/Notes |
|---|---------------|--------|----------------|
| **1.1** | **Foundational Layer (Civil Registry)** | | |
| 1.1.1 | Birth registration system exists | ⬜ | Registration rate: ____% |
| 1.1.2 | Death registration system exists | ⬜ | Registration rate: ____% |
| 1.1.3 | Civil registry is digitized | ⬜ | Coverage: ____% |
| 1.1.4 | Vital events linked to identity lifecycle | ⬜ | |
| **1.2** | **National Identity System** | | |
| 1.2.1 | Unique national identifier exists | ⬜ | System name: ____________ |
| 1.2.2 | National ID coverage > 80% of adult population | ⬜ | Coverage: ____% |
| 1.2.3 | ID credential (physical or digital) available | ⬜ | Type: ____________ |
| 1.2.4 | Digital ID credential available | ⬜ | Type: ____________ |
| **1.3** | **Authentication Services** | | |
| 1.3.1 | Authentication API available for government use | ⬜ | API endpoint: ____________ |
| 1.3.2 | Multiple authentication methods supported | ⬜ | Methods: ____________ |
| 1.3.3 | Multi-factor authentication (MFA) available | ⬜ | |
| 1.3.4 | Defined assurance levels exist | ⬜ | Levels: ____________ |
| 1.3.5 | Biometric authentication available | ⬜ | Types: ____________ |
| **1.4** | **Digital Signature Infrastructure** | | |
| 1.4.1 | Public Key Infrastructure (PKI) operational | ⬜ | CA name: ____________ |
| 1.4.2 | Trust Service Providers (TSPs) exist | ⬜ | Count: ____ |
| 1.4.3 | Qualified digital signatures legally recognized | ⬜ | Legal basis: ____________ |
| 1.4.4 | Digital signature services accessible to organizations | ⬜ | |
| 1.4.5 | Time-stamping services available | ⬜ | |
| **1.5** | **Integration & Management** | | |
| 1.5.1 | Single Sign-On (SSO) for government services exists | ⬜ | System: ____________ |
| 1.5.2 | Federated identity management operational | ⬜ | |
| 1.5.3 | Identity verification (eKYC) services available | ⬜ | |
| 1.5.4 | Credential lifecycle management (issue/revoke/renew) | ⬜ | |
| 1.5.5 | Integration documentation available | ⬜ | |

**Pillar Assessment Summary:**

| Criterion | Assessment |
|-----------|------------|
| Components Available | ____/20 |
| Critical Components Met (1.2.1, 1.3.1, 1.4.3) | ⬜ Yes / ⬜ No |
| **Readiness Level** | ⬜ Ready / ⬜ Partial / ⬜ Not Ready |

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

### 2.2 Interoperability Pillar

*The Interoperability pillar enables seamless data exchange between government systems, supporting the once-only principle where citizens provide information only once.*

| # | DPI Component | Status | Evidence/Notes |
|---|---------------|--------|----------------|
| **2.1** | **Governance & Policy Framework** | | |
| 2.1.1 | National Interoperability Framework (NIF) exists | ⬜ | Document: ____________ |
| 2.1.2 | NIF is mandatory for government agencies | ⬜ | Enforcement: ____________ |
| 2.1.3 | Compliance monitoring mechanism exists | ⬜ | |
| 2.1.4 | Inter-agency data sharing agreements template | ⬜ | |
| **2.2** | **Technical Infrastructure** | | |
| 2.2.1 | Data exchange platform exists (X-Road type) | ⬜ | Platform: ____________ |
| 2.2.2 | Government Service Bus (ESB) available | ⬜ | Platform: ____________ |
| 2.2.3 | API gateway operational | ⬜ | URL: ____________ |
| 2.2.4 | Service registry/catalog maintained | ⬜ | Count: ____ services |
| 2.2.5 | Message queue/broker available | ⬜ | |
| **2.3** | **Standards & Formats** | | |
| 2.3.1 | API design standards defined | ⬜ | Standard: ____________ |
| 2.3.2 | Data format standards defined (JSON, XML schemas) | ⬜ | |
| 2.3.3 | Semantic interoperability standards exist | ⬜ | |
| 2.3.4 | Code lists and reference data standardized | ⬜ | |
| 2.3.5 | Integration patterns documented | ⬜ | |
| **2.4** | **Security & Trust** | | |
| 2.4.1 | Trust framework for inter-agency data sharing | ⬜ | |
| 2.4.2 | Secure data transport (TLS, encryption) mandated | ⬜ | |
| 2.4.3 | API authentication/authorization standards | ⬜ | |
| 2.4.4 | Audit logging for data exchanges | ⬜ | |
| **2.5** | **Operational Support** | | |
| 2.5.1 | Integration documentation available | ⬜ | URL: ____________ |
| 2.5.2 | Developer sandbox/test environment | ⬜ | |
| 2.5.3 | Onboarding process defined | ⬜ | |
| 2.5.4 | Support/helpdesk for integrators | ⬜ | Contact: ____________ |
| 2.5.5 | SLAs for platform availability | ⬜ | Uptime: ____% |

**Pillar Assessment Summary:**

| Criterion | Assessment |
|-----------|------------|
| Components Available | ____/24 |
| Critical Components Met (2.2.1 or 2.2.2, 2.3.1, 2.4.1) | ⬜ Yes / ⬜ No |
| **Readiness Level** | ⬜ Ready / ⬜ Partial / ⬜ Not Ready |

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

### 2.3 Digital Data Infrastructure Pillar

*The Digital Data Infrastructure pillar provides the foundation for evidence-based decisions and integrated services through proper data governance, quality management, and shared registries.*

| # | DPI Component | Status | Evidence/Notes |
|---|---------------|--------|----------------|
| **3.1** | **Policy & Governance Framework** | | |
| 3.1.1 | Data protection legislation enacted | ⬜ | Law: ____________ |
| 3.1.2 | Data Protection Authority operational | ⬜ | Authority: ____________ |
| 3.1.3 | Government data governance framework exists | ⬜ | |
| 3.1.4 | Data classification scheme defined | ⬜ | |
| 3.1.5 | Open data policy exists | ⬜ | |
| **3.2** | **Cloud & Infrastructure** | | |
| 3.2.1 | Government cloud services available | ⬜ | Provider: ____________ |
| 3.2.2 | Government data centers operational | ⬜ | Count: ____ |
| 3.2.3 | Disaster recovery capability exists | ⬜ | RPO: ____ RTO: ____ |
| 3.2.4 | Cloud-first policy in place | ⬜ | |
| 3.2.5 | Data residency requirements defined | ⬜ | |
| **3.3** | **Foundational Registries** | | |
| 3.3.1 | Population/citizen registry accessible | ⬜ | Coverage: ____% |
| 3.3.2 | Business/company registry accessible | ⬜ | Coverage: ____% |
| 3.3.3 | Land/property registry digitized | ⬜ | Coverage: ____% |
| 3.3.4 | Address registry available | ⬜ | Coverage: ____% |
| 3.3.5 | Registry APIs available for integration | ⬜ | |
| **3.4** | **Data Standards & Quality** | | |
| 3.4.1 | National data standards defined | ⬜ | Standard: ____________ |
| 3.4.2 | Metadata standards mandatory | ⬜ | |
| 3.4.3 | Data quality framework exists | ⬜ | |
| 3.4.4 | Master Data Management (MDM) approach defined | ⬜ | |
| **3.5** | **Analytics & Sharing** | | |
| 3.5.1 | Open data portal operational | ⬜ | URL: ____________ |
| 3.5.2 | Government analytics platform available | ⬜ | |
| 3.5.3 | Data sharing protocols established | ⬜ | |
| 3.5.4 | Consent management framework exists | ⬜ | |

**Pillar Assessment Summary:**

| Criterion | Assessment |
|-----------|------------|
| Components Available | ____/24 |
| Critical Components Met (3.1.1, 3.3.1, 3.3.2) | ⬜ Yes / ⬜ No |
| **Readiness Level** | ⬜ Ready / ⬜ Partial / ⬜ Not Ready |

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

### 2.4 Digital Access Pillar

*The Digital Access pillar determines whether citizens and businesses can actually reach and use digital services. Strong infrastructure means nothing if people cannot access or use it.*

| # | DPI Component | Status | Evidence/Notes |
|---|---------------|--------|----------------|
| **4.1** | **Infrastructure & Connectivity** | | |
| 4.1.1 | Mobile network coverage > 80% of population | ⬜ | Coverage: ____% |
| 4.1.2 | 4G/LTE widely available | ⬜ | Coverage: ____% |
| 4.1.3 | Internet penetration > 60% | ⬜ | Penetration: ____% |
| 4.1.4 | Broadband available in major towns | ⬜ | |
| 4.1.5 | Data affordability < 5% monthly income for 1GB | ⬜ | Cost: ____% |
| **4.2** | **Government Network** | | |
| 4.2.1 | Government network infrastructure exists | ⬜ | |
| 4.2.2 | Government offices have reliable internet | ⬜ | Coverage: ____% |
| 4.2.3 | Secure government network (VPN/intranet) | ⬜ | |
| **4.3** | **Service Delivery Channels** | | |
| 4.3.1 | National government services portal exists | ⬜ | URL: ____________ |
| 4.3.2 | Portal has transactional capabilities | ⬜ | |
| 4.3.3 | Mobile-responsive design standard | ⬜ | |
| 4.3.4 | Physical service centers for assisted access | ⬜ | Count: ____ |
| 4.3.5 | Alternative channels (USSD, SMS) available | ⬜ | |
| **4.4** | **Accessibility & Inclusion** | | |
| 4.4.1 | Accessibility standards defined (WCAG compliance) | ⬜ | |
| 4.4.2 | Multi-language support available | ⬜ | Languages: ____ |
| 4.4.3 | Assistive technology compatibility | ⬜ | |
| 4.4.4 | Digital literacy programs exist | ⬜ | |
| **4.5** | **Security** | | |
| 4.5.1 | National cybersecurity framework exists | ⬜ | Framework: ____________ |
| 4.5.2 | Cybersecurity agency/authority operational | ⬜ | Agency: ____________ |
| 4.5.3 | Security standards for government IT defined | ⬜ | |
| 4.5.4 | Incident response capability exists | ⬜ | |

**Pillar Assessment Summary:**

| Criterion | Assessment |
|-----------|------------|
| Components Available | ____/22 |
| Critical Components Met (4.1.1, 4.3.1, 4.5.1) | ⬜ Yes / ⬜ No |
| **Readiness Level** | ⬜ Ready / ⬜ Partial / ⬜ Not Ready |

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

### 2.5 Governance Pillar

*Governance is a cross-cutting enabler. Weaknesses in governance will constrain progress in all other domains regardless of technical investment.*

| # | DPI Component | Status | Evidence/Notes |
|---|---------------|--------|----------------|
| **5.1** | **Strategy & Leadership** | | |
| 5.1.1 | National digital government strategy exists | ⬜ | Document: ____________ |
| 5.1.2 | Strategy is current (< 3 years old) | ⬜ | Date: ____________ |
| 5.1.3 | Political commitment at highest level | ⬜ | |
| 5.1.4 | Implementation roadmap with milestones | ⬜ | |
| **5.2** | **Institutional Framework** | | |
| 5.2.1 | Central digital agency/authority exists | ⬜ | Agency: ____________ |
| 5.2.2 | Agency has enforcement/coordination mandate | ⬜ | |
| 5.2.3 | Clear roles and responsibilities across government | ⬜ | |
| 5.2.4 | Inter-agency coordination mechanism operational | ⬜ | |
| **5.3** | **Legal & Regulatory Framework** | | |
| 5.3.1 | E-government/digital services law enacted | ⬜ | Law: ____________ |
| 5.3.2 | Electronic transactions legally valid | ⬜ | |
| 5.3.3 | Cybercrime legislation enacted | ⬜ | Law: ____________ |
| 5.3.4 | Procurement regulations support digital | ⬜ | |
| **5.4** | **Standards & Architecture** | | |
| 5.4.1 | Government Enterprise Architecture framework | ⬜ | Framework: ____________ |
| 5.4.2 | Standards body/function exists | ⬜ | |
| 5.4.3 | Architecture review mandatory for IT projects | ⬜ | |
| 5.4.4 | Technology standards published | ⬜ | |
| **5.5** | **Resources & Capacity** | | |
| 5.5.1 | Dedicated funding mechanism for digital initiatives | ⬜ | |
| 5.5.2 | Budget allocation for DPI maintenance | ⬜ | |
| 5.5.3 | Digital skills development program | ⬜ | |
| 5.5.4 | Change management capability exists | ⬜ | |
| **5.6** | **Performance Management** | | |
| 5.6.1 | KPIs for digital government defined | ⬜ | |
| 5.6.2 | Performance data published | ⬜ | |
| 5.6.3 | Regular progress reporting mechanism | ⬜ | |

**Pillar Assessment Summary:**

| Criterion | Assessment |
|-----------|------------|
| Components Available | ____/23 |
| Critical Components Met (5.1.1, 5.2.1, 5.3.1) | ⬜ Yes / ⬜ No |
| **Readiness Level** | ⬜ Ready / ⬜ Partial / ⬜ Not Ready |

**Notes:**
```
[Document key findings, limitations, or planned developments]


```

---

## 3. Overall DPI Readiness Score

### 3.1 Pillar Summary

| Pillar | Status | Weight | Raw Score | Weighted Score |
|--------|--------|--------|-----------|----------------|
| Digital Identity | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 25% | ____% | ____% |
| Interoperability | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 25% | ____% | ____% |
| Digital Data Infrastructure | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 20% | ____% | ____% |
| Digital Access | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 15% | ____% | ____% |
| Governance | ⬜ Ready / ⬜ Partial / ⬜ Not Ready | 15% | ____% | ____% |
| **OVERALL** | | **100%** | | **_____%** |

### 3.2 Scoring Guide

**Pillar Status Conversion:**
- **Ready** = 100%
- **Partial** = 50%
- **Not Ready** = 0%

**Weighted Score Calculation:**
```
Overall Score = (Identity × 0.25) + (Interoperability × 0.25) + 
                (Data × 0.20) + (Access × 0.15) + (Governance × 0.15)
```

**Example Calculation:**
| Pillar | Status | Weight | Raw | Weighted |
|--------|--------|--------|-----|----------|
| Identity | Partial | 25% | 50% | 12.5% |
| Interoperability | Ready | 25% | 100% | 25% |
| Data | Partial | 20% | 50% | 10% |
| Access | Ready | 15% | 100% | 15% |
| Governance | Partial | 15% | 50% | 7.5% |
| **Total** | | | | **70%** |

---

## 4. DPI Readiness Levels

### Level 1: Foundational (0-40%)

**Characteristics:**
- Significant gaps in core DPI components
- No national identity system or limited coverage
- No interoperability platform
- Limited digital governance capacity

**Implications for Organizations:**
- Must plan for very limited integration options
- Consider interim/standalone solutions
- Focus on internal digitization first
- Design systems with future DPI integration in mind
- Advocate for national DPI development

**Recommended Approach:**
```
┌─────────────────────────────────────────────────────────────┐
│  LEVEL 1 STRATEGY                                           │
├─────────────────────────────────────────────────────────────┤
│  1. Implement standalone systems with standard interfaces   │
│  2. Use industry-standard APIs (plan for future integration)│
│  3. Create internal data management capabilities            │
│  4. Design for scalability when DPI becomes available       │
│  5. Participate in national DPI planning discussions        │
└─────────────────────────────────────────────────────────────┘
```

### Level 2: Developing (41-70%)

**Characteristics:**
- Some DPI components available but incomplete
- Identity system exists but may lack full features
- Interoperability platform emerging or limited
- Governance framework in place but enforcement weak

**Implications for Organizations:**
- Plan phased integration approach
- Prioritize integration with available components
- Identify workarounds for gaps
- Monitor DPI development roadmap

**Recommended Approach:**
```
┌─────────────────────────────────────────────────────────────┐
│  LEVEL 2 STRATEGY                                           │
├─────────────────────────────────────────────────────────────┤
│  1. Integrate with available DPI components immediately     │
│  2. Use hybrid approach: DPI where available, standalone    │
│     where not                                               │
│  3. Plan migration path as DPI components mature            │
│  4. Contribute to DPI testing and feedback                  │
│  5. Build integration capabilities incrementally            │
└─────────────────────────────────────────────────────────────┘
```

### Level 3: Ready (71-100%)

**Characteristics:**
- Most DPI components available and operational
- National identity system with authentication APIs
- Interoperability platform functional
- Strong governance and enforcement

**Implications for Organizations:**
- Full integration possible and expected
- Leverage all available DPI components
- Focus on organization-specific needs
- Can implement full target architecture

**Recommended Approach:**
```
┌─────────────────────────────────────────────────────────────┐
│  LEVEL 3 STRATEGY                                           │
├─────────────────────────────────────────────────────────────┤
│  1. Maximize DPI integration from the start                 │
│  2. Use national building blocks (Identity, Payments, etc.) │
│  3. Focus resources on domain-specific functionality        │
│  4. Comply fully with interoperability requirements         │
│  5. Contribute data to national registries                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 5. Minimum DPI Requirements by Organization Type

### 5.1 Requirements Matrix

| DPI Component | PDU | RA | SDA |
|--------------|-----|----|----|
| **IDENTITY PILLAR** | | | |
| Basic identity verification | Optional | Required | Required |
| Authentication API | Optional | Required | Required |
| Digital signatures | Recommended | Required | Required |
| PKI infrastructure | Optional | Required | Required |
| SSO integration | Optional | Recommended | Required |
| **INTEROPERABILITY PILLAR** | | | |
| Data exchange platform | Optional | Required | Required |
| API standards | Recommended | Required | Required |
| Integration documentation | Recommended | Required | Required |
| Service bus access | Optional | Recommended | Required |
| **DATA PILLAR** | | | |
| Data governance framework | Recommended | Required | Required |
| Data protection compliance | Required | Required | Required |
| Registry access (citizens) | Optional | Required | Required |
| Registry access (businesses) | Optional | Required | Required |
| Government cloud | Optional | Recommended | Required |
| Analytics platform | Optional | Recommended | Required |
| **ACCESS PILLAR** | | | |
| Internet connectivity | Required | Required | Required |
| Government network | Required | Required | Required |
| Cybersecurity framework | Recommended | Required | Required |
| Service portal | Optional | Recommended | Required |
| **GOVERNANCE PILLAR** | | | |
| Digital strategy alignment | Required | Required | Required |
| Legal framework compliance | Required | Required | Required |
| Standards compliance | Recommended | Required | Required |
| EA framework alignment | Optional | Recommended | Required |

**Legend:**
- **Required:** Must be available before implementation
- **Recommended:** Strongly advised; workarounds possible but suboptimal
- **Optional:** Useful but not blocking

### 5.2 Minimum Viable DPI by Organization Type

| Organization Type | Essential DPI (Must Have) | Recommended DPI (Should Have) |
|-------------------|--------------------------|------------------------------|
| **PDU** | Basic connectivity, Data protection compliance, Digital strategy alignment | Document exchange standards, Basic identity verification |
| **RA** | Identity with authentication API, Data exchange platform, Access to citizen/business registries, Digital signature services, Cybersecurity framework | Government cloud, Analytics platform, Payment gateway |
| **SDA** | All RA requirements, PLUS: SSO integration, High-availability platforms, Full interoperability platform access, Enterprise analytics | Full DPI stack, Real-time data exchange, Advanced security services |

---

## 6. Gap Mitigation Strategies

### 6.1 If Identity Pillar Not Ready

**Impact:** Cannot verify citizens digitally, no legal validity for digital transactions

**Mitigation Strategies:**

| Gap | Interim Solution | Long-term Action |
|-----|-----------------|------------------|
| No national ID system | Implement organization-level identity management (username/password) | Plan integration when national ID available |
| No authentication API | Build internal authentication service | Design for federation when APIs available |
| No digital signatures | Use paper-based signing for legal documents | Implement e-signature once PKI available |
| No PKI | Use third-party certificate providers | Migrate to national TSP when available |

**Design Principle:** Build identity interfaces as abstraction layers that can switch backends when national identity becomes available.

### 6.2 If Interoperability Pillar Not Ready

**Impact:** Data silos, manual data re-entry, no once-only principle

**Mitigation Strategies:**

| Gap | Interim Solution | Long-term Action |
|-----|-----------------|------------------|
| No data exchange platform | Point-to-point integrations with key partners | Design for platform migration |
| No API standards | Adopt industry standards (REST, OpenAPI) | Align with national standards when published |
| No trust framework | Bilateral MoUs for data sharing | Formalize under national framework |
| No service registry | Maintain internal integration catalog | Register services when platform available |

**Design Principle:** Use standard APIs and document all integration points to enable future migration to national platform.

### 6.3 If Data Infrastructure Not Ready

**Impact:** No access to authoritative data, data quality issues, compliance risks

**Mitigation Strategies:**

| Gap | Interim Solution | Long-term Action |
|-----|-----------------|------------------|
| No data protection law | Implement international best practices (GDPR-aligned) | Comply when law enacted |
| No government cloud | Use commercial cloud with compliance | Migrate to gov cloud when available |
| No registry access | Collect required data directly from customers | Integrate when registries open APIs |
| No data standards | Adopt international standards (ISO, etc.) | Align with national standards |

**Design Principle:** Implement data management with standards compliance from day one to ease future integration.

### 6.4 If Access Pillar Not Ready

**Impact:** Citizens cannot reach services, digital divide persists

**Mitigation Strategies:**

| Gap | Interim Solution | Long-term Action |
|-----|-----------------|------------------|
| Limited internet coverage | Multi-channel approach (USSD, SMS, physical centers) | Expand digital as coverage improves |
| No service portal | Organization-specific website | Integrate with national portal when available |
| No cybersecurity framework | Implement international standards (ISO 27001) | Align with national framework |
| Limited accessibility | Focus on mobile-first design | Full accessibility when standards enforced |

**Design Principle:** Design for the lowest common denominator channel while enabling progressive enhancement.

### 6.5 If Governance Not Ready

**Impact:** No coordination, conflicting standards, unsustainable investments

**Mitigation Strategies:**

| Gap | Interim Solution | Long-term Action |
|-----|-----------------|------------------|
| No digital strategy | Align with sector strategy and international best practices | Align with national strategy when published |
| No central agency | Establish internal EA governance | Participate in national governance when formed |
| No legal framework | Document legal requirements, plan for compliance | Implement when laws enacted |
| No standards body | Adopt international/industry standards | Comply with national standards when defined |

**Design Principle:** Participate in national digital governance discussions and position organization as a positive contributor.

---

## 7. Checklist Usage Instructions

### 7.1 Step-by-Step Process

```
┌────────────────────────────────────────────────────────────────────┐
│                    DPI READINESS ASSESSMENT PROCESS                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Step 1: PREPARATION                                                │
│  ───────────────────                                                │
│  □ Identify assessment team (IT, legal, policy)                     │
│  □ Gather existing documentation on national DPI                    │
│  □ Schedule interviews with national digital agency                 │
│  □ Set assessment timeline (typically 2-4 weeks)                    │
│                                                                     │
│  Step 2: PILLAR-BY-PILLAR ASSESSMENT                               │
│  ────────────────────────────────────                               │
│  □ Complete Identity pillar checklist (Section 2.1)                 │
│  □ Complete Interoperability pillar checklist (Section 2.2)         │
│  □ Complete Data Infrastructure pillar checklist (Section 2.3)      │
│  □ Complete Access pillar checklist (Section 2.4)                   │
│  □ Complete Governance pillar checklist (Section 2.5)               │
│                                                                     │
│  Step 3: CALCULATE SCORES                                           │
│  ────────────────────────                                           │
│  □ Determine status for each pillar (Ready/Partial/Not Ready)       │
│  □ Apply weights and calculate overall score (Section 3)            │
│  □ Determine overall readiness level (Section 4)                    │
│                                                                     │
│  Step 4: IDENTIFY CRITICAL GAPS                                     │
│  ──────────────────────────────                                     │
│  □ List components marked "Not Ready" that are critical             │
│  □ Cross-reference with organization type requirements (Section 5)  │
│  □ Identify blocking gaps vs. manageable gaps                       │
│                                                                     │
│  Step 5: DEVELOP MITIGATION PLAN                                    │
│  ──────────────────────────────                                     │
│  □ For each critical gap, identify mitigation strategy (Section 6)  │
│  □ Estimate timeline and cost for workarounds                       │
│  □ Document assumptions and risks                                   │
│                                                                     │
│  Step 6: MAKE GO/NO-GO DECISION                                     │
│  ──────────────────────────────                                     │
│  □ If Ready (Level 3): Proceed with full RA implementation          │
│  □ If Developing (Level 2): Phased approach, prioritize available   │
│  □ If Foundational (Level 1): Address critical gaps first,          │
│     simplified implementation, advocate for DPI                     │
│                                                                     │
│  Step 7: DOCUMENT AND TRACK                                         │
│  ──────────────────────────                                         │
│  □ Save completed checklist in project documentation                │
│  □ Set review cycle (recommend: every 6 months)                     │
│  □ Monitor national DPI development announcements                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

### 7.2 Evidence Sources

| DPI Domain | Typical Evidence Sources |
|------------|-------------------------|
| **Identity** | National ID authority reports, PKI operator documentation, Legal frameworks |
| **Interoperability** | NIF document, Platform documentation, API catalogs |
| **Data** | Data protection authority, Statistics bureau, Open data portal |
| **Access** | Communications authority, ITU statistics, Portal analytics |
| **Governance** | Digital strategy document, Agency mandates, Legal frameworks |

### 7.3 Assessment Tips

1. **Be Evidence-Based:** Every checkbox should have documented evidence
2. **Involve Multiple Perspectives:** IT, legal, and policy staff see different aspects
3. **Contact National Agency:** They may have updated information or roadmaps
4. **Don't Over-Rate:** A pilot program is not the same as "available"
5. **Consider Practical Access:** A system that exists but you cannot use is "Not Ready"
6. **Document Assumptions:** Note planned developments with dates
7. **Re-assess Regularly:** DPI landscape changes; review every 6-12 months

---

## Appendix A: Quick Reference Card

### DPI Readiness Decision Matrix

```
┌─────────────────────────────────────────────────────────────────────┐
│                    DPI READINESS QUICK DECISION                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  OVERALL SCORE: _____% → LEVEL: ___                                 │
│                                                                      │
│  ┌────────────────┬─────────────────────────────────────────────┐   │
│  │ SCORE RANGE    │ RECOMMENDED ACTION                          │   │
│  ├────────────────┼─────────────────────────────────────────────┤   │
│  │ 71-100%        │ ✅ PROCEED with full RA implementation      │   │
│  │ (Level 3)      │    - Maximize DPI integration               │   │
│  │                │    - Use national building blocks           │   │
│  ├────────────────┼─────────────────────────────────────────────┤   │
│  │ 41-70%         │ ⚠️ PROCEED with phased approach             │   │
│  │ (Level 2)      │    - Prioritize available DPI components    │   │
│  │                │    - Plan workarounds for gaps              │   │
│  │                │    - Design for future integration          │   │
│  ├────────────────┼─────────────────────────────────────────────┤   │
│  │ 0-40%          │ ⛔ ADDRESS GAPS before major investment     │   │
│  │ (Level 1)      │    - Implement standalone solutions         │   │
│  │                │    - Focus on internal digitization         │   │
│  │                │    - Advocate for national DPI              │   │
│  └────────────────┴─────────────────────────────────────────────┘   │
│                                                                      │
│  CRITICAL BLOCKERS (Stop if any are "Not Ready"):                   │
│  □ Legal framework for digital services (PDU/RA/SDA)                │
│  □ Identity verification API (RA/SDA)                               │
│  □ Data exchange platform (RA/SDA)                                  │
│  □ Digital signatures legally valid (RA/SDA)                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Pillar Weights Rationale

| Pillar | Weight | Rationale |
|--------|--------|-----------|
| **Identity** | 25% | Foundation for all trusted digital interactions |
| **Interoperability** | 25% | Enables data reuse and integration |
| **Data** | 20% | Provides authoritative information |
| **Access** | 15% | Determines service reach (can use alternatives) |
| **Governance** | 15% | Enables coordination (can work around with bilateral agreements) |

---

## Appendix B: Assessment Summary Template

### Organization Information

| Field | Value |
|-------|-------|
| Organization Name | |
| Organization Type | ⬜ PDU / ⬜ RA / ⬜ SDA |
| Country | |
| Assessment Date | |
| Assessment Team | |

### DPI Readiness Summary

| Pillar | Ready | Partial | Not Ready | Score |
|--------|-------|---------|-----------|-------|
| Identity | ⬜ | ⬜ | ⬜ | ____% |
| Interoperability | ⬜ | ⬜ | ⬜ | ____% |
| Data Infrastructure | ⬜ | ⬜ | ⬜ | ____% |
| Access | ⬜ | ⬜ | ⬜ | ____% |
| Governance | ⬜ | ⬜ | ⬜ | ____% |

**Overall Score:** _____%

**Readiness Level:** ⬜ Level 1 (Foundational) / ⬜ Level 2 (Developing) / ⬜ Level 3 (Ready)

### Critical Gaps Identified

| # | Gap | Pillar | Impact | Mitigation |
|---|-----|--------|--------|------------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

### Recommendation

```
⬜ PROCEED - Full implementation feasible
⬜ PROCEED WITH CAUTION - Phased approach required
⬜ DELAY - Address critical gaps first
```

### Next Steps

| # | Action | Owner | Due Date |
|---|--------|-------|----------|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-01-19 | GEATDM Team | Initial version |

---

*This checklist is part of the Generic EA Target Architecture Development Method (GEATDM), based on the GovStack Public Administration Ecosystem Reference Architecture (PAERA). For more information: https://paera.govstack.global/*

---

*End of Document*
