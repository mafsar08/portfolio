import Link from "next/link";
import type { ReactNode } from "react";

export default function WorkPageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="glimm-layout min-h-screen bg-[#FAFAF8] text-[#1A1A1A]">
      <main className="max-w-[640px] mx-auto px-6 md:px-8 pt-10 md:pt-14 pb-20">
        <Link
          href="/#glimm-work"
          className="group inline-flex items-center gap-2 text-[13px] text-[#6B6862] hover:text-[#1A1A1A] mb-12 transition-colors"
        >
          <span className="arrow-nudge inline-block transition-transform group-hover:-translate-x-0.5">
            ←
          </span>
          <span className="link-reveal">back</span>
        </Link>

        {children}
      </main>
    </div>
  );
}
