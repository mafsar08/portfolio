import { Mail, Download } from "lucide-react";
import FadeUp from "./FadeUp";

function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[720px] mx-auto px-6 pt-16 pb-16"
    >
      {/* Section label */}
      <FadeUp>
        <h2 className="font-mono text-xs uppercase tracking-[0.05em] text-text-body mb-10">
          Get in Touch
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-serif text-text-body text-base leading-relaxed mb-8">
          Have an exciting opportunity or just want to say hi?
        </p>
      </FadeUp>

      <FadeUp delay={0.16}>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:mohammedafsar.des@gmail.com"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover transition-colors duration-200"
          >
            <Mail size={16} />
            mohammedafsar.des@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/mohammedafsar08"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover transition-colors duration-200"
          >
            <LinkedinIcon size={16} />
            linkedin.com/in/mohammedafsar08
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:text-accent-hover transition-colors duration-200"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </FadeUp>
    </section>
  );
}
