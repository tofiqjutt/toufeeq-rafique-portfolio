import type {
  PersonalInfo,
  StatCard,
  ExperienceItem,
  ProjectCaseStudy,
  SkillGroup,
  ServiceCard,
  EngineeringPrinciple
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Muhammad Toufeeq Rafique',
  titles: [
    'Senior .NET Developer',
    'Software Engineer',
    'Senior Full Stack .NET Developer'
  ],
  location: 'Karachi, Pakistan',
  email: 'toufeeqrafiq@gmail.com',
  phone: '+92 316 2727998',
  linkedin: 'https://www.linkedin.com/in/muhammad-toufeeq-rafique-8ab06088/'
};

export const heroData = {
  mainHeadline: 'Senior .NET Developer & Software Engineer',
  supportingHeadline:
    'Building scalable enterprise applications, financial platforms, APIs, middleware, and integrations.',
  shortIntroduction:
    'I’m a software engineer with 8+ years of experience designing, developing, integrating, supporting, and maintaining enterprise-grade applications. My expertise spans ASP.NET Core, C#, Angular, SQL Server, REST/SOAP APIs, middleware, authentication, third-party integrations, and production application support.',
  systemStatus: {
    status: 'Operational',
    label: 'Enterprise Systems & API Engineering',
    experienceYears: '8+ Years Experience'
  }
};

export const statCards: StatCard[] = [
  {
    value: '8+',
    label: 'Years Experience',
    description: 'Specializing in enterprise systems, API development, and production lifecycle support.',
    icon: 'Briefcase'
  },
  {
    value: '.NET',
    label: 'Primary Backend Ecosystem',
    description: 'Deep engineering in C#, ASP.NET Core, .NET Core, Web API, EF Core, and Windows Services.',
    icon: 'Cpu'
  },
  {
    value: 'Enterprise',
    label: 'Application Experience',
    description: 'High-reliability financial platforms, asset management systems, and mission-critical workflows.',
    icon: 'Layers'
  },
  {
    value: 'APIs & Integrations',
    label: 'Core Expertise',
    description: 'Secure REST/SOAP integrations, payment gateways (RAAST), identity verification (NADRA), and middleware.',
    icon: 'GitBranch'
  }
];

export const currentRoleData = {
  company: 'IDENFO',
  role: 'Full Stack Developer (.NET) / Software Engineer',
  duration: 'March 2023 – Present',
  location: 'Karachi, Pakistan',
  overview:
    'Working on AMC-based financial web and mobile platforms, including backend services, APIs, middleware, integrations, production support, databases, deployments, and troubleshooting.',
  hblAmcHighlight: {
    title: 'HBL Asset Management / AMC Financial Platforms',
    quote:
      'I work on enterprise financial platforms supporting web and mobile experiences for an Asset Management Company. My responsibilities span backend APIs, middleware, business modules, database operations, third-party integrations, authentication, production support, troubleshooting, deployments, and system maintenance.',
    architectureFlow: [
      { name: 'Angular Web / Mobile Client', role: 'Presentation Layer & User Experience' },
      { name: '.NET Core APIs / Middleware', role: 'Routing, Token Validation & Request Pipeline' },
      { name: 'Business Logic Layer', role: 'Financial Rules, Module Processing & Service Orchestration' },
      { name: 'SQL Server Database', role: 'Transactional Consistency, Stored Procedures & High-Volume Data' }
    ],
    externalIntegrations: [
      'Banking & Payment Gateways',
      'Third-Party External Services',
      'SMS & Communication Gateways',
      'Financial Partner APIs'
    ]
  },
  responsibilities: [
    'Design, develop, and maintain REST/SOAP APIs and middleware services using ASP.NET Core and C#.',
    'Provide production support and technical maintenance for AMC-based financial web and mobile platforms.',
    'Work extensively with .NET Core, Angular 12, Windows Services, and SQL Server.',
    'Implement and maintain authentication and authorization mechanisms including JWT.',
    'Integrate third-party APIs and external systems.',
    'Work extensively with SQL Server including complex queries, stored procedures, functions, SQL Jobs, and performance optimization.',
    'Manage application deployments and hosting through IIS.',
    'Troubleshoot production issues and configuration problems.',
    'Collaborate with cross-functional teams on requirements, development, testing, deployment, and post-production support.',
    'Work with XML-based integrations, data transformation, and external API communication.',
    'Maintain source control and collaboration workflows using GitHub.',
    'Continuously enhance existing enterprise applications and services.'
  ],
  technologies: [
    'ASP.NET Core / .NET Core',
    'C#',
    'Angular 12',
    'SQL Server',
    'REST APIs',
    'SOAP APIs',
    'JWT',
    'XML / JSON',
    'IIS',
    'Windows Services',
    'GitHub',
    'Postman',
    'SOAP UI'
  ]
};

