/**
 * SOXIT CONSULTING — CLIENT RUNTIME SCRIPT
 * Multi-Color Kinetic Simulation, Dynamic Tabs, Boardroom Matrix,
 * 16 Proprietary Platforms, 6 Core Practices, Industry Verticals, and Modals.
 * All contacts link directly to ../index.html#contact
 */

(function () {
  'use strict';

  // ==========================================
  // DATA STORE
  // ==========================================

  const consultingData = [
    {
      id: 'digital-transformation',
      index: '01',
      pillarName: 'Transform',
      practiceTitle: 'Digital & Technology Transformation',
      badgeClass: 'badge-transform',
      accentColor: '#00E5FF',
      headline: 'Modernize the technology foundation. Accelerate business change.',
      description:
        'Legacy technology can constrain innovation, increase operational risk, and make transformation increasingly expensive. SOXIT helps organizations transition from rigid, monolithic environments toward modular, cloud-native and AI-ready architectures with zero operational disruption.',
      keyFocusAreas: [
        'Application Modernization & Microservices Architecture',
        'Application Maintenance & Support (L1-L3 24/7 SLA)',
        'DevOps & DevSecOps (On-Prem, Cloud & Hybrid Pipelines)',
        'Robotic Process Automation (RPA) & Workflow Streamlining',
        'API Virtualization & High-Throughput Integration',
        'Composable Enterprise Operating Architectures'
      ],
      outcome: 'A modern, agile technology foundation supporting continuous innovation rather than constraining it.',
      operatingPrinciple: 'Modernization must decouple business value from legacy fragility without high-risk big-bang re-platforming.',
      synergyNarrative: 'Transforms foundational architectures so that subsequent cyber resilience, AI models, and operational frameworks can integrate safely.',
      relatedProducts: ['Soxit-Enterprise-OS', 'Worquestra', 'DocxIQ', 'Multiplex'],
      detailLink: 'consulting-domains.html#digital-transformation'
    },
    {
      id: 'cybersecurity-digital-trust',
      index: '02',
      pillarName: 'Protect',
      practiceTitle: 'Cybersecurity & Digital Trust',
      badgeClass: 'badge-protect',
      accentColor: '#FF4343',
      headline: 'Move from reactive defense to resilient, trusted digital operations.',
      description:
        'Cybersecurity has become an enterprise governance priority spanning technology, risk, regulatory compliance, and business continuity. SOXIT establishes secure-by-design architectures and 24/7 intelligence-driven security operations that align defense investments directly with business risk.',
      keyFocusAreas: [
        '24/7 Managed Security Operations Center (MSSP & SOC)',
        'Vulnerability Management & VAPT (Web, Mobile, Cloud, Network)',
        'Identity & Access Governance (IAM / PAM / Zero-Trust)',
        'Regulatory Compliance Readiness (ISO 27001, PCI DSS V4.0.1, DPDP, HIPAA, GDPR)',
        'Cloud Security Posture Management & Data Protection',
        'Threat Hunting, Active Defense & Incident Response'
      ],
      outcome: 'Security transforms into an embedded business enabler and competitive advantage rather than an operational bottleneck.',
      operatingPrinciple: 'Cyber resilience must be engineered into continuous delivery pipelines rather than bolted onto perimeter boundaries.',
      synergyNarrative: 'Protects transformed architectures, safeguarding data integrity for enterprise AI and establishing digital trust for regulatory compliance.',
      relatedProducts: ['SOXIT Auth', 'SOXIT COMPLYment', 'Deep Trust Web', 'Guardian AI', 'Agent Sentinel Watch'],
      detailLink: 'consulting-domains.html#cybersecurity'
    },
    {
      id: 'data-ai-enablement',
      index: '03',
      pillarName: 'Intelligently Operate',
      practiceTitle: 'Data, AI & Intelligence Enablement',
      badgeClass: 'badge-operate',
      accentColor: '#A855F7',
      headline: 'Turn enterprise data into governed, production-grade intelligence.',
      description:
        'AI adoption without disciplined data foundations creates operational vulnerability, hallucination risk, and compliance penalties. SOXIT establishes the governed lakehouses, agentic guardrails, and production ML pipelines required to scale AI safely.',
      keyFocusAreas: [
        'Generative & Autonomous Agentic AI Enablement',
        'AI Product Engineering & Production Inference Architecture',
        'Enterprise AI Guardrails, Prompt Firewalls & Hallucination Bounds',
        'Data Strategy, Modern Lakehouse & Lineage Governance',
        'Predictive Analytics & Decision Intelligence Systems',
        'Model Lifecycle Auditing, Risk Management & MLOps'
      ],
      outcome: 'AI moves from isolated experimentation into high-impact, governed, and quantifiable enterprise production.',
      operatingPrinciple: 'Enterprise AI is only as viable as the underlying data governance, guardrails, and model lifecycle oversight.',
      synergyNarrative: 'Ingests secure, transformed data to deliver intelligent decisioning, which is subsequently stabilized by disciplined operating models.',
      relatedProducts: ['SOXIT DataV', 'SOXIT DocxIQ', 'SOXIT Zen', 'Multiplex', 'Guardian AI'],
      detailLink: 'consulting-domains.html#ai-data'
    },
    {
      id: 'it-operating-model',
      index: '04',
      pillarName: 'Optimize',
      practiceTitle: 'IT Operating Model & Infrastructure Excellence',
      badgeClass: 'badge-optimize',
      accentColor: '#FF6418',
      headline: 'Align IT operational velocity with business growth and predictability.',
      description:
        'Technology investments create limited value when operating models, infrastructure silos, and service management cannot keep pace. SOXIT redesigns technology operations around automated telemetry, predictable SLAs, and dedicated global delivery centers.',
      keyFocusAreas: [
        'Managed Infrastructure & Hybrid Cloud Computing',
        '24/7 Network Operations Center (NOC) & Automated ITSM',
        'Enterprise Network & SD-WAN Topologies',
        'Virtualization & Hyper-Converged Infrastructure (HCI)',
        'End-User & Workplace Infrastructure (VDI & Endpoint Management)',
        'Dedicated Delivery Centers (ODC) & Specialist Augmentation'
      ],
      outcome: 'IT organizations achieve 99.9% operational reliability with transparent telemetry and agile workforce scaling.',
      operatingPrinciple: 'Technology velocity is governed by operating discipline, automated telemetry, and transparent SLA accountability.',
      synergyNarrative: 'Monitors, measures, and optimizes enterprise systems, feeding empirical telemetry back into continuous transformation.',
      relatedProducts: ['SOXIT AutomaX', 'Soxit-Enterprise-OS', 'Worquestra', 'Talent Forge'],
      detailLink: 'consulting-domains.html#managed-services'
    }
  ];

  const diagnosticTensions = [
    {
      id: 'legacy-cloud',
      label: 'Legacy & Cloud Modernization',
      strategicAmbition: 'Migrate to flexible cloud-native microservices and accelerate software release cadence.',
      operationalReality: 'Monolithic dependencies, unpredictable cloud consumption bills, and fragile integrations jeopardize mission-critical stability.',
      soxitIntervention: 'Pragmatic strangler modernization that extracts business value without high-risk operational disruption.'
    },
    {
      id: 'ai-adoption',
      label: 'AI & Data Operationalization',
      strategicAmbition: 'Harness generative and agentic AI models to fundamentally automate enterprise intelligence.',
      operationalReality: 'Dirty unstructured data, prompt injection vulnerabilities, lack of model auditability, and regulatory penalties.',
      soxitIntervention: 'Governed data pipelines, enterprise guardrails, and model lifecycle oversight that move AI from pilot to production.'
    },
    {
      id: 'cyber-trust',
      label: 'Expanding Cyber & Regulatory Risk',
      strategicAmbition: 'Maintain trusted digital operations across multi-cloud and third-party partner ecosystems.',
      operationalReality: 'Sprawling attack surfaces, fragmented security tools, compliance overload (ISO, GDPR, DORA, NIS2), and alert fatigue.',
      soxitIntervention: 'Secure-by-design architecture and continuous cyber resilience that embed trust directly into software pipelines.'
    },
    {
      id: 'operating-models',
      label: 'Operating Model & Service Excellence',
      strategicAmbition: 'Align IT operational velocity with rapid business strategy and customer expectations.',
      operationalReality: 'Outdated ticketing silos, manual approval bottlenecks, untracked SLAs, and opaque vendor accountability.',
      soxitIntervention: 'IT operating model transformation around automation, clear accountability metrics, and continuous SLA governance.'
    }
  ];

  const strategyMatrix = [
    {
      id: 'matrix-modernize',
      strategicNeed: 'Modernize technology estates and eliminate technical debt',
      soxitCapability: 'Digital & Technology Transformation',
      businessOutcome: 'Agility & Scalability',
      outcomeColor: '#00E5FF',
      executionMetric: 'Modular architecture enabling rapid release cadence without legacy fragility',
      description: 'We deconstruct rigid monoliths into cloud-native, API-first composable architectures that empower rapid market entry while preserving critical transactional continuity.'
    },
    {
      id: 'matrix-cyber',
      strategicNeed: 'Reduce systemic cyber risk and comply with global mandates',
      soxitCapability: 'Cybersecurity & Digital Trust',
      businessOutcome: 'Resilience & Trust',
      outcomeColor: '#FF4343',
      executionMetric: 'Secure-by-design posture with intelligence-driven threat response and audit readiness',
      description: 'We transform security from an obstructive checkpoint into an embedded digital trust capability, aligning defense investments directly with business operational risk.'
    },
    {
      id: 'matrix-ai',
      strategicNeed: 'Operationalize AI beyond fragmented proofs-of-concept',
      soxitCapability: 'Data, AI & Intelligence Enablement',
      businessOutcome: 'Intelligent Decision-Making',
      outcomeColor: '#A855F7',
      executionMetric: 'Governed data pipelines, agentic guardrails, and measurable model lifecycle ROI',
      description: 'We establish the foundational data architecture, model safety controls, and agentic workflows required to transition speculative AI experiments into reliable enterprise assets.'
    },
    {
      id: 'matrix-ops',
      strategicNeed: 'Improve IT performance and align service velocity with business demand',
      soxitCapability: 'IT Operating Model & Service Excellence',
      businessOutcome: 'Efficiency & Service Quality',
      outcomeColor: '#FF6418',
      executionMetric: 'Automated telemetry, predictable SLA fulfillment, and accountable operating rhythms',
      description: 'We redesign IT operating models around measurable service outcomes, automated workflows, and continuous improvement, eliminating administrative friction and vendor drift.'
    }
  ];

  // 16 PROPRIETARY ENTERPRISE PLATFORMS (Preserved SOXIT + Enriched Platform Suite)
  const productsData = [
    // --- Security, Trust & Compliance Platforms ---
    {
      id: 'soxit-auth',
      name: 'SOXIT Auth',
      category: 'security-trust',
      categoryLabel: 'Security & Trust',
      badgeClass: 'badge-protect',
      tagline: 'Enterprise identity & unified access control platform.',
      summary: 'A centralized authentication and identity management engine delivering SSO, MFA, and deep provisioning across web, desktop, and legacy environments, including Windows and RDP infrastructure.',
      problemSolved: 'Fragmented user directories, insecure credential hygiene, and lack of unified MFA across legacy enterprise applications.',
      solutionArchitecture: 'Standards-compliant identity provider supporting SAML 2.0, OIDC, OAuth 2.0, and Kerberos with adaptive risk-based authentication.',
      capabilitiesList: [
        'Single Sign-On (SSO) with Multi-Protocol Federation',
        'Adaptive Multi-Factor Authentication (MFA) & Biometric Auth',
        'Deep Windows Active Directory & RDP Session Protection',
        'Automated User Lifecycle Provisioning (SCIM 2.0)'
      ],
      businessBenefits: [
        'Eliminates credential-based security breaches',
        'Reduces user onboarding time from days to minutes',
        '100% compliance with ISO 27001 & SOC 2 access control controls'
      ],
      targetAudience: 'CISOs, Identity Architects, Enterprise IT Directors',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'soxit-complyment',
      name: 'SOXIT COMPLYment',
      category: 'security-trust',
      categoryLabel: 'Security & Trust',
      badgeClass: 'badge-protect',
      tagline: 'Automated continuous compliance and audit readiness platform.',
      summary: 'An enterprise GRC automation platform that streamlines policy workflows, evidence collection, and real-time audit readiness across ISO 27001, PCI DSS V4.0.1, DPDP, HIPAA, and GDPR frameworks.',
      problemSolved: 'Laborious spreadsheet-driven audit preparations, missing compliance evidence, and sudden non-compliance regulatory penalties.',
      solutionArchitecture: 'Automated evidence collector connecting to cloud providers, version control, and identity systems with continuous gap analysis.',
      capabilitiesList: [
        'Unified Compliance Framework Mapping (ISO 27001, PCI DSS, DPDP, HIPAA)',
        'Continuous Automated Evidence Collection from Multi-Cloud & SaaS',
        'Vendor Risk Assessment & Third-Party Audit Management',
        'One-Click Auditor-Ready Compliance Dossier Export'
      ],
      businessBenefits: [
        'Cuts compliance preparation overhead by over 70%',
        'Maintains continuous, real-time audit readiness throughout the year',
        'Accelerates enterprise vendor risk approvals'
      ],
      targetAudience: 'Chief Compliance Officers, Risk Directors, CISOs',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'deep-trust-web',
      name: 'Deep Trust Web',
      category: 'security-trust',
      categoryLabel: 'Security & Trust',
      badgeClass: 'badge-protect',
      tagline: 'Synthetic deepfake forensics and biometric integrity verification.',
      summary: 'An enterprise forensics platform engineered to detect synthetic media, generative deepfakes, and altered video/audio streams in real time.',
      problemSolved: 'Executive impersonation fraud, social engineering attacks, and fabricated media manipulating enterprise identity systems.',
      solutionArchitecture: 'Deep forensic analysis neural pipelines examining facial temporal consistency, compression artifacts, and biometric frequency spectrums.',
      capabilitiesList: [
        'Real-Time & Batch Video Synthetic Artifact Analysis',
        'Audio Waveform Frequency & Biometric Inconsistency Detection',
        'Cryptographic Evidence Chain & Chain-of-Custody Export'
      ],
      businessBenefits: [
        'Guarantees executive communication authenticity',
        'Hardens identity verification against deepfake biometric spoofing',
        'Mitigates brand damage from synthetic misinformation'
      ],
      targetAudience: 'Chief Information Security Officers, Fraud & Risk Directors',
      isFlagship: false,
      status: 'Enterprise Production'
    },
    {
      id: 'guardian-ai',
      name: 'Guardian AI',
      category: 'security-trust',
      categoryLabel: 'Security & Trust',
      badgeClass: 'badge-protect',
      tagline: 'AI prompt firewall and enterprise DLP guardrails platform.',
      summary: 'An inline security gateway that intercepts, sanitizes, and enforces compliance policies across incoming prompts and outgoing LLM responses in real time.',
      problemSolved: 'Confidential source code or PII exfiltration to external models, and malicious actors probing LLMs with jailbreak prompts.',
      solutionArchitecture: 'Low-latency inline proxy evaluating prompts against behavioral classification engines, semantic PII masks, and corporate boundary policies.',
      capabilitiesList: [
        'Adversarial Jailbreak & Prompt Injection Interception',
        'Automated PII / Sensitive Corporate Data Redaction',
        'Output Toxicity & Hallucinated Advice Boundary Checks'
      ],
      businessBenefits: [
        'Prevents proprietary enterprise data exfiltration into LLM providers',
        'Enforces company AI use policies without breaking developer velocity',
        'Sub-15ms inline interception latency'
      ],
      targetAudience: 'Security Engineers, Data Protection Officers, Enterprise AI Teams',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'agent-sentinel-watch',
      name: 'Agent Sentinel Watch',
      category: 'security-trust',
      categoryLabel: 'Security & Trust',
      badgeClass: 'badge-protect',
      tagline: 'AI security observability and autonomous agent monitoring platform.',
      summary: 'An enterprise observability control plane designed to monitor, audit, and safeguard autonomous AI agents and LLM tool-calling pipelines in production.',
      problemSolved: 'Unmonitored autonomous agents executing unintended tool calls, hallucinating sensitive data access, or succumbing to indirect prompt injections.',
      solutionArchitecture: 'Sidecar telemetry collector inspecting agent reasoning chains, tool execution arguments, context token drift, and API egress patterns.',
      capabilitiesList: [
        'Agent Tool-Call Execution Monitoring & Bounds Enforcement',
        'Indirect Prompt Injection & Context Poisoning Detection',
        'Continuous Token Cost, Latency & Hallucination Telemetry'
      ],
      businessBenefits: [
        'Enables safe enterprise deployment of autonomous AI agents',
        'Prevents unauthorized database mutations from autonomous workflows',
        'Complete compliance audit log for AI regulatory inquiries'
      ],
      targetAudience: 'Head of Enterprise AI, CISOs, Platform Engineering Teams',
      isFlagship: false,
      status: 'Enterprise Production'
    },

    // --- Data, AI & Intelligence Platforms ---
    {
      id: 'soxit-datav',
      name: 'SOXIT DataV',
      category: 'ai-data',
      categoryLabel: 'Data & AI',
      badgeClass: 'badge-operate',
      tagline: 'Enterprise data visualization, ETL & predictive analytics platform.',
      summary: 'A unified enterprise analytics platform enabling robust ETL, data mapping, team collaboration, and predictive insights with highly interactive executive dashboards.',
      problemSolved: 'Disconnected data silos, slow manual SQL reporting, and inability to visualize operational trends across complex business units.',
      solutionArchitecture: 'High-speed in-memory columnar query engine connecting to modern data warehouses, lakehouses, and transactional databases.',
      capabilitiesList: [
        'Drag-and-Drop Interactive Visualizations & Custom Dashboards',
        'Automated Data Mapping, Transformation & Scheduled ETL Pipelines',
        'Predictive Trend Analysis & Anomaly Detection Modeling',
        'Enterprise RBAC & Embedded Dashboard Distribution'
      ],
      businessBenefits: [
        'Empowers business leadership to make data-backed strategic decisions',
        'Eliminates multi-day data preparation lags',
        'Unifies disparate metrics into a single real-time executive cockpit'
      ],
      targetAudience: 'Chief Data Officers, Business Intelligence Heads, VP Operations',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'soxit-docxiq',
      name: 'SOXIT DocxIQ',
      category: 'ai-data',
      categoryLabel: 'Data & AI',
      badgeClass: 'badge-operate',
      tagline: 'AI-powered enterprise document intelligence & knowledge management.',
      summary: 'An intelligent document processing and knowledge platform that centralizes enterprise content, automates end-to-end classification and extraction, and enables instant semantic search.',
      problemSolved: 'Manual processing of thousands of PDF contracts, invoices, and compliance dossiers creating processing lag and data entry errors.',
      solutionArchitecture: 'Multimodal vision-language models with OCR, entity extraction pipelines, and vector search embeddings for high-precision document Q&A.',
      capabilitiesList: [
        'Automated Contract & Invoice Data Extraction (Key-Value & Table)',
        'Semantic Document Search with Source Lineage Citations',
        'Automated Compliance & Risk Clause Auditing',
        'Integration with Enterprise ERP, CRM & Cloud Repositories'
      ],
      businessBenefits: [
        'Accelerates document processing speed by over 80%',
        'Achieves 99.4% extraction accuracy across unstructured documents',
        'Guarantees auditable document governance across regulated workflows'
      ],
      targetAudience: 'Operations Leaders, Legal Directors, Financial Controllers',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'multiplex',
      name: 'Multiplex',
      category: 'ai-data',
      categoryLabel: 'Data & AI',
      badgeClass: 'badge-operate',
      tagline: 'Intelligent AI model router and cost-performance optimizer.',
      summary: 'An intelligent model routing engine that dynamically directs queries to the optimal foundation model or specialized SLM based on cost, latency, reasoning depth, and privacy constraints.',
      problemSolved: 'Overpaying for flagship frontier models on simple extraction queries, and facing single-provider outage vulnerability.',
      solutionArchitecture: 'Dynamic heuristic and semantic router providing a unified OpenAI-compatible endpoint with automatic failover and budget quotas.',
      capabilitiesList: [
        'Task Complexity Classification & Adaptive Model Selection',
        'Automatic Fallback & Failover Across Multi-Cloud Model Providers',
        'Unified API Standard with Enterprise Token Budget Governance'
      ],
      businessBenefits: [
        'Up to 60% reduction in foundation model API expenses',
        'Zero downtime resilience against individual model provider outages',
        'Strict data sovereignty routing for sensitive workloads'
      ],
      targetAudience: 'CTOs, AI Infrastructure Architects, Platform Engineering Leads',
      isFlagship: false,
      status: 'Enterprise Production'
    },

    // --- Enterprise & Operations Platforms ---
    {
      id: 'soxit-enterprise-os',
      name: 'Soxit-Enterprise-OS',
      category: 'enterprise-platforms',
      categoryLabel: 'Enterprise Platforms',
      badgeClass: 'badge-transform',
      tagline: 'Complete enterprise ERP platform designed for complex organizational workflows.',
      summary: 'A comprehensive enterprise resource planning platform engineered to unify financial controls, supply chain visibility, multi-entity operations, and administrative governance.',
      problemSolved: 'Fragmented legacy ERP environments that create reconciliation bottlenecks, data latency, and prohibitive licensing costs.',
      solutionArchitecture: 'Modular core architecture with event-driven data synchronization, real-time ledger accounting, and role-governed workflow automation.',
      capabilitiesList: [
        'Comprehensive Financial Ledger & Multi-Currency Management',
        'End-to-End Procurement & Inventory Lifecycle Controls',
        'Automated Enterprise Audit Trails & Compliance Logging',
        'Granular Role-Based Access Control (RBAC)'
      ],
      businessBenefits: [
        'Eliminates cross-departmental data silos',
        'Reduces end-of-period closing cycles by up to 65%',
        'Guarantees auditable governance across multi-entity units'
      ],
      targetAudience: 'Chief Information Officers, Chief Financial Officers, Operations Directors',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'worquestra',
      name: 'Worquestra',
      category: 'enterprise-platforms',
      categoryLabel: 'Enterprise Platforms',
      badgeClass: 'badge-transform',
      tagline: 'Project Management + HRM + CRM ERP for high-velocity teams.',
      summary: 'An integrated operational suite unifying client relationships, sprint management, project delivery, and human resource administration into a single cohesive system.',
      problemSolved: 'Scaling organizations struggling with 5+ fragmented SaaS subscriptions that isolate client data from resource planning.',
      solutionArchitecture: 'Single database multi-tenant architecture delivering unified identity, synchronized team billing, and real-time client engagement tracking.',
      capabilitiesList: [
        'Agile Sprint & Milestone Delivery Orchestration',
        'Human Resource Management, Onboarding & Leave Workflows',
        'Integrated Pipeline CRM & Client Billing Synchronization'
      ],
      businessBenefits: [
        'Consolidates SaaS spend across project and HR functions',
        'Real-time visibility into project margin and team utilization',
        'Seamless handoff from client deal closure to delivery sprint'
      ],
      targetAudience: 'Founders, VP Operations, Engineering Leads, Scaling Enterprises',
      isFlagship: false,
      status: 'Enterprise Production'
    },
    {
      id: 'campus-compass',
      name: 'Campus Compass',
      category: 'enterprise-platforms',
      categoryLabel: 'Enterprise Platforms',
      badgeClass: 'badge-transform',
      tagline: 'Complete student data management system for colleges and universities.',
      summary: 'An institutional campus management system that centralizes academic records, admissions, course scheduling, and student lifecycle administration.',
      problemSolved: 'Disjointed registrar, billing, and admissions records across higher education departments creating administrative lag.',
      solutionArchitecture: 'Secure academic record ledger with student self-service portal, faculty grade management, and regulatory compliance reporting.',
      capabilitiesList: [
        'End-to-End Student Admissions & Enrollment Registry',
        'Curriculum, Grading & Course Scheduling Engine',
        'Institutional Accreditation & Compliance Reporting'
      ],
      businessBenefits: [
        'Zero-loss academic record preservation',
        'Accelerated semester registration workflows',
        'Standardized regulatory compliance reporting'
      ],
      targetAudience: 'University Registrars, Academic Deans, Higher Education IT Directors',
      isFlagship: false,
      status: 'Enterprise Production'
    },
    {
      id: 'soxit-automax',
      name: 'SOXIT AutomaX',
      category: 'enterprise-platforms',
      categoryLabel: 'Enterprise Platforms',
      badgeClass: 'badge-transform',
      tagline: 'Intelligent IT operations & observability command center.',
      summary: 'An AI-powered IT operations (AIOps) platform that unifies monitoring, ITSM, and telemetry data into a single command center to reduce alert fatigue and accelerate incident resolution.',
      problemSolved: 'Alert noise across fragmented monitoring tools leading to delayed incident response and prolonged system downtime.',
      solutionArchitecture: 'Event correlation engine ingesting logs, metrics, and traces with automated root-cause analysis and self-healing workflow triggers.',
      capabilitiesList: [
        'Unified Observability Aggregator (Metrics, Logs, Traces)',
        'ML-Based Alert Noise Reduction & Deduplication',
        'Automated Root-Cause Diagnostic Workflows',
        'Self-Healing Remediation & Automated Runbook Execution'
      ],
      businessBenefits: [
        'Reduces Mean Time to Resolution (MTTR) by up to 55%',
        'Filters out 80%+ of false-positive alert noise',
        'Guarantees 99.9% uptime compliance across critical enterprise systems'
      ],
      targetAudience: 'VP Infrastructure, Site Reliability Engineers, IT Operations Heads',
      isFlagship: true,
      status: 'Enterprise Production'
    },

    // --- Talent, Learning & Workforce Acceleration ---
    {
      id: 'soxit-zen',
      name: 'SOXIT Zen',
      category: 'talent-learning',
      categoryLabel: 'Talent & Learning',
      badgeClass: 'badge-optimize',
      tagline: 'AI-powered enterprise learning intelligence system.',
      summary: 'An enterprise-grade AI Learning Experience Platform (LXP) that accelerates employee and client onboarding, standardizes B2B operational procedures, and delivers adaptive self-learning.',
      problemSolved: 'Manual, time-consuming employee onboarding bottlenecks and inconsistent training across distributed enterprise teams.',
      solutionArchitecture: 'Adaptive learning path engine with generative micro-modules, automated comprehension assessments, and role-based competency tracking.',
      capabilitiesList: [
        'Adaptive Personalized Learning Paths & Micro-Assessments',
        'Standardized B2B Operational SOP Interactive Modules',
        'Automated Competency Mapping & Skill Readiness Dashboards',
        'Enterprise HRIS & LMS Interoperability'
      ],
      businessBenefits: [
        'Cuts new hire onboarding ramp time by over 50%',
        'Standardizes operational compliance and delivery quality across hubs',
        'Drives measurable employee retention and skill mastery'
      ],
      targetAudience: 'Chief Learning Officers, HR Directors, Delivery Heads',
      isFlagship: true,
      status: 'Enterprise Production'
    },
    {
      id: 'talent-forge',
      name: 'Talent Forge',
      category: 'talent-learning',
      categoryLabel: 'Talent & Learning',
      badgeClass: 'badge-optimize',
      tagline: 'Enterprise job portal and talent acquisition ecosystem.',
      summary: 'An intelligent recruiting and job matching platform that connects verified talent with high-demand enterprise openings through structured competency mapping.',
      problemSolved: 'Low candidate relevance, resume keyword stuffing, and prolonged time-to-hire in specialized technology roles.',
      solutionArchitecture: 'Structured skills taxonomy engine with automated applicant tracking and candidate validation pipelines.',
      capabilitiesList: [
        'Verified Role Taxonomy & Skill Matrix Matching',
        'Applicant Tracking System (ATS) Pipeline Integration',
        'Direct Candidate Engagement & Interview Scheduling'
      ],
      businessBenefits: [
        'Reduces candidate screening overhead by over 50%',
        'Improves job-to-skill alignment for specialized hires',
        'Accelerates organizational hiring velocity'
      ],
      targetAudience: 'Chief People Officers, Talent Acquisition Directors',
      isFlagship: false,
      status: 'Enterprise Production'
    },
    {
      id: 'skill-sphere-pro',
      name: 'Skill Sphere Pro',
      category: 'talent-learning',
      categoryLabel: 'Talent & Learning',
      badgeClass: 'badge-optimize',
      tagline: 'Online skill-testing and candidate benchmark application.',
      summary: 'A secure online assessment platform designed to evaluate and verify technical, analytical, and professional competencies in proctored environments.',
      problemSolved: 'Unreliable self-reported resumes leading to expensive technical mis-hires.',
      solutionArchitecture: 'Automated challenge runtime environment with cheating prevention telemetry, automated scoring, and benchmark reporting.',
      capabilitiesList: [
        'Domain-Specific Practical Coding & Analytical Assessments',
        'Browser Security & Identity Integrity Checks',
        'Comparative Cohort Benchmarking & Skill Visualizations'
      ],
      businessBenefits: [
        'Objective, empirical candidate capability scores',
        'Eliminates senior engineering interview fatigue on unqualified applicants',
        'Standardized hiring bar across global engineering hubs'
      ],
      targetAudience: 'Technical Hiring Managers, Assessment Centers',
      isFlagship: false,
      status: 'Enterprise Production'
    },
    {
      id: 'edusphere-connect',
      name: 'Edusphere Connect',
      category: 'talent-learning',
      categoryLabel: 'Talent & Learning',
      badgeClass: 'badge-optimize',
      tagline: 'Community platform for teaching and training professionals.',
      summary: 'A collaborative professional network for educators, corporate trainers, and pedagogical researchers to share curriculum frameworks, methodologies, and peer reviews.',
      problemSolved: 'Curriculum isolation and fragmented professional development opportunities among enterprise trainers and educators.',
      solutionArchitecture: 'Moderated community workspace with peer-reviewed curriculum repositories, webinars, and pedagogical resource libraries.',
      capabilitiesList: [
        'Peer-Reviewed Curriculum Sharing & Co-Creation',
        'Topic-Specific Educator Circles & Working Groups',
        'Verified Educator Profiles & Contribution Indexing'
      ],
      businessBenefits: [
        'Accelerates course curriculum development cycles',
        'Fosters shared pedagogical best practices',
        'Connects training specialists with institutional opportunities'
      ],
      targetAudience: 'Educational Institutions, Enterprise L&D Directors',
      isFlagship: false,
      status: 'Enterprise Production'
    }
  ];

  // INDUSTRY VERTICALS (Enterprise Executiond under SOXIT)
  const industryData = [
    {
      id: 'bfsi',
      name: 'Banking & Financial Services',
      tagline: 'Secure, high-concurrency digital banking & PCI DSS compliance.',
      description: 'We help global banking, microfinance, and fintech institutions modernize core transaction systems, establish zero-trust architectures, and achieve strict regulatory audit readiness.',
      highlight: 'Delivered PCI DSS V4.0.1 compliance and secure digital channels with zero business interruption.',
      metrics: ['100% PCI DSS Compliance', 'Zero Fraud Ingress', '<15ms Transaction Latency'],
      solutions: ['PCI DSS V4.0.1 & SOC 2 Certification', 'Core Banking Modernization', 'Fraud Prevention & AI Guardrails', 'Automated AML & Risk Reporting']
    },
    {
      id: 'manufacturing',
      name: 'Industrial & Manufacturing',
      tagline: 'OT/SCADA security, smart IoT telemetry & operational agility.',
      description: 'Industrial manufacturers must connect shop-floor operational technology with enterprise cloud systems without introducing systemic cyber vulnerabilities.',
      highlight: 'Secured multi-site SCADA networks and built predictive maintenance pipelines reducing downtime by 38%.',
      metrics: ['38% Downtime Reduction', 'OT/IT Zero-Trust Perimeter', 'Real-Time Edge Telemetry'],
      solutions: ['OT / SCADA Security Architecture', 'Predictive Equipment Maintenance', 'Supply Chain Telemetry & ERP Sync', 'Industrial IoT Integration']
    },
    {
      id: 'public-sector',
      name: 'Public Sector & Government',
      tagline: 'High-assurance citizen services & sovereign compliance.',
      description: 'Enabling government entities and public utilities to deliver frictionless, resilient digital citizen services backed by stringent data sovereignty and compliance.',
      highlight: 'Modernized mission-critical citizen portals handling millions of daily records under strict national compliance.',
      metrics: ['100% Sovereign Data Compliance', 'Sub-second Citizen Portal Triage', '24/7 National SOC Monitoring'],
      solutions: ['Sovereign Cloud & Zero-Trust Architecture', 'Citizen Service Portal Modernization', 'National Cybersecurity Operations', 'DPDP & GDPR Compliance']
    },
    {
      id: 'retail',
      name: 'Retail & E-Commerce',
      tagline: 'Omnichannel resilience, peak scale & personalized intelligence.',
      description: 'Modern retail requires instantaneous digital experiences, frictionless checkout, and real-time inventory synchronization across multi-channel environments.',
      highlight: 'Engineered high-concurrency microservices infrastructure handling 10x traffic spikes during peak commercial seasons.',
      metrics: ['10x Traffic Spike Resilience', '99.99% Checkout Availability', 'Real-Time Inventory Sync'],
      solutions: ['High-Concurrency E-Commerce Cloud', 'Omnichannel Customer Experience', 'Automated Inventory & Supply Chain', 'Secure Payment Gateways']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Pharma',
      tagline: 'HIPAA-compliant health systems & secure clinical data pipelines.',
      description: 'Bridging healthcare providers, pharmaceutical research, and patient portals with unbreakable data privacy, HIPAA compliance, and clinical analytics.',
      highlight: 'Implemented HIPAA-compliant patient data lakehouses enabling high-throughput clinical research while guaranteeing data privacy.',
      metrics: ['100% HIPAA & DPDP Compliance', 'Zero Patient PII Leaks', 'Secure Telemedicine Infrastructure'],
      solutions: ['HIPAA / DPDP Compliant Data Platforms', 'Electronic Health Record (EHR) Security', 'Clinical Trial Analytics & AI', 'Telehealth Cloud Infrastructure']
    },
    {
      id: 'agriculture',
      name: 'Agriculture & AgriTech',
      tagline: 'Smarter agricultural growth, supply chain traceability & IoT.',
      description: 'Empowering agricultural enterprises and cooperative networks with edge IoT sensor telemetry, weather modeling, and end-to-end supply chain transparency.',
      highlight: 'Built distributed agricultural telemetry networks connecting rural farming hubs to central distribution markets.',
      metrics: ['Real-Time Soil & Climate Telemetry', 'Complete Farm-to-Table Traceability', 'Predictive Yield Analytics'],
      solutions: ['Agritech Edge IoT Telemetry', 'Yield Prediction & Climate Modeling', 'Cold-Chain Logistics Tracking', 'Agritech Mobile Portals']
    }
  ];

  // CLIENT PROOF & VERIFIED CASE STUDIES
  const clientProofData = [
    {
      client: 'Mobily Digital Channels',
      domain: 'Telecommunications & Digital Services',
      achievement: 'PCI DSS V4.0.1 Certification Milestone',
      quote: 'We sincerely commend SOXIT for their outstanding technical leadership and rigorous execution in helping Mobily Digital Channels achieve PCI DSS V4.0.1 certification. Their expertise, commitment, and timely milestone delivery were crucial to our success across digital and POS channels.',
      impact: '100% Audit Readiness Across All POS Channels'
    },
    {
      client: 'Light Microfinance',
      domain: 'Financial Services & Microfinance',
      achievement: 'Seamless Core Platform Support & 24/7 SLA',
      quote: 'The Light Microfinance team expresses high appreciation for SOXIT’s exceptional support and seamless product journey. With other technology partners, timely technical support is always an operational bottleneck—with SOXIT, our SLAs have never slipped.',
      impact: '99.9% Core System Availability'
    },
    {
      client: 'Global Technology Enterprise',
      domain: 'Enterprise Cloud & Capability Expansion',
      achievement: 'Dedicated Delivery Center & Resource Augmentation',
      quote: 'SOXIT has been an invaluable strategic partner in scaling our engineering workforce with verified, top-tier talent. Their proactive delivery centers and deep technical understanding ensured seamless continuity during a high-stakes infrastructure overhaul.',
      impact: 'Rapid 14-Day Delivery Center Deployment'
    }
  ];

  const perspectiveArticles = [
    {
      id: 'ai-governance-framework',
      category: 'AI Governance & Architecture',
      title: 'From Experimentation to Operational Discipline: The Enterprise AI Governance Imperative',
      subtitle: 'Why 80% of enterprise AI proofs-of-concept stall at production and how disciplined data controls break the bottleneck.',
      readTime: '6 min read',
      date: 'Q3 2026 Executive Briefing',
      practice: 'Data, AI & Intelligence Enablement',
      color: '#A855F7',
      executiveSummary:
        'Organizations are aggressively deploying generative and agentic models, yet few have instituted the guardrails, model registries, and data lineage pipelines necessary to mitigate hallucinations, data leakage, and compliance penalties. This executive briefing outlines our 4-stage framework for responsible enterprise AI operationalization.',
      takeaways: [
        'Model utility is constrained by underlying data governance, not parameter size.',
        'Agentic systems require continuous boundary observability and tool-execution bounds.',
        'Cross-functional model risk committees must align technical teams with corporate legal and risk officers.'
      ]
    },
    {
      id: 'cyber-resilience-convergence',
      category: 'Cyber Resilience',
      title: 'Beyond the Perimeter: Engineering Resilient Digital Operations in Distributed Architectures',
      subtitle: 'Shifting enterprise security investment from reactive defense to business-aligned digital trust.',
      readTime: '8 min read',
      date: 'Q3 2026 Executive Briefing',
      practice: 'Cybersecurity & Digital Trust',
      color: '#FF4343',
      executiveSummary:
        'As corporate perimeters dissolve into multi-cloud environments and third-party API dependencies, traditional defensive postures fail. Leading CISOs are reorienting toward operational cyber resilience—ensuring critical business functions sustain continuity during active adversity.',
      takeaways: [
        'Regulatory frameworks (DORA, NIS2, DPDP) mandate demonstrable operational continuity, not merely point-in-time audits.',
        'Secure-by-design principles must be enforced across continuous integration and infrastructure-as-code pipelines.',
        'Digital trust is an enterprise differentiator that directly accelerates partnership and customer acquisition.'
      ]
    },
    {
      id: 'legacy-modernization-dilemma',
      category: 'Technology Transformation',
      title: 'Deconstructing the Modernization Dilemma: Why Modular Strangler Patterns Beat Big-Bang Re-Platforming',
      subtitle: 'A disciplined architectural approach to legacy debt reduction that safeguards revenue continuity.',
      readTime: '7 min read',
      date: 'Q2 2026 Executive Briefing',
      practice: 'Digital & Technology Transformation',
      color: '#00E5FF',
      executiveSummary:
        'Multi-year "rip-and-replace" core modernizations routinely overrun budgets and destabilize critical operations. We present an empirical methodology for incremental strangler architecture, modernizing high-impact domain boundaries while maintaining core transactional stability.',
      takeaways: [
        'Technical debt must be quantified as operational drag and balance-sheet risk.',
        'API virtualization shields business operations during underlying monolithic database decoupling.',
        'Modernization success is measured by release velocity and operational stability, not lines of rewritten code.'
      ]
    },
    {
      id: 'it-operating-model-velocity',
      category: 'Service Excellence',
      title: 'Re-Engineering the IT Operating Model for Business Velocity',
      subtitle: 'Aligning technology operations, SLA telemetry, and service management with rapid corporate delivery.',
      readTime: '5 min read',
      date: 'Q2 2026 Executive Briefing',
      practice: 'IT Operating Model & Service Excellence',
      color: '#FF6418',
      executiveSummary:
        'High-velocity digital engineering creates severe friction when legacy IT service desks and change advisory boards operate on manual, multi-week ticket cycles. This briefing details the modernization of ITSM frameworks into automated, telemetry-driven operating platforms.',
      takeaways: [
        'Replace manual approval gates with automated compliance telemetry and continuous integration assertions.',
        'Reorient service management around end-to-end customer journeys rather than siloed infrastructure tiers.',
        'Predictable service metrics empower leadership to make data-backed capacity and capital allocation decisions.'
      ]
    }
  ];

  // ==========================================
  // INITIALIZERS & CONTROLLERS
  // ==========================================

  function initCrystalFluidCanvas() {
    const canvas = document.getElementById('crystalFluidCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width, height;
    const particles = [];
    const PARTICLE_COUNT = 45;

    function handleResize() {
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || 600;
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    const colors = [
      'rgba(0, 229, 255, 0.45)', // Cyan
      'rgba(255, 100, 24, 0.45)', // Orange
      'rgba(168, 85, 247, 0.35)', // Purple
      'rgba(255, 67, 67, 0.35)'   // Crimson
    ];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.5 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 0.65,
        vy: (Math.random() - 0.5) * 0.65
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Connect near particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(148, 163, 184, ${0.18 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

  function initDiagnosticTensions() {
    const tabsContainer = document.getElementById('tensionTabs');
    const ambitionEl = document.getElementById('tensionAmbition');
    const realityEl = document.getElementById('tensionReality');
    const interventionEl = document.getElementById('tensionIntervention');
    if (!tabsContainer || !ambitionEl || !realityEl || !interventionEl) return;

    tabsContainer.innerHTML = '';

    diagnosticTensions.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `interactive-tab ${index === 0 ? 'active' : ''}`;
      btn.innerHTML = `
        <div class="tab-kicker">TENSION 0${index + 1}</div>
        <div class="tab-title">${item.label}</div>
      `;
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.interactive-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderActiveTension(index);
      });
      tabsContainer.appendChild(btn);
    });

    function renderActiveTension(index) {
      const t = diagnosticTensions[index];
      ambitionEl.textContent = t.strategicAmbition;
      realityEl.textContent = t.operationalReality;
      interventionEl.textContent = t.soxitIntervention;
    }

    renderActiveTension(0);
  }

  function initClosedLoop() {
    const cycleCards = document.querySelectorAll('.cycle-card');
    const titleEl = document.getElementById('loopActiveTitle');
    const headlineEl = document.getElementById('loopActiveHeadline');
    const principleEl = document.getElementById('loopActivePrinciple');
    const synergyEl = document.getElementById('loopActiveSynergy');
    const linkEl = document.getElementById('loopActiveLink');
    if (!cycleCards.length || !titleEl || !headlineEl || !principleEl || !synergyEl) return;

    cycleCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        selectStage(id);
      });
    });

    function selectStage(disciplineId) {
      cycleCards.forEach(c => {
        if (c.getAttribute('data-id') === disciplineId) {
          c.classList.add('active');
        } else {
          c.classList.remove('active');
        }
      });

      const disc = consultingData.find(d => d.id === disciplineId);
      if (!disc) return;

      titleEl.className = `badge ${disc.badgeClass}`;
      titleEl.textContent = `Stage ${disc.index} — ${disc.pillarName.toUpperCase()}`;
      headlineEl.textContent = `"${disc.headline}"`;
      principleEl.textContent = disc.operatingPrinciple;
      synergyEl.textContent = disc.synergyNarrative;
      if (linkEl) linkEl.href = disc.detailLink;
    }
  }

  function initDisciplines() {
    const tabs = document.querySelectorAll('.discipline-tab');
    const titleEl = document.getElementById('discTitle');
    const indexEl = document.getElementById('discIndex');
    const headlineEl = document.getElementById('discHeadline');
    const descEl = document.getElementById('discDesc');
    const listEl = document.getElementById('discFocusList');
    const outcomeEl = document.getElementById('discOutcome');
    const principleEl = document.getElementById('discPrinciple');
    const productsEl = document.getElementById('discProducts');
    const exploreBtn = document.getElementById('discExploreBtn');
    if (!tabs.length || !titleEl || !listEl) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const id = tab.getAttribute('data-id');
        tabs.forEach(t => {
          t.classList.remove('active');
          const idxSpan = t.querySelector('div:first-child');
          const titleDiv = t.querySelector('div:last-child');
          if (idxSpan) idxSpan.style.color = '#64748b';
          if (titleDiv) titleDiv.style.color = '#475569';
        });

        tab.classList.add('active');
        const activeIdx = tab.querySelector('div:first-child');
        const activeTitle = tab.querySelector('div:last-child');
        if (activeIdx) activeIdx.style.color = '#ea580c';
        if (activeTitle) activeTitle.style.color = '#07142b';

        renderDiscipline(id);
      });
    });

    function renderDiscipline(id) {
      const d = consultingData.find(item => item.id === id);
      if (!d) return;

      if (indexEl) indexEl.textContent = `${d.index} // ${d.pillarName.toUpperCase()}`;
      titleEl.textContent = d.practiceTitle;
      if (headlineEl) headlineEl.textContent = d.headline;
      if (descEl) descEl.textContent = d.description;

      listEl.innerHTML = '';
      d.keyFocusAreas.forEach(item => {
        const li = document.createElement('li');
        li.style.display = 'flex';
        li.style.alignItems = 'flex-start';
        li.style.gap = '10px';
        li.style.fontSize = '0.94rem';
        li.style.color = '#07142b';
        li.innerHTML = `
          <span style="color: ${d.accentColor}; font-weight: 800; font-family: var(--font-mono); font-size: 0.8rem;">▹</span>
          <span>${item}</span>
        `;
        listEl.appendChild(li);
      });

      if (outcomeEl) outcomeEl.textContent = d.outcome;
      if (principleEl) principleEl.textContent = d.operatingPrinciple;

      if (productsEl) {
        productsEl.innerHTML = '';
        d.relatedProducts.forEach(pName => {
          const pill = document.createElement('span');
          pill.className = 'badge badge-status';
          pill.style.borderColor = '#e2e8f0';
          pill.style.cursor = 'pointer';
          pill.textContent = pName;
          pill.addEventListener('click', () => {
            const prod = productsData.find(p => p.name.toLowerCase() === pName.toLowerCase() || p.id.toLowerCase() === pName.toLowerCase().replace(/\s+/g, '-'));
            if (prod) openProductModal(prod);
          });
          productsEl.appendChild(pill);
        });
      }

      if (exploreBtn) exploreBtn.href = d.detailLink;
    }

    renderDiscipline('digital-transformation');
  }

  function initStrategyMatrix() {
    const listContainer = document.getElementById('matrixNeedList');
    const badgeEl = document.getElementById('matrixOutcomeBadge');
    const titleEl = document.getElementById('matrixCapTitle');
    const metricEl = document.getElementById('matrixMetricText');
    const descEl = document.getElementById('matrixDescText');
    const exploreBtn = document.getElementById('matrixExploreBtn');
    if (!listContainer || !badgeEl || !titleEl || !metricEl || !descEl) return;

    listContainer.innerHTML = '';

    strategyMatrix.forEach((m, idx) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `interactive-tab ${idx === 0 ? 'active' : ''}`;
      btn.innerHTML = `
        <div style="font-family: var(--font-mono); font-size: 0.6875rem; color: #ea580c; margin-bottom: 2px; font-weight: 700;">
          STRATEGIC PRIORITY 0${idx + 1}
        </div>
        <div style="font-size: 0.94rem; font-weight: 700; color: #07142b;">
          ${m.strategicNeed}
        </div>
      `;
      btn.addEventListener('click', () => {
        listContainer.querySelectorAll('.interactive-tab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMatrixItem(m.id);
      });
      listContainer.appendChild(btn);
    });

    function renderMatrixItem(id) {
      const m = strategyMatrix.find(item => item.id === id);
      if (!m) return;

      badgeEl.textContent = m.businessOutcome;
      badgeEl.style.color = m.outcomeColor;
      titleEl.textContent = m.soxitCapability;
      metricEl.textContent = m.executionMetric;
      descEl.textContent = m.description;

      const matchedDisc = consultingData.find(d => d.practiceTitle === m.soxitCapability);
      if (exploreBtn && matchedDisc) {
        exploreBtn.href = matchedDisc.detailLink;
      }
    }

    renderMatrixItem('matrix-modernize');
  }

  function initPlatforms() {
    const filtersContainer = document.getElementById('platformFilters');
    const gridContainer = document.getElementById('platformGrid');
    if (!filtersContainer || !gridContainer) return;

    const categories = [
      { id: 'all', label: 'All Platforms (16)' },
      { id: 'security-trust', label: 'Security & Trust (5)' },
      { id: 'ai-data', label: 'Data & AI (3)' },
      { id: 'enterprise-platforms', label: 'Enterprise Platforms (4)' },
      { id: 'talent-learning', label: 'Talent & Workforce (4)' }
    ];

    filtersContainer.innerHTML = '';

    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `filter-pill ${cat.id === 'all' ? 'active' : ''}`;
      btn.textContent = cat.label;
      btn.addEventListener('click', () => {
        filtersContainer.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderGrid(cat.id);
      });
      filtersContainer.appendChild(btn);
    });

    function renderGrid(catId) {
      gridContainer.innerHTML = '';

      const filtered = catId === 'all' ? productsData : productsData.filter(p => p.category === catId);

      filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'platform-card';
        card.innerHTML = `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; gap: 8px;">
              <span class="badge ${p.badgeClass}">${p.categoryLabel}</span>
              ${p.isFlagship ? '<span class="badge badge-flagship">★ Flagship</span>' : ''}
            </div>
            <h3 style="font-size: 1.35rem; font-weight: 800; color: #07142b; margin-bottom: 6px;">
              ${p.name}
            </h3>
            <p style="font-size: 0.86rem; color: #ea580c; font-weight: 600; margin-bottom: 12px; line-height: 1.45;">
              ${p.tagline}
            </p>
            <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin-bottom: 20px;">
              ${p.summary}
            </p>
          </div>
          <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; display: flex; justify-content: space-between; align-items: center;">
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #64748b;">${p.status}</span>
            <span style="font-size: 0.85rem; color: #0284c7; font-weight: 700; display: inline-flex; align-items: center; gap: 4px;">
              Technical Specs ➔
            </span>
          </div>
        `;
        card.addEventListener('click', () => openProductModal(p));
        gridContainer.appendChild(card);
      });
    }

    renderGrid('all');
  }

  function initIndustryVerticals() {
    const tabsContainer = document.getElementById('industryTabs');
    const contentContainer = document.getElementById('industryContent');
    if (!tabsContainer || !contentContainer) return;

    tabsContainer.innerHTML = '';

    industryData.forEach((ind, index) => {
      const tab = document.createElement('button');
      tab.type = 'button';
      tab.className = `filter-pill ${index === 0 ? 'active' : ''}`;
      tab.textContent = ind.name;
      tab.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.filter-pill').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderIndustry(ind.id);
      });
      tabsContainer.appendChild(tab);
    });

    function renderIndustry(id) {
      const ind = industryData.find(i => i.id === id);
      if (!ind) return;

      contentContainer.innerHTML = `
        <div style="background: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 36px; box-shadow: 0 4px 20px rgba(15, 23, 42, 0.05);">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 36px;">
            <div>
              <span class="badge badge-discipline" style="margin-bottom: 12px;">INDUSTRY ARCHITECTURE</span>
              <h3 style="font-size: 1.7rem; font-weight: 800; color: #07142b; margin-bottom: 10px;">
                ${ind.name}
              </h3>
              <p style="font-size: 1.05rem; font-weight: 600; color: #ea580c; margin-bottom: 16px;">
                ${ind.tagline}
              </p>
              <p style="color: #475569; font-size: 0.98rem; line-height: 1.68; margin-bottom: 24px;">
                ${ind.description}
              </p>
              <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-left: 4px solid #0284c7; padding: 16px 20px; border-radius: 0 10px 10px 0; margin-bottom: 24px;">
                <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #0284c7; font-weight: 700; text-transform: uppercase;">VERIFIED OUTCOME</div>
                <div style="color: #07142b; font-size: 0.95rem; font-weight: 600; margin-top: 4px;">${ind.highlight}</div>
              </div>
              <a href="../index.html#contact" class="btn btn-primary">
                Consult with Industry Practice Lead →
              </a>
            </div>

            <div>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #475569; text-transform: uppercase; margin-bottom: 14px; font-weight: 700;">
                CORE INDUSTRY SOLUTIONS & ACCELERATORS
              </div>
              <ul style="list-style: none; padding: 0; margin: 0 0 28px 0; display: grid; gap: 12px;">
                ${ind.solutions.map(s => `
                  <li style="display: flex; align-items: center; gap: 10px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px 16px; border-radius: 10px;">
                    <span style="color: var(--soxit-orange-500); font-weight: bold;">✔</span>
                    <span style="color: #07142b; font-size: 0.92rem; font-weight: 600;">${s}</span>
                  </li>
                `).join('')}
              </ul>

              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: #475569; text-transform: uppercase; margin-bottom: 12px; font-weight: 700;">
                TARGET OPERATIONAL METRICS
              </div>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px;">
                ${ind.metrics.map(m => `
                  <div style="background: #f0f9ff; border: 1px solid #bae6fd; border-radius: 10px; padding: 12px 14px; text-align: center;">
                    <div style="font-size: 0.82rem; font-weight: 700; color: #0284c7;">${m}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    renderIndustry('bfsi');
  }

  function initClientProof() {
    const container = document.getElementById('clientProofGrid');
    if (!container) return;

    container.innerHTML = '';

    clientProofData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card-dark';
      card.style.padding = '32px 28px';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.justifyContent = 'space-between';
      card.innerHTML = `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            <span class="badge badge-transform">${item.domain}</span>
            <span style="color: #FF8544; font-size: 1.1rem;">★★★★★</span>
          </div>
          <h4 style="font-size: 1.25rem; font-weight: 800; color: #07142b; margin-bottom: 8px;">
            ${item.client}
          </h4>
          <div style="font-family: var(--font-mono); font-size: 0.78rem; color: #0284c7; font-weight: 700; margin-bottom: 16px;">
            ${item.achievement}
          </div>
          <p style="font-size: 0.92rem; color: #334155; line-height: 1.68; font-style: italic; margin-bottom: 20px;">
            "${item.quote}"
          </p>
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; display: flex; align-items: center; gap: 8px;">
          <span style="color: #22C55E; font-weight: bold;">✔</span>
          <span style="font-family: var(--font-mono); font-size: 0.76rem; color: #475569; font-weight: 600;">${item.impact}</span>
        </div>
      `;
      container.appendChild(card);
    });
  }

  function initPerspective() {
    const grid = document.getElementById('perspectiveGrid');
    if (!grid) return;

    grid.innerHTML = '';

    perspectiveArticles.forEach(a => {
      const card = document.createElement('div');
      card.className = 'perspective-card';
      card.innerHTML = `
        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;">
            <span class="badge" style="background: #f8fafc; color: ${a.color}; border: 1px solid #e2e8f0;">${a.category}</span>
            <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #64748b;">${a.readTime}</span>
          </div>
          <h3 style="font-size: 1.35rem; font-weight: 800; color: #07142b; margin-bottom: 10px; line-height: 1.35;">
            ${a.title}
          </h3>
          <p style="font-size: 0.88rem; color: #ea580c; font-weight: 600; margin-bottom: 14px; line-height: 1.5;">
            ${a.subtitle}
          </p>
          <p style="font-size: 0.9rem; color: #475569; line-height: 1.6; margin-bottom: 22px;">
            ${a.executiveSummary.slice(0, 140)}...
          </p>
        </div>
        <div style="border-top: 1px solid #e2e8f0; padding-top: 14px; display: flex; justify-content: space-between; align-items: center;">
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: #64748b;">${a.date}</span>
          <span style="font-size: 0.85rem; color: #0284c7; font-weight: 700;">Read Executive Briefing ➔</span>
        </div>
      `;
      card.addEventListener('click', () => openPerspectiveModal(a));
      grid.appendChild(card);
    });
  }

  function openProductModal(p) {
    const modal = document.getElementById('productModal');
    if (!modal) return;

    const catEl = document.getElementById('modalProdCategory');
    const titleEl = document.getElementById('modalProdTitle');
    const taglineEl = document.getElementById('modalProdTagline');
    const summaryEl = document.getElementById('modalProdSummary');
    const probEl = document.getElementById('modalProdProblem');
    const archEl = document.getElementById('modalProdArch');
    const capsList = document.getElementById('modalProdCaps');
    const benefitsList = document.getElementById('modalProdBenefits');
    const audEl = document.getElementById('modalProdAudience');

    if (catEl) catEl.textContent = p.categoryLabel;
    if (titleEl) titleEl.textContent = p.name;
    if (taglineEl) taglineEl.textContent = p.tagline;
    if (summaryEl) summaryEl.textContent = p.summary;
    if (probEl) probEl.textContent = p.problemSolved;
    if (archEl) archEl.textContent = p.solutionArchitecture;
    if (audEl) audEl.textContent = p.targetAudience;

    if (capsList) {
      capsList.innerHTML = '';
      p.capabilitiesList.forEach(cap => {
        const li = document.createElement('li');
        li.style.marginBottom = '8px';
        li.style.display = 'flex';
        li.style.gap = '8px';
        li.innerHTML = `<span style="color: #00E5FF; font-weight: bold;">✔</span> <span>${cap}</span>`;
        capsList.appendChild(li);
      });
    }

    if (benefitsList) {
      benefitsList.innerHTML = '';
      p.businessBenefits.forEach(ben => {
        const li = document.createElement('li');
        li.style.marginBottom = '8px';
        li.style.display = 'flex';
        li.style.gap = '8px';
        li.innerHTML = `<span style="color: #FF8544; font-weight: bold;">★</span> <span>${ben}</span>`;
        benefitsList.appendChild(li);
      });
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function openPerspectiveModal(a) {
    const modal = document.getElementById('perspectiveModal');
    if (!modal) return;

    const catEl = document.getElementById('modalPerspCategory');
    const timeEl = document.getElementById('modalPerspReadTime');
    const titleEl = document.getElementById('modalPerspTitle');
    const subEl = document.getElementById('modalPerspSubtitle');
    const roleEl = document.getElementById('modalPerspRole');
    const sumEl = document.getElementById('modalPerspSummary');
    const takeList = document.getElementById('modalPerspTakeaways');

    if (catEl) catEl.textContent = a.category;
    if (timeEl) timeEl.textContent = a.readTime;
    if (titleEl) titleEl.textContent = a.title;
    if (subEl) subEl.textContent = a.subtitle;
    if (roleEl) roleEl.textContent = `PRACTICE: ${a.practice.toUpperCase()} • ${a.date}`;
    if (sumEl) sumEl.textContent = a.executiveSummary;

    if (takeList) {
      takeList.innerHTML = '';
      a.takeaways.forEach(item => {
        const li = document.createElement('li');
        li.style.marginBottom = '10px';
        li.style.display = 'flex';
        li.style.gap = '10px';
        li.innerHTML = `<span style="color: #00E5FF; font-weight: bold;">▸</span> <span>${item}</span>`;
        takeList.appendChild(li);
      });
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAllModals() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    document.body.style.overflow = '';
  }

  function initModals() {
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', closeAllModals);
    });

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', e => {
        if (e.target === overlay) closeAllModals();
      });
    });

    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeAllModals();
    });
  }

  // DOM READY
  document.addEventListener('DOMContentLoaded', () => {
    initCrystalFluidCanvas();
    initDiagnosticTensions();
    initClosedLoop();
    initDisciplines();
    initStrategyMatrix();
    initPlatforms();
    initIndustryVerticals();
    initClientProof();
    initPerspective();
    initModals();
  });
})();
