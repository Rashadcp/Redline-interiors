"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_ASSETS } from "@/lib/data";

interface HeroProps {
  onNavigate: (id: string) => void;
}

const HERO_WORDS = ["SPACES", "THAT", "DEFINE", "THE", "WAY", "YOU", "LIVE."];

export function Hero({ onNavigate }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.45]);

  return (
    <section ref={containerRef} className="hero" aria-labelledby="hero-title">
      <motion.div
        className="hero-image"
        style={{
          backgroundImage: `url(${STUDIO_ASSETS.hero})`,
          y: reduceMotion ? 0 : bgY,
          scale: reduceMotion ? 1 : bgScale,
        }}
        initial={reduceMotion ? false : { scale: 1.15, opacity: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: reduceMotion ? 0 : 1.8, ease: [0.2, 0.78, 0.2, 1] }}
      />
      <div className="hero-overlay" />

      <motion.div
        className="hero-content content-rail"
        style={{
          y: reduceMotion ? 0 : contentY,
          opacity: reduceMotion ? 1 : contentOpacity,
        }}
      >
        <motion.div
          initial={reduceMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-between"
        >
          <Eyebrow dark>Interior Architecture &amp; Tropical Design</Eyebrow>
          <span className="hidden md:inline-block text-[0.58rem] tracking-[0.2em] uppercase text-white/60 font-semibold">
            EST. 2026 · KOCHI, KERALA
          </span>
        </motion.div>

        <h1 id="hero-title" className="hero-title" aria-label="Spaces that define the way you live.">
          {HERO_WORDS.map((word, index) => (
            <span className="word-mask" key={word}>
              <motion.span
                initial={reduceMotion ? false : { y: "115%", rotateZ: 2 }}
                animate={{ y: 0, rotateZ: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.35 + index * 0.065,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          className="hero-bottom"
          initial={reduceMotion ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.23, 1, 0.32, 1] }}
        >
          <p>
            Thoughtfully crafted residences across Kerala and India, blending tropical modernism,
            vernacular craft, and contemporary luxury.
          </p>
          <motion.button
            className="text-arrow-link light-link group cursor-pointer"
            onClick={() => onNavigate("projects")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Our Projects</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDownRight size={19} strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
}
