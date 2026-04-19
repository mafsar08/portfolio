"use client";

import { useState, useEffect, useCallback, useRef } from "react";

type Variant = "A" | "B";

const greetings = [
  { text: "நல்வரவு", lang: "ta" },
  { text: "स्वागत है", lang: "hi" },
  { text: "أهلاً وسهلاً", lang: "ar" },
  { text: "Bienvenido", lang: "es" },
  { text: "Welcome", lang: "en" },
];

// Variant A timings
const A_FADE_IN = 150;
const A_HOLD = 350;
const A_FADE_OUT = 150;
const A_LAST_HOLD = 450;

// Variant B timings
const B_FADE_IN = 250;
const B_HOLD = 350;
const B_FADE_OUT = 250;
const B_LAST_HOLD = 500;

const OVERLAY_FADE = 300;

export default function WelcomeScreen() {
  const [shouldShow, setShouldShow] = useState<boolean | null>(null);
  const [variant, setVariant] = useState<Variant>("A");
  const [wordIndex, setWordIndex] = useState(0);
  const [wordVisible, setWordVisible] = useState(false);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const [done, setDone] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Check localStorage on mount
  useEffect(() => {
    const seen = localStorage.getItem("welcome-seen");
    setShouldShow(!seen);
  }, []);

  // Clear all pending timeouts
  const clearAllTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const addTimeout = useCallback(
    (fn: () => void, delay: number) => {
      const id = setTimeout(fn, delay);
      timeoutsRef.current.push(id);
      return id;
    },
    []
  );

  // Run the animation sequence
  const runAnimation = useCallback(() => {
    clearAllTimeouts();
    setWordIndex(0);
    setWordVisible(false);
    setOverlayVisible(true);
    setDone(false);

    const fadeIn = variant === "A" ? A_FADE_IN : B_FADE_IN;
    const hold = variant === "A" ? A_HOLD : B_HOLD;
    const fadeOut = variant === "A" ? A_FADE_OUT : B_FADE_OUT;
    const lastHold = variant === "A" ? A_LAST_HOLD : B_LAST_HOLD;

    let elapsed = 100; // small initial delay

    for (let i = 0; i < greetings.length; i++) {
      const isLast = i === greetings.length - 1;

      // Set word index and fade in
      addTimeout(() => {
        setWordIndex(i);
        setWordVisible(true);
      }, elapsed);
      elapsed += fadeIn + hold;

      if (isLast) {
        // Last word: hold longer, then fade overlay
        elapsed += lastHold;
        addTimeout(() => {
          setOverlayVisible(false);
        }, elapsed);
        elapsed += OVERLAY_FADE;
        addTimeout(() => {
          localStorage.setItem("welcome-seen", "true");
          setDone(true);
        }, elapsed);
      } else {
        // Fade out, then next word
        addTimeout(() => {
          setWordVisible(false);
        }, elapsed);
        elapsed += fadeOut;
      }
    }
  }, [variant, clearAllTimeouts, addTimeout]);

  // Start animation when shouldShow becomes true, or variant changes
  useEffect(() => {
    if (shouldShow) {
      runAnimation();
    }
    return clearAllTimeouts;
  }, [shouldShow, variant, runAnimation, clearAllTimeouts]);

  // Lock body scroll
  useEffect(() => {
    if (shouldShow && !done) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [shouldShow, done]);

  // Don't render anything until we've checked localStorage
  if (shouldShow === null || shouldShow === false || done) return null;

  const fadeIn = variant === "A" ? A_FADE_IN : B_FADE_IN;
  const fadeOut = variant === "A" ? A_FADE_OUT : B_FADE_OUT;
  const currentGreeting = greetings[wordIndex];

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-bg"
      style={{
        opacity: overlayVisible ? 1 : 0,
        transition: `opacity ${OVERLAY_FADE}ms ease-out`,
      }}
    >
      {/* Variant A: Animated rings */}
      {variant === "A" && (
        <>
          {[120, 200, 300].map((size, i) => (
            <div
              key={size}
              className="absolute left-1/2 top-1/2 rounded-full border border-border"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                opacity: 0.15 - i * 0.04,
                animation: `pulse-ring 3s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Greeting text */}
      <span
        className={`relative z-10 font-serif text-text-primary select-none ${
          variant === "A" ? "text-4xl sm:text-5xl" : "text-5xl sm:text-6xl"
        }`}
        dir={currentGreeting.lang === "ar" ? "rtl" : "ltr"}
        style={
          variant === "A"
            ? {
                opacity: wordVisible ? 1 : 0,
                transition: `opacity ${wordVisible ? fadeIn : fadeOut}ms ease-in-out`,
              }
            : {
                opacity: wordVisible ? 1 : 0,
                transform: wordVisible ? "scale(1)" : wordVisible === false ? "scale(1.05)" : "scale(0.85)",
                transition: `opacity ${wordVisible ? fadeIn : fadeOut}ms ease-in-out, transform ${wordVisible ? fadeIn : fadeOut}ms ease-out`,
              }
        }
      >
        {currentGreeting.text}
      </span>

      {/* Variant switcher (temporary — for preview) */}
      <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-bg border border-border rounded-lg px-3 py-2 shadow-lg">
        <span className="font-mono text-[10px] uppercase tracking-wider text-text-muted mr-1">
          Style:
        </span>
        {(["A", "B"] as Variant[]).map((v) => (
          <button
            key={v}
            onClick={() => setVariant(v)}
            className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors ${
              variant === v
                ? "bg-accent text-white"
                : "bg-border text-text-muted hover:text-text-primary"
            }`}
          >
            {v === "A" ? "Rings" : "Hello"}
          </button>
        ))}
      </div>
    </div>
  );
}
