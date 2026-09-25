"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { Eyebrow } from "@/components/common/Eyebrow";
import { STUDIO_ASSETS } from "@/lib/data";

import { InteractiveBook } from "@/components/common/InteractiveBook";

interface InteractiveBookSectionProps {
  onNavigate: (id: string) => void;
}

export function InteractiveBookSection({ onNavigate }: InteractiveBookSectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="section-space relative overflow-hidden bg-[#efede8]" id="projects">
      <motion.div
        className="section-datum projects-datum"
        aria-hidden="true"
        initial={{ opacity: 0, x: -15 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        style={{ top: "clamp(47px, 7vw, 108px)", left: "clamp(24px, 4.2vw, 68px)" }}
      >
        <span>03</span>
        <motion.i
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <div className="content-rail mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="flex justify-center w-full">
            <Eyebrow>Selected Portfolio · Kerala</Eyebrow>
          </div>
          <h2 id="projects-title" className="mt-3">
            Featured
            <br />
            <em>interiors.</em>
          </h2>
        </motion.div>
      </div>

      <div className="w-full flex justify-center items-center px-4 pb-12">
        <div className="w-full max-w-4xl flex justify-center items-center">
          <InteractiveBook
            width={310}
            height={460}
            frontCover={STUDIO_ASSETS.livingFlutedConsole}
            backCover="/back_cover_new.jpg"
            innerPages={[
              STUDIO_ASSETS.kitchenChampagne,
              STUDIO_ASSETS.kitchenOlive,
              STUDIO_ASSETS.kitchenCharcoal,
              STUDIO_ASSETS.kitchenSageIsland,
              STUDIO_ASSETS.livingChandelierLounge,
              STUDIO_ASSETS.livingDualArtSectional,
              STUDIO_ASSETS.livingCurvedJapandiTv,
              STUDIO_ASSETS.livingParametricArchTv,
              STUDIO_ASSETS.bedroomMasterSuite,
              STUDIO_ASSETS.diningMarbleCounter,
              STUDIO_ASSETS.vanityGranitePendant,
              STUDIO_ASSETS.vanityTimberAlcove,
              STUDIO_ASSETS.vanityOrganicMirror,
              STUDIO_ASSETS.vanityUnderstairMarble,
            ]}
          />
        </div>
      </div>
    </section>
  );
}
