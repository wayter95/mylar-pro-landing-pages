"use client";

import { useEffect, useRef } from "react";

export function useScrollAnimate<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // Also animate children with scroll-animate class
            entry.target
              .querySelectorAll(
                ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
              )
              .forEach((child) => child.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);

    // Also observe children
    el.querySelectorAll(
      ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale"
    ).forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return ref;
}
