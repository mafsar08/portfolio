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
    title: "Product Design Rockstar at Altius",
    company: "Altius",
    date: "2026",
    year: 2026,
    description:
      "Annual recognition for consistent design quality and impact across product modules.",
    image: "/images/work/placeholder-1.svg",
    testimonial: {
      quote:
        "Afsar consistently delivers design excellence and brings clarity to complex problems. A true rockstar on the team.",
      author: "Manager Name",
      role: "VP Design, Altius",
    },
  },
  {
    id: "ai-hackathon-winner",
    title: "Flowsurge AI Hackathon Winner",
    company: "Kissflow",
    date: "Jul 2025",
    year: 2025,
    description:
      "Took 1st place (\u20B91 lakh prize) at Kissflow's 2-day Flowsurge AI hackathon by building Metadata Intelligence \u2014 the Solution Analyser that later shipped as a real feature.",
    image: "/images/work/placeholder-2.svg",
  },
  {
    id: "design-critique-workshop",
    title: "Design Critique Workshop",
    company: "Kissflow",
    date: "2025",
    year: 2025,
    description:
      "Led a workshop for 20+ Kissflow designers \u2014 pairing structured critique with hands-on redesign of real app screens based on what surfaced.",
    image: "/images/work/placeholder-3.svg",
    testimonial: {
      quote:
        "The critique framework Afsar introduced changed how our team gives and receives feedback. Way more constructive sessions now.",
      author: "Teammate Name",
      role: "Product Designer, Kissflow",
    },
  },
];
