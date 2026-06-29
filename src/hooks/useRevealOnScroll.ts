"use client";

import { useEffect, useRef } from "react";

export function useRevealOnScroll<T extends HTMLElement>(delay = 100, threshold = 0.1) {
  const sectionRef = useRef<T>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.querySelectorAll(".animate-on-scroll").forEach((el, index) => {
            setTimeout(() => el.classList.add("visible"), index * delay);
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return sectionRef;
}
