"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "projects", href: "#projects" },
  { label: "publications", href: "#publications" },
  { label: "education", href: "#education" },
  { label: "contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); }); },
      { threshold: 0.3 }
    );
    navLinks.forEach(({ href }) => { const el = document.querySelector(href); if (el) observer.observe(el); });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => { window.removeEventListener("scroll", handleScroll); observer.disconnect(); };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-md border-b" : "bg-transparent"}`}
      style={scrolled ? { backgroundColor: "var(--bg)", borderColor: "var(--border)", opacity: 0.95 } : {}}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Primary">
        <a href="#" className="font-mono text-sm hover:opacity-80 transition-opacity" style={{ color: "var(--accent)" }}>
          <span style={{ color: "var(--text-dim)" }}>~/</span>kndlcero
          <span className="animate-blink ml-0.5" style={{ color: "var(--accent)" }}>_</span>
        </a>
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, href }) => {
              const isActive = activeSection === href.slice(1);
              return (
                <li key={label}>
                  <a href={href} aria-current={isActive ? "page" : undefined}
                    className="font-mono text-xs tracking-widest uppercase transition-colors duration-200"
                    style={{ color: isActive ? "var(--accent)" : "var(--text-dim)" }}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button onClick={toggleTheme} type="button" aria-label="Toggle theme"
            className="w-8 h-8 rounded-md flex items-center justify-center transition-all duration-200 border"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}>
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="5" strokeWidth="2"/>
                <line x1="12" y1="1" x2="12" y2="3" strokeWidth="2" strokeLinecap="round"/>
                <line x1="12" y1="21" x2="12" y2="23" strokeWidth="2" strokeLinecap="round"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" strokeWidth="2" strokeLinecap="round"/>
                <line x1="1" y1="12" x2="3" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="21" y1="12" x2="23" y2="12" strokeWidth="2" strokeLinecap="round"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" strokeWidth="2" strokeLinecap="round"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)}
            type="button" aria-label="Toggle menu" aria-expanded={menuOpen} aria-controls="mobile-menu">
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} style={{ backgroundColor: "var(--text-dim)" }}/>
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--text-dim)" }}/>
            <span className={`block w-5 h-px transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} style={{ backgroundColor: "var(--text-dim)" }}/>
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div id="mobile-menu" className="md:hidden border-b px-6 py-4 flex flex-col gap-4"
          style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)" }}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              aria-current={activeSection === href.slice(1) ? "page" : undefined}
              className="font-mono text-xs tracking-widest uppercase transition-colors"
              style={{ color: "var(--text-dim)" }}>./{label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
