"use client";

import { useState } from "react";
import { personalInfo } from "@/data/data";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

type FormState = "idle" | "loading" | "success" | "error";
type CopyState = "idle" | "copied" | "error";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

export default function Contact() {
  const sectionRef = useRevealOnScroll<HTMLElement>();
  const [formState, setFormState] = useState<FormState>("idle");
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const formReady = Boolean(FORMSPREE_ENDPOINT);
  const mailtoHref = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    fields.name ? `Portfolio inquiry from ${fields.name}` : "Portfolio inquiry"
  )}&body=${encodeURIComponent(
    [fields.message, fields.email ? `\n\nReply email: ${fields.email}` : ""].join("")
  )}`;

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopyState("copied");
    } catch {
      setCopyState("error");
    }
    setTimeout(() => setCopyState("idle"), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setFormState("error");
      return;
    }

    setFormState("loading");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(fields),
      });
      if (res.ok) {
        setFormState("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 px-6 max-w-6xl mx-auto">
      <div className="animate-on-scroll mb-12">
        <span className="section-label">06. contact</span>
        <h2 className="text-3xl md:text-4xl font-sans font-semibold mt-2" style={{ color: "var(--text)" }}>
          Get In Touch
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="animate-on-scroll space-y-6">
          <p className="leading-relaxed" style={{ color: "var(--text-dim)" }}>
            I&apos;m currently looking for{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>backend or software engineering internships</span>.
            If you have an opportunity, a project idea, or just want to connect - my inbox is open.
          </p>
          <div className="space-y-3">
            {[
              { label: "email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, copyable: true },
              { label: "github", value: "github.com/kndlcero", href: personalInfo.github, copyable: false },
              { label: "linkedin", value: "linkedin.com/in/kenaudielucero", href: personalInfo.linkedin, copyable: false },
              { label: "location", value: personalInfo.location, href: undefined, copyable: false },
            ].map(({ label, value, href, copyable }) => (
              <div key={label} className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-widest shrink-0 w-16"
                  style={{ color: "var(--accent)" }}>
                  {label}
                </span>
                <div className="flex items-center gap-2">
                  {href ? (
                    <a href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="font-mono text-xs transition-colors hover:underline"
                      style={{ color: "var(--text-dim)" }}>
                      {value}
                    </a>
                  ) : (
                    <span className="font-mono text-xs" style={{ color: "var(--text-dim)" }}>{value}</span>
                  )}
                  {copyable && (
                    <button onClick={copyEmail} type="button"
                      className="font-mono text-[10px] px-1.5 py-0.5 rounded border transition-all duration-200"
                      style={{
                        borderColor: copyState === "copied" ? "var(--accent)" : "var(--border)",
                        color: copyState === "copied" ? "var(--accent)" : "var(--text-dim)",
                      }}>
                      {copyState === "copied" ? "copied!" : copyState === "error" ? "failed" : "copy"}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          {formState === "success" ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 glow-border rounded-lg p-6"
              style={{ backgroundColor: "var(--surface)" }}>
              <div className="text-4xl mb-4" style={{ color: "var(--accent)" }}>OK</div>
              <p className="font-mono text-sm" style={{ color: "var(--text)" }}>Message sent.</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-dim)" }}>I&apos;ll get back to you soon.</p>
              <button onClick={() => setFormState("idle")} type="button"
                className="mt-6 font-mono text-xs transition-colors"
                style={{ color: "var(--text-dim)" }}>
                send_another();
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {!formReady && (
                <p className="font-mono text-xs rounded border px-3 py-2"
                  style={{
                    color: "var(--text-dim)",
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}>
                  Form delivery is not configured yet. Email still works.
                </p>
              )}
              {[
                { name: "name", label: "name", type: "text", placeholder: "Your Name" },
                { name: "email", label: "email", type: "email", placeholder: "your@email.com" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest block mb-1.5"
                    style={{ color: "var(--accent)" }}>
                    {label}
                  </label>
                  <input id={name} type={type} name={name} required
                    value={fields[name as keyof typeof fields]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full border rounded px-3 py-2.5 text-sm transition-colors font-sans"
                    style={{
                      backgroundColor: "var(--surface)",
                      borderColor: "var(--border)",
                      color: "var(--text)",
                    }}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest block mb-1.5"
                  style={{ color: "var(--accent)" }}>
                  message
                </label>
                <textarea id="message" name="message" required rows={5}
                  value={fields.message}
                  onChange={handleChange}
                  placeholder="What's on your mind?"
                  className="w-full border rounded px-3 py-2.5 text-sm transition-colors resize-none font-sans"
                  style={{
                    backgroundColor: "var(--surface)",
                    borderColor: "var(--border)",
                    color: "var(--text)",
                  }}
                />
              </div>
              {formState === "error" && (
                <p className="font-mono text-xs text-red-400">
                  {formReady ? "Something went wrong. Try emailing me directly." : "Add NEXT_PUBLIC_FORMSPREE_ENDPOINT to enable form submissions."}
                </p>
              )}
              {formReady ? (
                <button type="submit" disabled={formState === "loading"}
                  className="w-full py-3 font-mono text-sm font-medium rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
                  {formState === "loading" ? "sending..." : "send_message();"}
                </button>
              ) : (
                <a href={mailtoHref}
                  className="block w-full text-center py-3 font-mono text-sm font-medium rounded transition-colors"
                  style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
                  email_instead();
                </a>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
