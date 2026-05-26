export type Achievement = {
  id: string;
  title: string;
  company?: string;
  date: string;
  year: number;
  description?: string;
  image?: string;
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
};

export const achievements: Achievement[] = [
  {
    id: "product-design-rockstar",
    title: "Product Design Rockstar",
    company: "Kissflow",
    date: "2026",
    year: 2026,
    description:
      "Won the Product Design Rockstar award at Kissflow's annual award ceremony \u2014 recognized for consistent design excellence and impact across product modules.",
    image: "/images/work/placeholder-1.svg",
    testimonial: {
      quote:
        "Afsar consistently delivers design excellence and brings clarity to complex problems. A true rockstar on the team.",
      author: "Manager Name",
      role: "VP Design, Kissflow",
    },
  },
  {
    id: "ai-hackathon-winner",
    title: "Flowsurge AI Hackathon Winner",
    company: "Kissflow",
    date: "Jul 2025",
    year: 2025,
    description:
      "Won Kissflow's internal Flowsurge AI Hackathon by building Metadata Intelligence \u2014 an AI-assisted pre-deployment validator that catches defects in no-code processes before they go live.",
    image: "/images/work/placeholder-2.svg",
  },
  {
    id: "design-critique-workshop",
    title: "Design Critique Workshop",
    company: "Kissflow",
    date: "2025",
    year: 2025,
    description:
      "Designed and facilitated an internal design critique workshop for the Kissflow product design team \u2014 establishing structured rituals for sharper, healthier feedback culture.",
    image: "/images/work/placeholder-3.svg",
    testimonial: {
      quote:
        "The critique framework Afsar introduced changed how our team gives and receives feedback. Way more constructive sessions now.",
      author: "Teammate Name",
      role: "Product Designer, Kissflow",
    },
  },
  {
    id: "saas-design-community",
    title: "SAAS Design Community \u2014 Founding Member",
    date: "Ongoing",
    year: 2023,
    description:
      "Co-founded SAAS Design, a Chennai-based community for product designers. Hosted 3+ design events bringing together designers across all levels.",
  },
];
