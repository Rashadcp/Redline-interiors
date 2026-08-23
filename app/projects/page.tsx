"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Eyebrow } from "@/components/common/Eyebrow";
import { PROJECTS, ProjectItem } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const FILTER_TABS = [
  { label: "All Works", value: "all" },
  { label: "Villas & Estates", value: "villa" },
  { label: "Coastal & Waterfront", value: "waterfront" },
  { label: "Heritage & Modernism", value: "heritage" },
];

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = PROJECTS.filter((p) => {
    if (activeTab === "villa") return p.category.toLowerCase().includes("residence") || p.title.toLowerCase().includes("villa");
    if (activeTab === "waterfront") return p.category.toLowerCase().includes("waterfront") || p.title.toLowerCase().includes("marine") || p.title.toLowerCase().includes("vembanad");
    if (activeTab === "heritage") return p.category.toLowerCase().includes("heritage");
    return true;
  });

  return (
    <div className="site-shell bg-[#efede8] text-[#161616]">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Hero Section */}
        <section className="content-rail pb-8 border-b border-[#161616]/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6"
          >
            <div>
              <Eyebrow>Curated Architecture · Kerala & South India</Eyebrow>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight text-[#161616] leading-[1.05] mt-2">
                Selected <em>works.</em>
              </h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {FILTER_TABS.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-3.5 py-1.5 text-[0.62rem] tracking-[0.14em] uppercase font-bold transition-all border cursor-pointer ${
                    activeTab === tab.value
                      ? "bg-[#161616] text-white border-[#161616]"
                      : "bg-transparent text-[#746f68] border-[#161616]/15 hover:border-[#161616] hover:text-[#161616]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Gallery Showcase */}
        <section className="content-rail py-10 md:py-16">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <motion.article
                  key={project.number}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white p-3.5 border border-[#161616]/10 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative overflow-hidden aspect-[16/11] max-h-[260px] bg-[#242321]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-[#161616]/80 backdrop-blur-md px-2.5 py-0.5 text-[0.58rem] tracking-wider uppercase text-white font-medium">
                      {project.location}
                    </div>
                    <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md px-2.5 py-0.5 text-[0.58rem] tracking-wider uppercase text-[#161616] font-bold">
                      {project.area}
                    </div>
                  </div>

                  <div className="pt-4 flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[0.68rem] font-mono text-[#c52a22] font-semibold block mb-0.5">
                        {project.number} / {project.year}
                      </span>
                      <h2 className="font-serif text-lg sm:text-xl text-[#161616] group-hover:text-[#c52a22] transition-colors leading-snug">
                        {project.title}
                      </h2>
                      <p className="text-[0.62rem] text-[#746f68] uppercase tracking-wider mt-0.5">
                        {project.category}
                      </p>
                      <p className="text-[0.68rem] text-[#8a857e] italic font-serif mt-0.5">
                        Scope: {project.scope}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="w-8 h-8 rounded-full border border-[#161616]/20 flex items-center justify-center group-hover:bg-[#c52a22] group-hover:border-[#c52a22] group-hover:text-white transition-all duration-300 flex-shrink-0 mt-1"
                    >
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
