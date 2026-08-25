"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_ASSETS } from "@/lib/data";

interface PhilosophyProps {
  onNavigate: (id: string) => void;
}

export function Philosophy({ onNavigate }: PhilosophyProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const xCopy = useTransform(scrollYProgress, [0, 1], ["-2%", "1%"]);
  const xImg = useTransform(scrollYProgress, [0, 1], ["2%", "-1%"]);

  return (
    <section
      ref={sectionRef}
      className="philosophy section-space relative overflow-visible"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <motion.div
        className="section-datum philosophy-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      >
        <span>01</span>
        <motion.i
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="philosophy-copy editorial-copy"
        style={{ x: reduceMotion ? 0 : xCopy }}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
      >
        <Eyebrow>Bespoke Interiors</Eyebrow>
        <h2 id="philosophy-title">
          Designed for living,
          <br />crafted for <em>comfort.</em>
        </h2>
        <motion.div
          className="copy-rule"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          style={{ originY: 0 }}
        />
        <p>
          Redline Interiors creates bespoke residential spaces, from elegant bedrooms and vibrant living areas to modern modular kitchens. We synthesize high-quality materials and intelligent design to bring your dream home to life.
        </p>
        <motion.button
          className="text-arrow-link cursor-pointer"
          onClick={() => onNavigate("about")}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Explore our interior solutions</span>
          <ArrowDownRight size={18} strokeWidth={1.5} />
        </motion.button>
      </motion.div>

      <motion.figure
        className="philosophy-image image-frame group cursor-pointer"
        style={{ x: reduceMotion ? 0 : xImg }}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.85, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="w-full h-full overflow-hidden">
          <motion.img
            src={STUDIO_ASSETS.bedroom}
            alt="Bespoke luxury bedroom interior with custom finishes"
            className="transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ y: reduceMotion ? 0 : imageY, scale: reduceMotion ? 1 : imageScale }}
          />
        </div>
        <figcaption className="transition-transform duration-300 group-hover:translate-x-1">
          <span>01</span>
          <span>Bespoke Bedroom Studies</span>
        </figcaption>
      </motion.figure>
    </section>
  );
}
