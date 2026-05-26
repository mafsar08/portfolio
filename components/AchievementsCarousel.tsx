"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { achievements } from "@/data/achievements";
import FadeUp from "./FadeUp";

const AUTO_ADVANCE_MS = 6000;
const RESUME_AFTER_MS = 12000;
const SWIPE_THRESHOLD = 50;

export default function AchievementsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [progress, setProgress] = useState(0);

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const elapsedRef = useRef(0); // ms accumulated for the current card
  const rafRef = useRef<number | null>(null);
  const lastFrameRef = useRef(0);

  // Detect reduced motion preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const isPaused = isHovering || isManuallyPaused;

  // rAF-driven progress + advance loop
  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(0);
      return;
    }

    if (isPaused) {
      // Stop the loop; elapsedRef retains its value for resume
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      return;
    }

    lastFrameRef.current = performance.now();

    const tick = (now: number) => {
      const delta = now - lastFrameRef.current;
      lastFrameRef.current = now;
      elapsedRef.current += delta;

      if (elapsedRef.current >= AUTO_ADVANCE_MS) {
        elapsedRef.current = 0;
        setProgress(0);
        setDirection(1);
        setCurrentIndex((i) => (i + 1) % achievements.length);
        return; // effect will re-run because currentIndex changed
      }

      setProgress(elapsedRef.current / AUTO_ADVANCE_MS);
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isPaused, currentIndex, prefersReducedMotion]);

  // Reset progress/elapsed whenever the index changes
  useEffect(() => {
    elapsedRef.current = 0;
    setProgress(0);
  }, [currentIndex]);

  // Pause for user interaction, then resume after a delay
  const handleInteraction = () => {
    setIsManuallyPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsManuallyPaused(false);
      resumeTimerRef.current = null;
    }, RESUME_AFTER_MS);
  };

  // Clean up resume timer
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((i) => (i === 0 ? achievements.length - 1 : i - 1));
    handleInteraction();
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((i) => (i + 1) % achievements.length);
    handleInteraction();
  };

  const goTo = (i: number) => {
    setDirection(i > currentIndex ? 1 : -1);
    setCurrentIndex(i);
    handleInteraction();
  };

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartXRef.current;
    if (diff > SWIPE_THRESHOLD) goToPrev();
    else if (diff < -SWIPE_THRESHOLD) goToNext();
    touchStartXRef.current = null;
  };

  const current = achievements[currentIndex];
  const hasImage = !!current.image;
  const hasTestimonial = !!current.testimonial;

  return (
    <section
      id="achievements"
      className="max-w-[880px] mx-auto px-6 pt-16 pb-16 border-b border-border"
    >
      {/* Section header */}
      <FadeUp>
        <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-text-body mb-2">
          Achievements
        </h2>
        <p className="font-serif text-base text-text-body mb-8">
          Recognitions and moments that shaped my journey.
        </p>
      </FadeUp>

      <FadeUp delay={0.08}>
        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Achievements carousel"
          aria-roledescription="carousel"
        >
          {/* Card area */}
          <div className="relative overflow-hidden rounded-lg border border-border bg-bg min-h-[340px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: 30 * direction }
                }
                animate={{ opacity: 1, x: 0 }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : { opacity: 0, x: -30 * direction }
                }
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`grid ${hasImage ? "md:grid-cols-2" : "grid-cols-1"} gap-0`}
              >
                {/* Image */}
                {hasImage && (
                  <div className="relative aspect-square md:aspect-auto md:min-h-[380px] bg-highlight-bg">
                    <Image
                      src={current.image!}
                      alt={current.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={currentIndex === 0}
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  {/* Company + date */}
                  <div className="font-mono text-[10px] uppercase tracking-wider text-text-muted mb-2">
                    {current.company ? `${current.company} \u00B7 ` : ""}
                    {current.date}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-text-primary text-3xl md:text-4xl font-medium leading-tight mb-3">
                    {current.title}
                  </h3>

                  {/* Description */}
                  {current.description && (
                    <p className="font-serif text-text-body text-lg leading-relaxed mb-5">
                      {current.description}
                    </p>
                  )}

                  {/* Testimonial */}
                  {hasTestimonial && (
                    <div className="border-l-2 border-accent pl-4 mt-2">
                      <p className="font-serif italic text-text-body text-base leading-relaxed mb-2">
                        &ldquo;{current.testimonial!.quote}&rdquo;
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-text-muted">
                        &mdash; {current.testimonial!.author}
                        {current.testimonial!.role &&
                          `, ${current.testimonial!.role}`}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Arrow nav */}
          {achievements.length > 1 && (
            <>
              <button
                onClick={goToPrev}
                aria-label="Previous achievement"
                className="absolute left-2 md:-left-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-bg border border-border text-text-muted hover:text-text-primary transition-colors shadow-md"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={goToNext}
                aria-label="Next achievement"
                className="absolute right-2 md:-right-4 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-full bg-bg border border-border text-text-muted hover:text-text-primary transition-colors shadow-md"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Progress dots */}
        {achievements.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-6">
            {achievements.map((_, i) => {
              const isActive = i === currentIndex;
              return (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to achievement ${i + 1}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative h-1.5 rounded-full overflow-hidden transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-border"
                      : "w-1.5 bg-border hover:bg-text-muted"
                  }`}
                >
                  {isActive && (
                    <span
                      className="absolute inset-y-0 left-0 bg-accent rounded-full"
                      style={{
                        width: prefersReducedMotion
                          ? "100%"
                          : `${progress * 100}%`,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </FadeUp>
    </section>
  );
}
