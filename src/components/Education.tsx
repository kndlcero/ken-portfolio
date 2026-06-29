"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const courses = [
  { code: "CS101", name: "Object-Oriented Programming", icon: "<>" },
  { code: "CS201", name: "Data Structures & Algorithms", icon: "DS" },
  { code: "CS301", name: "Database Management Systems", icon: "DB" },
  { code: "CS302", name: "Automata and Language Theory", icon: "FA" },
  { code: "CS401", name: "Natural Language Processing", icon: "AI" },
  { code: "CS402", name: "Principles of Programming Languages", icon: "{}" },
];

const honors = [
  { label: "President's List", detail: "1st Year -> 3rd Year" },
  { label: "Dean's List", detail: "1st Year -> 3rd Year" },
  { label: "High Honors", detail: "Class Rank 7th" },
];

export default function Education() {
  const sectionRef = useRevealOnScroll<HTMLElement>(80);

  return (
    <section id="education" ref={sectionRef} className="py-24 px-6"
      style={{ backgroundColor: "color-mix(in srgb, var(--surface) 40%, transparent)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-12">
          <span className="section-label">05. education</span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mt-2"
            style={{ color: "var(--text)" }}>
            Academic Background
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="animate-on-scroll glow-border rounded-xl p-6"
            style={{ backgroundColor: "var(--bg)" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-mono font-bold text-lg"
                style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
                PUP
              </div>
              <div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>
                  Polytechnic University of the Philippines
                </h3>
                <p className="font-mono text-xs mt-1" style={{ color: "var(--accent)" }}>
                  BS Computer Science - 3rd Year
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
                  2023 - 2027 (Expected)
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--text-dim)" }}>Academic Honors</p>
              <div className="flex flex-col gap-2">
                {honors.map((h) => (
                  <div key={h.label} className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono" style={{ color: "var(--accent)" }}>*</span>
                      <span className="text-sm font-medium" style={{ color: "var(--text)" }}>{h.label}</span>
                    </div>
                    <span className="font-mono text-xs text-right" style={{ color: "var(--text-dim)" }}>{h.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-on-scroll glow-border rounded-xl p-6"
            style={{ backgroundColor: "var(--bg)" }}>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 font-mono font-bold text-xs"
                style={{ backgroundColor: "var(--accent-glow)", color: "var(--accent)", border: "1px solid var(--accent)" }}>
                SHS
              </div>
              <div>
                <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>
                  PUP Senior High School
                </h3>
                <p className="font-mono text-xs mt-1" style={{ color: "var(--accent)" }}>
                  STEM Track
                </p>
                <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>
                  2021 - 2023
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-3"
                style={{ color: "var(--text-dim)" }}>Achievements</p>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono" style={{ color: "var(--accent)" }}>*</span>
                  <span className="text-sm" style={{ color: "var(--text)" }}>Graduated with High Honors</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono" style={{ color: "var(--accent)" }}>*</span>
                  <span className="text-sm" style={{ color: "var(--text)" }}>Class Rank - 7th out of graduating batch</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-on-scroll">
          <p className="font-mono text-[10px] uppercase tracking-widest mb-4"
            style={{ color: "var(--text-dim)" }}>Relevant Coursework</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {courses.map((course) => (
              <div key={course.code}
                className="glow-border rounded-lg px-4 py-3 flex items-center gap-3"
                style={{ backgroundColor: "var(--bg)" }}>
                <span className="font-mono text-sm shrink-0 w-7" style={{ color: "var(--accent)" }}>{course.icon}</span>
                <div>
                  <p className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>{course.code}</p>
                  <p className="text-sm font-medium leading-snug" style={{ color: "var(--text)" }}>{course.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
