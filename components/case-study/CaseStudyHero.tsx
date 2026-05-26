import type { ReactNode } from "react";
import { Narrow } from "./blocks";

type MetaItem = { label: string; value: string };

export default function CaseStudyHero({
  eyebrow,
  eyebrowIcon,
  title,
  lead,
  meta,
  children,
}: {
  eyebrow: string;
  eyebrowIcon?: ReactNode;
  title: ReactNode;
  lead: ReactNode;
  meta: MetaItem[];
  children?: ReactNode;
}) {
  return (
    <section className="pt-[88px] pb-16">
      <Narrow>
        {/* Eyebrow with optional spark icon */}
        <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent mb-4">
          {eyebrowIcon && (
            <span className="w-[18px] h-[18px] rounded-[5px] bg-gradient-to-tr from-accent to-accent-hover" />
          )}
          <span>{eyebrow}</span>
        </div>

        {/* Children rendered between eyebrow and title (used for editor notes) */}
        {children}

        {/* Title */}
        <h1 className="font-serif text-[clamp(2rem,5vw,46px)] font-semibold leading-[1.13] tracking-tight text-text-primary mb-6">
          {title}
        </h1>

        {/* Lead paragraph */}
        <div className="text-text-body text-lg leading-[1.7] max-w-[600px] [&_strong]:text-text-primary [&_strong]:font-semibold">
          {lead}
        </div>

        {/* Meta strip */}
        <div className="flex flex-wrap gap-x-[30px] gap-y-4 py-6 border-t border-b border-border mt-8">
          {meta.map((item) => (
            <div key={item.label}>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-text-muted mb-1">
                {item.label}
              </div>
              <div className="text-[15px] font-medium text-text-primary">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </Narrow>
    </section>
  );
}
