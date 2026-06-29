"use client";

import Image from "next/image";
import { personalInfo, certifications } from "@/data/data";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const timelineItems = [
  { year: "2021", label: "PUP Senior High School", detail: "STEM Track - High Honors - Class Rank 7th" },
  { year: "2023", label: "BS Computer Science @ PUP", detail: "President's List & Dean's List every semester" },
  { year: "2025", label: "WCTP 2025 - International Publication", detail: "Special contributor on disaster response algorithms", highlight: true },
  { year: "2027", label: "Expected Graduation", detail: "Bachelor of Science in Computer Science", future: true },
];

export default function About() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll mb-12">
          <span className="section-label">01. about_me</span>
          <h2 className="text-3xl md:text-4xl font-sans font-semibold mt-2" style={{ color: "var(--text)" }}>
            Who I am
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 mb-14">
          <div className="animate-on-scroll shrink-0 flex flex-col items-center gap-3">
            <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2" style={{ borderColor: "var(--accent)" }}>
              <Image src="/images/avatar.jpg" sizes="160px" alt="Ken Audie Lucero" fill className="object-cover" priority />
            </div>
            <div className="text-center">
              <p className="font-mono text-xs" style={{ color: "var(--accent)" }}>Ken Audie S. Lucero</p>
              <p className="font-mono text-[10px] mt-0.5" style={{ color: "var(--text-dim)" }}>CS @ PUP - 3rd Year</p>
            </div>
          </div>

          <div className="animate-on-scroll space-y-5 flex-1">
            <p className="leading-relaxed text-base" style={{ color: "var(--text-dim)" }}>{personalInfo.summary}</p>

            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li key={cert.name} className="flex items-start gap-3 text-sm">
                    <span className="font-mono mt-0.5" style={{ color: "var(--accent)" }}>{">"}</span>
                    <div>
                      <span style={{ color: "var(--text)" }}>{cert.name}</span>
                      <span style={{ color: "var(--text-dim)" }}> - {cert.issuer} - {cert.date}</span>
                      {cert.url && (
                        <a href={cert.url} target="_blank" rel="noopener noreferrer"
                          className="ml-2 font-mono text-xs hover:underline" style={{ color: "var(--accent)" }}>
                          [verify]
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>Affiliations</h3>
              <ul className="space-y-2 text-sm" style={{ color: "var(--text-dim)" }}>
                {["GDG PUP Software Cadet (2023-2024)", "GDG PUP Data and ML Cadet (2024-2025)", "Cisco NetConnect PUP Networking Cadet (2024-2025)"].map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="font-mono mt-0.5" style={{ color: "var(--border)" }}>{">"}</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <h3 className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: "var(--accent)" }}>
              WCTP 2025 - Presentation
            </h3>
            <div className="relative w-full h-56 rounded-xl overflow-hidden border" style={{ borderColor: "var(--border)" }}>
              <Image src="/images/wctp.webp" sizes="(max-width: 768px) 100vw, 50vw" alt="WCTP 2025 group photo" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-4">
                <p className="font-mono text-xs text-white/90">14th Workshop on Computation: Theory and Practice</p>
                <p className="font-mono text-[10px] text-white/60">December 3, 2025</p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll">
            <h3 className="font-mono text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)" }}>Timeline</h3>
            <div className="relative pl-6 space-y-8" style={{ borderLeft: "1px solid var(--border)" }}>
              {timelineItems.map((item) => (
                <div key={item.year} className="relative">
                  <div className="absolute -left-[25px] top-0.5 w-3 h-3 rounded-full border-2"
                    style={{
                      borderColor: item.highlight ? "var(--accent)" : "var(--text-dim)",
                      backgroundColor: item.highlight ? "var(--accent-glow)" : "var(--bg)",
                    }} />
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs shrink-0 w-10"
                      style={{ color: item.highlight ? "var(--accent)" : "var(--text-dim)" }}>
                      {item.year}
                    </span>
                    <div>
                      <p className="text-sm font-medium" style={{ color: item.future ? "var(--text-dim)" : "var(--text)" }}>
                        {item.label}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--text-dim)" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
