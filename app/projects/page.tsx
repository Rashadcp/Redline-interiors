"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { PROJECTS } from "@/lib/data";
import { ArrowUpRight, LayoutList, Columns2, Compass, Sparkles, MapPin, Maximize2 } from "lucide-react";
import Link from "next/link";

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"showcase" | "index">("showcase");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="site-shell bg-[#f4f2ee] text-[#161616] min-h-screen">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Editorial Hero Header */}
        <section className="content-rail pb-10 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <Eyebrow>Archive & Portfolio · Redline Interiors</Eyebrow>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-3">
                Selected <em>works</em> &amp; spatial studies.
              </h1>
              <p className="text-sm md:text-base text-[#746f68] font-light leading-relaxed mt-4">
                A curated survey of bespoke home interiors, modular kitchens, and tailored living environments created across South India.
              </p>
            </div>

            {/* Right Controls & Stats */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
              <div className="flex items-center gap-6 text-xs text-[#746f68] border-l border-[#161616]/10 pl-4 py-1">
                <div>
                  <span className="block font-mono font-bold text-[#161616] text-sm">08</span>
                  <span className="tracking-wider uppercase text-[0.6rem]">Commissions</span>
                </div>
                <div>
                  <span className="block font-mono font-bold text-[#161616] text-sm">100%</span>
                  <span className="tracking-wider uppercase text-[0.6rem]">Bespoke Craft</span>
                </div>
              </div>

              {/* View Mode Switcher */}
              <div className="flex items-center gap-1 bg-[#e8e5de] p-1 rounded-sm border border-[#161616]/10">
                <button
                  onClick={() => setViewMode("showcase")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-wider uppercase font-semibold transition-all rounded-sm ${
                    viewMode === "showcase"
                      ? "bg-[#161616] text-white shadow-sm"
                      : "text-[#746f68] hover:text-[#161616]"
                  }`}
                  title="Showcase Split View"
                >
                  <Columns2 size={13} />
                  <span className="hidden sm:inline">Showcase</span>
                </button>
                <button
                  onClick={() => setViewMode("index")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[0.65rem] tracking-wider uppercase font-semibold transition-all rounded-sm ${
                    viewMode === "index"
                      ? "bg-[#161616] text-white shadow-sm"
                      : "text-[#746f68] hover:text-[#161616]"
                  }`}
                  title="Index Register Table"
                >
                  <LayoutList size={13} />
                  <span className="hidden sm:inline">Index</span>
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* View Mode 1: Minimalist Architectural Split Showcase */}
        {viewMode === "showcase" && (
          <section className="content-rail py-12 md:py-16">
            <div className="flex flex-col gap-14 md:gap-20">
              {PROJECTS.map((project, index) => {
                const isEven = index % 2 === 1;
                return (
                  <motion.article
                    key={project.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="group"
                  >
                    <div
                      className={`flex flex-col ${
                        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                      } gap-8 lg:gap-14 items-center`}
                    >
                      {/* Reduced Architectural Image Container */}
                      <div className="w-full lg:w-5/12 max-w-lg lg:max-w-none relative flex-shrink-0">
                        <div className="relative aspect-[16/11] max-h-[260px] sm:max-h-[300px] md:max-h-[340px] overflow-hidden bg-[#242321] rounded-sm shadow-sm group-hover:shadow-md transition-shadow duration-500">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          {/* Location & Year Tag */}
                          <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                            <span className="bg-[#161616]/85 backdrop-blur-md px-2.5 py-0.5 text-[0.58rem] tracking-widest uppercase text-white font-medium rounded-sm shadow-sm flex items-center gap-1.5">
                              <MapPin size={10} className="text-[#c52a22]" />
                              {project.location}
                            </span>
                          </div>

                          <div className="absolute bottom-3.5 right-3.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[0.58rem] tracking-widest uppercase text-[#161616] font-mono font-bold rounded-sm shadow-sm">
                            {project.area}
                          </div>
                        </div>
                      </div>

                      {/* Details & Specs Container */}
                      <div className="w-full lg:w-7/12 flex flex-col justify-center">
                        {/* Index Header */}
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-[#c52a22] font-semibold">
                            {project.number}
                          </span>
                          <span className="w-8 h-[1px] bg-[#161616]/20" />
                          <span className="text-[0.65rem] tracking-[0.18em] uppercase font-bold text-[#746f68]">
                            {project.category}
                          </span>
                          <span className="text-[0.65rem] font-mono text-[#8a857e]">
                            · {project.year}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="font-serif text-3xl sm:text-4xl text-[#161616] group-hover:text-[#c52a22] transition-colors leading-[1.12] mt-3">
                          {project.title}
                        </h2>

                        {/* Scope & Description */}
                        <p className="text-sm text-[#5a5651] font-light leading-relaxed mt-4 border-l-2 border-[#c52a22]/30 pl-3.5 py-0.5">
                          {project.scope}
                        </p>

                        {/* Architectural Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 py-5 my-6 border-y border-[#161616]/10 text-xs">
                          <div>
                            <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">Location</span>
                            <span className="font-medium text-[#161616]">{project.location}</span>
                          </div>
                          <div>
                            <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">Footprint</span>
                            <span className="font-mono font-medium text-[#161616]">{project.area}</span>
                          </div>
                          <div>
                            <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">Category</span>
                            <span className="font-medium text-[#161616]">{project.category}</span>
                          </div>
                          <div>
                            <span className="block text-[0.6rem] tracking-wider uppercase text-[#8a857e]">Completion</span>
                            <span className="font-mono font-medium text-[#161616]">{project.year}</span>
                          </div>
                        </div>

                        {/* Link CTA */}
                        <div>
                          <Link
                            href="/contact"
                            className="inline-flex items-center gap-3 text-xs tracking-wider uppercase font-bold text-[#161616] hover:text-[#c52a22] transition-colors group/btn"
                          >
                            <span>Commission Similar Space</span>
                            <span className="w-8 h-8 rounded-full border border-[#161616]/20 flex items-center justify-center group-hover/btn:bg-[#161616] group-hover/btn:border-[#161616] group-hover/btn:text-white transition-all duration-300">
                              <ArrowUpRight size={14} />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </section>
        )}

        {/* View Mode 2: Minimalist Architectural Register Table */}
        {viewMode === "index" && (
          <section className="content-rail py-12 md:py-16">
            <div className="border-t border-[#161616]/15">
              {PROJECTS.map((project) => (
                <Link
                  key={project.number}
                  href="/contact"
                  onMouseEnter={() => setHoveredProject(project.number)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-[#161616]/10 hover:bg-white/60 px-4 -mx-4 transition-all duration-300"
                >
                  <div className="flex items-baseline gap-6 md:gap-10">
                    <span className="font-mono text-sm text-[#c52a22] font-semibold w-8">
                      {project.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl text-[#161616] group-hover:text-[#c52a22] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#746f68] mt-1 md:hidden">
                        {project.location} · {project.area}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:flex items-center gap-10 text-xs">
                    <span className="text-[#746f68] uppercase tracking-wider text-[0.65rem] w-32 text-left">
                      {project.category}
                    </span>
                    <span className="text-[#161616] font-medium w-36 text-left">
                      {project.location}
                    </span>
                    <span className="font-mono text-[#746f68] w-24 text-left">
                      {project.area}
                    </span>
                    <span className="font-mono text-[#8a857e] w-16 text-left">
                      {project.year}
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#161616]/15 flex items-center justify-center group-hover:bg-[#161616] group-hover:text-white transition-all">
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Commission Callout Banner */}
        <section className="content-rail pb-20 md:pb-28">
          <div className="bg-[#161616] text-[#efede8] p-8 sm:p-12 md:p-16 rounded-sm relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-12 translate-y-12">
              <Compass size={320} strokeWidth={0.5} />
            </div>

            <div className="relative z-10 max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#c52a22] font-semibold mb-3">
                <Sparkles size={13} />
                Bespoke Engagements
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal leading-tight text-white">
                Have a residence or space to elevate?
              </h2>
              <p className="text-[#a09c95] font-light text-sm sm:text-base mt-4 leading-relaxed">
                We accept a limited number of residential and commercial commissions per year to ensure rigorous attention to every joint, texture, and light fixture.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contact"
                  className="bg-[#c52a22] hover:bg-[#a8201a] text-white px-7 py-3.5 text-xs tracking-widest uppercase font-bold transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
                >
                  <span>Start A Project Consultation</span>
                  <ArrowUpRight size={15} />
                </Link>
                <a
                  href="tel:+918136940526"
                  className="border border-white/20 hover:border-white text-white px-6 py-3.5 text-xs tracking-widest uppercase font-medium transition-all"
                >
                  Call +91 81369 40526
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
