import type { ReactNode } from "react";

/* ──────────────────────────────────────────────
   Column wrappers
   ────────────────────────────────────────────── */

export function Narrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[680px] mx-auto px-6 ${className}`}>{children}</div>
  );
}

export function Wide({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-[1080px] mx-auto px-6 ${className}`}>{children}</div>
  );
}

/* ──────────────────────────────────────────────
   Section divider
   ────────────────────────────────────────────── */

export function SectionDivider() {
  return <div className="h-px bg-border max-w-[680px] mx-auto" />;
}

/* ──────────────────────────────────────────────
   Eyebrow (small accent label above headings)
   ────────────────────────────────────────────── */

export function Eyebrow({
  children,
  muted = false,
}: {
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <span
      className={`font-mono text-[11px] font-semibold uppercase tracking-[0.12em] mb-3 inline-block ${
        muted ? "text-text-muted" : "text-accent"
      }`}
    >
      {children}
    </span>
  );
}

/* ──────────────────────────────────────────────
   Editor note (yellow draft annotation)
   ────────────────────────────────────────────── */

export function EditorNote({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#FFFCF0] border border-dashed border-[#E0CE8A] rounded-lg px-4 py-3 my-4 text-[12.5px] leading-relaxed text-[#8A6D1E]">
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Pull quote
   ────────────────────────────────────────────── */

export function PullQuote({
  children,
  attribution,
}: {
  children: ReactNode;
  attribution: string;
}) {
  return (
    <blockquote className="border-l-[3px] border-accent bg-accent-bg/60 px-7 py-6 my-8 rounded-r-md">
      <p className="font-serif italic text-text-primary text-[17px] leading-[1.7] mb-2.5">
        &ldquo;{children}&rdquo;
      </p>
      <span className="font-mono text-[13px] text-text-muted">
        &mdash; {attribution}
      </span>
    </blockquote>
  );
}

/* ──────────────────────────────────────────────
   Key decision box (accent border + label + body)
   ────────────────────────────────────────────── */

export function KeyDecision({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="relative bg-bg border border-accent/40 rounded-md px-7 py-6 my-7 shadow-sm">
      <span
        aria-hidden
        className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-l-md"
      />
      <div className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-accent mb-2.5">
        Key Decision · {label}
      </div>
      <div className="text-text-primary text-[15px] leading-[1.7] [&_strong]:text-accent-hover">
        {children}
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Callout (amber-tinted notice)
   ────────────────────────────────────────────── */

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[#FFF8E6] border border-[#EFDB9E] rounded-md px-6 py-5 my-7 text-[14.5px] leading-[1.65] text-text-body [&_strong]:text-[#976400]">
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Aside (editorial side note)
   ────────────────────────────────────────────── */

export function Aside({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-2 border-border pl-5 my-7 text-[14.5px] text-text-muted leading-relaxed">
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Problem layer (numbered editorial section)
   ────────────────────────────────────────────── */

export function ProblemLayer({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[56px_1fr] gap-5 py-7 border-b border-border last:border-b-0">
      <div className="font-serif text-3xl font-semibold leading-none text-accent/40">
        {num}
      </div>
      <div>
        <h3 className="font-serif text-text-primary text-lg font-semibold leading-snug mb-2">
          {title}
        </h3>
        <div className="text-text-body text-[15px] leading-[1.72]">
          {children}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Craft item (h3 with inline tag + body)
   ────────────────────────────────────────────── */

export function CraftItem({
  title,
  tag,
  children,
}: {
  title: string;
  tag: string;
  children: ReactNode;
}) {
  return (
    <div className="py-5 border-b border-border last:border-b-0">
      <h3 className="text-base font-semibold text-text-primary mb-1.5 flex items-baseline gap-2.5">
        {title}
        <span className="font-mono text-[11px] font-medium text-accent bg-accent-bg rounded px-1.5 py-0.5 normal-case">
          {tag}
        </span>
      </h3>
      <p className="text-text-body text-[14.5px] leading-[1.7] m-0">
        {children}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Two-phase timeline (Phase 1 → Phase 2)
   ────────────────────────────────────────────── */

export function Timeline({
  phase1,
  phase2,
  midLabel,
}: {
  phase1: { tag: string; title: string; body: ReactNode };
  phase2: { tag: string; title: string; body: ReactNode };
  midLabel: string;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_60px_1fr] my-9 gap-4 md:gap-0">
      <TimelinePhase {...phase1} />
      <div className="flex md:flex-col items-center justify-center gap-2 py-3 md:py-0 px-1">
        <span className="h-px md:h-auto md:w-0.5 w-full md:flex-1 bg-accent/40" />
        <span className="text-accent text-lg leading-none md:rotate-0 rotate-90">
          →
        </span>
        <span className="text-center text-[10.5px] font-semibold uppercase tracking-wider text-text-muted whitespace-nowrap">
          {midLabel}
        </span>
        <span className="text-accent text-lg leading-none md:rotate-0 rotate-90">
          →
        </span>
        <span className="h-px md:h-auto md:w-0.5 w-full md:flex-1 bg-accent/40" />
      </div>
      <TimelinePhase {...phase2} />
    </div>
  );
}

function TimelinePhase({
  tag,
  title,
  body,
}: {
  tag: string;
  title: string;
  body: ReactNode;
}) {
  return (
    <div className="bg-bg border border-border rounded-lg p-6 shadow-sm">
      <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-accent mb-2">
        {tag}
      </div>
      <h3 className="text-base font-semibold text-text-primary mb-2">
        {title}
      </h3>
      <p className="text-text-muted text-[13.5px] leading-[1.6] m-0">{body}</p>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Image placeholder (dashed box with icon + label + desc)
   ────────────────────────────────────────────── */

type ImageSize = "hero" | "large" | "medium" | "small" | "diagram";

const imageSizeClass: Record<ImageSize, string> = {
  hero: "min-h-[320px]",
  large: "min-h-[340px]",
  medium: "min-h-[280px]",
  small: "min-h-[210px]",
  diagram: "min-h-[230px]",
};

export function ImagePlaceholder({
  icon,
  label,
  desc,
  size = "medium",
  warm = false,
  caption,
}: {
  icon: string;
  label: string;
  desc: string;
  size?: ImageSize;
  warm?: boolean;
  caption?: string;
}) {
  return (
    <div>
      <div
        className={`${imageSizeClass[size]} flex flex-col items-center justify-center text-center gap-2 px-6 py-6 rounded-xl border-2 border-dashed transition-colors hover:border-accent ${
          warm
            ? "bg-accent-bg/40 border-accent/40"
            : "bg-highlight-bg/40 border-border"
        }`}
      >
        <span className="text-2xl opacity-55 text-text-muted">{icon}</span>
        <span className="font-semibold text-sm text-text-body">{label}</span>
        <span className="text-xs text-text-muted max-w-[400px] leading-[1.5]">
          {desc}
        </span>
      </div>
      {caption && (
        <p className="text-[13px] text-text-muted text-center mt-2.5 italic">
          {caption}
        </p>
      )}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Image grid wrapper (2-up or 3-up)
   ────────────────────────────────────────────── */

export function ImageGrid({
  count,
  children,
  className = "",
}: {
  count: 2 | 3;
  children: ReactNode;
  className?: string;
}) {
  const cols = count === 3 ? "md:grid-cols-3" : "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 ${cols} gap-4 my-8 ${className}`}>
      {children}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Closing line (large serif italic finale)
   ────────────────────────────────────────────── */

export function ClosingLine({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif text-[25px] font-medium leading-[1.45] text-text-primary tracking-tight max-w-[580px] pt-9 pb-3">
      {children}
    </p>
  );
}

/* ──────────────────────────────────────────────
   Inline emphasized term (italic + colored)
   ────────────────────────────────────────────── */

export function Term({ children }: { children: ReactNode }) {
  return <em className="italic text-text-primary">{children}</em>;
}