export const caseStudies: ProjectCaseStudy[] = [
  {
    id: 'hbl-amc',
    title: 'AMC Web Portal & Mobile Application Middleware',
    subtitle: 'Enterprise web and mobile application middleware solution for an Asset Management Company',
    organization: 'IDENFO / Asset Management Platform',
    period: 'March 2023 – Present',
    category: 'Financial Tech',
    description:
      'Enterprise web and mobile application middleware solution for an Asset Management Company. Engineered backend services, RESTful APIs, and secure middleware pipelines bridging mobile and web clients with core financial databases and external transactional gateways.',
    responsibilities: [
      'Developed and maintained middleware solutions connecting mobile & web frontends to core enterprise data.',
      'Built and enhanced REST APIs ensuring secure, structured communication and validation.',
      'Developed and optimized financial business modules and transaction pipelines.',
      'Supported mobile application backend services with performant payload structures.',
      'Worked with robust authentication mechanisms including JWT token lifecycle management.',
      'Integrated third-party systems and external financial web services.',
      'Performed production troubleshooting and rapid root-cause diagnosis on live services.',
      'Supported application deployments and environment hosting on IIS web servers.',
      'Optimized SQL queries and database operations for responsive client interactions.',
      'Maintained stored procedures, database functions, and scheduled SQL Jobs.',
      'Worked with cross-functional teams to deliver stable, audited features.',
      'Supported continuous application stability, data integrity, and performance.'
    ],
    technologies: [
      'C#',
      '.NET Core',
      'ASP.NET Core',
      'Angular',
      'SQL Server',
      'REST API',
      'SOAP',
      'JWT',
      'IIS',
      'GitHub'
    ],
    architectureFlow: {
      diagramType: 'amc',
      steps: [
        {
          step: 1,
          name: 'Angular Web & Mobile App',
          desc: 'Client-side interface delivering responsive asset portfolio management and transactions.',
          tech: 'Angular 12 / TypeScript'
        },
        {
          step: 2,
          name: '.NET Core APIs & Middleware',
          desc: 'Central middleware routing, JWT authentication filter, request sanitization, and rate-limiting.',
          tech: 'ASP.NET Core / C#'
        },
        {
          step: 3,
          name: 'Core Business Modules',
          desc: 'Asset management rules, portfolio calculations, workflow logic, and external adapter dispatch.',
          tech: 'C# Class Libraries / Services'
        },
        {
          step: 4,
          name: 'SQL Server Enterprise DB',
          desc: 'High-concurrency relational data store, stored procedures, audit logging, and scheduled maintenance jobs.',
          tech: 'MS SQL Server / T-SQL'
        }
      ],
      externalIntegrations: [
        'External Financial Gateways',
        'Authentication & Verification Services',
        'SMS / Notification Providers'
      ]
    }
  },
  {
    id: 'raast-payments',
    title: 'RAAST Phase I Implementation',
    subtitle: 'Secure Instant Payment Gateway API Integration & Testing',
    organization: 'Financial Technology / SBP Initiative',
    period: 'Integration & Testing Phase',
    category: 'Payment Gateway',
    description:
      "Participated in the integration and rigorous testing of secure payment gateway APIs for the State Bank of Pakistan's RAAST instant payment initiative. Handled certificate-based security, request signing, cryptographic verification, and end-to-end transaction validation.",
    responsibilities: [
      'API integration and testing for instant payment gateway transactions.',
      'Implemented JWT authentication with digital certificate verification.',
      'Configured encryption/decryption mechanisms for sensitive financial transaction payloads.',
      'Ensured secure API communication meeting regulatory financial standards.',
      'Conducted extensive API testing using Postman and SOAP UI.',
      'Validated end-to-end transaction workflows and idempotency handling.',
      'Handled cryptographic request signing and signature verification.',
      'Engineered structured API response handling and error mapping.',
      'Troubleshot financial integration bottlenecks and connectivity anomalies.'
    ],
    technologies: [
      'ASP.NET Core',
      'C#',
      'REST APIs',
      'JWT',
      'Digital Certificates',
      'Postman',
      'SOAP UI',
      'XML / JSON',
      'SQL Server'
    ],
    architectureFlow: {
      diagramType: 'raast',
      steps: [
        {
          step: 1,
          name: 'Transaction Dispatcher',
          desc: 'Payment request initiated with client certificate validation and payload structure validation.',
          tech: '.NET Core Services'
        },
        {
          step: 2,
          name: 'Security & Signing Layer',
          desc: 'Digital certificates, JWT generation, SHA-256 payload signing, and payload encryption.',
          tech: 'Cryptographic APIs / JWT'
        },
        {
          step: 3,
          name: 'RAAST Central Gateway API',
          desc: 'Secure mutual TLS (mTLS) handshake with State Bank of Pakistan RAAST network.',
          tech: 'RESTful TLS 1.3 / Secure HTTP'
        },
        {
          step: 4,
          name: 'Reconciliation & DB Store',
          desc: 'Transaction status logging, audit record storage, and SQL Server reconciliation updates.',
          tech: 'SQL Server / Stored Procedures'
        }
      ]
    }
  },
  {
    id: 'zong-lbs-cbs',
    title: 'ZONG LBS & CBS Integration',
    subtitle: 'Location-Based Services & SMS Field Force Management Platform',
    organization: 'Platinum Pharmaceuticals',
    period: 'Nov 2021 – Feb 2023',
    category: 'Telecom & LBS',
    description:
      'A location tracking and SMS-based field force management platform integrating ZONG LBS REST APIs and CBS SOAP APIs for real-time field tracking, automated messaging, and scheduled services.',
    responsibilities: [
      'Integrated ZONG Location-Based Services (LBS) REST APIs for real-time location resolution.',
      'Integrated Corporate Billing/Bulk SMS (CBS) SOAP APIs for automated dispatch notifications.',
      'Developed custom REST APIs for internal management portals and mobile consumers.',
      'Built autonomous Windows Services for scheduled polling, tracking intervals, and background sync.',
      'Engineered backend business modules for field force reporting and route validation.',
      'Implemented real-time tracking algorithms and geofencing verification.',
      'Designed resilient service scheduling with retry handling and fault tolerance.',
      'Implemented structured diagnostic logging for telemetry and service health.',
      'Provided continuous production support and resolved carrier interface latency issues.',
      'Conducted comprehensive SQL Server development, spatial queries, and stored procedures.'
    ],
    technologies: [
      'C#',
      '.NET Core / .NET Framework',
      'ASP.NET Web API',
      'Windows Services',
      'SQL Server',
      'REST APIs',
      'SOAP APIs (CBS)',
      'XML / JSON Processing',
      'IIS'
    ],
    architectureFlow: {
      diagramType: 'zong',
      steps: [
        {
          step: 1,
          name: 'Dual Ingestion Pipeline',
          desc: 'Parallel communication handles LBS REST API queries and CBS SOAP SMS dispatches.',
          tech: 'REST & SOAP Endpoints'
        },
        {
          step: 2,
          name: '.NET Integration & Windows Services',
          desc: 'Autonomous background services coordinate scheduled worker jobs, queues, and API translation.',
          tech: 'C# Windows Services / Web API'
        },
        {
          step: 3,
          name: 'Tracking & SMS Business Logic',
          desc: 'Location calculation, field force coordinates verification, and SMS templating.',
          tech: 'C# Business Layer'
        },
        {
          step: 4,
          name: 'SQL Server Geodata Store',
          desc: 'Coordinates history, dispatch audit logs, and optimized spatial queries.',
          tech: 'SQL Server Stored Procedures'
        }
      ]
    }
  },
  {
    id: 'pensioner-verification',
    title: "Pensioner's Verification System (PVS)",
    subtitle: 'Biometric Verification Platform with NADRA SOAP APIs',
    organization: 'BMSAS Technologies',
    period: '2019 – 2021',
    category: 'Identity Verification',
    description:
      'Engineered biometric pensioner verification platform integrating NADRA SOAP web services under limited documentation constraints to provide live citizen authentication and entitlement verification.',
    responsibilities: [
      'Developed and maintained biometric pensioner verification functionality.',
      'Integrated NADRA SOAP APIs for live national identity and biometric validation.',
      'Overcame limited technical documentation through empirical protocol testing and payload inspection.',
      'Implemented secure API communication adhering to national identification standards.',
      'Handled complex XML request/response serialization and schema transformations.',
      'Implemented detailed error logging and failover exception handling.',
      'Supported live verification workflows during high-volume pension disbursement periods.',
      'Performed application enhancements, bug fixing, and live production issue resolution.'
    ],
    technologies: [
      'ASP.NET Core',
      'Razor Pages',
      'C#',
      'SQL Server',
      'NADRA SOAP APIs',
      'XML Serialization',
      'IIS',
      'Entity Framework'
    ],
    architectureFlow: {
      diagramType: 'pvs',
      steps: [
        {
          step: 1,
          name: 'Pensioner Verification Terminal',
          desc: 'Operator initiates citizen biometric verification via web-based Razor Pages interface.',
          tech: 'Razor Pages / HTML5'
        },
        {
          step: 2,
          name: 'ASP.NET Core Verification Engine',
          desc: 'Sanitizes inputs, constructs signed XML envelopes, and handles cryptographic headers.',
          tech: 'ASP.NET Core / C#'
        },
        {
          step: 3,
          name: 'NADRA SOAP API Gateway',
          desc: 'Secure government identification endpoint verifying biometric data and return codes.',
          tech: 'SOAP 1.2 / XML'
        },
        {
          step: 4,
          name: 'Verification Response & Audit Log',
          desc: 'Instant verification status returned to operator and recorded into SQL Server audit trails.',
          tech: 'SQL Server Database'
        }
      ]
    }
  }
];

