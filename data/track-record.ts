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
};

export const trackRecordData: TrackRecordEntry[] = [
  // ── 2025 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Flowsurge AI Hackathon Winner",
    type: "Achievement",
    date: "Jul 2025",
    year: 2025,
    description:
      "Developed Metadata Intelligence for Kissflow's No-code Builder.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Built an AI-powered metadata intelligence tool during Kissflow's internal hackathon.",
      how: "Update with real data — tools, process, and approach used.",
      impact: "Update with real data — hackathon result, adoption, or next steps.",
    },
  },

  // ── 2024 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "AI Chatbot for Reports & Analytics",
    type: "Major feature",
    date: "2024",
    year: 2024,
    description:
      "Kissflow's first AI chatbot enabling analytics & insights. Reduced report creation time to <5 seconds using AI.",
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
      what: "Designed Kissflow's first AI-powered chatbot that lets users generate reports and analytics through natural language queries.",
      how: "Update with real data — research methods, design process, iterations, tools used.",
      impact: "Reduced report creation time from minutes to under 5 seconds. Update with adoption metrics.",
    },
  },
  {
    company: "Kissflow",
    title: "Reports & Analytics Redesign",
    type: "Enhancement",
    date: "2024",
    year: 2024,
    description:
      "Increased adoption and higher active usage through tailored, intuitive UX.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Redesigned the Reports & Analytics module to improve usability and drive adoption.",
      how: "Update with real data — research, design process, key decisions.",
      impact: "Update with real data — adoption increase, usage metrics.",
    },
  },

  // ── 2023 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Homepage Redesign",
    type: "Major feature",
    date: "2023",
    year: 2023,
    description:
      "4x more engagement and 31% faster time-to-action for end users.",
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
      what: "Redesigned Kissflow's product homepage to improve user engagement and reduce time-to-action for end users.",
      how: "Update with real data — research, design approach, testing, iterations.",
      impact: "4x more engagement and 31% faster time-to-action. Update with additional metrics.",
    },
  },
  {
    company: "Kissflow",
    title: "RBAC (Role Based Access Control)",
    type: "Major feature",
    date: "2023",
    year: 2023,
    description:
      "Improved data security and governance for admins across the platform.",
    highlighted: true,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {
      caseStudy: "#",
    },
    details: {
      what: "Designed role-based access control system for platform-wide data security and governance.",
      how: "Update with real data — research with admins, permission modeling, UX decisions.",
      impact: "Update with real data — security improvements, admin adoption, compliance outcomes.",
    },
  },
  {
    company: "Kissflow",
    title: "Metadata Intelligence",
    type: "Major feature",
    date: "2023",
    year: 2023,
    description:
      "AI-assisted pre-deployment debugging to prevent defects for developers.",
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
      what: "Designed an AI-assisted debugging tool that catches defects before deployment in no-code apps.",
      how: "Update with real data — research, AI integration approach, design iterations.",
      impact: "Update with real data — defect reduction, developer time saved.",
    },
  },
  {
    company: "Kissflow",
    title: "Account Administration & Settings",
    type: "Enhancement",
    date: "2023",
    year: 2023,
    description: "Redesigned admin settings and account management flows.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Redesigned the admin settings and account management experience.",
      how: "Update with real data — research, design decisions.",
      impact: "Update with real data — admin efficiency improvements.",
    },
  },
  {
    company: "Kissflow",
    title: "Platform Search",
    type: "Enhancement",
    date: "2023",
    year: 2023,
    description: "Improved search experience across the platform.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Redesigned the platform-wide search to improve discoverability.",
      how: "Update with real data — research, search UX patterns, iterations.",
      impact: "Update with real data — search success rate, usage metrics.",
    },
  },

  // ── 2022 ────────────────────────────────────
  {
    company: "Kissflow",
    title: "Design System",
    type: "Design system",
    date: "2022 – Present",
    year: 2022,
    description:
      "250+ components and 180 tokens supporting light & dark modes across web and mobile. Unified interface across 6 product modules.",
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
      what: "Built and maintained Kissflow's design system — 250+ components, 180 tokens, light & dark modes across web and mobile.",
      how: "Update with real data — governance model, tooling, collaboration with engineering.",
      impact: "Unified interface across 6 product modules. Update with adoption and efficiency metrics.",
    },
  },
  {
    company: "Kissflow",
    title: "Joined as Senior Product Designer",
    type: "Career",
    date: "May 2022",
    year: 2022,
    description:
      "Joined Kissflow, an AI-powered low-code/no-code workflow platform.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
  },

  // ── 2021 ────────────────────────────────────
  {
    company: "Techfully",
    title: "Online Assessment Platform",
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
      impact: "Served 10,000+ students across 10 colleges. Update with pass rates, usage metrics.",
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
      impact: "10 colleges delivering tailored courses. Update with engagement metrics.",
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
      impact: "Update with real data — consistency improvements, dev velocity.",
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

  // ── Community ───────────────────────────────
  {
    company: null,
    title: "SAAS Design Community – Founding Member",
    type: "Community",
    date: "Ongoing",
    year: 2023,
    description:
      "Chennai-based design community. Hosted 3+ design events for designers across all levels.",
    highlighted: false,
    images: [
      "/images/work/placeholder-1.svg",
      "/images/work/placeholder-2.svg",
    ],
    links: {},
    details: {
      what: "Co-founded a Chennai-based design community for designers across all levels.",
      impact: "Hosted 3+ design events. Update with attendance numbers, community size.",
    },
  },
];
