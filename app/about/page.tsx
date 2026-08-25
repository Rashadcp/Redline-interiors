"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { EditorialMarquee } from "@/components/common/EditorialMarquee";
import { STUDIO_ASSETS, STUDIO_INFO } from "@/lib/data";
import { CheckCircle2, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="site-shell bg-[#f7f5f0] text-[#161616]">
      <Header />

      <main className="pt-32 md:pt-40">
        {/* Page Hero */}
        <section className="content-rail pb-16 md:pb-24 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Eyebrow>Studio Heritage · Kerala, India</Eyebrow>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-3">
              Crafting architecture grounded in <em className="text-[#c52a22] font-normal">climate, craft & calm.</em>
            </h1>
            <p className="text-lg md:text-xl text-[#615d57] leading-relaxed mt-6 font-light">
              Founded on the belief that spaces in Kerala must breathe with the monsoon winds,
              respect native materials, and provide sanctuary for contemporary life.
            </p>
          </motion.div>
        </section>

        {/* Narrative & Visual Story */}
        <section className="content-rail py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#161616]">
              A dialogue between <br />
              <em className="text-[#c52a22]">tradition & modernism.</em>
            </h2>
            <div className="w-12 h-[2px] bg-[#c52a22]" />
            <p className="text-[#615d57] leading-relaxed">
              At Redline Interiors, architecture is not an imposition on the land; it is a quiet conversation
              with the tropical environment. We weave internal courtyards, teak wood joinery, laterite stone textures,
              and expansive louvers that welcome natural ventilation.
            </p>
            <p className="text-[#615d57] leading-relaxed">
              With a team of seasoned architects, spatial designers, and master craftsmen across Kochi, Calicut,
              and Trivandrum, our practice delivers turnkey residences that endure for generations.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#161616]/10">
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-[#c52a22]">120+</span>
                <span className="text-xs uppercase tracking-widest text-[#746f68] font-bold">Curated Residences</span>
              </div>
              <div>
                <span className="block font-serif text-3xl md:text-4xl text-[#c52a22]">100%</span>
                <span className="text-xs uppercase tracking-widest text-[#746f68] font-bold">Bespoke Joinery</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-6 relative">
            <div className="relative overflow-hidden rounded-none shadow-xl border border-black/10">
              <img
                src={STUDIO_ASSETS.living}
                alt="Redline Interiors Studio craft"
                className="w-full h-[340px] md:h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        <EditorialMarquee />

        {/* Studio Location & Workshop Showcase */}
        <section className="content-rail py-20 md:py-28">
          <div className="bg-white p-8 md:p-14 border border-[#161616]/10 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <Eyebrow>Studio &amp; Workshop</Eyebrow>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#161616] mt-2">
                Visit our studio in <em>Thalappara.</em>
              </h2>
              <p className="text-sm text-[#615d57] font-light mt-3 max-w-lg leading-relaxed">
                {STUDIO_INFO.address.line1}, {STUDIO_INFO.address.line2}
              </p>
              <div className="flex items-center gap-4 mt-4 text-xs font-semibold text-[#161616]">
                <span className="text-[#c52a22] font-mono">{STUDIO_INFO.phone}</span>
                <span>•</span>
                <span className="text-[#746f68]">{STUDIO_INFO.hours}</span>
              </div>
            </div>

            <a
              href={STUDIO_INFO.address.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#161616] hover:bg-[#c52a22] text-white text-xs uppercase tracking-widest font-bold transition-all shadow-sm flex items-center gap-2 flex-shrink-0"
            >
              <MapPin size={14} />
              <span>Get Directions</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