export const experienceList: ExperienceItem[] = [
  {
    id: 'idenfo',
    company: 'IDENFO',
    role: 'Full Stack Developer (.NET) / Software Engineer',
    duration: 'March 2023 – Present',
    location: 'Karachi, Pakistan',
    isCurrent: true,
    description:
      'Engineers AMC-based financial web and mobile platforms, focusing on backend services, REST/SOAP APIs, middleware, integrations, production support, database optimization, deployments, and troubleshooting.',
    highlights: [
      'Design, develop, and maintain REST/SOAP APIs and middleware services using ASP.NET Core and C#.',
      'Provide production support and technical maintenance for AMC-based financial web and mobile platforms.',
      'Work extensively with .NET Core, Angular 12, Windows Services, and SQL Server.',
      'Implement and maintain authentication and authorization mechanisms including JWT.',
      'Integrate third-party APIs and external systems.',
      'Work extensively with SQL Server including complex queries, stored procedures, functions, SQL Jobs, and performance optimization.',
      'Manage application deployments and hosting through IIS.',
      'Troubleshoot production issues and configuration problems.',
      'Collaborate with cross-functional teams on requirements, development, testing, deployment, and post-production support.',
      'Work with XML-based integrations, data transformation, and external API communication.',
      'Maintain source control and collaboration workflows using GitHub.',
      'Continuously enhance existing enterprise applications and services.'
    ],
    technologies: [
      'ASP.NET Core',
      'C#',
      'Angular 12',
      'SQL Server',
      'REST APIs',
      'SOAP APIs',
      'JWT',
      'XML / JSON',
      'IIS',
      'Windows Services',
      'GitHub',
      'Postman',
      'SOAP UI'
    ]
  },
  {
    id: 'platinum-pharma',
    company: 'Platinum Pharmaceuticals',
    role: '.NET Developer / Software Engineer',
    duration: 'November 2021 – February 2023',
    location: 'Karachi, Pakistan',
    description:
      'Developed enterprise software, integrated telecom REST/SOAP APIs, built autonomous background services, and led legacy migration across core business systems.',
    highlights: [
      'Integrated ZONG LBS REST APIs and CBS SOAP APIs for enterprise tracking and notifications.',
      'Developed location-based services and real-time tracking systems for field operations.',
      'Developed and maintained enterprise web portals for operational oversight.',
      'Built autonomous Windows Services for scheduled data sync and background tasks.',
      'Developed robust REST APIs for internal application consumption.',
      'Developed and supported desktop applications across corporate departments.',
      'Migrated legacy ASP.NET WebForms applications to modern ASP.NET MVC architecture.',
      'Worked with SQL Server, stored procedures, query optimization, and scheduled jobs.',
      'Handled production support, troubleshooting, and IIS application deployments.',
      'Participated throughout the complete SDLC from analysis to rollout.'
    ],
    technologies: [
      'C#',
      'ASP.NET MVC',
      'ASP.NET WebForms (Migration)',
      'Windows Services',
      'WinForms',
      'SQL Server',
      'REST APIs',
      'SOAP APIs',
      'ZONG LBS / CBS',
      'IIS'
    ]
  },
  {
    id: 'bmsas-tech',
    company: 'BMSAS Technologies',
    role: '.NET Developer (Hybrid)',
    duration: 'January 2018 – October 2021',
    location: 'Karachi, Pakistan',
    description:
      'Served as the foundation of my professional software engineering career, engineering web, desktop, and database solutions across diverse business domains.',
    highlights: [
      'Developed enterprise web applications using ASP.NET MVC 5 and Entity Framework 6.',
      'Engineered desktop business software using C# and Windows Forms (WinForms).',
      'Conducted relational database design, table architecture, and relationship mapping in SQL Server.',
      'Authored complex stored procedures, user-defined functions, triggers, and views.',
      'Developed comprehensive CRUD business modules, operational workflows, and audit logging.',
      'Designed and generated analytical business reporting modules.',
      'Implemented role-based access control (RBAC) and user permission architectures.',
      'Integrated and consumed external third-party APIs and web services.',
      'Investigated bugs, resolved defects, and tuned SQL query performance.',
      'Managed application deployment and continuous production support across the SDLC.'
    ],
    technologies: [
      'ASP.NET MVC 5',
      'Entity Framework 6',
      'C#',
      'SQL Server',
      'WinForms',
      'Stored Procedures',
      'REST / SOAP Consumption',
      'IIS',
      'SDLC'
    ]
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    icon: 'Code',
    skills: ['C#', 'SQL', 'JavaScript', 'TypeScript']
  },
  {
    category: 'Backend',
    icon: 'Server',
    skills: [
      '.NET 8',
      '.NET Core 3.1+',
      'ASP.NET Core MVC',
      'ASP.NET MVC 5',
      'Web API',
      'Entity Framework Core',
      'Entity Framework 6',
      'ADO.NET'
    ]
  },
  {
    category: 'Frontend',
    icon: 'Layout',
    skills: [
      'Angular 12+',
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'jQuery',
      'Razor Pages',
      'AJAX'
    ]
  },
  {
    category: 'Desktop',
    icon: 'Monitor',
    skills: ['WinForms', 'Windows Services']
  },
  {
    category: 'Databases',
    icon: 'Database',
    skills: ['Microsoft SQL Server', 'MySQL', 'SQLite']
  },
  {
    category: 'APIs & Integration',
    icon: 'Network',
    skills: [
      'REST APIs',
      'SOAP APIs',
      'Third-party API integration',
      'XML',
      'JSON',
      'JWT',
      'Certificate-based security'
    ]
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: [
      'Visual Studio',
      'VS Code',
      'GitHub',
      'Postman',
      'SOAP UI',
      'SQL Server Management Studio',
      'IIS'
    ]
  }
];

