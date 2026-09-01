"use client";

import { useEffect, useRef } from "react";

const ANIMATED_SELECTOR =
  ".scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-scale";

const FAILSAFE_DELAY_MS = 2500;

function canAnimate() {
  return (
    typeof window !== "undefined" &&
    typeof IntersectionObserver !== "undefined" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function revealAll(root: HTMLElement) {
  root.classList.add("visible");
  root
    .querySelectorAll(ANIMATED_SELECTOR)
    .forEach((child) => child.classList.add("visible"));
}

export function useScrollAnimate<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!canAnimate()) {
      revealAll(el);
      return;
    }

    document.documentElement.classList.add("js-animations");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          entry.target
            .querySelectorAll(ANIMATED_SELECTOR)
            .forEach((child) => child.classList.add("visible"));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(el);
    el.querySelectorAll(ANIMATED_SELECTOR).forEach((child) =>
      observer.observe(child),
    );

    const failsafe = window.setTimeout(() => revealAll(el), FAILSAFE_DELAY_MS);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return ref;
}
