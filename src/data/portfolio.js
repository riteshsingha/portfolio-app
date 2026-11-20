export const personalInfo = {
  name: "Ritesh Singha",
  title: "AEM Developer 2",
  certificationHighlight: "Adobe Certified Expert – AEM Sites Developer (2025)",
  experience: "4+ Years of Experience",
  tagline: "Adobe Certified Expert AEM Developer building enterprise CMS solutions on AEM 6.5 and AEM as a Cloud Service",
  email: "hriteshsingha@gmail.com",
  phone: "+91-8794680692",
  location: "Bengaluru, India",
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/ritesh-singha-8b6b8421a/",
    github: "https://github.com/riteshsingha"
  }
};

export const aboutContent = {
  summary: `Adobe Certified Expert AEM Developer with 4+ years of experience building enterprise CMS solutions on AEM 6.5 and AEM as a Cloud Service (AEMaaCS). Recently contributed in content architecture for Citi's migration from TeamSite-Angular to a headless AEM and Next.js stack, covering Content Fragment Models, GraphQL persisted queries and Universal Editor authoring. Strong foundation in Java, OSGi, Apache Sling, Sling Models and JCR/Oak from delivering the FedEx Rewards loyalty platform across US, EU and APAC. Experienced in AI-assisted development with Cursor, owning design and review of the output.`,
  highlights: [
    "Adobe Certified Expert - AEM Sites Developer (2025)",
    "4+ years building enterprise CMS solutions",
    "Headless AEM + Next.js architecture experience",
    "Zero rollback releases across US, EU & APAC platforms"
  ]
};

export const experience = [
  {
    id: 1,
    company: "Epsilon",
    role: "AEM Developer 2",
    period: "Apr 2024 – Present",
    location: "Bengaluru, India",
    description: "Leading headless content architecture and enterprise AEM development for global clients.",
    projects: [
      {
        name: "Citi: TeamSite-Angular to AEMaaCS + Next.js Migration",
        achievements: [
          "Designed the headless content architecture for the migration from TeamSite-Angular to AEMaaCS and Next.js: analyzed existing pages and components to define Content Fragment Models, fields and relationships, then presented the design to stakeholders and built it after sign-off",
          "Built Content Fragments and GraphQL persisted queries with AI-assisted development (Cursor), handed them to Next.js developers for integration, then implemented Universal Editor on the Next.js codebase for in-context authoring",
          "Owned and enhanced an AEM-hosted admin console tool that automates content migration, publishing and multi-layer cache invalidation between Dev and QA within a single AEM instance"
        ]
      },
      {
        name: "FedEx Rewards",
        achievements: [
          "Led the EU-AMEA website redesign, delivering 10+ reusable components across 15+ regional sites",
          "Built a secure OAuth 2.0 payment integration with environment-specific OSGi configurations from Dev to Production",
          "Resolved a critical production data exposure vulnerability end-to-end",
          "Delivered 24+ biweekly releases across EU and APAC with zero rollbacks",
          "Optimized Oak/Lucene indexes to improve JCR query performance"
        ]
      }
    ],
    technologies: ["AEMaaCS", "Next.js", "GraphQL", "Content Fragments", "Universal Editor", "Cursor AI"]
  },
  {
    id: 2,
    company: "Epsilon",
    role: "AEM Developer 1",
    period: "Jun 2022 – Apr 2024",
    location: "Bengaluru, India",
    description: "Core AEM developer on the FedEx Rewards Loyalty platform.",
    projects: [
      {
        name: "FedEx Rewards",
        achievements: [
          "Developed 20+ production components for the Loyalty Rewards platform using HTL, Java, Sling Models, and OSGi services",
          "Supported planning and execution of 3 major bug-free production releases",
          "Built a site-wide header/footer solution using locale-based Sling Models, standardizing rendering across regional sites"
        ]
      }
    ],
    technologies: ["AEM 6.5", "Java", "HTL", "Sling Models", "OSGi", "Maven"]
  }
];

export const certifications = [
  {
    name: "Adobe Certified Expert",
    detail: "Adobe Experience Manager Sites Developer",
    year: 2025
  },
  {
    name: "MTA: Introduction to Programming Using Java",
    issuer: "Microsoft",
    year: 2019
  }
];

export const awards = [
  {
    title: "Magnitude Team Impact Award",
    year: 2024,
    summary: "Recognized for cross-functional impact and technical leadership."
  },
  {
    title: "Epsilon DX Extra Miler Award",
    year: 2023,
    summary: "Recognized for technical ownership and high-quality delivery."
  }
];

export const skills = {
  cmsPlatform: [
    "Adobe Experience Manager (AEM) 6.5",
    "AEM as a Cloud Service (AEMaaCS)",
    "AEM Sites",
    "AEM Headless",
    "Universal Editor"
  ],
  languages: [
    "Java",
    "HTL",
    "HTML",
    "CSS",
    "JavaScript"
  ],
  aemFrameworks: [
    "Apache Sling",
    "Sling Models",
    "Sling Servlets",
    "OSGi",
    "JCR/Oak",
    "AEM Workflows",
    "Editable Templates",
    "Custom Components",
    "ClientLibs",
    "Dispatcher",
    "Replication",
    "AEM Tagging",
    "Multi-locale Content"
  ],
  apisAndHeadless: [
    "REST APIs",
    "GraphQL",
    "Persisted Queries",
    "Content Fragments",
    "Content Fragment Models",
    "Next.js (Integration)",
    "Oak/Lucene Indexing",
    "Query Builder",
    "JCR-SQL2"
  ],
  buildAndDevOps: [
    "Maven",
    "Git",
    "Azure DevOps",
    "Adobe Cloud Manager"
  ],
  tools: [
    "Cursor AI",
    "Amazon Q",
    "IntelliJ IDEA",
    "VS Code",
    "CRXDE Lite",
    "Postman"
  ]
};

export const education = {
  institution: "ICFAI University, Tripura",
  degree: "Bachelor of Technology",
  field: "Computer Science & Engineering",
  period: "2016 – 2020",
  cgpa: "7.83"
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];