export const servicesData: ServiceCard[] = [
  {
    id: 'backend-dev',
    title: 'Backend Development',
    description:
      'Build scalable APIs, backend services, middleware, and enterprise applications using C# and ASP.NET Core.',
    icon: 'Server',
    tags: ['C#', 'ASP.NET Core', '.NET 8', 'Web API', 'Micro-services']
  },
  {
    id: 'api-integration',
    title: 'API & System Integration',
    description:
      'Integrate REST, SOAP, third-party APIs, external financial systems, and enterprise services.',
    icon: 'GitPullRequest',
    tags: ['REST', 'SOAP', 'Payment Gateways', 'XML / JSON', 'JWT']
  },
  {
    id: 'production-support',
    title: 'Production Support',
    description:
      'Troubleshoot live applications, investigate complex issues, analyze logs, identify root causes, and restore services.',
    icon: 'Activity',
    tags: ['Root-Cause Analysis', 'Log Inspection', 'Incident Recovery', 'Health Monitoring']
  },
  {
    id: 'database-engineering',
    title: 'Database Engineering',
    description:
      'Work with SQL Server, stored procedures, functions, SQL Jobs, query optimization, and enterprise data processing.',
    icon: 'Database',
    tags: ['SQL Server', 'Stored Procedures', 'Indexing', 'Query Optimization', 'SQL Jobs']
  },
  {
    id: 'app-maintenance',
    title: 'Application Maintenance',
    description:
      'Maintain and enhance existing enterprise applications while improving stability, performance, and maintainability.',
    icon: 'ShieldCheck',
    tags: ['Performance Tuning', 'Code Refactoring', 'Legacy Migration', 'Stability']
  },
  {
    id: 'deployment-hosting',
    title: 'Deployment & Hosting',
    description:
      'Deploy and troubleshoot applications hosted on IIS and support production environments.',
    icon: 'Cloud',
    tags: ['IIS Web Server', 'Environment Config', 'App Pools', 'SSL/TLS', 'Windows Services']
  },
  {
    id: 'full-sdlc',
    title: 'Full SDLC',
    description:
      'Participate in requirements analysis, development, testing, deployment, production support, and continuous enhancement.',
    icon: 'Layers',
    tags: ['Requirements', 'Development', 'Testing', 'Rollout', 'Continuous Enhancement']
  }
];

