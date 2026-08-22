"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface EditorialMarqueeProps {
  dark?: boolean;
}

export function EditorialMarquee({ dark = false }: EditorialMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth scroll translation for continuous motion
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);

  return (
    <div
      ref={containerRef}
      className={`py-5 md:py-7 overflow-hidden select-none relative z-10 border-y ${
        dark
          ? "bg-[#161616] text-[#f7f5f0] border-white/10"
          : "bg-[#efede8] text-[#161616] border-[#d7d1c8]"
      }`}
      aria-hidden="true"
    >
      {/* Moving Ambient Redline Glow Effect from Left to Right */}
      {!reduceMotion && (
        <>
          {/* Main sweeping ambient red glow */}
          <motion.div
            className="absolute inset-y-0 w-[45vw] pointer-events-none z-0 blur-2xl opacity-60"
            style={{
              background: dark
                ? "linear-gradient(90deg, transparent 0%, rgba(197, 42, 34, 0.5) 50%, transparent 100%)"
                : "linear-gradient(90deg, transparent 0%, rgba(197, 42, 34, 0.25) 50%, transparent 100%)",
            }}
            animate={{
              x: ["-50vw", "110vw"],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Top border glowing light beam */}
          <motion.div
            className="absolute top-0 left-0 w-[30vw] h-[2px] pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #ef554e 50%, transparent 100%)",
              boxShadow: "0 0 10px #ef554e, 0 0 20px #c52a22",
            }}
            animate={{
              x: ["-30vw", "110vw"],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Bottom border glowing light beam */}
          <motion.div
            className="absolute bottom-0 left-0 w-[30vw] h-[2px] pointer-events-none z-20"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #c52a22 50%, transparent 100%)",
              boxShadow: "0 0 10px #c52a22, 0 0 20px rgba(197, 42, 34, 0.6)",
            }}
            animate={{
              x: ["-30vw", "110vw"],
            }}
            transition={{
              duration: 3.6,
              delay: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </>
      )}

      {/* Marquee Content */}
      <motion.div
        className="flex whitespace-nowrap items-center gap-8 md:gap-12 font-serif text-lg sm:text-2xl md:text-3xl tracking-[0.16em] uppercase relative z-10"
        style={{ x: reduceMotion ? 0 : x }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-14">
            <span className="font-light tracking-wider drop-shadow-sm">
              REDLINE <span className="font-normal italic text-[#c52a22]">INTERIORS</span>
            </span>
            <span className="text-[#c52a22] text-xl md:text-2xl font-sans font-extrabold opacity-85 animate-pulse">
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
