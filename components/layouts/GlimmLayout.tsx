"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, X } from "lucide-react";
import { trackRecordData } from "@/data/track-record";
import { achievements } from "@/data/achievements";
import RotatingHeadline from "../RotatingHeadline";

const sections = [
  { id: "glimm-overview", label: "overview" },
  { id: "glimm-work", label: "work" },
  { id: "glimm-achievements", label: "achievements" },
  { id: "glimm-about", label: "about" },
  { id: "glimm-contact", label: "contact" },
];

const headlinePhrases = [
  "ships end-to-end",
  "codes alongside engineers",
  "partners with AI",
  "builds the systems behind the screens",
];

export default function GlimmLayout() {
  const [showAllWork, setShowAllWork] = useState(false);
  const [activeSection, setActiveSection] = useState("glimm-overview");

  // Track active section via IntersectionObserver
  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const highlighted = trackRecordData.filter((e) => e.highlighted);
  const others = trackRecordData.filter((e) => !e.highlighted);
  const totalEntries = trackRecordData.length;

  return (
    <div className="glimm-layout min-h-screen bg-[#F8F8F8] text-[#1A1A1A]">
      <div className="flex flex-col md:flex-row">
        {/* ── Desktop sticky left sidebar ── */}
        <aside className="hidden md:flex flex-col sticky top-0 h-screen w-[260px] shrink-0 border-r border-[#E5E5E5] px-7 py-10">
          {/* Brand */}
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight text-[#1A1A1A] mb-8 hover:opacity-70 transition-opacity"
          >
            afsar
          </Link>

          <div className="h-px bg-[#E5E5E5] mb-8" />

          {/* Nav */}
          <nav className="flex flex-col gap-3 mb-8">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-[13px] transition-all ${
                    isActive
                      ? "text-[#1A1A1A] font-semibold"
                      : "text-[#7A7A7A] font-normal hover:text-[#1A1A1A]"
                  }`}
                >
                  {section.label}
                </a>
              );
            })}
          </nav>

          <div className="h-px bg-[#E5E5E5] mb-8" />

          {/* Contact */}
          <div className="flex flex-col gap-2 text-[12px] mb-8">
            <span className="text-[#7A7A7A]">chennai, india</span>
            <a
              href="mailto:mohammedafsar.des@gmail.com"
              className="text-[#7A7A7A] hover:text-[#1A1A1A] hover:underline w-fit"
            >
              email →
            </a>
            <a
              href="https://linkedin.com/in/mohammedafsar08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7A7A7A] hover:text-[#1A1A1A] hover:underline w-fit"
            >
              linkedin →
            </a>
            <a
              href="/resume.pdf"
              download
              className="text-[#7A7A7A] hover:text-[#1A1A1A] hover:underline w-fit"
            >
              resume ↗
            </a>
          </div>

          {/* Spacer pushes version to bottom */}
          <div className="flex-1" />

          {/* Version */}
          <div className="font-mono text-[11px] text-[#7A7A7A]">v0.3 · 2026</div>
        </aside>

        {/* ── Mobile top bar ── */}
        <header className="md:hidden sticky top-0 z-50 w-full bg-[#F8F8F8]/90 backdrop-blur-md border-b border-[#E5E5E5]">
          <div className="px-5 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-[15px] font-semibold tracking-tight text-[#1A1A1A]"
            >
              afsar
            </Link>
            <nav className="flex items-center gap-4 text-[12px]">
              {sections.slice(1).map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`transition-colors ${
                    activeSection === s.id
                      ? "text-[#1A1A1A] font-semibold"
                      : "text-[#7A7A7A] hover:text-[#1A1A1A]"
                  }`}
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        {/* ── Main content area ── */}
        <main className="flex-1 min-w-0 max-w-[760px] mx-auto md:mx-0 md:ml-0 px-6 md:px-12 lg:px-16 py-12 md:py-16">
          {/* ── Overview / Hero ── */}
          <section
            id="glimm-overview"
            className="pb-16 mb-16 border-b border-[#E5E5E5] scroll-mt-6"
          >
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#7A7A7A] mb-5">
              senior product designer · chennai
            </div>

            <h1 className="text-[40px] md:text-[44px] font-bold leading-[1.1] tracking-tight mb-6 text-[#1A1A1A]">
              Mohammed Afsar
            </h1>

            <h2 className="text-[20px] md:text-[22px] font-medium leading-snug mb-8 text-[#1A1A1A]">
              I&rsquo;m Afsar, a designer who{" "}
              <RotatingHeadline phrases={headlinePhrases} />
            </h2>

            <p className="text-[#1A1A1A]/85 text-[16px] leading-[1.72]">
              Close to 5 years designing products that people actually use —
              across B2B SaaS, low-code platforms, and EdTech. I own problems
              end-to-end, build design systems, and make sure what ships is
              what was designed. Currently pushing what a designer can ship —
              with a little help from AI.
            </p>
          </section>

          {/* ── Work ── */}
          <section
            id="glimm-work"
            className="pb-16 mb-16 border-b border-[#E5E5E5] scroll-mt-6"
          >
            <h2 className="text-[26px] font-bold tracking-tight mb-2 text-[#1A1A1A]">
              work
            </h2>
            <p className="text-[#7A7A7A] text-[15px] leading-relaxed mb-8">
              Selected pieces shipped at Kissflow and Techfully.
            </p>

            <div className="space-y-5">
              {highlighted.map((entry) => {
                const caseStudyRoute = entry.links?.caseStudy?.startsWith("/")
                  ? entry.links.caseStudy
                  : null;
                const hasImage = entry.images && entry.images.length > 0;

                return (
                  <article
                    key={`${entry.company}-${entry.title}`}
                    className="rounded-xl border border-[#E5E5E5] bg-white overflow-hidden"
                  >
                    {/* Thumbnail */}
                    {hasImage && (
                      <div className="relative w-full aspect-[16/10] bg-[#EEEEEE]">
                        <Image
                          src={entry.images![0]}
                          alt={entry.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 720px"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-baseline justify-between gap-4 mb-2">
                        <h3 className="text-[18px] font-semibold text-[#1A1A1A] leading-snug">
                          {entry.title.toLowerCase()}
                        </h3>
                        <span className="font-mono text-[12px] text-[#7A7A7A] shrink-0">
                          {entry.date}
                        </span>
                      </div>

                      {entry.description && (
                        <p className="text-[#1A1A1A]/80 text-[14.5px] leading-[1.65] mb-3">
                          {entry.description}
                        </p>
                      )}

                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#7A7A7A]">
                          {entry.company} · {entry.type.toLowerCase()}
                        </span>
                        {caseStudyRoute && (
                          <Link
                            href={caseStudyRoute}
                            className="text-[13px] text-[#1A1A1A] underline hover:no-underline"
                          >
                            Read case study →
                          </Link>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Show all toggle */}
            <button
              onClick={() => setShowAllWork(!showAllWork)}
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white text-[13px] text-[#1A1A1A] px-4 py-2 hover:border-[#1A1A1A] transition-colors"
            >
              {showAllWork ? (
                <>
                  <X size={14} />
                  Hide full track record
                </>
              ) : (
                <>
                  <Plus size={14} />
                  Show all {totalEntries} entries
                </>
              )}
            </button>

            {/* Expanded full track record — title, description, meta + date */}
            {showAllWork && (
              <ul className="mt-7 border-t border-[#E5E5E5]">
                {others.map((entry) => (
                  <li
                    key={`${entry.company}-${entry.title}-all`}
                    className="border-b border-[#E5E5E5] py-4"
                  >
                    <div className="flex items-baseline justify-between gap-4 mb-1.5">
                      <span className="text-[15px] font-medium text-[#1A1A1A] leading-snug">
                        {entry.title.toLowerCase()}
                      </span>
                      <span className="font-mono text-[12px] text-[#7A7A7A] shrink-0">
                        {entry.date}
                      </span>
                    </div>
                    {entry.description && (
                      <p className="text-[#1A1A1A]/75 text-[13.5px] leading-[1.6] mb-2">
                        {entry.description}
                      </p>
                    )}
                    {entry.company && (
                      <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-[#7A7A7A]">
                        {entry.company} · {entry.type.toLowerCase()}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* ── Achievements (horizontal scroll) ── */}
          <section
            id="glimm-achievements"
            className="pb-16 mb-16 border-b border-[#E5E5E5] scroll-mt-6"
          >
            <h2 className="text-[26px] font-bold tracking-tight mb-2 text-[#1A1A1A]">
              achievements
            </h2>
            <p className="text-[#7A7A7A] text-[15px] leading-relaxed mb-6">
              Recognitions and moments that shaped my journey.
            </p>

            <div className="-mx-6 md:-mx-12 lg:-mx-16">
              <div
                className="flex gap-4 overflow-x-auto pb-4 px-6 md:px-12 lg:px-16 snap-x snap-mandatory scroll-px-6 md:scroll-px-12 lg:scroll-px-16"
                style={{ scrollbarWidth: "thin" }}
              >
                {achievements.map((ach) => {
                  const hasImage = !!ach.image;
                  return (
                    <article
                      key={ach.id}
                      className="w-[300px] shrink-0 snap-start rounded-xl border border-[#E5E5E5] bg-white overflow-hidden flex flex-col"
                    >
                      {/* Placeholder image */}
                      <div className="relative w-full aspect-[16/10] bg-[#EEEEEE]">
                        {hasImage && (
                          <Image
                            src={ach.image!}
                            alt={ach.title}
                            fill
                            className="object-cover"
                            sizes="300px"
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          <h3 className="text-[15px] font-semibold text-[#1A1A1A] leading-snug">
                            {ach.title.toLowerCase()}
                          </h3>
                          <span className="font-mono text-[11px] text-[#7A7A7A] shrink-0">
                            {ach.date}
                          </span>
                        </div>

                        {ach.company && (
                          <div className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#7A7A7A] mb-3">
                            {ach.company}
                          </div>
                        )}

                        {ach.description && (
                          <p className="text-[#1A1A1A]/80 text-[13px] leading-[1.6] mb-3">
                            {ach.description}
                          </p>
                        )}

                        {ach.testimonial && (
                          <blockquote className="border-l-2 border-[#E5E5E5] pl-3 mt-auto">
                            <p className="italic text-[#1A1A1A]/75 text-[12.5px] leading-[1.55] mb-1">
                              &ldquo;{ach.testimonial.quote}&rdquo;
                            </p>
                            <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#7A7A7A]">
                              — {ach.testimonial.author}
                              {ach.testimonial.role
                                ? `, ${ach.testimonial.role}`
                                : ""}
                            </p>
                          </blockquote>
                        )}
                      </div>
                    </article>
                  );
                })}

                {/* trailing spacer so last card can fully snap left */}
                <div className="shrink-0 w-0" />
              </div>
            </div>
          </section>

          {/* ── About ── */}
          <section
            id="glimm-about"
            className="pb-16 mb-16 border-b border-[#E5E5E5] scroll-mt-6"
          >
            <h2 className="text-[26px] font-bold tracking-tight mb-6 text-[#1A1A1A]">
              about
            </h2>
            <div className="space-y-4">
              <p className="text-[#1A1A1A]/85 text-[16px] leading-[1.72]">
                Self-taught product designer based in Chennai. Close to 5 years
                of experience across startups and B2B — strong in research,
                visual design, and scalable design systems.
              </p>
              <p className="text-[#1A1A1A]/85 text-[16px] leading-[1.72]">
                Currently Senior Product Designer at Kissflow, leading design
                for AI features and serving 10,000+ customers in 150+ countries.
              </p>
              <p className="text-[#1A1A1A]/85 text-[16px] leading-[1.72]">
                Founding member of SAAS Design, a Chennai-based design
                community.
              </p>
            </div>
          </section>

          {/* ── Contact ── */}
          <section
            id="glimm-contact"
            className="pb-16 mb-12 scroll-mt-6"
          >
            <h2 className="text-[26px] font-bold tracking-tight mb-2 text-[#1A1A1A]">
              get in touch
            </h2>
            <p className="text-[#7A7A7A] text-[15px] leading-relaxed mb-6">
              Have an exciting opportunity or just want to say hi?
            </p>
            <div className="flex flex-wrap gap-4 text-[15px]">
              <a
                href="mailto:mohammedafsar.des@gmail.com"
                className="text-[#1A1A1A] underline hover:no-underline"
              >
                → email
              </a>
              <a
                href="https://linkedin.com/in/mohammedafsar08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1A1A1A] underline hover:no-underline"
              >
                → linkedin
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-[#1A1A1A] underline hover:no-underline"
              >
                → resume
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