export const engineeringPrinciples: EngineeringPrinciple[] = [
  {
    id: 'clean-code',
    title: 'Clean & Maintainable Code',
    description:
      'Writing structured, readable, and decoupled C# code adhering to established .NET patterns for long-term maintainability.',
    icon: 'FileCode'
  },
  {
    id: 'secure-api',
    title: 'Secure API Communication',
    description:
      'Implementing robust authentication, JWT token lifecycles, digital certificates, and payload encryption for sensitive transactions.',
    icon: 'Lock'
  },
  {
    id: 'reliable-integrations',
    title: 'Reliable Integrations',
    description:
      'Designing resilient interfaces with external providers, payment networks, and legacy SOAP services with structured error handling.',
    icon: 'Workflow'
  },
  {
    id: 'prod-stability',
    title: 'Production Stability',
    description:
      'Prioritizing high availability, minimal downtime, defensive exception handling, and dependable service operations.',
    icon: 'CheckCircle2'
  },
  {
    id: 'root-cause',
    title: 'Root-Cause Analysis',
    description:
      'Conducting systematic log analysis and trace investigations to diagnose root causes rather than applying surface-level patches.',
    icon: 'Search'
  },
  {
    id: 'perf-opt',
    title: 'Performance Optimization',
    description:
      'Eliminating backend bottlenecks, optimizing asynchronous workflows, and streamlining serialization pipelines.',
    icon: 'Zap'
  },
  {
    id: 'db-efficiency',
    title: 'Database Efficiency',
    description:
      'Fine-tuning execution plans, maintaining indexes, optimizing stored procedures, and ensuring transactional integrity.',
    icon: 'Database'
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    description:
      'Rapidly triaging configuration flaws, network timeouts, and hosting conflicts across production IIS environments.',
    icon: 'Terminal'
  },
  {
    id: 'scalable-arch',
    title: 'Scalable Architecture',
    description:
      'Structuring layered architectures that gracefully separate presentation, middleware, business rules, and persistence.',
    icon: 'Server'
  },
  {
    id: 'collaboration',
    title: 'Cross-Functional Collaboration',
    description:
      'Partnering closely with business analysts, frontend developers, QA engineers, and operations teams to ship validated systems.',
    icon: 'Users'
  },
  {
    id: 'continuous-improvement',
    title: 'Continuous Improvement',
    description:
      'Proactively refactoring legacy modules, adopting modern .NET releases, and reinforcing automated operational checks.',
    icon: 'TrendingUp'
  }
];

export const educationData = {
  degree: 'BS in Software Engineering',
  institution: 'University of Karachi',
  year: '2018',
  location: 'Karachi, Pakistan',
  description:
    'Comprehensive software engineering program focused on software architecture, data structures, relational database systems, object-oriented design, algorithm analysis, and enterprise software engineering principles.'
};
