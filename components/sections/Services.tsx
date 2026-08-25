"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/common/Eyebrow";
import { SERVICES } from "@/lib/data";

interface ServicesProps {
  onNavigate: (id: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="services section-space" id="services" aria-labelledby="services-title">
      <motion.div
        className="section-datum services-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
      >
        <span>04</span>
        <motion.i
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="services-intro"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
      >
        <Eyebrow>Our Services</Eyebrow>
        <h2 id="services-title">
          Home inside
          <br />
          & <em>kitchen design.</em>
        </h2>
        <p>We specialize in crafting beautiful home interiors and modern modular kitchen designs tailored to your lifestyle.</p>
      </motion.div>

      <ol className="services-list">
        {SERVICES.map((service, index) => (
          <motion.li
            key={service}
            className="group relative overflow-hidden"
            initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.65,
              delay: index * 0.06,
              ease: [0.23, 1, 0.32, 1],
            }}
          >
            <motion.span
              className="transition-colors duration-300 group-hover:text-[#c52a22]"
            >
              0{index + 1}
            </motion.span>
            <button
              className="cursor-pointer group"
              onClick={() => onNavigate("contact")}
            >
              <span className="transition-transform duration-300 ease-out group-hover:translate-x-2">
                {service}
              </span>
              <motion.span
                className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:rotate-45"
              >
                <ArrowUpRight size={20} strokeWidth={1.4} />
              </motion.span>
            </button>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
