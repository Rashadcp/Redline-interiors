"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_INFO } from "@/lib/data";

export function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="contact-cta relative overflow-hidden" id="contact" aria-labelledby="contact-title">
      <motion.div
        className="section-datum contact-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <span>05</span>
        <motion.i
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="contact-line"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.175, 1] }}
        style={{ originX: 0.5 }}
      />

      <motion.div
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
      >
        <Eyebrow>New Commissions</Eyebrow>
        <h2 id="contact-title">
          Bring us
          <br />
          the <em>plan.</em>
        </h2>

        <motion.a
          href={`mailto:${STUDIO_INFO.email}`}
          className="cta-button inline-flex items-center gap-6 group cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          <span>Share a Brief</span>
          <motion.span
            className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          >
            <ArrowUpRight size={21} strokeWidth={1.5} />
          </motion.span>
        </motion.a>
      </motion.div>
    </section>
  );
}
