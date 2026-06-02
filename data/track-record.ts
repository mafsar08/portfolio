export type EntryType =
  | "Major feature"
  | "Enhancement"
  | "Design system"
  | "Career"
  | "Achievement"
  | "Community";

export type TrackRecordEntry = {
  company: string | null;
  title: string;
  type: EntryType;
  date: string;
  year: number;
  description?: string;
  highlighted: boolean;
  images?: string[];
  links?: {
    docs?: string;
    caseStudy?: string;
  };
  details?: {
    what?: string;
    how?: string;
    impact?: string;
  };
  /** When present, this entry has a detail page at /work/<slug> */
  slug?: string;
};

export const trackRecordData: TrackRecordEntry[] = [
  // ── 2026 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Kissflow Intelligence (AI Chatbot)",
    slug: "ai-chatbot",
    type: "Major feature",
    date: "Mar 2026",
    year: 2026,
    description:
      "Kissflow's first two-way conversational AI assistant — ask, get a report or insight, refine, ask again. Built across two phases on a Semantic Data Layer foundation.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      caseStudy: "/case-studies/ai-chatbot",
    },
    details: {
      what: "Designed Kissflow's first two-way conversational AI assistant. Replaces the platform's one-way generators with a conversation where users ask questions, get reports or insights, and refine through dialogue.",
      how: "Built in two phases: contained inside the Reports page (Phase 1, Oct–Dec 2025) and globalized across Kissflow once a Snowflake migration enabled multi-flow context (Phase 2, Jan–Mar 2026). Designed for trust through transparency on demand — every response can be expanded to show its sources and the actual SQL query.",
      impact:
        "Collapsed three barriers to insight at once — expensive external tools, IT dependency, and the skill gap. Now serves admins and rolls out to business users. Architected as the foundation for a single conversational surface uniting Kissflow's scattered AI features.",
    },
  },
  {
    company: "Kissflow",
    title: "AI Control Center",
    slug: "ai-control-center",
    type: "Major feature",
    date: "2026",
    year: 2026,
    description:
      "Governance dashboard for super admins to enable/disable AI features across the entire Kissflow account or per-module.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/y4ypvcj/ai-control-center",
    },
    details: {
      what: "Designed a governance dashboard for super admins to enable/disable AI features across the entire Kissflow account or per-module (Process, Board, Dataset, Apps, Portals, Integrations, Account). Includes transparency tags showing which features share data with AI models.",
      how: "Aligned with internal AI policy and compliance stakeholders to understand governance requirements. Prioritized a simple on/off paradigm at the account level, backed by granular module-level toggles. Added 'Data shared with AI' indicators for transparency, with a state-preservation pattern so previously configured settings restore on re-enable.",
      impact:
        "Centralized AI governance in a single place for super admins. Improved compliance alignment and transparency over which AI features process account data, enabling enterprises to confidently adopt AI within their own policy constraints.",
    },
  },
  {
    company: "Kissflow",
    title: "Analytics Query Builder (Dataviews)",
    type: "Major feature",
    date: "2026",
    year: 2026,
    description:
      "SQL-based data composition tool letting users join multiple data sources to build unified analytics datasets.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/83h9qzn/understanding-dataviews",
    },
    details: {
      what: "Designed Dataviews — a SQL-based data composition tool that lets users join multiple data sources via a visual query editor to build unified analytics datasets. Supports joins, unions, aggregates, and a drag-and-drop schema browser.",
      how: "Partnered with analytics-power users to understand data consolidation pain points. Combined a familiar SQL editor with a visual schema browser for discoverability — SQL-literate users get full power, others can explore tables before writing queries. Added beautification, preview, and CSV/JSON export for a complete workflow.",
      impact:
        "Eliminated manual data consolidation workflows and reduced IT dependency for report building. Supports complex analytical scenarios without leaving Kissflow, feeding directly into the reporting layer.",
    },
  },
  {
    company: "Kissflow",
    title: "Document Templates with AI Generation",
    slug: "document-templates",
    type: "Major feature",
    date: "2026",
    year: 2026,
    description:
      "Automated PDF generation from process data with AI-assisted template creation across 18+ languages.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/x2h9qtr/generating-document-templates",
    },
    details: {
      what: "Designed the Document Templates feature that automates PDF generation from process data — offer letters, purchase orders, and more. Templates can be built from scratch or generated by AI from a natural-language prompt, then connected to processes via connectors.",
      how: "Researched admin document-creation workflows to identify repetitive steps in PDF generation. Built a visual editor with field insertion, image support, headers/footers, and formatting controls, then layered in AI-assisted generation with up to 10 regenerable drafts. Supports 18+ languages for global teams.",
      impact:
        "Streamlined document creation for process admins by automating PDF output tied to workflow instances. Reduced manual formatting effort and standardized organization-wide document output across languages.",
    },
  },

  // ── 2025 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Audit Log Enhancements with AI Summaries",
    type: "Enhancement",
    date: "2025",
    year: 2025,
    description:
      "Extended audit logs with AI summaries, 90-day tracking, advanced filters, and navigation between entries.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/60y1fga/now-live-refinements-to-audit-logs",
    },
    details: {
      what: "Led refinements to Kissflow's audit log system — adding AI-generated event summaries, extending tracking up to 90 days, and layering in advanced filters (field name, user, object, event category, platform, IP). Added previous/next navigation and column pinning for investigation workflows.",
      how: "Shadowed admins during compliance reviews to identify friction in log scanning. Introduced AI summaries to compress dense event entries, and added navigation + column pinning so context isn't lost while drilling into individual events. Added full-history vs. filtered export to support both spot-checks and formal audits.",
      impact:
        "Reduced time spent on security investigations and compliance auditing. Preserved context during log navigation and gave admins flexibility to export exactly what's needed — filtered subsets or complete history.",
    },
  },
  {
    company: "Kissflow",
    title: "AI Solution Analyzer (Metadata Intelligence)",
    slug: "ai-solution-analyzer",
    type: "Major feature",
    date: "2025",
    year: 2025,
    description:
      "AI-powered pre-deployment validator that catches misconfigurations in process design, forms, and permissions before going live.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/q6y1jx0/ai-solution-analyzer",
    },
    details: {
      what: "Designed an AI-powered pre-deployment validator that reviews process design, forms, workflow steps, and permissions to surface misconfigurations before a process goes live. Classifies findings as 'Critical' (compliance/security risks) or 'Suggestions' (best practices).",
      how: "Studied process admin failure modes to understand where production defects most commonly originated. Designed a severity-tiered issue classification (Critical vs. Suggestions) with in-context 'Locate' actions that deep-link to the exact problem element. Added background analysis runs so admins aren't blocked while the analyzer works.",
      impact:
        "Prevents compliance violations and security breaches by catching misassignments before live deployment. Reduces human error in permission configurations and offers actionable, in-context recommendations — making it a safety net for complex approval workflows.",
    },
  },
  {
    company: "Kissflow",
    title: "Password Policy Configuration",
    type: "Enhancement",
    date: "2025",
    year: 2025,
    description:
      "Customizable password policies — length, complexity, history restrictions, and expiry timelines.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/35y175k/admin-alert-password-policy-configuration-now-available",
    },
    details: {
      what: "Designed the password policy configuration experience — account admins can now customize minimum length, complexity rules (uppercase/lowercase/numbers/special chars), password history restrictions, and expiry timelines.",
      how: "Balanced organizational flexibility with secure defaults. Gave admins a choice between Kissflow's default policy or custom configuration, with each rule independently configurable. Used sensible defaults and inline validation to prevent over-restrictive policies that would frustrate end users.",
      impact:
        "Gave admins control to tailor security policies to their organization's specific requirements. Enhanced account security through customizable password governance while maintaining usability for end users.",
    },
  },
  {
    company: "Kissflow",
    title: "Homepage Redesign",
    slug: "homepage-redesign",
    type: "Major feature",
    date: "2025",
    year: 2025,
    description:
      "Centralized homepage giving users quick access to tasks, in-progress items, and recently used workflows.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/35yz0kl/introducing-the-new-kissflow-homepage",
    },
    details: {
      what: "Redesigned the Kissflow homepage to consolidate workflow management in one place — pending tasks, in-progress items, and recently used workflows all accessible without navigating through scattered sections.",
      how: "Mapped fragmented task-switching patterns across 'Created By Me' and 'Assigned To Me' sections to identify pain points. Designed a unified hub with status-first visibility — prioritizing due dates, active workflows, and item-level statuses. Iterated the layout to surface the most actionable information at a glance.",
      impact:
        "Reduced friction for task monitoring by centralizing pending tasks, in-progress items, and workflow status in one view. Simplified daily navigation and improved visibility into account-wide activity.",
    },
  },
  {
    company: "Kissflow",
    title: "User Management Overhaul",
    type: "Major feature",
    date: "2025",
    year: 2025,
    description:
      "End-to-end user administration — lifecycle, roles, 2FA levels, bulk actions, and SCIM provisioning with Azure AD / Okta / OneLogin.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/y4h4aks/add-manage-users",
    },
    details: {
      what: "Redesigned the end-to-end user management experience — covering lifecycle actions (add, activate, deactivate, delete), group assignments, role changes, 2FA enrollment levels, and SCIM integration with Azure AD, Okta, and OneLogin.",
      how: "Audited every admin flow to identify repetition and bulk-action gaps. Introduced batch operations across all key actions — role changes, group assignment, password resets, verification emails. Designed the delete flow with automatic flow-reassignment notifications to prevent orphaned workflows.",
      impact:
        "Streamlined onboarding through manual or SCIM-based addition. Reduced administrative overhead via efficient bulk actions and improved license optimization through clearer activation/deactivation flows.",
    },
  },
  {
    company: "Kissflow",
    title: "Custom Columns in User Management",
    type: "Enhancement",
    date: "2025",
    year: 2025,
    description:
      "Extended the user management table with custom columns — text, number, attachment, signature fields with validation rules.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/m1h4akn/user-management-overview",
    },
    details: {
      what: "Designed the Custom Columns feature in user management — admins can extend the user table with text, number, attachment, signature fields and more, complete with validation rules and environment-aware behavior.",
      how: "Spoke with admins storing user attributes in external systems to understand the gap. Built custom fields with validation rule configuration and environment-aware metadata sync (production-only creation, auto-synced to dev/test with metadata but not data values) to prevent cross-environment data leaks.",
      impact:
        "Tailored user management to organization-specific data needs. Reduced reliance on external systems to track user attributes and centralized user information in a single interface.",
    },
  },
  {
    company: "Kissflow",
    title: "Data Backup Status & Notifications",
    type: "Enhancement",
    date: "2025",
    year: 2025,
    description:
      "Real-time backup status stages and proactive email/in-app alerts across the backup lifecycle for super admins.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/83y3mfp/data-backup-overview",
    },
    details: {
      what: "Designed the status and notification experience for Kissflow's data backup service. Super admins now see real-time backup status (started, in progress, completed, canceled) with email and in-app alerts at key milestones.",
      how: "Interviewed super admins managing compliance audits to identify visibility gaps. Introduced status stages mirroring the backup lifecycle and layered notifications so admins don't have to monitor the UI actively. Added detailed backup history logs for audit trails.",
      impact:
        "Improved backup oversight for compliance tracking. Reduced admin burden by notifying at key milestones instead of requiring manual status checks.",
    },
  },
  {
    company: "Kissflow",
    title: "Role-Based Access Control (RBAC)",
    slug: "rbac",
    type: "Major feature",
    date: "2025",
    year: 2025,
    description:
      "Five distinct admin roles — Super Admin, IAM, User, Billing, App Store — with granular scoped permissions and multi-role support.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/35h4ak0/user-roles-permissions",
    },
    details: {
      what: "Designed Kissflow's role-based access control system — five administrative roles (Super Admin, IAM Admin, User Admin, Billing Admin, App Store Admin) with distinct permission scopes. Supports combining multiple roles per user.",
      how: "Modeled admin personas and their typical responsibilities to separate concerns — security, user provisioning, billing, app installation. Designed granular permission scopes per role so organizations can distribute admin duties securely without granting full access. Supported multi-role assignment to accommodate smaller teams.",
      impact:
        "Enabled granular access control for secure distribution of administrative responsibilities. Allowed teams to assign only necessary permissions (e.g., billing-only access) while supporting multi-role users for smaller orgs.",
    },
  },

  // ── 2024 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Global Search Enhancement",
    type: "Enhancement",
    date: "Nov 2024",
    year: 2024,
    description:
      "Recency-first search default showing the last 90 days, with quick filters for broader time ranges.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/60yz57a/upcoming-enhancements-to-global-search",
    },
    details: {
      what: "Enhanced the platform-wide global search to default to the last 90 days of results, with filters for All time, Last 30 days, Last 6 months, and Last year.",
      how: "Analyzed search behavior and saw that most queries target recent content, while older results added noise. Set 90 days as the default to reduce noise, but kept the time-range filter one click away so users can go broader when needed.",
      impact:
        "Faster access to relevant, timely information. Reduced noise from older content while maintaining backward compatibility for historical searches.",
    },
  },
  {
    company: "Kissflow",
    title: "App Items in Global My Items",
    type: "Enhancement",
    date: "2024",
    year: 2024,
    description:
      "Unified app items into Global My Items — one centralized hub for managing work across Kissflow apps.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/q6yxlfg/introducing-kissflow-app-items-in-global-my-items",
    },
    details: {
      what: "Integrated Kissflow App Items into the Global My Items view — users can now manage items from their Kissflow apps alongside Process, Board, and Dataset items in one centralized location.",
      how: "Noticed users bouncing between apps and Global My Items to find active work. Unified the data source so app items surface in the global view without losing their app-specific metadata — single dashboard, multiple app contexts.",
      impact:
        "Centralized hub for managing all items across apps. Reduced time spent navigating between spaces and streamlined overall workflow efficiency.",
    },
  },
  {
    company: "Kissflow",
    title: "SAML Configuration Enhancement",
    type: "Enhancement",
    date: "2024",
    year: 2024,
    description:
      "Automated SAML setup with Azure AD metadata upload and auto-populated IdP fields — cut setup errors and friction.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/60hvngl/introducing-enhancements-in-saml-configuration-for-smoother-setup-and-control",
    },
    details: {
      what: "Streamlined SAML configuration for Azure AD SSO integration. Admins can now download Kissflow metadata with one click and upload Azure AD Federation Metadata XML — all IdP configuration fields auto-populate.",
      how: "Identified the highest-friction steps in SSO setup from admin feedback. Replaced manual field entry with XML-driven auto-population to eliminate common errors like mismatched formatting, extra spaces, and incorrect slashes. Added Super Admin control over SSO notification emails for better governance.",
      impact:
        "Reduced setup errors from manual misconfiguration. Saved configuration time for returning admins via auto-populated data and improved admin control over SSO communications.",
    },
  },
  {
    company: "Kissflow",
    title: "Print Attachments in File Preview",
    type: "Enhancement",
    date: "2024",
    year: 2024,
    description:
      "One-click print for form attachments from preview mode — PDFs, images, and text files, no downloads required.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/h7y3ldz/introducing-print-attachments-in-preview-mode-on-kissflow",
    },
    details: {
      what: "Added direct print capability for form attachments from within preview mode — users can print PDFs, images, and text files (CSV, TXT) without downloading locally first.",
      how: "Observed users downloading → opening → printing attachments repeatedly. Added a one-click print action directly in the preview overlay, cutting out the download step entirely. Scoped supported formats to the most common attachment types.",
      impact:
        "Eliminated time spent downloading files to print. Reduced device storage consumption and improved end-user workflow efficiency.",
    },
  },

  // ── 2023 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Service Accounts & Impersonation",
    slug: "service-accounts",
    type: "Major feature",
    date: "2023",
    year: 2023,
    description:
      "Non-user identities for automated integrations with impersonation, scoped permissions, and dedicated audit logs.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/q6h4a73/introducing-service-accounts",
    },
    details: {
      what: "Designed Service Accounts — non-user identities that automate integrations and access shared resources. Supports user impersonation with all activities audited in dedicated logs for governance.",
      how: "Studied integration failure patterns where users leaving the company broke automated flows. Designed Service Accounts as first-class non-user identities with access keys, scoped permissions, and impersonation capabilities — decoupling automation from individual user lifecycles. Added dedicated audit logging for governance oversight.",
      impact:
        "Integrations no longer fail when users are disabled or deleted. Maintained item ownership across connected processes and enabled programmatic resource access with full audit governance.",
    },
  },
  {
    company: "Kissflow",
    title: "File Preview Revamp",
    type: "Enhancement",
    date: "2023",
    year: 2023,
    description:
      "Multi-mode file preview — fullscreen, new-tab, picture-in-picture, and split-screen comparison.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      docs: "https://community.kissflow.com/t/g9h4a2v/revamped-file-preview",
    },
    details: {
      what: "Expanded the file preview experience with fullscreen, new-tab, picture-in-picture, and split-screen comparison modes for process and board form attachments.",
      how: "Observed users juggling multiple browser windows to compare attachments side-by-side. Designed multiple viewing modes that match different workflow intents — fullscreen for focus, PiP for filling forms while referencing, split-screen for comparison. Let users pick the mode that fits the task.",
      impact:
        "Enhanced flexibility for viewing attachments and comparing data. Improved accessibility and matched the preview experience to diverse workflow needs.",
    },
  },

  // ── 2022 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Joined as Senior Product Designer",
    type: "Career",
    date: "May 2022",
    year: 2022,
    description:
      "Joined Kissflow, an AI-powered low-code/no-code workflow platform.",
    highlighted: false,
  },

  // ── 2021 (Techfully) ────────────────────────
  {
    company: "Techfully",
    title: "Online Assessment Platform",
    slug: "online-assessment-platform",
    type: "Major feature",
    date: "2021",
    year: 2021,
    description:
      "Scalable coding & aptitude assessment platform serving 10,000+ students across 10 colleges in Tamil Nadu.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
      "/images/work/placeholder-3.svg",
    ],
    links: {
      caseStudy: "#",
    },
    details: {
      what: "Designed a scalable coding and aptitude assessment platform for colleges across Tamil Nadu.",
      how: "Update with real data — research with students/professors, design process, technical decisions.",
      impact:
        "Served 10,000+ students across 10 colleges. Update with pass rates, usage metrics.",
    },
  },
  {
    company: "Techfully",
    title: "Learning Management System",
    type: "Major feature",
    date: "2021",
    year: 2021,
    description:
      "Web & mobile LMS for students and professors. 10 colleges delivered tailored courses and quizzes.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Designed web and mobile LMS for delivering courses, quizzes, and assessments.",
      how: "Update with real data — design process, platform considerations.",
      impact:
        "10 colleges delivering tailored courses. Update with engagement metrics.",
    },
  },
  {
    company: "Techfully",
    title: "Design System & Brand System",
    type: "Design system",
    date: "2021",
    year: 2021,
    description:
      "Built design system and brand system from scratch for product websites and web/mobile apps.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Built design system and brand identity from scratch across web and mobile products.",
      how: "Update with real data — component architecture, brand guidelines, tooling.",
      impact:
        "Update with real data — consistency improvements, dev velocity.",
    },
  },
  {
    company: "Techfully",
    title: "Joined as UX/UI Designer",
    type: "Career",
    date: "Mar 2021",
    year: 2021,
    description: "Founding designer for a suite of EdTech products.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
  },
];
