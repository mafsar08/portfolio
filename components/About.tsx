import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-[880px] mx-auto px-6 pt-16 pb-16 border-b border-border"
    >
      {/* Section label */}
      <FadeUp>
        <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-text-body mb-10">
          About
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <div className="space-y-4">
          <p className="font-serif text-text-body text-lg leading-relaxed">
            Self-taught product designer based in Chennai. Close to 5 years of
            experience across startups and B2B &mdash; strong in research, visual
            design, and scalable design systems.
          </p>
          <p className="font-serif text-text-body text-lg leading-relaxed">
            Currently Senior Product Designer at Kissflow, leading design for AI
            features and serving 10,000+ customers in 150+ countries.
          </p>
          <p className="font-serif text-text-body text-lg leading-relaxed">
            Founding member of SAAS Design, a Chennai-based design community.
          </p>
        </div>
      </FadeUp>
    </section>
  );
}
