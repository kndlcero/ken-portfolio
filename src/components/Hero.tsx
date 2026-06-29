"use client";

import { useEffect, useState } from "react";
import { personalInfo } from "@/data/data";

const TYPING_STRINGS = [
  "Backend Engineer",
  "API Architect",
  "Compiler Builder",
  "CS @ PUP",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setStringIndex((s) => (s + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, stringIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="absolute top-24 left-6 font-mono text-xs opacity-40 select-none hidden lg:block"
        style={{ color: "var(--border)" }}>
        <div>+-- init.sh</div>
        <div>|</div>
        <div>+-- $ node portfolio.js</div>
      </div>
      <div className="absolute bottom-16 right-6 font-mono text-xs opacity-40 select-none hidden lg:block"
        style={{ color: "var(--border)" }}>
        <div>{String.raw`// v1.0.0`}</div>
        <div>{String.raw`// MIT License`}</div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border rounded-full px-4 py-1.5 mb-8"
          style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}>
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>
            open to backend / full-stack internships
          </span>
        </div>

        <h1 className="font-sans text-5xl md:text-7xl mb-4 leading-tight tracking-tight">
          <span className="font-light" style={{ color: "var(--text-dim)" }}>Hi, I&apos;m </span>
          <span className="font-semibold" style={{ color: "var(--text)" }}>Ken.</span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="font-mono text-xl md:text-2xl" style={{ color: "var(--accent)" }}>
            {displayText}
            <span className="animate-blink">_</span>
          </span>
        </div>

        <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{ color: "var(--text-dim)" }}>
          CS junior at <span style={{ color: "var(--text)", fontWeight: 600 }}>PUP</span> building{" "}
          <span style={{ color: "var(--text)", fontWeight: 600 }}>APIs</span>,{" "}
          <span style={{ color: "var(--text)", fontWeight: 600 }}>compilers</span>, and{" "}
          <span style={{ color: "var(--text)", fontWeight: 600 }}>real-time systems</span>.
          Consistent academic distinction holder and published contributor at{" "}
          <span style={{ color: "var(--accent)" }}>WCTP 2025</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects"
            className="px-6 py-3 font-mono text-sm font-medium rounded transition-all duration-200"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
            view_projects();
          </a>
          <a href="#contact"
            className="px-6 py-3 border font-mono text-sm rounded transition-all duration-200"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}>
            contact_me();
          </a>
          <a href="/Lucero_Ken_CV.pdf" download
            className="px-6 py-3 border font-mono text-sm rounded transition-all duration-200 flex items-center justify-center gap-2"
            style={{ borderColor: "var(--border)", color: "var(--text-dim)" }}>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            download_cv();
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs flex items-center gap-2 transition-colors"
            style={{ color: "var(--text-dim)" }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            github
          </a>
          <span style={{ color: "var(--border)" }}>|</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs flex items-center gap-2 transition-colors"
            style={{ color: "var(--text-dim)" }}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            linkedin
          </a>
          <span style={{ color: "var(--border)" }}>|</span>
          <a href={`mailto:${personalInfo.email}`}
            className="font-mono text-xs transition-colors"
            style={{ color: "var(--text-dim)" }}>
            email
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-current to-transparent" style={{ color: "var(--text-dim)" }} />
      </div>
    </section>
  );
}
