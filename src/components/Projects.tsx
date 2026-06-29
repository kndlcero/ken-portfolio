"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/data";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const toProjectSlug = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function Projects() {
  const sectionRef = useRevealOnScroll<HTMLElement>(100, 0.05);
  const [showAll, setShowAll] = useState(false);
  const [activeTag, setActiveTag] = useState("All");

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;
  const allTags = ["All", ...Array.from(new Set(projects.map((p) => p.tag).filter(Boolean)))] as string[];
  const filtered = displayed.filter((p) => activeTag === "All" || p.tag === activeTag);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.querySelectorAll(".animate-on-scroll").forEach((el) => {
        el.classList.add("visible");
      });
    }
  }, [activeTag, showAll, sectionRef]);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-12">
          <span className="section-label">03. projects</span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mt-2" style={{ color: "var(--text)" }}>
            Things I&apos;ve Built
          </h2>
        </div>

        <div className="animate-on-scroll mb-8 flex flex-wrap gap-2" role="list" aria-label="Project filters">
          {allTags.map((tag) => (
            <button key={tag} onClick={() => setActiveTag(tag)} type="button"
              className="font-mono text-xs px-3 py-1.5 rounded border transition-all duration-200"
              aria-pressed={activeTag === tag}
              style={{
                borderColor: activeTag === tag ? "var(--accent)" : "var(--border)",
                color: activeTag === tag ? "var(--accent)" : "var(--text-dim)",
                backgroundColor: activeTag === tag ? "var(--accent-glow)" : "transparent",
              }}>
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {filtered.map((project, i) => {
            const projectSlug = project.slug ?? toProjectSlug(project.title);

            return (
            <div key={`${activeTag}-${project.title}`}
              className="glow-border rounded-lg overflow-hidden flex flex-col group relative"
              style={{
                backgroundColor: "var(--surface)",
                animationName: "fadeUp",
                animationDuration: "0.35s",
                animationFillMode: "both",
                animationDelay: `${i * 50}ms`,
              }}>
              <Link href={`/projects/${projectSlug}`} className="absolute inset-0 z-10" aria-label={`Open ${project.title} project details`} />
              {project.image && (
                <div className="relative w-full h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                </div>
              )}

              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {project.tag && (
                          <span className="font-mono text-[10px] border rounded px-1.5 py-0.5"
                            style={{ color: "var(--accent)", borderColor: "var(--accent)", backgroundColor: "var(--accent-glow)" }}>
                            {project.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold transition-colors group-hover:opacity-80"
                        style={{ color: "var(--text)" }}>
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{project.role}</p>
                    </div>
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="transition-colors shrink-0 ml-2 relative z-20" style={{ color: "var(--text-dim)" }}
                        aria-label={`View ${project.title} on GitHub`}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {project.description.map((d) => (
                      <li key={d} className="text-sm flex items-start gap-2" style={{ color: "var(--text-dim)" }}>
                        <span className="font-mono mt-0.5 shrink-0" style={{ color: "var(--border)" }}>{">"}</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded border"
                      style={{ backgroundColor: "var(--bg)", borderColor: "var(--border)", color: "var(--text-dim)" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <span className="font-mono text-[10px] mt-4 relative z-20" style={{ color: "var(--accent)" }}>
                  view_case_file();
                </span>
              </div>
            </div>
            );
          })}
        </div>

        {rest.length > 0 && (
          <div className="text-center animate-on-scroll">
            <button onClick={() => setShowAll(!showAll)} type="button"
              className="font-mono text-sm border rounded px-5 py-2.5 transition-all duration-200"
              style={{ color: "var(--text-dim)", borderColor: "var(--border)" }}>
              {showAll ? "show_less();" : `show_more(); // +${rest.length} projects`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
