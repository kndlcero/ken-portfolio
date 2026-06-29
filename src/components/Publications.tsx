"use client";

import { publications } from "@/data/data";

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6" style={{ backgroundColor: "color-mix(in srgb, var(--surface) 40%, transparent)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="section-label">04. research</span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mt-2" style={{ color: "var(--text)" }}>
            Publications & Presentations
          </h2>
        </div>

        <div className="space-y-6">
          {publications.map((pub) => (
            <div key={pub.title} className="glow-border rounded-lg p-6 relative overflow-hidden"
              style={{ backgroundColor: "var(--bg)" }}>
              <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-lg"
                style={{ backgroundColor: "var(--accent)" }} />
              <div className="pl-4">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-[10px] border rounded px-2 py-0.5 uppercase tracking-widest"
                    style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "var(--accent-glow)" }}>
                    {pub.role}
                  </span>
                  <span className="font-mono text-[10px]" style={{ color: "var(--text-dim)" }}>{pub.date}</span>
                </div>
                <h3 className="text-base font-semibold mb-2 leading-snug" style={{ color: "var(--text)" }}>
                  {pub.title}
                </h3>
                <p className="font-mono text-xs mb-2" style={{ color: "var(--accent)" }}>{pub.event}</p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-dim)" }}>{pub.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
