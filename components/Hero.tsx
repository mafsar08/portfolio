import FadeUp from "./FadeUp";

export default function Hero() {
  return (
    <section className="max-w-[720px] mx-auto px-6 pt-24 pb-16 border-b border-border">
      {/* Placeholder photo */}
      <FadeUp>
        <div className="w-20 h-20 rounded-full bg-accent-bg border border-border mb-6 flex items-center justify-center">
          <span className="font-mono text-xs text-text-muted">Photo</span>
        </div>
      </FadeUp>

      {/* Name */}
      <FadeUp delay={0.08}>
        <h1 className="font-serif text-text-primary text-3xl font-normal leading-tight mb-2">
          Mohammed Afsar
        </h1>
      </FadeUp>

      {/* Title */}
      <FadeUp delay={0.16}>
        <p className="font-mono text-xs uppercase tracking-[0.05em] text-text-muted mb-6">
          Senior Product Designer
        </p>
      </FadeUp>

      {/* Headline */}
      <FadeUp delay={0.24}>
        <h2 className="font-serif text-text-primary text-xl font-medium leading-snug mb-4 max-w-[560px]">
          I&rsquo;m Afsar, a designer who ships end-to-end.
        </h2>
      </FadeUp>

      {/* Intro */}
      <FadeUp delay={0.32}>
        <div className="font-serif text-text-body text-base leading-relaxed max-w-[560px] mb-6 space-y-3">
          <p>
            From research to production, I design products people actually
            use &mdash; across B2B SaaS, low-code platforms, and EdTech. I
            don&rsquo;t just hand off screens; I own problems, build design
            systems, and make sure what ships is what was designed.
          </p>
          <p>
            <strong className="text-text-primary">
              Currently pushing what a designer can ship &mdash; with a little
              help from AI.
            </strong>
          </p>
        </div>
      </FadeUp>

      {/* Location + email */}
      <FadeUp delay={0.4}>
        <p className="font-mono text-xs text-text-muted">
          Chennai, India{" "}
          <span className="mx-2 inline-block w-[3px] h-[3px] bg-text-muted align-middle" />{" "}
          <a
            href="mailto:mohammedafsar.des@gmail.com"
            className="text-accent hover:text-accent-hover transition-colors duration-200"
          >
            mohammedafsar.des@gmail.com
          </a>
        </p>
      </FadeUp>
    </section>
  );
}
