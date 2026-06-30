export type Experience = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  startYear: number;
  endYear: number | "Present";
  description?: string;
  current: boolean;
};

export const experience: Experience[] = [
  {
    role: "Senior Product Designer",
    company: "Kissflow",
    companyUrl: "https://kissflow.com/",
    period: "2022—Present",
    startYear: 2022,
    endYear: "Present",
    description:
      "Leading design for AI features on a low-code/no-code workflow platform serving 10,000+ customers in 150+ countries.",
    current: true,
  },
  {
    role: "UX/UI Designer",
    company: "Techfully",
    period: "2021—2022",
    startYear: 2021,
    endYear: 2022,
    description:
      "Founding designer for an EdTech suite — assessment platform and LMS that reached 10,000+ students across 10 colleges.",
    current: false,
  },
];
