"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackRecordData } from "@/data/track-record";
import { achievements } from "@/data/achievements";
import { experience } from "@/data/experience";

type PreviewData = { title: string; images?: string[] };

function useChennaiTime() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const tick = () => setTime(fmt.format(new Date()).toLowerCase().replace(" ", ""));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function GlimmLayout() {
  const [showAllWork, setShowAllWork] = useState(false);
  const [hoverEntry, setHoverEntry] = useState<PreviewData | null>(null);
  const [hoverTop, setHoverTop] = useState(0);
  const chennaiTime = useChennaiTime();

  const featured = trackRecordData.filter((e) => e.highlighted).slice(0, 4);
  const featuredKeys = new Set(featured.map((e) => `${e.company}-${e.title}`));
  const others = trackRecordData.filter(
    (e) => !featuredKeys.has(`${e.company}-${e.title}`)
  );

  return (
    <div className="glimm-layout min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <WorkPreview entry={hoverEntry} top={hoverTop} />
      <main className="max-w-[640px] mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-20">
        {/* ── Header: portrait + name + tagline ── */}
        <header className="mb-20 rise">
          <div className="flex items-start gap-5 mb-8">
            <div className="relative w-[72px] h-[72px] shrink-0 rounded-full overflow-hidden bg-[#EFEDE8] ring-1 ring-[#E8E5DE]">
              <Image
                src="/images/work/placeholder-1.svg"
                alt="Mohammed Afsar"
                fill
                className="object-cover"
                sizes="72px"
                priority
              />
            </div>
            <div className="pt-1">
              <h1 className="text-[28px] md:text-[32px] leading-[1.1] font-normal tracking-tight text-[#1A1A1A]">
                Mohammed Afsar
              </h1>
              <div className="mt-1.5 flex items-center gap-2 text-[13px] text-[#6B6862]">
                <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-[#6B8A4F]" />
                <span>Senior Product Designer at Kissflow</span>
              </div>
            </div>
          </div>

          <p className="text-[16px] leading-[1.72] text-[#2A2826] max-w-[560px]">
            Self-taught designer based in Chennai. Close to five years building
            products people actually use — across B2B SaaS, low-code platforms,
            and EdTech. I own problems end-to-end and ship what was designed.{" "}
            <span className="text-[#1A1A1A] font-medium">
              Currently pushing what a designer can ship — with a little help
              from AI.
            </span>
          </p>

          <div className="mt-6 flex items-center gap-3 text-[12px] font-mono-tabular text-[#9A968F]">
            <span>chennai, india</span>
            <span className="text-[#D6D2C9]">·</span>
            <span>{chennaiTime || "—"} local</span>
          </div>
        </header>

        {/* ── Work ── */}
        <section id="glimm-work" className="mb-20 scroll-mt-10">
          <SectionHeader label="Work" />

          <ul className="">
            {featured.map((entry) => (
              <WorkRow
                key={`${entry.company}-${entry.title}`}
                year={entry.year}
                title={entry.title}
                description={entry.description}
                slug={entry.slug}
                onHoverIn={(top) => {
                  setHoverEntry(entry);
                  setHoverTop(top);
                }}
                onHoverOut={() => setHoverEntry(null)}
              />
            ))}
          </ul>

          <button
            onClick={() => setShowAllWork(!showAllWork)}
            className="mt-6 text-[13px] text-[#6B6862] hover:text-[#1A1A1A] transition-colors link-reveal"
          >
            {showAllWork ? "Hide full track record" : `Show all ${trackRecordData.length} entries`}
          </button>

          {showAllWork && (
            <ul className="mt-6 ">
              {others.map((entry) => (
                <WorkRow
                  key={`${entry.company}-${entry.title}-all`}
                  year={entry.year}
                  title={entry.title}
                  slug={entry.slug}
                  muted
                  onHoverIn={(top) => {
                    setHoverEntry(entry);
                    setHoverTop(top);
                  }}
                  onHoverOut={() => setHoverEntry(null)}
                />
              ))}
            </ul>
          )}
        </section>

        {/* ── Experience ── */}
        <section id="glimm-experience" className="mb-20 scroll-mt-10">
          <SectionHeader label="Experience" />

          <ul className="space-y-7">
            {experience.map((job) => (
              <li key={`${job.company}-${job.startYear}`} className="grid grid-cols-[80px_1fr] gap-6 items-baseline">
                <span className="font-mono-tabular text-[12px] text-[#9A968F] pt-0.5">
                  {job.period}
                </span>
                <div>
                  <div className="flex items-center gap-2 text-[15px] text-[#1A1A1A]">
                    <span>{job.role} at {job.company}</span>
                    {job.current && (
                      <span className="status-dot inline-block w-1.5 h-1.5 rounded-full bg-[#6B8A4F] ml-1" />
                    )}
                  </div>
                  {job.description && (
                    <p className="mt-1.5 text-[14px] leading-[1.65] text-[#6B6862]">
                      {job.description}
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Achievements ── */}
        <section id="glimm-achievements" className="mb-20 scroll-mt-10">
          <SectionHeader label="Achievements" />

          <ul className="">
            {achievements.map((ach) => {
              const hasImage = !!ach.image;
              return (
                <li
                  key={ach.id}
                  className="py-3.5 grid grid-cols-[80px_1fr] gap-6 items-baseline"
                  onMouseEnter={
                    hasImage
                      ? (e) => {
                          setHoverEntry({
                            title: ach.title,
                            images: [ach.image!],
                          });
                          setHoverTop(e.currentTarget.getBoundingClientRect().top);
                        }
                      : undefined
                  }
                  onMouseLeave={hasImage ? () => setHoverEntry(null) : undefined}
                >
                  <span className="font-mono-tabular text-[12px] text-[#9A968F]">
                    {ach.date}
                  </span>
                  <div>
                    <div className="text-[15px] text-[#1A1A1A]">{ach.title}</div>
                    {ach.company && (
                      <div className="text-[13px] text-[#9A968F] mt-0.5">{ach.company}</div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ── About ── */}
        <section id="glimm-about" className="mb-20 scroll-mt-10">
          <SectionHeader label="About" />

          <div className="space-y-4 text-[15.5px] leading-[1.72] text-[#2A2826]">
            <p>
              Self-taught product designer based in Chennai. Close to 5 years of
              experience across startups and B2B — strong in research, visual
              design, and scalable design systems.
            </p>
            <p>
              Currently Senior Product Designer at Kissflow, leading design for
              AI features and serving 10,000+ customers in 150+ countries.
            </p>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="glimm-contact" className="mb-12 scroll-mt-10">
          <SectionHeader label="Contact" />

          <p className="text-[15.5px] leading-[1.72] text-[#2A2826] mb-6">
            Have an exciting opportunity, want to swap notes, or just say hi —
            I&rsquo;d love to hear from you.
          </p>

          <ul className="space-y-3">
            <ContactRow
              label="Email"
              value="mohammedafsar.des@gmail.com"
              href="mailto:mohammedafsar.des@gmail.com"
            />
            <ContactRow
              label="LinkedIn"
              value="linkedin.com/in/mohammedafsar08"
              href="https://linkedin.com/in/mohammedafsar08"
              external
            />
            <ContactRow
              label="Resume"
              value="download pdf"
              href="/resume.pdf"
              download
            />
          </ul>
        </section>

        {/* ── Footer ── */}
        <footer className="pt-10 mt-10 border-t border-[#ECE9E2] flex items-center justify-between text-[11.5px] font-mono-tabular text-[#9A968F]">
          <span>© 2026 mohammed afsar</span>
          <span>v0.4 · {chennaiTime || "—"} ist</span>
        </footer>
      </main>
    </div>
  );
}

/* ─── Sub-components ─── */

function SectionHeader({ label }: { label: string }) {
  return (
    <h2 className="mb-3 text-[16px] font-normal tracking-tight text-[#1A1A1A]">
      {label}
    </h2>
  );
}

function WorkRow({
  year,
  title,
  description,
  slug,
  muted = false,
  onHoverIn,
  onHoverOut,
}: {
  year: number;
  title: string;
  description?: string;
  slug?: string;
  muted?: boolean;
  onHoverIn?: (top: number) => void;
  onHoverOut?: () => void;
}) {
  const titleSize = muted ? "text-[14.5px]" : "text-[15.5px]";
  const titleColor = muted ? "text-[#4A4844]" : "text-[#1A1A1A]";
  const padY = description ? "py-5" : "py-3.5";

  const inner = (
    <>
      <span className="font-mono-tabular text-[12px] text-[#9A968F] pt-0.5">
        {year}
      </span>
      <div className="min-w-0">
        <div className="flex items-baseline gap-3">
          <span className={`${titleSize} ${titleColor} group-hover:text-[#1A1A1A]`}>
            {title}
          </span>
          {slug && (
            <span className="ml-auto text-[#9A968F] group-hover:text-[#1A1A1A] arrow-nudge">
              ↗
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#6B6862]">
            {description}
          </p>
        )}
      </div>
    </>
  );

  if (slug) {
    return (
      <li
        onMouseEnter={(e) =>
          onHoverIn?.(e.currentTarget.getBoundingClientRect().top)
        }
        onMouseLeave={() => onHoverOut?.()}
      >
        <Link
          href={`/work/${slug}`}
          className={`group ${padY} grid grid-cols-[80px_1fr] gap-6 items-baseline transition-colors`}
        >
          {inner}
        </Link>
      </li>
    );
  }

  return (
    <li className={`${padY} grid grid-cols-[80px_1fr] gap-6 items-baseline`}>
      {inner}
    </li>
  );
}

const PREVIEW_ADVANCE_MS = 2500;
const PREVIEW_FADE_MS = 400;

function WorkPreview({
  entry,
  top,
}: {
  entry: PreviewData | null;
  top: number;
}) {
  const [render, setRender] = useState<PreviewData | null>(entry);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (entry) {
      setRender(entry);
      setIndex(0);
    }
  }, [entry]);

  const images = render?.images ?? [];
  const multi = images.length > 1;

  useEffect(() => {
    if (!entry || !multi) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, PREVIEW_ADVANCE_MS);
    return () => clearInterval(id);
  }, [entry, multi, images.length]);

  if (!render) return null;

  const visible = !!entry;
  const clampedTop = Math.max(24, top);

  return (
    <div
      aria-hidden
      className={`hidden xl:block fixed z-40 w-[320px] pointer-events-none transition-all duration-200 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
      }`}
      style={{
        top: `${clampedTop}px`,
        left: "min(calc(50% + 352px), calc(100vw - 344px))",
        transitionProperty: "top, opacity, transform",
      }}
    >
      <div className="relative w-full aspect-[16/10] rounded-lg bg-[#EFEDE8] ring-1 ring-[#E8E5DE] shadow-[0_10px_40px_-12px_rgba(0,0,0,0.12)] overflow-hidden">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity ease-out"
            style={{
              opacity: i === index ? 1 : 0,
              transitionDuration: `${PREVIEW_FADE_MS}ms`,
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>
        ))}

        {multi && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {images.map((_, i) => {
              const active = i === index;
              return (
                <span
                  key={i}
                  className="block rounded-full overflow-hidden transition-all duration-300 relative"
                  style={{
                    width: active ? 22 : 5,
                    height: 4,
                    backgroundColor: active
                      ? "rgba(255,255,255,0.45)"
                      : "rgba(255,255,255,0.55)",
                    boxShadow: "0 0 0 0.5px rgba(0,0,0,0.08)",
                  }}
                >
                  {active && (
                    <span
                      key={`${render.title}-${i}`}
                      className="glimm-progress-fill absolute inset-0 bg-white"
                    />
                  )}
                </span>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function ContactRow({
  label,
  value,
  href,
  external,
  download,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <li className="grid grid-cols-[80px_1fr] gap-6 items-baseline">
      <span className="font-mono-tabular text-[12px] text-[#9A968F]">
        {label}
      </span>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...(download ? { download: true } : {})}
        className="group inline-flex items-center gap-2 text-[15px] text-[#1A1A1A] w-fit"
      >
        <span className="link-reveal">{value}</span>
        <span className="text-[#9A968F] group-hover:text-[#1A1A1A] arrow-nudge">↗</span>
      </a>
    </li>
  );
}
