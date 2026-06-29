"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "publications", label: "publications" },
  { id: "education", label: "education" },
  { id: "contact", label: "contact" },
];

export default function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
      setShowTop(scrolled > 400);
    };
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.3 }
    );
    SECTIONS.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); observer.disconnect(); };
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5" style={{ backgroundColor: "var(--border)" }}>
        <div className="h-full transition-all duration-100"
          style={{ width: `${progress}%`, backgroundColor: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }}/>
      </div>
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 items-end">
        {SECTIONS.map(({ id, label }) => (
          <a key={id} href={`#${id}`} className="group flex items-center gap-2 transition-all duration-200">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ color: "var(--accent)" }}>{label}</span>
            <div className="rounded-full transition-all duration-300" style={{
              width: active === id ? "8px" : "4px",
              height: active === id ? "8px" : "4px",
              backgroundColor: active === id ? "var(--accent)" : "var(--border)",
              boxShadow: active === id ? "0 0 6px var(--accent)" : "none",
            }}/>
          </a>
        ))}
      </div>
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-6 z-40 w-10 h-10 rounded-md border flex items-center justify-center transition-all duration-200"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text-dim)" }}
          aria-label="Back to top">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      )}
    </>
  );
}