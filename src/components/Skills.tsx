"use client";

import { skillGroups } from "@/data/data";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

export default function Skills() {
  const sectionRef = useRevealOnScroll<HTMLElement>(80);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6"
      style={{ backgroundColor: "color-mix(in srgb, var(--surface) 40%, transparent)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-12">
          <span className="section-label">02. tech_stack</span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mt-2"
            style={{ color: "var(--text)" }}>
            Skills & Tools
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <div key={group.category}
              className="animate-on-scroll glow-border rounded-lg p-5"
              style={{ backgroundColor: "var(--bg)" }}>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-lg" style={{ color: "var(--accent)" }}>{group.icon}</span>
                <h3 className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--text-dim)" }}>
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill}
                    className="px-2.5 py-1 text-xs font-mono rounded border transition-all duration-200 cursor-default"
                    style={{ backgroundColor: "var(--surface)", borderColor: "var(--border)", color: "var(--text-dim)" }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
