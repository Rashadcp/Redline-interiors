"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_ASSETS } from "@/lib/data";

interface HeroProps {
  onNavigate: (id: string) => void;
}

const HERO_WORDS = ["CRAFTING", "BEAUTIFUL", "HOME", "INTERIORS."];

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
      <div className="hero-light-flare" aria-hidden="true" />
      <div className="hero-sunbeam" aria-hidden="true" />

      <motion.div
        className="hero-content content-rail flex flex-col items-start text-left"
        style={{
          y: reduceMotion ? 0 : contentY,
          opacity: reduceMotion ? 1 : contentOpacity,
        }}
      >
        <motion.div
          initial={reduceMotion ? false : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="flex items-center justify-start gap-3 mb-2"
        >
          <Eyebrow dark>Bespoke Kitchens &amp; Living Spaces</Eyebrow>
        </motion.div>

        <h1 id="hero-title" className="hero-title text-left" aria-label="Crafting beautiful home interiors.">
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
          className="hero-bottom flex flex-col items-start text-left gap-5 max-w-lg mt-6"
          initial={reduceMotion ? false : { y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95, ease: [0.23, 1, 0.32, 1] }}
        >
          <p className="text-left text-sm sm:text-base text-white/85 font-light leading-relaxed">
            Thoughtfully crafted home interiors across Kerala and India, specializing in bespoke bedrooms,
            living areas, modular kitchens, and contemporary luxury.
          </p>
          <motion.button
            className="text-arrow-link light-link group cursor-pointer inline-flex items-center gap-3 mt-1"
            onClick={() => onNavigate("projects")}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Our Projects</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDownRight size={18} strokeWidth={1.5} />
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
}
