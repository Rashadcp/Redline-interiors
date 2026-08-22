"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_ASSETS } from "@/lib/data";

interface ApproachProps {
  onNavigate: (id: string) => void;
}

export function Approach({ onNavigate }: ApproachProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1]);
  const xImg = useTransform(scrollYProgress, [0, 1], ["-2%", "1%"]);
  const xCopy = useTransform(scrollYProgress, [0, 1], ["2%", "-1%"]);

  return (
    <section
      ref={sectionRef}
      className="approach overflow-hidden"
      id="about"
      aria-labelledby="approach-title"
    >
      <motion.div
        className="section-datum approach-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <span>02</span>
        <motion.i
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="approach-image image-frame overflow-hidden group cursor-pointer"
        style={{ x: reduceMotion ? 0 : xImg }}
        initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      >
        <div className="w-full h-full">
          <motion.img
            src={STUDIO_ASSETS.stair}
            alt="A sculptural staircase in a luxury contemporary villa in Kerala"
            className="transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ y: reduceMotion ? 0 : imgY, scale: reduceMotion ? 1 : imgScale }}
          />
        </div>
      </motion.div>

      <motion.div
        className="approach-copy"
        style={{ x: reduceMotion ? 0 : xCopy }}
        initial={{ opacity: 0, x: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
      >
        <Eyebrow>The Redline Approach</Eyebrow>
        <h2 id="approach-title">
          From concept
          <br />to <em>execution.</em>
        </h2>
        <p>
          From spatial orientation to respond to the tropical sun and monsoon breezes, to selecting
          reclaimed Kerala teak, Kota stone, and custom Italian finishes — we ensure every project
          embodies effortless luxury and enduring craftsmanship.
        </p>
        <motion.button
          className="round-arrow cursor-pointer"
          onClick={() => onNavigate("contact")}
          aria-label="Discover Redline Studio"
          whileHover={{ scale: 1.12, rotate: 45 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
        >
          <ArrowUpRight size={23} strokeWidth={1.45} />
        </motion.button>
        <motion.button
          className="underlined-link cursor-pointer"
          onClick={() => onNavigate("contact")}
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
        >
          Discover Redline Studio
        </motion.button>
      </motion.div>
    </section>
  );
}
