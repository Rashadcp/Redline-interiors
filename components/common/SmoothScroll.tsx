"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (value) => 1 - Math.pow(1 - value, 4),
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: false,
    });

    let animationFrame = 0;
    const animate = (time: number) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  return null;
}
