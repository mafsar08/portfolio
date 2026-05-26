"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROTATE_INTERVAL_MS = 3500;
// Apple-style easing for a smooth, premium slide
const SMOOTH_EASE = [0.32, 0.72, 0, 1] as const;

type Props = {
  phrases: string[];
};

export default function RotatingHeadline({ phrases }: Props) {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isPaused || prefersReducedMotion || phrases.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % phrases.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [isPaused, prefersReducedMotion, phrases.length]);

  const current = phrases[index];

  return (
    <motion.span
      layout
      transition={{ layout: { duration: 0.5, ease: SMOOTH_EASE } }}
      className="relative inline-block align-bottom leading-[inherit]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="text"
      aria-live="polite"
    >
      {/* Invisible spacer — gives the container its natural width
          for the current phrase. The visible text is absolutely
          positioned on top of it. */}
      <span className="invisible whitespace-nowrap" aria-hidden>
        {current}
      </span>

      {/* Cross-fading animated text */}
      <AnimatePresence initial={false}>
        <motion.span
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: SMOOTH_EASE }}
          className="absolute left-0 top-0 whitespace-nowrap text-accent"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
