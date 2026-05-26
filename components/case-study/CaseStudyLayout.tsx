import type { ReactNode } from "react";
import Header from "../Header";

export default function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <footer className="py-12 text-center text-text-muted text-[13px] border-t border-border">
        <p>Mohammed Afsar · Senior Product Designer</p>
      </footer>
    </div>
  );
}
