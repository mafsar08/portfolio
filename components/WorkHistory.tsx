import FadeUp from "./FadeUp";

const workData = [
  {
    company: "Kissflow",
    role: "Senior Product Designer",
    period: "May 2022 \u2192 Present",
    current: true,
    description:
      "AI-powered Low-code/No-code workflow platform. Led design for AI features, design system (250+ components), and shipped 30+ features serving 10,000+ customers in 150+ countries.",
  },
  {
    company: "Techfully",
    role: "UX/UI Designer",
    period: "Mar 2021 \u2192 Apr 2022",
    current: false,
    description:
      "Founding designer for EdTech suite. Built assessment platform (10K+ students), LMS, and design system from scratch.",
  },
];

export default function WorkHistory() {
  return (
    <section
      id="work-history"
      className="max-w-[880px] mx-auto px-6 pt-16 pb-16 border-b border-border"
    >
      {/* Section label */}
      <FadeUp>
        <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-text-body mb-10">
          Work History
        </h2>
      </FadeUp>

      {/* Timeline */}
      <div className="relative pl-6">
        {/* Timeline line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

        {workData.map((job, i) => (
          <FadeUp key={job.company} delay={i * 0.1}>
            <div
              className={`relative pb-10 ${i === workData.length - 1 ? "pb-0" : ""}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute -left-6 top-[6px] w-[14px] h-[14px] rounded-full border-2 ${
                  job.current
                    ? "bg-accent border-accent"
                    : "bg-bg border-border"
                }`}
              />

              {/* Content */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                <div>
                  <h3 className="font-serif text-text-primary text-xl font-semibold">
                    {job.company}
                  </h3>
                  <p className="font-serif text-text-body text-lg">
                    {job.role}
                  </p>
                </div>
                <span className="font-mono text-xs text-text-muted whitespace-nowrap">
                  {job.period}
                </span>
              </div>

              <p className="font-serif text-text-body text-base leading-relaxed">
                {job.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
