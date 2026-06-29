"use client";

import { personalInfo } from "@/data/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="font-mono text-sm transition-colors" style={{ color: "var(--text-dim)" }}>
          ~/kndlcero
        </a>
        <p className="font-mono text-xs text-center" style={{ color: "var(--muted)" }}>
          (c) {year} Ken Audie S. Lucero - Built with Next.js & Tailwind CSS
        </p>
        <div className="flex items-center gap-4">
          {[
            { label: "GitHub", href: personalInfo.github },
            { label: "LinkedIn", href: personalInfo.linkedin },
            { label: "Email", href: `mailto:${personalInfo.email}` },
          ].map(({ label, href }, i, arr) => (
            <span key={label} className="flex items-center gap-4">
              <a href={href} target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="font-mono text-xs transition-colors"
                style={{ color: "var(--text-dim)" }}>
                {label}
              </a>
              {i < arr.length - 1 && <span style={{ color: "var(--border)" }}>|</span>}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
